/*
-------------------------
Intermediate
------------------------
*/

// Exercise 1

/* Average Grade: 
 < 60 F
< 70 D
< 80 C
< 90 B
< 100 A
*/


let points = [76, 85, 65, 93, 81];
let names = ["martin", "thomas", "klaus", "maria", "david"];
let grades = [];
let average = 0;

for (const point of points) {
    if (point < 60) {
        grades.push("F");
    } else if (point < 70) {
        grades.push("D");

    } else if (point < 80) {
        grades.push("C");
    } else if (point < 90) {
        grades.push("B");
    } else {
        grades.push("A");
    }
    average += point;
}
console.log(grades);

for (i in grades) {
    let para = document.createElement("p");
    para.textContent = names[i] + ":" +
        " " + points[i] + " " + grades[i];
    document.body.appendChild(para);

}
average /= grades.length;
let averageItem = document.createElement("p");
averageItem.textContent = "Average: " + average;
document.body.appendChild(averageItem);