declare namespace MiniProgram.Component {
  interface IGetTabBarMethod {
    /**
     * 获取自定义 tabBar 实例
     * @version 2.7.20+ 可以通过判断 `this.getTabBar` 是否为一个函数做兼容性处理
     */
    getTabBar<
      T extends any = IInstance<
        UnknownRecord,
        UnknownRecord,
        UnknownRecord,
        UnknownRecord,
        UnknownRecord,
        []
      >
    >(): T | undefined;
  }

  interface IElementQuery {
    /**
     * 创建 SelectorQuery 对象实例。
     * @version 基础库 2.7.4 起支持。
     */
    createSelectorQuery(): any;
    /**
     * 创建 IntersectionObserver 对象实例。
     * @version 基础库 2.7.4 起支持。
     */
    createIntersectionObserver(): any;
  }

  interface ISelectComponent {
    /**
     * 选取当前组件的创建者（即 AXML 中定义了此组件的组件），返回它的组件实例对象（会被 `ref` 影响）。
     *
     * @version 基础库 2.7.22 起支持。
     * @returns undefined | null | 页面 | 自定义组件 | 用户 ref 的 Object
     */
    selectOwnerComponent(): any;
    /**
     * 选取当前组件在事件冒泡路径上的父组件，返回它的组件实例对象（会被 `ref` 影响）。
     *
     * @version 基础库 2.7.22 起支持。
     * @returns undefined | null | 页面 | 自定义组件 | 用户 ref 的 Object
     */
    selectComposedParentComponent(): any;
  }
  interface IHasMixin {
    /**
     * 检查组件是否具有 mixin(须是通过Mixin()创建的mixin实例)。
     * 若自定义组件注册时传入了ref以指定组件返回值，则可通过hasMixin('ref')检查到
     * @version 基础库 2.8.2
     * @return boolean
     */
    hasMixin(mixin: Mixin.IMixinIdentifier): boolean
  }

  /**
   * Additional properties in Component instance, for module augmentation
   */
  interface IComponentInstanceAdditionalProperties<
    ExtraOptions extends UnknownRecord
  > {}

  interface ILifetimes {
    /**
     * 在组件实例刚刚被创建时执行
     */
    created(): void
    /**
     * 在组件实例进入页面节点树时执行
     */
    attached(): void
    /**
     * 在组件在视图层布局完成后执行
     */
    ready(): void
    /**
     * 在组件实例被移动到节点树另一个位置时执行
     */
    moved(): void
    /**
     * 在组件实例被从页面节点树移除时执行
     */
    detached(): void
  }

  interface IRelationOption {
    /**
     * 与目标组件的相对关系
     */
    type: 'parent' | 'child' | 'ancestor' | 'descendant';
    /**
     * 关系生命周期函数，目标组件建立时触发，触发时机在组件 attached 生命周期之后。
     */
    linked?(target: IInstance<
      UnknownRecord,
      UnknownRecord,
      UnknownRecord,
      UnknownRecord,
      UnknownRecord,
      []
    >): void
    /**
     * 关系生命周期函数，目标组件移动时触发，触发时机在组件 moved 生命周期之后。
     */
    linkChanged?(target: IInstance<
      UnknownRecord,
      UnknownRecord,
      UnknownRecord,
      UnknownRecord,
      UnknownRecord,
      []
    >): void
    /**
     * 关系生命周期函数，目标组件销毁时触发，触发时机在组件 detached 生命周期之后
     */
    unlinked?(target: IInstance<
      UnknownRecord,
      UnknownRecord,
      UnknownRecord,
      UnknownRecord,
      UnknownRecord,
      []
    >): void
    /**
     * 根据组件使用的 Mixin 来建立关系
     * 如果这一项被设置，则它表示关联的目标节点所应具有的Mixin实例，所有拥有这一Mixin实例的组件节点都会被关联
     */
    target?: string
  }

  /**
   * component\/*\/index.js Component(options) 中 options 的内部类型
   * ref: https://opendocs.alipay.com/mini/framework/component_object
   */
  interface IOptions<
    Data,
    Props,
    Methods,
    ExtraOptions extends UnknownRecord,
    Mixin extends any[]
  > {
    /**
     * 组件内部状态
     */
    data: Data | (() => Data);
    /**
     * 为外部传入的数据设置默认值
     */
    props: Props;
    /**
     * 组件生命周期函数，组件创建时触发
     * @version 1.14.0+
     */
    onInit(): void;
    /**
     * 组件生命周期函数，组件创建时和更新前触发
     *  @version 1.14.0+
     */
    deriveDataFromProps(nextProps: Partial<Props>): void;
    /**
     * 组件生命周期函数，组件创建完毕时触发
     */
    didMount(): void;
    /**
     * 组件生命周期函数，组件更新完毕时触发
     */
    didUpdate(prevProps: Partial<Props>, prevData: Partial<Data>): void;
    /**
     * 组件生命周期函数，组件删除时触发
     */
    didUnmount(): void;
    /**
     * 组件间代码复用机制
     */
    mixins: Mixin;
    /**
     * 组件的方法，可以是事件响应函数或任意的自定义方法
     * Object of Functions
     */
    methods: Methods;
    /**
     * 指定组件被ref引用时的返回值
     * @version 1.18.0+
     */
    ref(): void;
    /**
     * 监听所属页面除onShareAppMessage外的页面的生命周期函数以及页面事件处理函数。
     * @version 2.8.5
     */
    pageEvents: Partial<Page.Events>;
    /**
     * 开启某些功能项
     */
    options: Partial<{
      /**
       * 开启 observers 数据变化观测器
       * @version 2.8.1
       */
      observers: boolean;
      /**
       * 开启 lifetimes 节点树维度生命周期
       * @version 2.8.5
       */
      lifetimes: boolean;
      /**
       * 开启 relations 组件间关系
       * @version 2.8.5
       */
      relations: boolean;
      /**
       * 开启 externalClasses 外部样式类
       * @version 2.8.5
       */
      externalClasses: boolean;
    }>,
    /**
     * 数据变化观测器，观测和响应任何属性和数据字段的变化
     * @version 2.8.1
     */
    observers: Record<string, (...args: any[]) => void>;
    /**
     * 节点树维度生命周期
     * @version 2.8.5
     */
    lifetimes: Partial<ILifetimes>;
    /**
     * 组件间关系
     * @version 2.8.5
     */
    relations: Record<string, IRelationOption>;
    /**
     * 组件接受的外部样式类
     * @version 2.8.5
     */
    externalClasses: string[];
  }
  /**
   * 用户可配置的 Component Options
   */
  type IUserComponentOptions<
    Data,
    Props,
    Methods,
    ExtraThis,
    ExtraOptions extends UnknownRecord,
    Mixin extends any[]
  > = {
    [P in keyof ExtraOptions]: P extends keyof IOptions<
      Data,
      Props,
      Methods,
      ExtraOptions,
      Mixin
    >
      ? unknown
      : ExtraOptions[P];
  } & Partial<IOptions<Data, Props, Methods, ExtraOptions, Mixin>> &
    ThisType<
      IInstance<Data, Props, Methods, ExtraThis, ExtraOptions, Mixin>
    >;

  /**
   * Public instance
   */
  type IInstance<
    Data,
    Props,
    Methods,
    ExtraThis,
    ExtraOptions extends UnknownRecord,
    Mixin extends any[]
  > = {
    data: Data & UnionToIntersection<TGetMixinData<TExtractValuesOfTuple<Mixin>>>;
    props: Readonly<
      Props & UnionToIntersection<TGetMixinProps<TExtractValuesOfTuple<Mixin>>>
    >;
    } & Methods &
    UnionToIntersection<TGetMixinMethods<TExtractValuesOfTuple<Mixin>>> &
    ExtraThis &
    Omit<
      ExtraOptions,
      keyof IOptions<Data, Props, Methods, ExtraOptions, Mixin>
    > &
    IComponentInstanceAdditionalProperties<ExtraOptions> & {
      /**
       * 组件路径
       */
      readonly is: string;
      /**
       * 组件 id，可直接在组件 axml 中渲染值
       */
      readonly $id: number;
      /**
       * 组件所属页面实例
       */
      readonly $page: Record<string, any>;
      /**
       * 将数据从逻辑层发送到视图层
       * @param data
       * @param callback
       */
      setData(
        data: RecursivePartialAndDynamic<Data> & Record<string, unknown>,
        callback?: () => void
      ): void;
      /**
       * $spliceData 同样用于将数据从逻辑层发送到视图层，但是相比于 setData，在处理长列表的时候，其具有更高的性能。
       * @param data
       * @param callback
       * @version 1.7.2+ 可以使用 my.canIUse('page.$spliceData') 做兼容性处理
       */
      $spliceData(
        data: RecursivePartialAndDynamic<Data> & Record<string, unknown>,
        callback?: () => void
      ): void;
    } & IGetTabBarMethod &
    IElementQuery &
    ISelectComponent &
    IHasMixin;
  interface Constructor {
    <
      Data = {},
      Props = {},
      Methods = {},
      ExtraThis = {},
      ExtraOptions extends Record<string, unknown> = {},
      Mixin extends any[] = any[]
    >(
      opts: IUserComponentOptions<
        Data,
        Props,
        Methods,
        ExtraThis & IGlobalMiniProgramExtraThis4Component,
        ExtraOptions,
        Mixin
      >
    ): void;
  } 
}