document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const errorMessagesDiv = document.getElementById("errorMessages");

    function displayErrorMessage(errorMessage) {
        errorMessagesDiv.innerHTML = errorMessage; 
        errorMessagesDiv.style.display = "block";  
    }

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        let validationPassed = true;
        let errorMessage = "";

        if (!username) {
            errorMessage += "Username is required.<br>";
            validationPassed = false;
            document.getElementById("username").classList.add("input-error");
        }

        if (!password) {
            errorMessage += "Password is required.<br>";
            validationPassed = false;
            document.getElementById("password").classList.add("input-error");
        }

        if (!validationPassed) {
            displayErrorMessage(errorMessage);
        } else {
            errorMessagesDiv.style.display = "none"; 
            console.log("Form submitted");
        }

        if(!username && !password) {
            displayErrorMessage("please fill missing fields!");
            //highlight the fields
            document.getElementById("username").classList.add("input-error");
            document.getElementById("password").classList.add("input-error");
        }
        if(formIsValid) {
        }

    });
});
