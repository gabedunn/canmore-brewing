<template>
  <div class="social-card">
    <figure v-if="type === 'IMAGE' || type === 'CAROUSEL_ALBUM'">
      <a
        :href="permalink"
        target="_blank"
      >
        <img
          :src="media"
          alt="instagram post"
        >
      </a>
    </figure>
    <figure v-else-if="type === 'VIDEO'">
      <vue-plyr>
        <video
          playsinline
          controls
          :data-poster="thumbnail"
          loop
        >
          <source
            :src="media"
            type="video/mp4"
          >
        </video>
      </vue-plyr>
    </figure>
    <div class="content">
      <p v-text="caption" />
    </div>
    <div class="timestamp">
      <time
        :datetime="isoTime"
        v-text="time"
      />
    </div>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'SocialPost',
    // TODO: add proper validation for these props
    props: {
      caption: { type: String, required: true },
      type: { type: String, required: true },
      media: { type: String, required: true },
      thumbnail: { type: String, required: false, default: undefined },
      permalink: { type: String, required: true },
      timestamp: { type: String, required: true }
    },
    computed: {
      time () {
        return moment(this.timestamp).format('h:mm A - MMM D, YYYY')
      },
      isoTime () {
        return moment(this.timestamp).format()
      }
    }
  }
</script>
