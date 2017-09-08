importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html",
    "revision": "ae8bf965145b43d62fec74249f537459"
  },
  {
    "url": "bower_components/iron-behaviors/iron-button-state.html",
    "revision": "40f4d0c50c0df6b151f84006fb1823ac"
  },
  {
    "url": "bower_components/iron-behaviors/iron-control-state.html",
    "revision": "fb2613f2ffc10065e718be1f9969acb5"
  },
  {
    "url": "bower_components/iron-flex-layout/iron-flex-layout.html",
    "revision": "3e285c2698feec264710fffd609630ad"
  },
  {
    "url": "bower_components/paper-behaviors/paper-button-behavior.html",
    "revision": "793782859ac11addc2f665dda089da48"
  },
  {
    "url": "bower_components/paper-behaviors/paper-ripple-behavior.html",
    "revision": "f8da6bdab811221037f001d1b16785c9"
  },
  {
    "url": "bower_components/paper-button/paper-button.html",
    "revision": "e56a59ed88bb90e19df8338c53e984a5"
  },
  {
    "url": "bower_components/paper-ripple/paper-ripple.html",
    "revision": "8cb2d836f86ca84aaad9fe07b032276d"
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
    "revision": "0a5b57cbed99597d83d565b145f3d56d"
  },
  {
    "url": "bower_components/polymer/lib/elements/custom-style.html",
    "revision": "b7ed27dbaf1bfc1dfc7f0be67c39ed7b"
  },
  {
    "url": "bower_components/polymer/lib/elements/dom-bind.html",
    "revision": "ef67a23e234c9741ec21f0ae1097fdf1"
  },
  {
    "url": "bower_components/polymer/lib/elements/dom-if.html",
    "revision": "cae150b06e37f393cf1e13235f488106"
  },
  {
    "url": "bower_components/polymer/lib/elements/dom-module.html",
    "revision": "ff7101dc5b037becb673fd313d47eb28"
  },
  {
    "url": "bower_components/polymer/lib/elements/dom-repeat.html",
    "revision": "e234cd8dc78ced43daa74944c6be2e36"
  },
  {
    "url": "bower_components/polymer/lib/legacy/class.html",
    "revision": "4130ea8323cd956939b34d45c8d474e5"
  },
  {
    "url": "bower_components/polymer/lib/legacy/legacy-element-mixin.html",
    "revision": "e79012b9a088b58b9e6505d1f632c908"
  },
  {
    "url": "bower_components/polymer/lib/legacy/mutable-data-behavior.html",
    "revision": "4e6193b3f56c4b8fce013226782cbd9e"
  },
  {
    "url": "bower_components/polymer/lib/legacy/polymer-fn.html",
    "revision": "5d99aef273c86bd97b5b35b1252e660a"
  },
  {
    "url": "bower_components/polymer/lib/legacy/polymer.dom.html",
    "revision": "966e6a1374a512cf82e212d285ad383b"
  },
  {
    "url": "bower_components/polymer/lib/legacy/templatizer-behavior.html",
    "revision": "a5dbf7ba1732709e555cbc6d55210437"
  },
  {
    "url": "bower_components/polymer/lib/mixins/element-mixin.html",
    "revision": "1a60a52938a1a00e374a84d145150fa6"
  },
  {
    "url": "bower_components/polymer/lib/mixins/gesture-event-listeners.html",
    "revision": "45976f766c422ccfe81f843f86bd1186"
  },
  {
    "url": "bower_components/polymer/lib/mixins/mutable-data.html",
    "revision": "7a6c3a69b47bd0c8224d9d17c40a6c1d"
  },
  {
    "url": "bower_components/polymer/lib/mixins/property-accessors.html",
    "revision": "7b8161e60dc8557c24ac9cad3be8b3ad"
  },
  {
    "url": "bower_components/polymer/lib/mixins/property-effects.html",
    "revision": "3e16adbcc443158f8393ae7924f51ae0"
  },
  {
    "url": "bower_components/polymer/lib/mixins/template-stamp.html",
    "revision": "9d2b01907b95e9ac06536c496d8925f3"
  },
  {
    "url": "bower_components/polymer/lib/utils/array-splice.html",
    "revision": "6f44297ff952e3c34b2bada5dcd04da7"
  },
  {
    "url": "bower_components/polymer/lib/utils/async.html",
    "revision": "16db8592c7ca246f0d7ae821b2f8b7ed"
  },
  {
    "url": "bower_components/polymer/lib/utils/boot.html",
    "revision": "3391dfa5a91291f9a24cc8b7ba090450"
  },
  {
    "url": "bower_components/polymer/lib/utils/case-map.html",
    "revision": "64a92e8ff052e4e0eef6f91c2b377672"
  },
  {
    "url": "bower_components/polymer/lib/utils/debounce.html",
    "revision": "356e336d5a023cf35f84821e37db5e5c"
  },
  {
    "url": "bower_components/polymer/lib/utils/flattened-nodes-observer.html",
    "revision": "4253023747057133d1def0f068535270"
  },
  {
    "url": "bower_components/polymer/lib/utils/flush.html",
    "revision": "ba27adf065d373f6b0e434d0d8ef6fd9"
  },
  {
    "url": "bower_components/polymer/lib/utils/gestures.html",
    "revision": "ee33c249c1a2f47b1bc587e058c601dc"
  },
  {
    "url": "bower_components/polymer/lib/utils/import-href.html",
    "revision": "d8b6004a95ea428da210fb8ac176b583"
  },
  {
    "url": "bower_components/polymer/lib/utils/mixin.html",
    "revision": "5bccee39c3ba7d9c298c9276ab7525ae"
  },
  {
    "url": "bower_components/polymer/lib/utils/path.html",
    "revision": "15575ff2f79d923e6f9ed443a1ea98b2"
  },
  {
    "url": "bower_components/polymer/lib/utils/render-status.html",
    "revision": "60fa263b678961716ff8fe7e948c8f4a"
  },
  {
    "url": "bower_components/polymer/lib/utils/resolve-url.html",
    "revision": "dfc0c7635dbb36cb322720ca162c05ec"
  },
  {
    "url": "bower_components/polymer/lib/utils/settings.html",
    "revision": "b21de5bb0358e46b2fea01cf630d546d"
  },
  {
    "url": "bower_components/polymer/lib/utils/style-gather.html",
    "revision": "4318883977b8dc3d54943ab684f7b07d"
  },
  {
    "url": "bower_components/polymer/lib/utils/templatize.html",
    "revision": "64fa57b74668391410193ac808fd5e37"
  },
  {
    "url": "bower_components/polymer/lib/utils/unresolved.html",
    "revision": "2ed3277470301933b1af10d413d8c614"
  },
  {
    "url": "bower_components/polymer/polymer-element.html",
    "revision": "31b98668d3a96df5ab93c6fd2dd8d6db"
  },
  {
    "url": "bower_components/polymer/polymer.html",
    "revision": "041f02f3388a7a3c087298fde431df80"
  },
  {
    "url": "bower_components/shadycss/apply-shim.html",
    "revision": "5b73ef5bfcac4955f6c24f55ea322eb1"
  },
  {
    "url": "bower_components/shadycss/apply-shim.min.js",
    "revision": "9f39cc45650d2451abc67d68e3c8c6ab"
  },
  {
    "url": "bower_components/shadycss/custom-style-interface.html",
    "revision": "7e28230b85cdcc2488e87172c3395d52"
  },
  {
    "url": "bower_components/shadycss/custom-style-interface.min.js",
    "revision": "db44b0812974ca753a10f8f6d1c4b00c"
  },
  {
    "url": "bower_components/webcomponentsjs/custom-elements-es5-adapter.js",
    "revision": "a5043c1d0dd16d84558ee6cc2276212e"
  },
  {
    "url": "bower_components/webcomponentsjs/gulpfile.js",
    "revision": "0366da1f0f7858c9af2daa3ef7d950ea"
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
    "revision": "9b09389dacac6222760cd28a69671757"
  },
  {
    "url": "manifest.json",
    "revision": "a592faf973bd12d3a4e4f2fdaa7fced8"
  },
  {
    "url": "src/pwa-gulp-app.html",
    "revision": "e184168856c55c6e64dd11c612d9e9fe"
  },
  {
    "url": "src/script.js",
    "revision": "31257b41a0dc5b386664c4a35c229ac9"
  },
  {
    "url": "src/style.css",
    "revision": "bb943da0dceccb8ba08215b97254109a"
  },
  {
    "url": "workbox-sw.prod.v1.3.0.js.map",
    "revision": "f7ef2d1eb0b250ec46d79e81e9a3d0df"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);

self.addEventListener('install', function(event) {
  if (typeof self.skipWaiting == 'function')
    self.skipWaiting();
});
