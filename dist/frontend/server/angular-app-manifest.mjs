
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-TK7YTYS6.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 108817, hash: '094906a1bc1113f7ffe86f50ac56504dbf6e8b20c0ac6ee5834ae3cd230a0813', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 52550, hash: '118726dd2067406dd0f1fc5978e272d7b65e19025b70bf688edc76a83f6ad56c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WE4RJYOT.css': {size: 565935, hash: 'PBXPo+ugZlM', text: () => import('./assets-chunks/styles-WE4RJYOT_css.mjs').then(m => m.default)}
  },
};
