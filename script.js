// Complete the following tasks. Display your results in the console unless instructed otherwise.

// PART A — for Loop

// 1. Countdown:
//    Display numbers from 20 down to 1.

// 2. Odd and Even Numbers:
//    a. Display odd numbers from 11 to 25.
//    b. Use a separate loop to display even numbers from 10 to 30.

// 3. Calculate a Total:
//    Calculate the sum of numbers from 1 to 20.
//    Display the final total after the loop ends.

// 4. break and continue:
//    Count from 1 to 15.
//    Use continue to skip 4.
//    Use break to stop at 12, without displaying 12.

// 5. Loop Through a String:
//    Create a variable containing "JavaScript".
//    Use a for loop to display each character separately.


// PART B — while Loop

// 6. Countdown:
//    Display numbers from 15 down to 5.

// 7. Calculate a Total:
//    Calculate the sum of even numbers from 2 to 20.
//    Hint: Start your counter at 2 and increase it by 2.
//    Display the final total after the loop ends.

// 8. break and continue:
//    Count from 1 to 10.
//    Use continue to skip 5.
//    Use break to stop at 9, without displaying 9.
//    Ensure your counter increases when you skip 5.

// 9. Password Checker:
//    Use prompt() to keep asking for a password
//    until the user enters "learn123".
//    After the loop, display "Access granted!" using alert().
//    Assume the user does not click Cancel.


// PART C — do...while Loop

// 10. Display a Message:
//     Display "I am learning JavaScript!" five times.

// 11. Secret Word:
//     Use prompt() to ask for a secret word.
//     Repeat until the user enters "coding".
//     After the loop, display "Correct word!" using alert().
//     Assume the user does not click Cancel.

// 12. A False Condition:
//     Create a variable named isLearning and assign it false.
//     Use a do...while loop to display "Keep learning!"
//     and repeat while isLearning is true.
//     In a comment, explain how many times the message appears.


// PART D — for...of Loop

// 13. Loop Through a String:
//     Create a variable containing your first name.
//     Display each character separately.

// 14. Loop Through an Array:
//     Create an array containing five phone brands.
//     Display each brand using a for...of loop.

// 15. Calculate a Total:
//     Create an array named prices containing:
//     1500, 2000, 3500, 1000, 2500.
//     Use a for...of loop to calculate the total.
//     Display only the final total after the loop ends.


// PART E — Conditional Statements

// 16. if...else — Check Voting Eligibility:
//     Ask the user to enter their age using prompt().
//     Convert the input to a number.
//     If they are 18 or older, display "Eligible to vote".
//     Otherwise, display "Not eligible to vote".
//     Assume the user enters a valid age.

// 17. Nested if...else — Student Discount:
//     Create a variable named isStudent and assign it true.
//     Create a variable named purchaseAmount and assign it 6000.

//     If the customer is a student:
//       Use a nested if...else to check their purchase amount.
//       - If it is at least 5000, display:
//         "You get a 10% discount!"
//       - Otherwise, display:
//         "Spend at least ₦5,000 to get a discount."

//     If the customer is not a student:
//       Display "This discount is for students only."

//     Test your code with:
//     a. isStudent = true, purchaseAmount = 6000.
//     b. isStudent = true, purchaseAmount = 3000.
//     c. isStudent = false, purchaseAmount = 6000.

// 18. Ternary Operator — Check a Score:
//     Create a variable named score and assign it 65.
//     Use a ternary operator to check whether score is at least 50.
//     Store "Passed" or "Failed" in a variable named result.
//     Display result in the console.
//     Test your code with scores of 65, 40, and 50.


// Instructions:

// Read through your lesson notes before starting.

// Create a folder named javascript-weekend-task.

// Inside the folder, create two files: index.html and script.js, and link them correctly.

// Label each solution with its task number using comments.

// Test each solution separately and make sure every loop stops correctly.

// Use different variable names where necessary to avoid redeclaration errors.

// Complete the tasks before our next class and be ready to explain your code.


//part A
// 1. Countdown:
let countdown = 20;
for (let i = countdown; i >= 1; i--) {
  console.log(i);
}
// 2. Odd and Even Numbers:
// a. Display odd numbers from 11 to 25.
for (let i = 11; i <= 25; i+=2) {
        console.log(i);
    }

// b. Display even numbers from 10 to 30.
for (let i = 10; i <= 30; i+=2)  {
        console.log(i);
    }

// 3. Calculate a Total:
let total = 0;
for (let i = 1; i <= 20; i++) {
    total += i;
}
console.log("Total sum from 1 to 20 is:", total);
// 4. break and continue:
for (let i = 1; i <= 15; i++) {
    if (i === 4) {
        continue; // Skip 4
    }
    if (i === 12) {
        break; // Stop at 12
    }
    console.log(i);
}
// 5. Loop Through a String:
let str = "JavaScript";
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

//Part B
// 6. Countdown:
let countingDown = 15;
while (countingDown >= 5) {
    console.log(countingDown);
    countingDown--;
}

// 7. Calculate a Total:
let totalEven = 0;
let num = 2;
while (num <= 20) {
    totalEven += num;
    num += 2;
}
console.log("Total sum of even numbers from 2 to 20 is:", totalEven);

// 8. break and continue:
let i = 1;
while (i <= 10) {
    if (i === 5) {
        i++;
        continue; // Skip 5
    }
    if (i === 9) {
        break; // Stop at 9
    }
    console.log(i);
    i++;
}

// 9: Password Checker
let password = "";
while (password !== "learn123") {
    password = prompt("Enter your password:");
}
alert("Access granted!");


// PART C  do...while Loop

// 10: Display a Message
let messageCount = 0;
do {
    console.log("I am learning JavaScript!");
    messageCount++;
} while (messageCount < 5);

// 11: Secret Word
let secretWord = "";
do {
    secretWord = prompt("Enter the secret word:");
} while (secretWord !== "coding");
alert("Correct word!");

// 12: A False Condition
let isLearning = false;
do {
    console.log("Keep learning!");
} while (isLearning === true);
// Observation: The message appears exactly once.


// PART D — for...of Loop

// 13: Loop Through a String
let firstName = "Fawaz"; 
for (let char of firstName) {
    console.log(char);
}

// 14: Loop Through an Array
let phoneBrands = ["Apple", "Samsung", "Google", "OnePlus", "Xiaomi"];
for (let brand of phoneBrands) {
    console.log(brand);
}

// 15: Calculate a Total
let prices = [1500, 2000, 3500, 1000, 2500];
let totalPrices = 0;
for (let price of prices) {
    totalPrices += price;
}
console.log(totalPrices);


// PART E — Conditional Statements

// 16: if...else — Check Voting Eligibility
let ageInput = prompt("Please enter your age:");
let age = Number(ageInput);
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

// 17: Nested if...else — Student Discount
let isStudent = true;
let purchaseAmount = 6000;

if (isStudent) {
    if (purchaseAmount >= 5000) {
        console.log("You get a 10% discount!");
    } else {
        console.log("Spend at least ₦5,000 to get a discount.");
    }
} else {
    console.log("This discount is for students only.");
}

// 18: Ternary Operator — Check a Score
let score = 65;
let result = score >= 50 ? "Passed" : "Failed";
console.log(result);
