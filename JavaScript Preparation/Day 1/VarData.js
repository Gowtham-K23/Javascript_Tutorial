var name = "Gowtham"
console.log(name);

// Function scope
function test()
{
    var x = 10
    console.log(x)
}
test();
// Reference error
// If declared in function, then only used in functions
// console.log(x)

// if(true)
// {
//     var y = 20
// }
// console.log(y)
// No block scope also

var a = 10
var a = 20
console.log(a)


console.log(x)
var x = 10

function test()
{
    var x
    console.log(x)
    x = 20
}