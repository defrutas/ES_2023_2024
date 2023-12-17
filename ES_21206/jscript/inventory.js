// Function to update progress bar and text
function updateProgressBar(id, quantity, maxQuantity) {
    const progressBar = document.getElementById(`progress-bar-${id}`);
    const progressText = document.getElementById(`progress-text-${id}`);
    
    const percentage = (quantity / maxQuantity) * 100;
    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `${quantity}kg/${maxQuantity}kg`;
}

// Function to save quantities to localStorage
function saveQuantities() {
    localStorage.setItem('quantities', JSON.stringify(quantities));
}

// Function to load quantities from localStorage
function loadQuantities() {
    const savedQuantities = JSON.parse(localStorage.getItem('quantities')) || [];
    if (savedQuantities.length === quantities.length) {
        quantities = savedQuantities;
    }
}

// Function to handle the "Request More" button click
function requestMore(id) {
    openModal(id);
}

// Function to open the quantity modal
function openModal(id) {
    const modal = document.getElementById('quantityModal');
    modal.style.display = 'block';
    currentItemId = id; // Save the current item ID for later use
}
  
// Function to close the quantity modal
function closeModal() {
    const modal = document.getElementById('quantityModal');
    modal.style.display = 'none';
}

// Function to confirm the quantity and update progress bars
function confirmQuantity() {
    const requestedQuantity = parseInt(document.getElementById('requestedQuantity').value, 10) || 0;

    if (requestedQuantity >= 0) {
        // Check if the sum exceeds 1000
        if (quantities[currentItemId - 1] + requestedQuantity > 1000) {
            alert('Error: The total quantity cannot exceed 1000.');
        } else {
            // Perform logic to update the quantity and progress bars
            quantities[currentItemId - 1] += requestedQuantity;
            updateProgressBars();
            saveQuantities(); // Save quantities to localStorage
            closeModal(); // Close the modal after confirming the quantity
            alert('Request sent!');

            // Add incoming transaction to Movimentos
            const itemName = document.getElementById(`progress-text-${currentItemId}`).textContent.split('/')[1].trim();
            const itemPrice = parseFloat(document.getElementById(`progress-text-${currentItemId}`).textContent.split('€')[0].trim());
            const transactionDate = new Date().toISOString().split('T')[0];

            const incomingTransaction = {
                type: 'Entrada',
                description: `Compra de ${itemName}`,
                quantity: requestedQuantity,
                value: -(requestedQuantity * itemPrice),
                date: transactionDate
            };

            // Call the function to add the transaction to Movimentos
            addTransactionToMovimentos(incomingTransaction);

            // Save transactions to local storage
            saveTransactionsToLocalStorage();
        }
    }
}

// Sample initial quantities and max quantities
var quantities = [220, 334, 240, 412, 100, 910, 250];
var maxQuantities = [1000, 1000, 1000, 1000, 1000, 1000, 1000];

// Function to update the progress bars
function updateProgressBars() {
    for (var i = 1; i <= quantities.length; i++) {
        var progressBar = document.getElementById('progress-bar-' + i);
        var progressText = document.getElementById('progress-text-' + i);
        var percentage = (quantities[i - 1] / maxQuantities[i - 1]) * 100;

        progressBar.style.width = percentage + '%';
        progressText.innerText = quantities[i - 1] + ' kg';

        // Remove existing color classes
        progressBar.classList.remove('low-quantity');

        // Change color to red when quantity is below 25%
        if (percentage < 25) {
            progressBar.classList.add('low-quantity');
        }
    }
}

// Function to simulate the decrease in quantity over time
function simulateQuantityDecrease() {
    setInterval(function () {
        for (var i = 0; i < quantities.length; i++) {
            quantities[i] = Math.max(quantities[i] - 1, 0);
        }
        updateProgressBars();
        saveQuantities(); // Save quantities to localStorage
    }, 1000); // Adjust the interval as needed (e.g., 1000ms = 1 second)
}

// Function to save transactions to localStorage
function saveTransactionsToLocalStorage() {
    localStorage.setItem('movimentos', JSON.stringify(transactions));
    console.log('Transactions saved to local storage:', transactions);
}

// Load quantities when the page is loaded
loadQuantities();

// Initial update of progress bars
updateProgressBars();

// Start simulating quantity decrease
simulateQuantityDecrease();
