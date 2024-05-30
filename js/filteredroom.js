$(document).ready(function() {
    const bedTypeOptions = {
        "Standard": ["semidouble size", "single", "double size", "kingsize"],
        "Deluxe": ["semidouble size", "single", "double size"],
        "Deluxe Plus": ["double"],
        "Junior Suite": ["queen size"],
        "Superior": ["queen size"],
        "Executive": ["twin", "queen size", "single"],
        "Economy Plus": ["double size", "semidouble size"]
    };

    $('#roomType').change(function() {
        const selectedRoomType = $(this).val();
        const $bedTypeSelect = $('#preBedType');
        $bedTypeSelect.empty();
        $bedTypeSelect.append('<option value="">Select a Preferred bed type...</option>');

        if (bedTypeOptions[selectedRoomType]) {
            bedTypeOptions[selectedRoomType].forEach(function(bedType) {
                $bedTypeSelect.append('<option value="' + bedType + '">' + capitalizeFirstLetter(bedType) + '</option>');
            });
        }
    });

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase().replace(/(\s\w)/g, function(m) { return m.toUpperCase(); });
    }
});