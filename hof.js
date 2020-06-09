const numbers = [1, 2, 3, 4, 5, 6]

function addNumbers(n) {
    return function(arr) {
        return arr.map(i => i += n)
    }
}
const addOne = addNumbers(1)
const addFive = addNumbers(5)

console.log(addOne(numbers));
console.log(addFive(numbers));
