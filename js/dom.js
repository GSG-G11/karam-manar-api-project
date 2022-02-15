// fetch function 
function fetch(method, url, cb) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        cb(JSON.parse(xhr.responseText));
        console.log(JSON.parse(xhr.responseText))
      }
    };
    xhr.open(method, url);
    xhr.send();
}
const AdviceUrl = 'https://api.adviceslip.com/advice'

const displayAdviceFun = (data) =>{
    const advicePara = document.querySelector('#advicePara').textContent=data.slip.advice;
}

fetch('GET' ,AdviceUrl,displayAdviceFun)