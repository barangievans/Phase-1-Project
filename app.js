// Sample initial data
let cows = [
    { id: 1, name: 'Apollo', breed: 'Holstein-Friesian', age: 4},
    { id: 2, name: 'Ruby', breed: 'Holstein-Friesian', age: 3},
    { id: 3, name: 'Bessie', breed: 'Holstein-Friesian', age: 5},
    { id: 4, name: 'Daisy', breed: 'Jersey', age: 4 },
    { id: 5, name: 'Betsie', breed: 'Jersey', age: 4},
    { id: 6, name: 'Bella', breed: 'Jersey', age: 5},
    { id: 7, name: 'Bossy', breed: 'Ayrshire', age: 3 },
    { id: 8, name: 'Duke', breed: 'Ayrshire', age: 4 },
    { id: 9, name: 'Nelly', breed: 'Ayrshire', age: 4},
    { id: 10, name: 'Dolly', breed: 'Red Swiss', age: 3},
    { id: 11, name: 'Clara', breed: 'Red Swiss', age: 3},
    { id: 12, name: 'Rosie', breed: 'Red Swiss', age: 4},
    { id: 13, name: 'Lulu', breed: 'Brown Swiss', age: 5},
    { id: 14, name: 'Bubba', breed: 'Brown Swiss', age: 4},
    { id: 15, name: 'Ann', breed: 'Brown Swiss', age: 3},
];

let healthRecords = [
    // Initially, there are no records
];

// Selecting elements from the DOM
const selectCow = document.getElementById('selectCow');
const cowName = document.getElementById('cowName');
const cowBreedInput = document.getElementById('cowBreed');
const cowAgeInput = document.getElementById('cowAge');
const healthRecordsList = document.getElementById('healthRecords');
const revenueInput = document.getElementById('revenueInput');
const expensesInput = document.getElementById('expensesInput');
const profitSpan = document.getElementById('profit');
const addHealthRecordForm = document.getElementById('addHealthRecordForm');
const cowSelect = document.getElementById('cowSelect');
const healthDate = document.getElementById('healthDate');
const healthStatus = document.getElementById('healthStatus');
const financialForm = document.getElementById('financialForm');
const newCowNameInput = document.getElementById('newCowName');
const newCowBreedInput = document.getElementById('newCowBreed');
const newCowAgeInput = document.getElementById('newCowAge');
const addCowModal = document.getElementById('addCowModal');
const clearRecordsButton = document.getElementById('clearRecordsButton');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    displayInitialData();
    setupEventListeners();
});

// Display initial data
function displayInitialData() {
    displayCows();
    displayHealthRecords();
    populateCowSelect();
}

// Setup event listeners
function setupEventListeners() {
    addHealthRecordForm.addEventListener('submit', addNewHealthRecord);
    financialForm.addEventListener('submit', calculateProfit);
    selectCow.addEventListener('change', updateCowDetails); // Changed to selectCow
    clearRecordsButton.addEventListener('click', clearHealthRecords);
}

// Display cows in the cow inventory section
function displayCows() {
    selectCow.innerHTML = ''; // Clear existing options
    cows.forEach(cow => {
        const option = document.createElement('option');
        option.textContent = cow.name;
        option.value = cow.id;
        selectCow.appendChild(option);
    });
}

// Display health records in the health monitoring section
function displayHealthRecords() {
    healthRecordsList.innerHTML = '';

    // Filter out records that are empty or have no cowName
    const filteredRecords = healthRecords.filter(record => record.cowName);

    if (filteredRecords.length === 0) {
        const noRecordsMessage = document.createElement('p');
        noRecordsMessage.textContent = 'No health records available.';
        healthRecordsList.appendChild(noRecordsMessage);
    } else {
        filteredRecords.forEach(record => {
            const recordItem = document.createElement('div');
            recordItem.innerHTML = `<p>Cow: ${record.cowName}</p><p>Date: ${record.date}</p><p>Status: ${record.status}</p>`;
            healthRecordsList.appendChild(recordItem);
        });
    }
}

// Populate the cow select dropdown in the health monitoring section
function populateCowSelect() {
    cowSelect.innerHTML = '<option value="">Select a cow</option>';
    cows.forEach(cow => {
        const option = document.createElement('option');
        option.textContent = cow.name;
        option.value = cow.id;
        cowSelect.appendChild(option);
    });
}

// Update cow details in the cow inventory section
function updateCowDetails() {
    const selectedCowId = parseInt(selectCow.value); // Get the selected cow id
    const selectedCow = cows.find(cow => cow.id === selectedCowId); // Find cow by id
    if (selectedCow) {
        cowName.value = selectedCow.name; // Update cow name
        cowBreedInput.value = selectedCow.breed; // Update breed input
        cowAgeInput.value = selectedCow.age; // Update age input
    } else {
        cowName.value = ''; // Clear name input
        cowBreedInput.value = ''; // Clear breed input
        cowAgeInput.value = ''; // Clear age input
    }
}

// Add new health record
function addNewHealthRecord(event) {
    event.preventDefault();
    const selectedCowId = parseInt(cowSelect.value); // Get the selected cow id
    const selectedCow = cows.find(cow => cow.id === selectedCowId);
    if (!selectedCow || !healthDate.value || !healthStatus.value) {
        alert('Please select a cow and fill in all fields.');
        return;
    }

    const newRecord = {
        cowName: selectedCow.name,
        date: healthDate.value,
        status: healthStatus.value
    };
    healthRecords.push(newRecord);
    displayHealthRecords();
    clearHealthRecordForm();
}

// Clear health records
function clearHealthRecords() {
    healthRecords = [];
    displayHealthRecords();
}

// Calculate profit
function calculateProfit(event) {
    event.preventDefault();
    const revenue = parseFloat(revenueInput.value);
    const expenses = parseFloat(expensesInput.value);
    if (isNaN(revenue) || isNaN(expenses)) {
        alert('Please enter valid revenue and expenses.');
        return;
    }
    const profit = revenue - expenses;
    profitSpan.textContent = profit.toFixed(2);
}

// Add new cow
function saveNewCow() {
    const newCowName = newCowNameInput.value.trim();
    const newCowBreed = newCowBreedInput.value.trim();
    const newCowAge = parseInt(newCowAgeInput.value.trim());

    if (!newCowName || !newCowBreed || isNaN(newCowAge)) {
        alert('Please enter valid cow details.');
        return;
    }

    const newCow = {
        id: cows.length + 1,
        name: newCowName,
        breed: newCowBreed,
        age: newCowAge
    };
    cows.push(newCow);
    displayCows();
    closeModal();
}

// Close modal
function closeModal() {
    addCowModal.style.display = 'none';
    newCowNameInput.value = '';
    newCowBreedInput.value = '';
    newCowAgeInput.value = '';
}

// Show modal to add new cow
function addNewCow() {
    addCowModal.style.display = 'block';
}

// Clear health record form
function clearHealthRecordForm() {
    healthDate.value = '';
    healthStatus.value = '';
}



