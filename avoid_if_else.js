//find current day
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var dayName = days[new Date().getDay()];

// console.log(dayName);


//the solution of avoid more if else
const days = {
    1: "saturday",
    2: "sunday",
    3: "monday",
    4: "tuesday",
    5: "wednesday",
    6: "thursday",
    7: "friday",
  };
  
  function findDay(number) {
    return days[number];
  }
  console.log(findDay(1));
  console.log(findDay(7));
  