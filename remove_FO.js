//remove first occurrence from a string
function removeFO(text, word){
    let index=text.indexOf(word);
    if(index===-1){
        return -1;
    }
    return text.slice(0,index)+text.slice(index+word.length);
}
console.log(removeFO("He goes to school to study","to"));

function removeFO2(text,word){
    return text.replace(word+" ","")//removes the space too
}
console.log(removeFO2("He goes to school to study","to"));