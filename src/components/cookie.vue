<template>
	<div class="cake">
		<p>
			<span class="span1">常温蛋糕</span>
			<br>
			<span class="span2">方便携带，恰到好处的满足</span>
		</p>
		<ul class="section">
			<li v-for="(g,i) in goods" :key="i">
				 <router-link :to="{
		            path: '/goods',
		            query:{
		              g 
		            }
		          }">
					<img class="img2" :src="g.url02" alt="">
					<br>
					<span>{{g.EnName}}</span>
					<br>
					<span>{{g.name}}</span>
					<br>
					<span class="span3">&yen;{{g.price}}</span>
				</router-link>
				<img @click=handleAdd(1) class="img3" :src="g.url03" alt="">
			</li>
			<li class="hide" v-for="n in sss"></li>
		</ul>	
	</div>
</template>
<script>
export default {
	data(){
		return{
			goods:[
				{
					url02:require("../assets/image/分类插图/download05.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"8.00/30g(份)",
					EnName:"Pound cake slice",
					name:"磅蛋糕切片(核桃)"
				},
				{
					url02:require("../assets/image/分类插图/download05.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"8.00/30g(份)",
					EnName:"Pound cake slice",
					name:"磅蛋糕切片(核桃)"
				},
				{
					url02:require("../assets/image/分类插图/download05.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"8.00/30g(份)",
					EnName:"Pound cake slice",
					name:"磅蛋糕切片(核桃)"
				}
			]
		}
	},
	methods:{
		handleAdd(n){
			this.$store.commit('mutationsAddCount',n);
			this.details="none";
		},
	},
	computed:{
			sss(){
				return 2-this.goods.length%2;
			}
		}
}
</script>
<style scoped lang="less">
p{
	text-align: center;
	border-bottom: 1px solid #e9e9e9;
	padding: 5px 0px; 
	.span1{
		color: #442818;
	}
	.span2{
		font-size: 12px;
		color: #d5bfa7;
	}
}
.section{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	list-style-type: none;
	padding: 0px;
	li{
		margin-bottom: 15px;
		display: inline-block;
		width: 49%;
		position: relative;
		a{
		text-decoration: none;
		color: #442818;
		display: inline-block;
		font-size: 12px;
		.img2{
			width: 180px;
			height: 200px;
		}
		.span3{
			color: #c19789;
			font-size: 12px;
		}
	}
	.img3{
			width: 25px;
			height: 25px;
			position: absolute;
			right: 15px;
			bottom: 0px;
		}
}
	.hide{
		opacity: 0;
		// visibility: hidden;
	}
}
</style>