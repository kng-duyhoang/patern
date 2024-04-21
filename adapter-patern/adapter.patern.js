class MomoAdapter {
    constructor(momoPayment) {
        this.momoPayment = momoPayment
    }

    payWithVisa(visaPayment) {
        const convertPayment = this.convertToVisaPayment(this.momoPayment)
        visaPayment.pay(convertPayment)
    }

    convertToVisaPayment(momoPayment) {
        const convertRate = 23000 // 1 USD = 23000
        const visaAmount = momoPayment.amount / convertRate
        return {
            cardNumber: momoPayment.cardNumber,
            expireDate: momoPayment.expireDate,
            cvv: momoPayment.cvv,
            amount: visaAmount
        }
    }
}

class VisaPayment {
    pay(payment) {
        console.log(`Paying ${payment.amount} USD with visa car ${payment.cardNumber}`);
    }
}

class MomoPayment {
    constructor(cardNumber, expireDate, cvv, amount) {
        this.cardNumber = cardNumber
        this.expireDate = expireDate
        this.cvv = cvv
        this.amount = amount
    }
}

const momoPayment = new MomoPayment('123213223', '20/22', '123', 1233123)

const momoAdapter = new MomoAdapter(momoPayment)

const visaPayment = new VisaPayment(momoAdapter)

momoAdapter.payWithVisa(visaPayment)