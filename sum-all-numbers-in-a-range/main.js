/*     Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

function sumAll(arr) {
  return 1;
}
sumAll([1, 4]);

The lowest number will not always come first.

sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45. */

    //PSEUDOCODE
        //An array with two numbers
        //Reorder the array
        //Variable to save the result
        //for loop [1,4]
        //Sum all the numbers
        //Return the result


        function sumAll(arr){
            if(arr[0] >arr[1])
            arr.sort((a,b) => a - b)//if the highest number is on the left, the array will be sorted [4,1] =>[1,4]
    
            let sum = 0
    
            for(let number=arr[0];number<=arr[1];number++){// >= because the second number should also the added in the loop
                sum+= number//adds from 1 to four to the count
            }
    
            return sum
        }
        console.log(sumAll([4,1]))
    
    // without the sorting:
    
        function sumAll(arr) {
            let sum = 0;
            let [minRange, maxRange] = arr; // Destructring
        
            if (minRange > maxRange) {
                [minRange, maxRange] = [maxRange, minRange]; // Swap the variables
            }
            for (let i = minRange; i <= maxRange; i++) {
                sum += i;
            }
        
            return sum;
        }
        
        console.log(sumAll([6, 4]));