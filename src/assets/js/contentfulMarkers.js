import { createClient } from 'contentful'

const client = createClient({
  space: process.env.VUE_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.VUE_APP_CONTENTFUL_API_KEY
})

export default async () => {
  const entry = await client.getEntry('1FBHKb78Qk4kAWC4ua22I8')
  const ids = entry.fields.marker.map(marker => client.getEntry(marker.sys.id))
  const resolved = await Promise.all(ids)
  const fields = resolved.map(marker => marker.fields)
  return fields.map(fields => {
    fields.lat = fields.coordinates.lat
    fields.lng = fields.coordinates.lon
    delete fields.coordinates
    if (fields.type) {
      fields.type = 'eat'
    } else {
      delete fields.type
    }
    return fields
  })
}
