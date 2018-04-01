<template>
  <div class="main">
    <h1 class="m-title">MinesSweeper</h1>
    <router-link class="m-option m-option-play" to="/select">
      <i class="fa fa-play"></i>Play
    </router-link>
    <div class="m-option m-option-stats">Stats</div>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style lang="scss">
  body,html{
    height:100%;width:100%;
    background-color: #1e2327;
    font-size:62.5%;
    font-weight:lighter;
    user-select:none;
  }
  #app{
    width:inherit;
    height:inherit;
    position:relative;
    display:flex;
    overflow:hidden;
    .main{
      height:inherit;width:inherit;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      .m-title{
        color:#fbfbfb;
        font-size:2.6rem;
        font-weight:lighter;
      }
      .m-option{
        display:flex;
        width:20rem;
        height:4rem;
        margin:0.5rem 0;
        justify-content:center;
        align-items:center;
        border-radius:0.5rem;
        cursor: pointer;
        font-size:1.6rem;
        color:#fbfbfb;

      }
      .m-option-play{
        background-color: #41ab45;
      }
      .m-option-stats{
        background-color: #673ab7;
      }
    }
  }
</style>
