importScripts('workbox-sw.prod.v1.3.0.js');

const workboxSW = new self.WorkboxSW();
workboxSW.precache([
  {
    "url": "bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html",
    "revision": "97abb15329c3dfc01c7a6c212da17cf1"
  },
  {
    "url": "bower_components/iron-behaviors/iron-button-state.html",
    "revision": "b900ae1be0a409c52276b06bb5d40334"
  },
  {
    "url": "bower_components/iron-behaviors/iron-control-state.html",
    "revision": "468c78af11cf4becb16c12af27f65ec4"
  },
  {
    "url": "bower_components/iron-flex-layout/iron-flex-layout.html",
    "revision": "85d3b39838d06aca06a79555fb7ab412"
  },
  {
    "url": "bower_components/paper-behaviors/paper-button-behavior.html",
    "revision": "53c543a5496d4ccaaddc58a7a151f5c3"
  },
  {
    "url": "bower_components/paper-behaviors/paper-ripple-behavior.html",
    "revision": "eb03adf1fddd6f8e71cfc12af8f8d3ba"
  },
  {
    "url": "bower_components/paper-button/paper-button.html",
    "revision": "72d61e146e55153140612cba12c5a0d2"
  },
  {
    "url": "bower_components/paper-ripple/paper-ripple.html",
    "revision": "89b233822177ba29c4cb0be6a4fd1c99"
  },
  {
    "url": "bower_components/paper-styles/element-styles/paper-material-styles.html",
    "revision": "9b5f195787a35c9783ff99a6b115c423"
  },
  {
    "url": "bower_components/paper-styles/shadow.html",
    "revision": "86424af16363209a869c6e245324fd72"
  },
  {
    "url": "bower_components/polymer/lib/elements/array-selector.html",
    "revision": "e1b5568e17e20ff30f1cbbdb6f11fef2"
  },
  {
    "url": "bower_components/polymer/lib/elements/custom-style.html",
    "revision": "b4f357e8c911013df4dd1804695a47ee"
  },
  {
    "url": "bower_components/polymer/lib/elements/dom-bind.html",
    "revision": "3a81ed52573d59d97cd9cbd6f4a2decc"
  },
  {
    "url": "bower_components/polymer/lib/elements/dom-if.html",
    "revision": "fb55e17dcf0512d60c7f5ba879485411"
  },
  {
    "url": "bower_components/polymer/lib/elements/dom-module.html",
    "revision": "84797c47760d660c4b4613509c2a61d1"
  },
  {
    "url": "bower_components/polymer/lib/elements/dom-repeat.html",
    "revision": "4e9860cdc99c35bf248b7ec3f8182fb9"
  },
  {
    "url": "bower_components/polymer/lib/legacy/class.html",
    "revision": "ebaeda4bbe9117443d657ebc672567e4"
  },
  {
    "url": "bower_components/polymer/lib/legacy/legacy-element-mixin.html",
    "revision": "b12eebfd25feffd0786b2f7585167e30"
  },
  {
    "url": "bower_components/polymer/lib/legacy/mutable-data-behavior.html",
    "revision": "e23780fbad8692b41b79d1009fd8fe35"
  },
  {
    "url": "bower_components/polymer/lib/legacy/polymer-fn.html",
    "revision": "45d82c8823f5861a6acdba122dcbd827"
  },
  {
    "url": "bower_components/polymer/lib/legacy/polymer.dom.html",
    "revision": "d432c687728435878dbae3c2176e102c"
  },
  {
    "url": "bower_components/polymer/lib/legacy/templatizer-behavior.html",
    "revision": "b452a9fa34d8de1d77a46d31d9fc7ac2"
  },
  {
    "url": "bower_components/polymer/lib/mixins/element-mixin.html",
    "revision": "4768da9ab92c4f0c80db18ff3e0b507a"
  },
  {
    "url": "bower_components/polymer/lib/mixins/gesture-event-listeners.html",
    "revision": "7adb8d7119625918f6da479455403ec5"
  },
  {
    "url": "bower_components/polymer/lib/mixins/mutable-data.html",
    "revision": "f490bbc93ed26f16d820da8653d60b7e"
  },
  {
    "url": "bower_components/polymer/lib/mixins/property-accessors.html",
    "revision": "fb9612f5256d9dafbbeea5e419082783"
  },
  {
    "url": "bower_components/polymer/lib/mixins/property-effects.html",
    "revision": "e6880bd9ff20737ceb83efdce708c433"
  },
  {
    "url": "bower_components/polymer/lib/mixins/template-stamp.html",
    "revision": "05d2da2c84e2ecaa5d6133caa114ae13"
  },
  {
    "url": "bower_components/polymer/lib/utils/array-splice.html",
    "revision": "9b30129078759734dbf27e452574b18b"
  },
  {
    "url": "bower_components/polymer/lib/utils/async.html",
    "revision": "467e9b2a7fa9b1d13b8d977991490b97"
  },
  {
    "url": "bower_components/polymer/lib/utils/boot.html",
    "revision": "41905530234025a2c8461e4906cabc9b"
  },
  {
    "url": "bower_components/polymer/lib/utils/case-map.html",
    "revision": "4d949c6dc8b68dd6f01bf54f06b3f37c"
  },
  {
    "url": "bower_components/polymer/lib/utils/debounce.html",
    "revision": "7bebc7ee7395a3fe7b5d05a7a3b24a3f"
  },
  {
    "url": "bower_components/polymer/lib/utils/flattened-nodes-observer.html",
    "revision": "6bb8a1d68ec080700a1eaacd2c60e478"
  },
  {
    "url": "bower_components/polymer/lib/utils/flush.html",
    "revision": "bba45c8707ff9aa6800ec92a89352e99"
  },
  {
    "url": "bower_components/polymer/lib/utils/gestures.html",
    "revision": "13cc4dba8c133aef5d4a97d0834e017b"
  },
  {
    "url": "bower_components/polymer/lib/utils/import-href.html",
    "revision": "4b2ae269a87b55be0be2ad4592ce11ef"
  },
  {
    "url": "bower_components/polymer/lib/utils/mixin.html",
    "revision": "3c9600251e1bd3a7c2c62233bd0634ec"
  },
  {
    "url": "bower_components/polymer/lib/utils/path.html",
    "revision": "b668241452b073a2fea7a9da33eb822f"
  },
  {
    "url": "bower_components/polymer/lib/utils/render-status.html",
    "revision": "c8fff560a3ade79e2279111549a2fb23"
  },
  {
    "url": "bower_components/polymer/lib/utils/resolve-url.html",
    "revision": "114fbbd28af1cd449944481dd9d0d022"
  },
  {
    "url": "bower_components/polymer/lib/utils/settings.html",
    "revision": "8d7589d278e23e5753c4d1558c449f0f"
  },
  {
    "url": "bower_components/polymer/lib/utils/style-gather.html",
    "revision": "debfcf6824a05be290266ba6a2732ea2"
  },
  {
    "url": "bower_components/polymer/lib/utils/templatize.html",
    "revision": "c53ece6061314e609e711ad1abb6e80e"
  },
  {
    "url": "bower_components/polymer/lib/utils/unresolved.html",
    "revision": "48732bcda92c5b9c591d75f7c036f7a5"
  },
  {
    "url": "bower_components/polymer/polymer-element.html",
    "revision": "1781a435f53db89e3a504f8480d4c2c6"
  },
  {
    "url": "bower_components/polymer/polymer.html",
    "revision": "ff2cd4c34828a0ffe4677bf933618de4"
  },
  {
    "url": "bower_components/shadycss/apply-shim.html",
    "revision": "75f54922d2507d0c43bdf946149c38b1"
  },
  {
    "url": "bower_components/shadycss/apply-shim.min.js",
    "revision": "9cfbbf627603a5a3073f4fc9b97712d1"
  },
  {
    "url": "bower_components/shadycss/custom-style-interface.html",
    "revision": "ceb0842ff6c53d8d13d6cf2345f41490"
  },
  {
    "url": "bower_components/shadycss/custom-style-interface.min.js",
    "revision": "9d7ccbd58300a6ef52a9108de2b6cb7f"
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
    "revision": "f13bbbbf647b7922575a7894367ddaaf"
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
    "revision": "e82e8cceae9c72c058cd71891b92037d"
  },
  {
    "url": "manifest.json",
    "revision": "a592faf973bd12d3a4e4f2fdaa7fced8"
  },
  {
    "url": "src/pwa-gulp-app.html",
    "revision": "c80815314da4d55d0004acb639f311d5"
  },
  {
    "url": "src/script.js",
    "revision": "96ba4cc1ca9c062dbe4afb57cf890d10"
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
