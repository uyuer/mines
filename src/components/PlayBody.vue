<template>
	<div class="play-body" ref="playBody">
    <panel 
    	v-bind:map='map' 
    	v-bind:style="computeContainerClass">
    </panel>
  </div>
</template>
<script>
	import Panel from './Panel'
	export default {
		name:'PlayBody',
		components:{
			'panel':Panel
		},
		props:{
			map:{
				type:Object,
			}
		},	
		data(){
			return {
				container:{
	        left:'1rem',
	        top:'1rem'
	      },
	      pieceSize:0,
			}
		},
		created(){
			this.pieceSize = this.getPanelSize();
			this.setContainer();
		},
		mounted(){
			this.setContainerPosition();
		},
		computed:{
			computeContainerClass(){
      	return this.container;
    	}
		},
		methods:{
			// 获取小方块大小
			getPanelSize(){
				return this.$store.state.pieceSize;
			},
			// 设置容器的大小
			setContainer(){
	      this.container.width=this.pieceSize*this.map.panelSize.x +'rem'
	      this.container.height=this.pieceSize*this.map.panelSize.y +'rem'
	    },
	    // 设置容器的位置
			setContainerPosition(){
	      let playBody=this.$refs.playBody;
	      let minesCon=playBody.childNodes[0];
	      if(minesCon.offsetWidth<playBody.offsetWidth){
	        this.container.left=null
	      }
	      if(minesCon.offsetHeight<playBody.offsetHeight){
	        this.container.top=null;
	      }
	      console.log(this.container)
	    }
	    
		}
	}
</script>
<style lang="scss">
	.play-body{
    display:flex;
    position:relative;
    flex:1;
    justify-content:center;align-items:center;
    overflow:hidden;
    border-bottom: 0.1rem solid #000;
    box-shadow:0px 1px 0px 0px #3d3a48;
  }
</style>