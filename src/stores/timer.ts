import { defineStore } from 'pinia'
import { ref } from "vue";

export const useTimerStore = defineStore("timer", {
  state: () => ({
    time: ref(0),
    intervalIndex: 0,
  }),
  actions: {
    start(): void {
      this.intervalIndex = setInterval(() => this.time = this.time + 1, 1000)
    },

    stop(): void {
      clearInterval(this.intervalIndex);
      this.time = 0;
    }
  }
})