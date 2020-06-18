<template>
  <section
    id="notice"
    class="bg-red-600"
  >
    <div class="section-header bg-red text-white text-center">
      <div class="container">
        <div class="mx-8 lg:mx-40">
          <h1 class="title uppercase">
            Tasting Room & Patio Now Open For Dine-In!
          </h1>
          <h2 class="uppercase text-2xl mt-2">
            Wed-Thu 1-7 PM, Fri-Sat 1-8 PM, Sun 1-7 PM
          </h2>
        </div>
      </div>
    </div>
    <div class="container px-2 lg:px-8 text-center">
      <div class="text-standard text-white">
        <p>
          Curbside pickup is available whenever we are open.
        </p>
      </div>
      <a href="https://canmorebrewing.square.site">
        <button class="btn btn-orange mt-8">
          Click Here For
          <br>
          Curbside Pickup
        </button>
      </a>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Notice',
    data () {
      return {
        currentTime: (new Date()).getTime(),
        openTime: 1592330400000
      }
    },
    computed: {
      isTastingRoomOpen () {
        return this.currentTime > this.openTime
      }
    }
  }
</script>

<style scoped>
  #notice {
    padding-top: 4.5rem;
    padding-bottom: 3rem;
  }

  p {
    @apply font-cbsans font-semibold my-3;
  }

  a {
    text-decoration: underline;
  }

  a .btn {
    @apply font-bold px-4 shadow-2xl-dark;
    text-decoration: none;
  }

  .section-header {
    @apply py-12 font-semibold;
    line-height: 1.125;
  }

  .title {
    @apply font-cbtitle;
  }

  @media (min-width: 768px) {
    .title {
      font-size: 1.3rem;
    }
  }

  @media (min-width: 1024px) {
    .title {
      font-size: 1.8rem;
    }
  }

  @media (min-width: 1280px) {
    .title {
      font-size: 2.6rem;
    }
  }

  @media (min-width: 1440px) {
    .title {
      font-size: 3.1rem;
    }
  }
</style>
