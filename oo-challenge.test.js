jasmine.getEnv().configure({random: false}) //disabling random testing for garage tests

describe("Vehicle", function(){
  let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999); 
  it("should honk", function(){
    expect(myFirstVehicle.honk()).toEqual("Beep.");
  })
  it("should return a correct string", function(){
    expect(myFirstVehicle.toString()).toEqual("The vehicle is a Honda Monster Truck from 1999.");
  })
})

describe("Car", function(){
  let myFirstCar = new Car("Toyota", "Corolla", 2005);
  it("should return a correct string", function(){
    expect(myFirstCar.toString()).toEqual("The vehicle is a Toyota Corolla from 2005.");
  });
  it("should honk", function(){
    expect(myFirstCar.honk()).toEqual("Beep.");
  });
  it("should have four wheels", function(){
    expect(myFirstCar.numWheels).toEqual(4);
  })
})

describe("Motorcycle", function(){
  let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);  
  it("should return a correct string", function(){
    expect(myFirstMotorcycle.toString()).toEqual("The vehicle is a Honda Nighthawk from 2000.")
  })
  it("should honk", function(){
    expect(myFirstMotorcycle.honk()).toEqual("Beep.")
  })
  it("should revEngine", function(){
    expect(myFirstMotorcycle.revEngine()).toEqual("VROOM!!!")
  })
  it("should have two wheels", function(){
    expect(myFirstMotorcycle.numWheels).toEqual(2)
  })
})

describe("Garage", function(){
  let garage = new Garage(2);
  it("should initialize with an empty array of vehicles", function(){
    expect(garage.vehicles).toEqual([])
    
  })

  it("should add a new vehicle", function(){
    let newCar = new Car("Hyundai", "Elantra", 2015)
    expect(garage.add(newCar)).toEqual("Vehicle added!")
    expect(garage.vehicles.length).toEqual(1)
    expect(garage.vehicles[0]).toEqual(newCar)

  })
  
  it("should reject something that is not a vehicle", function(){
    expect(garage.add("Taco")).toEqual("Only vehicles are allowed in here!")
  })

  it("should add a second vehicle", function(){
    let newMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000)
    expect(garage.add(newMotorcycle)).toEqual("Vehicle added!");
    expect(garage.vehicles.length).toEqual(2);
    expect(garage.vehicles[01]).toEqual(newMotorcycle)  
  })

  it("should reject a vehicle beyond capacity", function(){
    expect(garage.add(new Motorcycle("Honda", "Nighthawk", 2001))).toEqual("Sorry, we're full.")
  })
})
