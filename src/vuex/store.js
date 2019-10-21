import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		nums:Number(localStorage.getItem('count')),
	},
	mutations:{
		mutationsAddCount(state,n=0){
			state.nums += n;
			localStorage.setItem('count',state.nums)
		},
		mutationsAddnum(state,n=0){
			state.nums += n;
			localStorage.setItem('count',state.nums)
		},
		mutationsReducenum(state,n=0){
			state.nums -= n;
			localStorage.setItem('count',state.nums)
		},
		empty(state,n=0){
			state.nums = 0;
			localStorage.setItem('count',state.nums)
		}
	}
})