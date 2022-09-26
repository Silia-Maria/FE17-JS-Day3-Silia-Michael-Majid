function getTemperature() {
    //Add image dynamically
    const temperture = Math.floor(Math.random() * 50) - 10;
    // console.log(temper);

    let indicator = getTempertureIndicator(temperture);
    let lable = createLable(temperture, indicator);
    
    let image = createImage(indicator);
    const divTemp = document.getElementById('temper');
    divTemp.appendChild(image);
    divTemp.appendChild(lable);
}

function getTempertureIndicator(temperture) {
    let indicator;
    if(temperture < 6) {
        indicator = 'freezing';
    } else if(temperture < 10) {
        indicator = 'cold';
    } else if(temperture < 16) {
        indicator = 'pleasant';
    } else if(temperture < 21) {
        indicator = 'warm';
    } else {
        indicator = 'hot'
    }
    return indicator;
}
function createImage(indicator) {
    const image = document.createElement("img");
    let img = "";
    switch (indicator) {
        case 'freezing': img = "freezing.jpg";  break;
        case 'cold': img = "cold.jpg";              break;
        case 'pleasant': img = "pleasant.jpg";      break;
        case 'warm': img = "warm.jpg";              break;
        case 'hot': img = "hot.jpg";                break;
        default: img = "thander.jpg";              break;
    }
    image.src = "image/" + img;
    // image.src = `image/${img}`;
    image.style.width = "30%";
    return image; 
}
function createLable(temperture, indicator) {
    const paragraph = document.createElement("p");
    paragraph.classList.add("lable");
    paragraph.innerHTML = `The Temerture is ${temperture} degrees and it is ${indicator}.`;
    return paragraph;
}
// getTemperature();
