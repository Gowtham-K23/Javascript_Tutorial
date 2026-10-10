function outer()
{
    let msg = "Hello"
    function inner()
    {
        console.log(msg)
    }
    inner()
}
outer()


const counter = createCounter()

function createCounter()
{
    let count = 0
    function increment()
    {
        count++
        console.log(`Count increased to ${count}`)
    }
    return {increment}
}

counter.increment()
counter.increment()