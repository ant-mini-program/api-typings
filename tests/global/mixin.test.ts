const mixin = Mixin({
  data: {
    aaa: 1,
  },
  onInit() {

  },
  props: {

  },
});
// 传统的mixins用法 
const mixin4legacy = {
  onInit() {}
};

Component({
  // Component的mixins参数即支持传统的直接传入js object 也支持传入 Mixin()实例
  mixins: [mixin4legacy, mixin]
});

Mixin({
  definitionFilter(defFields, definitionFilterArr) {

  },
  // Mixin的mixins参数只支持传入 Mixin()实例
  mixins: [mixin],
})