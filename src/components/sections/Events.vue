<template>
  <section id="events">
    <header-title title="events"/>
    <div class="container">
      <div class="mx-8 lg:mx-40 my-12 text-justify">
        <h1 class="title uppercase">Need a Space?</h1>
        <p class="py-2">
          Having a get-together and looking for something a little more exciting than a conference room? Get in touch
          with us to see if we have a time or space that fits the bill. We host a variety of events from a small
          gathering at a few tables to a private function where you can have the place to yourself. Between the taproom
          and brewhouse seating areas we can accommodate up to 140 guests. Have the event catered by your favorite chef
          or bring your own. We’ve got the drinks covered!
        </p>
        <p class="py-2">
          For rates, availability and more details on just how flexible we can be, send a note to
          <a href="mailto:susan.dunn@canmorebrewing.com?subject=Booking Information">susan.dunn@canmorebrewing.com</a>.
        </p>
        <h1 class="title uppercase pt-8">Upcoming Events</h1>
        <p class="py-2">
          Check our social media streams
          <a
            v-scroll-to="'#social'"
            href="#"
          >
            here
          </a>
          to see what’s coming up at the brewery. From our Brewhouse Concert Series,
          new beer launches, cheap beer nights, fundraisers, movie nights, or an assortment of other great events, we’ve
          probably got something going on that you should pencil into your calendar, or get Siri to do it, or Alexa, or
          however the kids do it these days.
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
  .title {
    @apply font-cbtitle;
    font-size: 1.7rem;
  }

  p {
    @apply font-cbsans font-semibold;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    .title {
      font-size: 2rem;
    }

    p {
      font-size: 1.1rem;
    }
  }

  @media (min-width: 1024px) {
    .title {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1280px) {
    .title {
      font-size: 3.32rem;
    }

    p {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 1440px) {
    .title {
      font-size: 4.2rem;
    }

    p {
      font-size: 1.6rem;
    }
  }
</style>
