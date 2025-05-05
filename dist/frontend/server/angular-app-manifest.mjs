
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
    'index.csr.html': {size: 108723, hash: '164ae01bbee99e455c0741e0396ad8b7327658c71d4cefb4a9f8288323914899', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 52456, hash: '603123cb1dd4a4d70cf2a1d6b0b9b15da2cf0e1704fa14fe0032bc122207715a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-OQDSVMIW.css': {size: 565830, hash: 'Ltm/kswdZtM', text: () => import('./assets-chunks/styles-OQDSVMIW_css.mjs').then(m => m.default)}
  },
};
