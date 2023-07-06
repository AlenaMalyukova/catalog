<template>
  <div class="header">
    <div class="content">
      <img v-if="currentCity?.city" class="mark" src="../../assets/icons/mark.svg" alt="mark">
      <h2 class="city" @click="selectCity">{{ currentCity?.city }}</h2>
    </div>
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
  }),
  mounted() {
    this.store = useCitiesStore();
  },
  methods: {
    selectCity() {
      this.isSelectCity = !this.isSelectCity
    },
  },
  computed: {
    currentCity() {
      return this.store.currentCity;
    },
  },
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  position: absolute;
  left: 0;
  z-index: 2;
  background: #fff;
  padding: 25px 0;
  -webkit-box-shadow: 0px 4px 10px 0px rgba(39, 39, 39, 0.2);
  -moz-box-shadow: 0px 4px 10px 0px rgba(39, 39, 39, 0.2);
  box-shadow: 0px 4px 10px 0px rgba(39, 39, 39, 0.2);
}

.content {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.mark {
  width: 11px;
  height: 16px;
  margin-right: 8px;
}
.city {
  color: #272727;
  cursor: pointer;
}
</style>