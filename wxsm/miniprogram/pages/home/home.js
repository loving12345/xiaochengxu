// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    count:5,
    s:null
  },
  // hid:function(index){
  //   console.log(index)
  //   this.setData({
  //     s:index
  //   })
  // },
  loadMore(){
    //声明this为that
    let that=this;
    // //下拉一次count递增一次
    that.data.count++
    //请求数据
    wx.request({
      url: `https://api.apiopen.top/getJoke?page=1&count=${that.data.count}&type=video`,
      //成功保存返回的数据到list
      success(res) { 
        if(res.data.code===200){
          let rows=res.data.result
          // rows=that.data.list.concat(rows)
          that.setData({
            //动态保存返回的数据
            list:rows
          })
        } 
      }
    })
  },
  // touth(e){
  //   var idx=parseInt(e.target.dataset.idx)
  //   //获取video
  //   this.videoContext = wx.createVideoContext('myvideo'+idx)
  //   if (this.data.s==null){
  //     this.setData({
  //       s:idx
  //     })
  //   }
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //在页面加载时调用函数
    this.loadMore()
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
    //上拉触底时调用函数
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})