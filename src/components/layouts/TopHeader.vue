<template>
  <div class="header__top hidden-desktop-content">
    <div class="header__top--red-line"></div>
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopHeader',
  props: {}
}
</script>
