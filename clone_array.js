//clone array
const array=[1,2,3,4,5];

//via for loop
const length= array.length;
const copy=[];
for(let i=0; i<length; i++){
    const element= array[i];
    copy.push(element);
}

const copy1= array.slice(); //via slice
const copy2= array.slice(0); //via slice
const copy3= [...array]; //spread operator
const copy4= JSON.parse(JSON.stringify(array)); //via json parse ; the best way
const copy5= Array.from(array);
const copy6= array.map(el=>el);
const copy7= array.filter(el=>el);


console.log(copy);
console.log(copy1);
console.log(copy2);
console.log(copy3);
console.log(copy4);
console.log(copy5);
console.log(copy6);
console.log(copy7);