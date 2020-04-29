// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  head.meta.push({
    name: 'google-site-verification',
    content: 'g_OioDQ7RmpuQ-S_Q21ZSKtySbblvCDLP8QpQrV4a7E',
  });
  head.meta.push({
    name: 'yandex-verification',
    content: 'cf9068e357b1ca4e',
  });
}
