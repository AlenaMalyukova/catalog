<template>
  <div class="loader" v-if="isLoading">
    <Loader/>
  </div>
  <Catalog v-else :categories="categories"/>
</template>

<script>
import Catalog from '../components/layouts/Catalog.vue';
import Loader from '../components/Loader.vue';
import { useCategoriesStore } from '../stores/CategoriesStore';
import { useCitiesStore } from '../stores/CitiesStore';

export default {
  name: 'MainPage',
  components: {
    Catalog,
    Loader
  },
  data: () => ({
    isLoading: false,
    categoriesStore: {},
    citiesStore: {},
  }),
  async mounted() {
    this.categoriesStore = useCategoriesStore();
    this.citiesStore = useCitiesStore();

    await this.loadCategories(this.currentCityId);
  },
  methods: {
    async loadCategories(id) {
      this.isLoading = true;

      await this.categoriesStore.loadCategories(id);

      this.isLoading = false;
    },
  },
  computed: {
    categories() {
      return this.categoriesStore.categories
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
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>