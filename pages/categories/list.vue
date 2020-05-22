<template>
  <div class="categories">
    <div class="container mt-80">
      <ul class="categories-list">
        <li class="categories-list__item">
          <div class="card" style="width: 18rem;">
            <img src="/img/keyboard.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h1 class="card-title">
                Keyboards
              </h1>
              <h5 class="card-subtitle mb-2 text-muted">
                RealLook shop
              </h5>
              <n-link :to="{ name:'keyboards'}" class="btn">
                Look more
              </n-link>
            </div>
          </div>
        </li>
        <li class="categories-list__item">
          <div class="card" style="width: 18rem;">
            <img src="/img/headset.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h1 class="card-title">
                Headphones
              </h1>
              <h5 class="card-subtitle mb-2 text-muted">
                RealLook shop
              </h5>
              <n-link :to="{ name:'headsets'}" class="btn">
                Look more
              </n-link>
            </div>
          </div>
        </li>
        <li class="categories-list__item">
          <div class="card" style="width: 18rem;">
            <img src="/img/mouse.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h1 class="card-title">
                Mouses
              </h1>
              <h5 class="card-subtitle mb-2 text-muted">
                RealLook shop
              </h5>
              <n-link :to="{ name:'mouses'}" class="btn">
                Look more
              </n-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Articles'
}
</script>
<style scoped lang="scss">
.mt-80 {
  margin-top: 80px;
}
.categories {
  &-list {
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    &__item {
      margin: 0 0 10px 0;
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
  width: 175px;
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
