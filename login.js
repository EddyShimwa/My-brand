
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        let validationPassed = true;
        let errorMessage = "";

        if (!username) {
            errorMessage += "Username is required.\n";
            validationPassed = false;
        }

        if (!password) {
            errorMessage += "Password is required.\n";
            validationPassed = false;
        }


        if (!validationPassed) {
            alert(errorMessage);
        } else {
           
            console.log("Form submitted"); 
        
        }
    });
});

