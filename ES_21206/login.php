<?php
$servername = "localhost";
$username = "ES_username";
$password = "ES_password";
$database = "ES";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve user input (use mysqli_real_escape_string to prevent SQL injection)
    $input_username = mysqli_real_escape_string($conn, $_POST["username"]);
    $input_password = mysqli_real_escape_string($conn, $_POST["password"]);

    // Use prepared statements to prevent SQL injection
    $query = "SELECT * FROM users WHERE username = ? AND password = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ss", $input_username, $input_password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Authentication successful
        // Redirect the user to the dashboard or another page
        header("Location: index.html");
        exit();
    } else {
        // Authentication failed
        // Redirect the user back to the login page with an error message
        header("Location: login.html?error=1");
        exit();
    }

    $stmt->close();
}

// Close the database connection
$conn->close();
?>
