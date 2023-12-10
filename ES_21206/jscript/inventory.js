// Function to update progress bar and text
function updateProgressBar(id, quantity, maxQuantity) {
    const progressBar = document.getElementById(`progress-bar-${id}`);
    const progressText = document.getElementById(`progress-text-${id}`);
            
    const percentage = (quantity / maxQuantity) * 100;
    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `${quantity}kg/${maxQuantity}kg`;
}

// Example: Update progress bar for the first row
updateProgressBar(1, 220, 1000);
updateProgressBar(2, 334, 1000);
updateProgressBar(3, 240, 1000);
updateProgressBar(4, 412, 1000);
updateProgressBar(5, 25, 1000);
updateProgressBar(6, 910, 1000);
updateProgressBar(7, 250, 1000);


// Function to handle the "Request More" button click
function requestMore(id) {
    // Perform the logic to send the request
    // For now, let's just show a notification
    alert('Request sent!');
}