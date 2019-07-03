const parse = require('csv-parse/lib/sync')
const { get } = require('r2')
const { config } = require('dotenv')
const {readFileSync, writeFileSync} = require('fs')
const { join } = require('path')

config()

const parseFile = file => parse(readFileSync(file, 'utf8').trim(), { columns: true, skip_empty_lines: true })

const mapsAPI = async (address, postalCode) => {
  try {
    return get(
      'https://maps.googleapis.com/maps/api/geocode/json?'
      + `key=${process.env.GOOGLE_MAPS_API_KEY}`
      + '&region=ca'
      + '&components='
      + 'country:CA'
      + `|postal_code:${postalCode}`
      + `&address=${address}`
    ).json
  } catch (err) {
    console.error('Failed to fetch maps API data:', err)
    return {}
  }
}

const main = async () => {

  const CSVDataDir = join(__dirname, 'assets', 'csv')

  const storesPath = join(CSVDataDir, 'stores.csv')
  const salesPath = join(CSVDataDir, 'sales.csv')

  const allStoresArray = parseFile(storesPath)
  const salesArray = [...new Set(parseFile(salesPath).map(sale => sale['LicNumber']))]

  const allStores = {}

  for (const store of allStoresArray) {
    if (!allStores.hasOwnProperty(store['LicNumber'])) {
      allStores[store['LicNumber']] = store
    } else {
      console.log(`Duplicate LicNumber: ${store['LicNumber']}`)
    }
  }

  const finalData = []

  const carriers = salesArray
    .map(sale => allStores[sale])
    .filter(carrier => carrier !== undefined)

  let id = 0
  let notOK = 0

  for (const carrier of carriers) {
    let results
    results = await mapsAPI(carrier['StoreAddress1'], carrier['StorePC'])
    if (results.status === 'ZERO_RESULTS') {
      results = await mapsAPI(carrier['StoreAddress2'], carrier['StorePC'])
    }
    if (results.status === 'ZERO_RESULTS') {
      results = await mapsAPI(carrier['StoreAddress3'], carrier['StorePC'])
    }
    if (results.status === 'OK') {
      if (results.hasOwnProperty('results')) {
        const result = results.results[0]
        if (result.hasOwnProperty('formatted_address') && result.hasOwnProperty('geometry')) {
          if (result.geometry.hasOwnProperty('location')) {
            if (result.geometry.location.hasOwnProperty('lat') && result.geometry.location.hasOwnProperty('lng')) {
              const data = {
                id: ++id,
                name: carrier['LicName'],
                address: result.formatted_address,
                extra: `${carrier['LicName']},${result.formatted_address}`,
                lat: result.geometry.location.lat,
                lng: result.geometry.location.lng
              }
              finalData.push(data)
            }
          }
        }
      }
    } else {
      console.log(carrier)
    }
  }

  finalData.forEach(console.log)

  writeFileSync(join(__dirname, 'assets', 'js', 'markers-1.json'), JSON.stringify(finalData, null, 2), 'utf8')

}

return main()
