<template>
    <div class="order_contain">
        <div class="top"><span>订单详情</span></div>
        <div class="top_2">
            <div class="title"><span>已接单</span></div>
            <div class="discription"><span>后厨正在制作，您的菜马上就到</span></div>
        </div>
        <div class="body">
            <van-list v-model="loading" :finished="finished" finished-text="" @load="onLoad">
                <div class="list-group">
                    <div class="list-item" v-for="(info,ind) in order.itemList" :key="ind">
                        <img :src="info.footResVo.picture" width="100%">
                        <div class="info">
                            <p>{{ info.footResVo.name}}</p>
                            <p>数量：{{ info.count}} 份</p>
                        </div>
                        <div class="btn">
                            <p>￥{{ info.money}}</p>
                        </div>
                    </div>
                </div>
            </van-list>
        </div>

        <div class="buttom">
          
             总价：{{order.money}}
          
        </div>
    </div>
</template>
<script>
import { orderDetail } from '@/api/index'
export default {
  data() {
    return {
      tableId: 12,
      order: {
        id: 0,
        money: 0,
        tableId: 0,
        isPay: 0,
        itemList: [],
        loading: false,
        finished: false
      },     
    };
  },
  created() {
    this.orderDetail()
    this.loading = false
    this.finished = true
  },
  methods: {
    onLoad() {
      //  加载方法
      
    },
    onChange(index){
      // 我可以监听变化
      console.log(index)
    },
    orderDetail(){
      //获取桌号
      let tableId = localStorage.getItem('tableId')
      if(typeof(tableId) == "undefined" || tableId == null){
        console.log("非法操作")
        return
      }
      //调用后端服务器
      orderDetail(tableId).then(response =>{
          console.log(response.data)
          this.order = response.data
          console.log(this.order)
          this.order.itemList = response.data.itemList
      })
    }
  }
};
</script>
<style scoped>
.order_contain{
  
}
.top{
    font-size: 30px;
    padding-top: 20px;
}
.title{
    font-size: 20px;
    text-align: left;
    padding-top: 10px;
    background: #F8FAFC;
    padding-left: 15px;
}
.discription{
    padding-top: 15px; 
    font-size: 15px;
    text-align: left;
    background: #F8FAFC;
    padding-bottom: 15px;
    padding: 15px 0;
    padding-left: 15px;
}
.top_2{
    background-color: #FFFFFF;
    height: 80;
    margin-top: 10px;
}
.list-group{
  position: relative;
  margin-bottom: 60px;
}
.list-item{
  height: 50px;
  display: flex;
  flex-direction: row;
  padding: 12px;
  background-color: #FFFFFF;
  border-bottom: 1px solid #3333;
}
.list-item img{
  width: 50px;
  height: 50px;
}
.info{
  display: flex;
  flex:1;
  flex-direction: column;
  justify-content: space-between;
}
.info p{
  margin-left: 7px;
  text-align: left;
}
.btn{
  width: 80px;
   position: relative;
   top:40%;
}
.buttom{
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 60px;
  font-size: 16px;
  line-height: 60px;
  background-color: #FFFFFF;
  text-align: left;
}
</style>