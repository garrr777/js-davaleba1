let car = {
    marka: "Audi",
    color: "white",
    model: "A4",
    year: 2019,
    horseForce: 190,
    price: 18000
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
    price: 20000
};

let cars = [car, car2, car3, car4];


let prices= [];

function priceArr(){
    for(i = 0; i < cars.length; i++){
        let currentPrice = cars[i].price;
        prices.push(currentPrice);
    }
        console.log(prices);
}
priceArr();


let maxPrice = prices[0];

function checkMaxPrice(){
    for(let i = 1; i < prices.length; i++){
        if(maxPrice < prices[i]){
            maxPrice = prices[i];
        }
    }
    console.log(maxPrice);
}
checkMaxPrice();