// Challange
// 2 Arrays

let students = ["John", "Jane"];
let mathGrades = [70, 85];

//Button
var button = document.getElementById("addButton");

// click the button and the function "addStudent" is used.
button.addEventListener("click", addStudent);


// for new input
function addStudent() {
    let text = document.createElement("p");
    let studentName = document.getElementById("name").value;
    let grade = document.getElementById("grades").value;

    if (grade < 60) {
        text.style.backgroundColor = "red";

    } else if (grade < 70) {
        text.style.backgroundColor = "yellow";
    } else {
        text.style.backgroundColor = "green";
    }


    //push 
    students.push(studentName);
    mathGrades.push(grade);

    text.textContent = studentName + " has reached " + grade + " points in Math this season.";
    document.body.appendChild(text);
}


// for existing array:

for (let i in mathGrades) {
    let para = document.createElement("p");
    para.textContent = students[i] + " has reached " + mathGrades[i] + " points in Math this season.";
    console.log(para);
    if (mathGrades[i] < 60) {
        para.style.backgroundColor = "red";

    } else if (mathGrades[i] < 70) {
        para.style.backgroundColor = "yellow";
    } else {
        para.style.backgroundColor = "green";
    }
    document.body.appendChild(para);
}


console.log(students);