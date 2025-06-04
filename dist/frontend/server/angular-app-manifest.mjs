
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
    'index.csr.html': {size: 108817, hash: '4204bbf3242ee6c023937c94f296cfe0b276957104bba0ddb39c6e8da29894e6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 52550, hash: '11622214c2cce53687b2ba8f0ae661fde2c917fd5fe589f7e9ab45425c2a09fd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WE4RJYOT.css': {size: 565935, hash: 'PBXPo+ugZlM', text: () => import('./assets-chunks/styles-WE4RJYOT_css.mjs').then(m => m.default)}
  },
};
