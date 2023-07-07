<template>
  <div class="catalog">
    <h1 class="catalog__title">Категории товаров</h1>
    <div class="categories">
      <Category v-for="category in categories" :key="category" :category="category"/>
    </div>
  </div>
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
}

@media (max-width: 1280px) {
  .categories {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 960px) {
  .categories {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  .catalog__title {
    font-size: 36px;
    margin: 20px 0;
  }
}

@media (max-width: 560px) {
  .catalog {
    justify-content: center;
    padding: 0 20px
  }
  
  .catalog__title {
    align-self: center;
    font-size: 24px;
    margin: 10px 0 0;
  }
  .categories {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>