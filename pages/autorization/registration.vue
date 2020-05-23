<template>
  <div class="container mt-100">
    <form>
      <div class="form-group">
        <label>Type your E-mail:</label>
        <input required type="text" class="form-control" placeholder="E-mail...">
      </div>
      <div class="form-group">
        <label>Type your full name:</label>
        <input required type="text" class="form-control" placeholder="Your name...">
      </div>
      <div class="form-group">
        <label>Type your mobile phone:</label>
        <input required type="text" class="form-control" placeholder="Phone number...">
      </div>
      <div class="form-group">
        <label>Type your country:</label>
        <input required type="text" class="form-control" placeholder="Country...">
      </div>
      <div class="form-group">
        <button class="save" type="submit">
          Registration
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Registration'
}
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
}
.save {
  position: absolute;
  left: calc(50% - 81px);
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
</style>
