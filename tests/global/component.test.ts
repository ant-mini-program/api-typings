import { expectType, expectAssignable } from 'tsd-lite';

const mixin = Mixin({});

Component({
  mixins: [],
  test: 111,
  data() {
    expectAssignable<void>(this);
    return {
      x: 1,
      b: { c: 1 },
    };
  },
  options: {
    observers: true,
    externalClasses: true,
    lifetimes: true,
    relations: true,
  },
  observers: {
    'field1,field2': function(val1, val2) {
      console.log(val1, val2)
    },
    '**': function(state) {
      console.log(state);
    }
  },
  props: { y: 1, b: { c: 1 } },
  onInit() {
    expectAssignable<String>(this.is);
    expectAssignable<Object>(this.$page);
    expectAssignable<Number>(this.$id);
    expectAssignable<Number>(this.test);
  },
  didMount() {
    expectType<number>(this.data.x);
    
    expectAssignable<Function>(this.handleTap);

    expectAssignable<Function>(this.setData);
    expectAssignable<Function>(this.$spliceData);
    expectAssignable<Function>(this.selectComposedParentComponent);
    expectAssignable<Function>(this.selectComposedParentComponent().selectOwnerComponent);
    expectAssignable<Function>(this.selectOwnerComponent);
    expectAssignable<Function>(this.selectOwnerComponent().selectComposedParentComponent);
    expectAssignable<Function>(this.getRelationNodes);

    expectAssignable<Function>(this.createSelectorQuery);
    expectAssignable<Function>(this.createIntersectionObserver);
    expectAssignable<Function>(this.createMediaQueryObserver);
    expectAssignable<Function>(this.getTabBar);
    expectAssignable<Function>(this.$selectComponent);
    expectAssignable<Function>(this.$selectAllComponents);
    expectAssignable<Function>(this.hasMixin);
    expectAssignable<Function>(this.setUpdatePerformanceListener);

    expectType<{ x: number; b: { c: number } }>(this.data);
    expectType<Readonly<{ y: number; b: { c: number } }>>(this.props);
    expectAssignable<Function>(this.router.navigateTo);
    expectAssignable<Function>(this.router.navigateBack);
    expectAssignable<Function>(this.router.reLaunch);
    expectAssignable<Function>(this.pageRouter.redirectTo);
    expectAssignable<Function>(this.pageRouter.switchTab);
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleTap() {
      this.setData({ x: this.data.x + 1 });
    },
  },
  externalClasses: ['am-button'],
  lifetimes: {
    created() {
        
    },
    attached() {
        
    },
    ready() {
        
    },
    moved() {
        
    },
    detached() {
        
    },
  },
  relations: {
    './ccc': {
      type: 'parent',
      linked(target) {

      },
      unlinked(target) {
          
      },
      linkChanged(target) {
          
      },
      target: mixin,
    },
    './ddd': {
      type: 'parent',
      linked(target) {

      },
      unlinked(target) {
          
      },
      linkChanged(target) {
          
      },
    }
  },
  pageEvents: {
    onLoad(query) {
        
    },
    onShow() {
        
    },
    onReady() {
        
    },
    onHide() {
        
    },
    onUnload() {
        
    },
    onBack() {
        
    },
    onKeyboardHeight(event) {
      expectAssignable<Number>(event.height);
    },
    onOptionMenuClick() {
      
    },
    onPullDownRefresh(event) {
      expectAssignable<String>(event.from);
    },
    onPageScroll(event) {
      expectAssignable<Number>(event.scrollHeight);
    },
    onTabItemTap(event) {
      expectAssignable<Number>(event.index);
    },
    beforeTabItemTap() {
        
    },
    onResize(event) {
      expectAssignable<Number>(event.size.windowHeight);
      expectAssignable<Number>(event.size.windowWidth);
    },
    onSelectedTabItemTap(event) {
      expectAssignable<Number>(event.index);
    },
  }
});


Component<{}, {}, {}, {}, {test: number}>({
  test: 111,
  onInit() {
    expectAssignable<Number>(this.test);
  }
})
