/*   6. Communist Censorship

 Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'],
replace every letter of the word Program with *,
so the output would be ['Man', 'I','Love','The','Matrix','*******']. 
Then make your algorithm work for any word of your choice    */  

//PSEUDOCODE
 //1-Write a function thas has array and word as arguments 
 //2-Create an empty arr to hold the result
 //3-Create an empty string that will be the "*"
 //4-Loop through the arr
 //5- use if statement to find the target word
 //6-If the word is the array is not the same as the target than push the word to the new array(as it is)
 //7-Else, loop throug the target(founded word) and write a * for each letter
 //8-After that push each word to the new arr            

 //CODE:

 function communist(arr, targetWord) {
  let result = [];
  let stars = "";
  for(let i=0; i<arr.length; i++) {
      if(targetWord === arr [i]){
          for(let j=0; j<targetWord.length; j++){
              stars += "*"
          }
          result.push(stars)
      }else {
          result.push(arr[i])
      }
  }
  return result;//returns array with all that was done inside the function
 }  

 let x =['Man', 'I','Love','The','Matrix','Program'];

 console.log(communist(x, 'Program'))//changes the arguments of the function
 
 //Define array
 //Starts looking or the target word
 //Run trhougt the i and the ones that are different thatn the target are pushed
 //Starts runnig throught the letters of the target word
 //return the new array
 //console what was returned
 



