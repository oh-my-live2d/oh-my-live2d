import "./chunk-ZS7NZCD4.js";

// node_modules/.pnpm/tianjie@0.0.8/node_modules/tianjie/dist/index.js
var T = (t) => {
  const o = t.length;
  if (o === 0)
    return;
  const e = Math.floor(Math.random() * o);
  return t[e];
};
var g = () => Date.now();
var h = () => Math.floor(Date.now() / 1e3);
var y = (t, o = 0, e = {}, n) => {
  let r = null, u = false;
  const { leading: s = false, trailing: i = true } = e;
  function f(...a) {
    if (r && (clearTimeout(r), r = null), s && !u) {
      const c = t.call(this, ...a);
      n && n(c), u = true;
    } else
      r = setTimeout(() => {
        if (i) {
          const c = t.call(this, ...a);
          n && n(c);
        }
        u = false, r = null;
      }, o);
  }
  return f;
};
var w = (t, o = 0, e = {}, n) => {
  const { leading: r, trailing: u } = e;
  let s = 0, i = null;
  function f(...a) {
    return new Promise((c) => {
      const x = (/* @__PURE__ */ new Date()).getTime();
      !r && !s && (s = x);
      const p = o - (x - s);
      if (p <= 0) {
        i && (clearInterval(i), i = null);
        const l = t.apply(this, a);
        n && n(l), c(l), s = x;
      }
      !i && p > 0 && u && (i = setTimeout(() => {
        s = r ? (/* @__PURE__ */ new Date()).getTime() : 0, i = null;
        const l = t.apply(this, a);
        n && n(l), c(l);
      }, p));
    });
  }
  return f.cancel = () => {
    i && clearTimeout(i);
  }, f;
};
var A = (t, o) => {
  let e;
  return {
    start: async function() {
      const n = async () => {
        e && (await t(), clearTimeout(e), e = setTimeout(n, o));
      };
      e || (clearTimeout(e), e = setTimeout(n, o));
    },
    stop: function() {
      clearTimeout(e), e = void 0;
    }
  };
};
var m = (t) => t !== null && typeof t == "object" && !Array.isArray(t);
var D = (t) => typeof t == "string";
var I = (t) => typeof t == "number" || t instanceof Number;
var M = (t) => Array.isArray(t);
var O = (t) => typeof t == "boolean";
function R(t, o) {
  const e = o - t, n = Math.random();
  return t + Math.round(n * e);
}
var d = (t, o) => {
  const e = Object.assign({}, t);
  return m(t) && m(o) && Object.keys(o).forEach((n) => {
    m(o[n]) ? n in t ? e[n] = d(t[n], o[n]) : Object.assign(e, { [n]: o[n] }) : Object.assign(e, { [n]: o[n] });
  }), e;
};
function j(t) {
  if (!m(t))
    return t;
  const o = [];
  for (const e in t) {
    const n = t[e], r = encodeURIComponent(e) + "=" + encodeURIComponent(n);
    o.push(r);
  }
  return o.join("&");
}
var C = (t) => {
  const o = t.charAt(0).toUpperCase(), e = t.slice(1).toLowerCase();
  return o + e;
};
var U = () => {
  let t = (/* @__PURE__ */ new Date()).getTime();
  return typeof performance < "u" && typeof performance.now == "function" && (t += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o) {
    const e = (t + Math.random() * 16) % 16 | 0;
    return t = Math.floor(t / 16), (o == "x" ? e : e & 3 | 8).toString(16);
  });
};
export {
  y as debounce,
  C as formatInitialCapital,
  T as getRandomElement,
  R as getRandomNum,
  g as getTimestamp,
  h as getTimestampInSeconds,
  U as getUUID,
  M as isArray,
  O as isBoolean,
  I as isNumber,
  m as isObject,
  D as isString,
  d as mergeDeep,
  j as objectToQuery,
  A as setIntervalAsync,
  w as throttle
};
//# sourceMappingURL=tianjie.js.map
