const getRange = (start, end) => {
  return Array(end - start)
    .fill()
    .map((v, i) => i + start)
}

export default (currentPage, totalPage) => {
  let visiblePages = 10 // default

  if (visiblePages > totalPage) {
    visiblePages = totalPage
  }

  let start = currentPage

  if (currentPage <= Math.floor(visiblePages / 2)) {
    start = 1
  } else {
    start = currentPage - (Math.floor(visiblePages / 2))
  }

  if (start + visiblePages >= totalPage) {
    start = totalPage - visiblePages + 1;
  }

  return getRange(start, start + visiblePages)
}