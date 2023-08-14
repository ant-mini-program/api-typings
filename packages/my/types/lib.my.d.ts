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
   * 写入联系人资料到设备通讯录
   * @description 用户可以选择将表单以“创建新联系人”或“添加到现有联系人”的方式，写入联系人资料到手机系统的通讯录
   * @see https://opendocs.alipay.com/mini/api/contact
   */
  export function addPhoneContact(object?: {
    /**
     * 姓氏
     */
    lastName?: string;
    /**
     * 中间名
     */
    middleName?: string;
    /**
     * 名字
     */
    firstName?: string;
    /**
     * 昵称
     */
    nickName?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 手机号
     */
    mobilePhoneNumber?: string;
    /**
     * 工作传真
     */
    workFaxNumber?: string;
    /**
     * 工作电话
     */
    workPhoneNumber?: string;
    /**
     * 公司电话
     */
    hostNumber?: string;
    /**
     * 住宅传真
     */
    homeFaxNumber?: string;
    /**
     * 住宅电话
     */
    homePhoneNumber?: string;
    /**
     * 微信号
     */
    weChatNumber?: string;
    /**
     * 支付宝账号
     */
    alipayAccount?: string;
    /**
     * 公司
     */
    organization?: string;
    /**
     * 职位
     */
    title?: string;
    /**
     * 电子邮件
     */
    email?: string;
    /**
     * 网站
     */
    url?: string;
    /**
     * 联系地址国家
     */
    addressCountry?: string;
    /**
     * 联系地址省份
     */
    addressState?: string;
    /**
     * 联系地址城市
     */
    addressCity?: string;
    /**
     * 联系地址街道
     */
    addressStreet?: string;
    /**
     * 联系地址邮政编码
     */
    addressPostalCode?: string;
    /**
     * 工作地址国家
     */
    workCountry?: string;
    /**
     * 工作地址省份
     */
    workState?: string;
    /**
     * 工作地址城市
     */
    workCity?: string;
    /**
     * 工作地址街道
     */
    workStreet?: string;
    /**
     * 工作地址邮政编码
     */
    workPostalCode?: string;
    /**
     * 家庭住址国家
     */
    homeCountry?: string;
    /**
     * 家庭住址省份
     */
    homeState?: string;
    /**
     * 家庭住址城市
     */
    homeCity?: string;
    /**
     * 家庭住址街道
     */
    homeStreet?: string;
    /**
     * 家庭住址邮政编码
     */
    homePostalCode?: string;
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
   * 显示警告框
   * @description 可以设置警告框的标题、内容、按钮文字等，暂不支持设置图片等样式
   * @see https://opendocs.alipay.com/mini/api/ui-feedback
   */
  export function alert(object?: {
    /**
     * 警告框的标题
     * @example "亲"
     */
    title?: string;
    /**
     * 警告框的内容
     * @example "您本月的账单已出"
     */
    content?: string;
    /**
     * 按钮文字
     * @default "确定"
     * @example "我知道了"
     */
    buttonText?: string;
    /**
     * "确认" 按钮颜色，HEX 格式
     */
    confirmColor?: string;
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
   * 规划出行路线
   * @description
   * - 根据起点和终点的地理位置，智能规划最佳出行路线，并计算不同出行方式下的行动距离和所需时间。
   * - 默认规划步行路线，支持规划步行、公交、骑行和驾车四种路线
   * @see https://opendocs.alipay.com/mini/api/calculate-route
   */
  export function calculateRoute(object: {
    /**
     * 搜索类型。
     * @default "walk"
     */
    searchType?: 'walk' | 'bus' | 'drive' | 'ride';
    /**
     * 起点纬度。
     */
    startLat: number;
    /**
     * 起点经度。
     */
    startLng: number;
    /**
     * 终点纬度。
     */
    endLat: number;
    /**
     * 终点经度。
     */
    endLng: number;
    /**
     * 途径点，仅驾车规划有效，即 `searchType="drive"` 时有效。
     */
    throughPoints?: ICalculateRouteThroughPoints[];
    /**
     * 仅在 驾车模式（`searchType="drive"`）和 公交模式（`searchType="bus"`）支持，具体值见 mode 参数列表。
     */
    mode?: ECalculateRouteMode;
    /**
     * 公交模式（`searchType="bus"`）下必填。传参可填写城市中文名称或城市名称拼音。例如：`city:'hangzhou'` 或 `city: '杭州'`。
     */
    city?: string;
    /**
     * 公交跨城模式下必填。
     */
    destinationCity?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 是否成功，失败时不会返回其他字段
       */
      success: boolean;
      /**
       * 距离，单位为 米。
       */
      distance: number;
      /**
       * 时间，单位为 秒。
       */
      duration: number;
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
             * 是否成功，失败时不会返回其他字段
             */
            success: boolean;
            /**
             * 距离，单位为 米。
             */
            distance: number;
            /**
             * 时间，单位为 秒。
             */
            duration: number;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 是否成功，失败时不会返回其他字段
     */
    success: boolean;
    /**
     * 距离，单位为 米。
     */
    distance: number;
    /**
     * 时间，单位为 秒。
     */
    duration: number;
  }>;
  /**
   * 取消蓝牙配对
   * @see https://opendocs.alipay.com/mini/01zarv
   */
  export function cancelBluetoothPair(object: {
    /**
     * 蓝牙设备 id
     */
    deviceId: string;
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
   * 导出画布内容为图片
   * @see https://opendocs.alipay.com/mini/api/my.canvasToTempFilePath
   */
  export function canvasToTempFilePath(object: {
    /**
     * 画布标识，传入 canvas 组件的 id
     */
    canvasId?: string;
    /**
     * 画布标识，传入 canvas 组件实例 （canvas type="2d/webgl" 时使用该属性）。
     */
    canvas?: CanvasContext;
    /**
     * 指定的画布区域的左上角横坐标
     */
    x: number;
    /**
     * 指定的画布区域的左上角纵坐标
     */
    y: number;
    /**
     * 指定的画布区域的宽度
     */
    width: number;
    /**
     * 指定的画布区域的高度
     */
    height: number;
    /**
     * 输出的图片的宽度
     */
    destWidth: number;
    /**
     * 输出的图片的高度
     */
    destHeight: number;
    /**
     * 目标文件的类型
     */
    fileType: 'png' | 'jpg';
    /**
     * 图片的质量
     */
    quality: number;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 生成文件的临时路径 (本地路径)。
       */
      tempFilePath: string;
      /**
       * 生成文件的临时路径 (本地路径)。
       */
      apFilePath: string;
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
            error: 1;
            errorMessage: 'canvas content or format wrong!';
          }
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * 生成文件的临时路径 (本地路径)。
             */
            tempFilePath: string;
            /**
             * 生成文件的临时路径 (本地路径)。
             */
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
          )
    ): void;
  }): Promise<{
    /**
     * 生成文件的临时路径 (本地路径)。
     */
    tempFilePath: string;
    /**
     * 生成文件的临时路径 (本地路径)。
     */
    apFilePath: string;
  }>;
  /**
   * 下单前检查，确认使用何种支付方式
   * @description 下单前检查，确认使用何种支付方式
   * @see https://opendocs.alipay.com/mini/082dlt
   */
  export function checkBeforeAddOrder(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 返回使用方式，如果是 1 则使用交易组件，如果是 0 则使用 tradePay
       */
      requireOrder: number;
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
            error: 11;
            errorMessage: '服务异常请重试';
          }
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * 返回使用方式，如果是 1 则使用交易组件，如果是 0 则使用 tradePay
             */
            requireOrder: number;
          }
        | (
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 11;
                errorMessage: '服务异常请重试';
              }
          )
    ): void;
  }): Promise<{
    /**
     * 返回使用方式，如果是 1 则使用交易组件，如果是 0 则使用 tradePay
     */
    requireOrder: number;
  }>;
  /**
   * 获取本机支持的 IFAA 生物认证方式
   * @see https://opendocs.alipay.com/mini/05v8jv
   */
  export function checkIsIfaaEnrolledInDevice(object: {
    /**
     * 认证方式
     */
    checkAuthMode: 'fingerPrint' | 'facial';
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 是否成功
       */
      success?: boolean;
      /**
       * 是否录入
       */
      isEnrolled?: boolean;
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
            success?: boolean;
            /**
             * 是否录入
             */
            isEnrolled?: boolean;
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
    success?: boolean;
    /**
     * 是否录入
     */
    isEnrolled?: boolean;
  }>;
  /**
   * 获取本机支持的 IFAA 生物认证方式
   * @see https://opendocs.alipay.com/mini/05vh0m
   */
  export function checkIsSupportIfaaAuthentication(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 该设备支持的可被 IFAA 识别的生物识别方式
       */
      supportMode?: string[];
      /**
       * 是否成功
       */
      success?: boolean;
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
             * 该设备支持的可被 IFAA 识别的生物识别方式
             */
            supportMode?: string[];
            /**
             * 是否成功
             */
            success?: boolean;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 该设备支持的可被 IFAA 识别的生物识别方式
     */
    supportMode?: string[];
    /**
     * 是否成功
     */
    success?: boolean;
  }>;
  /**
   * 从支付宝通讯录中选择联系人
   * @description 唤起支付宝通讯录，选择一个或者多个支付宝联系人
   * @see https://opendocs.alipay.com/mini/api/ui-contact
   */
  export function chooseAlipayContact(object?: {
    /**
     * 单次最多选择联系人个数
     * @description 默认值为 1，最大值为 10。
     * @default 1
     */
    count?: number;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 选中的支付宝联系人数组。
       */
      contacts: IMyChooseAlipayContactContacts[];
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
            error: 10;
            errorMessage: '没有权限';
          }
        | {
            error: 11;
            errorMessage: '用户取消操作（或设备未授权使用通讯录）';
          }
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * 选中的支付宝联系人数组。
             */
            contacts: IMyChooseAlipayContactContacts[];
          }
        | (
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 10;
                errorMessage: '没有权限';
              }
            | {
                error: 11;
                errorMessage: '用户取消操作（或设备未授权使用通讯录）';
              }
          )
    ): void;
  }): Promise<{
    /**
     * 选中的支付宝联系人数组。
     */
    contacts: IMyChooseAlipayContactContacts[];
  }>;
  /**
   * 打开城市选择列表
   * @see https://opendocs.alipay.com/mini/api/ui-city
   */
  export function chooseCity(object?: {
    /**
     * 是否显示当前定位城市
     * @default false
     */
    showLocatedCity?: boolean;
    /**
     * 是否显示热门城市
     * @default true
     */
    showHotCities?: boolean;
    /**
     * 是否修改当前定位城市，如果 showLocatedCity 为 false，此设置无效
     * @default false
     */
    setLocatedCity?: boolean;
    /**
     * 自定义城市列表
     */
    cities?: ITypeCityInfo[];
    /**
     * 自定义热门城市列表
     */
    hotCities?: ITypeCityInfo[];
    /**
     * 自定义历史访问城市列表
     */
    customHistoryCities?: ITypeCityInfo[];
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 城市名
       */
      city: string;
      /**
       * 行政区划代码
       */
      adCode: string;
      /**
       * 经度（注意：仅用户选择当前定位城市才会返回）
       */
      longitude?: number;
      /**
       * 纬度（注意：仅用户选择当前定位城市才会返回）
       */
      latitude?: number;
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
            error: 11;
            errorMessage: '用户取消操作';
          }
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * 城市名
             */
            city: string;
            /**
             * 行政区划代码
             */
            adCode: string;
            /**
             * 经度（注意：仅用户选择当前定位城市才会返回）
             */
            longitude?: number;
            /**
             * 纬度（注意：仅用户选择当前定位城市才会返回）
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
          )
    ): void;
  }): Promise<{
    /**
     * 城市名
     */
    city: string;
    /**
     * 行政区划代码
     */
    adCode: string;
    /**
     * 经度（注意：仅用户选择当前定位城市才会返回）
     */
    longitude?: number;
    /**
     * 纬度（注意：仅用户选择当前定位城市才会返回）
     */
    latitude?: number;
  }> &
    ChooseCityTask;
  /**
   * 唤起选择联系人
   * @description 默认只包含支付宝联系人，可通过修改参数选择手机通讯录联系人或者双向通讯录联系人。
   * @see https://opendocs.alipay.com/mini/api/eqx2u5
   */
  export function chooseContact(object: {
    /**
     * 选择类型。
     */
    chooseType: 'single' | 'multi';
    /**
     * 是否包含自己
     */
    includeMe?: boolean;
    /**
     * 选择手机通讯录联系人的模式。
     */
    includeMobileContactMode?: 'none' | 'known' | 'all';
    /**
     * 最大选择人数
     * @description 仅 `chooseType` 为 `multi` 时才有效。
     */
    multiChooseMax?: number;
    /**
     * 多选达到上限时提示的文案
     * @description 仅 `chooseType` 为 `multi` 时才有效。
     */
    multiChooseMaxTips?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 选择返回的用户信息。
       */
      contactsDicArray: IMyChooseContactContactsDicArray[];
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
             * 选择返回的用户信息。
             */
            contactsDicArray: IMyChooseContactContactsDicArray[];
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 选择返回的用户信息。
     */
    contactsDicArray: IMyChooseContactContactsDicArray[];
  }>;
  /**
   * 选择城市地区
   * @see https://opendocs.alipay.com/mini/api/choosedistrict
   */
  export function chooseDistrict(object: {
    /**
     * 指定场景。
     * @default 0
     */
    mode: EChooseDistrictMode;
    /**
     * 境内 Tab 自定义标题。
     * @default "国内"
     */
    mainTitle?: string;
    /**
     * 头部自定义对象数组。如定位区块、热门城市区块。
     */
    mainHeadList?: IChooseDistrictMainHeadList[];
    /**
     * 底部城市列表。
     * 当对象为空时，默认使用内置的境内城市列表填充。
     */
    mainNormalList?: IChooseDistrictMainHeadListList[];
    /**
     * 境外 Tab 自定义标题。
     * @default "国际/港澳台"
     */
    seniorTitle?: string;
    /**
     * 境外多 tab 数据集合。
     * 如果对象为空时，默认使用内置的境外城市列表填充。
     */
    seniorPageList?: IChooseDistrictSeniorPageList[];
    /**
     * 修改内置数据的参数接口。传值方式为 {“key”,"value"}。其中 key 是需要修改的城市的 adCode， value 是展示的城市名。
     * 仅在 mainNormalList 为空时生效，支持对默认境内数据差量更新:{"371200":"","542400":"","540600":"那曲","659010":"胡杨河市"}。
     * value 为空代表删除对应 adCode 的城市；value 不为空代表更新对应 adCode 的城市。
     */
    mainMergeOptions?: IChooseDistrictMainMergeOptions;
    /**
     * 自定义数据文件地址。自定义数据量大时，建议将数据文件内置在小程序内。文件内参数格式同接口定义。
     */
    src?: string;
    /**
     * 指定行政区划版本号：
     *
     * ● null、空串：使用老版本（2020Q1）
     *
     * ● UPTODATE：使用最新版
     *
     * ● 2022Q2：使用2022Q2版本
     *
     * 10.3.20开始支持，接入联系百喻
     */
    adVersion?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 城市名称。
       */
      name: string;
      /**
       * 城市编码。
       */
      adCode: string;
      /**
       * 自定义扩展字段透传。
       */
      ext?: Record<string, string>;
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
             * 城市名称。
             */
            name: string;
            /**
             * 城市编码。
             */
            adCode: string;
            /**
             * 自定义扩展字段透传。
             */
            ext?: Record<string, string>;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 城市名称。
     */
    name: string;
    /**
     * 城市编码。
     */
    adCode: string;
    /**
     * 自定义扩展字段透传。
     */
    ext?: Record<string, string>;
  }>;
  /**
   * 拍照或从本地相册中选择图片
   * @see https://opendocs.alipay.com/mini/api/media/image/my.chooseimage
   */
  export function chooseImage(object?: {
    /**
     * 最大可选照片数，默认为 1 张
     * @default 1
     */
    count?: number;
    /**
     * 图片类型。
     * @default ["original","compressed"]
     */
    sizeType?: Array<`${EChooseImageSizeType}`>;
    /**
     * 图片类型。
     * @default ["camera","album"]
     */
    sourceType?:
      | Array<`${EChooseImageSourceType}`>
      | `${EChooseImageSourceType}`;
    /**
     * 选图过程中拍摄的照片是否落相册（默认不落相册）
     */
    storeToAlbum?: boolean;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 图片的 [本地临时文件](https://opendocs.alipay.com/mini/03dt4s#本地临时文件) 路径列表
       */
      apFilePaths: string[];
      /**
       * 图片的 [本地临时文件](https://opendocs.alipay.com/mini/03dt4s#本地临时文件) 路径列表
       */
      tempFilePaths: string[];
      /**
       * 图片的 [本地临时文件](https://opendocs.alipay.com/mini/03dt4s#本地临时文件) 列表
       */
      tempFiles: IMyChooseImageTempFiles;
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
            error: 11;
            errorMessage: '用户取消操作';
          }
        | {
            error: 2001;
            errorMessage: '在申请授权时用户拒绝授权';
          }
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * 图片的 [本地临时文件](https://opendocs.alipay.com/mini/03dt4s#本地临时文件) 路径列表
             */
            apFilePaths: string[];
            /**
             * 图片的 [本地临时文件](https://opendocs.alipay.com/mini/03dt4s#本地临时文件) 路径列表
             */
            tempFilePaths: string[];
            /**
             * 图片的 [本地临时文件](https://opendocs.alipay.com/mini/03dt4s#本地临时文件) 列表
             */
            tempFiles: IMyChooseImageTempFiles;
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
            | {
                error: 2001;
                errorMessage: '在申请授权时用户拒绝授权';
              }
          )
    ): void;
  }): Promise<{
    /**
     * 图片的 [本地临时文件](https://opendocs.alipay.com/mini/03dt4s#本地临时文件) 路径列表
     */
    apFilePaths: string[];
    /**
     * 图片的 [本地临时文件](https://opendocs.alipay.com/mini/03dt4s#本地临时文件) 路径列表
     */
    tempFilePaths: string[];
    /**
     * 图片的 [本地临时文件](https://opendocs.alipay.com/mini/03dt4s#本地临时文件) 列表
     */
    tempFiles: IMyChooseImageTempFiles;
  }>;
  /**
   * 选择地理位置
   * @description
   * - 暂无境外地图数据，在中国内地（不含港澳台）以外的地区可能无法正常调用此 API
   * - 仅支持高德地图 style 与火星坐标系。
   * @see https://opendocs.alipay.com/mini/api/location
   */
  export function chooseLocation(object?: {
    /**
     * 页面显示标题
     */
    title?: string;
    /**
     * 是否显示tab页
     */
    showTab?: boolean;
    /**
     * 预设纬度 传入该参数将自动定位到该点
     */
    latitude?: number;
    /**
     * 预设经度 传入该参数将自动定位到该点
     */
    longitude?: number;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 位置名称。
       */
      name: string;
      /**
       * 地址的详细说明。
       */
      address: string;
      /**
       * 经度。
       */
      longitude: string;
      /**
       * 纬度。
       */
      latitude: string;
      /**
       * 省份名称。
       */
      provinceName: string;
      /**
       * 城市名称。
       */
      cityName: string;
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
             * 位置名称。
             */
            name: string;
            /**
             * 地址的详细说明。
             */
            address: string;
            /**
             * 经度。
             */
            longitude: string;
            /**
             * 纬度。
             */
            latitude: string;
            /**
             * 省份名称。
             */
            provinceName: string;
            /**
             * 城市名称。
             */
            cityName: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 位置名称。
     */
    name: string;
    /**
     * 地址的详细说明。
     */
    address: string;
    /**
     * 经度。
     */
    longitude: string;
    /**
     * 纬度。
     */
    latitude: string;
    /**
     * 省份名称。
     */
    provinceName: string;
    /**
     * 城市名称。
     */
    cityName: string;
  }>;
  /**
   * 选择设备通信录中联系人电话
   * @see https://opendocs.alipay.com/mini/api/blghgl
   */
  export function choosePhoneContact(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 选中的联系人姓名
       */
      name: string;
      /**
       * 选中的联系人手机号
       */
      mobile: string;
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
             * 选中的联系人姓名
             */
            name: string;
            /**
             * 选中的联系人手机号
             */
            mobile: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 选中的联系人姓名
     */
    name: string;
    /**
     * 选中的联系人手机号
     */
    mobile: string;
  }>;
  /**
   * 选择视频
   * @description 支持拍摄视频或从手机相册中选视频
   * @see https://opendocs.alipay.com/mini/api/media/video/my.choosevideo
   */
  export function chooseVideo(object?: {
    /**
     * 视频选择的来源。
     * @default ['album','camera']
     */
    sourceType?:
      | Array<`${EChooseVideoSourceType}`>
      | `${EChooseVideoSourceType}`;
    /**
     * 是否压缩所选择的视频文件。对iOS总是有压缩的，只是压缩级别不同。
     * @default true
     */
    compressed?: boolean;
    /**
     * 拍摄视频最长拍摄时间，单位：秒。
     * @default 60
     */
    maxDuration?: number;
    /**
     * 默认拉起的是前置或者后置摄像头。部分 Android 手机下由于系统 ROM 不支持无法生效。
     * @default back
     */
    camera?: Array<`${EChooseVideoCamera}`> | `${EChooseVideoCamera}`;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 选定视频的临时文件路径。
       */
      filePath: string;
      /**
       * 选定视频的时间长度。
       */
      duration: number;
      /**
       * 选定视频的数据量大小。
       */
      size: number;
      /**
       * 返回选定视频的高度。
       */
      height: number;
      /**
       * 返回选定视频的宽度。
       */
      width: number;
      /**
       * 选定视频的临时文件路径。
       */
      tempFilePath: string;
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
             * 选定视频的临时文件路径。
             */
            filePath: string;
            /**
             * 选定视频的时间长度。
             */
            duration: number;
            /**
             * 选定视频的数据量大小。
             */
            size: number;
            /**
             * 返回选定视频的高度。
             */
            height: number;
            /**
             * 返回选定视频的宽度。
             */
            width: number;
            /**
             * 选定视频的临时文件路径。
             */
            tempFilePath: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 选定视频的临时文件路径。
     */
    filePath: string;
    /**
     * 选定视频的时间长度。
     */
    duration: number;
    /**
     * 选定视频的数据量大小。
     */
    size: number;
    /**
     * 返回选定视频的高度。
     */
    height: number;
    /**
     * 返回选定视频的宽度。
     */
    width: number;
    /**
     * 选定视频的临时文件路径。
     */
    tempFilePath: string;
  }>;
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
   * 关闭本机蓝牙模块
   * @see https://opendocs.alipay.com/mini/api/wvko0w
   */
  export function closeBluetoothAdapter(object?: {
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
   * @deprecated 推荐使用 [WebSocketTask]() 进行多链接管理
   * 关闭 WebSocket 连接
   * @see https://opendocs.alipay.com/mini/api/network
   */
  export function closeSocket(object?: {
    /**
     * 关闭连接的状态号
     * @default 1000
     */
    code?: number;
    /**
     * 连接被关闭的原因
     */
    reason?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 消息内容
       */
      message: string;
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
             * 消息内容
             */
            message: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 消息内容
     */
    message: string;
  }>;
  /**
   * 压缩图片
   * @see https://opendocs.alipay.com/mini/api/media/image/my.compressimage
   */
  export function compressImage(object: {
    /**
     * 要压缩的图片路径数组。
     */
    apFilePaths: string[];
    /**
     * 压缩质量
     * @default 4
     */
    compressLevel?: ECompressImageCompressLevel;
    /**
     * 压缩后图片的宽度
     */
    compressedWidth?: number;
    /**
     * 压缩后图片的高度
     */
    compressedHeight?: number;
    /**
     * 压缩后图片的宽度
     */
    maxWidth?: number;
    /**
     * 压缩后图片的高度
     */
    maxHeight?: number;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 压缩后的图片路径数组。
       */
      apFilePaths: string[];
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
             * 压缩后的图片路径数组。
             */
            apFilePaths: string[];
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 压缩后的图片路径数组。
     */
    apFilePaths: string[];
  }>;
  /**
   * 显示确认框
   * @description 可以配置确认框的标题、内容、确认或取消按钮的文字等
   * @see https://opendocs.alipay.com/mini/api/lt3uqc
   */
  export function confirm(object?: {
    /**
     * 确认框的标题
     */
    title?: string;
    /**
     * 确认框的内容
     */
    content?: string;
    /**
     * 确认按钮文字
     * @default "确定"
     */
    confirmButtonText?: string;
    /**
     * 取消按钮文字
     * @default "取消"
     */
    cancelButtonText?: string;
    /**
     * "确认" 按钮颜色，HEX 格式
     */
    confirmColor?: string;
    /**
     * "取消" 按钮颜色，HEX 格式
     */
    cancelColor?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * "确认" 为 true, 否则为 false
       */
      confirm: boolean;
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
             * "确认" 为 true, 否则为 false
             */
            confirm: boolean;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * "确认" 为 true, 否则为 false
     */
    confirm: boolean;
  }>;
  /**
   * 连接蓝牙低功耗设备
   * @see https://opendocs.alipay.com/mini/api/tmew6e
   */
  export function connectBLEDevice(object: {
    /**
     * 蓝牙设备 ID
     */
    deviceId: string;
    /**
     * 超时时间（单位毫秒）
     */
    timeout?: number;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 错误码
       */
      error: string;
      /**
       * 错误信息
       */
      errorMessage: string;
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
             * 错误码
             */
            error: string;
            /**
             * 错误信息
             */
            errorMessage: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 错误码
     */
    error: string;
    /**
     * 错误信息
     */
    errorMessage: string;
  }>;
  /**
   * 创建一个 WebSocket 的连接
   * @description
   * - 默认情况下一个小程序在一段时间内只能保留一个 WebSocket 连接，如果当前已存在 WebSocket 连接，那么会自动关闭该连接，并重新创建一个新的 WebSocket 连接。
   * - 如果需要同时创建多个 WebSocket 连接，需要使用 multiple 参数
   * @see https://opendocs.alipay.com/mini/api/vx19c3
   */
  export function connectSocket(param: {
    /**
     * 使用 SocketTask 模式，允许创建多条 socket 连接
     */
    multiple: true;
    /**
     * 目标服务器接口地址。
     * - 部分新发布的小程序只支持 wss 协议。
     */
    url: string;
    /**
     * 请求的参数。
     */
    data?: Record<string, unknown>;
    /**
     * 设置请求的头部。
     */
    header?: Record<string, string>;
    /**
     * 协议
     */
    protocols?: string[];
  }): WebSocketTask;
  /**
   * 创建一个 WebSocket 的连接
   * @description
   * - 默认情况下一个小程序在一段时间内只能保留一个 WebSocket 连接，如果当前已存在 WebSocket 连接，那么会自动关闭该连接，并重新创建一个新的 WebSocket 连接。
   * - 如果需要同时创建多个 WebSocket 连接，需要使用 multiple 参数
   * @see https://opendocs.alipay.com/mini/api/vx19c3
   */
  export function connectSocket(param: {
    /**
     * 使用 SocketTask 模式，允许创建多条 socket 连接
     */
    multiple?: boolean;
    /**
     * 目标服务器接口地址。
     * - 部分新发布的小程序只支持 wss 协议。
     */
    url: string;
    /**
     * 请求的参数。
     */
    data?: Record<string, unknown>;
    /**
     * 设置请求的头部。
     */
    header?: Record<string, string>;
    /**
     * 协议
     */
    protocols?: string[];
  }): void;
  /**
   * 连接 Wi-Fi
   * @see https://opendocs.alipay.com/mini/api/connectwifi
   */
  export function connectWifi(object?: {
    /**
     * Wi-Fi 设备 SSID
     */
    SSID?: string;
    /**
     * Wi-Fi 设备 BSSID
     */
    BSSID?: string;
    /**
     * 手动连接
     */
    maunal?: boolean;
    /**
     * Wi-Fi 是 WEP Wi-Fi 还是 WPA or WPA2 personal Wi-Fi
     * @default false
     */
    isWEP?: boolean;
    /**
     * Wi-Fi 设备密码
     */
    password?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 是否成功
       */
      success: true;
      /**
       * 错误码
       */
      error: string;
      /**
       * 错误信息
       */
      errorMessage: string;
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
            /**
             * 错误码
             */
            error: string;
            /**
             * 错误信息
             */
            errorMessage: string;
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
    /**
     * 错误码
     */
    error: string;
    /**
     * 错误信息
     */
    errorMessage: string;
  }>;
  /**
   * 创建动画实例
   * @see https://opendocs.alipay.com/mini/api/ui-animation
   */
  export function createAnimation(param: IMyCreateAnimationParam): Animation;
  /**
   * @deprecated 请使用 [Canvas](Canvas) 标准接口
   * 创建并返回 <canvas> 组件上下文
   * @see https://opendocs.alipay.com/mini/api/ui-canvas
   */
  export function createCanvasContext(canvasId: string): CanvasContext;
  /**
   * 创建并返回内部音频上下文
   * @see https://opendocs.alipay.com/mini/00bg4q
   */
  export function createInnerAudioContext(): InnerAudioContext;
  /**
   * 创建并返回 [IntersectionObserver](miniapi) 对象
   * @see https://opendocs.alipay.com/mini/api/intersectionobserver
   */
  export function createIntersectionObserver(
    options?: ITypeIntersectionObserverOption
  ): IntersectionObserver;
  /**
   * 创建并返回 <lottie> 组件上下文
   * @see https://opendocs.alipay.com/mini/api/createlottiecontext
   */
  export function createLottieContext(lottieId: string): LottieContext;
  /**
   * 创建并返回 <map> 组件上下文
   * @description 创建并返回 [map](minielement) 组件上下文 [MapContext]() 对象，也可以使用 [my.createSelectorQuery]() 获取
   * @see https://opendocs.alipay.com/mini/api/ui-map
   */
  export function createMapContext(id: string): MapContext;
  /**
   * 创建离屏 Canvas 实例
   * @see https://opendocs.alipay.com/mini/api/021zn0
   */
  export function createOffscreenCanvas(
    width?: number,
    height?: number
  ): OffScreenCanvas;
  /**
   * 创建并返回激励广告上下文
   */
  export function createRewardedAd(adUnitId: string): RewardedAd;
  /**
   * 创建视图信息查询实例
   * @description 在 `自定义组件` 或包含 `自定义组件` 页面中，希望仅查询自身模板（不跨组件）的视图信息，应使用 [this.createSelectorQuery()](Component.createSelectorQuery) 来代替
   * @see https://opendocs.alipay.com/mini/api/selector-query
   */
  export function createSelectorQuery(
    option?: IMyCreateSelectorQueryOption
  ): SelectorQuery;
  /**
   * 创建并返回 <video> 组件上下文
   * @see https://opendocs.alipay.com/mini/api/media/video/my.createvideocontext
   */
  export function createVideoContext(id: string): VideoContext;
  /**
   * 创建并返回 <web-view> 组件上下文
   * @see https://opendocs.alipay.com/mini/api/webview-context
   */
  export function createWebViewContext(id: string): WebViewContext;
  /**
   * 创建一个 Worker 线程
   * @description
   * - 最多只能创建一个 Worker，创建下一个 Worker 前请先调用 [Worker.terminate]()
   * - 使用前需要在 app.json 配置 workers 字段，表示 Worker 代码文件路径
   * @see https://opendocs.alipay.com/mini/api/createworker
   */
  export function createWorker(scriptPath: string): Worker;
  /**
   * 选择日期
   * @see https://opendocs.alipay.com/mini/api/ui-date
   */
  export function datePicker(object?: {
    /**
     * 返回的日期格式。
     * @default "yyyy-MM-dd"
     * @example "yyyy-MM-dd"
     */
    format?:
      | 'yyyy-MM-dd'
      | 'HH:mm'
      | 'yyyy-MM'
      | 'yyyy'
      | 'HH:mm:ss'
      | 'yyyy-MM-dd HH:mm:ss'
      | 'yyyy-MM-dd HH:mm';
    /**
     * 初始选择的日期时间
     * @description 默认当前本地时间
     * @example "2016-10-10"
     */
    currentDate?: string;
    /**
     * 最小日期时间。
     * @example "2016-10-9"
     */
    startDate?: string;
    /**
     * 最大日期时间。
     * @example "2017-10-9"
     */
    endDate?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 选中的日期
       */
      date: string;
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
             * 选中的日期
             */
            date: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 选中的日期
     */
    date: string;
  }>;
  /**
   * 文件类型检查
   * @description 支持传入虚拟地址，检查文件类型
   * @see https://opendocs.alipay.com/mini/076dwu
   */
  export function detectFileType(object: {
    /**
     * 本地路径。不支持包路径和网络路径
     * @example 'https://resource/xxx', // or 'https://usr/xxx'
     */
    filePath: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 文件类型（mime）
       * @example image/jpeg
       */
      type: string;
      /**
       * 文件扩展名
       * @example .jpg
       */
      extension: string;
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
             * 文件类型（mime）
             * @example image/jpeg
             */
            type: string;
            /**
             * 文件扩展名
             * @example .jpg
             */
            extension: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 文件类型（mime）
     * @example image/jpeg
     */
    type: string;
    /**
     * 文件扩展名
     * @example .jpg
     */
    extension: string;
  }>;
  /**
   * 关闭小程序页面返回询问对话框
   * @see https://opendocs.alipay.com/mini/api/my.disableAlertBeforeUnload
   */
  export function disableAlertBeforeUnload(object?: {
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
          }
    ): void;
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
          )
    ): void;
  }): Promise<{
    /**
     * 是否成功
     */
    success: boolean;
  }>;
  /**
   * 断开与蓝牙低功耗设备的连接
   * @see https://opendocs.alipay.com/mini/api/yqrmmk
   */
  export function disconnectBLEDevice(object: {
    /**
     * 蓝牙设备 ID
     */
    deviceId: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 错误码
       */
      errorCode: string;
      /**
       * 错误信息
       */
      errorMessage: string;
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
             * 错误码
             */
            errorCode: string;
            /**
             * 错误信息
             */
            errorMessage: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 错误码
     */
    errorCode: string;
    /**
     * 错误信息
     */
    errorMessage: string;
  }>;
  /**
   * 下载文件资源到本地
   * @description 可下载任何格式的文件，不能被识别的文件将以 other 的方式存储起来
   * @see https://opendocs.alipay.com/mini/api/xr054r
   */
  export function downloadFile(object: {
    /**
     * 下载文件地址
     */
    url: string;
    /**
     * HTTP 请求 Header
     */
    header?: Record<string, string>;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 临时文件路径(本地临时文件)
       */
      apFilePath: string;
      /**
       * 临时文件路径(本地临时文件)
       */
      tempFilePath: string;
      /**
       * HTTP 响应头。
       */
      headers: Record<string, string>;
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
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * 临时文件路径(本地临时文件)
             */
            apFilePath: string;
            /**
             * 临时文件路径(本地临时文件)
             */
            tempFilePath: string;
            /**
             * HTTP 响应头。
             */
            headers: Record<string, string>;
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
          )
    ): void;
  }): Promise<{
    /**
     * 临时文件路径(本地临时文件)
     */
    apFilePath: string;
    /**
     * 临时文件路径(本地临时文件)
     */
    tempFilePath: string;
    /**
     * HTTP 响应头。
     */
    headers: Record<string, string>;
    /**
     * HTTP 响应头。
     */
    header: Record<string, string>;
  }> &
    DownloadTask;
  /**
   * 开启小程序页面返回询问对话框
   * @description
   * - 不支持在小程序首页调用
   * - 用户通过 Home 键或右上角胶囊按钮的“×”退出小程序时不会触发询问对话框
   * @see https://opendocs.alipay.com/mini/api/my.enableAlertBeforeUnload
   */
  export function enableAlertBeforeUnload(object?: {
    /**
     * 询问对话框内容
     * @default "离开此页面?"
     */
    message?: string;
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
          }
    ): void;
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
          )
    ): void;
  }): Promise<{
    /**
     * 是否成功
     */
    success: boolean;
  }>;
  /**
   * 退出当前小程序
   * @description 该 API 仅在 "用户操作"(tap) 事件响应函数中生效
   * @see https://opendocs.alipay.com/mini/api/my.exitMiniProgram
   */
  export function exitMiniProgram(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {}): void;
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
            error: 5;
            errorMessage: 'exitMiniProgram can only be invoked by user tap gesture';
          }
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
          }
    ): void;
  }): Promise<void>;
  /**
   * 离线生成二维码
   * @description 不需要网络直接由设备端生成
   * @see https://opendocs.alipay.com/mini/api/media/image/my.generateimagefromcode
   */
  export function generateImageFromCode(object: {
    /**
     * 二维码内容
     * @example "hello"
     */
    code: string;
    /**
     * 输出码的格式，当前只支持QRCODE(二维码)。
     * @example "QRCODE"
     */
    format: 'QRCODE';
    /**
     * 生成图片的宽度，单位是px
     * @example 400
     */
    width: number;
    /**
     * 纠错等级
     * @default "H"
     * @example "H"
     */
    correctLevel: 'L' | 'M' | 'Q' | 'H';
    /**
     * 返回图片的方向
     * @default 'up'
     */
    orientation:
      | 'left'
      | 'right'
      | 'up'
      | 'down'
      | 'up-mirrored'
      | 'down-mirrored'
      | 'left-mirrored'
      | 'right-mirrored';
    /**
     * 二维码颜色
     * @example "#ff0000"
     */
    codeColor: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * base64 编码的二维码图像
       */
      image: string;
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
             * base64 编码的二维码图像
             */
            image: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * base64 编码的二维码图像
     */
    image: string;
  }>;
  /**
   * 获取无障碍能力管理器
   * @description 用于管理小程序无障碍能力。
   */
  export function getAccessibilityManager(): AccessibilityManager;
  /**
   * 获取小程序及插件信息
   * @see https://opendocs.alipay.com/mini/api/my.getAccountInfoSync
   */
  export function getAccountInfoSync(): {
    /**
     * 小程序帐号信息
     */
    miniProgram: IMyGetAccountInfoSyncMiniProgram;
    /**
     * 插件帐号信息（仅在插件中调用时包含这一项）
     */
    plugin?: IMyGetAccountInfoSyncPlugin;
  };
  /**
   * 选择收货地址
   * @description 商户在寄送外卖、快递或其他场景需要用户填写地址信息时，可通过调用此 API 直接获取地址数据，无需用户手动填写
   * @see https://opendocs.alipay.com/mini/api/lymgfk
   */
  export function getAddress(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(
      data:
        | {
            /**
             * 表示用户未做选择直接返回
             */
            resultStatus: '6001';
            result: '';
          }
        | {
            /**
             * 表示用户选择了一个地址
             */
            resultStatus: '9000';
            result: IMyApGetAddressResult;
          }
    ): void;
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
            error: 4;
            errorMessage: '无权调用该接口';
          }
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | (
            | {
                /**
                 * 表示用户未做选择直接返回
                 */
                resultStatus: '6001';
                result: '';
              }
            | {
                /**
                 * 表示用户选择了一个地址
                 */
                resultStatus: '9000';
                result: IMyApGetAddressResult;
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
          )
    ): void;
  }): Promise<
    | {
        /**
         * 表示用户未做选择直接返回
         */
        resultStatus: '6001';
        result: '';
      }
    | {
        /**
         * 表示用户选择了一个地址
         */
        resultStatus: '9000';
        result: IMyApGetAddressResult;
      }
  >;
  /**
   * 获取 APP 授权设置
   * @see https://opendocs.alipay.com/mini/071a9f
   */
  export function getAppAuthorizeSetting(): {
    /**
     * 允许使用相册的开关
     */
    albumAuthorized: string;
    /**
     * 允许使用蓝牙的开关
     */
    bluetoothAuthorized: string;
    /**
     * 允许使用摄像头的开关
     */
    cameraAuthorized: string;
    /**
     * 允许使用定位的开关
     */
    locationAuthorized: string;
    /**
     * 允许使用麦克风的开关
     */
    microphoneAuthorized: string;
    /**
     * 允许通知的开关
     */
    notificationAuthorized: string;
    /**
     * 允许通知带有提醒的开关
     */
    notificationAlertAuthorized: string;
    /**
     * 允许通知带有标记的开关
     */
    notificationBadgeAuthorized: string;
    /**
     * 允许通知带有声音的开关
     */
    notificationSoundAuthorized: string;
    /**
     * 悬浮窗权限
     * @description 客户端 [10.2.53, 10.2.80] 版本返回 boolean, 10.2.80 及以上版本返回 string
     */
    overlayAuthorized: boolean | string;
    /**
     * 定位准确度。true 表示模糊定位，false 表示精确定位
     */
    locationReducedAccuracy?: boolean;
    /**
     * 允许读写日历的开关
     */
    phoneCalendarAuthorized?: string;
  };
  /**
   * 同步获取小程序基础信息接口
   * @see https://opendocs.alipay.com/mini/0717lu
   */
  export function getAppBaseInfo(): {
    /**
     * 基础库版本。
     */
    SDKVersion: string;
    /**
     * 客户端设置的语言。分别有以下值：zh-Hans（简体中文）、en（English）、zh-Hant（繁体中文（台湾））、zh-HK（繁体中文（香港））。
     */
    language: string;
    /**
     * 客户端版本号。
     */
    version: string;
  };
  /**
   * 同步获取小程序 appId
   * @see https://opendocs.alipay.com/mini/api/gazkkm
   */
  export function getAppIdSync(): {
    /**
     * 当前小程序的 AppId
     */
    appId: string;
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
   * 获取支持的音频输入源
   * @see https://opendocs.alipay.com/mini/00bg4t
   */
  export function getAvailableAudioSources(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 音频来源
       */
      audioSources: (
        | 'auto'
        | 'buildInMic'
        | 'headsetMic'
        | 'mic'
        | 'camcorder'
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
             * 音频来源
             */
            audioSources: (
              | 'auto'
              | 'buildInMic'
              | 'headsetMic'
              | 'mic'
              | 'camcorder'
            )[];
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 音频来源
     */
    audioSources: (
      | 'auto'
      | 'buildInMic'
      | 'headsetMic'
      | 'mic'
      | 'camcorder'
    )[];
  }>;
  /**
   * 获取全局唯一的背景音频管理器
   * @see https://opendocs.alipay.com/mini/00bifu
   */
  export function getBackgroundAudioManager(): BackgroundAudioManager;
  /**
   * 获取周期性更新数据
   * @see https://opendocs.alipay.com/mini/api/getBackgroundFetchData
   */
  export function getBackgroundFetchData(object: {
    /**
     * 预加载类型
     * @description 请求类型
     * @default "pre"
     */
    fetchType: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 预加载类型
       * @description 请求类型
       * @default "pre"
       */
      fetchType: string;
      /**
       * 时间戳
       * @description 客户端拿到缓存数据的时间戳
       */
      timestamp: number;
      /**
       * 预加载的数据
       * @description 当前预加载的response数据，
       */
      fetchedData: Record<string, unknown>;
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
             * 预加载类型
             * @description 请求类型
             * @default "pre"
             */
            fetchType: string;
            /**
             * 时间戳
             * @description 客户端拿到缓存数据的时间戳
             */
            timestamp: number;
            /**
             * 预加载的数据
             * @description 当前预加载的response数据，
             */
            fetchedData: Record<string, unknown>;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 预加载类型
     * @description 请求类型
     * @default "pre"
     */
    fetchType: string;
    /**
     * 时间戳
     * @description 客户端拿到缓存数据的时间戳
     */
    timestamp: number;
    /**
     * 预加载的数据
     * @description 当前预加载的response数据，
     */
    fetchedData: Record<string, unknown>;
  }>;
  /**
   * 获取设备电量和充电状态
   * @see https://opendocs.alipay.com/mini/api/nrnziy
   */
  export function getBatteryInfo(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 当前设备电量。
       */
      level: number;
      /**
       * 当前设备是否充电中。
       */
      isCharging: boolean;
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
             * 当前设备电量。
             */
            level: number;
            /**
             * 当前设备是否充电中。
             */
            isCharging: boolean;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 当前设备电量。
     */
    level: number;
    /**
     * 当前设备是否充电中。
     */
    isCharging: boolean;
  }>;
  /**
   * 同步获取设备电量和充电状态
   * @see https://opendocs.alipay.com/mini/api/vf7vn3
   */
  export function getBatteryInfoSync(): {
    /**
     * 当前设备电量。
     */
    level: number;
    /**
     * 当前设备是否充电中。
     */
    isCharging: boolean;
  };
  /**
   * 获取已经搜索到的iBeacon设备
   * @see https://opendocs.alipay.com/mini/api/yqleyc
   */
  export function getBeacons(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 搜索到的 iBeacon 设备
       */
      beacons: IGetBeaconsBeacons[];
      /**
       * errorCode=0，接口调用成功。
       */
      errCode: string;
      /**
       * 错误描述信息，成功则为 ok。
       */
      errorMsg: string;
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
             * 搜索到的 iBeacon 设备
             */
            beacons: IGetBeaconsBeacons[];
            /**
             * errorCode=0，接口调用成功。
             */
            errCode: string;
            /**
             * 错误描述信息，成功则为 ok。
             */
            errorMsg: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 搜索到的 iBeacon 设备
     */
    beacons: IGetBeaconsBeacons[];
    /**
     * errorCode=0，接口调用成功。
     */
    errCode: string;
    /**
     * 错误描述信息，成功则为 ok。
     */
    errorMsg: string;
  }>;
  /**
   * 获取蓝牙低功耗设备所有特征值  (characteristic)
   * @see https://opendocs.alipay.com/mini/api/fmg9gg
   */
  export function getBLEDeviceCharacteristics(object: {
    /**
     * 蓝牙设备 ID
     */
    deviceId: string;
    /**
     * 蓝牙特征值对应 service 的 UUID
     */
    serviceId: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 设备特征值列
       */
      characteristics: ITypeBLECharacteristic[];
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
             * 设备特征值列
             */
            characteristics: ITypeBLECharacteristic[];
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 设备特征值列
     */
    characteristics: ITypeBLECharacteristic[];
  }>;
  /**
   * 获取蓝牙低功耗设备的信号强度 (RSSI)
   * @see https://opendocs.alipay.com/mini/api/my.getbledevicerssi
   */
  export function getBLEDeviceRSSI(object: {
    /**
     * 蓝牙设备 id
     */
    deviceId: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 信号强度，单位 dBm。
       */
      RSSI: number;
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
             * 信号强度，单位 dBm。
             */
            RSSI: number;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 信号强度，单位 dBm。
     */
    RSSI: number;
  }>;
  /**
   * 获取蓝牙低功耗设备所有服务 (service)
   * @see https://opendocs.alipay.com/mini/api/uzsg75
   */
  export function getBLEDeviceServices(object: {
    /**
     * 蓝牙设备 ID
     */
    deviceId: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 已发现的设备服务列表
       */
      services: IGetBLEDeviceServicesServices[];
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
             * 已发现的设备服务列表
             */
            services: IGetBLEDeviceServicesServices[];
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 已发现的设备服务列表
     */
    services: IGetBLEDeviceServicesServices[];
  }>;
  /**
   * 获取蓝牙低功耗设备授权和开关状态
   * @see https://opendocs.alipay.com/mini/02pdp9
   */
  export function getBLEDeviceStatus(object?: {
    /**
     * 是否允许系统弹窗（仅iOS）
     * @default false
     */
    sysAlert?: boolean;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 授权状态
       * @description 除 0,2,3三种状态码之外，其他可以认为蓝牙授权状态无法确定
       */
      authStatus: EGetBLEDeviceStatusAuthStatus;
      /**
       * 蓝牙开关状态
       * @description
       * - 除 2,4,5三种状态码之外，其他可以认为蓝牙开关状态无法确定。
       * - iOS系统，当authStatus=3(蓝牙已授权）时，powerStatus状态才有效
       */
      powerStatus: EGetBLEDeviceStatusPowerStatus;
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
             * 授权状态
             * @description 除 0,2,3三种状态码之外，其他可以认为蓝牙授权状态无法确定
             */
            authStatus: EGetBLEDeviceStatusAuthStatus;
            /**
             * 蓝牙开关状态
             * @description
             * - 除 2,4,5三种状态码之外，其他可以认为蓝牙开关状态无法确定。
             * - iOS系统，当authStatus=3(蓝牙已授权）时，powerStatus状态才有效
             */
            powerStatus: EGetBLEDeviceStatusPowerStatus;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 授权状态
     * @description 除 0,2,3三种状态码之外，其他可以认为蓝牙授权状态无法确定
     */
    authStatus: EGetBLEDeviceStatusAuthStatus;
    /**
     * 蓝牙开关状态
     * @description
     * - 除 2,4,5三种状态码之外，其他可以认为蓝牙开关状态无法确定。
     * - iOS系统，当authStatus=3(蓝牙已授权）时，powerStatus状态才有效
     */
    powerStatus: EGetBLEDeviceStatusPowerStatus;
  }>;
  /**
   * 获取蓝牙低功耗设备的最大传输单元 (MTU)
   * @see https://opendocs.alipay.com/mini/api/my.getblemtu
   */
  export function getBLEMTU(object: {
    /**
     * 蓝牙设备ID
     */
    deviceId: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 最大传输单元
       */
      mtu: number;
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
             * 最大传输单元
             */
            mtu: number;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 最大传输单元
     */
    mtu: number;
  }>;
  /**
   * 获取本机蓝牙适配器状态
   * @see https://opendocs.alipay.com/mini/api/eid4o6
   */
  export function getBluetoothAdapterState(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 是否正在搜索设备。
       */
      discovering: boolean;
      /**
       * 蓝牙模块是否可用（需支持 BLE 并且蓝牙是打开状态）。
       */
      available: boolean;
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
             * 是否正在搜索设备。
             */
            discovering: boolean;
            /**
             * 蓝牙模块是否可用（需支持 BLE 并且蓝牙是打开状态）。
             */
            available: boolean;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 是否正在搜索设备。
     */
    discovering: boolean;
    /**
     * 蓝牙模块是否可用（需支持 BLE 并且蓝牙是打开状态）。
     */
    available: boolean;
  }>;
  /**
   * 获取已发现的蓝牙设备
   * @description 包括已经和本机处于连接状态的设备
   * @see https://opendocs.alipay.com/mini/api/pelizr
   */
  export function getBluetoothDevices(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 已发现的设备列表。
       */
      devices: ITypeBluetoothDevice[];
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
             * 已发现的设备列表。
             */
            devices: ITypeBluetoothDevice[];
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 已发现的设备列表。
     */
    devices: ITypeBluetoothDevice[];
  }>;
  /**
   * 获取已经配对的蓝牙设备
   * @see https://opendocs.alipay.com/mini/01zdnf
   */
  export function getBluetoothPairs(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 设备列表
       */
      devices: ITypeBluetoothDevice[];
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
             * 设备列表
             */
            devices: ITypeBluetoothDevice[];
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 设备列表
     */
    devices: ITypeBluetoothDevice[];
  }>;
  /**
   * @deprecated 已对外下线，读取权限由客户端白名单控制
   * 获取剪贴板数据
   * @see https://opendocs.alipay.com/mini/api/clipboard
   */
  export function getClipboard(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 剪贴板数据。
       */
      text: string;
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
             * 剪贴板数据。
             */
            text: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 剪贴板数据。
     */
    text: string;
  }>;
  /**
   * 获取处于已连接状态的蓝牙设备
   * @description
   * - 若小程序在之前已有搜索过某个蓝牙设备，即可直接传入之前搜索获取的 deviceId 尝试连接该设备，无需进行搜索操作。
   * - 若指定的蓝牙设备已经连接，重复连接将直接返回 success
   * @see https://opendocs.alipay.com/mini/api/ge8nue
   */
  export function getConnectedBluetoothDevices(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 已连接的设备列表。
       */
      devices: ITypeBluetoothDevice[];
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
             * 已连接的设备列表。
             */
            devices: ITypeBluetoothDevice[];
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 已连接的设备列表。
     */
    devices: ITypeBluetoothDevice[];
  }>;
  /**
   * 获取已连接的 Wi-Fi 信息
   * @see https://opendocs.alipay.com/mini/api/getconnectedwifi
   */
  export function getConnectedWifi(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 是否成功
       */
      success: true;
      /**
       * wifi 信息
       */
      wifi: IGetConnectedWifiWifi;
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
            /**
             * wifi 信息
             */
            wifi: IGetConnectedWifiWifi;
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
    /**
     * wifi 信息
     */
    wifi: IGetConnectedWifiWifi;
  }>;
  /**
   * 获得小程序本次唤起的参数
   * @description 如果当前是冷启动，则返回值与 App.onLaunch 的回调参数一致；如果当前是热启动，则返回值与 App.onShow 一致。
   * @see https://opendocs.alipay.com/mini/api/029i75
   */
  export function getEnterOptionsSync(): {
    /**
     * 启动小程序的路径
     */
    path?: string;
    /**
     * 当前小程序的 query，从启动参数的 query 字段解析而来
     */
    query?: Record<string, unknown>;
    /**
     * 来源信息
     * @description 部分版本在无 referrerInfo 的时候会返回 undefined，建议使用 options.referrerInfo && options.referrerInfo.appId 进行判断
     */
    referrerInfo?: ITypeReferrerInfo;
    /**
     * 启动小程序的 [场景值](https://opendocs.alipay.com/mini/framework/scene)
     */
    scene?: number;
    /**
     * API 类别
     */
    apiCategory?: 'default' | 'embedded';
  };
  /**
   * 获取模板小程序自定义数据字段
   * @see https://opendocs.alipay.com/mini/api/getExtConfig
   */
  export function getExtConfig(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 配置在模版小程序 `ext.json` 中的 `ext` 配置字段的值
       * @description 详见  [模板小程序参数配置](https://opendocs.alipay.com/mini/isv/creatminiapp#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)
       */
      data: Record<string, unknown>;
      /**
       * 配置在模版小程序 ext.json 中的 ext 配置字段的值
       */
      extConfig?: Record<string, unknown>;
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
             * 配置在模版小程序 `ext.json` 中的 `ext` 配置字段的值
             * @description 详见  [模板小程序参数配置](https://opendocs.alipay.com/mini/isv/creatminiapp#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)
             */
            data: Record<string, unknown>;
            /**
             * 配置在模版小程序 ext.json 中的 ext 配置字段的值
             */
            extConfig?: Record<string, unknown>;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 配置在模版小程序 `ext.json` 中的 `ext` 配置字段的值
     * @description 详见  [模板小程序参数配置](https://opendocs.alipay.com/mini/isv/creatminiapp#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)
     */
    data: Record<string, unknown>;
    /**
     * 配置在模版小程序 ext.json 中的 ext 配置字段的值
     */
    extConfig?: Record<string, unknown>;
  }>;
  /**
   * 同步获取模板小程序自定义数据字段
   * @see https://opendocs.alipay.com/mini/api/getExtConfigSync
   */
  export function getExtConfigSync(): Record<string, unknown>;
  /**
   * 获取文件信息
   * @see https://opendocs.alipay.com/mini/api/file
   */
  export function getFileInfo(object: {
    /**
     * 文件路径
     */
    filePath?: string;
    /**
     * 文件路径
     */
    apFilePath?: string;
    /**
     * 摘要算法
     * @default 'md5'
     */
    digestAlgorithm: 'md5' | 'sha1';
    /**
     * 跨小程序和 h5 的统一存储 biz
     */
    sharedBiz?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 文件大小
       */
      size: number;
      /**
       * 摘要结果
       */
      digest: string;
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
             * 文件大小
             */
            size: number;
            /**
             * 摘要结果
             */
            digest: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 文件大小
     */
    size: number;
    /**
     * 摘要结果
     */
    digest: string;
  }>;
  /**
   * 获取文件管理器实例
   * @see https://opendocs.alipay.com/mini/api/0226oc
   */
  export function getFileSystemManager(): FileSystemManager;
  /**
   * 获取地理编码管理器实例
   */
  export function getGeocoder(): Geocoder;
  /**
   * 获取图片信息
   * @see https://opendocs.alipay.com/mini/api/media/image/my.getimageinfo
   */
  export function getImageInfo(object: {
    /**
     * 图片路径，目前支持：
     * - 网络图片路径
     * - apFilePath路径
     * - 相对路径
     */
    src: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 图片宽度（单位px）
       */
      width: number;
      /**
       * 图片高度（单位px）
       */
      height: number;
      /**
       * 图片本地路径
       */
      path: string;
      /**
       * 图片尺寸
       */
      size?: number;
      /**
       * 返回图片的格式
       */
      type: number;
      /**
       * 返回图片的方向
       */
      orientation:
        | 'left'
        | 'right'
        | 'up'
        | 'down'
        | 'up-mirrored'
        | 'down-mirrored'
        | 'left-mirrored'
        | 'right-mirrored';
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
            error: 12;
            errorMessage: '路径不能为空';
          }
        | {
            error: 18;
            errorMessage: '获取图片信息失败';
          }
        | {
            error: 22;
            errorMessage: '不支持的地址后缀名';
          }
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * 图片宽度（单位px）
             */
            width: number;
            /**
             * 图片高度（单位px）
             */
            height: number;
            /**
             * 图片本地路径
             */
            path: string;
            /**
             * 图片尺寸
             */
            size?: number;
            /**
             * 返回图片的格式
             */
            type: number;
            /**
             * 返回图片的方向
             */
            orientation:
              | 'left'
              | 'right'
              | 'up'
              | 'down'
              | 'up-mirrored'
              | 'down-mirrored'
              | 'left-mirrored'
              | 'right-mirrored';
          }
        | (
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 12;
                errorMessage: '路径不能为空';
              }
            | {
                error: 18;
                errorMessage: '获取图片信息失败';
              }
            | {
                error: 22;
                errorMessage: '不支持的地址后缀名';
              }
          )
    ): void;
  }): Promise<{
    /**
     * 图片宽度（单位px）
     */
    width: number;
    /**
     * 图片高度（单位px）
     */
    height: number;
    /**
     * 图片本地路径
     */
    path: string;
    /**
     * 图片尺寸
     */
    size?: number;
    /**
     * 返回图片的格式
     */
    type: number;
    /**
     * 返回图片的方向
     */
    orientation:
      | 'left'
      | 'right'
      | 'up'
      | 'down'
      | 'up-mirrored'
      | 'down-mirrored'
      | 'left-mirrored'
      | 'right-mirrored';
  }>;
  /**
   * 获取小程序启动时的参数
   * @description 与 `App.onLaunch` 的回调参数一致
   * @see https://opendocs.alipay.com/mini/api/getLaunchOptionsSync
   */
  export function getLaunchOptionsSync(): {
    /**
     * 启动小程序的路径
     */
    path?: string;
    /**
     * 当前小程序的 query，从启动参数的 query 字段解析而来
     */
    query?: Record<string, unknown>;
    /**
     * 来源信息
     * @description 部分版本在无 referrerInfo 的时候会返回 undefined，建议使用 options.referrerInfo && options.referrerInfo.appId 进行判断
     */
    referrerInfo?: ITypeReferrerInfo;
    /**
     * 启动小程序的 [场景值](https://opendocs.alipay.com/mini/framework/scene)
     */
    scene?: number;
    /**
     * API 类别
     */
    apiCategory?: 'default' | 'embedded';
  };
  /**
   * 获取导航栏左侧按钮的布局位置信息
   * @description 坐标信息以屏幕左上角为原点
   * @see https://opendocs.alipay.com/mini/077kbe
   */
  export function getLeftButtonsBoundingClientRect(): {
    /**
     * 返回按钮图标的布局位置信息
     */
    backButtonIcon: IMyGetLeftButtonsBoundingClientRectBackButtonIcon;
    /**
     * 返回按钮点击响应区域的布局位置信息
     */
    backButtonInteractive: IMyGetLeftButtonsBoundingClientRectBackButtonIcon;
    /**
     * 首页按钮图标的布局位置信息
     */
    homeButtonIcon: IMyGetLeftButtonsBoundingClientRectBackButtonIcon;
  };
  /**
   * 获取局域网IP地址
   */
  export function getLocalIPAddress(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 本机局域网IP地址
       */
      localip: string;
      /**
       * 本机局域网子网掩码
       */
      netmask: string;
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
             * 本机局域网IP地址
             */
            localip: string;
            /**
             * 本机局域网子网掩码
             */
            netmask: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 本机局域网IP地址
     */
    localip: string;
    /**
     * 本机局域网子网掩码
     */
    netmask: string;
  }>;
  /**
   * 获取用户当前的地理位置信息
   * @description
   * - 地图相关接口使用的坐标格式为 GCJ-02（火星坐标系）
   * - 暂无境外地图数据，在中国内地（不含港澳台）以外的地区可能无法正常调用此 API
   * @see https://opendocs.alipay.com/mini/api/mkxuqd
   */
  export function getLocation(object?: {
    /**
     * 支付宝客户端经纬度定位缓存过期时间，单位为秒
     * @description 使用缓存会加快定位速度，缓存过期会重新定位
     * @default 30
     */
    cacheTimeout?: number;
    /**
     * 获取经纬度数据的类型。
     * @default 0
     */
    type?: EMyGetLocationType;
    /**
     * 水平精度
     */
    accuracy?: number;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 经度。
       */
      longitude: string;
      /**
       * 纬度。
       */
      latitude: string;
      /**
       * 精确度，单位米 (m)。
       */
      accuracy: string;
      /**
       * 水平精确度，单位为米 (m)。
       */
      horizontalAccuracy: string;
      /**
       * 国家名称
       * @description `type` > 0 才会返回该字段。
       */
      country?: string;
      /**
       * 国家 adcode
       * @description `type` > 0 才会返回该字段。
       */
      countryCode?: string;
      /**
       * 省份名称
       * @description `type` > 0 才会返回该字段。
       */
      province?: string;
      /**
       * 省份 adcode
       * @description `type` > 0 才会返回该字段。
       */
      provinceAdcode?: string;
      /**
       * 城市名称
       * @description `type` > 0 才会返回该字段。
       */
      city?: string;
      /**
       * 城市adcode
       * @description `type` > 0 才会返回该字段。
       */
      cityAdcode?: string;
      /**
       * 区县名称
       * @description `type` > 0 才会返回该字段。
       */
      district?: string;
      /**
       * 区县级别的地区代码
       * @description `type` > 0 才会返回该字段。
       */
      districtAdcode?: string;
      /**
       * 需要街道级别逆地理的才会有的字段，街道门牌信息
       * @description `type` > 2 才会返回该字段。
       */
      streetNumber?: IMyGetLocationStreetNumber;
      /**
       * 定位点附近的 POI 信息
       * @description
       * - `type` > 2 才会返回该字段。
       * - POI 指 Point of Interest，兴趣点，在地理信息系统中，一个 POI 可以是一栋房子、一个商铺、一个邮筒、一个公交站等
       */
      pois?: IMyGetLocationPois[];
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
            error: 11;
            errorMessage: '请确认定位相关权限已开启';
          }
        | {
            error: 12;
            errorMessage: '网络异常，请稍后再试';
          }
        | {
            error: 13;
            errorMessage: '定位失败，请稍后再试';
          }
        | {
            error: 14;
            errorMessage: '业务定位超时';
          }
        | {
            error: 18;
            errorMessage: '获取到的基站与 WIFI 为空，请您打开 WIFI 开关，如已打开，建议移动到有 WIFI 的区域在发起定位';
          }
        | {
            error: 2001;
            errorMessage: '用户拒绝给小程序授权';
          }
        | {
            error: 2002;
            errorMessage: '保持拒绝后再触发定位';
          }
        | {
            error: 2003;
            errorMessage: '勾选保持后再点选了拒绝';
          }
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * 经度。
             */
            longitude: string;
            /**
             * 纬度。
             */
            latitude: string;
            /**
             * 精确度，单位米 (m)。
             */
            accuracy: string;
            /**
             * 水平精确度，单位为米 (m)。
             */
            horizontalAccuracy: string;
            /**
             * 国家名称
             * @description `type` > 0 才会返回该字段。
             */
            country?: string;
            /**
             * 国家 adcode
             * @description `type` > 0 才会返回该字段。
             */
            countryCode?: string;
            /**
             * 省份名称
             * @description `type` > 0 才会返回该字段。
             */
            province?: string;
            /**
             * 省份 adcode
             * @description `type` > 0 才会返回该字段。
             */
            provinceAdcode?: string;
            /**
             * 城市名称
             * @description `type` > 0 才会返回该字段。
             */
            city?: string;
            /**
             * 城市adcode
             * @description `type` > 0 才会返回该字段。
             */
            cityAdcode?: string;
            /**
             * 区县名称
             * @description `type` > 0 才会返回该字段。
             */
            district?: string;
            /**
             * 区县级别的地区代码
             * @description `type` > 0 才会返回该字段。
             */
            districtAdcode?: string;
            /**
             * 需要街道级别逆地理的才会有的字段，街道门牌信息
             * @description `type` > 2 才会返回该字段。
             */
            streetNumber?: IMyGetLocationStreetNumber;
            /**
             * 定位点附近的 POI 信息
             * @description
             * - `type` > 2 才会返回该字段。
             * - POI 指 Point of Interest，兴趣点，在地理信息系统中，一个 POI 可以是一栋房子、一个商铺、一个邮筒、一个公交站等
             */
            pois?: IMyGetLocationPois[];
          }
        | (
            | {
                error?: number;
                errorMessage?: string;
              }
            | {
                error: 11;
                errorMessage: '请确认定位相关权限已开启';
              }
            | {
                error: 12;
                errorMessage: '网络异常，请稍后再试';
              }
            | {
                error: 13;
                errorMessage: '定位失败，请稍后再试';
              }
            | {
                error: 14;
                errorMessage: '业务定位超时';
              }
            | {
                error: 18;
                errorMessage: '获取到的基站与 WIFI 为空，请您打开 WIFI 开关，如已打开，建议移动到有 WIFI 的区域在发起定位';
              }
            | {
                error: 2001;
                errorMessage: '用户拒绝给小程序授权';
              }
            | {
                error: 2002;
                errorMessage: '保持拒绝后再触发定位';
              }
            | {
                error: 2003;
                errorMessage: '勾选保持后再点选了拒绝';
              }
          )
    ): void;
  }): Promise<{
    /**
     * 经度。
     */
    longitude: string;
    /**
     * 纬度。
     */
    latitude: string;
    /**
     * 精确度，单位米 (m)。
     */
    accuracy: string;
    /**
     * 水平精确度，单位为米 (m)。
     */
    horizontalAccuracy: string;
    /**
     * 国家名称
     * @description `type` > 0 才会返回该字段。
     */
    country?: string;
    /**
     * 国家 adcode
     * @description `type` > 0 才会返回该字段。
     */
    countryCode?: string;
    /**
     * 省份名称
     * @description `type` > 0 才会返回该字段。
     */
    province?: string;
    /**
     * 省份 adcode
     * @description `type` > 0 才会返回该字段。
     */
    provinceAdcode?: string;
    /**
     * 城市名称
     * @description `type` > 0 才会返回该字段。
     */
    city?: string;
    /**
     * 城市adcode
     * @description `type` > 0 才会返回该字段。
     */
    cityAdcode?: string;
    /**
     * 区县名称
     * @description `type` > 0 才会返回该字段。
     */
    district?: string;
    /**
     * 区县级别的地区代码
     * @description `type` > 0 才会返回该字段。
     */
    districtAdcode?: string;
    /**
     * 需要街道级别逆地理的才会有的字段，街道门牌信息
     * @description `type` > 2 才会返回该字段。
     */
    streetNumber?: IMyGetLocationStreetNumber;
    /**
     * 定位点附近的 POI 信息
     * @description
     * - `type` > 2 才会返回该字段。
     * - POI 指 Point of Interest，兴趣点，在地理信息系统中，一个 POI 可以是一栋房子、一个商铺、一个邮筒、一个公交站等
     */
    pois?: IMyGetLocationPois[];
  }>;
  /**
   * 获取地图基础信息
   * @see https://opendocs.alipay.com/mini/api/getmapinfo
   */
  export function getMapInfo(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 是否是3D地图引擎
       */
      is3d: boolean;
      /**
       * 是否支持动画
       */
      isSupportAnim: boolean;
      /**
       * SDK名称
       */
      sdkName: string;
      /**
       * SDK版本号
       */
      sdkVersion: string;
      /**
       * 是否支持海外地图
       */
      isSupportOversea: boolean;
      /**
       * 需要7.x版本样式文件
       */
      needStyleV7: boolean;
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
             * 是否是3D地图引擎
             */
            is3d: boolean;
            /**
             * 是否支持动画
             */
            isSupportAnim: boolean;
            /**
             * SDK名称
             */
            sdkName: string;
            /**
             * SDK版本号
             */
            sdkVersion: string;
            /**
             * 是否支持海外地图
             */
            isSupportOversea: boolean;
            /**
             * 需要7.x版本样式文件
             */
            needStyleV7: boolean;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 是否是3D地图引擎
     */
    is3d: boolean;
    /**
     * 是否支持动画
     */
    isSupportAnim: boolean;
    /**
     * SDK名称
     */
    sdkName: string;
    /**
     * SDK版本号
     */
    sdkVersion: string;
    /**
     * 是否支持海外地图
     */
    isSupportOversea: boolean;
    /**
     * 需要7.x版本样式文件
     */
    needStyleV7: boolean;
  }>;
  /**
   * 获取菜单胶囊按钮的布局位置信息
   * @description 坐标信息以屏幕左上角为原点
   * @see https://opendocs.alipay.com/mini/api/menu
   */
  export function getMenuButtonBoundingClientRect(): {
    /**
     * 是否成功
     */
    success: boolean;
    /**
     * 宽度，px
     * @example 79
     */
    width: number;
    /**
     * 高度，px
     * @example 30
     */
    height: number;
    /**
     * 顶部坐标
     * @example 57
     */
    top: number;
    /**
     * 右边坐标
     * @example 366
     */
    right: number;
    /**
     * 底部坐标
     * @example 87
     */
    bottom: number;
    /**
     * 左边坐标
     * @example 287
     */
    left: number;
    /**
     * 自定义按钮宽度
     * @example 30
     */
    optionMenuWidth: number;
    /**
     * 自定义按钮高度
     * @example 30
     */
    optionMenuHeight: number;
    /**
     * 自定义按钮上边界坐标
     * @example 57
     */
    optionMenuTop: number;
    /**
     * 自定义按钮下边界坐标
     * @example 87
     */
    optionMenuButtom: number;
    /**
     * 自定义按钮左边界坐标
     * @example 249
     */
    optionMenuLeft: number;
    /**
     * 自定义按钮右边界坐标
     * @example 279
     */
    optionMenuRight: number;
    /**
     * 收藏状态
     * @example Favorite | UnFavorite
     */
    optionMenuStatus: unknown;
  };
  /**
   * 获取当前网络状态
   * @description 获取后续网络状态变化可以使用 [my.onNetworkStatusChange]() 进行持续监听
   * @see https://opendocs.alipay.com/mini/api/network-status
   */
  export function getNetworkType(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 网络是否可用。
       */
      networkAvailable: boolean;
      /**
       * 网络类型
       */
      networkType: `${EGetNetworkTypeNetworkInfo}`;
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
             * 网络是否可用。
             */
            networkAvailable: boolean;
            /**
             * 网络类型
             */
            networkType: `${EGetNetworkTypeNetworkInfo}`;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 网络是否可用。
     */
    networkAvailable: boolean;
    /**
     * 网络类型
     */
    networkType: `${EGetNetworkTypeNetworkInfo}`;
  }>;
  /**
   * 获取支付宝会员的基础信息
   * @description
   * - 基础信息包含：头像图片地址、昵称、性别、国家码、省份、所在市区
   * - 如需获取支付宝会员标识 `user_id`，请调用 [my.getAuthCode]() 和 `alipay.system.oauth.token` 接口。
   * @see https://opendocs.alipay.com/mini/api/ch8chh
   */
  export function getOpenUserInfo(object?: {
    /**
     * 协议，支持插件自调用
     */
    protocols?: IMyGetOpenUserInfoProtocols;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 响应嵌套对象字符串
       */
      response: string;
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
             * 响应嵌套对象字符串
             */
            response: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 响应嵌套对象字符串
     */
    response: string;
  }>;
  /**
   * @deprecated 请使用 [my.getParentAppIdSync]() 代替
   * 在插件中获取宿主小程序的 appId
   */
  export function getParentAppId(): string;
  /**
   * 在插件中获取宿主小程序的 appId
   * @see https://opendocs.alipay.com/mini/plugin/xf7fya
   */
  export function getParentAppIdSync(): {
    /**
     * 使用该插件的小程序 appId
     */
    appId: string;
  };
  /**
   * 获取支付宝用户绑定的手机号
   * @description
   * - 需要户点击 ` <button open-type="getAuthorize"> `组件同意后，可以通过[my.getPhoneNumber]() 接口获取到支付宝服务器返回的加密数据， 才可在第三方服务端结合签名算法和AES密钥进行解密获取手机号
   * - 若用户未授权，直接调用 [my.getPhoneNumber]() 接口，则无法返回正确信息。
   * @see https://opendocs.alipay.com/mini/api/getphonenumber
   */
  export function getPhoneNumber(object?: {
    /**
     * 协议，支持插件自调用
     */
    protocols?: IMyGetPhoneNumberProtocols;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 加密的数据
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
     */
    fail?(err: { error?: number; errorMessage?: string }): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * 加密的数据
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
          }
    ): void;
  }): Promise<{
    /**
     * 加密的数据
     * @description
     * 前端需要将该报文发送到开发者服务端做验签和解密处理 [敏感信息加解密方法](https://docs.alipay.com/mini/introduce/aes)
     *
     * 解密后的字段如下：
     * - `mobile`，类型 `string`，手机号。
     */
    response: string;
  }>;
  /**
   * 在插件中获取插件自身的 Id
   * @see https://opendocs.alipay.com/mini/02v9ao
   */
  export function getPluginIdSync(): {
    /**
     * 插件自身 Id
     */
    pluginId: string;
  };
  /**
   * 获取全局唯一的录音管理器
   * @see https://opendocs.alipay.com/mini/api/getrecordermanager
   */
  export function getRecorderManager(): RecorderManager;
  /**
   * 获取用户过去三十天运动步数信息
   * @description
   * 系统将自动会检查用户是否已授权。若用户尚未授权，则会弹出授权框。用户同意授权后，可获取到返回的加密数据。 然后在服务端结合签名算法和 AES 密钥进行解密，获取运动数据
   * 目前只支持查询最近 30 天内的运动数据，若超过 30 天，则返回的步数信息为 0。
   * @see https://opendocs.alipay.com/mini/api/gxuu7v
   */
  export function getRunData(object: {
    /**
     * 要查询的步数日期（`yyyy-mm-dd`）的字符串，例如：`'2018-12-19'`。
     */
    countDate: string;
    /**
     * 协议，支持插件自调用
     */
    protocols?: IMyGetRunDataProtocols;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 查询到的指定日期的步数，该数据是经过加密的
       * @description
       * 前端需要将该报文发送到开发者服务端做验签和解密处理 [敏感信息加解密方法](https://opendocs.alipay.com/mini/introduce/aes)
       * 服务端解密后的数据格式为：`{ "count": "16880", "countDate": "2018-12-19", "code": "10000" };`
       */
      response: string;
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
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * 查询到的指定日期的步数，该数据是经过加密的
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
          )
    ): void;
  }): Promise<{
    /**
     * 查询到的指定日期的步数，该数据是经过加密的
     * @description
     * 前端需要将该报文发送到开发者服务端做验签和解密处理 [敏感信息加解密方法](https://opendocs.alipay.com/mini/introduce/aes)
     * 服务端解密后的数据格式为：`{ "count": "16880", "countDate": "2018-12-19", "code": "10000" };`
     */
    response: string;
  }>;
  /**
   * 用于获取当前小程序的运行版本
   * @see https://opendocs.alipay.com/mini/api/runscene
   */
  export function getRunScene(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 小程序当前运行的版本
       */
      envVersion: 'release' | 'develop' | 'trial' | 'gray';
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
             * 小程序当前运行的版本
             */
            envVersion: 'release' | 'develop' | 'trial' | 'gray';
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 小程序当前运行的版本
     */
    envVersion: 'release' | 'develop' | 'trial' | 'gray';
  }>;
  /**
   * 获取保存的文件信息
   * @see https://opendocs.alipay.com/mini/api/qrx6ze
   */
  export function getSavedFileInfo(object?: {
    /**
     * 文件路径
     */
    filePath?: string;
    /**
     * 文件路径
     */
    apFilePath?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 是否成功
       */
      success: true;
      /**
       * 文件大小
       */
      size: number;
      /**
       * 创建时间
       */
      createTime: number;
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
            /**
             * 文件大小
             */
            size: number;
            /**
             * 创建时间
             */
            createTime: number;
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
    /**
     * 文件大小
     */
    size: number;
    /**
     * 创建时间
     */
    createTime: number;
  }>;
  /**
   * 获取保存的所有文件信息
   * @see https://opendocs.alipay.com/mini/api/cgohg1
   */
  export function getSavedFileList(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 是否成功
       */
      success: true;
      /**
       * 文件列表
       */
      fileList: IGetSavedFileListFileList[];
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
            /**
             * 文件列表
             */
            fileList: IGetSavedFileListFileList[];
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
    /**
     * 文件列表
     */
    fileList: IGetSavedFileListFileList[];
  }>;
  /**
   * 获取屏幕亮度
   * @see https://opendocs.alipay.com/mini/api/screen-brightness
   */
  export function getScreenBrightness(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 是否成功
       */
      success: true;
      /**
       * 屏幕亮度，取值范围0-1
       */
      brightness: number;
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
            /**
             * 屏幕亮度，取值范围0-1
             */
            brightness: number;
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
    /**
     * 屏幕亮度，取值范围0-1
     */
    brightness: number;
  }>;
  /**
   * 获取当前服务器时间
   * @see https://opendocs.alipay.com/mini/api/get-server-time
   */
  export function getServerTime(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 服务器时间
       * @description 离线情况值为 -1
       */
      time: number;
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
             * 服务器时间
             * @description 离线情况值为 -1
             */
            time: number;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 服务器时间
     * @description 离线情况值为 -1
     */
    time: number;
  }>;
  /**
   * 获取用户的当前设置
   * @see https://opendocs.alipay.com/mini/api/xmk3ml
   */
  export function getSetting(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 表示各子项目上用户是否允许授权
       */
      authSetting: IGetSettingAuthSetting;
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
             * 表示各子项目上用户是否允许授权
             */
            authSetting: IGetSettingAuthSetting;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 表示各子项目上用户是否允许授权
     */
    authSetting: IGetSettingAuthSetting;
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
   * 同步获取设备设置
   * @see https://opendocs.alipay.com/mini/071crr
   */
  export function getSystemSetting(): {
    /**
     * 蓝牙的系统开关
     */
    bluetoothEnabled: boolean;
    /**
     * 地理位置的系统开关
     */
    locationEnabled: boolean;
    /**
     * Wi-Fi 的系统开关
     */
    wifiEnabled: boolean;
  };
  /**
   * 获取导航栏背景色
   * @description 设置导航栏背景色 backgroundColor 和前景色 frontColor 可以使用 [my.setNavigationBar]()
   * @see https://opendocs.alipay.com/mini/api/dplf2s
   */
  export function getTitleColor(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 返回当前导航栏背景色
       * @description ARGB 格式的十六进制颜色值，如 #323239FF。
       */
      color: string;
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
             * 返回当前导航栏背景色
             * @description ARGB 格式的十六进制颜色值，如 #323239FF。
             */
            color: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 返回当前导航栏背景色
     * @description ARGB 格式的十六进制颜色值，如 #323239FF。
     */
    color: string;
  }>;
  /**
   * 获取版本更新管理器
   * @description 用于管理小程序更新。
   * @see https://opendocs.alipay.com/mini/api/zdblqg
   */
  export function getUpdateManager(): UpdateManager;
  /**
   * 获取视频信息
   * @see https://opendocs.alipay.com/mini/076cxc
   */
  export function getVideoInfo(object: {
    /**
     * 给定的媒体流地址
     * @example https://gw.alipayobjects.com/v/LIV/afts/video/A*hcLmS6rtkjwAAAAAAAAAAAAAAVx1AA/720P?t=1XVtu6jLPP4FMnSheZr1EwAAAABnA-hjJSws
     */
    src: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 视频没有旋转角度
       * @example 0
       */
      orientation: EGetVideoInfoOrientation;
      /**
       * 视频封装格式为flv
       * @example flv
       */
      type: string;
      /**
       * 时长为30000ms
       * @example 30000
       */
      duration: number;
      /**
       * 视频大小为60000kb
       * @example 60000
       */
      size: number;
      /**
       * 视频高度为720
       * @example 720
       */
      height: number;
      /**
       * 视频宽度为1080
       * @example 1080
       */
      width: number;
      /**
       * 视频帧率为30
       * @example 30
       */
      fps: number;
      /**
       * 视频码率为2000kbps
       * @example 2000
       */
      bitrate: number;
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
             * 视频没有旋转角度
             * @example 0
             */
            orientation: EGetVideoInfoOrientation;
            /**
             * 视频封装格式为flv
             * @example flv
             */
            type: string;
            /**
             * 时长为30000ms
             * @example 30000
             */
            duration: number;
            /**
             * 视频大小为60000kb
             * @example 60000
             */
            size: number;
            /**
             * 视频高度为720
             * @example 720
             */
            height: number;
            /**
             * 视频宽度为1080
             * @example 1080
             */
            width: number;
            /**
             * 视频帧率为30
             * @example 30
             */
            fps: number;
            /**
             * 视频码率为2000kbps
             * @example 2000
             */
            bitrate: number;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 视频没有旋转角度
     * @example 0
     */
    orientation: EGetVideoInfoOrientation;
    /**
     * 视频封装格式为flv
     * @example flv
     */
    type: string;
    /**
     * 时长为30000ms
     * @example 30000
     */
    duration: number;
    /**
     * 视频大小为60000kb
     * @example 60000
     */
    size: number;
    /**
     * 视频高度为720
     * @example 720
     */
    height: number;
    /**
     * 视频宽度为1080
     * @example 1080
     */
    width: number;
    /**
     * 视频帧率为30
     * @example 30
     */
    fps: number;
    /**
     * 视频码率为2000kbps
     * @example 2000
     */
    bitrate: number;
  }>;
  /**
   * 请求获取 Wi-Fi 列表
   * @see https://opendocs.alipay.com/mini/api/getwifilist
   */
  export function getWifiList(object?: {
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
   * 同步获取窗口信息
   * @see https://opendocs.alipay.com/mini/054vop
   */
  export function getWindowInfo(): {
    /**
     * 设备像素比
     */
    pixelRatio: number;
    /**
     * 屏幕宽度
     */
    screenWidth: number;
    /**
     * 屏幕高度
     */
    screenHeight: number;
    /**
     * 窗口宽度
     */
    windowWidth: number;
    /**
     * 窗口高度
     */
    windowHeight: number;
    /**
     * 状态栏高度
     */
    statusBarHeight: number;
    /**
     * 在竖屏正方向下的安全区域
     */
    safeArea: IMyGetWindowInfoSafeArea;
    /**
     * 窗口上边缘的 y 值
     */
    screenTop?: number;
  };
  /**
   * 隐藏当前页面菜单中的添加到桌面功能
   * @see https://opendocs.alipay.com/mini/api/optionmenuitem
   */
  export function hideAddToDesktopMenu(object?: {
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
   * 隐藏所有页面的菜单中的添加到桌面功能
   * @see https://opendocs.alipay.com/mini/api/fdaplu
   */
  export function hideAllAddToDesktopMenu(object?: {
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
   * 隐藏导航栏/菜单中的返回首页功能
   * @description
   * 用户启动小程序时，若进入的页面不是小程序首页，则会在左上角出现返回首页图标。
   * 如果 app.json 中配置了 tabbar 跳转 pages/index/index 时，则左上角不会出现 返回首页 icon 图标。
   * @see https://opendocs.alipay.com/mini/api/ui-navigate
   */
  export function hideBackHome(object?: {
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
   * 隐藏键盘
   * @see https://opendocs.alipay.com/mini/api/ui-hidekeyboard
   */
  export function hideKeyboard(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: { success: boolean; reason?: unknown }): void;
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
            success: boolean;
            reason?: unknown;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    success: boolean;
    reason?: unknown;
  }>;
  /**
   * 隐藏加载提示的过渡效果
   * @description 可与 [my.showLoading]() 配合使用
   * @see https://opendocs.alipay.com/mini/api/nzf540
   */
  export function hideLoading(object?: {
    /**
     * 指定效果操作的页面
     */
    page?: unknown;
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
   * 在当前页面隐藏导航条的加载动画。
   * @see https://opendocs.alipay.com/mini/api/ncgsga
   */
  export function hideNavigationBarLoading(object?: {
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
   * 隐藏分享按钮
   * @see https://opendocs.alipay.com/mini/api/share_app
   */
  export function hideShareMenu(object?: {
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
   * 隐藏 TabBar
   * @see https://opendocs.alipay.com/mini/api/at18z8
   */
  export function hideTabBar(object?: {
    /**
     * 是否需要动画效果，默认为无动画效果。
     * @default false
     */
    animation?: boolean;
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
   * 隐藏 TabBar 某一项右上角的红点
   * @see https://opendocs.alipay.com/mini/api/mg428a
   */
  export function hideTabBarRedDot(object: {
    /**
     * 标签页的项数序号，从左边开始计数。
     */
    index: number;
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
   * 隐藏弱提示
   * @see https://opendocs.alipay.com/mini/api/iygd4e
   */
  export function hideToast(object?: {
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
   * 判断设备无障碍模式是否开启
   * @see https://opendocs.alipay.com/mini/api/device/isscreenreaderenabled
   */
  export function isScreenReaderEnabled(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 是否开启无障碍模式
       */
      screenReaderEnabled: boolean;
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
             * 是否开启无障碍模式
             */
            screenReaderEnabled: boolean;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 是否开启无障碍模式
     */
    screenReaderEnabled: boolean;
  }>;
  /**
   * 动态加载网络字体
   * @description 支付宝小程序目前只支持 woff，otf，ttf，sfnt 字体，不支持 woff2 字体
   * @see https://opendocs.alipay.com/mini/api/ggawf0
   */
  export function loadFontFace(object: {
    /**
     * 是否同时加载 NativeCanvas 字体
     * @default true
     */
    nativeCanvas?: boolean;
    /**
     * 字体名称
     */
    family: string;
    /**
     * 字体资源地址
     * @description
     * 文件地址需为下载类型
     * iOS 仅支持 HTTPS 格式文件地址。
     */
    source: string;
    /**
     * 字体描述符
     */
    desc?: IMyLoadFontFaceDesc;
    /**
     * 是否全局生效
     */
    global?: boolean;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 状态
       */
      status: 'loaded';
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
            error: 10;
            errorMessage?: string;
          }
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * 状态
             */
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
          )
    ): void;
  }): Promise<{
    /**
     * 状态
     */
    status: 'loaded';
  }>;
  /**
   * 加载动态插件
   * @see https://opendocs.alipay.com/mini/plugin/plugin-usage
   */
  export function loadPlugin(object: {
    /**
     * 需要加载的插件 id。也可以指定要加载的插件id和版本号。
     * 例如：`2019235609092837@*`，为 `*` 时则距离上次拉包超过24小时会拉取最新版本。
     */
    plugin: string;
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
   * 进行蓝牙配对
   * @see https://opendocs.alipay.com/mini/api/makebluetoothpair
   */
  export function makeBluetoothPair(object: {
    /**
     * 蓝牙设备 id。
     */
    deviceId: string;
    /**
     * pin 码。
     */
    pin: string;
    /**
     * 超时时间，单位（秒）。
     * @default 20
     */
    timeout?: number;
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
   * 拨打电话
   * @see https://opendocs.alipay.com/mini/api/make-call
   */
  export function makePhoneCall(object: {
    /**
     * 电话号码
     */
    number: string;
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
   * 显示多级联动选择菜单
   * @description 主要用于选择多级关联数据，比如省市区的信息选择。
   * @see https://opendocs.alipay.com/mini/api/multi-level-select
   */
  export function multiLevelSelect(object: {
    /**
     * 标题
     */
    title?: string;
    /**
     * 上一次选择的值
     */
    result?: IBeehiveMultilevelSelectResult[];
    /**
     * 选择数据列表。
     * 注：数据限制小于 200KB，超出请使用 path 参数
     */
    list: IBeehiveMultilevelSelectList[];
    /**
     * list过大时，建议使用资源方式设置数据源；
     * path 支持 apFilePath 或小程序内置路径
     */
    path?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 是否成功
       */
      success: true;
      /**
       * 选择的结果
       */
      result: IBeehiveMultilevelSelectResult[];
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
            /**
             * 选择的结果
             */
            result: IBeehiveMultilevelSelectResult[];
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
    /**
     * 选择的结果
     */
    result: IBeehiveMultilevelSelectResult[];
  }>;
  /**
   * 关闭当前页面，返回上一级或多级页面
   * @see https://opendocs.alipay.com/mini/api/kc5zbx
   */
  export function navigateBack(object?: {
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
  }): Promise<void>;
  /**
   * 跳转回上一个小程序
   * @description 只有当另一个小程序跳转到当前小程序时才会能调用成功。
   * @see https://opendocs.alipay.com/mini/api/open-miniprogram
   */
  export function navigateBackMiniProgram(object?: {
    /**
     * 需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据。
     */
    extraData?: Record<string, unknown>;
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
   * 从当前页面，跳转到当前应用内的某个指定页面
   * @description
   * 可使用 [my.navigateBack]() 返回到原来页面。
   * 小程序中页面栈最多十层。
   * [my.navigateTo]() 和 [my.redirectTo]() 不允许跳转到 Tab 页面；若需跳转到 Tab 页面，请使用 [my.switchTab]()
   * @see https://opendocs.alipay.com/mini/api/zwi8gx
   */
  export function navigateTo(object: {
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
     * 指定 url 为相对路径的绝对路径基准
     */
    resolvedPath?: string;
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
  }): Promise<{
    /**
     * 和被打开页面进行通信
     */
    eventChannel: EventChannel;
  }>;
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
    envVersion?: 'release' | 'develop' | 'trial';
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
   * 启用蓝牙低功耗设备特征值变化时的 notify 功能
   * @see https://opendocs.alipay.com/mini/api/pdzk44
   */
  export function notifyBLECharacteristicValueChange(object: {
    /**
     * 蓝牙设备 ID
     */
    deviceId: string;
    /**
     * 蓝牙特征值对应 service 的 UUID
     */
    serviceId: string;
    /**
     * 蓝牙特征值的 UUID
     */
    characteristicId: string;
    /**
     * notify 的 descriptor 的 UUID
     * @default 00002902-0000-10008000-00805f9b34fb
     */
    descriptorId?: string;
    /**
     * 是否启用 notify 或 indicate
     */
    state?: boolean;
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
   * 停止监听加速度数据变化的事件
   * @see https://opendocs.alipay.com/mini/api/kape7p
   */
  export function offAccelerometerChange(
    cb?: (arg: {
      /**
       * x 轴
       */
      x: number;
      /**
       * y 轴
       */
      y: number;
      /**
       * z 轴
       */
      z: number;
      /**
       * 时间戳
       */
      timestamp: number;
    }) => void
  ): void;
  /**
   * 取消监听小程序切后台事件
   * @description 请勿使用 API 监听匿名函数，否则将无法关闭监听
   * @see https://opendocs.alipay.com/mini/api/dldh0a
   */
  export function offAppHide(cb?: () => void): void;
  /**
   * 取消监听小程序切前台事件
   * @see https://opendocs.alipay.com/mini/api/tkohmw
   */
  export function offAppShow(cb?: () => void): void;
  /**
   * 取消监听音频因为系统占用而被中断的开始事件
   * @see https://opendocs.alipay.com/mini/00jim9
   */
  export function offAudioInterruptionBegin(cb?: () => void): void;
  /**
   * 取消监听音频被中断的结束事件
   * @see https://opendocs.alipay.com/mini/00jfja
   */
  export function offAudioInterruptionEnd(cb?: () => void): void;
  /**
   * 用于取消监听 iBeacon 服务的状态变化
   * @see https://opendocs.alipay.com/mini/api/offbeaconservicechange
   */
  export function offBeaconServiceChange(
    cb?: (arg: {
      /**
       * 服务目前是否可用
       */
      available: boolean;
      /**
       * 目前是否处于搜索状态
       */
      discovering: boolean;
    }) => void
  ): void;
  /**
   * 取消监听 iBeacon 设备更新的事件
   * @see https://opendocs.alipay.com/mini/api/offbeaconupdate
   */
  export function offBeaconUpdate(
    cb?: (arg: {
      /**
       * 当前搜寻到的所有 iBeacon 设备列表
       */
      beacons: IBeaconUpdateBeacons[];
    }) => void
  ): void;
  /**
   * 取消监听蓝牙低功耗设备的特征值变化的事件
   * @see https://opendocs.alipay.com/mini/api/dlxobk
   */
  export function offBLECharacteristicValueChange(
    cb?: (arg: {
      /**
       * 蓝牙设备 ID
       */
      deviceId: string;
      /**
       * 蓝牙特征值对应 service 的 UUID
       */
      serviceId: string;
      /**
       * 设备特征值
       */
      characteristicId: string;
      /**
       * 值
       */
      value: string;
    }) => void
  ): void;
  /**
   * 取消监听蓝牙低功耗设备的连接状态变化的事件
   * @see https://opendocs.alipay.com/mini/api/xfuy7k
   */
  export function offBLEConnectionStateChanged(
    cb?: (arg: {
      /**
       * 蓝牙设备 ID
       */
      deviceId: string;
      /**
       * 连接目前的状态
       */
      connected: boolean;
    }) => void
  ): void;
  /**
   * 取消监听本机蓝牙状态变化的事件
   * @see https://opendocs.alipay.com/mini/api/ocgwfe
   */
  export function offBluetoothAdapterStateChange(
    cb?: (arg: {
      /**
       * 蓝牙模块是否可用
       */
      available: boolean | 'true' | 'false';
      /**
       * 蓝牙模块是否处于搜索状态
       */
      discovering: boolean;
    }) => void
  ): void;
  /**
   * 取消监听搜索到新蓝牙设备的事件
   * @see https://opendocs.alipay.com/mini/api/snw2t7
   */
  export function offBluetoothDeviceFound(
    cb?: (arg: {
      /**
       * 新搜索到的设备列表
       */
      devices: ITypeBluetoothDevice[];
    }) => void
  ): void;
  /**
   * 停止监听罗盘数据
   * @see https://opendocs.alipay.com/mini/api/xf671t
   */
  export function offCompassChange(
    cb?: (arg: {
      /**
       * 面对的方向与正北方向的度数，值的范围为 `[0, 360)`
       */
      direction: number;
      /**
       * 时间戳
       */
      timestamp: number;
    }) => void
  ): void;
  /**
   * 取消监听小程序自定义组件错误事件
   * @see https://opendocs.alipay.com/mini/api/offcomponent
   */
  export function offComponentError(
    cb?: (error: Error, method: string, componentInstance: any) => void
  ): void;
  /**
   * 停止监听设备方向变化事件
   * @see https://opendocs.alipay.com/mini/api/my.offdevicemotionchange
   */
  export function offDeviceMotionChange(
    cb?: (arg: {
      /**
       * 当手机坐标 X/Y 和 地球 X/Y 重合时，绕着 Z 轴转动的夹角为 `alpha`。
       * - 值的范围为 `[0, 2*PI)`。
       * - 逆时针转动为正。
       */
      alpha: number;
      /**
       * 当手机坐标 Y/Z 和地球 Y/Z 重合时，绕着 X 轴转动的夹角为 `beta`。
       * - 值的范围为 `[-1*PI, PI)`。
       * - 顶部朝着地球表面转动为正，也有可能朝着用户为正。
       */
      beta: number;
      /**
       * 当手机 X/Z 和地球 X/Z 重合时，绕着 Y 轴转动的夹角为 `gamma`。
       * - 值的范围为 `[-1*PI/2, PI/2)`。
       * - 右边朝着地球表面转动为正。
       */
      gamma: number;
    }) => void
  ): void;
  /**
   * 取消监听小程序错误事件
   * @see https://opendocs.alipay.com/mini/00njqm
   */
  export function offError(cb?: (message: string, stack: string) => void): void;
  /**
   * 取消监听在获取到 Wi-Fi 列表数据时的事件
   * @see https://opendocs.alipay.com/mini/api/offgetwifilist
   */
  export function offGetWifiList(
    cb?: (arg: {
      /**
       * Wifi 列表数据
       */
      wifiList: IGetWifiListWifiList[];
    }) => void
  ): void;
  /**
   * 停止监听陀螺仪数据
   * @see https://opendocs.alipay.com/mini/api/cpt55i
   */
  export function offGyroscopeChange(
    cb?: (arg: {
      /**
       * x 轴方向角速度
       */
      x: number;
      /**
       * y 轴方向角速度
       */
      y: number;
      /**
       * z 轴方向角速度
       */
      z: number;
      /**
       * 时间戳
       */
      timestamp: number;
    }) => void
  ): void;
  /**
   * 取消监听地理位置定位完成事件
   * @description 只针对 `chooseCity` 中属性 `setLocatedCity` 为 `true` 的情况
   * @see https://opendocs.alipay.com/mini/api/offLocatedComplete
   */
  export function offLocatedComplete(
    cb?: (arg: {
      /**
       * 当前定位城市经度
       */
      longitude: number;
      /**
       * 当前定位城市纬度
       */
      latitude: number;
      /**
       * 当前定位城市 id
       */
      locatedCityId: string;
    }) => void
  ): void;
  /**
   * 停止监听内存不足的告警事件
   * @see https://opendocs.alipay.com/mini/api/hszexr
   */
  export function offMemoryWarning(
    cb?: (arg: {
      /**
       * 系统内存的告警等级
       * @description 仅 Android 返回，iOS 不返回，需要兼容判断
       */
      level?: EMemoryWarningLevel;
    }) => void
  ): void;
  /**
   * 取消监听网络状态变化事件
   * @see https://opendocs.alipay.com/mini/api/gxpg1w
   */
  export function offNetworkStatusChange(
    cb?: (arg: {
      /**
       * 网络是否可用
       */
      isConnected: boolean;
      /**
       * 网络类型值
       */
      networkType:
        | 'UNKNOWN'
        | 'NOTREACHABLE'
        | 'WIFI'
        | '3G'
        | '2G'
        | '4G'
        | 'WWAN';
    }) => void
  ): void;
  /**
   * 取消监听小程序要打开的页面不存在的事件
   * @see https://opendocs.alipay.com/mini/01zarw
   */
  export function offPageNotFound(
    cb?: (param: {
      /**
       * 不存在页面的路径 (代码包路径)。
       */
      path: string;
      /**
       * 打开不存在页面的 query 参数。
       */
      query: Record<string, any>;
      /**
       * 是否本次启动的首个页面（例如从分享等入口进来，首个页面是开发者配置的分享页面）。
       */
      isEntryPage: boolean;
    }) => void
  ): void;
  /**
   * 取消监听 WebSocket 关闭事件
   * @see https://opendocs.alipay.com/mini/api/qc4q3t
   */
  export function offSocketClose(
    cb?: (arg: {
      /**
       * 关闭的原因
       */
      reason: string;
    }) => void
  ): void;
  /**
   * 取消监听 WebSocket 错误事件
   * @see https://opendocs.alipay.com/mini/api/kk7vv7
   */
  export function offSocketError(
    cb?: (arg: {
      /**
       * 错误描述
       */
      errorMessage: string;
      /**
       * 错误码
       */
      error: number;
    }) => void
  ): void;
  /**
   * 取消监听 WebSocket 接受到服务器的消息事件
   * @see https://opendocs.alipay.com/mini/api/roziyq
   */
  export function offSocketMessage(
    cb?: (arg: {
      /**
       * 服务器返回的消息：普通的文本 string 或者经 base64 编码后的 string
       */
      data: string | ArrayBuffer;
      /**
       * 如果此字段值为 true，data 字段表示接收到的经过了 base64 编码后的 string，否则 data 字段表示接收到的普通 string 文本
       */
      isBuffer: boolean;
    }) => void
  ): void;
  /**
   * 取消监听 WebSocket 连接打开事件
   * @see https://opendocs.alipay.com/mini/api/dva3t8
   */
  export function offSocketOpen(cb?: () => void): void;
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
   * 取消监听用户发起的主动截屏事件
   * @see https://opendocs.alipay.com/mini/api/umdxbg
   */
  export function offUserCaptureScreen(cb?: () => void): void;
  /**
   * 取消监听连接上 Wi-Fi 的事件
   * @see https://opendocs.alipay.com/mini/api/offwificonnected
   */
  export function offWifiConnected(
    cb?: (arg: {
      /**
       * Wifi 信息
       */
      wifi: IWifiConnectedWifi;
    }) => void
  ): void;
  /**
   * 监听加速度数据变化的事件
   * @description 回调间隔为 500ms，接口调用后会自动开始监听，可使用 [my.offAccelerometerChange]() 停止监听。
   * @see https://opendocs.alipay.com/mini/api/accelerometer
   */
  export function onAccelerometerChange(
    cb: (arg: {
      /**
       * x 轴
       */
      x: number;
      /**
       * y 轴
       */
      y: number;
      /**
       * z 轴
       */
      z: number;
      /**
       * 时间戳
       */
      timestamp: number;
    }) => void
  ): void;
  /**
   * 监听小程序切后台事件
   * @description
   * 该事件与框架 app.js 注册小程序 时 onHide 参数的回调时机一致。对应的取消监听 API 请参见 [my.offAppHide]()。
   * 请勿使用 API 监听匿名函数，否则将无法关闭监听
   * @see https://opendocs.alipay.com/mini/api/tv6qvi
   */
  export function onAppHide(cb: () => void): void;
  /**
   * 监听小程序切前台事件
   * @description
   * 该事件与框架 app.js 注册小程序 时 onShow 参数的回调时机一致。对应的取消监听 API 请参见 [my.offAppShow]()。
   * 请勿使用 API 监听匿名函数，否则将无法关闭监听。
   * @see https://opendocs.alipay.com/mini/api/nn7do1
   */
  export function onAppShow(
    cb: (param: {
      /**
       * 启动小程序的路径
       */
      path?: string;
      /**
       * 当前小程序的 query，从启动参数的 query 字段解析而来
       */
      query?: Record<string, unknown>;
      /**
       * 来源信息
       * @description 部分版本在无 referrerInfo 的时候会返回 undefined，建议使用 options.referrerInfo && options.referrerInfo.appId 进行判断
       */
      referrerInfo?: ITypeReferrerInfo;
      /**
       * 启动小程序的 [场景值](https://opendocs.alipay.com/mini/framework/scene)
       */
      scene?: number;
      /**
       * API 类别
       */
      apiCategory?: 'default' | 'embedded';
    }) => void
  ): void;
  /**
   * 监听音频因为系统占用而被中断的开始事件
   * @see https://opendocs.alipay.com/mini/00jim8
   */
  export function onAudioInterruptionBegin(cb: () => void): void;
  /**
   * 监听音频被中断的结束事件
   * @description 在收到 [my.onAudioInterruptionBegin]() 事件之后，小程序内的所有音频会暂停，收到此事件之后可再次播放成功
   * @see https://opendocs.alipay.com/mini/00jgot
   */
  export function onAudioInterruptionEnd(cb: () => void): void;
  /**
   * 监听 iBeacon 服务的状态变化
   * @see https://opendocs.alipay.com/mini/api/rq1dl7
   */
  export function onBeaconServiceChange(
    cb: (arg: {
      /**
       * 服务目前是否可用
       */
      available: boolean;
      /**
       * 目前是否处于搜索状态
       */
      discovering: boolean;
    }) => void
  ): void;
  /**
   * 监听 iBeacon 设备的更新事件
   * @see https://opendocs.alipay.com/mini/api/kvdg9y
   */
  export function onBeaconUpdate(
    cb: (arg: {
      /**
       * 当前搜寻到的所有 iBeacon 设备列表
       */
      beacons: IBeaconUpdateBeacons[];
    }) => void
  ): void;
  /**
   * 监听蓝牙低功耗设备的特征值变化的事件
   * @see https://opendocs.alipay.com/mini/api/cdu501
   */
  export function onBLECharacteristicValueChange(
    cb: (arg: {
      /**
       * 蓝牙设备 ID
       */
      deviceId: string;
      /**
       * 蓝牙特征值对应 service 的 UUID
       */
      serviceId: string;
      /**
       * 设备特征值
       */
      characteristicId: string;
      /**
       * 值
       */
      value: string;
    }) => void
  ): void;
  /**
   * 监听蓝牙低功耗设备的连接状态变化的事件
   * @see https://opendocs.alipay.com/mini/api/utgyiu
   */
  export function onBLEConnectionStateChanged(
    cb: (arg: {
      /**
       * 蓝牙设备 ID
       */
      deviceId: string;
      /**
       * 连接目前的状态
       */
      connected: boolean;
    }) => void
  ): void;
  /**
   * 监听本机蓝牙状态变化的事件
   * @see https://opendocs.alipay.com/mini/api/eegfbk
   */
  export function onBluetoothAdapterStateChange(
    cb: (arg: {
      /**
       * 蓝牙模块是否可用
       */
      available: boolean | 'true' | 'false';
      /**
       * 蓝牙模块是否处于搜索状态
       */
      discovering: boolean;
    }) => void
  ): void;
  /**
   * 搜索到新的蓝牙设备时触发此事件
   * @see https://opendocs.alipay.com/mini/api/mhzls9
   */
  export function onBluetoothDeviceFound(
    cb: (arg: {
      /**
       * 新搜索到的设备列表
       */
      devices: ITypeBluetoothDevice[];
    }) => void
  ): void;
  /**
   * 监听罗盘数据变化事件
   * @description
   * - 回调间隔为500ms
   * - 可使用 [my.offCompassChange]() 停止监听。
   * @see https://opendocs.alipay.com/mini/api/compass
   */
  export function onCompassChange(
    cb: (arg: {
      /**
       * 面对的方向与正北方向的度数，值的范围为 `[0, 360)`
       */
      direction: number;
      /**
       * 时间戳
       */
      timestamp: number;
    }) => void
  ): void;
  /**
   * 监听小程序自定义组件错误事件
   * @description 当自定义组件内部 JS 代码运行抛出错误时，除了会执行 [my.onError]() 回调外，同时会触发 [my.onComponentError]() 回调。
   * @see https://opendocs.alipay.com/mini/api/oncomponent
   */
  export function onComponentError(
    cb: (error: Error, method: string, componentInstance: any) => void
  ): void;
  /**
   * 监听设备方向变化
   * @description 目前回调频率为 200ms/次 左右
   * @see https://opendocs.alipay.com/mini/api/my.ondevicemotionchange
   */
  export function onDeviceMotionChange(
    cb: (arg: {
      /**
       * 当手机坐标 X/Y 和 地球 X/Y 重合时，绕着 Z 轴转动的夹角为 `alpha`。
       * - 值的范围为 `[0, 2*PI)`。
       * - 逆时针转动为正。
       */
      alpha: number;
      /**
       * 当手机坐标 Y/Z 和地球 Y/Z 重合时，绕着 X 轴转动的夹角为 `beta`。
       * - 值的范围为 `[-1*PI, PI)`。
       * - 顶部朝着地球表面转动为正，也有可能朝着用户为正。
       */
      beta: number;
      /**
       * 当手机 X/Z 和地球 X/Z 重合时，绕着 Y 轴转动的夹角为 `gamma`。
       * - 值的范围为 `[-1*PI/2, PI/2)`。
       * - 右边朝着地球表面转动为正。
       */
      gamma: number;
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
   * 监听在获取到 Wi-Fi 列表数据时的事件
   * @see https://opendocs.alipay.com/mini/api/ongetwifilist
   */
  export function onGetWifiList(
    cb: (arg: {
      /**
       * Wifi 列表数据
       */
      wifiList: IGetWifiListWifiList[];
    }) => void
  ): void;
  /**
   * 监听陀螺仪数据变化事件
   * @description
   * - 回调间隔为500ms
   * - 可使用 [my.offGyroscopeChange]() 停止监听。
   * @see https://opendocs.alipay.com/mini/api/gyroscope
   */
  export function onGyroscopeChange(
    cb: (arg: {
      /**
       * x 轴方向角速度
       */
      x: number;
      /**
       * y 轴方向角速度
       */
      y: number;
      /**
       * z 轴方向角速度
       */
      z: number;
      /**
       * 时间戳
       */
      timestamp: number;
    }) => void
  ): void;
  /**
   * 监听该页面地理位置定位完成的事件
   * @description 只针对 `chooseCity` 中属性 `setLocatedCity` 为 `true` 的情况。
   * @see https://opendocs.alipay.com/mini/api/krzyo1
   */
  export function onLocatedComplete(
    cb: (arg: {
      /**
       * 当前定位城市经度
       */
      longitude: number;
      /**
       * 当前定位城市纬度
       */
      latitude: number;
      /**
       * 当前定位城市 id
       */
      locatedCityId: string;
    }) => void
  ): void;
  /**
   * 开始监听内存不足的告警事件
   * @see https://opendocs.alipay.com/mini/api/rb9o8p
   */
  export function onMemoryWarning(
    cb: (arg: {
      /**
       * 系统内存的告警等级
       * @description 仅 Android 返回，iOS 不返回，需要兼容判断
       */
      level?: EMemoryWarningLevel;
    }) => void
  ): void;
  /**
   * 开始监听网络状态变化事件
   * @see https://opendocs.alipay.com/mini/api/ympi0l
   */
  export function onNetworkStatusChange(
    cb: (arg: {
      /**
       * 网络是否可用
       */
      isConnected: boolean;
      /**
       * 网络类型值
       */
      networkType:
        | 'UNKNOWN'
        | 'NOTREACHABLE'
        | 'WIFI'
        | '3G'
        | '2G'
        | '4G'
        | 'WWAN';
    }) => void
  ): void;
  /**
   * 监听小程序要打开的页面不存在事件
   * @description
   * 该事件与 `App.onPageNotFound` 的回调时机一致。
   * 开发者可以在回调中进行页面重定向，但必须在回调中同步处理，异步处理（例如 setTimeout 异步执行）无效。
   * 若开发者没有调用 my.onPageNotFound 绑定监听，也没有声明 App.onPageNotFound，当跳转页面不存在时，将推入页面不存在提示页面。
   * 如果回调中又重定向到另一个不存在的页面，将推入页面不存在提示页面，并且不再第二次回调。
   * 仅响应小程序冷启动或热启动时的页面找不到事件，不支持处理 路由 API 的失败场景。
   * @see https://opendocs.alipay.com/mini/01zdng
   */
  export function onPageNotFound(
    cb: (param: {
      /**
       * 不存在页面的路径 (代码包路径)。
       */
      path: string;
      /**
       * 打开不存在页面的 query 参数。
       */
      query: Record<string, any>;
      /**
       * 是否本次启动的首个页面
       * @description 例如从分享等入口进来，首个页面是开发者配置的分享页面
       */
      isEntryPage: boolean;
    }) => void
  ): void;
  /**
   * 监听 WebSocket 关闭事件
   * @see https://opendocs.alipay.com/mini/api/foqk6g
   */
  export function onSocketClose(
    cb: (arg: {
      /**
       * 关闭的原因
       */
      reason: string;
    }) => void
  ): void;
  /**
   * 监听 WebSocket 错误事件
   * @see https://opendocs.alipay.com/mini/api/giu3c2
   */
  export function onSocketError(
    cb: (arg: {
      /**
       * 错误描述
       */
      errorMessage: string;
      /**
       * 错误码
       */
      error: number;
    }) => void
  ): void;
  /**
   * 监听 WebSocket 接受到服务器的消息事件
   * @see https://opendocs.alipay.com/mini/api/gecnap
   */
  export function onSocketMessage(
    cb: (arg: {
      /**
       * 服务器返回的消息：普通的文本 string 或者经 base64 编码后的 string
       */
      data: string | ArrayBuffer;
      /**
       * 如果此字段值为 true，data 字段表示接收到的经过了 base64 编码后的 string，否则 data 字段表示接收到的普通 string 文本
       */
      isBuffer: boolean;
    }) => void
  ): void;
  /**
   * 监听 WebSocket 连接打开事件
   * @see https://opendocs.alipay.com/mini/api/itm5og
   */
  export function onSocketOpen(cb: () => void): void;
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
   * 监听用户发起的主动截屏事件
   * @description
   * - 可以接收到系统以及第三方截屏工具的截屏事件通知。
   * - 可使用 [my.offUserCaptureScreen]() 取消监听。
   * @see https://opendocs.alipay.com/mini/api/user-capture-screen
   */
  export function onUserCaptureScreen(cb: () => void): void;
  /**
   * 监听连接上 Wi-Fi 的事件
   * @see https://opendocs.alipay.com/mini/api/onwificonnected
   */
  export function onWifiConnected(
    cb: (arg: {
      /**
       * Wifi 信息
       */
      wifi: IWifiConnectedWifi;
    }) => void
  ): void;
  /**
   * 初始化小程序蓝牙模块
   * @see https://opendocs.alipay.com/mini/api/kunuy4
   */
  export function openBluetoothAdapter(object?: {
    /**
     * 表示是否在离开当前页面时自动断开蓝牙。
     * @default true
     */
    autoClose?: boolean;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 是否支持 BLE
       */
      isSupportBLE: boolean;
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
             * 是否支持 BLE
             */
            isSupportBLE: boolean;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 是否支持 BLE
     */
    isSupportBLE: boolean;
  }>;
  /**
   * 在新页面打开文件预览
   * @description 暂时只支持预览 PDF 格式文件
   * @see https://opendocs.alipay.com/mini/api/mwpprc
   */
  export function openDocument(object: {
    /**
     * 文件路径，可通过 `downloadFile` 获得。
     */
    filePath: string;
    /**
     * 文件类型。
     * 有效值：
     * - `pdf`：PDF 格式。
     */
    fileType?: string;
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
   * 跳转到当前用户的某张券的（口碑）详情页
   * @see https://opendocs.alipay.com/mini/api/tfa5s0
   */
  export function openKBVoucherDetail(object: {
    /**
     * 卡实例 ID，调用 [券发放接口](https://docs.open.alipay.com/api_24/alipay.pass.instance.add) 可以获取该参数。
     */
    passId: string;
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
   * 跳转到当前用户的某张券的（口碑）详情页
   * @see https://opendocs.alipay.com/mini/api/tfa5s0
   */
  export function openKBVoucherDetail(object: {
    /**
     * 商户编号。
     */
    partnerId: string;
    /**
     * 序列号。
     */
    serialNumber: string;
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
   * 使用支付宝内置地图查看位置
   * @description
   * - 暂无境外地图数据，在中国内地（不含港澳台）以外的地区可能无法正常调用
   * - 仅支持高德地图 style 与火星坐标系
   * @see https://opendocs.alipay.com/mini/api/as9kin
   */
  export function openLocation(object: {
    /**
     * 经度。
     */
    longitude: string;
    /**
     * 纬度。
     */
    latitude: string;
    /**
     * 位置名称。
     */
    name: string;
    /**
     * 地址的详细说明。
     */
    address: string;
    /**
     * 缩放比例，范围 3~19。
     * @default 15
     */
    scale?: number;
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
   * 跳转到当前用户在指定商户的已领取票列表界面
   * @see https://opendocs.alipay.com/mini/api/yee76y
   */
  export function openMerchantTicketList(object: {
    /**
     * 商户编号。
     */
    partnerId: string;
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
   * 跳转到当前用户在指定商户的已领取券列表界面
   * @see https://opendocs.alipay.com/mini/api/sgvgu6
   */
  export function openMerchantVoucherList(object: {
    /**
     * 商户编号。
     */
    partnerId: string;
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
   * 跳转到小程序设置界面
   * @description 返回用户权限设置的结果，设置界面只会出现小程序已经向用户请求过的权限
   * @see https://opendocs.alipay.com/mini/api/qflu8f
   */
  export function openSetting(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 用户授权结果
       * @description 其中 key 为 scope 值，value 为 Bool 值，表示用户是否允许授权，可查看 scopes 列表
       */
      authSetting: IOpenSettingAuthSetting;
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
             * 用户授权结果
             * @description 其中 key 为 scope 值，value 为 Bool 值，表示用户是否允许授权，可查看 scopes 列表
             */
            authSetting: IOpenSettingAuthSetting;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 用户授权结果
     * @description 其中 key 为 scope 值，value 为 Bool 值，表示用户是否允许授权，可查看 scopes 列表
     */
    authSetting: IOpenSettingAuthSetting;
  }>;
  /**
   * 跳转到当前用户领取某张票的详情界面
   * @see https://opendocs.alipay.com/mini/api/ry7ftz
   */
  export function openTicketDetail(object: {
    /**
     * 卡实例 ID，调用 [券发放接口](https://docs.open.alipay.com/api_24/alipay.pass.instance.add) 可以获取该参数。
     */
    passId: string;
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
   * 跳转到当前用户领取某张票的详情界面
   * @see https://opendocs.alipay.com/mini/api/ry7ftz
   */
  export function openTicketDetail(object: {
    /**
     * 商户编号。
     */
    partnerId: string;
    /**
     * 序列号。
     */
    serialNumber: string;
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
   * 跳转到支付宝票列表界面
   * @see https://opendocs.alipay.com/mini/api/ezt6u3
   */
  export function openTicketList(object?: {
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
   * 跳转到当前用户领取某张券的详情页（非口碑券）
   * @see https://opendocs.alipay.com/mini/api/ga4obi
   */
  export function openVoucherDetail(object: {
    /**
     * 卡实例 ID，调用 [券发放接口](https://docs.open.alipay.com/api_24/alipay.pass.instance.add) 可以获取该参数。
     */
    passId: string;
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
   * 跳转到当前用户领取某张券的详情页（非口碑券）
   * @see https://opendocs.alipay.com/mini/api/ga4obi
   */
  export function openVoucherDetail(object: {
    /**
     * 商户编号。
     */
    partnerId: string;
    /**
     * 序列号。
     */
    serialNumber: string;
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
   * 跳转到支付宝券列表界面
   * @see https://opendocs.alipay.com/mini/api/vq3mgn
   */
  export function openVoucherList(object?: {
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
   * 显示下拉列表选择器菜单
   * @description 一般用于 2 级数据的选择，但不支持 2 级数据之间的联动
   * @see https://opendocs.alipay.com/mini/api/options-select
   */
  export function optionsSelect(object: {
    /**
     * 头部标题信息
     */
    title?: string;
    /**
     * 选项一列表
     */
    optionsOne: string[];
    /**
     * 选项二列表
     */
    optionsTwo?: string[];
    /**
     * 选项一默认选中
     * @default 0
     */
    selectedOneIndex?: number;
    /**
     * 选项二默认选中
     * @default 0
     */
    selectedTwoIndex?: number;
    /**
     * 确定按钮文案
     * @default "确定"
     */
    positiveString?: string;
    /**
     * 取消按钮文案
     * @default "取消"
     */
    negativeString?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 选项一选择的值，若选择取消，则返回空字符串
       */
      selectedOneIndex: number;
      /**
       * 选项一选择的内容，
       * 若选择取消，则返回空字符串
       */
      selectedTwoIndex?: number;
      /**
       * 选项二选择的值，
       * 若选择取消，则返回空字符串
       */
      selectedOneOption: string;
      /**
       * 选项二选择的内容，若选择取消，则返回空字符串
       */
      selectedTwoOption?: string;
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
             * 选项一选择的值，若选择取消，则返回空字符串
             */
            selectedOneIndex: number;
            /**
             * 选项一选择的内容，
             * 若选择取消，则返回空字符串
             */
            selectedTwoIndex?: number;
            /**
             * 选项二选择的值，
             * 若选择取消，则返回空字符串
             */
            selectedOneOption: string;
            /**
             * 选项二选择的内容，若选择取消，则返回空字符串
             */
            selectedTwoOption?: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 选项一选择的值，若选择取消，则返回空字符串
     */
    selectedOneIndex: number;
    /**
     * 选项一选择的内容，
     * 若选择取消，则返回空字符串
     */
    selectedTwoIndex?: number;
    /**
     * 选项二选择的值，
     * 若选择取消，则返回空字符串
     */
    selectedOneOption: string;
    /**
     * 选项二选择的内容，若选择取消，则返回空字符串
     */
    selectedTwoOption?: string;
  }>;
  /**
   * 滚动到页面的目标位置
   * @see https://opendocs.alipay.com/mini/api/scroll
   */
  export function pageScrollTo(object?: {
    /**
     * 滚动到页面的目标位置，单位 px
     * @description scrollTop 的优先级比 selector 高
     */
    scrollTop?: number;
    /**
     * 滚动到选择器处于页面可见的位置
     */
    selector?: string;
    /**
     * 滚动动画的时长，单位 ms
     * @default 0
     */
    duration?: number;
    /**
     * 偏移距离，需要和 selector 参数搭配使用，可以滚动到 selector 加偏移距离的位置，单位 px
     */
    offsetTop?: number;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {}): void;
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
            error: 1;
            errorMessage: 'need scrollTop or selector';
          }
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
          }
    ): void;
  }): Promise<void>;
  /**
   * 发起签约代扣
   * @see https://opendocs.alipay.com/mini/006v6d
   */
  export function paySignCenter(object: {
    /**
     * 签约字符串。
     */
    signStr: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 处理结果（如需该字段内部参数，切记先 `JSON.parse` 一下）。
       * `JSON.parse` 后的对象结构如下：
       * - `sign`，类型 `string`，签名
       * - `sign_type`，类型 `string`，签名算法类型
       * - `alipay_user_agreement_page_sign_response`，类型 `object`
       */
      result: string;
      /**
       * 签约结果码。
       */
      resultStatus: string;
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
             * 处理结果（如需该字段内部参数，切记先 `JSON.parse` 一下）。
             * `JSON.parse` 后的对象结构如下：
             * - `sign`，类型 `string`，签名
             * - `sign_type`，类型 `string`，签名算法类型
             * - `alipay_user_agreement_page_sign_response`，类型 `object`
             */
            result: string;
            /**
             * 签约结果码。
             */
            resultStatus: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 处理结果（如需该字段内部参数，切记先 `JSON.parse` 一下）。
     * `JSON.parse` 后的对象结构如下：
     * - `sign`，类型 `string`，签名
     * - `sign_type`，类型 `string`，签名算法类型
     * - `alipay_user_agreement_page_sign_response`，类型 `object`
     */
    result: string;
    /**
     * 签约结果码。
     */
    resultStatus: string;
  }>;
  /**
   * 预览图片
   * @see https://opendocs.alipay.com/mini/api/media/image/my.previewimage
   */
  export function previewImage(object: {
    /**
     * 照片支持长按下载。
     */
    enableSavePhoto?: boolean;
    /**
     * 是否在右下角显示下载入口。
     */
    enableShowPhotoDownload?: boolean;
    /**
     * 要预览的图片 HTTP 链接列表。支持网络 url，apfilePath。
     */
    urls: string[];
    /**
     * 当前显示图片索引。
     * @default 0
     */
    current?: number;
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
   * 显示输入对话框
   * @see https://opendocs.alipay.com/mini/api/vqpy01
   */
  export function prompt(object: {
    /**
     * 提示框的标题
     */
    title: string;
    /**
     * 提示框的显示内容
     * @default "请输入内容"
     */
    message?: string;
    /**
     * 提示框的显示内容的对齐方式
     * @default "left"
     */
    align?: 'left' | 'center' | 'right';
    /**
     * 输入框
     */
    placeholder?: string;
    /**
     * "确认" 按钮颜色，HEX 格式
     */
    confirmColor?: string;
    /**
     * "取消" 按钮颜色，HEX 格式
     */
    cancelColor?: string;
    /**
     * 确认按钮文字
     * @default "确定"
     */
    okButtonText?: string;
    /**
     * 取消按钮文字
     * @default "取消"
     */
    cancelButtonText?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 点击确认按钮返回 true，点击取消按钮返回 false
       */
      ok: boolean;
      /**
       * 当点击确认按钮时，返回用户输入的内容
       */
      inputValue: string;
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
             * 点击确认按钮返回 true，点击取消按钮返回 false
             */
            ok: boolean;
            /**
             * 当点击确认按钮时，返回用户输入的内容
             */
            inputValue: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 点击确认按钮返回 true，点击取消按钮返回 false
     */
    ok: boolean;
    /**
     * 当点击确认按钮时，返回用户输入的内容
     */
    inputValue: string;
  }>;
  /**
   * 读取蓝牙低功耗设备特征值中的数据
   * @description 调用后在 [my.onBLECharacteristicValueChange]() 事件中接收数据返回。
   * @see https://opendocs.alipay.com/mini/api/zro0ka
   */
  export function readBLECharacteristicValue(object: {
    /**
     * 蓝牙设备 ID
     */
    deviceId: string;
    /**
     * 蓝牙特征值对应 service 的 UUID
     */
    serviceId: string;
    /**
     * 蓝牙特征值的 UUID
     */
    characteristicId: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 设备特征值信息
       */
      characteristic: ITypeBLECharacteristic;
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
             * 设备特征值信息
             */
            characteristic: ITypeBLECharacteristic;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 设备特征值信息
     */
    characteristic: ITypeBLECharacteristic;
  }>;
  /**
   * 将当前页面重定向到指定页面
   * @see https://opendocs.alipay.com/mini/api/fh18ky
   */
  export function redirectTo(object: {
    /**
     * 需要跳转的目标页面路径
     * 路径后可以带参数, 目标路径必须为应用内非 tabbar 的，路径与参数之间使用 ?分隔，参数键与参数值用=相连，不同参数必须用&分隔
     */
    url: string;
    /**
     * 指定 url 为相对路径的绝对路径基准
     */
    resolvedPath?: string;
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
   * 显示多级省市区选择器
   * @description 自带省市区数据源
   * @see https://opendocs.alipay.com/mini/00nd0d
   */
  export function regionPicker(object?: {
    /**
     * 标题。
     */
    title?: string;
    /**
     * 可为每一列的顶部添加一个自定义的选项。
     */
    customItem?: string;
    /**
     * 自定义修改城市数据，支持删除、添加和更新城市信息，不会全局生效，仅单次生效
     */
    mergeOptions?: IRegionPickerMergeOptions;
    /**
     * 表示选中的省市区，默认选中每一列的第一个值。
     */
    selectedItem?: string[];
    /**
     * 指定行政区划版本号：
     *
     * ● null、空串：使用老版本（2020Q1）
     *
     * ● UPTODATE：使用最新版
     *
     * ● 2022Q2：使用2022Q2版本
     *
     * 10.3.20开始支持，接入联系百喻
     */
    adVersion?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 选择的省市区名称数组
       */
      data: string[];
      /**
       * 选择的省市区 ID 数组
       */
      code: string[];
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
             * 选择的省市区名称数组
             */
            data: string[];
            /**
             * 选择的省市区 ID 数组
             */
            code: string[];
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 选择的省市区名称数组
     */
    data: string[];
    /**
     * 选择的省市区 ID 数组
     */
    code: string[];
  }>;
  /**
   * 信任指定 SSID
   * @description 对于需要 Portal 认证的 WIFI，不会弹出 portal 认证页面
   * @see https://opendocs.alipay.com/mini/api/register
   */
  export function registerSSID(object: {
    /**
     * Wifi 设备 SSID。
     */
    SSID: string;
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
   * 关闭当前所有页面，并重新打开应用内的某个指定页面
   * @see https://opendocs.alipay.com/mini/api/hmn54z
   */
  export function reLaunch(object: {
    /**
     * 需要跳转的目标页面路径
     * @description
     * 目标路径如果是 Tab 路径后在基础库 >= 2.8.1 时可以带参数，否则不可以带参数
     * 目标路径如果是非 Tab 页，可以携带参数，路径与参数之间使用 `?` 分隔，参数键与参数值用 `=` 相连，不同参数必须用 `&` 分隔
     */
    url: string;
    /**
     * 指定 url 为相对路径的绝对路径基准
     */
    resolvedPath?: string;
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
   * 删除某个保存的文件
   * @see https://opendocs.alipay.com/mini/api/dgi1fr
   */
  export function removeSavedFile(object?: {
    /**
     * 文件路径。
     */
    apFilePath?: string;
    /**
     * 文件路径。
     */
    filePath?: string;
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
   * 移除 TabBar 某一项右上角的文本
   * @see https://opendocs.alipay.com/mini/api/lpbp5g
   */
  export function removeTabBarBadge(object: {
    /**
     * 标签页的项数序号，从左边开始计数。
     */
    index: number;
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
   * 调起小程序订阅消息界面
   * @see https://opendocs.alipay.com/mini/api/requestSubscribeMessage
   */
  export function requestSubscribeMessage(object: {
    /**
     * 应用 id
     */
    appId?: string;
    /**
     * 使用消息订阅 JSAPI
     */
    aboveContent?: boolean;
    /**
     * 需要订阅的消息模板 id 的集合
     */
    entityIds: string[];
    /**
     * 模板小程序标识，仅在 ISV（独立软件开发商） 场景下需要传入。
     */
    thirdTypeAppId?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      [entityId: string]: unknown;
      /**
       * 订阅行为结果
       */
      behavior: '' | 'subscribe' | 'cancel';
      /**
       * 本次订阅过程是否弹出了订阅面板
       */
      show: boolean;
      /**
       * 单次订阅模板，用户同意订阅并勾选"不再询问"时为 true
       */
      keep: boolean;
      /**
       * 长期订阅模板，用户点击"拒绝，不再询问"时为 true
       */
      refuse: boolean;
      /**
       * 错误码
       * @description 可参考：[错误码](https://opendocs.alipay.com/mini/api/requestSubscribeMessage#%E9%94%99%E8%AF%AF%E7%A0%81)
       */
      errorCode?: number;
      /**
       * 错误信息
       */
      errorMessage?: string;
      /**
       * 订阅数据
       */
      result?: IMyRequestSubscribeMessageResult;
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
            [entityId: string]: unknown;
            /**
             * 订阅行为结果
             */
            behavior: '' | 'subscribe' | 'cancel';
            /**
             * 本次订阅过程是否弹出了订阅面板
             */
            show: boolean;
            /**
             * 单次订阅模板，用户同意订阅并勾选"不再询问"时为 true
             */
            keep: boolean;
            /**
             * 长期订阅模板，用户点击"拒绝，不再询问"时为 true
             */
            refuse: boolean;
            /**
             * 错误码
             * @description 可参考：[错误码](https://opendocs.alipay.com/mini/api/requestSubscribeMessage#%E9%94%99%E8%AF%AF%E7%A0%81)
             */
            errorCode?: number;
            /**
             * 错误信息
             */
            errorMessage?: string;
            /**
             * 订阅数据
             */
            result?: IMyRequestSubscribeMessageResult;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    [entityId: string]: unknown;
    /**
     * 订阅行为结果
     */
    behavior: '' | 'subscribe' | 'cancel';
    /**
     * 本次订阅过程是否弹出了订阅面板
     */
    show: boolean;
    /**
     * 单次订阅模板，用户同意订阅并勾选"不再询问"时为 true
     */
    keep: boolean;
    /**
     * 长期订阅模板，用户点击"拒绝，不再询问"时为 true
     */
    refuse: boolean;
    /**
     * 错误码
     * @description 可参考：[错误码](https://opendocs.alipay.com/mini/api/requestSubscribeMessage#%E9%94%99%E8%AF%AF%E7%A0%81)
     */
    errorCode?: number;
    /**
     * 错误信息
     */
    errorMessage?: string;
    /**
     * 订阅数据
     */
    result?: IMyRequestSubscribeMessageResult;
  }>;
  /**
   * 非对称加密
   * @description 加密与解密过程应分别放置在客户端与服务端，私钥也放在服务端（若私钥放在客户端，容易泄露而导致安全问题）。
   * @see https://opendocs.alipay.com/mini/api/data-safe
   */
  export function rsa(object: {
    /**
     * 使用 RSA 加密还是 RSA 解密。
     */
    action: 'encrypt' | 'decrypt';
    /**
     * 需要被加/解密的文本
     * - `加密` 为 原始文本。
     * - `解密` 为 `Base64` 编码格式文本。
     */
    text: string;
    /**
     * RSA 密钥。
     * - `加密` 使用公钥
     * - `解密` 使用私钥。
     */
    key: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 经过处理过后得到的文本。
       * - `加密` 为 `Base64` 编码文本。
       * - `解密` 为 原始文本。
       */
      text: string;
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
             * 经过处理过后得到的文本。
             * - `加密` 为 `Base64` 编码文本。
             * - `解密` 为 原始文本。
             */
            text: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 经过处理过后得到的文本。
     * - `加密` 为 `Base64` 编码文本。
     * - `解密` 为 原始文本。
     */
    text: string;
  }>;
  /**
   * 保存文件到本地
   * @description 本地文件大小总容量限制：10 MB
   * @see https://opendocs.alipay.com/mini/api/xbll1q
   */
  export function saveFile(object: {
    /**
     * 本地文件路径
     */
    apFilePath: string;
    /**
     * 本地文件路径
     */
    filePath: string;
    /**
     * 是否将文件保存到外部存储目录
     * @default false
     */
    toDisk?: boolean;
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
   * 保存文件系统的文件到系统存储空间
   * @see https://opendocs.alipay.com/mini/05vtu2
   */
  export function saveFileToDisk(object: {
    /**
     * 本地文件路径
     */
    apFilePath: string;
    /**
     * 本地文件路径
     */
    filePath: string;
    /**
     * 是否将文件保存到外部存储目录
     * @default false
     */
    toDisk?: boolean;
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
   * 将在线图片保存至本地相册
   * @description 推荐使用 [my.saveImageToPhotosAlbum]()
   * @see https://opendocs.alipay.com/mini/api/media/image/my.saveimage
   */
  export function saveImage(object: {
    /**
     * 要保存的图片链接。
     */
    url: string;
    /**
     * 是否显示图片操作菜单。
     * @default false
     */
    showActionSheet?: boolean;
    /**
     * 返回具体错误码
     * @default true
     */
    cusHandleResult?: boolean;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {}): void;
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
            error: 2;
            errorMessage: '参数无效，没有传 url 参数';
          }
        | {
            error: 15;
            errorMessage: '没有开启相册权限(ios only)';
          }
        | {
            error: 16;
            errorMessage: '手机相册存储空间不足(ios only)';
          }
        | {
            error: 17;
            errorMessage: '保存图片过程中的其他错误';
          }
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
            errorMessage: '参数无效，没有传 url 参数';
          }
        | {
            error: 15;
            errorMessage: '没有开启相册权限(ios only)';
          }
        | {
            error: 16;
            errorMessage: '手机相册存储空间不足(ios only)';
          }
        | {
            error: 17;
            errorMessage: '保存图片过程中的其他错误';
          }
    ): void;
  }): Promise<void>;
  /**
   * 保存图片到本地相册
   * @see https://opendocs.alipay.com/mini/api/media/image/my.saveImagetophotosalbum
   */
  export function saveImageToPhotosAlbum(object: {
    /**
     * 要保存的图片链接。
     */
    filePath: string;
    /**
     * 隐藏 toast
     */
    hideToast?: boolean;
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
   * 保存视频到系统相册
   * @see https://opendocs.alipay.com/mini/api/media/video/my.savevideotophotosalbum
   */
  export function saveVideoToPhotosAlbum(object?: {
    /**
     * 视频地址
     */
    src?: string;
    /**
     * 视频文件路径，支持网络地址、本地临时文件、本地缓存文件、本地用户文件
     * @description 注意：客户端 10.2.70 开始支持本地缓存文件、本地用户文件
     */
    filePath?: string;
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
   * 跳转到扫一扫界面
   * @description 唤起扫一扫会触发以下生命周期: App.onHide → Page.onHide → App.onShow → Page.onShow
   * @see https://opendocs.alipay.com/mini/api/scan
   */
  export function scan(object?: {
    /**
     * 扫码识别类型
     * @default "['qrCode', 'barCode']"
     */
    scanType?: (
      | 'qrCode'
      | 'barCode'
      | 'dmCode'
      | 'pdf417Code'
      | 'narrowCode'
      | 'hmCode'
    )[];
    /**
     * 不允许从相册选择图片，只能从相机扫码
     * @default false
     */
    hideAlbum?: boolean;
    /**
     * 不允许从相册选择图片，只能从相机扫码
     * @default false
     */
    onlyFromCamera?: boolean;
    /**
     * 扫码动作
     */
    actionType?: 'scan' | 'route' | 'scanAndRoute' | 'scanAndRpc';
    /**
     * 是否返回跳转后的路径
     */
    needPath?: boolean;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 扫码结果
       */
      code: string;
      /**
       * @deprecated 请使用 code 字段
       * 扫描二维码时返回的结果
       */
      barCode?: string;
      /**
       * @deprecated 请使用 code 字段
       * 扫描条形码时返回的结果
       */
      qrCode?: string;
      /**
       * base64 编码的结果
       */
      rawData: string;
      /**
       * 来源
       */
      imageChannel: string;
      /**
       * 码内容
       */
      result: string;
      /**
       * 码类型
       */
      scanType: string;
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
             * 扫码结果
             */
            code: string;
            /**
             * @deprecated 请使用 code 字段
             * 扫描二维码时返回的结果
             */
            barCode?: string;
            /**
             * @deprecated 请使用 code 字段
             * 扫描条形码时返回的结果
             */
            qrCode?: string;
            /**
             * base64 编码的结果
             */
            rawData: string;
            /**
             * 来源
             */
            imageChannel: string;
            /**
             * 码内容
             */
            result: string;
            /**
             * 码类型
             */
            scanType: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 扫码结果
     */
    code: string;
    /**
     * @deprecated 请使用 code 字段
     * 扫描二维码时返回的结果
     */
    barCode?: string;
    /**
     * @deprecated 请使用 code 字段
     * 扫描条形码时返回的结果
     */
    qrCode?: string;
    /**
     * base64 编码的结果
     */
    rawData: string;
    /**
     * 来源
     */
    imageChannel: string;
    /**
     * 码内容
     */
    result: string;
    /**
     * 码类型
     */
    scanType: string;
  }>;
  /**
   * 通过socket发送数据
   * @see https://opendocs.alipay.com/mini/api/mr91d1
   */
  export function sendSocketMessage(object: {
    /**
     * 需要发送的内容：普通的文本内容 string 或者经 Base64 编码后的 string。
     */
    data: string;
    /**
     * 是否对二进制数据进行 base64 编码
     * @description
     * - 如果发送二进制数据，需要将入参数据经 Base64 编码成 string 后赋值 data，同时将此字段设置为 true。
     * - 如果是普通的文本内容 string，则不需要设置此字段。
     * @default false
     */
    isBuffer?: boolean;
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
   * 动态设置窗口的背景色
   * @see https://opendocs.alipay.com/mini/api/set-background
   */
  export function setBackgroundColor(object?: {
    /**
     * 窗口的背景色
     */
    backgroundColor?: string;
    /**
     * 顶部窗口的背景色，仅 iOS 支持
     */
    backgroundColorTop?: string;
    /**
     * 底部窗口的背景色，仅 iOS 支持
     */
    backgroundColorBottom?: string;
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
   * 设置下拉背景文字样式
   * @see https://opendocs.alipay.com/mini/api/aamqae
   */
  export function setBackgroundTextStyle(object: {
    /**
     * 下拉背景字体、loading 图的样式
     */
    textStyle: 'dark' | 'light';
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
   * 设置蓝牙低功耗设备的最大传输单元 (MTU)
   * @see https://opendocs.alipay.com/mini/api/my.setblemtu
   */
  export function setBLEMTU(object: {
    /**
     * 设备id
     */
    deviceId: string;
    /**
     * mtu值（大于23）
     */
    mtu: number;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 是否成功
       */
      success: true;
      /**
       * 协商后的 mtu 值
       */
      mtu: number;
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
            /**
             * 协商后的 mtu 值
             */
            mtu: number;
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
    /**
     * 协商后的 mtu 值
     */
    mtu: number;
  }>;
  /**
   * 设置页面是否支持下拉
   * @description 默认支持页面下拉，可通过此接口关闭下拉或重新开启下来
   * @see https://opendocs.alipay.com/mini/api/set-can-pull-down
   */
  export function setCanPullDown(object: {
    /**
     * 是否支持下拉
     */
    canPullDown: boolean;
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
   * 设置剪贴板数据。
   * @see https://opendocs.alipay.com/mini/api/klbkbp
   */
  export function setClipboard(object: {
    /**
     * 剪贴板数据。
     */
    text: string;
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
   * 设置是否保持屏幕长亮状态
   * @description 仅在当前小程序生效，离开小程序后失效。
   * @see https://opendocs.alipay.com/mini/api/qx0sap
   */
  export function setKeepScreenOn(object?: {
    /**
     * 是否保持屏幕长亮状态
     * @default false
     */
    keepScreenOn?: boolean;
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
   * 修改默认定位城市的名称
   * @description 针对 [my.chooseCity]() 接口
   * @see https://opendocs.alipay.com/mini/api/yw382g
   */
  export function setLocatedCity(object: {
    /**
     * 当前定位城市的名称。
     */
    locatedCityName: string;
    /**
     * 当前定位城市 ID，`chooseCity` 接口的 `onLocatedComplete` 返回。
     */
    locatedCityId: string;
    /**
     * 当前定位城市的行政区划代码，不传值时以控件默认拿到的为准。
     */
    locatedCityAdCode?: string;
    /**
     * 当前定位城市的拼音，不传值时以控件默认拿到的为准。
     */
    locatedCityPinyin?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 修改后的定位城市名称
       */
      locatedCityName: string;
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
             * 修改后的定位城市名称
             */
            locatedCityName: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 修改后的定位城市名称
     */
    locatedCityName: string;
  }>;
  /**
   * 设置导航栏样式
   * @description 样式包括：导航栏标题、导航栏背景色、导航栏底部边框颜色、导航栏左上角 logo 图片
   * @see https://opendocs.alipay.com/mini/api/xwq8e6
   */
  export function setNavigationBar(object?: {
    /**
     * 导航栏标题
     * @example "文字标题"
     */
    title?: string;
    /**
     * 导航栏左上角 logo 图片链接地址
     * @description
     * - 支持 gif 格式，必须使用 HTTPS 图片链接
     * - 若设置了 image 则 title 参数失效
     * - iOS 请使用3倍分辨率标准的高清图片
     */
    image?: string;
    /**
     * 导航栏背景色，支持十六进制颜色值。
     * @description 导航栏背景色不支持渐变色
     * @example "#FF0000"
     */
    backgroundColor?: string;
    /**
     * 导航栏底部边框颜色，支持十六进制颜色值。
     * @description 若设置了 backgroundColor，则 borderBottomColor 不会生效，默认会和 backgroundColor 颜色一样。
     * @example "#00FF00"
     */
    borderBottomColor?: string;
    /**
     * 是否重置导航栏为支付宝默认配色。
     * @default false
     */
    reset?: boolean;
    /**
     * 导航栏前景颜色值
     * @description 包括返回键、标题、收藏、右上角胶囊按钮的颜色，仅支持 #ffffff 和 #000000。
     * @example "#FFFFFF"
     */
    frontColor?: string;
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
   * 设置屏幕亮度
   * @see https://opendocs.alipay.com/mini/api/ccf32t
   */
  export function setScreenBrightness(object: {
    /**
     * 需要设置的屏幕亮度，取值范围 （0-1）。
     */
    brightness: number;
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
  /**
   * 动态设置 TabBar 某一项右上角的文本
   * @see https://opendocs.alipay.com/mini/api/qm7t3v
   */
  export function setTabBarBadge(object: {
    /**
     * 标签页的项数序号，从左边开始计数。
     */
    index: number;
    /**
     * 显示的文本，超过三个字符则显示 前两个字符 + “…”。
     * @description 例如：“支付宝” 显示 “支付宝”，“蚂蚁集团” 显示 “蚂蚁…”。
     */
    text: string;
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
   * 动态设置 TabBar 某一项的内容
   * @see https://opendocs.alipay.com/mini/api/zu37bk
   */
  export function setTabBarItem(object: {
    /**
     * 标签页的项数序号，从左边开始计数。
     */
    index: number;
    /**
     * 标签页按钮上的文字。
     */
    text: string;
    /**
     * 图片路径，建议尺寸为 81px * 81px，支持 png/jpeg/jpg/gif 图片格式，支持网络图片。
     */
    iconPath?: string;
    /**
     * 选中时的图片路径，建议尺寸为 81px * 81px，支持 png/jpeg/jpg/gif 图片格式，支持网络图片。
     */
    selectedIconPath?: string;
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
   * 动态设置 TabBar 的整体样式
   * @description 如文字颜色、标签背景色、标签边框颜色等
   * @see https://opendocs.alipay.com/mini/api/wcf0sv
   */
  export function setTabBarStyle(object: {
    /**
     * 标签（tab）上的文字默认颜色。HEXcolor 格式，如 `#FF0000`
     */
    color: string;
    /**
     * 标签（tab）上的文字选中时的颜色。HEXcolor 格式，如 `#00FF00`
     */
    selectedColor: string;
    /**
     * 标签（tab）的背景色。HEXcolor 格式，如 `#0000FF`
     */
    backgroundColor: string;
    /**
     * 标签页（tabbar）上边框的颜色（边框高度 1 px）。
     * - 支持传参如下：
     * - `black`，对应色值为 `#FFE5E5E5` 。
     * - `white`，对应色值为 `#FFFFFFFF` 。
     * - #开头的自定义的RGB色值，如 `#FFABABAE` 或 `#FFFFFF`。
     */
    borderStyle: string;
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
   * 设置截屏/录屏时的屏幕表现
   * @see https://opendocs.alipay.com/mini/api/setVisualEffectOnCapture
   */
  export function setVisualEffectOnCapture(object: {
    /**
     * 截屏/录屏的表现
     */
    visualEffect: 'none' | 'hidden';
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 执行结果
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
             * 执行结果
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
     * 执行结果
     */
    success: true;
  }>;
  /**
   * 接口设置 wifiList 中 AP 的相关信息
   * @see https://opendocs.alipay.com/mini/api/setwifilist
   */
  export function setWifiList(object: {
    /**
     * 提供预设的 Wifi 信息列表
     */
    wifiList: ISetWifiListWifiList[];
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
   * 显示操作菜单
   * @see https://opendocs.alipay.com/mini/api/hr092g
   */
  export function showActionSheet(object: {
    /**
     * 菜单标题
     */
    title?: string;
    /**
     * （`iOS 特殊处理`）指定按钮的索引号，从 `0` 开始。使用场景：需要删除或清除数据等类似场景，默认为红色
     */
    destructiveBtnIndex?: number;
    /**
     * 需飘红选项的数组
     */
    badges?: IMyShowActionSheetBadges[];
    /**
     * 菜单按钮文字数组
     */
    items: string[];
    /**
     * 取消按钮文案。注：`Android` 平台此字段无效，不会显示取消按钮
     * @default "取消"
     */
    cancelButtonText?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 返回用户传入的 `items` 内被选中的索引，从 `0` 开始, 取消选择时，返回 `-1`
       */
      index: number;
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
             * 返回用户传入的 `items` 内被选中的索引，从 `0` 开始, 取消选择时，返回 `-1`
             */
            index: number;
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
     * 返回用户传入的 `items` 内被选中的索引，从 `0` 开始, 取消选择时，返回 `-1`
     */
    index: number;
    /**
     * 是否成功
     */
    success: true;
  }>;
  /**
   * 显示开启权限引导对话框
   * @description
   * - 权限引导的核心是引导而非权限判断，调用时机应该在业务方确认所需权限被限制的时候
   * - 权限引导弹框受疲劳度等因素控制
   * @see https://opendocs.alipay.com/mini/api/show-auth-guide
   */
  export function showAuthGuide(object: {
    /**
     * 引导的权限标识，用于标识该权限类型(如 地理位置信息)。
     */
    authType: `${EShowAuthGuideAuthType}`;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 是否成功显示
       */
      shown: boolean;
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
             * 是否成功显示
             */
            shown: boolean;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 是否成功显示
     */
    shown: boolean;
  }>;
  /**
   * 显示蓝牙统一授权/开关引导流程
   * @see https://opendocs.alipay.com/mini/02pexh
   */
  export function showBLEPermissionGuide(object?: {
    /**
     * 蓝牙首次使用，业务提示弹窗标题（仅iOS，不配置则不会弹窗）
     */
    firstTipTitle?: string;
    /**
     * 蓝牙首次使用，业务提示弹窗内容（仅iOS，不配置则不会弹窗）
     */
    firstTipsMessage?: string;
    /**
     * 授权蓝牙，业务提示弹窗标题（仅iOS，不配置则不会弹窗）
     */
    authTipsTitle?: string;
    /**
     * 授权蓝牙，业务提示弹窗内容（仅iOS，不配置则不会弹窗）
     */
    authTipsMessage?: string;
    /**
     * 授权蓝牙，业务提示弹窗按钮标题（仅iOS，不配置则不会弹窗）
     */
    authTipsButton?: string;
    /**
     * 开启蓝牙，业务提示弹窗标题
     */
    openTipsTitle?: string;
    /**
     * 开启蓝牙，业务提示弹窗内容
     */
    openTipsMessage?: string;
    /**
     * 开启蓝牙，业务提示弹窗按钮标题
     */
    openTipsButton?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 蓝牙授权向导接口调用成功
       */
      success: boolean;
      /**
       * 错误吗
       */
      error: string;
      /**
       * 错误信息
       */
      errorMessage: string;
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
             * 蓝牙授权向导接口调用成功
             */
            success: boolean;
            /**
             * 错误吗
             */
            error: string;
            /**
             * 错误信息
             */
            errorMessage: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 蓝牙授权向导接口调用成功
     */
    success: boolean;
    /**
     * 错误吗
     */
    error: string;
    /**
     * 错误信息
     */
    errorMessage: string;
  }>;
  /**
   * 显示加载提示的过渡效果
   * @description 可与 [my.hideLoading]() 配合使用
   * @see https://opendocs.alipay.com/mini/api/bm69kb
   */
  export function showLoading(object?: {
    /**
     * 提示中的文字内容
     */
    content?: string;
    /**
     * 延迟显示，单位为毫秒（ms）
     * @description 如果在此时间之前调用了 [my.hideLoading]() 则不会显示。
     * @default 0
     */
    delay?: number;
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
   * 在当前页面显示导航条的加载动画
   * @see https://opendocs.alipay.com/mini/api/lydg2a
   */
  export function showNavigationBarLoading(object?: {
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
   * 打开当前页面分享按钮
   * @see https://opendocs.alipay.com/mini/083du8
   */
  export function showShareMenu(): void;
  /**
   * 手动唤起分享面板
   * @description 此时 `Page.onShareAppMessage` 入参中 `from` 的值为 `code`
   * @see https://opendocs.alipay.com/mini/api/omg2ye
   */
  export function showSharePanel(): void;
  /**
   * 显示 TabBar
   * @see https://opendocs.alipay.com/mini/api/dpq5dh
   */
  export function showTabBar(object?: {
    /**
     * 是否需要动画效果，默认为无动画效果。
     * @default false
     */
    animation?: boolean;
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
   * 显示 TabBar 某一项的右上角的红点
   * @see https://opendocs.alipay.com/mini/api/dquxiq
   */
  export function showTabBarRedDot(object: {
    /**
     * 标签页的项数序号，从左边开始计数。
     */
    index: number;
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
   * 显示弱提示
   * @description 在到达设定的显示时间后，会自动消失
   * @see https://opendocs.alipay.com/mini/api/fhur8f
   */
  export function showToast(object?: {
    /**
     * 文字内容
     */
    content?: string;
    /**
     * 提示类型
     * @default "none"
     */
    type?: 'none' | 'success' | 'fail' | 'exception' | 'loading';
    /**
     * 显示时长，单位为 ms
     * @description 安卓10.1.2以下版本中，duration 显示时长实际只支持 2000/3500 两种，小于或等于2000的相当于2000, 大于2000的相当于3500
     * @default 3000
     */
    duration?: number;
    /**
     * 延时弹出提示，单位为 ms
     */
    delay?: number;
    /**
     * 弱提示弹出时的 X 轴偏移
     */
    xOffset?: number;
    /**
     * 弱提示弹出时的 Y 轴偏移
     */
    yOffset?: number;
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
   * 开始监听加速度数据
   * @see https://opendocs.alipay.com/mini/022hgl
   */
  export function startAccelerometer(object?: {
    /**
     * 间隔
     * @default "normal"
     */
    interval?: 'game' | 'ui' | 'normal';
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 表示摇一摇有效或传感器监听调用成功
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
             * 表示摇一摇有效或传感器监听调用成功
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
     * 表示摇一摇有效或传感器监听调用成功
     */
    success: boolean;
  }>;
  /**
   * 唤起身份验证页面
   */
  export function startAPVerify(object: {
    /**
     * 通过 `alipay.user.certify.open.certify` 接口获取的 `url`，需要服务端通过开放平台接口获取后，再给前端进行调用。
     */
    url: string;
    /**
     * 通过 `alipay.user.certify.open.initialize` 接口获取的 `certifyId` 认证链接，需要服务端通过开放平台接口获取后，再给前端进行调用。
     */
    certifyId: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 认证流程结果状态码
       */
      resultStatus: string;
      result: IMyApStartAPVerifyResult;
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
             * 认证流程结果状态码
             */
            resultStatus: string;
            result: IMyApStartAPVerifyResult;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 认证流程结果状态码
     */
    resultStatus: string;
    result: IMyApStartAPVerifyResult;
  }>;
  /**
   * 开始搜索附近的 iBeacon 设备
   * @see https://opendocs.alipay.com/mini/api/cy1g7k
   */
  export function startBeaconDiscovery(object: {
    /**
     * 目标 iBeacon 设备广播的 UUIDs。
     * uuids[0]、uuids[1] 为目标 iBeacon 的 UUID，可从硬件厂商获取，如果为空，无法搜索到 iBeacon。
     * iBeacon 需要位置权限。iOS 11 及以后版本的手机，通过手机控制中心的快捷开关打开蓝牙，无法使用 iBeacon，需要在 设置 > 蓝牙 中开启蓝牙，方可使用。
     */
    uuids: string[];
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
   * 开始搜寻附近的蓝牙外围设备
   * @description
   * - 搜索结果将在 [my.onBluetoothDeviceFound]() 事件中返回。
   * - 该操作比较耗费系统资源，请在搜索并连接到设备后调用 stop 方法停止搜索。
   * @see https://opendocs.alipay.com/mini/api/ksew43
   */
  export function startBluetoothDevicesDiscovery(object: {
    includeClassic?: boolean;
    /**
     * 设备id
     */
    deviceIds?: string[];
    /**
     * 设备名
     */
    deviceNames?: string[];
    /**
     * 是否允许重复上报同一设备， 如果允许重复上报，则onBluetoothDeviceFound 方法会多次上报同一设备，但是 RSSI 值会有不同。
     */
    allowDuplicatesKey?: boolean;
    /**
     * 上报设备的间隔，默认为0，意思是找到新设备立即上报，否则根据传入的间隔上报。
     */
    interval?: number;
    /**
     * 蓝牙设备主 service 的 uuid 列表。
     */
    services: string[];
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
   * 开始监听罗盘数据
   * @see https://opendocs.alipay.com/mini/022kkk
   */
  export function startCompass(object?: {
    /**
     * 间隔
     * @default "normal"
     */
    interval?: 'game' | 'ui' | 'normal';
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 表示摇一摇有效或传感器监听调用成功
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
             * 表示摇一摇有效或传感器监听调用成功
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
     * 表示摇一摇有效或传感器监听调用成功
     */
    success: boolean;
  }>;
  /**
   * 开始监听陀螺仪数据
   * @see https://opendocs.alipay.com/mini/022kkm
   */
  export function startGyroscope(object?: {
    /**
     * 间隔
     * @default "normal"
     */
    interval?: 'game' | 'ui' | 'normal';
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 表示摇一摇有效或传感器监听调用成功
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
             * 表示摇一摇有效或传感器监听调用成功
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
     * 表示摇一摇有效或传感器监听调用成功
     */
    success: boolean;
  }>;
  /**
   * 开始 IFAA 生物认证
   * @see https://opendocs.alipay.com/mini/05vid9
   */
  export function startIfaaAuthentication(object: {
    /**
     * 请求使用的可接受的生物认证方式
     */
    requestAuthModes: ('fingerPrint' | 'facial')[];
    /**
     * 挑战因子
     * @description 挑战因子为调用者为此次核身准备的关键识别信息，供调用者识别本次请求。例如：如果场景为请求用户对某订单进行授权确认，则可以将订单号填入此参数
     */
    challenge: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      code: string;
      message?: string;
      srcCode?: string;
      token?: string;
      verifyCode?: string;
      /**
       * 核身校验唯一标识
       * @description 业务服务端二次校验时对应的入参verify_id
       */
      verifyId: string;
      nextIsCasherPament2?: boolean;
      subCode?: string;
      bizResponseData?: string;
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
            code: string;
            message?: string;
            srcCode?: string;
            token?: string;
            verifyCode?: string;
            /**
             * 核身校验唯一标识
             * @description 业务服务端二次校验时对应的入参verify_id
             */
            verifyId: string;
            nextIsCasherPament2?: boolean;
            subCode?: string;
            bizResponseData?: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    code: string;
    message?: string;
    srcCode?: string;
    token?: string;
    verifyCode?: string;
    /**
     * 核身校验唯一标识
     * @description 业务服务端二次校验时对应的入参verify_id
     */
    verifyId: string;
    nextIsCasherPament2?: boolean;
    subCode?: string;
    bizResponseData?: string;
  }>;
  /**
   * 触发页面下拉刷新
   * @description
   * 调用 [my.startPullDownRefresh]() 后触发下拉刷新动画，效果与用户手动下拉刷新一致（会触发 [my.onPullDownRefresh]() 监听方法）。
   * 当处理完数据刷新后，[my.stopPullDownRefresh]() 可停止当前页面的下拉刷新
   * @see https://opendocs.alipay.com/mini/api/ui-pulldown
   */
  export function startPullDownRefresh(object?: {
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
   * 初始化 Wi-Fi 模块
   * @see https://opendocs.alipay.com/mini/api/startwifi
   */
  export function startWifi(object?: {
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
   * 停止监听加速度数据
   * @see https://opendocs.alipay.com/mini/022hgm
   */
  export function stopAccelerometer(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 表示摇一摇有效或传感器监听调用成功
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
             * 表示摇一摇有效或传感器监听调用成功
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
     * 表示摇一摇有效或传感器监听调用成功
     */
    success: boolean;
  }>;
  /**
   * 停止搜索附近的 iBeacon 设备
   * @see https://opendocs.alipay.com/mini/api/yp5owa
   */
  export function stopBeaconDiscovery(object?: {
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
   * 停止搜寻附近的蓝牙外围设备
   * @see https://opendocs.alipay.com/mini/api/syb4mi
   */
  export function stopBluetoothDevicesDiscovery(object?: {
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
   * 停止监听罗盘数据
   * @see https://opendocs.alipay.com/mini/022kkl
   */
  export function stopCompass(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 表示摇一摇有效或传感器监听调用成功
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
             * 表示摇一摇有效或传感器监听调用成功
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
     * 表示摇一摇有效或传感器监听调用成功
     */
    success: boolean;
  }>;
  /**
   * 停止监听陀螺仪数据
   * @see https://opendocs.alipay.com/mini/022hgn
   */
  export function stopGyroscope(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 表示摇一摇有效或传感器监听调用成功
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
             * 表示摇一摇有效或传感器监听调用成功
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
     * 表示摇一摇有效或传感器监听调用成功
     */
    success: boolean;
  }>;
  /**
   * 结束当前页面下拉刷新
   * @description
   * 调用 my.startPullDownRefresh 后触发下拉刷新动画，效果与用户手动下拉刷新一致（会触发 onPullDownRefresh 监听方法）。
   * 当处理完数据刷新后，my.stopPullDownRefresh 可停止当前页面的下拉刷新。
   * @see https://opendocs.alipay.com/mini/api/pmhkbb
   */
  export function stopPullDownRefresh(object?: {
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
   * 关闭 Wi-Fi 模块
   * @see https://opendocs.alipay.com/mini/api/stopwifi
   */
  export function stopWifi(object?: {
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
   * 跳转到指定 Tab 页面，并关闭其他所有非 Tab 页面
   * @description
   * 如果小程序是一个多标签（tab）应用，即客户端窗口的底部栏可以切换页面，那么可以通过标签页配置项指定标签栏的表现形式，以及标签切换时显示的对应页面。
   * 通过页面跳转 [my.navigateTo]() 或者页面重定向 [my.redirectTo]() 所到达的页面，即使是定义在标签页配置中的页面，也不会显示底部的标签栏。标签页的第一个页面必须是首页。
   * @see https://opendocs.alipay.com/mini/api/ui-tabbar
   */
  export function switchTab(object: {
    /**
     * 跳转的特定 tab 的路径
     * @description 目标路径必须为应用内 tabbar 的，且路径后不能带参数
     */
    url: string;
    /**
     * 指定 url 为相对路径的绝对路径基准
     */
    resolvedPath?: string;
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
   * 发起支付
   * @see https://opendocs.alipay.com/mini/api/openapi-pay
   */
  export function tradePay(object?: {
    /**
     * 支付宝交易号，
     * @description 用于 [小程序支付](https://opendocs.alipay.com/mini/introduce/pay), 注意参数有大小写区分。
     */
    tradeNO?: string;
    /**
     * 支付参数
     * @description 用于 [支付宝预授权](https://opendocs.alipay.com/mini/api/tmz0kq), 完整的支付参数拼接成的字符串，从服务端获取。
     */
    orderStr?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 支付结果码
       */
      resultCode: string;
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
             * 支付结果码
             */
            resultCode: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 支付结果码
     */
    resultCode: string;
  }>;
  /**
   * 取消对指定 SSID 的信任
   * @description 对于需要 Portal 认证的 WIFI，继续弹出 portal 认证页面。
   * @see https://opendocs.alipay.com/mini/api/unregister
   */
  export function unregisterSSID(object: {
    /**
     * Wifi 设备 SSID。
     */
    SSID: string;
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
   * 取消小程序订阅的消息
   * @see https://opendocs.alipay.com/mini/07vg26
   */
  export function unsubscribeMessage(object: {
    /**
     * 订阅的消息模板 id 集合
     */
    entityIds: string[];
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 是否取消成功
       */
      success?: boolean;
      /**
       * 错误码
       * @description 可参考：[错误码](https://opendocs.alipay.com/mini/07vg26#%E9%94%99%E8%AF%AF%E7%A0%81)
       */
      error?: number;
      /**
       * 错误信息
       */
      errorMessage?: string;
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
             * 是否取消成功
             */
            success?: boolean;
            /**
             * 错误码
             * @description 可参考：[错误码](https://opendocs.alipay.com/mini/07vg26#%E9%94%99%E8%AF%AF%E7%A0%81)
             */
            error?: number;
            /**
             * 错误信息
             */
            errorMessage?: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 是否取消成功
     */
    success?: boolean;
    /**
     * 错误码
     * @description 可参考：[错误码](https://opendocs.alipay.com/mini/07vg26#%E9%94%99%E8%AF%AF%E7%A0%81)
     */
    error?: number;
    /**
     * 错误信息
     */
    errorMessage?: string;
  }>;
  /**
   * 上传本地资源到开发者服务器
   * @see https://opendocs.alipay.com/mini/api/kmq4hc
   */
  export function uploadFile(object: {
    /**
     * 开发者服务器地址。
     */
    url: string;
    /**
     * 要上传文件资源的本地定位符。
     */
    filePath: string;
    /**
     * 文件名，即对应的 key，开发者在服务器端通过这个 key 可以获取到文件二进制内容。
     */
    name: string;
    /**
     * 文件类型支持图片、视频、音频（image / video / audio）。
     */
    fileType: string;
    /**
     * 是否隐藏 loading 图。
     * @default false
     */
    hideLoading?: boolean;
    /**
     * HTTP 请求 Header。
     */
    header?: Record<string, unknown>;
    /**
     * 请求头
     */
    headers?: Record<string, unknown>;
    /**
     * HTTP 请求中其他额外的 form 数据。
     */
    formData?: Record<string, unknown>;
    /**
     * 文件名，会转换成 name 字段
     */
    fileName?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 服务器返回的数据。
       */
      data: string;
      /**
       * HTTP 状态码。
       */
      statusCode: number;
      /**
       * 服务器返回的 Header。
       */
      header: Record<string, unknown>;
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
            error: 11;
            errorMessage?: string;
          }
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * 服务器返回的数据。
             */
            data: string;
            /**
             * HTTP 状态码。
             */
            statusCode: number;
            /**
             * 服务器返回的 Header。
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
          )
    ): void;
  }): Promise<{
    /**
     * 服务器返回的数据。
     */
    data: string;
    /**
     * HTTP 状态码。
     */
    statusCode: number;
    /**
     * 服务器返回的 Header。
     */
    header: Record<string, unknown>;
  }> &
    UploadTask;
  /**
   * 触发设备震动
   * @see https://opendocs.alipay.com/mini/api/vibrate
   */
  export function vibrate(object?: {
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
   * 触发设备长时间震动
   * @description 400ms
   * @see https://opendocs.alipay.com/mini/api/ucm2he
   */
  export function vibrateLong(object?: {
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
   * 触发设备短时间震动
   * @see https://opendocs.alipay.com/mini/api/ad6c10
   */
  export function vibrateShort(object?: {
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
   * 摇一摇功能
   * @description 每次调用 API，在摇一摇手机后触发回调，如需再次监听需要再次调用这个 API
   * @see https://opendocs.alipay.com/mini/api/shake
   */
  export function watchShake(object?: {
    /**
     * 值为true时，表示开启加速度传感器监听功能，会不断的收到accelerometerChange事件回调。
     */
    monitorAccelerometer?: boolean;
    /**
     * 值为true时，表示开启压力传感器监听功能，会不断的收到compassChange事件回调。
     */
    monitorCompass?: boolean;
    /**
     * 值为true时，表示开启陀螺仪传感器监听功能，会不断的收到gyroscopeChange事件回调。
     */
    monitorGyroscope?: boolean;
    /**
     * 传感器采样回调间隔，单位 秒
     */
    interval?: number;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 表示摇一摇有效或传感器监听调用成功
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
             * 表示摇一摇有效或传感器监听调用成功
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
     * 表示摇一摇有效或传感器监听调用成功
     */
    success: boolean;
  }>;
  /**
   * 向蓝牙低功耗设备特征值中写入数据
   * @see https://opendocs.alipay.com/mini/api/vmp2r4
   */
  export function writeBLECharacteristicValue(object: {
    /**
     * 蓝牙设备 ID
     */
    deviceId: string;
    /**
     * 蓝牙特征值对应 service 的 UUID
     */
    serviceId: string;
    /**
     * 蓝牙特征值的 UUID
     */
    characteristicId: string;
    /**
     * 蓝牙设备特征值对应的值，为 16 进制字符串，限制在 20 字节内
     */
    value: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 错误码
       */
      errorCode: string;
      /**
       * 错误信息
       */
      errorMessage: string;
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
             * 错误码
             */
            errorCode: string;
            /**
             * 错误信息
             */
            errorMessage: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 错误码
     */
    errorCode: string;
    /**
     * 错误信息
     */
    errorMessage: string;
  }>;
  export interface RewardedAd {
    /**
     * 加载激励视频广告
     */
    load(object: {
      /**
       * 广告单元 ID
       */
      adUnitId: string;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 错误码
         */
        error?: number;
        /**
         * 错误信息
         */
        errorMessage?: string;
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
              error: 61000;
              errorMessage: '广告返回空';
            }
          | {
              error: 61001;
              errorMessage: '广告请求超时';
            }
          | {
              error: 61002;
              errorMessage: '广告请求错误';
            }
          | {
              error: 61003;
              errorMessage: '广告单元重复创建';
            }
          | {
              error: 61004;
              errorMessage: '广告视图创建失败';
            }
          | {
              error: 2;
              errorMessage: '参数类型错误';
            }
          | {
              error: 3;
              errorMessage: '未知错误';
            }
      ): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * 错误码
               */
              error?: number;
              /**
               * 错误信息
               */
              errorMessage?: string;
            }
          | (
              | {
                  error?: number;
                  errorMessage?: string;
                }
              | {
                  error: 61000;
                  errorMessage: '广告返回空';
                }
              | {
                  error: 61001;
                  errorMessage: '广告请求超时';
                }
              | {
                  error: 61002;
                  errorMessage: '广告请求错误';
                }
              | {
                  error: 61003;
                  errorMessage: '广告单元重复创建';
                }
              | {
                  error: 61004;
                  errorMessage: '广告视图创建失败';
                }
              | {
                  error: 2;
                  errorMessage: '参数类型错误';
                }
              | {
                  error: 3;
                  errorMessage: '未知错误';
                }
            )
      ): void;
    }): Promise<{
      /**
       * 错误码
       */
      error?: number;
      /**
       * 错误信息
       */
      errorMessage?: string;
    }>;
    /**
     * 取消监听激励视频广告关闭事件
     */
    offClose(callback: (res: any) => void): void;
    /**
     * 取消监听激励视频广告错误事件
     */
    offError(callback: (res: any) => void): void;
    /**
     * 取消监听激励视频广告加载事件
     */
    offLoad(callback: () => void): void;
    /**
     * 监听激励视频广告关闭事件
     */
    onClose(callback: (res: any) => void): void;
    /**
     * 监听激励视频广告错误事件
     */
    onError(callback: (res: any) => void): void;
    /**
     * 监听激励视频广告加载事件
     */
    onLoad(callback: () => void): void;
    /**
     * 显示激励视频广告
     */
    show(object: {
      /**
       * 广告单元 ID
       */
      adUnitId: string;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 错误码
         */
        error?: number;
        /**
         * 错误信息
         */
        errorMessage?: string;
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
              error: 61101;
              errorMessage: '广告状态异常';
            }
          | {
              error: 2;
              errorMessage: '参数类型错误';
            }
      ): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * 错误码
               */
              error?: number;
              /**
               * 错误信息
               */
              errorMessage?: string;
            }
          | (
              | {
                  error?: number;
                  errorMessage?: string;
                }
              | {
                  error: 61101;
                  errorMessage: '广告状态异常';
                }
              | {
                  error: 2;
                  errorMessage: '参数类型错误';
                }
            )
      ): void;
    }): Promise<{
      /**
       * 错误码
       */
      error?: number;
      /**
       * 错误信息
       */
      errorMessage?: string;
    }>;
  }
  export interface CloudContext {
    /**
     * 云托管服务调用
     */
    callContainer(object: {
      /**
       * 云环境服务路径
       */
      path: string;
      /**
       * 云环境配置
       */
      config?: Record<string, string>;
      /**
       * 云环境服务配置
       */
      header: Record<string, string>;
      /**
       * 云服务器请求类型
       */
      method?: string;
      /**
       * 请求数据
       */
      data?: unknown;
      /**
       * 超时时间
       */
      timeout?: number;
      /**
       * 返回的resultData字段数据格式
       */
      dataType?: string;
      /**
       * 返回的resultData字段数据流类型
       */
      responseType?: string;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 响应结果码，正常返回为200
         */
        resultCode?: number;
        /**
         * 响应数据
         */
        resultData: Record<string, unknown>;
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
              error: 60001;
              errorMessage: '非法入参，非法入参，请在config字段中传入云环境ID参数env';
            }
          | {
              error: 60002;
              errorMessage: '调用前，请先初始化云环境';
            }
          | {
              error: 60005;
              errorMessage: '云调用失败';
            }
      ): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * 响应结果码，正常返回为200
               */
              resultCode?: number;
              /**
               * 响应数据
               */
              resultData: Record<string, unknown>;
            }
          | (
              | {
                  error?: number;
                  errorMessage?: string;
                }
              | {
                  error: 60001;
                  errorMessage: '非法入参，非法入参，请在config字段中传入云环境ID参数env';
                }
              | {
                  error: 60002;
                  errorMessage: '调用前，请先初始化云环境';
                }
              | {
                  error: 60005;
                  errorMessage: '云调用失败';
                }
            )
      ): void;
    }): Promise<{
      /**
       * 响应结果码，正常返回为200
       */
      resultCode?: number;
      /**
       * 响应数据
       */
      resultData: Record<string, unknown>;
    }>;
    /**
     * 云函数调用
     */
    callFunction(object: {
      /**
       * 云函数名
       */
      name: string;
      /**
       * 传递给云函数的参数，在云函数中可通过 event 参数获取
       */
      data?: any;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 云函数返回的结果
         */
        result: any;
        /**
         * 云函数执行 ID，用于排查问题
         */
        requestID: string;
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
              error: 60001;
              errorMessage: '无效入参，缺少参数 name';
            }
          | {
              error: 60001;
              errorMessage: '无效入参，缺少参数 env';
            }
          | {
              error: 60002;
              errorMessage: '调用前，请先初始化云环境';
            }
          | {
              error: 60003;
              errorMessage: '请求超时';
            }
          | {
              error: 60004;
              errorMessage: '网络异常';
            }
          | {
              error: 60005;
              errorMessage: '云调用失败';
            }
      ): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * 云函数返回的结果
               */
              result: any;
              /**
               * 云函数执行 ID，用于排查问题
               */
              requestID: string;
            }
          | (
              | {
                  error?: number;
                  errorMessage?: string;
                }
              | {
                  error: 60001;
                  errorMessage: '无效入参，缺少参数 name';
                }
              | {
                  error: 60001;
                  errorMessage: '无效入参，缺少参数 env';
                }
              | {
                  error: 60002;
                  errorMessage: '调用前，请先初始化云环境';
                }
              | {
                  error: 60003;
                  errorMessage: '请求超时';
                }
              | {
                  error: 60004;
                  errorMessage: '网络异常';
                }
              | {
                  error: 60005;
                  errorMessage: '云调用失败';
                }
            )
      ): void;
    }): Promise<{
      /**
       * 云函数返回的结果
       */
      result: any;
      /**
       * 云函数执行 ID，用于排查问题
       */
      requestID: string;
    }>;
    /**
     * 云存储文件删除
     */
    deleteFile(object: {
      /**
       * 要删除的云文件 ID 数组，一次最多限制 50 个
       */
      fileList: string[];
      /**
       * 超时时间，单位ms
       * @default 60000
       */
      timeout?: number;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 删除结果数组
         */
        fileList: ICloudDeleteFileFileList[];
        /**
         * 业务结果信息
         */
        resultMessage: string;
        /**
         * 云存储执行 ID，用于排查问题
         */
        requestID: string;
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
              error: 60001;
              errorMessage: '无效入参，请传入合法的参数 fileList';
            }
          | {
              error: 60001;
              errorMessage: '无效入参，缺少参数 env';
            }
          | {
              error: 60002;
              errorMessage: '调用前，请先初始化云环境';
            }
          | {
              error: 60003;
              errorMessage: '请求超时';
            }
          | {
              error: 60004;
              errorMessage: '网络异常';
            }
          | {
              error: 60005;
              errorMessage: '云调用失败';
            }
          | {
              error: 60006;
              errorMessage: '请检查传入 fileList 项数量， 最大限制为 50';
            }
      ): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * 删除结果数组
               */
              fileList: ICloudDeleteFileFileList[];
              /**
               * 业务结果信息
               */
              resultMessage: string;
              /**
               * 云存储执行 ID，用于排查问题
               */
              requestID: string;
            }
          | (
              | {
                  error?: number;
                  errorMessage?: string;
                }
              | {
                  error: 60001;
                  errorMessage: '无效入参，请传入合法的参数 fileList';
                }
              | {
                  error: 60001;
                  errorMessage: '无效入参，缺少参数 env';
                }
              | {
                  error: 60002;
                  errorMessage: '调用前，请先初始化云环境';
                }
              | {
                  error: 60003;
                  errorMessage: '请求超时';
                }
              | {
                  error: 60004;
                  errorMessage: '网络异常';
                }
              | {
                  error: 60005;
                  errorMessage: '云调用失败';
                }
              | {
                  error: 60006;
                  errorMessage: '请检查传入 fileList 项数量， 最大限制为 50';
                }
            )
      ): void;
    }): Promise<{
      /**
       * 删除结果数组
       */
      fileList: ICloudDeleteFileFileList[];
      /**
       * 业务结果信息
       */
      resultMessage: string;
      /**
       * 云存储执行 ID，用于排查问题
       */
      requestID: string;
    }>;
    /**
     * 云存储文件下载
     */
    downloadFile(object: {
      /**
       * 云文件 id
       */
      fileID: string;
      /**
       * 指定文件下载后存储的路径，若不指定此参数，下载的文件会被存储为本地临时文件。目前只支持指定 https://usr 这种本地用户文件目录。
       */
      filePath?: string;
      /**
       * 超时时间，单位ms
       * @default 60000
       */
      timeout?: number;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 临时文件路径，入参未指定 filePath 的情况下返回
         */
        tempFilePath: string;
        /**
         * 下载文件保存的路径，与入参指定的 filePath 相同
         */
        filePath: string;
        /**
         * 服务器返回的 HTTP 状态码
         */
        statusCode: number;
        /**
         * 云函数执行 ID，用于排查问题
         */
        requestID: string;
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
              error: 60001;
              errorMessage: '无效入参，请传入合法的参数 fileID';
            }
          | {
              error: 60001;
              errorMessage: '无效入参，请传入合法的参数 filePath';
            }
          | {
              error: 60001;
              errorMessage: '无效入参，缺少参数 env';
            }
          | {
              error: 60002;
              errorMessage: '调用前，请先初始化云环境';
            }
          | {
              error: 60003;
              errorMessage: '请求超时';
            }
          | {
              error: 60004;
              errorMessage: '网络异常';
            }
          | {
              error: 60005;
              errorMessage: '云调用失败';
            }
          | {
              error: 60006;
              errorMessage: '存储写文件失败';
            }
      ): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * 临时文件路径，入参未指定 filePath 的情况下返回
               */
              tempFilePath: string;
              /**
               * 下载文件保存的路径，与入参指定的 filePath 相同
               */
              filePath: string;
              /**
               * 服务器返回的 HTTP 状态码
               */
              statusCode: number;
              /**
               * 云函数执行 ID，用于排查问题
               */
              requestID: string;
            }
          | (
              | {
                  error?: number;
                  errorMessage?: string;
                }
              | {
                  error: 60001;
                  errorMessage: '无效入参，请传入合法的参数 fileID';
                }
              | {
                  error: 60001;
                  errorMessage: '无效入参，请传入合法的参数 filePath';
                }
              | {
                  error: 60001;
                  errorMessage: '无效入参，缺少参数 env';
                }
              | {
                  error: 60002;
                  errorMessage: '调用前，请先初始化云环境';
                }
              | {
                  error: 60003;
                  errorMessage: '请求超时';
                }
              | {
                  error: 60004;
                  errorMessage: '网络异常';
                }
              | {
                  error: 60005;
                  errorMessage: '云调用失败';
                }
              | {
                  error: 60006;
                  errorMessage: '存储写文件失败';
                }
            )
      ): void;
    }): Promise<{
      /**
       * 临时文件路径，入参未指定 filePath 的情况下返回
       */
      tempFilePath: string;
      /**
       * 下载文件保存的路径，与入参指定的 filePath 相同
       */
      filePath: string;
      /**
       * 服务器返回的 HTTP 状态码
       */
      statusCode: number;
      /**
       * 云函数执行 ID，用于排查问题
       */
      requestID: string;
    }>;
    /**
     * 云文件获取临时链接
     */
    getTempFileURL(object: {
      /**
       * 要换取临时链接的云文件 ID 数组，一次最多 50 个
       */
      fileList: Array<string | ICloudContextGetTempFileURLFileList>;
      /**
       * 超时时间，单位ms
       * @default 60000
       */
      timeout?: number;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 获取临时链接结果数组
         */
        fileList: ICloudContextGetTempFileURLResponseFileList[];
        /**
         * 业务结果信息
         */
        resultMessage: string;
        /**
         * 云存储执行 ID，用于排查问题
         */
        requestID: string;
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
              error: 60001;
              errorMessage: '无效入参，请传入合法的参数 fileList';
            }
          | {
              error: 60001;
              errorMessage: '无效入参，缺少参数 env';
            }
          | {
              error: 60002;
              errorMessage: '调用前，请先初始化云环境';
            }
          | {
              error: 60003;
              errorMessage: '请求超时';
            }
          | {
              error: 60004;
              errorMessage: '网络异常';
            }
          | {
              error: 60005;
              errorMessage: '云调用失败';
            }
          | {
              error: 60006;
              errorMessage: '60006 请检查传入 fileList 项数量， 最大限制为 50';
            }
      ): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * 获取临时链接结果数组
               */
              fileList: ICloudContextGetTempFileURLResponseFileList[];
              /**
               * 业务结果信息
               */
              resultMessage: string;
              /**
               * 云存储执行 ID，用于排查问题
               */
              requestID: string;
            }
          | (
              | {
                  error?: number;
                  errorMessage?: string;
                }
              | {
                  error: 60001;
                  errorMessage: '无效入参，请传入合法的参数 fileList';
                }
              | {
                  error: 60001;
                  errorMessage: '无效入参，缺少参数 env';
                }
              | {
                  error: 60002;
                  errorMessage: '调用前，请先初始化云环境';
                }
              | {
                  error: 60003;
                  errorMessage: '请求超时';
                }
              | {
                  error: 60004;
                  errorMessage: '网络异常';
                }
              | {
                  error: 60005;
                  errorMessage: '云调用失败';
                }
              | {
                  error: 60006;
                  errorMessage: '60006 请检查传入 fileList 项数量， 最大限制为 50';
                }
            )
      ): void;
    }): Promise<{
      /**
       * 获取临时链接结果数组
       */
      fileList: ICloudContextGetTempFileURLResponseFileList[];
      /**
       * 业务结果信息
       */
      resultMessage: string;
      /**
       * 云存储执行 ID，用于排查问题
       */
      requestID: string;
    }>;
    /**
     * 云托管初始化
     */
    init(object?: {
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
      fail?(
        err:
          | {
              error?: number;
              errorMessage?: string;
            }
          | {
              error: 60001;
              errorMessage: '系统错误';
            }
          | {
              error: 60002;
              errorMessage: '小程序不存在';
            }
          | {
              error: 60003;
              errorMessage: '小程序云环境不存在';
            }
          | {
              error: 60004;
              errorMessage: '无权限调用';
            }
          | {
              error: 60005;
              errorMessage: '网络异常';
            }
          | {
              error: 2;
              errorMessage: '接口参数无效';
            }
      ): void;
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
          | (
              | {
                  error?: number;
                  errorMessage?: string;
                }
              | {
                  error: 60001;
                  errorMessage: '系统错误';
                }
              | {
                  error: 60002;
                  errorMessage: '小程序不存在';
                }
              | {
                  error: 60003;
                  errorMessage: '小程序云环境不存在';
                }
              | {
                  error: 60004;
                  errorMessage: '无权限调用';
                }
              | {
                  error: 60005;
                  errorMessage: '网络异常';
                }
              | {
                  error: 2;
                  errorMessage: '接口参数无效';
                }
            )
      ): void;
    }): Promise<{
      /**
       * 是否成功
       */
      success: boolean;
    }>;
    /**
     * 云存储文件上传
     */
    uploadFile(object: {
      /**
       * 云存储路径
       */
      cloudPath: string;
      /**
       * 要上传文件资源的本地路径
       */
      filePath: string;
      /**
       * 超时时间，单位ms
       * @default 60000
       */
      timeout?: number;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 云文件 ID
         */
        fileID: string;
        /**
         * 服务器返回的 HTTP 状态码
         */
        statusCode: number;
        /**
         * 云函数执行 ID，用于排查问题
         */
        requestID: string;
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
              error: 60001;
              errorMessage: '无效入参，请传入合法的参数 cloudPath';
            }
          | {
              error: 60001;
              errorMessage: '无效入参，请传入合法的参数 filePath';
            }
          | {
              error: 60001;
              errorMessage: '无效入参，缺少参数 env';
            }
          | {
              error: 60002;
              errorMessage: '调用前，请先初始化云环境';
            }
          | {
              error: 60003;
              errorMessage: '请求超时';
            }
          | {
              error: 60004;
              errorMessage: '网络异常';
            }
          | {
              error: 60005;
              errorMessage: '云调用失败';
            }
          | {
              error: 60006;
              errorMessage: '文件不存在';
            }
          | {
              error: 60007;
              errorMessage: '无权限读取 filePath';
            }
      ): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * 云文件 ID
               */
              fileID: string;
              /**
               * 服务器返回的 HTTP 状态码
               */
              statusCode: number;
              /**
               * 云函数执行 ID，用于排查问题
               */
              requestID: string;
            }
          | (
              | {
                  error?: number;
                  errorMessage?: string;
                }
              | {
                  error: 60001;
                  errorMessage: '无效入参，请传入合法的参数 cloudPath';
                }
              | {
                  error: 60001;
                  errorMessage: '无效入参，请传入合法的参数 filePath';
                }
              | {
                  error: 60001;
                  errorMessage: '无效入参，缺少参数 env';
                }
              | {
                  error: 60002;
                  errorMessage: '调用前，请先初始化云环境';
                }
              | {
                  error: 60003;
                  errorMessage: '请求超时';
                }
              | {
                  error: 60004;
                  errorMessage: '网络异常';
                }
              | {
                  error: 60005;
                  errorMessage: '云调用失败';
                }
              | {
                  error: 60006;
                  errorMessage: '文件不存在';
                }
              | {
                  error: 60007;
                  errorMessage: '无权限读取 filePath';
                }
            )
      ): void;
    }): Promise<{
      /**
       * 云文件 ID
       */
      fileID: string;
      /**
       * 服务器返回的 HTTP 状态码
       */
      statusCode: number;
      /**
       * 云函数执行 ID，用于排查问题
       */
      requestID: string;
    }>;
  }
  export interface FileSystemManager {
    /**
     * 判断文件、目录是否存在
     * @see https://opendocs.alipay.com/mini/api/0226oe
     */
    access(object: {
      /**
       * 文件夹或者文件路径
       */
      path: string;
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
            }
      ): void;
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
            )
      ): void;
    }): Promise<{
      /**
       * 是否成功
       */
      success: true;
    }>;
    /**
     * 同步判断文件、目录是否存在
     * @see https://opendocs.alipay.com/mini/api/025027
     */
    accessSync(param: {
      /**
       * 文件夹或者文件路径
       */
      path: string;
    }): {
      success: true;
    };
    /**
     * 同步判断文件、目录是否存在
     * @see https://opendocs.alipay.com/mini/api/025027
     */
    accessSync(path: string): {
      success: true;
    };
    /**
     * 在文件结尾追加内容
     * @see https://opendocs.alipay.com/mini/api/0228qi
     */
    appendFile(object: {
      /**
       * 要追加内容的文件路径
       */
      filePath: string;
      /**
       * 要追加的文本或二进制数据
       */
      data: string | ArrayBuffer;
      /**
       * 指定写入文件的字符编码
       */
      encoding?:
        | 'ascii'
        | 'base64'
        | 'hex'
        | 'binary'
        | 'ucs2'
        | 'ucs-2'
        | 'utf16le'
        | 'utf-16le';
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
            }
      ): void;
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
            )
      ): void;
    }): Promise<{
      /**
       * 是否成功
       */
      success: true;
    }>;
    /**
     * 同步在文件结尾追加内容
     * @see https://opendocs.alipay.com/mini/api/025028
     */
    appendFileSync(param: {
      /**
       * 要追加内容的文件路径
       */
      filePath: string;
      /**
       * 要追加的文本或二进制数据
       */
      data: string | ArrayBuffer;
      /**
       * 指定写入文件的字符编码
       */
      encoding?:
        | 'ascii'
        | 'base64'
        | 'hex'
        | 'binary'
        | 'ucs2'
        | 'ucs-2'
        | 'utf16le'
        | 'utf-16le';
    }): {
      success: true;
    };
    /**
     * 同步在文件结尾追加内容
     * @see https://opendocs.alipay.com/mini/api/025028
     */
    appendFileSync(
      filePath: string,
      data: string | ArrayBuffer,
      encoding:
        | 'ascii'
        | 'base64'
        | 'hex'
        | 'binary'
        | 'ucs2'
        | 'ucs-2'
        | 'utf16le'
        | 'utf-16le'
    ): {
      success: true;
    };
    /**
     * 复制文件
     * @description 支持复制临时文件、缓存文件、用户文件到本地用户文件位置
     * @see https://opendocs.alipay.com/mini/api/0226of
     */
    copyFile(object: {
      /**
       * 源文件路径
       * @description 只可以是普通文件
       */
      srcPath: string;
      /**
       * 目标文件路径
       */
      destPath: string;
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
            }
      ): void;
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
            )
      ): void;
    }): Promise<{
      /**
       * 是否成功
       */
      success: true;
    }>;
    /**
     * 同步复制文件
     * @see https://opendocs.alipay.com/mini/api/024ytt
     */
    copyFileSync(param: {
      /**
       * 源文件路径
       * @description 只可以是普通文件
       */
      srcPath: string;
      /**
       * 目标文件路径
       */
      destPath: string;
    }): {
      success: true;
    };
    /**
     * 同步复制文件
     * @see https://opendocs.alipay.com/mini/api/024ytt
     */
    copyFileSync(
      srcPath: string,
      destPath: string
    ): {
      success: true;
    };
    /**
     * 获取该小程序下的本地临时文件或本地缓存文件信息
     * @see https://opendocs.alipay.com/mini/api/0226og
     */
    getFileInfo(object: {
      /**
       * 文件路径
       */
      filePath: string;
      /**
       * 摘要算法
       * @default md5
       */
      digestAlgorithm?: 'md5' | 'sha1';
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 文件大小
         * @description 以字节为单位
         */
        size: number;
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
      ): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * 文件大小
               * @description 以字节为单位
               */
              size: number;
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
            )
      ): void;
    }): Promise<{
      /**
       * 文件大小
       * @description 以字节为单位
       */
      size: number;
    }>;
    /**
     * 同步获取该小程序下的本地临时文件或本地缓存文件信息
     */
    getFileInfoSync(param: {
      /**
       * 文件路径
       */
      filePath: string;
      /**
       * 摘要算法
       * @default md5
       */
      digestAlgorithm?: 'md5' | 'sha1';
    }): IFileSystemManagerGetFileInfoSyncResponse;
    /**
     * 同步获取该小程序下的本地临时文件或本地缓存文件信息
     */
    getFileInfoSync(
      filePath: string,
      digestAlgorithm: 'md5' | 'sha1'
    ): IFileSystemManagerGetFileInfoSyncResponse;
    /**
     * 获取该小程序下已保存的本地缓存文件列表
     * @see https://opendocs.alipay.com/mini/api/0228qj
     */
    getSavedFileList(object?: {
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 文件数组
         */
        fileList: IFileSystemManagerGetSavedFileListFileList[];
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
               * 文件数组
               */
              fileList: IFileSystemManagerGetSavedFileListFileList[];
            }
          | {
              error?: number;
              errorMessage?: string;
            }
      ): void;
    }): Promise<{
      /**
       * 文件数组
       */
      fileList: IFileSystemManagerGetSavedFileListFileList[];
    }>;
    /**
     * 同步获取该小程序下已保存的本地缓存文件列表
     */
    getSavedFileListSync(): {
      /**
       * 文件数组
       */
      fileList: IFileSystemManagerGetSavedFileListSyncFileList[];
    };
    /**
     * 创建文件系统目录
     * @see https://opendocs.alipay.com/mini/0762mm
     */
    mkdir(object: {
      /**
       * 创建的目录路径
       */
      dirPath: string;
      /**
       * 是否在递归创建该目录的上级目录后再创建该目录
       * @description 如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。
       * @default false
       */
      recursive?: boolean;
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
      fail?(
        err:
          | {
              error?: number;
              errorMessage?: string;
            }
          | {
              error: 2;
              errorMessage: '无效参数';
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
            }
      ): void;
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
          | (
              | {
                  error?: number;
                  errorMessage?: string;
                }
              | {
                  error: 2;
                  errorMessage: '无效参数';
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
                }
            )
      ): void;
    }): Promise<{
      /**
       * 是否成功
       */
      success: true;
    }>;
    /**
     * 同步创建文件系统目录
     * @see https://opendocs.alipay.com/mini/api/024ytu
     */
    mkdirSync(param: {
      /**
       * 创建的目录路径
       */
      dirPath: string;
      /**
       * 是否在递归创建该目录的上级目录后再创建该目录
       * @description 如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。
       * @default false
       */
      recursive?: boolean;
    }): {
      success: true;
    };
    /**
     * 同步创建文件系统目录
     * @see https://opendocs.alipay.com/mini/api/024ytu
     */
    mkdirSync(
      dirPath: string,
      recursive: boolean
    ): {
      success: true;
    };
    /**
     * 读取目录内文件列表
     * @see https://opendocs.alipay.com/mini/api/0226oi
     */
    readdir(object: {
      /**
       * 目录地址
       */
      dirPath: string;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 文件列表
         */
        files: string[];
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
      ): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * 文件列表
               */
              files: string[];
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
                  errorMessage: '指定的路径没有读权限';
                }
              | {
                  error: 10022;
                  errorMessage: '目录不存在';
                }
            )
      ): void;
    }): Promise<{
      /**
       * 文件列表
       */
      files: string[];
    }>;
    /**
     * 同步读取目录内文件列表
     * @see https://opendocs.alipay.com/mini/api/024ytv
     */
    readdirSync(param: {
      /**
       * 目录地址
       */
      dirPath: string;
    }): IFileSystemManagerReaddirSyncResponse;
    /**
     * 同步读取目录内文件列表
     * @see https://opendocs.alipay.com/mini/api/024ytv
     */
    readdirSync(dirPath: string): IFileSystemManagerReaddirSyncResponse;
    /**
     * 读取本地文件内容
     * @see https://opendocs.alipay.com/mini/api/0226oj
     */
    readFile(object: {
      /**
       * 文件路径
       */
      filePath: string;
      /**
       * 指定写入文件的字符编码
       */
      encoding?:
        | 'ascii'
        | 'base64'
        | 'hex'
        | 'binary'
        | 'ucs2'
        | 'ucs-2'
        | 'utf16le'
        | 'utf-16le';
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 文件内容
         */
        data: string | ArrayBuffer;
        /**
         * 数据类型
         */
        dataType: string;
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
      ): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * 文件内容
               */
              data: string | ArrayBuffer;
              /**
               * 数据类型
               */
              dataType: string;
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
            )
      ): void;
    }): Promise<{
      /**
       * 文件内容
       */
      data: string | ArrayBuffer;
      /**
       * 数据类型
       */
      dataType: string;
    }>;
    /**
     * 同步读取本地文件内容
     * @see https://opendocs.alipay.com/mini/api/025029
     */
    readFileSync(param: {
      /**
       * 文件路径
       */
      filePath: string;
      /**
       * 指定写入文件的字符编码
       */
      encoding?:
        | 'ascii'
        | 'base64'
        | 'hex'
        | 'binary'
        | 'ucs2'
        | 'ucs-2'
        | 'utf16le'
        | 'utf-16le';
    }): IFileSystemManagerReadFileSyncResponse;
    /**
     * 同步读取本地文件内容
     * @see https://opendocs.alipay.com/mini/api/025029
     */
    readFileSync(
      filePath: string,
      encoding:
        | 'ascii'
        | 'base64'
        | 'hex'
        | 'binary'
        | 'ucs2'
        | 'ucs-2'
        | 'utf16le'
        | 'utf-16le'
    ): IFileSystemManagerReadFileSyncResponse;
    /**
     * 删除该小程序下已保存的本地缓存文件
     * @see https://opendocs.alipay.com/mini/api/0229pv
     */
    removeSavedFile(object: {
      /**
       * 需要删除的文件路径
       */
      filePath: string;
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
            }
      ): void;
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
            )
      ): void;
    }): Promise<{
      /**
       * 是否成功
       */
      success: true;
    }>;
    /**
     * 同步删除该小程序下已保存的本地缓存文件
     */
    removeSavedFileSync(param: {
      /**
       * 需要删除的文件路径
       */
      filePath: string;
    }): {
      success: true;
    };
    /**
     * 同步删除该小程序下已保存的本地缓存文件
     */
    removeSavedFileSync(filePath: string): {
      success: true;
    };
    /**
     * 重命名文件
     * @description 可以把文件从 oldPath 移动到 newPath。
     * @see https://opendocs.alipay.com/mini/api/0229pw
     */
    rename(object: {
      /**
       * 源文件路径
       * @description 可以是普通文件或目录
       */
      oldPath: string;
      /**
       * 新文件路径
       */
      newPath: string;
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
            }
      ): void;
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
            )
      ): void;
    }): Promise<{
      /**
       * 是否成功
       */
      success: true;
    }>;
    /**
     * 同步重命名文件
     * @description 可以把文件从 oldPath 移动到 newPath。
     * @see https://opendocs.alipay.com/mini/api/024ytw
     */
    renameSync(param: {
      /**
       * 源文件路径
       * @description 可以是普通文件或目录
       */
      oldPath: string;
      /**
       * 新文件路径
       */
      newPath: string;
    }): {
      success: true;
    };
    /**
     * 同步重命名文件
     * @description 可以把文件从 oldPath 移动到 newPath。
     * @see https://opendocs.alipay.com/mini/api/024ytw
     */
    renameSync(
      oldPath: string,
      newPath: string
    ): {
      success: true;
    };
    /**
     * 删除目录
     * @see https://opendocs.alipay.com/mini/api/0229px
     */
    rmdir(object: {
      /**
       * 删除的目录路径
       */
      dirPath: string;
      /**
       * 是否递归删除目录
       * @description 如果为 true，则删除该目录和该目录下的所有子目录以及文件。
       * @default false
       */
      recursive?: boolean;
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
            }
      ): void;
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
            )
      ): void;
    }): Promise<{
      /**
       * 是否成功
       */
      success: true;
    }>;
    /**
     * 同步删除目录
     * @see https://opendocs.alipay.com/mini/api/024ytx
     */
    rmdirSync(param: {
      /**
       * 删除的目录路径
       */
      dirPath: string;
      /**
       * 是否递归删除目录
       * @description 如果为 true，则删除该目录和该目录下的所有子目录以及文件。
       * @default false
       */
      recursive?: boolean;
    }): {
      success: true;
    };
    /**
     * 同步删除目录
     * @see https://opendocs.alipay.com/mini/api/024ytx
     */
    rmdirSync(
      dirPath: string,
      recursive: boolean
    ): {
      success: true;
    };
    /**
     * 保存临时文件到本地
     * @description 此接口会移动临时文件，因此调用成功后，tempFilePath 将不可用
     * @see https://opendocs.alipay.com/mini/api/022b6n
     */
    saveFile(object: {
      /**
       * 临时存储文件路径
       */
      tempFilePath: string;
      /**
       * 要存储的文件路径
       */
      filePath?: string;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 存储后的文件路径
         */
        savedFilePath: string;
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
      ): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * 存储后的文件路径
               */
              savedFilePath: string;
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
            )
      ): void;
    }): Promise<{
      /**
       * 存储后的文件路径
       */
      savedFilePath: string;
    }>;
    /**
     * 同步保存临时文件到本地
     * @description 此接口会移动临时文件，因此调用成功后，tempFilePath 将不可用
     * @see https://opendocs.alipay.com/mini/api/02502a
     */
    saveFileSync(param: {
      /**
       * 临时存储文件路径
       */
      tempFilePath: string;
      /**
       * 要存储的文件路径
       */
      filePath?: string;
    }): IFileSystemManagerSaveFileSyncResponse;
    /**
     * 同步保存临时文件到本地
     * @description 此接口会移动临时文件，因此调用成功后，tempFilePath 将不可用
     * @see https://opendocs.alipay.com/mini/api/02502a
     */
    saveFileSync(
      tempFilePath: string,
      filePath: string
    ): IFileSystemManagerSaveFileSyncResponse;
    /**
     * 获取文件信息
     * @see https://opendocs.alipay.com/mini/api/022b6o
     */
    stat(object: {
      /**
       * 文件、目录路径
       */
      path: string;
      /**
       * 是否递归获取目录下的每个文件的 Stats 信息
       */
      recursive?: boolean;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 文件信息
         * @description 当 recursive 为 false 时，res.stats 是一个 Stats 对象。当 recursive 为 true 且 path 是一个目录的路径时，res.stats 是一个 Object，key 以 path 为根路径的相对路径，value 是该路径对应的 Stats 对象。
         */
        stats: IFileSystemManagerStatStats;
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
      ): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * 文件信息
               * @description 当 recursive 为 false 时，res.stats 是一个 Stats 对象。当 recursive 为 true 且 path 是一个目录的路径时，res.stats 是一个 Object，key 以 path 为根路径的相对路径，value 是该路径对应的 Stats 对象。
               */
              stats: IFileSystemManagerStatStats;
            }
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
            )
      ): void;
    }): Promise<{
      /**
       * 文件信息
       * @description 当 recursive 为 false 时，res.stats 是一个 Stats 对象。当 recursive 为 true 且 path 是一个目录的路径时，res.stats 是一个 Object，key 以 path 为根路径的相对路径，value 是该路径对应的 Stats 对象。
       */
      stats: IFileSystemManagerStatStats;
    }>;
    /**
     * 同步获取文件信息
     * @see https://opendocs.alipay.com/mini/api/024whe
     */
    statSync(param: {
      /**
       * 文件、目录路径
       */
      path: string;
      /**
       * 是否递归获取目录下的每个文件的 Stats 信息
       */
      recursive?: boolean;
    }): IFileSystemManagerStatSyncResponse;
    /**
     * 同步获取文件信息
     * @see https://opendocs.alipay.com/mini/api/024whe
     */
    statSync(
      path: string,
      recursive: boolean
    ): IFileSystemManagerStatSyncResponse;
    /**
     * 删除文件
     * @see https://opendocs.alipay.com/mini/api/022b6p
     */
    unlink(object: {
      /**
       * 文件路径
       */
      filePath: string;
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
            }
      ): void;
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
            )
      ): void;
    }): Promise<{
      /**
       * 是否成功
       */
      success: true;
    }>;
    /**
     * 同步删除文件
     * @see https://opendocs.alipay.com/mini/api/024whc
     */
    unlinkSync(param: {
      /**
       * 文件路径
       */
      filePath: string;
    }): {
      success: true;
    };
    /**
     * 同步删除文件
     * @see https://opendocs.alipay.com/mini/api/024whc
     */
    unlinkSync(filePath: string): {
      success: true;
    };
    /**
     * 解压文件
     * @see https://opendocs.alipay.com/mini/api/0229q3
     */
    unzip(object: {
      /**
       * 源文件路径
       * @description 只可以是 zip 压缩文件
       */
      zipFilePath: string;
      /**
       * 目标路径
       */
      targetPath: string;
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
            }
      ): void;
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
            )
      ): void;
    }): Promise<{
      /**
       * 是否成功
       */
      success: true;
    }>;
    /**
     * 用于写文件
     * @see https://opendocs.alipay.com/mini/api/022b6s
     */
    writeFile(object: {
      /**
       * 要写入的文件路径
       */
      filePath: string;
      /**
       * 要写入的文本或二进制数据
       */
      data: string | ArrayBuffer;
      /**
       * 指定写入文件的字符编码
       */
      encoding?:
        | 'ascii'
        | 'base64'
        | 'hex'
        | 'binary'
        | 'ucs2'
        | 'ucs-2'
        | 'utf16le'
        | 'utf-16le';
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
            }
      ): void;
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
            )
      ): void;
    }): Promise<{
      /**
       * 是否成功
       */
      success: true;
    }>;
    /**
     * 同步用于写文件
     * @see https://opendocs.alipay.com/mini/api/024whd
     */
    writeFileSync(param: {
      /**
       * 要写入的文件路径
       */
      filePath: string;
      /**
       * 要写入的文本或二进制数据
       */
      data: string | ArrayBuffer;
      /**
       * 指定写入文件的字符编码
       */
      encoding?:
        | 'ascii'
        | 'base64'
        | 'hex'
        | 'binary'
        | 'ucs2'
        | 'ucs-2'
        | 'utf16le'
        | 'utf-16le';
    }): {
      success: true;
    };
    /**
     * 同步用于写文件
     * @see https://opendocs.alipay.com/mini/api/024whd
     */
    writeFileSync(
      filePath: string,
      data: string | ArrayBuffer,
      encoding:
        | 'ascii'
        | 'base64'
        | 'hex'
        | 'binary'
        | 'ucs2'
        | 'ucs-2'
        | 'utf16le'
        | 'utf-16le'
    ): {
      success: true;
    };
    /**
     * 压缩文件
     */
    zip(object: {
      /**
       * 源文件路径
       */
      zipFilePaths: string;
      /**
       * 目标路径
       */
      targetPath: string;
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
            }
      ): void;
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
            )
      ): void;
    }): Promise<{
      /**
       * 是否成功
       */
      success: true;
    }>;
  }
  export interface WebViewContext {
    /**
     * 小程序向 <web-view> 组件发送消息
     * @description 配合 <web-view> 中提供的 `my.postMessage` 可以实现小程序和 <web-view> 网页的双向通信。
     */
    postMessage(message: Record<string, unknown>): void;
  }
  export interface Animation {
    /**
     * 设置动画背景色
     */
    backgroundColor(color: string): this;
    /**
     * 设置动画 bottom 偏移
     */
    bottom(length: string | number): this;
    /**
     * 导出动画队列
     * @description export 方法每次调用后会清掉之前的动画操作
     */
    export(): {};
    /**
     * 设置动画高度
     */
    height(length: string | number): this;
    /**
     * 设置动画 left 偏移
     */
    left(length: string | number): this;
    /**
     * 设置动画透明度
     */
    opacity(opacity: number): this;
    /**
     * 设置动画 right 偏移
     */
    right(length: string | number): this;
    /**
     * 设置动画从固定二维轴顺时针旋转指定角度
     */
    rotate(deg: string | number): this;
    /**
     * 设置动画从固定三维轴顺时针旋转指定角度
     */
    rotate3d(
      x: string | number,
      y: string | number,
      z: string | number,
      deg: string | number
    ): this;
    /**
     * 设置动画以 X 轴顺时针旋转指定角度
     */
    rotateX(deg: string | number): this;
    /**
     * 设置动画以 Y 轴顺时针旋转指定角度
     */
    rotateY(deg: string | number): this;
    /**
     * 设置动画以 Z 轴顺时针旋转指定角度
     */
    rotateZ(deg: string | number): this;
    /**
     * 设置动画二维缩放
     */
    scale(x: number, y: number): this;
    /**
     * 设置动画三维缩放
     */
    scale3d(
      sx: string | number,
      sy: string | number,
      sz: string | number
    ): this;
    /**
     * 设置动画以 X 轴缩放
     */
    scaleX(x: number): this;
    /**
     * 设置动画以 Y 轴缩放
     */
    scaleY(y: number): this;
    /**
     * 设置动画以 Z 轴缩放
     */
    scaleZ(z: string | number): this;
    /**
     * 设置动画二维倾斜变换
     */
    skew(x: string | number, y: string | number): this;
    /**
     * 设置动画以 X 轴倾斜变换
     */
    skewX(x: string | number): this;
    /**
     * 设置动画以 Y 轴倾斜变换
     */
    skewY(y: string | number): this;
    /**
     * 完成一组动画
     * @description 可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。
     */
    step(param: {
      /**
       * 动画持续时间，单位 ms
       * @default 400
       */
      duration?: number;
      /**
       * 动画的效果
       * @default "linear"
       */
      timeFunction?: string;
      /**
       * 动画延迟时间，单位 ms
       */
      delay?: number;
      /**
       * 动画变形的原点
       * @default "50% 50% 0"
       */
      transformOrigin?: string;
    }): this;
    /**
     * 设置动画 top 偏移
     */
    top(length: string | number): this;
    /**
     * 设置动画对二维方向平移变换
     */
    translate(x: number, y: number): this;
    /**
     * 设置动画对三维方向平移变换
     */
    translate3d(
      tx: string | number,
      ty: string | number,
      tz: string | number
    ): this;
    /**
     * 设置动画对 X 轴平移变换
     */
    translateX(x: number): this;
    /**
     * 设置动画对 Y 轴平移变换
     */
    translateY(y: number): this;
    /**
     * 设置动画对 Z 轴平移变换
     */
    translateZ(z: string | number): this;
    /**
     * 设置动画宽度
     */
    width(length: string | number): this;
  }
  export interface SelectorQuery {
    /**
     * 将当前选择节点的位置信息放入查询结果
     * @see https://opendocs.alipay.com/mini/api/na4yun
     */
    boundingClientRect(): this;
    /**
     * 添加节点 Context 实例查询请求
     * @see https://opendocs.alipay.com/mini/api/021yfe
     */
    context(callback: (res: unknown) => void): this;
    /**
     * 将查询结果放入 Callback 回调中
     * @see https://opendocs.alipay.com/mini/api/baz2hg
     */
    exec(callback: (res: ArrayLike<any>) => void): void;
    /**
     * 获取节点的指定字段信息
     * @see https://opendocs.alipay.com/mini/api/021zn2
     */
    fields(
      option: ISelectorQueryFieldsOption,
      callback?: (res: unknown) => void
    ): this;
    /**
     * 将选择器的选取范围更改为自定义组件内
     */
    in(component: unknown): this;
    /**
     * 获取 Node 节点实例
     * @description 目前仅支持 [Canvas](Canvas) 节点的获取
     * @see https://opendocs.alipay.com/mini/api/node
     */
    node(callback: (res: unknown) => void): this;
    /**
     * 将当前选择节点的滚动信息放入查询结果
     * @see https://opendocs.alipay.com/mini/api/euyxnr
     */
    scrollOffset(callback?: (res: unknown) => void): this;
    /**
     * 选择当前第一个匹配选择器的节点
     * @see https://opendocs.alipay.com/mini/api/mwo97h
     */
    select(selector: string): this;
    /**
     * 选择所有匹配选择器的节点
     * @see https://opendocs.alipay.com/mini/api/aygfvh
     */
    selectAll(selector: string): this;
    /**
     * 选择窗口对象
     * @see https://opendocs.alipay.com/mini/api/kwbegi
     */
    selectViewport(): this;
  }
  export interface MapContext {
    /**
     * 创建自定义图片图层
     * @description 图片会随着地图缩放而缩放
     */
    addGroundOverlay(object: {
      /**
       * 图片图层 id
       */
      id: string;
      /**
       * 图片路径
       * @description 支持网络图片、临时路径、代码包路径
       */
      image: string;
      /**
       * 图片覆盖的经纬度范围
       */
      'include-points': IMapContextAddGroundOverlayIncludePoints[];
      /**
       * 是否可见
       * @default true
       */
      visible?: boolean;
      /**
       * 图层绘制顺序
       * @default 0
       */
      zIndex?: number;
      /**
       * 图层透明度
       * @default 1
       */
      alpha?: number;
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
     * 添加 marker
     */
    addMarkers(object: {
      /**
       * 要添加的 marker
       */
      markers: IMapContextAddMarkersMarkers[];
      /**
       * 是否先清空地图上所有 marker
       * @default false
       */
      clear?: boolean;
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
     * 通过给定坐标点序列计算路径长度及特定距离坐标点
     * @description 计算由一系列坐标点所定义的路径的长度，并可计算出该路径上距起始点指定距离的点的坐标。
     * @see https://opendocs.alipay.com/mini/00nfnc
     */
    calculateDistance(object: {
      /**
       * 路线中点的经纬度数组。
       */
      points: IMapContextCalculateDistancePoints[];
      /**
       * 是否需要计算总距离。
       * @default true
       */
      exportTotalDistance?: boolean;
      /**
       * 目标距离（直线距离）数组。
       */
      targetDistances?: number[];
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 总路径长度。（如果传入的 exportTotalDistance 为 false，则不返回 distance。）
         */
        distance: number;
        /**
         * 符合目标距离的点，对应的经纬度。
         */
        targetPoints: IMapContextCalculateDistanceTargetPoints[];
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
               * 总路径长度。（如果传入的 exportTotalDistance 为 false，则不返回 distance。）
               */
              distance: number;
              /**
               * 符合目标距离的点，对应的经纬度。
               */
              targetPoints: IMapContextCalculateDistanceTargetPoints[];
            }
          | {
              error?: number;
              errorMessage?: string;
            }
      ): void;
    }): Promise<{
      /**
       * 总路径长度。（如果传入的 exportTotalDistance 为 false，则不返回 distance。）
       */
      distance: number;
      /**
       * 符合目标距离的点，对应的经纬度。
       */
      targetPoints: IMapContextCalculateDistanceTargetPoints[];
    }>;
    /**
     * 添加、删除、更新指定的 marker
     * @see https://opendocs.alipay.com/mini/00k9uj
     */
    changeMarkers(object: {
      /**
       * 需要添加的 marker 数组
       */
      add: IMapContextChangeMarkersAdd[];
      /**
       * 需要删除的 marker 数组
       */
      remove: IMapContextChangeMarkersRemove[];
      /**
       * 需要更新的 marker 数组
       */
      update: IMapContextChangeMarkersUpdate[];
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
     * 清除地图上的步行导航路线
     * @see https://opendocs.alipay.com/mini/api/qb6sf9
     */
    clearRoute(object: {
      /**
       * 组件 id
       */
      element: string;
      /**
       * 操作类型
       */
      actionType: string;
      /**
       * 数据
       */
      data: Record<string, unknown>;
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
     * 设置所有手势是否可用
     * @see https://opendocs.alipay.com/mini/api/sgwf36
     */
    gestureEnable(object: {
      /**
       * 指定手势是否可用
       */
      isGestureEnable: 0 | 1;
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
     * 获取当前地图中心位置
     * @see https://opendocs.alipay.com/mini/api/vc2gdt
     */
    getCenterLocation(object: {
      /**
       * 组件 id
       */
      element: string;
      /**
       * 操作类型
       */
      actionType: string;
      /**
       * 数据
       */
      data: Record<string, unknown>;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 纬度
         */
        latitude: number;
        /**
         * 经度
         */
        longitude: number;
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
               * 纬度
               */
              latitude: number;
              /**
               * 经度
               */
              longitude: number;
            }
          | {
              error?: number;
              errorMessage?: string;
            }
      ): void;
    }): Promise<{
      /**
       * 纬度
       */
      latitude: number;
      /**
       * 经度
       */
      longitude: number;
    }>;
    /**
     * 获取地图的属性信息
     * @see https://opendocs.alipay.com/mini/00nfn7
     */
    getMapProperties(object?: {
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 是否是 3D 地图引擎
         */
        is3d: number;
        /**
         * 是否支持动画
         */
        isSupportAnim: boolean;
        /**
         * 地图中使用的 SDK 名称
         */
        sdkName: string;
        /**
         * 地图中使用的 SDK 版本号
         */
        sdkVersion: string;
        /**
         * 是否支持海外地图
         */
        isSupportOversea: boolean;
        /**
         * 是否需要 7.x 版本自定义地图样式配置文件
         */
        needStyleV7: boolean;
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
               * 是否是 3D 地图引擎
               */
              is3d: number;
              /**
               * 是否支持动画
               */
              isSupportAnim: boolean;
              /**
               * 地图中使用的 SDK 名称
               */
              sdkName: string;
              /**
               * 地图中使用的 SDK 版本号
               */
              sdkVersion: string;
              /**
               * 是否支持海外地图
               */
              isSupportOversea: boolean;
              /**
               * 是否需要 7.x 版本自定义地图样式配置文件
               */
              needStyleV7: boolean;
            }
          | {
              error?: number;
              errorMessage?: string;
            }
      ): void;
    }): Promise<{
      /**
       * 是否是 3D 地图引擎
       */
      is3d: number;
      /**
       * 是否支持动画
       */
      isSupportAnim: boolean;
      /**
       * 地图中使用的 SDK 名称
       */
      sdkName: string;
      /**
       * 地图中使用的 SDK 版本号
       */
      sdkVersion: string;
      /**
       * 是否支持海外地图
       */
      isSupportOversea: boolean;
      /**
       * 是否需要 7.x 版本自定义地图样式配置文件
       */
      needStyleV7: boolean;
    }>;
    /**
     * 获取地图的属性信息
     * @see https://opendocs.alipay.com/mini/00nbqs
     */
    getRegion(object?: {
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 地图的西南角经纬度
         */
        southwest: IMapContextGetRegionSouthwest;
        /**
         * 地图的东北角经纬度
         */
        northeast: IMapContextGetRegionNortheast;
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
               * 地图的西南角经纬度
               */
              southwest: IMapContextGetRegionSouthwest;
              /**
               * 地图的东北角经纬度
               */
              northeast: IMapContextGetRegionNortheast;
            }
          | {
              error?: number;
              errorMessage?: string;
            }
      ): void;
    }): Promise<{
      /**
       * 地图的西南角经纬度
       */
      southwest: IMapContextGetRegionSouthwest;
      /**
       * 地图的东北角经纬度
       */
      northeast: IMapContextGetRegionNortheast;
    }>;
    /**
     * 获取当前地图的旋转角
     * @see https://opendocs.alipay.com/mini/api/getrotate
     */
    getRotate(object?: {
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 旋转角
         */
        rotate: number;
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
               * 旋转角
               */
              rotate: number;
            }
          | {
              error?: number;
              errorMessage?: string;
            }
      ): void;
    }): Promise<{
      /**
       * 旋转角
       */
      rotate: number;
    }>;
    /**
     * 获取地图的缩放级别
     * @see https://opendocs.alipay.com/mini/api/getScale
     */
    getScale(object?: {
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 缩放级别
         * @description 取值范围为 5-18
         * @default 16
         */
        scale: number;
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
               * 缩放级别
               * @description 取值范围为 5-18
               * @default 16
               */
              scale: number;
            }
          | {
              error?: number;
              errorMessage?: string;
            }
      ): void;
    }): Promise<{
      /**
       * 缩放级别
       * @description 取值范围为 5-18
       * @default 16
       */
      scale: number;
    }>;
    /**
     * 获取当前地图的倾斜角
     * @see https://opendocs.alipay.com/mini/api/getskew
     */
    getSkew(object?: {
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 倾斜角
         * @description 取值范围为 0~60°。
         */
        skew: number;
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
               * 倾斜角
               * @description 取值范围为 0~60°。
               */
              skew: number;
            }
          | {
              error?: number;
              errorMessage?: string;
            }
      ): void;
    }): Promise<{
      /**
       * 倾斜角
       * @description 取值范围为 0~60°。
       */
      skew: number;
    }>;
    /**
     * 缩放视野到指定可视区域
     * @see https://opendocs.alipay.com/mini/api/includepoints
     */
    includePoints(object: {
      /**
       * 要显示在可视区域内的坐标点列表
       */
      points: IMapContextIncludePointsPoints[];
      /**
       * 坐标点形成的矩形边缘到地图边缘的距离
       * @description 格式为 [上，右，下，左]，如果数据只有一项，则上下左右的 padding 一致
       */
      padding?: number[];
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
     * 初始化点聚合的配置
     * @description 未调用时采用默认配置
     */
    initMarkerCluster(object: {
      /**
       * 聚合算法可聚合的缩放级别
       */
      clusterRanges: IMapContextInitMarkerClusterClusterRanges[];
      /**
       * 聚合算法的可聚合距离
       * @description 即距离小于该值的点会聚合至一起，以像素为单位
       * @default 50
       */
      clusterDistance?: number;
      /**
       * 将 marker 聚合后的数量应用到聚合样式中
       * @description 配合 iconLayout 使用
       */
      referenceParam?: string;
      /**
       * 使用“Map高级定制渲染”进行聚合点样式自定义
       */
      iconLayout?: IMapContextInitMarkerClusterIconLayout;
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
     * 将地图经纬度坐标系转换成屏幕坐标系
     * @see https://opendocs.alipay.com/mini/api/mapToScreen
     */
    mapToScreen(object: {
      /**
       * 纬度
       */
      latitude: number;
      /**
       * 经度
       */
      longitude: number;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 横坐标
         */
        x: number;
        /**
         * 纵坐标
         */
        y: number;
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
               * 横坐标
               */
              x: number;
              /**
               * 纵坐标
               */
              y: number;
            }
          | {
              error?: number;
              errorMessage?: string;
            }
      ): void;
    }): Promise<{
      /**
       * 横坐标
       */
      x: number;
      /**
       * 纵坐标
       */
      y: number;
    }>;
    /**
     * 移动视野到定位点并恢复到默认缩放级别
     * @description 需要配合 map 组件 的 show-location 使用。
     * @see https://opendocs.alipay.com/mini/api/ans8wt
     */
    moveToLocation(object: {
      /**
       * 纬度
       */
      latitude: number;
      /**
       * 经度
       */
      longitude: number;
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
     * 判断矩形区域是否包含传入的经纬度点
     * @see https://opendocs.alipay.com/mini/api/polygonContainsPoint
     */
    polygonContainsPoint(object: {
      /**
       * 矩形区域的经纬度范围
       */
      polygon: IMapContextPolygonContainsPointPolygon[];
      /**
       * 经纬度度的值
       */
      point: IMapContextPolygonContainsPointPoint;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 是否在矩形区域内
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
               * 是否在矩形区域内
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
       * 是否在矩形区域内
       */
      success: boolean;
    }>;
    /**
     * 移除自定义图片图层
     */
    removeGroundOverlay(object: {
      /**
       * 图片图层 id
       */
      id: string;
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
     * 移除 marker
     */
    removeMarkers(object: {
      /**
       * marker 的 id 集合
       */
      markerIds: number[];
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
     * 将屏幕坐标系转换成地图经纬度坐标系
     * @see https://opendocs.alipay.com/mini/api/screenToMap
     */
    screenToMap(object: {
      /**
       * 横坐标
       */
      x: number;
      /**
       * 纵坐标
       */
      y: number;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 纬度
         */
        latitude: number;
        /**
         * 经度
         */
        longitude: number;
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
               * 纬度
               */
              latitude: number;
              /**
               * 经度
               */
              longitude: number;
            }
          | {
              error?: number;
              errorMessage?: string;
            }
      ): void;
    }): Promise<{
      /**
       * 纬度
       */
      latitude: number;
      /**
       * 经度
       */
      longitude: number;
    }>;
    /**
     * 设置地图中心点偏移
     * @description 向后向下为增长，屏幕比例范围为 (0~1)，默认偏移为 [0.5, 0.5]。
     * @see https://opendocs.alipay.com/mini/api/setcenteroffset
     */
    setCenterOffset(object: {
      /**
       * 偏移量
       */
      offset: number[];
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
     * 设置地图主题类型
     * @see https://opendocs.alipay.com/mini/api/setmaptype
     */
    setMapType(object: {
      /**
       * 地图主题类型
       * @description 支持类型如下：0：标准地图；1：卫星地图。
       */
      mapType: 0 | 1;
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
     * 设置地图属性
     */
    setProps(object?: {
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
     * 默认规划步行路线
     * @description 只能显示一条。
     * @see https://opendocs.alipay.com/mini/api/uwffxx
     */
    showRoute(object: {
      /**
       * 搜索类型
       * @default walk
       */
      searchType?: 'walk' | 'bus' | 'drive' | 'ride';
      /**
       * 起点纬度
       */
      startLat: number;
      /**
       * 起点经度
       */
      startLng: number;
      /**
       * 终点纬度
       */
      endLat: number;
      /**
       * 终点经度
       */
      endLng: number;
      /**
       * 终点经度
       * @description 仅驾车规划有效，即 searchType=“drive”时有效。
       */
      throughPoints?: IMapContextShowRouteThroughPoints[];
      /**
       * 路线颜色
       * @description 该值仅在 2D 地图中生效。
       */
      routeColor?: string;
      /**
       * 路线纹理
       */
      iconPath?: string;
      /**
       * 纹理宽度
       */
      iconWidth?: number;
      /**
       * 路线宽度
       * @description 在不设置纹理时有效。
       */
      routeWidth?: number;
      /**
       * 覆盖物的 Z 轴坐标
       */
      zIndex?: number;
      /**
       * 模式
       * @description 仅在驾车模式和公交模式支持。
       */
      mode?: EMapContextShowRouteMode;
      /**
       * 公交模式下必填
       */
      city?: string;
      /**
       * 公交跨城模式下必填
       */
      destinationCity?: string;
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
     * 设置指南针是否可见
     * @see https://opendocs.alipay.com/mini/api/rcsrn9
     */
    showsCompass(object: {
      /**
       * 指南针是否可见
       * @description 1：可见 0：不可见
       */
      isShowsCompass: 0 | 1;
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
     * 设置比例尺控件是否可见
     * @see https://opendocs.alipay.com/mini/api/gxk4r0
     */
    showsScale(object: {
      /**
       * 比例尺控件是否可见
       * @description 1：可见 0：不可见。
       */
      isShowsScale: 0 | 1;
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
     * 指定轨迹动画
     * @see https://opendocs.alipay.com/mini/00nd0e
     */
    smoothDrawPolyline(object: {
      /**
       * 执行动画的路线 id。
       */
      polylineId: number;
      /**
       * 动画路线的经纬度集合
       */
      points: IMapContextSmoothDrawPolylinePoints[];
      /**
       * 动画执行时间，毫秒（ms）
       * @default 5000
       */
      duration?: number;
      /**
       * 轨迹动画的颜色
       */
      color?: string;
      /**
       * 路线宽度
       */
      width?: number;
      /**
       * 是否虚线
       */
      dottedLine?: boolean;
      /**
       * 项目目录下的图片路径
       * @description 可以用相对路径写法，以 `'/'` 开头则表示相对小程序根目录， 如果有 `iconPath`，会忽略 `color`。但是 `iconPath` 可以和 `colorList` 联合使用，这样纹理会浮在彩虹线上方，为避免覆盖彩虹线，纹理图片背景色可以设置透明。
       */
      iconPath?: string;
      /**
       * 线的纹理宽度
       */
      iconWidth?: number;
      /**
       * z 轴坐标
       */
      zIndex?: number;
      /**
       * 彩虹线
       * @description 分段依据 `points`。例如 `points` 有 `5` 个点，那么 `colorList` 就应该传 `4` 个颜色值，依此类推。如果 `colorList` 数量小于 `4`，那么剩下的线路颜色和最后一个颜色一样。
       */
      colorList?: string[];
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
     * 指定 marker 动画
     * @see https://opendocs.alipay.com/mini/00nedv
     */
    smoothMoveMarker(object: {
      /**
       * 执行动画的 markerId
       * @description 确保此时 marker 已经在地图上。
       */
      markerId: number;
      /**
       * 传入 marker 对象
       */
      markerData?: IMapContextSmoothMoveMarkerMarkerData;
      /**
       * 动画路线的经纬度集合
       */
      points: IMapContextSmoothMoveMarkerPoints[];
      /**
       * 动画执行时间
       * @default 5000
       */
      duration?: number;
      /**
       * 指定需要 callback 的目标距离数组
       */
      targetDistances?: number[];
      /**
       * 指定操作动画
       */
      action?: 'start' | 'stop';
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
     * 指定轨迹动画
     * @see https://opendocs.alipay.com/mini/00nd0e
     */
    smoothMovePolyline(object: {
      /**
       * 执行动画的路线 id。
       */
      polylineId: number;
      /**
       * 动画路线的经纬度集合
       */
      points: IMapContextSmoothMovePolylinePoints[];
      /**
       * 动画执行时间，毫秒（ms）
       * @default 5000
       */
      duration?: number;
      /**
       * 轨迹动画的颜色
       */
      color?: string;
      /**
       * 路线宽度
       */
      width?: number;
      /**
       * 是否虚线
       */
      dottedLine?: boolean;
      /**
       * 项目目录下的图片路径
       * @description 可以用相对路径写法，以 `'/'` 开头则表示相对小程序根目录， 如果有 `iconPath`，会忽略 `color`。但是 `iconPath` 可以和 `colorList` 联合使用，这样纹理会浮在彩虹线上方，为避免覆盖彩虹线，纹理图片背景色可以设置透明。
       */
      iconPath?: string;
      /**
       * 线的纹理宽度
       */
      iconWidth?: number;
      /**
       * z 轴坐标
       */
      zIndex?: number;
      /**
       * 彩虹线
       * @description 分段依据 `points`。例如 `points` 有 `5` 个点，那么 `colorList` 就应该传 `4` 个颜色值，依此类推。如果 `colorList` 数量小于 `4`，那么剩下的线路颜色和最后一个颜色一样。
       */
      colorList?: string[];
      /**
       * 指定操作动画
       */
      action?: 'start' | 'stop';
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
     * 指定轨迹动画
     * @see https://opendocs.alipay.com/mini/00nd0e
     */
    stopSmoothDrawPolyline(object: {
      /**
       * 执行动画的路线 id。
       */
      polylineId: number;
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
     * 平移 marker
     * @see https://opendocs.alipay.com/mini/api/sg7chr
     */
    translateMarker(object: {
      /**
       * 指定 marker
       */
      markerId: number;
      /**
       * 指定 marker 移动到的目标点
       */
      destination: IMapContextTranslateMarkerDestination;
      /**
       * 移动过程中是否自动旋转 marker
       * @default true
       */
      autoRotate: boolean;
      /**
       * marker 的旋转角度
       */
      rotate: number;
      /**
       * 动画持续时长
       * @default 1000
       */
      duration?: number;
      /**
       * 动画结束回调函数
       */
      animationEnd?: () => unknown;
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
     * 增量更新地图的接口
     * @see https://opendocs.alipay.com/mini/api/bph944
     */
    updateComponents(object?: {
      /**
       * 中心纬度
       */
      latitude?: number;
      /**
       * 中心经度
       */
      longitude?: number;
      /**
       * 缩放级别
       * @description 取值范围为 5-18
       * @default 16
       */
      scale?: number;
      /**
       * marker 覆盖物
       * @description 在地图上的一个点绘制图标
       */
      markers?: IMapContextUpdateComponentsMarkers[];
      /**
       * 路线覆盖物
       * @description 多个连贯点的集合（路线)
       */
      polyline?: IMapContextUpdateComponentsPolyline[];
      /**
       * 视野将进行小范围延伸包含传入的坐标
       */
      'include-points'?: IMapContextUpdateComponentsIncludePoints[];
      /**
       * 视野在地图 padding 范围内展示
       */
      'include-padding'?: IMapContextUpdateComponentsIncludePadding;
      /**
       * 设置
       */
      setting?: IMapContextUpdateComponentsSetting;
      /**
       * 命令
       * @description 可用于更新 marker 动画
       */
      command?: IMapContextUpdateComponentsCommand;
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
     * 增量更新地图的接口
     */
    updateGroundOverlay(object: {
      /**
       * 图片图层 id
       */
      id: number;
      /**
       * 图片路径
       * @description 支持网络图片、临时路径、代码包路径
       */
      image: string;
      /**
       * 图片覆盖的经纬度范围
       */
      'include-points': IMapContextUpdateGroundOverlayIncludePoints[];
      /**
       * 是否可见
       * @default true
       */
      visible?: boolean;
      /**
       * 图层绘制顺序
       * @default 0
       */
      zIndex?: number;
      /**
       * 图层透明度
       * @default 1
       */
      alpha?: number;
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
  }
  export interface CameraFrameListener {}
  export interface UpdateManager {
    /**
     * 强制小程序以新版本重启
     * @description 建议在收到 onUpdateReady 回调（当小程序新版本下载完成后）
     * @see https://opendocs.alipay.com/mini/api/neau2a
     */
    applyUpdate(object?: {
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
     * 取消监听向支付宝后台请求检查更新结果事件。
     */
    offCheckForUpdate(cb?: () => void): void;
    /**
     * 取消监听小程序更新失败事件
     */
    offUpdateFailed(cb?: () => void): void;
    /**
     * 取消监听小程序有版本更新事件
     */
    offUpdateReady(cb?: () => void): void;
    /**
     * 监听向支付宝后台请求检查更新结果事件。
     * @see https://opendocs.alipay.com/mini/api/nm7dtb
     */
    onCheckForUpdate(cb: (param: { hasUpdate: boolean }) => void): void;
    /**
     * 用于监听小程序更新失败事件。
     * @see https://opendocs.alipay.com/mini/api/sy1k0e
     */
    onUpdateFailed(cb: (param: { success: false }) => void): void;
    /**
     * 监听小程序有版本更新事件。
     * @see https://opendocs.alipay.com/mini/api/gfz316
     */
    onUpdateReady(cb: (param: { success: true }) => void): void;
  }
  export interface EventChannel {
    /**
     * 在页面间通信中触发一个事件
     * @see https://opendocs.alipay.com/mini/api/eventchannel.emit
     */
    emit(eventName: string, ...args: unknown[]): void;
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
  export interface Worker {
    /**
     * 向 Worker 线程发送消息
     * @see https://opendocs.alipay.com/mini/api/workerpostmessage
     */
    postMessage(message: Record<string, unknown>): void;
    /**
     * 在小程序中结束 Worker 线程
     * @see https://opendocs.alipay.com/mini/api/workerterminate
     */
    terminate(): void;
  }
  export interface IntersectionObserver {
    /**
     * 停止监听。回调函数将不再触发
     * @see https://opendocs.alipay.com/mini/api/xacdmn
     */
    disconnect(): void;
    /**
     * 指定查询的自定义组件范围
     */
    in(component: unknown): this;
    /**
     * 指定目标节点并开始监听相交状态变化情况
     * @see https://opendocs.alipay.com/mini/api/pra7yc
     */
    observe(
      targetSelector: string,
      callback: (payload: IIntersectionObserverObserveCallback) => void
    ): void;
    /**
     * 使用选择器指定一个节点，作为参照区域之一
     * @see https://opendocs.alipay.com/mini/api/oiuxz6
     */
    relativeTo(
      selector: string,
      margins: IIntersectionObserverRelativeToMargins
    ): this;
    /**
     * 指定页面显示区域作为参照区域之一
     * @see https://opendocs.alipay.com/mini/api/ghh846
     */
    relativeToViewport(param: {
      /**
       * 节点布局区域的上边界
       */
      top?: number;
      /**
       * 节点布局区域的右边界
       */
      right?: number;
      /**
       * 节点布局区域的下边界
       */
      bottom?: number;
      /**
       * 节点布局区域的左边界
       */
      left?: number;
    }): this;
  }
  export interface RecorderManager {
    /**
     * 停止监听声音的分贝变化回调事件
     * @see https://opendocs.alipay.com/mini/03hbnp
     */
    offDecibelChange(
      cb?: (arg: {
        /**
         * 分贝
         */
        decibel: number;
      }) => void
    ): void;
    /**
     * 取消监听录音错误事件
     * @see https://opendocs.alipay.com/mini/api/recordermanager/offerror
     */
    offError(
      cb?: (
        arg:
          | {
              error: 10;
              errorMessage: '获取权限失败';
            }
          | {
              error: 1001;
              errorMessage: 'Record canceled by page pause.';
            }
      ) => void
    ): void;
    /**
     * 取消监听已录制完制定帧大小的文件事件
     * @see https://opendocs.alipay.com/mini/api/recordermanager/offframerecorded
     */
    offFrameRecorded(
      cb?: (arg: {
        /**
         * 录音分片数据
         */
        frameBuffer: ArrayBuffer;
        /**
         * 当前帧是否正常录音结束前的最后一帧
         */
        isLastFrame: boolean;
      }) => void
    ): void;
    /**
     * 取消监听录音暂停事件
     * @see https://opendocs.alipay.com/mini/api/recordermanager/offpause
     */
    offPause(cb?: () => void): void;
    /**
     * 取消监听录音继续事件
     * @see https://opendocs.alipay.com/mini/api/recordermanager/offresume
     */
    offResume(cb?: () => void): void;
    /**
     * 取消监听录音开始事件
     * @see https://opendocs.alipay.com/mini/api/recordermanager/offstart
     */
    offStart(cb?: () => void): void;
    /**
     * 取消监听录音结束事件
     * @see https://opendocs.alipay.com/mini/api/recordermanager/offstop
     */
    offStop(
      cb?: (arg: {
        /**
         * 标识
         */
        identifier: string;
        /**
         * 录音文件的临时路径
         */
        tempFilePath: string;
        /**
         * 录音总时长
         */
        duration: number;
        /**
         * 文件大小
         */
        fileSize: number;
      }) => void
    ): void;
    /**
     * 监听声音的分贝变化回调事件
     * @see https://opendocs.alipay.com/mini/01acgm
     */
    onDecibelChange(
      cb: (arg: {
        /**
         * 分贝
         */
        decibel: number;
      }) => void
    ): void;
    /**
     * 监听录音错误事件
     * @see https://opendocs.alipay.com/mini/api/recordermanager/onerror
     */
    onError(
      cb: (
        arg:
          | {
              error: 10;
              errorMessage: '获取权限失败';
            }
          | {
              error: 1001;
              errorMessage: 'Record canceled by page pause.';
            }
      ) => void
    ): void;
    /**
     * 监听已录制完制定帧大小的文件事件。如果设置了 frameSize，则会回调此事件
     * @see https://opendocs.alipay.com/mini/api/recordermanager/onframerecorded
     */
    onFrameRecorded(
      cb: (arg: {
        /**
         * 录音分片数据
         */
        frameBuffer: ArrayBuffer;
        /**
         * 当前帧是否正常录音结束前的最后一帧
         */
        isLastFrame: boolean;
      }) => void
    ): void;
    /**
     * 监听录音暂停事件
     * @see https://opendocs.alipay.com/mini/api/recordermanager/onpause
     */
    onPause(cb: () => void): void;
    /**
     * 监听录音继续事件
     * @see https://opendocs.alipay.com/mini/api/recordermanager/onresume
     */
    onResume(cb: () => void): void;
    /**
     * 监听录音开始事件
     * @see https://opendocs.alipay.com/mini/api/recordermanager/onstart
     */
    onStart(cb: () => void): void;
    /**
     * 监听录音结束事件
     * @see https://opendocs.alipay.com/mini/api/recordermanager/onstop
     */
    onStop(
      cb: (arg: {
        /**
         * 标识
         */
        identifier: string;
        /**
         * 录音文件的临时路径
         */
        tempFilePath: string;
        /**
         * 录音总时长
         */
        duration: number;
        /**
         * 文件大小
         */
        fileSize: number;
      }) => void
    ): void;
    /**
     * 暂停录音
     * @see https://opendocs.alipay.com/mini/api/recordermanager/pause
     */
    pause(): void;
    /**
     * 继续录音
     * @see https://opendocs.alipay.com/mini/api/recordermanager/resume
     */
    resume(): void;
    /**
     * 开始录音
     * @see https://opendocs.alipay.com/mini/api/recordermanager/start
     */
    start(param: {
      /**
       * 录音的时长，单位 ms
       * @default 60000
       */
      duration?: number;
      /**
       * 最长录音的时长，单位分钟
       * @default 60
       */
      maxRecordTime?: number;
      /**
       * 最短录音的时长，单位分钟
       * @default 1
       */
      minRecordTime?: number;
      /**
       * 采样率
       */
      sampleRate?: number;
      /**
       * 编码码率
       */
      encodeBitRate?: number;
      /**
       * 录音通道数
       */
      numberOfChannels?: number;
      /**
       * 指定录音的音频输入源
       * @description 可通过 [my.getAvailableAudioSources]() 获取当前可用的音频源
       * @default "auto"
       */
      audioSource?: string;
      /**
       * 音频格式，支持格式：aac、mp3
       * @default "aac"
       */
      format?: string;
      /**
       * 指定帧大小，单位 KB
       */
      frameSize?: number;
      /**
       * 隐藏录音图标。
       * @default false
       */
      hideTips?: boolean;
    }): void;
    /**
     * 停止录音
     * @see https://opendocs.alipay.com/mini/api/recordermanager/stop
     */
    stop(): void;
  }
  export interface WebSocketTask {
    /**
     * 关闭 WebSocket 连接
     * @see https://opendocs.alipay.com/mini/api/vx19c3#SocketTask
     */
    close(object?: {
      /**
       * 关闭连接的状态号
       * @default 1000
       */
      code?: number;
      /**
       * 连接被关闭的原因
       * @description 这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）
       */
      reason?: string;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 消息内容
         */
        message: string;
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
               * 消息内容
               */
              message: string;
            }
          | {
              error?: number;
              errorMessage?: string;
            }
      ): void;
    }): Promise<{
      /**
       * 消息内容
       */
      message: string;
    }>;
    /**
     * 取消监听 WebSocket 关闭消息
     */
    offClose(
      cb?: (arg: {
        /**
         * 数据
         */
        data: IOnSocketTaskCloseData;
      }) => void
    ): void;
    /**
     * 取消监听 WebSocket 错误消息
     */
    offError(
      cb?: (arg: {
        /**
         * 数据
         */
        data: IOnSocketTaskErrorData;
        /**
         * 错误码
         */
        error: number;
      }) => void
    ): void;
    /**
     * 取消监听 WebSocket 消息
     * @see https://opendocs.alipay.com/mini/api/vx19c3#SocketTask
     */
    offMessage(
      cb?: (arg: {
        /**
         * 数据
         */
        data: IOnSocketTaskMessageData;
      }) => void
    ): void;
    /**
     * 取消监听 WebSocket open 事件
     * @see https://opendocs.alipay.com/mini/api/vx19c3#SocketTask
     */
    offOpen(
      cb?: (arg: {
        /**
         * 数据
         */
        data: IOnSocketTaskOpenData;
      }) => void
    ): void;
    /**
     * 监听 WebSocket 关闭消息
     * @see https://opendocs.alipay.com/mini/api/vx19c3#SocketTask
     */
    onClose(
      cb: (arg: {
        /**
         * 数据
         */
        data: IOnSocketTaskCloseData;
      }) => void
    ): void;
    /**
     * 监听 WebSocket 错误消息
     * @see https://opendocs.alipay.com/mini/api/vx19c3#SocketTask
     */
    onError(
      cb: (arg: {
        /**
         * 数据
         */
        data: IOnSocketTaskErrorData;
        /**
         * 错误码
         */
        error: number;
      }) => void
    ): void;
    /**
     * 监听 WebSocket 消息
     * @see https://opendocs.alipay.com/mini/api/vx19c3#SocketTask
     */
    onMessage(
      cb: (arg: {
        /**
         * 数据
         */
        data: IOnSocketTaskMessageData;
      }) => void
    ): void;
    /**
     * 监听 WebSocket open 事件
     * @see https://opendocs.alipay.com/mini/api/vx19c3#SocketTask
     */
    onOpen(
      cb: (arg: {
        /**
         * 数据
         */
        data: IOnSocketTaskOpenData;
      }) => void
    ): void;
    /**
     * 通过 WebSocket 连接发送数据
     * @see https://opendocs.alipay.com/mini/api/vx19c3#SocketTask
     */
    send(object: {
      /**
       * 需要发送的内容：普通的文本内容 string 或者经 Base64 编码后的 string。
       */
      data: string;
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
  }
  export interface InnerAudioContext {
    /**
     * 是否自动播放
     */
    autoplay: boolean;
    /**
     * 音频缓冲的时间点
     * @description 仅保证当前播放时间点到此时间点内容已缓冲（只读）
     */
    readonly buffered: number;
    /**
     * 优酷 ccode
     */
    ccode: string;
    /**
     * 音频当前播放的位置长度
     * @description 只有在当前有合法的 src 时返回。（只读）
     */
    readonly currentTime: number;
    /**
     * 音频的长度
     * @description 只有在当前有合法的 src 时返回（只读）
     */
    readonly duration: number;
    /**
     * 是否支持断点续播
     */
    isRecordAudioPlayState: boolean;
    /**
     * 是否自动循环播放
     */
    loop: boolean;
    /**
     * 是否遵循系统静音开关
     * @description 默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音
     */
    obeyMuteSwitch: boolean;
    /**
     * 当前是否暂停或停止状态（只读）
     */
    readonly paused: boolean;
    /**
     * 播放速度
     * @description 范围 0.5-2.0，默认为 1
     */
    playbackRate: number;
    /**
     * 音频资源的地址
     */
    src: string;
    /**
     * 开始播放的位置
     * @description 单位为秒，默认为 0
     */
    startTime: number;
    /**
     * 是否支持后台播放
     */
    supportBackgroundPlay: boolean;
    /**
     * 当前音量。范围 0~1。默认为 1
     */
    volume: number;
    /**
     * 销毁音频实例
     */
    destroy(): void;
    /**
     * 停止监听可以开始播放的事件
     */
    offCanPlay(cb?: (arg: {}) => void): void;
    /**
     * 停止监听播放完成的事件
     */
    offEnded(cb?: (arg: {}) => void): void;
    /**
     * 取消监听音频异常事件
     */
    offError(
      cb?: (
        arg:
          | {
              errCode: 10007;
              errMessage: 'Parse audio src error';
            }
          | {
              errCode: 10006;
              errMessage: 'Audio illegal';
            }
      ) => void
    ): void;
    /**
     * 停止监听播放下一首的事件
     */
    offNext(cb?: () => void): void;
    /**
     * 停止监听播放暂停的事件
     */
    offPause(cb?: (arg: {}) => void): void;
    /**
     * 停止监听播放开始事件
     */
    offPlay(cb?: (arg: {}) => void): void;
    /**
     * 停止监听播放上一首的事件
     */
    offPrev(cb?: () => void): void;
    /**
     * 停止监听跳转到进度的事件
     */
    offSeeked(cb?: (arg: {}) => void): void;
    /**
     * 停止监听开始跳转到进度的事件
     */
    offSeeking(cb?: (arg: {}) => void): void;
    /**
     * 停止监听播放停止的事件
     */
    offStop(cb?: (arg: {}) => void): void;
    /**
     * 停止监听时间更新事件
     */
    offTimeUpdate(cb?: (arg: {}) => void): void;
    /**
     * 停止监听音频还在准备中的事件
     */
    offWaiting(cb?: (arg: {}) => void): void;
    /**
     * 监听可以开始播放的事件，缓冲完成可以开始播放，但不保证后面可以流畅播放。
     */
    onCanPlay(cb: (arg: {}) => void): void;
    /**
     * 监听播放完成的事件
     */
    onEnded(cb: (arg: {}) => void): void;
    /**
     * 监听音频异常事件
     */
    onError(
      cb: (
        arg:
          | {
              errCode: 10007;
              errMessage: 'Parse audio src error';
            }
          | {
              errCode: 10006;
              errMessage: 'Audio illegal';
            }
      ) => void
    ): void;
    /**
     * 监听播放下一首的事件
     */
    onNext(cb: () => void): void;
    /**
     * 监听播放暂停的事件
     */
    onPause(cb: (arg: {}) => void): void;
    /**
     * 监听播放开始事件，播放过程中缓存不会再次触发
     */
    onPlay(cb: (arg: {}) => void): void;
    /**
     * 监听播放上一首的事件
     */
    onPrev(cb: () => void): void;
    /**
     * 监听跳转到进度的事件
     */
    onSeeked(cb: (arg: {}) => void): void;
    /**
     * 监听开始跳转到进度的事件
     */
    onSeeking(cb: (arg: {}) => void): void;
    /**
     * 监听播放停止的事件
     */
    onStop(cb: (arg: {}) => void): void;
    /**
     * 监听时间更新事件
     */
    onTimeUpdate(cb: (arg: {}) => void): void;
    /**
     * 监听音频还在准备中的事件，在缓冲期间会被触发多次
     */
    onWaiting(cb: (arg: {}) => void): void;
    /**
     * 暂停音频，再次播放会从暂停处播放
     */
    pause(): void;
    /**
     * 播放音频
     */
    play(): void;
    /**
     * 跳转到指定位置
     */
    seek(position: number): void;
    /**
     * 停止播放，再次播放会从重新播放
     */
    stop(): void;
  }
  export interface LottieContext {
    /**
     * 当前 Lottie 视图指定降级为展示 placeholder
     * @see https://opendocs.alipay.com/mini/07tewi
     */
    downgradeToPlaceholder(): void;
    /**
     * 填充 Lottie 参数
     */
    fillVariableValue(param: { [key: string]: any }): void;
    /**
     * 返回一次完整的 lottie 动画时间
     */
    getDuration(object?: {
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 总时长
         */
        duration: number;
        version?: string;
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
               * 总时长
               */
              duration: number;
              version?: string;
            }
          | {
              error?: number;
              errorMessage?: string;
            }
      ): void;
    }): Promise<{
      /**
       * 总时长
       */
      duration: number;
      version?: string;
    }>;
    /**
     * 获取 Lottie 渲染信息
     */
    getLottieInfo(object?: {
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 当前 Lottie 动画的宽度
         * ios 为 string 类型
         */
        w: number;
        /**
         * 当前 Lottie 动画的高度
         * ios 为 string 类型
         */
        h: number;
        /**
         * 当前 Lottie 模型的帧率（frame rate）
         * ios 为 string 类型
         */
        fr: number;
        /**
         * 渲染方式
         */
        renderType?: 'lottie' | 'skottie' | 'antmation' | 'mars' | 'video';
        /**
         * 小程序 View 是否使用同步接口创建
         */
        syncCreateView?: 'true' | 'false';
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
               * 当前 Lottie 动画的宽度
               * ios 为 string 类型
               */
              w: number;
              /**
               * 当前 Lottie 动画的高度
               * ios 为 string 类型
               */
              h: number;
              /**
               * 当前 Lottie 模型的帧率（frame rate）
               * ios 为 string 类型
               */
              fr: number;
              /**
               * 渲染方式
               */
              renderType?:
                | 'lottie'
                | 'skottie'
                | 'antmation'
                | 'mars'
                | 'video';
              /**
               * 小程序 View 是否使用同步接口创建
               */
              syncCreateView?: 'true' | 'false';
            }
          | {
              error?: number;
              errorMessage?: string;
            }
      ): void;
    }): Promise<{
      /**
       * 当前 Lottie 动画的宽度
       * ios 为 string 类型
       */
      w: number;
      /**
       * 当前 Lottie 动画的高度
       * ios 为 string 类型
       */
      h: number;
      /**
       * 当前 Lottie 模型的帧率（frame rate）
       * ios 为 string 类型
       */
      fr: number;
      /**
       * 渲染方式
       */
      renderType?: 'lottie' | 'skottie' | 'antmation' | 'mars' | 'video';
      /**
       * 小程序 View 是否使用同步接口创建
       */
      syncCreateView?: 'true' | 'false';
    }>;
    /**
     * 跳转至并从该进度开始播放
     * @see https://opendocs.alipay.com/mini/07t07e
     */
    goToAndPlay(param: {
      /**
       * 跳转至 value 并从该进度开始播放，value 值范围为 0 <= value <= 1。
       */
      value: number;
    }): void;
    /**
     * 跳转至并停在该进度
     * @see https://opendocs.alipay.com/mini/07sspx
     */
    goToAndStop(param: {
      /**
       * 跳转至 value 并停在该进度，value 值范围为 0 <= value <= 1。
       */
      value: number;
    }): void;
    /**
     * 暂停播放
     * @see https://opendocs.alipay.com/mini/07t07d
     */
    pause(): void;
    /**
     * 开始播放
     * @see https://opendocs.alipay.com/mini/07t1o3
     */
    play(): void;
    /**
     * 从最小到最大的 Frame 区间进行播放
     * @see https://opendocs.alipay.com/mini/07sqpx
     */
    playFromMinToMaxFrame(param: {
      /**
       * 最小帧
       */
      min: number;
      /**
       * 最大帧
       */
      max: number;
    }): void;
    /**
     * 从最小到最大的进度区间进行播放
     * @see https://opendocs.alipay.com/mini/07t52l
     */
    playFromMinToMaxProgress(param: {
      /**
       * 最小进度，值范围 0 <= min <= 1。
       */
      min: number;
      /**
       * 最大进度，值范围 0 <= max <= 1。
       */
      max: number;
    }): void;
    /**
     * 设置播放速度。正数为正向播放，负数负向播放
     * @see https://opendocs.alipay.com/mini/07t3xp
     */
    setSpeed(param: {
      /**
       * 播放速度（倍速），负数代表倒序播放
       */
      value: number;
    }): void;
    /**
     * 停止播放
     * @see https://opendocs.alipay.com/mini/07suia
     */
    stop(): void;
  }
  export interface BackgroundAudioManager {
    /**
     * 获取背景音频的音频缓冲时间点
     * @description 仅保证当前播放时间点到此时间点内容已缓冲（只读）
     */
    readonly buffered: number;
    /**
     * 获取/更新背景音频的播放渠道标识
     * @description 用于优酷
     */
    ccode: string;
    /**
     * 获取/更新背景音频的封面图
     * @description 用做原生音频播放器背景图。原生音频播放器中的分享功能，分享的卡片配图及背景也将使用该图。
     */
    coverImgUrl: string;
    /**
     * 获取背景音频当前播放位置
     * @description 单位 s。只有在当前有合法的 src 时返回。（只读）
     */
    readonly currentTime: number;
    /**
     * 获取背景音频的长度
     * @description 单位 s。只有在当前有合法的 src 时返回（只读）
     */
    readonly duration: number;
    /**
     * 获取/更新背景音频的专辑名
     * @description 原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。
     */
    epname: string;
    /**
     * 是否支持断点续播
     */
    isRecordAudioPlayState: boolean;
    /**
     * 获取/更新背景音频的暂停状态
     */
    readonly paused: boolean;
    /**
     * 获取/更新背景音频的播放速度
     * @description 范围 0.5-2.0，默认为 1。
     */
    playbackRate: number;
    /**
     * 获取/更新背景音频的歌手名
     */
    singer: string;
    /**
     * 获取/更新背景音频的资源地址
     */
    src: string;
    /**
     * 获取/更新背景音频的开始播放位置
     * @description （单位：s），默认为 0
     */
    startTime: number;
    /**
     * 获取/更新背景音频的音频标题
     * @description 用于做原生音频播放器音频标题。原生音频播放器中的分享功能，分享的卡片标题，也将使用该值。
     */
    title: string;
    /**
     * 获取/更新背景音频的音量
     * @description 范围 0~1。默认为 1
     */
    volume: number;
    /**
     * 获取/更新背景音频的页面链接
     * @description 原生音频播放器中的分享功能、分享出去的卡片简介将使用该值。
     */
    webUrl: string;
    /**
     * 停止监听可以开始播放的事件
     * @see https://opendocs.alipay.com/mini/07t9u2
     */
    offCanPlay(cb?: () => void): void;
    /**
     * 停止监听播放完成的事件
     * @see https://opendocs.alipay.com/mini/07sy8v
     */
    offEnded(cb?: () => void): void;
    /**
     * 停止监听播放下一首的事件
     * @see https://opendocs.alipay.com/mini/07tewk
     */
    offNext(cb?: () => void): void;
    /**
     * 停止监听播放暂停的事件
     * @see https://opendocs.alipay.com/mini/07t7hy
     */
    offPause(cb?: () => void): void;
    /**
     * 停止监听播放开始事件
     * @see https://opendocs.alipay.com/mini/07te1i
     */
    offPlay(cb?: () => void): void;
    /**
     * 停止监听播放上一首的事件
     * @see https://opendocs.alipay.com/mini/07sqpz
     */
    offPrev(cb?: () => void): void;
    /**
     * 停止监听跳转到进度的事件
     * @see https://opendocs.alipay.com/mini/07sy8u
     */
    offSeeked(cb?: () => void): void;
    /**
     * 停止监听开始跳转到进度的事件
     * @see https://opendocs.alipay.com/mini/07t07f
     */
    offSeeking(cb?: () => void): void;
    /**
     * 停止监听播放停止的事件
     * @see https://opendocs.alipay.com/mini/07tg7p
     */
    offStop(cb?: () => void): void;
    /**
     * 停止监听时间更新事件
     * @see https://opendocs.alipay.com/mini/07t3xr
     */
    offTimeUpdate(cb?: () => void): void;
    /**
     * 停止监听音频还在准备中的事件
     * @see https://opendocs.alipay.com/mini/07te1h
     */
    offWaiting(cb?: () => void): void;
    /**
     * 监听可以开始播放的事件
     * @description ，缓冲完成可以开始播放，但不保证后面可以流畅播放。
     * @see https://opendocs.alipay.com/mini/07tco2
     */
    onCanPlay(cb: () => void): void;
    /**
     * 监听播放完成的事件
     * @see https://opendocs.alipay.com/mini/07sz98
     */
    onEnded(cb: () => void): void;
    /**
     * 监听播放下一首的事件
     * @see https://opendocs.alipay.com/mini/07t311
     */
    onNext(cb: () => void): void;
    /**
     * 监听播放暂停的事件
     * @see https://opendocs.alipay.com/mini/07t9u4
     */
    onPause(cb: () => void): void;
    /**
     * 监听播放开始事件
     * @description 播放过程中缓存不会再次触发
     * @see https://opendocs.alipay.com/mini/07t9u3
     */
    onPlay(cb: () => void): void;
    /**
     * 监听播放上一首的事件
     * @see https://opendocs.alipay.com/mini/07sspy
     */
    onPrev(cb: () => void): void;
    /**
     * 监听跳转到进度的事件
     * @see https://opendocs.alipay.com/mini/07sz97
     */
    onSeeked(cb: () => void): void;
    /**
     * 监听开始跳转到进度的事件
     * @see https://opendocs.alipay.com/mini/07tewj
     */
    onSeeking(cb: () => void): void;
    /**
     * 监听播放停止的事件
     * @see https://opendocs.alipay.com/mini/07t8lv
     */
    onStop(cb: () => void): void;
    /**
     * 监听时间更新事件
     * @see https://opendocs.alipay.com/mini/07t3xq
     */
    onTimeUpdate(cb: () => void): void;
    /**
     * 监听音频还在准备中的事件，在缓冲期间会被触发多次
     * @see https://opendocs.alipay.com/mini/07t7hx
     */
    onWaiting(cb: () => void): void;
    /**
     * 暂停音频，再次播放会从暂停处播放
     * @see https://opendocs.alipay.com/mini/07tbao
     */
    pause(): void;
    /**
     * 播放音频
     * @see https://opendocs.alipay.com/mini/07t9u1
     */
    play(): void;
    /**
     * 跳转到指定位置
     * @see https://opendocs.alipay.com/mini/07t8lu
     */
    seek(position: number): void;
    /**
     * 停止播放，再次播放会从重新播放
     * @see https://opendocs.alipay.com/mini/07tco1
     */
    stop(): void;
  }
  export interface CanvasContext {
    /**
     * 使用内部方式描述颜色和样式的属性
     */
    fillStyle: string;
    /**
     * 当前字体样式的属性
     * @description 描述绘制文字时，当前字体样式的属性
     */
    font: string;
    /**
     * 字体大小
     */
    fontSize: number;
    /**
     * 设置图形和图片透明度的属性
     */
    globalAlpha: number;
    /**
     * 设置应用的合成操作的类型
     */
    globalCompositeOperation: 'source-over';
    /**
     * 设置线条的端点样式
     */
    lineCap: 'butt';
    /**
     * 设置虚线偏移量的属性
     * @description 例如可以实现 “蚂蚁线“ 的效果
     */
    lineDashOffset: number;
    /**
     * 设置 2 个（线段，圆弧，曲线）如何连接在一起的属性
     */
    lineJoin: 'round';
    /**
     * 设置线段厚度的属性（即线段的宽度）
     */
    lineWidth: number;
    /**
     * 设置斜接面限制比例的属性
     */
    miterLimit: number;
    /**
     * 描述画笔（绘制图形）颜色或者样式的属性
     */
    strokeStyle: string;
    /**
     * 文本的对齐方式的属性
     */
    textAlign: 'left';
    /**
     * 当前文本基线的属性
     */
    textBaseline: 'bottom';
    /**
     * 在 Canvas 上绘制圆弧路径
     * @description 圆弧路径的圆心在 (x, y) 位置，半径为 r ，根据anticlockwise （默认为顺时针）指定的方向从 startAngle 开始绘制，到 endAngle 结束。
     * @see https://opendocs.alipay.com/mini/api/lut4uo
     */
    arc(
      x: number,
      y: number,
      radius: number,
      startAngle: number,
      endAngle: number,
      anticlockwise?: boolean
    ): void;
    /**
     * 在 Canvas 上绘制圆弧路径
     * @description 根据控制点和半径绘制圆弧路径，使用当前的描点(前一个moveTo或lineTo等函数的止点)。根据当前描点与给定的控制点1连接的直线，和控制点1与控制点2连接的直线，作为使用指定半径的圆的切线，画出两条切线之间的弧线路径。
     * @see https://opendocs.alipay.com/mini/api/arcto
     */
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    /**
     * 在 Canvas 上开始一个新路径
     * @description 当你想创建一个新的路径时，调用此方法。
     * @see https://opendocs.alipay.com/mini/api/vk0ohr
     */
    beginPath(): void;
    /**
     * 在 Canvas 上绘制三次贝赛尔曲线路径
     * @description 该方法需要三个点。 第一、第二个点是控制点，第三个点是结束点。起始点是当前路径的最后一个点，绘制贝赛尔曲线前，可以通过调用 moveTo() 进行修改。
     * @see https://opendocs.alipay.com/mini/api/dzf516
     */
    bezierCurveTo(
      cp1x: number,
      cp1y: number,
      cp2x: number,
      cp2y: number,
      x: number,
      y: number
    ): void;
    /**
     * 清除 Canvas 矩形区域
     * @description 通过把像素设置为透明以达到擦除一个矩形区域的方法
     * @see https://opendocs.alipay.com/mini/api/xg3h06
     */
    clearRect(x: number, y: number, width: number, height: number): void;
    /**
     * 从 Canvas 中剪切任意形状和尺寸
     * @see https://opendocs.alipay.com/mini/api/rgl453
     */
    clip(): void;
    /**
     * 将笔点返回到当前子路径起始点的方法
     * @description 它尝试从当前点到起始点绘制一条直线。 如果图形已经是封闭的或者只有一个点，那么此方法不会做任何操作。
     * @see https://opendocs.alipay.com/mini/api/fg8c9b
     */
    closePath(): void;
    /**
     * 创建一个圆形的渐变色
     * @description 起点在圆心，终点在圆环。需要使用 addColorStop() 来指定渐变点，至少需要两个渐变点。
     * @see https://opendocs.alipay.com/mini/api/ix6opq
     */
    createCircularGradient(x: number, y: number, r: number): CanvasGradient;
    /**
     * 创建一个沿参数坐标指定的直线的渐变
     * @see https://opendocs.alipay.com/mini/api/qgb1mf
     */
    createLinearGradient(
      x0: number,
      y0: number,
      x1: number,
      y1: number
    ): CanvasGradient;
    /**
     * 使用指定的图像创建模式的方法
     * @see https://opendocs.alipay.com/mini/api/pattern
     */
    createPattern(image: string, repetition: string | null): CanvasPattern;
    /**
     * 绘制放射性渐变的方法
     * @description 根据参数确定两个圆的坐标，绘制放射性渐变的方法
     * @see https://opendocs.alipay.com/mini/api/radialgradient
     */
    createRadialGradient(
      x0: number,
      y0: number,
      r0: number,
      x1: number,
      y1: number,
      r1: number
    ): CanvasGradient;
    /**
     * 提交 Canvas 绘制指令
     * @description 用于将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中
     * @see https://opendocs.alipay.com/mini/api/he6iwx
     */
    draw(reserve?: boolean, callback?: () => void): void;
    /**
     * 在 Canvas 上绘制图像
     * @description 图像保持原始尺寸
     * @see https://opendocs.alipay.com/mini/api/pzmtqk
     */
    drawImage(
      image: string,
      sx: number,
      sy: number,
      sWidth: number,
      sHeight: number,
      dx: number,
      dy: number,
      dWidth: number,
      dHeight: number
    ): void;
    /**
     * 根据当前的填充样式填充当前或已存在的路径的方法
     * @see https://opendocs.alipay.com/mini/api/yywmib
     */
    fill(): void;
    /**
     * 绘制填充矩形的方法
     * @see https://opendocs.alipay.com/mini/api/vfpyra
     */
    fillRect(x: number, y: number, width: number, height: number): void;
    /**
     * 填充文本的方法
     * @see https://opendocs.alipay.com/mini/api/saf43s
     */
    fillText(text: string, x: number, y: number, maxWidth: number): void;
    /**
     * 异步返回 Canvas 指定区域像素数据
     * @description 返回一个 ImageData 对象，用来描述canvas区域隐含的像素数据
     * @see https://opendocs.alipay.com/mini/api/bukvhw
     */
    getImageData(object: {
      x: number;
      y: number;
      width: number;
      height: number;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        width: number;
        height: number;
        length: number;
        data: Uint8ClampedArray;
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
              width: number;
              height: number;
              length: number;
              data: Uint8ClampedArray;
            }
          | {
              error?: number;
              errorMessage?: string;
            }
      ): void;
    }): Promise<{
      width: number;
      height: number;
      length: number;
      data: Uint8ClampedArray;
    }>;
    /**
     * 获取  Canvas 线条虚线样式
     */
    getLineDash(): number[];
    /**
     * 使用直线连接子路径的终点到某个坐标的方法
     * @description 并不会真正地绘制。
     * @see https://opendocs.alipay.com/mini/api/zkno7s
     */
    lineTo(x: number, y: number): void;
    /**
     * 返回一个文本包含的信息
     * @see https://opendocs.alipay.com/mini/api/rn2r7f
     */
    measureText(text: string): {
      /**
       * 文本的宽度
       * @description 使用 CSS 像素计算的内联字符串的宽度
       */
      width: number;
    };
    /**
     * 将一个新的子路径的起始点移动到某个坐标的方法
     * @see https://opendocs.alipay.com/mini/api/avy1f9
     */
    moveTo(x: number, y: number): void;
    /**
     * 更新 Canvas 指定区域像素数据
     * @see https://opendocs.alipay.com/mini/api/pusaxg
     */
    putImageData(object: {
      data: Uint8ClampedArray;
      x: number;
      y: number;
      width: number;
      height: number;
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
     * 新增二次贝塞尔曲线路径的方法
     * @see https://opendocs.alipay.com/mini/api/rq2yds
     */
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    /**
     * 创建矩形路径的方法
     * @description 创建矩形路径的方法，矩形的起点位置是 (x, y) ，尺寸为 width 和 height。矩形的4个点通过直线连接，子路径做为闭合的标记，所以你可以填充或者描边矩形。
     * @see https://opendocs.alipay.com/mini/api/xgywt5
     */
    rect(x: number, y: number, w: number, h: number): void;
    /**
     * 将 canvas 恢复到最近的保存状态的方法
     * @description 通过在绘图状态栈中弹出顶端的状态, 将 canvas 恢复到最近的保存状态的方法
     * @see https://opendocs.alipay.com/mini/api/gwoqt0
     */
    restore(): void;
    /**
     * 在变换矩阵中增加旋转的方法
     * @see https://opendocs.alipay.com/mini/api/ncimzx
     */
    rotate(angle: number): void;
    /**
     * 保存 canvas 全部状态的方法
     * @description 通过将当前状态放入栈中, 保存 canvas 全部状态的方法
     * @see https://opendocs.alipay.com/mini/api/qnyf7h
     */
    save(): void;
    /**
     * 添加缩放变换的方法
     * @description 根据 x 水平方向和 y 垂直方向，为 canvas 单位添加缩放变换的方法
     * @see https://opendocs.alipay.com/mini/api/gp3kpy
     */
    scale(x: number, y: number): void;
    /**
     * 设置 Canvas 填充色
     * @see https://opendocs.alipay.com/mini/api/vyfyp2
     */
    setFillStyle(color: string | CanvasGradient | CanvasPattern): void;
    /**
     * 设置 Canvas 字体大小
     * @see https://opendocs.alipay.com/mini/api/mg4uir
     */
    setFontSize(fontSize: number): void;
    /**
     * 设置 Canvas 全局画笔透明度
     * @see https://opendocs.alipay.com/mini/api/cptvsl
     */
    setGlobalAlpha(alpha: number): void;
    /**
     * 设置 Canvas 线条端点样式
     * @see https://opendocs.alipay.com/mini/api/de22sq
     */
    setLineCap(lineCap: 'butt' | 'round' | 'square'): void;
    /**
     * 设置 Canvas 线条虚线样式
     * @see https://opendocs.alipay.com/mini/api/cvqcwt
     */
    setLineDash(segments: number[]): void;
    /**
     * 设置  Canvas 线条交点样式
     * @see https://opendocs.alipay.com/mini/api/sfqcgi
     */
    setLineJoin(lineJoin: 'round' | 'bevel' | 'miter'): void;
    /**
     * 设置 Canvas 线条的宽度
     * @see https://opendocs.alipay.com/mini/api/ugcrcq
     */
    setLineWidth(lineWidth: number): void;
    /**
     * 设置 Canvas 最大斜接长度
     * @description 斜接长度指的是在两条线交汇处内角和外角之间的距离。 仅当 setLineJoin() 为 miter 时有效。超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 显示。
     * @see https://opendocs.alipay.com/mini/api/vul12s
     */
    setMiterLimit(miterLimit: number): void;
    /**
     * 设置 Canvas 阴影的位置和颜色
     * @see https://opendocs.alipay.com/mini/api/btvtra
     */
    setShadow(
      offsetX: number,
      offsetY: number,
      blur: number,
      color: string
    ): void;
    /**
     * 设置 Canvas 描边颜色
     * @description 若没有设置，则默认颜色为 black。
     * @see https://opendocs.alipay.com/mini/api/lqmreg
     */
    setStrokeStyle(color: string | CanvasGradient | CanvasPattern): void;
    /**
     * 设置 Canvas 文本的对齐方式
     * @see https://opendocs.alipay.com/mini/api/rf1uma
     */
    setTextAlign(
      textAlign: 'left' | 'right' | 'start' | 'center' | 'end'
    ): void;
    /**
     * 设置 Canvas 文本的竖直对齐方式
     * @see https://opendocs.alipay.com/mini/api/wo3gqy
     */
    setTextBaseline(
      textBaseline:
        | 'bottom'
        | 'top'
        | 'alphabetic'
        | 'hanging'
        | 'ideographic'
        | 'middle'
    ): void;
    /**
     * 更新 Canvas 仿射变换矩阵
     * @description 使用单位矩阵重新设置当前的变换并调用变换的方法
     * @see https://opendocs.alipay.com/mini/api/wt6glg
     */
    setTransform(
      a: number,
      b: number,
      c: number,
      d: number,
      e: number,
      f: number
    ): void;
    /**
     * 用于画出当前路径的边框
     * @see https://opendocs.alipay.com/mini/api/pgahxv
     */
    stroke(): void;
    /**
     * 描绘一个的矩形的方法
     * @see https://opendocs.alipay.com/mini/api/vz04q8
     */
    strokeRect(x: number, y: number, width: number, height: number): void;
    /**
     * 绘制文本的方法
     * @see https://opendocs.alipay.com/mini/api/stroketext
     */
    strokeText(text: string, x: number, y: number, maxWidth: number): void;
    /**
     * 画布上的绘制内容以 data URI 的格式返回
     * @see https://opendocs.alipay.com/mini/api/vemgc6
     */
    toDataURL(object: {
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
     * 画布指定区域导出图片的方法
     * @see https://opendocs.alipay.com/mini/api/rod3ti
     */
    toTempFilePath(object?: {
      /**
       * 画布区域的左上角横坐标
       */
      x?: number;
      /**
       * 画布区域的左上角纵坐标
       */
      y?: number;
      /**
       * 画布区域的宽度
       */
      width?: number;
      /**
       * 画布区域的高度
       */
      height?: number;
      /**
       * 输出的图片的宽度
       */
      destWidth?: number;
      /**
       * 输出的图片的高度
       */
      destHeight?: number;
      /**
       * 目标文件的类型
       */
      fileType?: 'jpg' | 'png';
      /**
       * 图片的质量
       * @description 目前仅对 jpg 有效，取值范围为 (0, 1]，不在范围内时当作 1 处理。
       */
      quality?: number;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 生成文件的临时路径
         */
        tempFilePath: string;
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
               * 生成文件的临时路径
               */
              tempFilePath: string;
            }
          | {
              error?: number;
              errorMessage?: string;
            }
      ): void;
    }): Promise<{
      /**
       * 生成文件的临时路径
       */
      tempFilePath: string;
    }>;
    /**
     * 使用矩阵多次叠加当前变换的方法
     * @description 使用矩阵多次叠加当前变换的方法，矩阵由方法的参数进行描述
     * @see https://opendocs.alipay.com/mini/api/fv97do
     */
    transform(
      a: number,
      b: number,
      c: number,
      d: number,
      e: number,
      f: number
    ): void;
    /**
     * 对当前网格添加平移变换的方法
     * @see https://opendocs.alipay.com/mini/api/lgqkb2
     */
    translate(x: number, y: number): void;
  }
  export interface OffScreenCanvas {
    /**
     * 画布高度
     */
    readonly height: number;
    /**
     * 画布宽度
     */
    readonly width: number;
    /**
     * 取消由 requestAnimationFrame 添加的动画帧请求的方法
     */
    cancelAnimationFrame(requestId: number): void;
    /**
     * 创建一个图片对象的方法
     */
    createImage(): CanvasImage;
    /**
     * 在下次重绘时执行的方法
     */
    requestAnimationFrame(callback: (timestamp: number) => void): number;
    /**
     * 把画布上的绘制内容以一个 data URI 的格式返回
     */
    toDataURL(type: 'image/png' | ' image/jpeg', quality: number): string;
    /**
     * 画布导出生成图片的方法
     */
    toTempFilePath(object?: {
      /**
       * 指定的画布区域的左上角横坐标
       */
      x?: number;
      /**
       * 指定的画布区域的左上角纵坐标
       */
      y?: number;
      /**
       * 指定的画布区域的宽度
       */
      width?: number;
      /**
       * 指定的画布区域的高度
       */
      height?: number;
      /**
       * 输出的图片的宽度
       */
      destWidth?: number;
      /**
       * 输出的图片的高度
       */
      destHeight?: number;
      /**
       * 目标文件的类型
       */
      fileType?: 'jpg' | 'png';
      /**
       * 图片的质量
       * @description 目前仅对 jpg 有效，取值范围为 (0, 1]，不在范围内时当作 1 处理。
       */
      quality?: number;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 生成文件的临时路径
         */
        tempFilePath: string;
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
               * 生成文件的临时路径
               */
              tempFilePath: string;
            }
          | {
              error?: number;
              errorMessage?: string;
            }
      ): void;
    }): Promise<{
      /**
       * 生成文件的临时路径
       */
      tempFilePath: string;
    }>;
  }
  export interface CanvasImage {
    /**
     * 图片的真实高度
     */
    readonly height: number;
    /**
     * 图片的 URL
     */
    readonly src: string;
    /**
     * 图片的真实宽度
     */
    readonly width: number;
    /**
     * 图片加载发生错误时触发的回调函数
     */
    onerror(callback: () => void): void;
    /**
     * 图片加载完成时触发的回调函数
     */
    onload(callback: () => void): void;
  }
  export interface CanvasGradient {
    /**
     * 添加颜色的渐变点的方法
     * @description 如果偏移值不在 0 到 1 之间，将抛出 INDEX_SIZE_ERR 错误，如果颜色值不能被解析为有效的CSS颜色值 <color>，将抛出SYNTAX_ERR错误。
     * @see https://opendocs.alipay.com/mini/api/addColorStop
     */
    addColorStop(offset: number, color: string): void;
  }
  export interface CanvasPattern {
    /**
     * 设置图案的变换矩阵的方法
     * @description 使用 SVGMatrix 对象作为图案的变换矩阵，并在此图案上调用它
     */
    setTransform(matrix: ITypeDOMMatrix2DInit): void;
  }
  export interface VideoContext {
    /**
     * 退出全屏
     */
    exitFullScreen(object: {
      /**
       * 组件 id
       */
      element: string;
      /**
       * 操作类型
       */
      actionType: string;
      /**
       * 数据
       */
      data: Record<string, unknown>;
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
     * 退出画中画
     */
    exitPictureInPicture(object?: {
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
     * 获取当前播放进度
     */
    getCurrentTime(object?: {
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
     * 隐藏控制控件
     */
    hideControl(object: {
      /**
       * 控件名称
       */
      controlName: string;
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
     * 隐藏状态栏
     * @description 仅在 iOS 全屏下有效
     */
    hideStatusBar(object?: {
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
     * 切换静音状态
     */
    mute(enable: boolean): void;
    /**
     * 暂停视频播放
     */
    pause(object?: {
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
     * 播放视频
     */
    play(object?: {
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
     * 设置倍速播放（0.5 <= rate <= 2.0）
     */
    playbackRate(rate: number): void;
    /**
     * 进入全屏
     */
    requestFullScreen(object: {
      /**
       * 进入全屏，0为正常竖屏，90为横屏，-90反向横屏
       */
      direction: number;
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
     * 跳转到指定位置，单位为秒（s）
     */
    seek(time: number): void;
    /**
     * 显示控制控件
     */
    showControl(object: {
      /**
       * 控件名称
       */
      controlName: string;
      /**
       * 自动隐藏
       */
      autoHide: boolean;
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
     * 显示/隐藏浮窗
     */
    showFloatingWindow(isShow: boolean): void;
    /**
     * 显示状态栏，仅在 iOS 全屏下有效。
     */
    showStatusBar(object: {
      /**
       * 组件 id
       */
      element: string;
      /**
       * 操作类型
       */
      actionType: string;
      /**
       * 数据
       */
      data: Record<string, unknown>;
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
     * 开启互动能力
     */
    startInteractions(object: {
      /**
       * 组件 id
       */
      element: string;
      /**
       * 操作类型
       */
      actionType: string;
      /**
       * 数据
       */
      data: Record<string, unknown>;
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
     * 停止
     */
    stop(object: {
      /**
       * 组件 id
       */
      element: string;
      /**
       * 操作类型
       */
      actionType: string;
      /**
       * 数据
       */
      data: Record<string, unknown>;
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
     * 停止互动能力，并清理所有的互动组件
     */
    stopInteractions(object: {
      /**
       * 组件 id
       */
      element: string;
      /**
       * 操作类型
       */
      actionType: string;
      /**
       * 数据
       */
      data: Record<string, unknown>;
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
     * 切换清晰度
     */
    switchQuality(object: {
      /**
       * 清晰度列表项中的 definition 字段
       */
      quality: string;
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
     * 更新清晰度列表
     */
    updateQualityList(object: {
      /**
       * 清晰度列表（JSON 字符串格式）
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
  }
  export interface Geocoder {
    /**
     * 逆地理编码
     */
    reverseGeocoding(object: {
      /**
       * 纬度
       */
      latitude: string;
      /**
       * 精度
       */
      longitude: string;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 国家
         */
        country: string;
        /**
         * 国家编号
         */
        countryCode: string;
        /**
         * 省份
         */
        province: string;
        /**
         * 省份的地区代码
         */
        provinceAdcode: string;
        /**
         * 城市
         */
        city: string;
        /**
         * 城市的地区代码
         */
        cityAdcode: string;
        /**
         * 区县
         */
        district: string;
        /**
         * 区县的地区代码
         */
        districtAdcode: string;
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
      ): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * 国家
               */
              country: string;
              /**
               * 国家编号
               */
              countryCode: string;
              /**
               * 省份
               */
              province: string;
              /**
               * 省份的地区代码
               */
              provinceAdcode: string;
              /**
               * 城市
               */
              city: string;
              /**
               * 城市的地区代码
               */
              cityAdcode: string;
              /**
               * 区县
               */
              district: string;
              /**
               * 区县的地区代码
               */
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
            )
      ): void;
    }): Promise<{
      /**
       * 国家
       */
      country: string;
      /**
       * 国家编号
       */
      countryCode: string;
      /**
       * 省份
       */
      province: string;
      /**
       * 省份的地区代码
       */
      provinceAdcode: string;
      /**
       * 城市
       */
      city: string;
      /**
       * 城市的地区代码
       */
      cityAdcode: string;
      /**
       * 区县
       */
      district: string;
      /**
       * 区县的地区代码
       */
      districtAdcode: string;
    }>;
  }
  export interface UploadTask {
    /**
     * 取消本次任务
     * @see https://opendocs.alipay.com/mini/0759ej
     */
    abort(object: {
      uploadTaskId: number;
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
     * @see https://opendocs.alipay.com/mini/075pjj
     */
    offHeadersReceived(
      cb?: (arg: {
        /**
         * 开发者服务器返回的 HTTP Response Header
         */
        header: IUploadTaskOffHeadersReceivedHeader;
      }) => void
    ): void;
    /**
     * 监听上传进度变化事件
     * @see https://opendocs.alipay.com/mini/075pjk
     */
    offProgressUpdate(cb?: (arg: {}) => void): void;
    /**
     * 监听 HTTP Response Header 事件。会比请求完成事件更早
     * @see https://opendocs.alipay.com/mini/075dt3
     */
    onHeadersReceived(
      cb: (arg: {
        /**
         * 开发者服务器返回的 HTTP Response Header
         */
        header: IUploadTaskOnHeadersReceivedHeader;
      }) => void
    ): void;
    /**
     * 监听上传进度变化事件
     * @see https://opendocs.alipay.com/mini/075dt4
     */
    onProgressUpdate(
      cb: (arg: {
        /**
         * 上传进度百分比
         */
        progress: number;
        /**
         * 已经上传的数据长度
         */
        totalBytesWritten: number;
        /**
         * 预期需要上传的数据总长度
         */
        totalBytesExpectedToWrite: number;
      }) => void
    ): void;
  }
  export interface DownloadTask {
    /**
     * 取消本次任务
     * @see https://opendocs.alipay.com/mini/075mtz
     */
    abort(object: {
      downloadTaskId: number;
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
     * @see https://opendocs.alipay.com/mini/075qu1
     */
    offHeadersReceived(cb?: (arg: {}) => void): void;
    /**
     * 取消监听下载进度变化
     * @see https://opendocs.alipay.com/mini/075s7g
     */
    offProgressUpdate(cb?: (arg: {}) => void): void;
    /**
     * 监听 HTTP Response Header 事件。会比请求完成事件更早
     * @see https://opendocs.alipay.com/mini/075dt5
     */
    onHeadersReceived(
      cb: (arg: {
        /**
         * 开发者服务器返回的 HTTP Response Header
         */
        headers: IDownloadTaskOnHeadersReceivedHeaders;
      }) => void
    ): void;
    /**
     * 监听下载进度变化事件
     * @see https://opendocs.alipay.com/mini/075pjl
     */
    onProgressUpdate(
      cb: (arg: {
        /**
         * 下载进度
         */
        progress: number;
        /**
         * 已经下载的数据长度
         */
        totalBytesWritten: number;
        /**
         * 预期需要下载的数据总长度
         */
        totalBytesExpectedToWrite: number;
      }) => void
    ): void;
  }
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
  export interface AccessibilityManager {
    /**
     * 无障碍模式下语音播报
     */
    announce(object: {
      text: string;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: { success: boolean }): void;
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
              error: 2;
              errorMessage: 'invalid parameter!';
            }
          | {
              error: 60004;
              errorMessage: 'screen reader not running';
            }
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
            )
      ): void;
    }): Promise<{
      success: boolean;
    }>;
    /**
     * 是否开启无障碍语音播报
     * @description 在 iOS 系统中，对应功能为 “旁白”，在 Android 系统中，对应功能为 “talkBack”
     */
    isScreenReaderEnabled(object?: {
      /**
       * 接口调用成功的回调函数
       */
      success?(data: { enabled: boolean }): void;
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
              enabled: boolean;
            }
          | {
              error?: number;
              errorMessage?: string;
            }
      ): void;
    }): Promise<{
      enabled: boolean;
    }>;
  }
  export interface ChooseCityTask {
    /**
     * 取消监听地理位置定位完成事件
     * @description 只针对 `chooseCity` 中属性 `setLocatedCity` 为 `true` 的情况
     * @see https://opendocs.alipay.com/mini/04naqz
     */
    offLocatedComplete(
      cb?: (arg: {
        /**
         * 当前定位城市经度。
         */
        longitude: number;
        /**
         * 当前定位城市维度。
         */
        latitude: number;
      }) => void
    ): void;
    /**
     * 监听该页面地理位置定位完成的事件
     * @description 只针对 `chooseCity` 中属性 `setLocatedCity` 为 `true` 的情况。
     * @see https://opendocs.alipay.com/mini/04naqz
     */
    onLocatedComplete(
      cb: (arg: {
        /**
         * 当前定位城市经度。
         */
        longitude: number;
        /**
         * 当前定位城市维度。
         */
        latitude: number;
      }) => void
    ): void;
    /**
     * 修改定位城市名称
     * @description 用于在调用 [my.chooseCity]() 后修改当次定位城市名称
     * @see https://opendocs.alipay.com/mini/04naqz
     */
    setLocatedCity(object: {
      /**
       * 当前定位城市的名称。
       */
      locatedCityName: string;
      /**
       * 当前定位城市的行政区划代码，不传值时以控件默认拿到的为准。
       */
      locatedCityAdCode?: string;
      /**
       * 当前定位城市的拼音，不传值时以控件默认拿到的为准。
       */
      locatedCityPinyin?: string;
      /**
       * 接口调用成功的回调函数
       */
      success?(data: {
        /**
         * 修改后的定位城市名称
         */
        locatedCityName: string;
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
      ): void;
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?(
        arg:
          | {
              /**
               * 修改后的定位城市名称
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
            )
      ): void;
    }): Promise<{
      /**
       * 修改后的定位城市名称
       */
      locatedCityName: string;
    }>;
  }
  interface IBLECharacteristicProperties {
    /**
     * 该特征值是否支持 read 操作。
     */
    read: boolean;
    /**
     * 该特征值是否支持 write 操作。
     */
    write: boolean;
    /**
     * 该特征值是否支持 notify 操作。
     */
    notify: boolean;
    /**
     * 该特征值是否支持 indicate 操作。
     */
    indicate: boolean;
  }
  interface IBeaconUpdateBeacons {
    /**
     * iBeacon 设备广播的 UUID
     */
    uuid: string;
    /**
     * iBeacon 设备的主 ID
     */
    major: string;
    /**
     * iBeacon 设备的次 ID
     */
    minor: string;
    /**
     * 表示设备距离的估计值
     */
    proximity: EBeaconUpdateBeaconsProximity;
    /**
     * iBeacon 设备的距离
     */
    accuracy: string;
    /**
     * iBeacon 信号强度
     */
    rssi: string;
  }
  interface IBeehiveMultilevelSelectList {
    /**
     * 条目名称
     */
    name: string;
    /**
     * 子条目列表, 对象参见list对象
     */
    subList?: IBeehiveMultilevelSelectList[];
  }
  interface IBeehiveMultilevelSelectResult {
    /**
     * 选项的名称
     */
    name: string;
  }
  interface ICalculateRouteThroughPoints {
    /**
     * 纬度。
     */
    lat: number;
    /**
     * 经度。
     */
    lng: number;
  }
  interface ICameraContextOnCameraFrameCallback {
    /**
     * 图像数据矩形的宽度
     */
    width: number;
    /**
     * 图像数据矩形的高度
     */
    height: number;
    /**
     * 图像像素点数据，一维数组，每四项表示一个像素点的 rgba
     */
    data: ArrayBuffer;
    /**
     * 时间戳
     */
    timestamp: number;
  }
  interface IChooseDistrictMainHeadList {
    /**
     * 区块名，如“热门城市”。
     */
    title: string;
    /**
     * 模块类型。枚举如下：
     * 0：常规城市；
     * 1：定位模块；
     * 2：展示支付宝提供的热门城市模块。
     */
    type?: number;
    /**
     * 区块城市列表，不支持嵌套
     */
    list: IChooseDistrictMainHeadListList[];
  }
  interface IChooseDistrictMainHeadListList {
    /**
     * 城市名。
     */
    name: string;
    /**
     * 行政区划代码。不同行政区域对应的代码可查看 中华人民共和国县以上行政区划代码。
     */
    adCode: string;
    /**
     * 城市名对应拼音拼写，方便用户检索。
     */
    spell?: string;
    /**
     * 子标题。
     */
    appendName?: string;
    /**
     * 额外信息。
     */
    ext?: string;
    /**
     * 支持级联，自定义次级城市列表，列表内对象字段可查看 mainNormalList 的单元素类型。
     */
    subList?: IChooseDistrictMainHeadListList[];
  }
  interface IChooseDistrictMainMergeOptions {
    [key: string]: string;
  }
  interface IChooseDistrictSeniorPageList {
    /**
     * 境外左侧 tab 名称，不带左侧 tab 时可不填。
     */
    title: string;
    /**
     * 头部对象集合，不支持嵌套，对象值可参考 mainHeadList 单元素类型。
     */
    headList?: IChooseDistrictMainHeadList[];
    /**
     * 城市列表，对象值可查看 mainNormalList 单元素类型。
     */
    normalList?: IChooseDistrictMainHeadListList[];
  }
  interface ICloudContextGetTempFileURLFileList {
    /**
     * 云文件 ID
     */
    fileID: string;
    /**
     * 有效期时长，单位秒，最长为 7 天， 最短为 5 分钟
     * @default 86400
     */
    maxAge?: number;
  }
  interface ICloudContextGetTempFileURLResponseFileList {
    /**
     * 云文件 ID
     */
    fileID: string;
    /**
     * 文件临时链接
     */
    tempFileURL: string;
    /**
     * 有效期时长，单位秒
     */
    maxAge: number;
    /**
     * 状态码，返回 0 为成功
     */
    status: string;
    /**
     * 业务结果信息
     */
    resultMessage: string;
  }
  interface ICloudDeleteFileFileList {
    /**
     * 云文件 ID
     */
    fileID: string;
    /**
     * 状态码，返回 0 为成功
     */
    status: number;
    /**
     * 业务结果信息
     */
    resultMessage: string;
  }
  interface IDownloadTaskOnHeadersReceivedHeaders {
    [key: string]: string;
  }
  interface IFileSystemManagerGetFileInfoSyncResponse {
    /**
     * 文件大小
     * @description 以字节为单位
     */
    size: number;
  }
  interface IFileSystemManagerGetSavedFileListFileList {
    /**
     * 本地路径
     */
    filePath: string;
    /**
     * 本地文件大小
     * @description 以字节为单位
     */
    size: number;
    /**
     * 文件保存时的时间戳
     * @description 从 1970/01/01 08:00:00 到当前时间的秒数
     */
    createTime: number;
  }
  interface IFileSystemManagerGetSavedFileListSyncFileList {
    /**
     * 本地路径
     */
    filePath: string;
    /**
     * 本地文件大小
     * @description 以字节为单位
     */
    size: number;
    /**
     * 文件保存时的时间戳
     * @description 从 1970/01/01 08:00:00 到当前时间的秒数
     */
    createTime: number;
  }
  interface IFileSystemManagerReadFileSyncResponse {
    /**
     * 文件内容
     */
    data: string | ArrayBuffer;
    /**
     * 数据类型
     */
    dataType: string;
  }
  interface IFileSystemManagerReaddirSyncResponse {
    /**
     * 文件列表
     */
    files: string[];
  }
  interface IFileSystemManagerSaveFileSyncResponse {
    /**
     * 存储后的文件路径
     */
    savedFilePath: string;
  }
  interface IFileSystemManagerStatStats {
    /**
     * 文件的类型和存取的权限
     */
    mode: number;
    /**
     * 文件大小
     */
    size: number;
    /**
     * 上次访问时间
     */
    lastAccessedTime: number;
    /**
     * 上次修改时间
     */
    lastModifiedTime: number;
  }
  interface IFileSystemManagerStatSyncResponse {
    /**
     * 文件信息
     * @description 当 recursive 为 false 时，res.stats 是一个 Stats 对象。当 recursive 为 true 且 path 是一个目录的路径时，res.stats 是一个 Object，key 以 path 为根路径的相对路径，value 是该路径对应的 Stats 对象。
     */
    stats: IFileSystemManagerStatSyncStats;
  }
  interface IFileSystemManagerStatSyncStats {
    /**
     * 文件的类型和存取的权限
     */
    mode: number;
    /**
     * 文件大小
     */
    size: number;
    /**
     * 上次访问时间
     */
    lastAccessedTime: number;
    /**
     * 上次修改时间
     */
    lastModifiedTime: number;
  }
  interface IGetBLEDeviceServicesServices {
    /**
     * 蓝牙设备特征值对应服务的 UUID。
     */
    serviceId: string;
    /**
     * 该服务是否为主服务。
     * - `true` 为主服务。
     * - `false` 不是主服务。
     */
    isPrimary: boolean;
  }
  interface IGetBeaconsBeacons {
    /**
     * iBeacon 信号强度
     * @description Android 10.1.28 或之前的版本中，该接口返回的 rssi 值不能动态更新，建议使用事件触发方式
     */
    rssi: number;
    /**
     * iBeacon 设备的主 id
     */
    major: number;
    /**
     * iBeacon 设备的次 id
     */
    minor: number;
    /**
     * 表示设备距离的枚举值(0-3分别代表：未知、极近、近、远)
     */
    proximity: number;
    /**
     * iBeacon 设备的距离
     */
    accuracy: number;
    /**
     * iBeacon 设备广播的 uuid
     */
    uuid: string;
    /**
     * iOS 13.0+
     */
    timestamp?: number;
  }
  interface IGetConnectedWifiWifi {
    /**
     * wifi SSID信息
     */
    SSID: string;
    /**
     * wifi BSSID信息
     */
    BSSID: string;
    /**
     * wifi是否为隐藏wifi
     */
    secure: boolean;
    /**
     * wifi信号强度
     */
    signalStrength: number;
  }
  interface IGetSavedFileListFileList {
    /**
     * 大小
     */
    size: number;
    /**
     * 本地路径
     */
    apFilePath: string;
    /**
     * 创建时间
     */
    createTime: number;
  }
  interface IGetSettingAuthSetting {
    /**
     * 地理位置，对应接口 [my.getLocation]()
     */
    location?: boolean;
    /**
     * 访问相册，对应接口 [my.chooseImage]()
     */
    album?: boolean;
    /**
     * 摄像头，对应接口 [my.scan]()
     */
    camera?: boolean;
    /**
     * 支付宝会员的基础信息，对应接口 [my.getOpenUserInfo]()
     */
    userInfo?: boolean;
    /**
     * 运动数据，对应接口 [my.getRunData]()
     */
    alipaysports?: boolean;
    /**
     * 手机号码，对应接口 [my.getPhoneNumber]()
     */
    phoneNumber?: boolean;
    /**
     * 收货地址，对应接口 [my.getAddress]()
     */
    aliaddress?: boolean;
    /**
     * 保存到相册，对应接口 [my.saveImageToPhotosAlbum]()
     */
    writePhotosAlbum?: boolean;
  }
  interface IGetWifiListWifiList {
    /**
     * Wifi 的 SSID
     */
    SSID: string;
    /**
     * Wifi 的 BSSID
     */
    BSSID: string;
    /**
     * Wifi 是否安全
     */
    secure: boolean;
    /**
     * Wifi 信号强度
     */
    signalStrength: number;
  }
  interface IIntersectionObserverObserveCallback {
    /**
     * 相交比例
     */
    intersectionRatio: number;
    /**
     * 相交区域的边界
     */
    intersectionRect: IIntersectionObserverObserveCallbackIntersectionRect;
    /**
     * 目标边界
     */
    boundingClientRect: IIntersectionObserverObserveCallbackBoundingClientRect;
    /**
     * 参照区域的边界
     */
    relativeRect: IIntersectionObserverObserveCallbackRelativeRect;
    /**
     * 相交检测时的时间戳
     */
    time: number;
    /**
     * 节点 ID
     */
    id: string;
    /**
     * 节点自定义数据属性
     */
    dataset: Record<string, any>;
  }
  interface IIntersectionObserverObserveCallbackBoundingClientRect {
    /**
     * 上边界
     */
    top: number;
    /**
     * 右边界
     */
    right: number;
    /**
     * 下边界
     */
    bottom: number;
    /**
     * 左边界
     */
    left: number;
    /**
     * 宽度
     */
    width: number;
    /**
     * 高度
     */
    height: number;
  }
  interface IIntersectionObserverObserveCallbackIntersectionRect {
    /**
     * 上边界
     */
    top: number;
    /**
     * 右边界
     */
    right: number;
    /**
     * 下边界
     */
    bottom: number;
    /**
     * 左边界
     */
    left: number;
    /**
     * 宽度
     */
    width: number;
    /**
     * 高度
     */
    height: number;
  }
  interface IIntersectionObserverObserveCallbackRelativeRect {
    /**
     * 上边界
     */
    top: number;
    /**
     * 右边界
     */
    right: number;
    /**
     * 下边界
     */
    bottom: number;
    /**
     * 左边界
     */
    left: number;
    /**
     * 宽度
     */
    width: number;
    /**
     * 高度
     */
    height: number;
  }
  interface IIntersectionObserverRelativeToMargins {
    /**
     * 节点布局区域的上边界
     */
    top?: number;
    /**
     * 节点布局区域的右边界
     */
    right?: number;
    /**
     * 节点布局区域的下边界
     */
    bottom?: number;
    /**
     * 节点布局区域的左边界
     */
    left?: number;
  }
  interface IJSONString<T> {}
  interface IMapContextAddGroundOverlayIncludePoints {
    /**
     * 纬度
     */
    latitude: number;
    /**
     * 经度
     */
    longitude: number;
  }
  interface IMapContextAddMarkersMarkers {
    /**
     * 标记点 id
     * @description 标记点 id，点击事件回调会返回此 id。
     */
    id: number;
    /**
     * 纬度
     * @description 范围 -90 ~ 90。
     */
    latitude: number;
    /**
     * 经度
     * @description 范围 -180 ~ 180。
     */
    longitude: number;
    /**
     * 标注点名
     */
    title?: string;
    /**
     * 项目目录下的图片路径
     * @description 不能用相对路径只能用 / 开头的绝对路径。
     */
    iconPath: string;
    /**
     * map 高级定制渲染绘制 marker 样式
     * @description 优先级高于 iconPath, 对象参照 layout。
     */
    iconLayout?: IMapContextAddMarkersMarkersIconLayout;
    /**
     * 顺时针旋转的角度
     * @description 范围 0 ~ 360
     * @default 0
     */
    rotate?: number;
    /**
     * 是否透明
     * @default 1
     */
    alpha?: number;
    /**
     * 宽度
     * @description 默认为图片的实际宽度
     */
    width?: number;
    /**
     * 高度
     * @description 默认为图片的实际高度
     */
    height?: number;
    /**
     * 标明在特定地图缩放级别下展示
     */
    displayRanges?: IMapContextAddMarkersMarkersDisplayRanges;
    /**
     * 自定义 marker 上的气泡窗口
     * @description 地图上最多同时展示一个，绑定 onCalloutTap。
     */
    callout?: IMapContextAddMarkersMarkersCallout;
    /**
     * 经纬度在标注图标的锚点-横向值
     * @description
     * 这两个值需要成对出现，anchorX 表示横向(0-1)，Y 表示竖向(0-1)。
     * anchorX: 0.5，anchorY: 1：表示底边中点。
     */
    anchorX?: number;
    /**
     * 经纬度在标注图标的锚点-竖向值
     */
    anchorY?: number;
    /**
     * callout 背景自定义
     * @description 目前只支持高德地图 style。
     */
    customCallout?: IMapContextAddMarkersMarkersCustomCallout;
    /**
     * iconPath 对应的图片及该字符串共同生成 marker 的图标
     * @description 和 iconPath 一起使用，会将 iconPath 对应的图片及该字符串共同生成一个图片，当成 marker 的图标，marker 图片可以来源于 view。
     */
    iconAppendStr?: string;
    /**
     * 底部描述文本颜色
     * @description marker 图片可以来源于 view
     * @default #33B276
     */
    iconAppendStrColor?: string;
    /**
     * 基于屏幕位置扎点
     */
    fixedPoint?: IMapContextAddMarkersMarkersFixedPoint;
    /**
     * marker 在地图上的绘制层级
     * @description 与地图上其他覆盖物统一的 Z 坐标系
     */
    markerLevel?: number;
    /**
     * marker 上的气泡
     * @description 地图上可同时展示多个，绑定 onMarkerTap。
     */
    label?: IMapContextAddMarkersMarkersLabel;
    /**
     * 自定义 marker 的样式和内容
     */
    style?: IMapContextAddMarkersMarkersStyle;
  }
  interface IMapContextAddMarkersMarkersCallout {
    /**
     * 内容。
     */
    content?: string;
  }
  interface IMapContextAddMarkersMarkersCustomCallout {
    /**
     * 样式类型。
     * @description
     * 有效值如下：
     * - `0` 为黑色 style
     * - `1` 为白色 style
     * - `2` 为背景 + 文本
     */
    type: number;
    /**
     * 时间值。
     */
    time: string;
    /**
     * 描述数组。
     */
    descList: IMapContextAddMarkersMarkersCustomCalloutDescList[];
    /**
     * 是否展示。
     * @description
     * 有效值如下：
     * - `1` 展示
     */
    isShow: number;
    /**
     * 使用 map 高级定制渲染
     * @description 。优先级最高, layout 对象参照 layout 定义。
     */
    layout?: IMapContextAddMarkersMarkersCustomCalloutLayout;
  }
  interface IMapContextAddMarkersMarkersCustomCalloutDescList {
    /**
     * 文案
     */
    desc: string;
    /**
     * CSS 色值。
     */
    descColor: string;
  }
  interface IMapContextAddMarkersMarkersCustomCalloutLayout {}
  interface IMapContextAddMarkersMarkersDisplayRanges {
    /**
     * 缩放级别下边界
     */
    from: number;
    /**
     * 缩放级别上边界
     */
    to: number;
  }
  interface IMapContextAddMarkersMarkersFixedPoint {
    /**
     * 横向像素点
     * @description 距离地图左上角的像素数值，从 `0` 开始。
     */
    originX: number;
    /**
     * 横向像素点
     * @description 距离地图左上角的像素数值，从 `0` 开始。
     */
    originY: number;
  }
  interface IMapContextAddMarkersMarkersIconLayout {}
  interface IMapContextAddMarkersMarkersLabel {
    /**
     * 文案
     */
    content: string;
    /**
     * 文案颜色
     * @default #000000
     */
    color?: string;
    /**
     * 字体大小
     * @default 14
     */
    fontsize?: number;
    /**
     * 圆角尺寸
     * @default 20
     */
    borderRadius?: number;
    /**
     * 文本框背景色
     * @default #FFFFFF
     */
    bgColor?: string;
    /**
     * 内边距
     * @default 20
     */
    padding?: number;
  }
  interface IMapContextAddMarkersMarkersStyle {
    /**
     * 类型
     */
    type: 1 | 2 | 3;
    text?: string;
    icon?: string;
    /**
     * 字体颜色
     * @default #33B276
     */
    color?: string;
    /**
     * 背景色
     * @default #FFFFFF
     */
    bgColor?: string;
    /**
     * @default center
     */
    gravity?: 'left' | 'center' | 'right';
    /**
     * 字体大小类型
     * @default standard
     */
    fontType?: 'small' | 'standard' | 'large';
  }
  interface IMapContextCalculateDistancePoints {
    /**
     * 纬度。
     */
    latitude: number;
    /**
     * 经度。
     */
    longitude: number;
  }
  interface IMapContextCalculateDistanceTargetPoints {
    /**
     * 与 points 数组中首个点的直线距离符合目标距离的点，在 targetDistances 中的索引。
     */
    index: number;
    /**
     * 目标距离的数值。（如果不传 targetPoints 或 targetPoints 参数为空，则返回的 targetDistances字段也为空。）
     */
    targetDistance: number;
    /**
     * 纬度。
     */
    latitude: number;
    /**
     * 经度。
     */
    longitude: number;
    /**
     * 假设 points 数组为 [A,B,C]，符合目标距离的点为 B'， 且 B'- A 直线距离在 B-A 直线距离、C-A 直线距离之间，则 targetLineIndex 为 points 数组中的点 B 的索引数值。
     */
    targetLineIndex: number;
  }
  interface IMapContextChangeMarkersAdd {
    /**
     * 标记点 id
     * @description 标记点 id，点击事件回调会返回此 id。
     */
    id: number;
    /**
     * 纬度
     * @description 范围 -90 ~ 90。
     */
    latitude: number;
    /**
     * 经度
     * @description 范围 -180 ~ 180。
     */
    longitude: number;
    /**
     * 标注点名
     */
    title?: string;
    /**
     * 项目目录下的图片路径
     * @description 不能用相对路径只能用 / 开头的绝对路径。
     */
    iconPath: string;
    /**
     * map 高级定制渲染绘制 marker 样式
     * @description 优先级高于 iconPath, 对象参照 layout。
     */
    iconLayout?: IMapContextChangeMarkersAddIconLayout;
    /**
     * 顺时针旋转的角度
     * @description 范围 0 ~ 360
     * @default 0
     */
    rotate?: number;
    /**
     * 是否透明
     * @default 1
     */
    alpha?: number;
    /**
     * 宽度
     * @description 默认为图片的实际宽度
     */
    width?: number;
    /**
     * 高度
     * @description 默认为图片的实际高度
     */
    height?: number;
    /**
     * 标明在特定地图缩放级别下展示
     */
    displayRanges?: IMapContextChangeMarkersAddDisplayRanges;
    /**
     * 自定义 marker 上的气泡窗口
     * @description 地图上最多同时展示一个，绑定 onCalloutTap。
     */
    callout?: IMapContextChangeMarkersAddCallout;
    /**
     * 经纬度在标注图标的锚点-横向值
     * @description
     * 这两个值需要成对出现，anchorX 表示横向(0-1)，Y 表示竖向(0-1)。
     * anchorX: 0.5，anchorY: 1：表示底边中点。
     */
    anchorX?: number;
    /**
     * 经纬度在标注图标的锚点-竖向值
     */
    anchorY?: number;
    /**
     * callout 背景自定义
     * @description 目前只支持高德地图 style。
     */
    customCallout?: IMapContextChangeMarkersAddCustomCallout;
    /**
     * iconPath 对应的图片及该字符串共同生成 marker 的图标
     * @description 和 iconPath 一起使用，会将 iconPath 对应的图片及该字符串共同生成一个图片，当成 marker 的图标，marker 图片可以来源于 view。
     */
    iconAppendStr?: string;
    /**
     * 底部描述文本颜色
     * @description marker 图片可以来源于 view
     * @default #33B276
     */
    iconAppendStrColor?: string;
    /**
     * 基于屏幕位置扎点
     */
    fixedPoint?: IMapContextChangeMarkersAddFixedPoint;
    /**
     * marker 在地图上的绘制层级
     * @description 与地图上其他覆盖物统一的 Z 坐标系
     */
    markerLevel?: number;
    /**
     * marker 上的气泡
     * @description 地图上可同时展示多个，绑定 onMarkerTap。
     */
    label?: IMapContextChangeMarkersAddLabel;
    /**
     * 自定义 marker 的样式和内容
     */
    style?: IMapContextChangeMarkersAddStyle;
  }
  interface IMapContextChangeMarkersAddCallout {
    /**
     * 内容。
     */
    content?: string;
  }
  interface IMapContextChangeMarkersAddCustomCallout {
    /**
     * 样式类型。
     * @description
     * 有效值如下：
     * - `0` 为黑色 style
     * - `1` 为白色 style
     * - `2` 为背景 + 文本
     */
    type: number;
    /**
     * 时间值。
     */
    time: string;
    /**
     * 描述数组。
     */
    descList: IMapContextChangeMarkersAddCustomCalloutDescList[];
    /**
     * 是否展示。
     * @description
     * 有效值如下：
     * - `1` 展示
     */
    isShow: number;
    /**
     * 使用 map 高级定制渲染
     * @description 。优先级最高, layout 对象参照 layout 定义。
     */
    layout?: IMapContextChangeMarkersAddCustomCalloutLayout;
  }
  interface IMapContextChangeMarkersAddCustomCalloutDescList {
    /**
     * 文案
     */
    desc: string;
    /**
     * CSS 色值。
     */
    descColor: string;
  }
  interface IMapContextChangeMarkersAddCustomCalloutLayout {}
  interface IMapContextChangeMarkersAddDisplayRanges {
    /**
     * 缩放级别下边界
     */
    from: number;
    /**
     * 缩放级别上边界
     */
    to: number;
  }
  interface IMapContextChangeMarkersAddFixedPoint {
    /**
     * 横向像素点
     * @description 距离地图左上角的像素数值，从 `0` 开始。
     */
    originX: number;
    /**
     * 横向像素点
     * @description 距离地图左上角的像素数值，从 `0` 开始。
     */
    originY: number;
  }
  interface IMapContextChangeMarkersAddIconLayout {}
  interface IMapContextChangeMarkersAddLabel {
    /**
     * 文案
     */
    content: string;
    /**
     * 文案颜色
     * @default #000000
     */
    color?: string;
    /**
     * 字体大小
     * @default 14
     */
    fontsize?: number;
    /**
     * 圆角尺寸
     * @default 20
     */
    borderRadius?: number;
    /**
     * 文本框背景色
     * @default #FFFFFF
     */
    bgColor?: string;
    /**
     * 内边距
     * @default 20
     */
    padding?: number;
  }
  interface IMapContextChangeMarkersAddStyle {
    /**
     * 类型
     */
    type: 1 | 2 | 3;
    text?: string;
    icon?: string;
    /**
     * 字体颜色
     * @default #33B276
     */
    color?: string;
    /**
     * 背景色
     * @default #FFFFFF
     */
    bgColor?: string;
    /**
     * @default center
     */
    gravity?: 'left' | 'center' | 'right';
    /**
     * 字体大小类型
     * @default standard
     */
    fontType?: 'small' | 'standard' | 'large';
  }
  interface IMapContextChangeMarkersRemove {
    /**
     * 标记点 id
     * @description 标记点 id，点击事件回调会返回此 id。
     */
    id: number;
    /**
     * 纬度
     * @description 范围 -90 ~ 90。
     */
    latitude: number;
    /**
     * 经度
     * @description 范围 -180 ~ 180。
     */
    longitude: number;
    /**
     * 标注点名
     */
    title?: string;
    /**
     * 项目目录下的图片路径
     * @description 不能用相对路径只能用 / 开头的绝对路径。
     */
    iconPath: string;
    /**
     * map 高级定制渲染绘制 marker 样式
     * @description 优先级高于 iconPath, 对象参照 layout。
     */
    iconLayout?: IMapContextChangeMarkersRemoveIconLayout;
    /**
     * 顺时针旋转的角度
     * @description 范围 0 ~ 360
     * @default 0
     */
    rotate?: number;
    /**
     * 是否透明
     * @default 1
     */
    alpha?: number;
    /**
     * 宽度
     * @description 默认为图片的实际宽度
     */
    width?: number;
    /**
     * 高度
     * @description 默认为图片的实际高度
     */
    height?: number;
    /**
     * 标明在特定地图缩放级别下展示
     */
    displayRanges?: IMapContextChangeMarkersRemoveDisplayRanges;
    /**
     * 自定义 marker 上的气泡窗口
     * @description 地图上最多同时展示一个，绑定 onCalloutTap。
     */
    callout?: IMapContextChangeMarkersRemoveCallout;
    /**
     * 经纬度在标注图标的锚点-横向值
     * @description
     * 这两个值需要成对出现，anchorX 表示横向(0-1)，Y 表示竖向(0-1)。
     * anchorX: 0.5，anchorY: 1：表示底边中点。
     */
    anchorX?: number;
    /**
     * 经纬度在标注图标的锚点-竖向值
     */
    anchorY?: number;
    /**
     * callout 背景自定义
     * @description 目前只支持高德地图 style。
     */
    customCallout?: IMapContextChangeMarkersRemoveCustomCallout;
    /**
     * iconPath 对应的图片及该字符串共同生成 marker 的图标
     * @description 和 iconPath 一起使用，会将 iconPath 对应的图片及该字符串共同生成一个图片，当成 marker 的图标，marker 图片可以来源于 view。
     */
    iconAppendStr?: string;
    /**
     * 底部描述文本颜色
     * @description marker 图片可以来源于 view
     * @default #33B276
     */
    iconAppendStrColor?: string;
    /**
     * 基于屏幕位置扎点
     */
    fixedPoint?: IMapContextChangeMarkersRemoveFixedPoint;
    /**
     * marker 在地图上的绘制层级
     * @description 与地图上其他覆盖物统一的 Z 坐标系
     */
    markerLevel?: number;
    /**
     * marker 上的气泡
     * @description 地图上可同时展示多个，绑定 onMarkerTap。
     */
    label?: IMapContextChangeMarkersRemoveLabel;
    /**
     * 自定义 marker 的样式和内容
     */
    style?: IMapContextChangeMarkersRemoveStyle;
  }
  interface IMapContextChangeMarkersRemoveCallout {
    /**
     * 内容。
     */
    content?: string;
  }
  interface IMapContextChangeMarkersRemoveCustomCallout {
    /**
     * 样式类型。
     * @description
     * 有效值如下：
     * - `0` 为黑色 style
     * - `1` 为白色 style
     * - `2` 为背景 + 文本
     */
    type: number;
    /**
     * 时间值。
     */
    time: string;
    /**
     * 描述数组。
     */
    descList: IMapContextChangeMarkersRemoveCustomCalloutDescList[];
    /**
     * 是否展示。
     * @description
     * 有效值如下：
     * - `1` 展示
     */
    isShow: number;
    /**
     * 使用 map 高级定制渲染
     * @description 。优先级最高, layout 对象参照 layout 定义。
     */
    layout?: IMapContextChangeMarkersRemoveCustomCalloutLayout;
  }
  interface IMapContextChangeMarkersRemoveCustomCalloutDescList {
    /**
     * 文案
     */
    desc: string;
    /**
     * CSS 色值。
     */
    descColor: string;
  }
  interface IMapContextChangeMarkersRemoveCustomCalloutLayout {}
  interface IMapContextChangeMarkersRemoveDisplayRanges {
    /**
     * 缩放级别下边界
     */
    from: number;
    /**
     * 缩放级别上边界
     */
    to: number;
  }
  interface IMapContextChangeMarkersRemoveFixedPoint {
    /**
     * 横向像素点
     * @description 距离地图左上角的像素数值，从 `0` 开始。
     */
    originX: number;
    /**
     * 横向像素点
     * @description 距离地图左上角的像素数值，从 `0` 开始。
     */
    originY: number;
  }
  interface IMapContextChangeMarkersRemoveIconLayout {}
  interface IMapContextChangeMarkersRemoveLabel {
    /**
     * 文案
     */
    content: string;
    /**
     * 文案颜色
     * @default #000000
     */
    color?: string;
    /**
     * 字体大小
     * @default 14
     */
    fontsize?: number;
    /**
     * 圆角尺寸
     * @default 20
     */
    borderRadius?: number;
    /**
     * 文本框背景色
     * @default #FFFFFF
     */
    bgColor?: string;
    /**
     * 内边距
     * @default 20
     */
    padding?: number;
  }
  interface IMapContextChangeMarkersRemoveStyle {
    /**
     * 类型
     */
    type: 1 | 2 | 3;
    text?: string;
    icon?: string;
    /**
     * 字体颜色
     * @default #33B276
     */
    color?: string;
    /**
     * 背景色
     * @default #FFFFFF
     */
    bgColor?: string;
    /**
     * @default center
     */
    gravity?: 'left' | 'center' | 'right';
    /**
     * 字体大小类型
     * @default standard
     */
    fontType?: 'small' | 'standard' | 'large';
  }
  interface IMapContextChangeMarkersUpdate {
    /**
     * 标记点 id
     * @description 标记点 id，点击事件回调会返回此 id。
     */
    id: number;
    /**
     * 纬度
     * @description 范围 -90 ~ 90。
     */
    latitude: number;
    /**
     * 经度
     * @description 范围 -180 ~ 180。
     */
    longitude: number;
    /**
     * 标注点名
     */
    title?: string;
    /**
     * 项目目录下的图片路径
     * @description 不能用相对路径只能用 / 开头的绝对路径。
     */
    iconPath: string;
    /**
     * map 高级定制渲染绘制 marker 样式
     * @description 优先级高于 iconPath, 对象参照 layout。
     */
    iconLayout?: IMapContextChangeMarkersUpdateIconLayout;
    /**
     * 顺时针旋转的角度
     * @description 范围 0 ~ 360
     * @default 0
     */
    rotate?: number;
    /**
     * 是否透明
     * @default 1
     */
    alpha?: number;
    /**
     * 宽度
     * @description 默认为图片的实际宽度
     */
    width?: number;
    /**
     * 高度
     * @description 默认为图片的实际高度
     */
    height?: number;
    /**
     * 标明在特定地图缩放级别下展示
     */
    displayRanges?: IMapContextChangeMarkersUpdateDisplayRanges;
    /**
     * 自定义 marker 上的气泡窗口
     * @description 地图上最多同时展示一个，绑定 onCalloutTap。
     */
    callout?: IMapContextChangeMarkersUpdateCallout;
    /**
     * 经纬度在标注图标的锚点-横向值
     * @description
     * 这两个值需要成对出现，anchorX 表示横向(0-1)，Y 表示竖向(0-1)。
     * anchorX: 0.5，anchorY: 1：表示底边中点。
     */
    anchorX?: number;
    /**
     * 经纬度在标注图标的锚点-竖向值
     */
    anchorY?: number;
    /**
     * callout 背景自定义
     * @description 目前只支持高德地图 style。
     */
    customCallout?: IMapContextChangeMarkersUpdateCustomCallout;
    /**
     * iconPath 对应的图片及该字符串共同生成 marker 的图标
     * @description 和 iconPath 一起使用，会将 iconPath 对应的图片及该字符串共同生成一个图片，当成 marker 的图标，marker 图片可以来源于 view。
     */
    iconAppendStr?: string;
    /**
     * 底部描述文本颜色
     * @description marker 图片可以来源于 view
     * @default #33B276
     */
    iconAppendStrColor?: string;
    /**
     * 基于屏幕位置扎点
     */
    fixedPoint?: IMapContextChangeMarkersUpdateFixedPoint;
    /**
     * marker 在地图上的绘制层级
     * @description 与地图上其他覆盖物统一的 Z 坐标系
     */
    markerLevel?: number;
    /**
     * marker 上的气泡
     * @description 地图上可同时展示多个，绑定 onMarkerTap。
     */
    label?: IMapContextChangeMarkersUpdateLabel;
    /**
     * 自定义 marker 的样式和内容
     */
    style?: IMapContextChangeMarkersUpdateStyle;
  }
  interface IMapContextChangeMarkersUpdateCallout {
    /**
     * 内容。
     */
    content?: string;
  }
  interface IMapContextChangeMarkersUpdateCustomCallout {
    /**
     * 样式类型。
     * @description
     * 有效值如下：
     * - `0` 为黑色 style
     * - `1` 为白色 style
     * - `2` 为背景 + 文本
     */
    type: number;
    /**
     * 时间值。
     */
    time: string;
    /**
     * 描述数组。
     */
    descList: IMapContextChangeMarkersUpdateCustomCalloutDescList[];
    /**
     * 是否展示。
     * @description
     * 有效值如下：
     * - `1` 展示
     */
    isShow: number;
    /**
     * 使用 map 高级定制渲染
     * @description 。优先级最高, layout 对象参照 layout 定义。
     */
    layout?: IMapContextChangeMarkersUpdateCustomCalloutLayout;
  }
  interface IMapContextChangeMarkersUpdateCustomCalloutDescList {
    /**
     * 文案
     */
    desc: string;
    /**
     * CSS 色值。
     */
    descColor: string;
  }
  interface IMapContextChangeMarkersUpdateCustomCalloutLayout {}
  interface IMapContextChangeMarkersUpdateDisplayRanges {
    /**
     * 缩放级别下边界
     */
    from: number;
    /**
     * 缩放级别上边界
     */
    to: number;
  }
  interface IMapContextChangeMarkersUpdateFixedPoint {
    /**
     * 横向像素点
     * @description 距离地图左上角的像素数值，从 `0` 开始。
     */
    originX: number;
    /**
     * 横向像素点
     * @description 距离地图左上角的像素数值，从 `0` 开始。
     */
    originY: number;
  }
  interface IMapContextChangeMarkersUpdateIconLayout {}
  interface IMapContextChangeMarkersUpdateLabel {
    /**
     * 文案
     */
    content: string;
    /**
     * 文案颜色
     * @default #000000
     */
    color?: string;
    /**
     * 字体大小
     * @default 14
     */
    fontsize?: number;
    /**
     * 圆角尺寸
     * @default 20
     */
    borderRadius?: number;
    /**
     * 文本框背景色
     * @default #FFFFFF
     */
    bgColor?: string;
    /**
     * 内边距
     * @default 20
     */
    padding?: number;
  }
  interface IMapContextChangeMarkersUpdateStyle {
    /**
     * 类型
     */
    type: 1 | 2 | 3;
    text?: string;
    icon?: string;
    /**
     * 字体颜色
     * @default #33B276
     */
    color?: string;
    /**
     * 背景色
     * @default #FFFFFF
     */
    bgColor?: string;
    /**
     * @default center
     */
    gravity?: 'left' | 'center' | 'right';
    /**
     * 字体大小类型
     * @default standard
     */
    fontType?: 'small' | 'standard' | 'large';
  }
  interface IMapContextGetRegionNortheast {
    /**
     * 纬度
     */
    latitude: number;
    /**
     * 经度
     */
    longitude: number;
  }
  interface IMapContextGetRegionSouthwest {
    /**
     * 纬度
     */
    latitude: number;
    /**
     * 经度
     */
    longitude: number;
  }
  interface IMapContextIncludePointsPoints {
    /**
     * 纬度
     */
    latitude: number;
    /**
     * 经度
     */
    longitude: number;
  }
  interface IMapContextInitMarkerClusterClusterRanges {
    /**
     * 缩放级别下边界
     */
    from: number;
    /**
     * 缩放级别上边界
     */
    to: number;
  }
  interface IMapContextInitMarkerClusterIconLayout {}
  interface IMapContextPolygonContainsPointPoint {
    /**
     * 纬度
     */
    latitude: number;
    /**
     * 经度
     */
    longitude: number;
  }
  interface IMapContextPolygonContainsPointPolygon {
    /**
     * 纬度
     */
    latitude: number;
    /**
     * 经度
     */
    longitude: number;
  }
  interface IMapContextShowRouteThroughPoints {
    /**
     * 纬度
     */
    latitude: number;
    /**
     * 经度
     */
    longitude: number;
  }
  interface IMapContextSmoothDrawPolylinePoints {
    /**
     * 纬度
     */
    latitude: number;
    /**
     * 经度
     */
    longitude: number;
  }
  interface IMapContextSmoothMoveMarkerMarkerData {
    /**
     * 标记点 id
     * @description 标记点 id，点击事件回调会返回此 id。
     */
    id: number;
    /**
     * 纬度
     * @description 范围 -90 ~ 90。
     */
    latitude: number;
    /**
     * 经度
     * @description 范围 -180 ~ 180。
     */
    longitude: number;
    /**
     * 标注点名
     */
    title?: string;
    /**
     * 项目目录下的图片路径
     * @description 不能用相对路径只能用 / 开头的绝对路径。
     */
    iconPath: string;
    /**
     * map 高级定制渲染绘制 marker 样式
     * @description 优先级高于 iconPath, 对象参照 layout。
     */
    iconLayout?: IMapContextSmoothMoveMarkerMarkerDataIconLayout;
    /**
     * 顺时针旋转的角度
     * @description 范围 0 ~ 360
     * @default 0
     */
    rotate?: number;
    /**
     * 是否透明
     * @default 1
     */
    alpha?: number;
    /**
     * 宽度
     * @description 默认为图片的实际宽度
     */
    width?: number;
    /**
     * 高度
     * @description 默认为图片的实际高度
     */
    height?: number;
    /**
     * 标明在特定地图缩放级别下展示
     */
    displayRanges?: IMapContextSmoothMoveMarkerMarkerDataDisplayRanges;
    /**
     * 自定义 marker 上的气泡窗口
     * @description 地图上最多同时展示一个，绑定 onCalloutTap。
     */
    callout?: IMapContextSmoothMoveMarkerMarkerDataCallout;
    /**
     * 经纬度在标注图标的锚点-横向值
     * @description
     * 这两个值需要成对出现，anchorX 表示横向(0-1)，Y 表示竖向(0-1)。
     * anchorX: 0.5，anchorY: 1：表示底边中点。
     */
    anchorX?: number;
    /**
     * 经纬度在标注图标的锚点-竖向值
     */
    anchorY?: number;
    /**
     * callout 背景自定义
     * @description 目前只支持高德地图 style。
     */
    customCallout?: IMapContextSmoothMoveMarkerMarkerDataCustomCallout;
    /**
     * iconPath 对应的图片及该字符串共同生成 marker 的图标
     * @description 和 iconPath 一起使用，会将 iconPath 对应的图片及该字符串共同生成一个图片，当成 marker 的图标，marker 图片可以来源于 view。
     */
    iconAppendStr?: string;
    /**
     * 底部描述文本颜色
     * @description marker 图片可以来源于 view
     * @default #33B276
     */
    iconAppendStrColor?: string;
    /**
     * 基于屏幕位置扎点
     */
    fixedPoint?: IMapContextSmoothMoveMarkerMarkerDataFixedPoint;
    /**
     * marker 在地图上的绘制层级
     * @description 与地图上其他覆盖物统一的 Z 坐标系
     */
    markerLevel?: number;
    /**
     * marker 上的气泡
     * @description 地图上可同时展示多个，绑定 onMarkerTap。
     */
    label?: IMapContextSmoothMoveMarkerMarkerDataLabel;
    /**
     * 自定义 marker 的样式和内容
     */
    style?: IMapContextSmoothMoveMarkerMarkerDataStyle;
  }
  interface IMapContextSmoothMoveMarkerMarkerDataCallout {
    /**
     * 内容。
     */
    content?: string;
  }
  interface IMapContextSmoothMoveMarkerMarkerDataCustomCallout {
    /**
     * 样式类型。
     * @description
     * 有效值如下：
     * - `0` 为黑色 style
     * - `1` 为白色 style
     * - `2` 为背景 + 文本
     */
    type: number;
    /**
     * 时间值。
     */
    time: string;
    /**
     * 描述数组。
     */
    descList: IMapContextSmoothMoveMarkerMarkerDataCustomCalloutDescList[];
    /**
     * 是否展示。
     * @description
     * 有效值如下：
     * - `1` 展示
     */
    isShow: number;
    /**
     * 使用 map 高级定制渲染
     * @description 。优先级最高, layout 对象参照 layout 定义。
     */
    layout?: IMapContextSmoothMoveMarkerMarkerDataCustomCalloutLayout;
  }
  interface IMapContextSmoothMoveMarkerMarkerDataCustomCalloutDescList {
    /**
     * 文案
     */
    desc: string;
    /**
     * CSS 色值。
     */
    descColor: string;
  }
  interface IMapContextSmoothMoveMarkerMarkerDataCustomCalloutLayout {}
  interface IMapContextSmoothMoveMarkerMarkerDataDisplayRanges {
    /**
     * 缩放级别下边界
     */
    from: number;
    /**
     * 缩放级别上边界
     */
    to: number;
  }
  interface IMapContextSmoothMoveMarkerMarkerDataFixedPoint {
    /**
     * 横向像素点
     * @description 距离地图左上角的像素数值，从 `0` 开始。
     */
    originX: number;
    /**
     * 横向像素点
     * @description 距离地图左上角的像素数值，从 `0` 开始。
     */
    originY: number;
  }
  interface IMapContextSmoothMoveMarkerMarkerDataIconLayout {}
  interface IMapContextSmoothMoveMarkerMarkerDataLabel {
    /**
     * 文案
     */
    content: string;
    /**
     * 文案颜色
     * @default #000000
     */
    color?: string;
    /**
     * 字体大小
     * @default 14
     */
    fontsize?: number;
    /**
     * 圆角尺寸
     * @default 20
     */
    borderRadius?: number;
    /**
     * 文本框背景色
     * @default #FFFFFF
     */
    bgColor?: string;
    /**
     * 内边距
     * @default 20
     */
    padding?: number;
  }
  interface IMapContextSmoothMoveMarkerMarkerDataStyle {
    /**
     * 类型
     */
    type: 1 | 2 | 3;
    text?: string;
    icon?: string;
    /**
     * 字体颜色
     * @default #33B276
     */
    color?: string;
    /**
     * 背景色
     * @default #FFFFFF
     */
    bgColor?: string;
    /**
     * @default center
     */
    gravity?: 'left' | 'center' | 'right';
    /**
     * 字体大小类型
     * @default standard
     */
    fontType?: 'small' | 'standard' | 'large';
  }
  interface IMapContextSmoothMoveMarkerPoints {
    /**
     * 纬度
     */
    latitude: number;
    /**
     * 经度
     */
    longitude: number;
  }
  interface IMapContextSmoothMovePolylinePoints {
    /**
     * 纬度
     */
    latitude: number;
    /**
     * 经度
     */
    longitude: number;
  }
  interface IMapContextTranslateMarkerDestination {
    /**
     * 纬度
     */
    latitude: number;
    /**
     * 经度
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
     * 纬度
     */
    latitude: number;
    /**
     * 经度
     */
    longitude: number;
  }
  interface IMapContextUpdateComponentsMarkers {
    /**
     * 标记点 id
     * @description 标记点 id，点击事件回调会返回此 id。
     */
    id: number;
    /**
     * 纬度
     * @description 范围 -90 ~ 90。
     */
    latitude: number;
    /**
     * 经度
     * @description 范围 -180 ~ 180。
     */
    longitude: number;
    /**
     * 标注点名
     */
    title?: string;
    /**
     * 项目目录下的图片路径
     * @description 不能用相对路径只能用 / 开头的绝对路径。
     */
    iconPath: string;
    /**
     * map 高级定制渲染绘制 marker 样式
     * @description 优先级高于 iconPath, 对象参照 layout。
     */
    iconLayout?: IMapContextUpdateComponentsMarkersIconLayout;
    /**
     * 顺时针旋转的角度
     * @description 范围 0 ~ 360
     * @default 0
     */
    rotate?: number;
    /**
     * 是否透明
     * @default 1
     */
    alpha?: number;
    /**
     * 宽度
     * @description 默认为图片的实际宽度
     */
    width?: number;
    /**
     * 高度
     * @description 默认为图片的实际高度
     */
    height?: number;
    /**
     * 标明在特定地图缩放级别下展示
     */
    displayRanges?: IMapContextUpdateComponentsMarkersDisplayRanges;
    /**
     * 自定义 marker 上的气泡窗口
     * @description 地图上最多同时展示一个，绑定 onCalloutTap。
     */
    callout?: IMapContextUpdateComponentsMarkersCallout;
    /**
     * 经纬度在标注图标的锚点-横向值
     * @description
     * 这两个值需要成对出现，anchorX 表示横向(0-1)，Y 表示竖向(0-1)。
     * anchorX: 0.5，anchorY: 1：表示底边中点。
     */
    anchorX?: number;
    /**
     * 经纬度在标注图标的锚点-竖向值
     */
    anchorY?: number;
    /**
     * callout 背景自定义
     * @description 目前只支持高德地图 style。
     */
    customCallout?: IMapContextUpdateComponentsMarkersCustomCallout;
    /**
     * iconPath 对应的图片及该字符串共同生成 marker 的图标
     * @description 和 iconPath 一起使用，会将 iconPath 对应的图片及该字符串共同生成一个图片，当成 marker 的图标，marker 图片可以来源于 view。
     */
    iconAppendStr?: string;
    /**
     * 底部描述文本颜色
     * @description marker 图片可以来源于 view
     * @default #33B276
     */
    iconAppendStrColor?: string;
    /**
     * 基于屏幕位置扎点
     */
    fixedPoint?: IMapContextUpdateComponentsMarkersFixedPoint;
    /**
     * marker 在地图上的绘制层级
     * @description 与地图上其他覆盖物统一的 Z 坐标系
     */
    markerLevel?: number;
    /**
     * marker 上的气泡
     * @description 地图上可同时展示多个，绑定 onMarkerTap。
     */
    label?: IMapContextUpdateComponentsMarkersLabel;
    /**
     * 自定义 marker 的样式和内容
     */
    style?: IMapContextUpdateComponentsMarkersStyle;
  }
  interface IMapContextUpdateComponentsMarkersCallout {
    /**
     * 内容。
     */
    content?: string;
  }
  interface IMapContextUpdateComponentsMarkersCustomCallout {
    /**
     * 样式类型。
     * @description
     * 有效值如下：
     * - `0` 为黑色 style
     * - `1` 为白色 style
     * - `2` 为背景 + 文本
     */
    type: number;
    /**
     * 时间值。
     */
    time: string;
    /**
     * 描述数组。
     */
    descList: IMapContextUpdateComponentsMarkersCustomCalloutDescList[];
    /**
     * 是否展示。
     * @description
     * 有效值如下：
     * - `1` 展示
     */
    isShow: number;
    /**
     * 使用 map 高级定制渲染
     * @description 。优先级最高, layout 对象参照 layout 定义。
     */
    layout?: IMapContextUpdateComponentsMarkersCustomCalloutLayout;
  }
  interface IMapContextUpdateComponentsMarkersCustomCalloutDescList {
    /**
     * 文案
     */
    desc: string;
    /**
     * CSS 色值。
     */
    descColor: string;
  }
  interface IMapContextUpdateComponentsMarkersCustomCalloutLayout {}
  interface IMapContextUpdateComponentsMarkersDisplayRanges {
    /**
     * 缩放级别下边界
     */
    from: number;
    /**
     * 缩放级别上边界
     */
    to: number;
  }
  interface IMapContextUpdateComponentsMarkersFixedPoint {
    /**
     * 横向像素点
     * @description 距离地图左上角的像素数值，从 `0` 开始。
     */
    originX: number;
    /**
     * 横向像素点
     * @description 距离地图左上角的像素数值，从 `0` 开始。
     */
    originY: number;
  }
  interface IMapContextUpdateComponentsMarkersIconLayout {}
  interface IMapContextUpdateComponentsMarkersLabel {
    /**
     * 文案
     */
    content: string;
    /**
     * 文案颜色
     * @default #000000
     */
    color?: string;
    /**
     * 字体大小
     * @default 14
     */
    fontsize?: number;
    /**
     * 圆角尺寸
     * @default 20
     */
    borderRadius?: number;
    /**
     * 文本框背景色
     * @default #FFFFFF
     */
    bgColor?: string;
    /**
     * 内边距
     * @default 20
     */
    padding?: number;
  }
  interface IMapContextUpdateComponentsMarkersStyle {
    /**
     * 类型
     */
    type: 1 | 2 | 3;
    text?: string;
    icon?: string;
    /**
     * 字体颜色
     * @default #33B276
     */
    color?: string;
    /**
     * 背景色
     * @default #FFFFFF
     */
    bgColor?: string;
    /**
     * @default center
     */
    gravity?: 'left' | 'center' | 'right';
    /**
     * 字体大小类型
     * @default standard
     */
    fontType?: 'small' | 'standard' | 'large';
  }
  interface IMapContextUpdateComponentsPolyline {
    /**
     * 路线的经纬度集合
     */
    points?: IMapContextUpdateComponentsPolylinePoints[];
    /**
     * 轨迹动画的颜色
     */
    color?: string;
    /**
     * 路线宽度
     */
    width?: number;
    /**
     * 是否虚线
     */
    dottedLine?: boolean;
  }
  interface IMapContextUpdateComponentsPolylinePoints {
    /**
     * 纬度
     */
    latitude: number;
    /**
     * 经度
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
     * 纬度
     */
    latitude: number;
    /**
     * 经度
     */
    longitude: number;
  }
  interface IMyApCreateTracertOption {
    /**
     * 埋点 a 位
     */
    spmAPos: string;
    /**
     * 埋点 b 位
     */
    spmBPos: string;
    /**
     * 业务类型
     */
    bizType?: string;
    /**
     * 日志等级
     */
    logLevel?: number;
    /**
     * 渠道
     */
    chInfo?: string;
    /**
     * 投放信息
     */
    scm?: string;
    /**
     * 上报的 url
     */
    url?: string;
    /**
     * 通用的数据
     * @description 可不传，传了所有的埋点均会带该额外参数
     */
    mdata?: unknown;
    /**
     * console 打印埋点
     */
    debug?: boolean;
    /**
     * 是否执行过全引导参数透传
     */
    isTraced?: boolean;
    /**
     * 自动上报 PV
     */
    autoLogPv?: boolean;
  }
  interface IMyApGetAddressResult {
    /**
     * 详细地址
     */
    address: string;
    /**
     * 国家名称
     */
    country: string;
    /**
     * 省
     */
    prov: string;
    /**
     * 市
     */
    city: string;
    /**
     * 区
     */
    area: string;
    /**
     * 街道
     */
    street: string;
    /**
     * 姓名
     */
    fullname: string;
    /**
     * 手机号
     */
    mobilePhone: string;
  }
  interface IMyApGetAuthCodeAuthErrorScopes {
    /**
     * key 是授权失败的 scope，value 是对应的错误码
     */
    [scope: string]: string;
  }
  interface IMyApImgRiskBizContext {
    /**
     * 风险类型
     */
    risk_type: string;
    /**
     * 需要查询图片的任务 ID
     */
    apply_id: string;
  }
  interface IMyApImgRiskCallbackBizContext {
    /**
     * 风险类型
     */
    risk_type: string;
    /**
     * 需要查询图片的任务 ID
     */
    apply_id: string;
  }
  interface IMyApNsfBizContext {
    /**
     * 用于代表商户风险类型，请按示例值填写。	固定传入riskinfo_nsf_common。
     */
    risk_type: string;
    /**
     * 用于输入使用此服务的商户ID。	示例：2088345256451234
     */
    pid: string;
    /**
     * 用于输入用户支付宝的 2088 账号，如不了解此字段如何获取，可了解下静默授权。如参数无法提供，请填写“null”。	示例：2088501624560335
     */
    user_id: string;
    /**
     * 用于输入用户注册支付宝的手机号码。如参数无法提供，请填写“null”。	示例：13810935692
     */
    mobile_no: string;
    /**
     * 用于输入用户身份证号。如参数无法提供，请填写“null”。	示例：13810935692
     */
    cert_no?: string;
    /**
     * 用于输入用户产生交易时的地理位置信息。如参数无法提供，请填写“null”。	示例：30.2727707248263
     */
    lbs?: string;
    /**
     * 用户购买或使用服务时产生的具体金额。如参数无法提供，请填写“null”。	示例：97.23
     */
    sales_amount?: string;
  }
  interface IMyApNsfResult {
    /**
     * 风险识别结果
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
     * 风险信息描述
     * @description 示例值：风险信息描述。	{\"rank0\":\"等级0\"}
     */
    riskResultDesc: string;
    /**
     * 业务唯一识别码，用户标识请求信息。
     * @description 示例值：0b92uueie87636222
     */
    uniqueId: string;
  }
  interface IMyApPreventCheatBizContext {
    /**
     * 合作伙伴匹配服务类型,请按照示例值填写
     * @description 示例值: 固定传 marketing
     */
    service: string;
    /**
     * 风险策略类型，请按照示例值填写
     * @description 示例值: 固定传 riskinfo_anticheat_common
     */
    risk_type: string;
    /**
     * 用于输入用户注册的手机号码
     * @description 示例值: 13810935692
     */
    mobile_no: string;
    /**
     * 申请业务合作伙伴 ID
     * @description 示例值: 20881111222222
     */
    pid: string;
    /**
     * 支付宝用户 ID
     * @description 示例值: 20881111222233
     */
    user_id?: string;
    /**
     * 银行卡号
     * @description 示例值: 62223456765456
     */
    bank_card_no?: string;
    /**
     * 用于输入用户的身份证号码
     * @description 示例值: 230109199911110921
     */
    cert_no?: string;
    /**
     * 账户登录 IP
     * @description 示例值: 192.168.0.1
     */
    client_ip?: string;
    /**
     * 邮箱账号
     * @description 示例值: zhifubao@163.com
     */
    email_address?: string;
    /**
     * 手机序列号
     * @description 示例值: 865736031418584
     */
    imei?: string;
    /**
     * 国际移动用户识别码
     * @description 示例值: 460001234567890
     */
    imsi?: string;
    /**
     * MAC 地址或设备唯一标识
     * @description 示例值: 42.118.71.72
     */
    mac_address?: string;
    /**
     * 拓展字段，其余信息通过此字段进行传输
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
     * 风险识别结果
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
     * 风险信息描述
     * @description {\"rank0\":\"等级0\"}
     */
    riskResultDesc: string;
    /**
     * 业务唯一识别码
     * @description
     * 用户标识请求信息
     * 示例值：0b92uueie87636222
     */
    uniqueId: string;
  }
  interface IMyApStartAPVerifyResult {
    /**
     * 业务错误码
     */
    errorCode: string;
    /**
     * 本次认证流水号
     */
    certifyId: string;
  }
  interface IMyChooseAlipayContactContacts {
    /**
     * 账号的真实姓名。
     */
    realName: string;
    /**
     * 账号的头像链接。
     */
    avatar: string;
    /**
     * 账号的邮箱
     */
    email?: string;
    /**
     * 支付宝账号唯一标识符
     */
    userId: string;
    /**
     * 账号对应的手机号码
     * @description
     * 请在手机端开启支付宝客户端 APP 的通讯录权限，否则可能出现获取不到手机号码的情况。
     * 手机本地系统通讯录号码需要与支付宝好友手机号码一致，否则可能出现获取不到手机号码的情况。
     */
    mobile?: string;
    from?: never;
  }
  interface IMyChooseContactContactsDicArray {
    /**
     * 支付宝账号唯一标识符。
     */
    userId: string;
    /**
     * 账号的头像链接。
     */
    avatar: string;
    /**
     * 账号对应的手机号码。
     * @description
     * 请在手机端开启支付宝客户端 APP 的通讯录权限，否则可能出现获取不到手机号码的情况。
     * 手机本地系统通讯录号码需要与支付宝好友手机号码一致，否则可能出现获取不到手机号码的情况。
     */
    mobile: string;
    /**
     * 账号的真实姓名。
     */
    realName: string;
    /**
     * 账号的显示名称，即支付宝设置的备注名称，默认为朋友圈里面的昵称。
     */
    displayName: string;
    account?: never;
  }
  interface IMyChooseImageTempFiles {
    /**
     * 路径
     */
    path: string;
    /**
     * 大小，单位为 B
     */
    size: number;
  }
  interface IMyCreateAnimationParam {
    /**
     * 动画持续时间，单位 ms
     * @default 400
     */
    duration?: number;
    /**
     * 动画的效果
     * @default "linear"
     */
    timeFunction?: string;
    /**
     * 动画延迟时间，单位 ms
     */
    delay?: number;
    /**
     * 动画变形的原点
     * @default "50% 50% 0"
     */
    transformOrigin?: string;
  }
  interface IMyCreateInsuranceXReplaySessionOption {
    /**
     * 保险单号
     */
    prodNo: string;
  }
  interface IMyCreateRDSContextOption {
    /**
     * 应用  id
     */
    appId: string;
  }
  interface IMyCreateSelectorQueryOption {
    /**
     * 是否开启选择器严格模式
     */
    strict?: boolean;
  }
  interface IMyCreateTCPSocketOption {
    /**
     * 绑定到当前 WiFi
     * @description 用于 WiFi 无法上网，仍需要与 WiFi 通信的场景
     */
    bindToWifi?: boolean;
  }
  interface IMyCreateUDPSocketOption {
    /**
     * 是否开启广播
     */
    broadcast?: boolean;
    /**
     * 是否开启组播
     */
    multicast?: boolean;
    /**
     * 绑定到当前 WiFi; 用于 WiFi 无法上网，仍需要与 WiFi 通信的场景
     */
    bindToWifi?: boolean;
  }
  interface IMyGetAccountInfoSyncMiniProgram {
    /**
     * 小程序 appId
     */
    appId: string;
    /**
     * 小程序当前运行的版本
     */
    envVersion: 'release' | 'develop' | 'trial' | 'gray';
    /**
     * 线上小程序版本号
     */
    version: string;
  }
  interface IMyGetAccountInfoSyncPlugin {
    /**
     * 插件 appId
     */
    appId: string;
    /**
     * 插件版本号
     */
    version: string;
  }
  interface IMyGetLeftButtonsBoundingClientRectBackButtonIcon {
    /**
     * 宽度，单位 px
     * @example 22
     */
    width: number;
    /**
     * 高度，单位 px
     * @example 22
     */
    height: number;
    /**
     * 上边界坐标，单位 px
     * @example 48
     */
    top: number;
    /**
     * 右边界坐标，单位 px
     * @example 32
     */
    right: number;
    /**
     * 下边界坐标，单位 px
     * @example 70
     */
    bottom: number;
    /**
     * 左边界坐标，单位 px
     * @example 10
     */
    left: number;
  }
  interface IMyGetLocationPois {
    /**
     * poi名称。
     */
    number: string;
    /**
     * poi地址。
     */
    address: string;
  }
  interface IMyGetLocationStreetNumber {
    /**
     * 街道 number。
     */
    number: string;
    /**
     * 街道名称。
     */
    street: string;
  }
  interface IMyGetOpenUserInfoProtocols {
    [key: string]: unknown;
  }
  interface IMyGetOpenUserInfoResponse {
    response: IMyGetOpenUserInfoResponseResponse;
  }
  interface IMyGetOpenUserInfoResponseResponse {
    /**
     * 头像图片地址
     */
    avatar: string;
    /**
     * 结果码。10000 为成功，其他情况为失败。40003 和 40006 是较为常见的报错
     */
    code: string;
    /**
     * 昵称
     */
    nickName: string;
    /**
     * 结果消息
     */
    subMsg: string;
  }
  interface IMyGetPhoneNumberProtocols {
    [key: string]: unknown;
  }
  interface IMyGetRunDataProtocols {
    [key: string]: unknown;
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
     * 字体样式
     * @description 可选值为 normal / italic / oblique
     * @default "normal"
     */
    style?: string;
    /**
     * 设置小型大写字母的字体显示文本
     * @default "normal"
     */
    variant?: string;
    /**
     * 字体粗细
     * @default "normal"
     */
    weight?: string;
    stretch?: string;
    featureSetting?: string;
    unicodeRange?: string;
  }
  interface IMyNavigateToEvents {
    /**
     * 特定事件名监听回调
     */
    [eventName: string]: (...args: unknown[]) => void;
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
  interface IMyRequestSubscribeMessageResult {
    /**
     * 仅在订阅成功场景下存在，表示订阅成功的模板列表
     */
    subscribeEntityIds?: string[];
    /**
     * 最终订阅成功的模板列表
     */
    subscribedEntityIds: string[];
    /**
     * 未订阅的模板列表
     */
    unsubscribedEntityIds: string[];
    /**
     * 本次新增订阅成功的模板列表
     */
    currentSubscribedEntityIds: string[];
    /**
     * 仅在取消订阅场景下存在，是传入的模板id集合
     */
    entityList?: string[];
  }
  interface IMyShowActionSheetBadges {
    /**
     * 需要飘红的选项的索引，从 0 开始
     */
    index: number;
    /**
     * 飘红类型
     * @default "none"
     */
    type: `${EActionSheetBadgesType}`;
    /**
     * type 为 'text', 'num' 时的内容
     */
    text: string;
  }
  interface IOnSocketTaskCloseData {
    /**
     * 唯一标识
     */
    socketTaskID: string;
  }
  interface IOnSocketTaskErrorData {
    /**
     * 唯一标识
     */
    socketTaskID: string;
  }
  interface IOnSocketTaskMessageData {
    /**
     * 唯一标识
     */
    socketTaskID: string;
    /**
     * 消息
     */
    data: string | ArrayBuffer;
    /**
     * 是否 Buffer 类型
     */
    isBuffer: boolean;
  }
  interface IOnSocketTaskOpenData {
    /**
     * 唯一标识
     */
    socketTaskID: string;
  }
  interface IOpenSettingAuthSetting {
    /**
     * 地理位置
     */
    location?: boolean;
    /**
     * 保存到相册
     */
    album?: boolean;
    /**
     * 摄像头
     */
    camera?: boolean;
    /**
     * 唤起授权界面，用户可以授权小程序获取支付宝会员的基础信息
     */
    userInfo?: boolean;
    /**
     * 运动数据
     */
    alipaysports?: boolean;
    /**
     * 手机号码
     */
    phoneNumber?: boolean;
    /**
     * 收货地址
     */
    aliaddress?: boolean;
  }
  interface IRegionPickerMergeOptions {
    /**
     * 删除城市信息。
     */
    remove?: IRegionPickerMergeOptionsRemove[];
    /**
     * 添加城市信息。
     */
    add?: IRegionPickerMergeOptionsAdd[];
    /**
     * 更新城市信息。
     */
    update?: IRegionPickerMergeOptionsUpdate[];
  }
  interface IRegionPickerMergeOptionsAdd {
    /**
     * 插入点之上的省份 ID。
     */
    pid: string;
    /**
     * 插入点之下的省份 ID。
     */
    nextId: string;
    /**
     * 增加对象的 ID。
     */
    id: string;
    /**
     * 增加对象的名称。
     */
    name: string;
    /**
     * 省内完整的市和区信息
     * @description
     * 示例：`"subList": [{
     * "name": "北京市", "id": "110100", "subList": [{ "name": "东城区", "id": "110101" }]`
     */
    subList: IRegionPickerMergeOptionsAddSubList[];
  }
  interface IRegionPickerMergeOptionsAddSubList {
    /**
     * 名称
     */
    name: string;
    /**
     * ud
     */
    id: string;
  }
  interface IRegionPickerMergeOptionsRemove {
    /**
     * 需要移除的省份 ID。
     */
    id: string;
  }
  interface IRegionPickerMergeOptionsUpdate {
    /**
     * 更新对象的 ID。
     */
    id: string;
    /**
     * 增加对象的名称。
     */
    name: string;
    /**
     * 省内完整的市和区信息
     * @description 示例：`"subList": [{ "name": "北京市", "id": "110100", "subList": [{ "name": "东城区", "id": "110101" }]`
     */
    subList: IRegionPickerMergeOptionsUpdateSubList[];
  }
  interface IRegionPickerMergeOptionsUpdateSubList {
    /**
     * 名称
     */
    name: string;
    /**
     * ud
     */
    id: string;
  }
  interface IRequestTaskOnHeadersReceivedHeaders {
    [key: string]: string;
  }
  interface ISelectorQueryFieldsOption {
    /**
     * 是否返回节点 id
     */
    id?: boolean;
    /**
     * 是否返回节点 dataset
     */
    dataset?: boolean;
    /**
     * 是否返回节点布局位置: left, right, top, bottom
     */
    rect?: boolean;
    /**
     * 是否返回节点尺寸: width, height
     */
    size?: boolean;
    /**
     * 是否返回节点的（仅当节点为 scroll-view / viewport 时）
     */
    scrollOffset?: boolean;
    /**
     * 指定样式名列表，返回节点对应样式名的当前值
     */
    computedStyle?: string[];
    /**
     * 是否返回节点对应的上下文对象
     */
    context?: boolean;
    /**
     * 是否返回节点对应的 Node （仅当 Canvas 时）
     */
    node?: boolean;
  }
  interface ISetWifiListWifiList {
    /**
     * Wifi 的 SSID
     */
    SSID: string;
    /**
     * Wifi 的 BSSID
     */
    BSSID: string;
    /**
     * Wi-Fi 设备密码
     */
    password: string;
  }
  interface ITypeBLECharacteristic {
    /**
     * 蓝牙设备特征值的 UUID。
     */
    characteristicId: string;
    /**
     * 蓝牙设备特征值对应服务的 UUID。
     */
    serviceId: string;
    /**
     * 蓝牙设备特征值对应的 16 进制值。
     */
    value: string;
    /**
     * 该特征值支持的操作类型。
     */
    properties?: IBLECharacteristicProperties;
  }
  interface ITypeBluetoothDevice {
    /**
     * 蓝牙设备名称（某些设备可能没有）
     */
    name: string;
    /**
     * 低版本客户端提供，与 name 一致
     */
    deviceName: string;
    /**
     * 广播设备名称
     */
    localName: string;
    /**
     * 设备 ID
     * @description
     * 需要分平台处理
     * - Android 上为设备 MAC 地址
     * - iOS 上为设备 UUID，可根据设备属性（ localName / advertisData / manufacturerData 等属性）进行动态匹配
     */
    deviceId: string;
    /**
     * 设备信号强度
     */
    RSSI: string;
    /**
     * 设备的广播内容。为 16 进制Hex字符串
     */
    advertisData: string;
    /**
     * 设备的 manufacturerData。为 16 进制Hex字符串
     */
    manufacturerData: string;
  }
  interface ITypeCityInfo {
    /**
     * 城市名。
     */
    city: string;
    /**
     * 行政区划代码。不同行政区域对应的代码可参见 中华人民共和国县以上行政区划代码。
     */
    adCode: string;
    /**
     * 城市名对应拼音拼写，方便用户搜索。
     */
    spell: string;
  }
  interface ITypeDOMMatrix2DInit {
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
  interface ITypeIntersectionObserverOption {
    /**
     * 一个数值数组，包含所有阈值
     */
    thresholds?: number[];
    /**
     * 初始的相交比例，如果调用时检测到的相交比例与这个值不相等且达到阈值，则会触发一次监听器的回调函数
     */
    initialRatio?: number;
    /**
     * 是否全选
     */
    selectAll?: boolean;
    /**
     * 是否返回节点上的 dataset
     */
    dataset?: boolean;
    /**
     * 是否严格模式
     */
    strict?: boolean;
  }
  interface ITypeReferrerInfo {
    /**
     * 来源小程序。
     */
    appId: string;
    /**
     * 以小服务模式启动的来源信息，目前已废弃
     */
    sourceServiceId?: string;
    /**
     * 来源小程序传过来的数据。
     */
    extraData: Record<string, unknown>;
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
  interface IUploadTaskOffHeadersReceivedHeader {
    /**
     * HTTP Header
     */
    [key: string]: string;
  }
  interface IUploadTaskOnHeadersReceivedHeader {
    /**
     * HTTP Header
     */
    [key: string]: string;
  }
  interface IWifiConnectedWifi {
    /**
     * Wifi 的 SSID
     */
    SSID: string;
    /**
     * Wifi 的 BSSID
     */
    BSSID: string;
    /**
     * Wifi 是否安全
     */
    secure: boolean;
    /**
     * Wifi 信号强度
     */
    signalStrength: number;
  }
}

declare namespace my.ap {
  /**
   * 获取支付宝首页左上角的城市选择信息
   * @see https://opendocs.alipay.com/mini/api/getMainSelectedCity
   */
  export function getMainSelectedCity(object?: {
    /**
     * 是否需要获取城市的全称；
     * 比如北京的全称为北京市；
     * 默认返回简称
     * @default false
     */
    needFullName?: boolean;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 城市的全称，比如北京，对应的全称为北京市
       */
      fullName?: string;
      /**
       * 城市英文名称
       */
      enName?: string;
      /**
       * 区县英文名称
       */
      enDistrictName?: string;
      /**
       * 城市名称
       */
      name: string;
      /**
       * 城市编码
       */
      code: string;
      /**
       * 是否是中国大陆
       */
      chineseMainLand: boolean;
      /**
       * 是否是手动选择
       */
      isManualSelected: boolean;
      /**
       * 设置时间
       */
      settingTime: number;
      /**
       * 区县名
       */
      districtName?: string;
      /**
       * 区县编码
       */
      districtCode?: string;
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
             * 城市的全称，比如北京，对应的全称为北京市
             */
            fullName?: string;
            /**
             * 城市英文名称
             */
            enName?: string;
            /**
             * 区县英文名称
             */
            enDistrictName?: string;
            /**
             * 城市名称
             */
            name: string;
            /**
             * 城市编码
             */
            code: string;
            /**
             * 是否是中国大陆
             */
            chineseMainLand: boolean;
            /**
             * 是否是手动选择
             */
            isManualSelected: boolean;
            /**
             * 设置时间
             */
            settingTime: number;
            /**
             * 区县名
             */
            districtName?: string;
            /**
             * 区县编码
             */
            districtCode?: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 城市的全称，比如北京，对应的全称为北京市
     */
    fullName?: string;
    /**
     * 城市英文名称
     */
    enName?: string;
    /**
     * 区县英文名称
     */
    enDistrictName?: string;
    /**
     * 城市名称
     */
    name: string;
    /**
     * 城市编码
     */
    code: string;
    /**
     * 是否是中国大陆
     */
    chineseMainLand: boolean;
    /**
     * 是否是手动选择
     */
    isManualSelected: boolean;
    /**
     * 设置时间
     */
    settingTime: number;
    /**
     * 区县名
     */
    districtName?: string;
    /**
     * 区县编码
     */
    districtCode?: string;
  }>;
  /**
   * 图片风险任务提交接口
   * @description 用于识别图片是否有色情、违禁违法等内容
   * @see https://opendocs.alipay.com/mini/api/img_risk
   */
  export function imgRisk(object: {
    /**
     * 小程序的开放平台账号
     */
    pid: string;
    /**
     * 小程序对应的 APPID
     */
    appId: string;
    /**
     * 需要识别的业务参数
     */
    bizContext: IMyApImgRiskBizContext;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 是否调用成功
       */
      success: boolean;
      /**
       * 图片风险识别的任务的任务ID
       */
      riskResult: string;
      /**
       * 风险识别结果描述
       */
      riskResultDesc: string;
      /**
       * 业务唯一识别码
       */
      uniqueId: string;
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
             * 是否调用成功
             */
            success: boolean;
            /**
             * 图片风险识别的任务的任务ID
             */
            riskResult: string;
            /**
             * 风险识别结果描述
             */
            riskResultDesc: string;
            /**
             * 业务唯一识别码
             */
            uniqueId: string;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 是否调用成功
     */
    success: boolean;
    /**
     * 图片风险识别的任务的任务ID
     */
    riskResult: string;
    /**
     * 风险识别结果描述
     */
    riskResultDesc: string;
    /**
     * 业务唯一识别码
     */
    uniqueId: string;
  }>;
  /**
   * 查询图片的风险识别结果的 API
   * @see https://opendocs.alipay.com/mini/api/ze6675
   */
  export function imgRiskCallback(object: {
    /**
     * 小程序的开放平台账号
     */
    pid: string;
    /**
     * 小程序对应的 APPID
     */
    appId: string;
    /**
     * 需要识别的业务参数
     */
    bizContext: IMyApImgRiskCallbackBizContext;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 是否调用成功
       */
      success: boolean;
      /**
       * 风险识别的结果
       */
      riskResult: string;
      /**
       * 风险识别结果描述
       */
      riskResultDesc: string;
      /**
       * 业务唯一识别码
       */
      uniqueId: string;
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
            errorMessage: '参数错误';
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
    ): void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(
      arg:
        | {
            /**
             * 是否调用成功
             */
            success: boolean;
            /**
             * 风险识别的结果
             */
            riskResult: string;
            /**
             * 风险识别结果描述
             */
            riskResultDesc: string;
            /**
             * 业务唯一识别码
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
                errorMessage: '参数错误';
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
          )
    ): void;
  }): Promise<{
    /**
     * 是否调用成功
     */
    success: boolean;
    /**
     * 风险识别的结果
     */
    riskResult: string;
    /**
     * 风险识别结果描述
     */
    riskResultDesc: string;
    /**
     * 业务唯一识别码
     */
    uniqueId: string;
  }>;
  /**
   * 跳转到支付宝客户端内指定页面
   * @see https://opendocs.alipay.com/mini/api/navigatetoalipaypage
   */
  export function navigateToAlipayPage(object: {
    /**
     * 要跳转的支付宝官方业务。例如付款码，appCode: 'payCode'
     */
    appCode:
      | 'alipayScan'
      | 'redPacket'
      | 'collectOil'
      | 'tinyAppSHH'
      | 'antForest'
      | 'antFarm'
      | 'stockDetail'
      | 'payCode';
    /**
     * appCode 配套参数，需要和 appCode 搭配使用
     */
    appParams?: Record<string, unknown>;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 跳转成功
       */
      success: true;
      /**
       * 错误消息（新版本无此字段）
       */
      errorMsg?: never;
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
             * 跳转成功
             */
            success: true;
            /**
             * 错误消息（新版本无此字段）
             */
            errorMsg?: never;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 跳转成功
     */
    success: true;
    /**
     * 错误消息（新版本无此字段）
     */
    errorMsg?: never;
  }>;
  /**
   * 跳转到支付宝客户端内指定页面
   * @see https://opendocs.alipay.com/mini/api/navigatetoalipaypage
   */
  export function navigateToAlipayPage(object: {
    /**
     * 跳转 appCode 涵盖范围之外的支付宝业务、运营活动页面，请使用 path 属性。可传入 scheme 或 URL：
     * @description
     * - 如果 url 中带有参数，请务必先将整个 url 做 encode 处理
     * - 可跳转域名以  https://render.alipay.com/p 开头的支付宝业务、运营页面
     */
    path: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 跳转成功
       */
      success: true;
      /**
       * 错误消息（新版本无此字段）
       */
      errorMsg?: never;
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
             * 跳转成功
             */
            success: true;
            /**
             * 错误消息（新版本无此字段）
             */
            errorMsg?: never;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 跳转成功
     */
    success: true;
    /**
     * 错误消息（新版本无此字段）
     */
    errorMsg?: never;
  }>;
  /**
   * 跳转到财富页面
   */
  export function navigateToFinance(object: {
    /**
     * 跳转类型，固定为 fundDetail
     */
    type: 'fundDetail';
    /**
     * 基金代码
     */
    fundCode: string;
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
   * 跳转到财富页面
   */
  export function navigateToFinance(object: {
    /**
     * 跳转类型，固定为 portfolioDetail
     */
    type: 'portfolioDetail';
    /**
     * 基金组合代码
     */
    fundCode: string;
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
   * 跳转到财富页面
   */
  export function navigateToFinance(object: {
    /**
     * 跳转类型，固定为 fundBuy
     */
    type: 'fundBuy';
    /**
     * 基金代码
     */
    fundCode: string;
    /**
     * 下单金额
     */
    amount: string | number;
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
   * 跳转到财富页面
   */
  export function navigateToFinance(object: {
    /**
     * 跳转类型，固定为 goldBuy
     */
    type: 'goldBuy';
    /**
     * 黄金对应的基金代码
     */
    fundCode: string;
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
   * 跳转到财富页面
   */
  export function navigateToFinance(object: {
    /**
     * 跳转类型，固定为 portfolioBuy
     */
    type: 'portfolioBuy';
    /**
     * 基金组合代码
     */
    fundCode: string;
    /**
     * 下单金额
     */
    amount: string | number;
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
   * 跳转到财富页面
   */
  export function navigateToFinance(object: {
    /**
     * 跳转类型，固定为 fundSign
     */
    type: 'fundSign';
    /**
     * 基金代码
     */
    fundCode: string;
    /**
     * 定投金额
     */
    amount: string | number;
    /**
     * 定投周期 E:每日, W:每周, D:每两周, M:每月,
     */
    period: string;
    /**
     * 定投日期 周维度:1-5,月维度1-28
     */
    day: string | number;
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
   * 跳转到财富页面
   */
  export function navigateToFinance(object: {
    /**
     * 跳转类型，固定为 goldSign
     */
    type: 'goldSign';
    /**
     * 黄金对应的基金代码
     */
    funcCode: string;
    /**
     * 定投金额
     */
    amount: string | number;
    /**
     * 定投周期 E:每日, W:每周, D:每两周, M:每月,
     */
    period: string;
    /**
     * 定投日期 周维度:1-5,月维度1-28
     */
    day: string | number;
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
   * 跳转到财富页面
   */
  export function navigateToFinance(object: {
    /**
     * 跳转类型，固定为 wealthShop
     */
    type: 'wealthShop';
    /**
     * 机构 pid
     */
    pid: string;
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
   * 跳转到财富页面
   */
  export function navigateToFinance(object: {
    /**
     * 跳转类型，固定为 h5Page
     */
    type: 'h5Page';
    /**
     * H5 页面链接
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
  }): Promise<void>;
  /**
   * 判断用户在先享后付场景下是否有风险的 API
   * @see https://opendocs.alipay.com/mini/api/nsf
   */
  export function nsf(object: {
    /**
     * 小程序的开放平台账号。
     */
    pid: string;
    /**
     * 需要识别的业务参数
     */
    bizContext: IMyApNsfBizContext;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 风险识别的返回结果
       */
      result: IMyApNsfResult;
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
             * 风险识别的返回结果
             */
            result: IMyApNsfResult;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 风险识别的返回结果
     */
    result: IMyApNsfResult;
  }>;
  /**
   * 打开支付宝里的官方应用
   * @see https://opendocs.alipay.com/mini/04p771
   */
  export function openAlipayApp(object: {
    /**
     * 目标应用标识
     */
    appCode: string;
    /**
     * 传给目标应用的参数
     */
    appParams?: Record<string, unknown>;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {}): void;
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
            error: 2;
            errorMessage: '参数无效';
          }
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
            errorMessage: '参数无效';
          }
    ): void;
  }): Promise<void>;
  /**
   * 跳转到支付宝卡列表界面
   * @see https://opendocs.alipay.com/mini/api/qxxpsh
   */
  export function openCardList(object?: {
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
   * 跳转到当前用户的某张券的（口碑）详情页
   */
  export function openKBVoucherDetail(object: {
    /**
     * 卡实例 ID，调用 [券发放接口](https://docs.open.alipay.com/api_24/alipay.pass.instance.add) 可以获取该参数。
     */
    passId: string;
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
   * 跳转到当前用户的某张券的（口碑）详情页
   */
  export function openKBVoucherDetail(object: {
    /**
     * 商户编号。
     */
    partnerId: string;
    /**
     * 序列号。
     */
    serialNumber: string;
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
   * 跳转到指定商户的卡列表界面
   * @see https://opendocs.alipay.com/mini/api/axfplw
   */
  export function openMerchantCardList(object: {
    /**
     * 商户编号。
     */
    partnerId: string;
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
   * 跳转到当前用户在指定商户的已领取票列表界面
   * @see https://opendocs.alipay.com/mini/api/yee76y
   */
  export function openMerchantTicketList(object: {
    /**
     * 商户编号。
     */
    partnerId: string;
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
   * 跳转到当前用户在指定商户的已领取券列表界面
   * @see https://opendocs.alipay.com/mini/api/sgvgu6
   */
  export function openMerchantVoucherList(object: {
    /**
     * 商户编号。
     */
    partnerId: string;
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
   * 跳转到当前用户领取某张票的详情界面
   * @see https://opendocs.alipay.com/mini/api/ry7ftz
   */
  export function openTicketDetail(object: {
    /**
     * 卡实例 ID，调用 [券发放接口](https://docs.open.alipay.com/api_24/alipay.pass.instance.add) 可以获取该参数。
     */
    passId: string;
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
   * 跳转到当前用户领取某张票的详情界面
   * @see https://opendocs.alipay.com/mini/api/ry7ftz
   */
  export function openTicketDetail(object: {
    /**
     * 商户编号。
     */
    partnerId: string;
    /**
     * 序列号。
     */
    serialNumber: string;
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
   * 跳转到支付宝票列表界面
   * @see https://opendocs.alipay.com/mini/api/ezt6u3
   */
  export function openTicketList(object?: {
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
   * 通用跳转接口
   * @see https://opendocs.alipay.com/mini/04iy2y
   */
  export function openURL(object: {
    /**
     * 目标 url。以 https:// 或 alipays:// 开头
     */
    url: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {}): void;
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
            error: 2;
            errorMessage: '参数无效';
          }
        | {
            error: 60002;
            errorMessage: '目标地址不在白名单';
          }
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
            errorMessage: '参数无效';
          }
        | {
            error: 60002;
            errorMessage: '目标地址不在白名单';
          }
    ): void;
  }): Promise<void>;
  /**
   * 跳转到当前用户领取某张券的详情页（非口碑券）
   * @see https://opendocs.alipay.com/mini/api/ga4obi
   */
  export function openVoucherDetail(object: {
    /**
     * 卡实例 ID，调用 [券发放接口](https://docs.open.alipay.com/api_24/alipay.pass.instance.add) 可以获取该参数。
     */
    passId: string;
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
   * 跳转到当前用户领取某张券的详情页（非口碑券）
   * @see https://opendocs.alipay.com/mini/api/ga4obi
   */
  export function openVoucherDetail(object: {
    /**
     * 商户编号。
     */
    partnerId: string;
    /**
     * 序列号。
     */
    serialNumber: string;
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
   * 跳转到支付宝券列表界面
   * @see https://opendocs.alipay.com/mini/api/vq3mgn
   */
  export function openVoucherList(object?: {
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
   * 反作弊
   * @see https://opendocs.alipay.com/mini/api/antimarketcheat
   */
  export function preventCheat(object: {
    /**
     * 小程序的开放平台账号。
     */
    pid: string;
    /**
     * 需要识别的业务参数
     */
    bizContext: IMyApPreventCheatBizContext;
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 风险识别的返回结果
       */
      result: IMyApPreventCheatResult;
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
             * 风险识别的返回结果
             */
            result: IMyApPreventCheatResult;
          }
        | {
            error?: number;
            errorMessage?: string;
          }
    ): void;
  }): Promise<{
    /**
     * 风险识别的返回结果
     */
    result: IMyApPreventCheatResult;
  }>;
  /**
   * 跳转到支付宝客户端升级界面
   * @see https://opendocs.alipay.com/mini/api/updatealipayclient
   */
  export function updateAlipayClient(object?: {
    /**
     * 接口调用成功的回调函数
     */
    success?(data: {
      /**
       * 代表是否跳转成功
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
             * 代表是否跳转成功
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
     * 代表是否跳转成功
     */
    success: true;
  }>;
}

declare namespace my.cloud {
  /**
   * 创建并返回云托管上下文
   */
  export function createCloudContext(param: {
    /**
     * 环境
     */
    env: string;
    /**
     * 应用 id
     */
    appId?: string;
  }): CloudContext;
}

declare const enum EActionSheetBadgesType {
  /**
   * 显示文本
   */
  text = 'text',
  /**
   * 显示数字, text 为小数或 ≤ 0 均不显示，≥ 100 显示 "•••"
   */
  num = 'num',
  /**
   * 仅显示小红点
   */
  point = 'point',
  /**
   * 显示 "•••"
   */
  more = 'more',
  /**
   * 不显示
   */
  none = 'none',
}

declare const enum EBeaconUpdateBeaconsProximity {
  /**
   * 未知
   */
  _0 = 0,
  /**
   * 极近
   */
  _1 = 1,
  /**
   * 近
   */
  _2 = 2,
  /**
   * 远
   */
  _3 = 3,
}

declare const enum ECalculateRouteMode {
  /**
   * 最快捷模式，速度优先（时间）。
   */
  _0 = 0,
  /**
   * 最经济模式，费用优先（不走收费路段的最快道路）。
   */
  _1 = 1,
  /**
   * 最少换乘模式，距离优先。
   */
  _2 = 2,
  /**
   * 最少步行模式，不走快速路。
   */
  _3 = 3,
  /**
   * 最舒适模式，结合实时交通（躲避拥堵）。
   */
  _4 = 4,
  /**
   * 不乘地铁模式，多策略（同时使用速度优先、费用优先、距离优先三个策略）。
   */
  _5 = 5,
  /**
   * 不走高速。
   */
  _6 = 6,
  /**
   * 不走高速且避免收费。
   */
  _7 = 7,
  /**
   * 躲避收费和拥堵。
   */
  _8 = 8,
  /**
   * 不走高速且躲避收费和拥堵。
   */
  _9 = 9,
}

declare const enum EChooseDistrictMode {
  /**
   * 境内
   */
  _0 = 0,
  /**
   * 境外
   */
  _1 = 1,
  /**
   * 境内+境外
   */
  _2 = 2,
}

declare const enum EChooseImageSizeType {
  /**
   * 原图
   */
  original = 'original',
  /**
   * 压缩图
   */
  compressed = 'compressed',
}

declare const enum EChooseImageSourceType {
  /**
   * 拍照
   */
  camera = 'camera',
  /**
   * 相册选取
   */
  album = 'album',
}

declare const enum EChooseVideoCamera {
  /**
   * 默认拉起后置摄像头。
   */
  back = 'back',
  /**
   * 默认拉起前置摄像头。
   */
  front = 'front',
}

declare const enum EChooseVideoSourceType {
  /**
   * 从相册选择视频。
   */
  album = 'album',
  /**
   * 使用相机拍摄视频。
   */
  camera = 'camera',
}

declare const enum ECompressImageCompressLevel {
  /**
   * 低质量
   */
  _0 = 0,
  /**
   * 中等质量
   */
  _1 = 1,
  /**
   * 高质量
   */
  _2 = 2,
  /**
   * 不压缩
   */
  _3 = 3,
  /**
   * 根据网络适应
   */
  _4 = 4,
}

declare const enum EGetBLEDeviceStatusAuthStatus {
  /**
   * 表示应用从未用过蓝牙（第一次使用时，会有系统弹窗授权提示）
   */
  _0 = 0,
  /**
   * 表示当前蓝牙授权是被拒绝状态
   */
  _2 = 2,
  /**
   * 表示蓝牙已被授权
   */
  _3 = 3,
}

declare const enum EGetBLEDeviceStatusPowerStatus {
  /**
   * 表示设备不支持
   */
  _2 = 2,
  /**
   * 表示蓝牙开关是关闭的
   */
  _4 = 4,
  /**
   * 表示蓝牙开关是打开的
   */
  _5 = 5,
}

declare const enum EGetNetworkTypeNetworkInfo {
  /**
   * 未知
   */
  UNKNOWN = 'UNKNOWN',
  /**
   * 网络不可用
   */
  NOTREACHABLE = 'NOTREACHABLE',
  /**
   * WiFi
   */
  WIFI = 'WIFI',
  /**
   * 3G
   */
  '3G' = '3G',
  /**
   * 2G
   */
  '2G' = '2G',
  /**
   * 4G
   */
  '4G' = '4G',
  /**
   * WWAN
   */
  WWAN = 'WWAN',
}

declare const enum EGetVideoInfoOrientation {
  /**
   * 默认
   */
  _0 = 0,
  /**
   * 180度旋转
   */
  _1 = 1,
  /**
   * 逆时针旋转90度
   */
  _2 = 2,
  /**
   * 顺时针旋转90度
   */
  _3 = 3,
}

declare const enum EMapContextShowRouteMode {
  /**
   * 公交 - 最快捷模式，驾车 - 速度优先（时间）
   */
  _0 = 0,
  /**
   * 公交 - 最经济模式，驾车 - 费用优先（不走收费路段的最快道路）
   */
  _1 = 1,
  /**
   * 公交 - 最少换乘模式，驾车 - 距离优先
   */
  _2 = 2,
  /**
   * 公交 - 最少步行模式，驾车 - 不走快速路
   */
  _3 = 3,
  /**
   * 公交 - 最舒适模式，驾车 - 结合实时交通（躲避拥堵）
   */
  _4 = 4,
  /**
   * 公交 - 不乘地铁模式，驾车 - 多策略（同时使用速度优先、费用优先、距离优先三个策略）
   */
  _5 = 5,
  /**
   * 驾车 - 不走高速
   */
  _6 = 6,
  /**
   * 驾车 - 不走高速且避免收费
   */
  _7 = 7,
  /**
   * 驾车 - 躲避收费和拥堵
   */
  _8 = 8,
  /**
   * 驾车 - 不走高速且躲避收费和拥堵
   */
  _9 = 9,
}

declare const enum EMemoryWarningLevel {
  /**
   * 低内存告警
   */
  _10 = 10,
  /**
   * 重度内存告警
   */
  _15 = 15,
}

declare const enum EMyGetLocationType {
  /**
   * 获取经纬度
   */
  _0 = 0,
  /**
   * 获取经纬度和详细到区县级别的逆地理编码数据
   */
  _1 = 1,
  /**
   * 获取经纬度和详细到街道级别的逆地理编码数据
   * @description 不推荐使用，精度过高，接口返回的速度会变慢。
   */
  _2 = 2,
  /**
   * 获取经纬度和详细到POI级别的逆地理编码数据
   * @description 不推荐使用，精度过高，接口返回的速度会变慢。
   */
  _3 = 3,
}

declare const enum EShowAuthGuideAuthType {
  /**
   * 蓝牙
   */
  BLUETOOTH = 'BLUETOOTH',
  /**
   * 后台保活权限
   */
  BACKGROUNDER = 'BACKGROUNDER',
  /**
   * 桌面快捷权限
   */
  SHORTCUT = 'SHORTCUT',
  /**
   * Push 通知栏权限
   */
  NOTIFICATION = 'NOTIFICATION',
  /**
   * 自启动权限
   */
  SELFSTARTING = 'SELFSTARTING',
  /**
   * 存储权限
   */
  STORAGE = 'STORAGE',
  /**
   * 麦克风权限
   */
  MICROPHONE = 'MICROPHONE',
  /**
   * 通讯录权限
   */
  ADDRESSBOOK = 'ADDRESSBOOK',
  /**
   * 相机权限
   */
  CAMERA = 'CAMERA',
  /**
   * 照片权限
   */
  PHOTO = 'PHOTO',
  /**
   * 地理位置系统总开关
   */
  LBSSERVICE = 'LBSSERVICE',
  /**
   * 地理位置应用级别开关
   */
  LBS = 'LBS',
  /**
   * 高精度地理位置开关
   */
  LBSHIGHACCURACY = 'LBSHIGHACCURACY',
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
