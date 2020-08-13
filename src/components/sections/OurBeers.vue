<template>
  <section id="our-beers">
    <header-title title="Our Core Beers" />
    <div class="beers">
      <beer
        v-for="(beer, i) in core.filter(c => !c.name.includes('Highline'))"
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
    <header-title title="Our Seasonal Beers" />
    <div class="beers">
      <beer
        v-for="(beer, i) in seasonal"
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

  export default {
    name: 'OurBeers',
    components: {
      Beer,
      HeaderTitle
    },
    data () {
      return {
        core,
        seasonal,
        beers: [
          {
            name: 'Ten Peaks Pale Ale',
            description: [
              'The Valley of the Ten Peaks is one of the most remarkable views in all of Banff National Park, even having the distinction of appearing on the twenty dollar bill on two occasions. O Canada!',
              'A moderately hopped American style pale ale, slightly sweet, biscuity and very quenching. Welcome to craft beer.'
            ],
            alcohol: 5,
            ibu: 33,
            srm: 7,
            tempBG: '#FFFFFF',
            tempColour: '#000000',
            tempImage: 'Pale'
          },
          {
            name: 'Railway Ave IPA',
            description: [
              'From the very street we call home, to the gentle bend in the pathway in front of the brewery, much of this town was shaped by the railway history. The trains still rumble by our door a few times a day.',
              'This refreshing and crisp west coast style IPA has a healthy dose of malted rye, plenty of hops in the boil and a thorough dry hop. This IPA is very approachable.'
            ],
            alcohol: 6,
            ibu: 60,
            srm: 11,
            tempBG: '#6C3431',
            tempColour: '#FFFFFF',
            tempImage: 'IPA'
          },
          {
            name: 'Georgetown Brown',
            description: [
              'Who can resist a ghost town story? The old coal mining town has mostly faded into the riverbanks of the Bow, just a short hop west of Canmore. Follow the Georgetown Trail and see for yourself.',
              'With the addition of caramel and chocolate malts, this brown ale will entice you over to the dark side – in a good way! Crisp, sweet and soooooo caramello.'
            ],
            alcohol: 6,
            ibu: 26,
            srm: 23,
            tempBG: '#A2CFC9',
            tempColour: '#000000',
            tempImage: 'Brown'
          },
          {
            name: 'Mineside Stout',
            description: [
              'For over 100 years the west side of the Bow River in Canmore has been known as Mineside, courtesy of the once numerous coal mines in the area. It all started in 1887 with the No. 1 Mine at Canmore Creek.',
              'Silky smooth and dark, just like the area’s coal. This English style stout features pale, chocolate and caramel malts along with roasted and flaked barley for a complex, delicious treat.'
            ],
            alcohol: 5,
            ibu: 21,
            srm: 31,
            tempBG: '#E15829',
            tempColour: '#000000',
            tempImage: 'Stout'
          },
          {
            name: 'Misty Mountain Hops',
            description: [
              'When the skies in the Bow Valley turn grey anc cloudy each fall, and the mountain tops turn white, some folks pack their bags. Some folks stay for a beer and have some fun - that\'s us.',
              'This New England style IPA is hazy, fruity, and just the right beer to embrace the Fall with. Lots of aroma and flavour are provided by Hallertau Blanc, Mosaic, and Amarillo hops.'
            ],
            alcohol: 6.4,
            ibu: 55,
            srm: 3,
            tempBG: '#B4B4B4',
            tempColour: '#000000',
            tempImage: 'Misty'
          }
        ]
      }
    }
  }
</script>
