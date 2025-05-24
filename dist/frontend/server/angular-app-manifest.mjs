
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
    'index.csr.html': {size: 108817, hash: 'dddc401704de7c88771075f43cf293bf3f50094375766ae5c04ea0b529ba5a8a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 52550, hash: '84344243b9e72fda1be203fd0e9defac8e5366b7d1c4e8f12ee5e3b6aa06ea80', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-OQDSVMIW.css': {size: 565830, hash: 'Ltm/kswdZtM', text: () => import('./assets-chunks/styles-OQDSVMIW_css.mjs').then(m => m.default)}
  },
};
