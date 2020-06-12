<template>
  <section
    id="notice"
    class="bg-red-600"
  >
    <div class="section-header bg-red text-white text-center">
      <div class="container">
        <div class="mx-8 lg:mx-40">
          <h1 class="title uppercase">
            Tasting Room Now Open
          </h1>
          <h2 class="uppercase text-2xl mt-2">
            For off-sales and growler fills, from 2-6 PM
          </h2>
        </div>
      </div>
    </div>
    <div class="container px-2 lg:px-8 text-center">
      <div class="text-standard text-white">
        <p>
          Curbside pickup is also available when we are open: Wednesday-Sunday, 2:00-6:00 PM.
        </p>
        <p v-if="isTastingRoomOpen">
          We are now open for drink-in!
        </p>
        <p v-else>
          We are opening for drink-in on June 17th.
        </p>
      </div>
      <a href="https://canmorebrewing.square.site">
        <button class="btn btn-orange mb-8">
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
    font-size: 1rem;
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
