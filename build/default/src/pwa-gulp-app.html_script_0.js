'use strict';

System.register(['./script.js'], function (_export, _context) {
  "use strict";

  var Component, _get, _createClass, PwaGulpApp;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_scriptJs) {
      Component = _scriptJs.Component;
    }],
    execute: function () {
      _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);

          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc) {
          return desc.value;
        } else {
          var getter = desc.get;

          if (getter === undefined) {
            return undefined;
          }

          return getter.call(receiver);
        }
      };

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

      console.log('pwa-gulp-app');

      PwaGulpApp = function (_Polymer$Element) {
        _inherits(PwaGulpApp, _Polymer$Element);

        _createClass(PwaGulpApp, null, [{
          key: 'is',
          get: function get() {
            return 'pwa-gulp-app';
          }
        }]);

        function PwaGulpApp() {
          _classCallCheck(this, PwaGulpApp);

          var _this = _possibleConstructorReturn(this, (PwaGulpApp.__proto__ || Object.getPrototypeOf(PwaGulpApp)).call(this));

          if (typeof Component !== 'undefined') new Component();
          return _this;
        }

        _createClass(PwaGulpApp, [{
          key: 'ready',
          value: function ready() {
            _get(PwaGulpApp.prototype.__proto__ || Object.getPrototypeOf(PwaGulpApp.prototype), 'ready', this).call(this);
            navigator.serviceWorker.register('sw.js');
          }
        }]);

        return PwaGulpApp;
      }(Polymer.Element);

      window.customElements.define(PwaGulpApp.is, PwaGulpApp);
    }
  };
});