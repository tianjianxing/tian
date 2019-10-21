<template>
	<div class="shopping">
		<div>
			<img src="../assets/image/主页插图/cart-empty.png" alt="">
			<div class="font">
				<span>您的购物车里还没有商品</span>
				<br>
				<router-link to="/cake">
					去购物>>
				</router-link>
			</div>	
		</div>
	</div>
</template>
<script>
export default {

}
</script>
<style scoped lang="less">
img{
	display: block;
	margin: auto;
	margin-top: 100px;
	width: 150px;
}
.shopping{
	&>div{
		height: 100vh;
	}
	.font{
		text-align: center;
		span{
			font-size: 14px;
			color: #d5bfa7;
		}
		a{
			font-size: 12px;
			text-decoration: none;
			color: black;
		}
	}
}
</style>