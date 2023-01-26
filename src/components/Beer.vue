<template>
  <div
    :style="styleObj"
    class="hero"
  >
    <div class="container">
      <div class="mx-8 lg:mx-40 py-10 flex flex-wrap items-center justify-around">
        <div class="md:w-1/2 inline-block text-center">
          <picture>
            <source
              :srcset="logoWebp"
              type="image/webp"
            >
            <source
              :srcset="logo"
              type="image/png"
            >
            <img
              :alt="title"
              :src="logo"
              class="mx-auto"
            >
          </picture>
          <marked
            :markdown="description"
            :marked-class="`prose-xl font-cbsans font-semibold text-${colour} py-8`"
          />
          <div class="font-beer-info font-light text-xl">
            <p>{{ alcohol }}% Alc/vol.</p>
            <p>{{ ibu }} IBU</p>
            <p>{{ srm }} SRM</p>
          </div>
        </div>
        <div :class="`inline-block md:order-${imageOrder} pt-8 md:pt-0`">
          <picture>
            <source
              :srcset="canWebp"
              type="image/webp"
            >
            <source
              :srcset="can"
              type="image/png"
            >
            <img
              :alt="title"
              :src="can"
              class="mx-auto"
            >
          </picture>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Marked from '@/components/Marked.vue'
  export default {
    name: 'BeerItem',
    components: { Marked },
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
        validator: value => ['black', 'white'].some(c => c === value)
      },
      description: {
        type: String,
        required: true
      },
      logo: {
        type: String,
        required: true
      },
      can: {
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
      },
      logoWebp () {
        return this.logo.replace(/.png$/, '.webp')
      },
      canWebp () {
        return this.can.replace(/.png$/, '.webp')
      }
    }

  }
</script>
