export interface MiniProgramWorker {
  onMessage<T = Record<string, unknown>>(cb: (message: T) => void): void;
  postMessage<T = Record<string, unknown>>(message: T): void;
}

declare var worker: MiniProgramWorker;
