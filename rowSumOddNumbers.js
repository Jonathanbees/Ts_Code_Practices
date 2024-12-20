function rowSumOddNumbers(number) {
    index = ((2*number)-1)-1
    if (number === 1){
        return 1
    }
    if (number === 2){
        index = 2
    }
    let trasher = 0
    
    console.log("index=",index)
    let oddnumbers = []
    for (i = 0; i < 100000; i++)
        if (i%2 != 0){
            oddnumbers.push(i)
        }
    numbers = oddnumbers.slice(index, index+number)
    let total = numbers.reduce((a, b) => a + b, 0);
    
    console.log(oddnumbers)
    console.log(numbers)
    console.log(total)
    }
rowSumOddNumbers(5)

//True solution: return Math.pow(number, 3)