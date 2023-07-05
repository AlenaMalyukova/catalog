<template>
  <div v-if="isLoading"> Загрузка... </div>
  <div v-else>
    <Header/>
    <Catalog :categories="categories"/>
  </div>
</template>

<script>
import Header from '../components/layouts/Header.vue';
import Catalog from '../components/layouts/Catalog.vue';
import { useCitiesStore } from '../stores/CitiesStore';
import { useCategoriesStore } from '../stores/CategoriesStore';

export default {
  name: 'MainPage',
  components: {
    Header,
    Catalog
  },
  data: () => ({
    cityId: 1,
    isLoading: true,
    citiesStore: {},
    categoriesStore: {},
  }),
  async mounted() {
    this.citiesStore = useCitiesStore();
    this.categoriesStore = useCategoriesStore();

    await this.setCurrentCity(this.cityId);

    await this.loadCategories(this.cityId);

    this.isLoading = false;
  },
  methods: {
    async setCurrentCity(id) {
      await this.citiesStore.setCurrentCity(id)
    },
    async loadCategories(id) {
      await this.categoriesStore.loadCategories(id)
    },
  },
  computed: {
    categories() {
      return this.categoriesStore.categories
    }
  }
}
</script>