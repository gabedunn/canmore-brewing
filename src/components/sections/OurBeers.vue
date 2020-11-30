<template>
  <section id="our-beers">
    <header-title title="Our Core Beers" />
    <div class="beers">
      <beer
        v-for="(beer, i) in filteredCore"
        :key="beer.name"
        :alcohol="beer.abv"
        :ibu="beer.ibu"
        :srm="beer.srm"
        :logo="beer.logo"
        :can="beer.can"
        :title="beer.name"
        :side="i % 2 === 0 ? 'left' : 'right'"
        :colour="beer.textColour"
        :bg="beer.bg"
        :description="beer.description"
      />
    </div>
    <header-title
      v-if="filteredSeasonal.length !== 0"
      title="Our Seasonal Beers"
    />
    <div
      v-if="filteredSeasonal.length !== 0"
      class="beers"
    >
      <beer
        v-for="(beer, i) in filteredSeasonal"
        :key="beer.name"
        :alcohol="beer.abv"
        :ibu="beer.ibu"
        :srm="beer.srm"
        :logo="beer.logo"
        :can="beer.can"
        :title="beer.name"
        :side="i % 2 === 0 ? 'left' : 'right'"
        :colour="beer.textColour"
        :bg="beer.bg"
        :description="beer.description"
      />
    </div>
  </section>
</template>

<script>
  import Beer from '../Beer'
  import HeaderTitle from '../Header'

  import { core, seasonal } from '../../assets/content/beers.json'

  // TODO: add fallback if we have no seasonal beers

  export default {
    name: 'OurBeers',
    components: {
      Beer,
      HeaderTitle
    },
    data () {
      return {
        core,
        seasonal
      }
    },
    computed: {
      filteredCore () {
        return this.core.filter(b => !b.hidden)
      },
      filteredSeasonal () {
        return this.seasonal.filter(b => !b.hidden)
      }
    }
  }
</script>
