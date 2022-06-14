// TODO: Write a fuction which takes in a string and returns counts of ease charecter n the string

/**
 * * do somehting
 * * make on obejct to returns at the end
 * * loop over a string
 * *     if charecter is a key in object, add one to count
 * *     if the charecter is a key in object, add it to and set value to 1
 * *     if cahracter is soemthing else (space, period , etc) don't do anything
 * * returns object at end
 */

function charCount(value) {
  if (typeof value !== "string") console.log("Please enter the value..?");
  const result = {};
  for (var i = 0; i < value.length; i++) {
    var char = value[i].toLowerCase(); // * this gives us the each value
    if (result[char] > 0) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

function charCountVersionTwo(value) {
  let result = {};
  for (var eachItem of value) {
    eachItem = eachItem.toLowerCase();
    if (/[a-z0-9]/.test(eachItem)) {
      result[eachItem] = ++result[eachItem] || 1;
    }
  }
  return result;
}

console.log(charCount("PavanKumar"));
console.log(charCountVersionTwo("PavanKumar!@@#$#%"));
