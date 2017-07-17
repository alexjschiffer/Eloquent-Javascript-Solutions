// Exercise #1 - Minimum
// The previous chapter introduced the standard function Math.min that returns its smallest argument.
// We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.
function min(num1, num2){
  if (num1 <= num2){
    console.log(num1);
  }else{
    console.log(num2);
  }
}
min(6, 12);

// Exercise #2 - Recursion
// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd
// by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:
// Zero is even. One is odd. For any other number N, its evenness is the same as N - 2.
// Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.
// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
function isEven(number){
  if (number === 0){
    console.log('even');
  }else if (number === 1){
    console.log('odd');
  }else if(number<0){
    isEven(number*=-1);
  }else{
    isEven(number-=2);
  }
}
isEven(50);
isEven(50);
isEven(-1);
isEven(-20);

// Exercise #3 - Bean Counting
// Write a function countBs that takes a string as its only argument and returns a number that indicates
// how many uppercase “B” characters are in the string.
// Next, write a function called countChar that behaves like countBs, except it takes a second argument
// that indicates the character that is to be counted (rather than counting only uppercase “B” characters).
// Rewrite countBs to make use of this new function.
function countChar(string, char){
  var count = 0;
  for (var i = 0; i < string.length; i++){
    if(string.charAt(i) === char){
      count++;
    }
  }
  return count;
}
console.log(countChar('BBC America', 'B'));
console.log(countChar('kakkerlak', 'k'));