import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from "axios"
export const useTextsStore = defineStore("texts", {
  state: () => ({
    text: [],
  }),
  getters: {
    getText(state){
      return state.text
    }
  },
  actions: {
    async fetchText() {
      try {
        const data = await axios.get('https://baconipsum.com/api/?type=all-meat&paras=1')
        this.text = data.data
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    }
  },
})