<template>
  <div v-if="isLoading"> Загрузка... </div>
  <div v-else>
    <Header/>
    <div v-if="isPreload"> Загрузка... </div>
    <Catalog v-else :categories="categories"/>
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
    defaultCityId: 1,
    isLoading: true,
    isPreload: false,
    citiesStore: {},
    categoriesStore: {},
  }),
  async mounted() {
    this.citiesStore = useCitiesStore();
    this.categoriesStore = useCategoriesStore();

    await this.setCurrentCity(this.defaultCityId);

    await this.loadCategories(this.defaultCityId);

    this.isLoading = false;
  },
  methods: {
    async setCurrentCity(id) {
      await this.citiesStore.setCurrentCity(id)
    },
    async loadCategories(id) {
      this.isPreload = true;

      await this.categoriesStore.loadCategories(id);

      this.isPreload = false;
    },
  },
  computed: {
    categories() {
      return this.categoriesStore.categories
    },
    currentCityId() {
      return this.citiesStore.currentCity?.id
    }
  },
  watch: {
    currentCityId() {
      this.loadCategories(this.currentCityId);
    }
  },
}
</script>