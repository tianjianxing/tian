<template>
	<div class="pay">
		<p>·满100元免配送服务费·</p>
		<div :style="{display:emptys}" class="cars" v-for="(ing,i) in car" :key="i">
			<img :src="ing.url" alt="">
			<span class="span1">{{ing.name}}</span>
			<span>{{ing.weight}}</span>
			<span>&yen;{{ing.price}}</span>
			<div class="numbers">
				<img @click="handleReducenum(ing)" class="img1" src="../assets/image/结算页面插图/download03.png" alt="">
				{{ing.num}}
				<img @click="handleAddnum(ing)" class="img2" src="../assets/image/结算页面插图/download02.png" alt="">
			</div>
			<p class="p1">
				<img src="../assets/image/结算页面插图/download05.png" alt="">
				<span>每份含免费餐具五套</span>
			</p>
			<p class="p2">
				<img src="../assets/image//结算页面插图/download.jpg" alt="">
				<span>+添加生日牌</span>
				<img class="img2" src="../assets/image/结算页面插图/download.png" alt="">
			</p>
		</div>
		<p>·搭配商品·</p>
		<ul class="extra">
			<li v-for="(w,i) in list" :key="i">
				<img class="img1" :src="w.url" alt="">
				<h4>{{w.name}}</h4>
				<span>&yen;{{w.price}}</span>
				<img @click=handleAdd(1) class="img2" src="../assets/image/分类插图/download02.png" alt="">
			</li>
		</ul>
		<p>·推荐商品·</p>
		<ul class="recommend">
			<li v-for="(q,i) in lists" :key="i">
				<img class="img1" :src="q.url" alt="">
				<h4>{{q.name}}</h4>
				<span>&yen;{{q.price}}</span>
				<img @click=handleAdd(1) class="img2" src="../assets/image/分类插图/download02.png" alt="">
			</li>
		</ul>
		<div class="footer">
			<img @click="emptycar(0)" src="../assets/image/结算页面插图/download04.png" alt="">
			<div>
				&yen;<span>{{allnum}}</span>
				<span class="span2">商品</span>
			</div>
			<button type="button" @click="orders">去结算</button>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return{
			allnum:'',
			emptys:"block",
			car:JSON.parse(localStorage.getItem("thing")),
			list:[
				{
					url:require("../assets/image/结算页面插图/download01.jpg"),
					name:"方形蜡烛",
					price:8.00
				},
				{
					url:require("../assets/image/结算页面插图/download05.png"),
					name:"餐具套餐",
					price:0.50
				}
			],
			lists:[
				{
					url:require("../assets/image/主页插图/download03.jpg"),
					name:"米道",
					price:"298.00/454g(1.0磅)"
				},
				{
					url:require("../assets/image/主页插图/download09.jpg"),
					name:"百利甜情人",
					price:"198.00/454g(1.0磅)"
				},
				{
					url:require("../assets/image/主页插图/download13.jpg"),
					name:"黑白巧克力慕斯",
					price:"198.00/454g(1.0磅)"
				},
				{
					url:require("../assets/image/主页插图/download07.jpg"),
					name:"浅草",
					price:"198.00/454g(1.0磅)"
				},
				{
					url:require("../assets/image/主页插图/download11.jpg"),
					name:"榴莲飘飘",
					price:"198.00/454g(1.0磅)"
				},
				{
					url:require("../assets/image/主页插图/download10.jpg"),
					name:"芒果奶油蛋糕",
					price:"198.00/454g(1.0磅)"
				},
				{
					url:require("../assets/image/主页插图/download12.jpg"),
					name:"朗姆芝士",
					price:"198.00/454g(1.0磅)"
				},
				{
					url:require("../assets/image/主页插图/download14.jpg"),
					name:"彼德尔猪年限定",
					price:"198.00/454g(1.0磅)"
				}
			]
		}
	},
	created(){
		this.allnum=0;
		for(var a in this.car){
			this.allnum+=this.car[a].num*this.car[a].price
			console.log(this.car[a].price);
		}
	},
	methods:{
		handleAdd(n){
			this.$store.commit('mutationsAddCount',n);
		},
		handleAddnum(n){
			this.$store.commit('mutationsAddnum',1);
			n.num++;
			this.allnum+=1*n.price;
			localStorage.setItem('thing',JSON.stringify(this.car));
			
		},
		handleReducenum(n){
			console.log(n);
			if(n.num>0){
				this.$store.commit('mutationsReducenum',1);
				n.num--;
				this.allnum-=1*n.price;
				localStorage.setItem('thing',JSON.stringify(this.car));
			}else{
				for(var b in this.car){
					if(this.car[b].num==0){
						this.car.splice(b,1);
					};
					localStorage.setItem('thing',JSON.stringify(this.car));
				}
				

			}
		},
		emptycar(){
			this.$store.commit('empty',0);
			this.emptys="none";
			localStorage.removeItem('thing');
			localStorage.setItem('count',0);
			this.allnum=0;

		},
		orders(){
			location.href="#/order";
		}
	}
}
</script>
<style scoped lang="less">
.pay{
	margin-top: 50px;
	height: 80%;
	color: #442818;
	// margin-bottom: 20%;
	&>p{
		height: 38px;
		text-align: center;
		line-height: 38px;
		font-size: 12px;
	}

	.cars{
		height: 120px;
		margin-bottom: 150px;
		&>img{
			width: 110px;
			height: 120px;
			float: left;
			margin-right: 30px;
		}
		&>span{
			display: block;
			font-size: 12px;
			margin-top: 10px;
		}
		.span1{
			padding-top: 20px;
		}
		.numbers{
			width: 50px;
			height: 20px;
			text-align: center;
			line-height: 20px;
			display: inline-block;
			margin-top: 30px;
			margin-left: 200px;
			img{
				width: 12px;
				height: 12px;
				margin-top: 4px;
			}
			.img1{
				float: left;
			}
			.img2{
				float: right;
			}
		}
		.p1{
			height: 46px;
			line-height: 46px;
			font-size: 12px;
			img{
				width: 46px;
				height: 46px;
				float: left;
				margin-right: 15px;
			}
		}
		.p2{
			height: 30px;
			line-height: 30px;
			font-size: 12px;			
			img{
				width: 70px;
				height: 30px;
				float: left;
				margin-right: 15px;
			}
			.img2{
				width: 10px;
				height: 10px;
				float: right;
				margin-right: 20px;
			}
		}
	}
	.extra,.recommend{
		padding-left: 0px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		li{
			display: inline-block;
			width: 48%;
			height: 180px;
			position: relative;
			border: 1px solid #f2eae5;
			border-radius: 5px;
			margin-bottom: 5px;
			.img1{
				display: block;
				width: 100px;
				height: 80px;
				margin: auto;
				margin-top: 20px;
			}
			h4{
				font-weight: normal;
				font-size: 14px;
				color: #442818;
				margin-bottom: 0px;
				margin-top: 10px
			}
			&>span{
				font-size: 12px;
				color: #969696;
			}
			.img2{
				position: absolute;
				right: 20px;
				bottom: 20px;
				width: 20px;
				height: 20px;
			}
		}
	}
	.extra{
		li{
			.img1{
				margin-left: 20px;
				height: 100px;
			}
		}
		
	}
	.footer{
		position: fixed;
		bottom: 0px;
		height: 50px;
		width: 100%;
		background-color: white;
		img{
			width: 15px;
			height: 15px;
			float: left;
			margin-top: 10px;	
		}
		div{
			height: 50px;
			font-size: 12px;
			margin-left: 65%;
			span{
				font-size: 16px;
			}
			.span2{
				display: block;
				font-size: 12px;
				color: #969696;
			} 
		}
		button{
			border: none;
			background-color: #442818; 
			width: 100px;
			height: 44px;
			float: right;
			color: white;
			margin-top: -53px;
		}
	}
}
</style>