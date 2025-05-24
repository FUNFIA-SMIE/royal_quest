
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
    'index.csr.html': {size: 108832, hash: '512d29e6bc4ab939b24aec15a5c4f9c077c2b638288581120973ad6de426e708', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 52565, hash: '678adfcc8fe5685cd8e77b5baf091c94d2b25c7bd5b4a89826f9fa990fb3e901', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-OQDSVMIW.css': {size: 565830, hash: 'Ltm/kswdZtM', text: () => import('./assets-chunks/styles-OQDSVMIW_css.mjs').then(m => m.default)}
  },
};
