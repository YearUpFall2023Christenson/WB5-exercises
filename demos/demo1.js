let numbers = [7, 9, 64, 60, 12, 13, 65, 62];



let firstNumberOver60;
let firstNumberOver60Index;

for( let i = 0; i < numbers.length ; i++){
    if(numbers[i] > 60){
        firstNumberOver60 = numbers[i];
        firstNumberOver60Index = i;
        break;
    }
}

// for( let number of numbers){
//     if(number > 60){
//         firstNumberOver60 = number;
//         break;
//     }
// }

// for (let number of numbers){
//     if(isOver60(number)){
//         firstNumberOver60 = number;
//         break;
//     }
// }

console.log(`The first number over 60 is ${firstNumberOver60}`);



function isOver60(someValue) {
   return (someValue > 60);
}

let firstNumberOver60UsingFind = numbers.find(isOver60);
let firstNumberOver60UsingFindIndex = numbers.findIndex(isOver60);

console.log(`The first number over 60 is ${firstNumberOver60UsingFind} at index ${firstNumberOver60UsingFindIndex}`);


let allOver60 = [];

for( let number of numbers){
    if(isOver60(number)){
        allOver60.push(number);
    }
}

console.log(numbers);
console.log(allOver60);

let allOver60WithFilter = numbers.filter(isOver60);

console.log(allOver60WithFilter);