$('#submit_btn').click(function() {
  var form = $('#kt_create_reservation_form')[0];
  var formData = new FormData(form);
  $.ajax({
      url: 'modules/mail.php',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(response) {
          Swal.fire({
              title: 'Success!',
              text: response, // or a specific message
              icon: 'success',
              confirmButtonText: 'Okay',
              allowOutsideClick: false // prevent closing alert by clicking outside
          }).then((result) => {
              if (result.isConfirmed) {
                  window.location.href = '../index.html'; // redirect to index.html
              }
          });
      },
      error: function(xhr, status, error) {
          console.error('Request failed. Status: ' + status);
      }
  });
});