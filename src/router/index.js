import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Select from '@/components/Select'
import Play from '@/components/Play'
import Custom from '@/components/Custom'

Vue.use(Router)

const router= new Router({
	mode: 'history',		
  routes: [
    {path: '/',redirect:'/home'},
    {path: '/home', name: 'home', component: Home},
    {path: '/select', name: 'select', component: Select, props: true},
    {path: '/play/:level', name: 'play', component: Play},
    {path: '/custom', name: 'custom', component: Custom}
  ],
});

router.beforeEach((to,from,next)=>{
  next()
})
export default router;
