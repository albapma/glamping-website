document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    window.location.href = 'confirmation.html';
});

let today = new Date().toISOString().split("T")[0];
        document.getElementById("arrivalDate").setAttribute("min", today);
        document.getElementById("departureDate").setAttribute("min", today);