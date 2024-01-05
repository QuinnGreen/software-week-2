// Activity 1/2
// let faveSongArray = ["bohemian rhapsody", "hurt", "between the bars"]
// faveSongArray.push("water", "white rabbit")
// faveSongArray.pop()
// // console.log(faveSongArray)
// faveSongArray.shift() //removes first element of array
// // console.log(faveSongArray)

// faveSongArrayboop = faveSongArray.map(boopAdder)
// function boopAdder(letr){return letr+"boop"}

// console.log(faveSongArrayboop)

//Activity 1.1

// filmArray = ["slc punk", "princess mononoke", "trainspotting", "a scanner darkly", "limitless"]

// filmArray.push("thor", "moneyball")
// count = 0
// for (let i = 0; i < 7; i++) {
//     console.log(filmArray[i])
// }


//Activity 2.1
// for (let i = 0; i < 6; i++) {console.log(Math.random()*51)}

// Activity 3

// for (let i = 9; i > -1; i--) {console.log(i)}

// Activity 4 

// filmArray = ["slc punk", "princess mononoke", "trainspotting", "a scanner darkly"]

// for (let i = 0; i < 4; i++) {
//         console.log(filmArray[i])    
//     }
// if (filmArray[2] == "Ghostbusters") {
//         console.log("Yay its Ghostbusters")}
//         else {console.log("Boo! We want Ghostbusters")}

// Activity 5 

// for (let i = 0; i < 6; i++) {
//     let randomNumber = Math.floor(Math.random()*30) + 1
//     console.log(randomNumber )
// if (randomNumber % 7 == 0){
//     console.log("Divisible by 7")}
//     else (console.log("not Divisible by 7"))
// }
    
// Activity 6 

let bobsFollowers = ["dave", "fred", "jason", "alice"]
let hannahsFollowers = ["alice", "fred", "hilda", "bob"]

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < hannahsFollowers.length; i++) {
    if (bobsFollowers[i] === hannahsFollowers[j]) {
        console.log(`${bobsFollowers[i]} is a mutual follower`);
        }
    }
}

// Activity 7 - Examples of do..while, while and for loops. and give the pros and cons of each.

// do...while
let a = 0;
do {
    console.log(a);
    a++;
} while (i < 10);

// do...while pros - runs at least once.
// do...while cons - confusing to read.

// while loop
let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}

// while loop pros - easier to read.
// while loop cons - may not run at all if the condition is not met.

// for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// for loop pros - easier to read.
// for loop cons - runs for a finite number of times.