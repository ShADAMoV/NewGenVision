import { defineStore } from 'pinia';

export const useHomeScreenDisabledStore = defineStore('homeScreenDisabled', {
  state: () => ({
    isDisabled: false,
  }),
  actions: {
    toggleIsDisabled() {
      this.isDisabled = !this.isDisabled;
    },
  },
});
