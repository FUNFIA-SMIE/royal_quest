
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-BF3GZZ7S.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 108817, hash: 'b08c958eeead0587e74c2a35784d417e69acbc8dbf40fe3786dce60eff8df247', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 52550, hash: 'b19e10980dbf9a789abd8edca02e669d9f339b6667435f820e0c9742ff33da3b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-OQDSVMIW.css': {size: 565830, hash: 'Ltm/kswdZtM', text: () => import('./assets-chunks/styles-OQDSVMIW_css.mjs').then(m => m.default)}
  },
};
