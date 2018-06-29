<template>
  <div
    :style="styleObj"
    class="hero"
  >
    <div class="hero-body">
      <div class="container">
        <div
          v-if="side === 'left'"
          class="columns"
        >
          <div class="column is-1"/>
          <div class="column">
            <img
              :src="image"
              :alt="title"
              class="beer-img"
            >
          </div>
          <div class="column has-text-centered">
            <img
              :src="logo"
              :alt="title"
            >
            <p class="beer-description">
              <slot/>
            </p>
            <div class="beer-info has-text-centered">
              <p>{{ alcohol }}% Alc/vol.</p>
              <p>{{ ibu }} IBU</p>
              <p>{{ srm }} SRM</p>
            </div>
          </div>
          <div class="column is-1"/>
        </div>
        <div
          v-else-if="side === 'right'"
          class="columns"
        >
          <div class="column is-1"/>
          <div class="column has-text-centered">
            <img
              :src="logo"
              :alt="title">
            <p class="beer-description">
              <slot/>
            </p>
            <div class="beer-info has-text-centered">
              <p>{{ alcohol }}% Alc/vol.</p>
              <p>{{ ibu }} IBU</p>
              <p>{{ srm }} SRM</p>
            </div>
          </div>
          <div class="column is-2"/>
          <div class="column">
            <img
              :src="image"
              :alt="title"
              class="beer-img"
            >
          </div>
          <!--<div class="column is-1"></div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Beer',
  props: {
    title: {
      type: String,
      required: true
    },
    side: {
      type: String,
      default: 'left',
      validator: value => {
        return value === 'left' || value === 'right'
      }
    },
    bg: {
      type: String,
      default: 'white',
      validator: value => {
        if (value === '') { return false }
        if (value === 'inherit') { return false }
        if (value === 'transparent') { return false }

        const image = document.createElement('img')
        image.style.color = 'rgb(0, 0, 0)'
        image.style.color = value
        if (image.style.color !== 'rgb(0, 0, 0)') { return true }
        image.style.color = 'rgb(255, 255, 255)'
        image.style.color = value
        return image.style.color !== 'rgb(255, 255, 255)'
      }
    },
    colour: {
      type: String,
      default: 'black',
      validator: value => {
        if (value === '') { return false }
        if (value === 'inherit') { return false }
        if (value === 'transparent') { return false }

        const image = document.createElement('img')
        image.style.color = 'rgb(0, 0, 0)'
        image.style.color = value
        if (image.style.color !== 'rgb(0, 0, 0)') { return true }
        image.style.color = 'rgb(255, 255, 255)'
        image.style.color = value
        return image.style.color !== 'rgb(255, 255, 255)'
      }
    },
    logo: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    alcohol: {
      type: Number,
      required: true
    },
    ibu: {
      type: Number,
      required: true
    },
    srm: {
      type: Number,
      required: true
    }
  },
  computed: {
    styleObj () {
      return {
        backgroundColor: this.bg,
        color: this.colour
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .hero-body {
    padding-bottom: 0;
  }

  .beer-description {
    font-family: 'Open Sans', Arial, sans-serif;
    font-size: 1.3rem;
    font-weight: 600;
    padding: 2rem 0;
  }

  .beer-info {
    font-family: 'Oswald', Arial, sans-serif;
    font-size: 1.3rem;
    font-weight: 300;
  }

  .beer-img {
    display: block;
    margin: 0 auto;
  }
</style>
