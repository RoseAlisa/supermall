import axios from 'axios';

export function request(config) {
//1.创建axios实例
  const instance = axios.create({
    baseURL:'http://152.136.185.210:7878/api/hy66',
    timeout:5000
  })

//2axios的拦截器interceptors（此为局部拦截，原本为全局拦截）
//   instance.interceptors.request.use(config =>{
//     alert(" 你好,欢迎观领！")
//     return config
//   },err =>{
//     console.log(err)
//   })

//3：发送真正的网络请求
  return instance (config)

}
