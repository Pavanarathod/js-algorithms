// TODO: UDNERSTAND BASICS SEARCHING ALGORITHMS AND TYPES OF ALGORITHMS
// TODO: Linear Search

function linearSearch(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, , 5], 10));
