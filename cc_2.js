//Task 1: Working with Arrays
let products = ["Shampoo", "Conditioner", "Body Soap", "Face Wash", "Towel"] //Creating an Array
products.push("Toothpaste") //Adding the string toothpaste to my array
products.pop() //deleting the last item in the array, in this case toothpaste
console.log(products) //logging the array

//Task 2: Accessing and Modifying Arrays
let scores = [2,4,6,8,10] //This is assigning the variable scores to an array of numbers
scores.splice(1,1,5) //This is updating the array by deleting only he second number (4) and inputting 5 in that same position
let totalScore = scores.reduce((total, score) => total + score,0) //this is making the array into 1 single number by adding each number together
let avgScore = totalScore/scores.length //This is pulling out the average score by dividing the total of the scores by the amount of values in the array
console.log(scores)
console.log(avgScore) //This is logging the value outputted by the equation above(Line 11)
