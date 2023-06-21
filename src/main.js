import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import router from './router'
import _ from 'lodash'
Vue.config.productionTip = false
Vue.use(Antd);
Vue.prototype._ = _
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
