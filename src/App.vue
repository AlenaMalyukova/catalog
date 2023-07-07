<template>
  <div class="loader" v-if="isLoading">
    <Loader/>
  </div>
  <div v-else class="container">
    <Header/>
    <div class="page">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/layouts/Header.vue';
import Loader from './components/Loader.vue';
import { useCitiesStore } from './stores/CitiesStore';

export default {
  name: 'App',
  components: {
    Header,
    Loader
  },
  data: () => ({
    isLoading: true,
    defaultCityId: 1,
    citiesStore: {},
  }),
  async mounted() {
    this.citiesStore = useCitiesStore();

    if (this.currentCityId) {
      await this.setCurrentCity(this.currentCityId);
    } else {
      await this.setCurrentCity(this.defaultCityId);
    }

    this.isLoading = false;
  },
  methods: {
    async setCurrentCity(id) {
      await this.citiesStore.setCurrentCity(id);
    },
  },
  computed: {
    currentCityId() {
      return this.citiesStore?.currentCity?.id;
    }
  }

}
</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
