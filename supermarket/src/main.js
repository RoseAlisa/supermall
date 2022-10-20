import Vue from 'vue'
import App from './App.vue'
import router from './router'

//vuex
import store from './store/detail'

//自定义封装的组件
import toast from 'components/components/common/toast/index'
 Vue.use(toast)

//全局引用外部组件vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//解决移动端点击延迟问题fastclick
import FastClick from 'fastclick'
FastClick.attach(document.body)

//图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  loading:require("@/assets/img/common/placeholder.png")
})

// const app = createApp(App)
Vue.config.productionTip = false

//添加事件总线对象
Vue.prototype.$bus = new Vue()


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

// app.use(router).mount('#app')

