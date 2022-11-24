//hide email addresses to protect from unauthorized user
function hideEmail(email){
    let splitEmail, firstPart, lastPart, avg, stars, hideEmail;
    splitEmail = email.trim().split("@");
    firstPart = splitEmail[0];
    lastPart= splitEmail[1];
    avg= Math.floor(firstPart.length/2);
    stars= "*".repeat(firstPart.length-avg);
    hiddenEmail= firstPart.slice(0,avg)+stars+"@"+lastPart;
    
    return hiddenEmail;
}
console.log(hideEmail("abc1234@gmail.com"));