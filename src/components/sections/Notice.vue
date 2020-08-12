<template>
  <section
    id="notice"
    :class="`bg-${colour}-600`"
  >
    <div class="section-header bg-red text-white text-center">
      <div class="container">
        <div class="mx-8 lg:mx-40">
          <h1
            class="title uppercase"
            v-text="title"
          />
          <h2
            v-for="sub in subtitle"
            :key="sub"
            class="uppercase text-2xl mt-2"
            v-text="sub"
          />
        </div>
      </div>
    </div>
    <div class="container px-2 lg:px-8 text-center">
      <div class="text-standard text-white">
        <p
          class="p-m-0"
          v-text="content"
        />
      </div>
      <a
        v-if="buttonStatus"
        :href="url"
      >
        <button class="btn btn-orange mt-8">
          <span
            v-for="line in button"
            :key="line"
          >
            {{ line }}
            <br>
          </span>
        </button>
      </a>
    </div>
  </section>
</template>

<script>
  import { enabled, colour, title, subtitle, content, button_status as buttonStatus, button, url } from '../../assets/content/notification.json'

  export default {
    name: 'Notice',
    data () {
      return {
        currentTime: (new Date()).getTime(),
        openTime: 1592330400000,
        enabled,
        colour,
        title,
        subtitle,
        content,
        buttonStatus,
        button,
        url
      }
    }
  }
</script>

<style scoped>
  #notice {
    padding-top: 4.5rem;
    padding-bottom: 3rem;
  }

  p {
    @apply font-cbsans font-semibold my-3;
  }

  p.p-m-0 {
    margin-top: 0;
    margin-bottom: 0;
  }

  a {
    text-decoration: underline;
  }

  a .btn {
    @apply font-bold px-4 shadow-2xl-dark;
    text-decoration: none;
  }

  .section-header {
    @apply py-12 font-semibold;
    line-height: 1.125;
  }

  .title {
    @apply font-cbtitle;
  }

  @media (min-width: 768px) {
    .title {
      font-size: 1.3rem;
    }
  }

  @media (min-width: 1024px) {
    .title {
      font-size: 1.8rem;
    }
  }

  @media (min-width: 1280px) {
    .title {
      font-size: 2.6rem;
    }
  }

  @media (min-width: 1440px) {
    .title {
      font-size: 3.1rem;
    }
  }
</style>
