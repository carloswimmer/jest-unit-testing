const chunkArray = (array, chunkLength) => {
  const chunkedArray = []

  array.forEach(value => {
    const last = chunkedArray[chunkedArray.length - 1]
    if (!last || last.length === chunkLength) {
      chunkedArray.push([value])
    } else {
      last.push(value)
    }
  });

  return chunkedArray
}

module.exports = chunkArray