export type UnknownRecord = Record<string, unknown>;

/**
 * Get union key of two types
 */
export type UnionKeys<T, U> = keyof T | keyof U;

/**
 * Get unique keys of left type.
 */
export type UniqueLeftKeys<T, U> = Exclude<UnionKeys<T, U>, keyof U>;

/**
 * Extract left-only types.
 */
export type UniqueLeft<T, U> = {
  [P in UniqueLeftKeys<T, U>]: T[P];
};

export interface IShareAppMessage {
  title: string;
  desc: string;
  path: string;
}

export interface IAppOnLaunchReferrerInfo {
  /**
   * 来源小程序
   */
  appId: string;
  /**
   * 来源插件，当处于插件运行模式时可见
   */
  sourceServiceId: string;
  /**
   * 来源小程序传过来的数据
   */
  extraData: Record<string, any>;
}

export interface IAppOnLaunchOptions<Query = Record<string, string>> {
  /**
   * 当前小程序的 query，从启动参数的 query 字段解析而来
   */
  query: Query;
  /**
   * 启动小程序的 场景值
   * @see https://opendocs.alipay.com/mini/framework/scene
   */
  scene: number;
  /**
   * 当前小程序的页面地址，从启动参数 page 字段解析而来，page 忽略时默认为首页
   */
  path: string;
  /**
   * 来源信息
   */
  referrerInfo: IAppOnLaunchReferrerInfo;
}

export interface IAppOnUnhandledRejectionRes {
  /**
   * reject 的原因
   */
  reason: string;
  /**
   * 被 reject 的 Promise 对象
   */
  promise: Promise<unknown>;
}

declare global {
  /**
   * App's constructor
   * @link https://opendocs.alipay.com/mini/framework/app-detail
   */
  function App<
    ExtraThis = {},
    ExtraOptions extends Record<string, unknown> = {}
  >(opts: IUserAppOptions<ExtraThis, ExtraOptions>): void;
}
/**
 * app.js App(options) 中 options 的内部类型
 * ref: https://opendocs.alipay.com/mini/framework/app-detail
 */
export interface IAppOptions<ExtraOptions extends UnknownRecord> {
  /**
   * 生命周期回调：监听小程序初始化
   * 当小程序初始化完成时触发，全局只触发一次
   */
  onLaunch<Query = {}>(options: IAppOnLaunchOptions<Query>): void;
  /**
   * 生命周期回调：监听小程序显示
   * 当小程序启动，或从后台进入前台显示时触发
   */
  onShow<Query = {}>(options: IAppOnLaunchOptions<Query>): void;
  /**
   * 生命周期回调：监听小程序隐藏
   * 当当前页面被隐藏时触发，例如跳转、按下设备 Home 键离开
   */
  onHide(): void;
  /**
   * 监听小程序错误
   * 当小程序发生 js 错误时触发
   */
  onError(error: string): void;
  /**
   * 全局分享配置
   */
  onShareAppMessage(): IShareAppMessage;
  /**
   * 监听 unhandledrejection 事件
   * 当 Promise 被 reject 且没有 reject 处理器时，会触发 onUnhandledRejection 事件
   */
  onUnhandledRejection(res: IAppOnUnhandledRejectionRes): void;
  /**
   * 全局数据
   */
  globalData: object;
}

/**
 * Additional properties in App instance, for module augmentation
 */
export interface IAppInstanceAdditionalProperties<
  ExtraOptions extends UnknownRecord
> {}

/**
 * App 的类型
 */
export interface IApp<ExtraThis, ExtraOptions extends UnknownRecord> {
  (opts: IUserAppOptions<ExtraThis, ExtraOptions>): any;
}

export type IAppInstance<ExtraThis, ExtraOptions extends UnknownRecord> = Omit<
  ExtraOptions,
  keyof IAppOptions<ExtraOptions>
> &
  ExtraThis &
  IAppInstanceAdditionalProperties<ExtraOptions>;

/**
 * 用户可配置的 App Options
 */
export type IUserAppOptions<
  ExtraThis,
  ExtraOptions extends UnknownRecord
> = Partial<IAppOptions<ExtraOptions>> &
  Partial<
    UniqueLeft<UniqueLeft<ExtraThis, ExtraOptions>, IAppOptions<ExtraOptions>>
  > & {
    [P in keyof ExtraOptions]: P extends keyof IAppOptions<ExtraOptions>
      ? unknown
      : ExtraOptions[P];
  } & ThisType<IAppInstance<ExtraThis, ExtraOptions>>;

declare global {
  /**
   * Page's constructor
   * @link https://opendocs.alipay.com/mini/framework/page-detail
   */
  function Page<
    Data = {},
    ExtraThis = {},
    ExtraOptions extends Record<string, unknown> = {}
  >(opts: IUserPageOptions<Data, ExtraThis, ExtraOptions>): void;
}

/**
 * 页面事件处理对象
 */
export interface IPageEvents {
  /**
   * 页面返回时触发
   * @since 1.13.7
   */
  onBack(): void;
  /**
   * 键盘高度变化时触发
   * @since 1.13.7
   */
  onKeyboardHeight(): void;
  /**
   * 点击导航栏额外图标触发
   * @see 设置额外图标: https://opendocs.alipay.com/mini/api/optionmenu
   * @since 1.13.7
   */
  onOptionMenuClick(): void;
  /**
   * 点击右上角通用菜单中的自定义菜单按钮触发
   * @since 1.13.7
   */
  onPopMenuClick(): void;
  /**
   * 下拉截断时触发
   * @since 1.13.7
   */
  onPullIntercept(): void;
  /**
   * 页面下拉时触发
   * @since 1.13.7
   */
  onPullDownRefresh(res: { from: "manual" | "code" }): void;
  /**
   * 点击标题触发
   * @since 1.13.7
   */
  onTitleClick(): void;
  /**
   * 点击非当前 tabItem 后触发
   * @since 1.13.7
   */
  onTabItemTap(): void;
  /**
   * 点击非当前 tabItem 前触发
   * @since 1.13.7
   */
  beforeTabItemTap(): void;
  /**
   * window尺寸改变时触发
   * @since 1.16.0
   */
  onResize(res: { windowWidth: number; windowHeight: number }): void;
  /**
   * 页面滚动时触发
   */
  onPageScroll(res: { scrollTop: number; scrollHeight: number }): void;
  /**
   * 页面被拉到底部时触发
   */
  onReachBottom(): void;
}

/**
 * Recursively map a type and make all properties optional.
 */
export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};

/**
 * Recursively map a type and make all properties optional & dynamic.
 */
export declare type RecursivePartialAndDynamic<T> = T extends object
  ? {
      [P in keyof T]?: T[P] extends (infer U)[]
        ? RecursivePartialAndDynamic<U>[]
        : T[P] extends Function
        ? T[P]
        : T[P] extends object
        ? RecursivePartialAndDynamic<T[P]>
        : T[P];
    }
  : T;

/**
 * pages\/*\/index.js Page(options) 中 options 的内部类型
 * ref: https://opendocs.alipay.com/mini/framework/app-detail
 */
export interface IPageOptions<Data, ExtraOptions extends UnknownRecord> {
  /**
   * 初始数据或返回初始化数据的函数
   */
  data: Data | (() => Data);
  /**
   * 页面加载
   */
  onLoad<Query = {}>(query: Query): void;
  /**
   * 页面显示
   */
  onShow(): void;
  /**
   * 页面加载完成
   */
  onReady(): void;
  /**
   * 页面隐藏
   */
  onHide(): void;
  /**
   * 页面被关闭
   */
  onUnload(): void;
  /**
   * 标题被点击
   */
  onTitleClick(): void;
  /**
   * 页面被下拉
   */
  onPullDownRefresh(): void;
  /**
   * 页面被拉到底部时触发
   */
  onReachBottom(): void;
  /**
   * 返回自定义分享信息
   */
  onShareAppMessage(): IShareAppMessage;
  /**
   * 事件处理函数对象
   */
  events: Partial<IPageEvents>;
  /**
   * Page 路径
   * @readonly
   */
  readonly route: string;
}

/**
 * Additional properties in Page instance, for module augmentation
 */
export interface IPageInstanceAdditionalProperties<ExtraOptions> {}

/**
 * `this` type of life cycle hooks in App.
 */
export type IPageInstance<
  Data,
  ExtraThis,
  ExtraOptions extends UnknownRecord
> = { data: RecursivePartialAndDynamic<Data> & UnknownRecord } & ExtraThis &
  Omit<ExtraOptions, keyof IPageOptions<Data, ExtraOptions>> & {
    /**
     * 将数据从逻辑层发送到视图层
     * @param data
     * @param callback
     */
    setData(
      data: RecursivePartialAndDynamic<Data>,
      callback?: () => void
    ): void;
    /**
     * 获取自定义 tabBar 实例
     * @version 2.7.20+
     */
    getTabBar(): IComponentInstance<UnknownRecord, UnknownRecord, UnknownRecord, UnknownRecord, UnknownRecord, []> | void;
    /**
     * $spliceData 同样用于将数据从逻辑层发送到视图层，但是相比于 setData，在处理长列表的时候，其具有更高的性能。
     * @param data
     * @param callback
     * @version 1.7.2+ 可以使用 my.canIUse('page.$spliceData') 做兼容性处理
     */
    $spliceData(
      data: RecursivePartialAndDynamic<Data>,
      callback?: () => void
    ): void;
    /**
     * 批量更新数据。
     * @param callback
     * @version 1.14.0+ 可以使用  my.canIUse('page.$batchedUpdates') 做兼容性处理
     */
    $batchedUpdates(callback: () => void): void;
    /**
     * Page 路径，对应 app.json 中配置的路径值，类型为 String。这是一个只读属性。
     * @readonly
     */
    readonly route: string;
  } & IPageInstanceAdditionalProperties<ExtraOptions>;

/**
 * 用户可配置的 App Options
 */
export declare type IUserPageOptions<
  Data,
  ExtraThis,
  ExtraOptions extends UnknownRecord
> = Partial<
  UniqueLeft<
    UniqueLeft<ExtraThis, ExtraOptions>,
    IPageOptions<Data, ExtraOptions>
  >
> & {
  [P in keyof ExtraOptions]: P extends keyof IPageOptions<Data, ExtraOptions>
    ? unknown
    : ExtraOptions[P];
} & Partial<IPageOptions<Data, ExtraOptions>> &
  ThisType<IPageInstance<Data, ExtraThis, ExtraOptions>>;

/**
 * Page 的类型
 */
export interface IPage<Data, ExtraThis, ExtraOptions extends UnknownRecord> {
  (opts: IUserPageOptions<Data, ExtraThis, ExtraOptions>): any;
}

declare global {
  /**
   * Component's constructor
   * @link https://opendocs.alipay.com/mini/framework/component_object
   */
  function Component<
    Data = {},
    Props = {},
    Methods = {},
    ExtraThis = {},
    ExtraOptions extends Record<string, unknown> = {},
    Mixin extends any[] = []
  >(
    opts: IUserComponentOptions<
      Data,
      Props,
      Methods,
      ExtraThis,
      ExtraOptions,
      Mixin
    >
  ): void;
}

/**
 * component\/*\/index.js Component(options) 中 options 的内部类型
 * ref: https://opendocs.alipay.com/mini/framework/component_object
 */
export interface IComponentOptions<
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
   * 监听所属页面的事件
   */
  pageEvents: Partial<IPageEvents>;
}

/**
 * Additional properties in Component instance, for module augmentation
 */
export interface IComponentInstanceAdditionalProperties<
  ExtraOptions extends UnknownRecord
> {}

/**
 * Public instance
 */
export declare type IComponentInstance<
  Data,
  Props,
  Methods,
  ExtraThis,
  ExtraOptions extends UnknownRecord,
  Mixin extends any[]
> = {
  data: RecursivePartialAndDynamic<
    Data & UnionToIntersection<TGetMixinData<TExtractValuesOfTuple<Mixin>>>
  >;
  props: Readonly<
    RecursivePartialAndDynamic<
      Props & UnionToIntersection<TGetMixinProps<TExtractValuesOfTuple<Mixin>>>
    >
  >;
} & Methods &
  UnionToIntersection<TGetMixinMethods<TExtractValuesOfTuple<Mixin>>> &
  ExtraThis &
  Omit<
    ExtraOptions,
    keyof IComponentOptions<Data, Props, Methods, ExtraOptions, Mixin>
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
     * 获取自定义 tabBar 实例
     * @version 2.7.20+
     */
     getTabBar(): IComponentInstance<UnknownRecord, UnknownRecord, UnknownRecord, UnknownRecord, UnknownRecord, []> | void;
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
  };

/**
 * 用户可配置的 Component Options
 */
export declare type IUserComponentOptions<
  Data,
  Props,
  Methods,
  ExtraThis,
  ExtraOptions extends UnknownRecord,
  Mixin extends any[]
> = {
  [P in keyof ExtraOptions]: P extends keyof IComponentOptions<
    Data,
    Props,
    Methods,
    ExtraOptions,
    Mixin
  >
    ? unknown
    : ExtraOptions[P];
} & Partial<IComponentOptions<Data, Props, Methods, ExtraOptions, Mixin>> &
  ThisType<
    IComponentInstance<Data, Props, Methods, ExtraThis, ExtraOptions, Mixin>
  >;

/**
 * Component 的类型
 */
export interface IComponent<
  Data,
  Props,
  Methods,
  ExtraThis,
  ExtraOptions extends UnknownRecord,
  Mixin extends any[]
> {
  (
    opts: IUserComponentOptions<
      Data,
      Props,
      Methods,
      ExtraThis,
      ExtraOptions,
      Mixin
    >
  ): any;
}

// 获取 mixins 数组的每一个元素的类型
type TExtractValuesOfTuple<T extends any[]> = T[keyof T & number];

// 获取 methods、props、data 类型(主要就是这个三个)

type TGetMixinMethods<T> = T extends { methods: infer M } ? M : never;

type TGetMixinData<T> = T extends { data: infer D } ? D : never;

type TGetMixinProps<T> = T extends { props: infer P } ? P : never;

// 整合一下类型
type UnionToIntersection<T> = (T extends any ? (x: T) => any : never) extends (
  x: infer R
) => any
  ? R
  : never;
