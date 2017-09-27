'use strict';

System.register(['./script2.js'], function (_export, _context) {
  "use strict";

  var fn, _createClass, Component;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_script2Js) {
      fn = _script2Js.default;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      console.log('script.js');

      _export('Component', Component = function () {
        _createClass(Component, null, [{
          key: 'version',
          get: function get() {
            return '0.0.0';
          }
        }]);

        function Component() {
          _classCallCheck(this, Component);

          console.log(fn());
        }

        _createClass(Component, [{
          key: 'foobar',
          value: function foobar() {
            return fn();
          }
        }, {
          key: 'relevant',
          get: function get() {
            return false;
          }
        }]);

        return Component;
      }());

      _export('Component', Component);
    }
  };
});