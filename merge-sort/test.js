function test(word = "") {
  if (word[0].toUpperCase() === word[0]) {
    return "Uppercase";
  } else {
    return "Lowercase";
  }
}

console.log(test("pavan"));
