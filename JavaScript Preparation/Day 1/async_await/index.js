function walkDog()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const check = true
            if(check)
            {
                resolve("Walk dog task completed")
            }
            else
            {
                reject("Walk dog task not completed")
            }
        }, 2000)
    })
}

function cleanKitchen()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const check = true
            if(check)
            {
                resolve("Clean kitchen task completed")
            }
            else
            {
                reject("Clean kitchen task not completed")
            }
        }, 2500)
    })
}

function takeTrash()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const check = true
            if(check)
            {
                resolve("Take trash task completed")
            }
            else
            {
                reject("Take trash task not completed")
            }
        }, 3000)
    })
}

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return takeTrash()})
//          .then(value => {console.log(value); console.log("Tasks completed")})
//          .catch(error => console.log(error))

async function doTasks()
{
    const task1 = await walkDog()
    console.log(task1)

    const task2 = await cleanKitchen()
    console.log(task2)

    const task3 = await takeTrash()
    console.log(task3)

    console.log("Completed all tasks")
}

doTasks()