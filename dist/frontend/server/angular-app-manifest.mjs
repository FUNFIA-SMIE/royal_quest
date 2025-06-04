
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
    'index.csr.html': {size: 108817, hash: '01e46855556e5e5978f2a5d9af5853428e7f3c98cfa929762d7d414199232ccf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 52550, hash: '90521da95af62e8b496d043181d82bb7c1bfd6ab4373145ea18c56b1265cc08c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WE4RJYOT.css': {size: 565935, hash: 'PBXPo+ugZlM', text: () => import('./assets-chunks/styles-WE4RJYOT_css.mjs').then(m => m.default)}
  },
};
