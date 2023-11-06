let kids = [
    { first : "Natalie", last : "Plyers", age: 12 },
    { first: "Brittany", last: "Ray", age: 7},
    { first: "Zachary", last: "Westly", age:9 }
    ];


for (let i = 0 ; i < kids.length ; i++){
    let description = `${kids[i].last}, ${kids[i].first}    Age: ${kids[i].age}`
    console.log(description);
}

console.log("///////////////////////////////////")

for ( let kid of kids){
    let description = `${kid.last}, ${kid.first}    Age: ${kid.age}`
    console.log(description);  
}


console.log("///////////////////////////////////")

for ( let kid of kids){
    displayKid(kid);
}

function displayKid(kid){
    let description = `${kid.last}, ${kid.first}    Age: ${kid.age}`
    console.log(description);  
}



console.log("///////////////////////////////////")

kids.forEach(displayKid);



console.log("**************************************")

function getKidDescription(kid){
    return `${kid.last}, ${kid.first}    Age: ${kid.age}`
}

let kidDescriptions = kids.map(getKidDescription);


console.log(kids);
console.log (kidDescriptions)

console.log("*****************************")

