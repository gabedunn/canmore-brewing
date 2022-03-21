<template>
  <section
    id="not-found"
    class="hero is-cb-orange is-fullheight"
  >
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1">
          404.
        </h1>
        <h2 class="subtitle is-3">
          The page you are looking for does not exist.
        </h2>
        <h2 class="subtitle is-3 link-path">
          --> {{ $route.fullPath }}
        </h2>
        <h2 class="subtitle is-4 link-home">
          <router-link to="/">
            Go Home.
          </router-link>
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'NotFound'
  }
</script>

<style scoped>
  .link-home a {
    text-decoration: underline;
  }

  .link-path {
    color: hsl(0, 0%, 85%) !important;
  }
</style>
