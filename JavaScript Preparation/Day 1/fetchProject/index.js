// fetch - Function used for making HTTP request to fetch resources
//         (JSON style images, data, files)
//         simplifies async data fetching in Javascript and used for interacting with APIs to retrieve
//         and send data asynchronously over the web
//         fetch(URL, {options})

async function fetchData()
{
    try
    {
        const pokemonName = document
            .getElementById("pokemonName")
            .value
            .toLowerCase()

        if (!pokemonName) {
            throw new Error("Please enter a Pokemon name")
        }

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok)
        {
            throw new Error("Could not fetch resource")
        }

        const data = await response.json()

        const pokemonSprite = data.sprites.front_default
        const imgElement = document.getElementById("pokemonSprite")

        imgElement.src = pokemonSprite
        imgElement.style.display = "block"
    }
    catch(error)
    {
        console.error(error)
        alert(error.message)
    }
}