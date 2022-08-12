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

function linearSearch(arr = [], target) {
    if(arr.length === 0){
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        console.log(i,arr.length, target)
        if(arr[i] === target){
            console.log(i)
            return i;
        }
    }

    return -1;
}

linearSearch([1,2,3,4,5,6,7,8,9,10], 6)