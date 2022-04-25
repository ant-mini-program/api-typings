declare namespace my {
  /**
   * @description 通用形式
   * @param name JSAPI 名称
   * @param opt JSAPI 入参
   * @param callback 回调
   */
  export function call(
    name: string,
    opt: any,
    callback: (resp: any) => void
  ): void;
  /**
   * @description 无入参形式
   * @param name JSAPI 名称
   * @param callback 回调
   */
  export function call(name: string, callback: (resp: any) => void): void;
  /**
   * @description 无回调返回 Promise 形式
   * @param name JSAPI 名称
   * @param opt JSAPI 入参
   */
  export function call(name: string, opt?: any): Promise<any>;

  /**
   * @param eventName 需要监听的事件名
   * @param callback 事件被触发后的回调函数
   */
  export function on(
    eventName: string,
    callback: (...args: any) => any
  ): {
    /**
     * @description 调用该方法后，可移除刚才监听的事件
     */
    remove: () => void;
  };

  /**
   * @param eventName 需要监听的事件名
   * @param callback 事件被触发后的回调函数
   */
  export function off(eventName: string, callback: (...args: any) => any): void;
  export function canIUse(name: string): boolean;
}
