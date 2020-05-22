<template>
  <div class="mouses">
    <MouseList :mouses="mouses" />
  </div>
</template>

<script>
import MouseList from '../../../components/MouseList'
export default {
  name: 'List',
  components: { MouseList },
  async asyncData ({ $axios }) {
    let mouses = []
    try {
      mouses = await $axios.$get('/mouses')
    } catch (e) {
    }
    return { mouses }
  }
}
</script>

<style scoped lang="scss">
.mouses {
  margin-top: 44px;
}
</style>
