// TODO: UDNERSTAND BINARY SEARCH

/**
 * * This function accepts a sorted array of values
 * * Create a left pinter at the start of the array
 * * Create a right pinter at the end of the array
 * * While the left pointer comes before the right pointer:
 * *      * Create a pinter at the middle
 * *      * if you find the value you want, return the index
 * *      * if the value is too small move the left pinter up
 * *      * If the value is too large, move the right pointer down
 * * if you never find the vlaue return -1
 */

function binarySearch(arr, searchValue) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== searchValue && start <= end) {
    if (searchValue < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === searchValue) {
    return middle;
  }
  return -1;
}
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15));
