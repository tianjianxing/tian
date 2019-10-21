<template>
	<div class="register">
		<p>用户注册</p>
		<form action="">
			<input v-model="phone" type="text" placeholder="输入手机号">
			<input v-model="pwd" type="text" placeholder="密码：8-20字符，同时需要包含英文和数字">
			<input v-model="pwds" type="text" placeholder="确认密码">
			<div class="section">
				<input type="text" placeholder="短信验证码"><input type="button" value="发送验证码">
			</div>
			<input type="text" placeholder="请选择生日">
			<button type="button" @click="reg">注册</button>
			<div class="footer">
				<input type="checkbox" checked>
				已阅读并同意
				<a href="">21客会员协议</a>
				和
				<a href="">保护隐私政策</a>
			</div>
		</form>
	</div>
</template>
<script>
export default {
	data(){
		return{
			phone:"",
			pwd:"",
			pwds:""
		}
	},
	methods:{
		reg(){
			var ss = /^1[3-9]\d{9}$/g;
			if(this.phone!=""&&this.pwd!=""&&this.pwd==this.pwds&&this.phone.match(ss)){
				for(var i=0;i<localStorage.length;i++){
					if(this.phone==localStorage.key(i)){
						return alert("已经被注册了")
					}
				}
				localStorage.setItem(this.phone,this.pwd)
				location.href="#/notice"
			}
			else{
				alert("请确认手机号规则且至少填写手机号和密码及确认密码")
			}
		}
	}
}
</script>
<style scoped lang="less">
.register{
	margin-top: 48px;
	height: 100vh;
	p{
		text-align: center;
		height: 50px;
		color: #8e6a55;
		line-height: 50px;
	}
	form{
		padding: 0px 20px;
		&>input{
			border: none;
			height: 40px;
			width: 100%; 
			border-bottom: 1px solid #d5d5d5;
			line-height: 40px;
		}
		.section{
			height: 50px;
			border-bottom: 1px solid #d5d5d5;
			input{
				width: 49%;
				height: 44px;
				border: none;
				margin-top: 3px;
			}
			[type="button"]{
				background-color: #442818;
				color: white;
			}
		}
		button{
				border: none;
				width: 100%;
				height: 42px;
				text-align: center;
				line-height: 42px;
				background-color: #442818;
				color: white; 
				margin-top: 50px;
			}
		.footer{
			margin-top: 20px;
			color: #744f3a;
			font-size: 12px;
			a{
				text-decoration: none;
			}
		}

	}
}

</style>