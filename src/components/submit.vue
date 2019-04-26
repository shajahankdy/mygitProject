<template>
<form>
     <div class="form-group row">
        <button type="button" :disbaled="disableSubmit" class="btn btn-success">Success</button>

      </div>
</form>
</template>

<script>

import { store } from '../store';
export default {
  data() {
    return {

    }
  },
  methods:{

  submit() {
    this.$v.form.$touch();
    if(this.$v.form.$error) return
    // to form submit after this
    alert('Form submitted')
  }


  },

  computed: {

    disableSubmit() {
       return blurUser || blurProduct;
       


    }

  }


}
</script>






</script>
