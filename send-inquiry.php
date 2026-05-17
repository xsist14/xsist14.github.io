<?php
header('Content-Type: application/json');

// IMPORTANT: Replace this with the real email address that should receive inquiries.
$to = 'YOUR-EMAIL-HERE';
$siteName = 'Connecting Compassionately';

function respond($success, $message, $statusCode = 200) {
    http_response_code($statusCode);
    echo json_encode(['success' => $success, 'message' => $message]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(false, 'Invalid request method.', 405);
}

// Honeypot spam trap. Real visitors will never fill this hidden field.
if (!empty($_POST['website'])) {
    respond(true, 'Thank you.');
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
    respond(false, 'Please complete the required fields.', 400);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'Please enter a valid email address.', 400);
}

// Keep submissions reasonable in length.
$name = mb_substr($name, 0, 100);
$email = mb_substr($email, 0, 150);
$phone = mb_substr($phone, 0, 50);
$message = mb_substr($message, 0, 3000);

$subject = 'New therapy inquiry from website';
$body = "New inquiry from {$siteName}\n\n";
$body .= "Name: {$name}\n";
$body .= "Email: {$email}\n";
$body .= "Phone: {$phone}\n\n";
$body .= "Message:\n{$message}\n";

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'From: Website Inquiry <no-reply@connectingcompassionately.org>';
$headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    respond(false, 'The server could not send the email.', 500);
}

respond(true, 'Thank you. Your inquiry has been sent.');
