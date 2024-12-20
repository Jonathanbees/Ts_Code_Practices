export function reverseWords(str:string):string {
    let words: string[] = []
    words = str.split(" ")
    let reversewords:string[] = []
      const transformedWords = words.map(function (word, index) {
          reversewords.push(word.split("").reverse().join(""))
      });
    return reversewords.join(" ");
  }
  reverseWords("This is an example!")