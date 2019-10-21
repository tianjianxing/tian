<template>
	<div class="birthday">
		<div class="header">
			<img src="../assets/image/主页插图/download02.jpg" alt="">
			<div class="font">
				<h3>Best wishes for you</h3>
				<p>
					许愿树页面活动规则：<br>
					1、注册会员输入【出生日期+城市+喜欢的蛋糕】，参与许愿。同一用户12月内不重复参与获赠。<br>
					许愿签在官网展示，每月点赞最多的21名会员，赠1磅蛋糕升磅券。<br>
					2、分享自己的愿望树页面，并邀请朋友点赞，每邀请到5位朋友点赞，获得一次拆福袋机会，中奖率100%（分享次数不限）。
				</p>
				<a href="">
					<img src="../assets/image/主页轮播图2的插图/download01.png" alt="">
				</a>
			</div>
			<div class="luck">
				<img src="../assets/image/主页轮播图2的插图/download02.png" alt="">
				点击查看
				<span>9月</span>
				中奖名单
			</div>
			<div class="wish">
				<a href="">
					<span>登录</span>
					显示我的心愿
				</a>
			</div>
		</div>
		<ul>
			<li v-for="(g,i) in list" :key="i">
				<div class="photo">
					<img :src="g.url01" alt="">
					<span>{{g.phone}}</span>
				</div>
				<p>{{g.words}}</p>
				<div class="num">
					<button>
						<img :src="g.url02" alt="">
						<span>{{g.num}}</span>
					</button>
					<a href="">查看</a>
				</div>
			</li>
		</ul>
		<a href="" class="pen">
			<img src="../assets/image/主页轮播图2的插图/download03.png" alt="">
		</a>
	</div>
</template>
<script>
export default {
	data(){
		return{
			list:[
				{
					url01:require("../assets/image/主页轮播图2的插图/download01.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"139****9187",
					words:"愿我爱的人和爱我的人每年每月每...",
					num:"60"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download02.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"177****3809",
					words:"祝我生日快乐，宝贝健康成长",
					num:"37"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download01.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"139****9187",
					words:"愿我爱的人和爱我的人每年每月每...",
					num:"60"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download02.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"177****3809",
					words:"祝我生日快乐，宝贝健康成长",
					num:"37"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download01.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"139****9187",
					words:"愿我爱的人和爱我的人每年每月每...",
					num:"60"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download02.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"177****3809",
					words:"祝我生日快乐，宝贝健康成长",
					num:"37"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download01.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"139****9187",
					words:"愿我爱的人和爱我的人每年每月每...",
					num:"60"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download02.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"177****3809",
					words:"祝我生日快乐，宝贝健康成长",
					num:"37"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download01.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"139****9187",
					words:"愿我爱的人和爱我的人每年每月每...",
					num:"60"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download02.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"177****3809",
					words:"祝我生日快乐，宝贝健康成长",
					num:"37"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download01.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"139****9187",
					words:"愿我爱的人和爱我的人每年每月每...",
					num:"60"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download02.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"177****3809",
					words:"祝我生日快乐，宝贝健康成长",
					num:"37"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download01.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"139****9187",
					words:"愿我爱的人和爱我的人每年每月每...",
					num:"60"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download02.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"177****3809",
					words:"祝我生日快乐，宝贝健康成长",
					num:"37"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download01.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"139****9187",
					words:"愿我爱的人和爱我的人每年每月每...",
					num:"60"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download02.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"177****3809",
					words:"祝我生日快乐，宝贝健康成长",
					num:"37"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download01.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"139****9187",
					words:"愿我爱的人和爱我的人每年每月每...",
					num:"60"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download02.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"177****3809",
					words:"祝我生日快乐，宝贝健康成长",
					num:"37"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download01.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"139****9187",
					words:"愿我爱的人和爱我的人每年每月每...",
					num:"60"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download02.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"177****3809",
					words:"祝我生日快乐，宝贝健康成长",
					num:"37"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download01.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"139****9187",
					words:"愿我爱的人和爱我的人每年每月每...",
					num:"60"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download02.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"177****3809",
					words:"祝我生日快乐，宝贝健康成长",
					num:"37"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download01.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"139****9187",
					words:"愿我爱的人和爱我的人每年每月每...",
					num:"60"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download02.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"177****3809",
					words:"祝我生日快乐，宝贝健康成长",
					num:"37"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download01.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"139****9187",
					words:"愿我爱的人和爱我的人每年每月每...",
					num:"60"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download02.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"177****3809",
					words:"祝我生日快乐，宝贝健康成长",
					num:"37"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download01.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"139****9187",
					words:"愿我爱的人和爱我的人每年每月每...",
					num:"60"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download02.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"177****3809",
					words:"祝我生日快乐，宝贝健康成长",
					num:"37"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download01.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"139****9187",
					words:"愿我爱的人和爱我的人每年每月每...",
					num:"60"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download02.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"177****3809",
					words:"祝我生日快乐，宝贝健康成长",
					num:"37"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download01.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"139****9187",
					words:"愿我爱的人和爱我的人每年每月每...",
					num:"60"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download02.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"177****3809",
					words:"祝我生日快乐，宝贝健康成长",
					num:"37"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download01.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"139****9187",
					words:"愿我爱的人和爱我的人每年每月每...",
					num:"60"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download02.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"177****3809",
					words:"祝我生日快乐，宝贝健康成长",
					num:"37"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download01.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"139****9187",
					words:"愿我爱的人和爱我的人每年每月每...",
					num:"60"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download02.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"177****3809",
					words:"祝我生日快乐，宝贝健康成长",
					num:"37"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download01.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"139****9187",
					words:"愿我爱的人和爱我的人每年每月每...",
					num:"60"
				},
				{
					url01:require("../assets/image/主页轮播图2的插图/download02.jpg"),
					url02:require("../assets/image/主页轮播图2的插图/download04.png"),
					phone:"177****3809",
					words:"祝我生日快乐，宝贝健康成长",
					num:"37"
				}
			]
		}
	}
}
</script>
<style scoped lang="less">
.header{
	color: #6a503c;
	&>img{
		width: 100%;
	}
	.font{
		p{
			font-size: 13px;
			line-height: 20px;
		}
		a{
			display: block;
			height: 42px;
			img{
				width: 18px;
				height: 18px;
				margin-left: 50%;
			}
		}
	}
	.luck{
		height: 40px;
		line-height: 40px;
		font-size: 14px;
		img{
			float: left;
			width: 15px;
			height: 19px;
			margin-left: 30%;
			margin-top: 13px;
			margin-right: 5px;
		}
		span{
			color: #d9261f;
			font-size: 16px;
			font-weight: bold;
		}
	}
	.wish{
		height: 106px;
		text-align: center;
		color: white;
		background-color: #cbdc99;
		a{
			display: block;
			width: 100%;
			height: 100%;
			color: white;
			text-decoration: none;
			line-height: 106px;
			span{
				text-decoration: underline;
			}
		}
		
	}
}
ul{
	padding-left: 0px;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	li{
		display: inline-block;
		width: 43%;
		height: 155px;
		color: #818181;
		background-color: #e4e1da;
		margin-bottom: 10px;
		padding: 10px;
		.photo{
			img{
				width: 30px;
				height: 30px;
				border-radius: 15px;
			}
		}
		p{
			height: 42px;
			text-align: center;
		}
		.num{
			margin-top: 40px;
			button{
				border: none;
				background-color: transparent;
				display: inline-block;
				height: 20px;
				line-height: 20px;
				img{
					float: left;
				}
				span{
					margin-left: 10px;
					color: #818181;
				}	
			}
			a{
				text-decoration: none;
				color: #818181;
				font-size: 14px;
				margin-left: 48%;
			}
		}
		
	}
}
.pen{
	display: inline-block;
	width: 50px;
	height: 50px;
	position: fixed;
	right: 15px;
	bottom: 50px;
	background-color: #666666;
	border-radius: 25px;
	img{
		width: 60%;
		margin-top: 10px;
		margin-left: 10px;
	}
}
</style>