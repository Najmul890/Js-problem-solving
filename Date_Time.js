//find day , date and time
const dateObject= new Date();

//find day
const days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
const day= dateObject.getDay();
const today= days[day];
console.log(`Today is ${today}`);

//find date
let dd= dateObject.getDate();
let mm= dateObject.getMonth();
const yyyy= dateObject.getFullYear();
const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
const monthsName=months[mm];

if(dd<10){
    dd="0"+dd;
}
if(mm<10){
    mm="0"+mm;
}
console.log(`The date is ${dd}/${mm+1}/${yyyy}`);
console.log(`The date is ${dd} ${monthsName} ${yyyy}`);

//find time
let hours= dateObject.getHours();
let minutes= dateObject.getMinutes();
let seconds= dateObject.getSeconds();
let format= (hours>=12)?"PM":"AM";

hours=(hours>=12)?hours-12:hours;
if(hours<10){
    hours="0"+hours;
}
if(minutes<10){
    minutes="0"+minutes;
}
if(seconds<10){
    seconds="0"+seconds;
}

const time= `${hours}:${minutes}:${seconds}`;
console.log(`The time is ${time}`);