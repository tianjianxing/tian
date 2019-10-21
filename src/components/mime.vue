<template>
	<div>
	<div class="mime" :style="{display:mimes}">
		<ul>
			<li @click="user" :style="{borderBottom:myStyle3}">账号密码登录</li><li @click="phone" :style="{borderBottom:myStyle1}">手机验证码登录</li>
		</ul>
		<div class="accountNum" :style="{display:myStyle}">
			<input v-model="users" type="text" placeholder="用户名/邮箱地址">
			<br>
			<input v-model="pwds" type="text" placeholder="填写密码">
			<div class="footer">
				<span>{{descs}}</span>
				<input @click="registers" type="button" value="登录">
			</div>
		</div>
		<div class="phoneNum" :style="{display:myStyle2}">
			<div class="header">
				<input v-model="message" class="phoneNum-oneinput" type="text" placeholder="手机号">
				<br>
				<input v-model="messages" type="text" placeholder="输入手机验证码"><input type="button" value="发送验证码">
			</div>
			<div class="footer">
				<span>{{desc}}</span>
				<input @click="register" type="button" value="登录">
			</div>
		</div>
		<div class="help">
			<router-link to="/register">去注册</router-link>
			<router-link to="/fondpwd">忘记密码</router-link>
		</div>
	</div>
	<div class="mimeReg" :style="{display:mimeReg}">
		<nav>
	      <router-link to="/notice">
	        <img src="../assets/image/登录后消息中心插图/message_notice.png" alt=""><br>
	        <span>通知</span>
	      </router-link>
	      <router-link to="/logistics">
	        <img src="../assets/image/登录后消息中心插图/message_logistics.png" alt=""><br>
	        <span>物流</span>
	      </router-link>
	      <router-link to="/kefu">
	        <img src="../assets/image/登录后消息中心插图/message_kefu.png" alt=""><br>
	        <span>客服</span>
	      </router-link>
	      <router-view />
    	</nav>
	</div>
	</div>
</template>
<script>
export default {
name:"mime",
data(){
	return{
		myStyle:"none",
		myStyle1:"1px solid #442818",
		myStyle2:"block",
		myStyle3:"1px solid #d5d5d5",
		myStyle4:"0px",
		desc:"",
		descs:"",
		message:"",
		messages:"",
		users:"",
		pwds:"",
		mimes:"block",
		mimeReg:"none"
	}
},
mounted(){
	for(var m=0;m<localStorage.length;m++){
		for(var n=0;n<sessionStorage.length;n++){
			if(localStorage.key(m)==sessionStorage.key(n)&&localStorage.getItem(localStorage.key(m))==sessionStorage.getItem(sessionStorage.key(n))){
					this.descs="";
					this.mimes="none";
					this.mimeReg="block";
			}
		}
	}
}
,
methods:{
	user(){
		this.myStyle="block";
		this.myStyle1="1px solid #d5d5d5";
		this.myStyle2="none";
		this.myStyle3="1px solid #442818";
	},
	phone(){
		this.myStyle="none";
		this.myStyle3="1px solid #d5d5d5";
		this.myStyle2="block";
		this.myStyle1="1px solid #442818";
	},
	register(){
		if(this.message!="" && this.messages==""){
			this.desc="手机验证码不能为空";
		}else if(this.message=="" && this.messages!=""){
			this.desc="手机号码不能为空";
		}else if(this.message=="" && this.messages==""){
			this.desc="手机号码不能为空";
		}else{
			this.desc="";
			this.mimes="none";
			this.mimeReg="block";
		}
	},
	registers(){
		if(this.users=="" && this.pwds!=""){
			this.descs="用户名不能为空";
		}else if(this.users=="" && this.pwds==""){
			this.descs="用户名不能为空";
		}else if(this.users!="" && this.pwds==""){
			this.descs="密码不能为空";
		}else{
			for(var i=0;i<localStorage.length;i++){
				if(this.users==localStorage.key(i)&&this.pwds==localStorage.getItem(localStorage.key(i))){
					this.descs="";
					this.mimes="none";
					this.mimeReg="block";
					return sessionStorage.setItem(this.users,this.pwds)
				}
					
			}
			alert("密码错误")
		}	
	}
}
}
</script>
<style scoped lang="less">
ul{
	padding-left: 0px;
	li{
		display: inline-block;
		// border-bottom: 1px solid #d5d5d5;
		// border-bottom: 1px solid #442818;
		color: #442818;
		height: 50px;
		width: 49%;
		padding: 0px 0px;
		text-align: center;
		font-size: 14px;
		line-height: 50px;
	}
}
.mime{
	height: 100vh;
	padding: 0px 20px;
	margin-top: 70px;
	div{
		input{
			height: 40px;
			width: 100%;
			line-height: 40px;
			color: #d5bfa7;
			font-size: 14px;
			border: none;
			margin-bottom: 3px;
			border-bottom: 1px solid #d5d5d5;
		}
	}
	.phoneNum{
		margin-bottom: 5px;
		margin-top: 30px;
		input{
			width: 50%;
			border: none;
		}
		.phoneNum-oneinput{
			width: 100%;
			border-bottom: 1px solid #d5d5d5;
		}
		[type="button"]{
			border: none;
			background-color: #442818;
			color: white;
			padding: 0px 50px;
		}
		.header{
			border-bottom: 1px solid #d5d5d5;
		}
		.footer{
			height: 100px;
			span{
				display: inline-block;
				font-size: 12px;
				width: 100%;
				height: 20px;
				color: #442818;
			}
			&>input{
					color: white;
					text-align: center;
					height: 40px;
					width: 100%;
					border: none;
					margin-top: 20px;
					line-height: 40px;
					background-color: #442818;
				}
}
	}
	.help{
		height: 18px;
		margin-top: 25px;
		a{
			float: right;
			margin-left: 18px;
			font-size: 12px;
			text-decoration: none;
			color: #442818;
		}
	}
}
.footer{
	height: 100px;
	span{
		display: inline-block;
		font-size: 12px;
		width: 100%;
		height: 20px;
		color: #442818;
	}
	input{
			color: white;
			text-align: center;
			height: 40px;
			width: 100%;
			border: none;
			margin-top: 20px;
			line-height: 40px;
			background-color: #442818;
		}
}
.mimeReg{
	margin-top: 50px;
	height: 100vh;
	nav{
	  width: 100%;
	  height: 100vh;
	  background-color: #fff;
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: space-around;
	  padding: 0px 0px;
	  a{
	    padding-top: 10px;
	    display: inline-block;
	    text-decoration: none;
	    color: #442818;
	    width: 30%;
	    height: 100px;
	    text-align: center;
	    img{
	      width: 60px;
	      margin-top: 10px;
	    }
	    span{
	      font-size: 12px;
	    }
  	  }
	}
}

</style>