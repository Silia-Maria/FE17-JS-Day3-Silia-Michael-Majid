// Basic Exercise 

//Exercise 1

let numbers = [1, 7, -3, 9];
let max = 0;

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(max);

//Exercise 2



// Temperature


let tempNum = Math.floor(Math.random() * 41) - 5;
// document.write(tempNum);
// temp.textContent = tempNum;

// -> created the Variable


let msg = " ";
let h1 = document.createElement('h1');

if (tempNum < 10) {
    msg = "The weather is cold."
    console.log(msg);
    h1.style.backgroundColor = "blue";
} else if (tempNum < 20) {
    msg = "The weather is moderate."
    console.log(msg);
    h1.style.backgroundColor = "aqua";


} else {
    msg = "The weather is hot."
    console.log(msg);
    h1.style.backgroundColor = "red";
}


h1.textContent = tempNum + "°C"
document.body.appendChild(h1);
console.log(h1);


let p = document.createElement("p")
p.textContent = msg;
document.body.appendChild(p);
p.style.fontSize = "20px";