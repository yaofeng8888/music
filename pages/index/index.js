// pages/index/index.js
import request from '../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
   banner:[],
   recommendList:[],
   topList:[]
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    let result = await request("/banner",{type:2})
    this.setData({
      banner:result.banners
    })
    let recommendListData = await request("/personalized",{limit:5})
    this.setData({
      recommendList:recommendListData.result
    })

    let resutArray=[]
    for (let index = 1; index < 6; index++) {
      let topListData =  await request("/top/list",{idx:index})
      let topItem={
        name:topListData.playlist.name,
        tracks:topListData.playlist.tracks.slice(0,3)
      }
      resutArray.push(topItem)
      this.setData({
        topList:resutArray
       })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})