class Discount {
    calc(value) {
        return value * 0.9
    }
}

class Shipping {
    calc() {
        return 5
    }
}

class Fees {
    calc(value) {
        return value * 1.05
    }
}

class ShoppeFacadePatern {
    constructor(params) {
        this.discount = new Discount()
        this.shipping = new Shipping()
        this.fees = new Fees()
    }

    calc(price) {
        price = this.discount.calc(price)
        price = this.fees.calc(price)
        price += this.shipping.calc()

        return price
    }
}

function buy(price) {
    const shoppe = new ShoppeFacadePatern
    console.log(shoppe.calc(5000));
}

buy()