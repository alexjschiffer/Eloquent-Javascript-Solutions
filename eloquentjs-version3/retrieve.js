let u = "https://www.proteinatlas.org/ENSG00000121410.json?callback=?";

$.getJSON(u,function(data){
let stringed = JSON.stringify(data);
let data2 = JSON.parse(stringed);
console.log(stringed);
console.log(data2);
});



let dataa;
$.getJSON(u,function(data){
dataa = data;
});

console.log(typeof dataa);
