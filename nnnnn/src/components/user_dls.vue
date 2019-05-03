<template>
    <form @submit.prevent="submit" >
        <div class="container">
          <h1>User Registration</h1>
        </div>
        <div class="container">
          <label for="name" class="col-sm-2 col-form-label">Your name:</label>
          <input type="text"
          v-model="form.name"
          @blur="BlurUserName"
          />
           <ul>
              <li v-if="!$v.form.name.required"
              class="form-error">this field is required</li>
              <li v-if="$v.form.name.$invalid">this name field is invalid</li>
          </ul>
         </div>


         <div class="container">
          <label for="mail" class="col-sm-2 col-form-label">Your Email Address:</label>
          <input type="text"
          v-model="form.emailValue"
          @blur="BlurUserEmail"
          />
          <!--<v-on:input="$v.form.emailValue.$touch">-->
         <ul>
             <li v-if="!$v.form.emailValue.required"
             class="form-error">this field is required</li>
             <li v-if="!$v.form.emailValue.email"
             class="form-error">this is invalid email</li>
             <li v-if="$v.form.emailValue.$invalid">this email field is invalid</li>
         </ul>
        </div>

         <div class="container">
          <label for="password" class="col-sm-2 col-form-label">enter password:</label>
          <input type="text"
          v-model="form.password"
          @blur="BlurPassword"
          />
          <ul>
             <li v-if="!$v.form.password.required"
             class="form-error">this field is required</li>
             <li  v-if="!$v.form.password.minLength"
             class="form-error">Name must have at least {{$v.form.password.$params.minLength.min}} letters words</li>
             <li v-if="$v.form.password.$invalid">this password field is invalid</li>
         </ul>
        </div>

        <div class="container">
            <label for="repassword" class="col-sm-2 col-form-label">enter re-password:</label>
            <input type="text"
            v-model="form.repassword"
            @blur="BlurRePassword"
            />
          <ul>
             <li v-if="!$v.form.repassword.required"
             class="form-error">this field is required</li>

             <li v-if="!$v.form.repassword.sameAsPassword"
             class="form-error">password must match</li>

             <li v-if="$v.form.repassword.$invalid">this re-password field is invalid</li>

             <!--<li v-if="$v.form.$invalid">invalid</li>-->
          </ul>
      <!--   {{ $v}}-->

        </div>





       <div>
     <!-- `greet` is the name of a method defined below -->
         <button @click="submit('hello')">Greet</button>
      </div>
      <div>


    <button type="submit" @click.prevent="testCount"class="btn btn-success">price increment 50</button>

    </div>
       user status:{{$store.state.userFormStatusInvalid}}
     </form>
</template>

<script>

import submitMixin from '../mixins/submitMixin';

import { store } from '../store';

import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
     // count: 0,
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
  testCount: function() {
    store.commit('incrementCount');
  },

  BlurUserName: function() {
       // if (this.$v.form.name.$invalid)
       // {
       //  alert( 'name field is invalid');
       //  }
        this.$v.form.name.$touch();
        store.commit('setUserFormStatus', this.$v.form.$invalid);
      },
  BlurUserEmail: function(){
    // if (this.$v.form.emailValue.$invalid)
    // {
    //  alert( 'email field is invalid');
    //  }
     this.$v.form.emailValue.$touch();
     store.commit('setUserFormStatus', this.$v.form.$invalid);
  },
  BlurPassword: function(){

      // if (this.$v.form.password.$invalid)
      // {
      //  alert( 'password fiels is invalid');
      //  }
      this.$v.form.password.$touch();
      store.commit('setUserFormStatus', this.$v.form.$invalid);
  },
  BlurRePassword: function(){

      // if (this.$v.form.repassword.$invalid)
      // {
      //  alert( 'repassword field is invalid');
      //  }
      this.$v.form.repassword.$touch();
      store.commit('setUserFormStatus', this.$v.form.$invalid);
  }


  },
   computed: {
     count () {
             return this.$store.getters.getCount + " price";

       },
  //   incrementCounter: function() {
  //             return this.count ++
  //         },


  		// blurUser(){
  		//         return this.$store.getters.getUserFormStatus;
  		// }
  	},
    mixins:[submitMixin]
}
</script>






</script>
