<template>
  <header class="header order-0">
    <TopHeader>
      <UINavbar :types="['top', 'horizontal']" :menu-list="topMenuList">
      </UINavbar>
    </TopHeader>

    <div
      class="header__main-menu-content container flex-grid flex-space-between"
    >
      <div class="header__main-menu-content--border-top">
        <div class="flex-grid flex-grid-cell flex-grid-align-center">
          <h1 class="header__logo">
            <a href="index.html" title="Coss Logo">
              <img src="@/static/logos/main-logo.png" alt="Coss" />
            </a>
          </h1>

          <UINavbar :types="['main', 'horizontal']" :menu-list="mainMenuList">
          </UINavbar>
        </div>

        <button class="header__open-nav-button open-menu hidden-mobile-content">
          <i class="open-menu-icon"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import UINavbar from '../layouts/UINavbar'
import TopHeader from '../layouts/TopHeader'

export default {
  name: 'Header',
  components: {
    UINavbar,
    TopHeader
  },
  data() {
    return {
      //http://localhost:3084/categories
      mainMenuList: [],
      topMenuList: []
    }
  },
  async created() {
    await this.fetchTopMenuData()
    await this.fetchMainMenuData()
  },
  methods: {
    async fetchTopMenuData() {
      try {
        const response = await this.$axios.get('/categories/topMenu')
        this.topMenuList = response.data
      } catch (error) {
        console.warn('Not good man :(')
      }
    },
    async fetchMainMenuData() {
      try {
        const response = await this.$axios.get('/categories/mainMenu')
        this.mainMenuList = response.data
      } catch (error) {
        console.warn('Not good man :(')
      }
    }
  }
}
</script>
