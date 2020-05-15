let car = {
    marka: "Audi",
    color: "white",
    model: "A4",
    year: 2019,
    horseForce: 190,
    price: 20000
};

console.log(`this car has characters: `);

for(let key in car){
    console.log(`${key} - ${car[key]}`);
}




// let arr = [5,1,3];
// let min = arr[0];
// for(let i = 1; i < arr.length; i++){
//     if(min > arr[i]){
//         min = arr[i];
//     }
// }
// console.log(min);

