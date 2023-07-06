<template>
  <div v-if="isLoading"> Загрузка... </div>
  <div v-else>
    <Header/>
    <div class="page">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/layouts/Header.vue';
import { useCitiesStore } from './stores/CitiesStore';

export default {
  name: 'App',
  components: {
    Header
  },
  data: () => ({
    isLoading: true,
    defaultCityId: 1,
    citiesStore: {},
  }),
  async mounted() {
    this.citiesStore = useCitiesStore();

    await this.setCurrentCity(this.defaultCityId);

    this.isLoading = false;
  },
  methods: {
    async setCurrentCity(id) {
      await this.citiesStore.setCurrentCity(id)
    },
  },

}
</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.page {
  padding-top: 100px;
  width: 100%;
}
</style>
