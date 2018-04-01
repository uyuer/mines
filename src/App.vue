<template>
  <div id="app">
    <router-view></router-view>
  </div> 
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style lang="scss">
  body,html{
    height:100%;width:100%;
    background-color: #1e2327;
    font-family:Consolas;
    font-weight:lighter;
    font-size:62.5%;
    user-select:none;
  }
  #app{
    width:inherit;
    height:inherit;
    position:relative;
    display:flex;
    overflow:hidden;
    
  }

</style>
