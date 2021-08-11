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
})({"main.js":[function(require,module,exports) {
var content = document.getElementById("topic");
var api = {
  url: ' https://newsapi.org/v2/top-headlines?country=gb&apiKey=0ca8c14043a4415885bb5de441ddfcf3'
};
fetch(api.url).then(function (output) {
  return output.json();
}).then(function (show) {
  console.log(show);
  console.log(show.articles[0].urlToImage);
  document.getElementsByClassName("imghai")[0].src = show.articles[0].urlToImage;
  document.getElementsByClassName("h3hai")[0].innerHTML = show.articles[0].title;
  document.getElementById("btn1").addEventListener("click", function () {
    console.log("done");
    swal(show.articles[0].content + "\n \n" + "For More Information: " + "\n" + show.articles[0].url);
  });
  document.getElementsByClassName("imghai")[1].src = show.articles[1].urlToImage;
  document.getElementsByClassName("h3hai")[1].innerHTML = show.articles[1].title;
  document.getElementById("btn2").addEventListener("click", function () {
    console.log("done");
    swal(show.articles[1].content + "\n \n" + "For More Information: " + "\n" + show.articles[1].url);
  });
  document.getElementsByClassName("imghai")[2].src = show.articles[2].urlToImage;
  document.getElementsByClassName("h3hai")[2].innerHTML = show.articles[2].title;
  document.getElementById("btn3").addEventListener("click", function () {
    console.log("done");
    swal(show.articles[2].content + "\n \n" + "For More Information: " + "\n" + show.articles[2].url);
  });
  document.getElementsByClassName("imghai")[3].src = show.articles[3].urlToImage;
  document.getElementsByClassName("h3hai")[3].innerHTML = show.articles[3].title;
  document.getElementById("btn4").addEventListener("click", function () {
    console.log("done");
    swal(show.articles[3].content + "\n \n" + "For More Information: " + "\n" + show.articles[3].url);
  });
  document.getElementsByClassName("imghai")[4].src = show.articles[4].urlToImage;
  document.getElementsByClassName("h3hai")[4].innerHTML = show.articles[4].title;
  document.getElementById("btn5").addEventListener("click", function () {
    console.log("done");
    swal(show.articles[5].content + "\n \n" + "For More Information: " + "\n" + show.articles[5].url);
  });
  document.getElementsByClassName("imghai")[5].src = show.articles[5].urlToImage;
  document.getElementsByClassName("h3hai")[5].innerHTML = show.articles[5].title;
  document.getElementById("btn6").addEventListener("click", function () {
    console.log("done");
    swal(show.articles[0].content + "\n \n" + "For More Information: " + "\n" + show.articles[0].url);
  }); //new cloudflare

  document.getElementById("bitcoin").addEventListener("click", function () {
    var bitcoin = {
      url: 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=0ca8c14043a4415885bb5de441ddfcf3'
    };
    fetch(bitcoin.url).then(function (output) {
      return output.json();
    }).then(function (bit) {
      content.innerHTML = "Trending BitCoin News";
      console.log(bit);
      document.getElementsByClassName("imghai")[0].src = bit.articles[0].urlToImage;
      document.getElementsByClassName("h3hai")[0].innerHTML = bit.articles[0].title;
      document.getElementsByClassName("imghai")[1].src = bit.articles[1].urlToImage;
      document.getElementsByClassName("h3hai")[1].innerHTML = bit.articles[1].title;
      document.getElementsByClassName("imghai")[2].src = bit.articles[2].urlToImage;
      document.getElementsByClassName("h3hai")[2].innerHTML = bit.articles[2].title;
      document.getElementsByClassName("imghai")[3].src = bit.articles[3].urlToImage;
      document.getElementsByClassName("h3hai")[3].innerHTML = bit.articles[3].title;
      document.getElementsByClassName("imghai")[4].src = bit.articles[4].urlToImage;
      document.getElementsByClassName("h3hai")[4].innerHTML = bit.articles[4].title;
      document.getElementsByClassName("imghai")[5].src = bit.articles[5].urlToImage;
      document.getElementsByClassName("h3hai")[5].innerHTML = bit.articles[5].title;
      document.getElementById("btn1").addEventListener("click", function () {
        console.log("done");
        swal(bit.articles[0].content + "\n \n" + "For More Information: " + "\n" + bit.articles[0].url);
      });
      document.getElementById("btn2").addEventListener("click", function () {
        console.log("done");
        swal(bit.articles[1].content + "\n \n" + "For More Information: " + "\n" + bit.articles[1].url);
      });
      document.getElementById("btn3").addEventListener("click", function () {
        console.log("done");
        swal(bit.articles[2].content + "\n \n" + "For More Information: " + "\n" + bit.articles[2].url);
      });
      document.getElementById("btn4").addEventListener("click", function () {
        console.log("done");
        swal(bit.articles[3].content + "\n \n" + "For More Information: " + "\n" + bit.articles[3].url);
      });
      document.getElementById("btn5").addEventListener("click", function () {
        console.log("done");
        swal(bit.articles[5].content + "\n \n" + "For More Information: " + "\n" + bit.articles[5].url);
      });
      document.getElementById("btn6").addEventListener("click", function () {
        console.log("done");
        swal(bit.articles[0].content + "\n \n" + "For More Information: " + "\n" + bit.articles[0].url);
      });
    }).catch(function error(error) {
      console.log(error);
    });
  }); //
  //Apple News

  document.getElementById("apple").addEventListener("click", function () {
    var apple = {
      url: ' https://newsapi.org/v2/everything?q=apple&from=2021-08-09&to=2021-08-09&sortBy=popularity&apiKey=0ca8c14043a4415885bb5de441ddfcf3'
    };
    fetch(apple.url).then(function (appleout) {
      return appleout.json();
    }).then(function (appledisp) {
      document.getElementsByClassName("imghai")[0].src = appledisp.articles[0].urlToImage;
      document.getElementsByClassName("h3hai")[0].innerHTML = appledisp.articles[0].title;
      document.getElementsByClassName("imghai")[1].src = appledisp.articles[1].urlToImage;
      document.getElementsByClassName("h3hai")[1].innerHTML = appledisp.articles[1].title;
      document.getElementsByClassName("imghai")[2].src = appledisp.articles[2].urlToImage;
      document.getElementsByClassName("h3hai")[2].innerHTML = appledisp.articles[2].title;
      document.getElementsByClassName("imghai")[3].src = appledisp.articles[3].urlToImage;
      document.getElementsByClassName("h3hai")[3].innerHTML = appledisp.articles[3].title;
      document.getElementsByClassName("imghai")[4].src = appledisp.articles[4].urlToImage;
      document.getElementsByClassName("h3hai")[4].innerHTML = appledisp.articles[4].title;
      document.getElementsByClassName("imghai")[5].src = appledisp.articles[5].urlToImage;
      document.getElementsByClassName("h3hai")[5].innerHTML = appledisp.articles[5].title;
      document.getElementById("btn1").addEventListener("click", function () {
        console.log("done");
        swal(appledisp.articles[0].content + "\n \n" + "For More Information: " + "\n" + appledisp.articles[0].url);
      });
      document.getElementById("btn2").addEventListener("click", function () {
        console.log("done");
        swal(appledisp.articles[1].content + "\n \n" + "For More Information: " + "\n" + appledisp.articles[1].url);
      });
      document.getElementById("btn3").addEventListener("click", function () {
        console.log("done");
        swal(appledisp.articles[2].content + "\n \n" + "For More Information: " + "\n" + appledisp.articles[2].url);
      });
      document.getElementById("btn4").addEventListener("click", function () {
        console.log("done");
        swal(appledisp.articles[3].content + "\n \n" + "For More Information: " + "\n" + appledisp.articles[3].url);
      });
      document.getElementById("btn5").addEventListener("click", function () {
        console.log("done");
        swal(appledisp.articles[5].content + "\n \n" + "For More Information: " + "\n" + appledisp.articles[5].url);
      });
      document.getElementById("btn6").addEventListener("click", function () {
        console.log("done");
        swal(appledisp.articles[0].content + "\n \n" + "For More Information: " + "\n" + appledisp.articles[0].url);
      });
    }).catch(function error(error) {
      console.log(error);
    });
  }); //TechCrunch

  document.getElementById("tech").addEventListener("click", function () {
    var tech = {
      url: 'https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=0ca8c14043a4415885bb5de441ddfcf3'
    };
    fetch(tech.url).then(function (techout) {
      return techout.json();
    }).then(function (techshow) {
      console.log("JALWA");
      console.log(techshow);
      document.getElementsByClassName("imghai")[0].src = techshow.articles[0].urlToImage;
      document.getElementsByClassName("h3hai")[0].innerHTML = techshow.articles[0].title;
      document.getElementsByClassName("imghai")[1].src = techshow.articles[1].urlToImage;
      document.getElementsByClassName("h3hai")[1].innerHTML = techshow.articles[1].title;
      document.getElementsByClassName("imghai")[2].src = techshow.articles[2].urlToImage;
      document.getElementsByClassName("h3hai")[2].innerHTML = techshow.articles[2].title;
      document.getElementsByClassName("imghai")[3].src = techshow.articles[3].urlToImage;
      document.getElementsByClassName("h3hai")[3].innerHTML = techshow.articles[3].title;
      document.getElementsByClassName("imghai")[4].src = techshow.articles[4].urlToImage;
      document.getElementsByClassName("h3hai")[4].innerHTML = techshow.articles[4].title;
      document.getElementsByClassName("imghai")[5].src = techshow.articles[5].urlToImage;
      document.getElementsByClassName("h3hai")[5].innerHTML = techshow.articles[5].title;
      document.getElementById("btn1").addEventListener("click", function () {
        console.log("done");
        swal(techshow.articles[0].content + "\n \n" + "For More Information: " + "\n" + techshow.articles[0].url);
      });
      document.getElementById("btn2").addEventListener("click", function () {
        console.log("done");
        swal(techshow.articles[1].content + "\n \n" + "For More Information: " + "\n" + techshow.articles[1].url);
      });
      document.getElementById("btn3").addEventListener("click", function () {
        console.log("done");
        swal(techshow.articles[2].content + "\n \n" + "For More Information: " + "\n" + techshow.articles[2].url);
      });
      document.getElementById("btn4").addEventListener("click", function () {
        console.log("done");
        swal(techshow.articles[3].content + "\n \n" + "For More Information: " + "\n" + techshow.articles[3].url);
      });
      document.getElementById("btn5").addEventListener("click", function () {
        console.log("done");
        swal(techshow.articles[5].content + "\n \n" + "For More Information: " + "\n" + techshow.articles[5].url);
      });
      document.getElementById("btn6").addEventListener("click", function () {
        console.log("done");
        swal(techshow.articles[0].content + "\n \n" + "For More Information: " + "\n" + techshow.articles[0].url);
      });
    }).catch(function error(error) {
      console.log(error);
    });
  }); //end over here
}).catch(function (error) {
  console.log(error);
});

function myFunction() {
  console.log("done");
}

function filter() {
  var search = document.getElementById("search");
  search = search.value;
  var searchNews = {
    url: 'https://newsapi.org/v2/everything?q=',
    query: '&from=2021-08-10&sortBy=popularity&apiKey=0ca8c14043a4415885bb5de441ddfcf3'
  };
  fetch(searchNews.url + search + searchNews.query).then(function (filterNews) {
    return filterNews.json();
  }).then(function (filtered) {
    console.log(filtered);
    document.getElementsByClassName("imghai")[0].src = filtered.articles[0].urlToImage;
    document.getElementsByClassName("h3hai")[0].innerHTML = filtered.articles[0].title;
    document.getElementsByClassName("imghai")[1].src = filtered.articles[1].urlToImage;
    document.getElementsByClassName("h3hai")[1].innerHTML = filtered.articles[1].title;
    document.getElementsByClassName("imghai")[2].src = filtered.articles[2].urlToImage;
    document.getElementsByClassName("h3hai")[2].innerHTML = filtered.articles[2].title;
    document.getElementsByClassName("imghai")[3].src = filtered.articles[3].urlToImage;
    document.getElementsByClassName("h3hai")[3].innerHTML = filtered.articles[3].title;
    document.getElementsByClassName("imghai")[4].src = filtered.articles[4].urlToImage;
    document.getElementsByClassName("h3hai")[4].innerHTML = filtered.articles[4].title;
    document.getElementsByClassName("imghai")[5].src = filtered.articles[5].urlToImage;
    document.getElementsByClassName("h3hai")[5].innerHTML = filtered.articles[5].title;
    document.getElementById("btn1").addEventListener("click", function () {
      console.log("done");
      swal(filtered.articles[0].content + "\n \n" + "For More Information: " + "\n" + filtered.articles[0].url);
    });
    document.getElementById("btn2").addEventListener("click", function () {
      console.log("done");
      swal(filtered.articles[1].content + "\n \n" + "For More Information: " + "\n" + filtered.articles[1].url);
    });
    document.getElementById("btn3").addEventListener("click", function () {
      console.log("done");
      swal(filtered.articles[2].content + "\n \n" + "For More Information: " + "\n" + filtered.articles[2].url);
    });
    document.getElementById("btn4").addEventListener("click", function () {
      console.log("done");
      swal(filtered.articles[3].content + "\n \n" + "For More Information: " + "\n" + filtered.articles[3].url);
    });
    document.getElementById("btn5").addEventListener("click", function () {
      console.log("done");
      swal(filtered.articles[5].content + "\n \n" + "For More Information: " + "\n" + filtered.articles[5].url);
    });
    document.getElementById("btn6").addEventListener("click", function () {
      console.log("done");
      swal(filtered.articles[0].content + "\n \n" + "For More Information: " + "\n" + filtered.articles[0].url);
    });
  }).catch(function (error) {
    console.log(error);
  });
}
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52061" + '/');

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
      }); // Enable HMR for CSS by default.

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
  overlay.id = OVERLAY_ID; // html encode message and stack trace

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map