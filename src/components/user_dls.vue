<template>
<form @submit.prevent="submit" >
      <h1>User Registration</h1>
    <div class="form-group row">
      <label for="name" class="col-sm-2 col-form-label">Your name:</label>
      <input type="text" v-model="form.name" @blurName="$v.form.name.$touch()"/>
       <ul>
          <li v-if="!$v.form.name.required" class="form-error">this field is required</li>
      </ul>
     </div>


     <div class="form-group row">
      <label for="mail" class="col-sm-2 col-form-label">Your Email Address:</label>
      <input type="text" v-model="form.emailValue" @blurEmail="$v.form.emailValue.$touch()"/>
     <ul>
         <li v-if="!$v.form.emailValue.required" class="form-error">this field is required</li>
         <li v-if="!$v.form.emailValue.email" class="form-error">this is invalid email</li>
     </ul>
    </div>

     <div class="form-group row">
      <label for="password" class="col-sm-2 col-form-label">enter password:</label>
      <input type="text" v-model="form.password" @blurPassword="$v.form.password.$touch()"/>
      <ul>
         <li v-if="!$v.form.password.required" class="form-error">this field is required</li>
         <li  v-if="!$v.form.password.minLength" class="form-error">Name must have at least {{$v.form.password.$params.minLength.min}} letters words</li>
     </ul>
    </div>

    <div class="form-group row">
        <label for="repassword" class="col-sm-2 col-form-label">enter re-password:</label>
        <input type="text" v-model="form.repassword" @blurRepassword="$v.form.repassword.$touch()"/>
      <ul>
         <li v-if="!$v.form.repassword.required" class="form-error">this field is required</li>
         <li v-if="!$v.form.repassword.sameAsPassword" class="form-error">password must match</li>
         <li v-if="$v.form.$invalid">invalid</li>
      </ul>
  <!--   {{ $v}}-->
  
    </div>



  <div class="form-group row">
     <button type="submit" class="button"  >
      Submit
     </button>
   </div>
 </form>
</template>

<script>

import { store } from '../store';

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


  submit() {
    this.$v.form.$touch();
    if(this.$v.form.$error) return
    // to form submit after this
    alert('Form submitted')
  },
  blurName: function() {
    this.form.name.$touch();
    store.commit('setBlurUser', this.$v.form.name.$invalid);
  },
  blurEmail: function(){
     this.form.emailValue.$touch();
     store.commit('setBlurUser', this.$v.form.emailValue.$invalid);
  },
  blurPassword: function(){
      this.form.password.$touch();
      store.commit('setBlurUser', this.$v.form.password.$invalid);
  },
  blurRepassword: function(){
      this.form.repassword.$touch();
      store.commit('setBlurUser', this.$v.form.repassword.$invalid);
  }


  },
  computed: {

  		blurUser(){
  		        return this.$store.getters.getblurUser;
  		}
  	}
}
</script>






</script>
