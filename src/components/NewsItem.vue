<template>
  <div class="column is-half">
    <div class="news-item">
      <p
        class="date has-padding-bottom-sm"
        v-text="date"
      />
      <p
        class="news-content has-text-justified"
        v-text="content"
      />
      <figure class="image has-padding-top-lg">
        <img
          :src="img"
          :alt="date"
        >
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsItem',
  props: {
    date: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .date {
    font-family: "Oswald", Arial, sans-serif;
    font-size: 1.5rem;
    color: #818181;
  }

  .news-content {
    font-family: "Open Sans", Arial, sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
  }
</style>
