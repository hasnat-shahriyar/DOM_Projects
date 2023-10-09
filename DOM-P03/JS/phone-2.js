document.getElementById("btn-plus2").addEventListener ("click", function(){
    const numberInputField = document.getElementById ("input-field2");
    const numberInputString = numberInputField.value;
    const previousNumberInput = parseInt (numberInputString);
    const newNumberInput = previousNumberInput + 1;
    numberInputField.value = newNumberInput;
})