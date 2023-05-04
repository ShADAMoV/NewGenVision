import { defineStore } from 'pinia';
// Import axios to make HTTP requests
export const usePrintingTestStore = defineStore('printingTest', {
  state: () => ({
    correctInputs: 0,
    incorrectInputs: 0,
  }),
  actions: {
    printingIncorrect() {
      this.incorrectInputs++;
    },
    printingCorrect() {
      this.correctInputs++;
    },
    reset() {
      this.correctInputs = 0;
      this.incorrectInputs = 0;
    },
  },
});