import { expectType } from 'tsd-lite';
import { IAppOnLaunchOptions } from '../../packages/global/types/lib.global.d';

App({
  onLaunch(options: IAppOnLaunchOptions<{ a: string }>) {
    console.log('App Launch', options);
    expectType<string>(options.path);
    expectType<string>(options.query.a);
    expectType<string>(options.referrerInfo.appId);
    expectType<string>(my.SDKVersion);
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
  },
  globalData: {
    hasLogin: false,
  },
});
