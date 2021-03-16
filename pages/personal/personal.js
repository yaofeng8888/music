// pages/personal/personal.js
let startY = 0;
let moveY  = 0;
let moveDistace = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coverTransform: 'translateY(0)',
    coverTranstion: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  },
  handlerTouchStart : function(event){
    this.setData({
      coverTranstion: ''
    })
    startY = event.touches[0].clientY;
  },
  handlerTouchMove : function(event){
    moveY = event.touches[0].clientY;
    moveDistace = moveY-startY; 
    if(moveDistace<=0){
      return;
    }
    if(moveDistace>=80){
      moveDistace=80
    }
    this.setData({
      coverTransform: `translateY(${moveDistace}rpx)`
    })
  },
  handlerTouchEnd : function(){
    this.setData({
      coverTransform: `translateY(0)`,
      coverTranstion: 'transform 1s linear'
    })
  },
})