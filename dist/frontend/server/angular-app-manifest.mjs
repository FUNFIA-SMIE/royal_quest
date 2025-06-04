
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-NWLOCTBV.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 108817, hash: 'e372881a9fa64b0eb010f2d9eecfda237a552200f2c257f302bb4f85cdfe3340', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 52550, hash: 'a2a06d90ca114a9551d489a22e270c1f7f503463f67d82e0e33352a45b9831b8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WE4RJYOT.css': {size: 565935, hash: 'PBXPo+ugZlM', text: () => import('./assets-chunks/styles-WE4RJYOT_css.mjs').then(m => m.default)}
  },
};
