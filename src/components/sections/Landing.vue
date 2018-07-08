<template>
  <div>
    <section
      id="landing"
      class="hero is-cb-orange has-transparent-background is-fullheight"
    >
      <div class="hero-head">
        <div class="container">
          <h1 class="title is-1 has-text-centered">Crafted at 1,309 Metres.</h1>
          <h2 class="subtitle is-3 has-text-centered">Have your best day ever, in Canmore.</h2>
        </div>
      </div>
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-one-fifth has-text-centered">
              <a
                v-scroll-to="{el:'#tours',offset:0}"
                href="#"
                class="button is-large is-cb-orange"
              >
                Book a Tour
              </a>
            </div>
            <div class="column is-one-fifth has-text-centered">
              <a
                v-scroll-to="{el:'#social',offset:0}"
                href="#"
                class="button is-large is-cb-orange"
              >
                Social Media
              </a>
            </div>
            <div class="column is-one-fifth has-text-centered">
              <a
                v-scroll-to="{el:'#our-beers',offset:0}"
                href="#"
                class="button is-large is-cb-orange"
              >
                Our Beers
              </a>
            </div>
            <div class="column is-one-fifth has-text-centered">
              <a
                v-scroll-to="{el:'#beer-locator',offset:0}"
                href="#"
                class="button is-large is-cb-orange"
              >
                Beer Locator
              </a>
            </div>
            <div class="column is-one-fifth has-text-centered">
              <a
                v-scroll-to="{el:'#contact',offset:0}"
                href="#"
                class="button is-large is-cb-orange"
              >
                Our Location
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-foot has-text-centered">
        <h2 class="title is-1-desktop"><a
          v-scroll-to="{el:'#contact'}"
          href="#"
        >Tasting Room & Brewery</a></h2>
        <h3 class="subtitle is-3-desktop">
          <a
            v-scroll-to="{el:'#contact'}"
            href="#"
          >Address & Map Below</a>
        </h3>
        <h3 class="is-3-desktop"><a
          v-scroll-to="{el:'#contact'}"
          href="#"
        >
          <font-awesome-icon icon="chevron-down" />
        </a></h3>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Landing'
  }
</script>

<style scoped lang="scss">
  $border: 0;
  @import "../../../node_modules/bulma/sass/utilities/mixins";

  //@include mobile() {
  #landing {
    padding-top: 52px;
  }

  /*}*/

  .has-transparent-background {
    background: transparent;
  }

  .hero {
    background-size: cover;
    background-image: url(../../assets/img/tasting_room/landing-background.png);
    background-position: center;
    background-repeat: no-repeat;

    .hero-head {
      padding-top: 4rem;

      .title {
        text-transform: capitalize;
      }

      .subtitle {
        font-family: 'Open Sans', 'Roboto', 'Source Sans Pro', sans-serif;
      }
    }

    .hero-foot {
      font-family: 'Open Sans', 'Roboto', 'Source Sans Pro', sans-serif;
      padding: 1.5rem;

      .subtitle {
        margin-bottom: 0.5rem;
      }
    }
  }
</style>
