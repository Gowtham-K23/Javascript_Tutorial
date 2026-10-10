class Payment
{
    constructor(name)
    {
        this.name = name;
    }
    greet()
    {
        console.log("You are using " + this.name + " for payments");
    }
}

class Phonepe extends Payment
{
    constructor(name, amount)
    {
        super(name);
        this.amount = amount;
    }

    showPayment()
    {
        console.log("Amount " + this.amount + " processed using " + this.name)
    }
}

class Gpay extends Payment
{
    constructor(name, amount)
    {
        super(name);
        this.amount = amount;
    }

    showPayment()
    {
        console.log("Amount " + this.amount + " processed using " + this.name)
    }
}

let PP = new Phonepe("PhonePe", 50000)
PP.greet()
PP.showPayment()

let GP = new Phonepe("GPay", 50000)
GP.greet()
GP.showPayment()