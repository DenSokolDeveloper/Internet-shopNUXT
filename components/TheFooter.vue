<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-content-container">
          <ul class="list">
            <li class="list__item--title">
              <n-link :to="{ name: 'audio' }">
                Audio
              </n-link>
            </li>
            <li class="list__item">
              <n-link :to="{ name: 'microheadset' }">
                MicroHeadset
              </n-link>
            </li>
            <li class="list__item">
              <n-link :to="{ name: 'quadcast' }">
                QuadCast
              </n-link>
            </li>
          </ul>
          <ul class="list">
            <li class="list__item--title">
              <n-link :to="{ name: 'headsets' }">
                Headsets
              </n-link>
            </li>
            <li class="list__item">
              <n-link :to="{ name: 'headsets-detail', params: { id: 1 }}">
                Cloud Revolver
              </n-link>
            </li>
            <li class="list__item">
              <n-link :to="{ name: 'headsets-detail', params: { id: 2 }}">
                Cloud Stinger
              </n-link>
            </li>
            <li class="list__item">
              <n-link :to="{ name: 'headsets-detail', params: { id: 3 }}">
                Cloud Alpha S
              </n-link>
            </li>
          </ul>
        </div>
        <div class="footer-content-container">
          <ul class="list">
            <li class="list__item--title">
              <n-link :to="{ name: 'keyboards' }">
                Keyboards
              </n-link>
            </li>
            <li class="list__item">
              <n-link :to="{ name: 'keyboards-detail', params: { id: 1 } }">
                RGB Keyboard
              </n-link>
            </li>
            <li class="list__item">
              <n-link :to="{ name: 'keyboards-detail', params: { id: 2 } }">
                RGB Mech Keyboard
              </n-link>
            </li>
            <li class="list__item">
              <n-link :to="{ name: 'keyboards-detail', params: { id: 3 } }">
                RGB Wireless Keyboard
              </n-link>
            </li>
          </ul>
          <ul class="list">
            <li class="list__item--title">
              <n-link :to="{ name: 'mouses' }">
                Mouses
              </n-link>
            </li>
            <li class="list__item">
              <n-link :to="{ name: 'mouses-detail', params: { id: 1 }}">
                Pulsefire Surge
              </n-link>
            </li>
            <li class="list__item">
              <n-link :to="{ name: 'headsets-detail', params: { id: 2 }}">
                Pulsefire FPS Pro
              </n-link>
            </li>
            <li class="list__item">
              <n-link :to="{ name: 'mouses-detail', params: { id: 3 }}">
                Pulsefire Core
              </n-link>
            </li>
          </ul>
        </div>
        <div class="footer-content-container">
          <ul class="list">
            <li class="list__item--title">
              <n-link :to="{ name: 'about' }">
                About our company
              </n-link>
            </li>
            <li class="list__item">
              <n-link :to="{ name: 'about' }">
                About RealLook shop
              </n-link>
            </li>
            <li class="list__item">
              <n-link :to="{ name: 'about' }">
                High quality of production
              </n-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
.list__item--title>a {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  &:hover {
    color: #ffe500;
  }
}
.list__item>a {
  font-size: 16px;
  font-weight: 500;
  color: #cbcbcb;
  &:hover {
    color: #ffffff;
  }
}
.footer {
  background: linear-gradient(to bottom, #454545,#000000);
  height: 350px;
  width: 100%;
  &-content {
    padding-top: 30px;
    display: flex;
    justify-content: space-around;
  }
}
.container {
  height: 100%;
}
.image {
  width: 20px;
  height: 20px;
  color: #ffffff;
}
</style>
