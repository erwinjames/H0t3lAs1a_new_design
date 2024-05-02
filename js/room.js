$(document).ready(function() {
    $("#economy_btn").on("click", function(e) {
        e.preventDefault(); // Prevent the default anchor action
        // Define custom HTML content for the SweetAlert2
        var customContent = `
            <div class="price-card">
                <div class="price-group">
                    <span class="translate">Alone ( おひとりで )</span>
                    <span class="price-label translate">2700/net</span>
                </div>
                <div class="price-group">
                    <span class="translate">For the two of you ( おふたりで )</span>
                    <span class="price-label translate">3200/net</span>
                </div>
            </div>
        `;
        // Use SweetAlert2 with a cancel button
        Swal.fire({
            title: "<h5 class='translate'>Economy Plus ( エコノミープラス )</h5>",
            html: customContent,
            width: 500,
            background: "#fff",
            confirmButtonColor: "#D6AD60",
            cancelButtonColor: "#d33",
            showCancelButton: true, // Add the Cancel button
            cancelButtonText: "<span class='translate'>Cancel (キャンセル)</span>", // Text for the Cancel button
            confirmButtonText: "<span class='translate'>Continue (続く)</span>",
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirect to the reservation page when "OK" is clicked
                window.location.href = "reservation/reservation.html";
            } else {
                // Optional: Do something else if Cancel is clicked
                console.log("Reservation was canceled.");
            }
        });
    });

    // 2nd

    $("#standard_btn").on("click", function(e) {
        e.preventDefault(); // Prevent the default anchor action
        // Define custom HTML content for the SweetAlert2
        var customContent = `
            <div class="price-card">
                <div class="price-group">
                <span class="translate">Alone ( おひとりで )</span>
                    <span class="price-label translate">2900/net</span>
                </div>
                <div class="price-group">
                    <span class="translate">For the two of you ( おふたりで )</span>
                    <span class="price-label translate">3500/net</span>
                </div>
            </div>
        `;
        // Use SweetAlert2 with a cancel button
        Swal.fire({
            title: "<h5 class='translate'>Standard ( スタンダード )</h5>",
            html: customContent,
            width: 500,
            background: "#fff",
            confirmButtonColor: "#D6AD60",
            cancelButtonColor: "#d33",
            showCancelButton: true, // Add the Cancel button
            cancelButtonText: "<span class='translate'>Cancel (キャンセル)</span>", // Text for the Cancel button
            confirmButtonText: "<span class='translate'>Continue (続く)</span>",
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirect to the reservation page when "OK" is clicked
                window.location.href = "reservation/reservation.html";
            } else {
                // Optional: Do something else if Cancel is clicked
                console.log("Reservation was canceled.");
            }
        });
    });

    // 3rd

    $("#deluxe_btn").on("click", function(e) {
        e.preventDefault(); // Prevent the default anchor action
        // Define custom HTML content for the SweetAlert2
        var customContent = `
            <div class="price-card">
                <div class="price-group">
                <span class="translate">Alone ( おひとりで )</span>
                    <span class="price-label translate">3200/net</span>
                </div>
                <div class="price-group">
                <span class="translate">For the two of you ( おふたりで )</span>
                    <span class="price-label translate">3800/net</span>
                </div>
            </div>
        `;
        // Use SweetAlert2 with a cancel button
        Swal.fire({
            title: "<h5 class='translate'>Deluxe ( デラックス )</h5>",
            html: customContent,
            width: 500,
            background: "#fff",
            confirmButtonColor: "#D6AD60",
            cancelButtonColor: "#d33",
            showCancelButton: true, // Add the Cancel button
            cancelButtonText: "<span class='translate'>Cancel (キャンセル)</span>", // Text for the Cancel button
            confirmButtonText: "<span class='translate'>Continue (続く)</span>",
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirect to the reservation page when "OK" is clicked
                window.location.href = "reservation/reservation.html";
            } else {
                // Optional: Do something else if Cancel is clicked
                console.log("Reservation was canceled.");
            }
        });
    });

    // 4th
    $("#deluxe_plus_btn").on("click", function(e) {
        e.preventDefault(); // Prevent the default anchor action
        // Define custom HTML content for the SweetAlert2
        var customContent = `
            <div class="price-card">
                <div class="price-group">
                <span class="translate">Alone ( おひとりで )</span>
                    <span class="price-label translate">3700/net</span>
                </div>
                <div class="price-group">
                <span class="translate">For the two of you ( おふたりで )</span>
                    <span class="price-label translate">4300/net</span>
                </div>
            </div>
        `;
        // Use SweetAlert2 with a cancel button
        Swal.fire({
            title: "<h5 class='translate'>Deluxe Plus ( デラックスプラス )</h5>",
            html: customContent,
            width: 500,
            background: "#fff",
            confirmButtonColor: "#D6AD60",
            cancelButtonColor: "#d33",
            showCancelButton: true, // Add the Cancel button
            cancelButtonText: "<span class='translate'>Cancel (キャンセル)</span>", // Text for the Cancel button
            confirmButtonText: "<span class='translate'>Continue (続く)</span>",
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirect to the reservation page when "OK" is clicked
                window.location.href = "reservation/reservation.html";
            } else {
                // Optional: Do something else if Cancel is clicked
                console.log("Reservation was canceled.");
            }
        });
    });

    // 5th

    $("#tatami_btn").on("click", function(e) {
        e.preventDefault(); // Prevent the default anchor action
        // Define custom HTML content for the SweetAlert2
        var customContent = `
            <div class="price-card">
                <div class="price-group">
                <span class="translate">Alone ( おひとりで )</span>
                    <span class="price-label translate">3700/net</span>
                </div>
                <div class="price-group">
                <span class="translate">For the two of you ( おふたりで )</span>
                    <span class="price-label translate">4300/net</span>
                </div>
            </div>
        `;
        // Use SweetAlert2 with a cancel button
        Swal.fire({
            title: "<h5 class='translate'>Tatami</h5>",
            html: customContent,
            width: 500,
            background: "#fff",
            confirmButtonColor: "#D6AD60",
            cancelButtonColor: "#d33",
            showCancelButton: true, // Add the Cancel button
            cancelButtonText: "<span class='translate'>Cancel (キャンセル)</span>", // Text for the Cancel button
            confirmButtonText: "<span class='translate'>Continue (続く)</span>",
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirect to the reservation page when "OK" is clicked
                window.location.href = "reservation/reservation.html";
            } else {
                // Optional: Do something else if Cancel is clicked
                console.log("Reservation was canceled.");
            }
        });
    });

    // 6th

    $("#superior_btn").on("click", function(e) {
        e.preventDefault(); // Prevent the default anchor action
        // Define custom HTML content for the SweetAlert2
        var customContent = `
            <div class="price-card">
                <div class="price-group">
                <span class="translate">Alone ( おひとりで )</span>
                    <span class="price-label translate">4100/net</span>
                </div>
                <div class="price-group">
                <span class="translate">For the two of you ( おふたりで )</span>
                    <span class="price-label translate">4800/net</span>
                </div>
            </div>
        `;
        // Use SweetAlert2 with a cancel button
        Swal.fire({
            title: "<h5 class='translate'>Superior ( スーペリア )</h5>",
            html: customContent,
            width: 500,
            background: "#fff",
            confirmButtonColor: "#D6AD60",
            cancelButtonColor: "#d33",
            showCancelButton: true, // Add the Cancel button
            cancelButtonText: "<span class='translate'>Cancel (キャンセル)</span>", // Text for the Cancel button
            confirmButtonText: "<span class='translate'>Continue (続く)</span>",
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirect to the reservation page when "OK" is clicked
                window.location.href = "reservation/reservation.html";
            } else {
                // Optional: Do something else if Cancel is clicked
                console.log("Reservation was canceled.");
            }
        });
    });

    // 7th

    $("#executive_btn").on("click", function(e) {
        e.preventDefault(); // Prevent the default anchor action
        // Define custom HTML content for the SweetAlert2
        var customContent = `
            <div class="price-card">
                <div class="price-group">
                <span class="translate">Alone ( おひとりで )</span>
                    <span class="price-label translate">5300/net</span>
                </div>
                <div class="price-group">
                <span class="translate">For the two of you ( おふたりで )</span>
                    <span class="price-label translate">6000/net</span>
                </div>
            </div>
        `;
        // Use SweetAlert2 with a cancel button
        Swal.fire({
            title: "<h5 class='translate'>Executive ( エグゼクティブ )</h5>",
            html: customContent,
            width: 500,
            background: "#fff",
            confirmButtonColor: "#D6AD60",
            cancelButtonColor: "#d33",
            showCancelButton: true, // Add the Cancel button
            cancelButtonText: "<span class='translate'>Cancel (キャンセル)</span>", // Text for the Cancel button
            confirmButtonText: "<span class='translate'>Continue (続く)</span>",
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirect to the reservation page when "OK" is clicked
                window.location.href = "reservation/reservation.html";
            } else {
                // Optional: Do something else if Cancel is clicked
                console.log("Reservation was canceled.");
            }
        });
    });
// 8th

    $("#junior_btn").on("click", function(e) {
        e.preventDefault(); // Prevent the default anchor action
        // Define custom HTML content for the SweetAlert2
        var customContent = `
            <div class="price-card">
                <div class="price-group">
                <span class="translate">Alone ( おひとりで )</span>
                    <span class="price-label translate">5600/net</span>
                </div>
                <div class="price-group">
                <span class="translate">For the two of you ( おふたりで )</span>
                    <span class="price-label translate">6400/net</span>
                </div>
            </div>
        `;
        // Use SweetAlert2 with a cancel button
        Swal.fire({
            title: "<h5 class='translate'>Junior Suite ( ジュニアスイート )</h5>",
            html: customContent,
            width: 500,
            background: "#fff",
            confirmButtonColor: "#D6AD60",
            cancelButtonColor: "#d33",
            showCancelButton: true, // Add the Cancel button
            cancelButtonText: "<span class='translate'>Cancel (キャンセル)</span>", // Text for the Cancel button
            confirmButtonText: "<span class='translate'>Continue (続く)</span>",
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirect to the reservation page when "OK" is clicked
                window.location.href = "reservation/reservation.html";
            } else {
                // Optional: Do something else if Cancel is clicked
                console.log("Reservation was canceled.");
            }
        });
    });
});