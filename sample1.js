var a = 10
var b = 20
console.log(a+b)

{
    let a = 100
    console.log("let local scope: ",a)
}
console.log("var global scope: ",a)



var price = 10000
var product = "TV"
var tax = 500
console.log(product)
console.log(price + tax)

console.log(typeof(10))
console.log(typeof(3.5))
console.log(typeof("10"))
console.log(typeof(false))
console.log(typeof(null))


function hello()
{
    console.log("Hello world")
}
hello()


function add(a, b)
{
    console.log(a + b)
}
add(100, 200)

function area(a, b)
{
    console.log(a * b)
}
area(10, 20)


function name()
{
    return "Gowtham"
}

var a = name()
console.log(a)