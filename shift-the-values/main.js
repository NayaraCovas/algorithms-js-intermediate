/* 2. Shift the Values

Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2]. */

//PESEUDOCODE
//1-Declare the array [2,1,6,4,-7]
//2-Create empty array to allocate the result of the for loop
//3-Loop throught the array from the end to the beginning (arrayX.length-1)
//4-Insert the values in the new array
//5-Print the new array

//CODE A
 arrayX = [2,1,6,4,-7]
 newArray =[]

 for (i= arrayX.length-1; i>=0; i--){
    newArray.push(arrayX[i])
    
 }
 console.log(newArray)


 //DIAGRAM A

//1:i=4. i>=0. RESULT: [-7]
//2:i=3. i>=0. RESULT: [-7,4]
//3:i=2. i>=0. RESULT: [-7,4,6]
//4:i=1. i>=0. RESULT: [-7,4,6,1]
//5:i=0. i>=0. RESULT: [-7,4,6,1,2]
//6:i=-1 i>=0. false, then the loop will stop.
//7:Print new array



//CODE B

arrayX = [2,1,6,4,-7]

console.log(arrayX.reverse());
