declare namespace MiniProgram.Page {
  interface IOnResizeEvent {
    /**
     * 窗口尺寸
     */
    size: {
      /**
       * 窗口宽度
       */
      windowWidth: number;
      /**
       * 窗口高度
       */
      windowHeight: number;
    };
  }
  interface IKeyboardHeightEvent {
    /**
     * 键盘高度
     */
    height: number;
  }
  interface ITabItemTapEvent {
    /**
     * 点击来源。
     */
    from: string;
    /**
     * 被点击 tabItem 的页面路径。
     */
    pagePath: string;
    /**
     * 被点击 tabItem 的按钮文字。
     */
    text: string;
    /**
     * 被点击 tabItem 的序号，从 0 开始。
     */
    index: number;
  }
  interface ISelectedTabItemTapEvent {
    /**
     * 被点击 tabItem 的页面路径。
     */
    pagePath: string;
    /**
     * 被点击 tabItem 的按钮文字。
     */
    text: string;
    /**
     * 被点击 tabItem 的序号，从 0 开始。
     */
    index: number;
  }

  interface IPageScrollEvent {
    /**
     * 页面滚动距离。
     */
    scrollTop: number;
    /**
     * 页面内容高度。
     */
    scrollHeight: number;
  }

  interface IPullDownRefreshEvent {
    /**
     * 触发原
     * @description
     * - manual: 下拉事件通过 my.startPullDownRefresh 触发
     * - code: 下拉事件用通过户下拉触发
     */
    from: 'manual' | 'code';
  }
  interface IShareAppMessageEvent {
    /**
     * 触发来源
     * @description
     * - button 页面分享按钮触发
     * - menu 右上角分享按钮触
     * - code 执行 my.showSharePanel 触发
     * @version 1.10.0
     */
    from: 'button' | 'menu' | 'code';
    /**
     * 如果 from 值为 button，则 target 为触发这次分享的 button，否则为 undefined。
     * @version 1.10.0
     */
    target: object;
    /**
     * 页面中包含 web-view 组件时，返回当前 web-view 的 URL。
     * @version 1.6.0
     */
    webViewUrl: string;
  }

  interface IShareAppMessage {
    title: string;
    desc: string;
    path: string;
  }
  /**
   * 页面事件处理对象
   */
  interface Events {
    /**
     * 页面加载时触发
     * @param query 打开当前页面路径中的参数
     * @see https://opendocs.alipay.com/mini/03durs
     */
    onLoad(query: unknown): void;
    /**
     * 页面显示时/切入前台时触发
     */
    onShow(): void;
    /**
     * 页面初次渲染完成时触发
     */
    onReady(): void;
    /**
     * 页面隐藏时/切入后台时触发
     */
    onHide(): void;
    /**
     * 页面卸载时触发
     * @version 2.8.5
     */
    onUnload(): void;
    /**
     * 点击标题触发
     */
    onTitleClick(): void;
    /**
     * 点击导航栏额外图标触发
     * @see 设置额外图标: https://opendocs.alipay.com/mini/api/optionmenu
     */
    onOptionMenuClick(): void;
    /**
     * 页面下拉时触发
     * @description 需要先在 app.json 的 window 选项中开启 pullRefresh 。当处理完数据刷新后，my.stopPullDownRefresh 可以停止当前页面的下拉刷新。
     * @param event 页面下拉事件
     * @see https://opendocs.alipay.com/mini/framework/page-detail#onPullDownRefresh(%7Bfrom%3A%20manual%7Ccode%7D)
     */
    onPullDownRefresh(event: IPullDownRefreshEvent): void;
    /**
     * 点击 tabItem（非当前） 时触发
     * @param event 点击 tabItem（非当前）事件
     */
    onTabItemTap: (event: ITabItemTapEvent) => void;
    /**
     * 页面滚动时触发。
     * @param event 页面滚动事件
     */
    onPageScroll: (event: IPageScrollEvent) => void;
    /**
     * 页面被拉到底部时触发
     * @description
     * - onReachBottom() 上拉触底时才会触发，如果页面已经在页面底部继续上拉是不会再次触发。
     * - 可配合 my.pageScrollTo 向上滚动一点位置或者在底部增加数据等方式让页面不处在底部位置达到可以连续上拉触发 onReachBottom()的效果。
     * - 可在应用配置（app.json）通过 onReachBottomDistance 配置项 自定义 页面上拉触底时触发时距离页面底部的距离，单位为 px。
     */
    onReachBottom(): void;
    /**
     * 点击非当前 tabItem 前触发
     */
    beforeTabItemTap(): void;
    /**
     * 键盘高度变化时触发
     * @param event 键盘高度变化事件
     */
    onKeyboardHeight(event: IKeyboardHeightEvent): void;
    /**
     * 导航栏左侧返回按钮(以及 Android 系统返回键）被点击时触发
     */
    onBack: () => void;
    /**
     * window尺寸改变时触发
     * @version 1.16.0
     */
    onResize(event: IOnResizeEvent): void;
    /**
     * 点击当前 tabItem 后触发。
     * @param event 点击当前 tabItem 事件
     * @version 2.7.2
     */
    onSelectedTabItemTap: (event: ISelectedTabItemTapEvent) => void;
  }

  /**
   * pages\/*\/index.js Page(options) 中 options 的内部类型
   * ref: https://opendocs.alipay.com/mini/framework/app-detail
   */
  interface IOptions<Data, ExtraOptions extends UnknownRecord> {
    /**
     * 初始数据或返回初始化数据的函数
     */
    data: Data | ((this: void) => Data);
    /**
     * 页面加载时触发
     * @param query 打开当前页面路径中的参数
     * @see https://opendocs.alipay.com/mini/03durs
     */
    onLoad(query: unknown): void;
    /**
     * 页面显示时/切入前台时触发
     */
    onShow(): void;
    /**
     * 页面初次渲染完成时触发
     */
    onReady(): void;
    /**
     * 页面隐藏时/切入后台时触发
     */
    onHide(): void;
    /**
     * 页面卸载时触发
     */
    onUnload(): void;
    /**
     * 在 Page 中定义 onShareAppMessage 函数，设置该页面的分享信息。
     * @description
     * 开发者可通过传入参数自定义小程序分享内容（例如：标题、描述、图片），用户通过点击或者复制分享的内容可以快速打开小程序，进入指定页面。目前支持的分享渠道有：支付宝朋友动态、支付宝好友、钉钉、新浪微博、微信、QQ。
     * - 每个 Page 页面的右上角菜单中默认有 分享 按钮。
     * - 用户点击分享按钮的时候会调用。
     * - 要求返回一个对象（Object）类型，用于自定义该页面的分享信息（如果未定义该回调，会使用默认分享信息，不影响分享功能）。
     * - 若定义该回调，但未返回对象（Object）类型，会导致默认分享不可用。
     * - 分享图片中的二维码的有效期为 60 天，若需要长期有效的二维码，请登录 开放平台控制台 > 我的应用 > 进入小程序应用详情页 > 小程序码 中生成。
     * - 小程序在 1.1.0 版本中开始支持 open-type 为 share 的按钮触发分享。
     * - 从基础库 1.24.13、2.6.7 版本开始支持 async 写法，可通过 my.canIUse('page.onShareAppMessage.async') 检测是否支持。
     * @see https://opendocs.alipay.com/mini/framework/page-detail#onShareAppMessage(options%3A%20Object)
     */
    onShareAppMessage(
      event: IShareAppMessageEvent
    ): IShareAppMessage | Promise<IShareAppMessage>;
    /**
     * 点击标题触发
     */
    onTitleClick(): void;
    /**
     * 点击导航栏额外图标触发
     * @see 设置额外图标: https://opendocs.alipay.com/mini/api/optionmenu
     * @version 1.3.0
     */
    onOptionMenuClick: () => void;
    /**
     * 页面下拉时触发
     * @description 需要先在 app.json 的 window 选项中开启 pullRefresh 。当处理完数据刷新后，my.stopPullDownRefresh 可以停止当前页面的下拉刷新。
     * @param event 页面下拉事件
     * @see https://opendocs.alipay.com/mini/framework/page-detail#onPullDownRefresh(%7Bfrom%3A%20manual%7Ccode%7D)
     */
    onPullDownRefresh(event: IPullDownRefreshEvent): void;
    /**
     * 点击 tabItem（非当前） 时触发
     * @param event 点击 tabItem（非当前）事件
     * @version 1.11.0
     */
    onTabItemTap: (event: ITabItemTapEvent) => void;
    /**
     * 页面滚动时触发。
     * @param event 页面滚动事件
     */
    onPageScroll: (event: IPageScrollEvent) => void;
    /**
     * 页面被拉到底部时触发
     * @description
     * - onReachBottom() 上拉触底时才会触发，如果页面已经在页面底部继续上拉是不会再次触发。
     * - 可配合 my.pageScrollTo 向上滚动一点位置或者在底部增加数据等方式让页面不处在底部位置达到可以连续上拉触发 onReachBottom()的效果。
     * - 可在应用配置（app.json）通过 onReachBottomDistance 配置项 自定义 页面上拉触底时触发时距离页面底部的距离，单位为 px。
     */
    onReachBottom(): void;
    /**
     * 事件处理函数对象
     * @version 1.13.7
     */
    events: Partial<Events>;
    /**
     * 开启某些功能项
     */
    options: {
      /**
       * 开启 observers 数据变化观测器
       */
      observers: boolean;
    };
    /**
     * 数据变化观测器，观测和响应任何数据字段的变化。
     * @version 2.8.1
     */
    observers: Record<string, (...args: any[]) => void>;
    /**
     * 组件间代码复用机制，只支持传入 Mixin() 实例。
     * @version 2.8.5
     */
    mixins: Mixin.IMixinIdentifier[];
  }

  /**
   * Additional properties in Page instance, for module augmentation
   */
  interface IInstanceAdditionalProperties<ExtraOptions> {}

  interface IInstanceProperties {
    /**
     * Page 路径，对应 app.json 中配置的路径值，类型为 String。这是一个只读属性。
     * @readonly
     */
    readonly route: string;
    /**
     * 页面路由对象
     * @description 可获得当前页面的路由对象，路由方法与全局路由方法功能相同，唯一区别在于调用时，相对路径是相对于该页面
     * @version 2.7.22
     */
    readonly router: Shared.IRouter;
    /**
     * 页面路由对象
     * @description 同 router, 可获得当前页面的路由对象，路由方法与全局路由方法功能相同，唯一区别在于调用时，相对路径是相对于该页面
     * @version 2.7.22
     */
    readonly pageRouter: Shared.IRouter;
  }

  type IInstanceSharedMethods<Data> = Shared.IInstanceSharedMethods<Data>;

  interface IInstanceMethods<Data> {
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
     * 获取 通信通道 EventChannel
     * @description
     * - 如果一个页面由另一个页面通过 my.navigateTo 打开，这两个页面间将建立一条通信通道：
     * - 被打开的页面可以通过 this.getOpenerEventChannel() 方法来获得一个 EventChannel 对象。
     * - my.navigateTo 的 success 回调中也包含一个 EventChannel 对象。
     * - 这两个 EventChannel 对象间可以使用 emit 和 on 方法相互发送、监听事件。
     * @version 2.7.7
     * @see https://opendocs.alipay.com/mini/api/eventchannel
     */
    getOpenerEventChannel(): Shared.EventChannel;
    /**
     * 检查组件是否具有 mixin(须是通过Mixin()创建的mixin实例)。
     * @version 2.8.5
     * @return boolean
     * @see https://opendocs.alipay.com/mini/framework/page-detail#hasMixin
     */
    hasMixin(mixin: Mixin.IMixinIdentifier): boolean;
  }

  /**
   * `this` type of life cycle hooks in App.
   */
  type IInstance<Data, ExtraThis, ExtraOptions extends UnknownRecord> = {
    data: Data & UnknownRecord;
  } & ExtraThis &
    Omit<ExtraOptions, keyof IOptions<Data, ExtraOptions>> &
    IInstanceProperties &
    IInstanceSharedMethods<Data> &
    IInstanceMethods<Data> &
    IInstanceAdditionalProperties<ExtraOptions>;

  interface Constructor {
    <
      Data = {},
      ExtraThis = {},
      ExtraOptions extends Record<string, unknown> = {}
    >(
      options: Partial<
        UniqueLeft<
          UniqueLeft<ExtraThis, ExtraOptions>,
          IOptions<Data, ExtraOptions>
        >
      > & {
        [P in keyof ExtraOptions]: P extends keyof IOptions<Data, ExtraOptions>
          ? unknown
          : ExtraOptions[P];
      } & Partial<IOptions<Data, ExtraOptions>> &
        ThisType<IInstance<Data, ExtraThis, ExtraOptions>>
    ): void;
  }
  interface GetCurrentPages {
    (): Array<IInstance<object, {}, {}>>;
  }
}
