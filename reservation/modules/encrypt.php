<?php

function xor_crypt($input, $key) {
    $output = '';
    for ($i = 0; $i < strlen($input); $i++) {
        $output .= $input[$i] ^ $key[$i % strlen($key)];
    }
    return $output;
}

// Example encrypted key
$encrypted_key = 'bf7cf79088baf0c5785c279528b0facb2c3a6103';

// Key for decryption
$derived_decryption_key = 's3cur3key';

// Decrypt to get the original password
$zip_password = xor_crypt($encrypted_key, $derived_decryption_key);

// Ensure the decrypted password is correct
echo "Decrypted password: $zip_password";  // Check if this outputs 'zipstrongpassword123'

?>