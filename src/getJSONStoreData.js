const parse = require('csv-parse/lib/sync')
const fs = require('fs')
const { join } = require('path')

const parseFile = file => parse(fs.readFileSync(file, 'utf8').trim(), { columns: true, skip_empty_lines: true })

const CSVDataDir = join(__dirname, 'csvData')

const storesPath = join(CSVDataDir, 'stores.csv')
const salesPath = join(CSVDataDir, 'sales.csv')

const storesArray = parseFile(storesPath)
const salesArray = [... new Set(parseFile(salesPath).map(sale => sale['LicNumber']))]

const stores = {}

for (const store of storesArray) {
  if (!stores.hasOwnProperty(store['LicNumber'])) {
    stores[store['LicNumber']] = store
  } else {
    console.log(`Duplicate LicNumber: ${store['LicNumber']}`)
  }
}

const sales = salesArray.map(sale => stores[sale])

// console.log(stores)
console.log(sales.length)
