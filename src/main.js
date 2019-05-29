// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import FastClick from 'fastclick'
import router from './router'
import store from './store'


import loading from './common/imgs/loading.gif' //引入加载中图片
import './mock/mockServer' // 加载mockServer即可
import './filters' // 加载过滤器


// /**引入图片懒加载 */
// import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload, {  //内部自定义一个指令lazy
//   loading
// });

/**引入vant */
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use( Vant );

// import {Button} from 'mint-ui'
import {
    Lazyload
} from 'vant';
// 注册全局组件标签
// Vue.component(Button.name, Button)  // <mt-button>

Vue.use( Lazyload, {
    loading
} );

// 引入fastclick库：解决移动端300毫秒点击延迟
FastClick.attach( document.body );

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue( {
    el: '#app',
    render: h => h( App ),
    router, // 使用上路由
    store, // 使用上vuex
    // components: { App },
    // template: '<App/>'
} )