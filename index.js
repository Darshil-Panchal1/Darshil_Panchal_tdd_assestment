function add(numbers) {
    if (!numbers) {
        return 0;
    }
    
    return numbers.split(',').reduce((total, num) => {
        return total + parseInt(num);
    }, 0);
}

module.exports = add;

console.log(add(""));   
console.log(add("1"));  
console.log(add("1,5"));
console.log(add("1,2,3,4,5"));
console.log(add("10,20,30,40,50"));
console.log(add("100,200,3000,400,555"));

