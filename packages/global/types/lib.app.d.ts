declare namespace MiniProgram.App {
  interface ReferrerInfo {
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

  interface LaunchOptions<
    Query extends Record<string, string> = Record<string, string>
  > {
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
    referrerInfo: ReferrerInfo;
  }

  interface UnhandledRejectionRes {
    /**
     * reject 的原因
     */
    reason: string;
    /**
     * 被 reject 的 Promise 对象
     */
    promise: Promise<unknown>;
  }

  /**
   * app.js App(options) 中 options 的内部类型
   * ref: https://opendocs.alipay.com/mini/framework/app-detail
   */
  interface Options<ExtraOptions extends UnknownRecord> {
    /**
     * 生命周期回调：监听小程序初始化
     * 当小程序初始化完成时触发，全局只触发一次
     */
    onLaunch(options: LaunchOptions): void;
    /**
     * 生命周期回调：监听小程序显示
     * 当小程序启动，或从后台进入前台显示时触发
     */
    onShow(options: LaunchOptions): void;
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
    onShareAppMessage(): Page.IShareAppMessage;
    /**
     * 监听 unhandledrejection 事件
     * 当 Promise 被 reject 且没有 reject 处理器时，会触发 onUnhandledRejection 事件
     */
    onUnhandledRejection(res: UnhandledRejectionRes): void;
    /**
     * 全局数据
     */
    globalData: object;
  }

  /**
   * Additional properties in App instance, for module augmentation
   */
  interface IInstanceAdditionalProperties<ExtraOptions extends UnknownRecord> {}

  /**
   * App 的类型
   */
  interface IApp<ExtraThis, ExtraOptions extends UnknownRecord> {
    (opts: UserAppOptions<ExtraThis, ExtraOptions>): any;
  }

  type IAppInstance<ExtraThis, ExtraOptions extends UnknownRecord> = Omit<
    ExtraOptions,
    keyof Options<ExtraOptions>
  > &
    ExtraThis &
    IInstanceAdditionalProperties<ExtraOptions>;

  /**
   * 用户可配置的 App Options
   */
  type UserAppOptions<ExtraThis, ExtraOptions extends UnknownRecord> = Partial<
    Options<ExtraOptions>
  > &
    Partial<
      UniqueLeft<UniqueLeft<ExtraThis, ExtraOptions>, Options<ExtraOptions>>
    > & {
      [P in keyof ExtraOptions]: P extends keyof Options<ExtraOptions>
        ? unknown
        : ExtraOptions[P];
    } & ThisType<IAppInstance<ExtraThis, ExtraOptions>>;

  interface Constructor {
    <ExtraThis = {}, ExtraOptions extends Record<string, unknown> = {}>(
      opts: UserAppOptions<
        ExtraThis & IGlobalMiniProgramExtraThis4App,
        ExtraOptions
      >
    ): void;
  }

  interface GetApp {
    <
      ExtraThis = {},
      ExtraOptions extends Record<string, unknown> = {}
    >(): IAppInstance<
      ExtraThis & IGlobalMiniProgramExtraThis4App,
      ExtraOptions
    >;
  }
}
