<template>
  <div class="header">
    <img class="mark" src="../../assets/icons/mark.svg" alt="mark">
    <h2 class="city" @click="selectCity">{{ currentCity.city }}</h2>
  </div>
  <SelectCityModal v-if="isSelectCity" @close="selectCity"/>
</template>

<script>
import SelectCityModal from '../modal/SelectCityModal.vue';
import { useCitiesStore } from '../../stores/CitiesStore';

export default {
  name: 'Header',
  components: {
    SelectCityModal
  },
  data: () => ({
    isSelectCity: false,
    store: {},
    currentCity: {},
  }),
  mounted() {
    this.store = useCitiesStore();
    this.currentCity = this.store.currentCity;
  },
  methods: {
    selectCity() {
      this.isSelectCity = !this.isSelectCity
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.mark {
  width: 11px;
  height: 16px;
  margin-right: 8px;
}
.city {
  color: #272727;
}
</style>