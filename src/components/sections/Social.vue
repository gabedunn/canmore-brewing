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
    <div class="container has-padding-top-lg">
      <div class="columns profile-pic-columns">
        <div class="column">
          <vue-instagram
            :token="token"
            :count="1"
          >
            <template
              slot="feeds"
              slot-scope="props"
            >
              <figure class="profile-pic image is-64x64 is-hidden-when-small">
                <a
                  :href="`https://instagram.com/${props.feed.user.username}`"
                  target="_blank"
                >

                  <img
                    :src="props.feed.user.profile_picture"
                    alt="Profile Picture"
                  >
                </a>
              </figure>
              <div class="profile-info has-padding-left-md">
                <a
                  :href="`https://instagram.com/${props.feed.user.username}`"
                  target="_blank"
                >
                  <h1
                    class="title is-3 is-5-mobile"
                    v-text="props.feed.user.full_name"
                  />
                </a>
                <a
                  :href="`https://instagram.com/${props.feed.user.username}`"
                  target="_blank"
                >
                  <h2 class="subtitle is-5-desktop">
                    <font-awesome-icon :icon="['fab', 'instagram']" />
                    {{ props.feed.user.username }}
                  </h2>
                </a>
              </div>
            </template>
          </vue-instagram>
        </div>
      </div>
    </div>
    <div class="container has-padding-top-md has-padding-bottom-lg">
      <vue-instagram
        :token="token"
        :count="count"
        container-class="columns ig-feed"
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
          <div class="fancy-alert"> {{ props.error.error_message }}</div>
        </template>
      </vue-instagram>
    </div>
  </section>
</template>

<script>
  import SocialPost from '../SocialPost'
  import VueInstagram from 'vue-instagram'

  export default {
    name: 'Social',
    components: {
      SocialPost,
      VueInstagram
    },
    data () {
      return {
        token: '3682787925.cd9b449.fd5b02affc984d409912e9dcbb54e996',
        count: 4
      }
    }
  }
</script>

<style scoped lang="scss">
  $border: 0;
  @import "../../../node_modules/bulma/sass/utilities/mixins";

  .profile-pic {
    display: inline-block;
    img {
      border-radius: 7px;
    }
  }

  .profile-info {
    display: inline-block;
    vertical-align: top;
  }

  .profile-pic-columns, .ig-feed {
    margin: 0;
  }

  .is-hidden-when-small {
    @media (max-width: 510px) {
      display: none;
    }
  }

  .hero .title {
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
