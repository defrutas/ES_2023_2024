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

// Function to add a new row to the table
function addNewRow() {
    // Retrieve existing data from local storage
    var existingData = JSON.parse(localStorage.getItem('inventoryData')) || [];

    // Define the new row data
    var newRowData = {
        material: 'New Material',
        quantity: 0,
        price: '0.00 €/kg'
    };

    // Add the new row data to the existing data
    existingData.push(newRowData);

    // Save the updated data to local storage
    localStorage.setItem('inventoryData', JSON.stringify(existingData));

    // Render the table with updated data
    renderTable();
}

// Function to render the table with data from local storage
function renderTable() {
    var tableBody = document.getElementById('inventoryBody');
    
    // Retrieve data from local storage
    var rowData = JSON.parse(localStorage.getItem('inventoryData')) || [];

    // Clear existing rows
    tableBody.innerHTML = '';

    // Add rows based on the retrieved data
    rowData.forEach(function(data) {
        var newRowHtml = `
            <tr>
                <td>${data.material}</td>
                <td>
                    <div class="progress-container">
                        <div class="progress-bar"></div>
                        <div class="progress-text">${data.quantity}</div>
                    </div>
                </td>
                <td>${data.price}</td>
                <td><button class="request-button" onclick="requestMore('${data.material}')">Fazer Pedido</button></td>
            </tr>
        `;
        tableBody.innerHTML += newRowHtml;
    });
}