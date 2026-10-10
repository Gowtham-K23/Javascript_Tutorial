// unpacks the array or string
let num = [1, 2, 3, 4, 5]
let maximum = Math.max(...num)
let minimum = Math.min(...num)
console.log(maximum)
console.log(minimum)

let name = "Bro Code"
let letters = [...name]
console.log(letters)

let fruits = ["Apple", "Orange", "Mango"]
let vegetables = ["Carrot", "Potato"]
let foods = [...fruits, ...vegetables]
console.log(foods)