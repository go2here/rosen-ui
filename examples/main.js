import Vue from 'vue'
import App from './App.vue'

import '../components/css/demo.scss'
import '../components/css/card.scss'
import Demo from '../components/lib/demo/index'
import Card from '../components/lib/card/index'

Vue.use(Demo) // Demo.install -> Vue.component()
Vue.use(Card) // Card.install -> Vue.component()

// import '../components/css/index.scss'
// import RUI from '../components/lib/index'
// Vue.use(RUI)

// // 按需引用
// import 'rosen-ui/dist/css/demo.css'
// import { Demo } from 'rosen-ui'
// Vue.use(Demo)

// // 按需引用
// import 'rosen-ui/dist/css/card.css'
// import { Card } from 'rosen-ui'
// Vue.use(Card)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
