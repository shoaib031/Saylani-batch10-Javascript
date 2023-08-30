// Ask the user to enter a number. Use the includes method to check if the number is present in the array [10, 20, 30, 40, 50]. Display whether the number is found or not.

// const numbersArray = [10, 20, 30, 40, 50];
// const userInput = prompt("Enter a number:");
// const userNumber = parseInt(userInput);

// if (numbersArray.includes(userNumber)) {
//   console.log("The number " + userNumber + " is find in array ");
// } else {
//   console.log("The number " + userNumber + " is not find in array ");
// }

// Create an array of student names. Ask the user to enter a student name. Use the indexOf method to find the index of the entered name. Display the name on that index if found or a message if the name is not found.

var studentNames = ["ahmed", "ALi", "nehal", "shoaib", "saad"]
var userInput = prompt("Enter a student name")

if(studentNames.indexOf(userInput)){
cosoele.console.log("It's found" + userInput);
}else{
    console.log("It's not found" + userInput)
}