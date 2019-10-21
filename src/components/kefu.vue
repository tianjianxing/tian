<template>
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
</template>
<script>
export default {
data(){
	return{
		myStyle:""
	}
},
methods:{
	span(){
		this.myStyle="none";
	}
}
}
</script>
<style scoped lang="less">
.kefu{
	margin-top: -350px;
	width: 100%;
}
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
</style>