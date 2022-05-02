import Vue from 'vue'
import App from './App.vue'

// 全部引用
import 'rosen-ui/dist/css/index.css'
import RUI from 'rosen-ui'
Vue.use(RUI)

// // 按需引用
// import 'rosen-ui/dist/css/demo.css'
// import Demo from 'rosen-ui'
// Vue.use(Demo)

// // 按需引用
// import 'rosen-ui/dist/css/card.css'
// import card from 'rosen-ui'
// Vue.use(card)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
