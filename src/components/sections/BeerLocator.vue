<template>
  <section id="beer-locator">
    <header-title
      background-colour="cborange"
      title="Beer Locator"
    />
    <client-only>
      <gmap-map
        :center="{lat:53.5, lng:-111}"
        :options="$store.state.mapOptions"
        :zoom="5.8"
        map-type-id="roadmap"
        style="width: 100%; height: 640px"
      >
        <marker-info
          :address="$store.state.locatorInfo.address"
          :extra="$store.state.locatorInfo.extra"
          :lat="$store.state.locatorInfo.lat"
          :lng="$store.state.locatorInfo.lng"
          :name="$store.state.locatorInfo.name"
          :opened="$store.state.locatorInfo.open"
        />
        <map-marker
          v-for="marker in markers"
          :id="marker.id"
          :key="marker.id"
          :address="marker.address"
          :extra="marker.extra"
          :lat="marker.lat"
          :lng="marker.lng"
          :name="marker.name"
          :type="marker.type"
          @clicked="handleClick"
        />
      </gmap-map>
    </client-only>
  </section>
</template>

<script>
  import ClientOnly from '@/components/client-only.js'
  import MapMarker from '../MapMarker'
  import MarkerInfo from '../MarkerInfo'
  import HeaderTitle from '../Header'

  export default {
    name: 'BeerLocator',
    components: {
      ClientOnly,
      HeaderTitle,
      MapMarker,
      MarkerInfo
    },
    data () {
      return {
        markerState: 'all',
        resolvedMarkers: {}
      }
    },
    computed: {
      markers () {
        if (this.markerState === 'retail') {
          return this.$store.getters.retail
        } else if (this.markerState === 'restaurants') {
          return this.$store.getters.restaurants
        } else {
          return this.$store.state.markers
          // return this.resolvedMarkers
        }
      }
    },
    async mounted () {
      this.resolvedMarkers = await this.$store.state.mapMarkers
    },
    methods: {
      handleClick (payload) {
        if (this.$store.state.locatorInfo.id === payload.id && this.$store.state.locatorInfo.open === true) {
          this.$store.commit('changeLocatorStatus', { status: false })
        } else if (this.$store.state.locatorInfo.id === payload.id && this.$store.state.locatorInfo.open === false) {
          this.$store.commit('changeLocatorStatus', { status: true })
        } else if (this.$store.state.locatorInfo.open === false) {
          this.$store.commit('changeLocatorInfo', payload)
          this.$store.commit('changeLocatorStatus', { status: true })
        } else {
          this.$store.commit('changeLocatorInfo', payload)
        }
      }
    }
  }
</script>
