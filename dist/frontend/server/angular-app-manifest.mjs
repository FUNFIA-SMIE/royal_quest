
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
    'index.csr.html': {size: 108723, hash: 'b4342166e6643b8d4a1327ae6ecd38cee68c3dcbb114d35e3be29e65e47c72f3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 52456, hash: '04728c09edeaf76b8218fcabba7cf7d72496851a4bb239b175fc8ad214908ac0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-OQDSVMIW.css': {size: 565830, hash: 'Ltm/kswdZtM', text: () => import('./assets-chunks/styles-OQDSVMIW_css.mjs').then(m => m.default)}
  },
};
