'use strict';

System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      console.log('script2.js');

      _export('default', function () {
        return 'foo';
      });
    }
  };
});