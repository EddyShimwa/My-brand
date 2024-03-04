document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    const errorMessagesDiv = document.getElementById("errorMessages");

    function displayErrorMessage(errorMessage) {
        errorMessagesDiv.innerHTML = errorMessage; 
        errorMessagesDiv.style.display = "block";  
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword") ? document.getElementById("confirmPassword").value : null;
        const isSignUp = confirmPassword !== null; 

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

        if (isSignUp && password !== confirmPassword) {
            errorMessage += "Passwords do not match.<br>";
            validationPassed = false;
            document.getElementById("password").classList.add("input-error");
            document.getElementById("confirmPassword").classList.add("input-error");
        }

        if (!validationPassed) {
            displayErrorMessage(errorMessage);
            return; 
        }

        if (isSignUp) {
            const users = JSON.parse(localStorage.getItem('users')) || {};
            if (users[username]) {
                displayErrorMessage("Username already exists.<br>");
                return;
            }
            users[username] = password;
            localStorage.setItem('users', JSON.stringify(users));
            window.location.href = "index.html";  
        } else {
            const users = JSON.parse(localStorage.getItem('users')) || {};
            if (users[username] === password || (username === "admin" && password === "admin")) {
                window.location.href = username === "admin" ? "admin.html" : "index.html";
            } else {
                displayErrorMessage("Invalid username or password.<br>");
            }
        }
    });
});   
