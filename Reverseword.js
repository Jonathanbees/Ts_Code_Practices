function reverseWords(str) {
    let words = []
    words = str.split(" ")
    let reversewords = []
    console.log(words)
    
      var transformedWords = words.map(function (word, index) {
          reversewords.push(word.split("").reverse().join(""))
      });
      console.log(words)
      console.log(reversewords.join(" "))
      
  
    return reversewords.join(" ");
  }
  reverseWords("This is an example!")