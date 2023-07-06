import { defineStore } from "pinia";

import { getAgent } from "../api";

export const useCategoriesStore = defineStore('CategoriesStore', {
  state: () => ({
    categories: [],
  }),
  actions: {
    async loadCategories(id) {
      try {
        const agent = getAgent()
        const { data } = await agent.searchCategories(id)

        this.categories = data.tags
      } catch(err) {
        console.log(err)
      }
    }
  }
})