#!/bin/bash

polymer build

cp workbox-cli-config.js build/default/
cd build/default/
workbox-cli generate:sw

cat >> sw.js << EOM

self.addEventListener('install', function(event) {
  if (typeof self.skipWaiting == 'function')
    self.skipWaiting();
});
EOM
