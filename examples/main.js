import Vue from 'vue'
import App from './App.vue'
import ColorPicker from './../packages/index'
import 'element-ui/lib/theme-chalk/index.css';
import {
    Table,
    TableColumn,
} from 'element-ui'
Vue.use(Table)
Vue.use(TableColumn)

Vue.use(ColorPicker)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
