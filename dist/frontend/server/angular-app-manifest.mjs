
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-AXZB4TTI.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 108723, hash: '17189c0a28727d172fc4f3bc31537e1e8d651cf28932e590260ef24ff4fcb27f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 52456, hash: '2f878c5fd5a3336cf97101c6d25a9ed621357384f0987a64158f640bcef1977e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-OQDSVMIW.css': {size: 565830, hash: 'Ltm/kswdZtM', text: () => import('./assets-chunks/styles-OQDSVMIW_css.mjs').then(m => m.default)}
  },
};
