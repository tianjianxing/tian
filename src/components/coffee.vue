<template>
	<div class="cake">
		<p>
			<span class="span1">咖啡</span>
			<br>
			<span class="span2">挂耳咖啡</span>
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
				<img @click="shopcar" class="img3" :src="g.url03" alt="">
				<div class="details" :style="{display:details}">
					<p>&yen;{{g.prices}}
						<img @click="close" src="../assets/image/分类插图/download08.png" alt="">
					</p>
					<ul class="tips">
						<li v-for="(o,i) in tipss" :key="i">
							<img :src="o.url" alt="">
							{{o.tipname}}
						</li>
					</ul>
					<img :src="g.url02" alt="">
					<p class="pp">口味</p>
					<ul class="taste">
						<li v-for="(m,i) in tastes" :key="i">
							{{m.tname}}
						</li>
					</ul>
					<p class="pp">商品规格</p>
					<ul class="standard">
						<li v-for="(n,i) in standards" :key="i">
							{{n.standname}}
							<br>
							{{n.standname2}}
						</li>
						<li class="lilast">
							更多
						</li>
					</ul>
					<button @click=handleAdd(1) type="button">加入购物车<span>&yen;{{g.prices}}</span></button>
				</div>
			</li>
			<li class="hide" v-for="n in sss"></li>
		</ul>	
	</div>
</template>
<script>
export default {
	data(){
		return{
			details:"none",
			tipss:[
				{
					url:require("../assets/image/分类插图/download09.png"),
					tipname:'17.5x17.5',
				},
				{
					url:require("../assets/image/分类插图/download10.png"),
					tipname:"适合7-8人分享"
				},
				{
					url:require("../assets/image/分类插图/download11.png"),
					tipname:"含10套餐具（蜡烛需单独订购）"
				},
				{
					url:require("../assets/image/分类插图/download12.png"),
					tipname:"须提前6小时预订"
				}
			],
			tastes:[
				{
					tname:"百利甜",
				},
				{
					tname:"深爱百利甜",
				}
			],
			standards:[
				{
					standname:"454g",
					standname2:"(1.0磅)"
				},
				{
					standname:"681g",
					standname2:"(1.5磅)"
				},
				{
					standname:"908g",
					standname2:"(2.0磅)"
				},
				{
					standname:"1362g",
					standname2:"(3.0磅)"
				},
				{
					standname:"2270g",
					standname2:"(5.0磅)"
				}
			],
			goods:[
				{
					url02:require("../assets/image/分类插图/download02.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"45.00/80g(盒)",
					EnName:"Milk Gelato",
					name:"原味牛乳冰淇淋",
					prices:"298.00"
				},
				{
					url02:require("../assets/image/分类插图/download02.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"45.00/80g(盒)",
					EnName:"Milk Gelato",
					name:"原味牛乳冰淇淋",
					prices:"298.00"
				},
				{
					url02:require("../assets/image/分类插图/download02.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"45.00/80g(盒)",
					EnName:"Milk Gelato",
					name:"原味牛乳冰淇淋",
					prices:"298.00"
				},
				{
					url02:require("../assets/image/分类插图/download02.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"45.00/80g(盒)",
					EnName:"Milk Gelato",
					name:"原味牛乳冰淇淋",
					prices:"298.00"
				},
				{
					url02:require("../assets/image/分类插图/download02.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"45.00/80g(盒)",
					EnName:"Milk Gelato",
					name:"原味牛乳冰淇淋",
					prices:"298.00"
				},
				{
					url02:require("../assets/image/分类插图/download02.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"45.00/80g(盒)",
					EnName:"Milk Gelato",
					name:"原味牛乳冰淇淋",
					prices:"298.00"
				}
			],
			goods:[
				{
					url02:require("../assets/image/分类插图/download03.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)",
					prices:"50.00"
				},{
					url02:require("../assets/image/分类插图/download03.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)",
					prices:"50.00"
				},{
					url02:require("../assets/image/分类插图/download03.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)",
					prices:"50.00"
				},{
					url02:require("../assets/image/分类插图/download03.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)",
					prices:"50.00"
				},{
					url02:require("../assets/image/分类插图/download03.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)",
					prices:"50.00"
				},{
					url02:require("../assets/image/分类插图/download03.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)",
					prices:"50.00"
				},{
					url02:require("../assets/image/分类插图/download03.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)",
					prices:"50.00"
				},{
					url02:require("../assets/image/分类插图/download03.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)",
					prices:"50.00"
				},{
					url02:require("../assets/image/分类插图/download03.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)",
					prices:"50.00"
				},{
					url02:require("../assets/image/分类插图/download03.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)",
					prices:"50.00"
				},{
					url02:require("../assets/image/分类插图/download03.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)",
					prices:"50.00"
				},{
					url02:require("../assets/image/分类插图/download03.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)",
					prices:"50.00"
				},{
					url02:require("../assets/image/分类插图/download03.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)",
					prices:"50.00"
				},{
					url02:require("../assets/image/分类插图/download03.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)",
					prices:"50.00"
				},{
					url02:require("../assets/image/分类插图/download03.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)",
					prices:"50.00"
				},{
					url02:require("../assets/image/分类插图/download03.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)",
					prices:"50.00"
				},{
					url02:require("../assets/image/分类插图/download03.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)",
					prices:"50.00"
				}
			]	
		}
	},
	methods:{
		handleAdd(n){
			this.$store.commit('mutationsAddCount',n);
			this.details="none";
		},
		close(){
			this.details="none";
		},
		shopcar(){
			for(var i=0;i<localStorage.length;i++){
				for(var j=0;j<sessionStorage.length;j++){
					if(localStorage.key(i)==sessionStorage.key(j)&&localStorage.getItem(localStorage.key(i))==sessionStorage.getItem(sessionStorage.key(j))){
						
					}
				}
				return this.details="block"
			}
		}
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
			right: 0px;
			bottom: 0px;
		}
}
.details{
			position: fixed;
			width: 85%;
			margin: auto;
			top: 140px;
			left: 10px;
			height: 600px;
			z-index: 100;
			background-color: yellow;
			padding: 10px 20px;
			p{
				text-align: left;
				img{
					width: 20px;
					height: 20px;
					float: right;
				}
			}
			.pp{
				font-size: 12px;
			}
			&>img{
				width: 180px;
				height: 180px;
				display: block;
				margin: auto;
			}
			.tips{
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				padding-left: 0px;
				li{
					display: inline-block;
					width: 49%;
					font-size: 12px;
					margin-bottom: 10px;
					img{
						width: 15px;
						height: 15px;
						margin-right: 10px;
					}
				}
			}
			.taste{
				padding-left: 0px;
				li{
					display: inline-block;
					width: 88px;
					height: 32px;
					background-color: white;
					margin-right: 10px;
					line-height: 32px;
					text-align: center;
					padding: 2px 5px;
					margin-bottom: 0px;
				}
			}
			.standard{
				padding-left: 0px;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				li{
					display: inline-block;
					width: 24%;
					font-size: 12px;
					height: 30px;
					text-align: center;
					line-height: 14px;
					background-color: white;
					margin-bottom: 10px;
				}
				.lilast{
					height: 30px;
					line-height: 30px;
					padding-top: 0px;
				}
			}
			button{
				border: none;
				background-color: #442818;
				width: 70%;
				height: 42px;
				display: block;
				margin: auto;
				text-align: center;
				line-height: 42px;
				color: white;
				margin-top: 20px;
			}
		}
	.hide{
		opacity: 0;
		// visibility: hidden;
	}
}
</style>