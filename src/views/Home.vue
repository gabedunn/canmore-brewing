<template>
  <div class="main">
    <navbar/>
    <landing/>
    <tasting-room />
    <tours/>
    <social/>
    <our-beers/>
    <our-story/>
    <beer-locator/>
    <contact/>
    <copy-footer/>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar'
  import Landing from '../components/sections/Landing2'
  import TastingRoom from '../components/sections/TastingRoom'
  import Tours from '../components/sections/Tours'
  import Social from '../components/sections/Social'
  import OurBeers from '../components/sections/OurBeers'
  import OurStory from '../components/sections/OurStory'
  import BeerLocator from '../components/sections/BeerLocator'
  import Contact from '../components/sections/Contact'
  import CopyFooter from '../components/sections/CopyFooter'

  export default {
    name: 'HomePage',
    metaInfo: {
      title: 'Beer Awesomeness'
    // TODO: add canonical link when published
    // link: [{ rel: 'canonical', href: 'https://canmorebrewing.com' }]
    },
    components: {
      Navbar,
      Landing,
      TastingRoom,
      Tours,
      Social,
      OurBeers,
      OurStory,
      BeerLocator,
      Contact,
      CopyFooter
    }
  }
</script>
