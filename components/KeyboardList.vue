<template>
  <ul class="keyboards-list">
    <keyboard-list-item v-for="keyboard of keyboards" :key="keyboard.id" :keyboard="keyboard" />
  </ul>
</template>

<script>
import KeyboardListItem from './KeyboardListItem'
export default {
  name: 'KeyboardList',
  components: { KeyboardListItem },
  props: {
    keyboards: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.keyboards-list{
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: center;
}
</style>
