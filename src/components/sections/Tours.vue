<template>
  <section id="tours">
    <header-title title="Tours"/>
    <div class="container">
      <div
        class="mx-8 lg:mx-40 my-10 flex flex-wrap items-center tours text-standard text-justify text-cbblack-grey font-semibold font-cbsans">
        <div class="lg:w-1/2 lg:p-8 text-justify lg:order-1">
          <p class="py-2">
            We are super proud of our beautiful brewery and love to show it off. Book a tour to learn more about
            where we came from and how we make our delicious beer.
          </p>
          <p class="py-2">
            Regular tours are available every Saturday from 1:30-2:30. Click the button below to reserve your
            spot. Private
            tours for 10 or more and private events are also available. Come celebrate with us. For more info
            please visit our Eventbrite page
            <a
              href="https://www.eventbrite.ca/e/brewery-tour-and-tasting-tickets-36977395385"
              rel="noopener"
              target="_blank"
            >linked here</a>.
          </p>
        </div>
        <figure class="lg:w-1/2 order-last lg:order-2">
          <picture>
            <source
              class="rounded"
              srcset="../../assets/img/tasting_room/brian_doing_tour_cropped.webp"
              type="image/webp">
            <source
              class="rounded"
              srcset="../../assets/img/tasting_room/brian_doing_tour_cropped.png"
              type="image/png">
            <img
              alt="Brian doing tour"
              class="rounded"
              src="../../assets/img/tasting_room/brian_doing_tour_cropped.png"
            >
          </picture>
        </figure>
        <p class="lg:w-full lg:px-8 text-justify lg:order-3">
          Even if you can't make a tour, we have plenty of seating overlooking our brewhouse, so you might even
          get to watch your next beer being made.
        </p>
        <a
          class="btn btn-orange mx-auto my-8 lg:mb-0 w-4/5 md:w-1/2 lg:w-1/4 text-center text-2xl lg:order-4"
          href="https://www.eventbrite.ca/e/brewery-tour-and-tasting-tickets-36977395385"
          rel="noopener"
          target="_blank"
        >
          Book a Tour
        </a>
      </div>
    </div>
  </section>
</template>

<script>
  import HeaderTitle from '../Header'

  export default {
    name: 'Tours',
    components: {
      HeaderTitle
    }
  }
</script>

<style scoped>
  .btn {
    @apply font-bold p-3 rounded font-normal;
  }

  .btn-orange {
    @apply bg-cborange text-white;
  }
</style>
