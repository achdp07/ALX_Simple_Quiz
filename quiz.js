document.getElementById("submit-answer").addEventListener("click", checkAnswer);

function checkAnswer() {
    // Step 1: Identify the Correct Answer
    const correctAnswer = "4";

    // Step 2: Retrieve the User’s Answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    const feedbackElement = document.getElementById("feedback");

    // Step 3: Check if the user selected an option
    if (!selectedOption) {
        feedbackElement.textContent = "Please select an answer before submitting.";
        feedbackElement.style.color = "orange";
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 4: Compare and display feedback
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! 🎉";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "Incorrect. Try again.";
        feedbackElement.style.color = "red";
    }
}
