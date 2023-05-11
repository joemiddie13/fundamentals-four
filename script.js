// An array of car automobile companies
// const cars = ["Rivian", "Jeep", "Ford"];
// Arrays are a much more efficient way to create variables
// What if you had 300 different cars? Arrays, baby.

// It's ok to create arrays on multiple lines as well:
// const popsicle = [
//     "Mango",
//     "Strawberry"
//     "Watermelon"
// ];

// Here you can create an array and then provide or assign the elements [1]
// const cars = [];
// cars[0] = "Rivian";
// cars[1] = "Jeep";
// cars[2] = "Ford";

// Accessing Array Elements

// const cars = ["Rivian", "Jeep", "Ford"];
// let car = cars[1];
// console.log(car);

// Changing an Array element

// const cars = ["Rivian", "Jeep", "Ford"];
// cars[2] = "Toyota";
// console.log(cars);
// prompt("What type of car do you like?");
// window.alert(cars);

// Access the Full Array

// const cars = ["Rivian", "Jeep", "Ford"];
// document.getElementById("demo").innerHTML = cars;

// Arrays are Objects

// const person = ["Joe", "Paul", 36];
// firstName = [0];
// console.log(person.firstName);

// const person = [firstName:"Joe", lastName:"Paul", age:36];
// function toUpper(string) {
//     return string.toUpperCase();
//   }
  
//   const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
  
//   const upperCats = cats.map(toUpper);
  
//   console.log(upperCats);
  // [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

  // const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

  // for (const cat of cats) {
  //   console.log(cat);
  // }

//   const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

// for (let i = 0; i < cats.length; i++) {
//   console.log(cats[i]);
// }


// const cats = ['Pete', 'Biggles', 'Jasmine'];

// let myFavoriteCats = 'My cats are called ';

// for (const cat of cats) {
//   myFavoriteCats += `${cat}, `
// }

// console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "

// const cats = ['Pete', 'Biggles', 'Jasmine'];

// let myFavoriteCats = 'My cats are called ';

// for (let i = 0; i < cats.length; i++) {
//   if (i === cats.length - 1) {   // We are at the end of the array
//     myFavoriteCats += `and ${cats[i]}.`
//   } else {
//     myFavoriteCats += `${cats[i]}, `
//   }
// }

// console.log(myFavoriteCats);     // "My cats are called Pete, Biggles, and Jasmine."


// EXITING LOOPS WITH BREAK

// const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
// const para = document.querySelector('p');
// const input = document.querySelector('input');
// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//   const searchName = input.value.toLowerCase();
//   input.value = '';
//   input.focus();
//   para.textContent = '';
//   for (const contact of contacts) {
//     const splitContact = contact.split(':');
//     if (splitContact[0].toLowerCase() === searchName) {
//       para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
//       break;
//     }
//   }
//   if (para.textContent === '') {
//    para.textContent = 'Contact not found.';
//  }
// });

// The Standard "for... loop"

// for (initializer; condition; final-expression) {
//   // code to run
// }

// 1. An initializer - usually a variable set to a number. Incremented to count
// the number of times the loop has run. Also called the "counter variable"

// 2. Condition - defines when the loop should stop looping
// Generally an expression featuring a comparison operator
// or a test to see if the exit condition has been met

// 3. Final-expression - evaluated or run each time the loop has gone through
// a ful iteration. Usually serves to increment (sometimes decrement) the counter variable
// to bring everything closer to the point where the condition is no longer true

// const para = document.querySelector('p');
// const input = document.querySelector('input');
// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//   para.textContent = 'Output: ';
//   const num = input.value;
//   input.value = '';
//   input.focus();
//   for (let i = 1; i <= num; i++) {
//     let sqRoot = Math.sqrt(i);
//     if (Math.floor(sqRoot) !== sqRoot) {
//       continue;
//     }
//     para.textContent += `${i} `;
//   }
// });

// while and do... while

// initializer
// while (condition) {
//   // code to run

//   final-expression
// }

const cats = ['Pete', 'Biggles', 'Jasmine'];

let myFavoriteCats = 'My cats are called ';

let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
}

console.log(myFavoriteCats);     // "My cats are called Pete, Biggles, and Jasmine."
