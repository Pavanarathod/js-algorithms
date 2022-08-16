function selectionSort(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    1;
    console.log("MINIMUM VALUE BEFORE SWAP: ", min);
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    console.log("MINIMUM VALUE", min);
    console.log("**********");
    console.log(arr);
    console.log("SWAPPING TO: ");
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
    console.log(arr);
    console.log("***********");
  }
  // return arr;
}

selectionSort([34, 22, 10, 19, 17]);
