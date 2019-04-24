<template>
<form>
      <h1>Product Registration</h1>
    <div class="form-group row">
      <label for="product_name" class="col-sm-2 col-form-label">product name</label>
      <input type="text" v-model="name"/>
      <p v-if="!$v.name.required">The product name field is required!</p>
      <p v-if="!$v.name.minLength"></p>
    </div>

    <div class="form-group row">
      <label for="product_Type" class="col-sm-2 col-form-label">product Type</label>
      <input type="text" v-model="product_Type"/>
      <p v-if="!$v.product_Type.required">The product Type field is required!</p>
      <p v-if="!$v.name.minLength"></p>
    </div>

    <div class="form-group row">
      <label for="price" class="col-sm-2 col-form-label">product price</label>
      <input type="text" v-model="price"/>
      <p v-if="!$v.price.required">The product price field is required!</p>
    </div>



</form>
</template>

<script>


import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
			name:'',
      product_Type:'',
      price:''
    }
  },

  validations: {
    emailValue: {
      required,
      email
    },
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
}
</script>






</script>
