<template>
  <section id="our-beers">
    <header-title title="Our Beers"/>
    <div class="beers">
      <div class="container">
        <div class="mx-8 lg:mx-40 my-12">
          <h1 class="text-4xl font-semibold text-center">Stay Tuned - Our next seasonal is in the tank now.</h1>
          <hr class="bg-cbblack-background h-2 mt-10">
        </div>
      </div>
      <beer
        :alcohol="5"
        :ibu="33"
        :srm="7"
        image="Pale"
        title="Ten Peaks Pale Ale"
        side="left"
      >
        The Valley of the Ten Peaks is one of the most remarkable views in all of Banff National Park, even having the
        distinction of appearing on the twenty dollar bill on two occasions. O Canada!
        <br><br>
        A moderately hopped American style pale
        ale, slightly sweet, biscuity and very quenching. Welcome to craft beer.
      </beer>
      <beer
        :alcohol="6"
        :ibu="60"
        :srm="11"
        image="IPA"
        title="Railway Ave IPA"
        side="right"
        bg="#6c3431"
        colour="white"
      >
        From the very street we call home, to the gentle bend in the pathway in front of the brewery, much of this
        town
        was shaped by the railway history. The trains still rumble by our door a few times a day.
        <br><br>
        This refreshing and crisp west coast style IPA has a healthy dose of malted rye, plenty of hops in the boil
        and
        a thorough dry hop. This IPA is very approachable.
      </beer>
      <beer
        :alcohol="6"
        :ibu="26"
        :srm="23"
        image="Brown"
        title="Georgetown Brown"
        side="left"
        bg="#a2cfc9">
        Who can resist a ghost town story?
        The old coal mining town has mostly faded into the riverbanks of the Bow, just a short hop west of Canmore.
        Follow the Georgetown Trail and see for yourself.
        <br><br>
        With the addition of caramel and chocolate
        malts, this brown ale will entice you over to the dark side – in a good way! Crisp, sweet and soooooo
        caramello.
      </beer>
      <beer
        :alcohol="5"
        :ibu="21"
        :srm="31"
        image="Stout"
        title="Mineside Stout"
        side="right"
        bg="#e15829">
        For over 100 years the west side of the Bow River in Canmore has been known as Mineside, courtesy of the once
        numerous coal mines in the area. It all started in 1887 with the No. 1 Mine at Canmore Creek.
        <br><br>
        Silky smooth and dark, just like the area’s
        coal. This English style stout features pale, chocolate and caramel malts along with roasted and flaked barley
        for a complex, delicious treat.
      </beer>
      <beer
        :alcohol="6.4"
        :ibu="55"
        :srm="3.0"
        image="Misty"
        title="Misty Mountain Hops"
        side="left"
        bg="#B4B4B4">
        When the skies in the Bow Valley turn grey anc cloudy each fall, and the mountain tops turn white, some folks
        pack their bags. Some folks stay for a beer and have some fun - that's us.
        <br><br>
        This New England style IPA is hazy, fruity, and just the right beer to embrace the Fall with. Lots of aroma
        and
        flavour are provided by Hallertau Blanc, Mosaic, and Amarillo hops.
      </beer>
    </div>
  </section>
</template>

<script>
  import Beer from '../Beer'
  import HeaderTitle from '../Header'

  export default {
    name: 'OurBeers',
    components: {
      Beer,
      HeaderTitle
    }
  }
</script>

<style scoped>
  @import "../../assets/css/tailwind.css";
</style>
