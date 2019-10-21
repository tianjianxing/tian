<template>
	<div class="company">
		<form action="">
			<div class="phone">
				<input type="text" placeholder="请输入手机号码">
			</div>
			<div class="rules">
				<input type="text" placeholder="请输入验证码">
				<button>获取验证码</button>
			</div>
			<button>登录</button>
		</form>
		
	</div>
</template>
<script>
export default {

}
</script>
<style scoped lang="less">
.company{
	height: 300px;
	form{
		height: 200px;
		width: 85%;
		margin: auto;
		margin-top: 120px;
		div{
			height: 50px;
			border-bottom: 1px solid #eaeaea;
			input{
				color: #e8cda7;
				width: 200px;
				height: 24px;
				line-height: 24px;
				font-size: 14px;
				margin-top: 10px;
				border: none;
			}
			button{
				float: right;
				border: none;
				background-color: white;
				width: 80px;
				height: 30px;
				color: #9f9f9f;
				border: 1px solid #9f9f9f;
				margin-right: 30px;
				font-size: 12px;
				margin-top: 10px;
			}
		}
		&>button{
			border: none;
			background-color: #442818;
			color: #999999;
			text-align: center;
			height: 40px;
			width: 100%;
			line-height: 40px;
			margin-top: 50px;
			font-size: 12px;
		}
	}
}
</style>