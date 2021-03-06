// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"M98o":[function(require,module,exports) {

},{}],"X9Zt":[function(require,module,exports) {

},{}],"ng52":[function(require,module,exports) {

},{}],"WpEu":[function(require,module,exports) {

},{}],"PpqJ":[function(require,module,exports) {
// ???????????????? ?????? ???????????????? ????????????????
$(document).ready(function () {
  $('.firstscreen_logo').addClass('animfromleftfast');
  $('.firstscreen_menu').addClass('animfromrightfast');
  $('.firstscreen_center').fadeTo(6000, 1);
  console.log('scrolltop>50');
});
},{}],"Rhln":[function(require,module,exports) {
"use strict";

require("./sapfir.scss");

require("./template/header.scss");

require("./template/footer.scss");

require("./animation.scss");

require("./animation.js");

// ???????????????? ?????? ???????????????????? ????????????????
$(window).scroll(function () {
  if ($(this).scrollTop() > 750) {
    $('.anim11').fadeTo(2000, 1);
    $('.footer_logo').addClass('animfromleft');
    $('.footer_list3').addClass('animfromright');
    $('.footer_list1').addClass('animfromleftfast');
    $('.footer_list2').addClass('animfromrightfast');
  }

  ;
}); // $('.sapfir__map').click(function(){
//     alert("???????????????? ?????? ???? ???????????????????? ???? ??????????????")
// })
// ?????????????????? ???????????? ???? ??????????????????????

$('.sapfir__map').maphilight({
  fill: true,
  fillColor: '2252a9',
  fillOpacity: 0.5,
  stroke: true,
  strokeColor: 'ffccaa'
});
},{"./sapfir.scss":"M98o","./template/header.scss":"M98o","./template/footer.scss":"M98o","./animation.scss":"M98o","./animation.js":"PpqJ"}]},{},["Rhln"], null)
//# sourceMappingURL=sapfir.156929fc.js.map