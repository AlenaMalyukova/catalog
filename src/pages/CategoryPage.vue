<template>
  <div class="loader" v-if="isLoading">
    <Loader/>
  </div>
  <div v-else class="category">
    <div class="category-header">
      <button class="back" @click="back" v-if="mainCategory">
        <img class="back__img" src="../assets/icons/arrow.svg" alt="back">
      </button>
      <h1 class="category-header__title">{{ mainCategory?.name }}</h1>
    </div>
    <div v-if="subCategories" class="content">
      <Sidebar
        :subCategories="subCategories"
        :currentSubCategoryId="currentSubCategoryId"
        @update-current-category-id="updateCurrentCategoryId"
      />
      <ProductList :products="products"/>
    </div>
  </div>
</template>

<script>
import { useCategoriesStore } from '../stores/CategoriesStore';
import { getAgent } from "../api";
import Sidebar from '../components/Sidebar.vue'
import ProductList from '../components/ProductList.vue';
import Loader from '../components/Loader.vue';

export default {
  name: 'CategoryPage',
  components: {
    Sidebar,
    ProductList,
    Loader
  },
  data: () => ({
    isLoading: false,
    isPreloading: false,
    agent: {},
    categoriesStore: {},
    currentSubCategoryId: 0,
    products: [],
  }),
  async mounted() {
    this.categoriesStore = useCategoriesStore();
    this.agent = getAgent();

    this.isLoading = true

    await this.loadCategories(this.currentCityId);
    
    await this.loadProducts(this.mainCategory.slug);
    
    this.isLoading = false
  },
  methods: {
    async loadCategories(id) {
      await this.categoriesStore.loadCategories(id);
    },
    updateCurrentCategoryId(id) {
      this.currentSubCategoryId = id;
    },
    async loadProducts(categorySlug) {
      try {
        const { data } = await this.agent.getAllProducts(this.currentCityId, categorySlug);

        this.products = data.products;
      } catch (err) {
        console.log(err);
      }
    },
    back() {
      this.$router.go(-1)
    }
  },
  computed: {
    categories() {
      return this.categoriesStore.categories;
    },
    mainCategory() {
      return this.categories?.find(i => i.slug === this.slug);
    },
    activeSubCategory() {
      if (this.currentSubCategoryId === 0) {
        return this.mainCategory;
      }

      const subCategory = this.mainCategory.children.find(i => i.id === this.currentSubCategoryId)

      return subCategory;
    },
    slug() {
      return this.$route.params.slug;
    },
    subCategories() {
      return this.mainCategory?.children;
    },
    currentCityId() {
      return this.citiesStore?.currentCity?.id
    },
  },
  watch: {
    currentCityId() {
      this.loadCategories(this.currentCityId);
    },
    currentSubCategoryId() {
      this.loadProducts(this.activeSubCategory.slug);
    }
  },
}
</script>

<style scoped>

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

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

@media (max-width: 1024px) {
  .category-header__title {
    font-size: 36px;
  }

  .back {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 1024px) {
  .category-header__title {
    font-size: 36px;
  }

  .back {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 865px) {
  .category-header__title {
    font-size: 24px;
    line-height: 1.3;
  }

  .back {
    width: 20px;
    height: 20px;
  }
}

.content {
  padding-top: 20px;
  display: flex;

  @media(max-width: 865px) {
    justify-content: center;
  }
}
</style>