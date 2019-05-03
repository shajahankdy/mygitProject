<template>

 <form @submit.prevent="submit" >
    <div class="container">
   <h1>Product Registration</h1>
 </div>
    <div class="container">
      <label for="product_name" class="col-sm-2 col-form-label">product name</label>
      <input type="text"
      v-model="form.name"
      @blur="BlurProductName"
      />
      <ul>
         <li v-if="!$v.form.name.required"
         class="form-error">this name field is required</li>
         <li v-if="$v.form.name.$invalid">this name field is invalid</li>
     </ul>
    </div>

    <div class="container">
      <label for="product_Type"
      class="col-sm-2 col-form-label">product Type</label>
      <input type="text"
      v-model="form.product_Type"
      @blur="BlurProductType"
      />
      <ul>
         <li v-if="!$v.form.product_Type.required"
         class="form-error">this product type field is required</li>
         <li v-if="$v.form.product_Type.$invalid">this product type field is invalid</li>
     </ul>
    </div>

    <div class="container">
      <label for="price" class="col-sm-2 col-form-label">product price</label>
      <input type="text"
      v-model="form.price"
      @blur="BlurProductPrice"
      />
      <ul>
         <li v-if="!$v.form.price.required" class="form-error">this price field is required</li>
         <li v-if="$v.form.price.$invalid">this price field is invalid</li>
        <!-- <li v-if="$v.form.$invalid">invalid</li>-->
      </ul>

    </div>
    <div>
  <!-- `greet` is the name of a method defined below -->
      <button v-on:click="submit('ok')">Greet</button>
   </div>
   <div>
   <button type="submit" @click.prevent="testCount"class="btn btn-success">price increment 50</button>

   </div>
    product status:{{$store.state.productFormStatusInvalid}}
<!--{{$v}}-->

</form>
</template>

<script>
import submitMixin from '../mixins/submitMixin';
import { store } from '../store';
import { required } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
    // count: 0,
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
   testCount: function() {
     store.commit('incrementCount');
   },
   // incrementCounter: function() {
   //           this.count += 50;
   //       },

   BlurProductName: function() {
     // if (this.$v.form.name.$invalid)
     // {
     //  alert( 'name field is invalid');
     //  }

     this.$v.form.name.$touch();
     store.commit('setProductFormStatus', this.$v.form.$invalid);
     },
   BlurProductType: function(){

     // if (this.$v.form.product_Type.$invalid)
     // {
     //  alert( 'product type field is invalid');
     //  }

     this.$v.form.product_Type.$touch();
     store.commit('setProductFormStatus', this.$v.form.$invalid);
   },
   BlurProductPrice: function(){

     // if (this.$v.form.price.$invalid)
     // {
     //  alert( ' price field is invalid');
     //  }
     this.$v.form.price.$touch();
     store.commit('setProductFormStatus', this.$v.form.$invalid);
}

 },
computed: {
  // incrementCounter: function() {
  //         if(this.count == 0)
  //          return this.count +=50;
  //       },
  count () {
          return this.$store.getters.getCount + " price";

    },

       blurProduct(){
             return this.$store.getters.getProductFormStatus;
        }
   	},
  mixins:[submitMixin]

 }

</script>
<style>
</style>
