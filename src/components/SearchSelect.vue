<template>
  <div class="select">
    <input class="select__input" type="text" v-model="searchTerm" />
    <div class="options" v-if="searchTerm">
      <div class="options__item" v-for="option in filteredOptions" :value="option.value" :key="option">
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    searchTerm: '',
  }),
  computed: {
    filteredOptions() {
      return this.options.filter((option) =>
        option.label.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
}
</script>

<style scoped>
.select {
  position: relative;
  width: 100%;
  margin-right: 18px;
}

.select__input {
  width: 100%;
  padding: 12px 0 13px 16px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  background-color: transparent;
  border: 1px solid #979797;
  color: #272727;
  box-sizing: border-box;
}

.select__input:focus{
  border: 1px solid #272727;
  box-sizing: border-box;
}
.options {
  position: absolute;
  top: 40px;
  left: 0;
  color: #979797;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  background-color: #fff;
  border: 1px solid #272727;
  border-top: none;
  width: 100%;
  border-radius: 0 0 10px 10px;
  padding-top: 10px;
}

.options::before {
  content: '';
  width: 90%;
  height: 1px;
  display: block;
  position: absolute;
  z-index: 13px;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  border-top: 1px solid #979797;
}

.options__item {
  padding-bottom: 7px;
}
</style>