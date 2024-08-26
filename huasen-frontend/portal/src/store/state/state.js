/*
 * @Autor: huasenjio
 * @Date: 2021-08-25 01:53:35
 * @LastEditors: huasenjio
 * @LastEditTime: 2023-03-30 00:42:12
 * @Description: 数据状态树
 */
export default {
  // 用户数据
  user: {
    id: 'localhost@qq.com',
    name: '本地用户',
    headImg: '',
    token: '',
    code: 1,
    records: [],
    config: {
      // 色值｜图片链接| base64
      bg: require('@/assets/img/wallpaper/3.jpeg'),
      // 顶栏文字颜色
      headerFontColor: '#ffffff',
      // 背景模糊度 0-10
      bgFilter: 0,
      // 背景明暗0-1（黑）
      bgLightness: 0,
      // 极简模式
      simpleMode: false,
      // 明亮模式
      lightMode: true,
      // 配色
      theme: {},
      // 搜索联想数量
      searchAssociationCount: 6,
      // 搜索框圆角
      searchBorderRadius: 24,
      // 预选搜索引擎索引
      searchEngineIndex: 2,
      // 显示左侧切换栏
      showNavbar: true,
      // 城市码
      cityCode: 101210101,
      // 城市名
      cityName: '杭州'
    },
  },
  // 全部站点
  sites: [],
  // 选中订阅源的站点
  categorySites: [],

  showWrapSidebar: true,
  showWrapSidebarSocket: false,
  showWrapConnect: false,
  showWrapSign: false,
  showWrapPerson: false,
  showForm: false,

  // 主题配置
  themeConfig: {
    pure: [],
    wallpaper: [],
    defaultWallpaper: {},
  },

  // 系统配置
  appConfig: {
    // 是否已加载配置
    loaded: false,

    article: {
      id: '',
      course: '',
      about: '',
      help: '',
      notice: '',
    },
    site: {
      name: '花森',
      logoURL: require('@/assets/img/logo/favicon.svg'),
      redirectURL: 'http://huasenjio.top/',
      guidePageName: '花森小窝',
      guidePageUrl: 'http://huasenjio.top/',
      footerHtml: '',
      openLabelClassification: false,
    },
  },
};
