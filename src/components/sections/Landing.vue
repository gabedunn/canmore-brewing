<template>
  <div>
    <section
      id="landing"
      class="hero is-light-cb-orange is-fullheight"
    >
      <div class="hero-body">
        <div class="container">
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
        <h2 class="title is-1-desktop">Crafted at 1,309 meters.</h2>
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
    background: url(../../assets/img/tasting_room/tasting_room_landscape.jpg) center top;
    /*background: url(../../assets/img/mountains-orange.jpg) center top;*/

    .hero-foot {
      h2 {
        padding: 2rem;
      }
    }
  }
</style>
