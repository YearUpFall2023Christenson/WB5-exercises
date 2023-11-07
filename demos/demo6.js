let lockerAndAccessCode = [
    ["Locker 1", 135],
    ["Locker 2", 159],
    ["Locker 3", 642]
];


//console.log(lockerAndAccessCode[1][1])

let teamMembers = [
    ["Dana" /* 0 */, "Brenda" /* 1 */, "Happy" /* 3 */],  //this is 0
    ["Laura", "Patti"],                                     // this is 1
    ["Leslye", "Randy", "Mollye", "Ranse"],                 //this is 2
    ["Eloise", "Robert"]                                    // this is 3
];


let val1 = teamMembers[0][2];

console.log(val1);

let val2 = teamMembers[0];

console.log(val2);

let numTeams = teamMembers.length;

for (let i = 0; i < numTeams; i++) {
    console.log("-----------");
    console.log("Team " + (i + 1));
    console.log("-----------");
    let numMembers = teamMembers[i].length;
    for (let j = 0; j < numMembers; j++) {
        console.log(teamMembers[i][j]);
    }
}

let teamNumber = 1;
for( let team of teamMembers){
    console.log("-----------");
    console.log("Team " + teamNumber++);
    console.log("-----------");
    for (let member of team){
        console.log(member);
    }
}

