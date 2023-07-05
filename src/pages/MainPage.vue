<template>
  <div v-if="isLoading"> Загрузка... </div>
  <div v-else>
    <Header/>
    <Intro/>
  </div>
</template>

<script>
import Header from '../components/layouts/Header.vue';
import Intro from '../components/layouts/Intro.vue';
import { useCitiesStore } from '../stores/CitiesStore';

export default {
  name: 'MainPage',
  components: {
    Header,
    Intro
  },
  data: () => ({
    cityId: 1,
    isLoading: true,
    store: {},
  }),
  async mounted() {
    this.store = useCitiesStore();

    await this.setCurrentCity(this.cityId);

    this.isLoading = false;
  },
  methods: {
    async setCurrentCity(id) {
      await this.store.setCurrentCity(id)
    }
  }
}
</script>