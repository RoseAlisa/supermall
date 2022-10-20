import Toast from "./Toast";

const obj ={}
//在main的js中Vue.use()启动后会调用下面install函数
obj.install = function (Vue){
  //1.创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  //2,new的方式 根据组件构建器，可以创建出来一个组件对象
  const toast = new toastContrustor()
  //3将组件对象手动挂载到某一个元素上面
  toast.$mount(document.createElement('div'))
  //4,toast.$el 对应的就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast

}
export default obj
