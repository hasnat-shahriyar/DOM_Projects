// Step 1: Add Click event handler with the submit button
document.getElementById("submit-btn").addEventListener("click", function(){
    // Step 2: Get the email address inside the email input field
    // Always remember to use .value to get text from an input field
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    // Step 3: Get Password
    // 3.a: Set ID on the HTML element
    // 3.b: Get the element
    // 3.c: Get the value from the element
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    // Danger: Never Verify Email & Password on the client side
    // Step 4: Verify Email & Password. Check whether Valid User or not
    if (email === "hs@mail.com" && password === "abc123"){
        window.location.href = "bank.html"
    } else {
        alert("Please Enter Valid Information");
    }
});

// Get the emailField element outside of the click event listener
const passwordField = document.getElementById("user-password");

// Execute a function when the user presses a key on the keyboard
passwordField.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("submit-btn").click();
    }
});
