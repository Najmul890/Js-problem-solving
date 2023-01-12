//find duplicate element
function find_duplicate(arr) {
    const duplicate = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && duplicate.indexOf(arr[i]) === -1) {
          duplicate.push(arr[i]);
        }
      }
    }
    return duplicate;
  }
  // console.log(find_duplicate([-1, -1, 1, 2,2, 3, 2, 3, 3]));
  
  
  
  //method-2: via filter method
  function find_duplicate2(arr){
      const result= arr.filter((value, index, array)=> array.indexOf(value)!== index);
      return result;
  }
  // console.log(find_duplicate2([-1, -1, 1, 2,2, 3, 2, 3, 3]));
  
  //method-3: via set
  const findDuplicates = arr => [...new Set(arr.filter(v => arr.indexOf(v) !== arr.lastIndexOf(v)))];
  
  // console.log(findDuplicates([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));
  
  
  //check if there is no duplicate
  function hasNoDuplicates(arr) {
    return arr.every(function (val) {
      return arr.indexOf(val) === arr.lastIndexOf(val);
    });
  }
  
  // console.log(hasNoDuplicates([1,2,3,4])); // true
  // console.log(hasNoDuplicates([1,2,1,3,4])); //false
  
  
  
  