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

    const nums = numbers.split(',');
    let total = 0;
    for (const num of nums) {
        if (num !== '') {
            total += parseInt(num);
        }
    }

    return total;
}

module.exports = add;


console.log(add(""));   
console.log(add("1"));
console.log(add("//;\n1;;2"));           
console.log(add("//|\n1|2|3"));          
console.log(add("//+\n1+2+3+4+5"));   
console.log(add("//@\n10@20@30@40@50"));