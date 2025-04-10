// Function to loop through and print most asked DSA questions
function printDSAQuestions() {
    const dsaQuestions = [
        "1. Reverse a linked list",
        "2. Find the maximum subarray sum (Kadane's Algorithm)",
        "3. Merge two sorted arrays",
        "4. Detect a cycle in a linked list",
        "5. Find the intersection point of two linked lists",
        "6. Implement binary search",
        "7. Find the first missing positive integer",
        "8. Check if a string is a palindrome",
        "9. Find the longest common subsequence",
        "10. Solve the N-Queens problem"
    ];

    for (let question of dsaQuestions) {
        console.log(question);
    }
}

// Call the function to print the questions
printDSAQuestions();