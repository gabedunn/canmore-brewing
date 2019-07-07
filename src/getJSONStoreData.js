/*
 * Gabe Dunn 2019
 * File that gathers store data from CSVs, pulls address info from Google Maps API, and writes a list of stores that
 * have recently purchased beer in JSON format to be used for map markers.
 */

const parse = require('csv-parse/lib/sync')
const { get } = require('r2')
const { config } = require('dotenv')
const { readFileSync, writeFileSync } = require('fs')
const { join } = require('path')

// Run the dotenv config function to populate process.env
config()

// Function to parse the data from the csv file supplied. Trims the original fs read and enables columns.
const parseFile = file => parse(readFileSync(file, 'utf8').trim(), { columns: true, skip_empty_lines: true })

// Function that returns Google Maps API info given an address and a postal code.
const mapsAPI = async (address, postalCode) => {
  try {
    // Sends a request to the API endpoint with the API key and convert to JSON.
    return get(
      'https://maps.googleapis.com/maps/api/geocode/json?' +
        // Add the API key to the query.
        `key=${process.env.GOOGLE_MAPS_API_KEY}` +
        // Limit results to region=ca (Canada).
        '&region=ca' +
        '&components=' +
        'country:CA' +
        // Limit results to the area of the supplied postal code.
        `|postal_code:${postalCode}` +
        // Passes the address as the main argument.
        `&address=${address}`
    ).json
  } catch (err) {
    console.error('Failed to fetch maps API data:', err)
    return {}
  }
}

// Main function to get around top level async/await restrictions.
const main = async () => {
  // Set the directory that stores the CSV files.
  const CSVDataDir = join(__dirname, 'assets', 'csv')

  // Set the file paths for the list of stores and sales.
  const storesPath = join(CSVDataDir, 'stores.csv')
  const salesPath = join(CSVDataDir, 'sales.csv')

  // Create an array with the parsed data for all of the stores.
  const allStoresArray = parseFile(storesPath)

  // Create an array from a set (to remove duplicate values) of the parses sales data (stripped down to only the license
  // number to be used as a key for future reference).
  const salesArray = [...new Set(parseFile(salesPath).map(sale => sale['LicNumber']))]

  // Create an empty object to add all the store data to with the license number as the key.
  const allStores = {}

  // For each store in the allStoresArray, add it to the allStores object with the license number as the key.
  for (const store of allStoresArray) {
    // If allStores doesn't already have the current license number as a key, add the current store with the license
    // number as the key. Otherwise log the duplicate.
    if (!allStores.hasOwnProperty(store['LicNumber'])) {
      allStores[store['LicNumber']] = store
    } else {
      console.log(`Duplicate LicNumber: ${store['LicNumber']}`)
    }
  }

  // Set the initial store ID to be 0.
  let id = 0

  // Map each sale in salesArray to a store from allStores, and filter out undefined results.
  const carriers = salesArray
    .map(sale => allStores[sale])
    .filter(carrier => carrier !== undefined)

  // Set the name of the tasting room.
  const CBCName = 'CANMORE BREWING COMPANY LTD.'

  // Push the tasting room data to the front of the carriers array.
  carriers.unshift({
    'LicName': CBCName,
    'StoreAddress1': '1460 Railway Avenue, Canmore, AB, Canada',
    'StorePC': 'T1W 1P6'
  })

  // Create a final data array that contains the result of resolved promises from each carrier's Google Maps API calls.
  const finalData = await Promise.all(carriers.map(async carrier => {
    // Initialize a variable to use for the API results.
    let results

    // Set the results to an API call from the first address specified.
    results = await mapsAPI(carrier['StoreAddress1'], carrier['StorePC'])

    // If there aren't any results, try again with the second address.
    if (results.status === 'ZERO_RESULTS') {
      results = await mapsAPI(carrier['StoreAddress2'], carrier['StorePC'])
    }

    // Once again if there aren't any results, try for a final time with the third address.
    if (results.status === 'ZERO_RESULTS') {
      results = await mapsAPI(carrier['StoreAddress3'], carrier['StorePC'])
    }

    // If there are results (status === 'OK'), test for a bunch of properties on the results array and return an object
    // with all of the required data.
    if (results.status === 'OK') {
      // If the results have a results property, continue.
      if (results.hasOwnProperty('results')) {
        // Use the first result by default.
        const result = results.results[0]
        // If the result has a formatted address and a geometry property, continue.
        if (result.hasOwnProperty('formatted_address') && result.hasOwnProperty('geometry')) {
          // If geometry has a location property, continue.
          if (result.geometry.hasOwnProperty('location')) {
            // If location has both lat and lng properties, continue.
            if (result.geometry.location.hasOwnProperty('lat') && result.geometry.location.hasOwnProperty('lng')) {
              // Return an object to be used as a marker on the map.
              return {
                // If the name of the carrier is the same as the tasting room, set the ID to 0.
                id: carrier['LicName'] === CBCName ? 0 : ++id,
                name: carrier['LicName'],
                address: result.formatted_address,
                extra: `${carrier['LicName']},${result.formatted_address}`,
                lat: result.geometry.location.lat,
                lng: result.geometry.location.lng
              }
            }
          }
        }
      }
    } else {
      // If there aren't any results or the status isn't 'OK', log the troublesome carrier.
      console.log(carrier)
    }
  }))

  // Not 100% necessary. Sorts the finalData array by ID.
  finalData.sort((a, b) => a.id - b.id)

  // Log each of the items in finalData (uses forEach to bypass 100 item restriction on logging a single array).
  finalData.forEach(console.log)

  // Write the data to a temp file (markers-1.json) in JSON format.
  writeFileSync(join(__dirname, 'assets', 'js', 'markers-1.json'), JSON.stringify(finalData, null, 2), 'utf8')
}

// Run the main function.
return main()
