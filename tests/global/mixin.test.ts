import { expectType, expectAssignable } from 'tsd-lite';
import type { IMixin4Legacy } from '../../packages/alipay';
const mixin = Mixin({
  data: {
    aaa: 1,
  },
  didMount() {
    expectType<number>(this.data.aaa);
    expectAssignable<Function>(this.hasMixin);
  },
});

// 传统的mixins用法
const mixin4legacy = {
  data: {
    aaa: 1,
  },
  onInit() {
    expectType<number>(this.data.aaa);
  },
} as IMixin4Legacy<
  {
    aaa: number;
  },
  {},
  {}
>;

type ItCanExtractValuesOfTuple = MiniProgram.TExtractValuesOfTuple<
  [
    IMixin4Legacy<
      {
        aaa: number;
      },
      {},
      {}
    >
  ]
>;

type ItCanExtractDataFromMixin =
  MiniProgram.TGetMixinData<ItCanExtractValuesOfTuple>;

expectAssignable<ItCanExtractDataFromMixin>({ aaa: 1 });

Component({
  data: {
    b: 1,
  },
  // Component的mixins参数即支持传统的直接传入js object 也支持传入 Mixin()实例
  mixins: [mixin4legacy, mixin],
  didMount() {
    expectType<number>(this.data.aaa);
    expectType<number>(this.data.b);
  },
});

Mixin({
  props: {},
  data: {},
  observers: {},
  onInit() {},
  deriveDataFromProps(nextProps) {},
  didMount() {},
  didUpdate(prevProps, prevData) {},
  didUnmount() {},
  onError() {},

  // Mixin的mixins参数只支持传入 Mixin()实例
  mixins: [mixin],
  methods: {
    methodFromMixin() {},
  },
  definitionFilter(defFields, definitionFilterArr) {},
  lifetimes: {
    created() {},
    attached() {},
    ready() {},
    moved() {},
    detached() {},
  },
  pageEvents: {
    onLoad(query) {},
    onKeyboardHeight(event) {},
    onSelectedTabItemTap(event) {},
  },
  relations: {
    '.dsd': {
      type: 'descendant',
      target: mixin,
    },
  },
});
