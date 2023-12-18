// List of predefined users
var users = [
    { username: 'flavio', password: '1234' },
    { username: 'adneiza', password: '1234' },
    { username: 'ezequiel', password: '1234' },
];

function attemptLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Introduzir utilizador e palavra-passe!');
        return;
    }

    var matchingUser = users.find(user => user.username === username && user.password === password);

    if (matchingUser) {
        console.log('Login successful!'); 
        window.location.href = 'index.html';
    } else {
        console.log('Utilizador ou palavra-passe inválida, Tente novamente!'); 
        alert('Utilizador ou palavra-passe inválida, Tente novamente!');
    }
}
