let numbers = [1,7,-3,9];

let biggestNumber = -100;

for(const element of numbers){
    if(element > biggestNumber){
        biggestNumber = element;
    }
}

console.log(biggestNumber);