
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = []
  if (arguments.length === 0) return []
  if (matrix.length === 0) return []

  for (let i=0; i<matrix.length; i++) {
    for (let k=0; k<matrix[i].length; k++) {
        if (i % 2 !== 0) {
            arr.push(matrix[i][ matrix[i].length - k - 1 ])
        } else {
            arr.push(matrix[i][k])
        }
    }
  }
  console.log(arr)
  return arr;
}
