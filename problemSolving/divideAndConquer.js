// TODO: Given a sorted array of integers, write a fucntion called search that accepts a value and returns the index of the value passed to a fucntion is located if value is not found return -1

function search(array, searchValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === searchValue) {
      return i;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
