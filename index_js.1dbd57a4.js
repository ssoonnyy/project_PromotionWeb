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
})({"js/index_js.js":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".header");

  /* 헤더 마우스 이벤트 */
  header.addEventListener("mouseover", function () {
    this.classList.add("bgChange");
  });
  header.addEventListener("mouseout", function () {
    this.classList.remove("bgChange");
  });

  /* contents01 숫자카운팅 */
  window.onscroll = function () {
    con01Count();
  };
  function con01Count() {
    var target = document.querySelector(".visual_main");
    var targetHeight = target.offsetHeight;
    if (document.body.scrollTop > targetHeight / 2 || document.documentElement.scrollTop > targetHeight / 2) {
      var ballCount01 = document.querySelector(".num_box01 > .con01_count01");
      var ballCount02 = document.querySelector(".num_box01 .con01_count02");
      var driverCount01 = document.querySelector(".num_box02 > .con01_count01");
      var driverCount02 = document.querySelector(".num_box02 .con01_count02");
      var hybridsCount01 = document.querySelector(".num_box03 > .con01_count01");
      var hybridsCount02 = document.querySelector(".num_box03 .con01_count02");
      var utilityironCount01 = document.querySelector(".num_box04 > .con01_count01");
      var utilityironCount02 = document.querySelector(".num_box04 .con01_count02");
      var ironCount01 = document.querySelector(".num_box05 > .con01_count01");
      var ironCount02 = document.querySelector(".num_box05 .con01_count02");
      var wedgesCount01 = document.querySelector(".num_box06 > .con01_count01");
      var wedgesCount02 = document.querySelector(".num_box06 .con01_count02");
      var count1 = 0;
      var count1sub = 0;
      var count2 = 0;
      var count2sub = 0;
      var count3 = 0;
      var count3sub = 0;
      var count4 = 0;
      var count4sub = 0;
      var count5 = 0;
      var count5sub = 0;
      var count6 = 0;
      var count6sub = 0;
      var ballCounting01 = setInterval(function () {
        if (count1 == 78) {
          clearInterval(ballCounting01);
          return false;
        }
        count1 += 1;
        ballCount01.innerHTML = count1;
      }, 20);
      var ballCounting02 = setInterval(function () {
        if (count1sub == 10) {
          clearInterval(ballCounting02);
          return false;
        }
        count1sub += 1;
        ballCount02.innerHTML = count1sub;
      }, 100);
      var driverCounting01 = setInterval(function () {
        if (count2 == 31) {
          clearInterval(driverCounting01);
          return false;
        }
        count2 += 1;
        driverCount01.innerHTML = count2;
      }, 20);
      var driverCounting02 = setInterval(function () {
        if (count2sub == 22) {
          clearInterval(driverCounting02);
          return false;
        }
        count2sub += 1;
        driverCount02.innerHTML = count2sub;
      }, 100);
      var hybridsCounting01 = setInterval(function () {
        if (count3 == 35) {
          clearInterval(hybridsCounting01);
          return false;
        }
        count3 += 1;
        hybridsCount01.innerHTML = count3;
      }, 20);
      var hybridsCounting02 = setInterval(function () {
        if (count3sub == 20) {
          clearInterval(hybridsCounting02);
          return false;
        }
        count3sub += 1;
        hybridsCount02.innerHTML = count3sub;
      }, 100);
      var utilityironCounting01 = setInterval(function () {
        if (count4 == 49) {
          clearInterval(utilityironCounting01);
          return false;
        }
        count4 += 1;
        utilityironCount01.innerHTML = count4;
      }, 20);
      var utilityironCounting02 = setInterval(function () {
        if (count4sub == 17) {
          clearInterval(utilityironCounting02);
          return false;
        }
        count4sub += 1;
        utilityironCount02.innerHTML = count4sub;
      }, 100);
      var ironCounting01 = setInterval(function () {
        if (count5 == 29) {
          clearInterval(ironCounting01);
          return false;
        }
        count5 += 1;
        ironCount01.innerHTML = count5;
      }, 20);
      var ironCounting02 = setInterval(function () {
        if (count5sub == 15) {
          clearInterval(ironCounting02);
          return false;
        }
        count5sub += 1;
        ironCount02.innerHTML = count5sub;
      }, 100);
      var wedgesCounting01 = setInterval(function () {
        if (count6 == 55) {
          clearInterval(wedgesCounting01);
          return false;
        }
        count6 += 1;
        wedgesCount01.innerHTML = count6;
      }, 20);
      var wedgesCounting02 = setInterval(function () {
        if (count6sub == 11) {
          clearInterval(wedgesCounting02);
          return false;
        }
        count6sub += 1;
        wedgesCount02.innerHTML = count6sub;
      }, 100);
    }
  }
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52518" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index_js.js"], null)
//# sourceMappingURL=/index_js.1dbd57a4.js.map