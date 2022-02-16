// Variables
const advicePara = document.querySelector("#advice-para");
const sticker = document.querySelector('#stiker')
const jokePara = document.querySelector("#joke-para");
const iframe = document.querySelector("#iframe");
// const qutoPara = document.querySelector("#quto-para");

// Set HTML Content Function
const setValues = () => {
    advicePara.textContent = generatedAdvice;
    sticker.src = generatedStiker;
    jokePara.textContent = generatedJoke;
    // qutoPara.textContent = generatedquto;
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

//Joke API
const jokeUrl = 'https://icanhazdadjoke.com/slack';
fetch('GET', jokeUrl, generatJoke, setValues)

//quran API
// let ayah = Math.floor(Math.random() * 200) + 1;
// const ayahurl = `https://api.alquran.cloud/v1/ayah/${ayah}`
// fetch('GET', ayahurl, generatquto, setValues)

// Music Radomize 
let trackSource = [
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/150481926&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/538689630&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/787844842&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/814956535&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/316856748&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/542725563&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/863170468&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/466086564&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/181052013&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/258971084&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
];


// For Front 

let indexsrc = Math.floor(Math.random() * trackSource.length -1) + 1  
iframe.src = trackSource[indexsrc];

// Next Stip Function
const slides = document.querySelectorAll(".single-slide");
const nextBtns = document.querySelectorAll(".btn.next-btn");
const refreshBtn = document.querySelector(".btn.refresh");

let nextStep = (ele) => {
    slides.forEach(slide => {
        slide.classList.remove("active");
    })
    let nextSlide = ele.parentElement.parentElement.nextElementSibling;
    nextSlide.classList.add("active")
}

nextBtns.forEach(btn => {
    btn.addEventListener("click" , (e) => {
        nextStep(e.target);
    })
})


let refreshPage = () => {
    window.location.reload(true);
}

refreshBtn.addEventListener("click", refreshPage);

// Add Greeting Function
const greetingPara = document.querySelector("#greeting");

const currentTime = new Date().getHours();
let greetingText = "";

if (currentTime < 12) {
    greetingText = "Good Morning!"; 
} else if (currentTime < 18) {
    greetingText = "Good Afternoon!"; 
} else {
    greetingText = "Good Evening!"; 
}


greetingPara.textContent = greetingText;

