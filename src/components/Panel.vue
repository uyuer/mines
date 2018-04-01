<template>
	<div class="mines-con">
  	<piece 
  		v-for="(game,index) in gameData" 
  		v-bind:key="game.id"
  		v-bind:html="game.html"
  		v-bind:index='index'
  		v-on:upclick="uclick"></piece>
  </div>
</template>
<script>
	import Piece from './Piece'
	export default {
		name:'Panel',
		components:{
			'piece':Piece,
		},
		props:{
			map:{
				type:Object,
			}
		},
		data(){
			return {
				gameData:null
			}
		},
		created(){
			this.gameData=this.createGameData(this.$route.params.level)
		},
		computed:{

		},
		methods:{
			uclick(index){
				console.log(index)
			},
			// 获取公共游戏数据
			getStoreGameData(){},
	    // 创建数据
	    createGameData(level){
	    	let gameData=this.$store.state.gameData[level].data;
	    	if(gameData) return gameData;

	      let data=[];//数据
	      let minesAmount=this.map.mines;
	      let panelSize=this.map.panelSize;
	      let pieceAmount=panelSize.x*panelSize.y;
	      for(let i=0;i<pieceAmount;i++){
	        var tempObj={
	          pieceState:0,
	          isMines:0,
	          index:0,
	          html:""
	        }
	        if(minesAmount>0){
	          tempObj.isMines=1;
	          minesAmount--;
	        }else{
	          tempObj.isMines=0;
	        }
	        data.push(tempObj);
	      }
	      //打乱数据
	      data.sort(function(){return 0.5-Math.random()});
	      //将游戏数据复制分别保存
	      for(var i=0;i<data.length;i++){
	        data[i].index=i
	      }
	      return data;
	    },
		}
	}
</script>
<style lang="scss">
	.mines-con{
		position: absolute;
    user-select:none;
    transition:transform 0.3s;
    >div{
	    width: 3.6rem;height:3.6rem;
	    padding:2px;box-sizing: border-box;
	    display: flex;
	    float: left;
	    .spanAniAction{
	      animation-play-state:running;
	    }
	    >span{
	      background-color: #7f7f7f;
	      flex:1;
	      box-sizing: border-box;
	      cursor:pointer;
	      display: flex;
	      justify-content: center;align-content: center;
	      align-items: center;
	      font-size: 1.8rem;font-weight: bold;
	      color:#000;
	      animation-name:spanAnimation;
	      animation-duration:0.5s;
	      animation-timing-function:ease;
	      animation-delay:0;
	      animation-iteration-count:1;
	      animation-direction:normal;
	      animation-play-state:paused;
	      animation-fill-mode:forwards;
	    }
	  }
  }
</style>