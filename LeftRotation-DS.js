// problem: https://www.hackerrank.com/challenges/array-left-rotation/problem

function rotateLeft(d, arr) {
  return arr.slice(d, arr.length).concat(arr.slice(0, d))
}

rotateLeft(4, [1, 2, 3, 4, 5])
