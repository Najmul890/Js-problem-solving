//count similar word from a text
function countWord(text, word) {
    let arr = text.toLowerCase().split(" ");
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === word) {
        count++;
      }
    }
    return count;
  }
  console.log(countWord("we go to airport to go abroad", "go"));
  console.log(countWord("we go to airport to go abroad", "to"));
  console.log(countWord("we go to airport to go abroad", "abroad"));
  
  //count similar word via filter method
  function countWord2(text, word) {
    let arr = text.toLowerCase().split(" ");
    return arr.filter((newWord) => newWord === word).length;
  }
  console.log(countWord2("we go to airport to go abroad", "to"));
  
  //via reduce method
  function count(text, word) {
    return text
      .toLowerCase()
      .split(" ")
      .reduce(function (totalCount, currentWord) {
          console.log(totalCount,currentWord)
        if (!totalCount[word]) {
          totalCount[word] = 0;
        }
        if (currentWord === word) {
          totalCount[word]++;
        }
        return totalCount;
      }, {})[word];
  }
  console.log(count("we go to airport to go abroad", "to"));
  