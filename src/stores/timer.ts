import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTimerStore = defineStore('timer', {
  state: () => ({
    time: ref(0),
    intervalIndex: 0,
  }),
  actions: {
    start() {
      this.intervalIndex = setInterval(() => this.time++, 1000);
    },

    stop() {
      clearInterval(this.intervalIndex);
      this.time = 0;
    },
  },
});