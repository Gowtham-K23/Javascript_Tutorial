function sayHello()
{
    console.log("Hello")
}
setTimeout(sayHello, 3000)

const timeID = setTimeout(() => window.alert("Hello"), 3000)
clearTimeout(timeID)