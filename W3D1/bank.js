"use strict";
class Bank {
    constructor() {
        this._accounts = [];
    }
    static nextNumber = 0;

    getNextNumber() {
        this.nextNumber++;
        return this.nextNumber;
    }

    addAccount() {
        const newNumber = this.getNextNumber();
        const newAccount = new Account(newNumber);
        this._accounts.push(newAccount);
        return newNumber;
    }
    addSavingsAccount(interest) {
        const newNumber = this.getNextNumber();
        const newAccount = new SavingsAccount(newNumber, interest);
        this._accounts.push(newAccount);
        return newNumber;

    }
    addCheckingAccount(overdraft) {
        const newNumber = this.getNextNumber();
        const newAccount = new CheckingAccount(newNumber, overdraft);
        this._accounts.push(newAccount);
        return newNumber;
    }

    closeAccount(number) {
        let indexToRemove = 0;
        for (let i = 0; i < this._accounts.length(); i++) {
            if (this._accounts[i].getNumber() == number) {
                indexToRemove = i;
            }
        }
        delete this._accounts[indexToRemove];

    }
    accountReport() {
        let report = " ";
        for (let i = 0; i < this._accounts.length(); i++) {
            report += this._accounts[i].toSting() + "\n" ;
        }
        return report;
    }
    endOfMonth() {
        let report = " ";
        for (let i = 0; i < this._accounts.length(); i++) {
            report += this._accounts[i].endOfMonth() + "\n" ;
        }
        return report;
    }
}




