function longestString(array) {
    let longest = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i].length > longest.length) {
        longest = array[i];
      }
    }
    return longest;
  }

  const strings = ["My", "name", "is", "Om", "Mooley"];
  const longString = longestString(strings);
  
  console.log(longString); 