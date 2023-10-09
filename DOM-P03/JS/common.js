// Function to get the value from an element by its ID
function getInputElementById(inputElementId) {
    const element = document.getElementById(inputElementId);

    // Check if the element exists
    if (element) {
        const elementText = element.innerText;
        const elementValue = parseFloat(elementText); // Use parseFloat to handle decimal values

        // Check if the conversion to a number was successful
        if (!isNaN(elementValue)) {
            return elementValue;
        }
    }

    // Return 0 by default if the element doesn't exist or cannot be converted to a number
    return 0;
}

// Function to set the inner text of an element by its ID
function setTextElementById(elementId, value) {
    const element = document.getElementById(elementId);

    // Check if the element exists
    if (element) {
        element.innerText = value;
    }
}

// Function to calculate the subtotal, tax, and final amount
function calculateSubTotal() {
    // Get the values from elements by their IDs
    const currentNumberTotal = getInputElementById("case-price-total");
    const currentCaseTotal = getInputElementById("price-total");

    // Calculate the subtotal
    const currentSubTotal = currentNumberTotal + currentCaseTotal;

    // Set the subtotal value in the HTML
    setTextElementById("sub-total", currentSubTotal);

    // Calculate Tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);

    // Set the tax amount in the HTML
    setTextElementById("tax-amount", taxAmount);

    // Calculate Final Amount
    const finalAmount = currentSubTotal + taxAmount;

    // Set the final amount in the HTML
    setTextElementById("final-amount", finalAmount);
}
