let car1 = {
  id: "audi",
  marka: "BMW",
  model: "M5",
  horseForse: "123",
  year: 2015,
  color: "white",
  price: 20000
};

let car2 = {
  id: "bmw",
  marka: "Mercedes benz",
  model: "G Wagon",
  horsepower: "123HP",
  year: 2015,
  color: "white",
  price: 4000
};

let car3 = {
  id: "lexus",
  marka: "Audi",
  model: "A8",
  horsepower: "123HP",
  year: 2015,
  color: "white",
  price: 15000
};

let car4 = {
  id: "wolksvagen",
  marka: "BMW",
  model: "X6",
  horsepower: "123HP",
  year: 2015,
  color: "white",
  price: 18000
};


cars = [car1, car2, car3, car4];

let arrPrice = [];

function priceArray(cars){   
    for(let i = 0; i < cars.length; i++){
        arrPrice.push(cars[i].price);
    }
    return arrPrice;
}
console.log(priceArray(cars));


let possibleMinPrice = arrPrice[0];

let minPrice = calcMinPrice(arrPrice);
function calcMinPrice(arrPrice){ 
    for(i = 1; i < arrPrice.length; i++){
        if(possibleMinPrice > arrPrice[i]){
            possibleMinPrice = arrPrice[i];
        }
    }
    return possibleMinPrice;
}
console.log(minPrice);


function disableExpensiveCars(){
    enableCars();
    let expensiveCars = [];
    for(let i = 0; i < cars.length; i++){
      if(cars[i].price > minPrice){
        expensiveCars.push(cars[i]);
      }
    }
    for(let i = 0; i < expensiveCars.length; i++){
      document.getElementById(cars[i].id + "Button").disabled = true;
    }
}


// function disableMoreExpensiveCars(){
//     enableCars();
//     for(i = 0; i < cars.length; i++){
//         if(cars[i].price > minPrice){
//             document.getElementById(cars[i].id + "Button").disabled = true;
//         }
//     }
// }

function enableCars() {
    for (let i = 0; i < cars.length; i++) {
      document.getElementById(cars[i].id + "Button").disabled = false;
    }
}

function disableCars(){
    disableMoreExpensiveCars();
}





function calcAveragePrice(array) {
    let sum = 0;
  
    for (let i = 0; i < array.length; i++) {
      sum += array[i].price;
    }
    return sum / array.length;
}
 
function showAveragePrice(array) {
    alert(`Average Price is : ` + calcAveragePrice(array));
}







function displayDescription(carId) {
  let foundCar = findCarById(carId);
  let description = getDescription(foundCar);

  alert(description);
}

function findCarById(carId) {
  for(i=0; i< cars.length; i++) {
      if(cars[i].id === carId) {
          return cars[i];
      }
  }
}

function getDescription(car) {
  return `ამ მანქანას აქვს შემდეგი მახასიათებლები: \n
  მარკა - ${car.manufacturer}, \n
  ფერი - ${car.color}, \n
  მოდელი - ${car.model}, \n
  გამოშვების წელი - ${car.year}, \n
  ცხენის ძალა - ${car.horsepower}, \nფასი - ${car.price}`
};



function lessPrice(price) {
  let cars = [];
  for (let i = 0; i < cars.length; i++) {
    if (price > cars[i].price) cars.push(cars[i]);
  }
  return cars;
}

function getDescriptions(cars) {
  let descriptions = "";
  for (let i = 0; i < cars.length; i++) {
    descriptions = `Marka : ${cars[i].marka} , model : ${cars[i].model} , price : ${cars[i].price} \n`;
  }
  return descriptions;
}

function showButton() {
  let searchBar = document.getElementById("priceInput");
  let price = searchBar.value;
  let cars = lessPrice(price);
  let description = getDescriptions(cars);
  if (description) {
    alert(description);
  } else {
    alert("We dont have car, in this price");
  }
}