// Step 1 : Add Click event handler with the submit button
document.getElementById("submit-btn").addEventListener("click", function(){
    // Step 2 : Get the email address inside the email input field
    // Always remember to use .value to get text from an input field

    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    // Step 3 : Get Password
    // 3.a : Set ID on the HTML element
    // 3.b : Get the element
    // 3.c : Get the value from the element
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    // Danger : Never Verify Email & Password on the client side
    // Step 4 : Verify Email & Password. Check whether Valid User or not
    if (email === "hs@mail.com" && password === "abc123"){
        console.log ("Valid User");
    } else {
        console.log ("Invalid User!");
    }
})