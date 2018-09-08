import Icon from './icon'


const install = function (Vue, config = {}) {
  if (install.installed) return;
  Vue.component(Icon.name, Icon);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
