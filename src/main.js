// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import messages from './i18n';
import Vuex from './vuex'
import Common from './common'
import './assets/css/base.scss'
import 'iview/dist/styles/iview.css';
import 'normalize.css'

Vue.config.productionTip = false;

Vue.use(VueI18n);
Vue.use(Common);
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
});

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  Vuex,
  components: { App },
  template: '<App/>'
}).$mount('#app');
