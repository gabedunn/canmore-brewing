<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>&copy;  2016 - {{ currentYear }} Canmore Brewing Co. All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CopyFooter',
  computed: {
    currentYear () {
      return new Date().getFullYear().toString()
    }
  }
}
</script>
