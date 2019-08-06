<template>
  <div :class="`section-header bg-${backgroundColour} text-${colour}`">
    <div class="container">
      <div class="mx-8 lg:mx-40">
        <h1
          class="section-title uppercase"
          v-text="title"
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      title: {
        required: true,
        type: String
      },
      backgroundColour: {
        required: false,
        type: String,
        default: 'cbblack-background'
      },
      colour: {
        required: false,
        type: String,
        default: 'white'
      }
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

  .section-header {
    @apply py-12 font-semibold;
    line-height: 1.125;
  }

  .section-title {
    font-family: "Archivo Black", Arial, sans-serif;
    font-size: 1.7rem;
  }

  @media (min-width: 768px) {
    .section-title {
      font-size: 2rem;
    }
  }

  @media (min-width: 1024px) {
    .section-title {
      font-size: 2.5rem;
    }
  }

  @media (min-width: 1280px) {
    .section-title {
      font-size: 3.2rem;
    }
  }

  @media (min-width: 1440px) {
    .section-title {
      font-size: 4.5rem;
    }
  }
</style>
