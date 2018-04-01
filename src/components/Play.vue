<template>
  <div class="play-wrapper">
    <div class="play">
      <c-header v-bind:headerInfo='headerInfo'></c-header>
      <c-body v-bind:map='map'></c-body>
      <c-footer></c-footer>
    </div>
  </div>
</template>

<script>
  import Header from './Header'
  import PlayBody from './PlayBody'
	import Footer from './Footer'
  export default {
  	name:'play',
  	components:{
  		'c-header':Header,
      'c-body':PlayBody,
      'c-footer':Footer
  	},
  	data(){
  		return {
  			headerInfo:null,
  			map:null,
  		}
  	},
  	created(){
      this.map=this.getBaseData();
      console.log(this.map)
  		this.headerInfo=this.createHeaderInfo();
      this.$store.commit('running')
  	},
  	methods:{
      // 动态生成header信息
      getBaseData(){
        let level = this.$route.params.level;
        console.log(level)
        let map = this.$store.state.gameData[level];
        map.level=level;
        return map;
      },
  		createHeaderInfo(){
  			// let level = this.$route.params.level;
  			// let map = this.$store.state.gameData[level];
        let map=this.map;
  			let str = map.alias;
  			str+= map.panelSize.x && map.panelSize.y ?
					' ' + map.panelSize.x +'&times'+map.panelSize.y : '';
  			return {
  				backTo:'/select',
  				info:str,
  				time:true
  			}
  		}
  	}
  };
</script>
<style lang="scss">
.play-wrapper{
  height:100%;width:100%;
  color:#fbfbfb;
}
.play{
  height:inherit;width:inherit;
  position:relative;
  z-index: 9;
  display:flex;
  flex-direction:column;
}
</style>
