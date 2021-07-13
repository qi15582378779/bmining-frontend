import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/base.scss';
import './assets/style/element-ui.scss';
import './assets/style/theme.scss';
import {svga} from 'vue-svga';
import store from './store/index'

import {
    Button,
    Dialog,
    Input,
} from 'element-ui';

const elementComponents = [
    Button,
    Dialog,
    Input,
];

elementComponents.forEach((component) => {
    Vue.component(component.name, component);
});

Vue.config.productionTip = false;
Vue.use(svga);

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
