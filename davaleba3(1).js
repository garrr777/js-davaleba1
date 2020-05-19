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

let cars = [car, car2, car3, car4];


let prices = [];

for(i = 0; i < cars.length; i++){ 
    let currentPrice = cars[i].price;
    prices.push(currentPrice);   
}
console.log(prices);

let sum = 0;
for(i = 0; i < prices.length; i++){ 
    sum += prices[i];  
} 
console.log(`Ჩვენს მარაგში არსებული მანქანების საშუალო ფასი არის: ${sum / prices.length}`);