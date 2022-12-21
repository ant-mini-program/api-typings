import { expectType, expectAssignable } from 'tsd-lite';

Component({
  mixins: [],
  data: {
    x: 1,
    b: { c: 1 },
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
  props: { y: 1, b: { c: 1 } },
  didMount() {
    expectType<number>(this.data.x);
    expectAssignable<Function>(this.setData);
    expectAssignable<Function>(this.handleTap);
    expectAssignable<Function>(this.$spliceData);
    expectAssignable<Function>(this.getTabBar);
    expectAssignable<Function>(this.createIntersectionObserver);
    expectAssignable<Function>(this.createSelectorQuery);
    expectAssignable<Function>(this.selectComposedParentComponent);
    expectAssignable<Function>(this.selectComposedParentComponent().selectOwnerComponent);
    expectAssignable<Function>(this.selectOwnerComponent);
    expectAssignable<Function>(this.selectOwnerComponent().selectComposedParentComponent);

    expectType<{ x: number; b: { c: number } }>(this.data);
    expectType<Readonly<{ y: number; b: { c: number } }>>(this.props);
    expectAssignable<Function>(this.router.navigateTo);
    expectAssignable<Function>(this.router.navigateBack);
    expectAssignable<Function>(this.router.reLaunch);
    expectAssignable<Function>(this.router.redirectTo);
    expectAssignable<Function>(this.router.switchTab);
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleTap() {
      this.setData({ x: this.data.x + 1 });
    },
  },
});
