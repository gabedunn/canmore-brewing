<template>
  <section id="about-us">
    <div class="container">
      <div class="mx-8 lg:mx-32 my-10 flex flex-wrap justify-between text-standard">
        <div class="lg:w-1/2 pr-8">
          <h1 class="title uppercase">
            About Us
          </h1>
          <p class="font-cbsans font-semibold text-justify">
            Growing up on the east coast, near the water, we learned how to enjoy the outdoors, have fun, build
            stuff, and do things the right way. The ocean was our playground. And we learned how to share with
            family, friends, and strangers too. We learned respect. The mountains, rivers and lakes of the west
            are
            our playgrounds now; go out and enjoy them. Share the times and stories with friends, family and
            strangers too. Over a beer. And respect them all.
          </p>
        </div>
        <div class="lg:w-1/2 mt-8 lg:mt-0">
          <figure>
            <picture>
              <source
                srcset="../../assets/img/tasting_room/susie_at_taps.webp"
                type="image/webp"
              >
              <source
                srcset="../../assets/img/tasting_room/susie_at_taps.png"
                type="image/png"
              >
              <img
                alt="Susie at the taps"
                src="../../assets/img/tasting_room/susie_at_taps.png"
              >
            </picture>
          </figure>
        </div>
        <div class="w-full mt-8">
          <h1 class="title is-uppercase">
            Our Core Values
          </h1>
          <ul class="values list-disc ml-6 md:ml-8 lg:ml-10 fhd:ml-12">
            <li class="text-standard">
              People come first.
            </li>
            <li class="text-standard">
              Respect it. Whether it’s a person, tradition, our products, or the planet.
            </li>
            <li class="text-standard">
              Be a positive part of the community.
            </li>
            <li class="text-standard">
              Our compass is driven by honesty and truthfulness to ourselves and our customers
            </li>
            <li class="text-standard">
              Respectful and positive teams focused on “we” not “I”.
            </li>
            <li class="text-standard">
              We will work hard to make our customers successful. We’re nothing without them.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'AboutUsPage'
  }
</script>

<style scoped>
  .text-standard {
    @apply font-cbsans font-semibold;
  }
</style>
