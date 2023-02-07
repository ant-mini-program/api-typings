import { expectAssignable } from 'tsd-lite';

let fs = my.getFileSystemManager();
my.downloadFile({
  url: 'https://assets.msn.cn/staticsb/statics/latest/widget/LoadingImg.gif',
  success(res1: { apFilePath: string; tempFilePath: string }): void {
    fs.saveFile({
      tempFilePath: res1.tempFilePath,
      filePath: `${my.env.USER_DATA_PATH}/LoadingImg.gif`,
      success(res2): void {
        expectAssignable<string>(res2.savedFilePath);
        console.log(res2);
      },
    });
  },
});

let result = fs.accessSync(`${my.env.USER_DATA_PATH}/test.txt`);
console.log(result);
expectAssignable<boolean>(result.success);
