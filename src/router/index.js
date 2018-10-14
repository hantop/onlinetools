import Vue from 'vue'
import Router from 'vue-router'
import tools from '../tools'

Vue.use(Router)

let routerTools = [...tools]

export default new Router({
  routes: routerTools
})
