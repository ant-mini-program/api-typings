export type IAppOnLaunchOptions<Query extends Record<string, string>> = MiniProgram.App.LaunchOptions<Query>;
export interface IRequirePlugin<
  Target extends Record<string, any> = Record<string, any>
> {
  <K extends keyof Target>(pluginName: K): Target[K];
  <Result extends any>(pluginName: string): Result;
}

declare global {
  /**
   * 使用插件提供的 JS 接口，函数返回值为 \`插件\` 通过 \`main\` 字段暴露的 JS 接口。
   */
  const requirePlugin: IRequirePlugin;
  /**
   * Extra `this` for App instance.
   */
  interface IGlobalMiniProgramExtraThis4App {}

  /**
   * App's constructor
   * @link https://opendocs.alipay.com/mini/framework/app-detail
   */
  let App: MiniProgram.App.Constructor;

  /**
   * Get App.
   * @link https://opendocs.alipay.com/mini/framework/get-app
   */
  let getApp: MiniProgram.App.GetApp;

  /**
   * Extra `this` for Page instance.
   */
  interface IGlobalMiniProgramExtraThis4Page {}

  /**
   * Get Current Pages
   * @link https://opendocs.alipay.com/mini/framework/getcurrentpages
   */
  let getCurrentPages: MiniProgram.Page.GetCurrentPages;

  /**
   * Page's constructor
   * @link https://opendocs.alipay.com/mini/framework/page-detail
   */
  let Page: MiniProgram.Page.Constructor

  /**
   * Extra `this` for Component instance.
   */
  interface IGlobalMiniProgramExtraThis4Component {}

  /**
   * Component's constructor
   * @link https://opendocs.alipay.com/mini/framework/component_object
   */
  let Component: MiniProgram.Component.Constructor;

  /**
   * 注册一个 `mixin`，接受一个 `Object` 类型的参数。
   * 
   */
  let Mixin: MiniProgram.Mixin.Constructor
}

