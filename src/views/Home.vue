<template>
  <div class="main">
    <navbar />
    <notice v-if="enabled" />
    <landing />
    <tasting-room />
    <food />
    <tours />
    <social />
    <events />
    <our-beers />
    <our-story />
    <beer-locator />
    <contact />
    <copy-footer />
  </div>
</template>

<script>
  import Notice from '../components/sections/Notice'
  import Navbar from '../components/Navbar'
  import Landing from '../components/sections/Landing'
  import TastingRoom from '../components/sections/TastingRoom'
  import Food from '../components/sections/Food'
  import Tours from '../components/sections/Tours'
  import Social from '../components/sections/Social'
  import Events from '../components/sections/Events'
  import OurBeers from '../components/sections/OurBeers'
  import OurStory from '../components/sections/OurStory'
  import BeerLocator from '../components/sections/BeerLocator'
  import Contact from '../components/sections/Contact'
  import CopyFooter from '../components/sections/CopyFooter'

  import notification from '../assets/content/notification.json'

  // TODO: add an awards section

  export default {
    name: 'HomePage',
    metaInfo: {
      title: 'Beer Awesomeness',
      link: [{ rel: 'canonical', href: 'https://canmorebrewing.com' }]
    },
    components: {
      Navbar,
      Notice,
      Landing,
      TastingRoom,
      Food,
      Tours,
      Social,
      Events,
      OurBeers,
      OurStory,
      BeerLocator,
      Contact,
      CopyFooter
    },
    data () {
      return {
        enabled: notification.enabled
      }
    }
  }
</script>
