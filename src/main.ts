import { createApp } from 'vue';
import { createPinia } from 'pinia'; 

import App from './App.vue';
import router from './router';

import './assets/styles/main.css';

const app = createApp(App);
app.directive('focus', {
  // When the bound element is mounted into the DOM...
  mounted(el) {
    // Focus the element
    el.focus();
  },
});

app.use(createPinia());
app.use(router);

app.mount('#app');
