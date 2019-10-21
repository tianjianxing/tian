<template>
	<div class="moreTitle">
		<ul>
			<li v-for="(g,i) in list" :key="i">
				<p>
					<span>{{g.time}}</span>
				</p>
<!-- 				<a href=""> -->
					<router-link to="./title">
						<h3>{{g.headline}}</h3>
						<p class="time">{{g.time}}</p>
						<img :src="g.url" alt="">
						<p class="read">
							阅读全文
							<span>></span>
						</p>
        			</router-link>
<!-- 				</a> -->
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	data(){
		return{
			list:[
				{
					time:"2018.11.23",
					headline:"冬季刊·进博会",
					url:require("../assets/image/主页报刊查看更多图/download.jpg")
				},
				{
					time:"2018.11.23",
					headline:"冬季刊·进博会",
					url:require("../assets/image/主页报刊查看更多图/download.jpg")
				},
				{
					time:"2018.11.23",
					headline:"冬季刊·进博会",
					url:require("../assets/image/主页报刊查看更多图/download.jpg")
				},
				{
					time:"2018.11.23",
					headline:"冬季刊·进博会",
					url:require("../assets/image/主页报刊查看更多图/download.jpg")
				},
				{
					time:"2018.11.23",
					headline:"冬季刊·进博会",
					url:require("../assets/image/主页报刊查看更多图/download.jpg")
				},
				{
					time:"2018.11.23",
					headline:"冬季刊·进博会",
					url:require("../assets/image/主页报刊查看更多图/download.jpg")
				},
				{
					time:"2018.11.23",
					headline:"冬季刊·进博会",
					url:require("../assets/image/主页报刊查看更多图/download.jpg")
				}

			]
		}
	}
}
</script>
<style scoped lang="less">
ul{
	padding: 0px;
	margin-top: 50px;
	li{
		height: 400px;
		&>p{
			height: 50px;
			line-height: 50px;
			text-align: center;
			margin: 0px;
			margin-bottom: 5px;
			span{
				background-color: #cecece;
				color: white;
				padding: 5px;
				border-radius: 5px;
				font-size: 12px;
			}
		}
		a{
			text-decoration: none;
			display: block;
			height: 333px;
			border: 1px solid #d3d3d3;
			border-radius: 5px;
			padding: 0px 10px;
			h3{
				font-weight: normal;
				color: black; 
				margin: 0px;
				margin-top: 30px;
			}
			.time{
				font-size: 12px;
				color: #919191;
				margin: 0px;
				margin-bottom: 15px;
			}
			img{
				width: 100%;
			}
			.read{
				font-size: 12px;
				color: black;
				span{
					margin-left: 80%;
					font-size: 20px;
				}
			}
		}
	}
}

</style>