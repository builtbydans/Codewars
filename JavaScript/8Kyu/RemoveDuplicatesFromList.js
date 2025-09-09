const distinct = a => {
  let s = new Set(a)
  return [...s]
}

console.log(distinct([1, 2, 1, 1, 3, 2]))