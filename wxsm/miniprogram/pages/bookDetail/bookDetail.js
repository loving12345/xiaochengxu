// pages/bookDetail/bookDetail.js
const db = wx.cloud.database();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    aladdin:[],
    data:[],
    info:[],
    tages:[]
  },
    goOut(e){
    var name = e.currentTarget.dataset.name
    wx.navigateTo({
      url: '/pages/bookDetail/bookDetail?name='+name
    })
  },
  loadData(){
    let that=this;
    wx.request({
      url: `https://www.apiopen.top/novelInfoApi?name=${that.options.name}`,
      success(res){
        var rows=res.data.data
        that.setData({
          aladdin:rows.aladdin,
          data:rows.data,
          info:rows.info
        })
        // const $ = db.command.aggregate
        var tages=rows.aladdin.tags;
        tages = tages.split(',')
        that.setData({
          tages:tages
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadData();
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