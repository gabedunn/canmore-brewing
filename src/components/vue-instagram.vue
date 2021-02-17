<template>
  <div :class="containerClass">
    <slot
      name="loading"
      :loading="loading"
    />
    <slot
      v-for="(feed, index) in feeds"
      :index="index"
      :feed="feed"
      name="feeds"
    />
    <slot
      name="error"
      :error="error"
    />
  </div>
</template>

<script>
  // import axios from 'axios'
  import { get } from 'r2'

  export default {
    props: {
      /*
       * Instagram access token.
       */
      token: {
        type: String,
        required: true
      },
      /*
       * Media Fields (see https://developers.facebook.com/docs/instagram-basic-display-api/reference/media#fields)
       */
      fields: {
        type: String,
        required: false,
        default: 'caption,media_type,media_url,permalink,thumbnail_url,timestamp,username'
      },
      /*
       * Number of posts rendered.
       */
      count: {
        type: Number,
        default: 1
      },
      /*
       * Kinds of media to filter (Can be IMAGE, VIDEO, or CAROUSEL_ALBUM.).
       */
      mediatypes: {
        type: Array,
        required: false,
        default: () => ['IMAGE', 'VIDEO', 'CAROUSEL_ALBUM']
      },
      // Class for container div
      containerClass: {
        type: String,
        default: '',
        required: false
      }
    },
    data: () => ({
      error: null,
      loading: false,
      feeds: []
    }),
    mounted () {
      if (navigator.userAgent !== 'ReactSnap') {
        this.getUserFeed()
      }
    },
    methods: {
      async getUserFeed () {
        this.loading = true
        const req = await get(`https://graph.instagram.com/me/media?access_token=${this.token}&fields=${this.fields}`)

        const response = await req.response
        const data = await req.json

        this.loading = false
        if (response.status === 400) this.error = response.error.message
        if (response.status === 200) {
          for (const n in data.data) {
            if (this.mediatypes.includes(data.data[n].media_type)) {
              this.feeds.push(data.data[n])
              if (this.feeds.length >= this.count) {
                return
              }
            }
          }
        }
      }
    }
  }
</script>
