<?php
header('Content-Type: application/json');

$host = 'mysql-db';
$user = 'myuser';
$password = 'mypassword';
$database = 'myappdb';

// Connect to MySQL
$conn = new mysqli($host, $user, $password, $database);

// Check connection
if ($conn->connect_error) {
    die(json_encode(['error' => 'Database connection failed: ' . $conn->connect_error]));
}

$sql = "SELECT id, username FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $data = [];
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo json_encode(['message' => 'No data found']);
}
