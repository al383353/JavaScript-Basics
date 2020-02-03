console.log("Hello world!");
let person = {
    name: 'Senait',
    age: 26
};
person.name= 'Miki';
console.log(person.name);

//var age = prompt("What is your age?");
document.getElementById("age").innerHTML = person.age;

//Data types
let urAge = 28; let name = 'Senait'; 
let fullName = {first: 'Senait Meles', last: 'Alema'};
let truth = true;
let groceries = ['apple', 'banana', 'oranges'];
console.log(groceries.length);
for(let gr = 0; gr < groceries.length; gr++){
    document.getElementById("groceries").innerHTML = groceries[gr];
 }

// Switch statements of weekdays
//day 0 is Sunday, day 6 is Saturday, day 4 is Thursday --> weekday

switch(2) {
    case 0:
        text = 'Weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'Weekday';
    
}
console.log(text);

//JSON/represents data, In JSan array with objects inside of it
//JS object notation, In python called list with dictionaries

//https://www.youtube.com/watch?v=Qqx_wzMmFeA 1:37:35