<template>
  <div class="select-borad">
    <c-header v-bind:headerInfo='headerInfo'></c-header>
    <items></items> 
  </div>
</template>

<script>
  import Header from './Header'
  import Items from './Items'
  export default {
    name: 'Select',
    components:{
      'c-header':Header,
      'items':Items
    },
    data(){
      return {
        headerInfo:{
          backTo:'/home',
          info:'Select',
          time:null
        }
      }
    }
  }
</script>

<style lang="scss">
  .select-borad{
    height:inherit;width:inherit;
  }
</style>
