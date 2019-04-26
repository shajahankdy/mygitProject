<template>
  <div id="app">

       <user_dls></user_dls>
       <product_dls></product_dls>
       <submit></submit>

  </div>
</template>

<script>

import user_dls from './components/user_dls';
import product_dls from './components/product_dls';
import submit from './components/submit';

export default {
  name: 'app',
  components: {
      user_dls,
      product_dls,
      submit
  },

  data () {
    return {

    }
  }
}
</script>

<style>

</style>
