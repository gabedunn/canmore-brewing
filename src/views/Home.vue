<template>
  <div class="main">
    <navbar />
    <notice v-if="enabled" />
    <landing />
    <tasting-room />
    <our-beers />
    <tours />
    <social />
    <events />
    <about-us />
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
  import OurBeers from '../components/sections/OurBeers'
  import Tours from '../components/sections/Tours'
  import Social from '../components/sections/Social'
  import Events from '../components/sections/Events'
  import AboutUs from '../components/sections/AboutUs'
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
      OurBeers,
      Tours,
      Social,
      Events,
      AboutUs,
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
