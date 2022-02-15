// Variables
const advicePara = document.querySelector("#advice-para");


// Set HTML Content Function
const setValues = () => {
    advicePara.textContent = generatedAdvice;
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
fetch('GET' , adviceUrl, displayAdviceFun, setValues);