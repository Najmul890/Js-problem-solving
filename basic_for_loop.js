//for loop
let j=1;
for(; j<=10; j++){
    //console.log(j)
}
//continue
for(let i=0; i<10; i++){
    //console.log(i);
    if(i>=5){
        continue;
    }
}

//break
for(let i=0; i<10; i++){
    //console.log(i);
    if(i>=5){
        continue;
    }
}

//all expression are optional for for loop
let a=1;
for(;;){
    if(a>10){
        break;
    }
    //console.log(a);
    a+=2;
    
}
//without loop body
// let sum=0;
// for(let i=0; i<=10; i++, sum+=i)
// console.log(sum);

// i-- loop start from end of the array
const arr=[1,2,3,4,5];
for(let i=arr.length-1; i>=0; i--){
    //console.log(arr[i]);
}

//infinity for loop
for (let i=0; i<10; i--){
    //console.log(i)
}

//nested for loop
function multiplyAll(arr){
    let res=1;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            res*=arr[i][j];
        }
    }
    return res;
}
console.log(multiplyAll([[1,2],[3,4]]))




