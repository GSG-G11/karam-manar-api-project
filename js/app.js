// Logic Function

let generatedAdvice;
const generatAdvice = (data) =>{
    generatedAdvice = data.slip.advice;
}

let generatedStiker;
const generatSticker = ({data}) =>{
    generatedStiker = data.images.original.url;
  
let generatedJoke;
const generatJoke = (data) => {
    generatedJoke = data.attachments[0].fallback
}