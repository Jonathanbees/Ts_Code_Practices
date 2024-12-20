function toCamelCase(str: string): string {
    if (str === "") {
      return ""
    }
    let words: string[] = []
    if (str.includes("_")){
      words = str.split("_");
    }
    if (str.includes("-")){
      words = str.split("-");
    }
    const replacevalue = words.map((word,index) => {
      if (word.includes("_")){
        return word.slice(1)
      }
    });
  
    const transformedWords = words.map((word, index) => {
      if (index === 0) {
        return word;
      } else {
        // Si no es la primera palabra, capitalizamos la primera letra
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    });
    
    const camelCaseString = transformedWords.join("");
    console.log(camelCaseString);
    return camelCaseString;
  }

toCamelCase("the-Cat_Was-Hungry")
