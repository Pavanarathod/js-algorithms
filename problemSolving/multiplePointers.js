// TODO: Write a function called sumZero which accepts a sorted array and of integers the function should fing the first pair of where the usm is 0 returns an arrya that includes both values that sum

function sumZero(value) {
  let left = 0;
  let right = value.length - 1;
  while (left < right) {
    let sum = value[left] + value[right];
    if (sum === 0) {
      return [value[left], value[right]];
    } else if (sum > 0) {
      right -= 1;
    } else {
      left += 1;
    }
  }
}

console.log(sumZero([]));
