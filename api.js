const randomJokeHTMLElement = document.querySelector('.random-jokes');
const selectHTMLElement = document.querySelector('#categories');

const base_url = "https://api.chucknorris.io/jokes"

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
    const selected = event.currentTarget.value
    await fetchRandomJokes(selected)
})


displayRandomJoke()

fetchCategory()

fillSelectWithOptions()