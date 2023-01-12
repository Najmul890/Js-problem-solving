//add hyphen between two digits
function addHyphen(input){
    const strArr= input.split("");
    const numberArr= strArr.map(Number);
    const length= numberArr.length;
    let result="";
    for(let i=0; i<length; i++){
        if((numberArr[i+1]!==undefined)&&(numberArr[0]%2===0 && numberArr[i+1]%2===0)){
            result+=numberArr[i]+"-";
        }else{
            result+=numberArr[i];
        }
    }
    return result;
}
console.log(addHyphen("245156678889"));

//via splice method
function insertHyphen(str) {
    var strArr = str.split('');
    var numArr = strArr.map(Number);
      for(var i = 0; i < numArr.length; i++) {
        if(numArr[i-1]%2===0 &&  numArr[i]%2===0  ) {
          numArr.splice(i,0, '-');
        }
      }
    return numArr.join('');
  }
  console.log(insertHyphen('025468 '));


