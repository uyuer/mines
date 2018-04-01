<template>
	<div class="select-borad-body">
    <router-link 
      class="select-borad-body-option" 
      v-for="(le,key) in levels" 
      :key="le.id"  
      :to="{name:le.linkTo,params:{level:key}}" 
      v-html="compute_string(le,key)">
    </router-link> 
  </div>
</template>
<script>
	export default {
		name:'Items',
		data(){
			return {
				levels:null
			}
		},
		created(){
			this.levels=this.getLevels();
      console.log(this.levels)
		},
		methods:{
			getLevels(){
        let gameData=this.$store.state.gameData
				return {
          'simple':gameData['simple'],
          'normal':gameData['normal'],
          'difficulty':gameData['difficulty'],
          'custom':gameData['custom'],
        };
			},
			compute_string: function (le,key) {
        console.log(key)
				let str = le.alias;
				le.panelSize.x && le.panelSize.y ?
					str += ' ' + le.panelSize.x +'&times'+le.panelSize.y : str
        return str
      }
		}
	}
</script>
<style lang="scss">
	.select-borad-body{
    height:inherit;width:inherit;
    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    .select-borad-body-option{
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
      &:nth-child(1){
        background-color: #2196f3;
      }
      &:nth-child(2){
        background-color: #8bc34a;
      }
      &:nth-child(3){
        background-color: #ff9800;
      }
      &:nth-child(4){
        background-color: #607d8b;
      }
    }
  }
</style>