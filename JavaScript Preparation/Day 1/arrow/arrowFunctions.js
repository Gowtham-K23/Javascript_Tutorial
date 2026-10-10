function hello()
{
    console.log("Hello")
}
hello()

const hello1 = (name) => console.log("Hello " + name)
hello1("Gowtham")

setTimeout(() => console.log("Helllooo"), 3000)


const num = [1, 2, 3, 4, 5, 6]
const squares = num.map((element) => Math.pow(element, 2))
console.log(squares)
const cubes = num.map((element) => Math.pow(element, 3))
console.log(cubes)
const evenNum = num.filter((element) => element % 2 === 0)
console.log(evenNum)
const sum = num.reduce((acc, ele) => acc + ele)
console.log(sum)