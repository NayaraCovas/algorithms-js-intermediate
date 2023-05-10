/* Find the longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number. For these algorithms you are allowed to use the split() method.

findLongestWord("The quick brown fox jumped over the lazy dog")should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog")should return 6.
findLongestWord("May the force be with you") should return 5.
 */

//PSEUDOCODE

//Function(parameters)
//Split() =>change out string to an array
//Declare the variable =>save the length of the longest word
//for loop
//If length >longest

function findLongestWord(str) {
  var strSplit = str.split(" "); //["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];
  var longestWord = 0;
  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
