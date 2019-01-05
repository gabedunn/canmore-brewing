<template>
  <div class="map-marker">
    <gmap-marker
      :position="{lat, lng}"
      :icon="icon"
      @click="emitClick"
    />
  </div>
</template>

<script>
  export default {
    name: 'MapMarker',
    props: {
      id: { type: Number, required: true },
      name: { type: String, required: true },
      address: { type: String, required: true },
      infoOpen: { type: Boolean, default: false },
      type: { type: String, default: 'retail', validator: value => value === 'retail' || value === 'eat' },
      extra: { type: String, required: true },
      lat: { type: Number, required: true },
      lng: { type: Number, required: true }
    },
    data () {
      return {
        icon: {
          url: require(`../assets/img/icons/map-icon-${this.type}.png`),
          scaledSize: this.$store.state.scaledSize
        }
      }
    },
    methods: {
      emitClick () {
        this.$emit('clicked', {
          id: this.id,
          name: this.name,
          address: this.address,
          extra: this.extra,
          lat: this.lat,
          lng: this.lng
        })
      }
    }
  }
</script>
