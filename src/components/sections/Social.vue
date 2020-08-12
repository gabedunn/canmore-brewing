<template>
  <section id="social">
    <header-title title="social" />
    <div class="container">
      <div class="mx-8 xl:mx-32 mt-10 mb-6">
        <vue-instagram
          :count="1"
          :token="token"
        >
          <template v-slot:feeds="props">
            <figure class="inline-block">
              <a
                :href="`https://instagram.com/${props.feed.username}`"
                target="_blank"
              >
                <img
                  :src="profilePic"
                  alt="Profile Picture"
                  class="hidden md:block rounded-lg max-h-social-logo"
                >
              </a>
            </figure>
            <div class="inline-block align-top pl-4">
              <a
                :href="`https://instagram.com/${props.feed.username}`"
                target="_blank"
              >
                <h1
                  class="font-semibold text-2xl md:text-3xl leading-tight"
                >
                  Canmore Brewing Company
                </h1>
              </a>
              <a
                :href="`https://instagram.com/${props.feed.username}`"
                target="_blank"
              >
                <h2 class="font-normal text-xl">
                  <font-awesome-icon :icon="['fab', 'instagram']" />
                  {{ props.feed.username }}
                </h2>
              </a>
            </div>
          </template>
        </vue-instagram>
      </div>
      <vue-instagram
        :token="token"
        :count="count"
        container-class="flex flex-wrap items-start content-start justify-around mx-6 xl:mx-32 mb-10"
      >
        <template
          slot="feeds"
          slot-scope="props"
        >
          <social-post
            :caption="props.feed.caption"
            :type="props.feed.media_type"
            :media="props.feed.media_url"
            :thumbnail="props.feed.thumbnail_url"
            :permalink="props.feed.permalink"
            :timestamp="props.feed.timestamp"
          />
        </template>
        <template
          slot="error"
          slot-scope="props"
        >
          <div v-text="props.error" />
        </template>
      </vue-instagram>
    </div>
  </section>
</template>

<script>
  import HeaderTitle from '../Header'
  import SocialPost from '../SocialPost'
  import VueInstagram from '@/components/vue-instagram.vue'

  export default {
    name: 'Social',
    components: {
      HeaderTitle,
      SocialPost,
      VueInstagram
    },
    data () {
      return {
        token: process.env.VUE_APP_INSTAGRAM_TOKEN,
        count: 4,
        profilePic: 'https://scontent-ort2-1.cdninstagram.com/v/t51.2885-19/14032974_174713896292602_175919335_a.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_ohc=BqSqmcMRNmcAX-lUg-U&oh=99975640ade9a4b8be519a03f98aaeca&oe=5F5C8BCC'
      }
    }
  }
</script>
