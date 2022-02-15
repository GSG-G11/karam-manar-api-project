// Logic Function

let generatedAdvice;
const generatAdvice = (data) =>{
    generatedAdvice = data.slip.advice;
}

let generatedJoke;
const generatJoke = (data) => {
    generatedJoke = data.attachments[0].fallback
}