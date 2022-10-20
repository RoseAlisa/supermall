import {request} from './index';

export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}
export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params: {
      type,page
    }
  })
}
//问号后面就是params
