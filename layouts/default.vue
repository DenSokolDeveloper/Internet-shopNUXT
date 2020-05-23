<template>
  <div>
    <TheHeader />
    <nuxt class="pages" />
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'
export default {
  components: { TheFooter, TheHeader }
}
</script>
<style scoped lang="scss">
.mt-100 {
  margin-top: 44px;
}
.pages {
  height: 100%;
}
</style>
