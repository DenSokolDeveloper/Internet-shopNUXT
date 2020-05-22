<template>
  <div class="container mt-100">
    <div class="headset">
      <div class="headset-images">
        <img class="img" :src="headset.detailImage" alt="">
        <div class="headset-images__box">
          <img
            v-for="(img, index) of headset.detailImages"
            :key="index"
            :class="{ active: img === headset.detailImage }"
            class="headset-images__preview"
            :src="img"
            alt=""
            @click="onChangeImg(img)"
          >
        </div>
      </div>
      <div class="headset-info">
        <div class="headset-info__title">
          {{ headset.title }}
        </div>
        <div class="headset-info__text">
          {{ headset.detailText }}
        </div>
        <div class="headset-info__price">
          {{ headset.price }}$
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
      const headset = await $axios.$get(`/headsets/${params.id}`)
      return { headset, currentImage: headset.detailImage }
    } catch (e) {
      return error({ statusCode: 404, message: 'Headset not found' })
    }
  },
  methods: {
    onChangeImg (src) {
      this.headset.detailImage = src
    }
  }
}
</script>

<style scoped lang="scss">
  .headset {
    display: flex;
    justify-content: space-between;
  }
  .img {
    border: 1px solid #919191;
    margin: 20px 0;
  }
  .headset-images {
    width: 418px;
  }
  .headset-images__box{
    display: flex;
    justify-content: center;
    & .headset-images__preview{
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
  .headset-info {
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
