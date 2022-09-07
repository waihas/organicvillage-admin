import App from './App.vue'
import './styles/app.css';
import { createApp, nextTick } from 'vue';
import router from './router';
import store from './store';

const DEFAULT_TITLE = 'Organic Village';
router.afterEach((to) => {
  nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');

