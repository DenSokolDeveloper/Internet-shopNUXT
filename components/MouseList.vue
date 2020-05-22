<template>
  <ul class="mouses-list">
    <mouse-list-item v-for="mouse of mouses" :key="mouse" :mouse="mouse" />
  </ul>
</template>

<script>
import MouseListItem from './MouseListItem'
export default {
  name: 'MouseList',
  components: { MouseListItem },
  props: {
    mouses: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.mouses-list{
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: center;
}
</style>
