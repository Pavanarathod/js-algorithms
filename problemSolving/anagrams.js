/**
 * TODO: Given string, wire a fuction to determine if the second string is an anagram of first
 */

/**
 * * Create a function validAnagram
 * * create on empty object {}
 * * loop over the first value and assign it to object if the key exists add one to it
 * *
 */

function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  console.log(lookup);
  return true;
}

console.log(validAnagram("pavan", "pavan"));
