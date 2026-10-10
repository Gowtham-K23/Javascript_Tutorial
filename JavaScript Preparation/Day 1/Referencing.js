// Primitive

let a = 10;
let b = a;
b = 20

console.log(a)
console.log(b)

// Reference

let user1 = {
    name: "Gowtham",
    age: 21
}

let user2 = user1

user2.name = "Kumar"

console.log(user1.name)
console.log(user2.name)