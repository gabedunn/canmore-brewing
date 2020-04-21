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
      <a href="https://canmorebrewing.square.site">
        <button class="btn btn-orange mb-8">
          Click Here For
          <br>
          Home Delivery Service
        </button>
      </a>
      <div class="text-standard text-white">
        <p>
          To protect our customers, staff, community, and to flatten the curve as much as possible, our tasting room is
          closed until further notice.
        </p>
        <p>
          However, we have set up a
          <span class="font-extrabold uppercase">home delivery service</span>
          for the Canmore area available from Wednesday to Sunday, and in Banff on Saturdays.
          <a
            href="https://canmorebrewing.square.site"
            target="_blank"
          >Click here</a>
          for more information and to have our delicious beer brought to your door.
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
