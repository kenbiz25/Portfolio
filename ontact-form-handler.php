<?php
// contact-form-handler.php

// Set headers to allow JSON POST requests
header("Content-Type: application/json");

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get the raw POST data
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

// Basic validation
$errors = [];

if (empty($data['name'])) $errors[] = "Name is required";
if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) $errors[] = "Valid email is required";
if (empty($data['subject'])) $errors[] = "Subject is required";
if (empty($data['message'])) $errors[] = "Message is required";

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['error' => implode(", ", $errors)]);
    exit;
}

// Email settings
$to = "kenethkiplagat.io@gmail.com"; // Change to your email
$subject = "[Website Contact] " . strip_tags($data['subject']);
$body = "You have received a new message from your website contact form.\n\n";
$body .= "Name: " . strip_tags($data['name']) . "\n";
$body .= "Email: " . strip_tags($data['email']) . "\n";
$body .= "Message:\n" . strip_tags($data['message']) . "\n";

// Additional headers
$headers = "From: " . strip_tags($data['email']) . "\r\n";
$headers .= "Reply-To: " . strip_tags($data['email']) . "\r\n";

// Send the email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send message.']);
}
?>
