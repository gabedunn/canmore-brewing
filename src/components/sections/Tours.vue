<template>
  <section id="tours">
    <div class="hero is-black">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-offset-1">
              <h1 class="title is-uppercase">
                Tours
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-5 is-offset-1">
              <div class="tours">
                <p class="has-text-justified">
                  In addition to just a tasting room we also offer tours - a personal and informative tour of how our
                  brewery works - from grain in one end to drunk people out the other end.
                  <br>
                  You can book a tour with a minimum of 10 people (you can have less but you must still pay for 10).
                </p>
                <a
                  class="button is-large is-light-cb-orange has-margin-top-lg"
                  href="https://eventbrite.com"
                  target="_blank"
                >
                  Book a Tour
                </a>
              </div>
            </div>
            <div class="column is-5 is-offset-1">
              <figure class="image is-4by3">
                <img
                  src="../../assets/img/tasting_room/brian_doing_tour_cropped.png"
                  align="Tours"
                >
              </figure>
            </div>
          </div>
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

  .tours {
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
