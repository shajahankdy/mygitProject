<template>

 <form @submit.prevent="submit" >
   <h1>Product Registration</h1>
    <div class="form-group row">
      <label for="product_name" class="col-sm-2 col-form-label">product name</label>
      <input type="text" v-model="form.name" @blurpname="$v.form.name.$touch()"/>
      <ul>
         <li v-if="!$v.form.name.required" class="form-error">this field is required</li>
     </ul>
    </div>

    <div class="form-group row">
      <label for="product_Type" class="col-sm-2 col-form-label">product Type</label>
      <input type="text" v-model="form.product_Type" @blurptype="$v.form.product_Type.$touch()"/>
      <ul>
         <li v-if="!$v.form.product_Type.required" class="form-error">this field is required</li>
     </ul>
    </div>

    <div class="form-group row">
      <label for="price" class="col-sm-2 col-form-label">product price</label>
      <input type="text" v-model="form.price"@blurpprice="$v.form.price.$touch()"/>
      <ul>
         <li v-if="!$v.form.price.required" class="form-error">this field is required</li>
         <li v-if="$v.form.$invalid">invalid</li>
     </ul>

    </div>
<!--{{$v}}-->

</form>
</template>

<script>

import { store } from '../store';
import { required } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
    form:{
			name:'',
      product_Type:'',
      price:''
    }
   }
  },

  validations: {
    form:{


		name:{
		  required

		},
    product_Type:{
		  required

		},
    price:{

      required

    }
  }
 },
 methods:{

   blurpname: function() {
     this.form.name.$touch();
     store.commit('setBlurProduct', this.$v.form.name.$invalid);
   },
   blurptype: function(){
     this.form.product_Type.$touch();
     store.commit('setBlurProduct', this.$v.form.product_Type.$invalid);
   },
   blurpprice: function(){
     this.form.price.$touch();
     store.commit('setBlurProduct', this.$v.form.price.$invalid);
}

 },
   computed: {

     blurProduct(){
           return this.$store.getters.getblurProduct;
      }
   	}
 }

</script>
<style>
</style>
