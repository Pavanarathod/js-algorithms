// TODO: Implement a function called conutUniqueValues which accepts a sorted array and  counts the unique values in the array there can be negative numbers in the array but always be soreted.

function countUniqueValues(array) {
  var i = 0;
  for (var j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i += 1;
      array[i] = array[j];
    }
  }
}

console.log([]);
