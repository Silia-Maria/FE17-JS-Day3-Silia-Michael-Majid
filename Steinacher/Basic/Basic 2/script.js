let temperatur = Math.floor(Math.random()* 41) - 5;


let h1 = document.createElement('h1');
h1.textContent = temperatur;
console.log(temperatur + "C°");
if(temperatur < 10){
    console.log("The temperature is cold.");
    h1.style.backgroundColor = "aqua";
}else if(temperatur < 20){
    console.log("The temperature is okay.");
    h1.style.backgroundColor = "yellow";
}else{
    console.log("It's hot outside");
    h1.style.backgroundColor = "red";
}






document.body.appendChild(h1);

