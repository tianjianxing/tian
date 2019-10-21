<template>
	<div class="cake">
		<p>
			<span class="span1">面包</span>
			<br>
			<span class="span2">面包</span>
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
					<span>{{g.name}}</span>
					<br>
					<span class="span3">&yen;{{g.price}}</span>
				</router-link>
				<img @click=handleAdd(1) class="img3" :src="g.url03" alt="">
			</li>
			<li class="hide" v-for="n in aaa"></li>
		</ul>
		<p>
			<span class="span1">季节性下线</span>
			<br>
			<span class="span2">在合适的季节，吃恰当的食物</span>
		</p>	
		<ul class="section section2">
			<li v-for="(k,i) in goodss" :key="i">
				 <router-link :to="{
		            path: '/goods',
		            query:{
		              g:k 
		            }
		          }">
					<b>敬请期待</b>
					<img class="img2" :src="k.url02" alt="">
					<br>
					<span>{{k.name}}</span>
					<br>
					<span class="span3">&yen;{{k.price}}</span>
				</router-link>
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
					url02:require("../assets/image/分类插图/download04.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"18.00/50g(一份)",
					name:"帕玛森芝士可颂"
				},
				{
					url02:require("../assets/image/分类插图/download04.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"18.00/50g(一份)",
					name:"帕玛森芝士可颂"
				},
				{
					url02:require("../assets/image/分类插图/download04.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"18.00/50g(一份)",
					name:"帕玛森芝士可颂"
				},
				{
					url02:require("../assets/image/分类插图/download04.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"18.00/50g(一份)",
					name:"帕玛森芝士可颂"
				},
				{
					url02:require("../assets/image/分类插图/download04.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"18.00/50g(一份)",
					name:"帕玛森芝士可颂"
				},
				{
					url02:require("../assets/image/分类插图/download04.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"18.00/50g(一份)",
					name:"帕玛森芝士可颂"
				},
				{
					url02:require("../assets/image/分类插图/download04.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"18.00/50g(一份)",
					name:"帕玛森芝士可颂"
				},
				{
					url02:require("../assets/image/分类插图/download04.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"18.00/50g(一份)",
					name:"帕玛森芝士可颂"
				},
				{
					url02:require("../assets/image/分类插图/download04.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"18.00/50g(一份)",
					name:"帕玛森芝士可颂"
				},
				{
					url02:require("../assets/image/分类插图/download04.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"18.00/50g(一份)",
					name:"帕玛森芝士可颂"
				},
				{
					url02:require("../assets/image/分类插图/download04.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"18.00/50g(一份)",
					name:"帕玛森芝士可颂"
				},
				{
					url02:require("../assets/image/分类插图/download04.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"18.00/50g(一份)",
					name:"帕玛森芝士可颂"
				}
			],
			goodss:[
				{
					url02:require("../assets/image/分类插图/download04.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"18.00/50g(一份)",
					name:"帕玛森芝士可颂"
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
			return 2-this.goodss.length%2;
		},
		aaa(){
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
	}
}
.section2{
	a{
		position: relative;
		img{
			opacity: 0.3;
		}
		b{
			position: absolute;
			left: 35%;
			top: 30%;
		}
	}
	.hide{
		opacity: 0;
	}
}
</style>