<template>
  <section id="events">
    <header-title title="events" />
    <div class="container">
      <div class="mx-8 lg:mx-40 my-10 text-justify text-standard">
        <h1 class="title uppercase leading-tight">
          Need a Space?
        </h1>
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
        <h1 class="title uppercase leading-tight">
          Upcoming Events
        </h1>
        <p class="py-2">
          Check our social media streams
          <a
            v-scroll-to="'#social'"
            class="click-here"
            href="#"
          >here</a>
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
  p {
    @apply font-cbsans font-semibold;
  }
</style>
