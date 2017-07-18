// Exercise #1 - The sum of a range
// Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
// Run the previous program and see whether it does indeed return 55.
// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to
// build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior.
// The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values
// so that range(5, 2, -1) produces [5, 4, 3, 2].
function range(start, end, step){
  // Check for optional step argument
  if (arguments.length<3){
    if (start < end){
      step = 1;
    }else{
      step = -1;
    }
  }else{
    step = arguments[2];
  }
  var array = [];
  // Check for negative step
  if (step < 0){
    // Reverse order of numbers
    if (start < end){
      var temp = start;
      start = end;
      end = temp;
      console.log(start + "," + end);
    }
    // Loop through and create array
    for (var i = start; i >= end; i += step){
      array.push(i);
    }
  }else{
  // Loop through and create array
    for (var j = start; j <= end; j += step){
      array.push(j);
    }    
  }
  return array;
}
function sum(array){
  var sum = 0;
  for (var value in array){
    sum += array[value];
  }
  return sum;
}
// Tests for exercise #1
console.log(range(1,10,-2));
console.log(range(1,15));
console.log(range(10,1));
console.log(sum(range(1,10)));



// Exercise #2 - Reversing an array
// Arrays have a method reverse, which changes the array by inverting the order in which its elements appear.
// For this exercise, write two functions, reverseArray and reverseArrayInPlace.
// The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
// The second, reverseArrayInPlace, does what the reverse method does:
// it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.
function reverseArray(array){
  var newArr = [];
  for (var each in array){
    newArr.unshift(array[each]);
  }
  return newArr;
}
function reverseArrayInPlace(array){
  for (var i = 1; i <= (Math.floor(array.length / 2)); i++){
    // Store the values
    var value1 = array[array.length-i];
    var value2 = array[i-1];
    // Swap the values
    array[array.length-i] = value2;
    array[i-1] = value1;
  }
  return array;
}
// Tests for exercise #2
console.log(reverseArray(['A', 'B', 'C']));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));



// Exercise #3 - A List
// Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument,
// and write a listToArray function that produces an array from a list.
// Also write the helper functions prepend, which takes an element and a list and creates a new list that adds
// the element to the front of the input list, and nth, which takes a list and a number and returns the element
// at the given position in the list, or undefined when there is no such element.
function arrayToList(array){
  var list = {};
  for (var i = array.length-1; i>=0; i--){
    // Check for empty list
    if (list['rest'] === undefined){
      list['value'] = array[i];
      list['rest'] = null;
    }else{
      list = prepend(array[i], list);
    }
  }
  return list;
}
function listToArray(list){
  var array = [];
  var currentDepth = list;
  // Check for depth in the list. If we are not at the end, append the value and move to the next value
  while (currentDepth['rest'] !== null){
    array.push(currentDepth['value']);
    currentDepth = currentDepth['rest'];
  }
  array.push(currentDepth['value']);
  return array;
}
function prepend(element, list){
  var newList = {};
  newList['value'] = element;
  newList['rest'] = list;
  return newList;
}
function nth(list, number){
  currentDepth = list;
  // Move the number of steps into the list
  for (var i=0; i<number; i++){
    currentDepth = currentDepth['rest'];
  }
  return currentDepth['value'];
}
// Tests for exercise #3
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nth(arrayToList([10, 20, 30]), 2));



// Exercise #4 - Deep Comparison
// The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.
// Write a function, deepEqual, that takes two values and returns true only if they are the same value
// or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.
// To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties,
// you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison.
// But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".
function deepEqual(valOne, valTwo){
  // Perform a regular comparison in case two non-objects were passed to the function
  if (valOne === valTwo){
    return true;
  }
  
  // If either argument is null or is not an object, return false
  if (valOne === null || valTwo === null || typeof valOne !== 'object' || typeof valTwo !== 'object'){
    return false
  }
  
  // Count the number of properties in each object
  var propsOne = 0;
  var propsTwo = 0;
  
  for (var property in valOne){
    propsOne += 1;
  }

  for (var property in valTwo){
    propsTwo += 1;
    // While counting the properties in the second argument, check to see if any of the properties are different
    // Also check to see if the props of the props are different
    // As long as neither of the above is true, keep going as normal
    if (!(property in valOne) || !deepEqual(valOne[property],valTwo[property])){
      return false;
    }
  }
  return propsOne === propsTwo;
}

// Tests for exercise #4
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log(deepEqual(obj, {there: {is: "an"}, object: 2}));
console.log(deepEqual(1, 2));
console.log(deepEqual('thing', 'thing'));
