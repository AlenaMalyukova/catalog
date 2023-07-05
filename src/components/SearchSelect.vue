<template>
  <div class="select">
    <input class="select__input" type="text" v-model="searchTerm" @input="input"/>
    <img class="select__clear" @click="clear" src="../assets/icons/close.svg" alt="clear">
    <div class="options" v-if="isOptionsVisible">
      <div 
        class="options__item" 
        v-for="option in filteredOptions" 
        :key="option.id"
        @click="setOption(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
  },
  data: () => ({
    searchTerm: '',
    isOptionSelected: false,
  }),
  methods: {
    clear() {
      this.searchTerm = ''
      this.$emit('input', this.searchTerm)

      this.isOptionSelected = false
    },
    input() {
      this.$emit('input', this.searchTerm)

      this.isOptionSelected = false
    },
    setOption(option) {
      this.searchTerm = option.city
      this.isOptionSelected = true

      this.$emit('set-option', option)
    }
  },
  computed: {
    filteredOptions() {
      return this.options.filter((option) =>
        option.label.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
    isOptionsVisible() {
      return !this.isOptionSelected && this.filteredOptions.length && this.searchTerm !== ''
    },
  },
  watch: {
    isOptionSelected() {
      this.$emit('change-option-selected', this.isOptionSelected)
    }
  }
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

.select__input:focus, :active{
  border-color: #272727;
  border-radius: 10px;
  width: 99.50%;
}

.select__clear {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 12px;
  height: 12px;
  cursor: pointer;
}

.options {
  position: absolute;
  top: 40px;
  left: 0px;
  color: #979797;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  background-color: #fff;
  border: 1px solid #272727;
  border-top: none;
  width: 100%;
  border-radius: 0 0 10px 10px;
  padding-top: 20px;
  max-height: 150px;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
}

.options::before {
  content: '';
  width: 90%;
  height: 1px;
  display: block;
  position: absolute;
  z-index: 13px;
  top: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  border-top: 1px solid #979797;
}

.options__item {
  padding: 0 16px 7px;
  text-align: left;
  cursor: pointer;
}

.options__item:hover {
  color: #272727;
}
</style>