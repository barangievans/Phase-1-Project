// Selecting elements from the DOM
const cowList = document.getElementById('cowList');
const healthRecordsList = document.getElementById('healthRecords');
const revenueInput = document.getElementById('revenue');
const expensesInput = document.getElementById('expenses');
const profitSpan = document.getElementById('profit');
const addCowForm = document.getElementById('addCowForm');
const addHealthRecordForm = document.getElementById('addHealthRecordForm');
const cowSelect = document.getElementById('cowSelect');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    displayInitialData();
    setupEventListeners();
});

// Display initial data
function displayInitialData() {
    displayCows();
    displayHealthRecords();
    displayFinancialData();
    populateCowSelect();
}

// Setup event listeners
function setupEventListeners() {
    addCowForm.addEventListener('submit', addNewCow);
    addHealthRecordForm.addEventListener('submit', addNewHealthRecord);
    document.getElementById('calculateProfitButton').addEventListener('click', calculateAndDisplayProfit);
    revenueInput.addEventListener('input', calculateAndDisplayProfit);
    expensesInput.addEventListener('input', calculateAndDisplayProfit);
}

// Display cows in the cow inventory section
function displayCows() {
    cowList.innerHTML = '';
    cows.forEach(cow => {
        const cowItem = document.createElement('div');
        cowItem.innerHTML = `<p>${cow.name} (${cow.breed}, ${cow.age} years old)</p>`;
        cowList.appendChild(cowItem);
    });
}

// Display health records in the health monitoring section
function displayHealthRecords() {
    healthRecordsList.innerHTML = '';
    healthRecords.forEach(record => {
        const recordItem = document.createElement('div');
        recordItem.innerHTML = `<p>Cow ID ${record.cowId} - Date: ${record.date}, Status: ${record.healthStatus}</p>`;
        healthRecordsList.appendChild(recordItem);
    });
}

// Display financial data in the financial analysis section
function displayFinancialData() {
    revenueInput.textContent = financialReports.revenue;
    expensesInput.textContent = financialReports.expenses;
    calculateAndDisplayProfit(); // Calculate and display profit initially
}

// Populate the cow select dropdown in the health record form
function populateCowSelect() {
    cowSelect.innerHTML = '';
    cows.forEach(cow => {
        const option = document.createElement('option');
        option.textContent = cow.name;
        option.value = cow.id;
        cowSelect.appendChild(option);
    });
}

// Add new cow
function addNewCow(event) {
    event.preventDefault();
    const newName = document.getElementById('cowName').value;
    const newBreed = document.getElementById('cowBreed').value;
    const newAge = parseInt(document.getElementById('cowAge').value);

    if (newName && newBreed && newAge) {
        const newCow = {
            id: cows.length + 1,
            name: newName,
            breed: newBreed,
            age: newAge
        };
        cows.push(newCow);
        displayCows();
        populateCowSelect();
        addCowForm.reset();
    } else {
        alert('Please fill out all fields.');
    }
}

// Add new health record
function addNewHealthRecord(event) {
    event.preventDefault();
    const selectedCowId = parseInt(cowSelect.value);
    const newDate = document.getElementById('healthDate').value;
    const newStatus = document.getElementById('healthStatus').value;

    if (selectedCowId && newDate && newStatus) {
        const newRecord = {
            cowId: selectedCowId,
            date: newDate,
            healthStatus: newStatus
        };
        healthRecords.push(newRecord);
        displayHealthRecords();
        addHealthRecordForm.reset();
    } else {
        alert('Please fill out all fields.');
    }
}

// Function to calculate profit
function calculateProfit(revenue, expenses) {
    return revenue - expenses;
}

// Main program
function main() {
    // Input revenue
    let revenue = parseFloat(prompt("Enter the revenue:"));

    // Input expenses
    let expenses = parseFloat(prompt("Enter the expenses:"));

    // Calculate profit using the function
    let profit = calculateProfit(revenue, expenses);

    // Display the profit
    console.log(`The profit is: ${profit}`);
}

// Run the main program
main();
