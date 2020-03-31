import request from '@/utils/request'

export function getFootList() {
    return request({
      url: '/foot/',
      method: 'get'
    })
}

export function getFootTypeList(){
    return request({
        url: '/foot/footType',
        method: 'get'
    })
}

export function placeOrder(data){
    console.log(data)
    return request({
        url: '/order/',
        method: 'post',
        data
    })
}