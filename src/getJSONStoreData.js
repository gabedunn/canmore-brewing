const parse = require('csv-parse/lib/sync')
const fs = require('fs')
const { join } = require('path')

const parseFile = file => parse(fs.readFileSync(file, 'utf8').trim(), { columns: true, skip_empty_lines: true })

const CSVDataDir = join(__dirname, 'csvData')

const storesPath = join(CSVDataDir, 'stores.csv')
const salesPath = join(CSVDataDir, 'sales.csv')

const allStoresArray = parseFile(storesPath)
const salesArray = [... new Set(parseFile(salesPath).map(sale => sale['LicNumber']))]

const allStores = {}

for (const store of allStoresArray) {
  if (!allStores.hasOwnProperty(store['LicNumber'])) {
    allStores[store['LicNumber']] = store
  } else {
    console.log(`Duplicate LicNumber: ${store['LicNumber']}`)
  }
}

const carriers = salesArray.map(sale => allStores[sale])

console.log(carriers)
