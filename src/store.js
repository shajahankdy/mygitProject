import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

    state: {

      blurUser:false,
      blurProduct:false

    },
    getters: {


      getblurUser: state => {
      return state.blurUser;
      },

      getblurProduct: state => {
      return state.blurProduct;
      }

    },

    mutations: {

      setBlurUser(state, blurUser){
        state.blurUser = blurUser;
      },

      setBlurProduct(state, blurProduct){
        state.blurProduct = blurProduct;
      }

    },
    actions: {

      }


})
