/* Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".

For this algorithm, you can use the split() method.

titleCase("I'm a little tea pot")should return a string.
titleCase("I'm a little tea pot")should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") should return "Short And Stout". */

//Methods used:
    /* charAt() 
 Return the first character (0) of a string:
 String myStr = "hello";
char result = myStr.charAt(0);
System.out.println(result);
prints h 

     .slice()
.slice returns a piece of the array but it doesn't affect the original array

    .join()
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
*/


//PSEUDOCODE
    //Function => parameter(string)
    //Letters in lower case + turn string to an array
    //For loop
    //First letter to turn it to a capitalize
    //Turn the array to string back
    //Call the function



    function titleCase(str) {
        str = str.toLowerCase().split(' '); //.toLowerCase() makes every letters to lower case "i'm a little tea pot"
        //.split makes  array of strings  ["i'm", "a", "little", "tea", "pot"]

        for(let i=0; i<str.length; i++) {

            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)//str[i].charAt(0).toUpperCase() returns the first letter and then puts it in uppercase
            //.slice slices from position 1 to the end
        }

        return str.join(' ')//["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
    }

    console.log(titleCase("I'm a little tea pot"))







