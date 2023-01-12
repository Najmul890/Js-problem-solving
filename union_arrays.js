//union 2 arrays

//method-1:
function unionArrays(arr1, arr2){
    const finalArr=arr1.concat(arr2);
    const sortedArr= finalArr.sort((a,b)=>a-b);
    const uniqueArr=[];
    for(let i=0; i<sortedArr.length; i++){
      for(let j=i+1; j<sortedArr.length+1; j++){
        if(sortedArr[i]!==sortedArr[j] && uniqueArr.indexOf(sortedArr[i])==-1){
          uniqueArr.push(sortedArr[i]);
        }
      }
    }
    return uniqueArr;
  }
  // console.log(unionArrays([1,3,4],[2,3,1,5]));
  
  //method-2:
  function unionArrays2(){
    const finalArr= arguments[0].concat(arguments[1]);
    const uniqueArr=[];
    finalArr.forEach((value,index,arr)=>{
       if(!uniqueArr.includes(value)){
        uniqueArr.push(value);
       }
    })
    const result= uniqueArr.sort((a,b)=>a-b);
    return result;
  }
  // console.log(unionArrays2([2,1,4,2],[3,1,5,7,3,6]));
  
  //method-3:
  function unionArrays3(arr1,arr2){
    const finalArr=arr1.concat(arr2);
    const result= finalArr.filter((value,index,arr)=>finalArr.indexOf(value)===index);
    return result;
  }
  // console.log(unionArrays3(['cat','bee','cat','dog'],['lion','camel','lion','camel']));
  
  //method-4:
  function unionArrays4(){
    const uniqueArr= [...new Set(arguments[0].concat(arguments[1]))];
    return uniqueArr.sort((a,b)=>a-b);
  }
  // console.log(unionArrays4([2,1,3,2,3],[1,3,6,7]));

  //union arrays
  function unionArrays5(...arrays){
    const finalArr= arrays.reduce((a,b)=>a.concat(b));
    const obj={};
    for(let value of finalArr){
      obj[value]=value; //set unique value in obj
    }
    // console.log(obj)
    return Object.values(obj);
    
  }
console.log(unionArrays5([1,1,5],[2,3],[3,4]));