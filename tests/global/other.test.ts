import { expectAssignable } from 'tsd-lite';

requirePlugin('myPlugin');

const result = requirePlugin<{
  foo: string;
}>('tetrisPlugin');

expectAssignable<string>(result.foo);

requirePlugin.async('tetrisPlugin');

const result2 = requirePlugin.async<{
  foo: string;
}>('tetrisPlugin');

expectAssignable<Promise<{ foo: string }>>(result2);
