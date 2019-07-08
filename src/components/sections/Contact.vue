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
                  <font-awesome-icon :icon="['fab', 'twitter']" />
                </a>
                <a
                  href="https://www.facebook.com/canmorebrewing/"
                  target="_blank"
                >
                  <font-awesome-icon :icon="['fab', 'facebook']" />
                </a>
                <a
                  href="https://www.instagram.com/canmorebrewing/"
                  target="_blank"
                >
                  <font-awesome-icon :icon="['fab', 'instagram']" />
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
                Sales (Bow Valley Area)
                <br>
                <a href="tel:4037075695">(403) 707 5695</a>
                <br>
                <a href="mailto:steve.dunn@canmorebrewing.com">steve.dunn@&#8203;canmorebrewing.com</a>
              </p>
              <p class="has-padding-top-lg">
                Sales (Calgary Area & Rest of Alberta)
                <br>
                <a href="tel:4038273791">(403) 827 3791</a>
                <br>
                <a href="mailto:john.hedley@canmorebrewing.com">john.hedley@&#8203;canmorebrewing.com</a>
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
                  :center="{lat:51.098, lng:-115.356925}"
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
                <p>Monday: 2PM - 7PM</p>
                <p>Tuesday: Closed</p>
                <p>Wednesday-Thursday: 2PM - 7PM</p>
                <p>Friday-Saturday: 1PM - 8PM</p>
                <p>Sunday: 1PM – 6PM</p>
              </div>
            </div>
            <div class="column is-1" />
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
        marker: this.$store.state.markers.find(m => m.id === 0),
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

    a {
      padding: 0 0.25rem;
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
