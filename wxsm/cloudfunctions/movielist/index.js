// // 云函数入口文件
// const cloud = require('wx-server-sdk')

// cloud.init()

// // 云函数入口函数
// exports.main = async (event, context) => {
//   const wxContext = cloud.getWXContext()

//   return {
//     event,
//     openid: wxContext.OPENID,
//     appid: wxContext.APPID,
//     unionid: wxContext.UNIONID,
//   }
// }

// 云函数movielist
// 此函功能：发送请求，获取最新热映的电影列表
// 1.引入第三方ajax库request-promise 
var rp = require("request-promise");
// 2.创建main函数
exports.main = async (event, context) => {
  // 3.创建变量url请求地址
  var url = `https://api.apiopen.top/getJoke?page=1&count=200&type=video`;
  // 4.请求 rp函数发送请求并返回电影列表调用者
  return rp(url) //发送请求
    .then(res => { //请求成功
      return res; //返回结果
    })
    .catch(err => { //出错
      console.log(err);//出错原因
    })
}