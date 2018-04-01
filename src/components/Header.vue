<template>
	<div>
		<div class="select-borad-title">
      <button>
        <router-link v-bind:to="headerInfo.backTo">
          <i class="fa fa-angle-left"></i> 后退
        </router-link>
      </button>
      <span class="header-body" v-html="headerInfo.info"></span>
      <div class="header-time" v-if="headerInfo.time">
        00:00
      </div>
    </div>
	</div>
</template>
<script>
	export default {
		name:'Header',
		props:{
			headerInfo:{
				type:Object,
			}
		},
		data(){
			return {

			}
		}
	}
</script>
<style lang='scss'>
	.select-borad-title{
    height:3.2rem;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    border-bottom: 0.1rem solid #000;
    box-shadow:0px 1px 0px 0px #3d3a48; 
    font-size:1.8rem;
    color:#dcdcdc;
    >button{
      position:absolute;
      left:0.5rem;
      display:inline-block;
      height:2rem;
      padding:0.2rem 0.8rem;
      border:none;
      cursor:pointer;
      outline:none;
      background-color: #343a4d;
      a{
        color:#ccc;
      }
      i{
        font-size:1.8rem;
        font-weight:bold;
        color:#4caf50;
      }
    }
    .header-body{

    }
    .header-time{
    	width:5rem;
    	text-align:right;
    	position:absolute;
    	right: 0.5rem;
    }
  }
</style>