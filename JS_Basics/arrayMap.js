const fruits = ['apple', 'oranges' , '', 'mango', '' , 'lemon'];

const transformedArray = fruits.map((fruit) => {
    if (fruit === '') {
        return 'empty string';
    } else {
        return fruit;
    }
});
console.log(transformedArray);