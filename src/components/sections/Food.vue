<template>
  <section id="food">
    <header-title title="Food"/>
    <div class="container">
      <div class="mx-8 lg:mx-40 my-12">
        <div class="tasting-room text-justify text-cbblack-grey font-semibold font-cbsans">
          <p class="py-2">
            Feeling peckish? We’ve got a selection of light fare to get you through the growlies. From savoury hand pies
            by Pie Junkie - made from scratch with an all butter crust and homemade fillings, to beer pretzels crafted
            just outside our back door by JK Bakery – made with our very own Georgetown Brown Ale. Of course, we also
            have a selection of salty snacks if you just need a little pick-me-up.
          </p>
          <p class="py-2">
            If you need something more substantial, you’re welcome to order anything from pizza to sushi from any one of
            Canmore’s fantastic restaurants and have it delivered to the brewery so you can enjoy it right where your
            beer was made.
          </p>
        </div>
        <div class="flex pt-8 items-center justify-around">
          <figure>
            <picture>
              <source
                class="max-h-food-logos"
                srcset="../../assets/img/PieJunkie.webp"
                type="image/webp"
              >
              <source
                class="max-h-food-logos"
                srcset="../../assets/img/PieJunkie.png"
                type="image/png"
              >
              <img
                alt="Tasting Room"
                class="max-h-food-logos"
                src="../../assets/img/PieJunkie.png"
              >
            </picture>
          </figure>
          <figure>
            <picture>
              <source
                class="max-h-food-logos"
                srcset="../../assets/img/JK_Bakery.webp"
                type="image/webp"
              >
              <source
                class="max-h-food-logos"
                srcset="../../assets/img/JK_Bakery.jpg"
                type="image/jpg"
              >
              <img
                alt="Tasting Room"
                class="max-h-food-logos"
                src="../../assets/img/JK_Bakery.jpg"
              >
            </picture>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import HeaderTitle from '../Header'

  export default {
    name: 'Food',
    components: {
      HeaderTitle
    }
  }
</script>

<style scoped>
  @import "../../assets/css/tailwind.css";

  .tasting-room {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    .tasting-room {
      font-size: 1.1rem;
    }
  }

  @media (min-width: 1024px) {
    .tasting-room {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1280px) {
    .tasting-room {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 1440px) {
    .tasting-room {
      font-size: 1.6rem;
    }
  }
</style>
