import { expectType, expectAssignable } from 'tsd-lite';

const mixins1 = {
  data: {
    b: 1,
  },
} as MiniProgram.Mixin.IMixin4Legacy<
  {
    b: number;
  },
  {},
  {}
>;

Component({
  mixins: [mixins1, { didMount() {}, methods: { mixinMethod() {} } }], // mixins 方便复用代码
  data: { x: 1 }, // 组件内部数据
  props: { y: 1 }, // 可给外部传入的属性添加默认值
  didMount() {
    expectType<number>(this.data.x);
    expectAssignable<Function>(this.mixinMethod);
    expectAssignable<number>(this.data.b);
  }, // 生命周期函数
  didUpdate() {},
  didUnmount() {},
  methods: {
    // 自定义方法
    handleTap() {
      this.setData({ x: this.data.x + 1 }); // 可使用 setData 改变内部属性
    },
  },
});
