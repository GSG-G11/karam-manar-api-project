// Variables
const advicePara = document.querySelector("#advice-para");
const sticker = document.querySelector('#stiker')

// Set HTML Content Function
const setValues = () => {
    advicePara.textContent = generatedAdvice;
    sticker.src = generatedStiker;
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

//Advice API
const adviceUrl = 'https://api.adviceslip.com/advice';
fetch('GET' , adviceUrl, generatAdvice, setValues);

//Sticker API
const StikarUrl = 'https://api.giphy.com/v1/gifs/random?api_key=QLFI5hPIKpJwq4lwVQtWjQ1o335XSrPJ&tag=joke&rating=g'
fetch('GET' ,StikarUrl , generatSticker ,setValues)




  
  