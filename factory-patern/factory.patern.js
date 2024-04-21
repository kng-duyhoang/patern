class Car {
    constructor({
        name = 'Ford',
        doors = 4,
        price = '10 VND',
        customerInfor = {}
    }) {
        this.name = name
        this.doors = doors
        this.price = price
        this.customerInfor = customerInfor
    }
}

class Truck {
    constructor({
        name = 'Truck',
        doors = 10,
        price = '100 VND',
        customerInfor = {}
    }) {
        this.name = name
        this.doors = doors
        this.price = price
        this.customerInfor = customerInfor
    }
}

class ServiceLogistics {
    transportClass = Car
    getTranport = (customerInfor) => {
        return new this.transportClass(customerInfor)
    }
}

const carService = new ServiceLogistics()
console.log('CarService', carService.getTranport({
    customerInfor: {
        name: "GOld"
    }
}));

// Cach 1
// carService.transportClass = Truck
// Cach 2
class TruckService extends ServiceLogistics {
    transportClass = Truck
}

const carService2 = new TruckService()

console.log('CarService', carService2.getTranport({
    customerInfor: {
        name: "GOldzcx"
    }
}));