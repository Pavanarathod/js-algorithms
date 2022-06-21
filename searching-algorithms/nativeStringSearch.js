/**
 * * Loop over the longer string
 * * Loop over the shorter string
 * * if the charecter don't match , break out of the inner loop
 * * if the charecter do match , keep going
 * * if you complete the inner loop and find a match, increment the count of matches
 * * return count
 */

function naiveSearch(long, pattern){
    for(var i = 0; i < long.length; i++){
        for(j = 0; j < pattern.length; j++){
          console.log(long[i], pattern[j])
        }
    }
}

console.log(naiveSearch("lorie loled", "lol"))

