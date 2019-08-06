<template>
  <section id="events">
    <header-title title="events"/>
    <div class="container">
      <div class="mx-40 my-12">
        <div class="flex flex-wrap items-stretch justify-around">
          <event
            v-for="event in events"
            :date="event.date"
            :description="event.description"
            :key="event.name"
            :name="event.name"
            :time="event.time"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import HeaderTitle from '../Header'
  import Event from '../Event'

  export default {
    name: 'Events',
    components: {
      Event,
      HeaderTitle
    },
    data () {
      return {
        events: [
          {
            name: 'Backlot Bash',
            date: 'August 24, 2019',
            time: '7:00 PM',
            description: 'A great brewery party with half price craft beer, two bands, a grilled-cheese truck, and ' +
              'much more! Come and join us!'
          },
          {
            name: 'Event #2',
            date: 'August 31, 2019',
            time: '8:00 PM',
            description: 'This is a filler event for the time being. It has no real meaning and if you can see this ' +
              'I\'ve messed up.'
          },
          {
            name: 'Event #3',
            date: 'September 3, 2019',
            time: '5:00 PM',
            description: 'Yet another fake event that is not supposed to ever be public facing. This should not be ' +
              'seen by anyone other than myself.'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  /* noinspection CssInvalidAtRule */
  @tailwind base;
  /* noinspection CssInvalidAtRule */
  @tailwind components;
  /* noinspection CssInvalidAtRule */
  @tailwind utilities;

  .tasting-room {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    .tasting-room {
      font-size: 1.1rem;
    }
  }

  @media (min-width: 1024px) {
    .tasting-room {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1280px) {
    .tasting-room {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 1440px) {
    .tasting-room {
      font-size: 1.6rem;
    }
  }
</style>
