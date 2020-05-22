<template>
  <li class="mouses-list__item">
    <div class="mouses-list__item-info">
      <div class="mouses-list__item-title">
        {{ mouse.title }}
      </div>
      <div class="mouses-list__item-subtitle" v-html="mouse.previewText" />
      <n-link :to="{name:'mouses-detail', params: { id: mouse.id }}" class="btn">
        View more
      </n-link>
    </div>
  </li>
</template>

<script>
export default {
  name: 'MouseListItem',
  props: {
    mouse: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.mouses-list {
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: center;
  &__item {
    background: url("/img/mouse-bg-01.jpg") no-repeat center;
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
    background: linear-gradient(to bottom,#ffffff,#000000);
    color: #ff0000;
    transition: color .4s linear;
  }
  &:focus {
    background: linear-gradient(to bottom,#ffffff,#000000);
    color: #ff0000;
    outline: none;
    box-shadow: none;
  }
}
</style>
