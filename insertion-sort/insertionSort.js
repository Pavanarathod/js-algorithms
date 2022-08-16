function insertionSort(arr = []) {
  if (arr.length === 0) return;

  console.log("ARRAY LENGTH", arr.length);

  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    console.log("currentValue", currentValue);

    console.log("I -- value inside the parent loop: ", i);
    for (let j = i - 1; j >= 0; j--) {
      console.log("J -- value inside the loop", j);
      console.log(arr[j]);
    }
  }
}

insertionSort([2, 1, 9, 76, 4]);
