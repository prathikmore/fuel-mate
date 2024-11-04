function calculateAndShowMatches() {
    const location = document.getElementById("location").value.trim();
    const distance = parseFloat(document.getElementById("distance").value);
    const passengers = parseInt(document.getElementById("passengers").value) || 1;

    if (!location || isNaN(distance) || distance <= 0 || passengers <= 0) {
        alert("Please fill out all fields correctly with positive values.");
        return;
    }

    const fuelCostPerKm = 10; // Fixed rate of 10 INR per km
    const totalFuelCost = distance * fuelCostPerKm;
    const costPerPassenger = (totalFuelCost / passengers).toFixed(2);

    const matchMessage = `
        <div class="match-item">
            <h3>Match Found!</h3>
            <p><strong>Destination:</strong> ${location}</p>
            <p><strong>Distance:</strong> ${distance} km</p>
            <p><strong>Total Estimated Fuel Cost:</strong> ₹${totalFuelCost.toFixed(2)}</p>
            <p><strong>Cost per Passenger:</strong> ₹${costPerPassenger}</p>
        </div>
    `;

    document.getElementById("matches").innerHTML = matchMessage;

    // Show the matches section
    document.getElementById("matches-section").style.display = "block";
}
