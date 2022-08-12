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

function factorial(num){
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}


function recursiveFactorial(num){
  return num * recursiveFactorial(num - 1)
}

// recursive helper uproch.

function collectOddValues(arr){
    let result = [];
    
    function helper(helperInput = []){
        
        if(helperInput.length === 0){
            return;
        }

        console.log(helperInput[0])
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }

    helper(arr);
    return result;
}


function collectOddValues(arr){
    let newArr = [];

    if(arr.length === 0){
        return newArr;
    }

    console.log(arr[0] % 2)
    if(arr[0] % 2 !== 0){
        console.log(arr[0] % 2)
        newArr.push(arr[0])
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)))
    return newArr;
}


collectOddValues([1,2,3,4,5])


countDown(5);
