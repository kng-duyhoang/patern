class Leader {
    receiveRequest(offer) {
        console.log(`::OFFER::`, offer);
    }
}

class Secretary {
    constructor(params) {
        this.leader = new Leader()
    }

    receiveRequest(offer) {
        this.leader.receiveRequest(offer)
    }
}

class Developer {
    constructor(offer) {
        this.offer = offer
    }

    applyFor(target) {
        target.receiveRequest(this.offer)
    }
}

const dev = new Developer('uppto 5k USD')

dev.applyFor(new Secretary())

