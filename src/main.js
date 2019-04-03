// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import components from "./components/index"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(components);
Vue.use(ElementUI);
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    current: null,
    count:0
  },
  mutations: {
    select(state,comp) {
      state.current=comp;
      state.count++;
      console.log(state);
    },
    update(state,propertys){
      state.current.propertys={
        ...propertys
      }
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
