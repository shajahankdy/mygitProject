<template>
<form >
      <h1>User Registration</h1>
    <div class="form-group row">
      <label for="name" class="col-sm-2 col-form-label">Your name:</label>
      <input type="text" v-model="form.name" @blur="$v.form.name.$touch()"/>


       <ul v-if="v.form.name.$error">
          <li v-if="!$v.form.name.required" class="form-error">this field is required</li>
      </ul>

     </div>

     <div class="form-group row">
      <label for="mail" class="col-sm-2 col-form-label">Your Email Address:</label>
      <input type="text" v-model="form.emailValue" @blur="$v.form.emailValue.$touch()"/>


      <ul v-if="v.form.emailValue.$error">
         <li v-if="!$v.form.emailValue.required" class="form-error">this field is required</li>
         <li v-if="!$v.form.emailValue.email" class="form-error">this field is required</li>
     </ul>


 </div>

     <div class="form-group row">
      <label for="password" class="col-sm-2 col-form-label">enter password:</label>
      <input type="text" v-model="form.password" @blur="$v.form.passwod.$touch()"/>


      <ul v-if="v.form.passwod.$error">
         <li v-if="!$v.form.passwod.required" class="form-error">this field is required</li>
         <li  v-if="!$v.form.passwod.minLength" class="form-error">Name must have at least {{$v.form.password.$params.minLength.min}} letters words</li>
     </ul>



 </div>

    <div class="form-group row">
      <label for="repassword" class="col-sm-2 col-form-label">enter re-password:</label>
      <input type="text" v-model="form.repassword" @blur="$v.form.repassword.$touch()"/>


      <ul v-if="v.form.repasswod.$error">
         <li v-if="!$v.form.repasswod.required" class="form-error">this field is required</li>
         <li v-if="!$v.form.repasswod.sameAsPassword" class="form-error">password must match</li>
     </ul>


 </div>

</form>
</template>

<script>


import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
     form: {
      emailValue: '',
			name:'',
      password:'',
      repassword:''
      }
    }
  },

  validations: {
   form:{
    emailValue: {
      required,
      email
    },
		name:{
		  required

		},
    password:{

      required,
      minLength: minLength(6)
    },
    repassword:{
       required,
       sameAsPassword: sameAs('password')

      }
    }
  },
  methods:{

  }
}
</script>






</script>
