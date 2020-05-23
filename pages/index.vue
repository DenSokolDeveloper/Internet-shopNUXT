<template>
  <div class="content">
    <section class="main mt-100">
      <div class="container mt-100">
        <div class="main-info">
          <div class="main-info__title">
            Cloud Stingers with 7.1
          </div>
          <div class="main-info__text">
            From the #1 best-selling PC gaming headset brand in America.
          </div>
          <n-link :to="{ name: 'headsets' }" class="btn main-info__btn">
            Read more
          </n-link>
        </div>
      </div>
    </section>
    <section class="categories">
      <ul class="categories-list">
        <li class="categories-list__item">
          <n-link class="link" :to="{ name: 'headsets' }">
            <div class="card">
              <img src="https://media.kingston.com/hyperx/banners/hx-banner-homepage-alpha-s-576x200.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h1 class="card-title">
                  Headphones
                </h1>
                <h5 class="card-subtitle mb-2 text-muted">
                  RealLook shop
                </h5>
              </div>
            </div>
          </n-link>
        </li>
        <li class="categories-list__item">
          <n-link :to="{ name: 'memory' }" class="link">
            <div class="card">
              <img src="https://media.kingston.com/hyperx/banners/hx-homepage-banner-fury-ddr4-rgb.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h1 class="card-title">
                  Memory
                </h1>
                <h5 class="card-subtitle mb-2 text-muted">
                  RealLook shop
                </h5>
              </div>
            </div>
          </n-link>
        </li>
        <li class="categories-list__item">
          <n-link class="link" :to="{ name: 'headsets' }">
            <div class="card">
              <img src="https://media.kingston.com/hyperx/banners/hb-hx-alpha--576x200.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h1 class="card-title">
                  Headphones
                </h1>
                <h5 class="card-subtitle mb-2 text-muted">
                  RealLook shop
                </h5>
              </div>
            </div>
          </n-link>
        </li>
        <li class="categories-list__item">
          <n-link class="link" :to="{ name: 'mouses' }">
            <div class="card">
              <img src="https://media.kingston.com/hyperx/banners/hx-banner-puslefire-dart-576x200.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h1 class="card-title">
                  Mouses
                </h1>
                <h5 class="card-subtitle mb-2 text-muted">
                  RealLook shop
                </h5>
              </div>
            </div>
          </n-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MyCorp'
}
</script>
<style scoped lang="scss">
.main {
  height: 100vh;
  background: url("https://media.kingston.com/hyperx/hero/hx-homepage-hero-cloud-stinger-family-lg.jpg") no-repeat center;
  background-size: cover;
  position: relative;
  &-info {
    position: absolute;
    top: calc(50% - 80px);
    left: calc(50% - 423px);
    color: white;
    text-align: center;
    &__title {
      font-size: 50px;
      font-weight: 800;
    }
    &__text {
      font-size: 30px;
      opacity: .7;
      font-weight: 500;
      margin-bottom: 30px;
    }
  }
}
.categories {
  margin: 10px;
  &-list {
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    &__item {
      & .card {
        width: 362px;
        height: 266px;
        &>img {
          width: 360px;
          height: 176px;
          object-fit: cover;
        }
        &-body {
          background: rgba(146, 146, 146, 0.31);
          text-align: left;
          margin: 0;
          padding: 0 0 0 15px;
          &>.card-title {
            color: #000000;
            font-weight: 400;
          }
          &>.card-subtitle {
            color: #000000;
          }
        }
      }
    }
  }
}
.card-body {
  text-align: center;
  background-color: #000000;
  &>.card-title {
    color: #ffffff;
  }
  &>.card-subtitle {
    color: #ffffff;
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
.link {
  text-decoration: none;
}
</style>
