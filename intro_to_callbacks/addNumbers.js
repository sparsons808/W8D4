const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft === 0) {
        return completionCallback(sum);
    }
    if (numsLeft > 0, numsLeft--) {
        reader.question("Enter a number", function (num1) {
            const numToNum = parseInt(num1);
            console.log(sum += numToNum);
            reader.close();
        });
    }
    addNumbers(sum, numsLeft, completionCallback);
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));