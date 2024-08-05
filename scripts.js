document.addEventListener('DOMContentLoaded', function() {
    let today = new Date().toISOString().split('T')[0];
    document.getElementById('arrival').setAttribute('min', today);
    document.getElementById('departure').setAttribute('min', today);

    document.getElementById('bookingForm').addEventListener('submit', function(event) {
        let arrivalDate = document.getElementById('arrival').value;
        let departureDate = document.getElementById('departure').value;

        if (new Date(arrivalDate) < new Date(today)) {
            alert('Arrival date cannot be in the past.');
            event.preventDefault();
        } else if (new Date(departureDate) < new Date(arrivalDate)) {
            alert('Departure date cannot be before arrival date.');
            event.preventDefault();
        }
    });
});
