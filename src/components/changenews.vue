<template>
	<div class="changenews">
		<div>
			<span>姓名</span>
			<input type="text" placeholder="最多可输入20个字符">
		</div>
		<div class="div">
			<input type="radio" name="sex">男
			<input type="radio" name="sex">女
		</div>
		<div>
			<span>生日</span>
			<input type="text" placeholder="填写后不可修改">
			<span class="span">></span>
		</div>
		<div>
			<span>纪念日</span>
			<input type="text" placeholder="去编辑">
			<span class="span">></span>
		</div>
		<div>
			<span>邮箱</span>
			<input type="text" placeholder="输入邮箱地址">
		</div>
		<button>保存</button>
	</div>
</template>
<script>
export default {

}
</script>
<style scoped lang="less">
.changenews{
	margin-top: 50px;
	div{
		height: 50px;
		color: #442818;
		font-size: 14px;
		span{
			display: inline-block;
			width: 65px;
		}
		[type="text"]{
			height: 30px;
			border: none;
		}
		.span{
			width: 10px;
			margin-left: 170px;
		}
	}
	.div{
		padding-left: 65px;
	}
	button{
		border: none;
		width: 100%;
		height: 46px;
		line-height: 46px;
		text-align: center;
		color: white;
		background-color: #684029;
		margin: 30px 0px 100px;
	}
}
</style>