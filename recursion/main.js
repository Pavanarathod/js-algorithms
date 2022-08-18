function countDown(num) {
  if (num <= 0) {
    console.log("All done");
    return;
  }

  console.log(num);
  num = num - 1;
  countDown(num);
}

// countDown(3)

function sumRange(num) {
  if (num === 1) {
    console.log(num);
    return 1;
  }

  console.log(num);
  return num + sumRange(num - 1);
}

// sumRange(4)

function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

// factorial(4)

function recursiveFactorial(num) {
  if (num === 1) return 1;
  return num * recursiveFactorial(num - 1);
}
/**
recursiveFactorial(6)
  return 6 * recursiveFactorial(5)
         return 5 * recursiveFactorial(4)
                return 4 * recursiveFactorial(3)
                       return 3 * recursiveFactorial(2)
                              return 2 * recursiveFactorial(1)
                                     return 1;
*/

// recursiveFactorial(5)

function collectOddValues(arr) {
  let results = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      results.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return results;
}

// collectOddValues([1,2,3,4,5,6])

function pureRecursion(arr = []) {
  let results = [];

  if (arr.length === 0) {
    return results;
  }

  if (arr[0] % 2 !== 0) {
    results.push(arr[0]);
  }

  results = results.concat(pureRecursion(arr.slice(1)));
  return results;
}

/**
  pureRecursion([1,2,3,4,5])
          [1].concat(pureRecursion([2,3,4,5]))
                    [].concat(pureRecursion([3,4,5]))
                             [3].concat(pureRecursion([4,5]))
                                         [].concat(pureRecursion([5]))
                                                  [5].concat(pureRecursion([]))
                                                            [];      
*/

pureRecursion([1, 2, 3, 4, 5]);
