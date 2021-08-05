
const { read } = require('fs');
const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// function addNumbers(sum, numsLeft, completionCallback) {
//     if (numsLeft === 0) {
//         reader.close();
//         return completionCallback(sum);
//     }
//     if (numsLeft > 0, numsLeft--) {
//         reader.question("Enter a number", function (num1) {
//             const numToNum = parseInt(num1);

//             console.log(sum += numToNum);

//             addNumbers(sum, numsLeft, completionCallback);
        
//         });
//     }
    
// }

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


function askIfGreaterThan(el1, el2, callback) {
    
    const answer = reader.question(`Is ${el1} greater than ${el2}?`, resp => {

        if ( resp === 'yes') {
            callback(true);
        } else {
            callback(false);
        }
    });


};

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i < arr.length - 1) {
        askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
            if (isGreaterThan === true) {
                debugger
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                madeAnySwaps = true
                
            };
            i += 1
            innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop)
        });
    } else if (i === (arr.length - 1)) {
        return outerBubbleSortLoop(madeAnySwaps);
    
    };

    
};

function absurdBubbleSort(array, sortCompletionCallback) {
    function outerBubbleSortLoop (madeAnySwaps){
        if (madeAnySwaps == true) {
            innerBubbleSortLoop(array, 0, false, outerBubbleSortLoop)
        } else if (madeAnySwaps == false) {
            sortCompletionCallback(array);
        };
    };
    outerBubbleSortLoop(true);
};

absurdBubbleSort([3, 2, 1], function(arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
  });

// innerBubbleSortLoop([3, 1, 0], 0, false, function () {
//     console.log('in outer bubble sort');
// });