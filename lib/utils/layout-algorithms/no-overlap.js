"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _overlap = _interopRequireDefault(require("./overlap"));
function getMaxIdxDFS(node, maxIdx, visited) {
  for (var i = 0; i < node.friends.length; ++i) {
    if (visited.indexOf(node.friends[i]) > -1) continue;
    maxIdx = maxIdx > node.friends[i].idx ? maxIdx : node.friends[i].idx;
    // TODO : trace it by not object but kinda index or something for performance
    visited.push(node.friends[i]);
    var newIdx = getMaxIdxDFS(node.friends[i], maxIdx, visited);
    maxIdx = maxIdx > newIdx ? maxIdx : newIdx;
  }
  return maxIdx;
}
function _default(_ref) {
  var events = _ref.events,
    minimumStartDifference = _ref.minimumStartDifference,
    slotMetrics = _ref.slotMetrics,
    accessors = _ref.accessors;
  var styledEvents = (0, _overlap.default)({
    events: events,
    minimumStartDifference: minimumStartDifference,
    slotMetrics: slotMetrics,
    accessors: accessors
  });
  styledEvents.sort(function (a, b) {
    a = a.style;
    b = b.style;
    if (a.top !== b.top) return a.top > b.top ? 1 : -1;else if (a.height !== b.height) return a.top + a.height < b.top + b.height ? 1 : -1;else return 0;
  });
  for (var i = 0; i < styledEvents.length; ++i) {
    styledEvents[i].friends = [];
    delete styledEvents[i].style.left;
    delete styledEvents[i].style.left;
    delete styledEvents[i].idx;
    delete styledEvents[i].size;
  }

  // Filter out unavailable events for overlap/positioning logic
  var availableEvents = styledEvents.filter(function (e) {
    return !(e.event && e.event.eventType && e.event.eventType === '_unavailable_');
  });

  // Build friends/overlap graph only for available events
  for (var _i2 = 0; _i2 < availableEvents.length - 1; ++_i2) {
    var se1 = availableEvents[_i2];
    var y1 = se1.style.top;
    var y2 = se1.style.top + se1.style.height;
    for (var j = _i2 + 1; j < availableEvents.length; ++j) {
      var se2 = availableEvents[j];
      var y3 = se2.style.top;
      var y4 = se2.style.top + se2.style.height;
      if (y3 >= y1 && y4 <= y2 || y4 > y1 && y4 <= y2 || y3 >= y1 && y3 < y2) {
        se1.friends.push(se2);
        se2.friends.push(se1);
      }
    }
  }

  // Assign idx for available events only
  for (var _i4 = 0; _i4 < availableEvents.length; ++_i4) {
    var se = availableEvents[_i4];
    var bitmap = [];
    for (var _j2 = 0; _j2 < 100; ++_j2) bitmap.push(1);
    for (var _j4 = 0; _j4 < se.friends.length; ++_j4) if (se.friends[_j4].idx !== undefined) bitmap[se.friends[_j4].idx] = 0;
    se.idx = bitmap.indexOf(1);
  }

  // Assign size for available events only
  for (var _i6 = 0; _i6 < availableEvents.length; ++_i6) {
    var size = 0;
    if (availableEvents[_i6].size) continue;
    var allFriends = [];
    var maxIdx = getMaxIdxDFS(availableEvents[_i6], 0, allFriends);
    size = 100 / (maxIdx + 1);
    availableEvents[_i6].size = size;
    for (var _j6 = 0; _j6 < allFriends.length; ++_j6) allFriends[_j6].size = size;
  }

  // Apply left/width/xOffset for all events (including unavailable)
  for (var _i8 = 0; _i8 < styledEvents.length; ++_i8) {
    var e = styledEvents[_i8];
    // If this is an unavailable event, don't assign idx/size based on overlap logic
    if (e.event && e.event.eventType && e.event.eventType === '_unavailable_') {
      // Set default position and width for unavailable events
      e.style.left = 0;
      e.style.width = '100%';
      e.style.xOffset = '0';
      // Optionally, adjust height if needed
      continue;
    }
    e.style.left = e.idx * e.size;

    // stretch to maximum
    var _maxIdx = 0;
    for (var _j8 = 0; _j8 < e.friends.length; ++_j8) {
      var idx = e.friends[_j8].idx;
      _maxIdx = _maxIdx > idx ? _maxIdx : idx;
    }
    if (_maxIdx <= e.idx) e.size = 100 - e.idx * e.size;

    // padding between events
    // for this feature, `width` is not percentage based unit anymore
    // it will be used with calc()
    var padding = e.idx === 0 ? 0 : 3;
    e.style.width = "calc(".concat(e.size, "% - ").concat(padding, "px)");
    e.style.height = "calc(".concat(e.style.height, "% - 2px)");
    e.style.xOffset = "calc(".concat(e.style.left, "% + ").concat(padding, "px)");
  }
  return styledEvents;
}