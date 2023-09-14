declare namespace my {
  /**
   * 获取小程序环境变量对象
   * @description 相比于 [my.getSystemInfo]() / [my.getSystemInfoSync](), my.env 在使用上开销更低
   * @see https://opendocs.alipay.com/mini/api/env
   */
  export const env: {
    /**
     * 文件系统中的用户目录路径 (本地路径)
     * @example "https://usr"
     */
    USER_DATA_PATH: string;
    /**
     * 客户端名称简写
     * @description 支付宝客户端为 'ap'。
     * @example "ap"
     */
    clientName: string;
    /**
     * 客户端版本号
     * @example "10.2.90"
     */
    clientVersion: string;
    /**
     * 设置的语言。
     * @description
     * - 简体中文: "zh-Hans"
     * - 英文: "en"
     * - 繁体中文-香港: "zh-HK"
     * - 繁体中文-台湾: "zh-Hant"
     * @example "zh-Hans"
     */
    language: string;
    /**
     * 系统名称
     * @description
     * - iOS 系统: 'iOS'
     * - 安卓系统: 'Android'
     * - 其他系统: 'unknown'
     * @example "iOS"
     */
    platform: string;
    /**
     * 当前客户端环境
     */
    clientEnv?: 'prod' | 'test' | 'stable' | 'pre' | 'unknown';
  };
  /**
   * 判断当前是否为 IDE 环境
   */
  export const isIDE: boolean;
  /**
   * 获取基础库版本号
   * @description
   * 以 `major.minor.patch` 3 段数字作为版本号
   * - major: 大版本升级，包含架构升级，可能存在不兼容设计
   * - minor: 向前兼容的功能性迭代
   * - patch: 向前兼容的小功能及 bug 修复迭代
   * @see https://opendocs.alipay.com/mini/api/sdk-version
   */
  export const SDKVersion: string;
  /**
   * 将 ArrayBuffer 转换为 Base64 字符串
   * @see https://opendocs.alipay.com/mini/api/021zmz
   */
  export function arrayBufferToBase64(arrayBuffer: ArrayBuffer): string;
  /**
   * 将 Base64 格式字符串转换为 ArrayBuffer
   * @see https://opendocs.alipay.com/mini/api/021zmy
   */
  export function base64ToArrayBuffer(base64: string): ArrayBuffer;
  /**
   * 清除本地数据缓存
   * @description
   * - 清空内嵌 webview 的存储时不会同时清空当前小程序本身的存储数据
   * - 支付宝设置中心清除缓存不会导致小程序缓存失效
   * @see https://opendocs.alipay.com/mini/api/storage
   */
  export function clearStorage(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 是否成功
       */
      success: boolean;
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
             * 是否成功
             */
            success: boolean;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 是否成功
     */
    success: boolean;
  }>;
  /**
   * 同步清除本地数据缓存
   * @see https://opendocs.alipay.com/mini/api/ulv85u
   */
  export function clearStorageSync(): {
    /**
     * 是否成功
     */
    success: boolean;
  };
  /**
   * 获取授权码 (AuthCode)
   * @see https://opendocs.alipay.com/mini/api/openapi-authorize
   */
  export function getAuthCode(object?: {
    /**
     * 授权类型
     * @default auth_base
     */
    scopes?: string | string[];
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 授权码
       */
      authCode: string;
      /**
       * 失败的授权类型
       */
      authErrorScopes: IMyApGetAuthCodeAuthErrorScopes;
      /**
       * 成功的授权 scope
       */
      authSuccessScopes: (
        | 'auth_base'
        | 'auth_user'
        | 'auth_zhima'
        | 'order_service'
        | 'trip_ticket'
        | 'ride_hailing'
        | 'charging_pile'
        | 'ptjob_order_sync'
        | 'indr_order_sync'
        | 'car_rental_auth'
        | 'hospital_order'
        | 'consumer_finance'
      )[];
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
             * 授权码
             */
            authCode: string;
            /**
             * 失败的授权类型
             */
            authErrorScopes: IMyApGetAuthCodeAuthErrorScopes;
            /**
             * 成功的授权 scope
             */
            authSuccessScopes: (
              | 'auth_base'
              | 'auth_user'
              | 'auth_zhima'
              | 'order_service'
              | 'trip_ticket'
              | 'ride_hailing'
              | 'charging_pile'
              | 'ptjob_order_sync'
              | 'indr_order_sync'
              | 'car_rental_auth'
              | 'hospital_order'
              | 'consumer_finance'
            )[];
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 授权码
     */
    authCode: string;
    /**
     * 失败的授权类型
     */
    authErrorScopes: IMyApGetAuthCodeAuthErrorScopes;
    /**
     * 成功的授权 scope
     */
    authSuccessScopes: (
      | 'auth_base'
      | 'auth_user'
      | 'auth_zhima'
      | 'order_service'
      | 'trip_ticket'
      | 'ride_hailing'
      | 'charging_pile'
      | 'ptjob_order_sync'
      | 'indr_order_sync'
      | 'car_rental_auth'
      | 'hospital_order'
      | 'consumer_finance'
    )[];
  }>;
  /**
   * 获取缓存数据的异步接口
   * @see https://opendocs.alipay.com/mini/api/azfobl
   */
  export function getStorage(object: {
    /**
     * 本地缓存中指定的 key
     */
    key: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * key 对应的内容
       */
      data: any;
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
             * key 对应的内容
             */
            data: any;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * key 对应的内容
     */
    data: any;
  }>;
  /**
   * 获取缓存数据相关信息
   * @see https://opendocs.alipay.com/mini/api/zvmanq
   */
  export function getStorageInfo(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 当前 storage 中所有的 key
       */
      keys: string[];
      /**
       * 当前占用的空间大小，单位为 KB
       */
      currentSize: number;
      /**
       * 限制的空间大小，单位为 KB
       */
      limitSize: number;
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
             * 当前 storage 中所有的 key
             */
            keys: string[];
            /**
             * 当前占用的空间大小，单位为 KB
             */
            currentSize: number;
            /**
             * 限制的空间大小，单位为 KB
             */
            limitSize: number;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 当前 storage 中所有的 key
     */
    keys: string[];
    /**
     * 当前占用的空间大小，单位为 KB
     */
    currentSize: number;
    /**
     * 限制的空间大小，单位为 KB
     */
    limitSize: number;
  }>;
  /**
   * 同步获取缓存数据相关信息
   * @see https://opendocs.alipay.com/mini/api/uw5rdl
   */
  export function getStorageInfoSync(): {
    /**
     * 当前 storage 中所有的 key
     */
    keys: string[];
    /**
     * 当前占用的空间大小，单位为 KB
     */
    currentSize: number;
    /**
     * 限制的空间大小，单位为 KB
     */
    limitSize: number;
  };
  /**
   * 同步获取缓存数据
   * @see https://opendocs.alipay.com/mini/api/ox0wna
   */
  export function getStorageSync(object: {
    /**
     * 本地缓存中指定的 key
     */
    key: string;
  }): {
    /**
     * key 对应的内容
     */
    data: unknown;
  };
  /**
   * 获取手机系统信息
   * @see https://opendocs.alipay.com/mini/api/system-info
   */
  export function getSystemInfo(object?: {
    /**
     * 额外返回 `notification*Authorized` 相关字段
     */
    includeNotification?: boolean;
    /**
     * 额外返回 `bluetooth*`相关字段
     */
    includeBluetooth?: boolean;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: ITypeSystemInfo): void;
    /**
     * 接口调用失败的回调函数
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | ITypeSystemInfo
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<ITypeSystemInfo>;
  /**
   * 获取手机系统信息的同步接口
   * @see https://opendocs.alipay.com/mini/api/gawhvz
   */
  export function getSystemInfoSync(object?: {
    /**
     * 额外返回 `notification*Authorized` 相关字段
     */
    includeNotification?: boolean;
    /**
     * 额外返回 bluetooth*相关字段
     */
    includeBluetooth?: boolean;
  }): ITypeSystemInfo;
  /**
   * 跳转到其他小程序
   * @see https://opendocs.alipay.com/mini/api/yz6gnx
   */
  export function navigateToMiniProgram(object: {
    /**
     * 要跳转的目标小程序appId。
     */
    appId: string;
    /**
     * 打开的页面路径，如果为空则打开首页。
     */
    path?: string;
    /**
     * 用于设置目标小程序应用的 `query` 数据。目标小程序可在 [App.onLaunch](GlobalThis.App) （冷启动）或 [App.onshow](GlobalThis.App) （热启动）中通过 `options.query` 获取
     * @description 目标小程序可在 App.onLaunch()，App.onShow() 中的 query 字段获取到这份数据。
     */
    query?: IMyNavigateToMiniProgramQuery;
    /**
     * 需要传递给目标小程序的数据。目标小程序可在 [App.onLaunch](GlobalThis.App) （冷启动）或 [App.onshow](GlobalThis.App) （热启动）中通过 `options.referrerInfo.extraData` 获取
     * @description 目标小程序可在 App.onLaunch()，App.onShow() 中的 referrerInfo.extraData 字段获取到这份数据。
     */
    extraData?: IMyNavigateToMiniProgramExtraData;
    /**
     * 指定需要打开的小程序的版本类型
     * @description 仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。
     * @default "release"
     */
    envVersion?: 'develop' | 'trial' | 'release';
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
  }): Promise<void>;
  /**
   * 取消监听小程序错误事件
   * @see https://opendocs.alipay.com/mini/00njqm
   */
  export function offError(cb?: (message: string, stack: string) => void): void;
  /**
   * 取消监听未处理的 Promise 拒绝事件
   * @see https://opendocs.alipay.com/mini/00nfnd
   */
  export function offUnhandledRejection(
    cb?: (param: {
      /**
       * reject() 的接收值，一般是 error 对象
       */
      reason: Error | unknown;
      /**
       * 被 reject 的 Promise 对象
       */
      promise: Promise<unknown>;
    }) => void
  ): void;
  /**
   * 监听小程序错误事件
   * @description
   * 目前仅指 JS 执行错误。触发时机和参数与 App.onError 的一致。
   * 使用 my.onError 监听到的报错，app.js 中的 onError 方法也会监听到。
   * 使用 my.onError 监听页面报错，如果在多个页面开启监听没有关闭，则页面报错时会触发多个监听事件，建议在页面关闭时调用 my.offError 关闭监听。
   * @see https://opendocs.alipay.com/mini/00nnsx
   */
  export function onError(cb: (message: string, stack: string) => void): void;
  /**
   * 监听未处理的 Promise 拒绝事件
   * @description 当 Promise 被 reject 且没有 reject 处理器的时候，会触发 unhandledrejection 事件，该事件的回调时机和参数与 App.onUnhandledRejection 的一致。
   * @see https://opendocs.alipay.com/mini/00nd0f
   */
  export function onUnhandledRejection(
    cb: (param: {
      /**
       * reject() 的接收值，一般是 error 对象
       */
      reason: Error | unknown;
      /**
       * 被 reject 的 Promise 对象
       */
      promise: Promise<unknown>;
    }) => void
  ): void;
  /**
   * 删除缓存数据
   * @see https://opendocs.alipay.com/mini/api/of9hze
   */
  export function removeStorage(object: {
    /**
     * 缓存数据的 key
     */
    key: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 是否成功
       */
      success: true;
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
             * 是否成功
             */
            success: true;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 是否成功
     */
    success: true;
  }>;
  /**
   * 同步删除缓存数据
   * @see https://opendocs.alipay.com/mini/api/ytfrk4
   */
  export function removeStorageSync(object: {
    /**
     * 缓存数据的 key
     */
    key: string;
  }): {
    /**
     * 是否成功
     */
    success: true;
  };
  /**
   * 发起网络请求
   * @description [my.httpRequest]() 已不再维护，建议使用 [my.request]()
   * @see https://opendocs.alipay.com/mini/api/owycmh
   */
  export function request(object: {
    /**
     * 目标服务器 URL
     * @description
     * - 目前只支持 HTTPS 协议的请求
     * - 目前只支持与 *域名白名单* 中的域名通讯
     *   - 开发过程中，可通过开发者工具 **详情 > 域名信息 > 忽略 httpRequest 域名合法性检查** 忽略该限制（模拟器、预览以及真机调试场景不会校验域名合法性）
     *   - 正式/体验版本必须在 **支付宝小程序管理中心 > 小程序详情 > 设置 > 开发设置 > 服务器域名白名单** 中配置
     *   - 域名添加或删除后仅对新版本生效，老版本仍使用修改前的域名配置
     */
    url: string;
    /**
     * 返回的数据格式
     * @default 'json'
     */
    dataType?: 'json' | 'text' | 'base64' | 'arraybuffer';
    /**
     * HTTP 请求方法
     * @default 'GET'
     */
    method?:
      | 'GET'
      | 'POST'
      | 'PUT'
      | 'DELETE'
      | 'OPTIONS'
      | 'HEAD'
      | 'TRACE'
      | 'CONNECT';
    /**
     * 传给服务器的数据
     * @description
     * 传给服务器的数据最终会是 string 类型，如果 data 不是 string 类型，会被转换成 string 。转换规则如下：
     * - 若方法为 `GET`，会将数据转换成 querystring 形式： `encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...`
     * - 若方法为 `POST` 且 `headers['content-type']` 为 `application/json` ，会对数据进行 JSON 序列化。
     * - 若方法为 `POST` 且 `headers['content-type']` 为 `application/x-www-form-urlencoded` ，会将数据转换成 querystring形式： `encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...`
     */
    data?: string | Record<string, string> | ArrayBuffer;
    /**
     * 设置请求的 HTTP 头对象
     * @description
     * - "content-type" 字段默认为 `application/json`
     * - `referer` 字段不可设置，其格式固定为 https://{appid}.hybrid.alipay-eco.com/{appid}/{version}/index.html#{page}，其中 {appid} 为小程序的 APPID，{version} 为小程序发布标识，{page} 为小程序当前页面。
     */
    headers?: Record<string, string>;
    /**
     * 设置请求的 HTTP 头对象
     * @description
     * - "content-type" 字段默认为 `application/json`
     * - `referer` 字段不可设置，其格式固定为 https://{appid}.hybrid.alipay-eco.com/{appid}/{version}/index.html#{page}，其中 {appid} 为小程序的 APPID，{version} 为小程序发布标识，{page} 为小程序当前页面。
     */
    header?: Record<string, string>;
    /**
     * 超时时间，单位 ms
     * @default 30000
     */
    timeout?: number;
    /**
     * referer 策略
     * @default 'querystring'
     */
    referrerStrategy?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 响应数据，格式取决于请求时的 `dataType` 参数
       */
      data: string | Record<string, unknown> | ArrayBuffer;
      /**
       * HTTP 响应码。
       */
      status: number;
      /**
       * HTTP 响应头。
       */
      headers: Record<string, string>;
      /**
       * HTTP 响应码。
       */
      statusCode: number;
      /**
       * HTTP 响应头。
       */
      header: Record<string, string>;
    }): void;
    /**
     * 接口调用失败的回调函数
     */
    fail?(
      err:
        | {
            error?: number;
            errorMessage?: string;
          }
        | {
            error: 19;
            errorMessage: 'http status error';
          }
        | {
            error: 14;
            errorMessage: 'parse arraybuffer data error';
          }
        | {
            error: 14;
            errorMessage: 'JSON parse data error';
          }
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * 响应数据，格式取决于请求时的 `dataType` 参数
             */
            data: string | Record<string, unknown> | ArrayBuffer;
            /**
             * HTTP 响应码。
             */
            status: number;
            /**
             * HTTP 响应头。
             */
            headers: Record<string, string>;
            /**
             * HTTP 响应码。
             */
            statusCode: number;
            /**
             * HTTP 响应头。
             */
            header: Record<string, string>;
          }
        | (
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 19;
                errorMessage: 'http status error';
              }
            | {
                error: 14;
                errorMessage: 'parse arraybuffer data error';
              }
            | {
                error: 14;
                errorMessage: 'JSON parse data error';
              }
          )
    ): void;
  }): Promise<{
    /**
     * 响应数据，格式取决于请求时的 `dataType` 参数
     */
    data: string | Record<string, unknown> | ArrayBuffer;
    /**
     * HTTP 响应码。
     */
    status: number;
    /**
     * HTTP 响应头。
     */
    headers: Record<string, string>;
    /**
     * HTTP 响应码。
     */
    statusCode: number;
    /**
     * HTTP 响应头。
     */
    header: Record<string, string>;
  }> &
    RequestTask;
  /**
   * 将数据存储在本地缓存的指定的 key 中
   * @see https://opendocs.alipay.com/mini/api/eocm6v
   */
  export function setStorage(object: {
    /**
     * 存储的数据
     * @description
     * - 单个 key 允许存储的最大数据大小为 200KB
     * - 所有数据存储上限为 10MB。
     */
    data: unknown;
    /**
     * 存储的 key
     */
    key: string;
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
  }): Promise<void>;
  /**
   * 同步将数据存储在本地缓存的指定的 key 中
   * @see https://opendocs.alipay.com/mini/api/cog0du
   */
  export function setStorageSync(object: {
    /**
     * 需要存储的内容
     */
    data: unknown;
    /**
     * 本地缓存中指定的 key
     */
    key: string;
  }): void;
  export interface RequestTask {
    /**
     * 取消本次任务
     * @see https://opendocs.alipay.com/mini/075h2u
     */
    abort(object: {
      requestTaskId: number;
      operationType: 'abort';
      /**
       * 接口调用成功的回调函数
       */
      success?(data: { success: true }): void;
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
              success: true;
            }
          | {
              error?: number;
              errorMessage?: string;
            }
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * 移除 HTTP Response Header 事件的监听函数
     * @see https://opendocs.alipay.com/mini/075qu0
     */
    offHeadersReceived(cb?: (arg: {}) => void): void;
    /**
     * 监听 HTTP Response Header 事件。会比请求完成事件更早
     * @see https://opendocs.alipay.com/mini/075pji
     */
    onHeadersReceived(
      cb: (arg: {
        /**
         * 开发者服务器返回的 HTTP Response Header
         */
        headers: IRequestTaskOnHeadersReceivedHeaders;
      }) => void
    ): void;
  }
  interface IMyApGetAuthCodeAuthErrorScopes {
    /**
     * key 是授权失败的 scope，value 是对应的错误码
     */
    [scope: string]: string;
  }
  interface IMyNavigateToMiniProgramExtraData {
    /**
     * 参数键值对
     */
    [key: string]: unknown;
  }
  interface IMyNavigateToMiniProgramQuery {
    /**
     * query 参数键值对
     */
    [key: string]: unknown;
  }
  interface IRequestTaskOnHeadersReceivedHeaders {
    [key: string]: string;
  }
  interface ITypeSystemInfo {
    /**
     * 当前运行的客户端
     * @example "alipay"
     */
    app: string;
    /**
     * 客户端设置的语言
     * @example "zh-Hans"
     */
    language: string;
    /**
     * 设备像素比
     * @example 3
     */
    pixelRatio: number;
    /**
     * 平台
     * @example "Android"
     */
    platform: string;
    /**
     * @deprecated 已废弃，不要使用
     * 平台类型
     * @example "ap"
     */
    platformType?: string;
    /**
     * 屏幕宽度
     * @example 1080
     */
    screenWidth: number;
    /**
     * 标题栏高度
     * @example 48
     */
    titleBarHeight: number;
    /**
     * 客户端版本号
     * @example "10.2.28.1769"
     */
    version: string;
    /**
     * 窗口宽度
     * @example 360
     */
    windowWidth: number;
    /**
     * 用于 Android API 版本
     * @example 29
     */
    apiLevel?: number;
    /**
     * 用来区分显示企业商家服务/个人等界面信息
     * @example "normal"
     */
    appMode?: `${ESystemInfoAppMode}`;
    /**
     * 手机品牌
     * @example "HUAWEI"
     */
    brand: string;
    /**
     * 当前电池电量
     * @example "79%"
     */
    currentBattery: string;
    /**
     * 用户设置字体大小
     * @example 1
     */
    fontSizeSetting: number;
    /**
     * 手机型号
     * @example "HUAWEI TAS-AL00"
     */
    model: string;
    /**
     * 设备性能分级
     */
    performance: `${ETypeSystemInfo$Performance}`;
    /**
     * 屏幕信息
     */
    screen: ITypeSystemInfo$Screen;
    /**
     * 屏幕高度
     * @example 2259
     */
    screenHeight: number;
    /**
     * 状态栏高度
     * @example 27
     */
    statusBarHeight: number;
    /**
     * 设备磁盘容量
     * @example "118 GB"
     */
    storage: string;
    /**
     * 系统版本
     * @example "10"
     */
    system: string;
    /**
     * 透明状态栏
     * @example false
     */
    transparentTitle: boolean;
    /**
     * 窗口高度
     * @example 780
     */
    windowHeight: number;
    /**
     * 是否 iphoneX 系列
     * @example false
     */
    isIphoneXSeries: boolean;
    /**
     * 在竖屏正方向下的安全区域
     */
    safeArea?: ITypeSystemInfo$SafeArea;
    /**
     * 允许支付宝使用相册的开关
     */
    albumAuthorized: boolean;
    /**
     * 允许支付宝使用摄像头的开关
     */
    cameraAuthorized: boolean;
    /**
     * 允许支付宝使用定位的开关
     */
    locationAuthorized: boolean;
    /**
     * 允许支付宝使用麦克风的开关
     */
    microphoneAuthorized: boolean;
    /**
     * 定位的系统开关
     */
    locationEnabled: boolean;
    /**
     * Wi-Fi 的系统开关
     */
    wifiEnabled: boolean;
    /**
     * 蓝牙的系统开关
     */
    bluetoothEnabled: boolean;
    /**
     * 允许支付宝使用蓝牙的开关
     */
    bluetoothAuthorized: boolean;
    /**
     * 允许支付宝通知的开关
     */
    notificationAuthorized: boolean;
    /**
     * 允许支付宝通知带有提醒的开关
     */
    notificationAlertAuthorized: boolean;
    /**
     * 允许支付宝通知带有标记的开关
     */
    notificationBadgeAuthorized: boolean;
    /**
     * 允许支付宝通知带有声音的开关
     */
    notificationSoundAuthorized: boolean;
    /**
     * 悬浮窗权限
     */
    overlayAuthorized: boolean;
  }
  interface ITypeSystemInfo$SafeArea {
    left: number;
    right: number;
    top: number;
    bottom: number;
    width: number;
    height: number;
  }
  interface ITypeSystemInfo$Screen {
    /**
     * 屏幕宽度
     */
    width: number;
    /**
     * 屏幕高度
     */
    height: number;
  }
}

declare const enum ESystemInfoAppMode {
  /**
   * 标准版
   */
  normal = 'normal',
  /**
   * 大字体版
   */
  bigFontSize = 'bigFontSize',
  /**
   * 国际版
   */
  INT = 'INT',
  /**
   * 澳门版
   */
  MO = 'MO',
  /**
   * 企业版
   */
  Enterprise = 'Enterprise',
  /**
   * 青少年版
   */
  teenager = 'teenager',
}

declare const enum ETypeSystemInfo$Performance {
  /**
   * 高性能
   * @description
   * - iOS 设备运行内存大于等于 4GB (对应 iPhone Xs 及以上)
   * - Android 设备运行内存大于等于 4GB
   */
  high = 'high',
  /**
   * 性能中等
   * @description
   * - iOS 设备运行内存大于等于 2GB (对应 iPhone 6s ~ iPhone XR)
   * - Android 设备运行内存大于等于 3GB 且 CPU 核心数大于 4
   */
  middle = 'middle',
  /**
   * 性能较弱
   */
  low = 'low',
  /**
   * 无法识别
   * @description 设备运行内存无法识别
   */
  unknown = 'unknown',
}
