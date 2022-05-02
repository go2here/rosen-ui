import Vue from 'vue'
import App from './App.vue'

// import '../components/css/demo.scss'
// import '../components/css/card.scss'
// import Demo from '../components/lib/demo/index'
// import Card from '../components/lib/card/index'

// // Vue.component('Demo', Demo)
// Vue.use(Demo) // Demo.install -> Vue.component()
// Vue.use(Card)

// 全部引用
import 'rosen-ui/dist/css/index.css'
import RUI from 'rosen-ui'
Vue.use(RUI)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
