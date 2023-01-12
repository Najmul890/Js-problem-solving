//find lear years

//method-1:
function isLeapYear(year){
    if((year%4===0 && year%100!==0) || (year%100===0 && year%400===0)){
        return year;
    }else{
        return false;
    }
}
function getLeapYears(startYear, endYear){
    let years=[];
    let leapYears=[];
    for(let i=startYear; i<=endYear; i++){
        years.push(i);
    }
    years.forEach((year)=>{
        if(isLeapYear(year)){
            leapYears.push(year);
        }
    })
    if(leapYears.length===0){
        return "no leap year exist in this range";
    }
    return leapYears;
}
console.log(getLeapYears(2000,2012));

//method-2:
function getLeapYears2(startYear, endYear){
    let leapYears=[];
    for(let i=startYear; i<=endYear; i++){
        if((i%4===0 && i%100 !==0) || (i%100===0 && i%400===0)){
             leapYears.push(i);
        }
    }
    if(leapYears.length===0){
        return "no leap year exist in this range";
    }
    return leapYears;
}
console.log(getLeapYears2(2000,2012));

