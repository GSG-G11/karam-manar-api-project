// Variables
const advicePara = document.querySelector("#advice-para");
const jokePara = document.querySelector("#joke-para");


// Set HTML Content Function
const setValues = () => {
    advicePara.textContent = generatedAdvice;
    jokePara.textContent = generatedJoke;
}


// Fetch Functions
function fetch(method, url, cb, cbDOM) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            cb(JSON.parse(xhr.responseText));
            cbDOM();
        }
    };
    xhr.open(method, url);
    xhr.send();
}
const adviceUrl = 'https://api.adviceslip.com/advice';
fetch('GET' , adviceUrl, generatAdvice, setValues);

const jokeUrl = 'https://icanhazdadjoke.com/slack';
fetch('GET', jokeUrl, generatJoke, setValues)