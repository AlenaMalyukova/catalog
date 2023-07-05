<template>
  <div class="category">
    <h4 class="category__title">{{ category.name }}</h4>
    <img class="category__img" :src="category.image" :alt="category.name">
  </div>
</template>

<script>
export default{
  name: 'Category',
  props:{
    category: Object
  },
  computed: {
    // generateColor() {
    //   return 'background-color: #' + Math.floor(Math.random()*16777215).toString(16)
    // }
  }
}
</script>

<style scoped>
.category {
  width: 100%;
  height: 152px;
  position: relative;
}

.category__title {
  position: relative;
  z-index: 2;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  text-align: left;
  padding: 20px;
  margin: 0;
}

.category__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>