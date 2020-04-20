<template>
  <section
    id="notice"
    class="bg-red-600"
  >
    <div class="section-header bg-red text-white text-center">
      <div class="container">
        <div class="mx-8 lg:mx-40">
          <h1 class="title uppercase">
            Tasting Room Closure
          </h1>
        </div>
      </div>
    </div>
    <div class="container px-2 lg:px-8 text-center">
      <button class="btn btn-cborange mb-8 text-2xl">
        Home Delivery Service
      </button>
      <div class="text-standard text-white">
        <p>
          To protect our customers, staff, community, and to flatten the curve as much as possible, our tasting room is
          closed until further notice.
        </p>
        <p>
          However, we have set up a
          <span class="font-extrabold uppercase">home delivery service</span>
          for the Canmore area.
          <a
            href="https://canmorebrewing.square.site"
            target="_blank"
          >Click here</a>
          to have our delicious beer brought to your door.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Events'
  }
</script>

<style scoped>
  #notice {
    padding-top: 4.5rem;
    padding-bottom: 3rem;
  }

  p {
    @apply font-cbsans font-semibold;
  }

  a {
    text-decoration: underline;
  }

  .section-header {
    @apply py-12 font-semibold;
    line-height: 1.125;
  }

  .title {
    @apply font-cbtitle;
    font-size: 1.5rem;
  }

  @media (min-width: 768px) {
    .title {
      font-size: 1.8rem;
    }
  }

  @media (min-width: 1024px) {
    .title {
      font-size: 2.3rem;
    }
  }

  @media (min-width: 1280px) {
    .title {
      font-size: 3.1rem;
    }
  }

  @media (min-width: 1440px) {
    .title {
      font-size: 4rem;
    }
  }
</style>
