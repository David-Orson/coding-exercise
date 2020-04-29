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

/* When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those). */

function fizzBuzz() {
  for (i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else console.log(i);
  }
}

fizzBuzz();

// Chessboard

/* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard. */

function chessboard() {
  let chessboardString = " # # # #\n";
  for (let i = 0; i < 8; i++) {
    if (i === 0) {
    } else {
      if (i % 2 === 0) {
        chessboardString += " # # # #\n";
      } else {
        chessboardString += "# # # # \n";
      }
    }
  }
  console.log(chessboardString);
}

chessboard();

/* When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height. */

function makeCheckerboard(size) {
  let evenString = "";
  for (i = 0; i < size; i++) {
    if (i % 2 === 0) {
      evenString = `${evenString} `;
    } else {
      evenString = `${evenString}#`;
    }
  }
  evenString += "\n";

  let oddString = "";
  for (i = 0; i < size; i++) {
    if (i % 2 === 0) {
      oddString = `${oddString}#`;
    } else {
      oddString = `${oddString} `;
    }
  }
  oddString += "\n";

  let checkerboardString = "";
  for (let i = 1; i <= size; i++) {
    if (i % 2 === 0) {
      checkerboardString += evenString;
    } else {
      checkerboardString += oddString;
    }
  }
  console.log(checkerboardString);
}

makeCheckerboard(8);
