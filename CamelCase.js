function toCamelCase(str) {
    let otherarray = []
    if (str === "") {
        return "";
    }
    const words = str.split(/[_-]/g);
    console.log(words)
    var transformedWords = words.map(function (word, index) {
        if (index === 0) {
            return word;
        }
        else {
            // Si no es la primera palabra, capitalizamos la primera letra
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
    });
    var camelCaseString = transformedWords.join("");
    console.log(camelCaseString);
    return camelCaseString;
}
toCamelCase("the-Cat_Was-Hungry");
