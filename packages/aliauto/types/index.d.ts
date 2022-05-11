/**
 * @summary 阿里车小程序域的js-api命名空间。
 */
declare namespace my.aliauto {
  export function getVehicleInfo(r: {
    /**
     * @summary  获取车辆信息。
     * @description
     * - 需要用户授权之后才能正常获取。
     * - 获取对象部份属性可能为空。
     */
    success(data: {
      VIN: string;
      /**
       * @summary 获取车辆车架VIN号.
       */
      engineNo: string;
      /**
       * @summary 发动机号,可能为空。
       */
      plateNumber: string;
      /**
       * @summary 车牌号,可能为空。
       */
      vehicleType: string;
      /**
       * @summary 车辆类型,可能为空。
       */
      brand: string;
      /**
       * @summary 品牌,可能为空。
       */
      energyType: string;
      /**
       * @summary 能源类型,可能为空。
       */
      JV: string;
      /**
       * @summary 合资类型,可能为空。
       */
    }): void;
    fail?(): void;
  }): void;
  export function getVehicleAccountInfo(r?: {
    /**
     *  获取车机账号
     */
    success?(data: {
      id: String;
      /**
       *  车机账号id
       */
      token: string;
      /**
       *  车机账号token,可能为空。
       */
    }): void;
    fail?(): void;
  }): void;
  export function openCarInfoSettings(r?: {
    /**
     * @summary 打开车辆信息设置
     */
    success?(): void;
    fail?(): void;
  }): void;

  export function getDrivingBlock(r?: {
    /**
     * @summary 获取行车状态的是否需要限制操作。
     */
    success?(data: {
      type: String;
      /**
          type=0 name=无限制,
          type=1 name=操作限制,
          type=2 name=显示限制,
          type=2 name=显示限制&操作限制,
          type=4 name=全部限制，
        */
      name: String;
      /**
          type=0 name=无限制,
          type=1 name=操作限制,
          type=2 name=显示限制,
          type=2 name=显示限制&操作限制,
          type=4 name=全部限制，
        */
    }): void;
    fail?(): void;
    complete?(): void;
  }): void;

  export function offDrivingBlock(): void;
  /**
   * @summary 取消监听行车限制操作状态变化。
   */
  export function onDrivingBlock(
    cb: (arg: {
      /**
       * @summary 注册监听行车限制操作状态变化。
       */
      name:
        | '无限制'
        | '操作限制'
        | '显示限制'
        | '显示限制&操作限制'
        | '全部限制';
      /**
       * @summary 限制类型值
       */
      type: '0' | '1' | '2' | '3' | '4';
    }) => void
  ): void;

  export function navigateToLocation(r?: {
    /**
     * @summary 发起当前车辆位置到目的地的导航
     */
    latitude: number;
    longitude: number;
    mode: Number;
    name?: String;
    quickNavi?: boolean;
    waypoints?: Array<object>;
    success?(data: Position): void;
    fail?(): void;
    complete?(): void;
  }): void;
  export function getLastLocation(r?: {
    /*
     * @summary 获取用户当前的地理位置信息。
     */
    success?(data: Position): void;
    fail?(data: {
      code: string;
      /**
       * 2:参数错误。
       * 11:请确认定位相关权限已开启。
       * 12:网络异常，请稍后再试。
       * 13:定位失败，请稍后再试。
       * 14:业务定位超时。
       */
      message: string;
    }): void;
    complete?(): void;
  }): void;
  export function onLocation(r?: {
    /*
     * @summary 该接口注册的回调函数接收位置信息和错误信息。
     */
    success?(data: Position): void;
    fail?(data: {
      code: string;
      /**
       * 2:参数错误。
       * 11:请确认定位相关权限已开启。
       * 12:网络异常，请稍后再试。
       * 13:定位失败，请稍后再试。
       * 14:业务定位超时。
       */
      message: string;
    }): void;
    complete?(): void;
  }): void;
  export function removeLocationUpdates(r?: {
    /**
     * @summary 取消my.aliauto.requestLocationUpdates 请求的用户当前位置更新。。
     */
    success?(): void;
    fail?(): void;
    complete?(): void;
  }): void;
  export function requestGeocode(r?: {
    /**
     * @summary 根据地址查询经纬度
     */
    address: String;
    success?(data: Position): void;
    fail?(): void;
    complete?(): void;
  }): void;
  export function requestLocationUpdates(r?: {
    /*
     * @summary 更新当前位置
     */
    interval: Number;
    fastestInterval?: Number;
    priority?: Number;
    smallestDisplacement?: Number;
    timeout?: Number;
    needAddress?: Boolean;
    success?(data: Position): void;
    fail?(): void;
    complete?(): void;
  }): void;
  export function requestReverseGeocode(r?: {
    /*
     * @summary 根据经纬度查询地址。
     */
    latitude: Number;
    longitude?: Number;
    success?(data: Array<Position>): void;
    fail?(): void;
    complete?(): void;
  }): void;

  interface Position {
    accuracy: number;
    /**
     * 精确度，单位米
     */
    adCode: string;
    /**
     * 区县级别的地区代码
     */
    address: string;
    /**
     * 地址
     */
    altitude: Number;
    /**
     * 高度，单位米；海平面以上为正
     */
    area: String;
    /**
     *区域名称
     */
    bearing: Number;
    /**
     * 方位，单位度， 范围是 [0.0, 360.0)
     */
    city: String;
    /**
     * 城市
     */
    cityCode: String;
    /**
     * 城市级别的地区代码
     */
    country: String;
    /**
     * 国家
     */
    district: String;
    /**
     * 区县
     */
    latitude: Number;
    /**
     * GPS WGS84 坐标，纬度，单位度
     */
    longitude: Number;
    /**
     * GPS WGS84 坐标，经度，单位度
     */
    offsetlatitude: Number;
    /**
     * GCJ-02 坐标，纬度，单位度
     */
    offsetlongitude: Number;
    /**
     * GCJ-02 坐标，经度，单位度
     */
    poi: String;
    /**
     * 兴趣点（POI）名称
     */
    provider: string;
    /**
     * 地址提供者
     */
    province: String;
    /**
     * 省份
     */
    road: String;
    /**
     * 路名
     */
    speed: Number;
    /**
     * 地面速度，单位米每秒
     */
    time: Number;
    /**
     * 世界标准时间（UTC），1970 年 1 月 1 日零时以来的毫秒数
     */
  }

  export function offThemeChange(): void;
  /**
   * @summary 取消监听主题风格状态变化。
   */
  export function onThemeChange(
    cb: (arg: {
      /**
       * @summary 注册监听行主题风格状态变化。。
       */
      theme: 'light' | 'dark';
    }) => void
  ): void;
  export function changeCardMode(r: { cardMode: string }): void;
  /**
   * 入参：{cardMode:type} type参数为："big" "small", "mini"
   */
  export function currentCardMode(r?: {
    /**
     * @summary 该获取当前小程序窗口卡片形态。
     */
    success?(data: { cardMode: 'big' | 'small' | 'mini' }): void;
    fail?(): void;
    complete?(): void;
  }): void;

  export function offCardModeChange(): void;
  export function onCardModeChange(
    cb: (arg: {
      /**
       * @summary 监听卡片形态变化。
       */
      current: 'big' | 'small' | 'mini';
      /**
       * @summary 当前卡片形态
       */
      previous: 'big' | 'small' | 'mini';
      /**
       * @summary 改变前的卡片形态。
       */
    }) => void
  ): void;
  export function showModeChangeButton(r?: {
    /**
     * @summary 显示改变形态的按钮。
     */
    visible: boolean;
    /**
     * 是否可见。
     */
    shrinkCardMode: 'small' | 'mini';
    /**
     * 卡片形态，取值"small", "mini"。
     */
    success?(): void;
    fail?(): void;
    complete?(): void;
  }): void;

  export function say(
    /**
     * 调用系统TTS播报。
     */
    s: {
      spokenText: string;
      writtenText: string;
      tips: string;
    }
  ): void;

  export function tradePay(s: {
    /**
     * 阿里车机支付接口。
     */
    tradeNO: number;
    success?(data: {
      /**
       * 支付结果码。
       */
      resultCode: String;
    }): void;
    fail?(): void;
  });

  export function reportAnalytics(s: {
    /**
     * 需要在埋点平台提前配置。(有限支持，配合my.canIUse处理兼容).
     */
    eventName: String;
    data: Object;
  });

  export function createGeoFencing(s: {
    /**
     * 新增地理围栏。(有限支持，配合my.canIUse处理兼容).
     */
    businessId: String;
    /**
     *  围栏类型
     */
    fenceName: string;
    /**
     *  围栏唯一名称
     */
    latitude: Number;
    /**
     * 经度
     */
    longitude: Number;
    /**
     * 纬度
     */
    radius?: Number;
    /**
     *  围栏半径,单位m，默认值为500。
     */
    action: String;
    /**
     *  围栏动作，枚举值：enter 进入,exit 退出。
     */
    success?(data: {
      fenceId: String;
      /**
       *  围栏唯一Id.
       */
      businessId: String;
      /**
       *  围栏类型Id。
       */
    }): void;
    fail?(): void;
    complete?(): void;
  }): void;
  export function getGeoFencing(s: {
    /**
     * 获取地理围栏。(有限支持，配合my.canIUse处理兼容).
     */
    fenceId: String;
    /**
     *  围栏唯一ID
     */
    success?(data: {
      fenceData: Object;
      /**
       *  地理围栏数据.
       */
    }): void;
    fail?(): void;
    complete?(): void;
  }): void;
  export function setGeoFencing(s: {
    /**
     * 更新地理围栏。(有限支持，配合my.canIUse处理兼容).
     */
    fenceId: String;
    /**
     *  围栏唯一ID
     */
    action: String;
    /**
     *  围栏动作，枚举值：enter 进入,exit 退出。
     */
    businessId?: String;
    /**
     *  围栏类型
     */
    fenceName?: string;
    /**
     *  围栏唯一名称
     */
    latitude?: Number;
    /**
     * 经度
     */
    longitude?: Number;
    /**
     * 纬度
     */
    radius?: Number;
    /**
     *  围栏半径,单位m，默认值为500。
     */

    success?(data: {
      fenceId: String;
      /**
       *  围栏Id.
       */
      businessId: String;
      /**
       *  围栏类型Id。
       */
    }): void;
    fail?(): void;
    complete?(): void;
  }): void;

  export function onGeoFencing(s: {
    /**
     * 启用地理围栏。(有限支持，配合my.canIUse处理兼容).
     */
    fenceId: String;
    /**
     *  围栏唯一ID
     */
    success?(): void;
    fail?(): void;
  }): void;
  export function offGeoFencing(s: {
    /**
     * 停用地理围栏。(有限支持，配合my.canIUse处理兼容).
     */
    fenceId: String;
    /**
     *  围栏唯一ID
     */
    success?(): void;
    fail?(): void;
  }): void;
}
