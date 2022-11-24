//convert a full name into abbrev_name for last name
function convertName(name){
    let splitNames= name.trim().split(" ");
    if(splitNames.length>1){
        return splitNames[0]+" "+splitNames[1].charAt(0)+".";
    }
    return splitNames[0];
}
console.log(convertName("Najmul Hossain"));

//convert a full name into abbrev_name for first name
function abbrevNameForFirstName(name){
    let splitNames=name.trim().split(" ");
    if(splitNames.length>1){
        return splitNames[0].charAt(0)+"."+" "+splitNames[1];
    }
    return splitNames[0];
}

console.log(abbrevNameForFirstName("Ahsan Chowdhury"));
