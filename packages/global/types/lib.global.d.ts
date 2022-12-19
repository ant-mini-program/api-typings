export type UnknownRecord = MiniProgram.UnknownRecord;

export type IAppOnLaunchOptions<Query extends Record<string, string>> = MiniProgram.App.LaunchOptions<Query>;

/**
 * Page 的类型
 */
export interface IPage<Data, ExtraThis, ExtraOptions extends UnknownRecord> {
  (opts: MiniProgram.Page.IUserPageOptions<Data, ExtraThis, ExtraOptions>): any;
}


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
    opts: MiniProgram.Component.IUserComponentOptions<
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
  export interface IGlobalMiniProgramExtraThis4App {}

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
  export interface IGlobalMiniProgramExtraThis4Page {}

  /**
   * Extra `this` for Component instance.
   */
  export interface IGlobalMiniProgramExtraThis4Component {}

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

