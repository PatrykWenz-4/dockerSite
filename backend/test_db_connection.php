<?php
$servername = "mysql";
$username = "user";
$password = "123";
$database = "myappdb";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully to the MySQL database!";

