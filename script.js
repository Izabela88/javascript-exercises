/* Write a JavaScript program to check two numbers and return true if one of the number is
 100 or if the sum of the two numbers is 100*/

 const checkNumbers = (num1,num2) => num1 === 100 || (num1 + num2) === 100

 console.log(checkNumbers(99,2))


//  Write a JavaScript exercise to get the extension of a filename.

const getFileExtension = (str) => str.slice(str.lastIndexOf("."))

console.log(getFileExtension("index.js"))

/* Write a JavaScript program to replace every character in a given string with the character
following it in the alphabet*/

const replaceCharacter = (str) => 
str.split("")
.map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join("")

console.log(replaceCharacter("mn"))

/*Write a JavaScript program to get the current date.
Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */

const formatDate = (date = new Date()) => {
    const day = date.getDay() + 1
    const month = date.getMonth() + 1
    const year = date.getYear()
    return `${day}/${month}/${year}`
}

console.log(formatDate())

/*Write a JavaScript program to create a new string adding "New!" in front of a given string. If
the given string begins with "New!" already then return the original string. */

const newString = (str) => str.indexOf("New!") === 0 ? str : `New! ${str}`


console.log(newString("New! Iza"))