import Vue from 'vue'
import App from './App'

import garden from './pages/garden/home.vue'
Vue.component('garden',garden)

import topic from './pages/garden/topic.vue'
Vue.component('topic',topic)

import recommend from './pages/garden/recommend.vue'
Vue.component('recommend',recommend)

import timeLine from './pages/garden/timeLine.vue'
Vue.component('timeLine',timeLine)

import imageText from './pages/garden/imageText.vue'
Vue.component('imageText',imageText)

import shareText from './pages/garden/shareText.vue'
Vue.component('shareText',shareText)

import basics from './pages/basics/home.vue'
Vue.component('basics',basics)

import components from './pages/component/home.vue'
Vue.component('components',components)

import plugin from './pages/plugin/home.vue'
Vue.component('plugin',plugin)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



