import { defineStore } from "pinia";

import { getAgent } from "../api";

export const useCitiesStore = defineStore('CitiesStore', {
  state: () => ({
    currentCity: {},
  }),
  actions: {
    async setCurrentCity(id) {
      try {
        const agent = getAgent()
        const { data } = await agent.getCity(id)

        this.currentCity = data.data
      } catch(err) {
        console.log(err)
      }
    },
  },
}) 