/* eslint-disable @typescript-eslint/ban-ts-ignore */
import _Vue from 'vue';
import { IVueUseImgixOptions } from './types';
import { initVueImgix, IxImg } from './vue-imgix';

// Declare install function executed by Vue.use()
export function install(Vue: typeof _Vue, options: IVueUseImgixOptions) {
  if (install.installed) return;
  install.installed = true;
  initVueImgix(options);
  Vue.component('ix-img', IxImg);
}
install.installed = false;

// Create module definition for Vue.use()
const plugin = {
  install,
};

// To allow use as module (npm/webpack/etc.) export component
export default plugin;
export * from './vue-imgix';
