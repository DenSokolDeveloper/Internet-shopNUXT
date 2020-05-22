<template>
  <div class="container mt-100">
    <form>
      <div class="form-group">
        <label class="form-group__label">Enter your Email address</label>
        <input required type="email" class="form-control" aria-describedby="emailHelp">
        <small class="form-text">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label class="form-group__label">Enter your password</label>
        <input required type="password" class="form-control">
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input">
        <label class="form-check-label">Check me out</label>
      </div>
      <button type="submit" class="submit">
        Submit
      </button>
    </form>
    <section class="section">
      <div class="section__text">
        or
      </div>
      <n-link :to="{name: 'registration'}" class="section__title">
        Register now
      </n-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped lang="scss">
.container {
  height: 750px;
}
form {
  text-align: center;
  width: 400px;
  position: absolute;
  height: 350px;
  top: calc(50% - 175px);
  left: calc(50% - 200px);
  background: linear-gradient(to bottom, #ff0006, #000000);
  border-radius: 20px;
}
.form-control {
  width: 300px;
  margin: 0 auto;
}
.form-group {
  &__label {
    margin-top: 20px;
    font-size: 24px;
    font-weight: 800;
    color: #ffffff;
  }
}
.submit {
  padding: 6px 20px;
  font-size: 20px;
  font-weight: 800;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #000000;
  background: #ffffff;
  color: #000000;
  &:hover {
    background-color: #00dfff;
    color: #ffffff;
    transition: background-color,color .2s linear;
  }
}
.form-check-label {
  color: #ffffff;
}
.form-text {
  color: #ffffff;
}
.section {
  position: absolute;
  width: 200px;
  top: 75%;
  left: calc(50% - 100px);
  text-align: center;
  line-height: 30px;
  font-size: 30px;
  color: #000000;
  font-weight: 800;
  &__text {
  }
}
</style>
