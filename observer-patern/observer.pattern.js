class Observer {
    constructor(params) {
        this.name = params.name
    }

    updateStatus(location) {
        this.goToHelp(location)
    }

    goToHelp(location) {
        console.log(`${this.name}:::PING:::${JSON.stringify(location)}`);
    }

}

class Subject{
    constructor(params) {
        this.observerList = []
    }

    addObserver(observer) {
        this.observerList.push(observer)
    }

    notify(location) {
        this.observerList.forEach((ob) => {
            ob.updateStatus(location)
        })
    }
}

const subject = new Subject()

// pick
const riki = new Observer({name: 'riki'})
const sniper = new Observer({name: 'sniper'})

// add to team
subject.addObserver(riki)
subject.addObserver(sniper)

// push notify to team
subject.notify({long: '123', len: '324'})

