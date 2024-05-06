<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Include autoload files
require '../../vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // first form
    $contact_Name = $_POST['contact_Name'];
    $contact_email = $_POST['contact_email'];
    $contact_phone = $_POST['contact_phone'];
    $contact_message = $_POST['contact_message'];

    // Create a PHPMailer instance
    $mail = new PHPMailer(true);
    try {
        $mail->SMTPDebug = SMTP::DEBUG_OFF; // Set to DEBUG_SERVER for troubleshooting
        $mail->isSMTP();
        $mail->Host       = 'mail.hotelasiacebu.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'it@hotelasiacebu.com'; // SMTP username
        $mail->Password   = 'sTxGLCy+ciHH'; // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Recipients
        $mail->setFrom('it@hotelasiacebu.com', 'Hotel Asia');
        $mail->addAddress('manugasewinjames@gmail.com', 'Hotel Front Office');

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Website Inquiry';
        $mail->Body    = '
        Name: '.$contact_Name.'
        <br>
        Email: '.$contact_email.'
        <br>
        Contact number: '.$contact_phone.'
        <br>
        Message: '.$contact_message.'
        <br>';
        // Send the email
        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }

} else {
    echo "Form submission error: Method not allowed.";
}

?>
