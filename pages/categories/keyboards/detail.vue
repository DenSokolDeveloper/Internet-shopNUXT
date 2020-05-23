<template>
  <div class="container mt-100">
    <div class="keyboard">
      <div class="keyboard-images">
        <img class="img" :src="keyboard.detailImage" alt="">
        <div class="keyboard-images__box">
          <img
            v-for="(img, index) of keyboard.detailImages"
            :key="index"
            :class="{ active: img === keyboard.detailImage }"
            class="keyboard-images__preview"
            :src="img"
            alt=""
            @click="onChangeImg(img)"
          >
        </div>
      </div>
      <div class="keyboard-info">
        <div class="keyboard-info__title">
          {{ keyboard.title }}
        </div>
        <div class="keyboard-info__text">
          {{ keyboard.detailText }}
        </div>
        <div class="keyboard-info__price">
          {{ keyboard.price }}$
        </div>
        <button class="btn keyboard-info__btn">
          Buy now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailPage',
  async asyncData ({ $axios, params, error }) {
    try {
      const keyboard = await $axios.$get(`/keyboards/${params.id}`)
      return { keyboard, currentImage: keyboard.detailImage }
    } catch (e) {
      return error({ statusCode: 404, message: 'Keyboard not found' })
    }
  },
  methods: {
    onChangeImg (src) {
      this.keyboard.detailImage = src
    }
  }
}
</script>

<style scoped lang="scss">
  .container {
    height: 100vh;
  }
form {
  display: none;
}
.keyboard {
  display: flex;
  justify-content: space-between;
}
.img {
  border: 1px solid #919191;
  margin: 20px 0;
}
.keyboard-images {
  width: 418px;
}
.keyboard-images__box{
  display: flex;
  justify-content: center;
  & .keyboard-images__preview{
    border: 1px solid #919191;
    margin-right: 16px;
    object-fit: cover;
    width: 18%;
    height: 70px;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
    &.active {
      border-color: #000000;
      &:hover {
        border-color: #000000;
      }
    }
    &:hover {
      border-color: #ff0000;
    }
  }
}
.keyboard-info {
  width: 640px;
  text-align: center;
  &__title {
    margin-top: 50px;
    font-size: 40px;
    color: #000;
    font-weight: 800;
    font-style: italic;
  }
  &__text {
    margin-top: 10px;
    font-size: 20px;
    color: #000;
    font-weight: 300;
  }
  &__price {
    margin-top: 10px;
    font-size: 50px;
    color: #000;
    font-weight: 500;
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
