/*
// 2.1 - Looping a triangle
let symbol = "#";
for(let i=1; i<8; i++){
  console.log(symbol);
  symbol +="#";
};

// 2.2 - FizzBuzz
for (let n = 1; n <= 100; n++) {
  if(n%3==0 && n%5==0){
    console.log("FizzBuzz");
  }else if(n%3==0){
    console.log("Fizz");
  }else if(n%5==0){
    console.log("Buzz");
  }else{
    console.log(n);
  }
}

// 2.3 - Chess board
function drawGrid(size){
  for(let m=1; m<=size; m++){
    let line = "";
    if(m%2==0){
       line+=" ";
    }
    for(let n=1; n<=size; n++){
      if(n%2==0){
        line+=" ";
      }else{
        line+="#";
      }
    };
    console.log(line);
  };
};

// 3.1 - Minimum
function min(a,b){
  if(a<b)return a;
  else return b;
};

// 3.2 - Recursion
function isEven(a){
  if(a<0)a=a*-1;
  if(a==0)return true;
  else if(a==1) return false;
  else return isEven(a-2);
};

// 3.3 - Bean counting
const countChar = (str,char) => {
  let num = 0;
  for(let i=0; i<str.length; i++){
    if(str[i]==char) num++;
  }
  return num;
};

// 4.1 - Sum of range
const range = (a,b) => {
  let arr = [];
  for (let i=a; i<=b; i++){
    arr.push(i);
  };
  return(arr);
};
const range2 = (a,b,c=1) => {
  let arr = [];
  if(c>0){
  	for (let i=a; i<=b; i+=c){
    	arr.push(i);
  	};
  }else if(c<0){
    for (let i=a; i>=b; i+=c){
    	arr.push(i);
  	};
  };
  return(arr);
};
const sum = arr => {
  let tot = 0;
  for (let each of arr){
    tot+=each;
  };
  return tot;
};

// 4.2 - Reverse An array
function reverseArray(arr){
  let newArr = [];
  for(let each in arr){
    newArr.unshift(arr[each]);
  };
  return(newArr);
};
function reverseArrayInPlace(arr){
  let upTo = Math.floor(arr.length/2);
  let tempVal;
  for(let i=0; i<upTo; i++){
  	tempVal = arr[i];
  	arr[i] = arr[arr.length-1-i];
  	arr[arr.length-1-i] = tempVal;
  };
};

console.time();
reverseArray([1,2,3,4,5]);
console.timeEnd();

console.time();
reverseArrayInPlace([1,2,3,4,5]);
console.timeEnd();

// 4.3 - lists
const prepend = (val, rest) => {
  return {value: val, rest: rest};
};
const arrayToList = arr => {
  let list = prepend(arr[arr.length-1],null);
  for(let i=arr.length-2; i>=0; i--){
    list = prepend(arr[i],list);
  };
  return list;
};
const listToArray = list => {
  let arr = [];
  for(let node = list; node; node = node.rest){
    arr.push(node.value);
  };
  return arr;
};
const nth = (list, pos) => {
  if(pos==0) return list.value;
  else return nth(list.rest, pos-1);
};
};

// 4.4 -

// 5.1 - Flattening
function flatten(arr){
  let arr2 = arr.reduce( (a,b) => {
    return a.concat(b);
  });
  return arr2;
}

// 5.2 - Mother/child age difference
let arr2 = ancestry.filter(a => {
  return byName[a.mother] != null;
});
arr3 = [];
arr2.forEach(a => {
  console.log(a.born - byName[a.mother].born);
  arr3.push(a.born - byName[a.mother].born);
});

// 5.3 - Historical Life Expectancy
ancestry.forEach(a => {
  // Add in age and century properties (modifies original object)
  a.age = a.died - a.born;
  a.century = Math.ceil(a.died/100);
});
function avgAge(cent){
  // Create a new subset by century
  let newArr = ancestry.filter(a => {
  return a.century == cent;
  });
  // Calculate and return avg age
  let sum = 0;
  newArr.forEach(a => {sum += a.age});
  return sum/newArr.length;
}
*/

// 6.1 - A Vector Type
class Vector { //create a vector class
  constructor(x,y){ // define the constructor for new vector objects
  this.x=x;
  this.y=y;
  }
  get length(){ // define a get method for determining a vectors length
    let total = this.x*this.x+this.y*this.y;
    return Math.sqrt(total);
  }
}
// add methods to the vector class prototype
Vector.prototype.plus = function(otherVec){
  return new Vector(this.x+otherVec.x,this.y+otherVec.y);
}
Vector.prototype.minus = function(otherVec){
  return new Vector(this.x-otherVec.x,this.y-otherVec.y);
}

// 6.2 - Groups
class Group {
  constructor(){
    this.members = [];
  }
  add(x){
    if(!this.has(x)){
      this.members.push(x);
    }
  }
  delete(x){
    this.members = this.members.filter(a => a != x);
  }
  has(x){
    return this.members.includes(x);
  }
  static from(arr){
    let a = new Group;
    for (let i of arr){
      a.add(i);
    }
    return a;
  }
}
