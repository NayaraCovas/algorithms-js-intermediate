/* Largest Number in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  // You can do this!
  return arr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//Returns [5,27,39,1001] */


//Function array
//First for loop => every array
//Second for loop => check element array
//Result => largest num


function largestOfFour(arr) {
    let arrayLargerstNumber = [0,0,0,0]
    for(let i=0; i<arr.length; i++){
        for(let j=0; j< arr[i].length;j++){
            if(arr[i][j] > arrayLargerstNumber[i]) {
                arrayLargerstNumber[i] = arr[i][j]
            }
        }
    }
    return arrayLargerstNumber
  } 



  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));   