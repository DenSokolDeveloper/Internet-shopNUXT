<template>
  <div class="contacts-block">
    <div class="left">
      {{ contact.country }}
    </div>
    <div class="right">
      {{ contact.phone }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactListItem',
  props: {
    contact: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .contacts-block {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #cacaca;
    font-size: 16px;
    color: #000000;
    font-weight: 700;
    padding: 10px 0;
    &:last-child {
      border-bottom: none;
    }
    & .left {
      padding-left: 10px;
      width: 50%;
    }
    & .right {
      width: 50%;
      opacity: .7;
    }
  }
</style>
