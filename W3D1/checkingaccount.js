"use strict";
class CheckingAccount extends Account {
    constructor(number, overdraftLimit) {
        super(number);
        this._overdraftLimit = overdraftLimit;
    }
    getOverdraftLimits() {
        return this._overdraftLimit;
    }
    setOverdraftLimits(value) {
        if (overdraftLimit < 0)
        throw new RangeError ("Overdraft Limit has to be equal or greater than zero");
        this._overdraftLimit = value;
    }

    withdraft(amount) {
        if (this.balance - amount > - this._overdraftLimit) {
            this._balance -= amount;
        }
    }
    toString() {
        return "CheckingAccount" + this._number + ": balance " + this._balance + "overdraftLimit" + this._overdraftLimit;
    }

    endOfMonth() {
        if (this.balance > 0){
            return "";
        }
        return "Warning, low balance CheckingAccount:"  + this._number + "balance:" + this._balance + "overdraft:" + this._overdraftLimit;
    }
}
