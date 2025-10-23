function unroll(squareArray) {
  if (!Array.isArray(squareArray) || squareArray.length === 0) return [];

  const result = [];
  let top = 0;
  let bottom = squareArray.length - 1;
  let left = 0;
  let right = squareArray[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let col = left; col <= right; col += 1) {
      result.push(squareArray[top][col]);
    }
    top += 1;

    for (let row = top; row <= bottom; row += 1) {
      result.push(squareArray[row][right]);
    }
    right -= 1;

    if (top <= bottom) {
      for (let col = right; col >= left; col -= 1) {
        result.push(squareArray[bottom][col]);
      }
      bottom -= 1;
    }

    if (left <= right) {
      for (let row = bottom; row >= top; row -= 1) {
        result.push(squareArray[row][left]);
      }
      left += 1;
    }
  }

  return result;
}

module.exports = unroll;
