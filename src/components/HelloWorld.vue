<template>
  <div class="hello">
    <header>
      <span @click="list" class="a1">
        <img class="img1" src="../assets/image/主页插图/download02.png" alt="">
      </span>
      <span @click="cities" class="a2">
        <img class="img2" src="../assets/image/主页插图/download03.png" alt="">
        <span>{{map}}</span>
      </span>
      <router-link to="/" class="a3">
        <img class="img3" src="../assets/image/主页插图/download01.png" alt="">
      </router-link>
      <span @click="shopcar" to="/shopping" class="a4">
        <img class="img4" src="../assets/image/主页插图/download05.png" alt="">
        <span>{{$store.state.nums}}</span>
      </span>
      <router-link to="/mime" class="a5">
        <img class="img5" src="../assets/image/主页插图/download04.png" alt="">
      </router-link>
    </header>
    <nav :style="{height:myStyle}" @click="empty">
      <router-link  to='/home'>
        <img src="../assets/image/主页插图/download12.png" alt=""><br>
        <span>首页</span>
      </router-link>
      <router-link to='/classify'>
        <img src="../assets/image/主页插图/download13.png" alt=""><br>
        <span>分类</span>
      </router-link>
      <span @click="mime" :style="{display:mimeone}">
        <img src="../assets/image/主页插图/download15.png" alt=""><br>
        <span>个人</span>
      </span>
      <span @click="mime" :style="{display:mimetwo}">
        <img src="../assets/image/主页插图/download15.png" alt=""><br>
        <span>个人</span>
      </span>
    </nav>
    <div class="section">
      <div class="city" :style="{display:myStyle1}">
        <span>选择城市</span>
        <ul>
          <li @click="names(g)" :class="{classA:g.ok}" v-for="(g,i) in items" :key="i">
            <span>{{g.name}}</span>
          </li>
        </ul>
        <button @click='sure'>确定</button>
        <p>*切换城市将清空购物车</p>
      </div>
      <router-view/>
    </div>
    <footer>
      <router-link to="/">下载APP</router-link>
      <router-link to="/">联系我们</router-link>
      <router-link to="/announcement">全站公告</router-link>
      <router-link to="/exequatur">生产经营资源</router-link>
      <p>
        Copyright&copy; 21Cake蛋糕官网商城 2007-2019,
        <br>
        版权所有 京ICP备14006254号-1
        <br>
        网站注册公司名称：北京廿一客食品有限公司
      </p>
    </footer>
  </div>
</template>
<script>
  if(!localStorage.getItem('count')){
    localStorage.setItem('count',0)
  }
export default {
  name: "HelloWorld",
  data(){
    return{
      classA:'classA',
      myStyle:'0',
      myStyle1:'none',
      myStyle2:'',
      map:'上海',
      count:'0',
      mimeone:"block",
      mimetwo:"none",
      items:[
        {
          name:"上海",
          ok:false,
          ok1:true,
          ok2:false
        },
        {
          name:"北京",
          ok:false,
          ok1:true,
          ok2:false
        },
        {
          name:"天津",
          ok:false,
          ok1:true,
          ok2:false
        },
        {
          name:"杭州",
          ok:false,
          ok1:true,
          ok2:false
        },
        {
          name:"无锡",
          ok:false,
          ok1:true,
          ok2:false
        },
        {
          name:"苏州",
          ok:false,
          ok1:true,
          ok2:false
        },
        {
          name:"广州",
          ok:false,
          ok1:true,
          ok2:false
        },
        {
          name:"深圳",
          ok:false,
          ok1:true,
          ok2:false
        }
      ]
    }
  },
  methods:{
    list:function(){
      if(this.myStyle=='0'){
        this.myStyle="100px";
      }else{
        this.myStyle="0";
      }
    },
    cities:function(){
      if(this.myStyle1=="none"){
        this.myStyle1="block";
      }else{
        this.myStyle1="none";
      }
    },
    names:function(n){  
      for(var a in this.items){
      this.items[a].ok=this.items[a].ok2
      }
      n.ok=n.ok1;
      this.myStyle2=n.name;
    },
    sure(){
      this.map=this.myStyle2;
      this.myStyle1="none";
    },
    empty:function(){
      this.myStyle="0";
    },
    mime(){
      for(var i=0;i<localStorage.length;i++){
        for(var j=0;j<sessionStorage.length;j++){
          if(localStorage.key(i)==sessionStorage.key(j)&&localStorage.getItem(localStorage.key(i))==sessionStorage.getItem(sessionStorage.key(j))){
            this.mimeone="none";
            this.mimetwo="block";
            return  location.href="#/mimeReg"
          }
        }
      }
      location.href="#/notice"
    },
    shopcar(){
      for(var i=0;i<localStorage.length;i++){
        for(var j=0;j<localStorage.length;j++){
          if(localStorage.key(i)==sessionStorage.key(j)&&localStorage.getItem(localStorage.key(i))==sessionStorage.getItem(sessionStorage.key(j))){
            return  location.href="#/pay"
          }
        }
      }
      location.href="#/mime"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.classA{
  border:1px solid #442818;
}
header{
  position: fixed;
  top: 0px;
  width: 100%;
  background-color: white;
  z-index: 10;
  height: 48px;
  a,&>span{
   text-decoration: none;
   display: inline-block;
   line-height: 48px;
   .img1{
    width: 18px;
    height: 12px;
   }
   .img2{
    width: 12px;
    height: 15px;
   }
   .img3{
    width: 30px;
    height: 24px;
   }
   .img4{
    width: 19px;
    height: 19px;
   }
   .img5{
    width: 19px;
    height: 19px;
   } 
  }
  .a1{
    float: left;
    padding-right: 10px;
  }
  .a2{
    float: left;
  }
  .a3{
    position: absolute;
    left: 45%;
  }
  .a4{
    float: right;
    padding-left: 10px;
    margin-right: 15px;
     &>span{
      display: inline-block;
      width: 12px;
      height: 12px;
      font-size: 12px;
      color: white;
      background-color: #ba9978;
      position: absolute;
      right: 12px;
      top: 6px;
      line-height: 12px;
      text-align: center;

    }
  }
  .a5{
    float: right;
  }
}
nav{
  position: fixed;
  top: 48px;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  padding: 0px 0px;
  a,&>span{
    padding-top: 10px;
    text-decoration: none;
    color: #442818;
    width: 30%;
    height: 100px;
    text-align: center;
    img{
      width: 25px;
      margin-top: 10px;
    }
    span{
      font-size: 12px;
    }
  }
}
footer{
  height: 160px;
  background-color: #414141;
  color: #a0a0a0;
  text-align: center;
  font-size: 13px;
  padding-top: 20px;
  a{
    text-decoration: none;
    display: inline-block;
    background-color: #414141;
    border: 1px solid #a0a0a0;
    width: 20%;
    color: #a0a0a0;
  }
}
.city{
  width: 89%;
  margin: auto;
  height: 280px;
  padding: 20px 10px;
  background-color: white;
  position: fixed;
  left: 3%;
  top: 30%;
  z-index: 10;
  ul{
    margin-top: 30px;
  }
  li{
    margin-top: 10px;
    text-align: center;
    span{
      font-size: 12px;
    }
  }
}
.section{
  margin-top: 30px;
  span{
    font-size: 18px;
    color: #442818;
  }
  ul{
    padding-left: 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li{
      display: inline-block;
      width: 24%;
      height: 30px;
      a{
        display: inline-block;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 30px;
        font-size: 12px;
        text-decoration: none;
        color: #442818
      }
    }
  }
  button{
    border: none;
    width: 130px;
    height: 35px;
    color: white;
    display: block;
    margin: auto;
    margin-top: 50px;
    background-color: #442818
  }
  p{
    font-size: 12px;
    color: #d5bfa7;
    text-align: center;
  }
}
</style>
