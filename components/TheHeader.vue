<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <div class="header__item">
          <div class="header__item-logo" />
          <n-link class="header__item-title" :to="{ name: 'home'}" exact exact-active-class="active">
            RealLook shop
          </n-link>
        </div>
        <div class="header__item mr-auto">
          <ul class="list">
            <li class="list__item">
              <n-link class="list__item-link" :to="{ name: 'categories'}" exact exact-active-class="active">
                Сategories
              </n-link>
            </li>
            <li class="list__item">
              <n-link class="list__item-link" :to="{ name: 'categories-add'}" exact exact-active-class="active">
                Add product
              </n-link>
            </li>
            <li class="list__item">
              <n-link class="list__item-link" :to="{ name: 'about'}" exact exact-active-class="active">
                About us
              </n-link>
            </li>
          </ul>
        </div>
        <div class="header__item">
          <n-link class="header__item-btn" :to="{name: 'login'}">Login</n-link>
          <n-link class="header__item-btn" :to="{name: 'registration'}">Registration</n-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.header {
  background: linear-gradient(to right, #ff0200, #d40000);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}
.header-wrapper {
  display: flex;
}
.header__item{
  display: flex;
  align-items: center;
}
.header__item-title{
  font-size: 30px;
  color: black;
  font-weight: 800;
  cursor: pointer;
}
.header__item-title:hover {
  color: white;
  transition: color .4s linear;
}
.header__item-title:focus {
  color: white;
}
.list {
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0 0 0 60px;
  padding: 0;
}
.list__item {
  padding-right: 24px;
}
.list__item-link {
  color: black;
  font-weight: 800;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
}
.list__item-link:hover {
  color: white;
  transition: color 0.2s linear;
}
.list__item-link:focus {
  color: white;
}
.router-link-active {
  color: white;
}
.header__item-btn {
  background: transparent;
  color: black;
  margin-right: 5px;
  align-self: center;
  text-align: center;
  padding: 5px 5px;
  border-radius: 10px;
  font-weight: 800;
  font-size: 20px;
  cursor: pointer;
  border: 1px solid black;
}
.header__item-btn:hover {
  background: black;
  color: white;
  transition: background,color .6s linear;
}
.header__item-btn:focus {
  background: black;
  color: white;
}
</style>
