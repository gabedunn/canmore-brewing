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
        <a
          v-for="item in items"
          :key="item.name"
          v-scroll-to="item.target"
          class="navbar-item"
          href="#"
        >
          <span v-text="item.name" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    data () {
      return {
        items: [
          {
            name: 'Home',
            target: {
              // el: '#landing',
              el: '#notice',
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
            name: 'Food',
            target: {
              el: '#food'
            }
          },
          {
            name: 'Tours',
            target: {
              el: '#tours'
            }
          },
          {
            name: 'Social',
            target: {
              el: '#social'
            }
          },
          {
            name: 'Events',
            target: {
              el: '#events'
            }
          },
          {
            name: 'Our Beers',
            target: {
              el: '#our-beers'
            }
          },
          {
            name: 'Our Story',
            target: {
              el: '#our-story'
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
