/* 4. Fibonacci

For a fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. 
A series would start with the numbers 0 and 1 in place,
followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.

0 1 1 2 3 5 8 13 21... */

/* F(n)=f(n-1)+f(n-2)
1     1       1
2     1       2
3     2       1.5



0 and 1= immutable
start adding the previous */

//PSEUDOCODE
//function that receive number as argument (number that we need to get the Fibonacci)
//Set the penultimate number to 0 and the last number to 1.//immutables
//IF number ===0 returns 0
//IF number ===1 returns 1
//Loop throught 2 until number
//Sum last and penultimate number up //atual
//Set penultimate to last
//Set last to the current number
//Add to sum the current number
//Print sum
//Return fibonacci for number


function fibonacci(number){
    let penultimo=0
    let ultimo=1
    if(number===0){
        console.log(0);
        return 0
    }else if(number===1){
        console.log(1);
        return 1
    }
    let atual
    let sum=1//penultimo(fib.0)+ultimo(fib.1)
    for(let i=2;i<=number; i++) {
        atual= ultimo+ penultimo
        penultimo=ultimo
        ultimo=atual
        sum = sum + atual
        
    }
   
    console.log(sum)
    return atual

}

console.log(fibonacci(10))

//DIAGRAM
//1.If number=0 FALSE, return 0
//2.If number=1 FALSE, return 1
//3.i=2 2<=10  calculate fibonacci for i adding up penultimate and last number (F(2)=f(0)+f(1)) and add to sum the value of f(2)
//...
//i=11 11<=10 FALSE, print sum of the fibonaccies and return fibonacci for number f(10)

