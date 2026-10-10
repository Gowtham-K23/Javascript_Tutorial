function hello()
{
    console.log("Hello")
}
function goodbye()
{
    console.log("goodbye")
}

hello()
goodbye()

console.log()
console.log("Using callbacks")
// Using callbacks
hello1(goodbye1)

function hello1(callback)
{
    console.log("Hello")
    callback()
}

function goodbye1()
{
    console.log("goodbye")
}


// Using callbacks passing params also
function display(res)
{
    console.log("Result: " + res)
}

function sum(callback, x, y)
{
    let res = x + y
    callback(res)
}

sum(display, 10, 20)