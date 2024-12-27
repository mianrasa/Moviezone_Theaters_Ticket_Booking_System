function getPerTicketPriceBySeatType(seatType) {
    switch (seatType) {
        case 'Silver':
            return 250.00;
        case 'Gold':
            return 350.00;
        case 'Platinum':
            return 450.00;
        default:
            return 'Invalid seat type';
    }
}

function getPerComboPrice(comboType) {
    switch (comboType) {
        case 'Combo-1':
            return 150.00;
        case 'Combo-2':
            return 275.00;
        case 'Combo-3':
            return 475.00;
        default:
            return 'Invalid combo type';
    }
}

function calculateTotalTicketAmount(seatType, ticketCount) {
    let pricePerTicket = getPerTicketPriceBySeatType(seatType);
    if (typeof pricePerTicket !== 'number' || ticketCount <= 0){ 
        return 'Invalid input';
    }
    return pricePerTicket * ticketCount;
}

function calculateTotalComboAmount(comboType, comboCount) {
    let pricePerCombo = getPerComboPrice(comboType);
    if (typeof pricePerCombo !== 'number' || comboCount <= 0) {
        return 'Invalid input';
    }
    return pricePerCombo * comboCount;
}

function calculateTotalBillAmount(seatType, ticketCount, comboType, comboCount) {
    let totalTicketAmount = calculateTotalTicketAmount(seatType, ticketCount);
    let totalComboAmount = calculateTotalComboAmount(comboType, comboCount);
    if (typeof totalTicketAmount !== 'number' || typeof totalComboAmount !== 'number') {
        return 'Invalid input';
    }
    return totalTicketAmount + totalComboAmount;
}
function validateName(name) {
    if(name.length === 0 || typeof name !== "string") {
        return "Name must contain 1 or more characters"
    } else if(!(/^[a-zA-Z]+$/.test(name))) {
        return "Name must only contain alphabets"
    } else {
        return true;
    }
}

function validatePhoneNumber(phoneNumber) {
    if(phoneNumber.toString().length === 0 || phoneNumber.toString().length !== 10){
        return "Phone Number must be 10 digits long"
    } else if(!(/^\d{10}$/.test(phoneNumber))) {
        return "Phone Number must only contain digits."
    } else {
        return true;
    }
}

function calculateGrandTotal() {
    let grandTotal = 0;
    let continueInput = true;
    
    while (continueInput) {
        let name = prompt("Enter your name:");
        if (!validateName(name)) {
            alert('Invalid name');
            continue;
        }

        let phoneNumber = prompt("Enter your phone number:");
        if (!validatePhoneNumber(phoneNumber)) {
            alert('Invalid phone number');
            continue;
        }

        let seatType = prompt("Enter seat type (Silver/Gold/Platinum):");
        let ticketCount = parseInt(prompt("Enter ticket count:"), 10);
        let comboType = prompt("Enter combo type (Combo-1/Combo-2/Combo-3):");
        let comboCount = parseInt(prompt("Enter combo count:"), 10);

        let totalBillAmount = calculateTotalBillAmount(seatType, ticketCount, comboType, comboCount);

        if (totalBillAmount === null) {
            alert('Invalid input for seat type, ticket count, combo type, or combo count');
            continue;
        }

        grandTotal += totalBillAmount;
        continueInput = prompt("Do you want to continue? (Y/N):").toUpperCase() === 'Y';
    }

    return grandTotal;
}


// do not delete/edit the below code, as it is written to export the functions to be tested
module.exports = {
    getPerComboPrice,
    getPerTicketPriceBySeatType,
    calculateTotalTicketAmount,
    calculateTotalComboAmount,
    calculateTotalBillAmount,
    calculateGrandTotal,
    validateName,
    validatePhoneNumber
}
