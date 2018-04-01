<template>
	<div>
		<span 
			v-bind:html="html"
			v-on:click="up"></span>
	</div>
</template>
<script>
	export default {
		name: 'piece',
		props:{
			html:{
				type:String
			},
			index:{
				type:Number
			}
		},
		methods:{
			up(){	
				this.$emit("upclick",this.index)
				// if(this.$store.state.gameStatus!='running') return false;
				// console.log(index)
				// this.flagMode ? this.mark(index) : this.uncover(index)
			},
			// 揭开模式
	    uncover(index){
	      var $pieceState=this.gameData[index].pieceState;
	      var $isMines=this.gameData[index].isMines;
	      if($pieceState==0){
	        if($isMines==1){
	          console.log("game over")
	          this.gameOver(0,index)
	        }else{
	          this.minesCompute(index);
	          
	        }
	      }
	    },
	    // 标记模式
	    mark(index){
	      // if(this.gameStatus!=1)return false;
	      // console.log(this.$route.param)
	      // let gameData=this.$store.state.gameData[]
	      var $pieceState=this.gameData[index].pieceState;
	      if($pieceState<=0){
	        $pieceState--;
	        $pieceState<-2?$pieceState=0:$pieceState;
	      }
	      this.gameData[index].pieceState=$pieceState;
	      this.variance();
	    },
		}
	}
</script>
<style lang="scss">
	
</style>