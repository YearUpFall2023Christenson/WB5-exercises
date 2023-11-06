let kids = [
    { first : "Natalie", last : "Plyers", age: 12 },
    { first: "Brittany", last: "Ray", age: 7},
    { first: "Zachary", last: "Westly", age:9 }
    ];


console.log("///////////////////////////////////")

kids.forEach(function(kid){
    let description = `${kid.last}, ${kid.first}    Age: ${kid.age}`
    console.log(description);   
});


console.log("**************************************")

// let kidDescriptions = kids.map(function(kid){
//      return `${kid.last}, ${kid.first}    Age: ${kid.age}`
// });


let kidDescriptions = kids.map( (kid) => `${kid.last}, ${kid.first}    Age: ${kid.age}`);


console.log(kids);
console.log (kidDescriptions)

console.log("*****************************")



/////////////

//(a, b) => a * b


function myFunction(a,b){
    return a * b;
}