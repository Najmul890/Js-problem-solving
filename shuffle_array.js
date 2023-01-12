//shuffle an array
//method-1: via for loop
function shuffleArr1(arr){
    let rand, temp;
    for(let i=0; i<arr.length; i++){
        rand= Math.floor(Math.random()*(i+1));
        temp=arr[i];
        arr[i]=arr[rand];
        arr[rand]=temp;
    }
    return arr;
}
// console.log(shuffleArr1([1,2]));

//method-2: via reverse for loop
function shuffleArr2(arr){
    let rand, temp;
    for(let i=arr.length-1; i>0; i--){
        rand= Math.floor(Math.random()*(i+1));
        temp= arr[i];
        arr[i]= arr[rand];
        arr[rand]=temp;
    }
    return arr;
}
// console.log(shuffleArr2([1,2]));

//method-3: via while loop
function shuffleArr3(arr){
    let length= arr.length, rand, temp;
    while(length>0){
        rand= Math.floor(Math.random()*length);
        length--;
        temp=arr[length];
        arr[length]=arr[rand];
        arr[rand]=temp;
    }
    return arr;
}
// console.log(shuffleArr3([1,2,3]));

//method-4: via sort
function shuffleArr4(arr){
    arr.sort(()=>0.5- Math.random());
    return arr;
}
// console.log(shuffleArr4([1,2,3]));

//method-5: via for loop and splice method
function shuffleArr5(arr){
    let shuffledArray=[], randIndex=0, length=arr.length;
    for(let i=0; i<length; i++){
        randIndex= Math.floor(Math.random()*arr.length);
        const element=arr.splice(randIndex,1);
        shuffledArray.push(element[0]);
    }
    return shuffledArray;
}
// console.log(shuffleArr5([1,2,3,4]));

//method-6: via while loop and splice method
function shuffleArr6(arr){
    let shuffledArray=[], randIndex;
    while(arr.length>0){
        randIndex= Math.floor(Math.random()*arr.length);
        const element= arr.splice(randIndex,1);
        shuffledArray.push(element[0]);
    }
    return shuffledArray;
}
console.log(shuffleArr6(["go","went","gone"]));