$('#submit_btn').click(function() {
  var form = $('#kt_create_reservation_form')[0];
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
      url: 'modules/mail.php',
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
                  window.location.href = '../index.html'; // Redirect to index.html
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