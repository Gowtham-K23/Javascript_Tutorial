const numbers = [1, 2, 3, 4, 5]
const squares = numbers.map(square)
const cubes = numbers.map(cube)

function square(element)
{
    return Math.pow(element, 2)
}

function cube(element)
{
    return Math.pow(element, 3)
}

console.log(squares)
console.log(cubes)

const students = ["Aa", "Bb", "Cc", "Dd"]
const res1 = students.map(upperCase)
console.log(res1)
const res2 = students.map(lowerCase)
console.log(res2)
function upperCase(element)
{
    return element.toUpperCase()
}
function lowerCase(element)
{
    return element.toLowerCase()
}