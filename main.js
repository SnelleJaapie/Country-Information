// const buttonElementJS = document.getElementById("requestBelgiumButton")
//
//
// async function deAsyncFunctie() {
//     try {
//         const response = await axios.get('https://restcountries.eu/rest/v2/name/{name}?fullText=true');
//         console.log(response);
//     } catch (error) {
//         console.error(error);
//     }
//
//     // const binnenhalen = await axios.get("https://restcountries.eu/rest/v2/name/{name}?fullText=true")
//     // console.log(binnenhalen)
//
// }
// buttonElementJS.addEventListener("click", deAsyncFunctie())
//
// deAsyncFunctie()

console.log(axios)

const searchButton = document.getElementById("requestCountry")
const inputText = document.getElementById("inputArea")
const rawinput = inputText.value

searchButton.addEventListener("click", () => {
    console.log(rawinput)
    console.log("Hi")
    async function getCountry(e) {

        const response = await axios.get("https://restcountries.eu/rest/v2/name/" + inputText.value);
        const countryINFO = document.getElementById("countryInformation")
        const population = document.getElementById("population")

        const createImgTag = document.createElement("img")
        const createParagraphTag = document.createElement("p")
        console.log(response)
        console.log(response.data[0].population)

        createParagraphTag.textContent = "Italy has about: " + response.data[0].population + " residents";
        createParagraphTag.textContent = "The native name of italy is: " + response.data[0].nativeName;
        population.appendChild(createParagraphTag)

        createImgTag.src = response.data[0].flag
        countryINFO.appendChild(createImgTag)


    }
    getCountry()
})
// commit line



// https://restcountries.eu/data/bel.svg