const testMovieticket = require('../solution/ticket-booking-bill-calculator');


describe("testMovieticket test", function() {
    //getPerComboPrice
    it("should return price of combo-1", async function() {
        const chai= await import('chai');
        const  expect=chai.expect;
        expect(testMovieticket.getPerComboPrice('Combo-1')).to.equal(150.00);
    });
    it("should return error message 'Invalid combo type' for invalid combo type value", async function() {
        const chai= await import('chai');
        const  expect=chai.expect;
        expect(testMovieticket.getPerComboPrice('Combo-5')).to.equal('Invalid combo type');
    });
        
    //getPerTicketPriceBySeatType
    it("should return per ticket price for gold seat", async function() {
        const chai= await import('chai');
        const  expect=chai.expect;
        expect(testMovieticket.getPerTicketPriceBySeatType('Gold')).to.equal(350.00);
       
    });
    it("should return error message 'Invalid seat type' for invalid seat type value", async function() {
        const chai= await import('chai');
        const  expect=chai.expect;
        expect(testMovieticket.getPerTicketPriceBySeatType('Bronze')).to.equal('Invalid seat type');
    });
    
    //calculateTotalTicketAmount
    it("should return total ticket amount for two sliver seat",async function() {
        const chai= await import('chai');
        const  expect=chai.expect;
        expect(testMovieticket.calculateTotalTicketAmount('Silver', 2)).to.equal(500.00);
    });
    it("should return error message if ticket count is zero",async function() {
        const chai= await import('chai');
        const  expect=chai.expect;
        expect(testMovieticket.calculateTotalTicketAmount('Silver', 0)).to.equal('Invalid input');
    });
    it("should return error message if seat type is invalid",async function() {
        const chai= await import('chai');
        const  expect=chai.expect;
        expect(testMovieticket.calculateTotalTicketAmount('Bronze', 2)).to.equal('Invalid input');
    });

    //calculateTotalComboAmount

    it("should return total ticket amount for two sliver seat",async function() {
        const chai= await import('chai');
        const  expect=chai.expect;
        expect(testMovieticket.calculateTotalComboAmount('Combo-2', 3)).to.equal(825.00);
    });
    it("should return error message if combo count is zero",async function() {
        const chai= await import('chai');
        const  expect=chai.expect;
        expect(testMovieticket.calculateTotalComboAmount('Combo-1', 0)).to.equal('Invalid input');
    });
    it("should return error message if seat type is invalid",async function() {
        const chai= await import('chai');
        const  expect=chai.expect;
        expect(testMovieticket.calculateTotalComboAmount('Combo-5', 2)).to.equal('Invalid input');
    });

    //calculateTotalBillAmount

    it("should return total booking amount for two plantinum seats and one combo",async function() {
        const chai= await import('chai');
        const  expect=chai.expect;
        expect(testMovieticket.calculateTotalBillAmount('Platinum', 2, 'Combo-1', 1)).to.equal(1050.00);
    });
    it("should return the error message if ticket count is negative",async function() {
        const chai= await import('chai');
        const  expect=chai.expect;
        expect(testMovieticket.calculateTotalBillAmount('Silver', -2, 'Combo-1', 1)).to.equal('Invalid input');
    });
    it("should return the error message if combo count is negative",async function() {
        const chai= await import('chai');
        const  expect=chai.expect;
        expect(testMovieticket.calculateTotalBillAmount('Silver', 2, 'Combo-1', -1)).to.equal('Invalid input');
    });

    //validateName
    it("should return error message if name is empty",async function() {
        const chai= await import('chai');
        const  expect=chai.expect;
        expect(testMovieticket.validateName('')).to.equal("Name must contain 1 or more characters");
    });
    it("should return error message if name has digit or special character",async function() {
        const chai= await import('chai');
        const  expect=chai.expect;
        expect(testMovieticket.validateName('Ajay123')).to.equal("Name must only contain alphabets");
    });
    it("should return value if name has only alphabets",async function() {
        const chai= await import('chai');
        const  expect=chai.expect;
        expect(testMovieticket.validateName('Ajay')).to.equal(true);
    });

    //validatePhoneNumber

    it("should return error message if phone number is empty",async function() {
        const chai= await import('chai');
        const  expect=chai.expect;
        expect(testMovieticket.validatePhoneNumber('')).to.equal("Phone Number must be 10 digits long");
    });

    it("should return error message if phone number has special characters",async function() {
        const chai= await import('chai');
        const  expect=chai.expect;
        expect(testMovieticket.validatePhoneNumber('abcdefghij')).to.equal("Phone Number must only contain digits.");
    });

    it("should return value if phone number is correct",async function() {
        const chai= await import('chai');
        const  expect=chai.expect;
        expect(testMovieticket.validatePhoneNumber('9876543211')).to.be.true;
    });

    
});
