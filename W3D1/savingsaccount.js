"use strict";
class SavingsAccount extends Account {
    constructor(number, interest) {
       super (number);
        this._interest = interest;
    }
    getInterest() {
        return this._interest;
    }
    setInterest(interest) {
        this._interest = interest;
    }

    addInterest (){
        const interest = (this._balance * this._interest)/100;
        this._balance = this._balance + interest;
        return interest;
    }
toString () {
    return "SavingsAccount" + this._number + ": balance " + this._balance + "interest" + this._interest; 
}
endOfMonth() {
    const interest = this.addInterest();
    return "Interest added SavingsAccount" + this.number + "balance:" + this._balance + "interest:" + interest;
}

}
