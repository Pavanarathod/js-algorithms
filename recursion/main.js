// TODO: Understand recursion and it's advantages

/**
 * * A process that calls itself
 * * A function calls itself
 * * Base case
 * * Different input cases
 */

function countDown(num) {
  if (num <= 0) {
    console.log("All done");
    return;
  }

  console.log(num);
  num -= 1;
  countDown(num);
}

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

countDown(5);
