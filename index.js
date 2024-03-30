function add(numbers) {
    if (!numbers) {
        return 0;
    }
    
    let delimiter = ",";

    if(numbers.startsWith("//")) {
        const delimiterIndex = numbers.indexOf("\n");
        delimiter = numbers.substring(2, delimiterIndex);
        numbers = numbers.substring(delimiterIndex + 1);
    }

    const escapedDelimiter = delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    numbers = numbers.replace(new RegExp(escapedDelimiter, 'g'), ',').replace(/\n/g, ',');

    const nums = numbers.split(",").map(num => parseInt(num));

    const negativeNumbers = nums.filter(num => num < 0);
    if(negativeNumbers.length > 0) {
        const negativeNumbersString = negativeNumbers.join(",");
        throw new Error(`Negative numbers not allowed: ${negativeNumbersString}`);
    }

    return nums.reduce((total, num) => total + num, 0);
}

module.exports = add;


console.log(add(""));   
console.log(add(""));               
console.log(add("1"));               
console.log(add("1,5"));             
console.log(add("1,2,3,4,5"));      
console.log(add("10,20,30,40,50"));
try {
    console.log(add("1,-2,3,-4,5"));
} catch (error) {
    console.error(error.message);
}