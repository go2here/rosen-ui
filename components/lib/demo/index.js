import Vue from 'vue'
import Demo from './src/main.vue'

Demo.install = function () { 
  Vue.component(Demo.name, Demo)
}

export default Demo
