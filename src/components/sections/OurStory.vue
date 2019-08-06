<template>
  <section id="our-story">
    <div class="container">
      <div class="mx-8 lg:mx-30 py-10 flex flex-wrap justify-between">
        <div class="lg:w-1/2">
          <h1 class="title uppercase">
            Our Story
          </h1>
          <p class="story text-justify">
            Growing up on the east coast, near the water, we learned how to enjoy the outdoors, have fun, build
            stuff, and do things the right way. The ocean was our playground. And we learned how to share with
            family, friends, and strangers too. We learned respect. The mountains, rivers and lakes of the west
            are
            our playgrounds now; go out and enjoy them. Share the times and stories with friends, family and
            strangers too. Over a beer. And respect them all.
          </p>
        </div>
        <div class="lg:w-5/12 pt-12 lg:pt-0">
          <figure>
            <picture>
              <source
                srcset="../../assets/img/tasting_room/susie_at_taps.webp"
                type="image/webp">
              <source
                srcset="../../assets/img/tasting_room/susie_at_taps.png"
                type="image/png">
              <img
                alt="Susie at the taps"
                src="../../assets/img/tasting_room/susie_at_taps.png"
              >
            </picture>
          </figure>
        </div>
        <div class="w-full pt-12">
          <h1 class="title is-uppercase">
            Our Core Values
          </h1>
          <ul class="values list-disc ml-6 md:ml-8 lg:ml-10 fhd:ml-12">
            <li>People come first.</li>
            <li>Respect it. Whether it’s a person, tradition, our products, or the planet.</li>
            <li>Be a positive part of the community.</li>
            <li>Our compass is driven by honesty and truthfulness to ourselves and our customers</li>
            <li>Respectful and positive teams focused on “we” not “I”.</li>
            <li>We will work hard to make our customers successful. We’re nothing without them.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'OurStory'
  }
</script>

<style scoped>
  @import "../../assets/css/tailwind.css";

  .title {
    @apply font-cbtitle;
    font-size: 1.7rem;
  }

  .story {
    @apply font-cbsans font-semibold;
    font-size: 1rem;
  }

  .values li {
    font-family: "Open Sans", Arial, sans-serif;
    font-weight: 600;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    .title {
      font-size: 2rem;
    }

    .story, .values li {
      font-size: 1.1rem;
    }
  }

  @media (min-width: 1024px) {
    .title {
      font-size: 2.5rem;
    }

    .story, .values li {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1280px) {
    .title {
      font-size: 3.32rem;
    }

    .story, .values li {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 1440px) {
    .title {
      font-size: 4.2rem;
    }

    .story, .values li {
      font-size: 1.6rem;
    }
  }
</style>
