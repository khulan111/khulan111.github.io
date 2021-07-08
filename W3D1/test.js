const expect = chai.expect;
  
describe('SavingsAccount', function () {
    describe('getInterest', function () {
        it('SavingsAccount getInterest test', function () {
            const sa = new SavingsAccount(1, 10);
            const result = sa.getInterest();
            expect(result).to.equal(10);
        });
        it('SavingsAccount getInterest negative test', function () {
            const sa = new SavingsAccount(1, -10);
            const result = sa.getInterest();
            expect(result).to.equal(-10);
        });
    });
    describe('setInterest', function () {
        it('SavingsAccount setInterest test', function () {
            const sa = new SavingsAccount(1, 10);
            sa.setInterest(12)
            const result = sa.getInterest();
            expect(result).to.equal(12);
        });
        it('SavingsAccount setInterest negative test', function () {
            const sa = new SavingsAccount(1, 10);
            sa.setInterest(-12)
            const result = sa.getInterest();
            expect(result).to.equal(-12);
        });
    });
    endOfMonth() {
        const interest = this.addInterest();
        return "Interest added SavingsAccount" + this.number + "balance:" + this._balance + "interest:" + interest;
    }

});
describe('Bank', function () {
    it('CheckingaddAccount()', () {
        const bank = new Bank();
        bank.
    });
});
