<template>
	<div class="announcement">
		<h1>
			<img src="../assets/image/页尾全站公告插图/title-2.png" alt="">
		</h1>
		<ul>
			<li>
				<div>
					<h3>
						<img src="../assets/image/页尾全站公告插图/name.png" alt="">
						亲爱的cake用户：
					</h3>
					<p>
						即日起，实际支付的金额每满100元，则将自动获得一颗果实，以此类推。<br>
						实际金额指微信、支付宝、网银京东支付、货到（现金/刷卡）支付及果实币支付。<br>
						代金卡、尊享卡、储值卡、优惠券抵扣金额，将不会累计果实。<br>
						优惠券、尊享卡与果实币不能同时使用。
					</p>
					<span>
						廿一客（上海）电子商务有限公司<br>
						<b>2017-10-11</b>
					</span>
					<img src="../assets/image/页尾全站公告插图/bottton-bj.png" alt="">
				</div>
			</li>
		</ul>
		<ul>
			<li class="li-two">
				<div class="div-two">
					<h3>
						<img src="../assets/image/页尾全站公告插图/name.png" alt="">
						亲爱的cake用户：
					</h3>
					<p>
						为了保证蛋糕的新鲜度及良好的口感，我们根据订单配送日期当日甄选食材并新鲜制作<br>
						为了避免食材浪费，即日起我们调整了关于订单取消/退订的相关规则，新规则如下：<br>
						1.北京、上海、杭州、广州地区距配送时间5小时及以上的订单可以修改、取消、退订；距配送时间不足5小时，订单不再支持修改、取消、退订。（22点之后不接受次日14点之前的配送订单修改、退订）<br>
						2.苏州、无锡、深圳、天津距配送时间不足8小时，订单不再支持修改、取消、退订（22点之后不接受次日16点之前的配送订单修改、退订）
					</p>
					<span>
						廿一客（上海）电子商务有限公司<br>
						<b>2018-12-25</b>
					</span>
					<img src="../assets/image/页尾全站公告插图/bottton-bj.png" alt="">
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default {

}
</script>
<style scoped lang="less">
h1{
	text-align: center;
	img{
		width: 72px;
		height: 57px;
	}
}
ul{
	padding-left: 0px;
	li{
		height: 280px;			
		color: #442818;
		width: 90%;
		list-style-type: none;
		box-shadow: 0px 1px 2px 2px #e1dedb;
		margin: auto;
		padding: 10px;
		position: relative;
		margin-bottom: 50px;
		h3{
			height: 30px;
			line-height: 30px;
			font-weight: normal;
			font-size: 14px;
			img{
				float: left;
				width: 30px;
				height: 30px;
				margin-right: 10px;
			}
		}
		p{
			font-size: 12px;
		}
		div{
			height: 220px;
			&>img{
				width: 80px;
				position: absolute;
				right: 20px;
				bottom: 90px;
			}
		}
	}
	span{
		margin-top: 20px;
		font-size: 12px;
		float: right;
		line-height: 18px;
		b{
			float: right;
			font-weight: normal;
		}
	}
	.div-two{
		height: 270px;
	}
	.li-two{
		height: 340px;
	}

}
</style>