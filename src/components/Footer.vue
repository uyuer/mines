<template>
	<div class="play-footer">
    <button class="play-flag-toggle">
      <span>flag</span>
      <span>On</span>
    </button>
    <button>菜单</button>
    <div class="play-flag-amount">
    	<!-- <img src="../assets/img/flag2.png"> -->
    	<span class="iconfont icon">&#xe633;</span>
      <span>99</span>
    </div>
  </div>
</template>
<script>
	export default {
		name:"Footer",

	}
</script>
<style lang="scss">
	.play-footer{
    height:3.2rem;width: inherit;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    border-bottom: 0.1rem solid #000;
    box-shadow:0px 1px 0px 0px #3d3a48; 
    font-size:2rem;
    text-align:center;
    color:#dcdcdc;
    button{
      display:inline-block;
      height:2rem;
      padding:0.2rem 0.8rem;
      border:none;
      border-radius:0.2rem;
      cursor:pointer;outline:none;
      background-color: #343a4d;
      color:inherit;
      &:first-child{
      	display: flex;
      	>span{
      		&:first-child{
      			width:2.5rem;
      		}
      		&:last-child{
      			flex:1;
      			text-align:center;
      		}
      	}
      }
    }
    .play-flag-toggle{
    	width:5rem;
    	padding:0.2rem 0.3rem;
    	position:absolute;left:0.5rem;
    }
    .play-flag-amount{
      height:2rem;
      position: absolute;right: 0.5rem;
      width:5rem;
      text-align:center;
      font-size:1.8rem;
      display:flex;
      >.icon{
      	font-size:1.8rem;
      	color:#05fff5;
      }
      >span{
      	display:inline-block;
      	&:first-child{
      		width:2.5rem;
      	}
      	&:last-child{
					flex:1;
      	}
      }
      >img{
        height:inherit;
      }
    }
    // .play-time{
    //   display:flex;flex-direction:row;
    //   height:2rem;font-size:2rem;
    //   span{
    //     font-family:Consolas;
    //     display:inline-block;
    //   }
    // }
  }
</style>