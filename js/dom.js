// Variables
const advicePara = document.querySelector("#advice-para");
const sticker = document.querySelector('#stiker')
const jokePara = document.querySelector("#joke-para");
const qutoPara = document.querySelector("#quto-para");


// Set HTML Content Function
const setValues = () => {
    advicePara.textContent = generatedAdvice;
    sticker.src = generatedStiker;
    jokePara.textContent = generatedJoke;
    qutoPara.textContent = generatedquto;
}


// Fetch Functions
function fetch(method, url, cb, cbDOM) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            cb(JSON.parse(xhr.responseText));
            cbDOM();
            console.log(JSON.parse(xhr.responseText))
        }
    };
    xhr.open(method, url);
    xhr.send();
}

//Advice API
const adviceUrl = 'https://api.adviceslip.com/advice';
fetch('GET' , adviceUrl, generatAdvice, setValues);

//Sticker API
const StikarUrl = 'https://api.giphy.com/v1/gifs/random?api_key=QLFI5hPIKpJwq4lwVQtWjQ1o335XSrPJ&tag=joke&rating=g'
fetch('GET' ,StikarUrl , generatSticker ,setValues)

const jokeUrl = 'https://icanhazdadjoke.com/slack';
fetch('GET', jokeUrl, generatJoke, setValues)


let ayah = Math.floor(Math.random() * 200) + 1;

const ayahurl = `https://api.alquran.cloud/v1/ayah/${ayah}`
fetch('GET', ayahurl, generatquto, setValues)
