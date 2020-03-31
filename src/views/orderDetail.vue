<template>
    <div class="order_contain">
        <div class="top"><span>订单详情</span></div>
        <div class="top_2">
            <div class="title"><span>已接单</span></div>
            <div class="discription"><span>后厨正在制作，您的菜马上就到</span></div>
        </div>
        <div class="body">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <div class="list-group">
                    <div class="list-item" v-for="(info,ind) in order.listItem" :key="ind">
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
    </div>
</template>
<script>

export default {
  data() {
    return {
      tableId: 12,
      order: {
        id: 12,
        money: 1651.66,
        tableId: 12,
        isPay: 0,
        listItem: [
          {count: 3, money: 62.97, footResVo: {id: 2, name: "大白菜" , description: "大白菜下大白兔", picture: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585310671812&di=d57c765a31d44f2f45ffa145f2b538f9&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FoOIc9rGo5SNa4aAaVK15V1rzAPgFilHCMPHzK1cwhEx0N1535154479165.jpg"}},
          {count: 3, money: 62.97, footResVo: {id: 2, name: "大白菜" , description: "大白菜下大白兔", picture: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585310671812&di=d57c765a31d44f2f45ffa145f2b538f9&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FoOIc9rGo5SNa4aAaVK15V1rzAPgFilHCMPHzK1cwhEx0N1535154479165.jpg"}},
          {count: 3, money: 62.97, footResVo: {id: 2, name: "大白菜" , description: "大白菜下大白兔", picture: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585310671812&di=d57c765a31d44f2f45ffa145f2b538f9&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FoOIc9rGo5SNa4aAaVK15V1rzAPgFilHCMPHzK1cwhEx0N1535154479165.jpg"}},
          {count: 3, money: 62.97, footResVo: {id: 2, name: "大白菜" , description: "大白菜下大白兔", picture: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585310671812&di=d57c765a31d44f2f45ffa145f2b538f9&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FoOIc9rGo5SNa4aAaVK15V1rzAPgFilHCMPHzK1cwhEx0N1535154479165.jpg"}},
          {count: 3, money: 62.97, footResVo: {id: 2, name: "大白菜" , description: "大白菜下大白兔", picture: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585310671812&di=d57c765a31d44f2f45ffa145f2b538f9&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FoOIc9rGo5SNa4aAaVK15V1rzAPgFilHCMPHzK1cwhEx0N1535154479165.jpg"}},
          {count: 3, money: 62.97, footResVo: {id: 2, name: "大白菜" , description: "大白菜下大白兔", picture: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585310671812&di=d57c765a31d44f2f45ffa145f2b538f9&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FoOIc9rGo5SNa4aAaVK15V1rzAPgFilHCMPHzK1cwhEx0N1535154479165.jpg"}},
          {count: 3, money: 62.97, footResVo: {id: 2, name: "大白菜" , description: "大白菜下大白兔", picture: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585310671812&di=d57c765a31d44f2f45ffa145f2b538f9&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FoOIc9rGo5SNa4aAaVK15V1rzAPgFilHCMPHzK1cwhEx0N1535154479165.jpg"}},
          {count: 3, money: 62.97, footResVo: {id: 2, name: "大白菜" , description: "大白菜下大白兔", picture: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585310671812&di=d57c765a31d44f2f45ffa145f2b538f9&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FoOIc9rGo5SNa4aAaVK15V1rzAPgFilHCMPHzK1cwhEx0N1535154479165.jpg"}},
          {count: 3, money: 62.97, footResVo: {id: 2, name: "大白菜" , description: "大白菜下大白兔", picture: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585310671812&di=d57c765a31d44f2f45ffa145f2b538f9&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FoOIc9rGo5SNa4aAaVK15V1rzAPgFilHCMPHzK1cwhEx0N1535154479165.jpg"}},
          {count: 3, money: 62.97, footResVo: {id: 2, name: "大白菜" , description: "大白菜下大白兔", picture: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585310671812&di=d57c765a31d44f2f45ffa145f2b538f9&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FoOIc9rGo5SNa4aAaVK15V1rzAPgFilHCMPHzK1cwhEx0N1535154479165.jpg"}},
          {count: 3, money: 62.97, footResVo: {id: 2, name: "大白菜" , description: "大白菜下大白兔", picture: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585310671812&di=d57c765a31d44f2f45ffa145f2b538f9&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FoOIc9rGo5SNa4aAaVK15V1rzAPgFilHCMPHzK1cwhEx0N1535154479165.jpg"}},
          {count: 3, money: 62.97, footResVo: {id: 2, name: "大白菜" , description: "大白菜下大白兔", picture: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585310671812&di=d57c765a31d44f2f45ffa145f2b538f9&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FoOIc9rGo5SNa4aAaVK15V1rzAPgFilHCMPHzK1cwhEx0N1535154479165.jpg"}},
          {count: 3, money: 62.97, footResVo: {id: 2, name: "大白菜" , description: "大白菜下大白兔", picture: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585310671812&di=d57c765a31d44f2f45ffa145f2b538f9&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FoOIc9rGo5SNa4aAaVK15V1rzAPgFilHCMPHzK1cwhEx0N1535154479165.jpg"}},
        ]
      },     
    };
  },
  created() {

  },
  methods: {
    onLoad() {
      //  加载方法
      
    },
    onChange(index){
      // 我可以监听变化
      console.log(index)
    },
    
  }
};
</script>
<style scoped>
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
</style>