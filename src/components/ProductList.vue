<template>
  <div class="loader" v-if="!products">
    <Loader/>
  </div>
  <div v-else-if="products?.length === 0" class="empty">
    <h1>Страница пуста</h1>
  </div>
  <div v-else class="list">
    <ProductCard v-for="product in products" :key="product.id" :product="product"/>
  </div>
</template>

<script>
import Loader from './Loader.vue';
import ProductCard from './ProductCard.vue';

export default {
  name: 'ProductList',
  components: {
    ProductCard,
    Loader
  },
  props: {
    products: Array,
  }
}
</script>

<style scoped>
.empty {
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  color: #27272780;
}
.list {
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-left: 34px;
  margin: -12px;

  @media(max-width: 865px) {
    padding-left: 0;
    justify-content: center;
  }
}
</style>