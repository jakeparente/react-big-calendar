!(function () {
  'use strict'
  var deferred,
    leafPrototypes,
    getProto,
    inProgress,
    __webpack_modules__ = {},
    __webpack_module_cache__ = {}
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId]
    if (void 0 !== cachedModule) return cachedModule.exports
    var module = (__webpack_module_cache__[moduleId] = {
      id: moduleId,
      loaded: !1,
      exports: {},
    })
    return (
      __webpack_modules__[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ),
      (module.loaded = !0),
      module.exports
    )
  }
  ;(__webpack_require__.m = __webpack_modules__),
    (deferred = []),
    (__webpack_require__.O = function (result, chunkIds, fn, priority) {
      if (!chunkIds) {
        var notFulfilled = 1 / 0
        for (i = 0; i < deferred.length; i++) {
          ;(chunkIds = deferred[i][0]),
            (fn = deferred[i][1]),
            (priority = deferred[i][2])
          for (var fulfilled = !0, j = 0; j < chunkIds.length; j++)
            (!1 & priority || notFulfilled >= priority) &&
            Object.keys(__webpack_require__.O).every(function (key) {
              return __webpack_require__.O[key](chunkIds[j])
            })
              ? chunkIds.splice(j--, 1)
              : ((fulfilled = !1),
                priority < notFulfilled && (notFulfilled = priority))
          if (fulfilled) {
            deferred.splice(i--, 1)
            var r = fn()
            void 0 !== r && (result = r)
          }
        }
        return result
      }
      priority = priority || 0
      for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
        deferred[i] = deferred[i - 1]
      deferred[i] = [chunkIds, fn, priority]
    }),
    (__webpack_require__.n = function (module) {
      var getter =
        module && module.__esModule
          ? function () {
              return module.default
            }
          : function () {
              return module
            }
      return __webpack_require__.d(getter, { a: getter }), getter
    }),
    (getProto = Object.getPrototypeOf
      ? function (obj) {
          return Object.getPrototypeOf(obj)
        }
      : function (obj) {
          return obj.__proto__
        }),
    (__webpack_require__.t = function (value, mode) {
      if ((1 & mode && (value = this(value)), 8 & mode)) return value
      if ('object' == typeof value && value) {
        if (4 & mode && value.__esModule) return value
        if (16 & mode && 'function' == typeof value.then) return value
      }
      var ns = Object.create(null)
      __webpack_require__.r(ns)
      var def = {}
      leafPrototypes = leafPrototypes || [
        null,
        getProto({}),
        getProto([]),
        getProto(getProto),
      ]
      for (
        var current = 2 & mode && value;
        'object' == typeof current && !~leafPrototypes.indexOf(current);
        current = getProto(current)
      )
        Object.getOwnPropertyNames(current).forEach(function (key) {
          def[key] = function () {
            return value[key]
          }
        })
      return (
        (def.default = function () {
          return value
        }),
        __webpack_require__.d(ns, def),
        ns
      )
    }),
    (__webpack_require__.d = function (exports, definition) {
      for (var key in definition)
        __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key) &&
          Object.defineProperty(exports, key, {
            enumerable: !0,
            get: definition[key],
          })
    }),
    (__webpack_require__.f = {}),
    (__webpack_require__.e = function (chunkId) {
      return Promise.all(
        Object.keys(__webpack_require__.f).reduce(function (promises, key) {
          return __webpack_require__.f[key](chunkId, promises), promises
        }, [])
      )
    }),
    (__webpack_require__.u = function (chunkId) {
      return (
        chunkId +
        '.' +
        {
          58: 'e742428a',
          140: '6e81b0fb',
          192: '0ca1c6ff',
          448: 'fceb5ccc',
          463: '66a318d5',
          720: '513dc59c',
          929: '5a2933e0',
        }[chunkId] +
        '.iframe.bundle.js'
      )
    }),
    (__webpack_require__.g = (function () {
      if ('object' == typeof globalThis) return globalThis
      try {
        return this || new Function('return this')()
      } catch (e) {
        if ('object' == typeof window) return window
      }
    })()),
    (__webpack_require__.hmd = function (module) {
      return (
        (module = Object.create(module)).children || (module.children = []),
        Object.defineProperty(module, 'exports', {
          enumerable: !0,
          set: function () {
            throw new Error(
              'ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' +
                module.id
            )
          },
        }),
        module
      )
    }),
    (__webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop)
    }),
    (inProgress = {}),
    (__webpack_require__.l = function (url, done, key, chunkId) {
      if (inProgress[url]) inProgress[url].push(done)
      else {
        var script, needAttach
        if (void 0 !== key)
          for (
            var scripts = document.getElementsByTagName('script'), i = 0;
            i < scripts.length;
            i++
          ) {
            var s = scripts[i]
            if (
              s.getAttribute('src') == url ||
              s.getAttribute('data-webpack') == 'react-big-calendar:' + key
            ) {
              script = s
              break
            }
          }
        script ||
          ((needAttach = !0),
          ((script = document.createElement('script')).charset = 'utf-8'),
          (script.timeout = 120),
          __webpack_require__.nc &&
            script.setAttribute('nonce', __webpack_require__.nc),
          script.setAttribute('data-webpack', 'react-big-calendar:' + key),
          (script.src = url)),
          (inProgress[url] = [done])
        var onScriptComplete = function (prev, event) {
            ;(script.onerror = script.onload = null), clearTimeout(timeout)
            var doneFns = inProgress[url]
            if (
              (delete inProgress[url],
              script.parentNode && script.parentNode.removeChild(script),
              doneFns &&
                doneFns.forEach(function (fn) {
                  return fn(event)
                }),
              prev)
            )
              return prev(event)
          },
          timeout = setTimeout(
            onScriptComplete.bind(null, void 0, {
              type: 'timeout',
              target: script,
            }),
            12e4
          )
        ;(script.onerror = onScriptComplete.bind(null, script.onerror)),
          (script.onload = onScriptComplete.bind(null, script.onload)),
          needAttach && document.head.appendChild(script)
      }
    }),
    (__webpack_require__.r = function (exports) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(exports, '__esModule', { value: !0 })
    }),
    (__webpack_require__.nmd = function (module) {
      return (
        (module.paths = []), module.children || (module.children = []), module
      )
    }),
    (__webpack_require__.p = ''),
    (function () {
      var installedChunks = { 354: 0 }
      ;(__webpack_require__.f.j = function (chunkId, promises) {
        var installedChunkData = __webpack_require__.o(installedChunks, chunkId)
          ? installedChunks[chunkId]
          : void 0
        if (0 !== installedChunkData)
          if (installedChunkData) promises.push(installedChunkData[2])
          else if (354 != chunkId) {
            var promise = new Promise(function (resolve, reject) {
              installedChunkData = installedChunks[chunkId] = [resolve, reject]
            })
            promises.push((installedChunkData[2] = promise))
            var url = __webpack_require__.p + __webpack_require__.u(chunkId),
              error = new Error()
            __webpack_require__.l(
              url,
              function (event) {
                if (
                  __webpack_require__.o(installedChunks, chunkId) &&
                  (0 !== (installedChunkData = installedChunks[chunkId]) &&
                    (installedChunks[chunkId] = void 0),
                  installedChunkData)
                ) {
                  var errorType =
                      event && ('load' === event.type ? 'missing' : event.type),
                    realSrc = event && event.target && event.target.src
                  ;(error.message =
                    'Loading chunk ' +
                    chunkId +
                    ' failed.\n(' +
                    errorType +
                    ': ' +
                    realSrc +
                    ')'),
                    (error.name = 'ChunkLoadError'),
                    (error.type = errorType),
                    (error.request = realSrc),
                    installedChunkData[1](error)
                }
              },
              'chunk-' + chunkId,
              chunkId
            )
          } else installedChunks[chunkId] = 0
      }),
        (__webpack_require__.O.j = function (chunkId) {
          return 0 === installedChunks[chunkId]
        })
      var webpackJsonpCallback = function (parentChunkLoadingFunction, data) {
          var moduleId,
            chunkId,
            chunkIds = data[0],
            moreModules = data[1],
            runtime = data[2],
            i = 0
          if (
            chunkIds.some(function (id) {
              return 0 !== installedChunks[id]
            })
          ) {
            for (moduleId in moreModules)
              __webpack_require__.o(moreModules, moduleId) &&
                (__webpack_require__.m[moduleId] = moreModules[moduleId])
            if (runtime) var result = runtime(__webpack_require__)
          }
          for (
            parentChunkLoadingFunction && parentChunkLoadingFunction(data);
            i < chunkIds.length;
            i++
          )
            (chunkId = chunkIds[i]),
              __webpack_require__.o(installedChunks, chunkId) &&
                installedChunks[chunkId] &&
                installedChunks[chunkId][0](),
              (installedChunks[chunkId] = 0)
          return __webpack_require__.O(result)
        },
        chunkLoadingGlobal = (self.webpackChunkreact_big_calendar =
          self.webpackChunkreact_big_calendar || [])
      chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0)),
        (chunkLoadingGlobal.push = webpackJsonpCallback.bind(
          null,
          chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
        ))
    })(),
    (__webpack_require__.nc = void 0)
})()
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVudGltZX5tYWluLjA4YzgyMDRmLmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6IjZCQUFJQSxTQ0NBQyxlQURBQyxTQ0FBQyxXLHVCQ0NBQyx5QkFBMkIsQ0FBQyxFQUdoQyxTQUFTQyxvQkFBb0JDLFVBRTVCLElBQUlDLGFBQWVILHlCQUF5QkUsVUFDNUMsUUFBcUJFLElBQWpCRCxhQUNILE9BQU9BLGFBQWFFLFFBR3JCLElBQUlDLE9BQVNOLHlCQUF5QkUsVUFBWSxDQUNqREssR0FBSUwsU0FDSk0sUUFBUSxFQUNSSCxRQUFTLENBQUMsR0FVWCxPQU5BSSxvQkFBb0JQLFVBQVVRLEtBQUtKLE9BQU9ELFFBQVNDLE9BQVFBLE9BQU9ELFFBQVNKLHFCQUczRUssT0FBT0UsUUFBUyxFQUdURixPQUFPRCxPQUNmLENBR0FKLG9CQUFvQlUsRUFBSUYsb0JINUJwQmIsU0FBVyxHQUNmSyxvQkFBb0JXLEVBQUksU0FBU0MsT0FBUUMsU0FBVUMsR0FBSUMsVUFDdEQsSUFBR0YsU0FBSCxDQU1BLElBQUlHLGFBQWVDLElBQ25CLElBQVNDLEVBQUksRUFBR0EsRUFBSXZCLFNBQVN3QixPQUFRRCxJQUFLLENBQ3JDTCxTQUFXbEIsU0FBU3VCLEdBQUcsR0FDdkJKLEdBQUtuQixTQUFTdUIsR0FBRyxHQUNqQkgsU0FBV3BCLFNBQVN1QixHQUFHLEdBRTNCLElBSkEsSUFHSUUsV0FBWSxFQUNQQyxFQUFJLEVBQUdBLEVBQUlSLFNBQVNNLE9BQVFFLE1BQ3BCLEVBQVhOLFVBQXNCQyxjQUFnQkQsV0FBYU8sT0FBT0MsS0FBS3ZCLG9CQUFvQlcsR0FBR2EsT0FBTSxTQUFTQyxLQUFPLE9BQU96QixvQkFBb0JXLEVBQUVjLEtBQUtaLFNBQVNRLEdBQUssSUFDaEtSLFNBQVNhLE9BQU9MLElBQUssSUFFckJELFdBQVksRUFDVEwsU0FBV0MsZUFBY0EsYUFBZUQsV0FHN0MsR0FBR0ssVUFBVyxDQUNiekIsU0FBUytCLE9BQU9SLElBQUssR0FDckIsSUFBSVMsRUFBSWIsVUFD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QUUwRSxZQUFhMUgsWUFDckNELG9CQUFvQlUsRUFBRVQsVUFBWTBILFlBQVkxSCxXQUdoRCxHQUFHMkgsUUFBUyxJQUFJaEgsT0FBU2dILFFBQVE1SCxvQkFDbEMsQ0FFQSxJQURHeUgsNEJBQTRCQSwyQkFBMkJDLE1BQ3JEeEcsRUFBSUwsU0FBU00sT0FBUUQsSUFDekJxQyxRQUFVMUMsU0FBU0ssR0FDaEJsQixvQkFBb0JpRCxFQUFFNEQsZ0JBQWlCdEQsVUFBWXNELGdCQUFnQnRELFVBQ3JFc0QsZ0JBQWdCdEQsU0FBUyxLQUUxQnNELGdCQUFnQnRELFNBQVcsRUFFNUIsT0FBT3ZELG9CQUFvQlcsRUFBRUMsT0FDOUIsRUFFSWtILG1CQUFxQkMsS0FBcUMsK0JBQUlBLEtBQXFDLGdDQUFLLEdBQzVHRCxtQkFBbUIvRSxRQUFReUUscUJBQXFCckIsS0FBSyxLQUFNLElBQzNEMkIsbUJBQW1CbkQsS0FBTzZDLHFCQUFxQnJCLEtBQUssS0FBTTJCLG1CQUFtQm5ELEtBQUt3QixLQUFLMkIsb0IsSUN2RnZGOUgsb0JBQW9Cc0YsUUFBS25GLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1iaWctY2FsZW5kYXIvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9yZWFjdC1iaWctY2FsZW5kYXIvd2VicGFjay9ydW50aW1lL2NyZWF0ZSBmYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVhY3QtYmlnLWNhbGVuZGFyL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9yZWFjdC1iaWctY2FsZW5kYXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVhY3QtYmlnLWNhbGVuZGFyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3JlYWN0LWJpZy1jYWxlbmRhci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVhY3QtYmlnLWNhbGVuZGFyL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vcmVhY3QtYmlnLWNhbGVuZGFyL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9yZWFjdC1iaWctY2FsZW5kYXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZWFjdC1iaWctY2FsZW5kYXIvd2VicGFjay9ydW50aW1lL2hhcm1vbnkgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9yZWFjdC1iaWctY2FsZW5kYXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZWFjdC1iaWctY2FsZW5kYXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZWFjdC1iaWctY2FsZW5kYXIvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9yZWFjdC1iaWctY2FsZW5kYXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVhY3QtYmlnLWNhbGVuZGFyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3JlYWN0LWJpZy1jYWxlbmRhci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSBmdW5jdGlvbihyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpIHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pOyB9KSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsInZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IGZ1bmN0aW9uKG9iaikgeyByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7IH0gOiBmdW5jdGlvbihvYmopIHsgcmV0dXJuIG9iai5fX3Byb3RvX187IH07XG52YXIgbGVhZlByb3RvdHlwZXM7XG4vLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8vIG1vZGUgJiAxNjogcmV0dXJuIHZhbHVlIHdoZW4gaXQncyBQcm9taXNlLWxpa2Vcbi8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbl9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG5cdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IHRoaXModmFsdWUpO1xuXHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG5cdFx0aWYoKG1vZGUgJiA0KSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYoKG1vZGUgJiAxNikgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZTtcblx0fVxuXHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuXHR2YXIgZGVmID0ge307XG5cdGxlYWZQcm90b3R5cGVzID0gbGVhZlByb3RvdHlwZXMgfHwgW251bGwsIGdldFByb3RvKHt9KSwgZ2V0UHJvdG8oW10pLCBnZXRQcm90byhnZXRQcm90byldO1xuXHRmb3IodmFyIGN1cnJlbnQgPSBtb2RlICYgMiAmJiB2YWx1ZTsgdHlwZW9mIGN1cnJlbnQgPT0gJ29iamVjdCcgJiYgIX5sZWFmUHJvdG90eXBlcy5pbmRleE9mKGN1cnJlbnQpOyBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudCkpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjdXJyZW50KS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkgeyBkZWZba2V5XSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdmFsdWVba2V5XTsgfTsgfSk7XG5cdH1cblx0ZGVmWydkZWZhdWx0J10gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGRlZik7XG5cdHJldHVybiBucztcbn07IiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwicmVhY3QtYmlnLWNhbGVuZGFyOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSBmdW5jdGlvbih1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbihwcmV2LCBldmVudCkge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goZnVuY3Rpb24oZm4pIHsgcmV0dXJuIGZuKGV2ZW50KTsgfSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoZnVuY3Rpb24ocHJvbWlzZXMsIGtleSkge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyB7XCI1OFwiOlwiNzViNWUyNzRcIixcIjE0MFwiOlwiZDhmNWQzOTZcIixcIjE5MlwiOlwiM2I5NzIzMWNcIixcIjQ0OFwiOlwiZGZiOGVkN2JcIixcIjQ2M1wiOlwiM2JlNzRlOGRcIixcIjcyMFwiOlwiMjM1MTg0NDJcIixcIjkyOVwiOlwiMWU0NjE4ZjVcIn1bY2h1bmtJZF0gKyBcIi5pZnJhbWUuYnVuZGxlLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obWQgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0bW9kdWxlID0gT2JqZWN0LmNyZWF0ZShtb2R1bGUpO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsICdleHBvcnRzJywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0c2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRVMgTW9kdWxlcyBtYXkgbm90IGFzc2lnbiBtb2R1bGUuZXhwb3J0cyBvciBleHBvcnRzLiosIFVzZSBFU00gZXhwb3J0IHN5bnRheCwgaW5zdGVhZDogJyArIG1vZHVsZS5pZCk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0MzU0OiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaiA9IGZ1bmN0aW9uKGNodW5rSWQsIHByb21pc2VzKSB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYoMzU0ICE9IGNodW5rSWQpIHtcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHsgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07IH0pO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9IGVsc2UgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IGZ1bmN0aW9uKGNodW5rSWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMDsgfTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZShmdW5jdGlvbihpZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMDsgfSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcmVhY3RfYmlnX2NhbGVuZGFyXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3JlYWN0X2JpZ19jYWxlbmRhclwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiXSwibmFtZXMiOlsiZGVmZXJyZWQiLCJsZWFmUHJvdG90eXBlcyIsImdldFByb3RvIiwiaW5Qcm9ncmVzcyIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpZCIsImxvYWRlZCIsIl9fd2VicGFja19tb2R1bGVzX18iLCJjYWxsIiwibSIsIk8iLCJyZXN1bHQiLCJjaHVua0lkcyIsImZuIiwicHJpb3JpdHkiLCJub3RGdWxmaWxsZWQiLCJJbmZpbml0eSIsImkiLCJsZW5ndGgiLCJmdWxmaWxsZWQiLCJqIiwiT2JqZWN0Iiwia2V5cyIsImV2ZXJ5Iiwia2V5Iiwic3BsaWNlIiwiciIsIm4iLCJnZXR0ZXIiLCJfX2VzTW9kdWxlIiwiZCIsImEiLCJnZXRQcm90b3R5cGVPZiIsIm9iaiIsIl9fcHJvdG9fXyIsInQiLCJ2YWx1ZSIsIm1vZGUiLCJ0aGlzIiwidGhlbiIsIm5zIiwiY3JlYXRlIiwiZGVmIiwiY3VycmVudCIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZm9yRWFjaCIsImRlZmluaXRpb24iLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiZiIsImUiLCJjaHVua0lkIiwiUHJvbWlzZSIsImFsbCIsInJlZHVjZSIsInByb21pc2VzIiwidSIsImciLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJ3aW5kb3ciLCJobWQiLCJjaGlsZHJlbiIsInNldCIsIkVycm9yIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwibCIsInVybCIsImRvbmUiLCJwdXNoIiwic2NyaXB0IiwibmVlZEF0dGFjaCIsInNjcmlwdHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicyIsImdldEF0dHJpYnV0ZSIsImNyZWF0ZUVsZW1lbnQiLCJjaGFyc2V0IiwidGltZW91dCIsIm5jIiwic2V0QXR0cmlidXRlIiwic3JjIiwib25TY3JpcHRDb21wbGV0ZSIsInByZXYiLCJldmVudCIsIm9uZXJyb3IiLCJvbmxvYWQiLCJjbGVhclRpbWVvdXQiLCJkb25lRm5zIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwic2V0VGltZW91dCIsImJpbmQiLCJ0eXBlIiwidGFyZ2V0IiwiaGVhZCIsImFwcGVuZENoaWxkIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJubWQiLCJwYXRocyIsInAiLCJpbnN0YWxsZWRDaHVua3MiLCJpbnN0YWxsZWRDaHVua0RhdGEiLCJwcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVycm9yIiwiZXJyb3JUeXBlIiwicmVhbFNyYyIsIm1lc3NhZ2UiLCJuYW1lIiwicmVxdWVzdCIsIndlYnBhY2tKc29ucENhbGxiYWNrIiwicGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24iLCJkYXRhIiwibW9yZU1vZHVsZXMiLCJydW50aW1lIiwic29tZSIsImNodW5rTG9hZGluZ0dsb2JhbCIsInNlbGYiXSwic291cmNlUm9vdCI6IiJ9
