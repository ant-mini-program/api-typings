import '../../packages/global/types/lib.worker';
import { expectAssignable } from 'tsd-lite';

expectAssignable<(cb: (evt: any) => any) => any>(worker.onMessage);
expectAssignable<(message: any) => any>(worker.postMessage);
expectAssignable<() => any>(worker.testOnProcessKilled);
