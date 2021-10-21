/**
 * GlobalLoadScript
 * Copyright (c) Beth
 * 自动加载js依赖
 * depend [no]
 */

(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      (global.GlobalLoadScript = factory())
})(this, function() {
  'use strict';

  function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if( typeof(callback) != "undefined"  && typeof callback === 'function' ){
      if (script.readyState) {
        script.onreadystatechange = function () {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
        };
      } else {
        script.onload = function () {
          callback();
        };
      }
    }
    script.src = url;
    var loadJs = document.getElementById('loadJs') || document.body ;
    loadJs.appendChild(script);
  }

  var GlobalLoadScript = function() {
    return loadScript
  }
  
  var GlobalLoadScript$1 = GlobalLoadScript;
  
  return GlobalLoadScript$1;
})