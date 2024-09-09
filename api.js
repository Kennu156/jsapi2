const randomJokeHTMLElement = document.querySelector('.random-jokes');
const selectHTMLElement = document.querySelector('#categories');
const buttonElement = document.querySelector('.generate')
const searchElement = document.querySelector('#search')
const resultElement = document.querySelector('.result-count')

const base_url = "https://api.chucknorris.io/jokes"
let selected = null;

const fetchCategory = async () => {

    try {
        const response = await fetch(`${base_url}/categories`)
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error('error')    
    }
};

const fetchRandomJokes = async () => {

    try {
        const response = await fetch(`${base_url}/random`)
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error('error')    
    }
};

const displayRandomJoke = async () => {
    const joke = await fetchRandomJokes()
    console.log(randomJokeHTMLElement)
    randomJokeHTMLElement.textContent = joke.value
};

const fillSelectWithOptions = async () => {
    const categories = await fetchCategory()

    if(!categories) return

    categories.forEach((category) => {
        const option = new Option(category, category)
        selectHTMLElement.append(option)
    })
};

selectHTMLElement.addEventListener('change', async (event) => {
    selected = event.currentTarget.value
    const response = await fetchRandomJokes(selected)
    randomJokeHTMLElement.textContent = response.value
});

buttonElement.addEventListener("click", async () => {
    const response = await fetchRandomJokes(selected)
    randomJokeHTMLElement.textContent = response.value
});

searchElement.addEventListener('input', (event) => {
    if (event.currentTarget.value < 3) return
    
    const respone = searchQuery(event.currentTarget.value)
    
});



const searchQuery = async (query) => {
    const url = (`${base_url}/search?query=${query}`)

    const response = await fetch(url)
    const data = await response.json()

    return data
    
}


displayRandomJoke()

fetchCategory()

fillSelectWithOptions()
