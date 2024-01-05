//console.log("Hello World".length)

//console.log("Hello World".toUpperCase())

//0 - 9 
//console.log(Math.floor(Math.random() * (10 - 1) + 1))


//1=10
//console.log(Math.ceil(Math.random() * (10 - 1) + 1))

//0-10
//console.log(Math.round(Math.random() * (10 - 1) + 1))


// i = "All Around the World"
// console.log(i.charAt(7).toUpperCase())

// Activity 1
// let name = 'Derek';
// let age = 18;
// let faveColour = "Blue"

// console.log(`my name is ${name} im ${age} and my favorite colour is ${faveColour}.`)

// name = 'Darren';
// age = 58;
// faveColour = "green"

// console.log(`my name is ${name} im ${age} and my favorite colour is ${faveColour}.`)

// Activity 2

// let breakfast = "nothing"
// let lunch = "pasta"
// let dinner = "a burger"

// breakfast = "biscuit"
// lunch = "pizza"
// dinner = "a wrap"
// console.log(`For breakfast i had ${breakfast}, for lunch i had ${lunch} and for dinner i had ${dinner} `)

// Activity 3
// const birthDate = new Date(1993,9,25)
// const todayDate = new Date(2024,1,2)
// a = todayDate.getTime() - birthDate.getTime()
// console.log(a / 1000 / 3600 / 24)

//a = 11057

// activity 4

// let space1 = "x"
// let space2 = "o"
// let space3 = ""
// let space4 = "x"
// let space5 = "x"
// let space6 = ""
// let space7 = "o"
// let space8 = ""
// let space9 = ""

// // ${space1}

// // console.log(`"  |   |   \n ${space1} | ${space2} | ${space3} \n   |   |   \n-----------\n   |   |   \n ${space4} | ${space5} | ${space6} \n   |   |   \n-----------\n   |   |   \n ${space7} | ${space8}  |  ${space9} \n   |   |   \n"`)


// let a = "   |   |   \n" 
// let a1 = ` ${space1} | ${space2} | ${space3} \n`
// let a2 = ` ${space4} | ${space5} | ${space6} \n`
// let a3 = ` ${space7} | ${space8}  | ${space9} \n`
// let b = "-----------\n" 

// console.log(a+a1+a+b+a+a2+a+b+a+a3+a)



// let count = 0
// while (count < 3){
//     console.log("   |   |   ")
//     count++;}
//     if (count = 4){
//         console.log("-----------")
//         count++;}
//         while (count < 8){
//             console.log("   |   |   ")
//             count++;}
//             if (count = 8){
//                 console.log("-----------")
//                 count++;}
//                 while (count < 12 ){
//                     console.log("   |   |   ")
//                     count++;}

            
// let normalRow =     "   |   |   "
// let dividerRow =    "-----------"
// for (i=1; i < 12; i++) { // Loop 11 times
//     if (i % 4 == 0) console.log( dividerRow ) // Print the divider row string every fourth row.
//     else console.log( normalRow ) // Otherwise print the normal row.
// }