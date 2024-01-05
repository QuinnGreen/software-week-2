// let person = {
//     name: "Quinn",
//     age: 30,
//     faveSong: ["bohemian rhapsody", "hurt", "between the bars","water", "white rabbit"]
// };

// console.log(person.faveSong)

// // let temp = "name"
// // console.log(person[temp])

// let alarm = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am"
// };

// day = "weekday"
// alarm1 = ""

// if (day === "weekday"){
//     message = alarm.weekdayAlarm;
// }
// else {
//     message = alarm.weekendAlarm
// }

// console.log(message)

// let day = "Sunday";
// let message = "";

// let alarm = {
//     weekendAlarm: "No alarm needed",
//     weekdayAlarm: "Get up at 7am"
// };

// if (day === "Saturday" || day === "Sunday"){
//     message = alarm.weekendAlarm;
// } else {
//     message = alarm.weekdayAlarm;
// };

// console.log(message);

// let person = {
//     name: "Quinn",
//     age: 30,
//     faveSong: ["bohemian rhapsody", "hurt", "between the bars","water", "white rabbit"]
// };
// console.log(person.faveSong)

// activity 1

// let person = {
//     name: "Quinn",
//     age: 30,
//     faveSong: ["bohemian rhapsody", "hurt", "between the bars","water", "white rabbit"],
//     sayHi() {
//         return `Hello my name is ${this.name}`
//     }
// };
// console.log(person.sayHi())

// activity 2

// let pet = {
//     name: "Gilly",
//     age: 9,
//     colour: "tabby",
//     typeOfPet: "cat",

//     eat() {
//         return `${this.name} is eating`;
//     },

//     drink() {
//         return `${this.name} is drinking`;
//     },
// };

// console.log(pet.eat());

// activity 3 

// let coffeeShop = {
//     branch: "Rusholme",
//     drinks: {
//         hotChocolate: 3,
//         flatWhite: 2,
//         tea: 1.5,
//     },
//     food: {
//         muffin: 4,
//         pastry: 2.5,
//         iceCream: 2,
//     },
//     order: [],
//     total: 0,

//     orderDrink(drink) {
//         if (drink in this.drinks) {
//             this.order.push(drink);
//             this.total += this.drinks[drink];
//             return `You have ordered a ${drink}, your running total is £${this.total}`;
//         } else {
//             return "we don't sell that";
//         }
//     },

//     orderFood(food) {
//         if (food in this.food) {
//             this.order.push(food);
//             this.total += this.food[food];
//             return `You have ordered a ${food}, your running total is £${this.total}`;
//         } else {
//             return "we don't sell that";
//         }
//     },

//     completeOrder() {
//         console.log(`Thank you for your order!\nYour order is: ${this.order}\nYour total is: £${this.total}`);

//         this.order = [];
//         this.total = 0;

//         return "Thanks for your business";
//     },
// };

// console.log(coffeeShop.orderDrink("pint of beer"));
// console.log(coffeeShop.orderFood("muffin"));
// console.log(coffeeShop.orderFood("iceCream"));
// console.log(coffeeShop.completeOrder());