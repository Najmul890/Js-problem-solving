//sum of two array's

//method-1:via while loop
function sum_of_two_arrays(arr1, arr2) {
    let result = [];
    let count = 0;
    if (arr1.length === 0) {
      return "arr1 is empty";
    }
    if (arr2.length === 0) {
      return "arr2 is empty";
    }
    while (count < arr1.length && count < arr2.length) {
      result.push(arr1[count] + arr2[count]);
      count++;
    }
    if (arr1.length === count) {
      for (let i = count; i < arr2.length; i++) {
        result.push(arr2[count]);
      }
    } else {
      for (let i = count; i < arr1.length; i++) {
        result.push(arr1[count]);
      }
    }
    return result;
  }
  // console.log(sum_of_two_arrays([-1,2],[-1,2,3]));
  
  //method-2: via for loop
  function sum_of_two_arrays2(arr1, arr2) {
    let result = [];
    let length;
    length = arr1.length > arr2.length ? arr1.length : arr2.length;
    for (let i = 0; i < length; i++) {
      if (arr1[i] == undefined) {
        arr1[i] = 0;
      }
      if (arr2[i] == undefined) {
        arr2[i] = 0;
      }
      result.push(arr1[i] + arr2[i]);
    }
    return result;
  }
  // console.log(sum_of_two_arrays2([1,2],[3,4,5]));
  
  //method-3: via map
  function sum_of_two_arrays3(arr1, arr2) {
    const result =
      arr1.length > arr2.length
        ? arr1.map((el, i) => el + (arr2[i] || 0))
        : arr2.map((el, i) => el + (arr1[i] || 0));
    return result;
  }
  // console.log(sum_of_two_arrays3([1, 2], [2, 3]));
  
  //method-4: via forEach
  function sum_of_two_arrays4(arr1, arr2) {
    const result = [];
    if (arr1.length > arr2.length) {
      arr1.forEach((el, i) => {
        result[i] = el + (arr2[i] || 0);
      });
    } else {
      arr2.forEach((el, i) => {
        result[i] = el + (arr1[i] || 0);
      });
    }
    return result;
  }
  // console.log(sum_of_two_arrays4([1,2],[3,4,5]));
  
  //method-5:
  function sum_of_two_arrays5(ar1, ar2) {
    let length = Math.max(ar1.length, ar2.length);
    const sum = [];
    for (let i = 0; i < length; i++) {
      sum.push((ar1[i] || 0) + (ar2[i] || 0));
    }
    return sum;
  }
  console.log(sum_of_two_arrays5([1,2,3],[3,4,3,4]));
  
  //sum of array's
  function sum_of_arrays(...arrays) {
    const result = [];
    const maxArrLength = Math.max(...arrays.map((arr) => arr.length));
    for (let i = 0; i < maxArrLength; i++) {
      let sum = 0;
      for (let j = 0; j < arrays.length; j++) {
        sum += parseInt(arrays[j][i]) || 0;
      }
      result.push(sum);
    }
    return result;
  }
  
  // console.log(sum_of_arrays([1,2,"x"],[null, 2,3],[4,5,6,8]));
  