export default{
  computed:{
    disableSubmit() {


      if(this.$store.state.userFormStatusInvalid || this.$store.state.productFormStatusInvalid)
      {

        return true;
      }
      else
      {

        return false;

      }


    }
  }

}
