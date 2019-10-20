import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('nd-button', Button)
Vue.component('nd-icon', Icon)

new Vue({
    el: "#app",
    data: {
        loading1: false
    }
})