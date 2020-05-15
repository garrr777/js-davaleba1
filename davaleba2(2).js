let car = {
    marka: "Audi",
    color: "white",
    model: "A4",
    year: 2019,
    horseForce: 190,
    price: 20000
};

let car2 = {
    marka: "Bmw",
    color: "black",
    model: "f10",
    year: 2015,
    horseForce: 300,
    price: 12000
};
let car3 = {
    marka: "Lexus",
    color: "white",
    model: "LC",
    year: 2011,
    horseForce: 290,
    price: 10000
};
let car4 = {
    marka: "Wolksvagen",
    color: "blue",
    model: "A4",
    year: 2014,
    horseForce: 190,
    price: 18000
};

let cars = [];
cars.push(car);
cars.push(car2);
cars.push(car3);
cars.push(car4);


for(i = 0; i < cars.length; i++){
    if(cars[i].price < 15000){
        console.log(cars[i]);
    }else{
        console.log(`we don't have such car`);
    }
}