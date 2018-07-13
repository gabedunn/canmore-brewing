<template>
  <section id="beer-locator">
    <div class="hero is-cb-orange">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-offset-1">
              <h1 class="title is-uppercase">
                Beer Locator
              </h1>
            </div>
            <div class="column">
              <div class="filter-box">
                <h2 class="is-1">Filter by</h2>
                <select
                  v-model="markerState"
                  title="Filter"
                  name="beer-filter"
                >
                  <option value="all">All</option>
                  <option value="retail">Retail</option>
                  <option value="restaurants">Restaurant</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero has-map">
      <div class="hero-body">
        <gmap-map
          :center="{lat:51.094513, lng:-115.3591137}"
          :zoom="6"
          :options="this.$store.state.mapOptions"
          map-type-id="roadmap"
          style="width: 100%; height: 640px"
        >
          <marker-info
            :opened="this.$store.state.locatorInfo.open"
            :name="this.$store.state.locatorInfo.name"
            :address="this.$store.state.locatorInfo.address"
            :extra="this.$store.state.locatorInfo.extra"
            :lat="this.$store.state.locatorInfo.lat"
            :lng="this.$store.state.locatorInfo.lng"
          />
          <map-marker
            v-for="marker in markers"
            :key="marker.id"
            :id="marker.id"
            :name="marker.name"
            :address="marker.address"
            :extra="marker.extra"
            :type="marker.type"
            :lat="marker.lat"
            :lng="marker.lng"
            @clicked="handleClick"
          />
        </gmap-map>
      </div>
    </div>
  </section>
</template>

<script>
  import MapMarker from '../MapMarker'
  import MarkerInfo from '../MarkerInfo'

  export default {
    name: 'BeerLocator',
    components: {
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
          this.$store.commit('changeLocatorStatus', {status: false})
        } else if (this.$store.state.locatorInfo.id === payload.id && this.$store.state.locatorInfo.open === false) {
          this.$store.commit('changeLocatorStatus', {status: true})
        } else if (this.$store.state.locatorInfo.open === false) {
          this.$store.commit('changeLocatorInfo', payload)
          this.$store.commit('changeLocatorStatus', {status: true})
        } else {
          this.$store.commit('changeLocatorInfo', payload)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  $border: 0;
  @import "../../../node_modules/bulma/sass/utilities/mixins";

  .title {
    font-family: "Archivo Black", Arial, sans-serif;
    font-size: 1.7rem;
    @include tablet() {
      font-size: 2rem;
    }
    @include desktop() {
      font-size: 2.5rem;
    }
    @include widescreen() {
      font-size: 3.2rem;
    }
    @include fullhd() {
      font-size: 4.2rem;
    }
  }

  .has-map {
    .hero-body {
      padding: 0;
    }
  }

  .filter-box {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 0.7rem;

    @include tablet() {
      float: right;
    }

    h2, select {
      display: inline-block;
      font-size: 1.5rem;
    }
    h2 {
      padding-right: 10px;
    }
  }
</style>
