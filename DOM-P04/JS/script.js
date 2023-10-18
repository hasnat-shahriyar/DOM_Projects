// This function calculates the total expense by retrieving values from input fields and updating the display.

function calculate() {
    // Retrieve the values from input fields
    let Food = parseFloat(document.getElementById("food").value);
    let Rent = parseFloat(document.getElementById("rent").value);
    let Clothes = parseFloat(document.getElementById("clothes").value);

    // Convert input values to numbers and add them
    const totalExpense = Food + Rent + Clothes;

    // Get the element where the result will be displayed
    const displayTotalExpense = document.getElementById("total-expense");

    // Get the previous total from the display element
    let totalExpenseString = displayTotalExpense.innerText;
    let totalExpenseStringToNumber = parseFloat(totalExpenseString);

    // Calculate the new total expense
    const totalExpenseDisplay = totalExpense;

    // Update the display element with the new total expense
    displayTotalExpense.innerText = totalExpenseDisplay;

    // Retrieve the income value
    let Income = parseFloat(document.getElementById("income").value);

    // Get the element where the total balance will be displayed
    const displayTotalBalance = document.getElementById("balance");

    // Get the previous total balance from the display element
    let displayTotalBalanceString = displayTotalBalance.innerText;
    let totalBalance = parseFloat(displayTotalBalanceString);

    // Calculate the new total balance (income - total expense)
    totalBalance = Income - totalExpense;

    // Update the display element with the new total balance
    displayTotalBalance.innerText = totalBalance;
}