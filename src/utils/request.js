import axios from 'axios'
// 引入vant-ui 吧min.js的引入复制过来  不用VUE。use()

// create an axios instance
const service = axios.create({
  baseURL: '', // url = base url + request url 基本url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout  // 请求超时时间 
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
     // 这里是 请求拦截器  你可以在这里设置请求信息 比如头部添加token
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    if(res.code!=0){
      //  这里是http  不是200的情况  你可以在这里进行初步错误处理  Toast() 轻提示
      return Promise.reject('error')
    }else{
      // 这里是 http  状态码为200 
      return res   
    }
  },
  error => {
    console.log('err' + error) // for debug
   
    return Promise.reject(error)
  }
)

export default service
