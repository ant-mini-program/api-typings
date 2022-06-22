import { expectType, expectAssignable } from 'tsd-lite';

declare global {
  interface IGlobalMiniProgramExtraThis4Component {
    a: () => {};
  }
}

Component({
  mixins: [],
  data: { x: 1 },
  props: { y: 1 },
  didMount() {
    expectType<number>(this.data.x);
    expectType<number>(this.props.y);
    expectAssignable<Function>(this.a);
    expectAssignable<Function>(this.setData);
  },
});
