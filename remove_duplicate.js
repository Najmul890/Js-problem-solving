//remove duplicate from an array
//method-1: via nested for loop
function removeDuplicate(arr){
    const unique=[];
    for(let i=0; i<arr.length; i++){
      for(let j=i+1; j<arr.length+1; j++){
        if(arr[i]!==arr[j] && unique.indexOf(arr[i])==-1){
          unique.push(arr[i]);
        }
      }
    }
    return unique;
  }
  
  // console.log(removeDuplicate([1,3,4,5,2,3,2]));
  
  //method-2: via for loop and includes method
  function removeDuplicate2(arr){
    const uniqueArr=[];
    for(let i=0; i<arr.length; i++){
      if(!uniqueArr.includes(arr[i])){
        uniqueArr.push(arr[i]);
      }
    }
    return uniqueArr;
  }
  // console.log(removeDuplicate2([1,2,2,3,4,4,8]));
  
  //method-3: via forEach and includes method
  function removeDuplicate3(arr){
    const unique=[];
    arr.forEach((value)=>{
      if(!unique.includes(value)){
        unique.push(value);
      }
    })
    return unique;
  }
  // console.log(removeDuplicate3(["apple","banana","apple","orange"]));
  
  //method-4:via filter method
  function removeDuplicate4(arr){
    const unique=arr.filter((value, index)=>{
      return arr.indexOf(value)===index;
    })
    return unique;
  }
  // console.log(removeDuplicate4([1,2,2,3]));
  
  //method-5: via set method
  function removeDuplicate5(arr){
    const unique= [...new Set(arr)];
    return unique;
  }
  // console.log(removeDuplicate5([1,2,2,3]));