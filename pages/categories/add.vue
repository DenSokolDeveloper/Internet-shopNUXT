<template>
  <div class="container">
    <div class="add">
      <div class="add__title">
        Add your product
      </div>
      <form>
        <div class="form-group">
          <label>Type the new product title:</label>
          <input required type="text" class="form-control" placeholder="Product title...">
        </div>
        <div class="form-group">
          <label>Type the product seller full name:</label>
          <input required type="text" class="form-control" placeholder="Product seller...">
        </div>
        <div class="form-group">
          <label>Type the product price:</label>
          <textarea required class="form-control" rows="1" placeholder="Product price..." />
        </div>
        <div class="form-group">
          <button class="save" type="submit">
            Add this product
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Add'
}
</script>

<style scoped lang="scss">
.add {
  &__title {
    font-weight: 800;
    font-size: 30px;
    margin-bottom: 20px;
  }
  &>form {
    & label {
      font-size: 24px;
      font-weight: 600;
    }
  }
}
.save {
  width: 300px;
  height: 50px;
  left: calc(50% - 150px);
  position: relative;
  text-align: center;
  line-height: 0;
  color: #000000;
  background-color: #fff;
  border: 1px solid #000000;
  border-radius: 10px;
  font-size: 34px;
  font-weight: 800;
  outline: none;
  &:hover {
    color: white;
    background-color: #000000;
    transition: background-color,color .5s linear;
  }
}
</style>
