//capitalize first letter of a string
function capFLetter(text){
    return text.charAt(0).toUpperCase()+text.slice(1);
}
console.log(capFLetter("how are you?"));

//capitalize all words for a sentence
function capAllWords(text){
    let splitText= text.toLowerCase().trim().split(" ");
    for(let i=0; i<splitText.length; i++){
        splitText[i]=splitText[i].charAt(0).toUpperCase()+splitText[i].slice(1);
    }
    return splitText.join(" ");
}
console.log(capAllWords("dhaka is the capital of bangladesh"));

//capitalize the first letter of all words and push in an array
function capFLetterForWords(text){
    let splitText= text.toLowerCase().trim().split(" ");
    let capArray= [];
    for(let i=0; i<splitText.length; i++){
        const capWord=splitText[i].charAt(0).toUpperCase()+splitText[i].slice(1);
        capArray.push(capWord);
    }
    return capArray.join(" ");
}
console.log(capFLetterForWords("go to school."));

//capitalize all sentence of a text
function capitalizeAllSentence(text){
    let splitText=text.toLowerCase().trim().split(".");
    for(let i=0; i<splitText.length; i++){
        splitText[i]=splitText[i].trim().charAt(0).toUpperCase()+splitText[i].trim().slice(1);
    }
    return splitText.join(". ")
}
console.log(capitalizeAllSentence("the cow is a domestic animal. it is very gentle. it leaves on grass."));