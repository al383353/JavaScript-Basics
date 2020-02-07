console.log("Hello world!");
let personA = {
  name: "Senait",
  age: 25
};
personA.name = "Miki";
console.log(personA.name);

//var age = prompt("What is your age?");
document.getElementById("age").innerHTML = personA.age;

//Data types
let urAge = 28;
let name = "Senait";
let fullName = { first: "Senait Meles", last: "Alema" };
let truth = true;
let groceries = ["apple", "banana", "oranges"];
console.log(groceries.length);
for (let gr = 0; gr < groceries.length; gr++) {
  document.getElementById("groceries").innerHTML = groceries[gr];
}

// Switch statements of weekdays
//day 0 is Sunday, day 6 is Saturday, day 4 is Thursday --> weekday

switch (2) {
  case 0:
    text = "Weekend";
    break;
  case 5:
    text = "weekend";
    break;
  case 6:
    text = "weekend";
    break;
  default:
    text = "Weekday";
}
console.log(text);

//JSON/represents data, In JSan array with objects inside of it
//JS object notation, In python called list with dictionaries

//https://www.youtube.com/watch?v=Qqx_wzMmFeA 1:37:35
/* Arrow function*/
const multiply = num => {
  return num * 4;
};
console.log(multiply(2));

/*Class*/
class Human {
  constructor() {
    this.gender = "Female";
  }
  printGender() {
    console.log(this.gender);
  }
}
class person extends Human {
  constructor() {
    super();
    this.name = "Senait";
  }
  printName() {
    console.log(this.name);
  }
}
const instance = new person();
instance.printName();
instance.printGender();

/*With ES6*/
class HumanB {
  gender = "Female";
  printGender = () => {
    console.log(this.gender);
  };
}
class personB extends HumanB {
  name = "Senait";
  gender = "Female";
  printName = () => {
    console.log(this.name);
  };
}
const instance2 = new personB();
instance2.printName();
instance2.printGender();
/*Spread*/
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const perObject = {
  nameObj: "Senait"
};
const newperObject = {
  ...perObject,
  ageofP: 25
};
console.log(newperObject);

/*Rest*/
const filter = (...args) => {
  return args.filter(el => el === 1);
};
console.log(filter(1, 2, 3));

//Destructuring
[num1, , num2] = numbers;
console.log(num1, num2);

const doubleNumArray = numbers.map(num => {
  return num * 2;
});

console.log(doubleNumArray);
