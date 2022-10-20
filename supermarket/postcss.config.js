
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      //因为在手机上是高清屏幕  是相当于一个点拥有两个像素
      //iphone6  是（750+1334）——》375+667
      viewportWidth: 375,  //视窗的宽度，对应的是我们设计稿的宽度（750）.
      viewportHeight: 667,  //视窗的高度，对应的是我们设计稿的高度.(也可以不配置)
      unitPrecision: 2,  //指定px转换为视窗单位值的小数位数(很多时候无法整除)
      viewportUnit: 'vw',  //指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: [], //指定不需要转换的类，后面再讲.
      minPixelValue: 1,   //小于或等于1px不转换为视窗单位，
      mediaQuery: flase, //允许媒体查询中换砖’px‘
      exclue:[/TabBar/]   //内涵字符串的话必须是正则形式

    },
  }
}
