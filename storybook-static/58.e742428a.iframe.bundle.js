'use strict'
;(self.webpackChunkreact_big_calendar =
  self.webpackChunkreact_big_calendar || []).push([
  [58],
  {
    './node_modules/@storybook/components/dist/esm/WithTooltip-167e9982.js':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            WithToolTipState: function () {
              return WithToolTipState
            },
            WithTooltip: function () {
              return WithToolTipState
            },
            WithTooltipPure: function () {
              return WithTooltipPure
            },
          })
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.description.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.object.freeze.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.object.to-string.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.regexp.to-string.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/web.dom-collections.for-each.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.object.keys.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.object.assign.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.regexp.exec.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.split.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.filter.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.function.name.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.join.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.concat.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.replace.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.sort.js'
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
            './node_modules/core-js/modules/es.array.find.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.slice.js'
          ),
          __webpack_require__('./node_modules/core-js/modules/es.set.js'),
          __webpack_require__('./node_modules/core-js/modules/es.promise.js'),
          __webpack_require__('./node_modules/core-js/modules/es.array.map.js'),
          __webpack_require__(
            './node_modules/core-js/modules/es.array-buffer.constructor.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.regexp.constructor.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.regexp.flags.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.match.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.includes.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.includes.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.starts-with.js'
          ),
          __webpack_require__('./node_modules/core-js/modules/es.array.from.js')
        var _templateObject,
          _templateObject2,
          _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__ =
            __webpack_require__(
              './node_modules/@storybook/components/dist/esm/index-681e4b07.js'
            ),
          react__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
            './node_modules/react/index.js'
          ),
          _storybook_theming__WEBPACK_IMPORTED_MODULE_39__ =
            __webpack_require__(
              './node_modules/@storybook/theming/dist/esm/index.js'
            ),
          react_dom__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
            './node_modules/react-dom/index.js'
          ),
          memoizerific__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
            './node_modules/memoizerific/memoizerific.js'
          ),
          memoizerific__WEBPACK_IMPORTED_MODULE_36___default =
            __webpack_require__.n(memoizerific__WEBPACK_IMPORTED_MODULE_36__)
        __webpack_require__('./node_modules/@storybook/csf/dist/index.js')
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
        function _taggedTemplateLiteral(strings, raw) {
          return (
            raw || (raw = strings.slice(0)),
            Object.freeze(
              Object.defineProperties(strings, {
                raw: { value: Object.freeze(raw) },
              })
            )
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
        function getNodeName(element) {
          return element ? (element.nodeName || '').toLowerCase() : null
        }
        function getWindow(node) {
          if (null == node) return window
          if ('[object Window]' !== node.toString()) {
            var ownerDocument = node.ownerDocument
            return (ownerDocument && ownerDocument.defaultView) || window
          }
          return node
        }
        function isElement(node) {
          return (
            node instanceof getWindow(node).Element || node instanceof Element
          )
        }
        function isHTMLElement(node) {
          return (
            node instanceof getWindow(node).HTMLElement ||
            node instanceof HTMLElement
          )
        }
        function isShadowRoot(node) {
          return (
            'undefined' != typeof ShadowRoot &&
            (node instanceof getWindow(node).ShadowRoot ||
              node instanceof ShadowRoot)
          )
        }
        var applyStyles$1 = {
          name: 'applyStyles',
          enabled: !0,
          phase: 'write',
          fn: function applyStyles(_ref) {
            var state = _ref.state
            Object.keys(state.elements).forEach(function (name) {
              var style = state.styles[name] || {},
                attributes = state.attributes[name] || {},
                element = state.elements[name]
              isHTMLElement(element) &&
                getNodeName(element) &&
                (Object.assign(element.style, style),
                Object.keys(attributes).forEach(function (name) {
                  var value = attributes[name]
                  !1 === value
                    ? element.removeAttribute(name)
                    : element.setAttribute(name, !0 === value ? '' : value)
                }))
            })
          },
          effect: function effect$2(_ref2) {
            var state = _ref2.state,
              initialStyles = {
                popper: {
                  position: state.options.strategy,
                  left: '0',
                  top: '0',
                  margin: '0',
                },
                arrow: { position: 'absolute' },
                reference: {},
              }
            return (
              Object.assign(state.elements.popper.style, initialStyles.popper),
              (state.styles = initialStyles),
              state.elements.arrow &&
                Object.assign(state.elements.arrow.style, initialStyles.arrow),
              function () {
                Object.keys(state.elements).forEach(function (name) {
                  var element = state.elements[name],
                    attributes = state.attributes[name] || {},
                    style = Object.keys(
                      state.styles.hasOwnProperty(name)
                        ? state.styles[name]
                        : initialStyles[name]
                    ).reduce(function (style, property) {
                      return (style[property] = ''), style
                    }, {})
                  isHTMLElement(element) &&
                    getNodeName(element) &&
                    (Object.assign(element.style, style),
                    Object.keys(attributes).forEach(function (attribute) {
                      element.removeAttribute(attribute)
                    }))
                })
              }
            )
          },
          requires: ['computeStyles'],
        }
        function getBasePlacement(placement) {
          return placement.split('-')[0]
        }
        var max = Math.max,
          min = Math.min,
          round = Math.round
        function getBoundingClientRect(element, includeScale) {
          void 0 === includeScale && (includeScale = !1)
          var rect = element.getBoundingClientRect(),
            scaleX = 1,
            scaleY = 1
          if (isHTMLElement(element) && includeScale) {
            var offsetHeight = element.offsetHeight,
              offsetWidth = element.offsetWidth
            offsetWidth > 0 && (scaleX = round(rect.width) / offsetWidth || 1),
              offsetHeight > 0 &&
                (scaleY = round(rect.height) / offsetHeight || 1)
          }
          return {
            width: rect.width / scaleX,
            height: rect.height / scaleY,
            top: rect.top / scaleY,
            right: rect.right / scaleX,
            bottom: rect.bottom / scaleY,
            left: rect.left / scaleX,
            x: rect.left / scaleX,
            y: rect.top / scaleY,
          }
        }
        function getLayoutRect(element) {
          var clientRect = getBoundingClientRect(element),
            width = element.offsetWidth,
            height = element.offsetHeight
          return (
            Math.abs(clientRect.width - width) <= 1 &&
              (width = clientRect.width),
            Math.abs(clientRect.height - height) <= 1 &&
              (height = clientRect.height),
            {
              x: element.offsetLeft,
              y: element.offsetTop,
              width: width,
              height: height,
            }
          )
        }
        function contains(parent, child) {
          var rootNode = child.getRootNode && child.getRootNode()
          if (parent.contains(child)) return !0
          if (rootNode && isShadowRoot(rootNode)) {
            var next = child
            do {
              if (next && parent.isSameNode(next)) return !0
              next = next.parentNode || next.host
            } while (next)
          }
          return !1
        }
        function getComputedStyle(element) {
          return getWindow(element).getComputedStyle(element)
        }
        function isTableElement(element) {
          return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0
        }
        function getDocumentElement(element) {
          return (
            (isElement(element) ? element.ownerDocument : element.document) ||
            window.document
          ).documentElement
        }
        function getParentNode(element) {
          return 'html' === getNodeName(element)
            ? element
            : element.assignedSlot ||
                element.parentNode ||
                (isShadowRoot(element) ? element.host : null) ||
                getDocumentElement(element)
        }
        function getTrueOffsetParent(element) {
          return isHTMLElement(element) &&
            'fixed' !== getComputedStyle(element).position
            ? element.offsetParent
            : null
        }
        function getOffsetParent(element) {
          for (
            var window = getWindow(element),
              offsetParent = getTrueOffsetParent(element);
            offsetParent &&
            isTableElement(offsetParent) &&
            'static' === getComputedStyle(offsetParent).position;

          )
            offsetParent = getTrueOffsetParent(offsetParent)
          return offsetParent &&
            ('html' === getNodeName(offsetParent) ||
              ('body' === getNodeName(offsetParent) &&
                'static' === getComputedStyle(offsetParent).position))
            ? window
            : offsetParent ||
                (function getContainingBlock(element) {
                  var isFirefox =
                    -1 !== navigator.userAgent.toLowerCase().indexOf('firefox')
                  if (
                    -1 !== navigator.userAgent.indexOf('Trident') &&
                    isHTMLElement(element) &&
                    'fixed' === getComputedStyle(element).position
                  )
                    return null
                  for (
                    var currentNode = getParentNode(element);
                    isHTMLElement(currentNode) &&
                    ['html', 'body'].indexOf(getNodeName(currentNode)) < 0;

                  ) {
                    var css = getComputedStyle(currentNode)
                    if (
                      'none' !== css.transform ||
                      'none' !== css.perspective ||
                      'paint' === css.contain ||
                      -1 !==
                        ['transform', 'perspective'].indexOf(css.willChange) ||
                      (isFirefox && 'filter' === css.willChange) ||
                      (isFirefox && css.filter && 'none' !== css.filter)
                    )
                      return currentNode
                    currentNode = currentNode.parentNode
                  }
                  return null
                })(element) ||
                window
        }
        function getMainAxisFromPlacement(placement) {
          return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y'
        }
        function within(min$1, value, max$1) {
          return max(min$1, min(value, max$1))
        }
        function mergePaddingObject(paddingObject) {
          return Object.assign(
            {},
            { top: 0, right: 0, bottom: 0, left: 0 },
            paddingObject
          )
        }
        function expandToHashMap(value, keys) {
          return keys.reduce(function (hashMap, key) {
            return (hashMap[key] = value), hashMap
          }, {})
        }
        var arrow$1 = {
          name: 'arrow',
          enabled: !0,
          phase: 'main',
          fn: function arrow(_ref) {
            var _state$modifiersData$,
              state = _ref.state,
              name = _ref.name,
              options = _ref.options,
              arrowElement = state.elements.arrow,
              popperOffsets = state.modifiersData.popperOffsets,
              basePlacement = getBasePlacement(state.placement),
              axis = getMainAxisFromPlacement(basePlacement),
              len =
                [
                  _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.l,
                  _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.r,
                ].indexOf(basePlacement) >= 0
                  ? 'height'
                  : 'width'
            if (arrowElement && popperOffsets) {
              var paddingObject = (function toPaddingObject(padding, state) {
                  return mergePaddingObject(
                    'number' !=
                      typeof (padding =
                        'function' == typeof padding
                          ? padding(
                              Object.assign({}, state.rects, {
                                placement: state.placement,
                              })
                            )
                          : padding)
                      ? padding
                      : expandToHashMap(
                          padding,
                          _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.f
                        )
                  )
                })(options.padding, state),
                arrowRect = getLayoutRect(arrowElement),
                minProp =
                  'y' === axis
                    ? _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.t
                    : _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.l,
                maxProp =
                  'y' === axis
                    ? _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.h
                    : _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.r,
                endDiff =
                  state.rects.reference[len] +
                  state.rects.reference[axis] -
                  popperOffsets[axis] -
                  state.rects.popper[len],
                startDiff = popperOffsets[axis] - state.rects.reference[axis],
                arrowOffsetParent = getOffsetParent(arrowElement),
                clientSize = arrowOffsetParent
                  ? 'y' === axis
                    ? arrowOffsetParent.clientHeight || 0
                    : arrowOffsetParent.clientWidth || 0
                  : 0,
                centerToReference = endDiff / 2 - startDiff / 2,
                min = paddingObject[minProp],
                max = clientSize - arrowRect[len] - paddingObject[maxProp],
                center =
                  clientSize / 2 - arrowRect[len] / 2 + centerToReference,
                offset = within(min, center, max),
                axisProp = axis
              state.modifiersData[name] =
                (((_state$modifiersData$ = {})[axisProp] = offset),
                (_state$modifiersData$.centerOffset = offset - center),
                _state$modifiersData$)
            }
          },
          effect: function effect$1(_ref2) {
            var state = _ref2.state,
              _options$element = _ref2.options.element,
              arrowElement =
                void 0 === _options$element
                  ? '[data-popper-arrow]'
                  : _options$element
            null != arrowElement &&
              ('string' != typeof arrowElement ||
                (arrowElement =
                  state.elements.popper.querySelector(arrowElement))) &&
              contains(state.elements.popper, arrowElement) &&
              (state.elements.arrow = arrowElement)
          },
          requires: ['popperOffsets'],
          requiresIfExists: ['preventOverflow'],
        }
        function getVariation(placement) {
          return placement.split('-')[1]
        }
        var unsetSides = {
          top: 'auto',
          right: 'auto',
          bottom: 'auto',
          left: 'auto',
        }
        function mapToStyles(_ref2) {
          var _Object$assign2,
            popper = _ref2.popper,
            popperRect = _ref2.popperRect,
            placement = _ref2.placement,
            variation = _ref2.variation,
            offsets = _ref2.offsets,
            position = _ref2.position,
            gpuAcceleration = _ref2.gpuAcceleration,
            adaptive = _ref2.adaptive,
            roundOffsets = _ref2.roundOffsets,
            isFixed = _ref2.isFixed,
            _offsets$x = offsets.x,
            x = void 0 === _offsets$x ? 0 : _offsets$x,
            _offsets$y = offsets.y,
            y = void 0 === _offsets$y ? 0 : _offsets$y,
            _ref3 =
              'function' == typeof roundOffsets
                ? roundOffsets({ x: x, y: y })
                : { x: x, y: y }
          ;(x = _ref3.x), (y = _ref3.y)
          var hasX = offsets.hasOwnProperty('x'),
            hasY = offsets.hasOwnProperty('y'),
            sideX = _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.l,
            sideY = _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.t,
            win = window
          if (adaptive) {
            var offsetParent = getOffsetParent(popper),
              heightProp = 'clientHeight',
              widthProp = 'clientWidth'
            if (
              (offsetParent === getWindow(popper) &&
                'static' !==
                  getComputedStyle((offsetParent = getDocumentElement(popper)))
                    .position &&
                'absolute' === position &&
                ((heightProp = 'scrollHeight'), (widthProp = 'scrollWidth')),
              placement ===
                _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.t ||
                ((placement ===
                  _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.l ||
                  placement ===
                    _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.r) &&
                  variation ===
                    _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.i))
            )
              (sideY = _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.h),
                (y -=
                  (isFixed && win.visualViewport
                    ? win.visualViewport.height
                    : offsetParent[heightProp]) - popperRect.height),
                (y *= gpuAcceleration ? 1 : -1)
            if (
              placement ===
                _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.l ||
              ((placement ===
                _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.t ||
                placement ===
                  _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.h) &&
                variation ===
                  _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.i)
            )
              (sideX = _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.r),
                (x -=
                  (isFixed && win.visualViewport
                    ? win.visualViewport.width
                    : offsetParent[widthProp]) - popperRect.width),
                (x *= gpuAcceleration ? 1 : -1)
          }
          var _Object$assign,
            commonStyles = Object.assign(
              { position: position },
              adaptive && unsetSides
            ),
            _ref4 =
              !0 === roundOffsets
                ? (function roundOffsetsByDPR(_ref) {
                    var x = _ref.x,
                      y = _ref.y,
                      dpr = window.devicePixelRatio || 1
                    return {
                      x: round(x * dpr) / dpr || 0,
                      y: round(y * dpr) / dpr || 0,
                    }
                  })({ x: x, y: y })
                : { x: x, y: y }
          return (
            (x = _ref4.x),
            (y = _ref4.y),
            gpuAcceleration
              ? Object.assign(
                  {},
                  commonStyles,
                  (((_Object$assign = {})[sideY] = hasY ? '0' : ''),
                  (_Object$assign[sideX] = hasX ? '0' : ''),
                  (_Object$assign.transform =
                    (win.devicePixelRatio || 1) <= 1
                      ? 'translate(' + x + 'px, ' + y + 'px)'
                      : 'translate3d(' + x + 'px, ' + y + 'px, 0)'),
                  _Object$assign)
                )
              : Object.assign(
                  {},
                  commonStyles,
                  (((_Object$assign2 = {})[sideY] = hasY ? y + 'px' : ''),
                  (_Object$assign2[sideX] = hasX ? x + 'px' : ''),
                  (_Object$assign2.transform = ''),
                  _Object$assign2)
                )
          )
        }
        var passive = { passive: !0 }
        var hash$1 = {
          left: 'right',
          right: 'left',
          bottom: 'top',
          top: 'bottom',
        }
        function getOppositePlacement(placement) {
          return placement.replace(
            /left|right|bottom|top/g,
            function (matched) {
              return hash$1[matched]
            }
          )
        }
        var hash = { start: 'end', end: 'start' }
        function getOppositeVariationPlacement(placement) {
          return placement.replace(/start|end/g, function (matched) {
            return hash[matched]
          })
        }
        function getWindowScroll(node) {
          var win = getWindow(node)
          return { scrollLeft: win.pageXOffset, scrollTop: win.pageYOffset }
        }
        function getWindowScrollBarX(element) {
          return (
            getBoundingClientRect(getDocumentElement(element)).left +
            getWindowScroll(element).scrollLeft
          )
        }
        function isScrollParent(element) {
          var _getComputedStyle = getComputedStyle(element),
            overflow = _getComputedStyle.overflow,
            overflowX = _getComputedStyle.overflowX,
            overflowY = _getComputedStyle.overflowY
          return /auto|scroll|overlay|hidden/.test(
            overflow + overflowY + overflowX
          )
        }
        function getScrollParent(node) {
          return ['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0
            ? node.ownerDocument.body
            : isHTMLElement(node) && isScrollParent(node)
            ? node
            : getScrollParent(getParentNode(node))
        }
        function listScrollParents(element, list) {
          var _element$ownerDocumen
          void 0 === list && (list = [])
          var scrollParent = getScrollParent(element),
            isBody =
              scrollParent ===
              (null == (_element$ownerDocumen = element.ownerDocument)
                ? void 0
                : _element$ownerDocumen.body),
            win = getWindow(scrollParent),
            target = isBody
              ? [win].concat(
                  win.visualViewport || [],
                  isScrollParent(scrollParent) ? scrollParent : []
                )
              : scrollParent,
            updatedList = list.concat(target)
          return isBody
            ? updatedList
            : updatedList.concat(listScrollParents(getParentNode(target)))
        }
        function rectToClientRect(rect) {
          return Object.assign({}, rect, {
            left: rect.x,
            top: rect.y,
            right: rect.x + rect.width,
            bottom: rect.y + rect.height,
          })
        }
        function getClientRectFromMixedType(element, clippingParent) {
          return clippingParent ===
            _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.v
            ? rectToClientRect(
                (function getViewportRect(element) {
                  var win = getWindow(element),
                    html = getDocumentElement(element),
                    visualViewport = win.visualViewport,
                    width = html.clientWidth,
                    height = html.clientHeight,
                    x = 0,
                    y = 0
                  return (
                    visualViewport &&
                      ((width = visualViewport.width),
                      (height = visualViewport.height),
                      /^((?!chrome|android).)*safari/i.test(
                        navigator.userAgent
                      ) ||
                        ((x = visualViewport.offsetLeft),
                        (y = visualViewport.offsetTop))),
                    {
                      width: width,
                      height: height,
                      x: x + getWindowScrollBarX(element),
                      y: y,
                    }
                  )
                })(element)
              )
            : isElement(clippingParent)
            ? (function getInnerBoundingClientRect(element) {
                var rect = getBoundingClientRect(element)
                return (
                  (rect.top = rect.top + element.clientTop),
                  (rect.left = rect.left + element.clientLeft),
                  (rect.bottom = rect.top + element.clientHeight),
                  (rect.right = rect.left + element.clientWidth),
                  (rect.width = element.clientWidth),
                  (rect.height = element.clientHeight),
                  (rect.x = rect.left),
                  (rect.y = rect.top),
                  rect
                )
              })(clippingParent)
            : rectToClientRect(
                (function getDocumentRect(element) {
                  var _element$ownerDocumen,
                    html = getDocumentElement(element),
                    winScroll = getWindowScroll(element),
                    body =
                      null == (_element$ownerDocumen = element.ownerDocument)
                        ? void 0
                        : _element$ownerDocumen.body,
                    width = max(
                      html.scrollWidth,
                      html.clientWidth,
                      body ? body.scrollWidth : 0,
                      body ? body.clientWidth : 0
                    ),
                    height = max(
                      html.scrollHeight,
                      html.clientHeight,
                      body ? body.scrollHeight : 0,
                      body ? body.clientHeight : 0
                    ),
                    x = -winScroll.scrollLeft + getWindowScrollBarX(element),
                    y = -winScroll.scrollTop
                  return (
                    'rtl' === getComputedStyle(body || html).direction &&
                      (x +=
                        max(html.clientWidth, body ? body.clientWidth : 0) -
                        width),
                    { width: width, height: height, x: x, y: y }
                  )
                })(getDocumentElement(element))
              )
        }
        function getClippingRect(element, boundary, rootBoundary) {
          var mainClippingParents =
              'clippingParents' === boundary
                ? (function getClippingParents(element) {
                    var clippingParents = listScrollParents(
                        getParentNode(element)
                      ),
                      clipperElement =
                        ['absolute', 'fixed'].indexOf(
                          getComputedStyle(element).position
                        ) >= 0 && isHTMLElement(element)
                          ? getOffsetParent(element)
                          : element
                    return isElement(clipperElement)
                      ? clippingParents.filter(function (clippingParent) {
                          return (
                            isElement(clippingParent) &&
                            contains(clippingParent, clipperElement) &&
                            'body' !== getNodeName(clippingParent)
                          )
                        })
                      : []
                  })(element)
                : [].concat(boundary),
            clippingParents = [].concat(mainClippingParents, [rootBoundary]),
            firstClippingParent = clippingParents[0],
            clippingRect = clippingParents.reduce(function (
              accRect,
              clippingParent
            ) {
              var rect = getClientRectFromMixedType(element, clippingParent)
              return (
                (accRect.top = max(rect.top, accRect.top)),
                (accRect.right = min(rect.right, accRect.right)),
                (accRect.bottom = min(rect.bottom, accRect.bottom)),
                (accRect.left = max(rect.left, accRect.left)),
                accRect
              )
            },
            getClientRectFromMixedType(element, firstClippingParent))
          return (
            (clippingRect.width = clippingRect.right - clippingRect.left),
            (clippingRect.height = clippingRect.bottom - clippingRect.top),
            (clippingRect.x = clippingRect.left),
            (clippingRect.y = clippingRect.top),
            clippingRect
          )
        }
        function computeOffsets(_ref) {
          var offsets,
            reference = _ref.reference,
            element = _ref.element,
            placement = _ref.placement,
            basePlacement = placement ? getBasePlacement(placement) : null,
            variation = placement ? getVariation(placement) : null,
            commonX = reference.x + reference.width / 2 - element.width / 2,
            commonY = reference.y + reference.height / 2 - element.height / 2
          switch (basePlacement) {
            case _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.t:
              offsets = { x: commonX, y: reference.y - element.height }
              break
            case _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.h:
              offsets = { x: commonX, y: reference.y + reference.height }
              break
            case _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.r:
              offsets = { x: reference.x + reference.width, y: commonY }
              break
            case _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.l:
              offsets = { x: reference.x - element.width, y: commonY }
              break
            default:
              offsets = { x: reference.x, y: reference.y }
          }
          var mainAxis = basePlacement
            ? getMainAxisFromPlacement(basePlacement)
            : null
          if (null != mainAxis) {
            var len = 'y' === mainAxis ? 'height' : 'width'
            switch (variation) {
              case _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.s:
                offsets[mainAxis] =
                  offsets[mainAxis] - (reference[len] / 2 - element[len] / 2)
                break
              case _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.i:
                offsets[mainAxis] =
                  offsets[mainAxis] + (reference[len] / 2 - element[len] / 2)
            }
          }
          return offsets
        }
        function detectOverflow(state, options) {
          void 0 === options && (options = {})
          var _options = options,
            _options$placement = _options.placement,
            placement =
              void 0 === _options$placement
                ? state.placement
                : _options$placement,
            _options$boundary = _options.boundary,
            boundary =
              void 0 === _options$boundary
                ? _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.j
                : _options$boundary,
            _options$rootBoundary = _options.rootBoundary,
            rootBoundary =
              void 0 === _options$rootBoundary
                ? _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.v
                : _options$rootBoundary,
            _options$elementConte = _options.elementContext,
            elementContext =
              void 0 === _options$elementConte
                ? _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.p
                : _options$elementConte,
            _options$altBoundary = _options.altBoundary,
            altBoundary =
              void 0 !== _options$altBoundary && _options$altBoundary,
            _options$padding = _options.padding,
            padding = void 0 === _options$padding ? 0 : _options$padding,
            paddingObject = mergePaddingObject(
              'number' != typeof padding
                ? padding
                : expandToHashMap(
                    padding,
                    _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.f
                  )
            ),
            altContext =
              elementContext ===
              _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.p
                ? _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.k
                : _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.p,
            popperRect = state.rects.popper,
            element = state.elements[altBoundary ? altContext : elementContext],
            clippingClientRect = getClippingRect(
              isElement(element)
                ? element
                : element.contextElement ||
                    getDocumentElement(state.elements.popper),
              boundary,
              rootBoundary
            ),
            referenceClientRect = getBoundingClientRect(
              state.elements.reference
            ),
            popperOffsets = computeOffsets({
              reference: referenceClientRect,
              element: popperRect,
              strategy: 'absolute',
              placement: placement,
            }),
            popperClientRect = rectToClientRect(
              Object.assign({}, popperRect, popperOffsets)
            ),
            elementClientRect =
              elementContext ===
              _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.p
                ? popperClientRect
                : referenceClientRect,
            overflowOffsets = {
              top:
                clippingClientRect.top -
                elementClientRect.top +
                paddingObject.top,
              bottom:
                elementClientRect.bottom -
                clippingClientRect.bottom +
                paddingObject.bottom,
              left:
                clippingClientRect.left -
                elementClientRect.left +
                paddingObject.left,
              right:
                elementClientRect.right -
                clippingClientRect.right +
                paddingObject.right,
            },
            offsetData = state.modifiersData.offset
          if (
            elementContext ===
              _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.p &&
            offsetData
          ) {
            var offset = offsetData[placement]
            Object.keys(overflowOffsets).forEach(function (key) {
              var multiply =
                  [
                    _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.r,
                    _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.h,
                  ].indexOf(key) >= 0
                    ? 1
                    : -1,
                axis =
                  [
                    _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.t,
                    _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.h,
                  ].indexOf(key) >= 0
                    ? 'y'
                    : 'x'
              overflowOffsets[key] += offset[axis] * multiply
            })
          }
          return overflowOffsets
        }
        function getSideOffsets(overflow, rect, preventedOffsets) {
          return (
            void 0 === preventedOffsets && (preventedOffsets = { x: 0, y: 0 }),
            {
              top: overflow.top - rect.height - preventedOffsets.y,
              right: overflow.right - rect.width + preventedOffsets.x,
              bottom: overflow.bottom - rect.height + preventedOffsets.y,
              left: overflow.left - rect.width - preventedOffsets.x,
            }
          )
        }
        function isAnySideFullyClipped(overflow) {
          return [
            _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.t,
            _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.r,
            _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.h,
            _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.l,
          ].some(function (side) {
            return overflow[side] >= 0
          })
        }
        var offset$1 = {
          name: 'offset',
          enabled: !0,
          phase: 'main',
          requires: ['popperOffsets'],
          fn: function offset(_ref2) {
            var state = _ref2.state,
              options = _ref2.options,
              name = _ref2.name,
              _options$offset = options.offset,
              offset = void 0 === _options$offset ? [0, 0] : _options$offset,
              data = _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.n.reduce(
                function (acc, placement) {
                  return (
                    (acc[placement] = (function distanceAndSkiddingToXY(
                      placement,
                      rects,
                      offset
                    ) {
                      var basePlacement = getBasePlacement(placement),
                        invertDistance =
                          [
                            _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.l,
                            _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.t,
                          ].indexOf(basePlacement) >= 0
                            ? -1
                            : 1,
                        _ref =
                          'function' == typeof offset
                            ? offset(
                                Object.assign({}, rects, {
                                  placement: placement,
                                })
                              )
                            : offset,
                        skidding = _ref[0],
                        distance = _ref[1]
                      return (
                        (skidding = skidding || 0),
                        (distance = (distance || 0) * invertDistance),
                        [
                          _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.l,
                          _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.r,
                        ].indexOf(basePlacement) >= 0
                          ? { x: distance, y: skidding }
                          : { x: skidding, y: distance }
                      )
                    })(placement, state.rects, offset)),
                    acc
                  )
                },
                {}
              ),
              _data$state$placement = data[state.placement],
              x = _data$state$placement.x,
              y = _data$state$placement.y
            null != state.modifiersData.popperOffsets &&
              ((state.modifiersData.popperOffsets.x += x),
              (state.modifiersData.popperOffsets.y += y)),
              (state.modifiersData[name] = data)
          },
        }
        var preventOverflow$1 = {
          name: 'preventOverflow',
          enabled: !0,
          phase: 'main',
          fn: function preventOverflow(_ref) {
            var state = _ref.state,
              options = _ref.options,
              name = _ref.name,
              _options$mainAxis = options.mainAxis,
              checkMainAxis = void 0 === _options$mainAxis || _options$mainAxis,
              _options$altAxis = options.altAxis,
              checkAltAxis = void 0 !== _options$altAxis && _options$altAxis,
              boundary = options.boundary,
              rootBoundary = options.rootBoundary,
              altBoundary = options.altBoundary,
              padding = options.padding,
              _options$tether = options.tether,
              tether = void 0 === _options$tether || _options$tether,
              _options$tetherOffset = options.tetherOffset,
              tetherOffset =
                void 0 === _options$tetherOffset ? 0 : _options$tetherOffset,
              overflow = detectOverflow(state, {
                boundary: boundary,
                rootBoundary: rootBoundary,
                padding: padding,
                altBoundary: altBoundary,
              }),
              basePlacement = getBasePlacement(state.placement),
              variation = getVariation(state.placement),
              isBasePlacement = !variation,
              mainAxis = getMainAxisFromPlacement(basePlacement),
              altAxis = (function getAltAxis(axis) {
                return 'x' === axis ? 'y' : 'x'
              })(mainAxis),
              popperOffsets = state.modifiersData.popperOffsets,
              referenceRect = state.rects.reference,
              popperRect = state.rects.popper,
              tetherOffsetValue =
                'function' == typeof tetherOffset
                  ? tetherOffset(
                      Object.assign({}, state.rects, {
                        placement: state.placement,
                      })
                    )
                  : tetherOffset,
              normalizedTetherOffsetValue =
                'number' == typeof tetherOffsetValue
                  ? { mainAxis: tetherOffsetValue, altAxis: tetherOffsetValue }
                  : Object.assign(
                      { mainAxis: 0, altAxis: 0 },
                      tetherOffsetValue
                    ),
              offsetModifierState = state.modifiersData.offset
                ? state.modifiersData.offset[state.placement]
                : null,
              data = { x: 0, y: 0 }
            if (popperOffsets) {
              if (checkMainAxis) {
                var _offsetModifierState$,
                  mainSide =
                    'y' === mainAxis
                      ? _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.t
                      : _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.l,
                  altSide =
                    'y' === mainAxis
                      ? _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.h
                      : _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.r,
                  len = 'y' === mainAxis ? 'height' : 'width',
                  offset = popperOffsets[mainAxis],
                  min$1 = offset + overflow[mainSide],
                  max$1 = offset - overflow[altSide],
                  additive = tether ? -popperRect[len] / 2 : 0,
                  minLen =
                    variation ===
                    _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.s
                      ? referenceRect[len]
                      : popperRect[len],
                  maxLen =
                    variation ===
                    _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.s
                      ? -popperRect[len]
                      : -referenceRect[len],
                  arrowElement = state.elements.arrow,
                  arrowRect =
                    tether && arrowElement
                      ? getLayoutRect(arrowElement)
                      : { width: 0, height: 0 },
                  arrowPaddingObject = state.modifiersData['arrow#persistent']
                    ? state.modifiersData['arrow#persistent'].padding
                    : { top: 0, right: 0, bottom: 0, left: 0 },
                  arrowPaddingMin = arrowPaddingObject[mainSide],
                  arrowPaddingMax = arrowPaddingObject[altSide],
                  arrowLen = within(0, referenceRect[len], arrowRect[len]),
                  minOffset = isBasePlacement
                    ? referenceRect[len] / 2 -
                      additive -
                      arrowLen -
                      arrowPaddingMin -
                      normalizedTetherOffsetValue.mainAxis
                    : minLen -
                      arrowLen -
                      arrowPaddingMin -
                      normalizedTetherOffsetValue.mainAxis,
                  maxOffset = isBasePlacement
                    ? -referenceRect[len] / 2 +
                      additive +
                      arrowLen +
                      arrowPaddingMax +
                      normalizedTetherOffsetValue.mainAxis
                    : maxLen +
                      arrowLen +
                      arrowPaddingMax +
                      normalizedTetherOffsetValue.mainAxis,
                  arrowOffsetParent =
                    state.elements.arrow &&
                    getOffsetParent(state.elements.arrow),
                  clientOffset = arrowOffsetParent
                    ? 'y' === mainAxis
                      ? arrowOffsetParent.clientTop || 0
                      : arrowOffsetParent.clientLeft || 0
                    : 0,
                  offsetModifierValue =
                    null !=
                    (_offsetModifierState$ =
                      null == offsetModifierState
                        ? void 0
                        : offsetModifierState[mainAxis])
                      ? _offsetModifierState$
                      : 0,
                  tetherMax = offset + maxOffset - offsetModifierValue,
                  preventedOffset = within(
                    tether
                      ? min(
                          min$1,
                          offset +
                            minOffset -
                            offsetModifierValue -
                            clientOffset
                        )
                      : min$1,
                    offset,
                    tether ? max(max$1, tetherMax) : max$1
                  )
                ;(popperOffsets[mainAxis] = preventedOffset),
                  (data[mainAxis] = preventedOffset - offset)
              }
              if (checkAltAxis) {
                var _offsetModifierState$2,
                  _mainSide =
                    'x' === mainAxis
                      ? _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.t
                      : _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.l,
                  _altSide =
                    'x' === mainAxis
                      ? _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.h
                      : _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.r,
                  _offset = popperOffsets[altAxis],
                  _len = 'y' === altAxis ? 'height' : 'width',
                  _min = _offset + overflow[_mainSide],
                  _max = _offset - overflow[_altSide],
                  isOriginSide =
                    -1 !==
                    [
                      _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.t,
                      _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.l,
                    ].indexOf(basePlacement),
                  _offsetModifierValue =
                    null !=
                    (_offsetModifierState$2 =
                      null == offsetModifierState
                        ? void 0
                        : offsetModifierState[altAxis])
                      ? _offsetModifierState$2
                      : 0,
                  _tetherMin = isOriginSide
                    ? _min
                    : _offset -
                      referenceRect[_len] -
                      popperRect[_len] -
                      _offsetModifierValue +
                      normalizedTetherOffsetValue.altAxis,
                  _tetherMax = isOriginSide
                    ? _offset +
                      referenceRect[_len] +
                      popperRect[_len] -
                      _offsetModifierValue -
                      normalizedTetherOffsetValue.altAxis
                    : _max,
                  _preventedOffset =
                    tether && isOriginSide
                      ? (function withinMaxClamp(min, value, max) {
                          var v = within(min, value, max)
                          return v > max ? max : v
                        })(_tetherMin, _offset, _tetherMax)
                      : within(
                          tether ? _tetherMin : _min,
                          _offset,
                          tether ? _tetherMax : _max
                        )
                ;(popperOffsets[altAxis] = _preventedOffset),
                  (data[altAxis] = _preventedOffset - _offset)
              }
              state.modifiersData[name] = data
            }
          },
          requiresIfExists: ['offset'],
        }
        function getCompositeRect(
          elementOrVirtualElement,
          offsetParent,
          isFixed
        ) {
          void 0 === isFixed && (isFixed = !1)
          var isOffsetParentAnElement = isHTMLElement(offsetParent),
            offsetParentIsScaled =
              isHTMLElement(offsetParent) &&
              (function isElementScaled(element) {
                var rect = element.getBoundingClientRect(),
                  scaleX = round(rect.width) / element.offsetWidth || 1,
                  scaleY = round(rect.height) / element.offsetHeight || 1
                return 1 !== scaleX || 1 !== scaleY
              })(offsetParent),
            documentElement = getDocumentElement(offsetParent),
            rect = getBoundingClientRect(
              elementOrVirtualElement,
              offsetParentIsScaled
            ),
            scroll = { scrollLeft: 0, scrollTop: 0 },
            offsets = { x: 0, y: 0 }
          return (
            (isOffsetParentAnElement ||
              (!isOffsetParentAnElement && !isFixed)) &&
              (('body' !== getNodeName(offsetParent) ||
                isScrollParent(documentElement)) &&
                (scroll = (function getNodeScroll(node) {
                  return node !== getWindow(node) && isHTMLElement(node)
                    ? (function getHTMLElementScroll(element) {
                        return {
                          scrollLeft: element.scrollLeft,
                          scrollTop: element.scrollTop,
                        }
                      })(node)
                    : getWindowScroll(node)
                })(offsetParent)),
              isHTMLElement(offsetParent)
                ? (((offsets = getBoundingClientRect(offsetParent, !0)).x +=
                    offsetParent.clientLeft),
                  (offsets.y += offsetParent.clientTop))
                : documentElement &&
                  (offsets.x = getWindowScrollBarX(documentElement))),
            {
              x: rect.left + scroll.scrollLeft - offsets.x,
              y: rect.top + scroll.scrollTop - offsets.y,
              width: rect.width,
              height: rect.height,
            }
          )
        }
        function order(modifiers) {
          var map = new Map(),
            visited = new Set(),
            result = []
          function sort(modifier) {
            visited.add(modifier.name),
              []
                .concat(
                  modifier.requires || [],
                  modifier.requiresIfExists || []
                )
                .forEach(function (dep) {
                  if (!visited.has(dep)) {
                    var depModifier = map.get(dep)
                    depModifier && sort(depModifier)
                  }
                }),
              result.push(modifier)
          }
          return (
            modifiers.forEach(function (modifier) {
              map.set(modifier.name, modifier)
            }),
            modifiers.forEach(function (modifier) {
              visited.has(modifier.name) || sort(modifier)
            }),
            result
          )
        }
        var DEFAULT_OPTIONS = {
          placement: 'bottom',
          modifiers: [],
          strategy: 'absolute',
        }
        function areValidElements() {
          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key]
          return !args.some(function (element) {
            return !(
              element && 'function' == typeof element.getBoundingClientRect
            )
          })
        }
        function popperGenerator(generatorOptions) {
          void 0 === generatorOptions && (generatorOptions = {})
          var _generatorOptions = generatorOptions,
            _generatorOptions$def = _generatorOptions.defaultModifiers,
            defaultModifiers =
              void 0 === _generatorOptions$def ? [] : _generatorOptions$def,
            _generatorOptions$def2 = _generatorOptions.defaultOptions,
            defaultOptions =
              void 0 === _generatorOptions$def2
                ? DEFAULT_OPTIONS
                : _generatorOptions$def2
          return function createPopper(reference, popper, options) {
            void 0 === options && (options = defaultOptions)
            var fn,
              pending,
              state = {
                placement: 'bottom',
                orderedModifiers: [],
                options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
                modifiersData: {},
                elements: { reference: reference, popper: popper },
                attributes: {},
                styles: {},
              },
              effectCleanupFns = [],
              isDestroyed = !1,
              instance = {
                state: state,
                setOptions: function setOptions(setOptionsAction) {
                  var options =
                    'function' == typeof setOptionsAction
                      ? setOptionsAction(state.options)
                      : setOptionsAction
                  cleanupModifierEffects(),
                    (state.options = Object.assign(
                      {},
                      defaultOptions,
                      state.options,
                      options
                    )),
                    (state.scrollParents = {
                      reference: isElement(reference)
                        ? listScrollParents(reference)
                        : reference.contextElement
                        ? listScrollParents(reference.contextElement)
                        : [],
                      popper: listScrollParents(popper),
                    })
                  var orderedModifiers = (function orderModifiers(modifiers) {
                    var orderedModifiers = order(modifiers)
                    return _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.q.reduce(
                      function (acc, phase) {
                        return acc.concat(
                          orderedModifiers.filter(function (modifier) {
                            return modifier.phase === phase
                          })
                        )
                      },
                      []
                    )
                  })(
                    (function mergeByName(modifiers) {
                      var merged = modifiers.reduce(function (merged, current) {
                        var existing = merged[current.name]
                        return (
                          (merged[current.name] = existing
                            ? Object.assign({}, existing, current, {
                                options: Object.assign(
                                  {},
                                  existing.options,
                                  current.options
                                ),
                                data: Object.assign(
                                  {},
                                  existing.data,
                                  current.data
                                ),
                              })
                            : current),
                          merged
                        )
                      }, {})
                      return Object.keys(merged).map(function (key) {
                        return merged[key]
                      })
                    })([].concat(defaultModifiers, state.options.modifiers))
                  )
                  return (
                    (state.orderedModifiers = orderedModifiers.filter(function (
                      m
                    ) {
                      return m.enabled
                    })),
                    (function runModifierEffects() {
                      state.orderedModifiers.forEach(function (_ref3) {
                        var name = _ref3.name,
                          _ref3$options = _ref3.options,
                          options =
                            void 0 === _ref3$options ? {} : _ref3$options,
                          effect = _ref3.effect
                        if ('function' == typeof effect) {
                          var cleanupFn = effect({
                              state: state,
                              name: name,
                              instance: instance,
                              options: options,
                            }),
                            noopFn = function noopFn() {}
                          effectCleanupFns.push(cleanupFn || noopFn)
                        }
                      })
                    })(),
                    instance.update()
                  )
                },
                forceUpdate: function forceUpdate() {
                  if (!isDestroyed) {
                    var _state$elements = state.elements,
                      reference = _state$elements.reference,
                      popper = _state$elements.popper
                    if (areValidElements(reference, popper)) {
                      ;(state.rects = {
                        reference: getCompositeRect(
                          reference,
                          getOffsetParent(popper),
                          'fixed' === state.options.strategy
                        ),
                        popper: getLayoutRect(popper),
                      }),
                        (state.reset = !1),
                        (state.placement = state.options.placement),
                        state.orderedModifiers.forEach(function (modifier) {
                          return (state.modifiersData[modifier.name] =
                            Object.assign({}, modifier.data))
                        })
                      for (
                        var index = 0;
                        index < state.orderedModifiers.length;
                        index++
                      )
                        if (!0 !== state.reset) {
                          var _state$orderedModifie =
                              state.orderedModifiers[index],
                            fn = _state$orderedModifie.fn,
                            _state$orderedModifie2 =
                              _state$orderedModifie.options,
                            _options =
                              void 0 === _state$orderedModifie2
                                ? {}
                                : _state$orderedModifie2,
                            name = _state$orderedModifie.name
                          'function' == typeof fn &&
                            (state =
                              fn({
                                state: state,
                                options: _options,
                                name: name,
                                instance: instance,
                              }) || state)
                        } else (state.reset = !1), (index = -1)
                    }
                  }
                },
                update:
                  ((fn = function () {
                    return new Promise(function (resolve) {
                      instance.forceUpdate(), resolve(state)
                    })
                  }),
                  function () {
                    return (
                      pending ||
                        (pending = new Promise(function (resolve) {
                          Promise.resolve().then(function () {
                            ;(pending = void 0), resolve(fn())
                          })
                        })),
                      pending
                    )
                  }),
                destroy: function destroy() {
                  cleanupModifierEffects(), (isDestroyed = !0)
                },
              }
            if (!areValidElements(reference, popper)) return instance
            function cleanupModifierEffects() {
              effectCleanupFns.forEach(function (fn) {
                return fn()
              }),
                (effectCleanupFns = [])
            }
            return (
              instance.setOptions(options).then(function (state) {
                !isDestroyed &&
                  options.onFirstUpdate &&
                  options.onFirstUpdate(state)
              }),
              instance
            )
          }
        }
        var createPopper = popperGenerator({
          defaultModifiers: [
            {
              name: 'eventListeners',
              enabled: !0,
              phase: 'write',
              fn: function fn() {},
              effect: function effect(_ref) {
                var state = _ref.state,
                  instance = _ref.instance,
                  options = _ref.options,
                  _options$scroll = options.scroll,
                  scroll = void 0 === _options$scroll || _options$scroll,
                  _options$resize = options.resize,
                  resize = void 0 === _options$resize || _options$resize,
                  window = getWindow(state.elements.popper),
                  scrollParents = [].concat(
                    state.scrollParents.reference,
                    state.scrollParents.popper
                  )
                return (
                  scroll &&
                    scrollParents.forEach(function (scrollParent) {
                      scrollParent.addEventListener(
                        'scroll',
                        instance.update,
                        passive
                      )
                    }),
                  resize &&
                    window.addEventListener('resize', instance.update, passive),
                  function () {
                    scroll &&
                      scrollParents.forEach(function (scrollParent) {
                        scrollParent.removeEventListener(
                          'scroll',
                          instance.update,
                          passive
                        )
                      }),
                      resize &&
                        window.removeEventListener(
                          'resize',
                          instance.update,
                          passive
                        )
                  }
                )
              },
              data: {},
            },
            {
              name: 'popperOffsets',
              enabled: !0,
              phase: 'read',
              fn: function popperOffsets(_ref) {
                var state = _ref.state,
                  name = _ref.name
                state.modifiersData[name] = computeOffsets({
                  reference: state.rects.reference,
                  element: state.rects.popper,
                  strategy: 'absolute',
                  placement: state.placement,
                })
              },
              data: {},
            },
            {
              name: 'computeStyles',
              enabled: !0,
              phase: 'beforeWrite',
              fn: function computeStyles(_ref5) {
                var state = _ref5.state,
                  options = _ref5.options,
                  _options$gpuAccelerat = options.gpuAcceleration,
                  gpuAcceleration =
                    void 0 === _options$gpuAccelerat || _options$gpuAccelerat,
                  _options$adaptive = options.adaptive,
                  adaptive = void 0 === _options$adaptive || _options$adaptive,
                  _options$roundOffsets = options.roundOffsets,
                  roundOffsets =
                    void 0 === _options$roundOffsets || _options$roundOffsets,
                  commonStyles = {
                    placement: getBasePlacement(state.placement),
                    variation: getVariation(state.placement),
                    popper: state.elements.popper,
                    popperRect: state.rects.popper,
                    gpuAcceleration: gpuAcceleration,
                    isFixed: 'fixed' === state.options.strategy,
                  }
                null != state.modifiersData.popperOffsets &&
                  (state.styles.popper = Object.assign(
                    {},
                    state.styles.popper,
                    mapToStyles(
                      Object.assign({}, commonStyles, {
                        offsets: state.modifiersData.popperOffsets,
                        position: state.options.strategy,
                        adaptive: adaptive,
                        roundOffsets: roundOffsets,
                      })
                    )
                  )),
                  null != state.modifiersData.arrow &&
                    (state.styles.arrow = Object.assign(
                      {},
                      state.styles.arrow,
                      mapToStyles(
                        Object.assign({}, commonStyles, {
                          offsets: state.modifiersData.arrow,
                          position: 'absolute',
                          adaptive: !1,
                          roundOffsets: roundOffsets,
                        })
                      )
                    )),
                  (state.attributes.popper = Object.assign(
                    {},
                    state.attributes.popper,
                    { 'data-popper-placement': state.placement }
                  ))
              },
              data: {},
            },
            applyStyles$1,
            offset$1,
            {
              name: 'flip',
              enabled: !0,
              phase: 'main',
              fn: function flip(_ref) {
                var state = _ref.state,
                  options = _ref.options,
                  name = _ref.name
                if (!state.modifiersData[name]._skip) {
                  for (
                    var _options$mainAxis = options.mainAxis,
                      checkMainAxis =
                        void 0 === _options$mainAxis || _options$mainAxis,
                      _options$altAxis = options.altAxis,
                      checkAltAxis =
                        void 0 === _options$altAxis || _options$altAxis,
                      specifiedFallbackPlacements = options.fallbackPlacements,
                      padding = options.padding,
                      boundary = options.boundary,
                      rootBoundary = options.rootBoundary,
                      altBoundary = options.altBoundary,
                      _options$flipVariatio = options.flipVariations,
                      flipVariations =
                        void 0 === _options$flipVariatio ||
                        _options$flipVariatio,
                      allowedAutoPlacements = options.allowedAutoPlacements,
                      preferredPlacement = state.options.placement,
                      basePlacement = getBasePlacement(preferredPlacement),
                      fallbackPlacements =
                        specifiedFallbackPlacements ||
                        (basePlacement === preferredPlacement || !flipVariations
                          ? [getOppositePlacement(preferredPlacement)]
                          : (function getExpandedFallbackPlacements(placement) {
                              if (
                                getBasePlacement(placement) ===
                                _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.o
                              )
                                return []
                              var oppositePlacement =
                                getOppositePlacement(placement)
                              return [
                                getOppositeVariationPlacement(placement),
                                oppositePlacement,
                                getOppositeVariationPlacement(
                                  oppositePlacement
                                ),
                              ]
                            })(preferredPlacement)),
                      placements = [preferredPlacement]
                        .concat(fallbackPlacements)
                        .reduce(function (acc, placement) {
                          return acc.concat(
                            getBasePlacement(placement) ===
                              _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.o
                              ? (function computeAutoPlacement(state, options) {
                                  void 0 === options && (options = {})
                                  var _options = options,
                                    placement = _options.placement,
                                    boundary = _options.boundary,
                                    rootBoundary = _options.rootBoundary,
                                    padding = _options.padding,
                                    flipVariations = _options.flipVariations,
                                    _options$allowedAutoP =
                                      _options.allowedAutoPlacements,
                                    allowedAutoPlacements =
                                      void 0 === _options$allowedAutoP
                                        ? _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.n
                                        : _options$allowedAutoP,
                                    variation = getVariation(placement),
                                    placements$1 = variation
                                      ? flipVariations
                                        ? _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.m
                                        : _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.m.filter(
                                            function (placement) {
                                              return (
                                                getVariation(placement) ===
                                                variation
                                              )
                                            }
                                          )
                                      : _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.f,
                                    allowedPlacements = placements$1.filter(
                                      function (placement) {
                                        return (
                                          allowedAutoPlacements.indexOf(
                                            placement
                                          ) >= 0
                                        )
                                      }
                                    )
                                  0 === allowedPlacements.length &&
                                    (allowedPlacements = placements$1)
                                  var overflows = allowedPlacements.reduce(
                                    function (acc, placement) {
                                      return (
                                        (acc[placement] = detectOverflow(
                                          state,
                                          {
                                            placement: placement,
                                            boundary: boundary,
                                            rootBoundary: rootBoundary,
                                            padding: padding,
                                          }
                                        )[getBasePlacement(placement)]),
                                        acc
                                      )
                                    },
                                    {}
                                  )
                                  return Object.keys(overflows).sort(function (
                                    a,
                                    b
                                  ) {
                                    return overflows[a] - overflows[b]
                                  })
                                })(state, {
                                  placement: placement,
                                  boundary: boundary,
                                  rootBoundary: rootBoundary,
                                  padding: padding,
                                  flipVariations: flipVariations,
                                  allowedAutoPlacements: allowedAutoPlacements,
                                })
                              : placement
                          )
                        }, []),
                      referenceRect = state.rects.reference,
                      popperRect = state.rects.popper,
                      checksMap = new Map(),
                      makeFallbackChecks = !0,
                      firstFittingPlacement = placements[0],
                      i = 0;
                    i < placements.length;
                    i++
                  ) {
                    var placement = placements[i],
                      _basePlacement = getBasePlacement(placement),
                      isStartVariation =
                        getVariation(placement) ===
                        _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.s,
                      isVertical =
                        [
                          _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.t,
                          _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.h,
                        ].indexOf(_basePlacement) >= 0,
                      len = isVertical ? 'width' : 'height',
                      overflow = detectOverflow(state, {
                        placement: placement,
                        boundary: boundary,
                        rootBoundary: rootBoundary,
                        altBoundary: altBoundary,
                        padding: padding,
                      }),
                      mainVariationSide = isVertical
                        ? isStartVariation
                          ? _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.r
                          : _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.l
                        : isStartVariation
                        ? _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.h
                        : _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.t
                    referenceRect[len] > popperRect[len] &&
                      (mainVariationSide =
                        getOppositePlacement(mainVariationSide))
                    var altVariationSide =
                        getOppositePlacement(mainVariationSide),
                      checks = []
                    if (
                      (checkMainAxis &&
                        checks.push(overflow[_basePlacement] <= 0),
                      checkAltAxis &&
                        checks.push(
                          overflow[mainVariationSide] <= 0,
                          overflow[altVariationSide] <= 0
                        ),
                      checks.every(function (check) {
                        return check
                      }))
                    ) {
                      ;(firstFittingPlacement = placement),
                        (makeFallbackChecks = !1)
                      break
                    }
                    checksMap.set(placement, checks)
                  }
                  if (makeFallbackChecks)
                    for (
                      var _loop = function _loop(_i) {
                          var fittingPlacement = placements.find(function (
                            placement
                          ) {
                            var checks = checksMap.get(placement)
                            if (checks)
                              return checks
                                .slice(0, _i)
                                .every(function (check) {
                                  return check
                                })
                          })
                          if (fittingPlacement)
                            return (
                              (firstFittingPlacement = fittingPlacement),
                              'break'
                            )
                        },
                        _i = flipVariations ? 3 : 1;
                      _i > 0;
                      _i--
                    ) {
                      if ('break' === _loop(_i)) break
                    }
                  state.placement !== firstFittingPlacement &&
                    ((state.modifiersData[name]._skip = !0),
                    (state.placement = firstFittingPlacement),
                    (state.reset = !0))
                }
              },
              requiresIfExists: ['offset'],
              data: { _skip: !1 },
            },
            preventOverflow$1,
            arrow$1,
            {
              name: 'hide',
              enabled: !0,
              phase: 'main',
              requiresIfExists: ['preventOverflow'],
              fn: function hide(_ref) {
                var state = _ref.state,
                  name = _ref.name,
                  referenceRect = state.rects.reference,
                  popperRect = state.rects.popper,
                  preventedOffsets = state.modifiersData.preventOverflow,
                  referenceOverflow = detectOverflow(state, {
                    elementContext: 'reference',
                  }),
                  popperAltOverflow = detectOverflow(state, {
                    altBoundary: !0,
                  }),
                  referenceClippingOffsets = getSideOffsets(
                    referenceOverflow,
                    referenceRect
                  ),
                  popperEscapeOffsets = getSideOffsets(
                    popperAltOverflow,
                    popperRect,
                    preventedOffsets
                  ),
                  isReferenceHidden = isAnySideFullyClipped(
                    referenceClippingOffsets
                  ),
                  hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets)
                ;(state.modifiersData[name] = {
                  referenceClippingOffsets: referenceClippingOffsets,
                  popperEscapeOffsets: popperEscapeOffsets,
                  isReferenceHidden: isReferenceHidden,
                  hasPopperEscaped: hasPopperEscaped,
                }),
                  (state.attributes.popper = Object.assign(
                    {},
                    state.attributes.popper,
                    {
                      'data-popper-reference-hidden': isReferenceHidden,
                      'data-popper-escaped': hasPopperEscaped,
                    }
                  ))
              },
            },
          ],
        })
        function _setPrototypeOf(o, p) {
          return (
            (_setPrototypeOf =
              Object.setPrototypeOf ||
              function _setPrototypeOf(o, p) {
                return (o.__proto__ = p), o
              }),
            _setPrototypeOf(o, p)
          )
        }
        function _inheritsLoose(subClass, superClass) {
          ;(subClass.prototype = Object.create(superClass.prototype)),
            (subClass.prototype.constructor = subClass),
            _setPrototypeOf(subClass, superClass)
        }
        var ManagerReferenceNodeContext =
            react__WEBPACK_IMPORTED_MODULE_34__.createContext(),
          ManagerReferenceNodeSetterContext =
            react__WEBPACK_IMPORTED_MODULE_34__.createContext()
        function Manager(_ref) {
          var children = _ref.children,
            _React$useState =
              react__WEBPACK_IMPORTED_MODULE_34__.useState(null),
            referenceNode = _React$useState[0],
            setReferenceNode = _React$useState[1],
            hasUnmounted = react__WEBPACK_IMPORTED_MODULE_34__.useRef(!1)
          react__WEBPACK_IMPORTED_MODULE_34__.useEffect(function () {
            return function () {
              hasUnmounted.current = !0
            }
          }, [])
          var handleSetReferenceNode =
            react__WEBPACK_IMPORTED_MODULE_34__.useCallback(function (node) {
              hasUnmounted.current || setReferenceNode(node)
            }, [])
          return react__WEBPACK_IMPORTED_MODULE_34__.createElement(
            ManagerReferenceNodeContext.Provider,
            { value: referenceNode },
            react__WEBPACK_IMPORTED_MODULE_34__.createElement(
              ManagerReferenceNodeSetterContext.Provider,
              { value: handleSetReferenceNode },
              children
            )
          )
        }
        var unwrapArray = function unwrapArray(arg) {
            return Array.isArray(arg) ? arg[0] : arg
          },
          safeInvoke = function safeInvoke(fn) {
            if ('function' == typeof fn) {
              for (
                var _len = arguments.length,
                  args = new Array(_len > 1 ? _len - 1 : 0),
                  _key = 1;
                _key < _len;
                _key++
              )
                args[_key - 1] = arguments[_key]
              return fn.apply(void 0, args)
            }
          },
          setRef$1 = function setRef(ref, node) {
            if ('function' == typeof ref) return safeInvoke(ref, node)
            null != ref && (ref.current = node)
          },
          fromEntries = function fromEntries(entries) {
            return entries.reduce(function (acc, _ref) {
              var key = _ref[0],
                value = _ref[1]
              return (acc[key] = value), acc
            }, {})
          },
          useIsomorphicLayoutEffect =
            'undefined' != typeof window &&
            window.document &&
            window.document.createElement
              ? react__WEBPACK_IMPORTED_MODULE_34__.useLayoutEffect
              : react__WEBPACK_IMPORTED_MODULE_34__.useEffect,
          hasElementType = 'undefined' != typeof Element,
          hasMap = 'function' == typeof Map,
          hasSet = 'function' == typeof Set,
          hasArrayBuffer =
            'function' == typeof ArrayBuffer && !!ArrayBuffer.isView
        function equal(a, b) {
          if (a === b) return !0
          if (a && b && 'object' == _typeof(a) && 'object' == _typeof(b)) {
            if (a.constructor !== b.constructor) return !1
            var length, i, keys, it
            if (Array.isArray(a)) {
              if ((length = a.length) != b.length) return !1
              for (i = length; 0 != i--; ) if (!equal(a[i], b[i])) return !1
              return !0
            }
            if (hasMap && a instanceof Map && b instanceof Map) {
              if (a.size !== b.size) return !1
              for (it = a.entries(); !(i = it.next()).done; )
                if (!b.has(i.value[0])) return !1
              for (it = a.entries(); !(i = it.next()).done; )
                if (!equal(i.value[1], b.get(i.value[0]))) return !1
              return !0
            }
            if (hasSet && a instanceof Set && b instanceof Set) {
              if (a.size !== b.size) return !1
              for (it = a.entries(); !(i = it.next()).done; )
                if (!b.has(i.value[0])) return !1
              return !0
            }
            if (
              hasArrayBuffer &&
              ArrayBuffer.isView(a) &&
              ArrayBuffer.isView(b)
            ) {
              if ((length = a.length) != b.length) return !1
              for (i = length; 0 != i--; ) if (a[i] !== b[i]) return !1
              return !0
            }
            if (a.constructor === RegExp)
              return a.source === b.source && a.flags === b.flags
            if (a.valueOf !== Object.prototype.valueOf)
              return a.valueOf() === b.valueOf()
            if (a.toString !== Object.prototype.toString)
              return a.toString() === b.toString()
            if (
              (length = (keys = Object.keys(a)).length) !==
              Object.keys(b).length
            )
              return !1
            for (i = length; 0 != i--; )
              if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return !1
            if (hasElementType && a instanceof Element) return !1
            for (i = length; 0 != i--; )
              if (
                (('_owner' !== keys[i] &&
                  '__v' !== keys[i] &&
                  '__o' !== keys[i]) ||
                  !a.$$typeof) &&
                !equal(a[keys[i]], b[keys[i]])
              )
                return !1
            return !0
          }
          return a != a && b != b
        }
        var reactFastCompare = function isEqual(a, b) {
            try {
              return equal(a, b)
            } catch (error) {
              if ((error.message || '').match(/stack|recursion/i))
                return (
                  console.warn(
                    'react-fast-compare cannot handle circular refs'
                  ),
                  !1
                )
              throw error
            }
          },
          EMPTY_MODIFIERS$1 = [],
          NOOP = function NOOP() {},
          NOOP_PROMISE = function NOOP_PROMISE() {
            return Promise.resolve(null)
          },
          EMPTY_MODIFIERS = []
        function Popper(_ref) {
          var _ref$placement = _ref.placement,
            placement = void 0 === _ref$placement ? 'bottom' : _ref$placement,
            _ref$strategy = _ref.strategy,
            strategy = void 0 === _ref$strategy ? 'absolute' : _ref$strategy,
            _ref$modifiers = _ref.modifiers,
            modifiers =
              void 0 === _ref$modifiers ? EMPTY_MODIFIERS : _ref$modifiers,
            referenceElement = _ref.referenceElement,
            onFirstUpdate = _ref.onFirstUpdate,
            innerRef = _ref.innerRef,
            children = _ref.children,
            referenceNode = react__WEBPACK_IMPORTED_MODULE_34__.useContext(
              ManagerReferenceNodeContext
            ),
            _React$useState =
              react__WEBPACK_IMPORTED_MODULE_34__.useState(null),
            popperElement = _React$useState[0],
            setPopperElement = _React$useState[1],
            _React$useState2 =
              react__WEBPACK_IMPORTED_MODULE_34__.useState(null),
            arrowElement = _React$useState2[0],
            setArrowElement = _React$useState2[1]
          react__WEBPACK_IMPORTED_MODULE_34__.useEffect(
            function () {
              setRef$1(innerRef, popperElement)
            },
            [innerRef, popperElement]
          )
          var options = react__WEBPACK_IMPORTED_MODULE_34__.useMemo(
              function () {
                return {
                  placement: placement,
                  strategy: strategy,
                  onFirstUpdate: onFirstUpdate,
                  modifiers: [].concat(modifiers, [
                    {
                      name: 'arrow',
                      enabled: null != arrowElement,
                      options: { element: arrowElement },
                    },
                  ]),
                }
              },
              [placement, strategy, onFirstUpdate, modifiers, arrowElement]
            ),
            _usePopper = (function usePopper(
              referenceElement,
              popperElement,
              options
            ) {
              void 0 === options && (options = {})
              var prevOptions =
                  react__WEBPACK_IMPORTED_MODULE_34__.useRef(null),
                optionsWithDefaults = {
                  onFirstUpdate: options.onFirstUpdate,
                  placement: options.placement || 'bottom',
                  strategy: options.strategy || 'absolute',
                  modifiers: options.modifiers || EMPTY_MODIFIERS$1,
                },
                _React$useState = react__WEBPACK_IMPORTED_MODULE_34__.useState({
                  styles: {
                    popper: {
                      position: optionsWithDefaults.strategy,
                      left: '0',
                      top: '0',
                    },
                    arrow: { position: 'absolute' },
                  },
                  attributes: {},
                }),
                state = _React$useState[0],
                setState = _React$useState[1],
                updateStateModifier =
                  react__WEBPACK_IMPORTED_MODULE_34__.useMemo(function () {
                    return {
                      name: 'updateState',
                      enabled: !0,
                      phase: 'write',
                      fn: function fn(_ref) {
                        var state = _ref.state,
                          elements = Object.keys(state.elements)
                        setState({
                          styles: fromEntries(
                            elements.map(function (element) {
                              return [element, state.styles[element] || {}]
                            })
                          ),
                          attributes: fromEntries(
                            elements.map(function (element) {
                              return [element, state.attributes[element]]
                            })
                          ),
                        })
                      },
                      requires: ['computeStyles'],
                    }
                  }, []),
                popperOptions = react__WEBPACK_IMPORTED_MODULE_34__.useMemo(
                  function () {
                    var newOptions = {
                      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
                      placement: optionsWithDefaults.placement,
                      strategy: optionsWithDefaults.strategy,
                      modifiers: [].concat(optionsWithDefaults.modifiers, [
                        updateStateModifier,
                        { name: 'applyStyles', enabled: !1 },
                      ]),
                    }
                    return reactFastCompare(prevOptions.current, newOptions)
                      ? prevOptions.current || newOptions
                      : ((prevOptions.current = newOptions), newOptions)
                  },
                  [
                    optionsWithDefaults.onFirstUpdate,
                    optionsWithDefaults.placement,
                    optionsWithDefaults.strategy,
                    optionsWithDefaults.modifiers,
                    updateStateModifier,
                  ]
                ),
                popperInstanceRef = react__WEBPACK_IMPORTED_MODULE_34__.useRef()
              return (
                useIsomorphicLayoutEffect(
                  function () {
                    popperInstanceRef.current &&
                      popperInstanceRef.current.setOptions(popperOptions)
                  },
                  [popperOptions]
                ),
                useIsomorphicLayoutEffect(
                  function () {
                    if (null != referenceElement && null != popperElement) {
                      var popperInstance = (
                        options.createPopper || createPopper
                      )(referenceElement, popperElement, popperOptions)
                      return (
                        (popperInstanceRef.current = popperInstance),
                        function () {
                          popperInstance.destroy(),
                            (popperInstanceRef.current = null)
                        }
                      )
                    }
                  },
                  [referenceElement, popperElement, options.createPopper]
                ),
                {
                  state: popperInstanceRef.current
                    ? popperInstanceRef.current.state
                    : null,
                  styles: state.styles,
                  attributes: state.attributes,
                  update: popperInstanceRef.current
                    ? popperInstanceRef.current.update
                    : null,
                  forceUpdate: popperInstanceRef.current
                    ? popperInstanceRef.current.forceUpdate
                    : null,
                }
              )
            })(referenceElement || referenceNode, popperElement, options),
            state = _usePopper.state,
            styles = _usePopper.styles,
            forceUpdate = _usePopper.forceUpdate,
            update = _usePopper.update,
            childrenProps = react__WEBPACK_IMPORTED_MODULE_34__.useMemo(
              function () {
                return {
                  ref: setPopperElement,
                  style: styles.popper,
                  placement: state ? state.placement : placement,
                  hasPopperEscaped:
                    state && state.modifiersData.hide
                      ? state.modifiersData.hide.hasPopperEscaped
                      : null,
                  isReferenceHidden:
                    state && state.modifiersData.hide
                      ? state.modifiersData.hide.isReferenceHidden
                      : null,
                  arrowProps: { style: styles.arrow, ref: setArrowElement },
                  forceUpdate: forceUpdate || NOOP,
                  update: update || NOOP_PROMISE,
                }
              },
              [
                setPopperElement,
                setArrowElement,
                placement,
                state,
                styles,
                update,
                forceUpdate,
              ]
            )
          return unwrapArray(children)(childrenProps)
        }
        var warning = function warning() {},
          warning_1 = warning
        function Reference(_ref) {
          var children = _ref.children,
            innerRef = _ref.innerRef,
            setReferenceNode = react__WEBPACK_IMPORTED_MODULE_34__.useContext(
              ManagerReferenceNodeSetterContext
            ),
            refHandler = react__WEBPACK_IMPORTED_MODULE_34__.useCallback(
              function (node) {
                setRef$1(innerRef, node), safeInvoke(setReferenceNode, node)
              },
              [innerRef, setReferenceNode]
            )
          return (
            react__WEBPACK_IMPORTED_MODULE_34__.useEffect(function () {
              return function () {
                return setRef$1(innerRef, null)
              }
            }),
            react__WEBPACK_IMPORTED_MODULE_34__.useEffect(
              function () {
                warning_1(
                  Boolean(setReferenceNode),
                  '`Reference` should not be used outside of a `Manager` component.'
                )
              },
              [setReferenceNode]
            ),
            unwrapArray(children)({ ref: refHandler })
          )
        }
        var TooltipContext = react__WEBPACK_IMPORTED_MODULE_34__.createContext(
            {}
          ),
          callAll = function callAll() {
            for (
              var _len = arguments.length, fns = new Array(_len), _key = 0;
              _key < _len;
              _key++
            )
              fns[_key] = arguments[_key]
            return function () {
              for (
                var _len2 = arguments.length,
                  args = new Array(_len2),
                  _key2 = 0;
                _key2 < _len2;
                _key2++
              )
                args[_key2] = arguments[_key2]
              return fns.forEach(function (fn) {
                return fn && fn.apply(void 0, args)
              })
            }
          },
          canUseDOM = function canUseDOM() {
            return !(
              'undefined' == typeof window ||
              !window.document ||
              !window.document.createElement
            )
          },
          Tooltip$1 = (function (_Component) {
            function Tooltip() {
              for (
                var _this,
                  _len = arguments.length,
                  args = new Array(_len),
                  _key = 0;
                _key < _len;
                _key++
              )
                args[_key] = arguments[_key]
              return (
                ((_this =
                  _Component.call.apply(_Component, [this].concat(args)) ||
                  this).observer = void 0),
                (_this.tooltipRef = void 0),
                (_this.handleOutsideClick = function (event) {
                  if (
                    _this.tooltipRef &&
                    !_this.tooltipRef.contains(event.target)
                  ) {
                    var parentOutsideClickHandler =
                        _this.context.parentOutsideClickHandler,
                      _this$props = _this.props,
                      hideTooltip = _this$props.hideTooltip
                    ;(0, _this$props.clearScheduled)(),
                      hideTooltip(),
                      parentOutsideClickHandler &&
                        parentOutsideClickHandler(event)
                  }
                }),
                (_this.handleOutsideRightClick = function (event) {
                  if (
                    _this.tooltipRef &&
                    !_this.tooltipRef.contains(event.target)
                  ) {
                    var parentOutsideRightClickHandler =
                        _this.context.parentOutsideRightClickHandler,
                      _this$props2 = _this.props,
                      hideTooltip = _this$props2.hideTooltip
                    ;(0, _this$props2.clearScheduled)(),
                      hideTooltip(),
                      parentOutsideRightClickHandler &&
                        parentOutsideRightClickHandler(event)
                  }
                }),
                (_this.addOutsideClickHandler = function () {
                  document.body.addEventListener(
                    'touchend',
                    _this.handleOutsideClick
                  ),
                    document.body.addEventListener(
                      'click',
                      _this.handleOutsideClick
                    )
                }),
                (_this.removeOutsideClickHandler = function () {
                  document.body.removeEventListener(
                    'touchend',
                    _this.handleOutsideClick
                  ),
                    document.body.removeEventListener(
                      'click',
                      _this.handleOutsideClick
                    )
                }),
                (_this.addOutsideRightClickHandler = function () {
                  return document.body.addEventListener(
                    'contextmenu',
                    _this.handleOutsideRightClick
                  )
                }),
                (_this.removeOutsideRightClickHandler = function () {
                  return document.body.removeEventListener(
                    'contextmenu',
                    _this.handleOutsideRightClick
                  )
                }),
                (_this.getTooltipRef = function (node) {
                  ;(_this.tooltipRef = node),
                    (function setRef(ref, node) {
                      if ('function' == typeof ref) return ref(node)
                      null != ref && (ref.current = node)
                    })(_this.props.innerRef, node)
                }),
                (_this.getArrowProps = function (props) {
                  return (
                    void 0 === props && (props = {}),
                    (0, _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.a)(
                      {},
                      props,
                      {
                        style: (0,
                        _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.a)(
                          {},
                          props.style,
                          _this.props.arrowProps.style
                        ),
                      }
                    )
                  )
                }),
                (_this.getTooltipProps = function (props) {
                  return (
                    void 0 === props && (props = {}),
                    (0, _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.a)(
                      {},
                      props,
                      _this.isTriggeredBy('hover') && {
                        onMouseEnter: callAll(
                          _this.props.clearScheduled,
                          props.onMouseEnter
                        ),
                        onMouseLeave: callAll(
                          _this.props.hideTooltip,
                          props.onMouseLeave
                        ),
                      },
                      {
                        style: (0,
                        _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.a)(
                          {},
                          props.style,
                          _this.props.style
                        ),
                      }
                    )
                  )
                }),
                (_this.contextValue = {
                  isParentNoneTriggered: 'none' === _this.props.trigger,
                  addParentOutsideClickHandler: _this.addOutsideClickHandler,
                  addParentOutsideRightClickHandler:
                    _this.addOutsideRightClickHandler,
                  parentOutsideClickHandler: _this.handleOutsideClick,
                  parentOutsideRightClickHandler: _this.handleOutsideRightClick,
                  removeParentOutsideClickHandler:
                    _this.removeOutsideClickHandler,
                  removeParentOutsideRightClickHandler:
                    _this.removeOutsideRightClickHandler,
                }),
                _this
              )
            }
            _inheritsLoose(Tooltip, _Component)
            var _proto = Tooltip.prototype
            return (
              (_proto.componentDidMount = function componentDidMount() {
                var _this2 = this
                if (
                  ((this.observer = new MutationObserver(function () {
                    _this2.props.update()
                  })).observe(
                    this.tooltipRef,
                    this.props.mutationObserverOptions
                  ),
                  this.isTriggeredBy('hover') ||
                    this.isTriggeredBy('click') ||
                    this.isTriggeredBy('right-click'))
                ) {
                  var _this$context = this.context,
                    removeParentOutsideClickHandler =
                      _this$context.removeParentOutsideClickHandler,
                    removeParentOutsideRightClickHandler =
                      _this$context.removeParentOutsideRightClickHandler
                  this.addOutsideClickHandler(),
                    this.addOutsideRightClickHandler(),
                    removeParentOutsideClickHandler &&
                      removeParentOutsideClickHandler(),
                    removeParentOutsideRightClickHandler &&
                      removeParentOutsideRightClickHandler()
                }
              }),
              (_proto.componentDidUpdate = function componentDidUpdate() {
                this.props.closeOnReferenceHidden &&
                  this.props.isReferenceHidden &&
                  this.props.hideTooltip()
              }),
              (_proto.componentWillUnmount = function componentWillUnmount() {
                if (
                  (this.observer && this.observer.disconnect(),
                  this.isTriggeredBy('hover') ||
                    this.isTriggeredBy('click') ||
                    this.isTriggeredBy('right-click'))
                ) {
                  var _this$context2 = this.context,
                    isParentNoneTriggered =
                      _this$context2.isParentNoneTriggered,
                    addParentOutsideClickHandler =
                      _this$context2.addParentOutsideClickHandler,
                    addParentOutsideRightClickHandler =
                      _this$context2.addParentOutsideRightClickHandler
                  this.removeOutsideClickHandler(),
                    this.removeOutsideRightClickHandler(),
                    (this.handleOutsideClick = void 0),
                    (this.handleOutsideRightClick = void 0),
                    !isParentNoneTriggered &&
                      addParentOutsideClickHandler &&
                      addParentOutsideClickHandler(),
                    !isParentNoneTriggered &&
                      addParentOutsideRightClickHandler &&
                      addParentOutsideRightClickHandler()
                }
              }),
              (_proto.render = function render() {
                var _this$props3 = this.props,
                  arrowProps = _this$props3.arrowProps,
                  placement = _this$props3.placement,
                  tooltip = _this$props3.tooltip
                return react__WEBPACK_IMPORTED_MODULE_34__.createElement(
                  TooltipContext.Provider,
                  { value: this.contextValue },
                  tooltip({
                    arrowRef: arrowProps.ref,
                    getArrowProps: this.getArrowProps,
                    getTooltipProps: this.getTooltipProps,
                    placement: placement,
                    tooltipRef: this.getTooltipRef,
                  })
                )
              }),
              (_proto.isTriggeredBy = function isTriggeredBy(event) {
                var trigger = this.props.trigger
                return (
                  trigger === event ||
                  (Array.isArray(trigger) && trigger.includes(event))
                )
              }),
              Tooltip
            )
          })(react__WEBPACK_IMPORTED_MODULE_34__.Component)
        Tooltip$1.contextType = TooltipContext
        var TooltipTrigger = (function (_Component) {
          function TooltipTrigger() {
            for (
              var _this,
                _len = arguments.length,
                args = new Array(_len),
                _key = 0;
              _key < _len;
              _key++
            )
              args[_key] = arguments[_key]
            return (
              ((_this =
                _Component.call.apply(_Component, [this].concat(args)) ||
                this).state = {
                tooltipShown: _this.props.defaultTooltipShown,
              }),
              (_this.hideTimeout = void 0),
              (_this.showTimeout = void 0),
              (_this.popperOffset = void 0),
              (_this.setTooltipState = function (state) {
                var cb = function cb() {
                  return _this.props.onVisibilityChange(state.tooltipShown)
                }
                _this.isControlled() ? cb() : _this.setState(state, cb)
              }),
              (_this.clearScheduled = function () {
                clearTimeout(_this.hideTimeout), clearTimeout(_this.showTimeout)
              }),
              (_this.showTooltip = function (_ref) {
                var pageX = _ref.pageX,
                  pageY = _ref.pageY
                _this.clearScheduled()
                var state = { tooltipShown: !0 }
                _this.props.followCursor &&
                  (state = (0,
                  _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.a)(
                    {},
                    state,
                    { pageX: pageX, pageY: pageY }
                  )),
                  (_this.showTimeout = window.setTimeout(function () {
                    return _this.setTooltipState(state)
                  }, _this.props.delayShow))
              }),
              (_this.hideTooltip = function () {
                _this.clearScheduled(),
                  (_this.hideTimeout = window.setTimeout(function () {
                    return _this.setTooltipState({ tooltipShown: !1 })
                  }, _this.props.delayHide))
              }),
              (_this.toggleTooltip = function (_ref2) {
                var pageX = _ref2.pageX,
                  pageY = _ref2.pageY,
                  action = _this.getState() ? 'hideTooltip' : 'showTooltip'
                _this[action]({ pageX: pageX, pageY: pageY })
              }),
              (_this.clickToggle = function (event) {
                event.preventDefault()
                var pageX = event.pageX,
                  pageY = event.pageY,
                  action = _this.props.followCursor
                    ? 'showTooltip'
                    : 'toggleTooltip'
                _this[action]({ pageX: pageX, pageY: pageY })
              }),
              (_this.contextMenuToggle = function (event) {
                event.preventDefault()
                var pageX = event.pageX,
                  pageY = event.pageY,
                  action = _this.props.followCursor
                    ? 'showTooltip'
                    : 'toggleTooltip'
                _this[action]({ pageX: pageX, pageY: pageY })
              }),
              (_this.getTriggerProps = function (props) {
                return (
                  void 0 === props && (props = {}),
                  (0, _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.a)(
                    {},
                    props,
                    _this.isTriggeredBy('click') && {
                      onClick: callAll(_this.clickToggle, props.onClick),
                      onTouchEnd: callAll(_this.clickToggle, props.onTouchEnd),
                    },
                    _this.isTriggeredBy('right-click') && {
                      onContextMenu: callAll(
                        _this.contextMenuToggle,
                        props.onContextMenu
                      ),
                    },
                    _this.isTriggeredBy('hover') &&
                      (0, _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.a)(
                        {
                          onMouseEnter: callAll(
                            _this.showTooltip,
                            props.onMouseEnter
                          ),
                          onMouseLeave: callAll(
                            _this.hideTooltip,
                            props.onMouseLeave
                          ),
                        },
                        _this.props.followCursor && {
                          onMouseMove: callAll(
                            _this.showTooltip,
                            props.onMouseMove
                          ),
                        }
                      ),
                    _this.isTriggeredBy('focus') && {
                      onFocus: callAll(_this.showTooltip, props.onFocus),
                      onBlur: callAll(_this.hideTooltip, props.onBlur),
                    }
                  )
                )
              }),
              _this
            )
          }
          _inheritsLoose(TooltipTrigger, _Component)
          var _proto = TooltipTrigger.prototype
          return (
            (_proto.componentWillUnmount = function componentWillUnmount() {
              this.clearScheduled()
            }),
            (_proto.render = function render() {
              var _this2 = this,
                _this$props = this.props,
                children = _this$props.children,
                tooltip = _this$props.tooltip,
                placement = _this$props.placement,
                trigger = _this$props.trigger,
                getTriggerRef = _this$props.getTriggerRef,
                modifiers = _this$props.modifiers,
                closeOnReferenceHidden = _this$props.closeOnReferenceHidden,
                usePortal = _this$props.usePortal,
                portalContainer = _this$props.portalContainer,
                followCursor = _this$props.followCursor,
                getTooltipRef = _this$props.getTooltipRef,
                mutationObserverOptions = _this$props.mutationObserverOptions,
                restProps = (0,
                _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__._)(
                  _this$props,
                  [
                    'children',
                    'tooltip',
                    'placement',
                    'trigger',
                    'getTriggerRef',
                    'modifiers',
                    'closeOnReferenceHidden',
                    'usePortal',
                    'portalContainer',
                    'followCursor',
                    'getTooltipRef',
                    'mutationObserverOptions',
                  ]
                ),
                popper = react__WEBPACK_IMPORTED_MODULE_34__.createElement(
                  Popper,
                  (0, _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.a)(
                    {
                      innerRef: getTooltipRef,
                      placement: placement,
                      modifiers: [
                        {
                          name: 'followCursor',
                          enabled: followCursor,
                          phase: 'main',
                          fn: function fn(data) {
                            _this2.popperOffset = data.state.rects.popper
                          },
                        },
                      ].concat(modifiers),
                    },
                    restProps
                  ),
                  function (_ref3) {
                    var ref = _ref3.ref,
                      style = _ref3.style,
                      placement = _ref3.placement,
                      arrowProps = _ref3.arrowProps,
                      isReferenceHidden = _ref3.isReferenceHidden,
                      update = _ref3.update
                    if (followCursor && _this2.popperOffset) {
                      var _this2$state = _this2.state,
                        pageX = _this2$state.pageX,
                        pageY = _this2$state.pageY,
                        _this2$popperOffset = _this2.popperOffset,
                        width = _this2$popperOffset.width,
                        height = _this2$popperOffset.height,
                        x =
                          pageX + width >
                          window.pageXOffset + document.body.offsetWidth
                            ? pageX - width
                            : pageX,
                        y =
                          pageY + height >
                          window.pageYOffset + document.body.offsetHeight
                            ? pageY - height
                            : pageY
                      style.transform =
                        'translate3d(' + x + 'px, ' + y + 'px, 0'
                    }
                    return react__WEBPACK_IMPORTED_MODULE_34__.createElement(
                      Tooltip$1,
                      (0, _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.a)(
                        {
                          arrowProps: arrowProps,
                          closeOnReferenceHidden: closeOnReferenceHidden,
                          isReferenceHidden: isReferenceHidden,
                          placement: placement,
                          update: update,
                          style: style,
                          tooltip: tooltip,
                          trigger: trigger,
                          mutationObserverOptions: mutationObserverOptions,
                        },
                        {
                          clearScheduled: _this2.clearScheduled,
                          hideTooltip: _this2.hideTooltip,
                          innerRef: ref,
                        }
                      )
                    )
                  }
                )
              return react__WEBPACK_IMPORTED_MODULE_34__.createElement(
                Manager,
                null,
                react__WEBPACK_IMPORTED_MODULE_34__.createElement(
                  Reference,
                  { innerRef: getTriggerRef },
                  function (_ref4) {
                    var ref = _ref4.ref
                    return children({
                      getTriggerProps: _this2.getTriggerProps,
                      triggerRef: ref,
                    })
                  }
                ),
                this.getState() &&
                  (usePortal
                    ? (0, react_dom__WEBPACK_IMPORTED_MODULE_35__.createPortal)(
                        popper,
                        portalContainer
                      )
                    : popper)
              )
            }),
            (_proto.isControlled = function isControlled() {
              return void 0 !== this.props.tooltipShown
            }),
            (_proto.getState = function getState() {
              return this.isControlled()
                ? this.props.tooltipShown
                : this.state.tooltipShown
            }),
            (_proto.isTriggeredBy = function isTriggeredBy(event) {
              var trigger = this.props.trigger
              return (
                trigger === event ||
                (Array.isArray(trigger) && trigger.includes(event))
              )
            }),
            TooltipTrigger
          )
        })(react__WEBPACK_IMPORTED_MODULE_34__.Component)
        TooltipTrigger.defaultProps = {
          closeOnReferenceHidden: !0,
          defaultTooltipShown: !1,
          delayHide: 0,
          delayShow: 0,
          followCursor: !1,
          onVisibilityChange: function noop() {},
          placement: 'right',
          portalContainer: canUseDOM() ? document.body : null,
          trigger: 'hover',
          usePortal: canUseDOM(),
          mutationObserverOptions: { childList: !0, subtree: !0 },
          modifiers: [],
        }
        var TooltipTrigger$1 = TooltipTrigger,
          match = memoizerific__WEBPACK_IMPORTED_MODULE_36___default()(1e3)(
            function (requests, actual, value) {
              var fallback =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 0
              return actual.split('-')[0] === requests ? value : fallback
            }
          ),
          Arrow = _storybook_theming__WEBPACK_IMPORTED_MODULE_39__.I4.div(
            { position: 'absolute', borderStyle: 'solid' },
            function (_ref6) {
              var placement = _ref6.placement,
                x = 0,
                y = 0
              switch (!0) {
                case placement.startsWith('left') ||
                  placement.startsWith('right'):
                  y = 8
                  break
                case placement.startsWith('top') ||
                  placement.startsWith('bottom'):
                  x = 8
              }
              return {
                transform: 'translate3d('
                  .concat(x, 'px, ')
                  .concat(y, 'px, 0px)'),
              }
            },
            function (_ref7) {
              var theme = _ref7.theme,
                color = _ref7.color,
                placement = _ref7.placement
              return {
                bottom: ''.concat(match('top', placement, -8, 'auto'), 'px'),
                top: ''.concat(match('bottom', placement, -8, 'auto'), 'px'),
                right: ''.concat(match('left', placement, -8, 'auto'), 'px'),
                left: ''.concat(match('right', placement, -8, 'auto'), 'px'),
                borderBottomWidth: ''.concat(
                  match('top', placement, '0', 8),
                  'px'
                ),
                borderTopWidth: ''.concat(
                  match('bottom', placement, '0', 8),
                  'px'
                ),
                borderRightWidth: ''.concat(
                  match('left', placement, '0', 8),
                  'px'
                ),
                borderLeftWidth: ''.concat(
                  match('right', placement, '0', 8),
                  'px'
                ),
                borderTopColor: match(
                  'top',
                  placement,
                  theme.color[color] || color || 'light' === theme.base
                    ? (0, _storybook_theming__WEBPACK_IMPORTED_MODULE_39__.a)(
                        theme.background.app
                      )
                    : (0, _storybook_theming__WEBPACK_IMPORTED_MODULE_39__.e$)(
                        theme.background.app
                      ),
                  'transparent'
                ),
                borderBottomColor: match(
                  'bottom',
                  placement,
                  theme.color[color] || color || 'light' === theme.base
                    ? (0, _storybook_theming__WEBPACK_IMPORTED_MODULE_39__.a)(
                        theme.background.app
                      )
                    : (0, _storybook_theming__WEBPACK_IMPORTED_MODULE_39__.e$)(
                        theme.background.app
                      ),
                  'transparent'
                ),
                borderLeftColor: match(
                  'left',
                  placement,
                  theme.color[color] || color || 'light' === theme.base
                    ? (0, _storybook_theming__WEBPACK_IMPORTED_MODULE_39__.a)(
                        theme.background.app
                      )
                    : (0, _storybook_theming__WEBPACK_IMPORTED_MODULE_39__.e$)(
                        theme.background.app
                      ),
                  'transparent'
                ),
                borderRightColor: match(
                  'right',
                  placement,
                  theme.color[color] || color || 'light' === theme.base
                    ? (0, _storybook_theming__WEBPACK_IMPORTED_MODULE_39__.a)(
                        theme.background.app
                      )
                    : (0, _storybook_theming__WEBPACK_IMPORTED_MODULE_39__.e$)(
                        theme.background.app
                      ),
                  'transparent'
                ),
              }
            }
          ),
          Wrapper = _storybook_theming__WEBPACK_IMPORTED_MODULE_39__.I4.div(
            function (_ref8) {
              return {
                display: _ref8.hidden ? 'none' : 'inline-block',
                zIndex: 2147483647,
              }
            },
            function (_ref9) {
              var theme = _ref9.theme,
                color = _ref9.color
              return _ref9.hasChrome
                ? {
                    background:
                      theme.color[color] || color || 'light' === theme.base
                        ? (0,
                          _storybook_theming__WEBPACK_IMPORTED_MODULE_39__.a)(
                            theme.background.app
                          )
                        : (0,
                          _storybook_theming__WEBPACK_IMPORTED_MODULE_39__.e$)(
                            theme.background.app
                          ),
                    filter:
                      '\n            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))\n            drop-shadow(0 1px 3px rgba(0,0,0,0.1))\n          ',
                    borderRadius: 2 * theme.appBorderRadius,
                    fontSize: theme.typography.size.s1,
                  }
                : {}
            }
          ),
          Tooltip = function Tooltip(_a) {
            var placement = _a.placement,
              hasChrome = _a.hasChrome,
              children = _a.children,
              arrowProps = _a.arrowProps,
              tooltipRef = _a.tooltipRef,
              arrowRef = _a.arrowRef,
              color = _a.color,
              props = (0, _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.d)(
                _a,
                [
                  'placement',
                  'hasChrome',
                  'children',
                  'arrowProps',
                  'tooltipRef',
                  'arrowRef',
                  'color',
                ]
              )
            return react__WEBPACK_IMPORTED_MODULE_34__.createElement(
              Wrapper,
              Object.assign(
                { hasChrome: hasChrome, placement: placement, ref: tooltipRef },
                props,
                { color: color }
              ),
              hasChrome &&
                react__WEBPACK_IMPORTED_MODULE_34__.createElement(
                  Arrow,
                  Object.assign(
                    { placement: placement, ref: arrowRef },
                    arrowProps,
                    { color: color }
                  )
                ),
              children
            )
          }
        Tooltip.defaultProps = {
          color: void 0,
          arrowRef: void 0,
          tooltipRef: void 0,
          hasChrome: !0,
          placement: 'top',
          arrowProps: {},
        }
        var document$1 =
            _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.w.document,
          TargetContainer =
            _storybook_theming__WEBPACK_IMPORTED_MODULE_39__.I4.div(
              _templateObject ||
                (_templateObject = _taggedTemplateLiteral([
                  '\n  display: inline-block;\n  cursor: ',
                  ';\n',
                ])),
              function (props) {
                return 'hover' === props.mode ? 'default' : 'pointer'
              }
            ),
          TargetSvgContainer =
            _storybook_theming__WEBPACK_IMPORTED_MODULE_39__.I4.g(
              _templateObject2 ||
                (_templateObject2 = _taggedTemplateLiteral([
                  '\n  cursor: ',
                  ';\n',
                ])),
              function (props) {
                return 'hover' === props.mode ? 'default' : 'pointer'
              }
            ),
          WithTooltipPure = function WithTooltipPure(_a) {
            var svg = _a.svg,
              trigger = _a.trigger,
              placement = (_a.closeOnClick, _a.placement),
              modifiers = _a.modifiers,
              hasChrome = _a.hasChrome,
              _tooltip = _a.tooltip,
              children = _a.children,
              tooltipShown = _a.tooltipShown,
              onVisibilityChange = _a.onVisibilityChange,
              props = (0, _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.d)(
                _a,
                [
                  'svg',
                  'trigger',
                  'closeOnClick',
                  'placement',
                  'modifiers',
                  'hasChrome',
                  'tooltip',
                  'children',
                  'tooltipShown',
                  'onVisibilityChange',
                ]
              ),
              Container = svg ? TargetSvgContainer : TargetContainer
            return react__WEBPACK_IMPORTED_MODULE_34__.createElement(
              TooltipTrigger$1,
              {
                placement: placement,
                trigger: trigger,
                modifiers: modifiers,
                tooltipShown: tooltipShown,
                onVisibilityChange: onVisibilityChange,
                tooltip: function tooltip(_ref10) {
                  var getTooltipProps = _ref10.getTooltipProps,
                    getArrowProps = _ref10.getArrowProps,
                    tooltipRef = _ref10.tooltipRef,
                    arrowRef = _ref10.arrowRef,
                    tooltipPlacement = _ref10.placement
                  return react__WEBPACK_IMPORTED_MODULE_34__.createElement(
                    Tooltip,
                    Object.assign(
                      {
                        hasChrome: hasChrome,
                        placement: tooltipPlacement,
                        tooltipRef: tooltipRef,
                        arrowRef: arrowRef,
                        arrowProps: getArrowProps(),
                      },
                      getTooltipProps()
                    ),
                    'function' == typeof _tooltip
                      ? _tooltip({
                          onHide: function onHide() {
                            return onVisibilityChange(!1)
                          },
                        })
                      : _tooltip
                  )
                },
              },
              function (_ref11) {
                var getTriggerProps = _ref11.getTriggerProps,
                  triggerRef = _ref11.triggerRef
                return react__WEBPACK_IMPORTED_MODULE_34__.createElement(
                  Container,
                  Object.assign({ ref: triggerRef }, getTriggerProps(), props),
                  children
                )
              }
            )
          }
        WithTooltipPure.defaultProps = {
          svg: !1,
          trigger: 'hover',
          closeOnClick: !1,
          placement: 'top',
          modifiers: [
            { name: 'preventOverflow', options: { padding: 8 } },
            { name: 'offset', options: { offset: [8, 8] } },
            { name: 'arrow', options: { padding: 8 } },
          ],
          hasChrome: !0,
          tooltipShown: !1,
        }
        var WithToolTipState = function WithToolTipState(_a) {
          var startOpen = _a.startOpen,
            onChange = _a.onVisibilityChange,
            rest = (0, _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_38__.d)(_a, [
              'startOpen',
              'onVisibilityChange',
            ]),
            _useState2 = _slicedToArray(
              (0, react__WEBPACK_IMPORTED_MODULE_34__.useState)(
                startOpen || !1
              ),
              2
            ),
            tooltipShown = _useState2[0],
            setTooltipShown = _useState2[1],
            onVisibilityChange = (0,
            react__WEBPACK_IMPORTED_MODULE_34__.useCallback)(
              function (visibility) {
                ;(onChange && !1 === onChange(visibility)) ||
                  setTooltipShown(visibility)
              },
              [onChange]
            )
          return (
            (0, react__WEBPACK_IMPORTED_MODULE_34__.useEffect)(function () {
              var hide = function hide() {
                return onVisibilityChange(!1)
              }
              document$1.addEventListener('keydown', hide, !1)
              var iframes = Array.from(
                  document$1.getElementsByTagName('iframe')
                ),
                unbinders = []
              return (
                iframes.forEach(function (iframe) {
                  var bind = function bind() {
                    try {
                      iframe.contentWindow.document &&
                        (iframe.contentWindow.document.addEventListener(
                          'click',
                          hide
                        ),
                        unbinders.push(function () {
                          try {
                            iframe.contentWindow.document.removeEventListener(
                              'click',
                              hide
                            )
                          } catch (e) {}
                        }))
                    } catch (e) {}
                  }
                  bind(),
                    iframe.addEventListener('load', bind),
                    unbinders.push(function () {
                      iframe.removeEventListener('load', bind)
                    })
                }),
                function () {
                  document$1.removeEventListener('keydown', hide),
                    unbinders.forEach(function (unbind) {
                      unbind()
                    })
                }
              )
            }),
            react__WEBPACK_IMPORTED_MODULE_34__.createElement(
              WithTooltipPure,
              Object.assign({}, rest, {
                tooltipShown: tooltipShown,
                onVisibilityChange: onVisibilityChange,
              })
            )
          )
        }
      },
    './node_modules/core-js/modules/es.regexp.flags.js': function (
      __unused_webpack_module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      var global = __webpack_require__(
          './node_modules/core-js/internals/global.js'
        ),
        DESCRIPTORS = __webpack_require__(
          './node_modules/core-js/internals/descriptors.js'
        ),
        defineBuiltInAccessor = __webpack_require__(
          './node_modules/core-js/internals/define-built-in-accessor.js'
        ),
        regExpFlags = __webpack_require__(
          './node_modules/core-js/internals/regexp-flags.js'
        ),
        fails = __webpack_require__(
          './node_modules/core-js/internals/fails.js'
        ),
        RegExp = global.RegExp,
        RegExpPrototype = RegExp.prototype
      DESCRIPTORS &&
        fails(function () {
          var INDICES_SUPPORT = !0
          try {
            RegExp('.', 'd')
          } catch (error) {
            INDICES_SUPPORT = !1
          }
          var O = {},
            calls = '',
            expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy',
            addGetter = function (key, chr) {
              Object.defineProperty(O, key, {
                get: function () {
                  return (calls += chr), !0
                },
              })
            },
            pairs = {
              dotAll: 's',
              global: 'g',
              ignoreCase: 'i',
              multiline: 'm',
              sticky: 'y',
            }
          for (var key in (INDICES_SUPPORT && (pairs.hasIndices = 'd'), pairs))
            addGetter(key, pairs[key])
          return (
            Object.getOwnPropertyDescriptor(RegExpPrototype, 'flags').get.call(
              O
            ) !== expected || calls !== expected
          )
        }) &&
        defineBuiltInAccessor(RegExpPrototype, 'flags', {
          configurable: !0,
          get: regExpFlags,
        })
    },
  },
])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L0BzdG9yeWJvb2svY29tcG9uZW50cy9kaXN0L2VzbS9XaXRoVG9vbHRpcC0xNjdlOTk4Mi5qcyIsIndlYnBhY2s6Ly9yZWFjdC1iaWctY2FsZW5kYXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC5mbGFncy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmRlc2NyaXB0aW9uLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmZyZWV6ZS5qc1wiO1xuXG52YXIgX3RlbXBsYXRlT2JqZWN0LCBfdGVtcGxhdGVPYmplY3QyO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbmZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoc3RyaW5ncywgcmF3KSB7IGlmICghcmF3KSB7IHJhdyA9IHN0cmluZ3Muc2xpY2UoMCk7IH0gcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywgeyByYXc6IHsgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KSB9IH0pKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QudG8tc3RyaW5nLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLnRvLXN0cmluZy5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3Qua2V5cy5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5hc3NpZ24uanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAuZXhlYy5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zcGxpdC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbHRlci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5qb2luLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnJlcGxhY2UuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zb3J0LmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5tYXAuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmluZC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNsaWNlLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc2V0LmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMucHJvbWlzZS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LWJ1ZmZlci5jb25zdHJ1Y3Rvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC5jb25zdHJ1Y3Rvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC5mbGFncy5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5tYXRjaC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmluY2x1ZGVzLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLmluY2x1ZGVzLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnN0YXJ0cy13aXRoLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZnJvbS5qc1wiO1xuaW1wb3J0IHsgZiBhcyBiYXNlUGxhY2VtZW50cywgdCBhcyB0b3AsIGwgYXMgbGVmdCwgaCBhcyBib3R0b20sIHIgYXMgcmlnaHQsIGkgYXMgZW5kLCB2IGFzIHZpZXdwb3J0LCBzIGFzIHN0YXJ0LCBwIGFzIHBvcHBlciwgaiBhcyBjbGlwcGluZ1BhcmVudHMsIGsgYXMgcmVmZXJlbmNlLCBtIGFzIHZhcmlhdGlvblBsYWNlbWVudHMsIG4gYXMgcGxhY2VtZW50cywgbyBhcyBhdXRvLCBxIGFzIG1vZGlmaWVyUGhhc2VzLCBhIGFzIF9leHRlbmRzLCBfIGFzIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLCBkIGFzIF9fcmVzdCwgdyBhcyB3aW5kb3dfMSB9IGZyb20gJy4vaW5kZXgtNjgxZTRiMDcuanMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0X19kZWZhdWx0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzdHlsZWQsIGxpZ2h0ZW4sIGRhcmtlbiB9IGZyb20gJ0BzdG9yeWJvb2svdGhlbWluZyc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IG1lbW9pemUgZnJvbSAnbWVtb2l6ZXJpZmljJztcbmltcG9ydCAnQHN0b3J5Ym9vay9jc2YnO1xuaW1wb3J0ICdxcyc7XG5pbXBvcnQgJ0BzdG9yeWJvb2svY2xpZW50LWxvZ2dlcic7XG5cbmZ1bmN0aW9uIGdldE5vZGVOYW1lKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgPyAoZWxlbWVudC5ub2RlTmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gIGlmIChub2RlID09IG51bGwpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgaWYgKG5vZGUudG9TdHJpbmcoKSAhPT0gJ1tvYmplY3QgV2luZG93XScpIHtcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93IDogd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIGlzRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNIVE1MRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkhUTUxFbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc1NoYWRvd1Jvb3Qobm9kZSkge1xuICAvLyBJRSAxMSBoYXMgbm8gU2hhZG93Um9vdFxuICBpZiAodHlwZW9mIFNoYWRvd1Jvb3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuU2hhZG93Um9vdDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xufSAvLyBhbmQgYXBwbGllcyB0aGVtIHRvIHRoZSBIVE1MRWxlbWVudHMgc3VjaCBhcyBwb3BwZXIgYW5kIGFycm93XG5cblxuZnVuY3Rpb24gYXBwbHlTdHlsZXMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBzdHlsZSA9IHN0YXRlLnN0eWxlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBGbG93IGRvZXNuJ3Qgc3VwcG9ydCB0byBleHRlbmQgdGhpcyBwcm9wZXJ0eSwgYnV0IGl0J3MgdGhlIG1vc3RcbiAgICAvLyBlZmZlY3RpdmUgd2F5IHRvIGFwcGx5IHN0eWxlcyB0byBhbiBIVE1MRWxlbWVudFxuICAgIC8vICRGbG93Rml4TWVbY2Fubm90LXdyaXRlXVxuXG5cbiAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuXG4gICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgPT09IHRydWUgPyAnJyA6IHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdCQyKF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlO1xuICB2YXIgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICBwb3BwZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgbGVmdDogJzAnLFxuICAgICAgdG9wOiAnMCcsXG4gICAgICBtYXJnaW46ICcwJ1xuICAgIH0sXG4gICAgYXJyb3c6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSxcbiAgICByZWZlcmVuY2U6IHt9XG4gIH07XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLCBpbml0aWFsU3R5bGVzLnBvcHBlcik7XG4gIHN0YXRlLnN0eWxlcyA9IGluaXRpYWxTdHlsZXM7XG5cbiAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5hcnJvdy5zdHlsZSwgaW5pdGlhbFN0eWxlcy5hcnJvdyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdO1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgICAgdmFyIHN0eWxlUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHN0YXRlLnN0eWxlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IHN0YXRlLnN0eWxlc1tuYW1lXSA6IGluaXRpYWxTdHlsZXNbbmFtZV0pOyAvLyBTZXQgYWxsIHZhbHVlcyB0byBhbiBlbXB0eSBzdHJpbmcgdG8gdW5zZXQgdGhlbVxuXG4gICAgICB2YXIgc3R5bGUgPSBzdHlsZVByb3BlcnRpZXMucmVkdWNlKGZ1bmN0aW9uIChzdHlsZSwgcHJvcGVydHkpIHtcbiAgICAgICAgc3R5bGVbcHJvcGVydHldID0gJyc7XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH0sIHt9KTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgYXBwbHlTdHlsZXMkMSA9IHtcbiAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICd3cml0ZScsXG4gIGZuOiBhcHBseVN0eWxlcyxcbiAgZWZmZWN0OiBlZmZlY3QkMixcbiAgcmVxdWlyZXM6IFsnY29tcHV0ZVN0eWxlcyddXG59O1xuXG5mdW5jdGlvbiBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG59XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciByb3VuZCA9IE1hdGgucm91bmQ7XG5cbmZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBpbmNsdWRlU2NhbGUpIHtcbiAgaWYgKGluY2x1ZGVTY2FsZSA9PT0gdm9pZCAwKSB7XG4gICAgaW5jbHVkZVNjYWxlID0gZmFsc2U7XG4gIH1cblxuICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBzY2FsZVggPSAxO1xuICB2YXIgc2NhbGVZID0gMTtcblxuICBpZiAoaXNIVE1MRWxlbWVudChlbGVtZW50KSAmJiBpbmNsdWRlU2NhbGUpIHtcbiAgICB2YXIgb2Zmc2V0SGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgdmFyIG9mZnNldFdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDsgLy8gRG8gbm90IGF0dGVtcHQgdG8gZGl2aWRlIGJ5IDAsIG90aGVyd2lzZSB3ZSBnZXQgYEluZmluaXR5YCBhcyBzY2FsZVxuICAgIC8vIEZhbGxiYWNrIHRvIDEgaW4gY2FzZSBib3RoIHZhbHVlcyBhcmUgYDBgXG5cbiAgICBpZiAob2Zmc2V0V2lkdGggPiAwKSB7XG4gICAgICBzY2FsZVggPSByb3VuZChyZWN0LndpZHRoKSAvIG9mZnNldFdpZHRoIHx8IDE7XG4gICAgfVxuXG4gICAgaWYgKG9mZnNldEhlaWdodCA+IDApIHtcbiAgICAgIHNjYWxlWSA9IHJvdW5kKHJlY3QuaGVpZ2h0KSAvIG9mZnNldEhlaWdodCB8fCAxO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHJlY3Qud2lkdGggLyBzY2FsZVgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodCAvIHNjYWxlWSxcbiAgICB0b3A6IHJlY3QudG9wIC8gc2NhbGVZLFxuICAgIHJpZ2h0OiByZWN0LnJpZ2h0IC8gc2NhbGVYLFxuICAgIGJvdHRvbTogcmVjdC5ib3R0b20gLyBzY2FsZVksXG4gICAgbGVmdDogcmVjdC5sZWZ0IC8gc2NhbGVYLFxuICAgIHg6IHJlY3QubGVmdCAvIHNjYWxlWCxcbiAgICB5OiByZWN0LnRvcCAvIHNjYWxlWVxuICB9O1xufSAvLyBtZWFucyBpdCBkb2Vzbid0IHRha2UgaW50byBhY2NvdW50IHRyYW5zZm9ybXMuXG5cblxuZnVuY3Rpb24gZ2V0TGF5b3V0UmVjdChlbGVtZW50KSB7XG4gIHZhciBjbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpOyAvLyBVc2UgdGhlIGNsaWVudFJlY3Qgc2l6ZXMgaWYgaXQncyBub3QgYmVlbiB0cmFuc2Zvcm1lZC5cbiAgLy8gRml4ZXMgaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMjIzXG5cbiAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LndpZHRoIC0gd2lkdGgpIDw9IDEpIHtcbiAgICB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC5oZWlnaHQgLSBoZWlnaHQpIDw9IDEpIHtcbiAgICBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgIHk6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xufVxuXG5mdW5jdGlvbiBjb250YWlucyhwYXJlbnQsIGNoaWxkKSB7XG4gIHZhciByb290Tm9kZSA9IGNoaWxkLmdldFJvb3ROb2RlICYmIGNoaWxkLmdldFJvb3ROb2RlKCk7IC8vIEZpcnN0LCBhdHRlbXB0IHdpdGggZmFzdGVyIG5hdGl2ZSBtZXRob2RcblxuICBpZiAocGFyZW50LmNvbnRhaW5zKGNoaWxkKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIHRoZW4gZmFsbGJhY2sgdG8gY3VzdG9tIGltcGxlbWVudGF0aW9uIHdpdGggU2hhZG93IERPTSBzdXBwb3J0XG4gIGVsc2UgaWYgKHJvb3ROb2RlICYmIGlzU2hhZG93Um9vdChyb290Tm9kZSkpIHtcbiAgICB2YXIgbmV4dCA9IGNoaWxkO1xuXG4gICAgZG8ge1xuICAgICAgaWYgKG5leHQgJiYgcGFyZW50LmlzU2FtZU5vZGUobmV4dCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXTogbmVlZCBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHRoaXMuLi5cblxuXG4gICAgICBuZXh0ID0gbmV4dC5wYXJlbnROb2RlIHx8IG5leHQuaG9zdDtcbiAgICB9IHdoaWxlIChuZXh0KTtcbiAgfSAvLyBHaXZlIHVwLCB0aGUgcmVzdWx0IGlzIGZhbHNlXG5cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGlzVGFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIFsndGFibGUnLCAndGQnLCAndGgnXS5pbmRleE9mKGdldE5vZGVOYW1lKGVsZW1lbnQpKSA+PSAwO1xufVxuXG5mdW5jdGlvbiBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkge1xuICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gIHJldHVybiAoKGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQub3duZXJEb2N1bWVudCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICBlbGVtZW50LmRvY3VtZW50KSB8fCB3aW5kb3cuZG9jdW1lbnQpLmRvY3VtZW50RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gIGlmIChnZXROb2RlTmFtZShlbGVtZW50KSA9PT0gJ2h0bWwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gKC8vIHRoaXMgaXMgYSBxdWlja2VyIChidXQgbGVzcyB0eXBlIHNhZmUpIHdheSB0byBzYXZlIHF1aXRlIHNvbWUgYnl0ZXMgZnJvbSB0aGUgYnVuZGxlXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXVxuICAgIC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgIGVsZW1lbnQuYXNzaWduZWRTbG90IHx8IC8vIHN0ZXAgaW50byB0aGUgc2hhZG93IERPTSBvZiB0aGUgcGFyZW50IG9mIGEgc2xvdHRlZCBub2RlXG4gICAgZWxlbWVudC5wYXJlbnROb2RlIHx8ICggLy8gRE9NIEVsZW1lbnQgZGV0ZWN0ZWRcbiAgICBpc1NoYWRvd1Jvb3QoZWxlbWVudCkgPyBlbGVtZW50Lmhvc3QgOiBudWxsKSB8fCAvLyBTaGFkb3dSb290IGRldGVjdGVkXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IEhUTUxFbGVtZW50IGlzIGEgTm9kZVxuICAgIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSAvLyBmYWxsYmFja1xuXG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy84MzdcbiAgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xufSAvLyBgLm9mZnNldFBhcmVudGAgcmVwb3J0cyBgbnVsbGAgZm9yIGZpeGVkIGVsZW1lbnRzLCB3aGlsZSBhYnNvbHV0ZSBlbGVtZW50c1xuLy8gcmV0dXJuIHRoZSBjb250YWluaW5nIGJsb2NrXG5cblxuZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgdmFyIGlzRmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgIT09IC0xO1xuICB2YXIgaXNJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudCcpICE9PSAtMTtcblxuICBpZiAoaXNJRSAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgLy8gSW4gSUUgOSwgMTAgYW5kIDExIGZpeGVkIGVsZW1lbnRzIGNvbnRhaW5pbmcgYmxvY2sgaXMgYWx3YXlzIGVzdGFibGlzaGVkIGJ5IHRoZSB2aWV3cG9ydFxuICAgIHZhciBlbGVtZW50Q3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcblxuICAgIGlmIChlbGVtZW50Q3NzLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICB2YXIgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuXG4gIHdoaWxlIChpc0hUTUxFbGVtZW50KGN1cnJlbnROb2RlKSAmJiBbJ2h0bWwnLCAnYm9keSddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoY3VycmVudE5vZGUpKSA8IDApIHtcbiAgICB2YXIgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50Tm9kZSk7IC8vIFRoaXMgaXMgbm9uLWV4aGF1c3RpdmUgYnV0IGNvdmVycyB0aGUgbW9zdCBjb21tb24gQ1NTIHByb3BlcnRpZXMgdGhhdFxuICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5pbmcgYmxvY2suXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcblxuICAgIGlmIChjc3MudHJhbnNmb3JtICE9PSAnbm9uZScgfHwgY3NzLnBlcnNwZWN0aXZlICE9PSAnbm9uZScgfHwgY3NzLmNvbnRhaW4gPT09ICdwYWludCcgfHwgWyd0cmFuc2Zvcm0nLCAncGVyc3BlY3RpdmUnXS5pbmRleE9mKGNzcy53aWxsQ2hhbmdlKSAhPT0gLTEgfHwgaXNGaXJlZm94ICYmIGNzcy53aWxsQ2hhbmdlID09PSAnZmlsdGVyJyB8fCBpc0ZpcmVmb3ggJiYgY3NzLmZpbHRlciAmJiBjc3MuZmlsdGVyICE9PSAnbm9uZScpIHtcbiAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSAvLyBHZXRzIHRoZSBjbG9zZXN0IGFuY2VzdG9yIHBvc2l0aW9uZWQgZWxlbWVudC4gSGFuZGxlcyBzb21lIGVkZ2UgY2FzZXMsXG4vLyBzdWNoIGFzIHRhYmxlIGFuY2VzdG9ycyBhbmQgY3Jvc3MgYnJvd3NlciBidWdzLlxuXG5cbmZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuXG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgaXNUYWJsZUVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICB9XG5cbiAgaWYgKG9mZnNldFBhcmVudCAmJiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2h0bWwnIHx8IGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdib2R5JyAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB8fCB3aW5kb3c7XG59XG5cbmZ1bmN0aW9uIGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSA+PSAwID8gJ3gnIDogJ3knO1xufVxuXG5mdW5jdGlvbiB3aXRoaW4obWluJDEsIHZhbHVlLCBtYXgkMSkge1xuICByZXR1cm4gbWF4KG1pbiQxLCBtaW4odmFsdWUsIG1heCQxKSk7XG59XG5cbmZ1bmN0aW9uIHdpdGhpbk1heENsYW1wKG1pbiwgdmFsdWUsIG1heCkge1xuICB2YXIgdiA9IHdpdGhpbihtaW4sIHZhbHVlLCBtYXgpO1xuICByZXR1cm4gdiA+IG1heCA/IG1heCA6IHY7XG59XG5cbmZ1bmN0aW9uIGdldEZyZXNoU2lkZU9iamVjdCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDBcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VQYWRkaW5nT2JqZWN0KHBhZGRpbmdPYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGdldEZyZXNoU2lkZU9iamVjdCgpLCBwYWRkaW5nT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gZXhwYW5kVG9IYXNoTWFwKHZhbHVlLCBrZXlzKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoaGFzaE1hcCwga2V5KSB7XG4gICAgaGFzaE1hcFtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIGhhc2hNYXA7XG4gIH0sIHt9KTtcbn1cblxudmFyIHRvUGFkZGluZ09iamVjdCA9IGZ1bmN0aW9uIHRvUGFkZGluZ09iamVjdChwYWRkaW5nLCBzdGF0ZSkge1xuICBwYWRkaW5nID0gdHlwZW9mIHBhZGRpbmcgPT09ICdmdW5jdGlvbicgPyBwYWRkaW5nKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogcGFkZGluZztcbiAgcmV0dXJuIG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG59O1xuXG5mdW5jdGlvbiBhcnJvdyhfcmVmKSB7XG4gIHZhciBfc3RhdGUkbW9kaWZpZXJzRGF0YSQ7XG5cbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIGF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBpc1ZlcnRpY2FsID0gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDA7XG4gIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gIGlmICghYXJyb3dFbGVtZW50IHx8ICFwb3BwZXJPZmZzZXRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHBhZGRpbmdPYmplY3QgPSB0b1BhZGRpbmdPYmplY3Qob3B0aW9ucy5wYWRkaW5nLCBzdGF0ZSk7XG4gIHZhciBhcnJvd1JlY3QgPSBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCk7XG4gIHZhciBtaW5Qcm9wID0gYXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgdmFyIG1heFByb3AgPSBheGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgdmFyIGVuZERpZmYgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbbGVuXSArIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXSAtIHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5wb3BwZXJbbGVuXTtcbiAgdmFyIHN0YXJ0RGlmZiA9IHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc107XG4gIHZhciBhcnJvd09mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChhcnJvd0VsZW1lbnQpO1xuICB2YXIgY2xpZW50U2l6ZSA9IGFycm93T2Zmc2V0UGFyZW50ID8gYXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0IHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRXaWR0aCB8fCAwIDogMDtcbiAgdmFyIGNlbnRlclRvUmVmZXJlbmNlID0gZW5kRGlmZiAvIDIgLSBzdGFydERpZmYgLyAyOyAvLyBNYWtlIHN1cmUgdGhlIGFycm93IGRvZXNuJ3Qgb3ZlcmZsb3cgdGhlIHBvcHBlciBpZiB0aGUgY2VudGVyIHBvaW50IGlzXG4gIC8vIG91dHNpZGUgb2YgdGhlIHBvcHBlciBib3VuZHNcblxuICB2YXIgbWluID0gcGFkZGluZ09iamVjdFttaW5Qcm9wXTtcbiAgdmFyIG1heCA9IGNsaWVudFNpemUgLSBhcnJvd1JlY3RbbGVuXSAtIHBhZGRpbmdPYmplY3RbbWF4UHJvcF07XG4gIHZhciBjZW50ZXIgPSBjbGllbnRTaXplIC8gMiAtIGFycm93UmVjdFtsZW5dIC8gMiArIGNlbnRlclRvUmVmZXJlbmNlO1xuICB2YXIgb2Zmc2V0ID0gd2l0aGluKG1pbiwgY2VudGVyLCBtYXgpOyAvLyBQcmV2ZW50cyBicmVha2luZyBzeW50YXggaGlnaGxpZ2h0aW5nLi4uXG5cbiAgdmFyIGF4aXNQcm9wID0gYXhpcztcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IChfc3RhdGUkbW9kaWZpZXJzRGF0YSQgPSB7fSwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkW2F4aXNQcm9wXSA9IG9mZnNldCwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkLmNlbnRlck9mZnNldCA9IG9mZnNldCAtIGNlbnRlciwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkKTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0JDEoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQsXG4gICAgICBhcnJvd0VsZW1lbnQgPSBfb3B0aW9ucyRlbGVtZW50ID09PSB2b2lkIDAgPyAnW2RhdGEtcG9wcGVyLWFycm93XScgOiBfb3B0aW9ucyRlbGVtZW50O1xuXG4gIGlmIChhcnJvd0VsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfSAvLyBDU1Mgc2VsZWN0b3JcblxuXG4gIGlmICh0eXBlb2YgYXJyb3dFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoYXJyb3dFbGVtZW50KSkge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhcnJvd1wiIGVsZW1lbnQgbXVzdCBiZSBhbiBIVE1MRWxlbWVudCAobm90IGFuIFNWR0VsZW1lbnQpLicsICdUbyB1c2UgYW4gU1ZHIGFycm93LCB3cmFwIGl0IGluIGFuIEhUTUxFbGVtZW50IHRoYXQgd2lsbCBiZSB1c2VkIGFzJywgJ3RoZSBhcnJvdy4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29udGFpbnMoc3RhdGUuZWxlbWVudHMucG9wcGVyLCBhcnJvd0VsZW1lbnQpKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhcnJvd1wiIG1vZGlmaWVyXFwncyBgZWxlbWVudGAgbXVzdCBiZSBhIGNoaWxkIG9mIHRoZSBwb3BwZXInLCAnZWxlbWVudC4nXS5qb2luKCcgJykpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHN0YXRlLmVsZW1lbnRzLmFycm93ID0gYXJyb3dFbGVtZW50O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIGFycm93JDEgPSB7XG4gIG5hbWU6ICdhcnJvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBhcnJvdyxcbiAgZWZmZWN0OiBlZmZlY3QkMSxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddXG59O1xuXG5mdW5jdGlvbiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcbn1cblxudmFyIHVuc2V0U2lkZXMgPSB7XG4gIHRvcDogJ2F1dG8nLFxuICByaWdodDogJ2F1dG8nLFxuICBib3R0b206ICdhdXRvJyxcbiAgbGVmdDogJ2F1dG8nXG59OyAvLyBSb3VuZCB0aGUgb2Zmc2V0cyB0byB0aGUgbmVhcmVzdCBzdWl0YWJsZSBzdWJwaXhlbCBiYXNlZCBvbiB0aGUgRFBSLlxuLy8gWm9vbWluZyBjYW4gY2hhbmdlIHRoZSBEUFIsIGJ1dCBpdCBzZWVtcyB0byByZXBvcnQgYSB2YWx1ZSB0aGF0IHdpbGxcbi8vIGNsZWFubHkgZGl2aWRlIHRoZSB2YWx1ZXMgaW50byB0aGUgYXBwcm9wcmlhdGUgc3VicGl4ZWxzLlxuXG5mdW5jdGlvbiByb3VuZE9mZnNldHNCeURQUihfcmVmKSB7XG4gIHZhciB4ID0gX3JlZi54LFxuICAgICAgeSA9IF9yZWYueTtcbiAgdmFyIHdpbiA9IHdpbmRvdztcbiAgdmFyIGRwciA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gIHJldHVybiB7XG4gICAgeDogcm91bmQoeCAqIGRwcikgLyBkcHIgfHwgMCxcbiAgICB5OiByb3VuZCh5ICogZHByKSAvIGRwciB8fCAwXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcFRvU3R5bGVzKF9yZWYyKSB7XG4gIHZhciBfT2JqZWN0JGFzc2lnbjI7XG5cbiAgdmFyIHBvcHBlciA9IF9yZWYyLnBvcHBlcixcbiAgICAgIHBvcHBlclJlY3QgPSBfcmVmMi5wb3BwZXJSZWN0LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZjIucGxhY2VtZW50LFxuICAgICAgdmFyaWF0aW9uID0gX3JlZjIudmFyaWF0aW9uLFxuICAgICAgb2Zmc2V0cyA9IF9yZWYyLm9mZnNldHMsXG4gICAgICBwb3NpdGlvbiA9IF9yZWYyLnBvc2l0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX3JlZjIuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgYWRhcHRpdmUgPSBfcmVmMi5hZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9yZWYyLnJvdW5kT2Zmc2V0cyxcbiAgICAgIGlzRml4ZWQgPSBfcmVmMi5pc0ZpeGVkO1xuICB2YXIgX29mZnNldHMkeCA9IG9mZnNldHMueCxcbiAgICAgIHggPSBfb2Zmc2V0cyR4ID09PSB2b2lkIDAgPyAwIDogX29mZnNldHMkeCxcbiAgICAgIF9vZmZzZXRzJHkgPSBvZmZzZXRzLnksXG4gICAgICB5ID0gX29mZnNldHMkeSA9PT0gdm9pZCAwID8gMCA6IF9vZmZzZXRzJHk7XG5cbiAgdmFyIF9yZWYzID0gdHlwZW9mIHJvdW5kT2Zmc2V0cyA9PT0gJ2Z1bmN0aW9uJyA/IHJvdW5kT2Zmc2V0cyh7XG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH0pIDoge1xuICAgIHg6IHgsXG4gICAgeTogeVxuICB9O1xuXG4gIHggPSBfcmVmMy54O1xuICB5ID0gX3JlZjMueTtcbiAgdmFyIGhhc1ggPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd4Jyk7XG4gIHZhciBoYXNZID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneScpO1xuICB2YXIgc2lkZVggPSBsZWZ0O1xuICB2YXIgc2lkZVkgPSB0b3A7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG5cbiAgaWYgKGFkYXB0aXZlKSB7XG4gICAgdmFyIG9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChwb3BwZXIpO1xuICAgIHZhciBoZWlnaHRQcm9wID0gJ2NsaWVudEhlaWdodCc7XG4gICAgdmFyIHdpZHRoUHJvcCA9ICdjbGllbnRXaWR0aCc7XG5cbiAgICBpZiAob2Zmc2V0UGFyZW50ID09PSBnZXRXaW5kb3cocG9wcGVyKSkge1xuICAgICAgb2Zmc2V0UGFyZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KHBvcHBlcik7XG5cbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gIT09ICdzdGF0aWMnICYmIHBvc2l0aW9uID09PSAnYWJzb2x1dGUnKSB7XG4gICAgICAgIGhlaWdodFByb3AgPSAnc2Nyb2xsSGVpZ2h0JztcbiAgICAgICAgd2lkdGhQcm9wID0gJ3Njcm9sbFdpZHRoJztcbiAgICAgIH1cbiAgICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhc3RdOiBmb3JjZSB0eXBlIHJlZmluZW1lbnQsIHdlIGNvbXBhcmUgb2Zmc2V0UGFyZW50IHdpdGggd2luZG93IGFib3ZlLCBidXQgRmxvdyBkb2Vzbid0IGRldGVjdCBpdFxuXG5cbiAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQ7XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSB0b3AgfHwgKHBsYWNlbWVudCA9PT0gbGVmdCB8fCBwbGFjZW1lbnQgPT09IHJpZ2h0KSAmJiB2YXJpYXRpb24gPT09IGVuZCkge1xuICAgICAgc2lkZVkgPSBib3R0b207XG4gICAgICB2YXIgb2Zmc2V0WSA9IGlzRml4ZWQgJiYgd2luLnZpc3VhbFZpZXdwb3J0ID8gd2luLnZpc3VhbFZpZXdwb3J0LmhlaWdodCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgb2Zmc2V0UGFyZW50W2hlaWdodFByb3BdO1xuICAgICAgeSAtPSBvZmZzZXRZIC0gcG9wcGVyUmVjdC5oZWlnaHQ7XG4gICAgICB5ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSBsZWZ0IHx8IChwbGFjZW1lbnQgPT09IHRvcCB8fCBwbGFjZW1lbnQgPT09IGJvdHRvbSkgJiYgdmFyaWF0aW9uID09PSBlbmQpIHtcbiAgICAgIHNpZGVYID0gcmlnaHQ7XG4gICAgICB2YXIgb2Zmc2V0WCA9IGlzRml4ZWQgJiYgd2luLnZpc3VhbFZpZXdwb3J0ID8gd2luLnZpc3VhbFZpZXdwb3J0LndpZHRoIDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgICBvZmZzZXRQYXJlbnRbd2lkdGhQcm9wXTtcbiAgICAgIHggLT0gb2Zmc2V0WCAtIHBvcHBlclJlY3Qud2lkdGg7XG4gICAgICB4ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgcG9zaXRpb246IHBvc2l0aW9uXG4gIH0sIGFkYXB0aXZlICYmIHVuc2V0U2lkZXMpO1xuXG4gIHZhciBfcmVmNCA9IHJvdW5kT2Zmc2V0cyA9PT0gdHJ1ZSA/IHJvdW5kT2Zmc2V0c0J5RFBSKHtcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfSkgOiB7XG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG5cbiAgeCA9IF9yZWY0Lng7XG4gIHkgPSBfcmVmNC55O1xuXG4gIGlmIChncHVBY2NlbGVyYXRpb24pIHtcbiAgICB2YXIgX09iamVjdCRhc3NpZ247XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24gPSB7fSwgX09iamVjdCRhc3NpZ25bc2lkZVldID0gaGFzWSA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbltzaWRlWF0gPSBoYXNYID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduLnRyYW5zZm9ybSA9ICh3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSA8PSAxID8gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIiA6IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweCwgMClcIiwgX09iamVjdCRhc3NpZ24pKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbjIgPSB7fSwgX09iamVjdCRhc3NpZ24yW3NpZGVZXSA9IGhhc1kgPyB5ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMltzaWRlWF0gPSBoYXNYID8geCArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjIudHJhbnNmb3JtID0gJycsIF9PYmplY3QkYXNzaWduMikpO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlU3R5bGVzKF9yZWY1KSB7XG4gIHZhciBzdGF0ZSA9IF9yZWY1LnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWY1Lm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPSBvcHRpb25zLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGdwdUFjY2VsZXJhdCxcbiAgICAgIF9vcHRpb25zJGFkYXB0aXZlID0gb3B0aW9ucy5hZGFwdGl2ZSxcbiAgICAgIGFkYXB0aXZlID0gX29wdGlvbnMkYWRhcHRpdmUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhZGFwdGl2ZSxcbiAgICAgIF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9IG9wdGlvbnMucm91bmRPZmZzZXRzLFxuICAgICAgcm91bmRPZmZzZXRzID0gX29wdGlvbnMkcm91bmRPZmZzZXRzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcm91bmRPZmZzZXRzO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2YXIgdHJhbnNpdGlvblByb3BlcnR5ID0gZ2V0Q29tcHV0ZWRTdHlsZShzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLnRyYW5zaXRpb25Qcm9wZXJ0eSB8fCAnJztcblxuICAgIGlmIChhZGFwdGl2ZSAmJiBbJ3RyYW5zZm9ybScsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXS5zb21lKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuIHRyYW5zaXRpb25Qcm9wZXJ0eS5pbmRleE9mKHByb3BlcnR5KSA+PSAwO1xuICAgIH0pKSB7XG4gICAgICBjb25zb2xlLndhcm4oWydQb3BwZXI6IERldGVjdGVkIENTUyB0cmFuc2l0aW9ucyBvbiBhdCBsZWFzdCBvbmUgb2YgdGhlIGZvbGxvd2luZycsICdDU1MgcHJvcGVydGllczogXCJ0cmFuc2Zvcm1cIiwgXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIi4nLCAnXFxuXFxuJywgJ0Rpc2FibGUgdGhlIFwiY29tcHV0ZVN0eWxlc1wiIG1vZGlmaWVyXFwncyBgYWRhcHRpdmVgIG9wdGlvbiB0byBhbGxvdycsICdmb3Igc21vb3RoIHRyYW5zaXRpb25zLCBvciByZW1vdmUgdGhlc2UgcHJvcGVydGllcyBmcm9tIHRoZSBDU1MnLCAndHJhbnNpdGlvbiBkZWNsYXJhdGlvbiBvbiB0aGUgcG9wcGVyIGVsZW1lbnQgaWYgb25seSB0cmFuc2l0aW9uaW5nJywgJ29wYWNpdHkgb3IgYmFja2dyb3VuZC1jb2xvciBmb3IgZXhhbXBsZS4nLCAnXFxuXFxuJywgJ1dlIHJlY29tbWVuZCB1c2luZyB0aGUgcG9wcGVyIGVsZW1lbnQgYXMgYSB3cmFwcGVyIGFyb3VuZCBhbiBpbm5lcicsICdlbGVtZW50IHRoYXQgY2FuIGhhdmUgYW55IENTUyBwcm9wZXJ0eSB0cmFuc2l0aW9uZWQgZm9yIGFuaW1hdGlvbnMuJ10uam9pbignICcpKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0ge1xuICAgIHBsYWNlbWVudDogZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpLFxuICAgIHZhcmlhdGlvbjogZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCksXG4gICAgcG9wcGVyOiBzdGF0ZS5lbGVtZW50cy5wb3BwZXIsXG4gICAgcG9wcGVyUmVjdDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIGdwdUFjY2VsZXJhdGlvbjogZ3B1QWNjZWxlcmF0aW9uLFxuICAgIGlzRml4ZWQ6IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCdcbiAgfTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLnBvcHBlciwgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMsXG4gICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIGFkYXB0aXZlOiBhZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93ICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMuYXJyb3cgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMuYXJyb3csIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYWRhcHRpdmU6IGZhbHNlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICdkYXRhLXBvcHBlci1wbGFjZW1lbnQnOiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgY29tcHV0ZVN0eWxlcyQxID0ge1xuICBuYW1lOiAnY29tcHV0ZVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnYmVmb3JlV3JpdGUnLFxuICBmbjogY29tcHV0ZVN0eWxlcyxcbiAgZGF0YToge31cbn07XG52YXIgcGFzc2l2ZSA9IHtcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRzY3JvbGwgPSBvcHRpb25zLnNjcm9sbCxcbiAgICAgIHNjcm9sbCA9IF9vcHRpb25zJHNjcm9sbCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHNjcm9sbCxcbiAgICAgIF9vcHRpb25zJHJlc2l6ZSA9IG9wdGlvbnMucmVzaXplLFxuICAgICAgcmVzaXplID0gX29wdGlvbnMkcmVzaXplID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcmVzaXplO1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KHN0YXRlLmVsZW1lbnRzLnBvcHBlcik7XG4gIHZhciBzY3JvbGxQYXJlbnRzID0gW10uY29uY2F0KHN0YXRlLnNjcm9sbFBhcmVudHMucmVmZXJlbmNlLCBzdGF0ZS5zY3JvbGxQYXJlbnRzLnBvcHBlcik7XG5cbiAgaWYgKHNjcm9sbCkge1xuICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICBzY3JvbGxQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChyZXNpemUpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgICAgc2Nyb2xsUGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVzaXplKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgZXZlbnRMaXN0ZW5lcnMgPSB7XG4gIG5hbWU6ICdldmVudExpc3RlbmVycycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogZnVuY3Rpb24gZm4oKSB7fSxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIGRhdGE6IHt9XG59O1xudmFyIGhhc2gkMSA9IHtcbiAgbGVmdDogJ3JpZ2h0JyxcbiAgcmlnaHQ6ICdsZWZ0JyxcbiAgYm90dG9tOiAndG9wJyxcbiAgdG9wOiAnYm90dG9tJ1xufTtcblxuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2gkMVttYXRjaGVkXTtcbiAgfSk7XG59XG5cbnZhciBoYXNoID0ge1xuICBzdGFydDogJ2VuZCcsXG4gIGVuZDogJ3N0YXJ0J1xufTtcblxuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvc3RhcnR8ZW5kL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGwobm9kZSkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KG5vZGUpO1xuICB2YXIgc2Nyb2xsTGVmdCA9IHdpbi5wYWdlWE9mZnNldDtcbiAgdmFyIHNjcm9sbFRvcCA9IHdpbi5wYWdlWU9mZnNldDtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCkge1xuICAvLyBJZiA8aHRtbD4gaGFzIGEgQ1NTIHdpZHRoIGdyZWF0ZXIgdGhhbiB0aGUgdmlld3BvcnQsIHRoZW4gdGhpcyB3aWxsIGJlXG4gIC8vIGluY29ycmVjdCBmb3IgUlRMLlxuICAvLyBQb3BwZXIgMSBpcyBicm9rZW4gaW4gdGhpcyBjYXNlIGFuZCBuZXZlciBoYWQgYSBidWcgcmVwb3J0IHNvIGxldCdzIGFzc3VtZVxuICAvLyBpdCdzIG5vdCBhbiBpc3N1ZS4gSSBkb24ndCB0aGluayBhbnlvbmUgZXZlciBzcGVjaWZpZXMgd2lkdGggb24gPGh0bWw+XG4gIC8vIGFueXdheS5cbiAgLy8gQnJvd3NlcnMgd2hlcmUgdGhlIGxlZnQgc2Nyb2xsYmFyIGRvZXNuJ3QgY2F1c2UgYW4gaXNzdWUgcmVwb3J0IGAwYCBmb3JcbiAgLy8gdGhpcyAoZS5nLiBFZGdlIDIwMTksIElFMTEsIFNhZmFyaSlcbiAgcmV0dXJuIGdldEJvdW5kaW5nQ2xpZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpLmxlZnQgKyBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbn1cblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB2aXN1YWxWaWV3cG9ydCA9IHdpbi52aXN1YWxWaWV3cG9ydDtcbiAgdmFyIHdpZHRoID0gaHRtbC5jbGllbnRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGh0bWwuY2xpZW50SGVpZ2h0O1xuICB2YXIgeCA9IDA7XG4gIHZhciB5ID0gMDsgLy8gTkI6IFRoaXMgaXNuJ3Qgc3VwcG9ydGVkIG9uIGlPUyA8PSAxMi4gSWYgdGhlIGtleWJvYXJkIGlzIG9wZW4sIHRoZSBwb3BwZXJcbiAgLy8gY2FuIGJlIG9ic2N1cmVkIHVuZGVybmVhdGggaXQuXG4gIC8vIEFsc28sIGBodG1sLmNsaWVudEhlaWdodGAgYWRkcyB0aGUgYm90dG9tIGJhciBoZWlnaHQgaW4gU2FmYXJpIGlPUywgZXZlblxuICAvLyBpZiBpdCBpc24ndCBvcGVuLCBzbyBpZiB0aGlzIGlzbid0IGF2YWlsYWJsZSwgdGhlIHBvcHBlciB3aWxsIGJlIGRldGVjdGVkXG4gIC8vIHRvIG92ZXJmbG93IHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbiB0b28gZWFybHkuXG5cbiAgaWYgKHZpc3VhbFZpZXdwb3J0KSB7XG4gICAgd2lkdGggPSB2aXN1YWxWaWV3cG9ydC53aWR0aDtcbiAgICBoZWlnaHQgPSB2aXN1YWxWaWV3cG9ydC5oZWlnaHQ7IC8vIFVzZXMgTGF5b3V0IFZpZXdwb3J0IChsaWtlIENocm9tZTsgU2FmYXJpIGRvZXMgbm90IGN1cnJlbnRseSlcbiAgICAvLyBJbiBDaHJvbWUsIGl0IHJldHVybnMgYSB2YWx1ZSB2ZXJ5IGNsb3NlIHRvIDAgKCsvLSkgYnV0IGNvbnRhaW5zIHJvdW5kaW5nXG4gICAgLy8gZXJyb3JzIGR1ZSB0byBmbG9hdGluZyBwb2ludCBudW1iZXJzLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIHByZWNpc2lvbi5cbiAgICAvLyBTYWZhcmkgcmV0dXJucyBhIG51bWJlciA8PSAwLCB1c3VhbGx5IDwgLTEgd2hlbiBwaW5jaC16b29tZWRcbiAgICAvLyBGZWF0dXJlIGRldGVjdGlvbiBmYWlscyBpbiBtb2JpbGUgZW11bGF0aW9uIG1vZGUgaW4gQ2hyb21lLlxuICAgIC8vIE1hdGguYWJzKHdpbi5pbm5lcldpZHRoIC8gdmlzdWFsVmlld3BvcnQuc2NhbGUgLSB2aXN1YWxWaWV3cG9ydC53aWR0aCkgPFxuICAgIC8vIDAuMDAxXG4gICAgLy8gRmFsbGJhY2sgaGVyZTogXCJOb3QgU2FmYXJpXCIgdXNlckFnZW50XG5cbiAgICBpZiAoIS9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuICAgICAgeSA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSxcbiAgICB5OiB5XG4gIH07XG59IC8vIG9mIHRoZSBgPGh0bWw+YCBhbmQgYDxib2R5PmAgcmVjdCBib3VuZHMgaWYgaG9yaXpvbnRhbGx5IHNjcm9sbGFibGVcblxuXG5mdW5jdGlvbiBnZXREb2N1bWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgd2luU2Nyb2xsID0gZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpO1xuICB2YXIgYm9keSA9IChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keTtcbiAgdmFyIHdpZHRoID0gbWF4KGh0bWwuc2Nyb2xsV2lkdGgsIGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LnNjcm9sbFdpZHRoIDogMCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKTtcbiAgdmFyIGhlaWdodCA9IG1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkgPyBib2R5LnNjcm9sbEhlaWdodCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudEhlaWdodCA6IDApO1xuICB2YXIgeCA9IC13aW5TY3JvbGwuc2Nyb2xsTGVmdCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCk7XG4gIHZhciB5ID0gLXdpblNjcm9sbC5zY3JvbGxUb3A7XG5cbiAgaWYgKGdldENvbXB1dGVkU3R5bGUoYm9keSB8fCBodG1sKS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgeCArPSBtYXgoaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKSAtIHdpZHRoO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzU2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gRmlyZWZveCB3YW50cyB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxuICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLFxuICAgICAgb3ZlcmZsb3cgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdyxcbiAgICAgIG92ZXJmbG93WCA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WCxcbiAgICAgIG92ZXJmbG93WSA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WTtcblxuICByZXR1cm4gL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVuLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KG5vZGUpIHtcbiAgaWYgKFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUobm9kZSkpID49IDApIHtcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgaWYgKGlzSFRNTEVsZW1lbnQobm9kZSkgJiYgaXNTY3JvbGxQYXJlbnQobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShub2RlKSk7XG59XG4vKlxuZ2l2ZW4gYSBET00gZWxlbWVudCwgcmV0dXJuIHRoZSBsaXN0IG9mIGFsbCBzY3JvbGwgcGFyZW50cywgdXAgdGhlIGxpc3Qgb2YgYW5jZXNvcnNcbnVudGlsIHdlIGdldCB0byB0aGUgdG9wIHdpbmRvdyBvYmplY3QuIFRoaXMgbGlzdCBpcyB3aGF0IHdlIGF0dGFjaCBzY3JvbGwgbGlzdGVuZXJzXG50bywgYmVjYXVzZSBpZiBhbnkgb2YgdGhlc2UgcGFyZW50IGVsZW1lbnRzIHNjcm9sbCwgd2UnbGwgbmVlZCB0byByZS1jYWxjdWxhdGUgdGhlXG5yZWZlcmVuY2UgZWxlbWVudCdzIHBvc2l0aW9uLlxuKi9cblxuXG5mdW5jdGlvbiBsaXN0U2Nyb2xsUGFyZW50cyhlbGVtZW50LCBsaXN0KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgaWYgKGxpc3QgPT09IHZvaWQgMCkge1xuICAgIGxpc3QgPSBbXTtcbiAgfVxuXG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCk7XG4gIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQgPT09ICgoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHkpO1xuICB2YXIgd2luID0gZ2V0V2luZG93KHNjcm9sbFBhcmVudCk7XG4gIHZhciB0YXJnZXQgPSBpc0JvZHkgPyBbd2luXS5jb25jYXQod2luLnZpc3VhbFZpZXdwb3J0IHx8IFtdLCBpc1Njcm9sbFBhcmVudChzY3JvbGxQYXJlbnQpID8gc2Nyb2xsUGFyZW50IDogW10pIDogc2Nyb2xsUGFyZW50O1xuICB2YXIgdXBkYXRlZExpc3QgPSBsaXN0LmNvbmNhdCh0YXJnZXQpO1xuICByZXR1cm4gaXNCb2R5ID8gdXBkYXRlZExpc3QgOiAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogaXNCb2R5IHRlbGxzIHVzIHRhcmdldCB3aWxsIGJlIGFuIEhUTUxFbGVtZW50IGhlcmVcbiAgdXBkYXRlZExpc3QuY29uY2F0KGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUodGFyZ2V0KSkpO1xufVxuXG5mdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJlY3QsIHtcbiAgICBsZWZ0OiByZWN0LngsXG4gICAgdG9wOiByZWN0LnksXG4gICAgcmlnaHQ6IHJlY3QueCArIHJlY3Qud2lkdGgsXG4gICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTtcbiAgcmVjdC50b3AgPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xuICByZWN0LmxlZnQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG4gIHJlY3QuYm90dG9tID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC5yaWdodCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3Qud2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LmhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnggPSByZWN0LmxlZnQ7XG4gIHJlY3QueSA9IHJlY3QudG9wO1xuICByZXR1cm4gcmVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50ID09PSB2aWV3cG9ydCA/IHJlY3RUb0NsaWVudFJlY3QoZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQpKSA6IGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgPyBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChjbGlwcGluZ1BhcmVudCkgOiByZWN0VG9DbGllbnRSZWN0KGdldERvY3VtZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpKTtcbn0gLy8gQSBcImNsaXBwaW5nIHBhcmVudFwiIGlzIGFuIG92ZXJmbG93YWJsZSBjb250YWluZXIgd2l0aCB0aGUgY2hhcmFjdGVyaXN0aWMgb2Zcbi8vIGNsaXBwaW5nIChvciBoaWRpbmcpIG92ZXJmbG93aW5nIGVsZW1lbnRzIHdpdGggYSBwb3NpdGlvbiBkaWZmZXJlbnQgZnJvbVxuLy8gYGluaXRpYWxgXG5cblxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIHtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xuICB2YXIgY2FuRXNjYXBlQ2xpcHBpbmcgPSBbJ2Fic29sdXRlJywgJ2ZpeGVkJ10uaW5kZXhPZihnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uKSA+PSAwO1xuICB2YXIgY2xpcHBlckVsZW1lbnQgPSBjYW5Fc2NhcGVDbGlwcGluZyAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpID8gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIDogZWxlbWVudDtcblxuICBpZiAoIWlzRWxlbWVudChjbGlwcGVyRWxlbWVudCkpIHtcbiAgICByZXR1cm4gW107XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzE0MTRcblxuXG4gIHJldHVybiBjbGlwcGluZ1BhcmVudHMuZmlsdGVyKGZ1bmN0aW9uIChjbGlwcGluZ1BhcmVudCkge1xuICAgIHJldHVybiBpc0VsZW1lbnQoY2xpcHBpbmdQYXJlbnQpICYmIGNvbnRhaW5zKGNsaXBwaW5nUGFyZW50LCBjbGlwcGVyRWxlbWVudCkgJiYgZ2V0Tm9kZU5hbWUoY2xpcHBpbmdQYXJlbnQpICE9PSAnYm9keSc7XG4gIH0pO1xufSAvLyBHZXRzIHRoZSBtYXhpbXVtIGFyZWEgdGhhdCB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIGluIGR1ZSB0byBhbnkgbnVtYmVyIG9mXG4vLyBjbGlwcGluZyBwYXJlbnRzXG5cblxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdSZWN0KGVsZW1lbnQsIGJvdW5kYXJ5LCByb290Qm91bmRhcnkpIHtcbiAgdmFyIG1haW5DbGlwcGluZ1BhcmVudHMgPSBib3VuZGFyeSA9PT0gJ2NsaXBwaW5nUGFyZW50cycgPyBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkgOiBbXS5jb25jYXQoYm91bmRhcnkpO1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gW10uY29uY2F0KG1haW5DbGlwcGluZ1BhcmVudHMsIFtyb290Qm91bmRhcnldKTtcbiAgdmFyIGZpcnN0Q2xpcHBpbmdQYXJlbnQgPSBjbGlwcGluZ1BhcmVudHNbMF07XG4gIHZhciBjbGlwcGluZ1JlY3QgPSBjbGlwcGluZ1BhcmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2NSZWN0LCBjbGlwcGluZ1BhcmVudCkge1xuICAgIHZhciByZWN0ID0gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQpO1xuICAgIGFjY1JlY3QudG9wID0gbWF4KHJlY3QudG9wLCBhY2NSZWN0LnRvcCk7XG4gICAgYWNjUmVjdC5yaWdodCA9IG1pbihyZWN0LnJpZ2h0LCBhY2NSZWN0LnJpZ2h0KTtcbiAgICBhY2NSZWN0LmJvdHRvbSA9IG1pbihyZWN0LmJvdHRvbSwgYWNjUmVjdC5ib3R0b20pO1xuICAgIGFjY1JlY3QubGVmdCA9IG1heChyZWN0LmxlZnQsIGFjY1JlY3QubGVmdCk7XG4gICAgcmV0dXJuIGFjY1JlY3Q7XG4gIH0sIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGZpcnN0Q2xpcHBpbmdQYXJlbnQpKTtcbiAgY2xpcHBpbmdSZWN0LndpZHRoID0gY2xpcHBpbmdSZWN0LnJpZ2h0IC0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC5oZWlnaHQgPSBjbGlwcGluZ1JlY3QuYm90dG9tIC0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgY2xpcHBpbmdSZWN0LnggPSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LnkgPSBjbGlwcGluZ1JlY3QudG9wO1xuICByZXR1cm4gY2xpcHBpbmdSZWN0O1xufVxuXG5mdW5jdGlvbiBjb21wdXRlT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciByZWZlcmVuY2UgPSBfcmVmLnJlZmVyZW5jZSxcbiAgICAgIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQgPyBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgdmFyaWF0aW9uID0gcGxhY2VtZW50ID8gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgY29tbW9uWCA9IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoIC8gMiAtIGVsZW1lbnQud2lkdGggLyAyO1xuICB2YXIgY29tbW9uWSA9IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodCAvIDIgLSBlbGVtZW50LmhlaWdodCAvIDI7XG4gIHZhciBvZmZzZXRzO1xuXG4gIHN3aXRjaCAoYmFzZVBsYWNlbWVudCkge1xuICAgIGNhc2UgdG9wOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBlbGVtZW50LmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBib3R0b206XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcmlnaHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBsZWZ0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggLSBlbGVtZW50LndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLngsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55XG4gICAgICB9O1xuICB9XG5cbiAgdmFyIG1haW5BeGlzID0gYmFzZVBsYWNlbWVudCA/IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KSA6IG51bGw7XG5cbiAgaWYgKG1haW5BeGlzICE9IG51bGwpIHtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHN3aXRjaCAodmFyaWF0aW9uKSB7XG4gICAgICBjYXNlIHN0YXJ0OlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdIC0gKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBlbmQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gKyAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvZmZzZXRzO1xufVxuXG5mdW5jdGlvbiBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIF9vcHRpb25zJHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gc3RhdGUucGxhY2VtZW50IDogX29wdGlvbnMkcGxhY2VtZW50LFxuICAgICAgX29wdGlvbnMkYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMkYm91bmRhcnkgPT09IHZvaWQgMCA/IGNsaXBwaW5nUGFyZW50cyA6IF9vcHRpb25zJGJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyB2aWV3cG9ydCA6IF9vcHRpb25zJHJvb3RCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJGVsZW1lbnRDb250ZSA9IF9vcHRpb25zLmVsZW1lbnRDb250ZXh0LFxuICAgICAgZWxlbWVudENvbnRleHQgPSBfb3B0aW9ucyRlbGVtZW50Q29udGUgPT09IHZvaWQgMCA/IHBvcHBlciA6IF9vcHRpb25zJGVsZW1lbnRDb250ZSxcbiAgICAgIF9vcHRpb25zJGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IF9vcHRpb25zJGFsdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMkcGFkZGluZyA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHBhZGRpbmc7XG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbiAgdmFyIGFsdENvbnRleHQgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcmVmZXJlbmNlIDogcG9wcGVyO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1thbHRCb3VuZGFyeSA/IGFsdENvbnRleHQgOiBlbGVtZW50Q29udGV4dF07XG4gIHZhciBjbGlwcGluZ0NsaWVudFJlY3QgPSBnZXRDbGlwcGluZ1JlY3QoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudCA6IGVsZW1lbnQuY29udGV4dEVsZW1lbnQgfHwgZ2V0RG9jdW1lbnRFbGVtZW50KHN0YXRlLmVsZW1lbnRzLnBvcHBlciksIGJvdW5kYXJ5LCByb290Qm91bmRhcnkpO1xuICB2YXIgcmVmZXJlbmNlQ2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChzdGF0ZS5lbGVtZW50cy5yZWZlcmVuY2UpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHJlZmVyZW5jZUNsaWVudFJlY3QsXG4gICAgZWxlbWVudDogcG9wcGVyUmVjdCxcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KTtcbiAgdmFyIHBvcHBlckNsaWVudFJlY3QgPSByZWN0VG9DbGllbnRSZWN0KE9iamVjdC5hc3NpZ24oe30sIHBvcHBlclJlY3QsIHBvcHBlck9mZnNldHMpKTtcbiAgdmFyIGVsZW1lbnRDbGllbnRSZWN0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHBvcHBlckNsaWVudFJlY3QgOiByZWZlcmVuY2VDbGllbnRSZWN0OyAvLyBwb3NpdGl2ZSA9IG92ZXJmbG93aW5nIHRoZSBjbGlwcGluZyByZWN0XG4gIC8vIDAgb3IgbmVnYXRpdmUgPSB3aXRoaW4gdGhlIGNsaXBwaW5nIHJlY3RcblxuICB2YXIgb3ZlcmZsb3dPZmZzZXRzID0ge1xuICAgIHRvcDogY2xpcHBpbmdDbGllbnRSZWN0LnRvcCAtIGVsZW1lbnRDbGllbnRSZWN0LnRvcCArIHBhZGRpbmdPYmplY3QudG9wLFxuICAgIGJvdHRvbTogZWxlbWVudENsaWVudFJlY3QuYm90dG9tIC0gY2xpcHBpbmdDbGllbnRSZWN0LmJvdHRvbSArIHBhZGRpbmdPYmplY3QuYm90dG9tLFxuICAgIGxlZnQ6IGNsaXBwaW5nQ2xpZW50UmVjdC5sZWZ0IC0gZWxlbWVudENsaWVudFJlY3QubGVmdCArIHBhZGRpbmdPYmplY3QubGVmdCxcbiAgICByaWdodDogZWxlbWVudENsaWVudFJlY3QucmlnaHQgLSBjbGlwcGluZ0NsaWVudFJlY3QucmlnaHQgKyBwYWRkaW5nT2JqZWN0LnJpZ2h0XG4gIH07XG4gIHZhciBvZmZzZXREYXRhID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQ7IC8vIE9mZnNldHMgY2FuIGJlIGFwcGxpZWQgb25seSB0byB0aGUgcG9wcGVyIGVsZW1lbnRcblxuICBpZiAoZWxlbWVudENvbnRleHQgPT09IHBvcHBlciAmJiBvZmZzZXREYXRhKSB7XG4gICAgdmFyIG9mZnNldCA9IG9mZnNldERhdGFbcGxhY2VtZW50XTtcbiAgICBPYmplY3Qua2V5cyhvdmVyZmxvd09mZnNldHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG11bHRpcGx5ID0gW3JpZ2h0LCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gMSA6IC0xO1xuICAgICAgdmFyIGF4aXMgPSBbdG9wLCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gJ3knIDogJ3gnO1xuICAgICAgb3ZlcmZsb3dPZmZzZXRzW2tleV0gKz0gb2Zmc2V0W2F4aXNdICogbXVsdGlwbHk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gb3ZlcmZsb3dPZmZzZXRzO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPSBfb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPT09IHZvaWQgMCA/IHBsYWNlbWVudHMgOiBfb3B0aW9ucyRhbGxvd2VkQXV0b1A7XG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KTtcbiAgdmFyIHBsYWNlbWVudHMkMSA9IHZhcmlhdGlvbiA/IGZsaXBWYXJpYXRpb25zID8gdmFyaWF0aW9uUGxhY2VtZW50cyA6IHZhcmlhdGlvblBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHZhcmlhdGlvbjtcbiAgfSkgOiBiYXNlUGxhY2VtZW50cztcbiAgdmFyIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cyQxLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFsbG93ZWRBdXRvUGxhY2VtZW50cy5pbmRleE9mKHBsYWNlbWVudCkgPj0gMDtcbiAgfSk7XG5cbiAgaWYgKGFsbG93ZWRQbGFjZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cyQxO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogVGhlIGBhbGxvd2VkQXV0b1BsYWNlbWVudHNgIG9wdGlvbiBkaWQgbm90IGFsbG93IGFueScsICdwbGFjZW1lbnRzLiBFbnN1cmUgdGhlIGBwbGFjZW1lbnRgIG9wdGlvbiBtYXRjaGVzIHRoZSB2YXJpYXRpb24nLCAnb2YgdGhlIGFsbG93ZWQgcGxhY2VtZW50cy4nLCAnRm9yIGV4YW1wbGUsIFwiYXV0b1wiIGNhbm5vdCBiZSB1c2VkIHRvIGFsbG93IFwiYm90dG9tLXN0YXJ0XCIuJywgJ1VzZSBcImF1dG8tc3RhcnRcIiBpbnN0ZWFkLiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdOiBGbG93IHNlZW1zIHRvIGhhdmUgcHJvYmxlbXMgd2l0aCB0d28gYXJyYXkgdW5pb25zLi4uXG5cblxuICB2YXIgb3ZlcmZsb3dzID0gYWxsb3dlZFBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgfSlbZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpXTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvdmVyZmxvd3MpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dzW2FdIC0gb3ZlcmZsb3dzW2JdO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocGxhY2VtZW50KSB7XG4gIGlmIChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgb3Bwb3NpdGVQbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICByZXR1cm4gW2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCksIG9wcG9zaXRlUGxhY2VtZW50LCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChvcHBvc2l0ZVBsYWNlbWVudCldO1xufVxuXG5mdW5jdGlvbiBmbGlwKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzID0gb3B0aW9ucy5mYWxsYmFja1BsYWNlbWVudHMsXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPSBvcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRmbGlwVmFyaWF0aW8sXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBvcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cztcbiAgdmFyIHByZWZlcnJlZFBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9IGJhc2VQbGFjZW1lbnQgPT09IHByZWZlcnJlZFBsYWNlbWVudDtcbiAgdmFyIGZhbGxiYWNrUGxhY2VtZW50cyA9IHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyB8fCAoaXNCYXNlUGxhY2VtZW50IHx8ICFmbGlwVmFyaWF0aW9ucyA/IFtnZXRPcHBvc2l0ZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpXSA6IGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHByZWZlcnJlZFBsYWNlbWVudCkpO1xuICB2YXIgcGxhY2VtZW50cyA9IFtwcmVmZXJyZWRQbGFjZW1lbnRdLmNvbmNhdChmYWxsYmFja1BsYWNlbWVudHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8gPyBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9uczogZmxpcFZhcmlhdGlvbnMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHM6IGFsbG93ZWRBdXRvUGxhY2VtZW50c1xuICAgIH0pIDogcGxhY2VtZW50KTtcbiAgfSwgW10pO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBjaGVja3NNYXAgPSBuZXcgTWFwKCk7XG4gIHZhciBtYWtlRmFsbGJhY2tDaGVja3MgPSB0cnVlO1xuICB2YXIgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50c1swXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYWNlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGxhY2VtZW50ID0gcGxhY2VtZW50c1tpXTtcblxuICAgIHZhciBfYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgIHZhciBpc1N0YXJ0VmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHN0YXJ0O1xuICAgIHZhciBpc1ZlcnRpY2FsID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKF9iYXNlUGxhY2VtZW50KSA+PSAwO1xuICAgIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuICAgIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pO1xuICAgIHZhciBtYWluVmFyaWF0aW9uU2lkZSA9IGlzVmVydGljYWwgPyBpc1N0YXJ0VmFyaWF0aW9uID8gcmlnaHQgOiBsZWZ0IDogaXNTdGFydFZhcmlhdGlvbiA/IGJvdHRvbSA6IHRvcDtcblxuICAgIGlmIChyZWZlcmVuY2VSZWN0W2xlbl0gPiBwb3BwZXJSZWN0W2xlbl0pIHtcbiAgICAgIG1haW5WYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIH1cblxuICAgIHZhciBhbHRWYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIHZhciBjaGVja3MgPSBbXTtcblxuICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1tfYmFzZVBsYWNlbWVudF0gPD0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbbWFpblZhcmlhdGlvblNpZGVdIDw9IDAsIG92ZXJmbG93W2FsdFZhcmlhdGlvblNpZGVdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja3MuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICByZXR1cm4gY2hlY2s7XG4gICAgfSkpIHtcbiAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgIG1ha2VGYWxsYmFja0NoZWNrcyA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2hlY2tzTWFwLnNldChwbGFjZW1lbnQsIGNoZWNrcyk7XG4gIH1cblxuICBpZiAobWFrZUZhbGxiYWNrQ2hlY2tzKSB7XG4gICAgLy8gYDJgIG1heSBiZSBkZXNpcmVkIGluIHNvbWUgY2FzZXMg4oCTIHJlc2VhcmNoIGxhdGVyXG4gICAgdmFyIG51bWJlck9mQ2hlY2tzID0gZmxpcFZhcmlhdGlvbnMgPyAzIDogMTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKF9pKSB7XG4gICAgICB2YXIgZml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHMuZmluZChmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgICAgIHZhciBjaGVja3MgPSBjaGVja3NNYXAuZ2V0KHBsYWNlbWVudCk7XG5cbiAgICAgICAgaWYgKGNoZWNrcykge1xuICAgICAgICAgIHJldHVybiBjaGVja3Muc2xpY2UoMCwgX2kpLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gZml0dGluZ1BsYWNlbWVudDtcbiAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yICh2YXIgX2kgPSBudW1iZXJPZkNoZWNrczsgX2kgPiAwOyBfaS0tKSB7XG4gICAgICB2YXIgX3JldCA9IF9sb29wKF9pKTtcblxuICAgICAgaWYgKF9yZXQgPT09IFwiYnJlYWtcIikgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLnBsYWNlbWVudCAhPT0gZmlyc3RGaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCA9IHRydWU7XG4gICAgc3RhdGUucGxhY2VtZW50ID0gZmlyc3RGaXR0aW5nUGxhY2VtZW50O1xuICAgIHN0YXRlLnJlc2V0ID0gdHJ1ZTtcbiAgfVxufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIGZsaXAkMSA9IHtcbiAgbmFtZTogJ2ZsaXAnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogZmxpcCxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXSxcbiAgZGF0YToge1xuICAgIF9za2lwOiBmYWxzZVxuICB9XG59O1xuXG5mdW5jdGlvbiBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdCwgcHJldmVudGVkT2Zmc2V0cykge1xuICBpZiAocHJldmVudGVkT2Zmc2V0cyA9PT0gdm9pZCAwKSB7XG4gICAgcHJldmVudGVkT2Zmc2V0cyA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9wOiBvdmVyZmxvdy50b3AgLSByZWN0LmhlaWdodCAtIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICByaWdodDogb3ZlcmZsb3cucmlnaHQgLSByZWN0LndpZHRoICsgcHJldmVudGVkT2Zmc2V0cy54LFxuICAgIGJvdHRvbTogb3ZlcmZsb3cuYm90dG9tIC0gcmVjdC5oZWlnaHQgKyBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgbGVmdDogb3ZlcmZsb3cubGVmdCAtIHJlY3Qud2lkdGggLSBwcmV2ZW50ZWRPZmZzZXRzLnhcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKG92ZXJmbG93KSB7XG4gIHJldHVybiBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5zb21lKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93W3NpZGVdID49IDA7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoaWRlKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHByZXZlbnRlZE9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdztcbiAgdmFyIHJlZmVyZW5jZU92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBlbGVtZW50Q29udGV4dDogJ3JlZmVyZW5jZSdcbiAgfSk7XG4gIHZhciBwb3BwZXJBbHRPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYWx0Qm91bmRhcnk6IHRydWVcbiAgfSk7XG4gIHZhciByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhyZWZlcmVuY2VPdmVyZmxvdywgcmVmZXJlbmNlUmVjdCk7XG4gIHZhciBwb3BwZXJFc2NhcGVPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocG9wcGVyQWx0T3ZlcmZsb3csIHBvcHBlclJlY3QsIHByZXZlbnRlZE9mZnNldHMpO1xuICB2YXIgaXNSZWZlcmVuY2VIaWRkZW4gPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzKTtcbiAgdmFyIGhhc1BvcHBlckVzY2FwZWQgPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocG9wcGVyRXNjYXBlT2Zmc2V0cyk7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSB7XG4gICAgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzOiByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMsXG4gICAgcG9wcGVyRXNjYXBlT2Zmc2V0czogcG9wcGVyRXNjYXBlT2Zmc2V0cyxcbiAgICBpc1JlZmVyZW5jZUhpZGRlbjogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgaGFzUG9wcGVyRXNjYXBlZDogaGFzUG9wcGVyRXNjYXBlZFxuICB9O1xuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXJlZmVyZW5jZS1oaWRkZW4nOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICAnZGF0YS1wb3BwZXItZXNjYXBlZCc6IGhhc1BvcHBlckVzY2FwZWRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgaGlkZSQxID0ge1xuICBuYW1lOiAnaGlkZScsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J10sXG4gIGZuOiBoaWRlXG59O1xuXG5mdW5jdGlvbiBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHJlY3RzLCBvZmZzZXQpIHtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHZhciBpbnZlcnREaXN0YW5jZSA9IFtsZWZ0LCB0b3BdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IC0xIDogMTtcblxuICB2YXIgX3JlZiA9IHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicgPyBvZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgcmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KSkgOiBvZmZzZXQsXG4gICAgICBza2lkZGluZyA9IF9yZWZbMF0sXG4gICAgICBkaXN0YW5jZSA9IF9yZWZbMV07XG5cbiAgc2tpZGRpbmcgPSBza2lkZGluZyB8fCAwO1xuICBkaXN0YW5jZSA9IChkaXN0YW5jZSB8fCAwKSAqIGludmVydERpc3RhbmNlO1xuICByZXR1cm4gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyB7XG4gICAgeDogZGlzdGFuY2UsXG4gICAgeTogc2tpZGRpbmdcbiAgfSA6IHtcbiAgICB4OiBza2lkZGluZyxcbiAgICB5OiBkaXN0YW5jZVxuICB9O1xufVxuXG5mdW5jdGlvbiBvZmZzZXQoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmMi5uYW1lO1xuICB2YXIgX29wdGlvbnMkb2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQsXG4gICAgICBvZmZzZXQgPSBfb3B0aW9ucyRvZmZzZXQgPT09IHZvaWQgMCA/IFswLCAwXSA6IF9vcHRpb25zJG9mZnNldDtcbiAgdmFyIGRhdGEgPSBwbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgc3RhdGUucmVjdHMsIG9mZnNldCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICB2YXIgX2RhdGEkc3RhdGUkcGxhY2VtZW50ID0gZGF0YVtzdGF0ZS5wbGFjZW1lbnRdLFxuICAgICAgeCA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC54LFxuICAgICAgeSA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC55O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy54ICs9IHg7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnkgKz0geTtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIG9mZnNldCQxID0ge1xuICBuYW1lOiAnb2Zmc2V0JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICBmbjogb2Zmc2V0XG59O1xuXG5mdW5jdGlvbiBwb3BwZXJPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7IC8vIE9mZnNldHMgYXJlIHRoZSBhY3R1YWwgcG9zaXRpb24gdGhlIHBvcHBlciBuZWVkcyB0byBoYXZlIHRvIGJlXG4gIC8vIHByb3Blcmx5IHBvc2l0aW9uZWQgbmVhciBpdHMgcmVmZXJlbmNlIGVsZW1lbnRcbiAgLy8gVGhpcyBpcyB0aGUgbW9zdCBiYXNpYyBwbGFjZW1lbnQsIGFuZCB3aWxsIGJlIGFkanVzdGVkIGJ5XG4gIC8vIHRoZSBtb2RpZmllcnMgaW4gdGhlIG5leHQgc3RlcFxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiBzdGF0ZS5yZWN0cy5yZWZlcmVuY2UsXG4gICAgZWxlbWVudDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIHBvcHBlck9mZnNldHMkMSA9IHtcbiAgbmFtZTogJ3BvcHBlck9mZnNldHMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3JlYWQnLFxuICBmbjogcG9wcGVyT2Zmc2V0cyxcbiAgZGF0YToge31cbn07XG5cbmZ1bmN0aW9uIGdldEFsdEF4aXMoYXhpcykge1xuICByZXR1cm4gYXhpcyA9PT0gJ3gnID8gJ3knIDogJ3gnO1xufVxuXG5mdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEF4aXMsXG4gICAgICBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcsXG4gICAgICBfb3B0aW9ucyR0ZXRoZXIgPSBvcHRpb25zLnRldGhlcixcbiAgICAgIHRldGhlciA9IF9vcHRpb25zJHRldGhlciA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHRldGhlcixcbiAgICAgIF9vcHRpb25zJHRldGhlck9mZnNldCA9IG9wdGlvbnMudGV0aGVyT2Zmc2V0LFxuICAgICAgdGV0aGVyT2Zmc2V0ID0gX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkdGV0aGVyT2Zmc2V0O1xuICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeVxuICB9KTtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24oc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9ICF2YXJpYXRpb247XG4gIHZhciBtYWluQXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgdmFyIGFsdEF4aXMgPSBnZXRBbHRBeGlzKG1haW5BeGlzKTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHRldGhlck9mZnNldFZhbHVlID0gdHlwZW9mIHRldGhlck9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IHRldGhlck9mZnNldChPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHRldGhlck9mZnNldDtcbiAgdmFyIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXRWYWx1ZSA9PT0gJ251bWJlcicgPyB7XG4gICAgbWFpbkF4aXM6IHRldGhlck9mZnNldFZhbHVlLFxuICAgIGFsdEF4aXM6IHRldGhlck9mZnNldFZhbHVlXG4gIH0gOiBPYmplY3QuYXNzaWduKHtcbiAgICBtYWluQXhpczogMCxcbiAgICBhbHRBeGlzOiAwXG4gIH0sIHRldGhlck9mZnNldFZhbHVlKTtcbiAgdmFyIG9mZnNldE1vZGlmaWVyU3RhdGUgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldCA/IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0W3N0YXRlLnBsYWNlbWVudF0gOiBudWxsO1xuICB2YXIgZGF0YSA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQ7XG5cbiAgICB2YXIgbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgICB2YXIgYWx0U2lkZSA9IG1haW5BeGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICB2YXIgb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc107XG4gICAgdmFyIG1pbiQxID0gb2Zmc2V0ICsgb3ZlcmZsb3dbbWFpblNpZGVdO1xuICAgIHZhciBtYXgkMSA9IG9mZnNldCAtIG92ZXJmbG93W2FsdFNpZGVdO1xuICAgIHZhciBhZGRpdGl2ZSA9IHRldGhlciA/IC1wb3BwZXJSZWN0W2xlbl0gLyAyIDogMDtcbiAgICB2YXIgbWluTGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IHJlZmVyZW5jZVJlY3RbbGVuXSA6IHBvcHBlclJlY3RbbGVuXTtcbiAgICB2YXIgbWF4TGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IC1wb3BwZXJSZWN0W2xlbl0gOiAtcmVmZXJlbmNlUmVjdFtsZW5dOyAvLyBXZSBuZWVkIHRvIGluY2x1ZGUgdGhlIGFycm93IGluIHRoZSBjYWxjdWxhdGlvbiBzbyB0aGUgYXJyb3cgZG9lc24ndCBnb1xuICAgIC8vIG91dHNpZGUgdGhlIHJlZmVyZW5jZSBib3VuZHNcblxuICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgICB2YXIgYXJyb3dSZWN0ID0gdGV0aGVyICYmIGFycm93RWxlbWVudCA/IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KSA6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nT2JqZWN0ID0gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddID8gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddLnBhZGRpbmcgOiBnZXRGcmVzaFNpZGVPYmplY3QoKTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWluID0gYXJyb3dQYWRkaW5nT2JqZWN0W21haW5TaWRlXTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWF4ID0gYXJyb3dQYWRkaW5nT2JqZWN0W2FsdFNpZGVdOyAvLyBJZiB0aGUgcmVmZXJlbmNlIGxlbmd0aCBpcyBzbWFsbGVyIHRoYW4gdGhlIGFycm93IGxlbmd0aCwgd2UgZG9uJ3Qgd2FudFxuICAgIC8vIHRvIGluY2x1ZGUgaXRzIGZ1bGwgc2l6ZSBpbiB0aGUgY2FsY3VsYXRpb24uIElmIHRoZSByZWZlcmVuY2UgaXMgc21hbGxcbiAgICAvLyBhbmQgbmVhciB0aGUgZWRnZSBvZiBhIGJvdW5kYXJ5LCB0aGUgcG9wcGVyIGNhbiBvdmVyZmxvdyBldmVuIGlmIHRoZVxuICAgIC8vIHJlZmVyZW5jZSBpcyBub3Qgb3ZlcmZsb3dpbmcgYXMgd2VsbCAoZS5nLiB2aXJ0dWFsIGVsZW1lbnRzIHdpdGggbm9cbiAgICAvLyB3aWR0aCBvciBoZWlnaHQpXG5cbiAgICB2YXIgYXJyb3dMZW4gPSB3aXRoaW4oMCwgcmVmZXJlbmNlUmVjdFtsZW5dLCBhcnJvd1JlY3RbbGVuXSk7XG4gICAgdmFyIG1pbk9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IHJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgLSBhZGRpdGl2ZSAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzIDogbWluTGVuIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXM7XG4gICAgdmFyIG1heE9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IC1yZWZlcmVuY2VSZWN0W2xlbl0gLyAyICsgYWRkaXRpdmUgKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcyA6IG1heExlbiArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzO1xuICAgIHZhciBhcnJvd09mZnNldFBhcmVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93ICYmIGdldE9mZnNldFBhcmVudChzdGF0ZS5lbGVtZW50cy5hcnJvdyk7XG4gICAgdmFyIGNsaWVudE9mZnNldCA9IGFycm93T2Zmc2V0UGFyZW50ID8gbWFpbkF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFRvcCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50TGVmdCB8fCAwIDogMDtcbiAgICB2YXIgb2Zmc2V0TW9kaWZpZXJWYWx1ZSA9IChfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQgPSBvZmZzZXRNb2RpZmllclN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBvZmZzZXRNb2RpZmllclN0YXRlW21haW5BeGlzXSkgIT0gbnVsbCA/IF9vZmZzZXRNb2RpZmllclN0YXRlJCA6IDA7XG4gICAgdmFyIHRldGhlck1pbiA9IG9mZnNldCArIG1pbk9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWUgLSBjbGllbnRPZmZzZXQ7XG4gICAgdmFyIHRldGhlck1heCA9IG9mZnNldCArIG1heE9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWU7XG4gICAgdmFyIHByZXZlbnRlZE9mZnNldCA9IHdpdGhpbih0ZXRoZXIgPyBtaW4obWluJDEsIHRldGhlck1pbikgOiBtaW4kMSwgb2Zmc2V0LCB0ZXRoZXIgPyBtYXgobWF4JDEsIHRldGhlck1heCkgOiBtYXgkMSk7XG4gICAgcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQ7XG4gICAgZGF0YVttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQgLSBvZmZzZXQ7XG4gIH1cblxuICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgdmFyIF9vZmZzZXRNb2RpZmllclN0YXRlJDI7XG5cbiAgICB2YXIgX21haW5TaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IHRvcCA6IGxlZnQ7XG5cbiAgICB2YXIgX2FsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gYm90dG9tIDogcmlnaHQ7XG5cbiAgICB2YXIgX29mZnNldCA9IHBvcHBlck9mZnNldHNbYWx0QXhpc107XG5cbiAgICB2YXIgX2xlbiA9IGFsdEF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHZhciBfbWluID0gX29mZnNldCArIG92ZXJmbG93W19tYWluU2lkZV07XG5cbiAgICB2YXIgX21heCA9IF9vZmZzZXQgLSBvdmVyZmxvd1tfYWx0U2lkZV07XG5cbiAgICB2YXIgaXNPcmlnaW5TaWRlID0gW3RvcCwgbGVmdF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgICB2YXIgX29mZnNldE1vZGlmaWVyVmFsdWUgPSAoX29mZnNldE1vZGlmaWVyU3RhdGUkMiA9IG9mZnNldE1vZGlmaWVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IG9mZnNldE1vZGlmaWVyU3RhdGVbYWx0QXhpc10pICE9IG51bGwgPyBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyIDogMDtcblxuICAgIHZhciBfdGV0aGVyTWluID0gaXNPcmlnaW5TaWRlID8gX21pbiA6IF9vZmZzZXQgLSByZWZlcmVuY2VSZWN0W19sZW5dIC0gcG9wcGVyUmVjdFtfbGVuXSAtIF9vZmZzZXRNb2RpZmllclZhbHVlICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLmFsdEF4aXM7XG5cbiAgICB2YXIgX3RldGhlck1heCA9IGlzT3JpZ2luU2lkZSA/IF9vZmZzZXQgKyByZWZlcmVuY2VSZWN0W19sZW5dICsgcG9wcGVyUmVjdFtfbGVuXSAtIF9vZmZzZXRNb2RpZmllclZhbHVlIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLmFsdEF4aXMgOiBfbWF4O1xuXG4gICAgdmFyIF9wcmV2ZW50ZWRPZmZzZXQgPSB0ZXRoZXIgJiYgaXNPcmlnaW5TaWRlID8gd2l0aGluTWF4Q2xhbXAoX3RldGhlck1pbiwgX29mZnNldCwgX3RldGhlck1heCkgOiB3aXRoaW4odGV0aGVyID8gX3RldGhlck1pbiA6IF9taW4sIF9vZmZzZXQsIHRldGhlciA/IF90ZXRoZXJNYXggOiBfbWF4KTtcblxuICAgIHBvcHBlck9mZnNldHNbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0O1xuICAgIGRhdGFbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0IC0gX29mZnNldDtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIHByZXZlbnRPdmVyZmxvdyQxID0ge1xuICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXVxufTtcblxuZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRTY3JvbGwoZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsVG9wXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldE5vZGVTY3JvbGwobm9kZSkge1xuICBpZiAobm9kZSA9PT0gZ2V0V2luZG93KG5vZGUpIHx8ICFpc0hUTUxFbGVtZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbChub2RlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRTY3JvbGwobm9kZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNFbGVtZW50U2NhbGVkKGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgc2NhbGVYID0gcm91bmQocmVjdC53aWR0aCkgLyBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDE7XG4gIHZhciBzY2FsZVkgPSByb3VuZChyZWN0LmhlaWdodCkgLyBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAxO1xuICByZXR1cm4gc2NhbGVYICE9PSAxIHx8IHNjYWxlWSAhPT0gMTtcbn0gLy8gUmV0dXJucyB0aGUgY29tcG9zaXRlIHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LlxuLy8gQ29tcG9zaXRlIG1lYW5zIGl0IHRha2VzIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zIGFzIHdlbGwgYXMgbGF5b3V0LlxuXG5cbmZ1bmN0aW9uIGdldENvbXBvc2l0ZVJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudCwgaXNGaXhlZCkge1xuICBpZiAoaXNGaXhlZCA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgb2Zmc2V0UGFyZW50SXNTY2FsZWQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgaXNFbGVtZW50U2NhbGVkKG9mZnNldFBhcmVudCk7XG4gIHZhciBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudElzU2NhbGVkKTtcbiAgdmFyIHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICB2YXIgb2Zmc2V0cyA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgfHwgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEwNzhcbiAgICBpc1Njcm9sbFBhcmVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgb2Zmc2V0cyA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQsIHRydWUpO1xuICAgICAgb2Zmc2V0cy54ICs9IG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgb2Zmc2V0cy55ICs9IG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54LFxuICAgIHk6IHJlY3QudG9wICsgc2Nyb2xsLnNjcm9sbFRvcCAtIG9mZnNldHMueSxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gIH07XG59XG5cbmZ1bmN0aW9uIG9yZGVyKG1vZGlmaWVycykge1xuICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuICB2YXIgdmlzaXRlZCA9IG5ldyBTZXQoKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBtYXAuc2V0KG1vZGlmaWVyLm5hbWUsIG1vZGlmaWVyKTtcbiAgfSk7IC8vIE9uIHZpc2l0aW5nIG9iamVjdCwgY2hlY2sgZm9yIGl0cyBkZXBlbmRlbmNpZXMgYW5kIHZpc2l0IHRoZW0gcmVjdXJzaXZlbHlcblxuICBmdW5jdGlvbiBzb3J0KG1vZGlmaWVyKSB7XG4gICAgdmlzaXRlZC5hZGQobW9kaWZpZXIubmFtZSk7XG4gICAgdmFyIHJlcXVpcmVzID0gW10uY29uY2F0KG1vZGlmaWVyLnJlcXVpcmVzIHx8IFtdLCBtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzIHx8IFtdKTtcbiAgICByZXF1aXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChkZXApIHtcbiAgICAgIGlmICghdmlzaXRlZC5oYXMoZGVwKSkge1xuICAgICAgICB2YXIgZGVwTW9kaWZpZXIgPSBtYXAuZ2V0KGRlcCk7XG5cbiAgICAgICAgaWYgKGRlcE1vZGlmaWVyKSB7XG4gICAgICAgICAgc29ydChkZXBNb2RpZmllcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXN1bHQucHVzaChtb2RpZmllcik7XG4gIH1cblxuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBpZiAoIXZpc2l0ZWQuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG4gICAgICAvLyBjaGVjayBmb3IgdmlzaXRlZCBvYmplY3RcbiAgICAgIHNvcnQobW9kaWZpZXIpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG9yZGVyTW9kaWZpZXJzKG1vZGlmaWVycykge1xuICAvLyBvcmRlciBiYXNlZCBvbiBkZXBlbmRlbmNpZXNcbiAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcihtb2RpZmllcnMpOyAvLyBvcmRlciBiYXNlZCBvbiBwaGFzZVxuXG4gIHJldHVybiBtb2RpZmllclBoYXNlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGhhc2UpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgIHJldHVybiBtb2RpZmllci5waGFzZSA9PT0gcGhhc2U7XG4gICAgfSkpO1xuICB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZuKSB7XG4gIHZhciBwZW5kaW5nO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghcGVuZGluZykge1xuICAgICAgcGVuZGluZyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBlbmRpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgcmVzb2x2ZShmbigpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGVuZGluZztcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0KHN0cikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gW10uY29uY2F0KGFyZ3MpLnJlZHVjZShmdW5jdGlvbiAocCwgYykge1xuICAgIHJldHVybiBwLnJlcGxhY2UoLyVzLywgYyk7XG4gIH0sIHN0cik7XG59XG5cbnZhciBJTlZBTElEX01PRElGSUVSX0VSUk9SID0gJ1BvcHBlcjogbW9kaWZpZXIgXCIlc1wiIHByb3ZpZGVkIGFuIGludmFsaWQgJXMgcHJvcGVydHksIGV4cGVjdGVkICVzIGJ1dCBnb3QgJXMnO1xudmFyIE1JU1NJTkdfREVQRU5ERU5DWV9FUlJPUiA9ICdQb3BwZXI6IG1vZGlmaWVyIFwiJXNcIiByZXF1aXJlcyBcIiVzXCIsIGJ1dCBcIiVzXCIgbW9kaWZpZXIgaXMgbm90IGF2YWlsYWJsZSc7XG52YXIgVkFMSURfUFJPUEVSVElFUyA9IFsnbmFtZScsICdlbmFibGVkJywgJ3BoYXNlJywgJ2ZuJywgJ2VmZmVjdCcsICdyZXF1aXJlcycsICdvcHRpb25zJ107XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTW9kaWZpZXJzKG1vZGlmaWVycykge1xuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBbXS5jb25jYXQoT2JqZWN0LmtleXMobW9kaWZpZXIpLCBWQUxJRF9QUk9QRVJUSUVTKSAvLyBJRTExLWNvbXBhdGlibGUgcmVwbGFjZW1lbnQgZm9yIGBuZXcgU2V0KGl0ZXJhYmxlKWBcbiAgICAuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIHNlbGYpIHtcbiAgICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgJ25hbWUnOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIubmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIFN0cmluZyhtb2RpZmllci5uYW1lKSwgJ1wibmFtZVwiJywgJ1wic3RyaW5nXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5uYW1lKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZW5hYmxlZCc6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5lbmFibGVkICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcImVuYWJsZWRcIicsICdcImJvb2xlYW5cIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLmVuYWJsZWQpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdwaGFzZSc6XG4gICAgICAgICAgaWYgKG1vZGlmaWVyUGhhc2VzLmluZGV4T2YobW9kaWZpZXIucGhhc2UpIDwgMCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wicGhhc2VcIicsIFwiZWl0aGVyIFwiICsgbW9kaWZpZXJQaGFzZXMuam9pbignLCAnKSwgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIucGhhc2UpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdmbic6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5mbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wiZm5cIicsICdcImZ1bmN0aW9uXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5mbikgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2VmZmVjdCc6XG4gICAgICAgICAgaWYgKG1vZGlmaWVyLmVmZmVjdCAhPSBudWxsICYmIHR5cGVvZiBtb2RpZmllci5lZmZlY3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcImVmZmVjdFwiJywgJ1wiZnVuY3Rpb25cIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLmZuKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmVxdWlyZXMnOlxuICAgICAgICAgIGlmIChtb2RpZmllci5yZXF1aXJlcyAhPSBudWxsICYmICFBcnJheS5pc0FycmF5KG1vZGlmaWVyLnJlcXVpcmVzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wicmVxdWlyZXNcIicsICdcImFycmF5XCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5yZXF1aXJlcykgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JlcXVpcmVzSWZFeGlzdHMnOlxuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wicmVxdWlyZXNJZkV4aXN0c1wiJywgJ1wiYXJyYXlcIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdvcHRpb25zJzpcbiAgICAgICAgY2FzZSAnZGF0YSc6XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUG9wcGVySlM6IGFuIGludmFsaWQgcHJvcGVydHkgaGFzIGJlZW4gcHJvdmlkZWQgdG8gdGhlIFxcXCJcIiArIG1vZGlmaWVyLm5hbWUgKyBcIlxcXCIgbW9kaWZpZXIsIHZhbGlkIHByb3BlcnRpZXMgYXJlIFwiICsgVkFMSURfUFJPUEVSVElFUy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlxcXCJcIiArIHMgKyBcIlxcXCJcIjtcbiAgICAgICAgICB9KS5qb2luKCcsICcpICsgXCI7IGJ1dCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgd2FzIHByb3ZpZGVkLlwiKTtcbiAgICAgIH1cblxuICAgICAgbW9kaWZpZXIucmVxdWlyZXMgJiYgbW9kaWZpZXIucmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAocmVxdWlyZW1lbnQpIHtcbiAgICAgICAgaWYgKG1vZGlmaWVycy5maW5kKGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgICByZXR1cm4gbW9kLm5hbWUgPT09IHJlcXVpcmVtZW50O1xuICAgICAgICB9KSA9PSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoTUlTU0lOR19ERVBFTkRFTkNZX0VSUk9SLCBTdHJpbmcobW9kaWZpZXIubmFtZSksIHJlcXVpcmVtZW50LCByZXF1aXJlbWVudCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVuaXF1ZUJ5KGFyciwgZm4pIHtcbiAgdmFyIGlkZW50aWZpZXJzID0gbmV3IFNldCgpO1xuICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciBpZGVudGlmaWVyID0gZm4oaXRlbSk7XG5cbiAgICBpZiAoIWlkZW50aWZpZXJzLmhhcyhpZGVudGlmaWVyKSkge1xuICAgICAgaWRlbnRpZmllcnMuYWRkKGlkZW50aWZpZXIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VCeU5hbWUobW9kaWZpZXJzKSB7XG4gIHZhciBtZXJnZWQgPSBtb2RpZmllcnMucmVkdWNlKGZ1bmN0aW9uIChtZXJnZWQsIGN1cnJlbnQpIHtcbiAgICB2YXIgZXhpc3RpbmcgPSBtZXJnZWRbY3VycmVudC5uYW1lXTtcbiAgICBtZXJnZWRbY3VycmVudC5uYW1lXSA9IGV4aXN0aW5nID8gT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcsIGN1cnJlbnQsIHtcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLm9wdGlvbnMsIGN1cnJlbnQub3B0aW9ucyksXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5kYXRhLCBjdXJyZW50LmRhdGEpXG4gICAgfSkgOiBjdXJyZW50O1xuICAgIHJldHVybiBtZXJnZWQ7XG4gIH0sIHt9KTsgLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IE9iamVjdC52YWx1ZXNcblxuICByZXR1cm4gT2JqZWN0LmtleXMobWVyZ2VkKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBtZXJnZWRba2V5XTtcbiAgfSk7XG59XG5cbnZhciBJTlZBTElEX0VMRU1FTlRfRVJST1IgPSAnUG9wcGVyOiBJbnZhbGlkIHJlZmVyZW5jZSBvciBwb3BwZXIgYXJndW1lbnQgcHJvdmlkZWQuIFRoZXkgbXVzdCBiZSBlaXRoZXIgYSBET00gZWxlbWVudCBvciB2aXJ0dWFsIGVsZW1lbnQuJztcbnZhciBJTkZJTklURV9MT09QX0VSUk9SID0gJ1BvcHBlcjogQW4gaW5maW5pdGUgbG9vcCBpbiB0aGUgbW9kaWZpZXJzIGN5Y2xlIGhhcyBiZWVuIGRldGVjdGVkISBUaGUgY3ljbGUgaGFzIGJlZW4gaW50ZXJydXB0ZWQgdG8gcHJldmVudCBhIGJyb3dzZXIgY3Jhc2guJztcbnZhciBERUZBVUxUX09QVElPTlMgPSB7XG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gIG1vZGlmaWVyczogW10sXG4gIHN0cmF0ZWd5OiAnYWJzb2x1dGUnXG59O1xuXG5mdW5jdGlvbiBhcmVWYWxpZEVsZW1lbnRzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuICFhcmdzLnNvbWUoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gIShlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwb3BwZXJHZW5lcmF0b3IoZ2VuZXJhdG9yT3B0aW9ucykge1xuICBpZiAoZ2VuZXJhdG9yT3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgZ2VuZXJhdG9yT3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9nZW5lcmF0b3JPcHRpb25zID0gZ2VuZXJhdG9yT3B0aW9ucyxcbiAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRNb2RpZmllcnMsXG4gICAgICBkZWZhdWx0TW9kaWZpZXJzID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmID09PSB2b2lkIDAgPyBbXSA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZixcbiAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIGRlZmF1bHRPcHRpb25zID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9PT0gdm9pZCAwID8gREVGQVVMVF9PUFRJT05TIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmMjtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZVBvcHBlcihyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcbiAgICB9XG5cbiAgICB2YXIgc3RhdGUgPSB7XG4gICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgb3JkZXJlZE1vZGlmaWVyczogW10sXG4gICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMsIGRlZmF1bHRPcHRpb25zKSxcbiAgICAgIG1vZGlmaWVyc0RhdGE6IHt9LFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgcmVmZXJlbmNlOiByZWZlcmVuY2UsXG4gICAgICAgIHBvcHBlcjogcG9wcGVyXG4gICAgICB9LFxuICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfTtcbiAgICB2YXIgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIHZhciBpc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHZhciBpbnN0YW5jZSA9IHtcbiAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgIHNldE9wdGlvbnM6IGZ1bmN0aW9uIHNldE9wdGlvbnMoc2V0T3B0aW9uc0FjdGlvbikge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzZXRPcHRpb25zQWN0aW9uID09PSAnZnVuY3Rpb24nID8gc2V0T3B0aW9uc0FjdGlvbihzdGF0ZS5vcHRpb25zKSA6IHNldE9wdGlvbnNBY3Rpb247XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgc3RhdGUub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBzdGF0ZS5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGlzRWxlbWVudChyZWZlcmVuY2UpID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlKSA6IHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCkgOiBbXSxcbiAgICAgICAgICBwb3BwZXI6IGxpc3RTY3JvbGxQYXJlbnRzKHBvcHBlcilcbiAgICAgICAgfTsgLy8gT3JkZXJzIHRoZSBtb2RpZmllcnMgYmFzZWQgb24gdGhlaXIgZGVwZW5kZW5jaWVzIGFuZCBgcGhhc2VgXG4gICAgICAgIC8vIHByb3BlcnRpZXNcblxuICAgICAgICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyTW9kaWZpZXJzKG1lcmdlQnlOYW1lKFtdLmNvbmNhdChkZWZhdWx0TW9kaWZpZXJzLCBzdGF0ZS5vcHRpb25zLm1vZGlmaWVycykpKTsgLy8gU3RyaXAgb3V0IGRpc2FibGVkIG1vZGlmaWVyc1xuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBtLmVuYWJsZWQ7XG4gICAgICAgIH0pOyAvLyBWYWxpZGF0ZSB0aGUgcHJvdmlkZWQgbW9kaWZpZXJzIHNvIHRoYXQgdGhlIGNvbnN1bWVyIHdpbGwgZ2V0IHdhcm5lZFxuICAgICAgICAvLyBpZiBvbmUgb2YgdGhlIG1vZGlmaWVycyBpcyBpbnZhbGlkIGZvciBhbnkgcmVhc29uXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgIHZhciBtb2RpZmllcnMgPSB1bmlxdWVCeShbXS5jb25jYXQob3JkZXJlZE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBfcmVmLm5hbWU7XG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YWxpZGF0ZU1vZGlmaWVycyhtb2RpZmllcnMpO1xuXG4gICAgICAgICAgaWYgKGdldEJhc2VQbGFjZW1lbnQoc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgICAgICAgICB2YXIgZmxpcE1vZGlmaWVyID0gc3RhdGUub3JkZXJlZE1vZGlmaWVycy5maW5kKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgICAgICB2YXIgbmFtZSA9IF9yZWYyLm5hbWU7XG4gICAgICAgICAgICAgIHJldHVybiBuYW1lID09PSAnZmxpcCc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFmbGlwTW9kaWZpZXIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhdXRvXCIgcGxhY2VtZW50cyByZXF1aXJlIHRoZSBcImZsaXBcIiBtb2RpZmllciBiZScsICdwcmVzZW50IGFuZCBlbmFibGVkIHRvIHdvcmsuJ10uam9pbignICcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHBvcHBlciksXG4gICAgICAgICAgICAgIG1hcmdpblRvcCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpblRvcCxcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5SaWdodCxcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luQm90dG9tLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0ID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luTGVmdDsgLy8gV2Ugbm8gbG9uZ2VyIHRha2UgaW50byBhY2NvdW50IGBtYXJnaW5zYCBvbiB0aGUgcG9wcGVyLCBhbmQgaXQgY2FuXG4gICAgICAgICAgLy8gY2F1c2UgYnVncyB3aXRoIHBvc2l0aW9uaW5nLCBzbyB3ZSdsbCB3YXJuIHRoZSBjb25zdW1lclxuXG5cbiAgICAgICAgICBpZiAoW21hcmdpblRvcCwgbWFyZ2luUmlnaHQsIG1hcmdpbkJvdHRvbSwgbWFyZ2luTGVmdF0uc29tZShmdW5jdGlvbiAobWFyZ2luKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChtYXJnaW4pO1xuICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oWydQb3BwZXI6IENTUyBcIm1hcmdpblwiIHN0eWxlcyBjYW5ub3QgYmUgdXNlZCB0byBhcHBseSBwYWRkaW5nJywgJ2JldHdlZW4gdGhlIHBvcHBlciBhbmQgaXRzIHJlZmVyZW5jZSBlbGVtZW50IG9yIGJvdW5kYXJ5LicsICdUbyByZXBsaWNhdGUgbWFyZ2luLCB1c2UgdGhlIGBvZmZzZXRgIG1vZGlmaWVyLCBhcyB3ZWxsIGFzJywgJ3RoZSBgcGFkZGluZ2Agb3B0aW9uIGluIHRoZSBgcHJldmVudE92ZXJmbG93YCBhbmQgYGZsaXBgJywgJ21vZGlmaWVycy4nXS5qb2luKCcgJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJ1bk1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UudXBkYXRlKCk7XG4gICAgICB9LFxuICAgICAgLy8gU3luYyB1cGRhdGUg4oCTIGl0IHdpbGwgYWx3YXlzIGJlIGV4ZWN1dGVkLCBldmVuIGlmIG5vdCBuZWNlc3NhcnkuIFRoaXNcbiAgICAgIC8vIGlzIHVzZWZ1bCBmb3IgbG93IGZyZXF1ZW5jeSB1cGRhdGVzIHdoZXJlIHN5bmMgYmVoYXZpb3Igc2ltcGxpZmllcyB0aGVcbiAgICAgIC8vIGxvZ2ljLlxuICAgICAgLy8gRm9yIGhpZ2ggZnJlcXVlbmN5IHVwZGF0ZXMgKGUuZy4gYHJlc2l6ZWAgYW5kIGBzY3JvbGxgIGV2ZW50cyksIGFsd2F5c1xuICAgICAgLy8gcHJlZmVyIHRoZSBhc3luYyBQb3BwZXIjdXBkYXRlIG1ldGhvZFxuICAgICAgZm9yY2VVcGRhdGU6IGZ1bmN0aW9uIGZvcmNlVXBkYXRlKCkge1xuICAgICAgICBpZiAoaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3N0YXRlJGVsZW1lbnRzID0gc3RhdGUuZWxlbWVudHMsXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBfc3RhdGUkZWxlbWVudHMucmVmZXJlbmNlLFxuICAgICAgICAgICAgcG9wcGVyID0gX3N0YXRlJGVsZW1lbnRzLnBvcHBlcjsgLy8gRG9uJ3QgcHJvY2VlZCBpZiBgcmVmZXJlbmNlYCBvciBgcG9wcGVyYCBhcmUgbm90IHZhbGlkIGVsZW1lbnRzXG4gICAgICAgIC8vIGFueW1vcmVcblxuICAgICAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihJTlZBTElEX0VMRU1FTlRfRVJST1IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBTdG9yZSB0aGUgcmVmZXJlbmNlIGFuZCBwb3BwZXIgcmVjdHMgdG8gYmUgcmVhZCBieSBtb2RpZmllcnNcblxuXG4gICAgICAgIHN0YXRlLnJlY3RzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogZ2V0Q29tcG9zaXRlUmVjdChyZWZlcmVuY2UsIGdldE9mZnNldFBhcmVudChwb3BwZXIpLCBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnKSxcbiAgICAgICAgICBwb3BwZXI6IGdldExheW91dFJlY3QocG9wcGVyKVxuICAgICAgICB9OyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byByZXNldCB0aGUgY3VycmVudCB1cGRhdGUgY3ljbGUuIFRoZVxuICAgICAgICAvLyBtb3N0IGNvbW1vbiB1c2UgY2FzZSBmb3IgdGhpcyBpcyB0aGUgYGZsaXBgIG1vZGlmaWVyIGNoYW5naW5nIHRoZVxuICAgICAgICAvLyBwbGFjZW1lbnQsIHdoaWNoIHRoZW4gbmVlZHMgdG8gcmUtcnVuIGFsbCB0aGUgbW9kaWZpZXJzLCBiZWNhdXNlIHRoZVxuICAgICAgICAvLyBsb2dpYyB3YXMgcHJldmlvdXNseSByYW4gZm9yIHRoZSBwcmV2aW91cyBwbGFjZW1lbnQgYW5kIGlzIHRoZXJlZm9yZVxuICAgICAgICAvLyBzdGFsZS9pbmNvcnJlY3RcblxuICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5wbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDsgLy8gT24gZWFjaCB1cGRhdGUgY3ljbGUsIHRoZSBgbW9kaWZpZXJzRGF0YWAgcHJvcGVydHkgZm9yIGVhY2ggbW9kaWZpZXJcbiAgICAgICAgLy8gaXMgZmlsbGVkIHdpdGggdGhlIGluaXRpYWwgZGF0YSBzcGVjaWZpZWQgYnkgdGhlIG1vZGlmaWVyLiBUaGlzIG1lYW5zXG4gICAgICAgIC8vIGl0IGRvZXNuJ3QgcGVyc2lzdCBhbmQgaXMgZnJlc2ggb24gZWFjaCB1cGRhdGUuXG4gICAgICAgIC8vIFRvIGVuc3VyZSBwZXJzaXN0ZW50IGRhdGEsIHVzZSBgJHtuYW1lfSNwZXJzaXN0ZW50YFxuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUubW9kaWZpZXJzRGF0YVttb2RpZmllci5uYW1lXSA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGlmaWVyLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIF9fZGVidWdfbG9vcHNfXyA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgX19kZWJ1Z19sb29wc19fICs9IDE7XG5cbiAgICAgICAgICAgIGlmIChfX2RlYnVnX2xvb3BzX18gPiAxMDApIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihJTkZJTklURV9MT09QX0VSUk9SKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN0YXRlLnJlc2V0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICAgICAgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfc3RhdGUkb3JkZXJlZE1vZGlmaWUgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzW2luZGV4XSxcbiAgICAgICAgICAgICAgZm4gPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUuZm4sXG4gICAgICAgICAgICAgIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUub3B0aW9ucyxcbiAgICAgICAgICAgICAgX29wdGlvbnMgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID09PSB2b2lkIDAgPyB7fSA6IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIsXG4gICAgICAgICAgICAgIG5hbWUgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUubmFtZTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHN0YXRlID0gZm4oe1xuICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IF9vcHRpb25zLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2VcbiAgICAgICAgICAgIH0pIHx8IHN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIEFzeW5jIGFuZCBvcHRpbWlzdGljYWxseSBvcHRpbWl6ZWQgdXBkYXRlIOKAkyBpdCB3aWxsIG5vdCBiZSBleGVjdXRlZCBpZlxuICAgICAgLy8gbm90IG5lY2Vzc2FyeSAoZGVib3VuY2VkIHRvIHJ1biBhdCBtb3N0IG9uY2UtcGVyLXRpY2spXG4gICAgICB1cGRhdGU6IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICByZXNvbHZlKHN0YXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgaXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoSU5WQUxJRF9FTEVNRU5UX0VSUk9SKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnNldE9wdGlvbnMob3B0aW9ucykudGhlbihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIGlmICghaXNEZXN0cm95ZWQgJiYgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKSB7XG4gICAgICAgIG9wdGlvbnMub25GaXJzdFVwZGF0ZShzdGF0ZSk7XG4gICAgICB9XG4gICAgfSk7IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgYmVmb3JlIHRoZSBmaXJzdFxuICAgIC8vIHVwZGF0ZSBjeWNsZSBydW5zLiBUaGV5IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIHVwZGF0ZVxuICAgIC8vIGN5Y2xlLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGEgbW9kaWZpZXIgYWRkcyBzb21lIHBlcnNpc3RlbnQgZGF0YSB0aGF0XG4gICAgLy8gb3RoZXIgbW9kaWZpZXJzIG5lZWQgdG8gdXNlLCBidXQgdGhlIG1vZGlmaWVyIGlzIHJ1biBhZnRlciB0aGUgZGVwZW5kZW50XG4gICAgLy8gb25lLlxuXG4gICAgZnVuY3Rpb24gcnVuTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICB2YXIgbmFtZSA9IF9yZWYzLm5hbWUsXG4gICAgICAgICAgICBfcmVmMyRvcHRpb25zID0gX3JlZjMub3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnMgPSBfcmVmMyRvcHRpb25zID09PSB2b2lkIDAgPyB7fSA6IF9yZWYzJG9wdGlvbnMsXG4gICAgICAgICAgICBlZmZlY3QgPSBfcmVmMy5lZmZlY3Q7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBlZmZlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YXIgY2xlYW51cEZuID0gZWZmZWN0KHtcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgbm9vcEZuID0gZnVuY3Rpb24gbm9vcEZuKCkge307XG5cbiAgICAgICAgICBlZmZlY3RDbGVhbnVwRm5zLnB1c2goY2xlYW51cEZuIHx8IG5vb3BGbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgICAgfSk7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xufVxuXG52YXIgZGVmYXVsdE1vZGlmaWVycyA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cyQxLCBjb21wdXRlU3R5bGVzJDEsIGFwcGx5U3R5bGVzJDEsIG9mZnNldCQxLCBmbGlwJDEsIHByZXZlbnRPdmVyZmxvdyQxLCBhcnJvdyQxLCBoaWRlJDFdO1xudmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xuICBkZWZhdWx0TW9kaWZpZXJzOiBkZWZhdWx0TW9kaWZpZXJzXG59KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuXG4gIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbnZhciBNYW5hZ2VyUmVmZXJlbmNlTm9kZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG52YXIgTWFuYWdlclJlZmVyZW5jZU5vZGVTZXR0ZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5mdW5jdGlvbiBNYW5hZ2VyKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUobnVsbCksXG4gICAgICByZWZlcmVuY2VOb2RlID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0UmVmZXJlbmNlTm9kZSA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgaGFzVW5tb3VudGVkID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaGFzVW5tb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgdmFyIGhhbmRsZVNldFJlZmVyZW5jZU5vZGUgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAobm9kZSkge1xuICAgIGlmICghaGFzVW5tb3VudGVkLmN1cnJlbnQpIHtcbiAgICAgIHNldFJlZmVyZW5jZU5vZGUobm9kZSk7XG4gICAgfVxuICB9LCBbXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNYW5hZ2VyUmVmZXJlbmNlTm9kZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogcmVmZXJlbmNlTm9kZVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNYW5hZ2VyUmVmZXJlbmNlTm9kZVNldHRlckNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogaGFuZGxlU2V0UmVmZXJlbmNlTm9kZVxuICB9LCBjaGlsZHJlbikpO1xufVxuLyoqXG4gKiBUYWtlcyBhbiBhcmd1bWVudCBhbmQgaWYgaXQncyBhbiBhcnJheSwgcmV0dXJucyB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgYXJyYXksXG4gKiBvdGhlcndpc2UgcmV0dXJucyB0aGUgYXJndW1lbnQuIFVzZWQgZm9yIFByZWFjdCBjb21wYXRpYmlsaXR5LlxuICovXG5cblxudmFyIHVud3JhcEFycmF5ID0gZnVuY3Rpb24gdW53cmFwQXJyYXkoYXJnKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyZykgPyBhcmdbMF0gOiBhcmc7XG59O1xuLyoqXG4gKiBUYWtlcyBhIG1heWJlLXVuZGVmaW5lZCBmdW5jdGlvbiBhbmQgYXJiaXRyYXJ5IGFyZ3MgYW5kIGludm9rZXMgdGhlIGZ1bmN0aW9uXG4gKiBvbmx5IGlmIGl0IGlzIGRlZmluZWQuXG4gKi9cblxuXG52YXIgc2FmZUludm9rZSA9IGZ1bmN0aW9uIHNhZmVJbnZva2UoZm4pIHtcbiAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBmbi5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICB9XG59O1xuLyoqXG4gKiBTZXRzIGEgcmVmIHVzaW5nIGVpdGhlciBhIHJlZiBjYWxsYmFjayBvciBhIHJlZiBvYmplY3RcbiAqL1xuXG5cbnZhciBzZXRSZWYkMSA9IGZ1bmN0aW9uIHNldFJlZihyZWYsIG5vZGUpIHtcbiAgLy8gaWYgaXRzIGEgZnVuY3Rpb24gY2FsbCBpdFxuICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBzYWZlSW52b2tlKHJlZiwgbm9kZSk7XG4gIH0gLy8gb3RoZXJ3aXNlIHdlIHNob3VsZCB0cmVhdCBpdCBhcyBhIHJlZiBvYmplY3RcbiAgZWxzZSBpZiAocmVmICE9IG51bGwpIHtcbiAgICByZWYuY3VycmVudCA9IG5vZGU7XG4gIH1cbn07XG4vKipcbiAqIFNpbXBsZSBwb255ZmlsbCBmb3IgT2JqZWN0LmZyb21FbnRyaWVzXG4gKi9cblxuXG52YXIgZnJvbUVudHJpZXMgPSBmdW5jdGlvbiBmcm9tRW50cmllcyhlbnRyaWVzKSB7XG4gIHJldHVybiBlbnRyaWVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBfcmVmKSB7XG4gICAgdmFyIGtleSA9IF9yZWZbMF0sXG4gICAgICAgIHZhbHVlID0gX3JlZlsxXTtcbiAgICBhY2Nba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn07XG4vKipcbiAqIFNtYWxsIHdyYXBwZXIgYXJvdW5kIGB1c2VMYXlvdXRFZmZlY3RgIHRvIGdldCByaWQgb2YgdGhlIHdhcm5pbmcgb24gU1NSIGVudnNcbiAqL1xuXG5cbnZhciB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50ID8gUmVhY3QudXNlTGF5b3V0RWZmZWN0IDogUmVhY3QudXNlRWZmZWN0O1xuLyogZ2xvYmFsIE1hcDpyZWFkb25seSwgU2V0OnJlYWRvbmx5LCBBcnJheUJ1ZmZlcjpyZWFkb25seSAqL1xuXG52YXIgaGFzRWxlbWVudFR5cGUgPSB0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCc7XG52YXIgaGFzTWFwID0gdHlwZW9mIE1hcCA9PT0gJ2Z1bmN0aW9uJztcbnZhciBoYXNTZXQgPSB0eXBlb2YgU2V0ID09PSAnZnVuY3Rpb24nO1xudmFyIGhhc0FycmF5QnVmZmVyID0gdHlwZW9mIEFycmF5QnVmZmVyID09PSAnZnVuY3Rpb24nICYmICEhQXJyYXlCdWZmZXIuaXNWaWV3OyAvLyBOb3RlOiBXZSAqKmRvbid0KiogbmVlZCBgZW52SGFzQmlnSW50NjRBcnJheWAgaW4gZmRlIGVzNi9pbmRleC5qc1xuXG5mdW5jdGlvbiBlcXVhbChhLCBiKSB7XG4gIC8vIFNUQVJUOiBmYXN0LWRlZXAtZXF1YWwgZXM2L2luZGV4LmpzIDMuMS4xXG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAoYSAmJiBiICYmIF90eXBlb2YoYSkgPT0gJ29iamVjdCcgJiYgX3R5cGVvZihiKSA9PSAnb2JqZWN0Jykge1xuICAgIGlmIChhLmNvbnN0cnVjdG9yICE9PSBiLmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGxlbmd0aCwgaSwga2V5cztcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KSB7XG4gICAgICAgIGlmICghZXF1YWwoYVtpXSwgYltpXSkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSAvLyBTVEFSVDogTW9kaWZpY2F0aW9uczpcbiAgICAvLyAxLiBFeHRyYSBgaGFzPFR5cGU+ICYmYCBoZWxwZXJzIGluIGluaXRpYWwgY29uZGl0aW9uIGFsbG93IGVzNiBjb2RlXG4gICAgLy8gICAgdG8gY28tZXhpc3Qgd2l0aCBlczUuXG4gICAgLy8gMi4gUmVwbGFjZSBgZm9yIG9mYCB3aXRoIGVzNSBjb21wbGlhbnQgaXRlcmF0aW9uIHVzaW5nIGBmb3JgLlxuICAgIC8vICAgIEJhc2ljYWxseSwgdGFrZTpcbiAgICAvL1xuICAgIC8vICAgIGBgYGpzXG4gICAgLy8gICAgZm9yIChpIG9mIGEuZW50cmllcygpKVxuICAgIC8vICAgICAgaWYgKCFiLmhhcyhpWzBdKSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vICAgIGBgYFxuICAgIC8vXG4gICAgLy8gICAgLi4uIGFuZCBjb252ZXJ0IHRvOlxuICAgIC8vXG4gICAgLy8gICAgYGBganNcbiAgICAvLyAgICBpdCA9IGEuZW50cmllcygpO1xuICAgIC8vICAgIHdoaWxlICghKGkgPSBpdC5uZXh0KCkpLmRvbmUpXG4gICAgLy8gICAgICBpZiAoIWIuaGFzKGkudmFsdWVbMF0pKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gICAgYGBgXG4gICAgLy9cbiAgICAvLyAgICAqKk5vdGUqKjogYGlgIGFjY2VzcyBzd2l0Y2hlcyB0byBgaS52YWx1ZWAuXG5cblxuICAgIHZhciBpdDtcblxuICAgIGlmIChoYXNNYXAgJiYgYSBpbnN0YW5jZW9mIE1hcCAmJiBiIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICBpZiAoYS5zaXplICE9PSBiLnNpemUpIHJldHVybiBmYWxzZTtcbiAgICAgIGl0ID0gYS5lbnRyaWVzKCk7XG5cbiAgICAgIHdoaWxlICghKGkgPSBpdC5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgaWYgKCFiLmhhcyhpLnZhbHVlWzBdKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpdCA9IGEuZW50cmllcygpO1xuXG4gICAgICB3aGlsZSAoIShpID0gaXQubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGlmICghZXF1YWwoaS52YWx1ZVsxXSwgYi5nZXQoaS52YWx1ZVswXSkpKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChoYXNTZXQgJiYgYSBpbnN0YW5jZW9mIFNldCAmJiBiIGluc3RhbmNlb2YgU2V0KSB7XG4gICAgICBpZiAoYS5zaXplICE9PSBiLnNpemUpIHJldHVybiBmYWxzZTtcbiAgICAgIGl0ID0gYS5lbnRyaWVzKCk7XG5cbiAgICAgIHdoaWxlICghKGkgPSBpdC5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgaWYgKCFiLmhhcyhpLnZhbHVlWzBdKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IC8vIEVORDogTW9kaWZpY2F0aW9uc1xuXG5cbiAgICBpZiAoaGFzQXJyYXlCdWZmZXIgJiYgQXJyYXlCdWZmZXIuaXNWaWV3KGEpICYmIEFycmF5QnVmZmVyLmlzVmlldyhiKSkge1xuICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoICE9IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAgICBpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYS5jb25zdHJ1Y3RvciA9PT0gUmVnRXhwKSByZXR1cm4gYS5zb3VyY2UgPT09IGIuc291cmNlICYmIGEuZmxhZ3MgPT09IGIuZmxhZ3M7XG4gICAgaWYgKGEudmFsdWVPZiAhPT0gT2JqZWN0LnByb3RvdHlwZS52YWx1ZU9mKSByZXR1cm4gYS52YWx1ZU9mKCkgPT09IGIudmFsdWVPZigpO1xuICAgIGlmIChhLnRvU3RyaW5nICE9PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKSByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG4gICAga2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KSB7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBrZXlzW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gRU5EOiBmYXN0LWRlZXAtZXF1YWxcbiAgICAvLyBTVEFSVDogcmVhY3QtZmFzdC1jb21wYXJlXG4gICAgLy8gY3VzdG9tIGhhbmRsaW5nIGZvciBET00gZWxlbWVudHNcblxuXG4gICAgaWYgKGhhc0VsZW1lbnRUeXBlICYmIGEgaW5zdGFuY2VvZiBFbGVtZW50KSByZXR1cm4gZmFsc2U7IC8vIGN1c3RvbSBoYW5kbGluZyBmb3IgUmVhY3QvUHJlYWN0XG5cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgIGlmICgoa2V5c1tpXSA9PT0gJ19vd25lcicgfHwga2V5c1tpXSA9PT0gJ19fdicgfHwga2V5c1tpXSA9PT0gJ19fbycpICYmIGEuJCR0eXBlb2YpIHtcbiAgICAgICAgLy8gUmVhY3Qtc3BlY2lmaWM6IGF2b2lkIHRyYXZlcnNpbmcgUmVhY3QgZWxlbWVudHMnIF9vd25lclxuICAgICAgICAvLyBQcmVhY3Qtc3BlY2lmaWM6IGF2b2lkIHRyYXZlcnNpbmcgUHJlYWN0IGVsZW1lbnRzJyBfX3YgYW5kIF9fb1xuICAgICAgICAvLyAgICBfX3YgPSAkX29yaWdpbmFsIC8gJF92bm9kZVxuICAgICAgICAvLyAgICBfX28gPSAkX293bmVyXG4gICAgICAgIC8vIFRoZXNlIHByb3BlcnRpZXMgY29udGFpbiBjaXJjdWxhciByZWZlcmVuY2VzIGFuZCBhcmUgbm90IG5lZWRlZCB3aGVuXG4gICAgICAgIC8vIGNvbXBhcmluZyB0aGUgYWN0dWFsIGVsZW1lbnRzIChhbmQgbm90IHRoZWlyIG93bmVycylcbiAgICAgICAgLy8gLiQkdHlwZW9mIGFuZCAuX3N0b3JlIG9uIGp1c3QgcmVhc29uYWJsZSBtYXJrZXJzIG9mIGVsZW1lbnRzXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSAvLyBhbGwgb3RoZXIgcHJvcGVydGllcyBzaG91bGQgYmUgdHJhdmVyc2VkIGFzIHVzdWFsXG5cblxuICAgICAgaWYgKCFlcXVhbChhW2tleXNbaV1dLCBiW2tleXNbaV1dKSkgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gRU5EOiByZWFjdC1mYXN0LWNvbXBhcmVcbiAgICAvLyBTVEFSVDogZmFzdC1kZWVwLWVxdWFsXG5cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGEgIT09IGEgJiYgYiAhPT0gYjtcbn0gLy8gZW5kIGZhc3QtZGVlcC1lcXVhbFxuXG5cbnZhciByZWFjdEZhc3RDb21wYXJlID0gZnVuY3Rpb24gaXNFcXVhbChhLCBiKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVxdWFsKGEsIGIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmICgoZXJyb3IubWVzc2FnZSB8fCAnJykubWF0Y2goL3N0YWNrfHJlY3Vyc2lvbi9pKSkge1xuICAgICAgLy8gd2FybiBvbiBjaXJjdWxhciByZWZlcmVuY2VzLCBkb24ndCBjcmFzaFxuICAgICAgLy8gYnJvd3NlcnMgZ2l2ZSB0aGlzIGRpZmZlcmVudCBlcnJvcnMgbmFtZSBhbmQgbWVzc2FnZXM6XG4gICAgICAvLyBjaHJvbWUvc2FmYXJpOiBcIlJhbmdlRXJyb3JcIiwgXCJNYXhpbXVtIGNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiXG4gICAgICAvLyBmaXJlZm94OiBcIkludGVybmFsRXJyb3JcIiwgdG9vIG11Y2ggcmVjdXJzaW9uXCJcbiAgICAgIC8vIGVkZ2U6IFwiRXJyb3JcIiwgXCJPdXQgb2Ygc3RhY2sgc3BhY2VcIlxuICAgICAgY29uc29sZS53YXJuKCdyZWFjdC1mYXN0LWNvbXBhcmUgY2Fubm90IGhhbmRsZSBjaXJjdWxhciByZWZzJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBzb21lIG90aGVyIGVycm9yLiB3ZSBzaG91bGQgZGVmaW5pdGVseSBrbm93IGFib3V0IHRoZXNlXG5cblxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG52YXIgRU1QVFlfTU9ESUZJRVJTJDEgPSBbXTtcblxudmFyIHVzZVBvcHBlciA9IGZ1bmN0aW9uIHVzZVBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCBwb3BwZXJFbGVtZW50LCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgcHJldk9wdGlvbnMgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciBvcHRpb25zV2l0aERlZmF1bHRzID0ge1xuICAgIG9uRmlyc3RVcGRhdGU6IG9wdGlvbnMub25GaXJzdFVwZGF0ZSxcbiAgICBwbGFjZW1lbnQ6IG9wdGlvbnMucGxhY2VtZW50IHx8ICdib3R0b20nLFxuICAgIHN0cmF0ZWd5OiBvcHRpb25zLnN0cmF0ZWd5IHx8ICdhYnNvbHV0ZScsXG4gICAgbW9kaWZpZXJzOiBvcHRpb25zLm1vZGlmaWVycyB8fCBFTVBUWV9NT0RJRklFUlMkMVxuICB9O1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgc3R5bGVzOiB7XG4gICAgICBwb3BwZXI6IHtcbiAgICAgICAgcG9zaXRpb246IG9wdGlvbnNXaXRoRGVmYXVsdHMuc3RyYXRlZ3ksXG4gICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgICAgdG9wOiAnMCdcbiAgICAgIH0sXG4gICAgICBhcnJvdzoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgICAgfVxuICAgIH0sXG4gICAgYXR0cmlidXRlczoge31cbiAgfSksXG4gICAgICBzdGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZVswXSxcbiAgICAgIHNldFN0YXRlID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciB1cGRhdGVTdGF0ZU1vZGlmaWVyID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6ICd1cGRhdGVTdGF0ZScsXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgcGhhc2U6ICd3cml0ZScsXG4gICAgICBmbjogZnVuY3Rpb24gZm4oX3JlZikge1xuICAgICAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICAgICAgICB2YXIgZWxlbWVudHMgPSBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cyk7XG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICBzdHlsZXM6IGZyb21FbnRyaWVzKGVsZW1lbnRzLm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIFtlbGVtZW50LCBzdGF0ZS5zdHlsZXNbZWxlbWVudF0gfHwge31dO1xuICAgICAgICAgIH0pKSxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBmcm9tRW50cmllcyhlbGVtZW50cy5tYXAoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBbZWxlbWVudCwgc3RhdGUuYXR0cmlidXRlc1tlbGVtZW50XV07XG4gICAgICAgICAgfSkpXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHJlcXVpcmVzOiBbJ2NvbXB1dGVTdHlsZXMnXVxuICAgIH07XG4gIH0sIFtdKTtcbiAgdmFyIHBvcHBlck9wdGlvbnMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbmV3T3B0aW9ucyA9IHtcbiAgICAgIG9uRmlyc3RVcGRhdGU6IG9wdGlvbnNXaXRoRGVmYXVsdHMub25GaXJzdFVwZGF0ZSxcbiAgICAgIHBsYWNlbWVudDogb3B0aW9uc1dpdGhEZWZhdWx0cy5wbGFjZW1lbnQsXG4gICAgICBzdHJhdGVneTogb3B0aW9uc1dpdGhEZWZhdWx0cy5zdHJhdGVneSxcbiAgICAgIG1vZGlmaWVyczogW10uY29uY2F0KG9wdGlvbnNXaXRoRGVmYXVsdHMubW9kaWZpZXJzLCBbdXBkYXRlU3RhdGVNb2RpZmllciwge1xuICAgICAgICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgfV0pXG4gICAgfTtcblxuICAgIGlmIChyZWFjdEZhc3RDb21wYXJlKHByZXZPcHRpb25zLmN1cnJlbnQsIG5ld09wdGlvbnMpKSB7XG4gICAgICByZXR1cm4gcHJldk9wdGlvbnMuY3VycmVudCB8fCBuZXdPcHRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmV2T3B0aW9ucy5jdXJyZW50ID0gbmV3T3B0aW9ucztcbiAgICAgIHJldHVybiBuZXdPcHRpb25zO1xuICAgIH1cbiAgfSwgW29wdGlvbnNXaXRoRGVmYXVsdHMub25GaXJzdFVwZGF0ZSwgb3B0aW9uc1dpdGhEZWZhdWx0cy5wbGFjZW1lbnQsIG9wdGlvbnNXaXRoRGVmYXVsdHMuc3RyYXRlZ3ksIG9wdGlvbnNXaXRoRGVmYXVsdHMubW9kaWZpZXJzLCB1cGRhdGVTdGF0ZU1vZGlmaWVyXSk7XG4gIHZhciBwb3BwZXJJbnN0YW5jZVJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocG9wcGVySW5zdGFuY2VSZWYuY3VycmVudCkge1xuICAgICAgcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudC5zZXRPcHRpb25zKHBvcHBlck9wdGlvbnMpO1xuICAgIH1cbiAgfSwgW3BvcHBlck9wdGlvbnNdKTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHJlZmVyZW5jZUVsZW1lbnQgPT0gbnVsbCB8fCBwb3BwZXJFbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY3JlYXRlUG9wcGVyJDEgPSBvcHRpb25zLmNyZWF0ZVBvcHBlciB8fCBjcmVhdGVQb3BwZXI7XG4gICAgdmFyIHBvcHBlckluc3RhbmNlID0gY3JlYXRlUG9wcGVyJDEocmVmZXJlbmNlRWxlbWVudCwgcG9wcGVyRWxlbWVudCwgcG9wcGVyT3B0aW9ucyk7XG4gICAgcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudCA9IHBvcHBlckluc3RhbmNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBwb3BwZXJJbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICBwb3BwZXJJbnN0YW5jZVJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICB9O1xuICB9LCBbcmVmZXJlbmNlRWxlbWVudCwgcG9wcGVyRWxlbWVudCwgb3B0aW9ucy5jcmVhdGVQb3BwZXJdKTtcbiAgcmV0dXJuIHtcbiAgICBzdGF0ZTogcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudCA/IHBvcHBlckluc3RhbmNlUmVmLmN1cnJlbnQuc3RhdGUgOiBudWxsLFxuICAgIHN0eWxlczogc3RhdGUuc3R5bGVzLFxuICAgIGF0dHJpYnV0ZXM6IHN0YXRlLmF0dHJpYnV0ZXMsXG4gICAgdXBkYXRlOiBwb3BwZXJJbnN0YW5jZVJlZi5jdXJyZW50ID8gcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudC51cGRhdGUgOiBudWxsLFxuICAgIGZvcmNlVXBkYXRlOiBwb3BwZXJJbnN0YW5jZVJlZi5jdXJyZW50ID8gcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudC5mb3JjZVVwZGF0ZSA6IG51bGxcbiAgfTtcbn07XG5cbnZhciBOT09QID0gZnVuY3Rpb24gTk9PUCgpIHtcbiAgcmV0dXJuIHZvaWQgMDtcbn07XG5cbnZhciBOT09QX1BST01JU0UgPSBmdW5jdGlvbiBOT09QX1BST01JU0UoKSB7XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG59O1xuXG52YXIgRU1QVFlfTU9ESUZJRVJTID0gW107XG5cbmZ1bmN0aW9uIFBvcHBlcihfcmVmKSB7XG4gIHZhciBfcmVmJHBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZiRwbGFjZW1lbnQgPT09IHZvaWQgMCA/ICdib3R0b20nIDogX3JlZiRwbGFjZW1lbnQsXG4gICAgICBfcmVmJHN0cmF0ZWd5ID0gX3JlZi5zdHJhdGVneSxcbiAgICAgIHN0cmF0ZWd5ID0gX3JlZiRzdHJhdGVneSA9PT0gdm9pZCAwID8gJ2Fic29sdXRlJyA6IF9yZWYkc3RyYXRlZ3ksXG4gICAgICBfcmVmJG1vZGlmaWVycyA9IF9yZWYubW9kaWZpZXJzLFxuICAgICAgbW9kaWZpZXJzID0gX3JlZiRtb2RpZmllcnMgPT09IHZvaWQgMCA/IEVNUFRZX01PRElGSUVSUyA6IF9yZWYkbW9kaWZpZXJzLFxuICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IF9yZWYucmVmZXJlbmNlRWxlbWVudCxcbiAgICAgIG9uRmlyc3RVcGRhdGUgPSBfcmVmLm9uRmlyc3RVcGRhdGUsXG4gICAgICBpbm5lclJlZiA9IF9yZWYuaW5uZXJSZWYsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIHZhciByZWZlcmVuY2VOb2RlID0gUmVhY3QudXNlQ29udGV4dChNYW5hZ2VyUmVmZXJlbmNlTm9kZUNvbnRleHQpO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShudWxsKSxcbiAgICAgIHBvcHBlckVsZW1lbnQgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRQb3BwZXJFbGVtZW50ID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUyID0gUmVhY3QudXNlU3RhdGUobnVsbCksXG4gICAgICBhcnJvd0VsZW1lbnQgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0QXJyb3dFbGVtZW50ID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHNldFJlZiQxKGlubmVyUmVmLCBwb3BwZXJFbGVtZW50KTtcbiAgfSwgW2lubmVyUmVmLCBwb3BwZXJFbGVtZW50XSk7XG4gIHZhciBvcHRpb25zID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgc3RyYXRlZ3k6IHN0cmF0ZWd5LFxuICAgICAgb25GaXJzdFVwZGF0ZTogb25GaXJzdFVwZGF0ZSxcbiAgICAgIG1vZGlmaWVyczogW10uY29uY2F0KG1vZGlmaWVycywgW3tcbiAgICAgICAgbmFtZTogJ2Fycm93JyxcbiAgICAgICAgZW5hYmxlZDogYXJyb3dFbGVtZW50ICE9IG51bGwsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBlbGVtZW50OiBhcnJvd0VsZW1lbnRcbiAgICAgICAgfVxuICAgICAgfV0pXG4gICAgfTtcbiAgfSwgW3BsYWNlbWVudCwgc3RyYXRlZ3ksIG9uRmlyc3RVcGRhdGUsIG1vZGlmaWVycywgYXJyb3dFbGVtZW50XSk7XG5cbiAgdmFyIF91c2VQb3BwZXIgPSB1c2VQb3BwZXIocmVmZXJlbmNlRWxlbWVudCB8fCByZWZlcmVuY2VOb2RlLCBwb3BwZXJFbGVtZW50LCBvcHRpb25zKSxcbiAgICAgIHN0YXRlID0gX3VzZVBvcHBlci5zdGF0ZSxcbiAgICAgIHN0eWxlcyA9IF91c2VQb3BwZXIuc3R5bGVzLFxuICAgICAgZm9yY2VVcGRhdGUgPSBfdXNlUG9wcGVyLmZvcmNlVXBkYXRlLFxuICAgICAgdXBkYXRlID0gX3VzZVBvcHBlci51cGRhdGU7XG5cbiAgdmFyIGNoaWxkcmVuUHJvcHMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVmOiBzZXRQb3BwZXJFbGVtZW50LFxuICAgICAgc3R5bGU6IHN0eWxlcy5wb3BwZXIsXG4gICAgICBwbGFjZW1lbnQ6IHN0YXRlID8gc3RhdGUucGxhY2VtZW50IDogcGxhY2VtZW50LFxuICAgICAgaGFzUG9wcGVyRXNjYXBlZDogc3RhdGUgJiYgc3RhdGUubW9kaWZpZXJzRGF0YS5oaWRlID8gc3RhdGUubW9kaWZpZXJzRGF0YS5oaWRlLmhhc1BvcHBlckVzY2FwZWQgOiBudWxsLFxuICAgICAgaXNSZWZlcmVuY2VIaWRkZW46IHN0YXRlICYmIHN0YXRlLm1vZGlmaWVyc0RhdGEuaGlkZSA/IHN0YXRlLm1vZGlmaWVyc0RhdGEuaGlkZS5pc1JlZmVyZW5jZUhpZGRlbiA6IG51bGwsXG4gICAgICBhcnJvd1Byb3BzOiB7XG4gICAgICAgIHN0eWxlOiBzdHlsZXMuYXJyb3csXG4gICAgICAgIHJlZjogc2V0QXJyb3dFbGVtZW50XG4gICAgICB9LFxuICAgICAgZm9yY2VVcGRhdGU6IGZvcmNlVXBkYXRlIHx8IE5PT1AsXG4gICAgICB1cGRhdGU6IHVwZGF0ZSB8fCBOT09QX1BST01JU0VcbiAgICB9O1xuICB9LCBbc2V0UG9wcGVyRWxlbWVudCwgc2V0QXJyb3dFbGVtZW50LCBwbGFjZW1lbnQsIHN0YXRlLCBzdHlsZXMsIHVwZGF0ZSwgZm9yY2VVcGRhdGVdKTtcbiAgcmV0dXJuIHVud3JhcEFycmF5KGNoaWxkcmVuKShjaGlsZHJlblByb3BzKTtcbn1cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxuXG52YXIgX19ERVZfXyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24gd2FybmluZygpIHt9O1xuXG5pZiAoX19ERVZfXykge1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMSA/IGxlbiAtIDEgOiAwKTtcblxuICAgIGZvciAodmFyIGtleSA9IDE7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMV0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG5cbiAgICBmb3IgKHZhciBrZXkgPSAyOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDJdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkobnVsbCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciB3YXJuaW5nXzEgPSB3YXJuaW5nO1xuXG5mdW5jdGlvbiBSZWZlcmVuY2UoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgaW5uZXJSZWYgPSBfcmVmLmlubmVyUmVmO1xuICB2YXIgc2V0UmVmZXJlbmNlTm9kZSA9IFJlYWN0LnVzZUNvbnRleHQoTWFuYWdlclJlZmVyZW5jZU5vZGVTZXR0ZXJDb250ZXh0KTtcbiAgdmFyIHJlZkhhbmRsZXIgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAobm9kZSkge1xuICAgIHNldFJlZiQxKGlubmVyUmVmLCBub2RlKTtcbiAgICBzYWZlSW52b2tlKHNldFJlZmVyZW5jZU5vZGUsIG5vZGUpO1xuICB9LCBbaW5uZXJSZWYsIHNldFJlZmVyZW5jZU5vZGVdKTsgLy8gcmFuIG9uIHVubW91bnRcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc2V0UmVmJDEoaW5uZXJSZWYsIG51bGwpO1xuICAgIH07XG4gIH0pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHdhcm5pbmdfMShCb29sZWFuKHNldFJlZmVyZW5jZU5vZGUpLCAnYFJlZmVyZW5jZWAgc2hvdWxkIG5vdCBiZSB1c2VkIG91dHNpZGUgb2YgYSBgTWFuYWdlcmAgY29tcG9uZW50LicpO1xuICB9LCBbc2V0UmVmZXJlbmNlTm9kZV0pO1xuICByZXR1cm4gdW53cmFwQXJyYXkoY2hpbGRyZW4pKHtcbiAgICByZWY6IHJlZkhhbmRsZXJcbiAgfSk7XG59XG5cbnZhciBUb29sdGlwQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdC5jcmVhdGVDb250ZXh0KHt9KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cbnZhciBjYWxsQWxsID0gZnVuY3Rpb24gY2FsbEFsbCgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiBmbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiBmbiAmJiBmbi5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgIH0pO1xuICB9O1xufTtcblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkgey8vIGRvIG5vdGhpbmdcbn07XG5cbnZhciBjYW5Vc2VET00gPSBmdW5jdGlvbiBjYW5Vc2VET00oKSB7XG4gIHJldHVybiAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xufTtcblxudmFyIHNldFJlZiA9IGZ1bmN0aW9uIHNldFJlZihyZWYsIG5vZGUpIHtcbiAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gcmVmKG5vZGUpO1xuICB9IGVsc2UgaWYgKHJlZiAhPSBudWxsKSB7XG4gICAgcmVmLmN1cnJlbnQgPSBub2RlO1xuICB9XG59O1xuXG52YXIgVG9vbHRpcCQxID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFRvb2x0aXAsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRvb2x0aXAoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgX3RoaXMub2JzZXJ2ZXIgPSB2b2lkIDA7XG4gICAgX3RoaXMudG9vbHRpcFJlZiA9IHZvaWQgMDtcblxuICAgIF90aGlzLmhhbmRsZU91dHNpZGVDbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnRvb2x0aXBSZWYgJiYgIV90aGlzLnRvb2x0aXBSZWYuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICB2YXIgcGFyZW50T3V0c2lkZUNsaWNrSGFuZGxlciA9IF90aGlzLmNvbnRleHQucGFyZW50T3V0c2lkZUNsaWNrSGFuZGxlcjtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBoaWRlVG9vbHRpcCA9IF90aGlzJHByb3BzLmhpZGVUb29sdGlwLFxuICAgICAgICAgICAgY2xlYXJTY2hlZHVsZWQgPSBfdGhpcyRwcm9wcy5jbGVhclNjaGVkdWxlZDtcbiAgICAgICAgY2xlYXJTY2hlZHVsZWQoKTtcbiAgICAgICAgaGlkZVRvb2x0aXAoKTtcblxuICAgICAgICBpZiAocGFyZW50T3V0c2lkZUNsaWNrSGFuZGxlcikge1xuICAgICAgICAgIHBhcmVudE91dHNpZGVDbGlja0hhbmRsZXIoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZU91dHNpZGVSaWdodENsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMudG9vbHRpcFJlZiAmJiAhX3RoaXMudG9vbHRpcFJlZi5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIHZhciBwYXJlbnRPdXRzaWRlUmlnaHRDbGlja0hhbmRsZXIgPSBfdGhpcy5jb250ZXh0LnBhcmVudE91dHNpZGVSaWdodENsaWNrSGFuZGxlcjtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgaGlkZVRvb2x0aXAgPSBfdGhpcyRwcm9wczIuaGlkZVRvb2x0aXAsXG4gICAgICAgICAgICBjbGVhclNjaGVkdWxlZCA9IF90aGlzJHByb3BzMi5jbGVhclNjaGVkdWxlZDtcbiAgICAgICAgY2xlYXJTY2hlZHVsZWQoKTtcbiAgICAgICAgaGlkZVRvb2x0aXAoKTtcblxuICAgICAgICBpZiAocGFyZW50T3V0c2lkZVJpZ2h0Q2xpY2tIYW5kbGVyKSB7XG4gICAgICAgICAgcGFyZW50T3V0c2lkZVJpZ2h0Q2xpY2tIYW5kbGVyKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5hZGRPdXRzaWRlQ2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIF90aGlzLmhhbmRsZU91dHNpZGVDbGljayk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RoaXMuaGFuZGxlT3V0c2lkZUNsaWNrKTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVtb3ZlT3V0c2lkZUNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBfdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2spO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF90aGlzLmhhbmRsZU91dHNpZGVDbGljayk7XG4gICAgfTtcblxuICAgIF90aGlzLmFkZE91dHNpZGVSaWdodENsaWNrSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgX3RoaXMuaGFuZGxlT3V0c2lkZVJpZ2h0Q2xpY2spO1xuICAgIH07XG5cbiAgICBfdGhpcy5yZW1vdmVPdXRzaWRlUmlnaHRDbGlja0hhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIF90aGlzLmhhbmRsZU91dHNpZGVSaWdodENsaWNrKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0VG9vbHRpcFJlZiA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBfdGhpcy50b29sdGlwUmVmID0gbm9kZTtcbiAgICAgIHNldFJlZihfdGhpcy5wcm9wcy5pbm5lclJlZiwgbm9kZSk7XG4gICAgfTtcblxuICAgIF90aGlzLmdldEFycm93UHJvcHMgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgIGlmIChwcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHByb3BzID0ge307XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBwcm9wcy5zdHlsZSwgX3RoaXMucHJvcHMuYXJyb3dQcm9wcy5zdHlsZSlcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRUb29sdGlwUHJvcHMgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgIGlmIChwcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHByb3BzID0ge307XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcHJvcHMsIF90aGlzLmlzVHJpZ2dlcmVkQnkoJ2hvdmVyJykgJiYge1xuICAgICAgICBvbk1vdXNlRW50ZXI6IGNhbGxBbGwoX3RoaXMucHJvcHMuY2xlYXJTY2hlZHVsZWQsIHByb3BzLm9uTW91c2VFbnRlciksXG4gICAgICAgIG9uTW91c2VMZWF2ZTogY2FsbEFsbChfdGhpcy5wcm9wcy5oaWRlVG9vbHRpcCwgcHJvcHMub25Nb3VzZUxlYXZlKVxuICAgICAgfSwge1xuICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIHByb3BzLnN0eWxlLCBfdGhpcy5wcm9wcy5zdHlsZSlcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5jb250ZXh0VmFsdWUgPSB7XG4gICAgICBpc1BhcmVudE5vbmVUcmlnZ2VyZWQ6IF90aGlzLnByb3BzLnRyaWdnZXIgPT09ICdub25lJyxcbiAgICAgIGFkZFBhcmVudE91dHNpZGVDbGlja0hhbmRsZXI6IF90aGlzLmFkZE91dHNpZGVDbGlja0hhbmRsZXIsXG4gICAgICBhZGRQYXJlbnRPdXRzaWRlUmlnaHRDbGlja0hhbmRsZXI6IF90aGlzLmFkZE91dHNpZGVSaWdodENsaWNrSGFuZGxlcixcbiAgICAgIHBhcmVudE91dHNpZGVDbGlja0hhbmRsZXI6IF90aGlzLmhhbmRsZU91dHNpZGVDbGljayxcbiAgICAgIHBhcmVudE91dHNpZGVSaWdodENsaWNrSGFuZGxlcjogX3RoaXMuaGFuZGxlT3V0c2lkZVJpZ2h0Q2xpY2ssXG4gICAgICByZW1vdmVQYXJlbnRPdXRzaWRlQ2xpY2tIYW5kbGVyOiBfdGhpcy5yZW1vdmVPdXRzaWRlQ2xpY2tIYW5kbGVyLFxuICAgICAgcmVtb3ZlUGFyZW50T3V0c2lkZVJpZ2h0Q2xpY2tIYW5kbGVyOiBfdGhpcy5yZW1vdmVPdXRzaWRlUmlnaHRDbGlja0hhbmRsZXJcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBUb29sdGlwLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBvYnNlcnZlciA9IHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIucHJvcHMudXBkYXRlKCk7XG4gICAgfSk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnRvb2x0aXBSZWYsIHRoaXMucHJvcHMubXV0YXRpb25PYnNlcnZlck9wdGlvbnMpO1xuXG4gICAgaWYgKHRoaXMuaXNUcmlnZ2VyZWRCeSgnaG92ZXInKSB8fCB0aGlzLmlzVHJpZ2dlcmVkQnkoJ2NsaWNrJykgfHwgdGhpcy5pc1RyaWdnZXJlZEJ5KCdyaWdodC1jbGljaycpKSB7XG4gICAgICB2YXIgX3RoaXMkY29udGV4dCA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICByZW1vdmVQYXJlbnRPdXRzaWRlQ2xpY2tIYW5kbGVyID0gX3RoaXMkY29udGV4dC5yZW1vdmVQYXJlbnRPdXRzaWRlQ2xpY2tIYW5kbGVyLFxuICAgICAgICAgIHJlbW92ZVBhcmVudE91dHNpZGVSaWdodENsaWNrSGFuZGxlciA9IF90aGlzJGNvbnRleHQucmVtb3ZlUGFyZW50T3V0c2lkZVJpZ2h0Q2xpY2tIYW5kbGVyO1xuICAgICAgdGhpcy5hZGRPdXRzaWRlQ2xpY2tIYW5kbGVyKCk7XG4gICAgICB0aGlzLmFkZE91dHNpZGVSaWdodENsaWNrSGFuZGxlcigpO1xuXG4gICAgICBpZiAocmVtb3ZlUGFyZW50T3V0c2lkZUNsaWNrSGFuZGxlcikge1xuICAgICAgICByZW1vdmVQYXJlbnRPdXRzaWRlQ2xpY2tIYW5kbGVyKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZW1vdmVQYXJlbnRPdXRzaWRlUmlnaHRDbGlja0hhbmRsZXIpIHtcbiAgICAgICAgcmVtb3ZlUGFyZW50T3V0c2lkZVJpZ2h0Q2xpY2tIYW5kbGVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuY2xvc2VPblJlZmVyZW5jZUhpZGRlbiAmJiB0aGlzLnByb3BzLmlzUmVmZXJlbmNlSGlkZGVuKSB7XG4gICAgICB0aGlzLnByb3BzLmhpZGVUb29sdGlwKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XG4gICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1RyaWdnZXJlZEJ5KCdob3ZlcicpIHx8IHRoaXMuaXNUcmlnZ2VyZWRCeSgnY2xpY2snKSB8fCB0aGlzLmlzVHJpZ2dlcmVkQnkoJ3JpZ2h0LWNsaWNrJykpIHtcbiAgICAgIHZhciBfdGhpcyRjb250ZXh0MiA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBpc1BhcmVudE5vbmVUcmlnZ2VyZWQgPSBfdGhpcyRjb250ZXh0Mi5pc1BhcmVudE5vbmVUcmlnZ2VyZWQsXG4gICAgICAgICAgYWRkUGFyZW50T3V0c2lkZUNsaWNrSGFuZGxlciA9IF90aGlzJGNvbnRleHQyLmFkZFBhcmVudE91dHNpZGVDbGlja0hhbmRsZXIsXG4gICAgICAgICAgYWRkUGFyZW50T3V0c2lkZVJpZ2h0Q2xpY2tIYW5kbGVyID0gX3RoaXMkY29udGV4dDIuYWRkUGFyZW50T3V0c2lkZVJpZ2h0Q2xpY2tIYW5kbGVyO1xuICAgICAgdGhpcy5yZW1vdmVPdXRzaWRlQ2xpY2tIYW5kbGVyKCk7XG4gICAgICB0aGlzLnJlbW92ZU91dHNpZGVSaWdodENsaWNrSGFuZGxlcigpO1xuICAgICAgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2sgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmhhbmRsZU91dHNpZGVSaWdodENsaWNrID0gdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoIWlzUGFyZW50Tm9uZVRyaWdnZXJlZCAmJiBhZGRQYXJlbnRPdXRzaWRlQ2xpY2tIYW5kbGVyKSB7XG4gICAgICAgIGFkZFBhcmVudE91dHNpZGVDbGlja0hhbmRsZXIoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1BhcmVudE5vbmVUcmlnZ2VyZWQgJiYgYWRkUGFyZW50T3V0c2lkZVJpZ2h0Q2xpY2tIYW5kbGVyKSB7XG4gICAgICAgIGFkZFBhcmVudE91dHNpZGVSaWdodENsaWNrSGFuZGxlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICBhcnJvd1Byb3BzID0gX3RoaXMkcHJvcHMzLmFycm93UHJvcHMsXG4gICAgICAgIHBsYWNlbWVudCA9IF90aGlzJHByb3BzMy5wbGFjZW1lbnQsXG4gICAgICAgIHRvb2x0aXAgPSBfdGhpcyRwcm9wczMudG9vbHRpcDtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB0aGlzLmNvbnRleHRWYWx1ZVxuICAgIH0sIHRvb2x0aXAoe1xuICAgICAgYXJyb3dSZWY6IGFycm93UHJvcHMucmVmLFxuICAgICAgZ2V0QXJyb3dQcm9wczogdGhpcy5nZXRBcnJvd1Byb3BzLFxuICAgICAgZ2V0VG9vbHRpcFByb3BzOiB0aGlzLmdldFRvb2x0aXBQcm9wcyxcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgdG9vbHRpcFJlZjogdGhpcy5nZXRUb29sdGlwUmVmXG4gICAgfSkpO1xuICB9O1xuXG4gIF9wcm90by5pc1RyaWdnZXJlZEJ5ID0gZnVuY3Rpb24gaXNUcmlnZ2VyZWRCeShldmVudCkge1xuICAgIHZhciB0cmlnZ2VyID0gdGhpcy5wcm9wcy50cmlnZ2VyO1xuICAgIHJldHVybiB0cmlnZ2VyID09PSBldmVudCB8fCBBcnJheS5pc0FycmF5KHRyaWdnZXIpICYmIHRyaWdnZXIuaW5jbHVkZXMoZXZlbnQpO1xuICB9O1xuXG4gIHJldHVybiBUb29sdGlwO1xufShDb21wb25lbnQpO1xuXG5Ub29sdGlwJDEuY29udGV4dFR5cGUgPSBUb29sdGlwQ29udGV4dDtcbnZhciBERUZBVUxUX01VVEFUSU9OX09CU0VSVkVSX0NPTkZJRyA9IHtcbiAgY2hpbGRMaXN0OiB0cnVlLFxuICBzdWJ0cmVlOiB0cnVlXG59O1xuXG52YXIgVG9vbHRpcFRyaWdnZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVG9vbHRpcFRyaWdnZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRvb2x0aXBUcmlnZ2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgdG9vbHRpcFNob3duOiBfdGhpcy5wcm9wcy5kZWZhdWx0VG9vbHRpcFNob3duXG4gICAgfTtcbiAgICBfdGhpcy5oaWRlVGltZW91dCA9IHZvaWQgMDtcbiAgICBfdGhpcy5zaG93VGltZW91dCA9IHZvaWQgMDtcbiAgICBfdGhpcy5wb3BwZXJPZmZzZXQgPSB2b2lkIDA7XG5cbiAgICBfdGhpcy5zZXRUb29sdGlwU3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHZhciBjYiA9IGZ1bmN0aW9uIGNiKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMucHJvcHMub25WaXNpYmlsaXR5Q2hhbmdlKHN0YXRlLnRvb2x0aXBTaG93bik7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5pc0NvbnRyb2xsZWQoKSA/IGNiKCkgOiBfdGhpcy5zZXRTdGF0ZShzdGF0ZSwgY2IpO1xuICAgIH07XG5cbiAgICBfdGhpcy5jbGVhclNjaGVkdWxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNsZWFyVGltZW91dChfdGhpcy5oaWRlVGltZW91dCk7XG4gICAgICBjbGVhclRpbWVvdXQoX3RoaXMuc2hvd1RpbWVvdXQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5zaG93VG9vbHRpcCA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgcGFnZVggPSBfcmVmLnBhZ2VYLFxuICAgICAgICAgIHBhZ2VZID0gX3JlZi5wYWdlWTtcblxuICAgICAgX3RoaXMuY2xlYXJTY2hlZHVsZWQoKTtcblxuICAgICAgdmFyIHN0YXRlID0ge1xuICAgICAgICB0b29sdGlwU2hvd246IHRydWVcbiAgICAgIH07XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5mb2xsb3dDdXJzb3IpIHtcbiAgICAgICAgc3RhdGUgPSBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBwYWdlWDogcGFnZVgsXG4gICAgICAgICAgcGFnZVk6IHBhZ2VZXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zaG93VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNldFRvb2x0aXBTdGF0ZShzdGF0ZSk7XG4gICAgICB9LCBfdGhpcy5wcm9wcy5kZWxheVNob3cpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oaWRlVG9vbHRpcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmNsZWFyU2NoZWR1bGVkKCk7XG5cbiAgICAgIF90aGlzLmhpZGVUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc2V0VG9vbHRpcFN0YXRlKHtcbiAgICAgICAgICB0b29sdGlwU2hvd246IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSwgX3RoaXMucHJvcHMuZGVsYXlIaWRlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMudG9nZ2xlVG9vbHRpcCA9IGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgdmFyIHBhZ2VYID0gX3JlZjIucGFnZVgsXG4gICAgICAgICAgcGFnZVkgPSBfcmVmMi5wYWdlWTtcbiAgICAgIHZhciBhY3Rpb24gPSBfdGhpcy5nZXRTdGF0ZSgpID8gJ2hpZGVUb29sdGlwJyA6ICdzaG93VG9vbHRpcCc7XG5cbiAgICAgIF90aGlzW2FjdGlvbl0oe1xuICAgICAgICBwYWdlWDogcGFnZVgsXG4gICAgICAgIHBhZ2VZOiBwYWdlWVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmNsaWNrVG9nZ2xlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIHBhZ2VYID0gZXZlbnQucGFnZVgsXG4gICAgICAgICAgcGFnZVkgPSBldmVudC5wYWdlWTtcbiAgICAgIHZhciBhY3Rpb24gPSBfdGhpcy5wcm9wcy5mb2xsb3dDdXJzb3IgPyAnc2hvd1Rvb2x0aXAnIDogJ3RvZ2dsZVRvb2x0aXAnO1xuXG4gICAgICBfdGhpc1thY3Rpb25dKHtcbiAgICAgICAgcGFnZVg6IHBhZ2VYLFxuICAgICAgICBwYWdlWTogcGFnZVlcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5jb250ZXh0TWVudVRvZ2dsZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBwYWdlWCA9IGV2ZW50LnBhZ2VYLFxuICAgICAgICAgIHBhZ2VZID0gZXZlbnQucGFnZVk7XG4gICAgICB2YXIgYWN0aW9uID0gX3RoaXMucHJvcHMuZm9sbG93Q3Vyc29yID8gJ3Nob3dUb29sdGlwJyA6ICd0b2dnbGVUb29sdGlwJztcblxuICAgICAgX3RoaXNbYWN0aW9uXSh7XG4gICAgICAgIHBhZ2VYOiBwYWdlWCxcbiAgICAgICAgcGFnZVk6IHBhZ2VZXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0VHJpZ2dlclByb3BzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICBpZiAocHJvcHMgPT09IHZvaWQgMCkge1xuICAgICAgICBwcm9wcyA9IHt9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHByb3BzLCBfdGhpcy5pc1RyaWdnZXJlZEJ5KCdjbGljaycpICYmIHtcbiAgICAgICAgb25DbGljazogY2FsbEFsbChfdGhpcy5jbGlja1RvZ2dsZSwgcHJvcHMub25DbGljayksXG4gICAgICAgIG9uVG91Y2hFbmQ6IGNhbGxBbGwoX3RoaXMuY2xpY2tUb2dnbGUsIHByb3BzLm9uVG91Y2hFbmQpXG4gICAgICB9LCBfdGhpcy5pc1RyaWdnZXJlZEJ5KCdyaWdodC1jbGljaycpICYmIHtcbiAgICAgICAgb25Db250ZXh0TWVudTogY2FsbEFsbChfdGhpcy5jb250ZXh0TWVudVRvZ2dsZSwgcHJvcHMub25Db250ZXh0TWVudSlcbiAgICAgIH0sIF90aGlzLmlzVHJpZ2dlcmVkQnkoJ2hvdmVyJykgJiYgX2V4dGVuZHMoe1xuICAgICAgICBvbk1vdXNlRW50ZXI6IGNhbGxBbGwoX3RoaXMuc2hvd1Rvb2x0aXAsIHByb3BzLm9uTW91c2VFbnRlciksXG4gICAgICAgIG9uTW91c2VMZWF2ZTogY2FsbEFsbChfdGhpcy5oaWRlVG9vbHRpcCwgcHJvcHMub25Nb3VzZUxlYXZlKVxuICAgICAgfSwgX3RoaXMucHJvcHMuZm9sbG93Q3Vyc29yICYmIHtcbiAgICAgICAgb25Nb3VzZU1vdmU6IGNhbGxBbGwoX3RoaXMuc2hvd1Rvb2x0aXAsIHByb3BzLm9uTW91c2VNb3ZlKVxuICAgICAgfSksIF90aGlzLmlzVHJpZ2dlcmVkQnkoJ2ZvY3VzJykgJiYge1xuICAgICAgICBvbkZvY3VzOiBjYWxsQWxsKF90aGlzLnNob3dUb29sdGlwLCBwcm9wcy5vbkZvY3VzKSxcbiAgICAgICAgb25CbHVyOiBjYWxsQWxsKF90aGlzLmhpZGVUb29sdGlwLCBwcm9wcy5vbkJsdXIpXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFRvb2x0aXBUcmlnZ2VyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNsZWFyU2NoZWR1bGVkKCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIHRvb2x0aXAgPSBfdGhpcyRwcm9wcy50b29sdGlwLFxuICAgICAgICBwbGFjZW1lbnQgPSBfdGhpcyRwcm9wcy5wbGFjZW1lbnQsXG4gICAgICAgIHRyaWdnZXIgPSBfdGhpcyRwcm9wcy50cmlnZ2VyLFxuICAgICAgICBnZXRUcmlnZ2VyUmVmID0gX3RoaXMkcHJvcHMuZ2V0VHJpZ2dlclJlZixcbiAgICAgICAgbW9kaWZpZXJzID0gX3RoaXMkcHJvcHMubW9kaWZpZXJzLFxuICAgICAgICBjbG9zZU9uUmVmZXJlbmNlSGlkZGVuID0gX3RoaXMkcHJvcHMuY2xvc2VPblJlZmVyZW5jZUhpZGRlbixcbiAgICAgICAgdXNlUG9ydGFsID0gX3RoaXMkcHJvcHMudXNlUG9ydGFsLFxuICAgICAgICBwb3J0YWxDb250YWluZXIgPSBfdGhpcyRwcm9wcy5wb3J0YWxDb250YWluZXIsXG4gICAgICAgIGZvbGxvd0N1cnNvciA9IF90aGlzJHByb3BzLmZvbGxvd0N1cnNvcixcbiAgICAgICAgZ2V0VG9vbHRpcFJlZiA9IF90aGlzJHByb3BzLmdldFRvb2x0aXBSZWYsXG4gICAgICAgIG11dGF0aW9uT2JzZXJ2ZXJPcHRpb25zID0gX3RoaXMkcHJvcHMubXV0YXRpb25PYnNlcnZlck9wdGlvbnMsXG4gICAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJjaGlsZHJlblwiLCBcInRvb2x0aXBcIiwgXCJwbGFjZW1lbnRcIiwgXCJ0cmlnZ2VyXCIsIFwiZ2V0VHJpZ2dlclJlZlwiLCBcIm1vZGlmaWVyc1wiLCBcImNsb3NlT25SZWZlcmVuY2VIaWRkZW5cIiwgXCJ1c2VQb3J0YWxcIiwgXCJwb3J0YWxDb250YWluZXJcIiwgXCJmb2xsb3dDdXJzb3JcIiwgXCJnZXRUb29sdGlwUmVmXCIsIFwibXV0YXRpb25PYnNlcnZlck9wdGlvbnNcIl0pO1xuXG4gICAgdmFyIHBvcHBlciA9IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFBvcHBlciwgX2V4dGVuZHMoe1xuICAgICAgaW5uZXJSZWY6IGdldFRvb2x0aXBSZWYsXG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIG1vZGlmaWVyczogW3tcbiAgICAgICAgbmFtZTogJ2ZvbGxvd0N1cnNvcicsXG4gICAgICAgIGVuYWJsZWQ6IGZvbGxvd0N1cnNvcixcbiAgICAgICAgcGhhc2U6ICdtYWluJyxcbiAgICAgICAgZm46IGZ1bmN0aW9uIGZuKGRhdGEpIHtcbiAgICAgICAgICBfdGhpczIucG9wcGVyT2Zmc2V0ID0gZGF0YS5zdGF0ZS5yZWN0cy5wb3BwZXI7XG4gICAgICAgIH1cbiAgICAgIH1dLmNvbmNhdChtb2RpZmllcnMpXG4gICAgfSwgcmVzdFByb3BzKSwgZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICB2YXIgcmVmID0gX3JlZjMucmVmLFxuICAgICAgICAgIHN0eWxlID0gX3JlZjMuc3R5bGUsXG4gICAgICAgICAgcGxhY2VtZW50ID0gX3JlZjMucGxhY2VtZW50LFxuICAgICAgICAgIGFycm93UHJvcHMgPSBfcmVmMy5hcnJvd1Byb3BzLFxuICAgICAgICAgIGlzUmVmZXJlbmNlSGlkZGVuID0gX3JlZjMuaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgICAgICAgdXBkYXRlID0gX3JlZjMudXBkYXRlO1xuXG4gICAgICBpZiAoZm9sbG93Q3Vyc29yICYmIF90aGlzMi5wb3BwZXJPZmZzZXQpIHtcbiAgICAgICAgdmFyIF90aGlzMiRzdGF0ZSA9IF90aGlzMi5zdGF0ZSxcbiAgICAgICAgICAgIHBhZ2VYID0gX3RoaXMyJHN0YXRlLnBhZ2VYLFxuICAgICAgICAgICAgcGFnZVkgPSBfdGhpczIkc3RhdGUucGFnZVk7XG4gICAgICAgIHZhciBfdGhpczIkcG9wcGVyT2Zmc2V0ID0gX3RoaXMyLnBvcHBlck9mZnNldCxcbiAgICAgICAgICAgIHdpZHRoID0gX3RoaXMyJHBvcHBlck9mZnNldC53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCA9IF90aGlzMiRwb3BwZXJPZmZzZXQuaGVpZ2h0O1xuICAgICAgICB2YXIgeCA9IHBhZ2VYICsgd2lkdGggPiB3aW5kb3cucGFnZVhPZmZzZXQgKyBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoID8gcGFnZVggLSB3aWR0aCA6IHBhZ2VYO1xuICAgICAgICB2YXIgeSA9IHBhZ2VZICsgaGVpZ2h0ID4gd2luZG93LnBhZ2VZT2Zmc2V0ICsgZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQgPyBwYWdlWSAtIGhlaWdodCA6IHBhZ2VZO1xuICAgICAgICBzdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgsIDBcIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFRvb2x0aXAkMSwgX2V4dGVuZHMoe1xuICAgICAgICBhcnJvd1Byb3BzOiBhcnJvd1Byb3BzLFxuICAgICAgICBjbG9zZU9uUmVmZXJlbmNlSGlkZGVuOiBjbG9zZU9uUmVmZXJlbmNlSGlkZGVuLFxuICAgICAgICBpc1JlZmVyZW5jZUhpZGRlbjogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgICB1cGRhdGU6IHVwZGF0ZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICB0b29sdGlwOiB0b29sdGlwLFxuICAgICAgICB0cmlnZ2VyOiB0cmlnZ2VyLFxuICAgICAgICBtdXRhdGlvbk9ic2VydmVyT3B0aW9uczogbXV0YXRpb25PYnNlcnZlck9wdGlvbnNcbiAgICAgIH0sIHtcbiAgICAgICAgY2xlYXJTY2hlZHVsZWQ6IF90aGlzMi5jbGVhclNjaGVkdWxlZCxcbiAgICAgICAgaGlkZVRvb2x0aXA6IF90aGlzMi5oaWRlVG9vbHRpcCxcbiAgICAgICAgaW5uZXJSZWY6IHJlZlxuICAgICAgfSkpO1xuICAgIH0pO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChNYW5hZ2VyLCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChSZWZlcmVuY2UsIHtcbiAgICAgIGlubmVyUmVmOiBnZXRUcmlnZ2VyUmVmXG4gICAgfSwgZnVuY3Rpb24gKF9yZWY0KSB7XG4gICAgICB2YXIgcmVmID0gX3JlZjQucmVmO1xuICAgICAgcmV0dXJuIGNoaWxkcmVuKHtcbiAgICAgICAgZ2V0VHJpZ2dlclByb3BzOiBfdGhpczIuZ2V0VHJpZ2dlclByb3BzLFxuICAgICAgICB0cmlnZ2VyUmVmOiByZWZcbiAgICAgIH0pO1xuICAgIH0pLCB0aGlzLmdldFN0YXRlKCkgJiYgKHVzZVBvcnRhbCA/IC8qI19fUFVSRV9fKi9jcmVhdGVQb3J0YWwocG9wcGVyLCBwb3J0YWxDb250YWluZXIpIDogcG9wcGVyKSk7XG4gIH07XG5cbiAgX3Byb3RvLmlzQ29udHJvbGxlZCA9IGZ1bmN0aW9uIGlzQ29udHJvbGxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy50b29sdGlwU2hvd24gIT09IHVuZGVmaW5lZDtcbiAgfTtcblxuICBfcHJvdG8uZ2V0U3RhdGUgPSBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0NvbnRyb2xsZWQoKSA/IHRoaXMucHJvcHMudG9vbHRpcFNob3duIDogdGhpcy5zdGF0ZS50b29sdGlwU2hvd247XG4gIH07XG5cbiAgX3Byb3RvLmlzVHJpZ2dlcmVkQnkgPSBmdW5jdGlvbiBpc1RyaWdnZXJlZEJ5KGV2ZW50KSB7XG4gICAgdmFyIHRyaWdnZXIgPSB0aGlzLnByb3BzLnRyaWdnZXI7XG4gICAgcmV0dXJuIHRyaWdnZXIgPT09IGV2ZW50IHx8IEFycmF5LmlzQXJyYXkodHJpZ2dlcikgJiYgdHJpZ2dlci5pbmNsdWRlcyhldmVudCk7XG4gIH07XG5cbiAgcmV0dXJuIFRvb2x0aXBUcmlnZ2VyO1xufShDb21wb25lbnQpO1xuXG5Ub29sdGlwVHJpZ2dlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsb3NlT25SZWZlcmVuY2VIaWRkZW46IHRydWUsXG4gIGRlZmF1bHRUb29sdGlwU2hvd246IGZhbHNlLFxuICBkZWxheUhpZGU6IDAsXG4gIGRlbGF5U2hvdzogMCxcbiAgZm9sbG93Q3Vyc29yOiBmYWxzZSxcbiAgb25WaXNpYmlsaXR5Q2hhbmdlOiBub29wLFxuICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gIHBvcnRhbENvbnRhaW5lcjogY2FuVXNlRE9NKCkgPyBkb2N1bWVudC5ib2R5IDogbnVsbCxcbiAgdHJpZ2dlcjogJ2hvdmVyJyxcbiAgdXNlUG9ydGFsOiBjYW5Vc2VET00oKSxcbiAgbXV0YXRpb25PYnNlcnZlck9wdGlvbnM6IERFRkFVTFRfTVVUQVRJT05fT0JTRVJWRVJfQ09ORklHLFxuICBtb2RpZmllcnM6IFtdXG59O1xudmFyIFRvb2x0aXBUcmlnZ2VyJDEgPSBUb29sdGlwVHJpZ2dlcjtcbnZhciBtYXRjaCA9IG1lbW9pemUoMTAwMCkoZnVuY3Rpb24gKHJlcXVlc3RzLCBhY3R1YWwsIHZhbHVlKSB7XG4gIHZhciBmYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogMDtcbiAgcmV0dXJuIGFjdHVhbC5zcGxpdCgnLScpWzBdID09PSByZXF1ZXN0cyA/IHZhbHVlIDogZmFsbGJhY2s7XG59KTtcbnZhciBBcnJvd1NwYWNpbmcgPSA4O1xudmFyIEFycm93ID0gc3R5bGVkLmRpdih7XG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICBib3JkZXJTdHlsZTogJ3NvbGlkJ1xufSwgZnVuY3Rpb24gKF9yZWY2KSB7XG4gIHZhciBwbGFjZW1lbnQgPSBfcmVmNi5wbGFjZW1lbnQ7XG4gIHZhciB4ID0gMDtcbiAgdmFyIHkgPSAwO1xuXG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgcGxhY2VtZW50LnN0YXJ0c1dpdGgoJ2xlZnQnKSB8fCBwbGFjZW1lbnQuc3RhcnRzV2l0aCgncmlnaHQnKTpcbiAgICAgIHtcbiAgICAgICAgeSA9IDg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSBwbGFjZW1lbnQuc3RhcnRzV2l0aCgndG9wJykgfHwgcGxhY2VtZW50LnN0YXJ0c1dpdGgoJ2JvdHRvbScpOlxuICAgICAge1xuICAgICAgICB4ID0gODtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gIH1cblxuICB2YXIgdHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChcIi5jb25jYXQoeCwgXCJweCwgXCIpLmNvbmNhdCh5LCBcInB4LCAwcHgpXCIpO1xuICByZXR1cm4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtXG4gIH07XG59LCBmdW5jdGlvbiAoX3JlZjcpIHtcbiAgdmFyIHRoZW1lID0gX3JlZjcudGhlbWUsXG4gICAgICBjb2xvciA9IF9yZWY3LmNvbG9yLFxuICAgICAgcGxhY2VtZW50ID0gX3JlZjcucGxhY2VtZW50O1xuICByZXR1cm4ge1xuICAgIGJvdHRvbTogXCJcIi5jb25jYXQobWF0Y2goJ3RvcCcsIHBsYWNlbWVudCwgQXJyb3dTcGFjaW5nICogLTEsICdhdXRvJyksIFwicHhcIiksXG4gICAgdG9wOiBcIlwiLmNvbmNhdChtYXRjaCgnYm90dG9tJywgcGxhY2VtZW50LCBBcnJvd1NwYWNpbmcgKiAtMSwgJ2F1dG8nKSwgXCJweFwiKSxcbiAgICByaWdodDogXCJcIi5jb25jYXQobWF0Y2goJ2xlZnQnLCBwbGFjZW1lbnQsIEFycm93U3BhY2luZyAqIC0xLCAnYXV0bycpLCBcInB4XCIpLFxuICAgIGxlZnQ6IFwiXCIuY29uY2F0KG1hdGNoKCdyaWdodCcsIHBsYWNlbWVudCwgQXJyb3dTcGFjaW5nICogLTEsICdhdXRvJyksIFwicHhcIiksXG4gICAgYm9yZGVyQm90dG9tV2lkdGg6IFwiXCIuY29uY2F0KG1hdGNoKCd0b3AnLCBwbGFjZW1lbnQsICcwJywgQXJyb3dTcGFjaW5nKSwgXCJweFwiKSxcbiAgICBib3JkZXJUb3BXaWR0aDogXCJcIi5jb25jYXQobWF0Y2goJ2JvdHRvbScsIHBsYWNlbWVudCwgJzAnLCBBcnJvd1NwYWNpbmcpLCBcInB4XCIpLFxuICAgIGJvcmRlclJpZ2h0V2lkdGg6IFwiXCIuY29uY2F0KG1hdGNoKCdsZWZ0JywgcGxhY2VtZW50LCAnMCcsIEFycm93U3BhY2luZyksIFwicHhcIiksXG4gICAgYm9yZGVyTGVmdFdpZHRoOiBcIlwiLmNvbmNhdChtYXRjaCgncmlnaHQnLCBwbGFjZW1lbnQsICcwJywgQXJyb3dTcGFjaW5nKSwgXCJweFwiKSxcbiAgICBib3JkZXJUb3BDb2xvcjogbWF0Y2goJ3RvcCcsIHBsYWNlbWVudCwgdGhlbWUuY29sb3JbY29sb3JdIHx8IGNvbG9yIHx8IHRoZW1lLmJhc2UgPT09ICdsaWdodCcgPyBsaWdodGVuKHRoZW1lLmJhY2tncm91bmQuYXBwKSA6IGRhcmtlbih0aGVtZS5iYWNrZ3JvdW5kLmFwcCksICd0cmFuc3BhcmVudCcpLFxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiBtYXRjaCgnYm90dG9tJywgcGxhY2VtZW50LCB0aGVtZS5jb2xvcltjb2xvcl0gfHwgY29sb3IgfHwgdGhlbWUuYmFzZSA9PT0gJ2xpZ2h0JyA/IGxpZ2h0ZW4odGhlbWUuYmFja2dyb3VuZC5hcHApIDogZGFya2VuKHRoZW1lLmJhY2tncm91bmQuYXBwKSwgJ3RyYW5zcGFyZW50JyksXG4gICAgYm9yZGVyTGVmdENvbG9yOiBtYXRjaCgnbGVmdCcsIHBsYWNlbWVudCwgdGhlbWUuY29sb3JbY29sb3JdIHx8IGNvbG9yIHx8IHRoZW1lLmJhc2UgPT09ICdsaWdodCcgPyBsaWdodGVuKHRoZW1lLmJhY2tncm91bmQuYXBwKSA6IGRhcmtlbih0aGVtZS5iYWNrZ3JvdW5kLmFwcCksICd0cmFuc3BhcmVudCcpLFxuICAgIGJvcmRlclJpZ2h0Q29sb3I6IG1hdGNoKCdyaWdodCcsIHBsYWNlbWVudCwgdGhlbWUuY29sb3JbY29sb3JdIHx8IGNvbG9yIHx8IHRoZW1lLmJhc2UgPT09ICdsaWdodCcgPyBsaWdodGVuKHRoZW1lLmJhY2tncm91bmQuYXBwKSA6IGRhcmtlbih0aGVtZS5iYWNrZ3JvdW5kLmFwcCksICd0cmFuc3BhcmVudCcpXG4gIH07XG59KTtcbnZhciBXcmFwcGVyID0gc3R5bGVkLmRpdihmdW5jdGlvbiAoX3JlZjgpIHtcbiAgdmFyIGhpZGRlbiA9IF9yZWY4LmhpZGRlbjtcbiAgcmV0dXJuIHtcbiAgICBkaXNwbGF5OiBoaWRkZW4gPyAnbm9uZScgOiAnaW5saW5lLWJsb2NrJyxcbiAgICB6SW5kZXg6IDIxNDc0ODM2NDdcbiAgfTtcbn0sIGZ1bmN0aW9uIChfcmVmOSkge1xuICB2YXIgdGhlbWUgPSBfcmVmOS50aGVtZSxcbiAgICAgIGNvbG9yID0gX3JlZjkuY29sb3IsXG4gICAgICBoYXNDaHJvbWUgPSBfcmVmOS5oYXNDaHJvbWU7XG4gIHJldHVybiBoYXNDaHJvbWUgPyB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JbY29sb3JdIHx8IGNvbG9yIHx8IHRoZW1lLmJhc2UgPT09ICdsaWdodCcgPyBsaWdodGVuKHRoZW1lLmJhY2tncm91bmQuYXBwKSA6IGRhcmtlbih0aGVtZS5iYWNrZ3JvdW5kLmFwcCksXG4gICAgZmlsdGVyOiBcIlxcbiAgICAgICAgICAgIGRyb3Atc2hhZG93KDBweCA1cHggNXB4IHJnYmEoMCwwLDAsMC4wNSkpXFxuICAgICAgICAgICAgZHJvcC1zaGFkb3coMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xKSlcXG4gICAgICAgICAgXCIsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5hcHBCb3JkZXJSYWRpdXMgKiAyLFxuICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnNpemUuczFcbiAgfSA6IHt9O1xufSk7XG5cbnZhciBUb29sdGlwID0gZnVuY3Rpb24gVG9vbHRpcChfYSkge1xuICB2YXIgcGxhY2VtZW50ID0gX2EucGxhY2VtZW50LFxuICAgICAgaGFzQ2hyb21lID0gX2EuaGFzQ2hyb21lLFxuICAgICAgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbixcbiAgICAgIGFycm93UHJvcHMgPSBfYS5hcnJvd1Byb3BzLFxuICAgICAgdG9vbHRpcFJlZiA9IF9hLnRvb2x0aXBSZWYsXG4gICAgICBhcnJvd1JlZiA9IF9hLmFycm93UmVmLFxuICAgICAgY29sb3IgPSBfYS5jb2xvcixcbiAgICAgIHByb3BzID0gX19yZXN0KF9hLCBbXCJwbGFjZW1lbnRcIiwgXCJoYXNDaHJvbWVcIiwgXCJjaGlsZHJlblwiLCBcImFycm93UHJvcHNcIiwgXCJ0b29sdGlwUmVmXCIsIFwiYXJyb3dSZWZcIiwgXCJjb2xvclwiXSk7XG5cbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlciwgT2JqZWN0LmFzc2lnbih7XG4gICAgaGFzQ2hyb21lOiBoYXNDaHJvbWUsXG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgcmVmOiB0b29sdGlwUmVmXG4gIH0sIHByb3BzLCB7XG4gICAgY29sb3I6IGNvbG9yXG4gIH0pLCBoYXNDaHJvbWUgJiYgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChBcnJvdywgT2JqZWN0LmFzc2lnbih7XG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgcmVmOiBhcnJvd1JlZlxuICB9LCBhcnJvd1Byb3BzLCB7XG4gICAgY29sb3I6IGNvbG9yXG4gIH0pKSwgY2hpbGRyZW4pO1xufTtcblxuVG9vbHRpcC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbG9yOiB1bmRlZmluZWQsXG4gIGFycm93UmVmOiB1bmRlZmluZWQsXG4gIHRvb2x0aXBSZWY6IHVuZGVmaW5lZCxcbiAgaGFzQ2hyb21lOiB0cnVlLFxuICBwbGFjZW1lbnQ6ICd0b3AnLFxuICBhcnJvd1Byb3BzOiB7fVxufTtcbnZhciBkb2N1bWVudCQxID0gd2luZG93XzEuZG9jdW1lbnQ7IC8vIEEgdGFyZ2V0IHRoYXQgZG9lc24ndCBzcGVhayBwb3BwZXJcblxudmFyIFRhcmdldENvbnRhaW5lciA9IHN0eWxlZC5kaXYoX3RlbXBsYXRlT2JqZWN0IHx8IChfdGVtcGxhdGVPYmplY3QgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKFtcIlxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBcIiwgXCI7XFxuXCJdKSksIGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gcHJvcHMubW9kZSA9PT0gJ2hvdmVyJyA/ICdkZWZhdWx0JyA6ICdwb2ludGVyJztcbn0pO1xudmFyIFRhcmdldFN2Z0NvbnRhaW5lciA9IHN0eWxlZC5nKF90ZW1wbGF0ZU9iamVjdDIgfHwgKF90ZW1wbGF0ZU9iamVjdDIgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKFtcIlxcbiAgY3Vyc29yOiBcIiwgXCI7XFxuXCJdKSksIGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gcHJvcHMubW9kZSA9PT0gJ2hvdmVyJyA/ICdkZWZhdWx0JyA6ICdwb2ludGVyJztcbn0pOyAvLyBQdXJlLCBkb2VzIG5vdCBiaW5kIHRvIHRoZSBib2R5XG5cbnZhciBXaXRoVG9vbHRpcFB1cmUgPSBmdW5jdGlvbiBXaXRoVG9vbHRpcFB1cmUoX2EpIHtcbiAgdmFyIHN2ZyA9IF9hLnN2ZyxcbiAgICAgIHRyaWdnZXIgPSBfYS50cmlnZ2VyLFxuICAgICAgY2xvc2VPbkNsaWNrID0gX2EuY2xvc2VPbkNsaWNrLFxuICAgICAgcGxhY2VtZW50ID0gX2EucGxhY2VtZW50LFxuICAgICAgbW9kaWZpZXJzID0gX2EubW9kaWZpZXJzLFxuICAgICAgaGFzQ2hyb21lID0gX2EuaGFzQ2hyb21lLFxuICAgICAgX3Rvb2x0aXAgPSBfYS50b29sdGlwLFxuICAgICAgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbixcbiAgICAgIHRvb2x0aXBTaG93biA9IF9hLnRvb2x0aXBTaG93bixcbiAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSA9IF9hLm9uVmlzaWJpbGl0eUNoYW5nZSxcbiAgICAgIHByb3BzID0gX19yZXN0KF9hLCBbXCJzdmdcIiwgXCJ0cmlnZ2VyXCIsIFwiY2xvc2VPbkNsaWNrXCIsIFwicGxhY2VtZW50XCIsIFwibW9kaWZpZXJzXCIsIFwiaGFzQ2hyb21lXCIsIFwidG9vbHRpcFwiLCBcImNoaWxkcmVuXCIsIFwidG9vbHRpcFNob3duXCIsIFwib25WaXNpYmlsaXR5Q2hhbmdlXCJdKTtcblxuICB2YXIgQ29udGFpbmVyID0gc3ZnID8gVGFyZ2V0U3ZnQ29udGFpbmVyIDogVGFyZ2V0Q29udGFpbmVyO1xuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChUb29sdGlwVHJpZ2dlciQxLCB7XG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgdHJpZ2dlcjogdHJpZ2dlcixcbiAgICBtb2RpZmllcnM6IG1vZGlmaWVycyxcbiAgICB0b29sdGlwU2hvd246IHRvb2x0aXBTaG93bixcbiAgICBvblZpc2liaWxpdHlDaGFuZ2U6IG9uVmlzaWJpbGl0eUNoYW5nZSxcbiAgICB0b29sdGlwOiBmdW5jdGlvbiB0b29sdGlwKF9yZWYxMCkge1xuICAgICAgdmFyIGdldFRvb2x0aXBQcm9wcyA9IF9yZWYxMC5nZXRUb29sdGlwUHJvcHMsXG4gICAgICAgICAgZ2V0QXJyb3dQcm9wcyA9IF9yZWYxMC5nZXRBcnJvd1Byb3BzLFxuICAgICAgICAgIHRvb2x0aXBSZWYgPSBfcmVmMTAudG9vbHRpcFJlZixcbiAgICAgICAgICBhcnJvd1JlZiA9IF9yZWYxMC5hcnJvd1JlZixcbiAgICAgICAgICB0b29sdGlwUGxhY2VtZW50ID0gX3JlZjEwLnBsYWNlbWVudDtcbiAgICAgIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFRvb2x0aXAsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBoYXNDaHJvbWU6IGhhc0Nocm9tZSxcbiAgICAgICAgcGxhY2VtZW50OiB0b29sdGlwUGxhY2VtZW50LFxuICAgICAgICB0b29sdGlwUmVmOiB0b29sdGlwUmVmLFxuICAgICAgICBhcnJvd1JlZjogYXJyb3dSZWYsXG4gICAgICAgIGFycm93UHJvcHM6IGdldEFycm93UHJvcHMoKVxuICAgICAgfSwgZ2V0VG9vbHRpcFByb3BzKCkpLCB0eXBlb2YgX3Rvb2x0aXAgPT09ICdmdW5jdGlvbicgPyBfdG9vbHRpcCh7XG4gICAgICAgIG9uSGlkZTogZnVuY3Rpb24gb25IaWRlKCkge1xuICAgICAgICAgIHJldHVybiBvblZpc2liaWxpdHlDaGFuZ2UoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KSA6IF90b29sdGlwKTtcbiAgICB9XG4gIH0sIGZ1bmN0aW9uIChfcmVmMTEpIHtcbiAgICB2YXIgZ2V0VHJpZ2dlclByb3BzID0gX3JlZjExLmdldFRyaWdnZXJQcm9wcyxcbiAgICAgICAgdHJpZ2dlclJlZiA9IF9yZWYxMS50cmlnZ2VyUmVmO1xuICAgIHJldHVybiAoLy8gQHRzLWlnbm9yZVxuICAgICAgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChDb250YWluZXIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICByZWY6IHRyaWdnZXJSZWZcbiAgICAgIH0sIGdldFRyaWdnZXJQcm9wcygpLCBwcm9wcyksIGNoaWxkcmVuKVxuICAgICk7XG4gIH0pO1xufTtcblxuV2l0aFRvb2x0aXBQdXJlLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3ZnOiBmYWxzZSxcbiAgdHJpZ2dlcjogJ2hvdmVyJyxcbiAgY2xvc2VPbkNsaWNrOiBmYWxzZSxcbiAgcGxhY2VtZW50OiAndG9wJyxcbiAgbW9kaWZpZXJzOiBbe1xuICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHBhZGRpbmc6IDhcbiAgICB9XG4gIH0sIHtcbiAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvZmZzZXQ6IFs4LCA4XVxuICAgIH1cbiAgfSwge1xuICAgIG5hbWU6ICdhcnJvdycsXG4gICAgb3B0aW9uczoge1xuICAgICAgcGFkZGluZzogOFxuICAgIH1cbiAgfV0sXG4gIGhhc0Nocm9tZTogdHJ1ZSxcbiAgdG9vbHRpcFNob3duOiBmYWxzZVxufTtcblxudmFyIFdpdGhUb29sVGlwU3RhdGUgPSBmdW5jdGlvbiBXaXRoVG9vbFRpcFN0YXRlKF9hKSB7XG4gIHZhciBzdGFydE9wZW4gPSBfYS5zdGFydE9wZW4sXG4gICAgICBvbkNoYW5nZSA9IF9hLm9uVmlzaWJpbGl0eUNoYW5nZSxcbiAgICAgIHJlc3QgPSBfX3Jlc3QoX2EsIFtcInN0YXJ0T3BlblwiLCBcIm9uVmlzaWJpbGl0eUNoYW5nZVwiXSk7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKHN0YXJ0T3BlbiB8fCBmYWxzZSksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIHRvb2x0aXBTaG93biA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRUb29sdGlwU2hvd24gPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBvblZpc2liaWxpdHlDaGFuZ2UgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodmlzaWJpbGl0eSkge1xuICAgIGlmIChvbkNoYW5nZSAmJiBvbkNoYW5nZSh2aXNpYmlsaXR5KSA9PT0gZmFsc2UpIHJldHVybjtcbiAgICBzZXRUb29sdGlwU2hvd24odmlzaWJpbGl0eSk7XG4gIH0sIFtvbkNoYW5nZV0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBoaWRlID0gZnVuY3Rpb24gaGlkZSgpIHtcbiAgICAgIHJldHVybiBvblZpc2liaWxpdHlDaGFuZ2UoZmFsc2UpO1xuICAgIH07XG5cbiAgICBkb2N1bWVudCQxLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoaWRlLCBmYWxzZSk7IC8vIEZpbmQgYWxsIGlmcmFtZXMgb24gdGhlIHNjcmVlbiBhbmQgYmluZCB0byBjbGlja3MgaW5zaWRlIHRoZW0gKHdhaXRpbmcgdW50aWwgdGhlIGlmcmFtZSBpcyByZWFkeSlcblxuICAgIHZhciBpZnJhbWVzID0gQXJyYXkuZnJvbShkb2N1bWVudCQxLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpZnJhbWUnKSk7XG4gICAgdmFyIHVuYmluZGVycyA9IFtdO1xuICAgIGlmcmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoaWZyYW1lKSB7XG4gICAgICB2YXIgYmluZCA9IGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50KSB7XG4gICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGUpO1xuICAgICAgICAgICAgdW5iaW5kZXJzLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZSk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsvLyBsb2dnZXIuZGVidWcoJ1JlbW92aW5nIGEgY2xpY2sgbGlzdGVuZXIgZnJvbSBpZnJhbWUgZmFpbGVkOiAnLCBlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7Ly8gbG9nZ2VyLmRlYnVnKCdBZGRpbmcgYSBjbGljayBsaXN0ZW5lciB0byBpZnJhbWUgZmFpbGVkOiAnLCBlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgYmluZCgpOyAvLyBJIGRvbid0IGtub3cgaG93IHRvIGZpbmQgb3V0IGlmIGl0J3MgYWxyZWFkeSBsb2FkZWQgc28gSSBwb3RlbnRpYWxseSB3aWxsIGJpbmQgdHdpY2VcblxuICAgICAgaWZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBiaW5kKTtcbiAgICAgIHVuYmluZGVycy5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWZyYW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBiaW5kKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBkb2N1bWVudCQxLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoaWRlKTtcbiAgICAgIHVuYmluZGVycy5mb3JFYWNoKGZ1bmN0aW9uICh1bmJpbmQpIHtcbiAgICAgICAgdW5iaW5kKCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoV2l0aFRvb2x0aXBQdXJlLCBPYmplY3QuYXNzaWduKHt9LCByZXN0LCB7XG4gICAgdG9vbHRpcFNob3duOiB0b29sdGlwU2hvd24sXG4gICAgb25WaXNpYmlsaXR5Q2hhbmdlOiBvblZpc2liaWxpdHlDaGFuZ2VcbiAgfSkpO1xufTtcblxuZXhwb3J0IHsgV2l0aFRvb2xUaXBTdGF0ZSwgV2l0aFRvb2xUaXBTdGF0ZSBhcyBXaXRoVG9vbHRpcCwgV2l0aFRvb2x0aXBQdXJlIH07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lQnVpbHRJbkFjY2Vzc29yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3NvcicpO1xudmFyIHJlZ0V4cEZsYWdzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1mbGFncycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIGJhYmVsLW1pbmlmeSBhbmQgQ2xvc3VyZSBDb21waWxlciB0cmFuc3BpbGVzIFJlZ0V4cCgnLicsICdkJykgLT4gLy4vZCBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXG52YXIgUmVnRXhwID0gZ2xvYmFsLlJlZ0V4cDtcbnZhciBSZWdFeHBQcm90b3R5cGUgPSBSZWdFeHAucHJvdG90eXBlO1xuXG52YXIgRk9SQ0VEID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgSU5ESUNFU19TVVBQT1JUID0gdHJ1ZTtcbiAgdHJ5IHtcbiAgICBSZWdFeHAoJy4nLCAnZCcpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIElORElDRVNfU1VQUE9SVCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIE8gPSB7fTtcbiAgLy8gbW9kZXJuIFY4IGJ1Z1xuICB2YXIgY2FsbHMgPSAnJztcbiAgdmFyIGV4cGVjdGVkID0gSU5ESUNFU19TVVBQT1JUID8gJ2RnaW1zeScgOiAnZ2ltc3knO1xuXG4gIHZhciBhZGRHZXR0ZXIgPSBmdW5jdGlvbiAoa2V5LCBjaHIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywga2V5LCB7IGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbHMgKz0gY2hyO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSB9KTtcbiAgfTtcblxuICB2YXIgcGFpcnMgPSB7XG4gICAgZG90QWxsOiAncycsXG4gICAgZ2xvYmFsOiAnZycsXG4gICAgaWdub3JlQ2FzZTogJ2knLFxuICAgIG11bHRpbGluZTogJ20nLFxuICAgIHN0aWNreTogJ3knXG4gIH07XG5cbiAgaWYgKElORElDRVNfU1VQUE9SVCkgcGFpcnMuaGFzSW5kaWNlcyA9ICdkJztcblxuICBmb3IgKHZhciBrZXkgaW4gcGFpcnMpIGFkZEdldHRlcihrZXksIHBhaXJzW2tleV0pO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbiAgdmFyIHJlc3VsdCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoUmVnRXhwUHJvdG90eXBlLCAnZmxhZ3MnKS5nZXQuY2FsbChPKTtcblxuICByZXR1cm4gcmVzdWx0ICE9PSBleHBlY3RlZCB8fCBjYWxscyAhPT0gZXhwZWN0ZWQ7XG59KTtcblxuLy8gYFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NgIGdldHRlclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXQtcmVnZXhwLnByb3RvdHlwZS5mbGFnc1xuaWYgKEZPUkNFRCkgZGVmaW5lQnVpbHRJbkFjY2Vzc29yKFJlZ0V4cFByb3RvdHlwZSwgJ2ZsYWdzJywge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogcmVnRXhwRmxhZ3Ncbn0pO1xuIl0sIm5hbWVzIjpbIl90ZW1wbGF0ZU9iamVjdCIsIl90ZW1wbGF0ZU9iamVjdDIiLCJfc2xpY2VkVG9BcnJheSIsImFyciIsImkiLCJfYXJyYXlXaXRoSG9sZXMiLCJBcnJheSIsImlzQXJyYXkiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfaSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiX3MiLCJfZSIsIl9hcnIiLCJfbiIsIl9kIiwiY2FsbCIsIm5leHQiLCJkb25lIiwicHVzaCIsInZhbHVlIiwibGVuZ3RoIiwiZXJyIiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwibyIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwibiIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJmcm9tIiwidGVzdCIsIl9ub25JdGVyYWJsZVJlc3QiLCJUeXBlRXJyb3IiLCJsZW4iLCJhcnIyIiwiX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCIsInN0cmluZ3MiLCJyYXciLCJmcmVlemUiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX3R5cGVvZiIsIm9iaiIsImdldE5vZGVOYW1lIiwiZWxlbWVudCIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJnZXRXaW5kb3ciLCJub2RlIiwid2luZG93Iiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3IiwiaXNFbGVtZW50IiwiRWxlbWVudCIsImlzSFRNTEVsZW1lbnQiLCJIVE1MRWxlbWVudCIsImlzU2hhZG93Um9vdCIsIlNoYWRvd1Jvb3QiLCJhcHBseVN0eWxlcyQxIiwiZW5hYmxlZCIsInBoYXNlIiwiZm4iLCJhcHBseVN0eWxlcyIsIl9yZWYiLCJzdGF0ZSIsImtleXMiLCJlbGVtZW50cyIsImZvckVhY2giLCJzdHlsZSIsInN0eWxlcyIsImF0dHJpYnV0ZXMiLCJhc3NpZ24iLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJlZmZlY3QiLCJlZmZlY3QkMiIsIl9yZWYyIiwiaW5pdGlhbFN0eWxlcyIsInBvcHBlciIsInBvc2l0aW9uIiwib3B0aW9ucyIsInN0cmF0ZWd5IiwibGVmdCIsInRvcCIsIm1hcmdpbiIsImFycm93IiwicmVmZXJlbmNlIiwiaGFzT3duUHJvcGVydHkiLCJyZWR1Y2UiLCJwcm9wZXJ0eSIsImF0dHJpYnV0ZSIsInJlcXVpcmVzIiwiZ2V0QmFzZVBsYWNlbWVudCIsInBsYWNlbWVudCIsInNwbGl0IiwibWF4IiwiTWF0aCIsIm1pbiIsInJvdW5kIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaW5jbHVkZVNjYWxlIiwicmVjdCIsInNjYWxlWCIsInNjYWxlWSIsIm9mZnNldEhlaWdodCIsIm9mZnNldFdpZHRoIiwid2lkdGgiLCJoZWlnaHQiLCJyaWdodCIsImJvdHRvbSIsIngiLCJ5IiwiZ2V0TGF5b3V0UmVjdCIsImNsaWVudFJlY3QiLCJhYnMiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwiY29udGFpbnMiLCJwYXJlbnQiLCJjaGlsZCIsInJvb3ROb2RlIiwiZ2V0Um9vdE5vZGUiLCJpc1NhbWVOb2RlIiwicGFyZW50Tm9kZSIsImhvc3QiLCJnZXRDb21wdXRlZFN0eWxlIiwiaXNUYWJsZUVsZW1lbnQiLCJpbmRleE9mIiwiZ2V0RG9jdW1lbnRFbGVtZW50IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRQYXJlbnROb2RlIiwiYXNzaWduZWRTbG90IiwiZ2V0VHJ1ZU9mZnNldFBhcmVudCIsIm9mZnNldFBhcmVudCIsImdldE9mZnNldFBhcmVudCIsImdldENvbnRhaW5pbmdCbG9jayIsImlzRmlyZWZveCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImN1cnJlbnROb2RlIiwiY3NzIiwidHJhbnNmb3JtIiwicGVyc3BlY3RpdmUiLCJjb250YWluIiwid2lsbENoYW5nZSIsImZpbHRlciIsImdldE1haW5BeGlzRnJvbVBsYWNlbWVudCIsIndpdGhpbiIsIm1pbiQxIiwibWF4JDEiLCJtZXJnZVBhZGRpbmdPYmplY3QiLCJwYWRkaW5nT2JqZWN0IiwiZXhwYW5kVG9IYXNoTWFwIiwiaGFzaE1hcCIsImtleSIsImFycm93JDEiLCJfc3RhdGUkbW9kaWZpZXJzRGF0YSQiLCJhcnJvd0VsZW1lbnQiLCJwb3BwZXJPZmZzZXRzIiwibW9kaWZpZXJzRGF0YSIsImJhc2VQbGFjZW1lbnQiLCJheGlzIiwibCIsInIiLCJ0b1BhZGRpbmdPYmplY3QiLCJwYWRkaW5nIiwicmVjdHMiLCJhcnJvd1JlY3QiLCJtaW5Qcm9wIiwidCIsIm1heFByb3AiLCJlbmREaWZmIiwic3RhcnREaWZmIiwiYXJyb3dPZmZzZXRQYXJlbnQiLCJjbGllbnRTaXplIiwiY2xpZW50SGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJjZW50ZXJUb1JlZmVyZW5jZSIsImNlbnRlciIsIm9mZnNldCIsImF4aXNQcm9wIiwiY2VudGVyT2Zmc2V0IiwiZWZmZWN0JDEiLCJfb3B0aW9ucyRlbGVtZW50IiwicXVlcnlTZWxlY3RvciIsInJlcXVpcmVzSWZFeGlzdHMiLCJnZXRWYXJpYXRpb24iLCJ1bnNldFNpZGVzIiwibWFwVG9TdHlsZXMiLCJfT2JqZWN0JGFzc2lnbjIiLCJwb3BwZXJSZWN0IiwidmFyaWF0aW9uIiwib2Zmc2V0cyIsImdwdUFjY2VsZXJhdGlvbiIsImFkYXB0aXZlIiwicm91bmRPZmZzZXRzIiwiaXNGaXhlZCIsIl9vZmZzZXRzJHgiLCJfb2Zmc2V0cyR5IiwiX3JlZjMiLCJoYXNYIiwiaGFzWSIsInNpZGVYIiwic2lkZVkiLCJ3aW4iLCJoZWlnaHRQcm9wIiwid2lkdGhQcm9wIiwidmlzdWFsVmlld3BvcnQiLCJfT2JqZWN0JGFzc2lnbiIsImNvbW1vblN0eWxlcyIsIl9yZWY0Iiwicm91bmRPZmZzZXRzQnlEUFIiLCJkcHIiLCJkZXZpY2VQaXhlbFJhdGlvIiwicGFzc2l2ZSIsImhhc2gkMSIsImdldE9wcG9zaXRlUGxhY2VtZW50IiwicmVwbGFjZSIsIm1hdGNoZWQiLCJoYXNoIiwic3RhcnQiLCJlbmQiLCJnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudCIsImdldFdpbmRvd1Njcm9sbCIsInNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiZ2V0V2luZG93U2Nyb2xsQmFyWCIsImlzU2Nyb2xsUGFyZW50IiwiX2dldENvbXB1dGVkU3R5bGUiLCJvdmVyZmxvdyIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsImdldFNjcm9sbFBhcmVudCIsImJvZHkiLCJsaXN0U2Nyb2xsUGFyZW50cyIsImxpc3QiLCJfZWxlbWVudCRvd25lckRvY3VtZW4iLCJzY3JvbGxQYXJlbnQiLCJpc0JvZHkiLCJ0YXJnZXQiLCJjb25jYXQiLCJ1cGRhdGVkTGlzdCIsInJlY3RUb0NsaWVudFJlY3QiLCJnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZSIsImNsaXBwaW5nUGFyZW50IiwidiIsImdldFZpZXdwb3J0UmVjdCIsImh0bWwiLCJnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFRvcCIsImNsaWVudExlZnQiLCJnZXREb2N1bWVudFJlY3QiLCJ3aW5TY3JvbGwiLCJzY3JvbGxXaWR0aCIsInNjcm9sbEhlaWdodCIsImRpcmVjdGlvbiIsImdldENsaXBwaW5nUmVjdCIsImJvdW5kYXJ5Iiwicm9vdEJvdW5kYXJ5IiwibWFpbkNsaXBwaW5nUGFyZW50cyIsImdldENsaXBwaW5nUGFyZW50cyIsImNsaXBwaW5nUGFyZW50cyIsImNsaXBwZXJFbGVtZW50IiwiZmlyc3RDbGlwcGluZ1BhcmVudCIsImNsaXBwaW5nUmVjdCIsImFjY1JlY3QiLCJjb21wdXRlT2Zmc2V0cyIsImNvbW1vblgiLCJjb21tb25ZIiwibWFpbkF4aXMiLCJzIiwiZGV0ZWN0T3ZlcmZsb3ciLCJfb3B0aW9ucyIsIl9vcHRpb25zJHBsYWNlbWVudCIsIl9vcHRpb25zJGJvdW5kYXJ5IiwiX29wdGlvbnMkcm9vdEJvdW5kYXJ5IiwiX29wdGlvbnMkZWxlbWVudENvbnRlIiwiZWxlbWVudENvbnRleHQiLCJwIiwiX29wdGlvbnMkYWx0Qm91bmRhcnkiLCJhbHRCb3VuZGFyeSIsIl9vcHRpb25zJHBhZGRpbmciLCJhbHRDb250ZXh0IiwiY2xpcHBpbmdDbGllbnRSZWN0IiwiY29udGV4dEVsZW1lbnQiLCJyZWZlcmVuY2VDbGllbnRSZWN0IiwicG9wcGVyQ2xpZW50UmVjdCIsImVsZW1lbnRDbGllbnRSZWN0Iiwib3ZlcmZsb3dPZmZzZXRzIiwib2Zmc2V0RGF0YSIsIm11bHRpcGx5IiwiZ2V0U2lkZU9mZnNldHMiLCJwcmV2ZW50ZWRPZmZzZXRzIiwiaXNBbnlTaWRlRnVsbHlDbGlwcGVkIiwic29tZSIsInNpZGUiLCJvZmZzZXQkMSIsIl9vcHRpb25zJG9mZnNldCIsImRhdGEiLCJhY2MiLCJkaXN0YW5jZUFuZFNraWRkaW5nVG9YWSIsImludmVydERpc3RhbmNlIiwic2tpZGRpbmciLCJkaXN0YW5jZSIsIl9kYXRhJHN0YXRlJHBsYWNlbWVudCIsInByZXZlbnRPdmVyZmxvdyQxIiwicHJldmVudE92ZXJmbG93IiwiX29wdGlvbnMkbWFpbkF4aXMiLCJjaGVja01haW5BeGlzIiwiX29wdGlvbnMkYWx0QXhpcyIsImFsdEF4aXMiLCJjaGVja0FsdEF4aXMiLCJfb3B0aW9ucyR0ZXRoZXIiLCJ0ZXRoZXIiLCJfb3B0aW9ucyR0ZXRoZXJPZmZzZXQiLCJ0ZXRoZXJPZmZzZXQiLCJpc0Jhc2VQbGFjZW1lbnQiLCJnZXRBbHRBeGlzIiwicmVmZXJlbmNlUmVjdCIsInRldGhlck9mZnNldFZhbHVlIiwibm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlIiwib2Zmc2V0TW9kaWZpZXJTdGF0ZSIsIl9vZmZzZXRNb2RpZmllclN0YXRlJCIsIm1haW5TaWRlIiwiYWx0U2lkZSIsImFkZGl0aXZlIiwibWF4TGVuIiwiYXJyb3dQYWRkaW5nT2JqZWN0IiwiYXJyb3dQYWRkaW5nTWluIiwiYXJyb3dQYWRkaW5nTWF4IiwiYXJyb3dMZW4iLCJtaW5PZmZzZXQiLCJtYXhPZmZzZXQiLCJjbGllbnRPZmZzZXQiLCJvZmZzZXRNb2RpZmllclZhbHVlIiwidGV0aGVyTWF4IiwicHJldmVudGVkT2Zmc2V0IiwiX29mZnNldE1vZGlmaWVyU3RhdGUkMiIsIl9tYWluU2lkZSIsIl9hbHRTaWRlIiwiX29mZnNldCIsIl9sZW4iLCJfbWluIiwiX21heCIsImlzT3JpZ2luU2lkZSIsIl9vZmZzZXRNb2RpZmllclZhbHVlIiwiX3RldGhlck1pbiIsIl90ZXRoZXJNYXgiLCJfcHJldmVudGVkT2Zmc2V0Iiwid2l0aGluTWF4Q2xhbXAiLCJnZXRDb21wb3NpdGVSZWN0IiwiZWxlbWVudE9yVmlydHVhbEVsZW1lbnQiLCJpc09mZnNldFBhcmVudEFuRWxlbWVudCIsIm9mZnNldFBhcmVudElzU2NhbGVkIiwiaXNFbGVtZW50U2NhbGVkIiwic2Nyb2xsIiwiZ2V0Tm9kZVNjcm9sbCIsImdldEhUTUxFbGVtZW50U2Nyb2xsIiwib3JkZXIiLCJtb2RpZmllcnMiLCJtYXAiLCJNYXAiLCJ2aXNpdGVkIiwiU2V0IiwicmVzdWx0Iiwic29ydCIsIm1vZGlmaWVyIiwiYWRkIiwiZGVwIiwiaGFzIiwiZGVwTW9kaWZpZXIiLCJnZXQiLCJzZXQiLCJERUZBVUxUX09QVElPTlMiLCJhcmVWYWxpZEVsZW1lbnRzIiwiYXJndW1lbnRzIiwiYXJncyIsIl9rZXkiLCJwb3BwZXJHZW5lcmF0b3IiLCJnZW5lcmF0b3JPcHRpb25zIiwiX2dlbmVyYXRvck9wdGlvbnMiLCJfZ2VuZXJhdG9yT3B0aW9ucyRkZWYiLCJkZWZhdWx0TW9kaWZpZXJzIiwiX2dlbmVyYXRvck9wdGlvbnMkZGVmMiIsImRlZmF1bHRPcHRpb25zIiwiY3JlYXRlUG9wcGVyIiwicGVuZGluZyIsIm9yZGVyZWRNb2RpZmllcnMiLCJlZmZlY3RDbGVhbnVwRm5zIiwiaXNEZXN0cm95ZWQiLCJpbnN0YW5jZSIsInNldE9wdGlvbnMiLCJzZXRPcHRpb25zQWN0aW9uIiwiY2xlYW51cE1vZGlmaWVyRWZmZWN0cyIsInNjcm9sbFBhcmVudHMiLCJvcmRlck1vZGlmaWVycyIsIm1lcmdlQnlOYW1lIiwibWVyZ2VkIiwiY3VycmVudCIsImV4aXN0aW5nIiwibSIsInJ1bk1vZGlmaWVyRWZmZWN0cyIsIl9yZWYzJG9wdGlvbnMiLCJjbGVhbnVwRm4iLCJub29wRm4iLCJ1cGRhdGUiLCJmb3JjZVVwZGF0ZSIsIl9zdGF0ZSRlbGVtZW50cyIsInJlc2V0IiwiaW5kZXgiLCJfc3RhdGUkb3JkZXJlZE1vZGlmaWUiLCJfc3RhdGUkb3JkZXJlZE1vZGlmaWUyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwidW5kZWZpbmVkIiwiZGVzdHJveSIsIm9uRmlyc3RVcGRhdGUiLCJfb3B0aW9ucyRzY3JvbGwiLCJfb3B0aW9ucyRyZXNpemUiLCJyZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbXB1dGVTdHlsZXMiLCJfcmVmNSIsIl9vcHRpb25zJGdwdUFjY2VsZXJhdCIsIl9vcHRpb25zJGFkYXB0aXZlIiwiX29wdGlvbnMkcm91bmRPZmZzZXRzIiwiZmxpcCIsIl9za2lwIiwic3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzIiwiZmFsbGJhY2tQbGFjZW1lbnRzIiwiX29wdGlvbnMkZmxpcFZhcmlhdGlvIiwiZmxpcFZhcmlhdGlvbnMiLCJhbGxvd2VkQXV0b1BsYWNlbWVudHMiLCJwcmVmZXJyZWRQbGFjZW1lbnQiLCJnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyIsIm9wcG9zaXRlUGxhY2VtZW50IiwicGxhY2VtZW50cyIsImNvbXB1dGVBdXRvUGxhY2VtZW50IiwiX29wdGlvbnMkYWxsb3dlZEF1dG9QIiwicGxhY2VtZW50cyQxIiwiYWxsb3dlZFBsYWNlbWVudHMiLCJvdmVyZmxvd3MiLCJhIiwiYiIsImNoZWNrc01hcCIsIm1ha2VGYWxsYmFja0NoZWNrcyIsImZpcnN0Rml0dGluZ1BsYWNlbWVudCIsIl9iYXNlUGxhY2VtZW50IiwiaXNTdGFydFZhcmlhdGlvbiIsImlzVmVydGljYWwiLCJtYWluVmFyaWF0aW9uU2lkZSIsImFsdFZhcmlhdGlvblNpZGUiLCJjaGVja3MiLCJldmVyeSIsImNoZWNrIiwiX2xvb3AiLCJmaXR0aW5nUGxhY2VtZW50IiwiZmluZCIsImhpZGUiLCJyZWZlcmVuY2VPdmVyZmxvdyIsInBvcHBlckFsdE92ZXJmbG93IiwicmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzIiwicG9wcGVyRXNjYXBlT2Zmc2V0cyIsImlzUmVmZXJlbmNlSGlkZGVuIiwiaGFzUG9wcGVyRXNjYXBlZCIsIl9zZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiX2luaGVyaXRzTG9vc2UiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjcmVhdGUiLCJNYW5hZ2VyUmVmZXJlbmNlTm9kZUNvbnRleHQiLCJNYW5hZ2VyUmVmZXJlbmNlTm9kZVNldHRlckNvbnRleHQiLCJNYW5hZ2VyIiwiY2hpbGRyZW4iLCJfUmVhY3QkdXNlU3RhdGUiLCJyZWZlcmVuY2VOb2RlIiwic2V0UmVmZXJlbmNlTm9kZSIsImhhc1VubW91bnRlZCIsImhhbmRsZVNldFJlZmVyZW5jZU5vZGUiLCJQcm92aWRlciIsInVud3JhcEFycmF5IiwiYXJnIiwic2FmZUludm9rZSIsImFwcGx5Iiwic2V0UmVmJDEiLCJzZXRSZWYiLCJyZWYiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJ1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IiwiY3JlYXRlRWxlbWVudCIsImhhc0VsZW1lbnRUeXBlIiwiaGFzTWFwIiwiaGFzU2V0IiwiaGFzQXJyYXlCdWZmZXIiLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsImVxdWFsIiwiaXQiLCJzaXplIiwiUmVnRXhwIiwic291cmNlIiwiZmxhZ3MiLCJ2YWx1ZU9mIiwiJCR0eXBlb2YiLCJyZWFjdEZhc3RDb21wYXJlIiwiaXNFcXVhbCIsImVycm9yIiwibWVzc2FnZSIsIm1hdGNoIiwiY29uc29sZSIsIndhcm4iLCJFTVBUWV9NT0RJRklFUlMkMSIsIk5PT1AiLCJOT09QX1BST01JU0UiLCJFTVBUWV9NT0RJRklFUlMiLCJQb3BwZXIiLCJfcmVmJHBsYWNlbWVudCIsIl9yZWYkc3RyYXRlZ3kiLCJfcmVmJG1vZGlmaWVycyIsInJlZmVyZW5jZUVsZW1lbnQiLCJpbm5lclJlZiIsInBvcHBlckVsZW1lbnQiLCJzZXRQb3BwZXJFbGVtZW50IiwiX1JlYWN0JHVzZVN0YXRlMiIsInNldEFycm93RWxlbWVudCIsIl91c2VQb3BwZXIiLCJ1c2VQb3BwZXIiLCJwcmV2T3B0aW9ucyIsIm9wdGlvbnNXaXRoRGVmYXVsdHMiLCJzZXRTdGF0ZSIsInVwZGF0ZVN0YXRlTW9kaWZpZXIiLCJwb3BwZXJPcHRpb25zIiwibmV3T3B0aW9ucyIsInBvcHBlckluc3RhbmNlUmVmIiwicG9wcGVySW5zdGFuY2UiLCJjaGlsZHJlblByb3BzIiwiYXJyb3dQcm9wcyIsIndhcm5pbmciLCJ3YXJuaW5nXzEiLCJSZWZlcmVuY2UiLCJyZWZIYW5kbGVyIiwiQm9vbGVhbiIsIlRvb2x0aXBDb250ZXh0IiwiY2FsbEFsbCIsImZucyIsIl9sZW4yIiwiX2tleTIiLCJjYW5Vc2VET00iLCJUb29sdGlwJDEiLCJfQ29tcG9uZW50IiwiVG9vbHRpcCIsIl90aGlzIiwidGhpcyIsIm9ic2VydmVyIiwidG9vbHRpcFJlZiIsImhhbmRsZU91dHNpZGVDbGljayIsImV2ZW50IiwicGFyZW50T3V0c2lkZUNsaWNrSGFuZGxlciIsImNvbnRleHQiLCJfdGhpcyRwcm9wcyIsInByb3BzIiwiaGlkZVRvb2x0aXAiLCJjbGVhclNjaGVkdWxlZCIsImhhbmRsZU91dHNpZGVSaWdodENsaWNrIiwicGFyZW50T3V0c2lkZVJpZ2h0Q2xpY2tIYW5kbGVyIiwiX3RoaXMkcHJvcHMyIiwiYWRkT3V0c2lkZUNsaWNrSGFuZGxlciIsInJlbW92ZU91dHNpZGVDbGlja0hhbmRsZXIiLCJhZGRPdXRzaWRlUmlnaHRDbGlja0hhbmRsZXIiLCJyZW1vdmVPdXRzaWRlUmlnaHRDbGlja0hhbmRsZXIiLCJnZXRUb29sdGlwUmVmIiwiZ2V0QXJyb3dQcm9wcyIsImdldFRvb2x0aXBQcm9wcyIsImlzVHJpZ2dlcmVkQnkiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJjb250ZXh0VmFsdWUiLCJpc1BhcmVudE5vbmVUcmlnZ2VyZWQiLCJ0cmlnZ2VyIiwiYWRkUGFyZW50T3V0c2lkZUNsaWNrSGFuZGxlciIsImFkZFBhcmVudE91dHNpZGVSaWdodENsaWNrSGFuZGxlciIsInJlbW92ZVBhcmVudE91dHNpZGVDbGlja0hhbmRsZXIiLCJyZW1vdmVQYXJlbnRPdXRzaWRlUmlnaHRDbGlja0hhbmRsZXIiLCJfcHJvdG8iLCJjb21wb25lbnREaWRNb3VudCIsIl90aGlzMiIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwibXV0YXRpb25PYnNlcnZlck9wdGlvbnMiLCJfdGhpcyRjb250ZXh0IiwiY29tcG9uZW50RGlkVXBkYXRlIiwiY2xvc2VPblJlZmVyZW5jZUhpZGRlbiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZGlzY29ubmVjdCIsIl90aGlzJGNvbnRleHQyIiwicmVuZGVyIiwiX3RoaXMkcHJvcHMzIiwidG9vbHRpcCIsImFycm93UmVmIiwiaW5jbHVkZXMiLCJDb21wb25lbnQiLCJjb250ZXh0VHlwZSIsIlRvb2x0aXBUcmlnZ2VyIiwidG9vbHRpcFNob3duIiwiZGVmYXVsdFRvb2x0aXBTaG93biIsImhpZGVUaW1lb3V0Iiwic2hvd1RpbWVvdXQiLCJwb3BwZXJPZmZzZXQiLCJzZXRUb29sdGlwU3RhdGUiLCJjYiIsIm9uVmlzaWJpbGl0eUNoYW5nZSIsImlzQ29udHJvbGxlZCIsImNsZWFyVGltZW91dCIsInNob3dUb29sdGlwIiwicGFnZVgiLCJwYWdlWSIsImZvbGxvd0N1cnNvciIsInNldFRpbWVvdXQiLCJkZWxheVNob3ciLCJkZWxheUhpZGUiLCJ0b2dnbGVUb29sdGlwIiwiYWN0aW9uIiwiZ2V0U3RhdGUiLCJjbGlja1RvZ2dsZSIsInByZXZlbnREZWZhdWx0IiwiY29udGV4dE1lbnVUb2dnbGUiLCJnZXRUcmlnZ2VyUHJvcHMiLCJvbkNsaWNrIiwib25Ub3VjaEVuZCIsIm9uQ29udGV4dE1lbnUiLCJvbk1vdXNlTW92ZSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJnZXRUcmlnZ2VyUmVmIiwidXNlUG9ydGFsIiwicG9ydGFsQ29udGFpbmVyIiwicmVzdFByb3BzIiwiXyIsIl90aGlzMiRzdGF0ZSIsIl90aGlzMiRwb3BwZXJPZmZzZXQiLCJ0cmlnZ2VyUmVmIiwiY3JlYXRlUG9ydGFsIiwiZGVmYXVsdFByb3BzIiwibm9vcCIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJUb29sdGlwVHJpZ2dlciQxIiwicmVxdWVzdHMiLCJhY3R1YWwiLCJmYWxsYmFjayIsIkFycm93IiwiZGl2IiwiYm9yZGVyU3R5bGUiLCJfcmVmNiIsInN0YXJ0c1dpdGgiLCJfcmVmNyIsInRoZW1lIiwiY29sb3IiLCJBcnJvd1NwYWNpbmciLCJib3JkZXJCb3R0b21XaWR0aCIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyUmlnaHRXaWR0aCIsImJvcmRlckxlZnRXaWR0aCIsImJvcmRlclRvcENvbG9yIiwiYmFzZSIsImJhY2tncm91bmQiLCJhcHAiLCJib3JkZXJCb3R0b21Db2xvciIsImJvcmRlckxlZnRDb2xvciIsImJvcmRlclJpZ2h0Q29sb3IiLCJXcmFwcGVyIiwiX3JlZjgiLCJkaXNwbGF5IiwiaGlkZGVuIiwiekluZGV4IiwiX3JlZjkiLCJoYXNDaHJvbWUiLCJib3JkZXJSYWRpdXMiLCJhcHBCb3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsInR5cG9ncmFwaHkiLCJzMSIsIl9hIiwiZG9jdW1lbnQkMSIsInciLCJUYXJnZXRDb250YWluZXIiLCJtb2RlIiwiVGFyZ2V0U3ZnQ29udGFpbmVyIiwiZyIsIldpdGhUb29sdGlwUHVyZSIsInN2ZyIsImNsb3NlT25DbGljayIsIl90b29sdGlwIiwiQ29udGFpbmVyIiwiX3JlZjEwIiwidG9vbHRpcFBsYWNlbWVudCIsIm9uSGlkZSIsIl9yZWYxMSIsIldpdGhUb29sVGlwU3RhdGUiLCJzdGFydE9wZW4iLCJvbkNoYW5nZSIsInJlc3QiLCJfdXNlU3RhdGUyIiwidXNlU3RhdGUiLCJzZXRUb29sdGlwU2hvd24iLCJ1c2VDYWxsYmFjayIsInZpc2liaWxpdHkiLCJ1c2VFZmZlY3QiLCJpZnJhbWVzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ1bmJpbmRlcnMiLCJpZnJhbWUiLCJiaW5kIiwiY29udGVudFdpbmRvdyIsImUiLCJ1bmJpbmQiLCJnbG9iYWwiLCJERVNDUklQVE9SUyIsImRlZmluZUJ1aWx0SW5BY2Nlc3NvciIsInJlZ0V4cEZsYWdzIiwiZmFpbHMiLCJSZWdFeHBQcm90b3R5cGUiLCJJTkRJQ0VTX1NVUFBPUlQiLCJPIiwiY2FsbHMiLCJleHBlY3RlZCIsImFkZEdldHRlciIsImNociIsImRlZmluZVByb3BlcnR5IiwicGFpcnMiLCJkb3RBbGwiLCJpZ25vcmVDYXNlIiwibXVsdGlsaW5lIiwic3RpY2t5IiwiaGFzSW5kaWNlcyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImNvbmZpZ3VyYWJsZSJdLCJzb3VyY2VSb290IjoiIn0=
