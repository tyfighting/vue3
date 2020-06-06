<template>
  <div class="login">    
    <input :uname="name" v-model="name" @changeval="changeval">
    <son></son>
  </div>	
</template>

<script>
  import son from './About'
  export default {
    name:'login',
    components:{
      
    },
    data(){
      return {
        name:''
      };
    },
    methods:{
      changeval(){
        this.$on('changeval')
      }
    }
  }
</script>

