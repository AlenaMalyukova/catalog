<template>
  <div class="catalog">
    <h1 class="catalog__title">Категории товаров</h1>
    <div class="categories">
      <Category v-for="category in categories" :key="category" :category="category"/>
    </div>
  </div>
  <!-- <pre> {{ categories }} </pre> -->
</template>

<script>
import Category from '../Category.vue';

export default {
  name: 'Categories',
  components: {
    Category
  },
  props: {
    categories: Array,
  },
  data: () => ({
    store: {},
  }),
}
</script>

<style scoped>
.catalog {
  display: flex;
  flex-direction: column;
}

.catalog__title {
  text-align: left;
}
.categories {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 22px;
  padding-top: 20px;
  padding-bottom: 100px;
  /* justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap; */
}
</style>