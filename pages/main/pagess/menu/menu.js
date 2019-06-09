// pages/main/pagess/menu/menu.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    all: ['小笼包', '煎饼', '紫薯包', '豆沙包','瓦罐汤', '酸辣粉', '石锅拌饭', '酸菜鱼', '培根西兰花', '红烧肉', '西红柿炒鸡蛋', '辣子鸡丁', '醋溜土豆丝','奶黄包', '泡面', '烧卖', '肉饼','木须肉', '糖醋里脊', '卤肉饭', '烤肉饭', '烤鸭', '木桶饭', '香河肉饼', '黄焖鸡米饭','云吞面', '帕尼尼', '手抓饼', '肠粉','外卖寿司', '外卖披萨', '外卖水果捞', '外卖汉堡', '外卖炸鸡', '外卖烤串', '外卖牛肉饭', '外卖驴肉火烧', '外卖麻辣烫','凉拌黄瓜', '玉米饼', '圆白菜','番茄菜花', '紫米粥', '香菇油菜','健身餐', '紫菜包饭', '蔬菜沙拉'],
    all_img: ['../../../../菜单类/南/早饭/南一包子.jpg',
      '../../../../菜单类/南/早饭/南一煎饼.jpg',
      '../../../../菜单类/南/早饭/南一紫薯包.jpg',
      '../../../../菜单类/南/早饭/南一豆沙包.jpg','../../../../菜单类/南/午晚/南一瓦罐汤.jpg',
      '../../../../菜单类/南/午晚/南二酸辣粉.jpg',
      '../../../../菜单类/南/午晚/南三石锅拌饭.jpg',
      '../../../../菜单类/南/午晚/南三金汤酸菜鱼.jpg',
      '../../../../菜单类/南/午晚/培根炒西兰花.jpg',
      '../../../../菜单类/南/午晚/红烧肉.jpg',
      '../../../../菜单类/南/午晚/西红柿炒鸡蛋.jpg',
      '../../../../菜单类/南/午晚/辣子鸡丁.jpg',
      '../../../../菜单类/南/午晚/醋溜土豆丝.jpg', '../../../../菜单类/北/早点/北一奶黄包.jpg',
      '../../../../菜单类/北/早点/北一泡面.jpg',
      '../../../../菜单类/北/早点/北一烧卖.jpg',
      '../../../../菜单类/北/早点/北一肉饼.jpg' ,'../../../../菜单类/北/午晚/北一木须肉.jpg',
      '../../../../菜单类/北/午晚/北一糖醋里脊.jpg',
      '../../../../菜单类/北/午晚/北二卤肉饭.jpg',
      '../../../../菜单类/北/午晚/北三烤肉饭.jpg',
      '../../../../菜单类/北/午晚/北三烤鸭.jpg',
      '../../../../菜单类/北/午晚/北三木桶饭.jpg',
      '../../../../菜单类/北/午晚/北三香河肉饼.jpg',
      '../../../../菜单类/北/午晚/黄焖鸡米饭.jpg','../../../../菜单类/外卖/早点/外卖云吞面.jpg',
      '../../../../菜单类/外卖/早点/外卖帕尼尼.jpg',
      '../../../../菜单类/外卖/早点/外卖手抓饼.jpg',
      '../../../../菜单类/外卖/早点/外卖肠粉.jpg','../../../../菜单类/外卖/午晚/外卖寿司.jpg',
      '../../../../菜单类/外卖/午晚/外卖披萨.jpg',
      '../../../../菜单类/外卖/午晚/外卖水果捞.jpg',
      '../../../../菜单类/外卖/午晚/外卖汉堡.jpg',
      '../../../../菜单类/外卖/午晚/外卖炸鸡.jpg',
      '../../../../菜单类/外卖/午晚/外卖烤串.jpg',
      '../../../../菜单类/外卖/午晚/外卖牛肉饭.jpg',
      '../../../../菜单类/外卖/午晚/外卖驴肉火烧.jpg',
      '../../../../菜单类/外卖/午晚/外卖麻辣烫.jpg','../../../../菜单类/南/减肥/南一凉拌黄瓜（减肥）.jpg',
      '../../../../菜单类/南/减肥/南一玉米饼（减肥）.jpg',
      '../../../../菜单类/南/减肥/素炒圆白菜（减肥）.jpg','../../../../菜单类/北/减肥/北一番茄菜花（减肥）.jpg',
      '../../../../菜单类/北/减肥/北一紫米粥（减肥）.jpg',
      '../../../../菜单类/北/减肥/北一香菇油菜（减肥）.jpg' ,'../../../../菜单类/外卖/减肥/外卖健身餐（减肥）.jpg',
      '../../../../菜单类/外卖/减肥/外卖紫菜包饭（减肥）.jpg',
      '../../../../菜单类/外卖/减肥/外卖蔬菜沙拉（减肥）.jpg'],
    // 一类
    south1: ['小笼包', '煎饼', '紫薯包','豆沙包'],
    south1_img: [
      '../../../../菜单类/南/早饭/南一包子.jpg',
     '../../../../菜单类/南/早饭/南一煎饼.jpg', 
     '../../../../菜单类/南/早饭/南一紫薯包.jpg', 
     '../../../../菜单类/南/早饭/南一豆沙包.jpg'],
    //另一类
    south23: ['瓦罐汤', '酸辣粉', '石锅拌饭', '酸菜鱼', '培根西兰花','红烧肉','西红柿炒鸡蛋','辣子鸡丁','酸溜土豆丝'],
    south23_img: [
      '../../../../菜单类/南/午晚/南一瓦罐汤.jpg',
      '../../../../菜单类/南/午晚/南二酸辣粉.jpg',
      '../../../../菜单类/南/午晚/南三石锅拌饭.jpg',
      '../../../../菜单类/南/午晚/南三金汤酸菜鱼.jpg',
      '../../../../菜单类/南/午晚/培根炒西兰花.jpg',
      '../../../../菜单类/南/午晚/红烧肉.jpg',
      '../../../../菜单类/南/午晚/西红柿炒鸡蛋.jpg',
      '../../../../菜单类/南/午晚/辣子鸡丁.jpg',
      '../../../../菜单类/南/午晚/醋溜土豆丝.jpg',],
      ///////////////////////
    north1: ['奶黄包', '泡面', '烧卖', '肉饼'],
    north1_img: [
      '../../../../菜单类/北/早点/北一奶黄包.jpg',
      '../../../../菜单类/北/早点/北一泡面.jpg',
      '../../../../菜单类/北/早点/北一烧卖.jpg',
      '../../../../菜单类/北/早点/北一肉饼.jpg'],
      ////////////////////////
    north23: ['木须肉', '糖醋里脊', '卤肉饭', '烤肉饭', '烤鸭','木桶饭','香河肉饼','黄焖鸡米饭'],
    north23_img: [
      '../../../../菜单类/北/午晚/北一木须肉.jpg',
      '../../../../菜单类/北/午晚/北一糖醋里脊.jpg',
      '../../../../菜单类/北/午晚/北二卤肉饭.jpg',
      '../../../../菜单类/北/午晚/北三烤肉饭.jpg',
      '../../../../菜单类/北/午晚/北三烤鸭.jpg',
      '../../../../菜单类/北/午晚/北三木桶饭.jpg',
      '../../../../菜单类/北/午晚/北三香河肉饼.jpg',
      '../../../../菜单类/北/午晚/黄焖鸡米饭.jpg'],
      ///////////////////////////
    out1: ['云吞面', '帕尼尼', '手抓饼', '肠粉'],
    out1_img: [
      '../../../../菜单类/外卖/早点/外卖云吞面.jpg',
      '../../../../菜单类/外卖/早点/外卖帕尼尼.jpg',
      '../../../../菜单类/外卖/早点/外卖手抓饼.jpg',
      '../../../../菜单类/外卖/早点/外卖肠粉.jpg'],
      /////////////////////////////
    out23: ['外卖寿司', '外卖披萨', '外卖水果捞', '外卖汉堡','外卖炸鸡','外卖烤串','外卖牛肉饭','外卖驴肉火烧','外卖麻辣烫'],
    out23_img: [
      '../../../../菜单类/外卖/午晚/外卖寿司.jpg',
      '../../../../菜单类/外卖/午晚/外卖披萨.jpg',
      '../../../../菜单类/外卖/午晚/外卖水果捞.jpg',
      '../../../../菜单类/外卖/午晚/外卖汉堡.jpg',
      '../../../../菜单类/外卖/午晚/外卖炸鸡.jpg',
      '../../../../菜单类/外卖/午晚/外卖烤串.jpg',
      '../../../../菜单类/外卖/午晚/外卖牛肉饭.jpg',
      '../../../../菜单类/外卖/午晚/外卖驴肉火烧.jpg',
      '../../../../菜单类/外卖/午晚/外卖麻辣烫.jpg'],
      ////////////////////////
    southd: ['凉拌黄瓜', '玉米饼', '圆白菜'], 
    southd_img: [
      '../../../../菜单类/南/减肥/南一凉拌黄瓜（减肥）.jpg',
      '../../../../菜单类/南/减肥/南一玉米饼（减肥）.jpg',
      '../../../../菜单类/南/减肥/素炒圆白菜（减肥）.jpg'],
      ////////////////////////////////
    northd: ['番茄菜花', '紫米粥', '香菇油菜'],
    northd_img: [
      '../../../../菜单类/北/减肥/北一番茄菜花（减肥）.jpg',
      '../../../../菜单类/北/减肥/北一紫米粥（减肥）.jpg',
      '../../../../菜单类/北/减肥/北一香菇油菜（减肥）.jpg'],
      //////////////////////
    outd: ['健身餐', '紫菜包饭', '蔬菜沙拉'],
    outd_img: [
      '../../../../菜单类/外卖/减肥/外卖健身餐（减肥）.jpg',
      '../../../../菜单类/外卖/减肥/外卖紫菜包饭（减肥）.jpg',
      '../../../../菜单类/外卖/减肥/外卖蔬菜沙拉（减肥）.jpg'],
    


    three:-1,
    four: -1,
    eight:-1,
    nine:-1,
    menuwhich:0,
    dd:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData)
    var that = this;
    that.setData({
      menuwhich:app.globalData.which,
    })
    var pages = getCurrentPages();
    var currPage = null;
    var prevPage = null;

    currPage = pages[pages.length - 1];
    prevPage = pages[pages.length - 2];
    var random3 = Math.floor(Math.random() * 3);
    var random4 = Math.floor(Math.random() * 4);
    var random8 = Math.floor(Math.random() * 8);
    var random9 = Math.floor(Math.random() * 9);
    var random0 = Math.floor(Math.random() * 47);
    this.setData({
      three: random3,
      four: random4,
      eight: random8,
      nine: random9,
      zero:random0,
    })
  },
  change: function () {
    this.onLoad()
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