<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Include autoload files
require '../../vendor/autoload.php';

// Simple XOR-based encryption/decryption function
function xor_crypt($input, $key) {
    $output = '';
    $key_len = strlen($key);
    for ($i = 0; $i < strlen($input); $i++) {
        $output .= $input[$i] ^ $key[$i % $key_len];
    }
    return $output;
}
// Visible encrypted key
$encrypted_key = 'bf7cf79088baf0c5785c279528b0facb2c3a6103';  // Example encrypted key

// Decryption key (should be secure)
$derived_decryption_key = 's3cur3key';  // Key to decrypt the encrypted key

// Decrypt to get the original ZIP password
$zip_password = xor_crypt($encrypted_key, $derived_decryption_key);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // first form
    $account_name = $_POST['account_name'];
    $address = $_POST['address'];
    $gender = $_POST['gender'];
    $tel_num = $_POST['tel_num'];
    $email = $_POST['email'];
    // 2nd form
    $Arrival_month = $_POST['Arrival_Month'];
    $Arrival_Day = $_POST['Arrival_Day'];
    $Arrival_Time = $_POST['Arrival_Time'];
    $checkInTimezone = $_POST['checkInTimezone'];
    $Depart_Month = $_POST['Depart_Month'];
    $Depart_Day = $_POST['Depart_Day'];
    $Depart_Time = $_POST['Depart_Time'];
    $checkOutTimezone = $_POST['checkOutTimezone'];
    // Extract credit card details from the for
    $cardName = $_POST['card_name'];
    $cardNumber = $_POST['card_number'];
    $expiryMonth = $_POST['card_expiry_month'];
    $expiryYear = $_POST['card_expiry_year'];
    $cardType = $_POST['card_Type'];
    //  4th form
    $num_of_adults = $_POST['num_of_adults'];
    $num_of_child = $_POST['num_of_child'];
    $roomType = $_POST['roomType'];
    $num_rooms = $_POST['num_rooms'];
    $numGuest = $_POST['numGuest'];
    $preBedType = $_POST['preBedType'];
    $extrabedselect = $_POST['extrabedselect'];
    $flightAndArrival = $_POST['flightAndArrival'];
    // Create text file with reservation details
    $textFile = 'reservation_details.txt';
    $fileHandle = fopen($textFile, 'w');
    fwrite($fileHandle, "Name On Card: $cardName\n");
    fwrite($fileHandle, "Card Type: $cardType\n");
    fwrite($fileHandle, "Card Number: $cardNumber\n");
    fwrite($fileHandle, "Expiration Date: $expiryMonth/$expiryYear\n");
    fclose($fileHandle);


    // Create a ZIP file with the decrypted password
    $zipFile = 'reservation_details.zip';
    $zip = new ZipArchive();
    if ($zip->open($zipFile, ZipArchive::CREATE) === true) {
        // Use the decrypted password
        $zip->setPassword($zip_password);
        // Add the text file to the ZIP
        $zip->addFile($textFile);
        $zip->setEncryptionName($textFile, ZipArchive::EM_AES_256);  // AES-256 encryption
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
        $mail->Password   = ''; // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Recipients
        $mail->setFrom('it@hotelasiacebu.com', 'Hotel Asia');
        $mail->addAddress('manugasewinjames@gmail.com', 'Hotel Front Office');

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Reservation Details';
        $mail->Body    = '
                I would like to stay at your hotel
                <br>Below are the details of my stay.
                <br>Thank you.
                <br>
                <br>
                Name: '.$account_name.'
                <br>
                Gender: '.$gender.'
                <br>
                Address: '.$address.'
                <br>
                Phone number: '.$tel_num.'
                <br>
                E-mail: '.$email.'
                <br>
                <br>
                <h4><b>ARRIVAL AND DEPARTURE DATES</b></h4>
                <br>
                Check in: '.$Arrival_month.','.$Arrival_Day.'&nbsp;&nbsp;'.$Arrival_Time.'&nbsp;'.$checkInTimezone.'
                <br>
                Check out: '.$Depart_Month.','.$Arrival_Day.'&nbsp;&nbsp;'.$Depart_Time.'&nbsp;'.$checkOutTimezone.'
                <br>
                <br>
                <h4><b>Room Preferences</b></h4>
                <br>
                Number of adults: '.$num_of_adults.'
                <br>
                Number of child: '.$num_of_child.'
                <br>
                Room Type: '.$roomType.'
                <br>
                Number of rooms: '.$num_rooms.'
                <br>
                Number of Guest: '.$numGuest.'
                <br>
                Preferred Bed Type: '.$preBedType.'
                <br>
                Extra Bed: '.$extrabedselect.'
                <br>
                flight and Arrival: '.$flightAndArrival.'
                <br>
                <br>
                ';

        // Attach the ZIP file with the decrypted password
        $mail->addAttachment($zipFile, 'card_details.zip');

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
    // Remove spaces from the card number
    $cardNumber = str_replace(' ', '', $cardNumber);

    // Get the necessary prefixes
    $prefix2 = substr($cardNumber, 0, 2);
    $prefix4 = substr($cardNumber, 0, 4);
    $prefix6 = substr($cardNumber, 0, 6);

    // Define prefixes for different card types
    $visaPrefixes = ["4"];
    $mastercardPrefixes = ["51", "52", "53", "54", "55"];
    $amexPrefixes = ["34", "37"];
    $discoverPrefixes = ["6011", "622126", "622925", "644", "645", "646", "647", "648", "649", "65"];
    $jcbPrefixes = ["3528", "3529", "353", "354", "355", "356", "357", "358"];
    $dinersClubPrefixes = ["300", "301", "302", "303", "304", "305", "36", "38", "39"];
    $unionPayPrefixes = ["62"];
    $maestroPrefixes = ["50", "56", "57", "58", "639", "670", "677", "679"];
    $rupayPrefixes = ["60", "6521", "6522"];
    $mirPrefixes = ["2200", "2201", "2202", "2203", "2204"];
    $laserCardPrefixes = ["6304", "6706", "6771", "6709"];

    // Identify card type based on the prefixes
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
    } elseif (in_array($prefix2, $maestroPrefixes) || in_array($prefix4, $maestroPrefixes)) {
        return "Maestro";
    } elseif (in_array($prefix2, $rupayPrefixes) || in_array($prefix4, $rupayPrefixes)) {
        return "RuPay";
    } elseif (in_array($prefix4, $mirPrefixes)) {
        return "MIR";
    } elseif (in_array($prefix4, $laserCardPrefixes)) {
        return "LaserCard";
    }

    return "Unknown";
}


?>
