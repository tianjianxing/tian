<template>
	<div class="order">
		<div class="header">
			<img @click="pays" src="../assets/image/下单页面插图/download01.png" alt="">
			<span>订单确认</span>
		</div>
		<img class="img1 img2" src="../assets/image/下单页面插图/download03.png" alt="">
		<img class="img2" src="../assets/image/下单页面插图/download03.png" alt="">
		<p class="address">
			<img src="../assets/image/下单页面插图/download02.png" alt="">
			新增收货地址
		</p>
		<img class="img1" src="../assets/image/下单页面插图/download03.png" alt="">
		<img src="../assets/image/下单页面插图/download03.png" alt="">
		<div class="good">
			
		</div>
		<ul>
			<li class="li1">21cake配送
				<img src="../assets/image/下单页面插图/download04.png" alt="">
			</li>
			<li class="li1">站点自提
				<img src="../assets/image/下单页面插图/download05.png" alt="">
			</li>
			<li class="li2">
				<img src="../assets/image/下单页面插图/download06.png" alt="">
				配送时间
				<span>请选择></span>
			</li>
			<li class="li3">
				优惠券/尊享卡
				<span>无可用></span>
			</li>
			<li class="li3">
				代金卡
				<b>（卡券不可共用，折扣金额不开具发票）</b>
				<span>未使用></span>
			</li>
		</ul>
		<p>支付方式</p>
		<ul>
			<li class="li4">余额支付（&yen;0）
				<img src="../assets/image/下单页面插图/download08.png" alt="">
			</li>
			<li class="li5">
				<img src="../assets/image/下单页面插图/download09.png" alt="">
				手机支付宝支付
				<img src="../assets/image/下单页面插图/download04.png" alt="">
			</li>
			<li class="li5">
				<img src="../assets/image/下单页面插图/download10.png" alt="">
				微信支付
				<img src="../assets/image/下单页面插图/download05.png" alt="">
			</li>
			<li class="li5">
				<img src="../assets/image/下单页面插图/download11.png" alt="">
				京东支付
				<img src="../assets/image/下单页面插图/download05.png" alt="">
			</li>
			<li class="li5">
				<img src="../assets/image/下单页面插图/download12.png" alt="">
				银行卡支付
				<img src="../assets/image/下单页面插图/download05.png" alt="">
			</li>
			<li class="li6">
				发票
				<span>不需要></span>
			</li>
		</ul>
		<p>订单留言</p>
		<textarea cols="30" rows="10" placeholder="请留下您对订单或商品的特殊要求，200字以内"></textarea>
		<p>金额明细</p>
		<ul>
			<li class="li7">商品总额
				<span>&yen;</span>
			</li>
			<li class="li7 li8">配送服务费
				<span>&yen;0.00</span>
			</li>
		</ul>
		<div class="footer">
			共&yen;
			<span></span>
			<button>下单</button>
		</div>
	</div>
</template>
<script>
export default {
methods:{
	pays(){
		location.href="#/pay";
	}
}
}
</script>
<style scoped lang="less">
.order{
	color: #4f3425;
	&>p{
		color: #969696;
		font-size: 12px;
		padding-left: 20px;
	}
	.header{
	height: 30px;
	position: fixed;
	top: 0px;
	background-color: white;
	width: 100%;
	border-bottom: 2px solid #e5e5e5;
	img{
		float: left;
		width: 15px;
		height: 20px;
		margin-top: 5px;
	}
	span{
		display: block;
		line-height: 30px;
		width: 100px;
		text-align: center;
		margin: auto;
	}
}
	&>.img1{
		margin-left: 50px;
	}
	&>.img2{
		margin-top: 50px;
	}
	.address{
		padding-left: 0px;
		color: #4f3425;
		font-size: 16px;
		img{
			width: 15px;
			height: 15px;
			margin-left: 150px;
		}
	}
	.good{
		height: 150px;
	}
	ul{
		padding-left: 0px;
		li{
			height: 50px;
			font-size: 14px;
			padding: 0px 20px;
		}
		.li1{
			img{
				float: right;
				width: 20px;
				height: 20px;
			}
		}
		.li2{
			img{
				float: left;
				width: 15px;
				height: 15px;
				margin-top: 2px;
				margin-right: 3px;
			}
			span{
				float: right;
			}
		}
		.li3{
			span{
				float: right;
			}
			b{
				font-weight: normal;
				font-size: 12px;
				color: #969696;
			}
		}
		.li4{
			img{
				float: right;
				width: 40px;
				height: 25px;
			}
		}
		.li5{
			img:first-child{
				float: left;
				width: 30px;
				height: 30px;
				margin-right: 10px;
			}
			img:last-child{
				float: right;
				width: 20px;
				height: 20px;
			}
		}
		.li6{
			span{
				float: right;
			}
		}
		.li7{
			height: 30px;
			line-height: 30px;
			span{
				float: right;
			}
		}
		.li8{
			margin-bottom: 120px;
		}
	}
	textarea{
		width: 90%;
		height: 100px;
		overflow-wrap: auto;
		margin: 0px 20px;
		border: none;
	}
	.footer{
		width: 100%;
		position: fixed;
		bottom: 0px;
		font-size: 12px;
		padding-left: 64%;
		height: 44px;
		background-color: white;
		border-top: 2px solid #e5e5e5;
		button{
			border: none;
			width: 110px;
			height: 44px;
			background-color: #442818;
			color: white;
			margin-left: 20px;
		}
	}
}
</style>