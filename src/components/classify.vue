<template>
	<div class="classify">
		<nav>
			<router-link to='/cake'>蛋糕</router-link>
			<router-link to='/cream'>冰淇淋</router-link>
			<router-link to='/coffee'>咖啡下午茶</router-link>
			<router-link to='/bread'>面包</router-link>
			<router-link to='/cookie'>常温蛋糕</router-link>
			<router-link to='/present'>设计师礼品</router-link>
		</nav>
		<div class="setion">
			<router-view/>
		</div>
		<div class="empty">
		    <span>没了</span>
		    <img src="../assets/image/主页插图/download06.png" alt="">
    	</div>
	</div>
</template>
<script>
export default {
  name: "classify"
}
</script>
<style scoped lang="less">
.classify{
	margin-top: 60px;
}
nav{
	display: flex;
	justify-content: space-around;
	font-size: 14px;
	a{
		text-decoration: none;
		color: #707070;
	}
}
.empty{
  height: 120px;
  position: relative;
  span{
    position: absolute;
    right: 50px;
    bottom: 20px;
    color: #d5d5dd;
    font-size: 14px;
  }
  img{
    position: absolute;
    right: 0px;
    bottom: 20px;
    width: 40px;
  }
}
</style>