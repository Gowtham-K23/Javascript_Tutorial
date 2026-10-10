const f1 = "A"
const f2 = "B"
const f3 = "C"

open(f1, f2, f3)

function open(...foods)
{
    console.log(foods)
    console.log(...foods)
}

const total = sum(1, 2, 3, 4, 5)
console.log(total)

function sum(...numbers)
{
    let res = 0
    for(let num of numbers)
    {
        res += num
    }
    return res
}

const full = combine("A", "B", "C")
console.log(full)
function combine(...names)
{
    return names.join(" ")
}