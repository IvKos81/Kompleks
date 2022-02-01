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
})({"ejtM":[function(require,module,exports) {

},{}],"X9Zt":[function(require,module,exports) {

},{}],"ng52":[function(require,module,exports) {

},{}],"WpEu":[function(require,module,exports) {

},{}],"PpqJ":[function(require,module,exports) {
// Анимация при загрузке страницы
$(document).ready(function () {
  $('.firstscreen_logo').addClass('animfromleftfast');
  $('.firstscreen_menu').addClass('animfromrightfast');
  $('.firstscreen_center').fadeTo(6000, 1);
  console.log('scrolltop>50');
});
},{}],"r7M1":[function(require,module,exports) {
"use strict";

require("./flat.scss");

require("./template/header.scss");

require("./template/footer.scss");

require("./animation.scss");

require("./animation.js");

// Анимация при скроллинге страницы
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $('.anim11').fadeTo(2000, 1);
    $('.footer_logo').addClass('animfromleft');
    $('.footer_list3').addClass('animfromright');
    $('.footer_list1').addClass('animfromleftfast');
    $('.footer_list2').addClass('animfromrightfast');
  }

  ;
}); // появление текста при наведении мыши

var coridor = document.querySelector('#coridor');
var kitchen = document.querySelector('#kitchen');
var toilet = document.querySelector('#toilet');
var bathroom = document.querySelector('#bathroom');
var storageroom = document.querySelector('#storageroom');
var balcony = document.querySelector('#balcony'); // let bedroom = document.querySelector('#bedroom');

var livingroom = document.querySelector('#livingroom');
var flDescr = document.querySelector('.flat_description');
var flDescrText = document.querySelector('.flat_description_text');
coridor.addEventListener('mouseover', function (evt) {
  flDescr.style.display = 'block';
  flDescrText.innerHTML = 'Большой коридор, площадью 5 м2. Напольное покрытие - керамогранит. Стены оклеены изностойкими обоями под окраску. Размеры коридора позволяют установить внутри него встроенный шкаф';
});
coridor.addEventListener('mouseleave', function (evt) {
  flDescr.style.display = 'none';
});
kitchen.addEventListener('mouseover', function (evt) {
  flDescr.style.display = 'block';
  flDescrText.innerHTML = 'Светлая кухня, площадью 7м2. Напольное покрытие - керамическая плитка. Стены, по желанию, могут быть отделаны обоями под покраску, кафельной плиткой или декоративной штукатуркой.';
});
kitchen.addEventListener('mouseleave', function (evt) {
  flDescr.style.display = 'none';
});
toilet.addEventListener('mouseover', function (evt) {
  flDescr.style.display = 'block';
  flDescrText.innerHTML = 'Раздельный санузел. Площадь - 1,2 м2. Согласно предлагаемой отделке устанавливается обычный унитаз со сливным бачком. По желанию клиента может быть установлен встроенный унитаз-инсталляция, а также возможно укомплектование гигиеническим душем и маленькой раковиной.';
});
toilet.addEventListener('mouseleave', function (evt) {
  flDescr.style.display = 'none';
});
bathroom.addEventListener('mouseover', function (evt) {
  flDescr.style.display = 'block';
  flDescrText.innerHTML = 'Ванная комната, площадью 2,6 м2. Повышенная гидроизоляция. Отделка - кафельная плитка. Установлена ванная размерами 170х50 см. По желанию заказчика может быть смонтирована душевая кабина. ';
});
bathroom.addEventListener('mouseleave', function (evt) {
  flDescr.style.display = 'none';
});
storageroom.addEventListener('mouseover', function (evt) {
  flDescr.style.display = 'block';
  flDescrText.innerHTML = 'Небольшая кладовая комната, площадью 1,1м2. Может быть использована как комната для установки стиральной машины или как встроенная гардеробная. Напольное покрытие - керамогранит, стены отделаны обоями под окраску. Дополнительно в комнате выведена электрическая розетка.';
});
storageroom.addEventListener('mouseleave', function (evt) {
  flDescr.style.display = 'none';
});
balcony.addEventListener('mouseover', function (evt) {
  flDescr.style.display = 'block';
  flDescrText.innerHTML = 'Большая лоджия на 2 окна. По желанию заказчика может быть установлено холодное или теплое остекление. Дополнительно доступна опция утепления балкона.';
});
balcony.addEventListener('mouseleave', function (evt) {
  flDescr.style.display = 'none';
}); // bedroom.addEventListener('mouseover', (evt) => {
//     flDescr.style.display = 'block'
//     flDescrText.innerHTML = 'Небольшая уютная спальня. Отделка стен -  обои под покраску, напольное покрытие - ламинат 35 класса. Комната может быть переоборудована в детскую. ';
// });
// bedroom.addEventListener('mouseleave', (evt) => {
//    flDescr.style.display = 'none'
// });

livingroom.addEventListener('mouseover', function (evt) {
  flDescr.style.display = 'block';
  flDescrText.innerHTML = 'Большая светлая комната, площадью 20м2. Стены отделаны обоями под покраску. Напольное покрытие - ламинат 34 класса. Потолок - оштукатурен и окрашен в три слоя.';
});
livingroom.addEventListener('mouseleave', function (evt) {
  flDescr.style.display = 'none';
}); // подсветка выбора на изображении

$('#flat1-2').maphilight({
  fill: true,
  fillColor: '2252a9',
  fillOpacity: 0.5,
  stroke: true,
  strokeColor: 'ffccaa'
});
},{"./flat.scss":"ejtM","./template/header.scss":"X9Zt","./template/footer.scss":"ng52","./animation.scss":"WpEu","./animation.js":"PpqJ"}]},{},["r7M1"], null)
//# sourceMappingURL=flat1-2.3faa69bc.js.map