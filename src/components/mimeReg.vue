<template>
	<div class="mimeReg">
		<div class="section">
			<p>我的廿一客</p>
			<div class="news">
				<img src="../assets/image/主页个人插图/ico_member.png" alt="">
				<p>21cake</p>
				<div>
					<img src="../assets/image/主页个人插图/Phone.png" alt="">17862664306
				</div>
				<button @click="ins">修改个人信息></button>
			</div>
			<div class="price">
				<p>
					&yen;0.0
					<br>
					果实币余额
				</p>
				<p>
					0张
					<br>
					优惠券
				</p>
			</div>
			<div class="indent">
				<div>
					<img src="../assets/image/主页个人插图/member0.png" alt="">
					待付订单
					<img src="../assets/image/主页个人插图/go_next.png" alt="">
				</div>
				<div>
					<img src="../assets/image/主页个人插图/member1.png" alt="">
					全部订单
					<img src="../assets/image/主页个人插图/go_next.png" alt="">
				</div>
				<div>
					<img src="../assets/image/主页个人插图/member2.png" alt="">
					地址管理
					<img src="../assets/image/主页个人插图/go_next.png" alt="">
				</div>
			</div>
		</div>
		<input @click="out" type="button" value="退出登录">
	</div>
</template>
<script>
export default {
methods:{
	ins(){
		location.href="#/changenews";
	},
	out(){
		sessionStorage.clear();
		location.href="#/home";
	}
}
}
</script>
<style scoped lang="less">
.mimeReg{
	margin-top: 50px;
	.section{
		color: #8e6a55;
		&>p{
			text-align: center;
		}
		.news{
			margin-top: 40px;
			&>img{
				width: 70px;
				height: 70px;
				display: block;
				margin: auto;
			}
			&>p{
				text-align: center;
				margin-top: 5px;
				font-size: 12px;
			}
			&>div{
				font-size: 12px;
				height: 20px;
				line-height: 20px;
				img{
					float: left;
					margin-left: 38%;
					margin-right: 10px;
				}
			}
			&>button{
				display: block;
				margin: auto;
				margin-top: 10px;
				border: none;
				background-color: #684029;
				color: white;
				width: 126px;
				height: 30px;
				border-radius: 5px;
			}
		}
		.price{
			display: flex;
			margin-top: 10px;
			justify-content: space-around;
			p{
				display: inline-block;
				text-align: center;
				font-size: 14px;
			}
		}
		.indent{
			div{
				height: 50px;
				width: 100%;
				line-height: 50px;
				padding: 0px 20px;
				width: 90%;
				img:first-child{
					width: 25px;
					height: 25px;
					float: left;
					margin-top: 12px;
					margin-right: 15px;
				}
				img:last-child{
					float: right;
					width: 15px;
					height: 15px;
					margin-top: 17px;
				}
			}
		}
	}
	input{
		display: block;
		margin: auto;
		border: none;
		margin-top: 70px;
		margin-bottom: 20px;
		width: 100px;
		height: 30px;
		background-color: #684029;
		color: white;
	}
}
</style>