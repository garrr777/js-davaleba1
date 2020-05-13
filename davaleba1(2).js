let sum = 0;
let i = 0;

while(i < 50){
    if(i % 3 == 0){
        sum += i;
    }
    i++;
}

console.log(sum);

let sum2 = 0;
for(i = 0; i < 50; i++){
    if(i % 3 == 0){
        sum2 += i;
    }
}
console.log(sum2);