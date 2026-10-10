// function walkDog(callback)
// {
//     setTimeout(() => {
//         console.log("You walk the dog")
//         callback()
//     }, 1500)
// }

// function cleanKitchen(callback)
// {
//     setTimeout(() => {
//         console.log("You clean the kitchen")
//         callback()
//     }, 2500)
// }

// function takeOutTrash(callback)
// {
//     setTimeout(() => {
//         console.log("You take out of the trash")
//         callback()
//     }, 500)
// }

// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => console.log("You completed the tasks"))
//     })
// })

function walkDog()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You walk the dog")
        }, 2500)
    })
}

function cleanKitchen()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You clean the kitchen")
        }, 1500)
    })
}

function takeTrash()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You take the trash out")
        }, 500)
    })
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeTrash()})
         .then(value => {console.log(value); console.log("Tasks completed")})


function task1()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const check = true
            if(check)
            {
                resolve("Task 1 completed")
            }
            else
            {
                reject("Task 1 not completed")
            }
        }, 5000)
    })
}

function task2()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const check = false
            if(check)
            {
                resolve("Task 2 completed")
            }
            else
            {
                reject("Task 2 not completed")
            }
        }, 5500)
    })
}

function task3()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const check = true
            if(check)
            {
                resolve("Task 3 completed")
            }
            else
            {
                reject("Task 3 not completed")
            }
        }, 6000)
    })
}

task1().then(value => {console.log(value); return task2()})
       .then(value => {console.log(value); return task3()})
       .then(value => {console.log(value); console.log("Tasks completed")})
       .catch(error => console.error(error))