// Show Register Form and Hide Login Form
document.getElementById('showRegister').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
});

// Show Login Form and Hide Register Form
document.getElementById('showLogin').addEventListener('click', function() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

// Handle Registration
document.getElementById('registerBtn').addEventListener('click', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    if (newUsername && newPassword) {
        localStorage.setItem('username', newUsername);
        localStorage.setItem('password', newPassword);
        document.getElementById('register-message').textContent = 'Registration successful!';
        document.getElementById('register-message').style.color = 'green';

        // Switch to login after successful registration
        setTimeout(() => {
            document.getElementById('registerForm').style.display = 'none';
            document.getElementById('loginForm').style.display = 'block';
        }, 1000);
    } else {
        document.getElementById('register-message').textContent = 'Please fill out both fields.';
        document.getElementById('register-message').style.color = 'red';
    }
});

// Handle Login
document.getElementById('loginBtn').addEventListener('click', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    const errorMessage = document.getElementById('error-message');

    if (username === storedUsername && password === storedPassword) {
        errorMessage.style.color = "#4CAF50";
        errorMessage.textContent = "Login successful!";
        localStorage.setItem('loggedIn', true); // Save login session

        // Show secured page after login
        setTimeout(() => {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('securedPage').style.display = 'block';
        }, 1000);
    } else {
        errorMessage.style.color = "#ff4d4d";
        errorMessage.textContent = "Invalid username or password!";
    }
});

// Handle Logout
document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.removeItem('loggedIn');
    document.getElementById('securedPage').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

// Auto redirect to secured page if already logged in
if (localStorage.getItem('loggedIn')) {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('securedPage').style.display = 'block';
}