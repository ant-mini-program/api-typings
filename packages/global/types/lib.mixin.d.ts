declare namespace MiniProgram.Mixin {
  /**
   * 传统的组件间代码复用，仅Component的mixins参数支持传入，Mixin参数mixins 则只支持传入Mixin()的返回值
   */
  type IMixin4Legacy<
    Data extends UnknownRecord,
    Props extends UnknownRecord,
    Methods extends UnknownRecord,
    ExtraThis extends UnknownRecord = UnknownRecord,
    ExtraOptions extends UnknownRecord = UnknownRecord
  > = Partial<
    MiniProgram.Component.IOptions<Data, Props, Methods, ExtraOptions, []>
  > &
    ThisType<
      MiniProgram.Component.IInstance<
        Data,
        Props,
        Methods,
        ExtraThis & IGlobalMiniProgramExtraThis4Component,
        ExtraOptions,
        []
      >
    >;
  /**
   * Mixin() 返回值
   */
  type IMixinIdentifier = string;

  type IMixinDefinitionFilter = <
    T extends
      | Component.IOptions<any, any, any, any, any>
      | IMixinOptions<any, any, any, any, any, any>
      | Page.IOptions<any, any>
  >(
    /** 使用该 mixin 的 component/mixin 的定义对象 */
    defFields: T,
    /** 该 mixin 所使用的 mixin 的 definitionFilter 函数列表 */
    definitionFilterArr?: IMixinDefinitionFilter[] | void
  ) => void;

  /**
   * Mixin构造器参数
   */
  type IMixinOptions<
    Data,
    Props,
    Methods,
    ExtraThis,
    ExtraOptions extends UnknownRecord,
    Mixins extends Array<ReturnType<Constructor>>
  > = {
    [P in keyof ExtraOptions]: P extends
      | keyof Component.IOptions<Data, Props, Methods, ExtraOptions, Mixins>
      | 'definitionFilter'
      | 'mixins'
      ? unknown
      : ExtraOptions[P];
  } & Omit<
    Partial<
      Component.IOptions<Data, Props, Methods, ExtraOptions, IMixinIdentifier[]>
    >,
    'ref' | 'options' | 'externalClasses'
  > &
    Partial<{
      /**
       * 定义段过滤器，用于自定义组件扩展
       */
      definitionFilter: IMixinDefinitionFilter;
      /**
       * 组件间代码复用，用于Mixin()的mixins 只支持传入Mixin()注册生成的返回值。不支持传入 js Object
       */
      mixins: Mixins;
    }> &
    ThisType<
      Component.IInstance<
        Data,
        Props,
        Methods,
        ExtraThis,
        ExtraOptions,
        IMixinIdentifier[]
      >
    >;

  interface Constructor {
    <
      Data = UnknownRecord,
      Props = UnknownRecord,
      Methods = UnknownRecord,
      ExtraThis = UnknownRecord,
      ExtraOptions extends UnknownRecord = UnknownRecord,
      Mixins extends IMixinIdentifier[] = []
    >(
      options: IMixinOptions<
        Data,
        Props,
        Methods,
        ExtraThis & IGlobalMiniProgramExtraThis4Component,
        ExtraOptions,
        Mixins
      >
    ): IMixinIdentifier;
  }
}
