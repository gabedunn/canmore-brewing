<template>
  <div class="column">
    <div class="card">
      <div class="card-image">
        <figure
          v-if="type === 'image' || type === 'carousel'"
          class="image"
        >
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
        <figure
          v-else-if="type === 'video'"
          class="image">
          <plyr>
            <video
              :poster="images.standard_resolution.url"
              loop
            >
              <source
                :src="videos.standard_resolution.url"
                type="video/mp4"
              >
            </video>
          </plyr>
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <a
                :href="profileLink"
                target="_blank"
              >
                <img
                  :src="profilePic"
                  class="profile-pic"
                  alt="Profile Picture"
                >
              </a>
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">
              <a
                :href="profileLink"
                class="full-name"
                target="_blank"
                v-text="fullName"
              />
            </p>
            <p class="subtitle is-6">
              <a
                :href="profileLink"
                target="_blank">@{{ username }}
              </a>
            </p>
          </div>
        </div>

        <div class="content">
          {{ caption }}
          <br>
          <time :datetime="isoTime">{{ time }}</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'SocialPost',
    // TODO: add proper validation for these props
    props: {
      profilePic: {type: String, required: true},
      fullName: {type: String, required: true},
      username: {type: String, required: true},
      createdTime: {type: String, required: true},
      caption: {type: String, required: true},
      images: {type: Object, required: true},
      videos: {type: Object, required: false, default: () => {}},
      link: {type: String, required: true},
      type: {type: String, required: true}
    },
    computed: {
      time () {
        return moment.unix(this.createdTime).format('h:mm A - MMM D, YYYY')
      },
      isoTime () {
        return moment.unix(this.createdTime).format()
      },
      profileLink () {
        return `https://instagram.com/${this.username}`
      }
    }
  }
</script>

<style scoped lang="scss">
  .media-content {
    .title {
      a {
        color: #363636
      }
    }

    .full-name {
      font-size: 1rem
    }

    .subtitle {
      a {
        color: #4a4a4a
      }
    }
  }

  .profile-pic {
    border-radius: 4px;
  }
</style>
