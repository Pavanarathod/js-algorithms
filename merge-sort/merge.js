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
  return results;
}

merge([1, 10, 50], [1, 2, 14, 99, 100]);
