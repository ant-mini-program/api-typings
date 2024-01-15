import type { MiniProgramWorker } from '../../packages/global/types/lib.worker';
import { expectAssignable } from 'tsd-lite';

declare const worker: MiniProgramWorker;

expectAssignable<(cb: (evt: any) => any) => any>(worker.onMessage);
expectAssignable<(message: any) => any>(worker.postMessage);
expectAssignable<() => any>(worker.testOnProcessKilled);
