// Get the button element with the id "btn-case-plus"
document.getElementById("btn-case-plus").addEventListener("click", function() {
    // Get the input field element with the id "case-input-field"
    const caseInputField = document.getElementById("case-input-field");

    // Get the current value of the input field as a string
    const caseInputString = caseInputField.value;

    // Convert the string to an integer (assuming it contains a valid number)
    const previousCaseInput = parseInt(caseInputString);

    // Increment the previous input value by 1 to get the new value
    const newCaseInput = previousCaseInput + 1;

    // Update the input field with the new value
    caseInputField.value = newCaseInput;
});
