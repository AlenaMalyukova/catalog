<template>
  <div v-if="isLoading"> Загрузка... </div>
  <Catalog v-else :categories="categories"/>
</template>

<script>
import Catalog from '../components/layouts/Catalog.vue';
import { useCategoriesStore } from '../stores/CategoriesStore';

export default {
  name: 'MainPage',
  components: {
    Catalog
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