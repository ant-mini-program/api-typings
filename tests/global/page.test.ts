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
  onPageScroll(e) {
    expectAssignable<Function>(this.setData)

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
});
