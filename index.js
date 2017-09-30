let store = {items: [],
            drivers: [],
            passengers: [],
            trips: []};



let driverId = 0

class Driver {
  constructor(name){
    this.name = name
    this.id = driverId++

    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(function(trip){
      return trip.driverId === this.id
    }.bind(this))
  };

  passengers() {
    return store.passengers.filter(function(passenger){
      return passenger.tripId === this.tripId
    }.bind(this))
  }
}

let passengerId=0

class Passenger {
  constructor(name){
    this.name = name;
    this.id = passengerId++

    store.passengers.push(this)
  }

  trips(){
    return store.trips.filter(function(trip){
      return trip.passengerId === this.id
    }.bind(this))
  }

  drivers(){
    return store.drivers.filter(function(driver){
      return driver.tripId === this.tripId
    }.bind(this))
  }

}

let tripId = 0

class Trip {
  constructor(driver, passenger){
    this.id = tripId++;
    store.trips.push(this);
    if (driver){
      this.driverId = driver.id;
    };
    if (passenger){
      this.passengerId = passenger.id;
    };
  };

  setPassenger(passenger){
    this.passengerId = passenger.id
  }

  passenger(){
    return store.passengers.find(function(passenger){
      return passenger.id === this.passengerId
    }.bind(this))
  }

  driver(){
    return store.drivers.find(function(driver){
      return driver.id === this.driverId;
    }.bind(this))
  }

}
