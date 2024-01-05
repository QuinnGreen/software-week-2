// Activity 1
// let age = 30

// let country = "UK"

// if (age > 17 && country == "UK"){
//     console.log("Yes I can serve you")
// }
// else {
//     console.log("You aren’t old enough")
// }
// Activity 2
// pizzaTopping = "pineapple"

// switch (pizzaTopping) {
//     case "mushrooms":
//     case "ham":
//     case "jalapenoes":
//     case "salami":
//         console.log("These are important ingredients for my pizza.")
//         break;
//     case "pepperoni":
//         console.log(`"I don’t mind having ${pizzaTopping} on my pizza."`)
//     default:
//         console.log(`${pizzaTopping} should not be on a pizza.`)
//         break;
// }

// Activity 3
// let password = "password123"
// let length = password.length

// if (length > 8) {
//     console.log("Password is long enough")
// }
//     else {
//         console.log("password is too short.")
//     }


// let word = 18

// if (word % 3 == 0 || word % 5 == 0){    
//     console.log("This wordber is divisible by 3 or 5")
// }
// else {
//     console.log("This wordber isnt divisible by 3 or 5")
//     }

// Activity 4

// let word = 20

// if (word % 3 == 0 && word % 5 == 0 ){
//     console.log("fizzbuzz")
// }
// else if (word % 5 == 0) {
//     console.log("buzz")
// }
// else if (word % 3 == 0 ) {
//     console.log("fizz")
// }

// Activity 5

// let word = 1001

// function palindromeChecker(word) {
//     let splitString = word.split("");
//     let reverseArray = splitString.reverse() ;
//     let joinArray =  reverseArray.join("");
//     if (joinArray == word) {
//         console.log("palindrome")
//     }
    
//     else {
//         console.log("not a palindrome")
//     }
// }
// palindromeChecker("1201")

// Activity 6

// let time = 1
// let placeOfWork = "study"
// let townOfHome = "manc"

// if (time < 9 || time > 11){
//     console.log("i am in bed")
// }

// else if (time >= 9 && time < 9.5 ) {
//         console.log(`"i am commuting to my ${placeOfWork} from bed"`)
//     }

// else if (time >= 9.5 && time < 5.5) {
//     console.log(`I am working in my ${placeOfWork} in ${townOfHome}`)
// }
// else if (time >= 5.5 && time < 11) {
//     console.log("I am relaxing at home")
// }
// else {
//     console.log("IDK, probably asleep")
// }

// // Activity 7

// let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi'
// let vowels =  ['a','e','i','o','u'];

// let array = string.split("").reverse(); // split string into array, and reverse it
// let indexOfLastVowelInReverse = array.findIndex(e => vowels.includes(e))

// if(indexOfLastVowelInReverse != -1) { // if the index is -1 there is no vowel in the string
//   let index = string.length-1-indexOfLastVowelInReverse
//   console.log(`Last vowel found at index ${index}: ${string[index]}`)
// }

// Activity 8

// let word = "abbgdfb"
// let wordArray1 = word.split("")

// let wordArray = word.split("")
// let reverseArray = wordArray.reverse()

// if (wordArray1[0] === reverseArray[0]) {
//     console.log("First letter is the same as last")
// }

// else {
//     console.log("First letter is not the same as last")
// }


// Activity 9

// let num1 = 8
// let num2 = 3

// if ((num1 + num2) % 2 == 0){
//     console.log("the sum of the two numbers is even")}
// else {console.log(num1 * num2)}