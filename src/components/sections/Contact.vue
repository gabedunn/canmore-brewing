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
              <font-awesome-icon :icon="['fab', 'twitter']"/>
            </a>
            <a
              class="px-1"
              href="https://www.facebook.com/canmorebrewing/"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'facebook']"/>
            </a>
            <a
              class="px-1"
              href="https://www.instagram.com/canmorebrewing/"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'instagram']"/>
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
              :address="marker.address"
              :extra="marker.extra"
              :id="marker.id"
              :lat="marker.lat"
              :lng="marker.lng"
              :name="marker.name"
              :type="marker.type"
              @clicked="handleClick"
            />
          </gmap-map>
          <div class="hours mt-8 md:mt-16 text-standard text-white">
            <h3 class="subtitle">Hours:</h3>
            <p>Monday-Tuesday: Closed</p>
            <p>Wednesday-Thursday: 2PM - 7PM</p>
            <p>Friday-Saturday: 1PM - 8PM</p>
            <p>Sunday: 1PM – 6PM</p>
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

  .hours p {
    @apply font-normal;
  }
</style>
