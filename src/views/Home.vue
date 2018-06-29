<template>
  <div class="main">
    <navbar/>
    <landing/>
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
import Landing from '../components/sections/Landing'
import Tours from '../components/sections/Tours'
import Social from '../components/sections/Social'
import OurBeers from '../components/sections/OurBeers'
import OurStory from '../components/sections/OurStory'
import News from '../components/sections/News'
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
    Tours,
    Social,
    OurBeers,
    OurStory,
    News,
    BeerLocator,
    Contact,
    CopyFooter
  }
}
</script>
