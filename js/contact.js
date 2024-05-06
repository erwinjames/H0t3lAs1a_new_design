$('#web_contact_submit').click(function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    var form = $('#web_contact')[0];
    var formData = new FormData(form);

    // Validation check to ensure required fields are not blank
    var contactName = formData.get("contact_Name");
    var contactEmail = formData.get("contact_email");
    var contactPhone = formData.get("contact_phone");
    var contactMessage = formData.get("contact_message");

    if (!contactName || !contactEmail || !contactPhone || !contactMessage) {
        Swal.fire({
            title: 'Error',
            text: 'Please fill out all required fields.',
            icon: 'warning',
            confirmButtonText: 'Okay'
        });
        return; // Stop form submission if validation fails
    }

    // Show a loading alert while the AJAX request is processed
    Swal.fire({
        title: 'Please wait...',
        text: 'Submitting Query',
        icon: 'info',
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
            Swal.showLoading();
        }
    });

    $.ajax({
        url: 'reservation/modules/contact.php',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
            Swal.close(); // Close the loading alert
  
            Swal.fire({
                title: 'Success!',
                text: response, // Or a specific success message
                icon: 'success',
                confirmButtonText: 'Okay',
                allowOutsideClick: false
            }).then((result) => {
                if (result.isConfirmed) {
                    form.reset(); // Reset the form fields after successful submission
                }
            });
        },
        error: function(xhr, status, error) {
            Swal.close(); // Close the loading alert if there's an error
  
            Swal.fire({
                title: 'Error',
                text: 'An error occurred: ' + error,
                icon: 'error',
                confirmButtonText: 'Okay'
            });
        }
    });
});
