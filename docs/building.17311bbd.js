parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"PhJj":[function(require,module,exports) {

},{}],"X9Zt":[function(require,module,exports) {

},{}],"ng52":[function(require,module,exports) {

},{}],"WpEu":[function(require,module,exports) {

},{}],"PpqJ":[function(require,module,exports) {
$(document).ready(function(){$(".firstscreen_logo").addClass("animfromleftfast"),$(".firstscreen_menu").addClass("animfromrightfast"),$(".firstscreen_center").fadeTo(6e3,1),console.log("scrolltop>50")});
},{}],"qPZB":[function(require,module,exports) {
"use strict";require("./building.scss"),require("./template/header.scss"),require("./template/footer.scss"),require("./animation.scss"),require("./animation.js"),$(window).scroll(function(){$(this).scrollTop()>880&&($(".anim1").fadeTo(1e3,1),$(".description_title").addClass("animfromleftfast"),$(".description_text").addClass("animfromrightfast")),$(this).scrollTop()>1550&&($(".anim2").fadeTo(1e3,1),$(".outer_title").addClass("animfromleftfast"),$(".outer_text").addClass("animfromrightfast")),$(this).scrollTop()>2270&&($(".anim3").fadeTo(1e3,1),$(".inner_title").addClass("animfromrightfast"),$(".inner_text").addClass("animfromleftfast")),$(this).scrollTop()>2800&&($(".anim4").fadeTo(1e3,1),$(".smarthouse_title").addClass("animfromrightfast"),$(".smarthouse_text").addClass("animfromleftfast")),$(this).scrollTop()>3500&&($(".anim11").fadeTo(2e3,1),$(".footer_logo").addClass("animfromleft"),$(".footer_list3").addClass("animfromright"),$(".footer_list1").addClass("animfromleftfast"),$(".footer_list2").addClass("animfromrightfast"))}),$("#mapzk").maphilight({fill:!0,fillColor:"2252a9",fillOpacity:.5,stroke:!0,strokeColor:"ffccaa"});
},{"./building.scss":"PhJj","./template/header.scss":"PhJj","./template/footer.scss":"PhJj","./animation.scss":"PhJj","./animation.js":"PpqJ"}]},{},["qPZB"], null)
//# sourceMappingURL=--detailed-report/building.17311bbd.js.map