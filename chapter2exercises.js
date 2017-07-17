// Exercise #1 - Looping a triangle
var hash = '';
  for (var i = 0; i<7; i++){
  hash += '#';
  console.log(hash);
}

// Exercise #2 - FIZZBUZZ
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5
// (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
for (var i = 1; i<=100; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz');
  }else if(i % 3 === 0){
    console.log('Fizz');
  }else if(i % 5 === 0){
    console.log('Buzz');
  }else{
    console.log(i);
  }
}

// Exercise #3 - Chess Board
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
// When you have a program that generates this pattern, define a variable size = 8 and change the program
// so that it works for any size, outputting a grid of the given width and height.
function createChecker (width, height){
  var board = '';
  for (var i = 1; i <= height; i++){
    // Alternate the starting character of each line
    if (i % 2 === 0){
      var j = 1;
    }else{
      var j = 2;
    }
    // Write each line
    for (j; j <= width; j++){
      if (j % 2 === 0){
        board += '#';
      }else{
        board += ' ';
      }
    }
    board += '\n';
  }
  console.log(board);
}
createChecker(20, 10);
