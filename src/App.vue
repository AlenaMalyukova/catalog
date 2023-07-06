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
  padding-top: 150px;
  width: 100%;
  /* display: flex;
  justify-content: flex-start; */
}

/* body{

  place-items: center start;
} */

/* .page {
  background-color: ;
} */

/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
