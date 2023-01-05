declare namespace MiniProgram.Shared {
  interface SetUpdatePerformanceListenerOption<WithDataPath extends boolean> {
    /**
     * 是否返回变更的 data 字段信息
     */
    withDataPaths?: WithDataPath;
  }

  interface UpdatePerformanceListener<WithDataPath extends boolean> {
    (res: ISetUpdatePerformanceListenerResult<WithDataPath>): void;
  }

  interface ISingleSetDataPerformanceInfo<WithDataPath extends boolean> {
    /** setData ID */
    id: number;
    /** 加入到队列的时间 */
    pendingStartTimestamp: number;
    /** 本次更新的 data，所包含的 key 值 */
    dataPaths?: WithDataPath extends true ? string[] : undefined;
  }

  interface ISetUpdatePerformanceListenerResult<WithDataPath extends boolean> {
    /** 其他组件更新，而导致的更新 */
    isMergedUpdate: boolean;
    /** 更新批次 ID */
    updateProcessId: number;
    /** 父更新批次 ID */
    parentUpdateProcessId?: number;
    /**
     * 本批次合并之后的 data，所包含的 key 值
     */
    dataPaths?: WithDataPath extends true ? string[] : undefined;
    /** 组件第一条数据，加入到队列的时间 */
    pendingStartTimestamp?: number;
    /** render 侧接收到，data 数据的时间 */
    updateStartTimestamp?: number;
    /** render 侧完成 UI 更新的时间 */
    updateEndTimestamp?: number;
    /**
     * 本批次所有 setData 的数据信息
     */
    dataList: ISingleSetDataPerformanceInfo<WithDataPath>[];
  }

  interface IMediaQueryObserver {
    /**
     * 开始监听页面 media query 变化情况
     * @param descriptor media query 描述符
     * @param callback 监听 media query 状态变化的回调函数
     * @see https://opendocs.alipay.com/mini/05awpq
     */
    observe: (
      descriptor: IMediaQueryObserveDescriptor,
      callback: IMediaQueryObserveCallback
    ) => void;
    /**
     * 停止监听。回调函数将不再触发
     * @see https://opendocs.alipay.com/mini/05bb9o
     */
    disconnect: () => void;
  }

  type IMediaQueryObserveCallback = (
    payload: IMediaQueryObserveCallbackResponse
  ) => void;

  interface IMediaQueryObserveCallbackResponse {
    /**
     * 页面的当前状态是否满足所指定的 media query
     */
    matches: boolean;
  }
  interface IMediaQueryObserveDescriptor {
    /**
     * 页面最小宽度（ px 为单位）
     */
    minWidth?: number;
    /**
     * 页面最大宽度（ px 为单位）
     */
    maxWidth?: number;
    /**
     * 页面宽度（ px 为单位）
     */
    width?: number;
    /**
     * 页面最小高度（ px 为单位）
     */
    minHeight?: number;
    /**
     * 页面最大高度（ px 为单位）
     */
    maxHeight?: number;
    /**
     * 页面高度（ px 为单位）
     */
    height?: number;
    /**
     * 屏幕方向（ landscape 或 portrait ）
     * - landscape viewport 处于横向，即宽度大于高度。
     * - portrait viewport 处于纵向，即高度大于等于宽度。
     */
    orientation?: 'landscape' | 'portrait';
  }

  interface IRouter {
    navigateTo: (object: {
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
            }
      ): void;
    }) => Promise<{
      /**
       * 和被打开页面进行通信
       */
      eventChannel: EventChannel;
    }>;
    redirectTo: (object: {
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
    navigateBack: (object?: {
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
    switchTab: (object: {
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
    reLaunch: (object: {
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
     * @see https://opendocs.alipay.com/mini/framework/component_object#createMediaQueryObserver
     */
    createMediaQueryObserver(): IMediaQueryObserver;
    /**
     * 获取自定义 tabBar 实例，可以通过判断 `this.getTabBar` 是否为一个函数做兼容性处理
     * @version 2.7.20
     * @see https://opendocs.alipay.com/mini/framework/page-detail#Page.getTabBar
     */
    getTabBar<T extends any = Component.BaseInstance>(): T | undefined;
    /**
     * 查询子组件
     * @description 根据传入的 selector 匹配器查询，返回匹配到的第一个组件实例（会被 ref 影响）
     * @version 2.8.0
     * @see https://opendocs.alipay.com/mini/framework/component_object#%24selectComponent%2F%24selectAllComponents
     */
    $selectComponent(selector: string): Component.BaseInstance | void;
    /**
     * 查询子组件
     * @description  根据传入的 selector 匹配器查询，返回匹配到的所有组件实例（会被 ref 影响）
     * @version 2.8.0
     * @see https://opendocs.alipay.com/mini/framework/component_object#%24selectComponent%2F%24selectAllComponents
     */
    $selectAllComponents(selector: string): Component.BaseInstance[];
    /**
     * 监听 setData 引发界面更新的开销，参见 获取更新性能统计信息
     * @version 2.8.5
     * @see https://opendocs.alipay.com/mini/069xfk
     */
    setUpdatePerformanceListener<WithDataPath extends boolean = false>(
      option: SetUpdatePerformanceListenerOption<WithDataPath>,
      callback?: UpdatePerformanceListener<WithDataPath>
    ): void;
  }
}
