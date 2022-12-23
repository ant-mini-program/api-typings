declare namespace MiniProgram.Component {
  /**
   * Additional properties in Component instance, for module augmentation
   */
  interface IComponentInstanceAdditionalProperties<
    ExtraOptions extends UnknownRecord
  > {}

  interface IMediaQueryObserver {
    /**
     * @summary 开始监听页面 media query 变化情况
     * @param descriptor media query 描述符
     * @param callback 监听 media query 状态变化的回调函数
     * @see "https://opendocs.alipay.com/mini/05awpq"
     */
    observe: (descriptor: IMediaQueryObserveDescriptor, callback: IMediaQueryObserveCallback) => void;
    /**
     * @summary 停止监听。回调函数将不再触发
     * @see "https://opendocs.alipay.com/mini/05bb9o"
     */
    disconnect: () => void;
  }

  type IMediaQueryObserveCallback = (payload: IMediaQueryObserveCallbackResponse) => void;

  interface IMediaQueryObserveCallbackResponse {
    /**
     * @summary 页面的当前状态是否满足所指定的 media query
     */
    matches: boolean;
  }
  interface IMediaQueryObserveDescriptor {
    /**
     * @summary 页面最小宽度（ px 为单位）
     */
    minWidth?: number;
    /**
     * @summary 页面最大宽度（ px 为单位）
     */
    maxWidth?: number;
    /**
     * @summary 页面宽度（ px 为单位）
     */
    width?: number;
    /**
     * @summary 页面最小高度（ px 为单位）
     */
    minHeight?: number;
    /**
     * @summary 页面最大高度（ px 为单位）
     */
    maxHeight?: number;
    /**
     * @summary 页面高度（ px 为单位）
     */
    height?: number;
    /**
     * @summary 屏幕方向（ landscape 或 portrait ）
     * - landscape viewport 处于横向，即宽度大于高度。
     * - portrait viewport 处于纵向，即高度大于等于宽度。
     */
    orientation?: 'landscape' | 'portrait';
  }

  interface SetUpdatePerformanceListenerOption<WithDataPath extends boolean> {
    /**
     * 是否返回变更的 data 字段信息
     */
    withDataPaths?: WithDataPath
  }

  interface UpdatePerformanceListener<WithDataPath> {
    (res: UpdatePerformance<WithDataPath>): void
  }

  interface UpdatePerformance<WithDataPath> {
    // TODO
  }

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
    linked?(target: BaseInstance): void
    /**
     * 关系生命周期函数，目标组件移动时触发，触发时机在组件 moved 生命周期之后。
     */
    linkChanged?(target: BaseInstance): void
    /**
     * 关系生命周期函数，目标组件销毁时触发，触发时机在组件 detached 生命周期之后
     */
    unlinked?(target: BaseInstance): void
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
    Mixins extends Array<Mixin.IMixin4Legacy | ReturnType<Mixin.Constructor>>
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
    mixins: Mixins;
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
    Mixins extends Array<Mixin.IMixin4Legacy | ReturnType<Mixin.Constructor>>
  > = {
    [P in keyof ExtraOptions]: P extends keyof IOptions<
      Data,
      Props,
      Methods,
      ExtraOptions,
      Mixins
    >
      ? unknown
      : ExtraOptions[P];
  } & Partial<IOptions<Data, Props, Methods, ExtraOptions, Mixins>> &
    ThisType<
      IInstance<Data, Props, Methods, ExtraThis, ExtraOptions, Mixins>
    >;
  interface IInstanceProperties {
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
     * 自定义组件路由对象
     * @description 可获得当前自定义组件的路由对象，路由方法与全局路由方法功能相同，唯一区别在于调用时，相对路径是相对于该自定义组件
     * @version 2.7.22
     */
    readonly router: IRouter;
    /**
     * 自定义组件所在页面路由对象
     * @description 可获得当前自定义组件所在页面的路由对象，路由方法与全局路由方法功能相同，唯一区别在于调用时，相对路径是相对于所在页面
     * @version 2.7.22
     */
    readonly pageRouter: IRouter;
  }

  interface IRouter {
    navigateTo: (r: {
      /**
       * 需要跳转的目标页面路径
       * @description 路径后可以带参数, 目标路径必须为应用内非 tabbar 的，路径与参数之间使用 ?分隔，参数键与参数值用=相连，不同参数必须用&分隔
       */
      url: string;
      /**
       * 页面间通信接口，用于监听被打开页面发送到当前页面的数据
       */
      events?: IMyNavigateToEvents;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 和被打开页面进行通信
         */
        eventChannel: EventChannel;
      }): void;
      /**
       * 接口调用失败的回调函数
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * 和被打开页面进行通信
               */
              eventChannel: EventChannel;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }) => Promise<{
      /**
       * 和被打开页面进行通信
       */
      eventChannel: EventChannel;
    }>;
    redirectTo:(r: {
      /**
       * 需要跳转的目标页面路径
       * 路径后可以带参数, 目标路径必须为应用内非 tabbar 的，路径与参数之间使用 ?分隔，参数键与参数值用=相连，不同参数必须用&分隔
       */
      url: string;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }) => Promise<void>;
    navigateBack: (r?: {
      /**
       * 返回的页面数
       * @description 如果 delta 大于现有打开的页面数，则返回到首页
       * @default 1
       */
      delta?: number | string;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }) => Promise<void>;
    switchTab: (r: {
      /**
       * 跳转的特定 tab 的路径
       * @description 目标路径必须为应用内 tabbar 的，且路径后不能带参数
       */
      url: string;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }) => Promise<void>;
    reLaunch: (r: {
      /**
       * 需要跳转的目标页面路径
       * @description
       * 目标路径如果是 Tab 路径后不可以带参数
       * 目标路径如果是非 Tab 页，可以携带参数，路径与参数之间使用 `?` 分隔，参数键与参数值用 `=` 相连，不同参数必须用 `&` 分隔
       */
      url: string;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }) => Promise<void>;
  }
  interface IMyNavigateToEvents {
    /**
     * 特定事件名监听回调
     */
    [eventName: string]: (...args: unknown[]) => void;
  }
  interface EventChannel {
    /**
     * 在页面间通信中触发一个事件
     * @see https://opendocs.alipay.com/mini/api/eventchannel.emit
     */
    emit(eventName: string, args?: unknown): void;
    /**
     * 在页面间通信中停止监听一个事件
     * @see https://opendocs.alipay.com/mini/api/eventchannel.off
     */
    off(eventName: string, callback: (...args: unknown[]) => void): void;
    /**
     * 在页面间通信中持续监听一个事件
     * @see https://opendocs.alipay.com/mini/api/eventchannel.on
     */
    on(eventName: string, callback: (...args: unknown[]) => void): void;
    /**
     * 在页面间通信中监听一个事件仅一次
     * @description 事件触发后失效
     * @see https://opendocs.alipay.com/mini/api/eventchannel.once
     */
    once(eventName: string, callback: (...args: unknown[]) => void): void;
  }

  interface IInstanceSharedMethods<Data> {
    /**
     * 创建 SelectorQuery 对象实例。
     * @version 2.7.4
     */
    createSelectorQuery(): any;
    /**
     * 创建 IntersectionObserver 对象实例。
     * @version 2.7.4
     */
    createIntersectionObserver(): any;
    /**
     * 创建 MediaQueryObserver 对象实例，用于监听页面 media query 状态的变化。
     * @version 2.8.2
     */
    createMediaQueryObserver(): IMediaQueryObserver;
    /**
     * 获取自定义 tabBar 实例，可以通过判断 `this.getTabBar` 是否为一个函数做兼容性处理
     * @version 2.7.20
     */
    getTabBar<
      T extends any = BaseInstance
    >(): T | undefined;
    /**
     * 查询子组件
     * @description 根据传入的 selector 匹配器查询，返回匹配到的第一个组件实例（会被 ref 影响）
     * @version 2.8.0
     */
    $selectComponent(selector: string): BaseInstance | void;
    /**
     * 查询子组件
     * @description  根据传入的 selector 匹配器查询，返回匹配到的所有组件实例（会被 ref 影响）
     * @version 2.8.0
     */
    $selectAllComponents(selector: string): BaseInstance[];
    /**
     * 检查组件是否具有 mixin(须是通过Mixin()创建的mixin实例)。
     * @description 若自定义组件注册时传入了ref以指定组件返回值，则可通过hasMixin('ref')检查到
     * @version 基础库 2.8.2
     * @return boolean
     */
    hasMixin(mixin: Mixin.IMixinIdentifier): boolean;
    /**
     * 获取更新性能统计信息
     * @version 2.8.5
     */
    setUpdatePerformanceListener<WithDataPath extends boolean = false>(
      option: SetUpdatePerformanceListenerOption<WithDataPath>,
      callback?: UpdatePerformanceListener<WithDataPath>
    ): void;
  }

  interface IInstanceMethods<Data> {
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
    /**
     * 选取当前组件的创建者（即 AXML 中定义了此组件的组件），返回它的组件实例对象（会被 `ref` 影响）。
     *
     * @version 2.7.22
     * @returns undefined | null | 页面 | 自定义组件 | 用户 ref 的 Object
     */
    selectOwnerComponent(): BaseInstance;
    /**
     * 选取当前组件在事件冒泡路径上的父组件，返回它的组件实例对象（会被 `ref` 影响）。
     *
     * @version 2.7.22
     * @returns undefined | null | 页面 | 自定义组件 | 用户 ref 的 Object
     */
    selectComposedParentComponent(): BaseInstance;
    /**
     * 获取这个关系所对应的所有关联节点，参见 组件间关系
     * @version 2.8.5
     */
    getRelationNodes(relationKey: string): BaseInstance[];
  }
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
    IComponentInstanceAdditionalProperties<ExtraOptions> & IInstanceProperties & IInstanceMethods<Data> & IInstanceSharedMethods<Data>;

  type BaseInstance = IInstance<
    UnknownRecord,
    UnknownRecord,
    UnknownRecord,
    UnknownRecord,
    UnknownRecord,
    []
  >
  interface Constructor {
    <
      Data = {},
      Props = {},
      Methods = {},
      ExtraThis = {},
      ExtraOptions extends Record<string, unknown> = {},
      Mixins extends any[] = any[]
    >(
      opts: IUserComponentOptions<
        Data,
        Props,
        Methods,
        ExtraThis & IGlobalMiniProgramExtraThis4Component,
        ExtraOptions,
        Mixins
      >
    ): void;
  } 
}
