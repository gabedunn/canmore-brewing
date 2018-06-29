<template>
  <section id="social">
    <div class="hero is-black">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-offset-1">
              <h1 class="title is-uppercase">
                Social
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container has-padding-top-lg has-padding-bottom-lg">
      <vue-instagram
        :username="username"
        :token="token"
        :count="count"
      >
        <template
          slot="feeds"
          slot-scope="props"
        >
          <social-post
            :profile-pic="props.feed.user.profile_picture"
            :full-name="props.feed.user.full_name"
            :username="props.feed.user.username"
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
          <div class="fancy-alert"> {{ props.error.error_message }}</div>
        </template>
      </vue-instagram>
    </div>
  </section>
</template>

<script>
import SocialPost from '../SocialPost'
import VueInstagram from '../VueInstagram'

export default {
  name: 'Social',
  components: {
    SocialPost,
    VueInstagram
  },
  data () {
    return {
      username: 'canmorebrewing',
      token: '***REMOVED***',
      count: 3
    }
  }
}
</script>

<style scoped lang="scss">
  $border: 0;
  @import "../../../node_modules/bulma/sass/utilities/mixins";

  .title {
    font-family: "Archivo Black", Arial, sans-serif;
    font-size: 1.7rem;
    @include tablet() {
      font-size: 2rem;
    }
    @include desktop() {
      font-size: 2.5rem;
    }
    @include widescreen() {
      font-size: 3.2rem;
    }
    @include fullhd() {
      font-size: 4.2rem;
    }
  }
</style>
