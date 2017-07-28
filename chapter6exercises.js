// Exercise #1 - vector type
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes x and y parameters (numbers), which it should save to properties of the same name.
// Give the Vector prototype two methods, plus and minus, that take another vector as a parameter and
// return a new vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values.
// Add a getter property length to the prototype that computes the length of the vector—that is,
// the distance of the point (x, y) from the origin (0, 0).
function Vector(x,y){
  this.x = x;
  this.y = y;
  this.plus = function(vector){
    return [this.x + vector.x, this.y + vector.y];
  }
  this.minus = function(vector){
    return [this.x - vector.x, this.y - vector.y];
  }
  this.length = Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
}
// Tests for exercise #1
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5

// Exercise #2 - Another cell
// Implement a cell type named StretchCell(inner, width, height) that conforms to the
// table cell interface described earlier in the chapter.
// It should wrap another cell (like UnderlinedCell does) and ensure that the resulting cell has
// at least the given width and height, even if the inner cell would naturally be smaller.
function StretchCell(inner, width, height){
     this.inner = inner;
     this.width = width;
     this.height = height;
}
// The following two functions determine whether prototype or object has greater height and width
StretchCell.prototype.minWidth = function() {
    return Math.max(this.width, this.inner.minWidth());
};
StretchCell.prototype.minHeight = function() {
    return Math.max(this.height, this.inner.minHeight());
};
// Now we set the draw function to equal the larger height and width
StretchCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height);
};
// Tests for exercise #2
var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]

// Exercise #3 - Sequence interface
// Design an interface that abstracts iteration over a collection of values. An object that provides this interface represents a sequence, and the interface must somehow make it possible for code that uses such an object to iterate over the sequence, looking at the element values it is made up of and having some way to find out when the end of the sequence is reached.
// When you have specified your interface, try to write a function logFive that takes a sequence object and calls console.log on its first five elements—or fewer, if the sequence has fewer than five elements.
// Then implement an object type ArraySeq that wraps an array and allows iteration over the array using the interface you designed. Implement another object type RangeSeq that iterates over a range of integers (taking from and to arguments to its constructor) instead.
function logFive(seqobj){
}
// Tests for exercise #3
logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
