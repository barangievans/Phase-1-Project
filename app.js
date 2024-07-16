// Mock data (replace with actual API calls later)
let cows = [
    { id: 1, name: 'Bessie', breed: 'Holstein', age: 5 },
    { id: 2, name: 'MooMoo', breed: 'Jersey', age: 3 }
    // Add more cows as needed
];

let healthRecords = [
    { cowId: 1, date: '2024-07-15', healthStatus: 'Healthy' },
    { cowId: 2, date: '2024-07-14', healthStatus: 'Sick' }
    // Add more health records as needed
];

let financialReports = {
    revenue: 50000,
    expenses: 20000,
    profit: 30000
};

// Function to display cows in the Cow Inventory section
function displayCows() {
    let cowList = document.getElementById('cowList');
    cowList.innerHTML = '';
    cows.forEach(cow => {
        let cowElement = document.createElement('div');
        cowElement.innerHTML = `<p><strong>${cow.name}</strong> - Breed: ${cow.breed}, Age: ${cow.age}</p>`;
        cowList.appendChild(cowElement);
    });
}

// Function to display health records in the Health Monitoring section
function displayHealthRecords() {
    let healthRecordsContainer = document.getElementById('healthRecords');
    healthRecordsContainer.innerHTML = '';
    healthRecords.forEach(record => {
        let recordElement = document.createElement('div');
        recordElement.innerHTML = `<p>Cow ID: ${record.cowId}, Date: ${record.date}, Status: ${record.healthStatus}</p>`;
        healthRecordsContainer.appendChild(recordElement);
    });
}

// Function to display financial reports in the Financial Analysis section
function displayFinancialReports() {
    let financialReportsContainer = document.getElementById('financialReports');
    financialReportsContainer.innerHTML = `
        <p>Revenue: ${financialReports.revenue}</p>
        <p>Expenses: ${financialReports.expenses}</p>
        <p>Profit: ${financialReports.profit}</p>
    `;
}

// Initial display of data when the page loads
window.onload = function() {
    displayCows();
    displayHealthRecords();
    displayFinancialReports();
};

// Example: Add new cow functionality
document.getElementById('addCowBtn').addEventListener('click', function() {
    let newName = prompt('Enter the name of the new cow:');
    if (newName) {
        let newCow = {
            id: cows.length + 1,
            name: newName,
            breed: 'Unknown',
            age: 0
        };
        cows.push(newCow);
        displayCows();
    }
});

// Example: Add new health record functionality
document.getElementById('addHealthRecordBtn').addEventListener('click', function() {
    let cowId = prompt('Enter the cow ID for the new health record:');
    let date = prompt('Enter the date (YYYY-MM-DD) for the new health record:');
    let status = prompt('Enter the health status for the new health record:');
    if (cowId && date && status) {
        let newRecord = {
            cowId: parseInt(cowId),
            date: date,
            healthStatus: status
        };
        healthRecords.push(newRecord);
        displayHealthRecords();
    }
});
