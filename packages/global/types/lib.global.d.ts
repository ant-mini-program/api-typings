export type IAppOnLaunchOptions<Query extends Record<string, string>> =
  MiniProgram.App.LaunchOptions<Query>;

export interface IRequirePluginAsync<
  Target extends Record<string, any> = Record<string, any>
> {
  <K extends keyof Target>(pluginName: K): Promise<Target[K]>;
  <Result extends any>(pluginName: string): Promise<Result>;
}
export interface IRequirePlugin<
  Target extends Record<string, any> = Record<string, any>
> {
  <K extends keyof Target>(pluginName: K): Target[K];
  <Result extends any>(pluginName: string): Result;
  async: IRequirePluginAsync;
}

export type IMixin4Legacy<
  Data,
  Props,
  Methods,
  ExtraThis = MiniProgram.UnknownRecord,
  ExtraOptions extends MiniProgram.UnknownRecord = MiniProgram.UnknownRecord
> = MiniProgram.Mixin.IMixin4Legacy<
  Data,
  Props,
  Methods,
  ExtraThis,
  ExtraOptions
>;

export interface Require {
  <T extends any>(path: string): T;
  <T extends any>(path: string, cb?: (o: T) => void): void;

  async<T extends any>(path: string): Promise<T>;
}

declare global {
  /**
   * Extra `this` for Component instance.
   */
  interface IGlobalMiniProgramExtraThis4Component {}

  /**
   * Extra `this` for Page instance.
   */
  interface IGlobalMiniProgramExtraThis4Page {}

  /**
   * Extra `this` for App instance.
   */
  interface IGlobalMiniProgramExtraThis4App {}

  /**
   * 使用插件提供的 JS 接口，函数返回值为 \`插件\` 通过 \`main\` 字段暴露的 JS 接口。
   */
  const requirePlugin: IRequirePlugin;

  const require: Require;

  /**
   * App's constructor
   * @link https://opendocs.alipay.com/mini/framework/app-detail
   */
  const App: MiniProgram.App.Constructor;

  /**
   * Get App.
   * @link https://opendocs.alipay.com/mini/framework/get-app
   */
  const getApp: MiniProgram.App.GetApp;

  /**
   * Get Current Pages
   * @link https://opendocs.alipay.com/mini/framework/getcurrentpages
   */
  const getCurrentPages: MiniProgram.Page.GetCurrentPages;

  /**
   * Page's constructor
   * @link https://opendocs.alipay.com/mini/framework/page-detail
   */
  const Page: MiniProgram.Page.Constructor;

  /**
   * Component's constructor
   * @link https://opendocs.alipay.com/mini/framework/component_object
   */
  const Component: MiniProgram.Component.Constructor;

  /**
   * 注册一个 `mixin`，接受一个 `Object` 类型的参数。
   * @version 2.8.2
   * @link https://opendocs.alipay.com/mini/05bchn
   */
  const Mixin: MiniProgram.Mixin.Constructor;
}
