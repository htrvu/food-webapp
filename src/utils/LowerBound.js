const lowerBound = (array, value) => {
  let i = 0, j = array.length
  while (i + 1 < j) {
    let mid = Math.floor((i + j) / 2)
    if (array[mid] <= value) {
      i = mid
    }
    else j = mid - 1
  }
  if (array[i] > value) return -1
  return array[i]
}

export default lowerBound