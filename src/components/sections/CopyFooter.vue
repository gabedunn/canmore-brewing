<template>
  <footer class="bg-black pt-10 pb-20 px-6">
    <div class="container">
      <div class="text-center">
        <p>&copy; 2016 - {{ currentYear }} Canmore Brewing Co. All Rights Reserved</p>
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
