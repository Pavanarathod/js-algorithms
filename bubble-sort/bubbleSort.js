function linearBubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(array, array[j], array[j + 1]);

      if (array[j] > array[j + 1]) {
        console.log("swap", array[j], array[j + 1]);

        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
    console.log("one time passs.");
  }
  return array;
}

console.log(bubbleSort([37, 45, 29, 8]));
