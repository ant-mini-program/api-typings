declare namespace MiniProgram.Page {
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
     */
    onLoad<Query = {}>(query: Query): void;
    /**
     * 页面显示时触发
     */
    onShow(): void;
    /**
     * 页面初次渲染完成时触发
     */
    onReady(): void;
    /**
     * 页面隐藏时触发
     */
    onHide(): void;
    /**
     * 页面卸载时触发
     * @version 2.8.5
     */
    onUnload(): void;
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
    onPullDownRefresh(res: { from: 'manual' | 'code' }): void;
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
   * pages\/*\/index.js Page(options) 中 options 的内部类型
   * ref: https://opendocs.alipay.com/mini/framework/app-detail
   */
  interface IOptions<Data, ExtraOptions extends UnknownRecord> {
    /**
     * 初始数据或返回初始化数据的函数
     */
    data: Data | (() => Data);
    /**
     * 页面加载时触发
     */
    onLoad<Query = {}>(query: Query): void;
    /**
     * 页面显示时触发
     */
    onShow(): void;
    /**
     * 页面初次渲染完成时触发
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
     * @version 1.13.7
     */
    events: Partial<Events>;
    /**
     * Page 路径
     * @readonly
     */
    readonly route: string;
    /**
     * 开启某些功能项
     */
    options: {
      /**
       * 开启 observers 数据变化观测器
       */
      observers: boolean;
    },
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

  type IInstanceSharedMethods<Data> = Component.IInstanceSharedMethods<Data>;

  /**
   * `this` type of life cycle hooks in App.
   */
  type IInstance<
    Data,
    ExtraThis,
    ExtraOptions extends UnknownRecord
    > = { data: Data & UnknownRecord } & ExtraThis &
    Omit<ExtraOptions, keyof IOptions<Data, ExtraOptions>> &
      IInstanceSharedMethods<Data> & {
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
       * Page 路径，对应 app.json 中配置的路径值，类型为 String。这是一个只读属性。
       * @readonly
       */
      readonly route: string;
      getOpenerEventChannel(): any; //TODO: 
      /**
       * 检查组件是否具有 mixin(须是通过Mixin()创建的mixin实例)。
       * @version 基础库 2.8.5
       * @return boolean
       */
      hasMixin(mixin: Mixin.IMixinIdentifier): boolean;
    } & IInstanceAdditionalProperties<ExtraOptions>

  /**
   * 用户可配置的 Page Options
   */
  type IUserPageOptions<
    Data,
    ExtraThis,
    ExtraOptions extends UnknownRecord
  > = Partial<
    UniqueLeft<
      UniqueLeft<ExtraThis, ExtraOptions>,
      IOptions<Data, ExtraOptions>
    >
  > & {
    [P in keyof ExtraOptions]: P extends keyof IOptions<Data, ExtraOptions>
      ? unknown
      : ExtraOptions[P];
  } & Partial<IOptions<Data, ExtraOptions>> &
    ThisType<IInstance<Data, ExtraThis, ExtraOptions>>;

  interface Constructor {
    <
      Data = {},
      ExtraThis = {},
      ExtraOptions extends Record<string, unknown> = {}
    >(
      opts: IUserPageOptions<
        Data,
        ExtraThis & IGlobalMiniProgramExtraThis4Page,
        ExtraOptions
      >
    ): void;
  }
  interface GetCurrentPages {
    (): IInstance<object, {}, {}>[];
  }
}
