export interface ISetUpdatePerformanceListenerOptions {
  withDataPaths?: boolean;
}

export interface ISingleSetDataPerformanceInfo {
  /** setData ID */
  id: number;
  /** 加入到队列的时间 */
  pendingStartTimestamp: number;
  /** 本次更新的 data，所包含的 key 值 */
  dataPaths?: string[];
}

export interface ISetUpdatePerformanceListenerResult {
  /** 其他组件更新，而导致的更新 */
  isMergedUpdate: boolean;
  /** 更新批次 ID */
  updateProcessId: number;
  /** 父更新批次 ID */
  parentUpdateProcessId?: number;
  /**
   * 本批次合并之后的 data，所包含的 key 值
   */
  dataPaths?: string[];
  /** 组件第一条数据，加入到队列的时间 */
  pendingStartTimestamp?: number;
  /** render 侧接收到，data 数据的时间 */
  updateStartTimestamp?: number;
  /** render 侧完成 UI 更新的时间 */
  updateEndTimestamp?: number;
  /**
   * 本批次所有 setData 的数据信息
   */
  dataList: ISingleSetDataPerformanceInfo[];
}
