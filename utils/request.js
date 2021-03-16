//发送ajax请求
/**
 *这个js 用于发送http请求，
 */
import config from '../utils/config'
export default(url,data={},method='GET') =>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url:config.mobileHost+url,
      data,
      method,
      success: (result) => {
       //修改Promise状态
       resolve(result.data);
      },
      fail: (res) => {
        reject(res)
      },
    })
  })
}