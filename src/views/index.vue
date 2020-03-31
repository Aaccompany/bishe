<template>
  <div class="index-container">
    <!-- 这里可以放你的头部信息 -->
    <div class="top">
      <div>
          <div class="shop-name"><span>皇家餐厅</span></div>
          <div class="shop-table"><span><van-icon name="shop-collect-o" /> 桌号 A1</span></div>
          <div class="shop-description"><span>欢迎光临大口喝酒，大口吃肉</span></div>
      </div>
    </div>
    <!-- 菜单 -->
    <div class="mid">
      <div class="left">
        <van-sticky>
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item
            :title="item.name"
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
                  <img :src="info.picture" width="100%">
                  <div class="info">
                      <p>{{ info.name}}</p>
                      <p>￥{{ info.money}}</p>
                  </div>
                  <div class="btn">
                      <van-icon v-if="info.count==0"  name="add-o" class="click" @click="addFoot2Car(info,1)"/>
                      <van-stepper v-if="info.count!=0" v-model="info.count" min="0" integer @change = "stepChange(info)"/>
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
               <span>{{orderMoney}}</span>
               <van-button v-if="car.length!=0" icon="shopping-cart-o" type="primary" @click="placeOrder()">提交订单</van-button>
             </div>
          </div>
    </div>

    <!-- 弹出框 -->
    <van-overlay :show="show" @click="show = false" >
      <div class="open" @click.stop>
          <div class="list-item-shop" v-for="(listInfo,id) in car" :key="id" >
            <div>{{listInfo.name}}</div>
            <div>{{listInfo.money}}</div>
            <div>
              <van-stepper v-model="listInfo.count" min="0" integer @change = "stepChange(listInfo)"/>
            </div>
          </div>
      </div>
    </van-overlay>
  </div>
</template>
<script>
import { getFootList } from '@/api/index'
import { getFootTypeList } from '@/api/index'
import { placeOrder } from '@/api/index'
import { Dialog } from 'vant';
export default {
  data() {
    return {
      loading: false,
      titleGroup: [],
      show:false, //显示遮罩
      activeKey: 0,
      finished: false, // 是否全部已经加载完成
      car:[],
      infoItem:[],
      orderMoney: 0,
      tableId: 12
    };
  },
  created() {
    this.getFootList()
    this.getFootTypeList()
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
      
    },
    getFootList(){
      getFootList().then(response => {
          console.log(response.data)
          let list = response.data
          for(let i = 0; i < list.length; i++){
            let footItem = list[i]
            footItem.count = 0
            this.infoItem.push(footItem)
          }
      })
    },
    getFootTypeList(){
      getFootTypeList().then(response =>{
          console.log(response.data)
          this.titleGroup = response.data
      })
    },
    addFoot2Car(foot,number){
      //将商品添加进购物s车
      //1.判断购物车是否已经存在了该商品
      let isContain = false
      for(let i = 0; i < this.car.length; i++){
          let carFoot = this.car[i]
          //1.1存在商品，修改商品数量
          if(carFoot.id == foot.id){
            carFoot.count += number
            isContain = true
            break
          }
      }
      //1.2不存在商品，将商品添加进数组 car
      if(!isContain){
        foot.count = 1
        this.car.push(foot)
      }
      //2.修改订单总价 orderMoney
      this.orderMoney += foot.money * number
    },
    stepChange(foot){
      let isContain = false
      this.orderMoney = 0
      for(let i = 0; i < this.car.length; i++){
          let carFoot = this.car[i]
          if(carFoot.id == foot.id){
              if(foot.count == 0){
                this.car.splice(i,1)
              }
              isContain = true
          }
          this.orderMoney += (carFoot.money * carFoot.count)
      }
      //1.2不存在商品，将商品添加进数组 car
      if(!isContain && foot.count!=0){
        this.car.push(foot)
        this.orderMoney += (foot.money * foot.count)
      }
    },
    placeOrder(){
      Dialog.confirm({
        title: '确定订单',
        message: '客官是否需要下单呢~'
      }).then(() => {
        // on confirm
        //封装数据
        let carVoReq = {} ;
        let itemList = []
        for(let i = 0; i < this.car.length; i++){
            let carVo ={}
            carVo.count = this.car[i].count
            carVo.footId = this.car[i].id
            itemList.push(carVo)
        }
        carVoReq.itmeList = itemList
        carVoReq.tableId = this.tableId
        //发送请求
        placeOrder(carVoReq).then(response => {
          this.$message({
              type: 'success',
              message: '下单成功!'
            })
        })
      }).catch(() => {
        // on cancel
      });
      
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
.top{
  height: 140px;
  background-color: #F1F1F1
}
.shop-name{
  padding-top: 15px;
  padding-left: 10px;
  font-size: 30px;
  text-align: left;
}
.shop-table{
  margin-top: 20px;
  padding-left: 10px;
  font-size: 20px;
  text-align: left;
}
.shop-description{
  margin-top: 15px;
  padding-right: 10px;
  font-size: 15px;
  text-align: right;
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