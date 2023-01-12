//find most frequent item of an array
//method-1: via nested for loop
function mostFrequentItem(arr){
    let mf=1;
    let m=0;
    let item;
    for(let i=0; i<arr.length; i++){
      for(let j=i; j<arr.length; j++){
        if(arr[i]==arr[j]){
          m++;
          if(mf<m){
            mf=m;
            item= arr[i];
          }
        }
      }
      m=0;
    }
    if(item===undefined){
      return "there is no item more than one in "+arr;
    }
    return `${item} is the most frequent for ${mf} times`;
  }
  console.log(mostFrequentItem([1,2,3,4,3,5]));
  console.log(mostFrequentItem(Array.from(("Bangladesh is a riverine country").toLocaleLowerCase().split(" ").join(""))));
  console.log(mostFrequentItem(["apple","banana","apple"]));
  
  //method-2: via single for loop and sort
  function mostFrequentItem2(arr){
    arr.sort()
    let currCount=1;
    let maxCount=1;
    let res= arr[0];
    for(let i=0; i<arr.length; i++){
      if(arr[i]==arr[i+1]){
        currCount++;
      }else{
        currCount=1;
      }
      if(maxCount<currCount){
        maxCount=currCount;
        res=arr[i+1];
      }
    }
    return `${res} is the most frequent for ${maxCount} times`;
  }
  console.log(mostFrequentItem2([1,2,3,4,3,5]));
  console.log(mostFrequentItem2(Array.from(("Bangladesh is a riverine country").toLocaleLowerCase().split(" ").join(""))));
  console.log(mostFrequentItem2(["apple","banana","apple"]));
  
  
  //method-3: via for loop and object
  function mostFrequentItem3(arr){
      let counts={};
      let compare=0;
      let mostFrequent;
      for(let i=0; i<arr.length; i++){
        let element=arr[i];
        if(counts[element]=== undefined){
          counts[element]=1;
        }else{
          counts[element]++;
        }
        if(compare<counts[element]){
          compare= counts[element];
          mostFrequent= element;
        }
      }
      return `${mostFrequent}: ${counts[mostFrequent]} times`;
  }
  console.log(mostFrequentItem3([1,2,3,4,3,5]));
  console.log(mostFrequentItem3(Array.from(("Bangladesh is a riverine country").toLocaleLowerCase().split(" ").join(""))));
  console.log(mostFrequentItem3(["apple","banana","apple"]));
  
  //method-4: via reduce method
  function mostFrequentItem4(arr){
    let compare="";
    let mostFrequent="";
    arr.reduce((acc, value)=>{
      if(value in acc){
        acc[value]++;
      }else{
        acc[value]=1;
      }
      if(compare<acc[value]){
        compare= acc[value];
        mostFrequent= value;
      }
      return acc;
    }, {})
    console.log(mostFrequent);
  }
  let data = ["cat", "dog", "parrot", "dog", "cat", "elephant","elephant","elephant","elephant", "lion", "cat", "elephant", "lion", "lion", "lion", "parrot"];
  mostFrequentItem4(data);