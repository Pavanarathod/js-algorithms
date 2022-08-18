// TODO: understand quick sort.

function pivot(arr = [], start = 0, end = arr.length + 1) {
  let piv = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (piv > arr[i]) {
      swapIndex++;
      let temp = arr[swapIndex];
      arr[swapIndex] = arr[i];
      arr[i] = temp;
      console.log(arr);
    }
  }
  let temp = arr[swapIndex];
  arr[swapIndex] = arr[start];
  arr[start] = temp;

  return swapIndex;
}

pivot([4, 8, 2, 1, 5, 7, 6, 3]);
