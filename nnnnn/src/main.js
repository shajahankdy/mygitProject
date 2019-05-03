import Vue from 'vue'
import App from './App.vue'
import { store } from './store';
import Vuelidate from 'vuelidate';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);


Vue.use(Vuelidate);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
