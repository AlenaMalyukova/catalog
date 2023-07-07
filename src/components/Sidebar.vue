<template>
  <button @click="isVisible = !isVisible" class="btn"> 
    <img class="btn__img" src="../assets/icons/burger.png" alt="menu"> 
  </button>
  <div v-if="isVisible && subCategories?.length > 2" class="wrapper">
    <div class="sidebar">
      <div
        :class="currentSubCategoryId === 0 ? 'category category_active' : 'category'"
        @click="updateSubCategoryId(0)"
      >
        <span>Все товары</span>
      </div>
      <div
        v-for="category of subCategories" :key="category.id"
        :class="category.id === currentSubCategoryId ? 'category category_active' : 'category'"
        @click="updateSubCategoryId(category.id)"
      >
        <span class="category__name">{{ category.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    subCategories: Array,
    currentSubCategoryId: Number,
  },
  data: () => ({
    isVisible: false
  }),
  methods: {
    updateSubCategoryId(id) {
      this.$emit('update-current-category-id', id);
      this.isVisible = false;
    },
  },
}
</script>

<style scoped>

.btn {
  display: none;
  position: fixed;
  right: 20px;
  top: 15px;
  z-index: 5;
  outline: none;
  background: transparent;
  width: max-content;

  @media(max-width: 865px) {
    display: block;
  }
}

.btn__img {
  width: 20px;
  height: 20px;
}

.wrapper {
  background: #f7f7f7;

  @media(max-width: 865px) {
    position: fixed;
    top: 70px;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
  }
}

.sidebar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 240px;
  background: #f7f7f7;

  @media(max-width: 865px) {
    width: 100%;
  }
}

.category {
  width: 100%;
  text-align: left;
  position: relative;
  -webkit-text-fill-color: #000;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 12px;
  cursor: pointer;
  box-sizing: border-box;
}

.category::after {
  display: block;
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  border-bottom: 1px solid #E9EEF3;
}

.category_active {
  background: #E9EEF3;
  -webkit-text-fill-color: #202648;
}
</style>