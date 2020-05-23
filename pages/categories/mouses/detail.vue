<template>
  <div class="container mt-100">
    <div class="mouse">
      <div class="mouse-images">
        <img class="img" :src="mouse.detailImage" alt="">
        <div class="mouse-images__box">
          <img
            v-for="(img,index) of mouse.detailImages"
            :key="index"
            :class="{ active: img === mouse.detailImage }"
            class="mouse-images__preview"
            :src="img"
            alt=""
            @click="onChangeImg(img)"
          >
        </div>
      </div>
      <div class="mouse-info">
        <div class="mouse-info__title">
          {{ mouse.title }}
        </div>
        <div class="mouse-info__text">
          {{ mouse.detailText }}
        </div>
        <div class="mouse-info__price">
          {{ mouse.price }}$
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
      const mouse = await $axios.$get(`/mouses/${params.id}`)
      return { mouse, currentImage: mouse.detailImage }
    } catch (e) {
      return error({ statusCode: 404, message: 'Mouse not found' })
    }
  },
  methods: {
    onChangeImg (src) {
      this.mouse.detailImage = src
    }
  }
}
</script>

<style scoped lang="scss">
  .container {
    height: 100vh;
  }
  .mouse {
    display: flex;
    justify-content: space-between;
  }
  .img {
    border: 1px solid #919191;
    margin: 20px 0;
  }
  .mouse-images {
    width: 418px;
  }
  .mouse-images__box{
    display: flex;
    justify-content: center;
    & .mouse-images__preview{
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
  .mouse-info {
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
