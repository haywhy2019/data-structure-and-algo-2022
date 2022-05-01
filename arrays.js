
let numbers = [1,2,3,4,5,6,7,8]

function removeFirstArrayElement (arr, value) {
    for(let i = arr.length; i > 0 ; i --){
        // console.log(i, arr[i], arr[i - 1], 'first')
        arr[i] = arr[i - 1]
         // console.log(i, arr[i], arr[i - 1], 'second')
    }
    arr[0] = value
    return arr
}

function removeLastArrayElement (arr){
    for(let i = 0; i < arr.length; i ++) {
        console.log(arr[i], arr[i + 1])
        arr[i] = arr[i + 1]
    
    }
    return arr
}


// console.log(test, "test")
// console.log(removeLastArrayElement(numbers))

// Two dimentional arrays

let twoD = []
let rows = 5;
for(let i = 0; i < rows; i ++) {
    twoD[i] = []
}
console.log(twoD)

function arrayMatrix (numRows, numCols, initial){
    let arr = []
    for(let i = 0; i < numRows; i++){
        let column = []
        for(let j = 0; j < numCols; j ++) {
            column[j] = initial
        }
        arr[i] = column
    }
    return arr
}
console.log(arrayMatrix(4,5,"numCols"), "matrix helper")

console.log("working")

var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
var total = 0;
var average = 0.0;

for(let row = 0; row < grades.length; row ++) {
    for(let col= 0;  col < grades[row].length; col++) {
        total += grades[row][col]       
    }    
}
