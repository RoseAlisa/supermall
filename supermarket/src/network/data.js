import {request} from './index';

export function getDetail(iid){
return request({
  //请求数据——home界面中图片点击详情页面的信息
  url: '/detail',
  params: {
    iid
  }
})
}
//面对同一个页面中  数据来自不同的地方 （数据繁多  定义类进行存储）
export class Goods{
  constructor(itemInfo,columns,services) {
    this.title  = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldprice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realprice = itemInfo.lowNowPrice
  }
}
//店铺信息汇总
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}
//衣服详细数据信息
export class GoodsParams {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : "";
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
export function getRecommend(){
  return request({
    //请求数据——home界面中图片点击详情页面的信息
    url: '/recommend',
  })
}

