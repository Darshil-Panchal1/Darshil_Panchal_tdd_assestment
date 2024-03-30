function add(numbers) {
    if (!numbers) {
        return 0;
    }
    
    const nums = numbers.split(',');
    let total = 0;
    for (const num of nums) {
        total += parseInt(num);
    }
    
    return total;
}

module.exports = add;

console.log(add(""));   
console.log(add("1"));  
console.log(add("1,5"));
