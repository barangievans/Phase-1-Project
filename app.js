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
    { cowId: 1, date: '', healthStatus: 'Healthy' },
    { cowId: 2, date: '', healthStatus: 'Sick' }
];

// Selecting elements from the DOM
const selectCow = document.getElementById('selectCow');
const cowName = document.getElementById('cowName');
const cowBreed = document.getElementById('cowBreed');
const cowAge = document.getElementById('cowAge');
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
    selectCow.addEventListener('change', updateCowDetails);
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
    healthRecords.forEach(record => {
        const recordItem = document.createElement('div');
        recordItem.innerHTML = `<p>Cow ID ${record.cowId} - Date: ${record.date}, Status: ${record.healthStatus}</p>`;
        healthRecordsList.appendChild(recordItem);
    });
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

// Update cow details based on selected cow ID
function updateCowDetails() {
    const selectedCowId = parseInt(selectCow.value);
    const selectedCow = cows.find(cow => cow.id === selectedCowId);
    if (selectedCow) {
        cowName.value = selectedCow.name;
        cowBreed.value = selectedCow.breed;
        cowAge.value = selectedCow.age;
    } else {
        resetCowDetails();
    }
}

// Reset cow details form
function resetCowDetails() {
    cowName.value = '';
    cowBreed.value = '';
    cowAge.value = '';
}

// Add new health record
function addNewHealthRecord(event) {
    event.preventDefault();
    const selectedCowId = parseInt(cowSelect.value);
    const newDate = healthDate.value;
    const newStatus = healthStatus.value;

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

// Calculate profit
function calculateProfit(event) {
    event.preventDefault();
    const revenue = parseFloat(revenueInput.value);
    const expenses = parseFloat(expensesInput.value);

    if (!isNaN(revenue) && !isNaN(expenses)) {
        const profit = revenue - expenses;
        profitSpan.textContent = profit.toFixed(2);
    } else {
        alert('Please enter valid numbers for revenue and expenses.');
    }
}

// Show modal to add new cow
function addNewCow() {
    addCowModal.style.display = 'block';
}

// Save new cow from modal form
function saveNewCow() {
    const cowNameInput = newCowNameInput.value.trim();
    const cowBreedInput = newCowBreedInput.value.trim();
    const cowAgeInput = parseInt(newCowAgeInput.value);

    if (cowNameInput && cowBreedInput && !isNaN(cowAgeInput)) {
        const newCowId = cows.length + 1; // Generate a new ID (this is just for demonstration)
        const newCow = {
            id: newCowId,
            name: cowNameInput,
            breed: cowBreedInput,
            age: cowAgeInput
        };
        cows.push(newCow);
        displayCows();
        closeModal();
    } else {
        alert('Please fill out all fields with valid data.');
    }
}

// Close modal
function closeModal() {
    addCowModal.style.display = 'none';
    newCowNameInput.value = '';
    newCowBreedInput.value = '';
    newCowAgeInput.value = '';
}

// Clear the cow list
function clearList() {
    cows = []; // Empty the cows array
    displayCows(); // Update the display
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target === addCowModal) {
        closeModal();
    }
};
