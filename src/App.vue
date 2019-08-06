<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  // TODO: switch to tailwind

  export default {
    name: 'App',
    metaInfo: {
      title: 'Beer Awesomeness',
      titleTemplate: '%s | Canmore Brewing Company',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ],
      link: [{ rel: 'stylesheet', href: 'https://s3.amazonaws.com/icomoon.io/114779/Socicon/style.css?rd5re8' }]
    }
  }
</script>

<style lang="scss">
  @import "assets/css/styles.scss";
</style>
