<template>
  <ul class="headsets-list">
    <headset-list-item v-for="headset of headsets" :key="headset.id" :headset="headset" />
  </ul>
</template>

<script>
import HeadsetListItem from './HeadsetListItem'
export default {
  name: 'HeadsetList',
  components: { HeadsetListItem },
  props: {
    headsets: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.headsets-list{
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: center;
}
</style>
