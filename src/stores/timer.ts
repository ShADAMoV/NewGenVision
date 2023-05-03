import { defineStore } from 'pinia'

export const useTimerStore = defineStore("timer", {
  state: () => ({
    time: '00:00'
  }),
  getters: {
    getTime(): String {
      return this.time
    }
  },
  actions: {
  },
})