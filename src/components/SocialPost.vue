<template>
  <div class="social-card">
    <figure v-if="type === 'image' || type === 'carousel'">
      <a
        :href="link"
        target="_blank"
      >
        <img
          :src="images.standard_resolution.url"
          alt="Placeholder image"
        >
      </a>
    </figure>
    <figure v-else-if="type === 'video'">
      <vue-plyr>
        <video
          :poster="images.standard_resolution.url"
          loop
        >
          <source
            :src="videos.standard_resolution.url"
            type="video/mp4"
          >
        </video>
      </vue-plyr>
    </figure>
    <div>
      <p v-text="caption" />
    </div>
    <div>
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
      createdTime: { type: String, required: true },
      caption: { type: String, required: true },
      images: { type: Object, required: true },
      videos: { type: Object, required: false, default: () => {} },
      link: { type: String, required: true },
      type: { type: String, required: true }
    },
    computed: {
      time () {
        return moment.unix(this.createdTime).format('h:mm A - MMM D, YYYY')
      },
      isoTime () {
        return moment.unix(this.createdTime).format()
      }
    }
  }
</script>
