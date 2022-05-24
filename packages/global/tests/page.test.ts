///<reference types='../../alipay' />

Page({
  data: {
    title: 'Alipay',
    arr: [],
  },
  doIt() {
    this.setData({
      arr: [...this.data.arr, 1],
    });
  },
  onLoad(query) {
    // 页面加载
  },
  onShow() {
    // 页面显示
  },
  onReady() {
    // 页面加载完成
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      path: '/pages/index/index',
      title: 'Ant Group',
      desc: '相信相信的力量',
    };
  },
  // 事件处理函数对象
  events: {
    onBack() {
      console.log('onBack');
    },
  },
  // 自定义事件处理函数
  viewTap() {
    this.setData({
      text: 'Set data for update.',
    });
  },
  // 自定义事件处理函数
  go() {
    // 带参数的跳转，从 page/ui/index 的 onLoad 函数的 query 中读取 type
    my.navigateTo({ url: '/page/ui/index?type=mini' });
  },
  // 自定义数据对象
  customData: {
    name: 'alipay',
  },
});
