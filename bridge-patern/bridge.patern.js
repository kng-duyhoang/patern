class PaymentProcess {
    pay(amount) {
        console.log(`` ,amount);
    }
}

class VisaPaymentVisaProcess extends PaymentProcess {
    constructor(cardNumner, expiredDay, cvv) {
        super()
        this.cardNumner = cardNumner
        this.expiredDay = expiredDay
        this.cvv = cvv
    }

    pay(amount) {
        console.log(`Paying ${amount} USD with card ${this.cardNumner}...`);
    }
}

class MomoPaymentVisaProcess extends PaymentProcess {
    constructor(phoneNumber) {
        super()
        this.phoneNumber = phoneNumber
    }
}

class MemberRegister {
    constructor(paymentProcess) {
        this.paymentProcess = paymentProcess
    }

    register() {
        const amount = 100;
        this.paymentProcess.pay(amount)
        console.log(`Register for youtube`);
    }
}

const visaPaymentVisaProcess = new VisaPaymentVisaProcess('123123312', '22/22', '321')
const memberShip = new MemberRegister(visaPaymentVisaProcess)
memberShip.register()

// 
const momoPaymentVisaProcess = new MomoPaymentVisaProcess('093213123')
const memberShip2 = new MemberRegister(momoPaymentVisaProcess)
memberShip2.register()