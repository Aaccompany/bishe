<template>
  <div class="index-container">
    <!-- 这里可以放你的头部信息 -->
    <div class="top"></div>
    <!-- 菜单 -->
    <div class="mid">
      <div class="left">
        <van-sticky>
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item
            :title="item.title"
            dot
            v-for="(item,index) in titleGroup"
            :key="index"
          />
        </van-sidebar>
        </van-sticky>
      </div>
      <div class="right">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div class="list-group">
               <div class="list-item" v-for="(info,ind) in infoItem" :key="ind">
                  <img :src="info.img" width="100%">
                  <div class="info">
                      <p>{{ info.title}}</p>
                      <p>￥{{ info.price}}</p>
                  </div>
                  <div class="btn">
                      <van-icon name="add-o" class="click"/>
                  </div>
               </div>
            </div>
        </van-list>
      </div>
    </div>

    <!-- 购物车-->
    <div class="buttom" ref="buttom">
          <van-icon name="shopping-cart-o" class="shopCar" @click="open"/>
          <div class="shop-info">
             <!-- <p>未选够任何商品</p> -->
             <div class="lists-btn">
               <span>￥55.55</span>
               <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)">提交</van-button>
             </div>
          </div>
    </div>

    <!-- 弹出框 -->
    <van-overlay :show="show" @click="show = false" >
    <div class="open" @click.stop>
        <div class="list-item-shop" v-for="(listInfo,id) in list" :key="id" >
           <div>{{listInfo.title}}</div>
           <div>{{listInfo.price}}</div>
           <div>
             <van-stepper v-model="listInfo.num" integer />
           </div>
        </div>
    </div>
    </van-overlay>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      titleGroup: [
        { title: "标签名称", id: 1 },
        { title: "标签名称", id: 1 },
        { title: "标签名称", id: 1 },
        { title: "标签名称", id: 1 },
        { title: "标签名称", id: 1 },
        { title: "标签名称", id: 1 },
        { title: "标签名称", id: 1 }
      ],
      show:false, //显示遮罩
      activeKey: 0,
      finished: false, // 是否全部已经加载完成
      list:[{title:'特色五花肉',price:'35',num:2},
      {title:'特色五花肉',price:'35',num:2},
      {title:'特色五花肉',price:'35',num:2},
      {title:'特色五花肉',price:'35',num:2},],
      infoItem:[
      {img:'https://img.yzcdn.cn/vant/logo.png',title:'特色五花肉',price:'35'},
      {img:'https://img.yzcdn.cn/vant/logo.png',title:'特色五花肉',price:'35'},
      {img:'https://img.yzcdn.cn/vant/logo.png',title:'特色五花肉',price:'35'},
      {img:'https://img.yzcdn.cn/vant/logo.png',title:'特色五花肉',price:'35'},
      {img:'https://img.yzcdn.cn/vant/logo.png',title:'特色五花肉',price:'35'},
      {img:'https://img.yzcdn.cn/vant/logo.png',title:'特色五花肉',price:'35'},
      {img:'https://img.yzcdn.cn/vant/logo.png',title:'特色五花肉',price:'35'},
      {img:'https://img.yzcdn.cn/vant/logo.png',title:'特色五花肉',price:'35'},
      {img:'https://img.yzcdn.cn/vant/logo.png',title:'特色五花肉',price:'35'},
      {img:'https://img.yzcdn.cn/vant/logo.png',title:'特色五花肉',price:'35'},
      {img:'https://img.yzcdn.cn/vant/logo.png',title:'特色五花肉',price:'35'},
      {img:'https://img.yzcdn.cn/vant/logo.png',title:'特色五花肉',price:'35'},
      {img:'https://img.yzcdn.cn/vant/logo.png',title:'特色五花肉',price:'35'},
      {img:'https://img.yzcdn.cn/vant/logo.png',title:'特色五花肉',price:'35'},
      {img:'https://img.yzcdn.cn/vant/logo.png',title:'特色五花肉',price:'35'},
      {img:'https://img.yzcdn.cn/vant/logo.png',title:'特色五花肉',price:'35'},
      {img:'https://img.yzcdn.cn/vant/logo.png',title:'特色五花肉',price:'35'},
      {img:'https://img.yzcdn.cn/vant/logo.png',title:'特色五花肉',price:'35'},
      {img:'https://img.yzcdn.cn/vant/logo.png',title:'特色五花肉',price:'35'},
      {img:'https://img.yzcdn.cn/vant/logo.png',title:'特色五花肉',price:'35'},
      {img:'https://img.yzcdn.cn/vant/logo.png',title:'特色五花肉',price:'35'},
      {img:'https://img.yzcdn.cn/vant/logo.png',title:'特色五花肉',price:'35'},
      {img:'https://img.yzcdn.cn/vant/logo.png',title:'特色五花肉',price:'35'},
      {img:'https://img.yzcdn.cn/vant/logo.png',title:'特色五花肉',price:'35'},
      {img:'https://img.yzcdn.cn/vant/logo.png',title:'特色五花肉',price:'35'},
      ]
    };
  },
  methods: {
    onLoad() {
      //  加载方法
    },
    onChange(index){
      // 我可以监听变化
      console.log(index)
    },
    open(){
      this.show = !this.show;
      
    }
  }
};
</script>
<style scoped>
.mid{
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
}
.left{
  width: 85px;
}
.right{
  flex: 1;
}
.list-group{
  width: 100%;
}
.list-item{
  padding: 10px;
  max-height: 100px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #3333;
}
.list-item img{
  width: 100px;
  height: 100px;
}
.info{
  display: flex;
  flex:1;
  flex-direction: column;
  justify-content: space-between;
}
.info p{
  margin:0;
  text-align: left;
  margin-left: 10px;
}
.btn{
  width: 50px;
}
.click{
  margin-top: 87px;
   transform: scale(1.5);
   text-align: right;
}
.buttom{
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 50px;
  background-color: #6b6665;
  display: flex;
  align-items: center;
  border-radius: 25px;
  z-index: 999999;
}
.shopCar{
  margin-left: 15px;
   transform: scale(1.5);
   color: white;
}
.shop-info{
  width: calc(100% - 40px);
  margin-left: 10px;
  color: #818080;
  margin-right: 15px;
}
.lists-btn{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.open{
  position: fixed;
  bottom: 50px;
  width: 100%;
  /* border-radius: 15px; */
  background-color: #ffffff;
}
.list-item-shop{
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}


</style>