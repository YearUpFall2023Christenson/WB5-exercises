let numbers = [300, 150, 25];



function getSum(currentTotal, newValue){
    return currentTotal + newValue;
}


let sumOfNumbers = numbers.reduce(getSum);

console.log(sumOfNumbers);

let myCurrentTotal = 0;

for( let number of numbers){
    myCurrentTotal = getSum(myCurrentTotal, number);
}

console.log(myCurrentTotal);