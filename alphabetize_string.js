//alphabetize string
function alphabetizeString(str){
    return str.toLowerCase().split("").sort().join("");
}
console.log(alphabetizeString("Dhaka"));

//alphabetize via replace method
function alphabetizeString2(str){
    return str.toLowerCase().replace(" ","").split("").sort().join("");
}
console.log(alphabetizeString2("Bangladesh"));
