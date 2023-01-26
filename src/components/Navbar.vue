<template>
  <nav class="nav fixed-top bg-cborange">
    <div class="container">
      <div class="nav-brand">
        <a
          v-scroll-to="{el:'#landing',offset:0}"
          class="navbar-item"
          href="#"
        >
          <picture>
            <source
              srcset="../assets/img/CanmoreBrewingLogo.webp"
              type="image/webp"
            >
            <source
              srcset="../assets/img/CanmoreBrewingLogo.png"
              type="image/png"
            >
            <img
              alt="Canmore Brewing Logo"
              src="../assets/img/CanmoreBrewingLogo.png"
            >
          </picture>
        </a>
      </div>
      <div class="nav-burger">
        <button data-target="nav-menu">
          <span />
          <span />
          <span />
        </button>
      </div>
      <div class="nav-menu">
        <template v-for="item in items">
          <a
            v-if="item.target"
            :key="item.name"
            v-scroll-to="item.target"
            class="navbar-item"
            href="#"
          >
            <span v-text="item.name" />
          </a>
          <a
            v-else
            :key="item.name"
            class="navbar-item"
            :href="item.href"
            target="blank"
          >
            <span v-text="item.name" />
          </a>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
  import notification from '../assets/content/notification.json'

  export default {
    name: 'NavBar',
    data () {
      return {
        items: [
          {
            name: 'Home',
            target: {
              el: notification.enabled ? '#notice' : '#landing',
              offset: 0
            }
          },
          {
            name: 'Tasting Room',
            target: {
              el: '#tasting-room'
            }
          },
          {
            name: 'Beers',
            target: {
              el: '#our-beers'
            }
          },
          {
            name: 'Tours',
            target: {
              el: '#tours'
            }
          },
          {
            name: 'Events',
            target: {
              el: '#events'
            }
          },
          {
            name: 'About Us',
            target: {
              el: '#about-us'
            }
          },
          {
            name: 'Beer Locator',
            target: {
              el: '#beer-locator'
            }
          },
          {
            name: 'Contact/Hours',
            target: {
              el: '#contact'
            }
          },
          {
            name: 'Shop Online',
            href: 'https://canmorebrewing.square.site/'
          }
        ]
      }
    },
    mounted () {
      const navbarBurger = document.querySelector('.nav-burger button')
      if (navbarBurger) {
        navbarBurger.addEventListener('click', function () {
          const target = navbarBurger.dataset.target
          const targetEl = document.querySelector(`.${target}`)
          navbarBurger.classList.toggle('active')
          targetEl.classList.toggle('active')
        })
      }
    }
  }
</script>
