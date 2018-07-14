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
                  We are super proud of our beautiful brewery and love to show it off. Book a tour to learn more about
                  where we came from and how we make our delicious beer.
                  <br><br>
                  Regular tours are available every Saturday from 1:30-2:30. Click the button below to reserve your
                  spot. Private
                  tours for 10 or more and private events are also available. Come celebrate with us. For more info
                  please contact:
                  <br>
                  <a href="mailto:susan.dunn@canmorebrewing.com">susan.dunn@canmorebrewing.com</a>.
                </p>
                <a
                  class="button is-large is-cb-orange has-margin-top-lg"
                  href="mailto:info@canmorebrewing.com"
                >
                  Book a Tour
                </a>
              </div>
            </div>
            <div class="column is-5 is-offset-1">
              <figure class="image is-4by3">
                <picture>
                  <source
                    srcset="../../assets/img/tasting_room/brian_doing_tour_cropped.webp"
                    type="image/webp" >
                  <source
                    srcset="../../assets/img/tasting_room/brian_doing_tour_cropped.png"
                    type="image/png" >
                  <img
                    src="../../assets/img/tasting_room/brian_doing_tour_cropped.png"
                    align="Tours"
                  >
                </picture>
              </figure>
            </div>
          </div>
          <div class="columns">
            <div class="column is-offset-1 tours">
              <p class="has-text-justified">
                Even if you can't make a tour, we have plenty of seating overlooking our brewhouse, so you might even
                get to watch your next beer being made.
              </p>
            </div>
            <div class="column is-1" />
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
