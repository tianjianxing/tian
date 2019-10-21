<template>
	<div class="three">
		<div class="header">
			<img src="../assets/image/主页新品人气生气图/download02.jpg" alt="">
		</div>
		<p>新品</p>
		<ul class="section">
			<li v-for="(g,i) in goods" :key="i">
				<a href="">
					<img class="img1" :src="g.url01" alt="">
					<img class="img2" :src="g.url02" alt="">
					<br>
					<span>{{g.EnName}}</span>
					<br>
					<span>{{g.name}}</span>
					<br>
					<span class="span3">&yen;{{g.price}}</span>
					<img class="img3" :src="g.url03" alt="">
				</a>
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
					url01:require("../assets/image/分类插图/download03.png"),
					url02:require("../assets/image/主页新品人气生气图/download01.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)"
				},
				{
					url01:require("../assets/image/分类插图/download03.png"),
					url02:require("../assets/image/主页新品人气生气图/download01.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)"
				},
				{
					url01:require("../assets/image/分类插图/download03.png"),
					url02:require("../assets/image/主页新品人气生气图/download01.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)"
				},
				{
					url01:require("../assets/image/分类插图/download03.png"),
					url02:require("../assets/image/主页新品人气生气图/download01.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)"
				},
				{
					url01:require("../assets/image/分类插图/download03.png"),
					url02:require("../assets/image/主页新品人气生气图/download01.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)"
				},
				{
					url01:require("../assets/image/分类插图/download03.png"),
					url02:require("../assets/image/主页新品人气生气图/download01.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)"
				},
				{
					url01:require("../assets/image/分类插图/download03.png"),
					url02:require("../assets/image/主页新品人气生气图/download01.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)"
				},
				{
					url01:require("../assets/image/分类插图/download03.png"),
					url02:require("../assets/image/主页新品人气生气图/download01.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)"
				},
				{
					url01:require("../assets/image/分类插图/download03.png"),
					url02:require("../assets/image/主页新品人气生气图/download01.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)"
				},
				{
					url01:require("../assets/image/分类插图/download03.png"),
					url02:require("../assets/image/主页新品人气生气图/download01.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)"
				},
				{
					url01:require("../assets/image/分类插图/download03.png"),
					url02:require("../assets/image/主页新品人气生气图/download01.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)"
				},
				{
					url01:require("../assets/image/分类插图/download03.png"),
					url02:require("../assets/image/主页新品人气生气图/download01.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)"
				},
				{
					url01:require("../assets/image/分类插图/download03.png"),
					url02:require("../assets/image/主页新品人气生气图/download01.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)"
				},
				{
					url01:require("../assets/image/分类插图/download03.png"),
					url02:require("../assets/image/主页新品人气生气图/download01.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)"
				},
				{
					url01:require("../assets/image/分类插图/download03.png"),
					url02:require("../assets/image/主页新品人气生气图/download01.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)"
				},
				{
					url01:require("../assets/image/分类插图/download03.png"),
					url02:require("../assets/image/主页新品人气生气图/download01.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)"
				},
				{
					url01:require("../assets/image/分类插图/download03.png"),
					url02:require("../assets/image/主页新品人气生气图/download01.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)"
				},
				{
					url01:require("../assets/image/分类插图/download03.png"),
					url02:require("../assets/image/主页新品人气生气图/download01.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)"
				},
				{
					url01:require("../assets/image/分类插图/download03.png"),
					url02:require("../assets/image/主页新品人气生气图/download01.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)"
				},
				{
					url01:require("../assets/image/分类插图/download03.png"),
					url02:require("../assets/image/主页新品人气生气图/download01.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)"
				},
				{
					url01:require("../assets/image/分类插图/download03.png"),
					url02:require("../assets/image/主页新品人气生气图/download01.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)"
				},
				{
					url01:require("../assets/image/分类插图/download03.png"),
					url02:require("../assets/image/主页新品人气生气图/download01.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)"
				},
				{
					url01:require("../assets/image/分类插图/download03.png"),
					url02:require("../assets/image/主页新品人气生气图/download01.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)"
				},
				{
					url01:require("../assets/image/分类插图/download03.png"),
					url02:require("../assets/image/主页新品人气生气图/download01.jpg"),
					url03:require("../assets/image/分类插图/download02.png"),
					price:"50.00/120g(一份)",
					name:"手剥紫皮大腰果(120g)"
				},
				
			]	
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
.header{
	img{
		width: 100%;
	}
}
p{
	height: 40px;
	text-align: center;
	line-height: 40px;
	color: #442818;
	border-bottom: 1px solid #e9e9e9;
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
		a{
		text-decoration: none;
		color: #442818;
		display: inline-block;
		font-size: 12px;
		position: relative;
		.img1{
			width: 40px;
			height: 13px;
			position: absolute;
			left: 0px;
			top: 0px;
			}
		.img2{
			width: 180px;
			height: 200px;
		}
		.img3{
			width: 25px;
			height: 25px;
			position: absolute;
			right: 0px;
			bottom: 0px;
		}
		.span3{
			color: #c19789;
			font-size: 12px;
		}
	}
}
	.hide{
		opacity: 0;
		// visibility: hidden;
	}
}
</style>