<template>
  <section id="food">
    <header-title title="Food"/>
    <div class="container">
      <div class="mx-8 lg:mx-40 my-12">
        <div class="tasting-room text-justify text-cbblack-grey font-semibold font-cbsans">
          <p>
            We are super proud of our beautiful brewery and love to show it off. Book a tour to learn more about
            where we came from and how we make our delicious beer.
          </p>
          <p>
            Regular tours are available every Saturday from 1:30-2:30. Click the button below to reserve your
            spot. Private
            tours for 10 or more and private events are also available. Come celebrate with us. For more info
            please contact.
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
