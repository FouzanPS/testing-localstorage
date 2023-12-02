// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Mock database to store payment transactions
const transactions = [];

// Endpoint to initiate payment
app.post('/api/payment', (req, res) => {
    const { amount, cardNumber, expiryDate, cvv } = req.body;

    // Perform payment processing (you would integrate with a real payment gateway here)

    // Mock: Save the transaction details
    const transaction = { amount, cardNumber, expiryDate, cvv, status: 'success' };
    transactions.push(transaction);

    res.json({ message: 'Payment successful', transaction });
});

// Endpoint to get transaction history
app.get('/api/transactions', (req, res) => {
    res.json(transactions);
});

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
