import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

    state: {
      count: 0,


      userFormStatusInvalid: true,
      productFormStatusInvalid: true

    },


    getters: {

      getCount: state => {
      return state.count;
    },


      getUserFormStatus: state => {
      return state.userFormStatusInvalid;
      },

      getProductFormStatus: state => {
      return state.productFormStatusInvalid;
      }

    },
    mutations: {

      incrementCount (state) {
        // mutate state
        state.count+=50;
      },


      setUserFormStatus(state, status){
        state.userFormStatusInvalid = status;
      },

      setProductFormStatus(state, status){
        state.productFormStatusInvalid = status;
      }

    },
    actions: {

    }


})
