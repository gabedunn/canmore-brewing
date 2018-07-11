<template>
  <nav
    class="navbar is-fixed-top is-cb-orange"
    role="navigation"
    aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a
          v-scroll-to="{el:'#landing',offset:0}"
          class="navbar-item"
          href="#"
        >
          <img src="../assets/img/CanmoreBrewingLogo.webp">
        </a>
        <button
          class="button navbar-burger"
          data-target="nav-menu"
        >
          <span/>
          <span/>
          <span/>
        </button>
      </div>
      <div
        id="nav-menu"
        class="navbar-menu"
      >
        <div class="navbar-end">
          <a
            v-scroll-to="{el:'#landing',offset:0}"
            class="navbar-item"
            href="#"
          >
            Home
          </a>
          <a
            v-scroll-to="{el:'#tours'}"
            class="navbar-item"
            href="#"
          >
            Tours
          </a>
          <a
            v-scroll-to="'#social'"
            class="navbar-item"
            href="#"
          >
            Social
          </a>
          <a
            v-scroll-to="'#our-beers'"
            class="navbar-item"
            href="#"
          >
            Our Beers
          </a>
          <a
            v-scroll-to="'#our-story'"
            class="navbar-item"
            href="#"
          >
            Our Story
          </a>
          <!--<a class="navbar-item" href="#" v-scroll-to="'#news'">News</a>-->
          <a
            v-scroll-to="'#beer-locator'"
            class="navbar-item"
            href="#"
          >
            Beer Locator
          </a>
          <a
            v-scroll-to="'#contact'"
            class="navbar-item"
            href="#"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    mounted () {
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
      if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', function () {
            const target = $el.dataset.target
            const $target = document.getElementById(target)
            $el.classList.toggle('is-active')
            $target.classList.toggle('is-active')
          })
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  nav {
    .navbar-brand {
      a.navbar-item {
        padding-top: 0;
        padding-bottom: 0;
      }
    }

    .navbar-menu {
      a.navbar-item {
        font-size: 1.2rem;
        /*font-weight: bold;*/
      }
    }

    .navbar-burger {
      border: none;
      background-color: rgba(0, 0, 0, 0);
    }
  }
</style>
