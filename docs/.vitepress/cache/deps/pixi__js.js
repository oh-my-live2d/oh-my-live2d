import {
  ALPHA_MODES,
  AbstractBatchRenderer,
  AbstractMultiResource,
  AbstractRenderer,
  ArrayResource,
  Attribute,
  BLEND_MODES,
  BUFFER_BITS,
  BUFFER_TYPE,
  BaseImageResource,
  BaseRenderTexture,
  BaseTexture,
  BatchDrawCall,
  BatchGeometry,
  BatchPluginFactory,
  BatchRenderer,
  BatchShaderGenerator,
  BatchSystem,
  BatchTextureArray,
  Bounds,
  BrowserAdapter,
  Buffer,
  BufferResource,
  CLEAR_MODES,
  COLOR_MASK_BITS,
  CanvasRenderTarget,
  CanvasResource,
  Circle,
  Container,
  ContextSystem,
  CubeResource,
  DEG_TO_RAD,
  DRAW_MODES,
  DisplayObject,
  ENV,
  Ellipse,
  ExtensionType,
  FORMATS,
  Filter,
  FilterState,
  FilterSystem,
  Framebuffer,
  FramebufferSystem,
  GC_MODES,
  GLFramebuffer,
  GLProgram,
  GLTexture,
  Geometry,
  GeometrySystem,
  IGLUniformData,
  INSTALLED,
  ImageBitmapResource,
  ImageResource,
  MASK_TYPES,
  MIPMAP_MODES,
  MSAA_QUALITY,
  MaskData,
  MaskSystem,
  Matrix,
  ObjectRenderer,
  ObservablePoint,
  PI_2,
  PRECISION,
  Point,
  Polygon,
  Program,
  ProjectionSystem,
  Quad,
  QuadUv,
  RAD_TO_DEG,
  RENDERER_TYPE,
  Rectangle,
  RenderTexture,
  RenderTexturePool,
  RenderTextureSystem,
  Renderer,
  Resource,
  RoundedRectangle,
  Runner,
  SAMPLER_TYPES,
  SCALE_MODES,
  SHAPES,
  SVGResource,
  ScissorSystem,
  Shader,
  ShaderSystem,
  SpriteMaskFilter,
  State,
  StateSystem,
  StencilSystem,
  System,
  TARGETS,
  TYPES,
  TemporaryDisplayObject,
  Texture,
  TextureGCSystem,
  TextureMatrix,
  TextureSystem,
  TextureUvs,
  Ticker,
  TickerPlugin,
  Transform,
  UPDATE_PRIORITY,
  UniformGroup,
  VERSION,
  VideoResource,
  ViewableBuffer,
  WRAP_MODES,
  autoDetectRenderer,
  autoDetectResource,
  checkMaxIfStatementsInShader,
  correctBlendMode,
  createIndicesForQuads,
  createUBOElements,
  defaultFilterVertex,
  defaultVertex$1,
  deprecation,
  extensions,
  generateProgram,
  generateUniformBufferSync,
  getResolutionOfUrl,
  getTestContext,
  getUBOData,
  groupD8,
  hex2rgb,
  hex2string,
  import_earcut,
  import_eventemitter3,
  isMobile,
  premultiplyRgba,
  premultiplyTint,
  premultiplyTintToRgba,
  removeItems,
  resources,
  settings,
  sign,
  string2hex,
  systems,
  trimCanvas,
  uid,
  uniformParsers,
  url,
  utils_exports
} from "./chunk-PW32FG5P.js";
import {
  __commonJS,
  __toESM
} from "./chunk-ZS7NZCD4.js";

// node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty2 = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty2.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/.pnpm/promise-polyfill@8.3.0/node_modules/promise-polyfill/src/finally.js
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      return constructor.resolve(callback()).then(function() {
        return constructor.reject(reason);
      });
    }
  );
}
var finally_default = finallyConstructor;

// node_modules/.pnpm/promise-polyfill@8.3.0/node_modules/promise-polyfill/src/allSettled.js
function allSettled(arr) {
  var P = this;
  return new P(function(resolve2, reject2) {
    if (!(arr && typeof arr.length !== "undefined")) {
      return reject2(
        new TypeError(
          typeof arr + " " + arr + " is not iterable(cannot read property Symbol(Symbol.iterator))"
        )
      );
    }
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0)
      return resolve2([]);
    var remaining = args.length;
    function res(i2, val) {
      if (val && (typeof val === "object" || typeof val === "function")) {
        var then = val.then;
        if (typeof then === "function") {
          then.call(
            val,
            function(val2) {
              res(i2, val2);
            },
            function(e) {
              args[i2] = { status: "rejected", reason: e };
              if (--remaining === 0) {
                resolve2(args);
              }
            }
          );
          return;
        }
      }
      args[i2] = { status: "fulfilled", value: val };
      if (--remaining === 0) {
        resolve2(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
}
var allSettled_default = allSettled;

// node_modules/.pnpm/promise-polyfill@8.3.0/node_modules/promise-polyfill/src/any.js
function AggregateError(errors, message) {
  this.name = "AggregateError", this.errors = errors;
  this.message = message || "";
}
AggregateError.prototype = Error.prototype;
function any(arr) {
  var P = this;
  return new P(function(resolve2, reject2) {
    if (!(arr && typeof arr.length !== "undefined")) {
      return reject2(new TypeError("Promise.any accepts an array"));
    }
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0)
      return reject2();
    var rejectionReasons = [];
    for (var i = 0; i < args.length; i++) {
      try {
        P.resolve(args[i]).then(resolve2).catch(function(error) {
          rejectionReasons.push(error);
          if (rejectionReasons.length === args.length) {
            reject2(
              new AggregateError(
                rejectionReasons,
                "All promises were rejected"
              )
            );
          }
        });
      } catch (ex) {
        reject2(ex);
      }
    }
  });
}
var any_default = any;

// node_modules/.pnpm/promise-polyfill@8.3.0/node_modules/promise-polyfill/src/index.js
var setTimeoutFunc = setTimeout;
function isArray(x) {
  return Boolean(x && typeof x.length !== "undefined");
}
function noop() {
}
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}
function Promise2(fn) {
  if (!(this instanceof Promise2))
    throw new TypeError("Promises must be constructed via new");
  if (typeof fn !== "function")
    throw new TypeError("not a function");
  this._state = 0;
  this._handled = false;
  this._value = void 0;
  this._deferreds = [];
  doResolve(fn, this);
}
function handle(self2, deferred) {
  while (self2._state === 3) {
    self2 = self2._value;
  }
  if (self2._state === 0) {
    self2._deferreds.push(deferred);
    return;
  }
  self2._handled = true;
  Promise2._immediateFn(function() {
    var cb = self2._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self2._state === 1 ? resolve : reject)(deferred.promise, self2._value);
      return;
    }
    var ret;
    try {
      ret = cb(self2._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}
function resolve(self2, newValue) {
  try {
    if (newValue === self2)
      throw new TypeError("A promise cannot be resolved with itself.");
    if (newValue && (typeof newValue === "object" || typeof newValue === "function")) {
      var then = newValue.then;
      if (newValue instanceof Promise2) {
        self2._state = 3;
        self2._value = newValue;
        finale(self2);
        return;
      } else if (typeof then === "function") {
        doResolve(bind(then, newValue), self2);
        return;
      }
    }
    self2._state = 1;
    self2._value = newValue;
    finale(self2);
  } catch (e) {
    reject(self2, e);
  }
}
function reject(self2, newValue) {
  self2._state = 2;
  self2._value = newValue;
  finale(self2);
}
function finale(self2) {
  if (self2._state === 2 && self2._deferreds.length === 0) {
    Promise2._immediateFn(function() {
      if (!self2._handled) {
        Promise2._unhandledRejectionFn(self2._value);
      }
    });
  }
  for (var i = 0, len = self2._deferreds.length; i < len; i++) {
    handle(self2, self2._deferreds[i]);
  }
  self2._deferreds = null;
}
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
  this.onRejected = typeof onRejected === "function" ? onRejected : null;
  this.promise = promise;
}
function doResolve(fn, self2) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done)
          return;
        done = true;
        resolve(self2, value);
      },
      function(reason) {
        if (done)
          return;
        done = true;
        reject(self2, reason);
      }
    );
  } catch (ex) {
    if (done)
      return;
    done = true;
    reject(self2, ex);
  }
}
Promise2.prototype["catch"] = function(onRejected) {
  return this.then(null, onRejected);
};
Promise2.prototype.then = function(onFulfilled, onRejected) {
  var prom = new this.constructor(noop);
  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};
Promise2.prototype["finally"] = finally_default;
Promise2.all = function(arr) {
  return new Promise2(function(resolve2, reject2) {
    if (!isArray(arr)) {
      return reject2(new TypeError("Promise.all accepts an array"));
    }
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0)
      return resolve2([]);
    var remaining = args.length;
    function res(i2, val) {
      try {
        if (val && (typeof val === "object" || typeof val === "function")) {
          var then = val.then;
          if (typeof then === "function") {
            then.call(
              val,
              function(val2) {
                res(i2, val2);
              },
              reject2
            );
            return;
          }
        }
        args[i2] = val;
        if (--remaining === 0) {
          resolve2(args);
        }
      } catch (ex) {
        reject2(ex);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};
Promise2.any = any_default;
Promise2.allSettled = allSettled_default;
Promise2.resolve = function(value) {
  if (value && typeof value === "object" && value.constructor === Promise2) {
    return value;
  }
  return new Promise2(function(resolve2) {
    resolve2(value);
  });
};
Promise2.reject = function(value) {
  return new Promise2(function(resolve2, reject2) {
    reject2(value);
  });
};
Promise2.race = function(arr) {
  return new Promise2(function(resolve2, reject2) {
    if (!isArray(arr)) {
      return reject2(new TypeError("Promise.race accepts an array"));
    }
    for (var i = 0, len = arr.length; i < len; i++) {
      Promise2.resolve(arr[i]).then(resolve2, reject2);
    }
  });
};
Promise2._immediateFn = // @ts-ignore
typeof setImmediate === "function" && function(fn) {
  setImmediate(fn);
} || function(fn) {
  setTimeoutFunc(fn, 0);
};
Promise2._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== "undefined" && console) {
    console.warn("Possible Unhandled Promise Rejection:", err);
  }
};
var src_default = Promise2;

// node_modules/.pnpm/@pixi+polyfill@6.5.2/node_modules/@pixi/polyfill/dist/esm/polyfill.mjs
var import_object_assign = __toESM(require_object_assign(), 1);
if (typeof globalThis === "undefined") {
  if (typeof self !== "undefined") {
    self.globalThis = self;
  } else if (typeof global !== "undefined") {
    global.globalThis = global;
  }
}
if (!globalThis.Promise) {
  globalThis.Promise = src_default;
}
if (!Object.assign) {
  Object.assign = import_object_assign.default;
}
var ONE_FRAME_TIME = 16;
if (!(Date.now && Date.prototype.getTime)) {
  Date.now = function now() {
    return (/* @__PURE__ */ new Date()).getTime();
  };
}
if (!(globalThis.performance && globalThis.performance.now)) {
  startTime_1 = Date.now();
  if (!globalThis.performance) {
    globalThis.performance = {};
  }
  globalThis.performance.now = function() {
    return Date.now() - startTime_1;
  };
}
var startTime_1;
var lastTime = Date.now();
var vendors = ["ms", "moz", "webkit", "o"];
for (x = 0; x < vendors.length && !globalThis.requestAnimationFrame; ++x) {
  p = vendors[x];
  globalThis.requestAnimationFrame = globalThis[p + "RequestAnimationFrame"];
  globalThis.cancelAnimationFrame = globalThis[p + "CancelAnimationFrame"] || globalThis[p + "CancelRequestAnimationFrame"];
}
var p;
var x;
if (!globalThis.requestAnimationFrame) {
  globalThis.requestAnimationFrame = function(callback) {
    if (typeof callback !== "function") {
      throw new TypeError(callback + "is not a function");
    }
    var currentTime = Date.now();
    var delay = ONE_FRAME_TIME + lastTime - currentTime;
    if (delay < 0) {
      delay = 0;
    }
    lastTime = currentTime;
    return globalThis.self.setTimeout(function() {
      lastTime = Date.now();
      callback(performance.now());
    }, delay);
  };
}
if (!globalThis.cancelAnimationFrame) {
  globalThis.cancelAnimationFrame = function(id) {
    return clearTimeout(id);
  };
}
if (!Math.sign) {
  Math.sign = function mathSign(x) {
    x = Number(x);
    if (x === 0 || isNaN(x)) {
      return x;
    }
    return x > 0 ? 1 : -1;
  };
}
if (!Number.isInteger) {
  Number.isInteger = function numberIsInteger(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
  };
}
if (!globalThis.ArrayBuffer) {
  globalThis.ArrayBuffer = Array;
}
if (!globalThis.Float32Array) {
  globalThis.Float32Array = Array;
}
if (!globalThis.Uint32Array) {
  globalThis.Uint32Array = Array;
}
if (!globalThis.Uint16Array) {
  globalThis.Uint16Array = Array;
}
if (!globalThis.Uint8Array) {
  globalThis.Uint8Array = Array;
}
if (!globalThis.Int32Array) {
  globalThis.Int32Array = Array;
}

// node_modules/.pnpm/@pixi+accessibility@6.5.2_@pixi+core@6.5.2_@pixi+display@6.5.2_@pixi+utils@6.5.2/node_modules/@pixi/accessibility/dist/esm/accessibility.mjs
var accessibleTarget = {
  /**
   *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
   *   shadow div with attributes set
   * @member {boolean}
   * @memberof PIXI.DisplayObject#
   */
  accessible: false,
  /**
   * Sets the title attribute of the shadow div
   * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
   * @member {?string}
   * @memberof PIXI.DisplayObject#
   */
  accessibleTitle: null,
  /**
   * Sets the aria-label attribute of the shadow div
   * @member {string}
   * @memberof PIXI.DisplayObject#
   */
  accessibleHint: null,
  /**
   * @member {number}
   * @memberof PIXI.DisplayObject#
   * @private
   * @todo Needs docs.
   */
  tabIndex: 0,
  /**
   * @member {boolean}
   * @memberof PIXI.DisplayObject#
   * @todo Needs docs.
   */
  _accessibleActive: false,
  /**
   * @member {boolean}
   * @memberof PIXI.DisplayObject#
   * @todo Needs docs.
   */
  _accessibleDiv: null,
  /**
   * Specify the type of div the accessible layer is. Screen readers treat the element differently
   * depending on this type. Defaults to button.
   * @member {string}
   * @memberof PIXI.DisplayObject#
   * @default 'button'
   */
  accessibleType: "button",
  /**
   * Specify the pointer-events the accessible div will use
   * Defaults to auto.
   * @member {string}
   * @memberof PIXI.DisplayObject#
   * @default 'auto'
   */
  accessiblePointerEvents: "auto",
  /**
   * Setting to false will prevent any children inside this container to
   * be accessible. Defaults to true.
   * @member {boolean}
   * @memberof PIXI.DisplayObject#
   * @default true
   */
  accessibleChildren: true,
  renderId: -1
};
DisplayObject.mixin(accessibleTarget);
var KEY_CODE_TAB = 9;
var DIV_TOUCH_SIZE = 100;
var DIV_TOUCH_POS_X = 0;
var DIV_TOUCH_POS_Y = 0;
var DIV_TOUCH_ZINDEX = 2;
var DIV_HOOK_SIZE = 1;
var DIV_HOOK_POS_X = -1e3;
var DIV_HOOK_POS_Y = -1e3;
var DIV_HOOK_ZINDEX = 2;
var AccessibilityManager = (
  /** @class */
  function() {
    function AccessibilityManager2(renderer) {
      this.debug = false;
      this._isActive = false;
      this._isMobileAccessibility = false;
      this.pool = [];
      this.renderId = 0;
      this.children = [];
      this.androidUpdateCount = 0;
      this.androidUpdateFrequency = 500;
      this._hookDiv = null;
      if (isMobile.tablet || isMobile.phone) {
        this.createTouchHook();
      }
      var div = document.createElement("div");
      div.style.width = DIV_TOUCH_SIZE + "px";
      div.style.height = DIV_TOUCH_SIZE + "px";
      div.style.position = "absolute";
      div.style.top = DIV_TOUCH_POS_X + "px";
      div.style.left = DIV_TOUCH_POS_Y + "px";
      div.style.zIndex = DIV_TOUCH_ZINDEX.toString();
      this.div = div;
      this.renderer = renderer;
      this._onKeyDown = this._onKeyDown.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      globalThis.addEventListener("keydown", this._onKeyDown, false);
    }
    Object.defineProperty(AccessibilityManager2.prototype, "isActive", {
      /**
       * Value of `true` if accessibility is currently active and accessibility layers are showing.
       * @member {boolean}
       * @readonly
       */
      get: function() {
        return this._isActive;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(AccessibilityManager2.prototype, "isMobileAccessibility", {
      /**
       * Value of `true` if accessibility is enabled for touch devices.
       * @member {boolean}
       * @readonly
       */
      get: function() {
        return this._isMobileAccessibility;
      },
      enumerable: false,
      configurable: true
    });
    AccessibilityManager2.prototype.createTouchHook = function() {
      var _this = this;
      var hookDiv = document.createElement("button");
      hookDiv.style.width = DIV_HOOK_SIZE + "px";
      hookDiv.style.height = DIV_HOOK_SIZE + "px";
      hookDiv.style.position = "absolute";
      hookDiv.style.top = DIV_HOOK_POS_X + "px";
      hookDiv.style.left = DIV_HOOK_POS_Y + "px";
      hookDiv.style.zIndex = DIV_HOOK_ZINDEX.toString();
      hookDiv.style.backgroundColor = "#FF0000";
      hookDiv.title = "select to enable accessibility for this content";
      hookDiv.addEventListener("focus", function() {
        _this._isMobileAccessibility = true;
        _this.activate();
        _this.destroyTouchHook();
      });
      document.body.appendChild(hookDiv);
      this._hookDiv = hookDiv;
    };
    AccessibilityManager2.prototype.destroyTouchHook = function() {
      if (!this._hookDiv) {
        return;
      }
      document.body.removeChild(this._hookDiv);
      this._hookDiv = null;
    };
    AccessibilityManager2.prototype.activate = function() {
      var _a3;
      if (this._isActive) {
        return;
      }
      this._isActive = true;
      globalThis.document.addEventListener("mousemove", this._onMouseMove, true);
      globalThis.removeEventListener("keydown", this._onKeyDown, false);
      this.renderer.on("postrender", this.update, this);
      (_a3 = this.renderer.view.parentNode) === null || _a3 === void 0 ? void 0 : _a3.appendChild(this.div);
    };
    AccessibilityManager2.prototype.deactivate = function() {
      var _a3;
      if (!this._isActive || this._isMobileAccessibility) {
        return;
      }
      this._isActive = false;
      globalThis.document.removeEventListener("mousemove", this._onMouseMove, true);
      globalThis.addEventListener("keydown", this._onKeyDown, false);
      this.renderer.off("postrender", this.update);
      (_a3 = this.div.parentNode) === null || _a3 === void 0 ? void 0 : _a3.removeChild(this.div);
    };
    AccessibilityManager2.prototype.updateAccessibleObjects = function(displayObject) {
      if (!displayObject.visible || !displayObject.accessibleChildren) {
        return;
      }
      if (displayObject.accessible && displayObject.interactive) {
        if (!displayObject._accessibleActive) {
          this.addChild(displayObject);
        }
        displayObject.renderId = this.renderId;
      }
      var children = displayObject.children;
      if (children) {
        for (var i = 0; i < children.length; i++) {
          this.updateAccessibleObjects(children[i]);
        }
      }
    };
    AccessibilityManager2.prototype.update = function() {
      var now = performance.now();
      if (isMobile.android.device && now < this.androidUpdateCount) {
        return;
      }
      this.androidUpdateCount = now + this.androidUpdateFrequency;
      if (!this.renderer.renderingToScreen) {
        return;
      }
      if (this.renderer._lastObjectRendered) {
        this.updateAccessibleObjects(this.renderer._lastObjectRendered);
      }
      var _a3 = this.renderer.view.getBoundingClientRect(), left = _a3.left, top = _a3.top, width = _a3.width, height = _a3.height;
      var _b2 = this.renderer, viewWidth = _b2.width, viewHeight = _b2.height, resolution = _b2.resolution;
      var sx = width / viewWidth * resolution;
      var sy = height / viewHeight * resolution;
      var div = this.div;
      div.style.left = left + "px";
      div.style.top = top + "px";
      div.style.width = viewWidth + "px";
      div.style.height = viewHeight + "px";
      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        if (child.renderId !== this.renderId) {
          child._accessibleActive = false;
          removeItems(this.children, i, 1);
          this.div.removeChild(child._accessibleDiv);
          this.pool.push(child._accessibleDiv);
          child._accessibleDiv = null;
          i--;
        } else {
          div = child._accessibleDiv;
          var hitArea = child.hitArea;
          var wt = child.worldTransform;
          if (child.hitArea) {
            div.style.left = (wt.tx + hitArea.x * wt.a) * sx + "px";
            div.style.top = (wt.ty + hitArea.y * wt.d) * sy + "px";
            div.style.width = hitArea.width * wt.a * sx + "px";
            div.style.height = hitArea.height * wt.d * sy + "px";
          } else {
            hitArea = child.getBounds();
            this.capHitArea(hitArea);
            div.style.left = hitArea.x * sx + "px";
            div.style.top = hitArea.y * sy + "px";
            div.style.width = hitArea.width * sx + "px";
            div.style.height = hitArea.height * sy + "px";
            if (div.title !== child.accessibleTitle && child.accessibleTitle !== null) {
              div.title = child.accessibleTitle;
            }
            if (div.getAttribute("aria-label") !== child.accessibleHint && child.accessibleHint !== null) {
              div.setAttribute("aria-label", child.accessibleHint);
            }
          }
          if (child.accessibleTitle !== div.title || child.tabIndex !== div.tabIndex) {
            div.title = child.accessibleTitle;
            div.tabIndex = child.tabIndex;
            if (this.debug) {
              this.updateDebugHTML(div);
            }
          }
        }
      }
      this.renderId++;
    };
    AccessibilityManager2.prototype.updateDebugHTML = function(div) {
      div.innerHTML = "type: " + div.type + "</br> title : " + div.title + "</br> tabIndex: " + div.tabIndex;
    };
    AccessibilityManager2.prototype.capHitArea = function(hitArea) {
      if (hitArea.x < 0) {
        hitArea.width += hitArea.x;
        hitArea.x = 0;
      }
      if (hitArea.y < 0) {
        hitArea.height += hitArea.y;
        hitArea.y = 0;
      }
      var _a3 = this.renderer, viewWidth = _a3.width, viewHeight = _a3.height;
      if (hitArea.x + hitArea.width > viewWidth) {
        hitArea.width = viewWidth - hitArea.x;
      }
      if (hitArea.y + hitArea.height > viewHeight) {
        hitArea.height = viewHeight - hitArea.y;
      }
    };
    AccessibilityManager2.prototype.addChild = function(displayObject) {
      var div = this.pool.pop();
      if (!div) {
        div = document.createElement("button");
        div.style.width = DIV_TOUCH_SIZE + "px";
        div.style.height = DIV_TOUCH_SIZE + "px";
        div.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent";
        div.style.position = "absolute";
        div.style.zIndex = DIV_TOUCH_ZINDEX.toString();
        div.style.borderStyle = "none";
        if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
          div.setAttribute("aria-live", "off");
        } else {
          div.setAttribute("aria-live", "polite");
        }
        if (navigator.userAgent.match(/rv:.*Gecko\//)) {
          div.setAttribute("aria-relevant", "additions");
        } else {
          div.setAttribute("aria-relevant", "text");
        }
        div.addEventListener("click", this._onClick.bind(this));
        div.addEventListener("focus", this._onFocus.bind(this));
        div.addEventListener("focusout", this._onFocusOut.bind(this));
      }
      div.style.pointerEvents = displayObject.accessiblePointerEvents;
      div.type = displayObject.accessibleType;
      if (displayObject.accessibleTitle && displayObject.accessibleTitle !== null) {
        div.title = displayObject.accessibleTitle;
      } else if (!displayObject.accessibleHint || displayObject.accessibleHint === null) {
        div.title = "displayObject " + displayObject.tabIndex;
      }
      if (displayObject.accessibleHint && displayObject.accessibleHint !== null) {
        div.setAttribute("aria-label", displayObject.accessibleHint);
      }
      if (this.debug) {
        this.updateDebugHTML(div);
      }
      displayObject._accessibleActive = true;
      displayObject._accessibleDiv = div;
      div.displayObject = displayObject;
      this.children.push(displayObject);
      this.div.appendChild(displayObject._accessibleDiv);
      displayObject._accessibleDiv.tabIndex = displayObject.tabIndex;
    };
    AccessibilityManager2.prototype._onClick = function(e) {
      var interactionManager = this.renderer.plugins.interaction;
      var displayObject = e.target.displayObject;
      var eventData = interactionManager.eventData;
      interactionManager.dispatchEvent(displayObject, "click", eventData);
      interactionManager.dispatchEvent(displayObject, "pointertap", eventData);
      interactionManager.dispatchEvent(displayObject, "tap", eventData);
    };
    AccessibilityManager2.prototype._onFocus = function(e) {
      if (!e.target.getAttribute("aria-live")) {
        e.target.setAttribute("aria-live", "assertive");
      }
      var interactionManager = this.renderer.plugins.interaction;
      var displayObject = e.target.displayObject;
      var eventData = interactionManager.eventData;
      interactionManager.dispatchEvent(displayObject, "mouseover", eventData);
    };
    AccessibilityManager2.prototype._onFocusOut = function(e) {
      if (!e.target.getAttribute("aria-live")) {
        e.target.setAttribute("aria-live", "polite");
      }
      var interactionManager = this.renderer.plugins.interaction;
      var displayObject = e.target.displayObject;
      var eventData = interactionManager.eventData;
      interactionManager.dispatchEvent(displayObject, "mouseout", eventData);
    };
    AccessibilityManager2.prototype._onKeyDown = function(e) {
      if (e.keyCode !== KEY_CODE_TAB) {
        return;
      }
      this.activate();
    };
    AccessibilityManager2.prototype._onMouseMove = function(e) {
      if (e.movementX === 0 && e.movementY === 0) {
        return;
      }
      this.deactivate();
    };
    AccessibilityManager2.prototype.destroy = function() {
      this.destroyTouchHook();
      this.div = null;
      globalThis.document.removeEventListener("mousemove", this._onMouseMove, true);
      globalThis.removeEventListener("keydown", this._onKeyDown);
      this.pool = null;
      this.children = null;
      this.renderer = null;
    };
    AccessibilityManager2.extension = {
      name: "accessibility",
      type: [
        ExtensionType.RendererPlugin,
        ExtensionType.CanvasRendererPlugin
      ]
    };
    return AccessibilityManager2;
  }()
);

// node_modules/.pnpm/@pixi+interaction@6.5.2_@pixi+core@6.5.2_@pixi+display@6.5.2_@pixi+math@6.5.2_@pixi+ticker@6.5.2_@pixi+utils@6.5.2/node_modules/@pixi/interaction/dist/esm/interaction.mjs
var InteractionData = (
  /** @class */
  function() {
    function InteractionData2() {
      this.pressure = 0;
      this.rotationAngle = 0;
      this.twist = 0;
      this.tangentialPressure = 0;
      this.global = new Point();
      this.target = null;
      this.originalEvent = null;
      this.identifier = null;
      this.isPrimary = false;
      this.button = 0;
      this.buttons = 0;
      this.width = 0;
      this.height = 0;
      this.tiltX = 0;
      this.tiltY = 0;
      this.pointerType = null;
      this.pressure = 0;
      this.rotationAngle = 0;
      this.twist = 0;
      this.tangentialPressure = 0;
    }
    Object.defineProperty(InteractionData2.prototype, "pointerId", {
      /**
       * The unique identifier of the pointer. It will be the same as `identifier`.
       * @readonly
       * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerId
       */
      get: function() {
        return this.identifier;
      },
      enumerable: false,
      configurable: true
    });
    InteractionData2.prototype.getLocalPosition = function(displayObject, point, globalPos) {
      return displayObject.worldTransform.applyInverse(globalPos || this.global, point);
    };
    InteractionData2.prototype.copyEvent = function(event) {
      if ("isPrimary" in event && event.isPrimary) {
        this.isPrimary = true;
      }
      this.button = "button" in event && event.button;
      var buttons = "buttons" in event && event.buttons;
      this.buttons = Number.isInteger(buttons) ? buttons : "which" in event && event.which;
      this.width = "width" in event && event.width;
      this.height = "height" in event && event.height;
      this.tiltX = "tiltX" in event && event.tiltX;
      this.tiltY = "tiltY" in event && event.tiltY;
      this.pointerType = "pointerType" in event && event.pointerType;
      this.pressure = "pressure" in event && event.pressure;
      this.rotationAngle = "rotationAngle" in event && event.rotationAngle;
      this.twist = "twist" in event && event.twist || 0;
      this.tangentialPressure = "tangentialPressure" in event && event.tangentialPressure || 0;
    };
    InteractionData2.prototype.reset = function() {
      this.isPrimary = false;
    };
    return InteractionData2;
  }()
);
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) {
      if (b2.hasOwnProperty(p)) {
        d2[p] = b2[p];
      }
    }
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var InteractionEvent = (
  /** @class */
  function() {
    function InteractionEvent2() {
      this.stopped = false;
      this.stopsPropagatingAt = null;
      this.stopPropagationHint = false;
      this.target = null;
      this.currentTarget = null;
      this.type = null;
      this.data = null;
    }
    InteractionEvent2.prototype.stopPropagation = function() {
      this.stopped = true;
      this.stopPropagationHint = true;
      this.stopsPropagatingAt = this.currentTarget;
    };
    InteractionEvent2.prototype.reset = function() {
      this.stopped = false;
      this.stopsPropagatingAt = null;
      this.stopPropagationHint = false;
      this.currentTarget = null;
      this.target = null;
    };
    return InteractionEvent2;
  }()
);
var InteractionTrackingData = (
  /** @class */
  function() {
    function InteractionTrackingData2(pointerId) {
      this._pointerId = pointerId;
      this._flags = InteractionTrackingData2.FLAGS.NONE;
    }
    InteractionTrackingData2.prototype._doSet = function(flag, yn) {
      if (yn) {
        this._flags = this._flags | flag;
      } else {
        this._flags = this._flags & ~flag;
      }
    };
    Object.defineProperty(InteractionTrackingData2.prototype, "pointerId", {
      /**
       * Unique pointer id of the event
       * @readonly
       * @private
       * @member {number}
       */
      get: function() {
        return this._pointerId;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(InteractionTrackingData2.prototype, "flags", {
      /**
       * State of the tracking data, expressed as bit flags
       * @private
       * @member {number}
       */
      get: function() {
        return this._flags;
      },
      set: function(flags) {
        this._flags = flags;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(InteractionTrackingData2.prototype, "none", {
      /**
       * Is the tracked event inactive (not over or down)?
       * @private
       * @member {number}
       */
      get: function() {
        return this._flags === InteractionTrackingData2.FLAGS.NONE;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(InteractionTrackingData2.prototype, "over", {
      /**
       * Is the tracked event over the DisplayObject?
       * @private
       * @member {boolean}
       */
      get: function() {
        return (this._flags & InteractionTrackingData2.FLAGS.OVER) !== 0;
      },
      set: function(yn) {
        this._doSet(InteractionTrackingData2.FLAGS.OVER, yn);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(InteractionTrackingData2.prototype, "rightDown", {
      /**
       * Did the right mouse button come down in the DisplayObject?
       * @private
       * @member {boolean}
       */
      get: function() {
        return (this._flags & InteractionTrackingData2.FLAGS.RIGHT_DOWN) !== 0;
      },
      set: function(yn) {
        this._doSet(InteractionTrackingData2.FLAGS.RIGHT_DOWN, yn);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(InteractionTrackingData2.prototype, "leftDown", {
      /**
       * Did the left mouse button come down in the DisplayObject?
       * @private
       * @member {boolean}
       */
      get: function() {
        return (this._flags & InteractionTrackingData2.FLAGS.LEFT_DOWN) !== 0;
      },
      set: function(yn) {
        this._doSet(InteractionTrackingData2.FLAGS.LEFT_DOWN, yn);
      },
      enumerable: false,
      configurable: true
    });
    InteractionTrackingData2.FLAGS = Object.freeze({
      NONE: 0,
      OVER: 1 << 0,
      LEFT_DOWN: 1 << 1,
      RIGHT_DOWN: 1 << 2
    });
    return InteractionTrackingData2;
  }()
);
var TreeSearch = (
  /** @class */
  function() {
    function TreeSearch2() {
      this._tempPoint = new Point();
    }
    TreeSearch2.prototype.recursiveFindHit = function(interactionEvent, displayObject, func, hitTest, interactive) {
      var _a3;
      if (!displayObject || !displayObject.visible) {
        return false;
      }
      var point = interactionEvent.data.global;
      interactive = displayObject.interactive || interactive;
      var hit = false;
      var interactiveParent = interactive;
      var hitTestChildren = true;
      if (displayObject.hitArea) {
        if (hitTest) {
          displayObject.worldTransform.applyInverse(point, this._tempPoint);
          if (!displayObject.hitArea.contains(this._tempPoint.x, this._tempPoint.y)) {
            hitTest = false;
            hitTestChildren = false;
          } else {
            hit = true;
          }
        }
        interactiveParent = false;
      } else if (displayObject._mask) {
        if (hitTest) {
          var maskObject = displayObject._mask.isMaskData ? displayObject._mask.maskObject : displayObject._mask;
          if (maskObject && !((_a3 = maskObject.containsPoint) === null || _a3 === void 0 ? void 0 : _a3.call(maskObject, point))) {
            hitTest = false;
          }
        }
      }
      if (hitTestChildren && displayObject.interactiveChildren && displayObject.children) {
        var children = displayObject.children;
        for (var i = children.length - 1; i >= 0; i--) {
          var child = children[i];
          var childHit = this.recursiveFindHit(interactionEvent, child, func, hitTest, interactiveParent);
          if (childHit) {
            if (!child.parent) {
              continue;
            }
            interactiveParent = false;
            if (childHit) {
              if (interactionEvent.target) {
                hitTest = false;
              }
              hit = true;
            }
          }
        }
      }
      if (interactive) {
        if (hitTest && !interactionEvent.target) {
          if (!displayObject.hitArea && displayObject.containsPoint) {
            if (displayObject.containsPoint(point)) {
              hit = true;
            }
          }
        }
        if (displayObject.interactive) {
          if (hit && !interactionEvent.target) {
            interactionEvent.target = displayObject;
          }
          if (func) {
            func(interactionEvent, displayObject, !!hit);
          }
        }
      }
      return hit;
    };
    TreeSearch2.prototype.findHit = function(interactionEvent, displayObject, func, hitTest) {
      this.recursiveFindHit(interactionEvent, displayObject, func, hitTest, false);
    };
    return TreeSearch2;
  }()
);
var interactiveTarget = {
  interactive: false,
  interactiveChildren: true,
  hitArea: null,
  /**
   * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
   * Setting this changes the 'cursor' property to `'pointer'`.
   * @example
   * const sprite = new PIXI.Sprite(texture);
   * sprite.interactive = true;
   * sprite.buttonMode = true;
   * @member {boolean}
   * @memberof PIXI.DisplayObject#
   */
  get buttonMode() {
    return this.cursor === "pointer";
  },
  set buttonMode(value) {
    if (value) {
      this.cursor = "pointer";
    } else if (this.cursor === "pointer") {
      this.cursor = null;
    }
  },
  /**
   * This defines what cursor mode is used when the mouse cursor
   * is hovered over the displayObject.
   * @example
   * const sprite = new PIXI.Sprite(texture);
   * sprite.interactive = true;
   * sprite.cursor = 'wait';
   * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
   * @member {string}
   * @memberof PIXI.DisplayObject#
   */
  cursor: null,
  /**
   * Internal set of all active pointers, by identifier
   * @member {Map<number, InteractionTrackingData>}
   * @memberof PIXI.DisplayObject#
   * @private
   */
  get trackedPointers() {
    if (this._trackedPointers === void 0) {
      this._trackedPointers = {};
    }
    return this._trackedPointers;
  },
  /**
   * Map of all tracked pointers, by identifier. Use trackedPointers to access.
   * @private
   * @type {Map<number, InteractionTrackingData>}
   */
  _trackedPointers: void 0
};
DisplayObject.mixin(interactiveTarget);
var MOUSE_POINTER_ID = 1;
var hitTestEvent = {
  target: null,
  data: {
    global: null
  }
};
var InteractionManager = (
  /** @class */
  function(_super) {
    __extends(InteractionManager2, _super);
    function InteractionManager2(renderer, options) {
      var _this = _super.call(this) || this;
      options = options || {};
      _this.renderer = renderer;
      _this.autoPreventDefault = options.autoPreventDefault !== void 0 ? options.autoPreventDefault : true;
      _this.interactionFrequency = options.interactionFrequency || 10;
      _this.mouse = new InteractionData();
      _this.mouse.identifier = MOUSE_POINTER_ID;
      _this.mouse.global.set(-999999);
      _this.activeInteractionData = {};
      _this.activeInteractionData[MOUSE_POINTER_ID] = _this.mouse;
      _this.interactionDataPool = [];
      _this.eventData = new InteractionEvent();
      _this.interactionDOMElement = null;
      _this.moveWhenInside = false;
      _this.eventsAdded = false;
      _this.tickerAdded = false;
      _this.mouseOverRenderer = !("PointerEvent" in globalThis);
      _this.supportsTouchEvents = "ontouchstart" in globalThis;
      _this.supportsPointerEvents = !!globalThis.PointerEvent;
      _this.onPointerUp = _this.onPointerUp.bind(_this);
      _this.processPointerUp = _this.processPointerUp.bind(_this);
      _this.onPointerCancel = _this.onPointerCancel.bind(_this);
      _this.processPointerCancel = _this.processPointerCancel.bind(_this);
      _this.onPointerDown = _this.onPointerDown.bind(_this);
      _this.processPointerDown = _this.processPointerDown.bind(_this);
      _this.onPointerMove = _this.onPointerMove.bind(_this);
      _this.processPointerMove = _this.processPointerMove.bind(_this);
      _this.onPointerOut = _this.onPointerOut.bind(_this);
      _this.processPointerOverOut = _this.processPointerOverOut.bind(_this);
      _this.onPointerOver = _this.onPointerOver.bind(_this);
      _this.cursorStyles = {
        default: "inherit",
        pointer: "pointer"
      };
      _this.currentCursorMode = null;
      _this.cursor = null;
      _this.resolution = 1;
      _this.delayedEvents = [];
      _this.search = new TreeSearch();
      _this._tempDisplayObject = new TemporaryDisplayObject();
      _this._eventListenerOptions = { capture: true, passive: false };
      _this._useSystemTicker = options.useSystemTicker !== void 0 ? options.useSystemTicker : true;
      _this.setTargetElement(_this.renderer.view, _this.renderer.resolution);
      return _this;
    }
    Object.defineProperty(InteractionManager2.prototype, "useSystemTicker", {
      /**
       * Should the InteractionManager automatically add {@link tickerUpdate} to {@link PIXI.Ticker.system}.
       * @default true
       */
      get: function() {
        return this._useSystemTicker;
      },
      set: function(useSystemTicker) {
        this._useSystemTicker = useSystemTicker;
        if (useSystemTicker) {
          this.addTickerListener();
        } else {
          this.removeTickerListener();
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(InteractionManager2.prototype, "lastObjectRendered", {
      /**
       * Last rendered object or temp object.
       * @readonly
       * @protected
       */
      get: function() {
        return this.renderer._lastObjectRendered || this._tempDisplayObject;
      },
      enumerable: false,
      configurable: true
    });
    InteractionManager2.prototype.hitTest = function(globalPoint, root) {
      hitTestEvent.target = null;
      hitTestEvent.data.global = globalPoint;
      if (!root) {
        root = this.lastObjectRendered;
      }
      this.processInteractive(hitTestEvent, root, null, true);
      return hitTestEvent.target;
    };
    InteractionManager2.prototype.setTargetElement = function(element, resolution) {
      if (resolution === void 0) {
        resolution = 1;
      }
      this.removeTickerListener();
      this.removeEvents();
      this.interactionDOMElement = element;
      this.resolution = resolution;
      this.addEvents();
      this.addTickerListener();
    };
    InteractionManager2.prototype.addTickerListener = function() {
      if (this.tickerAdded || !this.interactionDOMElement || !this._useSystemTicker) {
        return;
      }
      Ticker.system.add(this.tickerUpdate, this, UPDATE_PRIORITY.INTERACTION);
      this.tickerAdded = true;
    };
    InteractionManager2.prototype.removeTickerListener = function() {
      if (!this.tickerAdded) {
        return;
      }
      Ticker.system.remove(this.tickerUpdate, this);
      this.tickerAdded = false;
    };
    InteractionManager2.prototype.addEvents = function() {
      if (this.eventsAdded || !this.interactionDOMElement) {
        return;
      }
      var style = this.interactionDOMElement.style;
      if (globalThis.navigator.msPointerEnabled) {
        style.msContentZooming = "none";
        style.msTouchAction = "none";
      } else if (this.supportsPointerEvents) {
        style.touchAction = "none";
      }
      if (this.supportsPointerEvents) {
        globalThis.document.addEventListener("pointermove", this.onPointerMove, this._eventListenerOptions);
        this.interactionDOMElement.addEventListener("pointerdown", this.onPointerDown, this._eventListenerOptions);
        this.interactionDOMElement.addEventListener("pointerleave", this.onPointerOut, this._eventListenerOptions);
        this.interactionDOMElement.addEventListener("pointerover", this.onPointerOver, this._eventListenerOptions);
        globalThis.addEventListener("pointercancel", this.onPointerCancel, this._eventListenerOptions);
        globalThis.addEventListener("pointerup", this.onPointerUp, this._eventListenerOptions);
      } else {
        globalThis.document.addEventListener("mousemove", this.onPointerMove, this._eventListenerOptions);
        this.interactionDOMElement.addEventListener("mousedown", this.onPointerDown, this._eventListenerOptions);
        this.interactionDOMElement.addEventListener("mouseout", this.onPointerOut, this._eventListenerOptions);
        this.interactionDOMElement.addEventListener("mouseover", this.onPointerOver, this._eventListenerOptions);
        globalThis.addEventListener("mouseup", this.onPointerUp, this._eventListenerOptions);
      }
      if (this.supportsTouchEvents) {
        this.interactionDOMElement.addEventListener("touchstart", this.onPointerDown, this._eventListenerOptions);
        this.interactionDOMElement.addEventListener("touchcancel", this.onPointerCancel, this._eventListenerOptions);
        this.interactionDOMElement.addEventListener("touchend", this.onPointerUp, this._eventListenerOptions);
        this.interactionDOMElement.addEventListener("touchmove", this.onPointerMove, this._eventListenerOptions);
      }
      this.eventsAdded = true;
    };
    InteractionManager2.prototype.removeEvents = function() {
      if (!this.eventsAdded || !this.interactionDOMElement) {
        return;
      }
      var style = this.interactionDOMElement.style;
      if (globalThis.navigator.msPointerEnabled) {
        style.msContentZooming = "";
        style.msTouchAction = "";
      } else if (this.supportsPointerEvents) {
        style.touchAction = "";
      }
      if (this.supportsPointerEvents) {
        globalThis.document.removeEventListener("pointermove", this.onPointerMove, this._eventListenerOptions);
        this.interactionDOMElement.removeEventListener("pointerdown", this.onPointerDown, this._eventListenerOptions);
        this.interactionDOMElement.removeEventListener("pointerleave", this.onPointerOut, this._eventListenerOptions);
        this.interactionDOMElement.removeEventListener("pointerover", this.onPointerOver, this._eventListenerOptions);
        globalThis.removeEventListener("pointercancel", this.onPointerCancel, this._eventListenerOptions);
        globalThis.removeEventListener("pointerup", this.onPointerUp, this._eventListenerOptions);
      } else {
        globalThis.document.removeEventListener("mousemove", this.onPointerMove, this._eventListenerOptions);
        this.interactionDOMElement.removeEventListener("mousedown", this.onPointerDown, this._eventListenerOptions);
        this.interactionDOMElement.removeEventListener("mouseout", this.onPointerOut, this._eventListenerOptions);
        this.interactionDOMElement.removeEventListener("mouseover", this.onPointerOver, this._eventListenerOptions);
        globalThis.removeEventListener("mouseup", this.onPointerUp, this._eventListenerOptions);
      }
      if (this.supportsTouchEvents) {
        this.interactionDOMElement.removeEventListener("touchstart", this.onPointerDown, this._eventListenerOptions);
        this.interactionDOMElement.removeEventListener("touchcancel", this.onPointerCancel, this._eventListenerOptions);
        this.interactionDOMElement.removeEventListener("touchend", this.onPointerUp, this._eventListenerOptions);
        this.interactionDOMElement.removeEventListener("touchmove", this.onPointerMove, this._eventListenerOptions);
      }
      this.interactionDOMElement = null;
      this.eventsAdded = false;
    };
    InteractionManager2.prototype.tickerUpdate = function(deltaTime) {
      this._deltaTime += deltaTime;
      if (this._deltaTime < this.interactionFrequency) {
        return;
      }
      this._deltaTime = 0;
      this.update();
    };
    InteractionManager2.prototype.update = function() {
      if (!this.interactionDOMElement) {
        return;
      }
      if (this._didMove) {
        this._didMove = false;
        return;
      }
      this.cursor = null;
      for (var k in this.activeInteractionData) {
        if (this.activeInteractionData.hasOwnProperty(k)) {
          var interactionData = this.activeInteractionData[k];
          if (interactionData.originalEvent && interactionData.pointerType !== "touch") {
            var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, interactionData.originalEvent, interactionData);
            this.processInteractive(interactionEvent, this.lastObjectRendered, this.processPointerOverOut, true);
          }
        }
      }
      this.setCursorMode(this.cursor);
    };
    InteractionManager2.prototype.setCursorMode = function(mode) {
      mode = mode || "default";
      var applyStyles = true;
      if (globalThis.OffscreenCanvas && this.interactionDOMElement instanceof OffscreenCanvas) {
        applyStyles = false;
      }
      if (this.currentCursorMode === mode) {
        return;
      }
      this.currentCursorMode = mode;
      var style = this.cursorStyles[mode];
      if (style) {
        switch (typeof style) {
          case "string":
            if (applyStyles) {
              this.interactionDOMElement.style.cursor = style;
            }
            break;
          case "function":
            style(mode);
            break;
          case "object":
            if (applyStyles) {
              Object.assign(this.interactionDOMElement.style, style);
            }
            break;
        }
      } else if (applyStyles && typeof mode === "string" && !Object.prototype.hasOwnProperty.call(this.cursorStyles, mode)) {
        this.interactionDOMElement.style.cursor = mode;
      }
    };
    InteractionManager2.prototype.dispatchEvent = function(displayObject, eventString, eventData) {
      if (!eventData.stopPropagationHint || displayObject === eventData.stopsPropagatingAt) {
        eventData.currentTarget = displayObject;
        eventData.type = eventString;
        displayObject.emit(eventString, eventData);
        if (displayObject[eventString]) {
          displayObject[eventString](eventData);
        }
      }
    };
    InteractionManager2.prototype.delayDispatchEvent = function(displayObject, eventString, eventData) {
      this.delayedEvents.push({ displayObject, eventString, eventData });
    };
    InteractionManager2.prototype.mapPositionToPoint = function(point, x, y) {
      var rect;
      if (!this.interactionDOMElement.parentElement) {
        rect = {
          x: 0,
          y: 0,
          width: this.interactionDOMElement.width,
          height: this.interactionDOMElement.height,
          left: 0,
          top: 0
        };
      } else {
        rect = this.interactionDOMElement.getBoundingClientRect();
      }
      var resolutionMultiplier = 1 / this.resolution;
      point.x = (x - rect.left) * (this.interactionDOMElement.width / rect.width) * resolutionMultiplier;
      point.y = (y - rect.top) * (this.interactionDOMElement.height / rect.height) * resolutionMultiplier;
    };
    InteractionManager2.prototype.processInteractive = function(interactionEvent, displayObject, func, hitTest) {
      var hit = this.search.findHit(interactionEvent, displayObject, func, hitTest);
      var delayedEvents = this.delayedEvents;
      if (!delayedEvents.length) {
        return hit;
      }
      interactionEvent.stopPropagationHint = false;
      var delayedLen = delayedEvents.length;
      this.delayedEvents = [];
      for (var i = 0; i < delayedLen; i++) {
        var _a3 = delayedEvents[i], displayObject_1 = _a3.displayObject, eventString = _a3.eventString, eventData = _a3.eventData;
        if (eventData.stopsPropagatingAt === displayObject_1) {
          eventData.stopPropagationHint = true;
        }
        this.dispatchEvent(displayObject_1, eventString, eventData);
      }
      return hit;
    };
    InteractionManager2.prototype.onPointerDown = function(originalEvent) {
      if (this.supportsTouchEvents && originalEvent.pointerType === "touch") {
        return;
      }
      var events = this.normalizeToPointerData(originalEvent);
      if (this.autoPreventDefault && events[0].isNormalized) {
        var cancelable = originalEvent.cancelable || !("cancelable" in originalEvent);
        if (cancelable) {
          originalEvent.preventDefault();
        }
      }
      var eventLen = events.length;
      for (var i = 0; i < eventLen; i++) {
        var event = events[i];
        var interactionData = this.getInteractionDataForPointerId(event);
        var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);
        interactionEvent.data.originalEvent = originalEvent;
        this.processInteractive(interactionEvent, this.lastObjectRendered, this.processPointerDown, true);
        this.emit("pointerdown", interactionEvent);
        if (event.pointerType === "touch") {
          this.emit("touchstart", interactionEvent);
        } else if (event.pointerType === "mouse" || event.pointerType === "pen") {
          var isRightButton = event.button === 2;
          this.emit(isRightButton ? "rightdown" : "mousedown", this.eventData);
        }
      }
    };
    InteractionManager2.prototype.processPointerDown = function(interactionEvent, displayObject, hit) {
      var data = interactionEvent.data;
      var id = interactionEvent.data.identifier;
      if (hit) {
        if (!displayObject.trackedPointers[id]) {
          displayObject.trackedPointers[id] = new InteractionTrackingData(id);
        }
        this.dispatchEvent(displayObject, "pointerdown", interactionEvent);
        if (data.pointerType === "touch") {
          this.dispatchEvent(displayObject, "touchstart", interactionEvent);
        } else if (data.pointerType === "mouse" || data.pointerType === "pen") {
          var isRightButton = data.button === 2;
          if (isRightButton) {
            displayObject.trackedPointers[id].rightDown = true;
          } else {
            displayObject.trackedPointers[id].leftDown = true;
          }
          this.dispatchEvent(displayObject, isRightButton ? "rightdown" : "mousedown", interactionEvent);
        }
      }
    };
    InteractionManager2.prototype.onPointerComplete = function(originalEvent, cancelled, func) {
      var events = this.normalizeToPointerData(originalEvent);
      var eventLen = events.length;
      var target = originalEvent.target;
      if (originalEvent.composedPath && originalEvent.composedPath().length > 0) {
        target = originalEvent.composedPath()[0];
      }
      var eventAppend = target !== this.interactionDOMElement ? "outside" : "";
      for (var i = 0; i < eventLen; i++) {
        var event = events[i];
        var interactionData = this.getInteractionDataForPointerId(event);
        var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);
        interactionEvent.data.originalEvent = originalEvent;
        this.processInteractive(interactionEvent, this.lastObjectRendered, func, cancelled || !eventAppend);
        this.emit(cancelled ? "pointercancel" : "pointerup" + eventAppend, interactionEvent);
        if (event.pointerType === "mouse" || event.pointerType === "pen") {
          var isRightButton = event.button === 2;
          this.emit(isRightButton ? "rightup" + eventAppend : "mouseup" + eventAppend, interactionEvent);
        } else if (event.pointerType === "touch") {
          this.emit(cancelled ? "touchcancel" : "touchend" + eventAppend, interactionEvent);
          this.releaseInteractionDataForPointerId(event.pointerId);
        }
      }
    };
    InteractionManager2.prototype.onPointerCancel = function(event) {
      if (this.supportsTouchEvents && event.pointerType === "touch") {
        return;
      }
      this.onPointerComplete(event, true, this.processPointerCancel);
    };
    InteractionManager2.prototype.processPointerCancel = function(interactionEvent, displayObject) {
      var data = interactionEvent.data;
      var id = interactionEvent.data.identifier;
      if (displayObject.trackedPointers[id] !== void 0) {
        delete displayObject.trackedPointers[id];
        this.dispatchEvent(displayObject, "pointercancel", interactionEvent);
        if (data.pointerType === "touch") {
          this.dispatchEvent(displayObject, "touchcancel", interactionEvent);
        }
      }
    };
    InteractionManager2.prototype.onPointerUp = function(event) {
      if (this.supportsTouchEvents && event.pointerType === "touch") {
        return;
      }
      this.onPointerComplete(event, false, this.processPointerUp);
    };
    InteractionManager2.prototype.processPointerUp = function(interactionEvent, displayObject, hit) {
      var data = interactionEvent.data;
      var id = interactionEvent.data.identifier;
      var trackingData = displayObject.trackedPointers[id];
      var isTouch = data.pointerType === "touch";
      var isMouse = data.pointerType === "mouse" || data.pointerType === "pen";
      var isMouseTap = false;
      if (isMouse) {
        var isRightButton = data.button === 2;
        var flags = InteractionTrackingData.FLAGS;
        var test = isRightButton ? flags.RIGHT_DOWN : flags.LEFT_DOWN;
        var isDown = trackingData !== void 0 && trackingData.flags & test;
        if (hit) {
          this.dispatchEvent(displayObject, isRightButton ? "rightup" : "mouseup", interactionEvent);
          if (isDown) {
            this.dispatchEvent(displayObject, isRightButton ? "rightclick" : "click", interactionEvent);
            isMouseTap = true;
          }
        } else if (isDown) {
          this.dispatchEvent(displayObject, isRightButton ? "rightupoutside" : "mouseupoutside", interactionEvent);
        }
        if (trackingData) {
          if (isRightButton) {
            trackingData.rightDown = false;
          } else {
            trackingData.leftDown = false;
          }
        }
      }
      if (hit) {
        this.dispatchEvent(displayObject, "pointerup", interactionEvent);
        if (isTouch) {
          this.dispatchEvent(displayObject, "touchend", interactionEvent);
        }
        if (trackingData) {
          if (!isMouse || isMouseTap) {
            this.dispatchEvent(displayObject, "pointertap", interactionEvent);
          }
          if (isTouch) {
            this.dispatchEvent(displayObject, "tap", interactionEvent);
            trackingData.over = false;
          }
        }
      } else if (trackingData) {
        this.dispatchEvent(displayObject, "pointerupoutside", interactionEvent);
        if (isTouch) {
          this.dispatchEvent(displayObject, "touchendoutside", interactionEvent);
        }
      }
      if (trackingData && trackingData.none) {
        delete displayObject.trackedPointers[id];
      }
    };
    InteractionManager2.prototype.onPointerMove = function(originalEvent) {
      if (this.supportsTouchEvents && originalEvent.pointerType === "touch") {
        return;
      }
      var events = this.normalizeToPointerData(originalEvent);
      if (events[0].pointerType === "mouse" || events[0].pointerType === "pen") {
        this._didMove = true;
        this.cursor = null;
      }
      var eventLen = events.length;
      for (var i = 0; i < eventLen; i++) {
        var event = events[i];
        var interactionData = this.getInteractionDataForPointerId(event);
        var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);
        interactionEvent.data.originalEvent = originalEvent;
        this.processInteractive(interactionEvent, this.lastObjectRendered, this.processPointerMove, true);
        this.emit("pointermove", interactionEvent);
        if (event.pointerType === "touch") {
          this.emit("touchmove", interactionEvent);
        }
        if (event.pointerType === "mouse" || event.pointerType === "pen") {
          this.emit("mousemove", interactionEvent);
        }
      }
      if (events[0].pointerType === "mouse") {
        this.setCursorMode(this.cursor);
      }
    };
    InteractionManager2.prototype.processPointerMove = function(interactionEvent, displayObject, hit) {
      var data = interactionEvent.data;
      var isTouch = data.pointerType === "touch";
      var isMouse = data.pointerType === "mouse" || data.pointerType === "pen";
      if (isMouse) {
        this.processPointerOverOut(interactionEvent, displayObject, hit);
      }
      if (!this.moveWhenInside || hit) {
        this.dispatchEvent(displayObject, "pointermove", interactionEvent);
        if (isTouch) {
          this.dispatchEvent(displayObject, "touchmove", interactionEvent);
        }
        if (isMouse) {
          this.dispatchEvent(displayObject, "mousemove", interactionEvent);
        }
      }
    };
    InteractionManager2.prototype.onPointerOut = function(originalEvent) {
      if (this.supportsTouchEvents && originalEvent.pointerType === "touch") {
        return;
      }
      var events = this.normalizeToPointerData(originalEvent);
      var event = events[0];
      if (event.pointerType === "mouse") {
        this.mouseOverRenderer = false;
        this.setCursorMode(null);
      }
      var interactionData = this.getInteractionDataForPointerId(event);
      var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);
      interactionEvent.data.originalEvent = event;
      this.processInteractive(interactionEvent, this.lastObjectRendered, this.processPointerOverOut, false);
      this.emit("pointerout", interactionEvent);
      if (event.pointerType === "mouse" || event.pointerType === "pen") {
        this.emit("mouseout", interactionEvent);
      } else {
        this.releaseInteractionDataForPointerId(interactionData.identifier);
      }
    };
    InteractionManager2.prototype.processPointerOverOut = function(interactionEvent, displayObject, hit) {
      var data = interactionEvent.data;
      var id = interactionEvent.data.identifier;
      var isMouse = data.pointerType === "mouse" || data.pointerType === "pen";
      var trackingData = displayObject.trackedPointers[id];
      if (hit && !trackingData) {
        trackingData = displayObject.trackedPointers[id] = new InteractionTrackingData(id);
      }
      if (trackingData === void 0) {
        return;
      }
      if (hit && this.mouseOverRenderer) {
        if (!trackingData.over) {
          trackingData.over = true;
          this.delayDispatchEvent(displayObject, "pointerover", interactionEvent);
          if (isMouse) {
            this.delayDispatchEvent(displayObject, "mouseover", interactionEvent);
          }
        }
        if (isMouse && this.cursor === null) {
          this.cursor = displayObject.cursor;
        }
      } else if (trackingData.over) {
        trackingData.over = false;
        this.dispatchEvent(displayObject, "pointerout", this.eventData);
        if (isMouse) {
          this.dispatchEvent(displayObject, "mouseout", interactionEvent);
        }
        if (trackingData.none) {
          delete displayObject.trackedPointers[id];
        }
      }
    };
    InteractionManager2.prototype.onPointerOver = function(originalEvent) {
      var events = this.normalizeToPointerData(originalEvent);
      var event = events[0];
      var interactionData = this.getInteractionDataForPointerId(event);
      var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);
      interactionEvent.data.originalEvent = event;
      if (event.pointerType === "mouse") {
        this.mouseOverRenderer = true;
      }
      this.emit("pointerover", interactionEvent);
      if (event.pointerType === "mouse" || event.pointerType === "pen") {
        this.emit("mouseover", interactionEvent);
      }
    };
    InteractionManager2.prototype.getInteractionDataForPointerId = function(event) {
      var pointerId = event.pointerId;
      var interactionData;
      if (pointerId === MOUSE_POINTER_ID || event.pointerType === "mouse") {
        interactionData = this.mouse;
      } else if (this.activeInteractionData[pointerId]) {
        interactionData = this.activeInteractionData[pointerId];
      } else {
        interactionData = this.interactionDataPool.pop() || new InteractionData();
        interactionData.identifier = pointerId;
        this.activeInteractionData[pointerId] = interactionData;
      }
      interactionData.copyEvent(event);
      return interactionData;
    };
    InteractionManager2.prototype.releaseInteractionDataForPointerId = function(pointerId) {
      var interactionData = this.activeInteractionData[pointerId];
      if (interactionData) {
        delete this.activeInteractionData[pointerId];
        interactionData.reset();
        this.interactionDataPool.push(interactionData);
      }
    };
    InteractionManager2.prototype.configureInteractionEventForDOMEvent = function(interactionEvent, pointerEvent, interactionData) {
      interactionEvent.data = interactionData;
      this.mapPositionToPoint(interactionData.global, pointerEvent.clientX, pointerEvent.clientY);
      if (pointerEvent.pointerType === "touch") {
        pointerEvent.globalX = interactionData.global.x;
        pointerEvent.globalY = interactionData.global.y;
      }
      interactionData.originalEvent = pointerEvent;
      interactionEvent.reset();
      return interactionEvent;
    };
    InteractionManager2.prototype.normalizeToPointerData = function(event) {
      var normalizedEvents = [];
      if (this.supportsTouchEvents && event instanceof TouchEvent) {
        for (var i = 0, li = event.changedTouches.length; i < li; i++) {
          var touch = event.changedTouches[i];
          if (typeof touch.button === "undefined") {
            touch.button = event.touches.length ? 1 : 0;
          }
          if (typeof touch.buttons === "undefined") {
            touch.buttons = event.touches.length ? 1 : 0;
          }
          if (typeof touch.isPrimary === "undefined") {
            touch.isPrimary = event.touches.length === 1 && event.type === "touchstart";
          }
          if (typeof touch.width === "undefined") {
            touch.width = touch.radiusX || 1;
          }
          if (typeof touch.height === "undefined") {
            touch.height = touch.radiusY || 1;
          }
          if (typeof touch.tiltX === "undefined") {
            touch.tiltX = 0;
          }
          if (typeof touch.tiltY === "undefined") {
            touch.tiltY = 0;
          }
          if (typeof touch.pointerType === "undefined") {
            touch.pointerType = "touch";
          }
          if (typeof touch.pointerId === "undefined") {
            touch.pointerId = touch.identifier || 0;
          }
          if (typeof touch.pressure === "undefined") {
            touch.pressure = touch.force || 0.5;
          }
          if (typeof touch.twist === "undefined") {
            touch.twist = 0;
          }
          if (typeof touch.tangentialPressure === "undefined") {
            touch.tangentialPressure = 0;
          }
          if (typeof touch.layerX === "undefined") {
            touch.layerX = touch.offsetX = touch.clientX;
          }
          if (typeof touch.layerY === "undefined") {
            touch.layerY = touch.offsetY = touch.clientY;
          }
          touch.isNormalized = true;
          normalizedEvents.push(touch);
        }
      } else if (!globalThis.MouseEvent || event instanceof MouseEvent && (!this.supportsPointerEvents || !(event instanceof globalThis.PointerEvent))) {
        var tempEvent = event;
        if (typeof tempEvent.isPrimary === "undefined") {
          tempEvent.isPrimary = true;
        }
        if (typeof tempEvent.width === "undefined") {
          tempEvent.width = 1;
        }
        if (typeof tempEvent.height === "undefined") {
          tempEvent.height = 1;
        }
        if (typeof tempEvent.tiltX === "undefined") {
          tempEvent.tiltX = 0;
        }
        if (typeof tempEvent.tiltY === "undefined") {
          tempEvent.tiltY = 0;
        }
        if (typeof tempEvent.pointerType === "undefined") {
          tempEvent.pointerType = "mouse";
        }
        if (typeof tempEvent.pointerId === "undefined") {
          tempEvent.pointerId = MOUSE_POINTER_ID;
        }
        if (typeof tempEvent.pressure === "undefined") {
          tempEvent.pressure = 0.5;
        }
        if (typeof tempEvent.twist === "undefined") {
          tempEvent.twist = 0;
        }
        if (typeof tempEvent.tangentialPressure === "undefined") {
          tempEvent.tangentialPressure = 0;
        }
        tempEvent.isNormalized = true;
        normalizedEvents.push(tempEvent);
      } else {
        normalizedEvents.push(event);
      }
      return normalizedEvents;
    };
    InteractionManager2.prototype.destroy = function() {
      this.removeEvents();
      this.removeTickerListener();
      this.removeAllListeners();
      this.renderer = null;
      this.mouse = null;
      this.eventData = null;
      this.interactionDOMElement = null;
      this.onPointerDown = null;
      this.processPointerDown = null;
      this.onPointerUp = null;
      this.processPointerUp = null;
      this.onPointerCancel = null;
      this.processPointerCancel = null;
      this.onPointerMove = null;
      this.processPointerMove = null;
      this.onPointerOut = null;
      this.processPointerOverOut = null;
      this.onPointerOver = null;
      this.search = null;
    };
    InteractionManager2.extension = {
      name: "interaction",
      type: [
        ExtensionType.RendererPlugin,
        ExtensionType.CanvasRendererPlugin
      ]
    };
    return InteractionManager2;
  }(import_eventemitter3.default)
);

// node_modules/.pnpm/@pixi+extract@6.5.2_@pixi+core@6.5.2_@pixi+math@6.5.2_@pixi+utils@6.5.2/node_modules/@pixi/extract/dist/esm/extract.mjs
var TEMP_RECT = new Rectangle();
var BYTES_PER_PIXEL = 4;
var Extract = (
  /** @class */
  function() {
    function Extract2(renderer) {
      this.renderer = renderer;
    }
    Extract2.prototype.image = function(target, format, quality) {
      var image = new Image();
      image.src = this.base64(target, format, quality);
      return image;
    };
    Extract2.prototype.base64 = function(target, format, quality) {
      return this.canvas(target).toDataURL(format, quality);
    };
    Extract2.prototype.canvas = function(target, frame) {
      var renderer = this.renderer;
      var resolution;
      var flipY = false;
      var renderTexture;
      var generated = false;
      if (target) {
        if (target instanceof RenderTexture) {
          renderTexture = target;
        } else {
          renderTexture = this.renderer.generateTexture(target);
          generated = true;
        }
      }
      if (renderTexture) {
        resolution = renderTexture.baseTexture.resolution;
        frame = frame !== null && frame !== void 0 ? frame : renderTexture.frame;
        flipY = false;
        renderer.renderTexture.bind(renderTexture);
      } else {
        resolution = renderer.resolution;
        if (!frame) {
          frame = TEMP_RECT;
          frame.width = renderer.width;
          frame.height = renderer.height;
        }
        flipY = true;
        renderer.renderTexture.bind(null);
      }
      var width = Math.round(frame.width * resolution);
      var height = Math.round(frame.height * resolution);
      var canvasBuffer = new CanvasRenderTarget(width, height, 1);
      var webglPixels = new Uint8Array(BYTES_PER_PIXEL * width * height);
      var gl = renderer.gl;
      gl.readPixels(Math.round(frame.x * resolution), Math.round(frame.y * resolution), width, height, gl.RGBA, gl.UNSIGNED_BYTE, webglPixels);
      var canvasData = canvasBuffer.context.getImageData(0, 0, width, height);
      Extract2.arrayPostDivide(webglPixels, canvasData.data);
      canvasBuffer.context.putImageData(canvasData, 0, 0);
      if (flipY) {
        var target_1 = new CanvasRenderTarget(canvasBuffer.width, canvasBuffer.height, 1);
        target_1.context.scale(1, -1);
        target_1.context.drawImage(canvasBuffer.canvas, 0, -height);
        canvasBuffer.destroy();
        canvasBuffer = target_1;
      }
      if (generated) {
        renderTexture.destroy(true);
      }
      return canvasBuffer.canvas;
    };
    Extract2.prototype.pixels = function(target, frame) {
      var renderer = this.renderer;
      var resolution;
      var renderTexture;
      var generated = false;
      if (target) {
        if (target instanceof RenderTexture) {
          renderTexture = target;
        } else {
          renderTexture = this.renderer.generateTexture(target);
          generated = true;
        }
      }
      if (renderTexture) {
        resolution = renderTexture.baseTexture.resolution;
        frame = frame !== null && frame !== void 0 ? frame : renderTexture.frame;
        renderer.renderTexture.bind(renderTexture);
      } else {
        resolution = renderer.resolution;
        if (!frame) {
          frame = TEMP_RECT;
          frame.width = renderer.width;
          frame.height = renderer.height;
        }
        renderer.renderTexture.bind(null);
      }
      var width = Math.round(frame.width * resolution);
      var height = Math.round(frame.height * resolution);
      var webglPixels = new Uint8Array(BYTES_PER_PIXEL * width * height);
      var gl = renderer.gl;
      gl.readPixels(Math.round(frame.x * resolution), Math.round(frame.y * resolution), width, height, gl.RGBA, gl.UNSIGNED_BYTE, webglPixels);
      if (generated) {
        renderTexture.destroy(true);
      }
      Extract2.arrayPostDivide(webglPixels, webglPixels);
      return webglPixels;
    };
    Extract2.prototype.destroy = function() {
      this.renderer = null;
    };
    Extract2.arrayPostDivide = function(pixels, out) {
      for (var i = 0; i < pixels.length; i += 4) {
        var alpha = out[i + 3] = pixels[i + 3];
        if (alpha !== 0) {
          out[i] = Math.round(Math.min(pixels[i] * 255 / alpha, 255));
          out[i + 1] = Math.round(Math.min(pixels[i + 1] * 255 / alpha, 255));
          out[i + 2] = Math.round(Math.min(pixels[i + 2] * 255 / alpha, 255));
        } else {
          out[i] = pixels[i];
          out[i + 1] = pixels[i + 1];
          out[i + 2] = pixels[i + 2];
        }
      }
    };
    Extract2.extension = {
      name: "extract",
      type: ExtensionType.RendererPlugin
    };
    return Extract2;
  }()
);

// node_modules/.pnpm/@pixi+loaders@6.5.2_@pixi+constants@6.5.2_@pixi+core@6.5.2_@pixi+utils@6.5.2/node_modules/@pixi/loaders/dist/esm/loaders.mjs
var SignalBinding = (
  /** @class */
  function() {
    function SignalBinding2(fn, once, thisArg) {
      if (once === void 0) {
        once = false;
      }
      this._fn = fn;
      this._once = once;
      this._thisArg = thisArg;
      this._next = this._prev = this._owner = null;
    }
    SignalBinding2.prototype.detach = function() {
      if (this._owner === null) {
        return false;
      }
      this._owner.detach(this);
      return true;
    };
    return SignalBinding2;
  }()
);
function _addSignalBinding(self2, node) {
  if (!self2._head) {
    self2._head = node;
    self2._tail = node;
  } else {
    self2._tail._next = node;
    node._prev = self2._tail;
    self2._tail = node;
  }
  node._owner = self2;
  return node;
}
var Signal = (
  /** @class */
  function() {
    function Signal2() {
      this._head = this._tail = void 0;
    }
    Signal2.prototype.handlers = function(exists) {
      if (exists === void 0) {
        exists = false;
      }
      var node = this._head;
      if (exists) {
        return !!node;
      }
      var ee = [];
      while (node) {
        ee.push(node);
        node = node._next;
      }
      return ee;
    };
    Signal2.prototype.has = function(node) {
      if (!(node instanceof SignalBinding)) {
        throw new Error("MiniSignal#has(): First arg must be a SignalBinding object.");
      }
      return node._owner === this;
    };
    Signal2.prototype.dispatch = function() {
      var arguments$1 = arguments;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments$1[_i];
      }
      var node = this._head;
      if (!node) {
        return false;
      }
      while (node) {
        if (node._once) {
          this.detach(node);
        }
        node._fn.apply(node._thisArg, args);
        node = node._next;
      }
      return true;
    };
    Signal2.prototype.add = function(fn, thisArg) {
      if (thisArg === void 0) {
        thisArg = null;
      }
      if (typeof fn !== "function") {
        throw new Error("MiniSignal#add(): First arg must be a Function.");
      }
      return _addSignalBinding(this, new SignalBinding(fn, false, thisArg));
    };
    Signal2.prototype.once = function(fn, thisArg) {
      if (thisArg === void 0) {
        thisArg = null;
      }
      if (typeof fn !== "function") {
        throw new Error("MiniSignal#once(): First arg must be a Function.");
      }
      return _addSignalBinding(this, new SignalBinding(fn, true, thisArg));
    };
    Signal2.prototype.detach = function(node) {
      if (!(node instanceof SignalBinding)) {
        throw new Error("MiniSignal#detach(): First arg must be a SignalBinding object.");
      }
      if (node._owner !== this) {
        return this;
      }
      if (node._prev) {
        node._prev._next = node._next;
      }
      if (node._next) {
        node._next._prev = node._prev;
      }
      if (node === this._head) {
        this._head = node._next;
        if (node._next === null) {
          this._tail = null;
        }
      } else if (node === this._tail) {
        this._tail = node._prev;
        this._tail._next = null;
      }
      node._owner = null;
      return this;
    };
    Signal2.prototype.detachAll = function() {
      var node = this._head;
      if (!node) {
        return this;
      }
      this._head = this._tail = null;
      while (node) {
        node._owner = null;
        node = node._next;
      }
      return this;
    };
    return Signal2;
  }()
);
function parseUri(str, opts) {
  opts = opts || {};
  var o = {
    // eslint-disable-next-line max-len
    key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
    q: {
      name: "queryKey",
      parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
      // eslint-disable-next-line max-len
      strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
      // eslint-disable-next-line max-len
      loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
  };
  var m = o.parser[opts.strictMode ? "strict" : "loose"].exec(str);
  var uri = {};
  var i = 14;
  while (i--) {
    uri[o.key[i]] = m[i] || "";
  }
  uri[o.q.name] = {};
  uri[o.key[12]].replace(o.q.parser, function(_t0, t1, t2) {
    if (t1) {
      uri[o.q.name][t1] = t2;
    }
  });
  return uri;
}
var useXdr;
var tempAnchor = null;
var STATUS_NONE = 0;
var STATUS_OK = 200;
var STATUS_EMPTY = 204;
var STATUS_IE_BUG_EMPTY = 1223;
var STATUS_TYPE_OK = 2;
function _noop$1() {
}
function setExtMap(map, extname, val) {
  if (extname && extname.indexOf(".") === 0) {
    extname = extname.substring(1);
  }
  if (!extname) {
    return;
  }
  map[extname] = val;
}
function reqType(xhr) {
  return xhr.toString().replace("object ", "");
}
var LoaderResource = (
  /** @class */
  function() {
    function LoaderResource2(name, url2, options) {
      this._dequeue = _noop$1;
      this._onLoadBinding = null;
      this._elementTimer = 0;
      this._boundComplete = null;
      this._boundOnError = null;
      this._boundOnProgress = null;
      this._boundOnTimeout = null;
      this._boundXhrOnError = null;
      this._boundXhrOnTimeout = null;
      this._boundXhrOnAbort = null;
      this._boundXhrOnLoad = null;
      if (typeof name !== "string" || typeof url2 !== "string") {
        throw new Error("Both name and url are required for constructing a resource.");
      }
      options = options || {};
      this._flags = 0;
      this._setFlag(LoaderResource2.STATUS_FLAGS.DATA_URL, url2.indexOf("data:") === 0);
      this.name = name;
      this.url = url2;
      this.extension = this._getExtension();
      this.data = null;
      this.crossOrigin = options.crossOrigin === true ? "anonymous" : options.crossOrigin;
      this.timeout = options.timeout || 0;
      this.loadType = options.loadType || this._determineLoadType();
      this.xhrType = options.xhrType;
      this.metadata = options.metadata || {};
      this.error = null;
      this.xhr = null;
      this.children = [];
      this.type = LoaderResource2.TYPE.UNKNOWN;
      this.progressChunk = 0;
      this._dequeue = _noop$1;
      this._onLoadBinding = null;
      this._elementTimer = 0;
      this._boundComplete = this.complete.bind(this);
      this._boundOnError = this._onError.bind(this);
      this._boundOnProgress = this._onProgress.bind(this);
      this._boundOnTimeout = this._onTimeout.bind(this);
      this._boundXhrOnError = this._xhrOnError.bind(this);
      this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this);
      this._boundXhrOnAbort = this._xhrOnAbort.bind(this);
      this._boundXhrOnLoad = this._xhrOnLoad.bind(this);
      this.onStart = new Signal();
      this.onProgress = new Signal();
      this.onComplete = new Signal();
      this.onAfterMiddleware = new Signal();
    }
    LoaderResource2.setExtensionLoadType = function(extname, loadType) {
      setExtMap(LoaderResource2._loadTypeMap, extname, loadType);
    };
    LoaderResource2.setExtensionXhrType = function(extname, xhrType) {
      setExtMap(LoaderResource2._xhrTypeMap, extname, xhrType);
    };
    Object.defineProperty(LoaderResource2.prototype, "isDataUrl", {
      /**
       * When the resource starts to load.
       * @memberof PIXI.LoaderResource
       * @callback OnStartSignal
       * @param {PIXI.Resource} resource - The resource that the event happened on.
       */
      /**
       * When the resource reports loading progress.
       * @memberof PIXI.LoaderResource
       * @callback OnProgressSignal
       * @param {PIXI.Resource} resource - The resource that the event happened on.
       * @param {number} percentage - The progress of the load in the range [0, 1].
       */
      /**
       * When the resource finishes loading.
       * @memberof PIXI.LoaderResource
       * @callback OnCompleteSignal
       * @param {PIXI.Resource} resource - The resource that the event happened on.
       */
      /**
       * @memberof PIXI.LoaderResource
       * @typedef {object} IMetadata
       * @property {HTMLImageElement|HTMLAudioElement|HTMLVideoElement} [loadElement=null] - The
       *      element to use for loading, instead of creating one.
       * @property {boolean} [skipSource=false] - Skips adding source(s) to the load element. This
       *      is useful if you want to pass in a `loadElement` that you already added load sources to.
       * @property {string|string[]} [mimeType] - The mime type to use for the source element
       *      of a video/audio elment. If the urls are an array, you can pass this as an array as well
       *      where each index is the mime type to use for the corresponding url index.
       */
      /**
       * Stores whether or not this url is a data url.
       * @readonly
       * @member {boolean}
       */
      get: function() {
        return this._hasFlag(LoaderResource2.STATUS_FLAGS.DATA_URL);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(LoaderResource2.prototype, "isComplete", {
      /**
       * Describes if this resource has finished loading. Is true when the resource has completely
       * loaded.
       * @readonly
       * @member {boolean}
       */
      get: function() {
        return this._hasFlag(LoaderResource2.STATUS_FLAGS.COMPLETE);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(LoaderResource2.prototype, "isLoading", {
      /**
       * Describes if this resource is currently loading. Is true when the resource starts loading,
       * and is false again when complete.
       * @readonly
       * @member {boolean}
       */
      get: function() {
        return this._hasFlag(LoaderResource2.STATUS_FLAGS.LOADING);
      },
      enumerable: false,
      configurable: true
    });
    LoaderResource2.prototype.complete = function() {
      this._clearEvents();
      this._finish();
    };
    LoaderResource2.prototype.abort = function(message) {
      if (this.error) {
        return;
      }
      this.error = new Error(message);
      this._clearEvents();
      if (this.xhr) {
        this.xhr.abort();
      } else if (this.xdr) {
        this.xdr.abort();
      } else if (this.data) {
        if (this.data.src) {
          this.data.src = LoaderResource2.EMPTY_GIF;
        } else {
          while (this.data.firstChild) {
            this.data.removeChild(this.data.firstChild);
          }
        }
      }
      this._finish();
    };
    LoaderResource2.prototype.load = function(cb) {
      var _this = this;
      if (this.isLoading) {
        return;
      }
      if (this.isComplete) {
        if (cb) {
          setTimeout(function() {
            return cb(_this);
          }, 1);
        }
        return;
      } else if (cb) {
        this.onComplete.once(cb);
      }
      this._setFlag(LoaderResource2.STATUS_FLAGS.LOADING, true);
      this.onStart.dispatch(this);
      if (this.crossOrigin === false || typeof this.crossOrigin !== "string") {
        this.crossOrigin = this._determineCrossOrigin(this.url);
      }
      switch (this.loadType) {
        case LoaderResource2.LOAD_TYPE.IMAGE:
          this.type = LoaderResource2.TYPE.IMAGE;
          this._loadElement("image");
          break;
        case LoaderResource2.LOAD_TYPE.AUDIO:
          this.type = LoaderResource2.TYPE.AUDIO;
          this._loadSourceElement("audio");
          break;
        case LoaderResource2.LOAD_TYPE.VIDEO:
          this.type = LoaderResource2.TYPE.VIDEO;
          this._loadSourceElement("video");
          break;
        case LoaderResource2.LOAD_TYPE.XHR:
        default:
          if (typeof useXdr === "undefined") {
            useXdr = !!(globalThis.XDomainRequest && !("withCredentials" in new XMLHttpRequest()));
          }
          if (useXdr && this.crossOrigin) {
            this._loadXdr();
          } else {
            this._loadXhr();
          }
          break;
      }
    };
    LoaderResource2.prototype._hasFlag = function(flag) {
      return (this._flags & flag) !== 0;
    };
    LoaderResource2.prototype._setFlag = function(flag, value) {
      this._flags = value ? this._flags | flag : this._flags & ~flag;
    };
    LoaderResource2.prototype._clearEvents = function() {
      clearTimeout(this._elementTimer);
      if (this.data && this.data.removeEventListener) {
        this.data.removeEventListener("error", this._boundOnError, false);
        this.data.removeEventListener("load", this._boundComplete, false);
        this.data.removeEventListener("progress", this._boundOnProgress, false);
        this.data.removeEventListener("canplaythrough", this._boundComplete, false);
      }
      if (this.xhr) {
        if (this.xhr.removeEventListener) {
          this.xhr.removeEventListener("error", this._boundXhrOnError, false);
          this.xhr.removeEventListener("timeout", this._boundXhrOnTimeout, false);
          this.xhr.removeEventListener("abort", this._boundXhrOnAbort, false);
          this.xhr.removeEventListener("progress", this._boundOnProgress, false);
          this.xhr.removeEventListener("load", this._boundXhrOnLoad, false);
        } else {
          this.xhr.onerror = null;
          this.xhr.ontimeout = null;
          this.xhr.onprogress = null;
          this.xhr.onload = null;
        }
      }
    };
    LoaderResource2.prototype._finish = function() {
      if (this.isComplete) {
        throw new Error("Complete called again for an already completed resource.");
      }
      this._setFlag(LoaderResource2.STATUS_FLAGS.COMPLETE, true);
      this._setFlag(LoaderResource2.STATUS_FLAGS.LOADING, false);
      this.onComplete.dispatch(this);
    };
    LoaderResource2.prototype._loadElement = function(type) {
      if (this.metadata.loadElement) {
        this.data = this.metadata.loadElement;
      } else if (type === "image" && typeof globalThis.Image !== "undefined") {
        this.data = new Image();
      } else {
        this.data = document.createElement(type);
      }
      if (this.crossOrigin) {
        this.data.crossOrigin = this.crossOrigin;
      }
      if (!this.metadata.skipSource) {
        this.data.src = this.url;
      }
      this.data.addEventListener("error", this._boundOnError, false);
      this.data.addEventListener("load", this._boundComplete, false);
      this.data.addEventListener("progress", this._boundOnProgress, false);
      if (this.timeout) {
        this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout);
      }
    };
    LoaderResource2.prototype._loadSourceElement = function(type) {
      if (this.metadata.loadElement) {
        this.data = this.metadata.loadElement;
      } else if (type === "audio" && typeof globalThis.Audio !== "undefined") {
        this.data = new Audio();
      } else {
        this.data = document.createElement(type);
      }
      if (this.data === null) {
        this.abort("Unsupported element: " + type);
        return;
      }
      if (this.crossOrigin) {
        this.data.crossOrigin = this.crossOrigin;
      }
      if (!this.metadata.skipSource) {
        if (navigator.isCocoonJS) {
          this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
        } else if (Array.isArray(this.url)) {
          var mimeTypes = this.metadata.mimeType;
          for (var i = 0; i < this.url.length; ++i) {
            this.data.appendChild(this._createSource(type, this.url[i], Array.isArray(mimeTypes) ? mimeTypes[i] : mimeTypes));
          }
        } else {
          var mimeTypes = this.metadata.mimeType;
          this.data.appendChild(this._createSource(type, this.url, Array.isArray(mimeTypes) ? mimeTypes[0] : mimeTypes));
        }
      }
      this.data.addEventListener("error", this._boundOnError, false);
      this.data.addEventListener("load", this._boundComplete, false);
      this.data.addEventListener("progress", this._boundOnProgress, false);
      this.data.addEventListener("canplaythrough", this._boundComplete, false);
      this.data.load();
      if (this.timeout) {
        this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout);
      }
    };
    LoaderResource2.prototype._loadXhr = function() {
      if (typeof this.xhrType !== "string") {
        this.xhrType = this._determineXhrType();
      }
      var xhr = this.xhr = new XMLHttpRequest();
      if (this.crossOrigin === "use-credentials") {
        xhr.withCredentials = true;
      }
      xhr.open("GET", this.url, true);
      xhr.timeout = this.timeout;
      if (this.xhrType === LoaderResource2.XHR_RESPONSE_TYPE.JSON || this.xhrType === LoaderResource2.XHR_RESPONSE_TYPE.DOCUMENT) {
        xhr.responseType = LoaderResource2.XHR_RESPONSE_TYPE.TEXT;
      } else {
        xhr.responseType = this.xhrType;
      }
      xhr.addEventListener("error", this._boundXhrOnError, false);
      xhr.addEventListener("timeout", this._boundXhrOnTimeout, false);
      xhr.addEventListener("abort", this._boundXhrOnAbort, false);
      xhr.addEventListener("progress", this._boundOnProgress, false);
      xhr.addEventListener("load", this._boundXhrOnLoad, false);
      xhr.send();
    };
    LoaderResource2.prototype._loadXdr = function() {
      if (typeof this.xhrType !== "string") {
        this.xhrType = this._determineXhrType();
      }
      var xdr = this.xhr = new globalThis.XDomainRequest();
      xdr.timeout = this.timeout || 5e3;
      xdr.onerror = this._boundXhrOnError;
      xdr.ontimeout = this._boundXhrOnTimeout;
      xdr.onprogress = this._boundOnProgress;
      xdr.onload = this._boundXhrOnLoad;
      xdr.open("GET", this.url, true);
      setTimeout(function() {
        return xdr.send();
      }, 1);
    };
    LoaderResource2.prototype._createSource = function(type, url2, mime) {
      if (!mime) {
        mime = type + "/" + this._getExtension(url2);
      }
      var source = document.createElement("source");
      source.src = url2;
      source.type = mime;
      return source;
    };
    LoaderResource2.prototype._onError = function(event) {
      this.abort("Failed to load element using: " + event.target.nodeName);
    };
    LoaderResource2.prototype._onProgress = function(event) {
      if (event && event.lengthComputable) {
        this.onProgress.dispatch(this, event.loaded / event.total);
      }
    };
    LoaderResource2.prototype._onTimeout = function() {
      this.abort("Load timed out.");
    };
    LoaderResource2.prototype._xhrOnError = function() {
      var xhr = this.xhr;
      this.abort(reqType(xhr) + " Request failed. Status: " + xhr.status + ', text: "' + xhr.statusText + '"');
    };
    LoaderResource2.prototype._xhrOnTimeout = function() {
      var xhr = this.xhr;
      this.abort(reqType(xhr) + " Request timed out.");
    };
    LoaderResource2.prototype._xhrOnAbort = function() {
      var xhr = this.xhr;
      this.abort(reqType(xhr) + " Request was aborted by the user.");
    };
    LoaderResource2.prototype._xhrOnLoad = function() {
      var xhr = this.xhr;
      var text = "";
      var status = typeof xhr.status === "undefined" ? STATUS_OK : xhr.status;
      if (xhr.responseType === "" || xhr.responseType === "text" || typeof xhr.responseType === "undefined") {
        text = xhr.responseText;
      }
      if (status === STATUS_NONE && (text.length > 0 || xhr.responseType === LoaderResource2.XHR_RESPONSE_TYPE.BUFFER)) {
        status = STATUS_OK;
      } else if (status === STATUS_IE_BUG_EMPTY) {
        status = STATUS_EMPTY;
      }
      var statusType = status / 100 | 0;
      if (statusType === STATUS_TYPE_OK) {
        if (this.xhrType === LoaderResource2.XHR_RESPONSE_TYPE.TEXT) {
          this.data = text;
          this.type = LoaderResource2.TYPE.TEXT;
        } else if (this.xhrType === LoaderResource2.XHR_RESPONSE_TYPE.JSON) {
          try {
            this.data = JSON.parse(text);
            this.type = LoaderResource2.TYPE.JSON;
          } catch (e) {
            this.abort("Error trying to parse loaded json: " + e);
            return;
          }
        } else if (this.xhrType === LoaderResource2.XHR_RESPONSE_TYPE.DOCUMENT) {
          try {
            if (globalThis.DOMParser) {
              var domparser = new DOMParser();
              this.data = domparser.parseFromString(text, "text/xml");
            } else {
              var div = document.createElement("div");
              div.innerHTML = text;
              this.data = div;
            }
            this.type = LoaderResource2.TYPE.XML;
          } catch (e$1) {
            this.abort("Error trying to parse loaded xml: " + e$1);
            return;
          }
        } else {
          this.data = xhr.response || text;
        }
      } else {
        this.abort("[" + xhr.status + "] " + xhr.statusText + ": " + xhr.responseURL);
        return;
      }
      this.complete();
    };
    LoaderResource2.prototype._determineCrossOrigin = function(url2, loc) {
      if (url2.indexOf("data:") === 0) {
        return "";
      }
      if (globalThis.origin !== globalThis.location.origin) {
        return "anonymous";
      }
      loc = loc || globalThis.location;
      if (!tempAnchor) {
        tempAnchor = document.createElement("a");
      }
      tempAnchor.href = url2;
      var parsedUrl = parseUri(tempAnchor.href, { strictMode: true });
      var samePort = !parsedUrl.port && loc.port === "" || parsedUrl.port === loc.port;
      var protocol = parsedUrl.protocol ? parsedUrl.protocol + ":" : "";
      if (parsedUrl.host !== loc.hostname || !samePort || protocol !== loc.protocol) {
        return "anonymous";
      }
      return "";
    };
    LoaderResource2.prototype._determineXhrType = function() {
      return LoaderResource2._xhrTypeMap[this.extension] || LoaderResource2.XHR_RESPONSE_TYPE.TEXT;
    };
    LoaderResource2.prototype._determineLoadType = function() {
      return LoaderResource2._loadTypeMap[this.extension] || LoaderResource2.LOAD_TYPE.XHR;
    };
    LoaderResource2.prototype._getExtension = function(url2) {
      if (url2 === void 0) {
        url2 = this.url;
      }
      var ext = "";
      if (this.isDataUrl) {
        var slashIndex = url2.indexOf("/");
        ext = url2.substring(slashIndex + 1, url2.indexOf(";", slashIndex));
      } else {
        var queryStart = url2.indexOf("?");
        var hashStart = url2.indexOf("#");
        var index = Math.min(queryStart > -1 ? queryStart : url2.length, hashStart > -1 ? hashStart : url2.length);
        url2 = url2.substring(0, index);
        ext = url2.substring(url2.lastIndexOf(".") + 1);
      }
      return ext.toLowerCase();
    };
    LoaderResource2.prototype._getMimeFromXhrType = function(type) {
      switch (type) {
        case LoaderResource2.XHR_RESPONSE_TYPE.BUFFER:
          return "application/octet-binary";
        case LoaderResource2.XHR_RESPONSE_TYPE.BLOB:
          return "application/blob";
        case LoaderResource2.XHR_RESPONSE_TYPE.DOCUMENT:
          return "application/xml";
        case LoaderResource2.XHR_RESPONSE_TYPE.JSON:
          return "application/json";
        case LoaderResource2.XHR_RESPONSE_TYPE.DEFAULT:
        case LoaderResource2.XHR_RESPONSE_TYPE.TEXT:
        default:
          return "text/plain";
      }
    };
    return LoaderResource2;
  }()
);
(function(LoaderResource2) {
  (function(STATUS_FLAGS) {
    STATUS_FLAGS[STATUS_FLAGS["NONE"] = 0] = "NONE";
    STATUS_FLAGS[STATUS_FLAGS["DATA_URL"] = 1] = "DATA_URL";
    STATUS_FLAGS[STATUS_FLAGS["COMPLETE"] = 2] = "COMPLETE";
    STATUS_FLAGS[STATUS_FLAGS["LOADING"] = 4] = "LOADING";
  })(LoaderResource2.STATUS_FLAGS || (LoaderResource2.STATUS_FLAGS = {}));
  (function(TYPE) {
    TYPE[TYPE["UNKNOWN"] = 0] = "UNKNOWN";
    TYPE[TYPE["JSON"] = 1] = "JSON";
    TYPE[TYPE["XML"] = 2] = "XML";
    TYPE[TYPE["IMAGE"] = 3] = "IMAGE";
    TYPE[TYPE["AUDIO"] = 4] = "AUDIO";
    TYPE[TYPE["VIDEO"] = 5] = "VIDEO";
    TYPE[TYPE["TEXT"] = 6] = "TEXT";
  })(LoaderResource2.TYPE || (LoaderResource2.TYPE = {}));
  (function(LOAD_TYPE) {
    LOAD_TYPE[LOAD_TYPE["XHR"] = 1] = "XHR";
    LOAD_TYPE[LOAD_TYPE["IMAGE"] = 2] = "IMAGE";
    LOAD_TYPE[LOAD_TYPE["AUDIO"] = 3] = "AUDIO";
    LOAD_TYPE[LOAD_TYPE["VIDEO"] = 4] = "VIDEO";
  })(LoaderResource2.LOAD_TYPE || (LoaderResource2.LOAD_TYPE = {}));
  (function(XHR_RESPONSE_TYPE) {
    XHR_RESPONSE_TYPE["DEFAULT"] = "text";
    XHR_RESPONSE_TYPE["BUFFER"] = "arraybuffer";
    XHR_RESPONSE_TYPE["BLOB"] = "blob";
    XHR_RESPONSE_TYPE["DOCUMENT"] = "document";
    XHR_RESPONSE_TYPE["JSON"] = "json";
    XHR_RESPONSE_TYPE["TEXT"] = "text";
  })(LoaderResource2.XHR_RESPONSE_TYPE || (LoaderResource2.XHR_RESPONSE_TYPE = {}));
  LoaderResource2._loadTypeMap = {
    // images
    gif: LoaderResource2.LOAD_TYPE.IMAGE,
    png: LoaderResource2.LOAD_TYPE.IMAGE,
    bmp: LoaderResource2.LOAD_TYPE.IMAGE,
    jpg: LoaderResource2.LOAD_TYPE.IMAGE,
    jpeg: LoaderResource2.LOAD_TYPE.IMAGE,
    tif: LoaderResource2.LOAD_TYPE.IMAGE,
    tiff: LoaderResource2.LOAD_TYPE.IMAGE,
    webp: LoaderResource2.LOAD_TYPE.IMAGE,
    tga: LoaderResource2.LOAD_TYPE.IMAGE,
    svg: LoaderResource2.LOAD_TYPE.IMAGE,
    "svg+xml": LoaderResource2.LOAD_TYPE.IMAGE,
    // audio
    mp3: LoaderResource2.LOAD_TYPE.AUDIO,
    ogg: LoaderResource2.LOAD_TYPE.AUDIO,
    wav: LoaderResource2.LOAD_TYPE.AUDIO,
    // videos
    mp4: LoaderResource2.LOAD_TYPE.VIDEO,
    webm: LoaderResource2.LOAD_TYPE.VIDEO
  };
  LoaderResource2._xhrTypeMap = {
    // xml
    xhtml: LoaderResource2.XHR_RESPONSE_TYPE.DOCUMENT,
    html: LoaderResource2.XHR_RESPONSE_TYPE.DOCUMENT,
    htm: LoaderResource2.XHR_RESPONSE_TYPE.DOCUMENT,
    xml: LoaderResource2.XHR_RESPONSE_TYPE.DOCUMENT,
    tmx: LoaderResource2.XHR_RESPONSE_TYPE.DOCUMENT,
    svg: LoaderResource2.XHR_RESPONSE_TYPE.DOCUMENT,
    // This was added to handle Tiled Tileset XML, but .tsx is also a TypeScript React Component.
    // Since it is way less likely for people to be loading TypeScript files instead of Tiled files,
    // this should probably be fine.
    tsx: LoaderResource2.XHR_RESPONSE_TYPE.DOCUMENT,
    // images
    gif: LoaderResource2.XHR_RESPONSE_TYPE.BLOB,
    png: LoaderResource2.XHR_RESPONSE_TYPE.BLOB,
    bmp: LoaderResource2.XHR_RESPONSE_TYPE.BLOB,
    jpg: LoaderResource2.XHR_RESPONSE_TYPE.BLOB,
    jpeg: LoaderResource2.XHR_RESPONSE_TYPE.BLOB,
    tif: LoaderResource2.XHR_RESPONSE_TYPE.BLOB,
    tiff: LoaderResource2.XHR_RESPONSE_TYPE.BLOB,
    webp: LoaderResource2.XHR_RESPONSE_TYPE.BLOB,
    tga: LoaderResource2.XHR_RESPONSE_TYPE.BLOB,
    // json
    json: LoaderResource2.XHR_RESPONSE_TYPE.JSON,
    // text
    text: LoaderResource2.XHR_RESPONSE_TYPE.TEXT,
    txt: LoaderResource2.XHR_RESPONSE_TYPE.TEXT,
    // fonts
    ttf: LoaderResource2.XHR_RESPONSE_TYPE.BUFFER,
    otf: LoaderResource2.XHR_RESPONSE_TYPE.BUFFER
  };
  LoaderResource2.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
})(LoaderResource || (LoaderResource = {}));
function _noop() {
}
function onlyOnce(fn) {
  return function onceWrapper() {
    var arguments$1 = arguments;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments$1[_i];
    }
    if (fn === null) {
      throw new Error("Callback was already called.");
    }
    var callFn = fn;
    fn = null;
    callFn.apply(this, args);
  };
}
var AsyncQueueItem = (
  /** @class */
  /* @__PURE__ */ function() {
    function AsyncQueueItem2(data, callback) {
      this.data = data;
      this.callback = callback;
    }
    return AsyncQueueItem2;
  }()
);
var AsyncQueue = (
  /** @class */
  function() {
    function AsyncQueue2(worker, concurrency) {
      var _this = this;
      if (concurrency === void 0) {
        concurrency = 1;
      }
      this.workers = 0;
      this.saturated = _noop;
      this.unsaturated = _noop;
      this.empty = _noop;
      this.drain = _noop;
      this.error = _noop;
      this.started = false;
      this.paused = false;
      this._tasks = [];
      this._insert = function(data, insertAtFront, callback) {
        if (callback && typeof callback !== "function") {
          throw new Error("task callback must be a function");
        }
        _this.started = true;
        if (data == null && _this.idle()) {
          setTimeout(function() {
            return _this.drain();
          }, 1);
          return;
        }
        var item = new AsyncQueueItem(data, typeof callback === "function" ? callback : _noop);
        if (insertAtFront) {
          _this._tasks.unshift(item);
        } else {
          _this._tasks.push(item);
        }
        setTimeout(_this.process, 1);
      };
      this.process = function() {
        while (!_this.paused && _this.workers < _this.concurrency && _this._tasks.length) {
          var task = _this._tasks.shift();
          if (_this._tasks.length === 0) {
            _this.empty();
          }
          _this.workers += 1;
          if (_this.workers === _this.concurrency) {
            _this.saturated();
          }
          _this._worker(task.data, onlyOnce(_this._next(task)));
        }
      };
      this._worker = worker;
      if (concurrency === 0) {
        throw new Error("Concurrency must not be zero");
      }
      this.concurrency = concurrency;
      this.buffer = concurrency / 4;
    }
    AsyncQueue2.prototype._next = function(task) {
      var _this = this;
      return function() {
        var arguments$1 = arguments;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments$1[_i];
        }
        _this.workers -= 1;
        task.callback.apply(task, args);
        if (args[0] != null) {
          _this.error(args[0], task.data);
        }
        if (_this.workers <= _this.concurrency - _this.buffer) {
          _this.unsaturated();
        }
        if (_this.idle()) {
          _this.drain();
        }
        _this.process();
      };
    };
    AsyncQueue2.prototype.push = function(data, callback) {
      this._insert(data, false, callback);
    };
    AsyncQueue2.prototype.kill = function() {
      this.workers = 0;
      this.drain = _noop;
      this.started = false;
      this._tasks = [];
    };
    AsyncQueue2.prototype.unshift = function(data, callback) {
      this._insert(data, true, callback);
    };
    AsyncQueue2.prototype.length = function() {
      return this._tasks.length;
    };
    AsyncQueue2.prototype.running = function() {
      return this.workers;
    };
    AsyncQueue2.prototype.idle = function() {
      return this._tasks.length + this.workers === 0;
    };
    AsyncQueue2.prototype.pause = function() {
      if (this.paused === true) {
        return;
      }
      this.paused = true;
    };
    AsyncQueue2.prototype.resume = function() {
      if (this.paused === false) {
        return;
      }
      this.paused = false;
      for (var w = 1; w <= this.concurrency; w++) {
        this.process();
      }
    };
    AsyncQueue2.eachSeries = function(array, iterator, callback, deferNext) {
      var i = 0;
      var len = array.length;
      function next(err) {
        if (err || i === len) {
          if (callback) {
            callback(err);
          }
          return;
        }
        if (deferNext) {
          setTimeout(function() {
            iterator(array[i++], next);
          }, 1);
        } else {
          iterator(array[i++], next);
        }
      }
      next();
    };
    AsyncQueue2.queue = function(worker, concurrency) {
      return new AsyncQueue2(worker, concurrency);
    };
    return AsyncQueue2;
  }()
);
var MAX_PROGRESS = 100;
var rgxExtractUrlHash = /(#[\w-]+)?$/;
var Loader = (
  /** @class */
  function() {
    function Loader2(baseUrl, concurrency) {
      var _this = this;
      if (baseUrl === void 0) {
        baseUrl = "";
      }
      if (concurrency === void 0) {
        concurrency = 10;
      }
      this.progress = 0;
      this.loading = false;
      this.defaultQueryString = "";
      this._beforeMiddleware = [];
      this._afterMiddleware = [];
      this._resourcesParsing = [];
      this._boundLoadResource = function(r, d) {
        return _this._loadResource(r, d);
      };
      this.resources = {};
      this.baseUrl = baseUrl;
      this._beforeMiddleware = [];
      this._afterMiddleware = [];
      this._resourcesParsing = [];
      this._boundLoadResource = function(r, d) {
        return _this._loadResource(r, d);
      };
      this._queue = AsyncQueue.queue(this._boundLoadResource, concurrency);
      this._queue.pause();
      this.resources = {};
      this.onProgress = new Signal();
      this.onError = new Signal();
      this.onLoad = new Signal();
      this.onStart = new Signal();
      this.onComplete = new Signal();
      for (var i = 0; i < Loader2._plugins.length; ++i) {
        var plugin = Loader2._plugins[i];
        var pre = plugin.pre, use = plugin.use;
        if (pre) {
          this.pre(pre);
        }
        if (use) {
          this.use(use);
        }
      }
      this._protected = false;
    }
    Loader2.prototype._add = function(name, url2, options, callback) {
      if (this.loading && (!options || !options.parentResource)) {
        throw new Error("Cannot add resources while the loader is running.");
      }
      if (this.resources[name]) {
        throw new Error('Resource named "' + name + '" already exists.');
      }
      url2 = this._prepareUrl(url2);
      this.resources[name] = new LoaderResource(name, url2, options);
      if (typeof callback === "function") {
        this.resources[name].onAfterMiddleware.once(callback);
      }
      if (this.loading) {
        var parent = options.parentResource;
        var incompleteChildren = [];
        for (var i = 0; i < parent.children.length; ++i) {
          if (!parent.children[i].isComplete) {
            incompleteChildren.push(parent.children[i]);
          }
        }
        var fullChunk = parent.progressChunk * (incompleteChildren.length + 1);
        var eachChunk = fullChunk / (incompleteChildren.length + 2);
        parent.children.push(this.resources[name]);
        parent.progressChunk = eachChunk;
        for (var i = 0; i < incompleteChildren.length; ++i) {
          incompleteChildren[i].progressChunk = eachChunk;
        }
        this.resources[name].progressChunk = eachChunk;
      }
      this._queue.push(this.resources[name]);
      return this;
    };
    Loader2.prototype.pre = function(fn) {
      this._beforeMiddleware.push(fn);
      return this;
    };
    Loader2.prototype.use = function(fn) {
      this._afterMiddleware.push(fn);
      return this;
    };
    Loader2.prototype.reset = function() {
      this.progress = 0;
      this.loading = false;
      this._queue.kill();
      this._queue.pause();
      for (var k in this.resources) {
        var res = this.resources[k];
        if (res._onLoadBinding) {
          res._onLoadBinding.detach();
        }
        if (res.isLoading) {
          res.abort("loader reset");
        }
      }
      this.resources = {};
      return this;
    };
    Loader2.prototype.load = function(cb) {
      deprecation("6.5.0", "@pixi/loaders is being replaced with @pixi/assets in the next major release.");
      if (typeof cb === "function") {
        this.onComplete.once(cb);
      }
      if (this.loading) {
        return this;
      }
      if (this._queue.idle()) {
        this._onStart();
        this._onComplete();
      } else {
        var numTasks = this._queue._tasks.length;
        var chunk = MAX_PROGRESS / numTasks;
        for (var i = 0; i < this._queue._tasks.length; ++i) {
          this._queue._tasks[i].data.progressChunk = chunk;
        }
        this._onStart();
        this._queue.resume();
      }
      return this;
    };
    Object.defineProperty(Loader2.prototype, "concurrency", {
      /**
       * The number of resources to load concurrently.
       * @default 10
       */
      get: function() {
        return this._queue.concurrency;
      },
      set: function(concurrency) {
        this._queue.concurrency = concurrency;
      },
      enumerable: false,
      configurable: true
    });
    Loader2.prototype._prepareUrl = function(url2) {
      var parsedUrl = parseUri(url2, { strictMode: true });
      var result;
      if (parsedUrl.protocol || !parsedUrl.path || url2.indexOf("//") === 0) {
        result = url2;
      } else if (this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && url2.charAt(0) !== "/") {
        result = this.baseUrl + "/" + url2;
      } else {
        result = this.baseUrl + url2;
      }
      if (this.defaultQueryString) {
        var hash = rgxExtractUrlHash.exec(result)[0];
        result = result.slice(0, result.length - hash.length);
        if (result.indexOf("?") !== -1) {
          result += "&" + this.defaultQueryString;
        } else {
          result += "?" + this.defaultQueryString;
        }
        result += hash;
      }
      return result;
    };
    Loader2.prototype._loadResource = function(resource, dequeue) {
      var _this = this;
      resource._dequeue = dequeue;
      AsyncQueue.eachSeries(this._beforeMiddleware, function(fn, next) {
        fn.call(_this, resource, function() {
          next(resource.isComplete ? {} : null);
        });
      }, function() {
        if (resource.isComplete) {
          _this._onLoad(resource);
        } else {
          resource._onLoadBinding = resource.onComplete.once(_this._onLoad, _this);
          resource.load();
        }
      }, true);
    };
    Loader2.prototype._onStart = function() {
      this.progress = 0;
      this.loading = true;
      this.onStart.dispatch(this);
    };
    Loader2.prototype._onComplete = function() {
      this.progress = MAX_PROGRESS;
      this.loading = false;
      this.onComplete.dispatch(this, this.resources);
    };
    Loader2.prototype._onLoad = function(resource) {
      var _this = this;
      resource._onLoadBinding = null;
      this._resourcesParsing.push(resource);
      resource._dequeue();
      AsyncQueue.eachSeries(this._afterMiddleware, function(fn, next) {
        fn.call(_this, resource, next);
      }, function() {
        resource.onAfterMiddleware.dispatch(resource);
        _this.progress = Math.min(MAX_PROGRESS, _this.progress + resource.progressChunk);
        _this.onProgress.dispatch(_this, resource);
        if (resource.error) {
          _this.onError.dispatch(resource.error, _this, resource);
        } else {
          _this.onLoad.dispatch(_this, resource);
        }
        _this._resourcesParsing.splice(_this._resourcesParsing.indexOf(resource), 1);
        if (_this._queue.idle() && _this._resourcesParsing.length === 0) {
          _this._onComplete();
        }
      }, true);
    };
    Loader2.prototype.destroy = function() {
      if (!this._protected) {
        this.reset();
      }
    };
    Object.defineProperty(Loader2, "shared", {
      /** A premade instance of the loader that can be used to load resources. */
      get: function() {
        var shared = Loader2._shared;
        if (!shared) {
          shared = new Loader2();
          shared._protected = true;
          Loader2._shared = shared;
        }
        return shared;
      },
      enumerable: false,
      configurable: true
    });
    Loader2.registerPlugin = function(plugin) {
      deprecation("6.5.0", "Loader.registerPlugin() is deprecated, use extensions.add() instead.");
      extensions.add({
        type: ExtensionType.Loader,
        ref: plugin
      });
      return Loader2;
    };
    Loader2._plugins = [];
    return Loader2;
  }()
);
extensions.handleByList(ExtensionType.Loader, Loader._plugins);
Loader.prototype.add = function add(name, url2, options, callback) {
  if (Array.isArray(name)) {
    for (var i = 0; i < name.length; ++i) {
      this.add(name[i]);
    }
    return this;
  }
  if (typeof name === "object") {
    options = name;
    callback = url2 || options.callback || options.onComplete;
    url2 = options.url;
    name = options.name || options.key || options.url;
  }
  if (typeof url2 !== "string") {
    callback = options;
    options = url2;
    url2 = name;
  }
  if (typeof url2 !== "string") {
    throw new Error("No url passed to add resource to loader.");
  }
  if (typeof options === "function") {
    callback = options;
    options = null;
  }
  return this._add(name, url2, options, callback);
};
var AppLoaderPlugin = (
  /** @class */
  function() {
    function AppLoaderPlugin2() {
    }
    AppLoaderPlugin2.init = function(options) {
      options = Object.assign({
        sharedLoader: false
      }, options);
      this.loader = options.sharedLoader ? Loader.shared : new Loader();
    };
    AppLoaderPlugin2.destroy = function() {
      if (this.loader) {
        this.loader.destroy();
        this.loader = null;
      }
    };
    AppLoaderPlugin2.extension = ExtensionType.Application;
    return AppLoaderPlugin2;
  }()
);
var TextureLoader = (
  /** @class */
  function() {
    function TextureLoader2() {
    }
    TextureLoader2.add = function() {
      LoaderResource.setExtensionLoadType("svg", LoaderResource.LOAD_TYPE.XHR);
      LoaderResource.setExtensionXhrType("svg", LoaderResource.XHR_RESPONSE_TYPE.TEXT);
    };
    TextureLoader2.use = function(resource, next) {
      if (resource.data && (resource.type === LoaderResource.TYPE.IMAGE || resource.extension === "svg")) {
        var data = resource.data, url2 = resource.url, name = resource.name, metadata = resource.metadata;
        Texture.fromLoader(data, url2, name, metadata).then(function(texture) {
          resource.texture = texture;
          next();
        }).catch(next);
      } else {
        next();
      }
    };
    TextureLoader2.extension = ExtensionType.Loader;
    return TextureLoader2;
  }()
);
var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function encodeBinary(input) {
  var output = "";
  var inx = 0;
  while (inx < input.length) {
    var bytebuffer = [0, 0, 0];
    var encodedCharIndexes = [0, 0, 0, 0];
    for (var jnx = 0; jnx < bytebuffer.length; ++jnx) {
      if (inx < input.length) {
        bytebuffer[jnx] = input.charCodeAt(inx++) & 255;
      } else {
        bytebuffer[jnx] = 0;
      }
    }
    encodedCharIndexes[0] = bytebuffer[0] >> 2;
    encodedCharIndexes[1] = (bytebuffer[0] & 3) << 4 | bytebuffer[1] >> 4;
    encodedCharIndexes[2] = (bytebuffer[1] & 15) << 2 | bytebuffer[2] >> 6;
    encodedCharIndexes[3] = bytebuffer[2] & 63;
    var paddingBytes = inx - (input.length - 1);
    switch (paddingBytes) {
      case 2:
        encodedCharIndexes[3] = 64;
        encodedCharIndexes[2] = 64;
        break;
      case 1:
        encodedCharIndexes[3] = 64;
        break;
    }
    for (var jnx = 0; jnx < encodedCharIndexes.length; ++jnx) {
      output += _keyStr.charAt(encodedCharIndexes[jnx]);
    }
  }
  return output;
}
function parsing(resource, next) {
  if (!resource.data) {
    next();
    return;
  }
  if (resource.xhr && resource.xhrType === LoaderResource.XHR_RESPONSE_TYPE.BLOB) {
    if (!self.Blob || typeof resource.data === "string") {
      var type = resource.xhr.getResponseHeader("content-type");
      if (type && type.indexOf("image") === 0) {
        resource.data = new Image();
        resource.data.src = "data:" + type + ";base64," + encodeBinary(resource.xhr.responseText);
        resource.type = LoaderResource.TYPE.IMAGE;
        resource.data.onload = function() {
          resource.data.onload = null;
          next();
        };
        return;
      }
    } else if (resource.data.type.indexOf("image") === 0) {
      var Url_1 = globalThis.URL || globalThis.webkitURL;
      var src_1 = Url_1.createObjectURL(resource.data);
      resource.blob = resource.data;
      resource.data = new Image();
      resource.data.src = src_1;
      resource.type = LoaderResource.TYPE.IMAGE;
      resource.data.onload = function() {
        Url_1.revokeObjectURL(src_1);
        resource.data.onload = null;
        next();
      };
      return;
    }
  }
  next();
}
var ParsingLoader = (
  /** @class */
  function() {
    function ParsingLoader2() {
    }
    ParsingLoader2.extension = ExtensionType.Loader;
    ParsingLoader2.use = parsing;
    return ParsingLoader2;
  }()
);
extensions.add(TextureLoader, ParsingLoader);

// node_modules/.pnpm/@pixi+compressed-textures@6.5.2_@pixi+constants@6.5.2_@pixi+core@6.5.2_@pixi+loaders@6.5.2_@p_wc2uwx3vokowealoj3osbfwo4m/node_modules/@pixi/compressed-textures/dist/esm/compressed-textures.mjs
var _a$2;
var INTERNAL_FORMATS;
(function(INTERNAL_FORMATS2) {
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_RGB_S3TC_DXT1_EXT"] = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT";
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_RGBA_S3TC_DXT1_EXT"] = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT";
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_RGBA_S3TC_DXT3_EXT"] = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT";
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_RGBA_S3TC_DXT5_EXT"] = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT";
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT"] = 35917] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT";
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT"] = 35918] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT";
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT"] = 35919] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT";
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_SRGB_S3TC_DXT1_EXT"] = 35916] = "COMPRESSED_SRGB_S3TC_DXT1_EXT";
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_R11_EAC"] = 37488] = "COMPRESSED_R11_EAC";
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_SIGNED_R11_EAC"] = 37489] = "COMPRESSED_SIGNED_R11_EAC";
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_RG11_EAC"] = 37490] = "COMPRESSED_RG11_EAC";
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_SIGNED_RG11_EAC"] = 37491] = "COMPRESSED_SIGNED_RG11_EAC";
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_RGB8_ETC2"] = 37492] = "COMPRESSED_RGB8_ETC2";
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_RGBA8_ETC2_EAC"] = 37496] = "COMPRESSED_RGBA8_ETC2_EAC";
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_SRGB8_ETC2"] = 37493] = "COMPRESSED_SRGB8_ETC2";
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"] = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC";
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2"] = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2";
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2"] = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2";
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_RGB_PVRTC_4BPPV1_IMG"] = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG";
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_RGBA_PVRTC_4BPPV1_IMG"] = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG";
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_RGB_PVRTC_2BPPV1_IMG"] = 35841] = "COMPRESSED_RGB_PVRTC_2BPPV1_IMG";
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_RGBA_PVRTC_2BPPV1_IMG"] = 35843] = "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG";
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_RGB_ETC1_WEBGL"] = 36196] = "COMPRESSED_RGB_ETC1_WEBGL";
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_RGB_ATC_WEBGL"] = 35986] = "COMPRESSED_RGB_ATC_WEBGL";
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL"] = 35986] = "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL";
  INTERNAL_FORMATS2[INTERNAL_FORMATS2["COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL"] = 34798] = "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL";
})(INTERNAL_FORMATS || (INTERNAL_FORMATS = {}));
var INTERNAL_FORMAT_TO_BYTES_PER_PIXEL = (_a$2 = {}, // WEBGL_compressed_texture_s3tc
_a$2[INTERNAL_FORMATS.COMPRESSED_RGB_S3TC_DXT1_EXT] = 0.5, _a$2[INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT1_EXT] = 0.5, _a$2[INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT3_EXT] = 1, _a$2[INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT5_EXT] = 1, // WEBGL_compressed_texture_s3tc
_a$2[INTERNAL_FORMATS.COMPRESSED_SRGB_S3TC_DXT1_EXT] = 0.5, _a$2[INTERNAL_FORMATS.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT] = 0.5, _a$2[INTERNAL_FORMATS.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT] = 1, _a$2[INTERNAL_FORMATS.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT] = 1, // WEBGL_compressed_texture_etc
_a$2[INTERNAL_FORMATS.COMPRESSED_R11_EAC] = 0.5, _a$2[INTERNAL_FORMATS.COMPRESSED_SIGNED_R11_EAC] = 0.5, _a$2[INTERNAL_FORMATS.COMPRESSED_RG11_EAC] = 1, _a$2[INTERNAL_FORMATS.COMPRESSED_SIGNED_RG11_EAC] = 1, _a$2[INTERNAL_FORMATS.COMPRESSED_RGB8_ETC2] = 0.5, _a$2[INTERNAL_FORMATS.COMPRESSED_RGBA8_ETC2_EAC] = 1, _a$2[INTERNAL_FORMATS.COMPRESSED_SRGB8_ETC2] = 0.5, _a$2[INTERNAL_FORMATS.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC] = 1, _a$2[INTERNAL_FORMATS.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2] = 0.5, _a$2[INTERNAL_FORMATS.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2] = 0.5, // WEBGL_compressed_texture_pvrtc
_a$2[INTERNAL_FORMATS.COMPRESSED_RGB_PVRTC_4BPPV1_IMG] = 0.5, _a$2[INTERNAL_FORMATS.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG] = 0.5, _a$2[INTERNAL_FORMATS.COMPRESSED_RGB_PVRTC_2BPPV1_IMG] = 0.25, _a$2[INTERNAL_FORMATS.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG] = 0.25, // WEBGL_compressed_texture_etc1
_a$2[INTERNAL_FORMATS.COMPRESSED_RGB_ETC1_WEBGL] = 0.5, // @see https://www.khronos.org/registry/OpenGL/extensions/AMD/AMD_compressed_ATC_texture.txt
// WEBGL_compressed_texture_atc
_a$2[INTERNAL_FORMATS.COMPRESSED_RGB_ATC_WEBGL] = 0.5, _a$2[INTERNAL_FORMATS.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL] = 1, _a$2[INTERNAL_FORMATS.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL] = 1, _a$2);
var extendStatics2 = function(d, b) {
  extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) {
      if (b2.hasOwnProperty(p)) {
        d2[p] = b2[p];
      }
    }
  };
  return extendStatics2(d, b);
};
function __extends2(d, b) {
  extendStatics2(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve2) {
      resolve2(value);
    });
  }
  return new (P || (P = Promise))(function(resolve2, reject2) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject2(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject2(e);
      }
    }
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) {
      throw t[1];
    }
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) {
      throw new TypeError("Generator is already executing.");
    }
    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) {
          return t;
        }
        if (y = 0, t) {
          op = [op[0] & 2, t.value];
        }
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) {
              _.ops.pop();
            }
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }
    if (op[0] & 5) {
      throw op[1];
    }
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
var BlobResource = (
  /** @class */
  function(_super) {
    __extends2(BlobResource2, _super);
    function BlobResource2(source, options) {
      if (options === void 0) {
        options = { width: 1, height: 1, autoLoad: true };
      }
      var _this = this;
      var origin;
      var data;
      if (typeof source === "string") {
        origin = source;
        data = new Uint8Array();
      } else {
        origin = null;
        data = source;
      }
      _this = _super.call(this, data, options) || this;
      _this.origin = origin;
      _this.buffer = data ? new ViewableBuffer(data) : null;
      if (_this.origin && options.autoLoad !== false) {
        _this.load();
      }
      if (data && data.length) {
        _this.loaded = true;
        _this.onBlobLoaded(_this.buffer.rawBinaryData);
      }
      return _this;
    }
    BlobResource2.prototype.onBlobLoaded = function(_data) {
    };
    BlobResource2.prototype.load = function() {
      return __awaiter(this, void 0, Promise, function() {
        var response, blob, arrayBuffer;
        return __generator(this, function(_a3) {
          switch (_a3.label) {
            case 0:
              return [4, fetch(this.origin)];
            case 1:
              response = _a3.sent();
              return [4, response.blob()];
            case 2:
              blob = _a3.sent();
              return [4, blob.arrayBuffer()];
            case 3:
              arrayBuffer = _a3.sent();
              this.data = new Uint32Array(arrayBuffer);
              this.buffer = new ViewableBuffer(arrayBuffer);
              this.loaded = true;
              this.onBlobLoaded(arrayBuffer);
              this.update();
              return [2, this];
          }
        });
      });
    };
    return BlobResource2;
  }(BufferResource)
);
var CompressedTextureResource = (
  /** @class */
  function(_super) {
    __extends2(CompressedTextureResource2, _super);
    function CompressedTextureResource2(source, options) {
      var _this = _super.call(this, source, options) || this;
      _this.format = options.format;
      _this.levels = options.levels || 1;
      _this._width = options.width;
      _this._height = options.height;
      _this._extension = CompressedTextureResource2._formatToExtension(_this.format);
      if (options.levelBuffers || _this.buffer) {
        _this._levelBuffers = options.levelBuffers || CompressedTextureResource2._createLevelBuffers(
          source instanceof Uint8Array ? source : _this.buffer.uint8View,
          _this.format,
          _this.levels,
          4,
          4,
          // PVRTC has 8x4 blocks in 2bpp mode
          _this.width,
          _this.height
        );
      }
      return _this;
    }
    CompressedTextureResource2.prototype.upload = function(renderer, _texture, _glTexture) {
      var gl = renderer.gl;
      var extension = renderer.context.extensions[this._extension];
      if (!extension) {
        throw new Error(this._extension + " textures are not supported on the current machine");
      }
      if (!this._levelBuffers) {
        return false;
      }
      for (var i = 0, j = this.levels; i < j; i++) {
        var _a3 = this._levelBuffers[i], levelID = _a3.levelID, levelWidth = _a3.levelWidth, levelHeight = _a3.levelHeight, levelBuffer = _a3.levelBuffer;
        gl.compressedTexImage2D(gl.TEXTURE_2D, levelID, this.format, levelWidth, levelHeight, 0, levelBuffer);
      }
      return true;
    };
    CompressedTextureResource2.prototype.onBlobLoaded = function() {
      this._levelBuffers = CompressedTextureResource2._createLevelBuffers(
        this.buffer.uint8View,
        this.format,
        this.levels,
        4,
        4,
        // PVRTC has 8x4 blocks in 2bpp mode
        this.width,
        this.height
      );
    };
    CompressedTextureResource2._formatToExtension = function(format) {
      if (format >= 33776 && format <= 33779) {
        return "s3tc";
      } else if (format >= 37488 && format <= 37497) {
        return "etc";
      } else if (format >= 35840 && format <= 35843) {
        return "pvrtc";
      } else if (format >= 36196) {
        return "etc1";
      } else if (format >= 35986 && format <= 34798) {
        return "atc";
      }
      throw new Error("Invalid (compressed) texture format given!");
    };
    CompressedTextureResource2._createLevelBuffers = function(buffer, format, levels, blockWidth, blockHeight, imageWidth, imageHeight) {
      var buffers = new Array(levels);
      var offset = buffer.byteOffset;
      var levelWidth = imageWidth;
      var levelHeight = imageHeight;
      var alignedLevelWidth = levelWidth + blockWidth - 1 & ~(blockWidth - 1);
      var alignedLevelHeight = levelHeight + blockHeight - 1 & ~(blockHeight - 1);
      var levelSize = alignedLevelWidth * alignedLevelHeight * INTERNAL_FORMAT_TO_BYTES_PER_PIXEL[format];
      for (var i = 0; i < levels; i++) {
        buffers[i] = {
          levelID: i,
          levelWidth: levels > 1 ? levelWidth : alignedLevelWidth,
          levelHeight: levels > 1 ? levelHeight : alignedLevelHeight,
          levelBuffer: new Uint8Array(buffer.buffer, offset, levelSize)
        };
        offset += levelSize;
        levelWidth = levelWidth >> 1 || 1;
        levelHeight = levelHeight >> 1 || 1;
        alignedLevelWidth = levelWidth + blockWidth - 1 & ~(blockWidth - 1);
        alignedLevelHeight = levelHeight + blockHeight - 1 & ~(blockHeight - 1);
        levelSize = alignedLevelWidth * alignedLevelHeight * INTERNAL_FORMAT_TO_BYTES_PER_PIXEL[format];
      }
      return buffers;
    };
    return CompressedTextureResource2;
  }(BlobResource)
);
var CompressedTextureLoader = (
  /** @class */
  function() {
    function CompressedTextureLoader2() {
    }
    CompressedTextureLoader2.use = function(resource, next) {
      var data = resource.data;
      var loader = this;
      if (resource.type === LoaderResource.TYPE.JSON && data && data.cacheID && data.textures) {
        var textures = data.textures;
        var textureURL = void 0;
        var fallbackURL = void 0;
        for (var i = 0, j = textures.length; i < j; i++) {
          var texture = textures[i];
          var url_1 = texture.src;
          var format = texture.format;
          if (!format) {
            fallbackURL = url_1;
          }
          if (CompressedTextureLoader2.textureFormats[format]) {
            textureURL = url_1;
            break;
          }
        }
        textureURL = textureURL || fallbackURL;
        if (!textureURL) {
          next(new Error("Cannot load compressed-textures in " + resource.url + ", make sure you provide a fallback"));
          return;
        }
        if (textureURL === resource.url) {
          next(new Error("URL of compressed texture cannot be the same as the manifest's URL"));
          return;
        }
        var loadOptions = {
          crossOrigin: resource.crossOrigin,
          metadata: resource.metadata.imageMetadata,
          parentResource: resource
        };
        var resourcePath = url.resolve(resource.url.replace(loader.baseUrl, ""), textureURL);
        var resourceName = data.cacheID;
        loader.add(resourceName, resourcePath, loadOptions, function(res) {
          if (res.error) {
            next(res.error);
            return;
          }
          var _a3 = res.texture, texture2 = _a3 === void 0 ? null : _a3, _b2 = res.textures, textures2 = _b2 === void 0 ? {} : _b2;
          Object.assign(resource, { texture: texture2, textures: textures2 });
          next();
        });
      } else {
        next();
      }
    };
    Object.defineProperty(CompressedTextureLoader2, "textureExtensions", {
      /**  Map of available texture extensions. */
      get: function() {
        if (!CompressedTextureLoader2._textureExtensions) {
          var canvas = settings.ADAPTER.createCanvas();
          var gl = canvas.getContext("webgl");
          if (!gl) {
            console.warn("WebGL not available for compressed textures. Silently failing.");
            return {};
          }
          var extensions2 = {
            s3tc: gl.getExtension("WEBGL_compressed_texture_s3tc"),
            s3tc_sRGB: gl.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
            etc: gl.getExtension("WEBGL_compressed_texture_etc"),
            etc1: gl.getExtension("WEBGL_compressed_texture_etc1"),
            pvrtc: gl.getExtension("WEBGL_compressed_texture_pvrtc") || gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
            atc: gl.getExtension("WEBGL_compressed_texture_atc"),
            astc: gl.getExtension("WEBGL_compressed_texture_astc")
          };
          CompressedTextureLoader2._textureExtensions = extensions2;
        }
        return CompressedTextureLoader2._textureExtensions;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(CompressedTextureLoader2, "textureFormats", {
      /** Map of available texture formats. */
      get: function() {
        if (!CompressedTextureLoader2._textureFormats) {
          var extensions2 = CompressedTextureLoader2.textureExtensions;
          CompressedTextureLoader2._textureFormats = {};
          for (var extensionName in extensions2) {
            var extension = extensions2[extensionName];
            if (!extension) {
              continue;
            }
            Object.assign(CompressedTextureLoader2._textureFormats, Object.getPrototypeOf(extension));
          }
        }
        return CompressedTextureLoader2._textureFormats;
      },
      enumerable: false,
      configurable: true
    });
    CompressedTextureLoader2.extension = ExtensionType.Loader;
    return CompressedTextureLoader2;
  }()
);
function registerCompressedTextures(url2, resources2, metadata) {
  var result = {
    textures: {},
    texture: null
  };
  if (!resources2) {
    return result;
  }
  var textures = resources2.map(function(resource) {
    return new Texture(new BaseTexture(resource, Object.assign({
      mipmap: MIPMAP_MODES.OFF,
      alphaMode: ALPHA_MODES.NO_PREMULTIPLIED_ALPHA
    }, metadata)));
  });
  textures.forEach(function(texture, i) {
    var baseTexture = texture.baseTexture;
    var cacheID = url2 + "-" + (i + 1);
    BaseTexture.addToCache(baseTexture, cacheID);
    Texture.addToCache(texture, cacheID);
    if (i === 0) {
      BaseTexture.addToCache(baseTexture, url2);
      Texture.addToCache(texture, url2);
      result.texture = texture;
    }
    result.textures[cacheID] = texture;
  });
  return result;
}
var _a$1;
var _b$1;
var DDS_MAGIC_SIZE = 4;
var DDS_HEADER_SIZE = 124;
var DDS_HEADER_PF_SIZE = 32;
var DDS_HEADER_DX10_SIZE = 20;
var DDS_MAGIC = 542327876;
var DDS_FIELDS = {
  SIZE: 1,
  FLAGS: 2,
  HEIGHT: 3,
  WIDTH: 4,
  MIPMAP_COUNT: 7,
  PIXEL_FORMAT: 19
};
var DDS_PF_FIELDS = {
  SIZE: 0,
  FLAGS: 1,
  FOURCC: 2,
  RGB_BITCOUNT: 3,
  R_BIT_MASK: 4,
  G_BIT_MASK: 5,
  B_BIT_MASK: 6,
  A_BIT_MASK: 7
};
var DDS_DX10_FIELDS = {
  DXGI_FORMAT: 0,
  RESOURCE_DIMENSION: 1,
  MISC_FLAG: 2,
  ARRAY_SIZE: 3,
  MISC_FLAGS2: 4
};
var DXGI_FORMAT;
(function(DXGI_FORMAT2) {
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_UNKNOWN"] = 0] = "DXGI_FORMAT_UNKNOWN";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G32B32A32_TYPELESS"] = 1] = "DXGI_FORMAT_R32G32B32A32_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G32B32A32_FLOAT"] = 2] = "DXGI_FORMAT_R32G32B32A32_FLOAT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G32B32A32_UINT"] = 3] = "DXGI_FORMAT_R32G32B32A32_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G32B32A32_SINT"] = 4] = "DXGI_FORMAT_R32G32B32A32_SINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G32B32_TYPELESS"] = 5] = "DXGI_FORMAT_R32G32B32_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G32B32_FLOAT"] = 6] = "DXGI_FORMAT_R32G32B32_FLOAT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G32B32_UINT"] = 7] = "DXGI_FORMAT_R32G32B32_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G32B32_SINT"] = 8] = "DXGI_FORMAT_R32G32B32_SINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16G16B16A16_TYPELESS"] = 9] = "DXGI_FORMAT_R16G16B16A16_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16G16B16A16_FLOAT"] = 10] = "DXGI_FORMAT_R16G16B16A16_FLOAT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16G16B16A16_UNORM"] = 11] = "DXGI_FORMAT_R16G16B16A16_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16G16B16A16_UINT"] = 12] = "DXGI_FORMAT_R16G16B16A16_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16G16B16A16_SNORM"] = 13] = "DXGI_FORMAT_R16G16B16A16_SNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16G16B16A16_SINT"] = 14] = "DXGI_FORMAT_R16G16B16A16_SINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G32_TYPELESS"] = 15] = "DXGI_FORMAT_R32G32_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G32_FLOAT"] = 16] = "DXGI_FORMAT_R32G32_FLOAT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G32_UINT"] = 17] = "DXGI_FORMAT_R32G32_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G32_SINT"] = 18] = "DXGI_FORMAT_R32G32_SINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G8X24_TYPELESS"] = 19] = "DXGI_FORMAT_R32G8X24_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_D32_FLOAT_S8X24_UINT"] = 20] = "DXGI_FORMAT_D32_FLOAT_S8X24_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS"] = 21] = "DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_X32_TYPELESS_G8X24_UINT"] = 22] = "DXGI_FORMAT_X32_TYPELESS_G8X24_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R10G10B10A2_TYPELESS"] = 23] = "DXGI_FORMAT_R10G10B10A2_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R10G10B10A2_UNORM"] = 24] = "DXGI_FORMAT_R10G10B10A2_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R10G10B10A2_UINT"] = 25] = "DXGI_FORMAT_R10G10B10A2_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R11G11B10_FLOAT"] = 26] = "DXGI_FORMAT_R11G11B10_FLOAT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8G8B8A8_TYPELESS"] = 27] = "DXGI_FORMAT_R8G8B8A8_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8G8B8A8_UNORM"] = 28] = "DXGI_FORMAT_R8G8B8A8_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8G8B8A8_UNORM_SRGB"] = 29] = "DXGI_FORMAT_R8G8B8A8_UNORM_SRGB";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8G8B8A8_UINT"] = 30] = "DXGI_FORMAT_R8G8B8A8_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8G8B8A8_SNORM"] = 31] = "DXGI_FORMAT_R8G8B8A8_SNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8G8B8A8_SINT"] = 32] = "DXGI_FORMAT_R8G8B8A8_SINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16G16_TYPELESS"] = 33] = "DXGI_FORMAT_R16G16_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16G16_FLOAT"] = 34] = "DXGI_FORMAT_R16G16_FLOAT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16G16_UNORM"] = 35] = "DXGI_FORMAT_R16G16_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16G16_UINT"] = 36] = "DXGI_FORMAT_R16G16_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16G16_SNORM"] = 37] = "DXGI_FORMAT_R16G16_SNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16G16_SINT"] = 38] = "DXGI_FORMAT_R16G16_SINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32_TYPELESS"] = 39] = "DXGI_FORMAT_R32_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_D32_FLOAT"] = 40] = "DXGI_FORMAT_D32_FLOAT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32_FLOAT"] = 41] = "DXGI_FORMAT_R32_FLOAT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32_UINT"] = 42] = "DXGI_FORMAT_R32_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32_SINT"] = 43] = "DXGI_FORMAT_R32_SINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R24G8_TYPELESS"] = 44] = "DXGI_FORMAT_R24G8_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_D24_UNORM_S8_UINT"] = 45] = "DXGI_FORMAT_D24_UNORM_S8_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R24_UNORM_X8_TYPELESS"] = 46] = "DXGI_FORMAT_R24_UNORM_X8_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_X24_TYPELESS_G8_UINT"] = 47] = "DXGI_FORMAT_X24_TYPELESS_G8_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8G8_TYPELESS"] = 48] = "DXGI_FORMAT_R8G8_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8G8_UNORM"] = 49] = "DXGI_FORMAT_R8G8_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8G8_UINT"] = 50] = "DXGI_FORMAT_R8G8_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8G8_SNORM"] = 51] = "DXGI_FORMAT_R8G8_SNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8G8_SINT"] = 52] = "DXGI_FORMAT_R8G8_SINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16_TYPELESS"] = 53] = "DXGI_FORMAT_R16_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16_FLOAT"] = 54] = "DXGI_FORMAT_R16_FLOAT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_D16_UNORM"] = 55] = "DXGI_FORMAT_D16_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16_UNORM"] = 56] = "DXGI_FORMAT_R16_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16_UINT"] = 57] = "DXGI_FORMAT_R16_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16_SNORM"] = 58] = "DXGI_FORMAT_R16_SNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16_SINT"] = 59] = "DXGI_FORMAT_R16_SINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8_TYPELESS"] = 60] = "DXGI_FORMAT_R8_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8_UNORM"] = 61] = "DXGI_FORMAT_R8_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8_UINT"] = 62] = "DXGI_FORMAT_R8_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8_SNORM"] = 63] = "DXGI_FORMAT_R8_SNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8_SINT"] = 64] = "DXGI_FORMAT_R8_SINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_A8_UNORM"] = 65] = "DXGI_FORMAT_A8_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R1_UNORM"] = 66] = "DXGI_FORMAT_R1_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R9G9B9E5_SHAREDEXP"] = 67] = "DXGI_FORMAT_R9G9B9E5_SHAREDEXP";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8G8_B8G8_UNORM"] = 68] = "DXGI_FORMAT_R8G8_B8G8_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_G8R8_G8B8_UNORM"] = 69] = "DXGI_FORMAT_G8R8_G8B8_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC1_TYPELESS"] = 70] = "DXGI_FORMAT_BC1_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC1_UNORM"] = 71] = "DXGI_FORMAT_BC1_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC1_UNORM_SRGB"] = 72] = "DXGI_FORMAT_BC1_UNORM_SRGB";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC2_TYPELESS"] = 73] = "DXGI_FORMAT_BC2_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC2_UNORM"] = 74] = "DXGI_FORMAT_BC2_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC2_UNORM_SRGB"] = 75] = "DXGI_FORMAT_BC2_UNORM_SRGB";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC3_TYPELESS"] = 76] = "DXGI_FORMAT_BC3_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC3_UNORM"] = 77] = "DXGI_FORMAT_BC3_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC3_UNORM_SRGB"] = 78] = "DXGI_FORMAT_BC3_UNORM_SRGB";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC4_TYPELESS"] = 79] = "DXGI_FORMAT_BC4_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC4_UNORM"] = 80] = "DXGI_FORMAT_BC4_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC4_SNORM"] = 81] = "DXGI_FORMAT_BC4_SNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC5_TYPELESS"] = 82] = "DXGI_FORMAT_BC5_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC5_UNORM"] = 83] = "DXGI_FORMAT_BC5_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC5_SNORM"] = 84] = "DXGI_FORMAT_BC5_SNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_B5G6R5_UNORM"] = 85] = "DXGI_FORMAT_B5G6R5_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_B5G5R5A1_UNORM"] = 86] = "DXGI_FORMAT_B5G5R5A1_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_B8G8R8A8_UNORM"] = 87] = "DXGI_FORMAT_B8G8R8A8_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_B8G8R8X8_UNORM"] = 88] = "DXGI_FORMAT_B8G8R8X8_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM"] = 89] = "DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_B8G8R8A8_TYPELESS"] = 90] = "DXGI_FORMAT_B8G8R8A8_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_B8G8R8A8_UNORM_SRGB"] = 91] = "DXGI_FORMAT_B8G8R8A8_UNORM_SRGB";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_B8G8R8X8_TYPELESS"] = 92] = "DXGI_FORMAT_B8G8R8X8_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_B8G8R8X8_UNORM_SRGB"] = 93] = "DXGI_FORMAT_B8G8R8X8_UNORM_SRGB";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC6H_TYPELESS"] = 94] = "DXGI_FORMAT_BC6H_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC6H_UF16"] = 95] = "DXGI_FORMAT_BC6H_UF16";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC6H_SF16"] = 96] = "DXGI_FORMAT_BC6H_SF16";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC7_TYPELESS"] = 97] = "DXGI_FORMAT_BC7_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC7_UNORM"] = 98] = "DXGI_FORMAT_BC7_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC7_UNORM_SRGB"] = 99] = "DXGI_FORMAT_BC7_UNORM_SRGB";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_AYUV"] = 100] = "DXGI_FORMAT_AYUV";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_Y410"] = 101] = "DXGI_FORMAT_Y410";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_Y416"] = 102] = "DXGI_FORMAT_Y416";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_NV12"] = 103] = "DXGI_FORMAT_NV12";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_P010"] = 104] = "DXGI_FORMAT_P010";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_P016"] = 105] = "DXGI_FORMAT_P016";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_420_OPAQUE"] = 106] = "DXGI_FORMAT_420_OPAQUE";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_YUY2"] = 107] = "DXGI_FORMAT_YUY2";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_Y210"] = 108] = "DXGI_FORMAT_Y210";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_Y216"] = 109] = "DXGI_FORMAT_Y216";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_NV11"] = 110] = "DXGI_FORMAT_NV11";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_AI44"] = 111] = "DXGI_FORMAT_AI44";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_IA44"] = 112] = "DXGI_FORMAT_IA44";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_P8"] = 113] = "DXGI_FORMAT_P8";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_A8P8"] = 114] = "DXGI_FORMAT_A8P8";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_B4G4R4A4_UNORM"] = 115] = "DXGI_FORMAT_B4G4R4A4_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_P208"] = 116] = "DXGI_FORMAT_P208";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_V208"] = 117] = "DXGI_FORMAT_V208";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_V408"] = 118] = "DXGI_FORMAT_V408";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE"] = 119] = "DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE"] = 120] = "DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_FORCE_UINT"] = 121] = "DXGI_FORMAT_FORCE_UINT";
})(DXGI_FORMAT || (DXGI_FORMAT = {}));
var D3D10_RESOURCE_DIMENSION;
(function(D3D10_RESOURCE_DIMENSION2) {
  D3D10_RESOURCE_DIMENSION2[D3D10_RESOURCE_DIMENSION2["DDS_DIMENSION_TEXTURE1D"] = 2] = "DDS_DIMENSION_TEXTURE1D";
  D3D10_RESOURCE_DIMENSION2[D3D10_RESOURCE_DIMENSION2["DDS_DIMENSION_TEXTURE2D"] = 3] = "DDS_DIMENSION_TEXTURE2D";
  D3D10_RESOURCE_DIMENSION2[D3D10_RESOURCE_DIMENSION2["DDS_DIMENSION_TEXTURE3D"] = 6] = "DDS_DIMENSION_TEXTURE3D";
})(D3D10_RESOURCE_DIMENSION || (D3D10_RESOURCE_DIMENSION = {}));
var PF_FLAGS = 1;
var DDPF_ALPHA = 2;
var DDPF_FOURCC = 4;
var DDPF_RGB = 64;
var DDPF_YUV = 512;
var DDPF_LUMINANCE = 131072;
var FOURCC_DXT1 = 827611204;
var FOURCC_DXT3 = 861165636;
var FOURCC_DXT5 = 894720068;
var FOURCC_DX10 = 808540228;
var DDS_RESOURCE_MISC_TEXTURECUBE = 4;
var FOURCC_TO_FORMAT = (_a$1 = {}, _a$1[FOURCC_DXT1] = INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT1_EXT, _a$1[FOURCC_DXT3] = INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT3_EXT, _a$1[FOURCC_DXT5] = INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT5_EXT, _a$1);
var DXGI_TO_FORMAT = (_b$1 = {}, // WEBGL_compressed_texture_s3tc
_b$1[DXGI_FORMAT.DXGI_FORMAT_BC1_TYPELESS] = INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT1_EXT, _b$1[DXGI_FORMAT.DXGI_FORMAT_BC1_UNORM] = INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT1_EXT, _b$1[DXGI_FORMAT.DXGI_FORMAT_BC2_TYPELESS] = INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT3_EXT, _b$1[DXGI_FORMAT.DXGI_FORMAT_BC2_UNORM] = INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT3_EXT, _b$1[DXGI_FORMAT.DXGI_FORMAT_BC3_TYPELESS] = INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT5_EXT, _b$1[DXGI_FORMAT.DXGI_FORMAT_BC3_UNORM] = INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT5_EXT, // WEBGL_compressed_texture_s3tc_srgb
_b$1[DXGI_FORMAT.DXGI_FORMAT_BC1_UNORM_SRGB] = INTERNAL_FORMATS.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, _b$1[DXGI_FORMAT.DXGI_FORMAT_BC2_UNORM_SRGB] = INTERNAL_FORMATS.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT, _b$1[DXGI_FORMAT.DXGI_FORMAT_BC3_UNORM_SRGB] = INTERNAL_FORMATS.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT, _b$1);
function parseDDS(arrayBuffer) {
  var data = new Uint32Array(arrayBuffer);
  var magicWord = data[0];
  if (magicWord !== DDS_MAGIC) {
    throw new Error("Invalid DDS file magic word");
  }
  var header = new Uint32Array(arrayBuffer, 0, DDS_HEADER_SIZE / Uint32Array.BYTES_PER_ELEMENT);
  var height = header[DDS_FIELDS.HEIGHT];
  var width = header[DDS_FIELDS.WIDTH];
  var mipmapCount = header[DDS_FIELDS.MIPMAP_COUNT];
  var pixelFormat = new Uint32Array(arrayBuffer, DDS_FIELDS.PIXEL_FORMAT * Uint32Array.BYTES_PER_ELEMENT, DDS_HEADER_PF_SIZE / Uint32Array.BYTES_PER_ELEMENT);
  var formatFlags = pixelFormat[PF_FLAGS];
  if (formatFlags & DDPF_FOURCC) {
    var fourCC = pixelFormat[DDS_PF_FIELDS.FOURCC];
    if (fourCC !== FOURCC_DX10) {
      var internalFormat_1 = FOURCC_TO_FORMAT[fourCC];
      var dataOffset_1 = DDS_MAGIC_SIZE + DDS_HEADER_SIZE;
      var texData = new Uint8Array(arrayBuffer, dataOffset_1);
      var resource = new CompressedTextureResource(texData, {
        format: internalFormat_1,
        width,
        height,
        levels: mipmapCount
        // CompressedTextureResource will separate the levelBuffers for us!
      });
      return [resource];
    }
    var dx10Offset = DDS_MAGIC_SIZE + DDS_HEADER_SIZE;
    var dx10Header = new Uint32Array(data.buffer, dx10Offset, DDS_HEADER_DX10_SIZE / Uint32Array.BYTES_PER_ELEMENT);
    var dxgiFormat = dx10Header[DDS_DX10_FIELDS.DXGI_FORMAT];
    var resourceDimension = dx10Header[DDS_DX10_FIELDS.RESOURCE_DIMENSION];
    var miscFlag = dx10Header[DDS_DX10_FIELDS.MISC_FLAG];
    var arraySize = dx10Header[DDS_DX10_FIELDS.ARRAY_SIZE];
    var internalFormat_2 = DXGI_TO_FORMAT[dxgiFormat];
    if (internalFormat_2 === void 0) {
      throw new Error("DDSParser cannot parse texture data with DXGI format " + dxgiFormat);
    }
    if (miscFlag === DDS_RESOURCE_MISC_TEXTURECUBE) {
      throw new Error("DDSParser does not support cubemap textures");
    }
    if (resourceDimension === D3D10_RESOURCE_DIMENSION.DDS_DIMENSION_TEXTURE3D) {
      throw new Error("DDSParser does not supported 3D texture data");
    }
    var imageBuffers = new Array();
    var dataOffset = DDS_MAGIC_SIZE + DDS_HEADER_SIZE + DDS_HEADER_DX10_SIZE;
    if (arraySize === 1) {
      imageBuffers.push(new Uint8Array(arrayBuffer, dataOffset));
    } else {
      var pixelSize = INTERNAL_FORMAT_TO_BYTES_PER_PIXEL[internalFormat_2];
      var imageSize = 0;
      var levelWidth = width;
      var levelHeight = height;
      for (var i = 0; i < mipmapCount; i++) {
        var alignedLevelWidth = Math.max(1, levelWidth + 3 & ~3);
        var alignedLevelHeight = Math.max(1, levelHeight + 3 & ~3);
        var levelSize = alignedLevelWidth * alignedLevelHeight * pixelSize;
        imageSize += levelSize;
        levelWidth = levelWidth >>> 1;
        levelHeight = levelHeight >>> 1;
      }
      var imageOffset = dataOffset;
      for (var i = 0; i < arraySize; i++) {
        imageBuffers.push(new Uint8Array(arrayBuffer, imageOffset, imageSize));
        imageOffset += imageSize;
      }
    }
    return imageBuffers.map(function(buffer) {
      return new CompressedTextureResource(buffer, {
        format: internalFormat_2,
        width,
        height,
        levels: mipmapCount
      });
    });
  }
  if (formatFlags & DDPF_RGB) {
    throw new Error("DDSParser does not support uncompressed texture data.");
  }
  if (formatFlags & DDPF_YUV) {
    throw new Error("DDSParser does not supported YUV uncompressed texture data.");
  }
  if (formatFlags & DDPF_LUMINANCE) {
    throw new Error("DDSParser does not support single-channel (lumninance) texture data!");
  }
  if (formatFlags & DDPF_ALPHA) {
    throw new Error("DDSParser does not support single-channel (alpha) texture data!");
  }
  throw new Error("DDSParser failed to load a texture file due to an unknown reason!");
}
var _a;
var _b;
var _c;
var FILE_IDENTIFIER = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10];
var ENDIANNESS = 67305985;
var KTX_FIELDS = {
  FILE_IDENTIFIER: 0,
  ENDIANNESS: 12,
  GL_TYPE: 16,
  GL_TYPE_SIZE: 20,
  GL_FORMAT: 24,
  GL_INTERNAL_FORMAT: 28,
  GL_BASE_INTERNAL_FORMAT: 32,
  PIXEL_WIDTH: 36,
  PIXEL_HEIGHT: 40,
  PIXEL_DEPTH: 44,
  NUMBER_OF_ARRAY_ELEMENTS: 48,
  NUMBER_OF_FACES: 52,
  NUMBER_OF_MIPMAP_LEVELS: 56,
  BYTES_OF_KEY_VALUE_DATA: 60
};
var FILE_HEADER_SIZE = 64;
var TYPES_TO_BYTES_PER_COMPONENT = (_a = {}, _a[TYPES.UNSIGNED_BYTE] = 1, _a[TYPES.UNSIGNED_SHORT] = 2, _a[TYPES.INT] = 4, _a[TYPES.UNSIGNED_INT] = 4, _a[TYPES.FLOAT] = 4, _a[TYPES.HALF_FLOAT] = 8, _a);
var FORMATS_TO_COMPONENTS = (_b = {}, _b[FORMATS.RGBA] = 4, _b[FORMATS.RGB] = 3, _b[FORMATS.RG] = 2, _b[FORMATS.RED] = 1, _b[FORMATS.LUMINANCE] = 1, _b[FORMATS.LUMINANCE_ALPHA] = 2, _b[FORMATS.ALPHA] = 1, _b);
var TYPES_TO_BYTES_PER_PIXEL = (_c = {}, _c[TYPES.UNSIGNED_SHORT_4_4_4_4] = 2, _c[TYPES.UNSIGNED_SHORT_5_5_5_1] = 2, _c[TYPES.UNSIGNED_SHORT_5_6_5] = 2, _c);
function parseKTX(url2, arrayBuffer, loadKeyValueData) {
  if (loadKeyValueData === void 0) {
    loadKeyValueData = false;
  }
  var dataView = new DataView(arrayBuffer);
  if (!validate(url2, dataView)) {
    return null;
  }
  var littleEndian = dataView.getUint32(KTX_FIELDS.ENDIANNESS, true) === ENDIANNESS;
  var glType = dataView.getUint32(KTX_FIELDS.GL_TYPE, littleEndian);
  var glFormat = dataView.getUint32(KTX_FIELDS.GL_FORMAT, littleEndian);
  var glInternalFormat = dataView.getUint32(KTX_FIELDS.GL_INTERNAL_FORMAT, littleEndian);
  var pixelWidth = dataView.getUint32(KTX_FIELDS.PIXEL_WIDTH, littleEndian);
  var pixelHeight = dataView.getUint32(KTX_FIELDS.PIXEL_HEIGHT, littleEndian) || 1;
  var pixelDepth = dataView.getUint32(KTX_FIELDS.PIXEL_DEPTH, littleEndian) || 1;
  var numberOfArrayElements = dataView.getUint32(KTX_FIELDS.NUMBER_OF_ARRAY_ELEMENTS, littleEndian) || 1;
  var numberOfFaces = dataView.getUint32(KTX_FIELDS.NUMBER_OF_FACES, littleEndian);
  var numberOfMipmapLevels = dataView.getUint32(KTX_FIELDS.NUMBER_OF_MIPMAP_LEVELS, littleEndian);
  var bytesOfKeyValueData = dataView.getUint32(KTX_FIELDS.BYTES_OF_KEY_VALUE_DATA, littleEndian);
  if (pixelHeight === 0 || pixelDepth !== 1) {
    throw new Error("Only 2D textures are supported");
  }
  if (numberOfFaces !== 1) {
    throw new Error("CubeTextures are not supported by KTXLoader yet!");
  }
  if (numberOfArrayElements !== 1) {
    throw new Error("WebGL does not support array textures");
  }
  var blockWidth = 4;
  var blockHeight = 4;
  var alignedWidth = pixelWidth + 3 & ~3;
  var alignedHeight = pixelHeight + 3 & ~3;
  var imageBuffers = new Array(numberOfArrayElements);
  var imagePixels = pixelWidth * pixelHeight;
  if (glType === 0) {
    imagePixels = alignedWidth * alignedHeight;
  }
  var imagePixelByteSize;
  if (glType !== 0) {
    if (TYPES_TO_BYTES_PER_COMPONENT[glType]) {
      imagePixelByteSize = TYPES_TO_BYTES_PER_COMPONENT[glType] * FORMATS_TO_COMPONENTS[glFormat];
    } else {
      imagePixelByteSize = TYPES_TO_BYTES_PER_PIXEL[glType];
    }
  } else {
    imagePixelByteSize = INTERNAL_FORMAT_TO_BYTES_PER_PIXEL[glInternalFormat];
  }
  if (imagePixelByteSize === void 0) {
    throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");
  }
  var kvData = loadKeyValueData ? parseKvData(dataView, bytesOfKeyValueData, littleEndian) : null;
  var imageByteSize = imagePixels * imagePixelByteSize;
  var mipByteSize = imageByteSize;
  var mipWidth = pixelWidth;
  var mipHeight = pixelHeight;
  var alignedMipWidth = alignedWidth;
  var alignedMipHeight = alignedHeight;
  var imageOffset = FILE_HEADER_SIZE + bytesOfKeyValueData;
  for (var mipmapLevel = 0; mipmapLevel < numberOfMipmapLevels; mipmapLevel++) {
    var imageSize = dataView.getUint32(imageOffset, littleEndian);
    var elementOffset = imageOffset + 4;
    for (var arrayElement = 0; arrayElement < numberOfArrayElements; arrayElement++) {
      var mips = imageBuffers[arrayElement];
      if (!mips) {
        mips = imageBuffers[arrayElement] = new Array(numberOfMipmapLevels);
      }
      mips[mipmapLevel] = {
        levelID: mipmapLevel,
        // don't align mipWidth when texture not compressed! (glType not zero)
        levelWidth: numberOfMipmapLevels > 1 || glType !== 0 ? mipWidth : alignedMipWidth,
        levelHeight: numberOfMipmapLevels > 1 || glType !== 0 ? mipHeight : alignedMipHeight,
        levelBuffer: new Uint8Array(arrayBuffer, elementOffset, mipByteSize)
      };
      elementOffset += mipByteSize;
    }
    imageOffset += imageSize + 4;
    imageOffset = imageOffset % 4 !== 0 ? imageOffset + 4 - imageOffset % 4 : imageOffset;
    mipWidth = mipWidth >> 1 || 1;
    mipHeight = mipHeight >> 1 || 1;
    alignedMipWidth = mipWidth + blockWidth - 1 & ~(blockWidth - 1);
    alignedMipHeight = mipHeight + blockHeight - 1 & ~(blockHeight - 1);
    mipByteSize = alignedMipWidth * alignedMipHeight * imagePixelByteSize;
  }
  if (glType !== 0) {
    return {
      uncompressed: imageBuffers.map(function(levelBuffers) {
        var buffer = levelBuffers[0].levelBuffer;
        var convertToInt = false;
        if (glType === TYPES.FLOAT) {
          buffer = new Float32Array(levelBuffers[0].levelBuffer.buffer, levelBuffers[0].levelBuffer.byteOffset, levelBuffers[0].levelBuffer.byteLength / 4);
        } else if (glType === TYPES.UNSIGNED_INT) {
          convertToInt = true;
          buffer = new Uint32Array(levelBuffers[0].levelBuffer.buffer, levelBuffers[0].levelBuffer.byteOffset, levelBuffers[0].levelBuffer.byteLength / 4);
        } else if (glType === TYPES.INT) {
          convertToInt = true;
          buffer = new Int32Array(levelBuffers[0].levelBuffer.buffer, levelBuffers[0].levelBuffer.byteOffset, levelBuffers[0].levelBuffer.byteLength / 4);
        }
        return {
          resource: new BufferResource(buffer, {
            width: levelBuffers[0].levelWidth,
            height: levelBuffers[0].levelHeight
          }),
          type: glType,
          format: convertToInt ? convertFormatToInteger(glFormat) : glFormat
        };
      }),
      kvData
    };
  }
  return {
    compressed: imageBuffers.map(function(levelBuffers) {
      return new CompressedTextureResource(null, {
        format: glInternalFormat,
        width: pixelWidth,
        height: pixelHeight,
        levels: numberOfMipmapLevels,
        levelBuffers
      });
    }),
    kvData
  };
}
function validate(url2, dataView) {
  for (var i = 0; i < FILE_IDENTIFIER.length; i++) {
    if (dataView.getUint8(i) !== FILE_IDENTIFIER[i]) {
      console.error(url2 + " is not a valid *.ktx file!");
      return false;
    }
  }
  return true;
}
function convertFormatToInteger(format) {
  switch (format) {
    case FORMATS.RGBA:
      return FORMATS.RGBA_INTEGER;
    case FORMATS.RGB:
      return FORMATS.RGB_INTEGER;
    case FORMATS.RG:
      return FORMATS.RG_INTEGER;
    case FORMATS.RED:
      return FORMATS.RED_INTEGER;
    default:
      return format;
  }
}
function parseKvData(dataView, bytesOfKeyValueData, littleEndian) {
  var kvData = /* @__PURE__ */ new Map();
  var bytesIntoKeyValueData = 0;
  while (bytesIntoKeyValueData < bytesOfKeyValueData) {
    var keyAndValueByteSize = dataView.getUint32(FILE_HEADER_SIZE + bytesIntoKeyValueData, littleEndian);
    var keyAndValueByteOffset = FILE_HEADER_SIZE + bytesIntoKeyValueData + 4;
    var valuePadding = 3 - (keyAndValueByteSize + 3) % 4;
    if (keyAndValueByteSize === 0 || keyAndValueByteSize > bytesOfKeyValueData - bytesIntoKeyValueData) {
      console.error("KTXLoader: keyAndValueByteSize out of bounds");
      break;
    }
    var keyNulByte = 0;
    for (; keyNulByte < keyAndValueByteSize; keyNulByte++) {
      if (dataView.getUint8(keyAndValueByteOffset + keyNulByte) === 0) {
        break;
      }
    }
    if (keyNulByte === -1) {
      console.error("KTXLoader: Failed to find null byte terminating kvData key");
      break;
    }
    var key = new TextDecoder().decode(new Uint8Array(dataView.buffer, keyAndValueByteOffset, keyNulByte));
    var value = new DataView(dataView.buffer, keyAndValueByteOffset + keyNulByte + 1, keyAndValueByteSize - keyNulByte - 1);
    kvData.set(key, value);
    bytesIntoKeyValueData += 4 + keyAndValueByteSize + valuePadding;
  }
  return kvData;
}
LoaderResource.setExtensionXhrType("dds", LoaderResource.XHR_RESPONSE_TYPE.BUFFER);
var DDSLoader = (
  /** @class */
  function() {
    function DDSLoader2() {
    }
    DDSLoader2.use = function(resource, next) {
      if (resource.extension === "dds" && resource.data) {
        try {
          Object.assign(resource, registerCompressedTextures(resource.name || resource.url, parseDDS(resource.data), resource.metadata));
        } catch (err) {
          next(err);
          return;
        }
      }
      next();
    };
    DDSLoader2.extension = ExtensionType.Loader;
    return DDSLoader2;
  }()
);
LoaderResource.setExtensionXhrType("ktx", LoaderResource.XHR_RESPONSE_TYPE.BUFFER);
var KTXLoader = (
  /** @class */
  function() {
    function KTXLoader2() {
    }
    KTXLoader2.use = function(resource, next) {
      if (resource.extension === "ktx" && resource.data) {
        try {
          var url_1 = resource.name || resource.url;
          var _a3 = parseKTX(url_1, resource.data, this.loadKeyValueData), compressed = _a3.compressed, uncompressed = _a3.uncompressed, kvData_1 = _a3.kvData;
          if (compressed) {
            var result = registerCompressedTextures(url_1, compressed, resource.metadata);
            if (kvData_1 && result.textures) {
              for (var textureId in result.textures) {
                result.textures[textureId].baseTexture.ktxKeyValueData = kvData_1;
              }
            }
            Object.assign(resource, result);
          } else if (uncompressed) {
            var textures_1 = {};
            uncompressed.forEach(function(image, i) {
              var texture = new Texture(new BaseTexture(image.resource, {
                mipmap: MIPMAP_MODES.OFF,
                alphaMode: ALPHA_MODES.NO_PREMULTIPLIED_ALPHA,
                type: image.type,
                format: image.format
              }));
              var cacheID = url_1 + "-" + (i + 1);
              if (kvData_1) {
                texture.baseTexture.ktxKeyValueData = kvData_1;
              }
              BaseTexture.addToCache(texture.baseTexture, cacheID);
              Texture.addToCache(texture, cacheID);
              if (i === 0) {
                textures_1[url_1] = texture;
                BaseTexture.addToCache(texture.baseTexture, url_1);
                Texture.addToCache(texture, url_1);
              }
              textures_1[cacheID] = texture;
            });
            Object.assign(resource, { textures: textures_1 });
          }
        } catch (err) {
          next(err);
          return;
        }
      }
      next();
    };
    KTXLoader2.extension = ExtensionType.Loader;
    KTXLoader2.loadKeyValueData = false;
    return KTXLoader2;
  }()
);

// node_modules/.pnpm/@pixi+particle-container@6.5.2_@pixi+constants@6.5.2_@pixi+core@6.5.2_@pixi+display@6.5.2_@pi_lfuc5qfviqirmsz3kmtpievute/node_modules/@pixi/particle-container/dist/esm/particle-container.mjs
var extendStatics3 = function(d, b) {
  extendStatics3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) {
      if (b2.hasOwnProperty(p)) {
        d2[p] = b2[p];
      }
    }
  };
  return extendStatics3(d, b);
};
function __extends3(d, b) {
  extendStatics3(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var ParticleContainer = (
  /** @class */
  function(_super) {
    __extends3(ParticleContainer2, _super);
    function ParticleContainer2(maxSize, properties, batchSize, autoResize) {
      if (maxSize === void 0) {
        maxSize = 1500;
      }
      if (batchSize === void 0) {
        batchSize = 16384;
      }
      if (autoResize === void 0) {
        autoResize = false;
      }
      var _this = _super.call(this) || this;
      var maxBatchSize = 16384;
      if (batchSize > maxBatchSize) {
        batchSize = maxBatchSize;
      }
      _this._properties = [false, true, false, false, false];
      _this._maxSize = maxSize;
      _this._batchSize = batchSize;
      _this._buffers = null;
      _this._bufferUpdateIDs = [];
      _this._updateID = 0;
      _this.interactiveChildren = false;
      _this.blendMode = BLEND_MODES.NORMAL;
      _this.autoResize = autoResize;
      _this.roundPixels = true;
      _this.baseTexture = null;
      _this.setProperties(properties);
      _this._tint = 0;
      _this.tintRgb = new Float32Array(4);
      _this.tint = 16777215;
      return _this;
    }
    ParticleContainer2.prototype.setProperties = function(properties) {
      if (properties) {
        this._properties[0] = "vertices" in properties || "scale" in properties ? !!properties.vertices || !!properties.scale : this._properties[0];
        this._properties[1] = "position" in properties ? !!properties.position : this._properties[1];
        this._properties[2] = "rotation" in properties ? !!properties.rotation : this._properties[2];
        this._properties[3] = "uvs" in properties ? !!properties.uvs : this._properties[3];
        this._properties[4] = "tint" in properties || "alpha" in properties ? !!properties.tint || !!properties.alpha : this._properties[4];
      }
    };
    ParticleContainer2.prototype.updateTransform = function() {
      this.displayObjectUpdateTransform();
    };
    Object.defineProperty(ParticleContainer2.prototype, "tint", {
      /**
       * The tint applied to the container. This is a hex value.
       * A value of 0xFFFFFF will remove any tint effect.
       * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
       * @default 0xFFFFFF
       */
      get: function() {
        return this._tint;
      },
      set: function(value) {
        this._tint = value;
        hex2rgb(value, this.tintRgb);
      },
      enumerable: false,
      configurable: true
    });
    ParticleContainer2.prototype.render = function(renderer) {
      var _this = this;
      if (!this.visible || this.worldAlpha <= 0 || !this.children.length || !this.renderable) {
        return;
      }
      if (!this.baseTexture) {
        this.baseTexture = this.children[0]._texture.baseTexture;
        if (!this.baseTexture.valid) {
          this.baseTexture.once("update", function() {
            return _this.onChildrenChange(0);
          });
        }
      }
      renderer.batch.setObjectRenderer(renderer.plugins.particle);
      renderer.plugins.particle.render(this);
    };
    ParticleContainer2.prototype.onChildrenChange = function(smallestChildIndex) {
      var bufferIndex = Math.floor(smallestChildIndex / this._batchSize);
      while (this._bufferUpdateIDs.length < bufferIndex) {
        this._bufferUpdateIDs.push(0);
      }
      this._bufferUpdateIDs[bufferIndex] = ++this._updateID;
    };
    ParticleContainer2.prototype.dispose = function() {
      if (this._buffers) {
        for (var i = 0; i < this._buffers.length; ++i) {
          this._buffers[i].destroy();
        }
        this._buffers = null;
      }
    };
    ParticleContainer2.prototype.destroy = function(options) {
      _super.prototype.destroy.call(this, options);
      this.dispose();
      this._properties = null;
      this._buffers = null;
      this._bufferUpdateIDs = null;
    };
    return ParticleContainer2;
  }(Container)
);
var ParticleBuffer = (
  /** @class */
  function() {
    function ParticleBuffer2(properties, dynamicPropertyFlags, size) {
      this.geometry = new Geometry();
      this.indexBuffer = null;
      this.size = size;
      this.dynamicProperties = [];
      this.staticProperties = [];
      for (var i = 0; i < properties.length; ++i) {
        var property = properties[i];
        property = {
          attributeName: property.attributeName,
          size: property.size,
          uploadFunction: property.uploadFunction,
          type: property.type || TYPES.FLOAT,
          offset: property.offset
        };
        if (dynamicPropertyFlags[i]) {
          this.dynamicProperties.push(property);
        } else {
          this.staticProperties.push(property);
        }
      }
      this.staticStride = 0;
      this.staticBuffer = null;
      this.staticData = null;
      this.staticDataUint32 = null;
      this.dynamicStride = 0;
      this.dynamicBuffer = null;
      this.dynamicData = null;
      this.dynamicDataUint32 = null;
      this._updateID = 0;
      this.initBuffers();
    }
    ParticleBuffer2.prototype.initBuffers = function() {
      var geometry = this.geometry;
      var dynamicOffset = 0;
      this.indexBuffer = new Buffer(createIndicesForQuads(this.size), true, true);
      geometry.addIndex(this.indexBuffer);
      this.dynamicStride = 0;
      for (var i = 0; i < this.dynamicProperties.length; ++i) {
        var property = this.dynamicProperties[i];
        property.offset = dynamicOffset;
        dynamicOffset += property.size;
        this.dynamicStride += property.size;
      }
      var dynBuffer = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
      this.dynamicData = new Float32Array(dynBuffer);
      this.dynamicDataUint32 = new Uint32Array(dynBuffer);
      this.dynamicBuffer = new Buffer(this.dynamicData, false, false);
      var staticOffset = 0;
      this.staticStride = 0;
      for (var i = 0; i < this.staticProperties.length; ++i) {
        var property = this.staticProperties[i];
        property.offset = staticOffset;
        staticOffset += property.size;
        this.staticStride += property.size;
      }
      var statBuffer = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
      this.staticData = new Float32Array(statBuffer);
      this.staticDataUint32 = new Uint32Array(statBuffer);
      this.staticBuffer = new Buffer(this.staticData, true, false);
      for (var i = 0; i < this.dynamicProperties.length; ++i) {
        var property = this.dynamicProperties[i];
        geometry.addAttribute(property.attributeName, this.dynamicBuffer, 0, property.type === TYPES.UNSIGNED_BYTE, property.type, this.dynamicStride * 4, property.offset * 4);
      }
      for (var i = 0; i < this.staticProperties.length; ++i) {
        var property = this.staticProperties[i];
        geometry.addAttribute(property.attributeName, this.staticBuffer, 0, property.type === TYPES.UNSIGNED_BYTE, property.type, this.staticStride * 4, property.offset * 4);
      }
    };
    ParticleBuffer2.prototype.uploadDynamic = function(children, startIndex, amount) {
      for (var i = 0; i < this.dynamicProperties.length; i++) {
        var property = this.dynamicProperties[i];
        property.uploadFunction(children, startIndex, amount, property.type === TYPES.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, property.offset);
      }
      this.dynamicBuffer._updateID++;
    };
    ParticleBuffer2.prototype.uploadStatic = function(children, startIndex, amount) {
      for (var i = 0; i < this.staticProperties.length; i++) {
        var property = this.staticProperties[i];
        property.uploadFunction(children, startIndex, amount, property.type === TYPES.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData, this.staticStride, property.offset);
      }
      this.staticBuffer._updateID++;
    };
    ParticleBuffer2.prototype.destroy = function() {
      this.indexBuffer = null;
      this.dynamicProperties = null;
      this.dynamicBuffer = null;
      this.dynamicData = null;
      this.dynamicDataUint32 = null;
      this.staticProperties = null;
      this.staticBuffer = null;
      this.staticData = null;
      this.staticDataUint32 = null;
      this.geometry.destroy();
    };
    return ParticleBuffer2;
  }()
);
var fragment = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n    gl_FragColor = color;\n}";
var vertex = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nattribute vec2 aPositionCoord;\nattribute float aRotation;\n\nuniform mat3 translationMatrix;\nuniform vec4 uColor;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void){\n    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);\n    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);\n\n    vec2 v = vec2(x, y);\n    v = v + aPositionCoord;\n\n    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vColor = aColor * uColor;\n}\n";
var ParticleRenderer = (
  /** @class */
  function(_super) {
    __extends3(ParticleRenderer2, _super);
    function ParticleRenderer2(renderer) {
      var _this = _super.call(this, renderer) || this;
      _this.shader = null;
      _this.properties = null;
      _this.tempMatrix = new Matrix();
      _this.properties = [
        // verticesData
        {
          attributeName: "aVertexPosition",
          size: 2,
          uploadFunction: _this.uploadVertices,
          offset: 0
        },
        // positionData
        {
          attributeName: "aPositionCoord",
          size: 2,
          uploadFunction: _this.uploadPosition,
          offset: 0
        },
        // rotationData
        {
          attributeName: "aRotation",
          size: 1,
          uploadFunction: _this.uploadRotation,
          offset: 0
        },
        // uvsData
        {
          attributeName: "aTextureCoord",
          size: 2,
          uploadFunction: _this.uploadUvs,
          offset: 0
        },
        // tintData
        {
          attributeName: "aColor",
          size: 1,
          type: TYPES.UNSIGNED_BYTE,
          uploadFunction: _this.uploadTint,
          offset: 0
        }
      ];
      _this.shader = Shader.from(vertex, fragment, {});
      _this.state = State.for2d();
      return _this;
    }
    ParticleRenderer2.prototype.render = function(container) {
      var children = container.children;
      var maxSize = container._maxSize;
      var batchSize = container._batchSize;
      var renderer = this.renderer;
      var totalChildren = children.length;
      if (totalChildren === 0) {
        return;
      } else if (totalChildren > maxSize && !container.autoResize) {
        totalChildren = maxSize;
      }
      var buffers = container._buffers;
      if (!buffers) {
        buffers = container._buffers = this.generateBuffers(container);
      }
      var baseTexture = children[0]._texture.baseTexture;
      var premultiplied = baseTexture.alphaMode > 0;
      this.state.blendMode = correctBlendMode(container.blendMode, premultiplied);
      renderer.state.set(this.state);
      var gl = renderer.gl;
      var m = container.worldTransform.copyTo(this.tempMatrix);
      m.prepend(renderer.globalUniforms.uniforms.projectionMatrix);
      this.shader.uniforms.translationMatrix = m.toArray(true);
      this.shader.uniforms.uColor = premultiplyRgba(container.tintRgb, container.worldAlpha, this.shader.uniforms.uColor, premultiplied);
      this.shader.uniforms.uSampler = baseTexture;
      this.renderer.shader.bind(this.shader);
      var updateStatic = false;
      for (var i = 0, j = 0; i < totalChildren; i += batchSize, j += 1) {
        var amount = totalChildren - i;
        if (amount > batchSize) {
          amount = batchSize;
        }
        if (j >= buffers.length) {
          buffers.push(this._generateOneMoreBuffer(container));
        }
        var buffer = buffers[j];
        buffer.uploadDynamic(children, i, amount);
        var bid = container._bufferUpdateIDs[j] || 0;
        updateStatic = updateStatic || buffer._updateID < bid;
        if (updateStatic) {
          buffer._updateID = container._updateID;
          buffer.uploadStatic(children, i, amount);
        }
        renderer.geometry.bind(buffer.geometry);
        gl.drawElements(gl.TRIANGLES, amount * 6, gl.UNSIGNED_SHORT, 0);
      }
    };
    ParticleRenderer2.prototype.generateBuffers = function(container) {
      var buffers = [];
      var size = container._maxSize;
      var batchSize = container._batchSize;
      var dynamicPropertyFlags = container._properties;
      for (var i = 0; i < size; i += batchSize) {
        buffers.push(new ParticleBuffer(this.properties, dynamicPropertyFlags, batchSize));
      }
      return buffers;
    };
    ParticleRenderer2.prototype._generateOneMoreBuffer = function(container) {
      var batchSize = container._batchSize;
      var dynamicPropertyFlags = container._properties;
      return new ParticleBuffer(this.properties, dynamicPropertyFlags, batchSize);
    };
    ParticleRenderer2.prototype.uploadVertices = function(children, startIndex, amount, array, stride, offset) {
      var w0 = 0;
      var w1 = 0;
      var h0 = 0;
      var h1 = 0;
      for (var i = 0; i < amount; ++i) {
        var sprite = children[startIndex + i];
        var texture = sprite._texture;
        var sx = sprite.scale.x;
        var sy = sprite.scale.y;
        var trim = texture.trim;
        var orig = texture.orig;
        if (trim) {
          w1 = trim.x - sprite.anchor.x * orig.width;
          w0 = w1 + trim.width;
          h1 = trim.y - sprite.anchor.y * orig.height;
          h0 = h1 + trim.height;
        } else {
          w0 = orig.width * (1 - sprite.anchor.x);
          w1 = orig.width * -sprite.anchor.x;
          h0 = orig.height * (1 - sprite.anchor.y);
          h1 = orig.height * -sprite.anchor.y;
        }
        array[offset] = w1 * sx;
        array[offset + 1] = h1 * sy;
        array[offset + stride] = w0 * sx;
        array[offset + stride + 1] = h1 * sy;
        array[offset + stride * 2] = w0 * sx;
        array[offset + stride * 2 + 1] = h0 * sy;
        array[offset + stride * 3] = w1 * sx;
        array[offset + stride * 3 + 1] = h0 * sy;
        offset += stride * 4;
      }
    };
    ParticleRenderer2.prototype.uploadPosition = function(children, startIndex, amount, array, stride, offset) {
      for (var i = 0; i < amount; i++) {
        var spritePosition = children[startIndex + i].position;
        array[offset] = spritePosition.x;
        array[offset + 1] = spritePosition.y;
        array[offset + stride] = spritePosition.x;
        array[offset + stride + 1] = spritePosition.y;
        array[offset + stride * 2] = spritePosition.x;
        array[offset + stride * 2 + 1] = spritePosition.y;
        array[offset + stride * 3] = spritePosition.x;
        array[offset + stride * 3 + 1] = spritePosition.y;
        offset += stride * 4;
      }
    };
    ParticleRenderer2.prototype.uploadRotation = function(children, startIndex, amount, array, stride, offset) {
      for (var i = 0; i < amount; i++) {
        var spriteRotation = children[startIndex + i].rotation;
        array[offset] = spriteRotation;
        array[offset + stride] = spriteRotation;
        array[offset + stride * 2] = spriteRotation;
        array[offset + stride * 3] = spriteRotation;
        offset += stride * 4;
      }
    };
    ParticleRenderer2.prototype.uploadUvs = function(children, startIndex, amount, array, stride, offset) {
      for (var i = 0; i < amount; ++i) {
        var textureUvs = children[startIndex + i]._texture._uvs;
        if (textureUvs) {
          array[offset] = textureUvs.x0;
          array[offset + 1] = textureUvs.y0;
          array[offset + stride] = textureUvs.x1;
          array[offset + stride + 1] = textureUvs.y1;
          array[offset + stride * 2] = textureUvs.x2;
          array[offset + stride * 2 + 1] = textureUvs.y2;
          array[offset + stride * 3] = textureUvs.x3;
          array[offset + stride * 3 + 1] = textureUvs.y3;
          offset += stride * 4;
        } else {
          array[offset] = 0;
          array[offset + 1] = 0;
          array[offset + stride] = 0;
          array[offset + stride + 1] = 0;
          array[offset + stride * 2] = 0;
          array[offset + stride * 2 + 1] = 0;
          array[offset + stride * 3] = 0;
          array[offset + stride * 3 + 1] = 0;
          offset += stride * 4;
        }
      }
    };
    ParticleRenderer2.prototype.uploadTint = function(children, startIndex, amount, array, stride, offset) {
      for (var i = 0; i < amount; ++i) {
        var sprite = children[startIndex + i];
        var premultiplied = sprite._texture.baseTexture.alphaMode > 0;
        var alpha = sprite.alpha;
        var argb = alpha < 1 && premultiplied ? premultiplyTint(sprite._tintRGB, alpha) : sprite._tintRGB + (alpha * 255 << 24);
        array[offset] = argb;
        array[offset + stride] = argb;
        array[offset + stride * 2] = argb;
        array[offset + stride * 3] = argb;
        offset += stride * 4;
      }
    };
    ParticleRenderer2.prototype.destroy = function() {
      _super.prototype.destroy.call(this);
      if (this.shader) {
        this.shader.destroy();
        this.shader = null;
      }
      this.tempMatrix = null;
    };
    ParticleRenderer2.extension = {
      name: "particle",
      type: ExtensionType.RendererPlugin
    };
    return ParticleRenderer2;
  }(ObjectRenderer)
);

// node_modules/.pnpm/@pixi+graphics@6.5.2_@pixi+constants@6.5.2_@pixi+core@6.5.2_@pixi+display@6.5.2_@pixi+math@6._l42jcpdrrtn23eimg2oaatfbw4/node_modules/@pixi/graphics/dist/esm/graphics.mjs
var LINE_JOIN;
(function(LINE_JOIN2) {
  LINE_JOIN2["MITER"] = "miter";
  LINE_JOIN2["BEVEL"] = "bevel";
  LINE_JOIN2["ROUND"] = "round";
})(LINE_JOIN || (LINE_JOIN = {}));
var LINE_CAP;
(function(LINE_CAP2) {
  LINE_CAP2["BUTT"] = "butt";
  LINE_CAP2["ROUND"] = "round";
  LINE_CAP2["SQUARE"] = "square";
})(LINE_CAP || (LINE_CAP = {}));
var GRAPHICS_CURVES = {
  adaptive: true,
  maxLength: 10,
  minSegments: 8,
  maxSegments: 2048,
  epsilon: 1e-4,
  _segmentsCount: function(length, defaultSegments) {
    if (defaultSegments === void 0) {
      defaultSegments = 20;
    }
    if (!this.adaptive || !length || isNaN(length)) {
      return defaultSegments;
    }
    var result = Math.ceil(length / this.maxLength);
    if (result < this.minSegments) {
      result = this.minSegments;
    } else if (result > this.maxSegments) {
      result = this.maxSegments;
    }
    return result;
  }
};
var FillStyle = (
  /** @class */
  function() {
    function FillStyle2() {
      this.color = 16777215;
      this.alpha = 1;
      this.texture = Texture.WHITE;
      this.matrix = null;
      this.visible = false;
      this.reset();
    }
    FillStyle2.prototype.clone = function() {
      var obj = new FillStyle2();
      obj.color = this.color;
      obj.alpha = this.alpha;
      obj.texture = this.texture;
      obj.matrix = this.matrix;
      obj.visible = this.visible;
      return obj;
    };
    FillStyle2.prototype.reset = function() {
      this.color = 16777215;
      this.alpha = 1;
      this.texture = Texture.WHITE;
      this.matrix = null;
      this.visible = false;
    };
    FillStyle2.prototype.destroy = function() {
      this.texture = null;
      this.matrix = null;
    };
    return FillStyle2;
  }()
);
var extendStatics4 = function(d, b) {
  extendStatics4 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) {
      if (b2.hasOwnProperty(p)) {
        d2[p] = b2[p];
      }
    }
  };
  return extendStatics4(d, b);
};
function __extends4(d, b) {
  extendStatics4(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function fixOrientation(points, hole) {
  var _a3, _b2;
  if (hole === void 0) {
    hole = false;
  }
  var m = points.length;
  if (m < 6) {
    return;
  }
  var area = 0;
  for (var i = 0, x1 = points[m - 2], y1 = points[m - 1]; i < m; i += 2) {
    var x2 = points[i];
    var y2 = points[i + 1];
    area += (x2 - x1) * (y2 + y1);
    x1 = x2;
    y1 = y2;
  }
  if (!hole && area > 0 || hole && area <= 0) {
    var n = m / 2;
    for (var i = n + n % 2; i < m; i += 2) {
      var i1 = m - i - 2;
      var i2 = m - i - 1;
      var i3 = i;
      var i4 = i + 1;
      _a3 = [points[i3], points[i1]], points[i1] = _a3[0], points[i3] = _a3[1];
      _b2 = [points[i4], points[i2]], points[i2] = _b2[0], points[i4] = _b2[1];
    }
  }
}
var buildPoly = {
  build: function(graphicsData) {
    graphicsData.points = graphicsData.shape.points.slice();
  },
  triangulate: function(graphicsData, graphicsGeometry) {
    var points = graphicsData.points;
    var holes = graphicsData.holes;
    var verts = graphicsGeometry.points;
    var indices2 = graphicsGeometry.indices;
    if (points.length >= 6) {
      fixOrientation(points, false);
      var holeArray = [];
      for (var i = 0; i < holes.length; i++) {
        var hole = holes[i];
        fixOrientation(hole.points, true);
        holeArray.push(points.length / 2);
        points = points.concat(hole.points);
      }
      var triangles = (0, import_earcut.default)(points, holeArray, 2);
      if (!triangles) {
        return;
      }
      var vertPos = verts.length / 2;
      for (var i = 0; i < triangles.length; i += 3) {
        indices2.push(triangles[i] + vertPos);
        indices2.push(triangles[i + 1] + vertPos);
        indices2.push(triangles[i + 2] + vertPos);
      }
      for (var i = 0; i < points.length; i++) {
        verts.push(points[i]);
      }
    }
  }
};
var buildCircle = {
  build: function(graphicsData) {
    var points = graphicsData.points;
    var x;
    var y;
    var dx;
    var dy;
    var rx;
    var ry;
    if (graphicsData.type === SHAPES.CIRC) {
      var circle = graphicsData.shape;
      x = circle.x;
      y = circle.y;
      rx = ry = circle.radius;
      dx = dy = 0;
    } else if (graphicsData.type === SHAPES.ELIP) {
      var ellipse = graphicsData.shape;
      x = ellipse.x;
      y = ellipse.y;
      rx = ellipse.width;
      ry = ellipse.height;
      dx = dy = 0;
    } else {
      var roundedRect = graphicsData.shape;
      var halfWidth = roundedRect.width / 2;
      var halfHeight = roundedRect.height / 2;
      x = roundedRect.x + halfWidth;
      y = roundedRect.y + halfHeight;
      rx = ry = Math.max(0, Math.min(roundedRect.radius, Math.min(halfWidth, halfHeight)));
      dx = halfWidth - rx;
      dy = halfHeight - ry;
    }
    if (!(rx >= 0 && ry >= 0 && dx >= 0 && dy >= 0)) {
      points.length = 0;
      return;
    }
    var n = Math.ceil(2.3 * Math.sqrt(rx + ry));
    var m = n * 8 + (dx ? 4 : 0) + (dy ? 4 : 0);
    points.length = m;
    if (m === 0) {
      return;
    }
    if (n === 0) {
      points.length = 8;
      points[0] = points[6] = x + dx;
      points[1] = points[3] = y + dy;
      points[2] = points[4] = x - dx;
      points[5] = points[7] = y - dy;
      return;
    }
    var j1 = 0;
    var j2 = n * 4 + (dx ? 2 : 0) + 2;
    var j3 = j2;
    var j4 = m;
    {
      var x0 = dx + rx;
      var y0 = dy;
      var x1 = x + x0;
      var x2 = x - x0;
      var y1 = y + y0;
      points[j1++] = x1;
      points[j1++] = y1;
      points[--j2] = y1;
      points[--j2] = x2;
      if (dy) {
        var y2 = y - y0;
        points[j3++] = x2;
        points[j3++] = y2;
        points[--j4] = y2;
        points[--j4] = x1;
      }
    }
    for (var i = 1; i < n; i++) {
      var a = Math.PI / 2 * (i / n);
      var x0 = dx + Math.cos(a) * rx;
      var y0 = dy + Math.sin(a) * ry;
      var x1 = x + x0;
      var x2 = x - x0;
      var y1 = y + y0;
      var y2 = y - y0;
      points[j1++] = x1;
      points[j1++] = y1;
      points[--j2] = y1;
      points[--j2] = x2;
      points[j3++] = x2;
      points[j3++] = y2;
      points[--j4] = y2;
      points[--j4] = x1;
    }
    {
      var x0 = dx;
      var y0 = dy + ry;
      var x1 = x + x0;
      var x2 = x - x0;
      var y1 = y + y0;
      var y2 = y - y0;
      points[j1++] = x1;
      points[j1++] = y1;
      points[--j4] = y2;
      points[--j4] = x1;
      if (dx) {
        points[j1++] = x2;
        points[j1++] = y1;
        points[--j4] = y2;
        points[--j4] = x2;
      }
    }
  },
  triangulate: function(graphicsData, graphicsGeometry) {
    var points = graphicsData.points;
    var verts = graphicsGeometry.points;
    var indices2 = graphicsGeometry.indices;
    if (points.length === 0) {
      return;
    }
    var vertPos = verts.length / 2;
    var center = vertPos;
    var x;
    var y;
    if (graphicsData.type !== SHAPES.RREC) {
      var circle = graphicsData.shape;
      x = circle.x;
      y = circle.y;
    } else {
      var roundedRect = graphicsData.shape;
      x = roundedRect.x + roundedRect.width / 2;
      y = roundedRect.y + roundedRect.height / 2;
    }
    var matrix = graphicsData.matrix;
    verts.push(graphicsData.matrix ? matrix.a * x + matrix.c * y + matrix.tx : x, graphicsData.matrix ? matrix.b * x + matrix.d * y + matrix.ty : y);
    vertPos++;
    verts.push(points[0], points[1]);
    for (var i = 2; i < points.length; i += 2) {
      verts.push(points[i], points[i + 1]);
      indices2.push(vertPos++, center, vertPos);
    }
    indices2.push(center + 1, center, vertPos);
  }
};
var buildRectangle = {
  build: function(graphicsData) {
    var rectData = graphicsData.shape;
    var x = rectData.x;
    var y = rectData.y;
    var width = rectData.width;
    var height = rectData.height;
    var points = graphicsData.points;
    points.length = 0;
    points.push(x, y, x + width, y, x + width, y + height, x, y + height);
  },
  triangulate: function(graphicsData, graphicsGeometry) {
    var points = graphicsData.points;
    var verts = graphicsGeometry.points;
    var vertPos = verts.length / 2;
    verts.push(points[0], points[1], points[2], points[3], points[6], points[7], points[4], points[5]);
    graphicsGeometry.indices.push(vertPos, vertPos + 1, vertPos + 2, vertPos + 1, vertPos + 2, vertPos + 3);
  }
};
function getPt(n1, n2, perc) {
  var diff = n2 - n1;
  return n1 + diff * perc;
}
function quadraticBezierCurve(fromX, fromY, cpX, cpY, toX, toY, out) {
  if (out === void 0) {
    out = [];
  }
  var n = 20;
  var points = out;
  var xa = 0;
  var ya = 0;
  var xb = 0;
  var yb = 0;
  var x = 0;
  var y = 0;
  for (var i = 0, j = 0; i <= n; ++i) {
    j = i / n;
    xa = getPt(fromX, cpX, j);
    ya = getPt(fromY, cpY, j);
    xb = getPt(cpX, toX, j);
    yb = getPt(cpY, toY, j);
    x = getPt(xa, xb, j);
    y = getPt(ya, yb, j);
    if (i === 0 && points[points.length - 2] === x && points[points.length - 1] === y) {
      continue;
    }
    points.push(x, y);
  }
  return points;
}
var buildRoundedRectangle = {
  build: function(graphicsData) {
    if (Graphics.nextRoundedRectBehavior) {
      buildCircle.build(graphicsData);
      return;
    }
    var rrectData = graphicsData.shape;
    var points = graphicsData.points;
    var x = rrectData.x;
    var y = rrectData.y;
    var width = rrectData.width;
    var height = rrectData.height;
    var radius = Math.max(0, Math.min(rrectData.radius, Math.min(width, height) / 2));
    points.length = 0;
    if (!radius) {
      points.push(x, y, x + width, y, x + width, y + height, x, y + height);
    } else {
      quadraticBezierCurve(x, y + radius, x, y, x + radius, y, points);
      quadraticBezierCurve(x + width - radius, y, x + width, y, x + width, y + radius, points);
      quadraticBezierCurve(x + width, y + height - radius, x + width, y + height, x + width - radius, y + height, points);
      quadraticBezierCurve(x + radius, y + height, x, y + height, x, y + height - radius, points);
    }
  },
  triangulate: function(graphicsData, graphicsGeometry) {
    if (Graphics.nextRoundedRectBehavior) {
      buildCircle.triangulate(graphicsData, graphicsGeometry);
      return;
    }
    var points = graphicsData.points;
    var verts = graphicsGeometry.points;
    var indices2 = graphicsGeometry.indices;
    var vecPos = verts.length / 2;
    var triangles = (0, import_earcut.default)(points, null, 2);
    for (var i = 0, j = triangles.length; i < j; i += 3) {
      indices2.push(triangles[i] + vecPos);
      indices2.push(triangles[i + 1] + vecPos);
      indices2.push(triangles[i + 2] + vecPos);
    }
    for (var i = 0, j = points.length; i < j; i++) {
      verts.push(points[i], points[++i]);
    }
  }
};
function square(x, y, nx, ny, innerWeight, outerWeight, clockwise, verts) {
  var ix = x - nx * innerWeight;
  var iy = y - ny * innerWeight;
  var ox = x + nx * outerWeight;
  var oy = y + ny * outerWeight;
  var exx;
  var eyy;
  if (clockwise) {
    exx = ny;
    eyy = -nx;
  } else {
    exx = -ny;
    eyy = nx;
  }
  var eix = ix + exx;
  var eiy = iy + eyy;
  var eox = ox + exx;
  var eoy = oy + eyy;
  verts.push(eix, eiy);
  verts.push(eox, eoy);
  return 2;
}
function round(cx, cy, sx, sy, ex, ey, verts, clockwise) {
  var cx2p0x = sx - cx;
  var cy2p0y = sy - cy;
  var angle0 = Math.atan2(cx2p0x, cy2p0y);
  var angle1 = Math.atan2(ex - cx, ey - cy);
  if (clockwise && angle0 < angle1) {
    angle0 += Math.PI * 2;
  } else if (!clockwise && angle0 > angle1) {
    angle1 += Math.PI * 2;
  }
  var startAngle = angle0;
  var angleDiff = angle1 - angle0;
  var absAngleDiff = Math.abs(angleDiff);
  var radius = Math.sqrt(cx2p0x * cx2p0x + cy2p0y * cy2p0y);
  var segCount = (15 * absAngleDiff * Math.sqrt(radius) / Math.PI >> 0) + 1;
  var angleInc = angleDiff / segCount;
  startAngle += angleInc;
  if (clockwise) {
    verts.push(cx, cy);
    verts.push(sx, sy);
    for (var i = 1, angle = startAngle; i < segCount; i++, angle += angleInc) {
      verts.push(cx, cy);
      verts.push(cx + Math.sin(angle) * radius, cy + Math.cos(angle) * radius);
    }
    verts.push(cx, cy);
    verts.push(ex, ey);
  } else {
    verts.push(sx, sy);
    verts.push(cx, cy);
    for (var i = 1, angle = startAngle; i < segCount; i++, angle += angleInc) {
      verts.push(cx + Math.sin(angle) * radius, cy + Math.cos(angle) * radius);
      verts.push(cx, cy);
    }
    verts.push(ex, ey);
    verts.push(cx, cy);
  }
  return segCount * 2;
}
function buildNonNativeLine(graphicsData, graphicsGeometry) {
  var shape = graphicsData.shape;
  var points = graphicsData.points || shape.points.slice();
  var eps = graphicsGeometry.closePointEps;
  if (points.length === 0) {
    return;
  }
  var style = graphicsData.lineStyle;
  var firstPoint = new Point(points[0], points[1]);
  var lastPoint = new Point(points[points.length - 2], points[points.length - 1]);
  var closedShape = shape.type !== SHAPES.POLY || shape.closeStroke;
  var closedPath = Math.abs(firstPoint.x - lastPoint.x) < eps && Math.abs(firstPoint.y - lastPoint.y) < eps;
  if (closedShape) {
    points = points.slice();
    if (closedPath) {
      points.pop();
      points.pop();
      lastPoint.set(points[points.length - 2], points[points.length - 1]);
    }
    var midPointX = (firstPoint.x + lastPoint.x) * 0.5;
    var midPointY = (lastPoint.y + firstPoint.y) * 0.5;
    points.unshift(midPointX, midPointY);
    points.push(midPointX, midPointY);
  }
  var verts = graphicsGeometry.points;
  var length = points.length / 2;
  var indexCount = points.length;
  var indexStart = verts.length / 2;
  var width = style.width / 2;
  var widthSquared = width * width;
  var miterLimitSquared = style.miterLimit * style.miterLimit;
  var x0 = points[0];
  var y0 = points[1];
  var x1 = points[2];
  var y1 = points[3];
  var x2 = 0;
  var y2 = 0;
  var perpx = -(y0 - y1);
  var perpy = x0 - x1;
  var perp1x = 0;
  var perp1y = 0;
  var dist = Math.sqrt(perpx * perpx + perpy * perpy);
  perpx /= dist;
  perpy /= dist;
  perpx *= width;
  perpy *= width;
  var ratio = style.alignment;
  var innerWeight = (1 - ratio) * 2;
  var outerWeight = ratio * 2;
  if (!closedShape) {
    if (style.cap === LINE_CAP.ROUND) {
      indexCount += round(x0 - perpx * (innerWeight - outerWeight) * 0.5, y0 - perpy * (innerWeight - outerWeight) * 0.5, x0 - perpx * innerWeight, y0 - perpy * innerWeight, x0 + perpx * outerWeight, y0 + perpy * outerWeight, verts, true) + 2;
    } else if (style.cap === LINE_CAP.SQUARE) {
      indexCount += square(x0, y0, perpx, perpy, innerWeight, outerWeight, true, verts);
    }
  }
  verts.push(x0 - perpx * innerWeight, y0 - perpy * innerWeight);
  verts.push(x0 + perpx * outerWeight, y0 + perpy * outerWeight);
  for (var i = 1; i < length - 1; ++i) {
    x0 = points[(i - 1) * 2];
    y0 = points[(i - 1) * 2 + 1];
    x1 = points[i * 2];
    y1 = points[i * 2 + 1];
    x2 = points[(i + 1) * 2];
    y2 = points[(i + 1) * 2 + 1];
    perpx = -(y0 - y1);
    perpy = x0 - x1;
    dist = Math.sqrt(perpx * perpx + perpy * perpy);
    perpx /= dist;
    perpy /= dist;
    perpx *= width;
    perpy *= width;
    perp1x = -(y1 - y2);
    perp1y = x1 - x2;
    dist = Math.sqrt(perp1x * perp1x + perp1y * perp1y);
    perp1x /= dist;
    perp1y /= dist;
    perp1x *= width;
    perp1y *= width;
    var dx0 = x1 - x0;
    var dy0 = y0 - y1;
    var dx1 = x1 - x2;
    var dy1 = y2 - y1;
    var cross = dy0 * dx1 - dy1 * dx0;
    var clockwise = cross < 0;
    if (Math.abs(cross) < 0.1) {
      verts.push(x1 - perpx * innerWeight, y1 - perpy * innerWeight);
      verts.push(x1 + perpx * outerWeight, y1 + perpy * outerWeight);
      continue;
    }
    var c1 = (-perpx + x0) * (-perpy + y1) - (-perpx + x1) * (-perpy + y0);
    var c2 = (-perp1x + x2) * (-perp1y + y1) - (-perp1x + x1) * (-perp1y + y2);
    var px = (dx0 * c2 - dx1 * c1) / cross;
    var py = (dy1 * c1 - dy0 * c2) / cross;
    var pdist = (px - x1) * (px - x1) + (py - y1) * (py - y1);
    var imx = x1 + (px - x1) * innerWeight;
    var imy = y1 + (py - y1) * innerWeight;
    var omx = x1 - (px - x1) * outerWeight;
    var omy = y1 - (py - y1) * outerWeight;
    var smallerInsideSegmentSq = Math.min(dx0 * dx0 + dy0 * dy0, dx1 * dx1 + dy1 * dy1);
    var insideWeight = clockwise ? innerWeight : outerWeight;
    var smallerInsideDiagonalSq = smallerInsideSegmentSq + insideWeight * insideWeight * widthSquared;
    var insideMiterOk = pdist <= smallerInsideDiagonalSq;
    if (insideMiterOk) {
      if (style.join === LINE_JOIN.BEVEL || pdist / widthSquared > miterLimitSquared) {
        if (clockwise) {
          verts.push(imx, imy);
          verts.push(x1 + perpx * outerWeight, y1 + perpy * outerWeight);
          verts.push(imx, imy);
          verts.push(x1 + perp1x * outerWeight, y1 + perp1y * outerWeight);
        } else {
          verts.push(x1 - perpx * innerWeight, y1 - perpy * innerWeight);
          verts.push(omx, omy);
          verts.push(x1 - perp1x * innerWeight, y1 - perp1y * innerWeight);
          verts.push(omx, omy);
        }
        indexCount += 2;
      } else if (style.join === LINE_JOIN.ROUND) {
        if (clockwise) {
          verts.push(imx, imy);
          verts.push(x1 + perpx * outerWeight, y1 + perpy * outerWeight);
          indexCount += round(x1, y1, x1 + perpx * outerWeight, y1 + perpy * outerWeight, x1 + perp1x * outerWeight, y1 + perp1y * outerWeight, verts, true) + 4;
          verts.push(imx, imy);
          verts.push(x1 + perp1x * outerWeight, y1 + perp1y * outerWeight);
        } else {
          verts.push(x1 - perpx * innerWeight, y1 - perpy * innerWeight);
          verts.push(omx, omy);
          indexCount += round(x1, y1, x1 - perpx * innerWeight, y1 - perpy * innerWeight, x1 - perp1x * innerWeight, y1 - perp1y * innerWeight, verts, false) + 4;
          verts.push(x1 - perp1x * innerWeight, y1 - perp1y * innerWeight);
          verts.push(omx, omy);
        }
      } else {
        verts.push(imx, imy);
        verts.push(omx, omy);
      }
    } else {
      verts.push(x1 - perpx * innerWeight, y1 - perpy * innerWeight);
      verts.push(x1 + perpx * outerWeight, y1 + perpy * outerWeight);
      if (style.join === LINE_JOIN.ROUND) {
        if (clockwise) {
          indexCount += round(x1, y1, x1 + perpx * outerWeight, y1 + perpy * outerWeight, x1 + perp1x * outerWeight, y1 + perp1y * outerWeight, verts, true) + 2;
        } else {
          indexCount += round(x1, y1, x1 - perpx * innerWeight, y1 - perpy * innerWeight, x1 - perp1x * innerWeight, y1 - perp1y * innerWeight, verts, false) + 2;
        }
      } else if (style.join === LINE_JOIN.MITER && pdist / widthSquared <= miterLimitSquared) {
        if (clockwise) {
          verts.push(omx, omy);
          verts.push(omx, omy);
        } else {
          verts.push(imx, imy);
          verts.push(imx, imy);
        }
        indexCount += 2;
      }
      verts.push(x1 - perp1x * innerWeight, y1 - perp1y * innerWeight);
      verts.push(x1 + perp1x * outerWeight, y1 + perp1y * outerWeight);
      indexCount += 2;
    }
  }
  x0 = points[(length - 2) * 2];
  y0 = points[(length - 2) * 2 + 1];
  x1 = points[(length - 1) * 2];
  y1 = points[(length - 1) * 2 + 1];
  perpx = -(y0 - y1);
  perpy = x0 - x1;
  dist = Math.sqrt(perpx * perpx + perpy * perpy);
  perpx /= dist;
  perpy /= dist;
  perpx *= width;
  perpy *= width;
  verts.push(x1 - perpx * innerWeight, y1 - perpy * innerWeight);
  verts.push(x1 + perpx * outerWeight, y1 + perpy * outerWeight);
  if (!closedShape) {
    if (style.cap === LINE_CAP.ROUND) {
      indexCount += round(x1 - perpx * (innerWeight - outerWeight) * 0.5, y1 - perpy * (innerWeight - outerWeight) * 0.5, x1 - perpx * innerWeight, y1 - perpy * innerWeight, x1 + perpx * outerWeight, y1 + perpy * outerWeight, verts, false) + 2;
    } else if (style.cap === LINE_CAP.SQUARE) {
      indexCount += square(x1, y1, perpx, perpy, innerWeight, outerWeight, false, verts);
    }
  }
  var indices2 = graphicsGeometry.indices;
  var eps2 = GRAPHICS_CURVES.epsilon * GRAPHICS_CURVES.epsilon;
  for (var i = indexStart; i < indexCount + indexStart - 2; ++i) {
    x0 = verts[i * 2];
    y0 = verts[i * 2 + 1];
    x1 = verts[(i + 1) * 2];
    y1 = verts[(i + 1) * 2 + 1];
    x2 = verts[(i + 2) * 2];
    y2 = verts[(i + 2) * 2 + 1];
    if (Math.abs(x0 * (y1 - y2) + x1 * (y2 - y0) + x2 * (y0 - y1)) < eps2) {
      continue;
    }
    indices2.push(i, i + 1, i + 2);
  }
}
function buildNativeLine(graphicsData, graphicsGeometry) {
  var i = 0;
  var shape = graphicsData.shape;
  var points = graphicsData.points || shape.points;
  var closedShape = shape.type !== SHAPES.POLY || shape.closeStroke;
  if (points.length === 0) {
    return;
  }
  var verts = graphicsGeometry.points;
  var indices2 = graphicsGeometry.indices;
  var length = points.length / 2;
  var startIndex = verts.length / 2;
  var currentIndex = startIndex;
  verts.push(points[0], points[1]);
  for (i = 1; i < length; i++) {
    verts.push(points[i * 2], points[i * 2 + 1]);
    indices2.push(currentIndex, currentIndex + 1);
    currentIndex++;
  }
  if (closedShape) {
    indices2.push(currentIndex, startIndex);
  }
}
function buildLine(graphicsData, graphicsGeometry) {
  if (graphicsData.lineStyle.native) {
    buildNativeLine(graphicsData, graphicsGeometry);
  } else {
    buildNonNativeLine(graphicsData, graphicsGeometry);
  }
}
var ArcUtils = (
  /** @class */
  function() {
    function ArcUtils2() {
    }
    ArcUtils2.curveTo = function(x1, y1, x2, y2, radius, points) {
      var fromX = points[points.length - 2];
      var fromY = points[points.length - 1];
      var a1 = fromY - y1;
      var b1 = fromX - x1;
      var a2 = y2 - y1;
      var b2 = x2 - x1;
      var mm = Math.abs(a1 * b2 - b1 * a2);
      if (mm < 1e-8 || radius === 0) {
        if (points[points.length - 2] !== x1 || points[points.length - 1] !== y1) {
          points.push(x1, y1);
        }
        return null;
      }
      var dd = a1 * a1 + b1 * b1;
      var cc = a2 * a2 + b2 * b2;
      var tt = a1 * a2 + b1 * b2;
      var k1 = radius * Math.sqrt(dd) / mm;
      var k2 = radius * Math.sqrt(cc) / mm;
      var j1 = k1 * tt / dd;
      var j2 = k2 * tt / cc;
      var cx = k1 * b2 + k2 * b1;
      var cy = k1 * a2 + k2 * a1;
      var px = b1 * (k2 + j1);
      var py = a1 * (k2 + j1);
      var qx = b2 * (k1 + j2);
      var qy = a2 * (k1 + j2);
      var startAngle = Math.atan2(py - cy, px - cx);
      var endAngle = Math.atan2(qy - cy, qx - cx);
      return {
        cx: cx + x1,
        cy: cy + y1,
        radius,
        startAngle,
        endAngle,
        anticlockwise: b1 * a2 > b2 * a1
      };
    };
    ArcUtils2.arc = function(_startX, _startY, cx, cy, radius, startAngle, endAngle, _anticlockwise, points) {
      var sweep = endAngle - startAngle;
      var n = GRAPHICS_CURVES._segmentsCount(Math.abs(sweep) * radius, Math.ceil(Math.abs(sweep) / PI_2) * 40);
      var theta = sweep / (n * 2);
      var theta2 = theta * 2;
      var cTheta = Math.cos(theta);
      var sTheta = Math.sin(theta);
      var segMinus = n - 1;
      var remainder = segMinus % 1 / segMinus;
      for (var i = 0; i <= segMinus; ++i) {
        var real = i + remainder * i;
        var angle = theta + startAngle + theta2 * real;
        var c = Math.cos(angle);
        var s = -Math.sin(angle);
        points.push((cTheta * c + sTheta * s) * radius + cx, (cTheta * -s + sTheta * c) * radius + cy);
      }
    };
    return ArcUtils2;
  }()
);
var BezierUtils = (
  /** @class */
  function() {
    function BezierUtils2() {
    }
    BezierUtils2.curveLength = function(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY) {
      var n = 10;
      var result = 0;
      var t = 0;
      var t2 = 0;
      var t3 = 0;
      var nt = 0;
      var nt2 = 0;
      var nt3 = 0;
      var x = 0;
      var y = 0;
      var dx = 0;
      var dy = 0;
      var prevX = fromX;
      var prevY = fromY;
      for (var i = 1; i <= n; ++i) {
        t = i / n;
        t2 = t * t;
        t3 = t2 * t;
        nt = 1 - t;
        nt2 = nt * nt;
        nt3 = nt2 * nt;
        x = nt3 * fromX + 3 * nt2 * t * cpX + 3 * nt * t2 * cpX2 + t3 * toX;
        y = nt3 * fromY + 3 * nt2 * t * cpY + 3 * nt * t2 * cpY2 + t3 * toY;
        dx = prevX - x;
        dy = prevY - y;
        prevX = x;
        prevY = y;
        result += Math.sqrt(dx * dx + dy * dy);
      }
      return result;
    };
    BezierUtils2.curveTo = function(cpX, cpY, cpX2, cpY2, toX, toY, points) {
      var fromX = points[points.length - 2];
      var fromY = points[points.length - 1];
      points.length -= 2;
      var n = GRAPHICS_CURVES._segmentsCount(BezierUtils2.curveLength(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY));
      var dt = 0;
      var dt2 = 0;
      var dt3 = 0;
      var t2 = 0;
      var t3 = 0;
      points.push(fromX, fromY);
      for (var i = 1, j = 0; i <= n; ++i) {
        j = i / n;
        dt = 1 - j;
        dt2 = dt * dt;
        dt3 = dt2 * dt;
        t2 = j * j;
        t3 = t2 * j;
        points.push(dt3 * fromX + 3 * dt2 * j * cpX + 3 * dt * t2 * cpX2 + t3 * toX, dt3 * fromY + 3 * dt2 * j * cpY + 3 * dt * t2 * cpY2 + t3 * toY);
      }
    };
    return BezierUtils2;
  }()
);
var QuadraticUtils = (
  /** @class */
  function() {
    function QuadraticUtils2() {
    }
    QuadraticUtils2.curveLength = function(fromX, fromY, cpX, cpY, toX, toY) {
      var ax = fromX - 2 * cpX + toX;
      var ay = fromY - 2 * cpY + toY;
      var bx = 2 * cpX - 2 * fromX;
      var by = 2 * cpY - 2 * fromY;
      var a = 4 * (ax * ax + ay * ay);
      var b = 4 * (ax * bx + ay * by);
      var c = bx * bx + by * by;
      var s = 2 * Math.sqrt(a + b + c);
      var a2 = Math.sqrt(a);
      var a32 = 2 * a * a2;
      var c2 = 2 * Math.sqrt(c);
      var ba = b / a2;
      return (a32 * s + a2 * b * (s - c2) + (4 * c * a - b * b) * Math.log((2 * a2 + ba + s) / (ba + c2))) / (4 * a32);
    };
    QuadraticUtils2.curveTo = function(cpX, cpY, toX, toY, points) {
      var fromX = points[points.length - 2];
      var fromY = points[points.length - 1];
      var n = GRAPHICS_CURVES._segmentsCount(QuadraticUtils2.curveLength(fromX, fromY, cpX, cpY, toX, toY));
      var xa = 0;
      var ya = 0;
      for (var i = 1; i <= n; ++i) {
        var j = i / n;
        xa = fromX + (cpX - fromX) * j;
        ya = fromY + (cpY - fromY) * j;
        points.push(xa + (cpX + (toX - cpX) * j - xa) * j, ya + (cpY + (toY - cpY) * j - ya) * j);
      }
    };
    return QuadraticUtils2;
  }()
);
var BatchPart = (
  /** @class */
  function() {
    function BatchPart2() {
      this.reset();
    }
    BatchPart2.prototype.begin = function(style, startIndex, attribStart) {
      this.reset();
      this.style = style;
      this.start = startIndex;
      this.attribStart = attribStart;
    };
    BatchPart2.prototype.end = function(endIndex, endAttrib) {
      this.attribSize = endAttrib - this.attribStart;
      this.size = endIndex - this.start;
    };
    BatchPart2.prototype.reset = function() {
      this.style = null;
      this.size = 0;
      this.start = 0;
      this.attribStart = 0;
      this.attribSize = 0;
    };
    return BatchPart2;
  }()
);
var _a2;
var FILL_COMMANDS = (_a2 = {}, _a2[SHAPES.POLY] = buildPoly, _a2[SHAPES.CIRC] = buildCircle, _a2[SHAPES.ELIP] = buildCircle, _a2[SHAPES.RECT] = buildRectangle, _a2[SHAPES.RREC] = buildRoundedRectangle, _a2);
var BATCH_POOL = [];
var DRAW_CALL_POOL = [];
var GraphicsData = (
  /** @class */
  function() {
    function GraphicsData2(shape, fillStyle, lineStyle, matrix) {
      if (fillStyle === void 0) {
        fillStyle = null;
      }
      if (lineStyle === void 0) {
        lineStyle = null;
      }
      if (matrix === void 0) {
        matrix = null;
      }
      this.points = [];
      this.holes = [];
      this.shape = shape;
      this.lineStyle = lineStyle;
      this.fillStyle = fillStyle;
      this.matrix = matrix;
      this.type = shape.type;
    }
    GraphicsData2.prototype.clone = function() {
      return new GraphicsData2(this.shape, this.fillStyle, this.lineStyle, this.matrix);
    };
    GraphicsData2.prototype.destroy = function() {
      this.shape = null;
      this.holes.length = 0;
      this.holes = null;
      this.points.length = 0;
      this.points = null;
      this.lineStyle = null;
      this.fillStyle = null;
    };
    return GraphicsData2;
  }()
);
var tmpPoint = new Point();
var GraphicsGeometry = (
  /** @class */
  function(_super) {
    __extends4(GraphicsGeometry2, _super);
    function GraphicsGeometry2() {
      var _this = _super.call(this) || this;
      _this.closePointEps = 1e-4;
      _this.boundsPadding = 0;
      _this.uvsFloat32 = null;
      _this.indicesUint16 = null;
      _this.batchable = false;
      _this.points = [];
      _this.colors = [];
      _this.uvs = [];
      _this.indices = [];
      _this.textureIds = [];
      _this.graphicsData = [];
      _this.drawCalls = [];
      _this.batchDirty = -1;
      _this.batches = [];
      _this.dirty = 0;
      _this.cacheDirty = -1;
      _this.clearDirty = 0;
      _this.shapeIndex = 0;
      _this._bounds = new Bounds();
      _this.boundsDirty = -1;
      return _this;
    }
    Object.defineProperty(GraphicsGeometry2.prototype, "bounds", {
      /**
       * Get the current bounds of the graphic geometry.
       * @readonly
       */
      get: function() {
        this.updateBatches();
        if (this.boundsDirty !== this.dirty) {
          this.boundsDirty = this.dirty;
          this.calculateBounds();
        }
        return this._bounds;
      },
      enumerable: false,
      configurable: true
    });
    GraphicsGeometry2.prototype.invalidate = function() {
      this.boundsDirty = -1;
      this.dirty++;
      this.batchDirty++;
      this.shapeIndex = 0;
      this.points.length = 0;
      this.colors.length = 0;
      this.uvs.length = 0;
      this.indices.length = 0;
      this.textureIds.length = 0;
      for (var i = 0; i < this.drawCalls.length; i++) {
        this.drawCalls[i].texArray.clear();
        DRAW_CALL_POOL.push(this.drawCalls[i]);
      }
      this.drawCalls.length = 0;
      for (var i = 0; i < this.batches.length; i++) {
        var batchPart = this.batches[i];
        batchPart.reset();
        BATCH_POOL.push(batchPart);
      }
      this.batches.length = 0;
    };
    GraphicsGeometry2.prototype.clear = function() {
      if (this.graphicsData.length > 0) {
        this.invalidate();
        this.clearDirty++;
        this.graphicsData.length = 0;
      }
      return this;
    };
    GraphicsGeometry2.prototype.drawShape = function(shape, fillStyle, lineStyle, matrix) {
      if (fillStyle === void 0) {
        fillStyle = null;
      }
      if (lineStyle === void 0) {
        lineStyle = null;
      }
      if (matrix === void 0) {
        matrix = null;
      }
      var data = new GraphicsData(shape, fillStyle, lineStyle, matrix);
      this.graphicsData.push(data);
      this.dirty++;
      return this;
    };
    GraphicsGeometry2.prototype.drawHole = function(shape, matrix) {
      if (matrix === void 0) {
        matrix = null;
      }
      if (!this.graphicsData.length) {
        return null;
      }
      var data = new GraphicsData(shape, null, null, matrix);
      var lastShape = this.graphicsData[this.graphicsData.length - 1];
      data.lineStyle = lastShape.lineStyle;
      lastShape.holes.push(data);
      this.dirty++;
      return this;
    };
    GraphicsGeometry2.prototype.destroy = function() {
      _super.prototype.destroy.call(this);
      for (var i = 0; i < this.graphicsData.length; ++i) {
        this.graphicsData[i].destroy();
      }
      this.points.length = 0;
      this.points = null;
      this.colors.length = 0;
      this.colors = null;
      this.uvs.length = 0;
      this.uvs = null;
      this.indices.length = 0;
      this.indices = null;
      this.indexBuffer.destroy();
      this.indexBuffer = null;
      this.graphicsData.length = 0;
      this.graphicsData = null;
      this.drawCalls.length = 0;
      this.drawCalls = null;
      this.batches.length = 0;
      this.batches = null;
      this._bounds = null;
    };
    GraphicsGeometry2.prototype.containsPoint = function(point) {
      var graphicsData = this.graphicsData;
      for (var i = 0; i < graphicsData.length; ++i) {
        var data = graphicsData[i];
        if (!data.fillStyle.visible) {
          continue;
        }
        if (data.shape) {
          if (data.matrix) {
            data.matrix.applyInverse(point, tmpPoint);
          } else {
            tmpPoint.copyFrom(point);
          }
          if (data.shape.contains(tmpPoint.x, tmpPoint.y)) {
            var hitHole = false;
            if (data.holes) {
              for (var i_1 = 0; i_1 < data.holes.length; i_1++) {
                var hole = data.holes[i_1];
                if (hole.shape.contains(tmpPoint.x, tmpPoint.y)) {
                  hitHole = true;
                  break;
                }
              }
            }
            if (!hitHole) {
              return true;
            }
          }
        }
      }
      return false;
    };
    GraphicsGeometry2.prototype.updateBatches = function() {
      if (!this.graphicsData.length) {
        this.batchable = true;
        return;
      }
      if (!this.validateBatching()) {
        return;
      }
      this.cacheDirty = this.dirty;
      var uvs = this.uvs;
      var graphicsData = this.graphicsData;
      var batchPart = null;
      var currentStyle = null;
      if (this.batches.length > 0) {
        batchPart = this.batches[this.batches.length - 1];
        currentStyle = batchPart.style;
      }
      for (var i = this.shapeIndex; i < graphicsData.length; i++) {
        this.shapeIndex++;
        var data = graphicsData[i];
        var fillStyle = data.fillStyle;
        var lineStyle = data.lineStyle;
        var command = FILL_COMMANDS[data.type];
        command.build(data);
        if (data.matrix) {
          this.transformPoints(data.points, data.matrix);
        }
        if (fillStyle.visible || lineStyle.visible) {
          this.processHoles(data.holes);
        }
        for (var j = 0; j < 2; j++) {
          var style = j === 0 ? fillStyle : lineStyle;
          if (!style.visible) {
            continue;
          }
          var nextTexture = style.texture.baseTexture;
          var index_1 = this.indices.length;
          var attribIndex = this.points.length / 2;
          nextTexture.wrapMode = WRAP_MODES.REPEAT;
          if (j === 0) {
            this.processFill(data);
          } else {
            this.processLine(data);
          }
          var size = this.points.length / 2 - attribIndex;
          if (size === 0) {
            continue;
          }
          if (batchPart && !this._compareStyles(currentStyle, style)) {
            batchPart.end(index_1, attribIndex);
            batchPart = null;
          }
          if (!batchPart) {
            batchPart = BATCH_POOL.pop() || new BatchPart();
            batchPart.begin(style, index_1, attribIndex);
            this.batches.push(batchPart);
            currentStyle = style;
          }
          this.addUvs(this.points, uvs, style.texture, attribIndex, size, style.matrix);
        }
      }
      var index = this.indices.length;
      var attrib = this.points.length / 2;
      if (batchPart) {
        batchPart.end(index, attrib);
      }
      if (this.batches.length === 0) {
        this.batchable = true;
        return;
      }
      var need32 = attrib > 65535;
      if (this.indicesUint16 && this.indices.length === this.indicesUint16.length && need32 === this.indicesUint16.BYTES_PER_ELEMENT > 2) {
        this.indicesUint16.set(this.indices);
      } else {
        this.indicesUint16 = need32 ? new Uint32Array(this.indices) : new Uint16Array(this.indices);
      }
      this.batchable = this.isBatchable();
      if (this.batchable) {
        this.packBatches();
      } else {
        this.buildDrawCalls();
      }
    };
    GraphicsGeometry2.prototype._compareStyles = function(styleA, styleB) {
      if (!styleA || !styleB) {
        return false;
      }
      if (styleA.texture.baseTexture !== styleB.texture.baseTexture) {
        return false;
      }
      if (styleA.color + styleA.alpha !== styleB.color + styleB.alpha) {
        return false;
      }
      if (!!styleA.native !== !!styleB.native) {
        return false;
      }
      return true;
    };
    GraphicsGeometry2.prototype.validateBatching = function() {
      if (this.dirty === this.cacheDirty || !this.graphicsData.length) {
        return false;
      }
      for (var i = 0, l = this.graphicsData.length; i < l; i++) {
        var data = this.graphicsData[i];
        var fill = data.fillStyle;
        var line = data.lineStyle;
        if (fill && !fill.texture.baseTexture.valid) {
          return false;
        }
        if (line && !line.texture.baseTexture.valid) {
          return false;
        }
      }
      return true;
    };
    GraphicsGeometry2.prototype.packBatches = function() {
      this.batchDirty++;
      this.uvsFloat32 = new Float32Array(this.uvs);
      var batches = this.batches;
      for (var i = 0, l = batches.length; i < l; i++) {
        var batch = batches[i];
        for (var j = 0; j < batch.size; j++) {
          var index = batch.start + j;
          this.indicesUint16[index] = this.indicesUint16[index] - batch.attribStart;
        }
      }
    };
    GraphicsGeometry2.prototype.isBatchable = function() {
      if (this.points.length > 65535 * 2) {
        return false;
      }
      var batches = this.batches;
      for (var i = 0; i < batches.length; i++) {
        if (batches[i].style.native) {
          return false;
        }
      }
      return this.points.length < GraphicsGeometry2.BATCHABLE_SIZE * 2;
    };
    GraphicsGeometry2.prototype.buildDrawCalls = function() {
      var TICK = ++BaseTexture._globalBatch;
      for (var i = 0; i < this.drawCalls.length; i++) {
        this.drawCalls[i].texArray.clear();
        DRAW_CALL_POOL.push(this.drawCalls[i]);
      }
      this.drawCalls.length = 0;
      var colors = this.colors;
      var textureIds = this.textureIds;
      var currentGroup = DRAW_CALL_POOL.pop();
      if (!currentGroup) {
        currentGroup = new BatchDrawCall();
        currentGroup.texArray = new BatchTextureArray();
      }
      currentGroup.texArray.count = 0;
      currentGroup.start = 0;
      currentGroup.size = 0;
      currentGroup.type = DRAW_MODES.TRIANGLES;
      var textureCount = 0;
      var currentTexture = null;
      var textureId = 0;
      var native = false;
      var drawMode = DRAW_MODES.TRIANGLES;
      var index = 0;
      this.drawCalls.push(currentGroup);
      for (var i = 0; i < this.batches.length; i++) {
        var data = this.batches[i];
        var MAX_TEXTURES = 8;
        var style = data.style;
        var nextTexture = style.texture.baseTexture;
        if (native !== !!style.native) {
          native = !!style.native;
          drawMode = native ? DRAW_MODES.LINES : DRAW_MODES.TRIANGLES;
          currentTexture = null;
          textureCount = MAX_TEXTURES;
          TICK++;
        }
        if (currentTexture !== nextTexture) {
          currentTexture = nextTexture;
          if (nextTexture._batchEnabled !== TICK) {
            if (textureCount === MAX_TEXTURES) {
              TICK++;
              textureCount = 0;
              if (currentGroup.size > 0) {
                currentGroup = DRAW_CALL_POOL.pop();
                if (!currentGroup) {
                  currentGroup = new BatchDrawCall();
                  currentGroup.texArray = new BatchTextureArray();
                }
                this.drawCalls.push(currentGroup);
              }
              currentGroup.start = index;
              currentGroup.size = 0;
              currentGroup.texArray.count = 0;
              currentGroup.type = drawMode;
            }
            nextTexture.touched = 1;
            nextTexture._batchEnabled = TICK;
            nextTexture._batchLocation = textureCount;
            nextTexture.wrapMode = WRAP_MODES.REPEAT;
            currentGroup.texArray.elements[currentGroup.texArray.count++] = nextTexture;
            textureCount++;
          }
        }
        currentGroup.size += data.size;
        index += data.size;
        textureId = nextTexture._batchLocation;
        this.addColors(colors, style.color, style.alpha, data.attribSize, data.attribStart);
        this.addTextureIds(textureIds, textureId, data.attribSize, data.attribStart);
      }
      BaseTexture._globalBatch = TICK;
      this.packAttributes();
    };
    GraphicsGeometry2.prototype.packAttributes = function() {
      var verts = this.points;
      var uvs = this.uvs;
      var colors = this.colors;
      var textureIds = this.textureIds;
      var glPoints = new ArrayBuffer(verts.length * 3 * 4);
      var f32 = new Float32Array(glPoints);
      var u32 = new Uint32Array(glPoints);
      var p = 0;
      for (var i = 0; i < verts.length / 2; i++) {
        f32[p++] = verts[i * 2];
        f32[p++] = verts[i * 2 + 1];
        f32[p++] = uvs[i * 2];
        f32[p++] = uvs[i * 2 + 1];
        u32[p++] = colors[i];
        f32[p++] = textureIds[i];
      }
      this._buffer.update(glPoints);
      this._indexBuffer.update(this.indicesUint16);
    };
    GraphicsGeometry2.prototype.processFill = function(data) {
      if (data.holes.length) {
        buildPoly.triangulate(data, this);
      } else {
        var command = FILL_COMMANDS[data.type];
        command.triangulate(data, this);
      }
    };
    GraphicsGeometry2.prototype.processLine = function(data) {
      buildLine(data, this);
      for (var i = 0; i < data.holes.length; i++) {
        buildLine(data.holes[i], this);
      }
    };
    GraphicsGeometry2.prototype.processHoles = function(holes) {
      for (var i = 0; i < holes.length; i++) {
        var hole = holes[i];
        var command = FILL_COMMANDS[hole.type];
        command.build(hole);
        if (hole.matrix) {
          this.transformPoints(hole.points, hole.matrix);
        }
      }
    };
    GraphicsGeometry2.prototype.calculateBounds = function() {
      var bounds = this._bounds;
      bounds.clear();
      bounds.addVertexData(this.points, 0, this.points.length);
      bounds.pad(this.boundsPadding, this.boundsPadding);
    };
    GraphicsGeometry2.prototype.transformPoints = function(points, matrix) {
      for (var i = 0; i < points.length / 2; i++) {
        var x = points[i * 2];
        var y = points[i * 2 + 1];
        points[i * 2] = matrix.a * x + matrix.c * y + matrix.tx;
        points[i * 2 + 1] = matrix.b * x + matrix.d * y + matrix.ty;
      }
    };
    GraphicsGeometry2.prototype.addColors = function(colors, color, alpha, size, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      var rgb = (color >> 16) + (color & 65280) + ((color & 255) << 16);
      var rgba = premultiplyTint(rgb, alpha);
      colors.length = Math.max(colors.length, offset + size);
      for (var i = 0; i < size; i++) {
        colors[offset + i] = rgba;
      }
    };
    GraphicsGeometry2.prototype.addTextureIds = function(textureIds, id, size, offset) {
      if (offset === void 0) {
        offset = 0;
      }
      textureIds.length = Math.max(textureIds.length, offset + size);
      for (var i = 0; i < size; i++) {
        textureIds[offset + i] = id;
      }
    };
    GraphicsGeometry2.prototype.addUvs = function(verts, uvs, texture, start, size, matrix) {
      if (matrix === void 0) {
        matrix = null;
      }
      var index = 0;
      var uvsStart = uvs.length;
      var frame = texture.frame;
      while (index < size) {
        var x = verts[(start + index) * 2];
        var y = verts[(start + index) * 2 + 1];
        if (matrix) {
          var nx = matrix.a * x + matrix.c * y + matrix.tx;
          y = matrix.b * x + matrix.d * y + matrix.ty;
          x = nx;
        }
        index++;
        uvs.push(x / frame.width, y / frame.height);
      }
      var baseTexture = texture.baseTexture;
      if (frame.width < baseTexture.width || frame.height < baseTexture.height) {
        this.adjustUvs(uvs, texture, uvsStart, size);
      }
    };
    GraphicsGeometry2.prototype.adjustUvs = function(uvs, texture, start, size) {
      var baseTexture = texture.baseTexture;
      var eps = 1e-6;
      var finish = start + size * 2;
      var frame = texture.frame;
      var scaleX = frame.width / baseTexture.width;
      var scaleY = frame.height / baseTexture.height;
      var offsetX = frame.x / frame.width;
      var offsetY = frame.y / frame.height;
      var minX = Math.floor(uvs[start] + eps);
      var minY = Math.floor(uvs[start + 1] + eps);
      for (var i = start + 2; i < finish; i += 2) {
        minX = Math.min(minX, Math.floor(uvs[i] + eps));
        minY = Math.min(minY, Math.floor(uvs[i + 1] + eps));
      }
      offsetX -= minX;
      offsetY -= minY;
      for (var i = start; i < finish; i += 2) {
        uvs[i] = (uvs[i] + offsetX) * scaleX;
        uvs[i + 1] = (uvs[i + 1] + offsetY) * scaleY;
      }
    };
    GraphicsGeometry2.BATCHABLE_SIZE = 100;
    return GraphicsGeometry2;
  }(BatchGeometry)
);
var LineStyle = (
  /** @class */
  function(_super) {
    __extends4(LineStyle2, _super);
    function LineStyle2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.width = 0;
      _this.alignment = 0.5;
      _this.native = false;
      _this.cap = LINE_CAP.BUTT;
      _this.join = LINE_JOIN.MITER;
      _this.miterLimit = 10;
      return _this;
    }
    LineStyle2.prototype.clone = function() {
      var obj = new LineStyle2();
      obj.color = this.color;
      obj.alpha = this.alpha;
      obj.texture = this.texture;
      obj.matrix = this.matrix;
      obj.visible = this.visible;
      obj.width = this.width;
      obj.alignment = this.alignment;
      obj.native = this.native;
      obj.cap = this.cap;
      obj.join = this.join;
      obj.miterLimit = this.miterLimit;
      return obj;
    };
    LineStyle2.prototype.reset = function() {
      _super.prototype.reset.call(this);
      this.color = 0;
      this.alignment = 0.5;
      this.width = 0;
      this.native = false;
    };
    return LineStyle2;
  }(FillStyle)
);
var temp = new Float32Array(3);
var DEFAULT_SHADERS = {};
var Graphics = (
  /** @class */
  function(_super) {
    __extends4(Graphics2, _super);
    function Graphics2(geometry) {
      if (geometry === void 0) {
        geometry = null;
      }
      var _this = _super.call(this) || this;
      _this.shader = null;
      _this.pluginName = "batch";
      _this.currentPath = null;
      _this.batches = [];
      _this.batchTint = -1;
      _this.batchDirty = -1;
      _this.vertexData = null;
      _this._fillStyle = new FillStyle();
      _this._lineStyle = new LineStyle();
      _this._matrix = null;
      _this._holeMode = false;
      _this.state = State.for2d();
      _this._geometry = geometry || new GraphicsGeometry();
      _this._geometry.refCount++;
      _this._transformID = -1;
      _this.tint = 16777215;
      _this.blendMode = BLEND_MODES.NORMAL;
      return _this;
    }
    Object.defineProperty(Graphics2.prototype, "geometry", {
      /**
       * Includes vertex positions, face indices, normals, colors, UVs, and
       * custom attributes within buffers, reducing the cost of passing all
       * this data to the GPU. Can be shared between multiple Mesh or Graphics objects.
       * @readonly
       */
      get: function() {
        return this._geometry;
      },
      enumerable: false,
      configurable: true
    });
    Graphics2.prototype.clone = function() {
      this.finishPoly();
      return new Graphics2(this._geometry);
    };
    Object.defineProperty(Graphics2.prototype, "blendMode", {
      get: function() {
        return this.state.blendMode;
      },
      /**
       * The blend mode to be applied to the graphic shape. Apply a value of
       * `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.  Note that, since each
       * primitive in the GraphicsGeometry list is rendered sequentially, modes
       * such as `PIXI.BLEND_MODES.ADD` and `PIXI.BLEND_MODES.MULTIPLY` will
       * be applied per-primitive.
       * @default PIXI.BLEND_MODES.NORMAL
       */
      set: function(value) {
        this.state.blendMode = value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Graphics2.prototype, "tint", {
      /**
       * The tint applied to each graphic shape. This is a hex value. A value of
       * 0xFFFFFF will remove any tint effect.
       * @default 0xFFFFFF
       */
      get: function() {
        return this._tint;
      },
      set: function(value) {
        this._tint = value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Graphics2.prototype, "fill", {
      /**
       * The current fill style.
       * @readonly
       */
      get: function() {
        return this._fillStyle;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Graphics2.prototype, "line", {
      /**
       * The current line style.
       * @readonly
       */
      get: function() {
        return this._lineStyle;
      },
      enumerable: false,
      configurable: true
    });
    Graphics2.prototype.lineStyle = function(options, color, alpha, alignment, native) {
      if (options === void 0) {
        options = null;
      }
      if (color === void 0) {
        color = 0;
      }
      if (alpha === void 0) {
        alpha = 1;
      }
      if (alignment === void 0) {
        alignment = 0.5;
      }
      if (native === void 0) {
        native = false;
      }
      if (typeof options === "number") {
        options = { width: options, color, alpha, alignment, native };
      }
      return this.lineTextureStyle(options);
    };
    Graphics2.prototype.lineTextureStyle = function(options) {
      options = Object.assign({
        width: 0,
        texture: Texture.WHITE,
        color: options && options.texture ? 16777215 : 0,
        alpha: 1,
        matrix: null,
        alignment: 0.5,
        native: false,
        cap: LINE_CAP.BUTT,
        join: LINE_JOIN.MITER,
        miterLimit: 10
      }, options);
      if (this.currentPath) {
        this.startPoly();
      }
      var visible = options.width > 0 && options.alpha > 0;
      if (!visible) {
        this._lineStyle.reset();
      } else {
        if (options.matrix) {
          options.matrix = options.matrix.clone();
          options.matrix.invert();
        }
        Object.assign(this._lineStyle, { visible }, options);
      }
      return this;
    };
    Graphics2.prototype.startPoly = function() {
      if (this.currentPath) {
        var points = this.currentPath.points;
        var len = this.currentPath.points.length;
        if (len > 2) {
          this.drawShape(this.currentPath);
          this.currentPath = new Polygon();
          this.currentPath.closeStroke = false;
          this.currentPath.points.push(points[len - 2], points[len - 1]);
        }
      } else {
        this.currentPath = new Polygon();
        this.currentPath.closeStroke = false;
      }
    };
    Graphics2.prototype.finishPoly = function() {
      if (this.currentPath) {
        if (this.currentPath.points.length > 2) {
          this.drawShape(this.currentPath);
          this.currentPath = null;
        } else {
          this.currentPath.points.length = 0;
        }
      }
    };
    Graphics2.prototype.moveTo = function(x, y) {
      this.startPoly();
      this.currentPath.points[0] = x;
      this.currentPath.points[1] = y;
      return this;
    };
    Graphics2.prototype.lineTo = function(x, y) {
      if (!this.currentPath) {
        this.moveTo(0, 0);
      }
      var points = this.currentPath.points;
      var fromX = points[points.length - 2];
      var fromY = points[points.length - 1];
      if (fromX !== x || fromY !== y) {
        points.push(x, y);
      }
      return this;
    };
    Graphics2.prototype._initCurve = function(x, y) {
      if (x === void 0) {
        x = 0;
      }
      if (y === void 0) {
        y = 0;
      }
      if (this.currentPath) {
        if (this.currentPath.points.length === 0) {
          this.currentPath.points = [x, y];
        }
      } else {
        this.moveTo(x, y);
      }
    };
    Graphics2.prototype.quadraticCurveTo = function(cpX, cpY, toX, toY) {
      this._initCurve();
      var points = this.currentPath.points;
      if (points.length === 0) {
        this.moveTo(0, 0);
      }
      QuadraticUtils.curveTo(cpX, cpY, toX, toY, points);
      return this;
    };
    Graphics2.prototype.bezierCurveTo = function(cpX, cpY, cpX2, cpY2, toX, toY) {
      this._initCurve();
      BezierUtils.curveTo(cpX, cpY, cpX2, cpY2, toX, toY, this.currentPath.points);
      return this;
    };
    Graphics2.prototype.arcTo = function(x1, y1, x2, y2, radius) {
      this._initCurve(x1, y1);
      var points = this.currentPath.points;
      var result = ArcUtils.curveTo(x1, y1, x2, y2, radius, points);
      if (result) {
        var cx = result.cx, cy = result.cy, radius_1 = result.radius, startAngle = result.startAngle, endAngle = result.endAngle, anticlockwise = result.anticlockwise;
        this.arc(cx, cy, radius_1, startAngle, endAngle, anticlockwise);
      }
      return this;
    };
    Graphics2.prototype.arc = function(cx, cy, radius, startAngle, endAngle, anticlockwise) {
      if (anticlockwise === void 0) {
        anticlockwise = false;
      }
      if (startAngle === endAngle) {
        return this;
      }
      if (!anticlockwise && endAngle <= startAngle) {
        endAngle += PI_2;
      } else if (anticlockwise && startAngle <= endAngle) {
        startAngle += PI_2;
      }
      var sweep = endAngle - startAngle;
      if (sweep === 0) {
        return this;
      }
      var startX = cx + Math.cos(startAngle) * radius;
      var startY = cy + Math.sin(startAngle) * radius;
      var eps = this._geometry.closePointEps;
      var points = this.currentPath ? this.currentPath.points : null;
      if (points) {
        var xDiff = Math.abs(points[points.length - 2] - startX);
        var yDiff = Math.abs(points[points.length - 1] - startY);
        if (xDiff < eps && yDiff < eps)
          ;
        else {
          points.push(startX, startY);
        }
      } else {
        this.moveTo(startX, startY);
        points = this.currentPath.points;
      }
      ArcUtils.arc(startX, startY, cx, cy, radius, startAngle, endAngle, anticlockwise, points);
      return this;
    };
    Graphics2.prototype.beginFill = function(color, alpha) {
      if (color === void 0) {
        color = 0;
      }
      if (alpha === void 0) {
        alpha = 1;
      }
      return this.beginTextureFill({ texture: Texture.WHITE, color, alpha });
    };
    Graphics2.prototype.beginTextureFill = function(options) {
      options = Object.assign({
        texture: Texture.WHITE,
        color: 16777215,
        alpha: 1,
        matrix: null
      }, options);
      if (this.currentPath) {
        this.startPoly();
      }
      var visible = options.alpha > 0;
      if (!visible) {
        this._fillStyle.reset();
      } else {
        if (options.matrix) {
          options.matrix = options.matrix.clone();
          options.matrix.invert();
        }
        Object.assign(this._fillStyle, { visible }, options);
      }
      return this;
    };
    Graphics2.prototype.endFill = function() {
      this.finishPoly();
      this._fillStyle.reset();
      return this;
    };
    Graphics2.prototype.drawRect = function(x, y, width, height) {
      return this.drawShape(new Rectangle(x, y, width, height));
    };
    Graphics2.prototype.drawRoundedRect = function(x, y, width, height, radius) {
      return this.drawShape(new RoundedRectangle(x, y, width, height, radius));
    };
    Graphics2.prototype.drawCircle = function(x, y, radius) {
      return this.drawShape(new Circle(x, y, radius));
    };
    Graphics2.prototype.drawEllipse = function(x, y, width, height) {
      return this.drawShape(new Ellipse(x, y, width, height));
    };
    Graphics2.prototype.drawPolygon = function() {
      var arguments$1 = arguments;
      var path = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        path[_i] = arguments$1[_i];
      }
      var points;
      var closeStroke = true;
      var poly = path[0];
      if (poly.points) {
        closeStroke = poly.closeStroke;
        points = poly.points;
      } else if (Array.isArray(path[0])) {
        points = path[0];
      } else {
        points = path;
      }
      var shape = new Polygon(points);
      shape.closeStroke = closeStroke;
      this.drawShape(shape);
      return this;
    };
    Graphics2.prototype.drawShape = function(shape) {
      if (!this._holeMode) {
        this._geometry.drawShape(shape, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix);
      } else {
        this._geometry.drawHole(shape, this._matrix);
      }
      return this;
    };
    Graphics2.prototype.clear = function() {
      this._geometry.clear();
      this._lineStyle.reset();
      this._fillStyle.reset();
      this._boundsID++;
      this._matrix = null;
      this._holeMode = false;
      this.currentPath = null;
      return this;
    };
    Graphics2.prototype.isFastRect = function() {
      var data = this._geometry.graphicsData;
      return data.length === 1 && data[0].shape.type === SHAPES.RECT && !data[0].matrix && !data[0].holes.length && !(data[0].lineStyle.visible && data[0].lineStyle.width);
    };
    Graphics2.prototype._render = function(renderer) {
      this.finishPoly();
      var geometry = this._geometry;
      geometry.updateBatches();
      if (geometry.batchable) {
        if (this.batchDirty !== geometry.batchDirty) {
          this._populateBatches();
        }
        this._renderBatched(renderer);
      } else {
        renderer.batch.flush();
        this._renderDirect(renderer);
      }
    };
    Graphics2.prototype._populateBatches = function() {
      var geometry = this._geometry;
      var blendMode = this.blendMode;
      var len = geometry.batches.length;
      this.batchTint = -1;
      this._transformID = -1;
      this.batchDirty = geometry.batchDirty;
      this.batches.length = len;
      this.vertexData = new Float32Array(geometry.points);
      for (var i = 0; i < len; i++) {
        var gI = geometry.batches[i];
        var color = gI.style.color;
        var vertexData = new Float32Array(this.vertexData.buffer, gI.attribStart * 4 * 2, gI.attribSize * 2);
        var uvs = new Float32Array(geometry.uvsFloat32.buffer, gI.attribStart * 4 * 2, gI.attribSize * 2);
        var indices2 = new Uint16Array(geometry.indicesUint16.buffer, gI.start * 2, gI.size);
        var batch = {
          vertexData,
          blendMode,
          indices: indices2,
          uvs,
          _batchRGB: hex2rgb(color),
          _tintRGB: color,
          _texture: gI.style.texture,
          alpha: gI.style.alpha,
          worldAlpha: 1
        };
        this.batches[i] = batch;
      }
    };
    Graphics2.prototype._renderBatched = function(renderer) {
      if (!this.batches.length) {
        return;
      }
      renderer.batch.setObjectRenderer(renderer.plugins[this.pluginName]);
      this.calculateVertices();
      this.calculateTints();
      for (var i = 0, l = this.batches.length; i < l; i++) {
        var batch = this.batches[i];
        batch.worldAlpha = this.worldAlpha * batch.alpha;
        renderer.plugins[this.pluginName].render(batch);
      }
    };
    Graphics2.prototype._renderDirect = function(renderer) {
      var shader = this._resolveDirectShader(renderer);
      var geometry = this._geometry;
      var tint = this.tint;
      var worldAlpha = this.worldAlpha;
      var uniforms = shader.uniforms;
      var drawCalls = geometry.drawCalls;
      uniforms.translationMatrix = this.transform.worldTransform;
      uniforms.tint[0] = (tint >> 16 & 255) / 255 * worldAlpha;
      uniforms.tint[1] = (tint >> 8 & 255) / 255 * worldAlpha;
      uniforms.tint[2] = (tint & 255) / 255 * worldAlpha;
      uniforms.tint[3] = worldAlpha;
      renderer.shader.bind(shader);
      renderer.geometry.bind(geometry, shader);
      renderer.state.set(this.state);
      for (var i = 0, l = drawCalls.length; i < l; i++) {
        this._renderDrawCallDirect(renderer, geometry.drawCalls[i]);
      }
    };
    Graphics2.prototype._renderDrawCallDirect = function(renderer, drawCall) {
      var texArray = drawCall.texArray, type = drawCall.type, size = drawCall.size, start = drawCall.start;
      var groupTextureCount = texArray.count;
      for (var j = 0; j < groupTextureCount; j++) {
        renderer.texture.bind(texArray.elements[j], j);
      }
      renderer.geometry.draw(type, size, start);
    };
    Graphics2.prototype._resolveDirectShader = function(renderer) {
      var shader = this.shader;
      var pluginName = this.pluginName;
      if (!shader) {
        if (!DEFAULT_SHADERS[pluginName]) {
          var MAX_TEXTURES = renderer.plugins[pluginName].MAX_TEXTURES;
          var sampleValues = new Int32Array(MAX_TEXTURES);
          for (var i = 0; i < MAX_TEXTURES; i++) {
            sampleValues[i] = i;
          }
          var uniforms = {
            tint: new Float32Array([1, 1, 1, 1]),
            translationMatrix: new Matrix(),
            default: UniformGroup.from({ uSamplers: sampleValues }, true)
          };
          var program = renderer.plugins[pluginName]._shader.program;
          DEFAULT_SHADERS[pluginName] = new Shader(program, uniforms);
        }
        shader = DEFAULT_SHADERS[pluginName];
      }
      return shader;
    };
    Graphics2.prototype._calculateBounds = function() {
      this.finishPoly();
      var geometry = this._geometry;
      if (!geometry.graphicsData.length) {
        return;
      }
      var _a3 = geometry.bounds, minX = _a3.minX, minY = _a3.minY, maxX = _a3.maxX, maxY = _a3.maxY;
      this._bounds.addFrame(this.transform, minX, minY, maxX, maxY);
    };
    Graphics2.prototype.containsPoint = function(point) {
      this.worldTransform.applyInverse(point, Graphics2._TEMP_POINT);
      return this._geometry.containsPoint(Graphics2._TEMP_POINT);
    };
    Graphics2.prototype.calculateTints = function() {
      if (this.batchTint !== this.tint) {
        this.batchTint = this.tint;
        var tintRGB = hex2rgb(this.tint, temp);
        for (var i = 0; i < this.batches.length; i++) {
          var batch = this.batches[i];
          var batchTint = batch._batchRGB;
          var r = tintRGB[0] * batchTint[0] * 255;
          var g = tintRGB[1] * batchTint[1] * 255;
          var b = tintRGB[2] * batchTint[2] * 255;
          var color = (r << 16) + (g << 8) + (b | 0);
          batch._tintRGB = (color >> 16) + (color & 65280) + ((color & 255) << 16);
        }
      }
    };
    Graphics2.prototype.calculateVertices = function() {
      var wtID = this.transform._worldID;
      if (this._transformID === wtID) {
        return;
      }
      this._transformID = wtID;
      var wt = this.transform.worldTransform;
      var a = wt.a;
      var b = wt.b;
      var c = wt.c;
      var d = wt.d;
      var tx = wt.tx;
      var ty = wt.ty;
      var data = this._geometry.points;
      var vertexData = this.vertexData;
      var count = 0;
      for (var i = 0; i < data.length; i += 2) {
        var x = data[i];
        var y = data[i + 1];
        vertexData[count++] = a * x + c * y + tx;
        vertexData[count++] = d * y + b * x + ty;
      }
    };
    Graphics2.prototype.closePath = function() {
      var currentPath = this.currentPath;
      if (currentPath) {
        currentPath.closeStroke = true;
        this.finishPoly();
      }
      return this;
    };
    Graphics2.prototype.setMatrix = function(matrix) {
      this._matrix = matrix;
      return this;
    };
    Graphics2.prototype.beginHole = function() {
      this.finishPoly();
      this._holeMode = true;
      return this;
    };
    Graphics2.prototype.endHole = function() {
      this.finishPoly();
      this._holeMode = false;
      return this;
    };
    Graphics2.prototype.destroy = function(options) {
      this._geometry.refCount--;
      if (this._geometry.refCount === 0) {
        this._geometry.dispose();
      }
      this._matrix = null;
      this.currentPath = null;
      this._lineStyle.destroy();
      this._lineStyle = null;
      this._fillStyle.destroy();
      this._fillStyle = null;
      this._geometry = null;
      this.shader = null;
      this.vertexData = null;
      this.batches.length = 0;
      this.batches = null;
      _super.prototype.destroy.call(this, options);
    };
    Graphics2.nextRoundedRectBehavior = false;
    Graphics2._TEMP_POINT = new Point();
    return Graphics2;
  }(Container)
);
var graphicsUtils = {
  buildPoly,
  buildCircle,
  buildRectangle,
  buildRoundedRectangle,
  buildLine,
  ArcUtils,
  BezierUtils,
  QuadraticUtils,
  BatchPart,
  FILL_COMMANDS,
  BATCH_POOL,
  DRAW_CALL_POOL
};

// node_modules/.pnpm/@pixi+sprite@6.5.2_@pixi+constants@6.5.2_@pixi+core@6.5.2_@pixi+display@6.5.2_@pixi+math@6.5._6wmcs5xxlptn6nu3cdmcnlhzy4/node_modules/@pixi/sprite/dist/esm/sprite.mjs
var extendStatics5 = function(d, b) {
  extendStatics5 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) {
      if (b2.hasOwnProperty(p)) {
        d2[p] = b2[p];
      }
    }
  };
  return extendStatics5(d, b);
};
function __extends5(d, b) {
  extendStatics5(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var tempPoint = new Point();
var indices = new Uint16Array([0, 1, 2, 0, 2, 3]);
var Sprite = (
  /** @class */
  function(_super) {
    __extends5(Sprite2, _super);
    function Sprite2(texture) {
      var _this = _super.call(this) || this;
      _this._anchor = new ObservablePoint(_this._onAnchorUpdate, _this, texture ? texture.defaultAnchor.x : 0, texture ? texture.defaultAnchor.y : 0);
      _this._texture = null;
      _this._width = 0;
      _this._height = 0;
      _this._tint = null;
      _this._tintRGB = null;
      _this.tint = 16777215;
      _this.blendMode = BLEND_MODES.NORMAL;
      _this._cachedTint = 16777215;
      _this.uvs = null;
      _this.texture = texture || Texture.EMPTY;
      _this.vertexData = new Float32Array(8);
      _this.vertexTrimmedData = null;
      _this._transformID = -1;
      _this._textureID = -1;
      _this._transformTrimmedID = -1;
      _this._textureTrimmedID = -1;
      _this.indices = indices;
      _this.pluginName = "batch";
      _this.isSprite = true;
      _this._roundPixels = settings.ROUND_PIXELS;
      return _this;
    }
    Sprite2.prototype._onTextureUpdate = function() {
      this._textureID = -1;
      this._textureTrimmedID = -1;
      this._cachedTint = 16777215;
      if (this._width) {
        this.scale.x = sign(this.scale.x) * this._width / this._texture.orig.width;
      }
      if (this._height) {
        this.scale.y = sign(this.scale.y) * this._height / this._texture.orig.height;
      }
    };
    Sprite2.prototype._onAnchorUpdate = function() {
      this._transformID = -1;
      this._transformTrimmedID = -1;
    };
    Sprite2.prototype.calculateVertices = function() {
      var texture = this._texture;
      if (this._transformID === this.transform._worldID && this._textureID === texture._updateID) {
        return;
      }
      if (this._textureID !== texture._updateID) {
        this.uvs = this._texture._uvs.uvsFloat32;
      }
      this._transformID = this.transform._worldID;
      this._textureID = texture._updateID;
      var wt = this.transform.worldTransform;
      var a = wt.a;
      var b = wt.b;
      var c = wt.c;
      var d = wt.d;
      var tx = wt.tx;
      var ty = wt.ty;
      var vertexData = this.vertexData;
      var trim = texture.trim;
      var orig = texture.orig;
      var anchor = this._anchor;
      var w0 = 0;
      var w1 = 0;
      var h0 = 0;
      var h1 = 0;
      if (trim) {
        w1 = trim.x - anchor._x * orig.width;
        w0 = w1 + trim.width;
        h1 = trim.y - anchor._y * orig.height;
        h0 = h1 + trim.height;
      } else {
        w1 = -anchor._x * orig.width;
        w0 = w1 + orig.width;
        h1 = -anchor._y * orig.height;
        h0 = h1 + orig.height;
      }
      vertexData[0] = a * w1 + c * h1 + tx;
      vertexData[1] = d * h1 + b * w1 + ty;
      vertexData[2] = a * w0 + c * h1 + tx;
      vertexData[3] = d * h1 + b * w0 + ty;
      vertexData[4] = a * w0 + c * h0 + tx;
      vertexData[5] = d * h0 + b * w0 + ty;
      vertexData[6] = a * w1 + c * h0 + tx;
      vertexData[7] = d * h0 + b * w1 + ty;
      if (this._roundPixels) {
        var resolution = settings.RESOLUTION;
        for (var i = 0; i < vertexData.length; ++i) {
          vertexData[i] = Math.round((vertexData[i] * resolution | 0) / resolution);
        }
      }
    };
    Sprite2.prototype.calculateTrimmedVertices = function() {
      if (!this.vertexTrimmedData) {
        this.vertexTrimmedData = new Float32Array(8);
      } else if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) {
        return;
      }
      this._transformTrimmedID = this.transform._worldID;
      this._textureTrimmedID = this._texture._updateID;
      var texture = this._texture;
      var vertexData = this.vertexTrimmedData;
      var orig = texture.orig;
      var anchor = this._anchor;
      var wt = this.transform.worldTransform;
      var a = wt.a;
      var b = wt.b;
      var c = wt.c;
      var d = wt.d;
      var tx = wt.tx;
      var ty = wt.ty;
      var w1 = -anchor._x * orig.width;
      var w0 = w1 + orig.width;
      var h1 = -anchor._y * orig.height;
      var h0 = h1 + orig.height;
      vertexData[0] = a * w1 + c * h1 + tx;
      vertexData[1] = d * h1 + b * w1 + ty;
      vertexData[2] = a * w0 + c * h1 + tx;
      vertexData[3] = d * h1 + b * w0 + ty;
      vertexData[4] = a * w0 + c * h0 + tx;
      vertexData[5] = d * h0 + b * w0 + ty;
      vertexData[6] = a * w1 + c * h0 + tx;
      vertexData[7] = d * h0 + b * w1 + ty;
    };
    Sprite2.prototype._render = function(renderer) {
      this.calculateVertices();
      renderer.batch.setObjectRenderer(renderer.plugins[this.pluginName]);
      renderer.plugins[this.pluginName].render(this);
    };
    Sprite2.prototype._calculateBounds = function() {
      var trim = this._texture.trim;
      var orig = this._texture.orig;
      if (!trim || trim.width === orig.width && trim.height === orig.height) {
        this.calculateVertices();
        this._bounds.addQuad(this.vertexData);
      } else {
        this.calculateTrimmedVertices();
        this._bounds.addQuad(this.vertexTrimmedData);
      }
    };
    Sprite2.prototype.getLocalBounds = function(rect) {
      if (this.children.length === 0) {
        if (!this._localBounds) {
          this._localBounds = new Bounds();
        }
        this._localBounds.minX = this._texture.orig.width * -this._anchor._x;
        this._localBounds.minY = this._texture.orig.height * -this._anchor._y;
        this._localBounds.maxX = this._texture.orig.width * (1 - this._anchor._x);
        this._localBounds.maxY = this._texture.orig.height * (1 - this._anchor._y);
        if (!rect) {
          if (!this._localBoundsRect) {
            this._localBoundsRect = new Rectangle();
          }
          rect = this._localBoundsRect;
        }
        return this._localBounds.getRectangle(rect);
      }
      return _super.prototype.getLocalBounds.call(this, rect);
    };
    Sprite2.prototype.containsPoint = function(point) {
      this.worldTransform.applyInverse(point, tempPoint);
      var width = this._texture.orig.width;
      var height = this._texture.orig.height;
      var x1 = -width * this.anchor.x;
      var y1 = 0;
      if (tempPoint.x >= x1 && tempPoint.x < x1 + width) {
        y1 = -height * this.anchor.y;
        if (tempPoint.y >= y1 && tempPoint.y < y1 + height) {
          return true;
        }
      }
      return false;
    };
    Sprite2.prototype.destroy = function(options) {
      _super.prototype.destroy.call(this, options);
      this._texture.off("update", this._onTextureUpdate, this);
      this._anchor = null;
      var destroyTexture = typeof options === "boolean" ? options : options && options.texture;
      if (destroyTexture) {
        var destroyBaseTexture = typeof options === "boolean" ? options : options && options.baseTexture;
        this._texture.destroy(!!destroyBaseTexture);
      }
      this._texture = null;
    };
    Sprite2.from = function(source, options) {
      var texture = source instanceof Texture ? source : Texture.from(source, options);
      return new Sprite2(texture);
    };
    Object.defineProperty(Sprite2.prototype, "roundPixels", {
      get: function() {
        return this._roundPixels;
      },
      /**
       * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
       *
       * Advantages can include sharper image quality (like text) and faster rendering on canvas.
       * The main disadvantage is movement of objects may appear less smooth.
       *
       * To set the global default, change {@link PIXI.settings.ROUND_PIXELS}.
       * @default false
       */
      set: function(value) {
        if (this._roundPixels !== value) {
          this._transformID = -1;
        }
        this._roundPixels = value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Sprite2.prototype, "width", {
      /** The width of the sprite, setting this will actually modify the scale to achieve the value set. */
      get: function() {
        return Math.abs(this.scale.x) * this._texture.orig.width;
      },
      set: function(value) {
        var s = sign(this.scale.x) || 1;
        this.scale.x = s * value / this._texture.orig.width;
        this._width = value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Sprite2.prototype, "height", {
      /** The height of the sprite, setting this will actually modify the scale to achieve the value set. */
      get: function() {
        return Math.abs(this.scale.y) * this._texture.orig.height;
      },
      set: function(value) {
        var s = sign(this.scale.y) || 1;
        this.scale.y = s * value / this._texture.orig.height;
        this._height = value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Sprite2.prototype, "anchor", {
      /**
       * The anchor sets the origin point of the sprite. The default value is taken from the {@link PIXI.Texture|Texture}
       * and passed to the constructor.
       *
       * The default is `(0,0)`, this means the sprite's origin is the top left.
       *
       * Setting the anchor to `(0.5,0.5)` means the sprite's origin is centered.
       *
       * Setting the anchor to `(1,1)` would mean the sprite's origin point will be the bottom right corner.
       *
       * If you pass only single parameter, it will set both x and y to the same value as shown in the example below.
       * @example
       * const sprite = new PIXI.Sprite(texture);
       * sprite.anchor.set(0.5); // This will set the origin to center. (0.5) is same as (0.5, 0.5).
       */
      get: function() {
        return this._anchor;
      },
      set: function(value) {
        this._anchor.copyFrom(value);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Sprite2.prototype, "tint", {
      /**
       * The tint applied to the sprite. This is a hex value.
       *
       * A value of 0xFFFFFF will remove any tint effect.
       * @default 0xFFFFFF
       */
      get: function() {
        return this._tint;
      },
      set: function(value) {
        this._tint = value;
        this._tintRGB = (value >> 16) + (value & 65280) + ((value & 255) << 16);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Sprite2.prototype, "texture", {
      /** The texture that the sprite is using. */
      get: function() {
        return this._texture;
      },
      set: function(value) {
        if (this._texture === value) {
          return;
        }
        if (this._texture) {
          this._texture.off("update", this._onTextureUpdate, this);
        }
        this._texture = value || Texture.EMPTY;
        this._cachedTint = 16777215;
        this._textureID = -1;
        this._textureTrimmedID = -1;
        if (value) {
          if (value.baseTexture.valid) {
            this._onTextureUpdate();
          } else {
            value.once("update", this._onTextureUpdate, this);
          }
        }
      },
      enumerable: false,
      configurable: true
    });
    return Sprite2;
  }(Container)
);

// node_modules/.pnpm/@pixi+text@6.5.2_@pixi+core@6.5.2_@pixi+math@6.5.2_@pixi+settings@6.5.2_@pixi+sprite@6.5.2_@pixi+utils@6.5.2/node_modules/@pixi/text/dist/esm/text.mjs
var extendStatics6 = function(d, b) {
  extendStatics6 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) {
      if (b2.hasOwnProperty(p)) {
        d2[p] = b2[p];
      }
    }
  };
  return extendStatics6(d, b);
};
function __extends6(d, b) {
  extendStatics6(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var TEXT_GRADIENT;
(function(TEXT_GRADIENT2) {
  TEXT_GRADIENT2[TEXT_GRADIENT2["LINEAR_VERTICAL"] = 0] = "LINEAR_VERTICAL";
  TEXT_GRADIENT2[TEXT_GRADIENT2["LINEAR_HORIZONTAL"] = 1] = "LINEAR_HORIZONTAL";
})(TEXT_GRADIENT || (TEXT_GRADIENT = {}));
var defaultStyle = {
  align: "left",
  breakWords: false,
  dropShadow: false,
  dropShadowAlpha: 1,
  dropShadowAngle: Math.PI / 6,
  dropShadowBlur: 0,
  dropShadowColor: "black",
  dropShadowDistance: 5,
  fill: "black",
  fillGradientType: TEXT_GRADIENT.LINEAR_VERTICAL,
  fillGradientStops: [],
  fontFamily: "Arial",
  fontSize: 26,
  fontStyle: "normal",
  fontVariant: "normal",
  fontWeight: "normal",
  letterSpacing: 0,
  lineHeight: 0,
  lineJoin: "miter",
  miterLimit: 10,
  padding: 0,
  stroke: "black",
  strokeThickness: 0,
  textBaseline: "alphabetic",
  trim: false,
  whiteSpace: "pre",
  wordWrap: false,
  wordWrapWidth: 100,
  leading: 0
};
var genericFontFamilies = [
  "serif",
  "sans-serif",
  "monospace",
  "cursive",
  "fantasy",
  "system-ui"
];
var TextStyle = (
  /** @class */
  function() {
    function TextStyle2(style) {
      this.styleID = 0;
      this.reset();
      deepCopyProperties(this, style, style);
    }
    TextStyle2.prototype.clone = function() {
      var clonedProperties = {};
      deepCopyProperties(clonedProperties, this, defaultStyle);
      return new TextStyle2(clonedProperties);
    };
    TextStyle2.prototype.reset = function() {
      deepCopyProperties(this, defaultStyle, defaultStyle);
    };
    Object.defineProperty(TextStyle2.prototype, "align", {
      /**
       * Alignment for multiline text ('left', 'center' or 'right'), does not affect single line text
       *
       * @member {string}
       */
      get: function() {
        return this._align;
      },
      set: function(align) {
        if (this._align !== align) {
          this._align = align;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "breakWords", {
      /** Indicates if lines can be wrapped within words, it needs wordWrap to be set to true. */
      get: function() {
        return this._breakWords;
      },
      set: function(breakWords) {
        if (this._breakWords !== breakWords) {
          this._breakWords = breakWords;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "dropShadow", {
      /** Set a drop shadow for the text. */
      get: function() {
        return this._dropShadow;
      },
      set: function(dropShadow) {
        if (this._dropShadow !== dropShadow) {
          this._dropShadow = dropShadow;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "dropShadowAlpha", {
      /** Set alpha for the drop shadow. */
      get: function() {
        return this._dropShadowAlpha;
      },
      set: function(dropShadowAlpha) {
        if (this._dropShadowAlpha !== dropShadowAlpha) {
          this._dropShadowAlpha = dropShadowAlpha;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "dropShadowAngle", {
      /** Set a angle of the drop shadow. */
      get: function() {
        return this._dropShadowAngle;
      },
      set: function(dropShadowAngle) {
        if (this._dropShadowAngle !== dropShadowAngle) {
          this._dropShadowAngle = dropShadowAngle;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "dropShadowBlur", {
      /** Set a shadow blur radius. */
      get: function() {
        return this._dropShadowBlur;
      },
      set: function(dropShadowBlur) {
        if (this._dropShadowBlur !== dropShadowBlur) {
          this._dropShadowBlur = dropShadowBlur;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "dropShadowColor", {
      /** A fill style to be used on the dropshadow e.g 'red', '#00FF00'. */
      get: function() {
        return this._dropShadowColor;
      },
      set: function(dropShadowColor) {
        var outputColor = getColor(dropShadowColor);
        if (this._dropShadowColor !== outputColor) {
          this._dropShadowColor = outputColor;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "dropShadowDistance", {
      /** Set a distance of the drop shadow. */
      get: function() {
        return this._dropShadowDistance;
      },
      set: function(dropShadowDistance) {
        if (this._dropShadowDistance !== dropShadowDistance) {
          this._dropShadowDistance = dropShadowDistance;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "fill", {
      /**
       * A canvas fillstyle that will be used on the text e.g 'red', '#00FF00'.
       *
       * Can be an array to create a gradient eg ['#000000','#FFFFFF']
       * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle|MDN}
       *
       * @member {string|string[]|number|number[]|CanvasGradient|CanvasPattern}
       */
      get: function() {
        return this._fill;
      },
      set: function(fill) {
        var outputColor = getColor(fill);
        if (this._fill !== outputColor) {
          this._fill = outputColor;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "fillGradientType", {
      /**
       * If fill is an array of colours to create a gradient, this can change the type/direction of the gradient.
       *
       * @see PIXI.TEXT_GRADIENT
       */
      get: function() {
        return this._fillGradientType;
      },
      set: function(fillGradientType) {
        if (this._fillGradientType !== fillGradientType) {
          this._fillGradientType = fillGradientType;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "fillGradientStops", {
      /**
       * If fill is an array of colours to create a gradient, this array can set the stop points
       * (numbers between 0 and 1) for the color, overriding the default behaviour of evenly spacing them.
       */
      get: function() {
        return this._fillGradientStops;
      },
      set: function(fillGradientStops) {
        if (!areArraysEqual(this._fillGradientStops, fillGradientStops)) {
          this._fillGradientStops = fillGradientStops;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "fontFamily", {
      /** The font family. */
      get: function() {
        return this._fontFamily;
      },
      set: function(fontFamily) {
        if (this.fontFamily !== fontFamily) {
          this._fontFamily = fontFamily;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "fontSize", {
      /**
       * The font size
       * (as a number it converts to px, but as a string, equivalents are '26px','20pt','160%' or '1.6em')
       */
      get: function() {
        return this._fontSize;
      },
      set: function(fontSize) {
        if (this._fontSize !== fontSize) {
          this._fontSize = fontSize;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "fontStyle", {
      /**
       * The font style
       * ('normal', 'italic' or 'oblique')
       *
       * @member {string}
       */
      get: function() {
        return this._fontStyle;
      },
      set: function(fontStyle) {
        if (this._fontStyle !== fontStyle) {
          this._fontStyle = fontStyle;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "fontVariant", {
      /**
       * The font variant
       * ('normal' or 'small-caps')
       *
       * @member {string}
       */
      get: function() {
        return this._fontVariant;
      },
      set: function(fontVariant) {
        if (this._fontVariant !== fontVariant) {
          this._fontVariant = fontVariant;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "fontWeight", {
      /**
       * The font weight
       * ('normal', 'bold', 'bolder', 'lighter' and '100', '200', '300', '400', '500', '600', '700', 800' or '900')
       *
       * @member {string}
       */
      get: function() {
        return this._fontWeight;
      },
      set: function(fontWeight) {
        if (this._fontWeight !== fontWeight) {
          this._fontWeight = fontWeight;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "letterSpacing", {
      /** The amount of spacing between letters, default is 0. */
      get: function() {
        return this._letterSpacing;
      },
      set: function(letterSpacing) {
        if (this._letterSpacing !== letterSpacing) {
          this._letterSpacing = letterSpacing;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "lineHeight", {
      /** The line height, a number that represents the vertical space that a letter uses. */
      get: function() {
        return this._lineHeight;
      },
      set: function(lineHeight) {
        if (this._lineHeight !== lineHeight) {
          this._lineHeight = lineHeight;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "leading", {
      /** The space between lines. */
      get: function() {
        return this._leading;
      },
      set: function(leading) {
        if (this._leading !== leading) {
          this._leading = leading;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "lineJoin", {
      /**
       * The lineJoin property sets the type of corner created, it can resolve spiked text issues.
       * Default is 'miter' (creates a sharp corner).
       *
       * @member {string}
       */
      get: function() {
        return this._lineJoin;
      },
      set: function(lineJoin) {
        if (this._lineJoin !== lineJoin) {
          this._lineJoin = lineJoin;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "miterLimit", {
      /**
       * The miter limit to use when using the 'miter' lineJoin mode.
       *
       * This can reduce or increase the spikiness of rendered text.
       */
      get: function() {
        return this._miterLimit;
      },
      set: function(miterLimit) {
        if (this._miterLimit !== miterLimit) {
          this._miterLimit = miterLimit;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "padding", {
      /**
       * Occasionally some fonts are cropped. Adding some padding will prevent this from happening
       * by adding padding to all sides of the text.
       */
      get: function() {
        return this._padding;
      },
      set: function(padding) {
        if (this._padding !== padding) {
          this._padding = padding;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "stroke", {
      /**
       * A canvas fillstyle that will be used on the text stroke
       * e.g 'blue', '#FCFF00'
       */
      get: function() {
        return this._stroke;
      },
      set: function(stroke) {
        var outputColor = getColor(stroke);
        if (this._stroke !== outputColor) {
          this._stroke = outputColor;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "strokeThickness", {
      /**
       * A number that represents the thickness of the stroke.
       *
       * @default 0
       */
      get: function() {
        return this._strokeThickness;
      },
      set: function(strokeThickness) {
        if (this._strokeThickness !== strokeThickness) {
          this._strokeThickness = strokeThickness;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "textBaseline", {
      /**
       * The baseline of the text that is rendered.
       *
       * @member {string}
       */
      get: function() {
        return this._textBaseline;
      },
      set: function(textBaseline) {
        if (this._textBaseline !== textBaseline) {
          this._textBaseline = textBaseline;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "trim", {
      /** Trim transparent borders. */
      get: function() {
        return this._trim;
      },
      set: function(trim) {
        if (this._trim !== trim) {
          this._trim = trim;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "whiteSpace", {
      /**
       * How newlines and spaces should be handled.
       * Default is 'pre' (preserve, preserve).
       *
       *  value       | New lines     |   Spaces
       *  ---         | ---           |   ---
       * 'normal'     | Collapse      |   Collapse
       * 'pre'        | Preserve      |   Preserve
       * 'pre-line'   | Preserve      |   Collapse
       *
       * @member {string}
       */
      get: function() {
        return this._whiteSpace;
      },
      set: function(whiteSpace) {
        if (this._whiteSpace !== whiteSpace) {
          this._whiteSpace = whiteSpace;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "wordWrap", {
      /** Indicates if word wrap should be used. */
      get: function() {
        return this._wordWrap;
      },
      set: function(wordWrap) {
        if (this._wordWrap !== wordWrap) {
          this._wordWrap = wordWrap;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextStyle2.prototype, "wordWrapWidth", {
      /** The width at which text will wrap, it needs wordWrap to be set to true. */
      get: function() {
        return this._wordWrapWidth;
      },
      set: function(wordWrapWidth) {
        if (this._wordWrapWidth !== wordWrapWidth) {
          this._wordWrapWidth = wordWrapWidth;
          this.styleID++;
        }
      },
      enumerable: false,
      configurable: true
    });
    TextStyle2.prototype.toFontString = function() {
      var fontSizeString = typeof this.fontSize === "number" ? this.fontSize + "px" : this.fontSize;
      var fontFamilies = this.fontFamily;
      if (!Array.isArray(this.fontFamily)) {
        fontFamilies = this.fontFamily.split(",");
      }
      for (var i = fontFamilies.length - 1; i >= 0; i--) {
        var fontFamily = fontFamilies[i].trim();
        if (!/([\"\'])[^\'\"]+\1/.test(fontFamily) && genericFontFamilies.indexOf(fontFamily) < 0) {
          fontFamily = '"' + fontFamily + '"';
        }
        fontFamilies[i] = fontFamily;
      }
      return this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + fontSizeString + " " + fontFamilies.join(",");
    };
    return TextStyle2;
  }()
);
function getSingleColor(color) {
  if (typeof color === "number") {
    return hex2string(color);
  } else if (typeof color === "string") {
    if (color.indexOf("0x") === 0) {
      color = color.replace("0x", "#");
    }
  }
  return color;
}
function getColor(color) {
  if (!Array.isArray(color)) {
    return getSingleColor(color);
  } else {
    for (var i = 0; i < color.length; ++i) {
      color[i] = getSingleColor(color[i]);
    }
    return color;
  }
}
function areArraysEqual(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }
  if (array1.length !== array2.length) {
    return false;
  }
  for (var i = 0; i < array1.length; ++i) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}
function deepCopyProperties(target, source, propertyObj) {
  for (var prop in propertyObj) {
    if (Array.isArray(source[prop])) {
      target[prop] = source[prop].slice();
    } else {
      target[prop] = source[prop];
    }
  }
}
var TextMetrics = (
  /** @class */
  function() {
    function TextMetrics2(text, style, width, height, lines, lineWidths, lineHeight, maxLineWidth, fontProperties) {
      this.text = text;
      this.style = style;
      this.width = width;
      this.height = height;
      this.lines = lines;
      this.lineWidths = lineWidths;
      this.lineHeight = lineHeight;
      this.maxLineWidth = maxLineWidth;
      this.fontProperties = fontProperties;
    }
    TextMetrics2.measureText = function(text, style, wordWrap, canvas) {
      if (canvas === void 0) {
        canvas = TextMetrics2._canvas;
      }
      wordWrap = wordWrap === void 0 || wordWrap === null ? style.wordWrap : wordWrap;
      var font = style.toFontString();
      var fontProperties = TextMetrics2.measureFont(font);
      if (fontProperties.fontSize === 0) {
        fontProperties.fontSize = style.fontSize;
        fontProperties.ascent = style.fontSize;
      }
      var context = canvas.getContext("2d");
      context.font = font;
      var outputText = wordWrap ? TextMetrics2.wordWrap(text, style, canvas) : text;
      var lines = outputText.split(/(?:\r\n|\r|\n)/);
      var lineWidths = new Array(lines.length);
      var maxLineWidth = 0;
      for (var i = 0; i < lines.length; i++) {
        var lineWidth = context.measureText(lines[i]).width + (lines[i].length - 1) * style.letterSpacing;
        lineWidths[i] = lineWidth;
        maxLineWidth = Math.max(maxLineWidth, lineWidth);
      }
      var width = maxLineWidth + style.strokeThickness;
      if (style.dropShadow) {
        width += style.dropShadowDistance;
      }
      var lineHeight = style.lineHeight || fontProperties.fontSize + style.strokeThickness;
      var height = Math.max(lineHeight, fontProperties.fontSize + style.strokeThickness) + (lines.length - 1) * (lineHeight + style.leading);
      if (style.dropShadow) {
        height += style.dropShadowDistance;
      }
      return new TextMetrics2(text, style, width, height, lines, lineWidths, lineHeight + style.leading, maxLineWidth, fontProperties);
    };
    TextMetrics2.wordWrap = function(text, style, canvas) {
      if (canvas === void 0) {
        canvas = TextMetrics2._canvas;
      }
      var context = canvas.getContext("2d");
      var width = 0;
      var line = "";
      var lines = "";
      var cache = /* @__PURE__ */ Object.create(null);
      var letterSpacing = style.letterSpacing, whiteSpace = style.whiteSpace;
      var collapseSpaces = TextMetrics2.collapseSpaces(whiteSpace);
      var collapseNewlines = TextMetrics2.collapseNewlines(whiteSpace);
      var canPrependSpaces = !collapseSpaces;
      var wordWrapWidth = style.wordWrapWidth + letterSpacing;
      var tokens = TextMetrics2.tokenize(text);
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        if (TextMetrics2.isNewline(token)) {
          if (!collapseNewlines) {
            lines += TextMetrics2.addLine(line);
            canPrependSpaces = !collapseSpaces;
            line = "";
            width = 0;
            continue;
          }
          token = " ";
        }
        if (collapseSpaces) {
          var currIsBreakingSpace = TextMetrics2.isBreakingSpace(token);
          var lastIsBreakingSpace = TextMetrics2.isBreakingSpace(line[line.length - 1]);
          if (currIsBreakingSpace && lastIsBreakingSpace) {
            continue;
          }
        }
        var tokenWidth = TextMetrics2.getFromCache(token, letterSpacing, cache, context);
        if (tokenWidth > wordWrapWidth) {
          if (line !== "") {
            lines += TextMetrics2.addLine(line);
            line = "";
            width = 0;
          }
          if (TextMetrics2.canBreakWords(token, style.breakWords)) {
            var characters = TextMetrics2.wordWrapSplit(token);
            for (var j = 0; j < characters.length; j++) {
              var char = characters[j];
              var k = 1;
              while (characters[j + k]) {
                var nextChar = characters[j + k];
                var lastChar = char[char.length - 1];
                if (!TextMetrics2.canBreakChars(lastChar, nextChar, token, j, style.breakWords)) {
                  char += nextChar;
                } else {
                  break;
                }
                k++;
              }
              j += char.length - 1;
              var characterWidth = TextMetrics2.getFromCache(char, letterSpacing, cache, context);
              if (characterWidth + width > wordWrapWidth) {
                lines += TextMetrics2.addLine(line);
                canPrependSpaces = false;
                line = "";
                width = 0;
              }
              line += char;
              width += characterWidth;
            }
          } else {
            if (line.length > 0) {
              lines += TextMetrics2.addLine(line);
              line = "";
              width = 0;
            }
            var isLastToken = i === tokens.length - 1;
            lines += TextMetrics2.addLine(token, !isLastToken);
            canPrependSpaces = false;
            line = "";
            width = 0;
          }
        } else {
          if (tokenWidth + width > wordWrapWidth) {
            canPrependSpaces = false;
            lines += TextMetrics2.addLine(line);
            line = "";
            width = 0;
          }
          if (line.length > 0 || !TextMetrics2.isBreakingSpace(token) || canPrependSpaces) {
            line += token;
            width += tokenWidth;
          }
        }
      }
      lines += TextMetrics2.addLine(line, false);
      return lines;
    };
    TextMetrics2.addLine = function(line, newLine) {
      if (newLine === void 0) {
        newLine = true;
      }
      line = TextMetrics2.trimRight(line);
      line = newLine ? line + "\n" : line;
      return line;
    };
    TextMetrics2.getFromCache = function(key, letterSpacing, cache, context) {
      var width = cache[key];
      if (typeof width !== "number") {
        var spacing = key.length * letterSpacing;
        width = context.measureText(key).width + spacing;
        cache[key] = width;
      }
      return width;
    };
    TextMetrics2.collapseSpaces = function(whiteSpace) {
      return whiteSpace === "normal" || whiteSpace === "pre-line";
    };
    TextMetrics2.collapseNewlines = function(whiteSpace) {
      return whiteSpace === "normal";
    };
    TextMetrics2.trimRight = function(text) {
      if (typeof text !== "string") {
        return "";
      }
      for (var i = text.length - 1; i >= 0; i--) {
        var char = text[i];
        if (!TextMetrics2.isBreakingSpace(char)) {
          break;
        }
        text = text.slice(0, -1);
      }
      return text;
    };
    TextMetrics2.isNewline = function(char) {
      if (typeof char !== "string") {
        return false;
      }
      return TextMetrics2._newlines.indexOf(char.charCodeAt(0)) >= 0;
    };
    TextMetrics2.isBreakingSpace = function(char, _nextChar) {
      if (typeof char !== "string") {
        return false;
      }
      return TextMetrics2._breakingSpaces.indexOf(char.charCodeAt(0)) >= 0;
    };
    TextMetrics2.tokenize = function(text) {
      var tokens = [];
      var token = "";
      if (typeof text !== "string") {
        return tokens;
      }
      for (var i = 0; i < text.length; i++) {
        var char = text[i];
        var nextChar = text[i + 1];
        if (TextMetrics2.isBreakingSpace(char, nextChar) || TextMetrics2.isNewline(char)) {
          if (token !== "") {
            tokens.push(token);
            token = "";
          }
          tokens.push(char);
          continue;
        }
        token += char;
      }
      if (token !== "") {
        tokens.push(token);
      }
      return tokens;
    };
    TextMetrics2.canBreakWords = function(_token, breakWords) {
      return breakWords;
    };
    TextMetrics2.canBreakChars = function(_char, _nextChar, _token, _index, _breakWords) {
      return true;
    };
    TextMetrics2.wordWrapSplit = function(token) {
      return token.split("");
    };
    TextMetrics2.measureFont = function(font) {
      if (TextMetrics2._fonts[font]) {
        return TextMetrics2._fonts[font];
      }
      var properties = {
        ascent: 0,
        descent: 0,
        fontSize: 0
      };
      var canvas = TextMetrics2._canvas;
      var context = TextMetrics2._context;
      context.font = font;
      var metricsString = TextMetrics2.METRICS_STRING + TextMetrics2.BASELINE_SYMBOL;
      var width = Math.ceil(context.measureText(metricsString).width);
      var baseline = Math.ceil(context.measureText(TextMetrics2.BASELINE_SYMBOL).width);
      var height = Math.ceil(TextMetrics2.HEIGHT_MULTIPLIER * baseline);
      baseline = baseline * TextMetrics2.BASELINE_MULTIPLIER | 0;
      canvas.width = width;
      canvas.height = height;
      context.fillStyle = "#f00";
      context.fillRect(0, 0, width, height);
      context.font = font;
      context.textBaseline = "alphabetic";
      context.fillStyle = "#000";
      context.fillText(metricsString, 0, baseline);
      var imagedata = context.getImageData(0, 0, width, height).data;
      var pixels = imagedata.length;
      var line = width * 4;
      var i = 0;
      var idx = 0;
      var stop = false;
      for (i = 0; i < baseline; ++i) {
        for (var j = 0; j < line; j += 4) {
          if (imagedata[idx + j] !== 255) {
            stop = true;
            break;
          }
        }
        if (!stop) {
          idx += line;
        } else {
          break;
        }
      }
      properties.ascent = baseline - i;
      idx = pixels - line;
      stop = false;
      for (i = height; i > baseline; --i) {
        for (var j = 0; j < line; j += 4) {
          if (imagedata[idx + j] !== 255) {
            stop = true;
            break;
          }
        }
        if (!stop) {
          idx -= line;
        } else {
          break;
        }
      }
      properties.descent = i - baseline;
      properties.fontSize = properties.ascent + properties.descent;
      TextMetrics2._fonts[font] = properties;
      return properties;
    };
    TextMetrics2.clearMetrics = function(font) {
      if (font === void 0) {
        font = "";
      }
      if (font) {
        delete TextMetrics2._fonts[font];
      } else {
        TextMetrics2._fonts = {};
      }
    };
    Object.defineProperty(TextMetrics2, "_canvas", {
      /**
       * Cached canvas element for measuring text
       * TODO: this should be private, but isn't because of backward compat, will fix later.
       * @ignore
       */
      get: function() {
        if (!TextMetrics2.__canvas) {
          var canvas = void 0;
          try {
            var c = new OffscreenCanvas(0, 0);
            var context = c.getContext("2d");
            if (context && context.measureText) {
              TextMetrics2.__canvas = c;
              return c;
            }
            canvas = settings.ADAPTER.createCanvas();
          } catch (ex) {
            canvas = settings.ADAPTER.createCanvas();
          }
          canvas.width = canvas.height = 10;
          TextMetrics2.__canvas = canvas;
        }
        return TextMetrics2.__canvas;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextMetrics2, "_context", {
      /**
       * TODO: this should be private, but isn't because of backward compat, will fix later.
       * @ignore
       */
      get: function() {
        if (!TextMetrics2.__context) {
          TextMetrics2.__context = TextMetrics2._canvas.getContext("2d");
        }
        return TextMetrics2.__context;
      },
      enumerable: false,
      configurable: true
    });
    return TextMetrics2;
  }()
);
TextMetrics._fonts = {};
TextMetrics.METRICS_STRING = "|ÉqÅ";
TextMetrics.BASELINE_SYMBOL = "M";
TextMetrics.BASELINE_MULTIPLIER = 1.4;
TextMetrics.HEIGHT_MULTIPLIER = 2;
TextMetrics._newlines = [
  10,
  13
];
TextMetrics._breakingSpaces = [
  9,
  32,
  8192,
  8193,
  8194,
  8195,
  8196,
  8197,
  8198,
  8200,
  8201,
  8202,
  8287,
  12288
];
var defaultDestroyOptions = {
  texture: true,
  children: false,
  baseTexture: true
};
var Text = (
  /** @class */
  function(_super) {
    __extends6(Text2, _super);
    function Text2(text, style, canvas) {
      var _this = this;
      var ownCanvas = false;
      if (!canvas) {
        canvas = settings.ADAPTER.createCanvas();
        ownCanvas = true;
      }
      canvas.width = 3;
      canvas.height = 3;
      var texture = Texture.from(canvas);
      texture.orig = new Rectangle();
      texture.trim = new Rectangle();
      _this = _super.call(this, texture) || this;
      _this._ownCanvas = ownCanvas;
      _this.canvas = canvas;
      _this.context = canvas.getContext("2d");
      _this._resolution = settings.RESOLUTION;
      _this._autoResolution = true;
      _this._text = null;
      _this._style = null;
      _this._styleListener = null;
      _this._font = "";
      _this.text = text;
      _this.style = style;
      _this.localStyleID = -1;
      return _this;
    }
    Text2.prototype.updateText = function(respectDirty) {
      var style = this._style;
      if (this.localStyleID !== style.styleID) {
        this.dirty = true;
        this.localStyleID = style.styleID;
      }
      if (!this.dirty && respectDirty) {
        return;
      }
      this._font = this._style.toFontString();
      var context = this.context;
      var measured = TextMetrics.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas);
      var width = measured.width;
      var height = measured.height;
      var lines = measured.lines;
      var lineHeight = measured.lineHeight;
      var lineWidths = measured.lineWidths;
      var maxLineWidth = measured.maxLineWidth;
      var fontProperties = measured.fontProperties;
      this.canvas.width = Math.ceil(Math.ceil(Math.max(1, width) + style.padding * 2) * this._resolution);
      this.canvas.height = Math.ceil(Math.ceil(Math.max(1, height) + style.padding * 2) * this._resolution);
      context.scale(this._resolution, this._resolution);
      context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      context.font = this._font;
      context.lineWidth = style.strokeThickness;
      context.textBaseline = style.textBaseline;
      context.lineJoin = style.lineJoin;
      context.miterLimit = style.miterLimit;
      var linePositionX;
      var linePositionY;
      var passesCount = style.dropShadow ? 2 : 1;
      for (var i = 0; i < passesCount; ++i) {
        var isShadowPass = style.dropShadow && i === 0;
        var dsOffsetText = isShadowPass ? Math.ceil(Math.max(1, height) + style.padding * 2) : 0;
        var dsOffsetShadow = dsOffsetText * this._resolution;
        if (isShadowPass) {
          context.fillStyle = "black";
          context.strokeStyle = "black";
          var dropShadowColor = style.dropShadowColor;
          var rgb = hex2rgb(typeof dropShadowColor === "number" ? dropShadowColor : string2hex(dropShadowColor));
          var dropShadowBlur = style.dropShadowBlur * this._resolution;
          var dropShadowDistance = style.dropShadowDistance * this._resolution;
          context.shadowColor = "rgba(" + rgb[0] * 255 + "," + rgb[1] * 255 + "," + rgb[2] * 255 + "," + style.dropShadowAlpha + ")";
          context.shadowBlur = dropShadowBlur;
          context.shadowOffsetX = Math.cos(style.dropShadowAngle) * dropShadowDistance;
          context.shadowOffsetY = Math.sin(style.dropShadowAngle) * dropShadowDistance + dsOffsetShadow;
        } else {
          context.fillStyle = this._generateFillStyle(style, lines, measured);
          context.strokeStyle = style.stroke;
          context.shadowColor = "black";
          context.shadowBlur = 0;
          context.shadowOffsetX = 0;
          context.shadowOffsetY = 0;
        }
        var linePositionYShift = (lineHeight - fontProperties.fontSize) / 2;
        if (!Text2.nextLineHeightBehavior || lineHeight - fontProperties.fontSize < 0) {
          linePositionYShift = 0;
        }
        for (var i_1 = 0; i_1 < lines.length; i_1++) {
          linePositionX = style.strokeThickness / 2;
          linePositionY = style.strokeThickness / 2 + i_1 * lineHeight + fontProperties.ascent + linePositionYShift;
          if (style.align === "right") {
            linePositionX += maxLineWidth - lineWidths[i_1];
          } else if (style.align === "center") {
            linePositionX += (maxLineWidth - lineWidths[i_1]) / 2;
          }
          if (style.stroke && style.strokeThickness) {
            this.drawLetterSpacing(lines[i_1], linePositionX + style.padding, linePositionY + style.padding - dsOffsetText, true);
          }
          if (style.fill) {
            this.drawLetterSpacing(lines[i_1], linePositionX + style.padding, linePositionY + style.padding - dsOffsetText);
          }
        }
      }
      this.updateTexture();
    };
    Text2.prototype.drawLetterSpacing = function(text, x, y, isStroke) {
      if (isStroke === void 0) {
        isStroke = false;
      }
      var style = this._style;
      var letterSpacing = style.letterSpacing;
      var supportLetterSpacing = Text2.experimentalLetterSpacing && ("letterSpacing" in CanvasRenderingContext2D.prototype || "textLetterSpacing" in CanvasRenderingContext2D.prototype);
      if (letterSpacing === 0 || supportLetterSpacing) {
        if (supportLetterSpacing) {
          this.context.letterSpacing = letterSpacing;
          this.context.textLetterSpacing = letterSpacing;
        }
        if (isStroke) {
          this.context.strokeText(text, x, y);
        } else {
          this.context.fillText(text, x, y);
        }
        return;
      }
      var currentPosition = x;
      var stringArray = Array.from ? Array.from(text) : text.split("");
      var previousWidth = this.context.measureText(text).width;
      var currentWidth = 0;
      for (var i = 0; i < stringArray.length; ++i) {
        var currentChar = stringArray[i];
        if (isStroke) {
          this.context.strokeText(currentChar, currentPosition, y);
        } else {
          this.context.fillText(currentChar, currentPosition, y);
        }
        var textStr = "";
        for (var j = i + 1; j < stringArray.length; ++j) {
          textStr += stringArray[j];
        }
        currentWidth = this.context.measureText(textStr).width;
        currentPosition += previousWidth - currentWidth + letterSpacing;
        previousWidth = currentWidth;
      }
    };
    Text2.prototype.updateTexture = function() {
      var canvas = this.canvas;
      if (this._style.trim) {
        var trimmed = trimCanvas(canvas);
        if (trimmed.data) {
          canvas.width = trimmed.width;
          canvas.height = trimmed.height;
          this.context.putImageData(trimmed.data, 0, 0);
        }
      }
      var texture = this._texture;
      var style = this._style;
      var padding = style.trim ? 0 : style.padding;
      var baseTexture = texture.baseTexture;
      texture.trim.width = texture._frame.width = canvas.width / this._resolution;
      texture.trim.height = texture._frame.height = canvas.height / this._resolution;
      texture.trim.x = -padding;
      texture.trim.y = -padding;
      texture.orig.width = texture._frame.width - padding * 2;
      texture.orig.height = texture._frame.height - padding * 2;
      this._onTextureUpdate();
      baseTexture.setRealSize(canvas.width, canvas.height, this._resolution);
      texture.updateUvs();
      this.dirty = false;
    };
    Text2.prototype._render = function(renderer) {
      if (this._autoResolution && this._resolution !== renderer.resolution) {
        this._resolution = renderer.resolution;
        this.dirty = true;
      }
      this.updateText(true);
      _super.prototype._render.call(this, renderer);
    };
    Text2.prototype.updateTransform = function() {
      this.updateText(true);
      _super.prototype.updateTransform.call(this);
    };
    Text2.prototype.getBounds = function(skipUpdate, rect) {
      this.updateText(true);
      if (this._textureID === -1) {
        skipUpdate = false;
      }
      return _super.prototype.getBounds.call(this, skipUpdate, rect);
    };
    Text2.prototype.getLocalBounds = function(rect) {
      this.updateText(true);
      return _super.prototype.getLocalBounds.call(this, rect);
    };
    Text2.prototype._calculateBounds = function() {
      this.calculateVertices();
      this._bounds.addQuad(this.vertexData);
    };
    Text2.prototype._generateFillStyle = function(style, lines, metrics) {
      var fillStyle = style.fill;
      if (!Array.isArray(fillStyle)) {
        return fillStyle;
      } else if (fillStyle.length === 1) {
        return fillStyle[0];
      }
      var gradient;
      var dropShadowCorrection = style.dropShadow ? style.dropShadowDistance : 0;
      var padding = style.padding || 0;
      var width = this.canvas.width / this._resolution - dropShadowCorrection - padding * 2;
      var height = this.canvas.height / this._resolution - dropShadowCorrection - padding * 2;
      var fill = fillStyle.slice();
      var fillGradientStops = style.fillGradientStops.slice();
      if (!fillGradientStops.length) {
        var lengthPlus1 = fill.length + 1;
        for (var i = 1; i < lengthPlus1; ++i) {
          fillGradientStops.push(i / lengthPlus1);
        }
      }
      fill.unshift(fillStyle[0]);
      fillGradientStops.unshift(0);
      fill.push(fillStyle[fillStyle.length - 1]);
      fillGradientStops.push(1);
      if (style.fillGradientType === TEXT_GRADIENT.LINEAR_VERTICAL) {
        gradient = this.context.createLinearGradient(width / 2, padding, width / 2, height + padding);
        var textHeight = metrics.fontProperties.fontSize + style.strokeThickness;
        for (var i = 0; i < lines.length; i++) {
          var lastLineBottom = metrics.lineHeight * (i - 1) + textHeight;
          var thisLineTop = metrics.lineHeight * i;
          var thisLineGradientStart = thisLineTop;
          if (i > 0 && lastLineBottom > thisLineTop) {
            thisLineGradientStart = (thisLineTop + lastLineBottom) / 2;
          }
          var thisLineBottom = thisLineTop + textHeight;
          var nextLineTop = metrics.lineHeight * (i + 1);
          var thisLineGradientEnd = thisLineBottom;
          if (i + 1 < lines.length && nextLineTop < thisLineBottom) {
            thisLineGradientEnd = (thisLineBottom + nextLineTop) / 2;
          }
          var gradStopLineHeight = (thisLineGradientEnd - thisLineGradientStart) / height;
          for (var j = 0; j < fill.length; j++) {
            var lineStop = 0;
            if (typeof fillGradientStops[j] === "number") {
              lineStop = fillGradientStops[j];
            } else {
              lineStop = j / fill.length;
            }
            var globalStop = Math.min(1, Math.max(0, thisLineGradientStart / height + lineStop * gradStopLineHeight));
            globalStop = Number(globalStop.toFixed(5));
            gradient.addColorStop(globalStop, fill[j]);
          }
        }
      } else {
        gradient = this.context.createLinearGradient(padding, height / 2, width + padding, height / 2);
        var totalIterations = fill.length + 1;
        var currentIteration = 1;
        for (var i = 0; i < fill.length; i++) {
          var stop = void 0;
          if (typeof fillGradientStops[i] === "number") {
            stop = fillGradientStops[i];
          } else {
            stop = currentIteration / totalIterations;
          }
          gradient.addColorStop(stop, fill[i]);
          currentIteration++;
        }
      }
      return gradient;
    };
    Text2.prototype.destroy = function(options) {
      if (typeof options === "boolean") {
        options = { children: options };
      }
      options = Object.assign({}, defaultDestroyOptions, options);
      _super.prototype.destroy.call(this, options);
      if (this._ownCanvas) {
        this.canvas.height = this.canvas.width = 0;
      }
      this.context = null;
      this.canvas = null;
      this._style = null;
    };
    Object.defineProperty(Text2.prototype, "width", {
      /** The width of the Text, setting this will actually modify the scale to achieve the value set. */
      get: function() {
        this.updateText(true);
        return Math.abs(this.scale.x) * this._texture.orig.width;
      },
      set: function(value) {
        this.updateText(true);
        var s = sign(this.scale.x) || 1;
        this.scale.x = s * value / this._texture.orig.width;
        this._width = value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Text2.prototype, "height", {
      /** The height of the Text, setting this will actually modify the scale to achieve the value set. */
      get: function() {
        this.updateText(true);
        return Math.abs(this.scale.y) * this._texture.orig.height;
      },
      set: function(value) {
        this.updateText(true);
        var s = sign(this.scale.y) || 1;
        this.scale.y = s * value / this._texture.orig.height;
        this._height = value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Text2.prototype, "style", {
      /**
       * Set the style of the text.
       *
       * Set up an event listener to listen for changes on the style object and mark the text as dirty.
       */
      get: function() {
        return this._style;
      },
      set: function(style) {
        style = style || {};
        if (style instanceof TextStyle) {
          this._style = style;
        } else {
          this._style = new TextStyle(style);
        }
        this.localStyleID = -1;
        this.dirty = true;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Text2.prototype, "text", {
      /** Set the copy for the text object. To split a line you can use '\n'. */
      get: function() {
        return this._text;
      },
      set: function(text) {
        text = String(text === null || text === void 0 ? "" : text);
        if (this._text === text) {
          return;
        }
        this._text = text;
        this.dirty = true;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Text2.prototype, "resolution", {
      /**
       * The resolution / device pixel ratio of the canvas.
       *
       * This is set to automatically match the renderer resolution by default, but can be overridden by setting manually.
       * @default 1
       */
      get: function() {
        return this._resolution;
      },
      set: function(value) {
        this._autoResolution = false;
        if (this._resolution === value) {
          return;
        }
        this._resolution = value;
        this.dirty = true;
      },
      enumerable: false,
      configurable: true
    });
    Text2.nextLineHeightBehavior = false;
    Text2.experimentalLetterSpacing = false;
    return Text2;
  }(Sprite)
);

// node_modules/.pnpm/@pixi+prepare@6.5.2_@pixi+core@6.5.2_@pixi+display@6.5.2_@pixi+graphics@6.5.2_@pixi+settings@_wzclveurlpp324dijj7zqg4jby/node_modules/@pixi/prepare/dist/esm/prepare.mjs
settings.UPLOADS_PER_FRAME = 4;
var extendStatics7 = function(d, b) {
  extendStatics7 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) {
      if (b2.hasOwnProperty(p)) {
        d2[p] = b2[p];
      }
    }
  };
  return extendStatics7(d, b);
};
function __extends7(d, b) {
  extendStatics7(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var CountLimiter = (
  /** @class */
  function() {
    function CountLimiter2(maxItemsPerFrame) {
      this.maxItemsPerFrame = maxItemsPerFrame;
      this.itemsLeft = 0;
    }
    CountLimiter2.prototype.beginFrame = function() {
      this.itemsLeft = this.maxItemsPerFrame;
    };
    CountLimiter2.prototype.allowedToUpload = function() {
      return this.itemsLeft-- > 0;
    };
    return CountLimiter2;
  }()
);
function findMultipleBaseTextures(item, queue) {
  var result = false;
  if (item && item._textures && item._textures.length) {
    for (var i = 0; i < item._textures.length; i++) {
      if (item._textures[i] instanceof Texture) {
        var baseTexture = item._textures[i].baseTexture;
        if (queue.indexOf(baseTexture) === -1) {
          queue.push(baseTexture);
          result = true;
        }
      }
    }
  }
  return result;
}
function findBaseTexture(item, queue) {
  if (item.baseTexture instanceof BaseTexture) {
    var texture = item.baseTexture;
    if (queue.indexOf(texture) === -1) {
      queue.push(texture);
    }
    return true;
  }
  return false;
}
function findTexture(item, queue) {
  if (item._texture && item._texture instanceof Texture) {
    var texture = item._texture.baseTexture;
    if (queue.indexOf(texture) === -1) {
      queue.push(texture);
    }
    return true;
  }
  return false;
}
function drawText(_helper, item) {
  if (item instanceof Text) {
    item.updateText(true);
    return true;
  }
  return false;
}
function calculateTextStyle(_helper, item) {
  if (item instanceof TextStyle) {
    var font = item.toFontString();
    TextMetrics.measureFont(font);
    return true;
  }
  return false;
}
function findText(item, queue) {
  if (item instanceof Text) {
    if (queue.indexOf(item.style) === -1) {
      queue.push(item.style);
    }
    if (queue.indexOf(item) === -1) {
      queue.push(item);
    }
    var texture = item._texture.baseTexture;
    if (queue.indexOf(texture) === -1) {
      queue.push(texture);
    }
    return true;
  }
  return false;
}
function findTextStyle(item, queue) {
  if (item instanceof TextStyle) {
    if (queue.indexOf(item) === -1) {
      queue.push(item);
    }
    return true;
  }
  return false;
}
var BasePrepare = (
  /** @class */
  function() {
    function BasePrepare2(renderer) {
      var _this = this;
      this.limiter = new CountLimiter(settings.UPLOADS_PER_FRAME);
      this.renderer = renderer;
      this.uploadHookHelper = null;
      this.queue = [];
      this.addHooks = [];
      this.uploadHooks = [];
      this.completes = [];
      this.ticking = false;
      this.delayedTick = function() {
        if (!_this.queue) {
          return;
        }
        _this.prepareItems();
      };
      this.registerFindHook(findText);
      this.registerFindHook(findTextStyle);
      this.registerFindHook(findMultipleBaseTextures);
      this.registerFindHook(findBaseTexture);
      this.registerFindHook(findTexture);
      this.registerUploadHook(drawText);
      this.registerUploadHook(calculateTextStyle);
    }
    BasePrepare2.prototype.upload = function(item, done) {
      var _this = this;
      if (typeof item === "function") {
        done = item;
        item = null;
      }
      if (done) {
        deprecation("6.5.0", "BasePrepare.upload callback is deprecated, use the return Promise instead.");
      }
      return new Promise(function(resolve2) {
        if (item) {
          _this.add(item);
        }
        var complete = function() {
          done === null || done === void 0 ? void 0 : done();
          resolve2();
        };
        if (_this.queue.length) {
          _this.completes.push(complete);
          if (!_this.ticking) {
            _this.ticking = true;
            Ticker.system.addOnce(_this.tick, _this, UPDATE_PRIORITY.UTILITY);
          }
        } else {
          complete();
        }
      });
    };
    BasePrepare2.prototype.tick = function() {
      setTimeout(this.delayedTick, 0);
    };
    BasePrepare2.prototype.prepareItems = function() {
      this.limiter.beginFrame();
      while (this.queue.length && this.limiter.allowedToUpload()) {
        var item = this.queue[0];
        var uploaded = false;
        if (item && !item._destroyed) {
          for (var i = 0, len = this.uploadHooks.length; i < len; i++) {
            if (this.uploadHooks[i](this.uploadHookHelper, item)) {
              this.queue.shift();
              uploaded = true;
              break;
            }
          }
        }
        if (!uploaded) {
          this.queue.shift();
        }
      }
      if (!this.queue.length) {
        this.ticking = false;
        var completes = this.completes.slice(0);
        this.completes.length = 0;
        for (var i = 0, len = completes.length; i < len; i++) {
          completes[i]();
        }
      } else {
        Ticker.system.addOnce(this.tick, this, UPDATE_PRIORITY.UTILITY);
      }
    };
    BasePrepare2.prototype.registerFindHook = function(addHook) {
      if (addHook) {
        this.addHooks.push(addHook);
      }
      return this;
    };
    BasePrepare2.prototype.registerUploadHook = function(uploadHook) {
      if (uploadHook) {
        this.uploadHooks.push(uploadHook);
      }
      return this;
    };
    BasePrepare2.prototype.add = function(item) {
      for (var i = 0, len = this.addHooks.length; i < len; i++) {
        if (this.addHooks[i](item, this.queue)) {
          break;
        }
      }
      if (item instanceof Container) {
        for (var i = item.children.length - 1; i >= 0; i--) {
          this.add(item.children[i]);
        }
      }
      return this;
    };
    BasePrepare2.prototype.destroy = function() {
      if (this.ticking) {
        Ticker.system.remove(this.tick, this);
      }
      this.ticking = false;
      this.addHooks = null;
      this.uploadHooks = null;
      this.renderer = null;
      this.completes = null;
      this.queue = null;
      this.limiter = null;
      this.uploadHookHelper = null;
    };
    return BasePrepare2;
  }()
);
function uploadBaseTextures(renderer, item) {
  if (item instanceof BaseTexture) {
    if (!item._glTextures[renderer.CONTEXT_UID]) {
      renderer.texture.bind(item);
    }
    return true;
  }
  return false;
}
function uploadGraphics(renderer, item) {
  if (!(item instanceof Graphics)) {
    return false;
  }
  var geometry = item.geometry;
  item.finishPoly();
  geometry.updateBatches();
  var batches = geometry.batches;
  for (var i = 0; i < batches.length; i++) {
    var texture = batches[i].style.texture;
    if (texture) {
      uploadBaseTextures(renderer, texture.baseTexture);
    }
  }
  if (!geometry.batchable) {
    renderer.geometry.bind(geometry, item._resolveDirectShader(renderer));
  }
  return true;
}
function findGraphics(item, queue) {
  if (item instanceof Graphics) {
    queue.push(item);
    return true;
  }
  return false;
}
var Prepare = (
  /** @class */
  function(_super) {
    __extends7(Prepare2, _super);
    function Prepare2(renderer) {
      var _this = _super.call(this, renderer) || this;
      _this.uploadHookHelper = _this.renderer;
      _this.registerFindHook(findGraphics);
      _this.registerUploadHook(uploadBaseTextures);
      _this.registerUploadHook(uploadGraphics);
      return _this;
    }
    Prepare2.extension = {
      name: "prepare",
      type: ExtensionType.RendererPlugin
    };
    return Prepare2;
  }(BasePrepare)
);
var TimeLimiter = (
  /** @class */
  function() {
    function TimeLimiter2(maxMilliseconds) {
      this.maxMilliseconds = maxMilliseconds;
      this.frameStart = 0;
    }
    TimeLimiter2.prototype.beginFrame = function() {
      this.frameStart = Date.now();
    };
    TimeLimiter2.prototype.allowedToUpload = function() {
      return Date.now() - this.frameStart < this.maxMilliseconds;
    };
    return TimeLimiter2;
  }()
);

// node_modules/.pnpm/@pixi+spritesheet@6.5.2_@pixi+core@6.5.2_@pixi+loaders@6.5.2_@pixi+math@6.5.2_@pixi+utils@6.5.2/node_modules/@pixi/spritesheet/dist/esm/spritesheet.mjs
var Spritesheet = (
  /** @class */
  function() {
    function Spritesheet2(texture, data, resolutionFilename) {
      if (resolutionFilename === void 0) {
        resolutionFilename = null;
      }
      this.linkedSheets = [];
      this._texture = texture instanceof Texture ? texture : null;
      this.baseTexture = texture instanceof BaseTexture ? texture : this._texture.baseTexture;
      this.textures = {};
      this.animations = {};
      this.data = data;
      var resource = this.baseTexture.resource;
      this.resolution = this._updateResolution(resolutionFilename || (resource ? resource.url : null));
      this._frames = this.data.frames;
      this._frameKeys = Object.keys(this._frames);
      this._batchIndex = 0;
      this._callback = null;
    }
    Spritesheet2.prototype._updateResolution = function(resolutionFilename) {
      if (resolutionFilename === void 0) {
        resolutionFilename = null;
      }
      var scale = this.data.meta.scale;
      var resolution = getResolutionOfUrl(resolutionFilename, null);
      if (resolution === null) {
        resolution = scale !== void 0 ? parseFloat(scale) : 1;
      }
      if (resolution !== 1) {
        this.baseTexture.setResolution(resolution);
      }
      return resolution;
    };
    Spritesheet2.prototype.parse = function(callback) {
      var _this = this;
      if (callback) {
        deprecation("6.5.0", "Spritesheet.parse callback is deprecated, use the return Promise instead.");
      }
      return new Promise(function(resolve2) {
        _this._callback = function(textures) {
          callback === null || callback === void 0 ? void 0 : callback(textures);
          resolve2(textures);
        };
        _this._batchIndex = 0;
        if (_this._frameKeys.length <= Spritesheet2.BATCH_SIZE) {
          _this._processFrames(0);
          _this._processAnimations();
          _this._parseComplete();
        } else {
          _this._nextBatch();
        }
      });
    };
    Spritesheet2.prototype._processFrames = function(initialFrameIndex) {
      var frameIndex = initialFrameIndex;
      var maxFrames = Spritesheet2.BATCH_SIZE;
      while (frameIndex - initialFrameIndex < maxFrames && frameIndex < this._frameKeys.length) {
        var i = this._frameKeys[frameIndex];
        var data = this._frames[i];
        var rect = data.frame;
        if (rect) {
          var frame = null;
          var trim = null;
          var sourceSize = data.trimmed !== false && data.sourceSize ? data.sourceSize : data.frame;
          var orig = new Rectangle(0, 0, Math.floor(sourceSize.w) / this.resolution, Math.floor(sourceSize.h) / this.resolution);
          if (data.rotated) {
            frame = new Rectangle(Math.floor(rect.x) / this.resolution, Math.floor(rect.y) / this.resolution, Math.floor(rect.h) / this.resolution, Math.floor(rect.w) / this.resolution);
          } else {
            frame = new Rectangle(Math.floor(rect.x) / this.resolution, Math.floor(rect.y) / this.resolution, Math.floor(rect.w) / this.resolution, Math.floor(rect.h) / this.resolution);
          }
          if (data.trimmed !== false && data.spriteSourceSize) {
            trim = new Rectangle(Math.floor(data.spriteSourceSize.x) / this.resolution, Math.floor(data.spriteSourceSize.y) / this.resolution, Math.floor(rect.w) / this.resolution, Math.floor(rect.h) / this.resolution);
          }
          this.textures[i] = new Texture(this.baseTexture, frame, orig, trim, data.rotated ? 2 : 0, data.anchor);
          Texture.addToCache(this.textures[i], i);
        }
        frameIndex++;
      }
    };
    Spritesheet2.prototype._processAnimations = function() {
      var animations = this.data.animations || {};
      for (var animName in animations) {
        this.animations[animName] = [];
        for (var i = 0; i < animations[animName].length; i++) {
          var frameName = animations[animName][i];
          this.animations[animName].push(this.textures[frameName]);
        }
      }
    };
    Spritesheet2.prototype._parseComplete = function() {
      var callback = this._callback;
      this._callback = null;
      this._batchIndex = 0;
      callback.call(this, this.textures);
    };
    Spritesheet2.prototype._nextBatch = function() {
      var _this = this;
      this._processFrames(this._batchIndex * Spritesheet2.BATCH_SIZE);
      this._batchIndex++;
      setTimeout(function() {
        if (_this._batchIndex * Spritesheet2.BATCH_SIZE < _this._frameKeys.length) {
          _this._nextBatch();
        } else {
          _this._processAnimations();
          _this._parseComplete();
        }
      }, 0);
    };
    Spritesheet2.prototype.destroy = function(destroyBase) {
      var _a3;
      if (destroyBase === void 0) {
        destroyBase = false;
      }
      for (var i in this.textures) {
        this.textures[i].destroy();
      }
      this._frames = null;
      this._frameKeys = null;
      this.data = null;
      this.textures = null;
      if (destroyBase) {
        (_a3 = this._texture) === null || _a3 === void 0 ? void 0 : _a3.destroy();
        this.baseTexture.destroy();
      }
      this._texture = null;
      this.baseTexture = null;
      this.linkedSheets = [];
    };
    Spritesheet2.BATCH_SIZE = 1e3;
    return Spritesheet2;
  }()
);
var SpritesheetLoader = (
  /** @class */
  function() {
    function SpritesheetLoader2() {
    }
    SpritesheetLoader2.use = function(resource, next) {
      var _a3, _b2;
      var loader = this;
      var imageResourceName = resource.name + "_image";
      if (!resource.data || resource.type !== LoaderResource.TYPE.JSON || !resource.data.frames || loader.resources[imageResourceName]) {
        next();
        return;
      }
      var multiPacks = (_b2 = (_a3 = resource.data) === null || _a3 === void 0 ? void 0 : _a3.meta) === null || _b2 === void 0 ? void 0 : _b2.related_multi_packs;
      if (Array.isArray(multiPacks)) {
        var _loop_1 = function(item2) {
          if (typeof item2 !== "string") {
            return "continue";
          }
          var itemName = item2.replace(".json", "");
          var itemUrl = url.resolve(resource.url.replace(loader.baseUrl, ""), item2);
          if (loader.resources[itemName] || Object.values(loader.resources).some(function(r) {
            return url.format(url.parse(r.url)) === itemUrl;
          })) {
            return "continue";
          }
          var options = {
            crossOrigin: resource.crossOrigin,
            loadType: LoaderResource.LOAD_TYPE.XHR,
            xhrType: LoaderResource.XHR_RESPONSE_TYPE.JSON,
            parentResource: resource,
            metadata: resource.metadata
          };
          loader.add(itemName, itemUrl, options);
        };
        for (var _i = 0, multiPacks_1 = multiPacks; _i < multiPacks_1.length; _i++) {
          var item = multiPacks_1[_i];
          _loop_1(item);
        }
      }
      var loadOptions = {
        crossOrigin: resource.crossOrigin,
        metadata: resource.metadata.imageMetadata,
        parentResource: resource
      };
      var resourcePath = SpritesheetLoader2.getResourcePath(resource, loader.baseUrl);
      loader.add(imageResourceName, resourcePath, loadOptions, function onImageLoad(res) {
        if (res.error) {
          next(res.error);
          return;
        }
        var spritesheet = new Spritesheet(res.texture, resource.data, resource.url);
        spritesheet.parse().then(function() {
          resource.spritesheet = spritesheet;
          resource.textures = spritesheet.textures;
          next();
        });
      });
    };
    SpritesheetLoader2.getResourcePath = function(resource, baseUrl) {
      if (resource.isDataUrl) {
        return resource.data.meta.image;
      }
      return url.resolve(resource.url.replace(baseUrl, ""), resource.data.meta.image);
    };
    SpritesheetLoader2.extension = ExtensionType.Loader;
    return SpritesheetLoader2;
  }()
);

// node_modules/.pnpm/@pixi+sprite-tiling@6.5.2_@pixi+constants@6.5.2_@pixi+core@6.5.2_@pixi+display@6.5.2_@pixi+ma_stz7zkeqbj6gan22ubd6vsxi2u/node_modules/@pixi/sprite-tiling/dist/esm/sprite-tiling.mjs
var extendStatics8 = function(d, b) {
  extendStatics8 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) {
      if (b2.hasOwnProperty(p)) {
        d2[p] = b2[p];
      }
    }
  };
  return extendStatics8(d, b);
};
function __extends8(d, b) {
  extendStatics8(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var tempPoint2 = new Point();
var TilingSprite = (
  /** @class */
  function(_super) {
    __extends8(TilingSprite2, _super);
    function TilingSprite2(texture, width, height) {
      if (width === void 0) {
        width = 100;
      }
      if (height === void 0) {
        height = 100;
      }
      var _this = _super.call(this, texture) || this;
      _this.tileTransform = new Transform();
      _this._width = width;
      _this._height = height;
      _this.uvMatrix = _this.texture.uvMatrix || new TextureMatrix(texture);
      _this.pluginName = "tilingSprite";
      _this.uvRespectAnchor = false;
      return _this;
    }
    Object.defineProperty(TilingSprite2.prototype, "clampMargin", {
      /**
       * Changes frame clamping in corresponding textureTransform, shortcut
       * Change to -0.5 to add a pixel to the edge, recommended for transparent trimmed textures in atlas
       * @default 0.5
       * @member {number}
       */
      get: function() {
        return this.uvMatrix.clampMargin;
      },
      set: function(value) {
        this.uvMatrix.clampMargin = value;
        this.uvMatrix.update(true);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TilingSprite2.prototype, "tileScale", {
      /** The scaling of the image that is being tiled. */
      get: function() {
        return this.tileTransform.scale;
      },
      set: function(value) {
        this.tileTransform.scale.copyFrom(value);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TilingSprite2.prototype, "tilePosition", {
      /** The offset of the image that is being tiled. */
      get: function() {
        return this.tileTransform.position;
      },
      set: function(value) {
        this.tileTransform.position.copyFrom(value);
      },
      enumerable: false,
      configurable: true
    });
    TilingSprite2.prototype._onTextureUpdate = function() {
      if (this.uvMatrix) {
        this.uvMatrix.texture = this._texture;
      }
      this._cachedTint = 16777215;
    };
    TilingSprite2.prototype._render = function(renderer) {
      var texture = this._texture;
      if (!texture || !texture.valid) {
        return;
      }
      this.tileTransform.updateLocalTransform();
      this.uvMatrix.update();
      renderer.batch.setObjectRenderer(renderer.plugins[this.pluginName]);
      renderer.plugins[this.pluginName].render(this);
    };
    TilingSprite2.prototype._calculateBounds = function() {
      var minX = this._width * -this._anchor._x;
      var minY = this._height * -this._anchor._y;
      var maxX = this._width * (1 - this._anchor._x);
      var maxY = this._height * (1 - this._anchor._y);
      this._bounds.addFrame(this.transform, minX, minY, maxX, maxY);
    };
    TilingSprite2.prototype.getLocalBounds = function(rect) {
      if (this.children.length === 0) {
        this._bounds.minX = this._width * -this._anchor._x;
        this._bounds.minY = this._height * -this._anchor._y;
        this._bounds.maxX = this._width * (1 - this._anchor._x);
        this._bounds.maxY = this._height * (1 - this._anchor._y);
        if (!rect) {
          if (!this._localBoundsRect) {
            this._localBoundsRect = new Rectangle();
          }
          rect = this._localBoundsRect;
        }
        return this._bounds.getRectangle(rect);
      }
      return _super.prototype.getLocalBounds.call(this, rect);
    };
    TilingSprite2.prototype.containsPoint = function(point) {
      this.worldTransform.applyInverse(point, tempPoint2);
      var width = this._width;
      var height = this._height;
      var x1 = -width * this.anchor._x;
      if (tempPoint2.x >= x1 && tempPoint2.x < x1 + width) {
        var y1 = -height * this.anchor._y;
        if (tempPoint2.y >= y1 && tempPoint2.y < y1 + height) {
          return true;
        }
      }
      return false;
    };
    TilingSprite2.prototype.destroy = function(options) {
      _super.prototype.destroy.call(this, options);
      this.tileTransform = null;
      this.uvMatrix = null;
    };
    TilingSprite2.from = function(source, options) {
      var texture = source instanceof Texture ? source : Texture.from(source, options);
      return new TilingSprite2(texture, options.width, options.height);
    };
    Object.defineProperty(TilingSprite2.prototype, "width", {
      /** The width of the sprite, setting this will actually modify the scale to achieve the value set. */
      get: function() {
        return this._width;
      },
      set: function(value) {
        this._width = value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TilingSprite2.prototype, "height", {
      /** The height of the TilingSprite, setting this will actually modify the scale to achieve the value set. */
      get: function() {
        return this._height;
      },
      set: function(value) {
        this._height = value;
      },
      enumerable: false,
      configurable: true
    });
    return TilingSprite2;
  }(Sprite)
);
var fragmentSimpleSrc = "#version 100\n#define SHADER_NAME Tiling-Sprite-Simple-100\n\nprecision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 texSample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = texSample * uColor;\n}\n";
var gl1VertexSrc = "#version 100\n#define SHADER_NAME Tiling-Sprite-100\n\nprecision lowp float;\n\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n";
var gl1FragmentSrc = "#version 100\n#ifdef GL_EXT_shader_texture_lod\n    #extension GL_EXT_shader_texture_lod : enable\n#endif\n#define SHADER_NAME Tiling-Sprite-100\n\nprecision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    vec2 unclamped = coord;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    #ifdef GL_EXT_shader_texture_lod\n        vec4 texSample = unclamped == coord\n            ? texture2D(uSampler, coord) \n            : texture2DLodEXT(uSampler, coord, 0);\n    #else\n        vec4 texSample = texture2D(uSampler, coord);\n    #endif\n\n    gl_FragColor = texSample * uColor;\n}\n";
var gl2VertexSrc = "#version 300 es\n#define SHADER_NAME Tiling-Sprite-300\n\nprecision lowp float;\n\nin vec2 aVertexPosition;\nin vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nout vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n";
var gl2FragmentSrc = "#version 300 es\n#define SHADER_NAME Tiling-Sprite-100\n\nprecision lowp float;\n\nin vec2 vTextureCoord;\n\nout vec4 fragmentColor;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    vec2 unclamped = coord;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0\n\n    fragmentColor = texSample * uColor;\n}\n";
var tempMat = new Matrix();
var TilingSpriteRenderer = (
  /** @class */
  function(_super) {
    __extends8(TilingSpriteRenderer2, _super);
    function TilingSpriteRenderer2(renderer) {
      var _this = _super.call(this, renderer) || this;
      renderer.runners.contextChange.add(_this);
      _this.quad = new QuadUv();
      _this.state = State.for2d();
      return _this;
    }
    TilingSpriteRenderer2.prototype.contextChange = function() {
      var renderer = this.renderer;
      var uniforms = { globals: renderer.globalUniforms };
      this.simpleShader = Shader.from(gl1VertexSrc, fragmentSimpleSrc, uniforms);
      this.shader = renderer.context.webGLVersion > 1 ? Shader.from(gl2VertexSrc, gl2FragmentSrc, uniforms) : Shader.from(gl1VertexSrc, gl1FragmentSrc, uniforms);
    };
    TilingSpriteRenderer2.prototype.render = function(ts) {
      var renderer = this.renderer;
      var quad = this.quad;
      var vertices = quad.vertices;
      vertices[0] = vertices[6] = ts._width * -ts.anchor.x;
      vertices[1] = vertices[3] = ts._height * -ts.anchor.y;
      vertices[2] = vertices[4] = ts._width * (1 - ts.anchor.x);
      vertices[5] = vertices[7] = ts._height * (1 - ts.anchor.y);
      var anchorX = ts.uvRespectAnchor ? ts.anchor.x : 0;
      var anchorY = ts.uvRespectAnchor ? ts.anchor.y : 0;
      vertices = quad.uvs;
      vertices[0] = vertices[6] = -anchorX;
      vertices[1] = vertices[3] = -anchorY;
      vertices[2] = vertices[4] = 1 - anchorX;
      vertices[5] = vertices[7] = 1 - anchorY;
      quad.invalidate();
      var tex = ts._texture;
      var baseTex = tex.baseTexture;
      var premultiplied = baseTex.alphaMode > 0;
      var lt = ts.tileTransform.localTransform;
      var uv = ts.uvMatrix;
      var isSimple = baseTex.isPowerOfTwo && tex.frame.width === baseTex.width && tex.frame.height === baseTex.height;
      if (isSimple) {
        if (!baseTex._glTextures[renderer.CONTEXT_UID]) {
          if (baseTex.wrapMode === WRAP_MODES.CLAMP) {
            baseTex.wrapMode = WRAP_MODES.REPEAT;
          }
        } else {
          isSimple = baseTex.wrapMode !== WRAP_MODES.CLAMP;
        }
      }
      var shader = isSimple ? this.simpleShader : this.shader;
      var w = tex.width;
      var h = tex.height;
      var W = ts._width;
      var H = ts._height;
      tempMat.set(lt.a * w / W, lt.b * w / H, lt.c * h / W, lt.d * h / H, lt.tx / W, lt.ty / H);
      tempMat.invert();
      if (isSimple) {
        tempMat.prepend(uv.mapCoord);
      } else {
        shader.uniforms.uMapCoord = uv.mapCoord.toArray(true);
        shader.uniforms.uClampFrame = uv.uClampFrame;
        shader.uniforms.uClampOffset = uv.uClampOffset;
      }
      shader.uniforms.uTransform = tempMat.toArray(true);
      shader.uniforms.uColor = premultiplyTintToRgba(ts.tint, ts.worldAlpha, shader.uniforms.uColor, premultiplied);
      shader.uniforms.translationMatrix = ts.transform.worldTransform.toArray(true);
      shader.uniforms.uSampler = tex;
      renderer.shader.bind(shader);
      renderer.geometry.bind(quad);
      this.state.blendMode = correctBlendMode(ts.blendMode, premultiplied);
      renderer.state.set(this.state);
      renderer.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0);
    };
    TilingSpriteRenderer2.extension = {
      name: "tilingSprite",
      type: ExtensionType.RendererPlugin
    };
    return TilingSpriteRenderer2;
  }(ObjectRenderer)
);

// node_modules/.pnpm/@pixi+mesh@6.5.2_@pixi+constants@6.5.2_@pixi+core@6.5.2_@pixi+display@6.5.2_@pixi+math@6.5.2__bmu2z4pg23y75bqgkuor6nlib4/node_modules/@pixi/mesh/dist/esm/mesh.mjs
var extendStatics9 = function(d, b) {
  extendStatics9 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) {
      if (b2.hasOwnProperty(p)) {
        d2[p] = b2[p];
      }
    }
  };
  return extendStatics9(d, b);
};
function __extends9(d, b) {
  extendStatics9(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var MeshBatchUvs = (
  /** @class */
  function() {
    function MeshBatchUvs2(uvBuffer, uvMatrix) {
      this.uvBuffer = uvBuffer;
      this.uvMatrix = uvMatrix;
      this.data = null;
      this._bufferUpdateId = -1;
      this._textureUpdateId = -1;
      this._updateID = 0;
    }
    MeshBatchUvs2.prototype.update = function(forceUpdate) {
      if (!forceUpdate && this._bufferUpdateId === this.uvBuffer._updateID && this._textureUpdateId === this.uvMatrix._updateID) {
        return;
      }
      this._bufferUpdateId = this.uvBuffer._updateID;
      this._textureUpdateId = this.uvMatrix._updateID;
      var data = this.uvBuffer.data;
      if (!this.data || this.data.length !== data.length) {
        this.data = new Float32Array(data.length);
      }
      this.uvMatrix.multiplyUvs(data, this.data);
      this._updateID++;
    };
    return MeshBatchUvs2;
  }()
);
var tempPoint3 = new Point();
var tempPolygon = new Polygon();
var Mesh = (
  /** @class */
  function(_super) {
    __extends9(Mesh2, _super);
    function Mesh2(geometry, shader, state, drawMode) {
      if (drawMode === void 0) {
        drawMode = DRAW_MODES.TRIANGLES;
      }
      var _this = _super.call(this) || this;
      _this.geometry = geometry;
      _this.shader = shader;
      _this.state = state || State.for2d();
      _this.drawMode = drawMode;
      _this.start = 0;
      _this.size = 0;
      _this.uvs = null;
      _this.indices = null;
      _this.vertexData = new Float32Array(1);
      _this.vertexDirty = -1;
      _this._transformID = -1;
      _this._roundPixels = settings.ROUND_PIXELS;
      _this.batchUvs = null;
      return _this;
    }
    Object.defineProperty(Mesh2.prototype, "geometry", {
      /**
       * Includes vertex positions, face indices, normals, colors, UVs, and
       * custom attributes within buffers, reducing the cost of passing all
       * this data to the GPU. Can be shared between multiple Mesh objects.
       */
      get: function() {
        return this._geometry;
      },
      set: function(value) {
        if (this._geometry === value) {
          return;
        }
        if (this._geometry) {
          this._geometry.refCount--;
          if (this._geometry.refCount === 0) {
            this._geometry.dispose();
          }
        }
        this._geometry = value;
        if (this._geometry) {
          this._geometry.refCount++;
        }
        this.vertexDirty = -1;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Mesh2.prototype, "uvBuffer", {
      /**
       * To change mesh uv's, change its uvBuffer data and increment its _updateID.
       * @readonly
       */
      get: function() {
        return this.geometry.buffers[1];
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Mesh2.prototype, "verticesBuffer", {
      /**
       * To change mesh vertices, change its uvBuffer data and increment its _updateID.
       * Incrementing _updateID is optional because most of Mesh objects do it anyway.
       * @readonly
       */
      get: function() {
        return this.geometry.buffers[0];
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Mesh2.prototype, "material", {
      get: function() {
        return this.shader;
      },
      /** Alias for {@link PIXI.Mesh#shader}. */
      set: function(value) {
        this.shader = value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Mesh2.prototype, "blendMode", {
      get: function() {
        return this.state.blendMode;
      },
      /**
       * The blend mode to be applied to the Mesh. Apply a value of
       * `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
       * @default PIXI.BLEND_MODES.NORMAL;
       */
      set: function(value) {
        this.state.blendMode = value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Mesh2.prototype, "roundPixels", {
      get: function() {
        return this._roundPixels;
      },
      /**
       * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
       * Advantages can include sharper image quality (like text) and faster rendering on canvas.
       * The main disadvantage is movement of objects may appear less smooth.
       * To set the global default, change {@link PIXI.settings.ROUND_PIXELS}
       * @default false
       */
      set: function(value) {
        if (this._roundPixels !== value) {
          this._transformID = -1;
        }
        this._roundPixels = value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Mesh2.prototype, "tint", {
      /**
       * The multiply tint applied to the Mesh. This is a hex value. A value of
       * `0xFFFFFF` will remove any tint effect.
       *
       * Null for non-MeshMaterial shaders
       * @default 0xFFFFFF
       */
      get: function() {
        return "tint" in this.shader ? this.shader.tint : null;
      },
      set: function(value) {
        this.shader.tint = value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Mesh2.prototype, "texture", {
      /** The texture that the Mesh uses. Null for non-MeshMaterial shaders */
      get: function() {
        return "texture" in this.shader ? this.shader.texture : null;
      },
      set: function(value) {
        this.shader.texture = value;
      },
      enumerable: false,
      configurable: true
    });
    Mesh2.prototype._render = function(renderer) {
      var vertices = this.geometry.buffers[0].data;
      var shader = this.shader;
      if (shader.batchable && this.drawMode === DRAW_MODES.TRIANGLES && vertices.length < Mesh2.BATCHABLE_SIZE * 2) {
        this._renderToBatch(renderer);
      } else {
        this._renderDefault(renderer);
      }
    };
    Mesh2.prototype._renderDefault = function(renderer) {
      var shader = this.shader;
      shader.alpha = this.worldAlpha;
      if (shader.update) {
        shader.update();
      }
      renderer.batch.flush();
      shader.uniforms.translationMatrix = this.transform.worldTransform.toArray(true);
      renderer.shader.bind(shader);
      renderer.state.set(this.state);
      renderer.geometry.bind(this.geometry, shader);
      renderer.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount);
    };
    Mesh2.prototype._renderToBatch = function(renderer) {
      var geometry = this.geometry;
      var shader = this.shader;
      if (shader.uvMatrix) {
        shader.uvMatrix.update();
        this.calculateUvs();
      }
      this.calculateVertices();
      this.indices = geometry.indexBuffer.data;
      this._tintRGB = shader._tintRGB;
      this._texture = shader.texture;
      var pluginName = this.material.pluginName;
      renderer.batch.setObjectRenderer(renderer.plugins[pluginName]);
      renderer.plugins[pluginName].render(this);
    };
    Mesh2.prototype.calculateVertices = function() {
      var geometry = this.geometry;
      var verticesBuffer = geometry.buffers[0];
      var vertices = verticesBuffer.data;
      var vertexDirtyId = verticesBuffer._updateID;
      if (vertexDirtyId === this.vertexDirty && this._transformID === this.transform._worldID) {
        return;
      }
      this._transformID = this.transform._worldID;
      if (this.vertexData.length !== vertices.length) {
        this.vertexData = new Float32Array(vertices.length);
      }
      var wt = this.transform.worldTransform;
      var a = wt.a;
      var b = wt.b;
      var c = wt.c;
      var d = wt.d;
      var tx = wt.tx;
      var ty = wt.ty;
      var vertexData = this.vertexData;
      for (var i = 0; i < vertexData.length / 2; i++) {
        var x = vertices[i * 2];
        var y = vertices[i * 2 + 1];
        vertexData[i * 2] = a * x + c * y + tx;
        vertexData[i * 2 + 1] = b * x + d * y + ty;
      }
      if (this._roundPixels) {
        var resolution = settings.RESOLUTION;
        for (var i = 0; i < vertexData.length; ++i) {
          vertexData[i] = Math.round((vertexData[i] * resolution | 0) / resolution);
        }
      }
      this.vertexDirty = vertexDirtyId;
    };
    Mesh2.prototype.calculateUvs = function() {
      var geomUvs = this.geometry.buffers[1];
      var shader = this.shader;
      if (!shader.uvMatrix.isSimple) {
        if (!this.batchUvs) {
          this.batchUvs = new MeshBatchUvs(geomUvs, shader.uvMatrix);
        }
        this.batchUvs.update();
        this.uvs = this.batchUvs.data;
      } else {
        this.uvs = geomUvs.data;
      }
    };
    Mesh2.prototype._calculateBounds = function() {
      this.calculateVertices();
      this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length);
    };
    Mesh2.prototype.containsPoint = function(point) {
      if (!this.getBounds().contains(point.x, point.y)) {
        return false;
      }
      this.worldTransform.applyInverse(point, tempPoint3);
      var vertices = this.geometry.getBuffer("aVertexPosition").data;
      var points = tempPolygon.points;
      var indices2 = this.geometry.getIndex().data;
      var len = indices2.length;
      var step = this.drawMode === 4 ? 3 : 1;
      for (var i = 0; i + 2 < len; i += step) {
        var ind0 = indices2[i] * 2;
        var ind1 = indices2[i + 1] * 2;
        var ind2 = indices2[i + 2] * 2;
        points[0] = vertices[ind0];
        points[1] = vertices[ind0 + 1];
        points[2] = vertices[ind1];
        points[3] = vertices[ind1 + 1];
        points[4] = vertices[ind2];
        points[5] = vertices[ind2 + 1];
        if (tempPolygon.contains(tempPoint3.x, tempPoint3.y)) {
          return true;
        }
      }
      return false;
    };
    Mesh2.prototype.destroy = function(options) {
      _super.prototype.destroy.call(this, options);
      if (this._cachedTexture) {
        this._cachedTexture.destroy();
        this._cachedTexture = null;
      }
      this.geometry = null;
      this.shader = null;
      this.state = null;
      this.uvs = null;
      this.indices = null;
      this.vertexData = null;
    };
    Mesh2.BATCHABLE_SIZE = 100;
    return Mesh2;
  }(Container)
);
var fragment2 = "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n";
var vertex2 = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTextureMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\n}\n";
var MeshMaterial = (
  /** @class */
  function(_super) {
    __extends9(MeshMaterial2, _super);
    function MeshMaterial2(uSampler, options) {
      var _this = this;
      var uniforms = {
        uSampler,
        alpha: 1,
        uTextureMatrix: Matrix.IDENTITY,
        uColor: new Float32Array([1, 1, 1, 1])
      };
      options = Object.assign({
        tint: 16777215,
        alpha: 1,
        pluginName: "batch"
      }, options);
      if (options.uniforms) {
        Object.assign(uniforms, options.uniforms);
      }
      _this = _super.call(this, options.program || Program.from(vertex2, fragment2), uniforms) || this;
      _this._colorDirty = false;
      _this.uvMatrix = new TextureMatrix(uSampler);
      _this.batchable = options.program === void 0;
      _this.pluginName = options.pluginName;
      _this.tint = options.tint;
      _this.alpha = options.alpha;
      return _this;
    }
    Object.defineProperty(MeshMaterial2.prototype, "texture", {
      /** Reference to the texture being rendered. */
      get: function() {
        return this.uniforms.uSampler;
      },
      set: function(value) {
        if (this.uniforms.uSampler !== value) {
          if (!this.uniforms.uSampler.baseTexture.alphaMode !== !value.baseTexture.alphaMode) {
            this._colorDirty = true;
          }
          this.uniforms.uSampler = value;
          this.uvMatrix.texture = value;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MeshMaterial2.prototype, "alpha", {
      get: function() {
        return this._alpha;
      },
      /**
       * This gets automatically set by the object using this.
       * @default 1
       */
      set: function(value) {
        if (value === this._alpha) {
          return;
        }
        this._alpha = value;
        this._colorDirty = true;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MeshMaterial2.prototype, "tint", {
      get: function() {
        return this._tint;
      },
      /**
       * Multiply tint for the material.
       * @default 0xFFFFFF
       */
      set: function(value) {
        if (value === this._tint) {
          return;
        }
        this._tint = value;
        this._tintRGB = (value >> 16) + (value & 65280) + ((value & 255) << 16);
        this._colorDirty = true;
      },
      enumerable: false,
      configurable: true
    });
    MeshMaterial2.prototype.update = function() {
      if (this._colorDirty) {
        this._colorDirty = false;
        var baseTexture = this.texture.baseTexture;
        premultiplyTintToRgba(this._tint, this._alpha, this.uniforms.uColor, baseTexture.alphaMode);
      }
      if (this.uvMatrix.update()) {
        this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord;
      }
    };
    return MeshMaterial2;
  }(Shader)
);
var MeshGeometry = (
  /** @class */
  function(_super) {
    __extends9(MeshGeometry2, _super);
    function MeshGeometry2(vertices, uvs, index) {
      var _this = _super.call(this) || this;
      var verticesBuffer = new Buffer(vertices);
      var uvsBuffer = new Buffer(uvs, true);
      var indexBuffer = new Buffer(index, true, true);
      _this.addAttribute("aVertexPosition", verticesBuffer, 2, false, TYPES.FLOAT).addAttribute("aTextureCoord", uvsBuffer, 2, false, TYPES.FLOAT).addIndex(indexBuffer);
      _this._updateId = -1;
      return _this;
    }
    Object.defineProperty(MeshGeometry2.prototype, "vertexDirtyId", {
      /**
       * If the vertex position is updated.
       * @readonly
       * @private
       */
      get: function() {
        return this.buffers[0]._updateID;
      },
      enumerable: false,
      configurable: true
    });
    return MeshGeometry2;
  }(Geometry)
);

// node_modules/.pnpm/@pixi+text-bitmap@6.5.2_@pixi+constants@6.5.2_@pixi+core@6.5.2_@pixi+display@6.5.2_@pixi+load_gkx42r6hxpvlcrvglwuneus3na/node_modules/@pixi/text-bitmap/dist/esm/text-bitmap.mjs
var extendStatics10 = function(d, b) {
  extendStatics10 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) {
      if (b2.hasOwnProperty(p)) {
        d2[p] = b2[p];
      }
    }
  };
  return extendStatics10(d, b);
};
function __extends10(d, b) {
  extendStatics10(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var BitmapFontData = (
  /** @class */
  /* @__PURE__ */ function() {
    function BitmapFontData2() {
      this.info = [];
      this.common = [];
      this.page = [];
      this.char = [];
      this.kerning = [];
      this.distanceField = [];
    }
    return BitmapFontData2;
  }()
);
var TextFormat = (
  /** @class */
  function() {
    function TextFormat2() {
    }
    TextFormat2.test = function(data) {
      return typeof data === "string" && data.indexOf("info face=") === 0;
    };
    TextFormat2.parse = function(txt) {
      var items = txt.match(/^[a-z]+\s+.+$/gm);
      var rawData = {
        info: [],
        common: [],
        page: [],
        char: [],
        chars: [],
        kerning: [],
        kernings: [],
        distanceField: []
      };
      for (var i in items) {
        var name = items[i].match(/^[a-z]+/gm)[0];
        var attributeList = items[i].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm);
        var itemData = {};
        for (var i_1 in attributeList) {
          var split = attributeList[i_1].split("=");
          var key = split[0];
          var strValue = split[1].replace(/"/gm, "");
          var floatValue = parseFloat(strValue);
          var value = isNaN(floatValue) ? strValue : floatValue;
          itemData[key] = value;
        }
        rawData[name].push(itemData);
      }
      var font = new BitmapFontData();
      rawData.info.forEach(function(info) {
        return font.info.push({
          face: info.face,
          size: parseInt(info.size, 10)
        });
      });
      rawData.common.forEach(function(common) {
        return font.common.push({
          lineHeight: parseInt(common.lineHeight, 10)
        });
      });
      rawData.page.forEach(function(page) {
        return font.page.push({
          id: parseInt(page.id, 10),
          file: page.file
        });
      });
      rawData.char.forEach(function(char) {
        return font.char.push({
          id: parseInt(char.id, 10),
          page: parseInt(char.page, 10),
          x: parseInt(char.x, 10),
          y: parseInt(char.y, 10),
          width: parseInt(char.width, 10),
          height: parseInt(char.height, 10),
          xoffset: parseInt(char.xoffset, 10),
          yoffset: parseInt(char.yoffset, 10),
          xadvance: parseInt(char.xadvance, 10)
        });
      });
      rawData.kerning.forEach(function(kerning) {
        return font.kerning.push({
          first: parseInt(kerning.first, 10),
          second: parseInt(kerning.second, 10),
          amount: parseInt(kerning.amount, 10)
        });
      });
      rawData.distanceField.forEach(function(df) {
        return font.distanceField.push({
          distanceRange: parseInt(df.distanceRange, 10),
          fieldType: df.fieldType
        });
      });
      return font;
    };
    return TextFormat2;
  }()
);
var XMLFormat = (
  /** @class */
  function() {
    function XMLFormat2() {
    }
    XMLFormat2.test = function(data) {
      return data instanceof XMLDocument && data.getElementsByTagName("page").length && data.getElementsByTagName("info")[0].getAttribute("face") !== null;
    };
    XMLFormat2.parse = function(xml) {
      var data = new BitmapFontData();
      var info = xml.getElementsByTagName("info");
      var common = xml.getElementsByTagName("common");
      var page = xml.getElementsByTagName("page");
      var char = xml.getElementsByTagName("char");
      var kerning = xml.getElementsByTagName("kerning");
      var distanceField = xml.getElementsByTagName("distanceField");
      for (var i = 0; i < info.length; i++) {
        data.info.push({
          face: info[i].getAttribute("face"),
          size: parseInt(info[i].getAttribute("size"), 10)
        });
      }
      for (var i = 0; i < common.length; i++) {
        data.common.push({
          lineHeight: parseInt(common[i].getAttribute("lineHeight"), 10)
        });
      }
      for (var i = 0; i < page.length; i++) {
        data.page.push({
          id: parseInt(page[i].getAttribute("id"), 10) || 0,
          file: page[i].getAttribute("file")
        });
      }
      for (var i = 0; i < char.length; i++) {
        var letter = char[i];
        data.char.push({
          id: parseInt(letter.getAttribute("id"), 10),
          page: parseInt(letter.getAttribute("page"), 10) || 0,
          x: parseInt(letter.getAttribute("x"), 10),
          y: parseInt(letter.getAttribute("y"), 10),
          width: parseInt(letter.getAttribute("width"), 10),
          height: parseInt(letter.getAttribute("height"), 10),
          xoffset: parseInt(letter.getAttribute("xoffset"), 10),
          yoffset: parseInt(letter.getAttribute("yoffset"), 10),
          xadvance: parseInt(letter.getAttribute("xadvance"), 10)
        });
      }
      for (var i = 0; i < kerning.length; i++) {
        data.kerning.push({
          first: parseInt(kerning[i].getAttribute("first"), 10),
          second: parseInt(kerning[i].getAttribute("second"), 10),
          amount: parseInt(kerning[i].getAttribute("amount"), 10)
        });
      }
      for (var i = 0; i < distanceField.length; i++) {
        data.distanceField.push({
          fieldType: distanceField[i].getAttribute("fieldType"),
          distanceRange: parseInt(distanceField[i].getAttribute("distanceRange"), 10)
        });
      }
      return data;
    };
    return XMLFormat2;
  }()
);
var XMLStringFormat = (
  /** @class */
  function() {
    function XMLStringFormat2() {
    }
    XMLStringFormat2.test = function(data) {
      if (typeof data === "string" && data.indexOf("<font>") > -1) {
        var xml = new globalThis.DOMParser().parseFromString(data, "text/xml");
        return XMLFormat.test(xml);
      }
      return false;
    };
    XMLStringFormat2.parse = function(xmlTxt) {
      var xml = new globalThis.DOMParser().parseFromString(xmlTxt, "text/xml");
      return XMLFormat.parse(xml);
    };
    return XMLStringFormat2;
  }()
);
var formats = [
  TextFormat,
  XMLFormat,
  XMLStringFormat
];
function autoDetectFormat(data) {
  for (var i = 0; i < formats.length; i++) {
    if (formats[i].test(data)) {
      return formats[i];
    }
  }
  return null;
}
function generateFillStyle(canvas, context, style, resolution, lines, metrics) {
  var fillStyle = style.fill;
  if (!Array.isArray(fillStyle)) {
    return fillStyle;
  } else if (fillStyle.length === 1) {
    return fillStyle[0];
  }
  var gradient;
  var dropShadowCorrection = style.dropShadow ? style.dropShadowDistance : 0;
  var padding = style.padding || 0;
  var width = canvas.width / resolution - dropShadowCorrection - padding * 2;
  var height = canvas.height / resolution - dropShadowCorrection - padding * 2;
  var fill = fillStyle.slice();
  var fillGradientStops = style.fillGradientStops.slice();
  if (!fillGradientStops.length) {
    var lengthPlus1 = fill.length + 1;
    for (var i = 1; i < lengthPlus1; ++i) {
      fillGradientStops.push(i / lengthPlus1);
    }
  }
  fill.unshift(fillStyle[0]);
  fillGradientStops.unshift(0);
  fill.push(fillStyle[fillStyle.length - 1]);
  fillGradientStops.push(1);
  if (style.fillGradientType === TEXT_GRADIENT.LINEAR_VERTICAL) {
    gradient = context.createLinearGradient(width / 2, padding, width / 2, height + padding);
    var lastIterationStop = 0;
    var textHeight = metrics.fontProperties.fontSize + style.strokeThickness;
    var gradStopLineHeight = textHeight / height;
    for (var i = 0; i < lines.length; i++) {
      var thisLineTop = metrics.lineHeight * i;
      for (var j = 0; j < fill.length; j++) {
        var lineStop = 0;
        if (typeof fillGradientStops[j] === "number") {
          lineStop = fillGradientStops[j];
        } else {
          lineStop = j / fill.length;
        }
        var globalStop = thisLineTop / height + lineStop * gradStopLineHeight;
        var clampedStop = Math.max(lastIterationStop, globalStop);
        clampedStop = Math.min(clampedStop, 1);
        gradient.addColorStop(clampedStop, fill[j]);
        lastIterationStop = clampedStop;
      }
    }
  } else {
    gradient = context.createLinearGradient(padding, height / 2, width + padding, height / 2);
    var totalIterations = fill.length + 1;
    var currentIteration = 1;
    for (var i = 0; i < fill.length; i++) {
      var stop = void 0;
      if (typeof fillGradientStops[i] === "number") {
        stop = fillGradientStops[i];
      } else {
        stop = currentIteration / totalIterations;
      }
      gradient.addColorStop(stop, fill[i]);
      currentIteration++;
    }
  }
  return gradient;
}
function drawGlyph(canvas, context, metrics, x, y, resolution, style) {
  var char = metrics.text;
  var fontProperties = metrics.fontProperties;
  context.translate(x, y);
  context.scale(resolution, resolution);
  var tx = style.strokeThickness / 2;
  var ty = -(style.strokeThickness / 2);
  context.font = style.toFontString();
  context.lineWidth = style.strokeThickness;
  context.textBaseline = style.textBaseline;
  context.lineJoin = style.lineJoin;
  context.miterLimit = style.miterLimit;
  context.fillStyle = generateFillStyle(canvas, context, style, resolution, [char], metrics);
  context.strokeStyle = style.stroke;
  if (style.dropShadow) {
    var dropShadowColor = style.dropShadowColor;
    var rgb = hex2rgb(typeof dropShadowColor === "number" ? dropShadowColor : string2hex(dropShadowColor));
    var dropShadowBlur = style.dropShadowBlur * resolution;
    var dropShadowDistance = style.dropShadowDistance * resolution;
    context.shadowColor = "rgba(" + rgb[0] * 255 + "," + rgb[1] * 255 + "," + rgb[2] * 255 + "," + style.dropShadowAlpha + ")";
    context.shadowBlur = dropShadowBlur;
    context.shadowOffsetX = Math.cos(style.dropShadowAngle) * dropShadowDistance;
    context.shadowOffsetY = Math.sin(style.dropShadowAngle) * dropShadowDistance;
  } else {
    context.shadowColor = "black";
    context.shadowBlur = 0;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
  }
  if (style.stroke && style.strokeThickness) {
    context.strokeText(char, tx, ty + metrics.lineHeight - fontProperties.descent);
  }
  if (style.fill) {
    context.fillText(char, tx, ty + metrics.lineHeight - fontProperties.descent);
  }
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.fillStyle = "rgba(0, 0, 0, 0)";
}
function splitTextToCharacters(text) {
  return Array.from ? Array.from(text) : text.split("");
}
function resolveCharacters(chars) {
  if (typeof chars === "string") {
    chars = [chars];
  }
  var result = [];
  for (var i = 0, j = chars.length; i < j; i++) {
    var item = chars[i];
    if (Array.isArray(item)) {
      if (item.length !== 2) {
        throw new Error("[BitmapFont]: Invalid character range length, expecting 2 got " + item.length + ".");
      }
      var startCode = item[0].charCodeAt(0);
      var endCode = item[1].charCodeAt(0);
      if (endCode < startCode) {
        throw new Error("[BitmapFont]: Invalid character range.");
      }
      for (var i_1 = startCode, j_1 = endCode; i_1 <= j_1; i_1++) {
        result.push(String.fromCharCode(i_1));
      }
    } else {
      result.push.apply(result, splitTextToCharacters(item));
    }
  }
  if (result.length === 0) {
    throw new Error("[BitmapFont]: Empty set when resolving characters.");
  }
  return result;
}
function extractCharCode(str) {
  return str.codePointAt ? str.codePointAt(0) : str.charCodeAt(0);
}
var BitmapFont = (
  /** @class */
  function() {
    function BitmapFont2(data, textures, ownsTextures) {
      var _a3, _b2;
      var info = data.info[0];
      var common = data.common[0];
      var page = data.page[0];
      var distanceField = data.distanceField[0];
      var res = getResolutionOfUrl(page.file);
      var pageTextures = {};
      this._ownsTextures = ownsTextures;
      this.font = info.face;
      this.size = info.size;
      this.lineHeight = common.lineHeight / res;
      this.chars = {};
      this.pageTextures = pageTextures;
      for (var i = 0; i < data.page.length; i++) {
        var _c2 = data.page[i], id = _c2.id, file = _c2.file;
        pageTextures[id] = textures instanceof Array ? textures[i] : textures[file];
        if ((distanceField === null || distanceField === void 0 ? void 0 : distanceField.fieldType) && distanceField.fieldType !== "none") {
          pageTextures[id].baseTexture.alphaMode = ALPHA_MODES.NO_PREMULTIPLIED_ALPHA;
        }
      }
      for (var i = 0; i < data.char.length; i++) {
        var _d = data.char[i], id = _d.id, page_1 = _d.page;
        var _e = data.char[i], x = _e.x, y = _e.y, width = _e.width, height = _e.height, xoffset = _e.xoffset, yoffset = _e.yoffset, xadvance = _e.xadvance;
        x /= res;
        y /= res;
        width /= res;
        height /= res;
        xoffset /= res;
        yoffset /= res;
        xadvance /= res;
        var rect = new Rectangle(x + pageTextures[page_1].frame.x / res, y + pageTextures[page_1].frame.y / res, width, height);
        this.chars[id] = {
          xOffset: xoffset,
          yOffset: yoffset,
          xAdvance: xadvance,
          kerning: {},
          texture: new Texture(pageTextures[page_1].baseTexture, rect),
          page: page_1
        };
      }
      for (var i = 0; i < data.kerning.length; i++) {
        var _f = data.kerning[i], first = _f.first, second = _f.second, amount = _f.amount;
        first /= res;
        second /= res;
        amount /= res;
        if (this.chars[second]) {
          this.chars[second].kerning[first] = amount;
        }
      }
      this.distanceFieldRange = distanceField === null || distanceField === void 0 ? void 0 : distanceField.distanceRange;
      this.distanceFieldType = (_b2 = (_a3 = distanceField === null || distanceField === void 0 ? void 0 : distanceField.fieldType) === null || _a3 === void 0 ? void 0 : _a3.toLowerCase()) !== null && _b2 !== void 0 ? _b2 : "none";
    }
    BitmapFont2.prototype.destroy = function() {
      for (var id in this.chars) {
        this.chars[id].texture.destroy();
        this.chars[id].texture = null;
      }
      for (var id in this.pageTextures) {
        if (this._ownsTextures) {
          this.pageTextures[id].destroy(true);
        }
        this.pageTextures[id] = null;
      }
      this.chars = null;
      this.pageTextures = null;
    };
    BitmapFont2.install = function(data, textures, ownsTextures) {
      var fontData;
      if (data instanceof BitmapFontData) {
        fontData = data;
      } else {
        var format = autoDetectFormat(data);
        if (!format) {
          throw new Error("Unrecognized data format for font.");
        }
        fontData = format.parse(data);
      }
      if (textures instanceof Texture) {
        textures = [textures];
      }
      var font = new BitmapFont2(fontData, textures, ownsTextures);
      BitmapFont2.available[font.font] = font;
      return font;
    };
    BitmapFont2.uninstall = function(name) {
      var font = BitmapFont2.available[name];
      if (!font) {
        throw new Error("No font found named '" + name + "'");
      }
      font.destroy();
      delete BitmapFont2.available[name];
    };
    BitmapFont2.from = function(name, textStyle, options) {
      if (!name) {
        throw new Error("[BitmapFont] Property `name` is required.");
      }
      var _a3 = Object.assign({}, BitmapFont2.defaultOptions, options), chars = _a3.chars, padding = _a3.padding, resolution = _a3.resolution, textureWidth = _a3.textureWidth, textureHeight = _a3.textureHeight;
      var charsList = resolveCharacters(chars);
      var style = textStyle instanceof TextStyle ? textStyle : new TextStyle(textStyle);
      var lineWidth = textureWidth;
      var fontData = new BitmapFontData();
      fontData.info[0] = {
        face: style.fontFamily,
        size: style.fontSize
      };
      fontData.common[0] = {
        lineHeight: style.fontSize
      };
      var positionX = 0;
      var positionY = 0;
      var canvas;
      var context;
      var baseTexture;
      var maxCharHeight = 0;
      var textures = [];
      for (var i = 0; i < charsList.length; i++) {
        if (!canvas) {
          canvas = settings.ADAPTER.createCanvas();
          canvas.width = textureWidth;
          canvas.height = textureHeight;
          context = canvas.getContext("2d");
          baseTexture = new BaseTexture(canvas, { resolution });
          textures.push(new Texture(baseTexture));
          fontData.page.push({
            id: textures.length - 1,
            file: ""
          });
        }
        var metrics = TextMetrics.measureText(charsList[i], style, false, canvas);
        var width = metrics.width;
        var height = Math.ceil(metrics.height);
        var textureGlyphWidth = Math.ceil((style.fontStyle === "italic" ? 2 : 1) * width);
        if (positionY >= textureHeight - height * resolution) {
          if (positionY === 0) {
            throw new Error("[BitmapFont] textureHeight " + textureHeight + "px is " + ("too small for " + style.fontSize + "px fonts"));
          }
          --i;
          canvas = null;
          context = null;
          baseTexture = null;
          positionY = 0;
          positionX = 0;
          maxCharHeight = 0;
          continue;
        }
        maxCharHeight = Math.max(height + metrics.fontProperties.descent, maxCharHeight);
        if (textureGlyphWidth * resolution + positionX >= lineWidth) {
          --i;
          positionY += maxCharHeight * resolution;
          positionY = Math.ceil(positionY);
          positionX = 0;
          maxCharHeight = 0;
          continue;
        }
        drawGlyph(canvas, context, metrics, positionX, positionY, resolution, style);
        var id = extractCharCode(metrics.text);
        fontData.char.push({
          id,
          page: textures.length - 1,
          x: positionX / resolution,
          y: positionY / resolution,
          width: textureGlyphWidth,
          height,
          xoffset: 0,
          yoffset: 0,
          xadvance: Math.ceil(width - (style.dropShadow ? style.dropShadowDistance : 0) - (style.stroke ? style.strokeThickness : 0))
        });
        positionX += (textureGlyphWidth + 2 * padding) * resolution;
        positionX = Math.ceil(positionX);
      }
      for (var i = 0, len = charsList.length; i < len; i++) {
        var first = charsList[i];
        for (var j = 0; j < len; j++) {
          var second = charsList[j];
          var c1 = context.measureText(first).width;
          var c2 = context.measureText(second).width;
          var total = context.measureText(first + second).width;
          var amount = total - (c1 + c2);
          if (amount) {
            fontData.kerning.push({
              first: extractCharCode(first),
              second: extractCharCode(second),
              amount
            });
          }
        }
      }
      var font = new BitmapFont2(fontData, textures, true);
      if (BitmapFont2.available[name] !== void 0) {
        BitmapFont2.uninstall(name);
      }
      BitmapFont2.available[name] = font;
      return font;
    };
    BitmapFont2.ALPHA = [["a", "z"], ["A", "Z"], " "];
    BitmapFont2.NUMERIC = [["0", "9"]];
    BitmapFont2.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "];
    BitmapFont2.ASCII = [[" ", "~"]];
    BitmapFont2.defaultOptions = {
      resolution: 1,
      textureWidth: 512,
      textureHeight: 512,
      padding: 4,
      chars: BitmapFont2.ALPHANUMERIC
    };
    BitmapFont2.available = {};
    return BitmapFont2;
  }()
);
var msdfFrag = "// Pixi texture info\r\nvarying vec2 vTextureCoord;\r\nuniform sampler2D uSampler;\r\n\r\n// Tint\r\nuniform vec4 uColor;\r\n\r\n// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r\nuniform float uFWidth;\r\n\r\nvoid main(void) {\r\n\r\n  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r\n  vec4 texColor = texture2D(uSampler, vTextureCoord);\r\n\r\n  // MSDF\r\n  float median = texColor.r + texColor.g + texColor.b -\r\n                  min(texColor.r, min(texColor.g, texColor.b)) -\r\n                  max(texColor.r, max(texColor.g, texColor.b));\r\n  // SDF\r\n  median = min(median, texColor.a);\r\n\r\n  float screenPxDistance = uFWidth * (median - 0.5);\r\n  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r\n\r\n  // NPM Textures, NPM outputs\r\n  gl_FragColor = vec4(uColor.rgb, uColor.a * alpha);\r\n\r\n}\r\n";
var msdfVert = "// Mesh material default fragment\r\nattribute vec2 aVertexPosition;\r\nattribute vec2 aTextureCoord;\r\n\r\nuniform mat3 projectionMatrix;\r\nuniform mat3 translationMatrix;\r\nuniform mat3 uTextureMatrix;\r\n\r\nvarying vec2 vTextureCoord;\r\n\r\nvoid main(void)\r\n{\r\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r\n\r\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r\n}\r\n";
var pageMeshDataDefaultPageMeshData = [];
var pageMeshDataMSDFPageMeshData = [];
var charRenderDataPool = [];
var BitmapText = (
  /** @class */
  function(_super) {
    __extends10(BitmapText2, _super);
    function BitmapText2(text, style) {
      if (style === void 0) {
        style = {};
      }
      var _this = _super.call(this) || this;
      _this._tint = 16777215;
      var _a3 = Object.assign({}, BitmapText2.styleDefaults, style), align = _a3.align, tint = _a3.tint, maxWidth = _a3.maxWidth, letterSpacing = _a3.letterSpacing, fontName = _a3.fontName, fontSize = _a3.fontSize;
      if (!BitmapFont.available[fontName]) {
        throw new Error('Missing BitmapFont "' + fontName + '"');
      }
      _this._activePagesMeshData = [];
      _this._textWidth = 0;
      _this._textHeight = 0;
      _this._align = align;
      _this._tint = tint;
      _this._fontName = fontName;
      _this._fontSize = fontSize || BitmapFont.available[fontName].size;
      _this.text = text;
      _this._maxWidth = maxWidth;
      _this._maxLineHeight = 0;
      _this._letterSpacing = letterSpacing;
      _this._anchor = new ObservablePoint(function() {
        _this.dirty = true;
      }, _this, 0, 0);
      _this._roundPixels = settings.ROUND_PIXELS;
      _this.dirty = true;
      _this._resolution = settings.RESOLUTION;
      _this._autoResolution = true;
      _this._textureCache = {};
      return _this;
    }
    BitmapText2.prototype.updateText = function() {
      var _a3;
      var data = BitmapFont.available[this._fontName];
      var scale = this._fontSize / data.size;
      var pos = new Point();
      var chars = [];
      var lineWidths = [];
      var lineSpaces = [];
      var text = this._text.replace(/(?:\r\n|\r)/g, "\n") || " ";
      var charsInput = splitTextToCharacters(text);
      var maxWidth = this._maxWidth * data.size / this._fontSize;
      var pageMeshDataPool = data.distanceFieldType === "none" ? pageMeshDataDefaultPageMeshData : pageMeshDataMSDFPageMeshData;
      var prevCharCode = null;
      var lastLineWidth = 0;
      var maxLineWidth = 0;
      var line = 0;
      var lastBreakPos = -1;
      var lastBreakWidth = 0;
      var spacesRemoved = 0;
      var maxLineHeight = 0;
      var spaceCount = 0;
      for (var i = 0; i < charsInput.length; i++) {
        var char = charsInput[i];
        var charCode = extractCharCode(char);
        if (/(?:\s)/.test(char)) {
          lastBreakPos = i;
          lastBreakWidth = lastLineWidth;
          spaceCount++;
        }
        if (char === "\r" || char === "\n") {
          lineWidths.push(lastLineWidth);
          lineSpaces.push(-1);
          maxLineWidth = Math.max(maxLineWidth, lastLineWidth);
          ++line;
          ++spacesRemoved;
          pos.x = 0;
          pos.y += data.lineHeight;
          prevCharCode = null;
          spaceCount = 0;
          continue;
        }
        var charData = data.chars[charCode];
        if (!charData) {
          continue;
        }
        if (prevCharCode && charData.kerning[prevCharCode]) {
          pos.x += charData.kerning[prevCharCode];
        }
        var charRenderData = charRenderDataPool.pop() || {
          texture: Texture.EMPTY,
          line: 0,
          charCode: 0,
          prevSpaces: 0,
          position: new Point()
        };
        charRenderData.texture = charData.texture;
        charRenderData.line = line;
        charRenderData.charCode = charCode;
        charRenderData.position.x = pos.x + charData.xOffset + this._letterSpacing / 2;
        charRenderData.position.y = pos.y + charData.yOffset;
        charRenderData.prevSpaces = spaceCount;
        chars.push(charRenderData);
        lastLineWidth = charRenderData.position.x + Math.max(charData.xAdvance - charData.xOffset, charData.texture.orig.width);
        pos.x += charData.xAdvance + this._letterSpacing;
        maxLineHeight = Math.max(maxLineHeight, charData.yOffset + charData.texture.height);
        prevCharCode = charCode;
        if (lastBreakPos !== -1 && maxWidth > 0 && pos.x > maxWidth) {
          ++spacesRemoved;
          removeItems(chars, 1 + lastBreakPos - spacesRemoved, 1 + i - lastBreakPos);
          i = lastBreakPos;
          lastBreakPos = -1;
          lineWidths.push(lastBreakWidth);
          lineSpaces.push(chars.length > 0 ? chars[chars.length - 1].prevSpaces : 0);
          maxLineWidth = Math.max(maxLineWidth, lastBreakWidth);
          line++;
          pos.x = 0;
          pos.y += data.lineHeight;
          prevCharCode = null;
          spaceCount = 0;
        }
      }
      var lastChar = charsInput[charsInput.length - 1];
      if (lastChar !== "\r" && lastChar !== "\n") {
        if (/(?:\s)/.test(lastChar)) {
          lastLineWidth = lastBreakWidth;
        }
        lineWidths.push(lastLineWidth);
        maxLineWidth = Math.max(maxLineWidth, lastLineWidth);
        lineSpaces.push(-1);
      }
      var lineAlignOffsets = [];
      for (var i = 0; i <= line; i++) {
        var alignOffset = 0;
        if (this._align === "right") {
          alignOffset = maxLineWidth - lineWidths[i];
        } else if (this._align === "center") {
          alignOffset = (maxLineWidth - lineWidths[i]) / 2;
        } else if (this._align === "justify") {
          alignOffset = lineSpaces[i] < 0 ? 0 : (maxLineWidth - lineWidths[i]) / lineSpaces[i];
        }
        lineAlignOffsets.push(alignOffset);
      }
      var lenChars = chars.length;
      var pagesMeshData = {};
      var newPagesMeshData = [];
      var activePagesMeshData = this._activePagesMeshData;
      for (var i = 0; i < activePagesMeshData.length; i++) {
        pageMeshDataPool.push(activePagesMeshData[i]);
      }
      for (var i = 0; i < lenChars; i++) {
        var texture = chars[i].texture;
        var baseTextureUid = texture.baseTexture.uid;
        if (!pagesMeshData[baseTextureUid]) {
          var pageMeshData = pageMeshDataPool.pop();
          if (!pageMeshData) {
            var geometry = new MeshGeometry();
            var material = void 0;
            var meshBlendMode = void 0;
            if (data.distanceFieldType === "none") {
              material = new MeshMaterial(Texture.EMPTY);
              meshBlendMode = BLEND_MODES.NORMAL;
            } else {
              material = new MeshMaterial(Texture.EMPTY, { program: Program.from(msdfVert, msdfFrag), uniforms: { uFWidth: 0 } });
              meshBlendMode = BLEND_MODES.NORMAL_NPM;
            }
            var mesh = new Mesh(geometry, material);
            mesh.blendMode = meshBlendMode;
            pageMeshData = {
              index: 0,
              indexCount: 0,
              vertexCount: 0,
              uvsCount: 0,
              total: 0,
              mesh,
              vertices: null,
              uvs: null,
              indices: null
            };
          }
          pageMeshData.index = 0;
          pageMeshData.indexCount = 0;
          pageMeshData.vertexCount = 0;
          pageMeshData.uvsCount = 0;
          pageMeshData.total = 0;
          var _textureCache = this._textureCache;
          _textureCache[baseTextureUid] = _textureCache[baseTextureUid] || new Texture(texture.baseTexture);
          pageMeshData.mesh.texture = _textureCache[baseTextureUid];
          pageMeshData.mesh.tint = this._tint;
          newPagesMeshData.push(pageMeshData);
          pagesMeshData[baseTextureUid] = pageMeshData;
        }
        pagesMeshData[baseTextureUid].total++;
      }
      for (var i = 0; i < activePagesMeshData.length; i++) {
        if (newPagesMeshData.indexOf(activePagesMeshData[i]) === -1) {
          this.removeChild(activePagesMeshData[i].mesh);
        }
      }
      for (var i = 0; i < newPagesMeshData.length; i++) {
        if (newPagesMeshData[i].mesh.parent !== this) {
          this.addChild(newPagesMeshData[i].mesh);
        }
      }
      this._activePagesMeshData = newPagesMeshData;
      for (var i in pagesMeshData) {
        var pageMeshData = pagesMeshData[i];
        var total = pageMeshData.total;
        if (!(((_a3 = pageMeshData.indices) === null || _a3 === void 0 ? void 0 : _a3.length) > 6 * total) || pageMeshData.vertices.length < Mesh.BATCHABLE_SIZE * 2) {
          pageMeshData.vertices = new Float32Array(4 * 2 * total);
          pageMeshData.uvs = new Float32Array(4 * 2 * total);
          pageMeshData.indices = new Uint16Array(6 * total);
        } else {
          var total_1 = pageMeshData.total;
          var vertices = pageMeshData.vertices;
          for (var i_1 = total_1 * 4 * 2; i_1 < vertices.length; i_1++) {
            vertices[i_1] = 0;
          }
        }
        pageMeshData.mesh.size = 6 * total;
      }
      for (var i = 0; i < lenChars; i++) {
        var char = chars[i];
        var offset = char.position.x + lineAlignOffsets[char.line] * (this._align === "justify" ? char.prevSpaces : 1);
        if (this._roundPixels) {
          offset = Math.round(offset);
        }
        var xPos = offset * scale;
        var yPos = char.position.y * scale;
        var texture = char.texture;
        var pageMesh = pagesMeshData[texture.baseTexture.uid];
        var textureFrame = texture.frame;
        var textureUvs = texture._uvs;
        var index = pageMesh.index++;
        pageMesh.indices[index * 6 + 0] = 0 + index * 4;
        pageMesh.indices[index * 6 + 1] = 1 + index * 4;
        pageMesh.indices[index * 6 + 2] = 2 + index * 4;
        pageMesh.indices[index * 6 + 3] = 0 + index * 4;
        pageMesh.indices[index * 6 + 4] = 2 + index * 4;
        pageMesh.indices[index * 6 + 5] = 3 + index * 4;
        pageMesh.vertices[index * 8 + 0] = xPos;
        pageMesh.vertices[index * 8 + 1] = yPos;
        pageMesh.vertices[index * 8 + 2] = xPos + textureFrame.width * scale;
        pageMesh.vertices[index * 8 + 3] = yPos;
        pageMesh.vertices[index * 8 + 4] = xPos + textureFrame.width * scale;
        pageMesh.vertices[index * 8 + 5] = yPos + textureFrame.height * scale;
        pageMesh.vertices[index * 8 + 6] = xPos;
        pageMesh.vertices[index * 8 + 7] = yPos + textureFrame.height * scale;
        pageMesh.uvs[index * 8 + 0] = textureUvs.x0;
        pageMesh.uvs[index * 8 + 1] = textureUvs.y0;
        pageMesh.uvs[index * 8 + 2] = textureUvs.x1;
        pageMesh.uvs[index * 8 + 3] = textureUvs.y1;
        pageMesh.uvs[index * 8 + 4] = textureUvs.x2;
        pageMesh.uvs[index * 8 + 5] = textureUvs.y2;
        pageMesh.uvs[index * 8 + 6] = textureUvs.x3;
        pageMesh.uvs[index * 8 + 7] = textureUvs.y3;
      }
      this._textWidth = maxLineWidth * scale;
      this._textHeight = (pos.y + data.lineHeight) * scale;
      for (var i in pagesMeshData) {
        var pageMeshData = pagesMeshData[i];
        if (this.anchor.x !== 0 || this.anchor.y !== 0) {
          var vertexCount = 0;
          var anchorOffsetX = this._textWidth * this.anchor.x;
          var anchorOffsetY = this._textHeight * this.anchor.y;
          for (var i_2 = 0; i_2 < pageMeshData.total; i_2++) {
            pageMeshData.vertices[vertexCount++] -= anchorOffsetX;
            pageMeshData.vertices[vertexCount++] -= anchorOffsetY;
            pageMeshData.vertices[vertexCount++] -= anchorOffsetX;
            pageMeshData.vertices[vertexCount++] -= anchorOffsetY;
            pageMeshData.vertices[vertexCount++] -= anchorOffsetX;
            pageMeshData.vertices[vertexCount++] -= anchorOffsetY;
            pageMeshData.vertices[vertexCount++] -= anchorOffsetX;
            pageMeshData.vertices[vertexCount++] -= anchorOffsetY;
          }
        }
        this._maxLineHeight = maxLineHeight * scale;
        var vertexBuffer = pageMeshData.mesh.geometry.getBuffer("aVertexPosition");
        var textureBuffer = pageMeshData.mesh.geometry.getBuffer("aTextureCoord");
        var indexBuffer = pageMeshData.mesh.geometry.getIndex();
        vertexBuffer.data = pageMeshData.vertices;
        textureBuffer.data = pageMeshData.uvs;
        indexBuffer.data = pageMeshData.indices;
        vertexBuffer.update();
        textureBuffer.update();
        indexBuffer.update();
      }
      for (var i = 0; i < chars.length; i++) {
        charRenderDataPool.push(chars[i]);
      }
    };
    BitmapText2.prototype.updateTransform = function() {
      this.validate();
      this.containerUpdateTransform();
    };
    BitmapText2.prototype._render = function(renderer) {
      if (this._autoResolution && this._resolution !== renderer.resolution) {
        this._resolution = renderer.resolution;
        this.dirty = true;
      }
      var _a3 = BitmapFont.available[this._fontName], distanceFieldRange = _a3.distanceFieldRange, distanceFieldType = _a3.distanceFieldType, size = _a3.size;
      if (distanceFieldType !== "none") {
        var _b2 = this.worldTransform, a = _b2.a, b = _b2.b, c = _b2.c, d = _b2.d;
        var dx = Math.sqrt(a * a + b * b);
        var dy = Math.sqrt(c * c + d * d);
        var worldScale = (Math.abs(dx) + Math.abs(dy)) / 2;
        var fontScale = this._fontSize / size;
        for (var _i = 0, _c2 = this._activePagesMeshData; _i < _c2.length; _i++) {
          var mesh = _c2[_i];
          mesh.mesh.shader.uniforms.uFWidth = worldScale * distanceFieldRange * fontScale * this._resolution;
        }
      }
      _super.prototype._render.call(this, renderer);
    };
    BitmapText2.prototype.getLocalBounds = function() {
      this.validate();
      return _super.prototype.getLocalBounds.call(this);
    };
    BitmapText2.prototype.validate = function() {
      if (this.dirty) {
        this.updateText();
        this.dirty = false;
      }
    };
    Object.defineProperty(BitmapText2.prototype, "tint", {
      /**
       * The tint of the BitmapText object.
       * @default 0xffffff
       */
      get: function() {
        return this._tint;
      },
      set: function(value) {
        if (this._tint === value) {
          return;
        }
        this._tint = value;
        for (var i = 0; i < this._activePagesMeshData.length; i++) {
          this._activePagesMeshData[i].mesh.tint = value;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BitmapText2.prototype, "align", {
      /**
       * The alignment of the BitmapText object.
       * @member {string}
       * @default 'left'
       */
      get: function() {
        return this._align;
      },
      set: function(value) {
        if (this._align !== value) {
          this._align = value;
          this.dirty = true;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BitmapText2.prototype, "fontName", {
      /** The name of the BitmapFont. */
      get: function() {
        return this._fontName;
      },
      set: function(value) {
        if (!BitmapFont.available[value]) {
          throw new Error('Missing BitmapFont "' + value + '"');
        }
        if (this._fontName !== value) {
          this._fontName = value;
          this.dirty = true;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BitmapText2.prototype, "fontSize", {
      /** The size of the font to display. */
      get: function() {
        return this._fontSize;
      },
      set: function(value) {
        if (this._fontSize !== value) {
          this._fontSize = value;
          this.dirty = true;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BitmapText2.prototype, "anchor", {
      /**
       * The anchor sets the origin point of the text.
       *
       * The default is `(0,0)`, this means the text's origin is the top left.
       *
       * Setting the anchor to `(0.5,0.5)` means the text's origin is centered.
       *
       * Setting the anchor to `(1,1)` would mean the text's origin point will be the bottom right corner.
       */
      get: function() {
        return this._anchor;
      },
      set: function(value) {
        if (typeof value === "number") {
          this._anchor.set(value);
        } else {
          this._anchor.copyFrom(value);
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BitmapText2.prototype, "text", {
      /** The text of the BitmapText object. */
      get: function() {
        return this._text;
      },
      set: function(text) {
        text = String(text === null || text === void 0 ? "" : text);
        if (this._text === text) {
          return;
        }
        this._text = text;
        this.dirty = true;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BitmapText2.prototype, "maxWidth", {
      /**
       * The max width of this bitmap text in pixels. If the text provided is longer than the
       * value provided, line breaks will be automatically inserted in the last whitespace.
       * Disable by setting the value to 0.
       */
      get: function() {
        return this._maxWidth;
      },
      set: function(value) {
        if (this._maxWidth === value) {
          return;
        }
        this._maxWidth = value;
        this.dirty = true;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BitmapText2.prototype, "maxLineHeight", {
      /**
       * The max line height. This is useful when trying to use the total height of the Text,
       * i.e. when trying to vertically align.
       * @readonly
       */
      get: function() {
        this.validate();
        return this._maxLineHeight;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BitmapText2.prototype, "textWidth", {
      /**
       * The width of the overall text, different from fontSize,
       * which is defined in the style object.
       * @readonly
       */
      get: function() {
        this.validate();
        return this._textWidth;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BitmapText2.prototype, "letterSpacing", {
      /** Additional space between characters. */
      get: function() {
        return this._letterSpacing;
      },
      set: function(value) {
        if (this._letterSpacing !== value) {
          this._letterSpacing = value;
          this.dirty = true;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BitmapText2.prototype, "roundPixels", {
      /**
       * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
       * Advantages can include sharper image quality (like text) and faster rendering on canvas.
       * The main disadvantage is movement of objects may appear less smooth.
       * To set the global default, change {@link PIXI.settings.ROUND_PIXELS}
       * @default PIXI.settings.ROUND_PIXELS
       */
      get: function() {
        return this._roundPixels;
      },
      set: function(value) {
        if (value !== this._roundPixels) {
          this._roundPixels = value;
          this.dirty = true;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BitmapText2.prototype, "textHeight", {
      /**
       * The height of the overall text, different from fontSize,
       * which is defined in the style object.
       * @readonly
       */
      get: function() {
        this.validate();
        return this._textHeight;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BitmapText2.prototype, "resolution", {
      /**
       * The resolution / device pixel ratio of the canvas.
       *
       * This is set to automatically match the renderer resolution by default, but can be overridden by setting manually.
       * @default 1
       */
      get: function() {
        return this._resolution;
      },
      set: function(value) {
        this._autoResolution = false;
        if (this._resolution === value) {
          return;
        }
        this._resolution = value;
        this.dirty = true;
      },
      enumerable: false,
      configurable: true
    });
    BitmapText2.prototype.destroy = function(options) {
      var _textureCache = this._textureCache;
      for (var id in _textureCache) {
        var texture = _textureCache[id];
        texture.destroy();
        delete _textureCache[id];
      }
      this._textureCache = null;
      _super.prototype.destroy.call(this, options);
    };
    BitmapText2.styleDefaults = {
      align: "left",
      tint: 16777215,
      maxWidth: 0,
      letterSpacing: 0
    };
    return BitmapText2;
  }(Container)
);
var BitmapFontLoader = (
  /** @class */
  function() {
    function BitmapFontLoader2() {
    }
    BitmapFontLoader2.add = function() {
      LoaderResource.setExtensionXhrType("fnt", LoaderResource.XHR_RESPONSE_TYPE.TEXT);
    };
    BitmapFontLoader2.use = function(resource, next) {
      var format = autoDetectFormat(resource.data);
      if (!format) {
        next();
        return;
      }
      var baseUrl = BitmapFontLoader2.getBaseUrl(this, resource);
      var data = format.parse(resource.data);
      var textures = {};
      var completed = function(page) {
        textures[page.metadata.pageFile] = page.texture;
        if (Object.keys(textures).length === data.page.length) {
          resource.bitmapFont = BitmapFont.install(data, textures, true);
          next();
        }
      };
      for (var i = 0; i < data.page.length; ++i) {
        var pageFile = data.page[i].file;
        var url2 = baseUrl + pageFile;
        var exists = false;
        for (var name in this.resources) {
          var bitmapResource = this.resources[name];
          if (bitmapResource.url === url2) {
            bitmapResource.metadata.pageFile = pageFile;
            if (bitmapResource.texture) {
              completed(bitmapResource);
            } else {
              bitmapResource.onAfterMiddleware.add(completed);
            }
            exists = true;
            break;
          }
        }
        if (!exists) {
          var options = {
            crossOrigin: resource.crossOrigin,
            loadType: LoaderResource.LOAD_TYPE.IMAGE,
            metadata: Object.assign({ pageFile }, resource.metadata.imageMetadata),
            parentResource: resource
          };
          this.add(url2, options, completed);
        }
      }
    };
    BitmapFontLoader2.getBaseUrl = function(loader, resource) {
      var resUrl = !resource.isDataUrl ? BitmapFontLoader2.dirname(resource.url) : "";
      if (resource.isDataUrl) {
        if (resUrl === ".") {
          resUrl = "";
        }
        if (loader.baseUrl && resUrl) {
          if (loader.baseUrl.charAt(loader.baseUrl.length - 1) === "/") {
            resUrl += "/";
          }
        }
      }
      resUrl = resUrl.replace(loader.baseUrl, "");
      if (resUrl && resUrl.charAt(resUrl.length - 1) !== "/") {
        resUrl += "/";
      }
      return resUrl;
    };
    BitmapFontLoader2.dirname = function(url2) {
      var dir = url2.replace(/\\/g, "/").replace(/\/$/, "").replace(/\/[^\/]*$/, "");
      if (dir === url2) {
        return ".";
      } else if (dir === "") {
        return "/";
      }
      return dir;
    };
    BitmapFontLoader2.extension = ExtensionType.Loader;
    return BitmapFontLoader2;
  }()
);

// node_modules/.pnpm/@pixi+filter-alpha@6.5.2_@pixi+core@6.5.2/node_modules/@pixi/filter-alpha/dist/esm/filter-alpha.mjs
var extendStatics11 = function(d, b) {
  extendStatics11 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) {
      if (b2.hasOwnProperty(p)) {
        d2[p] = b2[p];
      }
    }
  };
  return extendStatics11(d, b);
};
function __extends11(d, b) {
  extendStatics11(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var fragment3 = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n";
var AlphaFilter = (
  /** @class */
  function(_super) {
    __extends11(AlphaFilter2, _super);
    function AlphaFilter2(alpha) {
      if (alpha === void 0) {
        alpha = 1;
      }
      var _this = _super.call(this, defaultVertex$1, fragment3, { uAlpha: 1 }) || this;
      _this.alpha = alpha;
      return _this;
    }
    Object.defineProperty(AlphaFilter2.prototype, "alpha", {
      /**
       * Coefficient for alpha multiplication
       * @default 1
       */
      get: function() {
        return this.uniforms.uAlpha;
      },
      set: function(value) {
        this.uniforms.uAlpha = value;
      },
      enumerable: false,
      configurable: true
    });
    return AlphaFilter2;
  }(Filter)
);

// node_modules/.pnpm/@pixi+filter-blur@6.5.2_@pixi+core@6.5.2_@pixi+settings@6.5.2/node_modules/@pixi/filter-blur/dist/esm/filter-blur.mjs
var extendStatics12 = function(d, b) {
  extendStatics12 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) {
      if (b2.hasOwnProperty(p)) {
        d2[p] = b2[p];
      }
    }
  };
  return extendStatics12(d, b);
};
function __extends12(d, b) {
  extendStatics12(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var vertTemplate = "\n    attribute vec2 aVertexPosition;\n\n    uniform mat3 projectionMatrix;\n\n    uniform float strength;\n\n    varying vec2 vBlurTexCoords[%size%];\n\n    uniform vec4 inputSize;\n    uniform vec4 outputFrame;\n\n    vec4 filterVertexPosition( void )\n    {\n        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n    }\n\n    vec2 filterTextureCoord( void )\n    {\n        return aVertexPosition * (outputFrame.zw * inputSize.zw);\n    }\n\n    void main(void)\n    {\n        gl_Position = filterVertexPosition();\n\n        vec2 textureCoord = filterTextureCoord();\n        %blur%\n    }";
function generateBlurVertSource(kernelSize, x) {
  var halfLength = Math.ceil(kernelSize / 2);
  var vertSource = vertTemplate;
  var blurLoop = "";
  var template;
  if (x) {
    template = "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);";
  } else {
    template = "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
  }
  for (var i = 0; i < kernelSize; i++) {
    var blur = template.replace("%index%", i.toString());
    blur = blur.replace("%sampleIndex%", i - (halfLength - 1) + ".0");
    blurLoop += blur;
    blurLoop += "\n";
  }
  vertSource = vertSource.replace("%blur%", blurLoop);
  vertSource = vertSource.replace("%size%", kernelSize.toString());
  return vertSource;
}
var GAUSSIAN_VALUES = {
  5: [0.153388, 0.221461, 0.250301],
  7: [0.071303, 0.131514, 0.189879, 0.214607],
  9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236],
  11: [93e-4, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596],
  13: [2406e-6, 9255e-6, 0.027867, 0.065666, 0.121117, 0.174868, 0.197641],
  15: [489e-6, 2403e-6, 9246e-6, 0.02784, 0.065602, 0.120999, 0.174697, 0.197448]
};
var fragTemplate = [
  "varying vec2 vBlurTexCoords[%size%];",
  "uniform sampler2D uSampler;",
  "void main(void)",
  "{",
  "    gl_FragColor = vec4(0.0);",
  "    %blur%",
  "}"
].join("\n");
function generateBlurFragSource(kernelSize) {
  var kernel = GAUSSIAN_VALUES[kernelSize];
  var halfLength = kernel.length;
  var fragSource = fragTemplate;
  var blurLoop = "";
  var template = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;";
  var value;
  for (var i = 0; i < kernelSize; i++) {
    var blur = template.replace("%index%", i.toString());
    value = i;
    if (i >= halfLength) {
      value = kernelSize - i - 1;
    }
    blur = blur.replace("%value%", kernel[value].toString());
    blurLoop += blur;
    blurLoop += "\n";
  }
  fragSource = fragSource.replace("%blur%", blurLoop);
  fragSource = fragSource.replace("%size%", kernelSize.toString());
  return fragSource;
}
var ENV2;
(function(ENV5) {
  ENV5[ENV5["WEBGL_LEGACY"] = 0] = "WEBGL_LEGACY";
  ENV5[ENV5["WEBGL"] = 1] = "WEBGL";
  ENV5[ENV5["WEBGL2"] = 2] = "WEBGL2";
})(ENV2 || (ENV2 = {}));
var RENDERER_TYPE2;
(function(RENDERER_TYPE5) {
  RENDERER_TYPE5[RENDERER_TYPE5["UNKNOWN"] = 0] = "UNKNOWN";
  RENDERER_TYPE5[RENDERER_TYPE5["WEBGL"] = 1] = "WEBGL";
  RENDERER_TYPE5[RENDERER_TYPE5["CANVAS"] = 2] = "CANVAS";
})(RENDERER_TYPE2 || (RENDERER_TYPE2 = {}));
var BUFFER_BITS2;
(function(BUFFER_BITS5) {
  BUFFER_BITS5[BUFFER_BITS5["COLOR"] = 16384] = "COLOR";
  BUFFER_BITS5[BUFFER_BITS5["DEPTH"] = 256] = "DEPTH";
  BUFFER_BITS5[BUFFER_BITS5["STENCIL"] = 1024] = "STENCIL";
})(BUFFER_BITS2 || (BUFFER_BITS2 = {}));
var BLEND_MODES2;
(function(BLEND_MODES5) {
  BLEND_MODES5[BLEND_MODES5["NORMAL"] = 0] = "NORMAL";
  BLEND_MODES5[BLEND_MODES5["ADD"] = 1] = "ADD";
  BLEND_MODES5[BLEND_MODES5["MULTIPLY"] = 2] = "MULTIPLY";
  BLEND_MODES5[BLEND_MODES5["SCREEN"] = 3] = "SCREEN";
  BLEND_MODES5[BLEND_MODES5["OVERLAY"] = 4] = "OVERLAY";
  BLEND_MODES5[BLEND_MODES5["DARKEN"] = 5] = "DARKEN";
  BLEND_MODES5[BLEND_MODES5["LIGHTEN"] = 6] = "LIGHTEN";
  BLEND_MODES5[BLEND_MODES5["COLOR_DODGE"] = 7] = "COLOR_DODGE";
  BLEND_MODES5[BLEND_MODES5["COLOR_BURN"] = 8] = "COLOR_BURN";
  BLEND_MODES5[BLEND_MODES5["HARD_LIGHT"] = 9] = "HARD_LIGHT";
  BLEND_MODES5[BLEND_MODES5["SOFT_LIGHT"] = 10] = "SOFT_LIGHT";
  BLEND_MODES5[BLEND_MODES5["DIFFERENCE"] = 11] = "DIFFERENCE";
  BLEND_MODES5[BLEND_MODES5["EXCLUSION"] = 12] = "EXCLUSION";
  BLEND_MODES5[BLEND_MODES5["HUE"] = 13] = "HUE";
  BLEND_MODES5[BLEND_MODES5["SATURATION"] = 14] = "SATURATION";
  BLEND_MODES5[BLEND_MODES5["COLOR"] = 15] = "COLOR";
  BLEND_MODES5[BLEND_MODES5["LUMINOSITY"] = 16] = "LUMINOSITY";
  BLEND_MODES5[BLEND_MODES5["NORMAL_NPM"] = 17] = "NORMAL_NPM";
  BLEND_MODES5[BLEND_MODES5["ADD_NPM"] = 18] = "ADD_NPM";
  BLEND_MODES5[BLEND_MODES5["SCREEN_NPM"] = 19] = "SCREEN_NPM";
  BLEND_MODES5[BLEND_MODES5["NONE"] = 20] = "NONE";
  BLEND_MODES5[BLEND_MODES5["SRC_OVER"] = 0] = "SRC_OVER";
  BLEND_MODES5[BLEND_MODES5["SRC_IN"] = 21] = "SRC_IN";
  BLEND_MODES5[BLEND_MODES5["SRC_OUT"] = 22] = "SRC_OUT";
  BLEND_MODES5[BLEND_MODES5["SRC_ATOP"] = 23] = "SRC_ATOP";
  BLEND_MODES5[BLEND_MODES5["DST_OVER"] = 24] = "DST_OVER";
  BLEND_MODES5[BLEND_MODES5["DST_IN"] = 25] = "DST_IN";
  BLEND_MODES5[BLEND_MODES5["DST_OUT"] = 26] = "DST_OUT";
  BLEND_MODES5[BLEND_MODES5["DST_ATOP"] = 27] = "DST_ATOP";
  BLEND_MODES5[BLEND_MODES5["ERASE"] = 26] = "ERASE";
  BLEND_MODES5[BLEND_MODES5["SUBTRACT"] = 28] = "SUBTRACT";
  BLEND_MODES5[BLEND_MODES5["XOR"] = 29] = "XOR";
})(BLEND_MODES2 || (BLEND_MODES2 = {}));
var DRAW_MODES2;
(function(DRAW_MODES5) {
  DRAW_MODES5[DRAW_MODES5["POINTS"] = 0] = "POINTS";
  DRAW_MODES5[DRAW_MODES5["LINES"] = 1] = "LINES";
  DRAW_MODES5[DRAW_MODES5["LINE_LOOP"] = 2] = "LINE_LOOP";
  DRAW_MODES5[DRAW_MODES5["LINE_STRIP"] = 3] = "LINE_STRIP";
  DRAW_MODES5[DRAW_MODES5["TRIANGLES"] = 4] = "TRIANGLES";
  DRAW_MODES5[DRAW_MODES5["TRIANGLE_STRIP"] = 5] = "TRIANGLE_STRIP";
  DRAW_MODES5[DRAW_MODES5["TRIANGLE_FAN"] = 6] = "TRIANGLE_FAN";
})(DRAW_MODES2 || (DRAW_MODES2 = {}));
var FORMATS2;
(function(FORMATS5) {
  FORMATS5[FORMATS5["RGBA"] = 6408] = "RGBA";
  FORMATS5[FORMATS5["RGB"] = 6407] = "RGB";
  FORMATS5[FORMATS5["RG"] = 33319] = "RG";
  FORMATS5[FORMATS5["RED"] = 6403] = "RED";
  FORMATS5[FORMATS5["RGBA_INTEGER"] = 36249] = "RGBA_INTEGER";
  FORMATS5[FORMATS5["RGB_INTEGER"] = 36248] = "RGB_INTEGER";
  FORMATS5[FORMATS5["RG_INTEGER"] = 33320] = "RG_INTEGER";
  FORMATS5[FORMATS5["RED_INTEGER"] = 36244] = "RED_INTEGER";
  FORMATS5[FORMATS5["ALPHA"] = 6406] = "ALPHA";
  FORMATS5[FORMATS5["LUMINANCE"] = 6409] = "LUMINANCE";
  FORMATS5[FORMATS5["LUMINANCE_ALPHA"] = 6410] = "LUMINANCE_ALPHA";
  FORMATS5[FORMATS5["DEPTH_COMPONENT"] = 6402] = "DEPTH_COMPONENT";
  FORMATS5[FORMATS5["DEPTH_STENCIL"] = 34041] = "DEPTH_STENCIL";
})(FORMATS2 || (FORMATS2 = {}));
var TARGETS2;
(function(TARGETS5) {
  TARGETS5[TARGETS5["TEXTURE_2D"] = 3553] = "TEXTURE_2D";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP"] = 34067] = "TEXTURE_CUBE_MAP";
  TARGETS5[TARGETS5["TEXTURE_2D_ARRAY"] = 35866] = "TEXTURE_2D_ARRAY";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP_POSITIVE_X"] = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP_NEGATIVE_X"] = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP_POSITIVE_Y"] = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP_NEGATIVE_Y"] = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP_POSITIVE_Z"] = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP_NEGATIVE_Z"] = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
})(TARGETS2 || (TARGETS2 = {}));
var TYPES2;
(function(TYPES5) {
  TYPES5[TYPES5["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
  TYPES5[TYPES5["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
  TYPES5[TYPES5["UNSIGNED_SHORT_5_6_5"] = 33635] = "UNSIGNED_SHORT_5_6_5";
  TYPES5[TYPES5["UNSIGNED_SHORT_4_4_4_4"] = 32819] = "UNSIGNED_SHORT_4_4_4_4";
  TYPES5[TYPES5["UNSIGNED_SHORT_5_5_5_1"] = 32820] = "UNSIGNED_SHORT_5_5_5_1";
  TYPES5[TYPES5["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
  TYPES5[TYPES5["UNSIGNED_INT_10F_11F_11F_REV"] = 35899] = "UNSIGNED_INT_10F_11F_11F_REV";
  TYPES5[TYPES5["UNSIGNED_INT_2_10_10_10_REV"] = 33640] = "UNSIGNED_INT_2_10_10_10_REV";
  TYPES5[TYPES5["UNSIGNED_INT_24_8"] = 34042] = "UNSIGNED_INT_24_8";
  TYPES5[TYPES5["UNSIGNED_INT_5_9_9_9_REV"] = 35902] = "UNSIGNED_INT_5_9_9_9_REV";
  TYPES5[TYPES5["BYTE"] = 5120] = "BYTE";
  TYPES5[TYPES5["SHORT"] = 5122] = "SHORT";
  TYPES5[TYPES5["INT"] = 5124] = "INT";
  TYPES5[TYPES5["FLOAT"] = 5126] = "FLOAT";
  TYPES5[TYPES5["FLOAT_32_UNSIGNED_INT_24_8_REV"] = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV";
  TYPES5[TYPES5["HALF_FLOAT"] = 36193] = "HALF_FLOAT";
})(TYPES2 || (TYPES2 = {}));
var SAMPLER_TYPES2;
(function(SAMPLER_TYPES5) {
  SAMPLER_TYPES5[SAMPLER_TYPES5["FLOAT"] = 0] = "FLOAT";
  SAMPLER_TYPES5[SAMPLER_TYPES5["INT"] = 1] = "INT";
  SAMPLER_TYPES5[SAMPLER_TYPES5["UINT"] = 2] = "UINT";
})(SAMPLER_TYPES2 || (SAMPLER_TYPES2 = {}));
var SCALE_MODES2;
(function(SCALE_MODES5) {
  SCALE_MODES5[SCALE_MODES5["NEAREST"] = 0] = "NEAREST";
  SCALE_MODES5[SCALE_MODES5["LINEAR"] = 1] = "LINEAR";
})(SCALE_MODES2 || (SCALE_MODES2 = {}));
var WRAP_MODES2;
(function(WRAP_MODES5) {
  WRAP_MODES5[WRAP_MODES5["CLAMP"] = 33071] = "CLAMP";
  WRAP_MODES5[WRAP_MODES5["REPEAT"] = 10497] = "REPEAT";
  WRAP_MODES5[WRAP_MODES5["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
})(WRAP_MODES2 || (WRAP_MODES2 = {}));
var MIPMAP_MODES2;
(function(MIPMAP_MODES5) {
  MIPMAP_MODES5[MIPMAP_MODES5["OFF"] = 0] = "OFF";
  MIPMAP_MODES5[MIPMAP_MODES5["POW2"] = 1] = "POW2";
  MIPMAP_MODES5[MIPMAP_MODES5["ON"] = 2] = "ON";
  MIPMAP_MODES5[MIPMAP_MODES5["ON_MANUAL"] = 3] = "ON_MANUAL";
})(MIPMAP_MODES2 || (MIPMAP_MODES2 = {}));
var ALPHA_MODES2;
(function(ALPHA_MODES5) {
  ALPHA_MODES5[ALPHA_MODES5["NPM"] = 0] = "NPM";
  ALPHA_MODES5[ALPHA_MODES5["UNPACK"] = 1] = "UNPACK";
  ALPHA_MODES5[ALPHA_MODES5["PMA"] = 2] = "PMA";
  ALPHA_MODES5[ALPHA_MODES5["NO_PREMULTIPLIED_ALPHA"] = 0] = "NO_PREMULTIPLIED_ALPHA";
  ALPHA_MODES5[ALPHA_MODES5["PREMULTIPLY_ON_UPLOAD"] = 1] = "PREMULTIPLY_ON_UPLOAD";
  ALPHA_MODES5[ALPHA_MODES5["PREMULTIPLY_ALPHA"] = 2] = "PREMULTIPLY_ALPHA";
  ALPHA_MODES5[ALPHA_MODES5["PREMULTIPLIED_ALPHA"] = 2] = "PREMULTIPLIED_ALPHA";
})(ALPHA_MODES2 || (ALPHA_MODES2 = {}));
var CLEAR_MODES2;
(function(CLEAR_MODES5) {
  CLEAR_MODES5[CLEAR_MODES5["NO"] = 0] = "NO";
  CLEAR_MODES5[CLEAR_MODES5["YES"] = 1] = "YES";
  CLEAR_MODES5[CLEAR_MODES5["AUTO"] = 2] = "AUTO";
  CLEAR_MODES5[CLEAR_MODES5["BLEND"] = 0] = "BLEND";
  CLEAR_MODES5[CLEAR_MODES5["CLEAR"] = 1] = "CLEAR";
  CLEAR_MODES5[CLEAR_MODES5["BLIT"] = 2] = "BLIT";
})(CLEAR_MODES2 || (CLEAR_MODES2 = {}));
var GC_MODES2;
(function(GC_MODES5) {
  GC_MODES5[GC_MODES5["AUTO"] = 0] = "AUTO";
  GC_MODES5[GC_MODES5["MANUAL"] = 1] = "MANUAL";
})(GC_MODES2 || (GC_MODES2 = {}));
var PRECISION2;
(function(PRECISION5) {
  PRECISION5["LOW"] = "lowp";
  PRECISION5["MEDIUM"] = "mediump";
  PRECISION5["HIGH"] = "highp";
})(PRECISION2 || (PRECISION2 = {}));
var MASK_TYPES2;
(function(MASK_TYPES5) {
  MASK_TYPES5[MASK_TYPES5["NONE"] = 0] = "NONE";
  MASK_TYPES5[MASK_TYPES5["SCISSOR"] = 1] = "SCISSOR";
  MASK_TYPES5[MASK_TYPES5["STENCIL"] = 2] = "STENCIL";
  MASK_TYPES5[MASK_TYPES5["SPRITE"] = 3] = "SPRITE";
  MASK_TYPES5[MASK_TYPES5["COLOR"] = 4] = "COLOR";
})(MASK_TYPES2 || (MASK_TYPES2 = {}));
var COLOR_MASK_BITS2;
(function(COLOR_MASK_BITS5) {
  COLOR_MASK_BITS5[COLOR_MASK_BITS5["RED"] = 1] = "RED";
  COLOR_MASK_BITS5[COLOR_MASK_BITS5["GREEN"] = 2] = "GREEN";
  COLOR_MASK_BITS5[COLOR_MASK_BITS5["BLUE"] = 4] = "BLUE";
  COLOR_MASK_BITS5[COLOR_MASK_BITS5["ALPHA"] = 8] = "ALPHA";
})(COLOR_MASK_BITS2 || (COLOR_MASK_BITS2 = {}));
var MSAA_QUALITY2;
(function(MSAA_QUALITY5) {
  MSAA_QUALITY5[MSAA_QUALITY5["NONE"] = 0] = "NONE";
  MSAA_QUALITY5[MSAA_QUALITY5["LOW"] = 2] = "LOW";
  MSAA_QUALITY5[MSAA_QUALITY5["MEDIUM"] = 4] = "MEDIUM";
  MSAA_QUALITY5[MSAA_QUALITY5["HIGH"] = 8] = "HIGH";
})(MSAA_QUALITY2 || (MSAA_QUALITY2 = {}));
var BUFFER_TYPE2;
(function(BUFFER_TYPE5) {
  BUFFER_TYPE5[BUFFER_TYPE5["ELEMENT_ARRAY_BUFFER"] = 34963] = "ELEMENT_ARRAY_BUFFER";
  BUFFER_TYPE5[BUFFER_TYPE5["ARRAY_BUFFER"] = 34962] = "ARRAY_BUFFER";
  BUFFER_TYPE5[BUFFER_TYPE5["UNIFORM_BUFFER"] = 35345] = "UNIFORM_BUFFER";
})(BUFFER_TYPE2 || (BUFFER_TYPE2 = {}));
var BlurFilterPass = (
  /** @class */
  function(_super) {
    __extends12(BlurFilterPass2, _super);
    function BlurFilterPass2(horizontal, strength, quality, resolution, kernelSize) {
      if (strength === void 0) {
        strength = 8;
      }
      if (quality === void 0) {
        quality = 4;
      }
      if (resolution === void 0) {
        resolution = settings.FILTER_RESOLUTION;
      }
      if (kernelSize === void 0) {
        kernelSize = 5;
      }
      var _this = this;
      var vertSrc = generateBlurVertSource(kernelSize, horizontal);
      var fragSrc = generateBlurFragSource(kernelSize);
      _this = _super.call(
        this,
        // vertex shader
        vertSrc,
        // fragment shader
        fragSrc
      ) || this;
      _this.horizontal = horizontal;
      _this.resolution = resolution;
      _this._quality = 0;
      _this.quality = quality;
      _this.blur = strength;
      return _this;
    }
    BlurFilterPass2.prototype.apply = function(filterManager, input, output, clearMode) {
      if (output) {
        if (this.horizontal) {
          this.uniforms.strength = 1 / output.width * (output.width / input.width);
        } else {
          this.uniforms.strength = 1 / output.height * (output.height / input.height);
        }
      } else {
        if (this.horizontal) {
          this.uniforms.strength = 1 / filterManager.renderer.width * (filterManager.renderer.width / input.width);
        } else {
          this.uniforms.strength = 1 / filterManager.renderer.height * (filterManager.renderer.height / input.height);
        }
      }
      this.uniforms.strength *= this.strength;
      this.uniforms.strength /= this.passes;
      if (this.passes === 1) {
        filterManager.applyFilter(this, input, output, clearMode);
      } else {
        var renderTarget = filterManager.getFilterTexture();
        var renderer = filterManager.renderer;
        var flip = input;
        var flop = renderTarget;
        this.state.blend = false;
        filterManager.applyFilter(this, flip, flop, CLEAR_MODES2.CLEAR);
        for (var i = 1; i < this.passes - 1; i++) {
          filterManager.bindAndClear(flip, CLEAR_MODES2.BLIT);
          this.uniforms.uSampler = flop;
          var temp2 = flop;
          flop = flip;
          flip = temp2;
          renderer.shader.bind(this);
          renderer.geometry.draw(5);
        }
        this.state.blend = true;
        filterManager.applyFilter(this, flop, output, clearMode);
        filterManager.returnFilterTexture(renderTarget);
      }
    };
    Object.defineProperty(BlurFilterPass2.prototype, "blur", {
      /**
       * Sets the strength of both the blur.
       * @default 16
       */
      get: function() {
        return this.strength;
      },
      set: function(value) {
        this.padding = 1 + Math.abs(value) * 2;
        this.strength = value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BlurFilterPass2.prototype, "quality", {
      /**
       * Sets the quality of the blur by modifying the number of passes. More passes means higher
       * quality bluring but the lower the performance.
       * @default 4
       */
      get: function() {
        return this._quality;
      },
      set: function(value) {
        this._quality = value;
        this.passes = value;
      },
      enumerable: false,
      configurable: true
    });
    return BlurFilterPass2;
  }(Filter)
);
var BlurFilter = (
  /** @class */
  function(_super) {
    __extends12(BlurFilter2, _super);
    function BlurFilter2(strength, quality, resolution, kernelSize) {
      if (strength === void 0) {
        strength = 8;
      }
      if (quality === void 0) {
        quality = 4;
      }
      if (resolution === void 0) {
        resolution = settings.FILTER_RESOLUTION;
      }
      if (kernelSize === void 0) {
        kernelSize = 5;
      }
      var _this = _super.call(this) || this;
      _this.blurXFilter = new BlurFilterPass(true, strength, quality, resolution, kernelSize);
      _this.blurYFilter = new BlurFilterPass(false, strength, quality, resolution, kernelSize);
      _this.resolution = resolution;
      _this.quality = quality;
      _this.blur = strength;
      _this.repeatEdgePixels = false;
      return _this;
    }
    BlurFilter2.prototype.apply = function(filterManager, input, output, clearMode) {
      var xStrength = Math.abs(this.blurXFilter.strength);
      var yStrength = Math.abs(this.blurYFilter.strength);
      if (xStrength && yStrength) {
        var renderTarget = filterManager.getFilterTexture();
        this.blurXFilter.apply(filterManager, input, renderTarget, CLEAR_MODES2.CLEAR);
        this.blurYFilter.apply(filterManager, renderTarget, output, clearMode);
        filterManager.returnFilterTexture(renderTarget);
      } else if (yStrength) {
        this.blurYFilter.apply(filterManager, input, output, clearMode);
      } else {
        this.blurXFilter.apply(filterManager, input, output, clearMode);
      }
    };
    BlurFilter2.prototype.updatePadding = function() {
      if (this._repeatEdgePixels) {
        this.padding = 0;
      } else {
        this.padding = Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength)) * 2;
      }
    };
    Object.defineProperty(BlurFilter2.prototype, "blur", {
      /**
       * Sets the strength of both the blurX and blurY properties simultaneously
       * @default 2
       */
      get: function() {
        return this.blurXFilter.blur;
      },
      set: function(value) {
        this.blurXFilter.blur = this.blurYFilter.blur = value;
        this.updatePadding();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BlurFilter2.prototype, "quality", {
      /**
       * Sets the number of passes for blur. More passes means higher quality bluring.
       * @default 1
       */
      get: function() {
        return this.blurXFilter.quality;
      },
      set: function(value) {
        this.blurXFilter.quality = this.blurYFilter.quality = value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BlurFilter2.prototype, "blurX", {
      /**
       * Sets the strength of the blurX property
       * @default 2
       */
      get: function() {
        return this.blurXFilter.blur;
      },
      set: function(value) {
        this.blurXFilter.blur = value;
        this.updatePadding();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BlurFilter2.prototype, "blurY", {
      /**
       * Sets the strength of the blurY property
       * @default 2
       */
      get: function() {
        return this.blurYFilter.blur;
      },
      set: function(value) {
        this.blurYFilter.blur = value;
        this.updatePadding();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BlurFilter2.prototype, "blendMode", {
      /**
       * Sets the blendmode of the filter
       * @default PIXI.BLEND_MODES.NORMAL
       */
      get: function() {
        return this.blurYFilter.blendMode;
      },
      set: function(value) {
        this.blurYFilter.blendMode = value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BlurFilter2.prototype, "repeatEdgePixels", {
      /**
       * If set to true the edge of the target will be clamped
       * @default false
       */
      get: function() {
        return this._repeatEdgePixels;
      },
      set: function(value) {
        this._repeatEdgePixels = value;
        this.updatePadding();
      },
      enumerable: false,
      configurable: true
    });
    return BlurFilter2;
  }(Filter)
);

// node_modules/.pnpm/@pixi+filter-color-matrix@6.5.2_@pixi+core@6.5.2/node_modules/@pixi/filter-color-matrix/dist/esm/filter-color-matrix.mjs
var extendStatics13 = function(d, b) {
  extendStatics13 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) {
      if (b2.hasOwnProperty(p)) {
        d2[p] = b2[p];
      }
    }
  };
  return extendStatics13(d, b);
};
function __extends13(d, b) {
  extendStatics13(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var fragment4 = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n";
var ColorMatrixFilter = (
  /** @class */
  function(_super) {
    __extends13(ColorMatrixFilter2, _super);
    function ColorMatrixFilter2() {
      var _this = this;
      var uniforms = {
        m: new Float32Array([
          1,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          1,
          0
        ]),
        uAlpha: 1
      };
      _this = _super.call(this, defaultFilterVertex, fragment4, uniforms) || this;
      _this.alpha = 1;
      return _this;
    }
    ColorMatrixFilter2.prototype._loadMatrix = function(matrix, multiply) {
      if (multiply === void 0) {
        multiply = false;
      }
      var newMatrix = matrix;
      if (multiply) {
        this._multiply(newMatrix, this.uniforms.m, matrix);
        newMatrix = this._colorMatrix(newMatrix);
      }
      this.uniforms.m = newMatrix;
    };
    ColorMatrixFilter2.prototype._multiply = function(out, a, b) {
      out[0] = a[0] * b[0] + a[1] * b[5] + a[2] * b[10] + a[3] * b[15];
      out[1] = a[0] * b[1] + a[1] * b[6] + a[2] * b[11] + a[3] * b[16];
      out[2] = a[0] * b[2] + a[1] * b[7] + a[2] * b[12] + a[3] * b[17];
      out[3] = a[0] * b[3] + a[1] * b[8] + a[2] * b[13] + a[3] * b[18];
      out[4] = a[0] * b[4] + a[1] * b[9] + a[2] * b[14] + a[3] * b[19] + a[4];
      out[5] = a[5] * b[0] + a[6] * b[5] + a[7] * b[10] + a[8] * b[15];
      out[6] = a[5] * b[1] + a[6] * b[6] + a[7] * b[11] + a[8] * b[16];
      out[7] = a[5] * b[2] + a[6] * b[7] + a[7] * b[12] + a[8] * b[17];
      out[8] = a[5] * b[3] + a[6] * b[8] + a[7] * b[13] + a[8] * b[18];
      out[9] = a[5] * b[4] + a[6] * b[9] + a[7] * b[14] + a[8] * b[19] + a[9];
      out[10] = a[10] * b[0] + a[11] * b[5] + a[12] * b[10] + a[13] * b[15];
      out[11] = a[10] * b[1] + a[11] * b[6] + a[12] * b[11] + a[13] * b[16];
      out[12] = a[10] * b[2] + a[11] * b[7] + a[12] * b[12] + a[13] * b[17];
      out[13] = a[10] * b[3] + a[11] * b[8] + a[12] * b[13] + a[13] * b[18];
      out[14] = a[10] * b[4] + a[11] * b[9] + a[12] * b[14] + a[13] * b[19] + a[14];
      out[15] = a[15] * b[0] + a[16] * b[5] + a[17] * b[10] + a[18] * b[15];
      out[16] = a[15] * b[1] + a[16] * b[6] + a[17] * b[11] + a[18] * b[16];
      out[17] = a[15] * b[2] + a[16] * b[7] + a[17] * b[12] + a[18] * b[17];
      out[18] = a[15] * b[3] + a[16] * b[8] + a[17] * b[13] + a[18] * b[18];
      out[19] = a[15] * b[4] + a[16] * b[9] + a[17] * b[14] + a[18] * b[19] + a[19];
      return out;
    };
    ColorMatrixFilter2.prototype._colorMatrix = function(matrix) {
      var m = new Float32Array(matrix);
      m[4] /= 255;
      m[9] /= 255;
      m[14] /= 255;
      m[19] /= 255;
      return m;
    };
    ColorMatrixFilter2.prototype.brightness = function(b, multiply) {
      var matrix = [
        b,
        0,
        0,
        0,
        0,
        0,
        b,
        0,
        0,
        0,
        0,
        0,
        b,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter2.prototype.tint = function(color, multiply) {
      var r = color >> 16 & 255;
      var g = color >> 8 & 255;
      var b = color & 255;
      var matrix = [
        r / 255,
        0,
        0,
        0,
        0,
        0,
        g / 255,
        0,
        0,
        0,
        0,
        0,
        b / 255,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter2.prototype.greyscale = function(scale, multiply) {
      var matrix = [
        scale,
        scale,
        scale,
        0,
        0,
        scale,
        scale,
        scale,
        0,
        0,
        scale,
        scale,
        scale,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter2.prototype.blackAndWhite = function(multiply) {
      var matrix = [
        0.3,
        0.6,
        0.1,
        0,
        0,
        0.3,
        0.6,
        0.1,
        0,
        0,
        0.3,
        0.6,
        0.1,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter2.prototype.hue = function(rotation, multiply) {
      rotation = (rotation || 0) / 180 * Math.PI;
      var cosR = Math.cos(rotation);
      var sinR = Math.sin(rotation);
      var sqrt = Math.sqrt;
      var w = 1 / 3;
      var sqrW = sqrt(w);
      var a00 = cosR + (1 - cosR) * w;
      var a01 = w * (1 - cosR) - sqrW * sinR;
      var a02 = w * (1 - cosR) + sqrW * sinR;
      var a10 = w * (1 - cosR) + sqrW * sinR;
      var a11 = cosR + w * (1 - cosR);
      var a12 = w * (1 - cosR) - sqrW * sinR;
      var a20 = w * (1 - cosR) - sqrW * sinR;
      var a21 = w * (1 - cosR) + sqrW * sinR;
      var a22 = cosR + w * (1 - cosR);
      var matrix = [
        a00,
        a01,
        a02,
        0,
        0,
        a10,
        a11,
        a12,
        0,
        0,
        a20,
        a21,
        a22,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter2.prototype.contrast = function(amount, multiply) {
      var v = (amount || 0) + 1;
      var o = -0.5 * (v - 1);
      var matrix = [
        v,
        0,
        0,
        0,
        o,
        0,
        v,
        0,
        0,
        o,
        0,
        0,
        v,
        0,
        o,
        0,
        0,
        0,
        1,
        0
      ];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter2.prototype.saturate = function(amount, multiply) {
      if (amount === void 0) {
        amount = 0;
      }
      var x = amount * 2 / 3 + 1;
      var y = (x - 1) * -0.5;
      var matrix = [
        x,
        y,
        y,
        0,
        0,
        y,
        x,
        y,
        0,
        0,
        y,
        y,
        x,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter2.prototype.desaturate = function() {
      this.saturate(-1);
    };
    ColorMatrixFilter2.prototype.negative = function(multiply) {
      var matrix = [
        -1,
        0,
        0,
        1,
        0,
        0,
        -1,
        0,
        1,
        0,
        0,
        0,
        -1,
        1,
        0,
        0,
        0,
        0,
        1,
        0
      ];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter2.prototype.sepia = function(multiply) {
      var matrix = [
        0.393,
        0.7689999,
        0.18899999,
        0,
        0,
        0.349,
        0.6859999,
        0.16799999,
        0,
        0,
        0.272,
        0.5339999,
        0.13099999,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter2.prototype.technicolor = function(multiply) {
      var matrix = [
        1.9125277891456083,
        -0.8545344976951645,
        -0.09155508482755585,
        0,
        11.793603434377337,
        -0.3087833385928097,
        1.7658908555458428,
        -0.10601743074722245,
        0,
        -70.35205161461398,
        -0.231103377548616,
        -0.7501899197440212,
        1.847597816108189,
        0,
        30.950940869491138,
        0,
        0,
        0,
        1,
        0
      ];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter2.prototype.polaroid = function(multiply) {
      var matrix = [
        1.438,
        -0.062,
        -0.062,
        0,
        0,
        -0.122,
        1.378,
        -0.122,
        0,
        0,
        -0.016,
        -0.016,
        1.483,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter2.prototype.toBGR = function(multiply) {
      var matrix = [
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter2.prototype.kodachrome = function(multiply) {
      var matrix = [
        1.1285582396593525,
        -0.3967382283601348,
        -0.03992559172921793,
        0,
        63.72958762196502,
        -0.16404339962244616,
        1.0835251566291304,
        -0.05498805115633132,
        0,
        24.732407896706203,
        -0.16786010706155763,
        -0.5603416277695248,
        1.6014850761964943,
        0,
        35.62982807460946,
        0,
        0,
        0,
        1,
        0
      ];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter2.prototype.browni = function(multiply) {
      var matrix = [
        0.5997023498159715,
        0.34553243048391263,
        -0.2708298674538042,
        0,
        47.43192855600873,
        -0.037703249837783157,
        0.8609577587992641,
        0.15059552388459913,
        0,
        -36.96841498319127,
        0.24113635128153335,
        -0.07441037908422492,
        0.44972182064877153,
        0,
        -7.562075277591283,
        0,
        0,
        0,
        1,
        0
      ];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter2.prototype.vintage = function(multiply) {
      var matrix = [
        0.6279345635605994,
        0.3202183420819367,
        -0.03965408211312453,
        0,
        9.651285835294123,
        0.02578397704808868,
        0.6441188644374771,
        0.03259127616149294,
        0,
        7.462829176470591,
        0.0466055556782719,
        -0.0851232987247891,
        0.5241648018700465,
        0,
        5.159190588235296,
        0,
        0,
        0,
        1,
        0
      ];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter2.prototype.colorTone = function(desaturation, toned, lightColor, darkColor, multiply) {
      desaturation = desaturation || 0.2;
      toned = toned || 0.15;
      lightColor = lightColor || 16770432;
      darkColor = darkColor || 3375104;
      var lR = (lightColor >> 16 & 255) / 255;
      var lG = (lightColor >> 8 & 255) / 255;
      var lB = (lightColor & 255) / 255;
      var dR = (darkColor >> 16 & 255) / 255;
      var dG = (darkColor >> 8 & 255) / 255;
      var dB = (darkColor & 255) / 255;
      var matrix = [
        0.3,
        0.59,
        0.11,
        0,
        0,
        lR,
        lG,
        lB,
        desaturation,
        0,
        dR,
        dG,
        dB,
        toned,
        0,
        lR - dR,
        lG - dG,
        lB - dB,
        0,
        0
      ];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter2.prototype.night = function(intensity, multiply) {
      intensity = intensity || 0.1;
      var matrix = [
        intensity * -2,
        -intensity,
        0,
        0,
        0,
        -intensity,
        0,
        intensity,
        0,
        0,
        0,
        intensity,
        intensity * 2,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter2.prototype.predator = function(amount, multiply) {
      var matrix = [
        // row 1
        11.224130630493164 * amount,
        -4.794486999511719 * amount,
        -2.8746118545532227 * amount,
        0 * amount,
        0.40342438220977783 * amount,
        // row 2
        -3.6330697536468506 * amount,
        9.193157196044922 * amount,
        -2.951810836791992 * amount,
        0 * amount,
        -1.316135048866272 * amount,
        // row 3
        -3.2184197902679443 * amount,
        -4.2375030517578125 * amount,
        7.476448059082031 * amount,
        0 * amount,
        0.8044459223747253 * amount,
        // row 4
        0,
        0,
        0,
        1,
        0
      ];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter2.prototype.lsd = function(multiply) {
      var matrix = [
        2,
        -0.4,
        0.5,
        0,
        0,
        -0.5,
        2,
        -0.4,
        0,
        0,
        -0.4,
        -0.5,
        3,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ];
      this._loadMatrix(matrix, multiply);
    };
    ColorMatrixFilter2.prototype.reset = function() {
      var matrix = [
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ];
      this._loadMatrix(matrix, false);
    };
    Object.defineProperty(ColorMatrixFilter2.prototype, "matrix", {
      /**
       * The matrix of the color matrix filter
       * @member {number[]}
       * @default [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
       */
      get: function() {
        return this.uniforms.m;
      },
      set: function(value) {
        this.uniforms.m = value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ColorMatrixFilter2.prototype, "alpha", {
      /**
       * The opacity value to use when mixing the original and resultant colors.
       *
       * When the value is 0, the original color is used without modification.
       * When the value is 1, the result color is used.
       * When in the range (0, 1) the color is interpolated between the original and result by this amount.
       * @default 1
       */
      get: function() {
        return this.uniforms.uAlpha;
      },
      set: function(value) {
        this.uniforms.uAlpha = value;
      },
      enumerable: false,
      configurable: true
    });
    return ColorMatrixFilter2;
  }(Filter)
);
ColorMatrixFilter.prototype.grayscale = ColorMatrixFilter.prototype.greyscale;

// node_modules/.pnpm/@pixi+filter-displacement@6.5.2_@pixi+core@6.5.2_@pixi+math@6.5.2/node_modules/@pixi/filter-displacement/dist/esm/filter-displacement.mjs
var extendStatics14 = function(d, b) {
  extendStatics14 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) {
      if (b2.hasOwnProperty(p)) {
        d2[p] = b2[p];
      }
    }
  };
  return extendStatics14(d, b);
};
function __extends14(d, b) {
  extendStatics14(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var fragment5 = "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\nuniform mat2 rotation;\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform highp vec4 inputSize;\nuniform vec4 inputClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy = scale * inputSize.zw * (rotation * map.xy);\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));\n}\n";
var vertex3 = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n	gl_Position = filterVertexPosition();\n	vTextureCoord = filterTextureCoord();\n	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;\n}\n";
var DisplacementFilter = (
  /** @class */
  function(_super) {
    __extends14(DisplacementFilter2, _super);
    function DisplacementFilter2(sprite, scale) {
      var _this = this;
      var maskMatrix = new Matrix();
      sprite.renderable = false;
      _this = _super.call(this, vertex3, fragment5, {
        mapSampler: sprite._texture,
        filterMatrix: maskMatrix,
        scale: { x: 1, y: 1 },
        rotation: new Float32Array([1, 0, 0, 1])
      }) || this;
      _this.maskSprite = sprite;
      _this.maskMatrix = maskMatrix;
      if (scale === null || scale === void 0) {
        scale = 20;
      }
      _this.scale = new Point(scale, scale);
      return _this;
    }
    DisplacementFilter2.prototype.apply = function(filterManager, input, output, clearMode) {
      this.uniforms.filterMatrix = filterManager.calculateSpriteMatrix(this.maskMatrix, this.maskSprite);
      this.uniforms.scale.x = this.scale.x;
      this.uniforms.scale.y = this.scale.y;
      var wt = this.maskSprite.worldTransform;
      var lenX = Math.sqrt(wt.a * wt.a + wt.b * wt.b);
      var lenY = Math.sqrt(wt.c * wt.c + wt.d * wt.d);
      if (lenX !== 0 && lenY !== 0) {
        this.uniforms.rotation[0] = wt.a / lenX;
        this.uniforms.rotation[1] = wt.b / lenX;
        this.uniforms.rotation[2] = wt.c / lenY;
        this.uniforms.rotation[3] = wt.d / lenY;
      }
      filterManager.applyFilter(this, input, output, clearMode);
    };
    Object.defineProperty(DisplacementFilter2.prototype, "map", {
      /** The texture used for the displacement map. Must be power of 2 sized texture. */
      get: function() {
        return this.uniforms.mapSampler;
      },
      set: function(value) {
        this.uniforms.mapSampler = value;
      },
      enumerable: false,
      configurable: true
    });
    return DisplacementFilter2;
  }(Filter)
);

// node_modules/.pnpm/@pixi+filter-fxaa@6.5.2_@pixi+core@6.5.2/node_modules/@pixi/filter-fxaa/dist/esm/filter-fxaa.mjs
var extendStatics15 = function(d, b) {
  extendStatics15 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) {
      if (b2.hasOwnProperty(p)) {
        d2[p] = b2[p];
      }
    }
  };
  return extendStatics15(d, b);
};
function __extends15(d, b) {
  extendStatics15(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var vertex4 = "\nattribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvoid texcoords(vec2 fragCoord, vec2 inverseVP,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = filterVertexPosition();\n\n   vFragCoord = aVertexPosition * outputFrame.zw;\n\n   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n";
var fragment6 = `varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`;
var FXAAFilter = (
  /** @class */
  function(_super) {
    __extends15(FXAAFilter2, _super);
    function FXAAFilter2() {
      return _super.call(this, vertex4, fragment6) || this;
    }
    return FXAAFilter2;
  }(Filter)
);

// node_modules/.pnpm/@pixi+filter-noise@6.5.2_@pixi+core@6.5.2/node_modules/@pixi/filter-noise/dist/esm/filter-noise.mjs
var extendStatics16 = function(d, b) {
  extendStatics16 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) {
      if (b2.hasOwnProperty(p)) {
        d2[p] = b2[p];
      }
    }
  };
  return extendStatics16(d, b);
};
function __extends16(d, b) {
  extendStatics16(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var fragment7 = "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n";
var NoiseFilter = (
  /** @class */
  function(_super) {
    __extends16(NoiseFilter2, _super);
    function NoiseFilter2(noise, seed) {
      if (noise === void 0) {
        noise = 0.5;
      }
      if (seed === void 0) {
        seed = Math.random();
      }
      var _this = _super.call(this, defaultFilterVertex, fragment7, {
        uNoise: 0,
        uSeed: 0
      }) || this;
      _this.noise = noise;
      _this.seed = seed;
      return _this;
    }
    Object.defineProperty(NoiseFilter2.prototype, "noise", {
      /**
       * The amount of noise to apply, this value should be in the range (0, 1].
       * @default 0.5
       */
      get: function() {
        return this.uniforms.uNoise;
      },
      set: function(value) {
        this.uniforms.uNoise = value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(NoiseFilter2.prototype, "seed", {
      /** A seed value to apply to the random noise generation. `Math.random()` is a good value to use. */
      get: function() {
        return this.uniforms.uSeed;
      },
      set: function(value) {
        this.uniforms.uSeed = value;
      },
      enumerable: false,
      configurable: true
    });
    return NoiseFilter2;
  }(Filter)
);

// node_modules/.pnpm/@pixi+mixin-cache-as-bitmap@6.5.2_@pixi+core@6.5.2_@pixi+display@6.5.2_@pixi+math@6.5.2_@pixi_z47xe7emsxaqm5lvkrrq6mibsm/node_modules/@pixi/mixin-cache-as-bitmap/dist/esm/mixin-cache-as-bitmap.mjs
var ENV3;
(function(ENV5) {
  ENV5[ENV5["WEBGL_LEGACY"] = 0] = "WEBGL_LEGACY";
  ENV5[ENV5["WEBGL"] = 1] = "WEBGL";
  ENV5[ENV5["WEBGL2"] = 2] = "WEBGL2";
})(ENV3 || (ENV3 = {}));
var RENDERER_TYPE3;
(function(RENDERER_TYPE5) {
  RENDERER_TYPE5[RENDERER_TYPE5["UNKNOWN"] = 0] = "UNKNOWN";
  RENDERER_TYPE5[RENDERER_TYPE5["WEBGL"] = 1] = "WEBGL";
  RENDERER_TYPE5[RENDERER_TYPE5["CANVAS"] = 2] = "CANVAS";
})(RENDERER_TYPE3 || (RENDERER_TYPE3 = {}));
var BUFFER_BITS3;
(function(BUFFER_BITS5) {
  BUFFER_BITS5[BUFFER_BITS5["COLOR"] = 16384] = "COLOR";
  BUFFER_BITS5[BUFFER_BITS5["DEPTH"] = 256] = "DEPTH";
  BUFFER_BITS5[BUFFER_BITS5["STENCIL"] = 1024] = "STENCIL";
})(BUFFER_BITS3 || (BUFFER_BITS3 = {}));
var BLEND_MODES3;
(function(BLEND_MODES5) {
  BLEND_MODES5[BLEND_MODES5["NORMAL"] = 0] = "NORMAL";
  BLEND_MODES5[BLEND_MODES5["ADD"] = 1] = "ADD";
  BLEND_MODES5[BLEND_MODES5["MULTIPLY"] = 2] = "MULTIPLY";
  BLEND_MODES5[BLEND_MODES5["SCREEN"] = 3] = "SCREEN";
  BLEND_MODES5[BLEND_MODES5["OVERLAY"] = 4] = "OVERLAY";
  BLEND_MODES5[BLEND_MODES5["DARKEN"] = 5] = "DARKEN";
  BLEND_MODES5[BLEND_MODES5["LIGHTEN"] = 6] = "LIGHTEN";
  BLEND_MODES5[BLEND_MODES5["COLOR_DODGE"] = 7] = "COLOR_DODGE";
  BLEND_MODES5[BLEND_MODES5["COLOR_BURN"] = 8] = "COLOR_BURN";
  BLEND_MODES5[BLEND_MODES5["HARD_LIGHT"] = 9] = "HARD_LIGHT";
  BLEND_MODES5[BLEND_MODES5["SOFT_LIGHT"] = 10] = "SOFT_LIGHT";
  BLEND_MODES5[BLEND_MODES5["DIFFERENCE"] = 11] = "DIFFERENCE";
  BLEND_MODES5[BLEND_MODES5["EXCLUSION"] = 12] = "EXCLUSION";
  BLEND_MODES5[BLEND_MODES5["HUE"] = 13] = "HUE";
  BLEND_MODES5[BLEND_MODES5["SATURATION"] = 14] = "SATURATION";
  BLEND_MODES5[BLEND_MODES5["COLOR"] = 15] = "COLOR";
  BLEND_MODES5[BLEND_MODES5["LUMINOSITY"] = 16] = "LUMINOSITY";
  BLEND_MODES5[BLEND_MODES5["NORMAL_NPM"] = 17] = "NORMAL_NPM";
  BLEND_MODES5[BLEND_MODES5["ADD_NPM"] = 18] = "ADD_NPM";
  BLEND_MODES5[BLEND_MODES5["SCREEN_NPM"] = 19] = "SCREEN_NPM";
  BLEND_MODES5[BLEND_MODES5["NONE"] = 20] = "NONE";
  BLEND_MODES5[BLEND_MODES5["SRC_OVER"] = 0] = "SRC_OVER";
  BLEND_MODES5[BLEND_MODES5["SRC_IN"] = 21] = "SRC_IN";
  BLEND_MODES5[BLEND_MODES5["SRC_OUT"] = 22] = "SRC_OUT";
  BLEND_MODES5[BLEND_MODES5["SRC_ATOP"] = 23] = "SRC_ATOP";
  BLEND_MODES5[BLEND_MODES5["DST_OVER"] = 24] = "DST_OVER";
  BLEND_MODES5[BLEND_MODES5["DST_IN"] = 25] = "DST_IN";
  BLEND_MODES5[BLEND_MODES5["DST_OUT"] = 26] = "DST_OUT";
  BLEND_MODES5[BLEND_MODES5["DST_ATOP"] = 27] = "DST_ATOP";
  BLEND_MODES5[BLEND_MODES5["ERASE"] = 26] = "ERASE";
  BLEND_MODES5[BLEND_MODES5["SUBTRACT"] = 28] = "SUBTRACT";
  BLEND_MODES5[BLEND_MODES5["XOR"] = 29] = "XOR";
})(BLEND_MODES3 || (BLEND_MODES3 = {}));
var DRAW_MODES3;
(function(DRAW_MODES5) {
  DRAW_MODES5[DRAW_MODES5["POINTS"] = 0] = "POINTS";
  DRAW_MODES5[DRAW_MODES5["LINES"] = 1] = "LINES";
  DRAW_MODES5[DRAW_MODES5["LINE_LOOP"] = 2] = "LINE_LOOP";
  DRAW_MODES5[DRAW_MODES5["LINE_STRIP"] = 3] = "LINE_STRIP";
  DRAW_MODES5[DRAW_MODES5["TRIANGLES"] = 4] = "TRIANGLES";
  DRAW_MODES5[DRAW_MODES5["TRIANGLE_STRIP"] = 5] = "TRIANGLE_STRIP";
  DRAW_MODES5[DRAW_MODES5["TRIANGLE_FAN"] = 6] = "TRIANGLE_FAN";
})(DRAW_MODES3 || (DRAW_MODES3 = {}));
var FORMATS3;
(function(FORMATS5) {
  FORMATS5[FORMATS5["RGBA"] = 6408] = "RGBA";
  FORMATS5[FORMATS5["RGB"] = 6407] = "RGB";
  FORMATS5[FORMATS5["RG"] = 33319] = "RG";
  FORMATS5[FORMATS5["RED"] = 6403] = "RED";
  FORMATS5[FORMATS5["RGBA_INTEGER"] = 36249] = "RGBA_INTEGER";
  FORMATS5[FORMATS5["RGB_INTEGER"] = 36248] = "RGB_INTEGER";
  FORMATS5[FORMATS5["RG_INTEGER"] = 33320] = "RG_INTEGER";
  FORMATS5[FORMATS5["RED_INTEGER"] = 36244] = "RED_INTEGER";
  FORMATS5[FORMATS5["ALPHA"] = 6406] = "ALPHA";
  FORMATS5[FORMATS5["LUMINANCE"] = 6409] = "LUMINANCE";
  FORMATS5[FORMATS5["LUMINANCE_ALPHA"] = 6410] = "LUMINANCE_ALPHA";
  FORMATS5[FORMATS5["DEPTH_COMPONENT"] = 6402] = "DEPTH_COMPONENT";
  FORMATS5[FORMATS5["DEPTH_STENCIL"] = 34041] = "DEPTH_STENCIL";
})(FORMATS3 || (FORMATS3 = {}));
var TARGETS3;
(function(TARGETS5) {
  TARGETS5[TARGETS5["TEXTURE_2D"] = 3553] = "TEXTURE_2D";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP"] = 34067] = "TEXTURE_CUBE_MAP";
  TARGETS5[TARGETS5["TEXTURE_2D_ARRAY"] = 35866] = "TEXTURE_2D_ARRAY";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP_POSITIVE_X"] = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP_NEGATIVE_X"] = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP_POSITIVE_Y"] = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP_NEGATIVE_Y"] = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP_POSITIVE_Z"] = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP_NEGATIVE_Z"] = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
})(TARGETS3 || (TARGETS3 = {}));
var TYPES3;
(function(TYPES5) {
  TYPES5[TYPES5["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
  TYPES5[TYPES5["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
  TYPES5[TYPES5["UNSIGNED_SHORT_5_6_5"] = 33635] = "UNSIGNED_SHORT_5_6_5";
  TYPES5[TYPES5["UNSIGNED_SHORT_4_4_4_4"] = 32819] = "UNSIGNED_SHORT_4_4_4_4";
  TYPES5[TYPES5["UNSIGNED_SHORT_5_5_5_1"] = 32820] = "UNSIGNED_SHORT_5_5_5_1";
  TYPES5[TYPES5["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
  TYPES5[TYPES5["UNSIGNED_INT_10F_11F_11F_REV"] = 35899] = "UNSIGNED_INT_10F_11F_11F_REV";
  TYPES5[TYPES5["UNSIGNED_INT_2_10_10_10_REV"] = 33640] = "UNSIGNED_INT_2_10_10_10_REV";
  TYPES5[TYPES5["UNSIGNED_INT_24_8"] = 34042] = "UNSIGNED_INT_24_8";
  TYPES5[TYPES5["UNSIGNED_INT_5_9_9_9_REV"] = 35902] = "UNSIGNED_INT_5_9_9_9_REV";
  TYPES5[TYPES5["BYTE"] = 5120] = "BYTE";
  TYPES5[TYPES5["SHORT"] = 5122] = "SHORT";
  TYPES5[TYPES5["INT"] = 5124] = "INT";
  TYPES5[TYPES5["FLOAT"] = 5126] = "FLOAT";
  TYPES5[TYPES5["FLOAT_32_UNSIGNED_INT_24_8_REV"] = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV";
  TYPES5[TYPES5["HALF_FLOAT"] = 36193] = "HALF_FLOAT";
})(TYPES3 || (TYPES3 = {}));
var SAMPLER_TYPES3;
(function(SAMPLER_TYPES5) {
  SAMPLER_TYPES5[SAMPLER_TYPES5["FLOAT"] = 0] = "FLOAT";
  SAMPLER_TYPES5[SAMPLER_TYPES5["INT"] = 1] = "INT";
  SAMPLER_TYPES5[SAMPLER_TYPES5["UINT"] = 2] = "UINT";
})(SAMPLER_TYPES3 || (SAMPLER_TYPES3 = {}));
var SCALE_MODES3;
(function(SCALE_MODES5) {
  SCALE_MODES5[SCALE_MODES5["NEAREST"] = 0] = "NEAREST";
  SCALE_MODES5[SCALE_MODES5["LINEAR"] = 1] = "LINEAR";
})(SCALE_MODES3 || (SCALE_MODES3 = {}));
var WRAP_MODES3;
(function(WRAP_MODES5) {
  WRAP_MODES5[WRAP_MODES5["CLAMP"] = 33071] = "CLAMP";
  WRAP_MODES5[WRAP_MODES5["REPEAT"] = 10497] = "REPEAT";
  WRAP_MODES5[WRAP_MODES5["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
})(WRAP_MODES3 || (WRAP_MODES3 = {}));
var MIPMAP_MODES3;
(function(MIPMAP_MODES5) {
  MIPMAP_MODES5[MIPMAP_MODES5["OFF"] = 0] = "OFF";
  MIPMAP_MODES5[MIPMAP_MODES5["POW2"] = 1] = "POW2";
  MIPMAP_MODES5[MIPMAP_MODES5["ON"] = 2] = "ON";
  MIPMAP_MODES5[MIPMAP_MODES5["ON_MANUAL"] = 3] = "ON_MANUAL";
})(MIPMAP_MODES3 || (MIPMAP_MODES3 = {}));
var ALPHA_MODES3;
(function(ALPHA_MODES5) {
  ALPHA_MODES5[ALPHA_MODES5["NPM"] = 0] = "NPM";
  ALPHA_MODES5[ALPHA_MODES5["UNPACK"] = 1] = "UNPACK";
  ALPHA_MODES5[ALPHA_MODES5["PMA"] = 2] = "PMA";
  ALPHA_MODES5[ALPHA_MODES5["NO_PREMULTIPLIED_ALPHA"] = 0] = "NO_PREMULTIPLIED_ALPHA";
  ALPHA_MODES5[ALPHA_MODES5["PREMULTIPLY_ON_UPLOAD"] = 1] = "PREMULTIPLY_ON_UPLOAD";
  ALPHA_MODES5[ALPHA_MODES5["PREMULTIPLY_ALPHA"] = 2] = "PREMULTIPLY_ALPHA";
  ALPHA_MODES5[ALPHA_MODES5["PREMULTIPLIED_ALPHA"] = 2] = "PREMULTIPLIED_ALPHA";
})(ALPHA_MODES3 || (ALPHA_MODES3 = {}));
var CLEAR_MODES3;
(function(CLEAR_MODES5) {
  CLEAR_MODES5[CLEAR_MODES5["NO"] = 0] = "NO";
  CLEAR_MODES5[CLEAR_MODES5["YES"] = 1] = "YES";
  CLEAR_MODES5[CLEAR_MODES5["AUTO"] = 2] = "AUTO";
  CLEAR_MODES5[CLEAR_MODES5["BLEND"] = 0] = "BLEND";
  CLEAR_MODES5[CLEAR_MODES5["CLEAR"] = 1] = "CLEAR";
  CLEAR_MODES5[CLEAR_MODES5["BLIT"] = 2] = "BLIT";
})(CLEAR_MODES3 || (CLEAR_MODES3 = {}));
var GC_MODES3;
(function(GC_MODES5) {
  GC_MODES5[GC_MODES5["AUTO"] = 0] = "AUTO";
  GC_MODES5[GC_MODES5["MANUAL"] = 1] = "MANUAL";
})(GC_MODES3 || (GC_MODES3 = {}));
var PRECISION3;
(function(PRECISION5) {
  PRECISION5["LOW"] = "lowp";
  PRECISION5["MEDIUM"] = "mediump";
  PRECISION5["HIGH"] = "highp";
})(PRECISION3 || (PRECISION3 = {}));
var MASK_TYPES3;
(function(MASK_TYPES5) {
  MASK_TYPES5[MASK_TYPES5["NONE"] = 0] = "NONE";
  MASK_TYPES5[MASK_TYPES5["SCISSOR"] = 1] = "SCISSOR";
  MASK_TYPES5[MASK_TYPES5["STENCIL"] = 2] = "STENCIL";
  MASK_TYPES5[MASK_TYPES5["SPRITE"] = 3] = "SPRITE";
  MASK_TYPES5[MASK_TYPES5["COLOR"] = 4] = "COLOR";
})(MASK_TYPES3 || (MASK_TYPES3 = {}));
var COLOR_MASK_BITS3;
(function(COLOR_MASK_BITS5) {
  COLOR_MASK_BITS5[COLOR_MASK_BITS5["RED"] = 1] = "RED";
  COLOR_MASK_BITS5[COLOR_MASK_BITS5["GREEN"] = 2] = "GREEN";
  COLOR_MASK_BITS5[COLOR_MASK_BITS5["BLUE"] = 4] = "BLUE";
  COLOR_MASK_BITS5[COLOR_MASK_BITS5["ALPHA"] = 8] = "ALPHA";
})(COLOR_MASK_BITS3 || (COLOR_MASK_BITS3 = {}));
var MSAA_QUALITY3;
(function(MSAA_QUALITY5) {
  MSAA_QUALITY5[MSAA_QUALITY5["NONE"] = 0] = "NONE";
  MSAA_QUALITY5[MSAA_QUALITY5["LOW"] = 2] = "LOW";
  MSAA_QUALITY5[MSAA_QUALITY5["MEDIUM"] = 4] = "MEDIUM";
  MSAA_QUALITY5[MSAA_QUALITY5["HIGH"] = 8] = "HIGH";
})(MSAA_QUALITY3 || (MSAA_QUALITY3 = {}));
var BUFFER_TYPE3;
(function(BUFFER_TYPE5) {
  BUFFER_TYPE5[BUFFER_TYPE5["ELEMENT_ARRAY_BUFFER"] = 34963] = "ELEMENT_ARRAY_BUFFER";
  BUFFER_TYPE5[BUFFER_TYPE5["ARRAY_BUFFER"] = 34962] = "ARRAY_BUFFER";
  BUFFER_TYPE5[BUFFER_TYPE5["UNIFORM_BUFFER"] = 35345] = "UNIFORM_BUFFER";
})(BUFFER_TYPE3 || (BUFFER_TYPE3 = {}));
var _tempMatrix = new Matrix();
DisplayObject.prototype._cacheAsBitmap = false;
DisplayObject.prototype._cacheData = null;
DisplayObject.prototype._cacheAsBitmapResolution = null;
DisplayObject.prototype._cacheAsBitmapMultisample = MSAA_QUALITY3.NONE;
var CacheData = (
  /** @class */
  /* @__PURE__ */ function() {
    function CacheData2() {
      this.textureCacheId = null;
      this.originalRender = null;
      this.originalRenderCanvas = null;
      this.originalCalculateBounds = null;
      this.originalGetLocalBounds = null;
      this.originalUpdateTransform = null;
      this.originalDestroy = null;
      this.originalMask = null;
      this.originalFilterArea = null;
      this.originalContainsPoint = null;
      this.sprite = null;
    }
    return CacheData2;
  }()
);
Object.defineProperties(DisplayObject.prototype, {
  /**
   * The resolution to use for cacheAsBitmap. By default this will use the renderer's resolution
   * but can be overriden for performance. Lower values will reduce memory usage at the expense
   * of render quality. A falsey value of `null` or `0` will default to the renderer's resolution.
   * If `cacheAsBitmap` is set to `true`, this will re-render with the new resolution.
   * @member {number} cacheAsBitmapResolution
   * @memberof PIXI.DisplayObject#
   * @default null
   */
  cacheAsBitmapResolution: {
    get: function() {
      return this._cacheAsBitmapResolution;
    },
    set: function(resolution) {
      if (resolution === this._cacheAsBitmapResolution) {
        return;
      }
      this._cacheAsBitmapResolution = resolution;
      if (this.cacheAsBitmap) {
        this.cacheAsBitmap = false;
        this.cacheAsBitmap = true;
      }
    }
  },
  /**
   * The number of samples to use for cacheAsBitmap. If set to `null`, the renderer's
   * sample count is used.
   * If `cacheAsBitmap` is set to `true`, this will re-render with the new number of samples.
   * @member {number} cacheAsBitmapMultisample
   * @memberof PIXI.DisplayObject#
   * @default PIXI.MSAA_QUALITY.NONE
   */
  cacheAsBitmapMultisample: {
    get: function() {
      return this._cacheAsBitmapMultisample;
    },
    set: function(multisample) {
      if (multisample === this._cacheAsBitmapMultisample) {
        return;
      }
      this._cacheAsBitmapMultisample = multisample;
      if (this.cacheAsBitmap) {
        this.cacheAsBitmap = false;
        this.cacheAsBitmap = true;
      }
    }
  },
  /**
   * Set this to true if you want this display object to be cached as a bitmap.
   * This basically takes a snap shot of the display object as it is at that moment. It can
   * provide a performance benefit for complex static displayObjects.
   * To remove simply set this property to `false`
   *
   * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
   * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
   * @member {boolean}
   * @memberof PIXI.DisplayObject#
   */
  cacheAsBitmap: {
    get: function() {
      return this._cacheAsBitmap;
    },
    set: function(value) {
      if (this._cacheAsBitmap === value) {
        return;
      }
      this._cacheAsBitmap = value;
      var data;
      if (value) {
        if (!this._cacheData) {
          this._cacheData = new CacheData();
        }
        data = this._cacheData;
        data.originalRender = this.render;
        data.originalRenderCanvas = this.renderCanvas;
        data.originalUpdateTransform = this.updateTransform;
        data.originalCalculateBounds = this.calculateBounds;
        data.originalGetLocalBounds = this.getLocalBounds;
        data.originalDestroy = this.destroy;
        data.originalContainsPoint = this.containsPoint;
        data.originalMask = this._mask;
        data.originalFilterArea = this.filterArea;
        this.render = this._renderCached;
        this.renderCanvas = this._renderCachedCanvas;
        this.destroy = this._cacheAsBitmapDestroy;
      } else {
        data = this._cacheData;
        if (data.sprite) {
          this._destroyCachedDisplayObject();
        }
        this.render = data.originalRender;
        this.renderCanvas = data.originalRenderCanvas;
        this.calculateBounds = data.originalCalculateBounds;
        this.getLocalBounds = data.originalGetLocalBounds;
        this.destroy = data.originalDestroy;
        this.updateTransform = data.originalUpdateTransform;
        this.containsPoint = data.originalContainsPoint;
        this._mask = data.originalMask;
        this.filterArea = data.originalFilterArea;
      }
    }
  }
});
DisplayObject.prototype._renderCached = function _renderCached(renderer) {
  if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
    return;
  }
  this._initCachedDisplayObject(renderer);
  this._cacheData.sprite.transform._worldID = this.transform._worldID;
  this._cacheData.sprite.worldAlpha = this.worldAlpha;
  this._cacheData.sprite._render(renderer);
};
DisplayObject.prototype._initCachedDisplayObject = function _initCachedDisplayObject(renderer) {
  var _a3;
  if (this._cacheData && this._cacheData.sprite) {
    return;
  }
  var cacheAlpha = this.alpha;
  this.alpha = 1;
  renderer.batch.flush();
  var bounds = this.getLocalBounds(null, true).clone();
  if (this.filters && this.filters.length) {
    var padding = this.filters[0].padding;
    bounds.pad(padding);
  }
  bounds.ceil(settings.RESOLUTION);
  var cachedRenderTexture = renderer.renderTexture.current;
  var cachedSourceFrame = renderer.renderTexture.sourceFrame.clone();
  var cachedDestinationFrame = renderer.renderTexture.destinationFrame.clone();
  var cachedProjectionTransform = renderer.projection.transform;
  var renderTexture = RenderTexture.create({
    width: bounds.width,
    height: bounds.height,
    resolution: this.cacheAsBitmapResolution || renderer.resolution,
    multisample: (_a3 = this.cacheAsBitmapMultisample) !== null && _a3 !== void 0 ? _a3 : renderer.multisample
  });
  var textureCacheId = "cacheAsBitmap_" + uid();
  this._cacheData.textureCacheId = textureCacheId;
  BaseTexture.addToCache(renderTexture.baseTexture, textureCacheId);
  Texture.addToCache(renderTexture, textureCacheId);
  var m = this.transform.localTransform.copyTo(_tempMatrix).invert().translate(-bounds.x, -bounds.y);
  this.render = this._cacheData.originalRender;
  renderer.render(this, { renderTexture, clear: true, transform: m, skipUpdateTransform: false });
  renderer.framebuffer.blit();
  renderer.projection.transform = cachedProjectionTransform;
  renderer.renderTexture.bind(cachedRenderTexture, cachedSourceFrame, cachedDestinationFrame);
  this.render = this._renderCached;
  this.updateTransform = this.displayObjectUpdateTransform;
  this.calculateBounds = this._calculateCachedBounds;
  this.getLocalBounds = this._getCachedLocalBounds;
  this._mask = null;
  this.filterArea = null;
  this.alpha = cacheAlpha;
  var cachedSprite = new Sprite(renderTexture);
  cachedSprite.transform.worldTransform = this.transform.worldTransform;
  cachedSprite.anchor.x = -(bounds.x / bounds.width);
  cachedSprite.anchor.y = -(bounds.y / bounds.height);
  cachedSprite.alpha = cacheAlpha;
  cachedSprite._bounds = this._bounds;
  this._cacheData.sprite = cachedSprite;
  this.transform._parentID = -1;
  if (!this.parent) {
    this.enableTempParent();
    this.updateTransform();
    this.disableTempParent(null);
  } else {
    this.updateTransform();
  }
  this.containsPoint = cachedSprite.containsPoint.bind(cachedSprite);
};
DisplayObject.prototype._renderCachedCanvas = function _renderCachedCanvas(renderer) {
  if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
    return;
  }
  this._initCachedDisplayObjectCanvas(renderer);
  this._cacheData.sprite.worldAlpha = this.worldAlpha;
  this._cacheData.sprite._renderCanvas(renderer);
};
DisplayObject.prototype._initCachedDisplayObjectCanvas = function _initCachedDisplayObjectCanvas(renderer) {
  if (this._cacheData && this._cacheData.sprite) {
    return;
  }
  var bounds = this.getLocalBounds(null, true);
  var cacheAlpha = this.alpha;
  this.alpha = 1;
  var cachedRenderTarget = renderer.context;
  var cachedProjectionTransform = renderer._projTransform;
  bounds.ceil(settings.RESOLUTION);
  var renderTexture = RenderTexture.create({ width: bounds.width, height: bounds.height });
  var textureCacheId = "cacheAsBitmap_" + uid();
  this._cacheData.textureCacheId = textureCacheId;
  BaseTexture.addToCache(renderTexture.baseTexture, textureCacheId);
  Texture.addToCache(renderTexture, textureCacheId);
  var m = _tempMatrix;
  this.transform.localTransform.copyTo(m);
  m.invert();
  m.tx -= bounds.x;
  m.ty -= bounds.y;
  this.renderCanvas = this._cacheData.originalRenderCanvas;
  renderer.render(this, { renderTexture, clear: true, transform: m, skipUpdateTransform: false });
  renderer.context = cachedRenderTarget;
  renderer._projTransform = cachedProjectionTransform;
  this.renderCanvas = this._renderCachedCanvas;
  this.updateTransform = this.displayObjectUpdateTransform;
  this.calculateBounds = this._calculateCachedBounds;
  this.getLocalBounds = this._getCachedLocalBounds;
  this._mask = null;
  this.filterArea = null;
  this.alpha = cacheAlpha;
  var cachedSprite = new Sprite(renderTexture);
  cachedSprite.transform.worldTransform = this.transform.worldTransform;
  cachedSprite.anchor.x = -(bounds.x / bounds.width);
  cachedSprite.anchor.y = -(bounds.y / bounds.height);
  cachedSprite.alpha = cacheAlpha;
  cachedSprite._bounds = this._bounds;
  this._cacheData.sprite = cachedSprite;
  this.transform._parentID = -1;
  if (!this.parent) {
    this.parent = renderer._tempDisplayObjectParent;
    this.updateTransform();
    this.parent = null;
  } else {
    this.updateTransform();
  }
  this.containsPoint = cachedSprite.containsPoint.bind(cachedSprite);
};
DisplayObject.prototype._calculateCachedBounds = function _calculateCachedBounds() {
  this._bounds.clear();
  this._cacheData.sprite.transform._worldID = this.transform._worldID;
  this._cacheData.sprite._calculateBounds();
  this._bounds.updateID = this._boundsID;
};
DisplayObject.prototype._getCachedLocalBounds = function _getCachedLocalBounds() {
  return this._cacheData.sprite.getLocalBounds(null);
};
DisplayObject.prototype._destroyCachedDisplayObject = function _destroyCachedDisplayObject() {
  this._cacheData.sprite._texture.destroy(true);
  this._cacheData.sprite = null;
  BaseTexture.removeFromCache(this._cacheData.textureCacheId);
  Texture.removeFromCache(this._cacheData.textureCacheId);
  this._cacheData.textureCacheId = null;
};
DisplayObject.prototype._cacheAsBitmapDestroy = function _cacheAsBitmapDestroy(options) {
  this.cacheAsBitmap = false;
  this.destroy(options);
};

// node_modules/.pnpm/@pixi+mixin-get-child-by-name@6.5.2_@pixi+display@6.5.2/node_modules/@pixi/mixin-get-child-by-name/dist/esm/mixin-get-child-by-name.mjs
DisplayObject.prototype.name = null;
Container.prototype.getChildByName = function getChildByName(name, deep) {
  for (var i = 0, j = this.children.length; i < j; i++) {
    if (this.children[i].name === name) {
      return this.children[i];
    }
  }
  if (deep) {
    for (var i = 0, j = this.children.length; i < j; i++) {
      var child = this.children[i];
      if (!child.getChildByName) {
        continue;
      }
      var target = child.getChildByName(name, true);
      if (target) {
        return target;
      }
    }
  }
  return null;
};

// node_modules/.pnpm/@pixi+mixin-get-global-position@6.5.2_@pixi+display@6.5.2_@pixi+math@6.5.2/node_modules/@pixi/mixin-get-global-position/dist/esm/mixin-get-global-position.mjs
DisplayObject.prototype.getGlobalPosition = function getGlobalPosition(point, skipUpdate) {
  if (point === void 0) {
    point = new Point();
  }
  if (skipUpdate === void 0) {
    skipUpdate = false;
  }
  if (this.parent) {
    this.parent.toGlobal(this.position, point, skipUpdate);
  } else {
    point.x = this.position.x;
    point.y = this.position.y;
  }
  return point;
};

// node_modules/.pnpm/@pixi+app@6.5.2_@pixi+core@6.5.2_@pixi+display@6.5.2/node_modules/@pixi/app/dist/esm/app.mjs
var ResizePlugin = (
  /** @class */
  function() {
    function ResizePlugin2() {
    }
    ResizePlugin2.init = function(options) {
      var _this = this;
      Object.defineProperty(
        this,
        "resizeTo",
        /**
         * The HTML element or window to automatically resize the
         * renderer's view element to match width and height.
         * @member {Window|HTMLElement}
         * @name resizeTo
         * @memberof PIXI.Application#
         */
        {
          set: function(dom) {
            globalThis.removeEventListener("resize", this.queueResize);
            this._resizeTo = dom;
            if (dom) {
              globalThis.addEventListener("resize", this.queueResize);
              this.resize();
            }
          },
          get: function() {
            return this._resizeTo;
          }
        }
      );
      this.queueResize = function() {
        if (!_this._resizeTo) {
          return;
        }
        _this.cancelResize();
        _this._resizeId = requestAnimationFrame(function() {
          return _this.resize();
        });
      };
      this.cancelResize = function() {
        if (_this._resizeId) {
          cancelAnimationFrame(_this._resizeId);
          _this._resizeId = null;
        }
      };
      this.resize = function() {
        if (!_this._resizeTo) {
          return;
        }
        _this.cancelResize();
        var width;
        var height;
        if (_this._resizeTo === globalThis.window) {
          width = globalThis.innerWidth;
          height = globalThis.innerHeight;
        } else {
          var _a3 = _this._resizeTo, clientWidth = _a3.clientWidth, clientHeight = _a3.clientHeight;
          width = clientWidth;
          height = clientHeight;
        }
        _this.renderer.resize(width, height);
      };
      this._resizeId = null;
      this._resizeTo = null;
      this.resizeTo = options.resizeTo || null;
    };
    ResizePlugin2.destroy = function() {
      globalThis.removeEventListener("resize", this.queueResize);
      this.cancelResize();
      this.cancelResize = null;
      this.queueResize = null;
      this.resizeTo = null;
      this.resize = null;
    };
    ResizePlugin2.extension = ExtensionType.Application;
    return ResizePlugin2;
  }()
);
var ENV$1;
(function(ENV5) {
  ENV5[ENV5["WEBGL_LEGACY"] = 0] = "WEBGL_LEGACY";
  ENV5[ENV5["WEBGL"] = 1] = "WEBGL";
  ENV5[ENV5["WEBGL2"] = 2] = "WEBGL2";
})(ENV$1 || (ENV$1 = {}));
var RENDERER_TYPE$1;
(function(RENDERER_TYPE5) {
  RENDERER_TYPE5[RENDERER_TYPE5["UNKNOWN"] = 0] = "UNKNOWN";
  RENDERER_TYPE5[RENDERER_TYPE5["WEBGL"] = 1] = "WEBGL";
  RENDERER_TYPE5[RENDERER_TYPE5["CANVAS"] = 2] = "CANVAS";
})(RENDERER_TYPE$1 || (RENDERER_TYPE$1 = {}));
var BUFFER_BITS$1;
(function(BUFFER_BITS5) {
  BUFFER_BITS5[BUFFER_BITS5["COLOR"] = 16384] = "COLOR";
  BUFFER_BITS5[BUFFER_BITS5["DEPTH"] = 256] = "DEPTH";
  BUFFER_BITS5[BUFFER_BITS5["STENCIL"] = 1024] = "STENCIL";
})(BUFFER_BITS$1 || (BUFFER_BITS$1 = {}));
var BLEND_MODES$1;
(function(BLEND_MODES5) {
  BLEND_MODES5[BLEND_MODES5["NORMAL"] = 0] = "NORMAL";
  BLEND_MODES5[BLEND_MODES5["ADD"] = 1] = "ADD";
  BLEND_MODES5[BLEND_MODES5["MULTIPLY"] = 2] = "MULTIPLY";
  BLEND_MODES5[BLEND_MODES5["SCREEN"] = 3] = "SCREEN";
  BLEND_MODES5[BLEND_MODES5["OVERLAY"] = 4] = "OVERLAY";
  BLEND_MODES5[BLEND_MODES5["DARKEN"] = 5] = "DARKEN";
  BLEND_MODES5[BLEND_MODES5["LIGHTEN"] = 6] = "LIGHTEN";
  BLEND_MODES5[BLEND_MODES5["COLOR_DODGE"] = 7] = "COLOR_DODGE";
  BLEND_MODES5[BLEND_MODES5["COLOR_BURN"] = 8] = "COLOR_BURN";
  BLEND_MODES5[BLEND_MODES5["HARD_LIGHT"] = 9] = "HARD_LIGHT";
  BLEND_MODES5[BLEND_MODES5["SOFT_LIGHT"] = 10] = "SOFT_LIGHT";
  BLEND_MODES5[BLEND_MODES5["DIFFERENCE"] = 11] = "DIFFERENCE";
  BLEND_MODES5[BLEND_MODES5["EXCLUSION"] = 12] = "EXCLUSION";
  BLEND_MODES5[BLEND_MODES5["HUE"] = 13] = "HUE";
  BLEND_MODES5[BLEND_MODES5["SATURATION"] = 14] = "SATURATION";
  BLEND_MODES5[BLEND_MODES5["COLOR"] = 15] = "COLOR";
  BLEND_MODES5[BLEND_MODES5["LUMINOSITY"] = 16] = "LUMINOSITY";
  BLEND_MODES5[BLEND_MODES5["NORMAL_NPM"] = 17] = "NORMAL_NPM";
  BLEND_MODES5[BLEND_MODES5["ADD_NPM"] = 18] = "ADD_NPM";
  BLEND_MODES5[BLEND_MODES5["SCREEN_NPM"] = 19] = "SCREEN_NPM";
  BLEND_MODES5[BLEND_MODES5["NONE"] = 20] = "NONE";
  BLEND_MODES5[BLEND_MODES5["SRC_OVER"] = 0] = "SRC_OVER";
  BLEND_MODES5[BLEND_MODES5["SRC_IN"] = 21] = "SRC_IN";
  BLEND_MODES5[BLEND_MODES5["SRC_OUT"] = 22] = "SRC_OUT";
  BLEND_MODES5[BLEND_MODES5["SRC_ATOP"] = 23] = "SRC_ATOP";
  BLEND_MODES5[BLEND_MODES5["DST_OVER"] = 24] = "DST_OVER";
  BLEND_MODES5[BLEND_MODES5["DST_IN"] = 25] = "DST_IN";
  BLEND_MODES5[BLEND_MODES5["DST_OUT"] = 26] = "DST_OUT";
  BLEND_MODES5[BLEND_MODES5["DST_ATOP"] = 27] = "DST_ATOP";
  BLEND_MODES5[BLEND_MODES5["ERASE"] = 26] = "ERASE";
  BLEND_MODES5[BLEND_MODES5["SUBTRACT"] = 28] = "SUBTRACT";
  BLEND_MODES5[BLEND_MODES5["XOR"] = 29] = "XOR";
})(BLEND_MODES$1 || (BLEND_MODES$1 = {}));
var DRAW_MODES$1;
(function(DRAW_MODES5) {
  DRAW_MODES5[DRAW_MODES5["POINTS"] = 0] = "POINTS";
  DRAW_MODES5[DRAW_MODES5["LINES"] = 1] = "LINES";
  DRAW_MODES5[DRAW_MODES5["LINE_LOOP"] = 2] = "LINE_LOOP";
  DRAW_MODES5[DRAW_MODES5["LINE_STRIP"] = 3] = "LINE_STRIP";
  DRAW_MODES5[DRAW_MODES5["TRIANGLES"] = 4] = "TRIANGLES";
  DRAW_MODES5[DRAW_MODES5["TRIANGLE_STRIP"] = 5] = "TRIANGLE_STRIP";
  DRAW_MODES5[DRAW_MODES5["TRIANGLE_FAN"] = 6] = "TRIANGLE_FAN";
})(DRAW_MODES$1 || (DRAW_MODES$1 = {}));
var FORMATS$1;
(function(FORMATS5) {
  FORMATS5[FORMATS5["RGBA"] = 6408] = "RGBA";
  FORMATS5[FORMATS5["RGB"] = 6407] = "RGB";
  FORMATS5[FORMATS5["RG"] = 33319] = "RG";
  FORMATS5[FORMATS5["RED"] = 6403] = "RED";
  FORMATS5[FORMATS5["RGBA_INTEGER"] = 36249] = "RGBA_INTEGER";
  FORMATS5[FORMATS5["RGB_INTEGER"] = 36248] = "RGB_INTEGER";
  FORMATS5[FORMATS5["RG_INTEGER"] = 33320] = "RG_INTEGER";
  FORMATS5[FORMATS5["RED_INTEGER"] = 36244] = "RED_INTEGER";
  FORMATS5[FORMATS5["ALPHA"] = 6406] = "ALPHA";
  FORMATS5[FORMATS5["LUMINANCE"] = 6409] = "LUMINANCE";
  FORMATS5[FORMATS5["LUMINANCE_ALPHA"] = 6410] = "LUMINANCE_ALPHA";
  FORMATS5[FORMATS5["DEPTH_COMPONENT"] = 6402] = "DEPTH_COMPONENT";
  FORMATS5[FORMATS5["DEPTH_STENCIL"] = 34041] = "DEPTH_STENCIL";
})(FORMATS$1 || (FORMATS$1 = {}));
var TARGETS$1;
(function(TARGETS5) {
  TARGETS5[TARGETS5["TEXTURE_2D"] = 3553] = "TEXTURE_2D";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP"] = 34067] = "TEXTURE_CUBE_MAP";
  TARGETS5[TARGETS5["TEXTURE_2D_ARRAY"] = 35866] = "TEXTURE_2D_ARRAY";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP_POSITIVE_X"] = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP_NEGATIVE_X"] = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP_POSITIVE_Y"] = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP_NEGATIVE_Y"] = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP_POSITIVE_Z"] = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP_NEGATIVE_Z"] = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
})(TARGETS$1 || (TARGETS$1 = {}));
var TYPES$1;
(function(TYPES5) {
  TYPES5[TYPES5["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
  TYPES5[TYPES5["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
  TYPES5[TYPES5["UNSIGNED_SHORT_5_6_5"] = 33635] = "UNSIGNED_SHORT_5_6_5";
  TYPES5[TYPES5["UNSIGNED_SHORT_4_4_4_4"] = 32819] = "UNSIGNED_SHORT_4_4_4_4";
  TYPES5[TYPES5["UNSIGNED_SHORT_5_5_5_1"] = 32820] = "UNSIGNED_SHORT_5_5_5_1";
  TYPES5[TYPES5["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
  TYPES5[TYPES5["UNSIGNED_INT_10F_11F_11F_REV"] = 35899] = "UNSIGNED_INT_10F_11F_11F_REV";
  TYPES5[TYPES5["UNSIGNED_INT_2_10_10_10_REV"] = 33640] = "UNSIGNED_INT_2_10_10_10_REV";
  TYPES5[TYPES5["UNSIGNED_INT_24_8"] = 34042] = "UNSIGNED_INT_24_8";
  TYPES5[TYPES5["UNSIGNED_INT_5_9_9_9_REV"] = 35902] = "UNSIGNED_INT_5_9_9_9_REV";
  TYPES5[TYPES5["BYTE"] = 5120] = "BYTE";
  TYPES5[TYPES5["SHORT"] = 5122] = "SHORT";
  TYPES5[TYPES5["INT"] = 5124] = "INT";
  TYPES5[TYPES5["FLOAT"] = 5126] = "FLOAT";
  TYPES5[TYPES5["FLOAT_32_UNSIGNED_INT_24_8_REV"] = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV";
  TYPES5[TYPES5["HALF_FLOAT"] = 36193] = "HALF_FLOAT";
})(TYPES$1 || (TYPES$1 = {}));
var SAMPLER_TYPES$1;
(function(SAMPLER_TYPES5) {
  SAMPLER_TYPES5[SAMPLER_TYPES5["FLOAT"] = 0] = "FLOAT";
  SAMPLER_TYPES5[SAMPLER_TYPES5["INT"] = 1] = "INT";
  SAMPLER_TYPES5[SAMPLER_TYPES5["UINT"] = 2] = "UINT";
})(SAMPLER_TYPES$1 || (SAMPLER_TYPES$1 = {}));
var SCALE_MODES$1;
(function(SCALE_MODES5) {
  SCALE_MODES5[SCALE_MODES5["NEAREST"] = 0] = "NEAREST";
  SCALE_MODES5[SCALE_MODES5["LINEAR"] = 1] = "LINEAR";
})(SCALE_MODES$1 || (SCALE_MODES$1 = {}));
var WRAP_MODES$1;
(function(WRAP_MODES5) {
  WRAP_MODES5[WRAP_MODES5["CLAMP"] = 33071] = "CLAMP";
  WRAP_MODES5[WRAP_MODES5["REPEAT"] = 10497] = "REPEAT";
  WRAP_MODES5[WRAP_MODES5["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
})(WRAP_MODES$1 || (WRAP_MODES$1 = {}));
var MIPMAP_MODES$1;
(function(MIPMAP_MODES5) {
  MIPMAP_MODES5[MIPMAP_MODES5["OFF"] = 0] = "OFF";
  MIPMAP_MODES5[MIPMAP_MODES5["POW2"] = 1] = "POW2";
  MIPMAP_MODES5[MIPMAP_MODES5["ON"] = 2] = "ON";
  MIPMAP_MODES5[MIPMAP_MODES5["ON_MANUAL"] = 3] = "ON_MANUAL";
})(MIPMAP_MODES$1 || (MIPMAP_MODES$1 = {}));
var ALPHA_MODES$1;
(function(ALPHA_MODES5) {
  ALPHA_MODES5[ALPHA_MODES5["NPM"] = 0] = "NPM";
  ALPHA_MODES5[ALPHA_MODES5["UNPACK"] = 1] = "UNPACK";
  ALPHA_MODES5[ALPHA_MODES5["PMA"] = 2] = "PMA";
  ALPHA_MODES5[ALPHA_MODES5["NO_PREMULTIPLIED_ALPHA"] = 0] = "NO_PREMULTIPLIED_ALPHA";
  ALPHA_MODES5[ALPHA_MODES5["PREMULTIPLY_ON_UPLOAD"] = 1] = "PREMULTIPLY_ON_UPLOAD";
  ALPHA_MODES5[ALPHA_MODES5["PREMULTIPLY_ALPHA"] = 2] = "PREMULTIPLY_ALPHA";
  ALPHA_MODES5[ALPHA_MODES5["PREMULTIPLIED_ALPHA"] = 2] = "PREMULTIPLIED_ALPHA";
})(ALPHA_MODES$1 || (ALPHA_MODES$1 = {}));
var CLEAR_MODES$1;
(function(CLEAR_MODES5) {
  CLEAR_MODES5[CLEAR_MODES5["NO"] = 0] = "NO";
  CLEAR_MODES5[CLEAR_MODES5["YES"] = 1] = "YES";
  CLEAR_MODES5[CLEAR_MODES5["AUTO"] = 2] = "AUTO";
  CLEAR_MODES5[CLEAR_MODES5["BLEND"] = 0] = "BLEND";
  CLEAR_MODES5[CLEAR_MODES5["CLEAR"] = 1] = "CLEAR";
  CLEAR_MODES5[CLEAR_MODES5["BLIT"] = 2] = "BLIT";
})(CLEAR_MODES$1 || (CLEAR_MODES$1 = {}));
var GC_MODES$1;
(function(GC_MODES5) {
  GC_MODES5[GC_MODES5["AUTO"] = 0] = "AUTO";
  GC_MODES5[GC_MODES5["MANUAL"] = 1] = "MANUAL";
})(GC_MODES$1 || (GC_MODES$1 = {}));
var PRECISION$1;
(function(PRECISION5) {
  PRECISION5["LOW"] = "lowp";
  PRECISION5["MEDIUM"] = "mediump";
  PRECISION5["HIGH"] = "highp";
})(PRECISION$1 || (PRECISION$1 = {}));
var MASK_TYPES$1;
(function(MASK_TYPES5) {
  MASK_TYPES5[MASK_TYPES5["NONE"] = 0] = "NONE";
  MASK_TYPES5[MASK_TYPES5["SCISSOR"] = 1] = "SCISSOR";
  MASK_TYPES5[MASK_TYPES5["STENCIL"] = 2] = "STENCIL";
  MASK_TYPES5[MASK_TYPES5["SPRITE"] = 3] = "SPRITE";
  MASK_TYPES5[MASK_TYPES5["COLOR"] = 4] = "COLOR";
})(MASK_TYPES$1 || (MASK_TYPES$1 = {}));
var COLOR_MASK_BITS$1;
(function(COLOR_MASK_BITS5) {
  COLOR_MASK_BITS5[COLOR_MASK_BITS5["RED"] = 1] = "RED";
  COLOR_MASK_BITS5[COLOR_MASK_BITS5["GREEN"] = 2] = "GREEN";
  COLOR_MASK_BITS5[COLOR_MASK_BITS5["BLUE"] = 4] = "BLUE";
  COLOR_MASK_BITS5[COLOR_MASK_BITS5["ALPHA"] = 8] = "ALPHA";
})(COLOR_MASK_BITS$1 || (COLOR_MASK_BITS$1 = {}));
var MSAA_QUALITY$1;
(function(MSAA_QUALITY5) {
  MSAA_QUALITY5[MSAA_QUALITY5["NONE"] = 0] = "NONE";
  MSAA_QUALITY5[MSAA_QUALITY5["LOW"] = 2] = "LOW";
  MSAA_QUALITY5[MSAA_QUALITY5["MEDIUM"] = 4] = "MEDIUM";
  MSAA_QUALITY5[MSAA_QUALITY5["HIGH"] = 8] = "HIGH";
})(MSAA_QUALITY$1 || (MSAA_QUALITY$1 = {}));
var BUFFER_TYPE$1;
(function(BUFFER_TYPE5) {
  BUFFER_TYPE5[BUFFER_TYPE5["ELEMENT_ARRAY_BUFFER"] = 34963] = "ELEMENT_ARRAY_BUFFER";
  BUFFER_TYPE5[BUFFER_TYPE5["ARRAY_BUFFER"] = 34962] = "ARRAY_BUFFER";
  BUFFER_TYPE5[BUFFER_TYPE5["UNIFORM_BUFFER"] = 35345] = "UNIFORM_BUFFER";
})(BUFFER_TYPE$1 || (BUFFER_TYPE$1 = {}));
var BrowserAdapter2 = {
  /**
   * Creates a canvas element of the given size.
   * This canvas is created using the browser's native canvas element.
   * @param width - width of the canvas
   * @param height - height of the canvas
   */
  createCanvas: function(width, height) {
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas;
  },
  getWebGLRenderingContext: function() {
    return WebGLRenderingContext;
  },
  getNavigator: function() {
    return navigator;
  },
  getBaseUrl: function() {
    var _a3;
    return (_a3 = document.baseURI) !== null && _a3 !== void 0 ? _a3 : window.location.href;
  },
  fetch: function(url2, options) {
    return fetch(url2, options);
  }
};
var appleIphone = /iPhone/i;
var appleIpod = /iPod/i;
var appleTablet = /iPad/i;
var appleUniversal = /\biOS-universal(?:.+)Mac\b/i;
var androidPhone = /\bAndroid(?:.+)Mobile\b/i;
var androidTablet = /Android/i;
var amazonPhone = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i;
var amazonTablet = /Silk/i;
var windowsPhone = /Windows Phone/i;
var windowsTablet = /\bWindows(?:.+)ARM\b/i;
var otherBlackBerry = /BlackBerry/i;
var otherBlackBerry10 = /BB10/i;
var otherOpera = /Opera Mini/i;
var otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i;
var otherFirefox = /Mobile(?:.+)Firefox\b/i;
var isAppleTabletOnIos13 = function(navigator2) {
  return typeof navigator2 !== "undefined" && navigator2.platform === "MacIntel" && typeof navigator2.maxTouchPoints === "number" && navigator2.maxTouchPoints > 1 && typeof MSStream === "undefined";
};
function createMatch(userAgent) {
  return function(regex) {
    return regex.test(userAgent);
  };
}
function isMobile$1(param) {
  var nav = {
    userAgent: "",
    platform: "",
    maxTouchPoints: 0
  };
  if (!param && typeof navigator !== "undefined") {
    nav = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      maxTouchPoints: navigator.maxTouchPoints || 0
    };
  } else if (typeof param === "string") {
    nav.userAgent = param;
  } else if (param && param.userAgent) {
    nav = {
      userAgent: param.userAgent,
      platform: param.platform,
      maxTouchPoints: param.maxTouchPoints || 0
    };
  }
  var userAgent = nav.userAgent;
  var tmp = userAgent.split("[FBAN");
  if (typeof tmp[1] !== "undefined") {
    userAgent = tmp[0];
  }
  tmp = userAgent.split("Twitter");
  if (typeof tmp[1] !== "undefined") {
    userAgent = tmp[0];
  }
  var match = createMatch(userAgent);
  var result = {
    apple: {
      phone: match(appleIphone) && !match(windowsPhone),
      ipod: match(appleIpod),
      tablet: !match(appleIphone) && (match(appleTablet) || isAppleTabletOnIos13(nav)) && !match(windowsPhone),
      universal: match(appleUniversal),
      device: (match(appleIphone) || match(appleIpod) || match(appleTablet) || match(appleUniversal) || isAppleTabletOnIos13(nav)) && !match(windowsPhone)
    },
    amazon: {
      phone: match(amazonPhone),
      tablet: !match(amazonPhone) && match(amazonTablet),
      device: match(amazonPhone) || match(amazonTablet)
    },
    android: {
      phone: !match(windowsPhone) && match(amazonPhone) || !match(windowsPhone) && match(androidPhone),
      tablet: !match(windowsPhone) && !match(amazonPhone) && !match(androidPhone) && (match(amazonTablet) || match(androidTablet)),
      device: !match(windowsPhone) && (match(amazonPhone) || match(amazonTablet) || match(androidPhone) || match(androidTablet)) || match(/\bokhttp\b/i)
    },
    windows: {
      phone: match(windowsPhone),
      tablet: match(windowsTablet),
      device: match(windowsPhone) || match(windowsTablet)
    },
    other: {
      blackberry: match(otherBlackBerry),
      blackberry10: match(otherBlackBerry10),
      opera: match(otherOpera),
      firefox: match(otherFirefox),
      chrome: match(otherChrome),
      device: match(otherBlackBerry) || match(otherBlackBerry10) || match(otherOpera) || match(otherFirefox) || match(otherChrome)
    },
    any: false,
    phone: false,
    tablet: false
  };
  result.any = result.apple.device || result.android.device || result.windows.device || result.other.device;
  result.phone = result.apple.phone || result.android.phone || result.windows.phone;
  result.tablet = result.apple.tablet || result.android.tablet || result.windows.tablet;
  return result;
}
var isMobile2 = isMobile$1(globalThis.navigator);
function canUploadSameBuffer() {
  return !isMobile2.apple.device;
}
function maxRecommendedTextures(max) {
  var allowMax = true;
  if (isMobile2.tablet || isMobile2.phone) {
    if (isMobile2.apple.device) {
      var match = navigator.userAgent.match(/OS (\d+)_(\d+)?/);
      if (match) {
        var majorVersion = parseInt(match[1], 10);
        if (majorVersion < 11) {
          allowMax = false;
        }
      }
    }
    if (isMobile2.android.device) {
      var match = navigator.userAgent.match(/Android\s([0-9.]*)/);
      if (match) {
        var majorVersion = parseInt(match[1], 10);
        if (majorVersion < 7) {
          allowMax = false;
        }
      }
    }
  }
  return allowMax ? max : 4;
}
var settings2 = {
  /**
   * This adapter is used to call methods that are platform dependent.
   * For example `document.createElement` only runs on the web but fails in node environments.
   * This allows us to support more platforms by abstracting away specific implementations per platform.
   *
   * By default the adapter is set to work in the browser. However you can create your own
   * by implementing the `IAdapter` interface. See `IAdapter` for more information.
   * @name ADAPTER
   * @memberof PIXI.settings
   * @type {PIXI.IAdapter}
   * @default PIXI.BrowserAdapter
   */
  ADAPTER: BrowserAdapter2,
  /**
   * If set to true WebGL will attempt make textures mimpaped by default.
   * Mipmapping will only succeed if the base texture uploaded has power of two dimensions.
   * @static
   * @name MIPMAP_TEXTURES
   * @memberof PIXI.settings
   * @type {PIXI.MIPMAP_MODES}
   * @default PIXI.MIPMAP_MODES.POW2
   */
  MIPMAP_TEXTURES: MIPMAP_MODES$1.POW2,
  /**
   * Default anisotropic filtering level of textures.
   * Usually from 0 to 16
   * @static
   * @name ANISOTROPIC_LEVEL
   * @memberof PIXI.settings
   * @type {number}
   * @default 0
   */
  ANISOTROPIC_LEVEL: 0,
  /**
   * Default resolution / device pixel ratio of the renderer.
   * @static
   * @name RESOLUTION
   * @memberof PIXI.settings
   * @type {number}
   * @default 1
   */
  RESOLUTION: 1,
  /**
   * Default filter resolution.
   * @static
   * @name FILTER_RESOLUTION
   * @memberof PIXI.settings
   * @type {number}
   * @default 1
   */
  FILTER_RESOLUTION: 1,
  /**
   * Default filter samples.
   * @static
   * @name FILTER_MULTISAMPLE
   * @memberof PIXI.settings
   * @type {PIXI.MSAA_QUALITY}
   * @default PIXI.MSAA_QUALITY.NONE
   */
  FILTER_MULTISAMPLE: MSAA_QUALITY$1.NONE,
  /**
   * The maximum textures that this device supports.
   * @static
   * @name SPRITE_MAX_TEXTURES
   * @memberof PIXI.settings
   * @type {number}
   * @default 32
   */
  SPRITE_MAX_TEXTURES: maxRecommendedTextures(32),
  // TODO: maybe change to SPRITE.BATCH_SIZE: 2000
  // TODO: maybe add PARTICLE.BATCH_SIZE: 15000
  /**
   * The default sprite batch size.
   *
   * The default aims to balance desktop and mobile devices.
   * @static
   * @name SPRITE_BATCH_SIZE
   * @memberof PIXI.settings
   * @type {number}
   * @default 4096
   */
  SPRITE_BATCH_SIZE: 4096,
  /**
   * The default render options if none are supplied to {@link PIXI.Renderer}
   * or {@link PIXI.CanvasRenderer}.
   * @static
   * @name RENDER_OPTIONS
   * @memberof PIXI.settings
   * @type {object}
   * @property {HTMLCanvasElement} [view=null] -
   * @property {boolean} [antialias=false] -
   * @property {boolean} [autoDensity=false] -
   * @property {boolean} [useContextAlpha=true]  -
   * @property {number} [backgroundColor=0x000000] -
   * @property {number} [backgroundAlpha=1] -
   * @property {boolean} [clearBeforeRender=true] -
   * @property {boolean} [preserveDrawingBuffer=false] -
   * @property {number} [width=800] -
   * @property {number} [height=600] -
   * @property {boolean} [legacy=false] -
   */
  RENDER_OPTIONS: {
    view: null,
    antialias: false,
    autoDensity: false,
    backgroundColor: 0,
    backgroundAlpha: 1,
    useContextAlpha: true,
    clearBeforeRender: true,
    preserveDrawingBuffer: false,
    width: 800,
    height: 600,
    legacy: false
  },
  /**
   * Default Garbage Collection mode.
   * @static
   * @name GC_MODE
   * @memberof PIXI.settings
   * @type {PIXI.GC_MODES}
   * @default PIXI.GC_MODES.AUTO
   */
  GC_MODE: GC_MODES$1.AUTO,
  /**
   * Default Garbage Collection max idle.
   * @static
   * @name GC_MAX_IDLE
   * @memberof PIXI.settings
   * @type {number}
   * @default 3600
   */
  GC_MAX_IDLE: 60 * 60,
  /**
   * Default Garbage Collection maximum check count.
   * @static
   * @name GC_MAX_CHECK_COUNT
   * @memberof PIXI.settings
   * @type {number}
   * @default 600
   */
  GC_MAX_CHECK_COUNT: 60 * 10,
  /**
   * Default wrap modes that are supported by pixi.
   * @static
   * @name WRAP_MODE
   * @memberof PIXI.settings
   * @type {PIXI.WRAP_MODES}
   * @default PIXI.WRAP_MODES.CLAMP
   */
  WRAP_MODE: WRAP_MODES$1.CLAMP,
  /**
   * Default scale mode for textures.
   * @static
   * @name SCALE_MODE
   * @memberof PIXI.settings
   * @type {PIXI.SCALE_MODES}
   * @default PIXI.SCALE_MODES.LINEAR
   */
  SCALE_MODE: SCALE_MODES$1.LINEAR,
  /**
   * Default specify float precision in vertex shader.
   * @static
   * @name PRECISION_VERTEX
   * @memberof PIXI.settings
   * @type {PIXI.PRECISION}
   * @default PIXI.PRECISION.HIGH
   */
  PRECISION_VERTEX: PRECISION$1.HIGH,
  /**
   * Default specify float precision in fragment shader.
   * iOS is best set at highp due to https://github.com/pixijs/pixi.js/issues/3742
   * @static
   * @name PRECISION_FRAGMENT
   * @memberof PIXI.settings
   * @type {PIXI.PRECISION}
   * @default PIXI.PRECISION.MEDIUM
   */
  PRECISION_FRAGMENT: isMobile2.apple.device ? PRECISION$1.HIGH : PRECISION$1.MEDIUM,
  /**
   * Can we upload the same buffer in a single frame?
   * @static
   * @name CAN_UPLOAD_SAME_BUFFER
   * @memberof PIXI.settings
   * @type {boolean}
   */
  CAN_UPLOAD_SAME_BUFFER: canUploadSameBuffer(),
  /**
   * Enables bitmap creation before image load. This feature is experimental.
   * @static
   * @name CREATE_IMAGE_BITMAP
   * @memberof PIXI.settings
   * @type {boolean}
   * @default false
   */
  CREATE_IMAGE_BITMAP: false,
  /**
   * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
   * Advantages can include sharper image quality (like text) and faster rendering on canvas.
   * The main disadvantage is movement of objects may appear less smooth.
   * @static
   * @constant
   * @memberof PIXI.settings
   * @type {boolean}
   * @default false
   */
  ROUND_PIXELS: false
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
createCommonjsModule(function(module) {
  var has = Object.prototype.hasOwnProperty, prefix = "~";
  function Events() {
  }
  if (Object.create) {
    Events.prototype = /* @__PURE__ */ Object.create(null);
    if (!new Events().__proto__) {
      prefix = false;
    }
  }
  function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
  }
  function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== "function") {
      throw new TypeError("The listener must be a function");
    }
    var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
    if (!emitter._events[evt]) {
      emitter._events[evt] = listener, emitter._eventsCount++;
    } else if (!emitter._events[evt].fn) {
      emitter._events[evt].push(listener);
    } else {
      emitter._events[evt] = [emitter._events[evt], listener];
    }
    return emitter;
  }
  function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) {
      emitter._events = new Events();
    } else {
      delete emitter._events[evt];
    }
  }
  function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
  }
  EventEmitter.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0) {
      return names;
    }
    for (name in events = this._events) {
      if (has.call(events, name)) {
        names.push(prefix ? name.slice(1) : name);
      }
    }
    if (Object.getOwnPropertySymbols) {
      return names.concat(Object.getOwnPropertySymbols(events));
    }
    return names;
  };
  EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event, handlers = this._events[evt];
    if (!handlers) {
      return [];
    }
    if (handlers.fn) {
      return [handlers.fn];
    }
    for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
      ee[i] = handlers[i].fn;
    }
    return ee;
  };
  EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event, listeners = this._events[evt];
    if (!listeners) {
      return 0;
    }
    if (listeners.fn) {
      return 1;
    }
    return listeners.length;
  };
  EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var arguments$1 = arguments;
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) {
      return false;
    }
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
      if (listeners.once) {
        this.removeListener(event, listeners.fn, void 0, true);
      }
      switch (len) {
        case 1:
          return listeners.fn.call(listeners.context), true;
        case 2:
          return listeners.fn.call(listeners.context, a1), true;
        case 3:
          return listeners.fn.call(listeners.context, a1, a2), true;
        case 4:
          return listeners.fn.call(listeners.context, a1, a2, a3), true;
        case 5:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
        case 6:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
      }
      for (i = 1, args = new Array(len - 1); i < len; i++) {
        args[i - 1] = arguments$1[i];
      }
      listeners.fn.apply(listeners.context, args);
    } else {
      var length = listeners.length, j;
      for (i = 0; i < length; i++) {
        if (listeners[i].once) {
          this.removeListener(event, listeners[i].fn, void 0, true);
        }
        switch (len) {
          case 1:
            listeners[i].fn.call(listeners[i].context);
            break;
          case 2:
            listeners[i].fn.call(listeners[i].context, a1);
            break;
          case 3:
            listeners[i].fn.call(listeners[i].context, a1, a2);
            break;
          case 4:
            listeners[i].fn.call(listeners[i].context, a1, a2, a3);
            break;
          default:
            if (!args) {
              for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments$1[j];
              }
            }
            listeners[i].fn.apply(listeners[i].context, args);
        }
      }
    }
    return true;
  };
  EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
  };
  EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
  };
  EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) {
      return this;
    }
    if (!fn) {
      clearEvent(this, evt);
      return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
      if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
        clearEvent(this, evt);
      }
    } else {
      for (var i = 0, events = [], length = listeners.length; i < length; i++) {
        if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
          events.push(listeners[i]);
        }
      }
      if (events.length) {
        this._events[evt] = events.length === 1 ? events[0] : events;
      } else {
        clearEvent(this, evt);
      }
    }
    return this;
  };
  EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
      evt = prefix ? prefix + event : event;
      if (this._events[evt]) {
        clearEvent(this, evt);
      }
    } else {
      this._events = new Events();
      this._eventsCount = 0;
    }
    return this;
  };
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.addListener = EventEmitter.prototype.on;
  EventEmitter.prefixed = prefix;
  EventEmitter.EventEmitter = EventEmitter;
  {
    module.exports = EventEmitter;
  }
});
createCommonjsModule(function(module, exports) {
  (function(root) {
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = module && !module.nodeType && module;
    var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal;
    if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
      root = freeGlobal;
    }
    var punycode, maxInt = 2147483647, base = 36, tMin = 1, tMax = 26, skew = 38, damp = 700, initialBias = 72, initialN = 128, delimiter = "-", regexPunycode = /^xn--/, regexNonASCII = /[^\x20-\x7E]/, regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, errors = {
      "overflow": "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, baseMinusTMin = base - tMin, floor = Math.floor, stringFromCharCode = String.fromCharCode, key;
    function error(type) {
      throw RangeError(errors[type]);
    }
    function map(array, fn) {
      var length = array.length;
      var result = [];
      while (length--) {
        result[length] = fn(array[length]);
      }
      return result;
    }
    function mapDomain(string, fn) {
      var parts = string.split("@");
      var result = "";
      if (parts.length > 1) {
        result = parts[0] + "@";
        string = parts[1];
      }
      string = string.replace(regexSeparators, ".");
      var labels = string.split(".");
      var encoded = map(labels, fn).join(".");
      return result + encoded;
    }
    function ucs2decode(string) {
      var output = [], counter = 0, length = string.length, value, extra;
      while (counter < length) {
        value = string.charCodeAt(counter++);
        if (value >= 55296 && value <= 56319 && counter < length) {
          extra = string.charCodeAt(counter++);
          if ((extra & 64512) == 56320) {
            output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
          } else {
            output.push(value);
            counter--;
          }
        } else {
          output.push(value);
        }
      }
      return output;
    }
    function ucs2encode(array) {
      return map(array, function(value) {
        var output = "";
        if (value > 65535) {
          value -= 65536;
          output += stringFromCharCode(value >>> 10 & 1023 | 55296);
          value = 56320 | value & 1023;
        }
        output += stringFromCharCode(value);
        return output;
      }).join("");
    }
    function basicToDigit(codePoint) {
      if (codePoint - 48 < 10) {
        return codePoint - 22;
      }
      if (codePoint - 65 < 26) {
        return codePoint - 65;
      }
      if (codePoint - 97 < 26) {
        return codePoint - 97;
      }
      return base;
    }
    function digitToBasic(digit, flag) {
      return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
    }
    function adapt(delta, numPoints, firstTime) {
      var k = 0;
      delta = firstTime ? floor(delta / damp) : delta >> 1;
      delta += floor(delta / numPoints);
      for (; delta > baseMinusTMin * tMax >> 1; k += base) {
        delta = floor(delta / baseMinusTMin);
      }
      return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
    }
    function decode2(input) {
      var output = [], inputLength = input.length, out, i = 0, n = initialN, bias = initialBias, basic, j, index, oldi, w, k, digit, t, baseMinusT;
      basic = input.lastIndexOf(delimiter);
      if (basic < 0) {
        basic = 0;
      }
      for (j = 0; j < basic; ++j) {
        if (input.charCodeAt(j) >= 128) {
          error("not-basic");
        }
        output.push(input.charCodeAt(j));
      }
      for (index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
        for (oldi = i, w = 1, k = base; ; k += base) {
          if (index >= inputLength) {
            error("invalid-input");
          }
          digit = basicToDigit(input.charCodeAt(index++));
          if (digit >= base || digit > floor((maxInt - i) / w)) {
            error("overflow");
          }
          i += digit * w;
          t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
          if (digit < t) {
            break;
          }
          baseMinusT = base - t;
          if (w > floor(maxInt / baseMinusT)) {
            error("overflow");
          }
          w *= baseMinusT;
        }
        out = output.length + 1;
        bias = adapt(i - oldi, out, oldi == 0);
        if (floor(i / out) > maxInt - n) {
          error("overflow");
        }
        n += floor(i / out);
        i %= out;
        output.splice(i++, 0, n);
      }
      return ucs2encode(output);
    }
    function encode2(input) {
      var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], inputLength, handledCPCountPlusOne, baseMinusT, qMinusT;
      input = ucs2decode(input);
      inputLength = input.length;
      n = initialN;
      delta = 0;
      bias = initialBias;
      for (j = 0; j < inputLength; ++j) {
        currentValue = input[j];
        if (currentValue < 128) {
          output.push(stringFromCharCode(currentValue));
        }
      }
      handledCPCount = basicLength = output.length;
      if (basicLength) {
        output.push(delimiter);
      }
      while (handledCPCount < inputLength) {
        for (m = maxInt, j = 0; j < inputLength; ++j) {
          currentValue = input[j];
          if (currentValue >= n && currentValue < m) {
            m = currentValue;
          }
        }
        handledCPCountPlusOne = handledCPCount + 1;
        if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
          error("overflow");
        }
        delta += (m - n) * handledCPCountPlusOne;
        n = m;
        for (j = 0; j < inputLength; ++j) {
          currentValue = input[j];
          if (currentValue < n && ++delta > maxInt) {
            error("overflow");
          }
          if (currentValue == n) {
            for (q = delta, k = base; ; k += base) {
              t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
              if (q < t) {
                break;
              }
              qMinusT = q - t;
              baseMinusT = base - t;
              output.push(
                stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
              );
              q = floor(qMinusT / baseMinusT);
            }
            output.push(stringFromCharCode(digitToBasic(q, 0)));
            bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
            delta = 0;
            ++handledCPCount;
          }
        }
        ++delta;
        ++n;
      }
      return output.join("");
    }
    function toUnicode(input) {
      return mapDomain(input, function(string) {
        return regexPunycode.test(string) ? decode2(string.slice(4).toLowerCase()) : string;
      });
    }
    function toASCII(input) {
      return mapDomain(input, function(string) {
        return regexNonASCII.test(string) ? "xn--" + encode2(string) : string;
      });
    }
    punycode = {
      /**
       * A string representing the current Punycode.js version number.
       * @memberOf punycode
       * @type String
       */
      "version": "1.3.2",
      /**
       * An object of methods to convert from JavaScript's internal character
       * representation (UCS-2) to Unicode code points, and back.
       * @see <https://mathiasbynens.be/notes/javascript-encoding>
       * @memberOf punycode
       * @type Object
       */
      "ucs2": {
        "decode": ucs2decode,
        "encode": ucs2encode
      },
      "decode": decode2,
      "encode": encode2,
      "toASCII": toASCII,
      "toUnicode": toUnicode
    };
    if (freeExports && freeModule) {
      if (module.exports == freeExports) {
        freeModule.exports = punycode;
      } else {
        for (key in punycode) {
          punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
        }
      }
    } else {
      root.punycode = punycode;
    }
  })(commonjsGlobal);
});
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
var decode = function(qs, sep, eq, options) {
  sep = sep || "&";
  eq = eq || "=";
  var obj = {};
  if (typeof qs !== "string" || qs.length === 0) {
    return obj;
  }
  var regexp = /\+/g;
  qs = qs.split(sep);
  var maxKeys = 1e3;
  if (options && typeof options.maxKeys === "number") {
    maxKeys = options.maxKeys;
  }
  var len = qs.length;
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }
  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, "%20"), idx = x.indexOf(eq), kstr, vstr, k, v;
    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = "";
    }
    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);
    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (Array.isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }
  return obj;
};
var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case "string":
      return v;
    case "boolean":
      return v ? "true" : "false";
    case "number":
      return isFinite(v) ? v : "";
    default:
      return "";
  }
};
var encode = function(obj, sep, eq, name) {
  sep = sep || "&";
  eq = eq || "=";
  if (obj === null) {
    obj = void 0;
  }
  if (typeof obj === "object") {
    return Object.keys(obj).map(function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (Array.isArray(obj[k])) {
        return obj[k].map(function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);
  }
  if (!name) {
    return "";
  }
  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};
createCommonjsModule(function(module, exports) {
  exports.decode = exports.parse = decode;
  exports.encode = exports.stringify = encode;
});
var ENV4;
(function(ENV5) {
  ENV5[ENV5["WEBGL_LEGACY"] = 0] = "WEBGL_LEGACY";
  ENV5[ENV5["WEBGL"] = 1] = "WEBGL";
  ENV5[ENV5["WEBGL2"] = 2] = "WEBGL2";
})(ENV4 || (ENV4 = {}));
var RENDERER_TYPE4;
(function(RENDERER_TYPE5) {
  RENDERER_TYPE5[RENDERER_TYPE5["UNKNOWN"] = 0] = "UNKNOWN";
  RENDERER_TYPE5[RENDERER_TYPE5["WEBGL"] = 1] = "WEBGL";
  RENDERER_TYPE5[RENDERER_TYPE5["CANVAS"] = 2] = "CANVAS";
})(RENDERER_TYPE4 || (RENDERER_TYPE4 = {}));
var BUFFER_BITS4;
(function(BUFFER_BITS5) {
  BUFFER_BITS5[BUFFER_BITS5["COLOR"] = 16384] = "COLOR";
  BUFFER_BITS5[BUFFER_BITS5["DEPTH"] = 256] = "DEPTH";
  BUFFER_BITS5[BUFFER_BITS5["STENCIL"] = 1024] = "STENCIL";
})(BUFFER_BITS4 || (BUFFER_BITS4 = {}));
var BLEND_MODES4;
(function(BLEND_MODES5) {
  BLEND_MODES5[BLEND_MODES5["NORMAL"] = 0] = "NORMAL";
  BLEND_MODES5[BLEND_MODES5["ADD"] = 1] = "ADD";
  BLEND_MODES5[BLEND_MODES5["MULTIPLY"] = 2] = "MULTIPLY";
  BLEND_MODES5[BLEND_MODES5["SCREEN"] = 3] = "SCREEN";
  BLEND_MODES5[BLEND_MODES5["OVERLAY"] = 4] = "OVERLAY";
  BLEND_MODES5[BLEND_MODES5["DARKEN"] = 5] = "DARKEN";
  BLEND_MODES5[BLEND_MODES5["LIGHTEN"] = 6] = "LIGHTEN";
  BLEND_MODES5[BLEND_MODES5["COLOR_DODGE"] = 7] = "COLOR_DODGE";
  BLEND_MODES5[BLEND_MODES5["COLOR_BURN"] = 8] = "COLOR_BURN";
  BLEND_MODES5[BLEND_MODES5["HARD_LIGHT"] = 9] = "HARD_LIGHT";
  BLEND_MODES5[BLEND_MODES5["SOFT_LIGHT"] = 10] = "SOFT_LIGHT";
  BLEND_MODES5[BLEND_MODES5["DIFFERENCE"] = 11] = "DIFFERENCE";
  BLEND_MODES5[BLEND_MODES5["EXCLUSION"] = 12] = "EXCLUSION";
  BLEND_MODES5[BLEND_MODES5["HUE"] = 13] = "HUE";
  BLEND_MODES5[BLEND_MODES5["SATURATION"] = 14] = "SATURATION";
  BLEND_MODES5[BLEND_MODES5["COLOR"] = 15] = "COLOR";
  BLEND_MODES5[BLEND_MODES5["LUMINOSITY"] = 16] = "LUMINOSITY";
  BLEND_MODES5[BLEND_MODES5["NORMAL_NPM"] = 17] = "NORMAL_NPM";
  BLEND_MODES5[BLEND_MODES5["ADD_NPM"] = 18] = "ADD_NPM";
  BLEND_MODES5[BLEND_MODES5["SCREEN_NPM"] = 19] = "SCREEN_NPM";
  BLEND_MODES5[BLEND_MODES5["NONE"] = 20] = "NONE";
  BLEND_MODES5[BLEND_MODES5["SRC_OVER"] = 0] = "SRC_OVER";
  BLEND_MODES5[BLEND_MODES5["SRC_IN"] = 21] = "SRC_IN";
  BLEND_MODES5[BLEND_MODES5["SRC_OUT"] = 22] = "SRC_OUT";
  BLEND_MODES5[BLEND_MODES5["SRC_ATOP"] = 23] = "SRC_ATOP";
  BLEND_MODES5[BLEND_MODES5["DST_OVER"] = 24] = "DST_OVER";
  BLEND_MODES5[BLEND_MODES5["DST_IN"] = 25] = "DST_IN";
  BLEND_MODES5[BLEND_MODES5["DST_OUT"] = 26] = "DST_OUT";
  BLEND_MODES5[BLEND_MODES5["DST_ATOP"] = 27] = "DST_ATOP";
  BLEND_MODES5[BLEND_MODES5["ERASE"] = 26] = "ERASE";
  BLEND_MODES5[BLEND_MODES5["SUBTRACT"] = 28] = "SUBTRACT";
  BLEND_MODES5[BLEND_MODES5["XOR"] = 29] = "XOR";
})(BLEND_MODES4 || (BLEND_MODES4 = {}));
var DRAW_MODES4;
(function(DRAW_MODES5) {
  DRAW_MODES5[DRAW_MODES5["POINTS"] = 0] = "POINTS";
  DRAW_MODES5[DRAW_MODES5["LINES"] = 1] = "LINES";
  DRAW_MODES5[DRAW_MODES5["LINE_LOOP"] = 2] = "LINE_LOOP";
  DRAW_MODES5[DRAW_MODES5["LINE_STRIP"] = 3] = "LINE_STRIP";
  DRAW_MODES5[DRAW_MODES5["TRIANGLES"] = 4] = "TRIANGLES";
  DRAW_MODES5[DRAW_MODES5["TRIANGLE_STRIP"] = 5] = "TRIANGLE_STRIP";
  DRAW_MODES5[DRAW_MODES5["TRIANGLE_FAN"] = 6] = "TRIANGLE_FAN";
})(DRAW_MODES4 || (DRAW_MODES4 = {}));
var FORMATS4;
(function(FORMATS5) {
  FORMATS5[FORMATS5["RGBA"] = 6408] = "RGBA";
  FORMATS5[FORMATS5["RGB"] = 6407] = "RGB";
  FORMATS5[FORMATS5["RG"] = 33319] = "RG";
  FORMATS5[FORMATS5["RED"] = 6403] = "RED";
  FORMATS5[FORMATS5["RGBA_INTEGER"] = 36249] = "RGBA_INTEGER";
  FORMATS5[FORMATS5["RGB_INTEGER"] = 36248] = "RGB_INTEGER";
  FORMATS5[FORMATS5["RG_INTEGER"] = 33320] = "RG_INTEGER";
  FORMATS5[FORMATS5["RED_INTEGER"] = 36244] = "RED_INTEGER";
  FORMATS5[FORMATS5["ALPHA"] = 6406] = "ALPHA";
  FORMATS5[FORMATS5["LUMINANCE"] = 6409] = "LUMINANCE";
  FORMATS5[FORMATS5["LUMINANCE_ALPHA"] = 6410] = "LUMINANCE_ALPHA";
  FORMATS5[FORMATS5["DEPTH_COMPONENT"] = 6402] = "DEPTH_COMPONENT";
  FORMATS5[FORMATS5["DEPTH_STENCIL"] = 34041] = "DEPTH_STENCIL";
})(FORMATS4 || (FORMATS4 = {}));
var TARGETS4;
(function(TARGETS5) {
  TARGETS5[TARGETS5["TEXTURE_2D"] = 3553] = "TEXTURE_2D";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP"] = 34067] = "TEXTURE_CUBE_MAP";
  TARGETS5[TARGETS5["TEXTURE_2D_ARRAY"] = 35866] = "TEXTURE_2D_ARRAY";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP_POSITIVE_X"] = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP_NEGATIVE_X"] = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP_POSITIVE_Y"] = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP_NEGATIVE_Y"] = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP_POSITIVE_Z"] = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z";
  TARGETS5[TARGETS5["TEXTURE_CUBE_MAP_NEGATIVE_Z"] = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
})(TARGETS4 || (TARGETS4 = {}));
var TYPES4;
(function(TYPES5) {
  TYPES5[TYPES5["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
  TYPES5[TYPES5["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
  TYPES5[TYPES5["UNSIGNED_SHORT_5_6_5"] = 33635] = "UNSIGNED_SHORT_5_6_5";
  TYPES5[TYPES5["UNSIGNED_SHORT_4_4_4_4"] = 32819] = "UNSIGNED_SHORT_4_4_4_4";
  TYPES5[TYPES5["UNSIGNED_SHORT_5_5_5_1"] = 32820] = "UNSIGNED_SHORT_5_5_5_1";
  TYPES5[TYPES5["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
  TYPES5[TYPES5["UNSIGNED_INT_10F_11F_11F_REV"] = 35899] = "UNSIGNED_INT_10F_11F_11F_REV";
  TYPES5[TYPES5["UNSIGNED_INT_2_10_10_10_REV"] = 33640] = "UNSIGNED_INT_2_10_10_10_REV";
  TYPES5[TYPES5["UNSIGNED_INT_24_8"] = 34042] = "UNSIGNED_INT_24_8";
  TYPES5[TYPES5["UNSIGNED_INT_5_9_9_9_REV"] = 35902] = "UNSIGNED_INT_5_9_9_9_REV";
  TYPES5[TYPES5["BYTE"] = 5120] = "BYTE";
  TYPES5[TYPES5["SHORT"] = 5122] = "SHORT";
  TYPES5[TYPES5["INT"] = 5124] = "INT";
  TYPES5[TYPES5["FLOAT"] = 5126] = "FLOAT";
  TYPES5[TYPES5["FLOAT_32_UNSIGNED_INT_24_8_REV"] = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV";
  TYPES5[TYPES5["HALF_FLOAT"] = 36193] = "HALF_FLOAT";
})(TYPES4 || (TYPES4 = {}));
var SAMPLER_TYPES4;
(function(SAMPLER_TYPES5) {
  SAMPLER_TYPES5[SAMPLER_TYPES5["FLOAT"] = 0] = "FLOAT";
  SAMPLER_TYPES5[SAMPLER_TYPES5["INT"] = 1] = "INT";
  SAMPLER_TYPES5[SAMPLER_TYPES5["UINT"] = 2] = "UINT";
})(SAMPLER_TYPES4 || (SAMPLER_TYPES4 = {}));
var SCALE_MODES4;
(function(SCALE_MODES5) {
  SCALE_MODES5[SCALE_MODES5["NEAREST"] = 0] = "NEAREST";
  SCALE_MODES5[SCALE_MODES5["LINEAR"] = 1] = "LINEAR";
})(SCALE_MODES4 || (SCALE_MODES4 = {}));
var WRAP_MODES4;
(function(WRAP_MODES5) {
  WRAP_MODES5[WRAP_MODES5["CLAMP"] = 33071] = "CLAMP";
  WRAP_MODES5[WRAP_MODES5["REPEAT"] = 10497] = "REPEAT";
  WRAP_MODES5[WRAP_MODES5["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
})(WRAP_MODES4 || (WRAP_MODES4 = {}));
var MIPMAP_MODES4;
(function(MIPMAP_MODES5) {
  MIPMAP_MODES5[MIPMAP_MODES5["OFF"] = 0] = "OFF";
  MIPMAP_MODES5[MIPMAP_MODES5["POW2"] = 1] = "POW2";
  MIPMAP_MODES5[MIPMAP_MODES5["ON"] = 2] = "ON";
  MIPMAP_MODES5[MIPMAP_MODES5["ON_MANUAL"] = 3] = "ON_MANUAL";
})(MIPMAP_MODES4 || (MIPMAP_MODES4 = {}));
var ALPHA_MODES4;
(function(ALPHA_MODES5) {
  ALPHA_MODES5[ALPHA_MODES5["NPM"] = 0] = "NPM";
  ALPHA_MODES5[ALPHA_MODES5["UNPACK"] = 1] = "UNPACK";
  ALPHA_MODES5[ALPHA_MODES5["PMA"] = 2] = "PMA";
  ALPHA_MODES5[ALPHA_MODES5["NO_PREMULTIPLIED_ALPHA"] = 0] = "NO_PREMULTIPLIED_ALPHA";
  ALPHA_MODES5[ALPHA_MODES5["PREMULTIPLY_ON_UPLOAD"] = 1] = "PREMULTIPLY_ON_UPLOAD";
  ALPHA_MODES5[ALPHA_MODES5["PREMULTIPLY_ALPHA"] = 2] = "PREMULTIPLY_ALPHA";
  ALPHA_MODES5[ALPHA_MODES5["PREMULTIPLIED_ALPHA"] = 2] = "PREMULTIPLIED_ALPHA";
})(ALPHA_MODES4 || (ALPHA_MODES4 = {}));
var CLEAR_MODES4;
(function(CLEAR_MODES5) {
  CLEAR_MODES5[CLEAR_MODES5["NO"] = 0] = "NO";
  CLEAR_MODES5[CLEAR_MODES5["YES"] = 1] = "YES";
  CLEAR_MODES5[CLEAR_MODES5["AUTO"] = 2] = "AUTO";
  CLEAR_MODES5[CLEAR_MODES5["BLEND"] = 0] = "BLEND";
  CLEAR_MODES5[CLEAR_MODES5["CLEAR"] = 1] = "CLEAR";
  CLEAR_MODES5[CLEAR_MODES5["BLIT"] = 2] = "BLIT";
})(CLEAR_MODES4 || (CLEAR_MODES4 = {}));
var GC_MODES4;
(function(GC_MODES5) {
  GC_MODES5[GC_MODES5["AUTO"] = 0] = "AUTO";
  GC_MODES5[GC_MODES5["MANUAL"] = 1] = "MANUAL";
})(GC_MODES4 || (GC_MODES4 = {}));
var PRECISION4;
(function(PRECISION5) {
  PRECISION5["LOW"] = "lowp";
  PRECISION5["MEDIUM"] = "mediump";
  PRECISION5["HIGH"] = "highp";
})(PRECISION4 || (PRECISION4 = {}));
var MASK_TYPES4;
(function(MASK_TYPES5) {
  MASK_TYPES5[MASK_TYPES5["NONE"] = 0] = "NONE";
  MASK_TYPES5[MASK_TYPES5["SCISSOR"] = 1] = "SCISSOR";
  MASK_TYPES5[MASK_TYPES5["STENCIL"] = 2] = "STENCIL";
  MASK_TYPES5[MASK_TYPES5["SPRITE"] = 3] = "SPRITE";
  MASK_TYPES5[MASK_TYPES5["COLOR"] = 4] = "COLOR";
})(MASK_TYPES4 || (MASK_TYPES4 = {}));
var COLOR_MASK_BITS4;
(function(COLOR_MASK_BITS5) {
  COLOR_MASK_BITS5[COLOR_MASK_BITS5["RED"] = 1] = "RED";
  COLOR_MASK_BITS5[COLOR_MASK_BITS5["GREEN"] = 2] = "GREEN";
  COLOR_MASK_BITS5[COLOR_MASK_BITS5["BLUE"] = 4] = "BLUE";
  COLOR_MASK_BITS5[COLOR_MASK_BITS5["ALPHA"] = 8] = "ALPHA";
})(COLOR_MASK_BITS4 || (COLOR_MASK_BITS4 = {}));
var MSAA_QUALITY4;
(function(MSAA_QUALITY5) {
  MSAA_QUALITY5[MSAA_QUALITY5["NONE"] = 0] = "NONE";
  MSAA_QUALITY5[MSAA_QUALITY5["LOW"] = 2] = "LOW";
  MSAA_QUALITY5[MSAA_QUALITY5["MEDIUM"] = 4] = "MEDIUM";
  MSAA_QUALITY5[MSAA_QUALITY5["HIGH"] = 8] = "HIGH";
})(MSAA_QUALITY4 || (MSAA_QUALITY4 = {}));
var BUFFER_TYPE4;
(function(BUFFER_TYPE5) {
  BUFFER_TYPE5[BUFFER_TYPE5["ELEMENT_ARRAY_BUFFER"] = 34963] = "ELEMENT_ARRAY_BUFFER";
  BUFFER_TYPE5[BUFFER_TYPE5["ARRAY_BUFFER"] = 34962] = "ARRAY_BUFFER";
  BUFFER_TYPE5[BUFFER_TYPE5["UNIFORM_BUFFER"] = 35345] = "UNIFORM_BUFFER";
})(BUFFER_TYPE4 || (BUFFER_TYPE4 = {}));
settings2.RETINA_PREFIX = /@([0-9\.]+)x/;
settings2.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = false;
function mapPremultipliedBlendModes() {
  var pm = [];
  var npm = [];
  for (var i = 0; i < 32; i++) {
    pm[i] = i;
    npm[i] = i;
  }
  pm[BLEND_MODES4.NORMAL_NPM] = BLEND_MODES4.NORMAL;
  pm[BLEND_MODES4.ADD_NPM] = BLEND_MODES4.ADD;
  pm[BLEND_MODES4.SCREEN_NPM] = BLEND_MODES4.SCREEN;
  npm[BLEND_MODES4.NORMAL] = BLEND_MODES4.NORMAL_NPM;
  npm[BLEND_MODES4.ADD] = BLEND_MODES4.ADD_NPM;
  npm[BLEND_MODES4.SCREEN] = BLEND_MODES4.SCREEN_NPM;
  var array = [];
  array.push(npm);
  array.push(pm);
  return array;
}
mapPremultipliedBlendModes();
var warnings = {};
function deprecation2(version, message, ignoreDepth) {
  if (ignoreDepth === void 0) {
    ignoreDepth = 3;
  }
  if (warnings[message]) {
    return;
  }
  var stack = new Error().stack;
  if (typeof stack === "undefined") {
    console.warn("PixiJS Deprecation Warning: ", message + "\nDeprecated since v" + version);
  } else {
    stack = stack.split("\n").splice(ignoreDepth).join("\n");
    if (console.groupCollapsed) {
      console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", message + "\nDeprecated since v" + version);
      console.warn(stack);
      console.groupEnd();
    } else {
      console.warn("PixiJS Deprecation Warning: ", message + "\nDeprecated since v" + version);
      console.warn(stack);
    }
  }
  warnings[message] = true;
}
(function() {
  function CanvasRenderTarget2(width, height, resolution) {
    this.canvas = settings2.ADAPTER.createCanvas();
    this.context = this.canvas.getContext("2d");
    this.resolution = resolution || settings2.RESOLUTION;
    this.resize(width, height);
  }
  CanvasRenderTarget2.prototype.clear = function() {
    this.context.setTransform(1, 0, 0, 1, 0, 0);
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };
  CanvasRenderTarget2.prototype.resize = function(desiredWidth, desiredHeight) {
    this.canvas.width = Math.round(desiredWidth * this.resolution);
    this.canvas.height = Math.round(desiredHeight * this.resolution);
  };
  CanvasRenderTarget2.prototype.destroy = function() {
    this.context = null;
    this.canvas = null;
  };
  Object.defineProperty(CanvasRenderTarget2.prototype, "width", {
    /**
     * The width of the canvas buffer in pixels.
     * @member {number}
     */
    get: function() {
      return this.canvas.width;
    },
    set: function(val) {
      this.canvas.width = Math.round(val);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(CanvasRenderTarget2.prototype, "height", {
    /**
     * The height of the canvas buffer in pixels.
     * @member {number}
     */
    get: function() {
      return this.canvas.height;
    },
    set: function(val) {
      this.canvas.height = Math.round(val);
    },
    enumerable: false,
    configurable: true
  });
  return CanvasRenderTarget2;
})();
var Application = (
  /** @class */
  function() {
    function Application2(options) {
      var _this = this;
      this.stage = new Container();
      options = Object.assign({
        forceCanvas: false
      }, options);
      this.renderer = autoDetectRenderer(options);
      Application2._plugins.forEach(function(plugin) {
        plugin.init.call(_this, options);
      });
    }
    Application2.registerPlugin = function(plugin) {
      deprecation2("6.5.0", "Application.registerPlugin() is deprecated, use extensions.add()");
      extensions.add({
        type: ExtensionType.Application,
        ref: plugin
      });
    };
    Application2.prototype.render = function() {
      this.renderer.render(this.stage);
    };
    Object.defineProperty(Application2.prototype, "view", {
      /**
       * Reference to the renderer's canvas element.
       * @member {HTMLCanvasElement}
       * @readonly
       */
      get: function() {
        return this.renderer.view;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Application2.prototype, "screen", {
      /**
       * Reference to the renderer's screen rectangle. Its safe to use as `filterArea` or `hitArea` for the whole screen.
       * @member {PIXI.Rectangle}
       * @readonly
       */
      get: function() {
        return this.renderer.screen;
      },
      enumerable: false,
      configurable: true
    });
    Application2.prototype.destroy = function(removeView, stageOptions) {
      var _this = this;
      var plugins = Application2._plugins.slice(0);
      plugins.reverse();
      plugins.forEach(function(plugin) {
        plugin.destroy.call(_this);
      });
      this.stage.destroy(stageOptions);
      this.stage = null;
      this.renderer.destroy(removeView);
      this.renderer = null;
    };
    Application2._plugins = [];
    return Application2;
  }()
);
extensions.handleByList(ExtensionType.Application, Application._plugins);
extensions.add(ResizePlugin);

// node_modules/.pnpm/@pixi+mesh-extras@6.5.2_@pixi+constants@6.5.2_@pixi+core@6.5.2_@pixi+math@6.5.2_@pixi+mesh@6.5.2_@pixi+utils@6.5.2/node_modules/@pixi/mesh-extras/dist/esm/mesh-extras.mjs
var extendStatics17 = function(d, b) {
  extendStatics17 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) {
      if (b2.hasOwnProperty(p)) {
        d2[p] = b2[p];
      }
    }
  };
  return extendStatics17(d, b);
};
function __extends17(d, b) {
  extendStatics17(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var PlaneGeometry = (
  /** @class */
  function(_super) {
    __extends17(PlaneGeometry2, _super);
    function PlaneGeometry2(width, height, segWidth, segHeight) {
      if (width === void 0) {
        width = 100;
      }
      if (height === void 0) {
        height = 100;
      }
      if (segWidth === void 0) {
        segWidth = 10;
      }
      if (segHeight === void 0) {
        segHeight = 10;
      }
      var _this = _super.call(this) || this;
      _this.segWidth = segWidth;
      _this.segHeight = segHeight;
      _this.width = width;
      _this.height = height;
      _this.build();
      return _this;
    }
    PlaneGeometry2.prototype.build = function() {
      var total = this.segWidth * this.segHeight;
      var verts = [];
      var uvs = [];
      var indices2 = [];
      var segmentsX = this.segWidth - 1;
      var segmentsY = this.segHeight - 1;
      var sizeX = this.width / segmentsX;
      var sizeY = this.height / segmentsY;
      for (var i = 0; i < total; i++) {
        var x = i % this.segWidth;
        var y = i / this.segWidth | 0;
        verts.push(x * sizeX, y * sizeY);
        uvs.push(x / segmentsX, y / segmentsY);
      }
      var totalSub = segmentsX * segmentsY;
      for (var i = 0; i < totalSub; i++) {
        var xpos = i % segmentsX;
        var ypos = i / segmentsX | 0;
        var value = ypos * this.segWidth + xpos;
        var value2 = ypos * this.segWidth + xpos + 1;
        var value3 = (ypos + 1) * this.segWidth + xpos;
        var value4 = (ypos + 1) * this.segWidth + xpos + 1;
        indices2.push(value, value2, value3, value2, value4, value3);
      }
      this.buffers[0].data = new Float32Array(verts);
      this.buffers[1].data = new Float32Array(uvs);
      this.indexBuffer.data = new Uint16Array(indices2);
      this.buffers[0].update();
      this.buffers[1].update();
      this.indexBuffer.update();
    };
    return PlaneGeometry2;
  }(MeshGeometry)
);
var RopeGeometry = (
  /** @class */
  function(_super) {
    __extends17(RopeGeometry2, _super);
    function RopeGeometry2(width, points, textureScale) {
      if (width === void 0) {
        width = 200;
      }
      if (textureScale === void 0) {
        textureScale = 0;
      }
      var _this = _super.call(this, new Float32Array(points.length * 4), new Float32Array(points.length * 4), new Uint16Array((points.length - 1) * 6)) || this;
      _this.points = points;
      _this._width = width;
      _this.textureScale = textureScale;
      _this.build();
      return _this;
    }
    Object.defineProperty(RopeGeometry2.prototype, "width", {
      /**
       * The width (i.e., thickness) of the rope.
       * @readonly
       */
      get: function() {
        return this._width;
      },
      enumerable: false,
      configurable: true
    });
    RopeGeometry2.prototype.build = function() {
      var points = this.points;
      if (!points) {
        return;
      }
      var vertexBuffer = this.getBuffer("aVertexPosition");
      var uvBuffer = this.getBuffer("aTextureCoord");
      var indexBuffer = this.getIndex();
      if (points.length < 1) {
        return;
      }
      if (vertexBuffer.data.length / 4 !== points.length) {
        vertexBuffer.data = new Float32Array(points.length * 4);
        uvBuffer.data = new Float32Array(points.length * 4);
        indexBuffer.data = new Uint16Array((points.length - 1) * 6);
      }
      var uvs = uvBuffer.data;
      var indices2 = indexBuffer.data;
      uvs[0] = 0;
      uvs[1] = 0;
      uvs[2] = 0;
      uvs[3] = 1;
      var amount = 0;
      var prev = points[0];
      var textureWidth = this._width * this.textureScale;
      var total = points.length;
      for (var i = 0; i < total; i++) {
        var index = i * 4;
        if (this.textureScale > 0) {
          var dx = prev.x - points[i].x;
          var dy = prev.y - points[i].y;
          var distance = Math.sqrt(dx * dx + dy * dy);
          prev = points[i];
          amount += distance / textureWidth;
        } else {
          amount = i / (total - 1);
        }
        uvs[index] = amount;
        uvs[index + 1] = 0;
        uvs[index + 2] = amount;
        uvs[index + 3] = 1;
      }
      var indexCount = 0;
      for (var i = 0; i < total - 1; i++) {
        var index = i * 2;
        indices2[indexCount++] = index;
        indices2[indexCount++] = index + 1;
        indices2[indexCount++] = index + 2;
        indices2[indexCount++] = index + 2;
        indices2[indexCount++] = index + 1;
        indices2[indexCount++] = index + 3;
      }
      uvBuffer.update();
      indexBuffer.update();
      this.updateVertices();
    };
    RopeGeometry2.prototype.updateVertices = function() {
      var points = this.points;
      if (points.length < 1) {
        return;
      }
      var lastPoint = points[0];
      var nextPoint;
      var perpX = 0;
      var perpY = 0;
      var vertices = this.buffers[0].data;
      var total = points.length;
      for (var i = 0; i < total; i++) {
        var point = points[i];
        var index = i * 4;
        if (i < points.length - 1) {
          nextPoint = points[i + 1];
        } else {
          nextPoint = point;
        }
        perpY = -(nextPoint.x - lastPoint.x);
        perpX = nextPoint.y - lastPoint.y;
        var perpLength = Math.sqrt(perpX * perpX + perpY * perpY);
        var num = this.textureScale > 0 ? this.textureScale * this._width / 2 : this._width / 2;
        perpX /= perpLength;
        perpY /= perpLength;
        perpX *= num;
        perpY *= num;
        vertices[index] = point.x + perpX;
        vertices[index + 1] = point.y + perpY;
        vertices[index + 2] = point.x - perpX;
        vertices[index + 3] = point.y - perpY;
        lastPoint = point;
      }
      this.buffers[0].update();
    };
    RopeGeometry2.prototype.update = function() {
      if (this.textureScale > 0) {
        this.build();
      } else {
        this.updateVertices();
      }
    };
    return RopeGeometry2;
  }(MeshGeometry)
);
var SimpleRope = (
  /** @class */
  function(_super) {
    __extends17(SimpleRope2, _super);
    function SimpleRope2(texture, points, textureScale) {
      if (textureScale === void 0) {
        textureScale = 0;
      }
      var _this = this;
      var ropeGeometry = new RopeGeometry(texture.height, points, textureScale);
      var meshMaterial = new MeshMaterial(texture);
      if (textureScale > 0) {
        texture.baseTexture.wrapMode = WRAP_MODES.REPEAT;
      }
      _this = _super.call(this, ropeGeometry, meshMaterial) || this;
      _this.autoUpdate = true;
      return _this;
    }
    SimpleRope2.prototype._render = function(renderer) {
      var geometry = this.geometry;
      if (this.autoUpdate || geometry._width !== this.shader.texture.height) {
        geometry._width = this.shader.texture.height;
        geometry.update();
      }
      _super.prototype._render.call(this, renderer);
    };
    return SimpleRope2;
  }(Mesh)
);
var SimplePlane = (
  /** @class */
  function(_super) {
    __extends17(SimplePlane2, _super);
    function SimplePlane2(texture, verticesX, verticesY) {
      var _this = this;
      var planeGeometry = new PlaneGeometry(texture.width, texture.height, verticesX, verticesY);
      var meshMaterial = new MeshMaterial(Texture.WHITE);
      _this = _super.call(this, planeGeometry, meshMaterial) || this;
      _this.texture = texture;
      _this.autoResize = true;
      return _this;
    }
    SimplePlane2.prototype.textureUpdated = function() {
      this._textureID = this.shader.texture._updateID;
      var geometry = this.geometry;
      var _a3 = this.shader.texture, width = _a3.width, height = _a3.height;
      if (this.autoResize && (geometry.width !== width || geometry.height !== height)) {
        geometry.width = this.shader.texture.width;
        geometry.height = this.shader.texture.height;
        geometry.build();
      }
    };
    Object.defineProperty(SimplePlane2.prototype, "texture", {
      get: function() {
        return this.shader.texture;
      },
      set: function(value) {
        if (this.shader.texture === value) {
          return;
        }
        this.shader.texture = value;
        this._textureID = -1;
        if (value.baseTexture.valid) {
          this.textureUpdated();
        } else {
          value.once("update", this.textureUpdated, this);
        }
      },
      enumerable: false,
      configurable: true
    });
    SimplePlane2.prototype._render = function(renderer) {
      if (this._textureID !== this.shader.texture._updateID) {
        this.textureUpdated();
      }
      _super.prototype._render.call(this, renderer);
    };
    SimplePlane2.prototype.destroy = function(options) {
      this.shader.texture.off("update", this.textureUpdated, this);
      _super.prototype.destroy.call(this, options);
    };
    return SimplePlane2;
  }(Mesh)
);
var SimpleMesh = (
  /** @class */
  function(_super) {
    __extends17(SimpleMesh2, _super);
    function SimpleMesh2(texture, vertices, uvs, indices2, drawMode) {
      if (texture === void 0) {
        texture = Texture.EMPTY;
      }
      var _this = this;
      var geometry = new MeshGeometry(vertices, uvs, indices2);
      geometry.getBuffer("aVertexPosition").static = false;
      var meshMaterial = new MeshMaterial(texture);
      _this = _super.call(this, geometry, meshMaterial, null, drawMode) || this;
      _this.autoUpdate = true;
      return _this;
    }
    Object.defineProperty(SimpleMesh2.prototype, "vertices", {
      /**
       * Collection of vertices data.
       * @type {Float32Array}
       */
      get: function() {
        return this.geometry.getBuffer("aVertexPosition").data;
      },
      set: function(value) {
        this.geometry.getBuffer("aVertexPosition").data = value;
      },
      enumerable: false,
      configurable: true
    });
    SimpleMesh2.prototype._render = function(renderer) {
      if (this.autoUpdate) {
        this.geometry.getBuffer("aVertexPosition").update();
      }
      _super.prototype._render.call(this, renderer);
    };
    return SimpleMesh2;
  }(Mesh)
);
var DEFAULT_BORDER_SIZE = 10;
var NineSlicePlane = (
  /** @class */
  function(_super) {
    __extends17(NineSlicePlane2, _super);
    function NineSlicePlane2(texture, leftWidth, topHeight, rightWidth, bottomHeight) {
      if (leftWidth === void 0) {
        leftWidth = DEFAULT_BORDER_SIZE;
      }
      if (topHeight === void 0) {
        topHeight = DEFAULT_BORDER_SIZE;
      }
      if (rightWidth === void 0) {
        rightWidth = DEFAULT_BORDER_SIZE;
      }
      if (bottomHeight === void 0) {
        bottomHeight = DEFAULT_BORDER_SIZE;
      }
      var _this = _super.call(this, Texture.WHITE, 4, 4) || this;
      _this._origWidth = texture.orig.width;
      _this._origHeight = texture.orig.height;
      _this._width = _this._origWidth;
      _this._height = _this._origHeight;
      _this._leftWidth = leftWidth;
      _this._rightWidth = rightWidth;
      _this._topHeight = topHeight;
      _this._bottomHeight = bottomHeight;
      _this.texture = texture;
      return _this;
    }
    NineSlicePlane2.prototype.textureUpdated = function() {
      this._textureID = this.shader.texture._updateID;
      this._refresh();
    };
    Object.defineProperty(NineSlicePlane2.prototype, "vertices", {
      get: function() {
        return this.geometry.getBuffer("aVertexPosition").data;
      },
      set: function(value) {
        this.geometry.getBuffer("aVertexPosition").data = value;
      },
      enumerable: false,
      configurable: true
    });
    NineSlicePlane2.prototype.updateHorizontalVertices = function() {
      var vertices = this.vertices;
      var scale = this._getMinScale();
      vertices[9] = vertices[11] = vertices[13] = vertices[15] = this._topHeight * scale;
      vertices[17] = vertices[19] = vertices[21] = vertices[23] = this._height - this._bottomHeight * scale;
      vertices[25] = vertices[27] = vertices[29] = vertices[31] = this._height;
    };
    NineSlicePlane2.prototype.updateVerticalVertices = function() {
      var vertices = this.vertices;
      var scale = this._getMinScale();
      vertices[2] = vertices[10] = vertices[18] = vertices[26] = this._leftWidth * scale;
      vertices[4] = vertices[12] = vertices[20] = vertices[28] = this._width - this._rightWidth * scale;
      vertices[6] = vertices[14] = vertices[22] = vertices[30] = this._width;
    };
    NineSlicePlane2.prototype._getMinScale = function() {
      var w = this._leftWidth + this._rightWidth;
      var scaleW = this._width > w ? 1 : this._width / w;
      var h = this._topHeight + this._bottomHeight;
      var scaleH = this._height > h ? 1 : this._height / h;
      var scale = Math.min(scaleW, scaleH);
      return scale;
    };
    Object.defineProperty(NineSlicePlane2.prototype, "width", {
      /** The width of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane. */
      get: function() {
        return this._width;
      },
      set: function(value) {
        this._width = value;
        this._refresh();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(NineSlicePlane2.prototype, "height", {
      /** The height of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane. */
      get: function() {
        return this._height;
      },
      set: function(value) {
        this._height = value;
        this._refresh();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(NineSlicePlane2.prototype, "leftWidth", {
      /** The width of the left column. */
      get: function() {
        return this._leftWidth;
      },
      set: function(value) {
        this._leftWidth = value;
        this._refresh();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(NineSlicePlane2.prototype, "rightWidth", {
      /** The width of the right column. */
      get: function() {
        return this._rightWidth;
      },
      set: function(value) {
        this._rightWidth = value;
        this._refresh();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(NineSlicePlane2.prototype, "topHeight", {
      /** The height of the top row. */
      get: function() {
        return this._topHeight;
      },
      set: function(value) {
        this._topHeight = value;
        this._refresh();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(NineSlicePlane2.prototype, "bottomHeight", {
      /** The height of the bottom row. */
      get: function() {
        return this._bottomHeight;
      },
      set: function(value) {
        this._bottomHeight = value;
        this._refresh();
      },
      enumerable: false,
      configurable: true
    });
    NineSlicePlane2.prototype._refresh = function() {
      var texture = this.texture;
      var uvs = this.geometry.buffers[1].data;
      this._origWidth = texture.orig.width;
      this._origHeight = texture.orig.height;
      var _uvw = 1 / this._origWidth;
      var _uvh = 1 / this._origHeight;
      uvs[0] = uvs[8] = uvs[16] = uvs[24] = 0;
      uvs[1] = uvs[3] = uvs[5] = uvs[7] = 0;
      uvs[6] = uvs[14] = uvs[22] = uvs[30] = 1;
      uvs[25] = uvs[27] = uvs[29] = uvs[31] = 1;
      uvs[2] = uvs[10] = uvs[18] = uvs[26] = _uvw * this._leftWidth;
      uvs[4] = uvs[12] = uvs[20] = uvs[28] = 1 - _uvw * this._rightWidth;
      uvs[9] = uvs[11] = uvs[13] = uvs[15] = _uvh * this._topHeight;
      uvs[17] = uvs[19] = uvs[21] = uvs[23] = 1 - _uvh * this._bottomHeight;
      this.updateHorizontalVertices();
      this.updateVerticalVertices();
      this.geometry.buffers[0].update();
      this.geometry.buffers[1].update();
    };
    return NineSlicePlane2;
  }(SimplePlane)
);

// node_modules/.pnpm/@pixi+sprite-animated@6.5.2_@pixi+core@6.5.2_@pixi+sprite@6.5.2_@pixi+ticker@6.5.2/node_modules/@pixi/sprite-animated/dist/esm/sprite-animated.mjs
var extendStatics18 = function(d, b) {
  extendStatics18 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) {
      if (b2.hasOwnProperty(p)) {
        d2[p] = b2[p];
      }
    }
  };
  return extendStatics18(d, b);
};
function __extends18(d, b) {
  extendStatics18(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var AnimatedSprite = (
  /** @class */
  function(_super) {
    __extends18(AnimatedSprite2, _super);
    function AnimatedSprite2(textures, autoUpdate) {
      if (autoUpdate === void 0) {
        autoUpdate = true;
      }
      var _this = _super.call(this, textures[0] instanceof Texture ? textures[0] : textures[0].texture) || this;
      _this._textures = null;
      _this._durations = null;
      _this._autoUpdate = autoUpdate;
      _this._isConnectedToTicker = false;
      _this.animationSpeed = 1;
      _this.loop = true;
      _this.updateAnchor = false;
      _this.onComplete = null;
      _this.onFrameChange = null;
      _this.onLoop = null;
      _this._currentTime = 0;
      _this._playing = false;
      _this._previousFrame = null;
      _this.textures = textures;
      return _this;
    }
    AnimatedSprite2.prototype.stop = function() {
      if (!this._playing) {
        return;
      }
      this._playing = false;
      if (this._autoUpdate && this._isConnectedToTicker) {
        Ticker.shared.remove(this.update, this);
        this._isConnectedToTicker = false;
      }
    };
    AnimatedSprite2.prototype.play = function() {
      if (this._playing) {
        return;
      }
      this._playing = true;
      if (this._autoUpdate && !this._isConnectedToTicker) {
        Ticker.shared.add(this.update, this, UPDATE_PRIORITY.HIGH);
        this._isConnectedToTicker = true;
      }
    };
    AnimatedSprite2.prototype.gotoAndStop = function(frameNumber) {
      this.stop();
      var previousFrame = this.currentFrame;
      this._currentTime = frameNumber;
      if (previousFrame !== this.currentFrame) {
        this.updateTexture();
      }
    };
    AnimatedSprite2.prototype.gotoAndPlay = function(frameNumber) {
      var previousFrame = this.currentFrame;
      this._currentTime = frameNumber;
      if (previousFrame !== this.currentFrame) {
        this.updateTexture();
      }
      this.play();
    };
    AnimatedSprite2.prototype.update = function(deltaTime) {
      if (!this._playing) {
        return;
      }
      var elapsed = this.animationSpeed * deltaTime;
      var previousFrame = this.currentFrame;
      if (this._durations !== null) {
        var lag = this._currentTime % 1 * this._durations[this.currentFrame];
        lag += elapsed / 60 * 1e3;
        while (lag < 0) {
          this._currentTime--;
          lag += this._durations[this.currentFrame];
        }
        var sign2 = Math.sign(this.animationSpeed * deltaTime);
        this._currentTime = Math.floor(this._currentTime);
        while (lag >= this._durations[this.currentFrame]) {
          lag -= this._durations[this.currentFrame] * sign2;
          this._currentTime += sign2;
        }
        this._currentTime += lag / this._durations[this.currentFrame];
      } else {
        this._currentTime += elapsed;
      }
      if (this._currentTime < 0 && !this.loop) {
        this.gotoAndStop(0);
        if (this.onComplete) {
          this.onComplete();
        }
      } else if (this._currentTime >= this._textures.length && !this.loop) {
        this.gotoAndStop(this._textures.length - 1);
        if (this.onComplete) {
          this.onComplete();
        }
      } else if (previousFrame !== this.currentFrame) {
        if (this.loop && this.onLoop) {
          if (this.animationSpeed > 0 && this.currentFrame < previousFrame) {
            this.onLoop();
          } else if (this.animationSpeed < 0 && this.currentFrame > previousFrame) {
            this.onLoop();
          }
        }
        this.updateTexture();
      }
    };
    AnimatedSprite2.prototype.updateTexture = function() {
      var currentFrame = this.currentFrame;
      if (this._previousFrame === currentFrame) {
        return;
      }
      this._previousFrame = currentFrame;
      this._texture = this._textures[currentFrame];
      this._textureID = -1;
      this._textureTrimmedID = -1;
      this._cachedTint = 16777215;
      this.uvs = this._texture._uvs.uvsFloat32;
      if (this.updateAnchor) {
        this._anchor.copyFrom(this._texture.defaultAnchor);
      }
      if (this.onFrameChange) {
        this.onFrameChange(this.currentFrame);
      }
    };
    AnimatedSprite2.prototype.destroy = function(options) {
      this.stop();
      _super.prototype.destroy.call(this, options);
      this.onComplete = null;
      this.onFrameChange = null;
      this.onLoop = null;
    };
    AnimatedSprite2.fromFrames = function(frames) {
      var textures = [];
      for (var i = 0; i < frames.length; ++i) {
        textures.push(Texture.from(frames[i]));
      }
      return new AnimatedSprite2(textures);
    };
    AnimatedSprite2.fromImages = function(images) {
      var textures = [];
      for (var i = 0; i < images.length; ++i) {
        textures.push(Texture.from(images[i]));
      }
      return new AnimatedSprite2(textures);
    };
    Object.defineProperty(AnimatedSprite2.prototype, "totalFrames", {
      /**
       * The total number of frames in the AnimatedSprite. This is the same as number of textures
       * assigned to the AnimatedSprite.
       * @readonly
       * @default 0
       */
      get: function() {
        return this._textures.length;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(AnimatedSprite2.prototype, "textures", {
      /** The array of textures used for this AnimatedSprite. */
      get: function() {
        return this._textures;
      },
      set: function(value) {
        if (value[0] instanceof Texture) {
          this._textures = value;
          this._durations = null;
        } else {
          this._textures = [];
          this._durations = [];
          for (var i = 0; i < value.length; i++) {
            this._textures.push(value[i].texture);
            this._durations.push(value[i].time);
          }
        }
        this._previousFrame = null;
        this.gotoAndStop(0);
        this.updateTexture();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(AnimatedSprite2.prototype, "currentFrame", {
      /**
       * The AnimatedSprites current frame index.
       * @readonly
       */
      get: function() {
        var currentFrame = Math.floor(this._currentTime) % this._textures.length;
        if (currentFrame < 0) {
          currentFrame += this._textures.length;
        }
        return currentFrame;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(AnimatedSprite2.prototype, "playing", {
      /**
       * Indicates if the AnimatedSprite is currently playing.
       * @readonly
       */
      get: function() {
        return this._playing;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(AnimatedSprite2.prototype, "autoUpdate", {
      /** Whether to use PIXI.Ticker.shared to auto update animation time. */
      get: function() {
        return this._autoUpdate;
      },
      set: function(value) {
        if (value !== this._autoUpdate) {
          this._autoUpdate = value;
          if (!this._autoUpdate && this._isConnectedToTicker) {
            Ticker.shared.remove(this.update, this);
            this._isConnectedToTicker = false;
          } else if (this._autoUpdate && !this._isConnectedToTicker && this._playing) {
            Ticker.shared.add(this.update, this);
            this._isConnectedToTicker = true;
          }
        }
      },
      enumerable: false,
      configurable: true
    });
    return AnimatedSprite2;
  }(Sprite)
);

// node_modules/.pnpm/pixi.js@6.5.2/node_modules/pixi.js/dist/esm/pixi.mjs
extensions.add(
  // Install renderer plugins
  AccessibilityManager,
  Extract,
  InteractionManager,
  ParticleRenderer,
  Prepare,
  BatchRenderer,
  TilingSpriteRenderer,
  // Install loader plugins
  BitmapFontLoader,
  CompressedTextureLoader,
  DDSLoader,
  KTXLoader,
  SpritesheetLoader,
  // Install application plugins
  TickerPlugin,
  AppLoaderPlugin
);
var filters = {
  AlphaFilter,
  BlurFilter,
  BlurFilterPass,
  ColorMatrixFilter,
  DisplacementFilter,
  FXAAFilter,
  NoiseFilter
};
export {
  ALPHA_MODES,
  AbstractBatchRenderer,
  AbstractMultiResource,
  AbstractRenderer,
  AccessibilityManager,
  AnimatedSprite,
  AppLoaderPlugin,
  Application,
  ArrayResource,
  Attribute,
  BLEND_MODES,
  BUFFER_BITS,
  BUFFER_TYPE,
  BaseImageResource,
  BasePrepare,
  BaseRenderTexture,
  BaseTexture,
  BatchDrawCall,
  BatchGeometry,
  BatchPluginFactory,
  BatchRenderer,
  BatchShaderGenerator,
  BatchSystem,
  BatchTextureArray,
  BitmapFont,
  BitmapFontData,
  BitmapFontLoader,
  BitmapText,
  BlobResource,
  Bounds,
  BrowserAdapter,
  Buffer,
  BufferResource,
  CLEAR_MODES,
  COLOR_MASK_BITS,
  CanvasResource,
  Circle,
  CompressedTextureLoader,
  CompressedTextureResource,
  Container,
  ContextSystem,
  CountLimiter,
  CubeResource,
  DDSLoader,
  DEG_TO_RAD,
  DRAW_MODES,
  DisplayObject,
  ENV,
  Ellipse,
  ExtensionType,
  Extract,
  FORMATS,
  FORMATS_TO_COMPONENTS,
  FillStyle,
  Filter,
  FilterState,
  FilterSystem,
  Framebuffer,
  FramebufferSystem,
  GC_MODES,
  GLFramebuffer,
  GLProgram,
  GLTexture,
  GRAPHICS_CURVES,
  Geometry,
  GeometrySystem,
  Graphics,
  GraphicsData,
  GraphicsGeometry,
  IGLUniformData,
  INSTALLED,
  INTERNAL_FORMATS,
  INTERNAL_FORMAT_TO_BYTES_PER_PIXEL,
  ImageBitmapResource,
  ImageResource,
  InteractionData,
  InteractionEvent,
  InteractionManager,
  InteractionTrackingData,
  KTXLoader,
  LINE_CAP,
  LINE_JOIN,
  LineStyle,
  Loader,
  LoaderResource,
  MASK_TYPES,
  MIPMAP_MODES,
  MSAA_QUALITY,
  MaskData,
  MaskSystem,
  Matrix,
  Mesh,
  MeshBatchUvs,
  MeshGeometry,
  MeshMaterial,
  NineSlicePlane,
  ObjectRenderer,
  ObservablePoint,
  PI_2,
  PRECISION,
  ParticleContainer,
  ParticleRenderer,
  PlaneGeometry,
  Point,
  Polygon,
  Prepare,
  Program,
  ProjectionSystem,
  Quad,
  QuadUv,
  RAD_TO_DEG,
  RENDERER_TYPE,
  Rectangle,
  RenderTexture,
  RenderTexturePool,
  RenderTextureSystem,
  Renderer,
  ResizePlugin,
  Resource,
  RopeGeometry,
  RoundedRectangle,
  Runner,
  SAMPLER_TYPES,
  SCALE_MODES,
  SHAPES,
  SVGResource,
  ScissorSystem,
  Shader,
  ShaderSystem,
  SimpleMesh,
  SimplePlane,
  SimpleRope,
  Sprite,
  SpriteMaskFilter,
  Spritesheet,
  SpritesheetLoader,
  State,
  StateSystem,
  StencilSystem,
  System,
  TARGETS,
  TEXT_GRADIENT,
  TYPES,
  TYPES_TO_BYTES_PER_COMPONENT,
  TYPES_TO_BYTES_PER_PIXEL,
  TemporaryDisplayObject,
  Text,
  TextFormat,
  TextMetrics,
  TextStyle,
  Texture,
  TextureGCSystem,
  TextureLoader,
  TextureMatrix,
  TextureSystem,
  TextureUvs,
  Ticker,
  TickerPlugin,
  TilingSprite,
  TilingSpriteRenderer,
  TimeLimiter,
  Transform,
  UPDATE_PRIORITY,
  UniformGroup,
  VERSION,
  VideoResource,
  ViewableBuffer,
  WRAP_MODES,
  XMLFormat,
  XMLStringFormat,
  accessibleTarget,
  autoDetectFormat,
  autoDetectRenderer,
  autoDetectResource,
  checkMaxIfStatementsInShader,
  createUBOElements,
  defaultFilterVertex,
  defaultVertex$1 as defaultVertex,
  extensions,
  filters,
  generateProgram,
  generateUniformBufferSync,
  getTestContext,
  getUBOData,
  graphicsUtils,
  groupD8,
  interactiveTarget,
  isMobile,
  parseDDS,
  parseKTX,
  resources,
  settings,
  systems,
  uniformParsers,
  utils_exports as utils
};
/*! Bundled license information:

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

@pixi/polyfill/dist/esm/polyfill.mjs:
  (*!
   * @pixi/polyfill - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/polyfill is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)

@pixi/accessibility/dist/esm/accessibility.mjs:
  (*!
   * @pixi/accessibility - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/accessibility is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)

@pixi/interaction/dist/esm/interaction.mjs:
  (*!
   * @pixi/interaction - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/interaction is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@pixi/extract/dist/esm/extract.mjs:
  (*!
   * @pixi/extract - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/extract is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)

@pixi/loaders/dist/esm/loaders.mjs:
  (*!
   * @pixi/loaders - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/loaders is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)

@pixi/compressed-textures/dist/esm/compressed-textures.mjs:
  (*!
   * @pixi/compressed-textures - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/compressed-textures is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@pixi/particle-container/dist/esm/particle-container.mjs:
  (*!
   * @pixi/particle-container - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/particle-container is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@pixi/graphics/dist/esm/graphics.mjs:
  (*!
   * @pixi/graphics - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/graphics is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@pixi/sprite/dist/esm/sprite.mjs:
  (*!
   * @pixi/sprite - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/sprite is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@pixi/text/dist/esm/text.mjs:
  (*!
   * @pixi/text - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/text is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@pixi/prepare/dist/esm/prepare.mjs:
  (*!
   * @pixi/prepare - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/prepare is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@pixi/spritesheet/dist/esm/spritesheet.mjs:
  (*!
   * @pixi/spritesheet - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/spritesheet is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)

@pixi/sprite-tiling/dist/esm/sprite-tiling.mjs:
  (*!
   * @pixi/sprite-tiling - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/sprite-tiling is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@pixi/mesh/dist/esm/mesh.mjs:
  (*!
   * @pixi/mesh - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/mesh is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@pixi/text-bitmap/dist/esm/text-bitmap.mjs:
  (*!
   * @pixi/text-bitmap - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/text-bitmap is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@pixi/filter-alpha/dist/esm/filter-alpha.mjs:
  (*!
   * @pixi/filter-alpha - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/filter-alpha is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@pixi/filter-blur/dist/esm/filter-blur.mjs:
  (*!
   * @pixi/filter-blur - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/filter-blur is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
  (*!
   * @pixi/constants - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/constants is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)

@pixi/filter-color-matrix/dist/esm/filter-color-matrix.mjs:
  (*!
   * @pixi/filter-color-matrix - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/filter-color-matrix is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@pixi/filter-displacement/dist/esm/filter-displacement.mjs:
  (*!
   * @pixi/filter-displacement - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/filter-displacement is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@pixi/filter-fxaa/dist/esm/filter-fxaa.mjs:
  (*!
   * @pixi/filter-fxaa - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/filter-fxaa is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@pixi/filter-noise/dist/esm/filter-noise.mjs:
  (*!
   * @pixi/filter-noise - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/filter-noise is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@pixi/mixin-cache-as-bitmap/dist/esm/mixin-cache-as-bitmap.mjs:
  (*!
   * @pixi/mixin-cache-as-bitmap - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/mixin-cache-as-bitmap is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*!
   * @pixi/constants - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/constants is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)

@pixi/mixin-get-child-by-name/dist/esm/mixin-get-child-by-name.mjs:
  (*!
   * @pixi/mixin-get-child-by-name - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/mixin-get-child-by-name is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)

@pixi/mixin-get-global-position/dist/esm/mixin-get-global-position.mjs:
  (*!
   * @pixi/mixin-get-global-position - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/mixin-get-global-position is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)

@pixi/app/dist/esm/app.mjs:
  (*!
   * @pixi/app - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/app is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*!
   * @pixi/settings - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/settings is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*!
   * @pixi/constants - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/constants is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*!
   * @pixi/utils - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/utils is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)

@pixi/mesh-extras/dist/esm/mesh-extras.mjs:
  (*!
   * @pixi/mesh-extras - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/mesh-extras is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@pixi/sprite-animated/dist/esm/sprite-animated.mjs:
  (*!
   * @pixi/sprite-animated - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/sprite-animated is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

pixi.js/dist/esm/pixi.mjs:
  (*!
   * pixi.js - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * pixi.js is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
*/
//# sourceMappingURL=pixi__js.js.map
