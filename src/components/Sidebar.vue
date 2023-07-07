<template>
  <div v-if="subCategories?.length > 2" class="sidebar">
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
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    subCategories: Array,
    currentSubCategoryId: Number,
  },
  methods: {
    updateSubCategoryId(id) {
      this.$emit('update-current-category-id', id)
    },
  },
}
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 240px;
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