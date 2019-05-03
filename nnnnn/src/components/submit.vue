<template>
<form>
     <div class="container">
        <button type="submit" :disabled="disableSubmit" class="btn btn-success" @submit.prevent="submit">SUBMIT</button>

      </div>

</form>
</template>

<script>
import ButtonMixin from '../mixins/ButtonMixin';
import { store } from '../store';
export default {
  data() {
    return {

    }
  },

mixins:[ButtonMixin]

}
</script>



<style>


</style>
