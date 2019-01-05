<template>
  <gmap-info-window
    :opened="opened"
    :options="{pixelOffset: {height: -54, width: 0}}"
    :position="{ lat, lng }"
  >
    <div class="map-info">
      <p
        class="store-title"
        v-text="name"
      />
      <p v-text="address"/>
      <p>
        <a
          v-if="extra"
          :href="`https://www.google.com/maps/dir//${extra}/@${lat},${lng},13z`"
          target="_blank"
        >
          Get Directions
        </a>
        <a
          v-else
          :href="`https://www.google.com/maps/dir//${lat},${lng}/@${lat},${lng},13z`"
          target="_blank">
          Get Directions
        </a>
      </p>
    </div>
  </gmap-info-window>
</template>

<script>
  export default {
    name: 'MarkerInfo',
    props: {
      opened: { type: Boolean, required: true },
      name: { type: String, required: true },
      address: { type: String, required: true },
      extra: { type: String, required: true },
      lat: { type: Number, required: true },
      lng: { type: Number, required: true }
    }
  }
</script>

<style scoped lang="scss">
  .map-info {
    padding: 2px;

    .store-title {
      font-weight: 700;
    }

    p {
      font-family: Roboto, Arial, sans-serif;
      font-size: 13px;
      font-weight: 300;
      padding: 1px;
      margin: 2px;
      color: #363636;
    }
  }
</style>
