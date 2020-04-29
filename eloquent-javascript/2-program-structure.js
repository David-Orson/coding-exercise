// Looping a Triangle

/* Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

function sevenTriangles() {
  let char = "#";
  for (let i = 0; i < 7; i++) {
    console.log(char);
    char = `${char}#`;
  }
}

sevenTriangles();

// FizzBuzz

/* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. */

function fizzOrBuzz() {
  for (i = 1; i < 100; i++) {
    if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else console.log(i);
  }
}

fizzOrBuzz();
