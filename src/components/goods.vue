<template>
	<div class="goods">
		<el-carousel>
	    <el-carousel-item v-for="item in 4" :key="item">
	    </el-carousel-item>
	  	</el-carousel>
		<div class="section">
			<div class="header">
				<h2>Bricks of Ancient China</h2>
				<span>{{receiveg.name}}</span>
			</div>
			<p class="price">&yen;{{receiveg.price}}</p>
			<span>{{receiveg.desc}}</span>
			<div class="sign">
				<a href="">情侣></a>
				<a href="">设计师款</a>
				<a href="">低温></a>
				<a href="">一人份></a>
			</div>
			<ul>
				<li>
					<img src="../assets/image/主页轮播图1的插图/download01.png" alt="">
					黑巧克力
				</li>
				<li>
					<img class="img2" src="../assets/image/主页轮播图1的插图/download03.png" alt="">
					红酒夹心
				</li>
			</ul>
			<a href="">
				已选择：113g(0.25磅)
				<img src="../assets/image/主页轮播图1的插图/download05.png" alt="">
			</a>
			<ol>
				<li>
					<i>
						<img class="img-one" src="../assets/image/主页轮播图1的插图/download09.png" alt="">
					</i>
					约6&times;6cm
				</li>
				<li>
					<i>
						<img class="img-two" src="../assets/image/主页轮播图1的插图/download09.png" alt="">
					</i>
					赠送一份餐具
				</li>
				<li>
					<i>
						<img class="img-three" src="../assets/image/主页轮播图1的插图/download09.png" alt="">
					</i>
					适合1人享用
				</li>
				<li>
					<i>
						<img class="img-four" src="../assets/image/主页轮播图1的插图/download09.png" alt="">
					</i>
					最早明天18:00配送
				</li>
			</ol>
			<p class="snow">
				<img src="../assets/image/主页轮播图1的插图/download04.png" alt="">
				保鲜条件 -18℃保藏12小时，-5℃食用为佳
			</p>
			<p class="sweet">
				<img src="../assets/image/主页轮播图1的插图/download02.png" alt="">
				<b>参考甜度</b>
				<img src="../assets/image/主页轮播图1的插图/download07.png" alt="">
				<img src="../assets/image/主页轮播图1的插图/download07.png" alt="">
				<img src="../assets/image/主页轮播图1的插图/download07.png" alt="">
				<img src="../assets/image/主页轮播图1的插图/download06.png" alt="">
				<img src="../assets/image/主页轮播图1的插图/download06.png" alt="">
			</p>
		</div>
		<div class="template">
			/设计师限量款/<br>
			/千年以前的平行世界/<br>
			/巧克力，未央宫。/<br>
			Tracing back to the Palace Era of China, Chocolate has just been found in Ancient Indian. At the same time two diffent places, together formed an allusion about the years.<br>
			*婴幼儿、老人、孕妇及酒精过敏者不宜食用。<br>
			<span>-18℃低温配送，解冻至-5℃，此状态食用更佳。</span>
		</div>
		<div class="imgs">
			<img src="../assets/image/主页轮播图1的插图/download05.jpg" alt="">
			<img src="../assets/image/主页轮播图1的插图/download06.jpg" alt="">
			<img src="../assets/image/主页轮播图1的插图/download07.jpg" alt="">
			<img src="../assets/image/主页轮播图1的插图/download08.jpg" alt="">
			<img src="../assets/image/主页轮播图1的插图/download09.jpg" alt="">
			<img src="../assets/image/主页轮播图1的插图/download10.jpg" alt="">
			<img src="../assets/image/主页轮播图1的插图/download11.jpg" alt="">
		</div>
		<div class="font">
			<p>退改说明：</p>
			<p>1. 北京、上海、杭州、广州地区距配送时间5小时及以上的订单可修改、取消、退订；距配送时间不足5小时，订单不再支持修改、取消、退订。（22点之后不接受次日14点之前配送订单修改、退订）</p>
			<p>2. 苏州、无锡、深圳、天津距配送时间不足8小时，订单不再支持修改、取消、退订。（22点之后不接受次日16点之前配送订单修改、退订）</p>
		</div>
		<div class="recommend">
			<p>·推荐商品·</p>
			<ul>
				<li>
					<a href="">
						<img src="../assets/image/主页轮播图1的插图/download12.jpg" alt="">
						<p></p>
						<p>榴莲飘飘<br>
						&yen;298.00/908g(2.0磅)</p>
						<button></button>
					</a>
				</li>
				<li>
					<a href="">
						<img src="../assets/image/主页轮播图1的插图/download12.jpg" alt="">
						<p>榴莲飘飘</p>
						<p>&yen;298.00/908g(2.0磅)</p>
						<button></button>
					</a>
				</li>
				<li>
					<a href="">
						<img src="../assets/image/主页轮播图1的插图/download12.jpg" alt="">
						<p>榴莲飘飘</p>
						<p>&yen;298.00/908g(2.0磅)</p>
						<button></button>
					</a>
				</li>
				<li>
					<a href="">
						<img src="../assets/image/主页轮播图1的插图/download12.jpg" alt="">
						<p>榴莲飘飘</p>
						<p>&yen;298.00/908g(2.0磅)</p>
						<button></button>
					</a>
				</li>
			</ul>
		</div>
		<i class="phone" @click="have">
			<img src="../assets/image/主页轮播图1的插图/download08.png" alt="">
		</i>
		<div class="footer">
			<span @click="shop" class="footer-one">立即购买</span><span @click=shopcar(1) class="footer-two">加入购物车</span>
		</div>
		<div class="footeronetip" :style="{display:footeronetip}">
			<p>&yen;{{receiveg.price}}
				<img @click="close" src="../assets/image/分类插图/download08.png" alt="">
			</p>
			<ul class="tips">
				<img src="../assets/image/分类插图/download.png" alt="">
				<li v-for="(o,i) in tipss" :key="i">
					<img :src="o.url" alt="">
					{{o.tipname}}
				</li>
			</ul>
			<p class="pp">商品规格</p>
			<ul class="standard">
				<li v-for="(n,i) in standards" :key="i">
					{{n.standname}}
					<br>
					{{n.standname2}}
				</li>
			</ul>
			<p class="pp">换购商品</p>
			<div class="change">
				<img src="../assets/image/分类插图/download04.jpg" alt="">
				<span>换购其它商品，享受更多优惠</span>
			</div>
		</div>
		<div class="kefu"  :style="{display:myStyle}">
			<div class="header">
				<img src="../assets/image/登录后消息中心插图/cake.png" alt="">
				<div>21cake在线客服
					<span @click="span">一</span>
				</div>
			</div>
			<div class="section">
				<p>系统 09:08:37</p>
				<div>
					您好，欢迎咨询21cake，人工客服很高<br>
					兴为您服务~<br>
					订单查询请点击：<a href="http://t.cn/AiRJHWRG">http://t.cn/AiRJHWRG</a>
				</div>
			</div>
			<div class="section">
				<p>系统 09:08:37</p>
				<div>
					您好，欢迎咨询21cake，人工客服很高<br>
					兴为您服务~<br>
					订单查询请点击：<a href="http://t.cn/AiRJHWRG">http://t.cn/AiRJHWRG</a>
				</div>
			</div>
			<div class="section">
				<p>系统 09:08:37</p>
				<div>
					您好，欢迎咨询21cake，人工客服很高<br>
					兴为您服务~<br>
					订单查询请点击：<a href="http://t.cn/AiRJHWRG">http://t.cn/AiRJHWRG</a>
				</div>
			</div>
			<div class="section">
				<p>系统 09:08:37</p>
				<div>
					您好，欢迎咨询21cake，人工客服很高<br>
					兴为您服务~<br>
					订单查询请点击：<a href="http://t.cn/AiRJHWRG">http://t.cn/AiRJHWRG</a>
				</div>
			</div>
			<div class="section">
				<p>系统 09:08:37</p>
				<div>
					您好，欢迎咨询21cake，人工客服很高<br>
					兴为您服务~<br>
					订单查询请点击：<a href="http://t.cn/AiRJHWRG">http://t.cn/AiRJHWRG</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
data(){
	return{
		myStyle:"none",
		receiveg:this.$route.query.g,
		footeronetip:"none",
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
				}
			]
	}
},
methods:{
	span(){
		this.myStyle="none";
	},
	have(){
		this.myStyle="block";
	},
	close(){
			this.footeronetip="none";
		},
	shop(){
		if(this.footeronetip=="block"){
			location.href="#/mime";
		}
		for(var i=0;i<localStorage.length;i++){
			for(var j=0;j<sessionStorage.length;j++){
				if(this.footeronetip=="block"){
					location.href="#/pay";
				}
				if(localStorage.key(i)==sessionStorage.key(j)&&localStorage.getItem(localStorage.key(i))==sessionStorage.getItem(sessionStorage.key(j))){
					this.footeronetip="block";
				}
			}
		return this.footeronetip="block";	
		}
	},
	shopcar(n){
		this.$store.commit('mutationsAddCount',n);
		for(var i=0;i<localStorage.length;i++){
			for(var j=0;j<sessionStorage.length;j++){
				if(localStorage.key(i)==sessionStorage.key(j)&&localStorage.getItem(localStorage.key(i))==sessionStorage.getItem(sessionStorage.key(j))){
					return this.footeronetip="block"
				}
			}
		// return this.footeronetip="block"	
		}
	}
}
}
</script>
<style scoped lang="less">
  .el-carousel__item:nth-child(4n) {
    background-image: url("../assets/image/主页轮播图1的插图/download01.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .el-carousel__item:nth-child(4n+1) {
    background-image: url("../assets/image/主页轮播图1的插图/download02.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .el-carousel__item:nth-child(4n+2) {
    background-image: url("../assets/image/主页轮播图1的插图/download03.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .el-carousel__item:nth-child(4n+3) {
    background-image: url("../assets/image/主页轮播图1的插图/download04.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .header{
  	h2{
  		margin-bottom: 0px;
  		font-weight: normal;
  	}
  	span{
  		font-size: 14px;
  	}
  }
  .section{
  	width: 90%;
  	margin: auto;
  	color: #442818;
  		.footeronetip{
			position: fixed;
			bottom: 50px;
			width: 91%;
			margin: auto;
			left: 0px;
			height: 300px;
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
			.tips{
				padding-left: 0px;
				&>img{
					width: 45%;
					height: 100px;
					float: left;
					margin-right: 10px;
				}
				li{
					width: 100%;
					font-size: 12px;
					display: block;
					height: 15px;
					line-height: 15px;
					margin-top: 10px;
					img{
						width: 15px;
						height: 15px;
						float: left;
						margin-right: 10px;
					}
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
			}
			.change{
				img{
					float: left;
					width: 20px;
					height: 20px;
				}
				span{
					font-size: 12px;
					margin-left: 20px;
				}
			}
		}
  	.price{
		font-size: 22px;
		color: #c69c6d;
		margin: 5px 0px;
  	}
  	.sign{
  		margin-top: 8px;
  		a{
  			text-decoration: none;
  			color: #dac6b1;
  			font-size: 12px;
  			border: 1px solid #dac6b1;
  			border-radius: 10px;
  			padding: 2px 10px;
  			margin-right: 5px;
  		}
  	}
  	ul{
  		padding-left: 0px;
  		li{
  			display: inline-block;
  			height: 32px;
  			line-height: 32px;
  			font-size: 12px;
  			color: #442818;
  			img{
  				float: left;
  				width: 32px;
  				height: 32px;
  			}
  		}
  	}
  	&>a{
  		display: inline-block;
  		width: 100%;
  		text-decoration: none;
  		color: #442818;
  		background-color: #f4f0eb;
  		padding: 10px 0px;
  		font-size: 14px;
  		img{
  			float: right;
  			width: 15px;
  			height: 15px;
  			margin-right: 15px;
  			margin-top: 5px;
  		}
  	}
  	ol{
  		padding-left: 0px;
  		li{
  			display: inline-block;
  			font-size: 12px;
  			color: #442818;
  			height: 24px;
  			line-height: 24px;
  			margin-bottom: 10px;
  			width: 49%;
  			img{
  				width: 50px;
  				height: 50px;
  				position: absolute;
  			}
  			i{
  				display: inline-block;
  				position: relative;
  				float: left;
  				width: 20px;
  				height: 20px;
  				overflow: hidden;
  				margin-right: 10px;
  			}
  			.img-two{
				right: 0px;
				top: 0px;
  			}
  			.img-three{
  				left: 0px;
  				bottom: 0px;
  			}
  			.img-four{
  				right: 0px;
  				bottom: 0px;
  			}
  		}
  	}
  	.snow,.sweet{
  		padding: 0px;
  		height: 16px;
  		line-height: 16px;
  		color: #442818;
  		font-size: 12px;
  		img{
  			width: 16px;
  			height: 16px;
  			float: left;
  			margin-right: 10px;
  		}
  		b{
  			float: left;
  			font-weight: normal;
  			margin-right: 10px;
  		}
  	}
  }
  .template{
  	font-size: 12px;
  	padding: 15px;
  	color: #442818;
  	span{
  		color: #ff0000;
  	}
  }
  .imgs{
  	img{
  		width: 100%;
  		display: block;
  	}
  }
  .font{
  	color: #666666;
  	font-size: 13px;
  	width: 95%;
  	margin-bottom: 50px;
  	p{
  		margin: 0px;
  	}
  }
  .recommend{
  	p{
  		text-align: center;
  		color: #442818;
  		font-size: 12px;
  	}
  	ul{
  		padding-left: 0px;
  			li{
  				display: inline-block;
  				width: 49%;
  				height: 180px;
  				line-height: 20px;

  				img{
  					width: 110px;
  					height: 120px;
  					margin: 0px 50px;
  				}
  				p{
  					margin: 0px;
  					padding-left: 20px;
  					text-align: left;
  				}
  				button{
  					border: none;
  					width: 20px;
  					height: 20px;
  					margin-left: 85%;
  					background-color: white;
  					background-image: url(../assets/image/主页轮播图1的插图/download10.png);
  					background-size: 100%;
  				}
  			}
  	}
  }
  .phone{
  	position: fixed;
  	left: 20px;
  	bottom: 80px;
  	img{
  		width: 50px;
  		height: 50px;
  	}
  }
  .footer{
  	width: 100%;
  	position: fixed;
  	bottom: 0px;
  	left: 0px;
	span{
		display: inline-block;
		width: 50%;
		height: 50px;
		text-decoration: none;
		text-align: center;
		line-height: 50px;
		color: #442818; 
		background-color: white;
	}
	.footer-two{
		background-color: #442818;
		color: white;
	}
  }
.kefu{
	background-color: white;
	position: fixed;
	top: 25px;
	z-index: 100;
	width: 100%;
	height: 100vh;
	overflow: auto;
	.header{
		height: 40px;
		padding: 11px 20px;
		background-color: #d5bfa7;
		img{
			float: left;
			width: 40px;
			height: 40px;
			border-radius: 20px;
		}
		div{
			color: white;
			margin: 10px 20px 0px 50px;
			span{
				float: right;
			}
		}
	}
	.section{
		p{
			color: #a1a7aa;
			font-size: 12px;
		}
		div{
			font-size: 14px;
			a{
				text-decoration: none;
				color: #307ae8;
			}
		}
}
}

</style>