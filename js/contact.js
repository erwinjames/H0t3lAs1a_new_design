$('#web_contact_submit').click(function (event) {
    event.preventDefault();
    var form = $('#web_contact')[0];
    var formData = new FormData(form);
  
    // Show the loading alert
    Swal.fire({
        title: 'Please wait...',
        text: 'Submitting Reservation',
        icon: 'info',
        allowOutsideClick: false, // Prevents closing alert by clicking outside
        showConfirmButton: false, // No confirmation button during loading
        willOpen: () => {
            Swal.showLoading(); // Show a loading spinner
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
                text: response, // or a specific message
                icon: 'success',
                confirmButtonText: 'Okay',
                allowOutsideClick: false
            }).then((result) => {
                if (result.isConfirmed) {
                    console.log("location");
                    // window.location.href = '../index.html'; // Redirect to index.html
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