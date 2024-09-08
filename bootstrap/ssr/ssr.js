import { reactive, ref, inject, mergeProps, useSSRContext, unref, withCtx, createTextVNode, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { Link, createInertiaApp } from "@inertiajs/vue3";
import { renderToString } from "@vue/server-renderer";
import createServer from "@inertiajs/vue3/server";
const $r = Symbol.for("inertia-routes"), tt = () => inject($r);
var nt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ot(r5) {
  if (r5.__esModule)
    return r5;
  var e = r5.default;
  if (typeof e == "function") {
    var t = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: true }), Object.keys(r5).forEach(function(n) {
    var a = Object.getOwnPropertyDescriptor(r5, n);
    Object.defineProperty(t, n, a.get ? a : {
      enumerable: true,
      get: function() {
        return r5[n];
      }
    });
  }), t;
}
var at = Error, it = EvalError, lt = RangeError, ft = ReferenceError, Pr = SyntaxError, ie = TypeError, ut = URIError, ct = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return false;
  if (typeof Symbol.iterator == "symbol")
    return true;
  var e = {}, t = Symbol("test"), n = Object(t);
  if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return false;
  var a = 42;
  e[t] = a;
  for (t in e)
    return false;
  if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
    return false;
  var o = Object.getOwnPropertySymbols(e);
  if (o.length !== 1 || o[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t))
    return false;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var i = Object.getOwnPropertyDescriptor(e, t);
    if (i.value !== a || i.enumerable !== true)
      return false;
  }
  return true;
}, Ye = typeof Symbol < "u" && Symbol, st = ct, pt = function() {
  return typeof Ye != "function" || typeof Symbol != "function" || typeof Ye("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? false : st();
}, Ee = {
  __proto__: null,
  foo: {}
}, yt = Object, dt = function() {
  return { __proto__: Ee }.foo === Ee.foo && !(Ee instanceof yt);
}, vt = "Function.prototype.bind called on incompatible ", ht = Object.prototype.toString, gt = Math.max, mt = "[object Function]", Xe = function(e, t) {
  for (var n = [], a = 0; a < e.length; a += 1)
    n[a] = e[a];
  for (var o = 0; o < t.length; o += 1)
    n[o + e.length] = t[o];
  return n;
}, bt = function(e, t) {
  for (var n = [], a = t, o = 0; a < e.length; a += 1, o += 1)
    n[o] = e[a];
  return n;
}, St = function(r5, e) {
  for (var t = "", n = 0; n < r5.length; n += 1)
    t += r5[n], n + 1 < r5.length && (t += e);
  return t;
}, wt = function(e) {
  var t = this;
  if (typeof t != "function" || ht.apply(t) !== mt)
    throw new TypeError(vt + t);
  for (var n = bt(arguments, 1), a, o = function() {
    if (this instanceof a) {
      var u = t.apply(
        this,
        Xe(n, arguments)
      );
      return Object(u) === u ? u : this;
    }
    return t.apply(
      e,
      Xe(n, arguments)
    );
  }, i = gt(0, t.length - n.length), f = [], l = 0; l < i; l++)
    f[l] = "$" + l;
  if (a = Function("binder", "return function (" + St(f, ",") + "){ return binder.apply(this,arguments); }")(o), t.prototype) {
    var s = function() {
    };
    s.prototype = t.prototype, a.prototype = new s(), s.prototype = null;
  }
  return a;
}, At = wt, je = Function.prototype.bind || At, Et = Function.prototype.call, Ot = Object.prototype.hasOwnProperty, $t = je, Pt = $t.call(Et, Ot), d, _t = at, It = it, xt = lt, Ft = ft, H = Pr, V = ie, Rt = ut, _r = Function, Oe = function(r5) {
  try {
    return _r('"use strict"; return (' + r5 + ").constructor;")();
  } catch {
  }
}, W = Object.getOwnPropertyDescriptor;
if (W)
  try {
    W({}, "");
  } catch {
    W = null;
  }
var $e = function() {
  throw new V();
}, Dt = W ? function() {
  try {
    return arguments.callee, $e;
  } catch {
    try {
      return W(arguments, "callee").get;
    } catch {
      return $e;
    }
  }
}() : $e, q = pt(), Tt = dt(), S = Object.getPrototypeOf || (Tt ? function(r5) {
  return r5.__proto__;
} : null), K = {}, Nt = typeof Uint8Array > "u" || !S ? d : S(Uint8Array), L = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? d : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? d : ArrayBuffer,
  "%ArrayIteratorPrototype%": q && S ? S([][Symbol.iterator]()) : d,
  "%AsyncFromSyncIteratorPrototype%": d,
  "%AsyncFunction%": K,
  "%AsyncGenerator%": K,
  "%AsyncGeneratorFunction%": K,
  "%AsyncIteratorPrototype%": K,
  "%Atomics%": typeof Atomics > "u" ? d : Atomics,
  "%BigInt%": typeof BigInt > "u" ? d : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? d : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? d : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? d : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": _t,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": It,
  "%Float32Array%": typeof Float32Array > "u" ? d : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? d : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? d : FinalizationRegistry,
  "%Function%": _r,
  "%GeneratorFunction%": K,
  "%Int8Array%": typeof Int8Array > "u" ? d : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? d : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? d : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": q && S ? S(S([][Symbol.iterator]())) : d,
  "%JSON%": typeof JSON == "object" ? JSON : d,
  "%Map%": typeof Map > "u" ? d : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !q || !S ? d : S((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? d : Promise,
  "%Proxy%": typeof Proxy > "u" ? d : Proxy,
  "%RangeError%": xt,
  "%ReferenceError%": Ft,
  "%Reflect%": typeof Reflect > "u" ? d : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? d : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !q || !S ? d : S((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? d : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": q && S ? S(""[Symbol.iterator]()) : d,
  "%Symbol%": q ? Symbol : d,
  "%SyntaxError%": H,
  "%ThrowTypeError%": Dt,
  "%TypedArray%": Nt,
  "%TypeError%": V,
  "%Uint8Array%": typeof Uint8Array > "u" ? d : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? d : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? d : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? d : Uint32Array,
  "%URIError%": Rt,
  "%WeakMap%": typeof WeakMap > "u" ? d : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? d : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? d : WeakSet
};
if (S)
  try {
    null.error;
  } catch (r5) {
    var Mt = S(S(r5));
    L["%Error.prototype%"] = Mt;
  }
var Bt = function r(e) {
  var t;
  if (e === "%AsyncFunction%")
    t = Oe("async function () {}");
  else if (e === "%GeneratorFunction%")
    t = Oe("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    t = Oe("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = r("%AsyncGeneratorFunction%");
    n && (t = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var a = r("%AsyncGenerator%");
    a && S && (t = S(a.prototype));
  }
  return L[e] = t, t;
}, er = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, le = je, he = Pt, Ct = le.call(Function.call, Array.prototype.concat), Ut = le.call(Function.apply, Array.prototype.splice), rr = le.call(Function.call, String.prototype.replace), ge = le.call(Function.call, String.prototype.slice), Wt = le.call(Function.call, RegExp.prototype.exec), Lt = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Gt = /\\(\\)?/g, kt = function(e) {
  var t = ge(e, 0, 1), n = ge(e, -1);
  if (t === "%" && n !== "%")
    throw new H("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && t !== "%")
    throw new H("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return rr(e, Lt, function(o, i, f, l) {
    a[a.length] = f ? rr(l, Gt, "$1") : i || o;
  }), a;
}, qt = function(e, t) {
  var n = e, a;
  if (he(er, n) && (a = er[n], n = "%" + a[0] + "%"), he(L, n)) {
    var o = L[n];
    if (o === K && (o = Bt(n)), typeof o > "u" && !t)
      throw new V("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: n,
      value: o
    };
  }
  throw new H("intrinsic " + e + " does not exist!");
}, Z = function(e, t) {
  if (typeof e != "string" || e.length === 0)
    throw new V("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof t != "boolean")
    throw new V('"allowMissing" argument must be a boolean');
  if (Wt(/^%?[^%]*%?$/, e) === null)
    throw new H("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = kt(e), a = n.length > 0 ? n[0] : "", o = qt("%" + a + "%", t), i = o.name, f = o.value, l = false, s = o.alias;
  s && (a = s[0], Ut(n, Ct([0, 1], s)));
  for (var u = 1, p = true; u < n.length; u += 1) {
    var c = n[u], y = ge(c, 0, 1), v = ge(c, -1);
    if ((y === '"' || y === "'" || y === "`" || v === '"' || v === "'" || v === "`") && y !== v)
      throw new H("property names with quotes must have matching quotes");
    if ((c === "constructor" || !p) && (l = true), a += "." + c, i = "%" + a + "%", he(L, i))
      f = L[i];
    else if (f != null) {
      if (!(c in f)) {
        if (!t)
          throw new V("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (W && u + 1 >= n.length) {
        var b = W(f, c);
        p = !!b, p && "get" in b && !("originalValue" in b.get) ? f = b.get : f = f[c];
      } else
        p = he(f, c), f = f[c];
      p && !l && (L[i] = f);
    }
  }
  return f;
}, Ir = { exports: {} }, Pe, tr;
function ze() {
  if (tr)
    return Pe;
  tr = 1;
  var r5 = Z, e = r5("%Object.defineProperty%", true) || false;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = false;
    }
  return Pe = e, Pe;
}
var jt = Z, de = jt("%Object.getOwnPropertyDescriptor%", true);
if (de)
  try {
    de([], "length");
  } catch {
    de = null;
  }
var xr = de, nr = ze(), zt = Pr, j = ie, or = xr, Kt = function(e, t, n) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new j("`obj` must be an object or a function`");
  if (typeof t != "string" && typeof t != "symbol")
    throw new j("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new j("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new j("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new j("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new j("`loose`, if provided, must be a boolean");
  var a = arguments.length > 3 ? arguments[3] : null, o = arguments.length > 4 ? arguments[4] : null, i = arguments.length > 5 ? arguments[5] : null, f = arguments.length > 6 ? arguments[6] : false, l = !!or && or(e, t);
  if (nr)
    nr(e, t, {
      configurable: i === null && l ? l.configurable : !i,
      enumerable: a === null && l ? l.enumerable : !a,
      value: n,
      writable: o === null && l ? l.writable : !o
    });
  else if (f || !a && !o && !i)
    e[t] = n;
  else
    throw new zt("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, Ce = ze(), Fr = function() {
  return !!Ce;
};
Fr.hasArrayLengthDefineBug = function() {
  if (!Ce)
    return null;
  try {
    return Ce([], "length", { value: 1 }).length !== 1;
  } catch {
    return true;
  }
};
var Vt = Fr, Ht = Z, ar = Kt, Qt = Vt(), ir = xr, lr = ie, Jt = Ht("%Math.floor%"), Zt = function(e, t) {
  if (typeof e != "function")
    throw new lr("`fn` is not a function");
  if (typeof t != "number" || t < 0 || t > 4294967295 || Jt(t) !== t)
    throw new lr("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], a = true, o = true;
  if ("length" in e && ir) {
    var i = ir(e, "length");
    i && !i.configurable && (a = false), i && !i.writable && (o = false);
  }
  return (a || o || !n) && (Qt ? ar(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    t,
    true,
    true
  ) : ar(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    t
  )), e;
};
(function(r5) {
  var e = je, t = Z, n = Zt, a = ie, o = t("%Function.prototype.apply%"), i = t("%Function.prototype.call%"), f = t("%Reflect.apply%", true) || e.call(i, o), l = ze(), s = t("%Math.max%");
  r5.exports = function(c) {
    if (typeof c != "function")
      throw new a("a function is required");
    var y = f(e, i, arguments);
    return n(
      y,
      1 + s(0, c.length - (arguments.length - 1)),
      true
    );
  };
  var u = function() {
    return f(e, o, arguments);
  };
  l ? l(r5.exports, "apply", { value: u }) : r5.exports.apply = u;
})(Ir);
var Yt = Ir.exports, Rr = Z, Dr = Yt, Xt = Dr(Rr("String.prototype.indexOf")), en = function(e, t) {
  var n = Rr(e, !!t);
  return typeof n == "function" && Xt(e, ".prototype.") > -1 ? Dr(n) : n;
};
const rn = {}, tn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rn
}, Symbol.toStringTag, { value: "Module" })), nn = /* @__PURE__ */ ot(tn);
var Ke = typeof Map == "function" && Map.prototype, _e = Object.getOwnPropertyDescriptor && Ke ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, me = Ke && _e && typeof _e.get == "function" ? _e.get : null, fr = Ke && Map.prototype.forEach, Ve = typeof Set == "function" && Set.prototype, Ie = Object.getOwnPropertyDescriptor && Ve ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, be = Ve && Ie && typeof Ie.get == "function" ? Ie.get : null, ur = Ve && Set.prototype.forEach, on = typeof WeakMap == "function" && WeakMap.prototype, ne = on ? WeakMap.prototype.has : null, an = typeof WeakSet == "function" && WeakSet.prototype, oe = an ? WeakSet.prototype.has : null, ln = typeof WeakRef == "function" && WeakRef.prototype, cr = ln ? WeakRef.prototype.deref : null, fn = Boolean.prototype.valueOf, un = Object.prototype.toString, cn = Function.prototype.toString, sn = String.prototype.match, He = String.prototype.slice, N = String.prototype.replace, pn = String.prototype.toUpperCase, sr = String.prototype.toLowerCase, Tr = RegExp.prototype.test, pr = Array.prototype.concat, P = Array.prototype.join, yn = Array.prototype.slice, yr = Math.floor, Ue = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, xe = Object.getOwnPropertySymbols, We = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Q = typeof Symbol == "function" && typeof Symbol.iterator == "object", w = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Q || true) ? Symbol.toStringTag : null, Nr = Object.prototype.propertyIsEnumerable, dr = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(r5) {
  return r5.__proto__;
} : null);
function vr(r5, e) {
  if (r5 === 1 / 0 || r5 === -1 / 0 || r5 !== r5 || r5 && r5 > -1e3 && r5 < 1e3 || Tr.call(/e/, e))
    return e;
  var t = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof r5 == "number") {
    var n = r5 < 0 ? -yr(-r5) : yr(r5);
    if (n !== r5) {
      var a = String(n), o = He.call(e, a.length + 1);
      return N.call(a, t, "$&_") + "." + N.call(N.call(o, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return N.call(e, t, "$&_");
}
var Le = nn, hr = Le.custom, gr = Br(hr) ? hr : null, dn = function r2(e, t, n, a) {
  var o = t || {};
  if (T(o, "quoteStyle") && o.quoteStyle !== "single" && o.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (T(o, "maxStringLength") && (typeof o.maxStringLength == "number" ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0 : o.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var i = T(o, "customInspect") ? o.customInspect : true;
  if (typeof i != "boolean" && i !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (T(o, "indent") && o.indent !== null && o.indent !== "	" && !(parseInt(o.indent, 10) === o.indent && o.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (T(o, "numericSeparator") && typeof o.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var f = o.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return Ur(e, o);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var l = String(e);
    return f ? vr(e, l) : l;
  }
  if (typeof e == "bigint") {
    var s = String(e) + "n";
    return f ? vr(e, s) : s;
  }
  var u = typeof o.depth > "u" ? 5 : o.depth;
  if (typeof n > "u" && (n = 0), n >= u && u > 0 && typeof e == "object")
    return Ge(e) ? "[Array]" : "[Object]";
  var p = Dn(o, n);
  if (typeof a > "u")
    a = [];
  else if (Cr(a, e) >= 0)
    return "[Circular]";
  function c(E, R, D) {
    if (R && (a = yn.call(a), a.push(R)), D) {
      var ee = {
        depth: o.depth
      };
      return T(o, "quoteStyle") && (ee.quoteStyle = o.quoteStyle), r2(E, ee, n + 1, a);
    }
    return r2(E, o, n + 1, a);
  }
  if (typeof e == "function" && !mr(e)) {
    var y = En(e), v = ce(e, c);
    return "[Function" + (y ? ": " + y : " (anonymous)") + "]" + (v.length > 0 ? " { " + P.call(v, ", ") + " }" : "");
  }
  if (Br(e)) {
    var b = Q ? N.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : We.call(e);
    return typeof e == "object" && !Q ? re(b) : b;
  }
  if (xn(e)) {
    for (var A = "<" + sr.call(String(e.nodeName)), _ = e.attributes || [], I = 0; I < _.length; I++)
      A += " " + _[I].name + "=" + Mr(vn(_[I].value), "double", o);
    return A += ">", e.childNodes && e.childNodes.length && (A += "..."), A += "</" + sr.call(String(e.nodeName)) + ">", A;
  }
  if (Ge(e)) {
    if (e.length === 0)
      return "[]";
    var h2 = ce(e, c);
    return p && !Rn(h2) ? "[" + ke(h2, p) + "]" : "[ " + P.call(h2, ", ") + " ]";
  }
  if (gn(e)) {
    var x = ce(e, c);
    return !("cause" in Error.prototype) && "cause" in e && !Nr.call(e, "cause") ? "{ [" + String(e) + "] " + P.call(pr.call("[cause]: " + c(e.cause), x), ", ") + " }" : x.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + P.call(x, ", ") + " }";
  }
  if (typeof e == "object" && i) {
    if (gr && typeof e[gr] == "function" && Le)
      return Le(e, { depth: u - n });
    if (i !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (On(e)) {
    var B = [];
    return fr && fr.call(e, function(E, R) {
      B.push(c(R, e, true) + " => " + c(E, e));
    }), br("Map", me.call(e), B, p);
  }
  if (_n(e)) {
    var X = [];
    return ur && ur.call(e, function(E) {
      X.push(c(E, e));
    }), br("Set", be.call(e), X, p);
  }
  if ($n(e))
    return Fe("WeakMap");
  if (In(e))
    return Fe("WeakSet");
  if (Pn(e))
    return Fe("WeakRef");
  if (bn(e))
    return re(c(Number(e)));
  if (wn(e))
    return re(c(Ue.call(e)));
  if (Sn(e))
    return re(fn.call(e));
  if (mn(e))
    return re(c(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (e === nt)
    return "{ [object globalThis] }";
  if (!hn(e) && !mr(e)) {
    var G = ce(e, c), fe = dr ? dr(e) === Object.prototype : e instanceof Object || e.constructor === Object, C = e instanceof Object ? "" : "null prototype", F = !fe && w && Object(e) === e && w in e ? He.call(M(e), 8, -1) : C ? "Object" : "", ue = fe || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", k = ue + (F || C ? "[" + P.call(pr.call([], F || [], C || []), ": ") + "] " : "");
    return G.length === 0 ? k + "{}" : p ? k + "{" + ke(G, p) + "}" : k + "{ " + P.call(G, ", ") + " }";
  }
  return String(e);
};
function Mr(r5, e, t) {
  var n = (t.quoteStyle || e) === "double" ? '"' : "'";
  return n + r5 + n;
}
function vn(r5) {
  return N.call(String(r5), /"/g, "&quot;");
}
function Ge(r5) {
  return M(r5) === "[object Array]" && (!w || !(typeof r5 == "object" && w in r5));
}
function hn(r5) {
  return M(r5) === "[object Date]" && (!w || !(typeof r5 == "object" && w in r5));
}
function mr(r5) {
  return M(r5) === "[object RegExp]" && (!w || !(typeof r5 == "object" && w in r5));
}
function gn(r5) {
  return M(r5) === "[object Error]" && (!w || !(typeof r5 == "object" && w in r5));
}
function mn(r5) {
  return M(r5) === "[object String]" && (!w || !(typeof r5 == "object" && w in r5));
}
function bn(r5) {
  return M(r5) === "[object Number]" && (!w || !(typeof r5 == "object" && w in r5));
}
function Sn(r5) {
  return M(r5) === "[object Boolean]" && (!w || !(typeof r5 == "object" && w in r5));
}
function Br(r5) {
  if (Q)
    return r5 && typeof r5 == "object" && r5 instanceof Symbol;
  if (typeof r5 == "symbol")
    return true;
  if (!r5 || typeof r5 != "object" || !We)
    return false;
  try {
    return We.call(r5), true;
  } catch {
  }
  return false;
}
function wn(r5) {
  if (!r5 || typeof r5 != "object" || !Ue)
    return false;
  try {
    return Ue.call(r5), true;
  } catch {
  }
  return false;
}
var An = Object.prototype.hasOwnProperty || function(r5) {
  return r5 in this;
};
function T(r5, e) {
  return An.call(r5, e);
}
function M(r5) {
  return un.call(r5);
}
function En(r5) {
  if (r5.name)
    return r5.name;
  var e = sn.call(cn.call(r5), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function Cr(r5, e) {
  if (r5.indexOf)
    return r5.indexOf(e);
  for (var t = 0, n = r5.length; t < n; t++)
    if (r5[t] === e)
      return t;
  return -1;
}
function On(r5) {
  if (!me || !r5 || typeof r5 != "object")
    return false;
  try {
    me.call(r5);
    try {
      be.call(r5);
    } catch {
      return true;
    }
    return r5 instanceof Map;
  } catch {
  }
  return false;
}
function $n(r5) {
  if (!ne || !r5 || typeof r5 != "object")
    return false;
  try {
    ne.call(r5, ne);
    try {
      oe.call(r5, oe);
    } catch {
      return true;
    }
    return r5 instanceof WeakMap;
  } catch {
  }
  return false;
}
function Pn(r5) {
  if (!cr || !r5 || typeof r5 != "object")
    return false;
  try {
    return cr.call(r5), true;
  } catch {
  }
  return false;
}
function _n(r5) {
  if (!be || !r5 || typeof r5 != "object")
    return false;
  try {
    be.call(r5);
    try {
      me.call(r5);
    } catch {
      return true;
    }
    return r5 instanceof Set;
  } catch {
  }
  return false;
}
function In(r5) {
  if (!oe || !r5 || typeof r5 != "object")
    return false;
  try {
    oe.call(r5, oe);
    try {
      ne.call(r5, ne);
    } catch {
      return true;
    }
    return r5 instanceof WeakSet;
  } catch {
  }
  return false;
}
function xn(r5) {
  return !r5 || typeof r5 != "object" ? false : typeof HTMLElement < "u" && r5 instanceof HTMLElement ? true : typeof r5.nodeName == "string" && typeof r5.getAttribute == "function";
}
function Ur(r5, e) {
  if (r5.length > e.maxStringLength) {
    var t = r5.length - e.maxStringLength, n = "... " + t + " more character" + (t > 1 ? "s" : "");
    return Ur(He.call(r5, 0, e.maxStringLength), e) + n;
  }
  var a = N.call(N.call(r5, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Fn);
  return Mr(a, "single", e);
}
function Fn(r5) {
  var e = r5.charCodeAt(0), t = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return t ? "\\" + t : "\\x" + (e < 16 ? "0" : "") + pn.call(e.toString(16));
}
function re(r5) {
  return "Object(" + r5 + ")";
}
function Fe(r5) {
  return r5 + " { ? }";
}
function br(r5, e, t, n) {
  var a = n ? ke(t, n) : P.call(t, ", ");
  return r5 + " (" + e + ") {" + a + "}";
}
function Rn(r5) {
  for (var e = 0; e < r5.length; e++)
    if (Cr(r5[e], `
`) >= 0)
      return false;
  return true;
}
function Dn(r5, e) {
  var t;
  if (r5.indent === "	")
    t = "	";
  else if (typeof r5.indent == "number" && r5.indent > 0)
    t = P.call(Array(r5.indent + 1), " ");
  else
    return null;
  return {
    base: t,
    prev: P.call(Array(e + 1), t)
  };
}
function ke(r5, e) {
  if (r5.length === 0)
    return "";
  var t = `
` + e.prev + e.base;
  return t + P.call(r5, "," + t) + `
` + e.prev;
}
function ce(r5, e) {
  var t = Ge(r5), n = [];
  if (t) {
    n.length = r5.length;
    for (var a = 0; a < r5.length; a++)
      n[a] = T(r5, a) ? e(r5[a], r5) : "";
  }
  var o = typeof xe == "function" ? xe(r5) : [], i;
  if (Q) {
    i = {};
    for (var f = 0; f < o.length; f++)
      i["$" + o[f]] = o[f];
  }
  for (var l in r5)
    T(r5, l) && (t && String(Number(l)) === l && l < r5.length || Q && i["$" + l] instanceof Symbol || (Tr.call(/[^\w$]/, l) ? n.push(e(l, r5) + ": " + e(r5[l], r5)) : n.push(l + ": " + e(r5[l], r5))));
  if (typeof xe == "function")
    for (var s = 0; s < o.length; s++)
      Nr.call(r5, o[s]) && n.push("[" + e(o[s]) + "]: " + e(r5[o[s]], r5));
  return n;
}
var Wr = Z, Y = en, Tn = dn, Nn = ie, se = Wr("%WeakMap%", true), pe = Wr("%Map%", true), Mn = Y("WeakMap.prototype.get", true), Bn = Y("WeakMap.prototype.set", true), Cn = Y("WeakMap.prototype.has", true), Un = Y("Map.prototype.get", true), Wn = Y("Map.prototype.set", true), Ln = Y("Map.prototype.has", true), Qe = function(r5, e) {
  for (var t = r5, n; (n = t.next) !== null; t = n)
    if (n.key === e)
      return t.next = n.next, n.next = /** @type {NonNullable<typeof list.next>} */
      r5.next, r5.next = n, n;
}, Gn = function(r5, e) {
  var t = Qe(r5, e);
  return t && t.value;
}, kn = function(r5, e, t) {
  var n = Qe(r5, e);
  n ? n.value = t : r5.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: e,
    next: r5.next,
    value: t
  };
}, qn = function(r5, e) {
  return !!Qe(r5, e);
}, jn = function() {
  var e, t, n, a = {
    assert: function(o) {
      if (!a.has(o))
        throw new Nn("Side channel does not contain " + Tn(o));
    },
    get: function(o) {
      if (se && o && (typeof o == "object" || typeof o == "function")) {
        if (e)
          return Mn(e, o);
      } else if (pe) {
        if (t)
          return Un(t, o);
      } else if (n)
        return Gn(n, o);
    },
    has: function(o) {
      if (se && o && (typeof o == "object" || typeof o == "function")) {
        if (e)
          return Cn(e, o);
      } else if (pe) {
        if (t)
          return Ln(t, o);
      } else if (n)
        return qn(n, o);
      return false;
    },
    set: function(o, i) {
      se && o && (typeof o == "object" || typeof o == "function") ? (e || (e = new se()), Bn(e, o, i)) : pe ? (t || (t = new pe()), Wn(t, o, i)) : (n || (n = { key: {}, next: null }), kn(n, o, i));
    }
  };
  return a;
}, zn = String.prototype.replace, Kn = /%20/g, Re = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Je = {
  default: Re.RFC3986,
  formatters: {
    RFC1738: function(r5) {
      return zn.call(r5, Kn, "+");
    },
    RFC3986: function(r5) {
      return String(r5);
    }
  },
  RFC1738: Re.RFC1738,
  RFC3986: Re.RFC3986
}, Vn = Je, De = Object.prototype.hasOwnProperty, U = Array.isArray, O = function() {
  for (var r5 = [], e = 0; e < 256; ++e)
    r5.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return r5;
}(), Hn = function(e) {
  for (; e.length > 1; ) {
    var t = e.pop(), n = t.obj[t.prop];
    if (U(n)) {
      for (var a = [], o = 0; o < n.length; ++o)
        typeof n[o] < "u" && a.push(n[o]);
      t.obj[t.prop] = a;
    }
  }
}, Lr = function(e, t) {
  for (var n = t && t.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = 0; a < e.length; ++a)
    typeof e[a] < "u" && (n[a] = e[a]);
  return n;
}, Qn = function r3(e, t, n) {
  if (!t)
    return e;
  if (typeof t != "object") {
    if (U(e))
      e.push(t);
    else if (e && typeof e == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !De.call(Object.prototype, t)) && (e[t] = true);
    else
      return [e, t];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(t);
  var a = e;
  return U(e) && !U(t) && (a = Lr(e, n)), U(e) && U(t) ? (t.forEach(function(o, i) {
    if (De.call(e, i)) {
      var f = e[i];
      f && typeof f == "object" && o && typeof o == "object" ? e[i] = r3(f, o, n) : e.push(o);
    } else
      e[i] = o;
  }), e) : Object.keys(t).reduce(function(o, i) {
    var f = t[i];
    return De.call(o, i) ? o[i] = r3(o[i], f, n) : o[i] = f, o;
  }, a);
}, Jn = function(e, t) {
  return Object.keys(t).reduce(function(n, a) {
    return n[a] = t[a], n;
  }, e);
}, Zn = function(r5, e, t) {
  var n = r5.replace(/\+/g, " ");
  if (t === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, Te = 1024, Yn = function(e, t, n, a, o) {
  if (e.length === 0)
    return e;
  var i = e;
  if (typeof e == "symbol" ? i = Symbol.prototype.toString.call(e) : typeof e != "string" && (i = String(e)), n === "iso-8859-1")
    return escape(i).replace(/%u[0-9a-f]{4}/gi, function(y) {
      return "%26%23" + parseInt(y.slice(2), 16) + "%3B";
    });
  for (var f = "", l = 0; l < i.length; l += Te) {
    for (var s = i.length >= Te ? i.slice(l, l + Te) : i, u = [], p = 0; p < s.length; ++p) {
      var c = s.charCodeAt(p);
      if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || o === Vn.RFC1738 && (c === 40 || c === 41)) {
        u[u.length] = s.charAt(p);
        continue;
      }
      if (c < 128) {
        u[u.length] = O[c];
        continue;
      }
      if (c < 2048) {
        u[u.length] = O[192 | c >> 6] + O[128 | c & 63];
        continue;
      }
      if (c < 55296 || c >= 57344) {
        u[u.length] = O[224 | c >> 12] + O[128 | c >> 6 & 63] + O[128 | c & 63];
        continue;
      }
      p += 1, c = 65536 + ((c & 1023) << 10 | s.charCodeAt(p) & 1023), u[u.length] = O[240 | c >> 18] + O[128 | c >> 12 & 63] + O[128 | c >> 6 & 63] + O[128 | c & 63];
    }
    f += u.join("");
  }
  return f;
}, Xn = function(e) {
  for (var t = [{ obj: { o: e }, prop: "o" }], n = [], a = 0; a < t.length; ++a)
    for (var o = t[a], i = o.obj[o.prop], f = Object.keys(i), l = 0; l < f.length; ++l) {
      var s = f[l], u = i[s];
      typeof u == "object" && u !== null && n.indexOf(u) === -1 && (t.push({ obj: i, prop: s }), n.push(u));
    }
  return Hn(t), e;
}, eo = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, ro = function(e) {
  return !e || typeof e != "object" ? false : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, to = function(e, t) {
  return [].concat(e, t);
}, no = function(e, t) {
  if (U(e)) {
    for (var n = [], a = 0; a < e.length; a += 1)
      n.push(t(e[a]));
    return n;
  }
  return t(e);
}, Gr = {
  arrayToObject: Lr,
  assign: Jn,
  combine: to,
  compact: Xn,
  decode: Zn,
  encode: Yn,
  isBuffer: ro,
  isRegExp: eo,
  maybeMap: no,
  merge: Qn
}, kr = jn, ve = Gr, ae = Je, oo = Object.prototype.hasOwnProperty, qr = {
  brackets: function(e) {
    return e + "[]";
  },
  comma: "comma",
  indices: function(e, t) {
    return e + "[" + t + "]";
  },
  repeat: function(e) {
    return e;
  }
}, $ = Array.isArray, ao = Array.prototype.push, jr = function(r5, e) {
  ao.apply(r5, $(e) ? e : [e]);
}, io = Date.prototype.toISOString, Sr = ae.default, m = {
  addQueryPrefix: false,
  allowDots: false,
  allowEmptyArrays: false,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: false,
  delimiter: "&",
  encode: true,
  encodeDotInKeys: false,
  encoder: ve.encode,
  encodeValuesOnly: false,
  format: Sr,
  formatter: ae.formatters[Sr],
  // deprecated
  indices: false,
  serializeDate: function(e) {
    return io.call(e);
  },
  skipNulls: false,
  strictNullHandling: false
}, lo = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, Ne = {}, fo = function r4(e, t, n, a, o, i, f, l, s, u, p, c, y, v, b, A, _, I) {
  for (var h2 = e, x = I, B = 0, X = false; (x = x.get(Ne)) !== void 0 && !X; ) {
    var G = x.get(e);
    if (B += 1, typeof G < "u") {
      if (G === B)
        throw new RangeError("Cyclic object value");
      X = true;
    }
    typeof x.get(Ne) > "u" && (B = 0);
  }
  if (typeof u == "function" ? h2 = u(t, h2) : h2 instanceof Date ? h2 = y(h2) : n === "comma" && $(h2) && (h2 = ve.maybeMap(h2, function(we) {
    return we instanceof Date ? y(we) : we;
  })), h2 === null) {
    if (i)
      return s && !A ? s(t, m.encoder, _, "key", v) : t;
    h2 = "";
  }
  if (lo(h2) || ve.isBuffer(h2)) {
    if (s) {
      var fe = A ? t : s(t, m.encoder, _, "key", v);
      return [b(fe) + "=" + b(s(h2, m.encoder, _, "value", v))];
    }
    return [b(t) + "=" + b(String(h2))];
  }
  var C = [];
  if (typeof h2 > "u")
    return C;
  var F;
  if (n === "comma" && $(h2))
    A && s && (h2 = ve.maybeMap(h2, s)), F = [{ value: h2.length > 0 ? h2.join(",") || null : void 0 }];
  else if ($(u))
    F = u;
  else {
    var ue = Object.keys(h2);
    F = p ? ue.sort(p) : ue;
  }
  var k = l ? t.replace(/\./g, "%2E") : t, E = a && $(h2) && h2.length === 1 ? k + "[]" : k;
  if (o && $(h2) && h2.length === 0)
    return E + "[]";
  for (var R = 0; R < F.length; ++R) {
    var D = F[R], ee = typeof D == "object" && typeof D.value < "u" ? D.value : h2[D];
    if (!(f && ee === null)) {
      var Se = c && l ? D.replace(/\./g, "%2E") : D, Qr = $(h2) ? typeof n == "function" ? n(E, Se) : E : E + (c ? "." + Se : "[" + Se + "]");
      I.set(e, B);
      var Ze = kr();
      Ze.set(Ne, I), jr(C, r4(
        ee,
        Qr,
        n,
        a,
        o,
        i,
        f,
        l,
        n === "comma" && A && $(h2) ? null : s,
        u,
        p,
        c,
        y,
        v,
        b,
        A,
        _,
        Ze
      ));
    }
  }
  return C;
}, uo = function(e) {
  if (!e)
    return m;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.encodeDotInKeys < "u" && typeof e.encodeDotInKeys != "boolean")
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var t = e.charset || m.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = ae.default;
  if (typeof e.format < "u") {
    if (!oo.call(ae.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var a = ae.formatters[n], o = m.filter;
  (typeof e.filter == "function" || $(e.filter)) && (o = e.filter);
  var i;
  if (e.arrayFormat in qr ? i = e.arrayFormat : "indices" in e ? i = e.indices ? "indices" : "repeat" : i = m.arrayFormat, "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var f = typeof e.allowDots > "u" ? e.encodeDotInKeys === true ? true : m.allowDots : !!e.allowDots;
  return {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : m.addQueryPrefix,
    allowDots: f,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : m.allowEmptyArrays,
    arrayFormat: i,
    charset: t,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : m.charsetSentinel,
    commaRoundTrip: e.commaRoundTrip,
    delimiter: typeof e.delimiter > "u" ? m.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : m.encode,
    encodeDotInKeys: typeof e.encodeDotInKeys == "boolean" ? e.encodeDotInKeys : m.encodeDotInKeys,
    encoder: typeof e.encoder == "function" ? e.encoder : m.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : m.encodeValuesOnly,
    filter: o,
    format: n,
    formatter: a,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : m.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : m.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : m.strictNullHandling
  };
}, co = function(r5, e) {
  var t = r5, n = uo(e), a, o;
  typeof n.filter == "function" ? (o = n.filter, t = o("", t)) : $(n.filter) && (o = n.filter, a = o);
  var i = [];
  if (typeof t != "object" || t === null)
    return "";
  var f = qr[n.arrayFormat], l = f === "comma" && n.commaRoundTrip;
  a || (a = Object.keys(t)), n.sort && a.sort(n.sort);
  for (var s = kr(), u = 0; u < a.length; ++u) {
    var p = a[u];
    n.skipNulls && t[p] === null || jr(i, fo(
      t[p],
      p,
      f,
      l,
      n.allowEmptyArrays,
      n.strictNullHandling,
      n.skipNulls,
      n.encodeDotInKeys,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset,
      s
    ));
  }
  var c = i.join(n.delimiter), y = n.addQueryPrefix === true ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? y += "utf8=%26%2310003%3B&" : y += "utf8=%E2%9C%93&"), c.length > 0 ? y + c : "";
}, J = Gr, qe = Object.prototype.hasOwnProperty, so = Array.isArray, g = {
  allowDots: false,
  allowEmptyArrays: false,
  allowPrototypes: false,
  allowSparse: false,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: false,
  comma: false,
  decodeDotInKeys: false,
  decoder: J.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: false,
  interpretNumericEntities: false,
  parameterLimit: 1e3,
  parseArrays: true,
  plainObjects: false,
  strictNullHandling: false
}, po = function(r5) {
  return r5.replace(/&#(\d+);/g, function(e, t) {
    return String.fromCharCode(parseInt(t, 10));
  });
}, zr = function(r5, e) {
  return r5 && typeof r5 == "string" && e.comma && r5.indexOf(",") > -1 ? r5.split(",") : r5;
}, yo = "utf8=%26%2310003%3B", vo = "utf8=%E2%9C%93", ho = function(e, t) {
  var n = { __proto__: null }, a = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, o = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, i = a.split(t.delimiter, o), f = -1, l, s = t.charset;
  if (t.charsetSentinel)
    for (l = 0; l < i.length; ++l)
      i[l].indexOf("utf8=") === 0 && (i[l] === vo ? s = "utf-8" : i[l] === yo && (s = "iso-8859-1"), f = l, l = i.length);
  for (l = 0; l < i.length; ++l)
    if (l !== f) {
      var u = i[l], p = u.indexOf("]="), c = p === -1 ? u.indexOf("=") : p + 1, y, v;
      c === -1 ? (y = t.decoder(u, g.decoder, s, "key"), v = t.strictNullHandling ? null : "") : (y = t.decoder(u.slice(0, c), g.decoder, s, "key"), v = J.maybeMap(
        zr(u.slice(c + 1), t),
        function(A) {
          return t.decoder(A, g.decoder, s, "value");
        }
      )), v && t.interpretNumericEntities && s === "iso-8859-1" && (v = po(v)), u.indexOf("[]=") > -1 && (v = so(v) ? [v] : v);
      var b = qe.call(n, y);
      b && t.duplicates === "combine" ? n[y] = J.combine(n[y], v) : (!b || t.duplicates === "last") && (n[y] = v);
    }
  return n;
}, go = function(r5, e, t, n) {
  for (var a = n ? e : zr(e, t), o = r5.length - 1; o >= 0; --o) {
    var i, f = r5[o];
    if (f === "[]" && t.parseArrays)
      i = t.allowEmptyArrays && a === "" ? [] : [].concat(a);
    else {
      i = t.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var l = f.charAt(0) === "[" && f.charAt(f.length - 1) === "]" ? f.slice(1, -1) : f, s = t.decodeDotInKeys ? l.replace(/%2E/g, ".") : l, u = parseInt(s, 10);
      !t.parseArrays && s === "" ? i = { 0: a } : !isNaN(u) && f !== s && String(u) === s && u >= 0 && t.parseArrays && u <= t.arrayLimit ? (i = [], i[u] = a) : s !== "__proto__" && (i[s] = a);
    }
    a = i;
  }
  return a;
}, mo = function(e, t, n, a) {
  if (e) {
    var o = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, i = /(\[[^[\]]*])/, f = /(\[[^[\]]*])/g, l = n.depth > 0 && i.exec(o), s = l ? o.slice(0, l.index) : o, u = [];
    if (s) {
      if (!n.plainObjects && qe.call(Object.prototype, s) && !n.allowPrototypes)
        return;
      u.push(s);
    }
    for (var p = 0; n.depth > 0 && (l = f.exec(o)) !== null && p < n.depth; ) {
      if (p += 1, !n.plainObjects && qe.call(Object.prototype, l[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      u.push(l[1]);
    }
    return l && u.push("[" + o.slice(l.index) + "]"), go(u, t, n, a);
  }
}, bo = function(e) {
  if (!e)
    return g;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.decodeDotInKeys < "u" && typeof e.decodeDotInKeys != "boolean")
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.decoder !== null && typeof e.decoder < "u" && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var t = typeof e.charset > "u" ? g.charset : e.charset, n = typeof e.duplicates > "u" ? g.duplicates : e.duplicates;
  if (n !== "combine" && n !== "first" && n !== "last")
    throw new TypeError("The duplicates option must be either combine, first, or last");
  var a = typeof e.allowDots > "u" ? e.decodeDotInKeys === true ? true : g.allowDots : !!e.allowDots;
  return {
    allowDots: a,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : g.allowEmptyArrays,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : g.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : g.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : g.arrayLimit,
    charset: t,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : g.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : g.comma,
    decodeDotInKeys: typeof e.decodeDotInKeys == "boolean" ? e.decodeDotInKeys : g.decodeDotInKeys,
    decoder: typeof e.decoder == "function" ? e.decoder : g.decoder,
    delimiter: typeof e.delimiter == "string" || J.isRegExp(e.delimiter) ? e.delimiter : g.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === false ? +e.depth : g.depth,
    duplicates: n,
    ignoreQueryPrefix: e.ignoreQueryPrefix === true,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : g.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : g.parameterLimit,
    parseArrays: e.parseArrays !== false,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : g.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : g.strictNullHandling
  };
}, So = function(r5, e) {
  var t = bo(e);
  if (r5 === "" || r5 === null || typeof r5 > "u")
    return t.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof r5 == "string" ? ho(r5, t) : r5, a = t.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = Object.keys(n), i = 0; i < o.length; ++i) {
    var f = o[i], l = mo(f, n[f], t, typeof r5 == "string");
    a = J.merge(a, l, t);
  }
  return t.allowSparse === true ? a : J.compact(a);
}, wo = co, Ao = So, Eo = Je, Kr = {
  formats: Eo,
  parse: Ao,
  stringify: wo
};
class Me {
  /**
   * @param {String} name - Route name.
   * @param {Object} definition - Route definition.
   * @param {Object} config - Ziggy configuration.
   */
  constructor(e, t, n) {
    this.name = e, this.definition = t, this.bindings = t.bindings ?? {}, this.wheres = t.wheres ?? {}, this.config = n;
  }
  /**
   * Get a 'template' of the complete URL for this route.
   *
   * @example
   * https://{team}.ziggy.dev/user/{user}
   *
   * @return {String} Route template.
   */
  get template() {
    const e = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
    return e === "" ? "/" : e;
  }
  /**
   * Get a template of the origin for this route.
   *
   * @example
   * https://{team}.ziggy.dev/
   *
   * @return {String} Route origin template.
   */
  get origin() {
    return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : "";
  }
  /**
   * Get an array of objects representing the parameters that this route accepts.
   *
   * @example
   * [{ name: 'team', required: true }, { name: 'user', required: false }]
   *
   * @return {Array} Parameter segments.
   */
  get parameterSegments() {
    var e;
    return ((e = this.template.match(/{[^}?]+\??}/g)) == null ? void 0 : e.map((t) => ({
      name: t.replace(/{|\??}/g, ""),
      required: !/\?}$/.test(t)
    }))) ?? [];
  }
  /**
   * Get whether this route's template matches the given URL.
   *
   * @param {String} url - URL to check.
   * @return {Object|false} - If this route matches, returns the matched parameters.
   */
  matchesUrl(e) {
    if (!this.definition.methods.includes("GET"))
      return false;
    const t = this.template.replace(/(\/?){([^}?]*)(\??)}/g, (i, f, l, s) => {
      var p;
      const u = `(?<${l}>${((p = this.wheres[l]) == null ? void 0 : p.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return s ? `(${f}${u})?` : `${f}${u}`;
    }).replace(/^\w+:\/\//, ""), [n, a] = e.replace(/^\w+:\/\//, "").split("?"), o = new RegExp(`^${t}/?$`).exec(decodeURI(n));
    if (o) {
      for (const i in o.groups)
        o.groups[i] = typeof o.groups[i] == "string" ? decodeURIComponent(o.groups[i]) : o.groups[i];
      return { params: o.groups, query: Kr.parse(a) };
    }
    return false;
  }
  /**
   * Hydrate and return a complete URL for this route with the given parameters.
   *
   * @param {Object} params
   * @return {String}
   */
  compile(e) {
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (n, a, o) => {
      if (!o && [null, void 0].includes(e[a]))
        throw new Error(
          `Ziggy error: '${a}' parameter is required for route '${this.name}'.`
        );
      if (this.wheres[a] && !new RegExp(
        `^${o ? `(${this.wheres[a]})?` : this.wheres[a]}$`
      ).test(e[a] ?? ""))
        throw new Error(
          `Ziggy error: '${a}' parameter does not match required format '${this.wheres[a]}' for route '${this.name}'.`
        );
      return encodeURI(e[a] ?? "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(`${this.origin}//`, `${this.origin}/`).replace(/\/+$/, "") : this.template;
  }
}
class Oo extends String {
  /**
   * @param {String} [name] - Route name.
   * @param {(String|Number|Array|Object)} [params] - Route parameters.
   * @param {Boolean} [absolute] - Whether to include the URL origin.
   * @param {Object} [config] - Ziggy configuration.
   */
  constructor(e, t, n = true, a) {
    if (super(), this._config = a ?? (typeof Ziggy < "u" ? Ziggy : globalThis == null ? void 0 : globalThis.Ziggy), this._config = { ...this._config, absolute: n }, e) {
      if (!this._config.routes[e])
        throw new Error(`Ziggy error: route '${e}' is not in the route list.`);
      this._route = new Me(e, this._config.routes[e], this._config), this._params = this._parse(t);
    }
  }
  /**
   * Get the compiled URL string for the current route and parameters.
   *
   * @example
   * // with 'posts.show' route 'posts/{post}'
   * (new Router('posts.show', 1)).toString(); // 'https://ziggy.dev/posts/1'
   *
   * @return {String}
   */
  toString() {
    const e = Object.keys(this._params).filter((t) => !this._route.parameterSegments.some(({ name: n }) => n === t)).filter((t) => t !== "_query").reduce((t, n) => ({ ...t, [n]: this._params[n] }), {});
    return this._route.compile(this._params) + Kr.stringify(
      { ...e, ...this._params._query },
      {
        addQueryPrefix: true,
        arrayFormat: "indices",
        encodeValuesOnly: true,
        skipNulls: true,
        encoder: (t, n) => typeof t == "boolean" ? Number(t) : n(t)
      }
    );
  }
  /**
   * Get the parameters, values, and metadata from the given URL.
   *
   * @param {String} [url] - The URL to inspect, defaults to the current window URL.
   * @return {{ name: string, params: Object, query: Object, route: Route }}
   */
  _unresolve(e) {
    e ? this._config.absolute && e.startsWith("/") && (e = this._location().host + e) : e = this._currentUrl();
    let t = {};
    const [n, a] = Object.entries(this._config.routes).find(
      ([o, i]) => t = new Me(o, i, this._config).matchesUrl(e)
    ) || [void 0, void 0];
    return { name: n, ...t, route: a };
  }
  _currentUrl() {
    const { host: e, pathname: t, search: n } = this._location();
    return (this._config.absolute ? e + t : t.replace(this._config.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + n;
  }
  /**
   * Get the name of the route matching the current window URL, or, given a route name
   * and parameters, check if the current window URL and parameters match that route.
   *
   * @example
   * // at URL https://ziggy.dev/posts/4 with 'posts.show' route 'posts/{post}'
   * route().current(); // 'posts.show'
   * route().current('posts.index'); // false
   * route().current('posts.show'); // true
   * route().current('posts.show', { post: 1 }); // false
   * route().current('posts.show', { post: 4 }); // true
   *
   * @param {String} [name] - Route name to check.
   * @param {(String|Number|Array|Object)} [params] - Route parameters.
   * @return {(Boolean|String|undefined)}
   */
  current(e, t) {
    const { name: n, params: a, query: o, route: i } = this._unresolve();
    if (!e)
      return n;
    const f = new RegExp(`^${e.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(
      n
    );
    if ([null, void 0].includes(t) || !f)
      return f;
    const l = new Me(n, i, this._config);
    t = this._parse(t, l);
    const s = { ...a, ...o };
    if (Object.values(t).every((p) => !p) && !Object.values(s).some((p) => p !== void 0))
      return true;
    const u = (p, c) => Object.entries(p).every(([y, v]) => Array.isArray(v) && Array.isArray(c[y]) ? v.every((b) => c[y].includes(b)) : typeof v == "object" && typeof c[y] == "object" && v !== null && c[y] !== null ? u(v, c[y]) : c[y] == v);
    return u(t, s);
  }
  /**
   * Get an object representing the current location (by default this will be
   * the JavaScript `window` global if it's available).
   *
   * @return {Object}
   */
  _location() {
    var a, o, i;
    const {
      host: e = "",
      pathname: t = "",
      search: n = ""
    } = typeof window < "u" ? window.location : {};
    return {
      host: ((a = this._config.location) == null ? void 0 : a.host) ?? e,
      pathname: ((o = this._config.location) == null ? void 0 : o.pathname) ?? t,
      search: ((i = this._config.location) == null ? void 0 : i.search) ?? n
    };
  }
  /**
   * Get all parameter values from the current window URL.
   *
   * @example
   * // at URL https://tighten.ziggy.dev/posts/4?lang=en with 'posts.show' route 'posts/{post}' and domain '{team}.ziggy.dev'
   * route().params; // { team: 'tighten', post: 4, lang: 'en' }
   *
   * @return {Object}
   */
  get params() {
    const { params: e, query: t } = this._unresolve();
    return { ...e, ...t };
  }
  /**
   * Check whether the given route exists.
   *
   * @param {String} name
   * @return {Boolean}
   */
  has(e) {
    return Object.keys(this._config.routes).includes(e);
  }
  /**
   * Parse Laravel-style route parameters of any type into a normalized object.
   *
   * @example
   * // with route parameter names 'event' and 'venue'
   * _parse(1); // { event: 1 }
   * _parse({ event: 2, venue: 3 }); // { event: 2, venue: 3 }
   * _parse(['Taylor', 'Matt']); // { event: 'Taylor', venue: 'Matt' }
   * _parse([4, { uuid: 56789, name: 'Grand Canyon' }]); // { event: 4, venue: 56789 }
   *
   * @param {(String|Number|Array|Object)} params - Route parameters.
   * @param {Route} route - Route instance.
   * @return {Object} Normalized complete route parameters.
   */
  _parse(e = {}, t = this._route) {
    e ?? (e = {}), e = ["string", "number"].includes(typeof e) ? [e] : e;
    const n = t.parameterSegments.filter(({ name: a }) => !this._config.defaults[a]);
    return Array.isArray(e) ? e = e.reduce(
      (a, o, i) => n[i] ? { ...a, [n[i].name]: o } : typeof o == "object" ? { ...a, ...o } : { ...a, [o]: "" },
      {}
    ) : n.length === 1 && !e[n[0].name] && (e.hasOwnProperty(Object.values(t.bindings)[0]) || e.hasOwnProperty("id")) && (e = { [n[0].name]: e }), {
      ...this._defaults(t),
      ...this._substituteBindings(e, t)
    };
  }
  /**
   * Populate default parameters for the given route.
   *
   * @example
   * // with default parameters { locale: 'en', country: 'US' } and 'posts.show' route '{locale}/posts/{post}'
   * defaults(...); // { locale: 'en' }
   *
   * @param {Route} route
   * @return {Object} Default route parameters.
   */
  _defaults(e) {
    return e.parameterSegments.filter(({ name: t }) => this._config.defaults[t]).reduce(
      (t, { name: n }, a) => ({ ...t, [n]: this._config.defaults[n] }),
      {}
    );
  }
  /**
   * Substitute Laravel route model bindings in the given parameters.
   *
   * @example
   * _substituteBindings({ post: { id: 4, slug: 'hello-world', title: 'Hello, world!' } }, { bindings: { post: 'slug' } }); // { post: 'hello-world' }
   *
   * @param {Object} params - Route parameters.
   * @param {Object} route - Route definition.
   * @return {Object} Normalized route parameters.
   */
  _substituteBindings(e, { bindings: t, parameterSegments: n }) {
    return Object.entries(e).reduce((a, [o, i]) => {
      if (!i || typeof i != "object" || Array.isArray(i) || !n.some(({ name: f }) => f === o))
        return { ...a, [o]: i };
      if (!i.hasOwnProperty(t[o]))
        if (i.hasOwnProperty("id"))
          t[o] = "id";
        else
          throw new Error(
            `Ziggy error: object passed as '${o}' parameter is missing route model binding key '${t[o]}'.`
          );
      return { ...a, [o]: i[t[o]] };
    }, {});
  }
  valueOf() {
    return this.toString();
  }
}
function $o(r5, e, t, n) {
  const a = new Oo(r5, e, t, n);
  return r5 ? a.toString() : a;
}
const z = reactive({});
function qo(r5) {
  return r5.initialPage.props.ziggy && (Object.keys(r5.initialPage.props.ziggy).forEach((e) => {
    z[e] = r5.initialPage.props.ziggy[e];
  }), z.location = new URL(z.location)), {
    install: (e, t = {}) => {
      const n = t.global ?? true, a = (o, i, f, l = z) => (z.location && typeof window < "u" && (z.location = null), $o(o, i, f, l));
      e.provide($r, a), n && (e.config.globalProperties.$route = a);
    }
  };
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
ref(null);
const _sfc_main$2 = {
  __name: "Home",
  __ssrInlineRender: true,
  props: [
    "myPageName",
    "something",
    "trying_number"
  ],
  setup(__props) {
    const props = __props;
    tt();
    console.log(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-12" }, _attrs))}> Home.vue <div> Page props: <pre>${ssrInterpolate(props)}</pre></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Home.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  __name: "Test",
  __ssrInlineRender: true,
  props: { testProps: Object },
  setup(__props) {
    const props = __props;
    tt();
    console.log(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-12" }, _attrs))}> Test.vue <div> Page props: <pre>${ssrInterpolate(props)}</pre></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Test.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const route = tt();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex flex-col gap-12" }, _attrs))}><header class="py-6 bg-gray-50/5"><div class="container mx-auto flex justify-between items-center gap-4"><div class="text-2xl font-semibold uppercase -tracking-widest"> Boilerplate </div><nav class="flex gap-12">`);
      _push(ssrRenderComponent(unref(Link), {
        href: unref(route)("home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: unref(route)("test")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Test `);
          } else {
            return [
              createTextVNode(" Test ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div></header><main class="grow container mx-auto">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><div class="text-center text-xs py-6"> Footer </div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./pages/Home.vue": __vite_glob_0_0, "./pages/Test.vue": __vite_glob_0_1 });
      let page2 = pages[`./pages/${name}.vue`];
      page2.default.layout = page2.default.layout || _sfc_main;
      return page2;
    },
    setup({ App, props, plugin }) {
      const routes = qo(props);
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin).use(routes);
    }
  })
);
