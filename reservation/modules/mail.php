<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Include autoload files
require '../../vendor/autoload.php';

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Extract credit card details from the form
    $cardName = $_POST['card_name'];
    $cardNumber = $_POST['card_number'];
    $expiryMonth = $_POST['card_expiry_month'];
    $expiryYear = $_POST['card_expiry_year'];
    $cvv = $_POST['card_cvv'];
    $cardType = identifyCardType($cardNumber);

    // Create text file with reservation details
    $textFile = 'reservation_details.txt';
    $fileHandle = fopen($textFile, 'w');
    fwrite($fileHandle, "Name On Card: $cardName\n");
    fwrite($fileHandle, "Card Type: $cardType\n");
    fwrite($fileHandle, "Card Number: $cardNumber\n");
    fwrite($fileHandle, "Expiration Date: $expiryMonth/$expiryYear\n");
    fwrite($fileHandle, "CVV: $cvv\n");
    fclose($fileHandle);

    // Create a ZIP file with a password
    $zipFile = 'reservation_details.zip';
    $zip = new ZipArchive();
    if ($zip->open($zipFile, ZipArchive::CREATE) === true) {
        // Set the password on the ZIP file
        $zip->setPassword('zipstrongpassword123'); // Use a strong password
        // Add the text file to the ZIP file
        $zip->addFile($textFile);
        $zip->setEncryptionName($textFile, ZipArchive::EM_AES_256); // AES-256 encryption
        $zip->close();
    }

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
        $mail->Subject = 'Reservation Details';
        $mail->Body    = '<p>Please find attached the reservation details.</p>';
        // Attach the ZIP file with the text file
        $mail->addAttachment($zipFile, 'reservation_details.zip');

        // Send the email
        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }

    // Delete the text and ZIP files to prevent unauthorized access
    unlink($textFile);
    unlink($zipFile);
} else {
    echo "Form submission error: Method not allowed.";
}

function identifyCardType($cardNumber) {
    $cardNumber = str_replace(' ', '', $cardNumber); // Remove spaces
    $prefix2 = substr($cardNumber, 0, 2);
    $prefix4 = substr($cardNumber, 0, 4);
    $prefix6 = substr($cardNumber, 0, 6);

    $visaPrefixes = ["4"];
    $mastercardPrefixes = ["51", "52", "53", "54", "55"];
    $amexPrefixes = ["34", "37"];
    $discoverPrefixes = ["6011", "622126", "622925", "644", "645", "646", "647", "648", "649", "65"];
    $jcbPrefixes = ["3528", "3529", "353", "354", "355", "356", "357", "358"];
    $dinersClubPrefixes = ["300", "301", "302", "303", "304", "305", "36", "38", "39"];
    $unionPayPrefixes = ["62"];

    // Identify card type
    if (in_array($prefix2, $visaPrefixes)) {
        return "Visa";
    } elseif (in_array($prefix2, $mastercardPrefixes)) {
        return "Mastercard";
    } elseif (in_array($prefix2, $amexPrefixes)) {
        return "American Express";
    } elseif (in_array($prefix4, $discoverPrefixes) || in_array($prefix6, $discoverPrefixes)) {
        return "Discover";
    } elseif (in_array($prefix4, $jcbPrefixes)) {
        return "JCB";
    } elseif (in_array($prefix2, $dinersClubPrefixes) || in_array($prefix4, $dinersClubPrefixes)) {
        return "Diners Club";
    } elseif (in_array($prefix2, $unionPayPrefixes)) {
        return "UnionPay";
    }
    
    return "Unknown";
}

?>
