$(window).on('load', function() {
    setTimeout(function() {
        $("#loader-overlay").fadeOut(500, function() {
            $("#content").fadeIn(500); // Reveal the main content
            $(this).remove(); // Removes the loader overlay
        });
    }, 2000); // Optional delay after the page load
});