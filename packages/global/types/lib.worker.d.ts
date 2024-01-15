interface MiniProgramWorker {
  onMessage<T = Record<string, unknown>>(cb: (message: T) => void): void;
  postMessage<T = Record<string, unknown>>(message: T): void;
  /**
   * 用于模拟 iOS ExperimentalWorker 线程被系统回收事件，主线程中通过 Worker.onProcessKilled 监听， 以便于调试。
   * 仅限 iOS 系统， 仅支持在 worker 线程内可用。
   */
  testOnProcessKilled(): void;
}

declare var worker: MiniProgramWorker;
