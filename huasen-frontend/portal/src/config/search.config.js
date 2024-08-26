/*
 * @Autor: huasenjio
 * @Date: 2022-02-11 00:40:08
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-23 00:14:30
 * @Description: 搜索引擎配置
 */
const searchs = [
  {
    url: 'https://metaso.cn',
    key: 'q',
    params: {},
    name: '秘塔AI',
    iconClass: 'iconfont icon-metaso',
  },
  {
    url: 'https://www.google.com/search',
    key: 'q',
    params: {},
    name: '谷歌',
    iconClass: 'iconfont icon-chrome',
  },
  {
    url: 'https://cn.bing.com/search',
    key: 'q',
    params: {},
    name: '必应',
    iconClass: 'iconfont icon-yingyong',
  },
  {
    url: 'https://dict.youdao.com/search',
    key: 'q',
    params: {},
    name: '翻译',
    iconClass: 'iconfont icon-translate',
  },
  {
    url: 'https://duckduckgo.com/',
    key: 'q',
    params: {},
    name: '匿名',
    iconClass: 'iconfont icon-md-cube',
  },
  {
    url: 'localhost',
    key: 'instation',
    params: {},
    name: '站内',
    iconClass: 'iconfont icon-md-planet',
  },
];
export default searchs;
