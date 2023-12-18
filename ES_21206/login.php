<?php
$servername = "localhost";
$username = "ES_username";
$password = "ES_password";
$database = "ES";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input_username = mysqli_real_escape_string($conn, $_POST["username"]);
    $input_password = mysqli_real_escape_string($conn, $_POST["password"]);

    $query = "SELECT * FROM users WHERE username = ? AND password = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ss", $input_username, $input_password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        header("Location: index.html");
        exit();
    } else {
        header("Location: login.html?error=1");
        exit();
    }

    $stmt->close();
}

$conn->close();
?>
