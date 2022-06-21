// TODO: UDNERSTAND BINARY SEARCH

/**
 * * Create a fuction accepts two parameters a Sorted Array and search value
 * * Create left pinter at the start of the array and right pinter at the end of the array
 * * while left pointer comes before the right pinter:
 * *        * Create pointer in the middle
 * *        * if you find the value you want, return the index
 * *        * if the value it too small , move the left pointer up
 */

function binarySearch(arr, searchValue) {
  if (arr.length === 0) return;
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
}
console.log([2, 5, 6, 9, 13, 15, 28], 15);
