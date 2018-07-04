<template>
  <div>
    <section
      id="landing"
      class="hero is-light-cb-orange is-fullheight"
    >
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1 has-text-centered">Crafted at 1,309 Metres.</h1>
          <div class="columns">
            <div class="column is-one-third has-text-centered">
              <img src="../../assets/img/Canmore_Brewing_Logo_360.png">
              <h3 class="title is-3">Find Us</h3>
            </div>
            <div class="column is-one-third has-text-centered">
              <img src="../../assets/img/Canmore_Brewing_Logo_360.png">
              <h3 class="title is-3">Find Our Beer</h3>
            </div>
            <div class="column is-one-third has-text-centered">
              <img src="../../assets/img/Canmore_Brewing_Logo_360.png">
              <h3 class="title is-3">Our Beers</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-foot has-text-centered">
        <h2 class="title is-1-desktop">Tasting Room & Brewery</h2>
        <h3 class="subtitle is-3-desktop">
          <a
            v-scroll-to="{el:'#contact'}"
            href="#"
          >
            Address & Map Below
          </a>
        </h3>
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

  .hero {
    background-size: cover;
    background: url(../../assets/img/tasting_room/taps_in_tasting_room_cropped.png) no-repeat center center;

    .hero-foot {
      padding: 2rem;

      h2, h3 {
        color: black;
      }
    }
  }
</style>
