<template>
	<div class="fondpwd">
		<p>找回密码</p>
		<input type="text" placeholder="请输入手机号码">
		<button>下一步</button>
	</div>
</template>
<script>
export default {

}
</script>
<style scoped lang="less">
.fondpwd{
	height: 100vh;
	margin-top: 48px;
	padding: 20px;
	p{
		height: 50px;
		text-align: center;
		color: #8e6a55;
	}
	input{
		width: 100%;
		height: 40px;
		line-height: 40px;
		font-size: 12px;
		border: none;
	}
	button{
		width: 100%;
		border: none;
		color: white;
		text-align: center;
		height: 42px;
		line-height: 42px;
		margin-top: 50px;
		background-color: #684029;
	}
}
</style>