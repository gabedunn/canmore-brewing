<template>
  <div
    :style="styleObj"
    class="hero"
  >
    <div class="container">
      <div class="mx-8 lg:mx-40 my-12 flex flex-wrap items-center justify-around">
        <div class="md:w-1/2 inline-block text-center">
          <picture>
            <source
              :srcset="logo('webp')"
              type="image/webp"
            >
            <source
              :srcset="logo('png')"
              type="image/png"
            >
            <img
              :alt="title"
              :src="logo('png')"
              class="mx-auto"
            >
          </picture>
          <p class="beer-description font-cbsans font-semibold text-xl py-8">
            <slot/>
          </p>
          <div class="font-beer-info font-light text-xl">
            <p>{{ alcohol }}% Alc/vol.</p>
            <p>{{ ibu }} IBU</p>
            <p>{{ srm }} SRM</p>
          </div>
        </div>
        <div :class="`inline-block md:order-${imageOrder} pt-8 md:pt-0`">
          <picture>
            <source
              :srcset="can('webp')"
              type="image/webp"
            >
            <source
              :srcset="can('png')"
              type="image/png"
            >
            <img
              :alt="title"
              :src="can('png')"
              class="mx-auto"
            >
          </picture>
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
      },
      imageOrder () {
        return this.side === 'left' ? 'first' : 'last'
      }
    },
    methods: {
      can (type) {
        return require('../assets/img/beers/' + this.image + '.can.' + type)
      },
      logo (type) {
        return require('../assets/img/logo/' + this.image + '.logo.' + type)
      }
    }

  }
</script>
