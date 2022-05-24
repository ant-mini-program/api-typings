const basicContainers = [
  {
    name: '基础视图',
    thumb: '/image/icon/view.png',
    nameEn: 'View',
    path: '/page/component/view/view',
  },
  {
    name: '滚动视图',
    thumb: '/image/icon/scroll-view.png',
    nameEn: 'ScrollView',
    path: '/page/component/scroll-view/scroll-view',
  },
  {
    name: '滑动视图',
    thumb: '/image/icon/swiper.png',
    nameEn: 'Swiper',
    path: '/page/component/swiper/swiper',
  },
  {
    name: '可移动视图',
    thumb: '/image/icon/movable-view.png',
    nameEn: 'MovableView',
    path: '/page/component/movable-view/movable-view',
  },
  {
    name: '原生视图',
    thumb: '/image/icon/cover-view.png',
    nameEn: 'CoverView',
    path: '/page/component/cover-view/cover-view',
  },
];

const basicBasics = [
  {
    name: '文字',
    thumb: '/image/icon/text.png',
    nameEn: 'Text',
    path: '/page/component/text/text',
  },
  {
    name: '图标',
    thumb: '/image/icon/icon.png',
    nameEn: 'Icon',
    path: '/page/component/icon/icon',
  },
  {
    name: '富文本',
    thumb: '/image/icon/form.png',
    nameEn: 'RichText',
    path: '/page/component/rich-text/rich-text',
  },
];

const basicFeedBacks = [
  {
    name: '进度条',
    thumb: '/image/icon/progress.png',
    nameEn: 'Progress',
    path: '/page/component/progress/progress',
  },
];

const basicForms = [
  {
    name: '按钮',
    thumb: '/image/icon/button.png',
    nameEn: 'Button',
    path: '/page/component/button/button',
  },
  {
    name: '表单',
    thumb: '/image/icon/form.png',
    nameEn: 'Form',
    path: '/page/component/form/form',
  },
  {
    name: '标签',
    thumb: '/image/icon/label.png',
    nameEn: 'Label',
    path: '/page/component/label/label',
  },
  {
    name: '输入框',
    thumb: '/image/icon/input.png',
    nameEn: 'Input',
    path: '/page/component/input/input',
  },
  {
    name: '多行输入框',
    thumb: '/image/icon/textarea.png',
    nameEn: 'Textarea',
    path: '/page/component/textarea/textarea',
  },
  {
    name: '单选框',
    thumb: '/image/icon/radio.png',
    nameEn: 'Radio',
    path: '/page/component/radio/radio',
  },
  {
    name: '复选框',
    thumb: '/image/icon/checkbox.png',
    nameEn: 'Checkbox',
    path: '/page/component/checkbox/checkbox',
  },
  {
    name: '开关',
    thumb: '/image/icon/switch.png',
    nameEn: 'Switch',
    path: '/page/component/switch/switch',
  },
  {
    name: '滑动条',
    thumb: '/image/icon/slider.png',
    nameEn: 'Slider',
    path: '/page/component/slider/slider',
  },
  {
    name: '选择器视图',
    thumb: '/image/icon/picker-view.png',
    nameEn: 'PickerView',
    path: '/page/component/picker-view/picker-view',
  },
  {
    name: '选择器',
    thumb: '/image/icon/picker.png',
    nameEn: 'Picker',
    path: '/page/component/picker/picker',
  },
];

const basicNavigators = [
  {
    name: '导航',
    thumb: '/image/icon/navigator.png',
    nameEn: 'Navigator',
    path: '/page/component/navigator/navigator',
  },
];

const basicMedias = [
  {
    name: '图片',
    thumb: '/image/icon/image.png',
    nameEn: 'Image',
    path: '/page/component/image/image',
  },
];

const basicMaps = [
  {
    name: '地图',
    thumb: '/image/icon/map.png',
    nameEn: 'Map',
    path: '/page/component/map/map',
  },
];

const basicCanvas = [
  {
    name: '画布',
    thumb: '/image/icon/canvas.png',
    nameEn: 'Canvas',
    path: '/page/component/canvas/canvas',
  },
];

const basicOpens = [
  {
    name: '内嵌webview',
    thumb: '/image/icon/webview.png',
    nameEn: 'Webview',
    path: '/page/component/webview/webview',
  },
  {
    name: '关注生活号',
    thumb: '/image/icon/lifestyle.png',
    nameEn: 'Lifestyle',
    path: '/page/component/lifestyle/lifestyle',
  },
  {
    name: '智能客服',
    thumb: '/image/icon/contact-button.png',
    nameEn: 'contact-button',
    path: '/page/component/contact-button/contact-button',
  },
  {
    name: '收藏',
    thumb: '/image/icon/favorite.png',
    nameEn: 'Favorite',
    path: '/page/component/favorite/favorite',
  },
];

let basicComponentList = [
  {
    type: '视图容器',
    list: basicContainers,
  },
  {
    type: '基础组件',
    list: basicBasics,
  },
  {
    type: '反馈',
    list: basicFeedBacks,
  },
  {
    type: '表单',
    list: basicForms,
  },
  {
    type: '导航',
    list: basicNavigators,
  },
  {
    type: '媒体',
    list: basicMedias,
  },
  {
    type: '画布',
    list: basicCanvas,
  },
];

if (my.ap) {
  basicComponentList = basicComponentList.concat([
    {
      type: '地图',
      list: basicMaps,
    },
    {
      type: '开放组件',
      list: basicOpens,
    },
  ]);
}

const extContainers = [
  {
    name: '容器',
    thumb: '/image/icon/container.png',
    nameEn: 'Container',
    path: '/page/component/container/index',
  },
  {
    name: '模块标题',
    thumb: '/image/icon/navigator.png',
    nameEn: 'Title',
    path: '/page/component/title/index',
  },
  {
    name: '列表',
    thumb: '/image/icon/form.png',
    nameEn: 'List',
    path: '/page/component/list/list',
  },
  {
    name: '列表元素',
    thumb: '/image/icon/list-item.png',
    nameEn: 'List-item',
    path: '/page/component/list-item/index',
  },
  {
    name: '顶部选项卡',
    thumb: '/image/icon/tabs.png',
    nameEn: 'Tabs',
    path: '/page/component/tabs/tabs',
  },
  {
    name: '纵向选项卡',
    thumb: '/image/icon/vtabs.png',
    nameEn: 'Vtabs',
    path: '/page/component/vtabs/vtabs',
  },
  {
    name: '卡片',
    thumb: '/image/icon/card.png',
    nameEn: 'Card',
    path: '/page/component/card/card',
  },
  {
    name: '票券',
    thumb: '/image/icon/coupon.png',
    nameEn: 'Coupon',
    path: '/page/component/coupon/index',
  },
  {
    name: '宫格',
    thumb: '/image/icon/grid.png',
    nameEn: 'Grid',
    path: '/page/component/grid/grid',
  },
  {
    name: '步骤条',
    thumb: '/image/icon/steps.png',
    nameEn: 'Steps',
    path: '/page/component/steps/steps',
  },
  {
    name: '页脚',
    thumb: '/image/icon/footer.png',
    nameEn: 'Footer',
    path: '/page/component/footer/footer',
  },
  {
    name: '协议',
    thumb: '/image/icon/terms.png',
    nameEn: 'Terms',
    path: '/page/component/terms/index',
  },
  {
    name: 'Flex 布局',
    thumb: '/image/icon/view.png',
    nameEn: 'Flex',
    path: '/page/component/flex/flex',
  },
  {
    name: '折叠面板',
    thumb: '/image/icon/collapse.png',
    nameEn: 'Collapse',
    path: '/page/component/collapse/index',
  },
];

const pops = [
  {
    name: '气泡',
    thumb: '/image/icon/popover.png',
    nameEn: 'Popover',
    path: '/page/component/popover/popover',
  },
  {
    name: '筛选',
    thumb: '/image/icon/filter.png',
    nameEn: 'Filter',
    path: '/page/component/filter/filter',
  },
  {
    name: '对话框',
    thumb: '/image/icon/modal.png',
    nameEn: 'Modal',
    path: '/page/component/modal/modal',
  },
  {
    name: '弹出菜单',
    thumb: '/image/icon/popup.png',
    nameEn: 'Popup',
    path: '/page/component/popup/popup',
  },
];

const extForms = [
  {
    name: '文本输入',
    thumb: '/image/icon/input.png',
    nameEn: 'Input-item',
    path: '/page/component/input-item/input-item',
  },
  {
    name: '验证码框',
    thumb: '/image/icon/verifycode.png',
    nameEn: 'Verify-code',
    path: '/page/component/verify-code/index',
  },
  {
    name: '选择输入',
    thumb: '/image/icon/picker.png',
    nameEn: 'Picker-item',
    path: '/page/component/picker-item/index',
  },
  {
    name: '长密码框',
    thumb: '/image/icon/longpassword.png',
    nameEn: 'Long-password',
    path: '/page/component/long-password/index',
  },
  {
    name: '多行输入',
    thumb: '/image/icon/textarea.png',
    nameEn: 'Multi-liner',
    path: '/page/component/multi-liner/index',
  },
  {
    name: '金额输入',
    thumb: '/image/icon/amount-input.png',
    nameEn: 'Amount-input',
    path: '/page/component/amount-input/amount-input',
  },
  {
    name: '按钮',
    thumb: '/image/icon/button.png',
    nameEn: 'Button',
    path: '/page/component/button-ali-ui/index',
  },
  {
    name: '开关',
    thumb: '/image/icon/switch.png',
    nameEn: 'Am-switch',
    path: '/page/component/switch-ali-ui/index',
  },
  {
    name: '复选框',
    thumb: '/image/icon/checkbox-aliui.png',
    nameEn: 'Am-checkbox',
    path: '/page/component/am-checkbox/am-checkbox',
  },
  {
    name: '单选框',
    thumb: '/image/icon/radio-aliui.png',
    nameEn: 'Am-radio',
    path: '/page/component/radio-ali-ui/index',
  },
  {
    name: '搜索框',
    thumb: '/image/icon/search-bar.png',
    nameEn: 'Search-bar',
    path: '/page/component/search-bar/search-bar',
  },
];

const results = [
  {
    name: '异常页',
    thumb: '/image/icon/page-result.png',
    nameEn: 'Page-result',
    path: '/page/component/page-result/page-result',
  },
  {
    name: '结果页',
    thumb: '/image/icon/message.png',
    nameEn: 'Message',
    path: '/page/component/message/message',
  },
];

const tips = [
  {
    name: '引导',
    thumb: '/image/icon/tips.png',
    nameEn: 'Tips',
    path: '/page/component/tips/tips',
  },
  {
    name: '通告栏',
    thumb: '/image/icon/notice.png',
    nameEn: 'Notice',
    path: '/page/component/notice/notice',
  },
  {
    name: '徽标',
    thumb: '/image/icon/view.png',
    nameEn: 'Badge',
    path: '/page/component/badge/badge',
  },
  {
    name: '标签',
    thumb: '/image/icon/tag.png',
    nameEn: 'Tag',
    path: '/page/component/tag/index',
  },
  {
    name: '背景蒙层',
    thumb: '/image/icon/mask.png',
    nameEn: 'Mask',
    path: '/page/component/mask/mask',
  },
  {
    name: '遮罩引导',
    thumb: '/image/icon/guide.png',
    nameEn: 'Guide',
    path: '/page/component/guide/guide',
  },
  {
    name: '头像',
    thumb: '/image/icon/avatar.png',
    nameEn: 'Avatar',
    path: '/page/component/avatar/index',
  },
];

const gestures = [
  {
    name: '可滑动单元格',
    thumb: '/image/icon/swipe-action.png',
    nameEn: 'Swipe-action',
    path: '/page/component/swipe-action/swipe-action',
  },
];

const inputs = [];

const others = [
  {
    name: '分页符',
    thumb: '/image/icon/pagination.png',
    nameEn: 'Pagination',
    path: '/page/component/pagination/index',
  },
  {
    name: '字母检索表',
    thumb: '/image/icon/alphabet.png',
    nameEn: 'Alphabet',
    path: '/page/component/alphabet/index',
  },
  {
    name: '步进器',
    thumb: '/image/icon/stepper.png',
    nameEn: 'Stepper',
    path: '/page/component/stepper/stepper',
  },
  {
    name: '日历',
    thumb: '/image/icon/calendar.png',
    nameEn: 'Calendar',
    path: '/page/component/calendar/calendar',
  },
  {
    name: '图标',
    thumb: '/image/icon/icon.png',
    nameEn: 'Am-icon',
    path: '/page/component/am-icon/am-icon',
  },
  {
    name: 'loading 加载',
    thumb: '/image/icon/loading.png',
    nameEn: 'Loading',
    path: '/page/component/loading/loading',
  },
];

const extComponentList = [
  {
    type: '布局导航',
    list: extContainers,
  },
  {
    type: '操作浮层',
    list: pops,
  },
  {
    type: '结果类',
    list: results,
  },
  {
    type: '提示引导',
    list: tips,
  },
  {
    type: '表单类',
    list: extForms,
  },
  {
    type: '手势类',
    list: gestures,
  },
  {
    type: '其他',
    list: others,
  },
];

Page({
  data: {
    top: 0,
    hot: [
      { name: 'ScrollView', url: '/page/component/scroll-view/scroll-view' },
      { name: '地图', url: '/page/component/map/map' },
      { name: 'Icon', url: '/page/component/icon/icon' },
      { name: 'Card', url: '/page/component/card/card' },
      { name: '获取授权码', url: '/page/API/get-auth-code/get-auth-code' },
      { name: 'Popup', url: '/page/component/popup/popup' },
      { name: '发起HTTP请求', url: '/page/API/request/request' },
      { name: '画布', url: '/page/component/canvas/canvas' },
      { name: '导航', url: '/page/API/navigator/navigator' },
    ],
    tabs: ['基础组件', '扩展组件'],
    activeTab: 0,
    basicComponentList,
    extComponentList,
    titleOpacity: 1,
    shadow: false,
  },
  onPageScroll(e) {
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
