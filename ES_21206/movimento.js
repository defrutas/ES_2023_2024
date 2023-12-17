// Function to add a transaction to Movimentos
function addTransactionToMovimentos(transaction) {
    console.log('Adding transaction:', transaction);
    const section = document.querySelector('section');

    // Create a new div element for the transaction
    const transactionDiv = document.createElement('div');
    transactionDiv.classList.add('transaction', 'incoming');

    // Create transaction icon
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('transaction-icon');
    iconDiv.innerHTML = '<i class="fas fa-arrow-down"></i>';
    transactionDiv.appendChild(iconDiv);

    // Create transaction info
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('transaction-info');
    infoDiv.innerHTML = `
        <div class="transaction-label">${transaction.type}</div>
        <div class="transaction-description">${transaction.description}</div>
        <div class="transaction-quantity">${transaction.quantity} kg</div>
        <div class="transaction-value">${transaction.value.toFixed(2)} €</div>
    `;
    transactionDiv.appendChild(infoDiv);

    // Create transaction bar
    const barDiv = document.createElement('div');
    barDiv.classList.add('transaction-bar');
    transactionDiv.appendChild(barDiv);

    // Create transaction date
    const dateDiv = document.createElement('div');
    dateDiv.classList.add('transaction-date');
    dateDiv.textContent = transaction.date;
    transactionDiv.appendChild(dateDiv);

    // Append the new transaction to the section
    section.appendChild(transactionDiv);
}

// Example usage of addTransactionToMovimentos
const exampleTransaction = {
    type: 'Entrada',
    description: 'Compra de Algodão',
    quantity: 500,
    value: -800.00,
    date: '2023-12-01'
};

// Call the function with the example transaction
addTransactionToMovimentos(exampleTransaction);


