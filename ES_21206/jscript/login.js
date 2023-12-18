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
        alert('Por favor introduza o nome de utilizador e a password');
        return;
    }

    // Check if the entered credentials match any user
    var matchingUser = users.find(user => user.username === username && user.password === password);

    if (matchingUser) {
        console.log('Login com sucesso'); // Add a console log for debugging
        // Redirect to index.html
        window.location.href = 'index.html';
    } else {
        console.log('Nome de utilizador ou password invalido.'); // Add a console log for debugging
        alert('Nome de utilizador ou password invalido.');
    }
}
