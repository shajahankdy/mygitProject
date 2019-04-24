import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);


Vue.use(Vuelidate);

new Vue({
  el: '#app',
  render: h => h(App)
})
