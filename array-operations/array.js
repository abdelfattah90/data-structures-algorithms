const resizeArray = (source, newSize, defaultValue) => {
  if (newSize <= 0) return
  if (!source) return
  if (source.length === newSize) return

  const newArray = new Array(newSize)
  newArray.fill(defaultValue, source.length)

  for (let i = 0; i < Math.min(source.length, newSize); i++) {
    newArray[i] = source[i]
  }

  return newArray
}

let arr = [1, 2, 3]
arr = resizeArray(arr, 5, 0)
console.log(arr.join(', '))
