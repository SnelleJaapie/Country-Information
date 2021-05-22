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
let rawinput = inputText.value

searchButton.addEventListener("click", () => {
    console.log(rawinput)
    console.log("Hi")
    async function getCountry(e) {

        // Het blijkt dus dat ik gewoon .value had moeten typen na de input text
        const response = await axios.get(`https://restcountries.eu/rest/v2/name/${inputText.value}`);
        const countryINFO = document.getElementById("countryInformation")
        const countryDiscription = document.getElementById("countryDiscription")

        const createImgTag = document.createElement("img")
        const createParagraphTag = document.createElement("p")
        const createParagraphTag2 = document.createElement("p")
        const createParagraphTag3 = document.createElement("p")
        console.log(response)

        createParagraphTag.textContent = `${response.data[0].name} is situated in ${response.data[0].subregion} . It has about:  ${response.data[0].population}  people"`;
        countryDiscription.appendChild(createParagraphTag);

        createParagraphTag2.textContent = `The Capital is ${response.data[0].capital} and you can pay with ${response.data[0].currencies[0].name}`;
        countryDiscription.appendChild(createParagraphTag2)

        createParagraphTag3.textContent = `They speak ${response.data[0].languages[0].name}. `
        countryDiscription.appendChild(createParagraphTag3)

        createImgTag.src = response.data[0].flag
        countryINFO.appendChild(createImgTag)


    }
    getCountry()
})


// commit line



// https://restcountries.eu/data/bel.svg


// to make:
// Flag + name
//