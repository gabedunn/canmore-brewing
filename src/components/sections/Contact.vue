<template>
  <section id="contact">
    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-6 is-offset-1">
              <h1 class="title is-uppercase">
                Get In Touch
              </h1>
              <h2 class="subtitle has-padding-top-md">
                Get connected and catch the latest updates and launch details.
              </h2>
              <p class="icons has-padding-top-sm">
                <a
                  href="https://twitter.com/canmorebrewing"
                  target="_blank"
                >
                  <i class="socicon-twitter has-padding-right-sm"/>
                </a>
                <a
                  href="https://www.facebook.com/canmorebrewing/"
                  target="_blank"
                >
                  <i class="socicon-facebook has-padding-right-sm"/>
                </a>
                <a
                  href="https://www.instagram.com/canmorebrewing/"
                  target="_blank"
                >
                  <i class="socicon-instagram has-padding-right-sm"/>
                </a>
                @canmorebrewing
              </p>
              <p class="has-padding-top-lg">
                Questions? We’d love to chat!
                <br>
                <a href="tel:4036782337">(403) 678 BEER (2337)</a>
                <br>
                <a href="mailto:info@canmorebrewing.com">info@&#8203;canmorebrewing.com</a>
              </p>
              <p class="has-padding-top-lg">
                Sales
                <br>
                <a href="tel:4036195846">(403) 707 5695</a>
                <br>
                <a href="mailto:steve.dunn@canmorebrewing.com">steve.dunn@&#8203;canmorebrewing.com</a>
              </p>
              <p class="has-padding-top-lg">
                Tasting Room and Brewery located at:
                <br>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/1460+Railway+Ave,+Canmore,+AB+T1W+1P6,+Canada/@51.0945163,-115.3591137,17z/data=!3m1!4b1!4m5!3m4!1s0x5370c593042114c1:0x9971258e4cfd32e9!8m2!3d51.094513!4d-115.356925?hl=en-US"
                >
                  1460 Railway Ave., Canmore, AB
                </a>
              </p>
            </div>
            <div class="column">
              <div class="has-map">
                <gmap-map
                  :center="{lat:51.094513, lng:-115.3591137}"
                  :zoom="14"
                  :options="mapOptions"
                  map-type-id="roadmap"
                  style="height: 400px"
                >
                  <marker-info
                    :opened="infoStatus"
                    :name="marker.name"
                    :address="marker.address"
                    :extra="marker.extra"
                    :lat="marker.lat"
                    :lng="marker.lng"
                  />
                  <map-marker
                    :id="marker.id"
                    :name="marker.name"
                    :address="marker.address"
                    :type="marker.type"
                    :extra="marker.extra"
                    :lat="marker.lat"
                    :lng="marker.lng"
                    @clicked="handleClick"
                  />
                </gmap-map>
              </div>
              <div class="hours has-padding-top-xl">
                <h3>
                  Hours:
                </h3>
                <p>Wednesday-Thursday: 2PM - 7PM</p>
                <p>Friday-Saturday: 2PM - 8PM</p>
                <p>Sunday: 2PM – 6PMM</p>
              </div>
              <div class="hours has-padding-top-md">
                <p>
                  To find accommodations near Canmore Brewing Company, visit
                  <a
                    href="https://www.hotelscombined.com"
                    target="_blank"
                  >HotelsCombined</a>.
                </p>
              </div>
            </div>
            <div class="column is-1"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import MapMarker from '../MapMarker'
  import MarkerInfo from '../MarkerInfo'

  export default {
    name: 'Contact',
    components: {
      MapMarker,
      MarkerInfo
    },
    data () {
      return {
        mapOptions: this.$store.state.mapOptions,
        marker: this.$store.state.markers[0],
        infoStatus: true
      }
    },
    methods: {
      handleClick () {
        this.infoStatus = !this.infoStatus
      }
    }
  }
</script>

<style scoped lang="scss">
  $border: 0;
  @import "../../../node_modules/bulma/sass/utilities/mixins";

  #contact {
    background-color: black;
    color: white
  }

  .title {
    font-family: "Archivo Black", Arial, sans-serif;
    color: white;
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

  .subtitle {
    font-family: "Open Sans", Arial, sans-serif;
    font-weight: 600;
    color: white;
    font-size: 1.2rem;
    @include tablet() {
      font-size: 1.4rem;
    }
    @include desktop() {
      font-size: 1.6rem;
    }
    @include widescreen() {
      font-size: 2.5rem;
    }
    @include fullhd() {
      font-size: 2.9rem;
    }
  }

  .icons {
    font-size: 1.2rem;
    @include tablet() {
      font-size: 1.3rem;
    }
    @include desktop() {
      font-size: 1.4rem;
    }
    @include widescreen() {
      font-size: 1.7rem;
    }
    @include fullhd() {
      font-size: 2rem;
    }
  }

  a {
    color: #e15829;
    &:hover {
      color: #e19129;
    }
  }

  p {
    font-family: "Open Sans", Arial, sans-serif;
    font-weight: 600;
    color: white;
    font-size: 1.2rem;
    @include tablet() {
      font-size: 1.3rem;
    }
    @include desktop() {
      font-size: 1.4rem;
    }
  }

  .hours {
    font-family: "Open Sans", Arial, sans-serif;

    h3 {
      font-weight: 600;
      font-size: 1.4rem;
      @include tablet() {
        font-size: 1.5rem;
      }
      @include desktop() {
        font-size: 1.7rem;
      }
      @include widescreen() {
        font-size: 1.9rem;
      }
      @include fullhd() {
        font-size: 2.3rem;
      }
    }

    p {
      font-weight: 400;
      color: white;
      font-size: 1rem;
      @include desktop() {
        font-size: 1.2rem;
      }
      @include widescreen() {
        font-size: 1.4rem;
      }
      @include fullhd() {
        font-size: 1.7rem;
      }
    }
  }
</style>
