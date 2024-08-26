// Function to update the date and time
function updateDateTime() {
    const now = new Date();

    // Format date
    const optionsDate = { weekday: 'long', month: 'long', day: 'numeric' };
    const dateStr = now.toLocaleDateString('en-US', optionsDate);

    // Format time
    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const timeStr = now.toLocaleTimeString('en-US', optionsTime);

    // Update date and time elements
    document.getElementById('date').textContent = dateStr;
    document.getElementById('time').textContent = timeStr;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initial call to display date and time immediately
updateDateTime();
