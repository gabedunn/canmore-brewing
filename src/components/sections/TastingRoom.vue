<template>
  <section id="tasting-room">
    <header-title title="Tasting Room" />
    <div class="container">
      <div class="mx-40 my-12">
        <div class="tasting-room text-justify text-cbblack-grey font-semibold font-cbsans">
          <p class="py-2">
            Our brewery has a bright and family-friendly tasting room, a retail area and small patio, open 6 days a week
            and located next to the Safeway on Railway Avenue.
          </p>
          <p class="py-2">
            In addition to our usual line up of beers, we also serve seasonal brews, pilot brews (our brewer’s latest
            small batch creations), and our brand new Beer Cocktails. Juice and San Pellegrino are in the self-serve
            case for designated drivers and youngsters.
          </p>
          <p class="py-2">
            The retail area carries Canmore Brewing branded road cycling kit, mountain bike jerseys, an assortment of
            tee shirts and flannels, hats, buffs, glassware and a rotating inventory of fun socks and novelty items.
            Perfect as souvenirs or gifts for your beer-loving friends and family. Everyone looks great in orange!
          </p>
          <p class="py-2">
            Although our brewery does not have a kitchen, we invite you to order a pizza to your table, bring your own
            picnic or
            <a
              v-scroll-to="'#food'"
              href="#"
            >
              click here
            </a>
            to check out the tasty snacks we serve in our tasting room, all thoughtfully selected to go perfectly with
            beer!
          </p>
          <p class="py-2">
            Drop in for a pint, a growler fill or some take away cans. You know you want to!
          </p>

          <p class="py-2">
            <a
              v-scroll-to="'#contact'"
              href="#"
            >Click here to view our summer hours</a>.
          </p>
        </div>
        <figure>
          <picture>
            <source
              srcset="../../assets/img/tasting_room/taps-from-front.webp"
              type="image/webp"
            >
            <source
              srcset="../../assets/img/tasting_room/taps-from-front.jpg"
              type="image/jpg"
            >
            <img
              alt="Tasting Room"
              src="../../assets/img/tasting_room/taps-from-front.jpg"
            >
          </picture>
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
  import HeaderTitle from '../Header'

  export default {
    name: 'TastingRoom',
    components: {
      HeaderTitle
    }
  }
</script>

<style scoped>
  /* noinspection CssInvalidAtRule */
  @tailwind base;
  /* noinspection CssInvalidAtRule */
  @tailwind components;
  /* noinspection CssInvalidAtRule */
  @tailwind utilities;

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
