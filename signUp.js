// Get the form element
const form = document.querySelector('#signup-form');

// Add event listener for form submission
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get user input values
    const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // Perform validation
    if (username === '' || email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    // Save user data in local storage
    const user = {
        username,
        email,
        password
    };
    localStorage.setItem('user', JSON.stringify(user));

    // Display success message
    alert('Sign-up successful!');

    // Reset form
    form.reset();
});