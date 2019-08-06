<template>
  <section id="our-story">
    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-5 is-offset-1">
              <div class="story">
                <h1 class="title is-uppercase">
                  Our Story
                </h1>
                <p class="has-text-justified">
                  Growing up on the east coast, near the water, we learned how to enjoy the outdoors, have fun, build
                  stuff, and do things the right way. The ocean was our playground. And we learned how to share with
                  family, friends, and strangers too. We learned respect. The mountains, rivers and lakes of the west
                  are
                  our playgrounds now; go out and enjoy them. Share the times and stories with friends, family and
                  strangers too. Over a beer. And respect them all.
                </p>
              </div>
            </div>
            <div class="column is-5 is-offset-1">
              <figure class="image is-3by2">
                <picture>
                  <source
                    srcset="../../assets/img/tasting_room/susie_at_taps.webp"
                    type="image/webp" >
                  <source
                    srcset="../../assets/img/tasting_room/susie_at_taps.png"
                    type="image/png" >
                  <img
                    src="../../assets/img/tasting_room/susie_at_taps.png"
                    alt="Susie at the taps"
                  >
                </picture>
              </figure>
            </div>
          </div>
          <div class="columns">
            <div class="column is-offset-1">
              <div class="values has-padding-top-lg">
                <h1 class="title is-uppercase">
                  Our Core Values
                </h1>
                <ul class="has-padding-left-lg">
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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  // TODO: switch to tailwind

  export default {
    name: 'OurStory'
  }
</script>

<style scoped lang="scss">
  $border: 0;
  @import "../../../node_modules/bulma/sass/utilities/mixins";

  .title {
    font-family: "Archivo Black", Arial, sans-serif;
    font-size: 1.7rem;
    @include tablet() {
      font-size: 2rem;
    }
    @include desktop() {
      font-size: 2.5rem;
    }
    @include widescreen() {
      font-size: 3.2rem;
    }
    @include fullhd() {
      font-size: 4.2rem;
    }
  }

  .story {
    p {
      font-family: "Open Sans", Arial, sans-serif;
      font-weight: 600;
      font-size: 1rem;
      @include tablet() {
        font-size: 1.1rem;
      }
      @include desktop() {
        font-size: 1.2rem;
      }
      @include widescreen() {
        font-size: 1.4rem;
      }
      @include fullhd() {
        font-size: 1.6rem;
      }
    }
  }

  .values {
    ul {
      list-style: disc;
      li {
        font-family: "Open Sans", Arial, sans-serif;
        font-weight: 600;
        font-size: 1rem;
        @include tablet() {
          font-size: 1.1rem;
        }
        @include desktop() {
          font-size: 1.2rem;
        }
        @include widescreen() {
          font-size: 1.4rem;
        }
        @include fullhd() {
          font-size: 1.6rem;
        }
      }
    }
  }
</style>
