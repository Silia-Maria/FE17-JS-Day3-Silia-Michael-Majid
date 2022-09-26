let points = [76,85,65,93,81];
let students = ['Martin', 'Thomas', 'Klaus', 'Maria', 'David'];
let grades = [];
let average = 0;
for(const element of points){
    if(element < 60){
        grades.push("F");
    }else if (element < 70){
        grades.push("D");
    }else if (element < 80){
        grades.push("C");
    }else if (element < 90){
        grades.push("B");
    }else{
        grades.push("A");
    }
    average += element;
}
average = average/points.length;

for(i in grades){
    let paragraph = document.createElement("p");
    paragraph.textContent = students[i] + " " + points[i] + " " + grades[i];
    document.body.appendChild(paragraph);
}

let averageElement = document.createElement("p");
averageElement.textContent = "Average: " + average;
    document.body.appendChild(averageElement);

console.log(grades);  