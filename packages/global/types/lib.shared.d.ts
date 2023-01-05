declare namespace MiniProgram.Shared {
  interface SetUpdatePerformanceListenerOption<WithDataPath extends boolean> {
    /**
     * 是否返回变更的 data 字段信息
     */
    withDataPaths?: WithDataPath;
  }

  interface UpdatePerformanceListener<WithDataPath extends boolean> {
    (res: ISetUpdatePerformanceListenerResult<WithDataPath>): void;
  }

  interface ISingleSetDataPerformanceInfo<WithDataPath extends boolean> {
    /** setData ID */
    id: number;
    /** 加入到队列的时间 */
    pendingStartTimestamp: number;
    /** 本次更新的 data，所包含的 key 值 */
    dataPaths?: WithDataPath extends true ? string[] : undefined;
  }

  interface ISetUpdatePerformanceListenerResult<WithDataPath extends boolean> {
    /** 其他组件更新，而导致的更新 */
    isMergedUpdate: boolean;
    /** 更新批次 ID */
    updateProcessId: number;
    /** 父更新批次 ID */
    parentUpdateProcessId?: number;
    /**
     * 本批次合并之后的 data，所包含的 key 值
     */
    dataPaths?: WithDataPath extends true ? string[] : undefined;
    /** 组件第一条数据，加入到队列的时间 */
    pendingStartTimestamp?: number;
    /** render 侧接收到，data 数据的时间 */
    updateStartTimestamp?: number;
    /** render 侧完成 UI 更新的时间 */
    updateEndTimestamp?: number;
    /**
     * 本批次所有 setData 的数据信息
     */
    dataList: ISingleSetDataPerformanceInfo<WithDataPath>[];
  }
}
