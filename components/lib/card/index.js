import Vue from 'vue'
import Card from './src/main.vue'

Card.install = function () { 
  Vue.component(Card.name, Card)
}

export default Card
