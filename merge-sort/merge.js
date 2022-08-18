function merge(one = [], two = []) {
  const results = [];
  let i = 0;
  let j = 0;

  while (i < one.length && j < two.length) {
    if (one[i] > two[j]) {
      results.push(two[j]);
      j++;
    } else if (one[i] < two[j]) {
      results.push(one[i]);
      i++;
    } else {
      results.push(one[i]);
      i++;
    }
  }

  while (i < one.length) {
    results.push(one[i]);
    i++;
  }

  while (j < two.length) {
    results.push(two[j]);
    j++;
  }
  return results;
}

function mergeSort(arr = []) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

const result = mergeSort([10, 24, 76, 73, 73, 72, 1, 9, 11, 55]);
console.log(result);
