<template>
  <section id="news">
    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns title-column">
            <div class="column is-offset-1">
              <h1 class="title is-uppercase">
                Latest News
              </h1>
            </div>
          </div>
          <div class="columns">
            <div class="column is-offset-1">
              <div class="columns">
                <news-item
                  v-for="(item, i) in NewsItems"
                  :key="i"
                  :date="item.date"
                  :content="item.content"
                  :img="imgPath(item.image)"
                />
              </div>
            </div>
            <div class="column is-1"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NewsItem from '../NewsItem'

export default {
  name: 'News',
  components: {
    NewsItem
  },
  data () {
    return {
      NewsItems: this.$store.state.news
    }
  },
  methods: {
    imgPath (name) {
      return require('../../assets/img/news/' + name + '.news.jpg')
    }
  }
}
</script>

<style scoped lang="scss">
  #news {
    background-color: black;
    color: white;
  }

  .title-column .title {
    font-family: "Archivo Black", Arial, sans-serif;
    font-size: 4.2rem;
    color: white;
  }
</style>
