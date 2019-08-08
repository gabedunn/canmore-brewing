<template>
  <div class="md:max-w-social-md xl:max-w-social-xl rounded overflow-hidden shadow-md m-4">
    <figure
      v-if="type === 'image' || type === 'carousel'"
      class="w-full"
    >
      <a
        :href="link"
        target="_blank"
      >
        <img
          :src="images.standard_resolution.url"
          alt="Placeholder image"
          class="w-full"
        >
      </a>
    </figure>
    <figure
      v-else-if="type === 'video'"
      class="w-full"
    >
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
    <div class="px-6 py-4">
      <p
        class="text-cbblack-grey text-base"
        v-text="caption"
      />
    </div>
    <div class="px-6 py-4 text-center">
      <time
        :datetime="isoTime"
        class="inline-block text-sm font-semibold text-cbblack-grey"
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

<style scoped>
  @import "../assets/css/tailwind.css";
</style>
