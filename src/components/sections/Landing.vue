<template>
  <section
    id="landing"
    class="lg:h-screen w-full font-sans bg-fixed"
    :class="{ 'navbar-padding': !enabled }"
  >
    <div class="container flexy">
      <div class="flexy-head flex object-top pt-12 sm:pt-16 pb-8 sm:pb-0">
        <div class="w-full text-center text-white">
          <h1 class="text-4xl sm:text-5xl font-bold">
            Crafted At 1,309 Metres.
          </h1>
          <h2 class="text-2xl sm:text-3xl">
            Have your best day ever, in Canmore.
          </h2>
        </div>
      </div>
      <div class="flexy-body flex flex-col justify-center">
        <div class="flex flex-wrap">
          <div
            v-for="button in buttons.slice(0, 5)"
            :key="button.text"
            class="lg:w-1/5 w-full lg:py-6 py-2 text-center flex flex-none justify-center"
          >
            <a
              v-scroll-to="{el:button.el,offset:0}"
              class="btn btn-orange btn-first"
              href="#"
              v-text="button.text"
            />
          </div>
        </div>
        <div class="inline-flex flex-wrap">
          <div
            v-for="button in buttons.slice(5, 8)"
            :key="button.text"
            class="lg:w-1/3 w-full lg:py-6 py-2 text-center flex flex-none justify-center"
          >
            <a
              v-scroll-to="{el:button.el,offset:0}"
              class="btn btn-orange btn-second"
              href="#"
              v-text="button.text"
            />
          </div>
        </div>
      </div>
      <div class="flexy-foot">
        <div class="w-full text-center text-white">
          <h3 class="text-3xl">
            <a
              v-scroll-to="{el:'#contact'}"
              href="#"
            >Tasting Room & Brewery</a>
          </h3>
          <h4 class="text-xl">
            <a
              v-scroll-to="{el:'#contact'}"
              href="#"
            >Address & Map Below</a>
          </h4>
          <h4>
            <a
              v-scroll-to="{el:'#contact'}"
              href="#"
            >
              <font-awesome-icon
                class="inline-block"
                icon="chevron-down"
              />
            </a>
          </h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { enabled } from '../../assets/content/notification.json'

  export default {
    name: 'LandingPage',
    data () {
      return {
        enabled,
        buttons: [
          {
            text: 'Tasting Room',
            el: '#tasting-room'
          },
          {
            text: 'Food',
            el: '#food'
          },
          {
            text: 'Book a Tour',
            el: '#tours'
          },
          {
            text: 'Social Media',
            el: '#social'
          },
          {
            text: 'Events',
            el: '#events'
          },
          {
            text: 'Our Beers',
            el: '#our-beers'
          },
          {
            text: 'Beer Locator',
            el: '#beer-locator'
          },
          {
            text: 'Our Location',
            el: '#contact'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  #landing {
    background-image: url(../../assets/img/tasting_room/landing-background.webp),
    url(../../assets/img/tasting_room/landing-background.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .navbar-padding {
    padding-top: 4.5rem;
  }

  .flexy {
    @apply flex flex-col;
    height: 100%;
  }

  .flexy-head {
    flex-grow: 0;
    flex-shrink: 0;
  }

  .flexy-body {
    flex-grow: 1;
    flex-shrink: 0;
  }

  .flexy-foot {
    flex-grow: 0;
    flex-shrink: 0;
    padding: 1.5rem;
  }
</style>
