// TODO: Write a fucntion called same, which accepts two arrays. the fuctnion should return true if every value in the array has it's corespoding vlaue squared inthe second array. the frequency of values must be the same;

/**
 * * do somehting
 * * First fint the array length
 * * loop over the array and find index and squared
 */

function same(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;

  for (let i = 0; i < arrayOne.length; i++) {
    let currentIndex = arrayTwo.indexOf(arrayOne[i] ** 2);
    if (currentIndex === -1) {
      return false;
    }
    console.log(arrayTwo);
    arrayTwo.splice(currentIndex, 1);
  }
  return true;
}

console.log(same([2, 3, 4], [4, 9, 16]));
