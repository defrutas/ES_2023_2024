 // List of predefined users
 var users = [
    { username: 'flavio', password: '1234' },
    { username: 'adneiza', password: '1234' },
    { username: 'ezequiel', password: '1234' },
];

function attemptLogin() {
    // Get input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation
    if (username === '' || password === '') {
        alert('Please enter both username and password.');
        return;
    }

    // Check if the entered credentials match any user
    var matchingUser = users.find(user => user.username === username && user.password === password);

    if (matchingUser) {
        alert('Login successful!');
        // Redirect to index.html
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}