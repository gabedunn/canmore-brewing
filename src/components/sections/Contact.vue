<template>
  <section id="contact">
    <div class="container">
      <div class="mx-8 lg:mx-40 py-10 flex flex-wrap">
        <div class="w-full md:w-3/5 mb-8 md:mb-0 text-standard">
          <h1 class="title uppercase text-white">
            Get In Touch
          </h1>
          <h2 class="subtitle text-white leading-tight md:pr-8">
            Get connected and catch the latest updates and launch details.
          </h2>
          <p class="subtitle pt-6">
            <a
              class="px-1"
              href="https://twitter.com/canmorebrewing"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
            <a
              class="px-1"
              href="https://www.facebook.com/canmorebrewing/"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
            <a
              class="px-1"
              href="https://www.instagram.com/canmorebrewing/"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
            @canmorebrewing
          </p>
          <p class="pt-8">
            Questions? We’d love to chat!
            <br>
            <a href="tel:4036782337">(403) 678 BEER (2337)</a>
            <br>
            <a href="mailto:info@canmorebrewing.com">info@&#8203;canmorebrewing.com</a>
          </p>
          <p class="pt-8">
            Sales (Bow Valley Area)
            <br>
            <a href="tel:4037075695">(403) 707 5695</a>
            <br>
            <a href="mailto:steve.dunn@canmorebrewing.com">steve.dunn@&#8203;canmorebrewing.com</a>
          </p>
          <p class="pt-8">
            Sales (Calgary Area & Rest of Alberta)
            <br>
            <a href="tel:4038273791">(403) 827 3791</a>
            <br>
            <a href="mailto:john.hedley@canmorebrewing.com">john.hedley@&#8203;canmorebrewing.com</a>
          </p>
          <p class="pt-8">
            Tasting Room and Brewery located at:
            <br>
            <a
              href="https://www.google.com/maps/place/1460+Railway+Ave,+Canmore,+AB+T1W+1P6,+Canada/@51.0945163,-115.3591137,17z/data=!3m1!4b1!4m5!3m4!1s0x5370c593042114c1:0x9971258e4cfd32e9!8m2!3d51.094513!4d-115.356925?hl=en-US"
              target="_blank"
            >
              1460 Railway Ave., Canmore, AB
            </a>
          </p>
        </div>
        <div class="w-full md:w-2/5">
          <client-only>
            <gmap-map
              :center="{lat:51.098, lng:-115.356925}"
              :options="mapOptions"
              :zoom="14"
              map-type-id="roadmap"
              style="height: 400px"
            >
              <marker-info
                :address="marker.address"
                :extra="marker.extra"
                :lat="marker.lat"
                :lng="marker.lng"
                :name="marker.name"
                :opened="infoStatus"
              />
              <map-marker
                :id="marker.id"
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
          <div class="hours mt-8 md:mt-16 text-standard text-white">
            <h3 class="subtitle">
              Hours:
            </h3>
            <p
              v-if="google"
              class="open-status"
            >
              We are currently {{ open ? 'open!' : 'closed.' }}
            </p>
            <p
              v-for="day in days"
              :key="day"
              v-text="day"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { get } from 'r2'
  import ClientOnly from '../client-only.js'

  import MapMarker from '../MapMarker'
  import MarkerInfo from '../MarkerInfo'

  import hours from '../../assets/content/hours.json'

  export default {
    name: 'Contact',
    components: {
      ClientOnly,
      MapMarker,
      MarkerInfo
    },
    data () {
      return {
        mapOptions: this.$store.state.mapOptions,
        marker: this.$store.state.markers.find(m => m.id === 0),
        infoStatus: true,
        days: [],
        open: [],
        google: true
      }
    },
    async mounted () {
      if (navigator.userAgent !== 'ReactSnap') {
        const proxy = window.location.hostname === 'localhost'
          ? 'https://thingproxy.freeboard.io/fetch/https://maps.googleapis.com/'
          : '/cors/'

        const place = await get(
          // 'https://thingproxy.freeboard.io/fetch/' +
          proxy +
            'maps/api/place/details/json?' +
            // Add the API key to the query.
            `key=${process.env.VUE_APP_GOOGLE_MAPS_API_KEY}` +
            // Specifies the place_id to get the hours from
            '&place_id=ChIJwRQhBJPFcFMRdW4gwcwgaRY' +
            '&fields=opening_hours'
        ).json

        if (place.status === 'OK') {
          this.days = place.result.opening_hours.weekday_text
          this.open = place.result.opening_hours.open_now
        } else {
          this.google = false
          this.days = Object.keys(hours).map(day => `${
            day.replace(/^\w/, c => c.toUpperCase())}: ${hours[day].closed ? 'Closed' : hours[day].hours
          }`)
        }
      }
    },
    methods: {
      handleClick () {
        this.infoStatus = !this.infoStatus
      }
    }
  }
</script>

<style scoped>
  #contact {
    @apply bg-black text-white;
  }

  a {
    @apply text-cborange-link;
  }

  a:hover {
    @apply text-cborange-link-hover;
  }

  p {
    @apply font-cbsans font-semibold text-white;
  }

  .open-status {
    @apply -mt-3 mb-1;
  }

  .hours p {
    @apply font-normal;
  }
</style>
