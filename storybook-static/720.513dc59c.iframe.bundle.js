/*! For license information please see 720.513dc59c.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunkreact_big_calendar =
  self.webpackChunkreact_big_calendar || []).push([
  [720],
  {
    './node_modules/@storybook/components/dist/esm/OverlayScrollbars-1355f44c.js':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            OverlayScrollbarsComponent: function () {
              return OverlayScrollbarsComponent
            },
            default: function () {
              return OverlayScrollbarsComponent
            },
          })
        __webpack_require__('./node_modules/core-js/modules/es.array.slice.js'),
          __webpack_require__(
            './node_modules/core-js/modules/es.regexp.exec.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.replace.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.split.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.concat.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.object.to-string.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.regexp.to-string.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.match.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.join.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.splice.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.filter.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.find.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.regexp.constructor.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.number.to-fixed.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.function.name.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.object.assign.js'
          ),
          __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.description.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/web.dom-collections.iterator.js'
          )
        var _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_25__ =
            __webpack_require__(
              './node_modules/@storybook/components/dist/esm/index-681e4b07.js'
            ),
          react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
            './node_modules/react/index.js'
          )
        __webpack_require__('./node_modules/memoizerific/memoizerific.js'),
          __webpack_require__('./node_modules/@storybook/csf/dist/index.js')
        function _typeof(obj) {
          return (
            (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj
                  }
                : function (obj) {
                    return obj &&
                      'function' == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? 'symbol'
                      : typeof obj
                  }),
            _typeof(obj)
          )
        }
        var module,
          global,
          OverlayScrollbars$1 = { exports: {} }
        ;(module = OverlayScrollbars$1),
          (global =
            'undefined' != typeof window
              ? window
              : _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_25__.c),
          (module.exports = (function (window, document, undefined$1) {
            var _targets,
              _instancePropertyString,
              _easingsMath,
              PLUGINNAME = 'OverlayScrollbars',
              TYPES = {
                o: 'object',
                f: 'function',
                a: 'array',
                s: 'string',
                b: 'boolean',
                n: 'number',
                u: 'undefined',
                z: 'null',
              },
              LEXICON = {
                c: 'class',
                s: 'style',
                i: 'id',
                l: 'length',
                p: 'prototype',
                ti: 'tabindex',
                oH: 'offsetHeight',
                cH: 'clientHeight',
                sH: 'scrollHeight',
                oW: 'offsetWidth',
                cW: 'clientWidth',
                sW: 'scrollWidth',
                hOP: 'hasOwnProperty',
                bCR: 'getBoundingClientRect',
              },
              VENDORS = (function () {
                var jsCache = {},
                  cssCache = {},
                  cssPrefixes = ['-webkit-', '-moz-', '-o-', '-ms-'],
                  jsPrefixes = ['WebKit', 'Moz', 'O', 'MS']
                function firstLetterToUpper(str) {
                  return str.charAt(0).toUpperCase() + str.slice(1)
                }
                return {
                  _cssPrefixes: cssPrefixes,
                  _jsPrefixes: jsPrefixes,
                  _cssProperty: function _cssProperty(name) {
                    var result = cssCache[name]
                    if (cssCache[LEXICON.hOP](name)) return result
                    for (
                      var resultPossibilities,
                        v,
                        currVendorWithoutDashes,
                        uppercasedName = firstLetterToUpper(name),
                        elmStyle = document.createElement('div')[LEXICON.s],
                        i = 0;
                      i < cssPrefixes.length;
                      i++
                    )
                      for (
                        currVendorWithoutDashes = cssPrefixes[i].replace(
                          /-/g,
                          ''
                        ),
                          resultPossibilities = [
                            name,
                            cssPrefixes[i] + name,
                            currVendorWithoutDashes + uppercasedName,
                            firstLetterToUpper(currVendorWithoutDashes) +
                              uppercasedName,
                          ],
                          v = 0;
                        v < resultPossibilities[LEXICON.l];
                        v++
                      )
                        if (elmStyle[resultPossibilities[v]] !== undefined$1) {
                          result = resultPossibilities[v]
                          break
                        }
                    return (cssCache[name] = result), result
                  },
                  _cssPropertyValue: function _cssPropertyValue(
                    property,
                    values,
                    suffix
                  ) {
                    var name = property + ' ' + values,
                      result = cssCache[name]
                    if (cssCache[LEXICON.hOP](name)) return result
                    for (
                      var prop,
                        dummyStyle = document.createElement('div')[LEXICON.s],
                        possbleValues = values.split(' '),
                        preparedSuffix = suffix || '',
                        i = 0,
                        v = -1;
                      i < possbleValues[LEXICON.l];
                      i++
                    )
                      for (; v < VENDORS._cssPrefixes[LEXICON.l]; v++)
                        if (
                          ((prop =
                            v < 0
                              ? possbleValues[i]
                              : VENDORS._cssPrefixes[v] + possbleValues[i]),
                          (dummyStyle.cssText =
                            property + ':' + prop + preparedSuffix),
                          dummyStyle[LEXICON.l])
                        ) {
                          result = prop
                          break
                        }
                    return (cssCache[name] = result), result
                  },
                  _jsAPI: function _jsAPI(name, isInterface, fallback) {
                    var i = 0,
                      result = jsCache[name]
                    if (!jsCache[LEXICON.hOP](name)) {
                      for (
                        result = window[name];
                        i < jsPrefixes[LEXICON.l];
                        i++
                      )
                        result =
                          result ||
                          window[
                            (isInterface
                              ? jsPrefixes[i]
                              : jsPrefixes[i].toLowerCase()) +
                              firstLetterToUpper(name)
                          ]
                      jsCache[name] = result
                    }
                    return result || fallback
                  },
                }
              })(),
              COMPATIBILITY = (function () {
                function windowSize(x) {
                  return x
                    ? window.innerWidth ||
                        document.documentElement[LEXICON.cW] ||
                        document.body[LEXICON.cW]
                    : window.innerHeight ||
                        document.documentElement[LEXICON.cH] ||
                        document.body[LEXICON.cH]
                }
                function bind(func, thisObj) {
                  if (_typeof(func) != TYPES.f) throw "Can't bind function!"
                  var proto = LEXICON.p,
                    aArgs = Array[proto].slice.call(arguments, 2),
                    fNOP = function fNOP() {},
                    fBound = function fBound() {
                      return func.apply(
                        this instanceof fNOP ? this : thisObj,
                        aArgs.concat(Array[proto].slice.call(arguments))
                      )
                    }
                  return (
                    func[proto] && (fNOP[proto] = func[proto]),
                    (fBound[proto] = new fNOP()),
                    fBound
                  )
                }
                return {
                  wW: bind(windowSize, 0, !0),
                  wH: bind(windowSize, 0),
                  mO: bind(VENDORS._jsAPI, 0, 'MutationObserver', !0),
                  rO: bind(VENDORS._jsAPI, 0, 'ResizeObserver', !0),
                  rAF: bind(
                    VENDORS._jsAPI,
                    0,
                    'requestAnimationFrame',
                    !1,
                    function (func) {
                      return window.setTimeout(func, 1e3 / 60)
                    }
                  ),
                  cAF: bind(
                    VENDORS._jsAPI,
                    0,
                    'cancelAnimationFrame',
                    !1,
                    function (id) {
                      return window.clearTimeout(id)
                    }
                  ),
                  now: function now() {
                    return (Date.now && Date.now()) || new Date().getTime()
                  },
                  stpP: function stpP(event) {
                    event.stopPropagation
                      ? event.stopPropagation()
                      : (event.cancelBubble = !0)
                  },
                  prvD: function prvD(event) {
                    event.preventDefault && event.cancelable
                      ? event.preventDefault()
                      : (event.returnValue = !1)
                  },
                  page: function page(event) {
                    var strPage = 'page',
                      strClient = 'client',
                      strX = 'X',
                      strY = 'Y',
                      eventDoc =
                        (
                          (event = event.originalEvent || event).target ||
                          event.srcElement ||
                          document
                        ).ownerDocument || document,
                      doc = eventDoc.documentElement,
                      body = eventDoc.body
                    if (event.touches !== undefined$1) {
                      var touch = event.touches[0]
                      return {
                        x: touch[strPage + strX],
                        y: touch[strPage + strY],
                      }
                    }
                    return !event[strPage + strX] &&
                      event[strClient + strX] &&
                      null != event[strClient + strX]
                      ? {
                          x:
                            event[strClient + strX] +
                            ((doc && doc.scrollLeft) ||
                              (body && body.scrollLeft) ||
                              0) -
                            ((doc && doc.clientLeft) ||
                              (body && body.clientLeft) ||
                              0),
                          y:
                            event[strClient + strY] +
                            ((doc && doc.scrollTop) ||
                              (body && body.scrollTop) ||
                              0) -
                            ((doc && doc.clientTop) ||
                              (body && body.clientTop) ||
                              0),
                        }
                      : { x: event[strPage + strX], y: event[strPage + strY] }
                  },
                  mBtn: function mBtn(event) {
                    var button = event.button
                    return event.which || button === undefined$1
                      ? event.which
                      : 1 & button
                      ? 1
                      : 2 & button
                      ? 3
                      : 4 & button
                      ? 2
                      : 0
                  },
                  inA: function inA(item, arr) {
                    for (var i = 0; i < arr[LEXICON.l]; i++)
                      try {
                        if (arr[i] === item) return i
                      } catch (e) {}
                    return -1
                  },
                  isA: function isA(arr) {
                    var def = Array.isArray
                    return def ? def(arr) : this.type(arr) == TYPES.a
                  },
                  type: function type(obj) {
                    return obj === undefined$1 || null === obj
                      ? obj + ''
                      : Object[LEXICON.p].toString
                          .call(obj)
                          .replace(/^\[object (.+)\]$/, '$1')
                          .toLowerCase()
                  },
                  bind: bind,
                }
              })(),
              MATH = Math,
              JQUERY = window.jQuery,
              EASING =
                ((_easingsMath = {
                  p: MATH.PI,
                  c: MATH.cos,
                  s: MATH.sin,
                  w: MATH.pow,
                  t: MATH.sqrt,
                  n: MATH.asin,
                  a: MATH.abs,
                  o: 1.70158,
                }),
                {
                  swing: function swing(x, t, b, c, d) {
                    return 0.5 - _easingsMath.c(x * _easingsMath.p) / 2
                  },
                  linear: function linear(x, t, b, c, d) {
                    return x
                  },
                  easeInQuad: function easeInQuad(x, t, b, c, d) {
                    return c * (t /= d) * t + b
                  },
                  easeOutQuad: function easeOutQuad(x, t, b, c, d) {
                    return -c * (t /= d) * (t - 2) + b
                  },
                  easeInOutQuad: function easeInOutQuad(x, t, b, c, d) {
                    return (t /= d / 2) < 1
                      ? (c / 2) * t * t + b
                      : (-c / 2) * (--t * (t - 2) - 1) + b
                  },
                  easeInCubic: function easeInCubic(x, t, b, c, d) {
                    return c * (t /= d) * t * t + b
                  },
                  easeOutCubic: function easeOutCubic(x, t, b, c, d) {
                    return c * ((t = t / d - 1) * t * t + 1) + b
                  },
                  easeInOutCubic: function easeInOutCubic(x, t, b, c, d) {
                    return (t /= d / 2) < 1
                      ? (c / 2) * t * t * t + b
                      : (c / 2) * ((t -= 2) * t * t + 2) + b
                  },
                  easeInQuart: function easeInQuart(x, t, b, c, d) {
                    return c * (t /= d) * t * t * t + b
                  },
                  easeOutQuart: function easeOutQuart(x, t, b, c, d) {
                    return -c * ((t = t / d - 1) * t * t * t - 1) + b
                  },
                  easeInOutQuart: function easeInOutQuart(x, t, b, c, d) {
                    return (t /= d / 2) < 1
                      ? (c / 2) * t * t * t * t + b
                      : (-c / 2) * ((t -= 2) * t * t * t - 2) + b
                  },
                  easeInQuint: function easeInQuint(x, t, b, c, d) {
                    return c * (t /= d) * t * t * t * t + b
                  },
                  easeOutQuint: function easeOutQuint(x, t, b, c, d) {
                    return c * ((t = t / d - 1) * t * t * t * t + 1) + b
                  },
                  easeInOutQuint: function easeInOutQuint(x, t, b, c, d) {
                    return (t /= d / 2) < 1
                      ? (c / 2) * t * t * t * t * t + b
                      : (c / 2) * ((t -= 2) * t * t * t * t + 2) + b
                  },
                  easeInSine: function easeInSine(x, t, b, c, d) {
                    return (
                      -c * _easingsMath.c((t / d) * (_easingsMath.p / 2)) +
                      c +
                      b
                    )
                  },
                  easeOutSine: function easeOutSine(x, t, b, c, d) {
                    return (
                      c * _easingsMath.s((t / d) * (_easingsMath.p / 2)) + b
                    )
                  },
                  easeInOutSine: function easeInOutSine(x, t, b, c, d) {
                    return (
                      (-c / 2) *
                        (_easingsMath.c((_easingsMath.p * t) / d) - 1) +
                      b
                    )
                  },
                  easeInExpo: function easeInExpo(x, t, b, c, d) {
                    return 0 == t
                      ? b
                      : c * _easingsMath.w(2, 10 * (t / d - 1)) + b
                  },
                  easeOutExpo: function easeOutExpo(x, t, b, c, d) {
                    return t == d
                      ? b + c
                      : c * (1 - _easingsMath.w(2, (-10 * t) / d)) + b
                  },
                  easeInOutExpo: function easeInOutExpo(x, t, b, c, d) {
                    return 0 == t
                      ? b
                      : t == d
                      ? b + c
                      : (t /= d / 2) < 1
                      ? (c / 2) * _easingsMath.w(2, 10 * (t - 1)) + b
                      : (c / 2) * (2 - _easingsMath.w(2, -10 * --t)) + b
                  },
                  easeInCirc: function easeInCirc(x, t, b, c, d) {
                    return -c * (_easingsMath.t(1 - (t /= d) * t) - 1) + b
                  },
                  easeOutCirc: function easeOutCirc(x, t, b, c, d) {
                    return c * _easingsMath.t(1 - (t = t / d - 1) * t) + b
                  },
                  easeInOutCirc: function easeInOutCirc(x, t, b, c, d) {
                    return (t /= d / 2) < 1
                      ? (-c / 2) * (_easingsMath.t(1 - t * t) - 1) + b
                      : (c / 2) * (_easingsMath.t(1 - (t -= 2) * t) + 1) + b
                  },
                  easeInElastic: function easeInElastic(x, t, b, c, d) {
                    var s = _easingsMath.o,
                      p = 0,
                      a = c
                    return 0 == t
                      ? b
                      : 1 == (t /= d)
                      ? b + c
                      : (p || (p = 0.3 * d),
                        a < _easingsMath.a(c)
                          ? ((a = c), (s = p / 4))
                          : (s =
                              (p / (2 * _easingsMath.p)) *
                              _easingsMath.n(c / a)),
                        -a *
                          _easingsMath.w(2, 10 * (t -= 1)) *
                          _easingsMath.s(
                            ((t * d - s) * (2 * _easingsMath.p)) / p
                          ) +
                          b)
                  },
                  easeOutElastic: function easeOutElastic(x, t, b, c, d) {
                    var s = _easingsMath.o,
                      p = 0,
                      a = c
                    return 0 == t
                      ? b
                      : 1 == (t /= d)
                      ? b + c
                      : (p || (p = 0.3 * d),
                        a < _easingsMath.a(c)
                          ? ((a = c), (s = p / 4))
                          : (s =
                              (p / (2 * _easingsMath.p)) *
                              _easingsMath.n(c / a)),
                        a *
                          _easingsMath.w(2, -10 * t) *
                          _easingsMath.s(
                            ((t * d - s) * (2 * _easingsMath.p)) / p
                          ) +
                          c +
                          b)
                  },
                  easeInOutElastic: function easeInOutElastic(x, t, b, c, d) {
                    var s = _easingsMath.o,
                      p = 0,
                      a = c
                    return 0 == t
                      ? b
                      : 2 == (t /= d / 2)
                      ? b + c
                      : (p || (p = d * (0.3 * 1.5)),
                        a < _easingsMath.a(c)
                          ? ((a = c), (s = p / 4))
                          : (s =
                              (p / (2 * _easingsMath.p)) *
                              _easingsMath.n(c / a)),
                        t < 1
                          ? a *
                              _easingsMath.w(2, 10 * (t -= 1)) *
                              _easingsMath.s(
                                ((t * d - s) * (2 * _easingsMath.p)) / p
                              ) *
                              -0.5 +
                            b
                          : a *
                              _easingsMath.w(2, -10 * (t -= 1)) *
                              _easingsMath.s(
                                ((t * d - s) * (2 * _easingsMath.p)) / p
                              ) *
                              0.5 +
                            c +
                            b)
                  },
                  easeInBack: function easeInBack(x, t, b, c, d, s) {
                    return (
                      c *
                        (t /= d) *
                        t *
                        (((s = s || _easingsMath.o) + 1) * t - s) +
                      b
                    )
                  },
                  easeOutBack: function easeOutBack(x, t, b, c, d, s) {
                    return (
                      c *
                        ((t = t / d - 1) *
                          t *
                          (((s = s || _easingsMath.o) + 1) * t + s) +
                          1) +
                      b
                    )
                  },
                  easeInOutBack: function easeInOutBack(x, t, b, c, d, s) {
                    return (
                      (s = s || _easingsMath.o),
                      (t /= d / 2) < 1
                        ? (c / 2) * (t * t * ((1 + (s *= 1.525)) * t - s)) + b
                        : (c / 2) *
                            ((t -= 2) * t * ((1 + (s *= 1.525)) * t + s) + 2) +
                          b
                    )
                  },
                  easeInBounce: function easeInBounce(x, t, b, c, d) {
                    return c - this.easeOutBounce(x, d - t, 0, c, d) + b
                  },
                  easeOutBounce: function easeOutBounce(x, t, b, c, d) {
                    var o = 7.5625
                    return (t /= d) < 1 / 2.75
                      ? c * (o * t * t) + b
                      : t < 2 / 2.75
                      ? c * (o * (t -= 1.5 / 2.75) * t + 0.75) + b
                      : t < 2.5 / 2.75
                      ? c * (o * (t -= 2.25 / 2.75) * t + 0.9375) + b
                      : c * (o * (t -= 2.625 / 2.75) * t + 0.984375) + b
                  },
                  easeInOutBounce: function easeInOutBounce(x, t, b, c, d) {
                    return t < d / 2
                      ? 0.5 * this.easeInBounce(x, 2 * t, 0, c, d) + b
                      : 0.5 * this.easeOutBounce(x, 2 * t - d, 0, c, d) +
                          0.5 * c +
                          b
                  },
                }),
              FRAMEWORK = (function () {
                var _rnothtmlwhite = /[^\x20\t\r\n\f]+/g,
                  _strSpace = ' ',
                  _strEmpty = '',
                  _strScrollLeft = 'scrollLeft',
                  _strScrollTop = 'scrollTop',
                  _animations = [],
                  _type = COMPATIBILITY.type,
                  _cssNumber = {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                  }
                function extend() {
                  var src,
                    copyIsArray,
                    copy,
                    name,
                    options,
                    clone,
                    target = arguments[0] || {},
                    i = 1,
                    length = arguments[LEXICON.l],
                    deep = !1
                  for (
                    _type(target) == TYPES.b &&
                      ((deep = target), (target = arguments[1] || {}), (i = 2)),
                      _type(target) != TYPES.o &&
                        !_type(target) == TYPES.f &&
                        (target = {}),
                      length === i && ((target = FakejQuery), --i);
                    i < length;
                    i++
                  )
                    if (null != (options = arguments[i]))
                      for (name in options)
                        (src = target[name]),
                          target !== (copy = options[name]) &&
                            (deep &&
                            copy &&
                            (isPlainObject(copy) ||
                              (copyIsArray = COMPATIBILITY.isA(copy)))
                              ? (copyIsArray
                                  ? ((copyIsArray = !1),
                                    (clone =
                                      src && COMPATIBILITY.isA(src) ? src : []))
                                  : (clone =
                                      src && isPlainObject(src) ? src : {}),
                                (target[name] = extend(deep, clone, copy)))
                              : copy !== undefined$1 && (target[name] = copy))
                  return target
                }
                function inArray(item, arr, fromIndex) {
                  for (var i = fromIndex || 0; i < arr[LEXICON.l]; i++)
                    if (arr[i] === item) return i
                  return -1
                }
                function isFunction(obj) {
                  return _type(obj) == TYPES.f
                }
                function isEmptyObject(obj) {
                  for (var name in obj) return !1
                  return !0
                }
                function isPlainObject(obj) {
                  if (!obj || _type(obj) != TYPES.o) return !1
                  var key,
                    proto = LEXICON.p,
                    hasOwnProperty = Object[proto].hasOwnProperty,
                    hasOwnConstructor = hasOwnProperty.call(obj, 'constructor'),
                    hasIsPrototypeOf =
                      obj.constructor &&
                      obj.constructor[proto] &&
                      hasOwnProperty.call(
                        obj.constructor[proto],
                        'isPrototypeOf'
                      )
                  if (
                    obj.constructor &&
                    !hasOwnConstructor &&
                    !hasIsPrototypeOf
                  )
                    return !1
                  for (key in obj);
                  return _type(key) == TYPES.u || hasOwnProperty.call(obj, key)
                }
                function _each(obj, callback) {
                  var i = 0
                  if (isArrayLike(obj))
                    for (
                      ;
                      i < obj[LEXICON.l] &&
                      !1 !== callback.call(obj[i], i, obj[i]);
                      i++
                    );
                  else
                    for (i in obj)
                      if (!1 === callback.call(obj[i], i, obj[i])) break
                  return obj
                }
                function isArrayLike(obj) {
                  var length = !!obj && [LEXICON.l] in obj && obj[LEXICON.l],
                    t = _type(obj)
                  return (
                    !isFunction(t) &&
                    (t == TYPES.a ||
                      0 === length ||
                      (_type(length) == TYPES.n &&
                        length > 0 &&
                        length - 1 in obj))
                  )
                }
                function stripAndCollapse(value) {
                  return (value.match(_rnothtmlwhite) || []).join(_strSpace)
                }
                function matches(elem, selector) {
                  for (
                    var nodeList =
                        (elem.parentNode || document).querySelectorAll(
                          selector
                        ) || [],
                      i = nodeList[LEXICON.l];
                    i--;

                  )
                    if (nodeList[i] == elem) return !0
                  return !1
                }
                function insertAdjacentElement(el, strategy, child) {
                  if (COMPATIBILITY.isA(child))
                    for (var i = 0; i < child[LEXICON.l]; i++)
                      insertAdjacentElement(el, strategy, child[i])
                  else
                    _type(child) == TYPES.s
                      ? el.insertAdjacentHTML(strategy, child)
                      : el.insertAdjacentElement(
                          strategy,
                          child.nodeType ? child : child[0]
                        )
                }
                function setCSSVal(el, prop, val) {
                  try {
                    el[LEXICON.s][prop] !== undefined$1 &&
                      (el[LEXICON.s][prop] = parseCSSVal(prop, val))
                  } catch (e) {}
                }
                function parseCSSVal(prop, val) {
                  return (
                    _cssNumber[prop.toLowerCase()] ||
                      _type(val) != TYPES.n ||
                      (val += 'px'),
                    val
                  )
                }
                function startNextAnimationInQ(animObj, removeFromQ) {
                  var index, nextAnim
                  !1 !== removeFromQ && animObj.q.splice(0, 1),
                    animObj.q[LEXICON.l] > 0
                      ? ((nextAnim = animObj.q[0]),
                        _animate(
                          animObj.el,
                          nextAnim.props,
                          nextAnim.duration,
                          nextAnim.easing,
                          nextAnim.complete,
                          !0
                        ))
                      : (index = inArray(animObj, _animations)) > -1 &&
                        _animations.splice(index, 1)
                }
                function setAnimationValue(el, prop, value) {
                  prop === _strScrollLeft || prop === _strScrollTop
                    ? (el[prop] = value)
                    : setCSSVal(el, prop, value)
                }
                function _animate(
                  el,
                  props,
                  options,
                  easing,
                  complete,
                  guaranteedNext
                ) {
                  var key,
                    animObj,
                    progress,
                    step,
                    specialEasing,
                    duration,
                    hasOptions = isPlainObject(options),
                    from = {},
                    to = {},
                    i = 0
                  for (
                    hasOptions
                      ? ((easing = options.easing),
                        (progress = options.progress),
                        (step = options.step),
                        (specialEasing = options.specialEasing),
                        (complete = options.complete),
                        (duration = options.duration))
                      : (duration = options),
                      specialEasing = specialEasing || {},
                      duration = duration || 400,
                      easing = easing || 'swing',
                      guaranteedNext = guaranteedNext || !1;
                    i < _animations[LEXICON.l];
                    i++
                  )
                    if (_animations[i].el === el) {
                      animObj = _animations[i]
                      break
                    }
                  for (key in (animObj ||
                    ((animObj = { el: el, q: [] }), _animations.push(animObj)),
                  props))
                    from[key] =
                      key === _strScrollLeft || key === _strScrollTop
                        ? el[key]
                        : FakejQuery(el).css(key)
                  for (key in from)
                    from[key] !== props[key] &&
                      props[key] !== undefined$1 &&
                      (to[key] = props[key])
                  if (isEmptyObject(to))
                    guaranteedNext && startNextAnimationInQ(animObj)
                  else {
                    var timeNow,
                      end,
                      percent,
                      fromVal,
                      toVal,
                      easedVal,
                      timeStart,
                      _frame,
                      elapsed,
                      qPos = guaranteedNext ? 0 : inArray(qObj, animObj.q),
                      qObj = {
                        props: to,
                        duration: hasOptions ? options : duration,
                        easing: easing,
                        complete: complete,
                      }
                    if (
                      (-1 === qPos &&
                        ((qPos = animObj.q[LEXICON.l]), animObj.q.push(qObj)),
                      0 === qPos)
                    )
                      if (duration > 0)
                        (timeStart = COMPATIBILITY.now()),
                          (_frame = function frame() {
                            for (key in ((timeNow = COMPATIBILITY.now()),
                            (elapsed = timeNow - timeStart),
                            (end = qObj.stop || elapsed >= duration),
                            (percent =
                              1 -
                              (MATH.max(0, timeStart + duration - timeNow) /
                                duration || 0)),
                            to))
                              (fromVal = parseFloat(from[key])),
                                (toVal = parseFloat(to[key])),
                                (easedVal =
                                  (toVal - fromVal) *
                                    EASING[specialEasing[key] || easing](
                                      percent,
                                      percent * duration,
                                      0,
                                      1,
                                      duration
                                    ) +
                                  fromVal),
                                setAnimationValue(el, key, easedVal),
                                isFunction(step) &&
                                  step(easedVal, {
                                    elem: el,
                                    prop: key,
                                    start: fromVal,
                                    now: easedVal,
                                    end: toVal,
                                    pos: percent,
                                    options: {
                                      easing: easing,
                                      speacialEasing: specialEasing,
                                      duration: duration,
                                      complete: complete,
                                      step: step,
                                    },
                                    startTime: timeStart,
                                  })
                            isFunction(progress) &&
                              progress(
                                {},
                                percent,
                                MATH.max(0, duration - elapsed)
                              ),
                              end
                                ? (startNextAnimationInQ(animObj),
                                  isFunction(complete) && complete())
                                : (qObj.frame = COMPATIBILITY.rAF()(_frame))
                          }),
                          (qObj.frame = COMPATIBILITY.rAF()(_frame))
                      else {
                        for (key in to) setAnimationValue(el, key, to[key])
                        startNextAnimationInQ(animObj)
                      }
                  }
                }
                function _stop(el, clearQ, jumpToEnd) {
                  for (
                    var animObj, qObj, key, i = 0;
                    i < _animations[LEXICON.l];
                    i++
                  )
                    if ((animObj = _animations[i]).el === el) {
                      if (animObj.q[LEXICON.l] > 0) {
                        if (
                          (((qObj = animObj.q[0]).stop = !0),
                          COMPATIBILITY.cAF()(qObj.frame),
                          animObj.q.splice(0, 1),
                          jumpToEnd)
                        )
                          for (key in qObj.props)
                            setAnimationValue(el, key, qObj.props[key])
                        clearQ
                          ? (animObj.q = [])
                          : startNextAnimationInQ(animObj, !1)
                      }
                      break
                    }
                }
                function elementIsVisible(el) {
                  return !!(
                    el[LEXICON.oW] ||
                    el[LEXICON.oH] ||
                    el.getClientRects()[LEXICON.l]
                  )
                }
                function FakejQuery(selector) {
                  if (0 === arguments[LEXICON.l]) return this
                  var elms,
                    el,
                    base = new FakejQuery(),
                    elements = selector,
                    i = 0
                  if (_type(selector) == TYPES.s)
                    for (
                      elements = [],
                        '<' === selector.charAt(0)
                          ? (((el = document.createElement('div')).innerHTML =
                              selector),
                            (elms = el.children))
                          : (elms = document.querySelectorAll(selector));
                      i < elms[LEXICON.l];
                      i++
                    )
                      elements.push(elms[i])
                  if (elements) {
                    for (
                      _type(elements) == TYPES.s ||
                        (isArrayLike(elements) &&
                          elements !== window &&
                          elements !== elements.self) ||
                        (elements = [elements]),
                        i = 0;
                      i < elements[LEXICON.l];
                      i++
                    )
                      base[i] = elements[i]
                    base[LEXICON.l] = elements[LEXICON.l]
                  }
                  return base
                }
                return (
                  (FakejQuery[LEXICON.p] = {
                    on: function on(eventName, handler) {
                      var el,
                        eventNameLength = (eventName = (
                          eventName || _strEmpty
                        ).match(_rnothtmlwhite) || [_strEmpty])[LEXICON.l],
                        i = 0
                      return this.each(function () {
                        el = this
                        try {
                          if (el.addEventListener)
                            for (; i < eventNameLength; i++)
                              el.addEventListener(eventName[i], handler)
                          else if (el.detachEvent)
                            for (; i < eventNameLength; i++)
                              el.attachEvent('on' + eventName[i], handler)
                        } catch (e) {}
                      })
                    },
                    off: function off(eventName, handler) {
                      var el,
                        eventNameLength = (eventName = (
                          eventName || _strEmpty
                        ).match(_rnothtmlwhite) || [_strEmpty])[LEXICON.l],
                        i = 0
                      return this.each(function () {
                        el = this
                        try {
                          if (el.removeEventListener)
                            for (; i < eventNameLength; i++)
                              el.removeEventListener(eventName[i], handler)
                          else if (el.detachEvent)
                            for (; i < eventNameLength; i++)
                              el.detachEvent('on' + eventName[i], handler)
                        } catch (e) {}
                      })
                    },
                    one: function one(eventName, handler) {
                      return (
                        (eventName = (eventName || _strEmpty).match(
                          _rnothtmlwhite
                        ) || [_strEmpty]),
                        this.each(function () {
                          var el = FakejQuery(this)
                          FakejQuery.each(
                            eventName,
                            function (i, oneEventName) {
                              var oneHandler = function oneHandler(e) {
                                handler.call(this, e),
                                  el.off(oneEventName, oneHandler)
                              }
                              el.on(oneEventName, oneHandler)
                            }
                          )
                        })
                      )
                    },
                    trigger: function trigger(eventName) {
                      var el, event
                      return this.each(function () {
                        ;(el = this),
                          document.createEvent
                            ? ((event =
                                document.createEvent('HTMLEvents')).initEvent(
                                eventName,
                                !0,
                                !1
                              ),
                              el.dispatchEvent(event))
                            : el.fireEvent('on' + eventName)
                      })
                    },
                    append: function append(child) {
                      return this.each(function () {
                        insertAdjacentElement(this, 'beforeend', child)
                      })
                    },
                    prepend: function prepend(child) {
                      return this.each(function () {
                        insertAdjacentElement(this, 'afterbegin', child)
                      })
                    },
                    before: function before(child) {
                      return this.each(function () {
                        insertAdjacentElement(this, 'beforebegin', child)
                      })
                    },
                    after: function after(child) {
                      return this.each(function () {
                        insertAdjacentElement(this, 'afterend', child)
                      })
                    },
                    remove: function remove() {
                      return this.each(function () {
                        var el = this,
                          parentNode = el.parentNode
                        null != parentNode && parentNode.removeChild(el)
                      })
                    },
                    unwrap: function unwrap() {
                      var i,
                        el,
                        parent,
                        parents = []
                      for (
                        this.each(function () {
                          ;-1 ===
                            inArray((parent = this.parentNode), parents) &&
                            parents.push(parent)
                        }),
                          i = 0;
                        i < parents[LEXICON.l];
                        i++
                      ) {
                        for (
                          el = parents[i], parent = el.parentNode;
                          el.firstChild;

                        )
                          parent.insertBefore(el.firstChild, el)
                        parent.removeChild(el)
                      }
                      return this
                    },
                    wrapAll: function wrapAll(wrapperHTML) {
                      for (
                        var i,
                          nodes = this,
                          wrapper = FakejQuery(wrapperHTML)[0],
                          deepest = wrapper,
                          parent = nodes[0].parentNode,
                          previousSibling = nodes[0].previousSibling;
                        deepest.childNodes[LEXICON.l] > 0;

                      )
                        deepest = deepest.childNodes[0]
                      for (
                        i = 0;
                        nodes[LEXICON.l] - i;
                        deepest.firstChild === nodes[0] && i++
                      )
                        deepest.appendChild(nodes[i])
                      var nextSibling = previousSibling
                        ? previousSibling.nextSibling
                        : parent.firstChild
                      return parent.insertBefore(wrapper, nextSibling), this
                    },
                    wrapInner: function wrapInner(wrapperHTML) {
                      return this.each(function () {
                        var el = FakejQuery(this),
                          contents = el.contents()
                        contents[LEXICON.l]
                          ? contents.wrapAll(wrapperHTML)
                          : el.append(wrapperHTML)
                      })
                    },
                    wrap: function wrap(wrapperHTML) {
                      return this.each(function () {
                        FakejQuery(this).wrapAll(wrapperHTML)
                      })
                    },
                    css: function css(styles, val) {
                      var el,
                        key,
                        cptStyle,
                        getCptStyle = window.getComputedStyle
                      return _type(styles) == TYPES.s
                        ? val === undefined$1
                          ? ((el = this[0]),
                            (cptStyle = getCptStyle
                              ? getCptStyle(el, null)
                              : el.currentStyle[styles]),
                            getCptStyle
                              ? null != cptStyle
                                ? cptStyle.getPropertyValue(styles)
                                : el[LEXICON.s][styles]
                              : cptStyle)
                          : this.each(function () {
                              setCSSVal(this, styles, val)
                            })
                        : this.each(function () {
                            for (key in styles)
                              setCSSVal(this, key, styles[key])
                          })
                    },
                    hasClass: function hasClass(className) {
                      for (
                        var elem,
                          classList,
                          i = 0,
                          classNamePrepared = _strSpace + className + _strSpace;
                        (elem = this[i++]);

                      ) {
                        if (
                          (classList = elem.classList) &&
                          classList.contains(className)
                        )
                          return !0
                        if (
                          1 === elem.nodeType &&
                          (
                            _strSpace +
                            stripAndCollapse(elem.className + _strEmpty) +
                            _strSpace
                          ).indexOf(classNamePrepared) > -1
                        )
                          return !0
                      }
                      return !1
                    },
                    addClass: function addClass(className) {
                      var classes,
                        elem,
                        cur,
                        curValue,
                        clazz,
                        finalValue,
                        supportClassList,
                        elmClassList,
                        i = 0,
                        v = 0
                      if (className)
                        for (
                          classes = className.match(_rnothtmlwhite) || [];
                          (elem = this[i++]);

                        )
                          if (
                            ((elmClassList = elem.classList),
                            supportClassList === undefined$1 &&
                              (supportClassList = elmClassList !== undefined$1),
                            supportClassList)
                          )
                            for (; (clazz = classes[v++]); )
                              elmClassList.add(clazz)
                          else if (
                            ((curValue = elem.className + _strEmpty),
                            (cur =
                              1 === elem.nodeType &&
                              _strSpace +
                                stripAndCollapse(curValue) +
                                _strSpace))
                          ) {
                            for (; (clazz = classes[v++]); )
                              cur.indexOf(_strSpace + clazz + _strSpace) < 0 &&
                                (cur += clazz + _strSpace)
                            curValue !== (finalValue = stripAndCollapse(cur)) &&
                              (elem.className = finalValue)
                          }
                      return this
                    },
                    removeClass: function removeClass(className) {
                      var classes,
                        elem,
                        cur,
                        curValue,
                        clazz,
                        finalValue,
                        supportClassList,
                        elmClassList,
                        i = 0,
                        v = 0
                      if (className)
                        for (
                          classes = className.match(_rnothtmlwhite) || [];
                          (elem = this[i++]);

                        )
                          if (
                            ((elmClassList = elem.classList),
                            supportClassList === undefined$1 &&
                              (supportClassList = elmClassList !== undefined$1),
                            supportClassList)
                          )
                            for (; (clazz = classes[v++]); )
                              elmClassList.remove(clazz)
                          else if (
                            ((curValue = elem.className + _strEmpty),
                            (cur =
                              1 === elem.nodeType &&
                              _strSpace +
                                stripAndCollapse(curValue) +
                                _strSpace))
                          ) {
                            for (; (clazz = classes[v++]); )
                              for (
                                ;
                                cur.indexOf(_strSpace + clazz + _strSpace) > -1;

                              )
                                cur = cur.replace(
                                  _strSpace + clazz + _strSpace,
                                  _strSpace
                                )
                            curValue !== (finalValue = stripAndCollapse(cur)) &&
                              (elem.className = finalValue)
                          }
                      return this
                    },
                    hide: function hide() {
                      return this.each(function () {
                        this[LEXICON.s].display = 'none'
                      })
                    },
                    show: function show() {
                      return this.each(function () {
                        this[LEXICON.s].display = 'block'
                      })
                    },
                    attr: function attr(attrName, value) {
                      for (var el, i = 0; (el = this[i++]); ) {
                        if (value === undefined$1)
                          return el.getAttribute(attrName)
                        el.setAttribute(attrName, value)
                      }
                      return this
                    },
                    removeAttr: function removeAttr(attrName) {
                      return this.each(function () {
                        this.removeAttribute(attrName)
                      })
                    },
                    offset: function offset() {
                      var rect = this[0][LEXICON.bCR](),
                        scrollLeft =
                          window.pageXOffset ||
                          document.documentElement[_strScrollLeft],
                        scrollTop =
                          window.pageYOffset ||
                          document.documentElement[_strScrollTop]
                      return {
                        top: rect.top + scrollTop,
                        left: rect.left + scrollLeft,
                      }
                    },
                    position: function position() {
                      var el = this[0]
                      return { top: el.offsetTop, left: el.offsetLeft }
                    },
                    scrollLeft: function scrollLeft(value) {
                      for (var el, i = 0; (el = this[i++]); ) {
                        if (value === undefined$1) return el[_strScrollLeft]
                        el[_strScrollLeft] = value
                      }
                      return this
                    },
                    scrollTop: function scrollTop(value) {
                      for (var el, i = 0; (el = this[i++]); ) {
                        if (value === undefined$1) return el[_strScrollTop]
                        el[_strScrollTop] = value
                      }
                      return this
                    },
                    val: function val(value) {
                      var el = this[0]
                      return value ? ((el.value = value), this) : el.value
                    },
                    first: function first() {
                      return this.eq(0)
                    },
                    last: function last() {
                      return this.eq(-1)
                    },
                    eq: function eq(index) {
                      return FakejQuery(
                        this[index >= 0 ? index : this[LEXICON.l] + index]
                      )
                    },
                    find: function find(selector) {
                      var i,
                        children = []
                      return (
                        this.each(function () {
                          var ch = this.querySelectorAll(selector)
                          for (i = 0; i < ch[LEXICON.l]; i++)
                            children.push(ch[i])
                        }),
                        FakejQuery(children)
                      )
                    },
                    children: function children(selector) {
                      var el,
                        ch,
                        i,
                        children = []
                      return (
                        this.each(function () {
                          for (
                            ch = this.children, i = 0;
                            i < ch[LEXICON.l];
                            i++
                          )
                            (el = ch[i]),
                              selector
                                ? ((el.matches && el.matches(selector)) ||
                                    matches(el, selector)) &&
                                  children.push(el)
                                : children.push(el)
                        }),
                        FakejQuery(children)
                      )
                    },
                    parent: function parent(selector) {
                      var parent,
                        parents = []
                      return (
                        this.each(function () {
                          ;(parent = this.parentNode),
                            (selector && !FakejQuery(parent).is(selector)) ||
                              parents.push(parent)
                        }),
                        FakejQuery(parents)
                      )
                    },
                    is: function is(selector) {
                      var el, i
                      for (i = 0; i < this[LEXICON.l]; i++) {
                        if (((el = this[i]), ':visible' === selector))
                          return elementIsVisible(el)
                        if (':hidden' === selector) return !elementIsVisible(el)
                        if (
                          (el.matches && el.matches(selector)) ||
                          matches(el, selector)
                        )
                          return !0
                      }
                      return !1
                    },
                    contents: function contents() {
                      var childs,
                        i,
                        contents = []
                      return (
                        this.each(function () {
                          for (
                            childs = this.childNodes, i = 0;
                            i < childs[LEXICON.l];
                            i++
                          )
                            contents.push(childs[i])
                        }),
                        FakejQuery(contents)
                      )
                    },
                    each: function each(callback) {
                      return _each(this, callback)
                    },
                    animate: function animate(
                      props,
                      duration,
                      easing,
                      complete
                    ) {
                      return this.each(function () {
                        _animate(this, props, duration, easing, complete)
                      })
                    },
                    stop: function stop(clearQ, jump) {
                      return this.each(function () {
                        _stop(this, clearQ, jump)
                      })
                    },
                  }),
                  extend(FakejQuery, {
                    extend: extend,
                    inArray: inArray,
                    isEmptyObject: isEmptyObject,
                    isPlainObject: isPlainObject,
                    each: _each,
                  }),
                  FakejQuery
                )
              })(),
              INSTANCES =
                ((_targets = []),
                (_instancePropertyString = '__overlayScrollbars__'),
                function (target, instance) {
                  var argLen = arguments[LEXICON.l]
                  if (argLen < 1) return _targets
                  if (instance)
                    (target[_instancePropertyString] = instance),
                      _targets.push(target)
                  else {
                    var index = COMPATIBILITY.inA(target, _targets)
                    if (index > -1) {
                      if (!(argLen > 1))
                        return _targets[index][_instancePropertyString]
                      delete target[_instancePropertyString],
                        _targets.splice(index, 1)
                    }
                  }
                }),
              PLUGIN = (function () {
                var _plugin,
                  _pluginsGlobals,
                  _pluginsAutoUpdateLoop,
                  type,
                  possibleTemplateTypes,
                  restrictedStringsSplit,
                  restrictedStringsPossibilitiesSplit,
                  classNameAllowedValues,
                  numberAllowedValues,
                  booleanNullAllowedValues,
                  booleanTrueTemplate,
                  booleanFalseTemplate,
                  callbackTemplate,
                  overflowBehaviorAllowedValues,
                  optionsDefaultsAndTemplate,
                  convert,
                  _pluginsExtensions = [],
                  _pluginsOptions =
                    ((type = COMPATIBILITY.type),
                    (possibleTemplateTypes = [
                      TYPES.b,
                      TYPES.n,
                      TYPES.s,
                      TYPES.a,
                      TYPES.o,
                      TYPES.f,
                      TYPES.z,
                    ]),
                    (restrictedStringsSplit = ' '),
                    (restrictedStringsPossibilitiesSplit = ':'),
                    (classNameAllowedValues = [TYPES.z, TYPES.s]),
                    (numberAllowedValues = TYPES.n),
                    (booleanNullAllowedValues = [TYPES.z, TYPES.b]),
                    (booleanTrueTemplate = [!0, TYPES.b]),
                    (booleanFalseTemplate = [!1, TYPES.b]),
                    (callbackTemplate = [null, [TYPES.z, TYPES.f]]),
                    (overflowBehaviorAllowedValues =
                      'v-h:visible-hidden v-s:visible-scroll s:scroll h:hidden'),
                    (optionsDefaultsAndTemplate = {
                      className: ['os-theme-dark', classNameAllowedValues],
                      resize: ['none', 'n:none b:both h:horizontal v:vertical'],
                      sizeAutoCapable: booleanTrueTemplate,
                      clipAlways: booleanTrueTemplate,
                      normalizeRTL: booleanTrueTemplate,
                      paddingAbsolute: booleanFalseTemplate,
                      autoUpdate: [null, booleanNullAllowedValues],
                      autoUpdateInterval: [33, numberAllowedValues],
                      updateOnLoad: [['img'], [TYPES.s, TYPES.a, TYPES.z]],
                      nativeScrollbarsOverlaid: {
                        showNativeScrollbars: booleanFalseTemplate,
                        initialize: booleanTrueTemplate,
                      },
                      overflowBehavior: {
                        x: ['scroll', overflowBehaviorAllowedValues],
                        y: ['scroll', overflowBehaviorAllowedValues],
                      },
                      scrollbars: {
                        visibility: ['auto', 'v:visible h:hidden a:auto'],
                        autoHide: ['never', 'n:never s:scroll l:leave m:move'],
                        autoHideDelay: [800, numberAllowedValues],
                        dragScrolling: booleanTrueTemplate,
                        clickScrolling: booleanFalseTemplate,
                        touchSupport: booleanTrueTemplate,
                        snapHandle: booleanFalseTemplate,
                      },
                      textarea: {
                        dynWidth: booleanFalseTemplate,
                        dynHeight: booleanFalseTemplate,
                        inheritedAttrs: [
                          ['style', 'class'],
                          [TYPES.s, TYPES.a, TYPES.z],
                        ],
                      },
                      callbacks: {
                        onInitialized: callbackTemplate,
                        onInitializationWithdrawn: callbackTemplate,
                        onDestroyed: callbackTemplate,
                        onScrollStart: callbackTemplate,
                        onScroll: callbackTemplate,
                        onScrollStop: callbackTemplate,
                        onOverflowChanged: callbackTemplate,
                        onOverflowAmountChanged: callbackTemplate,
                        onDirectionChanged: callbackTemplate,
                        onContentSizeChanged: callbackTemplate,
                        onHostSizeChanged: callbackTemplate,
                        onUpdated: callbackTemplate,
                      },
                    }),
                    {
                      _defaults: (convert = function convert(template) {
                        return (function recursive(obj) {
                          var key, val, valType
                          for (key in obj)
                            obj[LEXICON.hOP](key) &&
                              ((val = obj[key]),
                              (valType = type(val)) == TYPES.a
                                ? (obj[key] = val[template ? 1 : 0])
                                : valType == TYPES.o &&
                                  (obj[key] = recursive(val)))
                          return obj
                        })(FRAMEWORK.extend(!0, {}, optionsDefaultsAndTemplate))
                      })(),
                      _template: convert(!0),
                      _validate: function _validate(
                        obj,
                        template,
                        writeErrors,
                        diffObj
                      ) {
                        var validatedOptions = {},
                          validatedOptionsPrepared = {},
                          objectCopy = FRAMEWORK.extend(!0, {}, obj),
                          inArray = FRAMEWORK.inArray,
                          isEmptyObj = FRAMEWORK.isEmptyObject,
                          checkObjectProps = function checkObjectProps(
                            data,
                            template,
                            diffData,
                            validatedOptions,
                            validatedOptionsPrepared,
                            prevPropName
                          ) {
                            for (var prop in template)
                              if (
                                template[LEXICON.hOP](prop) &&
                                data[LEXICON.hOP](prop)
                              ) {
                                var restrictedStringValuesSplit,
                                  restrictedStringValuesPossibilitiesSplit,
                                  isRestrictedValue,
                                  mainPossibility,
                                  currType,
                                  i,
                                  v,
                                  j,
                                  isValid = !1,
                                  isDiff = !1,
                                  templateValue = template[prop],
                                  templateValueType = type(templateValue),
                                  templateIsComplex =
                                    templateValueType == TYPES.o,
                                  templateTypes = COMPATIBILITY.isA(
                                    templateValue
                                  )
                                    ? templateValue
                                    : [templateValue],
                                  dataDiffValue = diffData[prop],
                                  dataValue = data[prop],
                                  dataValueType = type(dataValue),
                                  propPrefix = prevPropName
                                    ? prevPropName + '.'
                                    : '',
                                  error =
                                    'The option "' +
                                    propPrefix +
                                    prop +
                                    '" wasn\'t set, because',
                                  errorPossibleTypes = [],
                                  errorRestrictedStrings = []
                                if (
                                  ((dataDiffValue =
                                    dataDiffValue === undefined$1
                                      ? {}
                                      : dataDiffValue),
                                  templateIsComplex && dataValueType == TYPES.o)
                                )
                                  (validatedOptions[prop] = {}),
                                    (validatedOptionsPrepared[prop] = {}),
                                    checkObjectProps(
                                      dataValue,
                                      templateValue,
                                      dataDiffValue,
                                      validatedOptions[prop],
                                      validatedOptionsPrepared[prop],
                                      propPrefix + prop
                                    ),
                                    FRAMEWORK.each(
                                      [
                                        data,
                                        validatedOptions,
                                        validatedOptionsPrepared,
                                      ],
                                      function (index, value) {
                                        isEmptyObj(value[prop]) &&
                                          delete value[prop]
                                      }
                                    )
                                else if (!templateIsComplex) {
                                  for (i = 0; i < templateTypes[LEXICON.l]; i++)
                                    if (
                                      ((currType = templateTypes[i]),
                                      (isRestrictedValue =
                                        (templateValueType = type(currType)) ==
                                          TYPES.s &&
                                        -1 ===
                                          inArray(
                                            currType,
                                            possibleTemplateTypes
                                          )))
                                    )
                                      for (
                                        errorPossibleTypes.push(TYPES.s),
                                          restrictedStringValuesSplit =
                                            currType.split(
                                              restrictedStringsSplit
                                            ),
                                          errorRestrictedStrings =
                                            errorRestrictedStrings.concat(
                                              restrictedStringValuesSplit
                                            ),
                                          v = 0;
                                        v <
                                        restrictedStringValuesSplit[LEXICON.l];
                                        v++
                                      ) {
                                        for (
                                          mainPossibility =
                                            (restrictedStringValuesPossibilitiesSplit =
                                              restrictedStringValuesSplit[
                                                v
                                              ].split(
                                                restrictedStringsPossibilitiesSplit
                                              ))[0],
                                            j = 0;
                                          j <
                                          restrictedStringValuesPossibilitiesSplit[
                                            LEXICON.l
                                          ];
                                          j++
                                        )
                                          if (
                                            dataValue ===
                                            restrictedStringValuesPossibilitiesSplit[
                                              j
                                            ]
                                          ) {
                                            isValid = !0
                                            break
                                          }
                                        if (isValid) break
                                      }
                                    else if (
                                      (errorPossibleTypes.push(currType),
                                      dataValueType === currType)
                                    ) {
                                      isValid = !0
                                      break
                                    }
                                  isValid
                                    ? ((isDiff = dataValue !== dataDiffValue) &&
                                        (validatedOptions[prop] = dataValue),
                                      (isRestrictedValue
                                        ? inArray(
                                            dataDiffValue,
                                            restrictedStringValuesPossibilitiesSplit
                                          ) < 0
                                        : isDiff) &&
                                        (validatedOptionsPrepared[prop] =
                                          isRestrictedValue
                                            ? mainPossibility
                                            : dataValue))
                                    : writeErrors &&
                                      console.warn(
                                        error +
                                          " it doesn't accept the type [ " +
                                          dataValueType.toUpperCase() +
                                          ' ] with the value of "' +
                                          dataValue +
                                          '".\r\nAccepted types are: [ ' +
                                          errorPossibleTypes
                                            .join(', ')
                                            .toUpperCase() +
                                          ' ].' +
                                          (errorRestrictedStrings[length] > 0
                                            ? '\r\nValid strings are: [ ' +
                                              errorRestrictedStrings
                                                .join(', ')
                                                .split(
                                                  restrictedStringsPossibilitiesSplit
                                                )
                                                .join(', ') +
                                              ' ].'
                                            : '')
                                      ),
                                    delete data[prop]
                                }
                              }
                          }
                        return (
                          checkObjectProps(
                            objectCopy,
                            template,
                            diffObj || {},
                            validatedOptions,
                            validatedOptionsPrepared
                          ),
                          !isEmptyObj(objectCopy) &&
                            writeErrors &&
                            console.warn(
                              'The following options are discarded due to invalidity:\r\n' +
                                window.JSON.stringify(objectCopy, null, 2)
                            ),
                          {
                            _default: validatedOptions,
                            _prepared: validatedOptionsPrepared,
                          }
                        )
                      },
                    })
                function initOverlayScrollbarsStatics() {
                  _pluginsGlobals ||
                    (_pluginsGlobals = new OverlayScrollbarsGlobals(
                      _pluginsOptions._defaults
                    )),
                    _pluginsAutoUpdateLoop ||
                      (_pluginsAutoUpdateLoop =
                        new OverlayScrollbarsAutoUpdateLoop(_pluginsGlobals))
                }
                function OverlayScrollbarsGlobals(defaultOptions) {
                  var _base = this,
                    strOverflow = 'overflow',
                    strHidden = 'hidden',
                    strScroll = 'scroll',
                    bodyElement = FRAMEWORK('body'),
                    scrollbarDummyElement = FRAMEWORK(
                      '<div id="os-dummy-scrollbar-size"><div></div></div>'
                    ),
                    scrollbarDummyElement0 = scrollbarDummyElement[0],
                    dummyContainerChild = FRAMEWORK(
                      scrollbarDummyElement.children('div').eq(0)
                    )
                  bodyElement.append(scrollbarDummyElement),
                    scrollbarDummyElement.hide().show()
                  var nativeScrollbarSize = calcNativeScrollbarSize(
                      scrollbarDummyElement0
                    ),
                    nativeScrollbarIsOverlaid = {
                      x: 0 === nativeScrollbarSize.x,
                      y: 0 === nativeScrollbarSize.y,
                    },
                    msie = (function () {
                      var result,
                        ua = window.navigator.userAgent,
                        strIndexOf = 'indexOf',
                        strSubString = 'substring',
                        msie = ua[strIndexOf]('MSIE '),
                        trident = ua[strIndexOf]('Trident/'),
                        edge = ua[strIndexOf]('Edge/'),
                        rv = ua[strIndexOf]('rv:'),
                        parseIntFunc = parseInt
                      return (
                        msie > 0
                          ? (result = parseIntFunc(
                              ua[strSubString](
                                msie + 5,
                                ua[strIndexOf]('.', msie)
                              ),
                              10
                            ))
                          : trident > 0
                          ? (result = parseIntFunc(
                              ua[strSubString](rv + 3, ua[strIndexOf]('.', rv)),
                              10
                            ))
                          : edge > 0 &&
                            (result = parseIntFunc(
                              ua[strSubString](
                                edge + 5,
                                ua[strIndexOf]('.', edge)
                              ),
                              10
                            )),
                        result
                      )
                    })()
                  function calcNativeScrollbarSize(measureElement) {
                    return {
                      x:
                        measureElement[LEXICON.oH] - measureElement[LEXICON.cH],
                      y:
                        measureElement[LEXICON.oW] - measureElement[LEXICON.cW],
                    }
                  }
                  FRAMEWORK.extend(_base, {
                    defaultOptions: defaultOptions,
                    msie: msie,
                    autoUpdateLoop: !1,
                    autoUpdateRecommended: !COMPATIBILITY.mO(),
                    nativeScrollbarSize: nativeScrollbarSize,
                    nativeScrollbarIsOverlaid: nativeScrollbarIsOverlaid,
                    nativeScrollbarStyling: (function () {
                      var result = !1
                      scrollbarDummyElement.addClass(
                        'os-viewport-native-scrollbars-invisible'
                      )
                      try {
                        result =
                          ('none' ===
                            scrollbarDummyElement.css('scrollbar-width') &&
                            (msie > 9 || !msie)) ||
                          'none' ===
                            window
                              .getComputedStyle(
                                scrollbarDummyElement0,
                                '::-webkit-scrollbar'
                              )
                              .getPropertyValue('display')
                      } catch (ex) {}
                      return result
                    })(),
                    overlayScrollbarDummySize: { x: 30, y: 30 },
                    cssCalc:
                      VENDORS._cssPropertyValue('width', 'calc', '(1px)') ||
                      null,
                    restrictedMeasuring: (function () {
                      scrollbarDummyElement.css(strOverflow, strHidden)
                      var scrollSize = {
                        w: scrollbarDummyElement0[LEXICON.sW],
                        h: scrollbarDummyElement0[LEXICON.sH],
                      }
                      scrollbarDummyElement.css(strOverflow, 'visible')
                      var scrollSize2 = {
                        w: scrollbarDummyElement0[LEXICON.sW],
                        h: scrollbarDummyElement0[LEXICON.sH],
                      }
                      return (
                        scrollSize.w - scrollSize2.w != 0 ||
                        scrollSize.h - scrollSize2.h != 0
                      )
                    })(),
                    rtlScrollBehavior: (function () {
                      scrollbarDummyElement
                        .css({
                          'overflow-y': strHidden,
                          'overflow-x': strScroll,
                          direction: 'rtl',
                        })
                        .scrollLeft(0)
                      var dummyContainerOffset = scrollbarDummyElement.offset(),
                        dummyContainerChildOffset = dummyContainerChild.offset()
                      scrollbarDummyElement.scrollLeft(-999)
                      var dummyContainerChildOffsetAfterScroll =
                        dummyContainerChild.offset()
                      return {
                        i:
                          dummyContainerOffset.left ===
                          dummyContainerChildOffset.left,
                        n:
                          dummyContainerChildOffset.left !==
                          dummyContainerChildOffsetAfterScroll.left,
                      }
                    })(),
                    supportTransform: !!VENDORS._cssProperty('transform'),
                    supportTransition: !!VENDORS._cssProperty('transition'),
                    supportPassiveEvents: (function () {
                      var supportsPassive = !1
                      try {
                        window.addEventListener(
                          'test',
                          null,
                          Object.defineProperty({}, 'passive', {
                            get: function get() {
                              supportsPassive = !0
                            },
                          })
                        )
                      } catch (e) {}
                      return supportsPassive
                    })(),
                    supportResizeObserver: !!COMPATIBILITY.rO(),
                    supportMutationObserver: !!COMPATIBILITY.mO(),
                  }),
                    scrollbarDummyElement.removeAttr(LEXICON.s).remove(),
                    (function () {
                      if (
                        !nativeScrollbarIsOverlaid.x ||
                        !nativeScrollbarIsOverlaid.y
                      ) {
                        var abs = MATH.abs,
                          windowWidth = COMPATIBILITY.wW(),
                          windowHeight = COMPATIBILITY.wH(),
                          windowDpr = getWindowDPR(),
                          onResize = function onResize() {
                            if (INSTANCES().length > 0) {
                              var newW = COMPATIBILITY.wW(),
                                newH = COMPATIBILITY.wH(),
                                deltaW = newW - windowWidth,
                                deltaH = newH - windowHeight
                              if (0 === deltaW && 0 === deltaH) return
                              var newScrollbarSize,
                                deltaWRatio = MATH.round(
                                  newW / (windowWidth / 100)
                                ),
                                deltaHRatio = MATH.round(
                                  newH / (windowHeight / 100)
                                ),
                                absDeltaW = abs(deltaW),
                                absDeltaH = abs(deltaH),
                                absDeltaWRatio = abs(deltaWRatio),
                                absDeltaHRatio = abs(deltaHRatio),
                                newDPR = getWindowDPR(),
                                deltaIsBigger = absDeltaW > 2 && absDeltaH > 2,
                                difference = !differenceIsBiggerThanOne(
                                  absDeltaWRatio,
                                  absDeltaHRatio
                                ),
                                isZoom =
                                  deltaIsBigger &&
                                  difference &&
                                  newDPR !== windowDpr &&
                                  windowDpr > 0,
                                oldScrollbarSize = _base.nativeScrollbarSize
                              isZoom &&
                                (bodyElement.append(scrollbarDummyElement),
                                (newScrollbarSize = _base.nativeScrollbarSize =
                                  calcNativeScrollbarSize(
                                    scrollbarDummyElement[0]
                                  )),
                                scrollbarDummyElement.remove(),
                                (oldScrollbarSize.x === newScrollbarSize.x &&
                                  oldScrollbarSize.y === newScrollbarSize.y) ||
                                  FRAMEWORK.each(INSTANCES(), function () {
                                    INSTANCES(this) &&
                                      INSTANCES(this).update('zoom')
                                  })),
                                (windowWidth = newW),
                                (windowHeight = newH),
                                (windowDpr = newDPR)
                            }
                          }
                        FRAMEWORK(window).on('resize', onResize)
                      }
                      function differenceIsBiggerThanOne(valOne, valTwo) {
                        var absValOne = abs(valOne),
                          absValTwo = abs(valTwo)
                        return !(
                          absValOne === absValTwo ||
                          absValOne + 1 === absValTwo ||
                          absValOne - 1 === absValTwo
                        )
                      }
                      function getWindowDPR() {
                        var dDPI = window.screen.deviceXDPI || 0,
                          sDPI = window.screen.logicalXDPI || 1
                        return window.devicePixelRatio || dDPI / sDPI
                      }
                    })()
                }
                function OverlayScrollbarsAutoUpdateLoop(globals) {
                  var _loopID,
                    _base = this,
                    _inArray = FRAMEWORK.inArray,
                    _getNow = COMPATIBILITY.now,
                    _strAutoUpdate = 'autoUpdate',
                    _strAutoUpdateInterval = _strAutoUpdate + 'Interval',
                    _strLength = LEXICON.l,
                    _loopingInstances = [],
                    _loopingInstancesIntervalCache = [],
                    _loopIsActive = !1,
                    _loopIntervalDefault = 33,
                    _loopInterval = _loopIntervalDefault,
                    _loopTimeOld = _getNow(),
                    loop = function loop() {
                      if (_loopingInstances[_strLength] > 0 && _loopIsActive) {
                        _loopID = COMPATIBILITY.rAF()(function () {
                          loop()
                        })
                        var lowestInterval,
                          instance,
                          instanceOptions,
                          instanceAutoUpdateAllowed,
                          instanceAutoUpdateInterval,
                          now,
                          timeNew = _getNow(),
                          timeDelta = timeNew - _loopTimeOld
                        if (timeDelta > _loopInterval) {
                          ;(_loopTimeOld =
                            timeNew - (timeDelta % _loopInterval)),
                            (lowestInterval = _loopIntervalDefault)
                          for (
                            var i = 0;
                            i < _loopingInstances[_strLength];
                            i++
                          )
                            (instance = _loopingInstances[i]) !== undefined$1 &&
                              ((instanceAutoUpdateAllowed = (instanceOptions =
                                instance.options())[_strAutoUpdate]),
                              (instanceAutoUpdateInterval = MATH.max(
                                1,
                                instanceOptions[_strAutoUpdateInterval]
                              )),
                              (now = _getNow()),
                              (!0 === instanceAutoUpdateAllowed ||
                                null === instanceAutoUpdateAllowed) &&
                                now - _loopingInstancesIntervalCache[i] >
                                  instanceAutoUpdateInterval &&
                                (instance.update('auto'),
                                (_loopingInstancesIntervalCache[i] = new Date(
                                  (now += instanceAutoUpdateInterval)
                                ))),
                              (lowestInterval = MATH.max(
                                1,
                                MATH.min(
                                  lowestInterval,
                                  instanceAutoUpdateInterval
                                )
                              )))
                          _loopInterval = lowestInterval
                        }
                      } else _loopInterval = _loopIntervalDefault
                    }
                  ;(_base.add = function (instance) {
                    ;-1 === _inArray(instance, _loopingInstances) &&
                      (_loopingInstances.push(instance),
                      _loopingInstancesIntervalCache.push(_getNow()),
                      _loopingInstances[_strLength] > 0 &&
                        !_loopIsActive &&
                        ((_loopIsActive = !0),
                        (globals.autoUpdateLoop = _loopIsActive),
                        loop()))
                  }),
                    (_base.remove = function (instance) {
                      var index = _inArray(instance, _loopingInstances)
                      index > -1 &&
                        (_loopingInstancesIntervalCache.splice(index, 1),
                        _loopingInstances.splice(index, 1),
                        0 === _loopingInstances[_strLength] &&
                          _loopIsActive &&
                          ((_loopIsActive = !1),
                          (globals.autoUpdateLoop = _loopIsActive),
                          _loopID !== undefined$1 &&
                            (COMPATIBILITY.cAF()(_loopID), (_loopID = -1))))
                    })
                }
                function OverlayScrollbarsInstance(
                  pluginTargetElement,
                  options,
                  extensions,
                  globals,
                  autoUpdateLoop
                ) {
                  var type = COMPATIBILITY.type,
                    inArray = FRAMEWORK.inArray,
                    each = FRAMEWORK.each,
                    _base = new _plugin(),
                    _frameworkProto = FRAMEWORK[LEXICON.p]
                  if (isHTMLElement(pluginTargetElement)) {
                    if (INSTANCES(pluginTargetElement)) {
                      var inst = INSTANCES(pluginTargetElement)
                      return inst.options(options), inst
                    }
                    var _nativeScrollbarIsOverlaid,
                      _overlayScrollbarDummySize,
                      _rtlScrollBehavior,
                      _autoUpdateRecommended,
                      _msieVersion,
                      _nativeScrollbarStyling,
                      _cssCalc,
                      _nativeScrollbarSize,
                      _supportTransition,
                      _supportTransform,
                      _supportPassiveEvents,
                      _supportResizeObserver,
                      _supportMutationObserver,
                      _initialized,
                      _destroyed,
                      _isTextarea,
                      _isBody,
                      _documentMixed,
                      _domExists,
                      _isBorderBox,
                      _sizeAutoObserverAdded,
                      _paddingX,
                      _paddingY,
                      _borderX,
                      _borderY,
                      _marginX,
                      _marginY,
                      _isRTL,
                      _sleeping,
                      _defaultOptions,
                      _currentOptions,
                      _currentPreparedOptions,
                      _lastUpdateTime,
                      _swallowedUpdateTimeout,
                      _windowElement,
                      _documentElement,
                      _htmlElement,
                      _bodyElement,
                      _targetElement,
                      _hostElement,
                      _sizeAutoObserverElement,
                      _sizeObserverElement,
                      _paddingElement,
                      _viewportElement,
                      _contentElement,
                      _contentArrangeElement,
                      _contentGlueElement,
                      _textareaCoverElement,
                      _scrollbarCornerElement,
                      _scrollbarHorizontalElement,
                      _scrollbarHorizontalTrackElement,
                      _scrollbarHorizontalHandleElement,
                      _scrollbarVerticalElement,
                      _scrollbarVerticalTrackElement,
                      _scrollbarVerticalHandleElement,
                      _windowElementNative,
                      _documentElementNative,
                      _targetElementNative,
                      _hostElementNative,
                      _sizeAutoObserverElementNative,
                      _sizeObserverElementNative,
                      _paddingElementNative,
                      _viewportElementNative,
                      _contentElementNative,
                      _hostSizeCache,
                      _contentScrollSizeCache,
                      _arrangeContentSizeCache,
                      _hasOverflowCache,
                      _hideOverflowCache,
                      _widthAutoCache,
                      _heightAutoCache,
                      _cssBoxSizingCache,
                      _cssPaddingCache,
                      _cssBorderCache,
                      _cssMarginCache,
                      _cssDirectionCache,
                      _cssDirectionDetectedCache,
                      _paddingAbsoluteCache,
                      _clipAlwaysCache,
                      _contentGlueSizeCache,
                      _overflowBehaviorCache,
                      _overflowAmountCache,
                      _ignoreOverlayScrollbarHidingCache,
                      _autoUpdateCache,
                      _sizeAutoCapableCache,
                      _contentElementScrollSizeChangeDetectedCache,
                      _hostElementSizeChangeDetectedCache,
                      _scrollbarsVisibilityCache,
                      _scrollbarsAutoHideCache,
                      _scrollbarsClickScrollingCache,
                      _scrollbarsDragScrollingCache,
                      _resizeCache,
                      _normalizeRTLCache,
                      _classNameCache,
                      _oldClassName,
                      _textareaAutoWrappingCache,
                      _textareaInfoCache,
                      _textareaSizeCache,
                      _textareaDynHeightCache,
                      _textareaDynWidthCache,
                      _bodyMinSizeCache,
                      _mutationObserverHost,
                      _mutationObserverContent,
                      _mutationObserverHostCallback,
                      _mutationObserverContentCallback,
                      _mutationObserversConnected,
                      _textareaHasFocus,
                      _scrollbarsAutoHideTimeoutId,
                      _scrollbarsAutoHideMoveTimeoutId,
                      _scrollbarsAutoHideDelay,
                      _scrollbarsAutoHideNever,
                      _scrollbarsAutoHideScroll,
                      _scrollbarsAutoHideMove,
                      _scrollbarsAutoHideLeave,
                      _scrollbarsHandleHovered,
                      _scrollbarsHandlesDefineScrollPos,
                      _resizeNone,
                      _resizeBoth,
                      _resizeHorizontal,
                      _resizeVertical,
                      _contentBorderSize = {},
                      _scrollHorizontalInfo = {},
                      _scrollVerticalInfo = {},
                      _viewportSize = {},
                      _nativeScrollbarMinSize = {},
                      _strMinusHidden = '-hidden',
                      _strMarginMinus = 'margin-',
                      _strPaddingMinus = 'padding-',
                      _strBorderMinus = 'border-',
                      _strTop = 'top',
                      _strRight = 'right',
                      _strBottom = 'bottom',
                      _strLeft = 'left',
                      _strMinMinus = 'min-',
                      _strMaxMinus = 'max-',
                      _strWidth = 'width',
                      _strHeight = 'height',
                      _strFloat = 'float',
                      _strEmpty = '',
                      _strAuto = 'auto',
                      _strSync = 'sync',
                      _strScroll = 'scroll',
                      _strHundredPercent = '100%',
                      _strX = 'x',
                      _strY = 'y',
                      _strDot = '.',
                      _strSpace = ' ',
                      _strScrollbar = 'scrollbar',
                      _strMinusHorizontal = '-horizontal',
                      _strMinusVertical = '-vertical',
                      _strScrollLeft = _strScroll + 'Left',
                      _strScrollTop = _strScroll + 'Top',
                      _strMouseTouchDownEvent = 'mousedown touchstart',
                      _strMouseTouchUpEvent = 'mouseup touchend touchcancel',
                      _strMouseTouchMoveEvent = 'mousemove touchmove',
                      _strMouseEnter = 'mouseenter',
                      _strMouseLeave = 'mouseleave',
                      _strKeyDownEvent = 'keydown',
                      _strKeyUpEvent = 'keyup',
                      _strSelectStartEvent = 'selectstart',
                      _strTransitionEndEvent =
                        'transitionend webkitTransitionEnd oTransitionEnd',
                      _strResizeObserverProperty = '__overlayScrollbarsRO__',
                      _cassNamesPrefix = 'os-',
                      _classNameHTMLElement = _cassNamesPrefix + 'html',
                      _classNameHostElement = _cassNamesPrefix + 'host',
                      _classNameHostElementForeign =
                        _classNameHostElement + '-foreign',
                      _classNameHostTextareaElement =
                        _classNameHostElement + '-textarea',
                      _classNameHostScrollbarHorizontalHidden =
                        _classNameHostElement +
                        '-' +
                        _strScrollbar +
                        _strMinusHorizontal +
                        _strMinusHidden,
                      _classNameHostScrollbarVerticalHidden =
                        _classNameHostElement +
                        '-' +
                        _strScrollbar +
                        _strMinusVertical +
                        _strMinusHidden,
                      _classNameHostTransition =
                        _classNameHostElement + '-transition',
                      _classNameHostRTL = _classNameHostElement + '-rtl',
                      _classNameHostResizeDisabled =
                        _classNameHostElement + '-resize-disabled',
                      _classNameHostScrolling =
                        _classNameHostElement + '-scrolling',
                      _classNameHostOverflow =
                        _classNameHostElement + '-overflow',
                      _classNameHostOverflowX =
                        (_classNameHostOverflow =
                          _classNameHostElement + '-overflow') + '-x',
                      _classNameHostOverflowY = _classNameHostOverflow + '-y',
                      _classNameTextareaElement = _cassNamesPrefix + 'textarea',
                      _classNameTextareaCoverElement =
                        _classNameTextareaElement + '-cover',
                      _classNamePaddingElement = _cassNamesPrefix + 'padding',
                      _classNameViewportElement = _cassNamesPrefix + 'viewport',
                      _classNameViewportNativeScrollbarsInvisible =
                        _classNameViewportElement +
                        '-native-scrollbars-invisible',
                      _classNameViewportNativeScrollbarsOverlaid =
                        _classNameViewportElement +
                        '-native-scrollbars-overlaid',
                      _classNameContentElement = _cassNamesPrefix + 'content',
                      _classNameContentArrangeElement =
                        _cassNamesPrefix + 'content-arrange',
                      _classNameContentGlueElement =
                        _cassNamesPrefix + 'content-glue',
                      _classNameSizeAutoObserverElement =
                        _cassNamesPrefix + 'size-auto-observer',
                      _classNameResizeObserverElement =
                        _cassNamesPrefix + 'resize-observer',
                      _classNameResizeObserverItemElement =
                        _cassNamesPrefix + 'resize-observer-item',
                      _classNameResizeObserverItemFinalElement =
                        _classNameResizeObserverItemElement + '-final',
                      _classNameTextInherit = _cassNamesPrefix + 'text-inherit',
                      _classNameScrollbar = _cassNamesPrefix + _strScrollbar,
                      _classNameScrollbarTrack = _classNameScrollbar + '-track',
                      _classNameScrollbarTrackOff =
                        _classNameScrollbarTrack + '-off',
                      _classNameScrollbarHandle =
                        _classNameScrollbar + '-handle',
                      _classNameScrollbarHandleOff =
                        _classNameScrollbarHandle + '-off',
                      _classNameScrollbarUnusable =
                        _classNameScrollbar + '-unusable',
                      _classNameScrollbarAutoHidden =
                        _classNameScrollbar + '-' + _strAuto + _strMinusHidden,
                      _classNameScrollbarCorner =
                        _classNameScrollbar + '-corner',
                      _classNameScrollbarCornerResize =
                        _classNameScrollbarCorner + '-resize',
                      _classNameScrollbarCornerResizeB =
                        _classNameScrollbarCornerResize + '-both',
                      _classNameScrollbarCornerResizeH =
                        _classNameScrollbarCornerResize + _strMinusHorizontal,
                      _classNameScrollbarCornerResizeV =
                        _classNameScrollbarCornerResize + _strMinusVertical,
                      _classNameScrollbarHorizontal =
                        _classNameScrollbar + _strMinusHorizontal,
                      _classNameScrollbarVertical =
                        _classNameScrollbar + _strMinusVertical,
                      _classNameDragging = _cassNamesPrefix + 'dragging',
                      _classNameThemeNone = _cassNamesPrefix + 'theme-none',
                      _classNamesDynamicDestroy = [
                        _classNameViewportNativeScrollbarsInvisible,
                        _classNameViewportNativeScrollbarsOverlaid,
                        _classNameScrollbarTrackOff,
                        _classNameScrollbarHandleOff,
                        _classNameScrollbarUnusable,
                        _classNameScrollbarAutoHidden,
                        _classNameScrollbarCornerResize,
                        _classNameScrollbarCornerResizeB,
                        _classNameScrollbarCornerResizeH,
                        _classNameScrollbarCornerResizeV,
                        _classNameDragging,
                      ].join(_strSpace),
                      _callbacksInitQeueue = [],
                      _viewportAttrsFromTarget = [LEXICON.ti],
                      _extensions = {},
                      _extensionsPrivateMethods = 'added removed on contract',
                      _swallowedUpdateHints = {},
                      _swallowUpdateLag = 42,
                      _updateOnLoadEventName = 'load',
                      _updateOnLoadElms = [],
                      _updateAutoCache = {},
                      _mutationObserverAttrsTextarea = ['wrap', 'cols', 'rows'],
                      _mutationObserverAttrsHost = [
                        LEXICON.i,
                        LEXICON.c,
                        LEXICON.s,
                        'open',
                      ].concat(_viewportAttrsFromTarget),
                      _destroyEvents = []
                    return (
                      (_base.sleep = function () {
                        _sleeping = !0
                      }),
                      (_base.update = function (force) {
                        var attrsChanged,
                          contentSizeC,
                          doUpdateAuto,
                          mutHost,
                          mutContent
                        if (!_destroyed)
                          return (
                            type(force) == TYPES.s
                              ? force === _strAuto
                                ? ((attrsChanged = meaningfulAttrsChanged()),
                                  (contentSizeC =
                                    updateAutoContentSizeChanged()),
                                  (doUpdateAuto =
                                    attrsChanged || contentSizeC) &&
                                    update({
                                      _contentSizeChanged: contentSizeC,
                                      _changedOptions: _initialized
                                        ? undefined$1
                                        : _currentPreparedOptions,
                                    }))
                                : force === _strSync
                                ? _mutationObserversConnected
                                  ? ((mutHost = _mutationObserverHostCallback(
                                      _mutationObserverHost.takeRecords()
                                    )),
                                    (mutContent =
                                      _mutationObserverContentCallback(
                                        _mutationObserverContent.takeRecords()
                                      )))
                                  : (mutHost = _base.update(_strAuto))
                                : 'zoom' === force &&
                                  update({
                                    _hostSizeChanged: !0,
                                    _contentSizeChanged: !0,
                                  })
                              : ((force = _sleeping || force),
                                (_sleeping = !1),
                                (_base.update(_strSync) && !force) ||
                                  update({ _force: force })),
                            updateElementsOnLoad(),
                            doUpdateAuto || mutHost || mutContent
                          )
                      }),
                      (_base.options = function (newOptions, value) {
                        var changedOps,
                          option = {}
                        if (
                          FRAMEWORK.isEmptyObject(newOptions) ||
                          !FRAMEWORK.isPlainObject(newOptions)
                        ) {
                          if (type(newOptions) != TYPES.s)
                            return _currentOptions
                          if (!(arguments.length > 1))
                            return getObjectPropVal(_currentOptions, newOptions)
                          setObjectPropVal(option, newOptions, value),
                            (changedOps = setOptions(option))
                        } else changedOps = setOptions(newOptions)
                        FRAMEWORK.isEmptyObject(changedOps) ||
                          update({ _changedOptions: changedOps })
                      }),
                      (_base.destroy = function () {
                        if (!_destroyed) {
                          for (var extName in (autoUpdateLoop.remove(_base),
                          disconnectMutationObservers(),
                          setupResizeObserver(_sizeObserverElement),
                          setupResizeObserver(_sizeAutoObserverElement),
                          _extensions))
                            _base.removeExt(extName)
                          for (; _destroyEvents[LEXICON.l] > 0; )
                            _destroyEvents.pop()()
                          setupHostMouseTouchEvents(!0),
                            _contentGlueElement && remove(_contentGlueElement),
                            _contentArrangeElement &&
                              remove(_contentArrangeElement),
                            _sizeAutoObserverAdded &&
                              remove(_sizeAutoObserverElement),
                            setupScrollbarsDOM(!0),
                            setupScrollbarCornerDOM(!0),
                            setupStructureDOM(!0)
                          for (var i = 0; i < _updateOnLoadElms[LEXICON.l]; i++)
                            FRAMEWORK(_updateOnLoadElms[i]).off(
                              _updateOnLoadEventName,
                              updateOnLoadCallback
                            )
                          ;(_updateOnLoadElms = undefined$1),
                            (_destroyed = !0),
                            (_sleeping = !0),
                            INSTANCES(pluginTargetElement, 0),
                            dispatchCallback('onDestroyed')
                        }
                      }),
                      (_base.scroll = function (
                        coordinates,
                        duration,
                        easing,
                        complete
                      ) {
                        if (
                          0 === arguments.length ||
                          coordinates === undefined$1
                        ) {
                          var infoX = _scrollHorizontalInfo,
                            infoY = _scrollVerticalInfo,
                            normalizeInvert =
                              _normalizeRTLCache &&
                              _isRTL &&
                              _rtlScrollBehavior.i,
                            normalizeNegate =
                              _normalizeRTLCache &&
                              _isRTL &&
                              _rtlScrollBehavior.n,
                            scrollX = infoX._currentScroll,
                            scrollXRatio = infoX._currentScrollRatio,
                            maxScrollX = infoX._maxScroll
                          return (
                            (scrollXRatio = normalizeInvert
                              ? 1 - scrollXRatio
                              : scrollXRatio),
                            (scrollX = normalizeInvert
                              ? maxScrollX - scrollX
                              : scrollX),
                            (maxScrollX *= normalizeNegate ? -1 : 1),
                            {
                              position: {
                                x: (scrollX *= normalizeNegate ? -1 : 1),
                                y: infoY._currentScroll,
                              },
                              ratio: {
                                x: scrollXRatio,
                                y: infoY._currentScrollRatio,
                              },
                              max: { x: maxScrollX, y: infoY._maxScroll },
                              handleOffset: {
                                x: infoX._handleOffset,
                                y: infoY._handleOffset,
                              },
                              handleLength: {
                                x: infoX._handleLength,
                                y: infoY._handleLength,
                              },
                              handleLengthRatio: {
                                x: infoX._handleLengthRatio,
                                y: infoY._handleLengthRatio,
                              },
                              trackLength: {
                                x: infoX._trackLength,
                                y: infoY._trackLength,
                              },
                              snappedHandleOffset: {
                                x: infoX._snappedHandleOffset,
                                y: infoY._snappedHandleOffset,
                              },
                              isRTL: _isRTL,
                              isRTLNormalized: _normalizeRTLCache,
                            }
                          )
                        }
                        _base.update(_strSync)
                        var i,
                          doScrollLeft,
                          doScrollTop,
                          animationOptions,
                          settingsAxis,
                          settingsScroll,
                          settingsBlock,
                          settingsMargin,
                          finalElement,
                          normalizeRTL = _normalizeRTLCache,
                          coordinatesXAxisProps = [_strX, _strLeft, 'l'],
                          coordinatesYAxisProps = [_strY, _strTop, 't'],
                          coordinatesOperators = ['+=', '-=', '*=', '/='],
                          durationIsObject = type(duration) == TYPES.o,
                          completeCallback = durationIsObject
                            ? duration.complete
                            : complete,
                          finalScroll = {},
                          specialEasing = {},
                          strEnd = 'end',
                          strBegin = 'begin',
                          strCenter = 'center',
                          strNearest = 'nearest',
                          strAlways = 'always',
                          strNever = 'never',
                          strIfNeeded = 'ifneeded',
                          strLength = LEXICON.l,
                          elementObjSettingsAxisValues = [
                            _strX,
                            _strY,
                            'xy',
                            'yx',
                          ],
                          elementObjSettingsBlockValues = [
                            strBegin,
                            strEnd,
                            strCenter,
                            strNearest,
                          ],
                          elementObjSettingsScrollValues = [
                            strAlways,
                            strNever,
                            strIfNeeded,
                          ],
                          coordinatesIsElementObj =
                            coordinates[LEXICON.hOP]('el'),
                          possibleElement = coordinatesIsElementObj
                            ? coordinates.el
                            : coordinates,
                          possibleElementIsJQuery =
                            !!(
                              possibleElement instanceof FRAMEWORK || JQUERY
                            ) && possibleElement instanceof JQUERY,
                          possibleElementIsHTMLElement =
                            !possibleElementIsJQuery &&
                            isHTMLElement(possibleElement),
                          updateScrollbarInfos =
                            function updateScrollbarInfos() {
                              doScrollLeft && refreshScrollbarHandleOffset(!0),
                                doScrollTop && refreshScrollbarHandleOffset(!1)
                            },
                          proxyCompleteCallback =
                            type(completeCallback) != TYPES.f
                              ? undefined$1
                              : function () {
                                  updateScrollbarInfos(), completeCallback()
                                }
                        function checkSettingsStringValue(
                          currValue,
                          allowedValues
                        ) {
                          for (i = 0; i < allowedValues[strLength]; i++)
                            if (currValue === allowedValues[i]) return !0
                          return !1
                        }
                        function getRawScroll(isX, coordinates) {
                          var coordinateProps = isX
                            ? coordinatesXAxisProps
                            : coordinatesYAxisProps
                          if (
                            ((coordinates =
                              type(coordinates) == TYPES.s ||
                              type(coordinates) == TYPES.n
                                ? [coordinates, coordinates]
                                : coordinates),
                            COMPATIBILITY.isA(coordinates))
                          )
                            return isX ? coordinates[0] : coordinates[1]
                          if (type(coordinates) == TYPES.o)
                            for (i = 0; i < coordinateProps[strLength]; i++)
                              if (coordinateProps[i] in coordinates)
                                return coordinates[coordinateProps[i]]
                        }
                        function getFinalScroll(isX, rawScroll) {
                          var operator,
                            amount,
                            finalValue,
                            possibleOperator,
                            isString = type(rawScroll) == TYPES.s,
                            scrollInfo = isX
                              ? _scrollHorizontalInfo
                              : _scrollVerticalInfo,
                            currScroll = scrollInfo._currentScroll,
                            maxScroll = scrollInfo._maxScroll,
                            mult = ' * ',
                            isRTLisX = _isRTL && isX,
                            normalizeShortcuts =
                              isRTLisX && _rtlScrollBehavior.n && !normalizeRTL,
                            strReplace = 'replace',
                            evalFunc = eval
                          if (
                            (isString
                              ? (rawScroll[strLength] > 2 &&
                                  ((possibleOperator = rawScroll.substr(0, 2)),
                                  inArray(
                                    possibleOperator,
                                    coordinatesOperators
                                  ) > -1 && (operator = possibleOperator)),
                                (rawScroll = (rawScroll = operator
                                  ? rawScroll.substr(2)
                                  : rawScroll)
                                  [strReplace](/min/g, 0)
                                  [strReplace](/</g, 0)
                                  [strReplace](
                                    /max/g,
                                    (normalizeShortcuts ? '-' : _strEmpty) +
                                      _strHundredPercent
                                  )
                                  [strReplace](
                                    />/g,
                                    (normalizeShortcuts ? '-' : _strEmpty) +
                                      _strHundredPercent
                                  )
                                  [strReplace](/px/g, _strEmpty)
                                  [strReplace](
                                    /%/g,
                                    mult +
                                      (maxScroll *
                                        (isRTLisX && _rtlScrollBehavior.n
                                          ? -1
                                          : 1)) /
                                        100
                                  )
                                  [strReplace](/vw/g, mult + _viewportSize.w)
                                  [strReplace](/vh/g, mult + _viewportSize.h)),
                                (amount = parseToZeroOrNumber(
                                  isNaN(rawScroll)
                                    ? parseToZeroOrNumber(
                                        evalFunc(rawScroll),
                                        !0
                                      ).toFixed()
                                    : rawScroll
                                )))
                              : (amount = rawScroll),
                            amount !== undefined$1 &&
                              !isNaN(amount) &&
                              type(amount) == TYPES.n)
                          ) {
                            var normalizeIsRTLisX = normalizeRTL && isRTLisX,
                              operatorCurrScroll =
                                currScroll *
                                (normalizeIsRTLisX && _rtlScrollBehavior.n
                                  ? -1
                                  : 1),
                              invert =
                                normalizeIsRTLisX && _rtlScrollBehavior.i,
                              negate = normalizeIsRTLisX && _rtlScrollBehavior.n
                            switch (
                              ((operatorCurrScroll = invert
                                ? maxScroll - operatorCurrScroll
                                : operatorCurrScroll),
                              operator)
                            ) {
                              case '+=':
                                finalValue = operatorCurrScroll + amount
                                break
                              case '-=':
                                finalValue = operatorCurrScroll - amount
                                break
                              case '*=':
                                finalValue = operatorCurrScroll * amount
                                break
                              case '/=':
                                finalValue = operatorCurrScroll / amount
                                break
                              default:
                                finalValue = amount
                            }
                            ;(finalValue = invert
                              ? maxScroll - finalValue
                              : finalValue),
                              (finalValue *= negate ? -1 : 1),
                              (finalValue =
                                isRTLisX && _rtlScrollBehavior.n
                                  ? MATH.min(0, MATH.max(maxScroll, finalValue))
                                  : MATH.max(
                                      0,
                                      MATH.min(maxScroll, finalValue)
                                    ))
                          }
                          return finalValue === currScroll
                            ? undefined$1
                            : finalValue
                        }
                        function getPerAxisValue(
                          value,
                          valueInternalType,
                          defaultValue,
                          allowedValues
                        ) {
                          var valueArrLength,
                            valueArrItem,
                            resultDefault = [defaultValue, defaultValue],
                            valueType = type(value)
                          if (valueType == valueInternalType)
                            value = [value, value]
                          else if (valueType == TYPES.a) {
                            if (
                              (valueArrLength = value[strLength]) > 2 ||
                              valueArrLength < 1
                            )
                              value = resultDefault
                            else
                              for (
                                1 === valueArrLength &&
                                  (value[1] = defaultValue),
                                  i = 0;
                                i < valueArrLength;
                                i++
                              )
                                if (
                                  ((valueArrItem = value[i]),
                                  type(valueArrItem) != valueInternalType ||
                                    !checkSettingsStringValue(
                                      valueArrItem,
                                      allowedValues
                                    ))
                                ) {
                                  value = resultDefault
                                  break
                                }
                          } else
                            value =
                              valueType == TYPES.o
                                ? [
                                    value[_strX] || defaultValue,
                                    value[_strY] || defaultValue,
                                  ]
                                : resultDefault
                          return { x: value[0], y: value[1] }
                        }
                        function generateMargin(marginTopRightBottomLeftArray) {
                          var currValue,
                            currValueType,
                            result = [],
                            valueDirections = [
                              _strTop,
                              _strRight,
                              _strBottom,
                              _strLeft,
                            ]
                          for (
                            i = 0;
                            i < marginTopRightBottomLeftArray[strLength] &&
                            i !== valueDirections[strLength];
                            i++
                          )
                            (currValue = marginTopRightBottomLeftArray[i]),
                              (currValueType = type(currValue)) == TYPES.b
                                ? result.push(
                                    currValue
                                      ? parseToZeroOrNumber(
                                          finalElement.css(
                                            _strMarginMinus + valueDirections[i]
                                          )
                                        )
                                      : 0
                                  )
                                : result.push(
                                    currValueType == TYPES.n ? currValue : 0
                                  )
                          return result
                        }
                        if (
                          possibleElementIsJQuery ||
                          possibleElementIsHTMLElement
                        ) {
                          var marginLength,
                            margin = coordinatesIsElementObj
                              ? coordinates.margin
                              : 0,
                            axis = coordinatesIsElementObj
                              ? coordinates.axis
                              : 0,
                            scroll = coordinatesIsElementObj
                              ? coordinates.scroll
                              : 0,
                            block = coordinatesIsElementObj
                              ? coordinates.block
                              : 0,
                            marginDefault = [0, 0, 0, 0],
                            marginType = type(margin)
                          if (
                            (finalElement = possibleElementIsJQuery
                              ? possibleElement
                              : FRAMEWORK(possibleElement))[strLength] > 0
                          ) {
                            ;(margin =
                              marginType == TYPES.n || marginType == TYPES.b
                                ? generateMargin([
                                    margin,
                                    margin,
                                    margin,
                                    margin,
                                  ])
                                : marginType == TYPES.a
                                ? 2 === (marginLength = margin[strLength])
                                  ? generateMargin([
                                      margin[0],
                                      margin[1],
                                      margin[0],
                                      margin[1],
                                    ])
                                  : marginLength >= 4
                                  ? generateMargin(margin)
                                  : marginDefault
                                : marginType == TYPES.o
                                ? generateMargin([
                                    margin[_strTop],
                                    margin[_strRight],
                                    margin[_strBottom],
                                    margin[_strLeft],
                                  ])
                                : marginDefault),
                              (settingsAxis = checkSettingsStringValue(
                                axis,
                                elementObjSettingsAxisValues
                              )
                                ? axis
                                : 'xy'),
                              (settingsScroll = getPerAxisValue(
                                scroll,
                                TYPES.s,
                                strAlways,
                                elementObjSettingsScrollValues
                              )),
                              (settingsBlock = getPerAxisValue(
                                block,
                                TYPES.s,
                                strBegin,
                                elementObjSettingsBlockValues
                              )),
                              (settingsMargin = margin)
                            var viewportScroll = {
                                l: _scrollHorizontalInfo._currentScroll,
                                t: _scrollVerticalInfo._currentScroll,
                              },
                              viewportOffset = _paddingElement.offset(),
                              elementOffset = finalElement.offset(),
                              doNotScroll = {
                                x:
                                  settingsScroll.x == strNever ||
                                  settingsAxis == _strY,
                                y:
                                  settingsScroll.y == strNever ||
                                  settingsAxis == _strX,
                              }
                            ;(elementOffset[_strTop] -= settingsMargin[0]),
                              (elementOffset[_strLeft] -= settingsMargin[3])
                            var elementScrollCoordinates = {
                              x: MATH.round(
                                elementOffset[_strLeft] -
                                  viewportOffset[_strLeft] +
                                  viewportScroll.l
                              ),
                              y: MATH.round(
                                elementOffset[_strTop] -
                                  viewportOffset[_strTop] +
                                  viewportScroll.t
                              ),
                            }
                            if (
                              (_isRTL &&
                                (_rtlScrollBehavior.n ||
                                  _rtlScrollBehavior.i ||
                                  (elementScrollCoordinates.x = MATH.round(
                                    viewportOffset[_strLeft] -
                                      elementOffset[_strLeft] +
                                      viewportScroll.l
                                  )),
                                _rtlScrollBehavior.n &&
                                  normalizeRTL &&
                                  (elementScrollCoordinates.x *= -1),
                                _rtlScrollBehavior.i &&
                                  normalizeRTL &&
                                  (elementScrollCoordinates.x = MATH.round(
                                    viewportOffset[_strLeft] -
                                      elementOffset[_strLeft] +
                                      (_scrollHorizontalInfo._maxScroll -
                                        viewportScroll.l)
                                  ))),
                              settingsBlock.x != strBegin ||
                                settingsBlock.y != strBegin ||
                                settingsScroll.x == strIfNeeded ||
                                settingsScroll.y == strIfNeeded ||
                                _isRTL)
                            ) {
                              var measuringElm = finalElement[0],
                                rawElementSize = _supportTransform
                                  ? measuringElm[LEXICON.bCR]()
                                  : {
                                      width: measuringElm[LEXICON.oW],
                                      height: measuringElm[LEXICON.oH],
                                    },
                                elementSize = {
                                  w:
                                    rawElementSize[_strWidth] +
                                    settingsMargin[3] +
                                    settingsMargin[1],
                                  h:
                                    rawElementSize[_strHeight] +
                                    settingsMargin[0] +
                                    settingsMargin[2],
                                },
                                finalizeBlock = function finalizeBlock(isX) {
                                  var vars = getScrollbarVars(isX),
                                    wh = vars._w_h,
                                    lt = vars._left_top,
                                    xy = vars._x_y,
                                    blockIsEnd =
                                      settingsBlock[xy] ==
                                      (isX && _isRTL ? strBegin : strEnd),
                                    blockIsCenter =
                                      settingsBlock[xy] == strCenter,
                                    blockIsNearest =
                                      settingsBlock[xy] == strNearest,
                                    scrollNever =
                                      settingsScroll[xy] == strNever,
                                    scrollIfNeeded =
                                      settingsScroll[xy] == strIfNeeded,
                                    vpSize = _viewportSize[wh],
                                    vpOffset = viewportOffset[lt],
                                    elSize = elementSize[wh],
                                    elOffset = elementOffset[lt],
                                    divide = blockIsCenter ? 2 : 1,
                                    elementCenterOffset = elOffset + elSize / 2,
                                    viewportCenterOffset =
                                      vpOffset + vpSize / 2,
                                    isInView =
                                      elSize <= vpSize &&
                                      elOffset >= vpOffset &&
                                      elOffset + elSize <= vpOffset + vpSize
                                  scrollNever
                                    ? (doNotScroll[xy] = !0)
                                    : doNotScroll[xy] ||
                                      ((blockIsNearest || scrollIfNeeded) &&
                                        ((doNotScroll[xy] =
                                          !!scrollIfNeeded && isInView),
                                        (blockIsEnd =
                                          elSize < vpSize
                                            ? elementCenterOffset >
                                              viewportCenterOffset
                                            : elementCenterOffset <
                                              viewportCenterOffset)),
                                      (elementScrollCoordinates[xy] -=
                                        blockIsEnd || blockIsCenter
                                          ? (vpSize / divide -
                                              elSize / divide) *
                                            (isX && _isRTL && normalizeRTL
                                              ? -1
                                              : 1)
                                          : 0))
                                }
                              finalizeBlock(!0), finalizeBlock(!1)
                            }
                            doNotScroll.y && delete elementScrollCoordinates.y,
                              doNotScroll.x &&
                                delete elementScrollCoordinates.x,
                              (coordinates = elementScrollCoordinates)
                          }
                        }
                        ;(finalScroll[_strScrollLeft] = getFinalScroll(
                          !0,
                          getRawScroll(!0, coordinates)
                        )),
                          (finalScroll[_strScrollTop] = getFinalScroll(
                            !1,
                            getRawScroll(!1, coordinates)
                          )),
                          (doScrollLeft =
                            finalScroll[_strScrollLeft] !== undefined$1),
                          (doScrollTop =
                            finalScroll[_strScrollTop] !== undefined$1),
                          (doScrollLeft || doScrollTop) &&
                          (duration > 0 || durationIsObject)
                            ? durationIsObject
                              ? ((duration.complete = proxyCompleteCallback),
                                _viewportElement.animate(finalScroll, duration))
                              : ((animationOptions = {
                                  duration: duration,
                                  complete: proxyCompleteCallback,
                                }),
                                COMPATIBILITY.isA(easing) ||
                                FRAMEWORK.isPlainObject(easing)
                                  ? ((specialEasing[_strScrollLeft] =
                                      easing[0] || easing.x),
                                    (specialEasing[_strScrollTop] =
                                      easing[1] || easing.y),
                                    (animationOptions.specialEasing =
                                      specialEasing))
                                  : (animationOptions.easing = easing),
                                _viewportElement.animate(
                                  finalScroll,
                                  animationOptions
                                ))
                            : (doScrollLeft &&
                                _viewportElement[_strScrollLeft](
                                  finalScroll[_strScrollLeft]
                                ),
                              doScrollTop &&
                                _viewportElement[_strScrollTop](
                                  finalScroll[_strScrollTop]
                                ),
                              updateScrollbarInfos())
                      }),
                      (_base.scrollStop = function (param1, param2, param3) {
                        return (
                          _viewportElement.stop(param1, param2, param3), _base
                        )
                      }),
                      (_base.getElements = function (elementName) {
                        var obj = {
                          target: _targetElementNative,
                          host: _hostElementNative,
                          padding: _paddingElementNative,
                          viewport: _viewportElementNative,
                          content: _contentElementNative,
                          scrollbarHorizontal: {
                            scrollbar: _scrollbarHorizontalElement[0],
                            track: _scrollbarHorizontalTrackElement[0],
                            handle: _scrollbarHorizontalHandleElement[0],
                          },
                          scrollbarVertical: {
                            scrollbar: _scrollbarVerticalElement[0],
                            track: _scrollbarVerticalTrackElement[0],
                            handle: _scrollbarVerticalHandleElement[0],
                          },
                          scrollbarCorner: _scrollbarCornerElement[0],
                        }
                        return type(elementName) == TYPES.s
                          ? getObjectPropVal(obj, elementName)
                          : obj
                      }),
                      (_base.getState = function (stateProperty) {
                        function prepare(obj) {
                          if (!FRAMEWORK.isPlainObject(obj)) return obj
                          var extended = extendDeep({}, obj),
                            changePropertyName = function changePropertyName(
                              from,
                              to
                            ) {
                              extended[LEXICON.hOP](from) &&
                                ((extended[to] = extended[from]),
                                delete extended[from])
                            }
                          return (
                            changePropertyName('w', _strWidth),
                            changePropertyName('h', _strHeight),
                            delete extended.c,
                            extended
                          )
                        }
                        var obj = {
                          destroyed: !!prepare(_destroyed),
                          sleeping: !!prepare(_sleeping),
                          autoUpdate: prepare(!_mutationObserversConnected),
                          widthAuto: prepare(_widthAutoCache),
                          heightAuto: prepare(_heightAutoCache),
                          padding: prepare(_cssPaddingCache),
                          overflowAmount: prepare(_overflowAmountCache),
                          hideOverflow: prepare(_hideOverflowCache),
                          hasOverflow: prepare(_hasOverflowCache),
                          contentScrollSize: prepare(_contentScrollSizeCache),
                          viewportSize: prepare(_viewportSize),
                          hostSize: prepare(_hostSizeCache),
                          documentMixed: prepare(_documentMixed),
                        }
                        return type(stateProperty) == TYPES.s
                          ? getObjectPropVal(obj, stateProperty)
                          : obj
                      }),
                      (_base.ext = function (extName) {
                        var result,
                          privateMethods = _extensionsPrivateMethods.split(' '),
                          i = 0
                        if (type(extName) == TYPES.s) {
                          if (_extensions[LEXICON.hOP](extName))
                            for (
                              result = extendDeep({}, _extensions[extName]);
                              i < privateMethods.length;
                              i++
                            )
                              delete result[privateMethods[i]]
                        } else
                          for (i in ((result = {}), _extensions))
                            result[i] = extendDeep({}, _base.ext(i))
                        return result
                      }),
                      (_base.addExt = function (extName, extensionOptions) {
                        var instance,
                          instanceAdded,
                          instanceContract,
                          contractResult,
                          registeredExtensionObj = _plugin.extension(extName),
                          contractFulfilled = !0
                        if (registeredExtensionObj) {
                          if (_extensions[LEXICON.hOP](extName))
                            return _base.ext(extName)
                          if (
                            (instance =
                              registeredExtensionObj.extensionFactory.call(
                                _base,
                                extendDeep(
                                  {},
                                  registeredExtensionObj.defaultOptions
                                ),
                                FRAMEWORK,
                                COMPATIBILITY
                              )) &&
                            ((instanceContract = instance.contract),
                            type(instanceContract) == TYPES.f &&
                              ((contractResult = instanceContract(window)),
                              (contractFulfilled =
                                type(contractResult) == TYPES.b
                                  ? contractResult
                                  : contractFulfilled)),
                            contractFulfilled)
                          )
                            return (
                              (_extensions[extName] = instance),
                              (instanceAdded = instance.added),
                              type(instanceAdded) == TYPES.f &&
                                instanceAdded(extensionOptions),
                              _base.ext(extName)
                            )
                        } else
                          console.warn(
                            'A extension with the name "' +
                              extName +
                              '" isn\'t registered.'
                          )
                      }),
                      (_base.removeExt = function (extName) {
                        var instanceRemoved,
                          instance = _extensions[extName]
                        return (
                          !!instance &&
                          (delete _extensions[extName],
                          (instanceRemoved = instance.removed),
                          type(instanceRemoved) == TYPES.f && instanceRemoved(),
                          !0)
                        )
                      }),
                      _plugin.valid(
                        construct(pluginTargetElement, options, extensions)
                      ) && INSTANCES(pluginTargetElement, _base),
                      _base
                    )
                  }
                  function setupResponsiveEventListener(
                    element,
                    eventNames,
                    listener,
                    remove,
                    passiveOrOptions
                  ) {
                    var collected =
                        COMPATIBILITY.isA(eventNames) &&
                        COMPATIBILITY.isA(listener),
                      method = remove
                        ? 'removeEventListener'
                        : 'addEventListener',
                      onOff = remove ? 'off' : 'on',
                      events = !collected && eventNames.split(_strSpace),
                      i = 0,
                      passiveOrOptionsIsObj =
                        FRAMEWORK.isPlainObject(passiveOrOptions),
                      passive =
                        (_supportPassiveEvents &&
                          (passiveOrOptionsIsObj
                            ? passiveOrOptions._passive
                            : passiveOrOptions)) ||
                        !1,
                      capture =
                        passiveOrOptionsIsObj &&
                        (passiveOrOptions._capture || !1),
                      nativeParam = _supportPassiveEvents
                        ? { passive: passive, capture: capture }
                        : capture
                    if (collected)
                      for (; i < eventNames[LEXICON.l]; i++)
                        setupResponsiveEventListener(
                          element,
                          eventNames[i],
                          listener[i],
                          remove,
                          passiveOrOptions
                        )
                    else
                      for (; i < events[LEXICON.l]; i++)
                        _supportPassiveEvents
                          ? element[0][method](events[i], listener, nativeParam)
                          : element[onOff](events[i], listener)
                  }
                  function addDestroyEventListener(
                    element,
                    eventNames,
                    listener,
                    passive
                  ) {
                    setupResponsiveEventListener(
                      element,
                      eventNames,
                      listener,
                      !1,
                      passive
                    ),
                      _destroyEvents.push(
                        COMPATIBILITY.bind(
                          setupResponsiveEventListener,
                          0,
                          element,
                          eventNames,
                          listener,
                          !0,
                          passive
                        )
                      )
                  }
                  function setupResizeObserver(
                    targetElement,
                    onElementResizedCallback
                  ) {
                    if (targetElement) {
                      var resizeObserver = COMPATIBILITY.rO(),
                        strAnimationStartEvent =
                          'animationstart mozAnimationStart webkitAnimationStart MSAnimationStart',
                        strChildNodes = 'childNodes',
                        constScroll = 3333333,
                        callback = function callback() {
                          targetElement[_strScrollTop](constScroll)[
                            _strScrollLeft
                          ](
                            _isRTL
                              ? _rtlScrollBehavior.n
                                ? -constScroll
                                : _rtlScrollBehavior.i
                                ? 0
                                : constScroll
                              : constScroll
                          ),
                            onElementResizedCallback()
                        }
                      if (onElementResizedCallback) {
                        if (_supportResizeObserver)
                          ((element = targetElement
                            .addClass('observed')
                            .append(
                              generateDiv(_classNameResizeObserverElement)
                            )
                            .contents()[0])[_strResizeObserverProperty] =
                            new resizeObserver(callback)).observe(element)
                        else if (_msieVersion > 9 || !_autoUpdateRecommended) {
                          targetElement.prepend(
                            generateDiv(
                              _classNameResizeObserverElement,
                              generateDiv(
                                {
                                  c: _classNameResizeObserverItemElement,
                                  dir: 'ltr',
                                },
                                generateDiv(
                                  _classNameResizeObserverItemElement,
                                  generateDiv(
                                    _classNameResizeObserverItemFinalElement
                                  )
                                ) +
                                  generateDiv(
                                    _classNameResizeObserverItemElement,
                                    generateDiv({
                                      c: _classNameResizeObserverItemFinalElement,
                                      style: 'width: 200%; height: 200%',
                                    })
                                  )
                              )
                            )
                          )
                          var isDirty,
                            rAFId,
                            currWidth,
                            currHeight,
                            observerElement =
                              targetElement[0][strChildNodes][0][
                                strChildNodes
                              ][0],
                            shrinkElement = FRAMEWORK(
                              observerElement[strChildNodes][1]
                            ),
                            expandElement = FRAMEWORK(
                              observerElement[strChildNodes][0]
                            ),
                            expandElementChild = FRAMEWORK(
                              expandElement[0][strChildNodes][0]
                            ),
                            widthCache = observerElement[LEXICON.oW],
                            heightCache = observerElement[LEXICON.oH],
                            factor = 2,
                            nativeScrollbarSize = globals.nativeScrollbarSize,
                            reset = function reset() {
                              expandElement[_strScrollLeft](constScroll)[
                                _strScrollTop
                              ](constScroll),
                                shrinkElement[_strScrollLeft](constScroll)[
                                  _strScrollTop
                                ](constScroll)
                            },
                            onResized = function onResized() {
                              ;(rAFId = 0),
                                isDirty &&
                                  ((widthCache = currWidth),
                                  (heightCache = currHeight),
                                  callback())
                            },
                            onScroll = function onScroll(event) {
                              return (
                                (currWidth = observerElement[LEXICON.oW]),
                                (currHeight = observerElement[LEXICON.oH]),
                                (isDirty =
                                  currWidth != widthCache ||
                                  currHeight != heightCache),
                                event && isDirty && !rAFId
                                  ? (COMPATIBILITY.cAF()(rAFId),
                                    (rAFId = COMPATIBILITY.rAF()(onResized)))
                                  : event || onResized(),
                                reset(),
                                event &&
                                  (COMPATIBILITY.prvD(event),
                                  COMPATIBILITY.stpP(event)),
                                !1
                              )
                            },
                            expandChildCSS = {},
                            observerElementCSS = {}
                          setTopRightBottomLeft(observerElementCSS, _strEmpty, [
                            -(nativeScrollbarSize.y + 1) * factor,
                            nativeScrollbarSize.x * -factor,
                            nativeScrollbarSize.y * -factor,
                            -(nativeScrollbarSize.x + 1) * factor,
                          ]),
                            FRAMEWORK(observerElement).css(observerElementCSS),
                            expandElement.on(_strScroll, onScroll),
                            shrinkElement.on(_strScroll, onScroll),
                            targetElement.on(
                              strAnimationStartEvent,
                              function () {
                                onScroll(!1)
                              }
                            ),
                            (expandChildCSS[_strWidth] = constScroll),
                            (expandChildCSS[_strHeight] = constScroll),
                            expandElementChild.css(expandChildCSS),
                            reset()
                        } else {
                          var attachEvent = _documentElementNative.attachEvent,
                            isIE = _msieVersion !== undefined$1
                          if (attachEvent)
                            targetElement.prepend(
                              generateDiv(_classNameResizeObserverElement)
                            ),
                              findFirst(
                                targetElement,
                                _strDot + _classNameResizeObserverElement
                              )[0].attachEvent('onresize', callback)
                          else {
                            var obj = _documentElementNative.createElement(
                              TYPES.o
                            )
                            obj.setAttribute(LEXICON.ti, '-1'),
                              obj.setAttribute(
                                LEXICON.c,
                                _classNameResizeObserverElement
                              ),
                              (obj.onload = function () {
                                var wnd = this.contentDocument.defaultView
                                wnd.addEventListener('resize', callback),
                                  (wnd.document.documentElement.style.display =
                                    'none')
                              }),
                              (obj.type = 'text/html'),
                              isIE && targetElement.prepend(obj),
                              (obj.data = 'about:blank'),
                              isIE || targetElement.prepend(obj),
                              targetElement.on(strAnimationStartEvent, callback)
                          }
                        }
                        if (targetElement[0] === _sizeObserverElementNative) {
                          var directionChanged = function directionChanged() {
                            var dir = _hostElement.css('direction'),
                              css = {},
                              scrollLeftValue = 0,
                              result = !1
                            return (
                              dir !== _cssDirectionDetectedCache &&
                                ('ltr' === dir
                                  ? ((css[_strLeft] = 0),
                                    (css[_strRight] = _strAuto),
                                    (scrollLeftValue = constScroll))
                                  : ((css[_strLeft] = _strAuto),
                                    (css[_strRight] = 0),
                                    (scrollLeftValue = _rtlScrollBehavior.n
                                      ? -constScroll
                                      : _rtlScrollBehavior.i
                                      ? 0
                                      : constScroll)),
                                _sizeObserverElement.children().eq(0).css(css),
                                _sizeObserverElement[_strScrollLeft](
                                  scrollLeftValue
                                )[_strScrollTop](constScroll),
                                (_cssDirectionDetectedCache = dir),
                                (result = !0)),
                              result
                            )
                          }
                          directionChanged(),
                            addDestroyEventListener(
                              targetElement,
                              _strScroll,
                              function (event) {
                                return (
                                  directionChanged() && update(),
                                  COMPATIBILITY.prvD(event),
                                  COMPATIBILITY.stpP(event),
                                  !1
                                )
                              }
                            )
                        }
                      } else if (_supportResizeObserver) {
                        var element,
                          resizeObserverObj = (element =
                            targetElement.contents()[0])[
                            _strResizeObserverProperty
                          ]
                        resizeObserverObj &&
                          (resizeObserverObj.disconnect(),
                          delete element[_strResizeObserverProperty])
                      } else
                        remove(
                          targetElement
                            .children(_strDot + _classNameResizeObserverElement)
                            .eq(0)
                        )
                    }
                  }
                  function createMutationObservers() {
                    if (_supportMutationObserver) {
                      var mutationTarget,
                        mutationAttrName,
                        mutationIsClass,
                        oldMutationVal,
                        newClassVal,
                        hostClassNameRegex,
                        contentTimeout,
                        now,
                        sizeAuto,
                        action,
                        mutationObserverContentLag = 11,
                        mutationObserver = COMPATIBILITY.mO(),
                        contentLastUpdate = COMPATIBILITY.now()
                      ;(_mutationObserverContentCallback =
                        function _mutationObserverContentCallback(mutations) {
                          var doUpdate = !1
                          return (
                            _initialized &&
                              !_sleeping &&
                              (each(mutations, function () {
                                return !(doUpdate = isUnknownMutation(this))
                              }),
                              doUpdate &&
                                ((now = COMPATIBILITY.now()),
                                (sizeAuto =
                                  _heightAutoCache || _widthAutoCache),
                                (action = function action() {
                                  _destroyed ||
                                    ((contentLastUpdate = now),
                                    _isTextarea && textareaUpdate(),
                                    sizeAuto
                                      ? update()
                                      : _base.update(_strAuto))
                                }),
                                clearTimeout(contentTimeout),
                                mutationObserverContentLag <= 0 ||
                                now - contentLastUpdate >
                                  mutationObserverContentLag ||
                                !sizeAuto
                                  ? action()
                                  : (contentTimeout = setTimeout(
                                      action,
                                      mutationObserverContentLag
                                    )))),
                            doUpdate
                          )
                        }),
                        (_mutationObserverHost = new mutationObserver(
                          (_mutationObserverHostCallback =
                            function _mutationObserverHostCallback(mutations) {
                              var mutation,
                                doUpdate = !1,
                                doUpdateForce = !1,
                                mutatedAttrs = []
                              return (
                                _initialized &&
                                  !_sleeping &&
                                  (each(mutations, function () {
                                    ;(mutationTarget = (mutation = this)
                                      .target),
                                      (mutationAttrName =
                                        mutation.attributeName),
                                      (mutationIsClass =
                                        mutationAttrName === LEXICON.c),
                                      (oldMutationVal = mutation.oldValue),
                                      (newClassVal = mutationTarget.className),
                                      _domExists &&
                                        mutationIsClass &&
                                        !doUpdateForce &&
                                        oldMutationVal.indexOf(
                                          _classNameHostElementForeign
                                        ) > -1 &&
                                        newClassVal.indexOf(
                                          _classNameHostElementForeign
                                        ) < 0 &&
                                        ((hostClassNameRegex =
                                          createHostClassNameRegExp(!0)),
                                        (_hostElementNative.className =
                                          newClassVal
                                            .split(_strSpace)
                                            .concat(
                                              oldMutationVal
                                                .split(_strSpace)
                                                .filter(function (name) {
                                                  return name.match(
                                                    hostClassNameRegex
                                                  )
                                                })
                                            )
                                            .join(_strSpace)),
                                        (doUpdate = doUpdateForce = !0)),
                                      doUpdate ||
                                        (doUpdate = mutationIsClass
                                          ? hostClassNamesChanged(
                                              oldMutationVal,
                                              newClassVal
                                            )
                                          : mutationAttrName !== LEXICON.s ||
                                            oldMutationVal !==
                                              mutationTarget[LEXICON.s]
                                                .cssText),
                                      mutatedAttrs.push(mutationAttrName)
                                  }),
                                  updateViewportAttrsFromTarget(mutatedAttrs),
                                  doUpdate &&
                                    _base.update(doUpdateForce || _strAuto)),
                                doUpdate
                              )
                            })
                        )),
                        (_mutationObserverContent = new mutationObserver(
                          _mutationObserverContentCallback
                        ))
                    }
                  }
                  function connectMutationObservers() {
                    _supportMutationObserver &&
                      !_mutationObserversConnected &&
                      (_mutationObserverHost.observe(_hostElementNative, {
                        attributes: !0,
                        attributeOldValue: !0,
                        attributeFilter: _mutationObserverAttrsHost,
                      }),
                      _mutationObserverContent.observe(
                        _isTextarea
                          ? _targetElementNative
                          : _contentElementNative,
                        {
                          attributes: !0,
                          attributeOldValue: !0,
                          subtree: !_isTextarea,
                          childList: !_isTextarea,
                          characterData: !_isTextarea,
                          attributeFilter: _isTextarea
                            ? _mutationObserverAttrsTextarea
                            : _mutationObserverAttrsHost,
                        }
                      ),
                      (_mutationObserversConnected = !0))
                  }
                  function disconnectMutationObservers() {
                    _supportMutationObserver &&
                      _mutationObserversConnected &&
                      (_mutationObserverHost.disconnect(),
                      _mutationObserverContent.disconnect(),
                      (_mutationObserversConnected = !1))
                  }
                  function hostOnResized() {
                    if (!_sleeping) {
                      var changed,
                        hostSize = {
                          w: _sizeObserverElementNative[LEXICON.sW],
                          h: _sizeObserverElementNative[LEXICON.sH],
                        }
                      ;(changed = checkCache(
                        hostSize,
                        _hostElementSizeChangeDetectedCache
                      )),
                        (_hostElementSizeChangeDetectedCache = hostSize),
                        changed && update({ _hostSizeChanged: !0 })
                    }
                  }
                  function hostOnMouseEnter() {
                    _scrollbarsAutoHideLeave && refreshScrollbarsAutoHide(!0)
                  }
                  function hostOnMouseLeave() {
                    _scrollbarsAutoHideLeave &&
                      !_bodyElement.hasClass(_classNameDragging) &&
                      refreshScrollbarsAutoHide(!1)
                  }
                  function hostOnMouseMove() {
                    _scrollbarsAutoHideMove &&
                      (refreshScrollbarsAutoHide(!0),
                      clearTimeout(_scrollbarsAutoHideMoveTimeoutId),
                      (_scrollbarsAutoHideMoveTimeoutId = setTimeout(
                        function () {
                          _scrollbarsAutoHideMove &&
                            !_destroyed &&
                            refreshScrollbarsAutoHide(!1)
                        },
                        100
                      )))
                  }
                  function documentOnSelectStart(event) {
                    return COMPATIBILITY.prvD(event), !1
                  }
                  function updateOnLoadCallback(event) {
                    var elm = FRAMEWORK(event.target)
                    eachUpdateOnLoad(function (i, updateOnLoadSelector) {
                      elm.is(updateOnLoadSelector) &&
                        update({ _contentSizeChanged: !0 })
                    })
                  }
                  function setupHostMouseTouchEvents(destroy) {
                    destroy || setupHostMouseTouchEvents(!0),
                      setupResponsiveEventListener(
                        _hostElement,
                        _strMouseTouchMoveEvent.split(_strSpace)[0],
                        hostOnMouseMove,
                        !_scrollbarsAutoHideMove || destroy,
                        !0
                      ),
                      setupResponsiveEventListener(
                        _hostElement,
                        [_strMouseEnter, _strMouseLeave],
                        [hostOnMouseEnter, hostOnMouseLeave],
                        !_scrollbarsAutoHideLeave || destroy,
                        !0
                      ),
                      _initialized ||
                        destroy ||
                        _hostElement.one('mouseover', hostOnMouseEnter)
                  }
                  function bodyMinSizeChanged() {
                    var bodyMinSize = {}
                    return (
                      _isBody &&
                        _contentArrangeElement &&
                        ((bodyMinSize.w = parseToZeroOrNumber(
                          _contentArrangeElement.css(_strMinMinus + _strWidth)
                        )),
                        (bodyMinSize.h = parseToZeroOrNumber(
                          _contentArrangeElement.css(_strMinMinus + _strHeight)
                        )),
                        (bodyMinSize.c = checkCache(
                          bodyMinSize,
                          _bodyMinSizeCache
                        )),
                        (bodyMinSize.f = !0)),
                      (_bodyMinSizeCache = bodyMinSize),
                      !!bodyMinSize.c
                    )
                  }
                  function hostClassNamesChanged(oldClassNames, newClassNames) {
                    var i,
                      regex,
                      currClasses =
                        _typeof(newClassNames) == TYPES.s
                          ? newClassNames.split(_strSpace)
                          : [],
                      diff = getArrayDifferences(
                        _typeof(oldClassNames) == TYPES.s
                          ? oldClassNames.split(_strSpace)
                          : [],
                        currClasses
                      ),
                      idx = inArray(_classNameThemeNone, diff)
                    if ((idx > -1 && diff.splice(idx, 1), diff[LEXICON.l] > 0))
                      for (
                        regex = createHostClassNameRegExp(!0, !0), i = 0;
                        i < diff.length;
                        i++
                      )
                        if (!diff[i].match(regex)) return !0
                    return !1
                  }
                  function isUnknownMutation(mutation) {
                    var attributeName = mutation.attributeName,
                      mutationTarget = mutation.target,
                      mutationType = mutation.type,
                      strClosest = 'closest'
                    if (mutationTarget === _contentElementNative)
                      return null === attributeName
                    if (
                      'attributes' === mutationType &&
                      (attributeName === LEXICON.c ||
                        attributeName === LEXICON.s) &&
                      !_isTextarea
                    ) {
                      if (
                        attributeName === LEXICON.c &&
                        FRAMEWORK(mutationTarget).hasClass(
                          _classNameHostElement
                        )
                      )
                        return hostClassNamesChanged(
                          mutation.oldValue,
                          mutationTarget.className
                        )
                      if (_typeof(mutationTarget[strClosest]) != TYPES.f)
                        return !0
                      if (
                        null !==
                          mutationTarget[strClosest](
                            _strDot + _classNameResizeObserverElement
                          ) ||
                        null !==
                          mutationTarget[strClosest](
                            _strDot + _classNameScrollbar
                          ) ||
                        null !==
                          mutationTarget[strClosest](
                            _strDot + _classNameScrollbarCorner
                          )
                      )
                        return !1
                    }
                    return !0
                  }
                  function updateAutoContentSizeChanged() {
                    if (_sleeping) return !1
                    var float,
                      bodyMinSizeC,
                      changed,
                      contentElementScrollSize,
                      contentMeasureElement = getContentMeasureElement(),
                      textareaValueLength =
                        _isTextarea &&
                        _widthAutoCache &&
                        !_textareaAutoWrappingCache
                          ? _targetElement.val().length
                          : 0,
                      setCSS =
                        !_mutationObserversConnected &&
                        _widthAutoCache &&
                        !_isTextarea,
                      css = {}
                    return (
                      setCSS &&
                        ((float = _contentElement.css(_strFloat)),
                        (css[_strFloat] = _isRTL ? _strRight : _strLeft),
                        (css[_strWidth] = _strAuto),
                        _contentElement.css(css)),
                      (contentElementScrollSize = {
                        w:
                          contentMeasureElement[LEXICON.sW] +
                          textareaValueLength,
                        h:
                          contentMeasureElement[LEXICON.sH] +
                          textareaValueLength,
                      }),
                      setCSS &&
                        ((css[_strFloat] = float),
                        (css[_strWidth] = _strHundredPercent),
                        _contentElement.css(css)),
                      (bodyMinSizeC = bodyMinSizeChanged()),
                      (changed = checkCache(
                        contentElementScrollSize,
                        _contentElementScrollSizeChangeDetectedCache
                      )),
                      (_contentElementScrollSizeChangeDetectedCache =
                        contentElementScrollSize),
                      changed || bodyMinSizeC
                    )
                  }
                  function meaningfulAttrsChanged() {
                    if (!_sleeping && !_mutationObserversConnected) {
                      var elem,
                        curr,
                        cache,
                        changedAttrs = [],
                        checks = [
                          {
                            _elem: _hostElement,
                            _attrs:
                              _mutationObserverAttrsHost.concat(':visible'),
                          },
                          {
                            _elem: _isTextarea ? _targetElement : undefined$1,
                            _attrs: _mutationObserverAttrsTextarea,
                          },
                        ]
                      return (
                        each(checks, function (index, check) {
                          ;(elem = check._elem) &&
                            each(check._attrs, function (index, attr) {
                              ;(curr =
                                ':' === attr.charAt(0)
                                  ? elem.is(attr)
                                  : elem.attr(attr)),
                                (cache = _updateAutoCache[attr]),
                                checkCache(curr, cache) &&
                                  changedAttrs.push(attr),
                                (_updateAutoCache[attr] = curr)
                            })
                        }),
                        updateViewportAttrsFromTarget(changedAttrs),
                        changedAttrs[LEXICON.l] > 0
                      )
                    }
                  }
                  function isSizeAffectingCSSProperty(propertyName) {
                    if (!_initialized) return !0
                    var flexGrow = 'flex-grow',
                      flexShrink = 'flex-shrink',
                      flexBasis = 'flex-basis',
                      affectingPropsX = [
                        _strWidth,
                        _strMinMinus + _strWidth,
                        _strMaxMinus + _strWidth,
                        _strMarginMinus + _strLeft,
                        _strMarginMinus + _strRight,
                        _strLeft,
                        _strRight,
                        'font-weight',
                        'word-spacing',
                        flexGrow,
                        flexShrink,
                        flexBasis,
                      ],
                      affectingPropsXContentBox = [
                        _strPaddingMinus + _strLeft,
                        _strPaddingMinus + _strRight,
                        _strBorderMinus + _strLeft + _strWidth,
                        _strBorderMinus + _strRight + _strWidth,
                      ],
                      affectingPropsY = [
                        _strHeight,
                        _strMinMinus + _strHeight,
                        _strMaxMinus + _strHeight,
                        _strMarginMinus + _strTop,
                        _strMarginMinus + _strBottom,
                        _strTop,
                        _strBottom,
                        'line-height',
                        flexGrow,
                        flexShrink,
                        flexBasis,
                      ],
                      affectingPropsYContentBox = [
                        _strPaddingMinus + _strTop,
                        _strPaddingMinus + _strBottom,
                        _strBorderMinus + _strTop + _strWidth,
                        _strBorderMinus + _strBottom + _strWidth,
                      ],
                      _strS = 's',
                      _strVS = 'v-s',
                      checkX =
                        _overflowBehaviorCache.x === _strS ||
                        _overflowBehaviorCache.x === _strVS,
                      sizeIsAffected = !1,
                      checkPropertyName = function checkPropertyName(
                        arr,
                        name
                      ) {
                        for (var i = 0; i < arr[LEXICON.l]; i++)
                          if (arr[i] === name) return !0
                        return !1
                      }
                    return (
                      (_overflowBehaviorCache.y === _strS ||
                        _overflowBehaviorCache.y === _strVS) &&
                        ((sizeIsAffected = checkPropertyName(
                          affectingPropsY,
                          propertyName
                        )) ||
                          _isBorderBox ||
                          (sizeIsAffected = checkPropertyName(
                            affectingPropsYContentBox,
                            propertyName
                          ))),
                      checkX &&
                        !sizeIsAffected &&
                        ((sizeIsAffected = checkPropertyName(
                          affectingPropsX,
                          propertyName
                        )) ||
                          _isBorderBox ||
                          (sizeIsAffected = checkPropertyName(
                            affectingPropsXContentBox,
                            propertyName
                          ))),
                      sizeIsAffected
                    )
                  }
                  function updateViewportAttrsFromTarget(attrs) {
                    each(
                      (attrs = attrs || _viewportAttrsFromTarget),
                      function (index, attr) {
                        if (
                          COMPATIBILITY.inA(attr, _viewportAttrsFromTarget) > -1
                        ) {
                          var targetAttr = _targetElement.attr(attr)
                          type(targetAttr) == TYPES.s
                            ? _viewportElement.attr(attr, targetAttr)
                            : _viewportElement.removeAttr(attr)
                        }
                      }
                    )
                  }
                  function textareaUpdate() {
                    if (!_sleeping) {
                      var origWidth,
                        width,
                        origHeight,
                        height,
                        wrapAttrOff = !_textareaAutoWrappingCache,
                        minWidth = _viewportSize.w,
                        minHeight = _viewportSize.h,
                        css = {},
                        doMeasure = _widthAutoCache || wrapAttrOff
                      return (
                        (css[_strMinMinus + _strWidth] = _strEmpty),
                        (css[_strMinMinus + _strHeight] = _strEmpty),
                        (css[_strWidth] = _strAuto),
                        _targetElement.css(css),
                        (origWidth = _targetElementNative[LEXICON.oW]),
                        (width = doMeasure
                          ? MATH.max(
                              origWidth,
                              _targetElementNative[LEXICON.sW] - 1
                            )
                          : 1),
                        (css[_strWidth] = _widthAutoCache
                          ? _strAuto
                          : _strHundredPercent),
                        (css[_strMinMinus + _strWidth] = _strHundredPercent),
                        (css[_strHeight] = _strAuto),
                        _targetElement.css(css),
                        (origHeight = _targetElementNative[LEXICON.oH]),
                        (height = MATH.max(
                          origHeight,
                          _targetElementNative[LEXICON.sH] - 1
                        )),
                        (css[_strWidth] = width),
                        (css[_strHeight] = height),
                        _textareaCoverElement.css(css),
                        (css[_strMinMinus + _strWidth] = minWidth),
                        (css[_strMinMinus + _strHeight] = minHeight),
                        _targetElement.css(css),
                        {
                          _originalWidth: origWidth,
                          _originalHeight: origHeight,
                          _dynamicWidth: width,
                          _dynamicHeight: height,
                        }
                      )
                    }
                  }
                  function update(updateHints) {
                    clearTimeout(_swallowedUpdateTimeout),
                      (updateHints = updateHints || {}),
                      (_swallowedUpdateHints._hostSizeChanged |=
                        updateHints._hostSizeChanged),
                      (_swallowedUpdateHints._contentSizeChanged |=
                        updateHints._contentSizeChanged),
                      (_swallowedUpdateHints._force |= updateHints._force)
                    var displayIsHidden,
                      now = COMPATIBILITY.now(),
                      hostSizeChanged =
                        !!_swallowedUpdateHints._hostSizeChanged,
                      contentSizeChanged =
                        !!_swallowedUpdateHints._contentSizeChanged,
                      force = !!_swallowedUpdateHints._force,
                      changedOptions = updateHints._changedOptions,
                      swallow =
                        _initialized &&
                        !_destroyed &&
                        !force &&
                        !changedOptions &&
                        now - _lastUpdateTime < _swallowUpdateLag &&
                        !_heightAutoCache &&
                        !_widthAutoCache
                    if (
                      (swallow &&
                        (_swallowedUpdateTimeout = setTimeout(
                          update,
                          _swallowUpdateLag
                        )),
                      !(
                        _destroyed ||
                        swallow ||
                        (_sleeping && !changedOptions) ||
                        (_initialized &&
                          !force &&
                          (displayIsHidden = _hostElement.is(':hidden'))) ||
                        'inline' === _hostElement.css('display')
                      ))
                    ) {
                      ;(_lastUpdateTime = now),
                        (_swallowedUpdateHints = {}),
                        !_nativeScrollbarStyling ||
                        (_nativeScrollbarIsOverlaid.x &&
                          _nativeScrollbarIsOverlaid.y)
                          ? (_nativeScrollbarSize = extendDeep(
                              {},
                              globals.nativeScrollbarSize
                            ))
                          : ((_nativeScrollbarSize.x = 0),
                            (_nativeScrollbarSize.y = 0)),
                        (_nativeScrollbarMinSize = {
                          x:
                            3 *
                            (_nativeScrollbarSize.x +
                              (_nativeScrollbarIsOverlaid.x ? 0 : 3)),
                          y:
                            3 *
                            (_nativeScrollbarSize.y +
                              (_nativeScrollbarIsOverlaid.y ? 0 : 3)),
                        }),
                        (changedOptions = changedOptions || {})
                      var checkCacheAutoForce = function checkCacheAutoForce() {
                          return checkCache.apply(
                            this,
                            [].slice.call(arguments).concat([force])
                          )
                        },
                        currScroll = {
                          x: _viewportElement[_strScrollLeft](),
                          y: _viewportElement[_strScrollTop](),
                        },
                        currentPreparedOptionsScrollbars =
                          _currentPreparedOptions.scrollbars,
                        currentPreparedOptionsTextarea =
                          _currentPreparedOptions.textarea,
                        scrollbarsVisibility =
                          currentPreparedOptionsScrollbars.visibility,
                        scrollbarsVisibilityChanged = checkCacheAutoForce(
                          scrollbarsVisibility,
                          _scrollbarsVisibilityCache
                        ),
                        scrollbarsAutoHide =
                          currentPreparedOptionsScrollbars.autoHide,
                        scrollbarsAutoHideChanged = checkCacheAutoForce(
                          scrollbarsAutoHide,
                          _scrollbarsAutoHideCache
                        ),
                        scrollbarsClickScrolling =
                          currentPreparedOptionsScrollbars.clickScrolling,
                        scrollbarsClickScrollingChanged = checkCacheAutoForce(
                          scrollbarsClickScrolling,
                          _scrollbarsClickScrollingCache
                        ),
                        scrollbarsDragScrolling =
                          currentPreparedOptionsScrollbars.dragScrolling,
                        scrollbarsDragScrollingChanged = checkCacheAutoForce(
                          scrollbarsDragScrolling,
                          _scrollbarsDragScrollingCache
                        ),
                        className = _currentPreparedOptions.className,
                        classNameChanged = checkCacheAutoForce(
                          className,
                          _classNameCache
                        ),
                        resize = _currentPreparedOptions.resize,
                        resizeChanged =
                          checkCacheAutoForce(resize, _resizeCache) && !_isBody,
                        paddingAbsolute =
                          _currentPreparedOptions.paddingAbsolute,
                        paddingAbsoluteChanged = checkCacheAutoForce(
                          paddingAbsolute,
                          _paddingAbsoluteCache
                        ),
                        clipAlways = _currentPreparedOptions.clipAlways,
                        clipAlwaysChanged = checkCacheAutoForce(
                          clipAlways,
                          _clipAlwaysCache
                        ),
                        sizeAutoCapable =
                          _currentPreparedOptions.sizeAutoCapable && !_isBody,
                        sizeAutoCapableChanged = checkCacheAutoForce(
                          sizeAutoCapable,
                          _sizeAutoCapableCache
                        ),
                        ignoreOverlayScrollbarHiding =
                          _currentPreparedOptions.nativeScrollbarsOverlaid
                            .showNativeScrollbars,
                        ignoreOverlayScrollbarHidingChanged =
                          checkCacheAutoForce(
                            ignoreOverlayScrollbarHiding,
                            _ignoreOverlayScrollbarHidingCache
                          ),
                        autoUpdate = _currentPreparedOptions.autoUpdate,
                        autoUpdateChanged = checkCacheAutoForce(
                          autoUpdate,
                          _autoUpdateCache
                        ),
                        overflowBehavior =
                          _currentPreparedOptions.overflowBehavior,
                        overflowBehaviorChanged = checkCacheAutoForce(
                          overflowBehavior,
                          _overflowBehaviorCache,
                          force
                        ),
                        textareaDynWidth =
                          currentPreparedOptionsTextarea.dynWidth,
                        textareaDynWidthChanged = checkCacheAutoForce(
                          _textareaDynWidthCache,
                          textareaDynWidth
                        ),
                        textareaDynHeight =
                          currentPreparedOptionsTextarea.dynHeight,
                        textareaDynHeightChanged = checkCacheAutoForce(
                          _textareaDynHeightCache,
                          textareaDynHeight
                        )
                      if (
                        ((_scrollbarsAutoHideNever =
                          'n' === scrollbarsAutoHide),
                        (_scrollbarsAutoHideScroll =
                          's' === scrollbarsAutoHide),
                        (_scrollbarsAutoHideMove = 'm' === scrollbarsAutoHide),
                        (_scrollbarsAutoHideLeave = 'l' === scrollbarsAutoHide),
                        (_scrollbarsAutoHideDelay =
                          currentPreparedOptionsScrollbars.autoHideDelay),
                        (_oldClassName = _classNameCache),
                        (_resizeNone = 'n' === resize),
                        (_resizeBoth = 'b' === resize),
                        (_resizeHorizontal = 'h' === resize),
                        (_resizeVertical = 'v' === resize),
                        (_normalizeRTLCache =
                          _currentPreparedOptions.normalizeRTL),
                        (ignoreOverlayScrollbarHiding =
                          ignoreOverlayScrollbarHiding &&
                          _nativeScrollbarIsOverlaid.x &&
                          _nativeScrollbarIsOverlaid.y),
                        (_scrollbarsVisibilityCache = scrollbarsVisibility),
                        (_scrollbarsAutoHideCache = scrollbarsAutoHide),
                        (_scrollbarsClickScrollingCache =
                          scrollbarsClickScrolling),
                        (_scrollbarsDragScrollingCache =
                          scrollbarsDragScrolling),
                        (_classNameCache = className),
                        (_resizeCache = resize),
                        (_paddingAbsoluteCache = paddingAbsolute),
                        (_clipAlwaysCache = clipAlways),
                        (_sizeAutoCapableCache = sizeAutoCapable),
                        (_ignoreOverlayScrollbarHidingCache =
                          ignoreOverlayScrollbarHiding),
                        (_autoUpdateCache = autoUpdate),
                        (_overflowBehaviorCache = extendDeep(
                          {},
                          overflowBehavior
                        )),
                        (_textareaDynWidthCache = textareaDynWidth),
                        (_textareaDynHeightCache = textareaDynHeight),
                        (_hasOverflowCache = _hasOverflowCache || {
                          x: !1,
                          y: !1,
                        }),
                        classNameChanged &&
                          (removeClass(
                            _hostElement,
                            _oldClassName + _strSpace + _classNameThemeNone
                          ),
                          addClass(
                            _hostElement,
                            className !== undefined$1 &&
                              null !== className &&
                              className.length > 0
                              ? className
                              : _classNameThemeNone
                          )),
                        autoUpdateChanged &&
                          (!0 === autoUpdate ||
                          (null === autoUpdate && _autoUpdateRecommended)
                            ? (disconnectMutationObservers(),
                              autoUpdateLoop.add(_base))
                            : (autoUpdateLoop.remove(_base),
                              connectMutationObservers())),
                        sizeAutoCapableChanged)
                      )
                        if (sizeAutoCapable)
                          if (
                            (_contentGlueElement
                              ? _contentGlueElement.show()
                              : ((_contentGlueElement = FRAMEWORK(
                                  generateDiv(_classNameContentGlueElement)
                                )),
                                _paddingElement.before(_contentGlueElement)),
                            _sizeAutoObserverAdded)
                          )
                            _sizeAutoObserverElement.show()
                          else {
                            ;(_sizeAutoObserverElement = FRAMEWORK(
                              generateDiv(_classNameSizeAutoObserverElement)
                            )),
                              (_sizeAutoObserverElementNative =
                                _sizeAutoObserverElement[0]),
                              _contentGlueElement.before(
                                _sizeAutoObserverElement
                              )
                            var oldSize = { w: -1, h: -1 }
                            setupResizeObserver(
                              _sizeAutoObserverElement,
                              function () {
                                var newSize = {
                                  w: _sizeAutoObserverElementNative[LEXICON.oW],
                                  h: _sizeAutoObserverElementNative[LEXICON.oH],
                                }
                                checkCache(newSize, oldSize) &&
                                  ((_initialized &&
                                    _heightAutoCache &&
                                    newSize.h > 0) ||
                                    (_widthAutoCache && newSize.w > 0) ||
                                    (_initialized &&
                                      !_heightAutoCache &&
                                      0 === newSize.h) ||
                                    (!_widthAutoCache && 0 === newSize.w)) &&
                                  update(),
                                  (oldSize = newSize)
                              }
                            ),
                              (_sizeAutoObserverAdded = !0),
                              null !== _cssCalc &&
                                _sizeAutoObserverElement.css(
                                  _strHeight,
                                  _cssCalc + '(100% + 1px)'
                                )
                          }
                        else
                          _sizeAutoObserverAdded &&
                            _sizeAutoObserverElement.hide(),
                            _contentGlueElement && _contentGlueElement.hide()
                      force &&
                        (_sizeObserverElement.find('*').trigger(_strScroll),
                        _sizeAutoObserverAdded &&
                          _sizeAutoObserverElement
                            .find('*')
                            .trigger(_strScroll)),
                        (displayIsHidden =
                          displayIsHidden === undefined$1
                            ? _hostElement.is(':hidden')
                            : displayIsHidden)
                      var sizeAutoObserverElementBCRect,
                        textareaAutoWrapping =
                          !!_isTextarea &&
                          'off' !== _targetElement.attr('wrap'),
                        textareaAutoWrappingChanged = checkCacheAutoForce(
                          textareaAutoWrapping,
                          _textareaAutoWrappingCache
                        ),
                        cssDirection = _hostElement.css('direction'),
                        cssDirectionChanged = checkCacheAutoForce(
                          cssDirection,
                          _cssDirectionCache
                        ),
                        boxSizing = _hostElement.css('box-sizing'),
                        boxSizingChanged = checkCacheAutoForce(
                          boxSizing,
                          _cssBoxSizingCache
                        ),
                        padding = getTopRightBottomLeftHost(_strPaddingMinus)
                      try {
                        sizeAutoObserverElementBCRect = _sizeAutoObserverAdded
                          ? _sizeAutoObserverElementNative[LEXICON.bCR]()
                          : null
                      } catch (ex) {
                        return
                      }
                      _isBorderBox = 'border-box' === boxSizing
                      var isRTLLeft = (_isRTL = 'rtl' === cssDirection)
                          ? _strLeft
                          : _strRight,
                        isRTLRight = _isRTL ? _strRight : _strLeft,
                        widthAutoResizeDetection = !1,
                        widthAutoObserverDetection =
                          !(
                            !_sizeAutoObserverAdded ||
                            'none' === _hostElement.css(_strFloat)
                          ) &&
                          0 ===
                            MATH.round(
                              sizeAutoObserverElementBCRect.right -
                                sizeAutoObserverElementBCRect.left
                            ) &&
                          (!!paddingAbsolute ||
                            _hostElementNative[LEXICON.cW] - _paddingX > 0)
                      if (sizeAutoCapable && !widthAutoObserverDetection) {
                        var tmpCurrHostWidth = _hostElementNative[LEXICON.oW],
                          tmpCurrContentGlueWidth =
                            _contentGlueElement.css(_strWidth)
                        _contentGlueElement.css(_strWidth, _strAuto)
                        var tmpNewHostWidth = _hostElementNative[LEXICON.oW]
                        _contentGlueElement.css(
                          _strWidth,
                          tmpCurrContentGlueWidth
                        ),
                          (widthAutoResizeDetection =
                            tmpCurrHostWidth !== tmpNewHostWidth) ||
                            (_contentGlueElement.css(
                              _strWidth,
                              tmpCurrHostWidth + 1
                            ),
                            (tmpNewHostWidth = _hostElementNative[LEXICON.oW]),
                            _contentGlueElement.css(
                              _strWidth,
                              tmpCurrContentGlueWidth
                            ),
                            (widthAutoResizeDetection =
                              tmpCurrHostWidth !== tmpNewHostWidth))
                      }
                      var widthAuto =
                          (widthAutoObserverDetection ||
                            widthAutoResizeDetection) &&
                          sizeAutoCapable &&
                          !displayIsHidden,
                        widthAutoChanged = checkCacheAutoForce(
                          widthAuto,
                          _widthAutoCache
                        ),
                        wasWidthAuto = !widthAuto && _widthAutoCache,
                        heightAuto =
                          !(
                            !_sizeAutoObserverAdded ||
                            !sizeAutoCapable ||
                            displayIsHidden
                          ) &&
                          0 ===
                            MATH.round(
                              sizeAutoObserverElementBCRect.bottom -
                                sizeAutoObserverElementBCRect.top
                            ),
                        heightAutoChanged = checkCacheAutoForce(
                          heightAuto,
                          _heightAutoCache
                        ),
                        wasHeightAuto = !heightAuto && _heightAutoCache,
                        border = getTopRightBottomLeftHost(
                          _strBorderMinus,
                          '-' + _strWidth,
                          !((widthAuto && _isBorderBox) || !_isBorderBox),
                          !((heightAuto && _isBorderBox) || !_isBorderBox)
                        ),
                        margin = getTopRightBottomLeftHost(_strMarginMinus),
                        contentElementCSS = {},
                        contentGlueElementCSS = {},
                        getHostSize = function getHostSize() {
                          return {
                            w: _hostElementNative[LEXICON.cW],
                            h: _hostElementNative[LEXICON.cH],
                          }
                        },
                        getViewportSize = function getViewportSize() {
                          return {
                            w:
                              _paddingElementNative[LEXICON.oW] +
                              MATH.max(
                                0,
                                _contentElementNative[LEXICON.cW] -
                                  _contentElementNative[LEXICON.sW]
                              ),
                            h:
                              _paddingElementNative[LEXICON.oH] +
                              MATH.max(
                                0,
                                _contentElementNative[LEXICON.cH] -
                                  _contentElementNative[LEXICON.sH]
                              ),
                          }
                        },
                        paddingAbsoluteX = (_paddingX = padding.l + padding.r),
                        paddingAbsoluteY = (_paddingY = padding.t + padding.b)
                      if (
                        ((paddingAbsoluteX *= paddingAbsolute ? 1 : 0),
                        (paddingAbsoluteY *= paddingAbsolute ? 1 : 0),
                        (padding.c = checkCacheAutoForce(
                          padding,
                          _cssPaddingCache
                        )),
                        (_borderX = border.l + border.r),
                        (_borderY = border.t + border.b),
                        (border.c = checkCacheAutoForce(
                          border,
                          _cssBorderCache
                        )),
                        (_marginX = margin.l + margin.r),
                        (_marginY = margin.t + margin.b),
                        (margin.c = checkCacheAutoForce(
                          margin,
                          _cssMarginCache
                        )),
                        (_textareaAutoWrappingCache = textareaAutoWrapping),
                        (_cssDirectionCache = cssDirection),
                        (_cssBoxSizingCache = boxSizing),
                        (_widthAutoCache = widthAuto),
                        (_heightAutoCache = heightAuto),
                        (_cssPaddingCache = padding),
                        (_cssBorderCache = border),
                        (_cssMarginCache = margin),
                        cssDirectionChanged &&
                          _sizeAutoObserverAdded &&
                          _sizeAutoObserverElement.css(_strFloat, isRTLRight),
                        padding.c ||
                          cssDirectionChanged ||
                          paddingAbsoluteChanged ||
                          widthAutoChanged ||
                          heightAutoChanged ||
                          boxSizingChanged ||
                          sizeAutoCapableChanged)
                      ) {
                        var paddingElementCSS = {},
                          textareaCSS = {},
                          paddingValues = [
                            padding.t,
                            padding.r,
                            padding.b,
                            padding.l,
                          ]
                        setTopRightBottomLeft(
                          contentGlueElementCSS,
                          _strMarginMinus,
                          [-padding.t, -padding.r, -padding.b, -padding.l]
                        ),
                          paddingAbsolute
                            ? (setTopRightBottomLeft(
                                paddingElementCSS,
                                _strEmpty,
                                paddingValues
                              ),
                              setTopRightBottomLeft(
                                _isTextarea ? textareaCSS : contentElementCSS,
                                _strPaddingMinus
                              ))
                            : (setTopRightBottomLeft(
                                paddingElementCSS,
                                _strEmpty
                              ),
                              setTopRightBottomLeft(
                                _isTextarea ? textareaCSS : contentElementCSS,
                                _strPaddingMinus,
                                paddingValues
                              )),
                          _paddingElement.css(paddingElementCSS),
                          _targetElement.css(textareaCSS)
                      }
                      _viewportSize = getViewportSize()
                      var textareaSize = !!_isTextarea && textareaUpdate(),
                        textareaSizeChanged =
                          _isTextarea &&
                          checkCacheAutoForce(textareaSize, _textareaSizeCache),
                        textareaDynOrigSize =
                          _isTextarea && textareaSize
                            ? {
                                w: textareaDynWidth
                                  ? textareaSize._dynamicWidth
                                  : textareaSize._originalWidth,
                                h: textareaDynHeight
                                  ? textareaSize._dynamicHeight
                                  : textareaSize._originalHeight,
                              }
                            : {}
                      if (
                        ((_textareaSizeCache = textareaSize),
                        heightAuto &&
                        (heightAutoChanged ||
                          paddingAbsoluteChanged ||
                          boxSizingChanged ||
                          padding.c ||
                          border.c)
                          ? (contentElementCSS[_strHeight] = _strAuto)
                          : (heightAutoChanged || paddingAbsoluteChanged) &&
                            (contentElementCSS[_strHeight] =
                              _strHundredPercent),
                        widthAuto &&
                        (widthAutoChanged ||
                          paddingAbsoluteChanged ||
                          boxSizingChanged ||
                          padding.c ||
                          border.c ||
                          cssDirectionChanged)
                          ? ((contentElementCSS[_strWidth] = _strAuto),
                            (contentGlueElementCSS[_strMaxMinus + _strWidth] =
                              _strHundredPercent))
                          : (widthAutoChanged || paddingAbsoluteChanged) &&
                            ((contentElementCSS[_strWidth] =
                              _strHundredPercent),
                            (contentElementCSS[_strFloat] = _strEmpty),
                            (contentGlueElementCSS[_strMaxMinus + _strWidth] =
                              _strEmpty)),
                        widthAuto
                          ? ((contentGlueElementCSS[_strWidth] = _strAuto),
                            (contentElementCSS[_strWidth] =
                              VENDORS._cssPropertyValue(
                                _strWidth,
                                'max-content intrinsic'
                              ) || _strAuto),
                            (contentElementCSS[_strFloat] = isRTLRight))
                          : (contentGlueElementCSS[_strWidth] = _strEmpty),
                        (contentGlueElementCSS[_strHeight] = heightAuto
                          ? textareaDynOrigSize.h ||
                            _contentElementNative[LEXICON.cH]
                          : _strEmpty),
                        sizeAutoCapable &&
                          _contentGlueElement.css(contentGlueElementCSS),
                        _contentElement.css(contentElementCSS),
                        (contentElementCSS = {}),
                        (contentGlueElementCSS = {}),
                        hostSizeChanged ||
                          contentSizeChanged ||
                          textareaSizeChanged ||
                          cssDirectionChanged ||
                          boxSizingChanged ||
                          paddingAbsoluteChanged ||
                          widthAutoChanged ||
                          widthAuto ||
                          heightAutoChanged ||
                          heightAuto ||
                          ignoreOverlayScrollbarHidingChanged ||
                          overflowBehaviorChanged ||
                          clipAlwaysChanged ||
                          resizeChanged ||
                          scrollbarsVisibilityChanged ||
                          scrollbarsAutoHideChanged ||
                          scrollbarsDragScrollingChanged ||
                          scrollbarsClickScrollingChanged ||
                          textareaDynWidthChanged ||
                          textareaDynHeightChanged ||
                          textareaAutoWrappingChanged)
                      ) {
                        var strOverflow = 'overflow',
                          strOverflowX = strOverflow + '-x',
                          strOverflowY = strOverflow + '-y',
                          strHidden = 'hidden',
                          strVisible = 'visible'
                        if (!_nativeScrollbarStyling) {
                          var viewportElementResetCSS = {},
                            resetXTmp =
                              _hasOverflowCache.y &&
                              _hideOverflowCache.ys &&
                              !ignoreOverlayScrollbarHiding
                                ? _nativeScrollbarIsOverlaid.y
                                  ? _viewportElement.css(isRTLLeft)
                                  : -_nativeScrollbarSize.y
                                : 0,
                            resetBottomTmp =
                              _hasOverflowCache.x &&
                              _hideOverflowCache.xs &&
                              !ignoreOverlayScrollbarHiding
                                ? _nativeScrollbarIsOverlaid.x
                                  ? _viewportElement.css(_strBottom)
                                  : -_nativeScrollbarSize.x
                                : 0
                          setTopRightBottomLeft(
                            viewportElementResetCSS,
                            _strEmpty
                          ),
                            _viewportElement.css(viewportElementResetCSS)
                        }
                        var contentMeasureElement = getContentMeasureElement(),
                          contentSize = {
                            w:
                              textareaDynOrigSize.w ||
                              contentMeasureElement[LEXICON.cW],
                            h:
                              textareaDynOrigSize.h ||
                              contentMeasureElement[LEXICON.cH],
                          },
                          scrollSize = {
                            w: contentMeasureElement[LEXICON.sW],
                            h: contentMeasureElement[LEXICON.sH],
                          }
                        _nativeScrollbarStyling ||
                          ((viewportElementResetCSS[_strBottom] = wasHeightAuto
                            ? _strEmpty
                            : resetBottomTmp),
                          (viewportElementResetCSS[isRTLLeft] = wasWidthAuto
                            ? _strEmpty
                            : resetXTmp),
                          _viewportElement.css(viewportElementResetCSS)),
                          (_viewportSize = getViewportSize())
                        var hostSize = getHostSize(),
                          hostAbsoluteRectSize = {
                            w:
                              hostSize.w -
                              _marginX -
                              _borderX -
                              (_isBorderBox ? 0 : _paddingX),
                            h:
                              hostSize.h -
                              _marginY -
                              _borderY -
                              (_isBorderBox ? 0 : _paddingY),
                          },
                          contentGlueSize = {
                            w: MATH.max(
                              (widthAuto ? contentSize.w : scrollSize.w) +
                                paddingAbsoluteX,
                              hostAbsoluteRectSize.w
                            ),
                            h: MATH.max(
                              (heightAuto ? contentSize.h : scrollSize.h) +
                                paddingAbsoluteY,
                              hostAbsoluteRectSize.h
                            ),
                          }
                        if (
                          ((contentGlueSize.c = checkCacheAutoForce(
                            contentGlueSize,
                            _contentGlueSizeCache
                          )),
                          (_contentGlueSizeCache = contentGlueSize),
                          sizeAutoCapable)
                        ) {
                          ;(contentGlueSize.c || heightAuto || widthAuto) &&
                            ((contentGlueElementCSS[_strWidth] =
                              contentGlueSize.w),
                            (contentGlueElementCSS[_strHeight] =
                              contentGlueSize.h),
                            _isTextarea ||
                              (contentSize = {
                                w: contentMeasureElement[LEXICON.cW],
                                h: contentMeasureElement[LEXICON.cH],
                              }))
                          var textareaCoverCSS = {},
                            setContentGlueElementCSSfunction =
                              function setContentGlueElementCSSfunction(
                                horizontal
                              ) {
                                var scrollbarVars =
                                    getScrollbarVars(horizontal),
                                  wh = scrollbarVars._w_h,
                                  strWH = scrollbarVars._width_height,
                                  autoSize = horizontal
                                    ? widthAuto
                                    : heightAuto,
                                  borderSize = horizontal ? _borderX : _borderY,
                                  paddingSize = horizontal
                                    ? _paddingX
                                    : _paddingY,
                                  marginSize = horizontal ? _marginX : _marginY,
                                  viewportSize =
                                    _viewportSize[wh] -
                                    borderSize -
                                    marginSize -
                                    (_isBorderBox ? 0 : paddingSize)
                                ;(!autoSize || (!autoSize && border.c)) &&
                                  (contentGlueElementCSS[strWH] =
                                    hostAbsoluteRectSize[wh] - 1),
                                  !(
                                    autoSize && contentSize[wh] < viewportSize
                                  ) ||
                                    (horizontal &&
                                      _isTextarea &&
                                      textareaAutoWrapping) ||
                                    (_isTextarea &&
                                      (textareaCoverCSS[strWH] =
                                        parseToZeroOrNumber(
                                          _textareaCoverElement.css(strWH)
                                        ) - 1),
                                    (contentGlueElementCSS[strWH] -= 1)),
                                  contentSize[wh] > 0 &&
                                    (contentGlueElementCSS[strWH] = MATH.max(
                                      1,
                                      contentGlueElementCSS[strWH]
                                    ))
                              }
                          setContentGlueElementCSSfunction(!0),
                            setContentGlueElementCSSfunction(!1),
                            _isTextarea &&
                              _textareaCoverElement.css(textareaCoverCSS),
                            _contentGlueElement.css(contentGlueElementCSS)
                        }
                        widthAuto &&
                          (contentElementCSS[_strWidth] = _strHundredPercent),
                          !widthAuto ||
                            _isBorderBox ||
                            _mutationObserversConnected ||
                            (contentElementCSS[_strFloat] = 'none'),
                          _contentElement.css(contentElementCSS),
                          (contentElementCSS = {})
                        var contentScrollSize = {
                          w: contentMeasureElement[LEXICON.sW],
                          h: contentMeasureElement[LEXICON.sH],
                        }
                        ;(contentScrollSize.c = contentSizeChanged =
                          checkCacheAutoForce(
                            contentScrollSize,
                            _contentScrollSizeCache
                          )),
                          (_contentScrollSizeCache = contentScrollSize),
                          (_viewportSize = getViewportSize()),
                          (hostSizeChanged = checkCacheAutoForce(
                            (hostSize = getHostSize()),
                            _hostSizeCache
                          )),
                          (_hostSizeCache = hostSize)
                        var hideOverflowForceTextarea =
                            _isTextarea &&
                            (0 === _viewportSize.w || 0 === _viewportSize.h),
                          previousOverflowAmount = _overflowAmountCache,
                          overflowBehaviorIsVS = {},
                          overflowBehaviorIsVH = {},
                          overflowBehaviorIsS = {},
                          overflowAmount = {},
                          hasOverflow = {},
                          hideOverflow = {},
                          canScroll = {},
                          viewportRect = _paddingElementNative[LEXICON.bCR](),
                          setOverflowVariables = function setOverflowVariables(
                            horizontal
                          ) {
                            var scrollbarVars = getScrollbarVars(horizontal),
                              xyI = getScrollbarVars(!horizontal)._x_y,
                              xy = scrollbarVars._x_y,
                              wh = scrollbarVars._w_h,
                              widthHeight = scrollbarVars._width_height,
                              scrollMax =
                                _strScroll + scrollbarVars._Left_Top + 'Max',
                              fractionalOverflowAmount = viewportRect[
                                widthHeight
                              ]
                                ? MATH.abs(
                                    viewportRect[widthHeight] -
                                      _viewportSize[wh]
                                  )
                                : 0,
                              checkFractionalOverflowAmount =
                                previousOverflowAmount &&
                                previousOverflowAmount[xy] > 0 &&
                                0 === _viewportElementNative[scrollMax]
                            ;(overflowBehaviorIsVS[xy] =
                              'v-s' === overflowBehavior[xy]),
                              (overflowBehaviorIsVH[xy] =
                                'v-h' === overflowBehavior[xy]),
                              (overflowBehaviorIsS[xy] =
                                's' === overflowBehavior[xy]),
                              (overflowAmount[xy] = MATH.max(
                                0,
                                MATH.round(
                                  100 *
                                    (contentScrollSize[wh] - _viewportSize[wh])
                                ) / 100
                              )),
                              (overflowAmount[xy] *=
                                hideOverflowForceTextarea ||
                                (checkFractionalOverflowAmount &&
                                  fractionalOverflowAmount > 0 &&
                                  fractionalOverflowAmount < 1)
                                  ? 0
                                  : 1),
                              (hasOverflow[xy] = overflowAmount[xy] > 0),
                              (hideOverflow[xy] =
                                overflowBehaviorIsVS[xy] ||
                                overflowBehaviorIsVH[xy]
                                  ? hasOverflow[xyI] &&
                                    !overflowBehaviorIsVS[xyI] &&
                                    !overflowBehaviorIsVH[xyI]
                                  : hasOverflow[xy]),
                              (hideOverflow[xy + 's'] =
                                !!hideOverflow[xy] &&
                                (overflowBehaviorIsS[xy] ||
                                  overflowBehaviorIsVS[xy])),
                              (canScroll[xy] =
                                hasOverflow[xy] && hideOverflow[xy + 's'])
                          }
                        if (
                          (setOverflowVariables(!0),
                          setOverflowVariables(!1),
                          (overflowAmount.c = checkCacheAutoForce(
                            overflowAmount,
                            _overflowAmountCache
                          )),
                          (_overflowAmountCache = overflowAmount),
                          (hasOverflow.c = checkCacheAutoForce(
                            hasOverflow,
                            _hasOverflowCache
                          )),
                          (_hasOverflowCache = hasOverflow),
                          (hideOverflow.c = checkCacheAutoForce(
                            hideOverflow,
                            _hideOverflowCache
                          )),
                          (_hideOverflowCache = hideOverflow),
                          _nativeScrollbarIsOverlaid.x ||
                            _nativeScrollbarIsOverlaid.y)
                        ) {
                          var setContentElementCSS,
                            borderDesign = 'px solid transparent',
                            contentArrangeElementCSS = {},
                            arrangeContent = {},
                            arrangeChanged = force
                          ;(hasOverflow.x || hasOverflow.y) &&
                            ((arrangeContent.w =
                              _nativeScrollbarIsOverlaid.y && hasOverflow.y
                                ? contentScrollSize.w +
                                  _overlayScrollbarDummySize.y
                                : _strEmpty),
                            (arrangeContent.h =
                              _nativeScrollbarIsOverlaid.x && hasOverflow.x
                                ? contentScrollSize.h +
                                  _overlayScrollbarDummySize.x
                                : _strEmpty),
                            (arrangeChanged = checkCacheAutoForce(
                              arrangeContent,
                              _arrangeContentSizeCache
                            )),
                            (_arrangeContentSizeCache = arrangeContent)),
                            (hasOverflow.c ||
                              hideOverflow.c ||
                              contentScrollSize.c ||
                              cssDirectionChanged ||
                              widthAutoChanged ||
                              heightAutoChanged ||
                              widthAuto ||
                              heightAuto ||
                              ignoreOverlayScrollbarHidingChanged) &&
                              ((contentElementCSS[
                                _strMarginMinus + isRTLRight
                              ] = contentElementCSS[
                                _strBorderMinus + isRTLRight
                              ] =
                                _strEmpty),
                              (setContentElementCSS =
                                function setContentElementCSS(horizontal) {
                                  var scrollbarVars =
                                      getScrollbarVars(horizontal),
                                    scrollbarVarsInverted = getScrollbarVars(
                                      !horizontal
                                    ),
                                    xy = scrollbarVars._x_y,
                                    strDirection = horizontal
                                      ? _strBottom
                                      : isRTLLeft,
                                    invertedAutoSize = horizontal
                                      ? heightAuto
                                      : widthAuto
                                  _nativeScrollbarIsOverlaid[xy] &&
                                  hasOverflow[xy] &&
                                  hideOverflow[xy + 's']
                                    ? ((contentElementCSS[
                                        _strMarginMinus + strDirection
                                      ] = invertedAutoSize
                                        ? ignoreOverlayScrollbarHiding
                                          ? _strEmpty
                                          : _overlayScrollbarDummySize[xy]
                                        : _strEmpty),
                                      (contentElementCSS[
                                        _strBorderMinus + strDirection
                                      ] =
                                        (horizontal && invertedAutoSize) ||
                                        ignoreOverlayScrollbarHiding
                                          ? _strEmpty
                                          : _overlayScrollbarDummySize[xy] +
                                            borderDesign))
                                    : ((arrangeContent[
                                        scrollbarVarsInverted._w_h
                                      ] =
                                        contentElementCSS[
                                          _strMarginMinus + strDirection
                                        ] =
                                        contentElementCSS[
                                          _strBorderMinus + strDirection
                                        ] =
                                          _strEmpty),
                                      (arrangeChanged = !0))
                                }),
                              _nativeScrollbarStyling
                                ? addRemoveClass(
                                    _viewportElement,
                                    _classNameViewportNativeScrollbarsInvisible,
                                    !ignoreOverlayScrollbarHiding
                                  )
                                : (setContentElementCSS(!0),
                                  setContentElementCSS(!1))),
                            ignoreOverlayScrollbarHiding &&
                              ((arrangeContent.w = arrangeContent.h =
                                _strEmpty),
                              (arrangeChanged = !0)),
                            arrangeChanged &&
                              !_nativeScrollbarStyling &&
                              ((contentArrangeElementCSS[_strWidth] =
                                hideOverflow.y ? arrangeContent.w : _strEmpty),
                              (contentArrangeElementCSS[_strHeight] =
                                hideOverflow.x ? arrangeContent.h : _strEmpty),
                              _contentArrangeElement ||
                                ((_contentArrangeElement = FRAMEWORK(
                                  generateDiv(_classNameContentArrangeElement)
                                )),
                                _viewportElement.prepend(
                                  _contentArrangeElement
                                )),
                              _contentArrangeElement.css(
                                contentArrangeElementCSS
                              )),
                            _contentElement.css(contentElementCSS)
                        }
                        var setViewportCSS,
                          viewportElementCSS = {}
                        if (
                          ((paddingElementCSS = {}),
                          (hostSizeChanged ||
                            hasOverflow.c ||
                            hideOverflow.c ||
                            contentScrollSize.c ||
                            overflowBehaviorChanged ||
                            boxSizingChanged ||
                            ignoreOverlayScrollbarHidingChanged ||
                            cssDirectionChanged ||
                            clipAlwaysChanged ||
                            heightAutoChanged) &&
                            ((viewportElementCSS[isRTLRight] = _strEmpty),
                            (setViewportCSS = function setViewportCSS(
                              horizontal
                            ) {
                              var scrollbarVars = getScrollbarVars(horizontal),
                                scrollbarVarsInverted = getScrollbarVars(
                                  !horizontal
                                ),
                                xy = scrollbarVars._x_y,
                                XY = scrollbarVars._X_Y,
                                strDirection = horizontal
                                  ? _strBottom
                                  : isRTLLeft,
                                reset = function reset() {
                                  ;(viewportElementCSS[strDirection] =
                                    _strEmpty),
                                    (_contentBorderSize[
                                      scrollbarVarsInverted._w_h
                                    ] = 0)
                                }
                              hasOverflow[xy] && hideOverflow[xy + 's']
                                ? ((viewportElementCSS[strOverflow + XY] =
                                    _strScroll),
                                  ignoreOverlayScrollbarHiding ||
                                  _nativeScrollbarStyling
                                    ? reset()
                                    : ((viewportElementCSS[strDirection] =
                                        -(_nativeScrollbarIsOverlaid[xy]
                                          ? _overlayScrollbarDummySize[xy]
                                          : _nativeScrollbarSize[xy])),
                                      (_contentBorderSize[
                                        scrollbarVarsInverted._w_h
                                      ] = _nativeScrollbarIsOverlaid[xy]
                                        ? _overlayScrollbarDummySize[
                                            scrollbarVarsInverted._x_y
                                          ]
                                        : 0)))
                                : ((viewportElementCSS[strOverflow + XY] =
                                    _strEmpty),
                                  reset())
                            })(!0),
                            setViewportCSS(!1),
                            !_nativeScrollbarStyling &&
                            (_viewportSize.h < _nativeScrollbarMinSize.x ||
                              _viewportSize.w < _nativeScrollbarMinSize.y) &&
                            ((hasOverflow.x &&
                              hideOverflow.x &&
                              !_nativeScrollbarIsOverlaid.x) ||
                              (hasOverflow.y &&
                                hideOverflow.y &&
                                !_nativeScrollbarIsOverlaid.y))
                              ? ((viewportElementCSS[
                                  _strPaddingMinus + _strTop
                                ] = _nativeScrollbarMinSize.x),
                                (viewportElementCSS[_strMarginMinus + _strTop] =
                                  -_nativeScrollbarMinSize.x),
                                (viewportElementCSS[
                                  _strPaddingMinus + isRTLRight
                                ] = _nativeScrollbarMinSize.y),
                                (viewportElementCSS[
                                  _strMarginMinus + isRTLRight
                                ] = -_nativeScrollbarMinSize.y))
                              : (viewportElementCSS[
                                  _strPaddingMinus + _strTop
                                ] =
                                  viewportElementCSS[
                                    _strMarginMinus + _strTop
                                  ] =
                                  viewportElementCSS[
                                    _strPaddingMinus + isRTLRight
                                  ] =
                                  viewportElementCSS[
                                    _strMarginMinus + isRTLRight
                                  ] =
                                    _strEmpty),
                            (viewportElementCSS[_strPaddingMinus + isRTLLeft] =
                              viewportElementCSS[_strMarginMinus + isRTLLeft] =
                                _strEmpty),
                            (hasOverflow.x && hideOverflow.x) ||
                            (hasOverflow.y && hideOverflow.y) ||
                            hideOverflowForceTextarea
                              ? _isTextarea &&
                                hideOverflowForceTextarea &&
                                (paddingElementCSS[strOverflowX] =
                                  paddingElementCSS[strOverflowY] =
                                    strHidden)
                              : (!clipAlways ||
                                  overflowBehaviorIsVH.x ||
                                  overflowBehaviorIsVS.x ||
                                  overflowBehaviorIsVH.y ||
                                  overflowBehaviorIsVS.y) &&
                                (_isTextarea &&
                                  (paddingElementCSS[strOverflowX] =
                                    paddingElementCSS[strOverflowY] =
                                      _strEmpty),
                                (viewportElementCSS[strOverflowX] =
                                  viewportElementCSS[strOverflowY] =
                                    strVisible)),
                            _paddingElement.css(paddingElementCSS),
                            _viewportElement.css(viewportElementCSS),
                            (viewportElementCSS = {}),
                            (hasOverflow.c ||
                              boxSizingChanged ||
                              widthAutoChanged ||
                              heightAutoChanged) &&
                              (!_nativeScrollbarIsOverlaid.x ||
                                !_nativeScrollbarIsOverlaid.y)))
                        ) {
                          var elementStyle = _contentElementNative[LEXICON.s]
                          ;(elementStyle.webkitTransform = 'scale(1)'),
                            (elementStyle.display = 'run-in'),
                            (elementStyle.display = _strEmpty),
                            (elementStyle.webkitTransform = _strEmpty)
                        }
                        if (
                          ((contentElementCSS = {}),
                          cssDirectionChanged ||
                            widthAutoChanged ||
                            heightAutoChanged)
                        )
                          if (_isRTL && widthAuto) {
                            var floatTmp = _contentElement.css(_strFloat),
                              posLeftWithoutFloat = MATH.round(
                                _contentElement
                                  .css(_strFloat, _strEmpty)
                                  .css(_strLeft, _strEmpty)
                                  .position().left
                              )
                            _contentElement.css(_strFloat, floatTmp),
                              posLeftWithoutFloat !==
                                MATH.round(_contentElement.position().left) &&
                                (contentElementCSS[_strLeft] =
                                  posLeftWithoutFloat)
                          } else contentElementCSS[_strLeft] = _strEmpty
                        if (
                          (_contentElement.css(contentElementCSS),
                          _isTextarea && contentSizeChanged)
                        ) {
                          var textareaInfo = getTextareaInfo()
                          if (textareaInfo) {
                            var textareaRowsChanged =
                                _textareaInfoCache === undefined$1 ||
                                textareaInfo._rows !== _textareaInfoCache._rows,
                              cursorRow = textareaInfo._cursorRow,
                              cursorCol = textareaInfo._cursorColumn,
                              widestRow = textareaInfo._widestRow,
                              lastRow = textareaInfo._rows,
                              lastCol = textareaInfo._columns,
                              cursorIsLastPosition =
                                textareaInfo._cursorPosition >=
                                  textareaInfo._cursorMax && _textareaHasFocus,
                              textareaScrollAmount = {
                                x:
                                  textareaAutoWrapping ||
                                  cursorCol !== lastCol ||
                                  cursorRow !== widestRow
                                    ? -1
                                    : _overflowAmountCache.x,
                                y: (
                                  textareaAutoWrapping
                                    ? cursorIsLastPosition ||
                                      (textareaRowsChanged &&
                                        previousOverflowAmount &&
                                        currScroll.y ===
                                          previousOverflowAmount.y)
                                    : (cursorIsLastPosition ||
                                        textareaRowsChanged) &&
                                      cursorRow === lastRow
                                )
                                  ? _overflowAmountCache.y
                                  : -1,
                              }
                            ;(currScroll.x =
                              textareaScrollAmount.x > -1
                                ? _isRTL &&
                                  _normalizeRTLCache &&
                                  _rtlScrollBehavior.i
                                  ? 0
                                  : textareaScrollAmount.x
                                : currScroll.x),
                              (currScroll.y =
                                textareaScrollAmount.y > -1
                                  ? textareaScrollAmount.y
                                  : currScroll.y)
                          }
                          _textareaInfoCache = textareaInfo
                        }
                        _isRTL &&
                          _rtlScrollBehavior.i &&
                          _nativeScrollbarIsOverlaid.y &&
                          hasOverflow.x &&
                          _normalizeRTLCache &&
                          (currScroll.x += _contentBorderSize.w || 0),
                          widthAuto && _hostElement[_strScrollLeft](0),
                          heightAuto && _hostElement[_strScrollTop](0),
                          _viewportElement[_strScrollLeft](currScroll.x)[
                            _strScrollTop
                          ](currScroll.y)
                        var scrollbarsVisibilityVisible =
                            'v' === scrollbarsVisibility,
                          scrollbarsVisibilityHidden =
                            'h' === scrollbarsVisibility,
                          scrollbarsVisibilityAuto =
                            'a' === scrollbarsVisibility,
                          refreshScrollbarsVisibility =
                            function refreshScrollbarsVisibility(showX, showY) {
                              ;(showY = showY === undefined$1 ? showX : showY),
                                refreshScrollbarAppearance(
                                  !0,
                                  showX,
                                  canScroll.x
                                ),
                                refreshScrollbarAppearance(
                                  !1,
                                  showY,
                                  canScroll.y
                                )
                            }
                        addRemoveClass(
                          _hostElement,
                          _classNameHostOverflow,
                          hideOverflow.x || hideOverflow.y
                        ),
                          addRemoveClass(
                            _hostElement,
                            _classNameHostOverflowX,
                            hideOverflow.x
                          ),
                          addRemoveClass(
                            _hostElement,
                            _classNameHostOverflowY,
                            hideOverflow.y
                          ),
                          cssDirectionChanged &&
                            !_isBody &&
                            addRemoveClass(
                              _hostElement,
                              _classNameHostRTL,
                              _isRTL
                            ),
                          _isBody &&
                            addClass(
                              _hostElement,
                              _classNameHostResizeDisabled
                            ),
                          resizeChanged &&
                            (addRemoveClass(
                              _hostElement,
                              _classNameHostResizeDisabled,
                              _resizeNone
                            ),
                            addRemoveClass(
                              _scrollbarCornerElement,
                              _classNameScrollbarCornerResize,
                              !_resizeNone
                            ),
                            addRemoveClass(
                              _scrollbarCornerElement,
                              _classNameScrollbarCornerResizeB,
                              _resizeBoth
                            ),
                            addRemoveClass(
                              _scrollbarCornerElement,
                              _classNameScrollbarCornerResizeH,
                              _resizeHorizontal
                            ),
                            addRemoveClass(
                              _scrollbarCornerElement,
                              _classNameScrollbarCornerResizeV,
                              _resizeVertical
                            )),
                          (scrollbarsVisibilityChanged ||
                            overflowBehaviorChanged ||
                            hideOverflow.c ||
                            hasOverflow.c ||
                            ignoreOverlayScrollbarHidingChanged) &&
                            (ignoreOverlayScrollbarHiding
                              ? ignoreOverlayScrollbarHidingChanged &&
                                (removeClass(
                                  _hostElement,
                                  _classNameHostScrolling
                                ),
                                ignoreOverlayScrollbarHiding &&
                                  refreshScrollbarsVisibility(!1))
                              : scrollbarsVisibilityAuto
                              ? refreshScrollbarsVisibility(
                                  canScroll.x,
                                  canScroll.y
                                )
                              : scrollbarsVisibilityVisible
                              ? refreshScrollbarsVisibility(!0)
                              : scrollbarsVisibilityHidden &&
                                refreshScrollbarsVisibility(!1)),
                          (scrollbarsAutoHideChanged ||
                            ignoreOverlayScrollbarHidingChanged) &&
                            (setupHostMouseTouchEvents(
                              !_scrollbarsAutoHideLeave &&
                                !_scrollbarsAutoHideMove
                            ),
                            refreshScrollbarsAutoHide(
                              _scrollbarsAutoHideNever,
                              !_scrollbarsAutoHideNever
                            )),
                          (hostSizeChanged ||
                            overflowAmount.c ||
                            heightAutoChanged ||
                            widthAutoChanged ||
                            resizeChanged ||
                            boxSizingChanged ||
                            paddingAbsoluteChanged ||
                            ignoreOverlayScrollbarHidingChanged ||
                            cssDirectionChanged) &&
                            (refreshScrollbarHandleLength(!0),
                            refreshScrollbarHandleOffset(!0),
                            refreshScrollbarHandleLength(!1),
                            refreshScrollbarHandleOffset(!1)),
                          scrollbarsClickScrollingChanged &&
                            refreshScrollbarsInteractive(
                              !0,
                              scrollbarsClickScrolling
                            ),
                          scrollbarsDragScrollingChanged &&
                            refreshScrollbarsInteractive(
                              !1,
                              scrollbarsDragScrolling
                            ),
                          dispatchCallback(
                            'onDirectionChanged',
                            { isRTL: _isRTL, dir: cssDirection },
                            cssDirectionChanged
                          ),
                          dispatchCallback(
                            'onHostSizeChanged',
                            {
                              width: _hostSizeCache.w,
                              height: _hostSizeCache.h,
                            },
                            hostSizeChanged
                          ),
                          dispatchCallback(
                            'onContentSizeChanged',
                            {
                              width: _contentScrollSizeCache.w,
                              height: _contentScrollSizeCache.h,
                            },
                            contentSizeChanged
                          ),
                          dispatchCallback(
                            'onOverflowChanged',
                            {
                              x: hasOverflow.x,
                              y: hasOverflow.y,
                              xScrollable: hideOverflow.xs,
                              yScrollable: hideOverflow.ys,
                              clipped: hideOverflow.x || hideOverflow.y,
                            },
                            hasOverflow.c || hideOverflow.c
                          ),
                          dispatchCallback(
                            'onOverflowAmountChanged',
                            { x: overflowAmount.x, y: overflowAmount.y },
                            overflowAmount.c
                          )
                      }
                      _isBody &&
                        _bodyMinSizeCache &&
                        (_hasOverflowCache.c || _bodyMinSizeCache.c) &&
                        (_bodyMinSizeCache.f || bodyMinSizeChanged(),
                        _nativeScrollbarIsOverlaid.y &&
                          _hasOverflowCache.x &&
                          _contentElement.css(
                            _strMinMinus + _strWidth,
                            _bodyMinSizeCache.w + _overlayScrollbarDummySize.y
                          ),
                        _nativeScrollbarIsOverlaid.x &&
                          _hasOverflowCache.y &&
                          _contentElement.css(
                            _strMinMinus + _strHeight,
                            _bodyMinSizeCache.h + _overlayScrollbarDummySize.x
                          ),
                        (_bodyMinSizeCache.c = !1)),
                        _initialized &&
                          changedOptions.updateOnLoad &&
                          updateElementsOnLoad(),
                        dispatchCallback('onUpdated', { forced: force })
                    }
                  }
                  function updateElementsOnLoad() {
                    _isTextarea ||
                      eachUpdateOnLoad(function (i, updateOnLoadSelector) {
                        _contentElement
                          .find(updateOnLoadSelector)
                          .each(function (i, el) {
                            COMPATIBILITY.inA(el, _updateOnLoadElms) < 0 &&
                              (_updateOnLoadElms.push(el),
                              FRAMEWORK(el)
                                .off(
                                  _updateOnLoadEventName,
                                  updateOnLoadCallback
                                )
                                .on(
                                  _updateOnLoadEventName,
                                  updateOnLoadCallback
                                ))
                          })
                      })
                  }
                  function setOptions(newOptions) {
                    var validatedOpts = _pluginsOptions._validate(
                      newOptions,
                      _pluginsOptions._template,
                      !0,
                      _currentOptions
                    )
                    return (
                      (_currentOptions = extendDeep(
                        {},
                        _currentOptions,
                        validatedOpts._default
                      )),
                      (_currentPreparedOptions = extendDeep(
                        {},
                        _currentPreparedOptions,
                        validatedOpts._prepared
                      )),
                      validatedOpts._prepared
                    )
                  }
                  function setupStructureDOM(destroy) {
                    var strParent = 'parent',
                      classNameResizeObserverHost = 'os-resize-observer-host',
                      classNameTextareaElementFull =
                        _classNameTextareaElement +
                        _strSpace +
                        _classNameTextInherit,
                      textareaClass = _isTextarea
                        ? _strSpace + _classNameTextInherit
                        : _strEmpty,
                      adoptAttrs =
                        _currentPreparedOptions.textarea.inheritedAttrs,
                      adoptAttrsMap = {},
                      applyAdoptedAttrs = function applyAdoptedAttrs() {
                        var applyAdoptedAttrsElm = destroy
                          ? _targetElement
                          : _hostElement
                        each(adoptAttrsMap, function (key, value) {
                          type(value) == TYPES.s &&
                            (key == LEXICON.c
                              ? applyAdoptedAttrsElm.addClass(value)
                              : applyAdoptedAttrsElm.attr(key, value))
                        })
                      },
                      hostElementClassNames = [
                        _classNameHostElement,
                        _classNameHostElementForeign,
                        _classNameHostTextareaElement,
                        _classNameHostResizeDisabled,
                        _classNameHostRTL,
                        _classNameHostScrollbarHorizontalHidden,
                        _classNameHostScrollbarVerticalHidden,
                        _classNameHostTransition,
                        _classNameHostScrolling,
                        _classNameHostOverflow,
                        _classNameHostOverflowX,
                        _classNameHostOverflowY,
                        _classNameThemeNone,
                        _classNameTextareaElement,
                        _classNameTextInherit,
                        _classNameCache,
                      ].join(_strSpace),
                      hostElementCSS = {}
                    ;(_hostElement =
                      _hostElement ||
                      (_isTextarea
                        ? _domExists
                          ? _targetElement[strParent]()
                              [strParent]()
                              [strParent]()
                              [strParent]()
                          : FRAMEWORK(
                              generateDiv(_classNameHostTextareaElement)
                            )
                        : _targetElement)),
                      (_contentElement =
                        _contentElement ||
                        selectOrGenerateDivByClass(
                          _classNameContentElement + textareaClass
                        )),
                      (_viewportElement =
                        _viewportElement ||
                        selectOrGenerateDivByClass(
                          _classNameViewportElement + textareaClass
                        )),
                      (_paddingElement =
                        _paddingElement ||
                        selectOrGenerateDivByClass(
                          _classNamePaddingElement + textareaClass
                        )),
                      (_sizeObserverElement =
                        _sizeObserverElement ||
                        selectOrGenerateDivByClass(
                          classNameResizeObserverHost
                        )),
                      (_textareaCoverElement =
                        _textareaCoverElement ||
                        (_isTextarea
                          ? selectOrGenerateDivByClass(
                              _classNameTextareaCoverElement
                            )
                          : undefined$1)),
                      _domExists &&
                        addClass(_hostElement, _classNameHostElementForeign),
                      destroy &&
                        removeClass(_hostElement, hostElementClassNames),
                      (adoptAttrs =
                        type(adoptAttrs) == TYPES.s
                          ? adoptAttrs.split(_strSpace)
                          : adoptAttrs),
                      COMPATIBILITY.isA(adoptAttrs) &&
                        _isTextarea &&
                        each(adoptAttrs, function (i, v) {
                          type(v) == TYPES.s &&
                            (adoptAttrsMap[v] = destroy
                              ? _hostElement.attr(v)
                              : _targetElement.attr(v))
                        }),
                      destroy
                        ? (_domExists && _initialized
                            ? (_sizeObserverElement.children().remove(),
                              each(
                                [
                                  _paddingElement,
                                  _viewportElement,
                                  _contentElement,
                                  _textareaCoverElement,
                                ],
                                function (i, elm) {
                                  elm &&
                                    removeClass(
                                      elm.removeAttr(LEXICON.s),
                                      _classNamesDynamicDestroy
                                    )
                                }
                              ),
                              addClass(
                                _hostElement,
                                _isTextarea
                                  ? _classNameHostTextareaElement
                                  : _classNameHostElement
                              ))
                            : (remove(_sizeObserverElement),
                              _contentElement
                                .contents()
                                .unwrap()
                                .unwrap()
                                .unwrap(),
                              _isTextarea &&
                                (_targetElement.unwrap(),
                                remove(_hostElement),
                                remove(_textareaCoverElement),
                                applyAdoptedAttrs())),
                          _isTextarea && _targetElement.removeAttr(LEXICON.s),
                          _isBody &&
                            removeClass(_htmlElement, _classNameHTMLElement))
                        : (_isTextarea &&
                            (_currentPreparedOptions.sizeAutoCapable ||
                              ((hostElementCSS[_strWidth] =
                                _targetElement.css(_strWidth)),
                              (hostElementCSS[_strHeight] =
                                _targetElement.css(_strHeight))),
                            _domExists ||
                              _targetElement
                                .addClass(_classNameTextInherit)
                                .wrap(_hostElement),
                            (_hostElement =
                              _targetElement[strParent]().css(hostElementCSS))),
                          _domExists ||
                            (addClass(
                              _targetElement,
                              _isTextarea
                                ? classNameTextareaElementFull
                                : _classNameHostElement
                            ),
                            _hostElement
                              .wrapInner(_contentElement)
                              .wrapInner(_viewportElement)
                              .wrapInner(_paddingElement)
                              .prepend(_sizeObserverElement),
                            (_contentElement = findFirst(
                              _hostElement,
                              _strDot + _classNameContentElement
                            )),
                            (_viewportElement = findFirst(
                              _hostElement,
                              _strDot + _classNameViewportElement
                            )),
                            (_paddingElement = findFirst(
                              _hostElement,
                              _strDot + _classNamePaddingElement
                            )),
                            _isTextarea &&
                              (_contentElement.prepend(_textareaCoverElement),
                              applyAdoptedAttrs())),
                          _nativeScrollbarStyling &&
                            addClass(
                              _viewportElement,
                              _classNameViewportNativeScrollbarsInvisible
                            ),
                          _nativeScrollbarIsOverlaid.x &&
                            _nativeScrollbarIsOverlaid.y &&
                            addClass(
                              _viewportElement,
                              _classNameViewportNativeScrollbarsOverlaid
                            ),
                          _isBody &&
                            addClass(_htmlElement, _classNameHTMLElement),
                          (_sizeObserverElementNative =
                            _sizeObserverElement[0]),
                          (_hostElementNative = _hostElement[0]),
                          (_paddingElementNative = _paddingElement[0]),
                          (_viewportElementNative = _viewportElement[0]),
                          (_contentElementNative = _contentElement[0]),
                          updateViewportAttrsFromTarget())
                  }
                  function setupStructureEvents() {
                    var textareaUpdateIntervalID,
                      scrollStopTimeoutId,
                      textareaKeyDownRestrictedKeyCodes = [
                        112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 123,
                        33, 34, 37, 38, 39, 40, 16, 17, 18, 19, 20, 144,
                      ],
                      textareaKeyDownKeyCodesList = [],
                      scrollStopDelay = 175,
                      strFocus = 'focus'
                    function updateTextarea(doClearInterval) {
                      textareaUpdate(),
                        _base.update(_strAuto),
                        doClearInterval &&
                          _autoUpdateRecommended &&
                          clearInterval(textareaUpdateIntervalID)
                    }
                    function textareaOnScroll(event) {
                      return (
                        _targetElement[_strScrollLeft](
                          _rtlScrollBehavior.i && _normalizeRTLCache
                            ? 9999999
                            : 0
                        ),
                        _targetElement[_strScrollTop](0),
                        COMPATIBILITY.prvD(event),
                        COMPATIBILITY.stpP(event),
                        !1
                      )
                    }
                    function textareaOnDrop(event) {
                      setTimeout(function () {
                        _destroyed || updateTextarea()
                      }, 50)
                    }
                    function textareaOnFocus() {
                      ;(_textareaHasFocus = !0),
                        addClass(_hostElement, strFocus)
                    }
                    function textareaOnFocusout() {
                      ;(_textareaHasFocus = !1),
                        (textareaKeyDownKeyCodesList = []),
                        removeClass(_hostElement, strFocus),
                        updateTextarea(!0)
                    }
                    function textareaOnKeyDown(event) {
                      var keyCode = event.keyCode
                      inArray(keyCode, textareaKeyDownRestrictedKeyCodes) < 0 &&
                        (textareaKeyDownKeyCodesList[LEXICON.l] ||
                          (updateTextarea(),
                          (textareaUpdateIntervalID = setInterval(
                            updateTextarea,
                            1e3 / 60
                          ))),
                        inArray(keyCode, textareaKeyDownKeyCodesList) < 0 &&
                          textareaKeyDownKeyCodesList.push(keyCode))
                    }
                    function textareaOnKeyUp(event) {
                      var keyCode = event.keyCode,
                        index = inArray(keyCode, textareaKeyDownKeyCodesList)
                      inArray(keyCode, textareaKeyDownRestrictedKeyCodes) < 0 &&
                        (index > -1 &&
                          textareaKeyDownKeyCodesList.splice(index, 1),
                        textareaKeyDownKeyCodesList[LEXICON.l] ||
                          updateTextarea(!0))
                    }
                    function contentOnTransitionEnd(event) {
                      !0 !== _autoUpdateCache &&
                        isSizeAffectingCSSProperty(
                          (event = event.originalEvent || event).propertyName
                        ) &&
                        _base.update(_strAuto)
                    }
                    function viewportOnScroll(event) {
                      _sleeping ||
                        (scrollStopTimeoutId !== undefined$1
                          ? clearTimeout(scrollStopTimeoutId)
                          : ((_scrollbarsAutoHideScroll ||
                              _scrollbarsAutoHideMove) &&
                              refreshScrollbarsAutoHide(!0),
                            nativeOverlayScrollbarsAreActive() ||
                              addClass(_hostElement, _classNameHostScrolling),
                            dispatchCallback('onScrollStart', event)),
                        _scrollbarsHandlesDefineScrollPos ||
                          (refreshScrollbarHandleOffset(!0),
                          refreshScrollbarHandleOffset(!1)),
                        dispatchCallback('onScroll', event),
                        (scrollStopTimeoutId = setTimeout(function () {
                          _destroyed ||
                            (clearTimeout(scrollStopTimeoutId),
                            (scrollStopTimeoutId = undefined$1),
                            (_scrollbarsAutoHideScroll ||
                              _scrollbarsAutoHideMove) &&
                              refreshScrollbarsAutoHide(!1),
                            nativeOverlayScrollbarsAreActive() ||
                              removeClass(
                                _hostElement,
                                _classNameHostScrolling
                              ),
                            dispatchCallback('onScrollStop', event))
                        }, scrollStopDelay)))
                    }
                    _isTextarea
                      ? (_msieVersion > 9 || !_autoUpdateRecommended
                          ? addDestroyEventListener(
                              _targetElement,
                              'input',
                              updateTextarea
                            )
                          : addDestroyEventListener(
                              _targetElement,
                              [_strKeyDownEvent, _strKeyUpEvent],
                              [textareaOnKeyDown, textareaOnKeyUp]
                            ),
                        addDestroyEventListener(
                          _targetElement,
                          [_strScroll, 'drop', strFocus, strFocus + 'out'],
                          [
                            textareaOnScroll,
                            textareaOnDrop,
                            textareaOnFocus,
                            textareaOnFocusout,
                          ]
                        ))
                      : addDestroyEventListener(
                          _contentElement,
                          _strTransitionEndEvent,
                          contentOnTransitionEnd
                        ),
                      addDestroyEventListener(
                        _viewportElement,
                        _strScroll,
                        viewportOnScroll,
                        !0
                      )
                  }
                  function setupScrollbarsDOM(destroy) {
                    var horizontalElements,
                      verticalElements,
                      selectOrGenerateScrollbarDOM =
                        function selectOrGenerateScrollbarDOM(isHorizontal) {
                          var scrollbar = selectOrGenerateDivByClass(
                              _classNameScrollbar +
                                _strSpace +
                                (isHorizontal
                                  ? _classNameScrollbarHorizontal
                                  : _classNameScrollbarVertical),
                              !0
                            ),
                            track = selectOrGenerateDivByClass(
                              _classNameScrollbarTrack,
                              scrollbar
                            ),
                            handle = selectOrGenerateDivByClass(
                              _classNameScrollbarHandle,
                              scrollbar
                            )
                          return (
                            _domExists ||
                              destroy ||
                              (scrollbar.append(track), track.append(handle)),
                            {
                              _scrollbar: scrollbar,
                              _track: track,
                              _handle: handle,
                            }
                          )
                        }
                    function resetScrollbarDOM(isHorizontal) {
                      var scrollbarVars = getScrollbarVars(isHorizontal),
                        scrollbar = scrollbarVars._scrollbar,
                        track = scrollbarVars._track,
                        handle = scrollbarVars._handle
                      _domExists && _initialized
                        ? each([scrollbar, track, handle], function (i, elm) {
                            removeClass(
                              elm.removeAttr(LEXICON.s),
                              _classNamesDynamicDestroy
                            )
                          })
                        : remove(
                            scrollbar ||
                              selectOrGenerateScrollbarDOM(isHorizontal)
                                ._scrollbar
                          )
                    }
                    destroy
                      ? (resetScrollbarDOM(!0), resetScrollbarDOM())
                      : ((horizontalElements = selectOrGenerateScrollbarDOM(
                          !0
                        )),
                        (verticalElements = selectOrGenerateScrollbarDOM()),
                        (_scrollbarHorizontalElement =
                          horizontalElements._scrollbar),
                        (_scrollbarHorizontalTrackElement =
                          horizontalElements._track),
                        (_scrollbarHorizontalHandleElement =
                          horizontalElements._handle),
                        (_scrollbarVerticalElement =
                          verticalElements._scrollbar),
                        (_scrollbarVerticalTrackElement =
                          verticalElements._track),
                        (_scrollbarVerticalHandleElement =
                          verticalElements._handle),
                        _domExists ||
                          (_paddingElement.after(_scrollbarVerticalElement),
                          _paddingElement.after(_scrollbarHorizontalElement)))
                  }
                  function setupScrollbarEvents(isHorizontal) {
                    var trackTimeout,
                      mouseDownScroll,
                      mouseDownOffset,
                      mouseDownInvertedScale,
                      scrollbarVars = getScrollbarVars(isHorizontal),
                      scrollbarVarsInfo = scrollbarVars._info,
                      insideIFrame =
                        _windowElementNative.top !== _windowElementNative,
                      xy = scrollbarVars._x_y,
                      XY = scrollbarVars._X_Y,
                      scroll = _strScroll + scrollbarVars._Left_Top,
                      strActive = 'active',
                      strSnapHandle = 'snapHandle',
                      strClickEvent = 'click',
                      scrollDurationFactor = 1,
                      increaseDecreaseScrollAmountKeyCodes = [16, 17]
                    function getPointerPosition(event) {
                      return _msieVersion && insideIFrame
                        ? event['screen' + XY]
                        : COMPATIBILITY.page(event)[xy]
                    }
                    function getPreparedScrollbarsOption(name) {
                      return _currentPreparedOptions.scrollbars[name]
                    }
                    function increaseTrackScrollAmount() {
                      scrollDurationFactor = 0.5
                    }
                    function decreaseTrackScrollAmount() {
                      scrollDurationFactor = 1
                    }
                    function stopClickEventPropagation(event) {
                      COMPATIBILITY.stpP(event)
                    }
                    function documentKeyDown(event) {
                      inArray(
                        event.keyCode,
                        increaseDecreaseScrollAmountKeyCodes
                      ) > -1 && increaseTrackScrollAmount()
                    }
                    function documentKeyUp(event) {
                      inArray(
                        event.keyCode,
                        increaseDecreaseScrollAmountKeyCodes
                      ) > -1 && decreaseTrackScrollAmount()
                    }
                    function onMouseTouchDownContinue(event) {
                      var isTouchEvent =
                        (event.originalEvent || event).touches !== undefined$1
                      return (
                        !(
                          _sleeping ||
                          _destroyed ||
                          nativeOverlayScrollbarsAreActive() ||
                          !_scrollbarsDragScrollingCache ||
                          (isTouchEvent &&
                            !getPreparedScrollbarsOption('touchSupport'))
                        ) &&
                        (1 === COMPATIBILITY.mBtn(event) || isTouchEvent)
                      )
                    }
                    function documentDragMove(event) {
                      if (onMouseTouchDownContinue(event)) {
                        var trackLength = scrollbarVarsInfo._trackLength,
                          handleLength = scrollbarVarsInfo._handleLength,
                          scrollDelta =
                            scrollbarVarsInfo._maxScroll *
                            (((getPointerPosition(event) - mouseDownOffset) *
                              mouseDownInvertedScale) /
                              (trackLength - handleLength))
                        ;(scrollDelta = isFinite(scrollDelta)
                          ? scrollDelta
                          : 0),
                          _isRTL &&
                            isHorizontal &&
                            !_rtlScrollBehavior.i &&
                            (scrollDelta *= -1),
                          _viewportElement[scroll](
                            MATH.round(mouseDownScroll + scrollDelta)
                          ),
                          _scrollbarsHandlesDefineScrollPos &&
                            refreshScrollbarHandleOffset(
                              isHorizontal,
                              mouseDownScroll + scrollDelta
                            ),
                          _supportPassiveEvents || COMPATIBILITY.prvD(event)
                      } else documentMouseTouchUp(event)
                    }
                    function documentMouseTouchUp(event) {
                      if (
                        ((event = event || event.originalEvent),
                        setupResponsiveEventListener(
                          _documentElement,
                          [
                            _strMouseTouchMoveEvent,
                            _strMouseTouchUpEvent,
                            _strKeyDownEvent,
                            _strKeyUpEvent,
                            _strSelectStartEvent,
                          ],
                          [
                            documentDragMove,
                            documentMouseTouchUp,
                            documentKeyDown,
                            documentKeyUp,
                            documentOnSelectStart,
                          ],
                          !0
                        ),
                        COMPATIBILITY.rAF()(function () {
                          setupResponsiveEventListener(
                            _documentElement,
                            strClickEvent,
                            stopClickEventPropagation,
                            !0,
                            { _capture: !0 }
                          )
                        }),
                        _scrollbarsHandlesDefineScrollPos &&
                          refreshScrollbarHandleOffset(isHorizontal, !0),
                        (_scrollbarsHandlesDefineScrollPos = !1),
                        removeClass(_bodyElement, _classNameDragging),
                        removeClass(scrollbarVars._handle, strActive),
                        removeClass(scrollbarVars._track, strActive),
                        removeClass(scrollbarVars._scrollbar, strActive),
                        (mouseDownScroll = undefined$1),
                        (mouseDownOffset = undefined$1),
                        (mouseDownInvertedScale = 1),
                        decreaseTrackScrollAmount(),
                        trackTimeout !== undefined$1 &&
                          (_base.scrollStop(),
                          clearTimeout(trackTimeout),
                          (trackTimeout = undefined$1)),
                        event)
                      ) {
                        var rect = _hostElementNative[LEXICON.bCR]()
                        ;(event.clientX >= rect.left &&
                          event.clientX <= rect.right &&
                          event.clientY >= rect.top &&
                          event.clientY <= rect.bottom) ||
                          hostOnMouseLeave(),
                          (_scrollbarsAutoHideScroll ||
                            _scrollbarsAutoHideMove) &&
                            refreshScrollbarsAutoHide(!1)
                      }
                    }
                    function onHandleMouseTouchDown(event) {
                      onMouseTouchDownContinue(event) &&
                        onHandleMouseTouchDownAction(event)
                    }
                    function onHandleMouseTouchDownAction(event) {
                      ;(mouseDownScroll = _viewportElement[scroll]()),
                        (mouseDownScroll = isNaN(mouseDownScroll)
                          ? 0
                          : mouseDownScroll),
                        ((_isRTL && isHorizontal && !_rtlScrollBehavior.n) ||
                          !_isRTL) &&
                          (mouseDownScroll =
                            mouseDownScroll < 0 ? 0 : mouseDownScroll),
                        (mouseDownInvertedScale =
                          getHostElementInvertedScale()[xy]),
                        (mouseDownOffset = getPointerPosition(event)),
                        (_scrollbarsHandlesDefineScrollPos =
                          !getPreparedScrollbarsOption(strSnapHandle)),
                        addClass(_bodyElement, _classNameDragging),
                        addClass(scrollbarVars._handle, strActive),
                        addClass(scrollbarVars._scrollbar, strActive),
                        setupResponsiveEventListener(
                          _documentElement,
                          [
                            _strMouseTouchMoveEvent,
                            _strMouseTouchUpEvent,
                            _strSelectStartEvent,
                          ],
                          [
                            documentDragMove,
                            documentMouseTouchUp,
                            documentOnSelectStart,
                          ]
                        ),
                        COMPATIBILITY.rAF()(function () {
                          setupResponsiveEventListener(
                            _documentElement,
                            strClickEvent,
                            stopClickEventPropagation,
                            !1,
                            { _capture: !0 }
                          )
                        }),
                        (!_msieVersion && _documentMixed) ||
                          COMPATIBILITY.prvD(event),
                        COMPATIBILITY.stpP(event)
                    }
                    function onTrackMouseTouchDown(event) {
                      if (onMouseTouchDownContinue(event)) {
                        var decreaseScroll,
                          handleToViewportRatio =
                            scrollbarVars._info._handleLength /
                            Math.round(
                              MATH.min(
                                1,
                                _viewportSize[scrollbarVars._w_h] /
                                  _contentScrollSizeCache[scrollbarVars._w_h]
                              ) * scrollbarVars._info._trackLength
                            ),
                          scrollDistance = MATH.round(
                            _viewportSize[scrollbarVars._w_h] *
                              handleToViewportRatio
                          ),
                          scrollBaseDuration = 270 * handleToViewportRatio,
                          scrollFirstIterationDelay =
                            400 * handleToViewportRatio,
                          trackOffset =
                            scrollbarVars._track.offset()[
                              scrollbarVars._left_top
                            ],
                          ctrlKey = event.ctrlKey,
                          instantScroll = event.shiftKey,
                          instantScrollTransition = instantScroll && ctrlKey,
                          isFirstIteration = !0,
                          easing = 'linear',
                          scrollActionFinsished =
                            function scrollActionFinsished(transition) {
                              _scrollbarsHandlesDefineScrollPos &&
                                refreshScrollbarHandleOffset(
                                  isHorizontal,
                                  transition
                                )
                            },
                          scrollActionInstantFinished =
                            function scrollActionInstantFinished() {
                              scrollActionFinsished(),
                                onHandleMouseTouchDownAction(event)
                            },
                          scrollAction = function scrollAction() {
                            if (!_destroyed) {
                              var mouseOffset =
                                  (mouseDownOffset - trackOffset) *
                                  mouseDownInvertedScale,
                                handleOffset = scrollbarVarsInfo._handleOffset,
                                trackLength = scrollbarVarsInfo._trackLength,
                                handleLength = scrollbarVarsInfo._handleLength,
                                scrollRange = scrollbarVarsInfo._maxScroll,
                                currScroll = scrollbarVarsInfo._currentScroll,
                                scrollDuration =
                                  scrollBaseDuration * scrollDurationFactor,
                                timeoutDelay = isFirstIteration
                                  ? MATH.max(
                                      scrollFirstIterationDelay,
                                      scrollDuration
                                    )
                                  : scrollDuration,
                                instantScrollPosition =
                                  scrollRange *
                                  ((mouseOffset - handleLength / 2) /
                                    (trackLength - handleLength)),
                                rtlIsNormal =
                                  _isRTL &&
                                  isHorizontal &&
                                  ((!_rtlScrollBehavior.i &&
                                    !_rtlScrollBehavior.n) ||
                                    _normalizeRTLCache),
                                decreaseScrollCondition = rtlIsNormal
                                  ? handleOffset < mouseOffset
                                  : handleOffset > mouseOffset,
                                scrollObj = {},
                                animationObj = {
                                  easing: easing,
                                  step: function step(now) {
                                    _scrollbarsHandlesDefineScrollPos &&
                                      (_viewportElement[scroll](now),
                                      refreshScrollbarHandleOffset(
                                        isHorizontal,
                                        now
                                      ))
                                  },
                                }
                              ;(instantScrollPosition = isFinite(
                                instantScrollPosition
                              )
                                ? instantScrollPosition
                                : 0),
                                (instantScrollPosition =
                                  _isRTL &&
                                  isHorizontal &&
                                  !_rtlScrollBehavior.i
                                    ? scrollRange - instantScrollPosition
                                    : instantScrollPosition),
                                instantScroll
                                  ? (_viewportElement[scroll](
                                      instantScrollPosition
                                    ),
                                    instantScrollTransition
                                      ? ((instantScrollPosition =
                                          _viewportElement[scroll]()),
                                        _viewportElement[scroll](currScroll),
                                        (instantScrollPosition =
                                          rtlIsNormal && _rtlScrollBehavior.i
                                            ? scrollRange -
                                              instantScrollPosition
                                            : instantScrollPosition),
                                        (instantScrollPosition =
                                          rtlIsNormal && _rtlScrollBehavior.n
                                            ? -instantScrollPosition
                                            : instantScrollPosition),
                                        (scrollObj[xy] = instantScrollPosition),
                                        _base.scroll(
                                          scrollObj,
                                          extendDeep(animationObj, {
                                            duration: 130,
                                            complete:
                                              scrollActionInstantFinished,
                                          })
                                        ))
                                      : scrollActionInstantFinished())
                                  : ((decreaseScroll = isFirstIteration
                                      ? decreaseScrollCondition
                                      : decreaseScroll),
                                    (
                                      rtlIsNormal
                                        ? decreaseScroll
                                          ? handleOffset + handleLength >=
                                            mouseOffset
                                          : handleOffset <= mouseOffset
                                        : decreaseScroll
                                        ? handleOffset <= mouseOffset
                                        : handleOffset + handleLength >=
                                          mouseOffset
                                    )
                                      ? (clearTimeout(trackTimeout),
                                        _base.scrollStop(),
                                        (trackTimeout = undefined$1),
                                        scrollActionFinsished(!0))
                                      : ((trackTimeout = setTimeout(
                                          scrollAction,
                                          timeoutDelay
                                        )),
                                        (scrollObj[xy] =
                                          (decreaseScroll ? '-=' : '+=') +
                                          scrollDistance),
                                        _base.scroll(
                                          scrollObj,
                                          extendDeep(animationObj, {
                                            duration: scrollDuration,
                                          })
                                        )),
                                    (isFirstIteration = !1))
                            }
                          }
                        ctrlKey && increaseTrackScrollAmount(),
                          (mouseDownInvertedScale =
                            getHostElementInvertedScale()[xy]),
                          (mouseDownOffset = COMPATIBILITY.page(event)[xy]),
                          (_scrollbarsHandlesDefineScrollPos =
                            !getPreparedScrollbarsOption(strSnapHandle)),
                          addClass(_bodyElement, _classNameDragging),
                          addClass(scrollbarVars._track, strActive),
                          addClass(scrollbarVars._scrollbar, strActive),
                          setupResponsiveEventListener(
                            _documentElement,
                            [
                              _strMouseTouchUpEvent,
                              _strKeyDownEvent,
                              _strKeyUpEvent,
                              _strSelectStartEvent,
                            ],
                            [
                              documentMouseTouchUp,
                              documentKeyDown,
                              documentKeyUp,
                              documentOnSelectStart,
                            ]
                          ),
                          scrollAction(),
                          COMPATIBILITY.prvD(event),
                          COMPATIBILITY.stpP(event)
                      }
                    }
                    function onTrackMouseTouchEnter(event) {
                      ;(_scrollbarsHandleHovered = !0),
                        (_scrollbarsAutoHideScroll ||
                          _scrollbarsAutoHideMove) &&
                          refreshScrollbarsAutoHide(!0)
                    }
                    function onTrackMouseTouchLeave(event) {
                      ;(_scrollbarsHandleHovered = !1),
                        (_scrollbarsAutoHideScroll ||
                          _scrollbarsAutoHideMove) &&
                          refreshScrollbarsAutoHide(!1)
                    }
                    function onScrollbarMouseTouchDown(event) {
                      COMPATIBILITY.stpP(event)
                    }
                    addDestroyEventListener(
                      scrollbarVars._handle,
                      _strMouseTouchDownEvent,
                      onHandleMouseTouchDown
                    ),
                      addDestroyEventListener(
                        scrollbarVars._track,
                        [
                          _strMouseTouchDownEvent,
                          _strMouseEnter,
                          _strMouseLeave,
                        ],
                        [
                          onTrackMouseTouchDown,
                          onTrackMouseTouchEnter,
                          onTrackMouseTouchLeave,
                        ]
                      ),
                      addDestroyEventListener(
                        scrollbarVars._scrollbar,
                        _strMouseTouchDownEvent,
                        onScrollbarMouseTouchDown
                      ),
                      _supportTransition &&
                        addDestroyEventListener(
                          scrollbarVars._scrollbar,
                          _strTransitionEndEvent,
                          function (event) {
                            event.target === scrollbarVars._scrollbar[0] &&
                              (refreshScrollbarHandleLength(isHorizontal),
                              refreshScrollbarHandleOffset(isHorizontal))
                          }
                        )
                  }
                  function refreshScrollbarAppearance(
                    isHorizontal,
                    shallBeVisible,
                    canScroll
                  ) {
                    var scrollbarElement = isHorizontal
                      ? _scrollbarHorizontalElement
                      : _scrollbarVerticalElement
                    addRemoveClass(
                      _hostElement,
                      isHorizontal
                        ? _classNameHostScrollbarHorizontalHidden
                        : _classNameHostScrollbarVerticalHidden,
                      !shallBeVisible
                    ),
                      addRemoveClass(
                        scrollbarElement,
                        _classNameScrollbarUnusable,
                        !canScroll
                      )
                  }
                  function refreshScrollbarsAutoHide(
                    shallBeVisible,
                    delayfree
                  ) {
                    if (
                      (clearTimeout(_scrollbarsAutoHideTimeoutId),
                      shallBeVisible)
                    )
                      removeClass(
                        _scrollbarHorizontalElement,
                        _classNameScrollbarAutoHidden
                      ),
                        removeClass(
                          _scrollbarVerticalElement,
                          _classNameScrollbarAutoHidden
                        )
                    else {
                      var anyActive,
                        strActive = 'active',
                        hide = function hide() {
                          _scrollbarsHandleHovered ||
                            _destroyed ||
                            (!(anyActive =
                              _scrollbarHorizontalHandleElement.hasClass(
                                strActive
                              ) ||
                              _scrollbarVerticalHandleElement.hasClass(
                                strActive
                              )) &&
                              (_scrollbarsAutoHideScroll ||
                                _scrollbarsAutoHideMove ||
                                _scrollbarsAutoHideLeave) &&
                              addClass(
                                _scrollbarHorizontalElement,
                                _classNameScrollbarAutoHidden
                              ),
                            !anyActive &&
                              (_scrollbarsAutoHideScroll ||
                                _scrollbarsAutoHideMove ||
                                _scrollbarsAutoHideLeave) &&
                              addClass(
                                _scrollbarVerticalElement,
                                _classNameScrollbarAutoHidden
                              ))
                        }
                      _scrollbarsAutoHideDelay > 0 && !0 !== delayfree
                        ? (_scrollbarsAutoHideTimeoutId = setTimeout(
                            hide,
                            _scrollbarsAutoHideDelay
                          ))
                        : hide()
                    }
                  }
                  function refreshScrollbarHandleLength(isHorizontal) {
                    var handleCSS = {},
                      scrollbarVars = getScrollbarVars(isHorizontal),
                      scrollbarVarsInfo = scrollbarVars._info,
                      digit = 1e6,
                      handleRatio = MATH.min(
                        1,
                        _viewportSize[scrollbarVars._w_h] /
                          _contentScrollSizeCache[scrollbarVars._w_h]
                      )
                    ;(handleCSS[scrollbarVars._width_height] =
                      MATH.floor(100 * handleRatio * digit) / digit + '%'),
                      nativeOverlayScrollbarsAreActive() ||
                        scrollbarVars._handle.css(handleCSS),
                      (scrollbarVarsInfo._handleLength =
                        scrollbarVars._handle[0][
                          'offset' + scrollbarVars._Width_Height
                        ]),
                      (scrollbarVarsInfo._handleLengthRatio = handleRatio)
                  }
                  function refreshScrollbarHandleOffset(
                    isHorizontal,
                    scrollOrTransition
                  ) {
                    var transformOffset,
                      translateValue,
                      transition = type(scrollOrTransition) == TYPES.b,
                      transitionDuration = 250,
                      isRTLisHorizontal = _isRTL && isHorizontal,
                      scrollbarVars = getScrollbarVars(isHorizontal),
                      scrollbarVarsInfo = scrollbarVars._info,
                      strTranslateBrace = 'translate(',
                      strTransform = VENDORS._cssProperty('transform'),
                      strTransition = VENDORS._cssProperty('transition'),
                      nativeScroll = isHorizontal
                        ? _viewportElement[_strScrollLeft]()
                        : _viewportElement[_strScrollTop](),
                      currentScroll =
                        scrollOrTransition === undefined$1 || transition
                          ? nativeScroll
                          : scrollOrTransition,
                      handleLength = scrollbarVarsInfo._handleLength,
                      trackLength =
                        scrollbarVars._track[0][
                          'offset' + scrollbarVars._Width_Height
                        ],
                      handleTrackDiff = trackLength - handleLength,
                      handleCSS = {},
                      maxScroll =
                        (_viewportElementNative[
                          _strScroll + scrollbarVars._Width_Height
                        ] -
                          _viewportElementNative[
                            'client' + scrollbarVars._Width_Height
                          ]) *
                        (_rtlScrollBehavior.n && isRTLisHorizontal ? -1 : 1),
                      getScrollRatio = function getScrollRatio(base) {
                        return isNaN(base / maxScroll)
                          ? 0
                          : MATH.max(0, MATH.min(1, base / maxScroll))
                      },
                      getHandleOffset = function getHandleOffset(scrollRatio) {
                        var offset = handleTrackDiff * scrollRatio
                        return (
                          (offset = isNaN(offset) ? 0 : offset),
                          (offset =
                            isRTLisHorizontal && !_rtlScrollBehavior.i
                              ? trackLength - handleLength - offset
                              : offset),
                          (offset = MATH.max(0, offset))
                        )
                      },
                      scrollRatio = getScrollRatio(nativeScroll),
                      handleOffset = getHandleOffset(
                        getScrollRatio(currentScroll)
                      ),
                      snappedHandleOffset = getHandleOffset(scrollRatio)
                    ;(scrollbarVarsInfo._maxScroll = maxScroll),
                      (scrollbarVarsInfo._currentScroll = nativeScroll),
                      (scrollbarVarsInfo._currentScrollRatio = scrollRatio),
                      _supportTransform
                        ? ((transformOffset = isRTLisHorizontal
                            ? -(trackLength - handleLength - handleOffset)
                            : handleOffset),
                          (translateValue = isHorizontal
                            ? strTranslateBrace + transformOffset + 'px, 0)'
                            : strTranslateBrace +
                              '0, ' +
                              transformOffset +
                              'px)'),
                          (handleCSS[strTransform] = translateValue),
                          _supportTransition &&
                            (handleCSS[strTransition] =
                              transition &&
                              MATH.abs(
                                handleOffset - scrollbarVarsInfo._handleOffset
                              ) > 1
                                ? getCSSTransitionString(
                                    scrollbarVars._handle
                                  ) +
                                  ', ' +
                                  (strTransform +
                                    _strSpace +
                                    transitionDuration) +
                                  'ms'
                                : _strEmpty))
                        : (handleCSS[scrollbarVars._left_top] = handleOffset),
                      nativeOverlayScrollbarsAreActive() ||
                        (scrollbarVars._handle.css(handleCSS),
                        _supportTransform &&
                          _supportTransition &&
                          transition &&
                          scrollbarVars._handle.one(
                            _strTransitionEndEvent,
                            function () {
                              _destroyed ||
                                scrollbarVars._handle.css(
                                  strTransition,
                                  _strEmpty
                                )
                            }
                          )),
                      (scrollbarVarsInfo._handleOffset = handleOffset),
                      (scrollbarVarsInfo._snappedHandleOffset =
                        snappedHandleOffset),
                      (scrollbarVarsInfo._trackLength = trackLength)
                  }
                  function refreshScrollbarsInteractive(isTrack, value) {
                    var action = value ? 'removeClass' : 'addClass',
                      element2 = isTrack
                        ? _scrollbarVerticalTrackElement
                        : _scrollbarVerticalHandleElement,
                      className = isTrack
                        ? _classNameScrollbarTrackOff
                        : _classNameScrollbarHandleOff
                    ;(isTrack
                      ? _scrollbarHorizontalTrackElement
                      : _scrollbarHorizontalHandleElement)[action](className),
                      element2[action](className)
                  }
                  function getScrollbarVars(isHorizontal) {
                    return {
                      _width_height: isHorizontal ? _strWidth : _strHeight,
                      _Width_Height: isHorizontal ? 'Width' : 'Height',
                      _left_top: isHorizontal ? _strLeft : _strTop,
                      _Left_Top: isHorizontal ? 'Left' : 'Top',
                      _x_y: isHorizontal ? _strX : _strY,
                      _X_Y: isHorizontal ? 'X' : 'Y',
                      _w_h: isHorizontal ? 'w' : 'h',
                      _l_t: isHorizontal ? 'l' : 't',
                      _track: isHorizontal
                        ? _scrollbarHorizontalTrackElement
                        : _scrollbarVerticalTrackElement,
                      _handle: isHorizontal
                        ? _scrollbarHorizontalHandleElement
                        : _scrollbarVerticalHandleElement,
                      _scrollbar: isHorizontal
                        ? _scrollbarHorizontalElement
                        : _scrollbarVerticalElement,
                      _info: isHorizontal
                        ? _scrollHorizontalInfo
                        : _scrollVerticalInfo,
                    }
                  }
                  function setupScrollbarCornerDOM(destroy) {
                    ;(_scrollbarCornerElement =
                      _scrollbarCornerElement ||
                      selectOrGenerateDivByClass(
                        _classNameScrollbarCorner,
                        !0
                      )),
                      destroy
                        ? _domExists && _initialized
                          ? removeClass(
                              _scrollbarCornerElement.removeAttr(LEXICON.s),
                              _classNamesDynamicDestroy
                            )
                          : remove(_scrollbarCornerElement)
                        : _domExists ||
                          _hostElement.append(_scrollbarCornerElement)
                  }
                  function setupScrollbarCornerEvents() {
                    var reconnectMutationObserver,
                      insideIFrame =
                        _windowElementNative.top !== _windowElementNative,
                      mouseDownPosition = {},
                      mouseDownSize = {},
                      mouseDownInvertedScale = {}
                    function documentDragMove(event) {
                      if (onMouseTouchDownContinue(event)) {
                        var pageOffset = getCoordinates(event),
                          hostElementCSS = {}
                        ;(_resizeHorizontal || _resizeBoth) &&
                          (hostElementCSS[_strWidth] =
                            mouseDownSize.w +
                            (pageOffset.x - mouseDownPosition.x) *
                              mouseDownInvertedScale.x),
                          (_resizeVertical || _resizeBoth) &&
                            (hostElementCSS[_strHeight] =
                              mouseDownSize.h +
                              (pageOffset.y - mouseDownPosition.y) *
                                mouseDownInvertedScale.y),
                          _hostElement.css(hostElementCSS),
                          COMPATIBILITY.stpP(event)
                      } else documentMouseTouchUp(event)
                    }
                    function documentMouseTouchUp(event) {
                      var eventIsTrusted = event !== undefined$1
                      setupResponsiveEventListener(
                        _documentElement,
                        [
                          _strSelectStartEvent,
                          _strMouseTouchMoveEvent,
                          _strMouseTouchUpEvent,
                        ],
                        [
                          documentOnSelectStart,
                          documentDragMove,
                          documentMouseTouchUp,
                        ],
                        !0
                      ),
                        removeClass(_bodyElement, _classNameDragging),
                        _scrollbarCornerElement.releaseCapture &&
                          _scrollbarCornerElement.releaseCapture(),
                        eventIsTrusted &&
                          (reconnectMutationObserver &&
                            connectMutationObservers(),
                          _base.update(_strAuto)),
                        (reconnectMutationObserver = !1)
                    }
                    function onMouseTouchDownContinue(event) {
                      var isTouchEvent =
                        (event.originalEvent || event).touches !== undefined$1
                      return (
                        !_sleeping &&
                        !_destroyed &&
                        (1 === COMPATIBILITY.mBtn(event) || isTouchEvent)
                      )
                    }
                    function getCoordinates(event) {
                      return _msieVersion && insideIFrame
                        ? { x: event.screenX, y: event.screenY }
                        : COMPATIBILITY.page(event)
                    }
                    addDestroyEventListener(
                      _scrollbarCornerElement,
                      _strMouseTouchDownEvent,
                      function (event) {
                        onMouseTouchDownContinue(event) &&
                          !_resizeNone &&
                          (_mutationObserversConnected &&
                            ((reconnectMutationObserver = !0),
                            disconnectMutationObservers()),
                          (mouseDownPosition = getCoordinates(event)),
                          (mouseDownSize.w =
                            _hostElementNative[LEXICON.oW] -
                            (_isBorderBox ? 0 : _paddingX)),
                          (mouseDownSize.h =
                            _hostElementNative[LEXICON.oH] -
                            (_isBorderBox ? 0 : _paddingY)),
                          (mouseDownInvertedScale =
                            getHostElementInvertedScale()),
                          setupResponsiveEventListener(
                            _documentElement,
                            [
                              _strSelectStartEvent,
                              _strMouseTouchMoveEvent,
                              _strMouseTouchUpEvent,
                            ],
                            [
                              documentOnSelectStart,
                              documentDragMove,
                              documentMouseTouchUp,
                            ]
                          ),
                          addClass(_bodyElement, _classNameDragging),
                          _scrollbarCornerElement.setCapture &&
                            _scrollbarCornerElement.setCapture(),
                          COMPATIBILITY.prvD(event),
                          COMPATIBILITY.stpP(event))
                      }
                    )
                  }
                  function dispatchCallback(name, args, dependent) {
                    if (!1 !== dependent)
                      if (_initialized) {
                        var ext,
                          callback = _currentPreparedOptions.callbacks[name],
                          extensionOnName = name
                        'on' === extensionOnName.substr(0, 2) &&
                          (extensionOnName =
                            extensionOnName.substr(2, 1).toLowerCase() +
                            extensionOnName.substr(3)),
                          type(callback) == TYPES.f &&
                            callback.call(_base, args),
                          each(_extensions, function () {
                            type((ext = this).on) == TYPES.f &&
                              ext.on(extensionOnName, args)
                          })
                      } else
                        _destroyed ||
                          _callbacksInitQeueue.push({ n: name, a: args })
                  }
                  function setTopRightBottomLeft(
                    targetCSSObject,
                    prefix,
                    values
                  ) {
                    ;(values = values || [
                      _strEmpty,
                      _strEmpty,
                      _strEmpty,
                      _strEmpty,
                    ]),
                      (targetCSSObject[
                        (prefix = prefix || _strEmpty) + _strTop
                      ] = values[0]),
                      (targetCSSObject[prefix + _strRight] = values[1]),
                      (targetCSSObject[prefix + _strBottom] = values[2]),
                      (targetCSSObject[prefix + _strLeft] = values[3])
                  }
                  function getTopRightBottomLeftHost(
                    prefix,
                    suffix,
                    zeroX,
                    zeroY
                  ) {
                    return (
                      (suffix = suffix || _strEmpty),
                      (prefix = prefix || _strEmpty),
                      {
                        t: zeroY
                          ? 0
                          : parseToZeroOrNumber(
                              _hostElement.css(prefix + _strTop + suffix)
                            ),
                        r: zeroX
                          ? 0
                          : parseToZeroOrNumber(
                              _hostElement.css(prefix + _strRight + suffix)
                            ),
                        b: zeroY
                          ? 0
                          : parseToZeroOrNumber(
                              _hostElement.css(prefix + _strBottom + suffix)
                            ),
                        l: zeroX
                          ? 0
                          : parseToZeroOrNumber(
                              _hostElement.css(prefix + _strLeft + suffix)
                            ),
                      }
                    )
                  }
                  function getCSSTransitionString(element) {
                    var transitionStr = VENDORS._cssProperty('transition'),
                      assembledValue = element.css(transitionStr)
                    if (assembledValue) return assembledValue
                    for (
                      var strResult,
                        valueArray,
                        j,
                        regExpString = '\\s*(([^,(]+(\\(.+?\\))?)+)[\\s,]*',
                        regExpMain = new RegExp(regExpString),
                        regExpValidate = new RegExp(
                          '^(' + regExpString + ')+$'
                        ),
                        properties =
                          'property duration timing-function delay'.split(' '),
                        result = [],
                        i = 0,
                        splitCssStyleByComma = function splitCssStyleByComma(
                          str
                        ) {
                          if (((strResult = []), !str.match(regExpValidate)))
                            return str
                          for (; str.match(regExpMain); )
                            strResult.push(RegExp.$1),
                              (str = str.replace(regExpMain, _strEmpty))
                          return strResult
                        };
                      i < properties[LEXICON.l];
                      i++
                    )
                      for (
                        valueArray = splitCssStyleByComma(
                          element.css(transitionStr + '-' + properties[i])
                        ),
                          j = 0;
                        j < valueArray[LEXICON.l];
                        j++
                      )
                        result[j] =
                          (result[j] ? result[j] + _strSpace : _strEmpty) +
                          valueArray[j]
                    return result.join(', ')
                  }
                  function createHostClassNameRegExp(
                    withCurrClassNameOption,
                    withOldClassNameOption
                  ) {
                    var i,
                      split,
                      appendix,
                      appendClasses = function appendClasses(
                        classes,
                        condition
                      ) {
                        if (
                          ((appendix = ''),
                          condition && _typeof(classes) == TYPES.s)
                        )
                          for (
                            split = classes.split(_strSpace), i = 0;
                            i < split[LEXICON.l];
                            i++
                          )
                            appendix += '|' + split[i] + '$'
                        return appendix
                      }
                    return new RegExp(
                      '(^' +
                        _classNameHostElement +
                        '([-_].+|)$)' +
                        appendClasses(
                          _classNameCache,
                          withCurrClassNameOption
                        ) +
                        appendClasses(_oldClassName, withOldClassNameOption),
                      'g'
                    )
                  }
                  function getHostElementInvertedScale() {
                    var rect = _paddingElementNative[LEXICON.bCR]()
                    return {
                      x:
                        (_supportTransform &&
                          1 /
                            (MATH.round(rect.width) /
                              _paddingElementNative[LEXICON.oW])) ||
                        1,
                      y:
                        (_supportTransform &&
                          1 /
                            (MATH.round(rect.height) /
                              _paddingElementNative[LEXICON.oH])) ||
                        1,
                    }
                  }
                  function isHTMLElement(o) {
                    var strOwnerDocument = 'ownerDocument',
                      strHTMLElement = 'HTMLElement',
                      wnd =
                        (o &&
                          o[strOwnerDocument] &&
                          o[strOwnerDocument].parentWindow) ||
                        window
                    return _typeof(wnd[strHTMLElement]) == TYPES.o
                      ? o instanceof wnd[strHTMLElement]
                      : o &&
                          _typeof(o) == TYPES.o &&
                          null !== o &&
                          1 === o.nodeType &&
                          _typeof(o.nodeName) == TYPES.s
                  }
                  function getArrayDifferences(a1, a2) {
                    var i,
                      k,
                      a = [],
                      diff = []
                    for (i = 0; i < a1.length; i++) a[a1[i]] = !0
                    for (i = 0; i < a2.length; i++)
                      a[a2[i]] ? delete a[a2[i]] : (a[a2[i]] = !0)
                    for (k in a) diff.push(k)
                    return diff
                  }
                  function parseToZeroOrNumber(value, toFloat) {
                    var num = toFloat ? parseFloat(value) : parseInt(value, 10)
                    return isNaN(num) ? 0 : num
                  }
                  function getTextareaInfo() {
                    var textareaCursorPosition =
                      _targetElementNative.selectionStart
                    if (textareaCursorPosition !== undefined$1) {
                      var rowCols,
                        i,
                        textareaValue = _targetElement.val(),
                        textareaLength = textareaValue[LEXICON.l],
                        textareaRowSplit = textareaValue.split('\n'),
                        textareaLastRow = textareaRowSplit[LEXICON.l],
                        textareaCurrentCursorRowSplit = textareaValue
                          .substr(0, textareaCursorPosition)
                          .split('\n'),
                        widestRow = 0,
                        textareaLastCol = 0,
                        cursorRow = textareaCurrentCursorRowSplit[LEXICON.l],
                        cursorCol =
                          textareaCurrentCursorRowSplit[
                            textareaCurrentCursorRowSplit[LEXICON.l] - 1
                          ][LEXICON.l]
                      for (i = 0; i < textareaRowSplit[LEXICON.l]; i++)
                        (rowCols = textareaRowSplit[i][LEXICON.l]) >
                          textareaLastCol &&
                          ((widestRow = i + 1), (textareaLastCol = rowCols))
                      return {
                        _cursorRow: cursorRow,
                        _cursorColumn: cursorCol,
                        _rows: textareaLastRow,
                        _columns: textareaLastCol,
                        _widestRow: widestRow,
                        _cursorPosition: textareaCursorPosition,
                        _cursorMax: textareaLength,
                      }
                    }
                  }
                  function nativeOverlayScrollbarsAreActive() {
                    return (
                      _ignoreOverlayScrollbarHidingCache &&
                      _nativeScrollbarIsOverlaid.x &&
                      _nativeScrollbarIsOverlaid.y
                    )
                  }
                  function getContentMeasureElement() {
                    return _isTextarea
                      ? _textareaCoverElement[0]
                      : _contentElementNative
                  }
                  function generateDiv(classesOrAttrs, content) {
                    return (
                      '<div ' +
                      (classesOrAttrs
                        ? type(classesOrAttrs) == TYPES.s
                          ? 'class="' + classesOrAttrs + '"'
                          : (function () {
                              var key,
                                attrs = _strEmpty
                              if (FRAMEWORK.isPlainObject(classesOrAttrs))
                                for (key in classesOrAttrs)
                                  attrs +=
                                    ('c' === key ? 'class' : key) +
                                    '="' +
                                    classesOrAttrs[key] +
                                    '" '
                              return attrs
                            })()
                        : _strEmpty) +
                      '>' +
                      (content || _strEmpty) +
                      '</div>'
                    )
                  }
                  function selectOrGenerateDivByClass(
                    className,
                    selectParentOrOnlyChildren
                  ) {
                    var onlyChildren =
                        type(selectParentOrOnlyChildren) == TYPES.b,
                      selectParent = onlyChildren
                        ? _hostElement
                        : selectParentOrOnlyChildren || _hostElement
                    return _domExists && !selectParent[LEXICON.l]
                      ? null
                      : _domExists
                      ? selectParent[onlyChildren ? 'children' : 'find'](
                          _strDot + className.replace(/\s/g, _strDot)
                        ).eq(0)
                      : FRAMEWORK(generateDiv(className))
                  }
                  function getObjectPropVal(obj, path) {
                    for (
                      var val, splits = path.split(_strDot), i = 0;
                      i < splits.length;
                      i++
                    ) {
                      if (!obj[LEXICON.hOP](splits[i])) return
                      ;(val = obj[splits[i]]),
                        i < splits.length && type(val) == TYPES.o && (obj = val)
                    }
                    return val
                  }
                  function setObjectPropVal(obj, path, val) {
                    for (
                      var splits = path.split(_strDot),
                        splitsLength = splits.length,
                        i = 0,
                        extendObj = {},
                        extendObjRoot = extendObj;
                      i < splitsLength;
                      i++
                    )
                      extendObj = extendObj[splits[i]] =
                        i + 1 < splitsLength ? {} : val
                    FRAMEWORK.extend(obj, extendObjRoot, !0)
                  }
                  function eachUpdateOnLoad(action) {
                    var updateOnLoad = _currentPreparedOptions.updateOnLoad
                    ;(updateOnLoad =
                      type(updateOnLoad) == TYPES.s
                        ? updateOnLoad.split(_strSpace)
                        : updateOnLoad),
                      COMPATIBILITY.isA(updateOnLoad) &&
                        !_destroyed &&
                        each(updateOnLoad, action)
                  }
                  function checkCache(current, cache, force) {
                    if (force) return force
                    if (type(current) != TYPES.o || type(cache) != TYPES.o)
                      return current !== cache
                    for (var prop in current)
                      if ('c' !== prop) {
                        if (
                          !current[LEXICON.hOP](prop) ||
                          !cache[LEXICON.hOP](prop)
                        )
                          return !0
                        if (checkCache(current[prop], cache[prop])) return !0
                      }
                    return !1
                  }
                  function extendDeep() {
                    return FRAMEWORK.extend.apply(
                      this,
                      [!0].concat([].slice.call(arguments))
                    )
                  }
                  function addClass(el, classes) {
                    return _frameworkProto.addClass.call(el, classes)
                  }
                  function removeClass(el, classes) {
                    return _frameworkProto.removeClass.call(el, classes)
                  }
                  function addRemoveClass(el, classes, doAdd) {
                    return doAdd
                      ? addClass(el, classes)
                      : removeClass(el, classes)
                  }
                  function remove(el) {
                    return _frameworkProto.remove.call(el)
                  }
                  function findFirst(el, selector) {
                    return _frameworkProto.find.call(el, selector).eq(0)
                  }
                  function construct(targetElement, options, extensions) {
                    var initBodyScroll, _bodyMouseTouchDownListener
                    return (
                      (_defaultOptions = globals.defaultOptions),
                      (_nativeScrollbarStyling =
                        globals.nativeScrollbarStyling),
                      (_nativeScrollbarSize = extendDeep(
                        {},
                        globals.nativeScrollbarSize
                      )),
                      (_nativeScrollbarIsOverlaid = extendDeep(
                        {},
                        globals.nativeScrollbarIsOverlaid
                      )),
                      (_overlayScrollbarDummySize = extendDeep(
                        {},
                        globals.overlayScrollbarDummySize
                      )),
                      (_rtlScrollBehavior = extendDeep(
                        {},
                        globals.rtlScrollBehavior
                      )),
                      setOptions(extendDeep({}, _defaultOptions, options)),
                      (_cssCalc = globals.cssCalc),
                      (_msieVersion = globals.msie),
                      (_autoUpdateRecommended = globals.autoUpdateRecommended),
                      (_supportTransition = globals.supportTransition),
                      (_supportTransform = globals.supportTransform),
                      (_supportPassiveEvents = globals.supportPassiveEvents),
                      (_supportResizeObserver = globals.supportResizeObserver),
                      (_supportMutationObserver =
                        globals.supportMutationObserver),
                      (_documentElement = FRAMEWORK(
                        targetElement.ownerDocument
                      )),
                      (_documentElementNative = _documentElement[0]),
                      (_windowElement = FRAMEWORK(
                        _documentElementNative.defaultView ||
                          _documentElementNative.parentWindow
                      )),
                      (_windowElementNative = _windowElement[0]),
                      (_htmlElement = findFirst(_documentElement, 'html')),
                      (_bodyElement = findFirst(_htmlElement, 'body')),
                      (_targetElement = FRAMEWORK(targetElement)),
                      (_targetElementNative = _targetElement[0]),
                      (_isTextarea = _targetElement.is('textarea')),
                      (_isBody = _targetElement.is('body')),
                      (_documentMixed = _documentElementNative !== document),
                      (_domExists = _isTextarea
                        ? _targetElement.hasClass(_classNameTextareaElement) &&
                          _targetElement
                            .parent()
                            .hasClass(_classNameContentElement)
                        : _targetElement.hasClass(_classNameHostElement) &&
                          _targetElement.children(
                            _strDot + _classNamePaddingElement
                          )[LEXICON.l]),
                      _nativeScrollbarIsOverlaid.x &&
                      _nativeScrollbarIsOverlaid.y &&
                      !_currentPreparedOptions.nativeScrollbarsOverlaid
                        .initialize
                        ? (dispatchCallback('onInitializationWithdrawn'),
                          _domExists &&
                            (setupStructureDOM(!0),
                            setupScrollbarsDOM(!0),
                            setupScrollbarCornerDOM(!0)),
                          (_destroyed = !0),
                          (_sleeping = !0),
                          _base)
                        : (_isBody &&
                            (((initBodyScroll = {}).l = MATH.max(
                              _targetElement[_strScrollLeft](),
                              _htmlElement[_strScrollLeft](),
                              _windowElement[_strScrollLeft]()
                            )),
                            (initBodyScroll.t = MATH.max(
                              _targetElement[_strScrollTop](),
                              _htmlElement[_strScrollTop](),
                              _windowElement[_strScrollTop]()
                            )),
                            (_bodyMouseTouchDownListener =
                              function bodyMouseTouchDownListener() {
                                _viewportElement.removeAttr(LEXICON.ti),
                                  setupResponsiveEventListener(
                                    _viewportElement,
                                    _strMouseTouchDownEvent,
                                    _bodyMouseTouchDownListener,
                                    !0,
                                    !0
                                  )
                              })),
                          setupStructureDOM(),
                          setupScrollbarsDOM(),
                          setupScrollbarCornerDOM(),
                          setupStructureEvents(),
                          setupScrollbarEvents(!0),
                          setupScrollbarEvents(!1),
                          setupScrollbarCornerEvents(),
                          createMutationObservers(),
                          setupResizeObserver(
                            _sizeObserverElement,
                            hostOnResized
                          ),
                          _isBody &&
                            (_viewportElement[_strScrollLeft](initBodyScroll.l)[
                              _strScrollTop
                            ](initBodyScroll.t),
                            document.activeElement == targetElement &&
                              _viewportElementNative.focus &&
                              (_viewportElement.attr(LEXICON.ti, '-1'),
                              _viewportElementNative.focus(),
                              setupResponsiveEventListener(
                                _viewportElement,
                                _strMouseTouchDownEvent,
                                _bodyMouseTouchDownListener,
                                !1,
                                !0
                              ))),
                          _base.update(_strAuto),
                          (_initialized = !0),
                          dispatchCallback('onInitialized'),
                          each(_callbacksInitQeueue, function (index, value) {
                            dispatchCallback(value.n, value.a)
                          }),
                          (_callbacksInitQeueue = []),
                          type(extensions) == TYPES.s &&
                            (extensions = [extensions]),
                          COMPATIBILITY.isA(extensions)
                            ? each(extensions, function (index, value) {
                                _base.addExt(value)
                              })
                            : FRAMEWORK.isPlainObject(extensions) &&
                              each(extensions, function (key, value) {
                                _base.addExt(key, value)
                              }),
                          setTimeout(function () {
                            _supportTransition &&
                              !_destroyed &&
                              addClass(_hostElement, _classNameHostTransition)
                          }, 333),
                          _base)
                    )
                  }
                }
                return (
                  (_plugin = window[PLUGINNAME] =
                    function (pluginTargetElements, options, extensions) {
                      if (0 === arguments[LEXICON.l]) return this
                      var inst,
                        result,
                        arr = [],
                        optsIsPlainObj = FRAMEWORK.isPlainObject(options)
                      return pluginTargetElements
                        ? ((pluginTargetElements =
                            pluginTargetElements[LEXICON.l] != undefined$1
                              ? pluginTargetElements
                              : [
                                  pluginTargetElements[0] ||
                                    pluginTargetElements,
                                ]),
                          initOverlayScrollbarsStatics(),
                          pluginTargetElements[LEXICON.l] > 0 &&
                            (optsIsPlainObj
                              ? FRAMEWORK.each(
                                  pluginTargetElements,
                                  function (i, v) {
                                    ;(inst = v) !== undefined$1 &&
                                      arr.push(
                                        OverlayScrollbarsInstance(
                                          inst,
                                          options,
                                          extensions,
                                          _pluginsGlobals,
                                          _pluginsAutoUpdateLoop
                                        )
                                      )
                                  }
                                )
                              : FRAMEWORK.each(
                                  pluginTargetElements,
                                  function (i, v) {
                                    ;(inst = INSTANCES(v)),
                                      (('!' === options &&
                                        _plugin.valid(inst)) ||
                                        (COMPATIBILITY.type(options) ==
                                          TYPES.f &&
                                          options(v, inst)) ||
                                        options === undefined$1) &&
                                        arr.push(inst)
                                  }
                                ),
                            (result = 1 === arr[LEXICON.l] ? arr[0] : arr)),
                          result)
                        : optsIsPlainObj || !options
                        ? result
                        : arr
                    }),
                  (_plugin.globals = function () {
                    initOverlayScrollbarsStatics()
                    var globals = FRAMEWORK.extend(!0, {}, _pluginsGlobals)
                    return delete globals.msie, globals
                  }),
                  (_plugin.defaultOptions = function (newDefaultOptions) {
                    initOverlayScrollbarsStatics()
                    var currDefaultOptions = _pluginsGlobals.defaultOptions
                    if (newDefaultOptions === undefined$1)
                      return FRAMEWORK.extend(!0, {}, currDefaultOptions)
                    _pluginsGlobals.defaultOptions = FRAMEWORK.extend(
                      !0,
                      {},
                      currDefaultOptions,
                      _pluginsOptions._validate(
                        newDefaultOptions,
                        _pluginsOptions._template,
                        !0,
                        currDefaultOptions
                      )._default
                    )
                  }),
                  (_plugin.valid = function (osInstance) {
                    return (
                      osInstance instanceof _plugin &&
                      !osInstance.getState().destroyed
                    )
                  }),
                  (_plugin.extension = function (
                    extensionName,
                    extension,
                    defaultOptions
                  ) {
                    var extNameTypeString =
                        COMPATIBILITY.type(extensionName) == TYPES.s,
                      argLen = arguments[LEXICON.l],
                      i = 0
                    if (argLen < 1 || !extNameTypeString)
                      return FRAMEWORK.extend(
                        !0,
                        { length: _pluginsExtensions[LEXICON.l] },
                        _pluginsExtensions
                      )
                    if (extNameTypeString)
                      if (COMPATIBILITY.type(extension) == TYPES.f)
                        _pluginsExtensions.push({
                          name: extensionName,
                          extensionFactory: extension,
                          defaultOptions: defaultOptions,
                        })
                      else
                        for (; i < _pluginsExtensions[LEXICON.l]; i++)
                          if (_pluginsExtensions[i].name === extensionName) {
                            if (!(argLen > 1))
                              return FRAMEWORK.extend(
                                !0,
                                {},
                                _pluginsExtensions[i]
                              )
                            _pluginsExtensions.splice(i, 1)
                          }
                  }),
                  _plugin
                )
              })()
            return (
              JQUERY &&
                JQUERY.fn &&
                (JQUERY.fn.overlayScrollbars = function (options, extensions) {
                  var _elements = this
                  return JQUERY.isPlainObject(options)
                    ? (JQUERY.each(_elements, function () {
                        PLUGIN(this, options, extensions)
                      }),
                      _elements)
                    : PLUGIN(_elements, options)
                }),
              PLUGIN
            )
          })(global, global.document, void 0))
        var OverlayScrollbars = OverlayScrollbars$1.exports,
          OverlayScrollbarsComponent = function OverlayScrollbarsComponent(_a) {
            var _a$options = _a.options,
              options = void 0 === _a$options ? {} : _a$options,
              extensions = _a.extensions,
              className = _a.className,
              children = _a.children,
              rest = (0, _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_25__.d)(
                _a,
                ['options', 'extensions', 'className', 'children']
              ),
              osTargetRef = (0, react__WEBPACK_IMPORTED_MODULE_22__.useRef)(),
              osInstance = (0, react__WEBPACK_IMPORTED_MODULE_22__.useRef)()
            return (
              (0, react__WEBPACK_IMPORTED_MODULE_22__.useEffect)(function () {
                return (
                  (osInstance.current = OverlayScrollbars(
                    osTargetRef.current,
                    options,
                    extensions
                  )),
                  mergeHostClassNames(osInstance.current, className),
                  function () {
                    OverlayScrollbars.valid(osInstance.current) &&
                      (osInstance.current.destroy(),
                      (osInstance.current = null))
                  }
                )
              }, []),
              (0, react__WEBPACK_IMPORTED_MODULE_22__.useEffect)(
                function () {
                  OverlayScrollbars.valid(osInstance.current) &&
                    osInstance.current.options(options)
                },
                [options]
              ),
              (0, react__WEBPACK_IMPORTED_MODULE_22__.useEffect)(
                function () {
                  OverlayScrollbars.valid(osInstance.current) &&
                    mergeHostClassNames(osInstance.current, className)
                },
                [className]
              ),
              react__WEBPACK_IMPORTED_MODULE_22__.createElement(
                'div',
                Object.assign({ className: 'os-host' }, rest, {
                  ref: osTargetRef,
                }),
                react__WEBPACK_IMPORTED_MODULE_22__.createElement('div', {
                  className: 'os-resize-observer-host',
                }),
                react__WEBPACK_IMPORTED_MODULE_22__.createElement(
                  'div',
                  { className: 'os-padding' },
                  react__WEBPACK_IMPORTED_MODULE_22__.createElement(
                    'div',
                    { className: 'os-viewport' },
                    react__WEBPACK_IMPORTED_MODULE_22__.createElement(
                      'div',
                      { className: 'os-content' },
                      children
                    )
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_22__.createElement(
                  'div',
                  { className: 'os-scrollbar os-scrollbar-horizontal ' },
                  react__WEBPACK_IMPORTED_MODULE_22__.createElement(
                    'div',
                    { className: 'os-scrollbar-track' },
                    react__WEBPACK_IMPORTED_MODULE_22__.createElement('div', {
                      className: 'os-scrollbar-handle',
                    })
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_22__.createElement(
                  'div',
                  { className: 'os-scrollbar os-scrollbar-vertical' },
                  react__WEBPACK_IMPORTED_MODULE_22__.createElement(
                    'div',
                    { className: 'os-scrollbar-track' },
                    react__WEBPACK_IMPORTED_MODULE_22__.createElement('div', {
                      className: 'os-scrollbar-handle',
                    })
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_22__.createElement('div', {
                  className: 'os-scrollbar-corner',
                })
              )
            )
          }
        function mergeHostClassNames(osInstance, className) {
          if (OverlayScrollbars.valid(osInstance)) {
            var host = osInstance.getElements().host,
              regex = new RegExp(
                '(^os-host([-_].+|)$)|'.concat(
                  osInstance.options().className.replace(/\s/g, '$|'),
                  '$'
                ),
                'g'
              ),
              osClassNames = host.className
                .split(' ')
                .filter(function (name) {
                  return name.match(regex)
                })
                .join(' ')
            host.className = ''
              .concat(osClassNames, ' ')
              .concat(className || '')
          }
        }
      },
  },
])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxXQUFXaHlDLFVBQVV1SSxVQUFVdFMsUUFBUSxNQUFPLE1BQU8sS0FBTSxLQUM3R2s5QyxhQUFlNWlCLEtBQUtob0IsVUFBVTlSLE1BQU0sS0FBS3FoQyxRQUFPLFNBQVV0aUMsTUFDNUQsT0FBT0EsS0FBSzBMLE1BQU1xNEIsTUFDcEIsSUFBR3A0QixLQUFLLEtBQ1JvdkIsS0FBS2hvQixVQUFZLEdBQUdwUSxPQUFPZzdDLGFBQWMsS0FBS2g3QyxPQUFPb1EsV0FBYSxHQUNwRSxDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtYmlnLWNhbGVuZGFyLy4vbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svY29tcG9uZW50cy9kaXN0L2VzbS9PdmVybGF5U2Nyb2xsYmFycy0xMzU1ZjQ0Yy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zbGljZS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC5leGVjLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnJlcGxhY2UuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc3BsaXQuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QudG8tc3RyaW5nLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLnRvLXN0cmluZy5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5tYXRjaC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmpvaW4uanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zcGxpY2UuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLmNvbnN0cnVjdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMubnVtYmVyLnRvLWZpeGVkLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24ubmFtZS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5hc3NpZ24uanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuZGVzY3JpcHRpb24uanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3IuanNcIjtcbmltcG9ydCB7IGMgYXMgY29tbW9uanNHbG9iYWwsIGQgYXMgX19yZXN0IH0gZnJvbSAnLi9pbmRleC02ODFlNGIwNy5qcyc7XG5pbXBvcnQgUmVhY3RfX2RlZmF1bHQsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ0BzdG9yeWJvb2svdGhlbWluZyc7XG5pbXBvcnQgJ21lbW9pemVyaWZpYyc7XG5pbXBvcnQgJ0BzdG9yeWJvb2svY3NmJztcbmltcG9ydCAncXMnO1xuaW1wb3J0ICdAc3Rvcnlib29rL2NsaWVudC1sb2dnZXInO1xudmFyIE92ZXJsYXlTY3JvbGxiYXJzJDEgPSB7XG4gIGV4cG9ydHM6IHt9XG59O1xuLyohXHJcbiAqIE92ZXJsYXlTY3JvbGxiYXJzXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9LaW5nU29yYS9PdmVybGF5U2Nyb2xsYmFyc1xyXG4gKlxyXG4gKiBWZXJzaW9uOiAxLjEzLjBcclxuICpcclxuICogQ29weXJpZ2h0IEtpbmdTb3JhIHwgUmVuZSBIYWFzLlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vS2luZ1NvcmFcclxuICpcclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG4gKiBEYXRlOiAwMi4wOC4yMDIwXHJcbiAqL1xuXG4oZnVuY3Rpb24gKG1vZHVsZSkge1xuICAoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShnbG9iYWwsIGdsb2JhbC5kb2N1bWVudCwgdW5kZWZpbmVkKTtcbiAgfSkodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBjb21tb25qc0dsb2JhbCwgZnVuY3Rpb24gKHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCQxKSB7XG4gICAgdmFyIFBMVUdJTk5BTUUgPSAnT3ZlcmxheVNjcm9sbGJhcnMnO1xuICAgIHZhciBUWVBFUyA9IHtcbiAgICAgIG86ICdvYmplY3QnLFxuICAgICAgZjogJ2Z1bmN0aW9uJyxcbiAgICAgIGE6ICdhcnJheScsXG4gICAgICBzOiAnc3RyaW5nJyxcbiAgICAgIGI6ICdib29sZWFuJyxcbiAgICAgIG46ICdudW1iZXInLFxuICAgICAgdTogJ3VuZGVmaW5lZCcsXG4gICAgICB6OiAnbnVsbCcgLy9kIDogJ2RhdGUnLFxuICAgICAgLy9lIDogJ2Vycm9yJyxcbiAgICAgIC8vciA6ICdyZWdleHAnLFxuICAgICAgLy95IDogJ3N5bWJvbCdcblxuICAgIH07XG4gICAgdmFyIExFWElDT04gPSB7XG4gICAgICBjOiAnY2xhc3MnLFxuICAgICAgczogJ3N0eWxlJyxcbiAgICAgIGk6ICdpZCcsXG4gICAgICBsOiAnbGVuZ3RoJyxcbiAgICAgIHA6ICdwcm90b3R5cGUnLFxuICAgICAgdGk6ICd0YWJpbmRleCcsXG4gICAgICBvSDogJ29mZnNldEhlaWdodCcsXG4gICAgICBjSDogJ2NsaWVudEhlaWdodCcsXG4gICAgICBzSDogJ3Njcm9sbEhlaWdodCcsXG4gICAgICBvVzogJ29mZnNldFdpZHRoJyxcbiAgICAgIGNXOiAnY2xpZW50V2lkdGgnLFxuICAgICAgc1c6ICdzY3JvbGxXaWR0aCcsXG4gICAgICBoT1A6ICdoYXNPd25Qcm9wZXJ0eScsXG4gICAgICBiQ1I6ICdnZXRCb3VuZGluZ0NsaWVudFJlY3QnXG4gICAgfTtcblxuICAgIHZhciBWRU5ET1JTID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy9odHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0dsb3NzYXJ5L1ZlbmRvcl9QcmVmaXhcbiAgICAgIHZhciBqc0NhY2hlID0ge307XG4gICAgICB2YXIgY3NzQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBjc3NQcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnLW8tJywgJy1tcy0nXTtcbiAgICAgIHZhciBqc1ByZWZpeGVzID0gWydXZWJLaXQnLCAnTW96JywgJ08nLCAnTVMnXTtcblxuICAgICAgZnVuY3Rpb24gZmlyc3RMZXR0ZXJUb1VwcGVyKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBfY3NzUHJlZml4ZXM6IGNzc1ByZWZpeGVzLFxuICAgICAgICBfanNQcmVmaXhlczoganNQcmVmaXhlcyxcbiAgICAgICAgX2Nzc1Byb3BlcnR5OiBmdW5jdGlvbiBfY3NzUHJvcGVydHkobmFtZSkge1xuICAgICAgICAgIHZhciByZXN1bHQgPSBjc3NDYWNoZVtuYW1lXTtcbiAgICAgICAgICBpZiAoY3NzQ2FjaGVbTEVYSUNPTi5oT1BdKG5hbWUpKSByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIHZhciB1cHBlcmNhc2VkTmFtZSA9IGZpcnN0TGV0dGVyVG9VcHBlcihuYW1lKTtcbiAgICAgICAgICB2YXIgZWxtU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVtMRVhJQ09OLnNdO1xuICAgICAgICAgIHZhciByZXN1bHRQb3NzaWJpbGl0aWVzO1xuICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICB2YXIgdjtcbiAgICAgICAgICB2YXIgY3VyclZlbmRvcldpdGhvdXREYXNoZXM7XG5cbiAgICAgICAgICBmb3IgKDsgaSA8IGNzc1ByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjdXJyVmVuZG9yV2l0aG91dERhc2hlcyA9IGNzc1ByZWZpeGVzW2ldLnJlcGxhY2UoLy0vZywgJycpO1xuICAgICAgICAgICAgcmVzdWx0UG9zc2liaWxpdGllcyA9IFtuYW1lLCAvL3RyYW5zaXRpb25cbiAgICAgICAgICAgIGNzc1ByZWZpeGVzW2ldICsgbmFtZSwgLy8td2Via2l0LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGN1cnJWZW5kb3JXaXRob3V0RGFzaGVzICsgdXBwZXJjYXNlZE5hbWUsIC8vd2Via2l0VHJhbnNpdGlvblxuICAgICAgICAgICAgZmlyc3RMZXR0ZXJUb1VwcGVyKGN1cnJWZW5kb3JXaXRob3V0RGFzaGVzKSArIHVwcGVyY2FzZWROYW1lIC8vV2Via2l0VHJhbnNpdGlvblxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgZm9yICh2ID0gMDsgdiA8IHJlc3VsdFBvc3NpYmlsaXRpZXNbTEVYSUNPTi5sXTsgdisrKSB7XG4gICAgICAgICAgICAgIGlmIChlbG1TdHlsZVtyZXN1bHRQb3NzaWJpbGl0aWVzW3ZdXSAhPT0gdW5kZWZpbmVkJDEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHRQb3NzaWJpbGl0aWVzW3ZdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY3NzQ2FjaGVbbmFtZV0gPSByZXN1bHQ7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcbiAgICAgICAgX2Nzc1Byb3BlcnR5VmFsdWU6IGZ1bmN0aW9uIF9jc3NQcm9wZXJ0eVZhbHVlKHByb3BlcnR5LCB2YWx1ZXMsIHN1ZmZpeCkge1xuICAgICAgICAgIHZhciBuYW1lID0gcHJvcGVydHkgKyAnICcgKyB2YWx1ZXM7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGNzc0NhY2hlW25hbWVdO1xuICAgICAgICAgIGlmIChjc3NDYWNoZVtMRVhJQ09OLmhPUF0obmFtZSkpIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgdmFyIGR1bW15U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVtMRVhJQ09OLnNdO1xuICAgICAgICAgIHZhciBwb3NzYmxlVmFsdWVzID0gdmFsdWVzLnNwbGl0KCcgJyk7XG4gICAgICAgICAgdmFyIHByZXBhcmVkU3VmZml4ID0gc3VmZml4IHx8ICcnO1xuICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICB2YXIgdiA9IC0xO1xuICAgICAgICAgIHZhciBwcm9wO1xuXG4gICAgICAgICAgZm9yICg7IGkgPCBwb3NzYmxlVmFsdWVzW0xFWElDT04ubF07IGkrKykge1xuICAgICAgICAgICAgZm9yICg7IHYgPCBWRU5ET1JTLl9jc3NQcmVmaXhlc1tMRVhJQ09OLmxdOyB2KyspIHtcbiAgICAgICAgICAgICAgcHJvcCA9IHYgPCAwID8gcG9zc2JsZVZhbHVlc1tpXSA6IFZFTkRPUlMuX2Nzc1ByZWZpeGVzW3ZdICsgcG9zc2JsZVZhbHVlc1tpXTtcbiAgICAgICAgICAgICAgZHVtbXlTdHlsZS5jc3NUZXh0ID0gcHJvcGVydHkgKyAnOicgKyBwcm9wICsgcHJlcGFyZWRTdWZmaXg7XG5cbiAgICAgICAgICAgICAgaWYgKGR1bW15U3R5bGVbTEVYSUNPTi5sXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHByb3A7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjc3NDYWNoZVtuYW1lXSA9IHJlc3VsdDtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuICAgICAgICBfanNBUEk6IGZ1bmN0aW9uIF9qc0FQSShuYW1lLCBpc0ludGVyZmFjZSwgZmFsbGJhY2spIHtcbiAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGpzQ2FjaGVbbmFtZV07XG5cbiAgICAgICAgICBpZiAoIWpzQ2FjaGVbTEVYSUNPTi5oT1BdKG5hbWUpKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB3aW5kb3dbbmFtZV07XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwganNQcmVmaXhlc1tMRVhJQ09OLmxdOyBpKyspIHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0IHx8IHdpbmRvd1soaXNJbnRlcmZhY2UgPyBqc1ByZWZpeGVzW2ldIDoganNQcmVmaXhlc1tpXS50b0xvd2VyQ2FzZSgpKSArIGZpcnN0TGV0dGVyVG9VcHBlcihuYW1lKV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGpzQ2FjaGVbbmFtZV0gPSByZXN1bHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdCB8fCBmYWxsYmFjaztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KCk7XG5cbiAgICB2YXIgQ09NUEFUSUJJTElUWSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIHdpbmRvd1NpemUoeCkge1xuICAgICAgICByZXR1cm4geCA/IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtMRVhJQ09OLmNXXSB8fCBkb2N1bWVudC5ib2R5W0xFWElDT04uY1ddIDogd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtMRVhJQ09OLmNIXSB8fCBkb2N1bWVudC5ib2R5W0xFWElDT04uY0hdO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBiaW5kKGZ1bmMsIHRoaXNPYmopIHtcbiAgICAgICAgaWYgKF90eXBlb2YoZnVuYykgIT0gVFlQRVMuZikge1xuICAgICAgICAgIHRocm93IFwiQ2FuJ3QgYmluZCBmdW5jdGlvbiFcIjsgLy8gY2xvc2VzdCB0aGluZyBwb3NzaWJsZSB0byB0aGUgRUNNQVNjcmlwdCA1XG4gICAgICAgICAgLy8gaW50ZXJuYWwgSXNDYWxsYWJsZSBmdW5jdGlvblxuICAgICAgICAgIC8vdGhyb3cgbmV3IFR5cGVFcnJvcignRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgLSB3aGF0IGlzIHRyeWluZyB0byBiZSBib3VuZCBpcyBub3QgY2FsbGFibGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcm90byA9IExFWElDT04ucDtcbiAgICAgICAgdmFyIGFBcmdzID0gQXJyYXlbcHJvdG9dLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcblxuICAgICAgICB2YXIgZk5PUCA9IGZ1bmN0aW9uIGZOT1AoKSB7fTtcblxuICAgICAgICB2YXIgZkJvdW5kID0gZnVuY3Rpb24gZkJvdW5kKCkge1xuICAgICAgICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMgaW5zdGFuY2VvZiBmTk9QID8gdGhpcyA6IHRoaXNPYmosIGFBcmdzLmNvbmNhdChBcnJheVtwcm90b10uc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGZ1bmNbcHJvdG9dKSBmTk9QW3Byb3RvXSA9IGZ1bmNbcHJvdG9dOyAvLyBGdW5jdGlvbi5wcm90b3R5cGUgZG9lc24ndCBoYXZlIGEgcHJvdG90eXBlIHByb3BlcnR5XG5cbiAgICAgICAgZkJvdW5kW3Byb3RvXSA9IG5ldyBmTk9QKCk7XG4gICAgICAgIHJldHVybiBmQm91bmQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldHMgdGhlIGN1cnJlbnQgd2luZG93IHdpZHRoLlxyXG4gICAgICAgICAqIEByZXR1cm5zIHtOdW1iZXJ8bnVtYmVyfSBUaGUgY3VycmVudCB3aW5kb3cgd2lkdGggaW4gcGl4ZWwuXHJcbiAgICAgICAgICovXG4gICAgICAgIHdXOiBiaW5kKHdpbmRvd1NpemUsIDAsIHRydWUpLFxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldHMgdGhlIGN1cnJlbnQgd2luZG93IGhlaWdodC5cclxuICAgICAgICAgKiBAcmV0dXJucyB7TnVtYmVyfG51bWJlcn0gVGhlIGN1cnJlbnQgd2luZG93IGhlaWdodCBpbiBwaXhlbC5cclxuICAgICAgICAgKi9cbiAgICAgICAgd0g6IGJpbmQod2luZG93U2l6ZSwgMCksXG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyB0aGUgTXV0YXRpb25PYnNlcnZlciBPYmplY3Qgb3IgdW5kZWZpbmVkIGlmIG5vdCBzdXBwb3J0ZWQuXHJcbiAgICAgICAgICogQHJldHVybnMge011dGF0aW9uT2JzZXJ2ZXJ8Knx1bmRlZmluZWR9IFRoZSBNdXRhdGlvbnNPYnNlcnZlciBPYmplY3Qgb3IgdW5kZWZpbmVkLlxyXG4gICAgICAgICAqL1xuICAgICAgICBtTzogYmluZChWRU5ET1JTLl9qc0FQSSwgMCwgJ011dGF0aW9uT2JzZXJ2ZXInLCB0cnVlKSxcblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXRzIHRoZSBSZXNpemVPYnNlcnZlciBPYmplY3Qgb3IgdW5kZWZpbmVkIGlmIG5vdCBzdXBwb3J0ZWQuXHJcbiAgICAgICAgICogQHJldHVybnMge011dGF0aW9uT2JzZXJ2ZXJ8Knx1bmRlZmluZWR9IFRoZSBSZXNpemVPYnNlcnZlciBPYmplY3Qgb3IgdW5kZWZpbmVkLlxyXG4gICAgICAgICAqL1xuICAgICAgICByTzogYmluZChWRU5ET1JTLl9qc0FQSSwgMCwgJ1Jlc2l6ZU9ic2VydmVyJywgdHJ1ZSksXG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyB0aGUgUmVxdWVzdEFuaW1hdGlvbkZyYW1lIG1ldGhvZCBvciBpdCdzIGNvcnJlc3BvbmRpbmcgcG9seWZpbGwuXHJcbiAgICAgICAgICogQHJldHVybnMgeyp8RnVuY3Rpb259IFRoZSBSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgbWV0aG9kIG9yIGl0J3MgY29ycmVzcG9uZGluZyBwb2x5ZmlsbC5cclxuICAgICAgICAgKi9cbiAgICAgICAgckFGOiBiaW5kKFZFTkRPUlMuX2pzQVBJLCAwLCAncmVxdWVzdEFuaW1hdGlvbkZyYW1lJywgZmFsc2UsIGZ1bmN0aW9uIChmdW5jKSB7XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmMsIDEwMDAgLyA2MCk7XG4gICAgICAgIH0pLFxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldHMgdGhlIENhbmNlbEFuaW1hdGlvbkZyYW1lIG1ldGhvZCBvciBpdCdzIGNvcnJlc3BvbmRpbmcgcG9seWZpbGwuXHJcbiAgICAgICAgICogQHJldHVybnMgeyp8RnVuY3Rpb259IFRoZSBDYW5jZWxBbmltYXRpb25GcmFtZSBtZXRob2Qgb3IgaXQncyBjb3JyZXNwb25kaW5nIHBvbHlmaWxsLlxyXG4gICAgICAgICAqL1xuICAgICAgICBjQUY6IGJpbmQoVkVORE9SUy5fanNBUEksIDAsICdjYW5jZWxBbmltYXRpb25GcmFtZScsIGZhbHNlLCBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICByZXR1cm4gd2luZG93LmNsZWFyVGltZW91dChpZCk7XG4gICAgICAgIH0pLFxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldHMgdGhlIGN1cnJlbnQgdGltZS5cclxuICAgICAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgY3VycmVudCB0aW1lLlxyXG4gICAgICAgICAqL1xuICAgICAgICBub3c6IGZ1bmN0aW9uIG5vdygpIHtcbiAgICAgICAgICByZXR1cm4gRGF0ZS5ub3cgJiYgRGF0ZS5ub3coKSB8fCBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdG9wcyB0aGUgcHJvcGFnYXRpb24gb2YgdGhlIGdpdmVuIGV2ZW50LlxyXG4gICAgICAgICAqIEBwYXJhbSBldmVudCBUaGUgZXZlbnQgb2Ygd2hpY2ggdGhlIHByb3BhZ2F0aW9uIHNoYWxsIGJlIHN0b3BlZC5cclxuICAgICAgICAgKi9cbiAgICAgICAgc3RwUDogZnVuY3Rpb24gc3RwUChldmVudCkge1xuICAgICAgICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO2Vsc2UgZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBQcmV2ZW50cyB0aGUgZGVmYXVsdCBhY3Rpb24gb2YgdGhlIGdpdmVuIGV2ZW50LlxyXG4gICAgICAgICAqIEBwYXJhbSBldmVudCBUaGUgZXZlbnQgb2Ygd2hpY2ggdGhlIGRlZmF1bHQgYWN0aW9uIHNoYWxsIGJlIHByZXZlbnRlZC5cclxuICAgICAgICAgKi9cbiAgICAgICAgcHJ2RDogZnVuY3Rpb24gcHJ2RChldmVudCkge1xuICAgICAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCAmJiBldmVudC5jYW5jZWxhYmxlKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO2Vsc2UgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXRzIHRoZSBwYWdlWCBhbmQgcGFnZVkgdmFsdWVzIG9mIHRoZSBnaXZlbiBtb3VzZSBldmVudC5cclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnQgVGhlIG1vdXNlIGV2ZW50IG9mIHdoaWNoIHRoZSBwYWdlWCBhbmQgcGFnZVggc2hhbGwgYmUgZ290LlxyXG4gICAgICAgICAqIEByZXR1cm5zIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSB4ID0gcGFnZVggdmFsdWUsIHkgPSBwYWdlWSB2YWx1ZS5cclxuICAgICAgICAgKi9cbiAgICAgICAgcGFnZTogZnVuY3Rpb24gcGFnZShldmVudCkge1xuICAgICAgICAgIGV2ZW50ID0gZXZlbnQub3JpZ2luYWxFdmVudCB8fCBldmVudDtcbiAgICAgICAgICB2YXIgc3RyUGFnZSA9ICdwYWdlJztcbiAgICAgICAgICB2YXIgc3RyQ2xpZW50ID0gJ2NsaWVudCc7XG4gICAgICAgICAgdmFyIHN0clggPSAnWCc7XG4gICAgICAgICAgdmFyIHN0clkgPSAnWSc7XG4gICAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50IHx8IGRvY3VtZW50O1xuICAgICAgICAgIHZhciBldmVudERvYyA9IHRhcmdldC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50O1xuICAgICAgICAgIHZhciBkb2MgPSBldmVudERvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgdmFyIGJvZHkgPSBldmVudERvYy5ib2R5OyAvL2lmIHRvdWNoIGV2ZW50IHJldHVybiByZXR1cm4gcGFnZVgvWSBvZiBpdFxuXG4gICAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXMgIT09IHVuZGVmaW5lZCQxKSB7XG4gICAgICAgICAgICB2YXIgdG91Y2ggPSBldmVudC50b3VjaGVzWzBdO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgeDogdG91Y2hbc3RyUGFnZSArIHN0clhdLFxuICAgICAgICAgICAgICB5OiB0b3VjaFtzdHJQYWdlICsgc3RyWV1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSAvLyBDYWxjdWxhdGUgcGFnZVgvWSBpZiBub3QgbmF0aXZlIHN1cHBvcnRlZFxuXG5cbiAgICAgICAgICBpZiAoIWV2ZW50W3N0clBhZ2UgKyBzdHJYXSAmJiBldmVudFtzdHJDbGllbnQgKyBzdHJYXSAmJiBldmVudFtzdHJDbGllbnQgKyBzdHJYXSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB4OiBldmVudFtzdHJDbGllbnQgKyBzdHJYXSArIChkb2MgJiYgZG9jLnNjcm9sbExlZnQgfHwgYm9keSAmJiBib2R5LnNjcm9sbExlZnQgfHwgMCkgLSAoZG9jICYmIGRvYy5jbGllbnRMZWZ0IHx8IGJvZHkgJiYgYm9keS5jbGllbnRMZWZ0IHx8IDApLFxuICAgICAgICAgICAgICB5OiBldmVudFtzdHJDbGllbnQgKyBzdHJZXSArIChkb2MgJiYgZG9jLnNjcm9sbFRvcCB8fCBib2R5ICYmIGJvZHkuc2Nyb2xsVG9wIHx8IDApIC0gKGRvYyAmJiBkb2MuY2xpZW50VG9wIHx8IGJvZHkgJiYgYm9keS5jbGllbnRUb3AgfHwgMClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IGV2ZW50W3N0clBhZ2UgKyBzdHJYXSxcbiAgICAgICAgICAgIHk6IGV2ZW50W3N0clBhZ2UgKyBzdHJZXVxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyB0aGUgY2xpY2tlZCBtb3VzZSBidXR0b24gb2YgdGhlIGdpdmVuIG1vdXNlIGV2ZW50LlxyXG4gICAgICAgICAqIEBwYXJhbSBldmVudCBUaGUgbW91c2UgZXZlbnQgb2Ygd2hpY2ggdGhlIGNsaWNrZWQgYnV0dG9uIHNoYWwgYmUgZ290LlxyXG4gICAgICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgdGhlIGNsaWNrZWQgbW91c2UgYnV0dG9uLiAoMCA6IG5vbmUgfCAxIDogbGVmdEJ1dHRvbiB8IDIgOiBtaWRkbGVCdXR0b24gfCAzIDogcmlnaHRCdXR0b24pXHJcbiAgICAgICAgICovXG4gICAgICAgIG1CdG46IGZ1bmN0aW9uIG1CdG4oZXZlbnQpIHtcbiAgICAgICAgICB2YXIgYnV0dG9uID0gZXZlbnQuYnV0dG9uO1xuICAgICAgICAgIGlmICghZXZlbnQud2hpY2ggJiYgYnV0dG9uICE9PSB1bmRlZmluZWQkMSkgcmV0dXJuIGJ1dHRvbiAmIDEgPyAxIDogYnV0dG9uICYgMiA/IDMgOiBidXR0b24gJiA0ID8gMiA6IDA7ZWxzZSByZXR1cm4gZXZlbnQud2hpY2g7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2hlY2tzIHdoZXRoZXIgYSBpdGVtIGlzIGluIHRoZSBnaXZlbiBhcnJheSBhbmQgcmV0dXJucyBpdHMgaW5kZXguXHJcbiAgICAgICAgICogQHBhcmFtIGl0ZW0gVGhlIGl0ZW0gb2Ygd2hpY2ggdGhlIHBvc2l0aW9uIGluIHRoZSBhcnJheSBzaGFsbCBiZSBkZXRlcm1pbmVkLlxyXG4gICAgICAgICAqIEBwYXJhbSBhcnIgVGhlIGFycmF5LlxyXG4gICAgICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSB6ZXJvIGJhc2VkIGluZGV4IG9mIHRoZSBpdGVtIG9yIC0xIGlmIHRoZSBpdGVtIGlzbid0IGluIHRoZSBhcnJheS5cclxuICAgICAgICAgKi9cbiAgICAgICAgaW5BOiBmdW5jdGlvbiBpbkEoaXRlbSwgYXJyKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJbTEVYSUNPTi5sXTsgaSsrKSB7XG4gICAgICAgICAgICAvL1NvbWV0aWVtcyBpbiBJRSBhIFwiU0NSSVBUNzBcIiBQZXJtaXNzaW9uIGRlbmllZCBlcnJvciBvY2N1cnMgaWYgSFRNTCBlbGVtZW50cyBpbiBhIGlGcmFtZSBhcmUgY29tcGFyZWRcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGlmIChhcnJbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGFycmF5LlxyXG4gICAgICAgICAqIEBwYXJhbSBhcnIgVGhlIHBvdGVudGlhbCBhcnJheS5cclxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBhcnJheSwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gICAgICAgICAqL1xuICAgICAgICBpc0E6IGZ1bmN0aW9uIGlzQShhcnIpIHtcbiAgICAgICAgICB2YXIgZGVmID0gQXJyYXkuaXNBcnJheTtcbiAgICAgICAgICByZXR1cm4gZGVmID8gZGVmKGFycikgOiB0aGlzLnR5cGUoYXJyKSA9PSBUWVBFUy5hO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERldGVybWluZSB0aGUgaW50ZXJuYWwgSmF2YVNjcmlwdCBbW0NsYXNzXV0gb2YgdGhlIGdpdmVuIG9iamVjdC5cclxuICAgICAgICAgKiBAcGFyYW0gb2JqIFRoZSBvYmplY3Qgb2Ygd2hpY2ggdGhlIHR5cGUgc2hhbGwgYmUgZGV0ZXJtaW5lZC5cclxuICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgdHlwZSBvZiB0aGUgZ2l2ZW4gb2JqZWN0LlxyXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiBmdW5jdGlvbiB0eXBlKG9iaikge1xuICAgICAgICAgIGlmIChvYmogPT09IHVuZGVmaW5lZCQxKSByZXR1cm4gb2JqICsgJyc7XG4gICAgICAgICAgaWYgKG9iaiA9PT0gbnVsbCkgcmV0dXJuIG9iaiArICcnO1xuICAgICAgICAgIHJldHVybiBPYmplY3RbTEVYSUNPTi5wXS50b1N0cmluZy5jYWxsKG9iaikucmVwbGFjZSgvXlxcW29iamVjdCAoLispXFxdJC8sICckMScpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGJpbmQ6IGJpbmRcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyB0aGUgdmVuZG9yLXByZWZpeGVkIENTUyBwcm9wZXJ0eSBieSB0aGUgZ2l2ZW4gbmFtZS5cclxuICAgICAgICAgKiBGb3IgZXhhbXBsZSB0aGUgZ2l2ZW4gbmFtZSBpcyBcInRyYW5zZm9ybVwiIGFuZCB5b3UncmUgdXNpbmcgYSBvbGQgRmlyZWZveCBicm93c2VyIHRoZW4gdGhlIHJldHVybmVkIHZhbHVlIHdvdWxkIGJlIFwiLW1vei10cmFuc2Zvcm1cIi5cclxuICAgICAgICAgKiBJZiB0aGUgYnJvd3NlciBkb2Vzbid0IG5lZWQgYSB2ZW5kb3ItcHJlZml4LCB0aGVuIHRoZSByZXR1cm5lZCBzdHJpbmcgaXMgdGhlIGdpdmVuIG5hbWUuXHJcbiAgICAgICAgICogSWYgdGhlIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lIGF0IGFsbCAobm90IGV2ZW4gd2l0aCBhIHZlbmRvci1wcmVmaXgpIHRoZSByZXR1cm5lZCB2YWx1ZSBpcyBudWxsLlxyXG4gICAgICAgICAqIEBwYXJhbSBwcm9wTmFtZSBUaGUgdW5wcmVmaXhlZCBDU1MgcHJvcGVydHkgbmFtZS5cclxuICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9IFRoZSB2ZW5kb3ItcHJlZml4ZWQgQ1NTIHByb3BlcnR5IG9yIG51bGwgaWYgdGhlIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHRoZSBnaXZlbiBDU1MgcHJvcGVydHkuXHJcbiAgICAgICAgICBjc3NQcm9wOiBmdW5jdGlvbihwcm9wTmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gVkVORE9SUy5fY3NzUHJvcGVydHkocHJvcE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAqL1xuXG4gICAgICB9O1xuICAgIH0oKTtcblxuICAgIHZhciBNQVRIID0gTWF0aDtcbiAgICB2YXIgSlFVRVJZID0gd2luZG93LmpRdWVyeTtcblxuICAgIHZhciBFQVNJTkcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2Vhc2luZ3NNYXRoID0ge1xuICAgICAgICBwOiBNQVRILlBJLFxuICAgICAgICBjOiBNQVRILmNvcyxcbiAgICAgICAgczogTUFUSC5zaW4sXG4gICAgICAgIHc6IE1BVEgucG93LFxuICAgICAgICB0OiBNQVRILnNxcnQsXG4gICAgICAgIG46IE1BVEguYXNpbixcbiAgICAgICAgYTogTUFUSC5hYnMsXG4gICAgICAgIG86IDEuNzAxNThcbiAgICAgIH07XG4gICAgICAvKlxyXG4gICAgICAgeCA6IGN1cnJlbnQgcGVyY2VudCAoMCAtIDEpLFxyXG4gICAgICAgdCA6IGN1cnJlbnQgdGltZSAoZHVyYXRpb24gKiBwZXJjZW50KSxcclxuICAgICAgIGIgOiBzdGFydCB2YWx1ZSAoZnJvbSksXHJcbiAgICAgICBjIDogZW5kIHZhbHVlICh0byksXHJcbiAgICAgICBkIDogZHVyYXRpb25cclxuICAgICAgICAgZWFzaW5nTmFtZSA6IGZ1bmN0aW9uKHgsIHQsIGIsIGMsIGQpIHsgcmV0dXJuIGVhc2VkVmFsdWU7IH1cclxuICAgICAgICovXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN3aW5nOiBmdW5jdGlvbiBzd2luZyh4LCB0LCBiLCBjLCBkKSB7XG4gICAgICAgICAgcmV0dXJuIDAuNSAtIF9lYXNpbmdzTWF0aC5jKHggKiBfZWFzaW5nc01hdGgucCkgLyAyO1xuICAgICAgICB9LFxuICAgICAgICBsaW5lYXI6IGZ1bmN0aW9uIGxpbmVhcih4LCB0LCBiLCBjLCBkKSB7XG4gICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgIH0sXG4gICAgICAgIGVhc2VJblF1YWQ6IGZ1bmN0aW9uIGVhc2VJblF1YWQoeCwgdCwgYiwgYywgZCkge1xuICAgICAgICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICsgYjtcbiAgICAgICAgfSxcbiAgICAgICAgZWFzZU91dFF1YWQ6IGZ1bmN0aW9uIGVhc2VPdXRRdWFkKHgsIHQsIGIsIGMsIGQpIHtcbiAgICAgICAgICByZXR1cm4gLWMgKiAodCAvPSBkKSAqICh0IC0gMikgKyBiO1xuICAgICAgICB9LFxuICAgICAgICBlYXNlSW5PdXRRdWFkOiBmdW5jdGlvbiBlYXNlSW5PdXRRdWFkKHgsIHQsIGIsIGMsIGQpIHtcbiAgICAgICAgICByZXR1cm4gKHQgLz0gZCAvIDIpIDwgMSA/IGMgLyAyICogdCAqIHQgKyBiIDogLWMgLyAyICogKC0tdCAqICh0IC0gMikgLSAxKSArIGI7XG4gICAgICAgIH0sXG4gICAgICAgIGVhc2VJbkN1YmljOiBmdW5jdGlvbiBlYXNlSW5DdWJpYyh4LCB0LCBiLCBjLCBkKSB7XG4gICAgICAgICAgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKiB0ICsgYjtcbiAgICAgICAgfSxcbiAgICAgICAgZWFzZU91dEN1YmljOiBmdW5jdGlvbiBlYXNlT3V0Q3ViaWMoeCwgdCwgYiwgYywgZCkge1xuICAgICAgICAgIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiB0ICsgMSkgKyBiO1xuICAgICAgICB9LFxuICAgICAgICBlYXNlSW5PdXRDdWJpYzogZnVuY3Rpb24gZWFzZUluT3V0Q3ViaWMoeCwgdCwgYiwgYywgZCkge1xuICAgICAgICAgIHJldHVybiAodCAvPSBkIC8gMikgPCAxID8gYyAvIDIgKiB0ICogdCAqIHQgKyBiIDogYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogdCArIDIpICsgYjtcbiAgICAgICAgfSxcbiAgICAgICAgZWFzZUluUXVhcnQ6IGZ1bmN0aW9uIGVhc2VJblF1YXJ0KHgsIHQsIGIsIGMsIGQpIHtcbiAgICAgICAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKiB0ICsgYjtcbiAgICAgICAgfSxcbiAgICAgICAgZWFzZU91dFF1YXJ0OiBmdW5jdGlvbiBlYXNlT3V0UXVhcnQoeCwgdCwgYiwgYywgZCkge1xuICAgICAgICAgIHJldHVybiAtYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCAqIHQgLSAxKSArIGI7XG4gICAgICAgIH0sXG4gICAgICAgIGVhc2VJbk91dFF1YXJ0OiBmdW5jdGlvbiBlYXNlSW5PdXRRdWFydCh4LCB0LCBiLCBjLCBkKSB7XG4gICAgICAgICAgcmV0dXJuICh0IC89IGQgLyAyKSA8IDEgPyBjIC8gMiAqIHQgKiB0ICogdCAqIHQgKyBiIDogLWMgLyAyICogKCh0IC09IDIpICogdCAqIHQgKiB0IC0gMikgKyBiO1xuICAgICAgICB9LFxuICAgICAgICBlYXNlSW5RdWludDogZnVuY3Rpb24gZWFzZUluUXVpbnQoeCwgdCwgYiwgYywgZCkge1xuICAgICAgICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICogdCAqIHQgKiB0ICsgYjtcbiAgICAgICAgfSxcbiAgICAgICAgZWFzZU91dFF1aW50OiBmdW5jdGlvbiBlYXNlT3V0UXVpbnQoeCwgdCwgYiwgYywgZCkge1xuICAgICAgICAgIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiB0ICogdCAqIHQgKyAxKSArIGI7XG4gICAgICAgIH0sXG4gICAgICAgIGVhc2VJbk91dFF1aW50OiBmdW5jdGlvbiBlYXNlSW5PdXRRdWludCh4LCB0LCBiLCBjLCBkKSB7XG4gICAgICAgICAgcmV0dXJuICh0IC89IGQgLyAyKSA8IDEgPyBjIC8gMiAqIHQgKiB0ICogdCAqIHQgKiB0ICsgYiA6IGMgLyAyICogKCh0IC09IDIpICogdCAqIHQgKiB0ICogdCArIDIpICsgYjtcbiAgICAgICAgfSxcbiAgICAgICAgZWFzZUluU2luZTogZnVuY3Rpb24gZWFzZUluU2luZSh4LCB0LCBiLCBjLCBkKSB7XG4gICAgICAgICAgcmV0dXJuIC1jICogX2Vhc2luZ3NNYXRoLmModCAvIGQgKiAoX2Vhc2luZ3NNYXRoLnAgLyAyKSkgKyBjICsgYjtcbiAgICAgICAgfSxcbiAgICAgICAgZWFzZU91dFNpbmU6IGZ1bmN0aW9uIGVhc2VPdXRTaW5lKHgsIHQsIGIsIGMsIGQpIHtcbiAgICAgICAgICByZXR1cm4gYyAqIF9lYXNpbmdzTWF0aC5zKHQgLyBkICogKF9lYXNpbmdzTWF0aC5wIC8gMikpICsgYjtcbiAgICAgICAgfSxcbiAgICAgICAgZWFzZUluT3V0U2luZTogZnVuY3Rpb24gZWFzZUluT3V0U2luZSh4LCB0LCBiLCBjLCBkKSB7XG4gICAgICAgICAgcmV0dXJuIC1jIC8gMiAqIChfZWFzaW5nc01hdGguYyhfZWFzaW5nc01hdGgucCAqIHQgLyBkKSAtIDEpICsgYjtcbiAgICAgICAgfSxcbiAgICAgICAgZWFzZUluRXhwbzogZnVuY3Rpb24gZWFzZUluRXhwbyh4LCB0LCBiLCBjLCBkKSB7XG4gICAgICAgICAgcmV0dXJuIHQgPT0gMCA/IGIgOiBjICogX2Vhc2luZ3NNYXRoLncoMiwgMTAgKiAodCAvIGQgLSAxKSkgKyBiO1xuICAgICAgICB9LFxuICAgICAgICBlYXNlT3V0RXhwbzogZnVuY3Rpb24gZWFzZU91dEV4cG8oeCwgdCwgYiwgYywgZCkge1xuICAgICAgICAgIHJldHVybiB0ID09IGQgPyBiICsgYyA6IGMgKiAoLV9lYXNpbmdzTWF0aC53KDIsIC0xMCAqIHQgLyBkKSArIDEpICsgYjtcbiAgICAgICAgfSxcbiAgICAgICAgZWFzZUluT3V0RXhwbzogZnVuY3Rpb24gZWFzZUluT3V0RXhwbyh4LCB0LCBiLCBjLCBkKSB7XG4gICAgICAgICAgaWYgKHQgPT0gMCkgcmV0dXJuIGI7XG4gICAgICAgICAgaWYgKHQgPT0gZCkgcmV0dXJuIGIgKyBjO1xuICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSByZXR1cm4gYyAvIDIgKiBfZWFzaW5nc01hdGgudygyLCAxMCAqICh0IC0gMSkpICsgYjtcbiAgICAgICAgICByZXR1cm4gYyAvIDIgKiAoLV9lYXNpbmdzTWF0aC53KDIsIC0xMCAqIC0tdCkgKyAyKSArIGI7XG4gICAgICAgIH0sXG4gICAgICAgIGVhc2VJbkNpcmM6IGZ1bmN0aW9uIGVhc2VJbkNpcmMoeCwgdCwgYiwgYywgZCkge1xuICAgICAgICAgIHJldHVybiAtYyAqIChfZWFzaW5nc01hdGgudCgxIC0gKHQgLz0gZCkgKiB0KSAtIDEpICsgYjtcbiAgICAgICAgfSxcbiAgICAgICAgZWFzZU91dENpcmM6IGZ1bmN0aW9uIGVhc2VPdXRDaXJjKHgsIHQsIGIsIGMsIGQpIHtcbiAgICAgICAgICByZXR1cm4gYyAqIF9lYXNpbmdzTWF0aC50KDEgLSAodCA9IHQgLyBkIC0gMSkgKiB0KSArIGI7XG4gICAgICAgIH0sXG4gICAgICAgIGVhc2VJbk91dENpcmM6IGZ1bmN0aW9uIGVhc2VJbk91dENpcmMoeCwgdCwgYiwgYywgZCkge1xuICAgICAgICAgIHJldHVybiAodCAvPSBkIC8gMikgPCAxID8gLWMgLyAyICogKF9lYXNpbmdzTWF0aC50KDEgLSB0ICogdCkgLSAxKSArIGIgOiBjIC8gMiAqIChfZWFzaW5nc01hdGgudCgxIC0gKHQgLT0gMikgKiB0KSArIDEpICsgYjtcbiAgICAgICAgfSxcbiAgICAgICAgZWFzZUluRWxhc3RpYzogZnVuY3Rpb24gZWFzZUluRWxhc3RpYyh4LCB0LCBiLCBjLCBkKSB7XG4gICAgICAgICAgdmFyIHMgPSBfZWFzaW5nc01hdGgubztcbiAgICAgICAgICB2YXIgcCA9IDA7XG4gICAgICAgICAgdmFyIGEgPSBjO1xuICAgICAgICAgIGlmICh0ID09IDApIHJldHVybiBiO1xuICAgICAgICAgIGlmICgodCAvPSBkKSA9PSAxKSByZXR1cm4gYiArIGM7XG4gICAgICAgICAgaWYgKCFwKSBwID0gZCAqIC4zO1xuXG4gICAgICAgICAgaWYgKGEgPCBfZWFzaW5nc01hdGguYShjKSkge1xuICAgICAgICAgICAgYSA9IGM7XG4gICAgICAgICAgICBzID0gcCAvIDQ7XG4gICAgICAgICAgfSBlbHNlIHMgPSBwIC8gKDIgKiBfZWFzaW5nc01hdGgucCkgKiBfZWFzaW5nc01hdGgubihjIC8gYSk7XG5cbiAgICAgICAgICByZXR1cm4gLShhICogX2Vhc2luZ3NNYXRoLncoMiwgMTAgKiAodCAtPSAxKSkgKiBfZWFzaW5nc01hdGgucygodCAqIGQgLSBzKSAqICgyICogX2Vhc2luZ3NNYXRoLnApIC8gcCkpICsgYjtcbiAgICAgICAgfSxcbiAgICAgICAgZWFzZU91dEVsYXN0aWM6IGZ1bmN0aW9uIGVhc2VPdXRFbGFzdGljKHgsIHQsIGIsIGMsIGQpIHtcbiAgICAgICAgICB2YXIgcyA9IF9lYXNpbmdzTWF0aC5vO1xuICAgICAgICAgIHZhciBwID0gMDtcbiAgICAgICAgICB2YXIgYSA9IGM7XG4gICAgICAgICAgaWYgKHQgPT0gMCkgcmV0dXJuIGI7XG4gICAgICAgICAgaWYgKCh0IC89IGQpID09IDEpIHJldHVybiBiICsgYztcbiAgICAgICAgICBpZiAoIXApIHAgPSBkICogLjM7XG5cbiAgICAgICAgICBpZiAoYSA8IF9lYXNpbmdzTWF0aC5hKGMpKSB7XG4gICAgICAgICAgICBhID0gYztcbiAgICAgICAgICAgIHMgPSBwIC8gNDtcbiAgICAgICAgICB9IGVsc2UgcyA9IHAgLyAoMiAqIF9lYXNpbmdzTWF0aC5wKSAqIF9lYXNpbmdzTWF0aC5uKGMgLyBhKTtcblxuICAgICAgICAgIHJldHVybiBhICogX2Vhc2luZ3NNYXRoLncoMiwgLTEwICogdCkgKiBfZWFzaW5nc01hdGgucygodCAqIGQgLSBzKSAqICgyICogX2Vhc2luZ3NNYXRoLnApIC8gcCkgKyBjICsgYjtcbiAgICAgICAgfSxcbiAgICAgICAgZWFzZUluT3V0RWxhc3RpYzogZnVuY3Rpb24gZWFzZUluT3V0RWxhc3RpYyh4LCB0LCBiLCBjLCBkKSB7XG4gICAgICAgICAgdmFyIHMgPSBfZWFzaW5nc01hdGgubztcbiAgICAgICAgICB2YXIgcCA9IDA7XG4gICAgICAgICAgdmFyIGEgPSBjO1xuICAgICAgICAgIGlmICh0ID09IDApIHJldHVybiBiO1xuICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPT0gMikgcmV0dXJuIGIgKyBjO1xuICAgICAgICAgIGlmICghcCkgcCA9IGQgKiAoLjMgKiAxLjUpO1xuXG4gICAgICAgICAgaWYgKGEgPCBfZWFzaW5nc01hdGguYShjKSkge1xuICAgICAgICAgICAgYSA9IGM7XG4gICAgICAgICAgICBzID0gcCAvIDQ7XG4gICAgICAgICAgfSBlbHNlIHMgPSBwIC8gKDIgKiBfZWFzaW5nc01hdGgucCkgKiBfZWFzaW5nc01hdGgubihjIC8gYSk7XG5cbiAgICAgICAgICBpZiAodCA8IDEpIHJldHVybiAtLjUgKiAoYSAqIF9lYXNpbmdzTWF0aC53KDIsIDEwICogKHQgLT0gMSkpICogX2Vhc2luZ3NNYXRoLnMoKHQgKiBkIC0gcykgKiAoMiAqIF9lYXNpbmdzTWF0aC5wKSAvIHApKSArIGI7XG4gICAgICAgICAgcmV0dXJuIGEgKiBfZWFzaW5nc01hdGgudygyLCAtMTAgKiAodCAtPSAxKSkgKiBfZWFzaW5nc01hdGgucygodCAqIGQgLSBzKSAqICgyICogX2Vhc2luZ3NNYXRoLnApIC8gcCkgKiAuNSArIGMgKyBiO1xuICAgICAgICB9LFxuICAgICAgICBlYXNlSW5CYWNrOiBmdW5jdGlvbiBlYXNlSW5CYWNrKHgsIHQsIGIsIGMsIGQsIHMpIHtcbiAgICAgICAgICBzID0gcyB8fCBfZWFzaW5nc01hdGgubztcbiAgICAgICAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqICgocyArIDEpICogdCAtIHMpICsgYjtcbiAgICAgICAgfSxcbiAgICAgICAgZWFzZU91dEJhY2s6IGZ1bmN0aW9uIGVhc2VPdXRCYWNrKHgsIHQsIGIsIGMsIGQsIHMpIHtcbiAgICAgICAgICBzID0gcyB8fCBfZWFzaW5nc01hdGgubztcbiAgICAgICAgICByZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAxKSArIGI7XG4gICAgICAgIH0sXG4gICAgICAgIGVhc2VJbk91dEJhY2s6IGZ1bmN0aW9uIGVhc2VJbk91dEJhY2soeCwgdCwgYiwgYywgZCwgcykge1xuICAgICAgICAgIHMgPSBzIHx8IF9lYXNpbmdzTWF0aC5vO1xuICAgICAgICAgIHJldHVybiAodCAvPSBkIC8gMikgPCAxID8gYyAvIDIgKiAodCAqIHQgKiAoKChzICo9IDEuNTI1KSArIDEpICogdCAtIHMpKSArIGIgOiBjIC8gMiAqICgodCAtPSAyKSAqIHQgKiAoKChzICo9IDEuNTI1KSArIDEpICogdCArIHMpICsgMikgKyBiO1xuICAgICAgICB9LFxuICAgICAgICBlYXNlSW5Cb3VuY2U6IGZ1bmN0aW9uIGVhc2VJbkJvdW5jZSh4LCB0LCBiLCBjLCBkKSB7XG4gICAgICAgICAgcmV0dXJuIGMgLSB0aGlzLmVhc2VPdXRCb3VuY2UoeCwgZCAtIHQsIDAsIGMsIGQpICsgYjtcbiAgICAgICAgfSxcbiAgICAgICAgZWFzZU91dEJvdW5jZTogZnVuY3Rpb24gZWFzZU91dEJvdW5jZSh4LCB0LCBiLCBjLCBkKSB7XG4gICAgICAgICAgdmFyIG8gPSA3LjU2MjU7XG5cbiAgICAgICAgICBpZiAoKHQgLz0gZCkgPCAxIC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIGMgKiAobyAqIHQgKiB0KSArIGI7XG4gICAgICAgICAgfSBlbHNlIGlmICh0IDwgMiAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiBjICogKG8gKiAodCAtPSAxLjUgLyAyLjc1KSAqIHQgKyAuNzUpICsgYjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHQgPCAyLjUgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gYyAqIChvICogKHQgLT0gMi4yNSAvIDIuNzUpICogdCArIC45Mzc1KSArIGI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjICogKG8gKiAodCAtPSAyLjYyNSAvIDIuNzUpICogdCArIC45ODQzNzUpICsgYjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVhc2VJbk91dEJvdW5jZTogZnVuY3Rpb24gZWFzZUluT3V0Qm91bmNlKHgsIHQsIGIsIGMsIGQpIHtcbiAgICAgICAgICByZXR1cm4gdCA8IGQgLyAyID8gdGhpcy5lYXNlSW5Cb3VuY2UoeCwgdCAqIDIsIDAsIGMsIGQpICogLjUgKyBiIDogdGhpcy5lYXNlT3V0Qm91bmNlKHgsIHQgKiAyIC0gZCwgMCwgYywgZCkgKiAuNSArIGMgKiAuNSArIGI7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICAvKlxyXG4gICAgICAgKlxyXG4gICAgICAgKiBURVJNUyBPRiBVU0UgLSBFQVNJTkcgRVFVQVRJT05TXHJcbiAgICAgICAqIFxyXG4gICAgICAgKiBPcGVuIHNvdXJjZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UuIFxyXG4gICAgICAgKiBcclxuICAgICAgICogQ29weXJpZ2h0IMOCwqkgMjAwMSBSb2JlcnQgUGVubmVyXHJcbiAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAgICAgICAqIFxyXG4gICAgICAgKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBcclxuICAgICAgICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxyXG4gICAgICAgKiBcclxuICAgICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgXHJcbiAgICAgICAqIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cclxuICAgICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3QgXHJcbiAgICAgICAqIG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIFxyXG4gICAgICAgKiBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXHJcbiAgICAgICAqIFxyXG4gICAgICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBhdXRob3Igbm9yIHRoZSBuYW1lcyBvZiBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBcclxuICAgICAgICogb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cclxuICAgICAgICogXHJcbiAgICAgICAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgXHJcbiAgICAgICAqIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRlxyXG4gICAgICAgKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICAgICAgICogIENPUFlSSUdIVCBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCxcclxuICAgICAgICogIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURVxyXG4gICAgICAgKiAgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIFxyXG4gICAgICAgKiBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElOR1xyXG4gICAgICAgKiAgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgXHJcbiAgICAgICAqIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS4gXHJcbiAgICAgICAqXHJcbiAgICAgICAqL1xuICAgIH0oKTtcblxuICAgIHZhciBGUkFNRVdPUksgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3Jub3RodG1sd2hpdGUgPSAvW15cXHgyMFxcdFxcclxcblxcZl0rL2c7XG4gICAgICB2YXIgX3N0clNwYWNlID0gJyAnO1xuICAgICAgdmFyIF9zdHJFbXB0eSA9ICcnO1xuICAgICAgdmFyIF9zdHJTY3JvbGxMZWZ0ID0gJ3Njcm9sbExlZnQnO1xuICAgICAgdmFyIF9zdHJTY3JvbGxUb3AgPSAnc2Nyb2xsVG9wJztcbiAgICAgIHZhciBfYW5pbWF0aW9ucyA9IFtdO1xuICAgICAgdmFyIF90eXBlID0gQ09NUEFUSUJJTElUWS50eXBlO1xuICAgICAgdmFyIF9jc3NOdW1iZXIgPSB7XG4gICAgICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiB0cnVlLFxuICAgICAgICBjb2x1bW5Db3VudDogdHJ1ZSxcbiAgICAgICAgZmlsbE9wYWNpdHk6IHRydWUsXG4gICAgICAgIGZsZXhHcm93OiB0cnVlLFxuICAgICAgICBmbGV4U2hyaW5rOiB0cnVlLFxuICAgICAgICBmb250V2VpZ2h0OiB0cnVlLFxuICAgICAgICBsaW5lSGVpZ2h0OiB0cnVlLFxuICAgICAgICBvcGFjaXR5OiB0cnVlLFxuICAgICAgICBvcmRlcjogdHJ1ZSxcbiAgICAgICAgb3JwaGFuczogdHJ1ZSxcbiAgICAgICAgd2lkb3dzOiB0cnVlLFxuICAgICAgICB6SW5kZXg6IHRydWUsXG4gICAgICAgIHpvb206IHRydWVcbiAgICAgIH07XG5cbiAgICAgIGZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICAgICAgdmFyIHNyYyxcbiAgICAgICAgICAgIGNvcHlJc0FycmF5LFxuICAgICAgICAgICAgY29weSxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgY2xvbmUsXG4gICAgICAgICAgICB0YXJnZXQgPSBhcmd1bWVudHNbMF0gfHwge30sXG4gICAgICAgICAgICBpID0gMSxcbiAgICAgICAgICAgIGxlbmd0aCA9IGFyZ3VtZW50c1tMRVhJQ09OLmxdLFxuICAgICAgICAgICAgZGVlcCA9IGZhbHNlOyAvLyBIYW5kbGUgYSBkZWVwIGNvcHkgc2l0dWF0aW9uXG5cbiAgICAgICAgaWYgKF90eXBlKHRhcmdldCkgPT0gVFlQRVMuYikge1xuICAgICAgICAgIGRlZXAgPSB0YXJnZXQ7XG4gICAgICAgICAgdGFyZ2V0ID0gYXJndW1lbnRzWzFdIHx8IHt9OyAvLyBza2lwIHRoZSBib29sZWFuIGFuZCB0aGUgdGFyZ2V0XG5cbiAgICAgICAgICBpID0gMjtcbiAgICAgICAgfSAvLyBIYW5kbGUgY2FzZSB3aGVuIHRhcmdldCBpcyBhIHN0cmluZyBvciBzb21ldGhpbmcgKHBvc3NpYmxlIGluIGRlZXAgY29weSlcblxuXG4gICAgICAgIGlmIChfdHlwZSh0YXJnZXQpICE9IFRZUEVTLm8gJiYgIV90eXBlKHRhcmdldCkgPT0gVFlQRVMuZikge1xuICAgICAgICAgIHRhcmdldCA9IHt9O1xuICAgICAgICB9IC8vIGV4dGVuZCBqUXVlcnkgaXRzZWxmIGlmIG9ubHkgb25lIGFyZ3VtZW50IGlzIHBhc3NlZFxuXG5cbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gaSkge1xuICAgICAgICAgIHRhcmdldCA9IEZha2VqUXVlcnk7XG4gICAgICAgICAgLS1pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIC8vIE9ubHkgZGVhbCB3aXRoIG5vbi1udWxsL3VuZGVmaW5lZCB2YWx1ZXNcbiAgICAgICAgICBpZiAoKG9wdGlvbnMgPSBhcmd1bWVudHNbaV0pICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIEV4dGVuZCB0aGUgYmFzZSBvYmplY3RcbiAgICAgICAgICAgIGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgIHNyYyA9IHRhcmdldFtuYW1lXTtcbiAgICAgICAgICAgICAgY29weSA9IG9wdGlvbnNbbmFtZV07IC8vIFByZXZlbnQgbmV2ZXItZW5kaW5nIGxvb3BcblxuICAgICAgICAgICAgICBpZiAodGFyZ2V0ID09PSBjb3B5KSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH0gLy8gUmVjdXJzZSBpZiB3ZSdyZSBtZXJnaW5nIHBsYWluIG9iamVjdHMgb3IgYXJyYXlzXG5cblxuICAgICAgICAgICAgICBpZiAoZGVlcCAmJiBjb3B5ICYmIChpc1BsYWluT2JqZWN0KGNvcHkpIHx8IChjb3B5SXNBcnJheSA9IENPTVBBVElCSUxJVFkuaXNBKGNvcHkpKSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29weUlzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgIGNvcHlJc0FycmF5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBjbG9uZSA9IHNyYyAmJiBDT01QQVRJQklMSVRZLmlzQShzcmMpID8gc3JjIDogW107XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGNsb25lID0gc3JjICYmIGlzUGxhaW5PYmplY3Qoc3JjKSA/IHNyYyA6IHt9O1xuICAgICAgICAgICAgICAgIH0gLy8gTmV2ZXIgbW92ZSBvcmlnaW5hbCBvYmplY3RzLCBjbG9uZSB0aGVtXG5cblxuICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IGV4dGVuZChkZWVwLCBjbG9uZSwgY29weSk7IC8vIERvbid0IGJyaW5nIGluIHVuZGVmaW5lZCB2YWx1ZXNcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb3B5ICE9PSB1bmRlZmluZWQkMSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IGNvcHk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gUmV0dXJuIHRoZSBtb2RpZmllZCBvYmplY3RcblxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGluQXJyYXkoaXRlbSwgYXJyLCBmcm9tSW5kZXgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IGZyb21JbmRleCB8fCAwOyBpIDwgYXJyW0xFWElDT04ubF07IGkrKykge1xuICAgICAgICAgIGlmIChhcnJbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gX3R5cGUob2JqKSA9PSBUWVBFUy5mO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBpc0VtcHR5T2JqZWN0KG9iaikge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIG9iaikge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICAgICAgICBpZiAoIW9iaiB8fCBfdHlwZShvYmopICE9IFRZUEVTLm8pIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgdmFyIHByb3RvID0gTEVYSUNPTi5wO1xuICAgICAgICB2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3RbcHJvdG9dLmhhc093blByb3BlcnR5O1xuICAgICAgICB2YXIgaGFzT3duQ29uc3RydWN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgJ2NvbnN0cnVjdG9yJyk7XG4gICAgICAgIHZhciBoYXNJc1Byb3RvdHlwZU9mID0gb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvcltwcm90b10gJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmouY29uc3RydWN0b3JbcHJvdG9dLCAnaXNQcm90b3R5cGVPZicpO1xuXG4gICAgICAgIGlmIChvYmouY29uc3RydWN0b3IgJiYgIWhhc093bkNvbnN0cnVjdG9yICYmICFoYXNJc1Byb3RvdHlwZU9mKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgLyoqL1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF90eXBlKGtleSkgPT0gVFlQRVMudSB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX2VhY2gob2JqLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgaSA9IDA7XG5cbiAgICAgICAgaWYgKGlzQXJyYXlMaWtlKG9iaikpIHtcbiAgICAgICAgICBmb3IgKDsgaSA8IG9ialtMRVhJQ09OLmxdOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKG9ialtpXSwgaSwgb2JqW2ldKSA9PT0gZmFsc2UpIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2suY2FsbChvYmpbaV0sIGksIG9ialtpXSkgPT09IGZhbHNlKSBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBpc0FycmF5TGlrZShvYmopIHtcbiAgICAgICAgdmFyIGxlbmd0aCA9ICEhb2JqICYmIFtMRVhJQ09OLmxdIGluIG9iaiAmJiBvYmpbTEVYSUNPTi5sXTtcblxuICAgICAgICB2YXIgdCA9IF90eXBlKG9iaik7XG5cbiAgICAgICAgcmV0dXJuIGlzRnVuY3Rpb24odCkgPyBmYWxzZSA6IHQgPT0gVFlQRVMuYSB8fCBsZW5ndGggPT09IDAgfHwgX3R5cGUobGVuZ3RoKSA9PSBUWVBFUy5uICYmIGxlbmd0aCA+IDAgJiYgbGVuZ3RoIC0gMSBpbiBvYmo7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHN0cmlwQW5kQ29sbGFwc2UodmFsdWUpIHtcbiAgICAgICAgdmFyIHRva2VucyA9IHZhbHVlLm1hdGNoKF9ybm90aHRtbHdoaXRlKSB8fCBbXTtcbiAgICAgICAgcmV0dXJuIHRva2Vucy5qb2luKF9zdHJTcGFjZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG1hdGNoZXMoZWxlbSwgc2VsZWN0b3IpIHtcbiAgICAgICAgdmFyIG5vZGVMaXN0ID0gKGVsZW0ucGFyZW50Tm9kZSB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgfHwgW107XG4gICAgICAgIHZhciBpID0gbm9kZUxpc3RbTEVYSUNPTi5sXTtcblxuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgaWYgKG5vZGVMaXN0W2ldID09IGVsZW0pIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBpbnNlcnRBZGphY2VudEVsZW1lbnQoZWwsIHN0cmF0ZWd5LCBjaGlsZCkge1xuICAgICAgICBpZiAoQ09NUEFUSUJJTElUWS5pc0EoY2hpbGQpKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZFtMRVhJQ09OLmxdOyBpKyspIHtcbiAgICAgICAgICAgIGluc2VydEFkamFjZW50RWxlbWVudChlbCwgc3RyYXRlZ3ksIGNoaWxkW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoX3R5cGUoY2hpbGQpID09IFRZUEVTLnMpIGVsLmluc2VydEFkamFjZW50SFRNTChzdHJhdGVneSwgY2hpbGQpO2Vsc2UgZWwuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KHN0cmF0ZWd5LCBjaGlsZC5ub2RlVHlwZSA/IGNoaWxkIDogY2hpbGRbMF0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzZXRDU1NWYWwoZWwsIHByb3AsIHZhbCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChlbFtMRVhJQ09OLnNdW3Byb3BdICE9PSB1bmRlZmluZWQkMSkgZWxbTEVYSUNPTi5zXVtwcm9wXSA9IHBhcnNlQ1NTVmFsKHByb3AsIHZhbCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHBhcnNlQ1NTVmFsKHByb3AsIHZhbCkge1xuICAgICAgICBpZiAoIV9jc3NOdW1iZXJbcHJvcC50b0xvd2VyQ2FzZSgpXSAmJiBfdHlwZSh2YWwpID09IFRZUEVTLm4pIHZhbCArPSAncHgnO1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzdGFydE5leHRBbmltYXRpb25JblEoYW5pbU9iaiwgcmVtb3ZlRnJvbVEpIHtcbiAgICAgICAgdmFyIGluZGV4O1xuICAgICAgICB2YXIgbmV4dEFuaW07XG4gICAgICAgIGlmIChyZW1vdmVGcm9tUSAhPT0gZmFsc2UpIGFuaW1PYmoucS5zcGxpY2UoMCwgMSk7XG5cbiAgICAgICAgaWYgKGFuaW1PYmoucVtMRVhJQ09OLmxdID4gMCkge1xuICAgICAgICAgIG5leHRBbmltID0gYW5pbU9iai5xWzBdO1xuXG4gICAgICAgICAgX2FuaW1hdGUoYW5pbU9iai5lbCwgbmV4dEFuaW0ucHJvcHMsIG5leHRBbmltLmR1cmF0aW9uLCBuZXh0QW5pbS5lYXNpbmcsIG5leHRBbmltLmNvbXBsZXRlLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbmRleCA9IGluQXJyYXkoYW5pbU9iaiwgX2FuaW1hdGlvbnMpO1xuICAgICAgICAgIGlmIChpbmRleCA+IC0xKSBfYW5pbWF0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHNldEFuaW1hdGlvblZhbHVlKGVsLCBwcm9wLCB2YWx1ZSkge1xuICAgICAgICBpZiAocHJvcCA9PT0gX3N0clNjcm9sbExlZnQgfHwgcHJvcCA9PT0gX3N0clNjcm9sbFRvcCkgZWxbcHJvcF0gPSB2YWx1ZTtlbHNlIHNldENTU1ZhbChlbCwgcHJvcCwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfYW5pbWF0ZShlbCwgcHJvcHMsIG9wdGlvbnMsIGVhc2luZywgY29tcGxldGUsIGd1YXJhbnRlZWROZXh0KSB7XG4gICAgICAgIHZhciBoYXNPcHRpb25zID0gaXNQbGFpbk9iamVjdChvcHRpb25zKTtcbiAgICAgICAgdmFyIGZyb20gPSB7fTtcbiAgICAgICAgdmFyIHRvID0ge307XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgdmFyIGFuaW1PYmo7XG4gICAgICAgIHZhciBwcm9ncmVzcztcbiAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgIHZhciBzcGVjaWFsRWFzaW5nO1xuICAgICAgICB2YXIgZHVyYXRpb247XG5cbiAgICAgICAgaWYgKGhhc09wdGlvbnMpIHtcbiAgICAgICAgICBlYXNpbmcgPSBvcHRpb25zLmVhc2luZztcbiAgICAgICAgICBwcm9ncmVzcyA9IG9wdGlvbnMucHJvZ3Jlc3M7XG4gICAgICAgICAgc3RlcCA9IG9wdGlvbnMuc3RlcDtcbiAgICAgICAgICBzcGVjaWFsRWFzaW5nID0gb3B0aW9ucy5zcGVjaWFsRWFzaW5nO1xuICAgICAgICAgIGNvbXBsZXRlID0gb3B0aW9ucy5jb21wbGV0ZTtcbiAgICAgICAgICBkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb247XG4gICAgICAgIH0gZWxzZSBkdXJhdGlvbiA9IG9wdGlvbnM7XG5cbiAgICAgICAgc3BlY2lhbEVhc2luZyA9IHNwZWNpYWxFYXNpbmcgfHwge307XG4gICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24gfHwgNDAwO1xuICAgICAgICBlYXNpbmcgPSBlYXNpbmcgfHwgJ3N3aW5nJztcbiAgICAgICAgZ3VhcmFudGVlZE5leHQgPSBndWFyYW50ZWVkTmV4dCB8fCBmYWxzZTtcblxuICAgICAgICBmb3IgKDsgaSA8IF9hbmltYXRpb25zW0xFWElDT04ubF07IGkrKykge1xuICAgICAgICAgIGlmIChfYW5pbWF0aW9uc1tpXS5lbCA9PT0gZWwpIHtcbiAgICAgICAgICAgIGFuaW1PYmogPSBfYW5pbWF0aW9uc1tpXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYW5pbU9iaikge1xuICAgICAgICAgIGFuaW1PYmogPSB7XG4gICAgICAgICAgICBlbDogZWwsXG4gICAgICAgICAgICBxOiBbXVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBfYW5pbWF0aW9ucy5wdXNoKGFuaW1PYmopO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICBpZiAoa2V5ID09PSBfc3RyU2Nyb2xsTGVmdCB8fCBrZXkgPT09IF9zdHJTY3JvbGxUb3ApIGZyb21ba2V5XSA9IGVsW2tleV07ZWxzZSBmcm9tW2tleV0gPSBGYWtlalF1ZXJ5KGVsKS5jc3Moa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoa2V5IGluIGZyb20pIHtcbiAgICAgICAgICBpZiAoZnJvbVtrZXldICE9PSBwcm9wc1trZXldICYmIHByb3BzW2tleV0gIT09IHVuZGVmaW5lZCQxKSB0b1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNFbXB0eU9iamVjdCh0bykpIHtcbiAgICAgICAgICB2YXIgdGltZU5vdztcbiAgICAgICAgICB2YXIgZW5kO1xuICAgICAgICAgIHZhciBwZXJjZW50O1xuICAgICAgICAgIHZhciBmcm9tVmFsO1xuICAgICAgICAgIHZhciB0b1ZhbDtcbiAgICAgICAgICB2YXIgZWFzZWRWYWw7XG4gICAgICAgICAgdmFyIHRpbWVTdGFydDtcblxuICAgICAgICAgIHZhciBfZnJhbWU7XG5cbiAgICAgICAgICB2YXIgZWxhcHNlZDtcbiAgICAgICAgICB2YXIgcVBvcyA9IGd1YXJhbnRlZWROZXh0ID8gMCA6IGluQXJyYXkocU9iaiwgYW5pbU9iai5xKTtcbiAgICAgICAgICB2YXIgcU9iaiA9IHtcbiAgICAgICAgICAgIHByb3BzOiB0byxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBoYXNPcHRpb25zID8gb3B0aW9ucyA6IGR1cmF0aW9uLFxuICAgICAgICAgICAgZWFzaW5nOiBlYXNpbmcsXG4gICAgICAgICAgICBjb21wbGV0ZTogY29tcGxldGVcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKHFQb3MgPT09IC0xKSB7XG4gICAgICAgICAgICBxUG9zID0gYW5pbU9iai5xW0xFWElDT04ubF07XG4gICAgICAgICAgICBhbmltT2JqLnEucHVzaChxT2JqKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocVBvcyA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgICAgICAgICAgICB0aW1lU3RhcnQgPSBDT01QQVRJQklMSVRZLm5vdygpO1xuXG4gICAgICAgICAgICAgIF9mcmFtZSA9IGZ1bmN0aW9uIGZyYW1lKCkge1xuICAgICAgICAgICAgICAgIHRpbWVOb3cgPSBDT01QQVRJQklMSVRZLm5vdygpO1xuICAgICAgICAgICAgICAgIGVsYXBzZWQgPSB0aW1lTm93IC0gdGltZVN0YXJ0O1xuICAgICAgICAgICAgICAgIGVuZCA9IHFPYmouc3RvcCB8fCBlbGFwc2VkID49IGR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIHBlcmNlbnQgPSAxIC0gKE1BVEgubWF4KDAsIHRpbWVTdGFydCArIGR1cmF0aW9uIC0gdGltZU5vdykgLyBkdXJhdGlvbiB8fCAwKTtcblxuICAgICAgICAgICAgICAgIGZvciAoa2V5IGluIHRvKSB7XG4gICAgICAgICAgICAgICAgICBmcm9tVmFsID0gcGFyc2VGbG9hdChmcm9tW2tleV0pO1xuICAgICAgICAgICAgICAgICAgdG9WYWwgPSBwYXJzZUZsb2F0KHRvW2tleV0pO1xuICAgICAgICAgICAgICAgICAgZWFzZWRWYWwgPSAodG9WYWwgLSBmcm9tVmFsKSAqIEVBU0lOR1tzcGVjaWFsRWFzaW5nW2tleV0gfHwgZWFzaW5nXShwZXJjZW50LCBwZXJjZW50ICogZHVyYXRpb24sIDAsIDEsIGR1cmF0aW9uKSArIGZyb21WYWw7XG4gICAgICAgICAgICAgICAgICBzZXRBbmltYXRpb25WYWx1ZShlbCwga2V5LCBlYXNlZFZhbCk7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHN0ZXApKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAoZWFzZWRWYWwsIHtcbiAgICAgICAgICAgICAgICAgICAgICBlbGVtOiBlbCxcbiAgICAgICAgICAgICAgICAgICAgICBwcm9wOiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IGZyb21WYWwsXG4gICAgICAgICAgICAgICAgICAgICAgbm93OiBlYXNlZFZhbCxcbiAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHRvVmFsLFxuICAgICAgICAgICAgICAgICAgICAgIHBvczogcGVyY2VudCxcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6IGVhc2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFjaWFsRWFzaW5nOiBzcGVjaWFsRWFzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGNvbXBsZXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcDogc3RlcFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lOiB0aW1lU3RhcnRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24ocHJvZ3Jlc3MpKSBwcm9ncmVzcyh7fSwgcGVyY2VudCwgTUFUSC5tYXgoMCwgZHVyYXRpb24gLSBlbGFwc2VkKSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZW5kKSB7XG4gICAgICAgICAgICAgICAgICBzdGFydE5leHRBbmltYXRpb25JblEoYW5pbU9iaik7XG4gICAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihjb21wbGV0ZSkpIGNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHFPYmouZnJhbWUgPSBDT01QQVRJQklMSVRZLnJBRigpKF9mcmFtZSk7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgcU9iai5mcmFtZSA9IENPTVBBVElCSUxJVFkuckFGKCkoX2ZyYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZvciAoa2V5IGluIHRvKSB7XG4gICAgICAgICAgICAgICAgc2V0QW5pbWF0aW9uVmFsdWUoZWwsIGtleSwgdG9ba2V5XSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzdGFydE5leHRBbmltYXRpb25JblEoYW5pbU9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGd1YXJhbnRlZWROZXh0KSBzdGFydE5leHRBbmltYXRpb25JblEoYW5pbU9iaik7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF9zdG9wKGVsLCBjbGVhclEsIGp1bXBUb0VuZCkge1xuICAgICAgICB2YXIgYW5pbU9iajtcbiAgICAgICAgdmFyIHFPYmo7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIHZhciBpID0gMDtcblxuICAgICAgICBmb3IgKDsgaSA8IF9hbmltYXRpb25zW0xFWElDT04ubF07IGkrKykge1xuICAgICAgICAgIGFuaW1PYmogPSBfYW5pbWF0aW9uc1tpXTtcblxuICAgICAgICAgIGlmIChhbmltT2JqLmVsID09PSBlbCkge1xuICAgICAgICAgICAgaWYgKGFuaW1PYmoucVtMRVhJQ09OLmxdID4gMCkge1xuICAgICAgICAgICAgICBxT2JqID0gYW5pbU9iai5xWzBdO1xuICAgICAgICAgICAgICBxT2JqLnN0b3AgPSB0cnVlO1xuICAgICAgICAgICAgICBDT01QQVRJQklMSVRZLmNBRigpKHFPYmouZnJhbWUpO1xuICAgICAgICAgICAgICBhbmltT2JqLnEuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICBpZiAoanVtcFRvRW5kKSBmb3IgKGtleSBpbiBxT2JqLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgc2V0QW5pbWF0aW9uVmFsdWUoZWwsIGtleSwgcU9iai5wcm9wc1trZXldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoY2xlYXJRKSBhbmltT2JqLnEgPSBbXTtlbHNlIHN0YXJ0TmV4dEFuaW1hdGlvbkluUShhbmltT2JqLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBlbGVtZW50SXNWaXNpYmxlKGVsKSB7XG4gICAgICAgIHJldHVybiAhIShlbFtMRVhJQ09OLm9XXSB8fCBlbFtMRVhJQ09OLm9IXSB8fCBlbC5nZXRDbGllbnRSZWN0cygpW0xFWElDT04ubF0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBGYWtlalF1ZXJ5KHNlbGVjdG9yKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHNbTEVYSUNPTi5sXSA9PT0gMCkgcmV0dXJuIHRoaXM7XG4gICAgICAgIHZhciBiYXNlID0gbmV3IEZha2VqUXVlcnkoKTtcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gc2VsZWN0b3I7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGVsbXM7XG4gICAgICAgIHZhciBlbDtcblxuICAgICAgICBpZiAoX3R5cGUoc2VsZWN0b3IpID09IFRZUEVTLnMpIHtcbiAgICAgICAgICBlbGVtZW50cyA9IFtdO1xuXG4gICAgICAgICAgaWYgKHNlbGVjdG9yLmNoYXJBdCgwKSA9PT0gJzwnKSB7XG4gICAgICAgICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gc2VsZWN0b3I7XG4gICAgICAgICAgICBlbG1zID0gZWwuY2hpbGRyZW47XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKDsgaSA8IGVsbXNbTEVYSUNPTi5sXTsgaSsrKSB7XG4gICAgICAgICAgICBlbGVtZW50cy5wdXNoKGVsbXNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGVtZW50cykge1xuICAgICAgICAgIGlmIChfdHlwZShlbGVtZW50cykgIT0gVFlQRVMucyAmJiAoIWlzQXJyYXlMaWtlKGVsZW1lbnRzKSB8fCBlbGVtZW50cyA9PT0gd2luZG93IHx8IGVsZW1lbnRzID09PSBlbGVtZW50cy5zZWxmKSkgZWxlbWVudHMgPSBbZWxlbWVudHNdO1xuXG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IGVsZW1lbnRzW0xFWElDT04ubF07IGkrKykge1xuICAgICAgICAgICAgYmFzZVtpXSA9IGVsZW1lbnRzW2ldO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJhc2VbTEVYSUNPTi5sXSA9IGVsZW1lbnRzW0xFWElDT04ubF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYmFzZTtcbiAgICAgIH1cblxuICAgICAgRmFrZWpRdWVyeVtMRVhJQ09OLnBdID0ge1xuICAgICAgICAvL0VWRU5UUzpcbiAgICAgICAgb246IGZ1bmN0aW9uIG9uKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgICAgICAgIGV2ZW50TmFtZSA9IChldmVudE5hbWUgfHwgX3N0ckVtcHR5KS5tYXRjaChfcm5vdGh0bWx3aGl0ZSkgfHwgW19zdHJFbXB0eV07XG4gICAgICAgICAgdmFyIGV2ZW50TmFtZUxlbmd0aCA9IGV2ZW50TmFtZVtMRVhJQ09OLmxdO1xuICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICB2YXIgZWw7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbCA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBldmVudE5hbWVMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWVbaV0sIGhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbC5kZXRhY2hFdmVudCkge1xuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgZXZlbnROYW1lTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGVsLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWVbaV0sIGhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmOiBmdW5jdGlvbiBvZmYoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgICAgZXZlbnROYW1lID0gKGV2ZW50TmFtZSB8fCBfc3RyRW1wdHkpLm1hdGNoKF9ybm90aHRtbHdoaXRlKSB8fCBbX3N0ckVtcHR5XTtcbiAgICAgICAgICB2YXIgZXZlbnROYW1lTGVuZ3RoID0gZXZlbnROYW1lW0xFWElDT04ubF07XG4gICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgIHZhciBlbDtcbiAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVsID0gdGhpcztcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgaWYgKGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGV2ZW50TmFtZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZVtpXSwgaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVsLmRldGFjaEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBldmVudE5hbWVMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgZWwuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZVtpXSwgaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbmU6IGZ1bmN0aW9uIG9uZShldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgICBldmVudE5hbWUgPSAoZXZlbnROYW1lIHx8IF9zdHJFbXB0eSkubWF0Y2goX3Jub3RodG1sd2hpdGUpIHx8IFtfc3RyRW1wdHldO1xuICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gRmFrZWpRdWVyeSh0aGlzKTtcbiAgICAgICAgICAgIEZha2VqUXVlcnkuZWFjaChldmVudE5hbWUsIGZ1bmN0aW9uIChpLCBvbmVFdmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgdmFyIG9uZUhhbmRsZXIgPSBmdW5jdGlvbiBvbmVIYW5kbGVyKGUpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgZSk7XG4gICAgICAgICAgICAgICAgZWwub2ZmKG9uZUV2ZW50TmFtZSwgb25lSGFuZGxlcik7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgZWwub24ob25lRXZlbnROYW1lLCBvbmVIYW5kbGVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICB0cmlnZ2VyOiBmdW5jdGlvbiB0cmlnZ2VyKGV2ZW50TmFtZSkge1xuICAgICAgICAgIHZhciBlbDtcbiAgICAgICAgICB2YXIgZXZlbnQ7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudCkge1xuICAgICAgICAgICAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJyk7XG4gICAgICAgICAgICAgIGV2ZW50LmluaXRFdmVudChldmVudE5hbWUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbC5maXJlRXZlbnQoJ29uJyArIGV2ZW50TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vRE9NIE5PREUgSU5TRVJUSU5HIC8gUkVNT1ZJTkc6XG4gICAgICAgIGFwcGVuZDogZnVuY3Rpb24gYXBwZW5kKGNoaWxkKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpbnNlcnRBZGphY2VudEVsZW1lbnQodGhpcywgJ2JlZm9yZWVuZCcsIGNoaWxkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlcGVuZDogZnVuY3Rpb24gcHJlcGVuZChjaGlsZCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaW5zZXJ0QWRqYWNlbnRFbGVtZW50KHRoaXMsICdhZnRlcmJlZ2luJywgY2hpbGQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBiZWZvcmU6IGZ1bmN0aW9uIGJlZm9yZShjaGlsZCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaW5zZXJ0QWRqYWNlbnRFbGVtZW50KHRoaXMsICdiZWZvcmViZWdpbicsIGNoaWxkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgYWZ0ZXI6IGZ1bmN0aW9uIGFmdGVyKGNoaWxkKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpbnNlcnRBZGphY2VudEVsZW1lbnQodGhpcywgJ2FmdGVyZW5kJywgY2hpbGQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlbCA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGVsLnBhcmVudE5vZGU7XG4gICAgICAgICAgICBpZiAocGFyZW50Tm9kZSAhPSBudWxsKSBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgdW53cmFwOiBmdW5jdGlvbiB1bndyYXAoKSB7XG4gICAgICAgICAgdmFyIHBhcmVudHMgPSBbXTtcbiAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICB2YXIgZWw7XG4gICAgICAgICAgdmFyIHBhcmVudDtcbiAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICAgICAgICAgICAgaWYgKGluQXJyYXkocGFyZW50LCBwYXJlbnRzKSA9PT0gLTEpIHBhcmVudHMucHVzaChwYXJlbnQpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcmVudHNbTEVYSUNPTi5sXTsgaSsrKSB7XG4gICAgICAgICAgICBlbCA9IHBhcmVudHNbaV07XG4gICAgICAgICAgICBwYXJlbnQgPSBlbC5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgICB3aGlsZSAoZWwuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGVsLmZpcnN0Q2hpbGQsIGVsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgd3JhcEFsbDogZnVuY3Rpb24gd3JhcEFsbCh3cmFwcGVySFRNTCkge1xuICAgICAgICAgIHZhciBpO1xuICAgICAgICAgIHZhciBub2RlcyA9IHRoaXM7XG4gICAgICAgICAgdmFyIHdyYXBwZXIgPSBGYWtlalF1ZXJ5KHdyYXBwZXJIVE1MKVswXTtcbiAgICAgICAgICB2YXIgZGVlcGVzdCA9IHdyYXBwZXI7XG4gICAgICAgICAgdmFyIHBhcmVudCA9IG5vZGVzWzBdLnBhcmVudE5vZGU7XG4gICAgICAgICAgdmFyIHByZXZpb3VzU2libGluZyA9IG5vZGVzWzBdLnByZXZpb3VzU2libGluZztcblxuICAgICAgICAgIHdoaWxlIChkZWVwZXN0LmNoaWxkTm9kZXNbTEVYSUNPTi5sXSA+IDApIHtcbiAgICAgICAgICAgIGRlZXBlc3QgPSBkZWVwZXN0LmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yIChpID0gMDsgbm9kZXNbTEVYSUNPTi5sXSAtIGk7IGRlZXBlc3QuZmlyc3RDaGlsZCA9PT0gbm9kZXNbMF0gJiYgaSsrKSB7XG4gICAgICAgICAgICBkZWVwZXN0LmFwcGVuZENoaWxkKG5vZGVzW2ldKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgbmV4dFNpYmxpbmcgPSBwcmV2aW91c1NpYmxpbmcgPyBwcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcgOiBwYXJlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIG5leHRTaWJsaW5nKTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgd3JhcElubmVyOiBmdW5jdGlvbiB3cmFwSW5uZXIod3JhcHBlckhUTUwpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlbCA9IEZha2VqUXVlcnkodGhpcyk7XG4gICAgICAgICAgICB2YXIgY29udGVudHMgPSBlbC5jb250ZW50cygpO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnRzW0xFWElDT04ubF0pIGNvbnRlbnRzLndyYXBBbGwod3JhcHBlckhUTUwpO2Vsc2UgZWwuYXBwZW5kKHdyYXBwZXJIVE1MKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgd3JhcDogZnVuY3Rpb24gd3JhcCh3cmFwcGVySFRNTCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgRmFrZWpRdWVyeSh0aGlzKS53cmFwQWxsKHdyYXBwZXJIVE1MKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgLy9ET00gTk9ERSBNQU5JUFVMQVRJT04gLyBJTkZPUk1BVElPTjpcbiAgICAgICAgY3NzOiBmdW5jdGlvbiBjc3Moc3R5bGVzLCB2YWwpIHtcbiAgICAgICAgICB2YXIgZWw7XG4gICAgICAgICAgdmFyIGtleTtcbiAgICAgICAgICB2YXIgY3B0U3R5bGU7XG4gICAgICAgICAgdmFyIGdldENwdFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGU7XG5cbiAgICAgICAgICBpZiAoX3R5cGUoc3R5bGVzKSA9PSBUWVBFUy5zKSB7XG4gICAgICAgICAgICBpZiAodmFsID09PSB1bmRlZmluZWQkMSkge1xuICAgICAgICAgICAgICBlbCA9IHRoaXNbMF07XG4gICAgICAgICAgICAgIGNwdFN0eWxlID0gZ2V0Q3B0U3R5bGUgPyBnZXRDcHRTdHlsZShlbCwgbnVsbCkgOiBlbC5jdXJyZW50U3R5bGVbc3R5bGVzXTsgLy9odHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTcgY2FuIGJlIG51bGwgc29tZXRpbWVzIGlmIGlmcmFtZSB3aXRoIGRpc3BsYXk6IG5vbmUgKGZpcmVmb3ggb25seSEpXG5cbiAgICAgICAgICAgICAgcmV0dXJuIGdldENwdFN0eWxlID8gY3B0U3R5bGUgIT0gbnVsbCA/IGNwdFN0eWxlLmdldFByb3BlcnR5VmFsdWUoc3R5bGVzKSA6IGVsW0xFWElDT04uc11bc3R5bGVzXSA6IGNwdFN0eWxlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2V0Q1NTVmFsKHRoaXMsIHN0eWxlcywgdmFsKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBmb3IgKGtleSBpbiBzdHlsZXMpIHtcbiAgICAgICAgICAgICAgICBzZXRDU1NWYWwodGhpcywga2V5LCBzdHlsZXNba2V5XSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaGFzQ2xhc3M6IGZ1bmN0aW9uIGhhc0NsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICAgIHZhciBlbGVtLFxuICAgICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICB2YXIgY2xhc3NOYW1lUHJlcGFyZWQgPSBfc3RyU3BhY2UgKyBjbGFzc05hbWUgKyBfc3RyU3BhY2U7XG4gICAgICAgICAgdmFyIGNsYXNzTGlzdDtcblxuICAgICAgICAgIHdoaWxlIChlbGVtID0gdGhpc1tpKytdKSB7XG4gICAgICAgICAgICBjbGFzc0xpc3QgPSBlbGVtLmNsYXNzTGlzdDtcbiAgICAgICAgICAgIGlmIChjbGFzc0xpc3QgJiYgY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHJldHVybiB0cnVlO2Vsc2UgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDEgJiYgKF9zdHJTcGFjZSArIHN0cmlwQW5kQ29sbGFwc2UoZWxlbS5jbGFzc05hbWUgKyBfc3RyRW1wdHkpICsgX3N0clNwYWNlKS5pbmRleE9mKGNsYXNzTmFtZVByZXBhcmVkKSA+IC0xKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgICB2YXIgY2xhc3NlcztcbiAgICAgICAgICB2YXIgZWxlbTtcbiAgICAgICAgICB2YXIgY3VyO1xuICAgICAgICAgIHZhciBjdXJWYWx1ZTtcbiAgICAgICAgICB2YXIgY2xheno7XG4gICAgICAgICAgdmFyIGZpbmFsVmFsdWU7XG4gICAgICAgICAgdmFyIHN1cHBvcnRDbGFzc0xpc3Q7XG4gICAgICAgICAgdmFyIGVsbUNsYXNzTGlzdDtcbiAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgdmFyIHYgPSAwO1xuXG4gICAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgY2xhc3NlcyA9IGNsYXNzTmFtZS5tYXRjaChfcm5vdGh0bWx3aGl0ZSkgfHwgW107XG5cbiAgICAgICAgICAgIHdoaWxlIChlbGVtID0gdGhpc1tpKytdKSB7XG4gICAgICAgICAgICAgIGVsbUNsYXNzTGlzdCA9IGVsZW0uY2xhc3NMaXN0O1xuICAgICAgICAgICAgICBpZiAoc3VwcG9ydENsYXNzTGlzdCA9PT0gdW5kZWZpbmVkJDEpIHN1cHBvcnRDbGFzc0xpc3QgPSBlbG1DbGFzc0xpc3QgIT09IHVuZGVmaW5lZCQxO1xuXG4gICAgICAgICAgICAgIGlmIChzdXBwb3J0Q2xhc3NMaXN0KSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGNsYXp6ID0gY2xhc3Nlc1t2KytdKSB7XG4gICAgICAgICAgICAgICAgICBlbG1DbGFzc0xpc3QuYWRkKGNsYXp6KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VyVmFsdWUgPSBlbGVtLmNsYXNzTmFtZSArIF9zdHJFbXB0eTtcbiAgICAgICAgICAgICAgICBjdXIgPSBlbGVtLm5vZGVUeXBlID09PSAxICYmIF9zdHJTcGFjZSArIHN0cmlwQW5kQ29sbGFwc2UoY3VyVmFsdWUpICsgX3N0clNwYWNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKGN1cikge1xuICAgICAgICAgICAgICAgICAgd2hpbGUgKGNsYXp6ID0gY2xhc3Nlc1t2KytdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXIuaW5kZXhPZihfc3RyU3BhY2UgKyBjbGF6eiArIF9zdHJTcGFjZSkgPCAwKSBjdXIgKz0gY2xhenogKyBfc3RyU3BhY2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGZpbmFsVmFsdWUgPSBzdHJpcEFuZENvbGxhcHNlKGN1cik7XG4gICAgICAgICAgICAgICAgICBpZiAoY3VyVmFsdWUgIT09IGZpbmFsVmFsdWUpIGVsZW0uY2xhc3NOYW1lID0gZmluYWxWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICAgIHZhciBjbGFzc2VzO1xuICAgICAgICAgIHZhciBlbGVtO1xuICAgICAgICAgIHZhciBjdXI7XG4gICAgICAgICAgdmFyIGN1clZhbHVlO1xuICAgICAgICAgIHZhciBjbGF6ejtcbiAgICAgICAgICB2YXIgZmluYWxWYWx1ZTtcbiAgICAgICAgICB2YXIgc3VwcG9ydENsYXNzTGlzdDtcbiAgICAgICAgICB2YXIgZWxtQ2xhc3NMaXN0O1xuICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICB2YXIgdiA9IDA7XG5cbiAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBjbGFzc2VzID0gY2xhc3NOYW1lLm1hdGNoKF9ybm90aHRtbHdoaXRlKSB8fCBbXTtcblxuICAgICAgICAgICAgd2hpbGUgKGVsZW0gPSB0aGlzW2krK10pIHtcbiAgICAgICAgICAgICAgZWxtQ2xhc3NMaXN0ID0gZWxlbS5jbGFzc0xpc3Q7XG4gICAgICAgICAgICAgIGlmIChzdXBwb3J0Q2xhc3NMaXN0ID09PSB1bmRlZmluZWQkMSkgc3VwcG9ydENsYXNzTGlzdCA9IGVsbUNsYXNzTGlzdCAhPT0gdW5kZWZpbmVkJDE7XG5cbiAgICAgICAgICAgICAgaWYgKHN1cHBvcnRDbGFzc0xpc3QpIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoY2xhenogPSBjbGFzc2VzW3YrK10pIHtcbiAgICAgICAgICAgICAgICAgIGVsbUNsYXNzTGlzdC5yZW1vdmUoY2xhenopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJWYWx1ZSA9IGVsZW0uY2xhc3NOYW1lICsgX3N0ckVtcHR5O1xuICAgICAgICAgICAgICAgIGN1ciA9IGVsZW0ubm9kZVR5cGUgPT09IDEgJiYgX3N0clNwYWNlICsgc3RyaXBBbmRDb2xsYXBzZShjdXJWYWx1ZSkgKyBfc3RyU3BhY2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoY3VyKSB7XG4gICAgICAgICAgICAgICAgICB3aGlsZSAoY2xhenogPSBjbGFzc2VzW3YrK10pIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGN1ci5pbmRleE9mKF9zdHJTcGFjZSArIGNsYXp6ICsgX3N0clNwYWNlKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY3VyID0gY3VyLnJlcGxhY2UoX3N0clNwYWNlICsgY2xhenogKyBfc3RyU3BhY2UsIF9zdHJTcGFjZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgZmluYWxWYWx1ZSA9IHN0cmlwQW5kQ29sbGFwc2UoY3VyKTtcbiAgICAgICAgICAgICAgICAgIGlmIChjdXJWYWx1ZSAhPT0gZmluYWxWYWx1ZSkgZWxlbS5jbGFzc05hbWUgPSBmaW5hbFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICBoaWRlOiBmdW5jdGlvbiBoaWRlKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpc1tMRVhJQ09OLnNdLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzW0xFWElDT04uc10uZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGF0dHI6IGZ1bmN0aW9uIGF0dHIoYXR0ck5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgIHZhciBlbDtcblxuICAgICAgICAgIHdoaWxlIChlbCA9IHRoaXNbaSsrXSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQkMSkgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIHZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlQXR0cjogZnVuY3Rpb24gcmVtb3ZlQXR0cihhdHRyTmFtZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvZmZzZXQ6IGZ1bmN0aW9uIG9mZnNldCgpIHtcbiAgICAgICAgICB2YXIgZWwgPSB0aGlzWzBdO1xuICAgICAgICAgIHZhciByZWN0ID0gZWxbTEVYSUNPTi5iQ1JdKCk7XG4gICAgICAgICAgdmFyIHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W19zdHJTY3JvbGxMZWZ0XTtcbiAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtfc3RyU2Nyb2xsVG9wXTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCArIHNjcm9sbFRvcCxcbiAgICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHNjcm9sbExlZnRcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBwb3NpdGlvbjogZnVuY3Rpb24gcG9zaXRpb24oKSB7XG4gICAgICAgICAgdmFyIGVsID0gdGhpc1swXTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiBlbC5vZmZzZXRUb3AsXG4gICAgICAgICAgICBsZWZ0OiBlbC5vZmZzZXRMZWZ0XG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgc2Nyb2xsTGVmdDogZnVuY3Rpb24gc2Nyb2xsTGVmdCh2YWx1ZSkge1xuICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICB2YXIgZWw7XG5cbiAgICAgICAgICB3aGlsZSAoZWwgPSB0aGlzW2krK10pIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkJDEpIHJldHVybiBlbFtfc3RyU2Nyb2xsTGVmdF07XG4gICAgICAgICAgICBlbFtfc3RyU2Nyb2xsTGVmdF0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgc2Nyb2xsVG9wOiBmdW5jdGlvbiBzY3JvbGxUb3AodmFsdWUpIHtcbiAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgdmFyIGVsO1xuXG4gICAgICAgICAgd2hpbGUgKGVsID0gdGhpc1tpKytdKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCQxKSByZXR1cm4gZWxbX3N0clNjcm9sbFRvcF07XG4gICAgICAgICAgICBlbFtfc3RyU2Nyb2xsVG9wXSA9IHZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICB2YWw6IGZ1bmN0aW9uIHZhbCh2YWx1ZSkge1xuICAgICAgICAgIHZhciBlbCA9IHRoaXNbMF07XG4gICAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIGVsLnZhbHVlO1xuICAgICAgICAgIGVsLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIC8vRE9NIFRSQVZFUlNBTCAvIEZJTFRFUklORzpcbiAgICAgICAgZmlyc3Q6IGZ1bmN0aW9uIGZpcnN0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVxKDApO1xuICAgICAgICB9LFxuICAgICAgICBsYXN0OiBmdW5jdGlvbiBsYXN0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVxKC0xKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXE6IGZ1bmN0aW9uIGVxKGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIEZha2VqUXVlcnkodGhpc1tpbmRleCA+PSAwID8gaW5kZXggOiB0aGlzW0xFWElDT04ubF0gKyBpbmRleF0pO1xuICAgICAgICB9LFxuICAgICAgICBmaW5kOiBmdW5jdGlvbiBmaW5kKHNlbGVjdG9yKSB7XG4gICAgICAgICAgdmFyIGNoaWxkcmVuID0gW107XG4gICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlbCA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgY2ggPSBlbC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoW0xFWElDT04ubF07IGkrKykge1xuICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKGNoW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gRmFrZWpRdWVyeShjaGlsZHJlbik7XG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBmdW5jdGlvbiBjaGlsZHJlbihzZWxlY3Rvcikge1xuICAgICAgICAgIHZhciBjaGlsZHJlbiA9IFtdO1xuICAgICAgICAgIHZhciBlbDtcbiAgICAgICAgICB2YXIgY2g7XG4gICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNoID0gdGhpcy5jaGlsZHJlbjtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoW0xFWElDT04ubF07IGkrKykge1xuICAgICAgICAgICAgICBlbCA9IGNoW2ldO1xuXG4gICAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIGlmIChlbC5tYXRjaGVzICYmIGVsLm1hdGNoZXMoc2VsZWN0b3IpIHx8IG1hdGNoZXMoZWwsIHNlbGVjdG9yKSkgY2hpbGRyZW4ucHVzaChlbCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBjaGlsZHJlbi5wdXNoKGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gRmFrZWpRdWVyeShjaGlsZHJlbik7XG4gICAgICAgIH0sXG4gICAgICAgIHBhcmVudDogZnVuY3Rpb24gcGFyZW50KHNlbGVjdG9yKSB7XG4gICAgICAgICAgdmFyIHBhcmVudHMgPSBbXTtcbiAgICAgICAgICB2YXIgcGFyZW50O1xuICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gICAgICAgICAgICBpZiAoc2VsZWN0b3IgPyBGYWtlalF1ZXJ5KHBhcmVudCkuaXMoc2VsZWN0b3IpIDogdHJ1ZSkgcGFyZW50cy5wdXNoKHBhcmVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIEZha2VqUXVlcnkocGFyZW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIGlzOiBmdW5jdGlvbiBpcyhzZWxlY3Rvcikge1xuICAgICAgICAgIHZhciBlbDtcbiAgICAgICAgICB2YXIgaTtcblxuICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzW0xFWElDT04ubF07IGkrKykge1xuICAgICAgICAgICAgZWwgPSB0aGlzW2ldO1xuICAgICAgICAgICAgaWYgKHNlbGVjdG9yID09PSAnOnZpc2libGUnKSByZXR1cm4gZWxlbWVudElzVmlzaWJsZShlbCk7XG4gICAgICAgICAgICBpZiAoc2VsZWN0b3IgPT09ICc6aGlkZGVuJykgcmV0dXJuICFlbGVtZW50SXNWaXNpYmxlKGVsKTtcbiAgICAgICAgICAgIGlmIChlbC5tYXRjaGVzICYmIGVsLm1hdGNoZXMoc2VsZWN0b3IpIHx8IG1hdGNoZXMoZWwsIHNlbGVjdG9yKSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50czogZnVuY3Rpb24gY29udGVudHMoKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnRzID0gW107XG4gICAgICAgICAgdmFyIGNoaWxkcztcbiAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2hpbGRzID0gdGhpcy5jaGlsZE5vZGVzO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2hpbGRzW0xFWElDT04ubF07IGkrKykge1xuICAgICAgICAgICAgICBjb250ZW50cy5wdXNoKGNoaWxkc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIEZha2VqUXVlcnkoY29udGVudHMpO1xuICAgICAgICB9LFxuICAgICAgICBlYWNoOiBmdW5jdGlvbiBlYWNoKGNhbGxiYWNrKSB7XG4gICAgICAgICAgcmV0dXJuIF9lYWNoKHRoaXMsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy9BTklNQVRJT046XG4gICAgICAgIGFuaW1hdGU6IGZ1bmN0aW9uIGFuaW1hdGUocHJvcHMsIGR1cmF0aW9uLCBlYXNpbmcsIGNvbXBsZXRlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfYW5pbWF0ZSh0aGlzLCBwcm9wcywgZHVyYXRpb24sIGVhc2luZywgY29tcGxldGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKGNsZWFyUSwganVtcCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3N0b3AodGhpcywgY2xlYXJRLCBqdW1wKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGV4dGVuZChGYWtlalF1ZXJ5LCB7XG4gICAgICAgIGV4dGVuZDogZXh0ZW5kLFxuICAgICAgICBpbkFycmF5OiBpbkFycmF5LFxuICAgICAgICBpc0VtcHR5T2JqZWN0OiBpc0VtcHR5T2JqZWN0LFxuICAgICAgICBpc1BsYWluT2JqZWN0OiBpc1BsYWluT2JqZWN0LFxuICAgICAgICBlYWNoOiBfZWFjaFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gRmFrZWpRdWVyeTtcbiAgICB9KCk7XG5cbiAgICB2YXIgSU5TVEFOQ0VTID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90YXJnZXRzID0gW107XG4gICAgICB2YXIgX2luc3RhbmNlUHJvcGVydHlTdHJpbmcgPSAnX19vdmVybGF5U2Nyb2xsYmFyc19fJztcbiAgICAgIC8qKlxyXG4gICAgICAgKiBSZWdpc3RlciwgdW5yZWdpc3RlciBvciBnZXQgYSBjZXJ0YWluIChvciBhbGwpIGluc3RhbmNlcy5cclxuICAgICAgICogUmVnaXN0ZXI6IFBhc3MgdGhlIHRhcmdldCBhbmQgdGhlIGluc3RhbmNlLlxyXG4gICAgICAgKiBVbnJlZ2lzdGVyOiBQYXNzIHRoZSB0YXJnZXQgYW5kIG51bGwuXHJcbiAgICAgICAqIEdldCBJbnN0YW5jZTogUGFzcyB0aGUgdGFyZ2V0IGZyb20gd2hpY2ggdGhlIGluc3RhbmNlIHNoYWxsIGJlIGdvdC5cclxuICAgICAgICogR2V0IFRhcmdldHM6IFBhc3Mgbm8gYXJndW1lbnRzLlxyXG4gICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgdG8gd2hpY2ggdGhlIGluc3RhbmNlIHNoYWxsIGJlIHJlZ2lzdGVyZWQgLyBmcm9tIHdoaWNoIHRoZSBpbnN0YW5jZSBzaGFsbCBiZSB1bnJlZ2lzdGVyZWQgLyB0aGUgaW5zdGFuY2Ugc2hhbGwgYmUgZ290XHJcbiAgICAgICAqIEBwYXJhbSBpbnN0YW5jZSBUaGUgaW5zdGFuY2UuXHJcbiAgICAgICAqIEByZXR1cm5zIHsqfHZvaWR9IFJldHVybnMgdGhlIGluc3RhbmNlIGZyb20gdGhlIGdpdmVuIHRhcmdldC5cclxuICAgICAgICovXG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBpbnN0YW5jZSkge1xuICAgICAgICB2YXIgYXJnTGVuID0gYXJndW1lbnRzW0xFWElDT04ubF07XG5cbiAgICAgICAgaWYgKGFyZ0xlbiA8IDEpIHtcbiAgICAgICAgICAvL3JldHVybiBhbGwgdGFyZ2V0c1xuICAgICAgICAgIHJldHVybiBfdGFyZ2V0cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIC8vcmVnaXN0ZXIgaW5zdGFuY2VcbiAgICAgICAgICAgIHRhcmdldFtfaW5zdGFuY2VQcm9wZXJ0eVN0cmluZ10gPSBpbnN0YW5jZTtcblxuICAgICAgICAgICAgX3RhcmdldHMucHVzaCh0YXJnZXQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBDT01QQVRJQklMSVRZLmluQSh0YXJnZXQsIF90YXJnZXRzKTtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgaWYgKGFyZ0xlbiA+IDEpIHtcbiAgICAgICAgICAgICAgICAvL3VucmVnaXN0ZXIgaW5zdGFuY2VcbiAgICAgICAgICAgICAgICBkZWxldGUgdGFyZ2V0W19pbnN0YW5jZVByb3BlcnR5U3RyaW5nXTtcblxuICAgICAgICAgICAgICAgIF90YXJnZXRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9nZXQgaW5zdGFuY2UgZnJvbSB0YXJnZXRcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RhcmdldHNbaW5kZXhdW19pbnN0YW5jZVByb3BlcnR5U3RyaW5nXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KCk7XG5cbiAgICB2YXIgUExVR0lOID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9wbHVnaW47XG5cbiAgICAgIHZhciBfcGx1Z2luc0dsb2JhbHM7XG5cbiAgICAgIHZhciBfcGx1Z2luc0F1dG9VcGRhdGVMb29wO1xuXG4gICAgICB2YXIgX3BsdWdpbnNFeHRlbnNpb25zID0gW107XG5cbiAgICAgIHZhciBfcGx1Z2luc09wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0eXBlID0gQ09NUEFUSUJJTElUWS50eXBlO1xuICAgICAgICB2YXIgcG9zc2libGVUZW1wbGF0ZVR5cGVzID0gW1RZUEVTLmIsIC8vYm9vbGVhblxuICAgICAgICBUWVBFUy5uLCAvL251bWJlclxuICAgICAgICBUWVBFUy5zLCAvL3N0cmluZ1xuICAgICAgICBUWVBFUy5hLCAvL2FycmF5XG4gICAgICAgIFRZUEVTLm8sIC8vb2JqZWN0XG4gICAgICAgIFRZUEVTLmYsIC8vZnVuY3Rpb25cbiAgICAgICAgVFlQRVMueiAvL251bGxcbiAgICAgICAgXTtcbiAgICAgICAgdmFyIHJlc3RyaWN0ZWRTdHJpbmdzU3BsaXQgPSAnICc7XG4gICAgICAgIHZhciByZXN0cmljdGVkU3RyaW5nc1Bvc3NpYmlsaXRpZXNTcGxpdCA9ICc6JztcbiAgICAgICAgdmFyIGNsYXNzTmFtZUFsbG93ZWRWYWx1ZXMgPSBbVFlQRVMueiwgVFlQRVMuc107XG4gICAgICAgIHZhciBudW1iZXJBbGxvd2VkVmFsdWVzID0gVFlQRVMubjtcbiAgICAgICAgdmFyIGJvb2xlYW5OdWxsQWxsb3dlZFZhbHVlcyA9IFtUWVBFUy56LCBUWVBFUy5iXTtcbiAgICAgICAgdmFyIGJvb2xlYW5UcnVlVGVtcGxhdGUgPSBbdHJ1ZSwgVFlQRVMuYl07XG4gICAgICAgIHZhciBib29sZWFuRmFsc2VUZW1wbGF0ZSA9IFtmYWxzZSwgVFlQRVMuYl07XG4gICAgICAgIHZhciBjYWxsYmFja1RlbXBsYXRlID0gW251bGwsIFtUWVBFUy56LCBUWVBFUy5mXV07XG4gICAgICAgIHZhciB1cGRhdGVPbkxvYWRUZW1wbGF0ZSA9IFtbJ2ltZyddLCBbVFlQRVMucywgVFlQRVMuYSwgVFlQRVMuel1dO1xuICAgICAgICB2YXIgaW5oZXJpdGVkQXR0cnNUZW1wbGF0ZSA9IFtbJ3N0eWxlJywgJ2NsYXNzJ10sIFtUWVBFUy5zLCBUWVBFUy5hLCBUWVBFUy56XV07XG4gICAgICAgIHZhciByZXNpemVBbGxvd2VkVmFsdWVzID0gJ246bm9uZSBiOmJvdGggaDpob3Jpem9udGFsIHY6dmVydGljYWwnO1xuICAgICAgICB2YXIgb3ZlcmZsb3dCZWhhdmlvckFsbG93ZWRWYWx1ZXMgPSAndi1oOnZpc2libGUtaGlkZGVuIHYtczp2aXNpYmxlLXNjcm9sbCBzOnNjcm9sbCBoOmhpZGRlbic7XG4gICAgICAgIHZhciBzY3JvbGxiYXJzVmlzaWJpbGl0eUFsbG93ZWRWYWx1ZXMgPSAndjp2aXNpYmxlIGg6aGlkZGVuIGE6YXV0byc7XG4gICAgICAgIHZhciBzY3JvbGxiYXJzQXV0b0hpZGVBbGxvd2VkVmFsdWVzID0gJ246bmV2ZXIgczpzY3JvbGwgbDpsZWF2ZSBtOm1vdmUnO1xuICAgICAgICB2YXIgb3B0aW9uc0RlZmF1bHRzQW5kVGVtcGxhdGUgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBbJ29zLXRoZW1lLWRhcmsnLCBjbGFzc05hbWVBbGxvd2VkVmFsdWVzXSxcbiAgICAgICAgICAvL251bGwgfHwgc3RyaW5nXG4gICAgICAgICAgcmVzaXplOiBbJ25vbmUnLCByZXNpemVBbGxvd2VkVmFsdWVzXSxcbiAgICAgICAgICAvL25vbmUgfHwgYm90aCAgfHwgaG9yaXpvbnRhbCB8fCB2ZXJ0aWNhbCB8fCBuIHx8IGIgfHwgaCB8fCB2XG4gICAgICAgICAgc2l6ZUF1dG9DYXBhYmxlOiBib29sZWFuVHJ1ZVRlbXBsYXRlLFxuICAgICAgICAgIC8vdHJ1ZSB8fCBmYWxzZVxuICAgICAgICAgIGNsaXBBbHdheXM6IGJvb2xlYW5UcnVlVGVtcGxhdGUsXG4gICAgICAgICAgLy90cnVlIHx8IGZhbHNlXG4gICAgICAgICAgbm9ybWFsaXplUlRMOiBib29sZWFuVHJ1ZVRlbXBsYXRlLFxuICAgICAgICAgIC8vdHJ1ZSB8fCBmYWxzZVxuICAgICAgICAgIHBhZGRpbmdBYnNvbHV0ZTogYm9vbGVhbkZhbHNlVGVtcGxhdGUsXG4gICAgICAgICAgLy90cnVlIHx8IGZhbHNlXG4gICAgICAgICAgYXV0b1VwZGF0ZTogW251bGwsIGJvb2xlYW5OdWxsQWxsb3dlZFZhbHVlc10sXG4gICAgICAgICAgLy90cnVlIHx8IGZhbHNlIHx8IG51bGxcbiAgICAgICAgICBhdXRvVXBkYXRlSW50ZXJ2YWw6IFszMywgbnVtYmVyQWxsb3dlZFZhbHVlc10sXG4gICAgICAgICAgLy9udW1iZXJcbiAgICAgICAgICB1cGRhdGVPbkxvYWQ6IHVwZGF0ZU9uTG9hZFRlbXBsYXRlLFxuICAgICAgICAgIC8vc3RyaW5nIHx8IGFycmF5IHx8IG51bGxcbiAgICAgICAgICBuYXRpdmVTY3JvbGxiYXJzT3ZlcmxhaWQ6IHtcbiAgICAgICAgICAgIHNob3dOYXRpdmVTY3JvbGxiYXJzOiBib29sZWFuRmFsc2VUZW1wbGF0ZSxcbiAgICAgICAgICAgIC8vdHJ1ZSB8fCBmYWxzZVxuICAgICAgICAgICAgaW5pdGlhbGl6ZTogYm9vbGVhblRydWVUZW1wbGF0ZSAvL3RydWUgfHwgZmFsc2VcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgb3ZlcmZsb3dCZWhhdmlvcjoge1xuICAgICAgICAgICAgeDogWydzY3JvbGwnLCBvdmVyZmxvd0JlaGF2aW9yQWxsb3dlZFZhbHVlc10sXG4gICAgICAgICAgICAvL3Zpc2libGUtaGlkZGVuICB8fCB2aXNpYmxlLXNjcm9sbCB8fCBoaWRkZW4gfHwgc2Nyb2xsIHx8IHYtaCB8fCB2LXMgfHwgaCB8fCBzXG4gICAgICAgICAgICB5OiBbJ3Njcm9sbCcsIG92ZXJmbG93QmVoYXZpb3JBbGxvd2VkVmFsdWVzXSAvL3Zpc2libGUtaGlkZGVuICB8fCB2aXNpYmxlLXNjcm9sbCB8fCBoaWRkZW4gfHwgc2Nyb2xsIHx8IHYtaCB8fCB2LXMgfHwgaCB8fCBzXG5cbiAgICAgICAgICB9LFxuICAgICAgICAgIHNjcm9sbGJhcnM6IHtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IFsnYXV0bycsIHNjcm9sbGJhcnNWaXNpYmlsaXR5QWxsb3dlZFZhbHVlc10sXG4gICAgICAgICAgICAvL3Zpc2libGUgfHwgaGlkZGVuIHx8IGF1dG8gfHwgdiB8fCBoIHx8IGFcbiAgICAgICAgICAgIGF1dG9IaWRlOiBbJ25ldmVyJywgc2Nyb2xsYmFyc0F1dG9IaWRlQWxsb3dlZFZhbHVlc10sXG4gICAgICAgICAgICAvL25ldmVyIHx8IHNjcm9sbCB8fCBsZWF2ZSB8fCBtb3ZlIHx8IG4gfHwgcyB8fCBsIHx8IG1cbiAgICAgICAgICAgIGF1dG9IaWRlRGVsYXk6IFs4MDAsIG51bWJlckFsbG93ZWRWYWx1ZXNdLFxuICAgICAgICAgICAgLy9udW1iZXJcbiAgICAgICAgICAgIGRyYWdTY3JvbGxpbmc6IGJvb2xlYW5UcnVlVGVtcGxhdGUsXG4gICAgICAgICAgICAvL3RydWUgfHwgZmFsc2VcbiAgICAgICAgICAgIGNsaWNrU2Nyb2xsaW5nOiBib29sZWFuRmFsc2VUZW1wbGF0ZSxcbiAgICAgICAgICAgIC8vdHJ1ZSB8fCBmYWxzZVxuICAgICAgICAgICAgdG91Y2hTdXBwb3J0OiBib29sZWFuVHJ1ZVRlbXBsYXRlLFxuICAgICAgICAgICAgLy90cnVlIHx8IGZhbHNlXG4gICAgICAgICAgICBzbmFwSGFuZGxlOiBib29sZWFuRmFsc2VUZW1wbGF0ZSAvL3RydWUgfHwgZmFsc2VcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dGFyZWE6IHtcbiAgICAgICAgICAgIGR5bldpZHRoOiBib29sZWFuRmFsc2VUZW1wbGF0ZSxcbiAgICAgICAgICAgIC8vdHJ1ZSB8fCBmYWxzZVxuICAgICAgICAgICAgZHluSGVpZ2h0OiBib29sZWFuRmFsc2VUZW1wbGF0ZSxcbiAgICAgICAgICAgIC8vdHJ1ZSB8fCBmYWxzZVxuICAgICAgICAgICAgaW5oZXJpdGVkQXR0cnM6IGluaGVyaXRlZEF0dHJzVGVtcGxhdGUgLy9zdHJpbmcgfHwgYXJyYXkgfHwgbnVsbFxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgIG9uSW5pdGlhbGl6ZWQ6IGNhbGxiYWNrVGVtcGxhdGUsXG4gICAgICAgICAgICAvL251bGwgfHwgZnVuY3Rpb25cbiAgICAgICAgICAgIG9uSW5pdGlhbGl6YXRpb25XaXRoZHJhd246IGNhbGxiYWNrVGVtcGxhdGUsXG4gICAgICAgICAgICAvL251bGwgfHwgZnVuY3Rpb25cbiAgICAgICAgICAgIG9uRGVzdHJveWVkOiBjYWxsYmFja1RlbXBsYXRlLFxuICAgICAgICAgICAgLy9udWxsIHx8IGZ1bmN0aW9uXG4gICAgICAgICAgICBvblNjcm9sbFN0YXJ0OiBjYWxsYmFja1RlbXBsYXRlLFxuICAgICAgICAgICAgLy9udWxsIHx8IGZ1bmN0aW9uXG4gICAgICAgICAgICBvblNjcm9sbDogY2FsbGJhY2tUZW1wbGF0ZSxcbiAgICAgICAgICAgIC8vbnVsbCB8fCBmdW5jdGlvblxuICAgICAgICAgICAgb25TY3JvbGxTdG9wOiBjYWxsYmFja1RlbXBsYXRlLFxuICAgICAgICAgICAgLy9udWxsIHx8IGZ1bmN0aW9uXG4gICAgICAgICAgICBvbk92ZXJmbG93Q2hhbmdlZDogY2FsbGJhY2tUZW1wbGF0ZSxcbiAgICAgICAgICAgIC8vbnVsbCB8fCBmdW5jdGlvblxuICAgICAgICAgICAgb25PdmVyZmxvd0Ftb3VudENoYW5nZWQ6IGNhbGxiYWNrVGVtcGxhdGUsXG4gICAgICAgICAgICAvL251bGwgfHwgZnVuY3Rpb25cbiAgICAgICAgICAgIG9uRGlyZWN0aW9uQ2hhbmdlZDogY2FsbGJhY2tUZW1wbGF0ZSxcbiAgICAgICAgICAgIC8vbnVsbCB8fCBmdW5jdGlvblxuICAgICAgICAgICAgb25Db250ZW50U2l6ZUNoYW5nZWQ6IGNhbGxiYWNrVGVtcGxhdGUsXG4gICAgICAgICAgICAvL251bGwgfHwgZnVuY3Rpb25cbiAgICAgICAgICAgIG9uSG9zdFNpemVDaGFuZ2VkOiBjYWxsYmFja1RlbXBsYXRlLFxuICAgICAgICAgICAgLy9udWxsIHx8IGZ1bmN0aW9uXG4gICAgICAgICAgICBvblVwZGF0ZWQ6IGNhbGxiYWNrVGVtcGxhdGUgLy9udWxsIHx8IGZ1bmN0aW9uXG5cbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGNvbnZlcnQgPSBmdW5jdGlvbiBjb252ZXJ0KHRlbXBsYXRlKSB7XG4gICAgICAgICAgdmFyIHJlY3Vyc2l2ZSA9IGZ1bmN0aW9uIHJlY3Vyc2l2ZShvYmopIHtcbiAgICAgICAgICAgIHZhciBrZXk7XG4gICAgICAgICAgICB2YXIgdmFsO1xuICAgICAgICAgICAgdmFyIHZhbFR5cGU7XG5cbiAgICAgICAgICAgIGZvciAoa2V5IGluIG9iaikge1xuICAgICAgICAgICAgICBpZiAoIW9ialtMRVhJQ09OLmhPUF0oa2V5KSkgY29udGludWU7XG4gICAgICAgICAgICAgIHZhbCA9IG9ialtrZXldO1xuICAgICAgICAgICAgICB2YWxUeXBlID0gdHlwZSh2YWwpO1xuICAgICAgICAgICAgICBpZiAodmFsVHlwZSA9PSBUWVBFUy5hKSBvYmpba2V5XSA9IHZhbFt0ZW1wbGF0ZSA/IDEgOiAwXTtlbHNlIGlmICh2YWxUeXBlID09IFRZUEVTLm8pIG9ialtrZXldID0gcmVjdXJzaXZlKHZhbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHJldHVybiByZWN1cnNpdmUoRlJBTUVXT1JLLmV4dGVuZCh0cnVlLCB7fSwgb3B0aW9uc0RlZmF1bHRzQW5kVGVtcGxhdGUpKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIF9kZWZhdWx0czogY29udmVydCgpLFxuICAgICAgICAgIF90ZW1wbGF0ZTogY29udmVydCh0cnVlKSxcblxuICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICogVmFsaWRhdGVzIHRoZSBwYXNzZWQgb2JqZWN0IGJ5IHRoZSBwYXNzZWQgdGVtcGxhdGUuXHJcbiAgICAgICAgICAgKiBAcGFyYW0gb2JqIFRoZSBvYmplY3Qgd2hpY2ggc2hhbGwgYmUgdmFsaWRhdGVkLlxyXG4gICAgICAgICAgICogQHBhcmFtIHRlbXBsYXRlIFRoZSB0ZW1wbGF0ZSB3aGljaCBkZWZpbmVzIHRoZSBhbGxvd2VkIHZhbHVlcyBhbmQgdHlwZXMuXHJcbiAgICAgICAgICAgKiBAcGFyYW0gd3JpdGVFcnJvcnMgVHJ1ZSBpZiBlcnJvcnMgc2hhbGwgYmUgbG9nZ2VkIHRvIHRoZSBjb25zb2xlLlxyXG4gICAgICAgICAgICogQHBhcmFtIGRpZmZPYmogSWYgYSBvYmplY3QgaXMgcGFzc2VkIHRoZW4gb25seSB2YWxpZCBkaWZmZXJlbmNlcyB0byB0aGlzIG9iamVjdCB3aWxsIGJlIHJldHVybmVkLlxyXG4gICAgICAgICAgICogQHJldHVybnMge3t9fSBBIG9iamVjdCB3aGljaCBjb250YWlucyB0d28gb2JqZWN0cyBjYWxsZWQgXCJkZWZhdWx0XCIgYW5kIFwicHJlcGFyZWRcIiB3aGljaCBjb250YWlucyBvbmx5IHRoZSB2YWxpZCBwcm9wZXJ0aWVzIG9mIHRoZSBwYXNzZWQgb3JpZ2luYWwgb2JqZWN0IGFuZCBkaXNjYXJkcyBub3QgZGlmZmVyZW50IHZhbHVlcyBjb21wYXJlZCB0byB0aGUgcGFzc2VkIGRpZmZPYmouXHJcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBfdmFsaWRhdGU6IGZ1bmN0aW9uIF92YWxpZGF0ZShvYmosIHRlbXBsYXRlLCB3cml0ZUVycm9ycywgZGlmZk9iaikge1xuICAgICAgICAgICAgdmFyIHZhbGlkYXRlZE9wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgIHZhciB2YWxpZGF0ZWRPcHRpb25zUHJlcGFyZWQgPSB7fTtcbiAgICAgICAgICAgIHZhciBvYmplY3RDb3B5ID0gRlJBTUVXT1JLLmV4dGVuZCh0cnVlLCB7fSwgb2JqKTtcbiAgICAgICAgICAgIHZhciBpbkFycmF5ID0gRlJBTUVXT1JLLmluQXJyYXk7XG4gICAgICAgICAgICB2YXIgaXNFbXB0eU9iaiA9IEZSQU1FV09SSy5pc0VtcHR5T2JqZWN0O1xuXG4gICAgICAgICAgICB2YXIgY2hlY2tPYmplY3RQcm9wcyA9IGZ1bmN0aW9uIGNoZWNrT2JqZWN0UHJvcHMoZGF0YSwgdGVtcGxhdGUsIGRpZmZEYXRhLCB2YWxpZGF0ZWRPcHRpb25zLCB2YWxpZGF0ZWRPcHRpb25zUHJlcGFyZWQsIHByZXZQcm9wTmFtZSkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIHRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlbXBsYXRlW0xFWElDT04uaE9QXShwcm9wKSAmJiBkYXRhW0xFWElDT04uaE9QXShwcm9wKSkge1xuICAgICAgICAgICAgICAgICAgdmFyIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIHZhciBpc0RpZmYgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZVZhbHVlID0gdGVtcGxhdGVbcHJvcF07XG4gICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGVWYWx1ZVR5cGUgPSB0eXBlKHRlbXBsYXRlVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlSXNDb21wbGV4ID0gdGVtcGxhdGVWYWx1ZVR5cGUgPT0gVFlQRVMubztcbiAgICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZVR5cGVzID0gIUNPTVBBVElCSUxJVFkuaXNBKHRlbXBsYXRlVmFsdWUpID8gW3RlbXBsYXRlVmFsdWVdIDogdGVtcGxhdGVWYWx1ZTtcbiAgICAgICAgICAgICAgICAgIHZhciBkYXRhRGlmZlZhbHVlID0gZGlmZkRhdGFbcHJvcF07XG4gICAgICAgICAgICAgICAgICB2YXIgZGF0YVZhbHVlID0gZGF0YVtwcm9wXTtcbiAgICAgICAgICAgICAgICAgIHZhciBkYXRhVmFsdWVUeXBlID0gdHlwZShkYXRhVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgdmFyIHByb3BQcmVmaXggPSBwcmV2UHJvcE5hbWUgPyBwcmV2UHJvcE5hbWUgKyAnLicgOiAnJztcbiAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IFwiVGhlIG9wdGlvbiBcXFwiXCIgKyBwcm9wUHJlZml4ICsgcHJvcCArIFwiXFxcIiB3YXNuJ3Qgc2V0LCBiZWNhdXNlXCI7XG4gICAgICAgICAgICAgICAgICB2YXIgZXJyb3JQb3NzaWJsZVR5cGVzID0gW107XG4gICAgICAgICAgICAgICAgICB2YXIgZXJyb3JSZXN0cmljdGVkU3RyaW5ncyA9IFtdO1xuICAgICAgICAgICAgICAgICAgdmFyIHJlc3RyaWN0ZWRTdHJpbmdWYWx1ZXNTcGxpdDtcbiAgICAgICAgICAgICAgICAgIHZhciByZXN0cmljdGVkU3RyaW5nVmFsdWVzUG9zc2liaWxpdGllc1NwbGl0O1xuICAgICAgICAgICAgICAgICAgdmFyIGlzUmVzdHJpY3RlZFZhbHVlO1xuICAgICAgICAgICAgICAgICAgdmFyIG1haW5Qb3NzaWJpbGl0eTtcbiAgICAgICAgICAgICAgICAgIHZhciBjdXJyVHlwZTtcbiAgICAgICAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgICAgICAgdmFyIHY7XG4gICAgICAgICAgICAgICAgICB2YXIgajtcbiAgICAgICAgICAgICAgICAgIGRhdGFEaWZmVmFsdWUgPSBkYXRhRGlmZlZhbHVlID09PSB1bmRlZmluZWQkMSA/IHt9IDogZGF0YURpZmZWYWx1ZTsgLy9pZiB0aGUgdGVtcGxhdGUgaGFzIGEgb2JqZWN0IGFzIHZhbHVlLCBpdCBtZWFucyB0aGF0IHRoZSBvcHRpb25zIGFyZSBjb21wbGV4ICh2ZXJzY2hhY2h0ZWx0KVxuXG4gICAgICAgICAgICAgICAgICBpZiAodGVtcGxhdGVJc0NvbXBsZXggJiYgZGF0YVZhbHVlVHlwZSA9PSBUWVBFUy5vKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZE9wdGlvbnNbcHJvcF0gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkT3B0aW9uc1ByZXBhcmVkW3Byb3BdID0ge307XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrT2JqZWN0UHJvcHMoZGF0YVZhbHVlLCB0ZW1wbGF0ZVZhbHVlLCBkYXRhRGlmZlZhbHVlLCB2YWxpZGF0ZWRPcHRpb25zW3Byb3BdLCB2YWxpZGF0ZWRPcHRpb25zUHJlcGFyZWRbcHJvcF0sIHByb3BQcmVmaXggKyBwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgRlJBTUVXT1JLLmVhY2goW2RhdGEsIHZhbGlkYXRlZE9wdGlvbnMsIHZhbGlkYXRlZE9wdGlvbnNQcmVwYXJlZF0sIGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNFbXB0eU9iaih2YWx1ZVtwcm9wXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWx1ZVtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGVtcGxhdGVJc0NvbXBsZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRlbXBsYXRlVHlwZXNbTEVYSUNPTi5sXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY3VyclR5cGUgPSB0ZW1wbGF0ZVR5cGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVmFsdWVUeXBlID0gdHlwZShjdXJyVHlwZSk7IC8vaWYgY3VycnR5cGUgaXMgc3RyaW5nIGFuZCBzdGFydHMgd2l0aCByZXN0cmljdGVkU3RyaW5nUHJlZml4IGFuZCBlbmQgd2l0aCByZXN0cmljdGVkU3RyaW5nU3VmZml4XG5cbiAgICAgICAgICAgICAgICAgICAgICBpc1Jlc3RyaWN0ZWRWYWx1ZSA9IHRlbXBsYXRlVmFsdWVUeXBlID09IFRZUEVTLnMgJiYgaW5BcnJheShjdXJyVHlwZSwgcG9zc2libGVUZW1wbGF0ZVR5cGVzKSA9PT0gLTE7XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNSZXN0cmljdGVkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yUG9zc2libGVUeXBlcy5wdXNoKFRZUEVTLnMpOyAvL3NwbGl0IGl0IGludG8gYSBhcnJheSB3aGljaCBjb250YWlucyBhbGwgcG9zc2libGUgdmFsdWVzIGZvciBleGFtcGxlOiBbXCJ5Onllc1wiLCBcIm46bm9cIiwgXCJtOm1heWJlXCJdXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RyaWN0ZWRTdHJpbmdWYWx1ZXNTcGxpdCA9IGN1cnJUeXBlLnNwbGl0KHJlc3RyaWN0ZWRTdHJpbmdzU3BsaXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JSZXN0cmljdGVkU3RyaW5ncyA9IGVycm9yUmVzdHJpY3RlZFN0cmluZ3MuY29uY2F0KHJlc3RyaWN0ZWRTdHJpbmdWYWx1ZXNTcGxpdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodiA9IDA7IHYgPCByZXN0cmljdGVkU3RyaW5nVmFsdWVzU3BsaXRbTEVYSUNPTi5sXTsgdisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vc3BsaXQgdGhlIHBvc3NpYmxlIHZhbHVlcyBpbnRvIHRoZWlyIHBvc3NpYmlsaXRlaXMgZm9yIGV4YW1wbGU6IFtcInlcIiwgXCJ5ZXNcIl0gLT4gdGhlIGZpcnN0IGlzIGFsd2F5cyB0aGUgbWFpblBvc3NpYmlsaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RyaWN0ZWRTdHJpbmdWYWx1ZXNQb3NzaWJpbGl0aWVzU3BsaXQgPSByZXN0cmljdGVkU3RyaW5nVmFsdWVzU3BsaXRbdl0uc3BsaXQocmVzdHJpY3RlZFN0cmluZ3NQb3NzaWJpbGl0aWVzU3BsaXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluUG9zc2liaWxpdHkgPSByZXN0cmljdGVkU3RyaW5nVmFsdWVzUG9zc2liaWxpdGllc1NwbGl0WzBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCByZXN0cmljdGVkU3RyaW5nVmFsdWVzUG9zc2liaWxpdGllc1NwbGl0W0xFWElDT04ubF07IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgYW55IHBvc3NpYmlsaXR5IG1hdGNoZXMgd2l0aCB0aGUgZGF0YVZhbHVlLCBpdHMgdmFsaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVZhbHVlID09PSByZXN0cmljdGVkU3RyaW5nVmFsdWVzUG9zc2liaWxpdGllc1NwbGl0W2pdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JQb3NzaWJsZVR5cGVzLnB1c2goY3VyclR5cGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVZhbHVlVHlwZSA9PT0gY3VyclR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaXNEaWZmID0gZGF0YVZhbHVlICE9PSBkYXRhRGlmZlZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0RpZmYpIHZhbGlkYXRlZE9wdGlvbnNbcHJvcF0gPSBkYXRhVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGlzUmVzdHJpY3RlZFZhbHVlID8gaW5BcnJheShkYXRhRGlmZlZhbHVlLCByZXN0cmljdGVkU3RyaW5nVmFsdWVzUG9zc2liaWxpdGllc1NwbGl0KSA8IDAgOiBpc0RpZmYpIHZhbGlkYXRlZE9wdGlvbnNQcmVwYXJlZFtwcm9wXSA9IGlzUmVzdHJpY3RlZFZhbHVlID8gbWFpblBvc3NpYmlsaXR5IDogZGF0YVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHdyaXRlRXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGVycm9yICsgXCIgaXQgZG9lc24ndCBhY2NlcHQgdGhlIHR5cGUgWyBcIiArIGRhdGFWYWx1ZVR5cGUudG9VcHBlckNhc2UoKSArIFwiIF0gd2l0aCB0aGUgdmFsdWUgb2YgXFxcIlwiICsgZGF0YVZhbHVlICsgXCJcXFwiLlxcclxcblwiICsgXCJBY2NlcHRlZCB0eXBlcyBhcmU6IFsgXCIgKyBlcnJvclBvc3NpYmxlVHlwZXMuam9pbignLCAnKS50b1VwcGVyQ2FzZSgpICsgXCIgXS5cIiArIChlcnJvclJlc3RyaWN0ZWRTdHJpbmdzW2xlbmd0aF0gPiAwID8gXCJcXHJcXG5WYWxpZCBzdHJpbmdzIGFyZTogWyBcIiArIGVycm9yUmVzdHJpY3RlZFN0cmluZ3Muam9pbignLCAnKS5zcGxpdChyZXN0cmljdGVkU3RyaW5nc1Bvc3NpYmlsaXRpZXNTcGxpdCkuam9pbignLCAnKSArIFwiIF0uXCIgOiAnJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRhdGFbcHJvcF07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjaGVja09iamVjdFByb3BzKG9iamVjdENvcHksIHRlbXBsYXRlLCBkaWZmT2JqIHx8IHt9LCB2YWxpZGF0ZWRPcHRpb25zLCB2YWxpZGF0ZWRPcHRpb25zUHJlcGFyZWQpOyAvL2FkZCB2YWx1ZXMgd2hpY2ggYXJlbid0IHNwZWNpZmllZCBpbiB0aGUgdGVtcGxhdGUgdG8gdGhlIGZpbmlzaGVkIHZhbGlkYXRlZCBvYmplY3QgdG8gcHJldmVudCB0aGVtIGZyb20gYmVpbmcgZGlzY2FyZGVkXG5cbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIGlmKGtlZXBGb3JlaWduUHJvcHMpIHtcclxuICAgICAgICAgICAgICAgIEZSQU1FV09SSy5leHRlbmQodHJ1ZSwgdmFsaWRhdGVkT3B0aW9ucywgb2JqZWN0Q29weSk7XHJcbiAgICAgICAgICAgICAgICBGUkFNRVdPUksuZXh0ZW5kKHRydWUsIHZhbGlkYXRlZE9wdGlvbnNQcmVwYXJlZCwgb2JqZWN0Q29weSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgaWYgKCFpc0VtcHR5T2JqKG9iamVjdENvcHkpICYmIHdyaXRlRXJyb3JzKSBjb25zb2xlLndhcm4oJ1RoZSBmb2xsb3dpbmcgb3B0aW9ucyBhcmUgZGlzY2FyZGVkIGR1ZSB0byBpbnZhbGlkaXR5OlxcclxcbicgKyB3aW5kb3cuSlNPTi5zdHJpbmdpZnkob2JqZWN0Q29weSwgbnVsbCwgMikpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgX2RlZmF1bHQ6IHZhbGlkYXRlZE9wdGlvbnMsXG4gICAgICAgICAgICAgIF9wcmVwYXJlZDogdmFsaWRhdGVkT3B0aW9uc1ByZXBhcmVkXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0oKTtcbiAgICAgIC8qKlxyXG4gICAgICAgKiBJbml0aWFsaXplcyB0aGUgb2JqZWN0IHdoaWNoIGNvbnRhaW5zIGdsb2JhbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcGx1Z2luIGFuZCBlYWNoIGluc3RhbmNlIG9mIGl0LlxyXG4gICAgICAgKi9cblxuXG4gICAgICBmdW5jdGlvbiBpbml0T3ZlcmxheVNjcm9sbGJhcnNTdGF0aWNzKCkge1xuICAgICAgICBpZiAoIV9wbHVnaW5zR2xvYmFscykgX3BsdWdpbnNHbG9iYWxzID0gbmV3IE92ZXJsYXlTY3JvbGxiYXJzR2xvYmFscyhfcGx1Z2luc09wdGlvbnMuX2RlZmF1bHRzKTtcbiAgICAgICAgaWYgKCFfcGx1Z2luc0F1dG9VcGRhdGVMb29wKSBfcGx1Z2luc0F1dG9VcGRhdGVMb29wID0gbmV3IE92ZXJsYXlTY3JvbGxiYXJzQXV0b1VwZGF0ZUxvb3AoX3BsdWdpbnNHbG9iYWxzKTtcbiAgICAgIH1cbiAgICAgIC8qKlxyXG4gICAgICAgKiBUaGUgZ2xvYmFsIG9iamVjdCBmb3IgdGhlIE92ZXJsYXlTY3JvbGxiYXJzIG9iamVjdHMuIEl0IGNvbnRhaW5zIHJlc291cmNlcyB3aGljaCBldmVyeSBPdmVybGF5U2Nyb2xsYmFycyBvYmplY3QgbmVlZHMuIFRoaXMgb2JqZWN0IGlzIGluaXRpYWxpemVkIG9ubHkgb25jZTogaWYgdGhlIGZpcnN0IE92ZXJsYXlTY3JvbGxiYXJzIG9iamVjdCBnZXRzIGluaXRpYWxpemVkLlxyXG4gICAgICAgKiBAcGFyYW0gZGVmYXVsdE9wdGlvbnNcclxuICAgICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgICAqL1xuXG5cbiAgICAgIGZ1bmN0aW9uIE92ZXJsYXlTY3JvbGxiYXJzR2xvYmFscyhkZWZhdWx0T3B0aW9ucykge1xuICAgICAgICB2YXIgX2Jhc2UgPSB0aGlzO1xuXG4gICAgICAgIHZhciBzdHJPdmVyZmxvdyA9ICdvdmVyZmxvdyc7XG4gICAgICAgIHZhciBzdHJIaWRkZW4gPSAnaGlkZGVuJztcbiAgICAgICAgdmFyIHN0clNjcm9sbCA9ICdzY3JvbGwnO1xuICAgICAgICB2YXIgYm9keUVsZW1lbnQgPSBGUkFNRVdPUksoJ2JvZHknKTtcbiAgICAgICAgdmFyIHNjcm9sbGJhckR1bW15RWxlbWVudCA9IEZSQU1FV09SSygnPGRpdiBpZD1cIm9zLWR1bW15LXNjcm9sbGJhci1zaXplXCI+PGRpdj48L2Rpdj48L2Rpdj4nKTtcbiAgICAgICAgdmFyIHNjcm9sbGJhckR1bW15RWxlbWVudDAgPSBzY3JvbGxiYXJEdW1teUVsZW1lbnRbMF07XG4gICAgICAgIHZhciBkdW1teUNvbnRhaW5lckNoaWxkID0gRlJBTUVXT1JLKHNjcm9sbGJhckR1bW15RWxlbWVudC5jaGlsZHJlbignZGl2JykuZXEoMCkpO1xuICAgICAgICBib2R5RWxlbWVudC5hcHBlbmQoc2Nyb2xsYmFyRHVtbXlFbGVtZW50KTtcbiAgICAgICAgc2Nyb2xsYmFyRHVtbXlFbGVtZW50LmhpZGUoKS5zaG93KCk7IC8vZml4IElFOCBidWcgKGluY29ycmVjdCBtZWFzdXJpbmcpXG5cbiAgICAgICAgdmFyIG5hdGl2ZVNjcm9sbGJhclNpemUgPSBjYWxjTmF0aXZlU2Nyb2xsYmFyU2l6ZShzY3JvbGxiYXJEdW1teUVsZW1lbnQwKTtcbiAgICAgICAgdmFyIG5hdGl2ZVNjcm9sbGJhcklzT3ZlcmxhaWQgPSB7XG4gICAgICAgICAgeDogbmF0aXZlU2Nyb2xsYmFyU2l6ZS54ID09PSAwLFxuICAgICAgICAgIHk6IG5hdGl2ZVNjcm9sbGJhclNpemUueSA9PT0gMFxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBtc2llID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICAgIHZhciBzdHJJbmRleE9mID0gJ2luZGV4T2YnO1xuICAgICAgICAgIHZhciBzdHJTdWJTdHJpbmcgPSAnc3Vic3RyaW5nJztcbiAgICAgICAgICB2YXIgbXNpZSA9IHVhW3N0ckluZGV4T2ZdKCdNU0lFICcpO1xuICAgICAgICAgIHZhciB0cmlkZW50ID0gdWFbc3RySW5kZXhPZl0oJ1RyaWRlbnQvJyk7XG4gICAgICAgICAgdmFyIGVkZ2UgPSB1YVtzdHJJbmRleE9mXSgnRWRnZS8nKTtcbiAgICAgICAgICB2YXIgcnYgPSB1YVtzdHJJbmRleE9mXSgncnY6Jyk7XG4gICAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgICB2YXIgcGFyc2VJbnRGdW5jID0gcGFyc2VJbnQ7IC8vIElFIDEwIG9yIG9sZGVyID0+IHJldHVybiB2ZXJzaW9uIG51bWJlclxuXG4gICAgICAgICAgaWYgKG1zaWUgPiAwKSByZXN1bHQgPSBwYXJzZUludEZ1bmModWFbc3RyU3ViU3RyaW5nXShtc2llICsgNSwgdWFbc3RySW5kZXhPZl0oJy4nLCBtc2llKSksIDEwKTsgLy8gSUUgMTEgPT4gcmV0dXJuIHZlcnNpb24gbnVtYmVyXG4gICAgICAgICAgZWxzZSBpZiAodHJpZGVudCA+IDApIHJlc3VsdCA9IHBhcnNlSW50RnVuYyh1YVtzdHJTdWJTdHJpbmddKHJ2ICsgMywgdWFbc3RySW5kZXhPZl0oJy4nLCBydikpLCAxMCk7IC8vIEVkZ2UgKElFIDEyKykgPT4gcmV0dXJuIHZlcnNpb24gbnVtYmVyXG4gICAgICAgICAgZWxzZSBpZiAoZWRnZSA+IDApIHJlc3VsdCA9IHBhcnNlSW50RnVuYyh1YVtzdHJTdWJTdHJpbmddKGVkZ2UgKyA1LCB1YVtzdHJJbmRleE9mXSgnLicsIGVkZ2UpKSwgMTApOyAvLyBvdGhlciBicm93c2VyXG5cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KCk7XG5cbiAgICAgICAgRlJBTUVXT1JLLmV4dGVuZChfYmFzZSwge1xuICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiBkZWZhdWx0T3B0aW9ucyxcbiAgICAgICAgICBtc2llOiBtc2llLFxuICAgICAgICAgIGF1dG9VcGRhdGVMb29wOiBmYWxzZSxcbiAgICAgICAgICBhdXRvVXBkYXRlUmVjb21tZW5kZWQ6ICFDT01QQVRJQklMSVRZLm1PKCksXG4gICAgICAgICAgbmF0aXZlU2Nyb2xsYmFyU2l6ZTogbmF0aXZlU2Nyb2xsYmFyU2l6ZSxcbiAgICAgICAgICBuYXRpdmVTY3JvbGxiYXJJc092ZXJsYWlkOiBuYXRpdmVTY3JvbGxiYXJJc092ZXJsYWlkLFxuICAgICAgICAgIG5hdGl2ZVNjcm9sbGJhclN0eWxpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNjcm9sbGJhckR1bW15RWxlbWVudC5hZGRDbGFzcygnb3Mtdmlld3BvcnQtbmF0aXZlLXNjcm9sbGJhcnMtaW52aXNpYmxlJyk7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHNjcm9sbGJhckR1bW15RWxlbWVudC5jc3MoJ3Njcm9sbGJhci13aWR0aCcpID09PSAnbm9uZScgJiYgKG1zaWUgPiA5IHx8ICFtc2llKSB8fCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzY3JvbGxiYXJEdW1teUVsZW1lbnQwLCAnOjotd2Via2l0LXNjcm9sbGJhcicpLmdldFByb3BlcnR5VmFsdWUoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHt9IC8vZml4IG9wZXJhIGJ1Zzogc2Nyb2xsYmFyIHN0eWxlcyB3aWxsIG9ubHkgYXBwZWFyIGlmIG92ZXJmbG93IHZhbHVlIGlzIHNjcm9sbCBvciBhdXRvIGR1cmluZyB0aGUgYWN0aXZhdGlvbiBvZiB0aGUgc3R5bGUuXG4gICAgICAgICAgICAvL2FuZCBzZXQgb3ZlcmZsb3cgdG8gc2Nyb2xsXG4gICAgICAgICAgICAvL3Njcm9sbGJhckR1bW15RWxlbWVudC5jc3Moc3RyT3ZlcmZsb3csIHN0ckhpZGRlbikuaGlkZSgpLmNzcyhzdHJPdmVyZmxvdywgc3RyU2Nyb2xsKS5zaG93KCk7XG4gICAgICAgICAgICAvL3JldHVybiAoc2Nyb2xsYmFyRHVtbXlFbGVtZW50MFtMRVhJQ09OLm9IXSAtIHNjcm9sbGJhckR1bW15RWxlbWVudDBbTEVYSUNPTi5jSF0pID09PSAwICYmIChzY3JvbGxiYXJEdW1teUVsZW1lbnQwW0xFWElDT04ub1ddIC0gc2Nyb2xsYmFyRHVtbXlFbGVtZW50MFtMRVhJQ09OLmNXXSkgPT09IDA7XG5cblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9KCksXG4gICAgICAgICAgb3ZlcmxheVNjcm9sbGJhckR1bW15U2l6ZToge1xuICAgICAgICAgICAgeDogMzAsXG4gICAgICAgICAgICB5OiAzMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY3NzQ2FsYzogVkVORE9SUy5fY3NzUHJvcGVydHlWYWx1ZSgnd2lkdGgnLCAnY2FsYycsICcoMXB4KScpIHx8IG51bGwsXG4gICAgICAgICAgcmVzdHJpY3RlZE1lYXN1cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9odHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNDM5MzA1XG4gICAgICAgICAgICAvL3NpbmNlIDEuMTEuMCBhbHdheXMgZmFsc2UgLT4gZml4ZWQgdmlhIENTUyAoaG9wZWZ1bGx5KVxuICAgICAgICAgICAgc2Nyb2xsYmFyRHVtbXlFbGVtZW50LmNzcyhzdHJPdmVyZmxvdywgc3RySGlkZGVuKTtcbiAgICAgICAgICAgIHZhciBzY3JvbGxTaXplID0ge1xuICAgICAgICAgICAgICB3OiBzY3JvbGxiYXJEdW1teUVsZW1lbnQwW0xFWElDT04uc1ddLFxuICAgICAgICAgICAgICBoOiBzY3JvbGxiYXJEdW1teUVsZW1lbnQwW0xFWElDT04uc0hdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2Nyb2xsYmFyRHVtbXlFbGVtZW50LmNzcyhzdHJPdmVyZmxvdywgJ3Zpc2libGUnKTtcbiAgICAgICAgICAgIHZhciBzY3JvbGxTaXplMiA9IHtcbiAgICAgICAgICAgICAgdzogc2Nyb2xsYmFyRHVtbXlFbGVtZW50MFtMRVhJQ09OLnNXXSxcbiAgICAgICAgICAgICAgaDogc2Nyb2xsYmFyRHVtbXlFbGVtZW50MFtMRVhJQ09OLnNIXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBzY3JvbGxTaXplLncgLSBzY3JvbGxTaXplMi53ICE9PSAwIHx8IHNjcm9sbFNpemUuaCAtIHNjcm9sbFNpemUyLmggIT09IDA7XG4gICAgICAgICAgfSgpLFxuICAgICAgICAgIHJ0bFNjcm9sbEJlaGF2aW9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzY3JvbGxiYXJEdW1teUVsZW1lbnQuY3NzKHtcbiAgICAgICAgICAgICAgJ292ZXJmbG93LXknOiBzdHJIaWRkZW4sXG4gICAgICAgICAgICAgICdvdmVyZmxvdy14Jzogc3RyU2Nyb2xsLFxuICAgICAgICAgICAgICAnZGlyZWN0aW9uJzogJ3J0bCdcbiAgICAgICAgICAgIH0pLnNjcm9sbExlZnQoMCk7XG4gICAgICAgICAgICB2YXIgZHVtbXlDb250YWluZXJPZmZzZXQgPSBzY3JvbGxiYXJEdW1teUVsZW1lbnQub2Zmc2V0KCk7XG4gICAgICAgICAgICB2YXIgZHVtbXlDb250YWluZXJDaGlsZE9mZnNldCA9IGR1bW15Q29udGFpbmVyQ2hpbGQub2Zmc2V0KCk7IC8vaHR0cHM6Ly9naXRodWIuY29tL0tpbmdTb3JhL092ZXJsYXlTY3JvbGxiYXJzL2lzc3Vlcy8xODdcblxuICAgICAgICAgICAgc2Nyb2xsYmFyRHVtbXlFbGVtZW50LnNjcm9sbExlZnQoLTk5OSk7XG4gICAgICAgICAgICB2YXIgZHVtbXlDb250YWluZXJDaGlsZE9mZnNldEFmdGVyU2Nyb2xsID0gZHVtbXlDb250YWluZXJDaGlsZC5vZmZzZXQoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC8vb3JpZ2luIGRpcmVjdGlvbiA9IGRldGVybWluZXMgaWYgdGhlIHplcm8gc2Nyb2xsIHBvc2l0aW9uIGlzIG9uIHRoZSBsZWZ0IG9yIHJpZ2h0IHNpZGVcbiAgICAgICAgICAgICAgLy8naScgbWVhbnMgJ2ludmVydCcgKGkgPT09IHRydWUgbWVhbnMgdGhhdCB0aGUgYXhpcyBtdXN0IGJlIGludmVydGVkIHRvIGJlIGNvcnJlY3QpXG4gICAgICAgICAgICAgIC8vdHJ1ZSA9IG9uIHRoZSBsZWZ0IHNpZGVcbiAgICAgICAgICAgICAgLy9mYWxzZSA9IG9uIHRoZSByaWdodCBzaWRlXG4gICAgICAgICAgICAgIGk6IGR1bW15Q29udGFpbmVyT2Zmc2V0LmxlZnQgPT09IGR1bW15Q29udGFpbmVyQ2hpbGRPZmZzZXQubGVmdCxcbiAgICAgICAgICAgICAgLy9uZWdhdGl2ZSA9IGRldGVybWluZXMgaWYgdGhlIG1heGltdW0gc2Nyb2xsIGlzIHBvc2l0aXZlIG9yIG5lZ2F0aXZlXG4gICAgICAgICAgICAgIC8vJ24nIG1lYW5zICduZWdhdGUnIChuID09PSB0cnVlIG1lYW5zIHRoYXQgdGhlIGF4aXMgbXVzdCBiZSBuZWdhdGVkIHRvIGJlIGNvcnJlY3QpXG4gICAgICAgICAgICAgIC8vdHJ1ZSA9IG5lZ2F0aXZlXG4gICAgICAgICAgICAgIC8vZmFsc2UgPSBwb3NpdGl2ZVxuICAgICAgICAgICAgICBuOiBkdW1teUNvbnRhaW5lckNoaWxkT2Zmc2V0LmxlZnQgIT09IGR1bW15Q29udGFpbmVyQ2hpbGRPZmZzZXRBZnRlclNjcm9sbC5sZWZ0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0oKSxcbiAgICAgICAgICBzdXBwb3J0VHJhbnNmb3JtOiAhIVZFTkRPUlMuX2Nzc1Byb3BlcnR5KCd0cmFuc2Zvcm0nKSxcbiAgICAgICAgICBzdXBwb3J0VHJhbnNpdGlvbjogISFWRU5ET1JTLl9jc3NQcm9wZXJ0eSgndHJhbnNpdGlvbicpLFxuICAgICAgICAgIHN1cHBvcnRQYXNzaXZlRXZlbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlO1xuICAgICAgICAgIH0oKSxcbiAgICAgICAgICBzdXBwb3J0UmVzaXplT2JzZXJ2ZXI6ICEhQ09NUEFUSUJJTElUWS5yTygpLFxuICAgICAgICAgIHN1cHBvcnRNdXRhdGlvbk9ic2VydmVyOiAhIUNPTVBBVElCSUxJVFkubU8oKVxuICAgICAgICB9KTtcbiAgICAgICAgc2Nyb2xsYmFyRHVtbXlFbGVtZW50LnJlbW92ZUF0dHIoTEVYSUNPTi5zKS5yZW1vdmUoKTsgLy9DYXRjaCB6b29tIGV2ZW50OlxuXG4gICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG5hdGl2ZVNjcm9sbGJhcklzT3ZlcmxhaWQueCAmJiBuYXRpdmVTY3JvbGxiYXJJc092ZXJsYWlkLnkpIHJldHVybjtcbiAgICAgICAgICB2YXIgYWJzID0gTUFUSC5hYnM7XG4gICAgICAgICAgdmFyIHdpbmRvd1dpZHRoID0gQ09NUEFUSUJJTElUWS53VygpO1xuICAgICAgICAgIHZhciB3aW5kb3dIZWlnaHQgPSBDT01QQVRJQklMSVRZLndIKCk7XG4gICAgICAgICAgdmFyIHdpbmRvd0RwciA9IGdldFdpbmRvd0RQUigpO1xuXG4gICAgICAgICAgdmFyIG9uUmVzaXplID0gZnVuY3Rpb24gb25SZXNpemUoKSB7XG4gICAgICAgICAgICBpZiAoSU5TVEFOQ0VTKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICB2YXIgbmV3VyA9IENPTVBBVElCSUxJVFkud1coKTtcbiAgICAgICAgICAgICAgdmFyIG5ld0ggPSBDT01QQVRJQklMSVRZLndIKCk7XG4gICAgICAgICAgICAgIHZhciBkZWx0YVcgPSBuZXdXIC0gd2luZG93V2lkdGg7XG4gICAgICAgICAgICAgIHZhciBkZWx0YUggPSBuZXdIIC0gd2luZG93SGVpZ2h0O1xuICAgICAgICAgICAgICBpZiAoZGVsdGFXID09PSAwICYmIGRlbHRhSCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgICB2YXIgZGVsdGFXUmF0aW8gPSBNQVRILnJvdW5kKG5ld1cgLyAod2luZG93V2lkdGggLyAxMDAuMCkpO1xuICAgICAgICAgICAgICB2YXIgZGVsdGFIUmF0aW8gPSBNQVRILnJvdW5kKG5ld0ggLyAod2luZG93SGVpZ2h0IC8gMTAwLjApKTtcbiAgICAgICAgICAgICAgdmFyIGFic0RlbHRhVyA9IGFicyhkZWx0YVcpO1xuICAgICAgICAgICAgICB2YXIgYWJzRGVsdGFIID0gYWJzKGRlbHRhSCk7XG4gICAgICAgICAgICAgIHZhciBhYnNEZWx0YVdSYXRpbyA9IGFicyhkZWx0YVdSYXRpbyk7XG4gICAgICAgICAgICAgIHZhciBhYnNEZWx0YUhSYXRpbyA9IGFicyhkZWx0YUhSYXRpbyk7XG4gICAgICAgICAgICAgIHZhciBuZXdEUFIgPSBnZXRXaW5kb3dEUFIoKTtcbiAgICAgICAgICAgICAgdmFyIGRlbHRhSXNCaWdnZXIgPSBhYnNEZWx0YVcgPiAyICYmIGFic0RlbHRhSCA+IDI7XG4gICAgICAgICAgICAgIHZhciBkaWZmZXJlbmNlID0gIWRpZmZlcmVuY2VJc0JpZ2dlclRoYW5PbmUoYWJzRGVsdGFXUmF0aW8sIGFic0RlbHRhSFJhdGlvKTtcbiAgICAgICAgICAgICAgdmFyIGRwckNoYW5nZWQgPSBuZXdEUFIgIT09IHdpbmRvd0RwciAmJiB3aW5kb3dEcHIgPiAwO1xuICAgICAgICAgICAgICB2YXIgaXNab29tID0gZGVsdGFJc0JpZ2dlciAmJiBkaWZmZXJlbmNlICYmIGRwckNoYW5nZWQ7XG4gICAgICAgICAgICAgIHZhciBvbGRTY3JvbGxiYXJTaXplID0gX2Jhc2UubmF0aXZlU2Nyb2xsYmFyU2l6ZTtcbiAgICAgICAgICAgICAgdmFyIG5ld1Njcm9sbGJhclNpemU7XG5cbiAgICAgICAgICAgICAgaWYgKGlzWm9vbSkge1xuICAgICAgICAgICAgICAgIGJvZHlFbGVtZW50LmFwcGVuZChzY3JvbGxiYXJEdW1teUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIG5ld1Njcm9sbGJhclNpemUgPSBfYmFzZS5uYXRpdmVTY3JvbGxiYXJTaXplID0gY2FsY05hdGl2ZVNjcm9sbGJhclNpemUoc2Nyb2xsYmFyRHVtbXlFbGVtZW50WzBdKTtcbiAgICAgICAgICAgICAgICBzY3JvbGxiYXJEdW1teUVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAob2xkU2Nyb2xsYmFyU2l6ZS54ICE9PSBuZXdTY3JvbGxiYXJTaXplLnggfHwgb2xkU2Nyb2xsYmFyU2l6ZS55ICE9PSBuZXdTY3JvbGxiYXJTaXplLnkpIHtcbiAgICAgICAgICAgICAgICAgIEZSQU1FV09SSy5lYWNoKElOU1RBTkNFUygpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChJTlNUQU5DRVModGhpcykpIElOU1RBTkNFUyh0aGlzKS51cGRhdGUoJ3pvb20nKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHdpbmRvd1dpZHRoID0gbmV3VztcbiAgICAgICAgICAgICAgd2luZG93SGVpZ2h0ID0gbmV3SDtcbiAgICAgICAgICAgICAgd2luZG93RHByID0gbmV3RFBSO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBmdW5jdGlvbiBkaWZmZXJlbmNlSXNCaWdnZXJUaGFuT25lKHZhbE9uZSwgdmFsVHdvKSB7XG4gICAgICAgICAgICB2YXIgYWJzVmFsT25lID0gYWJzKHZhbE9uZSk7XG4gICAgICAgICAgICB2YXIgYWJzVmFsVHdvID0gYWJzKHZhbFR3byk7XG4gICAgICAgICAgICByZXR1cm4gIShhYnNWYWxPbmUgPT09IGFic1ZhbFR3byB8fCBhYnNWYWxPbmUgKyAxID09PSBhYnNWYWxUd28gfHwgYWJzVmFsT25lIC0gMSA9PT0gYWJzVmFsVHdvKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBnZXRXaW5kb3dEUFIoKSB7XG4gICAgICAgICAgICB2YXIgZERQSSA9IHdpbmRvdy5zY3JlZW4uZGV2aWNlWERQSSB8fCAwO1xuICAgICAgICAgICAgdmFyIHNEUEkgPSB3aW5kb3cuc2NyZWVuLmxvZ2ljYWxYRFBJIHx8IDE7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgZERQSSAvIHNEUEk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgRlJBTUVXT1JLKHdpbmRvdykub24oJ3Jlc2l6ZScsIG9uUmVzaXplKTtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICBmdW5jdGlvbiBjYWxjTmF0aXZlU2Nyb2xsYmFyU2l6ZShtZWFzdXJlRWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBtZWFzdXJlRWxlbWVudFtMRVhJQ09OLm9IXSAtIG1lYXN1cmVFbGVtZW50W0xFWElDT04uY0hdLFxuICAgICAgICAgICAgeTogbWVhc3VyZUVsZW1lbnRbTEVYSUNPTi5vV10gLSBtZWFzdXJlRWxlbWVudFtMRVhJQ09OLmNXXVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qKlxyXG4gICAgICAgKiBUaGUgb2JqZWN0IHdoaWNoIG1hbmFnZXMgdGhlIGF1dG8gdXBkYXRlIGxvb3AgZm9yIGFsbCBPdmVybGF5U2Nyb2xsYmFycyBvYmplY3RzLiBUaGlzIG9iamVjdCBpcyBpbml0aWFsaXplZCBvbmx5IG9uY2U6IGlmIHRoZSBmaXJzdCBPdmVybGF5U2Nyb2xsYmFycyBvYmplY3QgZ2V0cyBpbml0aWFsaXplZC5cclxuICAgICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgICAqL1xuXG5cbiAgICAgIGZ1bmN0aW9uIE92ZXJsYXlTY3JvbGxiYXJzQXV0b1VwZGF0ZUxvb3AoZ2xvYmFscykge1xuICAgICAgICB2YXIgX2Jhc2UgPSB0aGlzO1xuXG4gICAgICAgIHZhciBfaW5BcnJheSA9IEZSQU1FV09SSy5pbkFycmF5O1xuICAgICAgICB2YXIgX2dldE5vdyA9IENPTVBBVElCSUxJVFkubm93O1xuICAgICAgICB2YXIgX3N0ckF1dG9VcGRhdGUgPSAnYXV0b1VwZGF0ZSc7XG5cbiAgICAgICAgdmFyIF9zdHJBdXRvVXBkYXRlSW50ZXJ2YWwgPSBfc3RyQXV0b1VwZGF0ZSArICdJbnRlcnZhbCc7XG5cbiAgICAgICAgdmFyIF9zdHJMZW5ndGggPSBMRVhJQ09OLmw7XG4gICAgICAgIHZhciBfbG9vcGluZ0luc3RhbmNlcyA9IFtdO1xuICAgICAgICB2YXIgX2xvb3BpbmdJbnN0YW5jZXNJbnRlcnZhbENhY2hlID0gW107XG4gICAgICAgIHZhciBfbG9vcElzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHZhciBfbG9vcEludGVydmFsRGVmYXVsdCA9IDMzO1xuICAgICAgICB2YXIgX2xvb3BJbnRlcnZhbCA9IF9sb29wSW50ZXJ2YWxEZWZhdWx0O1xuXG4gICAgICAgIHZhciBfbG9vcFRpbWVPbGQgPSBfZ2V0Tm93KCk7XG5cbiAgICAgICAgdmFyIF9sb29wSUQ7XG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBhdXRvIHVwZGF0ZSBsb29wIHdoaWNoIHdpbGwgcnVuIGV2ZXJ5IDUwIG1pbGxpc2Vjb25kcyBvciBsZXNzIGlmIHRoZSB1cGRhdGUgaW50ZXJ2YWwgb2YgYSBpbnN0YW5jZSBpcyBsb3dlciB0aGFuIDUwIG1pbGxpc2Vjb25kcy5cclxuICAgICAgICAgKi9cblxuXG4gICAgICAgIHZhciBsb29wID0gZnVuY3Rpb24gbG9vcCgpIHtcbiAgICAgICAgICBpZiAoX2xvb3BpbmdJbnN0YW5jZXNbX3N0ckxlbmd0aF0gPiAwICYmIF9sb29wSXNBY3RpdmUpIHtcbiAgICAgICAgICAgIF9sb29wSUQgPSBDT01QQVRJQklMSVRZLnJBRigpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgbG9vcCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciB0aW1lTmV3ID0gX2dldE5vdygpO1xuXG4gICAgICAgICAgICB2YXIgdGltZURlbHRhID0gdGltZU5ldyAtIF9sb29wVGltZU9sZDtcbiAgICAgICAgICAgIHZhciBsb3dlc3RJbnRlcnZhbDtcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZTtcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZU9wdGlvbnM7XG4gICAgICAgICAgICB2YXIgaW5zdGFuY2VBdXRvVXBkYXRlQWxsb3dlZDtcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZUF1dG9VcGRhdGVJbnRlcnZhbDtcbiAgICAgICAgICAgIHZhciBub3c7XG5cbiAgICAgICAgICAgIGlmICh0aW1lRGVsdGEgPiBfbG9vcEludGVydmFsKSB7XG4gICAgICAgICAgICAgIF9sb29wVGltZU9sZCA9IHRpbWVOZXcgLSB0aW1lRGVsdGEgJSBfbG9vcEludGVydmFsO1xuICAgICAgICAgICAgICBsb3dlc3RJbnRlcnZhbCA9IF9sb29wSW50ZXJ2YWxEZWZhdWx0O1xuXG4gICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX2xvb3BpbmdJbnN0YW5jZXNbX3N0ckxlbmd0aF07IGkrKykge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gX2xvb3BpbmdJbnN0YW5jZXNbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2UgIT09IHVuZGVmaW5lZCQxKSB7XG4gICAgICAgICAgICAgICAgICBpbnN0YW5jZU9wdGlvbnMgPSBpbnN0YW5jZS5vcHRpb25zKCk7XG4gICAgICAgICAgICAgICAgICBpbnN0YW5jZUF1dG9VcGRhdGVBbGxvd2VkID0gaW5zdGFuY2VPcHRpb25zW19zdHJBdXRvVXBkYXRlXTtcbiAgICAgICAgICAgICAgICAgIGluc3RhbmNlQXV0b1VwZGF0ZUludGVydmFsID0gTUFUSC5tYXgoMSwgaW5zdGFuY2VPcHRpb25zW19zdHJBdXRvVXBkYXRlSW50ZXJ2YWxdKTtcbiAgICAgICAgICAgICAgICAgIG5vdyA9IF9nZXROb3coKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKChpbnN0YW5jZUF1dG9VcGRhdGVBbGxvd2VkID09PSB0cnVlIHx8IGluc3RhbmNlQXV0b1VwZGF0ZUFsbG93ZWQgPT09IG51bGwpICYmIG5vdyAtIF9sb29waW5nSW5zdGFuY2VzSW50ZXJ2YWxDYWNoZVtpXSA+IGluc3RhbmNlQXV0b1VwZGF0ZUludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLnVwZGF0ZSgnYXV0bycpO1xuICAgICAgICAgICAgICAgICAgICBfbG9vcGluZ0luc3RhbmNlc0ludGVydmFsQ2FjaGVbaV0gPSBuZXcgRGF0ZShub3cgKz0gaW5zdGFuY2VBdXRvVXBkYXRlSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBsb3dlc3RJbnRlcnZhbCA9IE1BVEgubWF4KDEsIE1BVEgubWluKGxvd2VzdEludGVydmFsLCBpbnN0YW5jZUF1dG9VcGRhdGVJbnRlcnZhbCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIF9sb29wSW50ZXJ2YWwgPSBsb3dlc3RJbnRlcnZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2xvb3BJbnRlcnZhbCA9IF9sb29wSW50ZXJ2YWxEZWZhdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQWRkIE92ZXJsYXlTY3JvbGxiYXJzIGluc3RhbmNlIHRvIHRoZSBhdXRvIHVwZGF0ZSBsb29wLiBPbmx5IHN1Y2Nlc3NmdWwgaWYgdGhlIGluc3RhbmNlIGlzbid0IGFscmVhZHkgYWRkZWQuXHJcbiAgICAgICAgICogQHBhcmFtIGluc3RhbmNlIFRoZSBpbnN0YW5jZSB3aGljaCBzaGFsbCBiZSB1cGRhdGVkIGluIGEgbG9vcCBhdXRvbWF0aWNhbGx5LlxyXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgX2Jhc2UuYWRkID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgICAgaWYgKF9pbkFycmF5KGluc3RhbmNlLCBfbG9vcGluZ0luc3RhbmNlcykgPT09IC0xKSB7XG4gICAgICAgICAgICBfbG9vcGluZ0luc3RhbmNlcy5wdXNoKGluc3RhbmNlKTtcblxuICAgICAgICAgICAgX2xvb3BpbmdJbnN0YW5jZXNJbnRlcnZhbENhY2hlLnB1c2goX2dldE5vdygpKTtcblxuICAgICAgICAgICAgaWYgKF9sb29waW5nSW5zdGFuY2VzW19zdHJMZW5ndGhdID4gMCAmJiAhX2xvb3BJc0FjdGl2ZSkge1xuICAgICAgICAgICAgICBfbG9vcElzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2xvYmFscy5hdXRvVXBkYXRlTG9vcCA9IF9sb29wSXNBY3RpdmU7XG4gICAgICAgICAgICAgIGxvb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlbW92ZSBPdmVybGF5U2Nyb2xsYmFycyBpbnN0YW5jZSBmcm9tIHRoZSBhdXRvIHVwZGF0ZSBsb29wLiBPbmx5IHN1Y2Nlc3NmdWwgaWYgdGhlIGluc3RhbmNlIHdhcyBhZGRlZCBiZWZvcmUuXHJcbiAgICAgICAgICogQHBhcmFtIGluc3RhbmNlIFRoZSBpbnN0YW5jZSB3aGljaCBzaGFsbCBiZSB1cGRhdGVkIGluIGEgbG9vcCBhdXRvbWF0aWNhbGx5LlxyXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgX2Jhc2UucmVtb3ZlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgICAgdmFyIGluZGV4ID0gX2luQXJyYXkoaW5zdGFuY2UsIF9sb29waW5nSW5zdGFuY2VzKTtcblxuICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAvL3JlbW92ZSBmcm9tIGxvb3BpbmdJbnN0YW5jZXMgbGlzdFxuICAgICAgICAgICAgX2xvb3BpbmdJbnN0YW5jZXNJbnRlcnZhbENhY2hlLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgICAgIF9sb29waW5nSW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7IC8vY29ycmVjdCB1cGRhdGUgbG9vcCBiZWhhdmlvclxuXG5cbiAgICAgICAgICAgIGlmIChfbG9vcGluZ0luc3RhbmNlc1tfc3RyTGVuZ3RoXSA9PT0gMCAmJiBfbG9vcElzQWN0aXZlKSB7XG4gICAgICAgICAgICAgIF9sb29wSXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgZ2xvYmFscy5hdXRvVXBkYXRlTG9vcCA9IF9sb29wSXNBY3RpdmU7XG5cbiAgICAgICAgICAgICAgaWYgKF9sb29wSUQgIT09IHVuZGVmaW5lZCQxKSB7XG4gICAgICAgICAgICAgICAgQ09NUEFUSUJJTElUWS5jQUYoKShfbG9vcElEKTtcbiAgICAgICAgICAgICAgICBfbG9vcElEID0gLTE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICAvKipcclxuICAgICAgICogQSBvYmplY3Qgd2hpY2ggbWFuYWdlcyB0aGUgc2Nyb2xsYmFycyB2aXNpYmlsaXR5IG9mIHRoZSB0YXJnZXQgZWxlbWVudC5cclxuICAgICAgICogQHBhcmFtIHBsdWdpblRhcmdldEVsZW1lbnQgVGhlIGVsZW1lbnQgZnJvbSB3aGljaCB0aGUgc2Nyb2xsYmFycyBzaGFsbCBiZSBoaWRkZW4uXHJcbiAgICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBjdXN0b20gb3B0aW9ucy5cclxuICAgICAgICogQHBhcmFtIGV4dGVuc2lvbnMgVGhlIGN1c3RvbSBleHRlbnNpb25zLlxyXG4gICAgICAgKiBAcGFyYW0gZ2xvYmFsc1xyXG4gICAgICAgKiBAcGFyYW0gYXV0b1VwZGF0ZUxvb3BcclxuICAgICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICAgKi9cblxuXG4gICAgICBmdW5jdGlvbiBPdmVybGF5U2Nyb2xsYmFyc0luc3RhbmNlKHBsdWdpblRhcmdldEVsZW1lbnQsIG9wdGlvbnMsIGV4dGVuc2lvbnMsIGdsb2JhbHMsIGF1dG9VcGRhdGVMb29wKSB7XG4gICAgICAgIC8vc2hvcnRjdXRzXG4gICAgICAgIHZhciB0eXBlID0gQ09NUEFUSUJJTElUWS50eXBlO1xuICAgICAgICB2YXIgaW5BcnJheSA9IEZSQU1FV09SSy5pbkFycmF5O1xuICAgICAgICB2YXIgZWFjaCA9IEZSQU1FV09SSy5lYWNoOyAvL21ha2UgY29ycmVjdCBpbnN0YW5jZW9mXG5cbiAgICAgICAgdmFyIF9iYXNlID0gbmV3IF9wbHVnaW4oKTtcblxuICAgICAgICB2YXIgX2ZyYW1ld29ya1Byb3RvID0gRlJBTUVXT1JLW0xFWElDT04ucF07IC8vaWYgcGFzc2VkIGVsZW1lbnQgaXMgbm8gSFRNTCBlbGVtZW50OiBza2lwIGFuZCByZXR1cm5cblxuICAgICAgICBpZiAoIWlzSFRNTEVsZW1lbnQocGx1Z2luVGFyZ2V0RWxlbWVudCkpIHJldHVybjsgLy9pZiBwYXNzZWQgZWxlbWVudCBpcyBhbHJlYWR5IGluaXRpYWxpemVkOiBzZXQgcGFzc2VkIG9wdGlvbnMgaWYgdGhlcmUgYXJlIGFueSBhbmQgcmV0dXJuIGl0cyBpbnN0YW5jZVxuXG4gICAgICAgIGlmIChJTlNUQU5DRVMocGx1Z2luVGFyZ2V0RWxlbWVudCkpIHtcbiAgICAgICAgICB2YXIgaW5zdCA9IElOU1RBTkNFUyhwbHVnaW5UYXJnZXRFbGVtZW50KTtcbiAgICAgICAgICBpbnN0Lm9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgICAgcmV0dXJuIGluc3Q7XG4gICAgICAgIH0gLy9nbG9iYWxzOlxuXG5cbiAgICAgICAgdmFyIF9uYXRpdmVTY3JvbGxiYXJJc092ZXJsYWlkO1xuXG4gICAgICAgIHZhciBfb3ZlcmxheVNjcm9sbGJhckR1bW15U2l6ZTtcblxuICAgICAgICB2YXIgX3J0bFNjcm9sbEJlaGF2aW9yO1xuXG4gICAgICAgIHZhciBfYXV0b1VwZGF0ZVJlY29tbWVuZGVkO1xuXG4gICAgICAgIHZhciBfbXNpZVZlcnNpb247XG5cbiAgICAgICAgdmFyIF9uYXRpdmVTY3JvbGxiYXJTdHlsaW5nO1xuXG4gICAgICAgIHZhciBfY3NzQ2FsYztcblxuICAgICAgICB2YXIgX25hdGl2ZVNjcm9sbGJhclNpemU7XG5cbiAgICAgICAgdmFyIF9zdXBwb3J0VHJhbnNpdGlvbjtcblxuICAgICAgICB2YXIgX3N1cHBvcnRUcmFuc2Zvcm07XG5cbiAgICAgICAgdmFyIF9zdXBwb3J0UGFzc2l2ZUV2ZW50cztcblxuICAgICAgICB2YXIgX3N1cHBvcnRSZXNpemVPYnNlcnZlcjtcblxuICAgICAgICB2YXIgX3N1cHBvcnRNdXRhdGlvbk9ic2VydmVyO1xuXG4gICAgICAgIHZhciBfaW5pdGlhbGl6ZWQ7XG5cbiAgICAgICAgdmFyIF9kZXN0cm95ZWQ7XG5cbiAgICAgICAgdmFyIF9pc1RleHRhcmVhO1xuXG4gICAgICAgIHZhciBfaXNCb2R5O1xuXG4gICAgICAgIHZhciBfZG9jdW1lbnRNaXhlZDtcblxuICAgICAgICB2YXIgX2RvbUV4aXN0czsgLy9nZW5lcmFsOlxuXG5cbiAgICAgICAgdmFyIF9pc0JvcmRlckJveDtcblxuICAgICAgICB2YXIgX3NpemVBdXRvT2JzZXJ2ZXJBZGRlZDtcblxuICAgICAgICB2YXIgX3BhZGRpbmdYO1xuXG4gICAgICAgIHZhciBfcGFkZGluZ1k7XG5cbiAgICAgICAgdmFyIF9ib3JkZXJYO1xuXG4gICAgICAgIHZhciBfYm9yZGVyWTtcblxuICAgICAgICB2YXIgX21hcmdpblg7XG5cbiAgICAgICAgdmFyIF9tYXJnaW5ZO1xuXG4gICAgICAgIHZhciBfaXNSVEw7XG5cbiAgICAgICAgdmFyIF9zbGVlcGluZztcblxuICAgICAgICB2YXIgX2NvbnRlbnRCb3JkZXJTaXplID0ge307XG4gICAgICAgIHZhciBfc2Nyb2xsSG9yaXpvbnRhbEluZm8gPSB7fTtcbiAgICAgICAgdmFyIF9zY3JvbGxWZXJ0aWNhbEluZm8gPSB7fTtcbiAgICAgICAgdmFyIF92aWV3cG9ydFNpemUgPSB7fTtcbiAgICAgICAgdmFyIF9uYXRpdmVTY3JvbGxiYXJNaW5TaXplID0ge307IC8vbmFtaW5nOlx0XG5cbiAgICAgICAgdmFyIF9zdHJNaW51c0hpZGRlbiA9ICctaGlkZGVuJztcbiAgICAgICAgdmFyIF9zdHJNYXJnaW5NaW51cyA9ICdtYXJnaW4tJztcbiAgICAgICAgdmFyIF9zdHJQYWRkaW5nTWludXMgPSAncGFkZGluZy0nO1xuICAgICAgICB2YXIgX3N0ckJvcmRlck1pbnVzID0gJ2JvcmRlci0nO1xuICAgICAgICB2YXIgX3N0clRvcCA9ICd0b3AnO1xuICAgICAgICB2YXIgX3N0clJpZ2h0ID0gJ3JpZ2h0JztcbiAgICAgICAgdmFyIF9zdHJCb3R0b20gPSAnYm90dG9tJztcbiAgICAgICAgdmFyIF9zdHJMZWZ0ID0gJ2xlZnQnO1xuICAgICAgICB2YXIgX3N0ck1pbk1pbnVzID0gJ21pbi0nO1xuICAgICAgICB2YXIgX3N0ck1heE1pbnVzID0gJ21heC0nO1xuICAgICAgICB2YXIgX3N0cldpZHRoID0gJ3dpZHRoJztcbiAgICAgICAgdmFyIF9zdHJIZWlnaHQgPSAnaGVpZ2h0JztcbiAgICAgICAgdmFyIF9zdHJGbG9hdCA9ICdmbG9hdCc7XG4gICAgICAgIHZhciBfc3RyRW1wdHkgPSAnJztcbiAgICAgICAgdmFyIF9zdHJBdXRvID0gJ2F1dG8nO1xuICAgICAgICB2YXIgX3N0clN5bmMgPSAnc3luYyc7XG4gICAgICAgIHZhciBfc3RyU2Nyb2xsID0gJ3Njcm9sbCc7XG4gICAgICAgIHZhciBfc3RySHVuZHJlZFBlcmNlbnQgPSAnMTAwJSc7XG4gICAgICAgIHZhciBfc3RyWCA9ICd4JztcbiAgICAgICAgdmFyIF9zdHJZID0gJ3knO1xuICAgICAgICB2YXIgX3N0ckRvdCA9ICcuJztcbiAgICAgICAgdmFyIF9zdHJTcGFjZSA9ICcgJztcbiAgICAgICAgdmFyIF9zdHJTY3JvbGxiYXIgPSAnc2Nyb2xsYmFyJztcbiAgICAgICAgdmFyIF9zdHJNaW51c0hvcml6b250YWwgPSAnLWhvcml6b250YWwnO1xuICAgICAgICB2YXIgX3N0ck1pbnVzVmVydGljYWwgPSAnLXZlcnRpY2FsJztcblxuICAgICAgICB2YXIgX3N0clNjcm9sbExlZnQgPSBfc3RyU2Nyb2xsICsgJ0xlZnQnO1xuXG4gICAgICAgIHZhciBfc3RyU2Nyb2xsVG9wID0gX3N0clNjcm9sbCArICdUb3AnO1xuXG4gICAgICAgIHZhciBfc3RyTW91c2VUb3VjaERvd25FdmVudCA9ICdtb3VzZWRvd24gdG91Y2hzdGFydCc7XG4gICAgICAgIHZhciBfc3RyTW91c2VUb3VjaFVwRXZlbnQgPSAnbW91c2V1cCB0b3VjaGVuZCB0b3VjaGNhbmNlbCc7XG4gICAgICAgIHZhciBfc3RyTW91c2VUb3VjaE1vdmVFdmVudCA9ICdtb3VzZW1vdmUgdG91Y2htb3ZlJztcbiAgICAgICAgdmFyIF9zdHJNb3VzZUVudGVyID0gJ21vdXNlZW50ZXInO1xuICAgICAgICB2YXIgX3N0ck1vdXNlTGVhdmUgPSAnbW91c2VsZWF2ZSc7XG4gICAgICAgIHZhciBfc3RyS2V5RG93bkV2ZW50ID0gJ2tleWRvd24nO1xuICAgICAgICB2YXIgX3N0cktleVVwRXZlbnQgPSAna2V5dXAnO1xuICAgICAgICB2YXIgX3N0clNlbGVjdFN0YXJ0RXZlbnQgPSAnc2VsZWN0c3RhcnQnO1xuICAgICAgICB2YXIgX3N0clRyYW5zaXRpb25FbmRFdmVudCA9ICd0cmFuc2l0aW9uZW5kIHdlYmtpdFRyYW5zaXRpb25FbmQgb1RyYW5zaXRpb25FbmQnO1xuICAgICAgICB2YXIgX3N0clJlc2l6ZU9ic2VydmVyUHJvcGVydHkgPSAnX19vdmVybGF5U2Nyb2xsYmFyc1JPX18nOyAvL2NsYXNzIG5hbWVzOlx0XG5cbiAgICAgICAgdmFyIF9jYXNzTmFtZXNQcmVmaXggPSAnb3MtJztcblxuICAgICAgICB2YXIgX2NsYXNzTmFtZUhUTUxFbGVtZW50ID0gX2Nhc3NOYW1lc1ByZWZpeCArICdodG1sJztcblxuICAgICAgICB2YXIgX2NsYXNzTmFtZUhvc3RFbGVtZW50ID0gX2Nhc3NOYW1lc1ByZWZpeCArICdob3N0JztcblxuICAgICAgICB2YXIgX2NsYXNzTmFtZUhvc3RFbGVtZW50Rm9yZWlnbiA9IF9jbGFzc05hbWVIb3N0RWxlbWVudCArICctZm9yZWlnbic7XG5cbiAgICAgICAgdmFyIF9jbGFzc05hbWVIb3N0VGV4dGFyZWFFbGVtZW50ID0gX2NsYXNzTmFtZUhvc3RFbGVtZW50ICsgJy10ZXh0YXJlYSc7XG5cbiAgICAgICAgdmFyIF9jbGFzc05hbWVIb3N0U2Nyb2xsYmFySG9yaXpvbnRhbEhpZGRlbiA9IF9jbGFzc05hbWVIb3N0RWxlbWVudCArICctJyArIF9zdHJTY3JvbGxiYXIgKyBfc3RyTWludXNIb3Jpem9udGFsICsgX3N0ck1pbnVzSGlkZGVuO1xuXG4gICAgICAgIHZhciBfY2xhc3NOYW1lSG9zdFNjcm9sbGJhclZlcnRpY2FsSGlkZGVuID0gX2NsYXNzTmFtZUhvc3RFbGVtZW50ICsgJy0nICsgX3N0clNjcm9sbGJhciArIF9zdHJNaW51c1ZlcnRpY2FsICsgX3N0ck1pbnVzSGlkZGVuO1xuXG4gICAgICAgIHZhciBfY2xhc3NOYW1lSG9zdFRyYW5zaXRpb24gPSBfY2xhc3NOYW1lSG9zdEVsZW1lbnQgKyAnLXRyYW5zaXRpb24nO1xuXG4gICAgICAgIHZhciBfY2xhc3NOYW1lSG9zdFJUTCA9IF9jbGFzc05hbWVIb3N0RWxlbWVudCArICctcnRsJztcblxuICAgICAgICB2YXIgX2NsYXNzTmFtZUhvc3RSZXNpemVEaXNhYmxlZCA9IF9jbGFzc05hbWVIb3N0RWxlbWVudCArICctcmVzaXplLWRpc2FibGVkJztcblxuICAgICAgICB2YXIgX2NsYXNzTmFtZUhvc3RTY3JvbGxpbmcgPSBfY2xhc3NOYW1lSG9zdEVsZW1lbnQgKyAnLXNjcm9sbGluZyc7XG5cbiAgICAgICAgdmFyIF9jbGFzc05hbWVIb3N0T3ZlcmZsb3cgPSBfY2xhc3NOYW1lSG9zdEVsZW1lbnQgKyAnLW92ZXJmbG93JztcblxuICAgICAgICB2YXIgX2NsYXNzTmFtZUhvc3RPdmVyZmxvdyA9IF9jbGFzc05hbWVIb3N0RWxlbWVudCArICctb3ZlcmZsb3cnO1xuXG4gICAgICAgIHZhciBfY2xhc3NOYW1lSG9zdE92ZXJmbG93WCA9IF9jbGFzc05hbWVIb3N0T3ZlcmZsb3cgKyAnLXgnO1xuXG4gICAgICAgIHZhciBfY2xhc3NOYW1lSG9zdE92ZXJmbG93WSA9IF9jbGFzc05hbWVIb3N0T3ZlcmZsb3cgKyAnLXknO1xuXG4gICAgICAgIHZhciBfY2xhc3NOYW1lVGV4dGFyZWFFbGVtZW50ID0gX2Nhc3NOYW1lc1ByZWZpeCArICd0ZXh0YXJlYSc7XG5cbiAgICAgICAgdmFyIF9jbGFzc05hbWVUZXh0YXJlYUNvdmVyRWxlbWVudCA9IF9jbGFzc05hbWVUZXh0YXJlYUVsZW1lbnQgKyAnLWNvdmVyJztcblxuICAgICAgICB2YXIgX2NsYXNzTmFtZVBhZGRpbmdFbGVtZW50ID0gX2Nhc3NOYW1lc1ByZWZpeCArICdwYWRkaW5nJztcblxuICAgICAgICB2YXIgX2NsYXNzTmFtZVZpZXdwb3J0RWxlbWVudCA9IF9jYXNzTmFtZXNQcmVmaXggKyAndmlld3BvcnQnO1xuXG4gICAgICAgIHZhciBfY2xhc3NOYW1lVmlld3BvcnROYXRpdmVTY3JvbGxiYXJzSW52aXNpYmxlID0gX2NsYXNzTmFtZVZpZXdwb3J0RWxlbWVudCArICctbmF0aXZlLXNjcm9sbGJhcnMtaW52aXNpYmxlJztcblxuICAgICAgICB2YXIgX2NsYXNzTmFtZVZpZXdwb3J0TmF0aXZlU2Nyb2xsYmFyc092ZXJsYWlkID0gX2NsYXNzTmFtZVZpZXdwb3J0RWxlbWVudCArICctbmF0aXZlLXNjcm9sbGJhcnMtb3ZlcmxhaWQnO1xuXG4gICAgICAgIHZhciBfY2xhc3NOYW1lQ29udGVudEVsZW1lbnQgPSBfY2Fzc05hbWVzUHJlZml4ICsgJ2NvbnRlbnQnO1xuXG4gICAgICAgIHZhciBfY2xhc3NOYW1lQ29udGVudEFycmFuZ2VFbGVtZW50ID0gX2Nhc3NOYW1lc1ByZWZpeCArICdjb250ZW50LWFycmFuZ2UnO1xuXG4gICAgICAgIHZhciBfY2xhc3NOYW1lQ29udGVudEdsdWVFbGVtZW50ID0gX2Nhc3NOYW1lc1ByZWZpeCArICdjb250ZW50LWdsdWUnO1xuXG4gICAgICAgIHZhciBfY2xhc3NOYW1lU2l6ZUF1dG9PYnNlcnZlckVsZW1lbnQgPSBfY2Fzc05hbWVzUHJlZml4ICsgJ3NpemUtYXV0by1vYnNlcnZlcic7XG5cbiAgICAgICAgdmFyIF9jbGFzc05hbWVSZXNpemVPYnNlcnZlckVsZW1lbnQgPSBfY2Fzc05hbWVzUHJlZml4ICsgJ3Jlc2l6ZS1vYnNlcnZlcic7XG5cbiAgICAgICAgdmFyIF9jbGFzc05hbWVSZXNpemVPYnNlcnZlckl0ZW1FbGVtZW50ID0gX2Nhc3NOYW1lc1ByZWZpeCArICdyZXNpemUtb2JzZXJ2ZXItaXRlbSc7XG5cbiAgICAgICAgdmFyIF9jbGFzc05hbWVSZXNpemVPYnNlcnZlckl0ZW1GaW5hbEVsZW1lbnQgPSBfY2xhc3NOYW1lUmVzaXplT2JzZXJ2ZXJJdGVtRWxlbWVudCArICctZmluYWwnO1xuXG4gICAgICAgIHZhciBfY2xhc3NOYW1lVGV4dEluaGVyaXQgPSBfY2Fzc05hbWVzUHJlZml4ICsgJ3RleHQtaW5oZXJpdCc7XG5cbiAgICAgICAgdmFyIF9jbGFzc05hbWVTY3JvbGxiYXIgPSBfY2Fzc05hbWVzUHJlZml4ICsgX3N0clNjcm9sbGJhcjtcblxuICAgICAgICB2YXIgX2NsYXNzTmFtZVNjcm9sbGJhclRyYWNrID0gX2NsYXNzTmFtZVNjcm9sbGJhciArICctdHJhY2snO1xuXG4gICAgICAgIHZhciBfY2xhc3NOYW1lU2Nyb2xsYmFyVHJhY2tPZmYgPSBfY2xhc3NOYW1lU2Nyb2xsYmFyVHJhY2sgKyAnLW9mZic7XG5cbiAgICAgICAgdmFyIF9jbGFzc05hbWVTY3JvbGxiYXJIYW5kbGUgPSBfY2xhc3NOYW1lU2Nyb2xsYmFyICsgJy1oYW5kbGUnO1xuXG4gICAgICAgIHZhciBfY2xhc3NOYW1lU2Nyb2xsYmFySGFuZGxlT2ZmID0gX2NsYXNzTmFtZVNjcm9sbGJhckhhbmRsZSArICctb2ZmJztcblxuICAgICAgICB2YXIgX2NsYXNzTmFtZVNjcm9sbGJhclVudXNhYmxlID0gX2NsYXNzTmFtZVNjcm9sbGJhciArICctdW51c2FibGUnO1xuXG4gICAgICAgIHZhciBfY2xhc3NOYW1lU2Nyb2xsYmFyQXV0b0hpZGRlbiA9IF9jbGFzc05hbWVTY3JvbGxiYXIgKyAnLScgKyBfc3RyQXV0byArIF9zdHJNaW51c0hpZGRlbjtcblxuICAgICAgICB2YXIgX2NsYXNzTmFtZVNjcm9sbGJhckNvcm5lciA9IF9jbGFzc05hbWVTY3JvbGxiYXIgKyAnLWNvcm5lcic7XG5cbiAgICAgICAgdmFyIF9jbGFzc05hbWVTY3JvbGxiYXJDb3JuZXJSZXNpemUgPSBfY2xhc3NOYW1lU2Nyb2xsYmFyQ29ybmVyICsgJy1yZXNpemUnO1xuXG4gICAgICAgIHZhciBfY2xhc3NOYW1lU2Nyb2xsYmFyQ29ybmVyUmVzaXplQiA9IF9jbGFzc05hbWVTY3JvbGxiYXJDb3JuZXJSZXNpemUgKyAnLWJvdGgnO1xuXG4gICAgICAgIHZhciBfY2xhc3NOYW1lU2Nyb2xsYmFyQ29ybmVyUmVzaXplSCA9IF9jbGFzc05hbWVTY3JvbGxiYXJDb3JuZXJSZXNpemUgKyBfc3RyTWludXNIb3Jpem9udGFsO1xuXG4gICAgICAgIHZhciBfY2xhc3NOYW1lU2Nyb2xsYmFyQ29ybmVyUmVzaXplViA9IF9jbGFzc05hbWVTY3JvbGxiYXJDb3JuZXJSZXNpemUgKyBfc3RyTWludXNWZXJ0aWNhbDtcblxuICAgICAgICB2YXIgX2NsYXNzTmFtZVNjcm9sbGJhckhvcml6b250YWwgPSBfY2xhc3NOYW1lU2Nyb2xsYmFyICsgX3N0ck1pbnVzSG9yaXpvbnRhbDtcblxuICAgICAgICB2YXIgX2NsYXNzTmFtZVNjcm9sbGJhclZlcnRpY2FsID0gX2NsYXNzTmFtZVNjcm9sbGJhciArIF9zdHJNaW51c1ZlcnRpY2FsO1xuXG4gICAgICAgIHZhciBfY2xhc3NOYW1lRHJhZ2dpbmcgPSBfY2Fzc05hbWVzUHJlZml4ICsgJ2RyYWdnaW5nJztcblxuICAgICAgICB2YXIgX2NsYXNzTmFtZVRoZW1lTm9uZSA9IF9jYXNzTmFtZXNQcmVmaXggKyAndGhlbWUtbm9uZSc7XG5cbiAgICAgICAgdmFyIF9jbGFzc05hbWVzRHluYW1pY0Rlc3Ryb3kgPSBbX2NsYXNzTmFtZVZpZXdwb3J0TmF0aXZlU2Nyb2xsYmFyc0ludmlzaWJsZSwgX2NsYXNzTmFtZVZpZXdwb3J0TmF0aXZlU2Nyb2xsYmFyc092ZXJsYWlkLCBfY2xhc3NOYW1lU2Nyb2xsYmFyVHJhY2tPZmYsIF9jbGFzc05hbWVTY3JvbGxiYXJIYW5kbGVPZmYsIF9jbGFzc05hbWVTY3JvbGxiYXJVbnVzYWJsZSwgX2NsYXNzTmFtZVNjcm9sbGJhckF1dG9IaWRkZW4sIF9jbGFzc05hbWVTY3JvbGxiYXJDb3JuZXJSZXNpemUsIF9jbGFzc05hbWVTY3JvbGxiYXJDb3JuZXJSZXNpemVCLCBfY2xhc3NOYW1lU2Nyb2xsYmFyQ29ybmVyUmVzaXplSCwgX2NsYXNzTmFtZVNjcm9sbGJhckNvcm5lclJlc2l6ZVYsIF9jbGFzc05hbWVEcmFnZ2luZ10uam9pbihfc3RyU3BhY2UpOyAvL2NhbGxiYWNrczpcdFxuXG5cbiAgICAgICAgdmFyIF9jYWxsYmFja3NJbml0UWV1ZXVlID0gW107IC8vYXR0cnMgdmlld3BvcnQgc2hhbGwgaW5oZXJpdCBmcm9tIHRhcmdldFx0XG5cbiAgICAgICAgdmFyIF92aWV3cG9ydEF0dHJzRnJvbVRhcmdldCA9IFtMRVhJQ09OLnRpXTsgLy9vcHRpb25zOlx0XG5cbiAgICAgICAgdmFyIF9kZWZhdWx0T3B0aW9ucztcblxuICAgICAgICB2YXIgX2N1cnJlbnRPcHRpb25zO1xuXG4gICAgICAgIHZhciBfY3VycmVudFByZXBhcmVkT3B0aW9uczsgLy9leHRlbnNpb25zOlx0XG5cblxuICAgICAgICB2YXIgX2V4dGVuc2lvbnMgPSB7fTtcbiAgICAgICAgdmFyIF9leHRlbnNpb25zUHJpdmF0ZU1ldGhvZHMgPSAnYWRkZWQgcmVtb3ZlZCBvbiBjb250cmFjdCc7IC8vdXBkYXRlXHRcblxuICAgICAgICB2YXIgX2xhc3RVcGRhdGVUaW1lO1xuXG4gICAgICAgIHZhciBfc3dhbGxvd2VkVXBkYXRlSGludHMgPSB7fTtcblxuICAgICAgICB2YXIgX3N3YWxsb3dlZFVwZGF0ZVRpbWVvdXQ7XG5cbiAgICAgICAgdmFyIF9zd2FsbG93VXBkYXRlTGFnID0gNDI7XG4gICAgICAgIHZhciBfdXBkYXRlT25Mb2FkRXZlbnROYW1lID0gJ2xvYWQnO1xuICAgICAgICB2YXIgX3VwZGF0ZU9uTG9hZEVsbXMgPSBbXTsgLy9ET00gZWxlbWVudHM6XHRcblxuICAgICAgICB2YXIgX3dpbmRvd0VsZW1lbnQ7XG5cbiAgICAgICAgdmFyIF9kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICAgICAgdmFyIF9odG1sRWxlbWVudDtcblxuICAgICAgICB2YXIgX2JvZHlFbGVtZW50O1xuXG4gICAgICAgIHZhciBfdGFyZ2V0RWxlbWVudDsgLy90aGUgdGFyZ2V0IGVsZW1lbnQgb2YgdGhpcyBPdmVybGF5U2Nyb2xsYmFycyBvYmplY3RcdFxuXG5cbiAgICAgICAgdmFyIF9ob3N0RWxlbWVudDsgLy90aGUgaG9zdCBlbGVtZW50IG9mIHRoaXMgT3ZlcmxheVNjcm9sbGJhcnMgb2JqZWN0IC0+IG1heSBiZSB0aGUgc2FtZSBhcyB0YXJnZXRFbGVtZW50XHRcblxuXG4gICAgICAgIHZhciBfc2l6ZUF1dG9PYnNlcnZlckVsZW1lbnQ7IC8vb2JzZXJ2ZXMgc2l6ZSBhdXRvIGNoYW5nZXNcdFxuXG5cbiAgICAgICAgdmFyIF9zaXplT2JzZXJ2ZXJFbGVtZW50OyAvL29ic2VydmVzIHNpemUgYW5kIHBhZGRpbmcgY2hhbmdlc1x0XG5cblxuICAgICAgICB2YXIgX3BhZGRpbmdFbGVtZW50OyAvL21hbmFnZXMgdGhlIHBhZGRpbmdcdFxuXG5cbiAgICAgICAgdmFyIF92aWV3cG9ydEVsZW1lbnQ7IC8vaXMgdGhlIHZpZXdwb3J0IG9mIG91ciBzY3JvbGxiYXIgbW9kZWxcdFxuXG5cbiAgICAgICAgdmFyIF9jb250ZW50RWxlbWVudDsgLy90aGUgZWxlbWVudCB3aGljaCBob2xkcyB0aGUgY29udGVudFx0XG5cblxuICAgICAgICB2YXIgX2NvbnRlbnRBcnJhbmdlRWxlbWVudDsgLy9pcyBuZWVkZWQgZm9yIGNvcnJlY3Qgc2l6aW5nIG9mIHRoZSBjb250ZW50IGVsZW1lbnQgKG9ubHkgaWYgbmF0aXZlIHNjcm9sbGJhcnMgYXJlIG92ZXJsYXlzKVx0XG5cblxuICAgICAgICB2YXIgX2NvbnRlbnRHbHVlRWxlbWVudDsgLy9oYXMgYWx3YXlzIHRoZSBzaXplIG9mIHRoZSBjb250ZW50IGVsZW1lbnRcdFxuXG5cbiAgICAgICAgdmFyIF90ZXh0YXJlYUNvdmVyRWxlbWVudDsgLy9vbmx5IGFwcGxpZWQgaWYgdGFyZ2V0IGlzIGEgdGV4dGFyZWEgZWxlbWVudC4gVXNlZCBmb3IgY29ycmVjdCBzaXplIGNhbGN1bGF0aW9uIGFuZCBmb3IgcHJldmVudGlvbiBvZiB1bmNvbnRyb2xsZWQgc2Nyb2xsaW5nXHRcblxuXG4gICAgICAgIHZhciBfc2Nyb2xsYmFyQ29ybmVyRWxlbWVudDtcblxuICAgICAgICB2YXIgX3Njcm9sbGJhckhvcml6b250YWxFbGVtZW50O1xuXG4gICAgICAgIHZhciBfc2Nyb2xsYmFySG9yaXpvbnRhbFRyYWNrRWxlbWVudDtcblxuICAgICAgICB2YXIgX3Njcm9sbGJhckhvcml6b250YWxIYW5kbGVFbGVtZW50O1xuXG4gICAgICAgIHZhciBfc2Nyb2xsYmFyVmVydGljYWxFbGVtZW50O1xuXG4gICAgICAgIHZhciBfc2Nyb2xsYmFyVmVydGljYWxUcmFja0VsZW1lbnQ7XG5cbiAgICAgICAgdmFyIF9zY3JvbGxiYXJWZXJ0aWNhbEhhbmRsZUVsZW1lbnQ7XG5cbiAgICAgICAgdmFyIF93aW5kb3dFbGVtZW50TmF0aXZlO1xuXG4gICAgICAgIHZhciBfZG9jdW1lbnRFbGVtZW50TmF0aXZlO1xuXG4gICAgICAgIHZhciBfdGFyZ2V0RWxlbWVudE5hdGl2ZTtcblxuICAgICAgICB2YXIgX2hvc3RFbGVtZW50TmF0aXZlO1xuXG4gICAgICAgIHZhciBfc2l6ZUF1dG9PYnNlcnZlckVsZW1lbnROYXRpdmU7XG5cbiAgICAgICAgdmFyIF9zaXplT2JzZXJ2ZXJFbGVtZW50TmF0aXZlO1xuXG4gICAgICAgIHZhciBfcGFkZGluZ0VsZW1lbnROYXRpdmU7XG5cbiAgICAgICAgdmFyIF92aWV3cG9ydEVsZW1lbnROYXRpdmU7XG5cbiAgICAgICAgdmFyIF9jb250ZW50RWxlbWVudE5hdGl2ZTsgLy9DYWNoZTpcdFxuXG5cbiAgICAgICAgdmFyIF9ob3N0U2l6ZUNhY2hlO1xuXG4gICAgICAgIHZhciBfY29udGVudFNjcm9sbFNpemVDYWNoZTtcblxuICAgICAgICB2YXIgX2FycmFuZ2VDb250ZW50U2l6ZUNhY2hlO1xuXG4gICAgICAgIHZhciBfaGFzT3ZlcmZsb3dDYWNoZTtcblxuICAgICAgICB2YXIgX2hpZGVPdmVyZmxvd0NhY2hlO1xuXG4gICAgICAgIHZhciBfd2lkdGhBdXRvQ2FjaGU7XG5cbiAgICAgICAgdmFyIF9oZWlnaHRBdXRvQ2FjaGU7XG5cbiAgICAgICAgdmFyIF9jc3NCb3hTaXppbmdDYWNoZTtcblxuICAgICAgICB2YXIgX2Nzc1BhZGRpbmdDYWNoZTtcblxuICAgICAgICB2YXIgX2Nzc0JvcmRlckNhY2hlO1xuXG4gICAgICAgIHZhciBfY3NzTWFyZ2luQ2FjaGU7XG5cbiAgICAgICAgdmFyIF9jc3NEaXJlY3Rpb25DYWNoZTtcblxuICAgICAgICB2YXIgX2Nzc0RpcmVjdGlvbkRldGVjdGVkQ2FjaGU7XG5cbiAgICAgICAgdmFyIF9wYWRkaW5nQWJzb2x1dGVDYWNoZTtcblxuICAgICAgICB2YXIgX2NsaXBBbHdheXNDYWNoZTtcblxuICAgICAgICB2YXIgX2NvbnRlbnRHbHVlU2l6ZUNhY2hlO1xuXG4gICAgICAgIHZhciBfb3ZlcmZsb3dCZWhhdmlvckNhY2hlO1xuXG4gICAgICAgIHZhciBfb3ZlcmZsb3dBbW91bnRDYWNoZTtcblxuICAgICAgICB2YXIgX2lnbm9yZU92ZXJsYXlTY3JvbGxiYXJIaWRpbmdDYWNoZTtcblxuICAgICAgICB2YXIgX2F1dG9VcGRhdGVDYWNoZTtcblxuICAgICAgICB2YXIgX3NpemVBdXRvQ2FwYWJsZUNhY2hlO1xuXG4gICAgICAgIHZhciBfY29udGVudEVsZW1lbnRTY3JvbGxTaXplQ2hhbmdlRGV0ZWN0ZWRDYWNoZTtcblxuICAgICAgICB2YXIgX2hvc3RFbGVtZW50U2l6ZUNoYW5nZURldGVjdGVkQ2FjaGU7XG5cbiAgICAgICAgdmFyIF9zY3JvbGxiYXJzVmlzaWJpbGl0eUNhY2hlO1xuXG4gICAgICAgIHZhciBfc2Nyb2xsYmFyc0F1dG9IaWRlQ2FjaGU7XG5cbiAgICAgICAgdmFyIF9zY3JvbGxiYXJzQ2xpY2tTY3JvbGxpbmdDYWNoZTtcblxuICAgICAgICB2YXIgX3Njcm9sbGJhcnNEcmFnU2Nyb2xsaW5nQ2FjaGU7XG5cbiAgICAgICAgdmFyIF9yZXNpemVDYWNoZTtcblxuICAgICAgICB2YXIgX25vcm1hbGl6ZVJUTENhY2hlO1xuXG4gICAgICAgIHZhciBfY2xhc3NOYW1lQ2FjaGU7XG5cbiAgICAgICAgdmFyIF9vbGRDbGFzc05hbWU7XG5cbiAgICAgICAgdmFyIF90ZXh0YXJlYUF1dG9XcmFwcGluZ0NhY2hlO1xuXG4gICAgICAgIHZhciBfdGV4dGFyZWFJbmZvQ2FjaGU7XG5cbiAgICAgICAgdmFyIF90ZXh0YXJlYVNpemVDYWNoZTtcblxuICAgICAgICB2YXIgX3RleHRhcmVhRHluSGVpZ2h0Q2FjaGU7XG5cbiAgICAgICAgdmFyIF90ZXh0YXJlYUR5bldpZHRoQ2FjaGU7XG5cbiAgICAgICAgdmFyIF9ib2R5TWluU2l6ZUNhY2hlO1xuXG4gICAgICAgIHZhciBfdXBkYXRlQXV0b0NhY2hlID0ge307IC8vTXV0YXRpb25PYnNlcnZlcjpcdFxuXG4gICAgICAgIHZhciBfbXV0YXRpb25PYnNlcnZlckhvc3Q7XG5cbiAgICAgICAgdmFyIF9tdXRhdGlvbk9ic2VydmVyQ29udGVudDtcblxuICAgICAgICB2YXIgX211dGF0aW9uT2JzZXJ2ZXJIb3N0Q2FsbGJhY2s7XG5cbiAgICAgICAgdmFyIF9tdXRhdGlvbk9ic2VydmVyQ29udGVudENhbGxiYWNrO1xuXG4gICAgICAgIHZhciBfbXV0YXRpb25PYnNlcnZlcnNDb25uZWN0ZWQ7XG5cbiAgICAgICAgdmFyIF9tdXRhdGlvbk9ic2VydmVyQXR0cnNUZXh0YXJlYSA9IFsnd3JhcCcsICdjb2xzJywgJ3Jvd3MnXTtcblxuICAgICAgICB2YXIgX211dGF0aW9uT2JzZXJ2ZXJBdHRyc0hvc3QgPSBbTEVYSUNPTi5pLCBMRVhJQ09OLmMsIExFWElDT04ucywgJ29wZW4nXS5jb25jYXQoX3ZpZXdwb3J0QXR0cnNGcm9tVGFyZ2V0KTsgLy9ldmVudHM6XHRcblxuXG4gICAgICAgIHZhciBfZGVzdHJveUV2ZW50cyA9IFtdOyAvL3RleHRhcmVhOlx0XG5cbiAgICAgICAgdmFyIF90ZXh0YXJlYUhhc0ZvY3VzOyAvL3Njcm9sbGJhcnM6XHRcblxuXG4gICAgICAgIHZhciBfc2Nyb2xsYmFyc0F1dG9IaWRlVGltZW91dElkO1xuXG4gICAgICAgIHZhciBfc2Nyb2xsYmFyc0F1dG9IaWRlTW92ZVRpbWVvdXRJZDtcblxuICAgICAgICB2YXIgX3Njcm9sbGJhcnNBdXRvSGlkZURlbGF5O1xuXG4gICAgICAgIHZhciBfc2Nyb2xsYmFyc0F1dG9IaWRlTmV2ZXI7XG5cbiAgICAgICAgdmFyIF9zY3JvbGxiYXJzQXV0b0hpZGVTY3JvbGw7XG5cbiAgICAgICAgdmFyIF9zY3JvbGxiYXJzQXV0b0hpZGVNb3ZlO1xuXG4gICAgICAgIHZhciBfc2Nyb2xsYmFyc0F1dG9IaWRlTGVhdmU7XG5cbiAgICAgICAgdmFyIF9zY3JvbGxiYXJzSGFuZGxlSG92ZXJlZDtcblxuICAgICAgICB2YXIgX3Njcm9sbGJhcnNIYW5kbGVzRGVmaW5lU2Nyb2xsUG9zOyAvL3Jlc2l6ZVx0XG5cblxuICAgICAgICB2YXIgX3Jlc2l6ZU5vbmU7XG5cbiAgICAgICAgdmFyIF9yZXNpemVCb3RoO1xuXG4gICAgICAgIHZhciBfcmVzaXplSG9yaXpvbnRhbDtcblxuICAgICAgICB2YXIgX3Jlc2l6ZVZlcnRpY2FsOyAvLz09PT0gRXZlbnQgTGlzdGVuZXIgPT09PS8vXHRcblxuICAgICAgICAvKipcdFxyXG4gICAgICAgICAqIEFkZHMgb3IgcmVtb3ZlcyBhIGV2ZW50IGxpc3RlbmVyIGZyb20gdGhlIGdpdmVuIGVsZW1lbnQuIFx0XHJcbiAgICAgICAgICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gd2hpY2ggdGhlIGV2ZW50IGxpc3RlbmVyIHNoYWxsIGJlIGFwcGxpZWQgb3IgcmVtb3ZlZC5cdFxyXG4gICAgICAgICAqIEBwYXJhbSBldmVudE5hbWVzIFRoZSBuYW1lKHMpIG9mIHRoZSBldmVudHMuXHRcclxuICAgICAgICAgKiBAcGFyYW0gbGlzdGVuZXIgVGhlIG1ldGhvZCB3aGljaCBzaGFsbCBiZSBjYWxsZWQuXHRcclxuICAgICAgICAgKiBAcGFyYW0gcmVtb3ZlIFRydWUgaWYgdGhlIGhhbmRsZXIgc2hhbGwgYmUgcmVtb3ZlZCwgZmFsc2Ugb3IgdW5kZWZpbmVkIGlmIHRoZSBoYW5kbGVyIHNoYWxsIGJlIGFkZGVkLlx0XHJcbiAgICAgICAgICogQHBhcmFtIHBhc3NpdmVPck9wdGlvbnMgVGhlIG9wdGlvbnMgZm9yIHRoZSBldmVudC5cclxuICAgICAgICAgKi9cblxuXG4gICAgICAgIGZ1bmN0aW9uIHNldHVwUmVzcG9uc2l2ZUV2ZW50TGlzdGVuZXIoZWxlbWVudCwgZXZlbnROYW1lcywgbGlzdGVuZXIsIHJlbW92ZSwgcGFzc2l2ZU9yT3B0aW9ucykge1xuICAgICAgICAgIHZhciBjb2xsZWN0ZWQgPSBDT01QQVRJQklMSVRZLmlzQShldmVudE5hbWVzKSAmJiBDT01QQVRJQklMSVRZLmlzQShsaXN0ZW5lcik7XG4gICAgICAgICAgdmFyIG1ldGhvZCA9IHJlbW92ZSA/ICdyZW1vdmVFdmVudExpc3RlbmVyJyA6ICdhZGRFdmVudExpc3RlbmVyJztcbiAgICAgICAgICB2YXIgb25PZmYgPSByZW1vdmUgPyAnb2ZmJyA6ICdvbic7XG4gICAgICAgICAgdmFyIGV2ZW50cyA9IGNvbGxlY3RlZCA/IGZhbHNlIDogZXZlbnROYW1lcy5zcGxpdChfc3RyU3BhY2UpO1xuICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICB2YXIgcGFzc2l2ZU9yT3B0aW9uc0lzT2JqID0gRlJBTUVXT1JLLmlzUGxhaW5PYmplY3QocGFzc2l2ZU9yT3B0aW9ucyk7XG4gICAgICAgICAgdmFyIHBhc3NpdmUgPSBfc3VwcG9ydFBhc3NpdmVFdmVudHMgJiYgKHBhc3NpdmVPck9wdGlvbnNJc09iaiA/IHBhc3NpdmVPck9wdGlvbnMuX3Bhc3NpdmUgOiBwYXNzaXZlT3JPcHRpb25zKSB8fCBmYWxzZTtcbiAgICAgICAgICB2YXIgY2FwdHVyZSA9IHBhc3NpdmVPck9wdGlvbnNJc09iaiAmJiAocGFzc2l2ZU9yT3B0aW9ucy5fY2FwdHVyZSB8fCBmYWxzZSk7XG4gICAgICAgICAgdmFyIG5hdGl2ZVBhcmFtID0gX3N1cHBvcnRQYXNzaXZlRXZlbnRzID8ge1xuICAgICAgICAgICAgcGFzc2l2ZTogcGFzc2l2ZSxcbiAgICAgICAgICAgIGNhcHR1cmU6IGNhcHR1cmVcbiAgICAgICAgICB9IDogY2FwdHVyZTtcblxuICAgICAgICAgIGlmIChjb2xsZWN0ZWQpIHtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgZXZlbnROYW1lc1tMRVhJQ09OLmxdOyBpKyspIHtcbiAgICAgICAgICAgICAgc2V0dXBSZXNwb25zaXZlRXZlbnRMaXN0ZW5lcihlbGVtZW50LCBldmVudE5hbWVzW2ldLCBsaXN0ZW5lcltpXSwgcmVtb3ZlLCBwYXNzaXZlT3JPcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICg7IGkgPCBldmVudHNbTEVYSUNPTi5sXTsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChfc3VwcG9ydFBhc3NpdmVFdmVudHMpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50WzBdW21ldGhvZF0oZXZlbnRzW2ldLCBsaXN0ZW5lciwgbmF0aXZlUGFyYW0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbb25PZmZdKGV2ZW50c1tpXSwgbGlzdGVuZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYWRkRGVzdHJveUV2ZW50TGlzdGVuZXIoZWxlbWVudCwgZXZlbnROYW1lcywgbGlzdGVuZXIsIHBhc3NpdmUpIHtcbiAgICAgICAgICBzZXR1cFJlc3BvbnNpdmVFdmVudExpc3RlbmVyKGVsZW1lbnQsIGV2ZW50TmFtZXMsIGxpc3RlbmVyLCBmYWxzZSwgcGFzc2l2ZSk7XG5cbiAgICAgICAgICBfZGVzdHJveUV2ZW50cy5wdXNoKENPTVBBVElCSUxJVFkuYmluZChzZXR1cFJlc3BvbnNpdmVFdmVudExpc3RlbmVyLCAwLCBlbGVtZW50LCBldmVudE5hbWVzLCBsaXN0ZW5lciwgdHJ1ZSwgcGFzc2l2ZSkpO1xuICAgICAgICB9IC8vPT09PSBSZXNpemUgT2JzZXJ2ZXIgPT09PS8vXG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQWRkcyBvciByZW1vdmVzIGEgcmVzaXplIG9ic2VydmVyIGZyb20gdGhlIGdpdmVuIGVsZW1lbnQuXHJcbiAgICAgICAgICogQHBhcmFtIHRhcmdldEVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gd2hpY2ggdGhlIHJlc2l6ZSBvYnNlcnZlciBzaGFsbCBiZSBhZGRlZCBvciByZW1vdmVkLlxyXG4gICAgICAgICAqIEBwYXJhbSBvbkVsZW1lbnRSZXNpemVkQ2FsbGJhY2sgVGhlIGNhbGxiYWNrIHdoaWNoIGlzIGZpcmVkIGV2ZXJ5IHRpbWUgdGhlIHJlc2l6ZSBvYnNlcnZlciByZWdpc3RlcnMgYSBzaXplIGNoYW5nZSBvciBmYWxzZSAvIHVuZGVmaW5lZCBpZiB0aGUgcmVzaXplT2JzZXJ2ZXIgc2hhbGwgYmUgcmVtb3ZlZC5cclxuICAgICAgICAgKi9cblxuXG4gICAgICAgIGZ1bmN0aW9uIHNldHVwUmVzaXplT2JzZXJ2ZXIodGFyZ2V0RWxlbWVudCwgb25FbGVtZW50UmVzaXplZENhbGxiYWNrKSB7XG4gICAgICAgICAgaWYgKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciByZXNpemVPYnNlcnZlciA9IENPTVBBVElCSUxJVFkuck8oKTtcbiAgICAgICAgICAgIHZhciBzdHJBbmltYXRpb25TdGFydEV2ZW50ID0gJ2FuaW1hdGlvbnN0YXJ0IG1vekFuaW1hdGlvblN0YXJ0IHdlYmtpdEFuaW1hdGlvblN0YXJ0IE1TQW5pbWF0aW9uU3RhcnQnO1xuICAgICAgICAgICAgdmFyIHN0ckNoaWxkTm9kZXMgPSAnY2hpbGROb2Rlcyc7XG4gICAgICAgICAgICB2YXIgY29uc3RTY3JvbGwgPSAzMzMzMzMzO1xuXG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0RWxlbWVudFtfc3RyU2Nyb2xsVG9wXShjb25zdFNjcm9sbClbX3N0clNjcm9sbExlZnRdKF9pc1JUTCA/IF9ydGxTY3JvbGxCZWhhdmlvci5uID8gLWNvbnN0U2Nyb2xsIDogX3J0bFNjcm9sbEJlaGF2aW9yLmkgPyAwIDogY29uc3RTY3JvbGwgOiBjb25zdFNjcm9sbCk7XG5cbiAgICAgICAgICAgICAgb25FbGVtZW50UmVzaXplZENhbGxiYWNrKCk7XG4gICAgICAgICAgICB9OyAvL2FkZCByZXNpemUgb2JzZXJ2ZXI6XG5cblxuICAgICAgICAgICAgaWYgKG9uRWxlbWVudFJlc2l6ZWRDYWxsYmFjaykge1xuICAgICAgICAgICAgICBpZiAoX3N1cHBvcnRSZXNpemVPYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gdGFyZ2V0RWxlbWVudC5hZGRDbGFzcygnb2JzZXJ2ZWQnKS5hcHBlbmQoZ2VuZXJhdGVEaXYoX2NsYXNzTmFtZVJlc2l6ZU9ic2VydmVyRWxlbWVudCkpLmNvbnRlbnRzKClbMF07XG4gICAgICAgICAgICAgICAgdmFyIG9ic2VydmVyID0gZWxlbWVudFtfc3RyUmVzaXplT2JzZXJ2ZXJQcm9wZXJ0eV0gPSBuZXcgcmVzaXplT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKF9tc2llVmVyc2lvbiA+IDkgfHwgIV9hdXRvVXBkYXRlUmVjb21tZW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldEVsZW1lbnQucHJlcGVuZChnZW5lcmF0ZURpdihfY2xhc3NOYW1lUmVzaXplT2JzZXJ2ZXJFbGVtZW50LCBnZW5lcmF0ZURpdih7XG4gICAgICAgICAgICAgICAgICAgIGM6IF9jbGFzc05hbWVSZXNpemVPYnNlcnZlckl0ZW1FbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBkaXI6ICdsdHInXG4gICAgICAgICAgICAgICAgICB9LCBnZW5lcmF0ZURpdihfY2xhc3NOYW1lUmVzaXplT2JzZXJ2ZXJJdGVtRWxlbWVudCwgZ2VuZXJhdGVEaXYoX2NsYXNzTmFtZVJlc2l6ZU9ic2VydmVySXRlbUZpbmFsRWxlbWVudCkpICsgZ2VuZXJhdGVEaXYoX2NsYXNzTmFtZVJlc2l6ZU9ic2VydmVySXRlbUVsZW1lbnQsIGdlbmVyYXRlRGl2KHtcbiAgICAgICAgICAgICAgICAgICAgYzogX2NsYXNzTmFtZVJlc2l6ZU9ic2VydmVySXRlbUZpbmFsRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICd3aWR0aDogMjAwJTsgaGVpZ2h0OiAyMDAlJ1xuICAgICAgICAgICAgICAgICAgfSkpKSkpO1xuICAgICAgICAgICAgICAgICAgdmFyIG9ic2VydmVyRWxlbWVudCA9IHRhcmdldEVsZW1lbnRbMF1bc3RyQ2hpbGROb2Rlc11bMF1bc3RyQ2hpbGROb2Rlc11bMF07XG4gICAgICAgICAgICAgICAgICB2YXIgc2hyaW5rRWxlbWVudCA9IEZSQU1FV09SSyhvYnNlcnZlckVsZW1lbnRbc3RyQ2hpbGROb2Rlc11bMV0pO1xuICAgICAgICAgICAgICAgICAgdmFyIGV4cGFuZEVsZW1lbnQgPSBGUkFNRVdPUksob2JzZXJ2ZXJFbGVtZW50W3N0ckNoaWxkTm9kZXNdWzBdKTtcbiAgICAgICAgICAgICAgICAgIHZhciBleHBhbmRFbGVtZW50Q2hpbGQgPSBGUkFNRVdPUksoZXhwYW5kRWxlbWVudFswXVtzdHJDaGlsZE5vZGVzXVswXSk7XG4gICAgICAgICAgICAgICAgICB2YXIgd2lkdGhDYWNoZSA9IG9ic2VydmVyRWxlbWVudFtMRVhJQ09OLm9XXTtcbiAgICAgICAgICAgICAgICAgIHZhciBoZWlnaHRDYWNoZSA9IG9ic2VydmVyRWxlbWVudFtMRVhJQ09OLm9IXTtcbiAgICAgICAgICAgICAgICAgIHZhciBpc0RpcnR5O1xuICAgICAgICAgICAgICAgICAgdmFyIHJBRklkO1xuICAgICAgICAgICAgICAgICAgdmFyIGN1cnJXaWR0aDtcbiAgICAgICAgICAgICAgICAgIHZhciBjdXJySGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgdmFyIGZhY3RvciA9IDI7XG4gICAgICAgICAgICAgICAgICB2YXIgbmF0aXZlU2Nyb2xsYmFyU2l6ZSA9IGdsb2JhbHMubmF0aXZlU2Nyb2xsYmFyU2l6ZTsgLy9jYXJlIGRvbid0IG1ha2UgY2hhbmdlcyB0byB0aGlzIG9iamVjdCEhIVxuXG4gICAgICAgICAgICAgICAgICB2YXIgcmVzZXQgPSBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAgdmFyIHNpemVSZXNldFdpZHRoID0gb2JzZXJ2ZXJFbGVtZW50W0xFWElDT04ub1ddICsgbmF0aXZlU2Nyb2xsYmFyU2l6ZS54ICogZmFjdG9yICsgbmF0aXZlU2Nyb2xsYmFyU2l6ZS55ICogZmFjdG9yICsgX292ZXJsYXlTY3JvbGxiYXJEdW1teVNpemUueCArIF9vdmVybGF5U2Nyb2xsYmFyRHVtbXlTaXplLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgIHZhciBzaXplUmVzZXRIZWlnaHQgPSBvYnNlcnZlckVsZW1lbnRbTEVYSUNPTi5vSF0gKyBuYXRpdmVTY3JvbGxiYXJTaXplLnggKiBmYWN0b3IgKyBuYXRpdmVTY3JvbGxiYXJTaXplLnkgKiBmYWN0b3IgKyBfb3ZlcmxheVNjcm9sbGJhckR1bW15U2l6ZS54ICsgX292ZXJsYXlTY3JvbGxiYXJEdW1teVNpemUueTtcclxuICAgICAgICAgICAgICAgICAgICAgdmFyIGV4cGFuZENoaWxkQ1NTID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgIGV4cGFuZENoaWxkQ1NTW19zdHJXaWR0aF0gPSBzaXplUmVzZXRXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgZXhwYW5kQ2hpbGRDU1NbX3N0ckhlaWdodF0gPSBzaXplUmVzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgIGV4cGFuZEVsZW1lbnRDaGlsZC5jc3MoZXhwYW5kQ2hpbGRDU1MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kRWxlbWVudFtfc3RyU2Nyb2xsTGVmdF0oc2l6ZVJlc2V0V2lkdGgpW19zdHJTY3JvbGxUb3BdKHNpemVSZXNldEhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIHNocmlua0VsZW1lbnRbX3N0clNjcm9sbExlZnRdKHNpemVSZXNldFdpZHRoKVtfc3RyU2Nyb2xsVG9wXShzaXplUmVzZXRIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBleHBhbmRFbGVtZW50W19zdHJTY3JvbGxMZWZ0XShjb25zdFNjcm9sbClbX3N0clNjcm9sbFRvcF0oY29uc3RTY3JvbGwpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNocmlua0VsZW1lbnRbX3N0clNjcm9sbExlZnRdKGNvbnN0U2Nyb2xsKVtfc3RyU2Nyb2xsVG9wXShjb25zdFNjcm9sbCk7XG4gICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICB2YXIgb25SZXNpemVkID0gZnVuY3Rpb24gb25SZXNpemVkKCkge1xuICAgICAgICAgICAgICAgICAgICByQUZJZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNEaXJ0eSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aENhY2hlID0gY3VycldpZHRoO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHRDYWNoZSA9IGN1cnJIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICB2YXIgb25TY3JvbGwgPSBmdW5jdGlvbiBvblNjcm9sbChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyV2lkdGggPSBvYnNlcnZlckVsZW1lbnRbTEVYSUNPTi5vV107XG4gICAgICAgICAgICAgICAgICAgIGN1cnJIZWlnaHQgPSBvYnNlcnZlckVsZW1lbnRbTEVYSUNPTi5vSF07XG4gICAgICAgICAgICAgICAgICAgIGlzRGlydHkgPSBjdXJyV2lkdGggIT0gd2lkdGhDYWNoZSB8fCBjdXJySGVpZ2h0ICE9IGhlaWdodENhY2hlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudCAmJiBpc0RpcnR5ICYmICFyQUZJZCkge1xuICAgICAgICAgICAgICAgICAgICAgIENPTVBBVElCSUxJVFkuY0FGKCkockFGSWQpO1xuICAgICAgICAgICAgICAgICAgICAgIHJBRklkID0gQ09NUEFUSUJJTElUWS5yQUYoKShvblJlc2l6ZWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFldmVudCkgb25SZXNpemVkKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzZXQoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBDT01QQVRJQklMSVRZLnBydkQoZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgIENPTVBBVElCSUxJVFkuc3RwUChldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICB2YXIgZXhwYW5kQ2hpbGRDU1MgPSB7fTtcbiAgICAgICAgICAgICAgICAgIHZhciBvYnNlcnZlckVsZW1lbnRDU1MgPSB7fTtcbiAgICAgICAgICAgICAgICAgIHNldFRvcFJpZ2h0Qm90dG9tTGVmdChvYnNlcnZlckVsZW1lbnRDU1MsIF9zdHJFbXB0eSwgWy0oKG5hdGl2ZVNjcm9sbGJhclNpemUueSArIDEpICogZmFjdG9yKSwgbmF0aXZlU2Nyb2xsYmFyU2l6ZS54ICogLWZhY3RvciwgbmF0aXZlU2Nyb2xsYmFyU2l6ZS55ICogLWZhY3RvciwgLSgobmF0aXZlU2Nyb2xsYmFyU2l6ZS54ICsgMSkgKiBmYWN0b3IpXSk7XG4gICAgICAgICAgICAgICAgICBGUkFNRVdPUksob2JzZXJ2ZXJFbGVtZW50KS5jc3Mob2JzZXJ2ZXJFbGVtZW50Q1NTKTtcbiAgICAgICAgICAgICAgICAgIGV4cGFuZEVsZW1lbnQub24oX3N0clNjcm9sbCwgb25TY3JvbGwpO1xuICAgICAgICAgICAgICAgICAgc2hyaW5rRWxlbWVudC5vbihfc3RyU2Nyb2xsLCBvblNjcm9sbCk7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRFbGVtZW50Lm9uKHN0ckFuaW1hdGlvblN0YXJ0RXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgb25TY3JvbGwoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgfSk7IC8vbGV0cyBhc3N1bWUgdGhhdCB0aGUgZGl2cyB3aWxsIG5ldmVyIGJlIHRoYXQgbGFyZ2UgYW5kIGEgY29uc3RhbnQgdmFsdWUgaXMgZW5vdWdoXG5cbiAgICAgICAgICAgICAgICAgIGV4cGFuZENoaWxkQ1NTW19zdHJXaWR0aF0gPSBjb25zdFNjcm9sbDtcbiAgICAgICAgICAgICAgICAgIGV4cGFuZENoaWxkQ1NTW19zdHJIZWlnaHRdID0gY29uc3RTY3JvbGw7XG4gICAgICAgICAgICAgICAgICBleHBhbmRFbGVtZW50Q2hpbGQuY3NzKGV4cGFuZENoaWxkQ1NTKTtcbiAgICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHZhciBhdHRhY2hFdmVudCA9IF9kb2N1bWVudEVsZW1lbnROYXRpdmUuYXR0YWNoRXZlbnQ7XG4gICAgICAgICAgICAgICAgICB2YXIgaXNJRSA9IF9tc2llVmVyc2lvbiAhPT0gdW5kZWZpbmVkJDE7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChhdHRhY2hFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbGVtZW50LnByZXBlbmQoZ2VuZXJhdGVEaXYoX2NsYXNzTmFtZVJlc2l6ZU9ic2VydmVyRWxlbWVudCkpO1xuICAgICAgICAgICAgICAgICAgICBmaW5kRmlyc3QodGFyZ2V0RWxlbWVudCwgX3N0ckRvdCArIF9jbGFzc05hbWVSZXNpemVPYnNlcnZlckVsZW1lbnQpWzBdLmF0dGFjaEV2ZW50KCdvbnJlc2l6ZScsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvYmogPSBfZG9jdW1lbnRFbGVtZW50TmF0aXZlLmNyZWF0ZUVsZW1lbnQoVFlQRVMubyk7XG5cbiAgICAgICAgICAgICAgICAgICAgb2JqLnNldEF0dHJpYnV0ZShMRVhJQ09OLnRpLCAnLTEnKTtcbiAgICAgICAgICAgICAgICAgICAgb2JqLnNldEF0dHJpYnV0ZShMRVhJQ09OLmMsIF9jbGFzc05hbWVSZXNpemVPYnNlcnZlckVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIG9iai5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHduZCA9IHRoaXMuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICAgICAgICAgICAgICAgIHduZC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgd25kLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIG9iai50eXBlID0gJ3RleHQvaHRtbCc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0lFKSB0YXJnZXRFbGVtZW50LnByZXBlbmQob2JqKTtcbiAgICAgICAgICAgICAgICAgICAgb2JqLmRhdGEgPSAnYWJvdXQ6YmxhbmsnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzSUUpIHRhcmdldEVsZW1lbnQucHJlcGVuZChvYmopO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbGVtZW50Lm9uKHN0ckFuaW1hdGlvblN0YXJ0RXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAodGFyZ2V0RWxlbWVudFswXSA9PT0gX3NpemVPYnNlcnZlckVsZW1lbnROYXRpdmUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlyZWN0aW9uQ2hhbmdlZCA9IGZ1bmN0aW9uIGRpcmVjdGlvbkNoYW5nZWQoKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZGlyID0gX2hvc3RFbGVtZW50LmNzcygnZGlyZWN0aW9uJyk7XG5cbiAgICAgICAgICAgICAgICAgIHZhciBjc3MgPSB7fTtcbiAgICAgICAgICAgICAgICAgIHZhciBzY3JvbGxMZWZ0VmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoZGlyICE9PSBfY3NzRGlyZWN0aW9uRGV0ZWN0ZWRDYWNoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlyID09PSAnbHRyJykge1xuICAgICAgICAgICAgICAgICAgICAgIGNzc1tfc3RyTGVmdF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgIGNzc1tfc3RyUmlnaHRdID0gX3N0ckF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdFZhbHVlID0gY29uc3RTY3JvbGw7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgY3NzW19zdHJMZWZ0XSA9IF9zdHJBdXRvO1xuICAgICAgICAgICAgICAgICAgICAgIGNzc1tfc3RyUmlnaHRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0VmFsdWUgPSBfcnRsU2Nyb2xsQmVoYXZpb3IubiA/IC1jb25zdFNjcm9sbCA6IF9ydGxTY3JvbGxCZWhhdmlvci5pID8gMCA6IGNvbnN0U2Nyb2xsO1xuICAgICAgICAgICAgICAgICAgICB9IC8vZXhlY3V0aW9uIG9yZGVyIGlzIGltcG9ydGFudCBmb3IgSUUhISFcblxuXG4gICAgICAgICAgICAgICAgICAgIF9zaXplT2JzZXJ2ZXJFbGVtZW50LmNoaWxkcmVuKCkuZXEoMCkuY3NzKGNzcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgX3NpemVPYnNlcnZlckVsZW1lbnRbX3N0clNjcm9sbExlZnRdKHNjcm9sbExlZnRWYWx1ZSlbX3N0clNjcm9sbFRvcF0oY29uc3RTY3JvbGwpO1xuXG4gICAgICAgICAgICAgICAgICAgIF9jc3NEaXJlY3Rpb25EZXRlY3RlZENhY2hlID0gZGlyO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25DaGFuZ2VkKCk7XG4gICAgICAgICAgICAgICAgYWRkRGVzdHJveUV2ZW50TGlzdGVuZXIodGFyZ2V0RWxlbWVudCwgX3N0clNjcm9sbCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uQ2hhbmdlZCgpKSB1cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgIENPTVBBVElCSUxJVFkucHJ2RChldmVudCk7XG4gICAgICAgICAgICAgICAgICBDT01QQVRJQklMSVRZLnN0cFAoZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IC8vcmVtb3ZlIHJlc2l6ZSBvYnNlcnZlcjpcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoX3N1cHBvcnRSZXNpemVPYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gdGFyZ2V0RWxlbWVudC5jb250ZW50cygpWzBdO1xuICAgICAgICAgICAgICAgIHZhciByZXNpemVPYnNlcnZlck9iaiA9IGVsZW1lbnRbX3N0clJlc2l6ZU9ic2VydmVyUHJvcGVydHldO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc2l6ZU9ic2VydmVyT2JqKSB7XG4gICAgICAgICAgICAgICAgICByZXNpemVPYnNlcnZlck9iai5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICBkZWxldGUgZWxlbWVudFtfc3RyUmVzaXplT2JzZXJ2ZXJQcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbW92ZSh0YXJnZXRFbGVtZW50LmNoaWxkcmVuKF9zdHJEb3QgKyBfY2xhc3NOYW1lUmVzaXplT2JzZXJ2ZXJFbGVtZW50KS5lcSgwKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRnJlZXplcyBvciB1bmZyZWV6ZXMgdGhlIGdpdmVuIHJlc2l6ZSBvYnNlcnZlci5cclxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0RWxlbWVudCBUaGUgZWxlbWVudCB0byB3aGljaCB0aGUgdGFyZ2V0IHJlc2l6ZSBvYnNlcnZlciBpcyBhcHBsaWVkLlxyXG4gICAgICAgICAqIEBwYXJhbSBmcmVlemUgVHJ1ZSBpZiB0aGUgcmVzaXplIG9ic2VydmVyIHNoYWxsIGJlIGZyb3plbiwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBmcmVlemVSZXNpemVPYnNlcnZlcih0YXJnZXRFbGVtZW50LCBmcmVlemUpIHtcclxuICAgICAgICAgICAgaWYgKHRhcmdldEVsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYoZnJlZXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9zdXBwb3J0UmVzaXplT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB0YXJnZXRFbGVtZW50LmNvbnRlbnRzKClbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRbX3N0clJlc2l6ZU9ic2VydmVyUHJvcGVydHldLnVub2JzZXJ2ZShlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEVsZW1lbnQgPSB0YXJnZXRFbGVtZW50LmNoaWxkcmVuKF9zdHJEb3QgKyBfY2xhc3NOYW1lUmVzaXplT2JzZXJ2ZXJFbGVtZW50KS5lcSgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHcgPSB0YXJnZXRFbGVtZW50LmNzcyhfc3RyV2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IHRhcmdldEVsZW1lbnQuY3NzKF9zdHJIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3NzID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzc1tfc3RyV2lkdGhdID0gdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzW19zdHJIZWlnaHRdID0gaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RWxlbWVudC5jc3MoY3NzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3N1cHBvcnRSZXNpemVPYnNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IHRhcmdldEVsZW1lbnQuY29udGVudHMoKVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFtfc3RyUmVzaXplT2JzZXJ2ZXJQcm9wZXJ0eV0ub2JzZXJ2ZShlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjc3MgPSB7IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzc1tfc3RySGVpZ2h0XSA9IF9zdHJFbXB0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzW19zdHJXaWR0aF0gPSBfc3RyRW1wdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEVsZW1lbnQuY2hpbGRyZW4oX3N0ckRvdCArIF9jbGFzc05hbWVSZXNpemVPYnNlcnZlckVsZW1lbnQpLmVxKDApLmNzcyhjc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAqL1xuICAgICAgICAvLz09PT0gTXV0YXRpb24gT2JzZXJ2ZXJzID09PT0vL1xuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENyZWF0ZXMgTXV0YXRpb25PYnNlcnZlcnMgZm9yIHRoZSBob3N0IGFuZCBjb250ZW50IEVsZW1lbnQgaWYgdGhleSBhcmUgc3VwcG9ydGVkLlxyXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlTXV0YXRpb25PYnNlcnZlcnMoKSB7XG4gICAgICAgICAgaWYgKF9zdXBwb3J0TXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgdmFyIG11dGF0aW9uT2JzZXJ2ZXJDb250ZW50TGFnID0gMTE7XG4gICAgICAgICAgICB2YXIgbXV0YXRpb25PYnNlcnZlciA9IENPTVBBVElCSUxJVFkubU8oKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50TGFzdFVwZGF0ZSA9IENPTVBBVElCSUxJVFkubm93KCk7XG4gICAgICAgICAgICB2YXIgbXV0YXRpb25UYXJnZXQ7XG4gICAgICAgICAgICB2YXIgbXV0YXRpb25BdHRyTmFtZTtcbiAgICAgICAgICAgIHZhciBtdXRhdGlvbklzQ2xhc3M7XG4gICAgICAgICAgICB2YXIgb2xkTXV0YXRpb25WYWw7XG4gICAgICAgICAgICB2YXIgbmV3Q2xhc3NWYWw7XG4gICAgICAgICAgICB2YXIgaG9zdENsYXNzTmFtZVJlZ2V4O1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRUaW1lb3V0O1xuICAgICAgICAgICAgdmFyIG5vdztcbiAgICAgICAgICAgIHZhciBzaXplQXV0bztcbiAgICAgICAgICAgIHZhciBhY3Rpb247XG5cbiAgICAgICAgICAgIF9tdXRhdGlvbk9ic2VydmVySG9zdENhbGxiYWNrID0gZnVuY3Rpb24gX211dGF0aW9uT2JzZXJ2ZXJIb3N0Q2FsbGJhY2sobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgIHZhciBkb1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICB2YXIgZG9VcGRhdGVGb3JjZSA9IGZhbHNlO1xuICAgICAgICAgICAgICB2YXIgbXV0YXRpb247XG4gICAgICAgICAgICAgIHZhciBtdXRhdGVkQXR0cnMgPSBbXTtcblxuICAgICAgICAgICAgICBpZiAoX2luaXRpYWxpemVkICYmICFfc2xlZXBpbmcpIHtcbiAgICAgICAgICAgICAgICBlYWNoKG11dGF0aW9ucywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgbXV0YXRpb24gPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgbXV0YXRpb25UYXJnZXQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgICAgICAgICAgICBtdXRhdGlvbkF0dHJOYW1lID0gbXV0YXRpb24uYXR0cmlidXRlTmFtZTtcbiAgICAgICAgICAgICAgICAgIG11dGF0aW9uSXNDbGFzcyA9IG11dGF0aW9uQXR0ck5hbWUgPT09IExFWElDT04uYztcbiAgICAgICAgICAgICAgICAgIG9sZE11dGF0aW9uVmFsID0gbXV0YXRpb24ub2xkVmFsdWU7XG4gICAgICAgICAgICAgICAgICBuZXdDbGFzc1ZhbCA9IG11dGF0aW9uVGFyZ2V0LmNsYXNzTmFtZTtcblxuICAgICAgICAgICAgICAgICAgaWYgKF9kb21FeGlzdHMgJiYgbXV0YXRpb25Jc0NsYXNzICYmICFkb1VwZGF0ZUZvcmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIG9sZCBjbGFzcyB2YWx1ZSBjb250YWlucyBfY2xhc3NOYW1lSG9zdEVsZW1lbnRGb3JlaWduIGFuZCBuZXcgY2xhc3MgdmFsdWUgZG9lc24ndFxuICAgICAgICAgICAgICAgICAgICBpZiAob2xkTXV0YXRpb25WYWwuaW5kZXhPZihfY2xhc3NOYW1lSG9zdEVsZW1lbnRGb3JlaWduKSA+IC0xICYmIG5ld0NsYXNzVmFsLmluZGV4T2YoX2NsYXNzTmFtZUhvc3RFbGVtZW50Rm9yZWlnbikgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaG9zdENsYXNzTmFtZVJlZ2V4ID0gY3JlYXRlSG9zdENsYXNzTmFtZVJlZ0V4cCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICBfaG9zdEVsZW1lbnROYXRpdmUuY2xhc3NOYW1lID0gbmV3Q2xhc3NWYWwuc3BsaXQoX3N0clNwYWNlKS5jb25jYXQob2xkTXV0YXRpb25WYWwuc3BsaXQoX3N0clNwYWNlKS5maWx0ZXIoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuYW1lLm1hdGNoKGhvc3RDbGFzc05hbWVSZWdleCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSkpLmpvaW4oX3N0clNwYWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICBkb1VwZGF0ZSA9IGRvVXBkYXRlRm9yY2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGlmICghZG9VcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9VcGRhdGUgPSBtdXRhdGlvbklzQ2xhc3MgPyBob3N0Q2xhc3NOYW1lc0NoYW5nZWQob2xkTXV0YXRpb25WYWwsIG5ld0NsYXNzVmFsKSA6IG11dGF0aW9uQXR0ck5hbWUgPT09IExFWElDT04ucyA/IG9sZE11dGF0aW9uVmFsICE9PSBtdXRhdGlvblRhcmdldFtMRVhJQ09OLnNdLmNzc1RleHQgOiB0cnVlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBtdXRhdGVkQXR0cnMucHVzaChtdXRhdGlvbkF0dHJOYW1lKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB1cGRhdGVWaWV3cG9ydEF0dHJzRnJvbVRhcmdldChtdXRhdGVkQXR0cnMpO1xuICAgICAgICAgICAgICAgIGlmIChkb1VwZGF0ZSkgX2Jhc2UudXBkYXRlKGRvVXBkYXRlRm9yY2UgfHwgX3N0ckF1dG8pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGRvVXBkYXRlO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgX211dGF0aW9uT2JzZXJ2ZXJDb250ZW50Q2FsbGJhY2sgPSBmdW5jdGlvbiBfbXV0YXRpb25PYnNlcnZlckNvbnRlbnRDYWxsYmFjayhtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgdmFyIGRvVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgIHZhciBtdXRhdGlvbjtcblxuICAgICAgICAgICAgICBpZiAoX2luaXRpYWxpemVkICYmICFfc2xlZXBpbmcpIHtcbiAgICAgICAgICAgICAgICBlYWNoKG11dGF0aW9ucywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgbXV0YXRpb24gPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgZG9VcGRhdGUgPSBpc1Vua25vd25NdXRhdGlvbihtdXRhdGlvbik7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gIWRvVXBkYXRlO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRvVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICBub3cgPSBDT01QQVRJQklMSVRZLm5vdygpO1xuICAgICAgICAgICAgICAgICAgc2l6ZUF1dG8gPSBfaGVpZ2h0QXV0b0NhY2hlIHx8IF93aWR0aEF1dG9DYWNoZTtcblxuICAgICAgICAgICAgICAgICAgYWN0aW9uID0gZnVuY3Rpb24gYWN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV9kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50TGFzdFVwZGF0ZSA9IG5vdzsgLy9pZiBjb2xzLCByb3dzIG9yIHdyYXAgYXR0ciB3YXMgY2hhbmdlZFxuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKF9pc1RleHRhcmVhKSB0ZXh0YXJlYVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChzaXplQXV0bykgdXBkYXRlKCk7ZWxzZSBfYmFzZS51cGRhdGUoX3N0ckF1dG8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoY29udGVudFRpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uT2JzZXJ2ZXJDb250ZW50TGFnIDw9IDAgfHwgbm93IC0gY29udGVudExhc3RVcGRhdGUgPiBtdXRhdGlvbk9ic2VydmVyQ29udGVudExhZyB8fCAhc2l6ZUF1dG8pIGFjdGlvbigpO2Vsc2UgY29udGVudFRpbWVvdXQgPSBzZXRUaW1lb3V0KGFjdGlvbiwgbXV0YXRpb25PYnNlcnZlckNvbnRlbnRMYWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBkb1VwZGF0ZTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIF9tdXRhdGlvbk9ic2VydmVySG9zdCA9IG5ldyBtdXRhdGlvbk9ic2VydmVyKF9tdXRhdGlvbk9ic2VydmVySG9zdENhbGxiYWNrKTtcbiAgICAgICAgICAgIF9tdXRhdGlvbk9ic2VydmVyQ29udGVudCA9IG5ldyBtdXRhdGlvbk9ic2VydmVyKF9tdXRhdGlvbk9ic2VydmVyQ29udGVudENhbGxiYWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29ubmVjdHMgdGhlIE11dGF0aW9uT2JzZXJ2ZXJzIGlmIHRoZXkgYXJlIHN1cHBvcnRlZC5cclxuICAgICAgICAgKi9cblxuXG4gICAgICAgIGZ1bmN0aW9uIGNvbm5lY3RNdXRhdGlvbk9ic2VydmVycygpIHtcbiAgICAgICAgICBpZiAoX3N1cHBvcnRNdXRhdGlvbk9ic2VydmVyICYmICFfbXV0YXRpb25PYnNlcnZlcnNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIF9tdXRhdGlvbk9ic2VydmVySG9zdC5vYnNlcnZlKF9ob3N0RWxlbWVudE5hdGl2ZSwge1xuICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBfbXV0YXRpb25PYnNlcnZlckF0dHJzSG9zdFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF9tdXRhdGlvbk9ic2VydmVyQ29udGVudC5vYnNlcnZlKF9pc1RleHRhcmVhID8gX3RhcmdldEVsZW1lbnROYXRpdmUgOiBfY29udGVudEVsZW1lbnROYXRpdmUsIHtcbiAgICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICAgICAgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YnRyZWU6ICFfaXNUZXh0YXJlYSxcbiAgICAgICAgICAgICAgY2hpbGRMaXN0OiAhX2lzVGV4dGFyZWEsXG4gICAgICAgICAgICAgIGNoYXJhY3RlckRhdGE6ICFfaXNUZXh0YXJlYSxcbiAgICAgICAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBfaXNUZXh0YXJlYSA/IF9tdXRhdGlvbk9ic2VydmVyQXR0cnNUZXh0YXJlYSA6IF9tdXRhdGlvbk9ic2VydmVyQXR0cnNIb3N0XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgX211dGF0aW9uT2JzZXJ2ZXJzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGlzY29ubmVjdHMgdGhlIE11dGF0aW9uT2JzZXJ2ZXJzIGlmIHRoZXkgYXJlIHN1cHBvcnRlZC5cclxuICAgICAgICAgKi9cblxuXG4gICAgICAgIGZ1bmN0aW9uIGRpc2Nvbm5lY3RNdXRhdGlvbk9ic2VydmVycygpIHtcbiAgICAgICAgICBpZiAoX3N1cHBvcnRNdXRhdGlvbk9ic2VydmVyICYmIF9tdXRhdGlvbk9ic2VydmVyc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgX211dGF0aW9uT2JzZXJ2ZXJIb3N0LmRpc2Nvbm5lY3QoKTtcblxuICAgICAgICAgICAgX211dGF0aW9uT2JzZXJ2ZXJDb250ZW50LmRpc2Nvbm5lY3QoKTtcblxuICAgICAgICAgICAgX211dGF0aW9uT2JzZXJ2ZXJzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vPT09PSBFdmVudHMgb2YgZWxlbWVudHMgPT09PS8vXG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhpcyBtZXRob2QgZ2V0cyBjYWxsZWQgZXZlcnkgdGltZSB0aGUgaG9zdCBlbGVtZW50IGdldHMgcmVzaXplZC4gSU1QT1JUQU5UOiBQYWRkaW5nIGNoYW5nZXMgYXJlIGRldGVjdGVkIHRvbyEhXHJcbiAgICAgICAgICogSXQgcmVmcmVzaGVzIHRoZSBob3N0UmVzaXplZEV2ZW50QXJncyBhbmQgdGhlIGhvc3RTaXplUmVzaXplQ2FjaGUuXHJcbiAgICAgICAgICogSWYgdGhlcmUgYXJlIGFueSBzaXplIGNoYW5nZXMsIHRoZSB1cGRhdGUgbWV0aG9kIGdldHMgY2FsbGVkLlxyXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgZnVuY3Rpb24gaG9zdE9uUmVzaXplZCgpIHtcbiAgICAgICAgICBpZiAoIV9zbGVlcGluZykge1xuICAgICAgICAgICAgdmFyIGNoYW5nZWQ7XG4gICAgICAgICAgICB2YXIgaG9zdFNpemUgPSB7XG4gICAgICAgICAgICAgIHc6IF9zaXplT2JzZXJ2ZXJFbGVtZW50TmF0aXZlW0xFWElDT04uc1ddLFxuICAgICAgICAgICAgICBoOiBfc2l6ZU9ic2VydmVyRWxlbWVudE5hdGl2ZVtMRVhJQ09OLnNIXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNoYW5nZWQgPSBjaGVja0NhY2hlKGhvc3RTaXplLCBfaG9zdEVsZW1lbnRTaXplQ2hhbmdlRGV0ZWN0ZWRDYWNoZSk7XG4gICAgICAgICAgICBfaG9zdEVsZW1lbnRTaXplQ2hhbmdlRGV0ZWN0ZWRDYWNoZSA9IGhvc3RTaXplO1xuICAgICAgICAgICAgaWYgKGNoYW5nZWQpIHVwZGF0ZSh7XG4gICAgICAgICAgICAgIF9ob3N0U2l6ZUNoYW5nZWQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbW91c2UgZW50ZXIgZXZlbnQgb2YgdGhlIGhvc3QgZWxlbWVudC4gVGhpcyBldmVudCBpcyBvbmx5IG5lZWRlZCBmb3IgdGhlIGF1dG9IaWRlIGZlYXR1cmUuXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiBob3N0T25Nb3VzZUVudGVyKCkge1xuICAgICAgICAgIGlmIChfc2Nyb2xsYmFyc0F1dG9IaWRlTGVhdmUpIHJlZnJlc2hTY3JvbGxiYXJzQXV0b0hpZGUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG1vdXNlIGxlYXZlIGV2ZW50IG9mIHRoZSBob3N0IGVsZW1lbnQuIFRoaXMgZXZlbnQgaXMgb25seSBuZWVkZWQgZm9yIHRoZSBhdXRvSGlkZSBmZWF0dXJlLlxyXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgZnVuY3Rpb24gaG9zdE9uTW91c2VMZWF2ZSgpIHtcbiAgICAgICAgICBpZiAoX3Njcm9sbGJhcnNBdXRvSGlkZUxlYXZlICYmICFfYm9keUVsZW1lbnQuaGFzQ2xhc3MoX2NsYXNzTmFtZURyYWdnaW5nKSkgcmVmcmVzaFNjcm9sbGJhcnNBdXRvSGlkZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG1vdXNlIG1vdmUgZXZlbnQgb2YgdGhlIGhvc3QgZWxlbWVudC4gVGhpcyBldmVudCBpcyBvbmx5IG5lZWRlZCBmb3IgdGhlIGF1dG9IaWRlIFwibW92ZVwiIGZlYXR1cmUuXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiBob3N0T25Nb3VzZU1vdmUoKSB7XG4gICAgICAgICAgaWYgKF9zY3JvbGxiYXJzQXV0b0hpZGVNb3ZlKSB7XG4gICAgICAgICAgICByZWZyZXNoU2Nyb2xsYmFyc0F1dG9IaWRlKHRydWUpO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF9zY3JvbGxiYXJzQXV0b0hpZGVNb3ZlVGltZW91dElkKTtcbiAgICAgICAgICAgIF9zY3JvbGxiYXJzQXV0b0hpZGVNb3ZlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmIChfc2Nyb2xsYmFyc0F1dG9IaWRlTW92ZSAmJiAhX2Rlc3Ryb3llZCkgcmVmcmVzaFNjcm9sbGJhcnNBdXRvSGlkZShmYWxzZSk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcclxuICAgICAgICAgKiBQcmV2ZW50cyB0ZXh0IGZyb20gZGVzZWxlY3Rpb24gaWYgYXR0YWNoZWQgdG8gdGhlIGRvY3VtZW50IGVsZW1lbnQgb24gdGhlIG1vdXNlZG93biBldmVudCBvZiBhIERPTSBlbGVtZW50LlxyXG4gICAgICAgICAqIEBwYXJhbSBldmVudCBUaGUgc2VsZWN0IHN0YXJ0IGV2ZW50LlxyXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgZnVuY3Rpb24gZG9jdW1lbnRPblNlbGVjdFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgICAgQ09NUEFUSUJJTElUWS5wcnZEKGV2ZW50KTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXHRcclxuICAgICAgICAgKiBBIGNhbGxiYWNrIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGEgZWxlbWVudCBoYXMgbG9hZGVkLlx0XHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVPbkxvYWRDYWxsYmFjayhldmVudCkge1xuICAgICAgICAgIHZhciBlbG0gPSBGUkFNRVdPUksoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICBlYWNoVXBkYXRlT25Mb2FkKGZ1bmN0aW9uIChpLCB1cGRhdGVPbkxvYWRTZWxlY3Rvcikge1xuICAgICAgICAgICAgaWYgKGVsbS5pcyh1cGRhdGVPbkxvYWRTZWxlY3RvcikpIHtcbiAgICAgICAgICAgICAgdXBkYXRlKHtcbiAgICAgICAgICAgICAgICBfY29udGVudFNpemVDaGFuZ2VkOiB0cnVlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRkcyBvciByZW1vdmVzIG1vdXNlICYgdG91Y2ggZXZlbnRzIG9mIHRoZSBob3N0IGVsZW1lbnQuIChmb3IgaGFuZGxpbmcgYXV0by1oaWRpbmcgb2YgdGhlIHNjcm9sbGJhcnMpXHJcbiAgICAgICAgKiBAcGFyYW0gZGVzdHJveSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZXZlbnRzIHNoYWxsIGJlIGFkZGVkIG9yIHJlbW92ZWQuXHJcbiAgICAgICAgKi9cblxuXG4gICAgICAgIGZ1bmN0aW9uIHNldHVwSG9zdE1vdXNlVG91Y2hFdmVudHMoZGVzdHJveSkge1xuICAgICAgICAgIGlmICghZGVzdHJveSkgc2V0dXBIb3N0TW91c2VUb3VjaEV2ZW50cyh0cnVlKTtcbiAgICAgICAgICBzZXR1cFJlc3BvbnNpdmVFdmVudExpc3RlbmVyKF9ob3N0RWxlbWVudCwgX3N0ck1vdXNlVG91Y2hNb3ZlRXZlbnQuc3BsaXQoX3N0clNwYWNlKVswXSwgaG9zdE9uTW91c2VNb3ZlLCAhX3Njcm9sbGJhcnNBdXRvSGlkZU1vdmUgfHwgZGVzdHJveSwgdHJ1ZSk7XG4gICAgICAgICAgc2V0dXBSZXNwb25zaXZlRXZlbnRMaXN0ZW5lcihfaG9zdEVsZW1lbnQsIFtfc3RyTW91c2VFbnRlciwgX3N0ck1vdXNlTGVhdmVdLCBbaG9zdE9uTW91c2VFbnRlciwgaG9zdE9uTW91c2VMZWF2ZV0sICFfc2Nyb2xsYmFyc0F1dG9IaWRlTGVhdmUgfHwgZGVzdHJveSwgdHJ1ZSk7IC8vaWYgdGhlIHBsdWdpbiBpcyBpbml0aWFsaXplZCBhbmQgdGhlIG1vdXNlIGlzIG92ZXIgdGhlIGhvc3QgZWxlbWVudCwgbWFrZSB0aGUgc2Nyb2xsYmFycyB2aXNpYmxlXG5cbiAgICAgICAgICBpZiAoIV9pbml0aWFsaXplZCAmJiAhZGVzdHJveSkgX2hvc3RFbGVtZW50Lm9uZSgnbW91c2VvdmVyJywgaG9zdE9uTW91c2VFbnRlcik7XG4gICAgICAgIH0gLy89PT09IFVwZGF0ZSBEZXRlY3Rpb24gPT09PS8vXG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTWVhc3VyZXMgdGhlIG1pbiB3aWR0aCBhbmQgbWluIGhlaWdodCBvZiB0aGUgYm9keSBlbGVtZW50IGFuZCByZWZyZXNoZXMgdGhlIHJlbGF0ZWQgY2FjaGUuXHJcbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIG1pbiB3aWR0aCBvciBtaW4gaGVpZ2h0IGhhcyBjaGFuZ2VkLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiBib2R5TWluU2l6ZUNoYW5nZWQoKSB7XG4gICAgICAgICAgdmFyIGJvZHlNaW5TaXplID0ge307XG5cbiAgICAgICAgICBpZiAoX2lzQm9keSAmJiBfY29udGVudEFycmFuZ2VFbGVtZW50KSB7XG4gICAgICAgICAgICBib2R5TWluU2l6ZS53ID0gcGFyc2VUb1plcm9Pck51bWJlcihfY29udGVudEFycmFuZ2VFbGVtZW50LmNzcyhfc3RyTWluTWludXMgKyBfc3RyV2lkdGgpKTtcbiAgICAgICAgICAgIGJvZHlNaW5TaXplLmggPSBwYXJzZVRvWmVyb09yTnVtYmVyKF9jb250ZW50QXJyYW5nZUVsZW1lbnQuY3NzKF9zdHJNaW5NaW51cyArIF9zdHJIZWlnaHQpKTtcbiAgICAgICAgICAgIGJvZHlNaW5TaXplLmMgPSBjaGVja0NhY2hlKGJvZHlNaW5TaXplLCBfYm9keU1pblNpemVDYWNoZSk7XG4gICAgICAgICAgICBib2R5TWluU2l6ZS5mID0gdHJ1ZTsgLy9mbGFnIGZvciBcIm1lYXN1cmVkIGF0IGxlYXN0IG9uY2VcIlxuICAgICAgICAgIH1cblxuICAgICAgICAgIF9ib2R5TWluU2l6ZUNhY2hlID0gYm9keU1pblNpemU7XG4gICAgICAgICAgcmV0dXJuICEhYm9keU1pblNpemUuYztcbiAgICAgICAgfVxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGNsYXNzIG5hbWVzIHJlYWxseSBjaGFuZ2VkIChuZXcgY2xhc3Mgd2l0aG91dCBwbHVnaW4gaG9zdCBwcmVmaXgpXHJcbiAgICAgICAgICogQHBhcmFtIG9sZENsYXNzTmFtZXMgVGhlIG9sZCBDbGFzc05hbWUgc3RyaW5nIG9yIGFycmF5LlxyXG4gICAgICAgICAqIEBwYXJhbSBuZXdDbGFzc05hbWVzIFRoZSBuZXcgQ2xhc3NOYW1lIHN0cmluZyBvciBhcnJheS5cclxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgY2xhc3MgbmFtZXMgaGFzIHJlYWxseSBjaGFuZ2VkLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiBob3N0Q2xhc3NOYW1lc0NoYW5nZWQob2xkQ2xhc3NOYW1lcywgbmV3Q2xhc3NOYW1lcykge1xuICAgICAgICAgIHZhciBjdXJyQ2xhc3NlcyA9IF90eXBlb2YobmV3Q2xhc3NOYW1lcykgPT0gVFlQRVMucyA/IG5ld0NsYXNzTmFtZXMuc3BsaXQoX3N0clNwYWNlKSA6IFtdO1xuICAgICAgICAgIHZhciBvbGRDbGFzc2VzID0gX3R5cGVvZihvbGRDbGFzc05hbWVzKSA9PSBUWVBFUy5zID8gb2xkQ2xhc3NOYW1lcy5zcGxpdChfc3RyU3BhY2UpIDogW107XG4gICAgICAgICAgdmFyIGRpZmYgPSBnZXRBcnJheURpZmZlcmVuY2VzKG9sZENsYXNzZXMsIGN1cnJDbGFzc2VzKTsgLy8gcmVtb3ZlIG5vbmUgdGhlbWUgZnJvbSBkaWZmIGxpc3QgdG8gcHJldmVudCB1cGRhdGVcblxuICAgICAgICAgIHZhciBpZHggPSBpbkFycmF5KF9jbGFzc05hbWVUaGVtZU5vbmUsIGRpZmYpO1xuICAgICAgICAgIHZhciBpO1xuICAgICAgICAgIHZhciByZWdleDtcbiAgICAgICAgICBpZiAoaWR4ID4gLTEpIGRpZmYuc3BsaWNlKGlkeCwgMSk7XG5cbiAgICAgICAgICBpZiAoZGlmZltMRVhJQ09OLmxdID4gMCkge1xuICAgICAgICAgICAgcmVnZXggPSBjcmVhdGVIb3N0Q2xhc3NOYW1lUmVnRXhwKHRydWUsIHRydWUpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGlmZi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoIWRpZmZbaV0ubWF0Y2gocmVnZXgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtdXRhdGlvbiBpcyBub3QgZnJvbSBhIGZyb20gdGhlIHBsdWdpbiBnZW5lcmF0ZWQgZWxlbWVudC4gSWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIGEgdGV4dGFyZWEgdGhlIG11dGF0aW9uIGlzIGFsd2F5cyB1bmtub3duLlxyXG4gICAgICAgICAqIEBwYXJhbSBtdXRhdGlvbiBUaGUgbXV0YXRpb24gd2hpY2ggc2hhbGwgYmUgY2hlY2tlZC5cclxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgbXV0YXRpb24gaXMgZnJvbSBhIHVua25vd24gZWxlbWVudCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgZnVuY3Rpb24gaXNVbmtub3duTXV0YXRpb24obXV0YXRpb24pIHtcbiAgICAgICAgICB2YXIgYXR0cmlidXRlTmFtZSA9IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWU7XG4gICAgICAgICAgdmFyIG11dGF0aW9uVGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICAgIHZhciBtdXRhdGlvblR5cGUgPSBtdXRhdGlvbi50eXBlO1xuICAgICAgICAgIHZhciBzdHJDbG9zZXN0ID0gJ2Nsb3Nlc3QnO1xuICAgICAgICAgIGlmIChtdXRhdGlvblRhcmdldCA9PT0gX2NvbnRlbnRFbGVtZW50TmF0aXZlKSByZXR1cm4gYXR0cmlidXRlTmFtZSA9PT0gbnVsbDtcblxuICAgICAgICAgIGlmIChtdXRhdGlvblR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiAoYXR0cmlidXRlTmFtZSA9PT0gTEVYSUNPTi5jIHx8IGF0dHJpYnV0ZU5hbWUgPT09IExFWElDT04ucykgJiYgIV9pc1RleHRhcmVhKSB7XG4gICAgICAgICAgICAvL2lnbm9yZSBjbGFzc05hbWUgY2hhbmdlcyBieSB0aGUgcGx1Z2luXHRcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVOYW1lID09PSBMRVhJQ09OLmMgJiYgRlJBTUVXT1JLKG11dGF0aW9uVGFyZ2V0KS5oYXNDbGFzcyhfY2xhc3NOYW1lSG9zdEVsZW1lbnQpKSByZXR1cm4gaG9zdENsYXNzTmFtZXNDaGFuZ2VkKG11dGF0aW9uLm9sZFZhbHVlLCBtdXRhdGlvblRhcmdldC5jbGFzc05hbWUpOyAvL29ubHkgZG8gaXQgb2YgYnJvd3NlciBzdXBwb3J0IGl0IG5hdGl2ZWx5XHRcblxuICAgICAgICAgICAgaWYgKF90eXBlb2YobXV0YXRpb25UYXJnZXRbc3RyQ2xvc2VzdF0pICE9IFRZUEVTLmYpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uVGFyZ2V0W3N0ckNsb3Nlc3RdKF9zdHJEb3QgKyBfY2xhc3NOYW1lUmVzaXplT2JzZXJ2ZXJFbGVtZW50KSAhPT0gbnVsbCB8fCBtdXRhdGlvblRhcmdldFtzdHJDbG9zZXN0XShfc3RyRG90ICsgX2NsYXNzTmFtZVNjcm9sbGJhcikgIT09IG51bGwgfHwgbXV0YXRpb25UYXJnZXRbc3RyQ2xvc2VzdF0oX3N0ckRvdCArIF9jbGFzc05hbWVTY3JvbGxiYXJDb3JuZXIpICE9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjb250ZW50IHNpemUgd2FzIGNoYW5nZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGlzIG1ldGhvZCB3YXMgY2FsbGVkLlxyXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBjb250ZW50IHNpemUgd2FzIGNoYW5nZWQsIGZhbHNlIG90aGVyd2lzZS5cclxuICAgICAgICAgKi9cblxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUF1dG9Db250ZW50U2l6ZUNoYW5nZWQoKSB7XG4gICAgICAgICAgaWYgKF9zbGVlcGluZykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIHZhciBjb250ZW50TWVhc3VyZUVsZW1lbnQgPSBnZXRDb250ZW50TWVhc3VyZUVsZW1lbnQoKTtcbiAgICAgICAgICB2YXIgdGV4dGFyZWFWYWx1ZUxlbmd0aCA9IF9pc1RleHRhcmVhICYmIF93aWR0aEF1dG9DYWNoZSAmJiAhX3RleHRhcmVhQXV0b1dyYXBwaW5nQ2FjaGUgPyBfdGFyZ2V0RWxlbWVudC52YWwoKS5sZW5ndGggOiAwO1xuICAgICAgICAgIHZhciBzZXRDU1MgPSAhX211dGF0aW9uT2JzZXJ2ZXJzQ29ubmVjdGVkICYmIF93aWR0aEF1dG9DYWNoZSAmJiAhX2lzVGV4dGFyZWE7XG4gICAgICAgICAgdmFyIGNzcyA9IHt9O1xuICAgICAgICAgIHZhciBmbG9hdDtcbiAgICAgICAgICB2YXIgYm9keU1pblNpemVDO1xuICAgICAgICAgIHZhciBjaGFuZ2VkO1xuICAgICAgICAgIHZhciBjb250ZW50RWxlbWVudFNjcm9sbFNpemU7XG5cbiAgICAgICAgICBpZiAoc2V0Q1NTKSB7XG4gICAgICAgICAgICBmbG9hdCA9IF9jb250ZW50RWxlbWVudC5jc3MoX3N0ckZsb2F0KTtcbiAgICAgICAgICAgIGNzc1tfc3RyRmxvYXRdID0gX2lzUlRMID8gX3N0clJpZ2h0IDogX3N0ckxlZnQ7XG4gICAgICAgICAgICBjc3NbX3N0cldpZHRoXSA9IF9zdHJBdXRvO1xuXG4gICAgICAgICAgICBfY29udGVudEVsZW1lbnQuY3NzKGNzcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGVudEVsZW1lbnRTY3JvbGxTaXplID0ge1xuICAgICAgICAgICAgdzogY29udGVudE1lYXN1cmVFbGVtZW50W0xFWElDT04uc1ddICsgdGV4dGFyZWFWYWx1ZUxlbmd0aCxcbiAgICAgICAgICAgIGg6IGNvbnRlbnRNZWFzdXJlRWxlbWVudFtMRVhJQ09OLnNIXSArIHRleHRhcmVhVmFsdWVMZW5ndGhcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKHNldENTUykge1xuICAgICAgICAgICAgY3NzW19zdHJGbG9hdF0gPSBmbG9hdDtcbiAgICAgICAgICAgIGNzc1tfc3RyV2lkdGhdID0gX3N0ckh1bmRyZWRQZXJjZW50O1xuXG4gICAgICAgICAgICBfY29udGVudEVsZW1lbnQuY3NzKGNzcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm9keU1pblNpemVDID0gYm9keU1pblNpemVDaGFuZ2VkKCk7XG4gICAgICAgICAgY2hhbmdlZCA9IGNoZWNrQ2FjaGUoY29udGVudEVsZW1lbnRTY3JvbGxTaXplLCBfY29udGVudEVsZW1lbnRTY3JvbGxTaXplQ2hhbmdlRGV0ZWN0ZWRDYWNoZSk7XG4gICAgICAgICAgX2NvbnRlbnRFbGVtZW50U2Nyb2xsU2l6ZUNoYW5nZURldGVjdGVkQ2FjaGUgPSBjb250ZW50RWxlbWVudFNjcm9sbFNpemU7XG4gICAgICAgICAgcmV0dXJuIGNoYW5nZWQgfHwgYm9keU1pblNpemVDO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgdHJ1ZSB3aGVuIGEgYXR0cmlidXRlIHdoaWNoIHRoZSBNdXRhdGlvbk9ic2VydmVyIHdvdWxkIG9ic2VydmUgaGFzIGNoYW5nZWQuICBcclxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBvbmUgb2YgdGhlIGF0dHJpYnV0ZXMgd2hpY2ggYSBNdXRhdGlvbk9ic2VydmVyIHdvdWxkIG9ic2VydmUgaGFzIGNoYW5nZWQsIGZhbHNlIG9yIHVuZGVmaW5lZCBvdGhlcndpc2UuXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiBtZWFuaW5nZnVsQXR0cnNDaGFuZ2VkKCkge1xuICAgICAgICAgIGlmIChfc2xlZXBpbmcgfHwgX211dGF0aW9uT2JzZXJ2ZXJzQ29ubmVjdGVkKSByZXR1cm47XG4gICAgICAgICAgdmFyIGVsZW07XG4gICAgICAgICAgdmFyIGN1cnI7XG4gICAgICAgICAgdmFyIGNhY2hlO1xuICAgICAgICAgIHZhciBjaGFuZ2VkQXR0cnMgPSBbXTtcbiAgICAgICAgICB2YXIgY2hlY2tzID0gW3tcbiAgICAgICAgICAgIF9lbGVtOiBfaG9zdEVsZW1lbnQsXG4gICAgICAgICAgICBfYXR0cnM6IF9tdXRhdGlvbk9ic2VydmVyQXR0cnNIb3N0LmNvbmNhdCgnOnZpc2libGUnKVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIF9lbGVtOiBfaXNUZXh0YXJlYSA/IF90YXJnZXRFbGVtZW50IDogdW5kZWZpbmVkJDEsXG4gICAgICAgICAgICBfYXR0cnM6IF9tdXRhdGlvbk9ic2VydmVyQXR0cnNUZXh0YXJlYVxuICAgICAgICAgIH1dO1xuICAgICAgICAgIGVhY2goY2hlY2tzLCBmdW5jdGlvbiAoaW5kZXgsIGNoZWNrKSB7XG4gICAgICAgICAgICBlbGVtID0gY2hlY2suX2VsZW07XG5cbiAgICAgICAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgICAgICAgIGVhY2goY2hlY2suX2F0dHJzLCBmdW5jdGlvbiAoaW5kZXgsIGF0dHIpIHtcbiAgICAgICAgICAgICAgICBjdXJyID0gYXR0ci5jaGFyQXQoMCkgPT09ICc6JyA/IGVsZW0uaXMoYXR0cikgOiBlbGVtLmF0dHIoYXR0cik7XG4gICAgICAgICAgICAgICAgY2FjaGUgPSBfdXBkYXRlQXV0b0NhY2hlW2F0dHJdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrQ2FjaGUoY3VyciwgY2FjaGUpKSB7XG4gICAgICAgICAgICAgICAgICBjaGFuZ2VkQXR0cnMucHVzaChhdHRyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfdXBkYXRlQXV0b0NhY2hlW2F0dHJdID0gY3VycjtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdXBkYXRlVmlld3BvcnRBdHRyc0Zyb21UYXJnZXQoY2hhbmdlZEF0dHJzKTtcbiAgICAgICAgICByZXR1cm4gY2hhbmdlZEF0dHJzW0xFWElDT04ubF0gPiAwO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENoZWNrcyBpcyBhIENTUyBQcm9wZXJ0eSBvZiBhIGNoaWxkIGVsZW1lbnQgaXMgYWZmZWN0aW5nIHRoZSBzY3JvbGwgc2l6ZSBvZiB0aGUgY29udGVudC5cclxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlOYW1lIFRoZSBDU1MgcHJvcGVydHkgbmFtZS5cclxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgYWZmZWN0aW5nIHRoZSBjb250ZW50IHNjcm9sbCBzaXplLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiBpc1NpemVBZmZlY3RpbmdDU1NQcm9wZXJ0eShwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICBpZiAoIV9pbml0aWFsaXplZCkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgdmFyIGZsZXhHcm93ID0gJ2ZsZXgtZ3Jvdyc7XG4gICAgICAgICAgdmFyIGZsZXhTaHJpbmsgPSAnZmxleC1zaHJpbmsnO1xuICAgICAgICAgIHZhciBmbGV4QmFzaXMgPSAnZmxleC1iYXNpcyc7XG4gICAgICAgICAgdmFyIGFmZmVjdGluZ1Byb3BzWCA9IFtfc3RyV2lkdGgsIF9zdHJNaW5NaW51cyArIF9zdHJXaWR0aCwgX3N0ck1heE1pbnVzICsgX3N0cldpZHRoLCBfc3RyTWFyZ2luTWludXMgKyBfc3RyTGVmdCwgX3N0ck1hcmdpbk1pbnVzICsgX3N0clJpZ2h0LCBfc3RyTGVmdCwgX3N0clJpZ2h0LCAnZm9udC13ZWlnaHQnLCAnd29yZC1zcGFjaW5nJywgZmxleEdyb3csIGZsZXhTaHJpbmssIGZsZXhCYXNpc107XG4gICAgICAgICAgdmFyIGFmZmVjdGluZ1Byb3BzWENvbnRlbnRCb3ggPSBbX3N0clBhZGRpbmdNaW51cyArIF9zdHJMZWZ0LCBfc3RyUGFkZGluZ01pbnVzICsgX3N0clJpZ2h0LCBfc3RyQm9yZGVyTWludXMgKyBfc3RyTGVmdCArIF9zdHJXaWR0aCwgX3N0ckJvcmRlck1pbnVzICsgX3N0clJpZ2h0ICsgX3N0cldpZHRoXTtcbiAgICAgICAgICB2YXIgYWZmZWN0aW5nUHJvcHNZID0gW19zdHJIZWlnaHQsIF9zdHJNaW5NaW51cyArIF9zdHJIZWlnaHQsIF9zdHJNYXhNaW51cyArIF9zdHJIZWlnaHQsIF9zdHJNYXJnaW5NaW51cyArIF9zdHJUb3AsIF9zdHJNYXJnaW5NaW51cyArIF9zdHJCb3R0b20sIF9zdHJUb3AsIF9zdHJCb3R0b20sICdsaW5lLWhlaWdodCcsIGZsZXhHcm93LCBmbGV4U2hyaW5rLCBmbGV4QmFzaXNdO1xuICAgICAgICAgIHZhciBhZmZlY3RpbmdQcm9wc1lDb250ZW50Qm94ID0gW19zdHJQYWRkaW5nTWludXMgKyBfc3RyVG9wLCBfc3RyUGFkZGluZ01pbnVzICsgX3N0ckJvdHRvbSwgX3N0ckJvcmRlck1pbnVzICsgX3N0clRvcCArIF9zdHJXaWR0aCwgX3N0ckJvcmRlck1pbnVzICsgX3N0ckJvdHRvbSArIF9zdHJXaWR0aF07XG4gICAgICAgICAgdmFyIF9zdHJTID0gJ3MnO1xuICAgICAgICAgIHZhciBfc3RyVlMgPSAndi1zJztcbiAgICAgICAgICB2YXIgY2hlY2tYID0gX292ZXJmbG93QmVoYXZpb3JDYWNoZS54ID09PSBfc3RyUyB8fCBfb3ZlcmZsb3dCZWhhdmlvckNhY2hlLnggPT09IF9zdHJWUztcbiAgICAgICAgICB2YXIgY2hlY2tZID0gX292ZXJmbG93QmVoYXZpb3JDYWNoZS55ID09PSBfc3RyUyB8fCBfb3ZlcmZsb3dCZWhhdmlvckNhY2hlLnkgPT09IF9zdHJWUztcbiAgICAgICAgICB2YXIgc2l6ZUlzQWZmZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIHZhciBjaGVja1Byb3BlcnR5TmFtZSA9IGZ1bmN0aW9uIGNoZWNrUHJvcGVydHlOYW1lKGFyciwgbmFtZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJbTEVYSUNPTi5sXTsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChhcnJbaV0gPT09IG5hbWUpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChjaGVja1kpIHtcbiAgICAgICAgICAgIHNpemVJc0FmZmVjdGVkID0gY2hlY2tQcm9wZXJ0eU5hbWUoYWZmZWN0aW5nUHJvcHNZLCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgaWYgKCFzaXplSXNBZmZlY3RlZCAmJiAhX2lzQm9yZGVyQm94KSBzaXplSXNBZmZlY3RlZCA9IGNoZWNrUHJvcGVydHlOYW1lKGFmZmVjdGluZ1Byb3BzWUNvbnRlbnRCb3gsIHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNoZWNrWCAmJiAhc2l6ZUlzQWZmZWN0ZWQpIHtcbiAgICAgICAgICAgIHNpemVJc0FmZmVjdGVkID0gY2hlY2tQcm9wZXJ0eU5hbWUoYWZmZWN0aW5nUHJvcHNYLCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgaWYgKCFzaXplSXNBZmZlY3RlZCAmJiAhX2lzQm9yZGVyQm94KSBzaXplSXNBZmZlY3RlZCA9IGNoZWNrUHJvcGVydHlOYW1lKGFmZmVjdGluZ1Byb3BzWENvbnRlbnRCb3gsIHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHNpemVJc0FmZmVjdGVkO1xuICAgICAgICB9IC8vPT09PSBVcGRhdGUgPT09PS8vXG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2V0cyB0aGUgYXR0cmlidXRlIHZhbHVlcyBvZiB0aGUgdmlld3BvcnQgZWxlbWVudCB0byB0aGUgdmFsdWVzIGZyb20gdGhlIHRhcmdldCBlbGVtZW50LlxyXG4gICAgICAgICAqIFRoZSB2YWx1ZSBvZiBhIGF0dHJpYnV0ZSBpcyBvbmx5IHNldCBpZiB0aGUgYXR0cmlidXRlIGlzIHdoaXRlbGlzdGVkLlxyXG4gICAgICAgICAqIEBhdHRycyBhdHRycyBUaGUgYXJyYXkgb2YgYXR0cmlidXRlcyB3aGljaCBzaGFsbCBiZSBzZXQgb3IgdW5kZWZpbmVkIGlmIGFsbCB3aGl0ZWxpc3RlZCBzaGFsbCBiZSBzZXQuXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVWaWV3cG9ydEF0dHJzRnJvbVRhcmdldChhdHRycykge1xuICAgICAgICAgIGF0dHJzID0gYXR0cnMgfHwgX3ZpZXdwb3J0QXR0cnNGcm9tVGFyZ2V0O1xuICAgICAgICAgIGVhY2goYXR0cnMsIGZ1bmN0aW9uIChpbmRleCwgYXR0cikge1xuICAgICAgICAgICAgaWYgKENPTVBBVElCSUxJVFkuaW5BKGF0dHIsIF92aWV3cG9ydEF0dHJzRnJvbVRhcmdldCkgPiAtMSkge1xuICAgICAgICAgICAgICB2YXIgdGFyZ2V0QXR0ciA9IF90YXJnZXRFbGVtZW50LmF0dHIoYXR0cik7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGUodGFyZ2V0QXR0cikgPT0gVFlQRVMucykge1xuICAgICAgICAgICAgICAgIF92aWV3cG9ydEVsZW1lbnQuYXR0cihhdHRyLCB0YXJnZXRBdHRyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdmlld3BvcnRFbGVtZW50LnJlbW92ZUF0dHIoYXR0cik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcclxuICAgICAgICAgKiBVcGRhdGVzIHRoZSB2YXJpYWJsZXMgYW5kIHNpemUgb2YgdGhlIHRleHRhcmVhIGVsZW1lbnQsIGFuZCBtYW5hZ2VzIHRoZSBzY3JvbGwgb24gbmV3IGxpbmUgb3IgbmV3IGNoYXJhY3Rlci5cclxuICAgICAgICAgKi9cblxuXG4gICAgICAgIGZ1bmN0aW9uIHRleHRhcmVhVXBkYXRlKCkge1xuICAgICAgICAgIGlmICghX3NsZWVwaW5nKSB7XG4gICAgICAgICAgICB2YXIgd3JhcEF0dHJPZmYgPSAhX3RleHRhcmVhQXV0b1dyYXBwaW5nQ2FjaGU7XG4gICAgICAgICAgICB2YXIgbWluV2lkdGggPSBfdmlld3BvcnRTaXplLnc7XG4gICAgICAgICAgICB2YXIgbWluSGVpZ2h0ID0gX3ZpZXdwb3J0U2l6ZS5oO1xuICAgICAgICAgICAgdmFyIGNzcyA9IHt9O1xuICAgICAgICAgICAgdmFyIGRvTWVhc3VyZSA9IF93aWR0aEF1dG9DYWNoZSB8fCB3cmFwQXR0ck9mZjtcbiAgICAgICAgICAgIHZhciBvcmlnV2lkdGg7XG4gICAgICAgICAgICB2YXIgd2lkdGg7XG4gICAgICAgICAgICB2YXIgb3JpZ0hlaWdodDtcbiAgICAgICAgICAgIHZhciBoZWlnaHQ7IC8vcmVzZXQgbWluIHNpemVcblxuICAgICAgICAgICAgY3NzW19zdHJNaW5NaW51cyArIF9zdHJXaWR0aF0gPSBfc3RyRW1wdHk7XG4gICAgICAgICAgICBjc3NbX3N0ck1pbk1pbnVzICsgX3N0ckhlaWdodF0gPSBfc3RyRW1wdHk7IC8vc2V0IHdpZHRoIGF1dG9cblxuICAgICAgICAgICAgY3NzW19zdHJXaWR0aF0gPSBfc3RyQXV0bztcblxuICAgICAgICAgICAgX3RhcmdldEVsZW1lbnQuY3NzKGNzcyk7IC8vbWVhc3VyZSB3aWR0aFxuXG5cbiAgICAgICAgICAgIG9yaWdXaWR0aCA9IF90YXJnZXRFbGVtZW50TmF0aXZlW0xFWElDT04ub1ddO1xuICAgICAgICAgICAgd2lkdGggPSBkb01lYXN1cmUgPyBNQVRILm1heChvcmlnV2lkdGgsIF90YXJnZXRFbGVtZW50TmF0aXZlW0xFWElDT04uc1ddIC0gMSkgOiAxO1xuICAgICAgICAgICAgLyp3aWR0aCArPSAoX3dpZHRoQXV0b0NhY2hlID8gX21hcmdpblggKyAoIV9pc0JvcmRlckJveCA/IHdyYXBBdHRyT2ZmID8gMCA6IF9wYWRkaW5nWCArIF9ib3JkZXJYIDogMCkgOiAwKTsqL1xuICAgICAgICAgICAgLy9zZXQgbWVhc3VyZWQgd2lkdGhcblxuICAgICAgICAgICAgY3NzW19zdHJXaWR0aF0gPSBfd2lkdGhBdXRvQ2FjaGUgPyBfc3RyQXV0b1xuICAgICAgICAgICAgLyp3aWR0aCovXG4gICAgICAgICAgICA6IF9zdHJIdW5kcmVkUGVyY2VudDtcbiAgICAgICAgICAgIGNzc1tfc3RyTWluTWludXMgKyBfc3RyV2lkdGhdID0gX3N0ckh1bmRyZWRQZXJjZW50OyAvL3NldCBoZWlnaHQgYXV0b1xuXG4gICAgICAgICAgICBjc3NbX3N0ckhlaWdodF0gPSBfc3RyQXV0bztcblxuICAgICAgICAgICAgX3RhcmdldEVsZW1lbnQuY3NzKGNzcyk7IC8vbWVhc3VyZSBoZWlnaHRcblxuXG4gICAgICAgICAgICBvcmlnSGVpZ2h0ID0gX3RhcmdldEVsZW1lbnROYXRpdmVbTEVYSUNPTi5vSF07XG4gICAgICAgICAgICBoZWlnaHQgPSBNQVRILm1heChvcmlnSGVpZ2h0LCBfdGFyZ2V0RWxlbWVudE5hdGl2ZVtMRVhJQ09OLnNIXSAtIDEpOyAvL2FwcGVuZCBjb3JyZWN0IHNpemUgdmFsdWVzXG5cbiAgICAgICAgICAgIGNzc1tfc3RyV2lkdGhdID0gd2lkdGg7XG4gICAgICAgICAgICBjc3NbX3N0ckhlaWdodF0gPSBoZWlnaHQ7XG5cbiAgICAgICAgICAgIF90ZXh0YXJlYUNvdmVyRWxlbWVudC5jc3MoY3NzKTsgLy9hcHBseSBtaW4gd2lkdGggLyBtaW4gaGVpZ2h0IHRvIHByZXZlbnQgdGV4dGFyZWEgY29sbGFwc2luZ1xuXG5cbiAgICAgICAgICAgIGNzc1tfc3RyTWluTWludXMgKyBfc3RyV2lkdGhdID0gbWluV2lkdGhcbiAgICAgICAgICAgIC8qKyAoIV9pc0JvcmRlckJveCAmJiBfd2lkdGhBdXRvQ2FjaGUgPyBfcGFkZGluZ1ggKyBfYm9yZGVyWCA6IDApKi9cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNzc1tfc3RyTWluTWludXMgKyBfc3RySGVpZ2h0XSA9IG1pbkhlaWdodFxuICAgICAgICAgICAgLyorICghX2lzQm9yZGVyQm94ICYmIF9oZWlnaHRBdXRvQ2FjaGUgPyBfcGFkZGluZ1kgKyBfYm9yZGVyWSA6IDApKi9cbiAgICAgICAgICAgIDtcblxuICAgICAgICAgICAgX3RhcmdldEVsZW1lbnQuY3NzKGNzcyk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIF9vcmlnaW5hbFdpZHRoOiBvcmlnV2lkdGgsXG4gICAgICAgICAgICAgIF9vcmlnaW5hbEhlaWdodDogb3JpZ0hlaWdodCxcbiAgICAgICAgICAgICAgX2R5bmFtaWNXaWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgIF9keW5hbWljSGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFVwZGF0ZXMgdGhlIHBsdWdpbiBhbmQgRE9NIHRvIHRoZSBjdXJyZW50IG9wdGlvbnMuXHJcbiAgICAgICAgICogVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGlmIGEgdXBkYXRlIGlzIDEwMCUgcmVxdWlyZWQuXHJcbiAgICAgICAgICogQHBhcmFtIHVwZGF0ZUhpbnRzIEEgb2JqZWN0cyB3aGljaCBjb250YWlucyBoaW50cyBmb3IgdGhpcyB1cGRhdGU6XHJcbiAgICAgICAgICoge1xyXG4gICAgICAgICAqICAgX2hvc3RTaXplQ2hhbmdlZCA6IGJvb2xlYW4sXHJcbiAgICAgICAgICogICBfY29udGVudFNpemVDaGFuZ2VkIDogYm9vbGVhbixcclxuICAgICAgICAgKiAgIF9mb3JjZSA6IGJvb2xlYW4sICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9PSBwcmV2ZW50U3dhbGxvd2luZ1xyXG4gICAgICAgICAqICAgX2NoYW5nZWRPcHRpb25zIDogeyB9LCAgICAgICAgICAgICAgICAgICAgICAgID09IHByZXZlbnRTd2FsbG93aW5nICYmIHByZXZlbnRTbGVlcFxyXG4gICAgICAgICogIH1cclxuICAgICAgICAgKi9cblxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZSh1cGRhdGVIaW50cykge1xuICAgICAgICAgIGNsZWFyVGltZW91dChfc3dhbGxvd2VkVXBkYXRlVGltZW91dCk7XG4gICAgICAgICAgdXBkYXRlSGludHMgPSB1cGRhdGVIaW50cyB8fCB7fTtcbiAgICAgICAgICBfc3dhbGxvd2VkVXBkYXRlSGludHMuX2hvc3RTaXplQ2hhbmdlZCB8PSB1cGRhdGVIaW50cy5faG9zdFNpemVDaGFuZ2VkO1xuICAgICAgICAgIF9zd2FsbG93ZWRVcGRhdGVIaW50cy5fY29udGVudFNpemVDaGFuZ2VkIHw9IHVwZGF0ZUhpbnRzLl9jb250ZW50U2l6ZUNoYW5nZWQ7XG4gICAgICAgICAgX3N3YWxsb3dlZFVwZGF0ZUhpbnRzLl9mb3JjZSB8PSB1cGRhdGVIaW50cy5fZm9yY2U7XG4gICAgICAgICAgdmFyIG5vdyA9IENPTVBBVElCSUxJVFkubm93KCk7XG4gICAgICAgICAgdmFyIGhvc3RTaXplQ2hhbmdlZCA9ICEhX3N3YWxsb3dlZFVwZGF0ZUhpbnRzLl9ob3N0U2l6ZUNoYW5nZWQ7XG4gICAgICAgICAgdmFyIGNvbnRlbnRTaXplQ2hhbmdlZCA9ICEhX3N3YWxsb3dlZFVwZGF0ZUhpbnRzLl9jb250ZW50U2l6ZUNoYW5nZWQ7XG4gICAgICAgICAgdmFyIGZvcmNlID0gISFfc3dhbGxvd2VkVXBkYXRlSGludHMuX2ZvcmNlO1xuICAgICAgICAgIHZhciBjaGFuZ2VkT3B0aW9ucyA9IHVwZGF0ZUhpbnRzLl9jaGFuZ2VkT3B0aW9ucztcbiAgICAgICAgICB2YXIgc3dhbGxvdyA9IF9pbml0aWFsaXplZCAmJiAhX2Rlc3Ryb3llZCAmJiAhZm9yY2UgJiYgIWNoYW5nZWRPcHRpb25zICYmIG5vdyAtIF9sYXN0VXBkYXRlVGltZSA8IF9zd2FsbG93VXBkYXRlTGFnICYmICFfaGVpZ2h0QXV0b0NhY2hlICYmICFfd2lkdGhBdXRvQ2FjaGU7XG4gICAgICAgICAgdmFyIGRpc3BsYXlJc0hpZGRlbjtcbiAgICAgICAgICBpZiAoc3dhbGxvdykgX3N3YWxsb3dlZFVwZGF0ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHVwZGF0ZSwgX3N3YWxsb3dVcGRhdGVMYWcpOyAvL2Fib3J0IHVwZGF0ZSBkdWUgdG86XG4gICAgICAgICAgLy9kZXN0cm95ZWRcbiAgICAgICAgICAvL3N3YWxsb3dpbmdcbiAgICAgICAgICAvL3NsZWVwaW5nXG4gICAgICAgICAgLy9ob3N0IGlzIGhpZGRlbiBvciBoYXMgZmFsc2UgZGlzcGxheVxuXG4gICAgICAgICAgaWYgKF9kZXN0cm95ZWQgfHwgc3dhbGxvdyB8fCBfc2xlZXBpbmcgJiYgIWNoYW5nZWRPcHRpb25zIHx8IF9pbml0aWFsaXplZCAmJiAhZm9yY2UgJiYgKGRpc3BsYXlJc0hpZGRlbiA9IF9ob3N0RWxlbWVudC5pcygnOmhpZGRlbicpKSB8fCBfaG9zdEVsZW1lbnQuY3NzKCdkaXNwbGF5JykgPT09ICdpbmxpbmUnKSByZXR1cm47XG4gICAgICAgICAgX2xhc3RVcGRhdGVUaW1lID0gbm93O1xuICAgICAgICAgIF9zd2FsbG93ZWRVcGRhdGVIaW50cyA9IHt9OyAvL2lmIHNjcm9sbGJhciBzdHlsaW5nIGlzIHBvc3NpYmxlIGFuZCBuYXRpdmUgc2Nyb2xsYmFycyBhcmVuJ3Qgb3ZlcmxhaWQgdGhlIHNjcm9sbGJhciBzdHlsaW5nIHdpbGwgYmUgYXBwbGllZCB3aGljaCBoaWRlcyB0aGUgbmF0aXZlIHNjcm9sbGJhcnMgY29tcGxldGVseS5cblxuICAgICAgICAgIGlmIChfbmF0aXZlU2Nyb2xsYmFyU3R5bGluZyAmJiAhKF9uYXRpdmVTY3JvbGxiYXJJc092ZXJsYWlkLnggJiYgX25hdGl2ZVNjcm9sbGJhcklzT3ZlcmxhaWQueSkpIHtcbiAgICAgICAgICAgIC8vbmF0aXZlIHNjcm9sbGJhcnMgYXJlIGhpZGRlbiwgc28gY2hhbmdlIHRoZSB2YWx1ZXMgdG8gemVyb1xuICAgICAgICAgICAgX25hdGl2ZVNjcm9sbGJhclNpemUueCA9IDA7XG4gICAgICAgICAgICBfbmF0aXZlU2Nyb2xsYmFyU2l6ZS55ID0gMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9yZWZyZXNoIG5hdGl2ZSBzY3JvbGxiYXIgc2l6ZSAoaW4gY2FzZSBvZiB6b29tKVxuICAgICAgICAgICAgX25hdGl2ZVNjcm9sbGJhclNpemUgPSBleHRlbmREZWVwKHt9LCBnbG9iYWxzLm5hdGl2ZVNjcm9sbGJhclNpemUpO1xuICAgICAgICAgIH0gLy8gU2Nyb2xsYmFyIHBhZGRpbmcgaXMgbmVlZGVkIGZvciBmaXJlZm94LCBiZWNhdXNlIGZpcmVmb3ggaGlkZXMgc2Nyb2xsYmFyIGF1dG9tYXRpY2FsbHkgaWYgdGhlIHNpemUgb2YgdGhlIGRpdiBpcyB0b28gc21hbGwuXG4gICAgICAgICAgLy8gVGhlIGNhbGN1bGF0aW9uOiBbc2Nyb2xsYmFyIHNpemUgKzMgKjNdXG4gICAgICAgICAgLy8gKCszIGJlY2F1c2Ugb2YgcG9zc2libGUgZGVjb3JhdGlvbiBlLmcuIGJvcmRlcnMsIG1hcmdpbnMgZXRjLiwgYnV0IG9ubHkgaWYgbmF0aXZlIHNjcm9sbGJhciBpcyBOT1QgYSBvdmVybGFpZCBzY3JvbGxiYXIpXG4gICAgICAgICAgLy8gKCozIGJlY2F1c2UgKDEpaW5jcmVhc2UgLyAoMilkZWNyZWFzZSAtYnV0dG9uIGFuZCAoMylyZXNpemUgaGFuZGxlKVxuXG5cbiAgICAgICAgICBfbmF0aXZlU2Nyb2xsYmFyTWluU2l6ZSA9IHtcbiAgICAgICAgICAgIHg6IChfbmF0aXZlU2Nyb2xsYmFyU2l6ZS54ICsgKF9uYXRpdmVTY3JvbGxiYXJJc092ZXJsYWlkLnggPyAwIDogMykpICogMyxcbiAgICAgICAgICAgIHk6IChfbmF0aXZlU2Nyb2xsYmFyU2l6ZS55ICsgKF9uYXRpdmVTY3JvbGxiYXJJc092ZXJsYWlkLnkgPyAwIDogMykpICogM1xuICAgICAgICAgIH07XG4gICAgICAgICAgY2hhbmdlZE9wdGlvbnMgPSBjaGFuZ2VkT3B0aW9ucyB8fCB7fTsgLy9mcmVlemVSZXNpemVPYnNlcnZlcihfc2l6ZU9ic2VydmVyRWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgLy9mcmVlemVSZXNpemVPYnNlcnZlcihfc2l6ZUF1dG9PYnNlcnZlckVsZW1lbnQsIHRydWUpO1xuXG4gICAgICAgICAgdmFyIGNoZWNrQ2FjaGVBdXRvRm9yY2UgPSBmdW5jdGlvbiBjaGVja0NhY2hlQXV0b0ZvcmNlKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrQ2FjaGUuYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLmNvbmNhdChbZm9yY2VdKSk7XG4gICAgICAgICAgfTsgLy9zYXZlIGN1cnJlbnQgc2Nyb2xsIG9mZnNldFxuXG5cbiAgICAgICAgICB2YXIgY3VyclNjcm9sbCA9IHtcbiAgICAgICAgICAgIHg6IF92aWV3cG9ydEVsZW1lbnRbX3N0clNjcm9sbExlZnRdKCksXG4gICAgICAgICAgICB5OiBfdmlld3BvcnRFbGVtZW50W19zdHJTY3JvbGxUb3BdKClcbiAgICAgICAgICB9O1xuICAgICAgICAgIHZhciBjdXJyZW50UHJlcGFyZWRPcHRpb25zU2Nyb2xsYmFycyA9IF9jdXJyZW50UHJlcGFyZWRPcHRpb25zLnNjcm9sbGJhcnM7XG4gICAgICAgICAgdmFyIGN1cnJlbnRQcmVwYXJlZE9wdGlvbnNUZXh0YXJlYSA9IF9jdXJyZW50UHJlcGFyZWRPcHRpb25zLnRleHRhcmVhOyAvL3Njcm9sbGJhcnMgdmlzaWJpbGl0eTpcblxuICAgICAgICAgIHZhciBzY3JvbGxiYXJzVmlzaWJpbGl0eSA9IGN1cnJlbnRQcmVwYXJlZE9wdGlvbnNTY3JvbGxiYXJzLnZpc2liaWxpdHk7XG4gICAgICAgICAgdmFyIHNjcm9sbGJhcnNWaXNpYmlsaXR5Q2hhbmdlZCA9IGNoZWNrQ2FjaGVBdXRvRm9yY2Uoc2Nyb2xsYmFyc1Zpc2liaWxpdHksIF9zY3JvbGxiYXJzVmlzaWJpbGl0eUNhY2hlKTsgLy9zY3JvbGxiYXJzIGF1dG9IaWRlOlxuXG4gICAgICAgICAgdmFyIHNjcm9sbGJhcnNBdXRvSGlkZSA9IGN1cnJlbnRQcmVwYXJlZE9wdGlvbnNTY3JvbGxiYXJzLmF1dG9IaWRlO1xuICAgICAgICAgIHZhciBzY3JvbGxiYXJzQXV0b0hpZGVDaGFuZ2VkID0gY2hlY2tDYWNoZUF1dG9Gb3JjZShzY3JvbGxiYXJzQXV0b0hpZGUsIF9zY3JvbGxiYXJzQXV0b0hpZGVDYWNoZSk7IC8vc2Nyb2xsYmFycyBjbGljayBzY3JvbGxpbmdcblxuICAgICAgICAgIHZhciBzY3JvbGxiYXJzQ2xpY2tTY3JvbGxpbmcgPSBjdXJyZW50UHJlcGFyZWRPcHRpb25zU2Nyb2xsYmFycy5jbGlja1Njcm9sbGluZztcbiAgICAgICAgICB2YXIgc2Nyb2xsYmFyc0NsaWNrU2Nyb2xsaW5nQ2hhbmdlZCA9IGNoZWNrQ2FjaGVBdXRvRm9yY2Uoc2Nyb2xsYmFyc0NsaWNrU2Nyb2xsaW5nLCBfc2Nyb2xsYmFyc0NsaWNrU2Nyb2xsaW5nQ2FjaGUpOyAvL3Njcm9sbGJhcnMgZHJhZyBzY3JvbGxpbmdcblxuICAgICAgICAgIHZhciBzY3JvbGxiYXJzRHJhZ1Njcm9sbGluZyA9IGN1cnJlbnRQcmVwYXJlZE9wdGlvbnNTY3JvbGxiYXJzLmRyYWdTY3JvbGxpbmc7XG4gICAgICAgICAgdmFyIHNjcm9sbGJhcnNEcmFnU2Nyb2xsaW5nQ2hhbmdlZCA9IGNoZWNrQ2FjaGVBdXRvRm9yY2Uoc2Nyb2xsYmFyc0RyYWdTY3JvbGxpbmcsIF9zY3JvbGxiYXJzRHJhZ1Njcm9sbGluZ0NhY2hlKTsgLy9jbGFzc05hbWVcblxuICAgICAgICAgIHZhciBjbGFzc05hbWUgPSBfY3VycmVudFByZXBhcmVkT3B0aW9ucy5jbGFzc05hbWU7XG4gICAgICAgICAgdmFyIGNsYXNzTmFtZUNoYW5nZWQgPSBjaGVja0NhY2hlQXV0b0ZvcmNlKGNsYXNzTmFtZSwgX2NsYXNzTmFtZUNhY2hlKTsgLy9yZXNpemVcblxuICAgICAgICAgIHZhciByZXNpemUgPSBfY3VycmVudFByZXBhcmVkT3B0aW9ucy5yZXNpemU7XG4gICAgICAgICAgdmFyIHJlc2l6ZUNoYW5nZWQgPSBjaGVja0NhY2hlQXV0b0ZvcmNlKHJlc2l6ZSwgX3Jlc2l6ZUNhY2hlKSAmJiAhX2lzQm9keTsgLy9ib2R5IGNhbid0IGJlIHJlc2l6ZWQgc2luY2UgdGhlIHdpbmRvdyBpdHNlbGYgYWN0cyBhcyByZXNpemUgcG9zc2liaWxpdHkuXG4gICAgICAgICAgLy9wYWRkaW5nQWJzb2x1dGVcblxuICAgICAgICAgIHZhciBwYWRkaW5nQWJzb2x1dGUgPSBfY3VycmVudFByZXBhcmVkT3B0aW9ucy5wYWRkaW5nQWJzb2x1dGU7XG4gICAgICAgICAgdmFyIHBhZGRpbmdBYnNvbHV0ZUNoYW5nZWQgPSBjaGVja0NhY2hlQXV0b0ZvcmNlKHBhZGRpbmdBYnNvbHV0ZSwgX3BhZGRpbmdBYnNvbHV0ZUNhY2hlKTsgLy9jbGlwQWx3YXlzXG5cbiAgICAgICAgICB2YXIgY2xpcEFsd2F5cyA9IF9jdXJyZW50UHJlcGFyZWRPcHRpb25zLmNsaXBBbHdheXM7XG4gICAgICAgICAgdmFyIGNsaXBBbHdheXNDaGFuZ2VkID0gY2hlY2tDYWNoZUF1dG9Gb3JjZShjbGlwQWx3YXlzLCBfY2xpcEFsd2F5c0NhY2hlKTsgLy9zaXplQXV0b0NhcGFibGVcblxuICAgICAgICAgIHZhciBzaXplQXV0b0NhcGFibGUgPSBfY3VycmVudFByZXBhcmVkT3B0aW9ucy5zaXplQXV0b0NhcGFibGUgJiYgIV9pc0JvZHk7IC8vYm9keSBjYW4gbmV2ZXIgYmUgc2l6ZSBhdXRvLCBiZWNhdXNlIGl0IHNoYWxsIGJlIGFsd2F5cyBhcyBiaWcgYXMgdGhlIHZpZXdwb3J0LlxuXG4gICAgICAgICAgdmFyIHNpemVBdXRvQ2FwYWJsZUNoYW5nZWQgPSBjaGVja0NhY2hlQXV0b0ZvcmNlKHNpemVBdXRvQ2FwYWJsZSwgX3NpemVBdXRvQ2FwYWJsZUNhY2hlKTsgLy9zaG93TmF0aXZlU2Nyb2xsYmFyc1xuXG4gICAgICAgICAgdmFyIGlnbm9yZU92ZXJsYXlTY3JvbGxiYXJIaWRpbmcgPSBfY3VycmVudFByZXBhcmVkT3B0aW9ucy5uYXRpdmVTY3JvbGxiYXJzT3ZlcmxhaWQuc2hvd05hdGl2ZVNjcm9sbGJhcnM7XG4gICAgICAgICAgdmFyIGlnbm9yZU92ZXJsYXlTY3JvbGxiYXJIaWRpbmdDaGFuZ2VkID0gY2hlY2tDYWNoZUF1dG9Gb3JjZShpZ25vcmVPdmVybGF5U2Nyb2xsYmFySGlkaW5nLCBfaWdub3JlT3ZlcmxheVNjcm9sbGJhckhpZGluZ0NhY2hlKTsgLy9hdXRvVXBkYXRlXG5cbiAgICAgICAgICB2YXIgYXV0b1VwZGF0ZSA9IF9jdXJyZW50UHJlcGFyZWRPcHRpb25zLmF1dG9VcGRhdGU7XG4gICAgICAgICAgdmFyIGF1dG9VcGRhdGVDaGFuZ2VkID0gY2hlY2tDYWNoZUF1dG9Gb3JjZShhdXRvVXBkYXRlLCBfYXV0b1VwZGF0ZUNhY2hlKTsgLy9vdmVyZmxvd0JlaGF2aW9yXG5cbiAgICAgICAgICB2YXIgb3ZlcmZsb3dCZWhhdmlvciA9IF9jdXJyZW50UHJlcGFyZWRPcHRpb25zLm92ZXJmbG93QmVoYXZpb3I7XG4gICAgICAgICAgdmFyIG92ZXJmbG93QmVoYXZpb3JDaGFuZ2VkID0gY2hlY2tDYWNoZUF1dG9Gb3JjZShvdmVyZmxvd0JlaGF2aW9yLCBfb3ZlcmZsb3dCZWhhdmlvckNhY2hlLCBmb3JjZSk7IC8vZHluV2lkdGg6XG5cbiAgICAgICAgICB2YXIgdGV4dGFyZWFEeW5XaWR0aCA9IGN1cnJlbnRQcmVwYXJlZE9wdGlvbnNUZXh0YXJlYS5keW5XaWR0aDtcbiAgICAgICAgICB2YXIgdGV4dGFyZWFEeW5XaWR0aENoYW5nZWQgPSBjaGVja0NhY2hlQXV0b0ZvcmNlKF90ZXh0YXJlYUR5bldpZHRoQ2FjaGUsIHRleHRhcmVhRHluV2lkdGgpOyAvL2R5bkhlaWdodDpcblxuICAgICAgICAgIHZhciB0ZXh0YXJlYUR5bkhlaWdodCA9IGN1cnJlbnRQcmVwYXJlZE9wdGlvbnNUZXh0YXJlYS5keW5IZWlnaHQ7XG4gICAgICAgICAgdmFyIHRleHRhcmVhRHluSGVpZ2h0Q2hhbmdlZCA9IGNoZWNrQ2FjaGVBdXRvRm9yY2UoX3RleHRhcmVhRHluSGVpZ2h0Q2FjaGUsIHRleHRhcmVhRHluSGVpZ2h0KTsgLy9zY3JvbGxiYXJzIHZpc2liaWxpdHlcblxuICAgICAgICAgIF9zY3JvbGxiYXJzQXV0b0hpZGVOZXZlciA9IHNjcm9sbGJhcnNBdXRvSGlkZSA9PT0gJ24nO1xuICAgICAgICAgIF9zY3JvbGxiYXJzQXV0b0hpZGVTY3JvbGwgPSBzY3JvbGxiYXJzQXV0b0hpZGUgPT09ICdzJztcbiAgICAgICAgICBfc2Nyb2xsYmFyc0F1dG9IaWRlTW92ZSA9IHNjcm9sbGJhcnNBdXRvSGlkZSA9PT0gJ20nO1xuICAgICAgICAgIF9zY3JvbGxiYXJzQXV0b0hpZGVMZWF2ZSA9IHNjcm9sbGJhcnNBdXRvSGlkZSA9PT0gJ2wnOyAvL3Njcm9sbGJhcnMgYXV0b0hpZGVEZWxheVxuXG4gICAgICAgICAgX3Njcm9sbGJhcnNBdXRvSGlkZURlbGF5ID0gY3VycmVudFByZXBhcmVkT3B0aW9uc1Njcm9sbGJhcnMuYXV0b0hpZGVEZWxheTsgLy9vbGQgY2xhc3NOYW1lXG5cbiAgICAgICAgICBfb2xkQ2xhc3NOYW1lID0gX2NsYXNzTmFtZUNhY2hlOyAvL3Jlc2l6ZVxuXG4gICAgICAgICAgX3Jlc2l6ZU5vbmUgPSByZXNpemUgPT09ICduJztcbiAgICAgICAgICBfcmVzaXplQm90aCA9IHJlc2l6ZSA9PT0gJ2InO1xuICAgICAgICAgIF9yZXNpemVIb3Jpem9udGFsID0gcmVzaXplID09PSAnaCc7XG4gICAgICAgICAgX3Jlc2l6ZVZlcnRpY2FsID0gcmVzaXplID09PSAndic7IC8vbm9ybWFsaXplUlRMXG5cbiAgICAgICAgICBfbm9ybWFsaXplUlRMQ2FjaGUgPSBfY3VycmVudFByZXBhcmVkT3B0aW9ucy5ub3JtYWxpemVSVEw7IC8vaWdub3JlIG92ZXJsYXkgc2Nyb2xsYmFyIGhpZGluZ1xuXG4gICAgICAgICAgaWdub3JlT3ZlcmxheVNjcm9sbGJhckhpZGluZyA9IGlnbm9yZU92ZXJsYXlTY3JvbGxiYXJIaWRpbmcgJiYgX25hdGl2ZVNjcm9sbGJhcklzT3ZlcmxhaWQueCAmJiBfbmF0aXZlU2Nyb2xsYmFySXNPdmVybGFpZC55OyAvL3JlZnJlc2ggb3B0aW9ucyBjYWNoZVxuXG4gICAgICAgICAgX3Njcm9sbGJhcnNWaXNpYmlsaXR5Q2FjaGUgPSBzY3JvbGxiYXJzVmlzaWJpbGl0eTtcbiAgICAgICAgICBfc2Nyb2xsYmFyc0F1dG9IaWRlQ2FjaGUgPSBzY3JvbGxiYXJzQXV0b0hpZGU7XG4gICAgICAgICAgX3Njcm9sbGJhcnNDbGlja1Njcm9sbGluZ0NhY2hlID0gc2Nyb2xsYmFyc0NsaWNrU2Nyb2xsaW5nO1xuICAgICAgICAgIF9zY3JvbGxiYXJzRHJhZ1Njcm9sbGluZ0NhY2hlID0gc2Nyb2xsYmFyc0RyYWdTY3JvbGxpbmc7XG4gICAgICAgICAgX2NsYXNzTmFtZUNhY2hlID0gY2xhc3NOYW1lO1xuICAgICAgICAgIF9yZXNpemVDYWNoZSA9IHJlc2l6ZTtcbiAgICAgICAgICBfcGFkZGluZ0Fic29sdXRlQ2FjaGUgPSBwYWRkaW5nQWJzb2x1dGU7XG4gICAgICAgICAgX2NsaXBBbHdheXNDYWNoZSA9IGNsaXBBbHdheXM7XG4gICAgICAgICAgX3NpemVBdXRvQ2FwYWJsZUNhY2hlID0gc2l6ZUF1dG9DYXBhYmxlO1xuICAgICAgICAgIF9pZ25vcmVPdmVybGF5U2Nyb2xsYmFySGlkaW5nQ2FjaGUgPSBpZ25vcmVPdmVybGF5U2Nyb2xsYmFySGlkaW5nO1xuICAgICAgICAgIF9hdXRvVXBkYXRlQ2FjaGUgPSBhdXRvVXBkYXRlO1xuICAgICAgICAgIF9vdmVyZmxvd0JlaGF2aW9yQ2FjaGUgPSBleHRlbmREZWVwKHt9LCBvdmVyZmxvd0JlaGF2aW9yKTtcbiAgICAgICAgICBfdGV4dGFyZWFEeW5XaWR0aENhY2hlID0gdGV4dGFyZWFEeW5XaWR0aDtcbiAgICAgICAgICBfdGV4dGFyZWFEeW5IZWlnaHRDYWNoZSA9IHRleHRhcmVhRHluSGVpZ2h0O1xuICAgICAgICAgIF9oYXNPdmVyZmxvd0NhY2hlID0gX2hhc092ZXJmbG93Q2FjaGUgfHwge1xuICAgICAgICAgICAgeDogZmFsc2UsXG4gICAgICAgICAgICB5OiBmYWxzZVxuICAgICAgICAgIH07IC8vc2V0IGNvcnJlY3QgY2xhc3MgbmFtZSB0byB0aGUgaG9zdCBlbGVtZW50XG5cbiAgICAgICAgICBpZiAoY2xhc3NOYW1lQ2hhbmdlZCkge1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoX2hvc3RFbGVtZW50LCBfb2xkQ2xhc3NOYW1lICsgX3N0clNwYWNlICsgX2NsYXNzTmFtZVRoZW1lTm9uZSk7XG4gICAgICAgICAgICBhZGRDbGFzcyhfaG9zdEVsZW1lbnQsIGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkJDEgJiYgY2xhc3NOYW1lICE9PSBudWxsICYmIGNsYXNzTmFtZS5sZW5ndGggPiAwID8gY2xhc3NOYW1lIDogX2NsYXNzTmFtZVRoZW1lTm9uZSk7XG4gICAgICAgICAgfSAvL3NldCBjb3JyZWN0IGF1dG8gVXBkYXRlXG5cblxuICAgICAgICAgIGlmIChhdXRvVXBkYXRlQ2hhbmdlZCkge1xuICAgICAgICAgICAgaWYgKGF1dG9VcGRhdGUgPT09IHRydWUgfHwgYXV0b1VwZGF0ZSA9PT0gbnVsbCAmJiBfYXV0b1VwZGF0ZVJlY29tbWVuZGVkKSB7XG4gICAgICAgICAgICAgIGRpc2Nvbm5lY3RNdXRhdGlvbk9ic2VydmVycygpO1xuICAgICAgICAgICAgICBhdXRvVXBkYXRlTG9vcC5hZGQoX2Jhc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYXV0b1VwZGF0ZUxvb3AucmVtb3ZlKF9iYXNlKTtcbiAgICAgICAgICAgICAgY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXJzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvL2FjdGl2YXRlIG9yIGRlYWN0aXZhdGUgc2l6ZSBhdXRvIGNhcGFiaWxpdHlcblxuXG4gICAgICAgICAgaWYgKHNpemVBdXRvQ2FwYWJsZUNoYW5nZWQpIHtcbiAgICAgICAgICAgIGlmIChzaXplQXV0b0NhcGFibGUpIHtcbiAgICAgICAgICAgICAgaWYgKF9jb250ZW50R2x1ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBfY29udGVudEdsdWVFbGVtZW50LnNob3coKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfY29udGVudEdsdWVFbGVtZW50ID0gRlJBTUVXT1JLKGdlbmVyYXRlRGl2KF9jbGFzc05hbWVDb250ZW50R2x1ZUVsZW1lbnQpKTtcblxuICAgICAgICAgICAgICAgIF9wYWRkaW5nRWxlbWVudC5iZWZvcmUoX2NvbnRlbnRHbHVlRWxlbWVudCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoX3NpemVBdXRvT2JzZXJ2ZXJBZGRlZCkge1xuICAgICAgICAgICAgICAgIF9zaXplQXV0b09ic2VydmVyRWxlbWVudC5zaG93KCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3NpemVBdXRvT2JzZXJ2ZXJFbGVtZW50ID0gRlJBTUVXT1JLKGdlbmVyYXRlRGl2KF9jbGFzc05hbWVTaXplQXV0b09ic2VydmVyRWxlbWVudCkpO1xuICAgICAgICAgICAgICAgIF9zaXplQXV0b09ic2VydmVyRWxlbWVudE5hdGl2ZSA9IF9zaXplQXV0b09ic2VydmVyRWxlbWVudFswXTtcblxuICAgICAgICAgICAgICAgIF9jb250ZW50R2x1ZUVsZW1lbnQuYmVmb3JlKF9zaXplQXV0b09ic2VydmVyRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgb2xkU2l6ZSA9IHtcbiAgICAgICAgICAgICAgICAgIHc6IC0xLFxuICAgICAgICAgICAgICAgICAgaDogLTFcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHNldHVwUmVzaXplT2JzZXJ2ZXIoX3NpemVBdXRvT2JzZXJ2ZXJFbGVtZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgbmV3U2l6ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdzogX3NpemVBdXRvT2JzZXJ2ZXJFbGVtZW50TmF0aXZlW0xFWElDT04ub1ddLFxuICAgICAgICAgICAgICAgICAgICBoOiBfc2l6ZUF1dG9PYnNlcnZlckVsZW1lbnROYXRpdmVbTEVYSUNPTi5vSF1cbiAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgIGlmIChjaGVja0NhY2hlKG5ld1NpemUsIG9sZFNpemUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfaW5pdGlhbGl6ZWQgJiYgX2hlaWdodEF1dG9DYWNoZSAmJiBuZXdTaXplLmggPiAwIHx8IF93aWR0aEF1dG9DYWNoZSAmJiBuZXdTaXplLncgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoX2luaXRpYWxpemVkICYmICFfaGVpZ2h0QXV0b0NhY2hlICYmIG5ld1NpemUuaCA9PT0gMCB8fCAhX3dpZHRoQXV0b0NhY2hlICYmIG5ld1NpemUudyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIG9sZFNpemUgPSBuZXdTaXplO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIF9zaXplQXV0b09ic2VydmVyQWRkZWQgPSB0cnVlOyAvL2ZpeCBoZWlnaHRBdXRvIGRldGVjdG9yIGJ1ZyBpZiBoZWlnaHQgaXMgZml4ZWQgYnV0IGNvbnRlbnRIZWlnaHQgaXMgMC5cbiAgICAgICAgICAgICAgICAvL3RoZSBwcm9iYWJpbGl0eSB0aGlzIGJ1ZyB3aWxsIGV2ZXIgaGFwcGVuIGlzIHZlcnkgdmVyeSBsb3csIHRoYXRzIHdoeSBpdHMgb2sgaWYgd2UgdXNlIGNhbGMgd2hpY2ggaXNuJ3Qgc3VwcG9ydGVkIGluIElFOC5cblxuICAgICAgICAgICAgICAgIGlmIChfY3NzQ2FsYyAhPT0gbnVsbCkgX3NpemVBdXRvT2JzZXJ2ZXJFbGVtZW50LmNzcyhfc3RySGVpZ2h0LCBfY3NzQ2FsYyArICcoMTAwJSArIDFweCknKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKF9zaXplQXV0b09ic2VydmVyQWRkZWQpIF9zaXplQXV0b09ic2VydmVyRWxlbWVudC5oaWRlKCk7XG4gICAgICAgICAgICAgIGlmIChfY29udGVudEdsdWVFbGVtZW50KSBfY29udGVudEdsdWVFbGVtZW50LmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vaWYgZm9yY2UsIHVwZGF0ZSBhbGwgcmVzaXplT2JzZXJ2ZXJzIHRvb1xuXG5cbiAgICAgICAgICBpZiAoZm9yY2UpIHtcbiAgICAgICAgICAgIF9zaXplT2JzZXJ2ZXJFbGVtZW50LmZpbmQoJyonKS50cmlnZ2VyKF9zdHJTY3JvbGwpO1xuXG4gICAgICAgICAgICBpZiAoX3NpemVBdXRvT2JzZXJ2ZXJBZGRlZCkgX3NpemVBdXRvT2JzZXJ2ZXJFbGVtZW50LmZpbmQoJyonKS50cmlnZ2VyKF9zdHJTY3JvbGwpO1xuICAgICAgICAgIH0gLy9kaXNwbGF5IGhpZGRlbjpcblxuXG4gICAgICAgICAgZGlzcGxheUlzSGlkZGVuID0gZGlzcGxheUlzSGlkZGVuID09PSB1bmRlZmluZWQkMSA/IF9ob3N0RWxlbWVudC5pcygnOmhpZGRlbicpIDogZGlzcGxheUlzSGlkZGVuOyAvL3RleHRhcmVhIEF1dG9XcmFwcGluZzpcblxuICAgICAgICAgIHZhciB0ZXh0YXJlYUF1dG9XcmFwcGluZyA9IF9pc1RleHRhcmVhID8gX3RhcmdldEVsZW1lbnQuYXR0cignd3JhcCcpICE9PSAnb2ZmJyA6IGZhbHNlO1xuICAgICAgICAgIHZhciB0ZXh0YXJlYUF1dG9XcmFwcGluZ0NoYW5nZWQgPSBjaGVja0NhY2hlQXV0b0ZvcmNlKHRleHRhcmVhQXV0b1dyYXBwaW5nLCBfdGV4dGFyZWFBdXRvV3JhcHBpbmdDYWNoZSk7IC8vZGV0ZWN0IGRpcmVjdGlvbjpcblxuICAgICAgICAgIHZhciBjc3NEaXJlY3Rpb24gPSBfaG9zdEVsZW1lbnQuY3NzKCdkaXJlY3Rpb24nKTtcblxuICAgICAgICAgIHZhciBjc3NEaXJlY3Rpb25DaGFuZ2VkID0gY2hlY2tDYWNoZUF1dG9Gb3JjZShjc3NEaXJlY3Rpb24sIF9jc3NEaXJlY3Rpb25DYWNoZSk7IC8vZGV0ZWN0IGJveC1zaXppbmc6XG5cbiAgICAgICAgICB2YXIgYm94U2l6aW5nID0gX2hvc3RFbGVtZW50LmNzcygnYm94LXNpemluZycpO1xuXG4gICAgICAgICAgdmFyIGJveFNpemluZ0NoYW5nZWQgPSBjaGVja0NhY2hlQXV0b0ZvcmNlKGJveFNpemluZywgX2Nzc0JveFNpemluZ0NhY2hlKTsgLy9kZXRlY3QgcGFkZGluZzpcblxuICAgICAgICAgIHZhciBwYWRkaW5nID0gZ2V0VG9wUmlnaHRCb3R0b21MZWZ0SG9zdChfc3RyUGFkZGluZ01pbnVzKTsgLy93aWR0aCArIGhlaWdodCBhdXRvIGRldGVjdGluZyB2YXI6XG5cbiAgICAgICAgICB2YXIgc2l6ZUF1dG9PYnNlcnZlckVsZW1lbnRCQ1JlY3Q7IC8vZXhjZXB0aW9uIG9jY3VycyBpbiBJRTggc29tZXRpbWVzICh1bmtub3duIGV4Y2VwdGlvbilcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzaXplQXV0b09ic2VydmVyRWxlbWVudEJDUmVjdCA9IF9zaXplQXV0b09ic2VydmVyQWRkZWQgPyBfc2l6ZUF1dG9PYnNlcnZlckVsZW1lbnROYXRpdmVbTEVYSUNPTi5iQ1JdKCkgOiBudWxsO1xuICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX2lzUlRMID0gY3NzRGlyZWN0aW9uID09PSAncnRsJztcbiAgICAgICAgICBfaXNCb3JkZXJCb3ggPSBib3hTaXppbmcgPT09ICdib3JkZXItYm94JztcbiAgICAgICAgICB2YXIgaXNSVExMZWZ0ID0gX2lzUlRMID8gX3N0ckxlZnQgOiBfc3RyUmlnaHQ7XG4gICAgICAgICAgdmFyIGlzUlRMUmlnaHQgPSBfaXNSVEwgPyBfc3RyUmlnaHQgOiBfc3RyTGVmdDsgLy9kZXRlY3Qgd2lkdGggYXV0bzpcblxuICAgICAgICAgIHZhciB3aWR0aEF1dG9SZXNpemVEZXRlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICB2YXIgd2lkdGhBdXRvT2JzZXJ2ZXJEZXRlY3Rpb24gPSBfc2l6ZUF1dG9PYnNlcnZlckFkZGVkICYmIF9ob3N0RWxlbWVudC5jc3MoX3N0ckZsb2F0KSAhPT0gJ25vbmUnXG4gICAgICAgICAgLyp8fCBfaXNUZXh0YXJlYSAqL1xuICAgICAgICAgID8gTUFUSC5yb3VuZChzaXplQXV0b09ic2VydmVyRWxlbWVudEJDUmVjdC5yaWdodCAtIHNpemVBdXRvT2JzZXJ2ZXJFbGVtZW50QkNSZWN0LmxlZnQpID09PSAwICYmICghcGFkZGluZ0Fic29sdXRlID8gX2hvc3RFbGVtZW50TmF0aXZlW0xFWElDT04uY1ddIC0gX3BhZGRpbmdYID4gMCA6IHRydWUpIDogZmFsc2U7XG5cbiAgICAgICAgICBpZiAoc2l6ZUF1dG9DYXBhYmxlICYmICF3aWR0aEF1dG9PYnNlcnZlckRldGVjdGlvbikge1xuICAgICAgICAgICAgdmFyIHRtcEN1cnJIb3N0V2lkdGggPSBfaG9zdEVsZW1lbnROYXRpdmVbTEVYSUNPTi5vV107XG5cbiAgICAgICAgICAgIHZhciB0bXBDdXJyQ29udGVudEdsdWVXaWR0aCA9IF9jb250ZW50R2x1ZUVsZW1lbnQuY3NzKF9zdHJXaWR0aCk7XG5cbiAgICAgICAgICAgIF9jb250ZW50R2x1ZUVsZW1lbnQuY3NzKF9zdHJXaWR0aCwgX3N0ckF1dG8pO1xuXG4gICAgICAgICAgICB2YXIgdG1wTmV3SG9zdFdpZHRoID0gX2hvc3RFbGVtZW50TmF0aXZlW0xFWElDT04ub1ddO1xuXG4gICAgICAgICAgICBfY29udGVudEdsdWVFbGVtZW50LmNzcyhfc3RyV2lkdGgsIHRtcEN1cnJDb250ZW50R2x1ZVdpZHRoKTtcblxuICAgICAgICAgICAgd2lkdGhBdXRvUmVzaXplRGV0ZWN0aW9uID0gdG1wQ3Vyckhvc3RXaWR0aCAhPT0gdG1wTmV3SG9zdFdpZHRoO1xuXG4gICAgICAgICAgICBpZiAoIXdpZHRoQXV0b1Jlc2l6ZURldGVjdGlvbikge1xuICAgICAgICAgICAgICBfY29udGVudEdsdWVFbGVtZW50LmNzcyhfc3RyV2lkdGgsIHRtcEN1cnJIb3N0V2lkdGggKyAxKTtcblxuICAgICAgICAgICAgICB0bXBOZXdIb3N0V2lkdGggPSBfaG9zdEVsZW1lbnROYXRpdmVbTEVYSUNPTi5vV107XG5cbiAgICAgICAgICAgICAgX2NvbnRlbnRHbHVlRWxlbWVudC5jc3MoX3N0cldpZHRoLCB0bXBDdXJyQ29udGVudEdsdWVXaWR0aCk7XG5cbiAgICAgICAgICAgICAgd2lkdGhBdXRvUmVzaXplRGV0ZWN0aW9uID0gdG1wQ3Vyckhvc3RXaWR0aCAhPT0gdG1wTmV3SG9zdFdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciB3aWR0aEF1dG8gPSAod2lkdGhBdXRvT2JzZXJ2ZXJEZXRlY3Rpb24gfHwgd2lkdGhBdXRvUmVzaXplRGV0ZWN0aW9uKSAmJiBzaXplQXV0b0NhcGFibGUgJiYgIWRpc3BsYXlJc0hpZGRlbjtcbiAgICAgICAgICB2YXIgd2lkdGhBdXRvQ2hhbmdlZCA9IGNoZWNrQ2FjaGVBdXRvRm9yY2Uod2lkdGhBdXRvLCBfd2lkdGhBdXRvQ2FjaGUpO1xuICAgICAgICAgIHZhciB3YXNXaWR0aEF1dG8gPSAhd2lkdGhBdXRvICYmIF93aWR0aEF1dG9DYWNoZTsgLy9kZXRlY3QgaGVpZ2h0IGF1dG86XG5cbiAgICAgICAgICB2YXIgaGVpZ2h0QXV0byA9IF9zaXplQXV0b09ic2VydmVyQWRkZWQgJiYgc2l6ZUF1dG9DYXBhYmxlICYmICFkaXNwbGF5SXNIaWRkZW4gPyBNQVRILnJvdW5kKHNpemVBdXRvT2JzZXJ2ZXJFbGVtZW50QkNSZWN0LmJvdHRvbSAtIHNpemVBdXRvT2JzZXJ2ZXJFbGVtZW50QkNSZWN0LnRvcCkgPT09IDBcbiAgICAgICAgICAvKiAmJiAoIXBhZGRpbmdBYnNvbHV0ZSAmJiAoX21zaWVWZXJzaW9uID4gOSB8fCAhX21zaWVWZXJzaW9uKSA/IHRydWUgOiB0cnVlKSAqL1xuICAgICAgICAgIDogZmFsc2U7XG4gICAgICAgICAgdmFyIGhlaWdodEF1dG9DaGFuZ2VkID0gY2hlY2tDYWNoZUF1dG9Gb3JjZShoZWlnaHRBdXRvLCBfaGVpZ2h0QXV0b0NhY2hlKTtcbiAgICAgICAgICB2YXIgd2FzSGVpZ2h0QXV0byA9ICFoZWlnaHRBdXRvICYmIF9oZWlnaHRBdXRvQ2FjaGU7IC8vZGV0ZWN0IGJvcmRlcjpcbiAgICAgICAgICAvL3dlIG5lZWQgdGhlIGJvcmRlciBvbmx5IGlmIGJvcmRlciBib3ggYW5kIGF1dG8gc2l6ZVxuXG4gICAgICAgICAgdmFyIHVwZGF0ZUJvcmRlclggPSB3aWR0aEF1dG8gJiYgX2lzQm9yZGVyQm94IHx8ICFfaXNCb3JkZXJCb3g7XG4gICAgICAgICAgdmFyIHVwZGF0ZUJvcmRlclkgPSBoZWlnaHRBdXRvICYmIF9pc0JvcmRlckJveCB8fCAhX2lzQm9yZGVyQm94O1xuICAgICAgICAgIHZhciBib3JkZXIgPSBnZXRUb3BSaWdodEJvdHRvbUxlZnRIb3N0KF9zdHJCb3JkZXJNaW51cywgJy0nICsgX3N0cldpZHRoLCAhdXBkYXRlQm9yZGVyWCwgIXVwZGF0ZUJvcmRlclkpOyAvL2RldGVjdCBtYXJnaW46XG5cbiAgICAgICAgICB2YXIgbWFyZ2luID0gZ2V0VG9wUmlnaHRCb3R0b21MZWZ0SG9zdChfc3RyTWFyZ2luTWludXMpOyAvL3ZhcnMgdG8gYXBwbHkgY29ycmVjdCBjc3NcblxuICAgICAgICAgIHZhciBjb250ZW50RWxlbWVudENTUyA9IHt9O1xuICAgICAgICAgIHZhciBjb250ZW50R2x1ZUVsZW1lbnRDU1MgPSB7fTsgLy9mdW5jc1xuXG4gICAgICAgICAgdmFyIGdldEhvc3RTaXplID0gZnVuY3Rpb24gZ2V0SG9zdFNpemUoKSB7XG4gICAgICAgICAgICAvL2hhcyB0byBiZSBjbGllbnRTaXplIGJlY2F1c2Ugb2Zmc2V0U2l6ZSByZXNwZWN0IGJvcmRlcnNcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHc6IF9ob3N0RWxlbWVudE5hdGl2ZVtMRVhJQ09OLmNXXSxcbiAgICAgICAgICAgICAgaDogX2hvc3RFbGVtZW50TmF0aXZlW0xFWElDT04uY0hdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICB2YXIgZ2V0Vmlld3BvcnRTaXplID0gZnVuY3Rpb24gZ2V0Vmlld3BvcnRTaXplKCkge1xuICAgICAgICAgICAgLy92aWV3cG9ydCBzaXplIGlzIHBhZGRpbmcgY29udGFpbmVyIGJlY2F1c2UgaXQgbmV2ZXIgaGFzIHBhZGRpbmcsIG1hcmdpbiBhbmQgYSBib3JkZXJcbiAgICAgICAgICAgIC8vZGV0ZXJtaW5lIHpvb20gcm91bmRpbmcgZXJyb3IgLT4gc29tZXRpbWVzIHNjcm9sbFdpZHRoL0hlaWdodCBpcyBzbWFsbGVyIHRoYW4gY2xpZW50V2lkdGgvSGVpZ2h0XG4gICAgICAgICAgICAvL2lmIHRoaXMgaGFwcGVucyBhZGQgdGhlIGRpZmZlcmVuY2UgdG8gdGhlIHZpZXdwb3J0U2l6ZSB0byBjb21wZW5zYXRlIHRoZSByb3VuZGluZyBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdzogX3BhZGRpbmdFbGVtZW50TmF0aXZlW0xFWElDT04ub1ddICsgTUFUSC5tYXgoMCwgX2NvbnRlbnRFbGVtZW50TmF0aXZlW0xFWElDT04uY1ddIC0gX2NvbnRlbnRFbGVtZW50TmF0aXZlW0xFWElDT04uc1ddKSxcbiAgICAgICAgICAgICAgaDogX3BhZGRpbmdFbGVtZW50TmF0aXZlW0xFWElDT04ub0hdICsgTUFUSC5tYXgoMCwgX2NvbnRlbnRFbGVtZW50TmF0aXZlW0xFWElDT04uY0hdIC0gX2NvbnRlbnRFbGVtZW50TmF0aXZlW0xFWElDT04uc0hdKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9OyAvL3NldCBpbmZvIGZvciBwYWRkaW5nXG5cblxuICAgICAgICAgIHZhciBwYWRkaW5nQWJzb2x1dGVYID0gX3BhZGRpbmdYID0gcGFkZGluZy5sICsgcGFkZGluZy5yO1xuICAgICAgICAgIHZhciBwYWRkaW5nQWJzb2x1dGVZID0gX3BhZGRpbmdZID0gcGFkZGluZy50ICsgcGFkZGluZy5iO1xuICAgICAgICAgIHBhZGRpbmdBYnNvbHV0ZVggKj0gcGFkZGluZ0Fic29sdXRlID8gMSA6IDA7XG4gICAgICAgICAgcGFkZGluZ0Fic29sdXRlWSAqPSBwYWRkaW5nQWJzb2x1dGUgPyAxIDogMDtcbiAgICAgICAgICBwYWRkaW5nLmMgPSBjaGVja0NhY2hlQXV0b0ZvcmNlKHBhZGRpbmcsIF9jc3NQYWRkaW5nQ2FjaGUpOyAvL3NldCBpbmZvIGZvciBib3JkZXJcblxuICAgICAgICAgIF9ib3JkZXJYID0gYm9yZGVyLmwgKyBib3JkZXIucjtcbiAgICAgICAgICBfYm9yZGVyWSA9IGJvcmRlci50ICsgYm9yZGVyLmI7XG4gICAgICAgICAgYm9yZGVyLmMgPSBjaGVja0NhY2hlQXV0b0ZvcmNlKGJvcmRlciwgX2Nzc0JvcmRlckNhY2hlKTsgLy9zZXQgaW5mbyBmb3IgbWFyZ2luXG5cbiAgICAgICAgICBfbWFyZ2luWCA9IG1hcmdpbi5sICsgbWFyZ2luLnI7XG4gICAgICAgICAgX21hcmdpblkgPSBtYXJnaW4udCArIG1hcmdpbi5iO1xuICAgICAgICAgIG1hcmdpbi5jID0gY2hlY2tDYWNoZUF1dG9Gb3JjZShtYXJnaW4sIF9jc3NNYXJnaW5DYWNoZSk7IC8vcmVmcmVzaCBjYWNoZVxuXG4gICAgICAgICAgX3RleHRhcmVhQXV0b1dyYXBwaW5nQ2FjaGUgPSB0ZXh0YXJlYUF1dG9XcmFwcGluZztcbiAgICAgICAgICBfY3NzRGlyZWN0aW9uQ2FjaGUgPSBjc3NEaXJlY3Rpb247XG4gICAgICAgICAgX2Nzc0JveFNpemluZ0NhY2hlID0gYm94U2l6aW5nO1xuICAgICAgICAgIF93aWR0aEF1dG9DYWNoZSA9IHdpZHRoQXV0bztcbiAgICAgICAgICBfaGVpZ2h0QXV0b0NhY2hlID0gaGVpZ2h0QXV0bztcbiAgICAgICAgICBfY3NzUGFkZGluZ0NhY2hlID0gcGFkZGluZztcbiAgICAgICAgICBfY3NzQm9yZGVyQ2FjaGUgPSBib3JkZXI7XG4gICAgICAgICAgX2Nzc01hcmdpbkNhY2hlID0gbWFyZ2luOyAvL0lFRml4IGRpcmVjdGlvbiBjaGFuZ2VkXG5cbiAgICAgICAgICBpZiAoY3NzRGlyZWN0aW9uQ2hhbmdlZCAmJiBfc2l6ZUF1dG9PYnNlcnZlckFkZGVkKSBfc2l6ZUF1dG9PYnNlcnZlckVsZW1lbnQuY3NzKF9zdHJGbG9hdCwgaXNSVExSaWdodCk7IC8vYXBwbHkgcGFkZGluZzpcblxuICAgICAgICAgIGlmIChwYWRkaW5nLmMgfHwgY3NzRGlyZWN0aW9uQ2hhbmdlZCB8fCBwYWRkaW5nQWJzb2x1dGVDaGFuZ2VkIHx8IHdpZHRoQXV0b0NoYW5nZWQgfHwgaGVpZ2h0QXV0b0NoYW5nZWQgfHwgYm94U2l6aW5nQ2hhbmdlZCB8fCBzaXplQXV0b0NhcGFibGVDaGFuZ2VkKSB7XG4gICAgICAgICAgICB2YXIgcGFkZGluZ0VsZW1lbnRDU1MgPSB7fTtcbiAgICAgICAgICAgIHZhciB0ZXh0YXJlYUNTUyA9IHt9O1xuICAgICAgICAgICAgdmFyIHBhZGRpbmdWYWx1ZXMgPSBbcGFkZGluZy50LCBwYWRkaW5nLnIsIHBhZGRpbmcuYiwgcGFkZGluZy5sXTtcbiAgICAgICAgICAgIHNldFRvcFJpZ2h0Qm90dG9tTGVmdChjb250ZW50R2x1ZUVsZW1lbnRDU1MsIF9zdHJNYXJnaW5NaW51cywgWy1wYWRkaW5nLnQsIC1wYWRkaW5nLnIsIC1wYWRkaW5nLmIsIC1wYWRkaW5nLmxdKTtcblxuICAgICAgICAgICAgaWYgKHBhZGRpbmdBYnNvbHV0ZSkge1xuICAgICAgICAgICAgICBzZXRUb3BSaWdodEJvdHRvbUxlZnQocGFkZGluZ0VsZW1lbnRDU1MsIF9zdHJFbXB0eSwgcGFkZGluZ1ZhbHVlcyk7XG4gICAgICAgICAgICAgIHNldFRvcFJpZ2h0Qm90dG9tTGVmdChfaXNUZXh0YXJlYSA/IHRleHRhcmVhQ1NTIDogY29udGVudEVsZW1lbnRDU1MsIF9zdHJQYWRkaW5nTWludXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2V0VG9wUmlnaHRCb3R0b21MZWZ0KHBhZGRpbmdFbGVtZW50Q1NTLCBfc3RyRW1wdHkpO1xuICAgICAgICAgICAgICBzZXRUb3BSaWdodEJvdHRvbUxlZnQoX2lzVGV4dGFyZWEgPyB0ZXh0YXJlYUNTUyA6IGNvbnRlbnRFbGVtZW50Q1NTLCBfc3RyUGFkZGluZ01pbnVzLCBwYWRkaW5nVmFsdWVzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3BhZGRpbmdFbGVtZW50LmNzcyhwYWRkaW5nRWxlbWVudENTUyk7XG5cbiAgICAgICAgICAgIF90YXJnZXRFbGVtZW50LmNzcyh0ZXh0YXJlYUNTUyk7XG4gICAgICAgICAgfSAvL3ZpZXdwb3J0IHNpemUgaXMgcGFkZGluZyBjb250YWluZXIgYmVjYXVzZSBpdCBuZXZlciBoYXMgcGFkZGluZywgbWFyZ2luIGFuZCBhIGJvcmRlci5cblxuXG4gICAgICAgICAgX3ZpZXdwb3J0U2l6ZSA9IGdldFZpZXdwb3J0U2l6ZSgpOyAvL3VwZGF0ZSBUZXh0YXJlYVxuXG4gICAgICAgICAgdmFyIHRleHRhcmVhU2l6ZSA9IF9pc1RleHRhcmVhID8gdGV4dGFyZWFVcGRhdGUoKSA6IGZhbHNlO1xuXG4gICAgICAgICAgdmFyIHRleHRhcmVhU2l6ZUNoYW5nZWQgPSBfaXNUZXh0YXJlYSAmJiBjaGVja0NhY2hlQXV0b0ZvcmNlKHRleHRhcmVhU2l6ZSwgX3RleHRhcmVhU2l6ZUNhY2hlKTtcblxuICAgICAgICAgIHZhciB0ZXh0YXJlYUR5bk9yaWdTaXplID0gX2lzVGV4dGFyZWEgJiYgdGV4dGFyZWFTaXplID8ge1xuICAgICAgICAgICAgdzogdGV4dGFyZWFEeW5XaWR0aCA/IHRleHRhcmVhU2l6ZS5fZHluYW1pY1dpZHRoIDogdGV4dGFyZWFTaXplLl9vcmlnaW5hbFdpZHRoLFxuICAgICAgICAgICAgaDogdGV4dGFyZWFEeW5IZWlnaHQgPyB0ZXh0YXJlYVNpemUuX2R5bmFtaWNIZWlnaHQgOiB0ZXh0YXJlYVNpemUuX29yaWdpbmFsSGVpZ2h0XG4gICAgICAgICAgfSA6IHt9O1xuICAgICAgICAgIF90ZXh0YXJlYVNpemVDYWNoZSA9IHRleHRhcmVhU2l6ZTsgLy9maXggaGVpZ2h0IGF1dG8gLyB3aWR0aCBhdXRvIGluIGNvb3BlcmF0aW9uIHdpdGggY3VycmVudCBwYWRkaW5nICYgYm94U2l6aW5nIGJlaGF2aW9yOlxuXG4gICAgICAgICAgaWYgKGhlaWdodEF1dG8gJiYgKGhlaWdodEF1dG9DaGFuZ2VkIHx8IHBhZGRpbmdBYnNvbHV0ZUNoYW5nZWQgfHwgYm94U2l6aW5nQ2hhbmdlZCB8fCBwYWRkaW5nLmMgfHwgYm9yZGVyLmMpKSB7XG4gICAgICAgICAgICBjb250ZW50RWxlbWVudENTU1tfc3RySGVpZ2h0XSA9IF9zdHJBdXRvO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaGVpZ2h0QXV0b0NoYW5nZWQgfHwgcGFkZGluZ0Fic29sdXRlQ2hhbmdlZCkge1xuICAgICAgICAgICAgY29udGVudEVsZW1lbnRDU1NbX3N0ckhlaWdodF0gPSBfc3RySHVuZHJlZFBlcmNlbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHdpZHRoQXV0byAmJiAod2lkdGhBdXRvQ2hhbmdlZCB8fCBwYWRkaW5nQWJzb2x1dGVDaGFuZ2VkIHx8IGJveFNpemluZ0NoYW5nZWQgfHwgcGFkZGluZy5jIHx8IGJvcmRlci5jIHx8IGNzc0RpcmVjdGlvbkNoYW5nZWQpKSB7XG4gICAgICAgICAgICBjb250ZW50RWxlbWVudENTU1tfc3RyV2lkdGhdID0gX3N0ckF1dG87XG4gICAgICAgICAgICBjb250ZW50R2x1ZUVsZW1lbnRDU1NbX3N0ck1heE1pbnVzICsgX3N0cldpZHRoXSA9IF9zdHJIdW5kcmVkUGVyY2VudDsgLy9JRSBGaXhcbiAgICAgICAgICB9IGVsc2UgaWYgKHdpZHRoQXV0b0NoYW5nZWQgfHwgcGFkZGluZ0Fic29sdXRlQ2hhbmdlZCkge1xuICAgICAgICAgICAgY29udGVudEVsZW1lbnRDU1NbX3N0cldpZHRoXSA9IF9zdHJIdW5kcmVkUGVyY2VudDtcbiAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50Q1NTW19zdHJGbG9hdF0gPSBfc3RyRW1wdHk7XG4gICAgICAgICAgICBjb250ZW50R2x1ZUVsZW1lbnRDU1NbX3N0ck1heE1pbnVzICsgX3N0cldpZHRoXSA9IF9zdHJFbXB0eTsgLy9JRSBGaXhcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAod2lkdGhBdXRvKSB7XG4gICAgICAgICAgICAvL3RleHRhcmVhRHluT3JpZ1NpemUudyB8fCBfc3RyQXV0byA6OiBkb2VzbnQgd29ya3MgYmVjYXVzZSBhcHBsaWVkIG1hcmdpbiB3aWxsIHNoaWZ0IHdpZHRoXG4gICAgICAgICAgICBjb250ZW50R2x1ZUVsZW1lbnRDU1NbX3N0cldpZHRoXSA9IF9zdHJBdXRvO1xuICAgICAgICAgICAgY29udGVudEVsZW1lbnRDU1NbX3N0cldpZHRoXSA9IFZFTkRPUlMuX2Nzc1Byb3BlcnR5VmFsdWUoX3N0cldpZHRoLCAnbWF4LWNvbnRlbnQgaW50cmluc2ljJykgfHwgX3N0ckF1dG87XG4gICAgICAgICAgICBjb250ZW50RWxlbWVudENTU1tfc3RyRmxvYXRdID0gaXNSVExSaWdodDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGVudEdsdWVFbGVtZW50Q1NTW19zdHJXaWR0aF0gPSBfc3RyRW1wdHk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGhlaWdodEF1dG8pIHtcbiAgICAgICAgICAgIC8vdGV4dGFyZWFEeW5PcmlnU2l6ZS5oIHx8IF9jb250ZW50RWxlbWVudE5hdGl2ZVtMRVhJQ09OLmNIXSA6OiB1c2UgZm9yIGFudGkgc2Nyb2xsIGp1bXBpbmdcbiAgICAgICAgICAgIGNvbnRlbnRHbHVlRWxlbWVudENTU1tfc3RySGVpZ2h0XSA9IHRleHRhcmVhRHluT3JpZ1NpemUuaCB8fCBfY29udGVudEVsZW1lbnROYXRpdmVbTEVYSUNPTi5jSF07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRlbnRHbHVlRWxlbWVudENTU1tfc3RySGVpZ2h0XSA9IF9zdHJFbXB0eTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2l6ZUF1dG9DYXBhYmxlKSBfY29udGVudEdsdWVFbGVtZW50LmNzcyhjb250ZW50R2x1ZUVsZW1lbnRDU1MpO1xuXG4gICAgICAgICAgX2NvbnRlbnRFbGVtZW50LmNzcyhjb250ZW50RWxlbWVudENTUyk7IC8vQ0hFQ0tQT0lOVCBIRVJFIH5cblxuXG4gICAgICAgICAgY29udGVudEVsZW1lbnRDU1MgPSB7fTtcbiAgICAgICAgICBjb250ZW50R2x1ZUVsZW1lbnRDU1MgPSB7fTsgLy9pZiBbY29udGVudChob3N0KSBjbGllbnQgLyBzY3JvbGwgc2l6ZSwgb3IgdGFyZ2V0IGVsZW1lbnQgZGlyZWN0aW9uLCBvciBjb250ZW50KGhvc3QpIG1heC1zaXplc10gY2hhbmdlZCwgb3IgZm9yY2UgaXMgdHJ1ZVxuXG4gICAgICAgICAgaWYgKGhvc3RTaXplQ2hhbmdlZCB8fCBjb250ZW50U2l6ZUNoYW5nZWQgfHwgdGV4dGFyZWFTaXplQ2hhbmdlZCB8fCBjc3NEaXJlY3Rpb25DaGFuZ2VkIHx8IGJveFNpemluZ0NoYW5nZWQgfHwgcGFkZGluZ0Fic29sdXRlQ2hhbmdlZCB8fCB3aWR0aEF1dG9DaGFuZ2VkIHx8IHdpZHRoQXV0byB8fCBoZWlnaHRBdXRvQ2hhbmdlZCB8fCBoZWlnaHRBdXRvIHx8IGlnbm9yZU92ZXJsYXlTY3JvbGxiYXJIaWRpbmdDaGFuZ2VkIHx8IG92ZXJmbG93QmVoYXZpb3JDaGFuZ2VkIHx8IGNsaXBBbHdheXNDaGFuZ2VkIHx8IHJlc2l6ZUNoYW5nZWQgfHwgc2Nyb2xsYmFyc1Zpc2liaWxpdHlDaGFuZ2VkIHx8IHNjcm9sbGJhcnNBdXRvSGlkZUNoYW5nZWQgfHwgc2Nyb2xsYmFyc0RyYWdTY3JvbGxpbmdDaGFuZ2VkIHx8IHNjcm9sbGJhcnNDbGlja1Njcm9sbGluZ0NoYW5nZWQgfHwgdGV4dGFyZWFEeW5XaWR0aENoYW5nZWQgfHwgdGV4dGFyZWFEeW5IZWlnaHRDaGFuZ2VkIHx8IHRleHRhcmVhQXV0b1dyYXBwaW5nQ2hhbmdlZCkge1xuICAgICAgICAgICAgdmFyIHN0ck92ZXJmbG93ID0gJ292ZXJmbG93JztcbiAgICAgICAgICAgIHZhciBzdHJPdmVyZmxvd1ggPSBzdHJPdmVyZmxvdyArICcteCc7XG4gICAgICAgICAgICB2YXIgc3RyT3ZlcmZsb3dZID0gc3RyT3ZlcmZsb3cgKyAnLXknO1xuICAgICAgICAgICAgdmFyIHN0ckhpZGRlbiA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgdmFyIHN0clZpc2libGUgPSAndmlzaWJsZSc7IC8vUmVzZXQgdGhlIHZpZXdwb3J0ICh2ZXJ5IGltcG9ydGFudCBmb3IgbmF0aXZlbHkgb3ZlcmxhaWQgc2Nyb2xsYmFycyBhbmQgem9vbSBjaGFuZ2VcbiAgICAgICAgICAgIC8vZG9uJ3QgY2hhbmdlIHRoZSBvdmVyZmxvdyBwcm9wIGFzIGl0IGlzIHZlcnkgZXhwZW5zaXZlIGFuZCBhZmZlY3RzIHBlcmZvcm1hbmNlICFBIExPVCFcblxuICAgICAgICAgICAgaWYgKCFfbmF0aXZlU2Nyb2xsYmFyU3R5bGluZykge1xuICAgICAgICAgICAgICB2YXIgdmlld3BvcnRFbGVtZW50UmVzZXRDU1MgPSB7fTtcbiAgICAgICAgICAgICAgdmFyIHJlc2V0WFRtcCA9IF9oYXNPdmVyZmxvd0NhY2hlLnkgJiYgX2hpZGVPdmVyZmxvd0NhY2hlLnlzICYmICFpZ25vcmVPdmVybGF5U2Nyb2xsYmFySGlkaW5nID8gX25hdGl2ZVNjcm9sbGJhcklzT3ZlcmxhaWQueSA/IF92aWV3cG9ydEVsZW1lbnQuY3NzKGlzUlRMTGVmdCkgOiAtX25hdGl2ZVNjcm9sbGJhclNpemUueSA6IDA7XG4gICAgICAgICAgICAgIHZhciByZXNldEJvdHRvbVRtcCA9IF9oYXNPdmVyZmxvd0NhY2hlLnggJiYgX2hpZGVPdmVyZmxvd0NhY2hlLnhzICYmICFpZ25vcmVPdmVybGF5U2Nyb2xsYmFySGlkaW5nID8gX25hdGl2ZVNjcm9sbGJhcklzT3ZlcmxhaWQueCA/IF92aWV3cG9ydEVsZW1lbnQuY3NzKF9zdHJCb3R0b20pIDogLV9uYXRpdmVTY3JvbGxiYXJTaXplLnggOiAwO1xuICAgICAgICAgICAgICBzZXRUb3BSaWdodEJvdHRvbUxlZnQodmlld3BvcnRFbGVtZW50UmVzZXRDU1MsIF9zdHJFbXB0eSk7XG5cbiAgICAgICAgICAgICAgX3ZpZXdwb3J0RWxlbWVudC5jc3Modmlld3BvcnRFbGVtZW50UmVzZXRDU1MpO1xuICAgICAgICAgICAgfSAvL21lYXN1cmUgc2V2ZXJhbCBzaXplczpcblxuXG4gICAgICAgICAgICB2YXIgY29udGVudE1lYXN1cmVFbGVtZW50ID0gZ2V0Q29udGVudE1lYXN1cmVFbGVtZW50KCk7IC8vaW4gRmlyZWZveCBjb250ZW50IGVsZW1lbnQgaGFzIHRvIGhhdmUgb3ZlcmZsb3cgaGlkZGVuLCBlbHNlIGVsZW1lbnQgbWFyZ2lucyBhcmVuJ3QgY2FsY3VsYXRlZCBwcm9wZXJseSwgdGhpcyBlbGVtZW50IHByZXZlbnRzIHRoaXMgYnVnLCBidXQgb25seSBpZiBzY3JvbGxiYXJzIGFyZW4ndCBvdmVybGFpZFxuXG4gICAgICAgICAgICB2YXIgY29udGVudFNpemUgPSB7XG4gICAgICAgICAgICAgIC8vdXNlIGNsaWVudFNpemUgYmVjYXVzZSBuYXRpdmVseSBvdmVybGFpZFNjcm9sbGJhcnMgYWRkIGJvcmRlcnNcbiAgICAgICAgICAgICAgdzogdGV4dGFyZWFEeW5PcmlnU2l6ZS53IHx8IGNvbnRlbnRNZWFzdXJlRWxlbWVudFtMRVhJQ09OLmNXXSxcbiAgICAgICAgICAgICAgaDogdGV4dGFyZWFEeW5PcmlnU2l6ZS5oIHx8IGNvbnRlbnRNZWFzdXJlRWxlbWVudFtMRVhJQ09OLmNIXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBzY3JvbGxTaXplID0ge1xuICAgICAgICAgICAgICB3OiBjb250ZW50TWVhc3VyZUVsZW1lbnRbTEVYSUNPTi5zV10sXG4gICAgICAgICAgICAgIGg6IGNvbnRlbnRNZWFzdXJlRWxlbWVudFtMRVhJQ09OLnNIXVxuICAgICAgICAgICAgfTsgLy9hcHBseSB0aGUgY29ycmVjdCB2aWV3cG9ydCBzdHlsZSBhbmQgbWVhc3VyZSB2aWV3cG9ydCBzaXplXG5cbiAgICAgICAgICAgIGlmICghX25hdGl2ZVNjcm9sbGJhclN0eWxpbmcpIHtcbiAgICAgICAgICAgICAgdmlld3BvcnRFbGVtZW50UmVzZXRDU1NbX3N0ckJvdHRvbV0gPSB3YXNIZWlnaHRBdXRvID8gX3N0ckVtcHR5IDogcmVzZXRCb3R0b21UbXA7XG4gICAgICAgICAgICAgIHZpZXdwb3J0RWxlbWVudFJlc2V0Q1NTW2lzUlRMTGVmdF0gPSB3YXNXaWR0aEF1dG8gPyBfc3RyRW1wdHkgOiByZXNldFhUbXA7XG5cbiAgICAgICAgICAgICAgX3ZpZXdwb3J0RWxlbWVudC5jc3Modmlld3BvcnRFbGVtZW50UmVzZXRDU1MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdmlld3BvcnRTaXplID0gZ2V0Vmlld3BvcnRTaXplKCk7IC8vbWVhc3VyZSBhbmQgY29ycmVjdCBzZXZlcmFsIHNpemVzXG5cbiAgICAgICAgICAgIHZhciBob3N0U2l6ZSA9IGdldEhvc3RTaXplKCk7XG4gICAgICAgICAgICB2YXIgaG9zdEFic29sdXRlUmVjdFNpemUgPSB7XG4gICAgICAgICAgICAgIHc6IGhvc3RTaXplLncgLSBfbWFyZ2luWCAtIF9ib3JkZXJYIC0gKF9pc0JvcmRlckJveCA/IDAgOiBfcGFkZGluZ1gpLFxuICAgICAgICAgICAgICBoOiBob3N0U2l6ZS5oIC0gX21hcmdpblkgLSBfYm9yZGVyWSAtIChfaXNCb3JkZXJCb3ggPyAwIDogX3BhZGRpbmdZKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBjb250ZW50R2x1ZVNpemUgPSB7XG4gICAgICAgICAgICAgIC8vY2xpZW50L3Njcm9sbFNpemUgKyBBYnNvbHV0ZVBhZGRpbmcgLT4gYmVjYXVzZSBwYWRkaW5nIGlzIG9ubHkgYXBwbGllZCB0byB0aGUgcGFkZGluZ0VsZW1lbnQgaWYgaXRzIGFic29sdXRlLCBzbyB5b3UgaGF2ZSB0byBhZGQgaXQgbWFudWFsbHlcbiAgICAgICAgICAgICAgLy9ob3N0U2l6ZSBpcyBjbGllbnRTaXplIC0+IHNvIHBhZGRpbmcgc2hvdWxkIGJlIGFkZGVkIG1hbnVhbGx5LCByaWdodD8gRkFMU0UhIEJlY2F1c2UgY29udGVudCBnbHVlIGlzIGluc2lkZSBob3N0RWxlbWVudCwgc28gd2UgZG9uJ3QgaGF2ZSB0byB3b3JyeSBhYm91dCBwYWRkaW5nXG4gICAgICAgICAgICAgIHc6IE1BVEgubWF4KCh3aWR0aEF1dG8gPyBjb250ZW50U2l6ZS53IDogc2Nyb2xsU2l6ZS53KSArIHBhZGRpbmdBYnNvbHV0ZVgsIGhvc3RBYnNvbHV0ZVJlY3RTaXplLncpLFxuICAgICAgICAgICAgICBoOiBNQVRILm1heCgoaGVpZ2h0QXV0byA/IGNvbnRlbnRTaXplLmggOiBzY3JvbGxTaXplLmgpICsgcGFkZGluZ0Fic29sdXRlWSwgaG9zdEFic29sdXRlUmVjdFNpemUuaClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb250ZW50R2x1ZVNpemUuYyA9IGNoZWNrQ2FjaGVBdXRvRm9yY2UoY29udGVudEdsdWVTaXplLCBfY29udGVudEdsdWVTaXplQ2FjaGUpO1xuICAgICAgICAgICAgX2NvbnRlbnRHbHVlU2l6ZUNhY2hlID0gY29udGVudEdsdWVTaXplOyAvL2FwcGx5IGNvcnJlY3QgY29udGVudEdsdWUgc2l6ZVxuXG4gICAgICAgICAgICBpZiAoc2l6ZUF1dG9DYXBhYmxlKSB7XG4gICAgICAgICAgICAgIC8vc2l6ZSBjb250ZW50R2x1ZSBjb3JyZWN0bHkgdG8gbWFrZSBzdXJlIHRoZSBlbGVtZW50IGhhcyBjb3JyZWN0IHNpemUgaWYgdGhlIHNpemluZyBzd2l0Y2hlcyB0byBhdXRvXG4gICAgICAgICAgICAgIGlmIChjb250ZW50R2x1ZVNpemUuYyB8fCBoZWlnaHRBdXRvIHx8IHdpZHRoQXV0bykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRHbHVlRWxlbWVudENTU1tfc3RyV2lkdGhdID0gY29udGVudEdsdWVTaXplLnc7XG4gICAgICAgICAgICAgICAgY29udGVudEdsdWVFbGVtZW50Q1NTW19zdHJIZWlnaHRdID0gY29udGVudEdsdWVTaXplLmg7IC8vdGV4dGFyZWEtc2l6ZXMgYXJlIGFscmVhZHkgY2FsY3VsYXRlZCBjb3JyZWN0bHkgYXQgdGhpcyBwb2ludFxuXG4gICAgICAgICAgICAgICAgaWYgKCFfaXNUZXh0YXJlYSkge1xuICAgICAgICAgICAgICAgICAgY29udGVudFNpemUgPSB7XG4gICAgICAgICAgICAgICAgICAgIC8vdXNlIGNsaWVudFNpemUgYmVjYXVzZSBuYXRpdmVseSBvdmVybGFpZFNjcm9sbGJhcnMgYWRkIGJvcmRlcnNcbiAgICAgICAgICAgICAgICAgICAgdzogY29udGVudE1lYXN1cmVFbGVtZW50W0xFWElDT04uY1ddLFxuICAgICAgICAgICAgICAgICAgICBoOiBjb250ZW50TWVhc3VyZUVsZW1lbnRbTEVYSUNPTi5jSF1cbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdmFyIHRleHRhcmVhQ292ZXJDU1MgPSB7fTtcblxuICAgICAgICAgICAgICB2YXIgc2V0Q29udGVudEdsdWVFbGVtZW50Q1NTZnVuY3Rpb24gPSBmdW5jdGlvbiBzZXRDb250ZW50R2x1ZUVsZW1lbnRDU1NmdW5jdGlvbihob3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbGJhclZhcnMgPSBnZXRTY3JvbGxiYXJWYXJzKGhvcml6b250YWwpO1xuICAgICAgICAgICAgICAgIHZhciB3aCA9IHNjcm9sbGJhclZhcnMuX3dfaDtcbiAgICAgICAgICAgICAgICB2YXIgc3RyV0ggPSBzY3JvbGxiYXJWYXJzLl93aWR0aF9oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdmFyIGF1dG9TaXplID0gaG9yaXpvbnRhbCA/IHdpZHRoQXV0byA6IGhlaWdodEF1dG87XG4gICAgICAgICAgICAgICAgdmFyIGJvcmRlclNpemUgPSBob3Jpem9udGFsID8gX2JvcmRlclggOiBfYm9yZGVyWTtcbiAgICAgICAgICAgICAgICB2YXIgcGFkZGluZ1NpemUgPSBob3Jpem9udGFsID8gX3BhZGRpbmdYIDogX3BhZGRpbmdZO1xuICAgICAgICAgICAgICAgIHZhciBtYXJnaW5TaXplID0gaG9yaXpvbnRhbCA/IF9tYXJnaW5YIDogX21hcmdpblk7XG4gICAgICAgICAgICAgICAgdmFyIHZpZXdwb3J0U2l6ZSA9IF92aWV3cG9ydFNpemVbd2hdIC0gYm9yZGVyU2l6ZSAtIG1hcmdpblNpemUgLSAoX2lzQm9yZGVyQm94ID8gMCA6IHBhZGRpbmdTaXplKTsgLy9tYWtlIGNvbnRlbnRHbHVlIHNpemUgLTEgaWYgZWxlbWVudCBpcyBub3QgYXV0byBzaXplZCwgdG8gbWFrZSBzdXJlIHRoYXQgYSByZXNpemUgZXZlbnQgaGFwcGVucyB3aGVuIHRoZSBlbGVtZW50IHNocmlua3NcblxuICAgICAgICAgICAgICAgIGlmICghYXV0b1NpemUgfHwgIWF1dG9TaXplICYmIGJvcmRlci5jKSBjb250ZW50R2x1ZUVsZW1lbnRDU1Nbc3RyV0hdID0gaG9zdEFic29sdXRlUmVjdFNpemVbd2hdIC0gMTsgLy9pZiBzaXplIGlzIGF1dG8gYW5kIGhvc3QgaXMgc21hbGxlciB0aGFuIHNpemUgYXMgbWluIHNpemUsIG1ha2UgY29udGVudCBnbHVlIHNpemUgLTEgdG8gbWFrZSBzdXJlIHNpemUgY2hhbmdlcyB3aWxsIGJlIGRldGVjdGVkICh0aGlzIGlzIG9ubHkgbmVlZGVkIGlmIHBhZGRpbmcgaXMgMClcblxuICAgICAgICAgICAgICAgIGlmIChhdXRvU2l6ZSAmJiBjb250ZW50U2l6ZVt3aF0gPCB2aWV3cG9ydFNpemUgJiYgKGhvcml6b250YWwgJiYgX2lzVGV4dGFyZWEgPyAhdGV4dGFyZWFBdXRvV3JhcHBpbmcgOiB0cnVlKSkge1xuICAgICAgICAgICAgICAgICAgaWYgKF9pc1RleHRhcmVhKSB0ZXh0YXJlYUNvdmVyQ1NTW3N0cldIXSA9IHBhcnNlVG9aZXJvT3JOdW1iZXIoX3RleHRhcmVhQ292ZXJFbGVtZW50LmNzcyhzdHJXSCkpIC0gMTtcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnRHbHVlRWxlbWVudENTU1tzdHJXSF0gLT0gMTtcbiAgICAgICAgICAgICAgICB9IC8vbWFrZSBzdXJlIGNvbnRlbnQgZ2x1ZSBzaXplIGlzIGF0IGxlYXN0IDFcblxuXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRTaXplW3doXSA+IDApIGNvbnRlbnRHbHVlRWxlbWVudENTU1tzdHJXSF0gPSBNQVRILm1heCgxLCBjb250ZW50R2x1ZUVsZW1lbnRDU1Nbc3RyV0hdKTtcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBzZXRDb250ZW50R2x1ZUVsZW1lbnRDU1NmdW5jdGlvbih0cnVlKTtcbiAgICAgICAgICAgICAgc2V0Q29udGVudEdsdWVFbGVtZW50Q1NTZnVuY3Rpb24oZmFsc2UpO1xuICAgICAgICAgICAgICBpZiAoX2lzVGV4dGFyZWEpIF90ZXh0YXJlYUNvdmVyRWxlbWVudC5jc3ModGV4dGFyZWFDb3ZlckNTUyk7XG5cbiAgICAgICAgICAgICAgX2NvbnRlbnRHbHVlRWxlbWVudC5jc3MoY29udGVudEdsdWVFbGVtZW50Q1NTKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHdpZHRoQXV0bykgY29udGVudEVsZW1lbnRDU1NbX3N0cldpZHRoXSA9IF9zdHJIdW5kcmVkUGVyY2VudDtcbiAgICAgICAgICAgIGlmICh3aWR0aEF1dG8gJiYgIV9pc0JvcmRlckJveCAmJiAhX211dGF0aW9uT2JzZXJ2ZXJzQ29ubmVjdGVkKSBjb250ZW50RWxlbWVudENTU1tfc3RyRmxvYXRdID0gJ25vbmUnOyAvL2FwcGx5IGFuZCByZXNldCBjb250ZW50IHN0eWxlXG5cbiAgICAgICAgICAgIF9jb250ZW50RWxlbWVudC5jc3MoY29udGVudEVsZW1lbnRDU1MpO1xuXG4gICAgICAgICAgICBjb250ZW50RWxlbWVudENTUyA9IHt9OyAvL21lYXN1cmUgYWdhaW4sIGJ1dCB0aGlzIHRpbWUgYWxsIGNvcnJlY3Qgc2l6ZXM6XG5cbiAgICAgICAgICAgIHZhciBjb250ZW50U2Nyb2xsU2l6ZSA9IHtcbiAgICAgICAgICAgICAgdzogY29udGVudE1lYXN1cmVFbGVtZW50W0xFWElDT04uc1ddLFxuICAgICAgICAgICAgICBoOiBjb250ZW50TWVhc3VyZUVsZW1lbnRbTEVYSUNPTi5zSF1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb250ZW50U2Nyb2xsU2l6ZS5jID0gY29udGVudFNpemVDaGFuZ2VkID0gY2hlY2tDYWNoZUF1dG9Gb3JjZShjb250ZW50U2Nyb2xsU2l6ZSwgX2NvbnRlbnRTY3JvbGxTaXplQ2FjaGUpO1xuICAgICAgICAgICAgX2NvbnRlbnRTY3JvbGxTaXplQ2FjaGUgPSBjb250ZW50U2Nyb2xsU2l6ZTsgLy9yZWZyZXNoIHZpZXdwb3J0IHNpemUgYWZ0ZXIgY29ycmVjdCBtZWFzdXJpbmdcblxuICAgICAgICAgICAgX3ZpZXdwb3J0U2l6ZSA9IGdldFZpZXdwb3J0U2l6ZSgpO1xuICAgICAgICAgICAgaG9zdFNpemUgPSBnZXRIb3N0U2l6ZSgpO1xuICAgICAgICAgICAgaG9zdFNpemVDaGFuZ2VkID0gY2hlY2tDYWNoZUF1dG9Gb3JjZShob3N0U2l6ZSwgX2hvc3RTaXplQ2FjaGUpO1xuICAgICAgICAgICAgX2hvc3RTaXplQ2FjaGUgPSBob3N0U2l6ZTtcbiAgICAgICAgICAgIHZhciBoaWRlT3ZlcmZsb3dGb3JjZVRleHRhcmVhID0gX2lzVGV4dGFyZWEgJiYgKF92aWV3cG9ydFNpemUudyA9PT0gMCB8fCBfdmlld3BvcnRTaXplLmggPT09IDApO1xuICAgICAgICAgICAgdmFyIHByZXZpb3VzT3ZlcmZsb3dBbW91bnQgPSBfb3ZlcmZsb3dBbW91bnRDYWNoZTtcbiAgICAgICAgICAgIHZhciBvdmVyZmxvd0JlaGF2aW9ySXNWUyA9IHt9O1xuICAgICAgICAgICAgdmFyIG92ZXJmbG93QmVoYXZpb3JJc1ZIID0ge307XG4gICAgICAgICAgICB2YXIgb3ZlcmZsb3dCZWhhdmlvcklzUyA9IHt9O1xuICAgICAgICAgICAgdmFyIG92ZXJmbG93QW1vdW50ID0ge307XG4gICAgICAgICAgICB2YXIgaGFzT3ZlcmZsb3cgPSB7fTtcbiAgICAgICAgICAgIHZhciBoaWRlT3ZlcmZsb3cgPSB7fTtcbiAgICAgICAgICAgIHZhciBjYW5TY3JvbGwgPSB7fTtcblxuICAgICAgICAgICAgdmFyIHZpZXdwb3J0UmVjdCA9IF9wYWRkaW5nRWxlbWVudE5hdGl2ZVtMRVhJQ09OLmJDUl0oKTtcblxuICAgICAgICAgICAgdmFyIHNldE92ZXJmbG93VmFyaWFibGVzID0gZnVuY3Rpb24gc2V0T3ZlcmZsb3dWYXJpYWJsZXMoaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICB2YXIgc2Nyb2xsYmFyVmFycyA9IGdldFNjcm9sbGJhclZhcnMoaG9yaXpvbnRhbCk7XG4gICAgICAgICAgICAgIHZhciBzY3JvbGxiYXJWYXJzSW52ZXJ0ZWQgPSBnZXRTY3JvbGxiYXJWYXJzKCFob3Jpem9udGFsKTtcbiAgICAgICAgICAgICAgdmFyIHh5SSA9IHNjcm9sbGJhclZhcnNJbnZlcnRlZC5feF95O1xuICAgICAgICAgICAgICB2YXIgeHkgPSBzY3JvbGxiYXJWYXJzLl94X3k7XG4gICAgICAgICAgICAgIHZhciB3aCA9IHNjcm9sbGJhclZhcnMuX3dfaDtcbiAgICAgICAgICAgICAgdmFyIHdpZHRoSGVpZ2h0ID0gc2Nyb2xsYmFyVmFycy5fd2lkdGhfaGVpZ2h0O1xuICAgICAgICAgICAgICB2YXIgc2Nyb2xsTWF4ID0gX3N0clNjcm9sbCArIHNjcm9sbGJhclZhcnMuX0xlZnRfVG9wICsgJ01heCc7XG4gICAgICAgICAgICAgIHZhciBmcmFjdGlvbmFsT3ZlcmZsb3dBbW91bnQgPSB2aWV3cG9ydFJlY3Rbd2lkdGhIZWlnaHRdID8gTUFUSC5hYnModmlld3BvcnRSZWN0W3dpZHRoSGVpZ2h0XSAtIF92aWV3cG9ydFNpemVbd2hdKSA6IDA7XG4gICAgICAgICAgICAgIHZhciBjaGVja0ZyYWN0aW9uYWxPdmVyZmxvd0Ftb3VudCA9IHByZXZpb3VzT3ZlcmZsb3dBbW91bnQgJiYgcHJldmlvdXNPdmVyZmxvd0Ftb3VudFt4eV0gPiAwICYmIF92aWV3cG9ydEVsZW1lbnROYXRpdmVbc2Nyb2xsTWF4XSA9PT0gMDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3dCZWhhdmlvcklzVlNbeHldID0gb3ZlcmZsb3dCZWhhdmlvclt4eV0gPT09ICd2LXMnO1xuICAgICAgICAgICAgICBvdmVyZmxvd0JlaGF2aW9ySXNWSFt4eV0gPSBvdmVyZmxvd0JlaGF2aW9yW3h5XSA9PT0gJ3YtaCc7XG4gICAgICAgICAgICAgIG92ZXJmbG93QmVoYXZpb3JJc1NbeHldID0gb3ZlcmZsb3dCZWhhdmlvclt4eV0gPT09ICdzJztcbiAgICAgICAgICAgICAgb3ZlcmZsb3dBbW91bnRbeHldID0gTUFUSC5tYXgoMCwgTUFUSC5yb3VuZCgoY29udGVudFNjcm9sbFNpemVbd2hdIC0gX3ZpZXdwb3J0U2l6ZVt3aF0pICogMTAwKSAvIDEwMCk7XG4gICAgICAgICAgICAgIG92ZXJmbG93QW1vdW50W3h5XSAqPSBoaWRlT3ZlcmZsb3dGb3JjZVRleHRhcmVhIHx8IGNoZWNrRnJhY3Rpb25hbE92ZXJmbG93QW1vdW50ICYmIGZyYWN0aW9uYWxPdmVyZmxvd0Ftb3VudCA+IDAgJiYgZnJhY3Rpb25hbE92ZXJmbG93QW1vdW50IDwgMSA/IDAgOiAxO1xuICAgICAgICAgICAgICBoYXNPdmVyZmxvd1t4eV0gPSBvdmVyZmxvd0Ftb3VudFt4eV0gPiAwOyAvL2hpZGVPdmVyZmxvdzpcbiAgICAgICAgICAgICAgLy94IHx8IHkgOiB0cnVlID09PSBvdmVyZmxvdyBpcyBoaWRkZW4gYnkgXCJvdmVyZmxvdzogc2Nyb2xsXCIgT1IgXCJvdmVyZmxvdzogaGlkZGVuXCJcbiAgICAgICAgICAgICAgLy94cyB8fCB5cyA6IHRydWUgPT09IG92ZXJmbG93IGlzIGhpZGRlbiBieSBcIm92ZXJmbG93OiBzY3JvbGxcIlxuXG4gICAgICAgICAgICAgIGhpZGVPdmVyZmxvd1t4eV0gPSBvdmVyZmxvd0JlaGF2aW9ySXNWU1t4eV0gfHwgb3ZlcmZsb3dCZWhhdmlvcklzVkhbeHldID8gaGFzT3ZlcmZsb3dbeHlJXSAmJiAhb3ZlcmZsb3dCZWhhdmlvcklzVlNbeHlJXSAmJiAhb3ZlcmZsb3dCZWhhdmlvcklzVkhbeHlJXSA6IGhhc092ZXJmbG93W3h5XTtcbiAgICAgICAgICAgICAgaGlkZU92ZXJmbG93W3h5ICsgJ3MnXSA9IGhpZGVPdmVyZmxvd1t4eV0gPyBvdmVyZmxvd0JlaGF2aW9ySXNTW3h5XSB8fCBvdmVyZmxvd0JlaGF2aW9ySXNWU1t4eV0gOiBmYWxzZTtcbiAgICAgICAgICAgICAgY2FuU2Nyb2xsW3h5XSA9IGhhc092ZXJmbG93W3h5XSAmJiBoaWRlT3ZlcmZsb3dbeHkgKyAncyddO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc2V0T3ZlcmZsb3dWYXJpYWJsZXModHJ1ZSk7XG4gICAgICAgICAgICBzZXRPdmVyZmxvd1ZhcmlhYmxlcyhmYWxzZSk7XG4gICAgICAgICAgICBvdmVyZmxvd0Ftb3VudC5jID0gY2hlY2tDYWNoZUF1dG9Gb3JjZShvdmVyZmxvd0Ftb3VudCwgX292ZXJmbG93QW1vdW50Q2FjaGUpO1xuICAgICAgICAgICAgX292ZXJmbG93QW1vdW50Q2FjaGUgPSBvdmVyZmxvd0Ftb3VudDtcbiAgICAgICAgICAgIGhhc092ZXJmbG93LmMgPSBjaGVja0NhY2hlQXV0b0ZvcmNlKGhhc092ZXJmbG93LCBfaGFzT3ZlcmZsb3dDYWNoZSk7XG4gICAgICAgICAgICBfaGFzT3ZlcmZsb3dDYWNoZSA9IGhhc092ZXJmbG93O1xuICAgICAgICAgICAgaGlkZU92ZXJmbG93LmMgPSBjaGVja0NhY2hlQXV0b0ZvcmNlKGhpZGVPdmVyZmxvdywgX2hpZGVPdmVyZmxvd0NhY2hlKTtcbiAgICAgICAgICAgIF9oaWRlT3ZlcmZsb3dDYWNoZSA9IGhpZGVPdmVyZmxvdzsgLy9pZiBuYXRpdmUgc2Nyb2xsYmFyIGlzIG92ZXJsYXkgYXQgeCBPUiB5IGF4aXMsIHByZXBhcmUgRE9NXG5cbiAgICAgICAgICAgIGlmIChfbmF0aXZlU2Nyb2xsYmFySXNPdmVybGFpZC54IHx8IF9uYXRpdmVTY3JvbGxiYXJJc092ZXJsYWlkLnkpIHtcbiAgICAgICAgICAgICAgdmFyIGJvcmRlckRlc2lnbiA9ICdweCBzb2xpZCB0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICAgIHZhciBjb250ZW50QXJyYW5nZUVsZW1lbnRDU1MgPSB7fTtcbiAgICAgICAgICAgICAgdmFyIGFycmFuZ2VDb250ZW50ID0ge307XG4gICAgICAgICAgICAgIHZhciBhcnJhbmdlQ2hhbmdlZCA9IGZvcmNlO1xuICAgICAgICAgICAgICB2YXIgc2V0Q29udGVudEVsZW1lbnRDU1M7XG5cbiAgICAgICAgICAgICAgaWYgKGhhc092ZXJmbG93LnggfHwgaGFzT3ZlcmZsb3cueSkge1xuICAgICAgICAgICAgICAgIGFycmFuZ2VDb250ZW50LncgPSBfbmF0aXZlU2Nyb2xsYmFySXNPdmVybGFpZC55ICYmIGhhc092ZXJmbG93LnkgPyBjb250ZW50U2Nyb2xsU2l6ZS53ICsgX292ZXJsYXlTY3JvbGxiYXJEdW1teVNpemUueSA6IF9zdHJFbXB0eTtcbiAgICAgICAgICAgICAgICBhcnJhbmdlQ29udGVudC5oID0gX25hdGl2ZVNjcm9sbGJhcklzT3ZlcmxhaWQueCAmJiBoYXNPdmVyZmxvdy54ID8gY29udGVudFNjcm9sbFNpemUuaCArIF9vdmVybGF5U2Nyb2xsYmFyRHVtbXlTaXplLnggOiBfc3RyRW1wdHk7XG4gICAgICAgICAgICAgICAgYXJyYW5nZUNoYW5nZWQgPSBjaGVja0NhY2hlQXV0b0ZvcmNlKGFycmFuZ2VDb250ZW50LCBfYXJyYW5nZUNvbnRlbnRTaXplQ2FjaGUpO1xuICAgICAgICAgICAgICAgIF9hcnJhbmdlQ29udGVudFNpemVDYWNoZSA9IGFycmFuZ2VDb250ZW50O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGhhc092ZXJmbG93LmMgfHwgaGlkZU92ZXJmbG93LmMgfHwgY29udGVudFNjcm9sbFNpemUuYyB8fCBjc3NEaXJlY3Rpb25DaGFuZ2VkIHx8IHdpZHRoQXV0b0NoYW5nZWQgfHwgaGVpZ2h0QXV0b0NoYW5nZWQgfHwgd2lkdGhBdXRvIHx8IGhlaWdodEF1dG8gfHwgaWdub3JlT3ZlcmxheVNjcm9sbGJhckhpZGluZ0NoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50RWxlbWVudENTU1tfc3RyTWFyZ2luTWludXMgKyBpc1JUTFJpZ2h0XSA9IGNvbnRlbnRFbGVtZW50Q1NTW19zdHJCb3JkZXJNaW51cyArIGlzUlRMUmlnaHRdID0gX3N0ckVtcHR5O1xuXG4gICAgICAgICAgICAgICAgc2V0Q29udGVudEVsZW1lbnRDU1MgPSBmdW5jdGlvbiBzZXRDb250ZW50RWxlbWVudENTUyhob3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsYmFyVmFycyA9IGdldFNjcm9sbGJhclZhcnMoaG9yaXpvbnRhbCk7XG4gICAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsYmFyVmFyc0ludmVydGVkID0gZ2V0U2Nyb2xsYmFyVmFycyghaG9yaXpvbnRhbCk7XG4gICAgICAgICAgICAgICAgICB2YXIgeHkgPSBzY3JvbGxiYXJWYXJzLl94X3k7XG4gICAgICAgICAgICAgICAgICB2YXIgc3RyRGlyZWN0aW9uID0gaG9yaXpvbnRhbCA/IF9zdHJCb3R0b20gOiBpc1JUTExlZnQ7XG4gICAgICAgICAgICAgICAgICB2YXIgaW52ZXJ0ZWRBdXRvU2l6ZSA9IGhvcml6b250YWwgPyBoZWlnaHRBdXRvIDogd2lkdGhBdXRvO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoX25hdGl2ZVNjcm9sbGJhcklzT3ZlcmxhaWRbeHldICYmIGhhc092ZXJmbG93W3h5XSAmJiBoaWRlT3ZlcmZsb3dbeHkgKyAncyddKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50Q1NTW19zdHJNYXJnaW5NaW51cyArIHN0ckRpcmVjdGlvbl0gPSBpbnZlcnRlZEF1dG9TaXplID8gaWdub3JlT3ZlcmxheVNjcm9sbGJhckhpZGluZyA/IF9zdHJFbXB0eSA6IF9vdmVybGF5U2Nyb2xsYmFyRHVtbXlTaXplW3h5XSA6IF9zdHJFbXB0eTtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudEVsZW1lbnRDU1NbX3N0ckJvcmRlck1pbnVzICsgc3RyRGlyZWN0aW9uXSA9IChob3Jpem9udGFsID8gIWludmVydGVkQXV0b1NpemUgOiB0cnVlKSAmJiAhaWdub3JlT3ZlcmxheVNjcm9sbGJhckhpZGluZyA/IF9vdmVybGF5U2Nyb2xsYmFyRHVtbXlTaXplW3h5XSArIGJvcmRlckRlc2lnbiA6IF9zdHJFbXB0eTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFycmFuZ2VDb250ZW50W3Njcm9sbGJhclZhcnNJbnZlcnRlZC5fd19oXSA9IGNvbnRlbnRFbGVtZW50Q1NTW19zdHJNYXJnaW5NaW51cyArIHN0ckRpcmVjdGlvbl0gPSBjb250ZW50RWxlbWVudENTU1tfc3RyQm9yZGVyTWludXMgKyBzdHJEaXJlY3Rpb25dID0gX3N0ckVtcHR5O1xuICAgICAgICAgICAgICAgICAgICBhcnJhbmdlQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmIChfbmF0aXZlU2Nyb2xsYmFyU3R5bGluZykge1xuICAgICAgICAgICAgICAgICAgYWRkUmVtb3ZlQ2xhc3MoX3ZpZXdwb3J0RWxlbWVudCwgX2NsYXNzTmFtZVZpZXdwb3J0TmF0aXZlU2Nyb2xsYmFyc0ludmlzaWJsZSwgIWlnbm9yZU92ZXJsYXlTY3JvbGxiYXJIaWRpbmcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBzZXRDb250ZW50RWxlbWVudENTUyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgIHNldENvbnRlbnRFbGVtZW50Q1NTKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoaWdub3JlT3ZlcmxheVNjcm9sbGJhckhpZGluZykge1xuICAgICAgICAgICAgICAgIGFycmFuZ2VDb250ZW50LncgPSBhcnJhbmdlQ29udGVudC5oID0gX3N0ckVtcHR5O1xuICAgICAgICAgICAgICAgIGFycmFuZ2VDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChhcnJhbmdlQ2hhbmdlZCAmJiAhX25hdGl2ZVNjcm9sbGJhclN0eWxpbmcpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50QXJyYW5nZUVsZW1lbnRDU1NbX3N0cldpZHRoXSA9IGhpZGVPdmVyZmxvdy55ID8gYXJyYW5nZUNvbnRlbnQudyA6IF9zdHJFbXB0eTtcbiAgICAgICAgICAgICAgICBjb250ZW50QXJyYW5nZUVsZW1lbnRDU1NbX3N0ckhlaWdodF0gPSBoaWRlT3ZlcmZsb3cueCA/IGFycmFuZ2VDb250ZW50LmggOiBfc3RyRW1wdHk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIV9jb250ZW50QXJyYW5nZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZW50QXJyYW5nZUVsZW1lbnQgPSBGUkFNRVdPUksoZ2VuZXJhdGVEaXYoX2NsYXNzTmFtZUNvbnRlbnRBcnJhbmdlRWxlbWVudCkpO1xuXG4gICAgICAgICAgICAgICAgICBfdmlld3BvcnRFbGVtZW50LnByZXBlbmQoX2NvbnRlbnRBcnJhbmdlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2NvbnRlbnRBcnJhbmdlRWxlbWVudC5jc3MoY29udGVudEFycmFuZ2VFbGVtZW50Q1NTKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIF9jb250ZW50RWxlbWVudC5jc3MoY29udGVudEVsZW1lbnRDU1MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdmlld3BvcnRFbGVtZW50Q1NTID0ge307XG4gICAgICAgICAgICB2YXIgcGFkZGluZ0VsZW1lbnRDU1MgPSB7fTtcbiAgICAgICAgICAgIHZhciBzZXRWaWV3cG9ydENTUztcblxuICAgICAgICAgICAgaWYgKGhvc3RTaXplQ2hhbmdlZCB8fCBoYXNPdmVyZmxvdy5jIHx8IGhpZGVPdmVyZmxvdy5jIHx8IGNvbnRlbnRTY3JvbGxTaXplLmMgfHwgb3ZlcmZsb3dCZWhhdmlvckNoYW5nZWQgfHwgYm94U2l6aW5nQ2hhbmdlZCB8fCBpZ25vcmVPdmVybGF5U2Nyb2xsYmFySGlkaW5nQ2hhbmdlZCB8fCBjc3NEaXJlY3Rpb25DaGFuZ2VkIHx8IGNsaXBBbHdheXNDaGFuZ2VkIHx8IGhlaWdodEF1dG9DaGFuZ2VkKSB7XG4gICAgICAgICAgICAgIHZpZXdwb3J0RWxlbWVudENTU1tpc1JUTFJpZ2h0XSA9IF9zdHJFbXB0eTtcblxuICAgICAgICAgICAgICBzZXRWaWV3cG9ydENTUyA9IGZ1bmN0aW9uIHNldFZpZXdwb3J0Q1NTKGhvcml6b250YWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsYmFyVmFycyA9IGdldFNjcm9sbGJhclZhcnMoaG9yaXpvbnRhbCk7XG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbGJhclZhcnNJbnZlcnRlZCA9IGdldFNjcm9sbGJhclZhcnMoIWhvcml6b250YWwpO1xuICAgICAgICAgICAgICAgIHZhciB4eSA9IHNjcm9sbGJhclZhcnMuX3hfeTtcbiAgICAgICAgICAgICAgICB2YXIgWFkgPSBzY3JvbGxiYXJWYXJzLl9YX1k7XG4gICAgICAgICAgICAgICAgdmFyIHN0ckRpcmVjdGlvbiA9IGhvcml6b250YWwgPyBfc3RyQm90dG9tIDogaXNSVExMZWZ0O1xuXG4gICAgICAgICAgICAgICAgdmFyIHJlc2V0ID0gZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgICAgICAgICAgICB2aWV3cG9ydEVsZW1lbnRDU1Nbc3RyRGlyZWN0aW9uXSA9IF9zdHJFbXB0eTtcbiAgICAgICAgICAgICAgICAgIF9jb250ZW50Qm9yZGVyU2l6ZVtzY3JvbGxiYXJWYXJzSW52ZXJ0ZWQuX3dfaF0gPSAwO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFzT3ZlcmZsb3dbeHldICYmIGhpZGVPdmVyZmxvd1t4eSArICdzJ10pIHtcbiAgICAgICAgICAgICAgICAgIHZpZXdwb3J0RWxlbWVudENTU1tzdHJPdmVyZmxvdyArIFhZXSA9IF9zdHJTY3JvbGw7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChpZ25vcmVPdmVybGF5U2Nyb2xsYmFySGlkaW5nIHx8IF9uYXRpdmVTY3JvbGxiYXJTdHlsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2aWV3cG9ydEVsZW1lbnRDU1Nbc3RyRGlyZWN0aW9uXSA9IC0oX25hdGl2ZVNjcm9sbGJhcklzT3ZlcmxhaWRbeHldID8gX292ZXJsYXlTY3JvbGxiYXJEdW1teVNpemVbeHldIDogX25hdGl2ZVNjcm9sbGJhclNpemVbeHldKTtcbiAgICAgICAgICAgICAgICAgICAgX2NvbnRlbnRCb3JkZXJTaXplW3Njcm9sbGJhclZhcnNJbnZlcnRlZC5fd19oXSA9IF9uYXRpdmVTY3JvbGxiYXJJc092ZXJsYWlkW3h5XSA/IF9vdmVybGF5U2Nyb2xsYmFyRHVtbXlTaXplW3Njcm9sbGJhclZhcnNJbnZlcnRlZC5feF95XSA6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHZpZXdwb3J0RWxlbWVudENTU1tzdHJPdmVyZmxvdyArIFhZXSA9IF9zdHJFbXB0eTtcbiAgICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHNldFZpZXdwb3J0Q1NTKHRydWUpO1xuICAgICAgICAgICAgICBzZXRWaWV3cG9ydENTUyhmYWxzZSk7IC8vIGlmIHRoZSBzY3JvbGwgY29udGFpbmVyIGlzIHRvbyBzbWFsbCBhbmQgaWYgdGhlcmUgaXMgYW55IG92ZXJmbG93IHdpdGggbm8gb3ZlcmxheSBzY3JvbGxiYXIgKGFuZCBzY3JvbGxiYXIgc3R5bGluZyBpc24ndCBwb3NzaWJsZSksIFxuICAgICAgICAgICAgICAvLyBtYWtlIHZpZXdwb3J0IGVsZW1lbnQgZ3JlYXRlciBpbiBzaXplIChGaXJlZm94IGhpZGUgU2Nyb2xsYmFycyBmaXgpXG4gICAgICAgICAgICAgIC8vIGJlY2F1c2UgZmlyZWZveCBzdGFydHMgaGlkaW5nIHNjcm9sbGJhcnMgb24gdG9vIHNtYWxsIGVsZW1lbnRzXG4gICAgICAgICAgICAgIC8vIHdpdGggdGhpcyBiZWhhdmlvciB0aGUgb3ZlcmZsb3cgY2FsY3VsYXRpb24gbWF5IGJlIGluY29ycmVjdCBvciB0aGUgc2Nyb2xsYmFycyB3b3VsZCBhcHBlYXIgc3VkZGVubHlcbiAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjkyMjg0XG5cbiAgICAgICAgICAgICAgaWYgKCFfbmF0aXZlU2Nyb2xsYmFyU3R5bGluZyAmJiAoX3ZpZXdwb3J0U2l6ZS5oIDwgX25hdGl2ZVNjcm9sbGJhck1pblNpemUueCB8fCBfdmlld3BvcnRTaXplLncgPCBfbmF0aXZlU2Nyb2xsYmFyTWluU2l6ZS55KSAmJiAoaGFzT3ZlcmZsb3cueCAmJiBoaWRlT3ZlcmZsb3cueCAmJiAhX25hdGl2ZVNjcm9sbGJhcklzT3ZlcmxhaWQueCB8fCBoYXNPdmVyZmxvdy55ICYmIGhpZGVPdmVyZmxvdy55ICYmICFfbmF0aXZlU2Nyb2xsYmFySXNPdmVybGFpZC55KSkge1xuICAgICAgICAgICAgICAgIHZpZXdwb3J0RWxlbWVudENTU1tfc3RyUGFkZGluZ01pbnVzICsgX3N0clRvcF0gPSBfbmF0aXZlU2Nyb2xsYmFyTWluU2l6ZS54O1xuICAgICAgICAgICAgICAgIHZpZXdwb3J0RWxlbWVudENTU1tfc3RyTWFyZ2luTWludXMgKyBfc3RyVG9wXSA9IC1fbmF0aXZlU2Nyb2xsYmFyTWluU2l6ZS54O1xuICAgICAgICAgICAgICAgIHZpZXdwb3J0RWxlbWVudENTU1tfc3RyUGFkZGluZ01pbnVzICsgaXNSVExSaWdodF0gPSBfbmF0aXZlU2Nyb2xsYmFyTWluU2l6ZS55O1xuICAgICAgICAgICAgICAgIHZpZXdwb3J0RWxlbWVudENTU1tfc3RyTWFyZ2luTWludXMgKyBpc1JUTFJpZ2h0XSA9IC1fbmF0aXZlU2Nyb2xsYmFyTWluU2l6ZS55O1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZXdwb3J0RWxlbWVudENTU1tfc3RyUGFkZGluZ01pbnVzICsgX3N0clRvcF0gPSB2aWV3cG9ydEVsZW1lbnRDU1NbX3N0ck1hcmdpbk1pbnVzICsgX3N0clRvcF0gPSB2aWV3cG9ydEVsZW1lbnRDU1NbX3N0clBhZGRpbmdNaW51cyArIGlzUlRMUmlnaHRdID0gdmlld3BvcnRFbGVtZW50Q1NTW19zdHJNYXJnaW5NaW51cyArIGlzUlRMUmlnaHRdID0gX3N0ckVtcHR5O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdmlld3BvcnRFbGVtZW50Q1NTW19zdHJQYWRkaW5nTWludXMgKyBpc1JUTExlZnRdID0gdmlld3BvcnRFbGVtZW50Q1NTW19zdHJNYXJnaW5NaW51cyArIGlzUlRMTGVmdF0gPSBfc3RyRW1wdHk7IC8vaWYgdGhlcmUgaXMgYW55IG92ZXJmbG93ICh4IE9SIHkgYXhpcykgYW5kIHRoaXMgb3ZlcmZsb3cgc2hhbGwgYmUgaGlkZGVuLCBtYWtlIG92ZXJmbG93IGhpZGRlbiwgZWxzZSBvdmVyZmxvdyB2aXNpYmxlXG5cbiAgICAgICAgICAgICAgaWYgKGhhc092ZXJmbG93LnggJiYgaGlkZU92ZXJmbG93LnggfHwgaGFzT3ZlcmZsb3cueSAmJiBoaWRlT3ZlcmZsb3cueSB8fCBoaWRlT3ZlcmZsb3dGb3JjZVRleHRhcmVhKSB7XG4gICAgICAgICAgICAgICAgLy9vbmx5IGhpZGUgaWYgaXMgVGV4dGFyZWFcbiAgICAgICAgICAgICAgICBpZiAoX2lzVGV4dGFyZWEgJiYgaGlkZU92ZXJmbG93Rm9yY2VUZXh0YXJlYSkge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZ0VsZW1lbnRDU1Nbc3RyT3ZlcmZsb3dYXSA9IHBhZGRpbmdFbGVtZW50Q1NTW3N0ck92ZXJmbG93WV0gPSBzdHJIaWRkZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghY2xpcEFsd2F5cyB8fCBvdmVyZmxvd0JlaGF2aW9ySXNWSC54IHx8IG92ZXJmbG93QmVoYXZpb3JJc1ZTLnggfHwgb3ZlcmZsb3dCZWhhdmlvcklzVkgueSB8fCBvdmVyZmxvd0JlaGF2aW9ySXNWUy55KSB7XG4gICAgICAgICAgICAgICAgICAvL29ubHkgdW4taGlkZSBpZiBUZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgaWYgKF9pc1RleHRhcmVhKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdFbGVtZW50Q1NTW3N0ck92ZXJmbG93WF0gPSBwYWRkaW5nRWxlbWVudENTU1tzdHJPdmVyZmxvd1ldID0gX3N0ckVtcHR5O1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB2aWV3cG9ydEVsZW1lbnRDU1Nbc3RyT3ZlcmZsb3dYXSA9IHZpZXdwb3J0RWxlbWVudENTU1tzdHJPdmVyZmxvd1ldID0gc3RyVmlzaWJsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBfcGFkZGluZ0VsZW1lbnQuY3NzKHBhZGRpbmdFbGVtZW50Q1NTKTtcblxuICAgICAgICAgICAgICBfdmlld3BvcnRFbGVtZW50LmNzcyh2aWV3cG9ydEVsZW1lbnRDU1MpO1xuXG4gICAgICAgICAgICAgIHZpZXdwb3J0RWxlbWVudENTUyA9IHt9OyAvL2ZvcmNlIHNvZnQgcmVkcmF3IGluIHdlYmtpdCBiZWNhdXNlIHdpdGhvdXQgdGhlIHNjcm9sbGJhcnMgd2lsbCBtYXkgYXBwZWFyIGJlY2F1c2UgRE9NIHdvbnQgYmUgcmVkcmF3biB1bmRlciBzcGVjaWFsIGNvbmRpdGlvbnNcblxuICAgICAgICAgICAgICBpZiAoKGhhc092ZXJmbG93LmMgfHwgYm94U2l6aW5nQ2hhbmdlZCB8fCB3aWR0aEF1dG9DaGFuZ2VkIHx8IGhlaWdodEF1dG9DaGFuZ2VkKSAmJiAhKF9uYXRpdmVTY3JvbGxiYXJJc092ZXJsYWlkLnggJiYgX25hdGl2ZVNjcm9sbGJhcklzT3ZlcmxhaWQueSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudFN0eWxlID0gX2NvbnRlbnRFbGVtZW50TmF0aXZlW0xFWElDT04uc107XG4gICAgICAgICAgICAgICAgZWxlbWVudFN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICdzY2FsZSgxKSc7XG4gICAgICAgICAgICAgICAgZWxlbWVudFN0eWxlLmRpc3BsYXkgPSAncnVuLWluJztcbiAgICAgICAgICAgICAgICBlbGVtZW50U3R5bGUuZGlzcGxheSA9IF9zdHJFbXB0eTsgLy98fCBkdW1wOyAvL3VzZSBkdW1wIHRvIHByZXZlbnQgaXQgZnJvbSBkZWxldGlvbiBpZiBtaW5pZnlcblxuICAgICAgICAgICAgICAgIGVsZW1lbnRTdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBfc3RyRW1wdHk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAvL2ZvcmNlIGhhcmQgcmVkcmF3IGluIHdlYmtpdCBpZiBuYXRpdmUgb3ZlcmxhaWQgc2Nyb2xsYmFycyBzaGFsbCBhcHBlYXJcclxuICAgICAgICAgICAgICBpZiAoaWdub3JlT3ZlcmxheVNjcm9sbGJhckhpZGluZ0NoYW5nZWQgJiYgaWdub3JlT3ZlcmxheVNjcm9sbGJhckhpZGluZykge1xyXG4gICAgICAgICAgICAgICAgICBfaG9zdEVsZW1lbnQuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICB2YXIgZHVtcCA9IF9ob3N0RWxlbWVudE5hdGl2ZVtMRVhJQ09OLm9IXTtcclxuICAgICAgICAgICAgICAgICAgX2hvc3RFbGVtZW50LnNob3coKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgfSAvL2NoYW5nZSB0byBkaXJlY3Rpb24gUlRMIGFuZCB3aWR0aCBhdXRvIEJ1Z2ZpeCBpbiBXZWJraXRcbiAgICAgICAgICAgIC8vd2l0aG91dCB0aGlzIGZpeCwgdGhlIERPTSBzdGlsbCB0aGlua3MgdGhlIHNjcm9sbGJhciBpcyBMVFIgYW5kIHRodXMgdGhlIGNvbnRlbnQgaXMgc2hpZnRlZCB0byB0aGUgbGVmdFxuXG5cbiAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50Q1NTID0ge307XG5cbiAgICAgICAgICAgIGlmIChjc3NEaXJlY3Rpb25DaGFuZ2VkIHx8IHdpZHRoQXV0b0NoYW5nZWQgfHwgaGVpZ2h0QXV0b0NoYW5nZWQpIHtcbiAgICAgICAgICAgICAgaWYgKF9pc1JUTCAmJiB3aWR0aEF1dG8pIHtcbiAgICAgICAgICAgICAgICB2YXIgZmxvYXRUbXAgPSBfY29udGVudEVsZW1lbnQuY3NzKF9zdHJGbG9hdCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcG9zTGVmdFdpdGhvdXRGbG9hdCA9IE1BVEgucm91bmQoX2NvbnRlbnRFbGVtZW50LmNzcyhfc3RyRmxvYXQsIF9zdHJFbXB0eSkuY3NzKF9zdHJMZWZ0LCBfc3RyRW1wdHkpLnBvc2l0aW9uKCkubGVmdCk7XG5cbiAgICAgICAgICAgICAgICBfY29udGVudEVsZW1lbnQuY3NzKF9zdHJGbG9hdCwgZmxvYXRUbXApO1xuXG4gICAgICAgICAgICAgICAgdmFyIHBvc0xlZnRXaXRoRmxvYXQgPSBNQVRILnJvdW5kKF9jb250ZW50RWxlbWVudC5wb3NpdGlvbigpLmxlZnQpO1xuICAgICAgICAgICAgICAgIGlmIChwb3NMZWZ0V2l0aG91dEZsb2F0ICE9PSBwb3NMZWZ0V2l0aEZsb2F0KSBjb250ZW50RWxlbWVudENTU1tfc3RyTGVmdF0gPSBwb3NMZWZ0V2l0aG91dEZsb2F0O1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50Q1NTW19zdHJMZWZ0XSA9IF9zdHJFbXB0eTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfY29udGVudEVsZW1lbnQuY3NzKGNvbnRlbnRFbGVtZW50Q1NTKTsgLy9oYW5kbGUgc2Nyb2xsIHBvc2l0aW9uXG5cblxuICAgICAgICAgICAgaWYgKF9pc1RleHRhcmVhICYmIGNvbnRlbnRTaXplQ2hhbmdlZCkge1xuICAgICAgICAgICAgICB2YXIgdGV4dGFyZWFJbmZvID0gZ2V0VGV4dGFyZWFJbmZvKCk7XG5cbiAgICAgICAgICAgICAgaWYgKHRleHRhcmVhSW5mbykge1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0YXJlYVJvd3NDaGFuZ2VkID0gX3RleHRhcmVhSW5mb0NhY2hlID09PSB1bmRlZmluZWQkMSA/IHRydWUgOiB0ZXh0YXJlYUluZm8uX3Jvd3MgIT09IF90ZXh0YXJlYUluZm9DYWNoZS5fcm93cztcbiAgICAgICAgICAgICAgICB2YXIgY3Vyc29yUm93ID0gdGV4dGFyZWFJbmZvLl9jdXJzb3JSb3c7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnNvckNvbCA9IHRleHRhcmVhSW5mby5fY3Vyc29yQ29sdW1uO1xuICAgICAgICAgICAgICAgIHZhciB3aWRlc3RSb3cgPSB0ZXh0YXJlYUluZm8uX3dpZGVzdFJvdztcbiAgICAgICAgICAgICAgICB2YXIgbGFzdFJvdyA9IHRleHRhcmVhSW5mby5fcm93cztcbiAgICAgICAgICAgICAgICB2YXIgbGFzdENvbCA9IHRleHRhcmVhSW5mby5fY29sdW1ucztcbiAgICAgICAgICAgICAgICB2YXIgY3Vyc29yUG9zID0gdGV4dGFyZWFJbmZvLl9jdXJzb3JQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICB2YXIgY3Vyc29yTWF4ID0gdGV4dGFyZWFJbmZvLl9jdXJzb3JNYXg7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnNvcklzTGFzdFBvc2l0aW9uID0gY3Vyc29yUG9zID49IGN1cnNvck1heCAmJiBfdGV4dGFyZWFIYXNGb2N1cztcbiAgICAgICAgICAgICAgICB2YXIgdGV4dGFyZWFTY3JvbGxBbW91bnQgPSB7XG4gICAgICAgICAgICAgICAgICB4OiAhdGV4dGFyZWFBdXRvV3JhcHBpbmcgJiYgY3Vyc29yQ29sID09PSBsYXN0Q29sICYmIGN1cnNvclJvdyA9PT0gd2lkZXN0Um93ID8gX292ZXJmbG93QW1vdW50Q2FjaGUueCA6IC0xLFxuICAgICAgICAgICAgICAgICAgeTogKHRleHRhcmVhQXV0b1dyYXBwaW5nID8gY3Vyc29ySXNMYXN0UG9zaXRpb24gfHwgdGV4dGFyZWFSb3dzQ2hhbmdlZCAmJiAocHJldmlvdXNPdmVyZmxvd0Ftb3VudCA/IGN1cnJTY3JvbGwueSA9PT0gcHJldmlvdXNPdmVyZmxvd0Ftb3VudC55IDogZmFsc2UpIDogKGN1cnNvcklzTGFzdFBvc2l0aW9uIHx8IHRleHRhcmVhUm93c0NoYW5nZWQpICYmIGN1cnNvclJvdyA9PT0gbGFzdFJvdykgPyBfb3ZlcmZsb3dBbW91bnRDYWNoZS55IDogLTFcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGN1cnJTY3JvbGwueCA9IHRleHRhcmVhU2Nyb2xsQW1vdW50LnggPiAtMSA/IF9pc1JUTCAmJiBfbm9ybWFsaXplUlRMQ2FjaGUgJiYgX3J0bFNjcm9sbEJlaGF2aW9yLmkgPyAwIDogdGV4dGFyZWFTY3JvbGxBbW91bnQueCA6IGN1cnJTY3JvbGwueDsgLy9pZiBpbnZlcnRlZCwgc2Nyb2xsIHRvIDAgLT4gbm9ybWFsaXplZCB0aGlzIG1lYW5zIHRvIG1heCBzY3JvbGwgb2Zmc2V0LlxuXG4gICAgICAgICAgICAgICAgY3VyclNjcm9sbC55ID0gdGV4dGFyZWFTY3JvbGxBbW91bnQueSA+IC0xID8gdGV4dGFyZWFTY3JvbGxBbW91bnQueSA6IGN1cnJTY3JvbGwueTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIF90ZXh0YXJlYUluZm9DYWNoZSA9IHRleHRhcmVhSW5mbztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF9pc1JUTCAmJiBfcnRsU2Nyb2xsQmVoYXZpb3IuaSAmJiBfbmF0aXZlU2Nyb2xsYmFySXNPdmVybGFpZC55ICYmIGhhc092ZXJmbG93LnggJiYgX25vcm1hbGl6ZVJUTENhY2hlKSBjdXJyU2Nyb2xsLnggKz0gX2NvbnRlbnRCb3JkZXJTaXplLncgfHwgMDtcbiAgICAgICAgICAgIGlmICh3aWR0aEF1dG8pIF9ob3N0RWxlbWVudFtfc3RyU2Nyb2xsTGVmdF0oMCk7XG4gICAgICAgICAgICBpZiAoaGVpZ2h0QXV0bykgX2hvc3RFbGVtZW50W19zdHJTY3JvbGxUb3BdKDApO1xuXG4gICAgICAgICAgICBfdmlld3BvcnRFbGVtZW50W19zdHJTY3JvbGxMZWZ0XShjdXJyU2Nyb2xsLngpW19zdHJTY3JvbGxUb3BdKGN1cnJTY3JvbGwueSk7IC8vc2Nyb2xsYmFycyBtYW5hZ2VtZW50OlxuXG5cbiAgICAgICAgICAgIHZhciBzY3JvbGxiYXJzVmlzaWJpbGl0eVZpc2libGUgPSBzY3JvbGxiYXJzVmlzaWJpbGl0eSA9PT0gJ3YnO1xuICAgICAgICAgICAgdmFyIHNjcm9sbGJhcnNWaXNpYmlsaXR5SGlkZGVuID0gc2Nyb2xsYmFyc1Zpc2liaWxpdHkgPT09ICdoJztcbiAgICAgICAgICAgIHZhciBzY3JvbGxiYXJzVmlzaWJpbGl0eUF1dG8gPSBzY3JvbGxiYXJzVmlzaWJpbGl0eSA9PT0gJ2EnO1xuXG4gICAgICAgICAgICB2YXIgcmVmcmVzaFNjcm9sbGJhcnNWaXNpYmlsaXR5ID0gZnVuY3Rpb24gcmVmcmVzaFNjcm9sbGJhcnNWaXNpYmlsaXR5KHNob3dYLCBzaG93WSkge1xuICAgICAgICAgICAgICBzaG93WSA9IHNob3dZID09PSB1bmRlZmluZWQkMSA/IHNob3dYIDogc2hvd1k7XG4gICAgICAgICAgICAgIHJlZnJlc2hTY3JvbGxiYXJBcHBlYXJhbmNlKHRydWUsIHNob3dYLCBjYW5TY3JvbGwueCk7XG4gICAgICAgICAgICAgIHJlZnJlc2hTY3JvbGxiYXJBcHBlYXJhbmNlKGZhbHNlLCBzaG93WSwgY2FuU2Nyb2xsLnkpO1xuICAgICAgICAgICAgfTsgLy9tYW5hZ2UgY2xhc3MgbmFtZSB3aGljaCBpbmRpY2F0ZXMgc2Nyb2xsYWJsZSBvdmVyZmxvd1xuXG5cbiAgICAgICAgICAgIGFkZFJlbW92ZUNsYXNzKF9ob3N0RWxlbWVudCwgX2NsYXNzTmFtZUhvc3RPdmVyZmxvdywgaGlkZU92ZXJmbG93LnggfHwgaGlkZU92ZXJmbG93LnkpO1xuICAgICAgICAgICAgYWRkUmVtb3ZlQ2xhc3MoX2hvc3RFbGVtZW50LCBfY2xhc3NOYW1lSG9zdE92ZXJmbG93WCwgaGlkZU92ZXJmbG93LngpO1xuICAgICAgICAgICAgYWRkUmVtb3ZlQ2xhc3MoX2hvc3RFbGVtZW50LCBfY2xhc3NOYW1lSG9zdE92ZXJmbG93WSwgaGlkZU92ZXJmbG93LnkpOyAvL2FkZCBvciByZW1vdmUgcnRsIGNsYXNzIG5hbWUgZm9yIHN0eWxpbmcgcHVycG9zZXMgZXhjZXB0IHdoZW4gaXRzIGJvZHksIHRoZW4gdGhlIHNjcm9sbGJhciBzdGF5c1xuXG4gICAgICAgICAgICBpZiAoY3NzRGlyZWN0aW9uQ2hhbmdlZCAmJiAhX2lzQm9keSkge1xuICAgICAgICAgICAgICBhZGRSZW1vdmVDbGFzcyhfaG9zdEVsZW1lbnQsIF9jbGFzc05hbWVIb3N0UlRMLCBfaXNSVEwpO1xuICAgICAgICAgICAgfSAvL21hbmFnZSB0aGUgcmVzaXplIGZlYXR1cmUgKENTUzMgcmVzaXplIFwicG9seWZpbGxcIiBmb3IgdGhpcyBwbHVnaW4pXG5cblxuICAgICAgICAgICAgaWYgKF9pc0JvZHkpIGFkZENsYXNzKF9ob3N0RWxlbWVudCwgX2NsYXNzTmFtZUhvc3RSZXNpemVEaXNhYmxlZCk7XG5cbiAgICAgICAgICAgIGlmIChyZXNpemVDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgIGFkZFJlbW92ZUNsYXNzKF9ob3N0RWxlbWVudCwgX2NsYXNzTmFtZUhvc3RSZXNpemVEaXNhYmxlZCwgX3Jlc2l6ZU5vbmUpO1xuICAgICAgICAgICAgICBhZGRSZW1vdmVDbGFzcyhfc2Nyb2xsYmFyQ29ybmVyRWxlbWVudCwgX2NsYXNzTmFtZVNjcm9sbGJhckNvcm5lclJlc2l6ZSwgIV9yZXNpemVOb25lKTtcbiAgICAgICAgICAgICAgYWRkUmVtb3ZlQ2xhc3MoX3Njcm9sbGJhckNvcm5lckVsZW1lbnQsIF9jbGFzc05hbWVTY3JvbGxiYXJDb3JuZXJSZXNpemVCLCBfcmVzaXplQm90aCk7XG4gICAgICAgICAgICAgIGFkZFJlbW92ZUNsYXNzKF9zY3JvbGxiYXJDb3JuZXJFbGVtZW50LCBfY2xhc3NOYW1lU2Nyb2xsYmFyQ29ybmVyUmVzaXplSCwgX3Jlc2l6ZUhvcml6b250YWwpO1xuICAgICAgICAgICAgICBhZGRSZW1vdmVDbGFzcyhfc2Nyb2xsYmFyQ29ybmVyRWxlbWVudCwgX2NsYXNzTmFtZVNjcm9sbGJhckNvcm5lclJlc2l6ZVYsIF9yZXNpemVWZXJ0aWNhbCk7XG4gICAgICAgICAgICB9IC8vbWFuYWdlIHRoZSBzY3JvbGxiYXJzIGdlbmVyYWwgdmlzaWJpbGl0eSArIHRoZSBzY3JvbGxiYXIgaW50ZXJhY3Rpdml0eSAodW51c2FibGUgY2xhc3MgbmFtZSlcblxuXG4gICAgICAgICAgICBpZiAoc2Nyb2xsYmFyc1Zpc2liaWxpdHlDaGFuZ2VkIHx8IG92ZXJmbG93QmVoYXZpb3JDaGFuZ2VkIHx8IGhpZGVPdmVyZmxvdy5jIHx8IGhhc092ZXJmbG93LmMgfHwgaWdub3JlT3ZlcmxheVNjcm9sbGJhckhpZGluZ0NoYW5nZWQpIHtcbiAgICAgICAgICAgICAgaWYgKGlnbm9yZU92ZXJsYXlTY3JvbGxiYXJIaWRpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaWdub3JlT3ZlcmxheVNjcm9sbGJhckhpZGluZ0NoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKF9ob3N0RWxlbWVudCwgX2NsYXNzTmFtZUhvc3RTY3JvbGxpbmcpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoaWdub3JlT3ZlcmxheVNjcm9sbGJhckhpZGluZykge1xuICAgICAgICAgICAgICAgICAgICByZWZyZXNoU2Nyb2xsYmFyc1Zpc2liaWxpdHkoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxiYXJzVmlzaWJpbGl0eUF1dG8pIHtcbiAgICAgICAgICAgICAgICByZWZyZXNoU2Nyb2xsYmFyc1Zpc2liaWxpdHkoY2FuU2Nyb2xsLngsIGNhblNjcm9sbC55KTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxiYXJzVmlzaWJpbGl0eVZpc2libGUpIHtcbiAgICAgICAgICAgICAgICByZWZyZXNoU2Nyb2xsYmFyc1Zpc2liaWxpdHkodHJ1ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsYmFyc1Zpc2liaWxpdHlIaWRkZW4pIHtcbiAgICAgICAgICAgICAgICByZWZyZXNoU2Nyb2xsYmFyc1Zpc2liaWxpdHkoZmFsc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IC8vbWFuYWdlIHRoZSBzY3JvbGxiYXJzIGF1dG8gaGlkZSBmZWF0dXJlIChhdXRvIGhpZGUgdGhlbSBhZnRlciBzcGVjaWZpYyBhY3Rpb25zKVxuXG5cbiAgICAgICAgICAgIGlmIChzY3JvbGxiYXJzQXV0b0hpZGVDaGFuZ2VkIHx8IGlnbm9yZU92ZXJsYXlTY3JvbGxiYXJIaWRpbmdDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgIHNldHVwSG9zdE1vdXNlVG91Y2hFdmVudHMoIV9zY3JvbGxiYXJzQXV0b0hpZGVMZWF2ZSAmJiAhX3Njcm9sbGJhcnNBdXRvSGlkZU1vdmUpO1xuICAgICAgICAgICAgICByZWZyZXNoU2Nyb2xsYmFyc0F1dG9IaWRlKF9zY3JvbGxiYXJzQXV0b0hpZGVOZXZlciwgIV9zY3JvbGxiYXJzQXV0b0hpZGVOZXZlcik7XG4gICAgICAgICAgICB9IC8vbWFuYWdlIHNjcm9sbGJhcnMgaGFuZGxlIGxlbmd0aCAmIG9mZnNldCAtIGRvbid0IHJlbW92ZSFcblxuXG4gICAgICAgICAgICBpZiAoaG9zdFNpemVDaGFuZ2VkIHx8IG92ZXJmbG93QW1vdW50LmMgfHwgaGVpZ2h0QXV0b0NoYW5nZWQgfHwgd2lkdGhBdXRvQ2hhbmdlZCB8fCByZXNpemVDaGFuZ2VkIHx8IGJveFNpemluZ0NoYW5nZWQgfHwgcGFkZGluZ0Fic29sdXRlQ2hhbmdlZCB8fCBpZ25vcmVPdmVybGF5U2Nyb2xsYmFySGlkaW5nQ2hhbmdlZCB8fCBjc3NEaXJlY3Rpb25DaGFuZ2VkKSB7XG4gICAgICAgICAgICAgIHJlZnJlc2hTY3JvbGxiYXJIYW5kbGVMZW5ndGgodHJ1ZSk7XG4gICAgICAgICAgICAgIHJlZnJlc2hTY3JvbGxiYXJIYW5kbGVPZmZzZXQodHJ1ZSk7XG4gICAgICAgICAgICAgIHJlZnJlc2hTY3JvbGxiYXJIYW5kbGVMZW5ndGgoZmFsc2UpO1xuICAgICAgICAgICAgICByZWZyZXNoU2Nyb2xsYmFySGFuZGxlT2Zmc2V0KGZhbHNlKTtcbiAgICAgICAgICAgIH0gLy9tYW5hZ2UgaW50ZXJhY3Rpdml0eVxuXG5cbiAgICAgICAgICAgIGlmIChzY3JvbGxiYXJzQ2xpY2tTY3JvbGxpbmdDaGFuZ2VkKSByZWZyZXNoU2Nyb2xsYmFyc0ludGVyYWN0aXZlKHRydWUsIHNjcm9sbGJhcnNDbGlja1Njcm9sbGluZyk7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsYmFyc0RyYWdTY3JvbGxpbmdDaGFuZ2VkKSByZWZyZXNoU2Nyb2xsYmFyc0ludGVyYWN0aXZlKGZhbHNlLCBzY3JvbGxiYXJzRHJhZ1Njcm9sbGluZyk7IC8vY2FsbGJhY2tzOlxuXG4gICAgICAgICAgICBkaXNwYXRjaENhbGxiYWNrKCdvbkRpcmVjdGlvbkNoYW5nZWQnLCB7XG4gICAgICAgICAgICAgIGlzUlRMOiBfaXNSVEwsXG4gICAgICAgICAgICAgIGRpcjogY3NzRGlyZWN0aW9uXG4gICAgICAgICAgICB9LCBjc3NEaXJlY3Rpb25DaGFuZ2VkKTtcbiAgICAgICAgICAgIGRpc3BhdGNoQ2FsbGJhY2soJ29uSG9zdFNpemVDaGFuZ2VkJywge1xuICAgICAgICAgICAgICB3aWR0aDogX2hvc3RTaXplQ2FjaGUudyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBfaG9zdFNpemVDYWNoZS5oXG4gICAgICAgICAgICB9LCBob3N0U2l6ZUNoYW5nZWQpO1xuICAgICAgICAgICAgZGlzcGF0Y2hDYWxsYmFjaygnb25Db250ZW50U2l6ZUNoYW5nZWQnLCB7XG4gICAgICAgICAgICAgIHdpZHRoOiBfY29udGVudFNjcm9sbFNpemVDYWNoZS53LFxuICAgICAgICAgICAgICBoZWlnaHQ6IF9jb250ZW50U2Nyb2xsU2l6ZUNhY2hlLmhcbiAgICAgICAgICAgIH0sIGNvbnRlbnRTaXplQ2hhbmdlZCk7XG4gICAgICAgICAgICBkaXNwYXRjaENhbGxiYWNrKCdvbk92ZXJmbG93Q2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgeDogaGFzT3ZlcmZsb3cueCxcbiAgICAgICAgICAgICAgeTogaGFzT3ZlcmZsb3cueSxcbiAgICAgICAgICAgICAgeFNjcm9sbGFibGU6IGhpZGVPdmVyZmxvdy54cyxcbiAgICAgICAgICAgICAgeVNjcm9sbGFibGU6IGhpZGVPdmVyZmxvdy55cyxcbiAgICAgICAgICAgICAgY2xpcHBlZDogaGlkZU92ZXJmbG93LnggfHwgaGlkZU92ZXJmbG93LnlcbiAgICAgICAgICAgIH0sIGhhc092ZXJmbG93LmMgfHwgaGlkZU92ZXJmbG93LmMpO1xuICAgICAgICAgICAgZGlzcGF0Y2hDYWxsYmFjaygnb25PdmVyZmxvd0Ftb3VudENoYW5nZWQnLCB7XG4gICAgICAgICAgICAgIHg6IG92ZXJmbG93QW1vdW50LngsXG4gICAgICAgICAgICAgIHk6IG92ZXJmbG93QW1vdW50LnlcbiAgICAgICAgICAgIH0sIG92ZXJmbG93QW1vdW50LmMpO1xuICAgICAgICAgIH0gLy9maXggYm9keSBtaW4gc2l6ZVxuXG5cbiAgICAgICAgICBpZiAoX2lzQm9keSAmJiBfYm9keU1pblNpemVDYWNoZSAmJiAoX2hhc092ZXJmbG93Q2FjaGUuYyB8fCBfYm9keU1pblNpemVDYWNoZS5jKSkge1xuICAgICAgICAgICAgLy9pdHMgcG9zc2libGUgdGhhdCBubyBtaW4gc2l6ZSB3YXMgbWVhc3VyZWQgdW50aWwgbm93LCBiZWNhdXNlIHRoZSBjb250ZW50IGFycmFuZ2UgZWxlbWVudCB3YXMganVzdCBhZGRlZCBub3csIGluIHRoaXMgY2FzZSwgbWVhc3VyZSBub3cgdGhlIG1pbiBzaXplLlxuICAgICAgICAgICAgaWYgKCFfYm9keU1pblNpemVDYWNoZS5mKSBib2R5TWluU2l6ZUNoYW5nZWQoKTtcbiAgICAgICAgICAgIGlmIChfbmF0aXZlU2Nyb2xsYmFySXNPdmVybGFpZC55ICYmIF9oYXNPdmVyZmxvd0NhY2hlLngpIF9jb250ZW50RWxlbWVudC5jc3MoX3N0ck1pbk1pbnVzICsgX3N0cldpZHRoLCBfYm9keU1pblNpemVDYWNoZS53ICsgX292ZXJsYXlTY3JvbGxiYXJEdW1teVNpemUueSk7XG4gICAgICAgICAgICBpZiAoX25hdGl2ZVNjcm9sbGJhcklzT3ZlcmxhaWQueCAmJiBfaGFzT3ZlcmZsb3dDYWNoZS55KSBfY29udGVudEVsZW1lbnQuY3NzKF9zdHJNaW5NaW51cyArIF9zdHJIZWlnaHQsIF9ib2R5TWluU2l6ZUNhY2hlLmggKyBfb3ZlcmxheVNjcm9sbGJhckR1bW15U2l6ZS54KTtcbiAgICAgICAgICAgIF9ib2R5TWluU2l6ZUNhY2hlLmMgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX2luaXRpYWxpemVkICYmIGNoYW5nZWRPcHRpb25zLnVwZGF0ZU9uTG9hZCkge1xuICAgICAgICAgICAgdXBkYXRlRWxlbWVudHNPbkxvYWQoKTtcbiAgICAgICAgICB9IC8vZnJlZXplUmVzaXplT2JzZXJ2ZXIoX3NpemVPYnNlcnZlckVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAvL2ZyZWV6ZVJlc2l6ZU9ic2VydmVyKF9zaXplQXV0b09ic2VydmVyRWxlbWVudCwgZmFsc2UpO1xuXG5cbiAgICAgICAgICBkaXNwYXRjaENhbGxiYWNrKCdvblVwZGF0ZWQnLCB7XG4gICAgICAgICAgICBmb3JjZWQ6IGZvcmNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVXBkYXRlcyB0aGUgZm91bmQgZWxlbWVudHMgb2Ygd2hpY2ggdGhlIGxvYWQgZXZlbnQgc2hhbGwgYmUgaGFuZGxlZC5cclxuICAgICAgICAgKi9cblxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnRzT25Mb2FkKCkge1xuICAgICAgICAgIGlmICghX2lzVGV4dGFyZWEpIHtcbiAgICAgICAgICAgIGVhY2hVcGRhdGVPbkxvYWQoZnVuY3Rpb24gKGksIHVwZGF0ZU9uTG9hZFNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgIF9jb250ZW50RWxlbWVudC5maW5kKHVwZGF0ZU9uTG9hZFNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uIChpLCBlbCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIGVsZW1lbnQgZG9lc24ndCBoYXZlIGEgdXBkYXRlT25Mb2FkQ2FsbGJhY2sgYXBwbGllZFxuICAgICAgICAgICAgICAgIGlmIChDT01QQVRJQklMSVRZLmluQShlbCwgX3VwZGF0ZU9uTG9hZEVsbXMpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgX3VwZGF0ZU9uTG9hZEVsbXMucHVzaChlbCk7XG5cbiAgICAgICAgICAgICAgICAgIEZSQU1FV09SSyhlbCkub2ZmKF91cGRhdGVPbkxvYWRFdmVudE5hbWUsIHVwZGF0ZU9uTG9hZENhbGxiYWNrKS5vbihfdXBkYXRlT25Mb2FkRXZlbnROYW1lLCB1cGRhdGVPbkxvYWRDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLz09PT0gT3B0aW9ucyA9PT09Ly9cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXRzIG5ldyBvcHRpb25zIGJ1dCBkb2Vzbid0IGNhbGwgdGhlIHVwZGF0ZSBtZXRob2QuXHJcbiAgICAgICAgICogQHBhcmFtIG5ld09wdGlvbnMgVGhlIG9iamVjdCB3aGljaCBjb250YWlucyB0aGUgbmV3IG9wdGlvbnMuXHJcbiAgICAgICAgICogQHJldHVybnMgeyp9IEEgb2JqZWN0IHdoaWNoIGNvbnRhaW5zIHRoZSBjaGFuZ2VkIG9wdGlvbnMuXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiBzZXRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgICAgICAgICB2YXIgdmFsaWRhdGVkT3B0cyA9IF9wbHVnaW5zT3B0aW9ucy5fdmFsaWRhdGUobmV3T3B0aW9ucywgX3BsdWdpbnNPcHRpb25zLl90ZW1wbGF0ZSwgdHJ1ZSwgX2N1cnJlbnRPcHRpb25zKTtcblxuICAgICAgICAgIF9jdXJyZW50T3B0aW9ucyA9IGV4dGVuZERlZXAoe30sIF9jdXJyZW50T3B0aW9ucywgdmFsaWRhdGVkT3B0cy5fZGVmYXVsdCk7XG4gICAgICAgICAgX2N1cnJlbnRQcmVwYXJlZE9wdGlvbnMgPSBleHRlbmREZWVwKHt9LCBfY3VycmVudFByZXBhcmVkT3B0aW9ucywgdmFsaWRhdGVkT3B0cy5fcHJlcGFyZWQpO1xuICAgICAgICAgIHJldHVybiB2YWxpZGF0ZWRPcHRzLl9wcmVwYXJlZDtcbiAgICAgICAgfSAvLz09PT0gU3RydWN0dXJlID09PT0vL1xuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEJ1aWxkcyBvciBkZXN0cm95cyB0aGUgd3JhcHBlciBhbmQgaGVscGVyIERPTSBlbGVtZW50cy5cclxuICAgICAgICAgKiBAcGFyYW0gZGVzdHJveSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgRE9NIHNoYWxsIGJlIGJ1aWxkIG9yIGRlc3Ryb3llZC5cclxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBCdWlsZHMgb3IgZGVzdHJveXMgdGhlIHdyYXBwZXIgYW5kIGhlbHBlciBET00gZWxlbWVudHMuXHJcbiAgICAgICAgICogQHBhcmFtIGRlc3Ryb3kgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIERPTSBzaGFsbCBiZSBidWlsZCBvciBkZXN0cm95ZWQuXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiBzZXR1cFN0cnVjdHVyZURPTShkZXN0cm95KSB7XG4gICAgICAgICAgdmFyIHN0clBhcmVudCA9ICdwYXJlbnQnO1xuICAgICAgICAgIHZhciBjbGFzc05hbWVSZXNpemVPYnNlcnZlckhvc3QgPSAnb3MtcmVzaXplLW9ic2VydmVyLWhvc3QnO1xuICAgICAgICAgIHZhciBjbGFzc05hbWVUZXh0YXJlYUVsZW1lbnRGdWxsID0gX2NsYXNzTmFtZVRleHRhcmVhRWxlbWVudCArIF9zdHJTcGFjZSArIF9jbGFzc05hbWVUZXh0SW5oZXJpdDtcbiAgICAgICAgICB2YXIgdGV4dGFyZWFDbGFzcyA9IF9pc1RleHRhcmVhID8gX3N0clNwYWNlICsgX2NsYXNzTmFtZVRleHRJbmhlcml0IDogX3N0ckVtcHR5O1xuICAgICAgICAgIHZhciBhZG9wdEF0dHJzID0gX2N1cnJlbnRQcmVwYXJlZE9wdGlvbnMudGV4dGFyZWEuaW5oZXJpdGVkQXR0cnM7XG4gICAgICAgICAgdmFyIGFkb3B0QXR0cnNNYXAgPSB7fTtcblxuICAgICAgICAgIHZhciBhcHBseUFkb3B0ZWRBdHRycyA9IGZ1bmN0aW9uIGFwcGx5QWRvcHRlZEF0dHJzKCkge1xuICAgICAgICAgICAgdmFyIGFwcGx5QWRvcHRlZEF0dHJzRWxtID0gZGVzdHJveSA/IF90YXJnZXRFbGVtZW50IDogX2hvc3RFbGVtZW50O1xuICAgICAgICAgICAgZWFjaChhZG9wdEF0dHJzTWFwLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICBpZiAodHlwZSh2YWx1ZSkgPT0gVFlQRVMucykge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT0gTEVYSUNPTi5jKSBhcHBseUFkb3B0ZWRBdHRyc0VsbS5hZGRDbGFzcyh2YWx1ZSk7ZWxzZSBhcHBseUFkb3B0ZWRBdHRyc0VsbS5hdHRyKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdmFyIGhvc3RFbGVtZW50Q2xhc3NOYW1lcyA9IFtfY2xhc3NOYW1lSG9zdEVsZW1lbnQsIF9jbGFzc05hbWVIb3N0RWxlbWVudEZvcmVpZ24sIF9jbGFzc05hbWVIb3N0VGV4dGFyZWFFbGVtZW50LCBfY2xhc3NOYW1lSG9zdFJlc2l6ZURpc2FibGVkLCBfY2xhc3NOYW1lSG9zdFJUTCwgX2NsYXNzTmFtZUhvc3RTY3JvbGxiYXJIb3Jpem9udGFsSGlkZGVuLCBfY2xhc3NOYW1lSG9zdFNjcm9sbGJhclZlcnRpY2FsSGlkZGVuLCBfY2xhc3NOYW1lSG9zdFRyYW5zaXRpb24sIF9jbGFzc05hbWVIb3N0U2Nyb2xsaW5nLCBfY2xhc3NOYW1lSG9zdE92ZXJmbG93LCBfY2xhc3NOYW1lSG9zdE92ZXJmbG93WCwgX2NsYXNzTmFtZUhvc3RPdmVyZmxvd1ksIF9jbGFzc05hbWVUaGVtZU5vbmUsIF9jbGFzc05hbWVUZXh0YXJlYUVsZW1lbnQsIF9jbGFzc05hbWVUZXh0SW5oZXJpdCwgX2NsYXNzTmFtZUNhY2hlXS5qb2luKF9zdHJTcGFjZSk7XG4gICAgICAgICAgdmFyIGhvc3RFbGVtZW50Q1NTID0ge307IC8vZ2V0IGhvc3QgZWxlbWVudCBhcyBmaXJzdCBlbGVtZW50LCBiZWNhdXNlIHRoYXQncyB0aGUgbW9zdCB1cHBlciBlbGVtZW50IGFuZCByZXF1aXJlZCBmb3IgdGhlIG90aGVyIGVsZW1lbnRzXG5cbiAgICAgICAgICBfaG9zdEVsZW1lbnQgPSBfaG9zdEVsZW1lbnQgfHwgKF9pc1RleHRhcmVhID8gX2RvbUV4aXN0cyA/IF90YXJnZXRFbGVtZW50W3N0clBhcmVudF0oKVtzdHJQYXJlbnRdKClbc3RyUGFyZW50XSgpW3N0clBhcmVudF0oKSA6IEZSQU1FV09SSyhnZW5lcmF0ZURpdihfY2xhc3NOYW1lSG9zdFRleHRhcmVhRWxlbWVudCkpIDogX3RhcmdldEVsZW1lbnQpO1xuICAgICAgICAgIF9jb250ZW50RWxlbWVudCA9IF9jb250ZW50RWxlbWVudCB8fCBzZWxlY3RPckdlbmVyYXRlRGl2QnlDbGFzcyhfY2xhc3NOYW1lQ29udGVudEVsZW1lbnQgKyB0ZXh0YXJlYUNsYXNzKTtcbiAgICAgICAgICBfdmlld3BvcnRFbGVtZW50ID0gX3ZpZXdwb3J0RWxlbWVudCB8fCBzZWxlY3RPckdlbmVyYXRlRGl2QnlDbGFzcyhfY2xhc3NOYW1lVmlld3BvcnRFbGVtZW50ICsgdGV4dGFyZWFDbGFzcyk7XG4gICAgICAgICAgX3BhZGRpbmdFbGVtZW50ID0gX3BhZGRpbmdFbGVtZW50IHx8IHNlbGVjdE9yR2VuZXJhdGVEaXZCeUNsYXNzKF9jbGFzc05hbWVQYWRkaW5nRWxlbWVudCArIHRleHRhcmVhQ2xhc3MpO1xuICAgICAgICAgIF9zaXplT2JzZXJ2ZXJFbGVtZW50ID0gX3NpemVPYnNlcnZlckVsZW1lbnQgfHwgc2VsZWN0T3JHZW5lcmF0ZURpdkJ5Q2xhc3MoY2xhc3NOYW1lUmVzaXplT2JzZXJ2ZXJIb3N0KTtcbiAgICAgICAgICBfdGV4dGFyZWFDb3ZlckVsZW1lbnQgPSBfdGV4dGFyZWFDb3ZlckVsZW1lbnQgfHwgKF9pc1RleHRhcmVhID8gc2VsZWN0T3JHZW5lcmF0ZURpdkJ5Q2xhc3MoX2NsYXNzTmFtZVRleHRhcmVhQ292ZXJFbGVtZW50KSA6IHVuZGVmaW5lZCQxKTsgLy9hZGQgdGhpcyBjbGFzcyB0byB3b3JrYXJvdW5kIGNsYXNzIGNoYW5naW5nIGlzc3VlcyB3aXRoIFVJIGZyYW1ld29ya3MgZXNwZWNpYWxseSBWdWVcblxuICAgICAgICAgIGlmIChfZG9tRXhpc3RzKSBhZGRDbGFzcyhfaG9zdEVsZW1lbnQsIF9jbGFzc05hbWVIb3N0RWxlbWVudEZvcmVpZ24pOyAvL29uIGRlc3Ryb3ksIHJlbW92ZSBhbGwgZ2VuZXJhdGVkIGNsYXNzIG5hbWVzIGZyb20gdGhlIGhvc3QgZWxlbWVudCBiZWZvcmUgY29sbGVjdGluZyB0aGUgYWRvcHRlZCBhdHRyaWJ1dGVzIFxuICAgICAgICAgIC8vdG8gcHJldmVudCBhZG9wdGluZyBnZW5lcmF0ZWQgY2xhc3MgbmFtZXNcblxuICAgICAgICAgIGlmIChkZXN0cm95KSByZW1vdmVDbGFzcyhfaG9zdEVsZW1lbnQsIGhvc3RFbGVtZW50Q2xhc3NOYW1lcyk7IC8vY29sbGVjdCBhbGwgYWRvcHRlZCBhdHRyaWJ1dGVzXG5cbiAgICAgICAgICBhZG9wdEF0dHJzID0gdHlwZShhZG9wdEF0dHJzKSA9PSBUWVBFUy5zID8gYWRvcHRBdHRycy5zcGxpdChfc3RyU3BhY2UpIDogYWRvcHRBdHRycztcblxuICAgICAgICAgIGlmIChDT01QQVRJQklMSVRZLmlzQShhZG9wdEF0dHJzKSAmJiBfaXNUZXh0YXJlYSkge1xuICAgICAgICAgICAgZWFjaChhZG9wdEF0dHJzLCBmdW5jdGlvbiAoaSwgdikge1xuICAgICAgICAgICAgICBpZiAodHlwZSh2KSA9PSBUWVBFUy5zKSB7XG4gICAgICAgICAgICAgICAgYWRvcHRBdHRyc01hcFt2XSA9IGRlc3Ryb3kgPyBfaG9zdEVsZW1lbnQuYXR0cih2KSA6IF90YXJnZXRFbGVtZW50LmF0dHIodik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghZGVzdHJveSkge1xuICAgICAgICAgICAgaWYgKF9pc1RleHRhcmVhKSB7XG4gICAgICAgICAgICAgIGlmICghX2N1cnJlbnRQcmVwYXJlZE9wdGlvbnMuc2l6ZUF1dG9DYXBhYmxlKSB7XG4gICAgICAgICAgICAgICAgaG9zdEVsZW1lbnRDU1NbX3N0cldpZHRoXSA9IF90YXJnZXRFbGVtZW50LmNzcyhfc3RyV2lkdGgpO1xuICAgICAgICAgICAgICAgIGhvc3RFbGVtZW50Q1NTW19zdHJIZWlnaHRdID0gX3RhcmdldEVsZW1lbnQuY3NzKF9zdHJIZWlnaHQpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFfZG9tRXhpc3RzKSBfdGFyZ2V0RWxlbWVudC5hZGRDbGFzcyhfY2xhc3NOYW1lVGV4dEluaGVyaXQpLndyYXAoX2hvc3RFbGVtZW50KTsgLy9qUXVlcnkgY2xvbmVzIGVsZW1lbnRzIGluIHdyYXAgZnVuY3Rpb25zLCBzbyB3ZSBoYXZlIHRvIHNlbGVjdCB0aGVtIGFnYWluXG5cbiAgICAgICAgICAgICAgX2hvc3RFbGVtZW50ID0gX3RhcmdldEVsZW1lbnRbc3RyUGFyZW50XSgpLmNzcyhob3N0RWxlbWVudENTUyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghX2RvbUV4aXN0cykge1xuICAgICAgICAgICAgICAvL2FkZCB0aGUgY29ycmVjdCBjbGFzcyB0byB0aGUgdGFyZ2V0IGVsZW1lbnRcbiAgICAgICAgICAgICAgYWRkQ2xhc3MoX3RhcmdldEVsZW1lbnQsIF9pc1RleHRhcmVhID8gY2xhc3NOYW1lVGV4dGFyZWFFbGVtZW50RnVsbCA6IF9jbGFzc05hbWVIb3N0RWxlbWVudCk7IC8vd3JhcCB0aGUgY29udGVudCBpbnRvIHRoZSBnZW5lcmF0ZWQgZWxlbWVudHMgdG8gY3JlYXRlIHRoZSByZXF1aXJlZCBET01cblxuICAgICAgICAgICAgICBfaG9zdEVsZW1lbnQud3JhcElubmVyKF9jb250ZW50RWxlbWVudCkud3JhcElubmVyKF92aWV3cG9ydEVsZW1lbnQpLndyYXBJbm5lcihfcGFkZGluZ0VsZW1lbnQpLnByZXBlbmQoX3NpemVPYnNlcnZlckVsZW1lbnQpOyAvL2pRdWVyeSBjbG9uZXMgZWxlbWVudHMgaW4gd3JhcCBmdW5jdGlvbnMsIHNvIHdlIGhhdmUgdG8gc2VsZWN0IHRoZW0gYWdhaW5cblxuXG4gICAgICAgICAgICAgIF9jb250ZW50RWxlbWVudCA9IGZpbmRGaXJzdChfaG9zdEVsZW1lbnQsIF9zdHJEb3QgKyBfY2xhc3NOYW1lQ29udGVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICBfdmlld3BvcnRFbGVtZW50ID0gZmluZEZpcnN0KF9ob3N0RWxlbWVudCwgX3N0ckRvdCArIF9jbGFzc05hbWVWaWV3cG9ydEVsZW1lbnQpO1xuICAgICAgICAgICAgICBfcGFkZGluZ0VsZW1lbnQgPSBmaW5kRmlyc3QoX2hvc3RFbGVtZW50LCBfc3RyRG90ICsgX2NsYXNzTmFtZVBhZGRpbmdFbGVtZW50KTtcblxuICAgICAgICAgICAgICBpZiAoX2lzVGV4dGFyZWEpIHtcbiAgICAgICAgICAgICAgICBfY29udGVudEVsZW1lbnQucHJlcGVuZChfdGV4dGFyZWFDb3ZlckVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgYXBwbHlBZG9wdGVkQXR0cnMoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoX25hdGl2ZVNjcm9sbGJhclN0eWxpbmcpIGFkZENsYXNzKF92aWV3cG9ydEVsZW1lbnQsIF9jbGFzc05hbWVWaWV3cG9ydE5hdGl2ZVNjcm9sbGJhcnNJbnZpc2libGUpO1xuICAgICAgICAgICAgaWYgKF9uYXRpdmVTY3JvbGxiYXJJc092ZXJsYWlkLnggJiYgX25hdGl2ZVNjcm9sbGJhcklzT3ZlcmxhaWQueSkgYWRkQ2xhc3MoX3ZpZXdwb3J0RWxlbWVudCwgX2NsYXNzTmFtZVZpZXdwb3J0TmF0aXZlU2Nyb2xsYmFyc092ZXJsYWlkKTtcbiAgICAgICAgICAgIGlmIChfaXNCb2R5KSBhZGRDbGFzcyhfaHRtbEVsZW1lbnQsIF9jbGFzc05hbWVIVE1MRWxlbWVudCk7XG4gICAgICAgICAgICBfc2l6ZU9ic2VydmVyRWxlbWVudE5hdGl2ZSA9IF9zaXplT2JzZXJ2ZXJFbGVtZW50WzBdO1xuICAgICAgICAgICAgX2hvc3RFbGVtZW50TmF0aXZlID0gX2hvc3RFbGVtZW50WzBdO1xuICAgICAgICAgICAgX3BhZGRpbmdFbGVtZW50TmF0aXZlID0gX3BhZGRpbmdFbGVtZW50WzBdO1xuICAgICAgICAgICAgX3ZpZXdwb3J0RWxlbWVudE5hdGl2ZSA9IF92aWV3cG9ydEVsZW1lbnRbMF07XG4gICAgICAgICAgICBfY29udGVudEVsZW1lbnROYXRpdmUgPSBfY29udGVudEVsZW1lbnRbMF07XG4gICAgICAgICAgICB1cGRhdGVWaWV3cG9ydEF0dHJzRnJvbVRhcmdldCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoX2RvbUV4aXN0cyAmJiBfaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgLy9jbGVhciBzaXplIG9ic2VydmVyXG4gICAgICAgICAgICAgIF9zaXplT2JzZXJ2ZXJFbGVtZW50LmNoaWxkcmVuKCkucmVtb3ZlKCk7IC8vcmVtb3ZlIHRoZSBzdHlsZSBwcm9wZXJ0eSBhbmQgY2xhc3NlcyBmcm9tIGFscmVhZHkgZ2VuZXJhdGVkIGVsZW1lbnRzXG5cblxuICAgICAgICAgICAgICBlYWNoKFtfcGFkZGluZ0VsZW1lbnQsIF92aWV3cG9ydEVsZW1lbnQsIF9jb250ZW50RWxlbWVudCwgX3RleHRhcmVhQ292ZXJFbGVtZW50XSwgZnVuY3Rpb24gKGksIGVsbSkge1xuICAgICAgICAgICAgICAgIGlmIChlbG0pIHtcbiAgICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKGVsbS5yZW1vdmVBdHRyKExFWElDT04ucyksIF9jbGFzc05hbWVzRHluYW1pY0Rlc3Ryb3kpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7IC8vYWRkIGNsYXNzZXMgdG8gdGhlIGhvc3QgZWxlbWVudCB3aGljaCB3YXMgcmVtb3ZlZCBwcmV2aW91c2x5IHRvIG1hdGNoIHRoZSBleHBlY3RlZCBET01cblxuICAgICAgICAgICAgICBhZGRDbGFzcyhfaG9zdEVsZW1lbnQsIF9pc1RleHRhcmVhID8gX2NsYXNzTmFtZUhvc3RUZXh0YXJlYUVsZW1lbnQgOiBfY2xhc3NOYW1lSG9zdEVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy9yZW1vdmUgc2l6ZSBvYnNlcnZlclxuICAgICAgICAgICAgICByZW1vdmUoX3NpemVPYnNlcnZlckVsZW1lbnQpOyAvL3Vud3JhcCB0aGUgY29udGVudCB0byByZXN0b3JlIERPTVxuXG4gICAgICAgICAgICAgIF9jb250ZW50RWxlbWVudC5jb250ZW50cygpLnVud3JhcCgpLnVud3JhcCgpLnVud3JhcCgpO1xuXG4gICAgICAgICAgICAgIGlmIChfaXNUZXh0YXJlYSkge1xuICAgICAgICAgICAgICAgIF90YXJnZXRFbGVtZW50LnVud3JhcCgpO1xuXG4gICAgICAgICAgICAgICAgcmVtb3ZlKF9ob3N0RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlKF90ZXh0YXJlYUNvdmVyRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgYXBwbHlBZG9wdGVkQXR0cnMoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoX2lzVGV4dGFyZWEpIF90YXJnZXRFbGVtZW50LnJlbW92ZUF0dHIoTEVYSUNPTi5zKTtcbiAgICAgICAgICAgIGlmIChfaXNCb2R5KSByZW1vdmVDbGFzcyhfaHRtbEVsZW1lbnQsIF9jbGFzc05hbWVIVE1MRWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFkZHMgb3IgcmVtb3ZlcyBhbGwgd3JhcHBlciBlbGVtZW50cyBpbnRlcmFjdGl2aXR5IGV2ZW50cy5cclxuICAgICAgICAgKiBAcGFyYW0gZGVzdHJveSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgRXZlbnRzIHNoYWxsIGJlIGFkZGVkIG9yIHJlbW92ZWQuXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiBzZXR1cFN0cnVjdHVyZUV2ZW50cygpIHtcbiAgICAgICAgICB2YXIgdGV4dGFyZWFLZXlEb3duUmVzdHJpY3RlZEtleUNvZGVzID0gWzExMiwgMTEzLCAxMTQsIDExNSwgMTE2LCAxMTcsIDExOCwgMTE5LCAxMjAsIDEyMSwgMTIzLCAvL0YxIHRvIEYxMlxuICAgICAgICAgIDMzLCAzNCwgLy9wYWdlIHVwLCBwYWdlIGRvd25cbiAgICAgICAgICAzNywgMzgsIDM5LCA0MCwgLy9sZWZ0LCB1cCwgcmlnaHQsIGRvd24gYXJyb3dzXG4gICAgICAgICAgMTYsIDE3LCAxOCwgMTksIDIwLCAxNDQgLy9TaGlmdCwgQ3RybCwgQWx0LCBQYXVzZSwgQ2Fwc0xvY2ssIE51bUxvY2tcbiAgICAgICAgICBdO1xuICAgICAgICAgIHZhciB0ZXh0YXJlYUtleURvd25LZXlDb2Rlc0xpc3QgPSBbXTtcbiAgICAgICAgICB2YXIgdGV4dGFyZWFVcGRhdGVJbnRlcnZhbElEO1xuICAgICAgICAgIHZhciBzY3JvbGxTdG9wVGltZW91dElkO1xuICAgICAgICAgIHZhciBzY3JvbGxTdG9wRGVsYXkgPSAxNzU7XG4gICAgICAgICAgdmFyIHN0ckZvY3VzID0gJ2ZvY3VzJztcblxuICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVRleHRhcmVhKGRvQ2xlYXJJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGV4dGFyZWFVcGRhdGUoKTtcblxuICAgICAgICAgICAgX2Jhc2UudXBkYXRlKF9zdHJBdXRvKTtcblxuICAgICAgICAgICAgaWYgKGRvQ2xlYXJJbnRlcnZhbCAmJiBfYXV0b1VwZGF0ZVJlY29tbWVuZGVkKSBjbGVhckludGVydmFsKHRleHRhcmVhVXBkYXRlSW50ZXJ2YWxJRCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gdGV4dGFyZWFPblNjcm9sbChldmVudCkge1xuICAgICAgICAgICAgX3RhcmdldEVsZW1lbnRbX3N0clNjcm9sbExlZnRdKF9ydGxTY3JvbGxCZWhhdmlvci5pICYmIF9ub3JtYWxpemVSVExDYWNoZSA/IDk5OTk5OTkgOiAwKTtcblxuICAgICAgICAgICAgX3RhcmdldEVsZW1lbnRbX3N0clNjcm9sbFRvcF0oMCk7XG5cbiAgICAgICAgICAgIENPTVBBVElCSUxJVFkucHJ2RChldmVudCk7XG4gICAgICAgICAgICBDT01QQVRJQklMSVRZLnN0cFAoZXZlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIHRleHRhcmVhT25Ecm9wKGV2ZW50KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKCFfZGVzdHJveWVkKSB1cGRhdGVUZXh0YXJlYSgpO1xuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIHRleHRhcmVhT25Gb2N1cygpIHtcbiAgICAgICAgICAgIF90ZXh0YXJlYUhhc0ZvY3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIGFkZENsYXNzKF9ob3N0RWxlbWVudCwgc3RyRm9jdXMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIHRleHRhcmVhT25Gb2N1c291dCgpIHtcbiAgICAgICAgICAgIF90ZXh0YXJlYUhhc0ZvY3VzID0gZmFsc2U7XG4gICAgICAgICAgICB0ZXh0YXJlYUtleURvd25LZXlDb2Rlc0xpc3QgPSBbXTtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKF9ob3N0RWxlbWVudCwgc3RyRm9jdXMpO1xuICAgICAgICAgICAgdXBkYXRlVGV4dGFyZWEodHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gdGV4dGFyZWFPbktleURvd24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcblxuICAgICAgICAgICAgaWYgKGluQXJyYXkoa2V5Q29kZSwgdGV4dGFyZWFLZXlEb3duUmVzdHJpY3RlZEtleUNvZGVzKSA8IDApIHtcbiAgICAgICAgICAgICAgaWYgKCF0ZXh0YXJlYUtleURvd25LZXlDb2Rlc0xpc3RbTEVYSUNPTi5sXSkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVRleHRhcmVhKCk7XG4gICAgICAgICAgICAgICAgdGV4dGFyZWFVcGRhdGVJbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwodXBkYXRlVGV4dGFyZWEsIDEwMDAgLyA2MCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoaW5BcnJheShrZXlDb2RlLCB0ZXh0YXJlYUtleURvd25LZXlDb2Rlc0xpc3QpIDwgMCkgdGV4dGFyZWFLZXlEb3duS2V5Q29kZXNMaXN0LnB1c2goa2V5Q29kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gdGV4dGFyZWFPbktleVVwKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBpbkFycmF5KGtleUNvZGUsIHRleHRhcmVhS2V5RG93bktleUNvZGVzTGlzdCk7XG5cbiAgICAgICAgICAgIGlmIChpbkFycmF5KGtleUNvZGUsIHRleHRhcmVhS2V5RG93blJlc3RyaWN0ZWRLZXlDb2RlcykgPCAwKSB7XG4gICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB0ZXh0YXJlYUtleURvd25LZXlDb2Rlc0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgaWYgKCF0ZXh0YXJlYUtleURvd25LZXlDb2Rlc0xpc3RbTEVYSUNPTi5sXSkgdXBkYXRlVGV4dGFyZWEodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gY29udGVudE9uVHJhbnNpdGlvbkVuZChldmVudCkge1xuICAgICAgICAgICAgaWYgKF9hdXRvVXBkYXRlQ2FjaGUgPT09IHRydWUpIHJldHVybjtcbiAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQub3JpZ2luYWxFdmVudCB8fCBldmVudDtcbiAgICAgICAgICAgIGlmIChpc1NpemVBZmZlY3RpbmdDU1NQcm9wZXJ0eShldmVudC5wcm9wZXJ0eU5hbWUpKSBfYmFzZS51cGRhdGUoX3N0ckF1dG8pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIHZpZXdwb3J0T25TY3JvbGwoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghX3NsZWVwaW5nKSB7XG4gICAgICAgICAgICAgIGlmIChzY3JvbGxTdG9wVGltZW91dElkICE9PSB1bmRlZmluZWQkMSkgY2xlYXJUaW1lb3V0KHNjcm9sbFN0b3BUaW1lb3V0SWQpO2Vsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChfc2Nyb2xsYmFyc0F1dG9IaWRlU2Nyb2xsIHx8IF9zY3JvbGxiYXJzQXV0b0hpZGVNb3ZlKSByZWZyZXNoU2Nyb2xsYmFyc0F1dG9IaWRlKHRydWUpO1xuICAgICAgICAgICAgICAgIGlmICghbmF0aXZlT3ZlcmxheVNjcm9sbGJhcnNBcmVBY3RpdmUoKSkgYWRkQ2xhc3MoX2hvc3RFbGVtZW50LCBfY2xhc3NOYW1lSG9zdFNjcm9sbGluZyk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2hDYWxsYmFjaygnb25TY3JvbGxTdGFydCcsIGV2ZW50KTtcbiAgICAgICAgICAgICAgfSAvL2lmIGEgc2Nyb2xsYmFycyBoYW5kbGUgZ2V0cyBkcmFnZ2VkLCB0aGUgbW91c2Vtb3ZlIGV2ZW50IGlzIHJlc3BvbnNpYmxlIGZvciByZWZyZXNoaW5nIHRoZSBoYW5kbGUgb2Zmc2V0XG4gICAgICAgICAgICAgIC8vYmVjYXVzZSBpZiBDU1Mgc2Nyb2xsLXNuYXAgaXMgdXNlZCwgdGhlIGhhbmRsZSBvZmZzZXQgZ2V0cyBvbmx5IHJlZnJlc2hlZCBvbiBldmVyeSBzbmFwIHBvaW50XG4gICAgICAgICAgICAgIC8vdGhpcyBsb29rcyBsYWdneSAmIGNsdW5reSwgaXQgbG9va3MgbXVjaCBiZXR0ZXIgaWYgdGhlIG9mZnNldCByZWZyZXNoZXMgd2l0aCB0aGUgbW91c2Vtb3ZlXG5cbiAgICAgICAgICAgICAgaWYgKCFfc2Nyb2xsYmFyc0hhbmRsZXNEZWZpbmVTY3JvbGxQb3MpIHtcbiAgICAgICAgICAgICAgICByZWZyZXNoU2Nyb2xsYmFySGFuZGxlT2Zmc2V0KHRydWUpO1xuICAgICAgICAgICAgICAgIHJlZnJlc2hTY3JvbGxiYXJIYW5kbGVPZmZzZXQoZmFsc2UpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZGlzcGF0Y2hDYWxsYmFjaygnb25TY3JvbGwnLCBldmVudCk7XG4gICAgICAgICAgICAgIHNjcm9sbFN0b3BUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIV9kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgICAgIC8vT25TY3JvbGxTdG9wOlxuICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNjcm9sbFN0b3BUaW1lb3V0SWQpO1xuICAgICAgICAgICAgICAgICAgc2Nyb2xsU3RvcFRpbWVvdXRJZCA9IHVuZGVmaW5lZCQxO1xuICAgICAgICAgICAgICAgICAgaWYgKF9zY3JvbGxiYXJzQXV0b0hpZGVTY3JvbGwgfHwgX3Njcm9sbGJhcnNBdXRvSGlkZU1vdmUpIHJlZnJlc2hTY3JvbGxiYXJzQXV0b0hpZGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgaWYgKCFuYXRpdmVPdmVybGF5U2Nyb2xsYmFyc0FyZUFjdGl2ZSgpKSByZW1vdmVDbGFzcyhfaG9zdEVsZW1lbnQsIF9jbGFzc05hbWVIb3N0U2Nyb2xsaW5nKTtcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoQ2FsbGJhY2soJ29uU2Nyb2xsU3RvcCcsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sIHNjcm9sbFN0b3BEZWxheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKF9pc1RleHRhcmVhKSB7XG4gICAgICAgICAgICBpZiAoX21zaWVWZXJzaW9uID4gOSB8fCAhX2F1dG9VcGRhdGVSZWNvbW1lbmRlZCkge1xuICAgICAgICAgICAgICBhZGREZXN0cm95RXZlbnRMaXN0ZW5lcihfdGFyZ2V0RWxlbWVudCwgJ2lucHV0JywgdXBkYXRlVGV4dGFyZWEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYWRkRGVzdHJveUV2ZW50TGlzdGVuZXIoX3RhcmdldEVsZW1lbnQsIFtfc3RyS2V5RG93bkV2ZW50LCBfc3RyS2V5VXBFdmVudF0sIFt0ZXh0YXJlYU9uS2V5RG93biwgdGV4dGFyZWFPbktleVVwXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFkZERlc3Ryb3lFdmVudExpc3RlbmVyKF90YXJnZXRFbGVtZW50LCBbX3N0clNjcm9sbCwgJ2Ryb3AnLCBzdHJGb2N1cywgc3RyRm9jdXMgKyAnb3V0J10sIFt0ZXh0YXJlYU9uU2Nyb2xsLCB0ZXh0YXJlYU9uRHJvcCwgdGV4dGFyZWFPbkZvY3VzLCB0ZXh0YXJlYU9uRm9jdXNvdXRdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkRGVzdHJveUV2ZW50TGlzdGVuZXIoX2NvbnRlbnRFbGVtZW50LCBfc3RyVHJhbnNpdGlvbkVuZEV2ZW50LCBjb250ZW50T25UcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhZGREZXN0cm95RXZlbnRMaXN0ZW5lcihfdmlld3BvcnRFbGVtZW50LCBfc3RyU2Nyb2xsLCB2aWV3cG9ydE9uU2Nyb2xsLCB0cnVlKTtcbiAgICAgICAgfSAvLz09PT0gU2Nyb2xsYmFycyA9PT09Ly9cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBCdWlsZHMgb3IgZGVzdHJveXMgYWxsIHNjcm9sbGJhciBET00gZWxlbWVudHMgKHNjcm9sbGJhciwgdHJhY2ssIGhhbmRsZSlcclxuICAgICAgICAgKiBAcGFyYW0gZGVzdHJveSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgRE9NIHNoYWxsIGJlIGJ1aWxkIG9yIGRlc3Ryb3llZC5cclxuICAgICAgICAgKi9cblxuXG4gICAgICAgIGZ1bmN0aW9uIHNldHVwU2Nyb2xsYmFyc0RPTShkZXN0cm95KSB7XG4gICAgICAgICAgdmFyIHNlbGVjdE9yR2VuZXJhdGVTY3JvbGxiYXJET00gPSBmdW5jdGlvbiBzZWxlY3RPckdlbmVyYXRlU2Nyb2xsYmFyRE9NKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgdmFyIHNjcm9sbGJhckNsYXNzTmFtZSA9IGlzSG9yaXpvbnRhbCA/IF9jbGFzc05hbWVTY3JvbGxiYXJIb3Jpem9udGFsIDogX2NsYXNzTmFtZVNjcm9sbGJhclZlcnRpY2FsO1xuICAgICAgICAgICAgdmFyIHNjcm9sbGJhciA9IHNlbGVjdE9yR2VuZXJhdGVEaXZCeUNsYXNzKF9jbGFzc05hbWVTY3JvbGxiYXIgKyBfc3RyU3BhY2UgKyBzY3JvbGxiYXJDbGFzc05hbWUsIHRydWUpO1xuICAgICAgICAgICAgdmFyIHRyYWNrID0gc2VsZWN0T3JHZW5lcmF0ZURpdkJ5Q2xhc3MoX2NsYXNzTmFtZVNjcm9sbGJhclRyYWNrLCBzY3JvbGxiYXIpO1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IHNlbGVjdE9yR2VuZXJhdGVEaXZCeUNsYXNzKF9jbGFzc05hbWVTY3JvbGxiYXJIYW5kbGUsIHNjcm9sbGJhcik7XG5cbiAgICAgICAgICAgIGlmICghX2RvbUV4aXN0cyAmJiAhZGVzdHJveSkge1xuICAgICAgICAgICAgICBzY3JvbGxiYXIuYXBwZW5kKHRyYWNrKTtcbiAgICAgICAgICAgICAgdHJhY2suYXBwZW5kKGhhbmRsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIF9zY3JvbGxiYXI6IHNjcm9sbGJhcixcbiAgICAgICAgICAgICAgX3RyYWNrOiB0cmFjayxcbiAgICAgICAgICAgICAgX2hhbmRsZTogaGFuZGxlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBmdW5jdGlvbiByZXNldFNjcm9sbGJhckRPTShpc0hvcml6b250YWwpIHtcbiAgICAgICAgICAgIHZhciBzY3JvbGxiYXJWYXJzID0gZ2V0U2Nyb2xsYmFyVmFycyhpc0hvcml6b250YWwpO1xuICAgICAgICAgICAgdmFyIHNjcm9sbGJhciA9IHNjcm9sbGJhclZhcnMuX3Njcm9sbGJhcjtcbiAgICAgICAgICAgIHZhciB0cmFjayA9IHNjcm9sbGJhclZhcnMuX3RyYWNrO1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IHNjcm9sbGJhclZhcnMuX2hhbmRsZTtcblxuICAgICAgICAgICAgaWYgKF9kb21FeGlzdHMgJiYgX2luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgIGVhY2goW3Njcm9sbGJhciwgdHJhY2ssIGhhbmRsZV0sIGZ1bmN0aW9uIChpLCBlbG0pIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhlbG0ucmVtb3ZlQXR0cihMRVhJQ09OLnMpLCBfY2xhc3NOYW1lc0R5bmFtaWNEZXN0cm95KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZW1vdmUoc2Nyb2xsYmFyIHx8IHNlbGVjdE9yR2VuZXJhdGVTY3JvbGxiYXJET00oaXNIb3Jpem9udGFsKS5fc2Nyb2xsYmFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgaG9yaXpvbnRhbEVsZW1lbnRzO1xuICAgICAgICAgIHZhciB2ZXJ0aWNhbEVsZW1lbnRzO1xuXG4gICAgICAgICAgaWYgKCFkZXN0cm95KSB7XG4gICAgICAgICAgICBob3Jpem9udGFsRWxlbWVudHMgPSBzZWxlY3RPckdlbmVyYXRlU2Nyb2xsYmFyRE9NKHRydWUpO1xuICAgICAgICAgICAgdmVydGljYWxFbGVtZW50cyA9IHNlbGVjdE9yR2VuZXJhdGVTY3JvbGxiYXJET00oKTtcbiAgICAgICAgICAgIF9zY3JvbGxiYXJIb3Jpem9udGFsRWxlbWVudCA9IGhvcml6b250YWxFbGVtZW50cy5fc2Nyb2xsYmFyO1xuICAgICAgICAgICAgX3Njcm9sbGJhckhvcml6b250YWxUcmFja0VsZW1lbnQgPSBob3Jpem9udGFsRWxlbWVudHMuX3RyYWNrO1xuICAgICAgICAgICAgX3Njcm9sbGJhckhvcml6b250YWxIYW5kbGVFbGVtZW50ID0gaG9yaXpvbnRhbEVsZW1lbnRzLl9oYW5kbGU7XG4gICAgICAgICAgICBfc2Nyb2xsYmFyVmVydGljYWxFbGVtZW50ID0gdmVydGljYWxFbGVtZW50cy5fc2Nyb2xsYmFyO1xuICAgICAgICAgICAgX3Njcm9sbGJhclZlcnRpY2FsVHJhY2tFbGVtZW50ID0gdmVydGljYWxFbGVtZW50cy5fdHJhY2s7XG4gICAgICAgICAgICBfc2Nyb2xsYmFyVmVydGljYWxIYW5kbGVFbGVtZW50ID0gdmVydGljYWxFbGVtZW50cy5faGFuZGxlO1xuXG4gICAgICAgICAgICBpZiAoIV9kb21FeGlzdHMpIHtcbiAgICAgICAgICAgICAgX3BhZGRpbmdFbGVtZW50LmFmdGVyKF9zY3JvbGxiYXJWZXJ0aWNhbEVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgIF9wYWRkaW5nRWxlbWVudC5hZnRlcihfc2Nyb2xsYmFySG9yaXpvbnRhbEVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNldFNjcm9sbGJhckRPTSh0cnVlKTtcbiAgICAgICAgICAgIHJlc2V0U2Nyb2xsYmFyRE9NKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEluaXRpYWxpemVzIGFsbCBzY3JvbGxiYXIgaW50ZXJhY3Rpdml0eSBldmVudHMuICh0cmFjayBhbmQgaGFuZGxlIGRyYWdnaW5nLCBjbGlja2luZywgc2Nyb2xsaW5nKVxyXG4gICAgICAgICAqIEBwYXJhbSBpc0hvcml6b250YWwgVHJ1ZSBpZiB0aGUgdGFyZ2V0IHNjcm9sbGJhciBpcyB0aGUgaG9yaXpvbnRhbCBzY3JvbGxiYXIsIGZhbHNlIGlmIHRoZSB0YXJnZXQgc2Nyb2xsYmFyIGlzIHRoZSB2ZXJ0aWNhbCBzY3JvbGxiYXIuXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiBzZXR1cFNjcm9sbGJhckV2ZW50cyhpc0hvcml6b250YWwpIHtcbiAgICAgICAgICB2YXIgc2Nyb2xsYmFyVmFycyA9IGdldFNjcm9sbGJhclZhcnMoaXNIb3Jpem9udGFsKTtcbiAgICAgICAgICB2YXIgc2Nyb2xsYmFyVmFyc0luZm8gPSBzY3JvbGxiYXJWYXJzLl9pbmZvO1xuICAgICAgICAgIHZhciBpbnNpZGVJRnJhbWUgPSBfd2luZG93RWxlbWVudE5hdGl2ZS50b3AgIT09IF93aW5kb3dFbGVtZW50TmF0aXZlO1xuICAgICAgICAgIHZhciB4eSA9IHNjcm9sbGJhclZhcnMuX3hfeTtcbiAgICAgICAgICB2YXIgWFkgPSBzY3JvbGxiYXJWYXJzLl9YX1k7XG4gICAgICAgICAgdmFyIHNjcm9sbCA9IF9zdHJTY3JvbGwgKyBzY3JvbGxiYXJWYXJzLl9MZWZ0X1RvcDtcbiAgICAgICAgICB2YXIgc3RyQWN0aXZlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgdmFyIHN0clNuYXBIYW5kbGUgPSAnc25hcEhhbmRsZSc7XG4gICAgICAgICAgdmFyIHN0ckNsaWNrRXZlbnQgPSAnY2xpY2snO1xuICAgICAgICAgIHZhciBzY3JvbGxEdXJhdGlvbkZhY3RvciA9IDE7XG4gICAgICAgICAgdmFyIGluY3JlYXNlRGVjcmVhc2VTY3JvbGxBbW91bnRLZXlDb2RlcyA9IFsxNiwgMTddOyAvL3NoaWZ0LCBjdHJsXG5cbiAgICAgICAgICB2YXIgdHJhY2tUaW1lb3V0O1xuICAgICAgICAgIHZhciBtb3VzZURvd25TY3JvbGw7XG4gICAgICAgICAgdmFyIG1vdXNlRG93bk9mZnNldDtcbiAgICAgICAgICB2YXIgbW91c2VEb3duSW52ZXJ0ZWRTY2FsZTtcblxuICAgICAgICAgIGZ1bmN0aW9uIGdldFBvaW50ZXJQb3NpdGlvbihldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF9tc2llVmVyc2lvbiAmJiBpbnNpZGVJRnJhbWUgPyBldmVudFsnc2NyZWVuJyArIFhZXSA6IENPTVBBVElCSUxJVFkucGFnZShldmVudClbeHldOyAvL3VzZSBzY3JlZW4gY29vcmRpbmF0ZXMgaW4gRURHRSAmIElFIGJlY2F1c2UgdGhlIHBhZ2UgdmFsdWVzIGFyZSBpbmNvcnJlY3QgaW4gZnJhbWVzLlxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIGdldFByZXBhcmVkU2Nyb2xsYmFyc09wdGlvbihuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gX2N1cnJlbnRQcmVwYXJlZE9wdGlvbnMuc2Nyb2xsYmFyc1tuYW1lXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBpbmNyZWFzZVRyYWNrU2Nyb2xsQW1vdW50KCkge1xuICAgICAgICAgICAgc2Nyb2xsRHVyYXRpb25GYWN0b3IgPSAwLjU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gZGVjcmVhc2VUcmFja1Njcm9sbEFtb3VudCgpIHtcbiAgICAgICAgICAgIHNjcm9sbER1cmF0aW9uRmFjdG9yID0gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBzdG9wQ2xpY2tFdmVudFByb3BhZ2F0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBDT01QQVRJQklMSVRZLnN0cFAoZXZlbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIGRvY3VtZW50S2V5RG93bihldmVudCkge1xuICAgICAgICAgICAgaWYgKGluQXJyYXkoZXZlbnQua2V5Q29kZSwgaW5jcmVhc2VEZWNyZWFzZVNjcm9sbEFtb3VudEtleUNvZGVzKSA+IC0xKSBpbmNyZWFzZVRyYWNrU2Nyb2xsQW1vdW50KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gZG9jdW1lbnRLZXlVcChldmVudCkge1xuICAgICAgICAgICAgaWYgKGluQXJyYXkoZXZlbnQua2V5Q29kZSwgaW5jcmVhc2VEZWNyZWFzZVNjcm9sbEFtb3VudEtleUNvZGVzKSA+IC0xKSBkZWNyZWFzZVRyYWNrU2Nyb2xsQW1vdW50KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gb25Nb3VzZVRvdWNoRG93bkNvbnRpbnVlKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxFdmVudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgfHwgZXZlbnQ7XG4gICAgICAgICAgICB2YXIgaXNUb3VjaEV2ZW50ID0gb3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQkMTtcbiAgICAgICAgICAgIHJldHVybiBfc2xlZXBpbmcgfHwgX2Rlc3Ryb3llZCB8fCBuYXRpdmVPdmVybGF5U2Nyb2xsYmFyc0FyZUFjdGl2ZSgpIHx8ICFfc2Nyb2xsYmFyc0RyYWdTY3JvbGxpbmdDYWNoZSB8fCBpc1RvdWNoRXZlbnQgJiYgIWdldFByZXBhcmVkU2Nyb2xsYmFyc09wdGlvbigndG91Y2hTdXBwb3J0JykgPyBmYWxzZSA6IENPTVBBVElCSUxJVFkubUJ0bihldmVudCkgPT09IDEgfHwgaXNUb3VjaEV2ZW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIGRvY3VtZW50RHJhZ01vdmUoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChvbk1vdXNlVG91Y2hEb3duQ29udGludWUoZXZlbnQpKSB7XG4gICAgICAgICAgICAgIHZhciB0cmFja0xlbmd0aCA9IHNjcm9sbGJhclZhcnNJbmZvLl90cmFja0xlbmd0aDtcbiAgICAgICAgICAgICAgdmFyIGhhbmRsZUxlbmd0aCA9IHNjcm9sbGJhclZhcnNJbmZvLl9oYW5kbGVMZW5ndGg7XG4gICAgICAgICAgICAgIHZhciBzY3JvbGxSYW5nZSA9IHNjcm9sbGJhclZhcnNJbmZvLl9tYXhTY3JvbGw7XG4gICAgICAgICAgICAgIHZhciBzY3JvbGxSYXcgPSAoZ2V0UG9pbnRlclBvc2l0aW9uKGV2ZW50KSAtIG1vdXNlRG93bk9mZnNldCkgKiBtb3VzZURvd25JbnZlcnRlZFNjYWxlO1xuICAgICAgICAgICAgICB2YXIgc2Nyb2xsRGVsdGFQZXJjZW50ID0gc2Nyb2xsUmF3IC8gKHRyYWNrTGVuZ3RoIC0gaGFuZGxlTGVuZ3RoKTtcbiAgICAgICAgICAgICAgdmFyIHNjcm9sbERlbHRhID0gc2Nyb2xsUmFuZ2UgKiBzY3JvbGxEZWx0YVBlcmNlbnQ7XG4gICAgICAgICAgICAgIHNjcm9sbERlbHRhID0gaXNGaW5pdGUoc2Nyb2xsRGVsdGEpID8gc2Nyb2xsRGVsdGEgOiAwO1xuICAgICAgICAgICAgICBpZiAoX2lzUlRMICYmIGlzSG9yaXpvbnRhbCAmJiAhX3J0bFNjcm9sbEJlaGF2aW9yLmkpIHNjcm9sbERlbHRhICo9IC0xO1xuXG4gICAgICAgICAgICAgIF92aWV3cG9ydEVsZW1lbnRbc2Nyb2xsXShNQVRILnJvdW5kKG1vdXNlRG93blNjcm9sbCArIHNjcm9sbERlbHRhKSk7XG5cbiAgICAgICAgICAgICAgaWYgKF9zY3JvbGxiYXJzSGFuZGxlc0RlZmluZVNjcm9sbFBvcykgcmVmcmVzaFNjcm9sbGJhckhhbmRsZU9mZnNldChpc0hvcml6b250YWwsIG1vdXNlRG93blNjcm9sbCArIHNjcm9sbERlbHRhKTtcbiAgICAgICAgICAgICAgaWYgKCFfc3VwcG9ydFBhc3NpdmVFdmVudHMpIENPTVBBVElCSUxJVFkucHJ2RChldmVudCk7XG4gICAgICAgICAgICB9IGVsc2UgZG9jdW1lbnRNb3VzZVRvdWNoVXAoZXZlbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIGRvY3VtZW50TW91c2VUb3VjaFVwKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudCA9IGV2ZW50IHx8IGV2ZW50Lm9yaWdpbmFsRXZlbnQ7XG4gICAgICAgICAgICBzZXR1cFJlc3BvbnNpdmVFdmVudExpc3RlbmVyKF9kb2N1bWVudEVsZW1lbnQsIFtfc3RyTW91c2VUb3VjaE1vdmVFdmVudCwgX3N0ck1vdXNlVG91Y2hVcEV2ZW50LCBfc3RyS2V5RG93bkV2ZW50LCBfc3RyS2V5VXBFdmVudCwgX3N0clNlbGVjdFN0YXJ0RXZlbnRdLCBbZG9jdW1lbnREcmFnTW92ZSwgZG9jdW1lbnRNb3VzZVRvdWNoVXAsIGRvY3VtZW50S2V5RG93biwgZG9jdW1lbnRLZXlVcCwgZG9jdW1lbnRPblNlbGVjdFN0YXJ0XSwgdHJ1ZSk7XG4gICAgICAgICAgICBDT01QQVRJQklMSVRZLnJBRigpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc2V0dXBSZXNwb25zaXZlRXZlbnRMaXN0ZW5lcihfZG9jdW1lbnRFbGVtZW50LCBzdHJDbGlja0V2ZW50LCBzdG9wQ2xpY2tFdmVudFByb3BhZ2F0aW9uLCB0cnVlLCB7XG4gICAgICAgICAgICAgICAgX2NhcHR1cmU6IHRydWVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChfc2Nyb2xsYmFyc0hhbmRsZXNEZWZpbmVTY3JvbGxQb3MpIHJlZnJlc2hTY3JvbGxiYXJIYW5kbGVPZmZzZXQoaXNIb3Jpem9udGFsLCB0cnVlKTtcbiAgICAgICAgICAgIF9zY3JvbGxiYXJzSGFuZGxlc0RlZmluZVNjcm9sbFBvcyA9IGZhbHNlO1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoX2JvZHlFbGVtZW50LCBfY2xhc3NOYW1lRHJhZ2dpbmcpO1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2Nyb2xsYmFyVmFycy5faGFuZGxlLCBzdHJBY3RpdmUpO1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2Nyb2xsYmFyVmFycy5fdHJhY2ssIHN0ckFjdGl2ZSk7XG4gICAgICAgICAgICByZW1vdmVDbGFzcyhzY3JvbGxiYXJWYXJzLl9zY3JvbGxiYXIsIHN0ckFjdGl2ZSk7XG4gICAgICAgICAgICBtb3VzZURvd25TY3JvbGwgPSB1bmRlZmluZWQkMTtcbiAgICAgICAgICAgIG1vdXNlRG93bk9mZnNldCA9IHVuZGVmaW5lZCQxO1xuICAgICAgICAgICAgbW91c2VEb3duSW52ZXJ0ZWRTY2FsZSA9IDE7XG4gICAgICAgICAgICBkZWNyZWFzZVRyYWNrU2Nyb2xsQW1vdW50KCk7XG5cbiAgICAgICAgICAgIGlmICh0cmFja1RpbWVvdXQgIT09IHVuZGVmaW5lZCQxKSB7XG4gICAgICAgICAgICAgIF9iYXNlLnNjcm9sbFN0b3AoKTtcblxuICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodHJhY2tUaW1lb3V0KTtcbiAgICAgICAgICAgICAgdHJhY2tUaW1lb3V0ID0gdW5kZWZpbmVkJDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgICB2YXIgcmVjdCA9IF9ob3N0RWxlbWVudE5hdGl2ZVtMRVhJQ09OLmJDUl0oKTtcblxuICAgICAgICAgICAgICB2YXIgbW91c2VJbnNpZGVIb3N0ID0gZXZlbnQuY2xpZW50WCA+PSByZWN0LmxlZnQgJiYgZXZlbnQuY2xpZW50WCA8PSByZWN0LnJpZ2h0ICYmIGV2ZW50LmNsaWVudFkgPj0gcmVjdC50b3AgJiYgZXZlbnQuY2xpZW50WSA8PSByZWN0LmJvdHRvbTsgLy9pZiBtb3VzZSBpcyBvdXRzaWRlIGhvc3QgZWxlbWVudFxuXG4gICAgICAgICAgICAgIGlmICghbW91c2VJbnNpZGVIb3N0KSBob3N0T25Nb3VzZUxlYXZlKCk7XG4gICAgICAgICAgICAgIGlmIChfc2Nyb2xsYmFyc0F1dG9IaWRlU2Nyb2xsIHx8IF9zY3JvbGxiYXJzQXV0b0hpZGVNb3ZlKSByZWZyZXNoU2Nyb2xsYmFyc0F1dG9IaWRlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBvbkhhbmRsZU1vdXNlVG91Y2hEb3duKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAob25Nb3VzZVRvdWNoRG93bkNvbnRpbnVlKGV2ZW50KSkgb25IYW5kbGVNb3VzZVRvdWNoRG93bkFjdGlvbihldmVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gb25IYW5kbGVNb3VzZVRvdWNoRG93bkFjdGlvbihldmVudCkge1xuICAgICAgICAgICAgbW91c2VEb3duU2Nyb2xsID0gX3ZpZXdwb3J0RWxlbWVudFtzY3JvbGxdKCk7XG4gICAgICAgICAgICBtb3VzZURvd25TY3JvbGwgPSBpc05hTihtb3VzZURvd25TY3JvbGwpID8gMCA6IG1vdXNlRG93blNjcm9sbDtcbiAgICAgICAgICAgIGlmIChfaXNSVEwgJiYgaXNIb3Jpem9udGFsICYmICFfcnRsU2Nyb2xsQmVoYXZpb3IubiB8fCAhX2lzUlRMKSBtb3VzZURvd25TY3JvbGwgPSBtb3VzZURvd25TY3JvbGwgPCAwID8gMCA6IG1vdXNlRG93blNjcm9sbDtcbiAgICAgICAgICAgIG1vdXNlRG93bkludmVydGVkU2NhbGUgPSBnZXRIb3N0RWxlbWVudEludmVydGVkU2NhbGUoKVt4eV07XG4gICAgICAgICAgICBtb3VzZURvd25PZmZzZXQgPSBnZXRQb2ludGVyUG9zaXRpb24oZXZlbnQpO1xuICAgICAgICAgICAgX3Njcm9sbGJhcnNIYW5kbGVzRGVmaW5lU2Nyb2xsUG9zID0gIWdldFByZXBhcmVkU2Nyb2xsYmFyc09wdGlvbihzdHJTbmFwSGFuZGxlKTtcbiAgICAgICAgICAgIGFkZENsYXNzKF9ib2R5RWxlbWVudCwgX2NsYXNzTmFtZURyYWdnaW5nKTtcbiAgICAgICAgICAgIGFkZENsYXNzKHNjcm9sbGJhclZhcnMuX2hhbmRsZSwgc3RyQWN0aXZlKTtcbiAgICAgICAgICAgIGFkZENsYXNzKHNjcm9sbGJhclZhcnMuX3Njcm9sbGJhciwgc3RyQWN0aXZlKTtcbiAgICAgICAgICAgIHNldHVwUmVzcG9uc2l2ZUV2ZW50TGlzdGVuZXIoX2RvY3VtZW50RWxlbWVudCwgW19zdHJNb3VzZVRvdWNoTW92ZUV2ZW50LCBfc3RyTW91c2VUb3VjaFVwRXZlbnQsIF9zdHJTZWxlY3RTdGFydEV2ZW50XSwgW2RvY3VtZW50RHJhZ01vdmUsIGRvY3VtZW50TW91c2VUb3VjaFVwLCBkb2N1bWVudE9uU2VsZWN0U3RhcnRdKTtcbiAgICAgICAgICAgIENPTVBBVElCSUxJVFkuckFGKCkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzZXR1cFJlc3BvbnNpdmVFdmVudExpc3RlbmVyKF9kb2N1bWVudEVsZW1lbnQsIHN0ckNsaWNrRXZlbnQsIHN0b3BDbGlja0V2ZW50UHJvcGFnYXRpb24sIGZhbHNlLCB7XG4gICAgICAgICAgICAgICAgX2NhcHR1cmU6IHRydWVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChfbXNpZVZlcnNpb24gfHwgIV9kb2N1bWVudE1peGVkKSBDT01QQVRJQklMSVRZLnBydkQoZXZlbnQpO1xuICAgICAgICAgICAgQ09NUEFUSUJJTElUWS5zdHBQKGV2ZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBvblRyYWNrTW91c2VUb3VjaERvd24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChvbk1vdXNlVG91Y2hEb3duQ29udGludWUoZXZlbnQpKSB7XG4gICAgICAgICAgICAgIHZhciBoYW5kbGVUb1ZpZXdwb3J0UmF0aW8gPSBzY3JvbGxiYXJWYXJzLl9pbmZvLl9oYW5kbGVMZW5ndGggLyBNYXRoLnJvdW5kKE1BVEgubWluKDEsIF92aWV3cG9ydFNpemVbc2Nyb2xsYmFyVmFycy5fd19oXSAvIF9jb250ZW50U2Nyb2xsU2l6ZUNhY2hlW3Njcm9sbGJhclZhcnMuX3dfaF0pICogc2Nyb2xsYmFyVmFycy5faW5mby5fdHJhY2tMZW5ndGgpO1xuICAgICAgICAgICAgICB2YXIgc2Nyb2xsRGlzdGFuY2UgPSBNQVRILnJvdW5kKF92aWV3cG9ydFNpemVbc2Nyb2xsYmFyVmFycy5fd19oXSAqIGhhbmRsZVRvVmlld3BvcnRSYXRpbyk7XG4gICAgICAgICAgICAgIHZhciBzY3JvbGxCYXNlRHVyYXRpb24gPSAyNzAgKiBoYW5kbGVUb1ZpZXdwb3J0UmF0aW87XG4gICAgICAgICAgICAgIHZhciBzY3JvbGxGaXJzdEl0ZXJhdGlvbkRlbGF5ID0gNDAwICogaGFuZGxlVG9WaWV3cG9ydFJhdGlvO1xuXG4gICAgICAgICAgICAgIHZhciB0cmFja09mZnNldCA9IHNjcm9sbGJhclZhcnMuX3RyYWNrLm9mZnNldCgpW3Njcm9sbGJhclZhcnMuX2xlZnRfdG9wXTtcblxuICAgICAgICAgICAgICB2YXIgY3RybEtleSA9IGV2ZW50LmN0cmxLZXk7XG4gICAgICAgICAgICAgIHZhciBpbnN0YW50U2Nyb2xsID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgICAgICAgICAgIHZhciBpbnN0YW50U2Nyb2xsVHJhbnNpdGlvbiA9IGluc3RhbnRTY3JvbGwgJiYgY3RybEtleTtcbiAgICAgICAgICAgICAgdmFyIGlzRmlyc3RJdGVyYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICB2YXIgZWFzaW5nID0gJ2xpbmVhcic7XG4gICAgICAgICAgICAgIHZhciBkZWNyZWFzZVNjcm9sbDtcbiAgICAgICAgICAgICAgdmFyIGZpbmlzaGVkQ29uZGl0aW9uO1xuXG4gICAgICAgICAgICAgIHZhciBzY3JvbGxBY3Rpb25GaW5zaXNoZWQgPSBmdW5jdGlvbiBzY3JvbGxBY3Rpb25GaW5zaXNoZWQodHJhbnNpdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChfc2Nyb2xsYmFyc0hhbmRsZXNEZWZpbmVTY3JvbGxQb3MpIHJlZnJlc2hTY3JvbGxiYXJIYW5kbGVPZmZzZXQoaXNIb3Jpem9udGFsLCB0cmFuc2l0aW9uKTtcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICB2YXIgc2Nyb2xsQWN0aW9uSW5zdGFudEZpbmlzaGVkID0gZnVuY3Rpb24gc2Nyb2xsQWN0aW9uSW5zdGFudEZpbmlzaGVkKCkge1xuICAgICAgICAgICAgICAgIHNjcm9sbEFjdGlvbkZpbnNpc2hlZCgpO1xuICAgICAgICAgICAgICAgIG9uSGFuZGxlTW91c2VUb3VjaERvd25BY3Rpb24oZXZlbnQpO1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHZhciBzY3JvbGxBY3Rpb24gPSBmdW5jdGlvbiBzY3JvbGxBY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfZGVzdHJveWVkKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgbW91c2VPZmZzZXQgPSAobW91c2VEb3duT2Zmc2V0IC0gdHJhY2tPZmZzZXQpICogbW91c2VEb3duSW52ZXJ0ZWRTY2FsZTtcbiAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVPZmZzZXQgPSBzY3JvbGxiYXJWYXJzSW5mby5faGFuZGxlT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgdmFyIHRyYWNrTGVuZ3RoID0gc2Nyb2xsYmFyVmFyc0luZm8uX3RyYWNrTGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZUxlbmd0aCA9IHNjcm9sbGJhclZhcnNJbmZvLl9oYW5kbGVMZW5ndGg7XG4gICAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsUmFuZ2UgPSBzY3JvbGxiYXJWYXJzSW5mby5fbWF4U2Nyb2xsO1xuICAgICAgICAgICAgICAgICAgdmFyIGN1cnJTY3JvbGwgPSBzY3JvbGxiYXJWYXJzSW5mby5fY3VycmVudFNjcm9sbDtcbiAgICAgICAgICAgICAgICAgIHZhciBzY3JvbGxEdXJhdGlvbiA9IHNjcm9sbEJhc2VEdXJhdGlvbiAqIHNjcm9sbER1cmF0aW9uRmFjdG9yO1xuICAgICAgICAgICAgICAgICAgdmFyIHRpbWVvdXREZWxheSA9IGlzRmlyc3RJdGVyYXRpb24gPyBNQVRILm1heChzY3JvbGxGaXJzdEl0ZXJhdGlvbkRlbGF5LCBzY3JvbGxEdXJhdGlvbikgOiBzY3JvbGxEdXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgIHZhciBpbnN0YW50U2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxSYW5nZSAqICgobW91c2VPZmZzZXQgLSBoYW5kbGVMZW5ndGggLyAyKSAvICh0cmFja0xlbmd0aCAtIGhhbmRsZUxlbmd0aCkpOyAvLyAxMDAlICogcG9zaXRpb25QZXJjZW50XG5cbiAgICAgICAgICAgICAgICAgIHZhciBydGxJc05vcm1hbCA9IF9pc1JUTCAmJiBpc0hvcml6b250YWwgJiYgKCFfcnRsU2Nyb2xsQmVoYXZpb3IuaSAmJiAhX3J0bFNjcm9sbEJlaGF2aW9yLm4gfHwgX25vcm1hbGl6ZVJUTENhY2hlKTtcbiAgICAgICAgICAgICAgICAgIHZhciBkZWNyZWFzZVNjcm9sbENvbmRpdGlvbiA9IHJ0bElzTm9ybWFsID8gaGFuZGxlT2Zmc2V0IDwgbW91c2VPZmZzZXQgOiBoYW5kbGVPZmZzZXQgPiBtb3VzZU9mZnNldDtcbiAgICAgICAgICAgICAgICAgIHZhciBzY3JvbGxPYmogPSB7fTtcbiAgICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb25PYmogPSB7XG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogZWFzaW5nLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiBmdW5jdGlvbiBzdGVwKG5vdykge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChfc2Nyb2xsYmFyc0hhbmRsZXNEZWZpbmVTY3JvbGxQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92aWV3cG9ydEVsZW1lbnRbc2Nyb2xsXShub3cpOyAvL2h0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5L2lzc3Vlcy80MzQwXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaFNjcm9sbGJhckhhbmRsZU9mZnNldChpc0hvcml6b250YWwsIG5vdyk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgaW5zdGFudFNjcm9sbFBvc2l0aW9uID0gaXNGaW5pdGUoaW5zdGFudFNjcm9sbFBvc2l0aW9uKSA/IGluc3RhbnRTY3JvbGxQb3NpdGlvbiA6IDA7XG4gICAgICAgICAgICAgICAgICBpbnN0YW50U2Nyb2xsUG9zaXRpb24gPSBfaXNSVEwgJiYgaXNIb3Jpem9udGFsICYmICFfcnRsU2Nyb2xsQmVoYXZpb3IuaSA/IHNjcm9sbFJhbmdlIC0gaW5zdGFudFNjcm9sbFBvc2l0aW9uIDogaW5zdGFudFNjcm9sbFBvc2l0aW9uOyAvL19iYXNlLnNjcm9sbFN0b3AoKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbnRTY3JvbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZpZXdwb3J0RWxlbWVudFtzY3JvbGxdKGluc3RhbnRTY3JvbGxQb3NpdGlvbik7IC8vc2Nyb2xsIGluc3RhbnRseSB0byBuZXcgcG9zaXRpb25cblxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW50U2Nyb2xsVHJhbnNpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgIC8vZ2V0IHRoZSBzY3JvbGwgcG9zaXRpb24gYWZ0ZXIgaW5zdGFudCBzY3JvbGwgKGluIGNhc2UgQ1NTIFNuYXAgUG9pbnRzIGFyZSB1c2VkKSB0byBnZXQgdGhlIGNvcnJlY3Qgc25hcHBlZCBzY3JvbGwgcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAvL2FuZCB0aGUgYW5pbWF0aW9uIHN0b3BzIGF0IHRoZSBjb3JyZWN0IHBvaW50XG4gICAgICAgICAgICAgICAgICAgICAgaW5zdGFudFNjcm9sbFBvc2l0aW9uID0gX3ZpZXdwb3J0RWxlbWVudFtzY3JvbGxdKCk7IC8vc2Nyb2xsIGJhY2sgdG8gdGhlIHBvc2l0aW9uIGJlZm9yZSBpbnN0YW50IHNjcm9sbGluZyBzbyBhbmltYXRpb24gY2FuIGJlIHBlcmZvcm1lZFxuXG4gICAgICAgICAgICAgICAgICAgICAgX3ZpZXdwb3J0RWxlbWVudFtzY3JvbGxdKGN1cnJTY3JvbGwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgaW5zdGFudFNjcm9sbFBvc2l0aW9uID0gcnRsSXNOb3JtYWwgJiYgX3J0bFNjcm9sbEJlaGF2aW9yLmkgPyBzY3JvbGxSYW5nZSAtIGluc3RhbnRTY3JvbGxQb3NpdGlvbiA6IGluc3RhbnRTY3JvbGxQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICBpbnN0YW50U2Nyb2xsUG9zaXRpb24gPSBydGxJc05vcm1hbCAmJiBfcnRsU2Nyb2xsQmVoYXZpb3IubiA/IC1pbnN0YW50U2Nyb2xsUG9zaXRpb24gOiBpbnN0YW50U2Nyb2xsUG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsT2JqW3h5XSA9IGluc3RhbnRTY3JvbGxQb3NpdGlvbjtcblxuICAgICAgICAgICAgICAgICAgICAgIF9iYXNlLnNjcm9sbChzY3JvbGxPYmosIGV4dGVuZERlZXAoYW5pbWF0aW9uT2JqLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IHNjcm9sbEFjdGlvbkluc3RhbnRGaW5pc2hlZFxuICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHNjcm9sbEFjdGlvbkluc3RhbnRGaW5pc2hlZCgpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVjcmVhc2VTY3JvbGwgPSBpc0ZpcnN0SXRlcmF0aW9uID8gZGVjcmVhc2VTY3JvbGxDb25kaXRpb24gOiBkZWNyZWFzZVNjcm9sbDtcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoZWRDb25kaXRpb24gPSBydGxJc05vcm1hbCA/IGRlY3JlYXNlU2Nyb2xsID8gaGFuZGxlT2Zmc2V0ICsgaGFuZGxlTGVuZ3RoID49IG1vdXNlT2Zmc2V0IDogaGFuZGxlT2Zmc2V0IDw9IG1vdXNlT2Zmc2V0IDogZGVjcmVhc2VTY3JvbGwgPyBoYW5kbGVPZmZzZXQgPD0gbW91c2VPZmZzZXQgOiBoYW5kbGVPZmZzZXQgKyBoYW5kbGVMZW5ndGggPj0gbW91c2VPZmZzZXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmlzaGVkQ29uZGl0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRyYWNrVGltZW91dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBfYmFzZS5zY3JvbGxTdG9wKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICB0cmFja1RpbWVvdXQgPSB1bmRlZmluZWQkMTtcbiAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxBY3Rpb25GaW5zaXNoZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgdHJhY2tUaW1lb3V0ID0gc2V0VGltZW91dChzY3JvbGxBY3Rpb24sIHRpbWVvdXREZWxheSk7XG4gICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsT2JqW3h5XSA9IChkZWNyZWFzZVNjcm9sbCA/ICctPScgOiAnKz0nKSArIHNjcm9sbERpc3RhbmNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgX2Jhc2Uuc2Nyb2xsKHNjcm9sbE9iaiwgZXh0ZW5kRGVlcChhbmltYXRpb25PYmosIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBzY3JvbGxEdXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlzRmlyc3RJdGVyYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgaWYgKGN0cmxLZXkpIGluY3JlYXNlVHJhY2tTY3JvbGxBbW91bnQoKTtcbiAgICAgICAgICAgICAgbW91c2VEb3duSW52ZXJ0ZWRTY2FsZSA9IGdldEhvc3RFbGVtZW50SW52ZXJ0ZWRTY2FsZSgpW3h5XTtcbiAgICAgICAgICAgICAgbW91c2VEb3duT2Zmc2V0ID0gQ09NUEFUSUJJTElUWS5wYWdlKGV2ZW50KVt4eV07XG4gICAgICAgICAgICAgIF9zY3JvbGxiYXJzSGFuZGxlc0RlZmluZVNjcm9sbFBvcyA9ICFnZXRQcmVwYXJlZFNjcm9sbGJhcnNPcHRpb24oc3RyU25hcEhhbmRsZSk7XG4gICAgICAgICAgICAgIGFkZENsYXNzKF9ib2R5RWxlbWVudCwgX2NsYXNzTmFtZURyYWdnaW5nKTtcbiAgICAgICAgICAgICAgYWRkQ2xhc3Moc2Nyb2xsYmFyVmFycy5fdHJhY2ssIHN0ckFjdGl2ZSk7XG4gICAgICAgICAgICAgIGFkZENsYXNzKHNjcm9sbGJhclZhcnMuX3Njcm9sbGJhciwgc3RyQWN0aXZlKTtcbiAgICAgICAgICAgICAgc2V0dXBSZXNwb25zaXZlRXZlbnRMaXN0ZW5lcihfZG9jdW1lbnRFbGVtZW50LCBbX3N0ck1vdXNlVG91Y2hVcEV2ZW50LCBfc3RyS2V5RG93bkV2ZW50LCBfc3RyS2V5VXBFdmVudCwgX3N0clNlbGVjdFN0YXJ0RXZlbnRdLCBbZG9jdW1lbnRNb3VzZVRvdWNoVXAsIGRvY3VtZW50S2V5RG93biwgZG9jdW1lbnRLZXlVcCwgZG9jdW1lbnRPblNlbGVjdFN0YXJ0XSk7XG4gICAgICAgICAgICAgIHNjcm9sbEFjdGlvbigpO1xuICAgICAgICAgICAgICBDT01QQVRJQklMSVRZLnBydkQoZXZlbnQpO1xuICAgICAgICAgICAgICBDT01QQVRJQklMSVRZLnN0cFAoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIG9uVHJhY2tNb3VzZVRvdWNoRW50ZXIoZXZlbnQpIHtcbiAgICAgICAgICAgIC8vbWFrZSBzdXJlIGJvdGggc2Nyb2xsYmFycyB3aWxsIHN0YXkgdmlzaWJsZSBpZiBvbmUgc2Nyb2xsYmFyIGlzIGhvdmVyZWQgaWYgYXV0b0hpZGUgaXMgXCJzY3JvbGxcIiBvciBcIm1vdmVcIi5cbiAgICAgICAgICAgIF9zY3JvbGxiYXJzSGFuZGxlSG92ZXJlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoX3Njcm9sbGJhcnNBdXRvSGlkZVNjcm9sbCB8fCBfc2Nyb2xsYmFyc0F1dG9IaWRlTW92ZSkgcmVmcmVzaFNjcm9sbGJhcnNBdXRvSGlkZSh0cnVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBvblRyYWNrTW91c2VUb3VjaExlYXZlKGV2ZW50KSB7XG4gICAgICAgICAgICBfc2Nyb2xsYmFyc0hhbmRsZUhvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChfc2Nyb2xsYmFyc0F1dG9IaWRlU2Nyb2xsIHx8IF9zY3JvbGxiYXJzQXV0b0hpZGVNb3ZlKSByZWZyZXNoU2Nyb2xsYmFyc0F1dG9IaWRlKGZhbHNlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBvblNjcm9sbGJhck1vdXNlVG91Y2hEb3duKGV2ZW50KSB7XG4gICAgICAgICAgICBDT01QQVRJQklMSVRZLnN0cFAoZXZlbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFkZERlc3Ryb3lFdmVudExpc3RlbmVyKHNjcm9sbGJhclZhcnMuX2hhbmRsZSwgX3N0ck1vdXNlVG91Y2hEb3duRXZlbnQsIG9uSGFuZGxlTW91c2VUb3VjaERvd24pO1xuICAgICAgICAgIGFkZERlc3Ryb3lFdmVudExpc3RlbmVyKHNjcm9sbGJhclZhcnMuX3RyYWNrLCBbX3N0ck1vdXNlVG91Y2hEb3duRXZlbnQsIF9zdHJNb3VzZUVudGVyLCBfc3RyTW91c2VMZWF2ZV0sIFtvblRyYWNrTW91c2VUb3VjaERvd24sIG9uVHJhY2tNb3VzZVRvdWNoRW50ZXIsIG9uVHJhY2tNb3VzZVRvdWNoTGVhdmVdKTtcbiAgICAgICAgICBhZGREZXN0cm95RXZlbnRMaXN0ZW5lcihzY3JvbGxiYXJWYXJzLl9zY3JvbGxiYXIsIF9zdHJNb3VzZVRvdWNoRG93bkV2ZW50LCBvblNjcm9sbGJhck1vdXNlVG91Y2hEb3duKTtcblxuICAgICAgICAgIGlmIChfc3VwcG9ydFRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgIGFkZERlc3Ryb3lFdmVudExpc3RlbmVyKHNjcm9sbGJhclZhcnMuX3Njcm9sbGJhciwgX3N0clRyYW5zaXRpb25FbmRFdmVudCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IHNjcm9sbGJhclZhcnMuX3Njcm9sbGJhclswXSkgcmV0dXJuO1xuICAgICAgICAgICAgICByZWZyZXNoU2Nyb2xsYmFySGFuZGxlTGVuZ3RoKGlzSG9yaXpvbnRhbCk7XG4gICAgICAgICAgICAgIHJlZnJlc2hTY3JvbGxiYXJIYW5kbGVPZmZzZXQoaXNIb3Jpem9udGFsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTaG93cyBvciBoaWRlcyB0aGUgZ2l2ZW4gc2Nyb2xsYmFyIGFuZCBhcHBsaWVkIGEgY2xhc3MgbmFtZSB3aGljaCBpbmRpY2F0ZXMgaWYgdGhlIHNjcm9sbGJhciBpcyBzY3JvbGxhYmxlIG9yIG5vdC5cclxuICAgICAgICAgKiBAcGFyYW0gaXNIb3Jpem9udGFsIFRydWUgaWYgdGhlIGhvcml6b250YWwgc2Nyb2xsYmFyIGlzIHRoZSB0YXJnZXQsIGZhbHNlIGlmIHRoZSB2ZXJ0aWNhbCBzY3JvbGxiYXIgaXMgdGhlIHRhcmdldC5cclxuICAgICAgICAgKiBAcGFyYW0gc2hhbGxCZVZpc2libGUgVHJ1ZSBpZiB0aGUgc2Nyb2xsYmFyIHNoYWxsIGJlIHNob3duLCBmYWxzZSBpZiBoaWRkZW4uXHJcbiAgICAgICAgICogQHBhcmFtIGNhblNjcm9sbCBUcnVlIGlmIHRoZSBzY3JvbGxiYXIgaXMgc2Nyb2xsYWJsZSwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgZnVuY3Rpb24gcmVmcmVzaFNjcm9sbGJhckFwcGVhcmFuY2UoaXNIb3Jpem9udGFsLCBzaGFsbEJlVmlzaWJsZSwgY2FuU2Nyb2xsKSB7XG4gICAgICAgICAgdmFyIHNjcm9sbGJhckhpZGRlbkNsYXNzTmFtZSA9IGlzSG9yaXpvbnRhbCA/IF9jbGFzc05hbWVIb3N0U2Nyb2xsYmFySG9yaXpvbnRhbEhpZGRlbiA6IF9jbGFzc05hbWVIb3N0U2Nyb2xsYmFyVmVydGljYWxIaWRkZW47XG4gICAgICAgICAgdmFyIHNjcm9sbGJhckVsZW1lbnQgPSBpc0hvcml6b250YWwgPyBfc2Nyb2xsYmFySG9yaXpvbnRhbEVsZW1lbnQgOiBfc2Nyb2xsYmFyVmVydGljYWxFbGVtZW50O1xuICAgICAgICAgIGFkZFJlbW92ZUNsYXNzKF9ob3N0RWxlbWVudCwgc2Nyb2xsYmFySGlkZGVuQ2xhc3NOYW1lLCAhc2hhbGxCZVZpc2libGUpO1xuICAgICAgICAgIGFkZFJlbW92ZUNsYXNzKHNjcm9sbGJhckVsZW1lbnQsIF9jbGFzc05hbWVTY3JvbGxiYXJVbnVzYWJsZSwgIWNhblNjcm9sbCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQXV0b3Nob3dzIC8gYXV0b2hpZGVzIGJvdGggc2Nyb2xsYmFycyB3aXRoLlxyXG4gICAgICAgICAqIEBwYXJhbSBzaGFsbEJlVmlzaWJsZSBUcnVlIGlmIHRoZSBzY3JvbGxiYXJzIHNoYWxsIGJlIGF1dG9zaG93biAob25seSB0aGUgY2FzZSBpZiB0aGV5IGFyZSBoaWRkZW4gYnkgYSBhdXRvaGlkZSksIGZhbHNlIGlmIHRoZSBzaGFsbCBiZSBhdXRvIGhpZGRlbi5cclxuICAgICAgICAgKiBAcGFyYW0gZGVsYXlmcmVlIFRydWUgaWYgdGhlIHNjcm9sbGJhcnMgc2hhbGwgYmUgaGlkZGVuIHdpdGhvdXQgYSBkZWxheSwgZmFsc2Ugb3IgdW5kZWZpbmVkIG90aGVyd2lzZS5cclxuICAgICAgICAgKi9cblxuXG4gICAgICAgIGZ1bmN0aW9uIHJlZnJlc2hTY3JvbGxiYXJzQXV0b0hpZGUoc2hhbGxCZVZpc2libGUsIGRlbGF5ZnJlZSkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChfc2Nyb2xsYmFyc0F1dG9IaWRlVGltZW91dElkKTtcblxuICAgICAgICAgIGlmIChzaGFsbEJlVmlzaWJsZSkge1xuICAgICAgICAgICAgLy9pZihfaGFzT3ZlcmZsb3dDYWNoZS54ICYmIF9oaWRlT3ZlcmZsb3dDYWNoZS54cylcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKF9zY3JvbGxiYXJIb3Jpem9udGFsRWxlbWVudCwgX2NsYXNzTmFtZVNjcm9sbGJhckF1dG9IaWRkZW4pOyAvL2lmKF9oYXNPdmVyZmxvd0NhY2hlLnkgJiYgX2hpZGVPdmVyZmxvd0NhY2hlLnlzKVxuXG4gICAgICAgICAgICByZW1vdmVDbGFzcyhfc2Nyb2xsYmFyVmVydGljYWxFbGVtZW50LCBfY2xhc3NOYW1lU2Nyb2xsYmFyQXV0b0hpZGRlbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBhbnlBY3RpdmU7XG4gICAgICAgICAgICB2YXIgc3RyQWN0aXZlID0gJ2FjdGl2ZSc7XG5cbiAgICAgICAgICAgIHZhciBoaWRlID0gZnVuY3Rpb24gaGlkZSgpIHtcbiAgICAgICAgICAgICAgaWYgKCFfc2Nyb2xsYmFyc0hhbmRsZUhvdmVyZWQgJiYgIV9kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgICBhbnlBY3RpdmUgPSBfc2Nyb2xsYmFySG9yaXpvbnRhbEhhbmRsZUVsZW1lbnQuaGFzQ2xhc3Moc3RyQWN0aXZlKSB8fCBfc2Nyb2xsYmFyVmVydGljYWxIYW5kbGVFbGVtZW50Lmhhc0NsYXNzKHN0ckFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFhbnlBY3RpdmUgJiYgKF9zY3JvbGxiYXJzQXV0b0hpZGVTY3JvbGwgfHwgX3Njcm9sbGJhcnNBdXRvSGlkZU1vdmUgfHwgX3Njcm9sbGJhcnNBdXRvSGlkZUxlYXZlKSkgYWRkQ2xhc3MoX3Njcm9sbGJhckhvcml6b250YWxFbGVtZW50LCBfY2xhc3NOYW1lU2Nyb2xsYmFyQXV0b0hpZGRlbik7XG4gICAgICAgICAgICAgICAgaWYgKCFhbnlBY3RpdmUgJiYgKF9zY3JvbGxiYXJzQXV0b0hpZGVTY3JvbGwgfHwgX3Njcm9sbGJhcnNBdXRvSGlkZU1vdmUgfHwgX3Njcm9sbGJhcnNBdXRvSGlkZUxlYXZlKSkgYWRkQ2xhc3MoX3Njcm9sbGJhclZlcnRpY2FsRWxlbWVudCwgX2NsYXNzTmFtZVNjcm9sbGJhckF1dG9IaWRkZW4pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoX3Njcm9sbGJhcnNBdXRvSGlkZURlbGF5ID4gMCAmJiBkZWxheWZyZWUgIT09IHRydWUpIF9zY3JvbGxiYXJzQXV0b0hpZGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGhpZGUsIF9zY3JvbGxiYXJzQXV0b0hpZGVEZWxheSk7ZWxzZSBoaWRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlZnJlc2hlcyB0aGUgaGFuZGxlIGxlbmd0aCBvZiB0aGUgZ2l2ZW4gc2Nyb2xsYmFyLlxyXG4gICAgICAgICAqIEBwYXJhbSBpc0hvcml6b250YWwgVHJ1ZSBpZiB0aGUgaG9yaXpvbnRhbCBzY3JvbGxiYXIgaGFuZGxlIHNoYWxsIGJlIHJlZnJlc2hlZCwgZmFsc2UgaWYgdGhlIHZlcnRpY2FsIG9uZSBzaGFsbCBiZSByZWZyZXNoZWQuXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiByZWZyZXNoU2Nyb2xsYmFySGFuZGxlTGVuZ3RoKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICAgIHZhciBoYW5kbGVDU1MgPSB7fTtcbiAgICAgICAgICB2YXIgc2Nyb2xsYmFyVmFycyA9IGdldFNjcm9sbGJhclZhcnMoaXNIb3Jpem9udGFsKTtcbiAgICAgICAgICB2YXIgc2Nyb2xsYmFyVmFyc0luZm8gPSBzY3JvbGxiYXJWYXJzLl9pbmZvO1xuICAgICAgICAgIHZhciBkaWdpdCA9IDEwMDAwMDA7IC8vZ2V0IGFuZCBhcHBseSBpbnRlbmRlZCBoYW5kbGUgbGVuZ3RoXG5cbiAgICAgICAgICB2YXIgaGFuZGxlUmF0aW8gPSBNQVRILm1pbigxLCBfdmlld3BvcnRTaXplW3Njcm9sbGJhclZhcnMuX3dfaF0gLyBfY29udGVudFNjcm9sbFNpemVDYWNoZVtzY3JvbGxiYXJWYXJzLl93X2hdKTtcbiAgICAgICAgICBoYW5kbGVDU1Nbc2Nyb2xsYmFyVmFycy5fd2lkdGhfaGVpZ2h0XSA9IE1BVEguZmxvb3IoaGFuZGxlUmF0aW8gKiAxMDAgKiBkaWdpdCkgLyBkaWdpdCArICclJzsgLy90aGUgbGFzdCAqIGRpZ2l0IC8gZGlnaXQgaXMgZm9yIGZsb29yaW5nIHRvIHRoZSA0dGggZGlnaXRcblxuICAgICAgICAgIGlmICghbmF0aXZlT3ZlcmxheVNjcm9sbGJhcnNBcmVBY3RpdmUoKSkgc2Nyb2xsYmFyVmFycy5faGFuZGxlLmNzcyhoYW5kbGVDU1MpOyAvL21lYXN1cmUgdGhlIGhhbmRsZSBsZW5ndGggdG8gcmVzcGVjdCBtaW4gJiBtYXggbGVuZ3RoXG5cbiAgICAgICAgICBzY3JvbGxiYXJWYXJzSW5mby5faGFuZGxlTGVuZ3RoID0gc2Nyb2xsYmFyVmFycy5faGFuZGxlWzBdWydvZmZzZXQnICsgc2Nyb2xsYmFyVmFycy5fV2lkdGhfSGVpZ2h0XTtcbiAgICAgICAgICBzY3JvbGxiYXJWYXJzSW5mby5faGFuZGxlTGVuZ3RoUmF0aW8gPSBoYW5kbGVSYXRpbztcbiAgICAgICAgfVxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZWZyZXNoZXMgdGhlIGhhbmRsZSBvZmZzZXQgb2YgdGhlIGdpdmVuIHNjcm9sbGJhci5cclxuICAgICAgICAgKiBAcGFyYW0gaXNIb3Jpem9udGFsIFRydWUgaWYgdGhlIGhvcml6b250YWwgc2Nyb2xsYmFyIGhhbmRsZSBzaGFsbCBiZSByZWZyZXNoZWQsIGZhbHNlIGlmIHRoZSB2ZXJ0aWNhbCBvbmUgc2hhbGwgYmUgcmVmcmVzaGVkLlxyXG4gICAgICAgICAqIEBwYXJhbSBzY3JvbGxPclRyYW5zaXRpb24gVGhlIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgZ2l2ZW4gc2Nyb2xsYmFyIGF4aXMgdG8gd2hpY2ggdGhlIGhhbmRsZSBzaGFsbCBiZSBtb3ZlZCBvciBhIGJvb2xlYW4gd2hpY2ggaW5kaWNhdGVzIHdoZXRoZXIgYSB0cmFuc2l0aW9uIHNoYWxsIGJlIGFwcGxpZWQuIElmIHVuZGVmaW5lZCBvciBib29sZWFuIGlmIHRoZSBjdXJyZW50IHNjcm9sbC1vZmZzZXQgaXMgdGFrZW4uIChpZiBpc0hvcml6b250YWwgPyBzY3JvbGxMZWZ0IDogc2Nyb2xsVG9wKVxyXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgZnVuY3Rpb24gcmVmcmVzaFNjcm9sbGJhckhhbmRsZU9mZnNldChpc0hvcml6b250YWwsIHNjcm9sbE9yVHJhbnNpdGlvbikge1xuICAgICAgICAgIHZhciB0cmFuc2l0aW9uID0gdHlwZShzY3JvbGxPclRyYW5zaXRpb24pID09IFRZUEVTLmI7XG4gICAgICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IDI1MDtcbiAgICAgICAgICB2YXIgaXNSVExpc0hvcml6b250YWwgPSBfaXNSVEwgJiYgaXNIb3Jpem9udGFsO1xuICAgICAgICAgIHZhciBzY3JvbGxiYXJWYXJzID0gZ2V0U2Nyb2xsYmFyVmFycyhpc0hvcml6b250YWwpO1xuICAgICAgICAgIHZhciBzY3JvbGxiYXJWYXJzSW5mbyA9IHNjcm9sbGJhclZhcnMuX2luZm87XG4gICAgICAgICAgdmFyIHN0clRyYW5zbGF0ZUJyYWNlID0gJ3RyYW5zbGF0ZSgnO1xuXG4gICAgICAgICAgdmFyIHN0clRyYW5zZm9ybSA9IFZFTkRPUlMuX2Nzc1Byb3BlcnR5KCd0cmFuc2Zvcm0nKTtcblxuICAgICAgICAgIHZhciBzdHJUcmFuc2l0aW9uID0gVkVORE9SUy5fY3NzUHJvcGVydHkoJ3RyYW5zaXRpb24nKTtcblxuICAgICAgICAgIHZhciBuYXRpdmVTY3JvbGwgPSBpc0hvcml6b250YWwgPyBfdmlld3BvcnRFbGVtZW50W19zdHJTY3JvbGxMZWZ0XSgpIDogX3ZpZXdwb3J0RWxlbWVudFtfc3RyU2Nyb2xsVG9wXSgpO1xuICAgICAgICAgIHZhciBjdXJyZW50U2Nyb2xsID0gc2Nyb2xsT3JUcmFuc2l0aW9uID09PSB1bmRlZmluZWQkMSB8fCB0cmFuc2l0aW9uID8gbmF0aXZlU2Nyb2xsIDogc2Nyb2xsT3JUcmFuc2l0aW9uOyAvL21lYXN1cmUgdGhlIGhhbmRsZSBsZW5ndGggdG8gcmVzcGVjdCBtaW4gJiBtYXggbGVuZ3RoXG5cbiAgICAgICAgICB2YXIgaGFuZGxlTGVuZ3RoID0gc2Nyb2xsYmFyVmFyc0luZm8uX2hhbmRsZUxlbmd0aDtcbiAgICAgICAgICB2YXIgdHJhY2tMZW5ndGggPSBzY3JvbGxiYXJWYXJzLl90cmFja1swXVsnb2Zmc2V0JyArIHNjcm9sbGJhclZhcnMuX1dpZHRoX0hlaWdodF07XG4gICAgICAgICAgdmFyIGhhbmRsZVRyYWNrRGlmZiA9IHRyYWNrTGVuZ3RoIC0gaGFuZGxlTGVuZ3RoO1xuICAgICAgICAgIHZhciBoYW5kbGVDU1MgPSB7fTtcbiAgICAgICAgICB2YXIgdHJhbnNmb3JtT2Zmc2V0O1xuICAgICAgICAgIHZhciB0cmFuc2xhdGVWYWx1ZTsgLy9ET05UIHVzZSB0aGUgdmFyaWFibGUgJ19jb250ZW50U2Nyb2xsU2l6ZUNhY2hlW3Njcm9sbGJhclZhcnMuX3dfaF0nIGluc3RlYWQgb2YgJ192aWV3cG9ydEVsZW1lbnRbMF1bJ3Njcm9sbCcgKyBzY3JvbGxiYXJWYXJzLl9XaWR0aF9IZWlnaHRdJ1xuICAgICAgICAgIC8vIGJlY2F1c2UgaXRzIGEgYml0IGJlaGluZCBkdXJpbmcgdGhlIHNtYWxsIGRlbGF5IHdoZW4gY29udGVudCBzaXplIHVwZGF0ZXNcbiAgICAgICAgICAvLyhkZWxheSA9IG11dGF0aW9uT2JzZXJ2ZXJDb250ZW50TGFnLCBpZiBpdHMgMCB0aGVuIHRoaXMgdmFyIGNvdWxkIGJlIHVzZWQpXG5cbiAgICAgICAgICB2YXIgbWF4U2Nyb2xsID0gKF92aWV3cG9ydEVsZW1lbnROYXRpdmVbX3N0clNjcm9sbCArIHNjcm9sbGJhclZhcnMuX1dpZHRoX0hlaWdodF0gLSBfdmlld3BvcnRFbGVtZW50TmF0aXZlWydjbGllbnQnICsgc2Nyb2xsYmFyVmFycy5fV2lkdGhfSGVpZ2h0XSkgKiAoX3J0bFNjcm9sbEJlaGF2aW9yLm4gJiYgaXNSVExpc0hvcml6b250YWwgPyAtMSA6IDEpOyAvLyogLTEgaWYgcnRsIHNjcm9sbCBtYXggaXMgbmVnYXRpdmVcblxuICAgICAgICAgIHZhciBnZXRTY3JvbGxSYXRpbyA9IGZ1bmN0aW9uIGdldFNjcm9sbFJhdGlvKGJhc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBpc05hTihiYXNlIC8gbWF4U2Nyb2xsKSA/IDAgOiBNQVRILm1heCgwLCBNQVRILm1pbigxLCBiYXNlIC8gbWF4U2Nyb2xsKSk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHZhciBnZXRIYW5kbGVPZmZzZXQgPSBmdW5jdGlvbiBnZXRIYW5kbGVPZmZzZXQoc2Nyb2xsUmF0aW8pIHtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSBoYW5kbGVUcmFja0RpZmYgKiBzY3JvbGxSYXRpbztcbiAgICAgICAgICAgIG9mZnNldCA9IGlzTmFOKG9mZnNldCkgPyAwIDogb2Zmc2V0O1xuICAgICAgICAgICAgb2Zmc2V0ID0gaXNSVExpc0hvcml6b250YWwgJiYgIV9ydGxTY3JvbGxCZWhhdmlvci5pID8gdHJhY2tMZW5ndGggLSBoYW5kbGVMZW5ndGggLSBvZmZzZXQgOiBvZmZzZXQ7XG4gICAgICAgICAgICBvZmZzZXQgPSBNQVRILm1heCgwLCBvZmZzZXQpO1xuICAgICAgICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdmFyIHNjcm9sbFJhdGlvID0gZ2V0U2Nyb2xsUmF0aW8obmF0aXZlU2Nyb2xsKTtcbiAgICAgICAgICB2YXIgdW5zbmFwcGVkU2Nyb2xsUmF0aW8gPSBnZXRTY3JvbGxSYXRpbyhjdXJyZW50U2Nyb2xsKTtcbiAgICAgICAgICB2YXIgaGFuZGxlT2Zmc2V0ID0gZ2V0SGFuZGxlT2Zmc2V0KHVuc25hcHBlZFNjcm9sbFJhdGlvKTtcbiAgICAgICAgICB2YXIgc25hcHBlZEhhbmRsZU9mZnNldCA9IGdldEhhbmRsZU9mZnNldChzY3JvbGxSYXRpbyk7XG4gICAgICAgICAgc2Nyb2xsYmFyVmFyc0luZm8uX21heFNjcm9sbCA9IG1heFNjcm9sbDtcbiAgICAgICAgICBzY3JvbGxiYXJWYXJzSW5mby5fY3VycmVudFNjcm9sbCA9IG5hdGl2ZVNjcm9sbDtcbiAgICAgICAgICBzY3JvbGxiYXJWYXJzSW5mby5fY3VycmVudFNjcm9sbFJhdGlvID0gc2Nyb2xsUmF0aW87XG5cbiAgICAgICAgICBpZiAoX3N1cHBvcnRUcmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybU9mZnNldCA9IGlzUlRMaXNIb3Jpem9udGFsID8gLSh0cmFja0xlbmd0aCAtIGhhbmRsZUxlbmd0aCAtIGhhbmRsZU9mZnNldCkgOiBoYW5kbGVPZmZzZXQ7IC8vaW4gcHhcbiAgICAgICAgICAgIC8vdHJhbnNmb3JtT2Zmc2V0ID0gKHRyYW5zZm9ybU9mZnNldCAvIHRyYWNrTGVuZ3RoICogMTAwKSAqICh0cmFja0xlbmd0aCAvIGhhbmRsZUxlbmd0aCk7IC8vaW4gJVxuXG4gICAgICAgICAgICB0cmFuc2xhdGVWYWx1ZSA9IGlzSG9yaXpvbnRhbCA/IHN0clRyYW5zbGF0ZUJyYWNlICsgdHJhbnNmb3JtT2Zmc2V0ICsgJ3B4LCAwKScgOiBzdHJUcmFuc2xhdGVCcmFjZSArICcwLCAnICsgdHJhbnNmb3JtT2Zmc2V0ICsgJ3B4KSc7XG4gICAgICAgICAgICBoYW5kbGVDU1Nbc3RyVHJhbnNmb3JtXSA9IHRyYW5zbGF0ZVZhbHVlOyAvL2FwcGx5IG9yIGNsZWFyIHVwIHRyYW5zaXRpb25cblxuICAgICAgICAgICAgaWYgKF9zdXBwb3J0VHJhbnNpdGlvbikgaGFuZGxlQ1NTW3N0clRyYW5zaXRpb25dID0gdHJhbnNpdGlvbiAmJiBNQVRILmFicyhoYW5kbGVPZmZzZXQgLSBzY3JvbGxiYXJWYXJzSW5mby5faGFuZGxlT2Zmc2V0KSA+IDEgPyBnZXRDU1NUcmFuc2l0aW9uU3RyaW5nKHNjcm9sbGJhclZhcnMuX2hhbmRsZSkgKyAnLCAnICsgKHN0clRyYW5zZm9ybSArIF9zdHJTcGFjZSArIHRyYW5zaXRpb25EdXJhdGlvbiArICdtcycpIDogX3N0ckVtcHR5O1xuICAgICAgICAgIH0gZWxzZSBoYW5kbGVDU1Nbc2Nyb2xsYmFyVmFycy5fbGVmdF90b3BdID0gaGFuZGxlT2Zmc2V0OyAvL29ubHkgYXBwbHkgY3NzIGlmIG9mZnNldCBoYXMgY2hhbmdlZCBhbmQgb3ZlcmZsb3cgZXhpc3RzLlxuXG5cbiAgICAgICAgICBpZiAoIW5hdGl2ZU92ZXJsYXlTY3JvbGxiYXJzQXJlQWN0aXZlKCkpIHtcbiAgICAgICAgICAgIHNjcm9sbGJhclZhcnMuX2hhbmRsZS5jc3MoaGFuZGxlQ1NTKTsgLy9jbGVhciB1cCB0cmFuc2l0aW9uXG5cblxuICAgICAgICAgICAgaWYgKF9zdXBwb3J0VHJhbnNmb3JtICYmIF9zdXBwb3J0VHJhbnNpdGlvbiAmJiB0cmFuc2l0aW9uKSB7XG4gICAgICAgICAgICAgIHNjcm9sbGJhclZhcnMuX2hhbmRsZS5vbmUoX3N0clRyYW5zaXRpb25FbmRFdmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghX2Rlc3Ryb3llZCkgc2Nyb2xsYmFyVmFycy5faGFuZGxlLmNzcyhzdHJUcmFuc2l0aW9uLCBfc3RyRW1wdHkpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzY3JvbGxiYXJWYXJzSW5mby5faGFuZGxlT2Zmc2V0ID0gaGFuZGxlT2Zmc2V0O1xuICAgICAgICAgIHNjcm9sbGJhclZhcnNJbmZvLl9zbmFwcGVkSGFuZGxlT2Zmc2V0ID0gc25hcHBlZEhhbmRsZU9mZnNldDtcbiAgICAgICAgICBzY3JvbGxiYXJWYXJzSW5mby5fdHJhY2tMZW5ndGggPSB0cmFja0xlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZWZyZXNoZXMgdGhlIGludGVyYWN0aXZpdHkgb2YgdGhlIGdpdmVuIHNjcm9sbGJhciBlbGVtZW50LlxyXG4gICAgICAgICAqIEBwYXJhbSBpc1RyYWNrIFRydWUgaWYgdGhlIHRyYWNrIGVsZW1lbnQgaXMgdGhlIHRhcmdldCwgZmFsc2UgaWYgdGhlIGhhbmRsZSBlbGVtZW50IGlzIHRoZSB0YXJnZXQuXHJcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIFRydWUgZm9yIGludGVyYWN0aXZpdHkgZmFsc2UgZm9yIG5vIGludGVyYWN0aXZpdHkuXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiByZWZyZXNoU2Nyb2xsYmFyc0ludGVyYWN0aXZlKGlzVHJhY2ssIHZhbHVlKSB7XG4gICAgICAgICAgdmFyIGFjdGlvbiA9IHZhbHVlID8gJ3JlbW92ZUNsYXNzJyA6ICdhZGRDbGFzcyc7XG4gICAgICAgICAgdmFyIGVsZW1lbnQxID0gaXNUcmFjayA/IF9zY3JvbGxiYXJIb3Jpem9udGFsVHJhY2tFbGVtZW50IDogX3Njcm9sbGJhckhvcml6b250YWxIYW5kbGVFbGVtZW50O1xuICAgICAgICAgIHZhciBlbGVtZW50MiA9IGlzVHJhY2sgPyBfc2Nyb2xsYmFyVmVydGljYWxUcmFja0VsZW1lbnQgOiBfc2Nyb2xsYmFyVmVydGljYWxIYW5kbGVFbGVtZW50O1xuICAgICAgICAgIHZhciBjbGFzc05hbWUgPSBpc1RyYWNrID8gX2NsYXNzTmFtZVNjcm9sbGJhclRyYWNrT2ZmIDogX2NsYXNzTmFtZVNjcm9sbGJhckhhbmRsZU9mZjtcbiAgICAgICAgICBlbGVtZW50MVthY3Rpb25dKGNsYXNzTmFtZSk7XG4gICAgICAgICAgZWxlbWVudDJbYWN0aW9uXShjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgYSBvYmplY3Qgd2hpY2ggaXMgdXNlZCBmb3IgZmFzdCBhY2Nlc3MgZm9yIHNwZWNpZmljIHZhcmlhYmxlcy5cclxuICAgICAgICAgKiBAcGFyYW0gaXNIb3Jpem9udGFsIFRydWUgaWYgdGhlIGhvcml6b250YWwgc2Nyb2xsYmFyIHZhcnMgc2hhbGwgYmUgYWNjZXNzZWQsIGZhbHNlIGlmIHRoZSB2ZXJ0aWNhbCBzY3JvbGxiYXIgdmFycyBzaGFsbCBiZSBhY2Nlc3NlZC5cclxuICAgICAgICAgKiBAcmV0dXJucyB7e3doOiBzdHJpbmcsIFdIOiBzdHJpbmcsIGx0OiBzdHJpbmcsIF93aDogc3RyaW5nLCBfbHQ6IHN0cmluZywgdDogKiwgaDogKiwgYzoge30sIHM6ICp9fVxyXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyVmFycyhpc0hvcml6b250YWwpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgX3dpZHRoX2hlaWdodDogaXNIb3Jpem9udGFsID8gX3N0cldpZHRoIDogX3N0ckhlaWdodCxcbiAgICAgICAgICAgIF9XaWR0aF9IZWlnaHQ6IGlzSG9yaXpvbnRhbCA/ICdXaWR0aCcgOiAnSGVpZ2h0JyxcbiAgICAgICAgICAgIF9sZWZ0X3RvcDogaXNIb3Jpem9udGFsID8gX3N0ckxlZnQgOiBfc3RyVG9wLFxuICAgICAgICAgICAgX0xlZnRfVG9wOiBpc0hvcml6b250YWwgPyAnTGVmdCcgOiAnVG9wJyxcbiAgICAgICAgICAgIF94X3k6IGlzSG9yaXpvbnRhbCA/IF9zdHJYIDogX3N0clksXG4gICAgICAgICAgICBfWF9ZOiBpc0hvcml6b250YWwgPyAnWCcgOiAnWScsXG4gICAgICAgICAgICBfd19oOiBpc0hvcml6b250YWwgPyAndycgOiAnaCcsXG4gICAgICAgICAgICBfbF90OiBpc0hvcml6b250YWwgPyAnbCcgOiAndCcsXG4gICAgICAgICAgICBfdHJhY2s6IGlzSG9yaXpvbnRhbCA/IF9zY3JvbGxiYXJIb3Jpem9udGFsVHJhY2tFbGVtZW50IDogX3Njcm9sbGJhclZlcnRpY2FsVHJhY2tFbGVtZW50LFxuICAgICAgICAgICAgX2hhbmRsZTogaXNIb3Jpem9udGFsID8gX3Njcm9sbGJhckhvcml6b250YWxIYW5kbGVFbGVtZW50IDogX3Njcm9sbGJhclZlcnRpY2FsSGFuZGxlRWxlbWVudCxcbiAgICAgICAgICAgIF9zY3JvbGxiYXI6IGlzSG9yaXpvbnRhbCA/IF9zY3JvbGxiYXJIb3Jpem9udGFsRWxlbWVudCA6IF9zY3JvbGxiYXJWZXJ0aWNhbEVsZW1lbnQsXG4gICAgICAgICAgICBfaW5mbzogaXNIb3Jpem9udGFsID8gX3Njcm9sbEhvcml6b250YWxJbmZvIDogX3Njcm9sbFZlcnRpY2FsSW5mb1xuICAgICAgICAgIH07XG4gICAgICAgIH0gLy89PT09IFNjcm9sbGJhciBDb3JuZXIgPT09PS8vXG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQnVpbGRzIG9yIGRlc3Ryb3lzIHRoZSBzY3JvbGxiYXIgY29ybmVyIERPTSBlbGVtZW50LlxyXG4gICAgICAgICAqIEBwYXJhbSBkZXN0cm95IEluZGljYXRlcyB3aGV0aGVyIHRoZSBET00gc2hhbGwgYmUgYnVpbGQgb3IgZGVzdHJveWVkLlxyXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgZnVuY3Rpb24gc2V0dXBTY3JvbGxiYXJDb3JuZXJET00oZGVzdHJveSkge1xuICAgICAgICAgIF9zY3JvbGxiYXJDb3JuZXJFbGVtZW50ID0gX3Njcm9sbGJhckNvcm5lckVsZW1lbnQgfHwgc2VsZWN0T3JHZW5lcmF0ZURpdkJ5Q2xhc3MoX2NsYXNzTmFtZVNjcm9sbGJhckNvcm5lciwgdHJ1ZSk7XG5cbiAgICAgICAgICBpZiAoIWRlc3Ryb3kpIHtcbiAgICAgICAgICAgIGlmICghX2RvbUV4aXN0cykge1xuICAgICAgICAgICAgICBfaG9zdEVsZW1lbnQuYXBwZW5kKF9zY3JvbGxiYXJDb3JuZXJFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKF9kb21FeGlzdHMgJiYgX2luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgIHJlbW92ZUNsYXNzKF9zY3JvbGxiYXJDb3JuZXJFbGVtZW50LnJlbW92ZUF0dHIoTEVYSUNPTi5zKSwgX2NsYXNzTmFtZXNEeW5hbWljRGVzdHJveSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZW1vdmUoX3Njcm9sbGJhckNvcm5lckVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbml0aWFsaXplcyBhbGwgc2Nyb2xsYmFyIGNvcm5lciBpbnRlcmFjdGl2aXR5IGV2ZW50cy5cclxuICAgICAgICAgKi9cblxuXG4gICAgICAgIGZ1bmN0aW9uIHNldHVwU2Nyb2xsYmFyQ29ybmVyRXZlbnRzKCkge1xuICAgICAgICAgIHZhciBpbnNpZGVJRnJhbWUgPSBfd2luZG93RWxlbWVudE5hdGl2ZS50b3AgIT09IF93aW5kb3dFbGVtZW50TmF0aXZlO1xuICAgICAgICAgIHZhciBtb3VzZURvd25Qb3NpdGlvbiA9IHt9O1xuICAgICAgICAgIHZhciBtb3VzZURvd25TaXplID0ge307XG4gICAgICAgICAgdmFyIG1vdXNlRG93bkludmVydGVkU2NhbGUgPSB7fTtcbiAgICAgICAgICB2YXIgcmVjb25uZWN0TXV0YXRpb25PYnNlcnZlcjtcblxuICAgICAgICAgIGZ1bmN0aW9uIGRvY3VtZW50RHJhZ01vdmUoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChvbk1vdXNlVG91Y2hEb3duQ29udGludWUoZXZlbnQpKSB7XG4gICAgICAgICAgICAgIHZhciBwYWdlT2Zmc2V0ID0gZ2V0Q29vcmRpbmF0ZXMoZXZlbnQpO1xuICAgICAgICAgICAgICB2YXIgaG9zdEVsZW1lbnRDU1MgPSB7fTtcbiAgICAgICAgICAgICAgaWYgKF9yZXNpemVIb3Jpem9udGFsIHx8IF9yZXNpemVCb3RoKSBob3N0RWxlbWVudENTU1tfc3RyV2lkdGhdID0gbW91c2VEb3duU2l6ZS53ICsgKHBhZ2VPZmZzZXQueCAtIG1vdXNlRG93blBvc2l0aW9uLngpICogbW91c2VEb3duSW52ZXJ0ZWRTY2FsZS54O1xuICAgICAgICAgICAgICBpZiAoX3Jlc2l6ZVZlcnRpY2FsIHx8IF9yZXNpemVCb3RoKSBob3N0RWxlbWVudENTU1tfc3RySGVpZ2h0XSA9IG1vdXNlRG93blNpemUuaCArIChwYWdlT2Zmc2V0LnkgLSBtb3VzZURvd25Qb3NpdGlvbi55KSAqIG1vdXNlRG93bkludmVydGVkU2NhbGUueTtcblxuICAgICAgICAgICAgICBfaG9zdEVsZW1lbnQuY3NzKGhvc3RFbGVtZW50Q1NTKTtcblxuICAgICAgICAgICAgICBDT01QQVRJQklMSVRZLnN0cFAoZXZlbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnRNb3VzZVRvdWNoVXAoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIGRvY3VtZW50TW91c2VUb3VjaFVwKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRJc1RydXN0ZWQgPSBldmVudCAhPT0gdW5kZWZpbmVkJDE7XG4gICAgICAgICAgICBzZXR1cFJlc3BvbnNpdmVFdmVudExpc3RlbmVyKF9kb2N1bWVudEVsZW1lbnQsIFtfc3RyU2VsZWN0U3RhcnRFdmVudCwgX3N0ck1vdXNlVG91Y2hNb3ZlRXZlbnQsIF9zdHJNb3VzZVRvdWNoVXBFdmVudF0sIFtkb2N1bWVudE9uU2VsZWN0U3RhcnQsIGRvY3VtZW50RHJhZ01vdmUsIGRvY3VtZW50TW91c2VUb3VjaFVwXSwgdHJ1ZSk7XG4gICAgICAgICAgICByZW1vdmVDbGFzcyhfYm9keUVsZW1lbnQsIF9jbGFzc05hbWVEcmFnZ2luZyk7XG4gICAgICAgICAgICBpZiAoX3Njcm9sbGJhckNvcm5lckVsZW1lbnQucmVsZWFzZUNhcHR1cmUpIF9zY3JvbGxiYXJDb3JuZXJFbGVtZW50LnJlbGVhc2VDYXB0dXJlKCk7XG5cbiAgICAgICAgICAgIGlmIChldmVudElzVHJ1c3RlZCkge1xuICAgICAgICAgICAgICBpZiAocmVjb25uZWN0TXV0YXRpb25PYnNlcnZlcikgY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXJzKCk7XG5cbiAgICAgICAgICAgICAgX2Jhc2UudXBkYXRlKF9zdHJBdXRvKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVjb25uZWN0TXV0YXRpb25PYnNlcnZlciA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIG9uTW91c2VUb3VjaERvd25Db250aW51ZShldmVudCkge1xuICAgICAgICAgICAgdmFyIG9yaWdpbmFsRXZlbnQgPSBldmVudC5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50O1xuICAgICAgICAgICAgdmFyIGlzVG91Y2hFdmVudCA9IG9yaWdpbmFsRXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkJDE7XG4gICAgICAgICAgICByZXR1cm4gX3NsZWVwaW5nIHx8IF9kZXN0cm95ZWQgPyBmYWxzZSA6IENPTVBBVElCSUxJVFkubUJ0bihldmVudCkgPT09IDEgfHwgaXNUb3VjaEV2ZW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIGdldENvb3JkaW5hdGVzKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX21zaWVWZXJzaW9uICYmIGluc2lkZUlGcmFtZSA/IHtcbiAgICAgICAgICAgICAgeDogZXZlbnQuc2NyZWVuWCxcbiAgICAgICAgICAgICAgeTogZXZlbnQuc2NyZWVuWVxuICAgICAgICAgICAgfSA6IENPTVBBVElCSUxJVFkucGFnZShldmVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYWRkRGVzdHJveUV2ZW50TGlzdGVuZXIoX3Njcm9sbGJhckNvcm5lckVsZW1lbnQsIF9zdHJNb3VzZVRvdWNoRG93bkV2ZW50LCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChvbk1vdXNlVG91Y2hEb3duQ29udGludWUoZXZlbnQpICYmICFfcmVzaXplTm9uZSkge1xuICAgICAgICAgICAgICBpZiAoX211dGF0aW9uT2JzZXJ2ZXJzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgcmVjb25uZWN0TXV0YXRpb25PYnNlcnZlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGlzY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXJzKCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBtb3VzZURvd25Qb3NpdGlvbiA9IGdldENvb3JkaW5hdGVzKGV2ZW50KTtcbiAgICAgICAgICAgICAgbW91c2VEb3duU2l6ZS53ID0gX2hvc3RFbGVtZW50TmF0aXZlW0xFWElDT04ub1ddIC0gKCFfaXNCb3JkZXJCb3ggPyBfcGFkZGluZ1ggOiAwKTtcbiAgICAgICAgICAgICAgbW91c2VEb3duU2l6ZS5oID0gX2hvc3RFbGVtZW50TmF0aXZlW0xFWElDT04ub0hdIC0gKCFfaXNCb3JkZXJCb3ggPyBfcGFkZGluZ1kgOiAwKTtcbiAgICAgICAgICAgICAgbW91c2VEb3duSW52ZXJ0ZWRTY2FsZSA9IGdldEhvc3RFbGVtZW50SW52ZXJ0ZWRTY2FsZSgpO1xuICAgICAgICAgICAgICBzZXR1cFJlc3BvbnNpdmVFdmVudExpc3RlbmVyKF9kb2N1bWVudEVsZW1lbnQsIFtfc3RyU2VsZWN0U3RhcnRFdmVudCwgX3N0ck1vdXNlVG91Y2hNb3ZlRXZlbnQsIF9zdHJNb3VzZVRvdWNoVXBFdmVudF0sIFtkb2N1bWVudE9uU2VsZWN0U3RhcnQsIGRvY3VtZW50RHJhZ01vdmUsIGRvY3VtZW50TW91c2VUb3VjaFVwXSk7XG4gICAgICAgICAgICAgIGFkZENsYXNzKF9ib2R5RWxlbWVudCwgX2NsYXNzTmFtZURyYWdnaW5nKTtcbiAgICAgICAgICAgICAgaWYgKF9zY3JvbGxiYXJDb3JuZXJFbGVtZW50LnNldENhcHR1cmUpIF9zY3JvbGxiYXJDb3JuZXJFbGVtZW50LnNldENhcHR1cmUoKTtcbiAgICAgICAgICAgICAgQ09NUEFUSUJJTElUWS5wcnZEKGV2ZW50KTtcbiAgICAgICAgICAgICAgQ09NUEFUSUJJTElUWS5zdHBQKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSAvLz09PT0gVXRpbHMgPT09PS8vXG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2FsbHMgdGhlIGNhbGxiYWNrIHdpdGggdGhlIGdpdmVuIG5hbWUuIFRoZSBDb250ZXh0IG9mIHRoaXMgY2FsbGJhY2sgaXMgYWx3YXlzIF9iYXNlICh0aGlzKS5cclxuICAgICAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdGFyZ2V0IHdoaWNoIHNoYWxsIGJlIGNhbGxlZC5cclxuICAgICAgICAgKiBAcGFyYW0gYXJncyBUaGUgYXJncyB3aXRoIHdoaWNoIHRoZSBjYWxsYmFjayBzaGFsbCBiZSBjYWxsZWQuXHJcbiAgICAgICAgICogQHBhcmFtIGRlcGVuZGVudCBCb29sZWFuIHdoaWNoIGRlY2lkZXMgd2hldGhlciB0aGUgY2FsbGJhY2sgc2hhbGwgYmUgZmlyZWQsIHVuZGVmaW5lZCBpcyBsaWtlIGEgXCJ0cnVlXCIgdmFsdWUuXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiBkaXNwYXRjaENhbGxiYWNrKG5hbWUsIGFyZ3MsIGRlcGVuZGVudCkge1xuICAgICAgICAgIGlmIChkZXBlbmRlbnQgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgICAgICBpZiAoX2luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBfY3VycmVudFByZXBhcmVkT3B0aW9ucy5jYWxsYmFja3NbbmFtZV07XG4gICAgICAgICAgICB2YXIgZXh0ZW5zaW9uT25OYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHZhciBleHQ7XG4gICAgICAgICAgICBpZiAoZXh0ZW5zaW9uT25OYW1lLnN1YnN0cigwLCAyKSA9PT0gJ29uJykgZXh0ZW5zaW9uT25OYW1lID0gZXh0ZW5zaW9uT25OYW1lLnN1YnN0cigyLCAxKS50b0xvd2VyQ2FzZSgpICsgZXh0ZW5zaW9uT25OYW1lLnN1YnN0cigzKTtcbiAgICAgICAgICAgIGlmICh0eXBlKGNhbGxiYWNrKSA9PSBUWVBFUy5mKSBjYWxsYmFjay5jYWxsKF9iYXNlLCBhcmdzKTtcbiAgICAgICAgICAgIGVhY2goX2V4dGVuc2lvbnMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgZXh0ID0gdGhpcztcbiAgICAgICAgICAgICAgaWYgKHR5cGUoZXh0Lm9uKSA9PSBUWVBFUy5mKSBleHQub24oZXh0ZW5zaW9uT25OYW1lLCBhcmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIV9kZXN0cm95ZWQpIF9jYWxsYmFja3NJbml0UWV1ZXVlLnB1c2goe1xuICAgICAgICAgICAgbjogbmFtZSxcbiAgICAgICAgICAgIGE6IGFyZ3NcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXRzIHRoZSBcInRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdFwiIHByb3BlcnRpZXMsIHdpdGggYSBnaXZlbiBwcmVmaXgsIG9mIHRoZSBnaXZlbiBjc3Mgb2JqZWN0LlxyXG4gICAgICAgICAqIEBwYXJhbSB0YXJnZXRDU1NPYmplY3QgVGhlIGNzcyBvYmplY3QgdG8gd2hpY2ggdGhlIHZhbHVlcyBzaGFsbCBiZSBhcHBsaWVkLlxyXG4gICAgICAgICAqIEBwYXJhbSBwcmVmaXggVGhlIHByZWZpeCBvZiB0aGUgXCJ0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRcIiBjc3MgcHJvcGVydGllcy4gKGV4YW1wbGU6ICdwYWRkaW5nLScgaXMgYSB2YWxpZCBwcmVmaXgpXHJcbiAgICAgICAgICogQHBhcmFtIHZhbHVlcyBBIGFycmF5IG9mIHZhbHVlcyB3aGljaCBzaGFsbCBiZSBhcHBsaWVkIHRvIHRoZSBcInRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdFwiIC1wcm9wZXJ0aWVzLiBUaGUgYXJyYXkgb3JkZXIgaXMgW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF0uXHJcbiAgICAgICAgICogSWYgdGhpcyBhcmd1bWVudCBpcyB1bmRlZmluZWQgdGhlIHZhbHVlICcnIChlbXB0eSBzdHJpbmcpIHdpbGwgYmUgYXBwbGllZCB0byBhbGwgcHJvcGVydGllcy5cclxuICAgICAgICAgKi9cblxuXG4gICAgICAgIGZ1bmN0aW9uIHNldFRvcFJpZ2h0Qm90dG9tTGVmdCh0YXJnZXRDU1NPYmplY3QsIHByZWZpeCwgdmFsdWVzKSB7XG4gICAgICAgICAgcHJlZml4ID0gcHJlZml4IHx8IF9zdHJFbXB0eTtcbiAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMgfHwgW19zdHJFbXB0eSwgX3N0ckVtcHR5LCBfc3RyRW1wdHksIF9zdHJFbXB0eV07XG4gICAgICAgICAgdGFyZ2V0Q1NTT2JqZWN0W3ByZWZpeCArIF9zdHJUb3BdID0gdmFsdWVzWzBdO1xuICAgICAgICAgIHRhcmdldENTU09iamVjdFtwcmVmaXggKyBfc3RyUmlnaHRdID0gdmFsdWVzWzFdO1xuICAgICAgICAgIHRhcmdldENTU09iamVjdFtwcmVmaXggKyBfc3RyQm90dG9tXSA9IHZhbHVlc1syXTtcbiAgICAgICAgICB0YXJnZXRDU1NPYmplY3RbcHJlZml4ICsgX3N0ckxlZnRdID0gdmFsdWVzWzNdO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldHMgdGhlIFwidG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XCIgQ1NTIHByb3BlcnRpZXMgb2YgdGhlIENTUyBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBwcmVmaXggZnJvbSB0aGUgaG9zdCBlbGVtZW50LlxyXG4gICAgICAgICAqIEBwYXJhbSBwcmVmaXggVGhlIHByZWZpeCBvZiB0aGUgXCJ0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRcIiBjc3MgcHJvcGVydGllcy4gKGV4YW1wbGU6ICdwYWRkaW5nLScgaXMgYSB2YWxpZCBwcmVmaXgpXHJcbiAgICAgICAgICogQHBhcmFtIHN1ZmZpeCBUaGUgc3VmZml4IG9mIHRoZSBcInRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdFwiIGNzcyBwcm9wZXJ0aWVzLiAoZXhhbXBsZTogJ2JvcmRlci0nIGlzIGEgdmFsaWQgcHJlZml4IHdpdGggJy13aWR0aCcgaXMgYSB2YWxpZCBzdWZmaXgpXHJcbiAgICAgICAgICogQHBhcmFtIHplcm9YIFRydWUgaWYgdGhlIHggYXhpcyBzaGFsbCBiZSAwLlxyXG4gICAgICAgICAqIEBwYXJhbSB6ZXJvWSBUcnVlIGlmIHRoZSB5IGF4aXMgc2hhbGwgYmUgMC5cclxuICAgICAgICAgKiBAcmV0dXJucyB7e319IFRoZSBvYmplY3Qgd2hpY2ggY29udGFpbnMgdGhlIG51bWJlcnMgb2YgdGhlIHJlYWQgQ1NTIHByb3BlcnRpZXMuXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiBnZXRUb3BSaWdodEJvdHRvbUxlZnRIb3N0KHByZWZpeCwgc3VmZml4LCB6ZXJvWCwgemVyb1kpIHtcbiAgICAgICAgICBzdWZmaXggPSBzdWZmaXggfHwgX3N0ckVtcHR5O1xuICAgICAgICAgIHByZWZpeCA9IHByZWZpeCB8fCBfc3RyRW1wdHk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHQ6IHplcm9ZID8gMCA6IHBhcnNlVG9aZXJvT3JOdW1iZXIoX2hvc3RFbGVtZW50LmNzcyhwcmVmaXggKyBfc3RyVG9wICsgc3VmZml4KSksXG4gICAgICAgICAgICByOiB6ZXJvWCA/IDAgOiBwYXJzZVRvWmVyb09yTnVtYmVyKF9ob3N0RWxlbWVudC5jc3MocHJlZml4ICsgX3N0clJpZ2h0ICsgc3VmZml4KSksXG4gICAgICAgICAgICBiOiB6ZXJvWSA/IDAgOiBwYXJzZVRvWmVyb09yTnVtYmVyKF9ob3N0RWxlbWVudC5jc3MocHJlZml4ICsgX3N0ckJvdHRvbSArIHN1ZmZpeCkpLFxuICAgICAgICAgICAgbDogemVyb1ggPyAwIDogcGFyc2VUb1plcm9Pck51bWJlcihfaG9zdEVsZW1lbnQuY3NzKHByZWZpeCArIF9zdHJMZWZ0ICsgc3VmZml4KSlcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgdGhlIGNvbXB1dGVkIENTUyB0cmFuc2l0aW9uIHN0cmluZyBmcm9tIHRoZSBnaXZlbiBlbGVtZW50LlxyXG4gICAgICAgICAqIEBwYXJhbSBlbGVtZW50IFRoZSBlbGVtZW50IGZyb20gd2hpY2ggdGhlIHRyYW5zaXRpb24gc3RyaW5nIHNoYWxsIGJlIHJldHVybmVkLlxyXG4gICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBDU1MgdHJhbnNpdGlvbiBzdHJpbmcgZnJvbSB0aGUgZ2l2ZW4gZWxlbWVudC5cclxuICAgICAgICAgKi9cblxuXG4gICAgICAgIGZ1bmN0aW9uIGdldENTU1RyYW5zaXRpb25TdHJpbmcoZWxlbWVudCkge1xuICAgICAgICAgIHZhciB0cmFuc2l0aW9uU3RyID0gVkVORE9SUy5fY3NzUHJvcGVydHkoJ3RyYW5zaXRpb24nKTtcblxuICAgICAgICAgIHZhciBhc3NlbWJsZWRWYWx1ZSA9IGVsZW1lbnQuY3NzKHRyYW5zaXRpb25TdHIpO1xuICAgICAgICAgIGlmIChhc3NlbWJsZWRWYWx1ZSkgcmV0dXJuIGFzc2VtYmxlZFZhbHVlO1xuICAgICAgICAgIHZhciByZWdFeHBTdHJpbmcgPSAnXFxcXHMqKCcgKyAnKFteLChdKyhcXFxcKC4rP1xcXFwpKT8pKycgKyAnKVtcXFxccyxdKic7XG4gICAgICAgICAgdmFyIHJlZ0V4cE1haW4gPSBuZXcgUmVnRXhwKHJlZ0V4cFN0cmluZyk7XG4gICAgICAgICAgdmFyIHJlZ0V4cFZhbGlkYXRlID0gbmV3IFJlZ0V4cCgnXignICsgcmVnRXhwU3RyaW5nICsgJykrJCcpO1xuICAgICAgICAgIHZhciBwcm9wZXJ0aWVzID0gJ3Byb3BlcnR5IGR1cmF0aW9uIHRpbWluZy1mdW5jdGlvbiBkZWxheScuc3BsaXQoJyAnKTtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgICAgdmFyIHN0clJlc3VsdDtcbiAgICAgICAgICB2YXIgdmFsdWVBcnJheTtcbiAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgdmFyIGo7XG5cbiAgICAgICAgICB2YXIgc3BsaXRDc3NTdHlsZUJ5Q29tbWEgPSBmdW5jdGlvbiBzcGxpdENzc1N0eWxlQnlDb21tYShzdHIpIHtcbiAgICAgICAgICAgIHN0clJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgaWYgKCFzdHIubWF0Y2gocmVnRXhwVmFsaWRhdGUpKSByZXR1cm4gc3RyO1xuXG4gICAgICAgICAgICB3aGlsZSAoc3RyLm1hdGNoKHJlZ0V4cE1haW4pKSB7XG4gICAgICAgICAgICAgIHN0clJlc3VsdC5wdXNoKFJlZ0V4cC4kMSk7XG4gICAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKHJlZ0V4cE1haW4sIF9zdHJFbXB0eSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzdHJSZXN1bHQ7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGZvciAoOyBpIDwgcHJvcGVydGllc1tMRVhJQ09OLmxdOyBpKyspIHtcbiAgICAgICAgICAgIHZhbHVlQXJyYXkgPSBzcGxpdENzc1N0eWxlQnlDb21tYShlbGVtZW50LmNzcyh0cmFuc2l0aW9uU3RyICsgJy0nICsgcHJvcGVydGllc1tpXSkpO1xuXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdmFsdWVBcnJheVtMRVhJQ09OLmxdOyBqKyspIHtcbiAgICAgICAgICAgICAgcmVzdWx0W2pdID0gKHJlc3VsdFtqXSA/IHJlc3VsdFtqXSArIF9zdHJTcGFjZSA6IF9zdHJFbXB0eSkgKyB2YWx1ZUFycmF5W2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByZXN1bHQuam9pbignLCAnKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZW5lcmF0ZXMgYSBSZWd1bGFyIEV4cHJlc3Npb24gd2hpY2ggbWF0Y2hlcyB3aXRoIGEgc3RyaW5nIHdoaWNoIHN0YXJ0cyB3aXRoICdvcy1ob3N0Jy5cclxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHdpdGhDdXJyQ2xhc3NOYW1lT3B0aW9uIFRoZSBSZWd1bGFyIEV4cHJlc3Npb24gYWxzbyBtYXRjaGVzIGlmIHRoZSBzdHJpbmcgaXMgdGhlIGN1cnJlbnQgQ2xhc3NOYW1lIG9wdGlvbiAobXVsdGlwbGUgdmFsdWVzIHNwbGl0dGVkIGJ5IHNwYWNlIHBvc3NpYmxlKS5cclxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHdpdGhPbGRDbGFzc05hbWVPcHRpb24gVGhlIFJlZ3VsYXIgRXhwcmVzc2lvbiBhbHNvIG1hdGNoZXMgaWYgdGhlIHN0cmluZyBpcyB0aGUgb2xkIENsYXNzTmFtZSBvcHRpb24gKG11bHRpcGxlIHZhbHVlcyBzcGxpdHRlZCBieSBzcGFjZSBwb3NzaWJsZSkuXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVIb3N0Q2xhc3NOYW1lUmVnRXhwKHdpdGhDdXJyQ2xhc3NOYW1lT3B0aW9uLCB3aXRoT2xkQ2xhc3NOYW1lT3B0aW9uKSB7XG4gICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgdmFyIHNwbGl0O1xuICAgICAgICAgIHZhciBhcHBlbmRpeDtcblxuICAgICAgICAgIHZhciBhcHBlbmRDbGFzc2VzID0gZnVuY3Rpb24gYXBwZW5kQ2xhc3NlcyhjbGFzc2VzLCBjb25kaXRpb24pIHtcbiAgICAgICAgICAgIGFwcGVuZGl4ID0gJyc7XG5cbiAgICAgICAgICAgIGlmIChjb25kaXRpb24gJiYgX3R5cGVvZihjbGFzc2VzKSA9PSBUWVBFUy5zKSB7XG4gICAgICAgICAgICAgIHNwbGl0ID0gY2xhc3Nlcy5zcGxpdChfc3RyU3BhY2UpO1xuXG4gICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzcGxpdFtMRVhJQ09OLmxdOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcHBlbmRpeCArPSAnfCcgKyBzcGxpdFtpXSArICckJztcbiAgICAgICAgICAgICAgfSAvLyBzcGxpdFtpXS5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpIGZvciBlc2NhcGluZyByZWdleCBjaGFyYWN0ZXJzXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGFwcGVuZGl4O1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCgnKF4nICsgX2NsYXNzTmFtZUhvc3RFbGVtZW50ICsgJyhbLV9dLit8KSQpJyArIGFwcGVuZENsYXNzZXMoX2NsYXNzTmFtZUNhY2hlLCB3aXRoQ3VyckNsYXNzTmFtZU9wdGlvbikgKyBhcHBlbmRDbGFzc2VzKF9vbGRDbGFzc05hbWUsIHdpdGhPbGRDbGFzc05hbWVPcHRpb24pLCAnZycpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENhbGN1bGF0ZXMgdGhlIGhvc3QtZWxlbWVudHMgaW52ZXJ0ZWQgc2NhbGUuIChpbnZlcnRlZFNjYWxlID0gMSAvIHNjYWxlKVxyXG4gICAgICAgICAqIEByZXR1cm5zIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSBUaGUgc2NhbGUgb2YgdGhlIGhvc3QtZWxlbWVudC5cclxuICAgICAgICAgKi9cblxuXG4gICAgICAgIGZ1bmN0aW9uIGdldEhvc3RFbGVtZW50SW52ZXJ0ZWRTY2FsZSgpIHtcbiAgICAgICAgICB2YXIgcmVjdCA9IF9wYWRkaW5nRWxlbWVudE5hdGl2ZVtMRVhJQ09OLmJDUl0oKTtcblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBfc3VwcG9ydFRyYW5zZm9ybSA/IDEgLyAoTUFUSC5yb3VuZChyZWN0LndpZHRoKSAvIF9wYWRkaW5nRWxlbWVudE5hdGl2ZVtMRVhJQ09OLm9XXSkgfHwgMSA6IDEsXG4gICAgICAgICAgICB5OiBfc3VwcG9ydFRyYW5zZm9ybSA/IDEgLyAoTUFUSC5yb3VuZChyZWN0LmhlaWdodCkgLyBfcGFkZGluZ0VsZW1lbnROYXRpdmVbTEVYSUNPTi5vSF0pIHx8IDEgOiAxXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGEgSFRNTEVsZW1lbnQuXHJcbiAgICAgICAgICogQHBhcmFtIG8gVGhlIG9iamVjdCB3aGljaCBzaGFsbCBiZSBjaGVja2VkLlxyXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIHRoZSBnaXZlbiBvYmplY3QgaXMgYSBIVE1MRWxlbWVudCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgZnVuY3Rpb24gaXNIVE1MRWxlbWVudChvKSB7XG4gICAgICAgICAgdmFyIHN0ck93bmVyRG9jdW1lbnQgPSAnb3duZXJEb2N1bWVudCc7XG4gICAgICAgICAgdmFyIHN0ckhUTUxFbGVtZW50ID0gJ0hUTUxFbGVtZW50JztcbiAgICAgICAgICB2YXIgd25kID0gbyAmJiBvW3N0ck93bmVyRG9jdW1lbnRdID8gb1tzdHJPd25lckRvY3VtZW50XS5wYXJlbnRXaW5kb3cgfHwgd2luZG93IDogd2luZG93O1xuICAgICAgICAgIHJldHVybiBfdHlwZW9mKHduZFtzdHJIVE1MRWxlbWVudF0pID09IFRZUEVTLm8gPyBvIGluc3RhbmNlb2Ygd25kW3N0ckhUTUxFbGVtZW50XSA6IC8vRE9NMlxuICAgICAgICAgIG8gJiYgX3R5cGVvZihvKSA9PSBUWVBFUy5vICYmIG8gIT09IG51bGwgJiYgby5ub2RlVHlwZSA9PT0gMSAmJiBfdHlwZW9mKG8ubm9kZU5hbWUpID09IFRZUEVTLnM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29tcGFyZXMgMiBhcnJheXMgYW5kIHJldHVybnMgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gdGhlbSBhcyBhIGFycmF5LlxyXG4gICAgICAgICAqIEBwYXJhbSBhMSBUaGUgZmlyc3QgYXJyYXkgd2hpY2ggc2hhbGwgYmUgY29tcGFyZWQuXHJcbiAgICAgICAgICogQHBhcmFtIGEyIFRoZSBzZWNvbmQgYXJyYXkgd2hpY2ggc2hhbGwgYmUgY29tcGFyZWQuXHJcbiAgICAgICAgICogQHJldHVybnMge0FycmF5fSBUaGUgZGlmZmVyZW5jZXMgYmV0d2VlbiB0aGUgdHdvIGFycmF5cy5cclxuICAgICAgICAgKi9cblxuXG4gICAgICAgIGZ1bmN0aW9uIGdldEFycmF5RGlmZmVyZW5jZXMoYTEsIGEyKSB7XG4gICAgICAgICAgdmFyIGEgPSBbXTtcbiAgICAgICAgICB2YXIgZGlmZiA9IFtdO1xuICAgICAgICAgIHZhciBpO1xuICAgICAgICAgIHZhciBrO1xuXG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IGExLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhW2ExW2ldXSA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IGEyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYVthMltpXV0pIGRlbGV0ZSBhW2EyW2ldXTtlbHNlIGFbYTJbaV1dID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKGsgaW4gYSkge1xuICAgICAgICAgICAgZGlmZi5wdXNoKGspO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBkaWZmO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgWmVybyBvciB0aGUgbnVtYmVyIHRvIHdoaWNoIHRoZSB2YWx1ZSBjYW4gYmUgcGFyc2VkLlxyXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgd2hpY2ggc2hhbGwgYmUgcGFyc2VkLlxyXG4gICAgICAgICAqIEBwYXJhbSB0b0Zsb2F0IEluZGljYXRlcyB3aGV0aGVyIHRoZSBudW1iZXIgc2hhbGwgYmUgcGFyc2VkIHRvIGEgZmxvYXQuXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiBwYXJzZVRvWmVyb09yTnVtYmVyKHZhbHVlLCB0b0Zsb2F0KSB7XG4gICAgICAgICAgdmFyIG51bSA9IHRvRmxvYXQgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgICAgICAgcmV0dXJuIGlzTmFOKG51bSkgPyAwIDogbnVtO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldHMgc2V2ZXJhbCBpbmZvcm1hdGlvbiBvZiB0aGUgdGV4dGFyZWEgYW5kIHJldHVybnMgdGhlbSBhcyBhIG9iamVjdCBvciB1bmRlZmluZWQgaWYgdGhlIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGl0LlxyXG4gICAgICAgICAqIEByZXR1cm5zIHt7Y3Vyc29yUm93OiBOdW1iZXIsIGN1cnNvckNvbCwgcm93czogTnVtYmVyLCBjb2xzOiBudW1iZXIsIHdSb3c6IG51bWJlciwgcG9zOiBudW1iZXIsIG1heCA6IG51bWJlcn19IG9yIHVuZGVmaW5lZCBpZiBub3Qgc3VwcG9ydGVkLlxyXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0VGV4dGFyZWFJbmZvKCkge1xuICAgICAgICAgIC8vcmVhZCBuZWVkZWQgdmFsdWVzXG4gICAgICAgICAgdmFyIHRleHRhcmVhQ3Vyc29yUG9zaXRpb24gPSBfdGFyZ2V0RWxlbWVudE5hdGl2ZS5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICBpZiAodGV4dGFyZWFDdXJzb3JQb3NpdGlvbiA9PT0gdW5kZWZpbmVkJDEpIHJldHVybjtcblxuICAgICAgICAgIHZhciB0ZXh0YXJlYVZhbHVlID0gX3RhcmdldEVsZW1lbnQudmFsKCk7XG5cbiAgICAgICAgICB2YXIgdGV4dGFyZWFMZW5ndGggPSB0ZXh0YXJlYVZhbHVlW0xFWElDT04ubF07XG4gICAgICAgICAgdmFyIHRleHRhcmVhUm93U3BsaXQgPSB0ZXh0YXJlYVZhbHVlLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgICB2YXIgdGV4dGFyZWFMYXN0Um93ID0gdGV4dGFyZWFSb3dTcGxpdFtMRVhJQ09OLmxdO1xuICAgICAgICAgIHZhciB0ZXh0YXJlYUN1cnJlbnRDdXJzb3JSb3dTcGxpdCA9IHRleHRhcmVhVmFsdWUuc3Vic3RyKDAsIHRleHRhcmVhQ3Vyc29yUG9zaXRpb24pLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgICB2YXIgd2lkZXN0Um93ID0gMDtcbiAgICAgICAgICB2YXIgdGV4dGFyZWFMYXN0Q29sID0gMDtcbiAgICAgICAgICB2YXIgY3Vyc29yUm93ID0gdGV4dGFyZWFDdXJyZW50Q3Vyc29yUm93U3BsaXRbTEVYSUNPTi5sXTtcbiAgICAgICAgICB2YXIgY3Vyc29yQ29sID0gdGV4dGFyZWFDdXJyZW50Q3Vyc29yUm93U3BsaXRbdGV4dGFyZWFDdXJyZW50Q3Vyc29yUm93U3BsaXRbTEVYSUNPTi5sXSAtIDFdW0xFWElDT04ubF07XG4gICAgICAgICAgdmFyIHJvd0NvbHM7XG4gICAgICAgICAgdmFyIGk7IC8vZ2V0IHdpZGVzdCBSb3cgYW5kIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGV4dGFyZWFcblxuICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0ZXh0YXJlYVJvd1NwbGl0W0xFWElDT04ubF07IGkrKykge1xuICAgICAgICAgICAgcm93Q29scyA9IHRleHRhcmVhUm93U3BsaXRbaV1bTEVYSUNPTi5sXTtcblxuICAgICAgICAgICAgaWYgKHJvd0NvbHMgPiB0ZXh0YXJlYUxhc3RDb2wpIHtcbiAgICAgICAgICAgICAgd2lkZXN0Um93ID0gaSArIDE7XG4gICAgICAgICAgICAgIHRleHRhcmVhTGFzdENvbCA9IHJvd0NvbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIF9jdXJzb3JSb3c6IGN1cnNvclJvdyxcbiAgICAgICAgICAgIC8vY3Vyc29yUm93XG4gICAgICAgICAgICBfY3Vyc29yQ29sdW1uOiBjdXJzb3JDb2wsXG4gICAgICAgICAgICAvL2N1cnNvckNvbFxuICAgICAgICAgICAgX3Jvd3M6IHRleHRhcmVhTGFzdFJvdyxcbiAgICAgICAgICAgIC8vcm93c1xuICAgICAgICAgICAgX2NvbHVtbnM6IHRleHRhcmVhTGFzdENvbCxcbiAgICAgICAgICAgIC8vY29sc1xuICAgICAgICAgICAgX3dpZGVzdFJvdzogd2lkZXN0Um93LFxuICAgICAgICAgICAgLy93Um93XG4gICAgICAgICAgICBfY3Vyc29yUG9zaXRpb246IHRleHRhcmVhQ3Vyc29yUG9zaXRpb24sXG4gICAgICAgICAgICAvL3Bvc1xuICAgICAgICAgICAgX2N1cnNvck1heDogdGV4dGFyZWFMZW5ndGggLy9tYXhcblxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIG5hdGl2ZSBvdmVybGF5IHNjcm9sbGJhcnMgYXJlIGFjdGl2ZS5cclxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBuYXRpdmUgb3ZlcmxheSBzY3JvbGxiYXJzIGFyZSBhY3RpdmUsIGZhbHNlIG90aGVyd2lzZS5cclxuICAgICAgICAgKi9cblxuXG4gICAgICAgIGZ1bmN0aW9uIG5hdGl2ZU92ZXJsYXlTY3JvbGxiYXJzQXJlQWN0aXZlKCkge1xuICAgICAgICAgIHJldHVybiBfaWdub3JlT3ZlcmxheVNjcm9sbGJhckhpZGluZ0NhY2hlICYmIF9uYXRpdmVTY3JvbGxiYXJJc092ZXJsYWlkLnggJiYgX25hdGl2ZVNjcm9sbGJhcklzT3ZlcmxhaWQueTtcbiAgICAgICAgfVxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXRzIHRoZSBlbGVtZW50IHdoaWNoIGlzIHVzZWQgdG8gbWVhc3VyZSB0aGUgY29udGVudCBzaXplLlxyXG4gICAgICAgICAqIEByZXR1cm5zIHsqfSBUZXh0YXJlYUNvdmVyIGlmIHRhcmdldCBlbGVtZW50IGlzIHRleHRhcmVhIGVsc2UgdGhlIENvbnRlbnRFbGVtZW50LlxyXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0Q29udGVudE1lYXN1cmVFbGVtZW50KCkge1xuICAgICAgICAgIHJldHVybiBfaXNUZXh0YXJlYSA/IF90ZXh0YXJlYUNvdmVyRWxlbWVudFswXSA6IF9jb250ZW50RWxlbWVudE5hdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZW5lcmF0ZXMgYSBzdHJpbmcgd2hpY2ggcmVwcmVzZW50cyBhIEhUTUwgZGl2IHdpdGggdGhlIGdpdmVuIGNsYXNzZXMgb3IgYXR0cmlidXRlcy5cclxuICAgICAgICAgKiBAcGFyYW0gY2xhc3Nlc09yQXR0cnMgVGhlIGNsYXNzIG9mIHRoZSBkaXYgYXMgc3RyaW5nIG9yIGEgb2JqZWN0IHdoaWNoIHJlcHJlc2VudHMgdGhlIGF0dHJpYnV0ZXMgb2YgdGhlIGRpdi4gKFRoZSBjbGFzcyBhdHRyaWJ1dGUgY2FuIGFsc28gYmUgd3JpdHRlbiBhcyBcImNsYXNzTmFtZVwiLilcclxuICAgICAgICAgKiBAcGFyYW0gY29udGVudCBUaGUgY29udGVudCBvZiB0aGUgZGl2IGFzIHN0cmluZy5cclxuICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29uY2F0ZWQgc3RyaW5nIHdoaWNoIHJlcHJlc2VudHMgYSBIVE1MIGRpdiBhbmQgaXRzIGNvbnRlbnQuXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZURpdihjbGFzc2VzT3JBdHRycywgY29udGVudCkge1xuICAgICAgICAgIHJldHVybiAnPGRpdiAnICsgKGNsYXNzZXNPckF0dHJzID8gdHlwZShjbGFzc2VzT3JBdHRycykgPT0gVFlQRVMucyA/ICdjbGFzcz1cIicgKyBjbGFzc2VzT3JBdHRycyArICdcIicgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIga2V5O1xuICAgICAgICAgICAgdmFyIGF0dHJzID0gX3N0ckVtcHR5O1xuXG4gICAgICAgICAgICBpZiAoRlJBTUVXT1JLLmlzUGxhaW5PYmplY3QoY2xhc3Nlc09yQXR0cnMpKSB7XG4gICAgICAgICAgICAgIGZvciAoa2V5IGluIGNsYXNzZXNPckF0dHJzKSB7XG4gICAgICAgICAgICAgICAgYXR0cnMgKz0gKGtleSA9PT0gJ2MnID8gJ2NsYXNzJyA6IGtleSkgKyAnPVwiJyArIGNsYXNzZXNPckF0dHJzW2tleV0gKyAnXCIgJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXR0cnM7XG4gICAgICAgICAgfSgpIDogX3N0ckVtcHR5KSArICc+JyArIChjb250ZW50IHx8IF9zdHJFbXB0eSkgKyAnPC9kaXY+JztcbiAgICAgICAgfVxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZWxlY3RzIG9yIGdlbmVyYXRlcyBhIGRpdiB3aXRoIHRoZSBnaXZlbiBjbGFzcyBhdHRyaWJ1dGUuXHJcbiAgICAgICAgICogQHBhcmFtIGNsYXNzTmFtZSBUaGUgY2xhc3MgbmFtZXMgKGRpdmlkZWQgYnkgc3BhY2VzKSBvZiB0aGUgZGl2IHdoaWNoIHNoYWxsIGJlIHNlbGVjdGVkIG9yIGdlbmVyYXRlZC5cclxuICAgICAgICAgKiBAcGFyYW0gc2VsZWN0UGFyZW50T3JPbmx5Q2hpbGRyZW4gVGhlIHBhcmVudCBlbGVtZW50IGZyb20gd2hpY2ggb2YgdGhlIGVsZW1lbnQgc2hhbGwgYmUgc2VsZWN0ZWQuIChpZiB1bmRlZmluZWQgb3IgYm9vbGVhbiBpdHMgaG9zdEVsZW1lbnQpXHJcbiAgICAgICAgICogSWYgaXRzIGEgYm9vbGVhbiBpdCBkZWNpZGVzIHdoZXRoZXIgb25seSB0aGUgY2hpbGRyZW4gb2YgdGhlIGhvc3QgZWxlbWVudCBzaGFsbCBiZSBzZWxlY3RlZC5cclxuICAgICAgICAgKiBAcmV0dXJucyB7Kn0gVGhlIGdlbmVyYXRlZCBvciBzZWxlY3RlZCBlbGVtZW50LlxyXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgZnVuY3Rpb24gc2VsZWN0T3JHZW5lcmF0ZURpdkJ5Q2xhc3MoY2xhc3NOYW1lLCBzZWxlY3RQYXJlbnRPck9ubHlDaGlsZHJlbikge1xuICAgICAgICAgIHZhciBvbmx5Q2hpbGRyZW4gPSB0eXBlKHNlbGVjdFBhcmVudE9yT25seUNoaWxkcmVuKSA9PSBUWVBFUy5iO1xuICAgICAgICAgIHZhciBzZWxlY3RQYXJlbnQgPSBvbmx5Q2hpbGRyZW4gPyBfaG9zdEVsZW1lbnQgOiBzZWxlY3RQYXJlbnRPck9ubHlDaGlsZHJlbiB8fCBfaG9zdEVsZW1lbnQ7XG4gICAgICAgICAgcmV0dXJuIF9kb21FeGlzdHMgJiYgIXNlbGVjdFBhcmVudFtMRVhJQ09OLmxdID8gbnVsbCA6IF9kb21FeGlzdHMgPyBzZWxlY3RQYXJlbnRbb25seUNoaWxkcmVuID8gJ2NoaWxkcmVuJyA6ICdmaW5kJ10oX3N0ckRvdCArIGNsYXNzTmFtZS5yZXBsYWNlKC9cXHMvZywgX3N0ckRvdCkpLmVxKDApIDogRlJBTUVXT1JLKGdlbmVyYXRlRGl2KGNsYXNzTmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldHMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBwcm9wZXJ0eSBmcm9tIHRoZSBnaXZlbiBvYmplY3QuXHJcbiAgICAgICAgICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IGZyb20gd2hpY2ggdGhlIHByb3BlcnR5IHZhbHVlIHNoYWxsIGJlIGdvdC5cclxuICAgICAgICAgKiBAcGFyYW0gcGF0aCBUaGUgcHJvcGVydHkgb2Ygd2hpY2ggdGhlIHZhbHVlIHNoYWxsIGJlIGdvdC5cclxuICAgICAgICAgKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHNlYXJjaGVkIHByb3BlcnR5IG9yIHVuZGVmaW5lZCBvZiB0aGUgcHJvcGVydHkgd2Fzbid0IGZvdW5kLlxyXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0T2JqZWN0UHJvcFZhbChvYmosIHBhdGgpIHtcbiAgICAgICAgICB2YXIgc3BsaXRzID0gcGF0aC5zcGxpdChfc3RyRG90KTtcbiAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgdmFyIHZhbDtcblxuICAgICAgICAgIGZvciAoOyBpIDwgc3BsaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIW9ialtMRVhJQ09OLmhPUF0oc3BsaXRzW2ldKSkgcmV0dXJuO1xuICAgICAgICAgICAgdmFsID0gb2JqW3NwbGl0c1tpXV07XG4gICAgICAgICAgICBpZiAoaSA8IHNwbGl0cy5sZW5ndGggJiYgdHlwZSh2YWwpID09IFRZUEVTLm8pIG9iaiA9IHZhbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBwcm9wZXJ0eSBmcm9tIHRoZSBnaXZlbiBvYmplY3QuXHJcbiAgICAgICAgICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IGZyb20gd2hpY2ggdGhlIHByb3BlcnR5IHZhbHVlIHNoYWxsIGJlIHNldC5cclxuICAgICAgICAgKiBAcGFyYW0gcGF0aCBUaGUgcHJvcGVydHkgb2Ygd2hpY2ggdGhlIHZhbHVlIHNoYWxsIGJlIHNldC5cclxuICAgICAgICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHkgd2hpY2ggc2hhbGwgYmUgc2V0LlxyXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgZnVuY3Rpb24gc2V0T2JqZWN0UHJvcFZhbChvYmosIHBhdGgsIHZhbCkge1xuICAgICAgICAgIHZhciBzcGxpdHMgPSBwYXRoLnNwbGl0KF9zdHJEb3QpO1xuICAgICAgICAgIHZhciBzcGxpdHNMZW5ndGggPSBzcGxpdHMubGVuZ3RoO1xuICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICB2YXIgZXh0ZW5kT2JqID0ge307XG4gICAgICAgICAgdmFyIGV4dGVuZE9ialJvb3QgPSBleHRlbmRPYmo7XG5cbiAgICAgICAgICBmb3IgKDsgaSA8IHNwbGl0c0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBleHRlbmRPYmogPSBleHRlbmRPYmpbc3BsaXRzW2ldXSA9IGkgKyAxIDwgc3BsaXRzTGVuZ3RoID8ge30gOiB2YWw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgRlJBTUVXT1JLLmV4dGVuZChvYmosIGV4dGVuZE9ialJvb3QsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlx0XHJcbiAgICAgICAgICogUnVucyBhIGFjdGlvbiBmb3IgZWFjaCBzZWxlY3RvciBpbnNpZGUgdGhlIHVwZGF0ZU9uTG9hZCBvcHRpb24uXHRcclxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBhY3Rpb24gVGhlIGFjdGlvbiBmb3IgZWFjaCB1cGRhdGVPbkxvYWQgc2VsZWN0b3IsIHRoZSBhcmd1bWVudHMgdGhlIGZ1bmN0aW9uIHRha2VzIGlzIHRoZSBpbmRleCBhbmQgdGhlIHZhbHVlICh0aGUgc2VsZWN0b3IpLlx0XHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiBlYWNoVXBkYXRlT25Mb2FkKGFjdGlvbikge1xuICAgICAgICAgIHZhciB1cGRhdGVPbkxvYWQgPSBfY3VycmVudFByZXBhcmVkT3B0aW9ucy51cGRhdGVPbkxvYWQ7XG4gICAgICAgICAgdXBkYXRlT25Mb2FkID0gdHlwZSh1cGRhdGVPbkxvYWQpID09IFRZUEVTLnMgPyB1cGRhdGVPbkxvYWQuc3BsaXQoX3N0clNwYWNlKSA6IHVwZGF0ZU9uTG9hZDtcblxuICAgICAgICAgIGlmIChDT01QQVRJQklMSVRZLmlzQSh1cGRhdGVPbkxvYWQpICYmICFfZGVzdHJveWVkKSB7XG4gICAgICAgICAgICBlYWNoKHVwZGF0ZU9uTG9hZCwgYWN0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy89PT09IFV0aWxzIENhY2hlID09PT0vL1xuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbXBhcmVzIHR3byB2YWx1ZXMgb3Igb2JqZWN0cyBhbmQgcmV0dXJucyB0cnVlIGlmIHRoZXkgYXJlbid0IGVxdWFsLlxyXG4gICAgICAgICAqIEBwYXJhbSBjdXJyZW50IFRoZSBmaXJzdCB2YWx1ZSBvciBvYmplY3Qgd2hpY2ggc2hhbGwgYmUgY29tcGFyZWQuXHJcbiAgICAgICAgICogQHBhcmFtIGNhY2hlIFRoZSBzZWNvbmQgdmFsdWUgb3Igb2JqZWN0IHdoaWNoIHNoYWxsIGJlIGNvbXBhcmVkLlxyXG4gICAgICAgICAqIEBwYXJhbSBmb3JjZSBJZiB0cnVlIHRoZSByZXR1cm5lZCB2YWx1ZSBpcyBhbHdheXMgdHJ1ZS5cclxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBib3RoIHZhbHVlcyBvciBvYmplY3RzIGFyZW4ndCBlcXVhbCBvciBmb3JjZSBpcyB0cnVlLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiBjaGVja0NhY2hlKGN1cnJlbnQsIGNhY2hlLCBmb3JjZSkge1xuICAgICAgICAgIGlmIChmb3JjZSkgcmV0dXJuIGZvcmNlO1xuXG4gICAgICAgICAgaWYgKHR5cGUoY3VycmVudCkgPT0gVFlQRVMubyAmJiB0eXBlKGNhY2hlKSA9PSBUWVBFUy5vKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKHByb3AgIT09ICdjJykge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50W0xFWElDT04uaE9QXShwcm9wKSAmJiBjYWNoZVtMRVhJQ09OLmhPUF0ocHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChjaGVja0NhY2hlKGN1cnJlbnRbcHJvcF0sIGNhY2hlW3Byb3BdKSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudCAhPT0gY2FjaGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IC8vPT09PSBTaG9ydGN1dHMgPT09PS8vXG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogalF1ZXJ5IGV4dGVuZCBtZXRob2Qgc2hvcnRjdXQgd2l0aCBhIGFwcGVuZGVkIFwidHJ1ZVwiIGFzIGZpcnN0IGFyZ3VtZW50LlxyXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgZnVuY3Rpb24gZXh0ZW5kRGVlcCgpIHtcbiAgICAgICAgICByZXR1cm4gRlJBTUVXT1JLLmV4dGVuZC5hcHBseSh0aGlzLCBbdHJ1ZV0uY29uY2F0KFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGpRdWVyeSBhZGRDbGFzcyBtZXRob2Qgc2hvcnRjdXQuXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiBhZGRDbGFzcyhlbCwgY2xhc3Nlcykge1xuICAgICAgICAgIHJldHVybiBfZnJhbWV3b3JrUHJvdG8uYWRkQ2xhc3MuY2FsbChlbCwgY2xhc3Nlcyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogalF1ZXJ5IHJlbW92ZUNsYXNzIG1ldGhvZCBzaG9ydGN1dC5cclxuICAgICAgICAgKi9cblxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsLCBjbGFzc2VzKSB7XG4gICAgICAgICAgcmV0dXJuIF9mcmFtZXdvcmtQcm90by5yZW1vdmVDbGFzcy5jYWxsKGVsLCBjbGFzc2VzKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBZGRzIG9yIHJlbW92ZXMgdGhlIGdpdmVuIGNsYXNzZXMgZGVwZW5kZW50IG9uIHRoZSBib29sZWFuIHZhbHVlLiBUcnVlIGZvciBhZGQsIGZhbHNlIGZvciByZW1vdmUuXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiBhZGRSZW1vdmVDbGFzcyhlbCwgY2xhc3NlcywgZG9BZGQpIHtcbiAgICAgICAgICByZXR1cm4gZG9BZGQgPyBhZGRDbGFzcyhlbCwgY2xhc3NlcykgOiByZW1vdmVDbGFzcyhlbCwgY2xhc3Nlcyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogalF1ZXJ5IHJlbW92ZSBtZXRob2Qgc2hvcnRjdXQuXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiByZW1vdmUoZWwpIHtcbiAgICAgICAgICByZXR1cm4gX2ZyYW1ld29ya1Byb3RvLnJlbW92ZS5jYWxsKGVsKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcclxuICAgICAgICAgKiBGaW5kcyB0aGUgZmlyc3QgY2hpbGQgZWxlbWVudCB3aXRoIHRoZSBnaXZlbiBzZWxlY3RvciBvZiB0aGUgZ2l2ZW4gZWxlbWVudC5cclxuICAgICAgICAgKiBAcGFyYW0gZWwgVGhlIHJvb3QgZWxlbWVudCBmcm9tIHdoaWNoIHRoZSBzZWxlY3RvciBzaGFsbCBiZSB2YWxpZC5cclxuICAgICAgICAgKiBAcGFyYW0gc2VsZWN0b3IgVGhlIHNlbGVjdG9yIG9mIHRoZSBzZWFyY2hlZCBlbGVtZW50LlxyXG4gICAgICAgICAqIEByZXR1cm5zIHsqfSBUaGUgZmlyc3QgZWxlbWVudCB3aGljaCBpcyBhIGNoaWxkIG9mIHRoZSBnaXZlbiBlbGVtZW50IGFuZCBtYXRjaGVzIHRoZSBnaXZlbnMgc2VsZWN0b3IuXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiBmaW5kRmlyc3QoZWwsIHNlbGVjdG9yKSB7XG4gICAgICAgICAgcmV0dXJuIF9mcmFtZXdvcmtQcm90by5maW5kLmNhbGwoZWwsIHNlbGVjdG9yKS5lcSgwKTtcbiAgICAgICAgfSAvLz09PT0gQVBJID09PT0vL1xuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFB1dHMgdGhlIGluc3RhbmNlIHRvIHNsZWVwLiBJdCB3b250IHJlc3BvbmQgdG8gYW55IGNoYW5nZXMgaW4gdGhlIERPTSBhbmQgd29uJ3QgdXBkYXRlLiBTY3JvbGxiYXIgSW50ZXJhY3Rpdml0eSBpcyBhbHNvIGRpc2FibGVkIGFzIHdlbGwgYXMgdGhlIHJlc2l6ZSBoYW5kbGUuXHJcbiAgICAgICAgICogVGhpcyBiZWhhdmlvciBjYW4gYmUgcmVzZXQgYnkgY2FsbGluZyB0aGUgdXBkYXRlIG1ldGhvZC5cclxuICAgICAgICAgKi9cblxuXG4gICAgICAgIF9iYXNlLnNsZWVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF9zbGVlcGluZyA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFVwZGF0ZXMgdGhlIHBsdWdpbiBhbmQgRE9NIHRvIHRoZSBjdXJyZW50IG9wdGlvbnMuXHJcbiAgICAgICAgICogVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGlmIGEgdXBkYXRlIGlzIDEwMCUgcmVxdWlyZWQuXHJcbiAgICAgICAgICogQHBhcmFtIGZvcmNlIFRydWUgaWYgZXZlcnkgcHJvcGVydHkgc2hhbGwgYmUgdXBkYXRlZCBhbmQgdGhlIGNhY2hlIHNoYWxsIGJlIGlnbm9yZWQuXHJcbiAgICAgICAgICogIUlOVEVSTkFMIFVTQUdFISA6IGZvcmNlIGNhbiBiZSBhIHN0cmluZyBcImF1dG9cIiwgXCJzeW5jXCIgb3IgXCJ6b29tXCIgdG9vXHJcbiAgICAgICAgICogaWYgXCJhdXRvXCIgdGhlbiBiZWZvcmUgYSByZWFsIHVwZGF0ZSB0aGUgY29udGVudCBzaXplIGFuZCBob3N0IGVsZW1lbnQgYXR0cmlidXRlcyBnZXRzIGNoZWNrZWQsIGFuZCBpZiB0aGV5IGNoYW5nZWQgb25seSB0aGVuIHRoZSB1cGRhdGUgbWV0aG9kIHdpbGwgYmUgY2FsbGVkLlxyXG4gICAgICAgICAqIGlmIFwic3luY1wiIHRoZW4gdGhlIGFzeW5jIHVwZGF0ZSBwcm9jZXNzIChNdXRhdGlvbk9ic2VydmVyIG9yIFVwZGF0ZUxvb3ApIGdldHMgc3luY2hyb25pemVkIGFuZCBhIGNvcnJlc3BvbmRpbmcgdXBkYXRlIHRha2VzIHBsYWNlIGlmIG9uZSB3YXMgbmVlZGVkIGR1ZSB0byBwZW5kaW5nIGNoYW5nZXMuXHJcbiAgICAgICAgICogaWYgXCJ6b29tXCIgdGhlbiBhIHVwZGF0ZSB0YWtlcyBwbGFjZSB3aGVyZSBpdCdzIGFzc3VtZWQgdGhhdCBjb250ZW50IGFuZCBob3N0IHNpemUgY2hhbmdlZFxyXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufHVuZGVmaW5lZH0gXHJcbiAgICAgICAgICogSWYgZm9yY2UgaXMgXCJzeW5jXCIgdGhlbiBhIGJvb2xlYW4gaXMgcmV0dXJuZWQgd2hpY2ggaW5kaWNhdGVzIHdoZXRoZXIgYSB1cGRhdGUgd2FzIG5lZWRlZCBkdWUgdG8gcGVuZGluZyBjaGFuZ2VzLlxyXG4gICAgICAgICAqIElmIGZvcmNlIGlzIFwiYXV0b1wiIHRoZW4gYSBib29sZWFuIGlzIHJldHVybmVkIHdoZXRoZXIgYSB1cGRhdGUgd2FzIG5lZWRlZCBkdWUgdG8gYXR0cmlidXRlIG9yIHNpemUgY2hhbmdlcy5cclxuICAgICAgICAgKiB1bmRlZmluZWQgb3RoZXJ3aXNlLlxyXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgX2Jhc2UudXBkYXRlID0gZnVuY3Rpb24gKGZvcmNlKSB7XG4gICAgICAgICAgaWYgKF9kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgICAgICB2YXIgYXR0cnNDaGFuZ2VkO1xuICAgICAgICAgIHZhciBjb250ZW50U2l6ZUM7XG4gICAgICAgICAgdmFyIGlzU3RyaW5nID0gdHlwZShmb3JjZSkgPT0gVFlQRVMucztcbiAgICAgICAgICB2YXIgZG9VcGRhdGVBdXRvO1xuICAgICAgICAgIHZhciBtdXRIb3N0O1xuICAgICAgICAgIHZhciBtdXRDb250ZW50O1xuXG4gICAgICAgICAgaWYgKGlzU3RyaW5nKSB7XG4gICAgICAgICAgICBpZiAoZm9yY2UgPT09IF9zdHJBdXRvKSB7XG4gICAgICAgICAgICAgIGF0dHJzQ2hhbmdlZCA9IG1lYW5pbmdmdWxBdHRyc0NoYW5nZWQoKTtcbiAgICAgICAgICAgICAgY29udGVudFNpemVDID0gdXBkYXRlQXV0b0NvbnRlbnRTaXplQ2hhbmdlZCgpO1xuICAgICAgICAgICAgICBkb1VwZGF0ZUF1dG8gPSBhdHRyc0NoYW5nZWQgfHwgY29udGVudFNpemVDO1xuXG4gICAgICAgICAgICAgIGlmIChkb1VwZGF0ZUF1dG8pIHtcbiAgICAgICAgICAgICAgICB1cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgX2NvbnRlbnRTaXplQ2hhbmdlZDogY29udGVudFNpemVDLFxuICAgICAgICAgICAgICAgICAgX2NoYW5nZWRPcHRpb25zOiBfaW5pdGlhbGl6ZWQgPyB1bmRlZmluZWQkMSA6IF9jdXJyZW50UHJlcGFyZWRPcHRpb25zXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZm9yY2UgPT09IF9zdHJTeW5jKSB7XG4gICAgICAgICAgICAgIGlmIChfbXV0YXRpb25PYnNlcnZlcnNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBtdXRIb3N0ID0gX211dGF0aW9uT2JzZXJ2ZXJIb3N0Q2FsbGJhY2soX211dGF0aW9uT2JzZXJ2ZXJIb3N0LnRha2VSZWNvcmRzKCkpO1xuICAgICAgICAgICAgICAgIG11dENvbnRlbnQgPSBfbXV0YXRpb25PYnNlcnZlckNvbnRlbnRDYWxsYmFjayhfbXV0YXRpb25PYnNlcnZlckNvbnRlbnQudGFrZVJlY29yZHMoKSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbXV0SG9zdCA9IF9iYXNlLnVwZGF0ZShfc3RyQXV0byk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZm9yY2UgPT09ICd6b29tJykge1xuICAgICAgICAgICAgICB1cGRhdGUoe1xuICAgICAgICAgICAgICAgIF9ob3N0U2l6ZUNoYW5nZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgX2NvbnRlbnRTaXplQ2hhbmdlZDogdHJ1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yY2UgPSBfc2xlZXBpbmcgfHwgZm9yY2U7XG4gICAgICAgICAgICBfc2xlZXBpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICghX2Jhc2UudXBkYXRlKF9zdHJTeW5jKSB8fCBmb3JjZSkgdXBkYXRlKHtcbiAgICAgICAgICAgICAgX2ZvcmNlOiBmb3JjZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdXBkYXRlRWxlbWVudHNPbkxvYWQoKTtcbiAgICAgICAgICByZXR1cm4gZG9VcGRhdGVBdXRvIHx8IG11dEhvc3QgfHwgbXV0Q29udGVudDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXHJcbiAgICAgICAgIEdldHMgb3Igc2V0cyB0aGUgY3VycmVudCBvcHRpb25zLiBUaGUgdXBkYXRlIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBhdXRvbWF0aWNhbGx5IGlmIG5ldyBvcHRpb25zIHdlcmUgc2V0LlxyXG4gICAgICAgICAqIEBwYXJhbSBuZXdPcHRpb25zIElmIG5ldyBvcHRpb25zIGFyZSBnaXZlbiwgdGhlbiB0aGUgbmV3IG9wdGlvbnMgd2lsbCBiZSBzZXQsIGlmIG5ldyBvcHRpb25zIGFyZW4ndCBnaXZlbiAodW5kZWZpbmVkIG9yIGEgbm90IGEgcGxhaW4gb2JqZWN0KSB0aGVuIHRoZSBjdXJyZW50IG9wdGlvbnMgd2lsbCBiZSByZXR1cm5lZC5cclxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUgSWYgbmV3IG9wdGlvbnMgaXMgYSBwcm9wZXJ0eSBwYXRoIHN0cmluZywgdGhlbiB0aGlzIHZhbHVlIHdpbGwgYmUgdXNlZCB0byBzZXQgdGhlIG9wdGlvbiB0byB3aGljaCB0aGUgcHJvcGVydHkgcGF0aCBzdHJpbmcgbGVhZHMuXHJcbiAgICAgICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBfYmFzZS5vcHRpb25zID0gZnVuY3Rpb24gKG5ld09wdGlvbnMsIHZhbHVlKSB7XG4gICAgICAgICAgdmFyIG9wdGlvbiA9IHt9O1xuICAgICAgICAgIHZhciBjaGFuZ2VkT3BzOyAvL3JldHVybiBjdXJyZW50IG9wdGlvbnMgaWYgbmV3T3B0aW9ucyBhcmUgdW5kZWZpbmVkIG9yIGVtcHR5XG5cbiAgICAgICAgICBpZiAoRlJBTUVXT1JLLmlzRW1wdHlPYmplY3QobmV3T3B0aW9ucykgfHwgIUZSQU1FV09SSy5pc1BsYWluT2JqZWN0KG5ld09wdGlvbnMpKSB7XG4gICAgICAgICAgICBpZiAodHlwZShuZXdPcHRpb25zKSA9PSBUWVBFUy5zKSB7XG4gICAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHNldE9iamVjdFByb3BWYWwob3B0aW9uLCBuZXdPcHRpb25zLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgY2hhbmdlZE9wcyA9IHNldE9wdGlvbnMob3B0aW9uKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHJldHVybiBnZXRPYmplY3RQcm9wVmFsKF9jdXJyZW50T3B0aW9ucywgbmV3T3B0aW9ucyk7XG4gICAgICAgICAgICB9IGVsc2UgcmV0dXJuIF9jdXJyZW50T3B0aW9ucztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hhbmdlZE9wcyA9IHNldE9wdGlvbnMobmV3T3B0aW9ucyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFGUkFNRVdPUksuaXNFbXB0eU9iamVjdChjaGFuZ2VkT3BzKSkge1xuICAgICAgICAgICAgdXBkYXRlKHtcbiAgICAgICAgICAgICAgX2NoYW5nZWRPcHRpb25zOiBjaGFuZ2VkT3BzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlc3RvcmUgdGhlIERPTSwgZGlzY29ubmVjdHMgYWxsIG9ic2VydmVycywgcmVtb3ZlIGFsbCByZXNpemUgb2JzZXJ2ZXJzIGFuZCBwdXQgdGhlIGluc3RhbmNlIHRvIHNsZWVwLlxyXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgX2Jhc2UuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoX2Rlc3Ryb3llZCkgcmV0dXJuOyAvL3JlbW92ZSB0aGlzIGluc3RhbmNlIGZyb20gYXV0byB1cGRhdGUgbG9vcFxuXG4gICAgICAgICAgYXV0b1VwZGF0ZUxvb3AucmVtb3ZlKF9iYXNlKTsgLy9kaXNjb25uZWN0IGFsbCBtdXRhdGlvbiBvYnNlcnZlcnNcblxuICAgICAgICAgIGRpc2Nvbm5lY3RNdXRhdGlvbk9ic2VydmVycygpOyAvL3JlbW92ZSBhbGwgcmVzaXplIG9ic2VydmVyc1xuXG4gICAgICAgICAgc2V0dXBSZXNpemVPYnNlcnZlcihfc2l6ZU9ic2VydmVyRWxlbWVudCk7XG4gICAgICAgICAgc2V0dXBSZXNpemVPYnNlcnZlcihfc2l6ZUF1dG9PYnNlcnZlckVsZW1lbnQpOyAvL3JlbW92ZSBhbGwgZXh0ZW5zaW9uc1xuXG4gICAgICAgICAgZm9yICh2YXIgZXh0TmFtZSBpbiBfZXh0ZW5zaW9ucykge1xuICAgICAgICAgICAgX2Jhc2UucmVtb3ZlRXh0KGV4dE5hbWUpO1xuICAgICAgICAgIH0gLy9yZW1vdmUgYWxsICdkZXN0cm95JyBldmVudHNcblxuXG4gICAgICAgICAgd2hpbGUgKF9kZXN0cm95RXZlbnRzW0xFWElDT04ubF0gPiAwKSB7XG4gICAgICAgICAgICBfZGVzdHJveUV2ZW50cy5wb3AoKSgpO1xuICAgICAgICAgIH0gLy9yZW1vdmUgYWxsIGV2ZW50cyBmcm9tIGhvc3QgZWxlbWVudFxuXG5cbiAgICAgICAgICBzZXR1cEhvc3RNb3VzZVRvdWNoRXZlbnRzKHRydWUpOyAvL3JlbW92ZSBhbGwgaGVscGVyIC8gZGV0ZWN0aW9uIGVsZW1lbnRzXG5cbiAgICAgICAgICBpZiAoX2NvbnRlbnRHbHVlRWxlbWVudCkgcmVtb3ZlKF9jb250ZW50R2x1ZUVsZW1lbnQpO1xuICAgICAgICAgIGlmIChfY29udGVudEFycmFuZ2VFbGVtZW50KSByZW1vdmUoX2NvbnRlbnRBcnJhbmdlRWxlbWVudCk7XG4gICAgICAgICAgaWYgKF9zaXplQXV0b09ic2VydmVyQWRkZWQpIHJlbW92ZShfc2l6ZUF1dG9PYnNlcnZlckVsZW1lbnQpOyAvL3JlbW92ZSBhbGwgZ2VuZXJhdGVkIERPTVxuXG4gICAgICAgICAgc2V0dXBTY3JvbGxiYXJzRE9NKHRydWUpO1xuICAgICAgICAgIHNldHVwU2Nyb2xsYmFyQ29ybmVyRE9NKHRydWUpO1xuICAgICAgICAgIHNldHVwU3RydWN0dXJlRE9NKHRydWUpOyAvL3JlbW92ZSBhbGwgZ2VuZXJhdGVkIGltYWdlIGxvYWQgZXZlbnRzXG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF91cGRhdGVPbkxvYWRFbG1zW0xFWElDT04ubF07IGkrKykge1xuICAgICAgICAgICAgRlJBTUVXT1JLKF91cGRhdGVPbkxvYWRFbG1zW2ldKS5vZmYoX3VwZGF0ZU9uTG9hZEV2ZW50TmFtZSwgdXBkYXRlT25Mb2FkQ2FsbGJhY2spO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF91cGRhdGVPbkxvYWRFbG1zID0gdW5kZWZpbmVkJDE7XG4gICAgICAgICAgX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgICAgX3NsZWVwaW5nID0gdHJ1ZTsgLy9yZW1vdmUgdGhpcyBpbnN0YW5jZSBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuXG4gICAgICAgICAgSU5TVEFOQ0VTKHBsdWdpblRhcmdldEVsZW1lbnQsIDApO1xuICAgICAgICAgIGRpc3BhdGNoQ2FsbGJhY2soJ29uRGVzdHJveWVkJyk7IC8vcmVtb3ZlIGFsbCBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzXG4gICAgICAgICAgLy9mb3IgKHZhciBwcm9wZXJ0eSBpbiBfYmFzZSlcbiAgICAgICAgICAvLyAgICBkZWxldGUgX2Jhc2VbcHJvcGVydHldO1xuICAgICAgICAgIC8vX2Jhc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNjcm9sbHMgdG8gYSBnaXZlbiBwb3NpdGlvbiBvciBlbGVtZW50LlxyXG4gICAgICAgICAqIEBwYXJhbSBjb29yZGluYXRlc1xyXG4gICAgICAgICAqIDEuIENhbiBiZSBcImNvb3JkaW5hdGVzXCIgd2hpY2ggbG9va3MgbGlrZTpcclxuICAgICAgICAgKiAgICB7IHggOiA/LCB5IDogPyB9IE9SICAgICAgICAgIE9iamVjdCB3aXRoIHggYW5kIHkgcHJvcGVydGllc1xyXG4gICAgICAgICAqICAgIHsgbGVmdCA6ID8sIHRvcCA6ID8gfSBPUiAgICAgT2JqZWN0IHdpdGggbGVmdCBhbmQgdG9wIHByb3BlcnRpZXNcclxuICAgICAgICAgKiAgICB7IGwgOiA/LCB0IDogPyB9IE9SICAgICAgICAgIE9iamVjdCB3aXRoIGwgYW5kIHQgcHJvcGVydGllc1xyXG4gICAgICAgICAqICAgIFsgPywgPyBdIE9SICAgICAgICAgICAgICAgICAgQXJyYXkgd2hlcmUgdGhlIGZpcnN0IHR3byBlbGVtZW50IGFyZSB0aGUgY29vcmRpbmF0ZXMgKGZpcnN0IGlzIHgsIHNlY29uZCBpcyB5KVxyXG4gICAgICAgICAqICAgID8gICAgICAgICAgICAgICAgICAgICAgICAgICAgQSBzaW5nbGUgdmFsdWUgd2hpY2ggc3RheXMgZm9yIGJvdGggYXhpc1xyXG4gICAgICAgICAqICAgIEEgdmFsdWUgY2FuIGJlIGEgbnVtYmVyLCBhIHN0cmluZyBvciBhIGNhbGN1bGF0aW9uLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogICAgT3BlcmF0b3JzOlxyXG4gICAgICAgICAqICAgIFtOT05FXSAgVGhlIGN1cnJlbnQgc2Nyb2xsIHdpbGwgYmUgb3ZlcndyaXR0ZW4gYnkgdGhlIHZhbHVlLlxyXG4gICAgICAgICAqICAgICcrPScgICAgVGhlIHZhbHVlIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGN1cnJlbnQgc2Nyb2xsIG9mZnNldFxyXG4gICAgICAgICAqICAgICctPScgICAgVGhlIHZhbHVlIHdpbGwgYmUgc3VidHJhY3RlZCBmcm9tIHRoZSBjdXJyZW50IHNjcm9sbCBvZmZzZXRcclxuICAgICAgICAgKiAgICAnKj0nICAgIFRoZSBjdXJyZW50IHNjcm9sbCB3aWwgYmUgbXVsdGlwbGljYXRlZCBieSB0aGUgdmFsdWUuXHJcbiAgICAgICAgICogICAgJy89JyAgICBUaGUgY3VycmVudCBzY3JvbGwgd2lsIGJlIGRpdmlkZWQgYnkgdGhlIHZhbHVlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogICAgVW5pdHM6XHJcbiAgICAgICAgICogICAgW05PTkVdICBUaGUgdmFsdWUgaXMgdGhlIGZpbmFsIHNjcm9sbCBhbW91bnQuICAgICAgICAgICAgICAgICAgIGZpbmFsID0gKHZhbHVlICogMSlcclxuICAgICAgICAgKiAgICAncHgnICAgIFNhbWUgYXMgbm9uZVxyXG4gICAgICAgICAqICAgICclJyAgICAgVGhlIHZhbHVlIGlzIGRlcGVuZGVudCBvbiB0aGUgY3VycmVudCBzY3JvbGwgdmFsdWUuICAgICBmaW5hbCA9ICgoY3VycmVudFNjcm9sbFZhbHVlIC8gMTAwKSAqIHZhbHVlKVxyXG4gICAgICAgICAqICAgICd2dycgICAgVGhlIHZhbHVlIGlzIG11bHRpcGxpY2F0ZWQgYnkgdGhlIHZpZXdwb3J0IHdpZHRoLiAgICAgICBmaW5hbCA9ICh2YWx1ZSAqIHZpZXdwb3J0V2lkdGgpXHJcbiAgICAgICAgICogICAgJ3ZoJyAgICBUaGUgdmFsdWUgaXMgbXVsdGlwbGljYXRlZCBieSB0aGUgdmlld3BvcnQgaGVpZ2h0LiAgICAgIGZpbmFsID0gKHZhbHVlICogdmlld3BvcnRIZWlnaHQpXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgICBleGFtcGxlIGZpbmFsIHZhbHVlczpcclxuICAgICAgICAgKiAgICAyMDAsICcyMDBweCcsICc1MCUnLCAnMXZ3JywgJzF2aCcsICcrPTIwMCcsICcvPTF2dycsICcqPTJweCcsICctPTV2aCcsICcrPTMzJScsICcrPSA1MCUgLSAycHgnLCAnLT0gMXZ3IC0gNTAlJ1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogMi4gQ2FuIGJlIGEgSFRNTCBvciBqUXVlcnkgZWxlbWVudDpcclxuICAgICAgICAgKiAgICBUaGUgZmluYWwgc2Nyb2xsIG9mZnNldCBpcyB0aGUgb2Zmc2V0ICh3aXRob3V0IG1hcmdpbikgb2YgdGhlIGdpdmVuIEhUTUwgLyBqUXVlcnkgZWxlbWVudC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIDMuIENhbiBiZSBhIG9iamVjdCB3aXRoIGEgSFRNTCBvciBqUXVlcnkgZWxlbWVudCB3aXRoIGFkZGl0aW9uYWwgc2V0dGluZ3M6XHJcbiAgICAgICAgICogICAge1xyXG4gICAgICAgICAqICAgICAgZWwgOiBbSFRNTEVsZW1lbnQsIGpRdWVyeSBlbGVtZW50XSwgICAgICAgICAgICAgTVVTVCBiZSBzcGVjaWZpZWQsIGVsc2UgdGhpcyBvYmplY3QgaXNuJ3QgdmFsaWQuXHJcbiAgICAgICAgICogICAgICBzY3JvbGwgOiBbc3RyaW5nLCBhcnJheSwgb2JqZWN0XSwgICAgICAgICAgICAgICBEZWZhdWx0IHZhbHVlIGlzICdhbHdheXMnLlxyXG4gICAgICAgICAqICAgICAgYmxvY2sgOiBbc3RyaW5nLCBhcnJheSwgb2JqZWN0XSwgICAgICAgICAgICAgICAgRGVmYXVsdCB2YWx1ZSBpcyAnYmVnaW4nLlxyXG4gICAgICAgICAqICAgICAgbWFyZ2luIDogW251bWJlciwgYm9vbGVhbiwgYXJyYXksIG9iamVjdF0gICAgICAgRGVmYXVsdCB2YWx1ZSBpcyBmYWxzZS5cclxuICAgICAgICAgKiAgICB9XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgICBQb3NzaWJsZSBzY3JvbGwgc2V0dGluZ3MgYXJlOlxyXG4gICAgICAgICAqICAgICdhbHdheXMnICAgICAgU2Nyb2xscyBhbHdheXMuXHJcbiAgICAgICAgICogICAgJ2lmbmVlZGVkJyAgICBTY3JvbGxzIG9ubHkgaWYgdGhlIGVsZW1lbnQgaXNudCBmdWxseSBpbiB2aWV3LlxyXG4gICAgICAgICAqICAgICduZXZlcicgICAgICAgU2Nyb2xscyBuZXZlci5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqICAgIFBvc3NpYmxlIGJsb2NrIHNldHRpbmdzIGFyZTpcclxuICAgICAgICAgKiAgICAnYmVnaW4nICAgQm90aCBheGlzIHNoYWxsIGJlIGRvY2tlZCB0byB0aGUgXCJiZWdpblwiIGVkZ2UuIC0gVGhlIGVsZW1lbnQgd2lsbCBiZSBkb2NrZWQgdG8gdGhlIHRvcCBhbmQgbGVmdCBlZGdlIG9mIHRoZSB2aWV3cG9ydC5cclxuICAgICAgICAgKiAgICAnZW5kJyAgICAgQm90aCBheGlzIHNoYWxsIGJlIGRvY2tlZCB0byB0aGUgXCJlbmRcIiBlZGdlLiAtIFRoZSBlbGVtZW50IHdpbGwgYmUgZG9ja2VkIHRvIHRoZSBib3R0b20gYW5kIHJpZ2h0IGVkZ2Ugb2YgdGhlIHZpZXdwb3J0LiAoSWYgZGlyZWN0aW9uIGlzIFJUTCB0byB0aGUgYm90dG9tIGFuZCBsZWZ0IGVkZ2UuKVxyXG4gICAgICAgICAqICAgICdjZW50ZXInICBCb3RoIGF4aXMgc2hhbGwgYmUgZG9ja2VkIHRvIFwiY2VudGVyXCIuIC0gVGhlIGVsZW1lbnQgd2lsbCBiZSBjZW50ZXJlZCBpbiB0aGUgdmlld3BvcnQuXHJcbiAgICAgICAgICogICAgJ25lYXJlc3QnIFRoZSBlbGVtZW50IHdpbGwgYmUgZG9ja2VkIHRvIHRoZSBuZWFyZXN0IGVkZ2UocykuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgICBQb3NzaWJsZSBtYXJnaW4gc2V0dGluZ3MgYXJlOiAtLSBUaGUgYWN0dWFsIG1hcmdpbiBvZiB0aGUgZWxlbWVudCB3b250IGJlIGFmZmVjdCwgdGhpcyBvcHRpb24gYWZmZWN0cyBvbmx5IHRoZSBmaW5hbCBzY3JvbGwgb2Zmc2V0LlxyXG4gICAgICAgICAqICAgIFtCT09MRUFOXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWYgdHJ1ZSB0aGUgY3NzIG1hcmdpbiBvZiB0aGUgZWxlbWVudCB3aWxsIGJlIHVzZWQsIGlmIGZhbHNlIG5vIG1hcmdpbiB3aWxsIGJlIHVzZWQuXHJcbiAgICAgICAgICogICAgW05VTUJFUl0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgbWFyZ2luIHdpbGwgYmUgdXNlZCBmb3IgYWxsIGVkZ2VzLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIGR1cmF0aW9uIFRoZSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIGFuaW1hdGlvbiwgT1IgYSBqUXVlcnkgYW5pbWF0aW9uIGNvbmZpZ3VyYXRpb24gb2JqZWN0LlxyXG4gICAgICAgICAqIEBwYXJhbSBlYXNpbmcgVGhlIGFuaW1hdGlvbiBlYXNpbmcuXHJcbiAgICAgICAgICogQHBhcmFtIGNvbXBsZXRlIFRoZSBhbmltYXRpb24gY29tcGxldGUgY2FsbGJhY2suXHJcbiAgICAgICAgICogQHJldHVybnMge3tcclxuICAgICAgICAgKiAgIHBvc2l0aW9uOiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9LFxyXG4gICAgICAgICAqICAgcmF0aW86IHt4OiBudW1iZXIsIHk6IG51bWJlcn0sXHJcbiAgICAgICAgICogICBtYXg6IHt4OiBudW1iZXIsIHk6IG51bWJlcn0sXHJcbiAgICAgICAgICogICBoYW5kbGVPZmZzZXQ6IHt4OiBudW1iZXIsIHk6IG51bWJlcn0sXHJcbiAgICAgICAgICogICBoYW5kbGVMZW5ndGg6IHt4OiBudW1iZXIsIHk6IG51bWJlcn0sXHJcbiAgICAgICAgICogICBoYW5kbGVMZW5ndGhSYXRpbzoge3g6IG51bWJlciwgeTogbnVtYmVyfSwgdFxyXG4gICAgICAgICAqICAgcmFja0xlbmd0aDoge3g6IG51bWJlciwgeTogbnVtYmVyfSxcclxuICAgICAgICAgKiAgIGlzUlRMOiBib29sZWFuLFxyXG4gICAgICAgICAqICAgaXNSVExOb3JtYWxpemVkOiBib29sZWFuXHJcbiAgICAgICAgICogIH19XHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBfYmFzZS5zY3JvbGwgPSBmdW5jdGlvbiAoY29vcmRpbmF0ZXMsIGR1cmF0aW9uLCBlYXNpbmcsIGNvbXBsZXRlKSB7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDAgfHwgY29vcmRpbmF0ZXMgPT09IHVuZGVmaW5lZCQxKSB7XG4gICAgICAgICAgICB2YXIgaW5mb1ggPSBfc2Nyb2xsSG9yaXpvbnRhbEluZm87XG4gICAgICAgICAgICB2YXIgaW5mb1kgPSBfc2Nyb2xsVmVydGljYWxJbmZvO1xuICAgICAgICAgICAgdmFyIG5vcm1hbGl6ZUludmVydCA9IF9ub3JtYWxpemVSVExDYWNoZSAmJiBfaXNSVEwgJiYgX3J0bFNjcm9sbEJlaGF2aW9yLmk7XG4gICAgICAgICAgICB2YXIgbm9ybWFsaXplTmVnYXRlID0gX25vcm1hbGl6ZVJUTENhY2hlICYmIF9pc1JUTCAmJiBfcnRsU2Nyb2xsQmVoYXZpb3IubjtcbiAgICAgICAgICAgIHZhciBzY3JvbGxYID0gaW5mb1guX2N1cnJlbnRTY3JvbGw7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsWFJhdGlvID0gaW5mb1guX2N1cnJlbnRTY3JvbGxSYXRpbztcbiAgICAgICAgICAgIHZhciBtYXhTY3JvbGxYID0gaW5mb1guX21heFNjcm9sbDtcbiAgICAgICAgICAgIHNjcm9sbFhSYXRpbyA9IG5vcm1hbGl6ZUludmVydCA/IDEgLSBzY3JvbGxYUmF0aW8gOiBzY3JvbGxYUmF0aW87XG4gICAgICAgICAgICBzY3JvbGxYID0gbm9ybWFsaXplSW52ZXJ0ID8gbWF4U2Nyb2xsWCAtIHNjcm9sbFggOiBzY3JvbGxYO1xuICAgICAgICAgICAgc2Nyb2xsWCAqPSBub3JtYWxpemVOZWdhdGUgPyAtMSA6IDE7XG4gICAgICAgICAgICBtYXhTY3JvbGxYICo9IG5vcm1hbGl6ZU5lZ2F0ZSA/IC0xIDogMTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgeDogc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICB5OiBpbmZvWS5fY3VycmVudFNjcm9sbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICByYXRpbzoge1xuICAgICAgICAgICAgICAgIHg6IHNjcm9sbFhSYXRpbyxcbiAgICAgICAgICAgICAgICB5OiBpbmZvWS5fY3VycmVudFNjcm9sbFJhdGlvXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1heDoge1xuICAgICAgICAgICAgICAgIHg6IG1heFNjcm9sbFgsXG4gICAgICAgICAgICAgICAgeTogaW5mb1kuX21heFNjcm9sbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBoYW5kbGVPZmZzZXQ6IHtcbiAgICAgICAgICAgICAgICB4OiBpbmZvWC5faGFuZGxlT2Zmc2V0LFxuICAgICAgICAgICAgICAgIHk6IGluZm9ZLl9oYW5kbGVPZmZzZXRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgaGFuZGxlTGVuZ3RoOiB7XG4gICAgICAgICAgICAgICAgeDogaW5mb1guX2hhbmRsZUxlbmd0aCxcbiAgICAgICAgICAgICAgICB5OiBpbmZvWS5faGFuZGxlTGVuZ3RoXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGhhbmRsZUxlbmd0aFJhdGlvOiB7XG4gICAgICAgICAgICAgICAgeDogaW5mb1guX2hhbmRsZUxlbmd0aFJhdGlvLFxuICAgICAgICAgICAgICAgIHk6IGluZm9ZLl9oYW5kbGVMZW5ndGhSYXRpb1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB0cmFja0xlbmd0aDoge1xuICAgICAgICAgICAgICAgIHg6IGluZm9YLl90cmFja0xlbmd0aCxcbiAgICAgICAgICAgICAgICB5OiBpbmZvWS5fdHJhY2tMZW5ndGhcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc25hcHBlZEhhbmRsZU9mZnNldDoge1xuICAgICAgICAgICAgICAgIHg6IGluZm9YLl9zbmFwcGVkSGFuZGxlT2Zmc2V0LFxuICAgICAgICAgICAgICAgIHk6IGluZm9ZLl9zbmFwcGVkSGFuZGxlT2Zmc2V0XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGlzUlRMOiBfaXNSVEwsXG4gICAgICAgICAgICAgIGlzUlRMTm9ybWFsaXplZDogX25vcm1hbGl6ZVJUTENhY2hlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF9iYXNlLnVwZGF0ZShfc3RyU3luYyk7XG5cbiAgICAgICAgICB2YXIgbm9ybWFsaXplUlRMID0gX25vcm1hbGl6ZVJUTENhY2hlO1xuICAgICAgICAgIHZhciBjb29yZGluYXRlc1hBeGlzUHJvcHMgPSBbX3N0clgsIF9zdHJMZWZ0LCAnbCddO1xuICAgICAgICAgIHZhciBjb29yZGluYXRlc1lBeGlzUHJvcHMgPSBbX3N0clksIF9zdHJUb3AsICd0J107XG4gICAgICAgICAgdmFyIGNvb3JkaW5hdGVzT3BlcmF0b3JzID0gWycrPScsICctPScsICcqPScsICcvPSddO1xuICAgICAgICAgIHZhciBkdXJhdGlvbklzT2JqZWN0ID0gdHlwZShkdXJhdGlvbikgPT0gVFlQRVMubztcbiAgICAgICAgICB2YXIgY29tcGxldGVDYWxsYmFjayA9IGR1cmF0aW9uSXNPYmplY3QgPyBkdXJhdGlvbi5jb21wbGV0ZSA6IGNvbXBsZXRlO1xuICAgICAgICAgIHZhciBpO1xuICAgICAgICAgIHZhciBmaW5hbFNjcm9sbCA9IHt9O1xuICAgICAgICAgIHZhciBzcGVjaWFsRWFzaW5nID0ge307XG4gICAgICAgICAgdmFyIGRvU2Nyb2xsTGVmdDtcbiAgICAgICAgICB2YXIgZG9TY3JvbGxUb3A7XG4gICAgICAgICAgdmFyIGFuaW1hdGlvbk9wdGlvbnM7XG4gICAgICAgICAgdmFyIHN0ckVuZCA9ICdlbmQnO1xuICAgICAgICAgIHZhciBzdHJCZWdpbiA9ICdiZWdpbic7XG4gICAgICAgICAgdmFyIHN0ckNlbnRlciA9ICdjZW50ZXInO1xuICAgICAgICAgIHZhciBzdHJOZWFyZXN0ID0gJ25lYXJlc3QnO1xuICAgICAgICAgIHZhciBzdHJBbHdheXMgPSAnYWx3YXlzJztcbiAgICAgICAgICB2YXIgc3RyTmV2ZXIgPSAnbmV2ZXInO1xuICAgICAgICAgIHZhciBzdHJJZk5lZWRlZCA9ICdpZm5lZWRlZCc7XG4gICAgICAgICAgdmFyIHN0ckxlbmd0aCA9IExFWElDT04ubDtcbiAgICAgICAgICB2YXIgc2V0dGluZ3NBeGlzO1xuICAgICAgICAgIHZhciBzZXR0aW5nc1Njcm9sbDtcbiAgICAgICAgICB2YXIgc2V0dGluZ3NCbG9jaztcbiAgICAgICAgICB2YXIgc2V0dGluZ3NNYXJnaW47XG4gICAgICAgICAgdmFyIGZpbmFsRWxlbWVudDtcbiAgICAgICAgICB2YXIgZWxlbWVudE9ialNldHRpbmdzQXhpc1ZhbHVlcyA9IFtfc3RyWCwgX3N0clksICd4eScsICd5eCddO1xuICAgICAgICAgIHZhciBlbGVtZW50T2JqU2V0dGluZ3NCbG9ja1ZhbHVlcyA9IFtzdHJCZWdpbiwgc3RyRW5kLCBzdHJDZW50ZXIsIHN0ck5lYXJlc3RdO1xuICAgICAgICAgIHZhciBlbGVtZW50T2JqU2V0dGluZ3NTY3JvbGxWYWx1ZXMgPSBbc3RyQWx3YXlzLCBzdHJOZXZlciwgc3RySWZOZWVkZWRdO1xuICAgICAgICAgIHZhciBjb29yZGluYXRlc0lzRWxlbWVudE9iaiA9IGNvb3JkaW5hdGVzW0xFWElDT04uaE9QXSgnZWwnKTtcbiAgICAgICAgICB2YXIgcG9zc2libGVFbGVtZW50ID0gY29vcmRpbmF0ZXNJc0VsZW1lbnRPYmogPyBjb29yZGluYXRlcy5lbCA6IGNvb3JkaW5hdGVzO1xuICAgICAgICAgIHZhciBwb3NzaWJsZUVsZW1lbnRJc0pRdWVyeSA9IHBvc3NpYmxlRWxlbWVudCBpbnN0YW5jZW9mIEZSQU1FV09SSyB8fCBKUVVFUlkgPyBwb3NzaWJsZUVsZW1lbnQgaW5zdGFuY2VvZiBKUVVFUlkgOiBmYWxzZTtcbiAgICAgICAgICB2YXIgcG9zc2libGVFbGVtZW50SXNIVE1MRWxlbWVudCA9IHBvc3NpYmxlRWxlbWVudElzSlF1ZXJ5ID8gZmFsc2UgOiBpc0hUTUxFbGVtZW50KHBvc3NpYmxlRWxlbWVudCk7XG5cbiAgICAgICAgICB2YXIgdXBkYXRlU2Nyb2xsYmFySW5mb3MgPSBmdW5jdGlvbiB1cGRhdGVTY3JvbGxiYXJJbmZvcygpIHtcbiAgICAgICAgICAgIGlmIChkb1Njcm9sbExlZnQpIHJlZnJlc2hTY3JvbGxiYXJIYW5kbGVPZmZzZXQodHJ1ZSk7XG4gICAgICAgICAgICBpZiAoZG9TY3JvbGxUb3ApIHJlZnJlc2hTY3JvbGxiYXJIYW5kbGVPZmZzZXQoZmFsc2UpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICB2YXIgcHJveHlDb21wbGV0ZUNhbGxiYWNrID0gdHlwZShjb21wbGV0ZUNhbGxiYWNrKSAhPSBUWVBFUy5mID8gdW5kZWZpbmVkJDEgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB1cGRhdGVTY3JvbGxiYXJJbmZvcygpO1xuICAgICAgICAgICAgY29tcGxldGVDYWxsYmFjaygpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBmdW5jdGlvbiBjaGVja1NldHRpbmdzU3RyaW5nVmFsdWUoY3VyclZhbHVlLCBhbGxvd2VkVmFsdWVzKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYWxsb3dlZFZhbHVlc1tzdHJMZW5ndGhdOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKGN1cnJWYWx1ZSA9PT0gYWxsb3dlZFZhbHVlc1tpXSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBnZXRSYXdTY3JvbGwoaXNYLCBjb29yZGluYXRlcykge1xuICAgICAgICAgICAgdmFyIGNvb3JkaW5hdGVQcm9wcyA9IGlzWCA/IGNvb3JkaW5hdGVzWEF4aXNQcm9wcyA6IGNvb3JkaW5hdGVzWUF4aXNQcm9wcztcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gdHlwZShjb29yZGluYXRlcykgPT0gVFlQRVMucyB8fCB0eXBlKGNvb3JkaW5hdGVzKSA9PSBUWVBFUy5uID8gW2Nvb3JkaW5hdGVzLCBjb29yZGluYXRlc10gOiBjb29yZGluYXRlcztcbiAgICAgICAgICAgIGlmIChDT01QQVRJQklMSVRZLmlzQShjb29yZGluYXRlcykpIHJldHVybiBpc1ggPyBjb29yZGluYXRlc1swXSA6IGNvb3JkaW5hdGVzWzFdO2Vsc2UgaWYgKHR5cGUoY29vcmRpbmF0ZXMpID09IFRZUEVTLm8pIHtcbiAgICAgICAgICAgICAgLy9kZWNpZGVzIFJUTCBub3JtYWxpemF0aW9uIFwiaGFja1wiIHdpdGggLm5cbiAgICAgICAgICAgICAgLy9ub3JtYWxpemVSVEwgPSB0eXBlKGNvb3JkaW5hdGVzLm4pID09IFRZUEVTLmIgPyBjb29yZGluYXRlcy5uIDogbm9ybWFsaXplUlRMOyBcbiAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvb3JkaW5hdGVQcm9wc1tzdHJMZW5ndGhdOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY29vcmRpbmF0ZVByb3BzW2ldIGluIGNvb3JkaW5hdGVzKSByZXR1cm4gY29vcmRpbmF0ZXNbY29vcmRpbmF0ZVByb3BzW2ldXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIGdldEZpbmFsU2Nyb2xsKGlzWCwgcmF3U2Nyb2xsKSB7XG4gICAgICAgICAgICB2YXIgaXNTdHJpbmcgPSB0eXBlKHJhd1Njcm9sbCkgPT0gVFlQRVMucztcbiAgICAgICAgICAgIHZhciBvcGVyYXRvcjtcbiAgICAgICAgICAgIHZhciBhbW91bnQ7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsSW5mbyA9IGlzWCA/IF9zY3JvbGxIb3Jpem9udGFsSW5mbyA6IF9zY3JvbGxWZXJ0aWNhbEluZm87XG4gICAgICAgICAgICB2YXIgY3VyclNjcm9sbCA9IHNjcm9sbEluZm8uX2N1cnJlbnRTY3JvbGw7XG4gICAgICAgICAgICB2YXIgbWF4U2Nyb2xsID0gc2Nyb2xsSW5mby5fbWF4U2Nyb2xsO1xuICAgICAgICAgICAgdmFyIG11bHQgPSAnICogJztcbiAgICAgICAgICAgIHZhciBmaW5hbFZhbHVlO1xuICAgICAgICAgICAgdmFyIGlzUlRMaXNYID0gX2lzUlRMICYmIGlzWDtcbiAgICAgICAgICAgIHZhciBub3JtYWxpemVTaG9ydGN1dHMgPSBpc1JUTGlzWCAmJiBfcnRsU2Nyb2xsQmVoYXZpb3IubiAmJiAhbm9ybWFsaXplUlRMO1xuICAgICAgICAgICAgdmFyIHN0clJlcGxhY2UgPSAncmVwbGFjZSc7XG4gICAgICAgICAgICB2YXIgZXZhbEZ1bmMgPSBldmFsO1xuICAgICAgICAgICAgdmFyIHBvc3NpYmxlT3BlcmF0b3I7XG5cbiAgICAgICAgICAgIGlmIChpc1N0cmluZykge1xuICAgICAgICAgICAgICAvL2NoZWNrIG9wZXJhdG9yXG4gICAgICAgICAgICAgIGlmIChyYXdTY3JvbGxbc3RyTGVuZ3RoXSA+IDIpIHtcbiAgICAgICAgICAgICAgICBwb3NzaWJsZU9wZXJhdG9yID0gcmF3U2Nyb2xsLnN1YnN0cigwLCAyKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5BcnJheShwb3NzaWJsZU9wZXJhdG9yLCBjb29yZGluYXRlc09wZXJhdG9ycykgPiAtMSkgb3BlcmF0b3IgPSBwb3NzaWJsZU9wZXJhdG9yO1xuICAgICAgICAgICAgICB9IC8vY2FsY3VsYXRlIHVuaXRzIGFuZCBzaG9ydGN1dHNcblxuXG4gICAgICAgICAgICAgIHJhd1Njcm9sbCA9IG9wZXJhdG9yID8gcmF3U2Nyb2xsLnN1YnN0cigyKSA6IHJhd1Njcm9sbDtcbiAgICAgICAgICAgICAgcmF3U2Nyb2xsID0gcmF3U2Nyb2xsW3N0clJlcGxhY2VdKC9taW4vZywgMCkgLy8nbWluJyA9IDAlXG4gICAgICAgICAgICAgIFtzdHJSZXBsYWNlXSgvPC9nLCAwKSAvLyc8JyAgID0gMCVcbiAgICAgICAgICAgICAgW3N0clJlcGxhY2VdKC9tYXgvZywgKG5vcm1hbGl6ZVNob3J0Y3V0cyA/ICctJyA6IF9zdHJFbXB0eSkgKyBfc3RySHVuZHJlZFBlcmNlbnQpIC8vJ21heCcgPSAxMDAlXG4gICAgICAgICAgICAgIFtzdHJSZXBsYWNlXSgvPi9nLCAobm9ybWFsaXplU2hvcnRjdXRzID8gJy0nIDogX3N0ckVtcHR5KSArIF9zdHJIdW5kcmVkUGVyY2VudCkgLy8nPicgICA9IDEwMCVcbiAgICAgICAgICAgICAgW3N0clJlcGxhY2VdKC9weC9nLCBfc3RyRW1wdHkpW3N0clJlcGxhY2VdKC8lL2csIG11bHQgKyBtYXhTY3JvbGwgKiAoaXNSVExpc1ggJiYgX3J0bFNjcm9sbEJlaGF2aW9yLm4gPyAtMSA6IDEpIC8gMTAwLjApW3N0clJlcGxhY2VdKC92dy9nLCBtdWx0ICsgX3ZpZXdwb3J0U2l6ZS53KVtzdHJSZXBsYWNlXSgvdmgvZywgbXVsdCArIF92aWV3cG9ydFNpemUuaCk7XG4gICAgICAgICAgICAgIGFtb3VudCA9IHBhcnNlVG9aZXJvT3JOdW1iZXIoaXNOYU4ocmF3U2Nyb2xsKSA/IHBhcnNlVG9aZXJvT3JOdW1iZXIoZXZhbEZ1bmMocmF3U2Nyb2xsKSwgdHJ1ZSkudG9GaXhlZCgpIDogcmF3U2Nyb2xsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFtb3VudCA9IHJhd1Njcm9sbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFtb3VudCAhPT0gdW5kZWZpbmVkJDEgJiYgIWlzTmFOKGFtb3VudCkgJiYgdHlwZShhbW91bnQpID09IFRZUEVTLm4pIHtcbiAgICAgICAgICAgICAgdmFyIG5vcm1hbGl6ZUlzUlRMaXNYID0gbm9ybWFsaXplUlRMICYmIGlzUlRMaXNYO1xuICAgICAgICAgICAgICB2YXIgb3BlcmF0b3JDdXJyU2Nyb2xsID0gY3VyclNjcm9sbCAqIChub3JtYWxpemVJc1JUTGlzWCAmJiBfcnRsU2Nyb2xsQmVoYXZpb3IubiA/IC0xIDogMSk7XG4gICAgICAgICAgICAgIHZhciBpbnZlcnQgPSBub3JtYWxpemVJc1JUTGlzWCAmJiBfcnRsU2Nyb2xsQmVoYXZpb3IuaTtcbiAgICAgICAgICAgICAgdmFyIG5lZ2F0ZSA9IG5vcm1hbGl6ZUlzUlRMaXNYICYmIF9ydGxTY3JvbGxCZWhhdmlvci5uO1xuICAgICAgICAgICAgICBvcGVyYXRvckN1cnJTY3JvbGwgPSBpbnZlcnQgPyBtYXhTY3JvbGwgLSBvcGVyYXRvckN1cnJTY3JvbGwgOiBvcGVyYXRvckN1cnJTY3JvbGw7XG5cbiAgICAgICAgICAgICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICAgICAgICAgIGNhc2UgJys9JzpcbiAgICAgICAgICAgICAgICAgIGZpbmFsVmFsdWUgPSBvcGVyYXRvckN1cnJTY3JvbGwgKyBhbW91bnQ7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJy09JzpcbiAgICAgICAgICAgICAgICAgIGZpbmFsVmFsdWUgPSBvcGVyYXRvckN1cnJTY3JvbGwgLSBhbW91bnQ7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJyo9JzpcbiAgICAgICAgICAgICAgICAgIGZpbmFsVmFsdWUgPSBvcGVyYXRvckN1cnJTY3JvbGwgKiBhbW91bnQ7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJy89JzpcbiAgICAgICAgICAgICAgICAgIGZpbmFsVmFsdWUgPSBvcGVyYXRvckN1cnJTY3JvbGwgLyBhbW91bnQ7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBmaW5hbFZhbHVlID0gYW1vdW50O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBmaW5hbFZhbHVlID0gaW52ZXJ0ID8gbWF4U2Nyb2xsIC0gZmluYWxWYWx1ZSA6IGZpbmFsVmFsdWU7XG4gICAgICAgICAgICAgIGZpbmFsVmFsdWUgKj0gbmVnYXRlID8gLTEgOiAxO1xuICAgICAgICAgICAgICBmaW5hbFZhbHVlID0gaXNSVExpc1ggJiYgX3J0bFNjcm9sbEJlaGF2aW9yLm4gPyBNQVRILm1pbigwLCBNQVRILm1heChtYXhTY3JvbGwsIGZpbmFsVmFsdWUpKSA6IE1BVEgubWF4KDAsIE1BVEgubWluKG1heFNjcm9sbCwgZmluYWxWYWx1ZSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmluYWxWYWx1ZSA9PT0gY3VyclNjcm9sbCA/IHVuZGVmaW5lZCQxIDogZmluYWxWYWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBnZXRQZXJBeGlzVmFsdWUodmFsdWUsIHZhbHVlSW50ZXJuYWxUeXBlLCBkZWZhdWx0VmFsdWUsIGFsbG93ZWRWYWx1ZXMpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHREZWZhdWx0ID0gW2RlZmF1bHRWYWx1ZSwgZGVmYXVsdFZhbHVlXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZVR5cGUgPSB0eXBlKHZhbHVlKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZUFyckxlbmd0aDtcbiAgICAgICAgICAgIHZhciB2YWx1ZUFyckl0ZW07IC8vdmFsdWUgY2FuIGJlIFsgc3RyaW5nLCBvciBhcnJheSBvZiB0d28gc3RyaW5ncyBdXG5cbiAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUgPT0gdmFsdWVJbnRlcm5hbFR5cGUpIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSBbdmFsdWUsIHZhbHVlXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09IFRZUEVTLmEpIHtcbiAgICAgICAgICAgICAgdmFsdWVBcnJMZW5ndGggPSB2YWx1ZVtzdHJMZW5ndGhdO1xuICAgICAgICAgICAgICBpZiAodmFsdWVBcnJMZW5ndGggPiAyIHx8IHZhbHVlQXJyTGVuZ3RoIDwgMSkgdmFsdWUgPSByZXN1bHREZWZhdWx0O2Vsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZUFyckxlbmd0aCA9PT0gMSkgdmFsdWVbMV0gPSBkZWZhdWx0VmFsdWU7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdmFsdWVBcnJMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgdmFsdWVBcnJJdGVtID0gdmFsdWVbaV07XG5cbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlKHZhbHVlQXJySXRlbSkgIT0gdmFsdWVJbnRlcm5hbFR5cGUgfHwgIWNoZWNrU2V0dGluZ3NTdHJpbmdWYWx1ZSh2YWx1ZUFyckl0ZW0sIGFsbG93ZWRWYWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcmVzdWx0RGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PSBUWVBFUy5vKSB2YWx1ZSA9IFt2YWx1ZVtfc3RyWF0gfHwgZGVmYXVsdFZhbHVlLCB2YWx1ZVtfc3RyWV0gfHwgZGVmYXVsdFZhbHVlXTtlbHNlIHZhbHVlID0gcmVzdWx0RGVmYXVsdDtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgeDogdmFsdWVbMF0sXG4gICAgICAgICAgICAgIHk6IHZhbHVlWzFdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlTWFyZ2luKG1hcmdpblRvcFJpZ2h0Qm90dG9tTGVmdEFycmF5KSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgICAgICB2YXIgY3VyclZhbHVlO1xuICAgICAgICAgICAgdmFyIGN1cnJWYWx1ZVR5cGU7XG4gICAgICAgICAgICB2YXIgdmFsdWVEaXJlY3Rpb25zID0gW19zdHJUb3AsIF9zdHJSaWdodCwgX3N0ckJvdHRvbSwgX3N0ckxlZnRdO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbWFyZ2luVG9wUmlnaHRCb3R0b21MZWZ0QXJyYXlbc3RyTGVuZ3RoXTsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChpID09PSB2YWx1ZURpcmVjdGlvbnNbc3RyTGVuZ3RoXSkgYnJlYWs7XG4gICAgICAgICAgICAgIGN1cnJWYWx1ZSA9IG1hcmdpblRvcFJpZ2h0Qm90dG9tTGVmdEFycmF5W2ldO1xuICAgICAgICAgICAgICBjdXJyVmFsdWVUeXBlID0gdHlwZShjdXJyVmFsdWUpO1xuICAgICAgICAgICAgICBpZiAoY3VyclZhbHVlVHlwZSA9PSBUWVBFUy5iKSByZXN1bHQucHVzaChjdXJyVmFsdWUgPyBwYXJzZVRvWmVyb09yTnVtYmVyKGZpbmFsRWxlbWVudC5jc3MoX3N0ck1hcmdpbk1pbnVzICsgdmFsdWVEaXJlY3Rpb25zW2ldKSkgOiAwKTtlbHNlIHJlc3VsdC5wdXNoKGN1cnJWYWx1ZVR5cGUgPT0gVFlQRVMubiA/IGN1cnJWYWx1ZSA6IDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwb3NzaWJsZUVsZW1lbnRJc0pRdWVyeSB8fCBwb3NzaWJsZUVsZW1lbnRJc0hUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAvL2dldCBzZXR0aW5nc1xuICAgICAgICAgICAgdmFyIG1hcmdpbiA9IGNvb3JkaW5hdGVzSXNFbGVtZW50T2JqID8gY29vcmRpbmF0ZXMubWFyZ2luIDogMDtcbiAgICAgICAgICAgIHZhciBheGlzID0gY29vcmRpbmF0ZXNJc0VsZW1lbnRPYmogPyBjb29yZGluYXRlcy5heGlzIDogMDtcbiAgICAgICAgICAgIHZhciBzY3JvbGwgPSBjb29yZGluYXRlc0lzRWxlbWVudE9iaiA/IGNvb3JkaW5hdGVzLnNjcm9sbCA6IDA7XG4gICAgICAgICAgICB2YXIgYmxvY2sgPSBjb29yZGluYXRlc0lzRWxlbWVudE9iaiA/IGNvb3JkaW5hdGVzLmJsb2NrIDogMDtcbiAgICAgICAgICAgIHZhciBtYXJnaW5EZWZhdWx0ID0gWzAsIDAsIDAsIDBdO1xuICAgICAgICAgICAgdmFyIG1hcmdpblR5cGUgPSB0eXBlKG1hcmdpbik7XG4gICAgICAgICAgICB2YXIgbWFyZ2luTGVuZ3RoO1xuICAgICAgICAgICAgZmluYWxFbGVtZW50ID0gcG9zc2libGVFbGVtZW50SXNKUXVlcnkgPyBwb3NzaWJsZUVsZW1lbnQgOiBGUkFNRVdPUksocG9zc2libGVFbGVtZW50KTtcblxuICAgICAgICAgICAgaWYgKGZpbmFsRWxlbWVudFtzdHJMZW5ndGhdID4gMCkge1xuICAgICAgICAgICAgICAvL21hcmdpbiBjYW4gYmUgWyBib29sZWFuLCBudW1iZXIsIGFycmF5IG9mIDIsIGFycmF5IG9mIDQsIG9iamVjdCBdXG4gICAgICAgICAgICAgIGlmIChtYXJnaW5UeXBlID09IFRZUEVTLm4gfHwgbWFyZ2luVHlwZSA9PSBUWVBFUy5iKSBtYXJnaW4gPSBnZW5lcmF0ZU1hcmdpbihbbWFyZ2luLCBtYXJnaW4sIG1hcmdpbiwgbWFyZ2luXSk7ZWxzZSBpZiAobWFyZ2luVHlwZSA9PSBUWVBFUy5hKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luTGVuZ3RoID0gbWFyZ2luW3N0ckxlbmd0aF07XG4gICAgICAgICAgICAgICAgaWYgKG1hcmdpbkxlbmd0aCA9PT0gMikgbWFyZ2luID0gZ2VuZXJhdGVNYXJnaW4oW21hcmdpblswXSwgbWFyZ2luWzFdLCBtYXJnaW5bMF0sIG1hcmdpblsxXV0pO2Vsc2UgaWYgKG1hcmdpbkxlbmd0aCA+PSA0KSBtYXJnaW4gPSBnZW5lcmF0ZU1hcmdpbihtYXJnaW4pO2Vsc2UgbWFyZ2luID0gbWFyZ2luRGVmYXVsdDtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXJnaW5UeXBlID09IFRZUEVTLm8pIG1hcmdpbiA9IGdlbmVyYXRlTWFyZ2luKFttYXJnaW5bX3N0clRvcF0sIG1hcmdpbltfc3RyUmlnaHRdLCBtYXJnaW5bX3N0ckJvdHRvbV0sIG1hcmdpbltfc3RyTGVmdF1dKTtlbHNlIG1hcmdpbiA9IG1hcmdpbkRlZmF1bHQ7IC8vYmxvY2sgPSB0eXBlKGJsb2NrKSA9PT0gVFlQRVMuYiA/IGJsb2NrID8gWyBzdHJOZWFyZXN0LCBzdHJCZWdpbiBdIDogWyBzdHJOZWFyZXN0LCBzdHJFbmQgXSA6IGJsb2NrO1xuXG4gICAgICAgICAgICAgIHNldHRpbmdzQXhpcyA9IGNoZWNrU2V0dGluZ3NTdHJpbmdWYWx1ZShheGlzLCBlbGVtZW50T2JqU2V0dGluZ3NBeGlzVmFsdWVzKSA/IGF4aXMgOiAneHknO1xuICAgICAgICAgICAgICBzZXR0aW5nc1Njcm9sbCA9IGdldFBlckF4aXNWYWx1ZShzY3JvbGwsIFRZUEVTLnMsIHN0ckFsd2F5cywgZWxlbWVudE9ialNldHRpbmdzU2Nyb2xsVmFsdWVzKTtcbiAgICAgICAgICAgICAgc2V0dGluZ3NCbG9jayA9IGdldFBlckF4aXNWYWx1ZShibG9jaywgVFlQRVMucywgc3RyQmVnaW4sIGVsZW1lbnRPYmpTZXR0aW5nc0Jsb2NrVmFsdWVzKTtcbiAgICAgICAgICAgICAgc2V0dGluZ3NNYXJnaW4gPSBtYXJnaW47XG4gICAgICAgICAgICAgIHZhciB2aWV3cG9ydFNjcm9sbCA9IHtcbiAgICAgICAgICAgICAgICBsOiBfc2Nyb2xsSG9yaXpvbnRhbEluZm8uX2N1cnJlbnRTY3JvbGwsXG4gICAgICAgICAgICAgICAgdDogX3Njcm9sbFZlcnRpY2FsSW5mby5fY3VycmVudFNjcm9sbFxuICAgICAgICAgICAgICB9OyAvLyB1c2UgcGFkZGluZyBlbGVtZW50IGluc3RlYWQgb2Ygdmlld3BvcnQgZWxlbWVudCBiZWNhdXNlIHBhZGRpbmcgZWxlbWVudCBoYXMgbmV2ZXIgcGFkZGluZywgbWFyZ2luIG9yIHBvc2l0aW9uIGFwcGxpZWQuXG5cbiAgICAgICAgICAgICAgdmFyIHZpZXdwb3J0T2Zmc2V0ID0gX3BhZGRpbmdFbGVtZW50Lm9mZnNldCgpOyAvL2dldCBjb29yZGluYXRlc1xuXG5cbiAgICAgICAgICAgICAgdmFyIGVsZW1lbnRPZmZzZXQgPSBmaW5hbEVsZW1lbnQub2Zmc2V0KCk7XG4gICAgICAgICAgICAgIHZhciBkb05vdFNjcm9sbCA9IHtcbiAgICAgICAgICAgICAgICB4OiBzZXR0aW5nc1Njcm9sbC54ID09IHN0ck5ldmVyIHx8IHNldHRpbmdzQXhpcyA9PSBfc3RyWSxcbiAgICAgICAgICAgICAgICB5OiBzZXR0aW5nc1Njcm9sbC55ID09IHN0ck5ldmVyIHx8IHNldHRpbmdzQXhpcyA9PSBfc3RyWFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBlbGVtZW50T2Zmc2V0W19zdHJUb3BdIC09IHNldHRpbmdzTWFyZ2luWzBdO1xuICAgICAgICAgICAgICBlbGVtZW50T2Zmc2V0W19zdHJMZWZ0XSAtPSBzZXR0aW5nc01hcmdpblszXTtcbiAgICAgICAgICAgICAgdmFyIGVsZW1lbnRTY3JvbGxDb29yZGluYXRlcyA9IHtcbiAgICAgICAgICAgICAgICB4OiBNQVRILnJvdW5kKGVsZW1lbnRPZmZzZXRbX3N0ckxlZnRdIC0gdmlld3BvcnRPZmZzZXRbX3N0ckxlZnRdICsgdmlld3BvcnRTY3JvbGwubCksXG4gICAgICAgICAgICAgICAgeTogTUFUSC5yb3VuZChlbGVtZW50T2Zmc2V0W19zdHJUb3BdIC0gdmlld3BvcnRPZmZzZXRbX3N0clRvcF0gKyB2aWV3cG9ydFNjcm9sbC50KVxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIGlmIChfaXNSVEwpIHtcbiAgICAgICAgICAgICAgICBpZiAoIV9ydGxTY3JvbGxCZWhhdmlvci5uICYmICFfcnRsU2Nyb2xsQmVoYXZpb3IuaSkgZWxlbWVudFNjcm9sbENvb3JkaW5hdGVzLnggPSBNQVRILnJvdW5kKHZpZXdwb3J0T2Zmc2V0W19zdHJMZWZ0XSAtIGVsZW1lbnRPZmZzZXRbX3N0ckxlZnRdICsgdmlld3BvcnRTY3JvbGwubCk7XG4gICAgICAgICAgICAgICAgaWYgKF9ydGxTY3JvbGxCZWhhdmlvci5uICYmIG5vcm1hbGl6ZVJUTCkgZWxlbWVudFNjcm9sbENvb3JkaW5hdGVzLnggKj0gLTE7XG4gICAgICAgICAgICAgICAgaWYgKF9ydGxTY3JvbGxCZWhhdmlvci5pICYmIG5vcm1hbGl6ZVJUTCkgZWxlbWVudFNjcm9sbENvb3JkaW5hdGVzLnggPSBNQVRILnJvdW5kKHZpZXdwb3J0T2Zmc2V0W19zdHJMZWZ0XSAtIGVsZW1lbnRPZmZzZXRbX3N0ckxlZnRdICsgKF9zY3JvbGxIb3Jpem9udGFsSW5mby5fbWF4U2Nyb2xsIC0gdmlld3BvcnRTY3JvbGwubCkpO1xuICAgICAgICAgICAgICB9IC8vbWVhc3VyaW5nIGlzIHJlcXVpcmVkXG5cblxuICAgICAgICAgICAgICBpZiAoc2V0dGluZ3NCbG9jay54ICE9IHN0ckJlZ2luIHx8IHNldHRpbmdzQmxvY2sueSAhPSBzdHJCZWdpbiB8fCBzZXR0aW5nc1Njcm9sbC54ID09IHN0cklmTmVlZGVkIHx8IHNldHRpbmdzU2Nyb2xsLnkgPT0gc3RySWZOZWVkZWQgfHwgX2lzUlRMKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1lYXN1cmluZ0VsbSA9IGZpbmFsRWxlbWVudFswXTtcbiAgICAgICAgICAgICAgICB2YXIgcmF3RWxlbWVudFNpemUgPSBfc3VwcG9ydFRyYW5zZm9ybSA/IG1lYXN1cmluZ0VsbVtMRVhJQ09OLmJDUl0oKSA6IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBtZWFzdXJpbmdFbG1bTEVYSUNPTi5vV10sXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IG1lYXN1cmluZ0VsbVtMRVhJQ09OLm9IXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRTaXplID0ge1xuICAgICAgICAgICAgICAgICAgdzogcmF3RWxlbWVudFNpemVbX3N0cldpZHRoXSArIHNldHRpbmdzTWFyZ2luWzNdICsgc2V0dGluZ3NNYXJnaW5bMV0sXG4gICAgICAgICAgICAgICAgICBoOiByYXdFbGVtZW50U2l6ZVtfc3RySGVpZ2h0XSArIHNldHRpbmdzTWFyZ2luWzBdICsgc2V0dGluZ3NNYXJnaW5bMl1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdmFyIGZpbmFsaXplQmxvY2sgPSBmdW5jdGlvbiBmaW5hbGl6ZUJsb2NrKGlzWCkge1xuICAgICAgICAgICAgICAgICAgdmFyIHZhcnMgPSBnZXRTY3JvbGxiYXJWYXJzKGlzWCk7XG4gICAgICAgICAgICAgICAgICB2YXIgd2ggPSB2YXJzLl93X2g7XG4gICAgICAgICAgICAgICAgICB2YXIgbHQgPSB2YXJzLl9sZWZ0X3RvcDtcbiAgICAgICAgICAgICAgICAgIHZhciB4eSA9IHZhcnMuX3hfeTtcbiAgICAgICAgICAgICAgICAgIHZhciBibG9ja0lzRW5kID0gc2V0dGluZ3NCbG9ja1t4eV0gPT0gKGlzWCA/IF9pc1JUTCA/IHN0ckJlZ2luIDogc3RyRW5kIDogc3RyRW5kKTtcbiAgICAgICAgICAgICAgICAgIHZhciBibG9ja0lzQ2VudGVyID0gc2V0dGluZ3NCbG9ja1t4eV0gPT0gc3RyQ2VudGVyO1xuICAgICAgICAgICAgICAgICAgdmFyIGJsb2NrSXNOZWFyZXN0ID0gc2V0dGluZ3NCbG9ja1t4eV0gPT0gc3RyTmVhcmVzdDtcbiAgICAgICAgICAgICAgICAgIHZhciBzY3JvbGxOZXZlciA9IHNldHRpbmdzU2Nyb2xsW3h5XSA9PSBzdHJOZXZlcjtcbiAgICAgICAgICAgICAgICAgIHZhciBzY3JvbGxJZk5lZWRlZCA9IHNldHRpbmdzU2Nyb2xsW3h5XSA9PSBzdHJJZk5lZWRlZDtcbiAgICAgICAgICAgICAgICAgIHZhciB2cFNpemUgPSBfdmlld3BvcnRTaXplW3doXTtcbiAgICAgICAgICAgICAgICAgIHZhciB2cE9mZnNldCA9IHZpZXdwb3J0T2Zmc2V0W2x0XTtcbiAgICAgICAgICAgICAgICAgIHZhciBlbFNpemUgPSBlbGVtZW50U2l6ZVt3aF07XG4gICAgICAgICAgICAgICAgICB2YXIgZWxPZmZzZXQgPSBlbGVtZW50T2Zmc2V0W2x0XTtcbiAgICAgICAgICAgICAgICAgIHZhciBkaXZpZGUgPSBibG9ja0lzQ2VudGVyID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudENlbnRlck9mZnNldCA9IGVsT2Zmc2V0ICsgZWxTaXplIC8gMjtcbiAgICAgICAgICAgICAgICAgIHZhciB2aWV3cG9ydENlbnRlck9mZnNldCA9IHZwT2Zmc2V0ICsgdnBTaXplIC8gMjtcbiAgICAgICAgICAgICAgICAgIHZhciBpc0luVmlldyA9IGVsU2l6ZSA8PSB2cFNpemUgJiYgZWxPZmZzZXQgPj0gdnBPZmZzZXQgJiYgZWxPZmZzZXQgKyBlbFNpemUgPD0gdnBPZmZzZXQgKyB2cFNpemU7XG4gICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsTmV2ZXIpIGRvTm90U2Nyb2xsW3h5XSA9IHRydWU7ZWxzZSBpZiAoIWRvTm90U2Nyb2xsW3h5XSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2tJc05lYXJlc3QgfHwgc2Nyb2xsSWZOZWVkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBkb05vdFNjcm9sbFt4eV0gPSBzY3JvbGxJZk5lZWRlZCA/IGlzSW5WaWV3IDogZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgYmxvY2tJc0VuZCA9IGVsU2l6ZSA8IHZwU2l6ZSA/IGVsZW1lbnRDZW50ZXJPZmZzZXQgPiB2aWV3cG9ydENlbnRlck9mZnNldCA6IGVsZW1lbnRDZW50ZXJPZmZzZXQgPCB2aWV3cG9ydENlbnRlck9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRTY3JvbGxDb29yZGluYXRlc1t4eV0gLT0gYmxvY2tJc0VuZCB8fCBibG9ja0lzQ2VudGVyID8gKHZwU2l6ZSAvIGRpdmlkZSAtIGVsU2l6ZSAvIGRpdmlkZSkgKiAoaXNYICYmIF9pc1JUTCAmJiBub3JtYWxpemVSVEwgPyAtMSA6IDEpIDogMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgZmluYWxpemVCbG9jayh0cnVlKTtcbiAgICAgICAgICAgICAgICBmaW5hbGl6ZUJsb2NrKGZhbHNlKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChkb05vdFNjcm9sbC55KSBkZWxldGUgZWxlbWVudFNjcm9sbENvb3JkaW5hdGVzLnk7XG4gICAgICAgICAgICAgIGlmIChkb05vdFNjcm9sbC54KSBkZWxldGUgZWxlbWVudFNjcm9sbENvb3JkaW5hdGVzLng7XG4gICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gZWxlbWVudFNjcm9sbENvb3JkaW5hdGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpbmFsU2Nyb2xsW19zdHJTY3JvbGxMZWZ0XSA9IGdldEZpbmFsU2Nyb2xsKHRydWUsIGdldFJhd1Njcm9sbCh0cnVlLCBjb29yZGluYXRlcykpO1xuICAgICAgICAgIGZpbmFsU2Nyb2xsW19zdHJTY3JvbGxUb3BdID0gZ2V0RmluYWxTY3JvbGwoZmFsc2UsIGdldFJhd1Njcm9sbChmYWxzZSwgY29vcmRpbmF0ZXMpKTtcbiAgICAgICAgICBkb1Njcm9sbExlZnQgPSBmaW5hbFNjcm9sbFtfc3RyU2Nyb2xsTGVmdF0gIT09IHVuZGVmaW5lZCQxO1xuICAgICAgICAgIGRvU2Nyb2xsVG9wID0gZmluYWxTY3JvbGxbX3N0clNjcm9sbFRvcF0gIT09IHVuZGVmaW5lZCQxO1xuXG4gICAgICAgICAgaWYgKChkb1Njcm9sbExlZnQgfHwgZG9TY3JvbGxUb3ApICYmIChkdXJhdGlvbiA+IDAgfHwgZHVyYXRpb25Jc09iamVjdCkpIHtcbiAgICAgICAgICAgIGlmIChkdXJhdGlvbklzT2JqZWN0KSB7XG4gICAgICAgICAgICAgIGR1cmF0aW9uLmNvbXBsZXRlID0gcHJveHlDb21wbGV0ZUNhbGxiYWNrO1xuXG4gICAgICAgICAgICAgIF92aWV3cG9ydEVsZW1lbnQuYW5pbWF0ZShmaW5hbFNjcm9sbCwgZHVyYXRpb24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IHByb3h5Q29tcGxldGVDYWxsYmFja1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIGlmIChDT01QQVRJQklMSVRZLmlzQShlYXNpbmcpIHx8IEZSQU1FV09SSy5pc1BsYWluT2JqZWN0KGVhc2luZykpIHtcbiAgICAgICAgICAgICAgICBzcGVjaWFsRWFzaW5nW19zdHJTY3JvbGxMZWZ0XSA9IGVhc2luZ1swXSB8fCBlYXNpbmcueDtcbiAgICAgICAgICAgICAgICBzcGVjaWFsRWFzaW5nW19zdHJTY3JvbGxUb3BdID0gZWFzaW5nWzFdIHx8IGVhc2luZy55O1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbk9wdGlvbnMuc3BlY2lhbEVhc2luZyA9IHNwZWNpYWxFYXNpbmc7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uT3B0aW9ucy5lYXNpbmcgPSBlYXNpbmc7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBfdmlld3BvcnRFbGVtZW50LmFuaW1hdGUoZmluYWxTY3JvbGwsIGFuaW1hdGlvbk9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9TY3JvbGxMZWZ0KSBfdmlld3BvcnRFbGVtZW50W19zdHJTY3JvbGxMZWZ0XShmaW5hbFNjcm9sbFtfc3RyU2Nyb2xsTGVmdF0pO1xuICAgICAgICAgICAgaWYgKGRvU2Nyb2xsVG9wKSBfdmlld3BvcnRFbGVtZW50W19zdHJTY3JvbGxUb3BdKGZpbmFsU2Nyb2xsW19zdHJTY3JvbGxUb3BdKTtcbiAgICAgICAgICAgIHVwZGF0ZVNjcm9sbGJhckluZm9zKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdG9wcyBhbGwgc2Nyb2xsIGFuaW1hdGlvbnMuXHJcbiAgICAgICAgICogQHJldHVybnMgeyp9IFRoZSBjdXJyZW50IE92ZXJsYXlTY3JvbGxiYXJzIGluc3RhbmNlIChmb3IgY2hhaW5pbmcpLlxyXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgX2Jhc2Uuc2Nyb2xsU3RvcCA9IGZ1bmN0aW9uIChwYXJhbTEsIHBhcmFtMiwgcGFyYW0zKSB7XG4gICAgICAgICAgX3ZpZXdwb3J0RWxlbWVudC5zdG9wKHBhcmFtMSwgcGFyYW0yLCBwYXJhbTMpO1xuXG4gICAgICAgICAgcmV0dXJuIF9iYXNlO1xuICAgICAgICB9O1xuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm5zIGFsbCByZWxldmFudCBlbGVtZW50cy5cclxuICAgICAgICAgKiBAcGFyYW0gZWxlbWVudE5hbWUgVGhlIG5hbWUgb2YgdGhlIGVsZW1lbnQgd2hpY2ggc2hhbGwgYmUgcmV0dXJuZWQuXHJcbiAgICAgICAgICogQHJldHVybnMge3t0YXJnZXQ6ICosIGhvc3Q6ICosIHBhZGRpbmc6ICosIHZpZXdwb3J0OiAqLCBjb250ZW50OiAqLCBzY3JvbGxiYXJIb3Jpem9udGFsOiB7c2Nyb2xsYmFyOiAqLCB0cmFjazogKiwgaGFuZGxlOiAqfSwgc2Nyb2xsYmFyVmVydGljYWw6IHtzY3JvbGxiYXI6ICosIHRyYWNrOiAqLCBoYW5kbGU6ICp9LCBzY3JvbGxiYXJDb3JuZXI6ICp9IHwgKn1cclxuICAgICAgICAgKi9cblxuXG4gICAgICAgIF9iYXNlLmdldEVsZW1lbnRzID0gZnVuY3Rpb24gKGVsZW1lbnROYW1lKSB7XG4gICAgICAgICAgdmFyIG9iaiA9IHtcbiAgICAgICAgICAgIHRhcmdldDogX3RhcmdldEVsZW1lbnROYXRpdmUsXG4gICAgICAgICAgICBob3N0OiBfaG9zdEVsZW1lbnROYXRpdmUsXG4gICAgICAgICAgICBwYWRkaW5nOiBfcGFkZGluZ0VsZW1lbnROYXRpdmUsXG4gICAgICAgICAgICB2aWV3cG9ydDogX3ZpZXdwb3J0RWxlbWVudE5hdGl2ZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IF9jb250ZW50RWxlbWVudE5hdGl2ZSxcbiAgICAgICAgICAgIHNjcm9sbGJhckhvcml6b250YWw6IHtcbiAgICAgICAgICAgICAgc2Nyb2xsYmFyOiBfc2Nyb2xsYmFySG9yaXpvbnRhbEVsZW1lbnRbMF0sXG4gICAgICAgICAgICAgIHRyYWNrOiBfc2Nyb2xsYmFySG9yaXpvbnRhbFRyYWNrRWxlbWVudFswXSxcbiAgICAgICAgICAgICAgaGFuZGxlOiBfc2Nyb2xsYmFySG9yaXpvbnRhbEhhbmRsZUVsZW1lbnRbMF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY3JvbGxiYXJWZXJ0aWNhbDoge1xuICAgICAgICAgICAgICBzY3JvbGxiYXI6IF9zY3JvbGxiYXJWZXJ0aWNhbEVsZW1lbnRbMF0sXG4gICAgICAgICAgICAgIHRyYWNrOiBfc2Nyb2xsYmFyVmVydGljYWxUcmFja0VsZW1lbnRbMF0sXG4gICAgICAgICAgICAgIGhhbmRsZTogX3Njcm9sbGJhclZlcnRpY2FsSGFuZGxlRWxlbWVudFswXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjcm9sbGJhckNvcm5lcjogX3Njcm9sbGJhckNvcm5lckVsZW1lbnRbMF1cbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0eXBlKGVsZW1lbnROYW1lKSA9PSBUWVBFUy5zID8gZ2V0T2JqZWN0UHJvcFZhbChvYmosIGVsZW1lbnROYW1lKSA6IG9iajtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0dXJucyBhIG9iamVjdCB3aGljaCBkZXNjcmliZXMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhpcyBpbnN0YW5jZS5cclxuICAgICAgICAgKiBAcGFyYW0gc3RhdGVQcm9wZXJ0eSBBIHNwZWNpZmljIHByb3BlcnR5IGZyb20gdGhlIHN0YXRlIG9iamVjdCB3aGljaCBzaGFsbCBiZSByZXR1cm5lZC5cclxuICAgICAgICAgKiBAcmV0dXJucyB7e3dpZHRoQXV0bywgaGVpZ2h0QXV0bywgb3ZlcmZsb3dBbW91bnQsIGhpZGVPdmVyZmxvdywgaGFzT3ZlcmZsb3csIGNvbnRlbnRTY3JvbGxTaXplLCB2aWV3cG9ydFNpemUsIGhvc3RTaXplLCBhdXRvVXBkYXRlfSB8ICp9XHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBfYmFzZS5nZXRTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZVByb3BlcnR5KSB7XG4gICAgICAgICAgZnVuY3Rpb24gcHJlcGFyZShvYmopIHtcbiAgICAgICAgICAgIGlmICghRlJBTUVXT1JLLmlzUGxhaW5PYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgICAgICAgICAgIHZhciBleHRlbmRlZCA9IGV4dGVuZERlZXAoe30sIG9iaik7XG5cbiAgICAgICAgICAgIHZhciBjaGFuZ2VQcm9wZXJ0eU5hbWUgPSBmdW5jdGlvbiBjaGFuZ2VQcm9wZXJ0eU5hbWUoZnJvbSwgdG8pIHtcbiAgICAgICAgICAgICAgaWYgKGV4dGVuZGVkW0xFWElDT04uaE9QXShmcm9tKSkge1xuICAgICAgICAgICAgICAgIGV4dGVuZGVkW3RvXSA9IGV4dGVuZGVkW2Zyb21dO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBleHRlbmRlZFtmcm9tXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY2hhbmdlUHJvcGVydHlOYW1lKCd3JywgX3N0cldpZHRoKTsgLy9jaGFuZ2UgdyB0byB3aWR0aFxuXG4gICAgICAgICAgICBjaGFuZ2VQcm9wZXJ0eU5hbWUoJ2gnLCBfc3RySGVpZ2h0KTsgLy9jaGFuZ2UgaCB0byBoZWlnaHRcblxuICAgICAgICAgICAgZGVsZXRlIGV4dGVuZGVkLmM7IC8vZGVsZXRlIGMgKHRoZSAnY2hhbmdlZCcgcHJvcClcblxuICAgICAgICAgICAgcmV0dXJuIGV4dGVuZGVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBvYmogPSB7XG4gICAgICAgICAgICBkZXN0cm95ZWQ6ICEhcHJlcGFyZShfZGVzdHJveWVkKSxcbiAgICAgICAgICAgIHNsZWVwaW5nOiAhIXByZXBhcmUoX3NsZWVwaW5nKSxcbiAgICAgICAgICAgIGF1dG9VcGRhdGU6IHByZXBhcmUoIV9tdXRhdGlvbk9ic2VydmVyc0Nvbm5lY3RlZCksXG4gICAgICAgICAgICB3aWR0aEF1dG86IHByZXBhcmUoX3dpZHRoQXV0b0NhY2hlKSxcbiAgICAgICAgICAgIGhlaWdodEF1dG86IHByZXBhcmUoX2hlaWdodEF1dG9DYWNoZSksXG4gICAgICAgICAgICBwYWRkaW5nOiBwcmVwYXJlKF9jc3NQYWRkaW5nQ2FjaGUpLFxuICAgICAgICAgICAgb3ZlcmZsb3dBbW91bnQ6IHByZXBhcmUoX292ZXJmbG93QW1vdW50Q2FjaGUpLFxuICAgICAgICAgICAgaGlkZU92ZXJmbG93OiBwcmVwYXJlKF9oaWRlT3ZlcmZsb3dDYWNoZSksXG4gICAgICAgICAgICBoYXNPdmVyZmxvdzogcHJlcGFyZShfaGFzT3ZlcmZsb3dDYWNoZSksXG4gICAgICAgICAgICBjb250ZW50U2Nyb2xsU2l6ZTogcHJlcGFyZShfY29udGVudFNjcm9sbFNpemVDYWNoZSksXG4gICAgICAgICAgICB2aWV3cG9ydFNpemU6IHByZXBhcmUoX3ZpZXdwb3J0U2l6ZSksXG4gICAgICAgICAgICBob3N0U2l6ZTogcHJlcGFyZShfaG9zdFNpemVDYWNoZSksXG4gICAgICAgICAgICBkb2N1bWVudE1peGVkOiBwcmVwYXJlKF9kb2N1bWVudE1peGVkKVxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHR5cGUoc3RhdGVQcm9wZXJ0eSkgPT0gVFlQRVMucyA/IGdldE9iamVjdFByb3BWYWwob2JqLCBzdGF0ZVByb3BlcnR5KSA6IG9iajtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyBhbGwgb3Igc3BlY2lmaWMgZXh0ZW5zaW9uIGluc3RhbmNlLlxyXG4gICAgICAgICAqIEBwYXJhbSBleHROYW1lIFRoZSBuYW1lIG9mIHRoZSBleHRlbnNpb24gZnJvbSB3aGljaCB0aGUgaW5zdGFuY2Ugc2hhbGwgYmUgZ290LlxyXG4gICAgICAgICAqIEByZXR1cm5zIHt7fX0gVGhlIGluc3RhbmNlIG9mIHRoZSBleHRlbnNpb24gd2l0aCB0aGUgZ2l2ZW4gbmFtZSBvciB1bmRlZmluZWQgaWYgdGhlIGluc3RhbmNlIGNvdWxkbid0IGJlIGZvdW5kLlxyXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgX2Jhc2UuZXh0ID0gZnVuY3Rpb24gKGV4dE5hbWUpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgICAgdmFyIHByaXZhdGVNZXRob2RzID0gX2V4dGVuc2lvbnNQcml2YXRlTWV0aG9kcy5zcGxpdCgnICcpO1xuXG4gICAgICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICAgICAgaWYgKHR5cGUoZXh0TmFtZSkgPT0gVFlQRVMucykge1xuICAgICAgICAgICAgaWYgKF9leHRlbnNpb25zW0xFWElDT04uaE9QXShleHROYW1lKSkge1xuICAgICAgICAgICAgICByZXN1bHQgPSBleHRlbmREZWVwKHt9LCBfZXh0ZW5zaW9uc1tleHROYW1lXSk7XG5cbiAgICAgICAgICAgICAgZm9yICg7IGkgPCBwcml2YXRlTWV0aG9kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRbcHJpdmF0ZU1ldGhvZHNbaV1dO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHt9O1xuXG4gICAgICAgICAgICBmb3IgKGkgaW4gX2V4dGVuc2lvbnMpIHtcbiAgICAgICAgICAgICAgcmVzdWx0W2ldID0gZXh0ZW5kRGVlcCh7fSwgX2Jhc2UuZXh0KGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuICAgICAgICAvKipcclxuICAgICAgICAgKiBBZGRzIGEgZXh0ZW5zaW9uIHRvIHRoaXMgaW5zdGFuY2UuXHJcbiAgICAgICAgICogQHBhcmFtIGV4dE5hbWUgVGhlIG5hbWUgb2YgdGhlIGV4dGVuc2lvbiB3aGljaCBzaGFsbCBiZSBhZGRlZC5cclxuICAgICAgICAgKiBAcGFyYW0gZXh0ZW5zaW9uT3B0aW9ucyBUaGUgZXh0ZW5zaW9uIG9wdGlvbnMgd2hpY2ggc2hhbGwgYmUgdXNlZC5cclxuICAgICAgICAgKiBAcmV0dXJucyB7e319IFRoZSBpbnN0YW5jZSBvZiB0aGUgYWRkZWQgZXh0ZW5zaW9uIG9yIHVuZGVmaW5lZCBpZiB0aGUgZXh0ZW5zaW9uIGNvdWxkbid0IGJlIGFkZGVkIHByb3Blcmx5LlxyXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgX2Jhc2UuYWRkRXh0ID0gZnVuY3Rpb24gKGV4dE5hbWUsIGV4dGVuc2lvbk9wdGlvbnMpIHtcbiAgICAgICAgICB2YXIgcmVnaXN0ZXJlZEV4dGVuc2lvbk9iaiA9IF9wbHVnaW4uZXh0ZW5zaW9uKGV4dE5hbWUpO1xuXG4gICAgICAgICAgdmFyIGluc3RhbmNlO1xuICAgICAgICAgIHZhciBpbnN0YW5jZUFkZGVkO1xuICAgICAgICAgIHZhciBpbnN0YW5jZUNvbnRyYWN0O1xuICAgICAgICAgIHZhciBjb250cmFjdFJlc3VsdDtcbiAgICAgICAgICB2YXIgY29udHJhY3RGdWxmaWxsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgaWYgKHJlZ2lzdGVyZWRFeHRlbnNpb25PYmopIHtcbiAgICAgICAgICAgIGlmICghX2V4dGVuc2lvbnNbTEVYSUNPTi5oT1BdKGV4dE5hbWUpKSB7XG4gICAgICAgICAgICAgIGluc3RhbmNlID0gcmVnaXN0ZXJlZEV4dGVuc2lvbk9iai5leHRlbnNpb25GYWN0b3J5LmNhbGwoX2Jhc2UsIGV4dGVuZERlZXAoe30sIHJlZ2lzdGVyZWRFeHRlbnNpb25PYmouZGVmYXVsdE9wdGlvbnMpLCBGUkFNRVdPUkssIENPTVBBVElCSUxJVFkpO1xuXG4gICAgICAgICAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlQ29udHJhY3QgPSBpbnN0YW5jZS5jb250cmFjdDtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlKGluc3RhbmNlQ29udHJhY3QpID09IFRZUEVTLmYpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnRyYWN0UmVzdWx0ID0gaW5zdGFuY2VDb250cmFjdCh3aW5kb3cpO1xuICAgICAgICAgICAgICAgICAgY29udHJhY3RGdWxmaWxsZWQgPSB0eXBlKGNvbnRyYWN0UmVzdWx0KSA9PSBUWVBFUy5iID8gY29udHJhY3RSZXN1bHQgOiBjb250cmFjdEZ1bGZpbGxlZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY29udHJhY3RGdWxmaWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgIF9leHRlbnNpb25zW2V4dE5hbWVdID0gaW5zdGFuY2U7XG4gICAgICAgICAgICAgICAgICBpbnN0YW5jZUFkZGVkID0gaW5zdGFuY2UuYWRkZWQ7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZShpbnN0YW5jZUFkZGVkKSA9PSBUWVBFUy5mKSBpbnN0YW5jZUFkZGVkKGV4dGVuc2lvbk9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9iYXNlLmV4dChleHROYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSByZXR1cm4gX2Jhc2UuZXh0KGV4dE5hbWUpO1xuICAgICAgICAgIH0gZWxzZSBjb25zb2xlLndhcm4oXCJBIGV4dGVuc2lvbiB3aXRoIHRoZSBuYW1lIFxcXCJcIiArIGV4dE5hbWUgKyBcIlxcXCIgaXNuJ3QgcmVnaXN0ZXJlZC5cIik7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlbW92ZXMgYSBleHRlbnNpb24gZnJvbSB0aGlzIGluc3RhbmNlLlxyXG4gICAgICAgICAqIEBwYXJhbSBleHROYW1lIFRoZSBuYW1lIG9mIHRoZSBleHRlbnNpb24gd2hpY2ggc2hhbGwgYmUgcmVtb3ZlZC5cclxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgZXh0ZW5zaW9uIHdhcyByZW1vdmVkLCBmYWxzZSBvdGhlcndpc2UgZS5nLiBpZiB0aGUgZXh0ZW5zaW9uIHdhc24ndCBhZGRlZCBiZWZvcmUuXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBfYmFzZS5yZW1vdmVFeHQgPSBmdW5jdGlvbiAoZXh0TmFtZSkge1xuICAgICAgICAgIHZhciBpbnN0YW5jZSA9IF9leHRlbnNpb25zW2V4dE5hbWVdO1xuICAgICAgICAgIHZhciBpbnN0YW5jZVJlbW92ZWQ7XG5cbiAgICAgICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBfZXh0ZW5zaW9uc1tleHROYW1lXTtcbiAgICAgICAgICAgIGluc3RhbmNlUmVtb3ZlZCA9IGluc3RhbmNlLnJlbW92ZWQ7XG4gICAgICAgICAgICBpZiAodHlwZShpbnN0YW5jZVJlbW92ZWQpID09IFRZUEVTLmYpIGluc3RhbmNlUmVtb3ZlZCgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb25zdHJ1Y3RzIHRoZSBwbHVnaW4uXHJcbiAgICAgICAgICogQHBhcmFtIHRhcmdldEVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gd2hpY2ggdGhlIHBsdWdpbiBzaGFsbCBiZSBhcHBsaWVkLlxyXG4gICAgICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBpbml0aWFsIG9wdGlvbnMgb2YgdGhlIHBsdWdpbi5cclxuICAgICAgICAgKiBAcGFyYW0gZXh0ZW5zaW9ucyBUaGUgZXh0ZW5zaW9uKHMpIHdoaWNoIHNoYWxsIGJlIGFkZGVkIHJpZ2h0IGFmdGVyIHRoZSBpbml0aWFsaXphdGlvbi5cclxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcGx1Z2luIHdhcyBzdWNjZXNzZnVsbHkgaW5pdGlhbGl6ZWQsIGZhbHNlIG90aGVyd2lzZS5cclxuICAgICAgICAgKi9cblxuXG4gICAgICAgIGZ1bmN0aW9uIGNvbnN0cnVjdCh0YXJnZXRFbGVtZW50LCBvcHRpb25zLCBleHRlbnNpb25zKSB7XG4gICAgICAgICAgX2RlZmF1bHRPcHRpb25zID0gZ2xvYmFscy5kZWZhdWx0T3B0aW9ucztcbiAgICAgICAgICBfbmF0aXZlU2Nyb2xsYmFyU3R5bGluZyA9IGdsb2JhbHMubmF0aXZlU2Nyb2xsYmFyU3R5bGluZztcbiAgICAgICAgICBfbmF0aXZlU2Nyb2xsYmFyU2l6ZSA9IGV4dGVuZERlZXAoe30sIGdsb2JhbHMubmF0aXZlU2Nyb2xsYmFyU2l6ZSk7XG4gICAgICAgICAgX25hdGl2ZVNjcm9sbGJhcklzT3ZlcmxhaWQgPSBleHRlbmREZWVwKHt9LCBnbG9iYWxzLm5hdGl2ZVNjcm9sbGJhcklzT3ZlcmxhaWQpO1xuICAgICAgICAgIF9vdmVybGF5U2Nyb2xsYmFyRHVtbXlTaXplID0gZXh0ZW5kRGVlcCh7fSwgZ2xvYmFscy5vdmVybGF5U2Nyb2xsYmFyRHVtbXlTaXplKTtcbiAgICAgICAgICBfcnRsU2Nyb2xsQmVoYXZpb3IgPSBleHRlbmREZWVwKHt9LCBnbG9iYWxzLnJ0bFNjcm9sbEJlaGF2aW9yKTsgLy9wYXJzZSAmIHNldCBvcHRpb25zIGJ1dCBkb24ndCB1cGRhdGVcblxuICAgICAgICAgIHNldE9wdGlvbnMoZXh0ZW5kRGVlcCh7fSwgX2RlZmF1bHRPcHRpb25zLCBvcHRpb25zKSk7XG4gICAgICAgICAgX2Nzc0NhbGMgPSBnbG9iYWxzLmNzc0NhbGM7XG4gICAgICAgICAgX21zaWVWZXJzaW9uID0gZ2xvYmFscy5tc2llO1xuICAgICAgICAgIF9hdXRvVXBkYXRlUmVjb21tZW5kZWQgPSBnbG9iYWxzLmF1dG9VcGRhdGVSZWNvbW1lbmRlZDtcbiAgICAgICAgICBfc3VwcG9ydFRyYW5zaXRpb24gPSBnbG9iYWxzLnN1cHBvcnRUcmFuc2l0aW9uO1xuICAgICAgICAgIF9zdXBwb3J0VHJhbnNmb3JtID0gZ2xvYmFscy5zdXBwb3J0VHJhbnNmb3JtO1xuICAgICAgICAgIF9zdXBwb3J0UGFzc2l2ZUV2ZW50cyA9IGdsb2JhbHMuc3VwcG9ydFBhc3NpdmVFdmVudHM7XG4gICAgICAgICAgX3N1cHBvcnRSZXNpemVPYnNlcnZlciA9IGdsb2JhbHMuc3VwcG9ydFJlc2l6ZU9ic2VydmVyO1xuICAgICAgICAgIF9zdXBwb3J0TXV0YXRpb25PYnNlcnZlciA9IGdsb2JhbHMuc3VwcG9ydE11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgICAgICAgX2RvY3VtZW50RWxlbWVudCA9IEZSQU1FV09SSyh0YXJnZXRFbGVtZW50Lm93bmVyRG9jdW1lbnQpO1xuICAgICAgICAgIF9kb2N1bWVudEVsZW1lbnROYXRpdmUgPSBfZG9jdW1lbnRFbGVtZW50WzBdO1xuICAgICAgICAgIF93aW5kb3dFbGVtZW50ID0gRlJBTUVXT1JLKF9kb2N1bWVudEVsZW1lbnROYXRpdmUuZGVmYXVsdFZpZXcgfHwgX2RvY3VtZW50RWxlbWVudE5hdGl2ZS5wYXJlbnRXaW5kb3cpO1xuICAgICAgICAgIF93aW5kb3dFbGVtZW50TmF0aXZlID0gX3dpbmRvd0VsZW1lbnRbMF07XG4gICAgICAgICAgX2h0bWxFbGVtZW50ID0gZmluZEZpcnN0KF9kb2N1bWVudEVsZW1lbnQsICdodG1sJyk7XG4gICAgICAgICAgX2JvZHlFbGVtZW50ID0gZmluZEZpcnN0KF9odG1sRWxlbWVudCwgJ2JvZHknKTtcbiAgICAgICAgICBfdGFyZ2V0RWxlbWVudCA9IEZSQU1FV09SSyh0YXJnZXRFbGVtZW50KTtcbiAgICAgICAgICBfdGFyZ2V0RWxlbWVudE5hdGl2ZSA9IF90YXJnZXRFbGVtZW50WzBdO1xuICAgICAgICAgIF9pc1RleHRhcmVhID0gX3RhcmdldEVsZW1lbnQuaXMoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgX2lzQm9keSA9IF90YXJnZXRFbGVtZW50LmlzKCdib2R5Jyk7XG4gICAgICAgICAgX2RvY3VtZW50TWl4ZWQgPSBfZG9jdW1lbnRFbGVtZW50TmF0aXZlICE9PSBkb2N1bWVudDtcbiAgICAgICAgICAvKiBPbiBhIGRpdiBFbGVtZW50IFRoZSBpZiBjaGVja3Mgb25seSB3aGV0aGVyOlxyXG4gICAgICAgICAgICogLSB0aGUgdGFyZ2V0RWxlbWVudCBoYXMgdGhlIGNsYXNzIFwib3MtaG9zdFwiXHJcbiAgICAgICAgICAgKiAtIHRoZSB0YXJnZXRFbGVtZW50IGhhcyBhIGEgY2hpbGQgd2l0aCB0aGUgY2xhc3MgXCJvcy1wYWRkaW5nXCJcclxuICAgICAgICAgICAqIFxyXG4gICAgICAgICAgICogSWYgdGhhdCdzIHRoZSBjYXNlLCBpdHMgYXNzdW1lZCB0aGUgRE9NIGhhcyBhbHJlYWR5IHRoZSBmb2xsb3dpbmcgc3RydWN0dXJlOlxyXG4gICAgICAgICAgICogKFRoZSBcIi5vcy1ob3N0XCIgZWxlbWVudCBpcyB0aGUgdGFyZ2V0RWxlbWVudClcclxuICAgICAgICAgICAqXHJcbiAgICAgICAgICAgKiAgPGRpdiBjbGFzcz1cIm9zLWhvc3RcIj5cclxuICAgICAgICAgICAqICAgICAgPGRpdiBjbGFzcz1cIm9zLXJlc2l6ZS1vYnNlcnZlci1ob3N0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgKiAgICAgIDxkaXYgY2xhc3M9XCJvcy1wYWRkaW5nXCI+XHJcbiAgICAgICAgICAgKiAgICAgICAgICA8ZGl2IGNsYXNzPVwib3Mtdmlld3BvcnRcIj5cclxuICAgICAgICAgICAqICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3MtY29udGVudFwiPjwvZGl2PlxyXG4gICAgICAgICAgICogICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgKiAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICogICAgICA8ZGl2IGNsYXNzPVwib3Mtc2Nyb2xsYmFyIG9zLXNjcm9sbGJhci1ob3Jpem9udGFsIFwiPlxyXG4gICAgICAgICAgICogICAgICAgICAgPGRpdiBjbGFzcz1cIm9zLXNjcm9sbGJhci10cmFja1wiPlxyXG4gICAgICAgICAgICogICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcy1zY3JvbGxiYXItaGFuZGxlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgKiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAqICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgKiAgICAgIDxkaXYgY2xhc3M9XCJvcy1zY3JvbGxiYXIgb3Mtc2Nyb2xsYmFyLXZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgKiAgICAgICAgICA8ZGl2IGNsYXNzPVwib3Mtc2Nyb2xsYmFyLXRyYWNrXCI+XHJcbiAgICAgICAgICAgKiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9zLXNjcm9sbGJhci1oYW5kbGVcIj48L2Rpdj5cclxuICAgICAgICAgICAqICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICogICAgICA8L2Rpdj5cclxuICAgICAgICAgICAqICAgICAgPGRpdiBjbGFzcz1cIm9zLXNjcm9sbGJhci1jb3JuZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAqICA8L2Rpdj5cclxuICAgICAgICAgICAqXHJcbiAgICAgICAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgKiBcclxuICAgICAgICAgICAqIE9uIGEgVGV4dGFyZWEgRWxlbWVudCBUaGUgaWYgY2hlY2tzIG9ubHkgd2hldGhlcjpcclxuICAgICAgICAgICAqIC0gdGhlIHRhcmdldEVsZW1lbnQgaGFzIHRoZSBjbGFzcyBcIm9zLXRleHRhcmVhXCIgXHJcbiAgICAgICAgICAgKiAtIHRoZSB0YXJnZXRFbGVtZW50IGlzIGluc2lkZSBhIGVsZW1lbnQgd2l0aCB0aGUgY2xhc3MgXCJvcy1jb250ZW50XCIgXHJcbiAgICAgICAgICAgKiBcclxuICAgICAgICAgICAqIElmIHRoYXQncyB0aGUgY2FzZSwgaXRzIGFzc3VtZWQgdGhlIERPTSBoYXMgYWxyZWFkeSB0aGUgZm9sbG93aW5nIHN0cnVjdHVyZTpcclxuICAgICAgICAgICAqIChUaGUgXCIub3MtdGV4dGFyZWFcIiAodGV4dGFyZWEpIGVsZW1lbnQgaXMgdGhlIHRhcmdldEVsZW1lbnQpXHJcbiAgICAgICAgICAgKlxyXG4gICAgICAgICAgICogIDxkaXYgY2xhc3M9XCJvcy1ob3N0LXRleHRhcmVhXCI+XHJcbiAgICAgICAgICAgKiAgICAgIDxkaXYgY2xhc3M9XCJvcy1yZXNpemUtb2JzZXJ2ZXItaG9zdFwiPjwvZGl2PlxyXG4gICAgICAgICAgICogICAgICA8ZGl2IGNsYXNzPVwib3MtcGFkZGluZyBvcy10ZXh0LWluaGVyaXRcIj5cclxuICAgICAgICAgICAqICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcy12aWV3cG9ydCBvcy10ZXh0LWluaGVyaXRcIj5cclxuICAgICAgICAgICAqICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3MtY29udGVudCBvcy10ZXh0LWluaGVyaXRcIj5cclxuICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9zLXRleHRhcmVhLWNvdmVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cIm9zLXRleHRhcmVhIG9zLXRleHQtaW5oZXJpdFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgKiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgKiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAqICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgKiAgICAgIDxkaXYgY2xhc3M9XCJvcy1zY3JvbGxiYXIgb3Mtc2Nyb2xsYmFyLWhvcml6b250YWwgXCI+XHJcbiAgICAgICAgICAgKiAgICAgICAgICA8ZGl2IGNsYXNzPVwib3Mtc2Nyb2xsYmFyLXRyYWNrXCI+XHJcbiAgICAgICAgICAgKiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9zLXNjcm9sbGJhci1oYW5kbGVcIj48L2Rpdj5cclxuICAgICAgICAgICAqICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICogICAgICA8L2Rpdj5cclxuICAgICAgICAgICAqICAgICAgPGRpdiBjbGFzcz1cIm9zLXNjcm9sbGJhciBvcy1zY3JvbGxiYXItdmVydGljYWxcIj5cclxuICAgICAgICAgICAqICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcy1zY3JvbGxiYXItdHJhY2tcIj5cclxuICAgICAgICAgICAqICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3Mtc2Nyb2xsYmFyLWhhbmRsZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICogICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgKiAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICogICAgICA8ZGl2IGNsYXNzPVwib3Mtc2Nyb2xsYmFyLWNvcm5lclwiPjwvZGl2PlxyXG4gICAgICAgICAgICogIDwvZGl2PlxyXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBfZG9tRXhpc3RzID0gX2lzVGV4dGFyZWEgPyBfdGFyZ2V0RWxlbWVudC5oYXNDbGFzcyhfY2xhc3NOYW1lVGV4dGFyZWFFbGVtZW50KSAmJiBfdGFyZ2V0RWxlbWVudC5wYXJlbnQoKS5oYXNDbGFzcyhfY2xhc3NOYW1lQ29udGVudEVsZW1lbnQpIDogX3RhcmdldEVsZW1lbnQuaGFzQ2xhc3MoX2NsYXNzTmFtZUhvc3RFbGVtZW50KSAmJiBfdGFyZ2V0RWxlbWVudC5jaGlsZHJlbihfc3RyRG90ICsgX2NsYXNzTmFtZVBhZGRpbmdFbGVtZW50KVtMRVhJQ09OLmxdO1xuICAgICAgICAgIHZhciBpbml0Qm9keVNjcm9sbDtcblxuICAgICAgICAgIHZhciBfYm9keU1vdXNlVG91Y2hEb3duTGlzdGVuZXI7IC8vY2hlY2sgaWYgdGhlIHBsdWdpbiBoYXNuJ3QgdG8gYmUgaW5pdGlhbGl6ZWRcblxuXG4gICAgICAgICAgaWYgKF9uYXRpdmVTY3JvbGxiYXJJc092ZXJsYWlkLnggJiYgX25hdGl2ZVNjcm9sbGJhcklzT3ZlcmxhaWQueSAmJiAhX2N1cnJlbnRQcmVwYXJlZE9wdGlvbnMubmF0aXZlU2Nyb2xsYmFyc092ZXJsYWlkLmluaXRpYWxpemUpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoQ2FsbGJhY2soJ29uSW5pdGlhbGl6YXRpb25XaXRoZHJhd24nKTtcblxuICAgICAgICAgICAgaWYgKF9kb21FeGlzdHMpIHtcbiAgICAgICAgICAgICAgc2V0dXBTdHJ1Y3R1cmVET00odHJ1ZSk7XG4gICAgICAgICAgICAgIHNldHVwU2Nyb2xsYmFyc0RPTSh0cnVlKTtcbiAgICAgICAgICAgICAgc2V0dXBTY3JvbGxiYXJDb3JuZXJET00odHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICAgICAgX3NsZWVwaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBfYmFzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX2lzQm9keSkge1xuICAgICAgICAgICAgaW5pdEJvZHlTY3JvbGwgPSB7fTtcbiAgICAgICAgICAgIGluaXRCb2R5U2Nyb2xsLmwgPSBNQVRILm1heChfdGFyZ2V0RWxlbWVudFtfc3RyU2Nyb2xsTGVmdF0oKSwgX2h0bWxFbGVtZW50W19zdHJTY3JvbGxMZWZ0XSgpLCBfd2luZG93RWxlbWVudFtfc3RyU2Nyb2xsTGVmdF0oKSk7XG4gICAgICAgICAgICBpbml0Qm9keVNjcm9sbC50ID0gTUFUSC5tYXgoX3RhcmdldEVsZW1lbnRbX3N0clNjcm9sbFRvcF0oKSwgX2h0bWxFbGVtZW50W19zdHJTY3JvbGxUb3BdKCksIF93aW5kb3dFbGVtZW50W19zdHJTY3JvbGxUb3BdKCkpO1xuXG4gICAgICAgICAgICBfYm9keU1vdXNlVG91Y2hEb3duTGlzdGVuZXIgPSBmdW5jdGlvbiBib2R5TW91c2VUb3VjaERvd25MaXN0ZW5lcigpIHtcbiAgICAgICAgICAgICAgX3ZpZXdwb3J0RWxlbWVudC5yZW1vdmVBdHRyKExFWElDT04udGkpO1xuXG4gICAgICAgICAgICAgIHNldHVwUmVzcG9uc2l2ZUV2ZW50TGlzdGVuZXIoX3ZpZXdwb3J0RWxlbWVudCwgX3N0ck1vdXNlVG91Y2hEb3duRXZlbnQsIF9ib2R5TW91c2VUb3VjaERvd25MaXN0ZW5lciwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gLy9idWlsZCBPdmVybGF5U2Nyb2xsYmFycyBET01cblxuXG4gICAgICAgICAgc2V0dXBTdHJ1Y3R1cmVET00oKTtcbiAgICAgICAgICBzZXR1cFNjcm9sbGJhcnNET00oKTtcbiAgICAgICAgICBzZXR1cFNjcm9sbGJhckNvcm5lckRPTSgpOyAvL2NyZWF0ZSBPdmVybGF5U2Nyb2xsYmFycyBldmVudHNcblxuICAgICAgICAgIHNldHVwU3RydWN0dXJlRXZlbnRzKCk7XG4gICAgICAgICAgc2V0dXBTY3JvbGxiYXJFdmVudHModHJ1ZSk7XG4gICAgICAgICAgc2V0dXBTY3JvbGxiYXJFdmVudHMoZmFsc2UpO1xuICAgICAgICAgIHNldHVwU2Nyb2xsYmFyQ29ybmVyRXZlbnRzKCk7IC8vY3JlYXRlIG11dGF0aW9uIG9ic2VydmVyc1xuXG4gICAgICAgICAgY3JlYXRlTXV0YXRpb25PYnNlcnZlcnMoKTsgLy9idWlsZCByZXNpemUgb2JzZXJ2ZXIgZm9yIHRoZSBob3N0IGVsZW1lbnRcblxuICAgICAgICAgIHNldHVwUmVzaXplT2JzZXJ2ZXIoX3NpemVPYnNlcnZlckVsZW1lbnQsIGhvc3RPblJlc2l6ZWQpO1xuXG4gICAgICAgICAgaWYgKF9pc0JvZHkpIHtcbiAgICAgICAgICAgIC8vYXBwbHkgdGhlIGJvZHkgc2Nyb2xsIHRvIGhhbmRsZSBpdCByaWdodCBpbiB0aGUgdXBkYXRlIG1ldGhvZFxuICAgICAgICAgICAgX3ZpZXdwb3J0RWxlbWVudFtfc3RyU2Nyb2xsTGVmdF0oaW5pdEJvZHlTY3JvbGwubClbX3N0clNjcm9sbFRvcF0oaW5pdEJvZHlTY3JvbGwudCk7IC8vc2V0IHRoZSBmb2N1cyBvbiB0aGUgdmlld3BvcnQgZWxlbWVudCBzbyB5b3UgZG9udCBoYXZlIHRvIGNsaWNrIG9uIHRoZSBwYWdlIHRvIHVzZSBrZXlib2FyZCBrZXlzICh1cCAvIGRvd24gLyBzcGFjZSkgZm9yIHNjcm9sbGluZ1xuXG5cbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09IHRhcmdldEVsZW1lbnQgJiYgX3ZpZXdwb3J0RWxlbWVudE5hdGl2ZS5mb2N1cykge1xuICAgICAgICAgICAgICAvL3NldCBhIHRhYmluZGV4IHRvIG1ha2UgdGhlIHZpZXdwb3J0RWxlbWVudCBmb2N1c2FibGVcbiAgICAgICAgICAgICAgX3ZpZXdwb3J0RWxlbWVudC5hdHRyKExFWElDT04udGksICctMScpO1xuXG4gICAgICAgICAgICAgIF92aWV3cG9ydEVsZW1lbnROYXRpdmUuZm9jdXMoKTtcbiAgICAgICAgICAgICAgLyogdGhlIHRhYmluZGV4IGhhcyB0byBiZSByZW1vdmVkIGR1ZSB0bztcclxuICAgICAgICAgICAgICAgKiBJZiB5b3Ugc2V0IHRoZSB0YWJpbmRleCBhdHRyaWJ1dGUgb24gYW4gPGRpdj4sIHRoZW4gaXRzIGNoaWxkIGNvbnRlbnQgY2Fubm90IGJlIHNjcm9sbGVkIHdpdGggdGhlIGFycm93IGtleXMgdW5sZXNzIHlvdSBzZXQgdGFiaW5kZXggb24gdGhlIGNvbnRlbnQsIHRvb1xyXG4gICAgICAgICAgICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvR2xvYmFsX2F0dHJpYnV0ZXMvdGFiaW5kZXhcclxuICAgICAgICAgICAgICAgKi9cblxuXG4gICAgICAgICAgICAgIHNldHVwUmVzcG9uc2l2ZUV2ZW50TGlzdGVuZXIoX3ZpZXdwb3J0RWxlbWVudCwgX3N0ck1vdXNlVG91Y2hEb3duRXZlbnQsIF9ib2R5TW91c2VUb3VjaERvd25MaXN0ZW5lciwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy91cGRhdGUgZm9yIHRoZSBmaXJzdCB0aW1lICYgaW5pdGlhbGl6ZSBjYWNoZVxuXG5cbiAgICAgICAgICBfYmFzZS51cGRhdGUoX3N0ckF1dG8pOyAvL3RoZSBwbHVnaW4gaXMgaW5pdGlhbGl6ZWQgbm93IVxuXG5cbiAgICAgICAgICBfaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgIGRpc3BhdGNoQ2FsbGJhY2soJ29uSW5pdGlhbGl6ZWQnKTsgLy9jYWxsIGFsbCBjYWxsYmFja3Mgd2hpY2ggd291bGQgZmlyZSBiZWZvcmUgdGhlIGluaXRpYWxpemVkIHdhcyBjb21wbGV0ZVxuXG4gICAgICAgICAgZWFjaChfY2FsbGJhY2tzSW5pdFFldWV1ZSwgZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgICAgZGlzcGF0Y2hDYWxsYmFjayh2YWx1ZS5uLCB2YWx1ZS5hKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBfY2FsbGJhY2tzSW5pdFFldWV1ZSA9IFtdOyAvL2FkZCBleHRlbnNpb25zXG5cbiAgICAgICAgICBpZiAodHlwZShleHRlbnNpb25zKSA9PSBUWVBFUy5zKSBleHRlbnNpb25zID0gW2V4dGVuc2lvbnNdO1xuICAgICAgICAgIGlmIChDT01QQVRJQklMSVRZLmlzQShleHRlbnNpb25zKSkgZWFjaChleHRlbnNpb25zLCBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICBfYmFzZS5hZGRFeHQodmFsdWUpO1xuICAgICAgICAgIH0pO2Vsc2UgaWYgKEZSQU1FV09SSy5pc1BsYWluT2JqZWN0KGV4dGVuc2lvbnMpKSBlYWNoKGV4dGVuc2lvbnMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBfYmFzZS5hZGRFeHQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgfSk7IC8vYWRkIHRoZSB0cmFuc2l0aW9uIGNsYXNzIGZvciB0cmFuc2l0aW9ucyBBRlRFUiB0aGUgZmlyc3QgdXBkYXRlICYgQUZURVIgdGhlIGFwcGxpZWQgZXh0ZW5zaW9ucyAoZm9yIHByZXZlbnRpbmcgdW53YW50ZWQgdHJhbnNpdGlvbnMpXG5cbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfc3VwcG9ydFRyYW5zaXRpb24gJiYgIV9kZXN0cm95ZWQpIGFkZENsYXNzKF9ob3N0RWxlbWVudCwgX2NsYXNzTmFtZUhvc3RUcmFuc2l0aW9uKTtcbiAgICAgICAgICB9LCAzMzMpO1xuICAgICAgICAgIHJldHVybiBfYmFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfcGx1Z2luLnZhbGlkKGNvbnN0cnVjdChwbHVnaW5UYXJnZXRFbGVtZW50LCBvcHRpb25zLCBleHRlbnNpb25zKSkpIHtcbiAgICAgICAgICBJTlNUQU5DRVMocGx1Z2luVGFyZ2V0RWxlbWVudCwgX2Jhc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9iYXNlO1xuICAgICAgfVxuICAgICAgLyoqXHJcbiAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3IE92ZXJsYXlTY3JvbGxiYXJzSW5zdGFuY2Ugb2JqZWN0IG9yIGNoYW5nZXMgb3B0aW9ucyBpZiBhbHJlYWR5IGluaXRpYWxpemVkIG9yIHJldHVybnMgdGhlIGN1cnJlbnQgaW5zdGFuY2UuXHJcbiAgICAgICAqIEBwYXJhbSBwbHVnaW5UYXJnZXRFbGVtZW50cyBUaGUgZWxlbWVudHMgdG8gd2hpY2ggdGhlIFBsdWdpbiBzaGFsbCBiZSBpbml0aWFsaXplZC5cclxuICAgICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIGN1c3RvbSBvcHRpb25zIHdpdGggd2hpY2ggdGhlIHBsdWdpbiBzaGFsbCBiZSBpbml0aWFsaXplZC5cclxuICAgICAgICogQHBhcmFtIGV4dGVuc2lvbnMgVGhlIGV4dGVuc2lvbihzKSB3aGljaCBzaGFsbCBiZSBhZGRlZCByaWdodCBhZnRlciBpbml0aWFsaXphdGlvbi5cclxuICAgICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgICAqL1xuXG5cbiAgICAgIF9wbHVnaW4gPSB3aW5kb3dbUExVR0lOTkFNRV0gPSBmdW5jdGlvbiAocGx1Z2luVGFyZ2V0RWxlbWVudHMsIG9wdGlvbnMsIGV4dGVuc2lvbnMpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50c1tMRVhJQ09OLmxdID09PSAwKSByZXR1cm4gdGhpcztcbiAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICB2YXIgb3B0c0lzUGxhaW5PYmogPSBGUkFNRVdPUksuaXNQbGFpbk9iamVjdChvcHRpb25zKTtcbiAgICAgICAgdmFyIGluc3Q7XG4gICAgICAgIHZhciByZXN1bHQ7IC8vcGx1Z2luVGFyZ2V0RWxlbWVudHMgaXMgbnVsbCBvciB1bmRlZmluZWRcblxuICAgICAgICBpZiAoIXBsdWdpblRhcmdldEVsZW1lbnRzKSByZXR1cm4gb3B0c0lzUGxhaW5PYmogfHwgIW9wdGlvbnMgPyByZXN1bHQgOiBhcnI7XG4gICAgICAgIC8qXHJcbiAgICAgICAgICAgcGx1Z2luVGFyZ2V0RWxlbWVudHMgd2lsbCBiZSBjb252ZXJ0ZWQgdG86XHJcbiAgICAgICAgICAgMS4gQSBqUXVlcnlFbGVtZW50IEFycmF5XHJcbiAgICAgICAgICAgMi4gQSBIVE1MRWxlbWVudCBBcnJheVxyXG4gICAgICAgICAgIDMuIEEgQXJyYXkgd2l0aCBhIHNpbmdsZSBIVE1MIEVsZW1lbnRcclxuICAgICAgICAgICBzbyBwbHVnaW5UYXJnZXRFbGVtZW50cyBpcyBhbHdheXMgYSBhcnJheS5cclxuICAgICAgICAqL1xuXG4gICAgICAgIHBsdWdpblRhcmdldEVsZW1lbnRzID0gcGx1Z2luVGFyZ2V0RWxlbWVudHNbTEVYSUNPTi5sXSAhPSB1bmRlZmluZWQkMSA/IHBsdWdpblRhcmdldEVsZW1lbnRzIDogW3BsdWdpblRhcmdldEVsZW1lbnRzWzBdIHx8IHBsdWdpblRhcmdldEVsZW1lbnRzXTtcbiAgICAgICAgaW5pdE92ZXJsYXlTY3JvbGxiYXJzU3RhdGljcygpO1xuXG4gICAgICAgIGlmIChwbHVnaW5UYXJnZXRFbGVtZW50c1tMRVhJQ09OLmxdID4gMCkge1xuICAgICAgICAgIGlmIChvcHRzSXNQbGFpbk9iaikge1xuICAgICAgICAgICAgRlJBTUVXT1JLLmVhY2gocGx1Z2luVGFyZ2V0RWxlbWVudHMsIGZ1bmN0aW9uIChpLCB2KSB7XG4gICAgICAgICAgICAgIGluc3QgPSB2O1xuICAgICAgICAgICAgICBpZiAoaW5zdCAhPT0gdW5kZWZpbmVkJDEpIGFyci5wdXNoKE92ZXJsYXlTY3JvbGxiYXJzSW5zdGFuY2UoaW5zdCwgb3B0aW9ucywgZXh0ZW5zaW9ucywgX3BsdWdpbnNHbG9iYWxzLCBfcGx1Z2luc0F1dG9VcGRhdGVMb29wKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgRlJBTUVXT1JLLmVhY2gocGx1Z2luVGFyZ2V0RWxlbWVudHMsIGZ1bmN0aW9uIChpLCB2KSB7XG4gICAgICAgICAgICAgIGluc3QgPSBJTlNUQU5DRVModik7XG4gICAgICAgICAgICAgIGlmIChvcHRpb25zID09PSAnIScgJiYgX3BsdWdpbi52YWxpZChpbnN0KSB8fCBDT01QQVRJQklMSVRZLnR5cGUob3B0aW9ucykgPT0gVFlQRVMuZiAmJiBvcHRpb25zKHYsIGluc3QpKSBhcnIucHVzaChpbnN0KTtlbHNlIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQkMSkgYXJyLnB1c2goaW5zdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXN1bHQgPSBhcnJbTEVYSUNPTi5sXSA9PT0gMSA/IGFyclswXSA6IGFycjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9O1xuICAgICAgLyoqXHJcbiAgICAgICAqIFJldHVybnMgYSBvYmplY3Qgd2hpY2ggY29udGFpbnMgZ2xvYmFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBwbHVnaW4gYW5kIGVhY2ggaW5zdGFuY2Ugb2YgaXQuXHJcbiAgICAgICAqIFRoZSByZXR1cm5lZCBvYmplY3QgaXMganVzdCBhIGNvcHksIHRoYXQgbWVhbnMgdGhhdCBjaGFuZ2VzIHRvIHRoZSByZXR1cm5lZCBvYmplY3Qgd29uJ3QgaGF2ZSBhbnkgZWZmZWN0IHRvIHRoZSBvcmlnaW5hbCBvYmplY3QuXHJcbiAgICAgICAqL1xuXG5cbiAgICAgIF9wbHVnaW4uZ2xvYmFscyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5pdE92ZXJsYXlTY3JvbGxiYXJzU3RhdGljcygpO1xuICAgICAgICB2YXIgZ2xvYmFscyA9IEZSQU1FV09SSy5leHRlbmQodHJ1ZSwge30sIF9wbHVnaW5zR2xvYmFscyk7XG4gICAgICAgIGRlbGV0ZSBnbG9iYWxzWydtc2llJ107XG4gICAgICAgIHJldHVybiBnbG9iYWxzO1xuICAgICAgfTtcbiAgICAgIC8qKlxyXG4gICAgICAgKiBHZXRzIG9yIFNldHMgdGhlIGRlZmF1bHQgb3B0aW9ucyBmb3IgZWFjaCBuZXcgcGx1Z2luIGluaXRpYWxpemF0aW9uLlxyXG4gICAgICAgKiBAcGFyYW0gbmV3RGVmYXVsdE9wdGlvbnMgVGhlIG9iamVjdCB3aXRoIHdoaWNoIHRoZSBkZWZhdWx0IG9wdGlvbnMgc2hhbGwgYmUgZXh0ZW5kZWQuXHJcbiAgICAgICAqL1xuXG5cbiAgICAgIF9wbHVnaW4uZGVmYXVsdE9wdGlvbnMgPSBmdW5jdGlvbiAobmV3RGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgICAgaW5pdE92ZXJsYXlTY3JvbGxiYXJzU3RhdGljcygpO1xuICAgICAgICB2YXIgY3VyckRlZmF1bHRPcHRpb25zID0gX3BsdWdpbnNHbG9iYWxzLmRlZmF1bHRPcHRpb25zO1xuICAgICAgICBpZiAobmV3RGVmYXVsdE9wdGlvbnMgPT09IHVuZGVmaW5lZCQxKSByZXR1cm4gRlJBTUVXT1JLLmV4dGVuZCh0cnVlLCB7fSwgY3VyckRlZmF1bHRPcHRpb25zKTsgLy9zZXQgdGhlIG5ldyBkZWZhdWx0IG9wdGlvbnNcblxuICAgICAgICBfcGx1Z2luc0dsb2JhbHMuZGVmYXVsdE9wdGlvbnMgPSBGUkFNRVdPUksuZXh0ZW5kKHRydWUsIHt9LCBjdXJyRGVmYXVsdE9wdGlvbnMsIF9wbHVnaW5zT3B0aW9ucy5fdmFsaWRhdGUobmV3RGVmYXVsdE9wdGlvbnMsIF9wbHVnaW5zT3B0aW9ucy5fdGVtcGxhdGUsIHRydWUsIGN1cnJEZWZhdWx0T3B0aW9ucykuX2RlZmF1bHQpO1xuICAgICAgfTtcbiAgICAgIC8qKlxyXG4gICAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgcGFzc2VkIGluc3RhbmNlIGlzIGEgbm9uLWRlc3Ryb3llZCBPdmVybGF5U2Nyb2xsYmFycyBpbnN0YW5jZS5cclxuICAgICAgICogQHBhcmFtIG9zSW5zdGFuY2UgVGhlIHBvdGVudGlhbCBPdmVybGF5U2Nyb2xsYmFycyBpbnN0YW5jZSB3aGljaCBzaGFsbCBiZSBjaGVja2VkLlxyXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgbm9uLWRlc3Ryb3llZCBPdmVybGF5U2Nyb2xsYmFycyBpbnN0YW5jZSwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gICAgICAgKi9cblxuXG4gICAgICBfcGx1Z2luLnZhbGlkID0gZnVuY3Rpb24gKG9zSW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIG9zSW5zdGFuY2UgaW5zdGFuY2VvZiBfcGx1Z2luICYmICFvc0luc3RhbmNlLmdldFN0YXRlKCkuZGVzdHJveWVkO1xuICAgICAgfTtcbiAgICAgIC8qKlxyXG4gICAgICAgKiBSZWdpc3RlcnMsIFVucmVnaXN0ZXJzIG9yIHJldHVybnMgYSBleHRlbnNpb24uXHJcbiAgICAgICAqIFJlZ2lzdGVyOiBQYXNzIHRoZSBuYW1lIGFuZCB0aGUgZXh0ZW5zaW9uLiAoZGVmYXVsdE9wdGlvbnMgaXMgb3B0aW9uYWwpXHJcbiAgICAgICAqIFVucmVnaXN0ZXI6IFBhc3MgdGhlIG5hbWUgYW5kIGFueXRoaW5nIGV4Y2VwdCBhIGZ1bmN0aW9uIGFzIGV4dGVuc2lvbiBwYXJhbWV0ZXIuXHJcbiAgICAgICAqIEdldCBleHRlbnNpb246IFBhc3MgdGhlIG5hbWUgb2YgdGhlIGV4dGVuc2lvbiB3aGljaCBzaGFsbCBiZSBnb3QuXHJcbiAgICAgICAqIEdldCBhbGwgZXh0ZW5zaW9uczogUGFzcyBubyBhcmd1bWVudHMuXHJcbiAgICAgICAqIEBwYXJhbSBleHRlbnNpb25OYW1lIFRoZSBuYW1lIG9mIHRoZSBleHRlbnNpb24gd2hpY2ggc2hhbGwgYmUgcmVnaXN0ZXJlZCwgdW5yZWdpc3RlcmVkIG9yIHJldHVybmVkLlxyXG4gICAgICAgKiBAcGFyYW0gZXh0ZW5zaW9uIEEgZnVuY3Rpb24gd2hpY2ggZ2VuZXJhdGVzIHRoZSBpbnN0YW5jZSBvZiB0aGUgZXh0ZW5zaW9uIG9yIGFueXRoaW5nIG90aGVyIHRvIHJlbW92ZSBhIGFscmVhZHkgcmVnaXN0ZXJlZCBleHRlbnNpb24uXHJcbiAgICAgICAqIEBwYXJhbSBkZWZhdWx0T3B0aW9ucyBUaGUgZGVmYXVsdCBvcHRpb25zIHdoaWNoIHNoYWxsIGJlIHVzZWQgZm9yIHRoZSByZWdpc3RlcmVkIGV4dGVuc2lvbi5cclxuICAgICAgICovXG5cblxuICAgICAgX3BsdWdpbi5leHRlbnNpb24gPSBmdW5jdGlvbiAoZXh0ZW5zaW9uTmFtZSwgZXh0ZW5zaW9uLCBkZWZhdWx0T3B0aW9ucykge1xuICAgICAgICB2YXIgZXh0TmFtZVR5cGVTdHJpbmcgPSBDT01QQVRJQklMSVRZLnR5cGUoZXh0ZW5zaW9uTmFtZSkgPT0gVFlQRVMucztcbiAgICAgICAgdmFyIGFyZ0xlbiA9IGFyZ3VtZW50c1tMRVhJQ09OLmxdO1xuICAgICAgICB2YXIgaSA9IDA7XG5cbiAgICAgICAgaWYgKGFyZ0xlbiA8IDEgfHwgIWV4dE5hbWVUeXBlU3RyaW5nKSB7XG4gICAgICAgICAgLy9yZXR1cm4gYSBjb3B5IG9mIGFsbCBleHRlbnNpb24gb2JqZWN0c1xuICAgICAgICAgIHJldHVybiBGUkFNRVdPUksuZXh0ZW5kKHRydWUsIHtcbiAgICAgICAgICAgIGxlbmd0aDogX3BsdWdpbnNFeHRlbnNpb25zW0xFWElDT04ubF1cbiAgICAgICAgICB9LCBfcGx1Z2luc0V4dGVuc2lvbnMpO1xuICAgICAgICB9IGVsc2UgaWYgKGV4dE5hbWVUeXBlU3RyaW5nKSB7XG4gICAgICAgICAgaWYgKENPTVBBVElCSUxJVFkudHlwZShleHRlbnNpb24pID09IFRZUEVTLmYpIHtcbiAgICAgICAgICAgIC8vcmVnaXN0ZXIgZXh0ZW5zaW9uXG4gICAgICAgICAgICBfcGx1Z2luc0V4dGVuc2lvbnMucHVzaCh7XG4gICAgICAgICAgICAgIG5hbWU6IGV4dGVuc2lvbk5hbWUsXG4gICAgICAgICAgICAgIGV4dGVuc2lvbkZhY3Rvcnk6IGV4dGVuc2lvbixcbiAgICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IGRlZmF1bHRPcHRpb25zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICg7IGkgPCBfcGx1Z2luc0V4dGVuc2lvbnNbTEVYSUNPTi5sXTsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChfcGx1Z2luc0V4dGVuc2lvbnNbaV0ubmFtZSA9PT0gZXh0ZW5zaW9uTmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChhcmdMZW4gPiAxKSBfcGx1Z2luc0V4dGVuc2lvbnMuc3BsaWNlKGksIDEpOyAvL3JlbW92ZSBleHRlbnNpb25cbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBGUkFNRVdPUksuZXh0ZW5kKHRydWUsIHt9LCBfcGx1Z2luc0V4dGVuc2lvbnNbaV0pOyAvL3JldHVybiBleHRlbnNpb24gd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3BsdWdpbjtcbiAgICB9KCk7XG5cbiAgICBpZiAoSlFVRVJZICYmIEpRVUVSWS5mbikge1xuICAgICAgLyoqXHJcbiAgICAgICAqIFRoZSBqUXVlcnkgaW5pdGlhbGl6YXRpb24gaW50ZXJmYWNlLlxyXG4gICAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgaW5pdGlhbCBvcHRpb25zIGZvciB0aGUgY29uc3RydWN0aW9uIG9mIHRoZSBwbHVnaW4uIFRvIGluaXRpYWxpemUgdGhlIHBsdWdpbiwgdGhpcyBvcHRpb24gaGFzIHRvIGJlIGEgb2JqZWN0ISBJZiBpdCBpc24ndCBhIG9iamVjdCwgdGhlIGluc3RhbmNlKHMpIGFyZSByZXR1cm5lZCBhbmQgdGhlIHBsdWdpbiB3b250IGJlIGluaXRpYWxpemVkLlxyXG4gICAgICAgKiBAcGFyYW0gZXh0ZW5zaW9ucyBUaGUgZXh0ZW5zaW9uKHMpIHdoaWNoIHNoYWxsIGJlIGFkZGVkIHJpZ2h0IGFmdGVyIGluaXRpYWxpemF0aW9uLlxyXG4gICAgICAgKiBAcmV0dXJucyB7Kn0gQWZ0ZXIgaW5pdGlhbGl6YXRpb24gaXQgcmV0dXJucyB0aGUgalF1ZXJ5IGVsZW1lbnQgYXJyYXksIGVsc2UgaXQgcmV0dXJucyB0aGUgaW5zdGFuY2Uocykgb2YgdGhlIGVsZW1lbnRzIHdoaWNoIGFyZSBzZWxlY3RlZC5cclxuICAgICAgICovXG4gICAgICBKUVVFUlkuZm4ub3ZlcmxheVNjcm9sbGJhcnMgPSBmdW5jdGlvbiAob3B0aW9ucywgZXh0ZW5zaW9ucykge1xuICAgICAgICB2YXIgX2VsZW1lbnRzID0gdGhpcztcblxuICAgICAgICBpZiAoSlFVRVJZLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAgICBKUVVFUlkuZWFjaChfZWxlbWVudHMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIFBMVUdJTih0aGlzLCBvcHRpb25zLCBleHRlbnNpb25zKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gX2VsZW1lbnRzO1xuICAgICAgICB9IGVsc2UgcmV0dXJuIFBMVUdJTihfZWxlbWVudHMsIG9wdGlvbnMpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gUExVR0lOO1xuICB9KTtcbn0pKE92ZXJsYXlTY3JvbGxiYXJzJDEpO1xuXG52YXIgT3ZlcmxheVNjcm9sbGJhcnMgPSBPdmVybGF5U2Nyb2xsYmFycyQxLmV4cG9ydHM7XG4vKipcbiAqIFVzaW5nIG92ZXJsYXlzY3JvbGxiYXJzLXJlYWN0IGNvbXBvbmVudCByZXN1bHRzIHVzZSB0aGUgZXNtIG1vZHVsZXNcbiAqIHdoaWNoIGRvZXNuJ3QgZ28gdGhyb3VnaCBiYWJlbCBsZWFkaW5nIHRvIElFIDExIHVuY29tcGF0aWJpbGl0eVxuICogQSBQUiBpcyBzdWJtaXR0ZWQgdGhhdCBtYXkgZml4IHRoaXM6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vS2luZ1NvcmEvT3ZlcmxheVNjcm9sbGJhcnMvcHVsbC8yMThcbiAqICovXG5cbnZhciBPdmVybGF5U2Nyb2xsYmFyc0NvbXBvbmVudCA9IGZ1bmN0aW9uIE92ZXJsYXlTY3JvbGxiYXJzQ29tcG9uZW50KF9hKSB7XG4gIHZhciBfYSRvcHRpb25zID0gX2Eub3B0aW9ucyxcbiAgICAgIG9wdGlvbnMgPSBfYSRvcHRpb25zID09PSB2b2lkIDAgPyB7fSA6IF9hJG9wdGlvbnMsXG4gICAgICBleHRlbnNpb25zID0gX2EuZXh0ZW5zaW9ucyxcbiAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sXG4gICAgICByZXN0ID0gX19yZXN0KF9hLCBbXCJvcHRpb25zXCIsIFwiZXh0ZW5zaW9uc1wiLCBcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCJdKTtcblxuICB2YXIgb3NUYXJnZXRSZWYgPSB1c2VSZWYoKTtcbiAgdmFyIG9zSW5zdGFuY2UgPSB1c2VSZWYoKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBvc0luc3RhbmNlLmN1cnJlbnQgPSBPdmVybGF5U2Nyb2xsYmFycyhvc1RhcmdldFJlZi5jdXJyZW50LCBvcHRpb25zLCBleHRlbnNpb25zKTtcbiAgICBtZXJnZUhvc3RDbGFzc05hbWVzKG9zSW5zdGFuY2UuY3VycmVudCwgY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKE92ZXJsYXlTY3JvbGxiYXJzLnZhbGlkKG9zSW5zdGFuY2UuY3VycmVudCkpIHtcbiAgICAgICAgb3NJbnN0YW5jZS5jdXJyZW50LmRlc3Ryb3koKTtcbiAgICAgICAgb3NJbnN0YW5jZS5jdXJyZW50ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKE92ZXJsYXlTY3JvbGxiYXJzLnZhbGlkKG9zSW5zdGFuY2UuY3VycmVudCkpIHtcbiAgICAgIG9zSW5zdGFuY2UuY3VycmVudC5vcHRpb25zKG9wdGlvbnMpO1xuICAgIH1cbiAgfSwgW29wdGlvbnNdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoT3ZlcmxheVNjcm9sbGJhcnMudmFsaWQob3NJbnN0YW5jZS5jdXJyZW50KSkge1xuICAgICAgbWVyZ2VIb3N0Q2xhc3NOYW1lcyhvc0luc3RhbmNlLmN1cnJlbnQsIGNsYXNzTmFtZSk7XG4gICAgfVxuICB9LCBbY2xhc3NOYW1lXSk7XG4gIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIGNsYXNzTmFtZTogXCJvcy1ob3N0XCJcbiAgfSwgcmVzdCwge1xuICAgIHJlZjogb3NUYXJnZXRSZWZcbiAgfSksIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJvcy1yZXNpemUtb2JzZXJ2ZXItaG9zdFwiXG4gIH0pLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwib3MtcGFkZGluZ1wiXG4gIH0sIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJvcy12aWV3cG9ydFwiXG4gIH0sIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJvcy1jb250ZW50XCJcbiAgfSwgY2hpbGRyZW4pKSksIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJvcy1zY3JvbGxiYXIgb3Mtc2Nyb2xsYmFyLWhvcml6b250YWwgXCJcbiAgfSwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIm9zLXNjcm9sbGJhci10cmFja1wiXG4gIH0sIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJvcy1zY3JvbGxiYXItaGFuZGxlXCJcbiAgfSkpKSwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIm9zLXNjcm9sbGJhciBvcy1zY3JvbGxiYXItdmVydGljYWxcIlxuICB9LCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwib3Mtc2Nyb2xsYmFyLXRyYWNrXCJcbiAgfSwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIm9zLXNjcm9sbGJhci1oYW5kbGVcIlxuICB9KSkpLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwib3Mtc2Nyb2xsYmFyLWNvcm5lclwiXG4gIH0pKTtcbn07XG5cbmZ1bmN0aW9uIG1lcmdlSG9zdENsYXNzTmFtZXMob3NJbnN0YW5jZSwgY2xhc3NOYW1lKSB7XG4gIGlmIChPdmVybGF5U2Nyb2xsYmFycy52YWxpZChvc0luc3RhbmNlKSkge1xuICAgIHZhciBfb3NJbnN0YW5jZSRnZXRFbGVtZW4gPSBvc0luc3RhbmNlLmdldEVsZW1lbnRzKCksXG4gICAgICAgIGhvc3QgPSBfb3NJbnN0YW5jZSRnZXRFbGVtZW4uaG9zdDtcblxuICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCIoXm9zLWhvc3QoWy1fXS4rfCkkKXxcIi5jb25jYXQob3NJbnN0YW5jZS5vcHRpb25zKCkuY2xhc3NOYW1lLnJlcGxhY2UoL1xccy9nLCAnJHwnKSwgXCIkXCIpLCAnZycpO1xuICAgIHZhciBvc0NsYXNzTmFtZXMgPSBob3N0LmNsYXNzTmFtZS5zcGxpdCgnICcpLmZpbHRlcihmdW5jdGlvbiAobmFtZSkge1xuICAgICAgcmV0dXJuIG5hbWUubWF0Y2gocmVnZXgpO1xuICAgIH0pLmpvaW4oJyAnKTtcbiAgICBob3N0LmNsYXNzTmFtZSA9IFwiXCIuY29uY2F0KG9zQ2xhc3NOYW1lcywgXCIgXCIpLmNvbmNhdChjbGFzc05hbWUgfHwgJycpO1xuICB9XG59XG5cbmV4cG9ydCB7IE92ZXJsYXlTY3JvbGxiYXJzQ29tcG9uZW50LCBPdmVybGF5U2Nyb2xsYmFyc0NvbXBvbmVudCBhcyBkZWZhdWx0IH07XG4iXSwibmFtZXMiOlsiX3R5cGVvZiIsIm9iaiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJtb2R1bGUiLCJnbG9iYWwiLCJPdmVybGF5U2Nyb2xsYmFycyQxIiwiZXhwb3J0cyIsIndpbmRvdyIsImMiLCJkb2N1bWVudCIsInVuZGVmaW5lZCQxIiwiX3RhcmdldHMiLCJfaW5zdGFuY2VQcm9wZXJ0eVN0cmluZyIsIl9lYXNpbmdzTWF0aCIsIlBMVUdJTk5BTUUiLCJUWVBFUyIsIm8iLCJmIiwiYSIsInMiLCJiIiwibiIsInUiLCJ6IiwiTEVYSUNPTiIsImkiLCJsIiwicCIsInRpIiwib0giLCJjSCIsInNIIiwib1ciLCJjVyIsInNXIiwiaE9QIiwiYkNSIiwiVkVORE9SUyIsImpzQ2FjaGUiLCJjc3NDYWNoZSIsImNzc1ByZWZpeGVzIiwianNQcmVmaXhlcyIsImZpcnN0TGV0dGVyVG9VcHBlciIsInN0ciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJfY3NzUHJlZml4ZXMiLCJfanNQcmVmaXhlcyIsIl9jc3NQcm9wZXJ0eSIsIm5hbWUiLCJyZXN1bHQiLCJyZXN1bHRQb3NzaWJpbGl0aWVzIiwidiIsImN1cnJWZW5kb3JXaXRob3V0RGFzaGVzIiwidXBwZXJjYXNlZE5hbWUiLCJlbG1TdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJsZW5ndGgiLCJyZXBsYWNlIiwiX2Nzc1Byb3BlcnR5VmFsdWUiLCJwcm9wZXJ0eSIsInZhbHVlcyIsInN1ZmZpeCIsInByb3AiLCJkdW1teVN0eWxlIiwicG9zc2JsZVZhbHVlcyIsInNwbGl0IiwicHJlcGFyZWRTdWZmaXgiLCJjc3NUZXh0IiwiX2pzQVBJIiwiaXNJbnRlcmZhY2UiLCJmYWxsYmFjayIsInRvTG93ZXJDYXNlIiwiQ09NUEFUSUJJTElUWSIsIndpbmRvd1NpemUiLCJ4IiwiaW5uZXJXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImJvZHkiLCJpbm5lckhlaWdodCIsImJpbmQiLCJmdW5jIiwidGhpc09iaiIsInByb3RvIiwiYUFyZ3MiLCJBcnJheSIsImNhbGwiLCJhcmd1bWVudHMiLCJmTk9QIiwiZkJvdW5kIiwiYXBwbHkiLCJ0aGlzIiwiY29uY2F0Iiwid1ciLCJ3SCIsIm1PIiwick8iLCJyQUYiLCJzZXRUaW1lb3V0IiwiY0FGIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSIsInN0cFAiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNhbmNlbEJ1YmJsZSIsInBydkQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbmNlbGFibGUiLCJyZXR1cm5WYWx1ZSIsInBhZ2UiLCJzdHJQYWdlIiwic3RyQ2xpZW50Iiwic3RyWCIsInN0clkiLCJldmVudERvYyIsIm9yaWdpbmFsRXZlbnQiLCJ0YXJnZXQiLCJzcmNFbGVtZW50Iiwib3duZXJEb2N1bWVudCIsImRvYyIsInRvdWNoZXMiLCJ0b3VjaCIsInkiLCJzY3JvbGxMZWZ0IiwiY2xpZW50TGVmdCIsInNjcm9sbFRvcCIsImNsaWVudFRvcCIsIm1CdG4iLCJidXR0b24iLCJ3aGljaCIsImluQSIsIml0ZW0iLCJhcnIiLCJlIiwiaXNBIiwiZGVmIiwiaXNBcnJheSIsInR5cGUiLCJPYmplY3QiLCJ0b1N0cmluZyIsIk1BVEgiLCJNYXRoIiwiSlFVRVJZIiwialF1ZXJ5IiwiRUFTSU5HIiwiUEkiLCJjb3MiLCJzaW4iLCJ3IiwicG93IiwidCIsInNxcnQiLCJhc2luIiwiYWJzIiwic3dpbmciLCJkIiwibGluZWFyIiwiZWFzZUluUXVhZCIsImVhc2VPdXRRdWFkIiwiZWFzZUluT3V0UXVhZCIsImVhc2VJbkN1YmljIiwiZWFzZU91dEN1YmljIiwiZWFzZUluT3V0Q3ViaWMiLCJlYXNlSW5RdWFydCIsImVhc2VPdXRRdWFydCIsImVhc2VJbk91dFF1YXJ0IiwiZWFzZUluUXVpbnQiLCJlYXNlT3V0UXVpbnQiLCJlYXNlSW5PdXRRdWludCIsImVhc2VJblNpbmUiLCJlYXNlT3V0U2luZSIsImVhc2VJbk91dFNpbmUiLCJlYXNlSW5FeHBvIiwiZWFzZU91dEV4cG8iLCJlYXNlSW5PdXRFeHBvIiwiZWFzZUluQ2lyYyIsImVhc2VPdXRDaXJjIiwiZWFzZUluT3V0Q2lyYyIsImVhc2VJbkVsYXN0aWMiLCJlYXNlT3V0RWxhc3RpYyIsImVhc2VJbk91dEVsYXN0aWMiLCJlYXNlSW5CYWNrIiwiZWFzZU91dEJhY2siLCJlYXNlSW5PdXRCYWNrIiwiZWFzZUluQm91bmNlIiwiZWFzZU91dEJvdW5jZSIsImVhc2VJbk91dEJvdW5jZSIsIkZSQU1FV09SSyIsIl9ybm90aHRtbHdoaXRlIiwiX3N0clNwYWNlIiwiX3N0ckVtcHR5IiwiX3N0clNjcm9sbExlZnQiLCJfc3RyU2Nyb2xsVG9wIiwiX2FuaW1hdGlvbnMiLCJfdHlwZSIsIl9jc3NOdW1iZXIiLCJhbmltYXRpb25JdGVyYXRpb25Db3VudCIsImNvbHVtbkNvdW50IiwiZmlsbE9wYWNpdHkiLCJmbGV4R3JvdyIsImZsZXhTaHJpbmsiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsIm9wYWNpdHkiLCJvcmRlciIsIm9ycGhhbnMiLCJ3aWRvd3MiLCJ6SW5kZXgiLCJ6b29tIiwiZXh0ZW5kIiwic3JjIiwiY29weUlzQXJyYXkiLCJjb3B5Iiwib3B0aW9ucyIsImNsb25lIiwiZGVlcCIsIkZha2VqUXVlcnkiLCJpc1BsYWluT2JqZWN0IiwiaW5BcnJheSIsImZyb21JbmRleCIsImlzRnVuY3Rpb24iLCJpc0VtcHR5T2JqZWN0Iiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJoYXNPd25Db25zdHJ1Y3RvciIsImhhc0lzUHJvdG90eXBlT2YiLCJfZWFjaCIsImNhbGxiYWNrIiwiaXNBcnJheUxpa2UiLCJzdHJpcEFuZENvbGxhcHNlIiwidmFsdWUiLCJtYXRjaCIsImpvaW4iLCJtYXRjaGVzIiwiZWxlbSIsInNlbGVjdG9yIiwibm9kZUxpc3QiLCJwYXJlbnROb2RlIiwicXVlcnlTZWxlY3RvckFsbCIsImluc2VydEFkamFjZW50RWxlbWVudCIsImVsIiwic3RyYXRlZ3kiLCJjaGlsZCIsImluc2VydEFkamFjZW50SFRNTCIsIm5vZGVUeXBlIiwic2V0Q1NTVmFsIiwidmFsIiwicGFyc2VDU1NWYWwiLCJzdGFydE5leHRBbmltYXRpb25JblEiLCJhbmltT2JqIiwicmVtb3ZlRnJvbVEiLCJpbmRleCIsIm5leHRBbmltIiwicSIsInNwbGljZSIsIl9hbmltYXRlIiwicHJvcHMiLCJkdXJhdGlvbiIsImVhc2luZyIsImNvbXBsZXRlIiwic2V0QW5pbWF0aW9uVmFsdWUiLCJndWFyYW50ZWVkTmV4dCIsInByb2dyZXNzIiwic3RlcCIsInNwZWNpYWxFYXNpbmciLCJoYXNPcHRpb25zIiwiZnJvbSIsInRvIiwicHVzaCIsImNzcyIsInRpbWVOb3ciLCJlbmQiLCJwZXJjZW50IiwiZnJvbVZhbCIsInRvVmFsIiwiZWFzZWRWYWwiLCJ0aW1lU3RhcnQiLCJfZnJhbWUiLCJlbGFwc2VkIiwicVBvcyIsInFPYmoiLCJmcmFtZSIsInN0b3AiLCJtYXgiLCJwYXJzZUZsb2F0Iiwic3RhcnQiLCJwb3MiLCJzcGVhY2lhbEVhc2luZyIsInN0YXJ0VGltZSIsIl9zdG9wIiwiY2xlYXJRIiwianVtcFRvRW5kIiwiZWxlbWVudElzVmlzaWJsZSIsImdldENsaWVudFJlY3RzIiwiZWxtcyIsImJhc2UiLCJlbGVtZW50cyIsImlubmVySFRNTCIsImNoaWxkcmVuIiwic2VsZiIsIm9uIiwiZXZlbnROYW1lIiwiaGFuZGxlciIsImV2ZW50TmFtZUxlbmd0aCIsImVhY2giLCJhZGRFdmVudExpc3RlbmVyIiwiZGV0YWNoRXZlbnQiLCJhdHRhY2hFdmVudCIsIm9mZiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbmUiLCJvbmVFdmVudE5hbWUiLCJvbmVIYW5kbGVyIiwidHJpZ2dlciIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImZpcmVFdmVudCIsImFwcGVuZCIsInByZXBlbmQiLCJiZWZvcmUiLCJhZnRlciIsInJlbW92ZSIsInJlbW92ZUNoaWxkIiwidW53cmFwIiwicGFyZW50IiwicGFyZW50cyIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJ3cmFwQWxsIiwid3JhcHBlckhUTUwiLCJub2RlcyIsIndyYXBwZXIiLCJkZWVwZXN0IiwicHJldmlvdXNTaWJsaW5nIiwiY2hpbGROb2RlcyIsImFwcGVuZENoaWxkIiwibmV4dFNpYmxpbmciLCJ3cmFwSW5uZXIiLCJjb250ZW50cyIsIndyYXAiLCJzdHlsZXMiLCJjcHRTdHlsZSIsImdldENwdFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImN1cnJlbnRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJoYXNDbGFzcyIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImNsYXNzTmFtZVByZXBhcmVkIiwiY29udGFpbnMiLCJpbmRleE9mIiwiYWRkQ2xhc3MiLCJjbGFzc2VzIiwiY3VyIiwiY3VyVmFsdWUiLCJjbGF6eiIsImZpbmFsVmFsdWUiLCJzdXBwb3J0Q2xhc3NMaXN0IiwiZWxtQ2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlQ2xhc3MiLCJoaWRlIiwiZGlzcGxheSIsInNob3ciLCJhdHRyIiwiYXR0ck5hbWUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyIiwicmVtb3ZlQXR0cmlidXRlIiwib2Zmc2V0IiwicmVjdCIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0IiwiZmlyc3QiLCJlcSIsImxhc3QiLCJmaW5kIiwiY2giLCJpcyIsImNoaWxkcyIsImFuaW1hdGUiLCJqdW1wIiwiSU5TVEFOQ0VTIiwiaW5zdGFuY2UiLCJhcmdMZW4iLCJQTFVHSU4iLCJfcGx1Z2luIiwiX3BsdWdpbnNHbG9iYWxzIiwiX3BsdWdpbnNBdXRvVXBkYXRlTG9vcCIsInBvc3NpYmxlVGVtcGxhdGVUeXBlcyIsInJlc3RyaWN0ZWRTdHJpbmdzU3BsaXQiLCJyZXN0cmljdGVkU3RyaW5nc1Bvc3NpYmlsaXRpZXNTcGxpdCIsImNsYXNzTmFtZUFsbG93ZWRWYWx1ZXMiLCJudW1iZXJBbGxvd2VkVmFsdWVzIiwiYm9vbGVhbk51bGxBbGxvd2VkVmFsdWVzIiwiYm9vbGVhblRydWVUZW1wbGF0ZSIsImJvb2xlYW5GYWxzZVRlbXBsYXRlIiwiY2FsbGJhY2tUZW1wbGF0ZSIsIm92ZXJmbG93QmVoYXZpb3JBbGxvd2VkVmFsdWVzIiwib3B0aW9uc0RlZmF1bHRzQW5kVGVtcGxhdGUiLCJjb252ZXJ0IiwiX3BsdWdpbnNFeHRlbnNpb25zIiwiX3BsdWdpbnNPcHRpb25zIiwicmVzaXplIiwic2l6ZUF1dG9DYXBhYmxlIiwiY2xpcEFsd2F5cyIsIm5vcm1hbGl6ZVJUTCIsInBhZGRpbmdBYnNvbHV0ZSIsImF1dG9VcGRhdGUiLCJhdXRvVXBkYXRlSW50ZXJ2YWwiLCJ1cGRhdGVPbkxvYWQiLCJuYXRpdmVTY3JvbGxiYXJzT3ZlcmxhaWQiLCJzaG93TmF0aXZlU2Nyb2xsYmFycyIsImluaXRpYWxpemUiLCJvdmVyZmxvd0JlaGF2aW9yIiwic2Nyb2xsYmFycyIsInZpc2liaWxpdHkiLCJhdXRvSGlkZSIsImF1dG9IaWRlRGVsYXkiLCJkcmFnU2Nyb2xsaW5nIiwiY2xpY2tTY3JvbGxpbmciLCJ0b3VjaFN1cHBvcnQiLCJzbmFwSGFuZGxlIiwidGV4dGFyZWEiLCJkeW5XaWR0aCIsImR5bkhlaWdodCIsImluaGVyaXRlZEF0dHJzIiwiY2FsbGJhY2tzIiwib25Jbml0aWFsaXplZCIsIm9uSW5pdGlhbGl6YXRpb25XaXRoZHJhd24iLCJvbkRlc3Ryb3llZCIsIm9uU2Nyb2xsU3RhcnQiLCJvblNjcm9sbCIsIm9uU2Nyb2xsU3RvcCIsIm9uT3ZlcmZsb3dDaGFuZ2VkIiwib25PdmVyZmxvd0Ftb3VudENoYW5nZWQiLCJvbkRpcmVjdGlvbkNoYW5nZWQiLCJvbkNvbnRlbnRTaXplQ2hhbmdlZCIsIm9uSG9zdFNpemVDaGFuZ2VkIiwib25VcGRhdGVkIiwiX2RlZmF1bHRzIiwidGVtcGxhdGUiLCJyZWN1cnNpdmUiLCJ2YWxUeXBlIiwiX3RlbXBsYXRlIiwiX3ZhbGlkYXRlIiwid3JpdGVFcnJvcnMiLCJkaWZmT2JqIiwidmFsaWRhdGVkT3B0aW9ucyIsInZhbGlkYXRlZE9wdGlvbnNQcmVwYXJlZCIsIm9iamVjdENvcHkiLCJpc0VtcHR5T2JqIiwiY2hlY2tPYmplY3RQcm9wcyIsImRhdGEiLCJkaWZmRGF0YSIsInByZXZQcm9wTmFtZSIsInJlc3RyaWN0ZWRTdHJpbmdWYWx1ZXNTcGxpdCIsInJlc3RyaWN0ZWRTdHJpbmdWYWx1ZXNQb3NzaWJpbGl0aWVzU3BsaXQiLCJpc1Jlc3RyaWN0ZWRWYWx1ZSIsIm1haW5Qb3NzaWJpbGl0eSIsImN1cnJUeXBlIiwiaiIsImlzVmFsaWQiLCJpc0RpZmYiLCJ0ZW1wbGF0ZVZhbHVlIiwidGVtcGxhdGVWYWx1ZVR5cGUiLCJ0ZW1wbGF0ZUlzQ29tcGxleCIsInRlbXBsYXRlVHlwZXMiLCJkYXRhRGlmZlZhbHVlIiwiZGF0YVZhbHVlIiwiZGF0YVZhbHVlVHlwZSIsInByb3BQcmVmaXgiLCJlcnJvciIsImVycm9yUG9zc2libGVUeXBlcyIsImVycm9yUmVzdHJpY3RlZFN0cmluZ3MiLCJjb25zb2xlIiwid2FybiIsIkpTT04iLCJzdHJpbmdpZnkiLCJfZGVmYXVsdCIsIl9wcmVwYXJlZCIsImluaXRPdmVybGF5U2Nyb2xsYmFyc1N0YXRpY3MiLCJPdmVybGF5U2Nyb2xsYmFyc0dsb2JhbHMiLCJPdmVybGF5U2Nyb2xsYmFyc0F1dG9VcGRhdGVMb29wIiwiZGVmYXVsdE9wdGlvbnMiLCJfYmFzZSIsInN0ck92ZXJmbG93Iiwic3RySGlkZGVuIiwic3RyU2Nyb2xsIiwiYm9keUVsZW1lbnQiLCJzY3JvbGxiYXJEdW1teUVsZW1lbnQiLCJzY3JvbGxiYXJEdW1teUVsZW1lbnQwIiwiZHVtbXlDb250YWluZXJDaGlsZCIsIm5hdGl2ZVNjcm9sbGJhclNpemUiLCJjYWxjTmF0aXZlU2Nyb2xsYmFyU2l6ZSIsIm5hdGl2ZVNjcm9sbGJhcklzT3ZlcmxhaWQiLCJtc2llIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJzdHJJbmRleE9mIiwic3RyU3ViU3RyaW5nIiwidHJpZGVudCIsImVkZ2UiLCJydiIsInBhcnNlSW50RnVuYyIsInBhcnNlSW50IiwibWVhc3VyZUVsZW1lbnQiLCJhdXRvVXBkYXRlTG9vcCIsImF1dG9VcGRhdGVSZWNvbW1lbmRlZCIsIm5hdGl2ZVNjcm9sbGJhclN0eWxpbmciLCJleCIsIm92ZXJsYXlTY3JvbGxiYXJEdW1teVNpemUiLCJjc3NDYWxjIiwicmVzdHJpY3RlZE1lYXN1cmluZyIsInNjcm9sbFNpemUiLCJoIiwic2Nyb2xsU2l6ZTIiLCJydGxTY3JvbGxCZWhhdmlvciIsImR1bW15Q29udGFpbmVyT2Zmc2V0IiwiZHVtbXlDb250YWluZXJDaGlsZE9mZnNldCIsImR1bW15Q29udGFpbmVyQ2hpbGRPZmZzZXRBZnRlclNjcm9sbCIsInN1cHBvcnRUcmFuc2Zvcm0iLCJzdXBwb3J0VHJhbnNpdGlvbiIsInN1cHBvcnRQYXNzaXZlRXZlbnRzIiwic3VwcG9ydHNQYXNzaXZlIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJzdXBwb3J0UmVzaXplT2JzZXJ2ZXIiLCJzdXBwb3J0TXV0YXRpb25PYnNlcnZlciIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0Iiwid2luZG93RHByIiwiZ2V0V2luZG93RFBSIiwib25SZXNpemUiLCJuZXdXIiwibmV3SCIsImRlbHRhVyIsImRlbHRhSCIsIm5ld1Njcm9sbGJhclNpemUiLCJkZWx0YVdSYXRpbyIsInJvdW5kIiwiZGVsdGFIUmF0aW8iLCJhYnNEZWx0YVciLCJhYnNEZWx0YUgiLCJhYnNEZWx0YVdSYXRpbyIsImFic0RlbHRhSFJhdGlvIiwibmV3RFBSIiwiZGVsdGFJc0JpZ2dlciIsImRpZmZlcmVuY2UiLCJkaWZmZXJlbmNlSXNCaWdnZXJUaGFuT25lIiwiaXNab29tIiwib2xkU2Nyb2xsYmFyU2l6ZSIsInVwZGF0ZSIsInZhbE9uZSIsInZhbFR3byIsImFic1ZhbE9uZSIsImFic1ZhbFR3byIsImREUEkiLCJzY3JlZW4iLCJkZXZpY2VYRFBJIiwic0RQSSIsImxvZ2ljYWxYRFBJIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImdsb2JhbHMiLCJfbG9vcElEIiwiX2luQXJyYXkiLCJfZ2V0Tm93IiwiX3N0ckF1dG9VcGRhdGUiLCJfc3RyQXV0b1VwZGF0ZUludGVydmFsIiwiX3N0ckxlbmd0aCIsIl9sb29waW5nSW5zdGFuY2VzIiwiX2xvb3BpbmdJbnN0YW5jZXNJbnRlcnZhbENhY2hlIiwiX2xvb3BJc0FjdGl2ZSIsIl9sb29wSW50ZXJ2YWxEZWZhdWx0IiwiX2xvb3BJbnRlcnZhbCIsIl9sb29wVGltZU9sZCIsImxvb3AiLCJsb3dlc3RJbnRlcnZhbCIsImluc3RhbmNlT3B0aW9ucyIsImluc3RhbmNlQXV0b1VwZGF0ZUFsbG93ZWQiLCJpbnN0YW5jZUF1dG9VcGRhdGVJbnRlcnZhbCIsInRpbWVOZXciLCJ0aW1lRGVsdGEiLCJtaW4iLCJPdmVybGF5U2Nyb2xsYmFyc0luc3RhbmNlIiwicGx1Z2luVGFyZ2V0RWxlbWVudCIsImV4dGVuc2lvbnMiLCJfZnJhbWV3b3JrUHJvdG8iLCJpc0hUTUxFbGVtZW50IiwiaW5zdCIsIl9uYXRpdmVTY3JvbGxiYXJJc092ZXJsYWlkIiwiX292ZXJsYXlTY3JvbGxiYXJEdW1teVNpemUiLCJfcnRsU2Nyb2xsQmVoYXZpb3IiLCJfYXV0b1VwZGF0ZVJlY29tbWVuZGVkIiwiX21zaWVWZXJzaW9uIiwiX25hdGl2ZVNjcm9sbGJhclN0eWxpbmciLCJfY3NzQ2FsYyIsIl9uYXRpdmVTY3JvbGxiYXJTaXplIiwiX3N1cHBvcnRUcmFuc2l0aW9uIiwiX3N1cHBvcnRUcmFuc2Zvcm0iLCJfc3VwcG9ydFBhc3NpdmVFdmVudHMiLCJfc3VwcG9ydFJlc2l6ZU9ic2VydmVyIiwiX3N1cHBvcnRNdXRhdGlvbk9ic2VydmVyIiwiX2luaXRpYWxpemVkIiwiX2Rlc3Ryb3llZCIsIl9pc1RleHRhcmVhIiwiX2lzQm9keSIsIl9kb2N1bWVudE1peGVkIiwiX2RvbUV4aXN0cyIsIl9pc0JvcmRlckJveCIsIl9zaXplQXV0b09ic2VydmVyQWRkZWQiLCJfcGFkZGluZ1giLCJfcGFkZGluZ1kiLCJfYm9yZGVyWCIsIl9ib3JkZXJZIiwiX21hcmdpblgiLCJfbWFyZ2luWSIsIl9pc1JUTCIsIl9zbGVlcGluZyIsIl9kZWZhdWx0T3B0aW9ucyIsIl9jdXJyZW50T3B0aW9ucyIsIl9jdXJyZW50UHJlcGFyZWRPcHRpb25zIiwiX2xhc3RVcGRhdGVUaW1lIiwiX3N3YWxsb3dlZFVwZGF0ZVRpbWVvdXQiLCJfd2luZG93RWxlbWVudCIsIl9kb2N1bWVudEVsZW1lbnQiLCJfaHRtbEVsZW1lbnQiLCJfYm9keUVsZW1lbnQiLCJfdGFyZ2V0RWxlbWVudCIsIl9ob3N0RWxlbWVudCIsIl9zaXplQXV0b09ic2VydmVyRWxlbWVudCIsIl9zaXplT2JzZXJ2ZXJFbGVtZW50IiwiX3BhZGRpbmdFbGVtZW50IiwiX3ZpZXdwb3J0RWxlbWVudCIsIl9jb250ZW50RWxlbWVudCIsIl9jb250ZW50QXJyYW5nZUVsZW1lbnQiLCJfY29udGVudEdsdWVFbGVtZW50IiwiX3RleHRhcmVhQ292ZXJFbGVtZW50IiwiX3Njcm9sbGJhckNvcm5lckVsZW1lbnQiLCJfc2Nyb2xsYmFySG9yaXpvbnRhbEVsZW1lbnQiLCJfc2Nyb2xsYmFySG9yaXpvbnRhbFRyYWNrRWxlbWVudCIsIl9zY3JvbGxiYXJIb3Jpem9udGFsSGFuZGxlRWxlbWVudCIsIl9zY3JvbGxiYXJWZXJ0aWNhbEVsZW1lbnQiLCJfc2Nyb2xsYmFyVmVydGljYWxUcmFja0VsZW1lbnQiLCJfc2Nyb2xsYmFyVmVydGljYWxIYW5kbGVFbGVtZW50IiwiX3dpbmRvd0VsZW1lbnROYXRpdmUiLCJfZG9jdW1lbnRFbGVtZW50TmF0aXZlIiwiX3RhcmdldEVsZW1lbnROYXRpdmUiLCJfaG9zdEVsZW1lbnROYXRpdmUiLCJfc2l6ZUF1dG9PYnNlcnZlckVsZW1lbnROYXRpdmUiLCJfc2l6ZU9ic2VydmVyRWxlbWVudE5hdGl2ZSIsIl9wYWRkaW5nRWxlbWVudE5hdGl2ZSIsIl92aWV3cG9ydEVsZW1lbnROYXRpdmUiLCJfY29udGVudEVsZW1lbnROYXRpdmUiLCJfaG9zdFNpemVDYWNoZSIsIl9jb250ZW50U2Nyb2xsU2l6ZUNhY2hlIiwiX2FycmFuZ2VDb250ZW50U2l6ZUNhY2hlIiwiX2hhc092ZXJmbG93Q2FjaGUiLCJfaGlkZU92ZXJmbG93Q2FjaGUiLCJfd2lkdGhBdXRvQ2FjaGUiLCJfaGVpZ2h0QXV0b0NhY2hlIiwiX2Nzc0JveFNpemluZ0NhY2hlIiwiX2Nzc1BhZGRpbmdDYWNoZSIsIl9jc3NCb3JkZXJDYWNoZSIsIl9jc3NNYXJnaW5DYWNoZSIsIl9jc3NEaXJlY3Rpb25DYWNoZSIsIl9jc3NEaXJlY3Rpb25EZXRlY3RlZENhY2hlIiwiX3BhZGRpbmdBYnNvbHV0ZUNhY2hlIiwiX2NsaXBBbHdheXNDYWNoZSIsIl9jb250ZW50R2x1ZVNpemVDYWNoZSIsIl9vdmVyZmxvd0JlaGF2aW9yQ2FjaGUiLCJfb3ZlcmZsb3dBbW91bnRDYWNoZSIsIl9pZ25vcmVPdmVybGF5U2Nyb2xsYmFySGlkaW5nQ2FjaGUiLCJfYXV0b1VwZGF0ZUNhY2hlIiwiX3NpemVBdXRvQ2FwYWJsZUNhY2hlIiwiX2NvbnRlbnRFbGVtZW50U2Nyb2xsU2l6ZUNoYW5nZURldGVjdGVkQ2FjaGUiLCJfaG9zdEVsZW1lbnRTaXplQ2hhbmdlRGV0ZWN0ZWRDYWNoZSIsIl9zY3JvbGxiYXJzVmlzaWJpbGl0eUNhY2hlIiwiX3Njcm9sbGJhcnNBdXRvSGlkZUNhY2hlIiwiX3Njcm9sbGJhcnNDbGlja1Njcm9sbGluZ0NhY2hlIiwiX3Njcm9sbGJhcnNEcmFnU2Nyb2xsaW5nQ2FjaGUiLCJfcmVzaXplQ2FjaGUiLCJfbm9ybWFsaXplUlRMQ2FjaGUiLCJfY2xhc3NOYW1lQ2FjaGUiLCJfb2xkQ2xhc3NOYW1lIiwiX3RleHRhcmVhQXV0b1dyYXBwaW5nQ2FjaGUiLCJfdGV4dGFyZWFJbmZvQ2FjaGUiLCJfdGV4dGFyZWFTaXplQ2FjaGUiLCJfdGV4dGFyZWFEeW5IZWlnaHRDYWNoZSIsIl90ZXh0YXJlYUR5bldpZHRoQ2FjaGUiLCJfYm9keU1pblNpemVDYWNoZSIsIl9tdXRhdGlvbk9ic2VydmVySG9zdCIsIl9tdXRhdGlvbk9ic2VydmVyQ29udGVudCIsIl9tdXRhdGlvbk9ic2VydmVySG9zdENhbGxiYWNrIiwiX211dGF0aW9uT2JzZXJ2ZXJDb250ZW50Q2FsbGJhY2siLCJfbXV0YXRpb25PYnNlcnZlcnNDb25uZWN0ZWQiLCJfdGV4dGFyZWFIYXNGb2N1cyIsIl9zY3JvbGxiYXJzQXV0b0hpZGVUaW1lb3V0SWQiLCJfc2Nyb2xsYmFyc0F1dG9IaWRlTW92ZVRpbWVvdXRJZCIsIl9zY3JvbGxiYXJzQXV0b0hpZGVEZWxheSIsIl9zY3JvbGxiYXJzQXV0b0hpZGVOZXZlciIsIl9zY3JvbGxiYXJzQXV0b0hpZGVTY3JvbGwiLCJfc2Nyb2xsYmFyc0F1dG9IaWRlTW92ZSIsIl9zY3JvbGxiYXJzQXV0b0hpZGVMZWF2ZSIsIl9zY3JvbGxiYXJzSGFuZGxlSG92ZXJlZCIsIl9zY3JvbGxiYXJzSGFuZGxlc0RlZmluZVNjcm9sbFBvcyIsIl9yZXNpemVOb25lIiwiX3Jlc2l6ZUJvdGgiLCJfcmVzaXplSG9yaXpvbnRhbCIsIl9yZXNpemVWZXJ0aWNhbCIsIl9jb250ZW50Qm9yZGVyU2l6ZSIsIl9zY3JvbGxIb3Jpem9udGFsSW5mbyIsIl9zY3JvbGxWZXJ0aWNhbEluZm8iLCJfdmlld3BvcnRTaXplIiwiX25hdGl2ZVNjcm9sbGJhck1pblNpemUiLCJfc3RyTWludXNIaWRkZW4iLCJfc3RyTWFyZ2luTWludXMiLCJfc3RyUGFkZGluZ01pbnVzIiwiX3N0ckJvcmRlck1pbnVzIiwiX3N0clRvcCIsIl9zdHJSaWdodCIsIl9zdHJCb3R0b20iLCJfc3RyTGVmdCIsIl9zdHJNaW5NaW51cyIsIl9zdHJNYXhNaW51cyIsIl9zdHJXaWR0aCIsIl9zdHJIZWlnaHQiLCJfc3RyRmxvYXQiLCJfc3RyQXV0byIsIl9zdHJTeW5jIiwiX3N0clNjcm9sbCIsIl9zdHJIdW5kcmVkUGVyY2VudCIsIl9zdHJYIiwiX3N0clkiLCJfc3RyRG90IiwiX3N0clNjcm9sbGJhciIsIl9zdHJNaW51c0hvcml6b250YWwiLCJfc3RyTWludXNWZXJ0aWNhbCIsIl9zdHJNb3VzZVRvdWNoRG93bkV2ZW50IiwiX3N0ck1vdXNlVG91Y2hVcEV2ZW50IiwiX3N0ck1vdXNlVG91Y2hNb3ZlRXZlbnQiLCJfc3RyTW91c2VFbnRlciIsIl9zdHJNb3VzZUxlYXZlIiwiX3N0cktleURvd25FdmVudCIsIl9zdHJLZXlVcEV2ZW50IiwiX3N0clNlbGVjdFN0YXJ0RXZlbnQiLCJfc3RyVHJhbnNpdGlvbkVuZEV2ZW50IiwiX3N0clJlc2l6ZU9ic2VydmVyUHJvcGVydHkiLCJfY2Fzc05hbWVzUHJlZml4IiwiX2NsYXNzTmFtZUhUTUxFbGVtZW50IiwiX2NsYXNzTmFtZUhvc3RFbGVtZW50IiwiX2NsYXNzTmFtZUhvc3RFbGVtZW50Rm9yZWlnbiIsIl9jbGFzc05hbWVIb3N0VGV4dGFyZWFFbGVtZW50IiwiX2NsYXNzTmFtZUhvc3RTY3JvbGxiYXJIb3Jpem9udGFsSGlkZGVuIiwiX2NsYXNzTmFtZUhvc3RTY3JvbGxiYXJWZXJ0aWNhbEhpZGRlbiIsIl9jbGFzc05hbWVIb3N0VHJhbnNpdGlvbiIsIl9jbGFzc05hbWVIb3N0UlRMIiwiX2NsYXNzTmFtZUhvc3RSZXNpemVEaXNhYmxlZCIsIl9jbGFzc05hbWVIb3N0U2Nyb2xsaW5nIiwiX2NsYXNzTmFtZUhvc3RPdmVyZmxvdyIsIl9jbGFzc05hbWVIb3N0T3ZlcmZsb3dYIiwiX2NsYXNzTmFtZUhvc3RPdmVyZmxvd1kiLCJfY2xhc3NOYW1lVGV4dGFyZWFFbGVtZW50IiwiX2NsYXNzTmFtZVRleHRhcmVhQ292ZXJFbGVtZW50IiwiX2NsYXNzTmFtZVBhZGRpbmdFbGVtZW50IiwiX2NsYXNzTmFtZVZpZXdwb3J0RWxlbWVudCIsIl9jbGFzc05hbWVWaWV3cG9ydE5hdGl2ZVNjcm9sbGJhcnNJbnZpc2libGUiLCJfY2xhc3NOYW1lVmlld3BvcnROYXRpdmVTY3JvbGxiYXJzT3ZlcmxhaWQiLCJfY2xhc3NOYW1lQ29udGVudEVsZW1lbnQiLCJfY2xhc3NOYW1lQ29udGVudEFycmFuZ2VFbGVtZW50IiwiX2NsYXNzTmFtZUNvbnRlbnRHbHVlRWxlbWVudCIsIl9jbGFzc05hbWVTaXplQXV0b09ic2VydmVyRWxlbWVudCIsIl9jbGFzc05hbWVSZXNpemVPYnNlcnZlckVsZW1lbnQiLCJfY2xhc3NOYW1lUmVzaXplT2JzZXJ2ZXJJdGVtRWxlbWVudCIsIl9jbGFzc05hbWVSZXNpemVPYnNlcnZlckl0ZW1GaW5hbEVsZW1lbnQiLCJfY2xhc3NOYW1lVGV4dEluaGVyaXQiLCJfY2xhc3NOYW1lU2Nyb2xsYmFyIiwiX2NsYXNzTmFtZVNjcm9sbGJhclRyYWNrIiwiX2NsYXNzTmFtZVNjcm9sbGJhclRyYWNrT2ZmIiwiX2NsYXNzTmFtZVNjcm9sbGJhckhhbmRsZSIsIl9jbGFzc05hbWVTY3JvbGxiYXJIYW5kbGVPZmYiLCJfY2xhc3NOYW1lU2Nyb2xsYmFyVW51c2FibGUiLCJfY2xhc3NOYW1lU2Nyb2xsYmFyQXV0b0hpZGRlbiIsIl9jbGFzc05hbWVTY3JvbGxiYXJDb3JuZXIiLCJfY2xhc3NOYW1lU2Nyb2xsYmFyQ29ybmVyUmVzaXplIiwiX2NsYXNzTmFtZVNjcm9sbGJhckNvcm5lclJlc2l6ZUIiLCJfY2xhc3NOYW1lU2Nyb2xsYmFyQ29ybmVyUmVzaXplSCIsIl9jbGFzc05hbWVTY3JvbGxiYXJDb3JuZXJSZXNpemVWIiwiX2NsYXNzTmFtZVNjcm9sbGJhckhvcml6b250YWwiLCJfY2xhc3NOYW1lU2Nyb2xsYmFyVmVydGljYWwiLCJfY2xhc3NOYW1lRHJhZ2dpbmciLCJfY2xhc3NOYW1lVGhlbWVOb25lIiwiX2NsYXNzTmFtZXNEeW5hbWljRGVzdHJveSIsIl9jYWxsYmFja3NJbml0UWV1ZXVlIiwiX3ZpZXdwb3J0QXR0cnNGcm9tVGFyZ2V0IiwiX2V4dGVuc2lvbnMiLCJfZXh0ZW5zaW9uc1ByaXZhdGVNZXRob2RzIiwiX3N3YWxsb3dlZFVwZGF0ZUhpbnRzIiwiX3N3YWxsb3dVcGRhdGVMYWciLCJfdXBkYXRlT25Mb2FkRXZlbnROYW1lIiwiX3VwZGF0ZU9uTG9hZEVsbXMiLCJfdXBkYXRlQXV0b0NhY2hlIiwiX211dGF0aW9uT2JzZXJ2ZXJBdHRyc1RleHRhcmVhIiwiX211dGF0aW9uT2JzZXJ2ZXJBdHRyc0hvc3QiLCJfZGVzdHJveUV2ZW50cyIsInNsZWVwIiwiZm9yY2UiLCJhdHRyc0NoYW5nZWQiLCJjb250ZW50U2l6ZUMiLCJkb1VwZGF0ZUF1dG8iLCJtdXRIb3N0IiwibXV0Q29udGVudCIsIm1lYW5pbmdmdWxBdHRyc0NoYW5nZWQiLCJ1cGRhdGVBdXRvQ29udGVudFNpemVDaGFuZ2VkIiwiX2NvbnRlbnRTaXplQ2hhbmdlZCIsIl9jaGFuZ2VkT3B0aW9ucyIsInRha2VSZWNvcmRzIiwiX2hvc3RTaXplQ2hhbmdlZCIsIl9mb3JjZSIsInVwZGF0ZUVsZW1lbnRzT25Mb2FkIiwibmV3T3B0aW9ucyIsImNoYW5nZWRPcHMiLCJvcHRpb24iLCJnZXRPYmplY3RQcm9wVmFsIiwic2V0T2JqZWN0UHJvcFZhbCIsInNldE9wdGlvbnMiLCJkZXN0cm95IiwiZXh0TmFtZSIsImRpc2Nvbm5lY3RNdXRhdGlvbk9ic2VydmVycyIsInNldHVwUmVzaXplT2JzZXJ2ZXIiLCJyZW1vdmVFeHQiLCJwb3AiLCJzZXR1cEhvc3RNb3VzZVRvdWNoRXZlbnRzIiwic2V0dXBTY3JvbGxiYXJzRE9NIiwic2V0dXBTY3JvbGxiYXJDb3JuZXJET00iLCJzZXR1cFN0cnVjdHVyZURPTSIsInVwZGF0ZU9uTG9hZENhbGxiYWNrIiwiZGlzcGF0Y2hDYWxsYmFjayIsInNjcm9sbCIsImNvb3JkaW5hdGVzIiwiaW5mb1giLCJpbmZvWSIsIm5vcm1hbGl6ZUludmVydCIsIm5vcm1hbGl6ZU5lZ2F0ZSIsInNjcm9sbFgiLCJfY3VycmVudFNjcm9sbCIsInNjcm9sbFhSYXRpbyIsIl9jdXJyZW50U2Nyb2xsUmF0aW8iLCJtYXhTY3JvbGxYIiwiX21heFNjcm9sbCIsInJhdGlvIiwiaGFuZGxlT2Zmc2V0IiwiX2hhbmRsZU9mZnNldCIsImhhbmRsZUxlbmd0aCIsIl9oYW5kbGVMZW5ndGgiLCJoYW5kbGVMZW5ndGhSYXRpbyIsIl9oYW5kbGVMZW5ndGhSYXRpbyIsInRyYWNrTGVuZ3RoIiwiX3RyYWNrTGVuZ3RoIiwic25hcHBlZEhhbmRsZU9mZnNldCIsIl9zbmFwcGVkSGFuZGxlT2Zmc2V0IiwiaXNSVEwiLCJpc1JUTE5vcm1hbGl6ZWQiLCJkb1Njcm9sbExlZnQiLCJkb1Njcm9sbFRvcCIsImFuaW1hdGlvbk9wdGlvbnMiLCJzZXR0aW5nc0F4aXMiLCJzZXR0aW5nc1Njcm9sbCIsInNldHRpbmdzQmxvY2siLCJzZXR0aW5nc01hcmdpbiIsImZpbmFsRWxlbWVudCIsImNvb3JkaW5hdGVzWEF4aXNQcm9wcyIsImNvb3JkaW5hdGVzWUF4aXNQcm9wcyIsImNvb3JkaW5hdGVzT3BlcmF0b3JzIiwiZHVyYXRpb25Jc09iamVjdCIsImNvbXBsZXRlQ2FsbGJhY2siLCJmaW5hbFNjcm9sbCIsInN0ckVuZCIsInN0ckJlZ2luIiwic3RyQ2VudGVyIiwic3RyTmVhcmVzdCIsInN0ckFsd2F5cyIsInN0ck5ldmVyIiwic3RySWZOZWVkZWQiLCJzdHJMZW5ndGgiLCJlbGVtZW50T2JqU2V0dGluZ3NBeGlzVmFsdWVzIiwiZWxlbWVudE9ialNldHRpbmdzQmxvY2tWYWx1ZXMiLCJlbGVtZW50T2JqU2V0dGluZ3NTY3JvbGxWYWx1ZXMiLCJjb29yZGluYXRlc0lzRWxlbWVudE9iaiIsInBvc3NpYmxlRWxlbWVudCIsInBvc3NpYmxlRWxlbWVudElzSlF1ZXJ5IiwicG9zc2libGVFbGVtZW50SXNIVE1MRWxlbWVudCIsInVwZGF0ZVNjcm9sbGJhckluZm9zIiwicmVmcmVzaFNjcm9sbGJhckhhbmRsZU9mZnNldCIsInByb3h5Q29tcGxldGVDYWxsYmFjayIsImNoZWNrU2V0dGluZ3NTdHJpbmdWYWx1ZSIsImN1cnJWYWx1ZSIsImFsbG93ZWRWYWx1ZXMiLCJnZXRSYXdTY3JvbGwiLCJpc1giLCJjb29yZGluYXRlUHJvcHMiLCJnZXRGaW5hbFNjcm9sbCIsInJhd1Njcm9sbCIsIm9wZXJhdG9yIiwiYW1vdW50IiwicG9zc2libGVPcGVyYXRvciIsImlzU3RyaW5nIiwic2Nyb2xsSW5mbyIsImN1cnJTY3JvbGwiLCJtYXhTY3JvbGwiLCJtdWx0IiwiaXNSVExpc1giLCJub3JtYWxpemVTaG9ydGN1dHMiLCJzdHJSZXBsYWNlIiwiZXZhbEZ1bmMiLCJldmFsIiwic3Vic3RyIiwicGFyc2VUb1plcm9Pck51bWJlciIsImlzTmFOIiwidG9GaXhlZCIsIm5vcm1hbGl6ZUlzUlRMaXNYIiwib3BlcmF0b3JDdXJyU2Nyb2xsIiwiaW52ZXJ0IiwibmVnYXRlIiwiZ2V0UGVyQXhpc1ZhbHVlIiwidmFsdWVJbnRlcm5hbFR5cGUiLCJkZWZhdWx0VmFsdWUiLCJ2YWx1ZUFyckxlbmd0aCIsInZhbHVlQXJySXRlbSIsInJlc3VsdERlZmF1bHQiLCJ2YWx1ZVR5cGUiLCJnZW5lcmF0ZU1hcmdpbiIsIm1hcmdpblRvcFJpZ2h0Qm90dG9tTGVmdEFycmF5IiwiY3VyclZhbHVlVHlwZSIsInZhbHVlRGlyZWN0aW9ucyIsIm1hcmdpbkxlbmd0aCIsIm1hcmdpbiIsImF4aXMiLCJibG9jayIsIm1hcmdpbkRlZmF1bHQiLCJtYXJnaW5UeXBlIiwidmlld3BvcnRTY3JvbGwiLCJ2aWV3cG9ydE9mZnNldCIsImVsZW1lbnRPZmZzZXQiLCJkb05vdFNjcm9sbCIsImVsZW1lbnRTY3JvbGxDb29yZGluYXRlcyIsIm1lYXN1cmluZ0VsbSIsInJhd0VsZW1lbnRTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJlbGVtZW50U2l6ZSIsImZpbmFsaXplQmxvY2siLCJ2YXJzIiwiZ2V0U2Nyb2xsYmFyVmFycyIsIndoIiwiX3dfaCIsImx0IiwiX2xlZnRfdG9wIiwieHkiLCJfeF95IiwiYmxvY2tJc0VuZCIsImJsb2NrSXNDZW50ZXIiLCJibG9ja0lzTmVhcmVzdCIsInNjcm9sbE5ldmVyIiwic2Nyb2xsSWZOZWVkZWQiLCJ2cFNpemUiLCJ2cE9mZnNldCIsImVsU2l6ZSIsImVsT2Zmc2V0IiwiZGl2aWRlIiwiZWxlbWVudENlbnRlck9mZnNldCIsInZpZXdwb3J0Q2VudGVyT2Zmc2V0IiwiaXNJblZpZXciLCJzY3JvbGxTdG9wIiwicGFyYW0xIiwicGFyYW0yIiwicGFyYW0zIiwiZ2V0RWxlbWVudHMiLCJlbGVtZW50TmFtZSIsImhvc3QiLCJwYWRkaW5nIiwidmlld3BvcnQiLCJjb250ZW50Iiwic2Nyb2xsYmFySG9yaXpvbnRhbCIsInNjcm9sbGJhciIsInRyYWNrIiwiaGFuZGxlIiwic2Nyb2xsYmFyVmVydGljYWwiLCJzY3JvbGxiYXJDb3JuZXIiLCJnZXRTdGF0ZSIsInN0YXRlUHJvcGVydHkiLCJwcmVwYXJlIiwiZXh0ZW5kZWQiLCJleHRlbmREZWVwIiwiY2hhbmdlUHJvcGVydHlOYW1lIiwiZGVzdHJveWVkIiwic2xlZXBpbmciLCJ3aWR0aEF1dG8iLCJoZWlnaHRBdXRvIiwib3ZlcmZsb3dBbW91bnQiLCJoaWRlT3ZlcmZsb3ciLCJoYXNPdmVyZmxvdyIsImNvbnRlbnRTY3JvbGxTaXplIiwidmlld3BvcnRTaXplIiwiaG9zdFNpemUiLCJkb2N1bWVudE1peGVkIiwiZXh0IiwicHJpdmF0ZU1ldGhvZHMiLCJhZGRFeHQiLCJleHRlbnNpb25PcHRpb25zIiwiaW5zdGFuY2VBZGRlZCIsImluc3RhbmNlQ29udHJhY3QiLCJjb250cmFjdFJlc3VsdCIsInJlZ2lzdGVyZWRFeHRlbnNpb25PYmoiLCJleHRlbnNpb24iLCJjb250cmFjdEZ1bGZpbGxlZCIsImV4dGVuc2lvbkZhY3RvcnkiLCJjb250cmFjdCIsImFkZGVkIiwiaW5zdGFuY2VSZW1vdmVkIiwicmVtb3ZlZCIsInZhbGlkIiwiY29uc3RydWN0Iiwic2V0dXBSZXNwb25zaXZlRXZlbnRMaXN0ZW5lciIsImVsZW1lbnQiLCJldmVudE5hbWVzIiwibGlzdGVuZXIiLCJwYXNzaXZlT3JPcHRpb25zIiwiY29sbGVjdGVkIiwibWV0aG9kIiwib25PZmYiLCJldmVudHMiLCJwYXNzaXZlT3JPcHRpb25zSXNPYmoiLCJwYXNzaXZlIiwiX3Bhc3NpdmUiLCJjYXB0dXJlIiwiX2NhcHR1cmUiLCJuYXRpdmVQYXJhbSIsImFkZERlc3Ryb3lFdmVudExpc3RlbmVyIiwidGFyZ2V0RWxlbWVudCIsIm9uRWxlbWVudFJlc2l6ZWRDYWxsYmFjayIsInJlc2l6ZU9ic2VydmVyIiwic3RyQW5pbWF0aW9uU3RhcnRFdmVudCIsInN0ckNoaWxkTm9kZXMiLCJjb25zdFNjcm9sbCIsImdlbmVyYXRlRGl2Iiwib2JzZXJ2ZSIsImRpciIsInN0eWxlIiwiaXNEaXJ0eSIsInJBRklkIiwiY3VycldpZHRoIiwiY3VyckhlaWdodCIsIm9ic2VydmVyRWxlbWVudCIsInNocmlua0VsZW1lbnQiLCJleHBhbmRFbGVtZW50IiwiZXhwYW5kRWxlbWVudENoaWxkIiwid2lkdGhDYWNoZSIsImhlaWdodENhY2hlIiwiZmFjdG9yIiwicmVzZXQiLCJvblJlc2l6ZWQiLCJleHBhbmRDaGlsZENTUyIsIm9ic2VydmVyRWxlbWVudENTUyIsInNldFRvcFJpZ2h0Qm90dG9tTGVmdCIsImlzSUUiLCJmaW5kRmlyc3QiLCJvbmxvYWQiLCJ3bmQiLCJjb250ZW50RG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsImRpcmVjdGlvbkNoYW5nZWQiLCJzY3JvbGxMZWZ0VmFsdWUiLCJyZXNpemVPYnNlcnZlck9iaiIsImRpc2Nvbm5lY3QiLCJjcmVhdGVNdXRhdGlvbk9ic2VydmVycyIsIm11dGF0aW9uVGFyZ2V0IiwibXV0YXRpb25BdHRyTmFtZSIsIm11dGF0aW9uSXNDbGFzcyIsIm9sZE11dGF0aW9uVmFsIiwibmV3Q2xhc3NWYWwiLCJob3N0Q2xhc3NOYW1lUmVnZXgiLCJjb250ZW50VGltZW91dCIsInNpemVBdXRvIiwiYWN0aW9uIiwibXV0YXRpb25PYnNlcnZlckNvbnRlbnRMYWciLCJtdXRhdGlvbk9ic2VydmVyIiwiY29udGVudExhc3RVcGRhdGUiLCJtdXRhdGlvbnMiLCJkb1VwZGF0ZSIsImlzVW5rbm93bk11dGF0aW9uIiwidGV4dGFyZWFVcGRhdGUiLCJtdXRhdGlvbiIsImRvVXBkYXRlRm9yY2UiLCJtdXRhdGVkQXR0cnMiLCJhdHRyaWJ1dGVOYW1lIiwib2xkVmFsdWUiLCJjcmVhdGVIb3N0Q2xhc3NOYW1lUmVnRXhwIiwiZmlsdGVyIiwiaG9zdENsYXNzTmFtZXNDaGFuZ2VkIiwidXBkYXRlVmlld3BvcnRBdHRyc0Zyb21UYXJnZXQiLCJjb25uZWN0TXV0YXRpb25PYnNlcnZlcnMiLCJhdHRyaWJ1dGVzIiwiYXR0cmlidXRlT2xkVmFsdWUiLCJhdHRyaWJ1dGVGaWx0ZXIiLCJzdWJ0cmVlIiwiY2hpbGRMaXN0IiwiY2hhcmFjdGVyRGF0YSIsImhvc3RPblJlc2l6ZWQiLCJjaGFuZ2VkIiwiY2hlY2tDYWNoZSIsImhvc3RPbk1vdXNlRW50ZXIiLCJyZWZyZXNoU2Nyb2xsYmFyc0F1dG9IaWRlIiwiaG9zdE9uTW91c2VMZWF2ZSIsImhvc3RPbk1vdXNlTW92ZSIsImRvY3VtZW50T25TZWxlY3RTdGFydCIsImVsbSIsImVhY2hVcGRhdGVPbkxvYWQiLCJ1cGRhdGVPbkxvYWRTZWxlY3RvciIsImJvZHlNaW5TaXplQ2hhbmdlZCIsImJvZHlNaW5TaXplIiwib2xkQ2xhc3NOYW1lcyIsIm5ld0NsYXNzTmFtZXMiLCJyZWdleCIsImN1cnJDbGFzc2VzIiwiZGlmZiIsImdldEFycmF5RGlmZmVyZW5jZXMiLCJpZHgiLCJtdXRhdGlvblR5cGUiLCJzdHJDbG9zZXN0IiwiZmxvYXQiLCJib2R5TWluU2l6ZUMiLCJjb250ZW50RWxlbWVudFNjcm9sbFNpemUiLCJjb250ZW50TWVhc3VyZUVsZW1lbnQiLCJnZXRDb250ZW50TWVhc3VyZUVsZW1lbnQiLCJ0ZXh0YXJlYVZhbHVlTGVuZ3RoIiwic2V0Q1NTIiwiY3VyciIsImNhY2hlIiwiY2hhbmdlZEF0dHJzIiwiY2hlY2tzIiwiX2VsZW0iLCJfYXR0cnMiLCJjaGVjayIsImlzU2l6ZUFmZmVjdGluZ0NTU1Byb3BlcnR5IiwicHJvcGVydHlOYW1lIiwiZmxleEJhc2lzIiwiYWZmZWN0aW5nUHJvcHNYIiwiYWZmZWN0aW5nUHJvcHNYQ29udGVudEJveCIsImFmZmVjdGluZ1Byb3BzWSIsImFmZmVjdGluZ1Byb3BzWUNvbnRlbnRCb3giLCJfc3RyUyIsIl9zdHJWUyIsImNoZWNrWCIsInNpemVJc0FmZmVjdGVkIiwiY2hlY2tQcm9wZXJ0eU5hbWUiLCJhdHRycyIsInRhcmdldEF0dHIiLCJvcmlnV2lkdGgiLCJvcmlnSGVpZ2h0Iiwid3JhcEF0dHJPZmYiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsImRvTWVhc3VyZSIsIl9vcmlnaW5hbFdpZHRoIiwiX29yaWdpbmFsSGVpZ2h0IiwiX2R5bmFtaWNXaWR0aCIsIl9keW5hbWljSGVpZ2h0IiwidXBkYXRlSGludHMiLCJkaXNwbGF5SXNIaWRkZW4iLCJob3N0U2l6ZUNoYW5nZWQiLCJjb250ZW50U2l6ZUNoYW5nZWQiLCJjaGFuZ2VkT3B0aW9ucyIsInN3YWxsb3ciLCJjaGVja0NhY2hlQXV0b0ZvcmNlIiwiY3VycmVudFByZXBhcmVkT3B0aW9uc1Njcm9sbGJhcnMiLCJjdXJyZW50UHJlcGFyZWRPcHRpb25zVGV4dGFyZWEiLCJzY3JvbGxiYXJzVmlzaWJpbGl0eSIsInNjcm9sbGJhcnNWaXNpYmlsaXR5Q2hhbmdlZCIsInNjcm9sbGJhcnNBdXRvSGlkZSIsInNjcm9sbGJhcnNBdXRvSGlkZUNoYW5nZWQiLCJzY3JvbGxiYXJzQ2xpY2tTY3JvbGxpbmciLCJzY3JvbGxiYXJzQ2xpY2tTY3JvbGxpbmdDaGFuZ2VkIiwic2Nyb2xsYmFyc0RyYWdTY3JvbGxpbmciLCJzY3JvbGxiYXJzRHJhZ1Njcm9sbGluZ0NoYW5nZWQiLCJjbGFzc05hbWVDaGFuZ2VkIiwicmVzaXplQ2hhbmdlZCIsInBhZGRpbmdBYnNvbHV0ZUNoYW5nZWQiLCJjbGlwQWx3YXlzQ2hhbmdlZCIsInNpemVBdXRvQ2FwYWJsZUNoYW5nZWQiLCJpZ25vcmVPdmVybGF5U2Nyb2xsYmFySGlkaW5nIiwiaWdub3JlT3ZlcmxheVNjcm9sbGJhckhpZGluZ0NoYW5nZWQiLCJhdXRvVXBkYXRlQ2hhbmdlZCIsIm92ZXJmbG93QmVoYXZpb3JDaGFuZ2VkIiwidGV4dGFyZWFEeW5XaWR0aCIsInRleHRhcmVhRHluV2lkdGhDaGFuZ2VkIiwidGV4dGFyZWFEeW5IZWlnaHQiLCJ0ZXh0YXJlYUR5bkhlaWdodENoYW5nZWQiLCJvbGRTaXplIiwibmV3U2l6ZSIsInNpemVBdXRvT2JzZXJ2ZXJFbGVtZW50QkNSZWN0IiwidGV4dGFyZWFBdXRvV3JhcHBpbmciLCJ0ZXh0YXJlYUF1dG9XcmFwcGluZ0NoYW5nZWQiLCJjc3NEaXJlY3Rpb24iLCJjc3NEaXJlY3Rpb25DaGFuZ2VkIiwiYm94U2l6aW5nIiwiYm94U2l6aW5nQ2hhbmdlZCIsImdldFRvcFJpZ2h0Qm90dG9tTGVmdEhvc3QiLCJpc1JUTExlZnQiLCJpc1JUTFJpZ2h0Iiwid2lkdGhBdXRvUmVzaXplRGV0ZWN0aW9uIiwid2lkdGhBdXRvT2JzZXJ2ZXJEZXRlY3Rpb24iLCJyaWdodCIsInRtcEN1cnJIb3N0V2lkdGgiLCJ0bXBDdXJyQ29udGVudEdsdWVXaWR0aCIsInRtcE5ld0hvc3RXaWR0aCIsIndpZHRoQXV0b0NoYW5nZWQiLCJ3YXNXaWR0aEF1dG8iLCJib3R0b20iLCJoZWlnaHRBdXRvQ2hhbmdlZCIsIndhc0hlaWdodEF1dG8iLCJib3JkZXIiLCJjb250ZW50RWxlbWVudENTUyIsImNvbnRlbnRHbHVlRWxlbWVudENTUyIsImdldEhvc3RTaXplIiwiZ2V0Vmlld3BvcnRTaXplIiwicGFkZGluZ0Fic29sdXRlWCIsInIiLCJwYWRkaW5nQWJzb2x1dGVZIiwicGFkZGluZ0VsZW1lbnRDU1MiLCJ0ZXh0YXJlYUNTUyIsInBhZGRpbmdWYWx1ZXMiLCJ0ZXh0YXJlYVNpemUiLCJ0ZXh0YXJlYVNpemVDaGFuZ2VkIiwidGV4dGFyZWFEeW5PcmlnU2l6ZSIsInN0ck92ZXJmbG93WCIsInN0ck92ZXJmbG93WSIsInN0clZpc2libGUiLCJ2aWV3cG9ydEVsZW1lbnRSZXNldENTUyIsInJlc2V0WFRtcCIsInlzIiwicmVzZXRCb3R0b21UbXAiLCJ4cyIsImNvbnRlbnRTaXplIiwiaG9zdEFic29sdXRlUmVjdFNpemUiLCJjb250ZW50R2x1ZVNpemUiLCJ0ZXh0YXJlYUNvdmVyQ1NTIiwic2V0Q29udGVudEdsdWVFbGVtZW50Q1NTZnVuY3Rpb24iLCJob3Jpem9udGFsIiwic2Nyb2xsYmFyVmFycyIsInN0cldIIiwiX3dpZHRoX2hlaWdodCIsImF1dG9TaXplIiwiYm9yZGVyU2l6ZSIsInBhZGRpbmdTaXplIiwibWFyZ2luU2l6ZSIsImhpZGVPdmVyZmxvd0ZvcmNlVGV4dGFyZWEiLCJwcmV2aW91c092ZXJmbG93QW1vdW50Iiwib3ZlcmZsb3dCZWhhdmlvcklzVlMiLCJvdmVyZmxvd0JlaGF2aW9ySXNWSCIsIm92ZXJmbG93QmVoYXZpb3JJc1MiLCJjYW5TY3JvbGwiLCJ2aWV3cG9ydFJlY3QiLCJzZXRPdmVyZmxvd1ZhcmlhYmxlcyIsInh5SSIsIndpZHRoSGVpZ2h0Iiwic2Nyb2xsTWF4IiwiX0xlZnRfVG9wIiwiZnJhY3Rpb25hbE92ZXJmbG93QW1vdW50IiwiY2hlY2tGcmFjdGlvbmFsT3ZlcmZsb3dBbW91bnQiLCJzZXRDb250ZW50RWxlbWVudENTUyIsImJvcmRlckRlc2lnbiIsImNvbnRlbnRBcnJhbmdlRWxlbWVudENTUyIsImFycmFuZ2VDb250ZW50IiwiYXJyYW5nZUNoYW5nZWQiLCJzY3JvbGxiYXJWYXJzSW52ZXJ0ZWQiLCJzdHJEaXJlY3Rpb24iLCJpbnZlcnRlZEF1dG9TaXplIiwiYWRkUmVtb3ZlQ2xhc3MiLCJzZXRWaWV3cG9ydENTUyIsInZpZXdwb3J0RWxlbWVudENTUyIsIlhZIiwiX1hfWSIsImVsZW1lbnRTdHlsZSIsIndlYmtpdFRyYW5zZm9ybSIsImZsb2F0VG1wIiwicG9zTGVmdFdpdGhvdXRGbG9hdCIsInRleHRhcmVhSW5mbyIsImdldFRleHRhcmVhSW5mbyIsInRleHRhcmVhUm93c0NoYW5nZWQiLCJfcm93cyIsImN1cnNvclJvdyIsIl9jdXJzb3JSb3ciLCJjdXJzb3JDb2wiLCJfY3Vyc29yQ29sdW1uIiwid2lkZXN0Um93IiwiX3dpZGVzdFJvdyIsImxhc3RSb3ciLCJsYXN0Q29sIiwiX2NvbHVtbnMiLCJjdXJzb3JJc0xhc3RQb3NpdGlvbiIsIl9jdXJzb3JQb3NpdGlvbiIsIl9jdXJzb3JNYXgiLCJ0ZXh0YXJlYVNjcm9sbEFtb3VudCIsInNjcm9sbGJhcnNWaXNpYmlsaXR5VmlzaWJsZSIsInNjcm9sbGJhcnNWaXNpYmlsaXR5SGlkZGVuIiwic2Nyb2xsYmFyc1Zpc2liaWxpdHlBdXRvIiwicmVmcmVzaFNjcm9sbGJhcnNWaXNpYmlsaXR5Iiwic2hvd1giLCJzaG93WSIsInJlZnJlc2hTY3JvbGxiYXJBcHBlYXJhbmNlIiwicmVmcmVzaFNjcm9sbGJhckhhbmRsZUxlbmd0aCIsInJlZnJlc2hTY3JvbGxiYXJzSW50ZXJhY3RpdmUiLCJ4U2Nyb2xsYWJsZSIsInlTY3JvbGxhYmxlIiwiY2xpcHBlZCIsImZvcmNlZCIsInZhbGlkYXRlZE9wdHMiLCJzdHJQYXJlbnQiLCJjbGFzc05hbWVSZXNpemVPYnNlcnZlckhvc3QiLCJjbGFzc05hbWVUZXh0YXJlYUVsZW1lbnRGdWxsIiwidGV4dGFyZWFDbGFzcyIsImFkb3B0QXR0cnMiLCJhZG9wdEF0dHJzTWFwIiwiYXBwbHlBZG9wdGVkQXR0cnMiLCJhcHBseUFkb3B0ZWRBdHRyc0VsbSIsImhvc3RFbGVtZW50Q2xhc3NOYW1lcyIsImhvc3RFbGVtZW50Q1NTIiwic2VsZWN0T3JHZW5lcmF0ZURpdkJ5Q2xhc3MiLCJzZXR1cFN0cnVjdHVyZUV2ZW50cyIsInRleHRhcmVhVXBkYXRlSW50ZXJ2YWxJRCIsInNjcm9sbFN0b3BUaW1lb3V0SWQiLCJ0ZXh0YXJlYUtleURvd25SZXN0cmljdGVkS2V5Q29kZXMiLCJ0ZXh0YXJlYUtleURvd25LZXlDb2Rlc0xpc3QiLCJzY3JvbGxTdG9wRGVsYXkiLCJzdHJGb2N1cyIsInVwZGF0ZVRleHRhcmVhIiwiZG9DbGVhckludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInRleHRhcmVhT25TY3JvbGwiLCJ0ZXh0YXJlYU9uRHJvcCIsInRleHRhcmVhT25Gb2N1cyIsInRleHRhcmVhT25Gb2N1c291dCIsInRleHRhcmVhT25LZXlEb3duIiwia2V5Q29kZSIsInNldEludGVydmFsIiwidGV4dGFyZWFPbktleVVwIiwiY29udGVudE9uVHJhbnNpdGlvbkVuZCIsInZpZXdwb3J0T25TY3JvbGwiLCJuYXRpdmVPdmVybGF5U2Nyb2xsYmFyc0FyZUFjdGl2ZSIsImhvcml6b250YWxFbGVtZW50cyIsInZlcnRpY2FsRWxlbWVudHMiLCJzZWxlY3RPckdlbmVyYXRlU2Nyb2xsYmFyRE9NIiwiaXNIb3Jpem9udGFsIiwiX3Njcm9sbGJhciIsIl90cmFjayIsIl9oYW5kbGUiLCJyZXNldFNjcm9sbGJhckRPTSIsInNldHVwU2Nyb2xsYmFyRXZlbnRzIiwidHJhY2tUaW1lb3V0IiwibW91c2VEb3duU2Nyb2xsIiwibW91c2VEb3duT2Zmc2V0IiwibW91c2VEb3duSW52ZXJ0ZWRTY2FsZSIsInNjcm9sbGJhclZhcnNJbmZvIiwiX2luZm8iLCJpbnNpZGVJRnJhbWUiLCJzdHJBY3RpdmUiLCJzdHJTbmFwSGFuZGxlIiwic3RyQ2xpY2tFdmVudCIsInNjcm9sbER1cmF0aW9uRmFjdG9yIiwiaW5jcmVhc2VEZWNyZWFzZVNjcm9sbEFtb3VudEtleUNvZGVzIiwiZ2V0UG9pbnRlclBvc2l0aW9uIiwiZ2V0UHJlcGFyZWRTY3JvbGxiYXJzT3B0aW9uIiwiaW5jcmVhc2VUcmFja1Njcm9sbEFtb3VudCIsImRlY3JlYXNlVHJhY2tTY3JvbGxBbW91bnQiLCJzdG9wQ2xpY2tFdmVudFByb3BhZ2F0aW9uIiwiZG9jdW1lbnRLZXlEb3duIiwiZG9jdW1lbnRLZXlVcCIsIm9uTW91c2VUb3VjaERvd25Db250aW51ZSIsImlzVG91Y2hFdmVudCIsImRvY3VtZW50RHJhZ01vdmUiLCJzY3JvbGxEZWx0YSIsImlzRmluaXRlIiwiZG9jdW1lbnRNb3VzZVRvdWNoVXAiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9uSGFuZGxlTW91c2VUb3VjaERvd24iLCJvbkhhbmRsZU1vdXNlVG91Y2hEb3duQWN0aW9uIiwiZ2V0SG9zdEVsZW1lbnRJbnZlcnRlZFNjYWxlIiwib25UcmFja01vdXNlVG91Y2hEb3duIiwiZGVjcmVhc2VTY3JvbGwiLCJoYW5kbGVUb1ZpZXdwb3J0UmF0aW8iLCJzY3JvbGxEaXN0YW5jZSIsInNjcm9sbEJhc2VEdXJhdGlvbiIsInNjcm9sbEZpcnN0SXRlcmF0aW9uRGVsYXkiLCJ0cmFja09mZnNldCIsImN0cmxLZXkiLCJpbnN0YW50U2Nyb2xsIiwic2hpZnRLZXkiLCJpbnN0YW50U2Nyb2xsVHJhbnNpdGlvbiIsImlzRmlyc3RJdGVyYXRpb24iLCJzY3JvbGxBY3Rpb25GaW5zaXNoZWQiLCJ0cmFuc2l0aW9uIiwic2Nyb2xsQWN0aW9uSW5zdGFudEZpbmlzaGVkIiwic2Nyb2xsQWN0aW9uIiwibW91c2VPZmZzZXQiLCJzY3JvbGxSYW5nZSIsInNjcm9sbER1cmF0aW9uIiwidGltZW91dERlbGF5IiwiaW5zdGFudFNjcm9sbFBvc2l0aW9uIiwicnRsSXNOb3JtYWwiLCJkZWNyZWFzZVNjcm9sbENvbmRpdGlvbiIsInNjcm9sbE9iaiIsImFuaW1hdGlvbk9iaiIsIm9uVHJhY2tNb3VzZVRvdWNoRW50ZXIiLCJvblRyYWNrTW91c2VUb3VjaExlYXZlIiwib25TY3JvbGxiYXJNb3VzZVRvdWNoRG93biIsInNoYWxsQmVWaXNpYmxlIiwic2Nyb2xsYmFyRWxlbWVudCIsImRlbGF5ZnJlZSIsImFueUFjdGl2ZSIsImhhbmRsZUNTUyIsImRpZ2l0IiwiaGFuZGxlUmF0aW8iLCJmbG9vciIsIl9XaWR0aF9IZWlnaHQiLCJzY3JvbGxPclRyYW5zaXRpb24iLCJ0cmFuc2Zvcm1PZmZzZXQiLCJ0cmFuc2xhdGVWYWx1ZSIsInRyYW5zaXRpb25EdXJhdGlvbiIsImlzUlRMaXNIb3Jpem9udGFsIiwic3RyVHJhbnNsYXRlQnJhY2UiLCJzdHJUcmFuc2Zvcm0iLCJzdHJUcmFuc2l0aW9uIiwibmF0aXZlU2Nyb2xsIiwiY3VycmVudFNjcm9sbCIsImhhbmRsZVRyYWNrRGlmZiIsImdldFNjcm9sbFJhdGlvIiwiZ2V0SGFuZGxlT2Zmc2V0Iiwic2Nyb2xsUmF0aW8iLCJnZXRDU1NUcmFuc2l0aW9uU3RyaW5nIiwiaXNUcmFjayIsImVsZW1lbnQyIiwiX2xfdCIsInNldHVwU2Nyb2xsYmFyQ29ybmVyRXZlbnRzIiwicmVjb25uZWN0TXV0YXRpb25PYnNlcnZlciIsIm1vdXNlRG93blBvc2l0aW9uIiwibW91c2VEb3duU2l6ZSIsInBhZ2VPZmZzZXQiLCJnZXRDb29yZGluYXRlcyIsImV2ZW50SXNUcnVzdGVkIiwicmVsZWFzZUNhcHR1cmUiLCJzY3JlZW5YIiwic2NyZWVuWSIsInNldENhcHR1cmUiLCJhcmdzIiwiZGVwZW5kZW50IiwiZXh0ZW5zaW9uT25OYW1lIiwidGFyZ2V0Q1NTT2JqZWN0IiwicHJlZml4IiwiemVyb1giLCJ6ZXJvWSIsInRyYW5zaXRpb25TdHIiLCJhc3NlbWJsZWRWYWx1ZSIsInN0clJlc3VsdCIsInZhbHVlQXJyYXkiLCJyZWdFeHBTdHJpbmciLCJyZWdFeHBNYWluIiwiUmVnRXhwIiwicmVnRXhwVmFsaWRhdGUiLCJwcm9wZXJ0aWVzIiwic3BsaXRDc3NTdHlsZUJ5Q29tbWEiLCIkMSIsIndpdGhDdXJyQ2xhc3NOYW1lT3B0aW9uIiwid2l0aE9sZENsYXNzTmFtZU9wdGlvbiIsImFwcGVuZGl4IiwiYXBwZW5kQ2xhc3NlcyIsImNvbmRpdGlvbiIsInN0ck93bmVyRG9jdW1lbnQiLCJzdHJIVE1MRWxlbWVudCIsInBhcmVudFdpbmRvdyIsIm5vZGVOYW1lIiwiYTEiLCJhMiIsImsiLCJ0b0Zsb2F0IiwibnVtIiwidGV4dGFyZWFDdXJzb3JQb3NpdGlvbiIsInNlbGVjdGlvblN0YXJ0Iiwicm93Q29scyIsInRleHRhcmVhVmFsdWUiLCJ0ZXh0YXJlYUxlbmd0aCIsInRleHRhcmVhUm93U3BsaXQiLCJ0ZXh0YXJlYUxhc3RSb3ciLCJ0ZXh0YXJlYUN1cnJlbnRDdXJzb3JSb3dTcGxpdCIsInRleHRhcmVhTGFzdENvbCIsImNsYXNzZXNPckF0dHJzIiwic2VsZWN0UGFyZW50T3JPbmx5Q2hpbGRyZW4iLCJvbmx5Q2hpbGRyZW4iLCJzZWxlY3RQYXJlbnQiLCJwYXRoIiwic3BsaXRzIiwic3BsaXRzTGVuZ3RoIiwiZXh0ZW5kT2JqIiwiZXh0ZW5kT2JqUm9vdCIsImN1cnJlbnQiLCJkb0FkZCIsImluaXRCb2R5U2Nyb2xsIiwiX2JvZHlNb3VzZVRvdWNoRG93bkxpc3RlbmVyIiwiYm9keU1vdXNlVG91Y2hEb3duTGlzdGVuZXIiLCJhY3RpdmVFbGVtZW50IiwiZm9jdXMiLCJwbHVnaW5UYXJnZXRFbGVtZW50cyIsIm9wdHNJc1BsYWluT2JqIiwibmV3RGVmYXVsdE9wdGlvbnMiLCJjdXJyRGVmYXVsdE9wdGlvbnMiLCJvc0luc3RhbmNlIiwiZXh0ZW5zaW9uTmFtZSIsImV4dE5hbWVUeXBlU3RyaW5nIiwiZm4iLCJvdmVybGF5U2Nyb2xsYmFycyIsIl9lbGVtZW50cyIsImZhY3RvcnkiLCJ1bmRlZmluZWQiLCJPdmVybGF5U2Nyb2xsYmFycyIsIk92ZXJsYXlTY3JvbGxiYXJzQ29tcG9uZW50IiwiX2EiLCJfYSRvcHRpb25zIiwicmVzdCIsIm9zVGFyZ2V0UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwibWVyZ2VIb3N0Q2xhc3NOYW1lcyIsImFzc2lnbiIsInJlZiIsIm9zQ2xhc3NOYW1lcyJdLCJzb3VyY2VSb290IjoiIn0=
