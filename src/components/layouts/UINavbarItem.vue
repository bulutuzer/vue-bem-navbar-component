<template>
  <li class="menu__item" :class="mods('menu__item') + ' ' + listType">
    <a
      class="menu__link"
      :class="mods('menu__link')"
      :href="url"
      v-if="!listType"
    >
      {{ title }}
    </a>

    <a
      class="menu__link"
      :class="mods('menu__link')"
      href="javascript:;"
      v-else
    >
      {{ title }}
      <span class="dropdown__sub-menu-line--red">
        <span class="line"></span>
      </span>
    </a>

    <ul class="dropdown__sub-menu flex-grid-column" v-if="listType">
      <li
        v-for="subItems in itemStatu"
        :key="subItems.catTitle"
        class="dropdown__sub-menu--item"
      >
        <a :href="subItems.url" class="dropdown__sub-menu--link">{{
          subItems.catTitle
        }}</a>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'UINavbarItems',
  inject: ['mods'],
  props: {
    title: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    itemStatu: {
      type: Array,
      default: () => {
        return []
      }
    },
    listType: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {}
  },
  methods: {}
}
</script>
