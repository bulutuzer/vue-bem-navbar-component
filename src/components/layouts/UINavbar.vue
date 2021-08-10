<template>
  <nav class="nav">
    <ul class="nav__menu menu" :class="mods('menu')">
      <UINavbarItems
        v-for="menuItems in menuList"
        :key="menuItems.id"
        :title="menuItems.catTitle"
        :url="menuItems.url + '/' + menuItems.id"
        :item-statu="menuItems.subList"
        :list-type="menuItems.listType"
        :types="[types[0]]"
      />
    </ul>
  </nav>
</template>

<script>
import UINavbarItems from '@/components/layouts/UINavbarItem'

export default {
  name: 'UINavbar',
  inject: ['mods'],
  components: {
    UINavbarItems
  },
  props: {
    types: {
      type: Array,
      default: () => []
    },
    menuList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data: () => ({
    isOpen: false,
    inputArray: []
  }),
  computed: {},
  methods: {}
}
</script>
