function add(numbers) {
    if (!numbers) {
        return 0;
    }
    
    numbers = numbers.replace(/\n/g, ',');

    return numbers.split(',').reduce((total, num) => {
        return total + parseInt(num);
    }, 0);
}

module.exports = add;

console.log(add(""));   
console.log(add("1"));
console.log(add("1\n5"));                
console.log(add("1,2\n3,4\n5"));       
console.log(add("10\n20,30\n40\n50"));
console.log(add("1, \n"));
console.log(add("1,\n"));



