let students = ["John", "Jane"];
let mathGrades = [70, 85];



var button = document.getElementById('addButton');


button.addEventListener("click", addStudent);




function addStudent(){
    let text = document.createElement('p');
    let studentName = document.getElementById('name').value;
    let grade = document.getElementById('grade').value;

    if(grade < 60 ){
        text.style.color = "red";
    }else if(grade < 70){
        text.style.color = "yellow";
    }else{
        text.style.color = "green";
    }

    students.push(studentName);
    mathGrades.push(grade);

    text.textContent = studentName + " has reached " + grade + " points in Math this season.";
    document.body.appendChild(text);
    
    
}


for(i in mathGrades){
    let studentText = document.createElement("p");
    
    studentText.textContent = students[i] + " has reached " + mathGrades[i] + " points in Math this season.";

    if(mathGrades[i] < 60 ){
        studentText.style.color = "red";
    }else if(mathGrades[i] < 70){
        studentText.style.color = "yellow";
    }else{
        studentText.style.color = "green";
    }
    document.body.appendChild(studentText);
}

