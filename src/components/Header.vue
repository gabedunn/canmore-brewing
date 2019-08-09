<template>
  <div :class="`section-header bg-${backgroundColour} text-${colour}`">
    <div class="container">
      <div class="mx-8 lg:mx-40">
        <h1
          class="title uppercase"
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
  .section-header {
    @apply py-12 font-semibold;
    line-height: 1.125;
  }
</style>
