<template>
  <div class="keyboards">
    <KeyboardList :keyboards="keyboards" />
  </div>
</template>

<script>
import KeyboardList from '../../../components/KeyboardList'
export default {
  name: 'List',
  components: { KeyboardList },
  async asyncData ({ $axios }) {
    let keyboards = []
    try {
      keyboards = await $axios.$get('/keyboards')
    } catch (e) {
    }
    return { keyboards }
  }
}
</script>

<style scoped lang="scss">
.keyboards {
  margin-top: 44px;
}
</style>
