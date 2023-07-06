<template>
  <div class="category" @click="toCategory(category.slug)">
    <p class="category__title">{{ category.name }}</p>
    <img class="category__img" :src="category.image" :alt="category.name">
  </div>
</template>

<script>

export default{
  name: 'Category',
  props:{
    category: Object
  },
  methods: {
    toCategory(slug) {
      this.$router.push(`/category/${slug}`);
    }
  }
}
</script>

<style scoped>
.category {
  width: 100%;
  height: 152px;
  position: relative;
  cursor: pointer;
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