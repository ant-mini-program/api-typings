import { expectAssignable } from 'tsd-lite';

let basicComponentList = [
  {
    type: '基础组件',
    list: [],
  },

];

if (my.ap) {
  basicComponentList = basicComponentList.concat([
    {
      type: '地图',
      list: [],
    },

  ]);
}

const extComponentList = [
  {
    type: '布局导航',
    list: [],
  },
];

Page({
  data: {
    top: 0,
    hot: [
      { name: 'ScrollView', url: '/page/component/scroll-view/scroll-view' },
    ],
    tabs: ['基础组件', '扩展组件'],
    activeTab: 0,
    basicComponentList,
    extComponentList,
    titleOpacity: 1,
    shadow: false,
  },
  options: {
    observers: true,
  },
  observers: {
    'field1,field2': function(val1, val2) {
      console.log(val1, val2)
    },
    '**': function(state) {
      console.log(state);
    }
  },
  onPageScroll(e) {
    expectAssignable<Function>(this.setData);
    expectAssignable<Function>(this.$spliceData);
    expectAssignable<Function>(this.$batchedUpdates);
    expectAssignable<Function>(this.createSelectorQuery);
    expectAssignable<Function>(this.createIntersectionObserver);
    expectAssignable<Function>(this.createMediaQueryObserver);
    expectAssignable<Function>(this.getTabBar);
    expectAssignable<Function>(this.$selectComponent);
    expectAssignable<Function>(this.$selectAllComponents);
    expectAssignable<Function>(this.hasMixin);
    expectAssignable<Function>(this.setUpdatePerformanceListener);
    const { scrollTop } = e;
    let titleOpacity = 1 - scrollTop * 0.02;
    let shadow = false;

    if (titleOpacity < 0) {
      titleOpacity = 0;
    }

    if (titleOpacity > 1) {
      titleOpacity = 1;
    }

    if (scrollTop > 80) {
      my.setNavigationBar({
        title: '小程序官方示例',
      });
    } else {
      my.setNavigationBar({
        title: ' ',
      });
    }

    if (scrollTop > 320) {
      shadow = true;
    } else {
      shadow = false;
    }

    this.setData({
      shadow,
      titleOpacity,
    });
  },
  onSearchBarTap() {
    my.navigateTo({
      url: '/page/common/search/search',
    });
  },
  onTabBarTap(e) {
    const { index } = e.target.dataset;
    this.setData({
      activeTab: index,
    });
  },
  onLoad() {
    my.getSystemInfo({
      success: (res) => {
        if (res.statusBarHeight && res.titleBarHeight) {
          this.setData({
            top: res.statusBarHeight + res.titleBarHeight,
          });
        }
      },
    });
  },
  goDevCenter() {
    my.navigateToMiniProgram({
      appId: '2018082061148052',
      path: 'pages/discover/discover',
      extraData: {
        from: 'miniDemo',
      },
    });
  },
  openPage(e) {
    my.navigateTo({
      url: e.target.dataset.url,
    });
  },
  onShow(){
    expectAssignable<Function>(this.pageRouter.navigateTo);
    expectAssignable<Function>(this.pageRouter.navigateBack);
    expectAssignable<Function>(this.pageRouter.reLaunch);
    expectAssignable<Function>(this.router.redirectTo);
    expectAssignable<Function>(this.router.switchTab);
  }
});
