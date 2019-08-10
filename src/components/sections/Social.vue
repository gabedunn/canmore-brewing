<template>
  <section id="social">
    <header-title title="social"/>
    <div class="container">
      <div class="mx-8 xl:mx-32 mt-10 mb-6">
        <vue-instagram
          :count="1"
          :token="token"
        >
          <template
            slot="feeds"
            slot-scope="props"
          >
            <figure class="inline-block">
              <a
                :href="`https://instagram.com/${props.feed.user.username}`"
                target="_blank"
              >

                <img
                  :src="props.feed.user.profile_picture"
                  alt="Profile Picture"
                  class="hidden md:block rounded-lg max-h-social-logo"
                >
              </a>
            </figure>
            <div class="inline-block align-top pl-4">
              <a
                :href="`https://instagram.com/${props.feed.user.username}`"
                target="_blank"
              >
                <h1
                  class="font-semibold text-2xl md:text-3xl leading-tight"
                  v-text="props.feed.user.full_name"
                />
              </a>
              <a
                :href="`https://instagram.com/${props.feed.user.username}`"
                target="_blank"
              >
                <h2 class="font-normal text-xl">
                  <font-awesome-icon :icon="['fab', 'instagram']"/>
                  {{ props.feed.user.username }}
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
            :created-time="props.feed.created_time"
            :caption="props.feed.caption.text"
            :images="props.feed.images"
            :link="props.feed.link"
            :type="props.feed.type"
            :videos="props.feed.videos"
          />
        </template>
        <template
          slot="error"
          slot-scope="props"
        >
          <div v-text="props.error.error_message"/>
        </template>
      </vue-instagram>
    </div>
  </section>
</template>

<script>
  import HeaderTitle from '../Header'
  import SocialPost from '../SocialPost'
  import VueInstagram from 'vue-instagram'

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
        count: 4
      }
    }
  }
</script>
