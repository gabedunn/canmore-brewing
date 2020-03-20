<template>
  <section
    id="notice"
    class="bg-red-600"
  >
    <header-title
      title="Tasting Room Closure"
      background-colour="red"
      class="text-center"
    />
    <div class="container px-2 lg:px-8">
      <div class="text-standard text-white text-center">
        <p>
          To protect our customers, staff, community, and to flatten the curve as much as possible, our tasting room is closed until further notice.
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
  import HeaderTitle from '../Header'

  export default {
    name: 'Events',
    components: {
      HeaderTitle
    }
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
</style>
