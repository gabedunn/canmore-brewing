<template>
  <section id="food">
    <header-title title="Food" />
    <div class="container">
      <div class="mx-40 my-12">
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
        <figure>
          <picture>
            <source
              srcset="../../assets/img/PieJunkie.webp"
              type="image/webp"
            >
            <source
              srcset="../../assets/img/PieJunkie.png"
              type="image/png"
            >
            <img
              alt="Tasting Room"
              src="../../assets/img/PieJunkie.png"
            >
          </picture>
        </figure>
        <figure>
          <picture>
            <source
              srcset="../../assets/img/PieJunkie.webp"
              type="image/webp"
            >
            <source
              srcset="../../assets/img/PieJunkie.png"
              type="image/png"
            >
            <img
              alt="Tasting Room"
              src="../../assets/img/PieJunkie.png"
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
    name: 'Food',
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
