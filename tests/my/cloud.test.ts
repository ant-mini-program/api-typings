import { expectAssignable, expectType } from 'tsd-lite';

async function main() {
  const c1 = my.cloud.createCloudContext({
    env: 'env-xxx', // 云托管环境 id
  });
  // 云托管环境初始化
  await c1.init();

  // 调用云函数
  const res = await c1.callFunction({
    name: 'add',
    data: { num1: 1, num2: 2 },
  });

  expectType<any>(res.result);
  expectType<string>(res.requestID);

  {
    // 调用云存储上传接口
    const res = await c1.uploadFile({
      cloudPath: 'example.png',
      filePath: 'xxx',
    });
    console.log(res);
    expectType<string>(res.fileID);
    expectType<number>(res.statusCode);
    expectType<string>(res.requestID);
  }

  {
    // 调用云存储下载接口
    const res = await c1.downloadFile({
      fileID: 'cloud://env-file/example.png',
    });
    expectType<string>(res.tempFilePath);
    expectType<number>(res.statusCode);
    expectType<string>(res.requestID);
  }

  {
    // 调用删除云文件接口
    const res = await c1.deleteFile({
      fileList: ['cloud://env-xxxx/example.png'],
    });
  }

  {
    // 获取云文件临时链接
    const res = await c1.getTempFileURL({
      fileList: [
        'cloud://env-xxxx/example1.png',
        { fileID: 'cloud://env-xxxx/example2.png', maxAge: 3600 },
      ],
    });
  }

  {
    // 调用云托管服务
    const res = await c1.callContainer({
      path: '/api/count', // 云托管服务路径
      method: 'GET', // HTTP 方法
      header: {
        'X-Alipay-Service': 'antprod', // 云托管服务名称
      },
    });
  }
  {
    // 获取 Database 实例
    // const db = c1.database();
  }
}
