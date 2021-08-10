<template>
  <div class="main-layout main-layout__full-width">
    <Header />

    <div
      class="container flex-grid widget widget--horizontal text-align__center"
    >
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
import Header from '@/components/layouts/Header'
export default {
  name: 'DefaultLayout',
  components: {
    Header
  }
}
</script>

<style scoped></style>
