<template>
  <div class="category">
    <div class="category-header">
      <button class="back" @click="back" v-if="currentCategory">
        <img class="back__img" src="../assets/icons/arrow.svg" alt="back">
      </button>
      <h1 class="category-header__title">{{ currentCategory?.name }}</h1>
    </div>
    <div class="content">
      <Sidebar v-if="subCategories" :subCategories="subCategories"/>
      <ProductList/>
    </div>
  </div>
</template>

<script>
import { useCategoriesStore } from '../stores/CategoriesStore';
import Sidebar from '../components/Sidebar.vue'
import ProductList from '../components/ProductList.vue';

export default {
  name: 'CategoryPage',
  components: {
    Sidebar,
    ProductList
  },
  data: () => ({
    isLoading: false,
    categoriesStore: {},
  }),
  async mounted() {
    this.categoriesStore = useCategoriesStore();

    await this.loadCategories(this.currentCityId);
  },
  methods: {
    async loadCategories(id) {
      this.isLoading = true;

      await this.categoriesStore.loadCategories(id);

      this.isLoading = false;
    },
    back() {
      this.$router.go(-1)
    }
  },
  computed: {
    categories() {
      return this.categoriesStore.categories;
    },
    currentCategory() {
      return this.categories?.find(i => i.slug === this.slug);
    },
    slug() {
      return this.$route.params.slug;
    },
    subCategories() {
      return this.currentCategory?.children;
    },
    currentCityId() {
      return this.citiesStore?.currentCity?.id
    }
  },
  watch: {
    currentCityId() {
      this.loadCategories(this.currentCityId);
    }
  },
}
</script>

<style scoped>
.category {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.category-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.back {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  background: #030303;
}

.back__img {
  width: 16px;
  height: 12px;
}

.category-header__title {
  color: #272727;
  font-size: 44px;
  font-weight: 600;
  line-height: 1;
  padding-left: 10px;
  margin: 0;
}

.content {
  padding-top: 20px;
  display: flex;
}
</style>