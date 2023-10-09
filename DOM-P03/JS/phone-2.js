function updateInputNumbers(isIncrease) {
    const numberInputField = document.getElementById("case-input-field");
    const numberInputString = numberInputField.value;
    const previousNumberInput = parseInt(numberInputString);
    let newNumberInput;
    if (isIncrease) {
        newNumberInput = previousNumberInput + 1;
    } else {
        newNumberInput = Math.max(previousNumberInput - 1, 0);
    }
    numberInputField.value = newNumberInput;
    return newNumberInput;
}

function updateInputTotalPrice (newNumberInput){
    const numberTotalPrice = newNumberInput * 39;
    const numberTotalElement = document.getElementById ("case-price-total");
    numberTotalElement.innerText = numberTotalPrice;
}
document.getElementById("case-btn-plus").addEventListener("click", function () {
    const newNumberInput = updateInputNumbers(true);
    updateInputTotalPrice(newNumberInput);

});

// Remove the second event listener, as it's a duplicate
document.getElementById("case-btn-minus").addEventListener("click", function () {
    const newNumberInput = updateInputNumbers(false);
    updateInputTotalPrice(newNumberInput);
});
