
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-BMKSFG3B.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 107536, hash: '73c106b147543f75f14634c264cb2801116ca15c16a14ebd85a13e178a6cd225', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 51527, hash: '935c8c7c0e9b3f078fb3b0628fc67a38891fae2d43bb456d7f7460007f048a15', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-OYUANOM2.css': {size: 566871, hash: 'K11NrbAtR9M', text: () => import('./assets-chunks/styles-OYUANOM2_css.mjs').then(m => m.default)}
  },
};
