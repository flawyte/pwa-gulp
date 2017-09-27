importScripts('workbox-sw.prod.v1.3.0.js');

const workboxSW = new self.WorkboxSW();
workboxSW.precache([
  {
    "url": "bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html",
    "revision": "ca5dc881ff3603281e488d356e0e1b83"
  },
  {
    "url": "bower_components/iron-behaviors/iron-button-state.html",
    "revision": "9b16d4c937d51997492943334dcd12fe"
  },
  {
    "url": "bower_components/iron-behaviors/iron-control-state.html",
    "revision": "99abcf23eb60ce6d32ee61f129a1e848"
  },
  {
    "url": "bower_components/iron-flex-layout/iron-flex-layout.html",
    "revision": "3e285c2698feec264710fffd609630ad"
  },
  {
    "url": "bower_components/paper-behaviors/paper-button-behavior.html",
    "revision": "6c7a268ffee96dcb4970a58618f2c6df"
  },
  {
    "url": "bower_components/paper-behaviors/paper-ripple-behavior.html",
    "revision": "dbfd82d0692bbd552e403680c0635108"
  },
  {
    "url": "bower_components/paper-button/paper-button.html",
    "revision": "373f0f4cd4abbb1d5a48b479c2a5cd21"
  },
  {
    "url": "bower_components/paper-ripple/paper-ripple.html",
    "revision": "63e70e15f7c20c18c10ca788d60ace23"
  },
  {
    "url": "bower_components/paper-styles/element-styles/paper-material-styles.html",
    "revision": "8d8d619e6f98be2c5d7e49ca022e423c"
  },
  {
    "url": "bower_components/paper-styles/shadow.html",
    "revision": "1f23a65a20ed44812df26a9c16468e3f"
  },
  {
    "url": "bower_components/polymer/lib/elements/array-selector.html",
    "revision": "b12bedbde418804015d28a6d4fb1b1fa"
  },
  {
    "url": "bower_components/polymer/lib/elements/custom-style.html",
    "revision": "aab39ae5c689058e687d70f7d3cfc49f"
  },
  {
    "url": "bower_components/polymer/lib/elements/dom-bind.html",
    "revision": "defbb811e77e66ee41b562b891ff6cbf"
  },
  {
    "url": "bower_components/polymer/lib/elements/dom-if.html",
    "revision": "d60f1901965f143e41a1d628a16d292e"
  },
  {
    "url": "bower_components/polymer/lib/elements/dom-module.html",
    "revision": "08deb894ad5e138ffa683fe116e33bbf"
  },
  {
    "url": "bower_components/polymer/lib/elements/dom-repeat.html",
    "revision": "dd81571263e598368cc56f9919e6b515"
  },
  {
    "url": "bower_components/polymer/lib/legacy/class.html",
    "revision": "592c2785d627a2a17e06fe2b72a8dd3f"
  },
  {
    "url": "bower_components/polymer/lib/legacy/legacy-element-mixin.html",
    "revision": "c3665a8888ebb8553e832b399974b253"
  },
  {
    "url": "bower_components/polymer/lib/legacy/mutable-data-behavior.html",
    "revision": "dd91f95cb7b2dcb1a8a69ae428ea1020"
  },
  {
    "url": "bower_components/polymer/lib/legacy/polymer-fn.html",
    "revision": "ee6eba8dfb2bf2893a3c28de909aacd3"
  },
  {
    "url": "bower_components/polymer/lib/legacy/polymer.dom.html",
    "revision": "bddca177722730b16be0bdf38188b85c"
  },
  {
    "url": "bower_components/polymer/lib/legacy/templatizer-behavior.html",
    "revision": "4efb92d5f6afa4d3ac24c0d80481d9b0"
  },
  {
    "url": "bower_components/polymer/lib/mixins/element-mixin.html",
    "revision": "9491c84d0f85b916c7fd1c5244616e45"
  },
  {
    "url": "bower_components/polymer/lib/mixins/gesture-event-listeners.html",
    "revision": "ca690f1d959f5be15c16ac9d9d373fc2"
  },
  {
    "url": "bower_components/polymer/lib/mixins/mutable-data.html",
    "revision": "86119dfbf449cfa28504504ebe7da594"
  },
  {
    "url": "bower_components/polymer/lib/mixins/property-accessors.html",
    "revision": "c596ce786811362555de1e5ab098dcd8"
  },
  {
    "url": "bower_components/polymer/lib/mixins/property-effects.html",
    "revision": "eb52cf7ef35f6a3a8aa96b83a29bab5d"
  },
  {
    "url": "bower_components/polymer/lib/mixins/template-stamp.html",
    "revision": "b143fe0790f0b83402a09341a36056d7"
  },
  {
    "url": "bower_components/polymer/lib/utils/array-splice.html",
    "revision": "53f58df50f3ca2c291c62b8331eb3074"
  },
  {
    "url": "bower_components/polymer/lib/utils/async.html",
    "revision": "a2321298f28bdb6ae91ebdd39908f7e9"
  },
  {
    "url": "bower_components/polymer/lib/utils/boot.html",
    "revision": "8bd20a1d0d0169d7cfb8b1adc4bea35e"
  },
  {
    "url": "bower_components/polymer/lib/utils/case-map.html",
    "revision": "b11569ee49cf3c01a6f2ba72b8977cbd"
  },
  {
    "url": "bower_components/polymer/lib/utils/debounce.html",
    "revision": "ddea4417440ed422450435a40ac3dc65"
  },
  {
    "url": "bower_components/polymer/lib/utils/flattened-nodes-observer.html",
    "revision": "2a476646ce7af6a0375b2f8698119d14"
  },
  {
    "url": "bower_components/polymer/lib/utils/flush.html",
    "revision": "2995549c86260217233778644e37a677"
  },
  {
    "url": "bower_components/polymer/lib/utils/gestures.html",
    "revision": "a184d3f5b972101c3de2e67fef6fefc6"
  },
  {
    "url": "bower_components/polymer/lib/utils/import-href.html",
    "revision": "448b0c8142c73bb0a850a7a017289efd"
  },
  {
    "url": "bower_components/polymer/lib/utils/mixin.html",
    "revision": "8040dad2391809ef79cc36d355650001"
  },
  {
    "url": "bower_components/polymer/lib/utils/path.html",
    "revision": "2967e9f8b18ee29206a375213678a521"
  },
  {
    "url": "bower_components/polymer/lib/utils/render-status.html",
    "revision": "682cee89f27a62a11b7391e781ef6348"
  },
  {
    "url": "bower_components/polymer/lib/utils/resolve-url.html",
    "revision": "8a1fe8ce4a1bbf305096a33edf7720b3"
  },
  {
    "url": "bower_components/polymer/lib/utils/settings.html",
    "revision": "9623689730fe5f9a8527120dbc9f9ff9"
  },
  {
    "url": "bower_components/polymer/lib/utils/style-gather.html",
    "revision": "faa56a84ce3b6a03c49b21bfe0849312"
  },
  {
    "url": "bower_components/polymer/lib/utils/templatize.html",
    "revision": "666deab2a4591fb49d52278898875f29"
  },
  {
    "url": "bower_components/polymer/lib/utils/unresolved.html",
    "revision": "25e2623f36d889e1655d3bfb66fd5458"
  },
  {
    "url": "bower_components/polymer/polymer-element.html",
    "revision": "f30318bf31e50e2073d10d4c8634da44"
  },
  {
    "url": "bower_components/polymer/polymer.html",
    "revision": "6cb07c63c4eed1bf176c08b1308c4623"
  },
  {
    "url": "bower_components/shadycss/apply-shim.html",
    "revision": "5b73ef5bfcac4955f6c24f55ea322eb1"
  },
  {
    "url": "bower_components/shadycss/apply-shim.min.js",
    "revision": "1616f23f6be4d93fe82071a61804aa45"
  },
  {
    "url": "bower_components/shadycss/custom-style-interface.html",
    "revision": "7e28230b85cdcc2488e87172c3395d52"
  },
  {
    "url": "bower_components/shadycss/custom-style-interface.min.js",
    "revision": "b09483e65e5e13b61889cdfa0108b794"
  },
  {
    "url": "bower_components/webcomponentsjs/custom-elements-es5-adapter.js",
    "revision": "a5043c1d0dd16d84558ee6cc2276212e"
  },
  {
    "url": "bower_components/webcomponentsjs/webcomponents-hi-ce.js",
    "revision": "ac506890cf3f0f8ef4017398fa4034a0"
  },
  {
    "url": "bower_components/webcomponentsjs/webcomponents-hi-sd-ce.js",
    "revision": "c53b10e1469a4d6b1108cd5ec995875b"
  },
  {
    "url": "bower_components/webcomponentsjs/webcomponents-hi.js",
    "revision": "b88ce284fda849097ab4997d97bfc8b6"
  },
  {
    "url": "bower_components/webcomponentsjs/webcomponents-lite.js",
    "revision": "fc5fd8d2c8b27139307536abb8aecda7"
  },
  {
    "url": "bower_components/webcomponentsjs/webcomponents-loader.js",
    "revision": "d8b254a2aa07914e315bb494c5d9be4f"
  },
  {
    "url": "bower_components/webcomponentsjs/webcomponents-sd-ce.js",
    "revision": "b4daa8feea009da29844c0ceffde61dd"
  },
  {
    "url": "images/icon-256px.png",
    "revision": "bb4b6e7ea1eeb9fe8308e133b17dda0b"
  },
  {
    "url": "images/icon-512px.png",
    "revision": "879fb4d29da54d784ad45a258a2f3e08"
  },
  {
    "url": "index.html",
    "revision": "a2c0d18a7e0eab24f27cba801560ad31"
  },
  {
    "url": "index.html_script_0.js",
    "revision": "7171440aab1902bca0930016002beb89"
  },
  {
    "url": "manifest.json",
    "revision": "a592faf973bd12d3a4e4f2fdaa7fced8"
  },
  {
    "url": "src/pwa-gulp-app.html",
    "revision": "007509e0c9a860a4e247b334d775c295"
  },
  {
    "url": "src/pwa-gulp-app.html_script_0.js",
    "revision": "aed749f9f4b4b8ba622135798eee8746"
  },
  {
    "url": "src/script.js",
    "revision": "3d3d249e76dbb85722942c6b512c8428"
  },
  {
    "url": "src/script2.js",
    "revision": "843ee20181da6ffd2581b7e701bb7dc2"
  },
  {
    "url": "src/style.css",
    "revision": "6c5aa2a75e08565554272ac1492756ad"
  },
  {
    "url": "workbox-sw.prod.v1.3.0.js",
    "revision": "897e08560c6d7bace1c2737028324948"
  },
  {
    "url": "workbox-sw.prod.v1.3.0.js.map",
    "revision": "f7ef2d1eb0b250ec46d79e81e9a3d0df"
  }
]);

// Custom code

self.addEventListener('install', function(event) {
  if (typeof self.skipWaiting == 'function')
    self.skipWaiting();
});
