// Map

let names = ["Rahul", "Priya"];

let greetings = names.map(temp => "Hello " + temp);
console.log(greetings);

let num = [1, 2, 3]
let doubled = num.map(n => 2 * n);
console.log(doubled)


// Filter

let numbers = [10, 20, 30, 40];
let newArray = numbers.filter(num => num > 20);
console.log(newArray);