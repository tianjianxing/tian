<template>
  <div class="box">
    <el-carousel>
      <el-carousel-item v-for="(i,j) in items" :key="j">
        <router-link :to="i.path"><img :src="i.url" alt=""></router-link>
      </el-carousel-item>
    </el-carousel>
    <nav>
      <ul class="discount">
        <li>
          <span>
          </span>
          新客满298元赠送切块蛋糕
        </li>
        <li>
          <span>
          </span>
          满100包邮
        </li>
        <li>
          <span>
          </span>
          全程冷链配送
        </li>
      </ul>
      <ul class="classify">
        <li>
          <router-link to="/cake">
            <img src="../assets/image/主页插图/download07.png" alt="">
            <span>蛋糕</span>
          </router-link>
        </li>
        <li>
          <router-link to="/bread">
            <img src="../assets/image/主页插图/download08.png" alt="">
            <span>面包</span>
          </router-link>
        </li>
        <li>
          <router-link to="/coffee">
            <img src="../assets/image/主页插图/download09.png" alt="">
            <span>下午茶</span>
          </router-link>
        </li>
        <li>
          <router-link to="/company">
            <img src="../assets/image/主页插图/download10.png" alt="">
            <span>企业专区</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <p class="activity">
      <input type="button" value="新品">
      <a href="">
        <router-link to="./newPeopleBoth">更多></router-link>
      </a>
    </p>
    <ul class="list">
      <li v-for="(g,i) in products" :key="i">
        <router-link :to="{
            path: '/goods',
            query:{
              g 
            }
          }">
          <img :src="g.url" alt="">
          <b>{{g.name}}</b>
          <span>{{g.price}}</span>/{{g.weight}}
          <p>{{g.desc}}</p>  
        </router-link> 
        <div @click="increace(1,g)">
         
        </div>
      </li>
    </ul>
    <p class="activity">
      <input type="button" value="人气">
        <router-link to="./newPeopleBoth">更多></router-link>
    </p>
    <ul class="list">
      <li v-for="(k,i) in productss" :key="i">
         <router-link :to="{
            path: '/goods',
            query:{
              g:k
            }
          }">
          <img :src="k.url" alt="">
          <b>{{k.name}}</b>
          <span>{{k.price}}</span>/{{k.weight}}
          <p>{{k.desc}}</p> 
        </router-link> 
        <div @click="increace(1,k)">
           
        </div>
      </li>
    </ul>
    <p class="activity">
      <input type="button" value="生日">
        <router-link to="./newPeopleBoth">更多></router-link>
    </p>
    <ul class="list">
      <li v-for="(l,i) in productsss" :key="i">
         <router-link :to="{
            path: '/goods',
            query:{
              g:l
            }
          }">
          <img :src="l.url" alt="">
          <b>{{l.name}}</b>
          <span>{{l.price}}</span>/{{l.weight}}
          <p>{{l.desc}}</p>
        </router-link>
        <div @click="increace(1,l)">
            
        </div>

      </li>
    </ul>
    <p class="activity">
      <input type="button" value="廿一客▪活动">
    </p>
    <div class="new">
      <a href="">
        <router-link to="./newCustomer">
          <img src="../assets/image/主页插图/download15.jpg" alt="">
          <h4>新客权益</h4>
          <p>点击查看</p>
          <br>
          <br>
          <span>只剩83天</span>
        </router-link>
      </a>
    </div>
    <p class="activity">
      <input type="button" value="廿一客▪文章">
    </p>
    <div class="title">
      <a href="">
         <router-link to="./title">
            <img src="../assets/image/主页插图/download16.jpg" alt=""> 
            <span>冬季刊▪进博会</span>
         </router-link> 
      </a>
      <a href="">
         <router-link to="./title">
            <img src="../assets/image/主页插图/download17.jpg" alt=""> 
            <span>廿一志秋刊▪客服Q&A</span>
         </router-link>
      </a>
      <a href="">
         <router-link to="./title">
            <img src="../assets/image/主页插图/download18.jpg" alt=""> 
            <span>春季刊▪茶</span>
         </router-link>
      </a>
      <a href="">
         <router-link to="./title">
            <img src="../assets/image/主页插图/download19.jpg" alt=""> 
            <span>春季刊刊▪私享</span>
         </router-link>
      </a>
      <a href="">
        <router-link to="./moreTitle">
            查看更多
        </router-link>
      </a>
    </div>
    <div class="empty">
      <span>没了</span>
      <img src="../assets/image/主页插图/download06.png" alt="">
    </div>
    <div :style="{display:succeed}" class="success">
      加入购物车成功
    </div>
</div>
</template>
<script>
// localStorage.clear();
export default {
    data(){
      return{
          succeed:"none",
          items:[
            {
              path:"/goods",
              url:require("../assets/image/主页插图/download01.jpg")
            },
            {
              path:"/birthday",
              url:require("../assets/image/主页插图/download02.jpg")
            },
            {
              path:"/goods",
              url:require("../assets/image/主页插图/download20.jpg")
            },
            {
              path:"/cake",
              url:require("../assets/image/主页插图/download21.jpg")
            },
            {
              path:"/delivery",
              url:require("../assets/image/主页插图/download22.jpg")
            }
          ],
          products:[
            {
              url:require("../assets/image/主页插图/download03.jpg"),
              name:"米道",
              num:1,
              price:"298",
              weight:"454g(1.0磅)",
              desc:"天真、天然，是做这款蛋糕唯一的出发点"
            },
            {
              url:require("../assets/image/主页插图/download04.jpg"),
              name:"汉砖",
              num:1,
              price:"128",
              weight:"113g(0.25磅)",
              desc:"岁月沉淀，巧克力，酒与未央宫"
            },
            {
              url:require("../assets/image/主页插图/download05.jpg"),
              name:"中秋坚果芝士慕斯蛋糕",
              num:1,
              price:"268",
              weight:"454g(1.0磅)",
              desc:"月光如果可以凝固，一定是芝士慕斯的味道"
            },
            {
              url:require("../assets/image/主页插图/download06.jpg"),
              name:"3天月饼（慕斯）",
              num:1,
              price:"398",
              weight:"420g(三个口味)",
              desc:"3天，即一生"
            },
            {
              url:require("../assets/image/主页插图/download07.jpg"),
              name:"浅草",
              num:1,
              price:"298",
              weight:"908g(2.0磅)",
              desc:"浅草才能没马蹄"
            },
            {
              url:require("../assets/image/主页插图/download08.jpg"),
              name:"（新）杰瑞",
              num:1,
              price:"298",
              weight:"908g(2.0磅)",
              desc:"谁动了我的奶酪？！......"
            }
          ],
          productss:[
            {
              url:require("../assets/image/主页插图/download09.jpg"),
              name:"百利甜情人",
              num:1,
              price:"298",
              weight:"902g(2.0磅)",
              desc:"爱尔兰百利酒/新西兰奶油/云南玫瑰甘露"
            },
            {
              url:require("../assets/image/主页插图/download10.jpg"),
              name:"芒果奶油",
              num:1,
              price:"198",
              weight:"908g(2.0磅)",
              desc:"坚持自然成熟，应季鲜切芒果"
            },
            {
              url:require("../assets/image/主页插图/download11.jpg"),
              name:"榴莲飘飘",
              num:1,
              price:"298",
              weight:"908g(2.0磅)",
              desc:"严格捍卫榴莲狂热者的权利"
            }
          ],
          productsss:[
            {
              url:require("../assets/image/主页插图/download12.jpg"),
              name:"朗姆芝士",
              num:1,
              price:"198",
              weight:"454g(1.0磅)",
              desc:"香滑的乳酪与波多黎各朗姆酒"
            },
            {
              url:require("../assets/image/主页插图/download13.jpg"),
              name:"百香果乳酪慕斯",
              num:1,
              price:"198",
              weight:"454g(1.0磅)",
              desc:"冰淇淋口感，不同层次的酸与冰凉"
            },
            {
              url:require("../assets/image/主页插图/download14.jpg"),
              name:"彼德尔（H B D）",
              num:1,
              price:"198",
              weight:"454g(1.0磅)",
              desc:"彼德尔联名款--猪年限定版"
            }
          ]
      }
    },
    methods:{
      increace(n,m){
        this.$store.commit('mutationsAddCount',n);
        // this.succeed="block"
        // alert("加入购物车成功");
        // console.log(m);
        // console.log(n);
        if(!localStorage.getItem("thing")){
          var arr = [];
          arr.push(m);
          localStorage.setItem("thing",JSON.stringify(arr));
        }else{
          var arr=JSON.parse(localStorage.getItem("thing"));
          for(var a in arr){
            if(arr[a].name==m.name){
              arr[a].num=arr[a].num+1;
              localStorage.setItem("thing",JSON.stringify(arr))
              break
            }else{
              if(a==arr.length-1){
                arr.push(m);
                localStorage.setItem("thing",JSON.stringify(arr));
              }
              
            }
          } 
          if(arr.length==0){
              arr.push(m);
              localStorage.setItem("thing",JSON.stringify(arr))
            }
        }
        for(var i=0;i<localStorage.length;i++){
          for(var j=0;j<sessionStorage.length;j++){
            if(localStorage.key(i)==sessionStorage.key(j)&&localStorage.getItem(localStorage.key(i))==sessionStorage.getItem(sessionStorage.key(j))){
              
            }
          }
        }  
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.el-carousel__item{
  margin-top: 30px;
}
.el-carousel__item:nth-child(2n){
  img{width: 100%;}
  }
.el-carousel__item:nth-child(2n+1){
   img{width: 100%;}
  }
nav .discount{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  margin-left: -40px;
  li{
    display: inline-block;
    font-size: 12px;
    color: #c69c6d;
    &>span{
      display: inline-block;
      float: left;
      background-image: url(../assets/image/主页插图/download11.png);
      background-position: 0px -28px;
      width: 20px;
      height: 20px;
      overflow: hidden;
    }
  }
}
nav .classify{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding-left: 0px;
  li{
    display: inline-block;
    font-size: 12px;
    width: 30%;
    &>a{
      text-decoration: none;
    }
    a>span{
      margin-left: 30%;
      color: black;
    }
    a>img{
      width: 60%;
      margin-left: 15%;
    }
  }
}
.activity{
  border-top: 1px solid #e5e5e5;
  padding: 10px 0;
  width: 95%;
  margin: auto;
  input{
    border: none;
    background-color: #f4ebe2;
    border-radius: 10px;
  }
  a{
    text-decoration: none;
    color: #808080;
    float: right;
    font-size: 12px;
  }
}
.list{
  li{
    display: inline-block;
    margin-left: -20px;
    position: relative;
    width: 100%;
    &>a{
      text-decoration: none; 
      color: black;
      font-size: 12px;
      b,span{
        font-size: 16px;
      }
      span{
        color: #c69c6d;
      }
      img{
        width: 100%;
      }
      
    }
    div{
        width: 45px;
        height: 45px;
        position: absolute;
        right: 10px;
        bottom: 10px;
        background-image: url(../assets/image/主页插图/download11.png);
        background-size: 80px;
        background-position: -115px 45px;
        a{
          display: block;
          width: 100%;
          height: 100%;
        }
      }
  }
}
.new{
   height: 200px;
   img{
    height: 100%;
    float: right;
   }
   a{
    text-decoration: none;
    color: black;
    font-size: 14px;
    h4{
      margin-top: 10px;
      margin-left: 10px;
      font-size: 16px;
    }
    p{
      margin-left: 10px;
      color: #999999;
    }
    span{
      margin-left: 10px;
      color: #c2a185;
    }
   }
}
.title{ 
  a{
    display: inline-block;
    width: 270px;
    margin-right: 10px;
    margin-bottom: 10px;
    text-decoration: none;
    color: black;
    font-size: 14px;
    img{
      width: 100%;
    }
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
