// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicList:[],
    idx:0
  },
  playmc(e){
    var idx = parseInt(e.currentTarget.dataset.idx);
    var that=this;
    that.setData({
      idx:idx
    })
  },
  loadData(){
    let that=this
    wx.request({
      url: 'https://v1.itooi.cn/netease/song/newest',
      success(res){
        var rows=res.data.data
        that.setData({
          musicList:rows,
        })
      }
    })
  },
  // playMusic(){
  //   let that=this;
  //   wx.request({
  //     url: 'https://v1.itooi.cn/netease/url?id=1374061036&quality=flac',
  //     success
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadData()
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