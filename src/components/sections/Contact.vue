<template>
  <section id="contact">
    <div class="container">
      <div class="mx-8 lg:mx-40 py-12 flex flex-wrap">
        <div class="w-full md:w-3/5 pb-8 md:pb-0">
          <h1 class="title uppercase">
            Get In Touch
          </h1>
          <h2 class="subtitle pt-8 md:w-11/12">
            Get connected and catch the latest updates and launch details.
          </h2>
          <p class="icons pt-6">
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
          <div class="hours pt-8 md:pt-16">
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
    font-size: 1.2rem;
  }

  .title {
    @apply text-white;
    font-family: "Archivo Black", Arial, sans-serif;
    font-size: 1.7rem;
  }

  .subtitle {
    @apply font-cbsans font-semibold text-white;
    font-size: 1.2rem;
  }

  .icons {
    font-size: 1.2rem;
  }

  .hours h3 {
    @apply font-semibold;
    font-size: 1.4rem;
  }

  .hours p {
    @apply font-normal text-white;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    .title {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1.4rem;
    }

    .icons {
      font-size: 1.3rem;
    }

    .hours h3 {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1024px) {
    p {
      font-size: 1.2rem;
    }

    .title {
      font-size: 2.5rem;
    }

    .subtitle {
      font-size: 1.6rem;
    }

    .icons {
      font-size: 1.4rem;
    }

    .hours h3 {
      font-size: 1.7rem;
    }

    .hours p {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1280px) {
    p {
      font-size: 1.4rem;
    }

    .title {
      font-size: 3.2rem;
    }

    .subtitle {
      font-size: 2.5rem;
    }

    .icons {
      font-size: 1.7rem;
    }

    .hours h3 {
      font-size: 1.9rem;
    }

    .hours p {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 1440px) {
    p {
      font-size: 1.7rem;
    }

    .title {
      font-size: 4.5rem;
    }

    .subtitle {
      font-size: 2.9rem;
    }

    .icons {
      font-size: 2rem;
    }

    .hours h3 {
      font-size: 2.3rem;
    }

    .hours p {
      font-size: 1.7rem;
    }
  }
</style>
