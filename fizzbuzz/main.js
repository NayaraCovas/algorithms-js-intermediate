/* 3. FizzBuzz

Create an algorithm that inserts the numbers from 1 to 135 into an array, 
while replacing the values that are divisible by 3 with the word "Fizz", 
the numbers that are divisible by 5 with the word "Buzz", 
and the numbers that are divisible with 3 and 5 with the word "FizzBuzz". 
Your output should look like [1,2,'Fizz',4,'Buzz',5,'Fizz',7,8,...] */


//PSEUDOCODE A
//1-Create a function that has the result as argument
//2-Create an empty arr to hold the result
//3-Loop through the numbers
//4-If number divisible by 3 && 5 push "FizzBuzz" to the array
//5-Else If number divisible by 3  push "Fizz" to the array
//6-Else If number divisible by 5  push "Buzz" to the array
//7-Else push the current i (number) to the new array(as it is)
//8-Return the array
//9-Call function and print

//CODE A


let array = [];
let i = 1;

function fizzBuzz(result) {//result is only available inside function
  for (i = 1; i <= 135; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        result.push("FizzBuzz");//array.push when called
    } else if (i % 3 == 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

console.log(fizzBuzz(array));


//DIAGRAM
//1:i=1. 1 <= 135. 1 % 3 and 5? FALSE, then 1 % 3? FALSE, then 1 % 5 FALSE RESULT: 1 will be pushed to the result array
//2:i=2. 2 <= 135. 2 % 3 and 5? FALSE, then 2 % 3? FALSE, then 2 % 5 FALSE RESULT: 2 will be pushed to the result array
//3:i=3. 3 <= 135. 3 % 3 and 5? FALSE, then 3 % 3? TRUE  RESULT:"Fizz" will be pushed to the result array
//5:i=5. 5 <= 135. 5 % 3 and 5? FALSE, then 3 % 3? FALSE, then 5 % 5 TRUE  RESULT:"Buzz" will be pushed to the result array
//15:i=15. 15 <= 135. 15 % 3 and 5? TRUE RESULT:"FizzBuzz" will be pushed to the result array
//..
//135:i=135. 135<=135. 135 % 3 and 5? TRUE RESULT:"FizzBuzz" will be pushed to the result array
//... i=136. 136<=135? Loop will stop
//Result array will be returned 
//Function is called and printed




//CODE B
newArray = [];
for (let i = 1; i <= 135; i++) {
  

  if (i % 3 == 0) newArray.push("Fizz");
  else if (i % 5 == 0) newArray.push("Buzz");
  else if (i % 3 === 0 && i % 5 === 0) newArray.push("FizzBuzz");
  else newArray.push(i);
}

console.log(newArray);
