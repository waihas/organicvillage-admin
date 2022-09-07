import product from './modules/product';
import auth from './modules/auth';
import gamme from './modules/gamme';
import { createStore } from 'vuex';

export default createStore({
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    product,
    auth,
    gamme
  },
});
