'use strict'
;(self.webpackChunkreact_big_calendar =
  self.webpackChunkreact_big_calendar || []).push([
  [140],
  {
    './node_modules/@storybook/components/dist/esm/Color-f953d088.js':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            ColorControl: function () {
              return ColorControl
            },
            default: function () {
              return ColorControl
            },
          })
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
          __webpack_require__(
            './node_modules/core-js/modules/es.object.keys.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.join.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.filter.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.object.to-string.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.number.constructor.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.regexp.exec.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.regexp.to-string.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.replace.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.iterator.js'
          ),
          __webpack_require__('./node_modules/core-js/modules/es.map.js'),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/web.dom-collections.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.match.js'
          ),
          __webpack_require__('./node_modules/core-js/modules/es.array.map.js'),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.split.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/web.dom-collections.for-each.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.slice.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.concat.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.object.values.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.starts-with.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.function.name.js'
          ),
          __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.description.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.iterator.js'
          ),
          __webpack_require__('./node_modules/core-js/modules/es.array.from.js')
        var _ColorPicker,
          _fallbackColor,
          _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_29__ =
            __webpack_require__(
              './node_modules/@storybook/components/dist/esm/index-681e4b07.js'
            ),
          react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
            './node_modules/react/index.js'
          ),
          _storybook_theming__WEBPACK_IMPORTED_MODULE_30__ =
            __webpack_require__(
              './node_modules/@storybook/theming/dist/esm/index.js'
            )
        __webpack_require__('./node_modules/memoizerific/memoizerific.js'),
          __webpack_require__('./node_modules/@storybook/csf/dist/index.js')
        function _defineProperty(obj, key, value) {
          return (
            key in obj
              ? Object.defineProperty(obj, key, {
                  value: value,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (obj[key] = value),
            obj
          )
        }
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
        function _slicedToArray(arr, i) {
          return (
            (function _arrayWithHoles(arr) {
              if (Array.isArray(arr)) return arr
            })(arr) ||
            (function _iterableToArrayLimit(arr, i) {
              var _i =
                null == arr
                  ? null
                  : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                    arr['@@iterator']
              if (null == _i) return
              var _s,
                _e,
                _arr = [],
                _n = !0,
                _d = !1
              try {
                for (
                  _i = _i.call(arr);
                  !(_n = (_s = _i.next()).done) &&
                  (_arr.push(_s.value), !i || _arr.length !== i);
                  _n = !0
                );
              } catch (err) {
                ;(_d = !0), (_e = err)
              } finally {
                try {
                  _n || null == _i.return || _i.return()
                } finally {
                  if (_d) throw _e
                }
              }
              return _arr
            })(arr, i) ||
            (function _unsupportedIterableToArray(o, minLen) {
              if (!o) return
              if ('string' == typeof o) return _arrayLikeToArray(o, minLen)
              var n = Object.prototype.toString.call(o).slice(8, -1)
              'Object' === n && o.constructor && (n = o.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(o)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return _arrayLikeToArray(o, minLen)
            })(arr, i) ||
            (function _nonIterableRest() {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })()
          )
        }
        function _arrayLikeToArray(arr, len) {
          ;(null == len || len > arr.length) && (len = arr.length)
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
          return arr2
        }
        function u() {
          return (u =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r]
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }).apply(this, arguments)
        }
        function c(e, r) {
          if (null == e) return {}
          var t,
            n,
            o = {},
            a = Object.keys(e)
          for (n = 0; n < a.length; n++)
            r.indexOf((t = a[n])) >= 0 || (o[t] = e[t])
          return o
        }
        function i(e) {
          var t = (0, react__WEBPACK_IMPORTED_MODULE_26__.useRef)(e),
            n = (0, react__WEBPACK_IMPORTED_MODULE_26__.useRef)(function (e) {
              t.current && t.current(e)
            })
          return (t.current = e), n.current
        }
        var s = function s(e, r, t) {
            return (
              void 0 === r && (r = 0),
              void 0 === t && (t = 1),
              e > t ? t : e < r ? r : e
            )
          },
          f = function f(e) {
            return 'touches' in e
          },
          v = function v(e) {
            return (e && e.ownerDocument.defaultView) || self
          },
          d = function d(e, r, t) {
            var n = e.getBoundingClientRect(),
              o = f(r)
                ? (function (e, r) {
                    for (var t = 0; t < e.length; t++)
                      if (e[t].identifier === r) return e[t]
                    return e[0]
                  })(r.touches, t)
                : r
            return {
              left: s((o.pageX - (n.left + v(e).pageXOffset)) / n.width),
              top: s((o.pageY - (n.top + v(e).pageYOffset)) / n.height),
            }
          },
          h = function h(e) {
            !f(e) && e.preventDefault()
          },
          m = react__WEBPACK_IMPORTED_MODULE_26__.memo(function (o) {
            var a = o.onMove,
              l = o.onKey,
              s = c(o, ['onMove', 'onKey']),
              m = (0, react__WEBPACK_IMPORTED_MODULE_26__.useRef)(null),
              g = i(a),
              p = i(l),
              b = (0, react__WEBPACK_IMPORTED_MODULE_26__.useRef)(null),
              _ = (0, react__WEBPACK_IMPORTED_MODULE_26__.useRef)(!1),
              x = (0, react__WEBPACK_IMPORTED_MODULE_26__.useMemo)(
                function () {
                  var e = function e(_e) {
                      h(_e),
                        (f(_e) ? _e.touches.length > 0 : _e.buttons > 0) &&
                        m.current
                          ? g(d(m.current, _e, b.current))
                          : t(!1)
                    },
                    r = function r() {
                      return t(!1)
                    }
                  function t(t) {
                    var n = _.current,
                      o = v(m.current),
                      a = t ? o.addEventListener : o.removeEventListener
                    a(n ? 'touchmove' : 'mousemove', e),
                      a(n ? 'touchend' : 'mouseup', r)
                  }
                  return [
                    function (e) {
                      var r = e.nativeEvent,
                        n = m.current
                      if (
                        n &&
                        (h(r),
                        !(function (e, r) {
                          return r && !f(e)
                        })(r, _.current) && n)
                      ) {
                        if (f(r)) {
                          _.current = !0
                          var o = r.changedTouches || []
                          o.length && (b.current = o[0].identifier)
                        }
                        n.focus(), g(d(n, r, b.current)), t(!0)
                      }
                    },
                    function (e) {
                      var r = e.which || e.keyCode
                      r < 37 ||
                        r > 40 ||
                        (e.preventDefault(),
                        p({
                          left: 39 === r ? 0.05 : 37 === r ? -0.05 : 0,
                          top: 40 === r ? 0.05 : 38 === r ? -0.05 : 0,
                        }))
                    },
                    t,
                  ]
                },
                [p, g]
              ),
              C = x[0],
              E = x[1],
              H = x[2]
            return (
              (0, react__WEBPACK_IMPORTED_MODULE_26__.useEffect)(
                function () {
                  return H
                },
                [H]
              ),
              react__WEBPACK_IMPORTED_MODULE_26__.createElement(
                'div',
                u({}, s, {
                  onTouchStart: C,
                  onMouseDown: C,
                  className: 'react-colorful__interactive',
                  ref: m,
                  onKeyDown: E,
                  tabIndex: 0,
                  role: 'slider',
                })
              )
            )
          }),
          g = function g(e) {
            return e.filter(Boolean).join(' ')
          },
          p = function p(r) {
            var t = r.color,
              n = r.left,
              o = r.top,
              a = void 0 === o ? 0.5 : o,
              l = g(['react-colorful__pointer', r.className])
            return react__WEBPACK_IMPORTED_MODULE_26__.createElement(
              'div',
              {
                className: l,
                style: { top: 100 * a + '%', left: 100 * n + '%' },
              },
              react__WEBPACK_IMPORTED_MODULE_26__.createElement('div', {
                className: 'react-colorful__pointer-fill',
                style: { backgroundColor: t },
              })
            )
          },
          b = function b(e, r, t) {
            return (
              void 0 === r && (r = 0),
              void 0 === t && (t = Math.pow(10, r)),
              Math.round(t * e) / t
            )
          },
          _ = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) },
          x = function x(e) {
            return (
              '#' === e[0] && (e = e.substr(1)),
              e.length < 6
                ? {
                    r: parseInt(e[0] + e[0], 16),
                    g: parseInt(e[1] + e[1], 16),
                    b: parseInt(e[2] + e[2], 16),
                    a: 1,
                  }
                : {
                    r: parseInt(e.substr(0, 2), 16),
                    g: parseInt(e.substr(2, 2), 16),
                    b: parseInt(e.substr(4, 2), 16),
                    a: 1,
                  }
            )
          },
          C = function C(e, r) {
            return void 0 === r && (r = 'deg'), Number(e) * (_[r] || 1)
          },
          M = function M(e) {
            var r = e.s,
              t = e.l
            return {
              h: e.h,
              s:
                (r *= (t < 50 ? t : 100 - t) / 100) > 0
                  ? ((2 * r) / (t + r)) * 100
                  : 0,
              v: t + r,
              a: e.a,
            }
          },
          N = function N(e) {
            var r = e.s,
              t = e.v,
              n = e.a,
              o = ((200 - r) * t) / 100
            return {
              h: b(e.h),
              s: b(
                o > 0 && o < 200
                  ? ((r * t) / 100 / (o <= 100 ? o : 200 - o)) * 100
                  : 0
              ),
              l: b(o / 2),
              a: b(n, 2),
            }
          },
          w = function w(e) {
            var r = N(e)
            return 'hsl(' + r.h + ', ' + r.s + '%, ' + r.l + '%)'
          },
          y = function y(e) {
            var r = N(e)
            return 'hsla(' + r.h + ', ' + r.s + '%, ' + r.l + '%, ' + r.a + ')'
          },
          q = function q(e) {
            var r = e.h,
              t = e.s,
              n = e.v,
              o = e.a
            ;(r = (r / 360) * 6), (t /= 100), (n /= 100)
            var a = Math.floor(r),
              l = n * (1 - t),
              u = n * (1 - (r - a) * t),
              c = n * (1 - (1 - r + a) * t),
              i = a % 6
            return {
              r: b(255 * [n, u, l, l, c, n][i]),
              g: b(255 * [c, n, n, u, l, l][i]),
              b: b(255 * [l, l, c, n, n, u][i]),
              a: b(o, 2),
            }
          },
          z = function z(e) {
            var r = e.toString(16)
            return r.length < 2 ? '0' + r : r
          },
          B = function B(e) {
            var r = e.r,
              t = e.g,
              n = e.b,
              o = e.a,
              a = Math.max(r, t, n),
              l = a - Math.min(r, t, n),
              u = l
                ? a === r
                  ? (t - n) / l
                  : a === t
                  ? 2 + (n - r) / l
                  : 4 + (r - t) / l
                : 0
            return {
              h: b(60 * (u < 0 ? u + 6 : u)),
              s: b(a ? (l / a) * 100 : 0),
              v: b((a / 255) * 100),
              a: o,
            }
          },
          K = react__WEBPACK_IMPORTED_MODULE_26__.memo(function (r) {
            var t = r.hue,
              n = r.onChange,
              o = g(['react-colorful__hue', r.className])
            return react__WEBPACK_IMPORTED_MODULE_26__.createElement(
              'div',
              { className: o },
              react__WEBPACK_IMPORTED_MODULE_26__.createElement(
                m,
                {
                  onMove: function onMove(e) {
                    n({ h: 360 * e.left })
                  },
                  onKey: function onKey(e) {
                    n({ h: s(t + 360 * e.left, 0, 360) })
                  },
                  'aria-label': 'Hue',
                  'aria-valuetext': b(t),
                },
                react__WEBPACK_IMPORTED_MODULE_26__.createElement(p, {
                  className: 'react-colorful__hue-pointer',
                  left: t / 360,
                  color: w({ h: t, s: 100, v: 100, a: 1 }),
                })
              )
            )
          }),
          L = react__WEBPACK_IMPORTED_MODULE_26__.memo(function (r) {
            var t = r.hsva,
              n = r.onChange,
              o = { backgroundColor: w({ h: t.h, s: 100, v: 100, a: 1 }) }
            return react__WEBPACK_IMPORTED_MODULE_26__.createElement(
              'div',
              { className: 'react-colorful__saturation', style: o },
              react__WEBPACK_IMPORTED_MODULE_26__.createElement(
                m,
                {
                  onMove: function onMove(e) {
                    n({ s: 100 * e.left, v: 100 - 100 * e.top })
                  },
                  onKey: function onKey(e) {
                    n({
                      s: s(t.s + 100 * e.left, 0, 100),
                      v: s(t.v - 100 * e.top, 0, 100),
                    })
                  },
                  'aria-label': 'Color',
                  'aria-valuetext':
                    'Saturation ' + b(t.s) + '%, Brightness ' + b(t.v) + '%',
                },
                react__WEBPACK_IMPORTED_MODULE_26__.createElement(p, {
                  className: 'react-colorful__saturation-pointer',
                  top: 1 - t.v / 100,
                  left: t.s / 100,
                  color: w(t),
                })
              )
            )
          }),
          A = function A(e, r) {
            if (e === r) return !0
            for (var t in e) if (e[t] !== r[t]) return !1
            return !0
          },
          S = function S(e, r) {
            return e.replace(/\s/g, '') === r.replace(/\s/g, '')
          }
        function T(e, t, l) {
          var u = i(l),
            c = (0, react__WEBPACK_IMPORTED_MODULE_26__.useState)(function () {
              return e.toHsva(t)
            }),
            s = c[0],
            f = c[1],
            v = (0, react__WEBPACK_IMPORTED_MODULE_26__.useRef)({
              color: t,
              hsva: s,
            })
          ;(0, react__WEBPACK_IMPORTED_MODULE_26__.useEffect)(
            function () {
              if (!e.equal(t, v.current.color)) {
                var r = e.toHsva(t)
                ;(v.current = { hsva: r, color: t }), f(r)
              }
            },
            [t, e]
          ),
            (0, react__WEBPACK_IMPORTED_MODULE_26__.useEffect)(
              function () {
                var r
                A(s, v.current.hsva) ||
                  e.equal((r = e.fromHsva(s)), v.current.color) ||
                  ((v.current = { hsva: s, color: r }), u(r))
              },
              [s, e, u]
            )
          var d = (0, react__WEBPACK_IMPORTED_MODULE_26__.useCallback)(
            function (e) {
              f(function (r) {
                return Object.assign({}, r, e)
              })
            },
            []
          )
          return [s, d]
        }
        for (
          var P =
              'undefined' != typeof window
                ? react__WEBPACK_IMPORTED_MODULE_26__.useLayoutEffect
                : react__WEBPACK_IMPORTED_MODULE_26__.useEffect,
            R = new Map(),
            V = function V(e) {
              P(function () {
                var r = e.current ? e.current.ownerDocument : document
                if (void 0 !== r && !R.has(r)) {
                  var t = r.createElement('style')
                  ;(t.innerHTML =
                    '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}'),
                    R.set(r, t)
                  var n = (function X() {
                    return __webpack_require__.nc
                  })()
                  n && t.setAttribute('nonce', n), r.head.appendChild(t)
                }
              }, [])
            },
            $ = function $(t) {
              var n = t.className,
                o = t.colorModel,
                a = t.color,
                l = void 0 === a ? o.defaultColor : a,
                i = t.onChange,
                s = c(t, ['className', 'colorModel', 'color', 'onChange']),
                f = (0, react__WEBPACK_IMPORTED_MODULE_26__.useRef)(null)
              V(f)
              var v = T(o, l, i),
                d = v[0],
                h = v[1],
                m = g(['react-colorful', n])
              return react__WEBPACK_IMPORTED_MODULE_26__.createElement(
                'div',
                u({}, s, { ref: f, className: m }),
                react__WEBPACK_IMPORTED_MODULE_26__.createElement(L, {
                  hsva: d,
                  onChange: h,
                }),
                react__WEBPACK_IMPORTED_MODULE_26__.createElement(K, {
                  hue: d.h,
                  onChange: h,
                  className: 'react-colorful__last-control',
                })
              )
            },
            G = {
              defaultColor: '000',
              toHsva: function toHsva(e) {
                return B(x(e))
              },
              fromHsva: function fromHsva(e) {
                return (t = (r = q(e)).g), (n = r.b), '#' + z(r.r) + z(t) + z(n)
                var r, t, n
              },
              equal: function equal(e, r) {
                return e.toLowerCase() === r.toLowerCase() || A(x(e), x(r))
              },
            },
            Q = function Q(r) {
              var t = r.className,
                n = r.hsva,
                o = r.onChange,
                a = {
                  backgroundImage:
                    'linear-gradient(90deg, ' +
                    y(Object.assign({}, n, { a: 0 })) +
                    ', ' +
                    y(Object.assign({}, n, { a: 1 })) +
                    ')',
                },
                l = g(['react-colorful__alpha', t])
              return react__WEBPACK_IMPORTED_MODULE_26__.createElement(
                'div',
                { className: l },
                react__WEBPACK_IMPORTED_MODULE_26__.createElement('div', {
                  className: 'react-colorful__alpha-gradient',
                  style: a,
                }),
                react__WEBPACK_IMPORTED_MODULE_26__.createElement(
                  m,
                  {
                    onMove: function onMove(e) {
                      o({ a: e.left })
                    },
                    onKey: function onKey(e) {
                      o({ a: s(n.a + e.left) })
                    },
                    'aria-label': 'Alpha',
                    'aria-valuetext': b(100 * n.a) + '%',
                  },
                  react__WEBPACK_IMPORTED_MODULE_26__.createElement(p, {
                    className: 'react-colorful__alpha-pointer',
                    left: n.a,
                    color: y(n),
                  })
                )
              )
            },
            U = function U(t) {
              var n = t.className,
                o = t.colorModel,
                a = t.color,
                l = void 0 === a ? o.defaultColor : a,
                i = t.onChange,
                s = c(t, ['className', 'colorModel', 'color', 'onChange']),
                f = (0, react__WEBPACK_IMPORTED_MODULE_26__.useRef)(null)
              V(f)
              var v = T(o, l, i),
                d = v[0],
                h = v[1],
                m = g(['react-colorful', n])
              return react__WEBPACK_IMPORTED_MODULE_26__.createElement(
                'div',
                u({}, s, { ref: f, className: m }),
                react__WEBPACK_IMPORTED_MODULE_26__.createElement(L, {
                  hsva: d,
                  onChange: h,
                }),
                react__WEBPACK_IMPORTED_MODULE_26__.createElement(K, {
                  hue: d.h,
                  onChange: h,
                }),
                react__WEBPACK_IMPORTED_MODULE_26__.createElement(Q, {
                  hsva: d,
                  onChange: h,
                  className: 'react-colorful__last-control',
                })
              )
            },
            ee = {
              defaultColor: 'hsla(0, 0%, 0%, 1)',
              toHsva: function E(e) {
                var r =
                  /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
                    e
                  )
                return r
                  ? M({
                      h: C(r[1], r[2]),
                      s: Number(r[3]),
                      l: Number(r[4]),
                      a: void 0 === r[5] ? 1 : Number(r[5]) / (r[6] ? 100 : 1),
                    })
                  : { h: 0, s: 0, v: 0, a: 1 }
              },
              fromHsva: y,
              equal: S,
            },
            ge = {
              defaultColor: 'rgba(0, 0, 0, 1)',
              toHsva: function I(e) {
                var r =
                  /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
                    e
                  )
                return r
                  ? B({
                      r: Number(r[1]) / (r[2] ? 100 / 255 : 1),
                      g: Number(r[3]) / (r[4] ? 100 / 255 : 1),
                      b: Number(r[5]) / (r[6] ? 100 / 255 : 1),
                      a: void 0 === r[7] ? 1 : Number(r[7]) / (r[8] ? 100 : 1),
                    })
                  : { h: 0, s: 0, v: 0, a: 1 }
              },
              fromHsva: function fromHsva(e) {
                var r = q(e)
                return (
                  'rgba(' + r.r + ', ' + r.g + ', ' + r.b + ', ' + r.a + ')'
                )
              },
              equal: S,
            },
            cssKeywords = {
              aliceblue: [240, 248, 255],
              antiquewhite: [250, 235, 215],
              aqua: [0, 255, 255],
              aquamarine: [127, 255, 212],
              azure: [240, 255, 255],
              beige: [245, 245, 220],
              bisque: [255, 228, 196],
              black: [0, 0, 0],
              blanchedalmond: [255, 235, 205],
              blue: [0, 0, 255],
              blueviolet: [138, 43, 226],
              brown: [165, 42, 42],
              burlywood: [222, 184, 135],
              cadetblue: [95, 158, 160],
              chartreuse: [127, 255, 0],
              chocolate: [210, 105, 30],
              coral: [255, 127, 80],
              cornflowerblue: [100, 149, 237],
              cornsilk: [255, 248, 220],
              crimson: [220, 20, 60],
              cyan: [0, 255, 255],
              darkblue: [0, 0, 139],
              darkcyan: [0, 139, 139],
              darkgoldenrod: [184, 134, 11],
              darkgray: [169, 169, 169],
              darkgreen: [0, 100, 0],
              darkgrey: [169, 169, 169],
              darkkhaki: [189, 183, 107],
              darkmagenta: [139, 0, 139],
              darkolivegreen: [85, 107, 47],
              darkorange: [255, 140, 0],
              darkorchid: [153, 50, 204],
              darkred: [139, 0, 0],
              darksalmon: [233, 150, 122],
              darkseagreen: [143, 188, 143],
              darkslateblue: [72, 61, 139],
              darkslategray: [47, 79, 79],
              darkslategrey: [47, 79, 79],
              darkturquoise: [0, 206, 209],
              darkviolet: [148, 0, 211],
              deeppink: [255, 20, 147],
              deepskyblue: [0, 191, 255],
              dimgray: [105, 105, 105],
              dimgrey: [105, 105, 105],
              dodgerblue: [30, 144, 255],
              firebrick: [178, 34, 34],
              floralwhite: [255, 250, 240],
              forestgreen: [34, 139, 34],
              fuchsia: [255, 0, 255],
              gainsboro: [220, 220, 220],
              ghostwhite: [248, 248, 255],
              gold: [255, 215, 0],
              goldenrod: [218, 165, 32],
              gray: [128, 128, 128],
              green: [0, 128, 0],
              greenyellow: [173, 255, 47],
              grey: [128, 128, 128],
              honeydew: [240, 255, 240],
              hotpink: [255, 105, 180],
              indianred: [205, 92, 92],
              indigo: [75, 0, 130],
              ivory: [255, 255, 240],
              khaki: [240, 230, 140],
              lavender: [230, 230, 250],
              lavenderblush: [255, 240, 245],
              lawngreen: [124, 252, 0],
              lemonchiffon: [255, 250, 205],
              lightblue: [173, 216, 230],
              lightcoral: [240, 128, 128],
              lightcyan: [224, 255, 255],
              lightgoldenrodyellow: [250, 250, 210],
              lightgray: [211, 211, 211],
              lightgreen: [144, 238, 144],
              lightgrey: [211, 211, 211],
              lightpink: [255, 182, 193],
              lightsalmon: [255, 160, 122],
              lightseagreen: [32, 178, 170],
              lightskyblue: [135, 206, 250],
              lightslategray: [119, 136, 153],
              lightslategrey: [119, 136, 153],
              lightsteelblue: [176, 196, 222],
              lightyellow: [255, 255, 224],
              lime: [0, 255, 0],
              limegreen: [50, 205, 50],
              linen: [250, 240, 230],
              magenta: [255, 0, 255],
              maroon: [128, 0, 0],
              mediumaquamarine: [102, 205, 170],
              mediumblue: [0, 0, 205],
              mediumorchid: [186, 85, 211],
              mediumpurple: [147, 112, 219],
              mediumseagreen: [60, 179, 113],
              mediumslateblue: [123, 104, 238],
              mediumspringgreen: [0, 250, 154],
              mediumturquoise: [72, 209, 204],
              mediumvioletred: [199, 21, 133],
              midnightblue: [25, 25, 112],
              mintcream: [245, 255, 250],
              mistyrose: [255, 228, 225],
              moccasin: [255, 228, 181],
              navajowhite: [255, 222, 173],
              navy: [0, 0, 128],
              oldlace: [253, 245, 230],
              olive: [128, 128, 0],
              olivedrab: [107, 142, 35],
              orange: [255, 165, 0],
              orangered: [255, 69, 0],
              orchid: [218, 112, 214],
              palegoldenrod: [238, 232, 170],
              palegreen: [152, 251, 152],
              paleturquoise: [175, 238, 238],
              palevioletred: [219, 112, 147],
              papayawhip: [255, 239, 213],
              peachpuff: [255, 218, 185],
              peru: [205, 133, 63],
              pink: [255, 192, 203],
              plum: [221, 160, 221],
              powderblue: [176, 224, 230],
              purple: [128, 0, 128],
              rebeccapurple: [102, 51, 153],
              red: [255, 0, 0],
              rosybrown: [188, 143, 143],
              royalblue: [65, 105, 225],
              saddlebrown: [139, 69, 19],
              salmon: [250, 128, 114],
              sandybrown: [244, 164, 96],
              seagreen: [46, 139, 87],
              seashell: [255, 245, 238],
              sienna: [160, 82, 45],
              silver: [192, 192, 192],
              skyblue: [135, 206, 235],
              slateblue: [106, 90, 205],
              slategray: [112, 128, 144],
              slategrey: [112, 128, 144],
              snow: [255, 250, 250],
              springgreen: [0, 255, 127],
              steelblue: [70, 130, 180],
              tan: [210, 180, 140],
              teal: [0, 128, 128],
              thistle: [216, 191, 216],
              tomato: [255, 99, 71],
              turquoise: [64, 224, 208],
              violet: [238, 130, 238],
              wheat: [245, 222, 179],
              white: [255, 255, 255],
              whitesmoke: [245, 245, 245],
              yellow: [255, 255, 0],
              yellowgreen: [154, 205, 50],
            },
            reverseKeywords = {},
            _i = 0,
            _Object$keys = Object.keys(cssKeywords);
          _i < _Object$keys.length;
          _i++
        ) {
          var key = _Object$keys[_i]
          reverseKeywords[cssKeywords[key]] = key
        }
        for (
          var convert$1 = {
              rgb: { channels: 3, labels: 'rgb' },
              hsl: { channels: 3, labels: 'hsl' },
              hsv: { channels: 3, labels: 'hsv' },
              hwb: { channels: 3, labels: 'hwb' },
              cmyk: { channels: 4, labels: 'cmyk' },
              xyz: { channels: 3, labels: 'xyz' },
              lab: { channels: 3, labels: 'lab' },
              lch: { channels: 3, labels: 'lch' },
              hex: { channels: 1, labels: ['hex'] },
              keyword: { channels: 1, labels: ['keyword'] },
              ansi16: { channels: 1, labels: ['ansi16'] },
              ansi256: { channels: 1, labels: ['ansi256'] },
              hcg: { channels: 3, labels: ['h', 'c', 'g'] },
              apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
              gray: { channels: 1, labels: ['gray'] },
            },
            conversions$2 = convert$1,
            _i2 = 0,
            _Object$keys2 = Object.keys(convert$1);
          _i2 < _Object$keys2.length;
          _i2++
        ) {
          var model = _Object$keys2[_i2]
          if (!('channels' in convert$1[model]))
            throw new Error('missing channels property: ' + model)
          if (!('labels' in convert$1[model]))
            throw new Error('missing channel labels property: ' + model)
          if (convert$1[model].labels.length !== convert$1[model].channels)
            throw new Error('channel and label counts mismatch: ' + model)
          var _convert$1$model = convert$1[model],
            channels = _convert$1$model.channels,
            labels = _convert$1$model.labels
          delete convert$1[model].channels,
            delete convert$1[model].labels,
            Object.defineProperty(convert$1[model], 'channels', {
              value: channels,
            }),
            Object.defineProperty(convert$1[model], 'labels', { value: labels })
        }
        function comparativeDistance(x, y) {
          return (
            Math.pow(x[0] - y[0], 2) +
            Math.pow(x[1] - y[1], 2) +
            Math.pow(x[2] - y[2], 2)
          )
        }
        ;(convert$1.rgb.hsl = function (rgb) {
          var h,
            r = rgb[0] / 255,
            g = rgb[1] / 255,
            b = rgb[2] / 255,
            min = Math.min(r, g, b),
            max = Math.max(r, g, b),
            delta = max - min
          max === min
            ? (h = 0)
            : r === max
            ? (h = (g - b) / delta)
            : g === max
            ? (h = 2 + (b - r) / delta)
            : b === max && (h = 4 + (r - g) / delta),
            (h = Math.min(60 * h, 360)) < 0 && (h += 360)
          var l = (min + max) / 2
          return [
            h,
            100 *
              (max === min
                ? 0
                : l <= 0.5
                ? delta / (max + min)
                : delta / (2 - max - min)),
            100 * l,
          ]
        }),
          (convert$1.rgb.hsv = function (rgb) {
            var rdif,
              gdif,
              bdif,
              h,
              s,
              r = rgb[0] / 255,
              g = rgb[1] / 255,
              b = rgb[2] / 255,
              v = Math.max(r, g, b),
              diff = v - Math.min(r, g, b),
              diffc = function diffc(c) {
                return (v - c) / 6 / diff + 0.5
              }
            return (
              0 === diff
                ? ((h = 0), (s = 0))
                : ((s = diff / v),
                  (rdif = diffc(r)),
                  (gdif = diffc(g)),
                  (bdif = diffc(b)),
                  r === v
                    ? (h = bdif - gdif)
                    : g === v
                    ? (h = 1 / 3 + rdif - bdif)
                    : b === v && (h = 2 / 3 + gdif - rdif),
                  h < 0 ? (h += 1) : h > 1 && (h -= 1)),
              [360 * h, 100 * s, 100 * v]
            )
          }),
          (convert$1.rgb.hwb = function (rgb) {
            var r = rgb[0],
              g = rgb[1],
              b = rgb[2]
            return [
              convert$1.rgb.hsl(rgb)[0],
              100 * ((1 / 255) * Math.min(r, Math.min(g, b))),
              100 * (b = 1 - (1 / 255) * Math.max(r, Math.max(g, b))),
            ]
          }),
          (convert$1.rgb.cmyk = function (rgb) {
            var r = rgb[0] / 255,
              g = rgb[1] / 255,
              b = rgb[2] / 255,
              k = Math.min(1 - r, 1 - g, 1 - b)
            return [
              100 * ((1 - r - k) / (1 - k) || 0),
              100 * ((1 - g - k) / (1 - k) || 0),
              100 * ((1 - b - k) / (1 - k) || 0),
              100 * k,
            ]
          }),
          (convert$1.rgb.keyword = function (rgb) {
            var reversed = reverseKeywords[rgb]
            if (reversed) return reversed
            for (
              var currentClosestKeyword,
                currentClosestDistance = 1 / 0,
                _i3 = 0,
                _Object$keys3 = Object.keys(cssKeywords);
              _i3 < _Object$keys3.length;
              _i3++
            ) {
              var keyword = _Object$keys3[_i3],
                distance = comparativeDistance(rgb, cssKeywords[keyword])
              distance < currentClosestDistance &&
                ((currentClosestDistance = distance),
                (currentClosestKeyword = keyword))
            }
            return currentClosestKeyword
          }),
          (convert$1.keyword.rgb = function (keyword) {
            return cssKeywords[keyword]
          }),
          (convert$1.rgb.xyz = function (rgb) {
            var r = rgb[0] / 255,
              g = rgb[1] / 255,
              b = rgb[2] / 255
            return [
              100 *
                (0.4124 *
                  (r =
                    r > 0.04045
                      ? Math.pow((r + 0.055) / 1.055, 2.4)
                      : r / 12.92) +
                  0.3576 *
                    (g =
                      g > 0.04045
                        ? Math.pow((g + 0.055) / 1.055, 2.4)
                        : g / 12.92) +
                  0.1805 *
                    (b =
                      b > 0.04045
                        ? Math.pow((b + 0.055) / 1.055, 2.4)
                        : b / 12.92)),
              100 * (0.2126 * r + 0.7152 * g + 0.0722 * b),
              100 * (0.0193 * r + 0.1192 * g + 0.9505 * b),
            ]
          }),
          (convert$1.rgb.lab = function (rgb) {
            var xyz = convert$1.rgb.xyz(rgb),
              x = xyz[0],
              y = xyz[1],
              z = xyz[2]
            return (
              (y /= 100),
              (z /= 108.883),
              (x =
                (x /= 95.047) > 0.008856
                  ? Math.pow(x, 1 / 3)
                  : 7.787 * x + 16 / 116),
              [
                116 *
                  (y =
                    y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116) -
                  16,
                500 * (x - y),
                200 *
                  (y -
                    (z =
                      z > 0.008856
                        ? Math.pow(z, 1 / 3)
                        : 7.787 * z + 16 / 116)),
              ]
            )
          }),
          (convert$1.hsl.rgb = function (hsl) {
            var t2,
              t3,
              val,
              h = hsl[0] / 360,
              s = hsl[1] / 100,
              l = hsl[2] / 100
            if (0 === s) return [(val = 255 * l), val, val]
            for (
              var t1 = 2 * l - (t2 = l < 0.5 ? l * (1 + s) : l + s - l * s),
                rgb = [0, 0, 0],
                _i4 = 0;
              _i4 < 3;
              _i4++
            )
              (t3 = h + (1 / 3) * -(_i4 - 1)) < 0 && t3++,
                t3 > 1 && t3--,
                (val =
                  6 * t3 < 1
                    ? t1 + 6 * (t2 - t1) * t3
                    : 2 * t3 < 1
                    ? t2
                    : 3 * t3 < 2
                    ? t1 + (t2 - t1) * (2 / 3 - t3) * 6
                    : t1),
                (rgb[_i4] = 255 * val)
            return rgb
          }),
          (convert$1.hsl.hsv = function (hsl) {
            var h = hsl[0],
              s = hsl[1] / 100,
              l = hsl[2] / 100,
              smin = s,
              lmin = Math.max(l, 0.01)
            return (
              (s *= (l *= 2) <= 1 ? l : 2 - l),
              (smin *= lmin <= 1 ? lmin : 2 - lmin),
              [
                h,
                100 *
                  (0 === l ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s)),
                100 * ((l + s) / 2),
              ]
            )
          }),
          (convert$1.hsv.rgb = function (hsv) {
            var h = hsv[0] / 60,
              s = hsv[1] / 100,
              v = hsv[2] / 100,
              hi = Math.floor(h) % 6,
              f = h - Math.floor(h),
              p = 255 * v * (1 - s),
              q = 255 * v * (1 - s * f),
              t = 255 * v * (1 - s * (1 - f))
            switch (((v *= 255), hi)) {
              case 0:
                return [v, t, p]
              case 1:
                return [q, v, p]
              case 2:
                return [p, v, t]
              case 3:
                return [p, q, v]
              case 4:
                return [t, p, v]
              case 5:
                return [v, p, q]
            }
          }),
          (convert$1.hsv.hsl = function (hsv) {
            var sl,
              l,
              h = hsv[0],
              s = hsv[1] / 100,
              v = hsv[2] / 100,
              vmin = Math.max(v, 0.01)
            l = (2 - s) * v
            var lmin = (2 - s) * vmin
            return (
              (sl = s * vmin),
              [
                h,
                100 * (sl = (sl /= lmin <= 1 ? lmin : 2 - lmin) || 0),
                100 * (l /= 2),
              ]
            )
          }),
          (convert$1.hwb.rgb = function (hwb) {
            var f,
              h = hwb[0] / 360,
              wh = hwb[1] / 100,
              bl = hwb[2] / 100,
              ratio = wh + bl
            ratio > 1 && ((wh /= ratio), (bl /= ratio))
            var i = Math.floor(6 * h),
              v = 1 - bl
            ;(f = 6 * h - i), 1 & i && (f = 1 - f)
            var r,
              g,
              b,
              n = wh + f * (v - wh)
            switch (i) {
              default:
              case 6:
              case 0:
                ;(r = v), (g = n), (b = wh)
                break
              case 1:
                ;(r = n), (g = v), (b = wh)
                break
              case 2:
                ;(r = wh), (g = v), (b = n)
                break
              case 3:
                ;(r = wh), (g = n), (b = v)
                break
              case 4:
                ;(r = n), (g = wh), (b = v)
                break
              case 5:
                ;(r = v), (g = wh), (b = n)
            }
            return [255 * r, 255 * g, 255 * b]
          }),
          (convert$1.cmyk.rgb = function (cmyk) {
            var c = cmyk[0] / 100,
              m = cmyk[1] / 100,
              y = cmyk[2] / 100,
              k = cmyk[3] / 100
            return [
              255 * (1 - Math.min(1, c * (1 - k) + k)),
              255 * (1 - Math.min(1, m * (1 - k) + k)),
              255 * (1 - Math.min(1, y * (1 - k) + k)),
            ]
          }),
          (convert$1.xyz.rgb = function (xyz) {
            var r,
              g,
              b,
              x = xyz[0] / 100,
              y = xyz[1] / 100,
              z = xyz[2] / 100
            return (
              (g = -0.9689 * x + 1.8758 * y + 0.0415 * z),
              (b = 0.0557 * x + -0.204 * y + 1.057 * z),
              (r =
                (r = 3.2406 * x + -1.5372 * y + -0.4986 * z) > 0.0031308
                  ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055
                  : 12.92 * r),
              (g =
                g > 0.0031308
                  ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055
                  : 12.92 * g),
              (b =
                b > 0.0031308
                  ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055
                  : 12.92 * b),
              [
                255 * (r = Math.min(Math.max(0, r), 1)),
                255 * (g = Math.min(Math.max(0, g), 1)),
                255 * (b = Math.min(Math.max(0, b), 1)),
              ]
            )
          }),
          (convert$1.xyz.lab = function (xyz) {
            var x = xyz[0],
              y = xyz[1],
              z = xyz[2]
            return (
              (y /= 100),
              (z /= 108.883),
              (x =
                (x /= 95.047) > 0.008856
                  ? Math.pow(x, 1 / 3)
                  : 7.787 * x + 16 / 116),
              [
                116 *
                  (y =
                    y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116) -
                  16,
                500 * (x - y),
                200 *
                  (y -
                    (z =
                      z > 0.008856
                        ? Math.pow(z, 1 / 3)
                        : 7.787 * z + 16 / 116)),
              ]
            )
          }),
          (convert$1.lab.xyz = function (lab) {
            var x,
              y,
              z,
              l = lab[0]
            ;(x = lab[1] / 500 + (y = (l + 16) / 116)), (z = y - lab[2] / 200)
            var y2 = Math.pow(y, 3),
              x2 = Math.pow(x, 3),
              z2 = Math.pow(z, 3)
            return (
              (y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787),
              (x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787),
              (z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787),
              [(x *= 95.047), (y *= 100), (z *= 108.883)]
            )
          }),
          (convert$1.lab.lch = function (lab) {
            var h,
              l = lab[0],
              a = lab[1],
              b = lab[2]
            return (
              (h = (360 * Math.atan2(b, a)) / 2 / Math.PI) < 0 && (h += 360),
              [l, Math.sqrt(a * a + b * b), h]
            )
          }),
          (convert$1.lch.lab = function (lch) {
            var l = lch[0],
              c = lch[1],
              hr = (lch[2] / 360) * 2 * Math.PI
            return [l, c * Math.cos(hr), c * Math.sin(hr)]
          }),
          (convert$1.rgb.ansi16 = function (args) {
            var saturation =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              _args = _slicedToArray(args, 3),
              r = _args[0],
              g = _args[1],
              b = _args[2],
              value =
                null === saturation ? convert$1.rgb.hsv(args)[2] : saturation
            if (0 === (value = Math.round(value / 50))) return 30
            var ansi =
              30 +
              ((Math.round(b / 255) << 2) |
                (Math.round(g / 255) << 1) |
                Math.round(r / 255))
            return 2 === value && (ansi += 60), ansi
          }),
          (convert$1.hsv.ansi16 = function (args) {
            return convert$1.rgb.ansi16(convert$1.hsv.rgb(args), args[2])
          }),
          (convert$1.rgb.ansi256 = function (args) {
            var r = args[0],
              g = args[1],
              b = args[2]
            return r === g && g === b
              ? r < 8
                ? 16
                : r > 248
                ? 231
                : Math.round(((r - 8) / 247) * 24) + 232
              : 16 +
                  36 * Math.round((r / 255) * 5) +
                  6 * Math.round((g / 255) * 5) +
                  Math.round((b / 255) * 5)
          }),
          (convert$1.ansi16.rgb = function (args) {
            var color = args % 10
            if (0 === color || 7 === color)
              return (
                args > 50 && (color += 3.5),
                [(color = (color / 10.5) * 255), color, color]
              )
            var mult = 0.5 * (1 + ~~(args > 50))
            return [
              (1 & color) * mult * 255,
              ((color >> 1) & 1) * mult * 255,
              ((color >> 2) & 1) * mult * 255,
            ]
          }),
          (convert$1.ansi256.rgb = function (args) {
            if (args >= 232) {
              var _c = 10 * (args - 232) + 8
              return [_c, _c, _c]
            }
            var rem
            return (
              (args -= 16),
              [
                (Math.floor(args / 36) / 5) * 255,
                (Math.floor((rem = args % 36) / 6) / 5) * 255,
                ((rem % 6) / 5) * 255,
              ]
            )
          }),
          (convert$1.rgb.hex = function (args) {
            var string = (
              ((255 & Math.round(args[0])) << 16) +
              ((255 & Math.round(args[1])) << 8) +
              (255 & Math.round(args[2]))
            )
              .toString(16)
              .toUpperCase()
            return '000000'.substring(string.length) + string
          }),
          (convert$1.hex.rgb = function (args) {
            var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i)
            if (!match) return [0, 0, 0]
            var colorString = match[0]
            3 === match[0].length &&
              (colorString = colorString
                .split('')
                .map(function (char) {
                  return char + char
                })
                .join(''))
            var integer = parseInt(colorString, 16)
            return [(integer >> 16) & 255, (integer >> 8) & 255, 255 & integer]
          }),
          (convert$1.rgb.hcg = function (rgb) {
            var hue,
              r = rgb[0] / 255,
              g = rgb[1] / 255,
              b = rgb[2] / 255,
              max = Math.max(Math.max(r, g), b),
              min = Math.min(Math.min(r, g), b),
              chroma = max - min
            return (
              (hue =
                chroma <= 0
                  ? 0
                  : max === r
                  ? ((g - b) / chroma) % 6
                  : max === g
                  ? 2 + (b - r) / chroma
                  : 4 + (r - g) / chroma),
              (hue /= 6),
              [
                360 * (hue %= 1),
                100 * chroma,
                100 * (chroma < 1 ? min / (1 - chroma) : 0),
              ]
            )
          }),
          (convert$1.hsl.hcg = function (hsl) {
            var s = hsl[1] / 100,
              l = hsl[2] / 100,
              c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l),
              f = 0
            return (
              c < 1 && (f = (l - 0.5 * c) / (1 - c)), [hsl[0], 100 * c, 100 * f]
            )
          }),
          (convert$1.hsv.hcg = function (hsv) {
            var s = hsv[1] / 100,
              v = hsv[2] / 100,
              c = s * v,
              f = 0
            return c < 1 && (f = (v - c) / (1 - c)), [hsv[0], 100 * c, 100 * f]
          }),
          (convert$1.hcg.rgb = function (hcg) {
            var h = hcg[0] / 360,
              c = hcg[1] / 100,
              g = hcg[2] / 100
            if (0 === c) return [255 * g, 255 * g, 255 * g]
            var mg,
              pure = [0, 0, 0],
              hi = (h % 1) * 6,
              v = hi % 1,
              w = 1 - v
            switch (Math.floor(hi)) {
              case 0:
                ;(pure[0] = 1), (pure[1] = v), (pure[2] = 0)
                break
              case 1:
                ;(pure[0] = w), (pure[1] = 1), (pure[2] = 0)
                break
              case 2:
                ;(pure[0] = 0), (pure[1] = 1), (pure[2] = v)
                break
              case 3:
                ;(pure[0] = 0), (pure[1] = w), (pure[2] = 1)
                break
              case 4:
                ;(pure[0] = v), (pure[1] = 0), (pure[2] = 1)
                break
              default:
                ;(pure[0] = 1), (pure[1] = 0), (pure[2] = w)
            }
            return (
              (mg = (1 - c) * g),
              [
                255 * (c * pure[0] + mg),
                255 * (c * pure[1] + mg),
                255 * (c * pure[2] + mg),
              ]
            )
          }),
          (convert$1.hcg.hsv = function (hcg) {
            var c = hcg[1] / 100,
              v = c + (hcg[2] / 100) * (1 - c),
              f = 0
            return v > 0 && (f = c / v), [hcg[0], 100 * f, 100 * v]
          }),
          (convert$1.hcg.hsl = function (hcg) {
            var c = hcg[1] / 100,
              l = (hcg[2] / 100) * (1 - c) + 0.5 * c,
              s = 0
            return (
              l > 0 && l < 0.5
                ? (s = c / (2 * l))
                : l >= 0.5 && l < 1 && (s = c / (2 * (1 - l))),
              [hcg[0], 100 * s, 100 * l]
            )
          }),
          (convert$1.hcg.hwb = function (hcg) {
            var c = hcg[1] / 100,
              v = c + (hcg[2] / 100) * (1 - c)
            return [hcg[0], 100 * (v - c), 100 * (1 - v)]
          }),
          (convert$1.hwb.hcg = function (hwb) {
            var w = hwb[1] / 100,
              v = 1 - hwb[2] / 100,
              c = v - w,
              g = 0
            return c < 1 && (g = (v - c) / (1 - c)), [hwb[0], 100 * c, 100 * g]
          }),
          (convert$1.apple.rgb = function (apple) {
            return [
              (apple[0] / 65535) * 255,
              (apple[1] / 65535) * 255,
              (apple[2] / 65535) * 255,
            ]
          }),
          (convert$1.rgb.apple = function (rgb) {
            return [
              (rgb[0] / 255) * 65535,
              (rgb[1] / 255) * 65535,
              (rgb[2] / 255) * 65535,
            ]
          }),
          (convert$1.gray.rgb = function (args) {
            return [
              (args[0] / 100) * 255,
              (args[0] / 100) * 255,
              (args[0] / 100) * 255,
            ]
          }),
          (convert$1.gray.hsl = function (args) {
            return [0, 0, args[0]]
          }),
          (convert$1.gray.hsv = convert$1.gray.hsl),
          (convert$1.gray.hwb = function (gray) {
            return [0, 100, gray[0]]
          }),
          (convert$1.gray.cmyk = function (gray) {
            return [0, 0, 0, gray[0]]
          }),
          (convert$1.gray.lab = function (gray) {
            return [gray[0], 0, 0]
          }),
          (convert$1.gray.hex = function (gray) {
            var val = 255 & Math.round((gray[0] / 100) * 255),
              string = ((val << 16) + (val << 8) + val)
                .toString(16)
                .toUpperCase()
            return '000000'.substring(string.length) + string
          }),
          (convert$1.rgb.gray = function (rgb) {
            return [((rgb[0] + rgb[1] + rgb[2]) / 3 / 255) * 100]
          })
        var conversions$1 = conversions$2
        function deriveBFS(fromModel) {
          var graph = (function buildGraph() {
              for (
                var graph = {},
                  models = Object.keys(conversions$1),
                  len = models.length,
                  _i5 = 0;
                _i5 < len;
                _i5++
              )
                graph[models[_i5]] = { distance: -1, parent: null }
              return graph
            })(),
            queue = [fromModel]
          for (graph[fromModel].distance = 0; queue.length; )
            for (
              var current = queue.pop(),
                adjacents = Object.keys(conversions$1[current]),
                len = adjacents.length,
                _i6 = 0;
              _i6 < len;
              _i6++
            ) {
              var adjacent = adjacents[_i6],
                node = graph[adjacent]
              ;-1 === node.distance &&
                ((node.distance = graph[current].distance + 1),
                (node.parent = current),
                queue.unshift(adjacent))
            }
          return graph
        }
        function link(from, to) {
          return function (args) {
            return to(from(args))
          }
        }
        function wrapConversion(toModel, graph) {
          for (
            var path = [graph[toModel].parent, toModel],
              fn = conversions$1[graph[toModel].parent][toModel],
              cur = graph[toModel].parent;
            graph[cur].parent;

          )
            path.unshift(graph[cur].parent),
              (fn = link(conversions$1[graph[cur].parent][cur], fn)),
              (cur = graph[cur].parent)
          return (fn.conversion = path), fn
        }
        var conversions = conversions$2,
          route = function route$1(fromModel) {
            for (
              var graph = deriveBFS(fromModel),
                conversion = {},
                models = Object.keys(graph),
                len = models.length,
                _i7 = 0;
              _i7 < len;
              _i7++
            ) {
              var toModel = models[_i7]
              null !== graph[toModel].parent &&
                (conversion[toModel] = wrapConversion(toModel, graph))
            }
            return conversion
          },
          convert = {}
        Object.keys(conversions).forEach(function (fromModel) {
          ;(convert[fromModel] = {}),
            Object.defineProperty(convert[fromModel], 'channels', {
              value: conversions[fromModel].channels,
            }),
            Object.defineProperty(convert[fromModel], 'labels', {
              value: conversions[fromModel].labels,
            })
          var routes = route(fromModel)
          Object.keys(routes).forEach(function (toModel) {
            var fn = routes[toModel]
            ;(convert[fromModel][toModel] = (function wrapRounded(fn) {
              var wrappedFn = function wrappedFn() {
                for (
                  var _len2 = arguments.length,
                    args = new Array(_len2),
                    _key2 = 0;
                  _key2 < _len2;
                  _key2++
                )
                  args[_key2] = arguments[_key2]
                var arg0 = args[0]
                if (null == arg0) return arg0
                arg0.length > 1 && (args = arg0)
                var result = fn(args)
                if ('object' === _typeof(result))
                  for (var len = result.length, _i8 = 0; _i8 < len; _i8++)
                    result[_i8] = Math.round(result[_i8])
                return result
              }
              return (
                'conversion' in fn && (wrappedFn.conversion = fn.conversion),
                wrappedFn
              )
            })(fn)),
              (convert[fromModel][toModel].raw = (function wrapRaw(fn) {
                var wrappedFn = function wrappedFn() {
                  for (
                    var _len = arguments.length,
                      args = new Array(_len),
                      _key = 0;
                    _key < _len;
                    _key++
                  )
                    args[_key] = arguments[_key]
                  var arg0 = args[0]
                  return null == arg0
                    ? arg0
                    : (arg0.length > 1 && (args = arg0), fn(args))
                }
                return (
                  'conversion' in fn && (wrappedFn.conversion = fn.conversion),
                  wrappedFn
                )
              })(fn))
          })
        })
        var colorConvert = convert,
          root = _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_29__.u,
          now_1 = function now$1() {
            return root.Date.now()
          },
          reWhitespace = /\s/
        var trimmedEndIndex = function trimmedEndIndex$1(string) {
            for (
              var index = string.length;
              index-- && reWhitespace.test(string.charAt(index));

            );
            return index
          },
          reTrimStart = /^\s+/
        var baseTrim = function baseTrim$1(string) {
            return string
              ? string
                  .slice(0, trimmedEndIndex(string) + 1)
                  .replace(reTrimStart, '')
              : string
          },
          isObject$2 = _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_29__.x,
          isSymbol = _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_29__.y,
          reIsBadHex = /^[-+]0x[0-9a-f]+$/i,
          reIsBinary = /^0b[01]+$/i,
          reIsOctal = /^0o[0-7]+$/i,
          freeParseInt = parseInt
        var toNumber_1 = function toNumber$1(value) {
            if ('number' == typeof value) return value
            if (isSymbol(value)) return NaN
            if (isObject$2(value)) {
              var other =
                'function' == typeof value.valueOf ? value.valueOf() : value
              value = isObject$2(other) ? other + '' : other
            }
            if ('string' != typeof value) return 0 === value ? value : +value
            value = baseTrim(value)
            var isBinary = reIsBinary.test(value)
            return isBinary || reIsOctal.test(value)
              ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
              : reIsBadHex.test(value)
              ? NaN
              : +value
          },
          isObject$1 = _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_29__.x,
          now = now_1,
          toNumber = toNumber_1,
          nativeMax = Math.max,
          nativeMin = Math.min
        var debounce_1 = function debounce$1(func, wait, options) {
            var lastArgs,
              lastThis,
              maxWait,
              result,
              timerId,
              lastCallTime,
              lastInvokeTime = 0,
              leading = !1,
              maxing = !1,
              trailing = !0
            if ('function' != typeof func)
              throw new TypeError('Expected a function')
            function invokeFunc(time) {
              var args = lastArgs,
                thisArg = lastThis
              return (
                (lastArgs = lastThis = void 0),
                (lastInvokeTime = time),
                (result = func.apply(thisArg, args))
              )
            }
            function shouldInvoke(time) {
              var timeSinceLastCall = time - lastCallTime
              return (
                void 0 === lastCallTime ||
                timeSinceLastCall >= wait ||
                timeSinceLastCall < 0 ||
                (maxing && time - lastInvokeTime >= maxWait)
              )
            }
            function timerExpired() {
              var time = now()
              if (shouldInvoke(time)) return trailingEdge(time)
              timerId = setTimeout(
                timerExpired,
                (function remainingWait(time) {
                  var timeWaiting = wait - (time - lastCallTime)
                  return maxing
                    ? nativeMin(timeWaiting, maxWait - (time - lastInvokeTime))
                    : timeWaiting
                })(time)
              )
            }
            function trailingEdge(time) {
              return (
                (timerId = void 0),
                trailing && lastArgs
                  ? invokeFunc(time)
                  : ((lastArgs = lastThis = void 0), result)
              )
            }
            function debounced() {
              var time = now(),
                isInvoking = shouldInvoke(time)
              if (
                ((lastArgs = arguments),
                (lastThis = this),
                (lastCallTime = time),
                isInvoking)
              ) {
                if (void 0 === timerId)
                  return (function leadingEdge(time) {
                    return (
                      (lastInvokeTime = time),
                      (timerId = setTimeout(timerExpired, wait)),
                      leading ? invokeFunc(time) : result
                    )
                  })(lastCallTime)
                if (maxing)
                  return (
                    clearTimeout(timerId),
                    (timerId = setTimeout(timerExpired, wait)),
                    invokeFunc(lastCallTime)
                  )
              }
              return (
                void 0 === timerId &&
                  (timerId = setTimeout(timerExpired, wait)),
                result
              )
            }
            return (
              (wait = toNumber(wait) || 0),
              isObject$1(options) &&
                ((leading = !!options.leading),
                (maxWait = (maxing = 'maxWait' in options)
                  ? nativeMax(toNumber(options.maxWait) || 0, wait)
                  : maxWait),
                (trailing =
                  'trailing' in options ? !!options.trailing : trailing)),
              (debounced.cancel = function cancel() {
                void 0 !== timerId && clearTimeout(timerId),
                  (lastInvokeTime = 0),
                  (lastArgs = lastCallTime = lastThis = timerId = void 0)
              }),
              (debounced.flush = function flush() {
                return void 0 === timerId ? result : trailingEdge(now())
              }),
              debounced
            )
          },
          debounce = debounce_1,
          isObject = _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_29__.x
        var ColorSpace,
          throttle_1 = function throttle(func, wait, options) {
            var leading = !0,
              trailing = !0
            if ('function' != typeof func)
              throw new TypeError('Expected a function')
            return (
              isObject(options) &&
                ((leading = 'leading' in options ? !!options.leading : leading),
                (trailing =
                  'trailing' in options ? !!options.trailing : trailing)),
              debounce(func, wait, {
                leading: leading,
                maxWait: wait,
                trailing: trailing,
              })
            )
          },
          Wrapper = _storybook_theming__WEBPACK_IMPORTED_MODULE_30__.I4.div({
            position: 'relative',
            maxWidth: 250,
          }),
          PickerTooltip = (0,
          _storybook_theming__WEBPACK_IMPORTED_MODULE_30__.I4)(
            _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_29__.W
          )({ position: 'absolute', zIndex: 1, top: 4, left: 4 }),
          TooltipContent =
            _storybook_theming__WEBPACK_IMPORTED_MODULE_30__.I4.div({
              width: 200,
              margin: 5,
              '.react-colorful__saturation': { borderRadius: '4px 4px 0 0' },
              '.react-colorful__hue': {
                boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 5%)',
              },
              '.react-colorful__last-control': { borderRadius: '0 0 4px 4px' },
            }),
          Note = (0, _storybook_theming__WEBPACK_IMPORTED_MODULE_30__.I4)(
            _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_29__.T
          )(function (_ref) {
            return { fontFamily: _ref.theme.typography.fonts.base }
          }),
          Swatches = _storybook_theming__WEBPACK_IMPORTED_MODULE_30__.I4.div({
            display: 'grid',
            gridTemplateColumns: 'repeat(9, 16px)',
            gap: 6,
            padding: 3,
            marginTop: 5,
            width: 200,
          }),
          SwatchColor = _storybook_theming__WEBPACK_IMPORTED_MODULE_30__.I4.div(
            function (_ref2) {
              var theme = _ref2.theme
              return {
                width: 16,
                height: 16,
                boxShadow: _ref2.active
                  ? ''
                      .concat(theme.appBorderColor, ' 0 0 0 1px inset, ')
                      .concat(theme.color.mediumdark, '50 0 0 0 4px')
                  : ''.concat(theme.appBorderColor, ' 0 0 0 1px inset'),
                borderRadius: theme.appBorderRadius,
              }
            }
          ),
          Swatch = function Swatch(_a) {
            var value = _a.value,
              active = _a.active,
              onClick = _a.onClick,
              style = _a.style,
              props = (0, _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_29__.d)(
                _a,
                ['value', 'active', 'onClick', 'style']
              ),
              backgroundImage = 'linear-gradient('
                .concat(value, ', ')
                .concat(value, '), ')
                .concat(
                  'url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')',
                  ', linear-gradient(#fff, #fff)'
                )
            return react__WEBPACK_IMPORTED_MODULE_26__.createElement(
              SwatchColor,
              Object.assign(
                {},
                props,
                { active: active, onClick: onClick },
                {
                  style: Object.assign(Object.assign({}, style), {
                    backgroundImage: backgroundImage,
                  }),
                }
              )
            )
          },
          Input = (0, _storybook_theming__WEBPACK_IMPORTED_MODULE_30__.I4)(
            _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_29__.F.Input
          )(function (_ref3) {
            return {
              width: '100%',
              paddingLeft: 30,
              paddingRight: 30,
              boxSizing: 'border-box',
              fontFamily: _ref3.theme.typography.fonts.base,
            }
          }),
          ToggleIcon = (0, _storybook_theming__WEBPACK_IMPORTED_MODULE_30__.I4)(
            _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_29__.I
          )(function (_ref4) {
            return {
              position: 'absolute',
              zIndex: 1,
              top: 6,
              right: 7,
              width: 20,
              height: 20,
              padding: 4,
              boxSizing: 'border-box',
              cursor: 'pointer',
              color: _ref4.theme.input.color,
            }
          })
        !(function (ColorSpace) {
          ;(ColorSpace.RGB = 'rgb'),
            (ColorSpace.HSL = 'hsl'),
            (ColorSpace.HEX = 'hex')
        })(ColorSpace || (ColorSpace = {}))
        var COLOR_SPACES = Object.values(ColorSpace),
          COLOR_REGEXP =
            /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,
          RGB_REGEXP =
            /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,
          HSL_REGEXP =
            /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,
          HEX_REGEXP = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,
          SHORTHEX_REGEXP = /^\s*#?([0-9a-f]{3})\s*$/i,
          ColorPicker =
            (_defineProperty(
              (_ColorPicker = {}),
              ColorSpace.HEX,
              function J(r) {
                return react__WEBPACK_IMPORTED_MODULE_26__.createElement(
                  $,
                  u({}, r, { colorModel: G })
                )
              }
            ),
            _defineProperty(_ColorPicker, ColorSpace.RGB, function pe(r) {
              return react__WEBPACK_IMPORTED_MODULE_26__.createElement(
                U,
                u({}, r, { colorModel: ge })
              )
            }),
            _defineProperty(_ColorPicker, ColorSpace.HSL, function re(r) {
              return react__WEBPACK_IMPORTED_MODULE_26__.createElement(
                U,
                u({}, r, { colorModel: ee })
              )
            }),
            _ColorPicker),
          fallbackColor =
            (_defineProperty(
              (_fallbackColor = {}),
              ColorSpace.HEX,
              'transparent'
            ),
            _defineProperty(_fallbackColor, ColorSpace.RGB, 'rgba(0, 0, 0, 0)'),
            _defineProperty(
              _fallbackColor,
              ColorSpace.HSL,
              'hsla(0, 0%, 0%, 0)'
            ),
            _fallbackColor),
          stringToArgs = function stringToArgs(value) {
            var match = null == value ? void 0 : value.match(COLOR_REGEXP)
            if (!match) return [0, 0, 0, 1]
            var _match = _slicedToArray(match, 5),
              x = _match[1],
              y = _match[2],
              z = _match[3],
              _match$ = _match[4]
            return [x, y, z, void 0 === _match$ ? 1 : _match$].map(Number)
          },
          parseValue = function parseValue(value) {
            var _ref11
            if (value) {
              var valid = !0
              if (RGB_REGEXP.test(value)) {
                var _ref7,
                  _stringToArgs2 = _slicedToArray(stringToArgs(value), 4),
                  r = _stringToArgs2[0],
                  _g = _stringToArgs2[1],
                  _b = _stringToArgs2[2],
                  a = _stringToArgs2[3],
                  _ref6 = _slicedToArray(
                    colorConvert.rgb.hsl([r, _g, _b]) || [0, 0, 0],
                    3
                  ),
                  _h = _ref6[0],
                  _s2 = _ref6[1],
                  l = _ref6[2]
                return (
                  _defineProperty(
                    (_ref7 = {
                      valid: valid,
                      value: value,
                      keyword: colorConvert.rgb.keyword([r, _g, _b]),
                      colorSpace: ColorSpace.RGB,
                    }),
                    ColorSpace.RGB,
                    value
                  ),
                  _defineProperty(
                    _ref7,
                    ColorSpace.HSL,
                    'hsla('
                      .concat(_h, ', ')
                      .concat(_s2, '%, ')
                      .concat(l, '%, ')
                      .concat(a, ')')
                  ),
                  _defineProperty(
                    _ref7,
                    ColorSpace.HEX,
                    '#'.concat(colorConvert.rgb.hex([r, _g, _b]).toLowerCase())
                  ),
                  _ref7
                )
              }
              if (HSL_REGEXP.test(value)) {
                var _ref10,
                  _stringToArgs4 = _slicedToArray(stringToArgs(value), 4),
                  _h2 = _stringToArgs4[0],
                  _s3 = _stringToArgs4[1],
                  _l = _stringToArgs4[2],
                  _a2 = _stringToArgs4[3],
                  _ref9 = _slicedToArray(
                    colorConvert.hsl.rgb([_h2, _s3, _l]) || [0, 0, 0],
                    3
                  ),
                  _r = _ref9[0],
                  _g2 = _ref9[1],
                  _b2 = _ref9[2]
                return (
                  _defineProperty(
                    (_ref10 = {
                      valid: valid,
                      value: value,
                      keyword: colorConvert.hsl.keyword([_h2, _s3, _l]),
                      colorSpace: ColorSpace.HSL,
                    }),
                    ColorSpace.RGB,
                    'rgba('
                      .concat(_r, ', ')
                      .concat(_g2, ', ')
                      .concat(_b2, ', ')
                      .concat(_a2, ')')
                  ),
                  _defineProperty(_ref10, ColorSpace.HSL, value),
                  _defineProperty(
                    _ref10,
                    ColorSpace.HEX,
                    '#'.concat(
                      colorConvert.hsl.hex([_h2, _s3, _l]).toLowerCase()
                    )
                  ),
                  _ref10
                )
              }
              var plain = value.replace('#', ''),
                rgb =
                  colorConvert.keyword.rgb(plain) ||
                  colorConvert.hex.rgb(plain),
                hsl = colorConvert.rgb.hsl(rgb),
                mapped = value
              if (
                (/[^#a-f0-9]/i.test(value)
                  ? (mapped = plain)
                  : HEX_REGEXP.test(value) && (mapped = '#'.concat(plain)),
                mapped.startsWith('#'))
              )
                valid = HEX_REGEXP.test(mapped)
              else
                try {
                  colorConvert.keyword.hex(mapped)
                } catch (e) {
                  valid = !1
                }
              return (
                _defineProperty(
                  (_ref11 = {
                    valid: valid,
                    value: mapped,
                    keyword: colorConvert.rgb.keyword(rgb),
                    colorSpace: ColorSpace.HEX,
                  }),
                  ColorSpace.RGB,
                  'rgba('
                    .concat(rgb[0], ', ')
                    .concat(rgb[1], ', ')
                    .concat(rgb[2], ', 1)')
                ),
                _defineProperty(
                  _ref11,
                  ColorSpace.HSL,
                  'hsla('
                    .concat(hsl[0], ', ')
                    .concat(hsl[1], '%, ')
                    .concat(hsl[2], '%, 1)')
                ),
                _defineProperty(_ref11, ColorSpace.HEX, mapped),
                _ref11
              )
            }
          },
          useColorInput = function useColorInput(initialValue, onChange) {
            var _useState2 = _slicedToArray(
                (0, react__WEBPACK_IMPORTED_MODULE_26__.useState)(
                  initialValue || ''
                ),
                2
              ),
              value = _useState2[0],
              setValue = _useState2[1],
              _useState4 = _slicedToArray(
                (0, react__WEBPACK_IMPORTED_MODULE_26__.useState)(function () {
                  return parseValue(value)
                }),
                2
              ),
              color = _useState4[0],
              setColor = _useState4[1],
              _useState6 = _slicedToArray(
                (0, react__WEBPACK_IMPORTED_MODULE_26__.useState)(
                  (null == color ? void 0 : color.colorSpace) || ColorSpace.HEX
                ),
                2
              ),
              colorSpace = _useState6[0],
              setColorSpace = _useState6[1]
            ;(0, react__WEBPACK_IMPORTED_MODULE_26__.useEffect)(
              function () {
                void 0 === initialValue &&
                  (setValue(''),
                  setColor(void 0),
                  setColorSpace(ColorSpace.HEX))
              },
              [initialValue]
            )
            var realValue = (0, react__WEBPACK_IMPORTED_MODULE_26__.useMemo)(
                function () {
                  return (function getRealValue(value, color, colorSpace) {
                    if (!value || !(null == color ? void 0 : color.valid))
                      return fallbackColor[colorSpace]
                    if (colorSpace !== ColorSpace.HEX)
                      return (
                        (null == color ? void 0 : color[colorSpace]) ||
                        fallbackColor[colorSpace]
                      )
                    if (!color.hex.startsWith('#'))
                      try {
                        return '#'.concat(colorConvert.keyword.hex(color.hex))
                      } catch (e) {
                        return fallbackColor.hex
                      }
                    var short = color.hex.match(SHORTHEX_REGEXP)
                    if (!short)
                      return HEX_REGEXP.test(color.hex)
                        ? color.hex
                        : fallbackColor.hex
                    var _short$1$split2 = _slicedToArray(short[1].split(''), 3),
                      r = _short$1$split2[0],
                      g = _short$1$split2[1],
                      b = _short$1$split2[2]
                    return '#'
                      .concat(r)
                      .concat(r)
                      .concat(g)
                      .concat(g)
                      .concat(b)
                      .concat(b)
                  })(value, color, colorSpace).toLowerCase()
                },
                [value, color, colorSpace]
              ),
              updateValue = (0,
              react__WEBPACK_IMPORTED_MODULE_26__.useCallback)(
                function (update) {
                  var parsed = parseValue(update)
                  setValue(
                    (null == parsed ? void 0 : parsed.value) || update || ''
                  ),
                    parsed &&
                      (setColor(parsed),
                      setColorSpace(parsed.colorSpace),
                      onChange(parsed.value))
                },
                [onChange]
              ),
              cycleColorSpace = (0,
              react__WEBPACK_IMPORTED_MODULE_26__.useCallback)(
                function () {
                  var next = COLOR_SPACES.indexOf(colorSpace) + 1
                  next >= COLOR_SPACES.length && (next = 0),
                    setColorSpace(COLOR_SPACES[next])
                  var update =
                    (null == color ? void 0 : color[COLOR_SPACES[next]]) || ''
                  setValue(update), onChange(update)
                },
                [color, colorSpace, onChange]
              )
            return {
              value: value,
              realValue: realValue,
              updateValue: updateValue,
              color: color,
              colorSpace: colorSpace,
              cycleColorSpace: cycleColorSpace,
            }
          },
          id = function id(value) {
            return value.replace(/\s*/, '').toLowerCase()
          },
          ColorControl = function ColorControl(_ref12) {
            var name = _ref12.name,
              initialValue = _ref12.value,
              onChange = _ref12.onChange,
              onFocus = _ref12.onFocus,
              onBlur = _ref12.onBlur,
              presetColors = _ref12.presetColors,
              startOpen = _ref12.startOpen,
              _useColorInput = useColorInput(
                initialValue,
                throttle_1(onChange, 200)
              ),
              value = _useColorInput.value,
              realValue = _useColorInput.realValue,
              updateValue = _useColorInput.updateValue,
              color = _useColorInput.color,
              colorSpace = _useColorInput.colorSpace,
              cycleColorSpace = _useColorInput.cycleColorSpace,
              _usePresets = (function usePresets(
                presetColors,
                currentColor,
                colorSpace
              ) {
                var _useState8 = _slicedToArray(
                    (0, react__WEBPACK_IMPORTED_MODULE_26__.useState)(
                      (null == currentColor ? void 0 : currentColor.valid)
                        ? [currentColor]
                        : []
                    ),
                    2
                  ),
                  selectedColors = _useState8[0],
                  setSelectedColors = _useState8[1]
                ;(0, react__WEBPACK_IMPORTED_MODULE_26__.useEffect)(
                  function () {
                    void 0 === currentColor && setSelectedColors([])
                  },
                  [currentColor]
                )
                var presets = (0, react__WEBPACK_IMPORTED_MODULE_26__.useMemo)(
                    function () {
                      return (presetColors || [])
                        .map(function (preset) {
                          return 'string' == typeof preset
                            ? parseValue(preset)
                            : preset.title
                            ? Object.assign(
                                Object.assign({}, parseValue(preset.color)),
                                { keyword: preset.title }
                              )
                            : parseValue(preset.color)
                        })
                        .concat(selectedColors)
                        .filter(Boolean)
                        .slice(-27)
                    },
                    [presetColors, selectedColors]
                  ),
                  addPreset = (0,
                  react__WEBPACK_IMPORTED_MODULE_26__.useCallback)(
                    function (color) {
                      ;(null == color ? void 0 : color.valid) &&
                        (presets.some(function (preset) {
                          return (
                            id(preset[colorSpace]) === id(color[colorSpace])
                          )
                        }) ||
                          setSelectedColors(function (arr) {
                            return arr.concat(color)
                          }))
                    },
                    [colorSpace, presets]
                  )
                return { presets: presets, addPreset: addPreset }
              })(presetColors, color, colorSpace),
              presets = _usePresets.presets,
              addPreset = _usePresets.addPreset,
              Picker = ColorPicker[colorSpace]
            return react__WEBPACK_IMPORTED_MODULE_26__.createElement(
              Wrapper,
              null,
              react__WEBPACK_IMPORTED_MODULE_26__.createElement(
                PickerTooltip,
                {
                  trigger: 'click',
                  startOpen: startOpen,
                  closeOnClick: !0,
                  onVisibilityChange: function onVisibilityChange() {
                    return addPreset(color)
                  },
                  tooltip: react__WEBPACK_IMPORTED_MODULE_26__.createElement(
                    TooltipContent,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_26__.createElement(
                      Picker,
                      Object.assign(
                        {
                          color:
                            'transparent' === realValue ? '#000000' : realValue,
                        },
                        {
                          onChange: updateValue,
                          onFocus: onFocus,
                          onBlur: onBlur,
                        }
                      )
                    ),
                    presets.length > 0 &&
                      react__WEBPACK_IMPORTED_MODULE_26__.createElement(
                        Swatches,
                        null,
                        presets.map(function (preset, index) {
                          return react__WEBPACK_IMPORTED_MODULE_26__.createElement(
                            _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_29__.W,
                            {
                              key: ''.concat(preset.value, '-').concat(index),
                              hasChrome: !1,
                              tooltip:
                                react__WEBPACK_IMPORTED_MODULE_26__.createElement(
                                  Note,
                                  { note: preset.keyword || preset.value }
                                ),
                            },
                            react__WEBPACK_IMPORTED_MODULE_26__.createElement(
                              Swatch,
                              {
                                value: preset[colorSpace],
                                active:
                                  color &&
                                  id(preset[colorSpace]) ===
                                    id(color[colorSpace]),
                                onClick: function onClick() {
                                  return updateValue(preset.value)
                                },
                              }
                            )
                          )
                        })
                      )
                  ),
                },
                react__WEBPACK_IMPORTED_MODULE_26__.createElement(Swatch, {
                  value: realValue,
                  style: { margin: 4 },
                })
              ),
              react__WEBPACK_IMPORTED_MODULE_26__.createElement(Input, {
                id: (0, _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_29__.z)(
                  name
                ),
                value: value,
                onChange: function onChange(e) {
                  return updateValue(e.target.value)
                },
                onFocus: function onFocus(e) {
                  return e.target.select()
                },
                placeholder: 'Choose color...',
              }),
              value
                ? react__WEBPACK_IMPORTED_MODULE_26__.createElement(
                    ToggleIcon,
                    { icon: 'markup', onClick: cycleColorSpace }
                  )
                : null
            )
          }
      },
  },
])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFK2IsT0FBT0MsUUFDbEIsRUFDQUMsWUFBYSxvQkFDWC9lLE1BQVEsa0RBQTZCb1osV0FBWSxDQUNuRDRGLEtBQU0sU0FDTnBHLFFBQVNzRSxrQkFDTixLQUNQLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1iaWctY2FsZW5kYXIvLi9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9jb21wb25lbnRzL2Rpc3QvZXNtL0NvbG9yLWY5NTNkMDg4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfQ29sb3JQaWNrZXIsIF9mYWxsYmFja0NvbG9yO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5hc3NpZ24uanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3Qua2V5cy5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmpvaW4uanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QudG8tc3RyaW5nLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMubnVtYmVyLmNvbnN0cnVjdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLmV4ZWMuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAudG8tc3RyaW5nLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnJlcGxhY2UuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm1hcC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcubWF0Y2guanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc3BsaXQuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc2xpY2UuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QudmFsdWVzLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnN0YXJ0cy13aXRoLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24ubmFtZS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5kZXNjcmlwdGlvbi5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZyb20uanNcIjtcbmltcG9ydCB7IHUgYXMgX3Jvb3QsIHggYXMgaXNPYmplY3RfMSwgeSBhcyBpc1N5bWJvbF8xLCBXIGFzIFdpdGhUb29sdGlwLCBUIGFzIFRvb2x0aXBOb3RlLCBGIGFzIEZvcm0sIEkgYXMgSWNvbnMsIHogYXMgZ2V0Q29udHJvbElkLCBkIGFzIF9fcmVzdCB9IGZyb20gJy4vaW5kZXgtNjgxZTRiMDcuanMnO1xuaW1wb3J0IFJlYWN0X19kZWZhdWx0LCB7IHVzZVJlZiwgdXNlTWVtbywgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BzdG9yeWJvb2svdGhlbWluZyc7XG5pbXBvcnQgJ21lbW9pemVyaWZpYyc7XG5pbXBvcnQgJ0BzdG9yeWJvb2svY3NmJztcbmltcG9ydCAncXMnO1xuaW1wb3J0ICdAc3Rvcnlib29rL2NsaWVudC1sb2dnZXInO1xuXG5mdW5jdGlvbiB1KCkge1xuICByZXR1cm4gKHUgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIChlKSB7XG4gICAgZm9yICh2YXIgciA9IDE7IHIgPCBhcmd1bWVudHMubGVuZ3RoOyByKyspIHtcbiAgICAgIHZhciB0ID0gYXJndW1lbnRzW3JdO1xuXG4gICAgICBmb3IgKHZhciBuIGluIHQpIHtcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsIG4pICYmIChlW25dID0gdFtuXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGU7XG4gIH0pLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGMoZSwgcikge1xuICBpZiAobnVsbCA9PSBlKSByZXR1cm4ge307XG4gIHZhciB0LFxuICAgICAgbixcbiAgICAgIG8gPSB7fSxcbiAgICAgIGEgPSBPYmplY3Qua2V5cyhlKTtcblxuICBmb3IgKG4gPSAwOyBuIDwgYS5sZW5ndGg7IG4rKykge1xuICAgIHIuaW5kZXhPZih0ID0gYVtuXSkgPj0gMCB8fCAob1t0XSA9IGVbdF0pO1xuICB9XG5cbiAgcmV0dXJuIG87XG59XG5cbmZ1bmN0aW9uIGkoZSkge1xuICB2YXIgdCA9IHVzZVJlZihlKSxcbiAgICAgIG4gPSB1c2VSZWYoZnVuY3Rpb24gKGUpIHtcbiAgICB0LmN1cnJlbnQgJiYgdC5jdXJyZW50KGUpO1xuICB9KTtcbiAgcmV0dXJuIHQuY3VycmVudCA9IGUsIG4uY3VycmVudDtcbn1cblxudmFyIHMgPSBmdW5jdGlvbiBzKGUsIHIsIHQpIHtcbiAgcmV0dXJuIHZvaWQgMCA9PT0gciAmJiAociA9IDApLCB2b2lkIDAgPT09IHQgJiYgKHQgPSAxKSwgZSA+IHQgPyB0IDogZSA8IHIgPyByIDogZTtcbn0sXG4gICAgZiA9IGZ1bmN0aW9uIGYoZSkge1xuICByZXR1cm4gXCJ0b3VjaGVzXCIgaW4gZTtcbn0sXG4gICAgdiA9IGZ1bmN0aW9uIHYoZSkge1xuICByZXR1cm4gZSAmJiBlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgc2VsZjtcbn0sXG4gICAgZCA9IGZ1bmN0aW9uIGQoZSwgciwgdCkge1xuICB2YXIgbiA9IGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBvID0gZihyKSA/IGZ1bmN0aW9uIChlLCByKSB7XG4gICAgZm9yICh2YXIgdCA9IDA7IHQgPCBlLmxlbmd0aDsgdCsrKSB7XG4gICAgICBpZiAoZVt0XS5pZGVudGlmaWVyID09PSByKSByZXR1cm4gZVt0XTtcbiAgICB9XG5cbiAgICByZXR1cm4gZVswXTtcbiAgfShyLnRvdWNoZXMsIHQpIDogcjtcbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiBzKChvLnBhZ2VYIC0gKG4ubGVmdCArIHYoZSkucGFnZVhPZmZzZXQpKSAvIG4ud2lkdGgpLFxuICAgIHRvcDogcygoby5wYWdlWSAtIChuLnRvcCArIHYoZSkucGFnZVlPZmZzZXQpKSAvIG4uaGVpZ2h0KVxuICB9O1xufSxcbiAgICBoID0gZnVuY3Rpb24gaChlKSB7XG4gICFmKGUpICYmIGUucHJldmVudERlZmF1bHQoKTtcbn0sXG4gICAgbSA9IFJlYWN0X19kZWZhdWx0Lm1lbW8oZnVuY3Rpb24gKG8pIHtcbiAgdmFyIGEgPSBvLm9uTW92ZSxcbiAgICAgIGwgPSBvLm9uS2V5LFxuICAgICAgcyA9IGMobywgW1wib25Nb3ZlXCIsIFwib25LZXlcIl0pLFxuICAgICAgbSA9IHVzZVJlZihudWxsKSxcbiAgICAgIGcgPSBpKGEpLFxuICAgICAgcCA9IGkobCksXG4gICAgICBiID0gdXNlUmVmKG51bGwpLFxuICAgICAgXyA9IHVzZVJlZighMSksXG4gICAgICB4ID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGUgPSBmdW5jdGlvbiBlKF9lKSB7XG4gICAgICBoKF9lKSwgKGYoX2UpID8gX2UudG91Y2hlcy5sZW5ndGggPiAwIDogX2UuYnV0dG9ucyA+IDApICYmIG0uY3VycmVudCA/IGcoZChtLmN1cnJlbnQsIF9lLCBiLmN1cnJlbnQpKSA6IHQoITEpO1xuICAgIH0sXG4gICAgICAgIHIgPSBmdW5jdGlvbiByKCkge1xuICAgICAgcmV0dXJuIHQoITEpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB0KHQpIHtcbiAgICAgIHZhciBuID0gXy5jdXJyZW50LFxuICAgICAgICAgIG8gPSB2KG0uY3VycmVudCksXG4gICAgICAgICAgYSA9IHQgPyBvLmFkZEV2ZW50TGlzdGVuZXIgOiBvLnJlbW92ZUV2ZW50TGlzdGVuZXI7XG4gICAgICBhKG4gPyBcInRvdWNobW92ZVwiIDogXCJtb3VzZW1vdmVcIiwgZSksIGEobiA/IFwidG91Y2hlbmRcIiA6IFwibW91c2V1cFwiLCByKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW2Z1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgciA9IGUubmF0aXZlRXZlbnQsXG4gICAgICAgICAgbiA9IG0uY3VycmVudDtcblxuICAgICAgaWYgKG4gJiYgKGgociksICFmdW5jdGlvbiAoZSwgcikge1xuICAgICAgICByZXR1cm4gciAmJiAhZihlKTtcbiAgICAgIH0ociwgXy5jdXJyZW50KSAmJiBuKSkge1xuICAgICAgICBpZiAoZihyKSkge1xuICAgICAgICAgIF8uY3VycmVudCA9ICEwO1xuICAgICAgICAgIHZhciBvID0gci5jaGFuZ2VkVG91Y2hlcyB8fCBbXTtcbiAgICAgICAgICBvLmxlbmd0aCAmJiAoYi5jdXJyZW50ID0gb1swXS5pZGVudGlmaWVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG4uZm9jdXMoKSwgZyhkKG4sIHIsIGIuY3VycmVudCkpLCB0KCEwKTtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHIgPSBlLndoaWNoIHx8IGUua2V5Q29kZTtcbiAgICAgIHIgPCAzNyB8fCByID4gNDAgfHwgKGUucHJldmVudERlZmF1bHQoKSwgcCh7XG4gICAgICAgIGxlZnQ6IDM5ID09PSByID8gLjA1IDogMzcgPT09IHIgPyAtLjA1IDogMCxcbiAgICAgICAgdG9wOiA0MCA9PT0gciA/IC4wNSA6IDM4ID09PSByID8gLS4wNSA6IDBcbiAgICAgIH0pKTtcbiAgICB9LCB0XTtcbiAgfSwgW3AsIGddKSxcbiAgICAgIEMgPSB4WzBdLFxuICAgICAgRSA9IHhbMV0sXG4gICAgICBIID0geFsyXTtcblxuICByZXR1cm4gdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gSDtcbiAgfSwgW0hdKSwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB1KHt9LCBzLCB7XG4gICAgb25Ub3VjaFN0YXJ0OiBDLFxuICAgIG9uTW91c2VEb3duOiBDLFxuICAgIGNsYXNzTmFtZTogXCJyZWFjdC1jb2xvcmZ1bF9faW50ZXJhY3RpdmVcIixcbiAgICByZWY6IG0sXG4gICAgb25LZXlEb3duOiBFLFxuICAgIHRhYkluZGV4OiAwLFxuICAgIHJvbGU6IFwic2xpZGVyXCJcbiAgfSkpO1xufSksXG4gICAgZyA9IGZ1bmN0aW9uIGcoZSkge1xuICByZXR1cm4gZS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIik7XG59LFxuICAgIHAgPSBmdW5jdGlvbiBwKHIpIHtcbiAgdmFyIHQgPSByLmNvbG9yLFxuICAgICAgbiA9IHIubGVmdCxcbiAgICAgIG8gPSByLnRvcCxcbiAgICAgIGEgPSB2b2lkIDAgPT09IG8gPyAuNSA6IG8sXG4gICAgICBsID0gZyhbXCJyZWFjdC1jb2xvcmZ1bF9fcG9pbnRlclwiLCByLmNsYXNzTmFtZV0pO1xuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBsLFxuICAgIHN0eWxlOiB7XG4gICAgICB0b3A6IDEwMCAqIGEgKyBcIiVcIixcbiAgICAgIGxlZnQ6IDEwMCAqIG4gKyBcIiVcIlxuICAgIH1cbiAgfSwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcInJlYWN0LWNvbG9yZnVsX19wb2ludGVyLWZpbGxcIixcbiAgICBzdHlsZToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0XG4gICAgfVxuICB9KSk7XG59LFxuICAgIGIgPSBmdW5jdGlvbiBiKGUsIHIsIHQpIHtcbiAgcmV0dXJuIHZvaWQgMCA9PT0gciAmJiAociA9IDApLCB2b2lkIDAgPT09IHQgJiYgKHQgPSBNYXRoLnBvdygxMCwgcikpLCBNYXRoLnJvdW5kKHQgKiBlKSAvIHQ7XG59LFxuICAgIF8gPSB7XG4gIGdyYWQ6IC45LFxuICB0dXJuOiAzNjAsXG4gIHJhZDogMzYwIC8gKDIgKiBNYXRoLlBJKVxufSxcbiAgICB4ID0gZnVuY3Rpb24geChlKSB7XG4gIHJldHVybiBcIiNcIiA9PT0gZVswXSAmJiAoZSA9IGUuc3Vic3RyKDEpKSwgZS5sZW5ndGggPCA2ID8ge1xuICAgIHI6IHBhcnNlSW50KGVbMF0gKyBlWzBdLCAxNiksXG4gICAgZzogcGFyc2VJbnQoZVsxXSArIGVbMV0sIDE2KSxcbiAgICBiOiBwYXJzZUludChlWzJdICsgZVsyXSwgMTYpLFxuICAgIGE6IDFcbiAgfSA6IHtcbiAgICByOiBwYXJzZUludChlLnN1YnN0cigwLCAyKSwgMTYpLFxuICAgIGc6IHBhcnNlSW50KGUuc3Vic3RyKDIsIDIpLCAxNiksXG4gICAgYjogcGFyc2VJbnQoZS5zdWJzdHIoNCwgMiksIDE2KSxcbiAgICBhOiAxXG4gIH07XG59LFxuICAgIEMgPSBmdW5jdGlvbiBDKGUsIHIpIHtcbiAgcmV0dXJuIHZvaWQgMCA9PT0gciAmJiAociA9IFwiZGVnXCIpLCBOdW1iZXIoZSkgKiAoX1tyXSB8fCAxKTtcbn0sXG4gICAgRSA9IGZ1bmN0aW9uIEUoZSkge1xuICB2YXIgciA9IC9oc2xhP1xcKD9cXHMqKC0/XFxkKlxcLj9cXGQrKShkZWd8cmFkfGdyYWR8dHVybik/WyxcXHNdKygtP1xcZCpcXC4/XFxkKyklP1ssXFxzXSsoLT9cXGQqXFwuP1xcZCspJT8sP1xccypbL1xcc10qKC0/XFxkKlxcLj9cXGQrKT8oJSk/XFxzKlxcKT8vaS5leGVjKGUpO1xuICByZXR1cm4gciA/IE0oe1xuICAgIGg6IEMoclsxXSwgclsyXSksXG4gICAgczogTnVtYmVyKHJbM10pLFxuICAgIGw6IE51bWJlcihyWzRdKSxcbiAgICBhOiB2b2lkIDAgPT09IHJbNV0gPyAxIDogTnVtYmVyKHJbNV0pIC8gKHJbNl0gPyAxMDAgOiAxKVxuICB9KSA6IHtcbiAgICBoOiAwLFxuICAgIHM6IDAsXG4gICAgdjogMCxcbiAgICBhOiAxXG4gIH07XG59LFxuICAgIE0gPSBmdW5jdGlvbiBNKGUpIHtcbiAgdmFyIHIgPSBlLnMsXG4gICAgICB0ID0gZS5sO1xuICByZXR1cm4ge1xuICAgIGg6IGUuaCxcbiAgICBzOiAociAqPSAodCA8IDUwID8gdCA6IDEwMCAtIHQpIC8gMTAwKSA+IDAgPyAyICogciAvICh0ICsgcikgKiAxMDAgOiAwLFxuICAgIHY6IHQgKyByLFxuICAgIGE6IGUuYVxuICB9O1xufSxcbiAgICBOID0gZnVuY3Rpb24gTihlKSB7XG4gIHZhciByID0gZS5zLFxuICAgICAgdCA9IGUudixcbiAgICAgIG4gPSBlLmEsXG4gICAgICBvID0gKDIwMCAtIHIpICogdCAvIDEwMDtcbiAgcmV0dXJuIHtcbiAgICBoOiBiKGUuaCksXG4gICAgczogYihvID4gMCAmJiBvIDwgMjAwID8gciAqIHQgLyAxMDAgLyAobyA8PSAxMDAgPyBvIDogMjAwIC0gbykgKiAxMDAgOiAwKSxcbiAgICBsOiBiKG8gLyAyKSxcbiAgICBhOiBiKG4sIDIpXG4gIH07XG59LFxuICAgIHcgPSBmdW5jdGlvbiB3KGUpIHtcbiAgdmFyIHIgPSBOKGUpO1xuICByZXR1cm4gXCJoc2woXCIgKyByLmggKyBcIiwgXCIgKyByLnMgKyBcIiUsIFwiICsgci5sICsgXCIlKVwiO1xufSxcbiAgICB5ID0gZnVuY3Rpb24geShlKSB7XG4gIHZhciByID0gTihlKTtcbiAgcmV0dXJuIFwiaHNsYShcIiArIHIuaCArIFwiLCBcIiArIHIucyArIFwiJSwgXCIgKyByLmwgKyBcIiUsIFwiICsgci5hICsgXCIpXCI7XG59LFxuICAgIHEgPSBmdW5jdGlvbiBxKGUpIHtcbiAgdmFyIHIgPSBlLmgsXG4gICAgICB0ID0gZS5zLFxuICAgICAgbiA9IGUudixcbiAgICAgIG8gPSBlLmE7XG4gIHIgPSByIC8gMzYwICogNiwgdCAvPSAxMDAsIG4gLz0gMTAwO1xuICB2YXIgYSA9IE1hdGguZmxvb3IociksXG4gICAgICBsID0gbiAqICgxIC0gdCksXG4gICAgICB1ID0gbiAqICgxIC0gKHIgLSBhKSAqIHQpLFxuICAgICAgYyA9IG4gKiAoMSAtICgxIC0gciArIGEpICogdCksXG4gICAgICBpID0gYSAlIDY7XG4gIHJldHVybiB7XG4gICAgcjogYigyNTUgKiBbbiwgdSwgbCwgbCwgYywgbl1baV0pLFxuICAgIGc6IGIoMjU1ICogW2MsIG4sIG4sIHUsIGwsIGxdW2ldKSxcbiAgICBiOiBiKDI1NSAqIFtsLCBsLCBjLCBuLCBuLCB1XVtpXSksXG4gICAgYTogYihvLCAyKVxuICB9O1xufSxcbiAgICBJID0gZnVuY3Rpb24gSShlKSB7XG4gIHZhciByID0gL3JnYmE/XFwoP1xccyooLT9cXGQqXFwuP1xcZCspKCUpP1ssXFxzXSsoLT9cXGQqXFwuP1xcZCspKCUpP1ssXFxzXSsoLT9cXGQqXFwuP1xcZCspKCUpPyw/XFxzKlsvXFxzXSooLT9cXGQqXFwuP1xcZCspPyglKT9cXHMqXFwpPy9pLmV4ZWMoZSk7XG4gIHJldHVybiByID8gQih7XG4gICAgcjogTnVtYmVyKHJbMV0pIC8gKHJbMl0gPyAxMDAgLyAyNTUgOiAxKSxcbiAgICBnOiBOdW1iZXIoclszXSkgLyAocls0XSA/IDEwMCAvIDI1NSA6IDEpLFxuICAgIGI6IE51bWJlcihyWzVdKSAvIChyWzZdID8gMTAwIC8gMjU1IDogMSksXG4gICAgYTogdm9pZCAwID09PSByWzddID8gMSA6IE51bWJlcihyWzddKSAvIChyWzhdID8gMTAwIDogMSlcbiAgfSkgOiB7XG4gICAgaDogMCxcbiAgICBzOiAwLFxuICAgIHY6IDAsXG4gICAgYTogMVxuICB9O1xufSxcbiAgICB6ID0gZnVuY3Rpb24geihlKSB7XG4gIHZhciByID0gZS50b1N0cmluZygxNik7XG4gIHJldHVybiByLmxlbmd0aCA8IDIgPyBcIjBcIiArIHIgOiByO1xufSxcbiAgICBCID0gZnVuY3Rpb24gQihlKSB7XG4gIHZhciByID0gZS5yLFxuICAgICAgdCA9IGUuZyxcbiAgICAgIG4gPSBlLmIsXG4gICAgICBvID0gZS5hLFxuICAgICAgYSA9IE1hdGgubWF4KHIsIHQsIG4pLFxuICAgICAgbCA9IGEgLSBNYXRoLm1pbihyLCB0LCBuKSxcbiAgICAgIHUgPSBsID8gYSA9PT0gciA/ICh0IC0gbikgLyBsIDogYSA9PT0gdCA/IDIgKyAobiAtIHIpIC8gbCA6IDQgKyAociAtIHQpIC8gbCA6IDA7XG4gIHJldHVybiB7XG4gICAgaDogYig2MCAqICh1IDwgMCA/IHUgKyA2IDogdSkpLFxuICAgIHM6IGIoYSA/IGwgLyBhICogMTAwIDogMCksXG4gICAgdjogYihhIC8gMjU1ICogMTAwKSxcbiAgICBhOiBvXG4gIH07XG59LFxuICAgIEsgPSBSZWFjdF9fZGVmYXVsdC5tZW1vKGZ1bmN0aW9uIChyKSB7XG4gIHZhciB0ID0gci5odWUsXG4gICAgICBuID0gci5vbkNoYW5nZSxcbiAgICAgIG8gPSBnKFtcInJlYWN0LWNvbG9yZnVsX19odWVcIiwgci5jbGFzc05hbWVdKTtcbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogb1xuICB9LCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KG0sIHtcbiAgICBvbk1vdmU6IGZ1bmN0aW9uIG9uTW92ZShlKSB7XG4gICAgICBuKHtcbiAgICAgICAgaDogMzYwICogZS5sZWZ0XG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uS2V5OiBmdW5jdGlvbiBvbktleShlKSB7XG4gICAgICBuKHtcbiAgICAgICAgaDogcyh0ICsgMzYwICogZS5sZWZ0LCAwLCAzNjApXG4gICAgICB9KTtcbiAgICB9LFxuICAgIFwiYXJpYS1sYWJlbFwiOiBcIkh1ZVwiLFxuICAgIFwiYXJpYS12YWx1ZXRleHRcIjogYih0KVxuICB9LCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KHAsIHtcbiAgICBjbGFzc05hbWU6IFwicmVhY3QtY29sb3JmdWxfX2h1ZS1wb2ludGVyXCIsXG4gICAgbGVmdDogdCAvIDM2MCxcbiAgICBjb2xvcjogdyh7XG4gICAgICBoOiB0LFxuICAgICAgczogMTAwLFxuICAgICAgdjogMTAwLFxuICAgICAgYTogMVxuICAgIH0pXG4gIH0pKSk7XG59KSxcbiAgICBMID0gUmVhY3RfX2RlZmF1bHQubWVtbyhmdW5jdGlvbiAocikge1xuICB2YXIgdCA9IHIuaHN2YSxcbiAgICAgIG4gPSByLm9uQ2hhbmdlLFxuICAgICAgbyA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHcoe1xuICAgICAgaDogdC5oLFxuICAgICAgczogMTAwLFxuICAgICAgdjogMTAwLFxuICAgICAgYTogMVxuICAgIH0pXG4gIH07XG4gIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwicmVhY3QtY29sb3JmdWxfX3NhdHVyYXRpb25cIixcbiAgICBzdHlsZTogb1xuICB9LCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KG0sIHtcbiAgICBvbk1vdmU6IGZ1bmN0aW9uIG9uTW92ZShlKSB7XG4gICAgICBuKHtcbiAgICAgICAgczogMTAwICogZS5sZWZ0LFxuICAgICAgICB2OiAxMDAgLSAxMDAgKiBlLnRvcFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbktleTogZnVuY3Rpb24gb25LZXkoZSkge1xuICAgICAgbih7XG4gICAgICAgIHM6IHModC5zICsgMTAwICogZS5sZWZ0LCAwLCAxMDApLFxuICAgICAgICB2OiBzKHQudiAtIDEwMCAqIGUudG9wLCAwLCAxMDApXG4gICAgICB9KTtcbiAgICB9LFxuICAgIFwiYXJpYS1sYWJlbFwiOiBcIkNvbG9yXCIsXG4gICAgXCJhcmlhLXZhbHVldGV4dFwiOiBcIlNhdHVyYXRpb24gXCIgKyBiKHQucykgKyBcIiUsIEJyaWdodG5lc3MgXCIgKyBiKHQudikgKyBcIiVcIlxuICB9LCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KHAsIHtcbiAgICBjbGFzc05hbWU6IFwicmVhY3QtY29sb3JmdWxfX3NhdHVyYXRpb24tcG9pbnRlclwiLFxuICAgIHRvcDogMSAtIHQudiAvIDEwMCxcbiAgICBsZWZ0OiB0LnMgLyAxMDAsXG4gICAgY29sb3I6IHcodClcbiAgfSkpKTtcbn0pLFxuICAgIEEgPSBmdW5jdGlvbiBBKGUsIHIpIHtcbiAgaWYgKGUgPT09IHIpIHJldHVybiAhMDtcblxuICBmb3IgKHZhciB0IGluIGUpIHtcbiAgICBpZiAoZVt0XSAhPT0gclt0XSkgcmV0dXJuICExO1xuICB9XG5cbiAgcmV0dXJuICEwO1xufSxcbiAgICBTID0gZnVuY3Rpb24gUyhlLCByKSB7XG4gIHJldHVybiBlLnJlcGxhY2UoL1xccy9nLCBcIlwiKSA9PT0gci5yZXBsYWNlKC9cXHMvZywgXCJcIik7XG59O1xuXG5mdW5jdGlvbiBUKGUsIHQsIGwpIHtcbiAgdmFyIHUgPSBpKGwpLFxuICAgICAgYyA9IHVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZS50b0hzdmEodCk7XG4gIH0pLFxuICAgICAgcyA9IGNbMF0sXG4gICAgICBmID0gY1sxXSxcbiAgICAgIHYgPSB1c2VSZWYoe1xuICAgIGNvbG9yOiB0LFxuICAgIGhzdmE6IHNcbiAgfSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFlLmVxdWFsKHQsIHYuY3VycmVudC5jb2xvcikpIHtcbiAgICAgIHZhciByID0gZS50b0hzdmEodCk7XG4gICAgICB2LmN1cnJlbnQgPSB7XG4gICAgICAgIGhzdmE6IHIsXG4gICAgICAgIGNvbG9yOiB0XG4gICAgICB9LCBmKHIpO1xuICAgIH1cbiAgfSwgW3QsIGVdKSwgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcjtcbiAgICBBKHMsIHYuY3VycmVudC5oc3ZhKSB8fCBlLmVxdWFsKHIgPSBlLmZyb21Ic3ZhKHMpLCB2LmN1cnJlbnQuY29sb3IpIHx8ICh2LmN1cnJlbnQgPSB7XG4gICAgICBoc3ZhOiBzLFxuICAgICAgY29sb3I6IHJcbiAgICB9LCB1KHIpKTtcbiAgfSwgW3MsIGUsIHVdKTtcbiAgdmFyIGQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZSkge1xuICAgIGYoZnVuY3Rpb24gKHIpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByLCBlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuICByZXR1cm4gW3MsIGRdO1xufVxuXG52YXIgUCA9IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyA/IHVzZUxheW91dEVmZmVjdCA6IHVzZUVmZmVjdCxcbiAgICBYID0gZnVuY3Rpb24gWCgpIHtcbiAgcmV0dXJuIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fID8gX193ZWJwYWNrX25vbmNlX18gOiB2b2lkIDA7XG59LFxuICAgIFIgPSBuZXcgTWFwKCksXG4gICAgViA9IGZ1bmN0aW9uIFYoZSkge1xuICBQKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgciA9IGUuY3VycmVudCA/IGUuY3VycmVudC5vd25lckRvY3VtZW50IDogZG9jdW1lbnQ7XG5cbiAgICBpZiAodm9pZCAwICE9PSByICYmICFSLmhhcyhyKSkge1xuICAgICAgdmFyIHQgPSByLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgIHQuaW5uZXJIVE1MID0gJy5yZWFjdC1jb2xvcmZ1bHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOjIwMHB4O2hlaWdodDoyMDBweDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7Y3Vyc29yOmRlZmF1bHR9LnJlYWN0LWNvbG9yZnVsX19zYXR1cmF0aW9ue3Bvc2l0aW9uOnJlbGF0aXZlO2ZsZXgtZ3JvdzoxO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItYm90dG9tOjEycHggc29saWQgIzAwMDtib3JkZXItcmFkaXVzOjhweCA4cHggMCAwO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDBkZWcsIzAwMCx0cmFuc3BhcmVudCksbGluZWFyLWdyYWRpZW50KDkwZGVnLCNmZmYsaHNsYSgwLDAlLDEwMCUsMCkpfS5yZWFjdC1jb2xvcmZ1bF9fYWxwaGEtZ3JhZGllbnQsLnJlYWN0LWNvbG9yZnVsX19wb2ludGVyLWZpbGx7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDtyaWdodDowO2JvdHRvbTowO3BvaW50ZXItZXZlbnRzOm5vbmU7Ym9yZGVyLXJhZGl1czppbmhlcml0fS5yZWFjdC1jb2xvcmZ1bF9fYWxwaGEtZ3JhZGllbnQsLnJlYWN0LWNvbG9yZnVsX19zYXR1cmF0aW9ue2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4IHJnYmEoMCwwLDAsLjA1KX0ucmVhY3QtY29sb3JmdWxfX2FscGhhLC5yZWFjdC1jb2xvcmZ1bF9faHVle3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoyNHB4fS5yZWFjdC1jb2xvcmZ1bF9faHVle2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDkwZGVnLHJlZCAwLCNmZjAgMTclLCMwZjAgMzMlLCMwZmYgNTAlLCMwMGYgNjclLCNmMGYgODMlLHJlZCl9LnJlYWN0LWNvbG9yZnVsX19sYXN0LWNvbnRyb2x7Ym9yZGVyLXJhZGl1czowIDAgOHB4IDhweH0ucmVhY3QtY29sb3JmdWxfX2ludGVyYWN0aXZle3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2JvcmRlci1yYWRpdXM6aW5oZXJpdDtvdXRsaW5lOm5vbmU7dG91Y2gtYWN0aW9uOm5vbmV9LnJlYWN0LWNvbG9yZnVsX19wb2ludGVye3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTtib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6MjhweDtoZWlnaHQ6MjhweDt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoycHggc29saWQgI2ZmZjtib3JkZXItcmFkaXVzOjUwJTtib3gtc2hhZG93OjAgMnB4IDRweCByZ2JhKDAsMCwwLC4yKX0ucmVhY3QtY29sb3JmdWxfX2ludGVyYWN0aXZlOmZvY3VzIC5yZWFjdC1jb2xvcmZ1bF9fcG9pbnRlcnt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMS4xKX0ucmVhY3QtY29sb3JmdWxfX2FscGhhLC5yZWFjdC1jb2xvcmZ1bF9fYWxwaGEtcG9pbnRlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbC1vcGFjaXR5PVwiLjA1XCI+PHBhdGggZD1cIk04IDBoOHY4SDh6TTAgOGg4djhIMHpcIi8+PC9zdmc+XFwnKX0ucmVhY3QtY29sb3JmdWxfX3NhdHVyYXRpb24tcG9pbnRlcnt6LWluZGV4OjN9LnJlYWN0LWNvbG9yZnVsX19odWUtcG9pbnRlcnt6LWluZGV4OjJ9JywgUi5zZXQociwgdCk7XG4gICAgICB2YXIgbiA9IFgoKTtcbiAgICAgIG4gJiYgdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBuKSwgci5oZWFkLmFwcGVuZENoaWxkKHQpO1xuICAgIH1cbiAgfSwgW10pO1xufSxcbiAgICAkID0gZnVuY3Rpb24gJCh0KSB7XG4gIHZhciBuID0gdC5jbGFzc05hbWUsXG4gICAgICBvID0gdC5jb2xvck1vZGVsLFxuICAgICAgYSA9IHQuY29sb3IsXG4gICAgICBsID0gdm9pZCAwID09PSBhID8gby5kZWZhdWx0Q29sb3IgOiBhLFxuICAgICAgaSA9IHQub25DaGFuZ2UsXG4gICAgICBzID0gYyh0LCBbXCJjbGFzc05hbWVcIiwgXCJjb2xvck1vZGVsXCIsIFwiY29sb3JcIiwgXCJvbkNoYW5nZVwiXSksXG4gICAgICBmID0gdXNlUmVmKG51bGwpO1xuICBWKGYpO1xuICB2YXIgdiA9IFQobywgbCwgaSksXG4gICAgICBkID0gdlswXSxcbiAgICAgIGggPSB2WzFdLFxuICAgICAgbSA9IGcoW1wicmVhY3QtY29sb3JmdWxcIiwgbl0pO1xuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB1KHt9LCBzLCB7XG4gICAgcmVmOiBmLFxuICAgIGNsYXNzTmFtZTogbVxuICB9KSwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChMLCB7XG4gICAgaHN2YTogZCxcbiAgICBvbkNoYW5nZTogaFxuICB9KSwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChLLCB7XG4gICAgaHVlOiBkLmgsXG4gICAgb25DaGFuZ2U6IGgsXG4gICAgY2xhc3NOYW1lOiBcInJlYWN0LWNvbG9yZnVsX19sYXN0LWNvbnRyb2xcIlxuICB9KSk7XG59LFxuICAgIEcgPSB7XG4gIGRlZmF1bHRDb2xvcjogXCIwMDBcIixcbiAgdG9Ic3ZhOiBmdW5jdGlvbiB0b0hzdmEoZSkge1xuICAgIHJldHVybiBCKHgoZSkpO1xuICB9LFxuICBmcm9tSHN2YTogZnVuY3Rpb24gZnJvbUhzdmEoZSkge1xuICAgIHJldHVybiB0ID0gKHIgPSBxKGUpKS5nLCBuID0gci5iLCBcIiNcIiArIHooci5yKSArIHoodCkgKyB6KG4pO1xuICAgIHZhciByLCB0LCBuO1xuICB9LFxuICBlcXVhbDogZnVuY3Rpb24gZXF1YWwoZSwgcikge1xuICAgIHJldHVybiBlLnRvTG93ZXJDYXNlKCkgPT09IHIudG9Mb3dlckNhc2UoKSB8fCBBKHgoZSksIHgocikpO1xuICB9XG59LFxuICAgIEogPSBmdW5jdGlvbiBKKHIpIHtcbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJCwgdSh7fSwgciwge1xuICAgIGNvbG9yTW9kZWw6IEdcbiAgfSkpO1xufSxcbiAgICBRID0gZnVuY3Rpb24gUShyKSB7XG4gIHZhciB0ID0gci5jbGFzc05hbWUsXG4gICAgICBuID0gci5oc3ZhLFxuICAgICAgbyA9IHIub25DaGFuZ2UsXG4gICAgICBhID0ge1xuICAgIGJhY2tncm91bmRJbWFnZTogXCJsaW5lYXItZ3JhZGllbnQoOTBkZWcsIFwiICsgeShPYmplY3QuYXNzaWduKHt9LCBuLCB7XG4gICAgICBhOiAwXG4gICAgfSkpICsgXCIsIFwiICsgeShPYmplY3QuYXNzaWduKHt9LCBuLCB7XG4gICAgICBhOiAxXG4gICAgfSkpICsgXCIpXCJcbiAgfSxcbiAgICAgIGwgPSBnKFtcInJlYWN0LWNvbG9yZnVsX19hbHBoYVwiLCB0XSk7XG4gIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGxcbiAgfSwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcInJlYWN0LWNvbG9yZnVsX19hbHBoYS1ncmFkaWVudFwiLFxuICAgIHN0eWxlOiBhXG4gIH0pLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KG0sIHtcbiAgICBvbk1vdmU6IGZ1bmN0aW9uIG9uTW92ZShlKSB7XG4gICAgICBvKHtcbiAgICAgICAgYTogZS5sZWZ0XG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uS2V5OiBmdW5jdGlvbiBvbktleShlKSB7XG4gICAgICBvKHtcbiAgICAgICAgYTogcyhuLmEgKyBlLmxlZnQpXG4gICAgICB9KTtcbiAgICB9LFxuICAgIFwiYXJpYS1sYWJlbFwiOiBcIkFscGhhXCIsXG4gICAgXCJhcmlhLXZhbHVldGV4dFwiOiBiKDEwMCAqIG4uYSkgKyBcIiVcIlxuICB9LCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KHAsIHtcbiAgICBjbGFzc05hbWU6IFwicmVhY3QtY29sb3JmdWxfX2FscGhhLXBvaW50ZXJcIixcbiAgICBsZWZ0OiBuLmEsXG4gICAgY29sb3I6IHkobilcbiAgfSkpKTtcbn0sXG4gICAgVSA9IGZ1bmN0aW9uIFUodCkge1xuICB2YXIgbiA9IHQuY2xhc3NOYW1lLFxuICAgICAgbyA9IHQuY29sb3JNb2RlbCxcbiAgICAgIGEgPSB0LmNvbG9yLFxuICAgICAgbCA9IHZvaWQgMCA9PT0gYSA/IG8uZGVmYXVsdENvbG9yIDogYSxcbiAgICAgIGkgPSB0Lm9uQ2hhbmdlLFxuICAgICAgcyA9IGModCwgW1wiY2xhc3NOYW1lXCIsIFwiY29sb3JNb2RlbFwiLCBcImNvbG9yXCIsIFwib25DaGFuZ2VcIl0pLFxuICAgICAgZiA9IHVzZVJlZihudWxsKTtcbiAgVihmKTtcbiAgdmFyIHYgPSBUKG8sIGwsIGkpLFxuICAgICAgZCA9IHZbMF0sXG4gICAgICBoID0gdlsxXSxcbiAgICAgIG0gPSBnKFtcInJlYWN0LWNvbG9yZnVsXCIsIG5dKTtcbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgdSh7fSwgcywge1xuICAgIHJlZjogZixcbiAgICBjbGFzc05hbWU6IG1cbiAgfSksIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTCwge1xuICAgIGhzdmE6IGQsXG4gICAgb25DaGFuZ2U6IGhcbiAgfSksIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSywge1xuICAgIGh1ZTogZC5oLFxuICAgIG9uQ2hhbmdlOiBoXG4gIH0pLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFEsIHtcbiAgICBoc3ZhOiBkLFxuICAgIG9uQ2hhbmdlOiBoLFxuICAgIGNsYXNzTmFtZTogXCJyZWFjdC1jb2xvcmZ1bF9fbGFzdC1jb250cm9sXCJcbiAgfSkpO1xufSxcbiAgICBlZSA9IHtcbiAgZGVmYXVsdENvbG9yOiBcImhzbGEoMCwgMCUsIDAlLCAxKVwiLFxuICB0b0hzdmE6IEUsXG4gIGZyb21Ic3ZhOiB5LFxuICBlcXVhbDogU1xufSxcbiAgICByZSA9IGZ1bmN0aW9uIHJlKHIpIHtcbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVSwgdSh7fSwgciwge1xuICAgIGNvbG9yTW9kZWw6IGVlXG4gIH0pKTtcbn0sXG4gICAgZ2UgPSB7XG4gIGRlZmF1bHRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gIHRvSHN2YTogSSxcbiAgZnJvbUhzdmE6IGZ1bmN0aW9uIGZyb21Ic3ZhKGUpIHtcbiAgICB2YXIgciA9IHEoZSk7XG4gICAgcmV0dXJuIFwicmdiYShcIiArIHIuciArIFwiLCBcIiArIHIuZyArIFwiLCBcIiArIHIuYiArIFwiLCBcIiArIHIuYSArIFwiKVwiO1xuICB9LFxuICBlcXVhbDogU1xufSxcbiAgICBwZSA9IGZ1bmN0aW9uIHBlKHIpIHtcbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVSwgdSh7fSwgciwge1xuICAgIGNvbG9yTW9kZWw6IGdlXG4gIH0pKTtcbn07XG5cbnZhciBjb2xvck5hbWUgPSB7XG4gIFwiYWxpY2VibHVlXCI6IFsyNDAsIDI0OCwgMjU1XSxcbiAgXCJhbnRpcXVld2hpdGVcIjogWzI1MCwgMjM1LCAyMTVdLFxuICBcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcbiAgXCJhcXVhbWFyaW5lXCI6IFsxMjcsIDI1NSwgMjEyXSxcbiAgXCJhenVyZVwiOiBbMjQwLCAyNTUsIDI1NV0sXG4gIFwiYmVpZ2VcIjogWzI0NSwgMjQ1LCAyMjBdLFxuICBcImJpc3F1ZVwiOiBbMjU1LCAyMjgsIDE5Nl0sXG4gIFwiYmxhY2tcIjogWzAsIDAsIDBdLFxuICBcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcbiAgXCJibHVlXCI6IFswLCAwLCAyNTVdLFxuICBcImJsdWV2aW9sZXRcIjogWzEzOCwgNDMsIDIyNl0sXG4gIFwiYnJvd25cIjogWzE2NSwgNDIsIDQyXSxcbiAgXCJidXJseXdvb2RcIjogWzIyMiwgMTg0LCAxMzVdLFxuICBcImNhZGV0Ymx1ZVwiOiBbOTUsIDE1OCwgMTYwXSxcbiAgXCJjaGFydHJldXNlXCI6IFsxMjcsIDI1NSwgMF0sXG4gIFwiY2hvY29sYXRlXCI6IFsyMTAsIDEwNSwgMzBdLFxuICBcImNvcmFsXCI6IFsyNTUsIDEyNywgODBdLFxuICBcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcbiAgXCJjb3Juc2lsa1wiOiBbMjU1LCAyNDgsIDIyMF0sXG4gIFwiY3JpbXNvblwiOiBbMjIwLCAyMCwgNjBdLFxuICBcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcbiAgXCJkYXJrYmx1ZVwiOiBbMCwgMCwgMTM5XSxcbiAgXCJkYXJrY3lhblwiOiBbMCwgMTM5LCAxMzldLFxuICBcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwgMTM0LCAxMV0sXG4gIFwiZGFya2dyYXlcIjogWzE2OSwgMTY5LCAxNjldLFxuICBcImRhcmtncmVlblwiOiBbMCwgMTAwLCAwXSxcbiAgXCJkYXJrZ3JleVwiOiBbMTY5LCAxNjksIDE2OV0sXG4gIFwiZGFya2toYWtpXCI6IFsxODksIDE4MywgMTA3XSxcbiAgXCJkYXJrbWFnZW50YVwiOiBbMTM5LCAwLCAxMzldLFxuICBcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwgMTA3LCA0N10sXG4gIFwiZGFya29yYW5nZVwiOiBbMjU1LCAxNDAsIDBdLFxuICBcImRhcmtvcmNoaWRcIjogWzE1MywgNTAsIDIwNF0sXG4gIFwiZGFya3JlZFwiOiBbMTM5LCAwLCAwXSxcbiAgXCJkYXJrc2FsbW9uXCI6IFsyMzMsIDE1MCwgMTIyXSxcbiAgXCJkYXJrc2VhZ3JlZW5cIjogWzE0MywgMTg4LCAxNDNdLFxuICBcImRhcmtzbGF0ZWJsdWVcIjogWzcyLCA2MSwgMTM5XSxcbiAgXCJkYXJrc2xhdGVncmF5XCI6IFs0NywgNzksIDc5XSxcbiAgXCJkYXJrc2xhdGVncmV5XCI6IFs0NywgNzksIDc5XSxcbiAgXCJkYXJrdHVycXVvaXNlXCI6IFswLCAyMDYsIDIwOV0sXG4gIFwiZGFya3Zpb2xldFwiOiBbMTQ4LCAwLCAyMTFdLFxuICBcImRlZXBwaW5rXCI6IFsyNTUsIDIwLCAxNDddLFxuICBcImRlZXBza3libHVlXCI6IFswLCAxOTEsIDI1NV0sXG4gIFwiZGltZ3JheVwiOiBbMTA1LCAxMDUsIDEwNV0sXG4gIFwiZGltZ3JleVwiOiBbMTA1LCAxMDUsIDEwNV0sXG4gIFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcbiAgXCJmaXJlYnJpY2tcIjogWzE3OCwgMzQsIDM0XSxcbiAgXCJmbG9yYWx3aGl0ZVwiOiBbMjU1LCAyNTAsIDI0MF0sXG4gIFwiZm9yZXN0Z3JlZW5cIjogWzM0LCAxMzksIDM0XSxcbiAgXCJmdWNoc2lhXCI6IFsyNTUsIDAsIDI1NV0sXG4gIFwiZ2FpbnNib3JvXCI6IFsyMjAsIDIyMCwgMjIwXSxcbiAgXCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcbiAgXCJnb2xkXCI6IFsyNTUsIDIxNSwgMF0sXG4gIFwiZ29sZGVucm9kXCI6IFsyMTgsIDE2NSwgMzJdLFxuICBcImdyYXlcIjogWzEyOCwgMTI4LCAxMjhdLFxuICBcImdyZWVuXCI6IFswLCAxMjgsIDBdLFxuICBcImdyZWVueWVsbG93XCI6IFsxNzMsIDI1NSwgNDddLFxuICBcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxuICBcImhvbmV5ZGV3XCI6IFsyNDAsIDI1NSwgMjQwXSxcbiAgXCJob3RwaW5rXCI6IFsyNTUsIDEwNSwgMTgwXSxcbiAgXCJpbmRpYW5yZWRcIjogWzIwNSwgOTIsIDkyXSxcbiAgXCJpbmRpZ29cIjogWzc1LCAwLCAxMzBdLFxuICBcIml2b3J5XCI6IFsyNTUsIDI1NSwgMjQwXSxcbiAgXCJraGFraVwiOiBbMjQwLCAyMzAsIDE0MF0sXG4gIFwibGF2ZW5kZXJcIjogWzIzMCwgMjMwLCAyNTBdLFxuICBcImxhdmVuZGVyYmx1c2hcIjogWzI1NSwgMjQwLCAyNDVdLFxuICBcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxuICBcImxlbW9uY2hpZmZvblwiOiBbMjU1LCAyNTAsIDIwNV0sXG4gIFwibGlnaHRibHVlXCI6IFsxNzMsIDIxNiwgMjMwXSxcbiAgXCJsaWdodGNvcmFsXCI6IFsyNDAsIDEyOCwgMTI4XSxcbiAgXCJsaWdodGN5YW5cIjogWzIyNCwgMjU1LCAyNTVdLFxuICBcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFsyNTAsIDI1MCwgMjEwXSxcbiAgXCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxuICBcImxpZ2h0Z3JlZW5cIjogWzE0NCwgMjM4LCAxNDRdLFxuICBcImxpZ2h0Z3JleVwiOiBbMjExLCAyMTEsIDIxMV0sXG4gIFwibGlnaHRwaW5rXCI6IFsyNTUsIDE4MiwgMTkzXSxcbiAgXCJsaWdodHNhbG1vblwiOiBbMjU1LCAxNjAsIDEyMl0sXG4gIFwibGlnaHRzZWFncmVlblwiOiBbMzIsIDE3OCwgMTcwXSxcbiAgXCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxuICBcImxpZ2h0c2xhdGVncmF5XCI6IFsxMTksIDEzNiwgMTUzXSxcbiAgXCJsaWdodHNsYXRlZ3JleVwiOiBbMTE5LCAxMzYsIDE1M10sXG4gIFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwgMTk2LCAyMjJdLFxuICBcImxpZ2h0eWVsbG93XCI6IFsyNTUsIDI1NSwgMjI0XSxcbiAgXCJsaW1lXCI6IFswLCAyNTUsIDBdLFxuICBcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxuICBcImxpbmVuXCI6IFsyNTAsIDI0MCwgMjMwXSxcbiAgXCJtYWdlbnRhXCI6IFsyNTUsIDAsIDI1NV0sXG4gIFwibWFyb29uXCI6IFsxMjgsIDAsIDBdLFxuICBcIm1lZGl1bWFxdWFtYXJpbmVcIjogWzEwMiwgMjA1LCAxNzBdLFxuICBcIm1lZGl1bWJsdWVcIjogWzAsIDAsIDIwNV0sXG4gIFwibWVkaXVtb3JjaGlkXCI6IFsxODYsIDg1LCAyMTFdLFxuICBcIm1lZGl1bXB1cnBsZVwiOiBbMTQ3LCAxMTIsIDIxOV0sXG4gIFwibWVkaXVtc2VhZ3JlZW5cIjogWzYwLCAxNzksIDExM10sXG4gIFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcbiAgXCJtZWRpdW1zcHJpbmdncmVlblwiOiBbMCwgMjUwLCAxNTRdLFxuICBcIm1lZGl1bXR1cnF1b2lzZVwiOiBbNzIsIDIwOSwgMjA0XSxcbiAgXCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwgMjEsIDEzM10sXG4gIFwibWlkbmlnaHRibHVlXCI6IFsyNSwgMjUsIDExMl0sXG4gIFwibWludGNyZWFtXCI6IFsyNDUsIDI1NSwgMjUwXSxcbiAgXCJtaXN0eXJvc2VcIjogWzI1NSwgMjI4LCAyMjVdLFxuICBcIm1vY2Nhc2luXCI6IFsyNTUsIDIyOCwgMTgxXSxcbiAgXCJuYXZham93aGl0ZVwiOiBbMjU1LCAyMjIsIDE3M10sXG4gIFwibmF2eVwiOiBbMCwgMCwgMTI4XSxcbiAgXCJvbGRsYWNlXCI6IFsyNTMsIDI0NSwgMjMwXSxcbiAgXCJvbGl2ZVwiOiBbMTI4LCAxMjgsIDBdLFxuICBcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcbiAgXCJvcmFuZ2VcIjogWzI1NSwgMTY1LCAwXSxcbiAgXCJvcmFuZ2VyZWRcIjogWzI1NSwgNjksIDBdLFxuICBcIm9yY2hpZFwiOiBbMjE4LCAxMTIsIDIxNF0sXG4gIFwicGFsZWdvbGRlbnJvZFwiOiBbMjM4LCAyMzIsIDE3MF0sXG4gIFwicGFsZWdyZWVuXCI6IFsxNTIsIDI1MSwgMTUyXSxcbiAgXCJwYWxldHVycXVvaXNlXCI6IFsxNzUsIDIzOCwgMjM4XSxcbiAgXCJwYWxldmlvbGV0cmVkXCI6IFsyMTksIDExMiwgMTQ3XSxcbiAgXCJwYXBheWF3aGlwXCI6IFsyNTUsIDIzOSwgMjEzXSxcbiAgXCJwZWFjaHB1ZmZcIjogWzI1NSwgMjE4LCAxODVdLFxuICBcInBlcnVcIjogWzIwNSwgMTMzLCA2M10sXG4gIFwicGlua1wiOiBbMjU1LCAxOTIsIDIwM10sXG4gIFwicGx1bVwiOiBbMjIxLCAxNjAsIDIyMV0sXG4gIFwicG93ZGVyYmx1ZVwiOiBbMTc2LCAyMjQsIDIzMF0sXG4gIFwicHVycGxlXCI6IFsxMjgsIDAsIDEyOF0sXG4gIFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLCA1MSwgMTUzXSxcbiAgXCJyZWRcIjogWzI1NSwgMCwgMF0sXG4gIFwicm9zeWJyb3duXCI6IFsxODgsIDE0MywgMTQzXSxcbiAgXCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXG4gIFwic2FkZGxlYnJvd25cIjogWzEzOSwgNjksIDE5XSxcbiAgXCJzYWxtb25cIjogWzI1MCwgMTI4LCAxMTRdLFxuICBcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXG4gIFwic2VhZ3JlZW5cIjogWzQ2LCAxMzksIDg3XSxcbiAgXCJzZWFzaGVsbFwiOiBbMjU1LCAyNDUsIDIzOF0sXG4gIFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXG4gIFwic2lsdmVyXCI6IFsxOTIsIDE5MiwgMTkyXSxcbiAgXCJza3libHVlXCI6IFsxMzUsIDIwNiwgMjM1XSxcbiAgXCJzbGF0ZWJsdWVcIjogWzEwNiwgOTAsIDIwNV0sXG4gIFwic2xhdGVncmF5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcbiAgXCJzbGF0ZWdyZXlcIjogWzExMiwgMTI4LCAxNDRdLFxuICBcInNub3dcIjogWzI1NSwgMjUwLCAyNTBdLFxuICBcInNwcmluZ2dyZWVuXCI6IFswLCAyNTUsIDEyN10sXG4gIFwic3RlZWxibHVlXCI6IFs3MCwgMTMwLCAxODBdLFxuICBcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXG4gIFwidGVhbFwiOiBbMCwgMTI4LCAxMjhdLFxuICBcInRoaXN0bGVcIjogWzIxNiwgMTkxLCAyMTZdLFxuICBcInRvbWF0b1wiOiBbMjU1LCA5OSwgNzFdLFxuICBcInR1cnF1b2lzZVwiOiBbNjQsIDIyNCwgMjA4XSxcbiAgXCJ2aW9sZXRcIjogWzIzOCwgMTMwLCAyMzhdLFxuICBcIndoZWF0XCI6IFsyNDUsIDIyMiwgMTc5XSxcbiAgXCJ3aGl0ZVwiOiBbMjU1LCAyNTUsIDI1NV0sXG4gIFwid2hpdGVzbW9rZVwiOiBbMjQ1LCAyNDUsIDI0NV0sXG4gIFwieWVsbG93XCI6IFsyNTUsIDI1NSwgMF0sXG4gIFwieWVsbG93Z3JlZW5cIjogWzE1NCwgMjA1LCA1MF1cbn07XG4vKiBNSVQgbGljZW5zZSAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1vcGVyYXRvcnMgKi9cblxudmFyIGNzc0tleXdvcmRzID0gY29sb3JOYW1lOyAvLyBOT1RFOiBjb252ZXJzaW9ucyBzaG91bGQgb25seSByZXR1cm4gcHJpbWl0aXZlIHZhbHVlcyAoaS5lLiBhcnJheXMsIG9yXG4vLyAgICAgICB2YWx1ZXMgdGhhdCBnaXZlIGNvcnJlY3QgYHR5cGVvZmAgcmVzdWx0cykuXG4vLyAgICAgICBkbyBub3QgdXNlIGJveCB2YWx1ZXMgdHlwZXMgKGkuZS4gTnVtYmVyKCksIFN0cmluZygpLCBldGMuKVxuXG52YXIgcmV2ZXJzZUtleXdvcmRzID0ge307XG5cbmZvciAodmFyIF9pID0gMCwgX09iamVjdCRrZXlzID0gT2JqZWN0LmtleXMoY3NzS2V5d29yZHMpOyBfaSA8IF9PYmplY3Qka2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgdmFyIGtleSA9IF9PYmplY3Qka2V5c1tfaV07XG4gIHJldmVyc2VLZXl3b3Jkc1tjc3NLZXl3b3Jkc1trZXldXSA9IGtleTtcbn1cblxudmFyIGNvbnZlcnQkMSA9IHtcbiAgcmdiOiB7XG4gICAgY2hhbm5lbHM6IDMsXG4gICAgbGFiZWxzOiAncmdiJ1xuICB9LFxuICBoc2w6IHtcbiAgICBjaGFubmVsczogMyxcbiAgICBsYWJlbHM6ICdoc2wnXG4gIH0sXG4gIGhzdjoge1xuICAgIGNoYW5uZWxzOiAzLFxuICAgIGxhYmVsczogJ2hzdidcbiAgfSxcbiAgaHdiOiB7XG4gICAgY2hhbm5lbHM6IDMsXG4gICAgbGFiZWxzOiAnaHdiJ1xuICB9LFxuICBjbXlrOiB7XG4gICAgY2hhbm5lbHM6IDQsXG4gICAgbGFiZWxzOiAnY215aydcbiAgfSxcbiAgeHl6OiB7XG4gICAgY2hhbm5lbHM6IDMsXG4gICAgbGFiZWxzOiAneHl6J1xuICB9LFxuICBsYWI6IHtcbiAgICBjaGFubmVsczogMyxcbiAgICBsYWJlbHM6ICdsYWInXG4gIH0sXG4gIGxjaDoge1xuICAgIGNoYW5uZWxzOiAzLFxuICAgIGxhYmVsczogJ2xjaCdcbiAgfSxcbiAgaGV4OiB7XG4gICAgY2hhbm5lbHM6IDEsXG4gICAgbGFiZWxzOiBbJ2hleCddXG4gIH0sXG4gIGtleXdvcmQ6IHtcbiAgICBjaGFubmVsczogMSxcbiAgICBsYWJlbHM6IFsna2V5d29yZCddXG4gIH0sXG4gIGFuc2kxNjoge1xuICAgIGNoYW5uZWxzOiAxLFxuICAgIGxhYmVsczogWydhbnNpMTYnXVxuICB9LFxuICBhbnNpMjU2OiB7XG4gICAgY2hhbm5lbHM6IDEsXG4gICAgbGFiZWxzOiBbJ2Fuc2kyNTYnXVxuICB9LFxuICBoY2c6IHtcbiAgICBjaGFubmVsczogMyxcbiAgICBsYWJlbHM6IFsnaCcsICdjJywgJ2cnXVxuICB9LFxuICBhcHBsZToge1xuICAgIGNoYW5uZWxzOiAzLFxuICAgIGxhYmVsczogWydyMTYnLCAnZzE2JywgJ2IxNiddXG4gIH0sXG4gIGdyYXk6IHtcbiAgICBjaGFubmVsczogMSxcbiAgICBsYWJlbHM6IFsnZ3JheSddXG4gIH1cbn07XG52YXIgY29udmVyc2lvbnMkMiA9IGNvbnZlcnQkMTsgLy8gSGlkZSAuY2hhbm5lbHMgYW5kIC5sYWJlbHMgcHJvcGVydGllc1xuXG5mb3IgKHZhciBfaTIgPSAwLCBfT2JqZWN0JGtleXMyID0gT2JqZWN0LmtleXMoY29udmVydCQxKTsgX2kyIDwgX09iamVjdCRrZXlzMi5sZW5ndGg7IF9pMisrKSB7XG4gIHZhciBtb2RlbCA9IF9PYmplY3Qka2V5czJbX2kyXTtcblxuICBpZiAoISgnY2hhbm5lbHMnIGluIGNvbnZlcnQkMVttb2RlbF0pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuICB9XG5cbiAgaWYgKCEoJ2xhYmVscycgaW4gY29udmVydCQxW21vZGVsXSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgY2hhbm5lbCBsYWJlbHMgcHJvcGVydHk6ICcgKyBtb2RlbCk7XG4gIH1cblxuICBpZiAoY29udmVydCQxW21vZGVsXS5sYWJlbHMubGVuZ3RoICE9PSBjb252ZXJ0JDFbbW9kZWxdLmNoYW5uZWxzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjaGFubmVsIGFuZCBsYWJlbCBjb3VudHMgbWlzbWF0Y2g6ICcgKyBtb2RlbCk7XG4gIH1cblxuICB2YXIgX2NvbnZlcnQkMSRtb2RlbCA9IGNvbnZlcnQkMVttb2RlbF0sXG4gICAgICBjaGFubmVscyA9IF9jb252ZXJ0JDEkbW9kZWwuY2hhbm5lbHMsXG4gICAgICBsYWJlbHMgPSBfY29udmVydCQxJG1vZGVsLmxhYmVscztcbiAgZGVsZXRlIGNvbnZlcnQkMVttb2RlbF0uY2hhbm5lbHM7XG4gIGRlbGV0ZSBjb252ZXJ0JDFbbW9kZWxdLmxhYmVscztcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnQkMVttb2RlbF0sICdjaGFubmVscycsIHtcbiAgICB2YWx1ZTogY2hhbm5lbHNcbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0JDFbbW9kZWxdLCAnbGFiZWxzJywge1xuICAgIHZhbHVlOiBsYWJlbHNcbiAgfSk7XG59XG5cbmNvbnZlcnQkMS5yZ2IuaHNsID0gZnVuY3Rpb24gKHJnYikge1xuICB2YXIgciA9IHJnYlswXSAvIDI1NTtcbiAgdmFyIGcgPSByZ2JbMV0gLyAyNTU7XG4gIHZhciBiID0gcmdiWzJdIC8gMjU1O1xuICB2YXIgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gIHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgdmFyIGRlbHRhID0gbWF4IC0gbWluO1xuICB2YXIgaDtcbiAgdmFyIHM7XG5cbiAgaWYgKG1heCA9PT0gbWluKSB7XG4gICAgaCA9IDA7XG4gIH0gZWxzZSBpZiAociA9PT0gbWF4KSB7XG4gICAgaCA9IChnIC0gYikgLyBkZWx0YTtcbiAgfSBlbHNlIGlmIChnID09PSBtYXgpIHtcbiAgICBoID0gMiArIChiIC0gcikgLyBkZWx0YTtcbiAgfSBlbHNlIGlmIChiID09PSBtYXgpIHtcbiAgICBoID0gNCArIChyIC0gZykgLyBkZWx0YTtcbiAgfVxuXG4gIGggPSBNYXRoLm1pbihoICogNjAsIDM2MCk7XG5cbiAgaWYgKGggPCAwKSB7XG4gICAgaCArPSAzNjA7XG4gIH1cblxuICB2YXIgbCA9IChtaW4gKyBtYXgpIC8gMjtcblxuICBpZiAobWF4ID09PSBtaW4pIHtcbiAgICBzID0gMDtcbiAgfSBlbHNlIGlmIChsIDw9IDAuNSkge1xuICAgIHMgPSBkZWx0YSAvIChtYXggKyBtaW4pO1xuICB9IGVsc2Uge1xuICAgIHMgPSBkZWx0YSAvICgyIC0gbWF4IC0gbWluKTtcbiAgfVxuXG4gIHJldHVybiBbaCwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0JDEucmdiLmhzdiA9IGZ1bmN0aW9uIChyZ2IpIHtcbiAgdmFyIHJkaWY7XG4gIHZhciBnZGlmO1xuICB2YXIgYmRpZjtcbiAgdmFyIGg7XG4gIHZhciBzO1xuICB2YXIgciA9IHJnYlswXSAvIDI1NTtcbiAgdmFyIGcgPSByZ2JbMV0gLyAyNTU7XG4gIHZhciBiID0gcmdiWzJdIC8gMjU1O1xuICB2YXIgdiA9IE1hdGgubWF4KHIsIGcsIGIpO1xuICB2YXIgZGlmZiA9IHYgLSBNYXRoLm1pbihyLCBnLCBiKTtcblxuICB2YXIgZGlmZmMgPSBmdW5jdGlvbiBkaWZmYyhjKSB7XG4gICAgcmV0dXJuICh2IC0gYykgLyA2IC8gZGlmZiArIDEgLyAyO1xuICB9O1xuXG4gIGlmIChkaWZmID09PSAwKSB7XG4gICAgaCA9IDA7XG4gICAgcyA9IDA7XG4gIH0gZWxzZSB7XG4gICAgcyA9IGRpZmYgLyB2O1xuICAgIHJkaWYgPSBkaWZmYyhyKTtcbiAgICBnZGlmID0gZGlmZmMoZyk7XG4gICAgYmRpZiA9IGRpZmZjKGIpO1xuXG4gICAgaWYgKHIgPT09IHYpIHtcbiAgICAgIGggPSBiZGlmIC0gZ2RpZjtcbiAgICB9IGVsc2UgaWYgKGcgPT09IHYpIHtcbiAgICAgIGggPSAxIC8gMyArIHJkaWYgLSBiZGlmO1xuICAgIH0gZWxzZSBpZiAoYiA9PT0gdikge1xuICAgICAgaCA9IDIgLyAzICsgZ2RpZiAtIHJkaWY7XG4gICAgfVxuXG4gICAgaWYgKGggPCAwKSB7XG4gICAgICBoICs9IDE7XG4gICAgfSBlbHNlIGlmIChoID4gMSkge1xuICAgICAgaCAtPSAxO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbaCAqIDM2MCwgcyAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0JDEucmdiLmh3YiA9IGZ1bmN0aW9uIChyZ2IpIHtcbiAgdmFyIHIgPSByZ2JbMF07XG4gIHZhciBnID0gcmdiWzFdO1xuICB2YXIgYiA9IHJnYlsyXTtcbiAgdmFyIGggPSBjb252ZXJ0JDEucmdiLmhzbChyZ2IpWzBdO1xuICB2YXIgdyA9IDEgLyAyNTUgKiBNYXRoLm1pbihyLCBNYXRoLm1pbihnLCBiKSk7XG4gIGIgPSAxIC0gMSAvIDI1NSAqIE1hdGgubWF4KHIsIE1hdGgubWF4KGcsIGIpKTtcbiAgcmV0dXJuIFtoLCB3ICogMTAwLCBiICogMTAwXTtcbn07XG5cbmNvbnZlcnQkMS5yZ2IuY215ayA9IGZ1bmN0aW9uIChyZ2IpIHtcbiAgdmFyIHIgPSByZ2JbMF0gLyAyNTU7XG4gIHZhciBnID0gcmdiWzFdIC8gMjU1O1xuICB2YXIgYiA9IHJnYlsyXSAvIDI1NTtcbiAgdmFyIGsgPSBNYXRoLm1pbigxIC0gciwgMSAtIGcsIDEgLSBiKTtcbiAgdmFyIGMgPSAoMSAtIHIgLSBrKSAvICgxIC0gaykgfHwgMDtcbiAgdmFyIG0gPSAoMSAtIGcgLSBrKSAvICgxIC0gaykgfHwgMDtcbiAgdmFyIHkgPSAoMSAtIGIgLSBrKSAvICgxIC0gaykgfHwgMDtcbiAgcmV0dXJuIFtjICogMTAwLCBtICogMTAwLCB5ICogMTAwLCBrICogMTAwXTtcbn07XG5cbmZ1bmN0aW9uIGNvbXBhcmF0aXZlRGlzdGFuY2UoeCwgeSkge1xuICAvKlxuICBcdFNlZSBodHRwczovL2VuLm0ud2lraXBlZGlhLm9yZy93aWtpL0V1Y2xpZGVhbl9kaXN0YW5jZSNTcXVhcmVkX0V1Y2xpZGVhbl9kaXN0YW5jZVxuICAqL1xuICByZXR1cm4gTWF0aC5wb3coeFswXSAtIHlbMF0sIDIpICsgTWF0aC5wb3coeFsxXSAtIHlbMV0sIDIpICsgTWF0aC5wb3coeFsyXSAtIHlbMl0sIDIpO1xufVxuXG5jb252ZXJ0JDEucmdiLmtleXdvcmQgPSBmdW5jdGlvbiAocmdiKSB7XG4gIHZhciByZXZlcnNlZCA9IHJldmVyc2VLZXl3b3Jkc1tyZ2JdO1xuXG4gIGlmIChyZXZlcnNlZCkge1xuICAgIHJldHVybiByZXZlcnNlZDtcbiAgfVxuXG4gIHZhciBjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gSW5maW5pdHk7XG4gIHZhciBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG5cbiAgZm9yICh2YXIgX2kzID0gMCwgX09iamVjdCRrZXlzMyA9IE9iamVjdC5rZXlzKGNzc0tleXdvcmRzKTsgX2kzIDwgX09iamVjdCRrZXlzMy5sZW5ndGg7IF9pMysrKSB7XG4gICAgdmFyIGtleXdvcmQgPSBfT2JqZWN0JGtleXMzW19pM107XG4gICAgdmFyIHZhbHVlID0gY3NzS2V5d29yZHNba2V5d29yZF07IC8vIENvbXB1dGUgY29tcGFyYXRpdmUgZGlzdGFuY2VcblxuICAgIHZhciBkaXN0YW5jZSA9IGNvbXBhcmF0aXZlRGlzdGFuY2UocmdiLCB2YWx1ZSk7IC8vIENoZWNrIGlmIGl0cyBsZXNzLCBpZiBzbyBzZXQgYXMgY2xvc2VzdFxuXG4gICAgaWYgKGRpc3RhbmNlIDwgY3VycmVudENsb3Nlc3REaXN0YW5jZSkge1xuICAgICAgY3VycmVudENsb3Nlc3REaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgY3VycmVudENsb3Nlc3RLZXl3b3JkID0ga2V5d29yZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY3VycmVudENsb3Nlc3RLZXl3b3JkO1xufTtcblxuY29udmVydCQxLmtleXdvcmQucmdiID0gZnVuY3Rpb24gKGtleXdvcmQpIHtcbiAgcmV0dXJuIGNzc0tleXdvcmRzW2tleXdvcmRdO1xufTtcblxuY29udmVydCQxLnJnYi54eXogPSBmdW5jdGlvbiAocmdiKSB7XG4gIHZhciByID0gcmdiWzBdIC8gMjU1O1xuICB2YXIgZyA9IHJnYlsxXSAvIDI1NTtcbiAgdmFyIGIgPSByZ2JbMl0gLyAyNTU7IC8vIEFzc3VtZSBzUkdCXG5cbiAgciA9IHIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKHIgKyAwLjA1NSkgLyAxLjA1NSwgMi40KSA6IHIgLyAxMi45MjtcbiAgZyA9IGcgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKGcgKyAwLjA1NSkgLyAxLjA1NSwgMi40KSA6IGcgLyAxMi45MjtcbiAgYiA9IGIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKGIgKyAwLjA1NSkgLyAxLjA1NSwgMi40KSA6IGIgLyAxMi45MjtcbiAgdmFyIHggPSByICogMC40MTI0ICsgZyAqIDAuMzU3NiArIGIgKiAwLjE4MDU7XG4gIHZhciB5ID0gciAqIDAuMjEyNiArIGcgKiAwLjcxNTIgKyBiICogMC4wNzIyO1xuICB2YXIgeiA9IHIgKiAwLjAxOTMgKyBnICogMC4xMTkyICsgYiAqIDAuOTUwNTtcbiAgcmV0dXJuIFt4ICogMTAwLCB5ICogMTAwLCB6ICogMTAwXTtcbn07XG5cbmNvbnZlcnQkMS5yZ2IubGFiID0gZnVuY3Rpb24gKHJnYikge1xuICB2YXIgeHl6ID0gY29udmVydCQxLnJnYi54eXoocmdiKTtcbiAgdmFyIHggPSB4eXpbMF07XG4gIHZhciB5ID0geHl6WzFdO1xuICB2YXIgeiA9IHh5elsyXTtcbiAgeCAvPSA5NS4wNDc7XG4gIHkgLz0gMTAwO1xuICB6IC89IDEwOC44ODM7XG4gIHggPSB4ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh4LCAxIC8gMykgOiA3Ljc4NyAqIHggKyAxNiAvIDExNjtcbiAgeSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEgLyAzKSA6IDcuNzg3ICogeSArIDE2IC8gMTE2O1xuICB6ID0geiA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeiwgMSAvIDMpIDogNy43ODcgKiB6ICsgMTYgLyAxMTY7XG4gIHZhciBsID0gMTE2ICogeSAtIDE2O1xuICB2YXIgYSA9IDUwMCAqICh4IC0geSk7XG4gIHZhciBiID0gMjAwICogKHkgLSB6KTtcbiAgcmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQkMS5oc2wucmdiID0gZnVuY3Rpb24gKGhzbCkge1xuICB2YXIgaCA9IGhzbFswXSAvIDM2MDtcbiAgdmFyIHMgPSBoc2xbMV0gLyAxMDA7XG4gIHZhciBsID0gaHNsWzJdIC8gMTAwO1xuICB2YXIgdDI7XG4gIHZhciB0MztcbiAgdmFyIHZhbDtcblxuICBpZiAocyA9PT0gMCkge1xuICAgIHZhbCA9IGwgKiAyNTU7XG4gICAgcmV0dXJuIFt2YWwsIHZhbCwgdmFsXTtcbiAgfVxuXG4gIGlmIChsIDwgMC41KSB7XG4gICAgdDIgPSBsICogKDEgKyBzKTtcbiAgfSBlbHNlIHtcbiAgICB0MiA9IGwgKyBzIC0gbCAqIHM7XG4gIH1cblxuICB2YXIgdDEgPSAyICogbCAtIHQyO1xuICB2YXIgcmdiID0gWzAsIDAsIDBdO1xuXG4gIGZvciAodmFyIF9pNCA9IDA7IF9pNCA8IDM7IF9pNCsrKSB7XG4gICAgdDMgPSBoICsgMSAvIDMgKiAtKF9pNCAtIDEpO1xuXG4gICAgaWYgKHQzIDwgMCkge1xuICAgICAgdDMrKztcbiAgICB9XG5cbiAgICBpZiAodDMgPiAxKSB7XG4gICAgICB0My0tO1xuICAgIH1cblxuICAgIGlmICg2ICogdDMgPCAxKSB7XG4gICAgICB2YWwgPSB0MSArICh0MiAtIHQxKSAqIDYgKiB0MztcbiAgICB9IGVsc2UgaWYgKDIgKiB0MyA8IDEpIHtcbiAgICAgIHZhbCA9IHQyO1xuICAgIH0gZWxzZSBpZiAoMyAqIHQzIDwgMikge1xuICAgICAgdmFsID0gdDEgKyAodDIgLSB0MSkgKiAoMiAvIDMgLSB0MykgKiA2O1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWwgPSB0MTtcbiAgICB9XG5cbiAgICByZ2JbX2k0XSA9IHZhbCAqIDI1NTtcbiAgfVxuXG4gIHJldHVybiByZ2I7XG59O1xuXG5jb252ZXJ0JDEuaHNsLmhzdiA9IGZ1bmN0aW9uIChoc2wpIHtcbiAgdmFyIGggPSBoc2xbMF07XG4gIHZhciBzID0gaHNsWzFdIC8gMTAwO1xuICB2YXIgbCA9IGhzbFsyXSAvIDEwMDtcbiAgdmFyIHNtaW4gPSBzO1xuICB2YXIgbG1pbiA9IE1hdGgubWF4KGwsIDAuMDEpO1xuICBsICo9IDI7XG4gIHMgKj0gbCA8PSAxID8gbCA6IDIgLSBsO1xuICBzbWluICo9IGxtaW4gPD0gMSA/IGxtaW4gOiAyIC0gbG1pbjtcbiAgdmFyIHYgPSAobCArIHMpIC8gMjtcbiAgdmFyIHN2ID0gbCA9PT0gMCA/IDIgKiBzbWluIC8gKGxtaW4gKyBzbWluKSA6IDIgKiBzIC8gKGwgKyBzKTtcbiAgcmV0dXJuIFtoLCBzdiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0JDEuaHN2LnJnYiA9IGZ1bmN0aW9uIChoc3YpIHtcbiAgdmFyIGggPSBoc3ZbMF0gLyA2MDtcbiAgdmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG4gIHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuICB2YXIgaGkgPSBNYXRoLmZsb29yKGgpICUgNjtcbiAgdmFyIGYgPSBoIC0gTWF0aC5mbG9vcihoKTtcbiAgdmFyIHAgPSAyNTUgKiB2ICogKDEgLSBzKTtcbiAgdmFyIHEgPSAyNTUgKiB2ICogKDEgLSBzICogZik7XG4gIHZhciB0ID0gMjU1ICogdiAqICgxIC0gcyAqICgxIC0gZikpO1xuICB2ICo9IDI1NTtcblxuICBzd2l0Y2ggKGhpKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIFt2LCB0LCBwXTtcblxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBbcSwgdiwgcF07XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gW3AsIHYsIHRdO1xuXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIFtwLCBxLCB2XTtcblxuICAgIGNhc2UgNDpcbiAgICAgIHJldHVybiBbdCwgcCwgdl07XG5cbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gW3YsIHAsIHFdO1xuICB9XG59O1xuXG5jb252ZXJ0JDEuaHN2LmhzbCA9IGZ1bmN0aW9uIChoc3YpIHtcbiAgdmFyIGggPSBoc3ZbMF07XG4gIHZhciBzID0gaHN2WzFdIC8gMTAwO1xuICB2YXIgdiA9IGhzdlsyXSAvIDEwMDtcbiAgdmFyIHZtaW4gPSBNYXRoLm1heCh2LCAwLjAxKTtcbiAgdmFyIHNsO1xuICB2YXIgbDtcbiAgbCA9ICgyIC0gcykgKiB2O1xuICB2YXIgbG1pbiA9ICgyIC0gcykgKiB2bWluO1xuICBzbCA9IHMgKiB2bWluO1xuICBzbCAvPSBsbWluIDw9IDEgPyBsbWluIDogMiAtIGxtaW47XG4gIHNsID0gc2wgfHwgMDtcbiAgbCAvPSAyO1xuICByZXR1cm4gW2gsIHNsICogMTAwLCBsICogMTAwXTtcbn07IC8vIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy1jb2xvci8jaHdiLXRvLXJnYlxuXG5cbmNvbnZlcnQkMS5od2IucmdiID0gZnVuY3Rpb24gKGh3Yikge1xuICB2YXIgaCA9IGh3YlswXSAvIDM2MDtcbiAgdmFyIHdoID0gaHdiWzFdIC8gMTAwO1xuICB2YXIgYmwgPSBod2JbMl0gLyAxMDA7XG4gIHZhciByYXRpbyA9IHdoICsgYmw7XG4gIHZhciBmOyAvLyBXaCArIGJsIGNhbnQgYmUgPiAxXG5cbiAgaWYgKHJhdGlvID4gMSkge1xuICAgIHdoIC89IHJhdGlvO1xuICAgIGJsIC89IHJhdGlvO1xuICB9XG5cbiAgdmFyIGkgPSBNYXRoLmZsb29yKDYgKiBoKTtcbiAgdmFyIHYgPSAxIC0gYmw7XG4gIGYgPSA2ICogaCAtIGk7XG5cbiAgaWYgKChpICYgMHgwMSkgIT09IDApIHtcbiAgICBmID0gMSAtIGY7XG4gIH1cblxuICB2YXIgbiA9IHdoICsgZiAqICh2IC0gd2gpOyAvLyBMaW5lYXIgaW50ZXJwb2xhdGlvblxuXG4gIHZhciByO1xuICB2YXIgZztcbiAgdmFyIGI7XG4gIC8qIGVzbGludC1kaXNhYmxlIG1heC1zdGF0ZW1lbnRzLXBlci1saW5lLG5vLW11bHRpLXNwYWNlcyAqL1xuXG4gIHN3aXRjaCAoaSkge1xuICAgIGRlZmF1bHQ6XG4gICAgY2FzZSA2OlxuICAgIGNhc2UgMDpcbiAgICAgIHIgPSB2O1xuICAgICAgZyA9IG47XG4gICAgICBiID0gd2g7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgMTpcbiAgICAgIHIgPSBuO1xuICAgICAgZyA9IHY7XG4gICAgICBiID0gd2g7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgMjpcbiAgICAgIHIgPSB3aDtcbiAgICAgIGcgPSB2O1xuICAgICAgYiA9IG47XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgMzpcbiAgICAgIHIgPSB3aDtcbiAgICAgIGcgPSBuO1xuICAgICAgYiA9IHY7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgNDpcbiAgICAgIHIgPSBuO1xuICAgICAgZyA9IHdoO1xuICAgICAgYiA9IHY7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgNTpcbiAgICAgIHIgPSB2O1xuICAgICAgZyA9IHdoO1xuICAgICAgYiA9IG47XG4gICAgICBicmVhaztcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG1heC1zdGF0ZW1lbnRzLXBlci1saW5lLG5vLW11bHRpLXNwYWNlcyAqL1xuXG5cbiAgcmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQkMS5jbXlrLnJnYiA9IGZ1bmN0aW9uIChjbXlrKSB7XG4gIHZhciBjID0gY215a1swXSAvIDEwMDtcbiAgdmFyIG0gPSBjbXlrWzFdIC8gMTAwO1xuICB2YXIgeSA9IGNteWtbMl0gLyAxMDA7XG4gIHZhciBrID0gY215a1szXSAvIDEwMDtcbiAgdmFyIHIgPSAxIC0gTWF0aC5taW4oMSwgYyAqICgxIC0gaykgKyBrKTtcbiAgdmFyIGcgPSAxIC0gTWF0aC5taW4oMSwgbSAqICgxIC0gaykgKyBrKTtcbiAgdmFyIGIgPSAxIC0gTWF0aC5taW4oMSwgeSAqICgxIC0gaykgKyBrKTtcbiAgcmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQkMS54eXoucmdiID0gZnVuY3Rpb24gKHh5eikge1xuICB2YXIgeCA9IHh5elswXSAvIDEwMDtcbiAgdmFyIHkgPSB4eXpbMV0gLyAxMDA7XG4gIHZhciB6ID0geHl6WzJdIC8gMTAwO1xuICB2YXIgcjtcbiAgdmFyIGc7XG4gIHZhciBiO1xuICByID0geCAqIDMuMjQwNiArIHkgKiAtMS41MzcyICsgeiAqIC0wLjQ5ODY7XG4gIGcgPSB4ICogLTAuOTY4OSArIHkgKiAxLjg3NTggKyB6ICogMC4wNDE1O1xuICBiID0geCAqIDAuMDU1NyArIHkgKiAtMC4yMDQwICsgeiAqIDEuMDU3MDsgLy8gQXNzdW1lIHNSR0JcblxuICByID0gciA+IDAuMDAzMTMwOCA/IDEuMDU1ICogTWF0aC5wb3cociwgMS4wIC8gMi40KSAtIDAuMDU1IDogciAqIDEyLjkyO1xuICBnID0gZyA+IDAuMDAzMTMwOCA/IDEuMDU1ICogTWF0aC5wb3coZywgMS4wIC8gMi40KSAtIDAuMDU1IDogZyAqIDEyLjkyO1xuICBiID0gYiA+IDAuMDAzMTMwOCA/IDEuMDU1ICogTWF0aC5wb3coYiwgMS4wIC8gMi40KSAtIDAuMDU1IDogYiAqIDEyLjkyO1xuICByID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgciksIDEpO1xuICBnID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgZyksIDEpO1xuICBiID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgYiksIDEpO1xuICByZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydCQxLnh5ei5sYWIgPSBmdW5jdGlvbiAoeHl6KSB7XG4gIHZhciB4ID0geHl6WzBdO1xuICB2YXIgeSA9IHh5elsxXTtcbiAgdmFyIHogPSB4eXpbMl07XG4gIHggLz0gOTUuMDQ3O1xuICB5IC89IDEwMDtcbiAgeiAvPSAxMDguODgzO1xuICB4ID0geCA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMSAvIDMpIDogNy43ODcgKiB4ICsgMTYgLyAxMTY7XG4gIHkgPSB5ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh5LCAxIC8gMykgOiA3Ljc4NyAqIHkgKyAxNiAvIDExNjtcbiAgeiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEgLyAzKSA6IDcuNzg3ICogeiArIDE2IC8gMTE2O1xuICB2YXIgbCA9IDExNiAqIHkgLSAxNjtcbiAgdmFyIGEgPSA1MDAgKiAoeCAtIHkpO1xuICB2YXIgYiA9IDIwMCAqICh5IC0geik7XG4gIHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0JDEubGFiLnh5eiA9IGZ1bmN0aW9uIChsYWIpIHtcbiAgdmFyIGwgPSBsYWJbMF07XG4gIHZhciBhID0gbGFiWzFdO1xuICB2YXIgYiA9IGxhYlsyXTtcbiAgdmFyIHg7XG4gIHZhciB5O1xuICB2YXIgejtcbiAgeSA9IChsICsgMTYpIC8gMTE2O1xuICB4ID0gYSAvIDUwMCArIHk7XG4gIHogPSB5IC0gYiAvIDIwMDtcbiAgdmFyIHkyID0gTWF0aC5wb3coeSwgMyk7XG4gIHZhciB4MiA9IE1hdGgucG93KHgsIDMpO1xuICB2YXIgejIgPSBNYXRoLnBvdyh6LCAzKTtcbiAgeSA9IHkyID4gMC4wMDg4NTYgPyB5MiA6ICh5IC0gMTYgLyAxMTYpIC8gNy43ODc7XG4gIHggPSB4MiA+IDAuMDA4ODU2ID8geDIgOiAoeCAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuICB6ID0gejIgPiAwLjAwODg1NiA/IHoyIDogKHogLSAxNiAvIDExNikgLyA3Ljc4NztcbiAgeCAqPSA5NS4wNDc7XG4gIHkgKj0gMTAwO1xuICB6ICo9IDEwOC44ODM7XG4gIHJldHVybiBbeCwgeSwgel07XG59O1xuXG5jb252ZXJ0JDEubGFiLmxjaCA9IGZ1bmN0aW9uIChsYWIpIHtcbiAgdmFyIGwgPSBsYWJbMF07XG4gIHZhciBhID0gbGFiWzFdO1xuICB2YXIgYiA9IGxhYlsyXTtcbiAgdmFyIGg7XG4gIHZhciBociA9IE1hdGguYXRhbjIoYiwgYSk7XG4gIGggPSBociAqIDM2MCAvIDIgLyBNYXRoLlBJO1xuXG4gIGlmIChoIDwgMCkge1xuICAgIGggKz0gMzYwO1xuICB9XG5cbiAgdmFyIGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG4gIHJldHVybiBbbCwgYywgaF07XG59O1xuXG5jb252ZXJ0JDEubGNoLmxhYiA9IGZ1bmN0aW9uIChsY2gpIHtcbiAgdmFyIGwgPSBsY2hbMF07XG4gIHZhciBjID0gbGNoWzFdO1xuICB2YXIgaCA9IGxjaFsyXTtcbiAgdmFyIGhyID0gaCAvIDM2MCAqIDIgKiBNYXRoLlBJO1xuICB2YXIgYSA9IGMgKiBNYXRoLmNvcyhocik7XG4gIHZhciBiID0gYyAqIE1hdGguc2luKGhyKTtcbiAgcmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQkMS5yZ2IuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgdmFyIHNhdHVyYXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG5cbiAgdmFyIF9hcmdzID0gX3NsaWNlZFRvQXJyYXkoYXJncywgMyksXG4gICAgICByID0gX2FyZ3NbMF0sXG4gICAgICBnID0gX2FyZ3NbMV0sXG4gICAgICBiID0gX2FyZ3NbMl07XG5cbiAgdmFyIHZhbHVlID0gc2F0dXJhdGlvbiA9PT0gbnVsbCA/IGNvbnZlcnQkMS5yZ2IuaHN2KGFyZ3MpWzJdIDogc2F0dXJhdGlvbjsgLy8gSHN2IC0+IGFuc2kxNiBvcHRpbWl6YXRpb25cblxuICB2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgLyA1MCk7XG5cbiAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgcmV0dXJuIDMwO1xuICB9XG5cbiAgdmFyIGFuc2kgPSAzMCArIChNYXRoLnJvdW5kKGIgLyAyNTUpIDw8IDIgfCBNYXRoLnJvdW5kKGcgLyAyNTUpIDw8IDEgfCBNYXRoLnJvdW5kKHIgLyAyNTUpKTtcblxuICBpZiAodmFsdWUgPT09IDIpIHtcbiAgICBhbnNpICs9IDYwO1xuICB9XG5cbiAgcmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0JDEuaHN2LmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gIC8vIE9wdGltaXphdGlvbiBoZXJlOyB3ZSBhbHJlYWR5IGtub3cgdGhlIHZhbHVlIGFuZCBkb24ndCBuZWVkIHRvIGdldFxuICAvLyBpdCBjb252ZXJ0ZWQgZm9yIHVzLlxuICByZXR1cm4gY29udmVydCQxLnJnYi5hbnNpMTYoY29udmVydCQxLmhzdi5yZ2IoYXJncyksIGFyZ3NbMl0pO1xufTtcblxuY29udmVydCQxLnJnYi5hbnNpMjU2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgdmFyIHIgPSBhcmdzWzBdO1xuICB2YXIgZyA9IGFyZ3NbMV07XG4gIHZhciBiID0gYXJnc1syXTsgLy8gV2UgdXNlIHRoZSBleHRlbmRlZCBncmV5c2NhbGUgcGFsZXR0ZSBoZXJlLCB3aXRoIHRoZSBleGNlcHRpb24gb2ZcbiAgLy8gYmxhY2sgYW5kIHdoaXRlLiBub3JtYWwgcGFsZXR0ZSBvbmx5IGhhcyA0IGdyZXlzY2FsZSBzaGFkZXMuXG5cbiAgaWYgKHIgPT09IGcgJiYgZyA9PT0gYikge1xuICAgIGlmIChyIDwgOCkge1xuICAgICAgcmV0dXJuIDE2O1xuICAgIH1cblxuICAgIGlmIChyID4gMjQ4KSB7XG4gICAgICByZXR1cm4gMjMxO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLnJvdW5kKChyIC0gOCkgLyAyNDcgKiAyNCkgKyAyMzI7XG4gIH1cblxuICB2YXIgYW5zaSA9IDE2ICsgMzYgKiBNYXRoLnJvdW5kKHIgLyAyNTUgKiA1KSArIDYgKiBNYXRoLnJvdW5kKGcgLyAyNTUgKiA1KSArIE1hdGgucm91bmQoYiAvIDI1NSAqIDUpO1xuICByZXR1cm4gYW5zaTtcbn07XG5cbmNvbnZlcnQkMS5hbnNpMTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgdmFyIGNvbG9yID0gYXJncyAlIDEwOyAvLyBIYW5kbGUgZ3JleXNjYWxlXG5cbiAgaWYgKGNvbG9yID09PSAwIHx8IGNvbG9yID09PSA3KSB7XG4gICAgaWYgKGFyZ3MgPiA1MCkge1xuICAgICAgY29sb3IgKz0gMy41O1xuICAgIH1cblxuICAgIGNvbG9yID0gY29sb3IgLyAxMC41ICogMjU1O1xuICAgIHJldHVybiBbY29sb3IsIGNvbG9yLCBjb2xvcl07XG4gIH1cblxuICB2YXIgbXVsdCA9ICh+fihhcmdzID4gNTApICsgMSkgKiAwLjU7XG4gIHZhciByID0gKGNvbG9yICYgMSkgKiBtdWx0ICogMjU1O1xuICB2YXIgZyA9IChjb2xvciA+PiAxICYgMSkgKiBtdWx0ICogMjU1O1xuICB2YXIgYiA9IChjb2xvciA+PiAyICYgMSkgKiBtdWx0ICogMjU1O1xuICByZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydCQxLmFuc2kyNTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgLy8gSGFuZGxlIGdyZXlzY2FsZVxuICBpZiAoYXJncyA+PSAyMzIpIHtcbiAgICB2YXIgX2MgPSAoYXJncyAtIDIzMikgKiAxMCArIDg7XG5cbiAgICByZXR1cm4gW19jLCBfYywgX2NdO1xuICB9XG5cbiAgYXJncyAtPSAxNjtcbiAgdmFyIHJlbTtcbiAgdmFyIHIgPSBNYXRoLmZsb29yKGFyZ3MgLyAzNikgLyA1ICogMjU1O1xuICB2YXIgZyA9IE1hdGguZmxvb3IoKHJlbSA9IGFyZ3MgJSAzNikgLyA2KSAvIDUgKiAyNTU7XG4gIHZhciBiID0gcmVtICUgNiAvIDUgKiAyNTU7XG4gIHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0JDEucmdiLmhleCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gIHZhciBpbnRlZ2VyID0gKChNYXRoLnJvdW5kKGFyZ3NbMF0pICYgMHhGRikgPDwgMTYpICsgKChNYXRoLnJvdW5kKGFyZ3NbMV0pICYgMHhGRikgPDwgOCkgKyAoTWF0aC5yb3VuZChhcmdzWzJdKSAmIDB4RkYpO1xuICB2YXIgc3RyaW5nID0gaW50ZWdlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcbiAgcmV0dXJuICcwMDAwMDAnLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn07XG5cbmNvbnZlcnQkMS5oZXgucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgdmFyIG1hdGNoID0gYXJncy50b1N0cmluZygxNikubWF0Y2goL1thLWYwLTldezZ9fFthLWYwLTldezN9L2kpO1xuXG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gWzAsIDAsIDBdO1xuICB9XG5cbiAgdmFyIGNvbG9yU3RyaW5nID0gbWF0Y2hbMF07XG5cbiAgaWYgKG1hdGNoWzBdLmxlbmd0aCA9PT0gMykge1xuICAgIGNvbG9yU3RyaW5nID0gY29sb3JTdHJpbmcuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoY2hhcikge1xuICAgICAgcmV0dXJuIGNoYXIgKyBjaGFyO1xuICAgIH0pLmpvaW4oJycpO1xuICB9XG5cbiAgdmFyIGludGVnZXIgPSBwYXJzZUludChjb2xvclN0cmluZywgMTYpO1xuICB2YXIgciA9IGludGVnZXIgPj4gMTYgJiAweEZGO1xuICB2YXIgZyA9IGludGVnZXIgPj4gOCAmIDB4RkY7XG4gIHZhciBiID0gaW50ZWdlciAmIDB4RkY7XG4gIHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0JDEucmdiLmhjZyA9IGZ1bmN0aW9uIChyZ2IpIHtcbiAgdmFyIHIgPSByZ2JbMF0gLyAyNTU7XG4gIHZhciBnID0gcmdiWzFdIC8gMjU1O1xuICB2YXIgYiA9IHJnYlsyXSAvIDI1NTtcbiAgdmFyIG1heCA9IE1hdGgubWF4KE1hdGgubWF4KHIsIGcpLCBiKTtcbiAgdmFyIG1pbiA9IE1hdGgubWluKE1hdGgubWluKHIsIGcpLCBiKTtcbiAgdmFyIGNocm9tYSA9IG1heCAtIG1pbjtcbiAgdmFyIGdyYXlzY2FsZTtcbiAgdmFyIGh1ZTtcblxuICBpZiAoY2hyb21hIDwgMSkge1xuICAgIGdyYXlzY2FsZSA9IG1pbiAvICgxIC0gY2hyb21hKTtcbiAgfSBlbHNlIHtcbiAgICBncmF5c2NhbGUgPSAwO1xuICB9XG5cbiAgaWYgKGNocm9tYSA8PSAwKSB7XG4gICAgaHVlID0gMDtcbiAgfSBlbHNlIGlmIChtYXggPT09IHIpIHtcbiAgICBodWUgPSAoZyAtIGIpIC8gY2hyb21hICUgNjtcbiAgfSBlbHNlIGlmIChtYXggPT09IGcpIHtcbiAgICBodWUgPSAyICsgKGIgLSByKSAvIGNocm9tYTtcbiAgfSBlbHNlIHtcbiAgICBodWUgPSA0ICsgKHIgLSBnKSAvIGNocm9tYTtcbiAgfVxuXG4gIGh1ZSAvPSA2O1xuICBodWUgJT0gMTtcbiAgcmV0dXJuIFtodWUgKiAzNjAsIGNocm9tYSAqIDEwMCwgZ3JheXNjYWxlICogMTAwXTtcbn07XG5cbmNvbnZlcnQkMS5oc2wuaGNnID0gZnVuY3Rpb24gKGhzbCkge1xuICB2YXIgcyA9IGhzbFsxXSAvIDEwMDtcbiAgdmFyIGwgPSBoc2xbMl0gLyAxMDA7XG4gIHZhciBjID0gbCA8IDAuNSA/IDIuMCAqIHMgKiBsIDogMi4wICogcyAqICgxLjAgLSBsKTtcbiAgdmFyIGYgPSAwO1xuXG4gIGlmIChjIDwgMS4wKSB7XG4gICAgZiA9IChsIC0gMC41ICogYykgLyAoMS4wIC0gYyk7XG4gIH1cblxuICByZXR1cm4gW2hzbFswXSwgYyAqIDEwMCwgZiAqIDEwMF07XG59O1xuXG5jb252ZXJ0JDEuaHN2LmhjZyA9IGZ1bmN0aW9uIChoc3YpIHtcbiAgdmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG4gIHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuICB2YXIgYyA9IHMgKiB2O1xuICB2YXIgZiA9IDA7XG5cbiAgaWYgKGMgPCAxLjApIHtcbiAgICBmID0gKHYgLSBjKSAvICgxIC0gYyk7XG4gIH1cblxuICByZXR1cm4gW2hzdlswXSwgYyAqIDEwMCwgZiAqIDEwMF07XG59O1xuXG5jb252ZXJ0JDEuaGNnLnJnYiA9IGZ1bmN0aW9uIChoY2cpIHtcbiAgdmFyIGggPSBoY2dbMF0gLyAzNjA7XG4gIHZhciBjID0gaGNnWzFdIC8gMTAwO1xuICB2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuICBpZiAoYyA9PT0gMC4wKSB7XG4gICAgcmV0dXJuIFtnICogMjU1LCBnICogMjU1LCBnICogMjU1XTtcbiAgfVxuXG4gIHZhciBwdXJlID0gWzAsIDAsIDBdO1xuICB2YXIgaGkgPSBoICUgMSAqIDY7XG4gIHZhciB2ID0gaGkgJSAxO1xuICB2YXIgdyA9IDEgLSB2O1xuICB2YXIgbWcgPSAwO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBtYXgtc3RhdGVtZW50cy1wZXItbGluZSAqL1xuXG4gIHN3aXRjaCAoTWF0aC5mbG9vcihoaSkpIHtcbiAgICBjYXNlIDA6XG4gICAgICBwdXJlWzBdID0gMTtcbiAgICAgIHB1cmVbMV0gPSB2O1xuICAgICAgcHVyZVsyXSA9IDA7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgMTpcbiAgICAgIHB1cmVbMF0gPSB3O1xuICAgICAgcHVyZVsxXSA9IDE7XG4gICAgICBwdXJlWzJdID0gMDtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAyOlxuICAgICAgcHVyZVswXSA9IDA7XG4gICAgICBwdXJlWzFdID0gMTtcbiAgICAgIHB1cmVbMl0gPSB2O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDM6XG4gICAgICBwdXJlWzBdID0gMDtcbiAgICAgIHB1cmVbMV0gPSB3O1xuICAgICAgcHVyZVsyXSA9IDE7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgNDpcbiAgICAgIHB1cmVbMF0gPSB2O1xuICAgICAgcHVyZVsxXSA9IDA7XG4gICAgICBwdXJlWzJdID0gMTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHB1cmVbMF0gPSAxO1xuICAgICAgcHVyZVsxXSA9IDA7XG4gICAgICBwdXJlWzJdID0gdztcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG1heC1zdGF0ZW1lbnRzLXBlci1saW5lICovXG5cblxuICBtZyA9ICgxLjAgLSBjKSAqIGc7XG4gIHJldHVybiBbKGMgKiBwdXJlWzBdICsgbWcpICogMjU1LCAoYyAqIHB1cmVbMV0gKyBtZykgKiAyNTUsIChjICogcHVyZVsyXSArIG1nKSAqIDI1NV07XG59O1xuXG5jb252ZXJ0JDEuaGNnLmhzdiA9IGZ1bmN0aW9uIChoY2cpIHtcbiAgdmFyIGMgPSBoY2dbMV0gLyAxMDA7XG4gIHZhciBnID0gaGNnWzJdIC8gMTAwO1xuICB2YXIgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuICB2YXIgZiA9IDA7XG5cbiAgaWYgKHYgPiAwLjApIHtcbiAgICBmID0gYyAvIHY7XG4gIH1cblxuICByZXR1cm4gW2hjZ1swXSwgZiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0JDEuaGNnLmhzbCA9IGZ1bmN0aW9uIChoY2cpIHtcbiAgdmFyIGMgPSBoY2dbMV0gLyAxMDA7XG4gIHZhciBnID0gaGNnWzJdIC8gMTAwO1xuICB2YXIgbCA9IGcgKiAoMS4wIC0gYykgKyAwLjUgKiBjO1xuICB2YXIgcyA9IDA7XG5cbiAgaWYgKGwgPiAwLjAgJiYgbCA8IDAuNSkge1xuICAgIHMgPSBjIC8gKDIgKiBsKTtcbiAgfSBlbHNlIGlmIChsID49IDAuNSAmJiBsIDwgMS4wKSB7XG4gICAgcyA9IGMgLyAoMiAqICgxIC0gbCkpO1xuICB9XG5cbiAgcmV0dXJuIFtoY2dbMF0sIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydCQxLmhjZy5od2IgPSBmdW5jdGlvbiAoaGNnKSB7XG4gIHZhciBjID0gaGNnWzFdIC8gMTAwO1xuICB2YXIgZyA9IGhjZ1syXSAvIDEwMDtcbiAgdmFyIHYgPSBjICsgZyAqICgxLjAgLSBjKTtcbiAgcmV0dXJuIFtoY2dbMF0sICh2IC0gYykgKiAxMDAsICgxIC0gdikgKiAxMDBdO1xufTtcblxuY29udmVydCQxLmh3Yi5oY2cgPSBmdW5jdGlvbiAoaHdiKSB7XG4gIHZhciB3ID0gaHdiWzFdIC8gMTAwO1xuICB2YXIgYiA9IGh3YlsyXSAvIDEwMDtcbiAgdmFyIHYgPSAxIC0gYjtcbiAgdmFyIGMgPSB2IC0gdztcbiAgdmFyIGcgPSAwO1xuXG4gIGlmIChjIDwgMSkge1xuICAgIGcgPSAodiAtIGMpIC8gKDEgLSBjKTtcbiAgfVxuXG4gIHJldHVybiBbaHdiWzBdLCBjICogMTAwLCBnICogMTAwXTtcbn07XG5cbmNvbnZlcnQkMS5hcHBsZS5yZ2IgPSBmdW5jdGlvbiAoYXBwbGUpIHtcbiAgcmV0dXJuIFthcHBsZVswXSAvIDY1NTM1ICogMjU1LCBhcHBsZVsxXSAvIDY1NTM1ICogMjU1LCBhcHBsZVsyXSAvIDY1NTM1ICogMjU1XTtcbn07XG5cbmNvbnZlcnQkMS5yZ2IuYXBwbGUgPSBmdW5jdGlvbiAocmdiKSB7XG4gIHJldHVybiBbcmdiWzBdIC8gMjU1ICogNjU1MzUsIHJnYlsxXSAvIDI1NSAqIDY1NTM1LCByZ2JbMl0gLyAyNTUgKiA2NTUzNV07XG59O1xuXG5jb252ZXJ0JDEuZ3JheS5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuICByZXR1cm4gW2FyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTVdO1xufTtcblxuY29udmVydCQxLmdyYXkuaHNsID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgcmV0dXJuIFswLCAwLCBhcmdzWzBdXTtcbn07XG5cbmNvbnZlcnQkMS5ncmF5LmhzdiA9IGNvbnZlcnQkMS5ncmF5LmhzbDtcblxuY29udmVydCQxLmdyYXkuaHdiID0gZnVuY3Rpb24gKGdyYXkpIHtcbiAgcmV0dXJuIFswLCAxMDAsIGdyYXlbMF1dO1xufTtcblxuY29udmVydCQxLmdyYXkuY215ayA9IGZ1bmN0aW9uIChncmF5KSB7XG4gIHJldHVybiBbMCwgMCwgMCwgZ3JheVswXV07XG59O1xuXG5jb252ZXJ0JDEuZ3JheS5sYWIgPSBmdW5jdGlvbiAoZ3JheSkge1xuICByZXR1cm4gW2dyYXlbMF0sIDAsIDBdO1xufTtcblxuY29udmVydCQxLmdyYXkuaGV4ID0gZnVuY3Rpb24gKGdyYXkpIHtcbiAgdmFyIHZhbCA9IE1hdGgucm91bmQoZ3JheVswXSAvIDEwMCAqIDI1NSkgJiAweEZGO1xuICB2YXIgaW50ZWdlciA9ICh2YWwgPDwgMTYpICsgKHZhbCA8PCA4KSArIHZhbDtcbiAgdmFyIHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG4gIHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0JDEucmdiLmdyYXkgPSBmdW5jdGlvbiAocmdiKSB7XG4gIHZhciB2YWwgPSAocmdiWzBdICsgcmdiWzFdICsgcmdiWzJdKSAvIDM7XG4gIHJldHVybiBbdmFsIC8gMjU1ICogMTAwXTtcbn07XG5cbnZhciBjb252ZXJzaW9ucyQxID0gY29udmVyc2lvbnMkMjtcbi8qXG5cdFRoaXMgZnVuY3Rpb24gcm91dGVzIGEgbW9kZWwgdG8gYWxsIG90aGVyIG1vZGVscy5cblxuXHRhbGwgZnVuY3Rpb25zIHRoYXQgYXJlIHJvdXRlZCBoYXZlIGEgcHJvcGVydHkgYC5jb252ZXJzaW9uYCBhdHRhY2hlZFxuXHR0byB0aGUgcmV0dXJuZWQgc3ludGhldGljIGZ1bmN0aW9uLiBUaGlzIHByb3BlcnR5IGlzIGFuIGFycmF5XG5cdG9mIHN0cmluZ3MsIGVhY2ggd2l0aCB0aGUgc3RlcHMgaW4gYmV0d2VlbiB0aGUgJ2Zyb20nIGFuZCAndG8nXG5cdGNvbG9yIG1vZGVscyAoaW5jbHVzaXZlKS5cblxuXHRjb252ZXJzaW9ucyB0aGF0IGFyZSBub3QgcG9zc2libGUgc2ltcGx5IGFyZSBub3QgaW5jbHVkZWQuXG4qL1xuXG5mdW5jdGlvbiBidWlsZEdyYXBoKCkge1xuICB2YXIgZ3JhcGggPSB7fTsgLy8gaHR0cHM6Ly9qc3BlcmYuY29tL29iamVjdC1rZXlzLXZzLWZvci1pbi13aXRoLWNsb3N1cmUvM1xuXG4gIHZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9ucyQxKTtcblxuICBmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBfaTUgPSAwOyBfaTUgPCBsZW47IF9pNSsrKSB7XG4gICAgZ3JhcGhbbW9kZWxzW19pNV1dID0ge1xuICAgICAgLy8gaHR0cDovL2pzcGVyZi5jb20vMS12cy1pbmZpbml0eVxuICAgICAgLy8gbWljcm8tb3B0LCBidXQgdGhpcyBpcyBzaW1wbGUuXG4gICAgICBkaXN0YW5jZTogLTEsXG4gICAgICBwYXJlbnQ6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGdyYXBoO1xufSAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CcmVhZHRoLWZpcnN0X3NlYXJjaFxuXG5cbmZ1bmN0aW9uIGRlcml2ZUJGUyhmcm9tTW9kZWwpIHtcbiAgdmFyIGdyYXBoID0gYnVpbGRHcmFwaCgpO1xuICB2YXIgcXVldWUgPSBbZnJvbU1vZGVsXTsgLy8gVW5zaGlmdCAtPiBxdWV1ZSAtPiBwb3BcblxuICBncmFwaFtmcm9tTW9kZWxdLmRpc3RhbmNlID0gMDtcblxuICB3aGlsZSAocXVldWUubGVuZ3RoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBxdWV1ZS5wb3AoKTtcbiAgICB2YXIgYWRqYWNlbnRzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMkMVtjdXJyZW50XSk7XG5cbiAgICBmb3IgKHZhciBsZW4gPSBhZGphY2VudHMubGVuZ3RoLCBfaTYgPSAwOyBfaTYgPCBsZW47IF9pNisrKSB7XG4gICAgICB2YXIgYWRqYWNlbnQgPSBhZGphY2VudHNbX2k2XTtcbiAgICAgIHZhciBub2RlID0gZ3JhcGhbYWRqYWNlbnRdO1xuXG4gICAgICBpZiAobm9kZS5kaXN0YW5jZSA9PT0gLTEpIHtcbiAgICAgICAgbm9kZS5kaXN0YW5jZSA9IGdyYXBoW2N1cnJlbnRdLmRpc3RhbmNlICsgMTtcbiAgICAgICAgbm9kZS5wYXJlbnQgPSBjdXJyZW50O1xuICAgICAgICBxdWV1ZS51bnNoaWZ0KGFkamFjZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ3JhcGg7XG59XG5cbmZ1bmN0aW9uIGxpbmsoZnJvbSwgdG8pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgcmV0dXJuIHRvKGZyb20oYXJncykpO1xuICB9O1xufVxuXG5mdW5jdGlvbiB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCkge1xuICB2YXIgcGF0aCA9IFtncmFwaFt0b01vZGVsXS5wYXJlbnQsIHRvTW9kZWxdO1xuICB2YXIgZm4gPSBjb252ZXJzaW9ucyQxW2dyYXBoW3RvTW9kZWxdLnBhcmVudF1bdG9Nb2RlbF07XG4gIHZhciBjdXIgPSBncmFwaFt0b01vZGVsXS5wYXJlbnQ7XG5cbiAgd2hpbGUgKGdyYXBoW2N1cl0ucGFyZW50KSB7XG4gICAgcGF0aC51bnNoaWZ0KGdyYXBoW2N1cl0ucGFyZW50KTtcbiAgICBmbiA9IGxpbmsoY29udmVyc2lvbnMkMVtncmFwaFtjdXJdLnBhcmVudF1bY3VyXSwgZm4pO1xuICAgIGN1ciA9IGdyYXBoW2N1cl0ucGFyZW50O1xuICB9XG5cbiAgZm4uY29udmVyc2lvbiA9IHBhdGg7XG4gIHJldHVybiBmbjtcbn1cblxudmFyIHJvdXRlJDEgPSBmdW5jdGlvbiByb3V0ZSQxKGZyb21Nb2RlbCkge1xuICB2YXIgZ3JhcGggPSBkZXJpdmVCRlMoZnJvbU1vZGVsKTtcbiAgdmFyIGNvbnZlcnNpb24gPSB7fTtcbiAgdmFyIG1vZGVscyA9IE9iamVjdC5rZXlzKGdyYXBoKTtcblxuICBmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBfaTcgPSAwOyBfaTcgPCBsZW47IF9pNysrKSB7XG4gICAgdmFyIHRvTW9kZWwgPSBtb2RlbHNbX2k3XTtcbiAgICB2YXIgbm9kZSA9IGdyYXBoW3RvTW9kZWxdO1xuXG4gICAgaWYgKG5vZGUucGFyZW50ID09PSBudWxsKSB7XG4gICAgICAvLyBObyBwb3NzaWJsZSBjb252ZXJzaW9uLCBvciB0aGlzIG5vZGUgaXMgdGhlIHNvdXJjZSBtb2RlbC5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGNvbnZlcnNpb25bdG9Nb2RlbF0gPSB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCk7XG4gIH1cblxuICByZXR1cm4gY29udmVyc2lvbjtcbn07XG5cbnZhciBjb252ZXJzaW9ucyA9IGNvbnZlcnNpb25zJDI7XG52YXIgcm91dGUgPSByb3V0ZSQxO1xudmFyIGNvbnZlcnQgPSB7fTtcbnZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9ucyk7XG5cbmZ1bmN0aW9uIHdyYXBSYXcoZm4pIHtcbiAgdmFyIHdyYXBwZWRGbiA9IGZ1bmN0aW9uIHdyYXBwZWRGbigpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZzAgPSBhcmdzWzBdO1xuXG4gICAgaWYgKGFyZzAgPT09IHVuZGVmaW5lZCB8fCBhcmcwID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gYXJnMDtcbiAgICB9XG5cbiAgICBpZiAoYXJnMC5sZW5ndGggPiAxKSB7XG4gICAgICBhcmdzID0gYXJnMDtcbiAgICB9XG5cbiAgICByZXR1cm4gZm4oYXJncyk7XG4gIH07IC8vIFByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXG5cbiAgaWYgKCdjb252ZXJzaW9uJyBpbiBmbikge1xuICAgIHdyYXBwZWRGbi5jb252ZXJzaW9uID0gZm4uY29udmVyc2lvbjtcbiAgfVxuXG4gIHJldHVybiB3cmFwcGVkRm47XG59XG5cbmZ1bmN0aW9uIHdyYXBSb3VuZGVkKGZuKSB7XG4gIHZhciB3cmFwcGVkRm4gPSBmdW5jdGlvbiB3cmFwcGVkRm4oKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgdmFyIGFyZzAgPSBhcmdzWzBdO1xuXG4gICAgaWYgKGFyZzAgPT09IHVuZGVmaW5lZCB8fCBhcmcwID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gYXJnMDtcbiAgICB9XG5cbiAgICBpZiAoYXJnMC5sZW5ndGggPiAxKSB7XG4gICAgICBhcmdzID0gYXJnMDtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gZm4oYXJncyk7IC8vIFdlJ3JlIGFzc3VtaW5nIHRoZSByZXN1bHQgaXMgYW4gYXJyYXkgaGVyZS5cbiAgICAvLyBzZWUgbm90aWNlIGluIGNvbnZlcnNpb25zLmpzOyBkb24ndCB1c2UgYm94IHR5cGVzXG4gICAgLy8gaW4gY29udmVyc2lvbiBmdW5jdGlvbnMuXG5cbiAgICBpZiAoX3R5cGVvZihyZXN1bHQpID09PSAnb2JqZWN0Jykge1xuICAgICAgZm9yICh2YXIgbGVuID0gcmVzdWx0Lmxlbmd0aCwgX2k4ID0gMDsgX2k4IDwgbGVuOyBfaTgrKykge1xuICAgICAgICByZXN1bHRbX2k4XSA9IE1hdGgucm91bmQocmVzdWx0W19pOF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07IC8vIFByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXG5cbiAgaWYgKCdjb252ZXJzaW9uJyBpbiBmbikge1xuICAgIHdyYXBwZWRGbi5jb252ZXJzaW9uID0gZm4uY29udmVyc2lvbjtcbiAgfVxuXG4gIHJldHVybiB3cmFwcGVkRm47XG59XG5cbm1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uIChmcm9tTW9kZWwpIHtcbiAgY29udmVydFtmcm9tTW9kZWxdID0ge307XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W2Zyb21Nb2RlbF0sICdjaGFubmVscycsIHtcbiAgICB2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5jaGFubmVsc1xuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbZnJvbU1vZGVsXSwgJ2xhYmVscycsIHtcbiAgICB2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5sYWJlbHNcbiAgfSk7XG4gIHZhciByb3V0ZXMgPSByb3V0ZShmcm9tTW9kZWwpO1xuICB2YXIgcm91dGVNb2RlbHMgPSBPYmplY3Qua2V5cyhyb3V0ZXMpO1xuICByb3V0ZU1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uICh0b01vZGVsKSB7XG4gICAgdmFyIGZuID0gcm91dGVzW3RvTW9kZWxdO1xuICAgIGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXSA9IHdyYXBSb3VuZGVkKGZuKTtcbiAgICBjb252ZXJ0W2Zyb21Nb2RlbF1bdG9Nb2RlbF0ucmF3ID0gd3JhcFJhdyhmbik7XG4gIH0pO1xufSk7XG52YXIgY29sb3JDb252ZXJ0ID0gY29udmVydDtcbnZhciByb290ID0gX3Jvb3Q7XG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG5cbnZhciBub3ckMSA9IGZ1bmN0aW9uIG5vdyQxKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxudmFyIG5vd18xID0gbm93JDE7XG4vKiogVXNlZCB0byBtYXRjaCBhIHNpbmdsZSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gKi9cblxudmFyIHJlV2hpdGVzcGFjZSA9IC9cXHMvO1xuLyoqXG4gKiBVc2VkIGJ5IGBfLnRyaW1gIGFuZCBgXy50cmltRW5kYCB0byBnZXQgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlXG4gKiBjaGFyYWN0ZXIgb2YgYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyLlxuICovXG5cbmZ1bmN0aW9uIHRyaW1tZWRFbmRJbmRleCQxKHN0cmluZykge1xuICB2YXIgaW5kZXggPSBzdHJpbmcubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRleC0tICYmIHJlV2hpdGVzcGFjZS50ZXN0KHN0cmluZy5jaGFyQXQoaW5kZXgpKSkge31cblxuICByZXR1cm4gaW5kZXg7XG59XG5cbnZhciBfdHJpbW1lZEVuZEluZGV4ID0gdHJpbW1lZEVuZEluZGV4JDE7XG52YXIgdHJpbW1lZEVuZEluZGV4ID0gX3RyaW1tZWRFbmRJbmRleDtcbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgd2hpdGVzcGFjZS4gKi9cblxudmFyIHJlVHJpbVN0YXJ0ID0gL15cXHMrLztcbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udHJpbWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byB0cmltLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgdHJpbW1lZCBzdHJpbmcuXG4gKi9cblxuZnVuY3Rpb24gYmFzZVRyaW0kMShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZyA/IHN0cmluZy5zbGljZSgwLCB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSArIDEpLnJlcGxhY2UocmVUcmltU3RhcnQsICcnKSA6IHN0cmluZztcbn1cblxudmFyIF9iYXNlVHJpbSA9IGJhc2VUcmltJDE7XG52YXIgYmFzZVRyaW0gPSBfYmFzZVRyaW0sXG4gICAgaXNPYmplY3QkMiA9IGlzT2JqZWN0XzEsXG4gICAgaXNTeW1ib2wgPSBpc1N5bWJvbF8xO1xuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG5cbnZhciBOQU4gPSAwIC8gMDtcbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG5cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG5cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG5cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cblxudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cblxuZnVuY3Rpb24gdG9OdW1iZXIkMSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cblxuICBpZiAoaXNPYmplY3QkMih2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdCQyKG90aGVyKSA/IG90aGVyICsgJycgOiBvdGhlcjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuXG4gIHZhbHVlID0gYmFzZVRyaW0odmFsdWUpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KSA6IHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWU7XG59XG5cbnZhciB0b051bWJlcl8xID0gdG9OdW1iZXIkMTtcbnZhciBpc09iamVjdCQxID0gaXNPYmplY3RfMSxcbiAgICBub3cgPSBub3dfMSxcbiAgICB0b051bWJlciA9IHRvTnVtYmVyXzE7XG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG5cbnZhciBGVU5DX0VSUk9SX1RFWFQkMSA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cblxudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cblxuZnVuY3Rpb24gZGVib3VuY2UkMShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUJDEpO1xuICB9XG5cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG5cbiAgaWYgKGlzT2JqZWN0JDEob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTsgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cblxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7IC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgdGltZVdhaXRpbmcgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG4gICAgcmV0dXJuIG1heGluZyA/IG5hdGl2ZU1pbih0aW1lV2FpdGluZywgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpIDogdGltZVdhaXRpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7IC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG5cbiAgICByZXR1cm4gbGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgdGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCB8fCB0aW1lU2luY2VMYXN0Q2FsbCA8IDAgfHwgbWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuXG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9IC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuXG5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkOyAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuXG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxudmFyIGRlYm91bmNlXzEgPSBkZWJvdW5jZSQxO1xudmFyIGRlYm91bmNlID0gZGVib3VuY2VfMSxcbiAgICBpc09iamVjdCA9IGlzT2JqZWN0XzE7XG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG5cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG4vKipcbiAqIENyZWF0ZXMgYSB0aHJvdHRsZWQgZnVuY3Rpb24gdGhhdCBvbmx5IGludm9rZXMgYGZ1bmNgIGF0IG1vc3Qgb25jZSBwZXJcbiAqIGV2ZXJ5IGB3YWl0YCBtaWxsaXNlY29uZHMuIFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgXG4gKiBtZXRob2QgdG8gY2FuY2VsIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvXG4gKiBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS4gUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2BcbiAqIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZSBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGBcbiAqIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZCB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGVcbiAqIHRocm90dGxlZCBmdW5jdGlvbi4gU3Vic2VxdWVudCBjYWxscyB0byB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHJldHVybiB0aGVcbiAqIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2AgaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIHRocm90dGxlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy50aHJvdHRsZWAgYW5kIGBfLmRlYm91bmNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRocm90dGxlIGludm9jYXRpb25zIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHRocm90dGxlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgZXhjZXNzaXZlbHkgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHdoaWxlIHNjcm9sbGluZy5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdzY3JvbGwnLCBfLnRocm90dGxlKHVwZGF0ZVBvc2l0aW9uLCAxMDApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHJlbmV3VG9rZW5gIHdoZW4gdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkLCBidXQgbm90IG1vcmUgdGhhbiBvbmNlIGV2ZXJ5IDUgbWludXRlcy5cbiAqIHZhciB0aHJvdHRsZWQgPSBfLnRocm90dGxlKHJlbmV3VG9rZW4sIDMwMDAwMCwgeyAndHJhaWxpbmcnOiBmYWxzZSB9KTtcbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCB0aHJvdHRsZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgdGhyb3R0bGVkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCB0aHJvdHRsZWQuY2FuY2VsKTtcbiAqL1xuXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsZWFkaW5nID0gdHJ1ZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuXG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAnbGVhZGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy5sZWFkaW5nIDogbGVhZGluZztcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgcmV0dXJuIGRlYm91bmNlKGZ1bmMsIHdhaXQsIHtcbiAgICAnbGVhZGluZyc6IGxlYWRpbmcsXG4gICAgJ21heFdhaXQnOiB3YWl0LFxuICAgICd0cmFpbGluZyc6IHRyYWlsaW5nXG4gIH0pO1xufVxuXG52YXIgdGhyb3R0bGVfMSA9IHRocm90dGxlO1xudmFyIFdyYXBwZXIgPSBzdHlsZWQuZGl2KHtcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIG1heFdpZHRoOiAyNTBcbn0pO1xudmFyIFBpY2tlclRvb2x0aXAgPSBzdHlsZWQoV2l0aFRvb2x0aXApKHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHpJbmRleDogMSxcbiAgdG9wOiA0LFxuICBsZWZ0OiA0XG59KTtcbnZhciBUb29sdGlwQ29udGVudCA9IHN0eWxlZC5kaXYoe1xuICB3aWR0aDogMjAwLFxuICBtYXJnaW46IDUsXG4gICcucmVhY3QtY29sb3JmdWxfX3NhdHVyYXRpb24nOiB7XG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4IDRweCAwIDAnXG4gIH0sXG4gICcucmVhY3QtY29sb3JmdWxfX2h1ZSc6IHtcbiAgICBib3hTaGFkb3c6ICdpbnNldCAwIDAgMCAxcHggcmdiKDAgMCAwIC8gNSUpJ1xuICB9LFxuICAnLnJlYWN0LWNvbG9yZnVsX19sYXN0LWNvbnRyb2wnOiB7XG4gICAgYm9yZGVyUmFkaXVzOiAnMCAwIDRweCA0cHgnXG4gIH1cbn0pO1xudmFyIE5vdGUgPSBzdHlsZWQoVG9vbHRpcE5vdGUpKGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciB0aGVtZSA9IF9yZWYudGhlbWU7XG4gIHJldHVybiB7XG4gICAgZm9udEZhbWlseTogdGhlbWUudHlwb2dyYXBoeS5mb250cy5iYXNlXG4gIH07XG59KTtcbnZhciBTd2F0Y2hlcyA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZ3JpZCcsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoOSwgMTZweCknLFxuICBnYXA6IDYsXG4gIHBhZGRpbmc6IDMsXG4gIG1hcmdpblRvcDogNSxcbiAgd2lkdGg6IDIwMFxufSk7XG52YXIgU3dhdGNoQ29sb3IgPSBzdHlsZWQuZGl2KGZ1bmN0aW9uIChfcmVmMikge1xuICB2YXIgdGhlbWUgPSBfcmVmMi50aGVtZSxcbiAgICAgIGFjdGl2ZSA9IF9yZWYyLmFjdGl2ZTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogMTYsXG4gICAgaGVpZ2h0OiAxNixcbiAgICBib3hTaGFkb3c6IGFjdGl2ZSA/IFwiXCIuY29uY2F0KHRoZW1lLmFwcEJvcmRlckNvbG9yLCBcIiAwIDAgMCAxcHggaW5zZXQsIFwiKS5jb25jYXQodGhlbWUuY29sb3IubWVkaXVtZGFyaywgXCI1MCAwIDAgMCA0cHhcIikgOiBcIlwiLmNvbmNhdCh0aGVtZS5hcHBCb3JkZXJDb2xvciwgXCIgMCAwIDAgMXB4IGluc2V0XCIpLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuYXBwQm9yZGVyUmFkaXVzXG4gIH07XG59KTtcbnZhciBzd2F0Y2hCYWNrZ3JvdW5kID0gXCJ1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiMTZcXFwiIGhlaWdodD1cXFwiMTZcXFwiIGZpbGwtb3BhY2l0eT1cXFwiLjA1XFxcIj48cGF0aCBkPVxcXCJNOCAwaDh2OEg4ek0wIDhoOHY4SDB6XFxcIi8+PC9zdmc+JylcIjtcblxudmFyIFN3YXRjaCA9IGZ1bmN0aW9uIFN3YXRjaChfYSkge1xuICB2YXIgdmFsdWUgPSBfYS52YWx1ZSxcbiAgICAgIGFjdGl2ZSA9IF9hLmFjdGl2ZSxcbiAgICAgIG9uQ2xpY2sgPSBfYS5vbkNsaWNrLFxuICAgICAgc3R5bGUgPSBfYS5zdHlsZSxcbiAgICAgIHByb3BzID0gX19yZXN0KF9hLCBbXCJ2YWx1ZVwiLCBcImFjdGl2ZVwiLCBcIm9uQ2xpY2tcIiwgXCJzdHlsZVwiXSk7XG5cbiAgdmFyIGJhY2tncm91bmRJbWFnZSA9IFwibGluZWFyLWdyYWRpZW50KFwiLmNvbmNhdCh2YWx1ZSwgXCIsIFwiKS5jb25jYXQodmFsdWUsIFwiKSwgXCIpLmNvbmNhdChzd2F0Y2hCYWNrZ3JvdW5kLCBcIiwgbGluZWFyLWdyYWRpZW50KCNmZmYsICNmZmYpXCIpO1xuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChTd2F0Y2hDb2xvciwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICBhY3RpdmU6IGFjdGl2ZSxcbiAgICBvbkNsaWNrOiBvbkNsaWNrXG4gIH0sIHtcbiAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdHlsZSksIHtcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYmFja2dyb3VuZEltYWdlXG4gICAgfSlcbiAgfSkpO1xufTtcblxudmFyIElucHV0ID0gc3R5bGVkKEZvcm0uSW5wdXQpKGZ1bmN0aW9uIChfcmVmMykge1xuICB2YXIgdGhlbWUgPSBfcmVmMy50aGVtZTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBhZGRpbmdMZWZ0OiAzMCxcbiAgICBwYWRkaW5nUmlnaHQ6IDMwLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udHMuYmFzZVxuICB9O1xufSk7XG52YXIgVG9nZ2xlSWNvbiA9IHN0eWxlZChJY29ucykoZnVuY3Rpb24gKF9yZWY0KSB7XG4gIHZhciB0aGVtZSA9IF9yZWY0LnRoZW1lO1xuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHpJbmRleDogMSxcbiAgICB0b3A6IDYsXG4gICAgcmlnaHQ6IDcsXG4gICAgd2lkdGg6IDIwLFxuICAgIGhlaWdodDogMjAsXG4gICAgcGFkZGluZzogNCxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBjb2xvcjogdGhlbWUuaW5wdXQuY29sb3JcbiAgfTtcbn0pO1xudmFyIENvbG9yU3BhY2U7XG5cbihmdW5jdGlvbiAoQ29sb3JTcGFjZSkge1xuICBDb2xvclNwYWNlW1wiUkdCXCJdID0gXCJyZ2JcIjtcbiAgQ29sb3JTcGFjZVtcIkhTTFwiXSA9IFwiaHNsXCI7XG4gIENvbG9yU3BhY2VbXCJIRVhcIl0gPSBcImhleFwiO1xufSkoQ29sb3JTcGFjZSB8fCAoQ29sb3JTcGFjZSA9IHt9KSk7XG5cbnZhciBDT0xPUl9TUEFDRVMgPSBPYmplY3QudmFsdWVzKENvbG9yU3BhY2UpO1xudmFyIENPTE9SX1JFR0VYUCA9IC9cXCgoWzAtOV0rKSxcXHMqKFswLTldKyklPyxcXHMqKFswLTldKyklPyw/XFxzKihbMC05Ll0rKT9cXCkvO1xudmFyIFJHQl9SRUdFWFAgPSAvXlxccypyZ2JhP1xcKChbMC05XSspLFxccyooWzAtOV0rKSxcXHMqKFswLTldKyksP1xccyooWzAtOS5dKyk/XFwpXFxzKiQvaTtcbnZhciBIU0xfUkVHRVhQID0gL15cXHMqaHNsYT9cXCgoWzAtOV0rKSxcXHMqKFswLTldKyklLFxccyooWzAtOV0rKSUsP1xccyooWzAtOS5dKyk/XFwpXFxzKiQvaTtcbnZhciBIRVhfUkVHRVhQID0gL15cXHMqIz8oWzAtOWEtZl17M318WzAtOWEtZl17Nn0pXFxzKiQvaTtcbnZhciBTSE9SVEhFWF9SRUdFWFAgPSAvXlxccyojPyhbMC05YS1mXXszfSlcXHMqJC9pO1xudmFyIENvbG9yUGlja2VyID0gKF9Db2xvclBpY2tlciA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX0NvbG9yUGlja2VyLCBDb2xvclNwYWNlLkhFWCwgSiksIF9kZWZpbmVQcm9wZXJ0eShfQ29sb3JQaWNrZXIsIENvbG9yU3BhY2UuUkdCLCBwZSksIF9kZWZpbmVQcm9wZXJ0eShfQ29sb3JQaWNrZXIsIENvbG9yU3BhY2UuSFNMLCByZSksIF9Db2xvclBpY2tlcik7XG52YXIgZmFsbGJhY2tDb2xvciA9IChfZmFsbGJhY2tDb2xvciA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2ZhbGxiYWNrQ29sb3IsIENvbG9yU3BhY2UuSEVYLCAndHJhbnNwYXJlbnQnKSwgX2RlZmluZVByb3BlcnR5KF9mYWxsYmFja0NvbG9yLCBDb2xvclNwYWNlLlJHQiwgJ3JnYmEoMCwgMCwgMCwgMCknKSwgX2RlZmluZVByb3BlcnR5KF9mYWxsYmFja0NvbG9yLCBDb2xvclNwYWNlLkhTTCwgJ2hzbGEoMCwgMCUsIDAlLCAwKScpLCBfZmFsbGJhY2tDb2xvcik7XG5cbnZhciBzdHJpbmdUb0FyZ3MgPSBmdW5jdGlvbiBzdHJpbmdUb0FyZ3ModmFsdWUpIHtcbiAgdmFyIG1hdGNoID0gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhbHVlLm1hdGNoKENPTE9SX1JFR0VYUCk7XG4gIGlmICghbWF0Y2gpIHJldHVybiBbMCwgMCwgMCwgMV07XG5cbiAgdmFyIF9tYXRjaCA9IF9zbGljZWRUb0FycmF5KG1hdGNoLCA1KSxcbiAgICAgIHggPSBfbWF0Y2hbMV0sXG4gICAgICB5ID0gX21hdGNoWzJdLFxuICAgICAgeiA9IF9tYXRjaFszXSxcbiAgICAgIF9tYXRjaCQgPSBfbWF0Y2hbNF0sXG4gICAgICBhID0gX21hdGNoJCA9PT0gdm9pZCAwID8gMSA6IF9tYXRjaCQ7XG5cbiAgcmV0dXJuIFt4LCB5LCB6LCBhXS5tYXAoTnVtYmVyKTtcbn07XG5cbnZhciBwYXJzZVZhbHVlID0gZnVuY3Rpb24gcGFyc2VWYWx1ZSh2YWx1ZSkge1xuICB2YXIgX3JlZjExO1xuXG4gIGlmICghdmFsdWUpIHJldHVybiB1bmRlZmluZWQ7XG4gIHZhciB2YWxpZCA9IHRydWU7XG5cbiAgaWYgKFJHQl9SRUdFWFAudGVzdCh2YWx1ZSkpIHtcbiAgICB2YXIgX3JlZjc7XG5cbiAgICB2YXIgX3N0cmluZ1RvQXJncyA9IHN0cmluZ1RvQXJncyh2YWx1ZSksXG4gICAgICAgIF9zdHJpbmdUb0FyZ3MyID0gX3NsaWNlZFRvQXJyYXkoX3N0cmluZ1RvQXJncywgNCksXG4gICAgICAgIHIgPSBfc3RyaW5nVG9BcmdzMlswXSxcbiAgICAgICAgX2cgPSBfc3RyaW5nVG9BcmdzMlsxXSxcbiAgICAgICAgX2IgPSBfc3RyaW5nVG9BcmdzMlsyXSxcbiAgICAgICAgYSA9IF9zdHJpbmdUb0FyZ3MyWzNdO1xuXG4gICAgdmFyIF9yZWY1ID0gY29sb3JDb252ZXJ0LnJnYi5oc2woW3IsIF9nLCBfYl0pIHx8IFswLCAwLCAwXSxcbiAgICAgICAgX3JlZjYgPSBfc2xpY2VkVG9BcnJheShfcmVmNSwgMyksXG4gICAgICAgIF9oID0gX3JlZjZbMF0sXG4gICAgICAgIF9zMiA9IF9yZWY2WzFdLFxuICAgICAgICBsID0gX3JlZjZbMl07XG5cbiAgICByZXR1cm4gX3JlZjcgPSB7XG4gICAgICB2YWxpZDogdmFsaWQsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBrZXl3b3JkOiBjb2xvckNvbnZlcnQucmdiLmtleXdvcmQoW3IsIF9nLCBfYl0pLFxuICAgICAgY29sb3JTcGFjZTogQ29sb3JTcGFjZS5SR0JcbiAgICB9LCBfZGVmaW5lUHJvcGVydHkoX3JlZjcsIENvbG9yU3BhY2UuUkdCLCB2YWx1ZSksIF9kZWZpbmVQcm9wZXJ0eShfcmVmNywgQ29sb3JTcGFjZS5IU0wsIFwiaHNsYShcIi5jb25jYXQoX2gsIFwiLCBcIikuY29uY2F0KF9zMiwgXCIlLCBcIikuY29uY2F0KGwsIFwiJSwgXCIpLmNvbmNhdChhLCBcIilcIikpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjcsIENvbG9yU3BhY2UuSEVYLCBcIiNcIi5jb25jYXQoY29sb3JDb252ZXJ0LnJnYi5oZXgoW3IsIF9nLCBfYl0pLnRvTG93ZXJDYXNlKCkpKSwgX3JlZjc7XG4gIH1cblxuICBpZiAoSFNMX1JFR0VYUC50ZXN0KHZhbHVlKSkge1xuICAgIHZhciBfcmVmMTA7XG5cbiAgICB2YXIgX3N0cmluZ1RvQXJnczMgPSBzdHJpbmdUb0FyZ3ModmFsdWUpLFxuICAgICAgICBfc3RyaW5nVG9BcmdzNCA9IF9zbGljZWRUb0FycmF5KF9zdHJpbmdUb0FyZ3MzLCA0KSxcbiAgICAgICAgX2gyID0gX3N0cmluZ1RvQXJnczRbMF0sXG4gICAgICAgIF9zMyA9IF9zdHJpbmdUb0FyZ3M0WzFdLFxuICAgICAgICBfbCA9IF9zdHJpbmdUb0FyZ3M0WzJdLFxuICAgICAgICBfYTIgPSBfc3RyaW5nVG9BcmdzNFszXTtcblxuICAgIHZhciBfcmVmOCA9IGNvbG9yQ29udmVydC5oc2wucmdiKFtfaDIsIF9zMywgX2xdKSB8fCBbMCwgMCwgMF0sXG4gICAgICAgIF9yZWY5ID0gX3NsaWNlZFRvQXJyYXkoX3JlZjgsIDMpLFxuICAgICAgICBfciA9IF9yZWY5WzBdLFxuICAgICAgICBfZzIgPSBfcmVmOVsxXSxcbiAgICAgICAgX2IyID0gX3JlZjlbMl07XG5cbiAgICByZXR1cm4gX3JlZjEwID0ge1xuICAgICAgdmFsaWQ6IHZhbGlkLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAga2V5d29yZDogY29sb3JDb252ZXJ0LmhzbC5rZXl3b3JkKFtfaDIsIF9zMywgX2xdKSxcbiAgICAgIGNvbG9yU3BhY2U6IENvbG9yU3BhY2UuSFNMXG4gICAgfSwgX2RlZmluZVByb3BlcnR5KF9yZWYxMCwgQ29sb3JTcGFjZS5SR0IsIFwicmdiYShcIi5jb25jYXQoX3IsIFwiLCBcIikuY29uY2F0KF9nMiwgXCIsIFwiKS5jb25jYXQoX2IyLCBcIiwgXCIpLmNvbmNhdChfYTIsIFwiKVwiKSksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMTAsIENvbG9yU3BhY2UuSFNMLCB2YWx1ZSksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMTAsIENvbG9yU3BhY2UuSEVYLCBcIiNcIi5jb25jYXQoY29sb3JDb252ZXJ0LmhzbC5oZXgoW19oMiwgX3MzLCBfbF0pLnRvTG93ZXJDYXNlKCkpKSwgX3JlZjEwO1xuICB9XG5cbiAgdmFyIHBsYWluID0gdmFsdWUucmVwbGFjZSgnIycsICcnKTtcbiAgdmFyIHJnYiA9IGNvbG9yQ29udmVydC5rZXl3b3JkLnJnYihwbGFpbikgfHwgY29sb3JDb252ZXJ0LmhleC5yZ2IocGxhaW4pO1xuICB2YXIgaHNsID0gY29sb3JDb252ZXJ0LnJnYi5oc2wocmdiKTtcbiAgdmFyIG1hcHBlZCA9IHZhbHVlO1xuICBpZiAoL1teI2EtZjAtOV0vaS50ZXN0KHZhbHVlKSkgbWFwcGVkID0gcGxhaW47ZWxzZSBpZiAoSEVYX1JFR0VYUC50ZXN0KHZhbHVlKSkgbWFwcGVkID0gXCIjXCIuY29uY2F0KHBsYWluKTtcblxuICBpZiAobWFwcGVkLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgIHZhbGlkID0gSEVYX1JFR0VYUC50ZXN0KG1hcHBlZCk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbG9yQ29udmVydC5rZXl3b3JkLmhleChtYXBwZWQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9yZWYxMSA9IHtcbiAgICB2YWxpZDogdmFsaWQsXG4gICAgdmFsdWU6IG1hcHBlZCxcbiAgICBrZXl3b3JkOiBjb2xvckNvbnZlcnQucmdiLmtleXdvcmQocmdiKSxcbiAgICBjb2xvclNwYWNlOiBDb2xvclNwYWNlLkhFWFxuICB9LCBfZGVmaW5lUHJvcGVydHkoX3JlZjExLCBDb2xvclNwYWNlLlJHQiwgXCJyZ2JhKFwiLmNvbmNhdChyZ2JbMF0sIFwiLCBcIikuY29uY2F0KHJnYlsxXSwgXCIsIFwiKS5jb25jYXQocmdiWzJdLCBcIiwgMSlcIikpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjExLCBDb2xvclNwYWNlLkhTTCwgXCJoc2xhKFwiLmNvbmNhdChoc2xbMF0sIFwiLCBcIikuY29uY2F0KGhzbFsxXSwgXCIlLCBcIikuY29uY2F0KGhzbFsyXSwgXCIlLCAxKVwiKSksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMTEsIENvbG9yU3BhY2UuSEVYLCBtYXBwZWQpLCBfcmVmMTE7XG59O1xuXG52YXIgZ2V0UmVhbFZhbHVlID0gZnVuY3Rpb24gZ2V0UmVhbFZhbHVlKHZhbHVlLCBjb2xvciwgY29sb3JTcGFjZSkge1xuICBpZiAoIXZhbHVlIHx8ICEoY29sb3IgPT09IG51bGwgfHwgY29sb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbG9yLnZhbGlkKSkgcmV0dXJuIGZhbGxiYWNrQ29sb3JbY29sb3JTcGFjZV07XG4gIGlmIChjb2xvclNwYWNlICE9PSBDb2xvclNwYWNlLkhFWCkgcmV0dXJuIChjb2xvciA9PT0gbnVsbCB8fCBjb2xvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29sb3JbY29sb3JTcGFjZV0pIHx8IGZhbGxiYWNrQ29sb3JbY29sb3JTcGFjZV07XG5cbiAgaWYgKCFjb2xvci5oZXguc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBcIiNcIi5jb25jYXQoY29sb3JDb252ZXJ0LmtleXdvcmQuaGV4KGNvbG9yLmhleCkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxsYmFja0NvbG9yLmhleDtcbiAgICB9XG4gIH1cblxuICB2YXIgc2hvcnQgPSBjb2xvci5oZXgubWF0Y2goU0hPUlRIRVhfUkVHRVhQKTtcbiAgaWYgKCFzaG9ydCkgcmV0dXJuIEhFWF9SRUdFWFAudGVzdChjb2xvci5oZXgpID8gY29sb3IuaGV4IDogZmFsbGJhY2tDb2xvci5oZXg7XG5cbiAgdmFyIF9zaG9ydCQxJHNwbGl0ID0gc2hvcnRbMV0uc3BsaXQoJycpLFxuICAgICAgX3Nob3J0JDEkc3BsaXQyID0gX3NsaWNlZFRvQXJyYXkoX3Nob3J0JDEkc3BsaXQsIDMpLFxuICAgICAgciA9IF9zaG9ydCQxJHNwbGl0MlswXSxcbiAgICAgIGcgPSBfc2hvcnQkMSRzcGxpdDJbMV0sXG4gICAgICBiID0gX3Nob3J0JDEkc3BsaXQyWzJdO1xuXG4gIHJldHVybiBcIiNcIi5jb25jYXQocikuY29uY2F0KHIpLmNvbmNhdChnKS5jb25jYXQoZykuY29uY2F0KGIpLmNvbmNhdChiKTtcbn07XG5cbnZhciB1c2VDb2xvcklucHV0ID0gZnVuY3Rpb24gdXNlQ29sb3JJbnB1dChpbml0aWFsVmFsdWUsIG9uQ2hhbmdlKSB7XG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUgfHwgJycpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICB2YWx1ZSA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRWYWx1ZSA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHBhcnNlVmFsdWUodmFsdWUpO1xuICB9KSxcbiAgICAgIF91c2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUzLCAyKSxcbiAgICAgIGNvbG9yID0gX3VzZVN0YXRlNFswXSxcbiAgICAgIHNldENvbG9yID0gX3VzZVN0YXRlNFsxXTtcblxuICB2YXIgX3VzZVN0YXRlNSA9IHVzZVN0YXRlKChjb2xvciA9PT0gbnVsbCB8fCBjb2xvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29sb3IuY29sb3JTcGFjZSkgfHwgQ29sb3JTcGFjZS5IRVgpLFxuICAgICAgX3VzZVN0YXRlNiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTUsIDIpLFxuICAgICAgY29sb3JTcGFjZSA9IF91c2VTdGF0ZTZbMF0sXG4gICAgICBzZXRDb2xvclNwYWNlID0gX3VzZVN0YXRlNlsxXTsgLy8gUmVzZXQgc3RhdGUgd2hlbiBpbml0aWFsVmFsdWUgYmVjb21lcyB1bmRlZmluZWQgKHdoZW4gcmVzZXR0aW5nIGNvbnRyb2xzKVxuXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaW5pdGlhbFZhbHVlICE9PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICBzZXRWYWx1ZSgnJyk7XG4gICAgc2V0Q29sb3IodW5kZWZpbmVkKTtcbiAgICBzZXRDb2xvclNwYWNlKENvbG9yU3BhY2UuSEVYKTtcbiAgfSwgW2luaXRpYWxWYWx1ZV0pO1xuICB2YXIgcmVhbFZhbHVlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdldFJlYWxWYWx1ZSh2YWx1ZSwgY29sb3IsIGNvbG9yU3BhY2UpLnRvTG93ZXJDYXNlKCk7XG4gIH0sIFt2YWx1ZSwgY29sb3IsIGNvbG9yU3BhY2VdKTtcbiAgdmFyIHVwZGF0ZVZhbHVlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHVwZGF0ZSkge1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZVZhbHVlKHVwZGF0ZSk7XG4gICAgc2V0VmFsdWUoKHBhcnNlZCA9PT0gbnVsbCB8fCBwYXJzZWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcnNlZC52YWx1ZSkgfHwgdXBkYXRlIHx8ICcnKTtcbiAgICBpZiAoIXBhcnNlZCkgcmV0dXJuO1xuICAgIHNldENvbG9yKHBhcnNlZCk7XG4gICAgc2V0Q29sb3JTcGFjZShwYXJzZWQuY29sb3JTcGFjZSk7XG4gICAgb25DaGFuZ2UocGFyc2VkLnZhbHVlKTtcbiAgfSwgW29uQ2hhbmdlXSk7XG4gIHZhciBjeWNsZUNvbG9yU3BhY2UgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5leHQgPSBDT0xPUl9TUEFDRVMuaW5kZXhPZihjb2xvclNwYWNlKSArIDE7XG4gICAgaWYgKG5leHQgPj0gQ09MT1JfU1BBQ0VTLmxlbmd0aCkgbmV4dCA9IDA7XG4gICAgc2V0Q29sb3JTcGFjZShDT0xPUl9TUEFDRVNbbmV4dF0pO1xuICAgIHZhciB1cGRhdGUgPSAoY29sb3IgPT09IG51bGwgfHwgY29sb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbG9yW0NPTE9SX1NQQUNFU1tuZXh0XV0pIHx8ICcnO1xuICAgIHNldFZhbHVlKHVwZGF0ZSk7XG4gICAgb25DaGFuZ2UodXBkYXRlKTtcbiAgfSwgW2NvbG9yLCBjb2xvclNwYWNlLCBvbkNoYW5nZV0pO1xuICByZXR1cm4ge1xuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICByZWFsVmFsdWU6IHJlYWxWYWx1ZSxcbiAgICB1cGRhdGVWYWx1ZTogdXBkYXRlVmFsdWUsXG4gICAgY29sb3I6IGNvbG9yLFxuICAgIGNvbG9yU3BhY2U6IGNvbG9yU3BhY2UsXG4gICAgY3ljbGVDb2xvclNwYWNlOiBjeWNsZUNvbG9yU3BhY2VcbiAgfTtcbn07XG5cbnZhciBpZCA9IGZ1bmN0aW9uIGlkKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cXHMqLywgJycpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgdXNlUHJlc2V0cyA9IGZ1bmN0aW9uIHVzZVByZXNldHMocHJlc2V0Q29sb3JzLCBjdXJyZW50Q29sb3IsIGNvbG9yU3BhY2UpIHtcbiAgdmFyIF91c2VTdGF0ZTcgPSB1c2VTdGF0ZSgoY3VycmVudENvbG9yID09PSBudWxsIHx8IGN1cnJlbnRDb2xvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudENvbG9yLnZhbGlkKSA/IFtjdXJyZW50Q29sb3JdIDogW10pLFxuICAgICAgX3VzZVN0YXRlOCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTcsIDIpLFxuICAgICAgc2VsZWN0ZWRDb2xvcnMgPSBfdXNlU3RhdGU4WzBdLFxuICAgICAgc2V0U2VsZWN0ZWRDb2xvcnMgPSBfdXNlU3RhdGU4WzFdOyAvLyBSZXNldCBzdGF0ZSB3aGVuIGN1cnJlbnRDb2xvciBiZWNvbWVzIHVuZGVmaW5lZCAod2hlbiByZXNldHRpbmcgY29udHJvbHMpXG5cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChjdXJyZW50Q29sb3IgIT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgIHNldFNlbGVjdGVkQ29sb3JzKFtdKTtcbiAgfSwgW2N1cnJlbnRDb2xvcl0pO1xuICB2YXIgcHJlc2V0cyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbml0aWFsUHJlc2V0cyA9IChwcmVzZXRDb2xvcnMgfHwgW10pLm1hcChmdW5jdGlvbiAocHJlc2V0KSB7XG4gICAgICBpZiAodHlwZW9mIHByZXNldCA9PT0gJ3N0cmluZycpIHJldHVybiBwYXJzZVZhbHVlKHByZXNldCk7XG4gICAgICBpZiAocHJlc2V0LnRpdGxlKSByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwYXJzZVZhbHVlKHByZXNldC5jb2xvcikpLCB7XG4gICAgICAgIGtleXdvcmQ6IHByZXNldC50aXRsZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcGFyc2VWYWx1ZShwcmVzZXQuY29sb3IpO1xuICAgIH0pO1xuICAgIHJldHVybiBpbml0aWFsUHJlc2V0cy5jb25jYXQoc2VsZWN0ZWRDb2xvcnMpLmZpbHRlcihCb29sZWFuKS5zbGljZSgtMjcpO1xuICB9LCBbcHJlc2V0Q29sb3JzLCBzZWxlY3RlZENvbG9yc10pO1xuICB2YXIgYWRkUHJlc2V0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgaWYgKCEoY29sb3IgPT09IG51bGwgfHwgY29sb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbG9yLnZhbGlkKSkgcmV0dXJuO1xuICAgIGlmIChwcmVzZXRzLnNvbWUoZnVuY3Rpb24gKHByZXNldCkge1xuICAgICAgcmV0dXJuIGlkKHByZXNldFtjb2xvclNwYWNlXSkgPT09IGlkKGNvbG9yW2NvbG9yU3BhY2VdKTtcbiAgICB9KSkgcmV0dXJuO1xuICAgIHNldFNlbGVjdGVkQ29sb3JzKGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgIHJldHVybiBhcnIuY29uY2F0KGNvbG9yKTtcbiAgICB9KTtcbiAgfSwgW2NvbG9yU3BhY2UsIHByZXNldHNdKTtcbiAgcmV0dXJuIHtcbiAgICBwcmVzZXRzOiBwcmVzZXRzLFxuICAgIGFkZFByZXNldDogYWRkUHJlc2V0XG4gIH07XG59O1xuXG52YXIgQ29sb3JDb250cm9sID0gZnVuY3Rpb24gQ29sb3JDb250cm9sKF9yZWYxMikge1xuICB2YXIgbmFtZSA9IF9yZWYxMi5uYW1lLFxuICAgICAgaW5pdGlhbFZhbHVlID0gX3JlZjEyLnZhbHVlLFxuICAgICAgb25DaGFuZ2UgPSBfcmVmMTIub25DaGFuZ2UsXG4gICAgICBvbkZvY3VzID0gX3JlZjEyLm9uRm9jdXMsXG4gICAgICBvbkJsdXIgPSBfcmVmMTIub25CbHVyLFxuICAgICAgcHJlc2V0Q29sb3JzID0gX3JlZjEyLnByZXNldENvbG9ycyxcbiAgICAgIHN0YXJ0T3BlbiA9IF9yZWYxMi5zdGFydE9wZW47XG5cbiAgdmFyIF91c2VDb2xvcklucHV0ID0gdXNlQ29sb3JJbnB1dChpbml0aWFsVmFsdWUsIHRocm90dGxlXzEob25DaGFuZ2UsIDIwMCkpLFxuICAgICAgdmFsdWUgPSBfdXNlQ29sb3JJbnB1dC52YWx1ZSxcbiAgICAgIHJlYWxWYWx1ZSA9IF91c2VDb2xvcklucHV0LnJlYWxWYWx1ZSxcbiAgICAgIHVwZGF0ZVZhbHVlID0gX3VzZUNvbG9ySW5wdXQudXBkYXRlVmFsdWUsXG4gICAgICBjb2xvciA9IF91c2VDb2xvcklucHV0LmNvbG9yLFxuICAgICAgY29sb3JTcGFjZSA9IF91c2VDb2xvcklucHV0LmNvbG9yU3BhY2UsXG4gICAgICBjeWNsZUNvbG9yU3BhY2UgPSBfdXNlQ29sb3JJbnB1dC5jeWNsZUNvbG9yU3BhY2U7XG5cbiAgdmFyIF91c2VQcmVzZXRzID0gdXNlUHJlc2V0cyhwcmVzZXRDb2xvcnMsIGNvbG9yLCBjb2xvclNwYWNlKSxcbiAgICAgIHByZXNldHMgPSBfdXNlUHJlc2V0cy5wcmVzZXRzLFxuICAgICAgYWRkUHJlc2V0ID0gX3VzZVByZXNldHMuYWRkUHJlc2V0O1xuXG4gIHZhciBQaWNrZXIgPSBDb2xvclBpY2tlcltjb2xvclNwYWNlXTtcbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlciwgbnVsbCwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChQaWNrZXJUb29sdGlwLCB7XG4gICAgdHJpZ2dlcjogXCJjbGlja1wiLFxuICAgIHN0YXJ0T3Blbjogc3RhcnRPcGVuLFxuICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICBvblZpc2liaWxpdHlDaGFuZ2U6IGZ1bmN0aW9uIG9uVmlzaWJpbGl0eUNoYW5nZSgpIHtcbiAgICAgIHJldHVybiBhZGRQcmVzZXQoY29sb3IpO1xuICAgIH0sXG4gICAgdG9vbHRpcDogUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChUb29sdGlwQ29udGVudCwgbnVsbCwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChQaWNrZXIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29sb3I6IHJlYWxWYWx1ZSA9PT0gJ3RyYW5zcGFyZW50JyA/ICcjMDAwMDAwJyA6IHJlYWxWYWx1ZVxuICAgIH0sIHtcbiAgICAgIG9uQ2hhbmdlOiB1cGRhdGVWYWx1ZSxcbiAgICAgIG9uRm9jdXM6IG9uRm9jdXMsXG4gICAgICBvbkJsdXI6IG9uQmx1clxuICAgIH0pKSwgcHJlc2V0cy5sZW5ndGggPiAwICYmIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU3dhdGNoZXMsIG51bGwsIHByZXNldHMubWFwKGZ1bmN0aW9uIChwcmVzZXQsIGluZGV4KSB7XG4gICAgICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChXaXRoVG9vbHRpcCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XG4gICAgICAsIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxuICAgICAgICBrZXk6IFwiXCIuY29uY2F0KHByZXNldC52YWx1ZSwgXCItXCIpLmNvbmNhdChpbmRleCksXG4gICAgICAgIGhhc0Nocm9tZTogZmFsc2UsXG4gICAgICAgIHRvb2x0aXA6IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTm90ZSwge1xuICAgICAgICAgIG5vdGU6IHByZXNldC5rZXl3b3JkIHx8IHByZXNldC52YWx1ZVxuICAgICAgICB9KVxuICAgICAgfSwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChTd2F0Y2gsIHtcbiAgICAgICAgdmFsdWU6IHByZXNldFtjb2xvclNwYWNlXSxcbiAgICAgICAgYWN0aXZlOiBjb2xvciAmJiBpZChwcmVzZXRbY29sb3JTcGFjZV0pID09PSBpZChjb2xvcltjb2xvclNwYWNlXSksXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgcmV0dXJuIHVwZGF0ZVZhbHVlKHByZXNldC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9KSkpXG4gIH0sIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU3dhdGNoLCB7XG4gICAgdmFsdWU6IHJlYWxWYWx1ZSxcbiAgICBzdHlsZToge1xuICAgICAgbWFyZ2luOiA0XG4gICAgfVxuICB9KSksIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHtcbiAgICBpZDogZ2V0Q29udHJvbElkKG5hbWUpLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgICAgcmV0dXJuIHVwZGF0ZVZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9LFxuICAgIG9uRm9jdXM6IGZ1bmN0aW9uIG9uRm9jdXMoZSkge1xuICAgICAgcmV0dXJuIGUudGFyZ2V0LnNlbGVjdCgpO1xuICAgIH0sXG4gICAgcGxhY2Vob2xkZXI6IFwiQ2hvb3NlIGNvbG9yLi4uXCJcbiAgfSksIHZhbHVlID8gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChUb2dnbGVJY29uLCB7XG4gICAgaWNvbjogXCJtYXJrdXBcIixcbiAgICBvbkNsaWNrOiBjeWNsZUNvbG9yU3BhY2VcbiAgfSkgOiBudWxsKTtcbn07XG5cbmV4cG9ydCB7IENvbG9yQ29udHJvbCwgQ29sb3JDb250cm9sIGFzIGRlZmF1bHQgfTtcbiJdLCJuYW1lcyI6WyJfQ29sb3JQaWNrZXIiLCJfZmFsbGJhY2tDb2xvciIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsInZhbHVlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9zbGljZWRUb0FycmF5IiwiYXJyIiwiaSIsIl9hcnJheVdpdGhIb2xlcyIsIkFycmF5IiwiaXNBcnJheSIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl9pIiwiX3MiLCJfZSIsIl9hcnIiLCJfbiIsIl9kIiwiY2FsbCIsIm5leHQiLCJkb25lIiwicHVzaCIsImxlbmd0aCIsImVyciIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIm8iLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsIm4iLCJ0b1N0cmluZyIsInNsaWNlIiwibmFtZSIsImZyb20iLCJ0ZXN0IiwiX25vbkl0ZXJhYmxlUmVzdCIsIlR5cGVFcnJvciIsImxlbiIsImFycjIiLCJ1IiwiYXNzaWduIiwiZSIsInIiLCJhcmd1bWVudHMiLCJ0IiwiaGFzT3duUHJvcGVydHkiLCJhcHBseSIsInRoaXMiLCJjIiwiYSIsImtleXMiLCJpbmRleE9mIiwidXNlUmVmIiwiY3VycmVudCIsInMiLCJmIiwidiIsIm93bmVyRG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsInNlbGYiLCJkIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaWRlbnRpZmllciIsInRvdWNoZXMiLCJsZWZ0IiwicGFnZVgiLCJwYWdlWE9mZnNldCIsIndpZHRoIiwidG9wIiwicGFnZVkiLCJwYWdlWU9mZnNldCIsImhlaWdodCIsImgiLCJwcmV2ZW50RGVmYXVsdCIsIm0iLCJvbk1vdmUiLCJsIiwib25LZXkiLCJnIiwicCIsImIiLCJfIiwieCIsInVzZU1lbW8iLCJidXR0b25zIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJuYXRpdmVFdmVudCIsImNoYW5nZWRUb3VjaGVzIiwiZm9jdXMiLCJ3aGljaCIsImtleUNvZGUiLCJDIiwiRSIsIkgiLCJ1c2VFZmZlY3QiLCJvblRvdWNoU3RhcnQiLCJvbk1vdXNlRG93biIsImNsYXNzTmFtZSIsInJlZiIsIm9uS2V5RG93biIsInRhYkluZGV4Iiwicm9sZSIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiY29sb3IiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIk1hdGgiLCJwb3ciLCJyb3VuZCIsImdyYWQiLCJ0dXJuIiwicmFkIiwiUEkiLCJzdWJzdHIiLCJwYXJzZUludCIsIk51bWJlciIsIk0iLCJOIiwidyIsInkiLCJxIiwiZmxvb3IiLCJ6IiwiQiIsIm1heCIsIm1pbiIsIksiLCJodWUiLCJvbkNoYW5nZSIsIkwiLCJoc3ZhIiwiQSIsIlMiLCJyZXBsYWNlIiwiVCIsInVzZVN0YXRlIiwidG9Ic3ZhIiwiZXF1YWwiLCJmcm9tSHN2YSIsInVzZUNhbGxiYWNrIiwiUCIsIndpbmRvdyIsInVzZUxheW91dEVmZmVjdCIsIlIiLCJNYXAiLCJWIiwiZG9jdW1lbnQiLCJoYXMiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwic2V0IiwiWCIsInNldEF0dHJpYnV0ZSIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIiQiLCJjb2xvck1vZGVsIiwiZGVmYXVsdENvbG9yIiwiRyIsInRvTG93ZXJDYXNlIiwiUSIsImJhY2tncm91bmRJbWFnZSIsIlUiLCJlZSIsImV4ZWMiLCJnZSIsIkkiLCJjc3NLZXl3b3JkcyIsInJldmVyc2VLZXl3b3JkcyIsIl9PYmplY3Qka2V5cyIsImNvbnZlcnQkMSIsInJnYiIsImNoYW5uZWxzIiwibGFiZWxzIiwiaHNsIiwiaHN2IiwiaHdiIiwiY215ayIsInh5eiIsImxhYiIsImxjaCIsImhleCIsImtleXdvcmQiLCJhbnNpMTYiLCJhbnNpMjU2IiwiaGNnIiwiYXBwbGUiLCJncmF5IiwiY29udmVyc2lvbnMkMiIsIl9pMiIsIl9PYmplY3Qka2V5czIiLCJtb2RlbCIsIkVycm9yIiwiX2NvbnZlcnQkMSRtb2RlbCIsImNvbXBhcmF0aXZlRGlzdGFuY2UiLCJkZWx0YSIsInJkaWYiLCJnZGlmIiwiYmRpZiIsImRpZmYiLCJkaWZmYyIsImsiLCJyZXZlcnNlZCIsImN1cnJlbnRDbG9zZXN0S2V5d29yZCIsImN1cnJlbnRDbG9zZXN0RGlzdGFuY2UiLCJJbmZpbml0eSIsIl9pMyIsIl9PYmplY3Qka2V5czMiLCJkaXN0YW5jZSIsInQyIiwidDMiLCJ2YWwiLCJ0MSIsIl9pNCIsInNtaW4iLCJsbWluIiwiaGkiLCJzbCIsInZtaW4iLCJ3aCIsImJsIiwicmF0aW8iLCJ5MiIsIngyIiwiejIiLCJhdGFuMiIsInNxcnQiLCJociIsImNvcyIsInNpbiIsImFyZ3MiLCJzYXR1cmF0aW9uIiwidW5kZWZpbmVkIiwiX2FyZ3MiLCJhbnNpIiwibXVsdCIsIl9jIiwicmVtIiwic3RyaW5nIiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJtYXRjaCIsImNvbG9yU3RyaW5nIiwic3BsaXQiLCJtYXAiLCJjaGFyIiwiaW50ZWdlciIsImNocm9tYSIsIm1nIiwicHVyZSIsImNvbnZlcnNpb25zJDEiLCJkZXJpdmVCRlMiLCJmcm9tTW9kZWwiLCJncmFwaCIsImJ1aWxkR3JhcGgiLCJtb2RlbHMiLCJfaTUiLCJwYXJlbnQiLCJxdWV1ZSIsInBvcCIsImFkamFjZW50cyIsIl9pNiIsImFkamFjZW50Iiwibm9kZSIsInVuc2hpZnQiLCJsaW5rIiwidG8iLCJ3cmFwQ29udmVyc2lvbiIsInRvTW9kZWwiLCJwYXRoIiwiZm4iLCJjdXIiLCJjb252ZXJzaW9uIiwiY29udmVyc2lvbnMiLCJyb3V0ZSIsInJvdXRlJDEiLCJfaTciLCJjb252ZXJ0IiwiZm9yRWFjaCIsInJvdXRlcyIsIndyYXBSb3VuZGVkIiwid3JhcHBlZEZuIiwiX2xlbjIiLCJfa2V5MiIsImFyZzAiLCJyZXN1bHQiLCJfaTgiLCJyYXciLCJ3cmFwUmF3IiwiX2xlbiIsIl9rZXkiLCJjb2xvckNvbnZlcnQiLCJyb290Iiwibm93XzEiLCJub3ckMSIsIkRhdGUiLCJub3ciLCJyZVdoaXRlc3BhY2UiLCJ0cmltbWVkRW5kSW5kZXgiLCJ0cmltbWVkRW5kSW5kZXgkMSIsImluZGV4IiwiY2hhckF0IiwicmVUcmltU3RhcnQiLCJiYXNlVHJpbSIsImJhc2VUcmltJDEiLCJpc09iamVjdCQyIiwiaXNTeW1ib2wiLCJyZUlzQmFkSGV4IiwicmVJc0JpbmFyeSIsInJlSXNPY3RhbCIsImZyZWVQYXJzZUludCIsInRvTnVtYmVyXzEiLCJ0b051bWJlciQxIiwib3RoZXIiLCJ2YWx1ZU9mIiwiaXNCaW5hcnkiLCJpc09iamVjdCQxIiwidG9OdW1iZXIiLCJuYXRpdmVNYXgiLCJuYXRpdmVNaW4iLCJkZWJvdW5jZV8xIiwiZGVib3VuY2UkMSIsImZ1bmMiLCJ3YWl0Iiwib3B0aW9ucyIsImxhc3RBcmdzIiwibGFzdFRoaXMiLCJtYXhXYWl0IiwidGltZXJJZCIsImxhc3RDYWxsVGltZSIsImxhc3RJbnZva2VUaW1lIiwibGVhZGluZyIsIm1heGluZyIsInRyYWlsaW5nIiwiaW52b2tlRnVuYyIsInRpbWUiLCJ0aGlzQXJnIiwic2hvdWxkSW52b2tlIiwidGltZVNpbmNlTGFzdENhbGwiLCJ0aW1lckV4cGlyZWQiLCJ0cmFpbGluZ0VkZ2UiLCJzZXRUaW1lb3V0IiwicmVtYWluaW5nV2FpdCIsInRpbWVXYWl0aW5nIiwiZGVib3VuY2VkIiwiaXNJbnZva2luZyIsImxlYWRpbmdFZGdlIiwiY2xlYXJUaW1lb3V0IiwiY2FuY2VsIiwiZmx1c2giLCJkZWJvdW5jZSIsImlzT2JqZWN0IiwiQ29sb3JTcGFjZSIsInRocm90dGxlXzEiLCJ0aHJvdHRsZSIsIldyYXBwZXIiLCJkaXYiLCJwb3NpdGlvbiIsIm1heFdpZHRoIiwiUGlja2VyVG9vbHRpcCIsIlciLCJ6SW5kZXgiLCJUb29sdGlwQ29udGVudCIsIm1hcmdpbiIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIk5vdGUiLCJfcmVmIiwiZm9udEZhbWlseSIsInRoZW1lIiwidHlwb2dyYXBoeSIsImZvbnRzIiwiYmFzZSIsIlN3YXRjaGVzIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJnYXAiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiU3dhdGNoQ29sb3IiLCJfcmVmMiIsImFjdGl2ZSIsImNvbmNhdCIsImFwcEJvcmRlckNvbG9yIiwibWVkaXVtZGFyayIsImFwcEJvcmRlclJhZGl1cyIsIlN3YXRjaCIsIl9hIiwib25DbGljayIsInByb3BzIiwiSW5wdXQiLCJGIiwiX3JlZjMiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImJveFNpemluZyIsIlRvZ2dsZUljb24iLCJfcmVmNCIsInJpZ2h0IiwiY3Vyc29yIiwiaW5wdXQiLCJDT0xPUl9TUEFDRVMiLCJ2YWx1ZXMiLCJDT0xPUl9SRUdFWFAiLCJSR0JfUkVHRVhQIiwiSFNMX1JFR0VYUCIsIkhFWF9SRUdFWFAiLCJTSE9SVEhFWF9SRUdFWFAiLCJDb2xvclBpY2tlciIsIkhFWCIsIkoiLCJSR0IiLCJwZSIsIkhTTCIsInJlIiwiZmFsbGJhY2tDb2xvciIsInN0cmluZ1RvQXJncyIsIl9tYXRjaCIsIl9tYXRjaCQiLCJwYXJzZVZhbHVlIiwiX3JlZjExIiwidmFsaWQiLCJfcmVmNyIsIl9zdHJpbmdUb0FyZ3MyIiwiX2ciLCJfYiIsIl9yZWY2IiwiX2giLCJfczIiLCJjb2xvclNwYWNlIiwiX3JlZjEwIiwiX3N0cmluZ1RvQXJnczQiLCJfaDIiLCJfczMiLCJfbCIsIl9hMiIsIl9yZWY5IiwiX3IiLCJfZzIiLCJfYjIiLCJwbGFpbiIsIm1hcHBlZCIsInN0YXJ0c1dpdGgiLCJ1c2VDb2xvcklucHV0IiwiaW5pdGlhbFZhbHVlIiwiX3VzZVN0YXRlMiIsInNldFZhbHVlIiwiX3VzZVN0YXRlNCIsInNldENvbG9yIiwiX3VzZVN0YXRlNiIsInNldENvbG9yU3BhY2UiLCJyZWFsVmFsdWUiLCJnZXRSZWFsVmFsdWUiLCJzaG9ydCIsIl9zaG9ydCQxJHNwbGl0MiIsInVwZGF0ZVZhbHVlIiwidXBkYXRlIiwicGFyc2VkIiwiY3ljbGVDb2xvclNwYWNlIiwiaWQiLCJDb2xvckNvbnRyb2wiLCJfcmVmMTIiLCJvbkZvY3VzIiwib25CbHVyIiwicHJlc2V0Q29sb3JzIiwic3RhcnRPcGVuIiwiX3VzZUNvbG9ySW5wdXQiLCJfdXNlUHJlc2V0cyIsInVzZVByZXNldHMiLCJjdXJyZW50Q29sb3IiLCJfdXNlU3RhdGU4Iiwic2VsZWN0ZWRDb2xvcnMiLCJzZXRTZWxlY3RlZENvbG9ycyIsInByZXNldHMiLCJwcmVzZXQiLCJ0aXRsZSIsImFkZFByZXNldCIsInNvbWUiLCJQaWNrZXIiLCJ0cmlnZ2VyIiwiY2xvc2VPbkNsaWNrIiwib25WaXNpYmlsaXR5Q2hhbmdlIiwidG9vbHRpcCIsImhhc0Nocm9tZSIsIm5vdGUiLCJ0YXJnZXQiLCJzZWxlY3QiLCJwbGFjZWhvbGRlciIsImljb24iXSwic291cmNlUm9vdCI6IiJ9
