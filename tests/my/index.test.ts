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

expectAssignable<Parameters<typeof my.chooseDistrict>[0]>({
  mode: 2,
  mainTitle: '境内',
  mainHeadList: [
    {
      title: '定位模块',
      type: 1,
      list: []
    },
    {
      title: '热门城市',
      list: [
        { name: '杭州', adCode: '330100' },
        { name: '北京', adCode: '110100' },
        { name: '上海', adCode: '310100' },
        { name: '广州', adCode: '440100' },
        { name: '深圳', adCode: '440300' },
      ],
    },
  ],
  mainNormalList: [
    {
      name: '北京市',
      adCode: '110100',
      appendName: '北京',
      subList: [
        { name: '昌平区', adCode: '110114' },
        { name: '朝阳区', adCode: '110105' },
        { name: '大兴区', adCode: '110115' },
        { name: '东城区', adCode: '110101' },
        { name: '房山区', adCode: '110111' },
        { name: '丰台区', adCode: '110106' },
        { name: '海淀区', adCode: '110108' },
        { name: '怀柔区', adCode: '110116' },
        { name: '门头沟区', adCode: '110109' },
        { name: '密云区', adCode: '110118' },
        { name: '平谷区', adCode: '110117' },
        { name: '石景山区', adCode: '110107' },
        { name: '顺义区', adCode: '110113' },
        { name: '通州区', adCode: '110112' },
        { name: '西城区', adCode: '110102' },
        { name: '延庆区', adCode: '110119' },
      ],
    },
  ],
  // 境外
  seniorTitle: '境外/港澳台',
  seniorPageList: [
    {
      title: '亚洲',
      headList: [
        {
          title: '热门城市列表',
          list: [{ name: '东京', adCode: '39200037000000000000' }],
        },
      ],
      normalList: [
        { name: '喀布尔', adCode: '00400003000100000000' },
        { name: '迪拜', adCode: '78400003000300000000' },
      ],
    },
    {
      title: '大洋洲',
      normalList: [
        { name: '堪培拉', adCode: '03600001000100000000' },
        { name: '斐济', adCode: '24200001000100000000' },
      ],
    },
  ],
} as Parameters<typeof my.chooseDistrict>[0]);

my.chooseDistrict({
  mode: 2,
  mainTitle: '境内',
  mainHeadList: [
    {
      title: '定位模块',
      type: 1,
      list: []
    },
    {
      title: '热门城市',
      list: [
        { name: '杭州', adCode: '330100' },
        { name: '北京', adCode: '110100' },
        { name: '上海', adCode: '310100' },
        { name: '广州', adCode: '440100' },
        { name: '深圳', adCode: '440300' },
      ],
    },
  ],
  mainNormalList: [
    {
      name: '北京市',
      adCode: '110100',
      appendName: '北京',
      subList: [
        { name: '昌平区', adCode: '110114' },
        { name: '朝阳区', adCode: '110105' },
        { name: '大兴区', adCode: '110115' },
        { name: '东城区', adCode: '110101' },
        { name: '房山区', adCode: '110111' },
        { name: '丰台区', adCode: '110106' },
        { name: '海淀区', adCode: '110108' },
        { name: '怀柔区', adCode: '110116' },
        { name: '门头沟区', adCode: '110109' },
        { name: '密云区', adCode: '110118' },
        { name: '平谷区', adCode: '110117' },
        { name: '石景山区', adCode: '110107' },
        { name: '顺义区', adCode: '110113' },
        { name: '通州区', adCode: '110112' },
        { name: '西城区', adCode: '110102' },
        { name: '延庆区', adCode: '110119' },
      ],
    },
  ],
  // 境外
  seniorTitle: '境外/港澳台',
  seniorPageList: [
    {
      title: '亚洲',
      headList: [
        {
          title: '热门城市列表',
          list: [{ name: '东京', adCode: '39200037000000000000' }],
        },
      ],
      normalList: [
        { name: '喀布尔', adCode: '00400003000100000000' },
        { name: '迪拜', adCode: '78400003000300000000' },
      ],
    },
    {
      title: '大洋洲',
      normalList: [
        { name: '堪培拉', adCode: '03600001000100000000' },
        { name: '斐济', adCode: '24200001000100000000' },
      ],
    },
  ],
  success: (res) => {
    expectAssignable<string>(res.name);
    expectAssignable<string>(res.adCode);
  },
});
