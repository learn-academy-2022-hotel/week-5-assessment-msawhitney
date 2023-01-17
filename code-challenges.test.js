// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// Pseudocode
// Input: string
// Output: string with these letters converted as follows: 
// a to 4
// e to 3
// i to 1
// o to 0
// Process: Create a function called secretCode
// Iterate through the string and find each of the letters (a, e, i, and o) so that I can change them. Possibly I can use the string method string.charAt(i). 
// Also, look at regex methods.
//I ended up using a for..in loop which I had never heard of (see reference below) to iterate through the string and find the letter/number pair in the object called mappingCode.
 //I also used replace and a regex method to search (reference also below). More explanation is below.


// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe ('secretCode', (string, mapping) => {
    it ('Create a function that takes in a string and returns a string with a coded message.', () => {
  expect(secretCode(secretCodeWord1, mappingCode)).toEqual("L4ck4d41s1c4l") 
  expect(secretCode(secretCodeWord2, mappingCode)).toEqual("G0bbl3dyg00k")
  expect(secretCode(secretCodeWord3, mappingCode)).toEqual("3cc3ntr1c")    
    })
  })

//   RED --GOOD FAIL 
//   FAIL  ./code-challenges.test.js
//   secretCode
//     ReferenceError: secretCode is not defined

// b) Create the function that makes the test pass.

const secretCode = (string, mapping) => {
  //My function secretCode takes in a string and an object(mapping).
  //The object describes what to replace in the string.

  let newString = string;
  //newString is set to the value of the "string" argument

  //The function uses a "for...in" loop. Here is a reference for those: https://www.w3schools.com/js/js_loop_forin.asp
  //It also uses a regular expression (RegExp) with modifiers gi (global/case insensitive). Here is a reference for those: https://www.w3schools.com/jsref/jsref_obj_regexp.asp#:~:text=RegExp%20Object,pattern%20with%20Properties%20and%20Methods.

  //The for...in loop will iterate through the mapping object (called mappingCode) and continue until all keys in the mapping object have been found and replaced.
  //For key (letter) in object (mapping)
  for (let letter in mapping) {        
      let regularExp = new RegExp(letter, 'gi');
      //Create a new regex using the current letter from the mapping object. 
      //Modifier gi means global and case insensitive - so every occurance of the letter can be found and case won't matter. A regex is a sequence of characters that define a search pattern (here, the vowels that need to be replaced with numbers.)
      
      //Use the replace method on the newString variable, passing in the regex and the corresponding value from the mapping object.
      newString = newString.replace(regularExp, mapping[letter]);
      //On each iteration, the loop will look up a value in the object using the key. 
      //It will assign the new value to the variable called letter.
  }
  //The loop continues until all keys in the mapping object have been found and replaced. Then the new string is returned.
  return newString;
  }
  const mappingCode = {
       "a": "4",
       "e": "3",
      "i": "1",
       "o": "0",
  }
//----GREEN --- PASSED
// secretCode
//See below

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// Pseudocode
// Input: (1) array of strings, (2) a single character (string)
// Output: all the words from the array (1) that contain the character in (2)
// Process: Create a function called findAletter
// Probably want to use .filter and .includes. 

// You would need to use .filter the fruitArray and select elements that match a condition. 
//The condition is that the word must include the letter that is passed to the function. ---EDIT TO ADD: include upper/lowercase!
//Use the .includes method to check for that. 
// ---Jest TEST failed after function was created because of the capital letter A (Apricot). I refactored to account for upper and lowercase letters. ----TEST PASSED

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe ('filterWords', (array, letter) => {
    it ('Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.', () => {
  expect(filterWords (fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"]) 
  expect(filterWords (fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"]) 
    })
  })

//   RED Good FAIL
//   FAIL  ./code-challenges.test.js
//     ● filterWords › 
//   ReferenceError: filterWords is not defined
   

// b) Create the function that makes the test pass.

const filterWords = (array, letter) => {
  //A new array called filteredWords is created (to store the filtered words.)
  const filteredWords = array.filter(word => {
      //Create variables to use to account for upper or lowercase letters.
      let lowerCaseLetter = letter.toLowerCase();
      let upperCaseLetter = letter.toUpperCase();
      return word.includes(lowerCaseLetter) || word.includes(upperCaseLetter);
     //Check if the word includes the desired letter in uppercase OR lowercase.
   });
   return filteredWords;
   //Return the array of filtered words
}
//----GREEN --- PASSED
// filterWords
//See below

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// Pseudocode
// Input: array
// Output: true or false
// Process: Full house = n1, n1, n1 and n2, n2
// Create a function called fullHouse.
// Sort the array to make it easier to find matches
// Iterate through with a for loop.
// If iteration finishes and there is a non-match, return false.
// If iteration finds matches, keep count with variables n1 and n2.
// ----When n1 equals 3 and n2 equals 2, return true. ---(changed this)
// ----Jest TEST FAILED after function set-up because hand3 did not go as expected. I had to add the matchOftwos variable to make sure there was a match of 3 AND two (see below.) I changed it to the following: if n1 equals 3 and matchOftwos is true - return true.-----TEST PASSED

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

describe ('fullHouse', (array) => {
    it ('Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.', () => {
  expect(fullHouse(hand1)).toEqual(true) 
  expect(fullHouse(hand2)).toEqual(false)
  expect(fullHouse(hand3)).toEqual(false)
  expect(fullHouse(hand4)).toEqual(true)   
    })
  })

//   ------------RED Good FAIL------
//   FAIL  ./code-challenges.test.js
//   ● fullHouse › 
//     ReferenceError: fullHouse is not defined

// b) Create the function that makes the test pass.

const fullHouse = (array) => {
  array.sort();
  let n1 = 0;
  let n2 = 0;
  let matchOftwos = false;
  let previous;
  //Sorted the array.
  //Declared two variables to keep count of the duplicate numbers. 
  //-----Added another variable to make sure I have a match of 2s as well as 3s. (failed Jest test called this out). Initialized it as false and created an if statement so --- if n2 equals 2, matchOftwos will be true.-----//
  //About "previous" variable --- declared before it is defined to use it inside the function.
  //This is so I can compare each number in the array to the previous number.
  
  for (let i=0; i<array.length; i++) {
      //starting at index zero; going the length of the array; adding 1 to the index to iterate through
  
          if (array[i] !== previous) {
              n1 = 1;
              //check if the element in the array is not equal to the previous number. 
              //If not, set n1 to 1 to start count.
  
            if (array[i] === array[i + 1])  {
              n2++;
              //check if the current element is equal to the next element. If it is, add 1 to the count.

              if (n2 === 2) matchOftwos = true;
              // Trigger change of the matchOftwos variable to true if n2 count equals 2. This is so both a 3 match AND a 2 match will be present to indicate a full house.

              } else {
              n2 = 1;  
              //If current element is not equal to next, then set n2 to 1 to start the second group.
              }
              //Store the current element as "previous" for the next iteration.
              previous = array[i];
              
          } else { 
            //If the current element is equal to the previous element, increase n1 count by 1.
            n1++;
          }   
        }    
          if (n1 === 3 && matchOftwos) {
            // if n1 equals 3 AND there is a matchOftwos (true), you have a full house!    
            return true;
          }
        //If matches are not found, there is no full house so return false.
        return false;
      };

//GREEN TEST ---- 3 passed tests.

// PASS  ./code-challenges.test.js
//   secretCode
//     ✓ Create a function that takes in a string and returns a string with a coded message. (1 ms)
//   filterWords
//     ✓ Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. (1 ms)
//   fullHouse
//     ✓ Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

