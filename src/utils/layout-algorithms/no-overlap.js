import overlap from './overlap'

function getMaxIdxDFS(node, maxIdx, visited) {
  for (let i = 0; i < node.friends.length; ++i) {
    if (visited.indexOf(node.friends[i]) > -1) continue
    maxIdx = maxIdx > node.friends[i].idx ? maxIdx : node.friends[i].idx
    // TODO : trace it by not object but kinda index or something for performance
    visited.push(node.friends[i])
    const newIdx = getMaxIdxDFS(node.friends[i], maxIdx, visited)
    maxIdx = maxIdx > newIdx ? maxIdx : newIdx
  }
  return maxIdx
}

export default function ({
  events,
  minimumStartDifference,
  slotMetrics,
  accessors,
}) {
  const styledEvents = overlap({
    events,
    minimumStartDifference,
    slotMetrics,
    accessors,
  })

  console.log({ styledEvents })

  styledEvents.sort((a, b) => {
    a = a.style
    b = b.style
    if (a.top !== b.top) return a.top > b.top ? 1 : -1
    else if (a.height !== b.height)
      return a.top + a.height < b.top + b.height ? 1 : -1
    else return 0
  })

  for (let i = 0; i < styledEvents.length; ++i) {
    styledEvents[i].friends = []
    delete styledEvents[i].style.left
    delete styledEvents[i].style.left
    delete styledEvents[i].idx
    delete styledEvents[i].size
  }

  // Filter out unavailable events for overlap/positioning logic
  const availableEvents = styledEvents.filter((e) => {
    return !(
      e.event &&
      e.event.eventType &&
      e.event.eventType === '_unavailable_'
    )
  })

  console.log({ availableEvents })

  // Build friends/overlap graph only for available events
  for (let i = 0; i < availableEvents.length - 1; ++i) {
    const se1 = availableEvents[i]
    const y1 = se1.style.top
    const y2 = se1.style.top + se1.style.height

    for (let j = i + 1; j < availableEvents.length; ++j) {
      const se2 = availableEvents[j]
      const y3 = se2.style.top
      const y4 = se2.style.top + se2.style.height

      if (
        (y3 >= y1 && y4 <= y2) ||
        (y4 > y1 && y4 <= y2) ||
        (y3 >= y1 && y3 < y2)
      ) {
        se1.friends.push(se2)
        se2.friends.push(se1)
      }
    }
  }

  // Assign idx for available events only
  for (let i = 0; i < availableEvents.length; ++i) {
    const se = availableEvents[i]
    const bitmap = []
    for (let j = 0; j < 100; ++j) bitmap.push(1)
    for (let j = 0; j < se.friends.length; ++j)
      if (se.friends[j].idx !== undefined) bitmap[se.friends[j].idx] = 0
    se.idx = bitmap.indexOf(1)
  }

  // Assign size for available events only
  for (let i = 0; i < availableEvents.length; ++i) {
    let size = 0
    if (availableEvents[i].size) continue
    const allFriends = []
    const maxIdx = getMaxIdxDFS(availableEvents[i], 0, allFriends)
    size = 100 / (maxIdx + 1)
    availableEvents[i].size = size
    for (let j = 0; j < allFriends.length; ++j) allFriends[j].size = size
  }

  // Apply left/width/xOffset for all events (including unavailable)
  for (let i = 0; i < styledEvents.length; ++i) {
    const e = styledEvents[i]
    // If this is an unavailable event, don't assign idx/size based on overlap logic
    if (e.event && e.event.eventType && e.event.eventType === '_unavailable_') {
      // Render as normal, but don't set left/width/xOffset based on overlap
      // You may want to set default width/left here if needed
      continue
    }
    e.style.left = e.idx * e.size

    // stretch to maximum
    let maxIdx = 0
    for (let j = 0; j < e.friends.length; ++j) {
      const idx = e.friends[j].idx
      maxIdx = maxIdx > idx ? maxIdx : idx
    }
    if (maxIdx <= e.idx) e.size = 100 - e.idx * e.size

    // padding between events
    // for this feature, `width` is not percentage based unit anymore
    // it will be used with calc()
    const padding = e.idx === 0 ? 0 : 3
    e.style.width = `calc(${e.size}% - ${padding}px)`
    e.style.height = `calc(${e.style.height}% - 2px)`
    e.style.xOffset = `calc(${e.style.left}% + ${padding}px)`
  }

  return styledEvents
}
