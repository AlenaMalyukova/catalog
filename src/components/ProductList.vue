<template>
  <div class="list">
    <div class="card">
      <ProductCard v-for="product in products" :key="product.id" :product="product"/>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  props: {
    products: Array,
  }
}
</script>

<style scoped>
.list {
  width: 100%;
}
</style>