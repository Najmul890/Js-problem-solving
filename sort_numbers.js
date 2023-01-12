//sort numbers of array

//method-1: via nested for loop
function sortArr1(arr){
    for(let i=1; i<arr.length; i++){
      for(let j=0; j<i; j++){
        if(arr[i]<arr[j]){
           let x=arr[i];
           arr[i]=arr[j];
           arr[j]=x;
        }
      }
    }
    return arr;
  }
  console.log(sortArr1([2,1,-2,4,5]));
  
  //via nested for loop 2
  function sortArr2(arr) {
    let sortedArr = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          let x = arr[i];
          arr[i] = arr[j];
          arr[j] = x;
        }
      }
      sortedArr.push(arr[i]);
    }
    return sortedArr;
  }
  console.log(sortArr2([2,1,-2,4,5]));
  
  //via sort method
  function sortArr3(arr){
    return arr.sort(function(a,b){
      return a-b;
    })
  }
  console.log(sortArr3([2,1,-2,4,5]));
  
  
  