<template>
  <div class="headsets">
    <HeadsetList :headsets="headsets" />
  </div>
</template>

<script>
import HeadsetList from '../../../components/HeadsetList'
export default {
  name: 'List',
  components: { HeadsetList },
  async asyncData ({ $axios }) {
    let headsets = []
    try {
      headsets = await $axios.$get('/headsets')
    } catch (e) {
    }
    return { headsets }
  }
}
</script>

<style scoped lang="scss">
.headsets {
  margin-top: 44px;
}
</style>
