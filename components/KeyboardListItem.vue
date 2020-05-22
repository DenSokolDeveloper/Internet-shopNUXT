<template>
  <li class="keyboards-list__item">
    <div class="keyboards-list__item-info">
      <div class="keyboards-list__item-title">
        {{ keyboard.title }}
      </div>
      <div class="keyboards-list__item-subtitle" v-html="keyboard.previewText" />
      <n-link :to="{name:'keyboards-detail', params: { id: keyboard.id }}" class="btn">
        View more
      </n-link>
    </div>
  </li>
</template>

<script>
export default {
  name: 'KeyboardListItem',
  props: {
    keyboard: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.keyboards-list {
  &__item {
    background: url("/img/keyboard-bg-01.jpg") no-repeat center;
    background-size: cover;
    min-height: 750px;
    color: #ffffff;
    font-weight: 800;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &-title {
      font-size: 50px;
    }
    &-info {
      margin-left: 100px;
      width: 500px;
      text-align: center;
    }
    &-subtitle {
      opacity: 0.8;
      font-size: 30px;
      font-weight: 500;
      margin-bottom: 20px;
    }
  }
}
.btn {
  width: 200px;
  margin: 0;
  padding: 0;
  background: linear-gradient(to bottom, #ff0000, #570000);
  color: #000000;
  font-size: 24px;
  font-weight: 800;
  border: 2px solid #000000;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  &:hover {
    background: #000000;
    color: #ffffff;
    transition: color .4s linear;
  }
  &:focus {
    background: #000000;
    color: #ffffff;
    outline: none;
    box-shadow: none;
  }
}
</style>
