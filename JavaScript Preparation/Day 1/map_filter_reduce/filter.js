let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let evenNum = numbers.filter(checkEven)
let oddNum = numbers.filter(checkOdd)

function checkEven(element)
{
    return element % 2 === 0
}

function checkOdd(element)
{
    return element % 2 !== 0
}

console.log(evenNum)
console.log(oddNum)