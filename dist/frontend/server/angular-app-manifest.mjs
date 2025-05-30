
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
    'index.csr.html': {size: 108817, hash: 'da3a526f617cbced994ad4c97c18e3018248e592ae95fdc5b63fcd58e3c6d215', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 52550, hash: '5550a3108d98a02f8fcfb8a912c0bbf0411314c8d5768e77d7873430b2f760e5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WE4RJYOT.css': {size: 565935, hash: 'PBXPo+ugZlM', text: () => import('./assets-chunks/styles-WE4RJYOT_css.mjs').then(m => m.default)}
  },
};
