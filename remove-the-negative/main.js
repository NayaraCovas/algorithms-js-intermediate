/* 5. Remove the Negative

Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1]. */

//PSEUDOCODE
//1-Loop through the number of the  arrayX[1,-2,4,1]
//2-If current number is positive add to the newArray
//3-If current number is negative, disregard
//Print new array


//CODE A

const arrayX = [1,-2,4,1];
newArray =[]

for (i = 0; i < arrayX.length; i++) {
  if (arrayX[i] >= 0) {
    newArray.push(arrayX[i])
   
  } 
  
}
console.log(newArray);

//DIAGRAM A
//1:i=0. i<4? TRUE 1>= 0. RESULT: 1 will be pushed to the newArray
//2:i=1. i<4? TRUE -2 >=0. RESULT: -2 will be ignored 
//3:i=2. i<4? TRUE 4 >= 0. RESULT: 1 will be pushed to the newArray
//4.i=3. i<4? TRUE 1 >= 0. RESULT: 1 will be pushed to the newArray
//5.i=4. i<4? FALSE, loop will stop
//6.New array is printed


//CODE B
const arrayX = [1,-2,4,1];
    
for(i = 0; i < arrayX.length; i++){ 
                               
    if ( arrayX[i] < 0) { 
        arrayX.splice(i, 1); //i=index will begin to delete and 1 is the amount of elements that is deleted
        i--; 
    }
}
console.log(arrayX)

     //OR



