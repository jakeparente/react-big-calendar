'use strict'
;(self.webpackChunkreact_big_calendar =
  self.webpackChunkreact_big_calendar || []).push([
  [192],
  {
    './node_modules/@storybook/preview-web/dist/esm/renderDocs.js': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          renderDocs: function () {
            return renderDocs
          },
          unmountDocs: function () {
            return unmountDocs
          },
        })
      __webpack_require__('./node_modules/regenerator-runtime/runtime.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.to-string.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.promise.js')
      var react = __webpack_require__('./node_modules/react/index.js'),
        react_dom = __webpack_require__('./node_modules/react-dom/index.js'),
        wrapper = {
          fontSize: '14px',
          letterSpacing: '0.2px',
          margin: '10px 0',
        },
        main = {
          margin: 'auto',
          padding: 30,
          borderRadius: 10,
          background: 'rgba(0,0,0,0.03)',
        },
        heading = { textAlign: 'center' },
        NoDocs = function NoDocs() {
          return react.createElement(
            'div',
            { style: wrapper, className: 'sb-nodocs sb-wrapper' },
            react.createElement(
              'div',
              { style: main },
              react.createElement('h1', { style: heading }, 'No Docs'),
              react.createElement(
                'p',
                null,
                "Sorry, but there are no docs for the selected story. To add them, set the story's ",
                react.createElement('code', null, 'docs'),
                ' parameter. If you think this is an error:'
              ),
              react.createElement(
                'ul',
                null,
                react.createElement(
                  'li',
                  null,
                  'Please check the story definition.'
                ),
                react.createElement(
                  'li',
                  null,
                  'Please check the Storybook config.'
                ),
                react.createElement('li', null, 'Try reloading the page.')
              ),
              react.createElement(
                'p',
                null,
                "If the problem persists, check the browser console, or the terminal you've run Storybook from."
              )
            )
          )
        }
      function asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg
      ) {
        try {
          var info = gen[key](arg),
            value = info.value
        } catch (error) {
          return void reject(error)
        }
        info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw)
      }
      function renderDocs(story, docsContext, element, callback) {
        return (function renderDocsAsync(_x, _x2, _x3) {
          return _renderDocsAsync.apply(this, arguments)
        })(story, docsContext, element).then(callback)
      }
      function _renderDocsAsync() {
        return (
          (_renderDocsAsync = (function _asyncToGenerator(fn) {
            return function () {
              var self = this,
                args = arguments
              return new Promise(function (resolve, reject) {
                var gen = fn.apply(self, args)
                function _next(value) {
                  asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'next',
                    value
                  )
                }
                function _throw(err) {
                  asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'throw',
                    err
                  )
                }
                _next(void 0)
              })
            }
          })(
            regeneratorRuntime.mark(function _callee(
              story,
              docsContext,
              element
            ) {
              var _docs$getContainer,
                _docs$getPage,
                docs,
                DocsContainer,
                Page,
                docsElement
              return regeneratorRuntime.wrap(function _callee$(_context) {
                for (;;)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      if (
                        !(
                          (null != (docs = story.parameters.docs) &&
                            docs.getPage) ||
                          (null != docs && docs.page)
                        ) ||
                        (null != docs && docs.getContainer) ||
                        (null != docs && docs.container)
                      ) {
                        _context.next = 3
                        break
                      }
                      throw new Error(
                        'No `docs.container` set, did you run `addon-docs/preset`?'
                      )
                    case 3:
                      if (((_context.t1 = docs.container), _context.t1)) {
                        _context.next = 8
                        break
                      }
                      return (
                        (_context.next = 7),
                        null === (_docs$getContainer = docs.getContainer) ||
                        void 0 === _docs$getContainer
                          ? void 0
                          : _docs$getContainer.call(docs)
                      )
                    case 7:
                      _context.t1 = _context.sent
                    case 8:
                      if (((_context.t0 = _context.t1), _context.t0)) {
                        _context.next = 11
                        break
                      }
                      _context.t0 = function (_ref) {
                        var children = _ref.children
                        return react.createElement(
                          react.Fragment,
                          null,
                          children
                        )
                      }
                    case 11:
                      if (
                        ((DocsContainer = _context.t0),
                        (_context.t3 = docs.page),
                        _context.t3)
                      ) {
                        _context.next = 17
                        break
                      }
                      return (
                        (_context.next = 16),
                        null === (_docs$getPage = docs.getPage) ||
                        void 0 === _docs$getPage
                          ? void 0
                          : _docs$getPage.call(docs)
                      )
                    case 16:
                      _context.t3 = _context.sent
                    case 17:
                      if (((_context.t2 = _context.t3), _context.t2)) {
                        _context.next = 20
                        break
                      }
                      _context.t2 = NoDocs
                    case 20:
                      return (
                        (Page = _context.t2),
                        (docsElement = react.createElement(
                          DocsContainer,
                          { key: story.componentId, context: docsContext },
                          react.createElement(Page, null)
                        )),
                        (_context.next = 24),
                        new Promise(function (resolve) {
                          react_dom.render(docsElement, element, resolve)
                        })
                      )
                    case 24:
                    case 'end':
                      return _context.stop()
                  }
              }, _callee)
            })
          )),
          _renderDocsAsync.apply(this, arguments)
        )
      }
      function unmountDocs(element) {
        react_dom.unmountComponentAtNode(element)
      }
      NoDocs.displayName = 'NoDocs'
    },
  },
])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQ2ZaLFNBQVNFLEtBQU8sR0FDaEIsS0FDRixDQUVBRixTQUFTWSxHQUFLLFNBQVVDLE1BQ3RCLElBQUlDLFNBQVdELEtBQUtDLFNBQ3BCLE9BQW9CLG9CQUFvQixlQUFnQixLQUFNQSxTQUNoRSxFQUVGLEtBQUssR0FJSCxHQUhBbkIsY0FBZ0JLLFNBQVNZLEdBQ3pCWixTQUFTZSxHQUFLckIsS0FBS1csS0FFZkwsU0FBU2UsR0FBSSxDQUNmZixTQUFTRSxLQUFPLEdBQ2hCLEtBQ0YsQ0FHQSxPQURBRixTQUFTRSxLQUFPLEdBQzBCLFFBQWxDVCxjQUFnQkMsS0FBS1UsZUFBdUMsSUFBbEJYLG1CQUEyQixFQUFTQSxjQUFjaUIsS0FBS2hCLE1BRTNHLEtBQUssR0FDSE0sU0FBU2UsR0FBS2YsU0FBU1csS0FFekIsS0FBSyxHQUdILEdBRkFYLFNBQVNnQixHQUFLaEIsU0FBU2UsR0FFbkJmLFNBQVNnQixHQUFJLENBQ2ZoQixTQUFTRSxLQUFPLEdBQ2hCLEtBQ0YsQ0FFQUYsU0FBU2dCLEdBQUsvRCxPQUVoQixLQUFLLEdBU0gsT0FSQTJDLEtBQU9JLFNBQVNnQixHQUdoQm5CLFlBQTJCLG9CQUFvQkYsY0FBZSxDQUM1RGpDLElBQUtTLE1BQU04QyxZQUNYQyxRQUFTOUMsYUFDSyxvQkFBb0J3QixLQUFNLE9BQzFDSSxTQUFTRSxLQUFPLEdBQ1QsSUFBSWxDLFNBQVEsU0FBVVYsU0FDM0IsaUJBQWdCdUMsWUFBYXhCLFFBQVNmLFFBQ3hDLElBRUYsS0FBSyxHQUNMLElBQUssTUFDSCxPQUFPMEMsU0FBU21CLE9BR3hCLEdBQUc1QixRQUNMLEtBQ09aLGlCQUFpQkMsTUFBTUMsS0FBTUMsVUFDdEMsQ0FFTyxTQUFTc0MsWUFBWS9DLFNBQzFCLGlDQUFnQ0EsUUFDbEMsQ0R6RkFwQixPQUFPb0UsWUFBYyxRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtYmlnLWNhbGVuZGFyLy4vbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svcHJldmlldy13ZWIvZGlzdC9lc20vTm9Eb2NzLmpzIiwid2VicGFjazovL3JlYWN0LWJpZy1jYWxlbmRhci8uL25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL3ByZXZpZXctd2ViL2Rpc3QvZXNtL3JlbmRlckRvY3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbnZhciB3cmFwcGVyID0ge1xuICBmb250U2l6ZTogJzE0cHgnLFxuICBsZXR0ZXJTcGFjaW5nOiAnMC4ycHgnLFxuICBtYXJnaW46ICcxMHB4IDAnXG59O1xudmFyIG1haW4gPSB7XG4gIG1hcmdpbjogJ2F1dG8nLFxuICBwYWRkaW5nOiAzMCxcbiAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMC4wMyknXG59O1xudmFyIGhlYWRpbmcgPSB7XG4gIHRleHRBbGlnbjogJ2NlbnRlcidcbn07XG5leHBvcnQgdmFyIE5vRG9jcyA9IGZ1bmN0aW9uIE5vRG9jcygpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBzdHlsZTogd3JhcHBlcixcbiAgICBjbGFzc05hbWU6IFwic2Itbm9kb2NzIHNiLXdyYXBwZXJcIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgc3R5bGU6IG1haW5cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7XG4gICAgc3R5bGU6IGhlYWRpbmdcbiAgfSwgXCJObyBEb2NzXCIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJTb3JyeSwgYnV0IHRoZXJlIGFyZSBubyBkb2NzIGZvciB0aGUgc2VsZWN0ZWQgc3RvcnkuIFRvIGFkZCB0aGVtLCBzZXQgdGhlIHN0b3J5J3NcXHhBMFwiLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImNvZGVcIiwgbnVsbCwgXCJkb2NzXCIpLCBcIiBwYXJhbWV0ZXIuIElmIHlvdSB0aGluayB0aGlzIGlzIGFuIGVycm9yOlwiKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFwiUGxlYXNlIGNoZWNrIHRoZSBzdG9yeSBkZWZpbml0aW9uLlwiKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBcIlBsZWFzZSBjaGVjayB0aGUgU3Rvcnlib29rIGNvbmZpZy5cIiksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgXCJUcnkgcmVsb2FkaW5nIHRoZSBwYWdlLlwiKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIklmIHRoZSBwcm9ibGVtIHBlcnNpc3RzLCBjaGVjayB0aGUgYnJvd3NlciBjb25zb2xlLCBvciB0aGUgdGVybWluYWwgeW91J3ZlIHJ1biBTdG9yeWJvb2sgZnJvbS5cIikpKTtcbn07XG5Ob0RvY3MuZGlzcGxheU5hbWUgPSBcIk5vRG9jc1wiOyIsImltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC50by1zdHJpbmcuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5wcm9taXNlLmpzXCI7XG5cbmZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpOyB9IH1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIHNlbGYgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzOyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7IGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTsgfSBmdW5jdGlvbiBfdGhyb3coZXJyKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpOyB9IF9uZXh0KHVuZGVmaW5lZCk7IH0pOyB9OyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IE5vRG9jcyB9IGZyb20gJy4vTm9Eb2NzJztcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEb2NzKHN0b3J5LCBkb2NzQ29udGV4dCwgZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIHJlbmRlckRvY3NBc3luYyhzdG9yeSwgZG9jc0NvbnRleHQsIGVsZW1lbnQpLnRoZW4oY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiByZW5kZXJEb2NzQXN5bmMoX3gsIF94MiwgX3gzKSB7XG4gIHJldHVybiBfcmVuZGVyRG9jc0FzeW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9yZW5kZXJEb2NzQXN5bmMoKSB7XG4gIF9yZW5kZXJEb2NzQXN5bmMgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoc3RvcnksIGRvY3NDb250ZXh0LCBlbGVtZW50KSB7XG4gICAgdmFyIF9kb2NzJGdldENvbnRhaW5lciwgX2RvY3MkZ2V0UGFnZTtcblxuICAgIHZhciBkb2NzLCBEb2NzQ29udGFpbmVyLCBQYWdlLCBkb2NzRWxlbWVudDtcbiAgICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBkb2NzID0gc3RvcnkucGFyYW1ldGVycy5kb2NzO1xuXG4gICAgICAgICAgICBpZiAoISgoZG9jcyAhPT0gbnVsbCAmJiBkb2NzICE9PSB2b2lkIDAgJiYgZG9jcy5nZXRQYWdlIHx8IGRvY3MgIT09IG51bGwgJiYgZG9jcyAhPT0gdm9pZCAwICYmIGRvY3MucGFnZSkgJiYgIShkb2NzICE9PSBudWxsICYmIGRvY3MgIT09IHZvaWQgMCAmJiBkb2NzLmdldENvbnRhaW5lciB8fCBkb2NzICE9PSBudWxsICYmIGRvY3MgIT09IHZvaWQgMCAmJiBkb2NzLmNvbnRhaW5lcikpKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBgZG9jcy5jb250YWluZXJgIHNldCwgZGlkIHlvdSBydW4gYGFkZG9uLWRvY3MvcHJlc2V0YD8nKTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIF9jb250ZXh0LnQxID0gZG9jcy5jb250YWluZXI7XG5cbiAgICAgICAgICAgIGlmIChfY29udGV4dC50MSkge1xuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gODtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA3O1xuICAgICAgICAgICAgcmV0dXJuIChfZG9jcyRnZXRDb250YWluZXIgPSBkb2NzLmdldENvbnRhaW5lcikgPT09IG51bGwgfHwgX2RvY3MkZ2V0Q29udGFpbmVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZG9jcyRnZXRDb250YWluZXIuY2FsbChkb2NzKTtcblxuICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIF9jb250ZXh0LnQxID0gX2NvbnRleHQuc2VudDtcblxuICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIF9jb250ZXh0LnQwID0gX2NvbnRleHQudDE7XG5cbiAgICAgICAgICAgIGlmIChfY29udGV4dC50MCkge1xuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTE7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfY29udGV4dC50MCA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gICAgICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgY2hpbGRyZW4pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICBEb2NzQ29udGFpbmVyID0gX2NvbnRleHQudDA7XG4gICAgICAgICAgICBfY29udGV4dC50MyA9IGRvY3MucGFnZTtcblxuICAgICAgICAgICAgaWYgKF9jb250ZXh0LnQzKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxNztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxNjtcbiAgICAgICAgICAgIHJldHVybiAoX2RvY3MkZ2V0UGFnZSA9IGRvY3MuZ2V0UGFnZSkgPT09IG51bGwgfHwgX2RvY3MkZ2V0UGFnZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RvY3MkZ2V0UGFnZS5jYWxsKGRvY3MpO1xuXG4gICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgIF9jb250ZXh0LnQzID0gX2NvbnRleHQuc2VudDtcblxuICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICBfY29udGV4dC50MiA9IF9jb250ZXh0LnQzO1xuXG4gICAgICAgICAgICBpZiAoX2NvbnRleHQudDIpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDIwO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX2NvbnRleHQudDIgPSBOb0RvY3M7XG5cbiAgICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgUGFnZSA9IF9jb250ZXh0LnQyO1xuICAgICAgICAgICAgLy8gVXNlIGBjb21wb25lbnRJZGAgYXMgYSBrZXkgc28gdGhhdCB3ZSBmb3JjZSBhIHJlLXJlbmRlciBldmVyeSB0aW1lXG4gICAgICAgICAgICAvLyB3ZSBzd2l0Y2ggY29tcG9uZW50c1xuICAgICAgICAgICAgZG9jc0VsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEb2NzQ29udGFpbmVyLCB7XG4gICAgICAgICAgICAgIGtleTogc3RvcnkuY29tcG9uZW50SWQsXG4gICAgICAgICAgICAgIGNvbnRleHQ6IGRvY3NDb250ZXh0XG4gICAgICAgICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQYWdlLCBudWxsKSk7XG4gICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjQ7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgUmVhY3RET00ucmVuZGVyKGRvY3NFbGVtZW50LCBlbGVtZW50LCByZXNvbHZlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2FzZSAyNDpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZSk7XG4gIH0pKTtcbiAgcmV0dXJuIF9yZW5kZXJEb2NzQXN5bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnREb2NzKGVsZW1lbnQpIHtcbiAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShlbGVtZW50KTtcbn0iXSwibmFtZXMiOlsid3JhcHBlciIsImZvbnRTaXplIiwibGV0dGVyU3BhY2luZyIsIm1hcmdpbiIsIm1haW4iLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZCIsImhlYWRpbmciLCJ0ZXh0QWxpZ24iLCJOb0RvY3MiLCJzdHlsZSIsImNsYXNzTmFtZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlc29sdmUiLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImFyZyIsImluZm8iLCJ2YWx1ZSIsImVycm9yIiwiZG9uZSIsIlByb21pc2UiLCJ0aGVuIiwicmVuZGVyRG9jcyIsInN0b3J5IiwiZG9jc0NvbnRleHQiLCJlbGVtZW50IiwiY2FsbGJhY2siLCJyZW5kZXJEb2NzQXN5bmMiLCJfeCIsIl94MiIsIl94MyIsIl9yZW5kZXJEb2NzQXN5bmMiLCJhcHBseSIsInRoaXMiLCJhcmd1bWVudHMiLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJlcnIiLCJ1bmRlZmluZWQiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsIl9kb2NzJGdldENvbnRhaW5lciIsIl9kb2NzJGdldFBhZ2UiLCJkb2NzIiwiRG9jc0NvbnRhaW5lciIsIlBhZ2UiLCJkb2NzRWxlbWVudCIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJwYXJhbWV0ZXJzIiwiZ2V0UGFnZSIsInBhZ2UiLCJnZXRDb250YWluZXIiLCJjb250YWluZXIiLCJFcnJvciIsInQxIiwiY2FsbCIsInNlbnQiLCJ0MCIsIl9yZWYiLCJjaGlsZHJlbiIsInQzIiwidDIiLCJjb21wb25lbnRJZCIsImNvbnRleHQiLCJzdG9wIiwidW5tb3VudERvY3MiLCJkaXNwbGF5TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=
