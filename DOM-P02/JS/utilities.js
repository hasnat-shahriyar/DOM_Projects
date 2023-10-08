// Function to get the value of an input field by its ID
function getInputFieldValueById(inputFieldId) {
    // Step 1: Get the input field element by its ID
    const inputField = document.getElementById(inputFieldId);
    // Step 2: Get the value from the input field
    const getInputFieldValueString = inputField.value;
    // Step 3: Convert the string value to a floating-point number
    const inputFieldValue = parseFloat(getInputFieldValueString);
    // Clear the input field after retrieving its value
    inputField.value = "";
    return inputFieldValue;
}

// Function to get the value of a text element by its ID
function getTextElementValueById(elementId) {
    // Step 1: Get the text element by its ID
    const textElement = document.getElementById(elementId);
    // Step 2: Get the inner text of the element
    const textElementValueString = textElement.innerText;
    // Step 3: Convert the string value to a floating-point number
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

// Function to set the value of a text element by its ID
function setTextElementValueById(elementId, newValue) {
    // Get the text element by its ID
    const textElement = document.getElementById(elementId);
    // Set the inner text of the element to the new value
    textElement.innerText = newValue;
}

// Event listener for the "deposit" button click
document.getElementById("deposit-btn").addEventListener("click", function () {
    // Step 1: Get the new deposit amount from the input field
    const newDepositAmount = getInputFieldValueById("deposit-input");

    // Step 2: Get the previous deposit total by its ID
    const previousDepositTotal = getTextElementValueById("deposit-display");

    // Calculate the new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    // Step 3: Set the new deposit total value
    setTextElementValueById("deposit-display", newDepositTotal);

    // Get the previous total balance by using the function
    const previousTotalBalance = getTextElementValueById("balance-display");

    // Calculate the new total balance
    const newTotalBalance = previousTotalBalance + newDepositAmount;

    // Step 3: Set the new total balance value
    setTextElementValueById("balance-display", newTotalBalance);
});
