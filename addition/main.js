/* 1. Addition

Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator. */

//PSEUDOCODE
//1-Loop throught 200 and 2700
//2-%3 or/&& %5 (if statement)
//3-Print values divided by 3 or 5
//4-Ignore numbers divisable by 3 and 5

//CODE

for (let i = 200; i <= 2700; i++) {
  if (i % 3 === 0 && i % 5 !== 0) {
    console.log(i);
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log(i);
  }
}

//DIAGRAM
//1:i=200. 200 <= 2700. 200 % 3 and not divided per 5? RESULT: FALSE,then.. 200 % 5 and not divided per 3? TRUE. RESULT: 200 is printed
//2:i=201. 201 <= 2700. 201 % 3 and not divided per 5? RESULT: TRUE. RESULT: 201 is printed
//3:i=202. 202 <= 2700. 202 % 3 and not divided per 5? RESULT: FALSE,then.. 202 % 5 and not divided per 3? FALSE. RESULT: 202 is not printed
//... i=2700. 2700<=2700. 2700 % 3 and not divided per 5? RESULT: FALSE,then.. 2700% 5 and not divided per 3? FALSE. RESULT: 2700 is not printed
