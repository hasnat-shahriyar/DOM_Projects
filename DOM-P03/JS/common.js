function getInputElementById (inputElementId){
    // Calculate Total
    const numberTotalElement = document.getElementById(inputElementId);
    const currentNumberTotalString = numberTotalElement.innerText;
    const currentNumberTotal = parseInt (currentNumberTotalString);
    return currentNumberTotal;    
}

// Function to calculate the subtotal
function calculateSubTotal() {
    const currentNumberTotal = getInputElementById("case-price-total");
    const currentCaseTotal = getInputElementById("price-total");
    const currentSubTotal = currentNumberTotal + currentCaseTotal;
    const subTotalElement = document.getElementById("sub-total");
    subTotalElement.innerText = currentSubTotal;
}
