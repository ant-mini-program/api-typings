declare namespace my {
  /**
   * @summary 获取小程序环境变量对象
   * @description 相比于 [my.getSystemInfo]() / [my.getSystemInfoSync](), my.env 在使用上开销更低
   */
  export const env: {
    /**
     * @summary 文件系统中的用户目录路径 (本地路径)
     * @example "https://usr"
     */
    USER_DATA_PATH: string;
    /**
     * @summary 客户端名称简写
     * @description - 支付宝客户端为 'ap'。
     * @sdk 1.24.9
     * @example "ap"
     */
    clientName: string;
    /**
     * @summary 客户端版本号
     * @sdk 1.24.9
     * @example "10.2.90"
     */
    clientVersion: string;
    /**
     * @summary 设置的语言。
     * @description
     * - 简体中文: "zh-Hans"
     * - 英文: "en"
     * - 繁体中文-香港: "zh-HK"
     * - 繁体中文-台湾: "zh-Hant"
     * @sdk 1.24.9
     * @example "zh-Hans"
     */
    language: string;
    /**
     * @summary 系统名称
     * @description
     * - iOS 系统: 'iOS'
     * - 安卓系统: 'Android'
     * - 其他系统: 'unknown'
     * @sdk 1.24.9
     * @example "iOS"
     */
    platform: string;
    /**
     * @summary 当前客户端环境
     * @sdk 2.7.24
     */
    clientEnv?: 'prod' | 'test' | 'stable' | 'pre' | 'unknown';
  };
  /**
   * @summary 获取基础库版本号
   * @description
   * 以 `major.minor.patch` 3 段数字作为版本号
   * - major: 大版本升级，包含架构升级，可能存在不兼容设计
   * - minor: 向前兼容的功能性迭代
   * - patch: 向前兼容的小功能及 bug 修复迭代
   */
  export const SDKVersion: string;
  /**
   * @summary 创建 canvas 对象
   */
  export function _createCanvas(payload: {
    /**
     * @summary canvas 元素的 id 属性
     */
    id: string;
    /**
     * @summary 成功回调
     */
    success: (canvas: Canvas) => void;
  }): void;
  /**
   * @summary 创建离屏 canvas 对象
   */
  export function _createOffscreenCanvas(width?: number, height?: number, type?: '2d' | 'webgl'): OffScreenCanvas;
  /**
   * @summary 写入联系人资料到设备通讯录
   * @description 用户可以选择将表单以“创建新联系人”或“添加到现有联系人”的方式，写入联系人资料到手机系统的通讯录
   * @see https://opendocs.alipay.com/mini/api/contact
   */
  export function addPhoneContact(r?: {
    /**
     * @summary 姓氏
     */
    lastName?: string;
    /**
     * @summary 中间名
     */
    middleName?: string;
    /**
     * @summary 名字
     */
    firstName?: string;
    /**
     * @summary 昵称
     */
    nickName?: string;
    /**
     * @summary 备注
     */
    remark?: string;
    /**
     * @summary 手机号
     */
    mobilePhoneNumber?: string;
    /**
     * @summary 工作传真
     */
    workFaxNumber?: string;
    /**
     * @summary 工作电话
     */
    workPhoneNumber?: string;
    /**
     * @summary 公司电话
     */
    hostNumber?: string;
    /**
     * @summary 住宅传真
     */
    homeFaxNumber?: string;
    /**
     * @summary 住宅电话
     */
    homePhoneNumber?: string;
    /**
     * @summary 微信号
     */
    weChatNumber?: string;
    /**
     * @summary 支付宝账号
     */
    alipayAccount?: string;
    organization?: string;
    title?: string;
    email?: string;
    url?: string;
    addressCountry?: string;
    addressState?: string;
    addressCity?: string;
    addressStreet?: string;
    addressPostalCode?: string;
    workCountry?: string;
    workState?: string;
    workCity?: string;
    workStreet?: string;
    workPostalCode?: string;
    homeCountry?: string;
    homeState?: string;
    homeCity?: string;
    homeStreet?: string;
    homePostalCode?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
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
          },
    ): void;
  }): Promise<{
    success: true;
  }>;
  /**
   * @summary 显示警告框
   * @description 可以设置警告框的标题、内容、按钮文字等，暂不支持设置图片等样式
   * @see https://opendocs.alipay.com/mini/api/ui-feedback
   */
  export function alert(r?: {
    /**
     * @summary 警告框的标题
     */
    title?: string;
    /**
     * @summary 警告框的内容
     */
    content?: string;
    /**
     * @summary 按钮文字
     * @ide 2.0
     * @default "确定"
     */
    buttonText?: string;
    /**
     * @summary "确认" 按钮颜色，HEX 格式
     */
    confirmColor?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 将 ArrayBuffer 转换为 Base64 字符串
   */
  export function arrayBufferToBase64(arrayBuffer: ArrayBuffer): string;
  /**
   * @summary 将 Base64 格式字符串转换为 ArrayBuffer
   */
  export function base64ToArrayBuffer(base64: string): ArrayBuffer;
  /**
   * @summary 规划出行路线
   * @description
   * - 根据起点和终点的地理位置，智能规划最佳出行路线，并计算不同出行方式下的行动距离和所需时间。
   * - 默认规划步行路线，支持规划步行、公交、骑行和驾车四种路线
   * @see https://opendocs.alipay.com/mini/api/calculate-route
   */
  export function calculateRoute(r: {
    /**
     * @summary 搜索类型。
     * @default "walk"
     */
    searchType?: 'walk' | 'bus' | 'drive' | 'ride';
    /**
     * @summary 起点纬度。
     */
    startLat: number;
    /**
     * @summary 起点经度。
     */
    startLng: number;
    /**
     * @summary 终点纬度。
     */
    endLat: number;
    /**
     * @summary 终点经度。
     */
    endLng: number;
    /**
     * @summary 途径点，仅驾车规划有效，即 `searchType="drive"` 时有效。
     */
    throughPoints?: ICalculateRouteThroughPoints[];
    /**
     * @summary 仅在 驾车模式（`searchType="drive"`）和 公交模式（`searchType="bus"`）支持，具体值见 mode 参数列表。
     */
    mode?: ECalculateRouteMode;
    /**
     * @summary 公交模式（`searchType="bus"`）下必填。传参可填写城市中文名称或城市名称拼音。例如：`city:'hangzhou'` 或 `city: '杭州'`。
     */
    city?: string;
    /**
     * @summary 公交跨城模式下必填。
     */
    destinationCity?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 是否成功，失败时不会返回其他字段
       */
      success: boolean;
      /**
       * @summary 距离，单位为 米。
       */
      distance: number;
      /**
       * @summary 时间，单位为 秒。
       */
      duration: number;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 是否成功，失败时不会返回其他字段
             */
            success: boolean;
            /**
             * @summary 距离，单位为 米。
             */
            distance: number;
            /**
             * @summary 时间，单位为 秒。
             */
            duration: number;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 是否成功，失败时不会返回其他字段
     */
    success: boolean;
    /**
     * @summary 距离，单位为 米。
     */
    distance: number;
    /**
     * @summary 时间，单位为 秒。
     */
    duration: number;
  }>;
  /**
   * @summary 取消蓝牙配对
   */
  export function cancelBluetoothPair(r: {
    /**
     * @summary 蓝牙设备 id
     */
    deviceId: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 导出画布内容为图片
   */
  export function canvasToTempFilePath(r: {
    /**
     * @summary 画布标识，传入 canvas 组件的 id
     */
    canvasId?: string;
    /**
     * @summary 画布标识，传入 canvas 组件实例 （canvas type="2d/webgl" 时使用该属性）。
     */
    canvas?: CanvasContext;
    x: number;
    y: number;
    width: number;
    height: number;
    destWidth: number;
    destHeight: number;
    fileType: 'png' | 'jpg';
    quality: number;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 生成文件的临时路径 (本地路径)。
       */
      tempFilePath: string;
      apFilePath: string;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(
      err:
        | {
            error?: number;
            errorMessage?: string;
          }
        | {
            error: 1;
            errorMessage: 'canvas content or format wrong!';
          },
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 生成文件的临时路径 (本地路径)。
             */
            tempFilePath: string;
            apFilePath: string;
          }
        | (
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 1;
                errorMessage: 'canvas content or format wrong!';
              }
          ),
    ): void;
  }): Promise<{
    /**
     * @summary 生成文件的临时路径 (本地路径)。
     */
    tempFilePath: string;
    apFilePath: string;
  }>;
  /**
   * @summary 从支付宝通讯录中选择联系人
   * @see https://opendocs.alipay.com/mini/api/ui-contact
   */
  export function chooseAlipayContact(r?: {
    /**
     * @summary 单次最多选择联系人个数
     * @description 默认值为 1，最大值为 10。
     * @default 1
     */
    count?: number;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 选中的支付宝联系人数组。
       */
      contacts: IMyChooseAlipayContactContacts[];
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 选中的支付宝联系人数组。
             */
            contacts: IMyChooseAlipayContactContacts[];
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 选中的支付宝联系人数组。
     */
    contacts: IMyChooseAlipayContactContacts[];
  }>;
  /**
   * @summary 打开城市选择列表
   * @see https://opendocs.alipay.com/mini/api/ui-city
   */
  export function chooseCity(r?: {
    /**
     * @summary 是否显示当前定位城市。
     * @default false
     */
    showLocatedCity?: boolean;
    /**
     * @summary 是否显示热门城市。
     * @default true
     */
    showHotCities?: boolean;
    /**
     * @summary 是否修改当前定位城市，如果 showLocatedCity 为 false，此设置无效。
     * @default false
     */
    setLocatedCity?: boolean;
    /**
     * @summary 自定义城市列表。
     */
    cities?: ITypeCityInfo[];
    /**
     * @summary 自定义热门城市列表。
     */
    hotCities?: ITypeCityInfo[];
    /**
     * @summary 自定义历史访问城市列表。
     */
    customHistoryCities?: ITypeCityInfo[];
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 城市名。
       */
      city: string;
      /**
       * @summary 行政区划代码。
       */
      adCode: string;
      /**
       * @summary 经度（注意：仅用户选择当前定位城市才会返回）。
       */
      longitude?: number;
      /**
       * @summary 纬度（注意：仅用户选择当前定位城市才会返回）。
       */
      latitude?: number;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(
      err:
        | {
            error?: number;
            errorMessage?: string;
          }
        | {
            error: 11;
            errorMessage: '用户取消操作';
          },
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 城市名。
             */
            city: string;
            /**
             * @summary 行政区划代码。
             */
            adCode: string;
            /**
             * @summary 经度（注意：仅用户选择当前定位城市才会返回）。
             */
            longitude?: number;
            /**
             * @summary 纬度（注意：仅用户选择当前定位城市才会返回）。
             */
            latitude?: number;
          }
        | (
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 11;
                errorMessage: '用户取消操作';
              }
          ),
    ): void;
  }): Promise<{
    /**
     * @summary 城市名。
     */
    city: string;
    /**
     * @summary 行政区划代码。
     */
    adCode: string;
    /**
     * @summary 经度（注意：仅用户选择当前定位城市才会返回）。
     */
    longitude?: number;
    /**
     * @summary 纬度（注意：仅用户选择当前定位城市才会返回）。
     */
    latitude?: number;
  }> &
    ChooseCityTask;
  /**
   * @summary 唤起选择人
   * @description 默认只包含支付宝联系人，可通过修改参数选择手机通讯录联系人或者双向通讯录联系人。
   * @see https://opendocs.alipay.com/mini/api/eqx2u5
   */
  export function chooseContact(r: {
    /**
     * @summary 选择类型。
     */
    chooseType: 'multi' | 'single';
    includeMe?: boolean;
    /**
     * @summary 选择手机通讯录联系人的模式。
     */
    includeMobileContactMode?: 'none' | 'known' | 'all';
    /**
     * @summary 是否包含自己。
     */
    chooseContact?: boolean;
    /**
     * @summary 最大选择人数
     * @description 仅 `chooseType` 为 `multi` 时才有效。
     */
    multiChooseMax?: number;
    /**
     * @summary 多选达到上限时提示的文案
     * @description 仅 `chooseType` 为 `multi` 时才有效。
     */
    multiChooseMaxTips?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 选择返回的用户信息。
       */
      contactsDicArray: IMyChooseContactContactsDicArray[];
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 选择返回的用户信息。
             */
            contactsDicArray: IMyChooseContactContactsDicArray[];
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 选择返回的用户信息。
     */
    contactsDicArray: IMyChooseContactContactsDicArray[];
  }>;
  /**
   * @summary 选择城市地区
   */
  export function chooseDistrict(r: {
    /**
     * @summary - 0 境内
     * - 1 境外
     * - 2 境内+境外
     */
    mode: EChooseDistrictMode;
    /**
     * @default "国内"
     */
    mainTitle?: string;
    mainHeadList?: IChooseDistrictHeadItem[];
    mainNormalList?: IChooseDistrictListItem[];
    mainMergeOptions?: Record<string, string>;
    /**
     * @summary 境外 Tab 自定义标题
     * @default "国际/港澳台"
     */
    seniorTitle?: string;
    seniorPageList?: IChooseDistrictSeniorPageList[];
    /**
     * @summary 使用文件读取方式
     *
     * 自定义数据量大时，建议将数据文件内置在小程序内。文件内参数格式同接口定义。
     */
    src?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { name: string; adCode: string; ext?: Record<string, string> }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            name: string;
            adCode: string;
            ext?: Record<string, string>;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    name: string;
    adCode: string;
    ext?: Record<string, string>;
  }>;
  /**
   * @summary 拍照或从本地相册中选择图片
   * @see https://opendocs.alipay.com/mini/api/media/image/my.chooseimage
   */
  export function chooseImage(r?: {
    /**
     * @summary 最大可选照片数，默认为 1 张
     * @default 1
     */
    count?: number;
    /**
     * @summary 图片类型。
     * @default ["original","compressed"]
     */
    sizeType?: Array<`${EChooseImageSizeType}`> | `${EChooseImageSizeType}`;
    /**
     * @summary 图片类型。
     * @default ["camera","album"]
     */
    sourceType?: Array<`${EChooseImageSourceType}`> | `${EChooseImageSourceType}`;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { apFilePaths: string[]; tempFilePaths: string[] }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            apFilePaths: string[];
            tempFilePaths: string[];
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    apFilePaths: string[];
    tempFilePaths: string[];
  }>;
  /**
   * @summary 选择发票抬头
   */
  export function chooseInvoiceTitle(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 用户选择的抬头动态码，目前有效期限制1小时，需尽快使用
       */
      dynamicCode: string;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 用户选择的抬头动态码，目前有效期限制1小时，需尽快使用
             */
            dynamicCode: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 用户选择的抬头动态码，目前有效期限制1小时，需尽快使用
     */
    dynamicCode: string;
  }>;
  /**
   * @summary 选择地理位置
   * @description
   * - 暂无境外地图数据，在中国内地（不含港澳台）以外的地区可能无法正常调用此 API
   * - 仅支持高德地图 style 与火星坐标系。
   * @see https://opendocs.alipay.com/mini/api/location
   */
  export function chooseLocation(r?: {
    /**
     * @summary 页面显示标题
     */
    title?: string;
    /**
     * @summary 是否显示tab页
     */
    showTab?: boolean;
    /**
     * @summary 预设纬度 传入该参数将自动定位到该点
     */
    latitude?: number;
    /**
     * @summary 预设经度 传入该参数将自动定位到该点
     */
    longitude?: number;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 位置名称。
       */
      name: string;
      /**
       * @summary 地址的详细说明。
       */
      address: string;
      /**
       * @summary 经度。
       */
      longitude: string;
      /**
       * @summary 纬度。
       */
      latitude: string;
      /**
       * @summary 省份名称。
       */
      provinceName: string;
      /**
       * @summary 城市名称。
       */
      cityName: string;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 位置名称。
             */
            name: string;
            /**
             * @summary 地址的详细说明。
             */
            address: string;
            /**
             * @summary 经度。
             */
            longitude: string;
            /**
             * @summary 纬度。
             */
            latitude: string;
            /**
             * @summary 省份名称。
             */
            provinceName: string;
            /**
             * @summary 城市名称。
             */
            cityName: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 位置名称。
     */
    name: string;
    /**
     * @summary 地址的详细说明。
     */
    address: string;
    /**
     * @summary 经度。
     */
    longitude: string;
    /**
     * @summary 纬度。
     */
    latitude: string;
    /**
     * @summary 省份名称。
     */
    provinceName: string;
    /**
     * @summary 城市名称。
     */
    cityName: string;
  }>;
  /**
   * @summary 选择设备通信录中联系人电话
   * @see https://opendocs.alipay.com/mini/api/blghgl
   */
  export function choosePhoneContact(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { name: string; mobile: string }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            name: string;
            mobile: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    name: string;
    mobile: string;
  }>;
  /**
   * @summary 选择视频
   * @description 支持拍摄视频或从手机相册中选视频
   */
  export function chooseVideo(r?: {
    /**
     * @summary 视频选择的来源。
     * @default ['album','camera']
     */
    sourceType?: Array<`${EChooseVideoSourceType}`> | `${EChooseVideoSourceType}`;
    /**
     * @summary 是否压缩所选择的视频文件。对iOS总是有压缩的，只是压缩级别不同。
     * @default true
     */
    compressed?: boolean;
    /**
     * @summary 拍摄视频最长拍摄时间，单位：秒。
     * @default 60
     */
    maxDuration?: number;
    /**
     * @summary 默认拉起的是前置或者后置摄像头。部分 Android 手机下由于系统 ROM 不支持无法生效。
     * @default back
     */
    camera?: Array<`${EChooseVideoCamera}`> | `${EChooseVideoCamera}`;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 选定视频的临时文件路径。
       */
      filePath: string;
      /**
       * @summary 选定视频的时间长度。
       */
      duration: number;
      /**
       * @summary 选定视频的数据量大小。
       */
      size: number;
      /**
       * @summary 返回选定视频的高度。
       */
      height: number;
      /**
       * @summary 返回选定视频的宽度。
       */
      width: number;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 选定视频的临时文件路径。
             */
            filePath: string;
            /**
             * @summary 选定视频的时间长度。
             */
            duration: number;
            /**
             * @summary 选定视频的数据量大小。
             */
            size: number;
            /**
             * @summary 返回选定视频的高度。
             */
            height: number;
            /**
             * @summary 返回选定视频的宽度。
             */
            width: number;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 选定视频的临时文件路径。
     */
    filePath: string;
    /**
     * @summary 选定视频的时间长度。
     */
    duration: number;
    /**
     * @summary 选定视频的数据量大小。
     */
    size: number;
    /**
     * @summary 返回选定视频的高度。
     */
    height: number;
    /**
     * @summary 返回选定视频的宽度。
     */
    width: number;
  }>;
  /**
   * @summary 清除本地数据缓存
   * @description
   * - 清空内嵌 webview 的存储时不会同时清空当前小程序本身的存储数据
   * - 支付宝设置中心清除缓存不会导致小程序缓存失效
   * @see https://opendocs.alipay.com/mini/api/storage
   */
  export function clearStorage(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: boolean }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            success: boolean;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    success: boolean;
  }>;
  /**
   * @summary 同步清除本地数据缓存
   * @see https://opendocs.alipay.com/mini/api/ulv85u
   */
  export function clearStorageSync(): {
    success: boolean;
  };
  /**
   * @summary 关闭本机蓝牙模块
   * @see https://opendocs.alipay.com/mini/api/wvko0w
   */
  export function closeBluetoothAdapter(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 关闭 WebSocket 连接
   * @deprecated 推荐使用 [WebSocketTask]() 进行多链接管理
   * @see https://opendocs.alipay.com/mini/api/network
   */
  export function closeSocket(r?: {
    /**
     * @summary 关闭连接的状态号
     * @default 1000
     */
    code?: number;
    /**
     * @summary 连接被关闭的原因
     */
    reason?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { message: string }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            message: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    message: string;
  }>;
  /**
   * @summary 压缩图片
   * @see https://opendocs.alipay.com/mini/api/ehndze
   */
  export function compressImage(r: {
    /**
     * @summary 要压缩的图片路径数组。
     */
    apFilePaths: string[];
    /**
     * @summary 压缩质量
     * @default 4
     */
    compressLevel?: ECompressImageCompressLevel;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 压缩后的图片路径数组。
       */
      apFilePaths: string[];
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 压缩后的图片路径数组。
             */
            apFilePaths: string[];
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 压缩后的图片路径数组。
     */
    apFilePaths: string[];
  }>;
  /**
   * @summary 显示确认框
   * @description 可以配置确认框的标题、内容、确认或取消按钮的文字等
   * @see https://opendocs.alipay.com/mini/api/lt3uqc
   */
  export function confirm(r?: {
    /**
     * @summary 确认框的标题
     */
    title?: string;
    /**
     * @summary 确认框的内容
     */
    content?: string;
    /**
     * @summary 确认按钮文字
     * @default "确定"
     */
    confirmButtonText?: string;
    /**
     * @summary 取消按钮文字
     * @default "取消"
     */
    cancelButtonText?: string;
    /**
     * @summary "确认" 按钮颜色，HEX 格式
     */
    confirmColor?: string;
    /**
     * @summary "取消" 按钮颜色，HEX 格式
     */
    cancelColor?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary "确认" 为 true, 否则为 false
       */
      confirm: boolean;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary "确认" 为 true, 否则为 false
             */
            confirm: boolean;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary "确认" 为 true, 否则为 false
     */
    confirm: boolean;
  }>;
  /**
   * @summary 连接蓝牙低功耗设备
   * @see https://opendocs.alipay.com/mini/api/tmew6e
   */
  export function connectBLEDevice(r: {
    /**
     * @summary 蓝牙设备 ID
     */
    deviceId: string;
    /**
     * @summary 超时时间（单位毫秒）
     */
    timeout?: number;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 错误码
       */
      error: string;
      /**
       * @summary 错误信息
       */
      errorMessage: string;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 错误码
             */
            error: string;
            /**
             * @summary 错误信息
             */
            errorMessage: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 错误码
     */
    error: string;
    /**
     * @summary 错误信息
     */
    errorMessage: string;
  }>;
  /**
   * @summary 创建一个 WebSocket 的连接
   * @description
   * - 默认情况下一个小程序在一段时间内只能保留一个 WebSocket 连接，如果当前已存在 WebSocket 连接，那么会自动关闭该连接，并重新创建一个新的 WebSocket 连接。
   * - 如果需要同时创建多个 WebSocket 连接，需要使用 multiple 参数
   * @see https://opendocs.alipay.com/mini/api/vx19c3
   */
  export function connectSocket(param: {
    multiple?: boolean;
    /**
     * @summary 目标服务器接口地址。
     * - 部分新发布的小程序只支持 wss 协议。
     */
    url: string;
    /**
     * @summary 请求的参数。
     */
    data?: Record<string, unknown>;
    /**
     * @summary 设置请求的头部。
     */
    header?: Record<string, string>;
  }): void;
  /**
   * @summary 连接 Wi-Fi
   */
  export function connectWifi(r?: {
    SSID?: string;
    BSSID?: string;
    maunal?: boolean;
    isWEP?: boolean;
    password?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
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
          },
    ): void;
  }): Promise<{
    success: true;
  }>;
  /**
   * @summary 创建动画实例
   * @see https://opendocs.alipay.com/mini/api/ui-animation
   */
  export function createAnimation(param?: {
    /**
     * @summary 动画持续时间，单位 ms
     * @default 400
     */
    duration?: number;
    /**
     * @summary 动画的效果
     * @default "linear"
     */
    timeFunction?: string;
    /**
     * @summary 动画延迟时间，单位 ms
     */
    delay?: number;
    /**
     * @summary 动画变形的原点
     * @default "50% 50% 0"
     */
    transformOrigin?: string;
  }): Animation;
  /**
   * @summary 创建并返回 <canvas> 组件上下文
   * @see https://opendocs.alipay.com/mini/api/ui-canvas
   */
  export function createCanvasContext(canvasId: string): CanvasContext;
  /**
   * @summary 创建并返回内部音频上下文
   * @see https://opendocs.alipay.com/mini/00bg4q
   */
  export function createInnerAudioContext(): InnerAudioContext;
  /**
   * @summary 创建并返回 IntersectionObserver 对象
   * @see https://opendocs.alipay.com/mini/api/intersectionobserver
   */
  export function createIntersectionObserver(option?: IMyCreateIntersectionObserverOption): IntersectionObserver;
  /**
   * @summary 创建并返回 <lottie> 组件上下文
   */
  export function createLottieContext(lottieId: string): LottieContext;
  /**
   * @summary 创建并返回 <map> 组件上下文
   * @see https://opendocs.alipay.com/mini/api/ui-map
   */
  export function createMapContext(id: string): MapContext;
  /**
   * @summary 创建离屏 canvas 对象
   */
  export function createOffscreenCanvas(width?: number, height?: number, type?: '2d' | 'webgl'): OffScreenCanvas;
  /**
   * @summary 创建视图信息查询实例
   * @description - 在 `自定义组件` 或包含 `自定义组件` 页面中，希望仅查询自身模板（不跨组件）的视图信息，应使用 `this.createSelectorQuery()` 来代替
   * @see https://opendocs.alipay.com/mini/api/selector-query
   */
  export function createSelectorQuery(option?: IMyCreateSelectorQueryOption): SelectorQuery;
  /**
   * @summary 创建并返回 <video> 组件上下文
   * @see https://opendocs.alipay.com/mini/api/oglq4q
   */
  export function createVideoContext(id: string): VideoContext;
  /**
   * @summary 创建并返回 <web-view> 组件上下文
   * @see https://opendocs.alipay.com/mini/api/webview-context
   */
  export function createWebViewContext(id: string): WebViewContext;
  /**
   * @summary 创建一个 Worker 线程
   * @description
   * - 最多只能创建一个 Worker，创建下一个 Worker 前请先调用 [Worker.terminate]()
   * - 使用前需要在 app.json 配置 workers 字段，表示 Worker 代码文件路径
   */
  export function createWorker(scriptPath: string): Worker;
  /**
   * @summary 选择日期
   * @see https://opendocs.alipay.com/mini/api/ui-date
   */
  export function datePicker(r?: {
    /**
     * @summary 返回的日期格式。
     * @default "yyyy-MM-dd"
     */
    format?: 'yyyy-MM-dd' | 'HH:mm' | 'yyyy-MM' | 'yyyy' | 'HH:mm:ss' | 'yyyy-MM-dd HH:mm:ss' | 'yyyy-MM-dd HH:mm';
    /**
     * @summary 初始选择的日期时间
     * @description 默认当前本地时间
     */
    currentDate?: string;
    /**
     * @summary 最小日期时间。
     */
    startDate?: string;
    /**
     * @summary 最大日期时间。
     */
    endDate?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { date: string }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            date: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    date: string;
  }>;
  /**
   * @summary 关闭小程序页面返回询问对话框
   */
  export function disableAlertBeforeUnload(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: boolean }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(
      err:
        | {
            error?: number;
            errorMessage?: string;
          }
        | {
            error: 7;
            errorMessage: 'has not found page when disableAlertBeforeUnload has been invoked';
          }
        | {
            error: 8;
            errorMessage: 'can not invoke disableAlertBeforeUnload at first page';
          }
        | {
            error: 9;
            errorMessage: 'client not support disableAlertBeforeUnload';
          },
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            success: boolean;
          }
        | (
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 7;
                errorMessage: 'has not found page when disableAlertBeforeUnload has been invoked';
              }
            | {
                error: 8;
                errorMessage: 'can not invoke disableAlertBeforeUnload at first page';
              }
            | {
                error: 9;
                errorMessage: 'client not support disableAlertBeforeUnload';
              }
          ),
    ): void;
  }): Promise<{
    success: boolean;
  }>;
  /**
   * @summary 断开与蓝牙低功耗设备的连接
   * @see https://opendocs.alipay.com/mini/api/yqrmmk
   */
  export function disconnectBLEDevice(r: {
    /**
     * @summary 蓝牙设备 ID
     */
    deviceId: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 错误码
       */
      errorCode: string;
      /**
       * @summary 错误信息
       */
      errorMessage: string;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 错误码
             */
            errorCode: string;
            /**
             * @summary 错误信息
             */
            errorMessage: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 错误码
     */
    errorCode: string;
    /**
     * @summary 错误信息
     */
    errorMessage: string;
  }>;
  /**
   * @summary 下载文件资源到本地
   * @description - 可下载任何格式的文件，不能被识别的文件将以 other 的方式存储起来
   * @see https://opendocs.alipay.com/mini/api/xr054r
   */
  export function downloadFile(r: {
    /**
     * @summary 下载文件地址
     */
    url: string;
    /**
     * @summary HTTP 请求 Header
     */
    header?: Record<string, string>;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 临时文件路径(本地临时文件)
       */
      apFilePath: string;
      /**
       *
       * @summary 临时文件路径(本地临时文件)
       * @sdk 2.7.23
       */
      tempFilePath: string;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(
      err:
        | {
            error?: number;
            errorMessage?: string;
          }
        | {
            error: 12;
            errorMessage: '下载失败';
          }
        | {
            error: 13;
            errorMessage: '没有权限';
          }
        | {
            error: 20;
            errorMessage: '请求的 URL 不支持 HTTP';
          },
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 临时文件路径(本地临时文件)
             */
            apFilePath: string;
            /**
             *
             * @summary 临时文件路径(本地临时文件)
             * @sdk 2.7.23
             */
            tempFilePath: string;
          }
        | (
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 12;
                errorMessage: '下载失败';
              }
            | {
                error: 13;
                errorMessage: '没有权限';
              }
            | {
                error: 20;
                errorMessage: '请求的 URL 不支持 HTTP';
              }
          ),
    ): void;
  }): Promise<{
    /**
     * @summary 临时文件路径(本地临时文件)
     */
    apFilePath: string;
    /**
     *
     * @summary 临时文件路径(本地临时文件)
     * @sdk 2.7.23
     */
    tempFilePath: string;
  }> &
    DownloadTask;
  /**
   * @summary 开启小程序页面返回询问对话框
   */
  export function enableAlertBeforeUnload(r?: {
    /**
     * @summary 询问对话框内容
     * @default "离开此页面?"
     */
    message?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: boolean }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(
      err:
        | {
            error?: number;
            errorMessage?: string;
          }
        | {
            error: 7;
            errorMessage: 'has not found page when enableAlertBeforeUnload has been invoked';
          }
        | {
            error: 8;
            errorMessage: 'can not invoke enableAlertBeforeUnload at first page';
          }
        | {
            error: 9;
            errorMessage: 'client not support enableAlertBeforeUnload';
          },
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            success: boolean;
          }
        | (
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 7;
                errorMessage: 'has not found page when enableAlertBeforeUnload has been invoked';
              }
            | {
                error: 8;
                errorMessage: 'can not invoke enableAlertBeforeUnload at first page';
              }
            | {
                error: 9;
                errorMessage: 'client not support enableAlertBeforeUnload';
              }
          ),
    ): void;
  }): Promise<{
    success: boolean;
  }>;
  /**
   * @summary 退出当前小程序
   * @description 该 API 仅在 "用户操作"(tap) 事件响应函数中生效
   */
  export function exitMiniProgram(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(
      err:
        | {
            error?: number;
            errorMessage?: string;
          }
        | {
            error: 5;
            errorMessage: 'exitMiniProgram can only be invoked by user tap gesture';
          },
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            error?: number;
            errorMessage?: string;
          }
        | {
            error: 5;
            errorMessage: 'exitMiniProgram can only be invoked by user tap gesture';
          },
    ): void;
  }): Promise<void>;
  /**
   * @summary 生成二维码
   * @description 不需要网络直接由设备端生成
   */
  export function generateImageFromCode(r: {
    /**
     * @summary 二维码内容
     */
    code: string;
    /**
     * @summary 输出码的格式，当前只支持QRCODE(二维码)。
     */
    format: 'QRCODE';
    /**
     * @summary 生成图片的宽度，单位是px
     */
    width: number;
    /**
     * @summary 纠错等级
     * @default "H"
     */
    correctLevel: 'L' | 'M' | 'Q' | 'H';
    /**
     * @summary 返回图片的方向
     * @default 'up'
     */
    orientation: 'right' | 'left' | 'up' | 'down' | 'up-mirrored' | 'down-mirrored' | 'left-mirrored' | 'right-mirrored';
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary base64 编码的二维码图像
       */
      image: string;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary base64 编码的二维码图像
             */
            image: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary base64 编码的二维码图像
     */
    image: string;
  }>;
  /**
   * @summary 获取无障碍能力管理器
   * @description 用于管理小程序无障碍能力。
   */
  export function getAccessibilityManager(): AccessibilityManager;
  /**
   * @summary 获取小程序及插件信息
   */
  export function getAccountInfoSync(): {
    /**
     * @summary 小程序帐号信息
     */
    miniProgram: IMyGetAccountInfoSyncMiniProgram;
    /**
     * @summary 插件帐号信息（仅在插件中调用时包含这一项）
     */
    plugin?: IMyGetAccountInfoSyncPlugin;
  };
  /**
   * @summary 选择收获地址
   * @description 商户在寄送外卖、快递或其他场景需要用户填写地址信息时，可通过调用此 API 直接获取地址数据，无需用户手动填写
   * @see https://opendocs.alipay.com/mini/api/lymgfk
   */
  export function getAddress(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(
      data:
        | {
            /**
             * @summary 表示用户未做选择直接返回
             */
            resultStatus: '6001';
            result: '';
          }
        | {
            /**
             * @summary 表示用户选择了一个地址
             */
            resultStatus: '9000';
            result: {
              /**
               * @summary 详细地址
               */
              address: string;
              /**
               * @summary 国家名称
               */
              country: string;
              /**
               * @summary 省
               */
              prov: string;
              /**
               * @summary 市
               */
              city: string;
              /**
               * @summary 区
               */
              area: string;
              /**
               * @summary 街道
               */
              street: string;
              /**
               * @summary 姓名
               */
              fullname: string;
              /**
               * @summary 手机号
               */
              mobilePhone: string;
            };
          },
    ): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(
      err:
        | {
            error?: number;
            errorMessage?: string;
          }
        | {
            error: 4;
            errorMessage: '无权调用该接口';
          },
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | (
            | {
                /**
                 * @summary 表示用户未做选择直接返回
                 */
                resultStatus: '6001';
                result: '';
              }
            | {
                /**
                 * @summary 表示用户选择了一个地址
                 */
                resultStatus: '9000';
                result: {
                  /**
                   * @summary 详细地址
                   */
                  address: string;
                  /**
                   * @summary 国家名称
                   */
                  country: string;
                  /**
                   * @summary 省
                   */
                  prov: string;
                  /**
                   * @summary 市
                   */
                  city: string;
                  /**
                   * @summary 区
                   */
                  area: string;
                  /**
                   * @summary 街道
                   */
                  street: string;
                  /**
                   * @summary 姓名
                   */
                  fullname: string;
                  /**
                   * @summary 手机号
                   */
                  mobilePhone: string;
                };
              }
          )
        | (
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 4;
                errorMessage: '无权调用该接口';
              }
          ),
    ): void;
  }): Promise<
    | {
        /**
         * @summary 表示用户未做选择直接返回
         */
        resultStatus: '6001';
        result: '';
      }
    | {
        /**
         * @summary 表示用户选择了一个地址
         */
        resultStatus: '9000';
        result: {
          /**
           * @summary 详细地址
           */
          address: string;
          /**
           * @summary 国家名称
           */
          country: string;
          /**
           * @summary 省
           */
          prov: string;
          /**
           * @summary 市
           */
          city: string;
          /**
           * @summary 区
           */
          area: string;
          /**
           * @summary 街道
           */
          street: string;
          /**
           * @summary 姓名
           */
          fullname: string;
          /**
           * @summary 手机号
           */
          mobilePhone: string;
        };
      }
  >;
  /**
   * @summary 同步应用授权情况
   */
  export function getAppAuthorizeSetting(): {
    /**
     * @summary 允许使用相册的开关
     */
    albumAuthorized: string;
    /**
     * @summary 允许使用蓝牙的开关
     */
    bluetoothAuthorized: string;
    /**
     * @summary 允许使用摄像头的开关
     */
    cameraAuthorized: string;
    /**
     * @summary 允许使用定位的开关
     */
    locationAuthorized: string;
    /**
     * @summary 允许使用麦克风的开关
     */
    microphoneAuthorized: string;
    /**
     * @summary 允许通知的开关
     */
    notificationAuthorized: string;
    /**
     * @summary 允许通知带有提醒的开关
     */
    notificationAlertAuthorized: string;
    /**
     * @summary 允许通知带有标记的开关
     */
    notificationBadgeAuthorized: string;
    /**
     * @summary 允许通知带有声音的开关
     */
    notificationSoundAuthorized: string;
    /**
     * @summary 悬浮窗权限
     */
    overlayAuthorized: boolean;
  };
  /**
   * @summary 同步获取小程序基础信息接口
   */
  export function getAppBaseInfo(): {
    /**
     * @summary 基础库版本。
     */
    SDKVersion: string;
    /**
     * @summary 当前小程序运行的宿主环境。
     */
    host: IMyGetAppBaseInfoHost;
    /**
     * @summary 客户端设置的语言。分别有以下值：zh-Hans（简体中文）、en（English）、zh-Hant（繁体中文（台湾））、zh-HK（繁体中文（香港））。
     */
    language: string;
    /**
     * @summary 客户端版本号。
     */
    version: string;
  };
  /**
   * @summary 同步获取小程序 appId
   * @see https://opendocs.alipay.com/mini/api/gazkkm
   */
  export function getAppIdSync(): {
    /**
     * @summary 当前小程序的 AppId
     */
    appId: string;
  };
  export function getARSessionManager(): ARSessionManager;
  /**
   * @summary 获取授权码 (AuthCode)
   * @see https://opendocs.alipay.com/mini/api/openapi-authorize
   */
  export function getAuthCode(r?: {
    /**
     * @summary 授权类型
     * @default auth_base
     */
    scopes?: `${EGetAuthCodeScopeNicks}` | Array<`${EGetAuthCodeScopeNicks}`>;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 授权码
       */
      authCode: string;
      /**
       * @summary 失败的授权类型
       */
      authErrorScopes: IMyApGetAuthCodeAuthErrorScopes;
      /**
       * @summary 成功的授权 scope
       */
      authSuccessScopes: Array<`${EGetAuthCodeScopeNicks}`>;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 授权码
             */
            authCode: string;
            /**
             * @summary 失败的授权类型
             */
            authErrorScopes: IMyApGetAuthCodeAuthErrorScopes;
            /**
             * @summary 成功的授权 scope
             */
            authSuccessScopes: Array<`${EGetAuthCodeScopeNicks}`>;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 授权码
     */
    authCode: string;
    /**
     * @summary 失败的授权类型
     */
    authErrorScopes: IMyApGetAuthCodeAuthErrorScopes;
    /**
     * @summary 成功的授权 scope
     */
    authSuccessScopes: Array<`${EGetAuthCodeScopeNicks}`>;
  }>;
  /**
   * @summary 获取支持的音频输入源
   * @see https://opendocs.alipay.com/mini/00bg4t
   */
  export function getAvailableAudioSources(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { audioSources: ('auto' | 'buildInMic' | 'headsetMic' | 'mic' | 'camcorder')[] }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            audioSources: ('auto' | 'buildInMic' | 'headsetMic' | 'mic' | 'camcorder')[];
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    audioSources: ('auto' | 'buildInMic' | 'headsetMic' | 'mic' | 'camcorder')[];
  }>;
  /**
   * @summary 获取全局唯一的背景音频管理器
   * @see https://opendocs.alipay.com/mini/00bifu
   */
  export function getBackgroundAudioManager(): BackgroundAudioManager;
  /**
   * @summary 获取周期性更新数据
   */
  export function getBackgroundFetchData(r: {
    /**
     * @description 请求类型
     * @default "pre"
     */
    fetchType: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @description 请求类型
       * @default "pre"
       */
      fetchType: string;
      /**
       * @description 客户端拿到缓存数据的时间戳
       */
      timestamp: number;
      /**
       * @description 当前预加载的response数据，
       */
      fetchedData: Record<string, unknown>;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @description 请求类型
             * @default "pre"
             */
            fetchType: string;
            /**
             * @description 客户端拿到缓存数据的时间戳
             */
            timestamp: number;
            /**
             * @description 当前预加载的response数据，
             */
            fetchedData: Record<string, unknown>;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @description 请求类型
     * @default "pre"
     */
    fetchType: string;
    /**
     * @description 客户端拿到缓存数据的时间戳
     */
    timestamp: number;
    /**
     * @description 当前预加载的response数据，
     */
    fetchedData: Record<string, unknown>;
  }>;
  /**
   * @summary 获取设备电量和充电状态
   * @see https://opendocs.alipay.com/mini/api/nrnziy
   */
  export function getBatteryInfo(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 当前设备电量。
       */
      level: number;
      /**
       * @summary 当前设备是否充电中。
       */
      isCharging: boolean;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 当前设备电量。
             */
            level: number;
            /**
             * @summary 当前设备是否充电中。
             */
            isCharging: boolean;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 当前设备电量。
     */
    level: number;
    /**
     * @summary 当前设备是否充电中。
     */
    isCharging: boolean;
  }>;
  /**
   * @summary 同步获取设备电量和充电状态
   * @see https://opendocs.alipay.com/mini/api/vf7vn3
   */
  export function getBatteryInfoSync(): {
    /**
     * @summary 当前设备电量。
     */
    level: number;
    /**
     * @summary 当前设备是否充电中。
     */
    isCharging: boolean;
  };
  /**
   * @summary 获取已经搜索到的iBeacon设备
   * @see https://opendocs.alipay.com/mini/api/yqleyc
   */
  export function getBeacons(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      beacons: IGetBeaconsBeacons[];
      /**
       * @summary errorCode=0，接口调用成功。
       */
      errCode: string;
      /**
       * @summary 错误描述信息，成功则为 ok。
       */
      errorMsg: string;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            beacons: IGetBeaconsBeacons[];
            /**
             * @summary errorCode=0，接口调用成功。
             */
            errCode: string;
            /**
             * @summary 错误描述信息，成功则为 ok。
             */
            errorMsg: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    beacons: IGetBeaconsBeacons[];
    /**
     * @summary errorCode=0，接口调用成功。
     */
    errCode: string;
    /**
     * @summary 错误描述信息，成功则为 ok。
     */
    errorMsg: string;
  }>;
  /**
   * @summary 获取蓝牙低功耗设备所有特征值  (characteristic)
   * @see https://opendocs.alipay.com/mini/api/fmg9gg
   */
  export function getBLEDeviceCharacteristics(r: {
    /**
     * @summary 蓝牙设备 ID
     */
    deviceId: string;
    /**
     * @summary 蓝牙特征值对应 service 的 UUID
     */
    serviceId: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 设备特征值列
       */
      characteristics: ITypeBLECharacteristic[];
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 设备特征值列
             */
            characteristics: ITypeBLECharacteristic[];
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 设备特征值列
     */
    characteristics: ITypeBLECharacteristic[];
  }>;
  /**
   * @summary 获取蓝牙低功耗设备的信号强度 (RSSI)
   */
  export function getBLEDeviceRSSI(r: {
    deviceId: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { RSSI: number }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            RSSI: number;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    RSSI: number;
  }>;
  /**
   * @summary 获取蓝牙低功耗设备所有服务 (service)
   * @see https://opendocs.alipay.com/mini/api/uzsg75
   */
  export function getBLEDeviceServices(r: {
    /**
     * @summary 蓝牙设备 ID
     */
    deviceId: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 已发现的设备服务列表
       */
      services: IGetBLEDeviceServicesServices[];
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 已发现的设备服务列表
             */
            services: IGetBLEDeviceServicesServices[];
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 已发现的设备服务列表
     */
    services: IGetBLEDeviceServicesServices[];
  }>;
  /**
   * @summary 获取蓝牙低功耗设备授权和开关状态
   */
  export function getBLEDeviceStatus(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 蓝牙授权状态（仅iOS）, 仅需关注0,2,3三种状态码，其他错误码可以统一认为蓝牙授权状态无法确定
       * - 0 表示应用从未用过蓝牙（第一次使用时，会有系统弹窗授权提示）
       * - 2 表示当前蓝牙授权是被拒绝状态
       * - 3 表示蓝牙已被授权
       */
      authStatus: number;
      /**
       * @summary 蓝牙开关状态 仅需关注2,4,5三种状态码，其他错误码可以统一认为蓝牙开关状态无法确定。
       * - 2 表示设备不支持
       * - 4 表示蓝牙开关是关闭的
       * - 5 表示蓝牙开关是打开的
       */
      powerStatus: number;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 蓝牙授权状态（仅iOS）, 仅需关注0,2,3三种状态码，其他错误码可以统一认为蓝牙授权状态无法确定
             * - 0 表示应用从未用过蓝牙（第一次使用时，会有系统弹窗授权提示）
             * - 2 表示当前蓝牙授权是被拒绝状态
             * - 3 表示蓝牙已被授权
             */
            authStatus: number;
            /**
             * @summary 蓝牙开关状态 仅需关注2,4,5三种状态码，其他错误码可以统一认为蓝牙开关状态无法确定。
             * - 2 表示设备不支持
             * - 4 表示蓝牙开关是关闭的
             * - 5 表示蓝牙开关是打开的
             */
            powerStatus: number;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 蓝牙授权状态（仅iOS）, 仅需关注0,2,3三种状态码，其他错误码可以统一认为蓝牙授权状态无法确定
     * - 0 表示应用从未用过蓝牙（第一次使用时，会有系统弹窗授权提示）
     * - 2 表示当前蓝牙授权是被拒绝状态
     * - 3 表示蓝牙已被授权
     */
    authStatus: number;
    /**
     * @summary 蓝牙开关状态 仅需关注2,4,5三种状态码，其他错误码可以统一认为蓝牙开关状态无法确定。
     * - 2 表示设备不支持
     * - 4 表示蓝牙开关是关闭的
     * - 5 表示蓝牙开关是打开的
     */
    powerStatus: number;
  }>;
  /**
   * @summary 获取蓝牙低功耗设备的最大传输单元 (MTU)
   */
  export function getBLEMTU(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { mtu: number }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            mtu: number;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    mtu: number;
  }>;
  /**
   * @summary 获取本机蓝牙适配器状态
   * @see https://opendocs.alipay.com/mini/api/eid4o6
   */
  export function getBluetoothAdapterState(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 是否正在搜索设备。
       */
      discovering: boolean;
      /**
       * @summary 蓝牙模块是否可用（需支持 BLE 并且蓝牙是打开状态）。
       */
      available: boolean;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 是否正在搜索设备。
             */
            discovering: boolean;
            /**
             * @summary 蓝牙模块是否可用（需支持 BLE 并且蓝牙是打开状态）。
             */
            available: boolean;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 是否正在搜索设备。
     */
    discovering: boolean;
    /**
     * @summary 蓝牙模块是否可用（需支持 BLE 并且蓝牙是打开状态）。
     */
    available: boolean;
  }>;
  /**
   * @summary 获取已发现的蓝牙设备
   * @description 包括已经和本机处于连接状态的设备
   * @see https://opendocs.alipay.com/mini/api/pelizr
   */
  export function getBluetoothDevices(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 已发现的设备列表。
       */
      devices: TypeBluetoothDevice[];
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 已发现的设备列表。
             */
            devices: TypeBluetoothDevice[];
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 已发现的设备列表。
     */
    devices: TypeBluetoothDevice[];
  }>;
  /**
   * @summary 获取已经配对的蓝牙设备
   */
  export function getBluetoothPairs(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { devices: TypeBluetoothDevice[] }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            devices: TypeBluetoothDevice[];
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    devices: TypeBluetoothDevice[];
  }>;
  /**
   * @summary 获取剪贴板数据
   * @deprecated 已对外下线，读取权限由客户端白名单控制
   * @see https://opendocs.alipay.com/mini/api/clipboard
   */
  export function getClipboard(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 剪贴板数据。
       */
      text: string;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 剪贴板数据。
             */
            text: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 剪贴板数据。
     */
    text: string;
  }>;
  /**
   * @summary 获取处于已连接状态的蓝牙设备
   * @description
   * - 若小程序在之前已有搜索过某个蓝牙设备，即可直接传入之前搜索获取的 deviceId 尝试连接该设备，无需进行搜索操作。
   * - 若指定的蓝牙设备已经连接，重复连接将直接返回 success
   * @see https://opendocs.alipay.com/mini/api/ge8nue
   */
  export function getConnectedBluetoothDevices(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 已连接的设备列表。
       */
      devices: TypeBluetoothDevice[];
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 已连接的设备列表。
             */
            devices: TypeBluetoothDevice[];
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 已连接的设备列表。
     */
    devices: TypeBluetoothDevice[];
  }>;
  /**
   * @summary 获取已连接的 Wi-Fi 信息
   */
  export function getConnectedWifi(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true; wifi: IGetConnectedWifiWifi }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            success: true;
            wifi: IGetConnectedWifiWifi;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    success: true;
    wifi: IGetConnectedWifiWifi;
  }>;
  /**
   * @summary 获得小程序本次唤起的参数
   * @description - 如果当前是冷启动，则返回值与 App.onLaunch 的回调参数一致；如果当前是热启动，则返回值与 App.onShow 一致。
   */
  export function getEnterOptionsSync(): {
    /**
     * @summary 启动小程序的路径
     */
    path?: string;
    /**
     * @summary 当前小程序的 query，从启动参数的 query 字段解析而来
     */
    query?: Record<string, unknown>;
    /**
     * @summary 来源信息
     * @description 部分版本在无 referrerInfo 的时候会返回 undefined，建议使用 options.referrerInfo && options.referrerInfo.appId 进行判断
     */
    referrerInfo?: ITypeReferrerInfo;
    /**
     * @summary 启动小程序的 [场景值](https://opendocs.alipay.com/mini/framework/scene)
     */
    scene?: number;
    /**
     * @summary API 类别
     * @sdk 2.7.22
     */
    apiCategory?: 'default' | 'embedded';
  };
  /**
   * @summary 获取模板小程序自定义数据字段
   */
  export function getExtConfig(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 配置在模版小程序 `ext.json` 中的 `ext` 配置字段的值。
       * @description 详见  [模板小程序参数配置](https://opendocs.alipay.com/mini/isv/creatminiapp#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)
       */
      data: Record<string, unknown>;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 配置在模版小程序 `ext.json` 中的 `ext` 配置字段的值。
             * @description 详见  [模板小程序参数配置](https://opendocs.alipay.com/mini/isv/creatminiapp#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)
             */
            data: Record<string, unknown>;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 配置在模版小程序 `ext.json` 中的 `ext` 配置字段的值。
     * @description 详见  [模板小程序参数配置](https://opendocs.alipay.com/mini/isv/creatminiapp#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)
     */
    data: Record<string, unknown>;
  }>;
  /**
   * @summary 同步获取模板小程序自定义数据字段
   */
  export function getExtConfigSync(): Record<string, unknown>;
  /**
   * @summary 获取文件信息
   * @see https://opendocs.alipay.com/mini/api/file
   */
  export function getFileInfo(r: {
    filePath?: string;
    apFilePath?: string;
    /**
     * @default 'md5'
     */
    digestAlgorithm: 'md5' | 'sha1';
    sharedBiz?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { size: number; digest: string }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            size: number;
            digest: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    size: number;
    digest: string;
  }>;
  /**
   * @summary 获取文件管理器实例
   */
  export function getFileSystemManager(): FileSystemManager;
  /**
   * @summary 获取地理编码管理器实例
   */
  export function getGeocoder(): Geocoder;
  /**
   * @summary 获取会员身份信息
   */
  export function getIDNumber(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 加密的数据，前端需要将该报文发送到开发者服务端做验签和解密处理（详细的服务端处理流程参考[敏感信息加解密方法](https://docs.alipay.com/mini/introduce/aes)）。
       * 解密后的字段如下：
       * - `userName`，类型 `string`，用户姓名，注意：只有is_certified为T的时候才有意义，否则不保证准确性。
       * - `certNo`，类型 `string`，证件号码，注意：只有is_certified为T的时候才有意义，否则不保证准确性。
       * - `certType`，类型 `string`，证件类型，注意：只有is_certified为T的时候才有意义，否则不保证准确性.。
       * 取值枚举： 0:身份证 1:护照 2:军官证 3:士兵证 4:回乡证 5:临时身份证 6:户口簿 7:警官证 8:台胞证 9:营业执照 10:其它证件 11:港澳居民来往内地通行证 12:台湾居民来往大陆通行证
       * - `isCertified`，类型 `string`，是否通过实名认证，T:是；F:否。
       */
      response: string;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 加密的数据，前端需要将该报文发送到开发者服务端做验签和解密处理（详细的服务端处理流程参考[敏感信息加解密方法](https://docs.alipay.com/mini/introduce/aes)）。
             * 解密后的字段如下：
             * - `userName`，类型 `string`，用户姓名，注意：只有is_certified为T的时候才有意义，否则不保证准确性。
             * - `certNo`，类型 `string`，证件号码，注意：只有is_certified为T的时候才有意义，否则不保证准确性。
             * - `certType`，类型 `string`，证件类型，注意：只有is_certified为T的时候才有意义，否则不保证准确性.。
             * 取值枚举： 0:身份证 1:护照 2:军官证 3:士兵证 4:回乡证 5:临时身份证 6:户口簿 7:警官证 8:台胞证 9:营业执照 10:其它证件 11:港澳居民来往内地通行证 12:台湾居民来往大陆通行证
             * - `isCertified`，类型 `string`，是否通过实名认证，T:是；F:否。
             */
            response: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 加密的数据，前端需要将该报文发送到开发者服务端做验签和解密处理（详细的服务端处理流程参考[敏感信息加解密方法](https://docs.alipay.com/mini/introduce/aes)）。
     * 解密后的字段如下：
     * - `userName`，类型 `string`，用户姓名，注意：只有is_certified为T的时候才有意义，否则不保证准确性。
     * - `certNo`，类型 `string`，证件号码，注意：只有is_certified为T的时候才有意义，否则不保证准确性。
     * - `certType`，类型 `string`，证件类型，注意：只有is_certified为T的时候才有意义，否则不保证准确性.。
     * 取值枚举： 0:身份证 1:护照 2:军官证 3:士兵证 4:回乡证 5:临时身份证 6:户口簿 7:警官证 8:台胞证 9:营业执照 10:其它证件 11:港澳居民来往内地通行证 12:台湾居民来往大陆通行证
     * - `isCertified`，类型 `string`，是否通过实名认证，T:是；F:否。
     */
    response: string;
  }>;
  /**
   * @summary 获取图片信息
   * @see https://opendocs.alipay.com/mini/api/yv9n6t
   */
  export function getImageInfo(r: {
    src: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { width: number; height: number; path: string; size?: number }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            width: number;
            height: number;
            path: string;
            size?: number;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    width: number;
    height: number;
    path: string;
    size?: number;
  }>;
  /**
   * @summary 获取小程序启动时的参数
   * @description 与 `App.onLaunch` 的回调参数一致
   */
  export function getLaunchOptionsSync(): {
    /**
     * @summary 启动小程序的路径
     */
    path?: string;
    /**
     * @summary 当前小程序的 query，从启动参数的 query 字段解析而来
     */
    query?: Record<string, unknown>;
    /**
     * @summary 来源信息
     * @description 部分版本在无 referrerInfo 的时候会返回 undefined，建议使用 options.referrerInfo && options.referrerInfo.appId 进行判断
     */
    referrerInfo?: ITypeReferrerInfo;
    /**
     * @summary 启动小程序的 [场景值](https://opendocs.alipay.com/mini/framework/scene)
     */
    scene?: number;
    /**
     * @summary API 类别
     * @sdk 2.7.22
     */
    apiCategory?: 'default' | 'embedded';
  };
  /**
   * @summary 获取用户当前的地理位置信息
   * @description
   * - 仅支持高德地图 style 与火星坐标系
   * - 暂无境外地图数据，在中国内地（不含港澳台）以外的地区可能无法正常调用此 API
   * @see https://opendocs.alipay.com/mini/api/mkxuqd
   */
  export function getLocation(r?: {
    /**
     * @summary 支付宝客户端经纬度定位缓存过期时间，单位为秒
     * @description 使用缓存会加快定位速度，缓存过期会重新定位
     * @default 30
     */
    cacheTimeout?: number;
    /**
     * @summary 获取经纬度数据的类型。
     * @default 0
     */
    type?: EMyGetLocationType;
    /**
     * @summary 水平精度
     * @native 10.0
     * @android false
     */
    accuracy?: number;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 经度。
       */
      longitude: string;
      /**
       * @summary 纬度。
       */
      latitude: string;
      /**
       * @summary 精确度，单位米 (m)。
       */
      accuracy: string;
      /**
       * @summary 水平精确度，单位为米 (m)。
       */
      horizontalAccuracy: string;
      /**
       * @summary 国家名称
       * @description `type` > 0 才会返回该字段。
       */
      country?: string;
      /**
       * @summary 国家 adcode
       * @description `type` > 0 才会返回该字段。
       */
      countryCode?: string;
      /**
       * @summary 省份名称
       * @description `type` > 0 才会返回该字段。
       */
      province?: string;
      /**
       * @summary 省份 adcode
       * @description `type` > 0 才会返回该字段。
       */
      provinceAdcode?: string;
      /**
       * @summary 城市名称
       * @description `type` > 0 才会返回该字段。
       */
      city?: string;
      /**
       * @summary 城市adcode
       * @description `type` > 0 才会返回该字段。
       */
      cityAdcode?: string;
      /**
       * @summary 区县名称
       * @description `type` > 0 才会返回该字段。
       */
      district?: string;
      /**
       * @summary 区县级别的地区代码
       * @description `type` > 0 才会返回该字段。
       */
      districtAdcode?: string;
      /**
       * @summary 需要街道级别逆地理的才会有的字段，街道门牌信息
       * @description `type` > 2 才会返回该字段。
       */
      streetNumber?: IMyGetLocationStreetNumber;
      /**
       * @summary 定位点附近的 POI 信息
       * @description
       * - `type` > 2 才会返回该字段。
       * - POI 指 Point of Interest，兴趣点，在地理信息系统中，一个 POI 可以是一栋房子、一个商铺、一个邮筒、一个公交站等
       */
      pois?: IMyGetLocationPois[];
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 经度。
             */
            longitude: string;
            /**
             * @summary 纬度。
             */
            latitude: string;
            /**
             * @summary 精确度，单位米 (m)。
             */
            accuracy: string;
            /**
             * @summary 水平精确度，单位为米 (m)。
             */
            horizontalAccuracy: string;
            /**
             * @summary 国家名称
             * @description `type` > 0 才会返回该字段。
             */
            country?: string;
            /**
             * @summary 国家 adcode
             * @description `type` > 0 才会返回该字段。
             */
            countryCode?: string;
            /**
             * @summary 省份名称
             * @description `type` > 0 才会返回该字段。
             */
            province?: string;
            /**
             * @summary 省份 adcode
             * @description `type` > 0 才会返回该字段。
             */
            provinceAdcode?: string;
            /**
             * @summary 城市名称
             * @description `type` > 0 才会返回该字段。
             */
            city?: string;
            /**
             * @summary 城市adcode
             * @description `type` > 0 才会返回该字段。
             */
            cityAdcode?: string;
            /**
             * @summary 区县名称
             * @description `type` > 0 才会返回该字段。
             */
            district?: string;
            /**
             * @summary 区县级别的地区代码
             * @description `type` > 0 才会返回该字段。
             */
            districtAdcode?: string;
            /**
             * @summary 需要街道级别逆地理的才会有的字段，街道门牌信息
             * @description `type` > 2 才会返回该字段。
             */
            streetNumber?: IMyGetLocationStreetNumber;
            /**
             * @summary 定位点附近的 POI 信息
             * @description
             * - `type` > 2 才会返回该字段。
             * - POI 指 Point of Interest，兴趣点，在地理信息系统中，一个 POI 可以是一栋房子、一个商铺、一个邮筒、一个公交站等
             */
            pois?: IMyGetLocationPois[];
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 经度。
     */
    longitude: string;
    /**
     * @summary 纬度。
     */
    latitude: string;
    /**
     * @summary 精确度，单位米 (m)。
     */
    accuracy: string;
    /**
     * @summary 水平精确度，单位为米 (m)。
     */
    horizontalAccuracy: string;
    /**
     * @summary 国家名称
     * @description `type` > 0 才会返回该字段。
     */
    country?: string;
    /**
     * @summary 国家 adcode
     * @description `type` > 0 才会返回该字段。
     */
    countryCode?: string;
    /**
     * @summary 省份名称
     * @description `type` > 0 才会返回该字段。
     */
    province?: string;
    /**
     * @summary 省份 adcode
     * @description `type` > 0 才会返回该字段。
     */
    provinceAdcode?: string;
    /**
     * @summary 城市名称
     * @description `type` > 0 才会返回该字段。
     */
    city?: string;
    /**
     * @summary 城市adcode
     * @description `type` > 0 才会返回该字段。
     */
    cityAdcode?: string;
    /**
     * @summary 区县名称
     * @description `type` > 0 才会返回该字段。
     */
    district?: string;
    /**
     * @summary 区县级别的地区代码
     * @description `type` > 0 才会返回该字段。
     */
    districtAdcode?: string;
    /**
     * @summary 需要街道级别逆地理的才会有的字段，街道门牌信息
     * @description `type` > 2 才会返回该字段。
     */
    streetNumber?: IMyGetLocationStreetNumber;
    /**
     * @summary 定位点附近的 POI 信息
     * @description
     * - `type` > 2 才会返回该字段。
     * - POI 指 Point of Interest，兴趣点，在地理信息系统中，一个 POI 可以是一栋房子、一个商铺、一个邮筒、一个公交站等
     */
    pois?: IMyGetLocationPois[];
  }>;
  /**
   * @summary 获取地图基础信息
   */
  export function getMapInfo(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 是否是3D地图引擎
       */
      is3d: boolean;
      /**
       * @summary 是否支持动画
       */
      isSupportAnim: boolean;
      /**
       * @summary SDK名称
       */
      sdkName: string;
      /**
       * @summary SDK版本号
       */
      sdkVersion: string;
      /**
       * @summary 是否支持海外地图
       */
      isSupportOversea: boolean;
      /**
       * @summary 需要7.x版本样式文件
       */
      needStyleV7: boolean;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 是否是3D地图引擎
             */
            is3d: boolean;
            /**
             * @summary 是否支持动画
             */
            isSupportAnim: boolean;
            /**
             * @summary SDK名称
             */
            sdkName: string;
            /**
             * @summary SDK版本号
             */
            sdkVersion: string;
            /**
             * @summary 是否支持海外地图
             */
            isSupportOversea: boolean;
            /**
             * @summary 需要7.x版本样式文件
             */
            needStyleV7: boolean;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 是否是3D地图引擎
     */
    is3d: boolean;
    /**
     * @summary 是否支持动画
     */
    isSupportAnim: boolean;
    /**
     * @summary SDK名称
     */
    sdkName: string;
    /**
     * @summary SDK版本号
     */
    sdkVersion: string;
    /**
     * @summary 是否支持海外地图
     */
    isSupportOversea: boolean;
    /**
     * @summary 需要7.x版本样式文件
     */
    needStyleV7: boolean;
  }>;
  /**
   * @summary 获取菜单胶囊按钮的布局位置信息
   * @description 坐标信息以屏幕左上角为原点
   */
  export function getMenuButtonBoundingClientRect(): {
    /**
     * @summary 是否成功
     */
    success: boolean;
    /**
     * @summary 宽度，px
     */
    width: number;
    /**
     * @summary 高度，px
     */
    height: number;
    /**
     * @summary 顶部坐标
     */
    top: number;
    /**
     * @summary 右边坐标
     */
    right: number;
    /**
     * @summary 底部坐标
     */
    bottom: number;
    /**
     * @summary 左边坐标
     */
    left: number;
  };
  /**
   * @summary 获取当前网络状态
   * @description 获取后续网络状态变化可以使用 [my.onNetworkStatusChange]() 进行持续监听
   * @see https://opendocs.alipay.com/mini/api/network-status
   */
  export function getNetworkType(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 网络是否可用。
       */
      networkAvailable: boolean;
      networkType: `${EGetNetworkTypeNetworkInfo}`;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 网络是否可用。
             */
            networkAvailable: boolean;
            networkType: `${EGetNetworkTypeNetworkInfo}`;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 网络是否可用。
     */
    networkAvailable: boolean;
    networkType: `${EGetNetworkTypeNetworkInfo}`;
  }>;
  /**
   * @summary 获取 NFC 实例
   */
  export function getNFCAdapter(): NFCAdapter;
  /**
   * @summary 获取支付宝会员的基础信息
   * @description
   * - 基础信息包含：头像图片地址、昵称、性别、国家码、省份、所在市区
   * - 如需获取支付宝会员标识 `user_id`，请调用 [my.getAuthCode]() 和 `alipay.system.oauth.token` 接口。
   * @see https://opendocs.alipay.com/mini/api/ch8chh
   */
  export function getOpenUserInfo(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 字符串（切记先 `JSON.parse` 一下）。
       * 内部字段(两层 response)：
       * - `response` 完整的对象，其值如下：
       * - `response.avatar`，类型 `string`，头像图片地址
       * - `response.nickName`，类型 `string`，昵称
       * - `response.gender`，类型 `string`，性别，男对应“m”，女对应“f”
       * - `response.countryCode`，类型 `string`，国家码
       * - `response.province`，类型 `string`，省份
       * - `response.city`，类型 `string`， 所在市区
       */
      response: string;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 字符串（切记先 `JSON.parse` 一下）。
             * 内部字段(两层 response)：
             * - `response` 完整的对象，其值如下：
             * - `response.avatar`，类型 `string`，头像图片地址
             * - `response.nickName`，类型 `string`，昵称
             * - `response.gender`，类型 `string`，性别，男对应“m”，女对应“f”
             * - `response.countryCode`，类型 `string`，国家码
             * - `response.province`，类型 `string`，省份
             * - `response.city`，类型 `string`， 所在市区
             */
            response: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 字符串（切记先 `JSON.parse` 一下）。
     * 内部字段(两层 response)：
     * - `response` 完整的对象，其值如下：
     * - `response.avatar`，类型 `string`，头像图片地址
     * - `response.nickName`，类型 `string`，昵称
     * - `response.gender`，类型 `string`，性别，男对应“m”，女对应“f”
     * - `response.countryCode`，类型 `string`，国家码
     * - `response.province`，类型 `string`，省份
     * - `response.city`，类型 `string`， 所在市区
     */
    response: string;
  }>;
  /**
   * @summary 在插件中获取宿主小程序的 appId
   */
  export function getParentAppId(): string;
  /**
   * @summary 在插件中获取宿主小程序的 appId
   */
  export function getParentAppIdSync(): {
    /**
     * @summary 使用该插件的小程序 appId
     */
    appId: string;
  };
  /**
   * @summary 获取支付宝用户绑定的手机号
   * @description
   * - 需要户点击 ` <button open-type="getAuthorize"> `组件同意后，可以通过[my.getPhoneNumber]() 接口获取到支付宝服务器返回的加密数据， 才可在第三方服务端结合签名算法和AES密钥进行解密获取手机号
   * - 若用户未授权，直接调用 [my.getPhoneNumber]() 接口，则无法返回正确信息。
   * @see https://opendocs.alipay.com/mini/api/getphonenumber
   */
  export function getPhoneNumber(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 加密的数据
       * @description
       * 前端需要将该报文发送到开发者服务端做验签和解密处理 [敏感信息加解密方法](https://docs.alipay.com/mini/introduce/aes)
       *
       * 解密后的字段如下：
       * - `mobile`，类型 `string`，手机号。
       */
      response: string;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 加密的数据
             * @description
             * 前端需要将该报文发送到开发者服务端做验签和解密处理 [敏感信息加解密方法](https://docs.alipay.com/mini/introduce/aes)
             *
             * 解密后的字段如下：
             * - `mobile`，类型 `string`，手机号。
             */
            response: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 加密的数据
     * @description
     * 前端需要将该报文发送到开发者服务端做验签和解密处理 [敏感信息加解密方法](https://docs.alipay.com/mini/introduce/aes)
     *
     * 解密后的字段如下：
     * - `mobile`，类型 `string`，手机号。
     */
    response: string;
  }>;
  /**
   * @summary 在插件中获取插件自身的 Id
   */
  export function getPluginIdSync(): {
    /**
     * @summary 插件自身 Id
     */
    pluginId: string;
  };
  /**
   * @summary 获取全局唯一的录音管理器
   */
  export function getRecorderManager(): RecorderManager;
  /**
   * @summary 获取用户过去三十天运动步数信息
   * @description
   * 系统将自动会检查用户是否已授权。若用户尚未授权，则会弹出授权框。用户同意授权后，可获取到返回的加密数据。 然后在服务端结合签名算法和 AES 密钥进行解密，获取运动数据
   * 目前只支持查询最近 30 天内的运动数据，若超过 30 天，则返回的步数信息为 0。
   * @see https://opendocs.alipay.com/mini/api/gxuu7v
   */
  export function getRunData(r: {
    /**
     * @summary 要查询的步数日期（`yyyy-mm-dd`）的字符串，例如：`'2018-12-19'`。
     */
    countDate: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 查询到的指定日期的步数，该数据是经过加密的
       * @description
       * 前端需要将该报文发送到开发者服务端做验签和解密处理 [敏感信息加解密方法](https://opendocs.alipay.com/mini/introduce/aes)
       * 服务端解密后的数据格式为：`{ "count": "16880", "countDate": "2018-12-19", "code": "10000" };`
       */
      response: string;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(
      err:
        | {
            error?: number;
            errorMessage?: string;
          }
        | {
            error: 1001;
            errorMessage: '系统繁忙';
          }
        | {
            error: 1003;
            errorMessage: '未授权支付宝应用计步权限';
          }
        | {
            error: 1004;
            errorMessage: '用户设备不支持计步';
          }
        | {
            error: 1005;
            errorMessage: '用户未开通支付宝运动功能';
          },
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 查询到的指定日期的步数，该数据是经过加密的
             * @description
             * 前端需要将该报文发送到开发者服务端做验签和解密处理 [敏感信息加解密方法](https://opendocs.alipay.com/mini/introduce/aes)
             * 服务端解密后的数据格式为：`{ "count": "16880", "countDate": "2018-12-19", "code": "10000" };`
             */
            response: string;
          }
        | (
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 1001;
                errorMessage: '系统繁忙';
              }
            | {
                error: 1003;
                errorMessage: '未授权支付宝应用计步权限';
              }
            | {
                error: 1004;
                errorMessage: '用户设备不支持计步';
              }
            | {
                error: 1005;
                errorMessage: '用户未开通支付宝运动功能';
              }
          ),
    ): void;
  }): Promise<{
    /**
     * @summary 查询到的指定日期的步数，该数据是经过加密的
     * @description
     * 前端需要将该报文发送到开发者服务端做验签和解密处理 [敏感信息加解密方法](https://opendocs.alipay.com/mini/introduce/aes)
     * 服务端解密后的数据格式为：`{ "count": "16880", "countDate": "2018-12-19", "code": "10000" };`
     */
    response: string;
  }>;
  /**
   * @summary 用于获取当前小程序的运行版本
   * @see https://opendocs.alipay.com/mini/api/runscene
   */
  export function getRunScene(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 小程序当前运行的版本
       */
      envVersion: 'develop' | 'trial' | 'release' | 'gray';
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 小程序当前运行的版本
             */
            envVersion: 'develop' | 'trial' | 'release' | 'gray';
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 小程序当前运行的版本
     */
    envVersion: 'develop' | 'trial' | 'release' | 'gray';
  }>;
  /**
   * @summary 获取保存的文件信息
   * @see https://opendocs.alipay.com/mini/api/qrx6ze
   */
  export function getSavedFileInfo(r?: {
    filePath?: string;
    apFilePath?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true; size: number; createTime: number }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            success: true;
            size: number;
            createTime: number;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    success: true;
    size: number;
    createTime: number;
  }>;
  /**
   * @summary 获取保存的所有文件信息
   * @see https://opendocs.alipay.com/mini/api/cgohg1
   */
  export function getSavedFileList(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true; fileList: IGetSavedFileListFileList[] }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            success: true;
            fileList: IGetSavedFileListFileList[];
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    success: true;
    fileList: IGetSavedFileListFileList[];
  }>;
  /**
   * @summary 获取屏幕亮度
   * @see https://opendocs.alipay.com/mini/api/screen-brightness
   */
  export function getScreenBrightness(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      success: true;
      /**
       * @summary 屏幕亮度，取值范围0-1
       */
      brightness: number;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            success: true;
            /**
             * @summary 屏幕亮度，取值范围0-1
             */
            brightness: number;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    success: true;
    /**
     * @summary 屏幕亮度，取值范围0-1
     */
    brightness: number;
  }>;
  export function getSelectedTextRange(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(
      data:
        | {
            cursor: number;
          }
        | {
            start: number;
            end: number;
          },
    ): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | (
            | {
                cursor: number;
              }
            | {
                start: number;
                end: number;
              }
          )
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<
    | {
        cursor: number;
      }
    | {
        start: number;
        end: number;
      }
  >;
  /**
   * @summary 获取当前服务器时间
   * @see https://opendocs.alipay.com/mini/api/get-server-time
   */
  export function getServerTime(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 服务器时间
       * @description 离线情况值为 -1
       */
      time: number;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 服务器时间
             * @description 离线情况值为 -1
             */
            time: number;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 服务器时间
     * @description 离线情况值为 -1
     */
    time: number;
  }>;
  /**
   * @summary 获取用户的当前设置
   * @see https://opendocs.alipay.com/mini/api/xmk3ml
   */
  export function getSetting(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { authSetting: IGetSettingAuthSetting }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            authSetting: IGetSettingAuthSetting;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    authSetting: IGetSettingAuthSetting;
  }>;
  /**
   * @summary 获取缓存数据的异步接口
   * @see https://opendocs.alipay.com/mini/api/azfobl
   */
  export function getStorage(r: {
    key: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { data: any }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            data: any;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    data: any;
  }>;
  /**
   * @summary 获取缓存数据相关信息
   * @see https://opendocs.alipay.com/mini/api/zvmanq
   */
  export function getStorageInfo(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 当前 storage 中所有的 key
       */
      keys: string[];
      /**
       * @summary 当前占用的空间大小，单位为 KB
       */
      currentSize: number;
      /**
       * @summary 限制的空间大小，单位为 KB
       */
      limitSize: number;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 当前 storage 中所有的 key
             */
            keys: string[];
            /**
             * @summary 当前占用的空间大小，单位为 KB
             */
            currentSize: number;
            /**
             * @summary 限制的空间大小，单位为 KB
             */
            limitSize: number;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 当前 storage 中所有的 key
     */
    keys: string[];
    /**
     * @summary 当前占用的空间大小，单位为 KB
     */
    currentSize: number;
    /**
     * @summary 限制的空间大小，单位为 KB
     */
    limitSize: number;
  }>;
  /**
   * @summary 同步获取缓存数据相关信息
   * @see https://opendocs.alipay.com/mini/api/uw5rdl
   */
  export function getStorageInfoSync(): {
    /**
     * @summary 当前 storage 中所有的 key
     */
    keys: string[];
    /**
     * @summary 当前占用的空间大小，单位为 KB
     */
    currentSize: number;
    /**
     * @summary 限制的空间大小，单位为 KB
     */
    limitSize: number;
  };
  /**
   * @summary 同步获取缓存数据
   * @see https://opendocs.alipay.com/mini/api/ox0wna
   */
  export function getStorageSync(r: { key: string }): {
    data: unknown;
  };
  /**
   * @summary 获取手机系统信息
   */
  export function getSystemInfo(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: TypeSystemInfo): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | TypeSystemInfo
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<TypeSystemInfo>;
  /**
   * @summary 获取手机系统信息的同步接口
   */
  export function getSystemInfoSync(): TypeSystemInfo;
  /**
   * @summary 同步获取设备设置
   */
  export function getSystemSetting(): {
    /**
     * @summary 蓝牙的系统开关
     */
    bluetoothEnabled: boolean;
    /**
     * @summary 地理位置的系统开关
     */
    locationEnabled: boolean;
    /**
     * @summary Wi-Fi 的系统开关
     */
    wifiEnabled: boolean;
  };
  /**
   * @summary 获取导航栏背景色
   * @see https://opendocs.alipay.com/mini/api/dplf2s
   */
  export function getTitleColor(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 返回当前导航栏背景色
       * @description ARGB 格式的十六进制颜色值，如 #323239FF。
       */
      color: string;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 返回当前导航栏背景色
             * @description ARGB 格式的十六进制颜色值，如 #323239FF。
             */
            color: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 返回当前导航栏背景色
     * @description ARGB 格式的十六进制颜色值，如 #323239FF。
     */
    color: string;
  }>;
  /**
   * @summary 获取版本更新管理器
   * @description 用于管理小程序更新。
   * @see https://opendocs.alipay.com/mini/api/zdblqg
   */
  export function getUpdateManager(): UpdateManager;
  /**
   * @summary 请求获取 Wi-Fi 列表
   */
  export function getWifiList(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 同步获取窗口信息
   */
  export function getWindowInfo(): {
    /**
     * @summary 设备像素比。
     */
    pixelRatio: number;
    /**
     * @summary 屏幕宽度。
     */
    screenWidth: number;
    /**
     * @summary 屏幕高度。
     */
    screenHeight: number;
    /**
     * @summary 窗口宽度。
     */
    windowWidth: number;
    /**
     * @summary 窗口高度。
     */
    windowHeight: number;
    /**
     * @summary 状态栏高度。
     */
    statusBarHeight: number;
    /**
     * @summary 在竖屏正方向下的安全区域
     */
    safeArea: IMyGetWindowInfoSafeArea;
  };
  /**
   * @summary 隐藏当前页面菜单中的添加到桌面功能
   * @see https://opendocs.alipay.com/mini/api/optionmenuitem
   */
  export function hideAddToDesktopMenu(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 隐藏所有页面的菜单中的添加到桌面功能
   * @see https://opendocs.alipay.com/mini/api/fdaplu
   */
  export function hideAllAddToDesktopMenu(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 隐藏导航栏/菜单中的返回首页功能
   * @description
   * 用户启动小程序时，若进入的页面不是小程序首页，则会在左上角出现返回首页图标。
   * 如果 app.json 中配置了 tabbar 跳转 pages/index/index 时，则左上角不会出现 返回首页 icon 图标。
   * @see https://opendocs.alipay.com/mini/api/ui-navigate
   */
  export function hideBackHome(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 隐藏键盘
   * @see https://opendocs.alipay.com/mini/api/ui-hidekeyboard
   */
  export function hideKeyboard(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 隐藏加载提示的过渡效果
   * @description 可与 [my.showLoading]() 配合使用
   * @see https://opendocs.alipay.com/mini/api/nzf540
   */
  export function hideLoading(r?: {
    /**
     * @summary 指定效果操作的页面
     */
    page?: unknown;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 在当前页面隐藏导航条的加载动画。
   * @see https://opendocs.alipay.com/mini/api/ncgsga
   */
  export function hideNavigationBarLoading(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 隐藏分享按钮
   * @see https://opendocs.alipay.com/mini/api/aimaqk
   */
  export function hideShareMenu(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 隐藏 TabBar
   * @see https://opendocs.alipay.com/mini/api/at18z8
   */
  export function hideTabBar(r?: {
    /**
     * @summary 是否需要动画效果，默认为无动画效果。
     * @default false
     */
    animation?: boolean;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 隐藏 TabBar 某一项右上角的红点
   * @see https://opendocs.alipay.com/mini/api/mg428a
   */
  export function hideTabBarRedDot(r: {
    /**
     * @summary 标签页的项数序号，从左边开始计数。
     */
    index: number;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 隐藏弱提示
   * @see https://opendocs.alipay.com/mini/api/iygd4e
   */
  export function hideToast(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 判断设备无障碍模式是否开启
   */
  export function isScreenReaderEnabled(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 是否开启无障碍模式
       */
      screenReaderEnabled: boolean;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 是否开启无障碍模式
             */
            screenReaderEnabled: boolean;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 是否开启无障碍模式
     */
    screenReaderEnabled: boolean;
  }>;
  /**
   * @summary 动态加载网络字体
   * @description 支付宝小程序目前只支持 woff，otf，ttf，sfnt 字体，不支持 woff2 字体
   * @see https://opendocs.alipay.com/mini/api/ggawf0
   */
  export function loadFontFace(r: {
    /**
     * @summary 是否同时加载 NativeCanvas 字体
     * @native 2.6.2
     * @default true
     */
    nativeCanvas?: boolean;
    /**
     * @summary 字体名称
     */
    family: string;
    /**
     * @summary 字体资源地址
     * @description
     * 文件地址需为下载类型
     * iOS 仅支持 HTTPS 格式文件地址。
     */
    source: string;
    /**
     * @summary 字体描述符
     */
    desc?: IMyLoadFontFaceDesc;
    /**
     * @summary 是否全局生效
     * @sdk 2.7.15
     */
    global?: boolean;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { status: 'loaded' }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(
      err:
        | {
            error?: number;
            errorMessage?: string;
          }
        | {
            error: 10;
            errorMessage?: string;
          },
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            status: 'loaded';
          }
        | (
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 10;
                errorMessage?: string;
              }
          ),
    ): void;
  }): Promise<{
    status: 'loaded';
  }>;
  /**
   * @summary 加载动态插件
   * @see https://opendocs.alipay.com/mini/plugin/plugin-usage
   */
  export function loadPlugin(r: {
    /**
     * @summary 需要加载的插件 id。也可以指定要加载的插件id和版本号。
     * 例如：`2019235609092837@*`，为 `*` 时则距离上次拉包超过24小时会拉取最新版本。
     */
    plugin: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 进行蓝牙配对
   */
  export function makeBluetoothPair(r: {
    deviceId: string;
    pin: string;
    /**
     * @default 20
     */
    timeout?: number;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
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
          },
    ): void;
  }): Promise<{
    success: true;
  }>;
  /**
   * @summary 拨打电话
   * @see https://opendocs.alipay.com/mini/api/macke-call
   */
  export function makePhoneCall(r: {
    /**
     * @summary 电话号码
     */
    number: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
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
          },
    ): void;
  }): Promise<{
    success: true;
  }>;
  /**
   * @summary 显示多级联动选择菜单
   * @description 主要用于选择多级关联数据，比如省市区的信息选择。
   * @see https://opendocs.alipay.com/mini/api/multi-level-select
   */
  export function multiLevelSelect(r: {
    title?: string;
    /**
     * @summary 上一次选择的值
     */
    result?: IBeehiveMultilevelSelectResult[];
    /**
     * @summary 选择数据列表
     */
    list: IBeehiveMultilevelSelectList[];
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true; result: IBeehiveMultilevelSelectResult[] }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            success: true;
            result: IBeehiveMultilevelSelectResult[];
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    success: true;
    result: IBeehiveMultilevelSelectResult[];
  }>;
  /**
   * @summary 关闭当前页面，返回上一级或多级页面
   * @see https://opendocs.alipay.com/mini/api/kc5zbx
   */
  export function navigateBack(r?: {
    /**
     * @summary 返回的页面数
     * @description 如果 delta 大于现有打开的页面数，则返回到首页
     * @default 1
     */
    delta?: number | string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 跳转回上一个小程序
   * @description - 只有当另一个小程序跳转到当前小程序时才会能调用成功。
   * @see https://opendocs.alipay.com/mini/api/open-miniprogram
   */
  export function navigateBackMiniProgram(r?: {
    /**
     * @summary 需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据。
     */
    extraData?: Record<string, unknown>;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 从当前页面，跳转到当前应用内的某个指定页面
   * @description
   * 可使用 [my.navigateBack]() 返回到原来页面。
   * 小程序中页面栈最多十层。
   * [my.navigateTo]() 和 [my.redirectTo]() 不允许跳转到 Tab 页面；若需跳转到 Tab 页面，请使用 my.switchTab。
   * @see https://opendocs.alipay.com/mini/api/zwi8gx
   */
  export function navigateTo(r: {
    /**
     * @summary 需要跳转的目标页面路径
     * @description 路径后可以带参数, 目标路径必须为应用内非 tabbar 的，路径与参数之间使用 ?分隔，参数键与参数值用=相连，不同参数必须用&分隔
     */
    url: string;
    /**
     * @summary 页面间通信接口，用于监听被打开页面发送到当前页面的数据
     */
    events?: IMyNavigateToEvents;
    /**
     * @summary 指定 url 为相对路径的绝对路径基准
     */
    resolvedPath?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 和被打开页面进行通信
       */
      eventChannel: IMyNavigateToEventChannel;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 和被打开页面进行通信
             */
            eventChannel: IMyNavigateToEventChannel;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 和被打开页面进行通信
     */
    eventChannel: IMyNavigateToEventChannel;
  }>;
  /**
   * @summary 跳转到其他小程序
   * @see https://opendocs.alipay.com/mini/api/yz6gnx
   */
  export function navigateToMiniProgram(r: {
    /**
     * @summary 要跳转的目标小程序appId。
     */
    appId: string;
    /**
     * @summary 打开的页面路径，如果为空则打开首页。
     */
    path?: string;
    /**
     * @summary 用于设置目标小程序的app级别query参数，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据。
     */
    query?: Record<string, unknown>;
    /**
     * @summary 需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据。
     */
    extraData?: Record<string, unknown>;
    /**
     * @summary 仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。
     * @default "release"
     */
    envVersion?: 'develop' | 'trial' | 'release';
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 启用蓝牙低功耗设备特征值变化时的 notify 功能
   * @see https://opendocs.alipay.com/mini/api/pdzk44
   */
  export function notifyBLECharacteristicValueChange(r: {
    /**
     * @summary 蓝牙设备 ID
     */
    deviceId: string;
    /**
     * @summary 蓝牙特征值对应 service 的 UUID
     */
    serviceId: string;
    /**
     * @summary 蓝牙特征值的 UUID
     */
    characteristicId: string;
    /**
     * @summary notify 的 descriptor 的 UUID
     * @native 10.2.20
     * @ios false
     * @default 00002902-0000-10008000-00805f9b34fb
     */
    descriptorId?: string;
    /**
     * @summary 是否启用 notify 或 indicate
     */
    state?: boolean;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 停止监听加速度数据变化的事件
   * @see https://opendocs.alipay.com/mini/api/kape7p
   */
  export function offAccelerometerChange(
    cb?: (arg: {
      /**
       * @summary x 轴。
       */
      x: number;
      /**
       * @summary y 轴。
       */
      y: number;
      /**
       * @summary z 轴。
       */
      z: number;
      timestamp: number;
    }) => void,
  ): void;
  /**
   * @summary 取消监听小程序切后台事件
   * @description 请勿使用 API 监听匿名函数，否则将无法关闭监听
   * @see https://opendocs.alipay.com/mini/api/dldh0a
   */
  export function offAppHide(cb?: () => void): void;
  /**
   * @summary 取消监听小程序切前台事件
   * @see https://opendocs.alipay.com/mini/api/tkohmw
   */
  export function offAppShow(cb?: () => void): void;
  /**
   * @summary 取消监听音频因为系统占用而被中断的开始事件
   * @see https://opendocs.alipay.com/mini/00jim9
   */
  export function offAudioInterruptionBegin(cb?: () => void): void;
  /**
   * @summary 取消监听音频被中断的结束事件
   * @see https://opendocs.alipay.com/mini/00jfja
   */
  export function offAudioInterruptionEnd(cb?: () => void): void;
  /**
   * @summary 用于取消监听 iBeacon 服务的状态变化
   */
  export function offBeaconServiceChange(
    cb?: (arg: {
      /**
       * @summary 服务目前是否可用。
       */
      available: boolean;
      /**
       * @summary 目前是否处于搜索状态。
       */
      discovering: boolean;
    }) => void,
  ): void;
  /**
   * @summary 取消监听 iBeacon 设备更新的事件
   */
  export function offBeaconUpdate(
    cb?: (arg: {
      /**
       * @summary 当前搜寻到的所有 iBeacon 设备列表。
       */
      beacons: IBeaconUpdateBeacons[];
    }) => void,
  ): void;
  /**
   * @summary 取消监听蓝牙低功耗设备的特征值变化的事件
   * @see https://opendocs.alipay.com/mini/api/dlxobk
   */
  export function offBLECharacteristicValueChange(
    cb?: (arg: {
      /**
       * @summary 蓝牙设备 ID。
       */
      deviceId: string;
      serviceId: string;
      characteristicId: string;
      value: string;
    }) => void,
  ): void;
  /**
   * @summary 取消监听蓝牙低功耗设备的连接状态变化的事件
   * @see https://opendocs.alipay.com/mini/api/xfuy7k
   */
  export function offBLEConnectionStateChanged(
    cb?: (arg: {
      /**
       * @summary 蓝牙设备 ID。
       */
      deviceId: string;
      /**
       * @summary 连接目前的状态。
       */
      connected: boolean;
    }) => void,
  ): void;
  /**
   * @summary 取消监听本机蓝牙状态变化的事件
   * @see https://opendocs.alipay.com/mini/api/ocgwfe
   */
  export function offBluetoothAdapterStateChange(
    cb?: (arg: {
      /**
       * @summary 蓝牙模块是否可用。
       */
      available: boolean | 'true' | 'false';
      /**
       * @summary 蓝牙模块是否处于搜索状态。
       */
      discovering: boolean;
    }) => void,
  ): void;
  /**
   * @summary 取消监听搜索到新蓝牙设备的事件
   * @see https://opendocs.alipay.com/mini/api/snw2t7
   */
  export function offBluetoothDeviceFound(
    cb?: (arg: {
      /**
       * @summary 新搜索到的设备列表。
       */
      devices: TypeBluetoothDevice[];
    }) => void,
  ): void;
  /**
   * @summary 停止监听罗盘数据
   * @see https://opendocs.alipay.com/mini/api/xf671t
   */
  export function offCompassChange(
    cb?: (arg: {
      /**
       * @summary 面对的方向与正北方向的度数，值的范围为 `[0, 360)`。
       */
      direction: number;
    }) => void,
  ): void;
  /**
   * @summary 取消监听小程序自定义组件错误事件
   */
  export function offComponentError(
    cb?: /**
     * @param error 异常对象
     * @param method 异常发生所在的自定义组件方法
     * @param componentInstance 异常发生所在的自定义组件实例
     */
    (error: Error, method: string, componentInstance: any) => void,
  ): void;
  /**
   * @summary 停止监听设备方向变化事件
   */
  export function offDeviceMotionChange(
    cb?: (arg: {
      /**
       * @summary 当手机坐标 X/Y 和 地球 X/Y 重合时，绕着 Z 轴转动的夹角为 `alpha`。
       * - 值的范围为 `[0, 2*PI)`。
       * - 逆时针转动为正。
       */
      alpha: number;
      /**
       * @summary 当手机坐标 Y/Z 和地球 Y/Z 重合时，绕着 X 轴转动的夹角为 `beta`。
       * - 值的范围为 `[-1*PI, PI)`。
       * - 顶部朝着地球表面转动为正，也有可能朝着用户为正。
       */
      beta: number;
      /**
       * @summary 当手机 X/Z 和地球 X/Z 重合时，绕着 Y 轴转动的夹角为 `gamma`。
       * - 值的范围为 `[-1*PI/2, PI/2)`。
       * - 右边朝着地球表面转动为正。
       */
      gamma: number;
    }) => void,
  ): void;
  /**
   * @summary 取消监听小程序错误事件
   */
  export function offError(
    cb?: /**
     * @param message 异常信息
     * @param stack 异常堆栈
     */
    (message: string, stack: string) => void,
  ): void;
  /**
   * @summary 取消监听在获取到 Wi-Fi 列表数据时的事件
   */
  export function offGetWifiList(
    cb?: (arg: {
      /**
       * @summary Wifi 列表数据。
       */
      wifiList: IGetWifiListWifiList[];
    }) => void,
  ): void;
  /**
   * @summary 停止监听陀螺仪数据
   * @see https://opendocs.alipay.com/mini/api/cpt55i
   */
  export function offGyroscopeChange(
    cb?: (arg: {
      /**
       * @summary x 轴方向角速度。
       */
      x: number;
      /**
       * @summary y 轴方向角速度。
       */
      y: number;
      /**
       * @summary z 轴方向角速度。
       */
      z: number;
      timestamp: number;
    }) => void,
  ): void;
  /**
   * @summary 取消监听地理位置定位完成事件
   * @description 只针对 `chooseCity` 中属性 `setLocatedCity` 为 `true` 的情况
   */
  export function offLocatedComplete(
    cb?: (arg: {
      /**
       * @summary 当前定位城市经度。
       */
      longitude: number;
      /**
       * @summary 当前定位城市纬度。
       */
      latitude: number;
      /**
       * @summary 当前定位城市 id，setLocatedCity 的时候带上。
       */
      locatedCityId: string;
    }) => void,
  ): void;
  /**
   * @summary 停止监听内存不足的告警事件
   * @see https://opendocs.alipay.com/mini/api/hszexr
   */
  export function offMemoryWarning(
    cb?: (arg: {
      /**
       * @summary 系统内存的告警等级
       * @description - 仅 Android 返回，iOS 不返回，需要兼容判断
       * @native 10.1.35
       * @ios false
       */
      level?: EMemoryWarningLevel;
    }) => void,
  ): void;
  /**
   * @summary 取消监听网络状态变化事件
   * @see https://opendocs.alipay.com/mini/api/gxpg1w
   */
  export function offNetworkStatusChange(
    cb?: (arg: {
      /**
       * @summary 网络是否可用。
       */
      isConnected: boolean;
      /**
       * @summary 网络类型值
       */
      networkType: 'UNKNOWN' | 'NOTREACHABLE' | 'WIFI' | '3G' | '2G' | '4G' | 'WWAN';
    }) => void,
  ): void;
  /**
   * @summary 取消监听小程序要打开的页面不存在的事件
   */
  export function offPageNotFound(
    cb?: (param: {
      /**
       * @summary 不存在页面的路径 (代码包路径)。
       */
      path: string;
      /**
       * @summary 打开不存在页面的 query 参数。
       */
      query: Record<string, any>;
      /**
       * @summary 是否本次启动的首个页面（例如从分享等入口进来，首个页面是开发者配置的分享页面）。
       */
      isEntryPage: boolean;
    }) => void,
  ): void;
  /**
   * @summary 取消监听 WebSocket 关闭事件
   * @see https://opendocs.alipay.com/mini/api/qc4q3t
   */
  export function offSocketClose(cb?: (arg: { reason: string }) => void): void;
  /**
   * @summary 取消监听 WebSocket 错误事件
   * @see https://opendocs.alipay.com/mini/api/kk7vv7
   */
  export function offSocketError(cb?: (arg: { errorMessage: string; error: number }) => void): void;
  /**
   * @summary 取消监听 WebSocket 接受到服务器的消息事件
   * @see https://opendocs.alipay.com/mini/api/roziyq
   */
  export function offSocketMessage(
    cb?: (arg: {
      /**
       * @summary 服务器返回的消息：普通的文本 string 或者经 base64 编码后的 string。
       */
      data: string | ArrayBuffer;
      /**
       * @summary 如果此字段值为 true，data 字段表示接收到的经过了 base64 编码后的 string，否则 data 字段表示接收到的普通 string 文本。
       */
      isBuffer: boolean;
    }) => void,
  ): void;
  /**
   * @summary 取消监听 WebSocket 连接打开事件
   * @see https://opendocs.alipay.com/mini/api/dva3t8
   */
  export function offSocketOpen(cb?: () => void): void;
  /**
   * @summary 取消监听未处理的 Promise 拒绝事件
   */
  export function offUnhandledRejection(
    cb?: (param: {
      /**
       * @summary reject() 的接收值，一般是 error 对象
       */
      reason: Error | unknown;
      /**
       * @summary 被 reject 的 Promise 对象
       */
      promise: Promise<unknown>;
    }) => void,
  ): void;
  /**
   * @summary 取消监听用户发起的主动截屏事件
   * @see https://opendocs.alipay.com/mini/api/umdxbg
   */
  export function offUserCaptureScreen(cb?: () => void): void;
  /**
   * @summary 取消监听连接上 Wi-Fi 的事件
   */
  export function offWifiConnected(
    cb?: (arg: {
      /**
       * @summary Wifi 信息。
       */
      wifi: IWifiInfo;
    }) => void,
  ): void;
  /**
   * @summary 监听加速度数据变化的事件
   * @description 回调间隔为 500ms，接口调用后会自动开始监听，可使用 [my.offAccelerometerChange]() 停止监听。
   * @see https://opendocs.alipay.com/mini/api/accelerometer
   */
  export function onAccelerometerChange(
    cb: (arg: {
      /**
       * @summary x 轴。
       */
      x: number;
      /**
       * @summary y 轴。
       */
      y: number;
      /**
       * @summary z 轴。
       */
      z: number;
      timestamp: number;
    }) => void,
  ): void;
  /**
   * @summary 监听小程序切后台事件
   * @description
   * 该事件与框架 app.js 注册小程序 时 onHide 参数的回调时机一致。对应的取消监听 API 请参见 [my.offAppHide]()。
   * 请勿使用 API 监听匿名函数，否则将无法关闭监听
   * @see https://opendocs.alipay.com/mini/api/tv6qvi
   */
  export function onAppHide(cb: () => void): void;
  /**
   * @summary 监听小程序切前台事件
   * @description
   * 该事件与框架 app.js 注册小程序 时 onShow 参数的回调时机一致。对应的取消监听 API 请参见 [my.offAppShow]()。
   * 请勿使用 API 监听匿名函数，否则将无法关闭监听。
   */
  export function onAppShow(
    cb: (param: {
      /**
       * @summary 启动小程序的路径
       */
      path?: string;
      /**
       * @summary 当前小程序的 query，从启动参数的 query 字段解析而来
       */
      query?: Record<string, unknown>;
      /**
       * @summary 来源信息
       * @description 部分版本在无 referrerInfo 的时候会返回 undefined，建议使用 options.referrerInfo && options.referrerInfo.appId 进行判断
       */
      referrerInfo?: ITypeReferrerInfo;
      /**
       * @summary 启动小程序的 [场景值](https://opendocs.alipay.com/mini/framework/scene)
       */
      scene?: number;
      /**
       * @summary API 类别
       * @sdk 2.7.22
       */
      apiCategory?: 'default' | 'embedded';
    }) => void,
  ): void;
  /**
   * @summary 监听音频因为系统占用而被中断的开始事件
   * @see https://opendocs.alipay.com/mini/00jim8
   */
  export function onAudioInterruptionBegin(cb: () => void): void;
  /**
   * @summary 监听音频被中断的结束事件
   * @description 在收到 [my.onAudioInterruptionBegin]() 事件之后，小程序内的所有音频会暂停，收到此事件之后可再次播放成功
   * @see https://opendocs.alipay.com/mini/00jgot
   */
  export function onAudioInterruptionEnd(cb: () => void): void;
  /**
   * @summary 监听 iBeacon 服务的状态变化
   * @see https://opendocs.alipay.com/mini/api/rq1dl7
   */
  export function onBeaconServiceChange(
    cb: (arg: {
      /**
       * @summary 服务目前是否可用。
       */
      available: boolean;
      /**
       * @summary 目前是否处于搜索状态。
       */
      discovering: boolean;
    }) => void,
  ): void;
  /**
   * @summary 监听 iBeacon 设备的更新事件
   * @see https://opendocs.alipay.com/mini/api/kvdg9y
   */
  export function onBeaconUpdate(
    cb: (arg: {
      /**
       * @summary 当前搜寻到的所有 iBeacon 设备列表。
       */
      beacons: IBeaconUpdateBeacons[];
    }) => void,
  ): void;
  /**
   * @summary 监听蓝牙低功耗设备的特征值变化的事件
   * @see https://opendocs.alipay.com/mini/api/cdu501
   */
  export function onBLECharacteristicValueChange(
    cb: (arg: {
      /**
       * @summary 蓝牙设备 ID。
       */
      deviceId: string;
      serviceId: string;
      characteristicId: string;
      value: string;
    }) => void,
  ): void;
  /**
   * @summary 监听蓝牙低功耗设备的连接状态变化的事件
   * @see https://opendocs.alipay.com/mini/api/utgyiu
   */
  export function onBLEConnectionStateChanged(
    cb: (arg: {
      /**
       * @summary 蓝牙设备 ID。
       */
      deviceId: string;
      /**
       * @summary 连接目前的状态。
       */
      connected: boolean;
    }) => void,
  ): void;
  /**
   * @summary 监听本机蓝牙状态变化的事件
   * @see https://opendocs.alipay.com/mini/api/eegfbk
   */
  export function onBluetoothAdapterStateChange(
    cb: (arg: {
      /**
       * @summary 蓝牙模块是否可用。
       */
      available: boolean | 'true' | 'false';
      /**
       * @summary 蓝牙模块是否处于搜索状态。
       */
      discovering: boolean;
    }) => void,
  ): void;
  /**
   * @summary 搜索到新的蓝牙设备时触发此事件
   * @see https://opendocs.alipay.com/mini/api/mhzls9
   */
  export function onBluetoothDeviceFound(
    cb: (arg: {
      /**
       * @summary 新搜索到的设备列表。
       */
      devices: TypeBluetoothDevice[];
    }) => void,
  ): void;
  /**
   * @summary 监听罗盘数据变化事件
   * @description
   * - 回调间隔为500ms
   * - 可使用 [my.offCompassChange]() 停止监听。
   * @see https://opendocs.alipay.com/mini/api/compass
   */
  export function onCompassChange(
    cb: (arg: {
      /**
       * @summary 面对的方向与正北方向的度数，值的范围为 `[0, 360)`。
       */
      direction: number;
    }) => void,
  ): void;
  /**
   * @summary 监听小程序自定义组件错误事件
   * @description 当自定义组件内部 JS 代码运行抛出错误时，除了会执行 [my.onError]() 回调外，同时会触发 [my.onComponentError]() 回调。
   */
  export function onComponentError(
    cb: /**
     * @param error 异常对象
     * @param method 异常发生所在的自定义组件方法
     * @param componentInstance 异常发生所在的自定义组件实例
     */
    (error: Error, method: string, componentInstance: any) => void,
  ): void;
  /**
   * @summary 监听设备方向变化
   * @description 目前回调频率为 200ms/次 左右
   */
  export function onDeviceMotionChange(
    cb: (arg: {
      /**
       * @summary 当手机坐标 X/Y 和 地球 X/Y 重合时，绕着 Z 轴转动的夹角为 `alpha`。
       * - 值的范围为 `[0, 2*PI)`。
       * - 逆时针转动为正。
       */
      alpha: number;
      /**
       * @summary 当手机坐标 Y/Z 和地球 Y/Z 重合时，绕着 X 轴转动的夹角为 `beta`。
       * - 值的范围为 `[-1*PI, PI)`。
       * - 顶部朝着地球表面转动为正，也有可能朝着用户为正。
       */
      beta: number;
      /**
       * @summary 当手机 X/Z 和地球 X/Z 重合时，绕着 Y 轴转动的夹角为 `gamma`。
       * - 值的范围为 `[-1*PI/2, PI/2)`。
       * - 右边朝着地球表面转动为正。
       */
      gamma: number;
    }) => void,
  ): void;
  /**
   * @summary 监听小程序错误事件
   * @description
   * 目前仅指 JS 执行错误。触发时机和参数与 App.onError 的一致。
   * 使用 my.onError 监听到的报错，app.js 中的 onError 方法也会监听到。
   * 使用 my.onError 监听页面报错，如果在多个页面开启监听没有关闭，则页面报错时会触发多个监听事件，建议在页面关闭时调用 my.offError 关闭监听。
   */
  export function onError(
    cb: /**
     * @param message 异常信息
     * @param stack 异常堆栈
     */
    (message: string, stack: string) => void,
  ): void;
  /**
   * @summary 监听在获取到 Wi-Fi 列表数据时的事件
   */
  export function onGetWifiList(
    cb: (arg: {
      /**
       * @summary Wifi 列表数据。
       */
      wifiList: IGetWifiListWifiList[];
    }) => void,
  ): void;
  /**
   * @summary 监听陀螺仪数据变化事件
   * @description
   * - 回调间隔为500ms
   * - 可使用 [my.offGyroscopeChange]() 停止监听。
   * @see https://opendocs.alipay.com/mini/api/gyroscope
   */
  export function onGyroscopeChange(
    cb: (arg: {
      /**
       * @summary x 轴方向角速度。
       */
      x: number;
      /**
       * @summary y 轴方向角速度。
       */
      y: number;
      /**
       * @summary z 轴方向角速度。
       */
      z: number;
      timestamp: number;
    }) => void,
  ): void;
  /**
   * @summary 监听该页面地理位置定位完成的事件
   * @description 只针对 `chooseCity` 中属性 `setLocatedCity` 为 `true` 的情况。
   * @see https://opendocs.alipay.com/mini/api/krzyo1
   */
  export function onLocatedComplete(
    cb: (arg: {
      /**
       * @summary 当前定位城市经度。
       */
      longitude: number;
      /**
       * @summary 当前定位城市纬度。
       */
      latitude: number;
      /**
       * @summary 当前定位城市 id，setLocatedCity 的时候带上。
       */
      locatedCityId: string;
    }) => void,
  ): void;
  /**
   * @summary 开始监听内存不足的告警事件
   * @see https://opendocs.alipay.com/mini/api/rb9o8p
   */
  export function onMemoryWarning(
    cb: (arg: {
      /**
       * @summary 系统内存的告警等级
       * @description - 仅 Android 返回，iOS 不返回，需要兼容判断
       * @native 10.1.35
       * @ios false
       */
      level?: EMemoryWarningLevel;
    }) => void,
  ): void;
  /**
   * @summary 开始监听网络状态变化事件
   * @see https://opendocs.alipay.com/mini/api/ympi0l
   */
  export function onNetworkStatusChange(
    cb: (arg: {
      /**
       * @summary 网络是否可用。
       */
      isConnected: boolean;
      /**
       * @summary 网络类型值
       */
      networkType: 'UNKNOWN' | 'NOTREACHABLE' | 'WIFI' | '3G' | '2G' | '4G' | 'WWAN';
    }) => void,
  ): void;
  /**
   * @summary 监听小程序要打开的页面不存在事件
   * @description
   * 该事件与 `App.onPageNotFound` 的回调时机一致。
   * 开发者可以在回调中进行页面重定向，但必须在回调中同步处理，异步处理（例如 setTimeout 异步执行）无效。
   * 若开发者没有调用 my.onPageNotFound 绑定监听，也没有声明 App.onPageNotFound，当跳转页面不存在时，将推入页面不存在提示页面。
   * 如果回调中又重定向到另一个不存在的页面，将推入页面不存在提示页面，并且不再第二次回调。
   * 仅响应小程序冷启动或热启动时的页面找不到事件，不支持处理 路由 API 的失败场景。
   */
  export function onPageNotFound(
    cb: (param: {
      /**
       * @summary 不存在页面的路径 (代码包路径)。
       */
      path: string;
      /**
       * @summary 打开不存在页面的 query 参数。
       */
      query: Record<string, any>;
      /**
       * @summary 是否本次启动的首个页面
       * @description 例如从分享等入口进来，首个页面是开发者配置的分享页面
       */
      isEntryPage: boolean;
    }) => void,
  ): void;
  /**
   * @summary 监听 WebSocket 关闭事件
   * @see https://opendocs.alipay.com/mini/api/foqk6g
   */
  export function onSocketClose(cb: (arg: { reason: string }) => void): void;
  /**
   * @summary 监听 WebSocket 错误事件
   * @see https://opendocs.alipay.com/mini/api/giu3c2
   */
  export function onSocketError(cb: (arg: { errorMessage: string; error: number }) => void): void;
  /**
   * @summary 监听 WebSocket 接受到服务器的消息事件
   * @see https://opendocs.alipay.com/mini/api/gecnap
   */
  export function onSocketMessage(
    cb: (arg: {
      /**
       * @summary 服务器返回的消息：普通的文本 string 或者经 base64 编码后的 string。
       */
      data: string | ArrayBuffer;
      /**
       * @summary 如果此字段值为 true，data 字段表示接收到的经过了 base64 编码后的 string，否则 data 字段表示接收到的普通 string 文本。
       */
      isBuffer: boolean;
    }) => void,
  ): void;
  /**
   * @summary 监听 WebSocket 连接打开事件
   * @see https://opendocs.alipay.com/mini/api/itm5og
   */
  export function onSocketOpen(cb: () => void): void;
  /**
   * @summary 监听未处理的 Promise 拒绝事件
   * @description 当 Promise 被 reject 且没有 reject 处理器的时候，会触发 unhandledrejection 事件，该事件的回调时机和参数与 App.onUnhandledRejection 的一致。
   */
  export function onUnhandledRejection(
    cb: (param: {
      /**
       * @summary reject() 的接收值，一般是 error 对象
       */
      reason: Error | unknown;
      /**
       * @summary 被 reject 的 Promise 对象
       */
      promise: Promise<unknown>;
    }) => void,
  ): void;
  /**
   * @summary 监听用户发起的主动截屏事件
   * @description
   * - 可以接收到系统以及第三方截屏工具的截屏事件通知。
   * - 可使用 [my.offUserCaptureScreen]() 取消监听。
   * @see https://opendocs.alipay.com/mini/api/user-capture-screen
   */
  export function onUserCaptureScreen(cb: () => void): void;
  /**
   * @summary 监听连接上 Wi-Fi 的事件
   */
  export function onWifiConnected(
    cb: (arg: {
      /**
       * @summary Wifi 信息。
       */
      wifi: IWifiInfo;
    }) => void,
  ): void;
  /**
   * @summary 初始化小程序蓝牙模块
   * @see https://opendocs.alipay.com/mini/api/kunuy4
   */
  export function openBluetoothAdapter(r?: {
    /**
     * @summary 表示是否在离开当前页面时自动断开蓝牙。仅支持 `Android` 系统。
     * @default true
     */
    autoClose?: boolean;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 是否支持 BLE
       */
      isSupportBLE: boolean;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 是否支持 BLE
             */
            isSupportBLE: boolean;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 是否支持 BLE
     */
    isSupportBLE: boolean;
  }>;
  /**
   * @summary 在新页面打开文件预览
   * @description 暂时只支持预览 PDF 格式文件
   * @see https://opendocs.alipay.com/mini/api/mwpprc
   */
  export function openDocument(r: {
    /**
     * @summary 文件路径，可通过 `downloadFile` 获得。
     */
    filePath: string;
    /**
     * @summary 文件类型。
     * 有效值：
     * - `pdf`：PDF 格式。
     */
    fileType?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 打开半屏小程序
   */
  export function openEmbeddedMiniProgram(r: {
    /**
     * @summary 要跳转的目标小程序 appId
     */
    appId: string;
    /**
     * @summary 打开的页面路径
     * @description 如果为空则打开首页。
     */
    path?: string;
    /**
     * @summary 用于设置目标小程序的 app 级别 query 参数
     * @description 目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据。
     */
    query?: IOpenEmbeddedMiniProgramParam;
    /**
     * @summary 需要传递给目标小程序的数据
     * @description 目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据。
     */
    extraData?: IOpenEmbeddedMiniProgramParam;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  export function openKBVoucherDetail(r: {
    /**
     * @summary 卡实例 ID，调用 [券发放接口](https://docs.open.alipay.com/api_24/alipay.pass.instance.add) 可以获取该参数。
     */
    passId: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  export function openKBVoucherDetail(r: {
    /**
     * @summary 商户编号。
     */
    partnerId: string;
    /**
     * @summary 序列号。
     */
    serialNumber: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 使用支付宝内置地图查看位置
   * @description
   * - 暂无境外地图数据，在中国内地（不含港澳台）以外的地区可能无法正常调用
   * - 仅支持高德地图 style 与火星坐标系
   * @see https://opendocs.alipay.com/mini/api/as9kin
   */
  export function openLocation(r: {
    /**
     * @summary 经度。
     */
    longitude: string;
    /**
     * @summary 纬度。
     */
    latitude: string;
    /**
     * @summary 位置名称。
     */
    name: string;
    /**
     * @summary 地址的详细说明。
     */
    address: string;
    /**
     * @summary 缩放比例，范围 3~19。
     * @default 15
     */
    scale?: number;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 跳转到当前用户在指定商户的已领取票列表界面
   */
  export function openMerchantTicketList(r: {
    /**
     * @summary 商户编号。
     */
    partnerId: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 跳转到当前用户在指定商户的已领取券列表界面
   */
  export function openMerchantVoucherList(r: {
    /**
     * @summary 商户编号。
     */
    partnerId: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 跳转到小程序设置界面
   * @description 返回用户权限设置的结果
   * @see https://opendocs.alipay.com/mini/api/qflu8f
   */
  export function openSetting(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { authSetting: IOpenSettingAuthSetting }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            authSetting: IOpenSettingAuthSetting;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    authSetting: IOpenSettingAuthSetting;
  }>;
  export function openTicketDetail(r: {
    /**
     * @summary 卡实例 ID，调用 [券发放接口](https://docs.open.alipay.com/api_24/alipay.pass.instance.add) 可以获取该参数。
     */
    passId: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  export function openTicketDetail(r: {
    /**
     * @summary 商户编号。
     */
    partnerId: string;
    /**
     * @summary 序列号。
     */
    serialNumber: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 跳转到支付宝票列表界面
   */
  export function openTicketList(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  export function openVoucherDetail(r: {
    /**
     * @summary 卡实例 ID，调用 [券发放接口](https://docs.open.alipay.com/api_24/alipay.pass.instance.add) 可以获取该参数。
     */
    passId: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  export function openVoucherDetail(r: {
    /**
     * @summary 商户编号。
     */
    partnerId: string;
    /**
     * @summary 序列号。
     */
    serialNumber: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 跳转到支付宝券列表界面
   */
  export function openVoucherList(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 显示下拉列表选择器菜单
   * @description 一般用于 2 级数据的选择，但不支持 2 级数据之间的联动
   * @see https://opendocs.alipay.com/mini/api/options-select
   */
  export function optionsSelect(r: {
    title?: string;
    optionsOne: string[];
    optionsTwo?: string[];
    /**
     * @default 0
     */
    selectedOneIndex?: number;
    /**
     * @default 0
     */
    selectedTwoIndex?: number;
    /**
     * @default "确定"
     */
    positiveString?: string;
    /**
     * @default "取消"
     */
    negativeString?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { selectedOneIndex: number; selectedTwoIndex?: number; selectedOneOption: string; selectedTwoOption?: string }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            selectedOneIndex: number;
            selectedTwoIndex?: number;
            selectedOneOption: string;
            selectedTwoOption?: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    selectedOneIndex: number;
    selectedTwoIndex?: number;
    selectedOneOption: string;
    selectedTwoOption?: string;
  }>;
  /**
   * @summary 滚动到页面的目标位置
   * @see https://opendocs.alipay.com/mini/api/scroll
   */
  export function pageScrollTo(r?: {
    /**
     * @summary 滚动到页面的目标位置，单位 px
     * @description scrollTop 的优先级比 selector 高
     */
    scrollTop?: number;
    /**
     * @summary 滚动到选择器处于页面可见的位置
     */
    selector?: string;
    /**
     * @summary 滚动动画的时长，单位 ms
     * @default 0
     */
    duration?: number;
    /**
     * @summary 偏移距离，需要和 selector 参数搭配使用，可以滚动到 selector 加偏移距离的位置，单位 px
     * @sdk 2.8.0
     */
    offsetTop?: number;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(
      err:
        | {
            error?: number;
            errorMessage?: string;
          }
        | {
            error: 1;
            errorMessage: 'need scrollTop or selector';
          },
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            error?: number;
            errorMessage?: string;
          }
        | {
            error: 1;
            errorMessage: 'need scrollTop or selector';
          },
    ): void;
  }): Promise<void>;
  /**
   * @summary 发起签约代扣
   * @see https://opendocs.alipay.com/mini/006v6d
   */
  export function paySignCenter(r: {
    /**
     * @summary 签约字符串。
     */
    signStr: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 处理结果（如需该字段内部参数，切记先 `JSON.parse` 一下）。
       * `JSON.parse` 后的对象结构如下：
       * - `sign`，类型 `string`，签名
       * - `sign_type`，类型 `string`，签名算法类型
       * - `alipay_user_agreement_page_sign_response`，类型 `object`
       */
      result: string;
      /**
       * @summary 签约结果码。
       */
      resultStatus: string;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 处理结果（如需该字段内部参数，切记先 `JSON.parse` 一下）。
             * `JSON.parse` 后的对象结构如下：
             * - `sign`，类型 `string`，签名
             * - `sign_type`，类型 `string`，签名算法类型
             * - `alipay_user_agreement_page_sign_response`，类型 `object`
             */
            result: string;
            /**
             * @summary 签约结果码。
             */
            resultStatus: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 处理结果（如需该字段内部参数，切记先 `JSON.parse` 一下）。
     * `JSON.parse` 后的对象结构如下：
     * - `sign`，类型 `string`，签名
     * - `sign_type`，类型 `string`，签名算法类型
     * - `alipay_user_agreement_page_sign_response`，类型 `object`
     */
    result: string;
    /**
     * @summary 签约结果码。
     */
    resultStatus: string;
  }>;
  /**
   * @summary 预览图片
   * @see https://opendocs.alipay.com/mini/api/eei0av
   */
  export function previewImage(r: {
    /**
     * @summary 照片支持长按下载。
     * @native 10.1.35
     */
    enableSavePhoto?: boolean;
    /**
     * @summary 是否在右下角显示下载入口。
     * @native 10.1.35
     */
    enableShowPhotoDownload?: boolean;
    /**
     * @summary 要预览的图片 HTTP 链接列表。支持网络 url，apfilePath。
     */
    urls: string[];
    /**
     * @summary 当前显示图片索引。
     * @default 0
     */
    current?: number;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 显示输入对话框
   * @see https://opendocs.alipay.com/mini/api/vqpy01
   */
  export function prompt(r: {
    /**
     * @summary 提示框的标题
     */
    title: string;
    /**
     * @summary 提示框的显示内容
     * @default "请输入内容"
     */
    message?: string;
    /**
     * @summary 提示框的显示内容的对齐方式
     * @default "left"
     */
    align?: 'left' | 'center' | 'right';
    /**
     * @summary 输入框
     */
    placeholder?: string;
    /**
     * @summary "确认" 按钮颜色，HEX 格式
     */
    confirmColor?: string;
    /**
     * @summary "取消" 按钮颜色，HEX 格式
     */
    cancelColor?: string;
    /**
     * @summary 确认按钮文字
     * @default "确定"
     */
    okButtonText?: string;
    /**
     * @summary 取消按钮文字
     * @default "取消"
     */
    cancelButtonText?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { ok: boolean; inputValue: string }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            ok: boolean;
            inputValue: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    ok: boolean;
    inputValue: string;
  }>;
  /**
   * @summary 读取蓝牙低功耗设备特征值中的数据
   * @description 调用后在 [my.onBLECharacteristicValueChange]() 事件中接收数据返回。
   * @see https://opendocs.alipay.com/mini/api/zro0ka
   */
  export function readBLECharacteristicValue(r: {
    /**
     * @summary 蓝牙设备 ID
     */
    deviceId: string;
    /**
     * @summary 蓝牙特征值对应 service 的 UUID
     */
    serviceId: string;
    /**
     * @summary 蓝牙特征值的 UUID
     */
    characteristicId: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 设备特征值信息
       */
      characteristic: ITypeBLECharacteristic;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 设备特征值信息
             */
            characteristic: ITypeBLECharacteristic;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 设备特征值信息
     */
    characteristic: ITypeBLECharacteristic;
  }>;
  /**
   * @summary 将当前页面重定向到指定页面
   * @see https://opendocs.alipay.com/mini/api/fh18ky
   */
  export function redirectTo(r: {
    /**
     * @summary 需要跳转的目标页面路径
     * 路径后可以带参数, 目标路径必须为应用内非 tabbar 的，路径与参数之间使用 ?分隔，参数键与参数值用=相连，不同参数必须用&分隔
     */
    url: string;
    /**
     * @summary 指定 url 为相对路径的绝对路径基准
     */
    resolvedPath?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 显示多级省市区选择器
   * @description 自带省市区数据源
   */
  export function regionPicker(r?: {
    /**
     * @summary 标题。
     */
    title?: string;
    /**
     * @summary 可为每一列的顶部添加一个自定义的选项。
     */
    customItem?: string;
    /**
     * @summary 自定义修改城市数据，支持删除、添加和更新城市信息。
     * - 对城市信息的删除、添加、更新操作不会全局生效，仅单次生效。
     */
    mergeOptions?: IRegionPickerMergeOptions;
    /**
     * @summary 表示选中的省市区，默认选中每一列的第一个值。
     */
    selectedItem?: string[];
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 选择的省市区名称数组。
       */
      data: string[];
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 选择的省市区名称数组。
             */
            data: string[];
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 选择的省市区名称数组。
     */
    data: string[];
  }>;
  /**
   * @summary 信任指定 SSID
   * @description 对于需要 Portal 认证的 WIFI，不会弹出 portal 认证页面
   */
  export function registerSSID(r: {
    /**
     * @summary Wifi 设备 SSID。
     */
    SSID: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 关闭当前所有页面，并重新打开应用内的某个指定页面
   * @see https://opendocs.alipay.com/mini/api/hmn54z
   */
  export function reLaunch(r: {
    /**
     * @summary 需要跳转的目标页面路径
     * @description
     * 目标路径如果是 Tab 路径后不可以带参数
     * 目标路径如果是非 Tab 页，可以携带参数，路径与参数之间使用 `?` 分隔，参数键与参数值用 `=` 相连，不同参数必须用 `&` 分隔
     */
    url: string;
    /**
     * @summary 指定 url 为相对路径的绝对路径基准
     */
    resolvedPath?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 删除某个保存的文件
   * @see https://opendocs.alipay.com/mini/api/dgi1fr
   */
  export function removeSavedFile(r?: {
    /**
     * @summary 文件路径。
     */
    apFilePath?: string;
    /**
     * @summary 文件路径。
     */
    filePath?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 删除缓存数据
   * @see https://opendocs.alipay.com/mini/api/of9hze
   */
  export function removeStorage(r: {
    key: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true; error: 0 }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            success: true;
            error: 0;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    success: true;
    error: 0;
  }>;
  /**
   * @summary 同步删除缓存数据
   * @see https://opendocs.alipay.com/mini/api/ytfrk4
   */
  export function removeStorageSync(r: { key: string }): {
    success: true;
    error: 0;
  };
  /**
   * @summary 移除 TabBar 某一项右上角的文本
   * @see https://opendocs.alipay.com/mini/api/lpbp5g
   */
  export function removeTabBarBadge(r: {
    /**
     * @summary 标签页的项数序号，从左边开始计数。
     */
    index: number;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 发起网络请求
   * @description [my.httpRequest]() 已不再维护，建议使用 [my.request]()
   * @see https://opendocs.alipay.com/mini/api/owycmh
   */
  export function request(r: {
    /**
     * @summary 目标服务器 URL
     * @description
     * - 目前只支持 HTTPS 协议的请求
     * - 目前只支持与 *域名白名单* 中的域名通讯
     *   - 开发过程中，可通过开发者工具 **详情 > 域名信息 > 忽略 httpRequest 域名合法性检查** 忽略该限制（模拟器、预览以及真机调试场景不会校验域名合法性）
     *   - 正式/体验版本必须在 **支付宝小程序管理中心 > 小程序详情 > 设置 > 开发设置 > 服务器域名白名单** 中配置
     *   - 域名添加或删除后仅对新版本生效，老版本仍使用修改前的域名配置
     */
    url: string;
    /**
     * @summary 返回的数据格式
     * @default 'json'
     */
    dataType?: 'json' | 'text' | 'base64' | 'arraybuffer';
    /**
     * @summary HTTP 请求方法
     * @default 'GET'
     */
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    /**
     * @summary 传给服务器的数据
     * @description
     * 传给服务器的数据最终会是 string 类型，如果 data 不是 string 类型，会被转换成 string 。转换规则如下：
     * - 若方法为 `GET`，会将数据转换成 querystring 形式： `encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...`
     * - 若方法为 `POST` 且 `headers['content-type']` 为 `application/json` ，会对数据进行 JSON 序列化。
     * - 若方法为 `POST` 且 `headers['content-type']` 为 `application/x-www-form-urlencoded` ，会将数据转换成 querystring形式： `encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...`
     */
    data?: string | Record<string, string> | ArrayBuffer;
    /**
     * @summary 设置请求的 HTTP 头对象
     * @description
     * - "content-type" 字段默认为 `application/json`
     * - `referer` 字段不可设置，其格式固定为 https://{appid}.hybrid.alipay-eco.com/{appid}/{version}/index.html#{page}，其中 {appid} 为小程序的 APPID，{version} 为小程序发布标识，{page} 为小程序当前页面。
     */
    headers?: Record<string, string>;
    /**
     * @summary 超时时间，单位 ms
     * @default 30000
     */
    timeout?: number;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 响应数据，格式取决于请求时的 `dataType` 参数
       */
      data: string | Record<string, unknown> | ArrayBuffer;
      /**
       * @summary HTTP 响应码。
       */
      status: number;
      /**
       * @summary HTTP 响应头。
       */
      headers: Record<string, string>;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
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
          },
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 响应数据，格式取决于请求时的 `dataType` 参数
             */
            data: string | Record<string, unknown> | ArrayBuffer;
            /**
             * @summary HTTP 响应码。
             */
            status: number;
            /**
             * @summary HTTP 响应头。
             */
            headers: Record<string, string>;
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
          ),
    ): void;
  }): Promise<{
    /**
     * @summary 响应数据，格式取决于请求时的 `dataType` 参数
     */
    data: string | Record<string, unknown> | ArrayBuffer;
    /**
     * @summary HTTP 响应码。
     */
    status: number;
    /**
     * @summary HTTP 响应头。
     */
    headers: Record<string, string>;
  }> &
    RequestTask;
  /**
   * @summary 调起小程序订阅消息界面
   */
  export function requestSubscribeMessage(r: {
    appId?: string;
    aboveContent?: boolean;
    /**
     * @summary 需要订阅的消息模板 id 的集合
     */
    entityIds: string[];
    /**
     * @summary 模板小程序标识，仅在 ISV（独立软件开发商） 场景下需要传入。
     */
    thirdTypeAppId?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      [entityId: string]: unknown;
      /**
       * @summary 订阅行为结果
       */
      behavior: '' | 'subscribe' | 'cancel';
      /**
       * @summary 本次订阅过程是否弹出了订阅面板
       */
      show: boolean;
      /**
       * @summary 单次订阅模板，用户同意订阅并勾选"不再询问"时为 true
       */
      keep: boolean;
      /**
       * @summary 长期订阅模板，用户点击"拒绝，不再询问"时为 true
       */
      refuse: boolean;
      /**
       * @summary 错误码
       * @description 可参考：[错误码](https://opendocs.alipay.com/mini/api/requestSubscribeMessage#%E9%94%99%E8%AF%AF%E7%A0%81)
       */
      errorCode?: number;
      /**
       * @summary 错误信息
       */
      errorMessage?: string;
      /**
       * @summary 订阅数据
       */
      result?: IMyRequestSubscribeMessageResult;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(
      err:
        | {
            error?: number;
            errorMessage?: string;
          }
        | {
            /**
             * @summary 错误码。
             */
            errorCode: number;
            /**
             * @summary 错误信息。
             */
            errorMessage: string;
          },
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            [entityId: string]: unknown;
            /**
             * @summary 订阅行为结果
             */
            behavior: '' | 'subscribe' | 'cancel';
            /**
             * @summary 本次订阅过程是否弹出了订阅面板
             */
            show: boolean;
            /**
             * @summary 单次订阅模板，用户同意订阅并勾选"不再询问"时为 true
             */
            keep: boolean;
            /**
             * @summary 长期订阅模板，用户点击"拒绝，不再询问"时为 true
             */
            refuse: boolean;
            /**
             * @summary 错误码
             * @description 可参考：[错误码](https://opendocs.alipay.com/mini/api/requestSubscribeMessage#%E9%94%99%E8%AF%AF%E7%A0%81)
             */
            errorCode?: number;
            /**
             * @summary 错误信息
             */
            errorMessage?: string;
            /**
             * @summary 订阅数据
             */
            result?: IMyRequestSubscribeMessageResult;
          }
        | (
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                /**
                 * @summary 错误码。
                 */
                errorCode: number;
                /**
                 * @summary 错误信息。
                 */
                errorMessage: string;
              }
          ),
    ): void;
  }): Promise<{
    [entityId: string]: unknown;
    /**
     * @summary 订阅行为结果
     */
    behavior: '' | 'subscribe' | 'cancel';
    /**
     * @summary 本次订阅过程是否弹出了订阅面板
     */
    show: boolean;
    /**
     * @summary 单次订阅模板，用户同意订阅并勾选"不再询问"时为 true
     */
    keep: boolean;
    /**
     * @summary 长期订阅模板，用户点击"拒绝，不再询问"时为 true
     */
    refuse: boolean;
    /**
     * @summary 错误码
     * @description 可参考：[错误码](https://opendocs.alipay.com/mini/api/requestSubscribeMessage#%E9%94%99%E8%AF%AF%E7%A0%81)
     */
    errorCode?: number;
    /**
     * @summary 错误信息
     */
    errorMessage?: string;
    /**
     * @summary 订阅数据
     */
    result?: IMyRequestSubscribeMessageResult;
  }>;
  /**
   * @summary 非对称加密
   * @description 加密与解密过程应分别放置在客户端与服务端，私钥也放在服务端（若私钥放在客户端，容易泄露而导致安全问题）。
   * @see https://opendocs.alipay.com/mini/api/data-safe
   */
  export function rsa(r: {
    /**
     * @summary 使用 RSA 加密还是 RSA 解密。
     */
    action: 'encrypt' | 'decrypt';
    /**
     * @summary 需要被加/解密的文本
     * - `加密` 为 原始文本。
     * - `解密` 为 `Base64` 编码格式文本。
     */
    text: string;
    /**
     * @summary RSA 密钥。
     * - `加密` 使用公钥
     * - `解密` 使用私钥。
     */
    key: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 经过处理过后得到的文本。
       * - `加密` 为 `Base64` 编码文本。
       * - `解密` 为 原始文本。
       */
      text: string;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 经过处理过后得到的文本。
             * - `加密` 为 `Base64` 编码文本。
             * - `解密` 为 原始文本。
             */
            text: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 经过处理过后得到的文本。
     * - `加密` 为 `Base64` 编码文本。
     * - `解密` 为 原始文本。
     */
    text: string;
  }>;
  /**
   * @summary 保存文件到本地
   * @description 本地文件大小总容量限制：10 MB
   * @see https://opendocs.alipay.com/mini/api/xbll1q
   */
  export function saveFile(r: {
    /**
     * @summary 文件路径。
     */
    apFilePath: string;
    filePath: string;
    /**
     * @summary 是否将文件保存到外部存储目录
     * @default false
     */
    toDisk?: boolean;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
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
          },
    ): void;
  }): Promise<{
    success: true;
  }>;
  /**
   * @summary 将在线图片保存至本地相册
   * @description 推荐使用 [my.saveImageToPhotosAlbum]()
   * @see https://opendocs.alipay.com/mini/api/izfoiz
   */
  export function saveImage(r: {
    /**
     * @summary 要保存的图片链接。
     */
    url: string;
    /**
     * @summary 是否显示图片操作菜单。
     * @default false
     */
    showActionSheet?: boolean;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 保存图片到本地相册
   */
  export function saveImageToPhotosAlbum(r: {
    /**
     * @summary 要保存的图片链接。
     */
    filePath: string;
    hideToast?: boolean;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
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
          },
    ): void;
  }): Promise<{
    success: true;
  }>;
  /**
   * @summary 保存视频到系统相册
   */
  export function saveVideoToPhotosAlbum(r?: {
    src?: string;
    filePath?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
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
          },
    ): void;
  }): Promise<{
    success: true;
  }>;
  /**
   * @summary 跳转到扫一扫界面
   * @description - 唤起扫一扫会触发以下生命周期: App.onHide → Page.onHide → App.onShow → Page.onShow
   * @see https://opendocs.alipay.com/mini/api/scan
   */
  export function scan(r?: {
    /**
     * @deprecated 请使用 `scanType`
     * @default "qr"
     */
    type?: 'bar' | 'lottery' | 'qr';
    /**
     * @summary 扫码识别类型
     */
    scanType?: ('qrCode' | 'barCode' | 'dmCode' | 'pdf417Code' | 'narrowCode' | 'hmCode')[];
    charset?: string;
    /**
     * 不允许从相册选择图片，只能从相机扫码
     * @default false
     */
    hideAlbum?: boolean;
    /**
     * @summary 扫码动作
     * @default "scan"
     */
    actionType?: 'scan' | 'route' | 'scanAndRoute' | 'scanAndRpc';
    /**
     * @summary 指定用于”route”操作类型的码值
     */
    qrcode?: string;
    needPath?: boolean;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 扫描二维码时返回的结果
       * @deprecated 请使用 code 字段
       */
      barCode?: string;
      /**
       * @summary 扫描条形码时返回的结果
       * @deprecated 请使用 code 字段
       */
      qrCode?: string;
      /**
       * @summary 扫码结果
       */
      code: string;
      /**
       * @summary base64 编码的结果
       */
      rawData: string;
      /**
       * @summary 来源
       */
      imageChannel: string;
      /**
       * @summary 码内容
       */
      result: string;
      /**
       * @summary 码类型
       */
      scanType: string;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 扫描二维码时返回的结果
             * @deprecated 请使用 code 字段
             */
            barCode?: string;
            /**
             * @summary 扫描条形码时返回的结果
             * @deprecated 请使用 code 字段
             */
            qrCode?: string;
            /**
             * @summary 扫码结果
             */
            code: string;
            /**
             * @summary base64 编码的结果
             */
            rawData: string;
            /**
             * @summary 来源
             */
            imageChannel: string;
            /**
             * @summary 码内容
             */
            result: string;
            /**
             * @summary 码类型
             */
            scanType: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 扫描二维码时返回的结果
     * @deprecated 请使用 code 字段
     */
    barCode?: string;
    /**
     * @summary 扫描条形码时返回的结果
     * @deprecated 请使用 code 字段
     */
    qrCode?: string;
    /**
     * @summary 扫码结果
     */
    code: string;
    /**
     * @summary base64 编码的结果
     */
    rawData: string;
    /**
     * @summary 来源
     */
    imageChannel: string;
    /**
     * @summary 码内容
     */
    result: string;
    /**
     * @summary 码类型
     */
    scanType: string;
  }>;
  /**
   * @summary 通过socket发送数据
   * @see https://opendocs.alipay.com/mini/api/mr91d1
   */
  export function sendSocketMessage(r: {
    /**
     * @summary 需要发送的内容：普通的文本内容 string 或者经 Base64 编码后的 string。
     */
    data: string;
    /**
     * @summary 是否对二进制数据进行 base64 编码
     * @description
     * - 如果发送二进制数据，需要将入参数据经 Base64 编码成 string 后赋值 data，同时将此字段设置为 true。
     * - 如果是普通的文本内容 string，则不需要设置此字段。
     * @default false
     */
    isBuffer?: boolean;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 设置窗口背景颜色
   * @see https://opendocs.alipay.com/mini/api/set-background
   */
  export function setBackgroundColor(r?: {
    backgroundColor?: string;
    backgroundColorTop?: string;
    backgroundColorBottom?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
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
          },
    ): void;
  }): Promise<{
    success: true;
  }>;
  /**
   * @summary 设置下拉背景文字样式
   * @see https://opendocs.alipay.com/mini/api/aamqae
   */
  export function setBackgroundTextStyle(r: {
    /**
     * @summary 下拉背景字体、loading 图的样式
     */
    textStyle: 'dark' | 'light';
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
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
          },
    ): void;
  }): Promise<{
    success: true;
  }>;
  /**
   * @summary 设置蓝牙低功耗设备的最大传输单元 (MTU)
   */
  export function setBLEMTU(r: {
    /**
     * @summary 设备id
     */
    deviceId: string;
    /**
     * @summary mtu值（大于23）
     */
    mtu: number;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      success: true;
      /**
       * @summary 协商后的mtu值
       */
      mtu: number;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            success: true;
            /**
             * @summary 协商后的mtu值
             */
            mtu: number;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    success: true;
    /**
     * @summary 协商后的mtu值
     */
    mtu: number;
  }>;
  /**
   * @summary 设置页面是否支持下拉
   * @description 默认支持页面下拉，可通过此接口关闭下拉或重新开启下来
   * @see https://opendocs.alipay.com/mini/api/set-can-pull-down
   */
  export function setCanPullDown(r: {
    /**
     * @summary 是否支持下拉
     */
    canPullDown: boolean;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 设置剪贴板数据。
   * @see https://opendocs.alipay.com/mini/api/klbkbp
   */
  export function setClipboard(r: {
    /**
     * @summary 剪贴板数据。
     */
    text: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
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
          },
    ): void;
  }): Promise<{
    success: true;
  }>;
  /**
   * @summary 设置是否保持屏幕长亮状态
   * @description 仅在当前小程序生效，离开小程序后失效。
   * @see https://opendocs.alipay.com/mini/api/qx0sap
   */
  export function setKeepScreenOn(r?: {
    keepScreenOn?: boolean;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
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
          },
    ): void;
  }): Promise<{
    success: true;
  }>;
  /**
   * @summary 修改默认定位城市的名称
   * @description 针对 [my.chooseCity]() 接口
   * @see https://opendocs.alipay.com/mini/api/yw382g
   */
  export function setLocatedCity(r: {
    /**
     * @summary 当前定位城市的名称。
     */
    locatedCityName: string;
    /**
     * @summary 当前定位城市 ID，`chooseCity` 接口的 `onLocatedComplete` 返回。
     */
    locatedCityId: string;
    /**
     * @summary 当前定位城市的行政区划代码，不传值时以控件默认拿到的为准。
     */
    locatedCityAdCode?: string;
    /**
     * @summary 当前定位城市的拼音，不传值时以控件默认拿到的为准。
     */
    locatedCityPinyin?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 修改后的定位城市名称
       */
      locatedCityName: string;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 修改后的定位城市名称
             */
            locatedCityName: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 修改后的定位城市名称
     */
    locatedCityName: string;
  }>;
  /**
   * @summary 设置导航栏样式
   * @description 样式包括：导航栏标题、导航栏背景色、导航栏底部边框颜色、导航栏左上角 logo 图片
   * @see https://opendocs.alipay.com/mini/api/xwq8e6
   */
  export function setNavigationBar(r?: {
    /**
     * @summary 导航栏标题。
     */
    title?: string;
    /**
     * @summary 导航栏左上角 logo 图片链接地址
     * @description
     * - 支持 gif 格式，必须使用 HTTPS 图片链接
     * - 若设置了 image 则 title 参数失效
     * - iOS 请使用3倍分辨率标准的高清图片
     */
    image?: string;
    /**
     * @summary 导航栏背景色，支持十六进制颜色值。
     * @description 导航栏背景色不支持渐变色
     */
    backgroundColor?: string;
    /**
     * @summary 导航栏底部边框颜色，支持十六进制颜色值。
     * @description 若设置了 backgroundColor，则 borderBottomColor 不会生效，默认会和 backgroundColor 颜色一样。
     */
    borderBottomColor?: string;
    /**
     * @summary 是否重置导航栏为支付宝默认配色。
     * @default false
     */
    reset?: boolean;
    /**
     * @summary 前景颜色值
     * @description 包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000
     */
    frontColor?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 设置屏幕亮度
   * @see https://opendocs.alipay.com/mini/api/ccf32t
   */
  export function setScreenBrightness(r: {
    /**
     * @summary 需要设置的屏幕亮度，取值范围 `0-1`。
     */
    brightness: number;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 将数据存储在本地缓存的指定的 key 中
   * @see https://opendocs.alipay.com/mini/api/eocm6v
   */
  export function setStorage(r: {
    /**
     * @summary 存储的数据
     * @description
     * - 单个 key 允许存储的最大数据大小为 200KB
     * - 所有数据存储上限为 10MB。
     */
    data: unknown;
    key: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 同步将数据存储在本地缓存的指定的 key 中
   * @see https://opendocs.alipay.com/mini/api/cog0du
   */
  export function setStorageSync(r: { data: unknown; key: string }): void;
  /**
   * @summary 动态设置 TabBar 某一项右上角的文本
   * @see https://opendocs.alipay.com/mini/api/qm7t3v
   */
  export function setTabBarBadge(r: {
    /**
     * @summary 标签页的项数序号，从左边开始计数。
     */
    index: number;
    /**
     * @summary 显示的文本，超过三个字符则显示 前两个字符 + “…”。例如：“支付宝” 显示 “支付宝”，“蚂蚁金服” 显示 “蚂蚁…”。
     */
    text: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 动态设置 TabBar 某一项的内容
   * @see https://opendocs.alipay.com/mini/api/zu37bk
   */
  export function setTabBarItem(r: {
    /**
     * @summary 标签页的项数序号，从左边开始计数。
     */
    index: number;
    /**
     * @summary 标签页按钮上的文字。
     */
    text: string;
    /**
     * @summary 图片路径，建议尺寸为 81px * 81px，支持 png/jpeg/jpg/gif 图片格式，支持网络图片。
     */
    iconPath: string;
    /**
     * @summary 选中时的图片路径，建议尺寸为 81px * 81px，支持 png/jpeg/jpg/gif 图片格式，支持网络图片。
     */
    selectedIconPath: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 动态设置 TabBar 的整体样式
   * @description 如文字颜色、标签背景色、标签边框颜色等
   * @see https://opendocs.alipay.com/mini/api/wcf0sv
   */
  export function setTabBarStyle(r: {
    /**
     * @summary 标签（tab）上的文字默认颜色。HEXcolor 格式，如 `#FF0000`
     */
    color: string;
    /**
     * @summary 标签（tab）上的文字选中时的颜色。HEXcolor 格式，如 `#00FF00`
     */
    selectedColor: string;
    /**
     * @summary 标签（tab）的背景色。HEXcolor 格式，如 `#0000FF`
     */
    backgroundColor: string;
    /**
     * @summary 标签页（tabbar）上边框的颜色（边框高度 1 px）。
     * - 支持传参如下：
     * - `black`，对应色值为 `#FFE5E5E5` 。
     * - `white`，对应色值为 `#FFFFFFFF` 。
     * - #开头的自定义的RGB色值，如 `#FFABABAE` 或 `#FFFFFF`。
     */
    borderStyle: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 设置截屏/录屏时的屏幕表现
   */
  export function setVisualEffectOnCapture(r: {
    /**
     * @summary 截屏/录屏的表现
     */
    visualEffect: 'none' | 'hidden';
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 执行结果
       */
      success: true;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 执行结果
             */
            success: true;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 执行结果
     */
    success: true;
  }>;
  /**
   * @summary 接口设置 wifiList 中 AP 的相关信息
   */
  export function setWifiList(r: {
    /**
     * @summary 提供预设的 Wifi 信息列表
     */
    wifiList: ISetWifiListWifiList[];
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
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
          },
    ): void;
  }): Promise<{
    success: true;
  }>;
  /**
   * @summary 显示操作菜单
   * @see https://opendocs.alipay.com/mini/api/hr092g
   */
  export function showActionSheet(r: {
    /**
     * @summary 菜单标题
     */
    title?: string;
    /**
     * @summary （`iOS 特殊处理`）指定按钮的索引号，从 `0` 开始。使用场景：需要删除或清除数据等类似场景，默认为红色
     */
    destructiveBtnIndex?: number;
    /**
     * @summary 需飘红选项的数组
     */
    badges?: IActionSheetBadges[];
    /**
     * @summary 菜单按钮文字数组
     */
    items: string[];
    /**
     * @summary 取消按钮文案。注：`Android` 平台此字段无效，不会显示取消按钮
     * @default "取消"
     */
    cancelButtonText?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 返回用户传入的 `items` 内被选中的索引，从 `0` 开始, 取消选择时，返回 `-1`
       */
      index: number;
      success: true;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 返回用户传入的 `items` 内被选中的索引，从 `0` 开始, 取消选择时，返回 `-1`
             */
            index: number;
            success: true;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 返回用户传入的 `items` 内被选中的索引，从 `0` 开始, 取消选择时，返回 `-1`
     */
    index: number;
    success: true;
  }>;
  /**
   * @summary 显示开启权限引导对话框
   * @description
   * - 权限引导的核心是引导而非权限判断，调用时机应该在业务方确认所需权限被限制的时候
   * - 权限引导弹框受疲劳度等因素控制
   * @see https://opendocs.alipay.com/mini/api/show-auth-guide
   */
  export function showAuthGuide(r: {
    /**
     * @summary 引导的权限标识，用于标识该权限类型(如 地理位置信息)。
     */
    authType: `${EShowAuthGuideAuthType}`;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { shown: boolean }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            shown: boolean;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    shown: boolean;
  }>;
  /**
   * @summary 显示蓝牙统一授权/开关引导流程
   */
  export function showBLEPermissionGuide(r?: {
    /**
     * @summary 蓝牙首次使用，业务提示弹窗标题（仅iOS，不配置则不会弹窗）
     */
    firstTipTitle?: string;
    /**
     * @summary 蓝牙首次使用，业务提示弹窗内容（仅iOS，不配置则不会弹窗）
     */
    firstTipsMessage?: string;
    /**
     * @summary 授权蓝牙，业务提示弹窗标题（仅iOS，不配置则不会弹窗）
     */
    authTipsTitle?: string;
    /**
     * @summary 授权蓝牙，业务提示弹窗内容（仅iOS，不配置则不会弹窗）
     */
    authTipsMessage?: string;
    /**
     * @summary 授权蓝牙，业务提示弹窗按钮标题（仅iOS，不配置则不会弹窗）
     */
    authTipsButton?: string;
    /**
     * @summary 开启蓝牙，业务提示弹窗标题
     */
    openTipsTitle?: string;
    /**
     * @summary 开启蓝牙，业务提示弹窗内容
     */
    openTipsMessage?: string;
    /**
     * @summary 开启蓝牙，业务提示弹窗按钮标题
     */
    openTipsButton?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 蓝牙授权向导接口调用成功
       */
      success: boolean;
      /**
       * @summary 错误吗
       */
      error: string;
      /**
       * @summary 错误信息
       */
      errorMessage: string;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 蓝牙授权向导接口调用成功
             */
            success: boolean;
            /**
             * @summary 错误吗
             */
            error: string;
            /**
             * @summary 错误信息
             */
            errorMessage: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 蓝牙授权向导接口调用成功
     */
    success: boolean;
    /**
     * @summary 错误吗
     */
    error: string;
    /**
     * @summary 错误信息
     */
    errorMessage: string;
  }>;
  /**
   * @summary 显示加载提示的过渡效果
   * @description 可与 [my.hideLoading]() 配合使用
   * @see https://opendocs.alipay.com/mini/api/bm69kb
   */
  export function showLoading(r?: {
    /**
     * @summary 提示中的文字内容
     */
    content?: string;
    /**
     * @summary 延迟显示，单位为毫秒（ms）
     * @description 如果在此时间之前调用了 [my.hideLoading]() 则不会显示。
     * @default 0
     */
    delay?: number;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 在当前页面显示导航条的加载动画
   * @see https://opendocs.alipay.com/mini/api/lydg2a
   */
  export function showNavigationBarLoading(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 手动唤起分享面板
   * @description 此时 `Page.onShareAppMessage` 入参中 `from` 的值为 `code`
   * @see https://opendocs.alipay.com/mini/api/omg2ye
   */
  export function showSharePanel(): void;
  /**
   * @summary 显示 TabBar
   * @see https://opendocs.alipay.com/mini/api/dpq5dh
   */
  export function showTabBar(r?: {
    /**
     * @summary 是否需要动画效果，默认为无动画效果。
     * @default false
     */
    animation?: boolean;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 显示 TabBar 某一项的右上角的红点
   * @see https://opendocs.alipay.com/mini/api/dquxiq
   */
  export function showTabBarRedDot(r: {
    /**
     * @summary 标签页的项数序号，从左边开始计数。
     */
    index: number;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 显示弱提示
   * @description 在到达设定的显示时间后，会自动消失
   * @see https://opendocs.alipay.com/mini/api/fhur8f
   */
  export function showToast(r?: {
    /**
     * @summary 文字内容
     */
    content?: string;
    /**
     * @summary 提示类型
     * @default "none"
     */
    type?: 'none' | 'success' | 'fail' | 'exception' | 'loading';
    /**
     * @summary 显示时长，单位为 ms
     * @description - 安卓10.1.2以下版本中，duration 显示时长实际只支持 2000/3500 两种，小于或等于2000的相当于2000, 大于2000的相当于3500
     * @default 3000
     */
    duration?: number;
    /**
     * @summary 延时弹出提示，单位为 ms
     */
    delay?: number;
    /**
     * @summary 弱提示弹出时的 X 轴偏移
     * @native 10.0.15
     */
    xOffset?: number;
    /**
     * @summary 弱提示弹出时的 Y 轴偏移
     * @native 10.0.15
     */
    yOffset?: number;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 开始监听加速度数据
   */
  export function startAccelerometer(r?: {
    /**
     * @default "normal"
     */
    interval?: 'game' | 'ui' | 'normal';
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
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
          },
    ): void;
  }): Promise<{
    success: true;
  }>;
  /**
   * @summary 唤起身份验证页面
   */
  export function startAPVerify(r: {
    /**
     * @summary 通过 `alipay.user.certify.open.initialize` 接口获取的 `url` 认证链接，需要服务端通过开放平台接口获取后，再给前端进行调用。
     */
    url: string;
    /**
     * @summary 通过 `alipay.user.certify.open.certify` 接口获取的 `certifyId`，需要服务端通过开放平台接口获取后，再给前端进行调用。
     */
    certifyId: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 认证流程结果状态码
       */
      resultStatus: string;
      result?: {
        /**
         * @summary 业务错误码
         */
        errorCode: string;
        /**
         * @summary 本次认证流水号
         */
        certifyId: string;
      };
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 认证流程结果状态码
             */
            resultStatus: string;
            result?: {
              /**
               * @summary 业务错误码
               */
              errorCode: string;
              /**
               * @summary 本次认证流水号
               */
              certifyId: string;
            };
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 认证流程结果状态码
     */
    resultStatus: string;
    result?: {
      /**
       * @summary 业务错误码
       */
      errorCode: string;
      /**
       * @summary 本次认证流水号
       */
      certifyId: string;
    };
  }>;
  /**
   * @summary 开始搜索附近的 iBeacon 设备
   * @see https://opendocs.alipay.com/mini/api/cy1g7k
   */
  export function startBeaconDiscovery(r: {
    /**
     * @summary 目标 iBeacon 设备广播的 UUIDs。
     * uuids[0]、uuids[1] 为目标 iBeacon 的 UUID，可从硬件厂商获取，如果为空，无法搜索到 iBeacon。
     * iBeacon 需要位置权限。iOS 11 及以后版本的手机，通过手机控制中心的快捷开关打开蓝牙，无法使用 iBeacon，需要在 设置 > 蓝牙 中开启蓝牙，方可使用。
     */
    uuids: string[];
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 开始搜寻附近的蓝牙外围设备
   * @description
   * - 搜索结果将在 [my.onBluetoothDeviceFound]() 事件中返回。
   * - 该操作比较耗费系统资源，请在搜索并连接到设备后调用 stop 方法停止搜索。
   * @see https://opendocs.alipay.com/mini/api/ksew43
   */
  export function startBluetoothDevicesDiscovery(r?: {
    includeClassic?: boolean;
    deviceIds?: string[];
    deviceNames?: string[];
    /**
     * @native 10.0.20
     */
    allowDuplicatesKey?: boolean;
    /**
     * @native 10.0.20
     */
    interval?: number;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 开始监听罗盘数据
   */
  export function startCompass(r?: {
    /**
     * @default "normal"
     */
    interval?: 'game' | 'ui' | 'normal';
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
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
          },
    ): void;
  }): Promise<{
    success: true;
  }>;
  /**
   * @summary 开始监听陀螺仪数据
   */
  export function startGyroscope(r?: {
    /**
     * @default "normal"
     */
    interval?: 'game' | 'ui' | 'normal';
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
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
          },
    ): void;
  }): Promise<{
    success: true;
  }>;
  /**
   * @summary 触发页面下拉刷新
   * @description
   * 调用 [my.startPullDownRefresh]() 后触发下拉刷新动画，效果与用户手动下拉刷新一致（会触发 [my.onPullDownRefresh]() 监听方法）。
   * 当处理完数据刷新后，[my.stopPullDownRefresh]() 可停止当前页面的下拉刷新
   * @see https://opendocs.alipay.com/mini/api/ui-pulldown
   */
  export function startPullDownRefresh(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
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
          },
    ): void;
  }): Promise<{
    success: true;
  }>;
  /**
   * @summary 初始化 Wi-Fi 模块
   */
  export function startWifi(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
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
          },
    ): void;
  }): Promise<{
    success: true;
  }>;
  /**
   * @summary 停止监听加速度数据
   */
  export function stopAccelerometer(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
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
          },
    ): void;
  }): Promise<{
    success: true;
  }>;
  /**
   * @summary 停止搜索附近的 iBeacon 设备
   * @see https://opendocs.alipay.com/mini/api/yp5owa
   */
  export function stopBeaconDiscovery(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 停止搜寻附近的蓝牙外围设备
   * @see https://opendocs.alipay.com/mini/api/syb4mi
   */
  export function stopBluetoothDevicesDiscovery(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 停止监听罗盘数据
   */
  export function stopCompass(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
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
          },
    ): void;
  }): Promise<{
    success: true;
  }>;
  /**
   * @summary 停止监听陀螺仪数据
   */
  export function stopGyroscope(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
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
          },
    ): void;
  }): Promise<{
    success: true;
  }>;
  /**
   * @summary 结束当前页面下拉刷新
   * @description
   * 调用 my.startPullDownRefresh 后触发下拉刷新动画，效果与用户手动下拉刷新一致（会触发 onPullDownRefresh 监听方法）。
   * 当处理完数据刷新后，my.stopPullDownRefresh 可停止当前页面的下拉刷新。
   * @see https://opendocs.alipay.com/mini/api/pmhkbb
   */
  export function stopPullDownRefresh(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 关闭 Wi-Fi 模块
   */
  export function stopWifi(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
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
          },
    ): void;
  }): Promise<{
    success: true;
  }>;
  /**
   * @summary 跳转到指定 Tab 页面，并关闭其他所有非 Tab 页面
   * @description
   * 如果小程序是一个多标签（tab）应用，即客户端窗口的底部栏可以切换页面，那么可以通过标签页配置项指定标签栏的表现形式，以及标签切换时显示的对应页面。
   * 通过页面跳转 [my.navigateTo]() 或者页面重定向 [my.redirectTo]() 所到达的页面，即使是定义在标签页配置中的页面，也不会显示底部的标签栏。标签页的第一个页面必须是首页。
   * @see https://opendocs.alipay.com/mini/api/ui-tabbar
   */
  export function switchTab(r: {
    /**
     * @summary 跳转的特定 tab 的路径
     * @description 目标路径必须为应用内 tabbar 的，且路径后不能带参数
     */
    url: string;
    /**
     * @summary 指定 url 为相对路径的绝对路径基准
     */
    resolvedPath?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 发起支付
   * @see https://opendocs.alipay.com/mini/api/openapi-pay
   */
  export function tradePay(r?: {
    /**
     * @summary 支付宝交易号，
     * @description 用于 [小程序支付](https://opendocs.alipay.com/mini/introduce/pay), 注意参数有大小写区分。
     */
    tradeNO?: string;
    /**
     * @summary 支付参数
     * @description 用于 [支付宝预授权](https://opendocs.alipay.com/mini/api/tmz0kq), 完整的支付参数拼接成的字符串，从服务端获取。
     */
    orderStr?: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 支付结果码
       */
      resultCode: string;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 支付结果码
             */
            resultCode: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 支付结果码
     */
    resultCode: string;
  }>;
  /**
   * @summary 取消对指定 SSID 的信任
   * @description 对于需要 Portal 认证的 WIFI，继续弹出 portal 认证页面。
   */
  export function unregisterSSID(r: {
    /**
     * @summary Wifi 设备 SSID。
     */
    SSID: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 上传本地资源到开发者服务器
   * @see https://opendocs.alipay.com/mini/api/kmq4hc
   */
  export function uploadFile(r: {
    /**
     * @summary 开发者服务器地址。
     */
    url: string;
    /**
     * @summary 要上传文件资源的本地定位符。
     */
    filePath: string;
    /**
     * @summary 文件名，即对应的 key，开发者在服务器端通过这个 key 可以获取到文件二进制内容。
     */
    fileName: string;
    /**
     * @summary 文件类型支持图片、视频、音频（image / video / audio）。
     */
    fileType: string;
    /**
     * @summary 是否隐藏 loading 图。
     * @default false
     */
    hideLoading?: boolean;
    /**
     * @summary HTTP 请求 Header。
     */
    header?: Record<string, unknown>;
    headers?: Record<string, unknown>;
    /**
     * @summary HTTP 请求中其他额外的 form 数据。
     */
    formData?: Record<string, unknown>;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 服务器返回的数据。
       */
      data: string;
      /**
       * @summary HTTP 状态码。
       */
      statusCode: number;
      /**
       * @summary 服务器返回的 Header。
       */
      header: Record<string, unknown>;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(
      err:
        | {
            error?: number;
            errorMessage?: string;
          }
        | {
            error: 11;
            errorMessage?: string;
          },
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 服务器返回的数据。
             */
            data: string;
            /**
             * @summary HTTP 状态码。
             */
            statusCode: number;
            /**
             * @summary 服务器返回的 Header。
             */
            header: Record<string, unknown>;
          }
        | (
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 11;
                errorMessage?: string;
              }
          ),
    ): void;
  }): Promise<{
    /**
     * @summary 服务器返回的数据。
     */
    data: string;
    /**
     * @summary HTTP 状态码。
     */
    statusCode: number;
    /**
     * @summary 服务器返回的 Header。
     */
    header: Record<string, unknown>;
  }> &
    UploadTask;
  /**
   * @summary 触发设备震动
   * @see https://opendocs.alipay.com/mini/api/vibrate
   */
  export function vibrate(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: 1 }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            success: 1;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    success: 1;
  }>;
  /**
   * @summary 触发设备长时间震动
   * @description 400ms
   * @see https://opendocs.alipay.com/mini/api/ucm2he
   */
  export function vibrateLong(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: 1 }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            success: 1;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    success: 1;
  }>;
  /**
   * @summary 触发设备短时间震动
   * @see https://opendocs.alipay.com/mini/api/ad6c10
   */
  export function vibrateShort(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: 1 }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            success: 1;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    success: 1;
  }>;
  /**
   * @summary 摇一摇功能
   * @description 每次调用 API，在摇一摇手机后触发回调，如需再次监听需要再次调用这个 API
   * @see https://opendocs.alipay.com/mini/api/shake
   */
  export function watchShake(r?: {
    monitorAccelerometer?: boolean;
    monitorCompass?: boolean;
    monitorGyroscope?: boolean;
    interval?: number;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: { success: true }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
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
          },
    ): void;
  }): Promise<{
    success: true;
  }>;
  /**
   * @summary 向蓝牙低功耗设备特征值中写入数据
   * @see https://opendocs.alipay.com/mini/api/vmp2r4
   */
  export function writeBLECharacteristicValue(r: {
    /**
     * @summary 蓝牙设备 ID
     */
    deviceId: string;
    /**
     * @summary 蓝牙特征值对应 service 的 UUID
     */
    serviceId: string;
    /**
     * @summary 蓝牙特征值的 UUID
     */
    characteristicId: string;
    /**
     * @summary 蓝牙设备特征值对应的值，为 16 进制字符串，限制在 20 字节内
     */
    value: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 错误码
       */
      errorCode: string;
      /**
       * @summary 错误信息
       */
      errorMessage: string;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 错误码
             */
            errorCode: string;
            /**
             * @summary 错误信息
             */
            errorMessage: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 错误码
     */
    errorCode: string;
    /**
     * @summary 错误信息
     */
    errorMessage: string;
  }>;
  export interface RDSContext {}
  export interface FileSystemManager {
    /**
     * @summary 判断文件、目录是否存在
     */
    access(
      r: IAccessRequest & {
        /**
         * 接口调用成功的回调函数
         * @param data 成功返回的数据
         */
        success?(data: { success: true }): void;
        /**
         * 接口调用失败的回调函数
         * @param err 错误信息
         */
        fail?(
          err:
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 2;
                errorMessage: '接口参数无效';
              }
            | {
                error: 10024;
                errorMessage: '指定的路径没有读权限';
              }
            | {
                error: 10022;
                errorMessage: '文件/目录不存在';
              },
        ): void;
        /**
         * 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(
          arg:
            | {
                success: true;
              }
            | (
                | {
                    error?: number;
                    errorMessage?: string;
                  }
                | {
                    error: 2;
                    errorMessage: '接口参数无效';
                  }
                | {
                    error: 10024;
                    errorMessage: '指定的路径没有读权限';
                  }
                | {
                    error: 10022;
                    errorMessage: '文件/目录不存在';
                  }
              ),
        ): void;
      },
    ): Promise<{
      success: true;
    }>;
    /**
     * @summary 同步判断文件、目录是否存在
     */
    accessSync(request: IAccessRequest): void;
    /**
     * @summary 同步判断文件、目录是否存在
     */
    accessSync(path: string): void;
    /**
     * @summary 在文件结尾追加内容
     */
    appendFile(
      r: IAppendFileRequest & {
        /**
         * 接口调用成功的回调函数
         * @param data 成功返回的数据
         */
        success?(data: { success: true }): void;
        /**
         * 接口调用失败的回调函数
         * @param err 错误信息
         */
        fail?(
          err:
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 2;
                errorMessage: '接口参数无效';
              }
            | {
                error: 10022;
                errorMessage: '指定文件不存在';
              }
            | {
                error: 10024;
                errorMessage: '指定的路径没有写权限';
              }
            | {
                error: 10025;
                errorMessage: '指定路径是一个已经存在的目录';
              }
            | {
                error: 3;
                errorMessage: '文件写入失败';
              },
        ): void;
        /**
         * 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(
          arg:
            | {
                success: true;
              }
            | (
                | {
                    error?: number;
                    errorMessage?: string;
                  }
                | {
                    error: 2;
                    errorMessage: '接口参数无效';
                  }
                | {
                    error: 10022;
                    errorMessage: '指定文件不存在';
                  }
                | {
                    error: 10024;
                    errorMessage: '指定的路径没有写权限';
                  }
                | {
                    error: 10025;
                    errorMessage: '指定路径是一个已经存在的目录';
                  }
                | {
                    error: 3;
                    errorMessage: '文件写入失败';
                  }
              ),
        ): void;
      },
    ): Promise<{
      success: true;
    }>;
    /**
     * @summary 同步在文件结尾追加内容
     */
    appendFileSync(request: IAppendFileRequest): void;
    /**
     * @summary 同步在文件结尾追加内容
     */
    appendFileSync(filePath: string, data: string | ArrayBuffer, encoding?: `${EFileSystemEncoding}`): void;
    /**
     * @summary 复制文件
     * @description 支持复制临时文件、缓存文件、用户文件到本地用户文件位置
     */
    copyFile(
      r: ICopyFileRequest & {
        /**
         * 接口调用成功的回调函数
         * @param data 成功返回的数据
         */
        success?(data: { success: true }): void;
        /**
         * 接口调用失败的回调函数
         * @param err 错误信息
         */
        fail?(
          err:
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 2;
                errorMessage: '接口参数无效';
              }
            | {
                error: 10024;
                errorMessage: '指定的路径没有读权限';
              }
            | {
                error: 10024;
                errorMessage: '指定的路径没有写权限';
              }
            | {
                error: 10022;
                errorMessage: '源文件不存在';
              }
            | {
                error: 10023;
                errorMessage: '指定路径是一个已经存在的目录';
              },
        ): void;
        /**
         * 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(
          arg:
            | {
                success: true;
              }
            | (
                | {
                    error?: number;
                    errorMessage?: string;
                  }
                | {
                    error: 2;
                    errorMessage: '接口参数无效';
                  }
                | {
                    error: 10024;
                    errorMessage: '指定的路径没有读权限';
                  }
                | {
                    error: 10024;
                    errorMessage: '指定的路径没有写权限';
                  }
                | {
                    error: 10022;
                    errorMessage: '源文件不存在';
                  }
                | {
                    error: 10023;
                    errorMessage: '指定路径是一个已经存在的目录';
                  }
              ),
        ): void;
      },
    ): Promise<{
      success: true;
    }>;
    /**
     * @summary 同步复制文件
     */
    copyFileSync(request: ICopyFileRequest): void;
    /**
     * @summary 同步复制文件
     */
    copyFileSync(srcPath: string, destPath: string): void;
    /**
     * @summary 获取该小程序下的本地临时文件或本地缓存文件信息
     */
    getFileInfo(
      r: IGetFileInfoRequest & {
        /**
         * 接口调用成功的回调函数
         * @param data 成功返回的数据
         */
        success?(data: IGetFileInfoResponse): void;
        /**
         * 接口调用失败的回调函数
         * @param err 错误信息
         */
        fail?(
          err:
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 2;
                errorMessage: '接口参数无效';
              }
            | {
                error: 12;
                errorMessage: '文件不存在';
              }
            | {
                error: 16;
                errorMessage: 'digestAlgorithm参数只支持MD5和sha1';
              }
            | {
                error: 17;
                errorMessage: '计算文件摘要信息错误';
              }
            | {
                error: 10024;
                errorMessage: '指定的路径没有读权限';
              },
        ): void;
        /**
         * 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(
          arg:
            | IGetFileInfoResponse
            | (
                | {
                    error?: number;
                    errorMessage?: string;
                  }
                | {
                    error: 2;
                    errorMessage: '接口参数无效';
                  }
                | {
                    error: 12;
                    errorMessage: '文件不存在';
                  }
                | {
                    error: 16;
                    errorMessage: 'digestAlgorithm参数只支持MD5和sha1';
                  }
                | {
                    error: 17;
                    errorMessage: '计算文件摘要信息错误';
                  }
                | {
                    error: 10024;
                    errorMessage: '指定的路径没有读权限';
                  }
              ),
        ): void;
      },
    ): Promise<IGetFileInfoResponse>;
    /**
     * @summary 同步获取该小程序下的本地临时文件或本地缓存文件信息
     */
    getFileInfoSync(request: IGetFileInfoRequest): IGetFileInfoResponse;
    /**
     * @summary 同步获取该小程序下的本地临时文件或本地缓存文件信息
     */
    getFileInfoSync(filePath: string, digestAlgorithm?: 'md5' | 'sha1'): IGetFileInfoResponse;
    /**
     * @summary 获取该小程序下已保存的本地缓存文件列表
     */
    getSavedFileList(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: IGetSavedFileListResponse): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | IGetSavedFileListResponse
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<IGetSavedFileListResponse>;
    /**
     * @summary 同步获取该小程序下已保存的本地缓存文件列表
     */
    getSavedFileListSync(): IGetSavedFileListResponse;
    /**
     * @summary 创建文件系统目录
     */
    mkdir(
      r: IMkdirRequest & {
        /**
         * 接口调用成功的回调函数
         * @param data 成功返回的数据
         */
        success?(data: {}): void;
        /**
         * 接口调用失败的回调函数
         * @param err 错误信息
         */
        fail?(
          err:
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 2;
                errorMessage: '接口参数无效';
              }
            | {
                error: 10024;
                errorMessage: '指定的路径没有写权限';
              }
            | {
                error: 10025;
                errorMessage: '有同名文件或目录';
              }
            | {
                error: 10022;
                errorMessage: '上级目录不存在';
              },
        ): void;
        /**
         * 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(
          arg:
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 2;
                errorMessage: '接口参数无效';
              }
            | {
                error: 10024;
                errorMessage: '指定的路径没有写权限';
              }
            | {
                error: 10025;
                errorMessage: '有同名文件或目录';
              }
            | {
                error: 10022;
                errorMessage: '上级目录不存在';
              },
        ): void;
      },
    ): Promise<void>;
    /**
     * @summary 同步创建文件系统目录
     */
    mkdirSync(request: IMkdirRequest): void;
    /**
     * @summary 同步创建文件系统目录
     */
    mkdirSync(dirPath: string, recursive?: boolean): void;
    /**
     * @summary 读取目录内文件列表
     */
    readdir(
      r: IReaddirRequest & {
        /**
         * 接口调用成功的回调函数
         * @param data 成功返回的数据
         */
        success?(data: IReaddirResponse): void;
        /**
         * 接口调用失败的回调函数
         * @param err 错误信息
         */
        fail?(
          err:
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 2;
                errorMessage: '接口参数无效';
              }
            | {
                error: 10024;
                errorMessage: '指定的路径没有写权限';
              }
            | {
                error: 10024;
                errorMessage: '指定的路径没有读权限';
              }
            | {
                error: 10022;
                errorMessage: '目录不存在';
              },
        ): void;
        /**
         * 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(
          arg:
            | IReaddirResponse
            | (
                | {
                    error?: number;
                    errorMessage?: string;
                  }
                | {
                    error: 2;
                    errorMessage: '接口参数无效';
                  }
                | {
                    error: 10024;
                    errorMessage: '指定的路径没有写权限';
                  }
                | {
                    error: 10024;
                    errorMessage: '指定的路径没有读权限';
                  }
                | {
                    error: 10022;
                    errorMessage: '目录不存在';
                  }
              ),
        ): void;
      },
    ): Promise<IReaddirResponse>;
    /**
     * @summary 同步读取目录内文件列表
     */
    readdirSync(request: IReaddirRequest): IReaddirResponse;
    /**
     * @summary 同步读取目录内文件列表
     */
    readdirSync(dirPath: string): IReaddirResponse;
    /**
     * @summary 读取本地文件内容
     */
    readFile(
      r: IReadFileRequest & {
        /**
         * 接口调用成功的回调函数
         * @param data 成功返回的数据
         */
        success?(data: IReadFileResponse): void;
        /**
         * 接口调用失败的回调函数
         * @param err 错误信息
         */
        fail?(
          err:
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 2;
                errorMessage: '接口参数无效';
              }
            | {
                error: 10022;
                errorMessage: '文件/目录不存在';
              }
            | {
                error: 10024;
                errorMessage: '指定的路径没有读权限';
              }
            | {
                error: 3;
                errorMessage: '未知错误';
              },
        ): void;
        /**
         * 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(
          arg:
            | IReadFileResponse
            | (
                | {
                    error?: number;
                    errorMessage?: string;
                  }
                | {
                    error: 2;
                    errorMessage: '接口参数无效';
                  }
                | {
                    error: 10022;
                    errorMessage: '文件/目录不存在';
                  }
                | {
                    error: 10024;
                    errorMessage: '指定的路径没有读权限';
                  }
                | {
                    error: 3;
                    errorMessage: '未知错误';
                  }
              ),
        ): void;
      },
    ): Promise<IReadFileResponse>;
    /**
     * @summary 同步读取本地文件内容
     */
    readFileSync(request: IReadFileRequest): IReadFileResponse;
    /**
     * @summary 同步读取本地文件内容
     */
    readFileSync(filePath: string, encoding?: `${EFileSystemEncoding}`): IReadFileResponse;
    /**
     * @summary 删除该小程序下已保存的本地缓存文件
     */
    removeSavedFile(
      r: IRemoveSavedFileRequest & {
        /**
         * 接口调用成功的回调函数
         * @param data 成功返回的数据
         */
        success?(data: { success: true }): void;
        /**
         * 接口调用失败的回调函数
         * @param err 错误信息
         */
        fail?(
          err:
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 2;
                errorMessage: '无效入参';
              }
            | {
                error: 10022;
                errorMessage: '文件不存在';
              }
            | {
                error: 10024;
                errorMessage: '指定的路径没有写权限';
              }
            | {
                error: 15;
                errorMessage: '删除文件失败';
              },
        ): void;
        /**
         * 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(
          arg:
            | {
                success: true;
              }
            | (
                | {
                    error?: number;
                    errorMessage?: string;
                  }
                | {
                    error: 2;
                    errorMessage: '无效入参';
                  }
                | {
                    error: 10022;
                    errorMessage: '文件不存在';
                  }
                | {
                    error: 10024;
                    errorMessage: '指定的路径没有写权限';
                  }
                | {
                    error: 15;
                    errorMessage: '删除文件失败';
                  }
              ),
        ): void;
      },
    ): Promise<{
      success: true;
    }>;
    /**
     * @summary 同步删除该小程序下已保存的本地缓存文件
     */
    removeSavedFileSync(request: IRemoveSavedFileRequest): void;
    /**
     * @summary 同步删除该小程序下已保存的本地缓存文件
     */
    removeSavedFileSync(filePath: string): void;
    /**
     * @summary 重命名文件
     * @description 可以把文件从 oldPath 移动到 newPath。
     */
    rename(
      r: IRenameRequest & {
        /**
         * 接口调用成功的回调函数
         * @param data 成功返回的数据
         */
        success?(data: { success: true }): void;
        /**
         * 接口调用失败的回调函数
         * @param err 错误信息
         */
        fail?(
          err:
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 2;
                errorMessage: '接口参数无效';
              }
            | {
                error: 10022;
                errorMessage: '源文件不存在';
              }
            | {
                error: 10024;
                errorMessage: '指定源文件或目标文件没有写权限';
              }
            | {
                error: 10025;
                errorMessage: '文件或目录已存在';
              },
        ): void;
        /**
         * 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(
          arg:
            | {
                success: true;
              }
            | (
                | {
                    error?: number;
                    errorMessage?: string;
                  }
                | {
                    error: 2;
                    errorMessage: '接口参数无效';
                  }
                | {
                    error: 10022;
                    errorMessage: '源文件不存在';
                  }
                | {
                    error: 10024;
                    errorMessage: '指定源文件或目标文件没有写权限';
                  }
                | {
                    error: 10025;
                    errorMessage: '文件或目录已存在';
                  }
              ),
        ): void;
      },
    ): Promise<{
      success: true;
    }>;
    /**
     * @summary 同步重命名文件
     * @description 可以把文件从 oldPath 移动到 newPath。
     */
    renameSync(request: IRenameRequest): void;
    /**
     * @summary 同步重命名文件
     * @description 可以把文件从 oldPath 移动到 newPath。
     */
    renameSync(oldPath: string, newPath: string): void;
    /**
     * @summary 删除目录
     */
    rmdir(
      r: IRmdirRequest & {
        /**
         * 接口调用成功的回调函数
         * @param data 成功返回的数据
         */
        success?(data: { success: true }): void;
        /**
         * 接口调用失败的回调函数
         * @param err 错误信息
         */
        fail?(
          err:
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 2;
                errorMessage: '接口参数无效';
              }
            | {
                error: 10024;
                errorMessage: '指定的路径没有写权限';
              }
            | {
                error: 10025;
                errorMessage: '有同名文件或目录';
              }
            | {
                error: 10022;
                errorMessage: '目录不存在';
              }
            | {
                error: 10027;
                errorMessage: '目录不为空';
              },
        ): void;
        /**
         * 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(
          arg:
            | {
                success: true;
              }
            | (
                | {
                    error?: number;
                    errorMessage?: string;
                  }
                | {
                    error: 2;
                    errorMessage: '接口参数无效';
                  }
                | {
                    error: 10024;
                    errorMessage: '指定的路径没有写权限';
                  }
                | {
                    error: 10025;
                    errorMessage: '有同名文件或目录';
                  }
                | {
                    error: 10022;
                    errorMessage: '目录不存在';
                  }
                | {
                    error: 10027;
                    errorMessage: '目录不为空';
                  }
              ),
        ): void;
      },
    ): Promise<{
      success: true;
    }>;
    /**
     * @summary 同步删除目录
     */
    rmdirSync(request: IRmdirRequest): void;
    /**
     * @summary 同步删除目录
     */
    rmdirSync(dirPath: string, recursive?: boolean): void;
    /**
     * @summary 保存临时文件到本地
     * @description 此接口会移动临时文件，因此调用成功后，tempFilePath 将不可用
     */
    saveFile(
      r: ISaveFileRequest & {
        /**
         * 接口调用成功的回调函数
         * @param data 成功返回的数据
         */
        success?(data: ISaveFileResponse): void;
        /**
         * 接口调用失败的回调函数
         * @param err 错误信息
         */
        fail?(
          err:
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 2;
                errorMessage: '接口参数无效';
              }
            | {
                error: 10022;
                errorMessage: '指定的路径找不到文件';
              }
            | {
                error: 10024;
                errorMessage: '指定的路径没有写权限';
              }
            | {
                error: 3;
                errorMessage: '保存文件失败';
              },
        ): void;
        /**
         * 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(
          arg:
            | ISaveFileResponse
            | (
                | {
                    error?: number;
                    errorMessage?: string;
                  }
                | {
                    error: 2;
                    errorMessage: '接口参数无效';
                  }
                | {
                    error: 10022;
                    errorMessage: '指定的路径找不到文件';
                  }
                | {
                    error: 10024;
                    errorMessage: '指定的路径没有写权限';
                  }
                | {
                    error: 3;
                    errorMessage: '保存文件失败';
                  }
              ),
        ): void;
      },
    ): Promise<ISaveFileResponse>;
    /**
     * @summary 同步保存临时文件到本地
     * @description 此接口会移动临时文件，因此调用成功后，tempFilePath 将不可用
     */
    saveFileSync(request: ISaveFileRequest): ISaveFileResponse;
    /**
     * @summary 同步保存临时文件到本地
     * @description 此接口会移动临时文件，因此调用成功后，tempFilePath 将不可用
     */
    saveFileSync(tempFilePath: string, filePath?: boolean): ISaveFileResponse;
    /**
     * @summary 获取文件信息
     */
    stat(
      r: IStatRequest & {
        /**
         * 接口调用成功的回调函数
         * @param data 成功返回的数据
         */
        success?(data: IStatResponse): void;
        /**
         * 接口调用失败的回调函数
         * @param err 错误信息
         */
        fail?(
          err:
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 10022;
                errorMessage: '文件不存在';
              }
            | {
                error: 10024;
                errorMessage: '指定的路径没有读权限';
              }
            | {
                error: 3;
                errorMessage: '未知错误';
              },
        ): void;
        /**
         * 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(
          arg:
            | IStatResponse
            | (
                | {
                    error?: number;
                    errorMessage?: string;
                  }
                | {
                    error: 10022;
                    errorMessage: '文件不存在';
                  }
                | {
                    error: 10024;
                    errorMessage: '指定的路径没有读权限';
                  }
                | {
                    error: 3;
                    errorMessage: '未知错误';
                  }
              ),
        ): void;
      },
    ): Promise<IStatResponse>;
    /**
     * @summary 同步获取文件信息
     */
    statSync(request: IStatRequest): IStatResponse;
    /**
     * @summary 同步获取文件信息
     */
    statSync(path: string, recursive?: boolean): IStatResponse;
    /**
     * @summary 删除文件
     */
    unlink(
      r: IUnlinkRequest & {
        /**
         * 接口调用成功的回调函数
         * @param data 成功返回的数据
         */
        success?(data: { success: true }): void;
        /**
         * 接口调用失败的回调函数
         * @param err 错误信息
         */
        fail?(
          err:
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 2;
                errorMessage: '接口参数无效';
              }
            | {
                error: 10022;
                errorMessage: '文件不存在';
              }
            | {
                error: 10023;
                errorMessage: '传入的路径是一个目录';
              }
            | {
                error: 10024;
                errorMessage: '指定的路径没有删除权限';
              },
        ): void;
        /**
         * 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(
          arg:
            | {
                success: true;
              }
            | (
                | {
                    error?: number;
                    errorMessage?: string;
                  }
                | {
                    error: 2;
                    errorMessage: '接口参数无效';
                  }
                | {
                    error: 10022;
                    errorMessage: '文件不存在';
                  }
                | {
                    error: 10023;
                    errorMessage: '传入的路径是一个目录';
                  }
                | {
                    error: 10024;
                    errorMessage: '指定的路径没有删除权限';
                  }
              ),
        ): void;
      },
    ): Promise<{
      success: true;
    }>;
    /**
     * @summary 同步删除文件
     */
    unlinkSync(request: IUnlinkRequest): void;
    /**
     * @summary 同步删除文件
     */
    unlinkSync(filePath: string): void;
    /**
     * @summary 解压文件
     */
    unzip(
      r: IUnzipRequest & {
        /**
         * 接口调用成功的回调函数
         * @param data 成功返回的数据
         */
        success?(data: { success: true }): void;
        /**
         * 接口调用失败的回调函数
         * @param err 错误信息
         */
        fail?(
          err:
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 2;
                errorMessage: '接口参数无效';
              }
            | {
                error: 10022;
                errorMessage: '源文件不存在';
              }
            | {
                error: 10022;
                errorMessage: '上层目录不存在';
              }
            | {
                error: 10023;
                errorMessage: '传入的路径是一个目录';
              }
            | {
                error: 10024;
                errorMessage: '指定的路径没有权限';
              }
            | {
                error: 10024;
                errorMessage: '指定的源文件路径没有读权限';
              }
            | {
                error: 10024;
                errorMessage: '指定的目标文件路径没有写权限';
              }
            | {
                error: 3;
                errorMessage: '解压失败';
              },
        ): void;
        /**
         * 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(
          arg:
            | {
                success: true;
              }
            | (
                | {
                    error?: number;
                    errorMessage?: string;
                  }
                | {
                    error: 2;
                    errorMessage: '接口参数无效';
                  }
                | {
                    error: 10022;
                    errorMessage: '源文件不存在';
                  }
                | {
                    error: 10022;
                    errorMessage: '上层目录不存在';
                  }
                | {
                    error: 10023;
                    errorMessage: '传入的路径是一个目录';
                  }
                | {
                    error: 10024;
                    errorMessage: '指定的路径没有权限';
                  }
                | {
                    error: 10024;
                    errorMessage: '指定的源文件路径没有读权限';
                  }
                | {
                    error: 10024;
                    errorMessage: '指定的目标文件路径没有写权限';
                  }
                | {
                    error: 3;
                    errorMessage: '解压失败';
                  }
              ),
        ): void;
      },
    ): Promise<{
      success: true;
    }>;
    /**
     * @summary 用于写文件
     */
    writeFile(
      r: IWriteFileRequest & {
        /**
         * 接口调用成功的回调函数
         * @param data 成功返回的数据
         */
        success?(data: { success: true }): void;
        /**
         * 接口调用失败的回调函数
         * @param err 错误信息
         */
        fail?(
          err:
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 2;
                errorMessage: '接口参数无效';
              }
            | {
                error: 10024;
                errorMessage: '指定的路径没有写权限';
              }
            | {
                error: 10024;
                errorMessage: '指定的路径没有写权限';
              }
            | {
                error: 3;
                errorMessage: '文件写入失败';
              }
            | {
                error: 10028;
                errorMessage: '单个文件超过 10M';
              }
            | {
                error: 10028;
                errorMessage: '文件夹超过 50M';
              },
        ): void;
        /**
         * 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(
          arg:
            | {
                success: true;
              }
            | (
                | {
                    error?: number;
                    errorMessage?: string;
                  }
                | {
                    error: 2;
                    errorMessage: '接口参数无效';
                  }
                | {
                    error: 10024;
                    errorMessage: '指定的路径没有写权限';
                  }
                | {
                    error: 10024;
                    errorMessage: '指定的路径没有写权限';
                  }
                | {
                    error: 3;
                    errorMessage: '文件写入失败';
                  }
                | {
                    error: 10028;
                    errorMessage: '单个文件超过 10M';
                  }
                | {
                    error: 10028;
                    errorMessage: '文件夹超过 50M';
                  }
              ),
        ): void;
      },
    ): Promise<{
      success: true;
    }>;
    /**
     * @summary 同步用于写文件
     */
    writeFileSync(request: IWriteFileRequest): void;
    /**
     * @summary 同步用于写文件
     */
    writeFileSync(filePath: string, data: string | ArrayBuffer, encoding?: `${EFileSystemEncoding}`): void;
    /**
     * @summary 压缩文件
     */
    zip(
      r: IZipRequest & {
        /**
         * 接口调用成功的回调函数
         * @param data 成功返回的数据
         */
        success?(data: { success: true }): void;
        /**
         * 接口调用失败的回调函数
         * @param err 错误信息
         */
        fail?(
          err:
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 2;
                errorMessage: '接口参数无效';
              }
            | {
                error: 10022;
                errorMessage: '源文件不存在';
              }
            | {
                error: 10022;
                errorMessage: '上层目录不存在';
              }
            | {
                error: 10022;
                errorMessage: '打包源文件为空';
              }
            | {
                error: 10024;
                errorMessage: '指定的路径没有权限';
              }
            | {
                error: 10024;
                errorMessage: '指定的源文件路径没有读权限';
              }
            | {
                error: 10024;
                errorMessage: '指定的目标文件路径没有写权限';
              }
            | {
                error: 3;
                errorMessage: '压缩失败';
              },
        ): void;
        /**
         * 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(
          arg:
            | {
                success: true;
              }
            | (
                | {
                    error?: number;
                    errorMessage?: string;
                  }
                | {
                    error: 2;
                    errorMessage: '接口参数无效';
                  }
                | {
                    error: 10022;
                    errorMessage: '源文件不存在';
                  }
                | {
                    error: 10022;
                    errorMessage: '上层目录不存在';
                  }
                | {
                    error: 10022;
                    errorMessage: '打包源文件为空';
                  }
                | {
                    error: 10024;
                    errorMessage: '指定的路径没有权限';
                  }
                | {
                    error: 10024;
                    errorMessage: '指定的源文件路径没有读权限';
                  }
                | {
                    error: 10024;
                    errorMessage: '指定的目标文件路径没有写权限';
                  }
                | {
                    error: 3;
                    errorMessage: '压缩失败';
                  }
              ),
        ): void;
      },
    ): Promise<{
      success: true;
    }>;
  }
  export interface NFCAdapter {
    /**
     * @summary 标准
     */
    readonly tech: {
      ndef: 'NDEF';
      nfcA: 'NFC-A';
      nfcB: 'NFC-B';
      isoDep: 'ISO-DEP';
      nfcF: 'NFC-F';
      nfcV: 'NFC-V';
      mifareClassic: 'MIFARE Classic';
      mifareUltralight: 'MIFARE Ultralight';
    };
    /**
     * @summary 获取 IsoDep 实例
     * @description 实例支持ISO-DEP (ISO 14443-4)标准的读写
     */
    getIsoDep(): NFCAdapter.IsoDep;
    /**
     * @summary 获取 MifareClassic 实例
     * @description 实例支持 MIFARE Classic 标签的读写
     */
    getMifareClassic(): NFCAdapter.MifareClassic;
    /**
     * @summary 获取 MifareUltralight 实例
     * @description 实例支持 MIFARE Ultralight 标签的读写
     */
    getMifareUltralight(): NFCAdapter.MifareUltralight;
    getNdef(): NFCAdapter.Ndef;
    /**
     * @summary 获取 NfcA 实例
     * @description 实例支持NFC-A (ISO 14443-3A)标准的读写
     */
    getNfcA(): NFCAdapter.NfcA;
    /**
     * @summary 获取 NfcB 实例
     * @description 实例支持 NFC-B (ISO 14443-3B)标准的读写
     */
    getNfcB(): NFCAdapter.NfcB;
    /**
     * @summary 获取 NfcF 实例
     * @description 实例支持 NFC-F (JIS 6319-4)标准的读写
     */
    getNfcF(): NFCAdapter.NfcF;
    /**
     * @summary 获取 NfcV 实例
     * @description 实例支持 NFC-V (ISO 15693)标准的读写
     */
    getNfcV(): NFCAdapter.NfcV;
    /**
     * @summary 取消监听 NFC Tag
     */
    offDiscovered(
      cb?: (arg: {
        data: {
          techs?: string[];
          messages?: string[];
        };
      }) => void,
    ): void;
    /**
     * @summary 监听 NFC Tag
     */
    onDiscovered(
      cb: (arg: {
        data: {
          techs?: string[];
          messages?: string[];
        };
      }) => void,
    ): void;
    /**
     * @summary 开始扫描 NFC
     */
    startDiscovery(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(
        err:
          | {
              error?: number;
              errorMessage?: string;
            }
          | {
              error: 61000;
              errorMessage: 'nfc not supported';
            }
          | {
              error: 61001;
              errorMessage: 'nfc is closed';
            }
          | {
              error: 61002;
              errorMessage: 'Tech already connected';
            }
          | {
              error: 61003;
              errorMessage: 'Tech has not connected';
            }
          | {
              error: 61004;
              errorMessage: 'NFC discovery already started';
            }
          | {
              error: 61005;
              errorMessage: 'NFC discovery has not started';
            }
          | {
              error: 61006;
              errorMessage: 'invalid tech';
            }
          | {
              error: 61007;
              errorMessage: 'system internal error';
            }
          | {
              error: 61008;
              errorMessage: 'connect fail';
            }
          | {
              error: 61009;
              errorMessage: 'unavailable tech';
            }
          | {
              error: 61010;
              errorMessage: 'function not support';
            }
          | {
              error: 61011;
              errorMessage: 'NFC tag has not been discovered';
            }
          | {
              error: 61012;
              errorMessage: 'parse NdefMessage failed';
            }
          | {
              error: 61013;
              errorMessage: 'transceive timeout';
            }
          | {
              error: 61014;
              errorMessage: 'Invalid param';
            },
      ): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              success: true;
            }
          | (
              | {
                  error?: number;
                  errorMessage?: string;
                }
              | {
                  error: 61000;
                  errorMessage: 'nfc not supported';
                }
              | {
                  error: 61001;
                  errorMessage: 'nfc is closed';
                }
              | {
                  error: 61002;
                  errorMessage: 'Tech already connected';
                }
              | {
                  error: 61003;
                  errorMessage: 'Tech has not connected';
                }
              | {
                  error: 61004;
                  errorMessage: 'NFC discovery already started';
                }
              | {
                  error: 61005;
                  errorMessage: 'NFC discovery has not started';
                }
              | {
                  error: 61006;
                  errorMessage: 'invalid tech';
                }
              | {
                  error: 61007;
                  errorMessage: 'system internal error';
                }
              | {
                  error: 61008;
                  errorMessage: 'connect fail';
                }
              | {
                  error: 61009;
                  errorMessage: 'unavailable tech';
                }
              | {
                  error: 61010;
                  errorMessage: 'function not support';
                }
              | {
                  error: 61011;
                  errorMessage: 'NFC tag has not been discovered';
                }
              | {
                  error: 61012;
                  errorMessage: 'parse NdefMessage failed';
                }
              | {
                  error: 61013;
                  errorMessage: 'transceive timeout';
                }
              | {
                  error: 61014;
                  errorMessage: 'Invalid param';
                }
            ),
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 停止扫描 NFC
     */
    stopDiscovery(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(
        err:
          | {
              error?: number;
              errorMessage?: string;
            }
          | {
              error: 61000;
              errorMessage: 'nfc not supported';
            }
          | {
              error: 61001;
              errorMessage: 'nfc is closed';
            }
          | {
              error: 61002;
              errorMessage: 'Tech already connected';
            }
          | {
              error: 61003;
              errorMessage: 'Tech has not connected';
            }
          | {
              error: 61004;
              errorMessage: 'NFC discovery already started';
            }
          | {
              error: 61005;
              errorMessage: 'NFC discovery has not started';
            }
          | {
              error: 61006;
              errorMessage: 'invalid tech';
            }
          | {
              error: 61007;
              errorMessage: 'system internal error';
            }
          | {
              error: 61008;
              errorMessage: 'connect fail';
            }
          | {
              error: 61009;
              errorMessage: 'unavailable tech';
            }
          | {
              error: 61010;
              errorMessage: 'function not support';
            }
          | {
              error: 61011;
              errorMessage: 'NFC tag has not been discovered';
            }
          | {
              error: 61012;
              errorMessage: 'parse NdefMessage failed';
            }
          | {
              error: 61013;
              errorMessage: 'transceive timeout';
            }
          | {
              error: 61014;
              errorMessage: 'Invalid param';
            },
      ): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              success: true;
            }
          | (
              | {
                  error?: number;
                  errorMessage?: string;
                }
              | {
                  error: 61000;
                  errorMessage: 'nfc not supported';
                }
              | {
                  error: 61001;
                  errorMessage: 'nfc is closed';
                }
              | {
                  error: 61002;
                  errorMessage: 'Tech already connected';
                }
              | {
                  error: 61003;
                  errorMessage: 'Tech has not connected';
                }
              | {
                  error: 61004;
                  errorMessage: 'NFC discovery already started';
                }
              | {
                  error: 61005;
                  errorMessage: 'NFC discovery has not started';
                }
              | {
                  error: 61006;
                  errorMessage: 'invalid tech';
                }
              | {
                  error: 61007;
                  errorMessage: 'system internal error';
                }
              | {
                  error: 61008;
                  errorMessage: 'connect fail';
                }
              | {
                  error: 61009;
                  errorMessage: 'unavailable tech';
                }
              | {
                  error: 61010;
                  errorMessage: 'function not support';
                }
              | {
                  error: 61011;
                  errorMessage: 'NFC tag has not been discovered';
                }
              | {
                  error: 61012;
                  errorMessage: 'parse NdefMessage failed';
                }
              | {
                  error: 61013;
                  errorMessage: 'transceive timeout';
                }
              | {
                  error: 61014;
                  errorMessage: 'Invalid param';
                }
            ),
      ): void;
    }): Promise<{
      success: true;
    }>;
  }
  export interface WebViewContext {
    /**
     * @summary 小程序向 <web-view> 组件发送消息
     * @description 配合 <web-view> 中提供的 `my.postMessage` 可以实现小程序和 <web-view> 网页的双向通信。
     */
    postMessage(message: Record<string, unknown>): void;
  }
  export interface Animation {
    /**
     * @summary 设置动画背景色
     */
    backgroundColor(color: string): this;
    /**
     * @summary 设置动画 bottom 偏移
     */
    bottom(length: string | number): this;
    /**
     * @summary 导出动画队列
     * @description export 方法每次调用后会清掉之前的动画操作
     */
    export(): {};
    /**
     * @summary 设置动画高度
     */
    height(length: string | number): this;
    /**
     * @summary 设置动画 left 偏移
     */
    left(length: string | number): this;
    /**
     * @summary 设置动画透明度
     */
    opacity(opacity: number): this;
    /**
     * @summary 设置动画 right 偏移
     */
    right(length: string | number): this;
    /**
     * @summary 设置动画从固定二维轴顺时针旋转指定角度
     */
    rotate(deg: string | number): this;
    /**
     * @summary 设置动画从固定三维轴顺时针旋转指定角度
     */
    rotate3d(x: string | number, y: string | number, z: string | number, deg: string | number): this;
    /**
     * @summary 设置动画以 X 轴顺时针旋转指定角度
     */
    rotateX(deg: string | number): this;
    /**
     * @summary 设置动画以 Y 轴顺时针旋转指定角度
     */
    rotateY(deg: string | number): this;
    /**
     * @summary 设置动画以 Z 轴顺时针旋转指定角度
     */
    rotateZ(deg: string | number): this;
    /**
     * @summary 设置动画二维缩放
     */
    scale(x: number, y: number): this;
    /**
     * @summary 设置动画三维缩放
     */
    scale3d(sx: string | number, sy: string | number, sz: string | number): this;
    /**
     * @summary 设置动画以 X 轴缩放
     */
    scaleX(x: number): this;
    /**
     * @summary 设置动画以 Y 轴缩放
     */
    scaleY(y: number): this;
    /**
     * @summary 设置动画以 Z 轴缩放
     */
    scaleZ(z: string | number): this;
    /**
     * @summary 设置动画二维倾斜变换
     */
    skew(x: string | number, y: string | number): this;
    /**
     * @summary 设置动画以 X 轴倾斜变换
     */
    skewX(x: string | number): this;
    /**
     * @summary 设置动画以 Y 轴倾斜变换
     */
    skewY(y: string | number): this;
    /**
     * @summary 完成一组动画
     * @description 可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。
     */
    step(param: {
      /**
       * @summary 动画持续时间，单位 ms
       * @default 400
       */
      duration?: number;
      /**
       * @summary 动画的效果
       * @default "linear"
       */
      timeFunction?: string;
      /**
       * @summary 动画延迟时间，单位 ms
       */
      delay?: number;
      /**
       * @summary 动画变形的原点
       * @default "50% 50% 0"
       */
      transformOrigin?: string;
    }): this;
    /**
     * @summary 设置动画 top 偏移
     */
    top(length: string | number): this;
    /**
     * @summary 设置动画对二维方向平移变换
     */
    translate(x: number, y: number): this;
    /**
     * @summary 设置动画对三维方向平移变换
     */
    translate3d(tx: string | number, ty: string | number, tz: string | number): this;
    /**
     * @summary 设置动画对 X 轴平移变换
     */
    translateX(x: number): this;
    /**
     * @summary 设置动画对 Y 轴平移变换
     */
    translateY(y: number): this;
    /**
     * @summary 设置动画对 Z 轴平移变换
     */
    translateZ(z: string | number): this;
    /**
     * @summary 设置动画宽度
     */
    width(length: string | number): this;
  }
  export interface SelectorQuery {
    /**
     * @summary 将当前选择节点的位置信息放入查询结果
     */
    boundingClientRect(callback?: (res: unknown) => void): this;
    /**
     * @summary 添加节点 Context 实例查询请求
     */
    context(callback: (res: unknown) => void): this;
    /**
     * @summary 将查询结果放入 Callback 回调中
     */
    exec(callback?: (res: ArrayLike<any>) => void): void;
    /**
     * @summary 获取节点的指定字段信息
     */
    fields(option: ISelectorQueryFieldsOption, callback?: (res: unknown) => void): this;
    /**
     * @summary 将选择器的选取范围更改为自定义组件内
     */
    in(component: unknown): this;
    /**
     * @summary 获取 Node 节点实例
     */
    node(callback?: (res: unknown) => void): this;
    /**
     * @summary 将当前选择节点的滚动信息放入查询结果
     */
    scrollOffset(callback?: (res: unknown) => void): this;
    /**
     * @summary 选择当前第一个匹配选择器的节点
     */
    select(selector: string): this;
    /**
     * @summary 选择所有匹配选择器的节点
     */
    selectAll(selector: string): this;
    /**
     * @summary 选择窗口对象
     */
    selectViewport(): this;
  }
  export interface MapContext {
    /**
     * @summary 创建自定义图片图层
     * @description 图片会随着地图缩放而缩放
     */
    addGroundOverlay(r: {
      /**
       * @summary 图片图层 id
       */
      id: string;
      /**
       * @summary 图片路径
       * @description 支持网络图片、临时路径、代码包路径
       */
      image: string;
      /**
       * @summary 图片覆盖的经纬度范围
       */
      'include-points': IMapContextAddGroundOverlayIncludePoints[];
      /**
       * @summary 是否可见
       * @default true
       */
      visible?: boolean;
      /**
       * @summary 图层绘制顺序
       * @default 0
       */
      zIndex?: number;
      /**
       * @summary 图层透明度
       * @default 1
       */
      alpha?: number;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 添加 marker
     */
    addMarkers(r: {
      /**
       * @summary 要添加的 marker
       */
      markers: IMapContextAddMarkersMarkers[];
      /**
       * @summary 是否先清空地图上所有 marker
       * @default false
       */
      clear?: boolean;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 通过给定坐标点序列计算路径长度及特定距离坐标点
     * @description 计算由一系列坐标点所定义的路径的长度，并可计算出该路径上距起始点指定距离的点的坐标。
     */
    calculateDistance(r: {
      /**
       * @summary 路线中点的经纬度数组。
       */
      points: IMapContextCalculateDistancePoints[];
      /**
       * @summary 是否需要计算总距离。
       * @default true
       */
      exportTotalDistance?: boolean;
      /**
       * @summary 目标距离（直线距离）数组。
       */
      targetDistances?: number[];
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 总路径长度。（如果传入的 exportTotalDistance 为 false，则不返回 distance。）
         */
        distance: number;
        /**
         * @summary 符合目标距离的点，对应的经纬度。
         */
        targetPoints: IMapContextCalculateDistanceTargetPoints[];
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 总路径长度。（如果传入的 exportTotalDistance 为 false，则不返回 distance。）
               */
              distance: number;
              /**
               * @summary 符合目标距离的点，对应的经纬度。
               */
              targetPoints: IMapContextCalculateDistanceTargetPoints[];
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 总路径长度。（如果传入的 exportTotalDistance 为 false，则不返回 distance。）
       */
      distance: number;
      /**
       * @summary 符合目标距离的点，对应的经纬度。
       */
      targetPoints: IMapContextCalculateDistanceTargetPoints[];
    }>;
    /**
     * @summary 添加、删除、更新指定的 marker
     */
    changeMarkers(r: {
      /**
       * @summary 需要添加的 marker 数组
       */
      add: IMapContextChangeMarkersAdd[];
      /**
       * @summary 需要删除的 marker 数组
       */
      remove: IMapContextChangeMarkersRemove[];
      /**
       * @summary 需要更新的 marker 数组
       */
      update: IMapContextChangeMarkersUpdate[];
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 清除地图上的步行导航路线
     */
    clearRoute(r: {
      element: string;
      actionType: string;
      data: Record<string, unknown>;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 设置所有手势是否可用
     */
    gestureEnable(r: {
      /**
       * @summary 指定手势是否可用
       */
      isGestureEnable: 0 | 1;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 获取当前地图中心位置
     */
    getCenterLocation(r: {
      element: string;
      actionType: string;
      data: Record<string, unknown>;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 纬度
         */
        latitude: number;
        /**
         * @summary 经度
         */
        longitude: number;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 纬度
               */
              latitude: number;
              /**
               * @summary 经度
               */
              longitude: number;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 纬度
       */
      latitude: number;
      /**
       * @summary 经度
       */
      longitude: number;
    }>;
    /**
     * @summary 获取地图的属性信息
     */
    getMapProperties(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 是否是 3D 地图引擎
         */
        is3d: number;
        /**
         * @summary 是否支持动画
         */
        isSupportAnim: boolean;
        /**
         * @summary 地图中使用的 SDK 名称
         */
        sdkName: string;
        /**
         * @summary 地图中使用的 SDK 版本号
         */
        sdkVersion: string;
        /**
         * @summary 是否支持海外地图
         */
        isSupportOversea: boolean;
        /**
         * @summary 是否需要 7.x 版本自定义地图样式配置文件
         */
        needStyleV7: boolean;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 是否是 3D 地图引擎
               */
              is3d: number;
              /**
               * @summary 是否支持动画
               */
              isSupportAnim: boolean;
              /**
               * @summary 地图中使用的 SDK 名称
               */
              sdkName: string;
              /**
               * @summary 地图中使用的 SDK 版本号
               */
              sdkVersion: string;
              /**
               * @summary 是否支持海外地图
               */
              isSupportOversea: boolean;
              /**
               * @summary 是否需要 7.x 版本自定义地图样式配置文件
               */
              needStyleV7: boolean;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 是否是 3D 地图引擎
       */
      is3d: number;
      /**
       * @summary 是否支持动画
       */
      isSupportAnim: boolean;
      /**
       * @summary 地图中使用的 SDK 名称
       */
      sdkName: string;
      /**
       * @summary 地图中使用的 SDK 版本号
       */
      sdkVersion: string;
      /**
       * @summary 是否支持海外地图
       */
      isSupportOversea: boolean;
      /**
       * @summary 是否需要 7.x 版本自定义地图样式配置文件
       */
      needStyleV7: boolean;
    }>;
    /**
     * @summary 获取地图的属性信息
     */
    getRegion(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 地图的西南角经纬度
         */
        southwest: IMapContextPoint;
        /**
         * @summary 地图的东北角经纬度
         */
        northeast: IMapContextPoint;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 地图的西南角经纬度
               */
              southwest: IMapContextPoint;
              /**
               * @summary 地图的东北角经纬度
               */
              northeast: IMapContextPoint;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 地图的西南角经纬度
       */
      southwest: IMapContextPoint;
      /**
       * @summary 地图的东北角经纬度
       */
      northeast: IMapContextPoint;
    }>;
    /**
     * @summary 获取当前地图的旋转角
     */
    getRotate(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 旋转角
         */
        rotate: number;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 旋转角
               */
              rotate: number;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 旋转角
       */
      rotate: number;
    }>;
    /**
     * @summary 获取地图的缩放级别
     */
    getScale(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 缩放级别
         * @description 取值范围为 5-18
         * @default 16
         */
        scale: number;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 缩放级别
               * @description 取值范围为 5-18
               * @default 16
               */
              scale: number;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 缩放级别
       * @description 取值范围为 5-18
       * @default 16
       */
      scale: number;
    }>;
    /**
     * @summary 获取当前地图的倾斜角
     */
    getSkew(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 倾斜角
         * @description 取值范围为 0~60°。
         */
        skew: number;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 倾斜角
               * @description 取值范围为 0~60°。
               */
              skew: number;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 倾斜角
       * @description 取值范围为 0~60°。
       */
      skew: number;
    }>;
    /**
     * @summary 缩放视野到指定可视区域
     */
    includePoints(r: {
      /**
       * @summary 要显示在可视区域内的坐标点列表
       */
      points: IMapContextIncludePointsPoints[];
      /**
       * @summary 坐标点形成的矩形边缘到地图边缘的距离
       * @description 格式为 [上，右，下，左]，如果数据只有一项，则上下左右的 padding 一致
       */
      padding?: number[];
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 初始化点聚合的配置
     * @description 未调用时采用默认配置
     */
    initMarkerCluster(r: {
      /**
       * @summary 聚合算法可聚合的缩放级别
       */
      clusterRanges: IMapContextDisplayRange[];
      /**
       * @summary 聚合算法的可聚合距离
       * @description 即距离小于该值的点会聚合至一起，以像素为单位
       * @default 50
       */
      clusterDistance?: number;
      /**
       * @summary 将 marker 聚合后的数量应用到聚合样式中
       * @description 配合 iconLayout 使用
       */
      referenceParam?: string;
      /**
       * @summary 使用“Map高级定制渲染”进行聚合点样式自定义
       */
      iconLayout?: object;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 将地图经纬度坐标系转换成屏幕坐标系
     */
    mapToScreen(
      r: IMapContextPoint & {
        /**
         * 接口调用成功的回调函数
         * @param data 成功返回的数据
         */
        success?(data: {
          /**
           * @summary 横坐标
           */
          x: number;
          /**
           * @summary 纵坐标
           */
          y: number;
        }): void;
        /**
         * 接口调用失败的回调函数
         * @param err 错误信息
         */
        fail?(err: { error?: number; errorMessage?: string }): void;
        /**
         * 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(
          arg:
            | {
                /**
                 * @summary 横坐标
                 */
                x: number;
                /**
                 * @summary 纵坐标
                 */
                y: number;
              }
            | {
                error?: number;
                errorMessage?: string;
              },
        ): void;
      },
    ): Promise<{
      /**
       * @summary 横坐标
       */
      x: number;
      /**
       * @summary 纵坐标
       */
      y: number;
    }>;
    /**
     * @summary 移动视野到定位点并恢复到默认缩放级别
     * @description 需要配合 map 组件 的 show-location 使用。
     */
    moveToLocation(
      r: IMapContextPoint & {
        /**
         * 接口调用成功的回调函数
         * @param data 成功返回的数据
         */
        success?(data: {}): void;
        /**
         * 接口调用失败的回调函数
         * @param err 错误信息
         */
        fail?(err: { error?: number; errorMessage?: string }): void;
        /**
         * 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(arg: { error?: number; errorMessage?: string }): void;
      },
    ): Promise<void>;
    /**
     * @summary 判断矩形区域是否包含传入的经纬度点
     */
    polygonContainsPoint(r: {
      /**
       * @summary 矩形区域的经纬度范围
       */
      polygon: IMapContextPolygonContainsPointPolygon[];
      /**
       * @summary 经纬度度的值
       */
      point: IMapContextPolygonContainsPointPoint;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 是否在矩形区域内
         */
        success: boolean;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 是否在矩形区域内
               */
              success: boolean;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 是否在矩形区域内
       */
      success: boolean;
    }>;
    /**
     * @summary 移除自定义图片图层
     */
    removeGroundOverlay(r: {
      /**
       * @summary 图片图层 id
       */
      id: string;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 移除 marker
     */
    removeMarkers(r: {
      /**
       * @summary marker 的 id 集合
       */
      markerIds: number[];
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 将屏幕坐标系转换成地图经纬度坐标系
     */
    screenToMap(r: {
      /**
       * @summary 横坐标
       */
      x: number;
      /**
       * @summary 纵坐标
       */
      y: number;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: IMapContextPoint): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | IMapContextPoint
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<IMapContextPoint>;
    /**
     * @summary 设置地图中心点偏移
     * @description 向后向下为增长，屏幕比例范围为 (0~1)，默认偏移为 [0.5, 0.5]。
     */
    setCenterOffset(r: {
      /**
       * @summary 偏移量
       */
      offset: number[];
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 设置地图主题类型
     */
    setMapType(r: {
      /**
       * @summary 地图主题类型
       * @description 支持类型如下：0：标准地图；1：卫星地图。
       */
      mapType: 0 | 1;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 设置地图属性
     */
    setProps(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 默认规划步行路线
     * @description 只能显示一条。
     */
    showRoute(r: {
      /**
       * @summary 搜索类型
       * @default walk
       */
      searchType?: 'walk' | 'bus' | 'drive' | 'ride';
      /**
       * @summary 起点纬度
       */
      startLat: number;
      /**
       * @summary 起点经度
       */
      startLng: number;
      /**
       * @summary 终点纬度
       */
      endLat: number;
      /**
       * @summary 终点经度
       */
      endLng: number;
      /**
       * @summary 终点经度
       * @description 仅驾车规划有效，即 searchType=“drive”时有效。
       */
      throughPoints?: IMapContextPoint[];
      /**
       * @summary 路线颜色
       * @description 该值仅在 2D 地图中生效。
       */
      routeColor?: string;
      /**
       * @summary 路线纹理
       */
      iconPath?: string;
      /**
       * @summary 纹理宽度
       */
      iconWidth?: number;
      /**
       * @summary 路线宽度
       * @description 在不设置纹理时有效。
       */
      routeWidth?: number;
      /**
       * @summary 覆盖物的 Z 轴坐标
       */
      zIndex?: number;
      /**
       * @summary 模式
       * @description 仅在驾车模式和公交模式支持。
       */
      mode?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
      /**
       * @summary 公交模式下必填
       */
      city?: string;
      /**
       * @summary 公交跨城模式下必填
       */
      destinationCity?: string;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 设置指南针是否可见
     */
    showsCompass(r: {
      /**
       * @summary 指南针是否可见
       * @description 1：可见 2：不可见
       */
      isShowsCompass: 0 | 1;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 设置比例尺控件是否可见
     */
    showsScale(r: {
      /**
       * @summary 比例尺控件是否可见
       * @description 1：可见 0：不可见。
       */
      isShowsScale: 0 | 1;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 指定 marker 动画
     */
    smoothMoveMarker(r: {
      /**
       * @summary 执行动画的 markerId
       * @description 确保此时 marker 已经在地图上。
       */
      markerId: number;
      /**
       * @summary 传入 marker 对象
       */
      markerData?: IMapContextMarker;
      /**
       * @summary 动画路线的经纬度集合
       */
      points: IMapContextPoint[];
      /**
       * @summary 动画执行时间
       * @desription 毫秒（ms）
       * @default 5000
       */
      duration?: number;
      /**
       * @summary 指定需要 callback 的目标距离数组
       */
      targetDistances?: number[];
      /**
       * @summary 指定操作动画
       */
      action?: 'start' | 'stop';
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 指定轨迹动画
     */
    smoothMovePolyline(r: {
      /**
       * @summary 执行动画的路线 id。
       */
      polylineId: number;
      /**
       * @summary 动画路线的经纬度集合
       */
      points: IMapContextSmoothMovePolylinePoints[];
      /**
       * @summary 动画执行时间，毫秒（ms）
       * @default 5000
       */
      duration?: number;
      /**
       * @summary 轨迹动画的颜色
       */
      color?: string;
      /**
       * @summary 路线宽度
       */
      width?: number;
      /**
       * @summary 是否虚线
       */
      dottedLine?: boolean;
      /**
       * @summary 项目目录下的图片路径
       * @description 可以用相对路径写法，以 `'/'` 开头则表示相对小程序根目录， 如果有 `iconPath`，会忽略 `color`。但是 `iconPath` 可以和 `colorList` 联合使用，这样纹理会浮在彩虹线上方，为避免覆盖彩虹线，纹理图片背景色可以设置透明。
       */
      iconPath?: string;
      /**
       * @summary 线的纹理宽度
       */
      iconWidth?: number;
      /**
       * @summary z 轴坐标
       */
      zIndex?: number;
      /**
       * @summary 彩虹线
       * @description 分段依据 `points`。例如 `points` 有 `5` 个点，那么 `colorList` 就应该传 `4` 个颜色值，依此类推。如果 `colorList` 数量小于 `4`，那么剩下的线路颜色和最后一个颜色一样。
       */
      colorList?: string[];
      /**
       * @summary 指定操作动画
       */
      action?: 'start' | 'stop';
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 平移 marker
     */
    translateMaker(r: {
      /**
       * @summary 指定 marker
       */
      markerId: number;
      /**
       * @summary 指定 marker 移动到的目标点
       */
      destination: IMapContextPoint;
      /**
       * @summary 移动过程中是否自动旋转 marker
       * @default true
       */
      autoRotate: boolean;
      /**
       * @summary marker 的旋转角度
       */
      rotate: number;
      /**
       * @summary 动画持续时长
       * @default 1000
       */
      duration?: number;
      /**
       * @summary 动画结束回调函数
       */
      animationEnd?: () => unknown;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 增量更新地图的接口
     */
    updateComponents(r?: {
      /**
       * @summary 中心纬度
       */
      latitude?: number;
      /**
       * @summary 中心经度
       */
      longitude?: number;
      /**
       * @summary 缩放级别
       * @description 取值范围为 5-18
       * @default 16
       */
      scale?: number;
      /**
       * @summary marker 覆盖物
       * @description 在地图上的一个点绘制图标
       */
      markers?: IMapContextUpdateComponentsMarkers[];
      /**
       * @summary 路线覆盖物
       * @description 多个连贯点的集合（路线)
       */
      polyline?: IMapContextUpdateComponentsPolyline[];
      /**
       * @summary 视野将进行小范围延伸包含传入的坐标
       */
      'include-points'?: IMapContextUpdateComponentsIncludePoints[];
      /**
       * @summary 视野在地图 padding 范围内展示
       */
      'include-padding'?: IMapContextUpdateComponentsIncludePadding;
      /**
       * @summary 设置
       */
      setting?: IMapContextUpdateComponentsSetting;
      /**
       * @summary 命令
       * @description 可用于更新 marker 动画
       */
      command?: IMapContextUpdateComponentsCommand;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 增量更新地图的接口
     */
    updateGroundOverlay(r: {
      /**
       * @summary 图片图层 id
       */
      id: number;
      /**
       * @summary 图片路径
       * @description 支持网络图片、临时路径、代码包路径
       */
      image: string;
      /**
       * @summary 图片覆盖的经纬度范围
       */
      'include-points': IMapContextUpdateGroundOverlayIncludePoints[];
      /**
       * @summary 是否可见
       * @default true
       */
      visible?: boolean;
      /**
       * @summary 图层绘制顺序
       * @default 0
       */
      zIndex?: number;
      /**
       * @summary 图层透明度
       * @default 1
       */
      alpha?: number;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
  }
  export interface CameraContext {}
  export interface CameraFrameListener {}
  export interface UpdateManager {
    /**
     * @summary 强制小程序以新版本重启
     * @description 建议在收到 onUpdateReady 回调（当小程序新版本下载完成后）
     */
    applyUpdate(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 取消监听向支付宝后台请求检查更新结果事件。
     */
    offCheckForUpdate(cb?: (arg: { hasUpdate: boolean }) => void): void;
    /**
     * @summary 监听向支付宝后台请求检查更新结果事件。
     */
    onCheckForUpdate(cb: (arg: { hasUpdate: boolean }) => void): void;
    /**
     * @summary 用于监听小程序更新失败事件。
     */
    onUpdateFailed(cb: () => void): void;
    /**
     * @summary 监听小程序有版本更新事件。
     */
    onUpdateReady(cb: () => void): void;
  }
  export interface EventChannel {
    /**
     * @summary 在页面间通信中触发一个事件
     */
    emit(eventName: string, args?: unknown): void;
    /**
     * @summary 在页面间通信中停止监听一个事件
     */
    off(eventName: string, callback: (...args: unknown[]) => void): void;
    /**
     * @summary 在页面间通信中持续监听一个事件
     */
    on(eventName: string, callback: (...args: unknown[]) => void): void;
    /**
     * @summary 在页面间通信中监听一个事件仅一次
     * @description 事件触发后失效
     */
    once(eventName: string, callback: (...args: unknown[]) => void): void;
  }
  export interface Worker {}
  export interface IntersectionObserver {
    /**
     * @summary 停止监听。回调函数将不再触发
     */
    disconnect(): void;
    in(component: unknown): this;
    /**
     * @summary 指定目标节点并开始监听相交状态变化情况
     */
    observe(targetSelector: string, callback: (payload: IIntersectionObserverObserveCallback) => void): void;
    /**
     * @summary 使用选择器指定一个节点，作为参照区域之一
     */
    relativeTo(selector: string, margins: IIntersectionObserverRelativeToMargins): this;
    /**
     * @summary 指定页面显示区域作为参照区域之一
     */
    relativeToViewport(param: {
      /**
       * @summary 节点布局区域的上边界
       */
      top?: number;
      /**
       * @summary 节点布局区域的右边界
       */
      right?: number;
      /**
       * @summary 节点布局区域的下边界
       */
      bottom?: number;
      /**
       * @summary 节点布局区域的左边界
       */
      left?: number;
    }): this;
  }
  export interface TCPSocket {}
  export interface UDPSocket {}
  export interface RecorderManager {
    /**
     * @summary 停止监听声音的分贝变化回调事件
     */
    offDecibelChange(cb?: (arg: { decibel: number }) => void): void;
    /**
     * @summary 取消监听录音错误事件
     */
    offError(
      cb?: (
        arg:
          | {
              error: '10';
              errorMessage: '获取权限失败';
            }
          | {
              error: '1001';
              errorMessage: 'Record canceled by page pause.';
            }
          | {
              error: number;
              errorMessage: string;
            },
      ) => void,
    ): void;
    /**
     * @summary 取消监听已录制完制定帧大小的文件事件
     */
    offFrameRecorded(cb?: (arg: { frameBuffer: ArrayBuffer; isLastFrame: boolean }) => void): void;
    /**
     * @summary 取消监听录音暂停事件
     */
    offPause(cb?: () => void): void;
    /**
     * @summary 取消监听录音继续事件
     */
    offResume(cb?: () => void): void;
    /**
     * @summary 取消监听录音开始事件
     */
    offStart(cb?: () => void): void;
    /**
     * @summary 取消监听录音结束事件
     */
    offStop(cb?: (arg: { identifier: string; tempFilePath: string; duration: number }) => void): void;
    /**
     * @summary 监听声音的分贝变化回调事件
     */
    onDecibelChange(cb: (arg: { decibel: number }) => void): void;
    /**
     * @summary 监听录音错误事件
     */
    onError(
      cb: (
        arg:
          | {
              error: '10';
              errorMessage: '获取权限失败';
            }
          | {
              error: '1001';
              errorMessage: 'Record canceled by page pause.';
            }
          | {
              error: number;
              errorMessage: string;
            },
      ) => void,
    ): void;
    /**
     * @summary 监听已录制完制定帧大小的文件事件。如果设置了 frameSize，则会回调此事件
     */
    onFrameRecorded(cb: (arg: { frameBuffer: ArrayBuffer; isLastFrame: boolean }) => void): void;
    /**
     * @summary 监听录音暂停事件
     */
    onPause(cb: () => void): void;
    /**
     * @summary 监听录音继续事件
     */
    onResume(cb: () => void): void;
    /**
     * @summary 监听录音开始事件
     */
    onStart(cb: () => void): void;
    /**
     * @summary 监听录音结束事件
     */
    onStop(cb: (arg: { identifier: string; tempFilePath: string; duration: number }) => void): void;
    /**
     * @summary 暂停录音
     */
    pause(): void;
    /**
     * @summary 继续录音
     */
    resume(): void;
    /**
     * @summary 开始录音
     */
    start(param: {
      /**
       * @summary 录音的时长，单位 ms
       * @default 60000
       */
      duration?: number;
      /**
       * @summary 最长录音的时长，单位分钟
       * @default 60
       */
      maxRecordTime?: number;
      /**
       * @summary 最短录音的时长，单位分钟
       * @default 1
       */
      minRecordTime?: number;
      /**
       * @summary 采样率
       */
      sampleRate?: number;
      /**
       * @summary 编码码率
       */
      encodeBitRate?: number;
      /**
       * @summary 录音通道数
       */
      numberOfChannels?: number;
      /**
       * @summary 指定录音的音频输入源
       * @description 可通过 [my.getAvailableAudioSources]() 获取当前可用的音频源
       * @default "auto"
       */
      audioSource?: string;
      /**
       * @summary 音频格式,支持格式：aac、mp3
       * @default "aac"
       */
      format?: string;
      /**
       * @summary 指定帧大小，单位 KB
       */
      frameSize?: number;
    }): void;
    /**
     * @summary 停止录音
     */
    stop(): void;
  }
  export interface WebSocketTask {}
  export interface InnerAudioContext {
    /**
     * @summary 是否自动播放
     */
    autoplay: boolean;
    /**
     * @summary 音频缓冲的时间点
     * @description 仅保证当前播放时间点到此时间点内容已缓冲（只读）
     */
    readonly buffered: number;
    /**
     * @summary 优酷 ccode
     */
    ccode: string;
    /**
     * @summary 音频当前播放的位置长度
     * @description 只有在当前有合法的 src 时返回。（只读）
     */
    readonly currentTime: number;
    /**
     * @summary 音频的长度
     * @description 只有在当前有合法的 src 时返回（只读）
     */
    readonly duration: number;
    /**
     * @summary 是否支持断点续播
     */
    isRecordAudioPlayState: boolean;
    /**
     * @summary 是否自动循环播放
     */
    loop: boolean;
    /**
     * @summary 是否遵循系统静音开关
     * @description 默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
     */
    obeyMuteSwitch: boolean;
    /**
     * @summary 当前是是否暂停或停止状态（只读）
     */
    readonly paused: number;
    /**
     * @summary 播放速度
     * @description 范围 0.5-2.0，默认为 1
     */
    playbackRate: number;
    /**
     * @summary 音频资源的地址。
     */
    src: string;
    /**
     * @summary 开始播放的位置
     * @description 单位为秒，默认为 0
     */
    startTime: number;
    /**
     * @summary 是否支持后台播放
     */
    supportBackgroundPlay: boolean;
    /**
     * @summary 当前音量。范围 0~1。默认为 1
     */
    volume: number;
    /**
     * @summary 销毁音频实例
     */
    destroy(): void;
    /**
     * @summary 停止监听可以开始播放的事件
     */
    offCanPlay(cb?: (arg: { audioPlayerID: string }) => void): void;
    /**
     * @summary 停止监听播放完成的事件
     */
    offEnded(cb?: (arg: { audioPlayerID: string }) => void): void;
    /**
     * @summary 停止监听播放下一首的事件
     */
    offNext(cb?: (arg: {}) => void): void;
    /**
     * @summary 停止监听播放暂停的事件
     */
    offPause(cb?: (arg: { audioPlayerID: string }) => void): void;
    /**
     * @summary 停止监听播放开始事件
     */
    offPlay(cb?: (arg: { audioPlayerID: string }) => void): void;
    /**
     * @summary 停止监听播放上一首的事件
     */
    offPrev(cb?: (arg: {}) => void): void;
    /**
     * @summary 停止监听跳转到进度的事件
     */
    offSeeked(cb?: (arg: { audioPlayerID: string }) => void): void;
    /**
     * @summary 停止监听开始跳转到进度的事件
     */
    offSeeking(cb?: (arg: { audioPlayerID: string }) => void): void;
    /**
     * @summary 停止监听播放停止的事件
     */
    offStop(cb?: (arg: { audioPlayerID: string }) => void): void;
    /**
     * @summary 停止监听时间更新事件
     */
    offTimeUpdate(cb?: (arg: { audioPlayerID: string }) => void): void;
    /**
     * @summary 停止监听音频还在准备中的事件
     */
    offWaiting(cb?: (arg: { audioPlayerID: string }) => void): void;
    /**
     * @summary 监听可以开始播放的事件，缓冲完成可以开始播放，但不保证后面可以流畅播放。
     */
    onCanPlay(cb: (arg: { audioPlayerID: string }) => void): void;
    /**
     * @summary 监听播放完成的事件
     */
    onEnded(cb: (arg: { audioPlayerID: string }) => void): void;
    /**
     * @summary 监听播放下一首的事件
     */
    onNext(cb: (arg: {}) => void): void;
    /**
     * @summary 监听播放暂停的事件
     */
    onPause(cb: (arg: { audioPlayerID: string }) => void): void;
    /**
     * @summary 监听播放开始事件，播放过程中缓存不会再次触发
     */
    onPlay(cb: (arg: { audioPlayerID: string }) => void): void;
    /**
     * @summary 监听播放上一首的事件
     */
    onPrev(cb: (arg: {}) => void): void;
    /**
     * @summary 监听跳转到进度的事件
     */
    onSeeked(cb: (arg: { audioPlayerID: string }) => void): void;
    /**
     * @summary 监听开始跳转到进度的事件
     */
    onSeeking(cb: (arg: { audioPlayerID: string }) => void): void;
    /**
     * @summary 监听播放停止的事件
     */
    onStop(cb: (arg: { audioPlayerID: string }) => void): void;
    /**
     * @summary 监听时间更新事件
     */
    onTimeUpdate(cb: (arg: { audioPlayerID: string }) => void): void;
    /**
     * @summary 监听音频还在准备中的事件，在缓冲期间会被触发多次
     */
    onWaiting(cb: (arg: { audioPlayerID: string }) => void): void;
    /**
     * @summary 暂停音频，再次播放会从暂停处播放
     */
    pause(): void;
    /**
     * @summary 播放音频
     */
    play(): void;
    /**
     * @summary 跳转到指定位置
     */
    seek(position: number): void;
    /**
     * @summary 停止播放，再次播放会从重新播放
     */
    stop(): void;
  }
  export interface AICameraContext {}
  export interface ARContext {}
  export interface AudioContext {}
  export interface InsuranceXReplaySession {}
  export interface LivePlayerContext {}
  export interface LivePusherContext {}
  export interface LottieContext {
    /**
     * @summary 当前 Lottie 视图指定降级为展示 placeholder
     */
    downgradeToPlaceholder(): void;
    /**
     * @summary 填充 Lottie 参数
     */
    fillVariableValue(param: { [key: string]: any }): void;
    /**
     * @summary 获取当前播放进度
     */
    getDuration(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { duration: number; version?: string }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              duration: number;
              version?: string;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      duration: number;
      version?: string;
    }>;
    /**
     * @summary 获取 Lottie 渲染信息
     */
    getLottieInfo(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 当前 Lottie 动画的宽度
         * ios 为 string 类型
         */
        w: number;
        /**
         * @summary 当前 Lottie 动画的高度
         * ios 为 string 类型
         */
        h: number;
        /**
         * @summary 当前 Lottie 模型的帧率（frame rate）
         * ios 为 string 类型
         */
        fr: number;
        /**
         * @summary 渲染方式
         */
        renderType?: 'lottie' | 'skottie' | 'antmation' | 'mars' | 'video';
        syncCreateView?: 'true' | 'false';
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 当前 Lottie 动画的宽度
               * ios 为 string 类型
               */
              w: number;
              /**
               * @summary 当前 Lottie 动画的高度
               * ios 为 string 类型
               */
              h: number;
              /**
               * @summary 当前 Lottie 模型的帧率（frame rate）
               * ios 为 string 类型
               */
              fr: number;
              /**
               * @summary 渲染方式
               */
              renderType?: 'lottie' | 'skottie' | 'antmation' | 'mars' | 'video';
              syncCreateView?: 'true' | 'false';
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 当前 Lottie 动画的宽度
       * ios 为 string 类型
       */
      w: number;
      /**
       * @summary 当前 Lottie 动画的高度
       * ios 为 string 类型
       */
      h: number;
      /**
       * @summary 当前 Lottie 模型的帧率（frame rate）
       * ios 为 string 类型
       */
      fr: number;
      /**
       * @summary 渲染方式
       */
      renderType?: 'lottie' | 'skottie' | 'antmation' | 'mars' | 'video';
      syncCreateView?: 'true' | 'false';
    }>;
    /**
     * @summary 跳转至并从该进度开始播放
     */
    goToAndPlay(param: {
      /**
       * @summary 跳转至 value 并从该进度开始播放，value 值范围为 0 <= value <= 1。
       */
      value: number;
    }): void;
    /**
     * @summary 跳转至并停在该进度
     */
    goToAndStop(param: {
      /**
       * @summary 跳转至 value 并停在该进度，value 值范围为 0 <= value <= 1。
       */
      value: number;
    }): void;
    /**
     * @summary 暂停播放
     */
    pause(): void;
    /**
     * @summary 开始播放
     */
    play(): void;
    /**
     * @summary 从最小到最大的 Frame 区间进行播放
     */
    playFromMinToMaxFrame(param: {
      /**
       * @summary 最小帧
       */
      min: number;
      /**
       * @summary 最大帧
       */
      max: number;
    }): void;
    /**
     * @summary 从最小到最大的进度区间进行播放
     */
    playFromMinToMaxProgress(param: {
      /**
       * @summary 最小进度，值范围 0 <= min <= 1。
       */
      min: number;
      /**
       * @summary 最大进度，值范围 0 <= max <= 1。
       */
      max: number;
    }): void;
    /**
     * @summary 设置播放速度。正数为正向播放，负数负向播放
     */
    setSpeed(param: {
      /**
       * @summary 播放速度（倍速），负数代表倒序播放
       */
      value: number;
    }): void;
    /**
     * @summary 停止播放
     */
    stop(): void;
  }
  export interface XnnManager {}
  export interface BackgroundAudioManager {
    /**
     * @summary 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲（只读）
     */
    readonly buffered: number;
    /**
     * @summary 优酷 ccode
     */
    ccode: string;
    /**
     * @summary 封面图 URL
     * @description 用做原生音频播放器背景图。原生音频播放器中的分享功能，分享的卡片配图及背景也将使用该图。
     */
    coverImgUrl: number;
    /**
     * @summary 音频当前播放的位置长度，单位 s。只有在当前有合法的 src 时返回。（只读）
     */
    readonly currentTime: number;
    /**
     * @summary 音频的长度，单位 s。只有在当前有合法的 src 时返回（只读）
     */
    readonly duration: number;
    /**
     * @summary 专辑名
     * @description 原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。
     */
    epname: number;
    /**
     * @summary 是否支持断点续播
     */
    isRecordAudioPlayState: boolean;
    /**
     * @summary 当前是是否暂停或停止状态（只读）
     */
    readonly paused: number;
    /**
     * @summary 播放速度。范围 0.5-2.0，默认为 1。
     */
    playbackRate: number;
    /**
     * @summary 歌手名
     */
    singer: number;
    /**
     * @summary 音频资源的地址。
     */
    src: string;
    /**
     * @summary 开始播放的位置（单位：s），默认为 0
     */
    startTime: number;
    /**
     * @summary 音频标题
     * @description 用于做原生音频播放器音频标题。原生音频播放器中的分享功能，分享的卡片标题，也将使用该值。
     */
    title: number;
    /**
     * @summary 当前音量。范围 0~1。默认为 1
     */
    volume: number;
    /**
     * @summary 页面链接
     * @description 原生音频播放器中的分享功能、分享出去的卡片简介将使用该值。
     */
    webUrl: string;
    /**
     * @summary 停止监听可以开始播放的事件
     */
    offCanPlay(cb?: (arg: {}) => void): void;
    /**
     * @summary 停止监听播放完成的事件
     */
    offEnded(cb?: (arg: {}) => void): void;
    /**
     * @summary 停止监听播放下一首的事件
     */
    offNext(cb?: (arg: {}) => void): void;
    /**
     * @summary 停止监听播放暂停的事件
     */
    offPause(cb?: (arg: {}) => void): void;
    /**
     * @summary 停止监听播放开始事件
     */
    offPlay(cb?: (arg: {}) => void): void;
    /**
     * @summary 停止监听播放上一首的事件
     */
    offPrev(cb?: (arg: {}) => void): void;
    /**
     * @summary 停止监听跳转到进度的事件
     */
    offSeeked(cb?: (arg: {}) => void): void;
    /**
     * @summary 停止监听开始跳转到进度的事件
     */
    offSeeking(cb?: (arg: {}) => void): void;
    /**
     * @summary 停止监听播放停止的事件
     */
    offStop(cb?: (arg: {}) => void): void;
    /**
     * @summary 停止监听时间更新事件
     */
    offTimeUpdate(cb?: (arg: {}) => void): void;
    /**
     * @summary 停止监听音频还在准备中的事件
     */
    offWaiting(cb?: (arg: {}) => void): void;
    /**
     * @summary 监听可以开始播放的事件，缓冲完成可以开始播放，但不保证后面可以流畅播放。
     */
    onCanPlay(cb: (arg: {}) => void): void;
    /**
     * @summary 监听播放完成的事件
     */
    onEnded(cb: (arg: {}) => void): void;
    /**
     * @summary 监听播放下一首的事件
     */
    onNext(cb: (arg: {}) => void): void;
    /**
     * @summary 监听播放暂停的事件
     */
    onPause(cb: (arg: {}) => void): void;
    /**
     * @summary 监听播放开始事件，播放过程中缓存不会再次触发
     */
    onPlay(cb: (arg: {}) => void): void;
    /**
     * @summary 监听播放上一首的事件
     */
    onPrev(cb: (arg: {}) => void): void;
    /**
     * @summary 监听跳转到进度的事件
     */
    onSeeked(cb: (arg: {}) => void): void;
    /**
     * @summary 监听开始跳转到进度的事件
     */
    onSeeking(cb: (arg: {}) => void): void;
    /**
     * @summary 监听播放停止的事件
     */
    onStop(cb: (arg: {}) => void): void;
    /**
     * @summary 监听时间更新事件
     */
    onTimeUpdate(cb: (arg: {}) => void): void;
    /**
     * @summary 监听音频还在准备中的事件，在缓冲期间会被触发多次
     */
    onWaiting(cb: (arg: {}) => void): void;
    /**
     * @summary 暂停音频，再次播放会从暂停处播放
     */
    pause(): void;
    /**
     * @summary 播放音频
     */
    play(): void;
    /**
     * @summary 跳转到指定位置
     */
    seek(position: number): void;
    /**
     * @summary 停止播放，再次播放会从重新播放
     */
    stop(): void;
  }
  export interface CanvasContext {
    /**
     * @summary 使用内部方式描述颜色和样式的属性
     */
    fillStyle: string;
    /**
     * @summary 当前字体样式的属性
     * @description 描述绘制文字时，当前字体样式的属性
     */
    font: string;
    /**
     * @summary 字体大小
     */
    fontSize: number;
    /**
     * @summary 设置图形和图片透明度的属性
     */
    globalAlpha: number;
    /**
     * @summary 设置应用的合成操作的类型
     */
    globalCompositeOperation: 'source-over';
    /**
     * @summary 设置绘制每一条线段末端的属性
     */
    lineCap: 'butt';
    /**
     * @summary 设置虚线偏移量的属性
     * @description 例如可以实现 “蚂蚁线“ 的效果
     */
    lineDashOffset: number;
    /**
     * @summary 设置 2 个（线段，圆弧，曲线）如何连接在一起的属性
     */
    lineJoin: 'round';
    /**
     * @summary 设置线段厚度的属性（即线段的宽度）
     */
    lineWidth: number;
    /**
     * @summary 设置斜接面限制比例的属性
     */
    miterLimit: number;
    /**
     * @summary 描述画笔（绘制图形）颜色或者样式的属性
     */
    strokeStyle: string;
    /**
     * @summary 文本的对齐方式的属性
     */
    textAlign: 'left';
    /**
     * @summary 当前文本基线的属性
     */
    textBaseline: 'bottom';
    /**
     * @summary 在 Canvas 上绘制圆弧路径
     * @description 圆弧路径的圆心在 (x, y) 位置，半径为 r ，根据anticlockwise （默认为顺时针）指定的方向从 startAngle 开始绘制，到 endAngle 结束。
     */
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    /**
     * @summary 在 Canvas 上绘制圆弧路径
     * @description 根据控制点和半径绘制圆弧路径，使用当前的描点(前一个moveTo或lineTo等函数的止点)。根据当前描点与给定的控制点1连接的直线，和控制点1与控制点2连接的直线，作为使用指定半径的圆的切线，画出两条切线之间的弧线路径。
     */
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    /**
     * @summary 在 Canvas 上开始一个新路径
     * @description 当你想创建一个新的路径时，调用此方法。
     */
    beginPath(): void;
    /**
     * @summary 在 Canvas 上绘制三次贝赛尔曲线路径
     * @description 该方法需要三个点。 第一、第二个点是控制点，第三个点是结束点。起始点是当前路径的最后一个点，绘制贝赛尔曲线前，可以通过调用 moveTo() 进行修改。
     */
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    /**
     * @summary 清除 Canvas 矩形区域
     * @description 通过把像素设置为透明以达到擦除一个矩形区域的方法
     */
    clearRect(x: number, y: number, width: number, height: number): void;
    /**
     * @summary 将笔点返回到当前子路径起始点的方法
     * @description 它尝试从当前点到起始点绘制一条直线。 如果图形已经是封闭的或者只有一个点，那么此方法不会做任何操作。
     */
    closePath(): void;
    /**
     * @summary 使用指定的图像创建模式的方法
     */
    createPattern(image: string | CanvasContextImageSource, repetition: string | null): CanvasPattern;
    /**
     * @summary 提交 Canvas 绘制指令
     * @description 用于将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中
     */
    draw(reserve?: boolean, callback?: () => void): void;
    /**
     * @summary 在 Canvas 上绘制图像
     * @description 图像保持原始尺寸
     */
    drawImage(image: string | ICanvasContext, sx: number, sy: number, sWidth: number, sHeight: number, dx: number, dy: number, dWidth: number, dHeight: number): void;
    /**
     * @summary 绘制填充矩形的方法
     */
    fillRect(x: number, y: number, width: number, height: number): void;
    /**
     * @summary 填充文本的方法
     */
    fillText(text: string, x: number, y: number, maxWidth?: number): void;
    /**
     * @summary 异步返回 Canvas 指定区域像素数据
     * @description 返回一个 ImageData 对象，用来描述canvas区域隐含的像素数据
     */
    getImageData(r: {
      x: number;
      y: number;
      width: number;
      height: number;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { width: number; height: number; length: number; data: Uint8ClampedArray }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              width: number;
              height: number;
              length: number;
              data: Uint8ClampedArray;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      width: number;
      height: number;
      length: number;
      data: Uint8ClampedArray;
    }>;
    /**
     * @summary 获取  Canvas 线条虚线样式
     */
    getLineDash(): number[];
    /**
     * @summary 使用直线连接子路径的终点到某个坐标的方法
     * @description 并不会真正地绘制。
     */
    lineTo(x: number, y: number): void;
    /**
     * @summary 返回一个文本包含的信息
     */
    measureText(text: string): {
      /**
       * @summary 文本的宽度
       * @description 使用 CSS 像素计算的内联字符串的宽度
       */
      width: number;
    };
    /**
     * @summary 将一个新的子路径的起始点移动到某个坐标的方法
     */
    moveTo(x: number, y: number): void;
    /**
     * @summary 更新 Canvas 指定区域像素数据
     */
    putImageData(r: {
      data: Uint8ClampedArray;
      x: number;
      y: number;
      width: number;
      height: number;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 新增二次贝塞尔曲线路径的方法
     */
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    /**
     * @summary 创建矩形路径的方法
     * @description 创建矩形路径的方法，矩形的起点位置是 (x, y) ，尺寸为 width 和 height。矩形的4个点通过直线连接，子路径做为闭合的标记，所以你可以填充或者描边矩形。
     */
    rect(x: number, y: number, w: number, h: number): void;
    /**
     * @summary 将 canvas 恢复到最近的保存状态的方法
     * @description 通过在绘图状态栈中弹出顶端的状态, 将 canvas 恢复到最近的保存状态的方法
     */
    restore(): void;
    /**
     * @summary 在变换矩阵中增加旋转的方法
     */
    rotate(angle: number): void;
    /**
     * @summary 保存 canvas 全部状态的方法
     * @description 通过将当前状态放入栈中, 保存 canvas 全部状态的方法
     */
    save(): void;
    /**
     * @summary 添加缩放变换的方法
     * @description 根据 x 水平方向和 y 垂直方向，为 canvas 单位添加缩放变换的方法
     */
    scale(x: number, y: number): void;
    /**
     * @summary 设置 Canvas 填充色
     */
    setFillStyle(color: string): void;
    /**
     * @summary 设置 Canvas 字体大小
     */
    setFontSize(fontSize: number): void;
    /**
     * @summary 设置 Canvas 全局画笔透明度
     */
    setGlobalAlpha(alpha: number): void;
    /**
     * @summary 设置 Canvas 线条端点样式
     */
    setLineCap(lineCap: 'butt' | 'round' | 'square'): void;
    /**
     * @summary 设置 Canvas 线条虚线样式
     */
    setLineDash(segments: number[]): void;
    /**
     * @summary 设置  Canvas 线条交点样式
     */
    setLineJoin(lineJoin: 'round' | 'bevel' | 'miter'): void;
    /**
     * @summary 设置 Canvas 线条的宽度
     */
    setLineWidth(lineWidth: number): void;
    /**
     * @summary 设置 Canvas 最大斜接长度
     * @description 斜接长度指的是在两条线交汇处内角和外角之间的距离。 仅当 setLineJoin() 为 miter 时有效。超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 显示。
     */
    setMiterLimit(miterLimit: number): void;
    /**
     * @summary 设置 Canvas 阴影的位置和颜色
     */
    setShadow(offsetX: number, offsetY: number, blur: number, color: string): void;
    /**
     * @summary 设置 Canvas 描边颜色
     * @description 若没有设置，则默认颜色为 black。
     */
    setStrokeStyle(color: string): void;
    /**
     * @summary 设置 Canvas 文本的对齐方式
     */
    setTextAlign(textAlign: 'left' | 'right' | 'start' | 'center' | 'end'): void;
    /**
     * @summary 设置 Canvas 文本的竖直对齐方式
     */
    setTextBaseline(textBaseline: 'bottom' | 'top' | 'alphabetic' | 'hanging' | 'ideographic' | 'middle'): void;
    /**
     * @summary 更新 Canvas 仿射变换矩阵
     * @description 使用单位矩阵重新设置当前的变换并调用变换的方法
     */
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    /**
     * @summary 描绘一个的矩形的方法
     */
    strokeRect(x: number, y: number, width: number, height: number): void;
    /**
     * @summary 绘制文本的方法
     */
    strokeText(text: string, x: number, y: number, maxWidth: number): void;
    /**
     * @summary 画布上的绘制内容以 data URI 的格式返回
     */
    toDataURL(r: {
      x: number;
      y: number;
      width: number;
      height: number;
      destWidth: number;
      destHeight: number;
      fileType: 'jpg' | 'png';
      quality: number;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 画布指定区域导出图片的方法
     */
    toTempFilePath(r?: {
      /**
       * @summary 画布区域的左上角横坐标
       */
      x?: number;
      /**
       * @summary 画布区域的左上角纵坐标
       */
      y?: number;
      /**
       * @summary 画布区域的宽度
       */
      width?: number;
      /**
       * @summary 画布区域的高度
       */
      height?: number;
      /**
       * @summary 输出的图片的宽度
       */
      destWidth?: number;
      /**
       * @summary 输出的图片的高度
       */
      destHeight?: number;
      /**
       * @summary 目标文件的类型
       */
      fileType?: 'jpg' | 'png';
      /**
       * @summary 图片的质量
       * @description 目前仅对 jpg 有效，取值范围为 (0, 1]，不在范围内时当作 1 处理。
       */
      quality?: number;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 生成文件的临时路径
         */
        tempFilePath: string;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 生成文件的临时路径
               */
              tempFilePath: string;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 生成文件的临时路径
       */
      tempFilePath: string;
    }>;
    /**
     * @summary 使用矩阵多次叠加当前变换的方法
     * @description 使用矩阵多次叠加当前变换的方法，矩阵由方法的参数进行描述
     */
    transform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    /**
     * @summary 对当前网格添加平移变换的方法
     */
    translate(x: number, y: number): void;
  }
  export interface Canvas {
    /**
     * @summary 画布高度
     */
    readonly height: number;
    /**
     * @summary 返回该元素的像素高度
     * @description 高度包含该元素的垂直内边距和边框，且是一个整数。
     */
    readonly offsetHeight: number;
    /**
     * @summary 返回该元素的布局宽度
     * @description 是测量包含元素的边框(border)、水平线上的内边距(padding)、竖直方向滚动条(scrollbar)（如果存在的话）、以及CSS设置的宽度(width)的值。
     */
    readonly offsetWidth: number;
    /**
     * @summary 画布宽度
     */
    readonly width: number;
    /**
     * @summary 取消由 requestAnimationFrame 添加的动画帧请求的方法
     */
    cancelAnimationFrame(requestId: number): void;
    /**
     * @summary 创建一个图片对象的方法
     */
    createImage(): CanvasImage;
    /**
     * @summary 返回 canvas 的绘制上下文
     */
    getContext(contextId: '2d'): CanvasRenderingContext2D;
    /**
     * @summary 返回 canvas 的绘制上下文
     */
    getContext(contextId: 'webgl', options?: WebGLContextAttributes): WebGLRenderingContext;
    /**
     * @summary 录制视频
     */
    getVideoRecorder(): CanvasVideoRecorder;
    /**
     * @summary 在下次重绘时执行的方法
     */
    requestAnimationFrame(callback: (timestamp: number) => void): number;
    /**
     * @summary 把画布上的绘制内容以一个 data URI 的格式返回
     */
    toDataURL(type: 'image/png' | ' image/jpeg', quality: number): string;
    /**
     * @summary 画布导出生成图片的方法
     */
    toTempFilePath(r?: {
      /**
       * @summary 指定的画布区域的左上角横坐标
       */
      x?: number;
      /**
       * @summary 指定的画布区域的左上角纵坐标
       */
      y?: number;
      /**
       * @summary 指定的画布区域的宽度
       */
      width?: number;
      /**
       * @summary 指定的画布区域的高度
       */
      height?: number;
      /**
       * @summary 输出的图片的宽度
       */
      destWidth?: number;
      /**
       * @summary 输出的图片的高度
       */
      destHeight?: number;
      /**
       * @summary 目标文件的类型
       */
      fileType?: 'jpg' | 'png';
      /**
       * @summary 图片的质量
       * @description 目前仅对 jpg 有效，取值范围为 (0, 1]，不在范围内时当作 1 处理。
       */
      quality?: number;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 生成文件的临时路径
         */
        tempFilePath: string;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: {
        /**
         * @summary 错误码
         */
        error: number;
        /**
         * @summary 错误信息
         */
        errorMessage: string;
      }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 生成文件的临时路径
               */
              tempFilePath: string;
            }
          | {
              /**
               * @summary 错误码
               */
              error: number;
              /**
               * @summary 错误信息
               */
              errorMessage: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 生成文件的临时路径
       */
      tempFilePath: string;
    }>;
  }
  export interface OffScreenCanvas {
    /**
     * @summary 画布高度
     */
    readonly height: number;
    /**
     * @summary 画布宽度
     */
    readonly width: number;
    /**
     * @summary 取消由 requestAnimationFrame 添加的动画帧请求的方法
     */
    cancelAnimationFrame(requestId: number): void;
    /**
     * @summary 创建一个图片对象的方法
     */
    createImage(): CanvasImage;
    /**
     * @summary 返回 canvas 的绘制上下文
     */
    getContext(contextId: '2d'): CanvasRenderingContext2D;
    /**
     * @summary 返回 canvas 的绘制上下文
     */
    getContext(contextId: 'webgl', options?: WebGLContextAttributes): WebGLRenderingContext;
    /**
     * @summary 在下次重绘时执行的方法
     */
    requestAnimationFrame(callback: (timestamp: number) => void): number;
    /**
     * @summary 把画布上的绘制内容以一个 data URI 的格式返回
     */
    toDataURL(type: 'image/png' | ' image/jpeg', quality: number): string;
    /**
     * @summary 画布导出生成图片的方法
     */
    toTempFilePath(r?: {
      /**
       * @summary 指定的画布区域的左上角横坐标
       */
      x?: number;
      /**
       * @summary 指定的画布区域的左上角纵坐标
       */
      y?: number;
      /**
       * @summary 指定的画布区域的宽度
       */
      width?: number;
      /**
       * @summary 指定的画布区域的高度
       */
      height?: number;
      /**
       * @summary 输出的图片的宽度
       */
      destWidth?: number;
      /**
       * @summary 输出的图片的高度
       */
      destHeight?: number;
      /**
       * @summary 目标文件的类型
       */
      fileType?: 'jpg' | 'png';
      /**
       * @summary 图片的质量
       * @description 目前仅对 jpg 有效，取值范围为 (0, 1]，不在范围内时当作 1 处理。
       */
      quality?: number;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 生成文件的临时路径
         */
        tempFilePath: string;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: {
        /**
         * @summary 错误码
         */
        error: number;
        /**
         * @summary 错误信息
         */
        errorMessage: string;
      }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 生成文件的临时路径
               */
              tempFilePath: string;
            }
          | {
              /**
               * @summary 错误码
               */
              error: number;
              /**
               * @summary 错误信息
               */
              errorMessage: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 生成文件的临时路径
       */
      tempFilePath: string;
    }>;
  }
  export interface CanvasRenderingContext2D {
    /**
     * @summary canvas 对象
     * @description 给定上下文关联的 canvas 对象的只读引用
     */
    readonly canvas: Canvas;
    /**
     * @summary 使用内部方式描述颜色和样式的属性
     */
    readonly fillStyle: string;
    /**
     * @summary 模糊、灰度等过滤效果的属性
     */
    readonly filter: string;
    /**
     * @summary 当前字体样式的属性
     * @description 描述绘制文字时，当前字体样式的属性
     */
    readonly font: string;
    /**
     * @summary 设置图形和图片透明度的属性
     */
    readonly globalAlpha: number;
    /**
     * @summary 设置应用的合成操作的类型
     */
    readonly globalCompositeOperation:
      | 'source-over'
      | 'source-atop'
      | 'source-in'
      | 'source-out'
      | 'destination-over'
      | 'destination-atop'
      | 'destination-in'
      | 'destination-out'
      | 'lighter';
    /**
     * @summary 设置图片是否平滑的属性
     */
    readonly imageSmoothingEnabled: boolean;
    /**
     * @summary 设置绘制每一条线段末端的属性
     */
    readonly lineCap: 'butt' | 'round' | 'square';
    /**
     * @summary 设置虚线偏移量的属性
     * @description 例如可以实现 “蚂蚁线“ 的效果
     */
    readonly lineDashOffset: number;
    /**
     * @summary 设置 2 个（线段，圆弧，曲线）如何连接在一起的属性
     */
    readonly lineJoin: 'round' | 'bevel' | 'miter';
    /**
     * @summary 设置线段厚度的属性（即线段的宽度）
     */
    readonly lineWidth: number;
    /**
     * @summary 设置斜接面限制比例的属性
     */
    readonly miterLimit: number;
    /**
     * @summary 描述模糊效果程度的属性
     */
    readonly shadowBlur: number;
    /**
     * @summary 描述阴影颜色的属性
     */
    readonly shadowColor: string;
    /**
     * @summary 描述阴影水平偏移距离的属性
     */
    readonly shadowOffsetX: number;
    /**
     * @summary 描述阴影垂直偏移距离的属性
     */
    readonly shadowOffsetY: number;
    /**
     * @summary 描述画笔（绘制图形）颜色或者样式的属性
     */
    readonly strokeStyle: string;
    /**
     * @summary 文本的对齐方式的属性
     */
    readonly textAlign: 'right' | 'left' | 'center' | 'start' | 'end';
    /**
     * @summary 当前文本基线的属性
     */
    readonly textBaseline: 'top' | 'bottom' | 'alphabetic' | 'hanging' | 'ideographic' | 'middle';
    /**
     * @summary 绘制圆弧路径的方法
     * @description 圆弧路径的圆心在 (x, y) 位置，半径为 r ，根据anticlockwise （默认为顺时针）指定的方向从 startAngle 开始绘制，到 endAngle 结束。
     */
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    /**
     * @summary 绘制圆弧路径的方法
     * @description 根据控制点和半径绘制圆弧路径，使用当前的描点(前一个moveTo或lineTo等函数的止点)。根据当前描点与给定的控制点1连接的直线，和控制点1与控制点2连接的直线，作为使用指定半径的圆的切线，画出两条切线之间的弧线路径。
     */
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    /**
     * @summary 通过清空子路径列表开始一个新路径的方法
     * @description 当你想创建一个新的路径时，调用此方法。
     */
    beginPath(): void;
    /**
     * @summary 绘制三次贝赛尔曲线路径的方法
     * @description 该方法需要三个点。 第一、第二个点是控制点，第三个点是结束点。起始点是当前路径的最后一个点，绘制贝赛尔曲线前，可以通过调用 moveTo() 进行修改。
     */
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    /**
     * @summary 清除矩形区域
     * @description 通过把像素设置为透明以达到擦除一个矩形区域的方法
     */
    clearRect(x: number, y: number, width: number, height: number): void;
    /**
     * @summary 快速清屏
     */
    clearScreen(): void;
    /**
     * @summary 将当前创建的路径设置为当前剪切路径的方法
     */
    clip(fillRule?: TMYCanvasFillRule): void;
    /**
     * @summary 将当前创建的路径设置为当前剪切路径的方法
     */
    clip(path: Path2D, fillRule?: TMYCanvasFillRule): void;
    /**
     * @summary 将笔点返回到当前子路径起始点的方法
     * @description 它尝试从当前点到起始点绘制一条直线。 如果图形已经是封闭的或者只有一个点，那么此方法不会做任何操作。
     */
    closePath(): void;
    /**
     * @summary 创建一个指定大小的 ImageData 对象
     */
    createImageData(width: number, height: number, imagedata: ImageData): ImageData;
    /**
     * @summary 创建一个沿参数坐标指定的直线的渐变
     */
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
    /**
     * @summary 创建 Path2D 对象
     */
    createPath2D(): Path2D;
    /**
     * @summary 使用指定的图像创建模式的方法
     */
    createPattern(image: TMYCanvasImageSource, repetition: string | null): CanvasPattern | null;
    /**
     * @summary 绘制放射性渐变的方法
     * @description 根据参数确定两个圆的坐标，绘制放射性渐变的方法
     */
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
    /**
     * @summary 绘制图像的方法
     * @description 用于将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中
     */
    draw(reserve: boolean, callback?: () => void): void;
    /**
     * @summary 绘制图像的方法
     * @description 用户绘制图像，图像保持原始尺寸
     */
    drawImage(image: TMYCanvasImageSource, dx: number, dy: number): void;
    /**
     * @summary 绘制图像的方法
     * @description 用户绘制图像，图像保持原始尺寸
     */
    drawImage(image: TMYCanvasImageSource, dx: number, dy: number, dWidth: number, dHeight: number): void;
    /**
     * @summary 绘制图像的方法
     * @description 用户绘制图像，图像保持原始尺寸
     */
    drawImage(image: TMYCanvasImageSource, sx: number, sy: number, sWidth: number, sHeight: number, dx: number, dy: number, dWidth: number, dHeight: number): void;
    /**
     * @summary 添加椭圆路径的方法
     * @description 椭圆的圆心在（x,y）位置，半径分别是radiusX 和 radiusY ，按照anticlockwise（默认顺时针）指定的方向，从 startAngle  开始绘制，到 endAngle 结束。
     */
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
    /**
     * @summary 根据当前的填充样式填充当前或已存在的路径的方法
     */
    fill(fillRule?: TMYCanvasFillRule): void;
    /**
     * @summary 根据当前的填充样式填充当前或已存在的路径的方法
     */
    fill(path: Path2D, fillRule?: TMYCanvasFillRule): void;
    /**
     * @summary 绘制填充矩形的方法
     */
    fillRect(x: number, y: number, width: number, height: number): void;
    /**
     * @summary 填充文本的方法
     */
    fillText(text: string, x: number, y: number, maxWidth?: number): void;
    /**
     * @summary 返回一个 ImageData 对象
     * @description 返回一个 ImageData 对象，用来描述canvas区域隐含的像素数据
     */
    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;
    /**
     * @summary 获取当前线段样式的方法
     */
    getLineDash(): number[];
    /**
     * @summary 获取当前被应用到上下文的转换矩阵
     */
    getTransform(): DOMMatrix;
    /**
     * @summary 使用直线连接子路径的终点到某个坐标的方法
     * @description 并不会真正地绘制。
     */
    lineTo(x: number, y: number): void;
    /**
     * @summary 返回一个文本包含的信息
     */
    measureText(text: string): {
      /**
       * @summary 文本的宽度
       * @description 使用 CSS 像素计算的内联字符串的宽度
       */
      width: number;
    };
    /**
     * @summary 将一个新的子路径的起始点移动到某个坐标的方法
     */
    moveTo(x: number, y: number): void;
    /**
     * @summary 将数据从已有的 ImageData 对象绘制到位图的方法
     */
    putImageData(imagedata: ImageData, dx: number, dy: number): void;
    /**
     * @summary 将数据从已有的 ImageData 对象绘制到位图的方法
     */
    putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void;
    /**
     * @summary 新增二次贝塞尔曲线路径的方法
     */
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    /**
     * @summary 创建矩形路径的方法
     * @description 创建矩形路径的方法，矩形的起点位置是 (x, y) ，尺寸为 width 和 height。矩形的4个点通过直线连接，子路径做为闭合的标记，所以你可以填充或者描边矩形。
     */
    rect(x: number, y: number, w: number, h: number): void;
    /**
     * @summary 使用单位矩阵重新设置当前变形的方法
     */
    resetTransform(): void;
    /**
     * @summary 变换画布宽高
     */
    resize(width: number, height: number): void;
    /**
     * @summary 将 canvas 恢复到最近的保存状态的方法
     * @description 通过在绘图状态栈中弹出顶端的状态, 将 canvas 恢复到最近的保存状态的方法
     */
    restore(): void;
    /**
     * @summary 在变换矩阵中增加旋转的方法
     */
    rotate(angle: number): void;
    /**
     * @summary 保存 canvas 全部状态的方法
     * @description 通过将当前状态放入栈中, 保存 canvas 全部状态的方法
     */
    save(): void;
    /**
     * @summary 添加缩放变换的方法
     * @description 根据 x 水平方向和 y 垂直方向，为 canvas 单位添加缩放变换的方法
     */
    scale(x: number, y: number): void;
    /**
     * @summary 在填充线时使用虚线模式
     */
    setLineDash(segments: number[]): void;
    /**
     * @summary 重新设置当前的变换并调用变换的方法
     * @description 使用单位矩阵重新设置当前的变换并调用变换的方法
     */
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    /**
     * @summary 根据当前的画线样式绘制当前或已经存在的路径的方法
     * @description 使用非零环绕规则,根据当前的画线样式绘制当前或已经存在的路径的方法
     */
    stroke(): void;
    /**
     * @summary 根据当前的画线样式绘制当前或已经存在的路径的方法
     * @description 使用非零环绕规则,根据当前的画线样式绘制当前或已经存在的路径的方法
     */
    stroke(path: Path2D): void;
    /**
     * @summary 描绘一个的矩形的方法
     */
    strokeRect(x: number, y: number, width: number, height: number): void;
    /**
     * @summary 绘制文本的方法
     */
    strokeText(text: string, x: number, y: number, maxWidth?: number): void;
    /**
     * @summary 画布上的绘制内容以 data URI 的格式返回
     */
    toDataURL(type: 'image/png' | ' image/jpeg', quality: number): string;
    /**
     * @summary 使用矩阵多次叠加当前变换的方法
     * @description 使用矩阵多次叠加当前变换的方法，矩阵由方法的参数进行描述
     */
    transform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    /**
     * @summary 对当前网格添加平移变换的方法
     */
    translate(x: number, y: number): void;
  }
  export interface WebGLRenderingContext {
    readonly ACTIVE_ATTRIBUTES: 35721;
    readonly ACTIVE_TEXTURE: 34016;
    readonly ACTIVE_UNIFORMS: 35718;
    readonly ALIASED_LINE_WIDTH_RANGE: 33902;
    readonly ALIASED_POINT_SIZE_RANGE: 33901;
    readonly ALPHA: 6406;
    readonly ALPHA_BITS: 3413;
    readonly ALWAYS: 519;
    readonly ARRAY_BUFFER: 34962;
    readonly ARRAY_BUFFER_BINDING: 34964;
    readonly ATTACHED_SHADERS: 35717;
    readonly BACK: 1029;
    readonly BLEND: 3042;
    readonly BLEND_COLOR: 32773;
    readonly BLEND_DST_ALPHA: 32970;
    readonly BLEND_DST_RGB: 32968;
    readonly BLEND_EQUATION: 32777;
    readonly BLEND_EQUATION_ALPHA: 34877;
    readonly BLEND_EQUATION_RGB: 32777;
    readonly BLEND_SRC_ALPHA: 32971;
    readonly BLEND_SRC_RGB: 32969;
    readonly BLUE_BITS: 3412;
    readonly BOOL: 35670;
    readonly BOOL_VEC2: 35671;
    readonly BOOL_VEC3: 35672;
    readonly BOOL_VEC4: 35673;
    readonly BROWSER_DEFAULT_WEBGL: 37444;
    readonly BUFFER_SIZE: 34660;
    readonly BUFFER_USAGE: 34661;
    readonly BYTE: 5120;
    /**
     * @summary canvas 对象
     * @description 给定上下文关联的 canvas 对象的只读引用
     */
    readonly canvas: Canvas;
    readonly CCW: 2305;
    readonly CLAMP_TO_EDGE: 33071;
    readonly COLOR_ATTACHMENT0: 36064;
    readonly COLOR_BUFFER_BIT: 16384;
    readonly COLOR_CLEAR_VALUE: 3106;
    readonly COLOR_WRITEMASK: 3107;
    readonly COMPILE_STATUS: 35713;
    readonly COMPRESSED_TEXTURE_FORMATS: 34467;
    readonly CONSTANT_ALPHA: 32771;
    readonly CONSTANT_COLOR: 32769;
    readonly CONTEXT_LOST_WEBGL: 37442;
    readonly CULL_FACE: 2884;
    readonly CULL_FACE_MODE: 2885;
    readonly CURRENT_PROGRAM: 35725;
    readonly CURRENT_VERTEX_ATTRIB: 34342;
    readonly CW: 2304;
    readonly DECR: 7683;
    readonly DECR_WRAP: 34056;
    readonly DELETE_STATUS: 35712;
    readonly DEPTH_ATTACHMENT: 36096;
    readonly DEPTH_BITS: 3414;
    readonly DEPTH_BUFFER_BIT: 256;
    readonly DEPTH_CLEAR_VALUE: 2931;
    readonly DEPTH_COMPONENT: 6402;
    readonly DEPTH_COMPONENT16: 33189;
    readonly DEPTH_FUNC: 2932;
    readonly DEPTH_RANGE: 2928;
    readonly DEPTH_STENCIL: 34041;
    readonly DEPTH_STENCIL_ATTACHMENT: 33306;
    readonly DEPTH_TEST: 2929;
    readonly DEPTH_WRITEMASK: 2930;
    readonly DITHER: 3024;
    readonly DONT_CARE: 4352;
    /**
     * @summary 当前绘图缓冲区的实际高度
     * @description 它应当匹配与绘图上下文相关联的 <canvas> 元素的高度属性， 如果实现未能提供所要求的高度，其值将有所不同。
     */
    readonly drawingBufferHeight: number;
    /**
     * @summary 当前绘图缓冲区的实际宽度
     * @description 它应当匹配与绘图上下文相关联的 <canvas> 元素的宽度属性。如果实现未能提供所要求的宽度，值将有所不同。
     */
    readonly drawingBufferWidth: number;
    readonly DST_ALPHA: 772;
    readonly DST_COLOR: 774;
    readonly DYNAMIC_DRAW: 35048;
    readonly ELEMENT_ARRAY_BUFFER: 34963;
    readonly ELEMENT_ARRAY_BUFFER_BINDING: 34965;
    readonly EQUAL: 514;
    readonly FASTEST: 4353;
    readonly FLOAT: 5126;
    readonly FLOAT_MAT2: 35674;
    readonly FLOAT_MAT3: 35675;
    readonly FLOAT_MAT4: 35676;
    readonly FLOAT_VEC2: 35664;
    readonly FLOAT_VEC3: 35665;
    readonly FLOAT_VEC4: 35666;
    readonly FRAGMENT_SHADER: 35632;
    readonly FRAMEBUFFER: 36160;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 36049;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 36051;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 36050;
    readonly FRAMEBUFFER_BINDING: 36006;
    readonly FRAMEBUFFER_COMPLETE: 36053;
    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 36054;
    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 36057;
    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 36055;
    readonly FRAMEBUFFER_UNSUPPORTED: 36061;
    readonly FRONT: 1028;
    readonly FRONT_AND_BACK: 1032;
    readonly FRONT_FACE: 2886;
    readonly FUNC_ADD: 32774;
    readonly FUNC_REVERSE_SUBTRACT: 32779;
    readonly FUNC_SUBTRACT: 32778;
    readonly GENERATE_MIPMAP_HINT: 33170;
    readonly GEQUAL: 518;
    readonly GREATER: 516;
    readonly GREEN_BITS: 3411;
    readonly HIGH_FLOAT: 36338;
    readonly HIGH_INT: 36341;
    readonly IMPLEMENTATION_COLOR_READ_FORMAT: 35739;
    readonly IMPLEMENTATION_COLOR_READ_TYPE: 35738;
    readonly INCR: 7682;
    readonly INCR_WRAP: 34055;
    readonly INT: 5124;
    readonly INT_VEC2: 35667;
    readonly INT_VEC3: 35668;
    readonly INT_VEC4: 35669;
    readonly INVALID_ENUM: 1280;
    readonly INVALID_FRAMEBUFFER_OPERATION: 1286;
    readonly INVALID_OPERATION: 1282;
    readonly INVALID_VALUE: 1281;
    readonly INVERT: 5386;
    readonly KEEP: 7680;
    readonly LEQUAL: 515;
    readonly LESS: 513;
    readonly LINE_LOOP: 2;
    readonly LINE_STRIP: 3;
    readonly LINE_WIDTH: 2849;
    readonly LINEAR: 9729;
    readonly LINEAR_MIPMAP_LINEAR: 9987;
    readonly LINEAR_MIPMAP_NEAREST: 9985;
    readonly LINES: 1;
    readonly LINK_STATUS: 35714;
    readonly LOW_FLOAT: 36336;
    readonly LOW_INT: 36339;
    readonly LUMINANCE: 6409;
    readonly LUMINANCE_ALPHA: 6410;
    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: 35661;
    readonly MAX_CUBE_MAP_TEXTURE_SIZE: 34076;
    readonly MAX_FRAGMENT_UNIFORM_VECTORS: 36349;
    readonly MAX_RENDERBUFFER_SIZE: 34024;
    readonly MAX_TEXTURE_IMAGE_UNITS: 34930;
    readonly MAX_TEXTURE_SIZE: 3379;
    readonly MAX_VARYING_VECTORS: 36348;
    readonly MAX_VERTEX_ATTRIBS: 34921;
    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: 35660;
    readonly MAX_VERTEX_UNIFORM_VECTORS: 36347;
    readonly MAX_VIEWPORT_DIMS: 3386;
    readonly MEDIUM_FLOAT: 36337;
    readonly MEDIUM_INT: 36340;
    readonly MIRRORED_REPEAT: 33648;
    readonly NEAREST: 9728;
    readonly NEAREST_MIPMAP_LINEAR: 9986;
    readonly NEAREST_MIPMAP_NEAREST: 9984;
    readonly NEVER: 512;
    readonly NICEST: 4354;
    readonly NO_ERROR: 0;
    readonly NONE: 0;
    readonly NOTEQUAL: 517;
    readonly ONE: 1;
    readonly ONE_MINUS_CONSTANT_ALPHA: 32772;
    readonly ONE_MINUS_CONSTANT_COLOR: 32770;
    readonly ONE_MINUS_DST_ALPHA: 773;
    readonly ONE_MINUS_DST_COLOR: 775;
    readonly ONE_MINUS_SRC_ALPHA: 771;
    readonly ONE_MINUS_SRC_COLOR: 769;
    readonly OUT_OF_MEMORY: 1285;
    readonly PACK_ALIGNMENT: 3333;
    readonly POINTS: 0;
    readonly POLYGON_OFFSET_FACTOR: 32824;
    readonly POLYGON_OFFSET_FILL: 32823;
    readonly POLYGON_OFFSET_UNITS: 10752;
    readonly RED_BITS: 3410;
    readonly RENDERBUFFER: 36161;
    readonly RENDERBUFFER_ALPHA_SIZE: 36179;
    readonly RENDERBUFFER_BINDING: 36007;
    readonly RENDERBUFFER_BLUE_SIZE: 36178;
    readonly RENDERBUFFER_DEPTH_SIZE: 36180;
    readonly RENDERBUFFER_GREEN_SIZE: 36177;
    readonly RENDERBUFFER_HEIGHT: 36163;
    readonly RENDERBUFFER_INTERNAL_FORMAT: 36164;
    readonly RENDERBUFFER_RED_SIZE: 36176;
    readonly RENDERBUFFER_STENCIL_SIZE: 36181;
    readonly RENDERBUFFER_WIDTH: 36162;
    readonly RENDERER: 7937;
    readonly REPEAT: 10497;
    readonly REPLACE: 7681;
    readonly RGB: 6407;
    readonly RGB5_A1: 32855;
    readonly RGB565: 36194;
    readonly RGBA: 6408;
    readonly RGBA4: 32854;
    readonly SAMPLE_ALPHA_TO_COVERAGE: 32926;
    readonly SAMPLE_BUFFERS: 32936;
    readonly SAMPLE_COVERAGE: 32928;
    readonly SAMPLE_COVERAGE_INVERT: 32939;
    readonly SAMPLE_COVERAGE_VALUE: 32938;
    readonly SAMPLER_2D: 35678;
    readonly SAMPLER_CUBE: 35680;
    readonly SAMPLES: 32937;
    readonly SCISSOR_BOX: 3088;
    readonly SCISSOR_TEST: 3089;
    readonly SHADER_TYPE: 35663;
    readonly SHADING_LANGUAGE_VERSION: 35724;
    readonly SHORT: 5122;
    readonly SRC_ALPHA: 770;
    readonly SRC_ALPHA_SATURATE: 776;
    readonly SRC_COLOR: 768;
    readonly STATIC_DRAW: 35044;
    readonly STENCIL_ATTACHMENT: 36128;
    readonly STENCIL_BACK_FAIL: 34817;
    readonly STENCIL_BACK_FUNC: 34816;
    readonly STENCIL_BACK_PASS_DEPTH_FAIL: 34818;
    readonly STENCIL_BACK_PASS_DEPTH_PASS: 34819;
    readonly STENCIL_BACK_REF: 36003;
    readonly STENCIL_BACK_VALUE_MASK: 36004;
    readonly STENCIL_BACK_WRITEMASK: 36005;
    readonly STENCIL_BITS: 3415;
    readonly STENCIL_BUFFER_BIT: 1024;
    readonly STENCIL_CLEAR_VALUE: 2961;
    readonly STENCIL_FAIL: 2964;
    readonly STENCIL_FUNC: 2962;
    readonly STENCIL_INDEX8: 36168;
    readonly STENCIL_PASS_DEPTH_FAIL: 2965;
    readonly STENCIL_PASS_DEPTH_PASS: 2966;
    readonly STENCIL_REF: 2967;
    readonly STENCIL_TEST: 2960;
    readonly STENCIL_VALUE_MASK: 2963;
    readonly STENCIL_WRITEMASK: 2968;
    readonly STREAM_DRAW: 35040;
    readonly SUBPIXEL_BITS: 3408;
    readonly TEXTURE: 5890;
    readonly TEXTURE_2D: 3553;
    readonly TEXTURE_BINDING_2D: 32873;
    readonly TEXTURE_BINDING_CUBE_MAP: 34068;
    readonly TEXTURE_CUBE_MAP: 34067;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: 34070;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: 34072;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: 34074;
    readonly TEXTURE_CUBE_MAP_POSITIVE_X: 34069;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: 34071;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: 34073;
    readonly TEXTURE_MAG_FILTER: 10240;
    readonly TEXTURE_MIN_FILTER: 10241;
    readonly TEXTURE_WRAP_S: 10242;
    readonly TEXTURE_WRAP_T: 10243;
    readonly TEXTURE0: 33984;
    readonly TEXTURE1: 33985;
    readonly TEXTURE10: 33994;
    readonly TEXTURE11: 33995;
    readonly TEXTURE12: 33996;
    readonly TEXTURE13: 33997;
    readonly TEXTURE14: 33998;
    readonly TEXTURE15: 33999;
    readonly TEXTURE16: 34000;
    readonly TEXTURE17: 34001;
    readonly TEXTURE18: 34002;
    readonly TEXTURE19: 34003;
    readonly TEXTURE2: 33986;
    readonly TEXTURE20: 34004;
    readonly TEXTURE21: 34005;
    readonly TEXTURE22: 34006;
    readonly TEXTURE23: 34007;
    readonly TEXTURE24: 34008;
    readonly TEXTURE25: 34009;
    readonly TEXTURE26: 34010;
    readonly TEXTURE27: 34011;
    readonly TEXTURE28: 34012;
    readonly TEXTURE29: 34013;
    readonly TEXTURE3: 33987;
    readonly TEXTURE30: 34014;
    readonly TEXTURE31: 34015;
    readonly TEXTURE4: 33988;
    readonly TEXTURE5: 33989;
    readonly TEXTURE6: 33990;
    readonly TEXTURE7: 33991;
    readonly TEXTURE8: 33992;
    readonly TEXTURE9: 33993;
    readonly TRIANGLE_FAN: 6;
    readonly TRIANGLE_STRIP: 5;
    readonly TRIANGLES: 4;
    readonly UNPACK: 37443;
    readonly UNPACK_ALIGNMENT: 3317;
    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: 37443;
    readonly UNPACK_FLIP_Y_WEBGL: 37440;
    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: 37441;
    readonly UNSIGNED_BYTE: 5121;
    readonly UNSIGNED_INT: 5125;
    readonly UNSIGNED_SHORT: 5123;
    readonly UNSIGNED_SHORT_4_4_4_4: 32819;
    readonly UNSIGNED_SHORT_5_5_5_1: 32820;
    readonly UNSIGNED_SHORT_5_6_5: 33635;
    readonly VALIDATE_STATUS: 35715;
    readonly VENDOR: 7936;
    readonly VERSION: 7938;
    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 34975;
    readonly VERTEX_ATTRIB_ARRAY_ENABLED: 34338;
    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: 34922;
    readonly VERTEX_ATTRIB_ARRAY_POINTER: 34373;
    readonly VERTEX_ATTRIB_ARRAY_SIZE: 34339;
    readonly VERTEX_ATTRIB_ARRAY_STRIDE: 34340;
    readonly VERTEX_ATTRIB_ARRAY_TYPE: 34341;
    readonly VERTEX_SHADER: 35633;
    readonly VIEWPORT: 2978;
    readonly ZERO: 0;
    /**
     * @summary 激活指定的纹理单元
     */
    activeTexture(texture: TMYGLenum): void;
    /**
     * @summary 往 WebGLProgram 添加一个片段或者顶点着色器
     */
    attachShader(program: WebGLProgram, shader: WebGLShader): void;
    /**
     * @summary 将通用顶点索引绑定到属性变量
     */
    bindAttribLocation(program: WebGLProgram, index: TMYGLuint, name: string): void;
    /**
     * @summary 将给定的 WebGLBuffer 绑定到目标
     */
    bindBuffer(target: TMYGLenum, buffer: WebGLBuffer | null): void;
    /**
     * @summary 将给定的 WebGLFramebuffer 绑定到目标
     */
    bindFramebuffer(target: TMYGLenum, framebuffer: WebGLFramebuffer | null): void;
    /**
     * @summary 将给定的 WebGLRenderbuffer 绑定到目标
     * @description 它必须是 gl.RENDERBUFFER
     */
    bindRenderbuffer(target: TMYGLenum, renderbuffer: WebGLRenderbuffer | null): void;
    /**
     * @summary 将给定的 WebGLTexture 绑定到目标
     */
    bindTexture(target: TMYGLenum, texture: WebGLTexture | null): void;
    /**
     * @summary 用于设置源和目标混合因子
     */
    blendColor(red: TMYGLclampf, green: TMYGLclampf, blue: TMYGLclampf, alpha: TMYGLclampf): void;
    /**
     * @summary 将 RGB 混合方程和 alpha 混合方程设置为单个方程
     * @description 混合方程式确定新像素如何与 WebGLFramebuffer 中的像素组合
     */
    blendEquation(mode: TMYGLenum): void;
    /**
     * @summary 设置 RGB 混合方程和 alpha 混合方程
     * @description 混合方程决定了新像素如何与 WebGLFramebuffer 中已有的像素组合
     */
    blendEquationSeparate(modeRGB: TMYGLenum, modeAlpha: TMYGLenum): void;
    /**
     * @summary 定义混合像素算法的函数
     */
    blendFunc(sfactor: TMYGLenum, dfactor: TMYGLenum): void;
    /**
     * @summary 定义混合 RGB 和 alpha 分量的像素算术的函数
     */
    blendFuncSeparate(srcRGB: TMYGLenum, dstRGB: TMYGLenum, srcAlpha: TMYGLenum, dstAlpha: TMYGLenum): void;
    /**
     * @summary 创建并初始化 Buffer 对象的数据存储区
     */
    bufferData(target: TMYGLenum, size: TMYGLsizeiptr, usage: TMYGLenum): void;
    /**
     * @summary 创建并初始化 Buffer 对象的数据存储区
     */
    bufferData(target: TMYGLenum, srcData: TMYBufferSource | null, usage: TMYGLenum): void;
    /**
     * @summary 更新缓冲区对象的数据存储的子集
     */
    bufferSubData(target: TMYGLenum, offset: TMYGLintptr, srcData: TMYBufferSource): void;
    /**
     * @summary 返回 WebGLFramebuffer 对象的完整性状态
     */
    checkFramebufferStatus(target: TMYGLenum): TMYGLenum;
    /**
     * @summary 使用预设值来清空缓冲区
     */
    clear(mask: TMYGLbitfield): void;
    /**
     * @summary 用于设置清空颜色缓冲时的颜色值
     * @description 这指定调用 clear() 方法时使用的颜色值。这些值在 0 到 1 的范围间。
     */
    clearColor(red: TMYGLclampf, green: TMYGLclampf, blue: TMYGLclampf, alpha: TMYGLclampf): void;
    /**
     * @summary 用于设置深度缓冲区的深度清除值
     * @description 这个深度清除值的设定，是为了调用clear() 的时候使用，这个值的范围是 0 到 1。
     */
    clearDepth(depth: TMYGLclampf): void;
    /**
     * @summary 指定模板缓冲区的清除值
     */
    clearStencil(s: TMYGLint): void;
    /**
     * @summary 设置在绘制或渲染到 WebGLFramebuffer 时启用或禁用哪些颜色组件
     */
    colorMask(red: TMYGLboolean, green: TMYGLboolean, blue: TMYGLboolean, alpha: TMYGLboolean): void;
    /**
     * @summary 编译 GLSL 着色器
     * @description 编译一个 GLSL 着色器，使其成为为二进制数据，然后就可以被 WebGLProgram 对象所使用。
     */
    compileShader(shader: WebGLShader): void;
    /**
     * @summary 压缩二维或三维纹理图像的格式
     */
    compressedTexImage2D(target: TMYGLenum, level: TMYGLint, internalformat: TMYGLenum, width: TMYGLsizei, height: TMYGLsizei, border: TMYGLint, pixels: ArrayBufferView): void;
    /**
     * @summary 为压缩格式的纹理图像指定二维子矩形
     * @description 在使用此方法之前，必须通过 WebGL 扩展启用压缩图像格式。
     */
    compressedTexSubImage2D(
      target: TMYGLenum,
      level: TMYGLint,
      xoffset: TMYGLint,
      yoffset: TMYGLint,
      width: TMYGLsizei,
      height: TMYGLsizei,
      format: TMYGLenum,
      pixels: ArrayBufferView,
    ): void;
    /**
     * @summary 将像素从当前 WebGLFramebuffer 复制到 2D 纹理图像中
     */
    copyTexImage2D(target: TMYGLenum, level: TMYGLint, internalformat: TMYGLenum, x: TMYGLint, y: TMYGLint, width: TMYGLsizei, height: TMYGLsizei, border: TMYGLint): void;
    /**
     * @summary 将像素从当前 WebGLFramebuffer 复制到现有的 2D 纹理子图像中
     */
    copyTexSubImage2D(target: TMYGLenum, level: TMYGLint, xoffset: TMYGLint, yoffset: TMYGLint, x: TMYGLint, y: TMYGLint, width: TMYGLsizei, height: TMYGLsizei): void;
    /**
     * @summary 创建并初始化一个用于储存顶点数据或着色数据的 WebGLBuffer 对象
     */
    createBuffer(): WebGLBuffer | null;
    /**
     * @summary 创建和初始化 WebGLFramebuffer 对象
     */
    createFramebuffer(): WebGLFramebuffer | null;
    /**
     * @summary 创建和初始化一个 WebGLProgram 对象
     */
    createProgram(): WebGLProgram | null;
    /**
     * @summary 创建并初始化一个 WebGLRenderbuffer 对象
     */
    createRenderbuffer(): WebGLRenderbuffer | null;
    /**
     * @summary 创建 WebGLShader 着色器对象
     * @description 该对象可以使用 WebGLRenderingContext.shaderSource() 和 WebGLRenderingContext.compileShader() 方法配置着色器代码。
     */
    createShader(type: TMYGLenum): WebGLShader | null;
    /**
     * @summary 创建并初始化 WebGLTexture 目标
     */
    createTexture(): WebGLTexture | null;
    /**
     * @summary 指定正面或背面多边形是否可以剔除
     */
    cullFace(mode: TMYGLenum): void;
    /**
     * @summary 删除给定的 WebGLBuffer 对象
     * @description 若给定的 WebGLBuffer 对象已经被删除了，调用该方法将不会产生任何效果。
     */
    deleteBuffer(buffer: WebGLBuffer | null): void;
    /**
     * @summary 删除给定的 WebGLFramebuffer 对象
     * @description 如果帧缓冲区已被删除，则此方法无效。
     */
    deleteFramebuffer(framebuffer: WebGLFramebuffer | null): void;
    /**
     * @summary 删除一个 WebGLProgram 对象
     * @description 如果该 WebGLProgram 对象已经被删除，该方法不会产生任何作用。
     */
    deleteProgram(program: WebGLProgram | null): void;
    /**
     * @summary 删除给定的 WebGLRenderbuffer 对象
     * @description 如果渲染缓冲区已被删除，则此方法无效。
     */
    deleteRenderbuffer(renderbuffer: WebGLRenderbuffer | null): void;
    /**
     * @summary 删除一个参数提供的 WebGLShader 对象
     * @description 如果该 WebGLShader 对象已经被删除，该方法不会有任何作用。
     */
    deleteShader(shader: WebGLShader | null): void;
    /**
     * @summary 删除指定的 WebGLTexture 对象
     * @description 如果纹理已被删除，则此方法无效。
     */
    deleteTexture(texture: WebGLTexture | null): void;
    /**
     * @summary 设置将输入像素深度与当前深度缓冲区值进行比较的函数
     */
    depthFunc(func: TMYGLenum): void;
    /**
     * @summary 设置是否启用写入深度缓冲
     */
    depthMask(flag: TMYGLboolean): void;
    /**
     * @summary 指定从标准化设备坐标到窗口或视口坐标的深度范围映射
     */
    depthRange(zNear: TMYGLclampf, zFar: TMYGLclampf): void;
    /**
     * @summary 从 WebGLProgram 中分离一个先前附加的片段或者顶点着色器
     */
    detachShader(program: WebGLProgram, shader: WebGLShader): void;
    /**
     * @summary 禁用此上下文的特定 WebGL 功能
     */
    disable(cap: TMYGLenum): void;
    /**
     * @summary 在给定的索引位置关闭通用顶点属性数组
     */
    disableVertexAttribArray(index: TMYGLuint): void;
    /**
     * @summary 用于从向量数组中绘制图元
     */
    drawArrays(mode: TMYGLenum, first: TMYGLint, count: TMYGLsizei): void;
    /**
     * @summary 从数组数据渲染图元
     */
    drawElements(mode: TMYGLenum, count: TMYGLsizei, type: TMYGLenum, offset: TMYGLintptr): void;
    /**
     * @summary 对该上下文开启某种特性
     */
    enable(cap: TMYGLenum): void;
    /**
     * @summary 指定索引处的通用顶点属性数组
     */
    enableVertexAttribArray(index: TMYGLuint): void;
    /**
     * @summary 阻止执行
     * @description 阻止执行，直到所有先前调用的命令都完成
     */
    finish(): void;
    /**
     * @summary 清空缓冲区命令
     * @description 清空缓冲区命令，使所有命令尽快执行
     */
    flush(): void;
    /**
     * @summary 将 WebGLRenderbuffer 对象附加到 WebGLFramebuffer 对象
     */
    framebufferRenderbuffer(target: TMYGLenum, attachment: TMYGLenum, renderbuffertarget: TMYGLenum, renderbuffer: WebGLRenderbuffer | null): void;
    /**
     * @summary 将纹理附加到 WebGLFramebuffer
     */
    framebufferTexture2D(target: TMYGLenum, attachment: TMYGLenum, textarget: TMYGLenum, texture: WebGLTexture | null, level: TMYGLint): void;
    /**
     * @summary 指定多边形是正面还是背面
     * @description 通过设置缠绕方向来指定多边形是正面还是背面
     */
    frontFace(mode: TMYGLenum): void;
    /**
     * @summary 为 WebGLTexture 对象生成一组 mipmap
     * @description Mipmaps 用于创建与对象的距离。
     * 较高分辨率的 mipmap 用于较近的对象，较低分辨率的 mipmap 用于较远的对象。
     * 它从纹理图像的分辨率开始，然后将分辨率减半，直到创建 1x1 尺寸的纹理图像。
     */
    generateMipmap(target: TMYGLenum): void;
    /**
     * @summary 返回 WebGLActiveInfo 对象
     * @description 返回一个包含大小、类型和顶点属性名称的 WebGLActiveInfo 对象，它通常在查询未知属性以进行调试或创建通用库时使用。
     */
    getActiveAttrib(program: WebGLProgram, index: TMYGLuint): WebGLActiveInfo | null;
    /**
     * @summary 返回 WebGLActiveInfo 对象
     * @description 其中包含统一属性的大小、类型和名称。它通常在查询未知制服以进行调试或创建通用库时使用。
     */
    getActiveUniform(program: WebGLProgram, index: TMYGLuint): WebGLActiveInfo | null;
    /**
     * @summary 返回附加到 WebGLProgram 的 WebGLShader 对象列表
     */
    getAttachedShaders(program: WebGLProgram): /**
     * @summary 附加到给定 WebGLProgram 的 WebGLShader 对象数组
     */ WebGLShader[] | null;
    /**
     * @summary 返回了给定 WebGLProgram 对象中某属性的下标指向位置
     */
    getAttribLocation(program: WebGLProgram, name: string): TMYGLint;
    /**
     * @summary 返回缓冲区的信息
     */
    getBufferParameter(
      target: TMYGLenum,
      pname: TMYGLenum,
    ): /**
     * @summary 取决于请求的信息
     * @description由 pname 指定
     */ TMYGLint | TMYGLenum;
    /**
     * @summary 返回 WebGLContextAttributes 对象
     * @description 返回一个包含实际上下文参数的 WebGLContextAttributes 对象，如果上下文丢失，可能返回 null。
     */
    getContextAttributes(): WebGLContextAttributes | null;
    /**
     * @summary 返回错误信息
     */
    getError(): TMYGLenum;
    /**
     * @summary 启用一个 WebGL 扩展
     */
    getExtension(name: string): unknown;
    /**
     * @summary 返回有关帧缓冲区附件的信息
     */
    getFramebufferAttachmentParameter(
      target: TMYGLenum,
      attachment: TMYGLenum,
      pname: TMYGLenum,
    ): /**
     * @summary 取决于请求的信息
     * @description 由 pname 指定，GLint、GLenum、WebGLRenderbuffer 或 WebGLTexture。
     */ TMYGLint | TMYGLenum | WebGLRenderbuffer | WebGLTexture;
    /**
     * @summary 为传入的参数名称返回一个值
     */
    getParameter(pname: TMYGLenum): unknown;
    /**
     * @summary 返回参数中指定的 WebGLProgram 对象的信息
     * @description 这些信息包括在 linking 过程中的错误以及 WebGLProgram 对象合法性检查的错误
     */
    getProgramInfoLog(program: WebGLProgram): /**
     * @summary 返回的信息
     * @description 这些信息包括在 linking 过程中的错误以及 WebGLProgram 对象合法性检查的错误
     */ string | null;
    /**
     * @summary 返回 WebGLProgram 的信息
     */
    getProgramParameter(program: WebGLProgram, pname: TMYGLenum): unknown;
    /**
     * @summary 返回有关渲染缓冲区的信息
     */
    getRenderbufferParameter(
      target: TMYGLenum,
      pname: TMYGLenum,
    ): /**
     * @summary 取决于请求的信息
     * @description 由 pname 指定
     */ TMYGLint | TMYGLenum;
    /**
     * @summary 返回指定 WebGLShader 对象的信息日志
     * @description 它包含警告、调试和编译信息。
     */
    getShaderInfoLog(shader: WebGLShader): /**
     * @summary 返回的信息
     * @description 其中包含有关上次编译操作的诊断消息、警告消息和其他信息。 最初创建 WebGLShader 对象时，其信息日志将是长度为 0 的字符串。
     */ string | null;
    /**
     * @summary 返回给定的着色器信息
     */
    getShaderParameter(shader: WebGLShader, pname: TMYGLenum): unknown;
    /**
     * @summary 返回 WebGLShaderPrecisionFormat 对象
     * @description 返回一个新的 WebGLShaderPrecisionFormat 对象，描述指定着色器数字格式的范围和精度
     */
    getShaderPrecisionFormat(shadertype: TMYGLenum, precisiontype: TMYGLenum): WebGLShaderPrecisionFormat | null;
    /**
     * @summary 返回 WebGLShader 的源码
     */
    getShaderSource(shader: WebGLShader): /**
     * @summary 返回值
     * @description 一个包含了指定着色器的源码的 DOMString
     */ string | null;
    /**
     * @summary 返回支持的 WebGL 扩展的列表
     */
    getSupportedExtensions(): /**
     * @summary 返回值
     * @description 一个字符串 Array 数组，包含所有支持 WebGL 的扩展
     */ string[] | null;
    /**
     * @summary 返回特定的纹理信息
     */
    getTexParameter(target: TMYGLenum, pname: TMYGLenum): unknown;
    /**
     * @summary 返回指定位置的全局变量的值
     */
    getUniform(program: WebGLProgram, location: WebGLUniformLocation): unknown;
    /**
     * @summary 返回给定 WebGLProgram 统一变量的位置
     * @description 统一变量作为 WebGLUniformLocation 对象返回，该对象是一个不透明的标识符，用于指定统一变量在 GPU 内存中的位置。
     * 获得制服的位置后，您可以使用其他制服访问方法之一访问制服本身，将制服位置作为输入之一传入：
     */
    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation | null;
    /**
     * @summary 返回有关给定位置的顶点属性的信息
     */
    getVertexAttrib(index: TMYGLuint, pname: TMYGLenum): unknown;
    /**
     * @summary 返回指定顶点属性的地址
     */
    getVertexAttribOffset(index: TMYGLuint, pname: TMYGLenum): TMYGLintptr;
    /**
     * @summary 指定某些行为的提示
     * @description 这些提示的解释取决于实现。
     */
    hint(target: TMYGLenum, mode: TMYGLenum): void;
    /**
     * @summary 传入的 WebGLBuffer 是否有效
     * @description 有效则返回 true，否则返回 false
     */
    isBuffer(buffer: WebGLBuffer | null): TMYGLboolean;
    /**
     * @summary 标记 WebGL 的上下文是否已经丢失
     */
    isContextLost(): boolean;
    /**
     * @summary 用来检测给定的 WebGL 功能项在当前上下文是否可用
     */
    isEnabled(cap: TMYGLenum): TMYGLboolean;
    /**
     * @summary 传入的 WebGLFramebuffer 是否有效
     */
    isFramebuffer(framebuffer: WebGLFramebuffer | null): TMYGLboolean;
    /**
     * @summary 传入的 WebGLProgram 是否是一个合法的着色器程序
     */
    isProgram(program: WebGLProgram | null): TMYGLboolean;
    /**
     * @summary 传入的 WebGLRenderbuffer 是否有效
     */
    isRenderbuffer(renderbuffer: WebGLRenderbuffer | null): TMYGLboolean;
    /**
     * @summary 传入的 WebGLShader 是否有效
     */
    isShader(shader: WebGLShader | null): TMYGLboolean;
    /**
     * @summary 传入的 WebGLTexture 是否有效
     */
    isTexture(texture: WebGLTexture | null): TMYGLboolean;
    /**
     * @summary 设置光栅化线的线宽
     */
    lineWidth(width: TMYGLfloat): void;
    /**
     * @summary 链接给定的 WebGLProgram
     * @description 链接给定的 WebGLProgram，从而完成为程序的片元和顶点着色器准备 GPU 代码的过程
     */
    linkProgram(program: WebGLProgram): void;
    /**
     * @summary 图像预处理的函数
     */
    pixelStorei(pname: TMYGLenum, param: TMYGLint | TMYGLboolean): void;
    /**
     * @summary 指定计算深度值的比例因子和单位
     * @description 在执行深度测试之前和将值写入深度缓冲区之前添加偏移量。
     */
    polygonOffset(factor: TMYGLfloat, units: TMYGLfloat): void;
    /**
     * @summary 从当前颜色帧缓冲区的指定矩形中读取一块像素到 ArrayBufferView 对象中
     */
    readPixels(x: TMYGLint, y: TMYGLint, width: TMYGLsizei, height: TMYGLsizei, format: TMYGLenum, type: TMYGLenum, pixels: ArrayBufferView | null): void;
    /**
     * @summary 创建和初始化一个渲染缓冲区对象的数据存储
     */
    renderbufferStorage(target: TMYGLenum, internalformat: TMYGLenum, width: TMYGLsizei, height: TMYGLsizei): void;
    /**
     * @summary 为抗锯齿效果指定多样本覆盖参数
     */
    sampleCoverage(value: TMYGLclampf, invert: TMYGLboolean): void;
    /**
     * @summary 将绘图区域限制在其限定的盒形区域
     * @description 指定了一个裁剪区域，用来将绘图区域限制在其限定的盒形区域内
     */
    scissor(x: TMYGLint, y: TMYGLint, width: TMYGLsizei, height: TMYGLsizei): void;
    /**
     * @summary 返回 WebGLShader 的源码
     */
    shaderSource(shader: WebGLShader, source: string): void;
    /**
     * @summary 设置模板测试的前后功能和参考值
     */
    stencilFunc(func: TMYGLenum, ref: TMYGLint, mask: TMYGLuint): void;
    /**
     * @summary 设置模板测试的正面或背面功能和参考值
     * @description Stencilling 启用和禁用基于每个像素的绘图。 它通常用于多通道渲染以实现特殊效果。
     */
    stencilFuncSeparate(face: TMYGLenum, func: TMYGLenum, ref: TMYGLint, mask: TMYGLuint): void;
    /**
     * @summary 控制启用和禁用模板平面中各个位的正面和背面写入
     * @description WebGLRenderingContext.stencilMaskSeparate() 方法可以将前后模板写入掩码设置为不同的值。
     */
    stencilMask(mask: TMYGLuint): void;
    /**
     * @summary 控制启用和禁用模板平面中各个位的正面或背面写入
     * @description WebGLRenderingContext.stencilMask() 方法可以同时将正面和背面模板写入掩码设置为一个值。
     */
    stencilMaskSeparate(face: TMYGLenum, mask: TMYGLuint): void;
    /**
     * @summary 设置正面和背面模板测试操作。
     */
    stencilOp(fail: TMYGLenum, zfail: TMYGLenum, zpass: TMYGLenum): void;
    /**
     * @summary 设置正面和/或背面模板测试操作
     */
    stencilOpSeparate(face: TMYGLenum, fail: TMYGLenum, zfail: TMYGLenum, zpass: TMYGLenum): void;
    /**
     * @summary 指定二维纹理图像
     */
    texImage2D(
      target: TMYGLenum,
      level: TMYGLint,
      internalformat: TMYGLint,
      width: TMYGLsizei,
      height: TMYGLsizei,
      border: TMYGLint,
      format: TMYGLenum,
      type: TMYGLenum,
      pixels: ArrayBufferView | null,
    ): void;
    /**
     * @summary 指定二维纹理图像
     */
    texImage2D(target: TMYGLenum, level: TMYGLint, internalformat: TMYGLint, format: TMYGLenum, type: TMYGLenum, pixels: TMYCanvasImageSource): void;
    /**
     * @summary 用于设置纹理参数
     */
    texParameterf(target: TMYGLenum, pname: TMYGLenum, param: TMYGLfloat): void;
    /**
     * @summary 用于设置纹理参数
     */
    texParameteri(target: TMYGLenum, pname: TMYGLenum, param: TMYGLint): void;
    /**
     * @summary 指定当前纹理的子矩形
     */
    texSubImage2D(
      target: TMYGLenum,
      level: TMYGLint,
      xoffset: TMYGLint,
      yoffset: TMYGLint,
      width: TMYGLsizei,
      height: TMYGLsizei,
      format: TMYGLenum,
      type: TMYGLenum,
      pixels: ArrayBufferView | null,
    ): void;
    /**
     * @summary 指定当前纹理的子矩形
     */
    texSubImage2D(target: TMYGLenum, level: TMYGLint, xoffset: TMYGLint, yoffset: TMYGLint, format: TMYGLenum, type: TMYGLenum, pixels: TMYCanvasImageSource): void;
    /**
     * @summary 把画布上的绘制内容以一个 data URI 的格式返回
     */
    toDataURL(type: 'image/png' | ' image/jpeg', quality: number): string;
    /**
     * @summary 指定 uniform 变量
     * @description 所有在 ShaderProgram 对象中定义的，且激活的 uniform 变量在 ShaderProgram 执行 link 成功后被初始化为 0。
     * 它们将保留通过调用此方法分配给它们的值，直到再次将其初始化为 0 时，也就是 ShaderProgram 对象上发生下一次成功的 link 操作为止。
     */
    uniform1f(location: WebGLUniformLocation | null, x: TMYFloat32List): void;
    /**
     * @summary 指定 uniform 变量
     * @description 所有在 ShaderProgram 对象中定义的，且激活的 uniform 变量在 ShaderProgram 执行 link 成功后被初始化为 0。
     * 它们将保留通过调用此方法分配给它们的值，直到再次将其初始化为 0 时，也就是 ShaderProgram 对象上发生下一次成功的 link 操作为止。
     */
    uniform1fv(location: WebGLUniformLocation | null, v: TMYFloat32List): void;
    /**
     * @summary 指定 uniform 变量
     * @description 所有在 ShaderProgram 对象中定义的，且激活的 uniform 变量在 ShaderProgram 执行 link 成功后被初始化为 0。
     * 它们将保留通过调用此方法分配给它们的值，直到再次将其初始化为 0 时，也就是 ShaderProgram 对象上发生下一次成功的 link 操作为止。
     */
    uniform1i(location: WebGLUniformLocation | null, x: TMYGLint): void;
    /**
     * @summary 指定 uniform 变量
     * @description 所有在 ShaderProgram 对象中定义的，且激活的 uniform 变量在 ShaderProgram 执行 link 成功后被初始化为 0。
     * 它们将保留通过调用此方法分配给它们的值，直到再次将其初始化为 0 时，也就是 ShaderProgram 对象上发生下一次成功的 link 操作为止。
     */
    uniform1iv(location: WebGLUniformLocation | null, v: TMYInt32List): void;
    /**
     * @summary 指定 uniform 变量
     * @description 所有在 ShaderProgram 对象中定义的，且激活的 uniform 变量在 ShaderProgram 执行 link 成功后被初始化为 0。
     * 它们将保留通过调用此方法分配给它们的值，直到再次将其初始化为 0 时，也就是 ShaderProgram 对象上发生下一次成功的 link 操作为止。
     */
    uniform2f(location: WebGLUniformLocation | null, x: TMYGLfloat, y: TMYGLfloat): void;
    /**
     * @summary 指定 uniform 变量
     * @description 所有在 ShaderProgram 对象中定义的，且激活的 uniform 变量在 ShaderProgram 执行 link 成功后被初始化为 0。
     * 它们将保留通过调用此方法分配给它们的值，直到再次将其初始化为 0 时，也就是 ShaderProgram 对象上发生下一次成功的 link 操作为止。
     */
    uniform2fv(location: WebGLUniformLocation | null, v: TMYFloat32List): void;
    /**
     * @summary 指定 uniform 变量
     * @description 所有在 ShaderProgram 对象中定义的，且激活的 uniform 变量在 ShaderProgram 执行 link 成功后被初始化为 0。
     * 它们将保留通过调用此方法分配给它们的值，直到再次将其初始化为 0 时，也就是 ShaderProgram 对象上发生下一次成功的 link 操作为止。
     */
    uniform2i(location: WebGLUniformLocation | null, x: TMYGLint, y: TMYGLint): void;
    /**
     * @summary 指定 uniform 变量
     * @description 所有在 ShaderProgram 对象中定义的，且激活的 uniform 变量在 ShaderProgram 执行 link 成功后被初始化为 0。
     * 它们将保留通过调用此方法分配给它们的值，直到再次将其初始化为 0 时，也就是 ShaderProgram 对象上发生下一次成功的 link 操作为止。
     */
    uniform2iv(location: WebGLUniformLocation | null, v: TMYInt32List): void;
    /**
     * @summary 指定 uniform 变量
     * @description 所有在 ShaderProgram 对象中定义的，且激活的 uniform 变量在 ShaderProgram 执行 link 成功后被初始化为 0。
     * 它们将保留通过调用此方法分配给它们的值，直到再次将其初始化为 0 时，也就是 ShaderProgram 对象上发生下一次成功的 link 操作为止。
     */
    uniform3f(location: WebGLUniformLocation | null, x: TMYGLfloat, y: TMYGLfloat, z: TMYGLfloat): void;
    /**
     * @summary 指定 uniform 变量
     * @description 所有在 ShaderProgram 对象中定义的，且激活的 uniform 变量在 ShaderProgram 执行 link 成功后被初始化为 0。
     * 它们将保留通过调用此方法分配给它们的值，直到再次将其初始化为 0 时，也就是 ShaderProgram 对象上发生下一次成功的 link 操作为止。
     */
    uniform3fv(location: WebGLUniformLocation | null, v: TMYFloat32List): void;
    /**
     * @summary 指定 uniform 变量
     * @description 所有在 ShaderProgram 对象中定义的，且激活的 uniform 变量在 ShaderProgram 执行 link 成功后被初始化为 0。
     * 它们将保留通过调用此方法分配给它们的值，直到再次将其初始化为 0 时，也就是 ShaderProgram 对象上发生下一次成功的 link 操作为止。
     */
    uniform3i(location: WebGLUniformLocation | null, x: TMYGLint, y: TMYGLint, z: TMYGLint): void;
    /**
     * @summary 指定 uniform 变量
     * @description 所有在 ShaderProgram 对象中定义的，且激活的 uniform 变量在 ShaderProgram 执行 link 成功后被初始化为 0。
     * 它们将保留通过调用此方法分配给它们的值，直到再次将其初始化为 0 时，也就是 ShaderProgram 对象上发生下一次成功的 link 操作为止。
     */
    uniform3iv(location: WebGLUniformLocation | null, v: TMYInt32List): void;
    /**
     * @summary 指定 uniform 变量的值
     * @description 所有在 ShaderProgram 对象中定义的，且激活的 uniform 变量在 ShaderProgram 执行 link 成功后被初始化为 0。
     * 它们将保留通过调用此方法分配给它们的值，直到再次将其初始化为 0 时，也就是 ShaderProgram 对象上发生下一次成功的 link 操作为止。
     */
    uniform4f(location: WebGLUniformLocation | null, x: TMYGLfloat, y: TMYGLfloat, z: TMYGLfloat, w: TMYGLfloat): void;
    /**
     * @summary 指定 uniform 变量
     * @description 所有在 ShaderProgram 对象中定义的，且激活的 uniform 变量在 ShaderProgram 执行 link 成功后被初始化为 0。
     * 它们将保留通过调用此方法分配给它们的值，直到再次将其初始化为 0 时，也就是 ShaderProgram 对象上发生下一次成功的 link 操作为止。
     */
    uniform4fv(location: WebGLUniformLocation | null, v: TMYFloat32List): void;
    /**
     * @summary 指定 uniform 变量
     * @description 所有在 ShaderProgram 对象中定义的，且激活的 uniform 变量在 ShaderProgram 执行 link 成功后被初始化为 0。
     * 它们将保留通过调用此方法分配给它们的值，直到再次将其初始化为 0 时，也就是 ShaderProgram 对象上发生下一次成功的 link 操作为止。
     */
    uniform4i(location: WebGLUniformLocation | null, x: TMYGLint, y: TMYGLint, z: TMYGLint, w: TMYGLint): void;
    /**
     * @summary 指定 uniform 变量
     * @description 所有在 ShaderProgram 对象中定义的，且激活的 uniform 变量在 ShaderProgram 执行 link 成功后被初始化为 0。
     * 它们将保留通过调用此方法分配给它们的值，直到再次将其初始化为 0 时，也就是 ShaderProgram 对象上发生下一次成功的 link 操作为止。
     */
    uniform4iv(location: WebGLUniformLocation | null, v: TMYInt32List): void;
    /**
     * @summary 为 uniform variables 指定矩阵值
     */
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: TMYGLboolean, value: TMYFloat32List): void;
    /**
     * @summary 为 uniform variables 指定矩阵值
     */
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: TMYGLboolean, value: TMYFloat32List): void;
    /**
     * @summary 为 uniform variables 指定矩阵值
     */
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: TMYGLboolean, value: TMYFloat32List): void;
    /**
     * @summary 将定义好的 WebGLProgram 对象添加到当前的渲染状态中
     */
    useProgram(program: WebGLProgram | null): void;
    /**
     * @summary 验证 WebGLProgram
     * @description 它在检查 WebGLProgram 程序是否链接成功的同时还会检查其是否能在当前的 WebGL 中使用。
     */
    validateProgram(program: WebGLProgram): void;
    /**
     * @summary 为顶点 attibute 变量赋值
     */
    vertexAttrib1f(index: TMYGLuint, x: TMYGLfloat): void;
    /**
     * @summary 为顶点 attibute 变量赋值
     */
    vertexAttrib1fv(index: TMYGLuint, values: TMYFloat32List): void;
    /**
     * @summary 为顶点 attibute 变量赋值
     */
    vertexAttrib2f(index: TMYGLuint, x: TMYGLfloat, y: TMYGLfloat): void;
    /**
     * @summary 为顶点 attibute 变量赋值
     */
    vertexAttrib2fv(index: TMYGLuint, values: TMYFloat32List): void;
    /**
     * @summary 为顶点 attibute 变量赋值
     */
    vertexAttrib3f(index: TMYGLuint, x: TMYGLfloat, y: TMYGLfloat, z: TMYGLfloat): void;
    /**
     * @summary 为顶点 attibute 变量赋值
     */
    vertexAttrib3fv(index: TMYGLuint, values: TMYFloat32List): void;
    /**
     * @summary 为顶点 attibute 变量赋值
     */
    vertexAttrib4f(index: TMYGLuint, x: TMYGLfloat, y: TMYGLfloat, z: TMYGLfloat, w: TMYGLfloat): void;
    /**
     * @summary 为顶点 attibute 变量赋值
     */
    vertexAttrib4fv(index: TMYGLuint, values: TMYFloat32List): void;
    /**
     *
     * @@summary 从当前绑定的缓冲区中读取顶点数据
     * @description WebGL API 的WebGLRenderingContext.vertexAttribPointer()方法绑定当前缓冲区范围到gl.ARRAY_BUFFER,成为当前顶点缓冲区对象的通用顶点属性并指定它的布局(缓冲区对象中的偏移量)。
     */
    vertexAttribPointer(index: TMYGLuint, size: TMYGLint, type: TMYGLenum, normalized: TMYGLboolean, stride: TMYGLsizei, offset: TMYGLintptr): void;
    /**
     * @summary 设置视口
     * @description 即指定从标准设备到窗口坐标的 x、y 仿射变换
     */
    viewport(x: TMYGLint, y: TMYGLint, width: TMYGLsizei, height: TMYGLsizei): void;
  }
  export interface CanvasVideoRecorder {
    /**
     * @summary 取消错误监听函数
     */
    offError(callback: (res: { err_code: number; err_msg: string }) => void): void;
    /**
     * @summary 取消 stop 返回函数
     */
    offStop(
      callback: (res: {
        /**
         * @summary video 路径
         */
        videoPath: string;
      }) => void,
    ): void;
    /**
     * @summary 添加错误监听函数
     */
    onError(callback: (res: { err_code: number; err_msg: string }) => void): void;
    /**
     * @summary 添加 stop 返回函数
     */
    onStop(
      callback: (res: {
        /**
         * @summary video 路径
         */
        videoPath: string;
      }) => void,
    ): void;
    /**
     * @summary 指定录制视频的帧率
     */
    setFps(fps: number): void;
    /**
     * @summary 指定录制视频的宽高
     */
    setViewport(width: number, height: number): void;
    /**
     * @summary 开始录制
     */
    start(): void;
    /**
     * @summary 结束录制
     */
    stop(): void;
  }
  export interface CanvasImage {
    /**
     * @summary 图片的真实高度
     */
    height: number;
    /**
     * @summary 图片的 URL
     */
    src: string;
    /**
     * @summary 图片的真实宽度
     */
    width: number;
    /**
     * @summary 图片加载发生错误时触发的回调函数
     */
    onerror(callback: () => void): void;
    /**
     * @summary 图片加载完成时触发的回调函数
     */
    onload(callback: () => void): void;
  }
  export interface CanvasGradient {
    /**
     * @summary 添加颜色的渐变点的方法
     * @description 如果偏移值不在 0 到 1 之间，将抛出 INDEX_SIZE_ERR 错误，如果颜色值不能被解析为有效的CSS颜色值 <color>，将抛出SYNTAX_ERR错误。
     */
    addColorStop(offset: number, color: string): void;
  }
  export interface CanvasPattern {
    /**
     * @summary 设置图案的变换矩阵的方法
     * @description 使用 SVGMatrix 对象作为图案的变换矩阵，并在此图案上调用它
     */
    setTransform(matrix?: DOMMatrix2DInit): void;
  }
  export interface CanvasContextImageSource {
    /**
     * @summary 高度
     */
    height: number;
    /**
     * @summary ID
     */
    id: string | number;
    /**
     * @summary URL
     */
    url: string;
    /**
     * @summary 宽度
     */
    width: number;
  }
  export interface Path2D {
    /**
     * @summary 添加一条新路径到当前路径的方法
     */
    addPath(path: Path2D, transform?: DOMMatrix2DInit): void;
    /**
     * @summary 绘制圆弧路径的方法
     * @description 圆弧路径的圆心在 (x, y) 位置，半径为 r ，根据anticlockwise （默认为顺时针）指定的方向从 startAngle 开始绘制，到 endAngle 结束。
     */
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    /**
     * @summary 绘制圆弧路径的方法
     * @description 根据控制点和半径绘制圆弧路径，使用当前的描点(前一个moveTo或lineTo等函数的止点)。根据当前描点与给定的控制点1连接的直线，和控制点1与控制点2连接的直线，作为使用指定半径的圆的切线，画出两条切线之间的弧线路径。
     */
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    /**
     * @summary 绘制三次贝赛尔曲线路径的方法
     * @description 该方法需要三个点。 第一、第二个点是控制点，第三个点是结束点。起始点是当前路径的最后一个点，绘制贝赛尔曲线前，可以通过调用 moveTo() 进行修改。
     */
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    /**
     * @summary 将笔点返回到当前子路径起始点的方法
     * @description 它尝试从当前点到起始点绘制一条直线。 如果图形已经是封闭的或者只有一个点，那么此方法不会做任何操作。
     */
    closePath(): void;
    /**
     * @summary 添加椭圆路径的方法
     * @description 椭圆的圆心在（x,y）位置，半径分别是radiusX 和 radiusY ，按照anticlockwise（默认顺时针）指定的方向，从 startAngle  开始绘制，到 endAngle 结束。
     */
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
    /**
     * @summary 使用直线连接子路径的终点到某个坐标的方法
     * @description 并不会真正地绘制。
     */
    lineTo(x: number, y: number): void;
    /**
     * @summary 将一个新的子路径的起始点移动到某个坐标的方法
     */
    moveTo(x: number, y: number): void;
    /**
     * @summary 新增二次贝塞尔曲线路径的方法
     */
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    /**
     * @summary 创建矩形路径的方法
     * @description 创建矩形路径的方法，矩形的起点位置是 (x, y) ，尺寸为 width 和 height。矩形的4个点通过直线连接，子路径做为闭合的标记，所以你可以填充或者描边矩形。
     */
    rect(x: number, y: number, w: number, h: number): void;
  }
  export interface ImageData {
    /**
     * @summary ImageData 数据
     */
    readonly data: Uint8ClampedArray;
    /**
     * @summary ImageData 的实际高度
     */
    readonly height: number;
    /**
     * @summary ImageData 的实际宽度
     */
    readonly width: number;
  }
  export interface WebGLActiveInfo {
    readonly name: string;
    readonly size: number;
    readonly type: number;
  }
  export interface WebGLBuffer {}
  export interface WebGLFramebuffer {}
  export interface WebGLProgram {}
  export interface WebGLRenderbuffer {}
  export interface WebGLShaderPrecisionFormat {
    readonly precision: number;
    readonly rangeMax: number;
    readonly rangeMin: number;
  }
  export interface WebGLShader {}
  export interface WebGLTexture {}
  export interface WebGLUniformLocation {}
  export interface WebGLContextAttributes {}
  export interface DOMMatrix {
    readonly a: number;
    readonly b: number;
    readonly c: number;
    readonly d: number;
    readonly e: number;
    readonly f: number;
    readonly is2D: boolean;
    readonly isIdentity: boolean;
    readonly m11: number;
    readonly m12: number;
    readonly m13: number;
    readonly m14: number;
    readonly m21: number;
    readonly m22: number;
    readonly m23: number;
    readonly m24: number;
    readonly m31: number;
    readonly m32: number;
    readonly m33: number;
    readonly m34: number;
    readonly m41: number;
    readonly m42: number;
    readonly m43: number;
    readonly m44: number;
    flipX(): DOMMatrix;
    flipY(): DOMMatrix;
    inverse(): DOMMatrix;
    invertSelf(): DOMMatrix;
    multiply(other?: DOMMatrixInit): DOMMatrix;
    multiplySelf(other?: DOMMatrixInit): DOMMatrix;
    preMultiplySelf(other?: DOMMatrixInit): DOMMatrix;
    rotate(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
    rotateAxisAngle(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;
    rotateAxisAngleSelf(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;
    rotateFromVector(x?: number, y?: number): DOMMatrix;
    rotateFromVectorSelf(x?: number, y?: number): DOMMatrix;
    rotateSelf(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
    scale(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    scale3d(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    scale3dSelf(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    /** @deprecated */
    scaleNonUniform(scaleX?: number, scaleY?: number): DOMMatrix;
    scaleSelf(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    setMatrixValue(transformList: string): DOMMatrix;
    skewX(sx?: number): DOMMatrix;
    skewXSelf(sx?: number): DOMMatrix;
    skewY(sy?: number): DOMMatrix;
    skewYSelf(sy?: number): DOMMatrix;
    toFloat32Array(): Float32Array;
    toFloat64Array(): Float64Array;
    toJSON(): unknown;
    toString(): string;
    transformPoint(point?: DOMPointInit): DOMPoint;
    translate(tx?: number, ty?: number, tz?: number): DOMMatrix;
    translateSelf(tx?: number, ty?: number, tz?: number): DOMMatrix;
  }
  export interface DOMPoint {
    readonly w: number;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    matrixTransform(matrix?: DOMMatrixInit): DOMPoint;
    toJSON(): unknown;
  }
  export interface RtcRoomContext {}
  export interface Tracert {
    readonly apFrameworkScheme: string;
    readonly appId: string;
    readonly appVersion: string;
    /**
     * @summary 自动上报 PV
     */
    readonly autoLogPv: boolean;
    /**
     * @summary 业务类型
     */
    readonly bizType: string;
    /**
     * @summary 渠道
     */
    readonly chInfo: string;
    /**
     * @summary console 打印埋点
     */
    readonly debug: boolean;
    /**
     * @summary 是否执行过全引导参数透传
     */
    readonly isTraced: boolean;
    /**
     * @summary 日志等级
     */
    readonly logLevel: number;
    /**
     * @summary 通用的数据
     * @description 可不传，传了所有的埋点均会带该额外参数
     */
    readonly mdata: object;
    readonly query: string;
    readonly ready: boolean;
    /**
     * @summary 投放信息
     */
    readonly scm: string;
    /**
     * @summary 埋点 a 位
     */
    readonly spmAPos: string;
    /**
     * @summary 埋点 b 位
     */
    readonly spmBPos: string;
    readonly trace: boolean;
    readonly uepCombineMode: boolean;
    /**
     * @summary 上报的 url
     */
    readonly url: string;
    /**
     * @summary 缓存当前渠道信息
     */
    appendChinfo(params?: object): void;
    checkFullLinkParams(): void;
    /**
     * @summary 发送点击埋点
     */
    click(spmId: string, options: void | object, extraParams?: object): void;
    /**
     * @summary 内容点击接口
     */
    clickContent(spmId?: string, scm?: string, newChinfo?: string, params?: object, newScm?: string): void;
    /**
     * @summary 发送曝光埋点
     */
    expo(spmId: string, options: void | object, extraParams?: object): void;
    /**
     * @summary 内容曝光接口
     */
    expoContent(spmId?: string, scm?: string, newChinfo?: string, params?: object, newScm?: string): void;
    /**
     * @summary 获取 Tracert 的属性或者方法
     */
    get(key: TTracert): unknown;
    /**
     * @summary 获取渠道信息
     */
    getChinfoChain(
      callback: () => void,
      options?:
        | boolean
        | {
            /**
             * 是否去重
             */
            isFiltered?: boolean;
            /**
             * 是否只取第一个
             */
            isFirst?: boolean;
          },
    ): void;
    /**
     * @summary 获取渠道链 UUID 并生成一条事件埋点上报渠道
     */
    getChinfoChainUUID(
      callback: () => void,
      option: {
        /**
         * 是否去重
         */
        isFiltered?: string | boolean;
        bizName?: string;
      },
    ): void;
    /**
     * @summary 获取当前页面参数
     */
    getCurrentPageParams(callback: () => void): void;
    /**
     * @summary 解析 URL
     */
    getValueOfUrl(name: string, url: string): string;
    handleUEPEvent(options: {
      type: string;
      logLevel?: number;
      actionId: string;
      param4?: object;
      param1?: string;
      param5?: string;
      eventTime?: number;
      spmId: string;
      newScm?: string;
      scm?: object;
      bizType: string;
    }): void;
    /**
     * @summary 发送页面埋点
     */
    logPv(opt?: object): void;
    reportUEPData(options: {
      spm: {
        url: string;
        chInfo: string;
        isSPM: boolean;
        spmId: string;
        bizType: string;
      };
      spmDetail: {
        url?: string;
        chInfo: string;
      };
    }): void;
    send(fn: 'reportData', getOption: () => ITracertReportUEPDataOptions): void;
    send(): ITracertReportUEPDataOptions;
    send(fn: 'remoteLog', getOption: () => ITracertHandleUEPDataOptions): void;
    send(): ITracertHandleUEPDataOptions;
    /**
     * @summary 配置 Tracert 的属性或者方法
     */
    set(
      opt?: Partial<{
        getChinfoChain: unknown;
        start: unknown;
        send: unknown;
        getValueOfUrl: unknown;
        logPv: unknown;
        click: unknown;
        expo: unknown;
        checkFullLinkParams: unknown;
        expoContent: unknown;
        clickContent: unknown;
        setPageParams: unknown;
        setNextPageParams: unknown;
        appendChinfo: unknown;
        updateChinfo: unknown;
        getChinfoChainUUID: unknown;
        getCurrentPageParams: unknown;
        setCurrentPageNewChinfo: unknown;
        setNextPageNewChinfo: unknown;
        handleUEPEvent: unknown;
        reportUEPData: unknown;
      }>,
    ): void;
    setCurrentPageNewChinfo(param?: object): void;
    setNextPageNewChinfo(param?: object): void;
    /**
     * @summary 设置下一个页面的透传参数
     */
    setNextPageParams(params: ITracertPageParams): void;
    /**
     * @summary 设置当前页面的透传参数
     * @param scm
     */
    setPageParams(params: ITracertPageParams, scm: string): void;
    /**
     * @summary 配置 Tracert 的属性并开始运行
     */
    start(opt?: object): void;
    /**
     * @summary 更新当前渠道信息
     */
    updateChinfo(params?: object): void;
  }
  export interface VideoContext {
    /**
     * @summary 退出全屏
     */
    exitFullScreen(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 获取当前播放进度
     */
    getCurrentTime(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 隐藏控制控件
     */
    hideControl(r: {
      /**
       * @summary 控件名称
       */
      controlName: string;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 隐藏状态栏，仅在 iOS 全屏下有效
     */
    hideStatusBar(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 切换静音状态
     */
    mute(enable: boolean): void;
    /**
     * @summary 暂停
     */
    pause(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 播放
     */
    play(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 设置倍速播放（0.5 <= rate <= 2.0）
     */
    playbackRate(rate: number): void;
    /**
     * @summary 进入全屏
     */
    requestFullScreen(r: {
      /**
       * @summary 进入全屏，0为正常竖屏，90为横屏，-90反向横屏
       */
      direction: number;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 跳转到指定位置，单位为秒（s）
     */
    seek(time: number): void;
    /**
     * @summary 显示控制控件
     */
    showControl(r: {
      /**
       * @summary 控件名称
       */
      controlName: string;
      autoHide: boolean;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 显示/隐藏浮窗
     */
    showFloatingWindow(isShow: boolean): void;
    /**
     * @summary 显示状态栏，仅在 iOS 全屏下有效。
     */
    showStatusBar(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 开启互动能力
     */
    startInteractions(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 停止
     */
    stop(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 停止互动能力，并清理所有的互动组件
     */
    stopInteractions(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 切换清晰度
     */
    switchQuality(r: {
      /**
       * @summary 清晰度列表项中的 definition 字段
       */
      quality: string;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
    /**
     * @summary 更新清晰度列表
     */
    updateQualityList(r: {
      /**
       * @summary 清晰度列表（JSON 字符串格式）
       * [{definition, url, res, bps, size}, ...]
       * definition 的可选值及其对应展示文字如下：
       * - FD 流畅
       * - LD 标清
       * - SD 高清
       * - HD 超清
       * - 2K 蓝光
       * - 4K 4K
       */
      urls: string;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    }): Promise<void>;
  }
  export interface ARSessionManager {
    /**
     * @summary 配置探测
     */
    configDetecting(type: DetectType, param: string): boolean;
    /**
     * @summary 创建 Session
     */
    createSession(params: { mode: TrackMode; success: (entity: IARSession) => void; fail: () => void; complete: () => void }): boolean;
    /**
     * @summary 获取探测结果
     */
    getDetectingResult(type: DetectType, param: string): string;
    /**
     * @summary 获取探测分数
     */
    getDetectingScore(type: DetectType, param: string): number;
    /**
     * @summary 获取探测状态
     */
    getDetectingStatus(type: DetectType, param: string): string;
    /**
     * @summary
     */
    hitTest(
      point: {
        x: number;
        y: number;
      },
      callback: (result: {
        type: number;
        transform: Float32Array;
        anchor: {
          type: number;
          transform: Float32Array;
        };
      }) => void,
    ): void;
    /**
     * @summary 检查是否支持某个模式
     */
    isSupported(params: { mode: TrackMode; success: () => void; fail: () => void; complete: () => void }): boolean;
    /**
     * @summary
     */
    pauseARSession(): boolean;
    /**
     * @summary
     */
    removeSession(): boolean;
    /**
     * @summary
     */
    resumeARSession(): boolean;
    /**
     * @summary 开始探测
     */
    startDetecting(type: DetectType, param: string): boolean;
    /**
     * @summary 开始追踪
     */
    startTracking(param: string): boolean;
    /**
     * @summary 停止探测
     */
    stopDetecting(type: DetectType, param: string): boolean;
    /**
     * @summary 停止追踪
     */
    stopTracking(): boolean;
  }
  export interface Geocoder {
    /**
     * @summary 逆地理编码
     */
    reverseGeocoding(r: {
      latitude: string;
      longitude: string;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        country: string;
        countryCode: string;
        province: string;
        provinceAdcode: string;
        city: string;
        cityAdcode: string;
        district: string;
        districtAdcode: string;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(
        err:
          | {
              error?: number;
              errorMessage?: string;
            }
          | {
              error: 2;
              errorMessage: '非法参数';
            }
          | {
              error: 1001;
              errorMessage: '逆地理编码失败';
            }
          | {
              error: 1002;
              errorMessage: '逆地理编码信息为空';
            },
      ): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              country: string;
              countryCode: string;
              province: string;
              provinceAdcode: string;
              city: string;
              cityAdcode: string;
              district: string;
              districtAdcode: string;
            }
          | (
              | {
                  error?: number;
                  errorMessage?: string;
                }
              | {
                  error: 2;
                  errorMessage: '非法参数';
                }
              | {
                  error: 1001;
                  errorMessage: '逆地理编码失败';
                }
              | {
                  error: 1002;
                  errorMessage: '逆地理编码信息为空';
                }
            ),
      ): void;
    }): Promise<{
      country: string;
      countryCode: string;
      province: string;
      provinceAdcode: string;
      city: string;
      cityAdcode: string;
      district: string;
      districtAdcode: string;
    }>;
  }
  export interface UploadTask {
    /**
     * @summary 取消本次任务
     */
    abort(): void;
    /**
     * @summary 监听上传进度变化事件
     */
    onProgressUpdate(
      cb: (arg: {
        /**
         * @summary 上传进度百分比
         */
        progress: number;
        totalBytesWritten: number;
        totalBytesExpectedToWrite: number;
      }) => void,
    ): void;
  }
  export interface DownloadTask {
    /**
     * @summary 取消本次任务
     */
    abort(): void;
    /**
     * @summary 监听下载进度变化事件
     */
    onProgressUpdate(cb: (arg: { progress: number; totalBytesWritten: number; totalBytesExpectedToWrite: number }) => void): void;
  }
  export interface RPCTask {
    /**
     * @summary 取消本次任务
     */
    abort(): void;
  }
  export interface RequestTask {
    /**
     * @summary 取消本次任务
     */
    abort(): void;
  }
  export interface HTTPRequestTask {
    /**
     * @summary 取消本次任务
     */
    abort(): void;
  }
  export interface UploadToAliCloudTask {
    /**
     * @summary 取消本次任务
     */
    abort(): void;
    /**
     * @summary 监听上传进度变化事件
     */
    onProgressUpdate(
      cb: (arg: {
        /**
         * @summary 上传进度百分比
         */
        progress: number;
        totalBytesWritten: number;
        totalBytesExpectedToWrite: number;
      }) => void,
    ): void;
  }
  export interface AccessibilityManager {
    /**
     * @summary 无障碍模式下语音播报
     */
    announce(r: {
      text: string;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: boolean }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(
        err:
          | {
              error?: number;
              errorMessage?: string;
            }
          | {
              error: 2;
              errorMessage: 'invalid parameter!';
            }
          | {
              error: 60004;
              errorMessage: 'screen reader not running';
            },
      ): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              success: boolean;
            }
          | (
              | {
                  error?: number;
                  errorMessage?: string;
                }
              | {
                  error: 2;
                  errorMessage: 'invalid parameter!';
                }
              | {
                  error: 60004;
                  errorMessage: 'screen reader not running';
                }
            ),
      ): void;
    }): Promise<{
      success: boolean;
    }>;
    /**
     * @summary 是否开启无障碍语音播报 (iOS 旁白、Android talkBack)
     */
    isScreenReaderEnabled(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { enabled: boolean }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              enabled: boolean;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      enabled: boolean;
    }>;
  }
  export interface ChooseCityTask {
    /**
     * @summary 取消监听地理位置定位完成事件
     * @description 只针对 `chooseCity` 中属性 `setLocatedCity` 为 `true` 的情况
     * @sdk 2.8.0
     */
    offLocatedComplete(
      cb?: (arg: {
        /**
         * @summary 当前定位城市经度。
         */
        longitude: number;
        /**
         * @summary 当前定位城市维度。
         */
        latitude: number;
      }) => void,
    ): void;
    /**
     * @summary 监听该页面地理位置定位完成的事件
     * @description 只针对 `chooseCity` 中属性 `setLocatedCity` 为 `true` 的情况。
     * @sdk 2.8.0
     */
    onLocatedComplete(
      cb: (arg: {
        /**
         * @summary 当前定位城市经度。
         */
        longitude: number;
        /**
         * @summary 当前定位城市维度。
         */
        latitude: number;
      }) => void,
    ): void;
    /**
     * @summary 用于修改my.chooseCity中的默认定位城市名称
     * @sdk 2.8.0
     */
    setLocatedCity(r: {
      /**
       * @summary 当前定位城市的名称。
       */
      locatedCityName: string;
      /**
       * @summary 当前定位城市的行政区划代码，不传值时以控件默认拿到的为准。
       */
      locatedCityAdCode?: string;
      /**
       * @summary 当前定位城市的拼音，不传值时以控件默认拿到的为准。
       */
      locatedCityPinyin?: string;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 修改后的定位城市名称
         */
        locatedCityName: string;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(
        err:
          | {
              error?: number;
              errorMessage?: string;
            }
          | {
              error: 11;
              errorMessage: '参数类型错误';
            }
          | {
              error: 12;
              errorMessage: '必填参数为空';
            }
          | {
              error: 13;
              errorMessage: 'locatedCityId不匹配';
            }
          | {
              error: 14;
              errorMessage: '请等chooseCityTask.onLocatedComplete触发后再调用chooseCityTask.setLocatedCity';
            },
      ): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 修改后的定位城市名称
               */
              locatedCityName: string;
            }
          | (
              | {
                  error?: number;
                  errorMessage?: string;
                }
              | {
                  error: 11;
                  errorMessage: '参数类型错误';
                }
              | {
                  error: 12;
                  errorMessage: '必填参数为空';
                }
              | {
                  error: 13;
                  errorMessage: 'locatedCityId不匹配';
                }
              | {
                  error: 14;
                  errorMessage: '请等chooseCityTask.onLocatedComplete触发后再调用chooseCityTask.setLocatedCity';
                }
            ),
      ): void;
    }): Promise<{
      /**
       * @summary 修改后的定位城市名称
       */
      locatedCityName: string;
    }>;
  }
  export interface ICanvasContext {}
  export interface IARSession {}
  interface DOMMatrix2DInit {
    a?: number;
    b?: number;
    c?: number;
    d?: number;
    e?: number;
    f?: number;
    m11?: number;
    m12?: number;
    m21?: number;
    m22?: number;
    m41?: number;
    m42?: number;
  }
  interface DOMMatrixInit extends DOMMatrix2DInit {
    is2D?: boolean;
    m13?: number;
    m14?: number;
    m23?: number;
    m24?: number;
    m31?: number;
    m32?: number;
    m33?: number;
    m34?: number;
    m43?: number;
    m44?: number;
  }
  interface DOMPointInit {
    w?: number;
    x?: number;
    y?: number;
    z?: number;
  }
  type DetectType = 'smile' | string;
  /**
   * @summary 基金下单页
   */
  interface IAP$NavigateToFinanceOptionsFundBuy {
    /**
     * @summary 跳转类型，固定为 fundBuy
     */
    type: 'fundBuy';
    /**
     * @summary 基金代码
     */
    fundCode: string;
    /**
     * @summary 下单金额
     */
    amount: string | number;
  }
  /**
   * @summary 基金详情页
   */
  interface IAP$NavigateToFinanceOptionsFundDetail {
    /**
     * @summary 跳转类型，固定为 fundDetail
     */
    type: 'fundDetail';
    /**
     * @summary 基金代码
     */
    fundCode: string;
  }
  /**
   * @summary 基金定投设置页
   */
  interface IAP$NavigateToFinanceOptionsFundSign {
    /**
     * @summary 跳转类型，固定为 fundSign
     */
    type: 'fundSign';
    /**
     * @summary 基金代码
     */
    fundCode: string;
    /**
     * @summary 定投金额
     */
    amount: string | number;
    /**
     * @summary 定投周期 E:每日, W:每周, D:每两周, M:每月,
     */
    period: string;
    /**
     * @summary 定投日期 周维度:1-5,月维度1-28
     */
    day: string | number;
  }
  /**
   * @summary 黄金下单页
   */
  interface IAP$NavigateToFinanceOptionsGoldBuy {
    /**
     * @summary 跳转类型，固定为 goldBuy
     */
    type: 'goldBuy';
    /**
     * @summary 黄金对应的基金代码
     */
    fundCode: string;
  }
  /**
   * @summary 基金定投设置页
   */
  interface IAP$NavigateToFinanceOptionsGoldSign {
    /**
     * @summary 跳转类型，固定为 goldSign
     */
    type: 'goldSign';
    /**
     * @summary 黄金对应的基金代码
     */
    funcCode: string;
    /**
     * @summary 定投金额
     */
    amount: string | number;
    /**
     * @summary 定投周期 E:每日, W:每周, D:每两周, M:每月,
     */
    period: string;
    /**
     * @summary 定投日期 周维度:1-5,月维度1-28
     */
    day: string | number;
  }
  /**
   * 跳转 H5页面
   */
  interface IAP$NavigateToFinanceOptionsH5Page {
    /**
     * @summary 跳转类型，固定为 h5Page
     */
    type: 'h5Page';
    /**
     * @summary H5 页面链接
     */
    url: string;
  }
  /**
   * @summary 基金组合下单页
   */
  interface IAP$NavigateToFinanceOptionsPortfolioBuy {
    /**
     * @summary 跳转类型，固定为 portfolioBuy
     */
    type: 'portfolioBuy';
    /**
     * @summary 基金组合代码
     */
    fundCode: string;
    /**
     * @summary 下单金额
     */
    amount: string | number;
  }
  /**
   * @summary 组合基金详情页
   */
  interface IAP$NavigateToFinanceOptionsPortfolioDetail {
    /**
     * @summary 跳转类型，固定为 portfolioDetail
     */
    type: 'portfolioDetail';
    /**
     * @summary 基金组合代码
     */
    fundCode: string;
  }
  /**
   * @summary 财富号首页
   */
  interface IAP$NavigateToFinanceOptionsWealthShop {
    /**
     * @summary 跳转类型，固定为 wealthShop
     */
    type: 'wealthShop';
    /**
     * @summary 机构 pid
     */
    pid: string;
  }
  interface IAccessRequest {
    /**
     * @summary 文件夹或者文件路径
     */
    path: string;
  }
  interface IActionSheetBadges {
    /**
     * @summary 需要飘红的选项的索引，从 0 开始
     */
    index: number;
    /**
     * @summary 飘红类型
     * @default "none"
     */
    type: `${EActionSheetBadgesType}`;
    /**
     * @summary type 为 'text', 'num' 时的内容
     */
    text: string;
  }
  interface IAppendFileRequest {
    /**
     * @summary 要追加内容的文件路径
     */
    filePath: string;
    /**
     * @summary 要追加的文本或二进制数据
     */
    data: string | ArrayBuffer;
    /**
     * @summary 指定写入文件的字符编码
     * @default 'utf8'
     */
    encoding?: `${EFileSystemEncoding}`;
  }
  interface IBeaconUpdateBeacons {
    /**
     * @summary iBeacon 设备广播的 UUID。
     */
    uuid: string;
    /**
     * @summary iBeacon 设备的主 ID。
     */
    major: string;
    /**
     * @summary iBeacon 设备的次 ID。
     */
    minor: string;
    /**
     * @summary 表示设备距离的估计值
     */
    proximity: EBeaconUpdateBeaconsProximity;
    /**
     * @summary iBeacon 设备的距离。
     */
    accuracy: string;
    /**
     * @summary iBeacon 信号强度。
     */
    rssi: string;
  }
  interface IBeehiveMultilevelSelectList {
    name: string;
    /**
     * @summary 选择数据列表
     */
    subList?: IBeehiveMultilevelSelectList[];
  }
  interface IBeehiveMultilevelSelectResult {
    name: string;
  }
  interface ICalculateRouteThroughPoints {
    /**
     * @summary 纬度。
     */
    lat: number;
    /**
     * @summary 经度。
     */
    lng: number;
  }
  interface IChooseDistrictHeadItem {
    /**
     * @summary 区块名，如“热门城市”。
     */
    title: string;
    /**
     * @summary 模块类型。枚举如下：
     *  0：常规城市，用户需要提供城市列表
     *  1：定位模块，支付宝自动获取用户当前城市
     *  2：展示支付宝提供的热门城市模块
     */
    type: EChooseDistrictHeadItemType;
    /**
     * @summary type 设置为 0 时需要提供的区块城市列表
     */
    list?: IChooseDistrictListItem[];
  }
  interface IChooseDistrictListItem {
    /**
     * @summary 城市名
     */
    name: string;
    /**
     * @summary 行政区划代码。不同行政区域对应的代码可参考 [2017年12月中华人民共和国县以上行政区划代码](http://www.mca.gov.cn/article/sj/xzqh/1980/201803/201803131454.html)
     */
    adCode: string;
    /**
     * @summary 城市名对应拼音拼写，方便用户检索
     */
    spell?: string;
    /**
     * @summary 子标题
     */
    appendName?: string;
    /**
     * @summary 额外信息
     */
    ext?: string;
    /**
     * @summary 支持级联，自定义次级城市列表
     */
    subList?: IChooseDistrictListItem[];
  }
  interface IChooseDistrictSeniorPageList {
    /**
     * @summary 境外左侧 tab 名称，不带左侧 tab 时可不填
     */
    title: string;
    headList?: IChooseDistrictHeadItem[];
    normalList?: IChooseDistrictListItem[];
  }
  interface ICopyFileRequest {
    /**
     * @summary 源文件路径
     * @description 只可以是普通文件
     */
    srcPath: string;
    /**
     * @summary 目标文件路径
     */
    destPath: string;
  }
  interface IGetBLEDeviceServicesServices {
    /**
     * @summary 蓝牙设备特征值对应服务的 UUID。
     */
    serviceId: string;
    /**
     * @summary 该服务是否为主服务。
     * - `true` 为主服务。
     * - `false` 不是主服务。
     */
    isPrimary: boolean;
  }
  interface IGetBeaconsBeacons {
    /**
     * @summary iBeacon 信号强度
     * @description Android 10.1.28 或之前的版本中，该接口返回的 rssi 值不能动态更新，建议使用事件触发方式
     */
    rssi: number;
    /**
     * @summary iBeacon 设备的主 id
     */
    major: number;
    /**
     * @summary iBeacon 设备的次 id
     */
    minor: number;
    /**
     * @summary 表示设备距离的枚举值(0-3分别代表：未知、极近、近、远)
     */
    proximity: number;
    /**
     * @summary iBeacon 设备的距离
     */
    accuracy: number;
    /**
     * @summary iBeacon 设备广播的 uuid
     */
    uuid: string;
    /**
     * @summary iOS 13.0+
     */
    timestamp?: number;
  }
  interface IGetConnectedWifiWifi {
    /**
     * @summary wifi SSID信息
     */
    SSID: string;
    /**
     * @summary wifi BSSID信息
     */
    BSSID: string;
    /**
     * @summary wifi是否为隐藏wifi
     */
    secure: boolean;
    /**
     * @summary wifi信号强度
     */
    signalStrength: number;
  }
  interface IGetFileInfoRequest {
    /**
     * @summary 文件路径
     */
    filePath: string;
    /**
     * @summary 摘要算法
     * @default md5
     */
    digestAlgorithm?: 'md5' | 'sha1';
  }
  interface IGetFileInfoResponse {
    /**
     * @summary 文件大小
     * @description 以字节为单位
     */
    size: number;
  }
  interface IGetSavedFileListFileList {
    size: number;
    apFilePath: string;
    createTime: number;
  }
  interface IGetSavedFileListResponse {
    /**
     * @summary 文件数组
     */
    fileList: Array<{
      /**
       * @summary 本地路径
       */
      filePath: string;
      /**
       * @summary 本地文件大小
       * @description 以字节为单位
       */
      size: number;
      /**
       * @summary 文件保存时的时间戳
       * @description 从 1970/01/01 08:00:00 到当前时间的秒数
       */
      createTime: number;
    }>;
  }
  interface IGetSettingAuthSetting {
    /**
     * @summary 地理位置。
     */
    location?: boolean;
    /**
     * @summary 保存到相册。
     */
    album?: boolean;
    /**
     * @summary 摄像头。
     */
    camera?: boolean;
    /**
     * @summary 唤起授权界面，用户可以授权小程序获取支付宝会员的基础信息。
     */
    userInfo?: boolean;
    /**
     * @summary 运动数据
     */
    alipaysports?: boolean;
    /**
     * @summary 手机号码
     */
    phoneNumber?: boolean;
    /**
     * @summary 收货地址
     */
    aliaddress?: boolean;
  }
  interface IGetWifiListWifiList {
    /**
     * @summary Wifi 的 SSID。
     */
    SSID: string;
    /**
     * @summary Wifi 的 BSSID。
     */
    BSSID: string;
    /**
     * @summary Wifi 是否安全。
     */
    secure: boolean;
    /**
     * @summary Wifi 信号强度。
     */
    signalStrength: number;
  }
  interface IIntersectionObserverObserveCallback {
    /**
     * @summary 相交比例
     */
    intersectionRatio: number;
    /**
     * @summary 相交区域的边界
     */
    intersectionRect: IIntersectionObserverObserveCallbackIntersectionRect;
    /**
     * @summary 目标边界
     */
    boundingClientRect: IIntersectionObserverObserveCallbackBoundingClientRect;
    /**
     * @summary 参照区域的边界
     */
    relativeRect: IIntersectionObserverObserveCallbackRelativeRect;
    /**
     * @summary 相交检测时的时间戳
     */
    time: number;
    /**
     * @summary 节点 ID
     */
    id: string;
    /**
     * @summary 节点自定义数据属性
     */
    dataset: Record<string, any>;
  }
  interface IIntersectionObserverObserveCallbackBoundingClientRect {
    /**
     * @summary 上边界
     */
    top: number;
    /**
     * @summary 右边界
     */
    right: number;
    /**
     * @summary 下边界
     */
    bottom: number;
    /**
     * @summary 左边界
     */
    left: number;
    /**
     * @summary 宽度
     */
    width: number;
    /**
     * @summary 高度
     */
    height: number;
  }
  interface IIntersectionObserverObserveCallbackIntersectionRect {
    /**
     * @summary 上边界
     */
    top: number;
    /**
     * @summary 右边界
     */
    right: number;
    /**
     * @summary 下边界
     */
    bottom: number;
    /**
     * @summary 左边界
     */
    left: number;
    /**
     * @summary 宽度
     */
    width: number;
    /**
     * @summary 高度
     */
    height: number;
  }
  interface IIntersectionObserverObserveCallbackRelativeRect {
    /**
     * @summary 上边界
     */
    top: number;
    /**
     * @summary 右边界
     */
    right: number;
    /**
     * @summary 下边界
     */
    bottom: number;
    /**
     * @summary 左边界
     */
    left: number;
    /**
     * @summary 宽度
     */
    width: number;
    /**
     * @summary 高度
     */
    height: number;
  }
  interface IIntersectionObserverRelativeToMargins {
    /**
     * @summary 节点布局区域的上边界
     */
    top?: number;
    /**
     * @summary 节点布局区域的右边界
     */
    right?: number;
    /**
     * @summary 节点布局区域的下边界
     */
    bottom?: number;
    /**
     * @summary 节点布局区域的左边界
     */
    left?: number;
  }
  interface IMapContextAddGroundOverlayIncludePoints {
    /**
     * @summary 纬度
     */
    latitude: number;
    /**
     * @summary 经度
     */
    longitude: number;
  }
  interface IMapContextAddMarkersMarkers {
    /**
     * @summary 标记点 id
     * @description 标记点 id，点击事件回调会返回此 id。
     */
    id: number;
    /**
     * @summary 纬度
     * @description 范围 -90 ~ 90。
     */
    latitude: number;
    /**
     * @summary 经度
     * @description 范围 -180 ~ 180。
     */
    longitude: number;
    /**
     * @summary 标注点名
     */
    title?: string;
    /**
     * @summary 项目目录下的图片路径
     * @description 不能用相对路径只能用 / 开头的绝对路径。
     */
    iconPath: string;
    /**
     * @summary map 高级定制渲染绘制 marker 样式
     * @description 优先级高于 iconPath, 对象参照 layout。
     */
    iconLayout?: IMapContextAddMarkersMarkersIconLayout;
    /**
     * @summary 顺时针旋转的角度
     * @description 范围 0 ~ 360
     * @default 0
     */
    rotate?: number;
    /**
     * @summary 是否透明
     * @default 1
     */
    alpha?: number;
    /**
     * @summary 宽度
     * @description 默认为图片的实际宽度
     */
    width?: number;
    /**
     * @summary 高度
     * @description 默认为图片的实际高度
     */
    height?: number;
    /**
     * @summary 标明在特定地图缩放级别下展示
     */
    displayRanges?: IMapContextAddMarkersMarkersDisplayRanges;
    /**
     * @summary 自定义 marker 上的气泡窗口
     * @description 地图上最多同时展示一个，绑定 onCalloutTap。
     */
    callout?: IMapContextAddMarkersMarkersCallout;
    /**
     * @summary 经纬度在标注图标的锚点-横向值
     * @description
     * 这两个值需要成对出现，anchorX 表示横向(0-1)，Y 表示竖向(0-1)。
     * anchorX: 0.5，anchorY: 1：表示底边中点。
     */
    anchorX?: number;
    /**
     * @summary 经纬度在标注图标的锚点-竖向值
     */
    anchorY?: number;
    /**
     * @summary callout 背景自定义
     * @description 目前只支持高德地图 style。
     */
    customCallout?: IMapContextAddMarkersMarkersCustomCallout;
    /**
     * @summary iconPath 对应的图片及该字符串共同生成 marker 的图标
     * @description 和 iconPath 一起使用，会将 iconPath 对应的图片及该字符串共同生成一个图片，当成 marker 的图标，marker 图片可以来源于 view。
     */
    iconAppendStr?: string;
    /**
     * @summary 底部描述文本颜色
     * @description marker 图片可以来源于 view
     * @default #33B276
     */
    iconAppendStrColor?: string;
    /**
     * @summary 基于屏幕位置扎点
     */
    fixedPoint?: IMapContextAddMarkersMarkersFixedPoint;
    /**
     * @summary marker 在地图上的绘制层级
     * @description 与地图上其他覆盖物统一的 Z 坐标系
     */
    markerLevel?: number;
    /**
     * @summary marker 上的气泡
     * @description 地图上可同时展示多个，绑定 onMarkerTap。
     */
    label?: IMapContextAddMarkersMarkersLabel;
    /**
     * @summary 自定义 marker 的样式和内容
     */
    style?: IMapContextAddMarkersMarkersStyle;
  }
  interface IMapContextAddMarkersMarkersCallout {
    /**
     * @summary 内容。
     */
    content?: string;
  }
  interface IMapContextAddMarkersMarkersCustomCallout {
    /**
     * @summary 样式类型。
     * @description
     * 有效值如下：
     * - `0` 为黑色 style
     * - `1` 为白色 style
     * - `2` 为背景 + 文本
     */
    type: number;
    /**
     * @summary 时间值。
     */
    time: string;
    /**
     * @summary 描述数组。
     */
    descList: IMapContextAddMarkersMarkersCustomCalloutDescList[];
    /**
     * @summary 是否展示。
     * @description
     * 有效值如下：
     * - `1` 展示
     */
    isShow: number;
    /**
     * @summary 使用 map 高级定制渲染
     * @description 。优先级最高, layout 对象参照 layout 定义。
     */
    layout?: IMapContextAddMarkersMarkersCustomCalloutLayout;
  }
  interface IMapContextAddMarkersMarkersCustomCalloutDescList {
    /**
     * @summary 文案
     */
    desc: string;
    /**
     * @summary CSS 色值。
     */
    descColor: string;
  }
  interface IMapContextAddMarkersMarkersCustomCalloutLayout {}
  interface IMapContextAddMarkersMarkersDisplayRanges {
    /**
     * @summary 缩放级别下边界
     */
    from: number;
    /**
     * @summary 缩放级别上边界
     */
    to: number;
  }
  interface IMapContextAddMarkersMarkersFixedPoint {
    /**
     * @summary 横向像素点
     * @description 距离地图左上角的像素数值，从 `0` 开始。
     */
    originX: number;
    /**
     * @summary 横向像素点
     * @description 距离地图左上角的像素数值，从 `0` 开始。
     */
    originY: number;
  }
  interface IMapContextAddMarkersMarkersIconLayout {}
  interface IMapContextAddMarkersMarkersLabel {
    /**
     * @summary 文案
     */
    content: string;
    /**
     * @summary 文案颜色
     * @default #000000
     */
    color?: string;
    /**
     * @summary 字体大小
     * @default 14
     */
    fontsize?: number;
    /**
     * @summary 圆角尺寸
     * @default 20
     */
    borderRadius?: number;
    /**
     * @summary 文本框背景色
     * @default #FFFFFF
     */
    bgColor?: string;
    /**
     * @summary 内边距
     * @default 20
     */
    padding?: number;
  }
  interface IMapContextAddMarkersMarkersStyle {
    /**
     * @summary 类型
     */
    type: 1 | 2 | 3;
    text?: string;
    icon?: string;
    /**
     * @summary 字体颜色
     * @default #33B276
     */
    color?: string;
    /**
     * @summary 背景色
     * @default #FFFFFF
     */
    bgColor?: string;
    /**
     * @default center
     */
    gravity?: 'left' | 'center' | 'right';
    /**
     * @summary 字体大小类型
     * @default standard
     */
    fontType?: 'small' | 'standard' | 'large';
  }
  interface IMapContextCalculateDistancePoints {
    /**
     * @summary 纬度。
     */
    latitude: number;
    /**
     * @summary 经度。
     */
    longitude: number;
  }
  interface IMapContextCalculateDistanceTargetPoints {
    /**
     * @summary 与 points 数组中首个点的直线距离符合目标距离的点，在 targetDistances 中的索引。
     */
    index: number;
    /**
     * @summary 目标距离的数值。（如果不传 targetPoints 或 targetPoints 参数为空，则返回的 targetDistances字段也为空。）
     */
    targetDistance: number;
    /**
     * @summary 纬度。
     */
    latitude: number;
    /**
     * @summary 经度。
     */
    longitude: number;
    /**
     * @summary 假设 points 数组为 [A,B,C]，符合目标距离的点为 B'， 且 B'- A 直线距离在 B-A 直线距离、C-A 直线距离之间，则 targetLineIndex 为 points 数组中的点 B 的索引数值。
     */
    targetLineIndex: number;
  }
  /**
   * @summary 自定义标记点上方的气泡窗口
   */
  interface IMapContextCallout {
    /**
     * @summary 内容。
     */
    content?: string;
  }
  interface IMapContextChangeMarkersAdd {
    /**
     * @summary 标记点 id
     * @description 标记点 id，点击事件回调会返回此 id。
     */
    id: number;
    /**
     * @summary 纬度
     * @description 范围 -90 ~ 90。
     */
    latitude: number;
    /**
     * @summary 经度
     * @description 范围 -180 ~ 180。
     */
    longitude: number;
    /**
     * @summary 标注点名
     */
    title?: string;
    /**
     * @summary 项目目录下的图片路径
     * @description 不能用相对路径只能用 / 开头的绝对路径。
     */
    iconPath: string;
    /**
     * @summary map 高级定制渲染绘制 marker 样式
     * @description 优先级高于 iconPath, 对象参照 layout。
     */
    iconLayout?: IMapContextChangeMarkersAddIconLayout;
    /**
     * @summary 顺时针旋转的角度
     * @description 范围 0 ~ 360
     * @default 0
     */
    rotate?: number;
    /**
     * @summary 是否透明
     * @default 1
     */
    alpha?: number;
    /**
     * @summary 宽度
     * @description 默认为图片的实际宽度
     */
    width?: number;
    /**
     * @summary 高度
     * @description 默认为图片的实际高度
     */
    height?: number;
    /**
     * @summary 标明在特定地图缩放级别下展示
     */
    displayRanges?: IMapContextChangeMarkersAddDisplayRanges;
    /**
     * @summary 自定义 marker 上的气泡窗口
     * @description 地图上最多同时展示一个，绑定 onCalloutTap。
     */
    callout?: IMapContextChangeMarkersAddCallout;
    /**
     * @summary 经纬度在标注图标的锚点-横向值
     * @description
     * 这两个值需要成对出现，anchorX 表示横向(0-1)，Y 表示竖向(0-1)。
     * anchorX: 0.5，anchorY: 1：表示底边中点。
     */
    anchorX?: number;
    /**
     * @summary 经纬度在标注图标的锚点-竖向值
     */
    anchorY?: number;
    /**
     * @summary callout 背景自定义
     * @description 目前只支持高德地图 style。
     */
    customCallout?: IMapContextChangeMarkersAddCustomCallout;
    /**
     * @summary iconPath 对应的图片及该字符串共同生成 marker 的图标
     * @description 和 iconPath 一起使用，会将 iconPath 对应的图片及该字符串共同生成一个图片，当成 marker 的图标，marker 图片可以来源于 view。
     */
    iconAppendStr?: string;
    /**
     * @summary 底部描述文本颜色
     * @description marker 图片可以来源于 view
     * @default #33B276
     */
    iconAppendStrColor?: string;
    /**
     * @summary 基于屏幕位置扎点
     */
    fixedPoint?: IMapContextChangeMarkersAddFixedPoint;
    /**
     * @summary marker 在地图上的绘制层级
     * @description 与地图上其他覆盖物统一的 Z 坐标系
     */
    markerLevel?: number;
    /**
     * @summary marker 上的气泡
     * @description 地图上可同时展示多个，绑定 onMarkerTap。
     */
    label?: IMapContextChangeMarkersAddLabel;
    /**
     * @summary 自定义 marker 的样式和内容
     */
    style?: IMapContextChangeMarkersAddStyle;
  }
  interface IMapContextChangeMarkersAddCallout {
    /**
     * @summary 内容。
     */
    content?: string;
  }
  interface IMapContextChangeMarkersAddCustomCallout {
    /**
     * @summary 样式类型。
     * @description
     * 有效值如下：
     * - `0` 为黑色 style
     * - `1` 为白色 style
     * - `2` 为背景 + 文本
     */
    type: number;
    /**
     * @summary 时间值。
     */
    time: string;
    /**
     * @summary 描述数组。
     */
    descList: IMapContextChangeMarkersAddCustomCalloutDescList[];
    /**
     * @summary 是否展示。
     * @description
     * 有效值如下：
     * - `1` 展示
     */
    isShow: number;
    /**
     * @summary 使用 map 高级定制渲染
     * @description 。优先级最高, layout 对象参照 layout 定义。
     */
    layout?: IMapContextChangeMarkersAddCustomCalloutLayout;
  }
  interface IMapContextChangeMarkersAddCustomCalloutDescList {
    /**
     * @summary 文案
     */
    desc: string;
    /**
     * @summary CSS 色值。
     */
    descColor: string;
  }
  interface IMapContextChangeMarkersAddCustomCalloutLayout {}
  interface IMapContextChangeMarkersAddDisplayRanges {
    /**
     * @summary 缩放级别下边界
     */
    from: number;
    /**
     * @summary 缩放级别上边界
     */
    to: number;
  }
  interface IMapContextChangeMarkersAddFixedPoint {
    /**
     * @summary 横向像素点
     * @description 距离地图左上角的像素数值，从 `0` 开始。
     */
    originX: number;
    /**
     * @summary 横向像素点
     * @description 距离地图左上角的像素数值，从 `0` 开始。
     */
    originY: number;
  }
  interface IMapContextChangeMarkersAddIconLayout {}
  interface IMapContextChangeMarkersAddLabel {
    /**
     * @summary 文案
     */
    content: string;
    /**
     * @summary 文案颜色
     * @default #000000
     */
    color?: string;
    /**
     * @summary 字体大小
     * @default 14
     */
    fontsize?: number;
    /**
     * @summary 圆角尺寸
     * @default 20
     */
    borderRadius?: number;
    /**
     * @summary 文本框背景色
     * @default #FFFFFF
     */
    bgColor?: string;
    /**
     * @summary 内边距
     * @default 20
     */
    padding?: number;
  }
  interface IMapContextChangeMarkersAddStyle {
    /**
     * @summary 类型
     */
    type: 1 | 2 | 3;
    text?: string;
    icon?: string;
    /**
     * @summary 字体颜色
     * @default #33B276
     */
    color?: string;
    /**
     * @summary 背景色
     * @default #FFFFFF
     */
    bgColor?: string;
    /**
     * @default center
     */
    gravity?: 'left' | 'center' | 'right';
    /**
     * @summary 字体大小类型
     * @default standard
     */
    fontType?: 'small' | 'standard' | 'large';
  }
  interface IMapContextChangeMarkersRemove {
    /**
     * @summary 标记点 id
     * @description 标记点 id，点击事件回调会返回此 id。
     */
    id: number;
    /**
     * @summary 纬度
     * @description 范围 -90 ~ 90。
     */
    latitude: number;
    /**
     * @summary 经度
     * @description 范围 -180 ~ 180。
     */
    longitude: number;
    /**
     * @summary 标注点名
     */
    title?: string;
    /**
     * @summary 项目目录下的图片路径
     * @description 不能用相对路径只能用 / 开头的绝对路径。
     */
    iconPath: string;
    /**
     * @summary map 高级定制渲染绘制 marker 样式
     * @description 优先级高于 iconPath, 对象参照 layout。
     */
    iconLayout?: IMapContextChangeMarkersRemoveIconLayout;
    /**
     * @summary 顺时针旋转的角度
     * @description 范围 0 ~ 360
     * @default 0
     */
    rotate?: number;
    /**
     * @summary 是否透明
     * @default 1
     */
    alpha?: number;
    /**
     * @summary 宽度
     * @description 默认为图片的实际宽度
     */
    width?: number;
    /**
     * @summary 高度
     * @description 默认为图片的实际高度
     */
    height?: number;
    /**
     * @summary 标明在特定地图缩放级别下展示
     */
    displayRanges?: IMapContextChangeMarkersRemoveDisplayRanges;
    /**
     * @summary 自定义 marker 上的气泡窗口
     * @description 地图上最多同时展示一个，绑定 onCalloutTap。
     */
    callout?: IMapContextChangeMarkersRemoveCallout;
    /**
     * @summary 经纬度在标注图标的锚点-横向值
     * @description
     * 这两个值需要成对出现，anchorX 表示横向(0-1)，Y 表示竖向(0-1)。
     * anchorX: 0.5，anchorY: 1：表示底边中点。
     */
    anchorX?: number;
    /**
     * @summary 经纬度在标注图标的锚点-竖向值
     */
    anchorY?: number;
    /**
     * @summary callout 背景自定义
     * @description 目前只支持高德地图 style。
     */
    customCallout?: IMapContextChangeMarkersRemoveCustomCallout;
    /**
     * @summary iconPath 对应的图片及该字符串共同生成 marker 的图标
     * @description 和 iconPath 一起使用，会将 iconPath 对应的图片及该字符串共同生成一个图片，当成 marker 的图标，marker 图片可以来源于 view。
     */
    iconAppendStr?: string;
    /**
     * @summary 底部描述文本颜色
     * @description marker 图片可以来源于 view
     * @default #33B276
     */
    iconAppendStrColor?: string;
    /**
     * @summary 基于屏幕位置扎点
     */
    fixedPoint?: IMapContextChangeMarkersRemoveFixedPoint;
    /**
     * @summary marker 在地图上的绘制层级
     * @description 与地图上其他覆盖物统一的 Z 坐标系
     */
    markerLevel?: number;
    /**
     * @summary marker 上的气泡
     * @description 地图上可同时展示多个，绑定 onMarkerTap。
     */
    label?: IMapContextChangeMarkersRemoveLabel;
    /**
     * @summary 自定义 marker 的样式和内容
     */
    style?: IMapContextChangeMarkersRemoveStyle;
  }
  interface IMapContextChangeMarkersRemoveCallout {
    /**
     * @summary 内容。
     */
    content?: string;
  }
  interface IMapContextChangeMarkersRemoveCustomCallout {
    /**
     * @summary 样式类型。
     * @description
     * 有效值如下：
     * - `0` 为黑色 style
     * - `1` 为白色 style
     * - `2` 为背景 + 文本
     */
    type: number;
    /**
     * @summary 时间值。
     */
    time: string;
    /**
     * @summary 描述数组。
     */
    descList: IMapContextChangeMarkersRemoveCustomCalloutDescList[];
    /**
     * @summary 是否展示。
     * @description
     * 有效值如下：
     * - `1` 展示
     */
    isShow: number;
    /**
     * @summary 使用 map 高级定制渲染
     * @description 。优先级最高, layout 对象参照 layout 定义。
     */
    layout?: IMapContextChangeMarkersRemoveCustomCalloutLayout;
  }
  interface IMapContextChangeMarkersRemoveCustomCalloutDescList {
    /**
     * @summary 文案
     */
    desc: string;
    /**
     * @summary CSS 色值。
     */
    descColor: string;
  }
  interface IMapContextChangeMarkersRemoveCustomCalloutLayout {}
  interface IMapContextChangeMarkersRemoveDisplayRanges {
    /**
     * @summary 缩放级别下边界
     */
    from: number;
    /**
     * @summary 缩放级别上边界
     */
    to: number;
  }
  interface IMapContextChangeMarkersRemoveFixedPoint {
    /**
     * @summary 横向像素点
     * @description 距离地图左上角的像素数值，从 `0` 开始。
     */
    originX: number;
    /**
     * @summary 横向像素点
     * @description 距离地图左上角的像素数值，从 `0` 开始。
     */
    originY: number;
  }
  interface IMapContextChangeMarkersRemoveIconLayout {}
  interface IMapContextChangeMarkersRemoveLabel {
    /**
     * @summary 文案
     */
    content: string;
    /**
     * @summary 文案颜色
     * @default #000000
     */
    color?: string;
    /**
     * @summary 字体大小
     * @default 14
     */
    fontsize?: number;
    /**
     * @summary 圆角尺寸
     * @default 20
     */
    borderRadius?: number;
    /**
     * @summary 文本框背景色
     * @default #FFFFFF
     */
    bgColor?: string;
    /**
     * @summary 内边距
     * @default 20
     */
    padding?: number;
  }
  interface IMapContextChangeMarkersRemoveStyle {
    /**
     * @summary 类型
     */
    type: 1 | 2 | 3;
    text?: string;
    icon?: string;
    /**
     * @summary 字体颜色
     * @default #33B276
     */
    color?: string;
    /**
     * @summary 背景色
     * @default #FFFFFF
     */
    bgColor?: string;
    /**
     * @default center
     */
    gravity?: 'left' | 'center' | 'right';
    /**
     * @summary 字体大小类型
     * @default standard
     */
    fontType?: 'small' | 'standard' | 'large';
  }
  interface IMapContextChangeMarkersUpdate {
    /**
     * @summary 标记点 id
     * @description 标记点 id，点击事件回调会返回此 id。
     */
    id: number;
    /**
     * @summary 纬度
     * @description 范围 -90 ~ 90。
     */
    latitude: number;
    /**
     * @summary 经度
     * @description 范围 -180 ~ 180。
     */
    longitude: number;
    /**
     * @summary 标注点名
     */
    title?: string;
    /**
     * @summary 项目目录下的图片路径
     * @description 不能用相对路径只能用 / 开头的绝对路径。
     */
    iconPath: string;
    /**
     * @summary map 高级定制渲染绘制 marker 样式
     * @description 优先级高于 iconPath, 对象参照 layout。
     */
    iconLayout?: IMapContextChangeMarkersUpdateIconLayout;
    /**
     * @summary 顺时针旋转的角度
     * @description 范围 0 ~ 360
     * @default 0
     */
    rotate?: number;
    /**
     * @summary 是否透明
     * @default 1
     */
    alpha?: number;
    /**
     * @summary 宽度
     * @description 默认为图片的实际宽度
     */
    width?: number;
    /**
     * @summary 高度
     * @description 默认为图片的实际高度
     */
    height?: number;
    /**
     * @summary 标明在特定地图缩放级别下展示
     */
    displayRanges?: IMapContextChangeMarkersUpdateDisplayRanges;
    /**
     * @summary 自定义 marker 上的气泡窗口
     * @description 地图上最多同时展示一个，绑定 onCalloutTap。
     */
    callout?: IMapContextChangeMarkersUpdateCallout;
    /**
     * @summary 经纬度在标注图标的锚点-横向值
     * @description
     * 这两个值需要成对出现，anchorX 表示横向(0-1)，Y 表示竖向(0-1)。
     * anchorX: 0.5，anchorY: 1：表示底边中点。
     */
    anchorX?: number;
    /**
     * @summary 经纬度在标注图标的锚点-竖向值
     */
    anchorY?: number;
    /**
     * @summary callout 背景自定义
     * @description 目前只支持高德地图 style。
     */
    customCallout?: IMapContextChangeMarkersUpdateCustomCallout;
    /**
     * @summary iconPath 对应的图片及该字符串共同生成 marker 的图标
     * @description 和 iconPath 一起使用，会将 iconPath 对应的图片及该字符串共同生成一个图片，当成 marker 的图标，marker 图片可以来源于 view。
     */
    iconAppendStr?: string;
    /**
     * @summary 底部描述文本颜色
     * @description marker 图片可以来源于 view
     * @default #33B276
     */
    iconAppendStrColor?: string;
    /**
     * @summary 基于屏幕位置扎点
     */
    fixedPoint?: IMapContextChangeMarkersUpdateFixedPoint;
    /**
     * @summary marker 在地图上的绘制层级
     * @description 与地图上其他覆盖物统一的 Z 坐标系
     */
    markerLevel?: number;
    /**
     * @summary marker 上的气泡
     * @description 地图上可同时展示多个，绑定 onMarkerTap。
     */
    label?: IMapContextChangeMarkersUpdateLabel;
    /**
     * @summary 自定义 marker 的样式和内容
     */
    style?: IMapContextChangeMarkersUpdateStyle;
  }
  interface IMapContextChangeMarkersUpdateCallout {
    /**
     * @summary 内容。
     */
    content?: string;
  }
  interface IMapContextChangeMarkersUpdateCustomCallout {
    /**
     * @summary 样式类型。
     * @description
     * 有效值如下：
     * - `0` 为黑色 style
     * - `1` 为白色 style
     * - `2` 为背景 + 文本
     */
    type: number;
    /**
     * @summary 时间值。
     */
    time: string;
    /**
     * @summary 描述数组。
     */
    descList: IMapContextChangeMarkersUpdateCustomCalloutDescList[];
    /**
     * @summary 是否展示。
     * @description
     * 有效值如下：
     * - `1` 展示
     */
    isShow: number;
    /**
     * @summary 使用 map 高级定制渲染
     * @description 。优先级最高, layout 对象参照 layout 定义。
     */
    layout?: IMapContextChangeMarkersUpdateCustomCalloutLayout;
  }
  interface IMapContextChangeMarkersUpdateCustomCalloutDescList {
    /**
     * @summary 文案
     */
    desc: string;
    /**
     * @summary CSS 色值。
     */
    descColor: string;
  }
  interface IMapContextChangeMarkersUpdateCustomCalloutLayout {}
  interface IMapContextChangeMarkersUpdateDisplayRanges {
    /**
     * @summary 缩放级别下边界
     */
    from: number;
    /**
     * @summary 缩放级别上边界
     */
    to: number;
  }
  interface IMapContextChangeMarkersUpdateFixedPoint {
    /**
     * @summary 横向像素点
     * @description 距离地图左上角的像素数值，从 `0` 开始。
     */
    originX: number;
    /**
     * @summary 横向像素点
     * @description 距离地图左上角的像素数值，从 `0` 开始。
     */
    originY: number;
  }
  interface IMapContextChangeMarkersUpdateIconLayout {}
  interface IMapContextChangeMarkersUpdateLabel {
    /**
     * @summary 文案
     */
    content: string;
    /**
     * @summary 文案颜色
     * @default #000000
     */
    color?: string;
    /**
     * @summary 字体大小
     * @default 14
     */
    fontsize?: number;
    /**
     * @summary 圆角尺寸
     * @default 20
     */
    borderRadius?: number;
    /**
     * @summary 文本框背景色
     * @default #FFFFFF
     */
    bgColor?: string;
    /**
     * @summary 内边距
     * @default 20
     */
    padding?: number;
  }
  interface IMapContextChangeMarkersUpdateStyle {
    /**
     * @summary 类型
     */
    type: 1 | 2 | 3;
    text?: string;
    icon?: string;
    /**
     * @summary 字体颜色
     * @default #33B276
     */
    color?: string;
    /**
     * @summary 背景色
     * @default #FFFFFF
     */
    bgColor?: string;
    /**
     * @default center
     */
    gravity?: 'left' | 'center' | 'right';
    /**
     * @summary 字体大小类型
     * @default standard
     */
    fontType?: 'small' | 'standard' | 'large';
  }
  /**
   * @summary 自定义 callout 背景
   */
  interface IMapContextCustomCallout {
    /**
     * @summary 样式类型。
     * @description 有效值如下：
     * - `0` 为黑色 style
     * - `1` 为白色 style
     * - `2` 为背景 + 文本
     */
    type: number;
    /**
     * @summary 时间值。
     */
    time: string;
    /**
     * @summary 描述数组。
     */
    descList: IMapContextCustomCalloutDesc[];
    /**
     * @summary 是否展示。
     * @description 有效值如下：
     * - `1` 展示
     */
    isShow: number;
    /**
     * @summary 使用 map 高级定制渲染
     * @description 。优先级最高, layout 对象参照 layout 定义。
     */
    layout?: object;
  }
  interface IMapContextCustomCalloutDesc {
    /**
     * @summary 文案
     */
    desc: string;
    /**
     * @summary CSS 色值。
     */
    descColor: string;
  }
  interface IMapContextDisplayRange {
    /**
     * @summary 缩放级别下边界
     */
    from: number;
    /**
     * @summary 缩放级别上边界
     */
    to: number;
  }
  interface IMapContextIncludePointsPoints {
    /**
     * @summary 纬度
     */
    latitude: number;
    /**
     * @summary 经度
     */
    longitude: number;
  }
  /**
   * @summary marker 对象
   * @description 标记点，用于在地图上显示标记的位置。
   * - 可利用该参数显示多个定位点。
   * - 地点标注不支持设置英文。
   * Marker 样式优先级如下：
   * - customCallout，callout 与 label 互斥，优先级排序为：label > customCallout > callout。
   * - style 与 icon 互斥，优先级排序为：style > iconAppendStr；style > icon。
   */
  interface IMapContextMarker {
    /**
     * @summary 标记点 id
     * @description 标记点 id，点击事件回调会返回此 id。
     */
    id: number;
    /**
     * @summary 纬度
     * @description 范围 -90 ~ 90。
     */
    latitude: number;
    /**
     * @summary 经度
     * @description 范围 -180 ~ 180。
     */
    longitude: number;
    /**
     * @summary 标注点名
     */
    title?: string;
    /**
     * @summary 项目目录下的图片路径
     * @description 不能用相对路径只能用 / 开头的绝对路径。
     */
    iconPath: string;
    /**
     * @summary map 高级定制渲染绘制 marker 样式
     * @description 优先级高于 iconPath, 对象参照 layout。
     */
    iconLayout?: object;
    /**
     * @summary 顺时针旋转的角度
     * @description 范围 0 ~ 360
     * @default 0
     */
    rotate?: number;
    /**
     * @summary 是否透明
     * @default 1
     */
    alpha?: number;
    /**
     * @summary 宽度
     * @description 默认为图片的实际宽度
     */
    width?: number;
    /**
     * @summary 高度
     * @description 默认为图片的实际高度
     */
    height?: number;
    /**
     * @summary 标明在特定地图缩放级别下展示
     */
    displayRanges?: IMapContextDisplayRange;
    /**
     * @summary 自定义 marker 上的气泡窗口
     * @description 地图上最多同时展示一个，绑定 onCalloutTap。
     */
    callout?: IMapContextCallout;
    /**
     * @summary 经纬度在标注图标的锚点-横向值
     * @description 这两个值需要成对出现，anchorX 表示横向(0-1)，Y 表示竖向(0-1)。
     * anchorX: 0.5，anchorY: 1：表示底边中点。
     */
    anchorX?: number;
    /**
     * @summary 经纬度在标注图标的锚点-竖向值
     */
    anchorY?: number;
    /**
     * @summary callout 背景自定义
     * @description 目前只支持高德地图 style。
     */
    customCallout?: IMapContextCustomCallout;
    /**
     * @summary iconPath 对应的图片及该字符串共同生成 marker 的图标
     * @description 和 iconPath 一起使用，会将 iconPath 对应的图片及该字符串共同生成一个图片，当成 marker 的图标，marker 图片可以来源于 view。
     */
    iconAppendStr?: string;
    /**
     * @summary 底部描述文本颜色
     * @description marker 图片可以来源于 view
     * @default #33B276
     */
    iconAppendStrColor?: string;
    /**
     * @summary 基于屏幕位置扎点
     */
    fixedPoint?: IMapContextMarkerFixedPoint;
    /**
     * @summary marker 在地图上的绘制层级
     * @description 与地图上其他覆盖物统一的 Z 坐标系
     */
    markerLevel?: number;
    /**
     * @summary marker 上的气泡
     * @description 地图上可同时展示多个，绑定 onMarkerTap。
     */
    label?: IMapContextMarkerLabel;
    /**
     * @summary 自定义 marker 的样式和内容
     */
    style?: IMapContextMarkerStyle;
  }
  /**
   * @summary 基于屏幕位置的扎点。
   */
  interface IMapContextMarkerFixedPoint {
    /**
     * @summary 横向像素点
     * @description 距离地图左上角的像素数值，从 `0` 开始。
     */
    originX: number;
    /**
     * @summary 横向像素点
     * @description 距离地图左上角的像素数值，从 `0` 开始。
     */
    originY: number;
  }
  interface IMapContextMarkerLabel {
    /**
     * @summary 文案
     */
    content: string;
    /**
     * @summary 文案颜色
     * @default #000000
     */
    color?: string;
    /**
     * @summary 字体大小
     * @default 14
     */
    fontsize?: number;
    /**
     * @summary 圆角尺寸
     * @default 20
     */
    borderRadius?: number;
    /**
     * @summary 文本框背景色
     * @default #FFFFFF
     */
    bgColor?: string;
    /**
     * @summary 内边距
     * @default 20
     */
    padding?: number;
  }
  interface IMapContextMarkerStyle {
    /**
     * @summary 类型
     */
    type: 1 | 2 | 3;
    text?: string;
    icon?: string;
    /**
     * @summary 字体颜色
     * @default #33B276
     */
    color?: string;
    /**
     * @summary 背景色
     * @default #FFFFFF
     */
    bgColor?: string;
    /**
     * @default center
     */
    gravity?: 'left' | 'center' | 'right';
    /**
     * @summary 字体大小类型
     * @default standard
     */
    fontType?: 'small' | 'standard' | 'large';
  }
  /**
   * @summary 经纬度点位。
   */
  interface IMapContextPoint {
    /**
     * @summary 纬度
     */
    latitude: number;
    /**
     * @summary 经度
     */
    longitude: number;
  }
  interface IMapContextPolygonContainsPointPoint {
    /**
     * @summary 纬度
     */
    latitude: number;
    /**
     * @summary 经度
     */
    longitude: number;
  }
  interface IMapContextPolygonContainsPointPolygon {
    /**
     * @summary 纬度
     */
    latitude: number;
    /**
     * @summary 经度
     */
    longitude: number;
  }
  interface IMapContextSmoothMovePolylinePoints {
    /**
     * @summary 纬度
     */
    latitude: number;
    /**
     * @summary 经度
     */
    longitude: number;
  }
  interface IMapContextUpdateComponentsCommand {
    markerAnim?: IMapContextUpdateComponentsCommandMarkerAnim;
  }
  interface IMapContextUpdateComponentsCommandMarkerAnim {
    type: number;
    markerId: number;
  }
  interface IMapContextUpdateComponentsIncludePadding {
    left: number;
    right: number;
    top: number;
    bottom: number;
  }
  interface IMapContextUpdateComponentsIncludePoints {
    /**
     * @summary 纬度
     */
    latitude: number;
    /**
     * @summary 经度
     */
    longitude: number;
  }
  interface IMapContextUpdateComponentsMarkers {
    /**
     * @summary 标记点 id
     * @description 标记点 id，点击事件回调会返回此 id。
     */
    id: number;
    /**
     * @summary 纬度
     * @description 范围 -90 ~ 90。
     */
    latitude: number;
    /**
     * @summary 经度
     * @description 范围 -180 ~ 180。
     */
    longitude: number;
    /**
     * @summary 标注点名
     */
    title?: string;
    /**
     * @summary 项目目录下的图片路径
     * @description 不能用相对路径只能用 / 开头的绝对路径。
     */
    iconPath: string;
    /**
     * @summary map 高级定制渲染绘制 marker 样式
     * @description 优先级高于 iconPath, 对象参照 layout。
     */
    iconLayout?: IMapContextUpdateComponentsMarkersIconLayout;
    /**
     * @summary 顺时针旋转的角度
     * @description 范围 0 ~ 360
     * @default 0
     */
    rotate?: number;
    /**
     * @summary 是否透明
     * @default 1
     */
    alpha?: number;
    /**
     * @summary 宽度
     * @description 默认为图片的实际宽度
     */
    width?: number;
    /**
     * @summary 高度
     * @description 默认为图片的实际高度
     */
    height?: number;
    /**
     * @summary 标明在特定地图缩放级别下展示
     */
    displayRanges?: IMapContextUpdateComponentsMarkersDisplayRanges;
    /**
     * @summary 自定义 marker 上的气泡窗口
     * @description 地图上最多同时展示一个，绑定 onCalloutTap。
     */
    callout?: IMapContextUpdateComponentsMarkersCallout;
    /**
     * @summary 经纬度在标注图标的锚点-横向值
     * @description
     * 这两个值需要成对出现，anchorX 表示横向(0-1)，Y 表示竖向(0-1)。
     * anchorX: 0.5，anchorY: 1：表示底边中点。
     */
    anchorX?: number;
    /**
     * @summary 经纬度在标注图标的锚点-竖向值
     */
    anchorY?: number;
    /**
     * @summary callout 背景自定义
     * @description 目前只支持高德地图 style。
     */
    customCallout?: IMapContextUpdateComponentsMarkersCustomCallout;
    /**
     * @summary iconPath 对应的图片及该字符串共同生成 marker 的图标
     * @description 和 iconPath 一起使用，会将 iconPath 对应的图片及该字符串共同生成一个图片，当成 marker 的图标，marker 图片可以来源于 view。
     */
    iconAppendStr?: string;
    /**
     * @summary 底部描述文本颜色
     * @description marker 图片可以来源于 view
     * @default #33B276
     */
    iconAppendStrColor?: string;
    /**
     * @summary 基于屏幕位置扎点
     */
    fixedPoint?: IMapContextUpdateComponentsMarkersFixedPoint;
    /**
     * @summary marker 在地图上的绘制层级
     * @description 与地图上其他覆盖物统一的 Z 坐标系
     */
    markerLevel?: number;
    /**
     * @summary marker 上的气泡
     * @description 地图上可同时展示多个，绑定 onMarkerTap。
     */
    label?: IMapContextUpdateComponentsMarkersLabel;
    /**
     * @summary 自定义 marker 的样式和内容
     */
    style?: IMapContextUpdateComponentsMarkersStyle;
  }
  interface IMapContextUpdateComponentsMarkersCallout {
    /**
     * @summary 内容。
     */
    content?: string;
  }
  interface IMapContextUpdateComponentsMarkersCustomCallout {
    /**
     * @summary 样式类型。
     * @description
     * 有效值如下：
     * - `0` 为黑色 style
     * - `1` 为白色 style
     * - `2` 为背景 + 文本
     */
    type: number;
    /**
     * @summary 时间值。
     */
    time: string;
    /**
     * @summary 描述数组。
     */
    descList: IMapContextUpdateComponentsMarkersCustomCalloutDescList[];
    /**
     * @summary 是否展示。
     * @description
     * 有效值如下：
     * - `1` 展示
     */
    isShow: number;
    /**
     * @summary 使用 map 高级定制渲染
     * @description 。优先级最高, layout 对象参照 layout 定义。
     */
    layout?: IMapContextUpdateComponentsMarkersCustomCalloutLayout;
  }
  interface IMapContextUpdateComponentsMarkersCustomCalloutDescList {
    /**
     * @summary 文案
     */
    desc: string;
    /**
     * @summary CSS 色值。
     */
    descColor: string;
  }
  interface IMapContextUpdateComponentsMarkersCustomCalloutLayout {}
  interface IMapContextUpdateComponentsMarkersDisplayRanges {
    /**
     * @summary 缩放级别下边界
     */
    from: number;
    /**
     * @summary 缩放级别上边界
     */
    to: number;
  }
  interface IMapContextUpdateComponentsMarkersFixedPoint {
    /**
     * @summary 横向像素点
     * @description 距离地图左上角的像素数值，从 `0` 开始。
     */
    originX: number;
    /**
     * @summary 横向像素点
     * @description 距离地图左上角的像素数值，从 `0` 开始。
     */
    originY: number;
  }
  interface IMapContextUpdateComponentsMarkersIconLayout {}
  interface IMapContextUpdateComponentsMarkersLabel {
    /**
     * @summary 文案
     */
    content: string;
    /**
     * @summary 文案颜色
     * @default #000000
     */
    color?: string;
    /**
     * @summary 字体大小
     * @default 14
     */
    fontsize?: number;
    /**
     * @summary 圆角尺寸
     * @default 20
     */
    borderRadius?: number;
    /**
     * @summary 文本框背景色
     * @default #FFFFFF
     */
    bgColor?: string;
    /**
     * @summary 内边距
     * @default 20
     */
    padding?: number;
  }
  interface IMapContextUpdateComponentsMarkersStyle {
    /**
     * @summary 类型
     */
    type: 1 | 2 | 3;
    text?: string;
    icon?: string;
    /**
     * @summary 字体颜色
     * @default #33B276
     */
    color?: string;
    /**
     * @summary 背景色
     * @default #FFFFFF
     */
    bgColor?: string;
    /**
     * @default center
     */
    gravity?: 'left' | 'center' | 'right';
    /**
     * @summary 字体大小类型
     * @default standard
     */
    fontType?: 'small' | 'standard' | 'large';
  }
  interface IMapContextUpdateComponentsPolyline {
    /**
     * @summary 路线的经纬度集合
     */
    points?: IMapContextUpdateComponentsPolylinePoints[];
    /**
     * @summary 轨迹动画的颜色
     */
    color?: string;
    /**
     * @summary 路线宽度
     */
    width?: number;
    /**
     * @summary 是否虚线
     */
    dottedLine?: boolean;
  }
  interface IMapContextUpdateComponentsPolylinePoints {
    /**
     * @summary 纬度
     */
    latitude: number;
    /**
     * @summary 经度
     */
    longitude: number;
  }
  interface IMapContextUpdateComponentsSetting {
    gestureEnable?: 0 | 1;
    showCompass?: 0 | 1;
    showScale?: 0 | 1;
    tiltGesturesEnabled?: 0 | 1;
    rotateGesturesEnabled?: 0 | 1;
    zoomGesturesEnabled?: 0 | 1;
    scrollGesturesEnabled?: 0 | 1;
    showMapText?: 0 | 1;
    trafficEnabled?: 0 | 1;
    enableBuilding?: 0 | 1;
    logoPosition?: IMapContextUpdateComponentsSettingLogoPosition;
    scaleByMapCenter?: 0 | 1;
  }
  interface IMapContextUpdateComponentsSettingLogoPosition {
    centerX?: number;
    centerY?: number;
  }
  interface IMapContextUpdateGroundOverlayIncludePoints {
    /**
     * @summary 纬度
     */
    latitude: number;
    /**
     * @summary 经度
     */
    longitude: number;
  }
  interface IMkdirRequest {
    /**
     * @summary 创建的目录路径
     */
    dirPath: string;
    /**
     * @summary 是否在递归创建该目录的上级目录后再创建该目录
     * @description 如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。
     * @default false
     */
    recursive?: boolean;
  }
  interface IMyApGetAuthCodeAuthErrorScopes {
    /**
     * @summary key 是授权失败的 scope，value 是对应的错误码
     */
    [scope: string]: string;
  }
  interface IMyApNsfBizContext {
    /**
     * @summary 用于代表商户风险类型，请按示例值填写。	固定传入riskinfo_nsf_common。
     */
    risk_type: string;
    /**
     * @summary 用于输入使用此服务的商户ID。	示例：2088345256451234
     */
    pid: string;
    /**
     * @summary 用于输入用户支付宝的 2088 账号，如不了解此字段如何获取，可了解下静默授权。如参数无法提供，请填写“null”。	示例：2088501624560335
     */
    user_id: string;
    /**
     * @summary 用于输入用户注册支付宝的手机号码。如参数无法提供，请填写“null”。	示例：13810935692
     */
    mobile_no: string;
    /**
     * @summary 用于输入用户身份证号。如参数无法提供，请填写“null”。	示例：13810935692
     */
    cert_no?: string;
    /**
     * @summary 用于输入用户产生交易时的地理位置信息。如参数无法提供，请填写“null”。	示例：30.2727707248263
     */
    lbs?: string;
    /**
     * @summary 用户购买或使用服务时产生的具体金额。如参数无法提供，请填写“null”。	示例：97.23
     */
    sales_amount?: string;
  }
  interface IMyApNsfResult {
    /**
     * @summary 风险识别结果
     * @description
     * 示例值：{\"riskinfo_nsf_common_infocode\":\"172\",\"riskinfo_nsf_common\":\"rank1\"}
     * riskinfo_nsf_common 风险评级结果:
     *  - rank0 提供信息不足，提供参数信息有误，或提供的支付宝账号不存在。
     *  - rank1 表示用户拒付风险为低rank2 表示用户拒付风险为中。
     *  - rank3 表示用户拒付风险为高。
     * riskinfo_nsf_common_infocode 表示风险识别类型
     *  - 先享后付场景下当前类型标识为172，无其余类型
     */
    riskResult: string;
    /**
     * @summary 风险信息描述
     * @description 示例值：风险信息描述。	{\"rank0\":\"等级0\"}
     */
    riskResultDesc: string;
    /**
     * @summary 业务唯一识别码，用户标识请求信息。
     * @description 示例值：0b92uueie87636222
     */
    uniqueId: string;
  }
  interface IMyApPreventCheatBizContext {
    /**
     * @summary 合作伙伴匹配服务类型,请按照示例值填写
     * @description 示例值: 固定传 marketing
     */
    service: string;
    /**
     * @summary 风险策略类型，请按照示例值填写
     * @description 示例值: 固定传 riskinfo_anticheat_common
     */
    risk_type: string;
    /**
     * @summary 用于输入用户注册的手机号码
     * @description 示例值: 13810935692
     */
    mobile_no: string;
    /**
     * @summary 申请业务合作伙伴 ID
     * @description 示例值: 20881111222222
     */
    pid: string;
    /**
     * @summary 支付宝用户 ID
     * @description 示例值: 20881111222233
     */
    user_id?: string;
    /**
     * @summary 银行卡号
     * @description 示例值: 62223456765456
     */
    bank_card_no?: string;
    /**
     * @summary 用于输入用户的身份证号码
     * @description 示例值: 230109199911110921
     */
    cert_no?: string;
    /**
     * @summary 账户登录 IP
     * @description 示例值: 192.168.0.1
     */
    client_ip?: string;
    /**
     * @summary 邮箱账号
     * @description 示例值: zhifubao@163.com
     */
    email_address?: string;
    /**
     * @summary 手机序列号
     * @description 示例值: 865736031418584
     */
    imei?: string;
    /**
     * @summary 国际移动用户识别码
     * @description 示例值: 460001234567890
     */
    imsi?: string;
    /**
     * @summary MAC 地址或设备唯一标识
     * @description 示例值: 42.118.71.72
     */
    mac_address?: string;
    /**
     * @summary 拓展字段，其余信息通过此字段进行传输
     * @description
     * 业务约定：
     * - nickname: 账户昵称
     * - reg_time: 账户注册时间
     * 示例值：
     * "extended_info": { " nickname": "小蚂蚁"," reg_time": "2018-10-01 00:00:09" }
     */
    extended_info?: string;
  }
  interface IMyApPreventCheatResult {
    /**
     * @summary 风险识别结果
     * @description
     * 示例值：
     * {\"riskinfo_anticheat_common\":\"rank3\",\"riskinfo_anticheat_common_infocode\":\"171\"}
     * 描述：
     * riskinfo_anticheat_common 风险评级结果
     * - rank0: 信息不足/参数有误
     * - rank1: 表示用户作弊风险为低
     * - rank2: 表示用户作弊风险为中
     * - rank3: 表示用户作弊风险为高
     * riskinfo_anticheat_common_infocode 风险评级说明
     * - 171: 作弊风险
     */
    riskResult: string;
    /**
     * @summary 风险信息描述
     * @description {\"rank0\":\"等级0\"}
     */
    riskResultDesc: string;
    /**
     * @summary 业务唯一识别码
     * @description
     * 用户标识请求信息
     * 示例值：0b92uueie87636222
     */
    uniqueId: string;
  }
  interface IMyChooseAlipayContactContacts {
    /**
     * @summary 账号的真实姓名。
     */
    realName: string;
    /**
     * @summary 账号的头像链接。
     */
    avatar: string;
    /**
     * @summary 账号的邮箱
     */
    email?: string;
    /**
     * @summary 支付宝账号唯一标识符
     */
    userId: string;
    /**
     * @summary 账号对应的手机号码
     * @description
     * 请在手机端开启支付宝客户端 APP 的通讯录权限，否则可能出现获取不到手机号码的情况。
     * 手机本地系统通讯录号码需要与支付宝好友手机号码一致，否则可能出现获取不到手机号码的情况。
     */
    mobile?: string;
    from?: never;
  }
  interface IMyChooseContactContactsDicArray {
    /**
     * @summary 支付宝账号唯一标识符。
     */
    userId: string;
    /**
     * @summary 账号的头像链接。
     */
    avatar: string;
    /**
     * @summary 账号对应的手机号码。
     * @description
     * 请在手机端开启支付宝客户端 APP 的通讯录权限，否则可能出现获取不到手机号码的情况。
     * 手机本地系统通讯录号码需要与支付宝好友手机号码一致，否则可能出现获取不到手机号码的情况。
     */
    mobile: string;
    /**
     * @summary 账号的真实姓名。
     */
    realName: string;
    /**
     * @summary 账号的显示名称，即支付宝设置的备注名称，默认为朋友圈里面的昵称。
     */
    displayName: string;
    account?: never;
  }
  interface IMyCreateIntersectionObserverOption {
    thresholds?: number[];
    initialRatio?: number;
    selectAll?: boolean;
    dataset?: boolean;
    strict?: boolean;
  }
  interface IMyCreateIntersectionObserverOption {
    thresholds?: number[];
    initialRatio?: number;
    selectAll?: boolean;
    dataset?: boolean;
    strict?: boolean;
  }
  interface IMyCreateSelectorQueryOption {
    /**
     * @summary 是否开启选择器严格模式
     * @sdk 2.7.3
     */
    strict?: boolean;
  }
  interface IMyGetAccountInfoSyncMiniProgram {
    /**
     * @summary 小程序 appId
     */
    appId: string;
    /**
     * @summary 小程序当前运行的版本
     */
    envVersion: 'release' | 'develop' | 'trial' | 'gray';
    /**
     * @summary 线上小程序版本号
     */
    version: string;
  }
  interface IMyGetAccountInfoSyncPlugin {
    /**
     * @summary 插件 appId
     */
    appId: string;
    /**
     * @summary 插件版本号
     */
    version: string;
  }
  interface IMyGetAppBaseInfoHost {
    /**
     * @summary 宿主 app 对应的 appId。
     */
    appId: string;
  }
  interface IMyGetLocationPois {
    /**
     * @summary poi名称。
     */
    number: string;
    /**
     * @summary poi地址。
     */
    address: string;
  }
  interface IMyGetLocationStreetNumber {
    /**
     * @summary 街道 number。
     */
    number: string;
    /**
     * @summary 街道名称。
     */
    street: string;
  }
  interface IMyGetWindowInfoSafeArea {
    left: number;
    right: number;
    top: number;
    bottom: number;
    height: number;
    width: number;
  }
  interface IMyLoadFontFaceDesc {
    /**
     * @summary 字体样式
     * @description 可选值为 normal / italic / oblique
     * @default "normal"
     */
    style?: string;
    /**
     * @summary 设置小型大写字母的字体显示文本
     * @default "normal"
     */
    variant?: string;
    /**
     * @summary 字体粗细
     * @default "normal"
     */
    weight?: string;
    stretch?: string;
    featureSetting?: string;
    unicodeRange?: string;
  }
  interface IMyNavigateToEventChannel {
    emit: (eventName: string, ...args: unknown[]) => void;
    on: (eventName: string, eventCallback: (...args: unknown[]) => void) => void;
    once: (eventName: string, eventCallback: (...args: unknown[]) => void) => void;
    off: (eventName: string, eventCallback: (...args: unknown[]) => void) => void;
  }
  interface IMyNavigateToEvents {
    /**
     * @summary 特定事件名监听回调
     */
    [eventName: string]: (...args: unknown[]) => void;
  }
  interface IMyRequestSubscribeMessageResult {
    /**
     * @summary 仅在订阅成功场景下存在，表示订阅成功的模板列表
     */
    subscribeEntityIds?: string[];
    /**
     * @summary 最终订阅成功的模板列表
     */
    subscribedEntityIds: string[];
    /**
     * @summary 未订阅的模板列表
     */
    unsubscribedEntityIds: string[];
    /**
     * @summary 本次新增订阅成功的模板列表
     */
    currentSubscribedEntityIds: string[];
    /**
     * @summary 仅在取消订阅场景下存在，是传入的模板id集合
     */
    entityList?: string[];
  }
  interface IOpenEmbeddedMiniProgramParam {
    [key: string]: unknown;
  }
  interface IOpenSettingAuthSetting {
    /**
     * @summary 地理位置。
     */
    location?: boolean;
    /**
     * @summary 保存到相册。
     */
    album?: boolean;
    /**
     * @summary 摄像头。
     */
    camera?: boolean;
    /**
     * @summary 唤起授权界面，用户可以授权小程序获取支付宝会员的基础信息。
     */
    userInfo?: boolean;
    /**
     * @summary 运动数据
     */
    alipaysports?: boolean;
    /**
     * @summary 手机号码
     */
    phoneNumber?: boolean;
    /**
     * @summary 收货地址
     */
    aliaddress?: boolean;
  }
  interface IReadFileRequest {
    /**
     * @summary 文件路径
     */
    filePath: string;
    /**
     * @summary 指定读取文件的字符编码
     * @default 如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容
     */
    encoding?: `${EFileSystemEncoding}`;
  }
  interface IReadFileResponse {
    /**
     * @summary 文件内容
     */
    data: string | ArrayBuffer;
    /**
     * @summary 数据类型
     */
    dataType: string;
  }
  interface IReaddirRequest {
    /**
     * @summary 目录地址
     */
    dirPath: string;
  }
  interface IReaddirResponse {
    files: string[];
  }
  interface IRegionPickerMergeOptions {
    /**
     * @summary 删除城市信息。
     */
    remove: IRegionPickerMergeOptionsRemove[];
    /**
     * @summary 添加城市信息。
     */
    add: IRegionPickerMergeOptionsAdd[];
    /**
     * @summary 更新城市信息。
     */
    update: IRegionPickerMergeOptionsUpdate[];
  }
  interface IRegionPickerMergeOptionsAdd {
    /**
     * @summary 插入点之上的省份 ID。
     */
    pid: string;
    /**
     * @summary 插入点之下的省份 ID。
     */
    nextId: string;
    /**
     * @summary 增加对象的 ID。
     */
    id: string;
    /**
     * @summary 增加对象的名称。
     */
    name: string;
    /**
     * @summary 省内完整的市和区信息。示例：`"subList": [{ "name": "北京市", "id": "110100", "subList": [{ "name": "东城区", "id": "110101" }]`。
     */
    subList: IRegionPickerMergeOptionsAddSubList[];
  }
  interface IRegionPickerMergeOptionsAddSubList {
    /**
     * @summary 名称
     */
    name: string;
    /**
     * @summary ud
     */
    id: string;
    /**
     * @summary 省内完整的市和区信息。示例：`"subList": [{ "name": "北京市", "id": "110100", "subList": [{ "name": "东城区", "id": "110101" }]`。
     */
    subList?: IRegionPickerMergeOptionsAddSubList[];
  }
  interface IRegionPickerMergeOptionsRemove {
    /**
     * @summary 需要移除的省份 ID。
     */
    id: string;
  }
  interface IRegionPickerMergeOptionsUpdate {
    /**
     * @summary 更新对象的 ID。
     */
    id: string;
    /**
     * @summary 增加对象的名称。
     */
    name: string;
    /**
     * @summary 省内完整的市和区信息。示例：`"subList": [{ "name": "北京市", "id": "110100", "subList": [{ "name": "东城区", "id": "110101" }]`。
     */
    subList: IRegionPickerMergeOptionsUpdateSubList[];
  }
  interface IRegionPickerMergeOptionsUpdateSubList {
    /**
     * @summary 名称
     */
    name: string;
    /**
     * @summary ud
     */
    id: string;
    /**
     * @summary 省内完整的市和区信息。示例：`"subList": [{ "name": "北京市", "id": "110100", "subList": [{ "name": "东城区", "id": "110101" }]`。
     */
    subList?: IRegionPickerMergeOptionsUpdateSubList[];
  }
  interface IRemoveSavedFileRequest {
    /**
     * @summary 需要删除的文件路径
     */
    filePath: string;
  }
  interface IRenameRequest {
    /**
     * @summary 源文件路径
     * @description 可以是普通文件或目录
     */
    oldPath: string;
    /**
     * @summary 新文件路径
     */
    newPath: string;
  }
  interface IRmdirRequest {
    /**
     * @summary 删除的目录路径
     */
    dirPath: string;
    /**
     * @summary 是否递归删除目录
     * @description 如果为 true，则删除该目录和该目录下的所有子目录以及文件。
     * @default false
     */
    recursive?: boolean;
  }
  interface ISaveFileRequest {
    /**
     * @summary 临时存储文件路径
     */
    tempFilePath: string;
    /**
     * @summary 要存储的文件路径
     */
    filePath?: boolean;
  }
  interface ISaveFileResponse {
    /**
     * @summary 存储后的文件路径
     */
    savedFilePath: string;
  }
  interface ISelectorQueryFieldsOption {
    /**
     * @summary 是否返回节点 id
     */
    id?: boolean;
    /**
     * @summary 是否返回节点 dataset
     */
    dataset?: boolean;
    /**
     * @summary 是否返回节点布局位置: left, right, top, bottom
     */
    rect?: boolean;
    /**
     * @summary 是否返回节点尺寸: width, height
     */
    size?: boolean;
    /**
     * @summary 是否返回节点的（仅当节点为 scroll-view / viewport 时）
     */
    scrollOffset?: boolean;
    /**
     * @summary 指定样式名列表，返回节点对应样式名的当前值
     */
    computedStyle?: string[];
    /**
     * @summary 是否返回节点对应的上下文对象
     */
    context?: boolean;
    /**
     * @summary 是否返回节点对应的 Node （仅当 Canvas 时）
     */
    node?: boolean;
  }
  interface ISetWifiListWifiList {
    /**
     * @summary Wifi 的 SSID
     */
    SSID: string;
    /**
     * @summary Wifi 的 BSSID
     */
    BSSID: string;
    /**
     * @summary Wi-Fi 设备密码
     */
    password: string;
  }
  interface IStat {
    /**
     * @summary 文件的类型和存取的权限
     */
    mode: number;
    /**
     * @summary 文件大小
     */
    size: number;
    /**
     * @summary 上次访问时间
     */
    lastAccessedTime: number;
    /**
     * @summary 上次修改时间
     */
    lastModifiedTime: number;
    isDirectory: () => boolean;
    isFile: () => boolean;
  }
  interface IStatRequest {
    /**
     * @summary 文件、目录路径
     */
    path: string;
    /**
     * @summary 是否递归获取目录下的每个文件的 Stats 信息
     */
    recursive?: boolean;
  }
  interface IStatResponse {
    /**
     * @summary 文件信息
     * @description 当 recursive 为 false 时，res.stats 是一个 Stats 对象。当 recursive 为 true 且 path 是一个目录的路径时，res.stats 是一个 Object，key 以 path 为根路径的相对路径，value 是该路径对应的 Stats 对象。
     */
    stats:
      | IStat
      | {
          [path: string]: IStat;
        };
  }
  interface ITracertHandleUEPDataOptions {
    type: string;
    logLevel?: number;
    actionId: string;
    param4?: object;
    param1?: string;
    param5?: string;
    eventTime?: number;
    spmId: string;
    newScm?: string;
    scm?: object;
    bizType: string;
  }
  interface ITracertOptions {
    /**
     * @summary 埋点 a 位
     */
    spmAPos: string;
    /**
     * @summary 埋点 b 位
     */
    spmBPos: string;
    /**
     * @summary 业务类型
     */
    bizType: string;
    /**
     * @summary 日志等级
     */
    logLevel: number;
    /**
     * @summary 渠道
     */
    chInfo: string;
    /**
     * @summary 投放信息
     */
    scm: string;
    /**
     * @summary 上报的 url
     */
    url: string;
    /**
     * @summary 通用的数据
     * @description 可不传，传了所有的埋点均会带该额外参数
     */
    mdata: object;
    /**
     * @summary console 打印埋点
     */
    debug: boolean;
    /**
     * @summary 是否执行过全引导参数透传
     */
    isTraced: boolean;
    /**
     * @summary 自动上报 PV
     */
    autoLogPv: boolean;
  }
  interface ITracertPageParams {
    newChinfo?: string;
    chInfo?: string;
    chinfo?: string;
    entityId?: string;
    scm?: string;
    tracestep?: number;
    isforce?: string | boolean;
  }
  interface ITracertReportUEPDataOptions {
    spm: {
      url: string;
      chInfo: string;
      isSPM: boolean;
      spmId: string;
      bizType: string;
    };
    spmDetail: {
      url?: string;
      chInfo: string;
    };
  }
  interface ITypeBLECharacteristic {
    /**
     * @summary 蓝牙设备特征值的 UUID。
     */
    characteristicId: string;
    /**
     * @summary 蓝牙设备特征值对应服务的 UUID。
     */
    serviceId: string;
    /**
     * @summary 蓝牙设备特征值对应的 16 进制值。
     */
    value: string;
    /**
     * @summary 该特征值支持的操作类型。
     */
    properties?: ITypeBLECharacteristic$Properties;
  }
  interface ITypeBLECharacteristic$Properties {
    /**
     * @summary 该特征值是否支持 read 操作。
     */
    read: boolean;
    /**
     * @summary 该特征值是否支持 write 操作。
     */
    write: boolean;
    /**
     * @summary 该特征值是否支持 notify 操作。
     */
    notify: boolean;
    /**
     * @summary 该特征值是否支持 indicate 操作。
     */
    indicate: boolean;
  }
  interface ITypeCityInfo {
    /**
     * @summary 城市名。
     */
    name?: string;
    /**
     * @summary 行政区划代码。不同行政区域对应的代码可参见 中华人民共和国县以上行政区划代码。
     */
    adcode?: string;
    /**
     * @summary 城市名对应拼音拼写，方便用户搜索。
     */
    pinyin?: string;
    /**
     * @summary 城市名。
     */
    city: string;
    /**
     * @summary 行政区划代码。不同行政区域对应的代码可参见 中华人民共和国县以上行政区划代码。
     */
    adCode: string;
    /**
     * @summary 城市名对应拼音拼写，方便用户搜索。
     */
    spell: string;
  }
  interface ITypeReferrerInfo {
    /**
     * @summary 来源小程序。
     */
    appId: string;
    /**
     * @summary 以小服务模式启动的来源信息，目前已废弃
     */
    sourceServiceId?: string;
    /**
     * @summary 来源小程序传过来的数据。
     */
    extraData: Record<string, unknown>;
  }
  interface IUnlinkRequest {
    /**
     * @summary 文件路径
     */
    filePath: string;
  }
  interface IUnzipRequest {
    /**
     * @summary 源文件路径
     * @description 只可以是 zip 压缩文件
     */
    zipFilePath: string;
    /**
     * @summary 目标路径
     */
    targetPath: string;
  }
  interface IWifiInfo {
    /**
     * @summary Wifi 的 SSID。
     */
    SSID: string;
    /**
     * @summary Wifi 的 BSSID。
     */
    BSSID: string;
    /**
     * @summary Wifi 是否安全。
     */
    secure: boolean;
    /**
     * @summary Wifi 信号强度。
     */
    signalStrength: number;
  }
  interface IWriteFileRequest {
    /**
     * @summary 要写入的文件路径
     */
    filePath: string;
    /**
     * @summary 要写入的文本或二进制数据
     */
    data: string | ArrayBuffer;
    /**
     * @summary 指定写入文件的字符编码
     * @default utf8
     */
    encoding?: `${EFileSystemEncoding}`;
  }
  /**
   * @summary 附加信息
   */
  interface IZimIdentityResponseExtInfo {
    /**
     * @summary 人脸源自产品
     */
    zimAction: number;
    /**
     * @summary 入参是verifyId时，返回刷脸认证结果
     * @description
     * - 'NOT_SAME_PERSON': 比对非同人
     * - 'UNABLE_GET_IMAGE': 人脸无法获取图片
     */
    verifyCode: string;
  }
  /**
   * @summary 含有 verifyId 的返回值
   */
  interface IZimIdentityResponseWithVerifyId {
    /**
     * @summary 入参为空时返回的metaInfo中的一项
     */
    apdidToken: string;
    /**
     * @summary 入参为空时返回的metaInfo中的一项
     */
    appName: string;
    /**
     * @summary 入参为空时返回的metaInfo中的一项
     */
    appVersion: string;
    /**
     * @summary 入参为空时返回的metaInfo中的一项
     */
    bioMetaInfo: string;
    /**
     * @summary 入参为空时返回的metaInfo中的一项
     */
    deviceModel: string;
    /**
     * @summary 入参为空时返回的metaInfo中的一项
     */
    deviceType: string;
    /**
     * @summary 入参为空时返回的metaInfo中的一项
     */
    osVersion: string;
    /**
     * @summary 入参为空时返回的metaInfo中的一项
     */
    zimVer: string;
  }
  /**
   * @summary 不含有 verifyId 的返回值
   */
  interface IZimIdentityResponseWithoutVerifyId {
    /**
     * @summary 状态码。
     * - `1003` 用户取消刷脸
     * - `2006` 比对失败，可能是非本人或服务端异常
     * - `1000` 比对成功，核身通过
     */
    code: string;
    /**
     * @summary 入参是verifyId时，返回刷脸认证结果
     */
    extInfo: IZimIdentityResponseExtInfo;
    /**
     * @summary 入参是verifyId时，返回刷脸认证结果
     */
    verifyCode: string;
  }
  interface IZipRequest {
    /**
     * @summary 源文件路径
     */
    zipFilePaths: string;
    /**
     * @summary 目标路径
     */
    targetPath: string;
  }
  /**
   * @summary 跳转到地图页面。
   */
  interface IZmCreditBorrowRequest4OpenZMCreditBorrowMapPage {
    /**
     * @summary 仅跳转到地图页面时才存在该属性，值必须为 'map'。
     */
    borrowPage: string;
    /**
     * @summary 仅跳转到地图页面时存在该属性。要展示的类目。
     */
    spuName: `${ESpuName}`;
  }
  /**
   * @summary 唤起芝麻信用页面参数。
   */
  interface IZmCreditBorrowRequest4OpenZMCreditBorrowPage {
    /**
     * @summary 外部订单号，需要唯一，由商户传入，芝麻内部会做幂等控制，格式为：yyyyMMddHHmmss+随机数
     */
    out_order_no: string;
    /**
     * @summary 信用借还的产品码，传入固定值：w1010100000000002858
     */
    product_code: string;
    /**
     * @summary 物品名称，最长不能超过14个汉字。
     */
    goods_name: string;
    /**
     * @summary 租金单位，租金+租金单位组合才具备实际的租金意义。
     */
    rent_unit: `${ERentUnit}`;
    /**
     * @summary 租金，租金+租金单位组合才具备实际的租金意义。 >0.00元，代表有租金 =0.00元，代表无租金，免费借用 注：参数传值必须>=0，传入其他值会报错参数非法
     */
    rent_amount: string;
    /**
     * @summary 押金，金额单位：元。 注：不允许免押金的用户按此金额支付押金；当物品丢失时，赔偿金额不得高于该金额。
     */
    deposit_amount: string;
    /**
     * @summary 是否支持当借用用户信用不够（不准入）时，可让用户支付押金借用，该字段目前默认传 Y，注：支付押金的金额等同于 `deposit_amount`。
     */
    deposit_state: `${EDepositState}`;
    /**
     * @summary 回调到商户的小程序schema地址。说明：商户的回调地址可以在商户后台里进行配置，服务端回调时，首先根据参数：invoke_type 查询是否有对应的配置地址，如果有，则使用已定义的地址，否则，使用该字段定义的地址执行回调。
     */
    invoke_return_url: string;
    /**
     * @summary 商户访问蚂蚁的对接模式，默认传 TINYAPP。
     * - TINYAPP：回跳至小程序地址
     * - WINDOWS：支付宝服务窗
     */
    invoke_type: `${EInvokeType}`;
    /**
     * @summary 信用业务服务，注意：该字段不能为空，且必须根据说明的指引配置商户专属的场景ID，商户自助接入时，登录后台可配置场景ID，将后台配置的场景ID作为该字段的输入； 参考说明一自助进行配置；
     */
    credit_biz: string;
    /**
     * @summary 商户订单创建的起始借用时间，格式：`YYYY-MM-DD HH:MM:SS`。如果不传入或者为空，则认为订单创建起始时间为调用此接口时的时间。
     */
    borrow_time?: string;
    /**
     * @summary 到期时间，不允许为空，请根据实际业务合理设置该值，格式：`YYYY-MM-DD HH:MM:SS`，是指最晚归还时间，表示借用用户如果超过此时间还未完结订单（未归还物品或者未支付租金）将会进入逾期状态，芝麻会给借用用户发送催收提醒；需要晚于 `borrow_time`。
     */
    expiry_time: string;
    /**
     * @summary 借用用户的手机号码。推荐商户传入此值，会将此手机号码与用户身份信息进行匹配验证，防范欺诈风险。
     */
    mobile_no?: string;
    /**
     * @summary 物品借用地点的描述，便于用户知道物品是在哪里借的。
     */
    borrow_shop_name?: string;
    /**
     * @summary 租金的结算方式，非必填字段，默认是支付宝租金结算支付。
     * - merchant：表示商户自行结算，信用借还不提供租金支付能力
     * - alipay：表示使用支付宝支付功能，给用户提供租金代扣及赔偿金支付能力；
     * @default 'alipay'
     */
    rent_settle_type?: `${ERentSettleType}`;
    /**
     * @summary 商户请求状态上下文。商户发起借用服务时，需要在借用结束后返回给商户的参数，格式：json； 如果json的某一项值包含中文，请使用 encodeURIComponent 对该值进行编码。
     * - 例如：`var ext = { name: encodeURIComponent('名字') }; var obj = { invoke_state: JSON.stringify(ext) }`
     */
    invoke_state?: string;
    /**
     * @summary 租金信息描述，长度不超过14个汉字，只用于页面展示给C端用户，除此之外无其他意义。
     */
    rent_info?: string;
    /**
     * @summary 借用用户的真实姓名，非必填字段。但 `name` 和 `cert_no` 必须同时非空，或者同时为空，一旦传入会对用户身份进行校验。
     */
    name?: string;
    /**
     * @summary 借用用户的真实身份证号，非必填字段。但 `name` 和 `cert_no` 必须同时非空，或者同时为空，一旦传入会对用户身份进行校验。
     */
    cert_no?: string;
    /**
     * @summary 借用用户的收货地址，可选字段，最大长度128。推荐商户传入此值，会将此手机号码与用户身份信息进行匹配验证，防范欺诈风险。
     */
    address?: string;
  }
  type TMYBufferSource = ArrayBufferView | ArrayBuffer;
  type TMYCanvasFillRule = 'evenodd' | 'nonzero';
  type TMYCanvasImageSource = Canvas | CanvasImage;
  type TMYFloat32List = Float32Array | TMYGLfloat[];
  type TMYGLbitfield = number;
  type TMYGLboolean = boolean;
  type TMYGLclampf = number;
  type TMYGLenum = number;
  type TMYGLfloat = number;
  type TMYGLint = number;
  type TMYGLintptr = number;
  type TMYGLsizei = number;
  type TMYGLsizeiptr = number;
  type TMYGLuint = number;
  type TMYInt32List = Int32Array | TMYGLint[];
  type TTracert =
    | 'getValueOfUrl'
    | 'start'
    | 'logPv'
    | 'click'
    | 'expo'
    | 'send'
    | 'checkFullLinkParams'
    | 'expoContent'
    | 'clickContent'
    | 'setPageParams'
    | 'setNextPageParams'
    | 'appendChinfo'
    | 'updateChinfo'
    | 'getChinfoChain'
    | 'getChinfoChainUUID'
    | 'getCurrentPageParams'
    | 'setCurrentPageNewChinfo'
    | 'setNextPageNewChinfo'
    | 'handleUEPEvent'
    | 'reportUEPData'
    | 'url'
    | 'chInfo'
    | 'chinfo'
    | 'scm'
    | 'trace'
    | 'uepCombineMode'
    | 'appVersion'
    | 'version'
    | 'appId'
    | 'ap_framework_scheme'
    | 'query';
  type TrackMode = 'camera' | string;
  interface TypeBluetoothDevice {
    /**
     * @summary 蓝牙设备名称（某些设备可能没有）。
     */
    name: string;
    /**
     * @summary 低版本客户端提供，与 name 一致
     */
    deviceName: string;
    /**
     * @summary 广播设备名称。
     */
    localName: string;
    /**
     * @summary 设备 ID。Android 上为设备 MAC 地址，iOS 上为设备 UUID。需要分平台处理，iOS 可根据设备属性（ localName / advertisData / manufacturerData 等属性）进行动态匹配
     */
    deviceId: string;
    /**
     * @summary 设备信号强度。
     */
    RSSI: string;
    /**
     * @summary 设备的广播内容。为 16 进制Hex字符串
     */
    advertisData: string;
    /**
     * @summary 设备的 manufacturerData。为 16 进制Hex字符串
     */
    manufacturerData: string;
  }
  interface TypeSystemInfo {
    /**
     * @summary 当前运行的客户端
     * @example "alipay"
     */
    app: string;
    /**
     * @summary 客户端设置的语言
     * @example "zh-Hans"
     */
    language: string;
    /**
     * @summary 设备像素比
     * @example 3
     */
    pixelRatio: number;
    /**
     * @summary 平台
     * @example "Android"
     */
    platform: string;
    /**
     * @example "ap"
     */
    platformType?: string;
    /**
     * @summary 屏幕宽度
     * @example 1080
     */
    screenWidth: number;
    /**
     * @summary 标题栏高度
     * @example 48
     */
    titleBarHeight: number;
    /**
     * @summary 客户端版本号
     * @example "10.2.28.1769"
     */
    version: string;
    /**
     * @summary 窗口宽度
     * @example 360
     */
    windowWidth: number;
    /**
     * @summary 用于 Android API 版本
     * @example 29
     */
    apiLevel?: number;
    /**
     * @summary 用来区分显示企业商家服务/个人等界面信息
     */
    appMode?: `${TypeSystemInfo$AppMode}`;
    /**
     * @summary 手机品牌
     * @example "HUAWEI"
     */
    brand: string;
    /**
     * @summary 当前电池电量
     * @example "79%"
     */
    currentBattery: string;
    /**
     * @summary 用户设置字体大小
     * @example 1
     */
    fontSizeSetting: number;
    /**
     * @summary 手机型号
     * @example "HUAWEI TAS-AL00"
     */
    model: string;
    /**
     * @summary 设备性能分级
     * @native 10.1.62
     * @ios false
     */
    performance: `${TypeSystemInfo$Performance}`;
    screen: TypeSystemInfo$Screen;
    /**
     * @summary 屏幕高度
     * @example 2259
     */
    screenHeight: number;
    /**
     * @summary 状态栏高度
     * @example 27
     */
    statusBarHeight: number;
    /**
     * @summary 设备磁盘容量
     * @example "118 GB"
     */
    storage: string;
    /**
     * @summary 系统版本
     * @example "10"
     */
    system: string;
    /**
     * @summary 透明状态栏
     * @native 10.2.58
     */
    transparentTitle: boolean;
    /**
     * @summary 窗口高度
     * @example 780
     */
    windowHeight: number;
    isIphoneXSeries: boolean;
    /**
     * @summary 在竖屏正方向下的安全区域
     * @native 10.2.20
     */
    safeArea?: TypeSystemInfo$SafeArea;
    /**
     * @summary 允许支付宝使用相册的开关
     * @native 10.2.0
     * @android false
     */
    albumAuthorized: boolean;
    /**
     * @summary 允许支付宝使用摄像头的开关
     * @native 10.2.0
     */
    cameraAuthorized: boolean;
    /**
     * @summary 允许支付宝使用定位的开关
     * @native 10.2.0
     */
    locationAuthorized: boolean;
    /**
     * @summary 允许支付宝使用麦克风的开关
     * @native 10.2.0
     */
    microphoneAuthorized: boolean;
    /**
     * @summary 定位的系统开关
     * @native 10.2.0
     */
    locationEnabled: boolean;
    /**
     * @summary Wi-Fi 的系统开关
     * @native 10.2.0
     */
    wifiEnabled: boolean;
    /**
     * @summary 蓝牙的系统开关
     * @native 10.2.0
     */
    bluetoothEnabled: boolean;
    /**
     * @summary 允许支付宝使用蓝牙的开关
     * @native 10.2.0
     */
    bluetoothAuthorized: boolean;
    /**
     * @summary 允许支付宝通知的开关
     * @native 10.2.0
     */
    notificationAuthorized: boolean;
    /**
     * @summary 允许支付宝通知带有提醒的开关
     * @native 10.2.0
     * @android false
     */
    notificationAlertAuthorized: boolean;
    /**
     * @summary 允许支付宝通知带有标记的开关
     * @native 10.2.0
     * @android false
     */
    notificationBadgeAuthorized: boolean;
    /**
     * @summary 允许支付宝啊通知带有声音的开关
     * @native 10.2.0
     * @android false
     */
    notificationSoundAuthorized: boolean;
  }
  interface TypeSystemInfo$SafeArea {
    left: number;
    right: number;
    top: number;
    bottom: number;
    width: number;
    height: number;
  }
  interface TypeSystemInfo$Screen {
    /**
     * @summary 屏幕宽度
     */
    width: number;
    /**
     * @summary 屏幕高度
     */
    height: number;
  }
  /**
   * @summary WebGLContextAttributes 对象
   * @description 一个包含实际上下文参数的 WebGLContextAttributes 的对象，如果上下文丢失，可能返回 null。
   */
  interface WebGLContextAttributes {
    /**
     * @summary 是否开启抗锯齿。
     * @android false
     */
    antialias?: boolean;
  }
}

declare namespace my.ap {
  export function __openLifePayment(r: {
    instId: string;
    addressCode: string;
    cityName: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(
      err:
        | {
            error?: number;
            errorMessage?: string;
          }
        | {
            error: 2;
            errorMessage: 'addressCode and instId is required';
          }
        | {
            error: 2;
            errorMessage: "addressCode and instId is 'String' type";
          }
        | {
            error: 2;
            errorMessage: 'addressCode is required';
          },
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            error?: number;
            errorMessage?: string;
          }
        | {
            error: 2;
            errorMessage: 'addressCode and instId is required';
          }
        | {
            error: 2;
            errorMessage: "addressCode and instId is 'String' type";
          }
        | {
            error: 2;
            errorMessage: 'addressCode is required';
          },
    ): void;
  }): Promise<void>;
  /**
   * @summary 小程序内唤起开卡页面。
   * - 有关商户会员卡详细功能，详见 [商户会员卡产品介绍](https://opendocs.alipay.com/mini/introduce/card)。
   */
  export function addCardAuth(r: {
    /**
     * @summary 开卡授权的页面地址，从接口获取。
     */
    url: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(
      data:
        | {
            success: true;
            resultStatus: '9000';
            result: {
              /**
               * @summary 应用 ID。
               */
              app_id: string;
              /**
               * @summary 授权码，用于换取 authtoken。
               */
              auth_code: string;
              /**
               * @summary 授权的 state。
               */
              state: string;
              /**
               * @summary 授权 scope。
               */
              scope: string;
              /**
               * @summary 会员卡模板 ID。
               */
              template_id: string;
              /**
               * @summary 会员卡表单信息请求 ID。
               */
              request_id: string;
              /**
               * @summary 会员卡领卡链接透传参数。
               */
              out_string: string;
            };
          }
        | {
            success: false;
            code:
              | 'JSAPI_SERVICE_TERMINATED'
              | 'JSAPI_PARAM_INVALID'
              | 'JSAPI_SYSTEM_ERROR'
              | 'ILLEGAL_NULL_ARGUMENT'
              | 'INVALID_APPLY_CARD_LINK'
              | 'OPEN_FORM_TEMPLATE_NOT_EXIST'
              | 'ALREADY_ACTIVE_CARD'
              | 'OPEN_FORM_FIELD_NOT_PERMITTED'
              | 'OPEN_FORM_USER_LACK_INFO'
              | 'SYSTEM_ERROR';
          },
    ): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | (
            | {
                success: true;
                resultStatus: '9000';
                result: {
                  /**
                   * @summary 应用 ID。
                   */
                  app_id: string;
                  /**
                   * @summary 授权码，用于换取 authtoken。
                   */
                  auth_code: string;
                  /**
                   * @summary 授权的 state。
                   */
                  state: string;
                  /**
                   * @summary 授权 scope。
                   */
                  scope: string;
                  /**
                   * @summary 会员卡模板 ID。
                   */
                  template_id: string;
                  /**
                   * @summary 会员卡表单信息请求 ID。
                   */
                  request_id: string;
                  /**
                   * @summary 会员卡领卡链接透传参数。
                   */
                  out_string: string;
                };
              }
            | {
                success: false;
                code:
                  | 'JSAPI_SERVICE_TERMINATED'
                  | 'JSAPI_PARAM_INVALID'
                  | 'JSAPI_SYSTEM_ERROR'
                  | 'ILLEGAL_NULL_ARGUMENT'
                  | 'INVALID_APPLY_CARD_LINK'
                  | 'OPEN_FORM_TEMPLATE_NOT_EXIST'
                  | 'ALREADY_ACTIVE_CARD'
                  | 'OPEN_FORM_FIELD_NOT_PERMITTED'
                  | 'OPEN_FORM_USER_LACK_INFO'
                  | 'SYSTEM_ERROR';
              }
          )
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<
    | {
        success: true;
        resultStatus: '9000';
        result: {
          /**
           * @summary 应用 ID。
           */
          app_id: string;
          /**
           * @summary 授权码，用于换取 authtoken。
           */
          auth_code: string;
          /**
           * @summary 授权的 state。
           */
          state: string;
          /**
           * @summary 授权 scope。
           */
          scope: string;
          /**
           * @summary 会员卡模板 ID。
           */
          template_id: string;
          /**
           * @summary 会员卡表单信息请求 ID。
           */
          request_id: string;
          /**
           * @summary 会员卡领卡链接透传参数。
           */
          out_string: string;
        };
      }
    | {
        success: false;
        code:
          | 'JSAPI_SERVICE_TERMINATED'
          | 'JSAPI_PARAM_INVALID'
          | 'JSAPI_SYSTEM_ERROR'
          | 'ILLEGAL_NULL_ARGUMENT'
          | 'INVALID_APPLY_CARD_LINK'
          | 'OPEN_FORM_TEMPLATE_NOT_EXIST'
          | 'ALREADY_ACTIVE_CARD'
          | 'OPEN_FORM_FIELD_NOT_PERMITTED'
          | 'OPEN_FORM_USER_LACK_INFO'
          | 'SYSTEM_ERROR';
      }
  >;
  /**
   * @summary 创建 tracert 对象
   */
  export function createTracert(option: ITracertOptions): Tracert;
  export function getAdTrackClues(): {
    scm: string;
    cid: string;
  };
  /**
   * @summary 获取支付宝首页左上角的城市选择信息
   */
  export function getMainSelectedCity(r?: {
    /**
     * @default false
     */
    needFullName?: boolean;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      fullName?: string;
      enName?: string;
      /**
       * @summary 英文区县
       */
      enDistrictName?: string;
      /**
       * @summary 城市名称
       */
      name: string;
      /**
       * @summary 城市编码
       */
      code: string;
      /**
       * @summary 是否是中国大陆
       */
      chineseMainLand: boolean;
      /**
       * @summary 是否是手动选择
       */
      isManualSelected: boolean;
      /**
       * @summary 设置时间
       */
      settingTime: number;
      /**
       * @summary 区县名
       */
      districtName?: string;
      /**
       * @summary 区县编码
       */
      districtCode?: string;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            fullName?: string;
            enName?: string;
            /**
             * @summary 英文区县
             */
            enDistrictName?: string;
            /**
             * @summary 城市名称
             */
            name: string;
            /**
             * @summary 城市编码
             */
            code: string;
            /**
             * @summary 是否是中国大陆
             */
            chineseMainLand: boolean;
            /**
             * @summary 是否是手动选择
             */
            isManualSelected: boolean;
            /**
             * @summary 设置时间
             */
            settingTime: number;
            /**
             * @summary 区县名
             */
            districtName?: string;
            /**
             * @summary 区县编码
             */
            districtCode?: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    fullName?: string;
    enName?: string;
    /**
     * @summary 英文区县
     */
    enDistrictName?: string;
    /**
     * @summary 城市名称
     */
    name: string;
    /**
     * @summary 城市编码
     */
    code: string;
    /**
     * @summary 是否是中国大陆
     */
    chineseMainLand: boolean;
    /**
     * @summary 是否是手动选择
     */
    isManualSelected: boolean;
    /**
     * @summary 设置时间
     */
    settingTime: number;
    /**
     * @summary 区县名
     */
    districtName?: string;
    /**
     * @summary 区县编码
     */
    districtCode?: string;
  }>;
  /**
   * @summary 图片风险任务提交接口
   * @description 用于识别图片是否有色情、违禁违法等内容。
   * @see https://opendocs.alipay.com/mini/api/img_risk
   */
  export function imgRisk(r: {
    /**
     * @summary 小程序的开放平台账号
     */
    pid: string;
    /**
     * @summary 小程序对应的 APPID
     */
    appId: string;
    /**
     * @summary 需要识别的业务参数
     */
    bizContext: {
      /**
       * @summary 风险类型
       */
      risk_type: string;
      /**
       * @summary 需要验证的图片 URL
       */
      content: string;
    };
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 是否调用成功
       */
      success: boolean;
      /**
       * @summary 图片风险识别的任务的任务ID
       */
      riskResult: string;
      /**
       * @summary 风险识别结果描述
       */
      riskResultDesc: string;
      /**
       * @summary 业务唯一识别码
       */
      uniqueId: string;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 是否调用成功
             */
            success: boolean;
            /**
             * @summary 图片风险识别的任务的任务ID
             */
            riskResult: string;
            /**
             * @summary 风险识别结果描述
             */
            riskResultDesc: string;
            /**
             * @summary 业务唯一识别码
             */
            uniqueId: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 是否调用成功
     */
    success: boolean;
    /**
     * @summary 图片风险识别的任务的任务ID
     */
    riskResult: string;
    /**
     * @summary 风险识别结果描述
     */
    riskResultDesc: string;
    /**
     * @summary 业务唯一识别码
     */
    uniqueId: string;
  }>;
  /**
   * @summary 查询图片的风险识别结果的 API
   * @see https://opendocs.alipay.com/mini/api/ze6675
   */
  export function imgRiskCallback(r: {
    /**
     * @summary 小程序的开放平台账号
     */
    pid: string;
    /**
     * @summary 需要识别的业务参数
     */
    bizContext: {
      /**
       * @summary 风险类型
       */
      risk_type: string;
      /**
       * @summary 需要查询图片的任务 ID
       */
      apply_id: string;
    };
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 是否调用成功
       */
      success: boolean;
      /**
       * @summary 风险识别的结果
       */
      riskResult: string;
      /**
       * @summary 风险识别结果描述
       */
      riskResultDesc: string;
      /**
       * @summary 业务唯一识别码
       */
      uniqueId: string;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(
      err:
        | {
            error?: number;
            errorMessage?: string;
          }
        | {
            error: 'serviceNoAuth';
            errorMessage: '服务未授权';
          }
        | {
            error: 'riskTypeNoAuth';
            errorMessage: '场景（risktype）未授权';
          }
        | {
            error: 'bizContentEmpty';
            errorMessage: '风险数据内容为空';
          }
        | {
            error: 'paramMissingError';
            errorMessage: '参数缺失';
          }
        | {
            error: 'param error';
            errorMesage: '参数错误';
          }
        | {
            error: 'SYSTEM_OUT_ERROR';
            errorMessage: '系统繁忙';
          }
        | {
            error: 'INVALID_PARAMETER';
            errorMessage: '缺少必选参数或参数有误';
          }
        | {
            error: 'OVER_LIMIT';
            errorMessage: '超过调用量限制';
          },
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 是否调用成功
             */
            success: boolean;
            /**
             * @summary 风险识别的结果
             */
            riskResult: string;
            /**
             * @summary 风险识别结果描述
             */
            riskResultDesc: string;
            /**
             * @summary 业务唯一识别码
             */
            uniqueId: string;
          }
        | (
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 'serviceNoAuth';
                errorMessage: '服务未授权';
              }
            | {
                error: 'riskTypeNoAuth';
                errorMessage: '场景（risktype）未授权';
              }
            | {
                error: 'bizContentEmpty';
                errorMessage: '风险数据内容为空';
              }
            | {
                error: 'paramMissingError';
                errorMessage: '参数缺失';
              }
            | {
                error: 'param error';
                errorMesage: '参数错误';
              }
            | {
                error: 'SYSTEM_OUT_ERROR';
                errorMessage: '系统繁忙';
              }
            | {
                error: 'INVALID_PARAMETER';
                errorMessage: '缺少必选参数或参数有误';
              }
            | {
                error: 'OVER_LIMIT';
                errorMessage: '超过调用量限制';
              }
          ),
    ): void;
  }): Promise<{
    /**
     * @summary 是否调用成功
     */
    success: boolean;
    /**
     * @summary 风险识别的结果
     */
    riskResult: string;
    /**
     * @summary 风险识别结果描述
     */
    riskResultDesc: string;
    /**
     * @summary 业务唯一识别码
     */
    uniqueId: string;
  }>;
  /**
   * @summary 跳转到支付宝客户端内指定页面
   * @see https://opendocs.alipay.com/mini/api/navigatetoalipaypage
   */
  export function navigateToAlipayPage(r: {
    /**
     * @summary 要跳转的支付宝官方业务。例如付款码，appCode: 'payCode'
     */
    appCode: 'alipayScan' | 'redPacket' | 'collectOil' | 'tinyAppSHH' | 'antForest' | 'antFarm' | 'stockDetail' | 'payCode';
    /**
     * @summary appCode 配套参数，需要和 appCode 搭配使用
     */
    appParams?: Record<string, unknown>;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 跳转成功
       */
      success: true;
      errorMsg?: never;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 跳转成功
             */
            success: true;
            errorMsg?: never;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 跳转成功
     */
    success: true;
    errorMsg?: never;
  }>;
  /**
   * @summary 跳转到支付宝客户端内指定页面
   * @see https://opendocs.alipay.com/mini/api/navigatetoalipaypage
   */
  export function navigateToAlipayPage(r: {
    /**
     * @summary 跳转 appCode 涵盖范围之外的支付宝业务、运营活动页面，请使用 path 属性。可传入 scheme 或 URL：
     * @description
     * - 如果 url 中带有参数，请务必先将整个 url 做 encode 处理
     * - 可跳转域名以  https://render.alipay.com/p 开头的支付宝业务、运营页面
     */
    path: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 跳转成功
       */
      success: true;
      errorMsg?: never;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 跳转成功
             */
            success: true;
            errorMsg?: never;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 跳转成功
     */
    success: true;
    errorMsg?: never;
  }>;
  export function navigateToFinance(
    r: IAP$NavigateToFinanceOptionsFundDetail & {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    },
  ): Promise<void>;
  export function navigateToFinance(
    r: IAP$NavigateToFinanceOptionsPortfolioDetail & {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    },
  ): Promise<void>;
  export function navigateToFinance(
    r: IAP$NavigateToFinanceOptionsFundBuy & {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    },
  ): Promise<void>;
  export function navigateToFinance(
    r: IAP$NavigateToFinanceOptionsGoldBuy & {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    },
  ): Promise<void>;
  export function navigateToFinance(
    r: IAP$NavigateToFinanceOptionsPortfolioBuy & {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    },
  ): Promise<void>;
  export function navigateToFinance(
    r: IAP$NavigateToFinanceOptionsFundSign & {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    },
  ): Promise<void>;
  export function navigateToFinance(
    r: IAP$NavigateToFinanceOptionsGoldSign & {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    },
  ): Promise<void>;
  export function navigateToFinance(
    r: IAP$NavigateToFinanceOptionsWealthShop & {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    },
  ): Promise<void>;
  export function navigateToFinance(
    r: IAP$NavigateToFinanceOptionsH5Page & {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {}): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(arg: { error?: number; errorMessage?: string }): void;
    },
  ): Promise<void>;
  /**
   * @summary 判断用户在先享后付场景下是否有风险的 API
   * @see https://opendocs.alipay.com/mini/api/nsf
   */
  export function nsf(r: {
    /**
     * @summary 小程序的开放平台账号。
     */
    pid: string;
    /**
     * @summary 需要识别的业务参数
     */
    bizContext: IMyApNsfBizContext;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 风险识别的返回结果
       */
      result: IMyApNsfResult;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 风险识别的返回结果
             */
            result: IMyApNsfResult;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 风险识别的返回结果
     */
    result: IMyApNsfResult;
  }>;
  /**
   * @summary 打开支付宝里的官方应用
   */
  export function openAlipayApp(r: {
    /**
     * @summary 目标应用标识
     */
    appCode: string;
    /**
     * @summary 传给目标应用的参数
     */
    appParams?: Record<string, unknown>;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(
      err:
        | {
            error: 2;
            errorMessage: '参数无效';
          }
        | {
            error: number;
            errorMessage: string;
          },
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            error: 2;
            errorMessage: '参数无效';
          }
        | {
            error: number;
            errorMessage: string;
          },
    ): void;
  }): Promise<void>;
  /**
   * @summary 跳转到支付宝卡列表界面
   */
  export function openCardList(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  export function openKBVoucherDetail(r: {
    /**
     * @summary 卡实例 ID，调用 [券发放接口](https://docs.open.alipay.com/api_24/alipay.pass.instance.add) 可以获取该参数。
     */
    passId: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  export function openKBVoucherDetail(r: {
    /**
     * @summary 商户编号。
     */
    partnerId: string;
    /**
     * @summary 序列号。
     */
    serialNumber: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 跳转到指定商户的卡列表界面
   */
  export function openMerchantCardList(r: {
    /**
     * @summary 商户编号。
     */
    partnerId: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 跳转到当前用户在指定商户的已领取票列表界面
   */
  export function openMerchantTicketList(r: {
    /**
     * @summary 商户编号。
     */
    partnerId: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 跳转到当前用户在指定商户的已领取券列表界面
   */
  export function openMerchantVoucherList(r: {
    /**
     * @summary 商户编号。
     */
    partnerId: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  export function openTicketDetail(r: {
    /**
     * @summary 卡实例 ID，调用 [券发放接口](https://docs.open.alipay.com/api_24/alipay.pass.instance.add) 可以获取该参数。
     */
    passId: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  export function openTicketDetail(r: {
    /**
     * @summary 商户编号。
     */
    partnerId: string;
    /**
     * @summary 序列号。
     */
    serialNumber: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 跳转到支付宝票列表界面
   */
  export function openTicketList(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 打开 URL
   */
  export function openURL(r: {
    /**
     * @summary 目标 url。以 https:// 或 alipays:// 开头
     */
    url: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(
      err:
        | {
            error: 2;
            errorMessage: '参数无效';
          }
        | {
            error: 60002;
            errorMessage: '目标地址不在白名单';
          }
        | {
            error: number;
            errorMessage: string;
          },
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            error: 2;
            errorMessage: '参数无效';
          }
        | {
            error: 60002;
            errorMessage: '目标地址不在白名单';
          }
        | {
            error: number;
            errorMessage: string;
          },
    ): void;
  }): Promise<void>;
  export function openVoucherDetail(r: {
    /**
     * @summary 卡实例 ID，调用 [券发放接口](https://docs.open.alipay.com/api_24/alipay.pass.instance.add) 可以获取该参数。
     */
    passId: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  export function openVoucherDetail(r: {
    /**
     * @summary 商户编号。
     */
    partnerId: string;
    /**
     * @summary 序列号。
     */
    serialNumber: string;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 跳转到支付宝券列表界面
   */
  export function openVoucherList(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {}): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(arg: { error?: number; errorMessage?: string }): void;
  }): Promise<void>;
  /**
   * @summary 反作弊
   * @see https://opendocs.alipay.com/mini/api/antimarketcheat
   */
  export function preventCheat(r: {
    /**
     * @summary 小程序的开放平台账号。
     */
    pid: string;
    /**
     * @summary 需要识别的业务参数
     */
    bizContext: IMyApPreventCheatBizContext;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 风险识别的返回结果
       */
      result: IMyApPreventCheatResult;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 风险识别的返回结果
             */
            result: IMyApPreventCheatResult;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 风险识别的返回结果
     */
    result: IMyApPreventCheatResult;
  }>;
  export function startVerifyIdentity(r: {
    /**
     * @summary 标识一次完整的核身流程
     */
    verifyId: string;
    /**
     * @summary 核身类型
     */
    verifyType: 'standard' | 'verify_init' | 'verify_module︎';
    /**
     * @summary 核身产品数据
     */
    moduleData?: unknown;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 核身流程Id
       */
      verifyId: string;
      /**
       * @summary 核身结果返回值
       */
      code: string;
      /**
       * @summary 核身结果描述信息
       */
      message: string;
      /**
       * @summary 核身返回时最近一次校验的token
       */
      token: string;
      /**
       * @summary 核身产品的校验结果
       */
      verifyCode: 'SYSTEM_ERROR' | 'NOT_SAME_PERSON' | 'UNABLE_GET_IMAGE' | 'PPW_LOCK_USER_CANCEL';
      /**
       * @summary 透传的业务数据，为空时表示业务出错
       */
      bizResponseData: unknown;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(
      err:
        | {
            error?: number;
            errorMessage?: string;
          }
        | {
            /**
             * @summary 错误码
             */
            error: string;
            /**
             * @summary 错误描述
             */
            errorMessage: string;
          },
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 核身流程Id
             */
            verifyId: string;
            /**
             * @summary 核身结果返回值
             */
            code: string;
            /**
             * @summary 核身结果描述信息
             */
            message: string;
            /**
             * @summary 核身返回时最近一次校验的token
             */
            token: string;
            /**
             * @summary 核身产品的校验结果
             */
            verifyCode: 'SYSTEM_ERROR' | 'NOT_SAME_PERSON' | 'UNABLE_GET_IMAGE' | 'PPW_LOCK_USER_CANCEL';
            /**
             * @summary 透传的业务数据，为空时表示业务出错
             */
            bizResponseData: unknown;
          }
        | (
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                /**
                 * @summary 错误码
                 */
                error: string;
                /**
                 * @summary 错误描述
                 */
                errorMessage: string;
              }
          ),
    ): void;
  }): Promise<{
    /**
     * @summary 核身流程Id
     */
    verifyId: string;
    /**
     * @summary 核身结果返回值
     */
    code: string;
    /**
     * @summary 核身结果描述信息
     */
    message: string;
    /**
     * @summary 核身返回时最近一次校验的token
     */
    token: string;
    /**
     * @summary 核身产品的校验结果
     */
    verifyCode: 'SYSTEM_ERROR' | 'NOT_SAME_PERSON' | 'UNABLE_GET_IMAGE' | 'PPW_LOCK_USER_CANCEL';
    /**
     * @summary 透传的业务数据，为空时表示业务出错
     */
    bizResponseData: unknown;
  }>;
  /**
   * @summary （已废弃）订阅服务提醒消息
   * @deprecated
   */
  export function subscribeMsgbox(r: {
    /**
     * @summary  服务码
     */
    serviceCode: string;
    /**
     * @summary 在界面弹出前是否显示 loading
     * @description 调用该jsapi时转loading，直到界面弹出。true时，调用jsapi时在对话框弹出来之前不转loading。 true只是为主动弹框设计的，用户操作场景不能设置true。
     */
    silent?: boolean;
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 订阅成功,重复订阅也算成功。当订阅成功时，不会再弹窗。
       */
      success: true;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: {
      /**
       * @summary 错误码
       */
      error: number;
      /**
       * @summary 错误信息
       */
      errorMessage: string;
    }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 订阅成功,重复订阅也算成功。当订阅成功时，不会再弹窗。
             */
            success: true;
          }
        | {
            /**
             * @summary 错误码
             */
            error: number;
            /**
             * @summary 错误信息
             */
            errorMessage: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 订阅成功,重复订阅也算成功。当订阅成功时，不会再弹窗。
     */
    success: true;
  }>;
  /**
   * @summary 跳转到支付宝客户端升级界面
   * @see https://opendocs.alipay.com/mini/api/updatealipayclient
   */
  export function updateAlipayClient(r?: {
    /**
     * 接口调用成功的回调函数
     * @param data 成功返回的数据
     */
    success?(data: {
      /**
       * @summary 代表是否跳转成功
       */
      success: true;
    }): void;
    /**
     * 接口调用失败的回调函数
     * @param err 错误信息
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * @summary 代表是否跳转成功
             */
            success: true;
          }
        | {
            error?: number;
            errorMessage?: string;
          },
    ): void;
  }): Promise<{
    /**
     * @summary 代表是否跳转成功
     */
    success: true;
  }>;
  /**
   * @summary 支付宝刷脸获取metaInfo和刷脸启动的JSAPI
   */
  export function zimIdentity(option: {
    /**
     * @summary 通过服务端接口返回一次验证流程id；不填写时，返回设备的metaInfo
     */
    verifyId?: string;
  }): IZimIdentityResponseWithVerifyId | IZimIdentityResponseWithoutVerifyId;
  export function zmCreditBorrow(
    r: IZmCreditBorrowRequest4OpenZMCreditBorrowPage & {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 商户发起借用服务时传入的参数，需要在借用结束后返回给商户的参数。
         */
        invoke_state: string;
        /**
         * @summary 外部订单号，需要唯一，由商户传入，芝麻内部会做幂等控制，格式为：yyyyMMddHHmmss+4位随机数
         */
        out_order_no: string;
        /**
         * @summary 芝麻信用借还订单号
         */
        order_no: string;
        /**
         * @summary 是否准入，该字段目前无实际意义。
         * - `Y` 准入
         * - `N` 不准入
         */
        admit_state: 'Y' | 'N';
        /**
         * @summary 物品借用/租赁者的用户id
         */
        user_id: string;
        /**
         * @summary 状态码。
         * - `'6001'` 用户取消了业务流程
         * - `'6002'` 网络异常
         * - `'9000'` 成功
         * - `'4000'` 系统异常
         */
        resultStatus: string;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 商户发起借用服务时传入的参数，需要在借用结束后返回给商户的参数。
               */
              invoke_state: string;
              /**
               * @summary 外部订单号，需要唯一，由商户传入，芝麻内部会做幂等控制，格式为：yyyyMMddHHmmss+4位随机数
               */
              out_order_no: string;
              /**
               * @summary 芝麻信用借还订单号
               */
              order_no: string;
              /**
               * @summary 是否准入，该字段目前无实际意义。
               * - `Y` 准入
               * - `N` 不准入
               */
              admit_state: 'Y' | 'N';
              /**
               * @summary 物品借用/租赁者的用户id
               */
              user_id: string;
              /**
               * @summary 状态码。
               * - `'6001'` 用户取消了业务流程
               * - `'6002'` 网络异常
               * - `'9000'` 成功
               * - `'4000'` 系统异常
               */
              resultStatus: string;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    },
  ): Promise<{
    /**
     * @summary 商户发起借用服务时传入的参数，需要在借用结束后返回给商户的参数。
     */
    invoke_state: string;
    /**
     * @summary 外部订单号，需要唯一，由商户传入，芝麻内部会做幂等控制，格式为：yyyyMMddHHmmss+4位随机数
     */
    out_order_no: string;
    /**
     * @summary 芝麻信用借还订单号
     */
    order_no: string;
    /**
     * @summary 是否准入，该字段目前无实际意义。
     * - `Y` 准入
     * - `N` 不准入
     */
    admit_state: 'Y' | 'N';
    /**
     * @summary 物品借用/租赁者的用户id
     */
    user_id: string;
    /**
     * @summary 状态码。
     * - `'6001'` 用户取消了业务流程
     * - `'6002'` 网络异常
     * - `'9000'` 成功
     * - `'4000'` 系统异常
     */
    resultStatus: string;
  }>;
  export function zmCreditBorrow(
    r: IZmCreditBorrowRequest4OpenZMCreditBorrowMapPage & {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 商户发起借用服务时传入的参数，需要在借用结束后返回给商户的参数。
         */
        invoke_state: string;
        /**
         * @summary 外部订单号，需要唯一，由商户传入，芝麻内部会做幂等控制，格式为：yyyyMMddHHmmss+4位随机数
         */
        out_order_no: string;
        /**
         * @summary 芝麻信用借还订单号
         */
        order_no: string;
        /**
         * @summary 是否准入，该字段目前无实际意义。
         * - `Y` 准入
         * - `N` 不准入
         */
        admit_state: 'Y' | 'N';
        /**
         * @summary 物品借用/租赁者的用户id
         */
        user_id: string;
        /**
         * @summary 状态码。
         * - `'6001'` 用户取消了业务流程
         * - `'6002'` 网络异常
         * - `'9000'` 成功
         * - `'4000'` 系统异常
         */
        resultStatus: string;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 商户发起借用服务时传入的参数，需要在借用结束后返回给商户的参数。
               */
              invoke_state: string;
              /**
               * @summary 外部订单号，需要唯一，由商户传入，芝麻内部会做幂等控制，格式为：yyyyMMddHHmmss+4位随机数
               */
              out_order_no: string;
              /**
               * @summary 芝麻信用借还订单号
               */
              order_no: string;
              /**
               * @summary 是否准入，该字段目前无实际意义。
               * - `Y` 准入
               * - `N` 不准入
               */
              admit_state: 'Y' | 'N';
              /**
               * @summary 物品借用/租赁者的用户id
               */
              user_id: string;
              /**
               * @summary 状态码。
               * - `'6001'` 用户取消了业务流程
               * - `'6002'` 网络异常
               * - `'9000'` 成功
               * - `'4000'` 系统异常
               */
              resultStatus: string;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    },
  ): Promise<{
    /**
     * @summary 商户发起借用服务时传入的参数，需要在借用结束后返回给商户的参数。
     */
    invoke_state: string;
    /**
     * @summary 外部订单号，需要唯一，由商户传入，芝麻内部会做幂等控制，格式为：yyyyMMddHHmmss+4位随机数
     */
    out_order_no: string;
    /**
     * @summary 芝麻信用借还订单号
     */
    order_no: string;
    /**
     * @summary 是否准入，该字段目前无实际意义。
     * - `Y` 准入
     * - `N` 不准入
     */
    admit_state: 'Y' | 'N';
    /**
     * @summary 物品借用/租赁者的用户id
     */
    user_id: string;
    /**
     * @summary 状态码。
     * - `'6001'` 用户取消了业务流程
     * - `'6002'` 网络异常
     * - `'9000'` 成功
     * - `'4000'` 系统异常
     */
    resultStatus: string;
  }>;
}

declare const enum EActionSheetBadgesType {
  /**
   * @summary 显示文本
   */
  text = 'text',
  /**
   * @summary 显示数字, text 为小数或 ≤ 0 均不显示，≥ 100 显示 "•••"
   */
  num = 'num',
  /**
   * @summary 仅显示小红点
   */
  point = 'point',
  /**
   * @summary 显示 "•••"
   */
  more = 'more',
  /**
   * @summary 不显示
   */
  none = 'none',
}

declare const enum EBeaconUpdateBeaconsProximity {
  /**
   * @summary 未知
   */
  _0 = 0,
  /**
   * @summary 极近
   */
  _1 = 1,
  /**
   * @summary 近
   */
  _2 = 2,
  /**
   * @summary 远
   */
  _3 = 3,
}

declare const enum ECalculateRouteMode {
  /**
   * @summary 最快捷模式，速度优先（时间）。
   */
  _0 = 0,
  /**
   * @summary 最经济模式，费用优先（不走收费路段的最快道路）。
   */
  _1 = 1,
  /**
   * @summary 最少换乘模式，距离优先。
   */
  _2 = 2,
  /**
   * @summary 最少步行模式，不走快速路。
   */
  _3 = 3,
  /**
   * @summary 最舒适模式，结合实时交通（躲避拥堵）。
   */
  _4 = 4,
  /**
   * @summary 不乘地铁模式，多策略（同时使用速度优先、费用优先、距离优先三个策略）。
   */
  _5 = 5,
  /**
   * @summary 不走高速。
   */
  _6 = 6,
  /**
   * @summary 不走高速且避免收费。
   */
  _7 = 7,
  /**
   * @summary 躲避收费和拥堵。
   */
  _8 = 8,
  /**
   * @summary 不走高速且躲避收费和拥堵。
   */
  _9 = 9,
}

declare const enum EChooseDistrictHeadItemType {
  /**
   * @summary 常规城市
   */
  _0 = 0,
  /**
   * @summary 定位模块
   */
  _1 = 1,
  /**
   * @summary 展示支付宝提供的热门城市模块
   */
  _2 = 2,
}

declare const enum EChooseDistrictMode {
  /**
   * @summary 境内
   */
  _0 = 0,
  /**
   * @summary 境外
   */
  _1 = 1,
  /**
   * @summary 境内+境外
   */
  _2 = 2,
}

declare const enum EChooseImageSizeType {
  /**
   * @summary 原图
   */
  original = 'original',
  /**
   * @summary 压缩图
   */
  compressed = 'compressed',
}

declare const enum EChooseImageSourceType {
  /**
   * @summary 拍照
   */
  camera = 'camera',
  /**
   * @summary 相册选取
   */
  album = 'album',
}

declare const enum EChooseVideoCamera {
  /**
   * @summary 默认拉起后置摄像头。
   */
  back = 'back',
  /**
   * @summary 默认拉起前置摄像头。
   */
  front = 'front',
}

declare const enum EChooseVideoSourceType {
  /**
   * @summary 从相册选择视频。
   */
  album = 'album',
  /**
   * @summary 使用相机拍摄视频。
   */
  camera = 'camera',
}

declare const enum ECompressImageCompressLevel {
  /**
   * @summary 低质量
   */
  _0 = 0,
  /**
   * @summary 中等质量
   */
  _1 = 1,
  /**
   * @summary 高质量
   */
  _2 = 2,
  /**
   * @summary 不压缩
   */
  _3 = 3,
  /**
   * @summary 根据网络适应
   */
  _4 = 4,
}

declare const enum EDepositState {
  /**
   * @summary 支持
   */
  Y = 'Y',
  /**
   * @summary 不支持
   */
  N = 'N',
}

declare const enum EFileSystemEncoding {
  ascii = 'ascii',
  base64 = 'base64',
  hex = 'hex',
  binary = 'binary',
  ucs2 = 'ucs2',
  'ucs-2' = 'ucs-2',
  utf16le = 'utf16le',
  utf8 = 'utf8',
  'utf-16le' = 'utf-16le',
}

declare const enum EGetAuthCodeScopeNicks {
  /**
   * @summary 静默授权。
   */
  auth_base = 'auth_base',
  /**
   * @summary 主动授权。
   */
  auth_user = 'auth_user',
  /**
   * @summary 获取用户芝麻信息。
   */
  auth_zhima = 'auth_zhima',
}

declare const enum EGetNetworkTypeNetworkInfo {
  /**
   * @summary 未知
   */
  UNKNOWN = 'UNKNOWN',
  /**
   * @summary 网络不可用
   */
  NOTREACHABLE = 'NOTREACHABLE',
  /**
   * @summary WiFi
   */
  WIFI = 'WIFI',
  /**
   * @summary 3G
   */
  '3G' = '3G',
  /**
   * @summary 2G
   */
  '2G' = '2G',
  /**
   * @summary 4G
   */
  '4G' = '4G',
  /**
   * @summary WWAN
   */
  WWAN = 'WWAN',
}

declare const enum EInvokeType {
  /**
   * @summary 回跳至小程序地址
   */
  TINYAPP = 'TINYAPP',
  /**
   * @summary 支付宝服务窗
   */
  WINDOWS = 'WINDOWS',
}

declare const enum EMemoryWarningLevel {
  /**
   * @summary 低内存告警
   */
  _10 = 10,
  /**
   * @summary 重度内存告警
   */
  _15 = 15,
}

declare const enum EMyGetLocationType {
  /**
   * @summary 获取经纬度
   */
  _0 = 0,
  /**
   * @summary 获取经纬度和详细到区县级别的逆地理编码数据
   */
  _1 = 1,
  /**
   * @summary 获取经纬度和详细到街道级别的逆地理编码数据
   * @description 不推荐使用，精度过高，接口返回的速度会变慢。
   */
  _2 = 2,
  /**
   * @summary 获取经纬度和详细到POI级别的逆地理编码数据
   * @description 不推荐使用，精度过高，接口返回的速度会变慢。
   */
  _3 = 3,
}

declare const enum ERentSettleType {
  /**
   * @summary 表示商户自行结算，信用借还不提供租金支付能力
   */
  merchant = 'merchant',
  /**
   * @summary 表示使用支付宝支付功能，给用户提供租金代扣及赔偿金支付能力；
   */
  alipay = 'alipay',
}

declare const enum ERentUnit {
  /**
   * @summary 元/天
   */
  'DAY_YUAN' = 'DAY_YUAN',
  /**
   * @summary 元/小时
   */
  'HOUR_YUAN' = 'HOUR_YUAN',
  /**
   * @summary 元
   */
  'YUAN' = 'YUAN',
  /**
   * @summary  元/次
   */
  'YUAN_ONCE' = 'YUAN_ONCE',
}

declare const enum EShowAuthGuideAuthType {
  /**
   * @summary 蓝牙
   */
  BLUETOOTH = 'BLUETOOTH',
  /**
   * @summary 后台保活权限
   * @native 10.0.18
   * @ios false
   */
  BACKGROUNDER = 'BACKGROUNDER',
  /**
   * @summary 桌面快捷权限
   * @native 10.0.18
   * @ios false
   */
  SHORTCUT = 'SHORTCUT',
  /**
   * @summary Push 通知栏权限
   */
  NOTIFICATION = 'NOTIFICATION',
  /**
   * @summary 自启动权限
   * @native 10.0.18
   * @ios false
   */
  SELFSTARTING = 'SELFSTARTING',
  /**
   * @summary 存储权限
   * @native 10.0.18
   * @ios false
   */
  STORAGE = 'STORAGE',
  /**
   * @summary 麦克风权限
   */
  MICROPHONE = 'MICROPHONE',
  /**
   * @summary 通讯录权限
   */
  ADDRESSBOOK = 'ADDRESSBOOK',
  /**
   * @summary 相机权限
   */
  CAMERA = 'CAMERA',
  /**
   * @summary 照片权限
   */
  PHOTO = 'PHOTO',
  /**
   * @summary 地理位置系统总开关
   * @native 10.0.18
   * @ios false
   */
  LBSSERVICE = 'LBSSERVICE',
  /**
   * @summary 地理位置应用级别开关
   */
  LBS = 'LBS',
  /**
   * @summary 高精度地理位置开关
   * @native 10.0.18
   * @android false
   */
  LBSHIGHACCURACY = 'LBSHIGHACCURACY',
}

declare const enum ESpuName {
  'power_bank' = 'power_bank',
  'umbrella' = 'umbrella',
}

declare const enum TypeSystemInfo$AppMode {
  /**
   * @summary 标准版
   */
  normal = 'normal',
  /**
   * @summary 大字体版
   */
  bigFontSize = 'bigFontSize',
  /**
   * @summary 国际版
   */
  INT = 'INT',
  /**
   * @summary 澳门版
   */
  MO = 'MO',
  /**
   * @summary 企业版
   */
  Enterprise = 'Enterprise',
  /**
   * @summary 青少年版
   */
  teenager = 'teenager',
}

declare const enum TypeSystemInfo$Performance {
  /**
   * @summary 高性能
   * @description
   * - iOS 设备运行内存大于等于 4GB (对应 iPhone Xs 及以上)
   * - Android 设备运行内存大于等于 4GB
   */
  high = 'high',
  /**
   * @summary 性能中等
   * @description
   * - iOS 设备运行内存大于等于 2GB (对应 iPhone 6s ~ iPhone XR)
   * - Android 设备运行内存大于等于 3GB 且 CPU 核心数大于 4
   */
  middle = 'middle',
  /**
   * @summary 性能较弱
   */
  low = 'low',
  /**
   * @summary 无法识别
   * @description 设备运行内存无法识别
   */
  unknown = 'unknown',
}

declare namespace NFCAdapter {
  export interface Ndef {
    readonly techType: 'NDEF' | 'NFC-A' | 'NFC-B' | 'ISO-DEP' | 'NFC-F' | 'NFC-V' | 'MIFARE Classic' | 'MIFARE Ultralight';
    /**
     * @summary 断开连接
     */
    close(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 连接 NFC 标签
     */
    connect(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 获取最大传输长度
     */
    getMaxTransceiveLength(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 最大传输长度
         */
        length: number;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 最大传输长度
               */
              length: number;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 最大传输长度
       */
      length: number;
    }>;
    offNdefMessage(
      cb?: (arg: {
        message: Array<{
          tnf: ArrayBuffer;
          type: ArrayBuffer;
          id: ArrayBuffer;
          payload: ArrayBuffer;
        }>;
      }) => void,
    ): void;
    onNdefMessage(
      cb: (arg: {
        message: Array<{
          tnf: ArrayBuffer;
          type: ArrayBuffer;
          id: ArrayBuffer;
          payload: ArrayBuffer;
        }>;
      }) => void,
    ): void;
    readNdefMessage(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { data: IReadNdefMessageData }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              data: IReadNdefMessageData;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      data: IReadNdefMessageData;
    }>;
    /**
     * @summary 设置超时时间
     */
    setTimeout(r: {
      /**
       * @summary 设置超时时间（ms）
       */
      timeout: number;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 传输数据
     */
    transceive(r: {
      /**
       * @summary 需要传递的二进制数据
       */
      data: ArrayBuffer;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 芯片返回数据
         */
        data: ArrayBuffer;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 芯片返回数据
               */
              data: ArrayBuffer;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 芯片返回数据
       */
      data: ArrayBuffer;
    }>;
    writeNdefMessage(r: {
      records: IWriteNdefMessageRecords[];
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
  }
  export interface NfcA {
    readonly techType: 'NDEF' | 'NFC-A' | 'NFC-B' | 'ISO-DEP' | 'NFC-F' | 'NFC-V' | 'MIFARE Classic' | 'MIFARE Ultralight';
    /**
     * @summary 断开连接
     */
    close(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 连接 NFC 标签
     */
    connect(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 获取 ATQA 信息
     */
    getAtqa(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 返回 ATQA/SENS_RES 数据
         */
        atqa: ArrayBuffer;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 返回 ATQA/SENS_RES 数据
               */
              atqa: ArrayBuffer;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 返回 ATQA/SENS_RES 数据
       */
      atqa: ArrayBuffer;
    }>;
    /**
     * @summary 获取最大传输长度
     */
    getMaxTransceiveLength(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 最大传输长度
         */
        length: number;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 最大传输长度
               */
              length: number;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 最大传输长度
       */
      length: number;
    }>;
    /**
     * @summary 获取 SAK 信息
     */
    getSak(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 返回 SAK/SEL_RES 数据
         */
        sak: number;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 返回 SAK/SEL_RES 数据
               */
              sak: number;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 返回 SAK/SEL_RES 数据
       */
      sak: number;
    }>;
    /**
     * @summary 设置超时时间
     */
    setTimeout(r: {
      /**
       * @summary 设置超时时间（ms）
       */
      timeout: number;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 传输数据
     */
    transceive(r: {
      /**
       * @summary 需要传递的二进制数据
       */
      data: ArrayBuffer;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 芯片返回数据
         */
        data: ArrayBuffer;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 芯片返回数据
               */
              data: ArrayBuffer;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 芯片返回数据
       */
      data: ArrayBuffer;
    }>;
  }
  export interface IsoDep {
    readonly techType: 'NDEF' | 'NFC-A' | 'NFC-B' | 'ISO-DEP' | 'NFC-F' | 'NFC-V' | 'MIFARE Classic' | 'MIFARE Ultralight';
    /**
     * @summary 断开连接
     */
    close(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 连接 NFC 标签
     */
    connect(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 获取复位信息
     */
    getHistoricalBytes(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 返回历史二进制数据
         */
        histBytes: ArrayBuffer;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 返回历史二进制数据
               */
              histBytes: ArrayBuffer;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 返回历史二进制数据
       */
      histBytes: ArrayBuffer;
    }>;
    /**
     * @summary 获取最大传输长度
     */
    getMaxTransceiveLength(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 最大传输长度
         */
        length: number;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 最大传输长度
               */
              length: number;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 最大传输长度
       */
      length: number;
    }>;
    /**
     * @summary 设置超时时间
     */
    setTimeout(r: {
      /**
       * @summary 设置超时时间（ms）
       */
      timeout: number;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 传输数据
     */
    transceive(r: {
      /**
       * @summary 需要传递的二进制数据
       */
      data: ArrayBuffer;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 芯片返回数据
         */
        data: ArrayBuffer;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 芯片返回数据
               */
              data: ArrayBuffer;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 芯片返回数据
       */
      data: ArrayBuffer;
    }>;
  }
  export interface NfcV {
    readonly techType: 'NDEF' | 'NFC-A' | 'NFC-B' | 'ISO-DEP' | 'NFC-F' | 'NFC-V' | 'MIFARE Classic' | 'MIFARE Ultralight';
    /**
     * @summary 断开连接
     */
    close(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 连接 NFC 标签
     */
    connect(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 获取最大传输长度
     */
    getMaxTransceiveLength(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 最大传输长度
         */
        length: number;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 最大传输长度
               */
              length: number;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 最大传输长度
       */
      length: number;
    }>;
    /**
     * @summary 设置超时时间
     */
    setTimeout(r: {
      /**
       * @summary 设置超时时间（ms）
       */
      timeout: number;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 传输数据
     */
    transceive(r: {
      /**
       * @summary 需要传递的二进制数据
       */
      data: ArrayBuffer;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 芯片返回数据
         */
        data: ArrayBuffer;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 芯片返回数据
               */
              data: ArrayBuffer;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 芯片返回数据
       */
      data: ArrayBuffer;
    }>;
  }
  export interface NfcB {
    readonly techType: 'NDEF' | 'NFC-A' | 'NFC-B' | 'ISO-DEP' | 'NFC-F' | 'NFC-V' | 'MIFARE Classic' | 'MIFARE Ultralight';
    /**
     * @summary 断开连接
     */
    close(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 连接 NFC 标签
     */
    connect(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 获取最大传输长度
     */
    getMaxTransceiveLength(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 最大传输长度
         */
        length: number;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 最大传输长度
               */
              length: number;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 最大传输长度
       */
      length: number;
    }>;
    /**
     * @summary 设置超时时间
     */
    setTimeout(r: {
      /**
       * @summary 设置超时时间（ms）
       */
      timeout: number;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 传输数据
     */
    transceive(r: {
      /**
       * @summary 需要传递的二进制数据
       */
      data: ArrayBuffer;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 芯片返回数据
         */
        data: ArrayBuffer;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 芯片返回数据
               */
              data: ArrayBuffer;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 芯片返回数据
       */
      data: ArrayBuffer;
    }>;
  }
  export interface NfcF {
    readonly techType: 'NDEF' | 'NFC-A' | 'NFC-B' | 'ISO-DEP' | 'NFC-F' | 'NFC-V' | 'MIFARE Classic' | 'MIFARE Ultralight';
    /**
     * @summary 断开连接
     */
    close(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 连接 NFC 标签
     */
    connect(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 获取最大传输长度
     */
    getMaxTransceiveLength(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 最大传输长度
         */
        length: number;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 最大传输长度
               */
              length: number;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 最大传输长度
       */
      length: number;
    }>;
    /**
     * @summary 设置超时时间
     */
    setTimeout(r: {
      /**
       * @summary 设置超时时间（ms）
       */
      timeout: number;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 传输数据
     */
    transceive(r: {
      /**
       * @summary 需要传递的二进制数据
       */
      data: ArrayBuffer;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 芯片返回数据
         */
        data: ArrayBuffer;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 芯片返回数据
               */
              data: ArrayBuffer;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 芯片返回数据
       */
      data: ArrayBuffer;
    }>;
  }
  export interface MifareClassic {
    readonly techType: 'NDEF' | 'NFC-A' | 'NFC-B' | 'ISO-DEP' | 'NFC-F' | 'NFC-V' | 'MIFARE Classic' | 'MIFARE Ultralight';
    /**
     * @summary 断开连接
     */
    close(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 连接 NFC 标签
     */
    connect(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 获取最大传输长度
     */
    getMaxTransceiveLength(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 最大传输长度
         */
        length: number;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 最大传输长度
               */
              length: number;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 最大传输长度
       */
      length: number;
    }>;
    /**
     * @summary 设置超时时间
     */
    setTimeout(r: {
      /**
       * @summary 设置超时时间（ms）
       */
      timeout: number;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 传输数据
     */
    transceive(r: {
      /**
       * @summary 需要传递的二进制数据
       */
      data: ArrayBuffer;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 芯片返回数据
         */
        data: ArrayBuffer;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 芯片返回数据
               */
              data: ArrayBuffer;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 芯片返回数据
       */
      data: ArrayBuffer;
    }>;
  }
  export interface MifareUltralight {
    readonly techType: 'NDEF' | 'NFC-A' | 'NFC-B' | 'ISO-DEP' | 'NFC-F' | 'NFC-V' | 'MIFARE Classic' | 'MIFARE Ultralight';
    /**
     * @summary 断开连接
     */
    close(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 连接 NFC 标签
     */
    connect(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 获取最大传输长度
     */
    getMaxTransceiveLength(r?: {
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 最大传输长度
         */
        length: number;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 最大传输长度
               */
              length: number;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 最大传输长度
       */
      length: number;
    }>;
    /**
     * @summary 设置超时时间
     */
    setTimeout(r: {
      /**
       * @summary 设置超时时间（ms）
       */
      timeout: number;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: { success: true }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
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
            },
      ): void;
    }): Promise<{
      success: true;
    }>;
    /**
     * @summary 传输数据
     */
    transceive(r: {
      /**
       * @summary 需要传递的二进制数据
       */
      data: ArrayBuffer;
      /**
       * 接口调用成功的回调函数
       * @param data 成功返回的数据
       */
      success?(data: {
        /**
         * @summary 芯片返回数据
         */
        data: ArrayBuffer;
      }): void;
      /**
       * 接口调用失败的回调函数
       * @param err 错误信息
       */
      fail?(err: { error?: number; errorMessage?: string }): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * @summary 芯片返回数据
               */
              data: ArrayBuffer;
            }
          | {
              error?: number;
              errorMessage?: string;
            },
      ): void;
    }): Promise<{
      /**
       * @summary 芯片返回数据
       */
      data: ArrayBuffer;
    }>;
  }
  interface IReadNdefMessageData {
    messages: IReadNdefMessageDataMessages[];
  }
  interface IReadNdefMessageDataMessages {
    records: IReadNdefMessageDataMessagesRecords[];
  }
  interface IReadNdefMessageDataMessagesRecords {
    tnf: string;
    id: string;
    type: string;
    payload: string;
  }
  interface IWriteNdefMessageRecords {
    tnf: string;
    id: string;
    type: string;
    payload: string;
  }
}
