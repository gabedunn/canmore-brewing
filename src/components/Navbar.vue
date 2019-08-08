<template>
  <nav
    class="navbar is-fixed-top is-cborange"
    role="navigation"
    aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a
          v-scroll-to="{el:'#landing',offset:0}"
          class="navbar-item"
          href="#"
        >
          <picture>
            <source
              srcset="../assets/img/CanmoreBrewingLogo.webp"
              type="image/webp">
            <source
              srcset="../assets/img/CanmoreBrewingLogo.png"
              type="image/png">
            <img
              alt="Canmore Brewing Logo"
              src="../assets/img/CanmoreBrewingLogo.png"
            >
          </picture>
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
            v-scroll-to="{el:'#tasting-room'}"
            class="navbar-item"
            href="#"
          >
            Tasting Room
          </a>
          <a
            v-scroll-to="{el:'#food'}"
            class="navbar-item"
            href="#"
          >
            Food
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
            v-scroll-to="'#events'"
            class="navbar-item"
            href="#"
          >
            Events
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
            Contact/Hours
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  // TODO: switch to tailwind

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

<style scoped>
  @import "../assets/css/tailwind.css";

  .navbar {
    background-color: white;
    min-height: 4.5rem;
    position: relative;
    z-index: 30;
  }

  .navbar.is-cborange {
    background-color: #F45A24;
    color: #fff;
  }

  .navbar.is-cborange .navbar-brand > .navbar-item:hover {
    background-color: #f2480c;
  }

  .navbar.is-cborange .navbar-burger {
    color: #fff;
  }

  @media screen and (min-width: 1088px) {
    .navbar.is-cborange .navbar-end > .navbar-item {
      color: #fff;
    }

    .navbar.is-cborange .navbar-end > .navbar-item:hover {
      background-color: #f2480c;
    }
  }

  .navbar > .container {
    align-items: stretch;
    display: flex;
    min-height: 4.5rem;
    width: 100%;
  }

  .navbar.is-fixed-top {
    left: 0;
    position: fixed;
    right: 0;
    z-index: 30;
    top: 0;
  }

  .navbar-brand {
    align-items: stretch;
    display: flex;
    flex-shrink: 0;
    min-height: 4.5rem;
  }

  .navbar-burger {
    color: #4a4a4a;
    cursor: pointer;
    display: block;
    height: 4.5rem;
    position: relative;
    width: 4.5rem;
    margin-left: auto;
  }

  .navbar-burger span {
    background-color: currentColor;
    display: block;
    height: 1px;
    left: calc(50% - 8px);
    position: absolute;
    transform-origin: center;
    transition-duration: 86ms;
    transition-property: background-color, opacity, transform;
    transition-timing-function: ease-out;
    width: 16px;
  }

  .navbar-burger span:nth-child(1) {
    top: calc(50% - 6px);
  }

  .navbar-burger span:nth-child(2) {
    top: calc(50% - 1px);
  }

  .navbar-burger span:nth-child(3) {
    top: calc(50% + 4px);
  }

  .navbar-burger:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .navbar-burger.is-active span:nth-child(1) {
    transform: translateY(5px) rotate(45deg);
  }

  .navbar-burger.is-active span:nth-child(2) {
    opacity: 0;
  }

  .navbar-burger.is-active span:nth-child(3) {
    transform: translateY(-5px) rotate(-45deg);
  }

  .navbar-menu {
    display: none;
  }

  .navbar-item {
    color: #4a4a4a;
    display: block;
    line-height: 1.5;
    padding: 0.5rem 0.75rem;
    position: relative;
    cursor: pointer;
    flex-grow: 0;
    flex-shrink: 0;
  }

  .navbar-item:hover {
    background-color: #fafafa;
    color: #3273dc;
  }

  .navbar-item img {
    max-height: 4.25rem;
  }

  @media screen and (max-width: 1087px) {
    .navbar > .container {
      display: block;
    }

    .navbar-brand .navbar-item {
      align-items: center;
      display: flex;
    }

    .navbar-menu {
      background-color: white;
      box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
      padding: 0.5rem 0;
    }

    .navbar-menu.is-active {
      display: block;
    }

    .navbar.is-fixed-top .navbar-menu {
      -webkit-overflow-scrolling: touch;
      max-height: calc(100vh - 4.5rem);
      overflow: auto;
    }
  }

  @media screen and (min-width: 1088px) {
    .navbar,
    .navbar-menu,
    .navbar-end {
      align-items: stretch;
      display: flex;
    }

    .navbar {
      min-height: 4.5rem;
    }

    .navbar-burger {
      display: none;
    }

    .navbar-item {
      align-items: center;
      display: flex;
    }

    .navbar-menu {
      flex-grow: 1;
      flex-shrink: 0;
    }

    .navbar-end {
      justify-content: flex-end;
      margin-left: auto;
    }

    .navbar > .container .navbar-brand {
      margin-left: -0.75rem;
    }

    .navbar > .container .navbar-menu {
      margin-right: -0.75rem;
    }
  }

  .navbar-brand a.navbar-item {
    @apply py-0;
  }

  .navbar-menu a.navbar-item {
    @apply text-xl;
  }

  .navbar-burger {
    @apply bg-transparent border-none;
  }
</style>
