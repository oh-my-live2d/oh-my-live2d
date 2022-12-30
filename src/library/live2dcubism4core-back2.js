var z2;
(function(I0) {
  var Y = function() {
    function B() {
    }
    return B.getVersion = function() {
      return z.ccall("csmGetVersion", "number", [], []);
    }, B.getLatestMocVersion = function() {
      return z.ccall("csmGetLatestMocVersion", "number", [], []);
    }, B.getMocVersion = function(C, D) {
      return z.ccall("csmGetMocVersion", "number", ["number", "number"], [C, D]);
    }, B.getSizeofModel = function(C) {
      return z.ccall("csmGetSizeofModel", "number", ["number"], [C]);
    }, B.reviveMocInPlace = function(C, D) {
      return z.ccall("csmReviveMocInPlace", "number", ["number", "number"], [C, D]);
    }, B.initializeModelInPlace = function(C, D, A0) {
      return z.ccall("csmInitializeModelInPlace", "number", ["number", "number", "number"], [C, D, A0]);
    }, B.getParameterCount = function(C) {
      return z.ccall("csmGetParameterCount", "number", ["number"], [C]);
    }, B.getParameterIds = function(C) {
      return z.ccall("csmGetParameterIds", "number", ["number"], [C]);
    }, B.getParameterMinimumValues = function(C) {
      return z.ccall("csmGetParameterMinimumValues", "number", ["number"], [C]);
    }, B.getParameterTypes = function(C) {
      return z.ccall("csmGetParameterTypes", "number", ["number"], [C]);
    }, B.getParameterMaximumValues = function(C) {
      return z.ccall("csmGetParameterMaximumValues", "number", ["number"], [C]);
    }, B.getParameterDefaultValues = function(C) {
      return z.ccall("csmGetParameterDefaultValues", "number", ["number"], [C]);
    }, B.getParameterValues = function(C) {
      return z.ccall("csmGetParameterValues", "number", ["number"], [C]);
    }, B.getParameterKeyCounts = function(C) {
      return z.ccall("csmGetParameterKeyCounts", "number", ["number"], [C]);
    }, B.getParameterKeyValues = function(C) {
      return z.ccall("csmGetParameterKeyValues", "number", ["number"], [C]);
    }, B.getPartCount = function(C) {
      return z.ccall("csmGetPartCount", "number", ["number"], [C]);
    }, B.getPartIds = function(C) {
      return z.ccall("csmGetPartIds", "number", ["number"], [C]);
    }, B.getPartOpacities = function(C) {
      return z.ccall("csmGetPartOpacities", "number", ["number"], [C]);
    }, B.getPartParentPartIndices = function(C) {
      return z.ccall("csmGetPartParentPartIndices", "number", ["number"], [C]);
    }, B.getDrawableCount = function(C) {
      return z.ccall("csmGetDrawableCount", "number", ["number"], [C]);
    }, B.getDrawableIds = function(C) {
      return z.ccall("csmGetDrawableIds", "number", ["number"], [C]);
    }, B.getDrawableConstantFlags = function(C) {
      return z.ccall("csmGetDrawableConstantFlags", "number", ["number"], [C]);
    }, B.getDrawableDynamicFlags = function(C) {
      return z.ccall("csmGetDrawableDynamicFlags", "number", ["number"], [C]);
    }, B.getDrawableTextureIndices = function(C) {
      return z.ccall("csmGetDrawableTextureIndices", "number", ["number"], [C]);
    }, B.getDrawableDrawOrders = function(C) {
      return z.ccall("csmGetDrawableDrawOrders", "number", ["number"], [C]);
    }, B.getDrawableRenderOrders = function(C) {
      return z.ccall("csmGetDrawableRenderOrders", "number", ["number"], [C]);
    }, B.getDrawableOpacities = function(C) {
      return z.ccall("csmGetDrawableOpacities", "number", ["number"], [C]);
    }, B.getDrawableMaskCounts = function(C) {
      return z.ccall("csmGetDrawableMaskCounts", "number", ["number"], [C]);
    }, B.getDrawableMasks = function(C) {
      return z.ccall("csmGetDrawableMasks", "number", ["number"], [C]);
    }, B.getDrawableVertexCounts = function(C) {
      return z.ccall("csmGetDrawableVertexCounts", "number", ["number"], [C]);
    }, B.getDrawableVertexPositions = function(C) {
      return z.ccall("csmGetDrawableVertexPositions", "number", ["number"], [C]);
    }, B.getDrawableVertexUvs = function(C) {
      return z.ccall("csmGetDrawableVertexUvs", "number", ["number"], [C]);
    }, B.getDrawableIndexCounts = function(C) {
      return z.ccall("csmGetDrawableIndexCounts", "number", ["number"], [C]);
    }, B.getDrawableIndices = function(C) {
      return z.ccall("csmGetDrawableIndices", "number", ["number"], [C]);
    }, B.getDrawableMultiplyColors = function(C) {
      return z.ccall("csmGetDrawableMultiplyColors", "number", ["number"], [C]);
    }, B.getDrawableScreenColors = function(C) {
      return z.ccall("csmGetDrawableScreenColors", "number", ["number"], [C]);
    }, B.getDrawableParentPartIndices = function(C) {
      return z.ccall("csmGetDrawableParentPartIndices", "number", ["number"], [C]);
    }, B.mallocMoc = function(C) {
      return z.ccall("csmMallocMoc", "number", ["number"], [C]);
    }, B.mallocModelAndInitialize = function(C) {
      return z.ccall("csmMallocModelAndInitialize", "number", ["number"], [C]);
    }, B.malloc = function(C) {
      return z.ccall("csmMalloc", "number", ["number"], [C]);
    }, B.setLogFunction = function(C) {
      z.ccall("csmSetLogFunction", null, ["number"], [C]);
    }, B.updateModel = function(C) {
      z.ccall("csmUpdateModel", null, ["number"], [C]);
    }, B.readCanvasInfo = function(C, D, A0, M0) {
      z.ccall("csmReadCanvasInfo", null, ["number", "number", "number", "number"], [C, D, A0, M0]);
    }, B.resetDrawableDynamicFlags = function(C) {
      z.ccall("csmResetDrawableDynamicFlags", null, ["number"], [C]);
    }, B.free = function(C) {
      z.ccall("csmFree", null, ["number"], [C]);
    }, B;
  }();
  I0.AlignofMoc = 64, I0.AlignofModel = 16, I0.MocVersion_Unknown = 0, I0.MocVersion_30 = 1, I0.MocVersion_33 = 2, I0.MocVersion_40 = 3, I0.MocVersion_42 = 4, I0.ParameterType_Normal = 0, I0.ParameterType_BlendShape = 1;
  var x1 = function() {
    function B() {
    }
    return B.csmGetVersion = function() {
      return Y.getVersion();
    }, B.csmGetLatestMocVersion = function() {
      return Y.getLatestMocVersion();
    }, B.csmGetMocVersion = function(C, D) {
      return Y.getMocVersion(C._ptr, D.byteLength);
    }, B;
  }();
  I0.Version = x1;
  var S1 = function() {
    function B() {
    }
    return B.csmSetLogFunction = function(C) {
      B.logFunction = C;
      var D = z.addFunction(B.wrapLogFunction, "vi");
      Y.setLogFunction(D);
    }, B.csmGetLogFunction = function() {
      return B.logFunction;
    }, B.wrapLogFunction = function(C) {
      var D = z.UTF8ToString(C);
      B.logFunction(D);
    }, B;
  }();
  I0.Logging = S1;
  var B1 = function() {
    function B(C) {
      var D = Y.mallocMoc(C.byteLength);
      if (D) {
        var A0 = new Uint8Array(z.HEAPU8.buffer, D, C.byteLength);
        A0.set(new Uint8Array(C)), this._ptr = Y.reviveMocInPlace(D, C.byteLength), this._ptr || Y.free(D);
      }
    }
    return B.fromArrayBuffer = function(C) {
      if (!C)
        return null;
      var D = new B(C);
      return D._ptr ? D : null;
    }, B.prototype._release = function() {
      Y.free(this._ptr), this._ptr = 0;
    }, B;
  }();
  I0.Moc = B1;
  var Z1 = function() {
    function B(C) {
      this._ptr = Y.mallocModelAndInitialize(C._ptr), this._ptr && (this.parameters = new W2(this._ptr), this.parts = new j2(this._ptr), this.drawables = new X2(this._ptr), this.canvasinfo = new H2(this._ptr));
    }
    return B.fromMoc = function(C) {
      var D = new B(C);
      return D._ptr ? D : null;
    }, B.prototype.update = function() {
      Y.updateModel(this._ptr);
    }, B.prototype.release = function() {
      Y.free(this._ptr), this._ptr = 0;
    }, B;
  }();
  I0.Model = Z1;
  var H2 = function() {
    function B(C) {
      if (C) {
        var D = new Float32Array(2), A0 = D.length * D.BYTES_PER_ELEMENT, M0 = Y.malloc(A0), L = new Uint8Array(z.HEAPU8.buffer, M0, A0);
        L.set(new Uint8Array(D.buffer));
        var E0 = new Float32Array(2), W0 = E0.length * E0.BYTES_PER_ELEMENT, Y0 = Y.malloc(W0), y0 = new Uint8Array(z.HEAPU8.buffer, Y0, W0);
        y0.set(new Uint8Array(E0.buffer));
        var S0 = new Float32Array(1), i2 = S0.length * S0.BYTES_PER_ELEMENT, x0 = Y.malloc(i2), O0 = new Uint8Array(z.HEAPU8.buffer, x0, i2);
        O0.set(new Uint8Array(S0.buffer)), Y.readCanvasInfo(C, L.byteOffset, y0.byteOffset, O0.byteOffset), D = new Float32Array(L.buffer, L.byteOffset, L.length), E0 = new Float32Array(y0.buffer, y0.byteOffset, y0.length), S0 = new Float32Array(O0.buffer, O0.byteOffset, O0.length), this.CanvasWidth = D[0], this.CanvasHeight = D[1], this.CanvasOriginX = E0[0], this.CanvasOriginY = E0[1], this.PixelsPerUnit = S0[0], Y.free(L.byteOffset), Y.free(y0.byteOffset), Y.free(O0.byteOffset);
      }
    }
    return B;
  }();
  I0.CanvasInfo = H2;
  var W2 = function() {
    function B(C) {
      var D = 0, A0 = null;
      this.count = Y.getParameterCount(C), D = Y.getParameterCount(C), this.ids = new Array(D);
      for (var M0 = new Uint32Array(z.HEAPU32.buffer, Y.getParameterIds(C), D), L = 0; L < M0.length; L++)
        this.ids[L] = z.UTF8ToString(M0[L]);
      D = Y.getParameterCount(C), this.minimumValues = new Float32Array(z.HEAPF32.buffer, Y.getParameterMinimumValues(C), D), D = Y.getParameterCount(C), this.types = new Int32Array(z.HEAP32.buffer, Y.getParameterTypes(C), D), D = Y.getParameterCount(C), this.maximumValues = new Float32Array(z.HEAPF32.buffer, Y.getParameterMaximumValues(C), D), D = Y.getParameterCount(C), this.defaultValues = new Float32Array(z.HEAPF32.buffer, Y.getParameterDefaultValues(C), D), D = Y.getParameterCount(C), this.values = new Float32Array(z.HEAPF32.buffer, Y.getParameterValues(C), D), D = Y.getParameterCount(C), this.keyCounts = new Int32Array(z.HEAP32.buffer, Y.getParameterKeyCounts(C), D), D = Y.getParameterCount(C), A0 = new Int32Array(z.HEAP32.buffer, Y.getParameterKeyCounts(C), D), this.keyValues = new Array(D);
      for (var E0 = new Uint32Array(z.HEAPU32.buffer, Y.getParameterKeyValues(C), D), L = 0; L < E0.length; L++)
        this.keyValues[L] = new Float32Array(z.HEAPF32.buffer, E0[L], A0[L]);
    }
    return B;
  }();
  I0.Parameters = W2;
  var j2 = function() {
    function B(C) {
      var D = 0;
      this.count = Y.getPartCount(C), D = Y.getPartCount(C), this.ids = new Array(D);
      for (var A0 = new Uint32Array(z.HEAPU32.buffer, Y.getPartIds(C), D), M0 = 0; M0 < A0.length; M0++)
        this.ids[M0] = z.UTF8ToString(A0[M0]);
      D = Y.getPartCount(C), this.opacities = new Float32Array(z.HEAPF32.buffer, Y.getPartOpacities(C), D), D = Y.getPartCount(C), this.parentIndices = new Int32Array(z.HEAP32.buffer, Y.getPartParentPartIndices(C), D);
    }
    return B;
  }();
  I0.Parts = j2;
  var X2 = function() {
    function B(C) {
      this._modelPtr = C;
      var D = 0, A0 = null;
      this.count = Y.getDrawableCount(C), D = Y.getDrawableCount(C), this.ids = new Array(D);
      for (var M0 = new Uint32Array(z.HEAPU32.buffer, Y.getDrawableIds(C), D), L = 0; L < M0.length; L++)
        this.ids[L] = z.UTF8ToString(M0[L]);
      D = Y.getDrawableCount(C), this.constantFlags = new Uint8Array(z.HEAPU8.buffer, Y.getDrawableConstantFlags(C), D), D = Y.getDrawableCount(C), this.dynamicFlags = new Uint8Array(z.HEAPU8.buffer, Y.getDrawableDynamicFlags(C), D), D = Y.getDrawableCount(C), this.textureIndices = new Int32Array(z.HEAP32.buffer, Y.getDrawableTextureIndices(C), D), D = Y.getDrawableCount(C), this.drawOrders = new Int32Array(z.HEAP32.buffer, Y.getDrawableDrawOrders(C), D), D = Y.getDrawableCount(C), this.renderOrders = new Int32Array(z.HEAP32.buffer, Y.getDrawableRenderOrders(C), D), D = Y.getDrawableCount(C), this.opacities = new Float32Array(z.HEAPF32.buffer, Y.getDrawableOpacities(C), D), D = Y.getDrawableCount(C), this.maskCounts = new Int32Array(z.HEAP32.buffer, Y.getDrawableMaskCounts(C), D), D = Y.getDrawableCount(C), this.vertexCounts = new Int32Array(z.HEAP32.buffer, Y.getDrawableVertexCounts(C), D), D = Y.getDrawableCount(C), this.indexCounts = new Int32Array(z.HEAP32.buffer, Y.getDrawableIndexCounts(C), D), D = Y.getDrawableCount(C), this.multiplyColors = new Float32Array(z.HEAPF32.buffer, Y.getDrawableMultiplyColors(C), D * 4), D = Y.getDrawableCount(C), this.screenColors = new Float32Array(z.HEAPF32.buffer, Y.getDrawableScreenColors(C), D * 4), D = Y.getDrawableCount(C), this.parentPartIndices = new Int32Array(z.HEAP32.buffer, Y.getDrawableParentPartIndices(C), D), D = Y.getDrawableCount(C), A0 = new Int32Array(z.HEAP32.buffer, Y.getDrawableMaskCounts(C), D), this.masks = new Array(D);
      for (var E0 = new Uint32Array(z.HEAPU32.buffer, Y.getDrawableMasks(C), D), L = 0; L < E0.length; L++)
        this.masks[L] = new Int32Array(z.HEAP32.buffer, E0[L], A0[L]);
      D = Y.getDrawableCount(C), A0 = new Int32Array(z.HEAP32.buffer, Y.getDrawableVertexCounts(C), D), this.vertexPositions = new Array(D);
      for (var W0 = new Uint32Array(z.HEAPU32.buffer, Y.getDrawableVertexPositions(C), D), L = 0; L < W0.length; L++)
        this.vertexPositions[L] = new Float32Array(z.HEAPF32.buffer, W0[L], A0[L] * 2);
      D = Y.getDrawableCount(C), A0 = new Int32Array(z.HEAP32.buffer, Y.getDrawableVertexCounts(C), D), this.vertexUvs = new Array(D);
      for (var Y0 = new Uint32Array(z.HEAPU32.buffer, Y.getDrawableVertexUvs(C), D), L = 0; L < Y0.length; L++)
        this.vertexUvs[L] = new Float32Array(z.HEAPF32.buffer, Y0[L], A0[L] * 2);
      D = Y.getDrawableCount(C), A0 = new Int32Array(z.HEAP32.buffer, Y.getDrawableIndexCounts(C), D), this.indices = new Array(D);
      for (var y0 = new Uint32Array(z.HEAPU32.buffer, Y.getDrawableIndices(C), D), L = 0; L < y0.length; L++)
        this.indices[L] = new Uint16Array(z.HEAPU16.buffer, y0[L], A0[L]);
    }
    return B.prototype.resetDynamicFlags = function() {
      Y.resetDrawableDynamicFlags(this._modelPtr);
    }, B;
  }();
  I0.Drawables = X2;
  var z1 = function() {
    function B() {
    }
    return B.hasBlendAdditiveBit = function(C) {
      return (C & 1 << 0) == 1 << 0;
    }, B.hasBlendMultiplicativeBit = function(C) {
      return (C & 1 << 1) == 1 << 1;
    }, B.hasIsDoubleSidedBit = function(C) {
      return (C & 1 << 2) == 1 << 2;
    }, B.hasIsInvertedMaskBit = function(C) {
      return (C & 1 << 3) == 1 << 3;
    }, B.hasIsVisibleBit = function(C) {
      return (C & 1 << 0) == 1 << 0;
    }, B.hasVisibilityDidChangeBit = function(C) {
      return (C & 1 << 1) == 1 << 1;
    }, B.hasOpacityDidChangeBit = function(C) {
      return (C & 1 << 2) == 1 << 2;
    }, B.hasDrawOrderDidChangeBit = function(C) {
      return (C & 1 << 3) == 1 << 3;
    }, B.hasRenderOrderDidChangeBit = function(C) {
      return (C & 1 << 4) == 1 << 4;
    }, B.hasVertexPositionsDidChangeBit = function(C) {
      return (C & 1 << 5) == 1 << 5;
    }, B.hasBlendColorDidChangeBit = function(C) {
      return (C & 1 << 6) == 1 << 6;
    }, B;
  }();
  I0.Utils = z1;
  var m2 = function() {
    var B = typeof document != "undefined" && document.currentScript ? document.currentScript.src : void 0;
    return function(C) {
      C = C || {};
      var D, A0, f2 = {};
      for (A0 in D = D || (C !== void 0 ? C : {}))
        D.hasOwnProperty(A0) && (f2[A0] = D[A0]);
      var M0, L, E0, W0, Y0, S0 = !1, y0 = typeof window == "object", J = typeof importScripts == "function", S0 = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string" && !y0 && !J, i2 = !y0 && !S0 && !J, x0 = "", O0 = (S0 ? (x0 = __dirname + "/", W0 = function(V, E) {
        var j = J0(V);
      }, Y0 = function(V) {
        return w2((V = (V = W0(V, !0)).buffer ? V : new Uint8Array(V)).buffer), V;
      }, 1 < process.argv.length && process.argv[1].replace(/\\/g, "/"), process.argv.slice(2), process.on("uncaughtException", function(V) {
        throw V;
      }), process.on("unhandledRejection", s2), D.inspect = function() {
        return "[Emscripten Module object]";
      }) : i2 ? (typeof read != "undefined" && (W0 = function(V) {
        var E = J0(V);
        return E ? t1(E) : read(V);
      }), Y0 = function(V) {
        var E;
        if (!(E = J0(V))) {
          if (typeof readbuffer == "function")
            return new Uint8Array(readbuffer(V));
          w2(typeof (E = read(V, "binary")) == "object");
        }
        return E;
      }, typeof print != "undefined" && ((console = typeof console == "undefined" ? {} : console).log = print, console.warn = console.error = typeof printErr != "undefined" ? printErr : print)) : (y0 || J) && (J ? x0 = self.location.href : document.currentScript && (x0 = document.currentScript.src), x0 = (x0 = B || x0).indexOf("blob:") !== 0 ? x0.substr(0, x0.lastIndexOf("/") + 1) : "", W0 = function(V) {
        try {
          var E = new XMLHttpRequest();
          return E.open("GET", V, !1), E.send(null), E.responseText;
        } catch (j) {
          if (V = J0(V))
            return t1(V);
          throw j;
        }
      }, J && (Y0 = function(V) {
        try {
          var E = new XMLHttpRequest();
          return E.open("GET", V, !1), E.responseType = "arraybuffer", E.send(null), new Uint8Array(E.response);
        } catch (j) {
          if (V = J0(V))
            return V;
          throw j;
        }
      }), M0 = function(V) {
        var E = z0, j = y2, U = new XMLHttpRequest();
        U.open("GET", E, !0), U.responseType = "arraybuffer", U.onload = function() {
          var a0;
          U.status == 200 || U.status == 0 && U.response ? j(U.response) : (a0 = J0(E)) ? j(a0.buffer) : V();
        }, U.onerror = V, U.send(null);
      }), D.print || console.log.bind(console)), Y2 = D.printErr || console.warn.bind(console);
      for (A0 in f2)
        f2.hasOwnProperty(A0) && (D[A0] = f2[A0]);
      var f2 = null, N0 = Array(1), O2 = 0, N2 = !1;
      function w2(V, E) {
        V || s2("Assertion failed: " + E);
      }
      var k2, h2, d0, o2, d2 = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
      function J2(V, E, j) {
        var U = E + j;
        for (j = E; V[j] && !(U <= j); )
          ++j;
        if (16 < j - E && V.subarray && d2)
          return d2.decode(V.subarray(E, j));
        for (U = ""; E < j; ) {
          var a0, r, r0 = V[E++];
          128 & r0 ? (a0 = 63 & V[E++], (224 & r0) == 192 ? U += String.fromCharCode((31 & r0) << 6 | a0) : (r = 63 & V[E++], (r0 = (240 & r0) == 224 ? (15 & r0) << 12 | a0 << 6 | r : (7 & r0) << 18 | a0 << 12 | r << 6 | 63 & V[E++]) < 65536 ? U += String.fromCharCode(r0) : (r0 -= 65536, U += String.fromCharCode(55296 | r0 >> 10, 56320 | 1023 & r0)))) : U += String.fromCharCode(r0);
        }
        return U;
      }
      function T2(V, E) {
        return V ? J2(d0, V, E) : "";
      }
      function Q2(V) {
        return 0 < V % 16777216 && (V += 16777216 - V % 16777216), V;
      }
      function q2(V) {
        k2 = V, D.HEAP8 = h2 = new Int8Array(V), D.HEAP16 = new Int16Array(V), D.HEAP32 = o2 = new Int32Array(V), D.HEAPU8 = d0 = new Uint8Array(V), D.HEAPU16 = new Uint16Array(V), D.HEAPU32 = new Uint32Array(V), D.HEAPF32 = new Float32Array(V), D.HEAPF64 = new Float64Array(V);
      }
      typeof TextDecoder != "undefined" && new TextDecoder("utf-16le"), y0 = D.TOTAL_MEMORY || 16777216;
      function v2(V) {
        for (; 0 < V.length; ) {
          var E, j = V.shift();
          typeof j == "function" ? j() : typeof (E = j.C) == "number" ? j.w === void 0 ? D.dynCall_v(E) : D.dynCall_vi(E, j.w) : E(j.w === void 0 ? null : j.w);
        }
      }
      y0 = (k2 = D.buffer || new ArrayBuffer(y0)).byteLength, q2(k2), o2[1052] = 5247296;
      var L2 = [], H1 = [], W1 = [], K2 = [];
      Math.imul && Math.imul(4294967295, 5) === -5 || (Math.imul = function(V, E) {
        var j = 65535 & V, U = 65535 & E;
        return j * U + ((V >>> 16) * U + j * (E >>> 16) << 16) | 0;
      }), Math.clz32 || (Math.clz32 = function(V) {
        var E = 32, j = V >> 16;
        return j && (E -= 16, V = j), (j = V >> 8) && (E -= 8, V = j), (j = V >> 4) && (E -= 4, V = j), (j = V >> 2) && (E -= 2, V = j), V >> 1 ? E - 2 : E - V;
      }), Math.trunc || (Math.trunc = function(V) {
        return V < 0 ? Math.ceil(V) : Math.floor(V);
      });
      var T0 = 0, A2 = null;
      function s2(V) {
        throw D.onAbort && D.onAbort(V), O0(V), Y2(V), N2 = !0, "abort(" + V + "). Build with -s ASSERTIONS=1 for more info.";
      }
      D.preloadedImages = {}, D.preloadedAudios = {};
      var z0 = null, u2 = "data:application/octet-stream;base64,";
      function $2(V) {
        return V.replace(/\b__Z[\w\d_]+/g, function(E) {
          return E == E ? E : E + " [" + E + "]";
        });
      }
      function b2() {
        var V = Error();
        if (!V.stack) {
          try {
            throw Error(0);
          } catch (E) {
            V = E;
          }
          if (!V.stack)
            return "(no stack trace available)";
        }
        return V.stack.toString();
      }
      var V2 = [null, [], []];
      function M2(V, E) {
        var j = V2[V];
        E === 0 || E === 10 ? ((V === 1 ? O0 : Y2)(J2(j, 0)), j.length = 0) : j.push(E);
      }
      function r1(V, E, j, U) {
        try {
          for (var a0 = 0, r = 0; r < j; r++) {
            for (var r0 = o2[E + 8 * r >> 2], P0 = o2[E + (8 * r + 4) >> 2], h = 0; h < P0; h++)
              M2(V, d0[r0 + h]);
            a0 += P0;
          }
          return o2[U >> 2] = a0, 0;
        } catch (s0) {
          return typeof FS != "undefined" && s0 instanceof FS.A || s2(s0), s0.B;
        }
      }
      function e1() {
        return h2.length;
      }
      function n1(V) {
        try {
          var E = new ArrayBuffer(V);
          if (E.byteLength == V)
            return new Int8Array(E).set(h2), Y1(E), q2(E), 1;
        } catch (j) {
        }
      }
      var j1 = !(z0 = "data:application/octet-stream;base64,AAAAAAAAAAARAAoAERERAAAAAAUAAAAAAAAJAAAAAAsAAAAAAAAAABEADwoREREDCgcAARMJCwsAAAkGCwAACwAGEQAAABEREQAAAAAAAAAAAAAAAAAAAAALAAAAAAAAAAARAAoKERERAAoAAAIACQsAAAAJAAsAAAsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAAMAAAAAAkMAAAAAAAMAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAA0AAAAEDQAAAAAJDgAAAAAADgAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAPAAAAAA8AAAAACRAAAAAAABAAABAAABIAAAASEhIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgAAABISEgAAAAAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsAAAAAAAAAAAAAAAoAAAAACgAAAAAJCwAAAAAACwAACwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAwAAAAACQwAAAAAAAwAAAwAADAxMjM0NTY3ODlBQkNERUYFAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAgAAABgKAAAABAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAK/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBbiBlcnJvciBvY2N1cnJlZCBpbiB0aGUgaW50ZXJwb2xhdGlvbiBmb3IgYmxlbmQgc2hhcGVzLiBDb21iaW5hdGlvbkNvdW50IGlzICVkLgBbQ1NNXSBbRV1XYXJwRGVmb3JtZXI6OlRyYW5zZm9ybVRhcmdldCgpIGVycm9yLiBbJWRdIHAwMT0oJS40ZiAsICUuNGYpCgBbQ1NNXSBbRV1Jbml0aWFsaXplRGVmb3JtZXJzKCk6IFVua25vd24gRGVmb3JtZXIgVHlwZS4KAExpdmUyRCBDdWJpc20gU0RLIENvcmUgVmVyc2lvbiAlZC4lZC4lZABNT0MzAFtDU01dIFtFXWNzbVJldml2ZU1vY0luUGxhY2UgaXMgZmFpbGVkLiBDb3JydXB0ZWQgIG1vYzMgZmlsZS4KAFtDU01dIFtFXWNzbVJldml2ZU1vY0luUGxhY2UgaXMgZmFpbGVkLiBUaGUgQ29yZSB1bnN1cHBvcnQgbGF0ZXIgdGhhbiBtb2MzIHZlcjpbJWRdLiBUaGlzIG1vYzMgdmVyIGlzIFslZF0uCgBbQ1NNXSBbRV1jc21HZXRNb2NWZXJzaW9uIGlzIGZhaWxlZC4gQ29ycnVwdGVkIG1vYzMgZmlsZS4KAFtDU01dIFtFXSVzOiAlcwoAY3NtR2V0TW9jVmVyc2lvbgAiYWRkcmVzcyIgaXMgbnVsbC4AY3NtUmV2aXZlTW9jSW5QbGFjZQAiYWRkcmVzcyIgYWxpZ25tZW50IGlzIGludmFsaWQuACJzaXplIiBpcyBpbnZhbGlkLgBjc21SZWFkQ2FudmFzSW5mbwAibW9kZWwiIGlzIGludmFsaWQuACJvdXRTaXplSW5QaXhlbHMiIGlzIG51bGwuACJvdXRPcmlnaW5JblBpeGVscyIgaXMgbnVsbC4AIm91dFBpeGVsc1BlclVuaXQiIGlzIG51bGwuAGNzbUdldFNpemVvZk1vZGVsACJtb2MiIGlzIGludmFsaWQuAGNzbUluaXRpYWxpemVNb2RlbEluUGxhY2UAInNpemUiIGlzIGludmFsaWQAY3NtVXBkYXRlTW9kZWwAY3NtR2V0UGFyYW1ldGVyQ291bnQAY3NtR2V0UGFyYW1ldGVySWRzAGNzbUdldFBhcmFtZXRlclR5cGVzAGNzbUdldFBhcmFtZXRlck1pbmltdW1WYWx1ZXMAY3NtR2V0UGFyYW1ldGVyTWF4aW11bVZhbHVlcwBjc21HZXRQYXJhbWV0ZXJEZWZhdWx0VmFsdWVzAGNzbUdldFBhcmFtZXRlclZhbHVlcwBjc21HZXRQYXJ0Q291bnQAY3NtR2V0UGFydElkcwBjc21HZXRQYXJ0T3BhY2l0aWVzAGNzbUdldFBhcnRQYXJlbnRQYXJ0SW5kaWNlcwBjc21HZXREcmF3YWJsZUNvdW50AGNzbUdldERyYXdhYmxlSWRzAGNzbUdldERyYXdhYmxlQ29uc3RhbnRGbGFncwBjc21HZXREcmF3YWJsZUR5bmFtaWNGbGFncwBjc21HZXREcmF3YWJsZVRleHR1cmVJbmRpY2VzAGNzbUdldERyYXdhYmxlRHJhd09yZGVycwBjc21HZXREcmF3YWJsZVJlbmRlck9yZGVycwBjc21HZXREcmF3YWJsZU9wYWNpdGllcwBjc21HZXREcmF3YWJsZU1hc2tDb3VudHMAY3NtR2V0RHJhd2FibGVNYXNrcwBjc21HZXREcmF3YWJsZVZlcnRleENvdW50cwBjc21HZXREcmF3YWJsZVZlcnRleFBvc2l0aW9ucwBjc21HZXREcmF3YWJsZVZlcnRleFV2cwBjc21HZXREcmF3YWJsZUluZGV4Q291bnRzAGNzbUdldERyYXdhYmxlSW5kaWNlcwBjc21HZXREcmF3YWJsZU11bHRpcGx5Q29sb3JzAGNzbUdldERyYXdhYmxlU2NyZWVuQ29sb3JzAGNzbUdldERyYXdhYmxlUGFyZW50UGFydEluZGljZXMAY3NtUmVzZXREcmF3YWJsZUR5bmFtaWNGbGFncwBjc21HZXRQYXJhbWV0ZXJLZXlDb3VudHMAY3NtR2V0UGFyYW1ldGVyS2V5VmFsdWVzAFtDU01dIFtXXVJvdGF0aW9uRGVmb3JtZXI6IE5vdCBmb3VuZCB0cmFuc2Zvcm1lZCBEaXJlY3Rpb24uCgBbQ1NNXSBbRV1VcGRhdGVEZWZvcm1lckhpZXJhcmNoeSgpOiBVbmtub3duIERlZm9ybWVyIFR5cGUuCgAlcwoALSsgICAwWDB4AChudWxsKQAtMFgrMFggMFgtMHgrMHggMHgAaW5mAElORgBuYW4ATkFOAC4=");
      function t1(V) {
        for (var E = [], j = 0; j < V.length; j++) {
          var U = V[j];
          255 < U && (j1 && w2(!1, "Character code " + U + " (" + String.fromCharCode(U) + ")  at offset " + j + " not in 0x00-0xFF."), U &= 255), E.push(String.fromCharCode(U));
        }
        return E.join("");
      }
      var X1 = typeof atob == "function" ? atob : function(V) {
        var E = "", j = 0;
        V = V.replace(/[^A-Za-z0-9\+\/=]/g, "");
        do
          var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(V.charAt(j++)), r0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(V.charAt(j++)), U = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(V.charAt(j++)), a0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(V.charAt(j++)), r = r << 2 | r0 >> 4, r0 = (15 & r0) << 4 | U >> 2, P0 = (3 & U) << 6 | a0;
        while (E += String.fromCharCode(r), U !== 64 && (E += String.fromCharCode(r0)), a0 !== 64 && (E += String.fromCharCode(P0)), j < V.length);
        return E;
      };
      function J0(V) {
        if (String.prototype.startsWith ? V.startsWith(u2) : V.indexOf(u2) === 0) {
          if (V = V.slice(u2.length), typeof S0 == "boolean" && S0) {
            try {
              var E = Buffer.from(V, "base64");
            } catch (r) {
              E = new Buffer(V, "base64");
            }
            var j = new Uint8Array(E.buffer, E.byteOffset, E.byteLength);
          } else
            try {
              for (var U = X1(V), a0 = new Uint8Array(U.length), E = 0; E < U.length; ++E)
                a0[E] = U.charCodeAt(E);
              j = a0;
            } catch (r) {
              throw Error("Converting base64 string to bytes failed.");
            }
          return j;
        }
      }
      var y2, R2, c2, J = function(V, E, j) {
        var U = new V.Int8Array(j), a0 = new V.Int16Array(j), r = new V.Int32Array(j), r0 = new V.Uint8Array(j), P0 = new V.Uint16Array(j), h = new V.Float32Array(j), s0 = new V.Float64Array(j), C0 = 0 | E.v, j0 = V.Math.floor, U0 = V.Math.pow, X0 = V.Math.cos, e2 = V.Math.sin, R0 = V.Math.atan2, h0 = V.Math.imul, Q0 = V.Math.clz32, n2 = E.a, _0 = E.b, F0 = E.c, d1 = E.d, J1 = E.e, T1 = E.f, Q1 = E.g, q1 = E.h, L1 = E.i, K1 = E.j, $1 = E.k, b1 = E.l, rr = E.m, v = 4416;
        function er(e) {
          var n, i, l, s, t, c, A, o, f, u, a, k, p, w, _, y, m, I, M = 0, G = 0, R = 0 | r[(e |= 0) + 500 >> 2];
          if (!((0 | R) <= 0)) {
            A = 0 | r[e + 504 >> 2], o = 0 | r[e + 444 >> 2], i = 0 | r[e + 536 >> 2], G = 0;
            do
              if (l = 0 | r[A + (24 * G | 0) + 12 >> 2], s = 0 | r[o + (r[A + (24 * G | 0) + 4 >> 2] << 2) >> 2], t = 0 | r[o + (r[A + (24 * G | 0) + 8 >> 2] << 2) >> 2], c = 0 | r[A + (24 * G | 0) + 16 >> 2], e = 0 | r[A + (24 * G | 0) + 20 >> 2], n = +h[i + (G << 2) >> 2], 0 < (0 | l))
                for (M = 0; m = +h[c + (M << 2) >> 2], k = +h[c + ((f = 1 | M) << 2) >> 2], y = (0 | P0[e + (M << 1) >> 1]) << 1 & 65534, _ = +h[(I = s + (y << 2) | 0) >> 2], a = +h[(y = s + ((1 | y) << 2) | 0) >> 2], f = (0 | P0[e + (f << 1) >> 1]) << 1 & 65534, w = +h[(p = t + (f << 2) | 0) >> 2], u = +h[(f = t + ((1 | f) << 2) | 0) >> 2], h[I >> 2] = _ + m * (w - _) * n, h[y >> 2] = a + m * (u - a) * n, h[p >> 2] = w + k * (_ - w) * n, h[f >> 2] = u + k * (a - u) * n, (0 | (M = M + 2 | 0)) < (0 | l); )
                  ;
            while ((0 | (G = G + 1 | 0)) != (0 | R));
          }
        }
        function nr(e) {
          var n = 0 | r[(e |= 0) >> 2];
          (0 | r0[4 + n >> 0]) < 4 || f1(e, 0 | r[e + 596 >> 2], 0 | r[e + 600 >> 2], 0 | r[984 + n >> 2], 0 | r[e + 152 >> 2], 0 | r[796 + n >> 2]);
        }
        function f1(e, n, i, l, s, t) {
          e |= 0, l |= 0, s |= 0, t |= 0;
          var c, A, o, f, u, a, k, p, w, _ = 0, y = 0, m = 0, I = 0, M = 0, G = v;
          if (v = v + 16 | 0, p = G + 8 | 0, k = G, a = (i |= 0) + (12 * (n |= 0) | 0) | 0, (0 | n) <= 0)
            v = G;
          else {
            do {
              n = 0 | r[i >> 2], A = 0 | r[s + (n << 2) >> 2], f = (n = 0 | r[t + (n << 2) >> 2]) << 1, M = 0 | r[i + 4 >> 2], _ = 0 | r[i + 8 >> 2], o = 0 | r[1028 + (0 | r[e >> 2]) >> 2], u = _ + (48 * M | 0) | 0;
              r:
                do
                  if (0 < (0 | M)) {
                    if ((0 | n) <= 0) {
                      for (; ; )
                        if (3 <= (n = 0 | r[_ + 8 >> 2]) >>> 0 && (r[p >> 2] = n, T(0, 784, p)), u >>> 0 <= (_ = _ + 48 | 0) >>> 0)
                          break r;
                    }
                    do {
                      y = l + (r[_ + 4 >> 2] << 2) | 0, n = 0 | r[_ + 8 >> 2];
                      e:
                        do
                          if (0 | n)
                            switch (M = o + (r[y + (r[_ + 12 >> 2] << 2) >> 2] << 2) | 0, 0 | n) {
                              case 1:
                                for (y = _ + 20 | 0, n = _ + 44 | 0, m = 0; h[(I = A + (m << 2) | 0) >> 2] = +h[I >> 2] + +h[n >> 2] * (+h[M + (m << 2) >> 2] * +h[y >> 2]), (0 | (m = m + 1 | 0)) != (0 | f); )
                                  ;
                                break;
                              case 2:
                                for (y = o + (r[y + (r[_ + 16 >> 2] << 2) >> 2] << 2) | 0, m = _ + 20 | 0, c = _ + 24 | 0, n = _ + 44 | 0, I = 0; h[(w = A + (I << 2) | 0) >> 2] = +h[w >> 2] + +h[n >> 2] * (+h[M + (I << 2) >> 2] * +h[m >> 2] + +h[y + (I << 2) >> 2] * +h[c >> 2]), (0 | (I = I + 1 | 0)) != (0 | f); )
                                  ;
                                break;
                              default:
                                r[k >> 2] = n, T(0, 784, k);
                                break e;
                            }
                        while (0);
                    } while ((_ = _ + 48 | 0) >>> 0 < u >>> 0);
                  }
                while (0);
            } while ((i = i + 12 | 0) >>> 0 < a >>> 0);
            v = G;
          }
        }
        function tr(e) {
          var n = 0 | r[(e |= 0) >> 2];
          (0 | r0[4 + n >> 0]) < 4 || f1(e, 0 | r[e + 604 >> 2], 0 | r[e + 608 >> 2], 0 | r[1024 + n >> 2], 0 | r[e + 444 >> 2], 0 | r[892 + n >> 2]);
        }
        function T(e, n, i) {
          e |= 0, n |= 0, i |= 0;
          var l, s, t = v;
          v = v + 272 | 0, e = t + 16 | 0, s = t, v = ((l = 0 | r[904]) && (r[s >> 2] = i, m1(e, n, s), U1[1 & l](e)), t);
        }
        function o1(e, n, i) {
          i |= 0;
          var l, s = 0, t = 0, c = 0, A = 0, o = 0, f = 0, u = 0, a = 0, p = 0, k = 0, p = 0 | U[(e |= 0) + 4 >> 0];
          if (r[(n |= 0) >> 2] = 628, k = 0 | r[(a = e + 704 | 0) >> 2], 0 < (0 | (o = 0 | r[k >> 2]))) {
            for (s = 0 | r[e + 1048 >> 2], t = 0 | r[e + 720 >> 2], A = c = 0; A = (1 << r[s + (r[t + (c << 2) >> 2] << 2) >> 2]) + A | 0, (0 | (c = c + 1 | 0)) != (0 | o); )
              ;
            s = A << 2;
          } else
            s = 0;
          if (r[n + 4 >> 2] = 12 * o, r[n + 8 >> 2] = r[k >> 2] << 2, r[n + 12 >> 2] = r[k >> 2] << 2, r[n + 16 >> 2] = r[k >> 2] << 2, r[n + 20 >> 2] = r[k >> 2] << 2, r[n + 24 >> 2] = r[k >> 2] << 2, r[n + 28 >> 2] = s, r[n + 32 >> 2] = r[k >> 2] << 2, r[n + 36 >> 2] = s, r[n + 40 >> 2] = s, r[n + 44 >> 2] = r[(l = k + 4 | 0) >> 2] << 5, r[n + 48 >> 2] = r[l >> 2] << 2, r[n + 52 >> 2] = r[l >> 2] << 2, r[n + 56 >> 2] = r[l >> 2] << 2, r[n + 60 >> 2] = r[l >> 2] << 4, r[n + 64 >> 2] = r[l >> 2] << 4, 0 < (0 | (u = 0 | r[(l = k + 8 | 0) >> 2]))) {
            for (t = 0 | r[e + 796 >> 2], c = 0 | r[e + 1048 >> 2], A = 0 | r[e + 780 >> 2], s = f = o = 0; s = (15 + (r[t + (o << 2) >> 2] << 3) & -16) + s | 0, f = (1 << r[c + (r[A + (o << 2) >> 2] << 2) >> 2]) + f | 0, (0 | (o = o + 1 | 0)) != (0 | u); )
              ;
            t = f << 2;
          } else
            s = t = 0;
          if (r[n + 68 >> 2] = 24 * u, r[n + 72 >> 2] = r[l >> 2] << 2, r[n + 76 >> 2] = r[l >> 2] << 2, r[n + 80 >> 2] = r[l >> 2] << 2, r[n + 84 >> 2] = s, r[n + 88 >> 2] = r[l >> 2] << 4, r[n + 92 >> 2] = r[l >> 2] << 4, r[n + 96 >> 2] = r[l >> 2] << 2, r[n + 100 >> 2] = t, r[n + 104 >> 2] = r[l >> 2] << 2, r[n + 108 >> 2] = t, r[n + 112 >> 2] = t, r[n + 116 >> 2] = t, r[n + 120 >> 2] = t, r[n + 124 >> 2] = t, r[n + 128 >> 2] = t, r[n + 132 >> 2] = t, r[n + 136 >> 2] = t, r[n + 140 >> 2] = t, r[n + 144 >> 2] = r[l >> 2] << 2, r[n + 148 >> 2] = r[l >> 2] << 2, r[n + 152 >> 2] = r[l >> 2] << 2, r[n + 156 >> 2] = r[l >> 2] << 2, r[n + 160 >> 2] = r[l >> 2] << 2, r[n + 164 >> 2] = r[l >> 2] << 2, 0 < (0 | (o = 0 | r[(f = k + 12 | 0) >> 2]))) {
            for (s = 0 | r[e + 1048 >> 2], t = 0 | r[e + 812 >> 2], A = c = 0; A = (1 << r[s + (r[t + (c << 2) >> 2] << 2) >> 2]) + A | 0, (0 | (c = c + 1 | 0)) != (0 | o); )
              ;
            s = A << 2;
          } else
            s = 0;
          if (r[n + 168 >> 2] = 12 * o, r[n + 172 >> 2] = r[f >> 2] << 2, r[n + 176 >> 2] = r[f >> 2] << 2, r[n + 180 >> 2] = r[f >> 2] << 2, r[n + 184 >> 2] = r[f >> 2] << 2, r[n + 188 >> 2] = r[f >> 2] << 2, r[n + 192 >> 2] = r[f >> 2] << 2, r[n + 196 >> 2] = r[f >> 2] << 2, r[n + 200 >> 2] = r[f >> 2] << 2, r[n + 204 >> 2] = r[f >> 2] << 4, r[n + 208 >> 2] = r[f >> 2] << 4, r[n + 212 >> 2] = r[f >> 2] << 2, r[n + 216 >> 2] = s, r[n + 220 >> 2] = r[f >> 2] << 2, r[n + 224 >> 2] = s, r[n + 228 >> 2] = s, r[n + 232 >> 2] = s, r[n + 236 >> 2] = s, r[n + 240 >> 2] = s, r[n + 244 >> 2] = s, r[n + 248 >> 2] = s, r[n + 252 >> 2] = s, r[n + 256 >> 2] = s, r[n + 260 >> 2] = s, r[n + 264 >> 2] = s, r[n + 268 >> 2] = s, r[n + 272 >> 2] = r[f >> 2] << 2, r[n + 276 >> 2] = r[f >> 2] << 2, r[n + 280 >> 2] = r[f >> 2] << 2, r[n + 284 >> 2] = r[f >> 2] << 2, r[n + 288 >> 2] = r[f >> 2] << 2, r[n + 292 >> 2] = r[f >> 2] << 2, 0 < (0 | (u = 0 | r[(l = k + 16 | 0) >> 2]))) {
            for (t = 0 | r[e + 892 >> 2], c = 0 | r[e + 1048 >> 2], A = 0 | r[e + 852 >> 2], s = f = o = 0; s = (15 + (r[t + (o << 2) >> 2] << 3) & -16) + s | 0, f = (1 << r[c + (r[A + (o << 2) >> 2] << 2) >> 2]) + f | 0, (0 | (o = o + 1 | 0)) != (0 | u); )
              ;
            t = f << 2;
          } else
            s = t = 0;
          if (r[n + 296 >> 2] = 20 * u, r[n + 300 >> 2] = r[l >> 2] << 2, r[n + 304 >> 2] = r[l >> 2], r[n + 308 >> 2] = r[l >> 2] << 2, r[n + 312 >> 2] = r[l >> 2] << 2, r[n + 316 >> 2] = r[l >> 2] << 2, r[n + 320 >> 2] = s, r[n + 324 >> 2] = r[l >> 2] << 2, r[n + 328 >> 2] = r[l >> 2] << 4, r[n + 332 >> 2] = r[l >> 2] << 4, r[n + 336 >> 2] = r[l >> 2] << 2, r[n + 340 >> 2] = r[l >> 2] << 2, r[n + 344 >> 2] = r[l >> 2] << 2, r[n + 348 >> 2] = r[l >> 2] << 4, r[n + 352 >> 2] = r[l >> 2] << 4, r[n + 356 >> 2] = r[l >> 2] << 2, r[n + 360 >> 2] = t, r[n + 364 >> 2] = r[l >> 2] << 2, r[n + 368 >> 2] = t, r[n + 372 >> 2] = t, r[n + 376 >> 2] = t, r[n + 380 >> 2] = t, r[n + 384 >> 2] = t, r[n + 388 >> 2] = t, r[n + 392 >> 2] = t, r[n + 396 >> 2] = t, r[n + 400 >> 2] = t, r[n + 404 >> 2] = t, r[n + 408 >> 2] = r[l >> 2] << 2, r[n + 412 >> 2] = r[l >> 2] << 2, r[n + 416 >> 2] = r[l >> 2] << 2, r[n + 420 >> 2] = r[l >> 2] << 2, r[n + 424 >> 2] = r[l >> 2] << 2, r[n + 428 >> 2] = r[l >> 2] << 2, a = 0 | r[a >> 2], r[n + 432 >> 2] = 52 * (0 | r[(t = a + 20 | 0) >> 2]), s = (l = 3 < (255 & p)) ? 0 : r[t >> 2] << 2, r[n + 436 >> 2] = s, r[n + 440 >> 2] = r[t >> 2] << 2, r[n + 444 >> 2] = 28 * (0 | r[a + 52 >> 2]), 0 < (0 | (o = 0 | r[k + 48 >> 2]))) {
            for (s = 0 | r[e + 1048 >> 2], A = c = t = 0; c = (p = 0 | r[s + (t << 2) >> 2]) + c | 0, A = (1 << p) + A | 0, (0 | (t = t + 1 | 0)) != (0 | o); )
              ;
            t = c << 2, s = A << 2;
          } else
            s = t = 0;
          if (r[n + 448 >> 2] = 36 * o, r[n + 452 >> 2] = t, r[n + 456 >> 2] = s, r[n + 460 >> 2] = s, r[n + 488 >> 2] = 28 * (0 | r[(t = k + 72 | 0) >> 2]), 0 < (0 | (t = 0 | r[t >> 2]))) {
            for (c = 0 | r[e + 1152 >> 2], A = 0 | r[e + 1160 >> 2], s = 0 | r[e + 1164 >> 2], u = f = o = 0; f = (0 | f) < (0 | (p = 0 | r[c + (o << 2) >> 2])) ? p : f, u = (0 | (p = (0 | r[A + (o << 2) >> 2]) - (0 | r[s + (o << 2) >> 2]) | 0)) < (0 | u) ? u : p + 1 | 0, (0 | (o = o + 1 | 0)) != (0 | t); )
              ;
            t = f << 2, s = u << 2;
          } else
            s = t = 0;
          if (r[n + 492 >> 2] = r[k + 76 >> 2] << 4, r[n + 496 >> 2] = s, r[n + 500 >> 2] = t, r[n + 504 >> 2] = s, 0 < (0 | (o = 0 | r[(f = k + 80 | 0) >> 2]))) {
            for (s = 0 | r[e + 1048 >> 2], t = 0 | r[e + 1188 >> 2], A = c = 0; A = (1 << r[s + (r[t + (c << 2) >> 2] << 2) >> 2]) + A | 0, (0 | (c = c + 1 | 0)) != (0 | o); )
              ;
            s = A << 2;
          } else
            s = 0;
          if (r[n + 508 >> 2] = 24 * o, r[n + 512 >> 2] = r[f >> 2] << 2, r[n + 516 >> 2] = r[f >> 2] << 2, r[n + 520 >> 2] = s, r[n + 524 >> 2] = r[f >> 2] << 2, r[n + 528 >> 2] = s, r[n + 532 >> 2] = s, l) {
            if (r[n + 464 >> 2] = 20 * (0 | r[a + 120 >> 2]), r[n + 468 >> 2] = 28 * (0 | r[a + 100 >> 2]), 0 < (0 | (A = 0 | r[k + 104 >> 2]))) {
              for (s = 0 | r[e + 1080 >> 2], c = t = 0; c = (0 | r[s + (t << 2) >> 2]) + c | 0, (0 | (t = t + 1 | 0)) != (0 | A); )
                ;
              s = c << 2;
            } else
              s = 0;
            r[n + 472 >> 2] = 48 * A, r[n + 476 >> 2] = s, r[n + 480 >> 2] = 12 * (0 | r[a + 108 >> 2]), r[n + 484 >> 2] = 12 * (0 | r[a + 112 >> 2]), s = t = r[n + 540 >> 2] = 0;
          } else {
            if (0 < (0 | (l = 0 | r[(a = k + 20 | 0) >> 2]))) {
              f = 0 | r[e + 948 >> 2], u = 0 | r[e + 952 >> 2], A = 0 | r[e + 1036 >> 2], s = o = 0;
              do
                if (e = 0 | r[u + (o << 2) >> 2], c = (t = A + (r[f + (o << 2) >> 2] << 2) | 0) + (e << 2) | 0, 0 < (0 | e))
                  for (; s = (0 | r[t >> 2]) + s | 0, (t = t + 4 | 0) >>> 0 < c >>> 0; )
                    ;
              while ((0 | (o = o + 1 | 0)) != (0 | l));
            } else
              s = 0;
            r[n + 540 >> 2] = l << 2, t = s << 2, s = r[a >> 2] << 2;
          }
          for (r[n + 536 >> 2] = s, r[n + 544 >> 2] = t, t = s = 0; t = (e = 15 + (0 | r[(k = n + (s << 2) | 0) >> 2]) & -16) + (r[k >> 2] = t) | 0, (0 | (s = s + 1 | 0)) != 137; )
            ;
          r[i >> 2] = t;
        }
        function ir(e, n, i) {
          e |= 0, n |= 0, i |= 0;
          var l, s, t, c, A, o, f = 0, u = 0, a = 0, k = 0, p = 0, w = 0, _ = 0, y = 0, m = 0, I = 0, M = 0, G = 0, R = 0, x = 0, W = 0, d = 0, S = 0, O = 0, X = 0, P = 0, Z = 0, N = 0, H = 0, e0 = 0, K = 0, $ = 0, m0 = 0, c0 = 0, i0 = 0, n0 = 0, w0 = 0, v0 = 0, f0 = 0, l0 = 0, Q = 0, b = 0, F = 0, p0 = v;
          if (v = v + 560 | 0, H = p0 + 552 | 0, f = (m = p0) + 556 | 0, B0(0 | m, 0, 548), o1(e, m, f), i >>> 0 < (f = 0 | r[f >> 2]) >>> 0)
            return v = p0, (F = 0) | F;
          if (B0(0 | n, 0, 0 | f), F = n + (0 | r[m >> 2]) | 0, r[(s = F + 8 | 0) >> 2] = n + (0 | r[m + 4 >> 2]), r[F + 40 >> 2] = n + (0 | r[m + 8 >> 2]), r[F + 44 >> 2] = n + (0 | r[m + 12 >> 2]), r[F + 48 >> 2] = n + (0 | r[m + 16 >> 2]), r[(Z = F + 52 | 0) >> 2] = n + (0 | r[m + 20 >> 2]), r[(N = F + 16 | 0) >> 2] = n + (0 | r[m + 24 >> 2]), r[F + 24 >> 2] = n + (0 | r[m + 28 >> 2]), r[F + 28 >> 2] = n + (0 | r[m + 32 >> 2]), r[F + 32 >> 2] = n + (0 | r[m + 36 >> 2]), r[F + 36 >> 2] = n + (0 | r[m + 40 >> 2]), a = 0 | r[(b = e + 704 | 0) >> 2], r[(t = F + 308 | 0) >> 2] = n + (0 | r[m + 44 >> 2]), r[F + 312 >> 2] = n + (0 | r[m + 48 >> 2]), r[F + 316 >> 2] = n + (0 | r[m + 52 >> 2]), r[F + 320 >> 2] = n + (0 | r[m + 56 >> 2]), r[F + 324 >> 2] = n + (0 | r[m + 60 >> 2]), r[F + 328 >> 2] = n + (0 | r[m + 64 >> 2]), r[($ = F + 60 | 0) >> 2] = n + (0 | r[m + 68 >> 2]), r[F + 144 >> 2] = n + (0 | r[m + 72 >> 2]), r[F + 148 >> 2] = n + (0 | r[m + 76 >> 2]), f = n + (0 | r[m + 80 >> 2]) | 0, r[(k = F + 152 | 0) >> 2] = f, 0 < (0 | (a = 0 | r[a + 8 >> 2])) && (p = n + (0 | r[m + 84 >> 2]) | 0, w = e + 796 | 0, r[f >> 2] = p, (0 | a) != 1))
            for (f = 0, u = 1, i = p; i = i + (15 + (r[(0 | r[w >> 2]) + (f << 2) >> 2] << 3) & -16) | 0, r[(0 | r[k >> 2]) + (u << 2) >> 2] = i, !((0 | a) <= (0 | (f = u + 1 | 0))); )
              l0 = u, u = f, f = l0;
          if (r[F + 156 >> 2] = n + (0 | r[m + 88 >> 2]), r[F + 160 >> 2] = n + (0 | r[m + 92 >> 2]), r[(e0 = F + 68 | 0) >> 2] = n + (0 | r[m + 96 >> 2]), r[F + 76 >> 2] = n + (0 | r[m + 100 >> 2]), r[F + 80 >> 2] = n + (0 | r[m + 104 >> 2]), r[F + 84 >> 2] = n + (0 | r[m + 108 >> 2]), r[F + 88 >> 2] = n + (0 | r[m + 112 >> 2]), r[F + 92 >> 2] = n + (0 | r[m + 116 >> 2]), r[F + 96 >> 2] = n + (0 | r[m + 120 >> 2]), r[F + 100 >> 2] = n + (0 | r[m + 124 >> 2]), r[F + 104 >> 2] = n + (0 | r[m + 128 >> 2]), r[F + 108 >> 2] = n + (0 | r[m + 132 >> 2]), r[F + 112 >> 2] = n + (0 | r[m + 136 >> 2]), r[F + 116 >> 2] = n + (0 | r[m + 140 >> 2]), r[F + 120 >> 2] = n + (0 | r[m + 144 >> 2]), r[F + 124 >> 2] = n + (0 | r[m + 148 >> 2]), r[F + 128 >> 2] = n + (0 | r[m + 152 >> 2]), r[F + 132 >> 2] = n + (0 | r[m + 156 >> 2]), r[F + 136 >> 2] = n + (0 | r[m + 160 >> 2]), r[F + 140 >> 2] = n + (0 | r[m + 164 >> 2]), r[(c = F + 168 | 0) >> 2] = n + (0 | r[m + 168 >> 2]), r[F + 264 >> 2] = n + (0 | r[m + 172 >> 2]), r[F + 268 >> 2] = n + (0 | r[m + 176 >> 2]), r[F + 272 >> 2] = n + (0 | r[m + 180 >> 2]), r[F + 276 >> 2] = n + (0 | r[m + 184 >> 2]), r[F + 280 >> 2] = n + (0 | r[m + 188 >> 2]), r[F + 284 >> 2] = n + (0 | r[m + 192 >> 2]), r[F + 288 >> 2] = n + (0 | r[m + 196 >> 2]), r[F + 292 >> 2] = n + (0 | r[m + 200 >> 2]), r[F + 296 >> 2] = n + (0 | r[m + 204 >> 2]), r[F + 300 >> 2] = n + (0 | r[m + 208 >> 2]), r[(K = F + 176 | 0) >> 2] = n + (0 | r[m + 212 >> 2]), r[F + 184 >> 2] = n + (0 | r[m + 216 >> 2]), r[F + 188 >> 2] = n + (0 | r[m + 220 >> 2]), r[F + 192 >> 2] = n + (0 | r[m + 224 >> 2]), r[F + 196 >> 2] = n + (0 | r[m + 228 >> 2]), r[F + 200 >> 2] = n + (0 | r[m + 232 >> 2]), r[F + 204 >> 2] = n + (0 | r[m + 236 >> 2]), r[F + 208 >> 2] = n + (0 | r[m + 240 >> 2]), r[F + 212 >> 2] = n + (0 | r[m + 244 >> 2]), r[F + 216 >> 2] = n + (0 | r[m + 248 >> 2]), r[F + 220 >> 2] = n + (0 | r[m + 252 >> 2]), r[F + 224 >> 2] = n + (0 | r[m + 256 >> 2]), r[F + 228 >> 2] = n + (0 | r[m + 260 >> 2]), r[F + 232 >> 2] = n + (0 | r[m + 264 >> 2]), r[F + 236 >> 2] = n + (0 | r[m + 268 >> 2]), r[F + 240 >> 2] = n + (0 | r[m + 272 >> 2]), r[F + 244 >> 2] = n + (0 | r[m + 276 >> 2]), r[F + 248 >> 2] = n + (0 | r[m + 280 >> 2]), r[F + 252 >> 2] = n + (0 | r[m + 284 >> 2]), r[F + 256 >> 2] = n + (0 | r[m + 288 >> 2]), r[F + 260 >> 2] = n + (0 | r[m + 292 >> 2]), a = 0 | r[b >> 2], r[(c0 = F + 336 | 0) >> 2] = n + (0 | r[m + 296 >> 2]), r[F + 424 >> 2] = n + (0 | r[m + 300 >> 2]), r[F + 432 >> 2] = n + (0 | r[m + 304 >> 2]), r[F + 436 >> 2] = n + (0 | r[m + 308 >> 2]), r[F + 440 >> 2] = n + (0 | r[m + 312 >> 2]), f = n + (0 | r[m + 316 >> 2]) | 0, r[(k = F + 444 | 0) >> 2] = f, 0 < (0 | (a = 0 | r[a + 16 >> 2])) && (_ = n + (0 | r[m + 320 >> 2]) | 0, y = e + 892 | 0, r[f >> 2] = _, (0 | a) != 1))
            for (f = 0, u = 1, i = _; i = i + (15 + (r[(0 | r[y >> 2]) + (f << 2) >> 2] << 3) & -16) | 0, r[(0 | r[k >> 2]) + (u << 2) >> 2] = i, !((0 | a) <= (0 | (f = u + 1 | 0))); )
              l0 = u, u = f, f = l0;
          if (r[F + 448 >> 2] = n + (0 | r[m + 324 >> 2]), r[(i0 = F + 452 | 0) >> 2] = n + (0 | r[m + 328 >> 2]), r[(n0 = F + 456 | 0) >> 2] = n + (0 | r[m + 332 >> 2]), r[F + 460 >> 2] = n + (0 | r[m + 336 >> 2]), r[F + 464 >> 2] = n + (0 | r[m + 340 >> 2]), r[F + 468 >> 2] = n + (0 | r[m + 344 >> 2]), r[F + 472 >> 2] = n + (0 | r[m + 348 >> 2]), r[F + 476 >> 2] = n + (0 | r[m + 352 >> 2]), r[(m0 = F + 344 | 0) >> 2] = n + (0 | r[m + 356 >> 2]), r[F + 352 >> 2] = n + (0 | r[m + 360 >> 2]), r[F + 356 >> 2] = n + (0 | r[m + 364 >> 2]), r[F + 360 >> 2] = n + (0 | r[m + 368 >> 2]), r[F + 364 >> 2] = n + (0 | r[m + 372 >> 2]), r[F + 368 >> 2] = n + (0 | r[m + 376 >> 2]), r[F + 372 >> 2] = n + (0 | r[m + 380 >> 2]), r[F + 376 >> 2] = n + (0 | r[m + 384 >> 2]), r[F + 380 >> 2] = n + (0 | r[m + 388 >> 2]), r[F + 384 >> 2] = n + (0 | r[m + 392 >> 2]), r[F + 388 >> 2] = n + (0 | r[m + 396 >> 2]), r[F + 392 >> 2] = n + (0 | r[m + 400 >> 2]), r[F + 396 >> 2] = n + (0 | r[m + 404 >> 2]), r[F + 400 >> 2] = n + (0 | r[m + 408 >> 2]), r[F + 404 >> 2] = n + (0 | r[m + 412 >> 2]), r[F + 408 >> 2] = n + (0 | r[m + 416 >> 2]), r[F + 412 >> 2] = n + (0 | r[m + 420 >> 2]), r[F + 416 >> 2] = n + (0 | r[m + 424 >> 2]), r[F + 420 >> 2] = n + (0 | r[m + 428 >> 2]), X = 0 | r[m + 436 >> 2], l = 0 | r[m + 440 >> 2], r[(l0 = F + 544 | 0) >> 2] = n + (0 | r[m + 432 >> 2]), r[(P = F + 548 | 0) >> 2] = n + X, r[(X = F + 552 | 0) >> 2] = n + l, r[(l = F + 560 | 0) >> 2] = n + (0 | r[m + 444 >> 2]), f = 0 | r[b >> 2], a = n + (0 | r[m + 448 >> 2]) | 0, r[(f0 = F + 568 | 0) >> 2] = a, 0 < (0 | (f = 0 | r[f + 48 >> 2])))
            for (i = 0 | r[e + 1048 >> 2], k = n + (0 | r[m + 452 >> 2]) | 0, w = n + ((p = 0) | r[m + 456 >> 2]) | 0, y = n + (0 | r[m + 460 >> 2]) | 0; r[a + (36 * p | 0) >> 2] = k, r[a + (36 * p | 0) + 16 >> 2] = w, r[a + (36 * p | 0) + 20 >> 2] = y, _ = 1 << (u = 0 | r[i + (p << 2) >> 2]), (0 | (p = p + 1 | 0)) != (0 | f); )
              k = k + (u << 2) | 0, w = w + (_ << 2) | 0, y = y + (_ << 2) | 0;
          if (f = 0 | r[b >> 2], u = n + (0 | r[m + 488 >> 2]) | 0, r[(A = F + 484 | 0) >> 2] = u, 0 < (0 | (f = 0 | r[f + 72 >> 2])))
            for (i = 0 | r[e + 1152 >> 2], k = n + ((a = 0) | r[m + 492 >> 2]) | 0; k = (r[u + (28 * a | 0) + 12 >> 2] = k) + (r[i + (a << 2) >> 2] << 4) | 0, (0 | (a = a + 1 | 0)) != (0 | f); )
              ;
          if (r[F + 488 >> 2] = n + (0 | r[m + 496 >> 2]), r[F + 492 >> 2] = n + (0 | r[m + 500 >> 2]), r[F + 496 >> 2] = n + (0 | r[m + 504 >> 2]), r[(w0 = F + 504 | 0) >> 2] = n + (0 | r[m + 508 >> 2]), r[F + 536 >> 2] = n + (0 | r[m + 512 >> 2]), r[(v0 = F + 512 | 0) >> 2] = n + (0 | r[m + 516 >> 2]), r[F + 520 >> 2] = n + (0 | r[m + 520 >> 2]), r[F + 524 >> 2] = n + (0 | r[m + 524 >> 2]), r[F + 528 >> 2] = n + (0 | r[m + 528 >> 2]), r[F + 532 >> 2] = n + (0 | r[m + 532 >> 2]), O = 3 < (0 | r0[(o = e + 4 | 0) >> 0])) {
            if (r[F + 576 >> 2] = n + (0 | r[m + 464 >> 2]), r[F + 584 >> 2] = n + (0 | r[m + 468 >> 2]), f = 0 | r[m + 476 >> 2], a = 0 | r[b >> 2], p = n + (0 | r[m + 472 >> 2]) | 0, r[F + 592 >> 2] = p, 0 < (0 | (a = 0 | r[a + 104 >> 2])))
              for (k = 0 | r[e + 1080 >> 2], f = n + f | 0, i = 0; r[p + (48 * i | 0) + 40 >> 2] = f, (0 | (u = i + 1 | 0)) != (0 | a); )
                f = f + (r[k + (i << 2) >> 2] << 2) | 0, i = u;
            r[F + 600 >> 2] = n + (0 | r[m + 480 >> 2]), r[F + 608 >> 2] = n + (0 | r[m + 484 >> 2]), i = 0 | r[b >> 2], f = 0 | r[i + 20 >> 2];
          } else if (i = 0 | r[m + 536 >> 2], u = 0 | r[m + 544 >> 2], r[F + 616 >> 2] = n + (0 | r[m + 540 >> 2]), r[(m = F + 612 | 0) >> 2] = n + i, i = 0 | r[b >> 2], 0 < (0 | (f = 0 | r[i + 20 >> 2])))
            for (w = e + 948 | 0, _ = e + 952 | 0, p = e + 1036 | 0, k = n + u | (y = 0); ; ) {
              if (f = 0 | r[(0 | r[w >> 2]) + (y << 2) >> 2], u = (S = 0 | r[(0 | r[_ >> 2]) + (y << 2) >> 2]) + f | 0, 0 < (0 | S)) {
                for (i = 0 | r[p >> 2], a = 0; a = (0 | r[i + (f << 2) >> 2]) + a | 0, (0 | (f = f + 1 | 0)) < (0 | u); )
                  ;
                f = (0 | r[m >> 2]) + (y << 2) | 0, a ? (i = k, u = a) : Q = 27;
              } else
                f = (0 | r[m >> 2]) + (y << 2) | 0, Q = 27;
              if ((0 | Q) == 27 && (u = i = Q = 0), r[f >> 2] = i, i = 0 | r[b >> 2], (0 | (f = 0 | r[i + 20 >> 2])) <= (0 | (y = y + 1 | 0)))
                break;
              k = k + (u << 2) | 0;
            }
          r[F >> 2] = e, r[F + 620 >> 2] = 1, r[F + 624 >> 2] = 1 & U[20 + (0 | r[e + 708 >> 2]) >> 0], k = (r[F + 540 >> 2] = f) + -1 | 0;
          r:
            do
              if (0 < (0 | f)) {
                if (n = 0 | r[l0 >> 2], I = 0 | r[e + 928 >> 2], M = 0 | r[e + 924 >> 2], R = 0 | r[e + 936 >> 2], x = 0 | r[e + 932 >> 2], W = 0 | r[e + 940 >> 2], d = 0 | r[e + 952 >> 2], S = e + 948 | 0, m = 0 | r[X >> 2], y = F + 584 | 0, _ = e + 956 | 0, !O)
                  for (; ; ) {
                    if (r[n + (52 * k | 0) >> 2] = 0, r[n + (52 * k | 0) + 4 >> 2] = r[(u = I + (k << 2) | 0) >> 2], r[n + (52 * k | 0) + 8 >> 2] = r[(X = M + (k << 2) | 0) >> 2], h[n + (52 * k | 0) + 12 >> 2] = +h[X >> 2] - +h[u >> 2], r[n + (52 * k | 0) + 16 >> 2] = r[R + (k << 2) >> 2], r[n + (52 * k | 0) + 44 >> 2] = r[(u = x + (k << 2) | 0) >> 2], G = +U0(0.10000000149011612, 0 | r[W + (k << 2) >> 2]), h[n + (52 * k | 0) + 20 >> 2] = G, h[n + (52 * k | 0) + 24 >> 2] = 1.5 * G, X = 0 | r[d + (k << 2) >> 2], a = (r[n + (52 * k | 0) + 32 >> 2] = X) ? (0 | r[l >> 2]) + (28 * (0 | r[(0 | r[S >> 2]) + (k << 2) >> 2]) | 0) | 0 : 0, r[n + (52 * k | 0) + 28 >> 2] = a, r[n + (52 * k | 0) + 48 >> 2] = 1, r[m + (k << 2) >> 2] = r[u >> 2], !(0 < (0 | k)))
                      break r;
                    k = k + -1 | 0;
                  }
                for (p = 0 | r[e + 944 >> 2], w = 0 | r[e + 960 >> 2]; r[n + (52 * k | 0) >> 2] = r[p + (k << 2) >> 2], r[n + (52 * k | 0) + 4 >> 2] = r[(a = I + (k << 2) | 0) >> 2], r[n + (52 * k | 0) + 8 >> 2] = r[(X = M + (k << 2) | 0) >> 2], h[n + (52 * k | 0) + 12 >> 2] = +h[X >> 2] - +h[a >> 2], r[n + (52 * k | 0) + 16 >> 2] = r[R + (k << 2) >> 2], r[n + (52 * k | 0) + 44 >> 2] = r[(a = x + (k << 2) | 0) >> 2], G = +U0(0.10000000149011612, 0 | r[W + (k << 2) >> 2]), h[n + (52 * k | 0) + 20 >> 2] = G, h[n + (52 * k | 0) + 24 >> 2] = 1.5 * G, X = 0 | r[d + (k << 2) >> 2], u = (r[n + (52 * k | 0) + 32 >> 2] = X) ? (0 | r[l >> 2]) + (28 * (0 | r[(0 | r[S >> 2]) + (k << 2) >> 2]) | 0) | 0 : 0, r[n + (52 * k | 0) + 28 >> 2] = u, X = 0 | r[w + (k << 2) >> 2], u = (r[n + (52 * k | 0) + 40 >> 2] = X) ? (0 | r[y >> 2]) + (28 * (0 | r[(0 | r[_ >> 2]) + (k << 2) >> 2]) | 0) | 0 : 0, r[n + (52 * k | 0) + 36 >> 2] = u, r[n + (52 * k | 0) + 48 >> 2] = 1, r[m + (k << 2) >> 2] = r[a >> 2], 0 < (0 | k); )
                  k = k + -1 | 0;
              }
            while (0);
          if (O ? (r[P >> 2] = r[e + 944 >> 2], p = i, w = e) : (B0(0 | r[P >> 2], 0, f << 2 | 0), w = 0 | r[F >> 2], p = 0 | r[w + 704 >> 2]), f = 0 | r[p + 52 >> 2], 0 < (0 | (r[F + 556 >> 2] = f)))
            for (i = 0 | r[l >> 2], u = 0 | r[w + 1036 >> 2], a = 0 | r[w + 1132 >> 2], k = 0 | r[w + 1032 >> 2]; r[i + (28 * (f = (P = f) + -1 | 0) | 0) >> 2] = r[u + (f << 2) >> 2], r[i + (28 * f | 0) + 4 >> 2] = a + (r[k + (f << 2) >> 2] << 2), r[i + (28 * f | 0) + 8 >> 2] = 0, h[i + (28 * f | 0) + 12 >> 2] = 0, r[i + (28 * f | 0) + 16 >> 2] = 0, r[i + (28 * f | 0) + 20 >> 2] = 1, (r[i + (28 * f | 0) + 24 >> 2] = 1) < (0 | P); )
              ;
          if (f = 0 | r[p + 48 >> 2], 0 < (0 | (r[F + 564 >> 2] = f))) {
            _ = w + 1048 | 0, y = w + 1040 | 0, w = w + 1044 | 0;
            do
              if (p = f, i = 0 | r[f0 >> 2], u = 0 | r[(0 | r[_ >> 2]) + ((f = f + -1 | 0) << 2) >> 2], 0 < (0 | (r[i + (36 * f | 0) + 4 >> 2] = u)))
                for (a = i + (36 * f | 0) | 0, k = 0; r[(0 | r[a >> 2]) + (k << 2) >> 2] = (0 | r[l >> 2]) + (28 * (0 | r[(0 | r[y >> 2]) + ((0 | r[(0 | r[w >> 2]) + (f << 2) >> 2]) + k << 2) >> 2]) | 0), (0 | (k = k + 1 | 0)) != (0 | u); )
                  ;
            while (r[i + (36 * f | 0) + 8 >> 2] = 1 << u, r[i + (36 * f | 0) + 24 >> 2] = 1, (r[i + (36 * f | 0) + 28 >> 2] = 1) < (0 | p));
            I = 0 | r[F >> 2], p = 0 | r[I + 704 >> 2];
          } else
            I = w;
          if (i = 0 | r[p >> 2], 0 < (0 | (r[(n = F + 4 | 0) >> 2] = i))) {
            for (a = 0 | r[s >> 2], y = 0 | r[f0 >> 2], m = 0 | r[I + 720 >> 2], k = 0 | r[I + 740 >> 2], w = 0 | r[I + 736 >> 2], _ = 0 | r[I + 732 >> 2], f = 0 | r[Z >> 2], u = i; r[a + (12 * (u = (Z = u) + -1 | 0) | 0) >> 2] = y + (36 * (0 | r[m + (u << 2) >> 2]) | 0), r[a + (12 * u | 0) + 4 >> 2] = r[k + (u << 2) >> 2], r[a + (12 * u | 0) + 8 >> 2] = r[w + (u << 2) >> 2], h[f + (u << 2) >> 2] = 0 | r[_ + (u << 2) >> 2] ? 1 : 0, 1 < (0 | Z); )
              ;
            for (u = 0 | r[N >> 2], f = 0; Z = 0 | r[y + (36 * (0 | r[m + ((i = (N = i) + -1 | 0) << 2) >> 2]) | 0) + 8 >> 2], f = (r[u + (i << 2) >> 2] = Z) + f | 0, 1 < (0 | N); )
              ;
            i = 0 | r[n >> 2];
          } else
            f = 0;
          if (r[F + 20 >> 2] = f, r[F + 12 >> 2] = i, f = 0 | r[p + 4 >> 2], 0 < (0 | (r[F + 304 >> 2] = f))) {
            w = I + 752 | 0, y = I + 764 | 0, _ = I + 768 | 0, p = I + 772 | 0, m = I + 776 | 0, k = I + 760 | 0;
            do
              switch (a = f, i = 0 | r[t >> 2], r[i + ((f = f + -1 | 0) << 5) >> 2] = (0 | r[f0 >> 2]) + (36 * (0 | r[(0 | r[w >> 2]) + (f << 2) >> 2]) | 0), r[i + (f << 5) + 4 >> 2] = r[(0 | r[y >> 2]) + (f << 2) >> 2], r[i + (f << 5) + 8 >> 2] = r[(0 | r[_ >> 2]) + (f << 2) >> 2], N = 0 | r[(0 | r[p >> 2]) + (f << 2) >> 2], r[i + (f << 5) + 12 >> 2] = N, u = 0 | r[(0 | r[m >> 2]) + (f << 2) >> 2], r[i + (f << 5) + 16 >> 2] = u, r[i + (f << 5) + 28 >> 2] = r[(0 | r[k >> 2]) + (f << 2) >> 2], 0 | N) {
                case 0:
                  r[(0 | r[$ >> 2]) + (24 * u | 0) + 20 >> 2] = f, r[i + (f << 5) + 20 >> 2] = 2, r[i + (f << 5) + 24 >> 2] = 2;
                  break;
                case 1:
                  r[(0 | r[c >> 2]) + (12 * u | 0) + 8 >> 2] = f, r[i + (f << 5) + 20 >> 2] = 3, r[i + (f << 5) + 24 >> 2] = 3;
                  break;
                default:
                  T(0, 937, H);
              }
            while (1 < (0 | a));
            P = 0 | r[F >> 2], O = 0 | r[P + 704 >> 2];
          } else
            O = p, P = I;
          if (u = 0 | r[O + 8 >> 2], f = (r[(n = F + 56 | 0) >> 2] = u) + -1 | 0, m = 0 < (0 | u))
            if (a = 0 | r[$ >> 2], k = 0 | r[f0 >> 2], p = 0 | r[P + 780 >> 2], w = 0 | r[P + 800 >> 2], _ = 0 | r[P + 804 >> 2], y = 0 | r[P + 796 >> 2], 1 < (0 | r0[P + 4 >> 0]))
              for (i = 0 | r[P + 808 >> 2]; r[a + (24 * f | 0) >> 2] = k + (36 * (0 | r[p + (f << 2) >> 2]) | 0), r[a + (24 * f | 0) + 4 >> 2] = r[w + (f << 2) >> 2], r[a + (24 * f | 0) + 8 >> 2] = r[_ + (f << 2) >> 2], r[a + (24 * f | 0) + 16 >> 2] = r[y + (f << 2) >> 2], r[a + (24 * f | 0) + 12 >> 2] = r[i + (f << 2) >> 2], 0 < (0 | f); )
                f = f + -1 | 0;
            else
              for (; r[a + (24 * f | 0) >> 2] = k + (36 * (0 | r[p + (f << 2) >> 2]) | 0), r[a + (24 * f | 0) + 4 >> 2] = r[w + (f << 2) >> 2], r[a + (24 * f | 0) + 8 >> 2] = r[_ + (f << 2) >> 2], r[a + (24 * f | 0) + 16 >> 2] = r[y + (f << 2) >> 2], (r[a + (24 * f | 0) + 12 >> 2] = 0) < (0 | f); )
                f = f + -1 | 0;
          if (i = 0 | r[O + 12 >> 2], 0 < (0 | (r[(_ = F + 164 | 0) >> 2] = i)))
            for (f = 0 | r[c >> 2], a = 0 | r[f0 >> 2], k = 0 | r[P + 812 >> 2], p = 0 | r[P + 828 >> 2], w = i; r[f + (12 * (w = (H = w) + -1 | 0) | 0) >> 2] = a + (36 * (0 | r[k + (w << 2) >> 2]) | 0), r[f + (12 * w | 0) + 4 >> 2] = r[p + (w << 2) >> 2], 1 < (0 | H); )
              ;
          if (m) {
            for (a = 0 | r[$ >> 2], i = 0 | r[e0 >> 2], f = 0; e0 = 0 | r[8 + (0 | r[a + (24 * (u = ($ = u) + -1 | 0) | 0) >> 2]) >> 2], f = (r[i + (u << 2) >> 2] = e0) + f | 0, 1 < (0 | $); )
              ;
            u = 0 | r[n >> 2], i = 0 | r[_ >> 2];
          } else
            f = 0;
          if (r[F + 72 >> 2] = f, r[F + 64 >> 2] = u, 0 < (0 | i)) {
            for (a = 0 | r[c >> 2], u = 0 | r[K >> 2], f = 0; K = 0 | r[8 + (0 | r[a + (12 * (i = ($ = i) + -1 | 0) | 0) >> 2]) >> 2], f = (r[u + (i << 2) >> 2] = K) + f | 0, 1 < (0 | $); )
              ;
            i = 0 | r[_ >> 2];
          } else
            f = 0;
          if (r[F + 180 >> 2] = f, r[F + 172 >> 2] = i, X = P + 704 | 0, f = 0 | r[O + 16 >> 2], 0 < (0 | (r[(m = F + 332 | 0) >> 2] = f))) {
            for (i = 0 | r[c0 >> 2], _ = 0 | r[f0 >> 2], y = 0 | r[P + 852 >> 2], u = 0 | r[P + 876 >> 2], a = 0 | r[P + 880 >> 2], k = 0 | r[P + 892 >> 2], p = 0 | r[P + 872 >> 2], w = f; r[i + (20 * (w = (c0 = w) + -1 | 0) | 0) >> 2] = _ + (36 * (0 | r[y + (w << 2) >> 2]) | 0), r[i + (20 * w | 0) + 4 >> 2] = r[u + (w << 2) >> 2], r[i + (20 * w | 0) + 8 >> 2] = r[a + (w << 2) >> 2], r[i + (20 * w | 0) + 16 >> 2] = r[k + (w << 2) >> 2], r[i + (20 * w | 0) + 12 >> 2] = r[p + (w << 2) >> 2], 1 < (0 | c0); )
              ;
            for (i = 0 | r[m0 >> 2], u = 0; m0 = 0 | r[_ + (36 * (0 | r[y + ((f = (c0 = f) + -1 | 0) << 2) >> 2]) | 0) + 8 >> 2], u = (r[i + (f << 2) >> 2] = m0) + u | 0, 1 < (0 | c0); )
              ;
            if (f = 0 | r[m >> 2], r[F + 348 >> 2] = u, 0 < (0 | (r[F + 340 >> 2] = f)))
              for (a = 0 | r[i0 >> 2], i = 0 | r[n0 >> 2], u = f << 2; h[a + ((u = (n0 = u) + -4 | 0) << 2) >> 2] = 1, h[a + ((c0 = n0 + -3 | 0) << 2) >> 2] = 1, h[a + ((i0 = n0 + -2 | 0) << 2) >> 2] = 1, h[a + ((n0 = n0 + -1 | 0) << 2) >> 2] = 1, h[i + (u << 2) >> 2] = 0, h[i + (c0 << 2) >> 2] = 0, !(((h[i + (i0 << 2) >> 2] = 0) | f) <= (h[i + (n0 << 2) >> 2] = 1)); )
                f = f + -1 | 0;
          } else
            r[F + 348 >> 2] = 0, r[F + 340 >> 2] = f;
          if (S = 0 | r[O + 72 >> 2], 0 < (0 | (r[F + 480 >> 2] = S))) {
            f = 0 | r[A >> 2], i = 0 | r[P + 1152 >> 2], u = 0 | r[P + 1156 >> 2], a = 0 | r[P + 1160 >> 2], k = 0 | r[P + 1164 >> 2], p = 0 | r[P + 1148 >> 2], M = P + 1172 | 0, x = P + 1168 | 0, R = P + 1176 | 0, W = 0;
            do
              if (w = 0 | r[i + (W << 2) >> 2], r[f + (28 * W | 0) + 4 >> 2] = w, r[f + (28 * W | 0) >> 2] = r[u + (W << 2) >> 2], n0 = 0 | r[a + (W << 2) >> 2], r[f + (28 * W | 0) + 16 >> 2] = n0, _ = 0 | r[k + (W << 2) >> 2], r[f + (28 * W | 0) + 20 >> 2] = _, r[f + (28 * W | 0) + 24 >> 2] = n0 + 1 - _, _ = (r[f + (28 * W | 0) + 8 >> 2] = 0) | r[p + (W << 2) >> 2], 0 < (0 | w))
                for (y = 0 | r[f + (28 * W | 0) + 12 >> 2], m = 0 | r[M >> 2], n = 0 | r[x >> 2], I = 0 | r[R >> 2], d = 0; r[y + (d << 4) + 4 >> 2] = r[m + ((n0 = d + _ | 0) << 2) >> 2], r[y + (d << 4) >> 2] = r[n + (n0 << 2) >> 2], r[y + (d << 4) + 8 >> 2] = r[I + (n0 << 2) >> 2], (0 | (d = d + 1 | (r[y + (d << 4) + 12 >> 2] = 0))) != (0 | w); )
                  ;
            while ((0 | (W = W + 1 | 0)) != (0 | S));
          }
          i = 0 | r[O + 80 >> 2], r[(n = F + 500 | 0) >> 2] = i;
          do
            if (0 < (0 | i)) {
              for (_ = 0 | r[w0 >> 2], y = 0 | r[f0 >> 2], m = 0 | r[P + 1188 >> 2], f = 0 | r[P + 1200 >> 2], u = 0 | r[P + 1204 >> 2], a = 0 | r[P + 1212 >> 2], k = 0 | r[P + 1216 >> 2], p = 0 | r[P + 1208 >> 2], w = 0 | r[P + 1220 >> 2]; r[_ + (24 * (i = (f0 = i) + -1 | 0) | 0) >> 2] = y + (36 * (0 | r[m + (i << 2) >> 2]) | 0), r[_ + (24 * i | 0) + 4 >> 2] = r[f + (i << 2) >> 2], r[_ + (24 * i | 0) + 8 >> 2] = r[u + (i << 2) >> 2], r[_ + (24 * i | 0) + 12 >> 2] = r[a + (i << 2) >> 2], w0 = 0 | r[p + (i << 2) >> 2], r[_ + (24 * i | 0) + 16 >> 2] = k + (w0 << 2), r[_ + (24 * i | 0) + 20 >> 2] = w + (w0 << 1), 1 < (0 | f0); )
                ;
              if ((0 | (i = 0 | r[n >> 2])) <= 0) {
                f = 0;
                break;
              }
              for (u = 0 | r[v0 >> 2], f = 0; v0 = 0 | r[y + (36 * (0 | r[m + ((i = (f0 = i) + -1 | 0) << 2) >> 2]) | 0) + 8 >> 2], f = (r[u + (i << 2) >> 2] = v0) + f | 0, 1 < (0 | f0); )
                ;
              i = 0 | r[n >> 2];
            } else
              f = 0;
          while (0);
          r[F + 516 >> 2] = f, r[F + 508 >> 2] = i;
          do
            if (3 < (0 | r0[o >> 0])) {
              if ((255 & (f = 0 | U[P + 4 >> 0])) < 4)
                break;
              if (i = 0 | r[O + 120 >> 2], 0 < (0 | (r[F + 572 >> 2] = i)))
                for (y = 0 | r[F + 576 >> 2], u = 0 | r[l0 >> 2], a = 0 | r[P + 1112 >> 2], k = 0 | r[P + 1124 >> 2], p = 0 | r[P + 1116 >> 2], w = 0 | r[P + 1128 >> 2], _ = 0 | r[P + 1120 >> 2]; r[y + (20 * (i = (Q = i) + -1 | 0) | 0) >> 2] = u + (52 * (0 | r[a + (i << 2) >> 2]) | 0), l0 = 0 | r[p + (i << 2) >> 2], r[y + (20 * i | 0) + 4 >> 2] = k + (l0 << 2), r[y + (20 * i | 0) + 8 >> 2] = w + (l0 << 2), r[y + (20 * i | 0) + 12 >> 2] = r[_ + (i << 2) >> 2], 1 < (0 | Q); )
                  ;
              if (i = 0 | r[O + 100 >> 2], 0 < (0 | (r[F + 580 >> 2] = i)))
                for (u = 0 | r[F + 584 >> 2], a = 0 | r[P + 1056 >> 2], k = 0 | r[P + 1132 >> 2], p = 0 | r[P + 1052 >> 2], w = 0 | r[P + 1060 >> 2]; r[u + (28 * (i = (Q = i) + -1 | 0) | 0) >> 2] = r[a + (i << 2) >> 2], r[u + (28 * i | 0) + 4 >> 2] = k + (r[p + (i << 2) >> 2] << 2), r[u + (28 * i | 0) + 8 >> 2] = r[w + (i << 2) >> 2], r[u + (28 * i | 0) + 12 >> 2] = 0, h[u + (28 * i | 0) + 16 >> 2] = 0, r[u + (28 * i | 0) + 20 >> 2] = 1, (r[u + (28 * i | 0) + 24 >> 2] = 1) < (0 | Q); )
                  ;
              if (i = 0 | r[O + 104 >> 2], 0 < (0 | (r[F + 588 >> 2] = i))) {
                m = F + 592 | 0, I = F + 584 | 0, y = P + 1064 | 0, M = P + 1068 | 0, w = P + 1080 | 0, n = F + 576 | 0, _ = P + 1108 | 0, p = P + 1076 | 0;
                do
                  if (k = i, f = 0 | r[m >> 2], r[f + (48 * (i = i + -1 | 0) | 0) >> 2] = (0 | r[I >> 2]) + (28 * (0 | r[(0 | r[y >> 2]) + (i << 2) >> 2]) | 0), r[f + (48 * i | 0) + 4 >> 2] = r[(0 | r[M >> 2]) + (i << 2) >> 2], r[f + (48 * i | 0) + 8 >> 2] = 0, r[f + (48 * i | 0) + 28 >> 2] = 1, r[f + (48 * i | 0) + 32 >> 2] = 1, a = 0 | r[(0 | r[w >> 2]) + (i << 2) >> 2], 0 < (0 | (r[f + (48 * i | 0) + 36 >> 2] = a)))
                    for (f = f + (48 * i | 0) + 40 | 0, u = 0; r[(0 | r[f >> 2]) + (u << 2) >> 2] = (0 | r[n >> 2]) + (20 * (0 | r[(0 | r[_ >> 2]) + ((0 | r[(0 | r[p >> 2]) + (i << 2) >> 2]) + u << 2) >> 2]) | 0), (0 | (u = u + 1 | 0)) != (0 | a); )
                      ;
                while (1 < (0 | k));
                y = 0 | r[F >> 2], f = 0 | U[y + 4 >> 0];
              } else
                y = P;
              if (_ = 0 | r[b >> 2], i = 0 | r[_ + 108 >> 2], (255 & f) < 4)
                break;
              if (0 < (0 | (r[F + 596 >> 2] = i)))
                for (u = 0 | r[F + 600 >> 2], a = 0 | r[e + 1084 >> 2], k = 0 | r[e + 1092 >> 2], p = 0 | r[F + 592 >> 2], w = 0 | r[e + 1088 >> 2], f = i; r[u + (12 * (f = (b = f) + -1 | 0) | 0) >> 2] = r[a + (f << 2) >> 2], r[u + (12 * f | 0) + 4 >> 2] = r[k + (f << 2) >> 2], r[u + (12 * f | 0) + 8 >> 2] = p + (48 * (0 | r[w + (f << 2) >> 2]) | 0), 1 < (0 | b); )
                  ;
              if (f = 0 | r[_ + 112 >> 2], 0 < (0 | (r[F + 604 >> 2] = f)))
                for (u = 0 | r[F + 608 >> 2], a = 0 | r[e + 1096 >> 2], k = 0 | r[e + 1104 >> 2], p = 0 | r[F + 592 >> 2], i = 0 | r[e + 1100 >> 2]; r[u + (12 * (f = (e = f) + -1 | 0) | 0) >> 2] = r[a + (f << 2) >> 2], r[u + (12 * f | 0) + 4 >> 2] = r[k + (f << 2) >> 2], r[u + (12 * f | 0) + 8 >> 2] = p + (48 * (0 | r[i + (f << 2) >> 2]) | 0), 1 < (0 | e); )
                  ;
              if (u = 0 | r[y + 1132 >> 2], a = 0 | r[20 + (0 | r[y + 704 >> 2]) >> 2], k = F + 612 | 0, r[F + 616 >> 2] = r[y + 972 >> 2], f = 0 | r[y + 964 >> 2], r[k >> 2] = f, (0 | a) <= 0 || (r[f >> 2] = u + (r[r[(i = y + 968 | 0) >> 2] >> 2] << 2), (0 | a) == 1))
                break;
              for (f = 1; r[(0 | r[k >> 2]) + (f << 2) >> 2] = u + (r[(0 | r[i >> 2]) + (f << 2) >> 2] << 2), (0 | (f = f + 1 | 0)) != (0 | a); )
                ;
            } else {
              if ((0 | r[O + 20 >> 2]) <= 0)
                break;
              S = P + 948 | 0, O = P + 952 | 0, x = F + 612 | 0, W = P + 1032 | 0, d = P + 1036 | 0, I = P + 1132 | 0, M = F + 616 | 0, R = 0;
              do {
                if (f = 0 | r[(0 | r[S >> 2]) + (R << 2) >> 2], m = (e = 0 | r[(0 | r[O >> 2]) + (R << 2) >> 2]) + f | 0, n = 0 | r[(0 | r[x >> 2]) + (R << 2) >> 2], 0 < (0 | e)) {
                  _ = 0 | r[W >> 2], y = 0 | r[d >> 2], w = f, f = 0;
                  do
                    if (i = 0 | r[_ + (w << 2) >> 2], p = (e = 0 | r[y + (w << 2) >> 2]) + i | 0, 0 < (0 | e)) {
                      k = 0 | r[I >> 2];
                      do {
                        G = +h[k + (i << 2) >> 2], u = n + (f << 2) | 0;
                        r:
                          do
                            if (0 < (0 | f))
                              for (a = n; ; ) {
                                if (+h[a >> 2] == G)
                                  break r;
                                if (u >>> 0 <= (a = a + 4 | 0) >>> 0) {
                                  Q = 146;
                                  break;
                                }
                              }
                            else
                              Q = 146;
                          while (0);
                      } while ((0 | Q) == 146 && (Q = 0, h[u >> 2] = G, f = f + 1 | 0), (0 | (i = i + 1 | 0)) < (0 | p));
                    }
                  while ((0 | (w = w + 1 | 0)) < (0 | m));
                } else
                  f = 0;
                (function(o0, t0) {
                  o0 |= 0;
                  var u0 = 0, q = 0, g0 = 0, b0 = 0, g1 = 0, r2 = 0, Z0 = 0, G0 = 0, F2 = 0, Z2 = 0;
                  v = (Z2 = v) + 208 | 0, g0 = (t0 |= 0) << 2, r[(r2 = G0 = (Z0 = Z2) + 192 | 0) >> 2] = 1, r[r2 + 4 >> 2] = 0;
                  r:
                    do
                      if (0 | g0) {
                        for (r[Z0 + 4 >> 2] = 4, r[Z0 >> 2] = 4, u0 = t0 = 4, q = 2; t0 = t0 + 4 + u0 | 0, (r[Z0 + (q << 2) >> 2] = t0) >>> 0 < g0 >>> 0; )
                          r2 = u0, u0 = t0, q = q + 1 | 0, t0 = r2;
                        if (o0 >>> 0 < (b0 = o0 + g0 + -4 | 0) >>> 0) {
                          g1 = b0, r2 = 4 + G0 | 0, u0 = o0, q = t0 = 1;
                          do
                            do
                              if ((3 & t0 | 0) != 3) {
                                if ((0 | r[Z0 + ((g0 = q + -1 | 0) << 2) >> 2]) >>> 0 < (g1 - u0 | 0) >>> 0 ? E2(u0, q, Z0) : p2(u0, t0, 0 | r[r2 >> 2], q, 0, Z0), (0 | q) == 1) {
                                  G2(G0, 1), q = 0;
                                  break;
                                }
                                G2(G0, g0), q = 1;
                                break;
                              }
                            while (E2(u0, q, Z0), _2(G0, 2), q = q + 2 | 0, 0);
                          while (t0 = 1 | r[G0 >> 2], r[G0 >> 2] = t0, (u0 = u0 + 4 | 0) >>> 0 < b0 >>> 0);
                          g0 = 0 | r[(b0 = r2) >> 2];
                        } else
                          b0 = 4 + G0 | 0, g0 = 0, u0 = o0, q = t0 = 1;
                        for (p2(u0, t0, g0, q, 0, Z0), g0 = 4 + G0 | 0; ; ) {
                          if ((0 | q) == 1 & (0 | t0) == 1) {
                            if (!(0 | r[g0 >> 2]))
                              break r;
                            F2 = 21;
                          } else
                            (0 | q) < 2 ? F2 = 21 : (G2(G0, 2), o0 = q + -2 | 0, r[G0 >> 2] = 7 ^ r[G0 >> 2], _2(G0, 1), p2(u0 + (0 - (0 | r[Z0 + (o0 << 2) >> 2])) + -4 | 0, 0 | r[G0 >> 2], 0 | r[b0 >> 2], q + -1 | 0, 1, Z0), G2(G0, 1), t0 = 1 | r[G0 >> 2], r[G0 >> 2] = t0, p2(u0 = u0 + -4 | 0, t0, 0 | r[b0 >> 2], o0, 1, Z0), q = o0);
                          (0 | F2) == 21 && (o0 = (F2 = 0) | G1(G0), _2(G0, o0), t0 = 0 | r[G0 >> 2], u0 = u0 + -4 | 0, q = o0 + q | 0);
                        }
                      }
                    while (0);
                  v = Z2;
                })(n, f), r[(0 | r[M >> 2]) + (R << 2) >> 2] = f, R = R + 1 | 0;
              } while ((0 | R) < (0 | r[20 + (0 | r[X >> 2]) >> 2]));
            }
          while (0);
          return a1(F), v = p0, 0 | F;
        }
        function q0(e, n) {
          return 0 | ((e = +h[(e |= 0) >> 2]) < (n = +h[(n |= 0) >> 2]) ? -1 : n < e & 1);
        }
        function A1(e) {
          var n = 0 | U[(e |= 0) + 4 >> 0];
          r[e + 704 >> 2] = e + (0 | r[e + 64 >> 2]), r[e + 708 >> 2] = e + (0 | r[e + 68 >> 2]), r[e + 712 >> 2] = e + (0 | r[e + 72 >> 2]), r[e + 716 >> 2] = e + (0 | r[e + 76 >> 2]), r[e + 720 >> 2] = e + (0 | r[e + 80 >> 2]), r[e + 724 >> 2] = e + (0 | r[e + 84 >> 2]), r[e + 728 >> 2] = e + (0 | r[e + 88 >> 2]), r[e + 732 >> 2] = e + (0 | r[e + 92 >> 2]), r[e + 736 >> 2] = e + (0 | r[e + 96 >> 2]), r[e + 740 >> 2] = e + (0 | r[e + 100 >> 2]), r[e + 744 >> 2] = e + (0 | r[e + 104 >> 2]), r[e + 748 >> 2] = e + (0 | r[e + 108 >> 2]), r[e + 752 >> 2] = e + (0 | r[e + 112 >> 2]), r[e + 756 >> 2] = e + (0 | r[e + 116 >> 2]), r[e + 760 >> 2] = e + (0 | r[e + 120 >> 2]), r[e + 764 >> 2] = e + (0 | r[e + 124 >> 2]), r[e + 768 >> 2] = e + (0 | r[e + 128 >> 2]), r[e + 772 >> 2] = e + (0 | r[e + 132 >> 2]), r[e + 776 >> 2] = e + (0 | r[e + 136 >> 2]), r[e + 780 >> 2] = e + (0 | r[e + 140 >> 2]), r[e + 784 >> 2] = e + (0 | r[e + 144 >> 2]), r[e + 788 >> 2] = e + (0 | r[e + 148 >> 2]), r[e + 796 >> 2] = e + (0 | r[e + 152 >> 2]), r[e + 800 >> 2] = e + (0 | r[e + 156 >> 2]), r[e + 804 >> 2] = e + (0 | r[e + 160 >> 2]), r[e + 812 >> 2] = e + (0 | r[e + 164 >> 2]), r[e + 816 >> 2] = e + (0 | r[e + 168 >> 2]), r[e + 820 >> 2] = e + (0 | r[e + 172 >> 2]), r[e + 828 >> 2] = e + (0 | r[e + 176 >> 2]), r[e + 832 >> 2] = e + (0 | r[e + 180 >> 2]), r[e + 836 >> 2] = e + (0 | r[e + 184 >> 2]), r[e + 840 >> 2] = e + (0 | r[e + 188 >> 2]), r[e + 844 >> 2] = e + (0 | r[e + 192 >> 2]), r[e + 848 >> 2] = e + (0 | r[e + 196 >> 2]), r[e + 852 >> 2] = e + (0 | r[e + 200 >> 2]), r[e + 856 >> 2] = e + (0 | r[e + 204 >> 2]), r[e + 860 >> 2] = e + (0 | r[e + 208 >> 2]), r[e + 868 >> 2] = e + (0 | r[e + 212 >> 2]), r[e + 872 >> 2] = e + (0 | r[e + 216 >> 2]), r[e + 876 >> 2] = e + (0 | r[e + 220 >> 2]), r[e + 880 >> 2] = e + (0 | r[e + 224 >> 2]), r[e + 884 >> 2] = e + (0 | r[e + 228 >> 2]), r[e + 888 >> 2] = e + (0 | r[e + 232 >> 2]), r[e + 892 >> 2] = e + (0 | r[e + 236 >> 2]), r[e + 896 >> 2] = e + (0 | r[e + 240 >> 2]), r[e + 900 >> 2] = e + (0 | r[e + 244 >> 2]), r[e + 904 >> 2] = e + (0 | r[e + 248 >> 2]), r[e + 908 >> 2] = e + (0 | r[e + 252 >> 2]), r[e + 912 >> 2] = e + (0 | r[e + 256 >> 2]), r[e + 916 >> 2] = e + (0 | r[e + 260 >> 2]), r[e + 920 >> 2] = e + (0 | r[e + 264 >> 2]), r[e + 924 >> 2] = e + (0 | r[e + 268 >> 2]), r[e + 928 >> 2] = e + (0 | r[e + 272 >> 2]), r[e + 932 >> 2] = e + (0 | r[e + 276 >> 2]), r[e + 936 >> 2] = e + (0 | r[e + 280 >> 2]), r[e + 940 >> 2] = e + (0 | r[e + 284 >> 2]), r[e + 948 >> 2] = e + (0 | r[e + 288 >> 2]), r[e + 952 >> 2] = e + (0 | r[e + 292 >> 2]), r[e + 976 >> 2] = e + (0 | r[e + 296 >> 2]), r[e + 980 >> 2] = e + (0 | r[e + 300 >> 2]), r[e + 984 >> 2] = e + (0 | r[e + 304 >> 2]), r[e + 988 >> 2] = e + (0 | r[e + 308 >> 2]), r[e + 992 >> 2] = e + (0 | r[e + 312 >> 2]), r[e + 996 >> 2] = e + (0 | r[e + 316 >> 2]), r[e + 1e3 >> 2] = e + (0 | r[e + 320 >> 2]), r[e + 1004 >> 2] = e + (0 | r[e + 324 >> 2]), r[e + 1008 >> 2] = e + (0 | r[e + 328 >> 2]), r[e + 1012 >> 2] = e + (0 | r[e + 332 >> 2]), r[e + 1016 >> 2] = e + (0 | r[e + 336 >> 2]), r[e + 1020 >> 2] = e + (0 | r[e + 340 >> 2]), r[e + 1024 >> 2] = e + (0 | r[e + 344 >> 2]), r[e + 1028 >> 2] = e + (0 | r[e + 348 >> 2]), r[e + 1040 >> 2] = e + (0 | r[e + 352 >> 2]), r[e + 1044 >> 2] = e + (0 | r[e + 356 >> 2]), r[e + 1048 >> 2] = e + (0 | r[e + 360 >> 2]), r[e + 1032 >> 2] = e + (0 | r[e + 364 >> 2]), r[e + 1036 >> 2] = e + (0 | r[e + 368 >> 2]), r[e + 1132 >> 2] = e + (0 | r[e + 372 >> 2]), r[e + 1136 >> 2] = e + (0 | r[e + 376 >> 2]), r[e + 1140 >> 2] = e + (0 | r[e + 380 >> 2]), r[e + 1144 >> 2] = e + (0 | r[e + 384 >> 2]), r[e + 1148 >> 2] = e + (0 | r[e + 388 >> 2]), r[e + 1152 >> 2] = e + (0 | r[e + 392 >> 2]), r[e + 1156 >> 2] = e + (0 | r[e + 396 >> 2]), r[e + 1160 >> 2] = e + (0 | r[e + 400 >> 2]), r[e + 1164 >> 2] = e + (0 | r[e + 404 >> 2]), r[e + 1168 >> 2] = e + (0 | r[e + 408 >> 2]), r[e + 1172 >> 2] = e + (0 | r[e + 412 >> 2]), r[e + 1176 >> 2] = e + (0 | r[e + 416 >> 2]), r[e + 1180 >> 2] = e + (0 | r[e + 420 >> 2]), r[e + 1184 >> 2] = e + (0 | r[e + 424 >> 2]), r[e + 1188 >> 2] = e + (0 | r[e + 428 >> 2]), r[e + 1192 >> 2] = e + (0 | r[e + 432 >> 2]), r[e + 1196 >> 2] = e + (0 | r[e + 436 >> 2]), r[e + 1200 >> 2] = e + (0 | r[e + 440 >> 2]), r[e + 1204 >> 2] = e + (0 | r[e + 444 >> 2]), r[e + 1208 >> 2] = e + (0 | r[e + 448 >> 2]), r[e + 1212 >> 2] = e + (0 | r[e + 452 >> 2]), r[e + 1216 >> 2] = e + (0 | r[e + 456 >> 2]), r[e + 1220 >> 2] = e + (0 | r[e + 460 >> 2]), r[e + 1224 >> 2] = e + (0 | r[e + 464 >> 2]), (255 & n) <= 1 || (r[e + 808 >> 2] = e + (0 | r[e + 468 >> 2]), (255 & n) <= 3 || (r[e + 964 >> 2] = e + (0 | r[e + 472 >> 2]), r[e + 968 >> 2] = e + (0 | r[e + 476 >> 2]), r[e + 972 >> 2] = e + (0 | r[e + 480 >> 2]), r[e + 792 >> 2] = e + (0 | r[e + 484 >> 2]), r[e + 824 >> 2] = e + (0 | r[e + 488 >> 2]), r[e + 864 >> 2] = e + (0 | r[e + 492 >> 2]), r[e + 1228 >> 2] = e + (0 | r[e + 496 >> 2]), r[e + 1232 >> 2] = e + (0 | r[e + 500 >> 2]), r[e + 1236 >> 2] = e + (0 | r[e + 504 >> 2]), r[e + 1240 >> 2] = e + (0 | r[e + 508 >> 2]), r[e + 1244 >> 2] = e + (0 | r[e + 512 >> 2]), r[e + 1248 >> 2] = e + (0 | r[e + 516 >> 2]), r[e + 944 >> 2] = e + (0 | r[e + 520 >> 2]), r[e + 956 >> 2] = e + (0 | r[e + 524 >> 2]), r[e + 960 >> 2] = e + (0 | r[e + 528 >> 2]), r[e + 1052 >> 2] = e + (0 | r[e + 532 >> 2]), r[e + 1056 >> 2] = e + (0 | r[e + 536 >> 2]), r[e + 1060 >> 2] = e + (0 | r[e + 540 >> 2]), r[e + 1064 >> 2] = e + (0 | r[e + 544 >> 2]), r[e + 1068 >> 2] = e + (0 | r[e + 548 >> 2]), r[e + 1072 >> 2] = e + (0 | r[e + 552 >> 2]), r[e + 1076 >> 2] = e + (0 | r[e + 556 >> 2]), r[e + 1080 >> 2] = e + (0 | r[e + 560 >> 2]), r[e + 1084 >> 2] = e + (0 | r[e + 564 >> 2]), r[e + 1088 >> 2] = e + (0 | r[e + 568 >> 2]), r[e + 1092 >> 2] = e + (0 | r[e + 572 >> 2]), r[e + 1096 >> 2] = e + (0 | r[e + 576 >> 2]), r[e + 1100 >> 2] = e + (0 | r[e + 580 >> 2]), r[e + 1104 >> 2] = e + (0 | r[e + 584 >> 2]), r[e + 1108 >> 2] = e + (0 | r[e + 588 >> 2]), r[e + 1112 >> 2] = e + (0 | r[e + 592 >> 2]), r[e + 1116 >> 2] = e + (0 | r[e + 596 >> 2]), r[e + 1120 >> 2] = e + (0 | r[e + 600 >> 2]), r[e + 1124 >> 2] = e + (0 | r[e + 604 >> 2]), r[e + 1128 >> 2] = e + (0 | r[e + 608 >> 2])));
        }
        function fr(e) {
          e |= 0;
          var n, i, l, s = 0, t = 0, c = 0, A = 0, o = 0, f = 0, u = 0, a = 0, k = 0, p = 0, w = 0, _ = v;
          if (v = v + 32 | 0, t = _ + 24 | 0, r[(w = _) >> 2] = 4, r[w + 4 >> 2] = 2, r[w + 8 >> 2] = 2, function(y, m) {
            y |= 0, m |= 0;
            var I = 0, M = 0;
            v = (y = v) + 272 | 0, I = y + 16 | 0, r[(M = y) >> 2] = m, m1(I, 993, M), function(G) {
              G |= 0;
              var R = 0, x = 0;
              v = (R = v) + 16 | 0, r[(x = R) >> 2] = G, function(W, d, S) {
                W |= 0, d |= 0, S |= 0, v = (d = v) + 16 | 0, r[(W = d) >> 2] = S, w1(496, 2518, W), v = d;
              }(0, 0, x), v = R;
            }(I), v = y;
          }(0, w), 0 | p1(e))
            return T(0, 1038, _ + 16 | 0), v = _, (w = 0) | w;
          if (4 < (255 & (s = 0 | U[(c = e + 4 | 0) >> 0])))
            return r[t >> 2] = 4, r[t + 4 >> 2] = 255 & s, T(0, 1101, t), v = _, (w = 0) | w;
          if (0 | U[(s = e + 5 | 0) >> 0] ? (L0(c, 1), g(e + 64 | 0, 4, 160), U[s >> 0] = 0, A1(e), s = 0 | U[c >> 0], g(0 | r[(t = e + 704 | 0) >> 2], 4, 32), L0(0 | r[(w = e + 708 | 0) >> 2], 4), L0(4 + (0 | r[w >> 2]) | 0, 4), L0(8 + (0 | r[w >> 2]) | 0, 4), L0(12 + (0 | r[w >> 2]) | 0, 4), L0(16 + (0 | r[w >> 2]) | 0, 4), L0(20 + (0 | r[w >> 2]) | 0, 1), g(0 | r[e + 720 >> 2], 4, 0 | r[r[t >> 2] >> 2]), g(0 | r[e + 724 >> 2], 4, 0 | r[r[t >> 2] >> 2]), g(0 | r[e + 728 >> 2], 4, 0 | r[r[t >> 2] >> 2]), g(0 | r[e + 732 >> 2], 4, 0 | r[r[t >> 2] >> 2]), g(0 | r[e + 736 >> 2], 4, 0 | r[r[t >> 2] >> 2]), g(0 | r[e + 740 >> 2], 4, 0 | r[r[t >> 2] >> 2]), g(0 | r[e + 752 >> 2], 4, 0 | r[4 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 756 >> 2], 4, 0 | r[4 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 760 >> 2], 4, 0 | r[4 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 764 >> 2], 4, 0 | r[4 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 768 >> 2], 4, 0 | r[4 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 772 >> 2], 4, 0 | r[4 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 776 >> 2], 4, 0 | r[4 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 780 >> 2], 4, 0 | r[8 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 784 >> 2], 4, 0 | r[8 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 788 >> 2], 4, 0 | r[8 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 796 >> 2], 4, 0 | r[8 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 800 >> 2], 4, 0 | r[8 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 804 >> 2], 4, 0 | r[8 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 812 >> 2], 4, 0 | r[12 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 816 >> 2], 4, 0 | r[12 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 820 >> 2], 4, 0 | r[12 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 828 >> 2], 4, 0 | r[12 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 852 >> 2], 4, 0 | r[16 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 856 >> 2], 4, 0 | r[16 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 860 >> 2], 4, 0 | r[16 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 868 >> 2], 4, 0 | r[16 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 872 >> 2], 4, 0 | r[16 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 876 >> 2], 4, 0 | r[16 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 880 >> 2], 4, 0 | r[16 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 884 >> 2], 4, 0 | r[16 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 888 >> 2], 1, 0 | r[16 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 892 >> 2], 4, 0 | r[16 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 896 >> 2], 4, 0 | r[16 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 900 >> 2], 4, 0 | r[16 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 904 >> 2], 4, 0 | r[16 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 908 >> 2], 4, 0 | r[16 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 912 >> 2], 4, 0 | r[16 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 924 >> 2], 4, 0 | r[20 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 928 >> 2], 4, 0 | r[20 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 932 >> 2], 4, 0 | r[20 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 936 >> 2], 4, 0 | r[20 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 940 >> 2], 4, 0 | r[20 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 948 >> 2], 4, 0 | r[20 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 952 >> 2], 4, 0 | r[20 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 976 >> 2], 4, 0 | r[24 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 980 >> 2], 4, 0 | r[28 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 984 >> 2], 4, 0 | r[28 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 988 >> 2], 4, 0 | r[32 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 992 >> 2], 4, 0 | r[32 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 996 >> 2], 4, 0 | r[32 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1e3 >> 2], 4, 0 | r[32 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1004 >> 2], 4, 0 | r[32 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1008 >> 2], 4, 0 | r[32 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1012 >> 2], 4, 0 | r[32 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1016 >> 2], 4, 0 | r[36 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1020 >> 2], 4, 0 | r[36 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1024 >> 2], 4, 0 | r[36 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1028 >> 2], 4, 0 | r[40 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1040 >> 2], 4, 0 | r[44 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1044 >> 2], 4, 0 | r[48 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1048 >> 2], 4, 0 | r[48 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1032 >> 2], 4, 0 | r[52 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1036 >> 2], 4, 0 | r[52 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1132 >> 2], 4, 0 | r[56 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1136 >> 2], 4, 0 | r[60 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1140 >> 2], 2, 0 | r[64 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1144 >> 2], 4, 0 | r[68 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1148 >> 2], 4, 0 | r[72 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1152 >> 2], 4, 0 | r[72 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1156 >> 2], 4, 0 | r[72 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1160 >> 2], 4, 0 | r[72 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1164 >> 2], 4, 0 | r[72 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1168 >> 2], 4, 0 | r[76 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1172 >> 2], 4, 0 | r[76 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1176 >> 2], 4, 0 | r[76 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1188 >> 2], 4, 0 | r[80 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1192 >> 2], 4, 0 | r[80 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1196 >> 2], 4, 0 | r[80 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1200 >> 2], 4, 0 | r[80 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1204 >> 2], 4, 0 | r[80 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1208 >> 2], 4, 0 | r[80 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1212 >> 2], 4, 0 | r[80 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1216 >> 2], 4, 0 | r[84 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1220 >> 2], 2, 0 | r[84 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1224 >> 2], 4, 0 | r[88 + (0 | r[t >> 2]) >> 2]), 1 < (255 & s) && (g(0 | r[e + 808 >> 2], 4, 0 | r[8 + (0 | r[t >> 2]) >> 2]), 3 < (255 & s)) && (g(0 | r[e + 968 >> 2], 4, 0 | r[20 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 972 >> 2], 4, 0 | r[20 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 792 >> 2], 4, 0 | r[8 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 824 >> 2], 4, 0 | r[12 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 864 >> 2], 4, 0 | r[16 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1228 >> 2], 4, 0 | r[92 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1232 >> 2], 4, 0 | r[92 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1236 >> 2], 4, 0 | r[92 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1240 >> 2], 4, 0 | r[96 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1244 >> 2], 4, 0 | r[96 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1248 >> 2], 4, 0 | r[96 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 944 >> 2], 4, 0 | r[20 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 956 >> 2], 4, 0 | r[20 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 960 >> 2], 4, 0 | r[20 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1052 >> 2], 4, 0 | r[100 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1056 >> 2], 4, 0 | r[100 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1060 >> 2], 4, 0 | r[100 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1064 >> 2], 4, 0 | r[104 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1068 >> 2], 4, 0 | r[104 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1072 >> 2], 4, 0 | r[104 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1076 >> 2], 4, 0 | r[104 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1080 >> 2], 4, 0 | r[104 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1084 >> 2], 4, 0 | r[108 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1088 >> 2], 4, 0 | r[108 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1092 >> 2], 4, 0 | r[108 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1096 >> 2], 4, 0 | r[112 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1100 >> 2], 4, 0 | r[112 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1104 >> 2], 4, 0 | r[112 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1108 >> 2], 4, 0 | r[116 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1112 >> 2], 4, 0 | r[120 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1116 >> 2], 4, 0 | r[120 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1120 >> 2], 4, 0 | r[120 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1124 >> 2], 4, 0 | r[124 + (0 | r[t >> 2]) >> 2]), g(0 | r[e + 1128 >> 2], 4, 0 | r[124 + (0 | r[t >> 2]) >> 2]))) : (A1(e), t = e + 704 | 0), 0 | r[905] || (r[905] = 1), s = 0 | r[t >> 2], 0 < (0 | r[s >> 2]))
            for (c = e + 716 | 0, A = e + 712 | 0, o = 0; r[(0 | r[A >> 2]) + (o << 2) >> 2] = (0 | r[c >> 2]) + (o << 6), s = 0 | r[t >> 2], (0 | (o = o + 1 | 0)) < (0 | r[s >> 2]); )
              ;
          if (0 < (0 | r[s + 4 >> 2]))
            for (c = e + 748 | 0, A = e + 744 | 0, o = 0; r[(0 | r[A >> 2]) + (o << 2) >> 2] = (0 | r[c >> 2]) + (o << 6), s = 0 | r[t >> 2], (0 | (o = o + 1 | 0)) < (0 | r[s + 4 >> 2]); )
              ;
          if (0 < (0 | r[s + 16 >> 2]))
            for (f = e + 848 | 0, u = e + 832 | 0, p = e + 1136 | 0, l = e + 896 | 0, k = e + 836 | 0, a = e + 1140 | 0, n = e + 900 | 0, i = e + 840 | 0, c = e + 1144 | 0, A = e + 908 | 0, o = e + 844 | 0, w = 0; r[(0 | r[u >> 2]) + (w << 2) >> 2] = (0 | r[f >> 2]) + (w << 6), r[(0 | r[k >> 2]) + (w << 2) >> 2] = (0 | r[p >> 2]) + (r[(0 | r[l >> 2]) + (w << 2) >> 2] << 2), r[(0 | r[i >> 2]) + (w << 2) >> 2] = (0 | r[a >> 2]) + (r[(0 | r[n >> 2]) + (w << 2) >> 2] << 1), r[(0 | r[o >> 2]) + (w << 2) >> 2] = (0 | r[c >> 2]) + (r[(0 | r[A >> 2]) + (w << 2) >> 2] << 2), s = 0 | r[t >> 2], (0 | (w = w + 1 | 0)) < (0 | r[s + 16 >> 2]); )
              ;
          if (0 < (0 | r[s + 20 >> 2]))
            for (c = e + 920 | 0, A = e + 916 | 0, o = 0; r[(0 | r[A >> 2]) + (o << 2) >> 2] = (0 | r[c >> 2]) + (o << 6), s = 0 | r[t >> 2], (0 | (o = o + 1 | 0)) < (0 | r[s + 20 >> 2]); )
              ;
          if (0 < (0 | r[s + 80 >> 2]))
            for (c = e + 1184 | 0, A = e + 1180 | 0, o = 0; r[(0 | r[A >> 2]) + (o << 2) >> 2] = (0 | r[c >> 2]) + (o << 6), s = 0 | r[t >> 2], (0 | (o = o + 1 | 0)) < (0 | r[s + 80 >> 2]); )
              ;
          if (1 & U[20 + (0 | r[e + 708 >> 2]) >> 0] || (0 | (a = 0 | r[s + 16 >> 2])) <= 0)
            return v = _, 0 | (w = e);
          s = 0 | r[e + 1140 >> 2], t = 0 | r[e + 900 >> 2], c = 0 | r[e + 904 >> 2], o = 0;
          do
            if (A = s + (r[t + (o << 2) >> 2] << 1) | 0, u = (w = 0 | r[c + (o << 2) >> 2]) + -1 | 0, 1 < (0 | w))
              for (f = 0; p = 0 | a0[(k = A + (f << 1) | 0) >> 1], a0[k >> 1] = 0 | a0[(w = A + (f + 2 << 1) | 0) >> 1], a0[w >> 1] = p, (0 | (f = f + 3 | 0)) < (0 | u); )
                ;
          while ((0 | (o = o + 1 | 0)) != (0 | a));
          t = 0 | r[e + 1136 >> 2], c = 0 | r[e + 896 >> 2], A = 0 | r[e + 892 >> 2], f = 0;
          do
            if (o = (s = t + (r[c + (f << 2) >> 2] << 2) | 0) + ((w = 0 | r[A + (f << 2) >> 2]) << 1 << 2) | 0, 0 < (0 | w))
              for (s = s + 4 | 0; h[s >> 2] = 1 - +h[s >> 2], (s = s + 8 | 0) >>> 0 < o >>> 0; )
                ;
          while ((0 | (f = f + 1 | 0)) != (0 | a));
          return v = _, 0 | e;
        }
        function or(e) {
          var n = v;
          return v = v + 16 | 0, 0 | p1(e |= 0) ? (T(0, 1210, n), v = n, (e = 0) | e) : (e = 0 | r0[e + 4 >> 0], v = n, 0 | e);
        }
        function Ar(e) {
          var n, i, l, s, u = 0, f = 0, t = 0, c = 0, A = 0, o = 0, f = (e |= 0) + 64 | 0, u = e + 144 | 0;
          if (k0(f, 0 | r[e + 88 >> 2], 0 | r[e + 148 >> 2], 0 | r[u >> 2]), u1(f, 0 | r[e + 92 >> 2], 0 | r[e + 152 >> 2], 0 | r[796 + (0 | r[e >> 2]) >> 2], 2, 0 | r[u >> 2]), !((0 | r0[4 + (0 | r[e >> 2]) >> 0]) < 4 || (k0(f, 0 | r[e + 96 >> 2], 0 | r[(s = e + 120 | 0) >> 2], 0 | r[u >> 2]), k0(f, 0 | r[e + 100 >> 2], 0 | r[(t = e + 124 | 0) >> 2], 0 | r[u >> 2]), k0(f, 0 | r[e + 104 >> 2], 0 | r[(c = e + 128 | 0) >> 2], 0 | r[u >> 2]), k0(f, 0 | r[e + 108 >> 2], 0 | r[(n = e + 132 | 0) >> 2], 0 | r[u >> 2]), k0(f, 0 | r[e + 112 >> 2], 0 | r[(i = e + 136 | 0) >> 2], 0 | r[u >> 2]), k0(f, 0 | r[e + 116 >> 2], 0 | r[(l = e + 140 | 0) >> 2], 0 | r[u >> 2]), u = 0 | r[e + 156 >> 2], f = 0 | r[s >> 2], t = 0 | r[t >> 2], c = 0 | r[c >> 2], (0 | (s = 0 | r[e + 56 >> 2])) <= 0))) {
            for (o = A = 0; r[u + (A << 2) >> 2] = r[f + (o << 2) >> 2], r[u + ((1 | A) << 2) >> 2] = r[t + (o << 2) >> 2], r[u + ((2 | A) << 2) >> 2] = r[c + (o << 2) >> 2], (0 | (o = o + 1 | 0)) != (0 | s); )
              A = A + 4 | 0;
            for (o = 0 | r[e + 160 >> 2], A = 0 | r[n >> 2], c = 0 | r[i >> 2], u = 0 | r[l >> 2], t = f = 0; r[o + (f << 2) >> 2] = r[A + (t << 2) >> 2], r[o + ((1 | f) << 2) >> 2] = r[c + (t << 2) >> 2], r[o + ((2 | f) << 2) >> 2] = r[u + (t << 2) >> 2], (0 | (t = t + 1 | 0)) != (0 | s); )
              f = f + 4 | 0;
          }
        }
        function sr(e) {
          var n, i, l, s, u = 0, f = 0, t = 0, c = 0, A = 0, o = 0, f = (e |= 0) + 172 | 0, u = e + 264 | 0;
          if (k0(f, 0 | r[e + 196 >> 2], 0 | r[e + 268 >> 2], 0 | r[u >> 2]), k0(f, 0 | r[e + 200 >> 2], 0 | r[e + 284 >> 2], 0 | r[u >> 2]), k0(f, 0 | r[e + 204 >> 2], 0 | r[e + 276 >> 2], 0 | r[u >> 2]), k0(f, 0 | r[e + 208 >> 2], 0 | r[e + 280 >> 2], 0 | r[u >> 2]), k0(f, 0 | r[e + 212 >> 2], 0 | r[e + 272 >> 2], 0 | r[u >> 2]), !((0 | r0[4 + (0 | r[e >> 2]) >> 0]) < 4 || (k0(f, 0 | r[e + 216 >> 2], 0 | r[(s = e + 240 | 0) >> 2], 0 | r[u >> 2]), k0(f, 0 | r[e + 220 >> 2], 0 | r[(t = e + 244 | 0) >> 2], 0 | r[u >> 2]), k0(f, 0 | r[e + 224 >> 2], 0 | r[(c = e + 248 | 0) >> 2], 0 | r[u >> 2]), k0(f, 0 | r[e + 228 >> 2], 0 | r[(n = e + 252 | 0) >> 2], 0 | r[u >> 2]), k0(f, 0 | r[e + 232 >> 2], 0 | r[(i = e + 256 | 0) >> 2], 0 | r[u >> 2]), k0(f, 0 | r[e + 236 >> 2], 0 | r[(l = e + 260 | 0) >> 2], 0 | r[u >> 2]), u = 0 | r[e + 296 >> 2], f = 0 | r[s >> 2], t = 0 | r[t >> 2], c = 0 | r[c >> 2], (0 | (s = 0 | r[e + 164 >> 2])) <= 0))) {
            for (o = A = 0; r[u + (A << 2) >> 2] = r[f + (o << 2) >> 2], r[u + ((1 | A) << 2) >> 2] = r[t + (o << 2) >> 2], r[u + ((2 | A) << 2) >> 2] = r[c + (o << 2) >> 2], (0 | (o = o + 1 | 0)) != (0 | s); )
              A = A + 4 | 0;
            for (o = 0 | r[e + 300 >> 2], A = 0 | r[n >> 2], c = 0 | r[i >> 2], u = 0 | r[l >> 2], t = f = 0; r[o + (f << 2) >> 2] = r[A + (t << 2) >> 2], r[o + ((1 | f) << 2) >> 2] = r[c + (t << 2) >> 2], r[o + ((2 | f) << 2) >> 2] = r[u + (t << 2) >> 2], (0 | (t = t + 1 | 0)) != (0 | s); )
              f = f + 4 | 0;
          }
        }
        function ur(e) {
          var n, i, l, s, u = 0, f = 0, t = 0, c = 0, A = 0, o = 0, f = (e |= 0) + 340 | 0, u = e + 424 | 0;
          if (k0(f, 0 | r[e + 364 >> 2], 0 | r[e + 448 >> 2], 0 | r[u >> 2]), s1(f, 0 | r[e + 368 >> 2], 0 | r[e + 440 >> 2], 0 | r[u >> 2]), u1(f, 0 | r[e + 372 >> 2], 0 | r[e + 444 >> 2], 0 | r[892 + (0 | r[e >> 2]) >> 2], 2, 0 | r[u >> 2]), !((0 | r0[4 + (0 | r[e >> 2]) >> 0]) < 4 || (k0(f, 0 | r[e + 376 >> 2], 0 | r[(s = e + 400 | 0) >> 2], 0 | r[u >> 2]), k0(f, 0 | r[e + 380 >> 2], 0 | r[(t = e + 404 | 0) >> 2], 0 | r[u >> 2]), k0(f, 0 | r[e + 384 >> 2], 0 | r[(c = e + 408 | 0) >> 2], 0 | r[u >> 2]), k0(f, 0 | r[e + 388 >> 2], 0 | r[(n = e + 412 | 0) >> 2], 0 | r[u >> 2]), k0(f, 0 | r[e + 392 >> 2], 0 | r[(i = e + 416 | 0) >> 2], 0 | r[u >> 2]), k0(f, 0 | r[e + 396 >> 2], 0 | r[(l = e + 420 | 0) >> 2], 0 | r[u >> 2]), u = 0 | r[e + 452 >> 2], f = 0 | r[s >> 2], t = 0 | r[t >> 2], c = 0 | r[c >> 2], (0 | (s = 0 | r[e + 332 >> 2])) <= 0))) {
            for (o = A = 0; r[u + (A << 2) >> 2] = r[f + (o << 2) >> 2], r[u + ((1 | A) << 2) >> 2] = r[t + (o << 2) >> 2], r[u + ((2 | A) << 2) >> 2] = r[c + (o << 2) >> 2], (0 | (o = o + 1 | 0)) != (0 | s); )
              A = A + 4 | 0;
            for (o = 0 | r[e + 456 >> 2], A = 0 | r[n >> 2], c = 0 | r[i >> 2], u = 0 | r[l >> 2], t = f = 0; r[o + (f << 2) >> 2] = r[A + (t << 2) >> 2], r[o + ((1 | f) << 2) >> 2] = r[c + (t << 2) >> 2], r[o + ((2 | f) << 2) >> 2] = r[u + (t << 2) >> 2], (0 | (t = t + 1 | 0)) != (0 | s); )
              f = f + 4 | 0;
          }
        }
        function k0(e, n, i, l) {
          n |= 0, i |= 0, l |= 0;
          var s, t, c, A = 0, o = 0, f = 0, u = 0, a = 0, k = 0;
          if (0 < (0 | (A = 0 | r[(e |= 0) + 8 >> 2])))
            for (o = 0 | r[e + 20 >> 2], f = 0 | r[e + 12 >> 2], u = 0; h[f + (u << 2) >> 2] = +h[n + (u << 2) >> 2] * +h[o + (u << 2) >> 2], (0 | (u = u + 1 | 0)) != (0 | A); )
              ;
          if (!((0 | (t = 0 | r[e >> 2])) <= 0))
            if (k = e + 16 | 0, c = 0 | r[e + 4 >> 2], s = e + 12 | 0, l)
              for (n = u = 0; ; ) {
                if (0 | r[l >> 2]) {
                  if (o = (e = 0 | r[(0 | r[k >> 2]) + (n << 2) >> 2]) + u | 0, 0 < (0 | e))
                    for (A = 0 | r[s >> 2], f = u, a = 0; a += +h[A + (f << 2) >> 2], (0 | (f = f + 1 | 0)) < (0 | o); )
                      ;
                  else
                    a = 0;
                  h[i + (n << 2) >> 2] = a;
                }
                if ((0 | (A = n + 1 | 0)) == (0 | t))
                  break;
                l = l + 4 | 0, u = (0 | r[c + (n << 2) >> 2]) + u | 0, n = A;
              }
            else
              for (u = 0 | r[k >> 2], e = n = 0; ; ) {
                if (o = (k = 0 | r[u + (e << 2) >> 2]) + n | 0, 0 < (0 | k))
                  for (A = 0 | r[s >> 2], f = n, a = 0; a += +h[A + (f << 2) >> 2], (0 | (f = f + 1 | 0)) < (0 | o); )
                    ;
                else
                  a = 0;
                if (h[i + (e << 2) >> 2] = a, (0 | (A = e + 1 | 0)) == (0 | t))
                  break;
                n = (0 | r[c + (e << 2) >> 2]) + n | 0, e = A;
              }
        }
        function s1(e, n, i, l) {
          n |= 0, i |= 0, l |= 0;
          var s, t, c = 0, A = 0, o = 0, f = 0, u = 0, a = 0;
          if (0 < (0 | (c = 0 | r[(e |= 0) + 8 >> 2])))
            for (A = 0 | r[e + 20 >> 2], o = 0 | r[e + 12 >> 2], f = 0; h[o + (f << 2) >> 2] = +h[n + (f << 2) >> 2] * +h[A + (f << 2) >> 2], (0 | (f = f + 1 | 0)) != (0 | c); )
              ;
          if (!((0 | (c = 0 | r[e >> 2])) <= 0))
            if (a = e + 16 | 0, s = 0 | r[e + 4 >> 2], t = e + 12 | 0, l)
              for (n = f = 0; ; ) {
                if (0 | r[l >> 2]) {
                  if (A = (o = 0 | r[(0 | r[a >> 2]) + (n << 2) >> 2]) + f | 0, 0 < (0 | o))
                    for (c = 0 | r[t >> 2], o = f, u = 0; u += +h[c + (o << 2) >> 2], (0 | (o = o + 1 | 0)) < (0 | A); )
                      ;
                  else
                    u = 0;
                  r[i + (n << 2) >> 2] = ~~(u + 0.0010000000474974513), c = 0 | r[e >> 2];
                }
                if (!((0 | (A = n + 1 | 0)) < (0 | c)))
                  break;
                l = l + 4 | 0, f = (0 | r[s + (n << 2) >> 2]) + f | 0, n = A;
              }
            else
              for (f = 0 | r[a >> 2], l = n = 0; ; ) {
                if (A = (a = 0 | r[f + (l << 2) >> 2]) + n | 0, 0 < (0 | a))
                  for (c = 0 | r[t >> 2], o = n, u = 0; u += +h[c + (o << 2) >> 2], (0 | (o = o + 1 | 0)) < (0 | A); )
                    ;
                else
                  u = 0;
                if (r[i + (l << 2) >> 2] = ~~(u + 0.0010000000474974513), !((0 | (c = l + 1 | 0)) < (0 | r[e >> 2])))
                  break;
                n = (0 | r[s + (l << 2) >> 2]) + n | 0, l = c;
              }
        }
        function u1(e, n, i, l, s, t) {
          n |= 0, i |= 0, l |= 0, s |= 0, t |= 0;
          var c, A, o, f, u, a = 0, k = 0, p = 0, w = 0, _ = 0, y = 0, m = 0, I = 0, M = 0, G = 0 | r[(e |= 0) >> 2];
          if (!((0 | G) <= 0))
            if (f = e + 16 | 0, o = 0 | r[e + 4 >> 2], A = e + 20 | 0, c = s << 2, t)
              for (I = m = 0; ; ) {
                if (0 | r[t >> 2] && (w = 0 | r[i + (I << 2) >> 2], e = 0 | r[l + (I << 2) >> 2], y = 0 | h0(e, s), _ = (a = 0 | r[(0 | r[f >> 2]) + (I << 2) >> 2]) + m | 0, (p = 0 < (0 | y)) && B0(0 | w, 0, 0 | h0(c, e)), 0 < (0 | a) && (M = 0 | r[A >> 2], p))) {
                  a = m;
                  do
                    for (e = 0 | r[n + (a << 2) >> 2], k = +h[M + (a << 2) >> 2], p = 0; h[(u = w + (p << 2) | 0) >> 2] = +h[u >> 2] + k * +h[e + (p << 2) >> 2], (0 | (p = p + 1 | 0)) != (0 | y); )
                      ;
                  while ((0 | (a = a + 1 | 0)) < (0 | _));
                }
                if ((0 | (e = I + 1 | 0)) == (0 | G))
                  break;
                t = t + 4 | 0, m = (0 | r[o + (I << 2) >> 2]) + m | 0, I = e;
              }
            else
              for (m = y = 0; ; ) {
                if (p = 0 | r[i + (m << 2) >> 2], e = 0 | r[l + (m << 2) >> 2], _ = 0 | h0(e, s), w = (t = 0 | r[(0 | r[f >> 2]) + (m << 2) >> 2]) + y | 0, (a = 0 < (0 | _)) && B0(0 | p, 0, 0 | h0(c, e)), 0 < (0 | t) && (I = 0 | r[A >> 2], a)) {
                  t = y;
                  do
                    for (e = 0 | r[n + (t << 2) >> 2], k = +h[I + (t << 2) >> 2], a = 0; h[(M = p + (a << 2) | 0) >> 2] = +h[M >> 2] + k * +h[e + (a << 2) >> 2], (0 | (a = a + 1 | 0)) != (0 | _); )
                      ;
                  while ((0 | (t = t + 1 | 0)) < (0 | w));
                }
                if ((0 | (e = m + 1 | 0)) == (0 | G))
                  break;
                y = (0 | r[o + (m << 2) >> 2]) + y | 0, m = e;
              }
        }
        function c1(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | function(l) {
            l |= 0;
            var s, t, c = v;
            return v = v + 560 | 0, s = (t = c) + 548 | 0, B0(0 | t, 0, 548), o1(l, t, s), v = c, 0 | r[s >> 2];
          }(e), v = i, 0 | n) : (r[n >> 2] = 1515, r[n + 4 >> 2] = 1533, T(0, 1269, n), v = i, (n = 0) | n);
        }
        function l1(e, n, i) {
          n |= 0, i |= 0;
          var l, s, t = 0, c = 0, A = v;
          return v = v + 32 | 0, c = A + 24 | 0, s = A + 16 | 0, t = A + 8 | 0, l = A, (e |= 0) ? n ? ((t = n) + 15 & -16 | 0) != (0 | t) ? (r[s >> 2] = 1551, r[4 + s >> 2] = 1342, T(0, 1269, s), v = A, (c = 0) | c) : (n = 0 | ir(e, n, i)) ? (v = A, 0 | (c = n)) : (r[c >> 2] = 1551, r[c + 4 >> 2] = 1577, T(0, 1269, c), v = A, (c = 0) | c) : (r[t >> 2] = 1551, r[t + 4 >> 2] = 1303, T(0, 1269, t), v = A, (c = 0) | c) : (r[l >> 2] = 1551, r[l + 4 >> 2] = 1533, T(0, 1269, l), v = A, (c = 0) | c);
        }
        function cr(e, n, i, l) {
          if (i = +i, l = +l, (n = +R0(+(n = +n), +(e = +e)) - +R0(+l, +i)) < -3.1415927410125732)
            for (; (n += 6.2831854820251465) < -3.1415927410125732; )
              ;
          if (!(3.1415927410125732 < n))
            return +(i = n);
          for (; 3.1415927410125732 < (n += -6.2831854820251465); )
            ;
          return +n;
        }
        function L0(e, n) {
          e |= 0, n |= 0;
          var i;
          if (!((n = e + n + -1 | 0) >>> 0 <= e >>> 0))
            for (; i = 0 | U[e >> 0], U[e >> 0] = 0 | U[n >> 0], e = e + 1 | 0, U[n >> 0] = i, e >>> 0 < (n = n + -1 | 0) >>> 0; )
              ;
        }
        function g(e, n, i) {
          e |= 0, n |= 0;
          var l, s = 0, t = 0;
          if (i |= 0)
            do
              if (i = i + -1 | 0, (t = e) >>> 0 < (s = (e = e + n | 0) + -1 | 0) >>> 0)
                for (; l = 0 | U[t >> 0], U[t >> 0] = 0 | U[s >> 0], t = t + 1 | 0, U[s >> 0] = l, t >>> 0 < (s = s + -1 | 0) >>> 0; )
                  ;
            while (0 | i);
        }
        function lr(e) {
          var n, i, l, s = 0, t = 0, c = 0, A = 0, y = 0, m = 0, I = 0, o = 0, _ = 0, f = 0, u = 0, a = 0, k = 0, p = 0, w = (s = 0 | r[(i = (e |= 0) + 336 | 0) >> 2]) + (20 * (o = 0 | r[(l = e + 332 | 0) >> 2]) | 0) | 0, _ = e + 424 | 0, y = 0 | r[e + 48 >> 2], m = 0 | r[e + 316 >> 2], I = 0 | r[e + 308 >> 2];
          if (0 < (0 | o))
            for (o = 0 | r[_ >> 2], c = 0 | r[e + 448 >> 2], A = 0 | r[e + 444 >> 2]; 0 | r[o >> 2] && ((0 | (t = 0 | r[s + 4 >> 2])) != -1 && (h[c >> 2] = +h[y + (t << 2) >> 2] * +h[c >> 2]), (0 | (t = 0 | r[s + 8 >> 2])) != -1 && (h[c >> 2] = +h[m + (t << 2) >> 2] * +h[c >> 2], u = 0 | r[A >> 2], $0[3 & r[I + (t << 5) + 24 >> 2]](e, t, u, u, 0 | r[s + 16 >> 2]))), !(w >>> 0 <= (s = s + 20 | 0) >>> 0); )
              o = o + 4 | 0, c = c + 4 | 0, A = A + 4 | 0;
          if (!((0 | r0[4 + (0 | r[e >> 2]) >> 0]) < 4 || (I = (s = 0 | r[i >> 2]) + (20 * (u = 0 | r[l >> 2]) | 0) | 0, y = 0 | r[e + 324 >> 2], m = 0 | r[e + 328 >> 2], (0 | u) <= 0)))
            for (A = 0 | r[_ >> 2], t = s, c = 0 | r[e + 452 >> 2], s = 0 | r[e + 456 >> 2]; 0 | r[A >> 2] && (0 | (f = 0 | r[t + 8 >> 2])) != -1 && (a = +h[c >> 2] * +h[(l = y + ((_ = f << 2) << 2) | 0) >> 2], h[c >> 2] = a, k = +h[(u = c + 4 | 0) >> 2] * +h[4 + l >> 2], h[u >> 2] = k, p = +h[(e = c + 8 | 0) >> 2] * +h[8 + l >> 2], h[c >> 2] = a < 0 ? 0 : 1 < a ? 1 : a, h[u >> 2] = k < 0 ? 0 : 1 < k ? 1 : k, h[e >> 2] = p < 0 ? 0 : 1 < p ? 1 : p, h[c + 12 >> 2] = 1, p = +h[s >> 2], k = +h[(_ = m + (_ << 2) | 0) >> 2], h[s >> 2] = k = p + k - p * k, p = +h[(e = s + 4 | 0) >> 2], a = +h[_ + 4 >> 2], h[e >> 2] = a = p + a - p * a, n = (p = +h[(u = s + 8 | 0) >> 2]) + (n = +h[_ + 8 >> 2]) - p * n, h[s >> 2] = k < 0 ? 0 : 1 < k ? 1 : k, h[e >> 2] = a < 0 ? 0 : 1 < a ? 1 : a, h[u >> 2] = n < 0 ? 0 : 1 < n ? 1 : n, h[s + 12 >> 2] = 1), !(I >>> 0 <= (t = t + 20 | 0) >>> 0); )
              A = A + 4 | 0, c = c + 16 | 0, s = s + 16 | 0;
        }
        function ar(e) {
          var n, i = 0 | r[(e |= 0) + 332 >> 2];
          0 | r[e + 428 >> 2] && (H0(0 | r[e + 460 >> 2], 0 | r[e + 436 >> 2], 0 | (n = i << 2)), H0(0 | r[e + 464 >> 2], 0 | r[e + 440 >> 2], 0 | n), H0(0 | r[e + 468 >> 2], 0 | r[e + 448 >> 2], 0 | n), (0 | r0[4 + (0 | r[e >> 2]) >> 0]) <= 3 || (H0(0 | r[e + 472 >> 2], 0 | r[e + 452 >> 2], 0 | (n = i << 4)), H0(0 | r[e + 476 >> 2], 0 | r[e + 456 >> 2], 0 | n)));
        }
        function mr(e) {
          var n, i, l, s, t, c, A, o, f, u, a, R = 0, M = 0, k = 0, p = 0, w = 0, _ = 0, y = 0, m = 0, I = 0, M = 0 | U[4 + (0 | r[(e |= 0) >> 2]) >> 0], G = 0 | r[e + 332 >> 2], R = e + 428 | 0;
          if (0 | r[e + 620 >> 2]) {
            if (!(((r[R >> 2] = 0) | G) <= 0))
              for (p = e + 424 | 0, w = e + 432 | 0, R = e + 448 | 0, M = 0; k = 0 | r[(0 | r[p >> 2]) + (M << 2) >> 2] && +h[(0 | r[R >> 2]) + (M << 2) >> 2] != 0 ? 127 : 126, U[(0 | r[w >> 2]) + M >> 0] = k, (0 | (M = M + 1 | 0)) != (0 | G); )
                ;
          } else if (0 | r[R >> 2]) {
            if (!(((r[R >> 2] = 0) | G) <= 0))
              if (l = e + 424 | 0, c = e + 432 | 0, t = e + 448 | 0, o = e + 468 | 0, s = e + 440 | 0, A = e + 464 | 0, u = e + 436 | 0, f = e + 460 | 0, n = e + 452 | 0, _ = e + 472 | 0, i = e + 456 | 0, w = e + 476 | 0, (255 & M) <= 3)
                for (R = 0; _ = (0 | r[(0 | r[l >> 2]) + (R << 2) >> 2]) == 0, I = +h[(0 | r[t >> 2]) + (R << 2) >> 2], m = (0 | r[c >> 2]) + R | 0, y = (1 & U[m >> 0]) == (y = I != 0 & (1 ^ _) & 1) << 24 >> 24 ? y : 2 | y, y = I != +h[(0 | r[o >> 2]) + (R << 2) >> 2] ? 4 | y : y, y = (0 | r[(0 | r[s >> 2]) + (R << 2) >> 2]) == (0 | r[(0 | r[A >> 2]) + (R << 2) >> 2]) ? y : 8 | y, y = (0 | r[(0 | r[u >> 2]) + (R << 2) >> 2]) == (0 | r[(0 | r[f >> 2]) + (R << 2) >> 2]) ? y : 16 | y, U[m >> 0] = _ ? y : 32 | y, (0 | (R = R + 1 | 0)) != (0 | G); )
                  ;
              else
                for (p = k = 0; a = (0 | r[(0 | r[l >> 2]) + (k << 2) >> 2]) == 0, I = +h[(0 | r[t >> 2]) + (k << 2) >> 2], M = (0 | r[c >> 2]) + k | 0, R = (1 & U[M >> 0]) == (R = I != 0 & (1 ^ a) & 1) << 24 >> 24 ? R : 2 | R, R = I != +h[(0 | r[o >> 2]) + (k << 2) >> 2] ? 4 | R : R, R = (0 | r[(0 | r[s >> 2]) + (k << 2) >> 2]) == (0 | r[(0 | r[A >> 2]) + (k << 2) >> 2]) ? R : 8 | R, R = (0 | r[(0 | r[u >> 2]) + (k << 2) >> 2]) == (0 | r[(0 | r[f >> 2]) + (k << 2) >> 2]) ? R : 16 | R, R = a ? R : 32 | R, a = (0 | r[n >> 2]) + (p << 2) | 0, e = (0 | r[_ >> 2]) + (p << 2) | 0, +h[a >> 2] == +h[e >> 2] && +h[4 + a >> 2] == +h[e + 4 >> 2] && +h[8 + a >> 2] == +h[e + 8 >> 2] && +h[12 + a >> 2] == +h[e + 12 >> 2] && (y = (0 | r[i >> 2]) + (p << 2) | 0, m = (0 | r[w >> 2]) + (p << 2) | 0, +h[y >> 2] == +h[m >> 2]) && +h[y + 4 >> 2] == +h[m + 4 >> 2] && +h[y + 8 >> 2] == +h[m + 8 >> 2] && +h[y + 12 >> 2] == +h[m + 12 >> 2] || (R |= 64), U[M >> 0] = R, (0 | (k = k + 1 | 0)) != (0 | G); )
                  p = p + 4 | 0;
          } else if (!((0 | G) <= 0))
            for (k = e + 424 | 0, p = e + 432 | 0, R = e + 448 | 0, M = 0; 0 | r[(0 | r[k >> 2]) + (M << 2) >> 2] && +h[(0 | r[R >> 2]) + (M << 2) >> 2] != 0 ? (m = (0 | r[p >> 2]) + M | 0, U[m >> 0] = 1 | U[m >> 0]) : (m = (0 | r[p >> 2]) + M | 0, U[m >> 0] = -2 & U[m >> 0]), (0 | (M = M + 1 | 0)) != (0 | G); )
              ;
        }
        function wr(e) {
          var n, i, l, s, t, c, A, H = 0, o = 0, f = 0, u = 0, a = 0, k = 0, p = 0, N = 0, e0 = 0, K = 0, $ = 0, w = 0, _ = 0, y = 0, m = 0, I = 0, M = 0, G = 0, R = 0, x = 0, W = 0, d = 0, S = 0, O = 0, X = 0, P = 0, Z = 0, N = 0 | r[(c = (e |= 0) + 60 | 0) >> 2], H = 0 | r[e >> 2], e0 = 0 | r[H + 784 >> 2], K = 0 | r[(A = e + 56 | 0) >> 2], $ = 0 | r[H + 1028 >> 2];
          if (0 < (0 | K)) {
            for (I = e + 80 | 0, R = e + 92 | 0, G = e + 88 | 0, x = e + 84 | 0, M = H + 984 | 0, a = H + 980 | 0, p = k = 0; ; ) {
              if (u = 0 | r[N + (24 * k | 0) >> 2], (0 | (S = 0 | r[(H = u + 24 | 0) >> 2] || 0 | r[u + 28 >> 2] ? 15 : S)) == 15 && (r[((S = 0) | r[I >> 2]) + (k << 2) >> 2] = r[(m = u + 12 | 0) >> 2], 0 | r[H >> 2]) && (w = 0 | r[e0 + (k << 2) >> 2], W = (_ = 0 | r[u + 16 >> 2]) + ((O = 0 | r[m >> 2]) << 2) | 0, 0 < (0 | O)))
                for (H = _, o = (0 | r[G >> 2]) + (p << 2) | 0, f = (0 | r[R >> 2]) + (p << 2) | 0; O = (0 | r[H >> 2]) + w | 0, r[f >> 2] = $ + (r[(0 | r[M >> 2]) + (O << 2) >> 2] << 2), r[o >> 2] = r[(0 | r[a >> 2]) + (O << 2) >> 2], !(W >>> 0 <= (H = H + 4 | 0) >>> 0); )
                  o = o + 4 | 0, f = f + 4 | 0;
              if (0 | r[u + 28 >> 2] && (d = (y = 0 | r[u + 20 >> 2]) + ((O = 0 | r[u + 12 >> 2]) << 2) | 0, 0 < (0 | O)))
                for (H = (0 | r[x >> 2]) + (p << 2) | 0, o = y; r[H >> 2] = r[o >> 2], !(d >>> 0 <= (o = o + 4 | 0) >>> 0); )
                  H = H + 4 | 0;
              if ((0 | (k = k + 1 | 0)) == (0 | K))
                break;
              p = (0 | r[u + 8 >> 2]) + p | 0;
            }
            H = 0 | r[e >> 2];
          }
          if (!((0 | r0[H + 4 >> 0]) < 4 || (t = 0 | r[c >> 2], O = 0 | r[H + 792 >> 2], (0 | (c = 0 | r[A >> 2])) <= 0)))
            for (i = e + 96 | 0, n = e + 100 | 0, A = e + 104 | 0, s = e + 108 | 0, l = e + 112 | 0, S = e + 116 | 0, W = H + 1228 | 0, R = H + 1232 | 0, G = H + 1236 | 0, d = H + 1240 | 0, x = H + 1244 | 0, N = H + 1248 | 0, K = e0 = 0; ; ) {
              if (H = 0 | r[t + (24 * e0 | 0) >> 2], 0 | r[H + 24 >> 2] && (X = 0 | r[O + (e0 << 2) >> 2], Z = (P = 0 | r[H + 16 >> 2]) + ((e = 0 | r[H + 12 >> 2]) << 2) | 0, 0 < (0 | e)))
                for (o = 0 | r[W >> 2], f = 0 | r[R >> 2], u = 0 | r[G >> 2], a = 0 | r[d >> 2], k = 0 | r[x >> 2], p = 0 | r[N >> 2], $ = P, w = (0 | r[A >> 2]) + (K << 2) | 0, _ = (0 | r[n >> 2]) + (K << 2) | 0, y = (0 | r[i >> 2]) + (K << 2) | 0, m = (0 | r[S >> 2]) + (K << 2) | 0, I = (0 | r[l >> 2]) + (K << 2) | 0, M = (0 | r[s >> 2]) + (K << 2) | 0; e = (0 | r[$ >> 2]) + X | 0, r[y >> 2] = r[o + (e << 2) >> 2], r[_ >> 2] = r[f + (e << 2) >> 2], r[w >> 2] = r[u + (e << 2) >> 2], r[M >> 2] = r[a + (e << 2) >> 2], r[I >> 2] = r[k + (e << 2) >> 2], r[m >> 2] = r[p + (e << 2) >> 2], !(Z >>> 0 <= ($ = $ + 4 | 0) >>> 0); )
                  w = w + 4 | 0, _ = _ + 4 | 0, y = y + 4 | 0, m = m + 4 | 0, I = I + 4 | 0, M = M + 4 | 0;
              if ((0 | (e0 = e0 + 1 | 0)) == (0 | c))
                break;
              K = (0 | r[H + 8 >> 2]) + K | 0;
            }
        }
        function kr(e) {
          var n, i, l, s, t, c, A = 0, o = 0, f = 0, u = 0, a = 0, k = 0, p = 0, w = 0, _ = 0, y = 0, m = 0, I = 0, M = 0, G = 0, p0 = 0, R = 0, x = 0, W = 0, d = 0, S = 0, O = 0, X = 0, P = 0, Z = 0, N = 0, H = 0, e0 = 0, K = 0, $ = 0, m0 = 0, c0 = 0, i0 = 0, n0 = 0, w0 = 0, v0 = 0, f0 = 0, l0 = 0, Q = 0, b = 0 | r[(e |= 0) + 168 >> 2], F = 0 | r[e >> 2], p0 = 0 | r[816 + F >> 2];
          if (0 < (0 | (R = 0 | r[(c = e + 164 | 0) >> 2])))
            for (Z = e + 188 | 0, S = e + 200 | 0, K = e + 204 | 0, m0 = e + 208 | 0, s = e + 212 | 0, N = e + 196 | 0, t = e + 192 | 0, d = 992 + F | 0, e0 = 996 + F | 0, $ = 1e3 + F | 0, l = 1004 + F | 0, H = 988 + F | 0, n = 1008 + F | 0, O = e + 288 | 0, i = 1012 + F | 0, X = e + 292 | 0, n0 = i0 = 0; ; ) {
              if (x = 0 | r[b + (12 * i0 | 0) >> 2], (0 | (w0 = 0 | r[(A = x + 24 | 0) >> 2] || 0 | r[x + 28 >> 2] ? 14 : w0)) == 14 && (r[((w0 = 0) | r[Z >> 2]) + (i0 << 2) >> 2] = r[(P = x + 12 | 0) >> 2], 0 | r[A >> 2])) {
                if (A = 0 | r[p0 + (i0 << 2) >> 2], w = (o = 0 | r[x + 16 >> 2]) + ((G = 0 | r[P >> 2]) << 2) | 0, 0 < (0 | G))
                  for (f = 0 | r[d >> 2], u = 0 | r[e0 >> 2], a = 0 | r[$ >> 2], k = 0 | r[l >> 2], p = 0 | r[H >> 2], _ = (0 | r[S >> 2]) + (n0 << 2) | 0, y = o, m = (0 | r[N >> 2]) + (n0 << 2) | 0, I = (0 | r[K >> 2]) + (n0 << 2) | 0, M = (0 | r[m0 >> 2]) + (n0 << 2) | 0, G = (0 | r[s >> 2]) + (n0 << 2) | 0; Q = (0 | r[y >> 2]) + A | 0, r[_ >> 2] = r[f + (Q << 2) >> 2], r[I >> 2] = r[u + (Q << 2) >> 2], r[M >> 2] = r[a + (Q << 2) >> 2], r[G >> 2] = r[k + (Q << 2) >> 2], r[m >> 2] = r[p + (Q << 2) >> 2], !(w >>> 0 <= (y = y + 4 | 0) >>> 0); )
                    _ = _ + 4 | 0, m = m + 4 | 0, I = I + 4 | 0, M = M + 4 | 0, G = G + 4 | 0;
                Q = (0 | r[o >> 2]) + A | 0, r[(0 | r[O >> 2]) + (i0 << 2) >> 2] = r[(0 | r[n >> 2]) + (Q << 2) >> 2], r[(0 | r[X >> 2]) + (i0 << 2) >> 2] = r[(0 | r[i >> 2]) + (Q << 2) >> 2];
              }
              if (0 | r[x + 28 >> 2] && (c0 = (W = 0 | r[x + 20 >> 2]) + ((Q = 0 | r[x + 12 >> 2]) << 2) | 0, 0 < (0 | Q)))
                for (A = (0 | r[t >> 2]) + (n0 << 2) | 0, o = W; r[A >> 2] = r[o >> 2], !(c0 >>> 0 <= (o = o + 4 | 0) >>> 0); )
                  A = A + 4 | 0;
              if ((0 | (i0 = i0 + 1 | 0)) == (0 | R))
                break;
              n0 = (0 | r[x + 8 >> 2]) + n0 | 0;
            }
          if (!((0 | r0[4 + F >> 0]) < 4 || (m0 = 0 | r[824 + F >> 2], (0 | (Z = 0 | r[c >> 2])) <= 0)))
            for (e0 = e + 216 | 0, H = e + 220 | 0, N = e + 224 | 0, $ = e + 228 | 0, K = e + 232 | 0, P = e + 236 | 0, O = 1228 + F | 0, d = 1232 + F | 0, W = 1236 + F | 0, X = 1240 + F | 0, S = 1244 + F | 0, w = 1248 + F | 0, y = _ = 0; ; ) {
              if (p = 0 | r[b + (12 * _ | 0) >> 2], 0 | r[p + 24 >> 2] && (f0 = 0 | r[m0 + (_ << 2) >> 2], l0 = (v0 = 0 | r[p + 16 >> 2]) + ((Q = 0 | r[p + 12 >> 2]) << 2) | 0, 0 < (0 | Q)))
                for (A = 0 | r[O >> 2], o = 0 | r[d >> 2], f = 0 | r[W >> 2], u = 0 | r[X >> 2], a = 0 | r[S >> 2], k = 0 | r[w >> 2], m = v0, I = (0 | r[N >> 2]) + (y << 2) | 0, M = (0 | r[H >> 2]) + (y << 2) | 0, G = (0 | r[e0 >> 2]) + (y << 2) | 0, p0 = (0 | r[P >> 2]) + (y << 2) | 0, R = (0 | r[K >> 2]) + (y << 2) | 0, x = (0 | r[$ >> 2]) + (y << 2) | 0; Q = (0 | r[m >> 2]) + f0 | 0, r[G >> 2] = r[A + (Q << 2) >> 2], r[M >> 2] = r[o + (Q << 2) >> 2], r[I >> 2] = r[f + (Q << 2) >> 2], r[x >> 2] = r[u + (Q << 2) >> 2], r[R >> 2] = r[a + (Q << 2) >> 2], r[p0 >> 2] = r[k + (Q << 2) >> 2], !(l0 >>> 0 <= (m = m + 4 | 0) >>> 0); )
                  I = I + 4 | 0, M = M + 4 | 0, G = G + 4 | 0, p0 = p0 + 4 | 0, R = R + 4 | 0, x = x + 4 | 0;
              if ((0 | (_ = _ + 1 | 0)) == (0 | Z))
                break;
              y = (0 | r[p + 8 >> 2]) + y | 0;
            }
        }
        function hr(e) {
          var n, i, l, s, H = 0, t = 0, c = 0, A = 0, o = 0, f = 0, u = 0, a = 0, N = 0, e0 = 0, K = 0, $ = 0, k = 0, p = 0, w = 0, _ = 0, y = 0, m = 0, I = 0, M = 0, G = 0, R = 0, x = 0, W = 0, d = 0, S = 0, O = 0, X = 0, P = 0, Z = 0, N = 0 | r[(l = (e |= 0) + 336 | 0) >> 2], H = 0 | r[e >> 2], e0 = 0 | r[H + 856 >> 2], K = 0 | r[(s = e + 332 | 0) >> 2], $ = 0 | r[H + 1028 >> 2];
          if (0 < (0 | K)) {
            for (y = e + 356 | 0, R = e + 372 | 0, M = e + 364 | 0, m = e + 368 | 0, x = e + 360 | 0, I = H + 1024 | 0, G = H + 1016 | 0, f = H + 1020 | 0, a = u = 0; ; ) {
              if (o = 0 | r[N + (20 * u | 0) >> 2], (0 | (S = 0 | r[(H = o + 24 | 0) >> 2] || 0 | r[o + 28 >> 2] ? 15 : S)) == 15 && (r[((S = 0) | r[y >> 2]) + (u << 2) >> 2] = r[(_ = o + 12 | 0) >> 2], 0 | r[H >> 2]) && (k = 0 | r[e0 + (u << 2) >> 2], W = (p = 0 | r[o + 16 >> 2]) + ((O = 0 | r[_ >> 2]) << 2) | 0, 0 < (0 | O)))
                for (H = (0 | r[m >> 2]) + (a << 2) | 0, t = p, c = (0 | r[M >> 2]) + (a << 2) | 0, A = (0 | r[R >> 2]) + (a << 2) | 0; O = (0 | r[t >> 2]) + k | 0, r[A >> 2] = $ + (r[(0 | r[I >> 2]) + (O << 2) >> 2] << 2), r[c >> 2] = r[(0 | r[G >> 2]) + (O << 2) >> 2], r[H >> 2] = r[(0 | r[f >> 2]) + (O << 2) >> 2], !(W >>> 0 <= (t = t + 4 | 0) >>> 0); )
                  H = H + 4 | 0, c = c + 4 | 0, A = A + 4 | 0;
              if (0 | r[o + 28 >> 2] && (d = (w = 0 | r[o + 20 >> 2]) + ((O = 0 | r[o + 12 >> 2]) << 2) | 0, 0 < (0 | O)))
                for (H = (0 | r[x >> 2]) + (a << 2) | 0, t = w; r[H >> 2] = r[t >> 2], !(d >>> 0 <= (t = t + 4 | 0) >>> 0); )
                  H = H + 4 | 0;
              if ((0 | (u = u + 1 | 0)) == (0 | K))
                break;
              a = (0 | r[o + 8 >> 2]) + a | 0;
            }
            H = 0 | r[e >> 2];
          }
          if (!((0 | r0[H + 4 >> 0]) < 4 || (i = 0 | r[l >> 2], O = 0 | r[H + 864 >> 2], (0 | (W = 0 | r[s >> 2])) <= 0)))
            for (l = e + 376 | 0, S = e + 380 | 0, d = e + 384 | 0, n = e + 388 | 0, s = e + 392 | 0, x = e + 396 | 0, G = H + 1228 | 0, I = H + 1232 | 0, m = H + 1236 | 0, R = H + 1240 | 0, M = H + 1244 | 0, a = H + 1248 | 0, e0 = N = 0; ; ) {
              if (H = 0 | r[i + (20 * N | 0) >> 2], 0 | r[H + 24 >> 2] && (X = 0 | r[O + (N << 2) >> 2], Z = (P = 0 | r[H + 16 >> 2]) + ((e = 0 | r[H + 12 >> 2]) << 2) | 0, 0 < (0 | e)))
                for (t = 0 | r[G >> 2], c = 0 | r[I >> 2], A = 0 | r[m >> 2], o = 0 | r[R >> 2], f = 0 | r[M >> 2], u = 0 | r[a >> 2], K = P, $ = (0 | r[d >> 2]) + (e0 << 2) | 0, k = (0 | r[S >> 2]) + (e0 << 2) | 0, p = (0 | r[l >> 2]) + (e0 << 2) | 0, w = (0 | r[x >> 2]) + (e0 << 2) | 0, _ = (0 | r[s >> 2]) + (e0 << 2) | 0, y = (0 | r[n >> 2]) + (e0 << 2) | 0; e = (0 | r[K >> 2]) + X | 0, r[p >> 2] = r[t + (e << 2) >> 2], r[k >> 2] = r[c + (e << 2) >> 2], r[$ >> 2] = r[A + (e << 2) >> 2], r[y >> 2] = r[o + (e << 2) >> 2], r[_ >> 2] = r[f + (e << 2) >> 2], r[w >> 2] = r[u + (e << 2) >> 2], !(Z >>> 0 <= (K = K + 4 | 0) >>> 0); )
                  $ = $ + 4 | 0, k = k + 4 | 0, p = p + 4 | 0, w = w + 4 | 0, _ = _ + 4 | 0, y = y + 4 | 0;
              if ((0 | (N = N + 1 | 0)) == (0 | W))
                break;
              e0 = (0 | r[H + 8 >> 2]) + e0 | 0;
            }
        }
        function a1(e) {
          var n, i, l, s = 0;
          if (ar(e |= 0), function(t) {
            t |= 0;
            var c = 0, A = 0, o = 0, f = 0, u = 0, a = 0, k = 0, p = 0;
            if (c = 0 | r[t + 4 >> 2], u = 0 | r[t >> 2], a = c + (52 * u | 0) | 0, !((0 | u) <= 0))
              for (u = 0 | r[t + 12 >> 2]; A = +h[u >> 2], f = (0 | r[c + 16 >> 2]) == 0, t = c + 4 | 0, A = f ? (p = +h[t >> 2], k = +h[c + 8 >> 2], A < p ? p : k < A ? k : A) : (p = +h[c + 12 >> 2], (k = +h[t >> 2]) + p * ((A = (A - k) / p) - (0 | ~~+j0(+A)))), t = c + 48 | 0, +h[(o = c + 44 | 0) >> 2] != A ? (r[t >> 2] = 1, h[o >> 2] = A) : r[t >> 2] = 0, f && (h[u >> 2] = A), !(a >>> 0 <= (c = c + 52 | 0) >>> 0); )
                u = u + 4 | 0;
          }(e + 540 | 0), function(t) {
            t |= 0;
            var c = 0, A = 0, o = 0, f = 0, u = 0, a = 0, k = 0, p = 0, w = 0, _ = 0, y = 0, m = 0, I = 0, M = 0, G = 0, R = 0, x = 0, W = 0;
            if (c = 0 | r[t + 544 >> 2], y = 0 | r[t + 540 >> 2], R = c + (52 * y | 0) | 0, !((0 | y) <= 0)) {
              y = (0 | r[t + 620 >> 2]) == 0;
              do {
                r:
                  do
                    if (!(0 | r[c >> 2]) && (m = +h[c + 44 >> 2], I = +h[c + 20 >> 2], M = +h[c + 24 >> 2], G = 0 | r[c + 28 >> 2], w = 0 | r[c + 32 >> 2], x = G + (28 * w | 0) | 0, 0 < (0 | w))) {
                      if (!y)
                        for (w = G; ; ) {
                          u = 0 | r[w >> 2];
                          do
                            if (1 <= (0 | u)) {
                              if (f = 0 | r[w + 4 >> 2], o = +h[f >> 2], A = o - I, (0 | u) == 1) {
                                u = !(m < I + o) | !(A < m), A = t = 0, _ = 41;
                                break;
                              }
                              if (m < A) {
                                f = w + 16 | 0, a = 1, A = t = 0, _ = 43;
                                break;
                              }
                              if (m < I + o)
                                A = t = u = 0, _ = 41;
                              else {
                                for (t = 1; A = +h[f + (t << 2) >> 2], !(m < I + A); ) {
                                  if (!((0 | (t = t + 1 | 0)) < (0 | u))) {
                                    _ = 40;
                                    break;
                                  }
                                  o = A;
                                }
                                if ((0 | _) == 40) {
                                  f = w + 16 | 0, t = u + -(a = 1) | 0, A = 0, _ = 43;
                                  break;
                                }
                                _ = (A = A - I < m ? u = 0 : (t = t + -1 | 0, (A -= o) < M ? u = 0 : (u = 0, (m - o) / A)), 41);
                              }
                            } else
                              A = t = u = 0, _ = 41;
                          while (0);
                          if ((0 | _) == 41 && (u | (_ = 0) == (0 | r[(f = w + 16 | 0) >> 2]) ? (a = 1 & u, _ = 43) : (r[w + 24 >> 2] = 1, r[w + 20 >> 2] = 1, p = w + 8 | 0, k = w + 12 | 0, u = 0)), (0 | _) == 43 && (o = +h[(k = w + 12 | (_ = 0)) >> 2], W = o != A, u = 1 & ((0 | r[(p = w + 8 | 0) >> 2]) != (0 | t) | W & (A == 0 | o == 0)), r[w + 24 >> 2] = 1 & W, r[w + 20 >> 2] = u, u = a), h[k >> 2] = A, r[p >> 2] = t, r[f >> 2] = u, x >>> 0 <= (w = w + 28 | 0) >>> 0)
                            break r;
                        }
                      if (!(0 | r[c + 48 >> 2])) {
                        for (t = G; ; )
                          if (r[t + 24 >> 2] = 0, r[t + 20 >> 2] = 0, x >>> 0 <= (t = t + 28 | 0) >>> 0)
                            break r;
                      }
                      w = G;
                      do {
                        u = 0 | r[w >> 2];
                        do
                          if (1 <= (0 | u)) {
                            if (f = 0 | r[w + 4 >> 2], o = +h[f >> 2], A = o - I, (0 | u) == 1) {
                              u = !(m < I + o) | !(A < m), A = t = 0, _ = 24;
                              break;
                            }
                            if (m < A) {
                              f = w + 16 | 0, a = 1, A = t = 0, _ = 26;
                              break;
                            }
                            if (m < I + o)
                              A = t = u = 0, _ = 24;
                            else {
                              for (t = 1; A = +h[f + (t << 2) >> 2], !(m < I + A); ) {
                                if (!((0 | (t = t + 1 | 0)) < (0 | u))) {
                                  _ = 21;
                                  break;
                                }
                                o = A;
                              }
                              if ((0 | _) == 21) {
                                f = w + 16 | 0, t = u + -(a = 1) | 0, A = 0, _ = 26;
                                break;
                              }
                              _ = (A = A - I < m ? u = 0 : (t = t + -1 | 0, (A -= o) < M ? u = 0 : (u = 0, (m - o) / A)), 24);
                            }
                          } else
                            A = t = u = 0, _ = 24;
                        while (0);
                      } while ((0 | _) == 24 && (u | (_ = 0) == (0 | r[(f = w + 16 | 0) >> 2]) ? (a = 1 & u, _ = 26) : (r[w + 24 >> 2] = 1, r[w + 20 >> 2] = 1, p = w + 8 | 0, k = w + 12 | 0, u = 0)), (0 | _) == 26 && (o = +h[(k = w + 12 | (_ = 0)) >> 2], W = o != A, u = 1 & ((0 | r[(p = w + 8 | 0) >> 2]) != (0 | t) | W & (A == 0 | o == 0)), r[w + 24 >> 2] = 1 & W, r[w + 20 >> 2] = u, u = a), h[k >> 2] = A, r[p >> 2] = t, r[f >> 2] = u, (w = w + 28 | 0) >>> 0 < x >>> 0);
                    }
                  while (0);
              } while ((c = c + 52 | 0) >>> 0 < R >>> 0);
            }
          }(e), vr(e), function(t) {
            t |= 0;
            var c = 0, A = 0, o = 0, f = 0, u = 0, a = 0, k = 0, p = 0, w = 0, _ = 0, y = 0, m = 0, I = 0, M = 0, G = 0, R = 0, x = 0, W = 0, d = 0, S = 0, O = 0, X = 0;
            if (c = 0 | r[t + 568 >> 2], I = 0 | r[t + 564 >> 2], x = c + (36 * I | 0) | 0, !((0 | I) <= 0)) {
              I = (0 | r[t + 620 >> 2]) == 0;
              do {
                m = 0 | r[c + 4 >> 2];
                r:
                  do
                    if (0 < (0 | m))
                      for (a = 0 | r[c >> 2], o = t = A = k = 0; ; ) {
                        if (f = 0 | r[a + (k << 2) >> 2], 0 | r[f + 16 >> 2]) {
                          o = 1, t = A = 0;
                          break r;
                        }
                        if (o = o || 0 | r[f + 24 >> 2], t = t || 0 | r[f + 20 >> 2], A = A + (+h[f + 12 >> 2] != 0 & 1) | 0, (0 | m) <= (0 | (k = k + 1 | 0))) {
                          a = A, S = 11;
                          break;
                        }
                      }
                    else
                      o = t = a = 0, S = 11;
                  while (0);
                r:
                  do
                    if ((0 | S) == 11)
                      if (A = I ? t : 1, (S = 0) != ((t = I ? o : 1) | A | 0) && (d = 1 << a, r[c + 12 >> 2] = d, M = 0 | r[c >> 2], G = 0 | r[c + 16 >> 2], R = 0 | r[c + 20 >> 2], W = G + (d << 2) | 0, (0 | a) != 31)) {
                        for (B0(0 | G, 0, ((o = G + 4 | 0) >>> 0 < W >>> 0 ? W : o) + ~G + 4 & -4 | 0), o = R + (d << 2) | 0, f = R; h[f >> 2] = 1, (f = f + 4 | 0) >>> 0 < o >>> 0; )
                          ;
                        if (1 <= (0 | m)) {
                          if (!a)
                            for (a = 0, p = 1; ; ) {
                              if (f = 0 | r[M + (a << 2) >> 2], k = 0 | h0(0 | r[f + 8 >> 2], p), (u = +h[f + 12 >> 2]) == 0)
                                for (o = 0; r[(y = G + (o << 2) | 0) >> 2] = (0 | r[y >> 2]) + k, (0 | (o = o + 1 | 0)) != (0 | d); )
                                  ;
                              else
                                r[G >> 2] = (0 | r[G >> 2]) + k, h[R >> 2] = (1 - u) * +h[R >> 2];
                              if (p = 0 | h0(0 | r[f >> 2], p), (0 | (a = a + 1 | 0)) == (0 | m)) {
                                o = 0;
                                break r;
                              }
                            }
                          _ = 0, y = o = 1;
                          do
                            if (w = 0 | r[M + (_ << 2) >> 2], f = 0 | r[8 + w >> 2], p = 0 | h0(f, y), (u = +h[(k = 12 + w | 0) >> 2]) == 0)
                              for (f = 0; r[(k = G + (f << 2) | 0) >> 2] = (0 | r[k >> 2]) + p, (0 | (f = f + 1 | 0)) != (0 | d); )
                                ;
                            else {
                              for (a = 0 | h0(f + 1 | 0, y), r[G >> 2] = (0 | r[G >> 2]) + p, h[R >> 2] = (1 - u) * +h[R >> 2], f = 1; u = +h[k >> 2], X = (f & o | 0) != 0, r[(O = G + (f << 2) | 0) >> 2] = (X ? a : p) + (0 | r[O >> 2]), h[(O = R + (f << 2) | 0) >> 2] = (X ? u : 1 - u) * +h[O >> 2], (0 | (f = f + 1 | 0)) != (0 | d); )
                                ;
                              o <<= 1;
                            }
                          while (y = 0 | h0(0 | r[w >> 2], y), (0 | (_ = _ + 1 | 0)) != (0 | m));
                          o = 0;
                        } else
                          o = 0;
                      } else
                        o = 0;
                  while (0);
              } while (r[c + 28 >> 2] = t, r[c + 24 >> 2] = A, r[c + 32 >> 2] = o, (c = c + 36 | 0) >>> 0 < x >>> 0);
            }
          }(e), yr(e), i = 0 | r[e + 4 >> 2], n = (s = 0 | r[e + 52 >> 2]) + (i << 2) | 0, 0 < (0 | i))
            for (; l = +h[s >> 2], h[s >> 2] = l < 0 ? 0 : 1 < l ? 1 : l, (s = s + 4 | 0) >>> 0 < n >>> 0; )
              ;
          (function(t, c, A) {
            t |= 0, c |= 0, A |= 0;
            var o = 0, f = 0;
            if (f = c + (12 * t | 0) | 0, !((0 | t) <= 0))
              for (o = A; ; ) {
                do
                  if (0 | r[c + 8 >> 2]) {
                    if ((0 | (t = 0 | r[c + 4 >> 2])) != -1 && !(0 | r[A + (t << 2) >> 2])) {
                      t = 0;
                      break;
                    }
                    t = (0 | r[32 + (0 | r[c >> 2]) >> 2]) == 0;
                  } else
                    t = 0;
                while (0);
                if (r[o >> 2] = 1 & t, f >>> 0 <= (c = c + 12 | 0) >>> 0)
                  break;
                o = o + 4 | 0;
              }
          })(i, 0 | r[e + 8 >> 2], 0 | r[e + 40 >> 2]), function(t) {
            var c, A, o, f, u, x = 0, a = 0, k = 0, p = 0, w = 0, _ = 0, y = 0, m = 0, I = 0, M = 0, G = 0, R = 0 | r[(t |= 0) + 8 >> 2], x = 0 | r[t >> 2], W = 0 | r[x + 724 >> 2], d = 0 | r[t + 4 >> 2];
            if (!((0 | d) <= 0))
              for (f = t + 28 | 0, u = t + 36 | 0, o = t + 32 | 0, A = x + 976 | 0, p = k = 0; ; ) {
                if (c = 0 | r[R + (12 * k | 0) >> 2], (0 | (G = 0 | r[(t = 24 + c | 0) >> 2] || 0 | r[28 + c >> 2] ? 6 : G)) == 6 && (r[((G = 0) | r[f >> 2]) + (k << 2) >> 2] = r[(m = 12 + c | 0) >> 2], 0 | r[t >> 2]) && (y = 0 | r[W + (k << 2) >> 2], I = (w = 0 | r[16 + c >> 2]) + ((a = 0 | r[m >> 2]) << 2) | 0, 0 < (0 | a)))
                  for (t = 0 | r[A >> 2], x = (0 | r[u >> 2]) + (p << 2) | 0, a = w; r[x >> 2] = r[t + ((0 | r[a >> 2]) + y << 2) >> 2], !(I >>> 0 <= (a = a + 4 | 0) >>> 0); )
                    x = x + 4 | 0;
                if (0 | r[28 + c >> 2] && (M = (_ = 0 | r[20 + c >> 2]) + ((a = 0 | r[12 + c >> 2]) << 2) | 0, 0 < (0 | a)))
                  for (t = (0 | r[o >> 2]) + (p << 2) | 0, x = _; r[t >> 2] = r[x >> 2], !(M >>> 0 <= (x = x + 4 | 0) >>> 0); )
                    t = t + 4 | 0;
                if ((0 | (k = k + 1 | 0)) == (0 | d))
                  break;
                p = (0 | r[8 + c >> 2]) + p | 0;
              }
          }(e), function(t) {
            s1((t |= 0) + 12 | 0, 0 | r[t + 36 >> 2], 0 | r[t + 44 >> 2], 0 | r[t + 40 >> 2]);
          }(e), function(t) {
            var c = 0, A = 0, o = 0, f = 0, u = 0, a = 0, k = 0, p = 0, w = 0;
            if (v = (w = v) + 16 | 0, p = w, c = r[(t = t | 0) + 308 >> 2] | 0, o = r[t + 304 >> 2] | 0, k = c + (o << 5) | 0, f = r[t + 40 >> 2] | 0, u = r[t + 312 >> 2] | 0, a = r[t + 144 >> 2] | 0, A = r[t + 264 >> 2] | 0, (0 | o) <= 0)
              v = w;
            else {
              for (o = u; ; ) {
                do
                  if (0 | r[c + 28 >> 2]) {
                    if ((0 | (t = 0 | r[c + 4 >> 2])) != -1 && !(0 | r[f + (t << 2) >> 2])) {
                      t = 0;
                      break;
                    }
                    if ((0 | (t = 0 | r[c + 8 >> 2])) != -1 && !(0 | r[u + (t << 2) >> 2])) {
                      t = 0;
                      break;
                    }
                    t = (0 | r[32 + (0 | r[c >> 2]) >> 2]) == 0;
                  } else
                    t = 0;
                while (0);
                switch (t &= 1, r[o >> 2] = t, 0 | r[c + 12 >> 2]) {
                  case 0:
                    r[a + (r[c + 16 >> 2] << 2) >> 2] = t;
                    break;
                  case 1:
                    r[A + (r[c + 16 >> 2] << 2) >> 2] = t;
                    break;
                  default:
                    T(0, 2458, p);
                }
                if (k >>> 0 <= (c = c + 32 | 0) >>> 0)
                  break;
                o = o + 4 | 0;
              }
              v = w;
            }
          }(e), wr(e), kr(e), Ar(e), sr(e), function(t) {
            t |= 0;
            var c = 0, A = 0, o = 0, f = 0, u = 0;
            if (c = 0 | r[t + 336 >> 2], A = 0 | r[t + 332 >> 2], u = c + (20 * A | 0) | 0, o = 0 | r[t + 40 >> 2], f = 0 | r[t + 312 >> 2], !((0 | A) <= 0))
              for (A = 0 | r[t + 424 >> 2]; ; ) {
                do
                  if (0 | r[c + 12 >> 2]) {
                    if ((0 | (t = 0 | r[c + 4 >> 2])) != -1 && !(0 | r[o + (t << 2) >> 2])) {
                      t = 0;
                      break;
                    }
                    if ((0 | (t = 0 | r[c + 8 >> 2])) != -1 && !(0 | r[f + (t << 2) >> 2])) {
                      t = 0;
                      break;
                    }
                    t = (0 | r[32 + (0 | r[c >> 2]) >> 2]) == 0;
                  } else
                    t = 0;
                while (0);
                if (r[A >> 2] = 1 & t, u >>> 0 <= (c = c + 20 | 0) >>> 0)
                  break;
                A = A + 4 | 0;
              }
          }(e), hr(e), ur(e), function(t) {
            var c, A, o, f, u, x = 0, a = 0, k = 0, p = 0, w = 0, _ = 0, y = 0, m = 0, I = 0, M = 0, G = 0, R = 0 | r[(t |= 0) + 504 >> 2], x = 0 | r[t >> 2], W = 0 | r[x + 1192 >> 2], d = 0 | r[t + 500 >> 2];
            if (!((0 | d) <= 0))
              for (f = t + 524 | 0, u = t + 532 | 0, o = t + 528 | 0, A = x + 1224 | 0, p = k = 0; ; ) {
                if (c = 0 | r[R + (24 * k | 0) >> 2], (0 | (G = 0 | r[(t = 24 + c | 0) >> 2] || 0 | r[28 + c >> 2] ? 6 : G)) == 6 && (r[((G = 0) | r[f >> 2]) + (k << 2) >> 2] = r[(m = 12 + c | 0) >> 2], 0 | r[t >> 2]) && (y = 0 | r[W + (k << 2) >> 2], I = (w = 0 | r[16 + c >> 2]) + ((a = 0 | r[m >> 2]) << 2) | 0, 0 < (0 | a)))
                  for (t = 0 | r[A >> 2], x = (0 | r[u >> 2]) + (p << 2) | 0, a = w; r[x >> 2] = r[t + ((0 | r[a >> 2]) + y << 2) >> 2], !(I >>> 0 <= (a = a + 4 | 0) >>> 0); )
                    x = x + 4 | 0;
                if (0 | r[28 + c >> 2] && (M = (_ = 0 | r[20 + c >> 2]) + ((a = 0 | r[12 + c >> 2]) << 2) | 0, 0 < (0 | a)))
                  for (t = (0 | r[o >> 2]) + (p << 2) | 0, x = _; r[t >> 2] = r[x >> 2], !(M >>> 0 <= (x = x + 4 | 0) >>> 0); )
                    t = t + 4 | 0;
                if ((0 | (k = k + 1 | 0)) == (0 | d))
                  break;
                p = (0 | r[8 + c >> 2]) + p | 0;
              }
          }(e), function(t) {
            k0((t |= 0) + 508 | 0, 0 | r[t + 532 >> 2], 0 | r[t + 536 >> 2], 0);
          }(e), nr(e), tr(e), function(t) {
            var c = 0, A = 0, o = 0, f = 0, u = 0, a = (c = 0 | r[(t |= 0) + 8 >> 2]) + (12 * (u = 0 | r[t + 4 >> 2]) | 0) | 0, k = 0 | r[t + 48 >> 2];
            if (!((0 | u) <= 0))
              for (u = 0 | r[t + 40 >> 2], A = k, t = 0 | r[t + 52 >> 2]; 0 | r[u >> 2] && (o = +h[t >> 2], h[A >> 2] = o, (0 | (f = 0 | r[c + 4 >> 2])) != -1) && (h[A >> 2] = o * +h[k + (f << 2) >> 2]), !(a >>> 0 <= (c = c + 12 | 0) >>> 0); )
                u = u + 4 | 0, A = A + 4 | 0, t = t + 4 | 0;
          }(e), function(t) {
            var c = 0, A = 0, o = 0, f = 0 | r[(t |= 0) + 304 >> 2];
            if (!((0 | f) <= 0))
              for (c = 0 | r[t + 312 >> 2], A = 0 | r[t + 308 >> 2], o = 0; 0 | r[c >> 2] && E1[3 & r[A + 20 >> 2]](t, o), (0 | (o = o + 1 | 0)) != (0 | f); )
                c = c + 4 | 0, A = A + 32 | 0;
          }(e), lr(e), er(e), function(t) {
            t |= 0;
            var c, A, o = 0, f = 0, u = 0, a = 0, k = 0;
            if (!(0 | r[t + 624 >> 2] || (c = (o = 0 | r[t + 336 >> 2]) + (20 * (a = 0 | r[t + 332 >> 2]) | 0) | 0, (0 | a) <= 0)))
              for (a = 0 | r[t + 424 >> 2], t = 0 | r[t + 444 >> 2]; ; ) {
                if (0 | r[a >> 2] && (u = 0 | r[t >> 2], k = (f = 0 | r[o + 16 >> 2]) << 1, 0 < (0 | f)))
                  for (f = 1; h[(A = u + (f << 2) | 0) >> 2] = -+h[A >> 2], (0 | (f = f + 2 | 0)) < (0 | k); )
                    ;
                if (c >>> 0 <= (o = o + 20 | 0) >>> 0)
                  break;
                a = a + 4 | 0, t = t + 4 | 0;
              }
          }(e), function(t) {
            t |= 0;
            var c = 0, A = 0, o = 0, f = 0, u = 0, a = 0, k = 0, p = 0, w = 0, _ = 0, y = 0, m = 0, I = 0, M = 0, G = 0, R = 0;
            if (G = 0 | r[t + 480 >> 2], R = 0 | r[t + 484 >> 2], p = R + (28 * G | 0) | 0, c = 0 | r[t + 440 >> 2], A = 0 | r[t + 44 >> 2], o = 0 | r[t + 40 >> 2], f = 0 | r[t + 424 >> 2], !((0 | G) <= 0)) {
              w = R;
              do
                if (0 < (0 | (u = 0 | r[w + 4 >> 2])))
                  for (a = 0 | r[w + 12 >> 2], k = w + 20 | 0, _ = 0; M = 0 | r[a + (_ << 4) + 4 >> 2], I = (0 | r[a + (_ << 4) >> 2]) == 1, r[a + (_ << 4) + 12 >> 2] = r[(0 | r[(I ? o : f) + (M << 2) >> 2] ? (I ? A : c) + (M << 2) | 0 : k) >> 2], (0 | (_ = _ + 1 | 0)) != (0 | u); )
                    ;
              while ((w = w + 28 | 0) >>> 0 < p >>> 0);
              m = 0 | r[t + 436 >> 2], I = t + 488 | 0, M = t + 492 | 0, _ = t + 496 | 0, y = 0;
              do {
                if (0 < (0 | r[(t = R + (28 * y | 0) + 24 | 0) >> 2])) {
                  for (c = 0 | r[I >> 2], o = 0; r[c + (o << 2) >> 2] = -1, o = o + 1 | 0, A = 0 | r[t >> 2], (0 | o) < (0 | A); )
                    ;
                  if (0 < (0 | A))
                    for (c = 0 | r[_ >> 2], A = 0; r[c + (A << 2) >> 2] = -1, (0 | (A = A + 1 | 0)) < (0 | r[t >> 2]); )
                      ;
                }
                if (0 < (0 | r[(w = R + (28 * y | 0) + 4 | 0) >> 2])) {
                  for (p = 0 | r[M >> 2], A = 0; r[p + (A << 2) >> 2] = -1, A = A + 1 | 0, c = 0 | r[w >> 2], (0 | A) < (0 | c); )
                    ;
                  if (0 < (0 | c))
                    for (o = 0 | r[R + (28 * y | 0) + 12 >> 2], u = R + (28 * y | 0) + 20 | 0, f = 0 | r[_ >> 2], k = 0; A = (0 | r[o + (k << 4) + 12 >> 2]) - (0 | r[u >> 2]) | 0, c = (0 | (c = 0 | r[(a = f + (A << 2) | 0) >> 2])) == -1 ? (0 | r[I >> 2]) + (A << 2) | 0 : p + (c << 2) | 0, r[c >> 2] = k, (0 | (k = (r[a >> 2] = k) + 1 | 0)) < (0 | r[w >> 2]); )
                      ;
                }
                if (0 < (0 | (c = 0 | r[t >> 2]))) {
                  k = 0 | r[I >> 2], p = R + (28 * y | 0) + 12 | 0, A = (a = 0) | r[R + (28 * y | 0) + 8 >> 2];
                  do
                    if ((0 | (o = 0 | r[k + (a << 2) >> 2])) != -1) {
                      for (f = 0 | r[p >> 2], u = 0 | r[M >> 2]; c = (0 | r[f + (o << 4) >> 2]) == 1 ? (c = 0 | r[f + (o << 4) + 8 >> 2], r[R + (28 * c | 0) + 8 >> 2] = A, 0 | r[R + (28 * c | 0) >> 2]) : (r[m + (r[f + (o << 4) + 4 >> 2] << 2) >> 2] = A, 1), A = c + A | 0, !((0 | (o = 0 | r[u + ((w = o) << 2) >> 2])) <= (0 | w) | (0 | o) == -1); )
                        ;
                      c = 0 | r[t >> 2];
                    }
                  while ((0 | (a = a + 1 | 0)) < (0 | c));
                }
              } while ((0 | (y = y + 1 | 0)) != (0 | G));
            }
          }(e), mr(e), r[e + 620 >> 2] = 0;
        }
        function vr(e) {
          e |= 0;
          var n, i, l = 0, s = 0, t = 0, c = 0, A = 0, o = 0, f = 0, u = 0, a = 0, k = 0, p = 0, w = 0, _ = 0, y = 0, m = 0;
          if (!((0 | r0[4 + (0 | r[e >> 2]) >> 0]) < 4 || (i = (l = 0 | r[e + 544 >> 2]) + (52 * (n = 0 | r[e + 540 >> 2]) | 0) | 0, (0 | n) <= 0))) {
            n = (0 | r[e + 620 >> 2]) == 0;
            do {
              r:
                do
                  if ((0 | r[l >> 2]) == 1 && (w = +h[l + 44 >> 2], _ = 0 | r[l + 36 >> 2], f = 0 | r[l + 40 >> 2], y = _ + (28 * f | 0) | 0, 0 < (0 | f))) {
                    if (!n)
                      for (o = _; ; ) {
                        t = 0 | r[o >> 2];
                        do
                          if (2 <= (0 | t) && (k = 0 | r[o + 4 >> 2], !(w <= (p = +h[k >> 2])))) {
                            for (c = 1, A = p; ; ) {
                              if (e = c + 1 | 0, w < (s = +h[k + (c << 2) >> 2])) {
                                f = 25;
                                break;
                              }
                              if (!((0 | e) < (0 | t))) {
                                f = 26;
                                break;
                              }
                              c = e, A = s;
                            }
                            if ((0 | f) == 25) {
                              e = c + -1 | 0, s = (w - A) / (s - A);
                              break;
                            }
                            if ((0 | f) == 26) {
                              e = t + -1 | 0, s = 0;
                              break;
                            }
                          } else
                            s = e = 0;
                        while (0);
                        if (A = +h[(c = o + 16 | 0) >> 2], t = 1 & ((0 | r[(f = o + 12 | 0) >> 2]) != (0 | e) | (m = A != s) & (s == 0 | A == 0)), r[o + 24 >> 2] = 1 & m, r[o + 20 >> 2] = t, h[c >> 2] = s, r[f >> 2] = e, y >>> 0 <= (o = o + 28 | 0) >>> 0)
                          break r;
                      }
                    if (!(0 | r[l + 48 >> 2])) {
                      for (e = _; ; )
                        if (r[e + 24 >> 2] = 0, y >>> (r[e + 20 >> 2] = 0) <= (e = e + 28 | 0) >>> 0)
                          break r;
                    }
                    o = _;
                    do {
                      t = 0 | r[o >> 2];
                      do
                        if (2 <= (0 | t) && (u = 0 | r[o + 4 >> 2], !(w <= (a = +h[u >> 2])))) {
                          for (c = 1, A = a; ; ) {
                            if (e = c + 1 | 0, w < (s = +h[u + (c << 2) >> 2])) {
                              f = 17;
                              break;
                            }
                            if (!((0 | e) < (0 | t))) {
                              f = 18;
                              break;
                            }
                            c = e, A = s;
                          }
                          if ((0 | f) == 17) {
                            e = c + -1 | 0, s = (w - A) / (s - A);
                            break;
                          }
                          if ((0 | f) == 18) {
                            e = t + -1 | 0, s = 0;
                            break;
                          }
                        } else
                          s = e = 0;
                      while (0);
                    } while (A = +h[(f = o + 16 | 0) >> 2], c = 1 & ((0 | r[(m = o + 12 | 0) >> 2]) != (0 | e) | (t = A != s) & (s == 0 | A == 0)), r[o + 24 >> 2] = 1 & t, r[o + 20 >> 2] = c, h[f >> 2] = s, r[m >> 2] = e, (o = o + 28 | 0) >>> 0 < y >>> 0);
                  }
                while (0);
            } while ((l = l + 52 | 0) >>> 0 < i >>> 0);
          }
        }
        function yr(e) {
          e |= 0;
          var n, i, l, s, t = 0, c = 0, A = 0, o = 0, f = 0, u = 0, a = 0, k = 0, p = 0, w = 0, _ = 0, y = 0;
          if (!((0 | r0[4 + (0 | r[e >> 2]) >> 0]) < 4 || (s = (t = 0 | r[e + 592 >> 2]) + (48 * (l = 0 | r[e + 588 >> 2]) | 0) | 0, (0 | l) <= 0))) {
            l = (0 | r[e + 620 >> 2]) == 0;
            do {
              if (e = 0 | r[t >> 2], A = l ? 0 | r[e + 24 >> 2] : 1, (k = l ? 0 | r[e + 20 >> 2] : 1) | A) {
                a = 0 | r[e + 12 >> 2], c = +h[e + 16 >> 2], u = (0 | a) == (0 | (e = 0 | r[e + 8 >> 2]));
                do
                  if (c != 0) {
                    if (f = a + 1 | 0, u) {
                      c = (A = e = r[t + 8 >> 2] = 1) - c, u = 11;
                      break;
                    }
                    e = (0 | f) == (0 | e) ? 1 : 2, u = 10;
                    break;
                  }
                while (e = 1 & (1 ^ u), u = 10, 0);
                (0 | u) == 10 && (u = 0, r[t + 8 >> 2] = e, A ? (f = a, e = k, u = 11) : (f = a, e = k, A = 0)), (0 | u) == 11 && (h[t + 20 >> 2] = 1 - c, h[t + 24 >> 2] = c), e ? (r[t + 12 >> 2] = f, r[t + 16 >> 2] = f + 1) : e = 0;
              } else
                e = k;
              n = 0 | r[t + 36 >> 2];
              r:
                do
                  if (0 < (0 | n)) {
                    if (i = 0 | r[t + 40 >> 2], !l)
                      for (y = 0, c = 1; ; ) {
                        _ = 0 | r[i + (y << 2) >> 2], u = 0 | r[_ + 4 >> 2], a = 0 | r[_ + 8 >> 2], k = 0 | r[_ + 12 >> 2], w = +h[44 + (0 | r[_ >> 2]) >> 2];
                        do
                          if (1 <= (0 | k)) {
                            if ((0 | k) == 1) {
                              o = +h[a >> 2];
                              break;
                            }
                            if (w <= (o = +h[u >> 2])) {
                              o = +h[a >> 2];
                              break;
                            }
                            for (f = 1; ; ) {
                              if (w < (p = +h[u + (f << 2) >> 2])) {
                                u = 40;
                                break;
                              }
                              if (!((0 | (f = f + 1 | 0)) < (0 | k))) {
                                u = 41;
                                break;
                              }
                              o = p;
                            }
                            if ((0 | u) == 40) {
                              o = (1 - (o = (w - o) / (p - o))) * +h[a + (f + -1 << 2) >> 2] + o * +h[a + (f << 2) >> 2];
                              break;
                            }
                            if ((0 | u) == 41) {
                              o = +h[a + (k + -1 << 2) >> 2];
                              break;
                            }
                          } else
                            o = 1;
                        while (0);
                        if (c = c < (h[_ + 16 >> 2] = o) ? c : o, (0 | (y = y + 1 | 0)) == (0 | n))
                          break r;
                      }
                    y = 0, c = 1;
                    do
                      if (_ = 0 | r[i + (y << 2) >> 2], f = 0 | r[_ >> 2], 0 | r[f + 48 >> 2]) {
                        u = 0 | r[_ + 4 >> 2], a = 0 | r[_ + 8 >> 2], k = 0 | r[_ + 12 >> 2], w = +h[f + 44 >> 2];
                        do
                          if (1 <= (0 | k)) {
                            if ((0 | k) == 1) {
                              o = +h[a >> 2];
                              break;
                            }
                            if (w <= (o = +h[u >> 2])) {
                              o = +h[a >> 2];
                              break;
                            }
                            for (f = 1; ; ) {
                              if (w < (p = +h[u + (f << 2) >> 2])) {
                                u = 28;
                                break;
                              }
                              if (!((0 | (f = f + 1 | 0)) < (0 | k))) {
                                u = 27;
                                break;
                              }
                              o = p;
                            }
                            if ((0 | u) == 27) {
                              o = +h[a + (k + -1 << 2) >> 2];
                              break;
                            }
                            if ((0 | u) == 28) {
                              o = (1 - (o = (w - o) / (p - o))) * +h[a + (f + -1 << 2) >> 2] + o * +h[a + (f << 2) >> 2];
                              break;
                            }
                          } else
                            o = 1;
                        while (0);
                        h[_ + 16 >> 2] = o;
                      } else
                        o = +h[_ + 16 >> 2];
                    while (c = c < o ? c : o, (0 | (y = y + 1 | 0)) != (0 | n));
                  } else
                    c = 1;
                while (0);
            } while (h[t + 44 >> 2] = c, r[t + 28 >> 2] = e, r[t + 32 >> 2] = A, (t = t + 48 | 0) >>> 0 < s >>> 0);
          }
        }
        function m1(e, n, i) {
          e |= 0, n |= 0, i |= 0;
          var l, s, t, c = 0, A = v;
          v = v + 144 | 0, H0(0 | (s = A), 640, 144), r[s + 48 >> 2] = c = (c = -2 - e | 0) >>> 0 < 256 ? c : 256, r[(l = s + 20 | 0) >> 2] = e, t = (r[s + 44 >> 2] = e) + c | 0, r[(e = s + 16 | 0) >> 2] = t, r[s + 28 >> 2] = t, w1(s, n, i), 0 | c && (t = 0 | r[l >> 2], U[t + (((0 | t) == (0 | r[e >> 2])) << 31 >> 31) >> 0] = 0), v = A;
        }
        function w1(e, n, i) {
          pr(e |= 0, n |= 0, i |= 0);
        }
        function _r(e, n, i, l, s, t) {
          e |= 0, n = +n, i |= 0, l |= 0, s |= 0, t |= 0;
          var c, A = 0, o = 0, f = 0, u = 0, a = 0, k = 0, p = 0, w = 0, _ = 0, y = 0, m = 0, I = 0, M = 0, G = 0, R = 0, x = 0, W = 0, d = 0, S = 0, O = 0, X = 0, P = v;
          v = v + 560 | 0, u = P + 32 | 0, S = (f = (O = X = P) + 540 | 0) + 12 | (r[(m = P + 536 | 0) >> 2] = 0), y1(n), W = (0 | (A = 0 | F0())) < 0 ? (y1(n = -n), A = 0 | F0(), d = 1, 2539) : (d = (2049 & s | 0) != 0 & 1, 2048 & s | 0 ? 2542 : 1 & s | 0 ? 2545 : 2540);
          do
            if (!0 & (2146435072 & A | 0) == 2146435072)
              X = (32 & t | 0) != 0, V0(e, 32, i, A = d + 3 | 0, -65537 & s), D0(e, W, d), D0(e, n != n | !1 ? X ? 2566 : 2570 : X ? 2558 : 2562, 3), V0(e, 32, i, A, 8192 ^ s);
            else {
              if ((A = (w = 2 * +_1(n, m)) != 0) && (r[m >> 2] = (0 | r[m >> 2]) - 1), (0 | (M = 32 | t)) == 97) {
                _ = 0 | (k = 32 & t) ? W + 9 | 0 : W, p = 2 | d, A = 12 - l | 0;
                do
                  if (!(11 < l >>> 0 | (0 | A) == 0)) {
                    for (n = 8; n *= 16, (0 | (A = A + -1 | 0)) != 0; )
                      ;
                    if ((0 | U[_ >> 0]) == 45) {
                      n = -(n + (-w - n));
                      break;
                    }
                    n = w + n - n;
                    break;
                  }
                while (n = w, 0);
                for ((0 | (A = 0 | t2(A = (0 | (o = 0 | r[m >> 2])) < 0 ? 0 - o | 0 : o, ((0 | A) < 0) << 31 >> 31, S))) == (0 | S) && (U[(A = f + 11 | 0) >> 0] = 48), U[A + -1 >> 0] = 43 + (o >> 31 & 2), U[(a = A + -2 | 0) >> 0] = t + 15, o = (0 | l) < 1, f = (8 & s | 0) == 0, A = X; u = A + 1 | 0, U[A >> 0] = k | r0[480 + (d = ~~n) >> 0], n = 16 * (n - (0 | d)), (u - O | 0) != 1 || f & o & n == 0 || (U[u >> 0] = 46, u = A + 2 | 0), n != 0; )
                  A = u;
                V0(e, 32, i, S = (A = 0 | l && (-2 - O + u | 0) < (0 | l) ? l + 2 + (o = S) - (f = a) | 0 : (o = S) - O - (f = a) + u | 0) + p | 0, s), D0(e, _, p), V0(e, 48, i, S, 65536 ^ s), D0(e, X, O = u - O | 0), V0(e, 48, A - (O + (X = o - f | 0)) | 0, 0, 0), D0(e, a, X), V0(e, 32, i, S, 8192 ^ s), A = S;
                break;
              }
              for (o = (0 | l) < 0 ? 6 : l, n = A ? (f = (0 | r[m >> 2]) - 28 | 0, r[m >> 2] = f, 268435456 * w) : (f = 0 | r[m >> 2], w), u = c = (0 | f) < 0 ? u : u + 288 | 0; r[u >> 2] = R = ~~n >>> 0, u = u + 4 | 0, (n = 1e9 * (n - (R >>> 0))) != 0; )
                ;
              if (R = c, 0 < (0 | f)) {
                A = c;
                do {
                  if (k = (0 | f) < 29 ? f : 29, A >>> 0 <= (f = u + -4 | 0) >>> 0) {
                    for (a = 0; y = 0 | a2(0 | (y = 0 | M1(0 | r[f >> 2], 0, 0 | k)), 0 | F0(), 0 | a, 0), G = 0 | a2(0 | y, 0 | (I = 0 | F0()), 0 | (G = 0 | S2(0 | (a = 0 | B2(0 | y, 0 | I, 1e9, 0)), 0 | F0(), -1e9, -1)), 0 | F0()), F0(), r[f >> 2] = G, A >>> 0 <= (f = f + -4 | 0) >>> 0; )
                      ;
                    a && (r[(A = A + -4 | 0) >> 2] = a);
                  }
                  r:
                    do
                      if (A >>> 0 < u >>> 0)
                        for (; ; ) {
                          if (0 | r[(f = u + -4 | 0) >> 2])
                            break r;
                          if (!(A >>> 0 < f >>> 0)) {
                            u = f;
                            break;
                          }
                          u = f;
                        }
                    while (0);
                } while (f = (0 | r[m >> 2]) - k | 0, 0 < (0 | (r[m >> 2] = f)));
              } else
                A = c;
              if ((0 | f) < 0) {
                l = 1 + ((o + 25 | 0) / 9 | 0) | 0, y = (0 | M) == 102;
                do
                  if (_ = (0 | (_ = 0 - f | 0)) < 9 ? _ : 9, A >>> 0 < u >>> 0) {
                    for (k = (1 << _) - 1 | 0, a = _ ? 1e9 >>> _ : 1e9, p = 0, f = A; G = 0 | r[f >> 2], r[f >> 2] = (_ ? G >>> _ : G) + p, p = 0 | h0(G & k, a), (f = f + 4 | 0) >>> 0 < u >>> 0; )
                      ;
                    A = 0 | r[A >> 2] ? A : A + 4 | 0, p && (r[u >> 2] = p, u = u + 4 | 0);
                  } else
                    A = 0 | r[A >> 2] ? A : A + 4 | 0;
                while (u = (0 | l) < ((G = u - (f = y ? c : A) | 0) >> 2 | 0) ? f + (l << 2) | 0 : u, f = (0 | r[m >> 2]) + _ | 0, (0 | (r[m >> 2] = f)) < 0);
                y = u;
              } else
                y = u;
              if (A >>> 0 < y >>> 0) {
                if (f = 9 * ((f = R - A | 0) >> 2) | 0, 10 <= (a = 0 | r[A >> 2]) >>> 0)
                  for (u = 10; f = f + 1 | 0, (u = 10 * u | 0) >>> 0 <= a >>> 0; )
                    ;
              } else
                f = 0;
              if ((0 | (u = o - ((0 | M) == 102 ? 0 : f) + (((I = (0 | o) != 0) & (m = (0 | M) == 103)) << 31 >> 31) | 0)) < ((9 * ((G = y - R | 0) >> 2) | 0) - 9 | 0)) {
                if (l = c + 4 + ((u = (0 | (G = u + 9216 | 0)) / 9 | 0) + -1024 << 2) | 0, (0 | (u = G + (0 | h0(u, -9)) | 0)) < 8)
                  for (a = 10; a = 10 * a | 0, (0 | u) < 7; )
                    u = u + 1 | 0;
                else
                  a = 10;
                if ((p = (l + 4 | 0) == (0 | y)) & (0 | (k = (k = 0 | r[l >> 2]) - (_ = 0 | h0(u = (k >>> 0) / (a >>> 0) | 0, a)) | 0)) == 0)
                  u = l;
                else if (w = 1 & u | 0 ? 9007199254740994 : 9007199254740992, n = k >>> 0 < (G = a >>> 1) >>> 0 ? 0.5 : p & (0 | k) == (0 | G) ? 1 : 1.5, d && (w = (G = (0 | U[W >> 0]) == 45) ? -w : w, n = G ? -n : n), r[l >> 2] = _, w + n != w) {
                  if (999999999 < (r[l >> 2] = G = _ + a | 0) >>> 0)
                    for (f = l; (u = f + -4 | 0) >>> (r[f >> 2] = 0) < A >>> 0 && (r[(A = A + -4 | 0) >> 2] = 0), G = 1 + (0 | r[u >> 2]) | 0, 999999999 < (r[u >> 2] = G) >>> 0; )
                      f = u;
                  else
                    u = l;
                  if (f = 9 * ((f = R - A | 0) >> 2) | 0, 10 <= (k = 0 | r[A >> 2]) >>> 0)
                    for (a = 10; f = f + 1 | 0, (a = 10 * a | 0) >>> 0 <= k >>> 0; )
                      ;
                } else
                  u = l;
                G = A, A = (M = u + 4 | 0) >>> 0 < y >>> 0 ? M : y;
              } else
                G = A, A = y;
              _ = 0 - f | 0;
              r:
                do
                  if (G >>> 0 < A >>> 0)
                    for (; ; ) {
                      if (0 | r[(u = A + -4 | 0) >> 2]) {
                        y = 1, M = A;
                        break r;
                      }
                      if (!(G >>> 0 < u >>> 0)) {
                        y = 0, M = u;
                        break;
                      }
                      A = u;
                    }
                  else
                    y = 0, M = A;
                while (0);
              do
                if (m) {
                  if (a = (0 | f) < (0 | (A = o + (1 & (1 ^ I)) | 0)) & -5 < (0 | f) ? (o = A + -1 - f | 0, t + -1 | 0) : (o = A + -1 | 0, t + -2 | 0), !(8 & s)) {
                    if (y && 0 | (x = 0 | r[M + -4 >> 2]))
                      if ((x >>> 0) % 10 | 0)
                        u = 0;
                      else
                        for (A = 10, u = 0; u = u + 1 | 0, !((x >>> 0) % ((A = 10 * A | 0) >>> 0) | 0); )
                          ;
                    else
                      u = 9;
                    if (A = (9 * ((A = M - R | 0) >> 2) | 0) - 9 | 0, (32 | a) == 102) {
                      o = (0 | o) < (0 | (t = 0 < (0 | (t = A - u | 0)) ? t : 0)) ? o : t;
                      break;
                    }
                    o = (0 | o) < (0 | (t = 0 < (0 | (t = A + f - u | 0)) ? t : 0)) ? o : t;
                    break;
                  }
                } else
                  a = t;
              while (0);
              if (k = (l = (0 | o) != 0) ? 1 : s >>> 3 & 1, p = (32 | a) == 102)
                A = (I = 0) < (0 | f) ? f : 0;
              else {
                if (((u = S) - (A = 0 | t2(A = (0 | f) < 0 ? _ : f, ((0 | A) < 0) << 31 >> 31, S)) | 0) < 2)
                  for (; U[(A = A + -1 | 0) >> 0] = 48, (u - A | 0) < 2; )
                    ;
                U[A + -1 >> 0] = 43 + (f >> 31 & 2), U[(A = A + -2 | 0) >> 0] = a, A = u - (I = A) | 0;
              }
              if (V0(e, 32, i, A = d + 1 + o + k + A | 0, s), D0(e, W, d), V0(e, 48, i, A, 65536 ^ s), p) {
                p = _ = X + 9 | 0, a = X + 8 | 0, u = k = c >>> 0 < G >>> 0 ? c : G;
                do
                  if (f = 0 | t2(0 | r[u >> 2], 0, _), (0 | u) == (0 | k))
                    (0 | f) == (0 | _) && (U[a >> 0] = 48, f = a);
                  else if (X >>> 0 < f >>> 0)
                    for (B0(0 | X, 48, f - O | 0); X >>> 0 < (f = f + -1 | 0) >>> 0; )
                      ;
                while (D0(e, f, p - f | 0), (u = u + 4 | 0) >>> 0 <= c >>> 0);
                if ((8 & s | 0) == 0 & (1 ^ l) || D0(e, 2574, 1), u >>> 0 < M >>> 0 & 0 < (0 | o))
                  for (; ; ) {
                    if (X >>> 0 < (f = 0 | t2(0 | r[u >> 2], 0, _)) >>> 0)
                      for (B0(0 | X, 48, f - O | 0); X >>> 0 < (f = f + -1 | 0) >>> 0; )
                        ;
                    if (D0(e, f, (0 | o) < 9 ? o : 9), f = o + -9 | 0, !((u = u + 4 | 0) >>> 0 < M >>> 0 & 9 < (0 | o))) {
                      o = f;
                      break;
                    }
                    o = f;
                  }
                V0(e, 48, o + 9 | 0, 9, 0);
              } else {
                if (G >>> 0 < (l = y ? M : G + 4 | 0) >>> 0 & -1 < (0 | o)) {
                  m = (8 & s | 0) == 0, y = _ = X + 9 | 0, a = 0 - O | 0, p = X + 8 | 0, k = G;
                  do {
                    (0 | (f = 0 | t2(0 | r[k >> 2], 0, _))) == (0 | _) && (U[p >> 0] = 48, f = p);
                    do
                      if ((0 | k) == (0 | G)) {
                        if (u = f + 1 | 0, D0(e, f, 1), m & (0 | o) < 1) {
                          f = u;
                          break;
                        }
                        D0(e, 2574, 1), f = u;
                      } else {
                        if (f >>> 0 <= X >>> 0)
                          break;
                        for (B0(0 | X, 48, f + a | 0); X >>> 0 < (f = f + -1 | 0) >>> 0; )
                          ;
                      }
                    while (0);
                  } while (D0(e, f, (0 | (O = y - f | 0)) < (0 | o) ? O : o), (k = k + 4 | 0) >>> 0 < l >>> 0 & -1 < (0 | (o = o - O | 0)));
                }
                V0(e, 48, o + 18 | 0, 18, 0), D0(e, I, S - I | 0);
              }
              V0(e, 32, i, A, 8192 ^ s);
            }
          while (0);
          return v = P, 0 | ((0 | A) < (0 | i) ? i : A);
        }
        function pr(e, n, i) {
          e |= 0, n |= 0, i |= 0;
          var l, s, t, c, A, o, f, u, a = 0, k = 0, p = v;
          for (v = v + 224 | 0, A = p + 208 | 0, f = p + 80 | 0, k = (a = u = (o = p) + 160 | 0) + 40 | 0; (0 | (a = a + 4 | (r[a >> 2] = 0))) < (0 | k); )
            ;
          r[A >> 2] = r[i >> 2], 0 <= (0 | U2(0, n, A, f, u)) && (c = 32 & (i = 0 | r[e >> 2]), (0 | U[e + 74 >> 0]) < 1 && (r[e >> 2] = -33 & i), 0 | r[(k = e + 48 | 0) >> 2] ? U2(e, n, A, f, u) : (i = 0 | r[(a = e + 44 | 0) >> 2], r[a >> 2] = o, r[(l = e + 28 | 0) >> 2] = o, r[(t = e + 20 | 0) >> 2] = o, r[k >> 2] = 80, r[(s = e + 16 | 0) >> 2] = o + 80, U2(e, n, A, f, u), 0 | i && (C2[3 & r[e + 36 >> 2]](e, 0, 0), r[a >> 2] = i, r[k >> 2] = 0, r[s >> 2] = 0, r[l >> 2] = 0, r[t >> 2] = 0)), r[e >> 2] = r[e >> 2] | c), v = p;
        }
        function U2(e, n, i, l, s) {
          e |= 0, i |= 0, l |= 0, s |= 0;
          var t, c, A, o, f, u, a, k, p, w = 0, _ = 0, y = 0, m = 0, I = 0, M = 0, G = 0, R = 0, x = 0, W = 0, d = 0, S = 0, O = 0, X = v;
          v = v + 64 | 0, u = X + 40 | 0, p = (c = X) + 48 | 0, a = X + 60 | 0, r[(k = X + 56 | 0) >> 2] = n |= 0, f = (0 | e) != 0, o = t = c + 40 | 0, c = c + 39 | 0, A = 4 + p | 0, m = w = n = 0;
          r:
            for (; ; ) {
              do {
                do
                  if (-1 < (0 | n)) {
                    if ((2147483647 - n | 0) < (0 | w)) {
                      r[922] = 61, n = -1;
                      break;
                    }
                    n = w + n | 0;
                    break;
                  }
                while (0);
                if (G = 0 | r[k >> 2], !((w = 0 | U[G >> 0]) << 24 >> 24)) {
                  S = 91;
                  break r;
                }
                _ = G;
                e:
                  for (; ; ) {
                    switch (w << 24 >> 24) {
                      case 37:
                        S = 10;
                        break e;
                      case 0:
                        w = _;
                        break e;
                    }
                    r[k >> 2] = d = _ + 1 | 0, w = 0 | U[d >> 0], _ = d;
                  }
                e:
                  do
                    if ((0 | S) == 10) {
                      S = 0, w = y = _;
                      do
                        if ((0 | U[y + 1 >> 0]) != 37)
                          break e;
                      while (w = w + 1 | 0, r[k >> 2] = y = y + 2 | 0, (0 | U[y >> 0]) == 37);
                    }
                  while (0);
              } while (w = w - G | 0, f && D0(e, G, w), (0 | w) != 0);
              if (y = 0 | r[k >> 2], M = 0 | l2(w = 0 | U[y + 1 >> 0]) ? (_ = (M = (0 | U[y + 2 >> 0]) == 36) ? 3 : 1, x = M ? w + -48 | 0 : -1, M ? 1 : m) : (x = -(_ = 1), m), r[k >> 2] = _ = y + _ | 0, 31 < (y = ((w = 0 | U[_ >> 0]) << 24 >> 24) - 32 | 0) >>> 0 | (1 << y & 75913 | 0) == 0)
                I = 0;
              else
                for (w = 0; ; ) {
                  if (m = 1 << y | w, r[k >> 2] = _ = _ + 1 | 0, 31 < (y = ((w = 0 | U[_ >> 0]) << 24 >> 24) - 32 | 0) >>> 0 | (1 << y & 75913 | 0) == 0) {
                    I = m;
                    break;
                  }
                  w = m;
                }
              if (w << 24 >> 24 == 42) {
                if (0 | l2(w = 0 | U[(y = _ + 1 | 0) >> 0]) && (0 | U[_ + 2 >> 0]) == 36)
                  r[s + (w + -48 << 2) >> 2] = 10, m = 1, w = _ + 3 | 0, _ = 0 | r[l + ((0 | U[y >> 0]) - 48 << 3) >> 2];
                else {
                  if (0 | M) {
                    n = -1;
                    break;
                  }
                  f ? (m = 3 + (0 | r[i >> 2]) & -4, _ = 0 | r[m >> 2], r[i >> 2] = m + 4, m = 0, w = y) : (w = y, _ = m = 0);
                }
                y = r[k >> 2] = w, R = (W = (0 | _) < 0) ? 8192 | I : I, d = m, W = W ? 0 - _ | 0 : _;
              } else {
                if ((0 | (w = 0 | k1(k))) < 0) {
                  n = -1;
                  break;
                }
                y = 0 | r[k >> 2], R = I, d = M, W = w;
              }
              do
                if ((0 | U[y >> 0]) == 46) {
                  if ((0 | U[(w = y + 1 | 0) >> 0]) != 42) {
                    r[k >> 2] = w, I = 0 | k1(k), w = 0 | r[k >> 2];
                    break;
                  }
                  if (0 | l2(_ = 0 | U[(w = y + 2 | 0) >> 0]) && (0 | U[y + 3 >> 0]) == 36) {
                    r[s + (_ + -48 << 2) >> 2] = 10, I = 0 | r[l + ((0 | U[w >> 0]) - 48 << 3) >> 2], r[k >> 2] = w = y + 4 | 0;
                    break;
                  }
                  if (0 | d) {
                    n = -1;
                    break r;
                  }
                  f ? (M = 3 + (0 | r[i >> 2]) & -4, _ = 0 | r[M >> 2], r[i >> 2] = M + 4) : _ = 0, r[k >> 2] = w, I = _;
                } else
                  w = y, I = -1;
              while (0);
              for (M = 0; ; ) {
                if (57 < ((0 | U[w >> 0]) - 65 | 0) >>> 0) {
                  n = -1;
                  break r;
                }
                if (r[k >> 2] = _ = w + 1 | 0, !(((m = 255 & (y = 0 | U[(0 | U[w >> 0]) - 65 + (16 + (58 * M | 0)) >> 0])) + -1 | 0) >>> 0 < 8))
                  break;
                w = _, M = m;
              }
              if (!(y << 24 >> 24)) {
                n = -1;
                break;
              }
              _ = -1 < (0 | x);
              do
                if (y << 24 >> 24 == 19) {
                  if (_) {
                    n = -1;
                    break r;
                  }
                  S = 52;
                } else {
                  if (_) {
                    r[s + (x << 2) >> 2] = m, x = 0 | r[(m = l + (x << 3) | 0) + 4 >> 2], r[(S = u) >> 2] = r[m >> 2], r[S + 4 >> 2] = x, S = 52;
                    break;
                  }
                  if (!f) {
                    n = 0;
                    break r;
                  }
                  h1(u, m, i), S = 53;
                }
              while (0);
              (0 | S) == 52 && (S = 0, f ? S = 53 : w = 0);
              e:
                do
                  if ((0 | S) == 53) {
                    y = (S = 0) != (0 | M) & (15 & (y = 0 | U[w >> 0]) | 0) == 3 ? -33 & y : y, w = -65537 & R, x = 8192 & R | 0 ? w : R;
                    n:
                      do
                        switch (0 | y) {
                          case 110:
                            switch ((255 & M) << 24 >> 24) {
                              case 0:
                              case 1:
                                r[r[u >> 2] >> 2] = n, w = 0;
                                break e;
                              case 2:
                                w = 0 | r[u >> 2], r[w >> 2] = n, r[w + 4 >> 2] = ((0 | n) < 0) << 31 >> 31, w = 0;
                                break e;
                              case 3:
                                a0[r[u >> 2] >> 1] = n, w = 0;
                                break e;
                              case 4:
                                U[r[u >> 2] >> 0] = n, w = 0;
                                break e;
                              case 6:
                                r[r[u >> 2] >> 2] = n, w = 0;
                                break e;
                              case 7:
                                w = 0 | r[u >> 2], r[w >> 2] = n, r[w + 4 >> 2] = ((0 | n) < 0) << 31 >> 31, w = 0;
                                break e;
                              default:
                                w = 0;
                                break e;
                            }
                          case 112:
                            w = 8 | x, _ = 8 < I >>> 0 ? I : 8, m = 120, S = 65;
                            break;
                          case 88:
                          case 120:
                            w = x, _ = I, m = y, S = 65;
                            break;
                          case 111:
                            I = (8 & (w = x) | 0) == 0 | (0 | (y = o - (M = 0 | function(P, Z, N) {
                              if (N |= 0, !((0 | (P |= 0)) == 0 & (0 | (Z |= 0)) == 0))
                                for (; U[(N = N + -1 | 0) >> 0] = 7 & P | 48, P = 0 | I2(0 | P, 0 | Z, 3), Z = 0 | F0(), !((0 | P) == 0 & (0 | Z) == 0); )
                                  ;
                              return 0 | N;
                            }(G = 0 | r[(R = u) >> 2], R = 0 | r[R + 4 >> 2], t)) | 0)) < (0 | I) ? I : y + 1 | 0, y = 0, _ = 2522, S = 71;
                            break;
                          case 105:
                          case 100:
                            if (w = 0 | r[(_ = u) >> 2], (0 | (_ = 0 | r[_ + 4 >> 2])) < 0) {
                              w = 0 | D2(0, 0, 0 | w, 0 | _), _ = 0 | F0(), r[(y = u) >> 2] = w, r[y + 4 >> 2] = _, y = 1, m = 2522, S = 70;
                              break n;
                            }
                            y = (2049 & x | 0) != 0 & 1, m = 2048 & x | 0 ? 2523 : 1 & x | 0 ? 2524 : 2522, S = 70;
                            break n;
                          case 117:
                            w = 0 | r[(_ = u) >> 2], _ = 0 | r[_ + 4 >> 2], y = 0, m = 2522, S = 70;
                            break;
                          case 99:
                            U[c >> 0] = r[u >> 2], G = c, M = w, m = 1, y = 0, _ = 2522, w = o;
                            break;
                          case 115:
                            G = R = 0 | (R = 0 | r[u >> 2]) ? R : 2532, M = w, m = (O = (0 | (x = 0 | function(P, Z) {
                              P |= 0;
                              var N = 0, H = 0;
                              N = (0 | (Z |= 0)) != 0;
                              t:
                                do
                                  if (N & (3 & P | 0) != 0)
                                    for (; ; ) {
                                      if (!(0 | U[P >> 0]))
                                        break t;
                                      if (!((N = (0 | (Z = Z + -1 | 0)) != 0) & (3 & (P = P + 1 | 0) | 0) != 0)) {
                                        H = 5;
                                        break;
                                      }
                                    }
                                  else
                                    H = 5;
                                while (0);
                              t:
                                do
                                  if ((0 | H) == 5) {
                                    do
                                      if (N) {
                                        if (!(0 | U[P >> 0])) {
                                          if (Z)
                                            break t;
                                          break;
                                        }
                                        i:
                                          do
                                            if (3 < Z >>> 0)
                                              for (; ; ) {
                                                if ((-2139062144 & (N = 0 | r[P >> 2]) ^ -2139062144) & N + -16843009 | 0)
                                                  break i;
                                                if (P = P + 4 | 0, (Z = Z + -4 | 0) >>> 0 <= 3) {
                                                  H = 11;
                                                  break;
                                                }
                                              }
                                            else
                                              H = 11;
                                          while (0);
                                        if ((0 | H) == 11 && !Z)
                                          break;
                                        for (; ; ) {
                                          if (!(0 | U[P >> 0]))
                                            break t;
                                          if (!(Z = Z + -1 | 0))
                                            break;
                                          P = P + 1 | 0;
                                        }
                                      }
                                    while (0);
                                    P = 0;
                                  }
                                while (0);
                              return 0 | P;
                            }(R, I))) == 0) ? I : x - R | 0, y = 0, _ = 2522, w = O ? R + I | 0 : x;
                            break;
                          case 67:
                            r[p >> 2] = r[u >> 2], r[A >> 2] = 0, y = r[u >> 2] = p, I = -1, S = 78;
                            break;
                          case 83:
                            if (I) {
                              y = 0 | r[u >> 2], S = 78;
                              break n;
                            }
                            V0(e, 32, W, 0, x), w = 0, S = 88;
                            break n;
                          case 65:
                          case 71:
                          case 70:
                          case 69:
                          case 97:
                          case 103:
                          case 102:
                          case 101:
                            w = 0 | _r(e, +s0[u >> 3], W, I, x, y);
                            break e;
                          default:
                            M = x, m = I, y = 0, _ = 2522, w = o;
                        }
                      while (0);
                    n:
                      do
                        if ((0 | S) == 65)
                          M = 0 | Gr(G = 0 | r[(R = u) >> 2], R = 0 | r[R + 4 >> 2], t, 32 & m), I = _, y = (O = (8 & w | 0) == 0 | (0 | G) == 0 & (0 | R) == 0) ? 0 : 2, _ = O ? 2522 : 2522 + (m >>> 4) | 0, S = 71;
                        else if ((0 | S) == 70)
                          M = 0 | t2(G = w, R = _, t), w = x, _ = m, S = 71;
                        else if ((0 | S) == 78) {
                          for (w = S = 0, M = y; _ = 0 | r[M >> 2]; ) {
                            if ((m = (0 | (_ = 0 | v1(a, _))) < 0) | (I - w | 0) >>> 0 < _ >>> 0) {
                              S = 82;
                              break;
                            }
                            if (!((w = _ + w | 0) >>> 0 < I >>> 0))
                              break;
                            M = M + 4 | 0;
                          }
                          if ((0 | S) == 82 && (S = 0, m)) {
                            n = -1;
                            break r;
                          }
                          if (V0(e, 32, W, w, x), w)
                            for (m = 0; ; ) {
                              if (!(_ = 0 | r[y >> 2])) {
                                S = 88;
                                break n;
                              }
                              if ((0 | w) < (0 | (m = (_ = 0 | v1(a, _)) + m | 0))) {
                                S = 88;
                                break n;
                              }
                              if (D0(e, a, _), w >>> 0 <= m >>> 0) {
                                S = 88;
                                break;
                              }
                              y = y + 4 | 0;
                            }
                          else
                            w = 0, S = 88;
                        }
                      while (0);
                    if ((0 | S) == 71)
                      O = (S = 0) != (0 | I) | (m = (0 | G) != 0 | (0 | R) != 0), m = o - M + (1 & (1 ^ m)) | 0, G = O ? M : t, M = -1 < (0 | I) ? -65537 & w : w, m = O ? (0 | m) < (0 | I) ? I : m : 0, w = o;
                    else if ((0 | S) == 88) {
                      S = 0, V0(e, 32, W, w, 8192 ^ x), w = (0 | w) < (0 | W) ? W : w;
                      break;
                    }
                    V0(e, 32, w = (0 | W) < (0 | (O = (R = (0 | m) < (0 | (x = w - G | 0)) ? x : m) + y | 0)) ? O : W, O, M), D0(e, _, y), V0(e, 48, w, O, 65536 ^ M), V0(e, 48, R, x, 0), D0(e, G, x), V0(e, 32, w, O, 8192 ^ M);
                  }
                while (0);
              m = d;
            }
          r:
            do
              if ((0 | S) == 91 && !e)
                if (m) {
                  for (n = 1; w = 0 | r[s + (n << 2) >> 2]; )
                    if (h1(l + (n << 3) | 0, w, i), 10 <= (n = n + 1 | 0) >>> 0) {
                      n = 1;
                      break r;
                    }
                  for (w = 0; ; ) {
                    if (n = n + 1 | 0, 0 | w) {
                      n = -1;
                      break r;
                    }
                    if (10 <= n >>> 0) {
                      n = 1;
                      break r;
                    }
                    w = 0 | r[s + (n << 2) >> 2];
                  }
                } else
                  n = 0;
            while (0);
          return v = X, 0 | n;
        }
        function D0(e, n, i) {
          n |= 0, i |= 0, 32 & r[(e |= 0) >> 2] || Ir(n, i, e);
        }
        function l2(e) {
          return ((e |= 0) + -48 | 0) >>> 0 < 10 | 0;
        }
        function k1(e) {
          var n = 0, l = 0, i = 0, l = 0 | r[(e |= 0) >> 2];
          if (0 | l2((n = 0 | U[l >> 0]) << 24 >> 24))
            for (i = n, n = 0; n = (10 * n | 0) - 48 + (i << 24 >> 24) | 0, r[e >> 2] = l = l + 1 | 0, (0 | l2((i = 0 | U[l >> 0]) << 24 >> 24)) != 0; )
              ;
          else
            n = 0;
          return 0 | n;
        }
        function h1(e, n, i) {
          e |= 0, n |= 0, i |= 0;
          var l, s = 0, t = 0;
          r:
            do
              if (n >>> 0 <= 20)
                switch (0 | n) {
                  case 9:
                    s = 3 + (0 | r[i >> 2]) & -4, n = 0 | r[s >> 2], r[i >> 2] = s + 4, r[e >> 2] = n;
                    break r;
                  case 10:
                    s = 3 + (0 | r[i >> 2]) & -4, n = 0 | r[s >> 2], r[i >> 2] = s + 4, r[(s = e) >> 2] = n, r[s + 4 >> 2] = ((0 | n) < 0) << 31 >> 31;
                    break r;
                  case 11:
                    s = 3 + (0 | r[i >> 2]) & -4, n = 0 | r[s >> 2], r[i >> 2] = s + 4, r[(s = e) >> 2] = n, r[s + 4 >> 2] = 0;
                    break r;
                  case 12:
                    s = 7 + (0 | r[i >> 2]) & -8, t = 0 | r[(n = s) >> 2], n = 0 | r[n + 4 >> 2], r[i >> 2] = s + 8, r[(s = e) >> 2] = t, r[s + 4 >> 2] = n;
                    break r;
                  case 13:
                    t = 3 + (0 | r[i >> 2]) & -4, s = 0 | r[t >> 2], r[i >> 2] = t + 4, r[(t = e) >> 2] = s = (65535 & s) << 16 >> 16, r[t + 4 >> 2] = ((0 | s) < 0) << 31 >> 31;
                    break r;
                  case 14:
                    t = 3 + (0 | r[i >> 2]) & -4, s = 0 | r[t >> 2], r[i >> 2] = t + 4, r[(t = e) >> 2] = 65535 & s, r[t + 4 >> 2] = 0;
                    break r;
                  case 15:
                    t = 3 + (0 | r[i >> 2]) & -4, s = 0 | r[t >> 2], r[i >> 2] = t + 4, r[(t = e) >> 2] = s = (255 & s) << 24 >> 24, r[t + 4 >> 2] = ((0 | s) < 0) << 31 >> 31;
                    break r;
                  case 16:
                    t = 3 + (0 | r[i >> 2]) & -4, s = 0 | r[t >> 2], r[i >> 2] = t + 4, r[(t = e) >> 2] = 255 & s, r[t + 4 >> 2] = 0;
                    break r;
                  case 17:
                    t = 7 + (0 | r[i >> 2]) & -8, l = +s0[t >> 3], r[i >> 2] = t + 8, s0[e >> 3] = l;
                    break r;
                  case 18:
                    (function(c, A) {
                      c |= 0;
                      var o = 7 + (0 | r[(A |= 0) >> 2]) & -8, f = +s0[o >> 3];
                      r[A >> 2] = 8 + o, s0[c >> 3] = f;
                    })(e, i);
                    break r;
                  default:
                    break r;
                }
            while (0);
        }
        function Gr(e, n, i, l) {
          if (i |= 0, l |= 0, !((0 | (e |= 0)) == 0 & (0 | (n |= 0)) == 0))
            for (; U[(i = i + -1 | 0) >> 0] = 0 | r0[480 + (15 & e) >> 0] | l, !((0 | (e = 0 | I2(0 | e, 0 | n, 4))) == 0 & (0 | (n = 0 | F0())) == 0); )
              ;
          return 0 | i;
        }
        function t2(e, n, i) {
          i |= 0;
          var l, s = 0, t = 0;
          if (0 < (n |= 0) >>> 0 | (0 | n) == 0 & 4294967295 < (e |= 0) >>> 0)
            for (; t = 0 | a2(0 | (l = e), 0 | (s = n), 0 | (t = 0 | S2(0 | (e = 0 | B2(0 | e, 0 | n, 10, 0)), 0 | (n = 0 | F0()), -10, -1)), 0 | F0()), F0(), U[(i = i + -1 | 0) >> 0] = 255 & t | 48, 9 < s >>> 0 | (0 | s) == 9 & 4294967295 < l >>> 0; )
              ;
          if (e)
            for (; s = 255 & ((t = e) + (0 | h0(e = (e >>> 0) / 10 | 0, -10)) | 48), U[(i = i + -1 | 0) >> 0] = s, 10 <= t >>> 0; )
              ;
          return 0 | i;
        }
        function V0(e, n, i, l, s) {
          e |= 0, n |= 0;
          var t, c = v;
          if (v = v + 256 | 0, t = c, (0 | (l |= 0)) < (0 | (i |= 0)) & (73728 & (s |= 0) | 0) == 0) {
            if (B0(0 | t, n << 24 >> 24 | 0, 0 | ((s = i - l | 0) >>> 0 < 256 ? s : 256)), 255 < s >>> 0) {
              for (l = s; D0(e, t, 256), 255 < (l = l + -256 | 0) >>> 0; )
                ;
              s &= 255;
            }
            D0(e, t, s);
          }
          v = c;
        }
        function v1(e, n) {
          return n |= 0, 0 | (e = (e |= 0) ? 0 | Dr(e, n) : 0);
        }
        function Dr(e, n) {
          e |= 0, n |= 0;
          do
            if (e) {
              if (n >>> 0 < 128) {
                U[e >> 0] = n, e = 1;
                break;
              }
              if (!(0 | r[916])) {
                if ((-128 & n | 0) == 57216) {
                  U[e >> 0] = n, e = 1;
                  break;
                }
                r[922] = 25, e = -1;
                break;
              }
              if (n >>> 0 < 2048) {
                U[e >> 0] = n >>> 6 | 192, U[e + 1 >> 0] = 63 & n | 128, e = 2;
                break;
              }
              if (n >>> 0 < 55296 | (-8192 & n | 0) == 57344) {
                U[e >> 0] = n >>> 12 | 224, U[e + 1 >> 0] = n >>> 6 & 63 | 128, U[e + 2 >> 0] = 63 & n | 128, e = 3;
                break;
              }
              if ((n + -65536 | 0) >>> 0 < 1048576) {
                U[e >> 0] = n >>> 18 | 240, U[e + 1 >> 0] = n >>> 12 & 63 | 128, U[e + 2 >> 0] = n >>> 6 & 63 | 128, U[e + 3 >> 0] = 63 & n | 128, e = 4;
                break;
              }
              r[922] = 25, e = -1;
              break;
            }
          while (e = 1, 0);
          return 0 | e;
        }
        function Ir(e, n, i) {
          e |= 0, n |= 0;
          var l, s = 0, t = 0, c = 0;
          (s = 0 | r[(t = (i |= 0) + 16 | 0) >> 2]) ? c = 5 : 0 | function(A) {
            var o = 0, f = 0;
            return f = 0 | U[(o = 74 + (A |= 0) | 0) >> 0], U[o >> 0] = 255 + f | f, o = 8 & (o = 0 | r[A >> 2]) ? (r[A >> 2] = 32 | o, -1) : (r[A + 8 >> 2] = 0, r[A + 4 >> 2] = 0, o = 0 | r[A + 44 >> 2], r[A + 28 >> 2] = o, r[A + 20 >> 2] = o, r[A + 16 >> 2] = o + (0 | r[A + 48 >> 2]), 0), 0 | o;
          }(i) || (s = 0 | r[t >> 2], c = 5);
          r:
            do
              if ((0 | c) == 5) {
                if ((s - (t = c = 0 | r[(l = i + 20 | 0) >> 2]) | 0) >>> 0 < n >>> 0) {
                  C2[3 & r[i + 36 >> 2]](i, e, n);
                  break;
                }
                e:
                  do
                    if ((0 | U[i + 75 >> 0]) < 0 | (0 | n) == 0)
                      s = n;
                    else {
                      for (c = n; (0 | U[e + (s = c + -1 | 0) >> 0]) != 10; ) {
                        if (!s) {
                          s = n;
                          break e;
                        }
                        c = s;
                      }
                      if ((0 | C2[3 & r[i + 36 >> 2]](i, e, c)) >>> 0 < c >>> 0)
                        break r;
                      t = 0 | r[l >> 2], s = n - c | 0, e = e + c | 0;
                    }
                  while (0);
                H0(0 | t, 0 | e, 0 | s), r[l >> 2] = (0 | r[l >> 2]) + s;
              }
            while (0);
        }
        function y1(e) {
          return s0[C0 >> 3] = e = +e, e = 0 | r[C0 >> 2], _0(0 | r[C0 + 4 >> 2]), 0 | e;
        }
        function _1(e, n) {
          n |= 0;
          var i, l, s = 0;
          switch (s0[C0 >> 3] = e = +e, l = 0 | I2(0 | (s = 0 | r[C0 >> 2]), 0 | (i = 0 | r[C0 + 4 >> 2]), 52), F0(), 2047 & l) {
            case 0:
              s = e != 0 ? (e = +_1(18446744073709552e3 * e, n), (0 | r[n >> 2]) - 64 | 0) : 0, r[n >> 2] = s;
              break;
            case 2047:
              break;
            default:
              r[n >> 2] = (2047 & l) - 1022, r[C0 >> 2] = s, r[C0 + 4 >> 2] = -2146435073 & i | 1071644672, e = +s0[C0 >> 3];
          }
          return +e;
        }
        function p1(e) {
          var n, s = 0, i = 0, l = 0, s = 0 | U[(e |= 0) >> 0];
          r:
            do
              if (s << 24 >> 24)
                for (i = e, l = 4, e = 1033; ; ) {
                  if (!(s << 24 >> 24 == (n = 0 | U[e >> 0]) << 24 >> 24 & (0 | (l = l + -1 | 0)) != 0 & n << 24 >> 24 != 0))
                    break r;
                  if (e = e + 1 | 0, !((s = 0 | U[(i = i + 1 | 0) >> 0]) << 24 >> 24)) {
                    s = 0;
                    break;
                  }
                }
              else
                s = 0, e = 1033;
            while (0);
          return (255 & s) - (0 | r0[e >> 0]) | 0;
        }
        function E2(e, n, i) {
          n |= 0, i |= 0;
          var l, s, t, c = 0, A = 0, o = v;
          v = v + 240 | 0, r[(t = o) >> 2] = e |= 0;
          r:
            do
              if (1 < (0 | n))
                for (A = c = e, e = 1; ; ) {
                  if (-1 < (0 | q0(c, l = (A = A + -4 | 0) + (0 - (0 | r[i + ((s = n + -2 | 0) << 2) >> 2])) | 0)) && -1 < (0 | q0(c, A)) || (c = t + (e << 2) | 0, e = e + 1 | 0, (0 | (n = -1 < (0 | q0(l, A)) ? (A = r[c >> 2] = l, n + -1 | 0) : (r[c >> 2] = A, s))) <= 1))
                    break r;
                  c = 0 | r[t >> 2];
                }
              else
                e = 1;
            while (0);
          I1(t, e), v = o;
        }
        function _2(e, n) {
          var i = 0, l = 0, s = (e |= 0) + 4 | 0;
          31 < (n |= 0) >>> 0 ? (i = 0 | r[s >> 2], r[e >> 2] = i, n = n + -32 | (l = r[s >> 2] = 0)) : (i = 0 | r[e >> 2], l = 0 | r[s >> 2]), r[e >> 2] = l << 32 - n | (n ? i >>> n : i), r[s >> 2] = n ? l >>> n : l;
        }
        function p2(e, n, i, l, s, t) {
          e |= 0, i |= 0, l |= 0, s |= 0, t |= 0;
          var c, A, o, f = 0, u = 0, a = v;
          v = v + 240 | 0, r[(A = (o = a) + 232 | 0) >> 2] = n |= 0, r[(c = 4 + A | 0) >> 2] = i, r[o >> 2] = e;
          r:
            do
              if ((0 | n) != 1 | (0 | i) != 0 && (f = e + (0 - (0 | r[t + (l << 2) >> 2])) | 0, 1 <= (0 | q0(f, e))))
                for (n = f, u = 1, f = (0 | s) == 0; ; ) {
                  if (f & 1 < (0 | l)) {
                    if (-1 < (0 | q0(f = e + -4 | 0, n))) {
                      n = e, f = u, i = 10;
                      break r;
                    }
                    if (-1 < (0 | q0(f + (0 - (0 | r[t + (l + -2 << 2) >> 2])) | 0, n))) {
                      n = e, f = u, i = 10;
                      break r;
                    }
                  }
                  if (i = u + 1 | 0, r[o + (u << 2) >> 2] = n, _2(A, s = 0 | G1(A)), l = s + l | 0, !((0 | r[A >> 2]) != 1 | (0 | r[c >> 2]) != 0)) {
                    f = i, i = 10;
                    break r;
                  }
                  if ((0 | q0(f = n + (0 - (0 | r[t + (l << 2) >> 2])) | 0, 0 | r[o >> 2])) < 1) {
                    f = i, i = 10;
                    break;
                  }
                  e = n, n = f, u = i, f = 1;
                }
              else
                i = 9;
            while (0);
          (0 | i) == 9 && !(0 | s) && (n = e, f = 1, i = 10), (0 | i) == 10 && (I1(o, f), E2(n, l, t)), v = a;
        }
        function G2(e, n) {
          var i = 0, l = 0, s = (e |= 0) + 4 | 0;
          31 < (n |= 0) >>> 0 ? (i = 0 | r[e >> 2], r[s >> 2] = i, n = n + -32 | (l = r[e >> 2] = 0)) : (i = 0 | r[s >> 2], l = 0 | r[e >> 2]), r[s >> 2] = ((s = 32 - n | 0) ? l >>> s : l) | i << n, r[e >> 2] = l << n;
        }
        function G1(e) {
          var n;
          return (n = 0 | D1((0 | r[(e |= 0) >> 2]) - 1 | 0)) ? 0 | n : 0 | (0 | (e = 0 | D1(0 | r[e + 4 >> 2])) ? e + 32 | 0 : 0);
        }
        function D1(e) {
          var n = 0;
          if (e |= 0)
            if (1 & e)
              n = 0;
            else
              for (n = 0; n = n + 1 | 0, !(2 & e); )
                e >>>= 1;
          else
            n = 32;
          return 0 | n;
        }
        function I1(e, n) {
          e |= 0;
          var i, l = 0, s = v;
          if (v = v + 256 | 0, l = s, 2 <= (0 | (n |= 0)))
            for (H0(0 | (r[e + (n << 2) >> 2] = l), 0 | r[e >> 2], 4), l = 0; H0(0 | r[(i = e + (l << 2) | 0) >> 2], 0 | r[e + ((l = l + 1 | 0) << 2) >> 2], 4), r[i >> 2] = 4 + (0 | r[i >> 2]), (0 | l) != (0 | n); )
              ;
          v = s;
        }
        function g2(e) {
          e |= 0;
          var n = 0, i = 0, l = 0, s = 0, t = 0, c = 0, A = 0, o = 0, f = 0, u = 0, a = 0, k = 0, p = 0, w = 0, _ = 0, y = 0, m = 0, I = 0, M = 0, G = 0, R = v;
          v = v + 16 | 0, k = R;
          do
            if (e >>> 0 < 245) {
              if (a = 0 | r[923], 3 & (i = (e = (f = e >>> 0 < 11 ? 16 : e + 11 & -8) >>> 3) ? a >>> e : a) | 0)
                return e = 0 | r[(n = (s = 3732 + ((l = (1 & i ^ 1) + e | 0) << 1 << 2) | 0) + 8 | 0) >> 2], (0 | (i = 0 | r[(t = e + 8 | 0) >> 2])) == (0 | s) ? r[923] = a & ~(1 << l) : (r[i + 12 >> 2] = s, r[n >> 2] = i), r[e + 4 >> 2] = 3 | (G = l << 3), r[(G = e + G + 4 | 0) >> 2] = 1 | r[G >> 2], v = R, 0 | (G = t);
              if ((u = 0 | r[925]) >>> 0 < f >>> 0) {
                if (0 | i)
                  return t = 0 | r[(n = (i = 3732 + ((l = ((e = (l = (A = (l = ((l = i << e & ((l = 2 << e) | 0 - l)) & 0 - l) - 1 | 0) >>> 12 & 16) ? l >>> A : l) >>> 5 & 8) | A | (t = (l = e ? l >>> e : l) >>> 2 & 4) | (n = (l = t ? l >>> t : l) >>> 1 & 2) | (i = (l = n ? l >>> n : l) >>> 1 & 1)) + (i ? l >>> i : l) | 0) << 1 << 2) | 0) + 8 | 0) >> 2], (0 | (e = 0 | r[(A = t + 8 | 0) >> 2])) == (0 | i) ? r[923] = e = a & ~(1 << l) : (r[e + 12 >> 2] = i, r[n >> 2] = e, e = a), c = (G = l << 3) - f | 0, r[t + 4 >> 2] = 3 | f, r[(s = t + f | 0) + 4 >> 2] = 1 | c, r[t + G >> 2] = c, 0 | u && (l = 0 | r[928], i = 3732 + ((n = u >>> 3) << 1 << 2) | 0, e = e & (n = 1 << n) ? 0 | r[(n = e = i + 8 | 0) >> 2] : (r[923] = e | n, n = i + 8 | 0, i), r[n >> 2] = l, r[e + 12 >> 2] = l, r[l + 8 >> 2] = e, r[l + 12 >> 2] = i), r[925] = c, r[928] = s, v = R, 0 | (G = A);
                if (t = 0 | r[924]) {
                  for (o = 0 | r[3996 + (((l = (o = (s = (o = (t & 0 - t) - 1 | 0) >>> 12 & 16) ? o >>> s : o) >>> 5 & 8) | s | (c = (o = l ? o >>> l : o) >>> 2 & 4) | (i = (o = c ? o >>> c : o) >>> 1 & 2) | (A = (o = i ? o >>> i : o) >>> 1 & 1)) + (A ? o >>> A : o) << 2) >> 2], A = (-8 & r[o + 4 >> 2]) - f | 0, i = o; !(!(e = 0 | r[i + 16 >> 2]) && !(e = 0 | r[i + 20 >> 2])); )
                    A = (c = (i = (-8 & r[e + 4 >> 2]) - f | 0) >>> 0 < A >>> 0) ? i : A, i = e, o = c ? e : o;
                  if (o >>> 0 < (c = o + f | 0) >>> 0) {
                    s = 0 | r[o + 24 >> 2], n = 0 | r[o + 12 >> 2];
                    do
                      if ((0 | n) == (0 | o)) {
                        if (!(n = 0 | r[(e = o + 20 | 0) >> 2]) && !(n = 0 | r[(e = o + 16 | 0) >> 2])) {
                          i = 0;
                          break;
                        }
                        for (; ; )
                          if (i = 0 | r[(l = n + 20 | 0) >> 2])
                            n = i, e = l;
                          else {
                            if (!(i = 0 | r[(l = n + 16 | 0) >> 2]))
                              break;
                            n = i, e = l;
                          }
                        r[e >> 2] = 0, i = n;
                      } else
                        i = 0 | r[o + 8 >> 2], r[i + 12 >> 2] = n, r[n + 8 >> 2] = i, i = n;
                    while (0);
                    do
                      if (0 | s) {
                        if (n = 0 | r[o + 28 >> 2], (0 | o) == (0 | r[(e = 3996 + (n << 2) | 0) >> 2])) {
                          if (!(r[e >> 2] = i)) {
                            r[924] = t & ~(1 << n);
                            break;
                          }
                        } else if (!(r[((0 | r[(G = s + 16 | 0) >> 2]) == (0 | o) ? G : s + 20 | 0) >> 2] = i))
                          break;
                        r[i + 24 >> 2] = s, 0 | (n = 0 | r[o + 16 >> 2]) && (r[i + 16 >> 2] = n, r[n + 24 >> 2] = i), 0 | (n = 0 | r[o + 20 >> 2]) && (r[i + 20 >> 2] = n, r[n + 24 >> 2] = i);
                      }
                    while (0);
                    return A >>> 0 < 16 ? (r[o + 4 >> 2] = 3 | (G = A + f | 0), r[(G = o + G + 4 | 0) >> 2] = 1 | r[G >> 2]) : (r[o + 4 >> 2] = 3 | f, r[c + 4 >> 2] = 1 | A, r[c + A >> 2] = A, 0 | u && (l = 0 | r[928], i = 3732 + ((n = u >>> 3) << 1 << 2) | 0, e = (n = 1 << n) & a ? 0 | r[(n = e = i + 8 | 0) >> 2] : (r[923] = n | a, n = i + 8 | 0, i), r[n >> 2] = l, r[e + 12 >> 2] = l, r[l + 8 >> 2] = e, r[l + 12 >> 2] = i), r[925] = A, r[928] = c), v = R, 0 | (G = o + 8 | 0);
                  }
                  a = f;
                } else
                  a = f;
              } else
                a = f;
            } else if (e >>> 0 <= 4294967231)
              if (f = -8 & (e = e + 11 | 0), l = 0 | r[924]) {
                i = 0 - f | 0, o = (e >>>= 8) ? 16777215 < f >>> 0 ? 31 : 1 & ((y = (o = 14 - ((A = (A = (o = e << (a = (a = e + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4) | a | (y = (y = (o <<= A) + 245760 | 0) >>> 16 & 2)) + ((o <<= y) >>> 15) | 0) + 7 | 0) ? f >>> y : f) | o << 1 : 0, e = 0 | r[3996 + (o << 2) >> 2];
                r:
                  do
                    if (e)
                      for (c = f << (((s = 0) | o) == 31 ? 0 : 25 - (o >>> 1) | 0), A = e, e = 0; ; ) {
                        if ((t = (-8 & r[A + 4 >> 2]) - f | 0) >>> 0 < i >>> 0) {
                          if (!t) {
                            i = 0, e = s = A, y = 65;
                            break r;
                          }
                          i = t, e = A;
                        }
                        if (s = (0 | (y = 0 | r[A + 20 >> 2])) == 0 | (0 | y) == (0 | (A = 0 | r[A + 16 + (c >>> 31 << 2) >> 2])) ? s : y, !A) {
                          y = 61;
                          break;
                        }
                        c <<= 1;
                      }
                    else
                      e = s = 0, y = 61;
                  while (0);
                if ((0 | y) == 61) {
                  if ((0 | s) == 0 & (0 | e) == 0) {
                    if (!(e = ((e = 2 << o) | 0 - e) & l)) {
                      a = f;
                      break;
                    }
                    s = 0 | r[3996 + (((c = (s = (A = (s = (e & 0 - e) - 1 | 0) >>> 12 & 16) ? s >>> A : s) >>> 5 & 8) | A | (o = (s = c ? s >>> c : s) >>> 2 & 4) | (a = (s = o ? s >>> o : s) >>> 1 & 2) | (e = (s = a ? s >>> a : s) >>> 1 & 1)) + (e ? s >>> e : s) << 2) >> 2], e = 0;
                  }
                  s ? y = 65 : (A = i, t = e);
                }
                if ((0 | y) == 65)
                  for (; ; ) {
                    if (i = (t = (a = (-8 & r[s + 4 >> 2]) - f | 0) >>> 0 < i >>> 0) ? a : i, t = t ? s : e, !(e = (e = 0 | r[s + 16 >> 2]) || 0 | r[s + 20 >> 2])) {
                      A = i;
                      break;
                    }
                    s = e, e = t;
                  }
                if (0 | t && A >>> 0 < ((0 | r[925]) - f | 0) >>> 0 && t >>> 0 < (u = t + f | 0) >>> 0) {
                  c = 0 | r[t + 24 >> 2], n = 0 | r[t + 12 >> 2];
                  do
                    if ((0 | n) == (0 | t)) {
                      if (!(n = 0 | r[(e = t + 20 | 0) >> 2]) && !(n = 0 | r[(e = t + 16 | 0) >> 2])) {
                        n = 0;
                        break;
                      }
                      for (; ; )
                        if (i = 0 | r[(s = n + 20 | 0) >> 2])
                          n = i, e = s;
                        else {
                          if (!(i = 0 | r[(s = n + 16 | 0) >> 2]))
                            break;
                          n = i, e = s;
                        }
                      r[e >> 2] = 0;
                    } else
                      G = 0 | r[t + 8 >> 2], r[G + 12 >> 2] = n, r[n + 8 >> 2] = G;
                  while (0);
                  do
                    if (c) {
                      if (e = 0 | r[t + 28 >> 2], (0 | t) == (0 | r[(i = 3996 + (e << 2) | 0) >> 2])) {
                        if (!(r[i >> 2] = n)) {
                          l &= ~(1 << e), r[924] = l;
                          break;
                        }
                      } else if (!(r[((0 | r[(G = c + 16 | 0) >> 2]) == (0 | t) ? G : c + 20 | 0) >> 2] = n))
                        break;
                      r[n + 24 >> 2] = c, 0 | (e = 0 | r[t + 16 >> 2]) && (r[n + 16 >> 2] = e, r[e + 24 >> 2] = n), (e = 0 | r[t + 20 >> 2]) && (r[n + 20 >> 2] = e, r[e + 24 >> 2] = n);
                    }
                  while (0);
                  r:
                    do
                      if (A >>> 0 < 16)
                        r[t + 4 >> 2] = 3 | (G = A + f | 0), r[(G = t + G + 4 | 0) >> 2] = 1 | r[G >> 2];
                      else {
                        if (r[t + 4 >> 2] = 3 | f, r[u + 4 >> 2] = 1 | A, n = (r[u + A >> 2] = A) >>> 3, A >>> 0 < 256) {
                          i = 3732 + (n << 1 << 2) | 0, e = (e = 0 | r[923]) & (n = 1 << n) ? 0 | r[(n = e = i + 8 | 0) >> 2] : (r[923] = e | n, n = i + 8 | 0, i), r[n >> 2] = u, r[e + 12 >> 2] = u, r[u + 8 >> 2] = e, r[u + 12 >> 2] = i;
                          break;
                        }
                        if (n = 3996 + ((i = (n = A >>> 8) ? 16777215 < A >>> 0 ? 31 : 1 & ((G = (i = 14 - ((I = (I = (i = n << (M = (M = n + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4) | M | (G = (G = (i <<= I) + 245760 | 0) >>> 16 & 2)) + ((i <<= G) >>> 15) | 0) + 7 | 0) ? A >>> G : A) | i << 1 : 0) << 2) | 0, r[u + 28 >> 2] = i, r[(e = u + 16 | 0) + 4 >> 2] = 0, r[e >> 2] = 0, !(l & (e = 1 << i))) {
                          r[924] = l | e, r[n >> 2] = u, r[u + 24 >> 2] = n, r[u + 12 >> 2] = u, r[u + 8 >> 2] = u;
                          break;
                        }
                        n = 0 | r[n >> 2];
                        e:
                          do
                            if ((-8 & r[n + 4 >> 2] | 0) != (0 | A)) {
                              for (l = A << ((0 | i) == 31 ? 0 : 25 - (i >>> 1) | 0); e = 0 | r[(i = n + 16 + (l >>> 31 << 2) | 0) >> 2]; ) {
                                if ((-8 & r[e + 4 >> 2] | 0) == (0 | A)) {
                                  n = e;
                                  break e;
                                }
                                l <<= 1, n = e;
                              }
                              r[i >> 2] = u, r[u + 24 >> 2] = n, r[u + 12 >> 2] = u, r[u + 8 >> 2] = u;
                              break r;
                            }
                          while (0);
                        G = 0 | r[(M = n + 8 | 0) >> 2], r[G + 12 >> 2] = u, r[M >> 2] = u, r[u + 8 >> 2] = G, r[u + 12 >> 2] = n, r[u + 24 >> 2] = 0;
                      }
                    while (0);
                  return v = R, 0 | (G = t + 8 | 0);
                }
                a = f;
              } else
                a = f;
            else
              a = -1;
          while (0);
          if (a >>> 0 <= (i = 0 | r[925]) >>> 0)
            return n = 0 | r[928], 15 < (e = i - a | 0) >>> 0 ? (r[928] = G = n + a | 0, r[925] = e, r[G + 4 >> 2] = 1 | e, r[n + i >> 2] = e, r[n + 4 >> 2] = 3 | a) : (r[925] = 0, r[928] = 0, r[n + 4 >> 2] = 3 | i, r[(G = n + i + 4 | 0) >> 2] = 1 | r[G >> 2]), v = R, 0 | (G = n + 8 | 0);
          if (a >>> 0 < (c = 0 | r[926]) >>> 0)
            return r[926] = I = c - a | 0, G = 0 | r[929], r[929] = M = G + a | 0, r[M + 4 >> 2] = 1 | I, r[G + 4 >> 2] = 3 | a, v = R, 0 | (G = G + 8 | 0);
          if (A = a + 48 | 0, (f = (t = (e = 0 | r[1041] ? 0 | r[1043] : (r[1043] = 4096, r[1042] = 4096, r[1044] = -1, r[1045] = -1, r[1046] = 0, r[1034] = 0, r[1041] = -16 & k ^ 1431655768, 4096)) + (o = a + 47 | 0) | 0) & (l = 0 - e | 0)) >>> 0 <= a >>> 0 || 0 | (e = 0 | r[1033]) && (k = (u = 0 | r[1031]) + f | 0) >>> 0 <= u >>> 0 | e >>> 0 < k >>> 0)
            return v = R, (G = 0) | G;
          r:
            do
              if (4 & r[1034])
                n = 0, y = 143;
              else {
                i = 0 | r[929];
                e:
                  do
                    if (i) {
                      for (s = 4140; !((e = 0 | r[s >> 2]) >>> 0 <= i >>> 0 && (e + (0 | r[(_ = s + 4 | 0) >> 2]) | 0) >>> 0 > i >>> 0); ) {
                        if (!(e = 0 | r[s + 8 >> 2])) {
                          y = 128;
                          break e;
                        }
                        s = e;
                      }
                      if ((n = t - c & l) >>> 0 < 2147483647)
                        if ((0 | (e = 0 | K0(n))) == ((0 | r[s >> 2]) + (0 | r[_ >> 2]) | 0)) {
                          if ((0 | e) != -1) {
                            c = e, t = n, y = 145;
                            break r;
                          }
                        } else
                          l = e, y = 136;
                      else
                        n = 0;
                    } else
                      y = 128;
                  while (0);
                do
                  if ((0 | y) == 128)
                    if ((0 | (i = 0 | K0(0))) != -1 && (n = i, w = (n = ((w = (p = 0 | r[1042]) + -1 | 0) & n | 0 ? (w + n & 0 - p) - n | 0 : 0) + f | 0) + (p = 0 | r[1031]) | 0, a >>> 0 < n >>> 0 & n >>> 0 < 2147483647)) {
                      if (0 | (_ = 0 | r[1033]) && w >>> 0 <= p >>> 0 | _ >>> 0 < w >>> 0) {
                        n = 0;
                        break;
                      }
                      if ((0 | (e = 0 | K0(n))) == (0 | i)) {
                        c = i, t = n, y = 145;
                        break r;
                      }
                      l = e, y = 136;
                    } else
                      n = 0;
                while (0);
                do
                  if ((0 | y) == 136) {
                    if (i = 0 - n | 0, !(n >>> 0 < A >>> 0 & n >>> 0 < 2147483647 & (0 | l) != -1)) {
                      if ((0 | l) == -1) {
                        n = 0;
                        break;
                      }
                      c = l, t = n, y = 145;
                      break r;
                    }
                    if (2147483647 <= (e = o - n + (e = 0 | r[1043]) & 0 - e) >>> 0) {
                      c = l, t = n, y = 145;
                      break r;
                    }
                    if ((0 | K0(e)) == -1) {
                      K0(i), n = 0;
                      break;
                    }
                    c = l, t = e + n | 0, y = 145;
                    break r;
                  }
                while (0);
                r[1034] = 4 | r[1034], y = 143;
              }
            while (0);
          if ((0 | y) == 143 && f >>> 0 < 2147483647 && !((0 | (m = 0 | K0(f))) == -1 | 1 ^ (I = (a + 40 | 0) >>> 0 < (M = (_ = 0 | K0(0)) - m | 0) >>> 0) | m >>> 0 < _ >>> 0 & (0 | m) != -1 & (0 | _) != -1 ^ 1) && (c = m, t = I ? M : n, y = 145), (0 | y) == 145) {
            n = (0 | r[1031]) + t | 0, (r[1031] = n) >>> 0 > (0 | r[1032]) >>> 0 && (r[1032] = n), o = 0 | r[929];
            r:
              do
                if (o) {
                  for (s = 4140; ; ) {
                    if ((0 | c) == ((n = 0 | r[s >> 2]) + (e = 0 | r[(l = s + 4 | 0) >> 2]) | 0)) {
                      y = 154;
                      break;
                    }
                    if (!(i = 0 | r[s + 8 >> 2]))
                      break;
                    s = i;
                  }
                  if ((0 | y) == 154 && !(8 & r[s + 12 >> 2] | 0) && o >>> 0 < c >>> 0 & n >>> 0 <= o >>> 0) {
                    r[l >> 2] = e + t, M = o + (I = 7 & (I = o + 8 | 0) | 0 ? 0 - I & 7 : 0) | 0, I = (G = (0 | r[926]) + t | 0) - I | 0, r[929] = M, r[926] = I, r[M + 4 >> 2] = 1 | I, r[o + G + 4 >> 2] = 40, r[930] = r[1045];
                    break;
                  }
                  for (c >>> 0 < (0 | r[927]) >>> 0 && (r[927] = c), i = c + t | 0, e = 4140; ; ) {
                    if ((0 | r[e >> 2]) == (0 | i)) {
                      y = 162;
                      break;
                    }
                    if (!(n = 0 | r[e + 8 >> 2]))
                      break;
                    e = n;
                  }
                  if ((0 | y) == 162 && !(8 & r[e + 12 >> 2] | 0)) {
                    r[e >> 2] = c, r[(u = e + 4 | 0) >> 2] = (0 | r[u >> 2]) + t, f = (u = c + (7 & (u = c + 8 | 0) | 0 ? 0 - u & 7 : 0) | 0) + a | 0, A = (n = i + (7 & (n = i + 8 | 0) | 0 ? 0 - n & 7 : 0) | 0) - u - a | 0, r[u + 4 >> 2] = 3 | a;
                    e:
                      do
                        if ((0 | o) == (0 | n))
                          G = (0 | r[926]) + A | 0, r[926] = G, r[929] = f, r[f + 4 >> 2] = 1 | G;
                        else {
                          if ((0 | r[928]) == (0 | n)) {
                            G = (0 | r[925]) + A | 0, r[925] = G, r[928] = f, r[f + 4 >> 2] = 1 | G, r[f + G >> 2] = G;
                            break;
                          }
                          if ((3 & (e = 0 | r[n + 4 >> 2]) | 0) == 1) {
                            c = -8 & e, l = e >>> 3;
                            n:
                              do {
                                if (e >>> 0 < 256) {
                                  if (e = 0 | r[n + 8 >> 2], (0 | (i = 0 | r[n + 12 >> 2])) == (0 | e)) {
                                    r[923] = r[923] & ~(1 << l);
                                    break;
                                  }
                                  r[e + 12 >> 2] = i, r[i + 8 >> 2] = e;
                                  break;
                                }
                                t = 0 | r[n + 24 >> 2], e = 0 | r[n + 12 >> 2];
                                do
                                  if ((0 | e) == (0 | n)) {
                                    if (!(e = 0 | r[(i = (l = n + 16 | 0) + 4 | 0) >> 2])) {
                                      if (!(e = 0 | r[l >> 2])) {
                                        e = 0;
                                        break;
                                      }
                                      i = l;
                                    }
                                    for (; ; )
                                      if (l = 0 | r[(s = e + 20 | 0) >> 2])
                                        e = l, i = s;
                                      else {
                                        if (!(l = 0 | r[(s = e + 16 | 0) >> 2]))
                                          break;
                                        e = l, i = s;
                                      }
                                    r[i >> 2] = 0;
                                  } else
                                    G = 0 | r[n + 8 >> 2], r[G + 12 >> 2] = e, r[e + 8 >> 2] = G;
                                while (0);
                                if (!t)
                                  break;
                                l = 3996 + ((i = 0 | r[n + 28 >> 2]) << 2) | 0;
                                do {
                                  if ((0 | r[l >> 2]) == (0 | n)) {
                                    if (0 | (r[l >> 2] = e))
                                      break;
                                    r[924] = r[924] & ~(1 << i);
                                    break n;
                                  }
                                  if (!(r[((0 | r[(G = t + 16 | 0) >> 2]) == (0 | n) ? G : t + 20 | 0) >> 2] = e))
                                    break n;
                                } while (0);
                              } while (r[e + 24 >> 2] = t, 0 | (i = 0 | r[(l = n + 16 | 0) >> 2]) && (r[e + 16 >> 2] = i, r[i + 24 >> 2] = e), (i = 0 | r[l + 4 >> 2]) && (r[e + 20 >> 2] = i, r[i + 24 >> 2] = e, 0));
                            n = n + c | 0, s = c + A | 0;
                          } else
                            s = A;
                          if (r[(n = n + 4 | 0) >> 2] = -2 & r[n >> 2], r[f + 4 >> 2] = 1 | s, n = (r[f + s >> 2] = s) >>> 3, s >>> 0 < 256) {
                            i = 3732 + (n << 1 << 2) | 0, e = (e = 0 | r[923]) & (n = 1 << n) ? 0 | r[(n = e = i + 8 | 0) >> 2] : (r[923] = e | n, n = i + 8 | 0, i), r[n >> 2] = f, r[e + 12 >> 2] = f, r[f + 8 >> 2] = e, r[f + 12 >> 2] = i;
                            break;
                          }
                          n = s >>> 8;
                          do
                            if (n) {
                              if (16777215 < s >>> 0) {
                                l = 31;
                                break;
                              }
                              l = 1 & ((G = (l = 14 - ((I = (I = (l = n << (M = (M = n + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4) | M | (G = (G = (l <<= I) + 245760 | 0) >>> 16 & 2)) + ((l <<= G) >>> 15) | 0) + 7 | 0) ? s >>> G : s) | l << 1;
                            } else
                              l = 0;
                          while (0);
                          if (e = 3996 + (l << 2) | 0, r[f + 28 >> 2] = l, r[(n = f + 16 | 0) + 4 >> 2] = 0, !((n = (r[n >> 2] = 0) | r[924]) & (i = 1 << l))) {
                            r[924] = n | i, r[e >> 2] = f, r[f + 24 >> 2] = e, r[f + 12 >> 2] = f, r[f + 8 >> 2] = f;
                            break;
                          }
                          n = 0 | r[e >> 2];
                          n:
                            do
                              if ((-8 & r[n + 4 >> 2] | 0) != (0 | s)) {
                                for (l = s << ((0 | l) == 31 ? 0 : 25 - (l >>> 1) | 0); e = 0 | r[(i = n + 16 + (l >>> 31 << 2) | 0) >> 2]; ) {
                                  if ((-8 & r[e + 4 >> 2] | 0) == (0 | s)) {
                                    n = e;
                                    break n;
                                  }
                                  l <<= 1, n = e;
                                }
                                r[i >> 2] = f, r[f + 24 >> 2] = n, r[f + 12 >> 2] = f, r[f + 8 >> 2] = f;
                                break e;
                              }
                            while (0);
                          G = 0 | r[(M = n + 8 | 0) >> 2], r[G + 12 >> 2] = f, r[M >> 2] = f, r[f + 8 >> 2] = G, r[f + 12 >> 2] = n, r[f + 24 >> 2] = 0;
                        }
                      while (0);
                    return v = R, 0 | (G = u + 8 | 0);
                  }
                  for (e = 4140; !((n = 0 | r[e >> 2]) >>> 0 <= o >>> 0 && o >>> 0 < (G = n + (0 | r[e + 4 >> 2]) | 0) >>> 0); )
                    e = 0 | r[e + 8 >> 2];
                  for (n = (e = (e = (s = G + -47 | 0) + (7 & (e = s + 8 | 0) | 0 ? 0 - e & 7 : 0) | 0) >>> 0 < (s = o + 16 | 0) >>> 0 ? o : e) + 8 | 0, M = c + (I = 7 & (I = c + 8 | 0) | 0 ? 0 - I & 7 : 0) | 0, I = (i = t + -40 | 0) - I | 0, r[929] = M, r[926] = I, r[M + 4 >> 2] = 1 | I, r[c + i + 4 >> 2] = 40, r[930] = r[1045], r[(i = e + 4 | 0) >> 2] = 27, r[n >> 2] = r[1035], r[n + 4 >> 2] = r[1036], r[n + 8 >> 2] = r[1037], r[n + 12 >> 2] = r[1038], r[1035] = c, r[1036] = t, r[1038] = 0, r[1037] = n, n = e + 24 | 0; r[(n = (M = n) + 4 | 0) >> 2] = 7, (M + 8 | 0) >>> 0 < G >>> 0; )
                    ;
                  if ((0 | e) != (0 | o)) {
                    if (t = e - o | 0, r[i >> 2] = -2 & r[i >> 2], r[o + 4 >> 2] = 1 | t, n = (r[e >> 2] = t) >>> 3, t >>> 0 < 256) {
                      i = 3732 + (n << 1 << 2) | 0, e = (e = 0 | r[923]) & (n = 1 << n) ? 0 | r[(n = e = i + 8 | 0) >> 2] : (r[923] = e | n, n = i + 8 | 0, i), r[n >> 2] = o, r[e + 12 >> 2] = o, r[o + 8 >> 2] = e, r[o + 12 >> 2] = i;
                      break;
                    }
                    if (i = 3996 + ((l = (n = t >>> 8) ? 16777215 < t >>> 0 ? 31 : 1 & ((G = (l = 14 - ((I = (I = (l = n << (M = (M = n + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4) | M | (G = (G = (l <<= I) + 245760 | 0) >>> 16 & 2)) + ((l <<= G) >>> 15) | 0) + 7 | 0) ? t >>> G : t) | l << 1 : 0) << 2) | 0, r[o + 28 >> 2] = l, r[o + 20 >> 2] = 0, !((n = (r[s >> 2] = 0) | r[924]) & (e = 1 << l))) {
                      r[924] = n | e, r[i >> 2] = o, r[o + 24 >> 2] = i, r[o + 12 >> 2] = o, r[o + 8 >> 2] = o;
                      break;
                    }
                    n = 0 | r[i >> 2];
                    e:
                      do
                        if ((-8 & r[n + 4 >> 2] | 0) != (0 | t)) {
                          for (l = t << ((0 | l) == 31 ? 0 : 25 - (l >>> 1) | 0); e = 0 | r[(i = n + 16 + (l >>> 31 << 2) | 0) >> 2]; ) {
                            if ((-8 & r[e + 4 >> 2] | 0) == (0 | t)) {
                              n = e;
                              break e;
                            }
                            l <<= 1, n = e;
                          }
                          r[i >> 2] = o, r[o + 24 >> 2] = n, r[o + 12 >> 2] = o, r[o + 8 >> 2] = o;
                          break r;
                        }
                      while (0);
                    G = 0 | r[(M = n + 8 | 0) >> 2], r[G + 12 >> 2] = o, r[M >> 2] = o, r[o + 8 >> 2] = G, r[o + 12 >> 2] = n, r[o + 24 >> 2] = 0;
                  }
                } else
                  (0 | (G = 0 | r[927])) == 0 | c >>> 0 < G >>> 0 && (r[927] = c), r[1035] = c, r[1036] = t, r[1038] = 0, r[932] = r[1041], r[931] = -1, r[936] = 3732, r[935] = 3732, r[938] = 3740, r[937] = 3740, r[940] = 3748, r[939] = 3748, r[942] = 3756, r[941] = 3756, r[944] = 3764, r[943] = 3764, r[946] = 3772, r[945] = 3772, r[948] = 3780, r[947] = 3780, r[950] = 3788, r[949] = 3788, r[952] = 3796, r[951] = 3796, r[954] = 3804, r[953] = 3804, r[956] = 3812, r[955] = 3812, r[958] = 3820, r[957] = 3820, r[960] = 3828, r[959] = 3828, r[962] = 3836, r[961] = 3836, r[964] = 3844, r[963] = 3844, r[966] = 3852, r[965] = 3852, r[968] = 3860, r[967] = 3860, r[970] = 3868, r[969] = 3868, r[972] = 3876, r[971] = 3876, r[974] = 3884, r[973] = 3884, r[976] = 3892, r[975] = 3892, r[978] = 3900, r[977] = 3900, r[980] = 3908, r[979] = 3908, r[982] = 3916, r[981] = 3916, r[984] = 3924, r[983] = 3924, r[986] = 3932, r[985] = 3932, r[988] = 3940, r[987] = 3940, r[990] = 3948, r[989] = 3948, r[992] = 3956, r[991] = 3956, r[994] = 3964, r[993] = 3964, r[996] = 3972, r[995] = 3972, r[998] = 3980, r[997] = 3980, M = c + (I = 7 & (I = c + 8 | 0) | 0 ? 0 - I & 7 : 0) | 0, I = (G = t + -40 | 0) - I | 0, r[929] = M, r[926] = I, r[M + 4 >> 2] = 1 | I, r[c + G + 4 >> 2] = 40, r[930] = r[1045];
              while (0);
            if (a >>> 0 < (n = 0 | r[926]) >>> 0)
              return r[926] = I = n - a | 0, G = 0 | r[929], r[929] = M = G + a | 0, r[M + 4 >> 2] = 1 | I, r[G + 4 >> 2] = 3 | a, v = R, 0 | (G = G + 8 | 0);
          }
          return r[922] = 48, v = R, (G = 0) | G;
        }
        function x2(e) {
          var n = 0, i = 0, l = 0, s = 0, t = 0, c = 0, A = 0, o = 0, f = 0;
          if (e |= 0) {
            l = 0 | r[927], f = (i = e + -8 | 0) + (n = -8 & (e = 0 | r[e + -4 >> 2])) | 0;
            do
              if (1 & e)
                o = A = i;
              else {
                if (s = 0 | r[i >> 2], !(3 & e) || (c = s + n | 0, (t = i + (0 - s) | 0) >>> 0 < l >>> 0))
                  return;
                if ((0 | r[928]) == (0 | t)) {
                  if ((3 & (e = 0 | r[(n = f + 4 | 0) >> 2]) | 0) == 3)
                    return r[925] = c, r[n >> 2] = -2 & e, r[t + 4 >> 2] = 1 | c, void (r[t + c >> 2] = c);
                  o = A = t, n = c;
                  break;
                }
                if (i = s >>> 3, s >>> 0 < 256) {
                  if (e = 0 | r[t + 8 >> 2], (0 | (n = 0 | r[t + 12 >> 2])) == (0 | e)) {
                    r[923] = r[923] & ~(1 << i), o = A = t, n = c;
                    break;
                  }
                  r[e + 12 >> 2] = n, r[n + 8 >> 2] = e, o = A = t, n = c;
                  break;
                }
                s = 0 | r[t + 24 >> 2], e = 0 | r[t + 12 >> 2];
                do
                  if ((0 | e) == (0 | t)) {
                    if (!(e = 0 | r[(n = (i = t + 16 | 0) + 4 | 0) >> 2])) {
                      if (!(e = 0 | r[i >> 2])) {
                        i = 0;
                        break;
                      }
                      n = i;
                    }
                    for (; ; )
                      if (i = 0 | r[(l = e + 20 | 0) >> 2])
                        e = i, n = l;
                      else {
                        if (!(i = 0 | r[(l = e + 16 | 0) >> 2]))
                          break;
                        e = i, n = l;
                      }
                    r[n >> 2] = 0, i = e;
                  } else
                    i = 0 | r[t + 8 >> 2], r[i + 12 >> 2] = e, r[e + 8 >> 2] = i, i = e;
                while (0);
                if (s) {
                  if (e = 0 | r[t + 28 >> 2], (0 | r[(n = 3996 + (e << 2) | 0) >> 2]) == (0 | t)) {
                    if (!(r[n >> 2] = i)) {
                      r[924] = r[924] & ~(1 << e), o = A = t, n = c;
                      break;
                    }
                  } else if (!(r[((0 | r[(o = s + 16 | 0) >> 2]) == (0 | t) ? o : s + 20 | 0) >> 2] = i)) {
                    o = A = t, n = c;
                    break;
                  }
                  r[i + 24 >> 2] = s, 0 | (e = 0 | r[(n = t + 16 | 0) >> 2]) && (r[i + 16 >> 2] = e, r[e + 24 >> 2] = i), n = (o = A = ((e = 0 | r[n + 4 >> 2]) && (r[i + 20 >> 2] = e, r[e + 24 >> 2] = i), t), c);
                } else
                  o = A = t, n = c;
              }
            while (0);
            if (!(f >>> 0 <= A >>> 0) && 1 & (i = 0 | r[(e = f + 4 | 0) >> 2])) {
              if (2 & i)
                r[e >> 2] = -2 & i, r[o + 4 >> 2] = 1 | n, s = r[A + n >> 2] = n;
              else {
                if ((0 | r[929]) == (0 | f))
                  return f = (0 | r[926]) + n | 0, r[926] = f, r[929] = o, r[o + 4 >> 2] = 1 | f, void ((0 | o) == (0 | r[928]) && (r[928] = 0, r[925] = 0));
                if ((0 | r[928]) == (0 | f))
                  return f = (0 | r[925]) + n | 0, r[925] = f, r[928] = A, r[o + 4 >> 2] = 1 | f, void (r[A + f >> 2] = f);
                s = (-8 & i) + n | 0, l = i >>> 3;
                do {
                  if (i >>> 0 < 256) {
                    if (n = 0 | r[f + 8 >> 2], (0 | (e = 0 | r[f + 12 >> 2])) == (0 | n)) {
                      r[923] = r[923] & ~(1 << l);
                      break;
                    }
                    r[n + 12 >> 2] = e, r[e + 8 >> 2] = n;
                    break;
                  }
                  t = 0 | r[f + 24 >> 2], e = 0 | r[f + 12 >> 2];
                  do
                    if ((0 | e) == (0 | f)) {
                      if (!(e = 0 | r[(n = (i = f + 16 | 0) + 4 | 0) >> 2])) {
                        if (!(e = 0 | r[i >> 2])) {
                          i = 0;
                          break;
                        }
                        n = i;
                      }
                      for (; ; )
                        if (i = 0 | r[(l = e + 20 | 0) >> 2])
                          e = i, n = l;
                        else {
                          if (!(i = 0 | r[(l = e + 16 | 0) >> 2]))
                            break;
                          e = i, n = l;
                        }
                      r[n >> 2] = 0, i = e;
                    } else
                      i = 0 | r[f + 8 >> 2], r[i + 12 >> 2] = e, r[e + 8 >> 2] = i, i = e;
                  while (0);
                  if (0 | t) {
                    if (e = 0 | r[f + 28 >> 2], (0 | r[(n = 3996 + (e << 2) | 0) >> 2]) == (0 | f)) {
                      if (!(r[n >> 2] = i)) {
                        r[924] = r[924] & ~(1 << e);
                        break;
                      }
                    } else if (!(r[((0 | r[(c = t + 16 | 0) >> 2]) == (0 | f) ? c : t + 20 | 0) >> 2] = i))
                      break;
                    r[i + 24 >> 2] = t, 0 | (e = 0 | r[(n = f + 16 | 0) >> 2]) && (r[i + 16 >> 2] = e, r[e + 24 >> 2] = i), 0 | (e = 0 | r[n + 4 >> 2]) && (r[i + 20 >> 2] = e, r[e + 24 >> 2] = i);
                  }
                } while (0);
                if (r[o + 4 >> 2] = 1 | s, r[A + s >> 2] = s, (0 | o) == (0 | r[928]))
                  return void (r[925] = s);
              }
              if (e = s >>> 3, s >>> 0 < 256)
                return i = 3732 + (e << 1 << 2) | 0, n = (n = 0 | r[923]) & (e = 1 << e) ? 0 | r[(e = n = i + 8 | 0) >> 2] : (r[923] = n | e, e = i + 8 | 0, i), r[e >> 2] = o, r[n + 12 >> 2] = o, r[o + 8 >> 2] = n, void (r[o + 12 >> 2] = i);
              n = 3996 + ((l = (e = s >>> 8) ? 16777215 < s >>> 0 ? 31 : 1 & ((f = (l = 14 - ((c = (c = (l = e << (A = (A = e + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4) | A | (f = (f = (l <<= c) + 245760 | 0) >>> 16 & 2)) + ((l <<= f) >>> 15) | 0) + 7 | 0) ? s >>> f : s) | l << 1 : 0) << 2) | 0, r[o + 28 >> 2] = l, r[o + 20 >> 2] = 0, e = (r[o + 16 >> 2] = 0) | r[924], i = 1 << l;
              r:
                do
                  if (e & i) {
                    e = 0 | r[n >> 2];
                    e:
                      do
                        if ((-8 & r[e + 4 >> 2] | 0) != (0 | s)) {
                          for (l = s << ((0 | l) == 31 ? 0 : 25 - (l >>> 1) | 0); n = 0 | r[(i = e + 16 + (l >>> 31 << 2) | 0) >> 2]; ) {
                            if ((-8 & r[n + 4 >> 2] | 0) == (0 | s)) {
                              e = n;
                              break e;
                            }
                            l <<= 1, e = n;
                          }
                          r[i >> 2] = o, r[o + 24 >> 2] = e, r[o + 12 >> 2] = o, r[o + 8 >> 2] = o;
                          break r;
                        }
                      while (0);
                    f = 0 | r[(A = e + 8 | 0) >> 2], r[f + 12 >> 2] = o, r[A >> 2] = o, r[o + 8 >> 2] = f, r[o + 12 >> 2] = e, r[o + 24 >> 2] = 0;
                  } else
                    r[924] = e | i, r[n >> 2] = o, r[o + 24 >> 2] = n, r[o + 12 >> 2] = o, r[o + 8 >> 2] = o;
                while (0);
              if (f = (0 | r[931]) - 1 | 0, !(0 | (r[931] = f))) {
                for (e = 4148; e = 0 | r[e >> 2]; )
                  e = e + 8 | 0;
                r[931] = -1;
              }
            }
          }
        }
        function C1(e, n) {
          var o = 0, i = 0, l = 0, s = 0, t = 0, c = 0, A = 0, A = (e |= 0) + (n |= 0) | 0, o = 0 | r[e + 4 >> 2];
          do
            if (1 & o)
              c = e, e = n;
            else {
              if (i = 0 | r[e >> 2], !(3 & o))
                return;
              if (t = i + n | 0, (0 | r[928]) == (0 | (s = e + (0 - i) | 0))) {
                if ((3 & (o = 0 | r[(e = A + 4 | 0) >> 2]) | 0) == 3)
                  return r[925] = t, r[e >> 2] = -2 & o, r[s + 4 >> 2] = 1 | t, void (r[A >> 2] = t);
                c = s, e = t;
                break;
              }
              if (n = i >>> 3, i >>> 0 < 256) {
                if (o = 0 | r[s + 8 >> 2], (0 | (e = 0 | r[s + 12 >> 2])) == (0 | o)) {
                  r[923] = r[923] & ~(1 << n), c = s, e = t;
                  break;
                }
                r[o + 12 >> 2] = e, r[e + 8 >> 2] = o, c = s, e = t;
                break;
              }
              l = 0 | r[s + 24 >> 2], o = 0 | r[s + 12 >> 2];
              do
                if ((0 | o) == (0 | s)) {
                  if (!(o = 0 | r[(e = (n = s + 16 | 0) + 4 | 0) >> 2])) {
                    if (!(o = 0 | r[n >> 2])) {
                      n = 0;
                      break;
                    }
                    e = n;
                  }
                  for (; ; )
                    if (n = 0 | r[(i = o + 20 | 0) >> 2])
                      o = n, e = i;
                    else {
                      if (!(n = 0 | r[(i = o + 16 | 0) >> 2]))
                        break;
                      o = n, e = i;
                    }
                  r[e >> 2] = 0, n = o;
                } else
                  n = 0 | r[s + 8 >> 2], r[n + 12 >> 2] = o, r[o + 8 >> 2] = n, n = o;
              while (0);
              if (l) {
                if (o = 0 | r[s + 28 >> 2], (0 | r[(e = 3996 + (o << 2) | 0) >> 2]) == (0 | s)) {
                  if (!(r[e >> 2] = n)) {
                    r[924] = r[924] & ~(1 << o), c = s, e = t;
                    break;
                  }
                } else if (!(r[((0 | r[(c = l + 16 | 0) >> 2]) == (0 | s) ? c : l + 20 | 0) >> 2] = n)) {
                  c = s, e = t;
                  break;
                }
                r[n + 24 >> 2] = l, 0 | (o = 0 | r[(e = s + 16 | 0) >> 2]) && (r[n + 16 >> 2] = o, r[o + 24 >> 2] = n), e = (c = ((o = 0 | r[e + 4 >> 2]) && (r[n + 20 >> 2] = o, r[o + 24 >> 2] = n), s), t);
              } else
                c = s, e = t;
            }
          while (0);
          if (2 & (n = 0 | r[(o = A + 4 | 0) >> 2]))
            r[o >> 2] = -2 & n, r[c + 4 >> 2] = 1 | e, r[c + e >> 2] = e;
          else {
            if ((0 | r[929]) == (0 | A))
              return A = (0 | r[926]) + e | 0, r[926] = A, r[929] = c, r[c + 4 >> 2] = 1 | A, void ((0 | c) == (0 | r[928]) && (r[928] = 0, r[925] = 0));
            if ((0 | r[928]) == (0 | A))
              return A = (0 | r[925]) + e | 0, r[925] = A, r[928] = c, r[c + 4 >> 2] = 1 | A, void (r[c + A >> 2] = A);
            s = (-8 & n) + e | 0, i = n >>> 3;
            do {
              if (n >>> 0 < 256) {
                if (e = 0 | r[A + 8 >> 2], (0 | (o = 0 | r[A + 12 >> 2])) == (0 | e)) {
                  r[923] = r[923] & ~(1 << i);
                  break;
                }
                r[e + 12 >> 2] = o, r[o + 8 >> 2] = e;
                break;
              }
              l = 0 | r[A + 24 >> 2], o = 0 | r[A + 12 >> 2];
              do
                if ((0 | o) == (0 | A)) {
                  if (!(o = 0 | r[(e = (n = A + 16 | 0) + 4 | 0) >> 2])) {
                    if (!(o = 0 | r[n >> 2])) {
                      n = 0;
                      break;
                    }
                    e = n;
                  }
                  for (; ; )
                    if (n = 0 | r[(i = o + 20 | 0) >> 2])
                      o = n, e = i;
                    else {
                      if (!(n = 0 | r[(i = o + 16 | 0) >> 2]))
                        break;
                      o = n, e = i;
                    }
                  r[e >> 2] = 0, n = o;
                } else
                  n = 0 | r[A + 8 >> 2], r[n + 12 >> 2] = o, r[o + 8 >> 2] = n, n = o;
              while (0);
              if (0 | l) {
                if (o = 0 | r[A + 28 >> 2], (0 | r[(e = 3996 + (o << 2) | 0) >> 2]) == (0 | A)) {
                  if (!(r[e >> 2] = n)) {
                    r[924] = r[924] & ~(1 << o);
                    break;
                  }
                } else if (!(r[((0 | r[(t = l + 16 | 0) >> 2]) == (0 | A) ? t : l + 20 | 0) >> 2] = n))
                  break;
                r[n + 24 >> 2] = l, 0 | (o = 0 | r[(e = A + 16 | 0) >> 2]) && (r[n + 16 >> 2] = o, r[o + 24 >> 2] = n), 0 | (o = 0 | r[e + 4 >> 2]) && (r[n + 20 >> 2] = o, r[o + 24 >> 2] = n);
              }
            } while (0);
            if (r[c + 4 >> 2] = 1 | s, r[c + s >> 2] = s, (0 | c) == (0 | r[928]))
              return void (r[925] = s);
            e = s;
          }
          if (o = e >>> 3, e >>> 0 < 256)
            return n = 3732 + (o << 1 << 2) | 0, e = (e = 0 | r[923]) & (o = 1 << o) ? 0 | r[(o = e = n + 8 | 0) >> 2] : (r[923] = e | o, o = n + 8 | 0, n), r[o >> 2] = c, r[e + 12 >> 2] = c, r[c + 8 >> 2] = e, void (r[c + 12 >> 2] = n);
          if (n = 3996 + ((l = (o = e >>> 8) ? 16777215 < e >>> 0 ? 31 : 1 & ((A = (l = 14 - ((s = (s = (l = o << (t = (t = o + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4) | t | (A = (A = (l <<= s) + 245760 | 0) >>> 16 & 2)) + ((l <<= A) >>> 15) | 0) + 7 | 0) ? e >>> A : e) | l << 1 : 0) << 2) | 0, r[c + 28 >> 2] = l, r[c + 20 >> 2] = 0, !((o = (r[c + 16 >> 2] = 0) | r[924]) & (i = 1 << l)))
            return r[924] = o | i, r[n >> 2] = c, r[c + 24 >> 2] = n, r[c + 12 >> 2] = c, void (r[c + 8 >> 2] = c);
          o = 0 | r[n >> 2];
          r:
            do
              if ((-8 & r[o + 4 >> 2] | 0) != (0 | e)) {
                for (l = e << ((0 | l) == 31 ? 0 : 25 - (l >>> 1) | 0); n = 0 | r[(i = o + 16 + (l >>> 31 << 2) | 0) >> 2]; ) {
                  if ((-8 & r[n + 4 >> 2] | 0) == (0 | e)) {
                    o = n;
                    break r;
                  }
                  l <<= 1, o = n;
                }
                return r[i >> 2] = c, r[c + 24 >> 2] = o, r[c + 12 >> 2] = c, void (r[c + 8 >> 2] = c);
              }
            while (0);
          A = 0 | r[(t = o + 8 | 0) >> 2], r[A + 12 >> 2] = c, r[t >> 2] = c, r[c + 8 >> 2] = A, r[c + 12 >> 2] = o, r[c + 24 >> 2] = 0;
        }
        function F1(e, n, i) {
          e |= 0;
          var l;
          return (3 & (n |= 0) | 0) != 0 | (0 | (l = n >>> 2)) == 0 || 1073741823 + l & l | 0 ? 0 | (e = 28) : !((-64 - n | 0) >>> 0 < (i |= 0) >>> 0) && (n = 0 | function(s, t) {
            t |= 0;
            var c, A = 0, o = 0, f = 0, u = 0, a = 0;
            if ((A = 16 < (s |= 0) >>> 0 ? s : 16) + -1 & A)
              for (s = 16; s >>> 0 < A >>> 0; )
                s <<= 1;
            else
              s = A;
            if ((-64 - s | 0) >>> 0 <= t >>> 0)
              return r[922] = 48, (u = 0) | u;
            if (!(A = 0 | g2(12 + (c = t >>> 0 < 11 ? 16 : t + 11 & -8) + s | 0)))
              return (u = 0) | u;
            f = A + -8 | 0;
            do
              if (s + -1 & A) {
                if (o = 15 < ((o = (A + s + -1 & 0 - s) - 8 | 0) - (t = f) | 0) >>> 0 ? o : o + s | 0, A = (-8 & (a = 0 | r[(s = A + -4 | 0) >> 2])) - (t = o - t | 0) | 0, 3 & a) {
                  r[(a = o + 4 | 0) >> 2] = A | 1 & r[a >> 2] | 2, r[(A = o + A + 4 | 0) >> 2] = 1 | r[A >> 2], r[s >> 2] = t | 1 & r[s >> 2] | 2, r[a >> 2] = 1 | r[a >> 2], C1(f, t), s = t = o;
                  break;
                }
                r[o >> 2] = (0 | r[f >> 2]) + t, r[o + 4 >> 2] = A, s = t = o;
                break;
              }
            while (s = t = f, 0);
            return 3 & (s = 0 | r[(A = s + 4 | 0) >> 2]) | 0 && (16 + c | 0) >>> 0 < (u = -8 & s) >>> 0 && (a = u - c | 0, f = t + c | 0, r[A >> 2] = c | 1 & s | 2, r[f + 4 >> 2] = 3 | a, r[(u = t + u + 4 | 0) >> 2] = 1 | r[u >> 2], C1(f, a)), 0 | (a = t + 8 | 0);
          }(16 < n >>> 0 ? n : 16, i)) ? (r[e >> 2] = n, (e = 0) | e) : 0 | (e = 48);
        }
        function K0(e) {
          var n, i = 0;
          return (e = (n = 0 | r[(i = 4208) >> 2]) + (e |= 0) | 0) >>> 0 > (0 | $1()) >>> 0 && !(0 | rr(0 | e)) ? (r[922] = 48, 0 | (i = -1)) : (r[i >> 2] = e, 0 | (i = n));
        }
        function S2(e, n, i, l) {
          n |= 0, l |= 0;
          var s = 0, t = 0;
          return i = 0 | function(c, A) {
            var o, f, u, a;
            return c = ((u = 0 | h0(f = 65535 & (A |= 0), o = 65535 & (c |= 0))) >>> 16) + (0 | h0(f, a = c >>> 16)) | 0, A = 0 | h0(f = A >>> 16, o), 0 | (_0((c >>> 16) + (0 | h0(f, a)) + (((65535 & c) + A | 0) >>> 16) | 0), c + A << 16 | 65535 & u | 0);
          }(s = e |= 0, t = i |= 0), e = 0 | F0(), 0 | (_0((0 | h0(n, t)) + (0 | h0(l, s)) + e | 0 & e | 0), 0 | i);
        }
        function a2(e, n, i, l) {
          return 0 | (_0((n |= 0) + (l |= 0) + ((i = (e |= 0) + (i |= 0) >>> 0) >>> 0 < e >>> 0 | 0) >>> 0 | 0), 0 | i);
        }
        function D2(e, n, i, l) {
          return 0 | (_0(0 | (l = (n |= 0) - (l |= 0) - ((e |= 0) >>> 0 < (i |= 0) >>> 0 | 0) >>> 0)), e - i >>> 0 | 0);
        }
        function V1(e) {
          return 0 | ((e |= 0) ? 31 - (0 | Q0(e ^ e - 1)) | 0 : 32);
        }
        function Cr(e, n, i, l, s) {
          s |= 0;
          var t = 0, p = 0, w = 0, c = 0, A = 0, k = 0, o = 0, f = 0, u = 0, a = 0, k = e |= 0, p = i |= 0, w = f = l |= 0;
          if (!(A = c = n |= 0))
            return t = (0 | s) != 0, w ? (t && (r[s >> 2] = 0 | e, r[s + 4 >> 2] = 0 & n), (s = f = 0) | (_0(0 | f), s)) : (t && (r[s >> 2] = (k >>> 0) % (p >>> 0), r[s + 4 >> 2] = 0), s = (k >>> (f = 0)) / (p >>> 0) >>> 0, 0 | (_0(0 | f), s));
          t = (0 | w) == 0;
          do {
            if (p) {
              if (!t) {
                if ((t = (0 | Q0(0 | w)) - (0 | Q0(0 | A)) | 0) >>> 0 <= 31) {
                  e = k >>> ((p = o = t + 1 | 0) >>> 0) & (n = t - 31 >> 31) | A << (w = 31 - t | 0), n &= A >>> (o >>> 0), t = 0, w = k << w;
                  break;
                }
                return s && (r[s >> 2] = 0 | e, r[s + 4 >> 2] = c | 0 & n), (s = f = 0) | (_0(0 | f), s);
              }
              if ((t = p - 1 | 0) & p | 0) {
                e = (o = 32 - (w = 33 + (0 | Q0(0 | p)) - (0 | Q0(0 | A)) | 0) | 0) - 1 >> 31 & A >>> ((u = w - 32 | 0) >>> 0) | (A << o | k >>> ((p = w) >>> 0)) & (n = u >> 31), n &= A >>> (w >>> 0), t = k << (a = 64 - w | 0) & (c = o >> 31), w = (A << a | k >>> (u >>> 0)) & c | k << o & w - 33 >> 31;
                break;
              }
              return 0 | s && (r[s >> 2] = t & k, r[s + 4 >> 2] = 0), (0 | p) == 1 ? (a = 0 | e, 0 | (_0(0 | (u = c | 0 & n)), a)) : (u = A >>> ((a = 0 | V1(0 | p)) >>> 0) | 0, a = A << 32 - a | k >>> (a >>> 0) | 0, 0 | (_0(0 | u), a));
            }
            if (t)
              return 0 | s && (r[s >> 2] = (A >>> 0) % (p >>> 0), r[s + 4 >> 2] = 0), a = (A >>> (u = 0)) / (p >>> 0) >>> 0, 0 | (_0(0 | u), a);
            if (!k)
              return 0 | s && (r[s >> 2] = 0, r[s + 4 >> 2] = (A >>> 0) % (w >>> 0)), a = (A >>> (u = 0)) / (w >>> 0) >>> 0, 0 | (_0(0 | u), a);
            if (!((t = w - 1 | 0) & w))
              return 0 | s && (r[s >> 2] = 0 | e, r[s + 4 >> 2] = t & A | 0 & n), a = A >>> (((u = 0) | V1(0 | w)) >>> 0), 0 | (_0(0 | u), a);
            if ((t = (0 | Q0(0 | w)) - (0 | Q0(0 | A)) | 0) >>> 0 <= 30) {
              e = A << (w = 31 - t | 0) | k >>> ((p = n = t + 1 | 0) >>> 0), n = A >>> (n >>> 0), t = 0, w = k << w;
              break;
            }
            return s && (r[s >> 2] = 0 | e, r[s + 4 >> 2] = c | 0 & n), (a = u = 0) | (_0(0 | u), a);
          } while (0);
          if (p) {
            for (A = 0 | a2(0 | (o = 0 | i), 0 | (k = f | 0 & l), -1, -1), i = 0 | F0(), c = w, w = 0; c = t >>> 31 | (l = c) << 1, t = w | t << 1, D2(0 | A, 0 | i, 0 | (l = e << 1 | l >>> 31 | 0), 0 | (f = e >>> 31 | n << 1 | 0)), w = 1 & (u = (a = 0 | F0()) >> 31 | ((0 | a) < 0 ? -1 : 0) << 1), e = 0 | D2(0 | l, 0 | f, u & o | 0, (((0 | a) < 0 ? -1 : 0) >> 31 | ((0 | a) < 0 ? -1 : 0) << 1) & k | 0), n = 0 | F0(), (0 | (p = p - 1 | 0)) != 0; )
              ;
            A = c, c = 0;
          } else
            A = w, w = c = 0;
          return (p = 0) | s && (r[s >> 2] = e, r[s + 4 >> 2] = n), a = -2 & (t << 1 | 0) | w, 0 | (_0(0 | (u = (0 | t) >>> 31 | (A | p) << 1 | 0 & (p << 1 | t >>> 31) | c)), a);
        }
        function B2(e, n, i, l) {
          return 0 | Cr(e |= 0, n |= 0, i |= 0, l |= 0, 0);
        }
        function I2(e, n, i) {
          return e |= 0, n |= 0, (0 | (i |= 0)) < 32 ? (_0(n >>> i | 0), e >>> i | (n & (1 << i) - 1) << 32 - i) : (_0(0), n >>> i - 32 | 0);
        }
        function M1(e, n, i) {
          return e |= 0, n |= 0, (0 | (i |= 0)) < 32 ? (_0(n << i | (e & (1 << i) - 1 << 32 - i) >>> 32 - i | 0), e << i) : (_0(e << i - 32 | 0), 0);
        }
        function Fr() {
          return 4208;
        }
        function H0(e, n, i) {
          e |= 0, n |= 0;
          var l, s, t;
          if (8192 <= (0 | (i |= 0)))
            return b1(0 | e, 0 | n, 0 | i), 0 | e;
          if (t = 0 | e, s = e + i | 0, (3 & e) == (3 & n)) {
            for (; 3 & e; ) {
              if (!i)
                return 0 | t;
              U[e >> 0] = 0 | U[n >> 0], e = e + 1 | 0, n = n + 1 | 0, i = i - 1 | 0;
            }
            for (l = (i = -4 & s | 0) - 64 | 0; (0 | e) <= (0 | l); )
              r[e >> 2] = r[n >> 2], r[e + 4 >> 2] = r[n + 4 >> 2], r[e + 8 >> 2] = r[n + 8 >> 2], r[e + 12 >> 2] = r[n + 12 >> 2], r[e + 16 >> 2] = r[n + 16 >> 2], r[e + 20 >> 2] = r[n + 20 >> 2], r[e + 24 >> 2] = r[n + 24 >> 2], r[e + 28 >> 2] = r[n + 28 >> 2], r[e + 32 >> 2] = r[n + 32 >> 2], r[e + 36 >> 2] = r[n + 36 >> 2], r[e + 40 >> 2] = r[n + 40 >> 2], r[e + 44 >> 2] = r[n + 44 >> 2], r[e + 48 >> 2] = r[n + 48 >> 2], r[e + 52 >> 2] = r[n + 52 >> 2], r[e + 56 >> 2] = r[n + 56 >> 2], r[e + 60 >> 2] = r[n + 60 >> 2], e = e + 64 | 0, n = n + 64 | 0;
            for (; (0 | e) < (0 | i); )
              r[e >> 2] = r[n >> 2], e = e + 4 | 0, n = n + 4 | 0;
          } else
            for (i = s - 4 | 0; (0 | e) < (0 | i); )
              U[e >> 0] = 0 | U[n >> 0], U[e + 1 >> 0] = 0 | U[n + 1 >> 0], U[e + 2 >> 0] = 0 | U[n + 2 >> 0], U[e + 3 >> 0] = 0 | U[n + 3 >> 0], e = e + 4 | 0, n = n + 4 | 0;
          for (; (0 | e) < (0 | s); )
            U[e >> 0] = 0 | U[n >> 0], e = e + 1 | 0, n = n + 1 | 0;
          return 0 | t;
        }
        function B0(e, n, i) {
          var l, s, t, c = (e |= 0) + (i |= 0) | 0;
          if (n = (n | 0) & 255, 67 <= (0 | i)) {
            for (; 3 & e; )
              U[e >> 0] = n, e = e + 1 | 0;
            for (t = n | n << 8 | n << 16 | n << 24, s = (l = -4 & c | 0) - 64 | 0; (0 | e) <= (0 | s); )
              r[e >> 2] = t, r[e + 4 >> 2] = t, r[e + 8 >> 2] = t, r[e + 12 >> 2] = t, r[e + 16 >> 2] = t, r[e + 20 >> 2] = t, r[e + 24 >> 2] = t, r[e + 28 >> 2] = t, r[e + 32 >> 2] = t, r[e + 36 >> 2] = t, r[e + 40 >> 2] = t, r[e + 44 >> 2] = t, r[e + 48 >> 2] = t, r[e + 52 >> 2] = t, r[e + 56 >> 2] = t, r[e + 60 >> 2] = t, e = e + 64 | 0;
            for (; (0 | e) < (0 | l); )
              r[e >> 2] = t, e = e + 4 | 0;
          }
          for (; (0 | e) < (0 | c); )
            U[e >> 0] = n, e = e + 1 | 0;
          return c - i | 0;
        }
        function R1(e) {
          return n2(0), 0;
        }
        function P1(e, n, i, l) {
          return n2(2), 0;
        }
        var Vr = [R1, function(e) {
          return 0 | d1(0, 0 | (e |= 0));
        }, function(e) {
          return 0;
        }, R1], C2 = [function(e, n, i) {
          return n2(1), 0;
        }, function(e, n, i) {
          return 0 | J1(0, 0 | (e |= 0), 0 | (n |= 0), 0 | (i |= 0));
        }, function(e, n, i) {
          n |= 0, i |= 0;
          var l, s, t, c, A, o, f, u = 0, a = 0, k = 0, p = 0, w = v;
          for (v = v + 32 | 0, s = (a = w) + 16 | 0, u = 0 | r[(t = (e |= 0) + 28 | 0) >> 2], r[a >> 2] = u, u = (0 | r[(c = e + 20 | 0) >> 2]) - u | 0, r[a + 4 >> 2] = u, r[a + 8 >> 2] = n, l = e + 60 | 0, u = u + (r[a + 12 >> (k = 2)] = i) | 0; ; ) {
            if ((0 | u) == (0 | (n = 0 | function(_) {
              return 0 | (_ = (_ |= 0) << 16 >> 16 ? (r[922] = 65535 & _, -1) : 0);
            }(0 | K1(0 | r[l >> 2], 0 | a, 0 | k, 0 | s)) ? r[s >> 2] = -1 : 0 | r[s >> 2]))) {
              n = 6;
              break;
            }
            if ((0 | n) < 0) {
              n = 8;
              break;
            }
            p = 0 | r[a + 4 >> 2], r[(o = (A = p >>> 0 < n >>> 0) ? a + 8 | 0 : a) >> 2] = (0 | r[o >> 2]) + (p = n - (A ? p : 0) | 0), r[(f = o + 4 | 0) >> 2] = (0 | r[f >> 2]) - p, a = o, k = k + (A << 31 >> 31) | 0, u = u - n | 0;
          }
          return (0 | n) == 6 ? (p = 0 | r[e + 44 >> 2], r[e + 16 >> 2] = p + (0 | r[e + 48 >> 2]), r[t >> 2] = p, r[c >> 2] = p) : (0 | n) == 8 && (r[e + 16 >> 2] = 0, r[t >> 2] = 0, r[c >> 2] = 0, r[e >> 2] = 32 | r[e >> 2], i = (0 | k) == 2 ? 0 : i - (0 | r[a + 4 >> 2]) | 0), v = w, 0 | i;
        }, function(e, n, i) {
          var l, s;
          return H0(0 | (s = 0 | r[(l = (e |= 0) + 20 | 0) >> 2]), 0 | (n |= 0), 0 | (e = (i |= 0) >>> 0 < (e = (0 | r[e + 16 >> 2]) - s | 0) >>> 0 ? i : e)), r[l >> 2] = (0 | r[l >> 2]) + e, 0 | i;
        }], Mr = [P1, function(e, n, i, l) {
          return 0 | T1(0, 0 | (e |= 0), 0 | (n |= 0), 0 | (i |= 0), 0 | (l |= 0));
        }, function(e, n, i, l) {
          return _0(0), 0;
        }, P1], U1 = [function(e) {
          n2(3);
        }, function(e) {
          Q1(0, 0 | (e |= 0));
        }], E1 = [function(e, n) {
          n2(4);
        }, function(e, n) {
          q1(0, 0 | (e |= 0), 0 | (n |= 0));
        }, function(e, n) {
          var i, o = 0, f = 0, u = 0, l = 0, s = 0, t = 0, c = 0, A = 0, o = 0 | r[(i = (e |= 0) + 308 | 0) >> 2], f = 0 | r[e + 316 >> 2], u = 0 | r[e + 320 >> 2];
          (0 | (l = 0 | r[(s = o + ((n |= 0) << 5) + 8 | 0) >> 2])) == -1 ? (r[f + (n << 2) >> 2] = r[(0 | r[e + 148 >> 2]) + (r[o + (n << 5) + 16 >> 2] << 2) >> 2], h[u + (n << 2) >> 2] = 1) : (c = 0 | r[(t = o + (n << 5) + 16 | 0) >> 2], A = 0 | r[(0 | r[e + 152 >> 2]) + (c << 2) >> 2], $0[3 & r[o + (l << 5) + 24 >> 2]](e, l, A, A, 0 | r[(0 | r[e + 60 >> 2]) + (24 * c | 0) + 16 >> 2]), s = 0 | r[s >> 2], h[f + (n << 2) >> 2] = +h[(0 | r[e + 148 >> 2]) + (r[t >> 2] << 2) >> 2] * +h[f + (s << 2) >> 2], r[u + (n << 2) >> 2] = r[u + (s << 2) >> 2]), (0 | r0[4 + (0 | r[e >> 2]) >> 0]) < 4 || (o = 0 | r[i >> 2], f = 0 | r[e + 324 >> 2], i = 0 | r[e + 328 >> 2], u = n << 2, l = r[o + (n << 5) + 16 >> 2] << 2, (0 | (o = 0 | r[o + (n << 5) + 8 >> 2])) == -1 ? (o = 0 | r[e + 156 >> 2], r[f + (u << 2) >> 2] = r[o + (l << 2) >> 2], r[f + ((n = 1 | u) << 2) >> 2] = r[o + ((s = 1 | l) << 2) >> 2], r[f + ((A = 2 | u) << 2) >> 2] = r[o + ((c = 2 | l) << 2) >> 2], h[f + ((o = 3 | u) << 2) >> 2] = 1, t = 0 | r[e + 160 >> 2], r[i + (u << 2) >> 2] = r[t + (l << 2) >> 2], r[i + (n << 2) >> 2] = r[t + (s << 2) >> 2], r[i + (A << 2) >> 2] = r[t + (c << 2) >> 2]) : (c = o << 2, t = (0 | r[e + 156 >> 2]) + (l << 2) | 0, h[(o = f + (u << 2) | 0) >> 2] = +h[t >> 2] * +h[(A = f + (c << 2) | 0) >> 2], h[o + 4 >> 2] = +h[t + 4 >> 2] * +h[A + 4 >> 2], h[o + 8 >> 2] = +h[t + 8 >> 2] * +h[A + 8 >> 2], h[f + ((o = 3 | u) << 2) >> 2] = 1, t = (0 | r[e + 160 >> 2]) + (l << 2) | 0, n = +h[t >> 2], s = +h[(c = i + (c << 2) | 0) >> 2], h[(A = i + (u << 2) | 0) >> 2] = n + s - n * s, s = +h[t + 4 >> 2], n = +h[c + 4 >> 2], h[A + 4 >> 2] = s + n - s * n, n = +h[t + 8 >> 2], s = +h[c + 8 >> 2], h[A + 8 >> 2] = n + s - n * s), h[i + (o << 2) >> 2] = 1);
        }, function(e, n) {
          var i, l, s, t, c, A, o, f, u, a, k, p, w, _, y, m = 0, I = 0, M = 0, G = 0, R = 0, x = 0, W = 0, d = 0, S = 0, O = 0, X = 0, P = 0, Z = 0, N = v;
          if (v = v + 48 | 0, o = N + 8 | 0, c = N + 40 | 0, t = N + 32 | 0, s = (A = N) + 24 | 0, P = N + 16 | 0, m = 0 | r[(k = (e |= 0) + 308 | 0) >> 2], u = 0 | r[e + 316 >> 2], a = 0 | r[e + 320 >> 2], (0 | (l = 0 | r[(_ = m + ((n |= 0) << 5) + 8 | 0) >> 2])) == -1)
            Z = 0 | r[m + (n << 5) + 16 >> 2], r[u + (n << 2) >> 2] = r[(0 | r[e + 268 >> 2]) + (Z << 2) >> 2], r[a + (n << 2) >> 2] = r[(0 | r[e + 272 >> 2]) + (Z << 2) >> 2];
          else {
            for (f = 0 | r[(y = m + (n << 5) + 16 | 0) >> 2], R = 0 | r[(0 | r[(p = e + 276 | 0) >> 2]) + (f << 2) >> 2], r[P >> 2] = R, f = 0 | r[(0 | r[(w = e + 280 | 0) >> 2]) + (f << 2) >> 2], r[(O = P + 4 | 0) >> 2] = f, X = (0 | r[m + (l << 5) + 12 >> 2]) == 1 ? -10 : -0.10000000149011612, r[c >> 2] = R, r[(R = 4 + c | 0) >> 2] = f, $0[3 & r[(f = m + (l << 5) + 24 | 0) >> 2]](e, l, c, t, 1), M = 4 + s | 0, m = 4 + t | 0, I = A + 4 | 0, G = 9, S = 1; h[s >> 2] = (d = 0 * S) + +h[c >> 2], h[M >> 2] = (i = X * S) + +h[R >> 2], $0[3 & r[f >> 2]](e, l, s, A, 1), W = +h[A >> 2] - +h[t >> 2], h[A >> 2] = W, x = +h[I >> 2] - +h[m >> 2], !(W != 0 | (h[I >> 2] = x) != 0); ) {
              if (h[s >> 2] = +h[c >> 2] - d, h[M >> 2] = +h[R >> 2] - i, $0[3 & r[f >> 2]](e, l, s, A, 1), x = +h[A >> 2] - +h[t >> 2], h[A >> 2] = x, d = +h[I >> 2] - +h[m >> 2], x != 0 | (h[I >> 2] = d) != 0) {
                Z = 6;
                break;
              }
              if (!G) {
                Z = 8;
                break;
              }
              G = G + -1 | 0, S *= 0.10000000149011612;
            }
            (0 | Z) == 6 ? (W = -x, x = -d) : (0 | Z) == 8 && (T(0, 2397, o), x = W = 0), X = 180 * +cr(0, X, W, x) / 3.1415927410125732, $0[3 & r[f >> 2]](e, 0 | r[_ >> 2], P, P, 1), Z = 0 | r[y >> 2], r[(0 | r[p >> 2]) + (Z << 2) >> 2] = r[P >> 2], r[(0 | r[w >> 2]) + (Z << 2) >> 2] = r[O >> 2], P = (0 | r[e + 284 >> 2]) + (Z << 2) | 0, h[P >> 2] = +h[P >> 2] - X, P = 0 | r[_ >> 2], h[u + (n << 2) >> 2] = +h[(0 | r[e + 268 >> 2]) + (Z << 2) >> 2] * +h[u + (P << 2) >> 2], Z = (0 | r[e + 272 >> 2]) + (Z << 2) | 0, X = +h[Z >> 2] * +h[a + (P << 2) >> 2], h[a + (n << 2) >> 2] = X, h[Z >> 2] = X;
          }
          v = ((0 | r0[4 + (0 | r[e >> 2]) >> 0]) < 4 || (m = 0 | r[k >> 2], I = 0 | r[e + 324 >> 2], R = 0 | r[e + 328 >> 2], M = n << 2, G = r[m + (n << 5) + 16 >> 2] << 2, (0 | (m = 0 | r[m + (n << 5) + 8 >> 2])) == -1 ? (m = 0 | r[e + 296 >> 2], r[I + (M << 2) >> 2] = r[m + (G << 2) >> 2], r[I + ((P = 1 | M) << 2) >> 2] = r[m + ((O = 1 | G) << 2) >> 2], r[I + ((n = 2 | M) << 2) >> 2] = r[m + ((Z = 2 | G) << 2) >> 2], h[I + ((m = 3 | M) << 2) >> 2] = 1, e = 0 | r[e + 300 >> 2], r[R + (M << 2) >> 2] = r[e + (G << 2) >> 2], r[R + (P << 2) >> 2] = r[e + (O << 2) >> 2], r[R + (n << 2) >> 2] = r[e + (Z << 2) >> 2]) : (P = m << 2, Z = (0 | r[e + 296 >> 2]) + (G << 2) | 0, h[(m = I + (M << 2) | 0) >> 2] = +h[Z >> 2] * +h[(n = I + (P << 2) | 0) >> 2], h[m + 4 >> 2] = +h[Z + 4 >> 2] * +h[n + 4 >> 2], h[m + 8 >> 2] = +h[Z + 8 >> 2] * +h[n + 8 >> 2], h[I + ((m = 3 | M) << 2) >> 2] = 1, Z = (0 | r[e + 300 >> 2]) + (G << 2) | 0, S = +h[Z >> 2], X = +h[(e = R + (P << 2) | 0) >> 2], h[(n = R + (M << 2) | 0) >> 2] = S + X - S * X, X = +h[Z + 4 >> 2], S = +h[e + 4 >> 2], h[n + 4 >> 2] = X + S - X * S, S = +h[Z + 8 >> 2], X = +h[e + 8 >> 2], h[n + 8 >> 2] = S + X - S * X), h[R + (m << 2) >> 2] = 1), N);
        }], $0 = [function(e, n, i, l, s) {
          n2(5);
        }, function(e, n, i, l, s) {
          L1(0, 0 | (e |= 0), 0 | (n |= 0), 0 | (i |= 0), 0 | (l |= 0), 0 | (s |= 0));
        }, function(e, n, i, l, s) {
          i |= 0, l |= 0;
          var t, c, A, o, f, u, a, k, p, w, _, y, m, I, M, G, R, x, W, d, S, O, X, P = 0, Z = 0, N = 0, H = 0, e0 = 0, K = 0, $ = 0, m0 = 0, c0 = 0, i0 = 0, n0 = 0, w0 = 0, v0 = 0, f0 = 0, l0 = 0, Q = 0, b = 0, F = 0, p0 = 0, o0 = 0, t0 = 0, u0 = 0, q = 0, g0 = v;
          if (v = v + 32 | 0, W = g0, n = 0 | r[(0 | r[(e |= 0) + 308 >> 2]) + ((n |= 0) << 5) + 16 >> 2], P = 0 | r[e + 60 >> 2], m = 0 | r[(0 | r[e + 152 >> 2]) + (n << 2) >> 2], I = 0 | r[P + (24 * n | 0) + 8 >> 2], M = 0 | r[P + (24 * n | 0) + 4 >> 2], G = 1 + I | 0, (0 | (s |= 0)) <= 0)
            v = g0;
          else {
            R = 0 | I, x = 0 | M, y = (0 | r[P + (24 * n | 0) + 12 >> 2]) == 0, c = m + (I << 3) | 0, A = m + ((p = 0 | h0(M, G)) << 3) | 0, o = m + ((k = p + I | 0) << 3) | 0, f = 4 + m | 0, u = m + (I << 3) + 4 | 0, a = m + (p << 3) + 4 | 0, k = m + (k << 3) + 4 | 0, _ = I - 1 | 0, w = M - 1 | 0, w0 = v0 = f0 = l0 = Z = N = n0 = i0 = c0 = m0 = t0 = o0 = $ = K = e0 = H = u0 = F = 0;
            do {
              Q = (t = +h[i + (u0 << 3) >> 2]) * R, p0 = (b = +h[i + (u0 << 3) + 4 >> 2]) * x, e = !(1 <= t), P = !(1 <= b);
              do {
                if (P & e & !(t < 0) & !(b < 0)) {
                  if (e = ~~Q, n = (0 | h0(G, P = ~~p0)) + e | 0, N = Q - (0 | e), Z = p0 - (0 | P), !y) {
                    h[l + (u0 << 3) >> 2] = (Q = 1 - Z) * ((b = 1 - N) * +h[m + (n << 3) >> 2]) + Q * (N * +h[m + ((q = n + 1 | 0) << 3) >> 2]) + Z * (b * +h[m + ((e = n + G | 0) << 3) >> 2]) + Z * (N * +h[m + ((P = e + 1 | 0) << 3) >> 2]), b = Q * (b * +h[m + (n << 3) + 4 >> 2]) + Q * (N * +h[m + (q << 3) + 4 >> 2]) + Z * (b * +h[m + (e << 3) + 4 >> 2]), Q = Z * (N * +h[m + (P << 3) + 4 >> 2]);
                    break;
                  }
                  if (N + Z <= 1) {
                    h[l + (u0 << 3) >> 2] = (b = 1 - N - Z) * +h[m + (n << 3) >> 2] + N * +h[m + ((P = n + 1 | 0) << 3) >> 2] + Z * +h[m + ((q = n + G | 0) << 3) >> 2], b = b * +h[m + (n << 3) + 4 >> 2] + N * +h[m + (P << 3) + 4 >> 2], Q = Z * +h[m + (q << 3) + 4 >> 2];
                    break;
                  }
                  h[l + (u0 << 3) >> 2] = (p0 = N + -1 + Z) * +h[m + ((e = (P = n + G | 0) + 1 | 0) << 3) >> 2] + (b = 1 - N) * +h[m + (P << 3) >> 2] + (Q = 1 - Z) * +h[m + ((q = n + 1 | 0) << 3) >> 2], b = p0 * +h[m + (e << 3) + 4 >> 2] + b * +h[m + (P << 3) + 4 >> 2], Q *= +h[m + (q << 3) + 4 >> 2];
                  break;
                }
                if (F || (X = +h[m >> 2], O = +h[c >> 2], S = +h[A >> 2], o0 = +h[o >> 2], d = +h[f >> 2], w0 = (f0 = +h[u >> 2]) - (l0 = +h[a >> 2]), F = 1, o0 = 0.25 * (X + O + S + o0) - 0.5 * (X = o0 - X), t0 = 0.25 * (d + f0 + l0 + (t0 = +h[k >> 2])) - 0.5 * (d = t0 - d), l0 = 0.5 * ((v0 = O - S) + X), f0 = 0.5 * (w0 + d), v0 = 0.5 * (X - v0), w0 = 0.5 * (d - w0)), !(b < 3 & -2 < t & t < 3 & -2 < b)) {
                  h[l + (u0 << 3) >> 2] = b * v0 + (t * l0 + o0), b *= w0, Q = t * f0 + t0;
                  break;
                }
                do {
                  if (t <= 0) {
                    if (b <= 0) {
                      H = o0 - (K = 2 * v0), e0 = t0 - ($ = 2 * w0), K = (i0 = o0 - 2 * l0) - K, $ = (n0 = t0 - 2 * f0) - $, m0 = +h[m >> 2], c0 = +h[f >> 2], N = 0.5 * (2 + t), Z = 0.5 * (b + 2);
                      break;
                    }
                    if (P) {
                      $ = (Z = 0 | (P = (0 | M) == (0 | (P = ~~p0)) ? w : P)) / x, N = (0 | (q = P + 1 | 0)) / x, P = 0 | h0(P, G), q = 0 | h0(q, G), H = +h[m + (P << 3) >> 2], e0 = +h[m + (P << 3) + 4 >> 2], K = $ * v0 + (i0 = o0 - 2 * l0), $ = $ * w0 + (n0 = t0 - 2 * f0), m0 = +h[m + (q << 3) >> 2], c0 = +h[m + (q << 3) + 4 >> 2], i0 = N * v0 + i0, n0 = N * w0 + n0, N = 0.5 * (2 + t), Z = p0 - Z;
                      break;
                    }
                    H = +h[A >> 2], e0 = +h[a >> 2], K = v0 + (i0 = o0 - 2 * l0), $ = w0 + (n0 = t0 - 2 * f0), m0 = (Z = 3 * v0) + o0, c0 = (N = 3 * w0) + t0, i0 = Z + i0, n0 = N + n0, N = 0.5 * (2 + t), Z = 0.5 * (b + -1);
                    break;
                  }
                  if (n = b <= 0, e) {
                    if (n) {
                      H = (e0 = (0 | (P = (q = (0 | I) == (0 | (q = ~~Q)) ? _ : q) + 1 | 0)) / R) * l0 + o0 - (K = 2 * v0), e0 = e0 * f0 + t0 - ($ = 2 * w0), K = (m0 = (N = 0 | q) / R) * l0 + o0 - K, $ = m0 * f0 + t0 - $, m0 = +h[m + (P << 3) >> 2], c0 = +h[m + (P << 3) + 4 >> 2], i0 = +h[m + (q << 3) >> 2], n0 = +h[m + (q << 3) + 4 >> 2], N = Q - N, Z = 0.5 * (b + 2);
                      break;
                    }
                    if (P) {
                      r[W >> 2] = u0, s0[W + 8 >> 3] = t, s0[W + 16 >> 3] = b, T(0, 865, W);
                      break;
                    }
                    N = 0 | (q = (0 | I) == (0 | (q = ~~Q)) ? _ : q), c0 = (0 | (P = q + 1 | 0)) / R, H = +h[m + ((P = P + p | 0) << 3) >> 2], e0 = +h[m + (P << 3) + 4 >> 2], K = +h[m + ((q = q + p | 0) << 3) >> 2], $ = +h[m + (q << 3) + 4 >> 2], m0 = (i0 = 3 * v0) + (c0 * l0 + o0), c0 = (Z = 3 * w0) + (c0 * f0 + t0), i0 += (n0 = N / R) * l0 + o0, n0 = Z + (n0 * f0 + t0), N = Q - N, Z = 0.5 * (b + -1);
                    break;
                  }
                  if (n) {
                    H = (m0 = 3 * l0 + o0) - (K = 2 * v0), e0 = (c0 = 3 * f0 + t0) - ($ = 2 * w0), K = l0 + o0 - K, $ = f0 + t0 - $, i0 = +h[c >> 2], n0 = +h[u >> 2], N = 0.5 * (t - 1), Z = 0.5 * (b + 2);
                    break;
                  }
                  if (P) {
                    e0 = (Z = 0 | (P = (0 | M) == (0 | (P = ~~p0)) ? w : P)) / x, i0 = (0 | (q = P + 1 | 0)) / x, P = (0 | h0(P, G)) + I | 0, q = (0 | h0(q, G)) + I | 0, H = e0 * v0 + (m0 = 3 * l0 + o0), e0 = e0 * w0 + (c0 = 3 * f0 + t0), K = +h[m + (P << 3) >> 2], $ = +h[m + (P << 3) + 4 >> 2], m0 = i0 * v0 + m0, c0 = i0 * w0 + c0, i0 = +h[m + (q << 3) >> 2], n0 = +h[m + (q << 3) + 4 >> 2], N = 0.5 * (t - 1), Z = p0 - Z;
                    break;
                  }
                  H = v0 + (m0 = 3 * l0 + o0), e0 = w0 + (c0 = 3 * f0 + t0), K = +h[o >> 2], $ = +h[k >> 2], m0 = (i0 = 3 * v0) + m0, c0 = (n0 = 3 * w0) + c0, i0 += l0 + o0, n0 += f0 + t0, N = 0.5 * (t - 1), Z = 0.5 * (b + -1);
                  break;
                } while (0);
                if (N + Z <= 1) {
                  h[l + (u0 << 3) >> 2] = K + (H - K) * N + (i0 - K) * Z, b = $ + (e0 - $) * N, Q = (n0 - $) * Z;
                  break;
                }
                h[l + (u0 << 3) >> 2] = m0 + (i0 - m0) * (b = 1 - N) + (H - m0) * (Q = 1 - Z), b = c0 + (n0 - c0) * b, Q *= e0 - c0;
                break;
              } while (0);
            } while (h[l + (u0 << 3) + 4 >> 2] = b + Q, (0 | (u0 = u0 + 1 | 0)) != (0 | s));
            v = g0;
          }
        }, function(e, n, i, l, s) {
          e |= 0, n |= 0, i |= 0, l |= 0, s |= 0;
          var t, c, A, o, f = 0, u = 0, a = 0, k = 0;
          if (n = 0 | r[(0 | r[e + 308 >> 2]) + (n << 5) + 16 >> 2], u = 3.1415927410125732 * (+h[(0 | r[e + 168 >> 2]) + (12 * n | 0) + 4 >> 2] + +h[(0 | r[e + 284 >> 2]) + (n << 2) >> 2]) / 180, f = +e2(u), u = +X0(u), c = (u *= t = +h[(0 | r[e + 272 >> 2]) + (n << 2) >> 2]) * (a = 0 | r[(0 | r[e + 288 >> 2]) + (n << 2) >> 2] ? -1 : 1), t = (f *= t) * (k = 0 | r[(0 | r[e + 292 >> 2]) + (n << 2) >> 2] ? -1 : 1), a *= f, k *= u, u = +h[(0 | r[e + 276 >> 2]) + (n << 2) >> 2], f = +h[(0 | r[e + 280 >> 2]) + (n << 2) >> 2], !((0 | s) <= 0))
            for (n = 0; o = +h[i + (n << 3) >> 2], A = +h[i + (n << 3) + 4 >> 2], h[l + (n << 3) >> 2] = c * o - t * A + u, h[l + (n << 3) + 4 >> 2] = a * o + k * A + f, (0 | (n = n + 1 | 0)) != (0 | s); )
              ;
        }];
        return { ___errno_location: function() {
          return 3688;
        }, ___muldi3: S2, ___udivdi3: B2, _bitshift64Lshr: I2, _bitshift64Shl: M1, _csmFree: function(e) {
          x2(e |= 0);
        }, _csmGetDrawableConstantFlags: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[888 + (0 | r[e >> 2]) >> 2], v = i, 0 | n) : (r[n >> 2] = 1896, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetDrawableCount: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[e + 332 >> 2], v = i, 0 | n) : (r[n >> 2] = 1858, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, 0 | (n = -1));
        }, _csmGetDrawableDrawOrders: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[e + 440 >> 2], v = i, 0 | n) : (r[n >> 2] = 1980, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetDrawableDynamicFlags: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[e + 432 >> 2], v = i, 0 | n) : (r[n >> 2] = 1924, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetDrawableIds: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[832 + (0 | r[e >> 2]) >> 2], v = i, 0 | n) : (r[n >> 2] = 1878, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetDrawableIndexCounts: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[904 + (0 | r[e >> 2]) >> 2], v = i, 0 | n) : (r[n >> 2] = 2182, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetDrawableIndices: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[840 + (0 | r[e >> 2]) >> 2], v = i, 0 | n) : (r[n >> 2] = 2208, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetDrawableMaskCounts: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[912 + (0 | r[e >> 2]) >> 2], v = i, 0 | n) : (r[n >> 2] = 2056, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetDrawableMasks: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[844 + (0 | r[e >> 2]) >> 2], v = i, 0 | n) : (r[n >> 2] = 2081, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetDrawableMultiplyColors: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[e + 452 >> 2], v = i, 0 | n) : (r[n >> 2] = 2230, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetDrawableOpacities: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[e + 448 >> 2], v = i, 0 | n) : (r[n >> 2] = 2032, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetDrawableParentPartIndices: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[876 + (0 | r[e >> 2]) >> 2], v = i, 0 | n) : (r[n >> 2] = 2286, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetDrawableRenderOrders: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[e + 436 >> 2], v = i, 0 | n) : (r[n >> 2] = 2005, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetDrawableScreenColors: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[e + 456 >> 2], v = i, 0 | n) : (r[n >> 2] = 2259, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetDrawableTextureIndices: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[884 + (0 | r[e >> 2]) >> 2], v = i, 0 | n) : (r[n >> 2] = 1951, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetDrawableVertexCounts: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[892 + (0 | r[e >> 2]) >> 2], v = i, 0 | n) : (r[n >> 2] = 2101, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetDrawableVertexPositions: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[e + 444 >> 2], v = i, 0 | n) : (r[n >> 2] = 2128, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetDrawableVertexUvs: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[836 + (0 | r[e >> 2]) >> 2], v = i, 0 | n) : (r[n >> 2] = 2158, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetLatestMocVersion: function() {
          return 4;
        }, _csmGetMocVersion: function(e, n) {
          n |= 0;
          var i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (e = 0 | or(e), v = i, 0 | e) : (r[n >> 2] = 1286, r[n + 4 >> 2] = 1303, T(0, 1269, n), v = i, (e = 0) | e);
        }, _csmGetParameterCount: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[e + 540 >> 2], v = i, 0 | n) : (r[n >> 2] = 1610, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, 0 | (n = -1));
        }, _csmGetParameterDefaultValues: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[932 + (0 | r[e >> 2]) >> 2], v = i, 0 | n) : (r[n >> 2] = 1729, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetParameterIds: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[916 + (0 | r[e >> 2]) >> 2], v = i, 0 | n) : (r[n >> 2] = 1631, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetParameterKeyCounts: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[e + 616 >> 2], v = i, 0 | n) : (r[n >> 2] = 2347, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetParameterKeyValues: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[e + 612 >> 2], v = i, 0 | n) : (r[n >> 2] = 2372, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetParameterMaximumValues: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[924 + (0 | r[e >> 2]) >> 2], v = i, 0 | n) : (r[n >> 2] = 1700, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetParameterMinimumValues: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[928 + (0 | r[e >> 2]) >> 2], v = i, 0 | n) : (r[n >> 2] = 1671, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetParameterTypes: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[e + 548 >> 2], v = i, 0 | n) : (r[n >> 2] = 1650, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetParameterValues: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[e + 552 >> 2], v = i, 0 | n) : (r[n >> 2] = 1758, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetPartCount: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[e + 4 >> 2], v = i, 0 | n) : (r[n >> 2] = 1780, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, 0 | (n = -1));
        }, _csmGetPartIds: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[712 + (0 | r[e >> 2]) >> 2], v = i, 0 | n) : (r[n >> 2] = 1796, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetPartOpacities: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[e + 52 >> 2], v = i, 0 | n) : (r[n >> 2] = 1810, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetPartParentPartIndices: function(e) {
          var n = 0, i = v;
          return v = v + 16 | 0, n = i, (e |= 0) ? (n = 0 | r[740 + (0 | r[e >> 2]) >> 2], v = i, 0 | n) : (r[n >> 2] = 1830, r[n + 4 >> 2] = 1411, T(0, 1269, n), v = i, (n = 0) | n);
        }, _csmGetSizeofModel: c1, _csmGetVersion: function() {
          return 67239938;
        }, _csmInitializeModelInPlace: l1, _csmMalloc: function(e) {
          return 0 | g2(e |= 0);
        }, _csmMallocMoc: function(e) {
          var n, i = v;
          return v = v + 16 | 0, F1(n = i, 64, e |= 0), v = i, 0 | r[n >> 2];
        }, _csmMallocModelAndInitialize: function(e) {
          var n = 0, i = 0, l = v;
          return v = v + 16 | 0, n = l, 0 | (e |= 0) && !(0 | F1(n, 16, i = 0 | c1(e))) ? (n = 0 | l1(e, e = 0 | r[n >> 2], i)) || (x2(e), n = 0) : n = 0, v = l, 0 | n;
        }, _csmReadCanvasInfo: function(e, n, i, l) {
          n |= 0, i |= 0, l |= 0;
          var s, t, c, A = 0, o = v;
          if (v = v + 32 | 0, t = o + 24 | 0, A = o + 16 | 0, c = o + 8 | 0, s = o, e |= 0)
            return n ? i ? void (v = (l ? (A = 0 | r[708 + (0 | r[e >> 2]) >> 2], r[n >> 2] = r[A + 12 >> 2], r[n + 4 >> 2] = r[A + 16 >> 2], r[i >> 2] = r[A + 4 >> 2], r[i + 4 >> 2] = r[A + 8 >> 2], r[l >> 2] = r[A >> 2]) : (r[t >> 2] = 1393, r[4 + t >> 2] = 1487, T(0, 1269, t)), o)) : (r[A >> 2] = 1393, r[A + 4 >> 2] = 1458, T(0, 1269, A), void (v = o)) : (r[c >> 2] = 1393, r[4 + c >> 2] = 1431, T(0, 1269, c), void (v = o));
          r[s >> 2] = 1393, r[s + 4 >> 2] = 1411, T(0, 1269, s), v = o;
        }, _csmResetDrawableDynamicFlags: function(e) {
          var n, i = v;
          v = v + 16 | 0, n = i, v = ((e |= 0) ? r[e + 428 >> 2] = 1 : (r[n >> 2] = 2318, r[n + 4 >> 2] = 1411, T(0, 1269, n)), i);
        }, _csmReviveMocInPlace: function(e, n) {
          n |= 0;
          var i, l = 0, s = 0, t = v;
          return v = v + 32 | 0, s = t + 16 | 0, i = t + 8 | 0, l = t, (e |= 0) ? ((l = e) + 63 & -64 | 0) != (0 | l) ? (r[i >> 2] = 1322, r[4 + i >> 2] = 1342, T(0, 1269, i), v = t, (s = 0) | s) : 0 | n && (n + 63 & -64 | 0) == (0 | n) ? (s = 0 | fr(e), v = t, 0 | s) : (r[s >> 2] = 1322, r[s + 4 >> 2] = 1374, T(0, 1269, s), v = t, (s = 0) | s) : (r[l >> 2] = 1322, r[l + 4 >> 2] = 1303, T(0, 1269, l), v = t, (s = 0) | s);
        }, _csmSetLogFunction: function(e) {
          r[904] = e |= 0;
        }, _csmUpdateModel: function(e) {
          var n, i = v;
          v = v + 16 | 0, n = i, v = ((e |= 0) ? a1(e) : (r[n >> 2] = 1595, r[n + 4 >> 2] = 1411, T(0, 1269, n)), i);
        }, _emscripten_get_sbrk_ptr: Fr, _emscripten_replace_memory: function(e) {
          return U = new Int8Array(e), r0 = new Uint8Array(e), a0 = new Int16Array(e), P0 = new Uint16Array(e), r = new Int32Array(e), h = new Float32Array(e), s0 = new Float64Array(e), !0;
        }, _free: x2, _i64Add: a2, _i64Subtract: D2, _malloc: g2, _memcpy: H0, _memset: B0, dynCall_ii: function(e, n) {
          return 0 | Vr[3 & (e |= 0)](0 | (n |= 0));
        }, dynCall_iiii: function(e, n, i, l) {
          return 0 | C2[3 & (e |= 0)](0 | (n |= 0), 0 | (i |= 0), 0 | (l |= 0));
        }, dynCall_iiiii: function(e, n, i, l, s) {
          return 0 | Mr[3 & (e |= 0)](0 | (n |= 0), 0 | (i |= 0), 0 | (l |= 0), 0 | (s |= 0));
        }, dynCall_vi: function(e, n) {
          U1[1 & (e |= 0)](0 | (n |= 0));
        }, dynCall_vii: function(e, n, i) {
          E1[3 & (e |= 0)](0 | (n |= 0), 0 | (i |= 0));
        }, dynCall_viiiii: function(e, n, i, l, s, t) {
          $0[3 & (e |= 0)](0 | (n |= 0), 0 | (i |= 0), 0 | (l |= 0), 0 | (s |= 0), 0 | (t |= 0));
        }, establishStackSpace: function(e, n) {
          v = e |= 0;
        }, stackAlloc: function(e) {
          var n = v;
          return v = (v = v + (e |= 0) | 0) + 15 & -16, 0 | n;
        }, stackRestore: function(e) {
          v = e |= 0;
        }, stackSave: function() {
          return 0 | v;
        } };
      }({ Math, Int8Array, Int16Array, Int32Array, Uint8Array, Uint16Array, Float32Array, Float64Array }, { a: s2, b: function(V) {
        O2 = V;
      }, c: function() {
        return O2;
      }, d: function(V, E) {
        return N0[V](E);
      }, e: function(V, E, j, U) {
        return N0[V](E, j, U);
      }, f: function(V, E, j, U, a0) {
        return N0[V](E, j, U, a0);
      }, g: function(V, E) {
        N0[V](E);
      }, h: function(V, E, j) {
        N0[V](E, j);
      }, i: function(V, E, j, U, a0, r) {
        N0[V](E, j, U, a0, r);
      }, j: function() {
        return r1.apply(null, arguments);
      }, k: e1, l: function(V, E, j) {
        d0.set(d0.subarray(E, E + j), V);
      }, m: function(V) {
        if (2130706432 < V)
          return !1;
        for (var E = Math.max(e1(), 16777216); E < V; )
          E = E <= 536870912 ? Q2(2 * E) : Math.min(Q2((3 * E + 2147483648) / 4), 2130706432);
        return !!n1(E);
      }, n: r1, o: function() {
        s2("OOM");
      }, p: function(V) {
        return V;
      }, q: $2, r: n1, s: function() {
        var V = D._fflush;
        V && V(0), V2[1].length && M2(1, 10), V2[2].length && M2(2, 10);
      }, t: b2, u: function() {
        var V = b2();
        return D.extraStackTrace && (V += `
` + D.extraStackTrace()), $2(V);
      }, v: 4400 }, k2), Y1 = (D.___errno_location = J.___errno_location, D.___muldi3 = J.___muldi3, D.___udivdi3 = J.___udivdi3, D._bitshift64Lshr = J._bitshift64Lshr, D._bitshift64Shl = J._bitshift64Shl, D._csmFree = J._csmFree, D._csmGetDrawableConstantFlags = J._csmGetDrawableConstantFlags, D._csmGetDrawableCount = J._csmGetDrawableCount, D._csmGetDrawableDrawOrders = J._csmGetDrawableDrawOrders, D._csmGetDrawableDynamicFlags = J._csmGetDrawableDynamicFlags, D._csmGetDrawableIds = J._csmGetDrawableIds, D._csmGetDrawableIndexCounts = J._csmGetDrawableIndexCounts, D._csmGetDrawableIndices = J._csmGetDrawableIndices, D._csmGetDrawableMaskCounts = J._csmGetDrawableMaskCounts, D._csmGetDrawableMasks = J._csmGetDrawableMasks, D._csmGetDrawableMultiplyColors = J._csmGetDrawableMultiplyColors, D._csmGetDrawableOpacities = J._csmGetDrawableOpacities, D._csmGetDrawableParentPartIndices = J._csmGetDrawableParentPartIndices, D._csmGetDrawableRenderOrders = J._csmGetDrawableRenderOrders, D._csmGetDrawableScreenColors = J._csmGetDrawableScreenColors, D._csmGetDrawableTextureIndices = J._csmGetDrawableTextureIndices, D._csmGetDrawableVertexCounts = J._csmGetDrawableVertexCounts, D._csmGetDrawableVertexPositions = J._csmGetDrawableVertexPositions, D._csmGetDrawableVertexUvs = J._csmGetDrawableVertexUvs, D._csmGetLatestMocVersion = J._csmGetLatestMocVersion, D._csmGetMocVersion = J._csmGetMocVersion, D._csmGetParameterCount = J._csmGetParameterCount, D._csmGetParameterDefaultValues = J._csmGetParameterDefaultValues, D._csmGetParameterIds = J._csmGetParameterIds, D._csmGetParameterKeyCounts = J._csmGetParameterKeyCounts, D._csmGetParameterKeyValues = J._csmGetParameterKeyValues, D._csmGetParameterMaximumValues = J._csmGetParameterMaximumValues, D._csmGetParameterMinimumValues = J._csmGetParameterMinimumValues, D._csmGetParameterTypes = J._csmGetParameterTypes, D._csmGetParameterValues = J._csmGetParameterValues, D._csmGetPartCount = J._csmGetPartCount, D._csmGetPartIds = J._csmGetPartIds, D._csmGetPartOpacities = J._csmGetPartOpacities, D._csmGetPartParentPartIndices = J._csmGetPartParentPartIndices, D._csmGetSizeofModel = J._csmGetSizeofModel, D._csmGetVersion = J._csmGetVersion, D._csmInitializeModelInPlace = J._csmInitializeModelInPlace, D._csmMalloc = J._csmMalloc, D._csmMallocMoc = J._csmMallocMoc, D._csmMallocModelAndInitialize = J._csmMallocModelAndInitialize, D._csmReadCanvasInfo = J._csmReadCanvasInfo, D._csmResetDrawableDynamicFlags = J._csmResetDrawableDynamicFlags, D._csmReviveMocInPlace = J._csmReviveMocInPlace, D._csmSetLogFunction = J._csmSetLogFunction, D._csmUpdateModel = J._csmUpdateModel, D._emscripten_get_sbrk_ptr = J._emscripten_get_sbrk_ptr, D._emscripten_replace_memory = J._emscripten_replace_memory), i1 = (D._free = J._free, D._i64Add = J._i64Add, D._i64Subtract = J._i64Subtract, D._malloc = J._malloc, D._memcpy = J._memcpy, D._memset = J._memset, D.establishStackSpace = J.establishStackSpace, D.stackAlloc = J.stackAlloc), O1 = D.stackRestore = J.stackRestore, N1 = D.stackSave = J.stackSave;
      function P2() {
        function V() {
          if (!c2 && (c2 = !0, !N2)) {
            if (v2(H1), v2(W1), D.onRuntimeInitialized && D.onRuntimeInitialized(), D.postRun)
              for (typeof D.postRun == "function" && (D.postRun = [D.postRun]); D.postRun.length; ) {
                var E = D.postRun.shift();
                K2.unshift(E);
              }
            v2(K2);
          }
        }
        if (!(0 < T0)) {
          if (D.preRun)
            for (typeof D.preRun == "function" && (D.preRun = [D.preRun]); D.preRun.length; )
              (function() {
                var E = D.preRun.shift();
                L2.unshift(E);
              })();
          v2(L2), 0 < T0 || (D.setStatus ? (D.setStatus("Running..."), setTimeout(function() {
            setTimeout(function() {
              D.setStatus("");
            }, 1), V();
          }, 1)) : V());
        }
      }
      if (D.dynCall_ii = J.dynCall_ii, D.dynCall_iiii = J.dynCall_iiii, D.dynCall_iiiii = J.dynCall_iiiii, D.dynCall_vi = J.dynCall_vi, D.dynCall_vii = J.dynCall_vii, D.dynCall_viiiii = J.dynCall_viiiii, D.asm = J, D.ccall = function(V, E, j, U) {
        var a0 = { string: function(s0) {
          var C0 = 0;
          if (s0 != null && s0 !== 0) {
            var j0 = 1 + (s0.length << 2), U0 = C0 = i1(j0), X0 = d0;
            if (0 < j0) {
              for (var j0 = U0 + j0 - 1, e2 = 0; e2 < s0.length; ++e2) {
                var R0 = s0.charCodeAt(e2);
                if ((R0 = 55296 <= R0 && R0 <= 57343 ? 65536 + ((1023 & R0) << 10) | 1023 & s0.charCodeAt(++e2) : R0) <= 127) {
                  if (j0 <= U0)
                    break;
                  X0[U0++] = R0;
                } else {
                  if (R0 <= 2047) {
                    if (j0 <= U0 + 1)
                      break;
                    X0[U0++] = 192 | R0 >> 6;
                  } else {
                    if (R0 <= 65535) {
                      if (j0 <= U0 + 2)
                        break;
                      X0[U0++] = 224 | R0 >> 12;
                    } else {
                      if (j0 <= U0 + 3)
                        break;
                      X0[U0++] = 240 | R0 >> 18, X0[U0++] = 128 | R0 >> 12 & 63;
                    }
                    X0[U0++] = 128 | R0 >> 6 & 63;
                  }
                  X0[U0++] = 128 | 63 & R0;
                }
              }
              X0[U0] = 0;
            }
          }
          return C0;
        }, array: function(s0) {
          var C0 = i1(s0.length);
          return h2.set(s0, C0), C0;
        } }, r = function(s0) {
          var C0 = D["_" + s0];
          return w2(C0, "Cannot call unknown function " + s0 + ", make sure it is exported"), C0;
        }(V), r0 = [];
        if (V = 0, U)
          for (var P0 = 0; P0 < U.length; P0++) {
            var h = a0[j[P0]];
            h ? (V === 0 && (V = N1()), r0[P0] = h(U[P0])) : r0[P0] = U[P0];
          }
        return j = function(s0) {
          return E === "string" ? T2(s0) : E === "boolean" ? !!s0 : s0;
        }(j = r.apply(null, r0)), V !== 0 && O1(V), j;
      }, D.UTF8ToString = T2, D.addFunction = function(V) {
        for (var E = 0; E < 1; E++)
          if (!N0[E])
            return N0[E] = V, 1 + E;
        throw "Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.";
      }, z0 && ((String.prototype.startsWith ? z0.startsWith(u2) : z0.indexOf(u2) === 0) || (y0 = z0, z0 = D.locateFile ? D.locateFile(y0, x0) : x0 + y0), S0 || i2 ? (J = Y0(z0), d0.set(J, 8)) : (T0++, D.monitorRunDependencies && D.monitorRunDependencies(T0), y2 = function(V) {
        V.byteLength && (V = new Uint8Array(V)), d0.set(V, 8), D.memoryInitializerRequest && delete D.memoryInitializerRequest.response, T0--, D.monitorRunDependencies && D.monitorRunDependencies(T0), T0 == 0 && A2 && (V = A2, A2 = null, V());
      }, R2 = function() {
        M0(function() {
          throw "could not load memory initializer " + z0;
        });
      }, (x0 = J0(z0)) ? y2(x0.buffer) : D.memoryInitializerRequest ? (y0 = function() {
        var V = D.memoryInitializerRequest, E = V.response;
        if (V.status !== 200 && V.status !== 0) {
          if (!(E = J0(D.memoryInitializerRequestURL)))
            return console.warn("a problem seems to have happened with Module.memoryInitializerRequest, status: " + V.status + ", retrying " + z0), void R2();
          E = E.buffer;
        }
        y2(E);
      }, D.memoryInitializerRequest.response ? setTimeout(y0, 0) : D.memoryInitializerRequest.addEventListener("load", y0)) : R2())), D.then = function(V) {
        var E;
        return c2 ? V(D) : (E = D.onRuntimeInitialized, D.onRuntimeInitialized = function() {
          E && E(), V(D);
        }), D;
      }, A2 = function V() {
        c2 || P2(), c2 || (A2 = V);
      }, D.run = P2, D.preInit)
        for (typeof D.preInit == "function" && (D.preInit = [D.preInit]); 0 < D.preInit.length; )
          D.preInit.pop()();
      return P2(), C;
    };
  }();
  typeof exports == "object" && typeof module == "object" ? module.exports = m2 : typeof define == "function" && define.amd ? define([], function() {
    return m2;
  }) : typeof exports == "object" && (exports._em_module = m2);
  var z = m2();
})(z2 || (z2 = {}));
window.Live2DCubismCore = z2;
