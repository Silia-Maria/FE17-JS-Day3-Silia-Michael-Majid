const br = "<br>";
const hr = "<hr>";
/////////////////////////////////////////// BASIC ///////////////////////////////////////////
// ex 1 | Highest value in an array
// Create a program to find the highest value in an array. 
// E.g. If we have the following values 1, 7, -3, 9 we should only get the highest value, number 9.

let nums = [1, 7, -3, 9];
let max = 0;
for(let i=0; i < nums.length; i++) {
    if(max < nums[i])
        max = nums[i];
}
document.write("the highest value in an array is : " + max);
document.write(hr);
//------------------------------------------------------------------------------------------------
// ex 2 | Temperature v2.0
// Now when you have program Temperature v1.0 done from the other day, it is time to upgrade it to 
// the version 2.0. Now you should create a nice looking responsive front-end for your program 
// (mobile friendly) and create more messages (e.g. if the temperature is above 32c output
//  "The weather is hot" etc.) and you should display a proper image for the current weather condition.

function howWeather() {
    let temper = Math.floor( (Math.random() * 60) -10);
    if (temper < 11) {
        document.write("The weather is cold: " + temper);
    } else if(temper > 11 && temper < 30) {
        document.write("The weather is moderate: " + temper);
    } else {
        document.write("The weather is HOOOOOT: " + temper);        
    }
    document.write(hr);
}
howWeather();
// SHOW TEPERTURE AS IMAGE:
getTemperature();

/////////////////////////////////////////// Intermediate ///////////////////////////////////////////
// ex 1 | Compare two numbers
// Create a JavaScript program that will show the average grade for each student.
// Here are the points for each student:
// Martin = 76
// Thomas = 85
// Klaus = 65
// Manija = 93
// David = 81

// Based on their points, output the grade, according to the following table:

// < 60 F
// < 70 D
// < 80 C
// < 90 B
// < 100 A

// Finally, calculate the class average and output it (e.g. if the class average is 74 points,
//  their average grade will be C).
let colors = ["red","blue","green"];
colors.forEach((value,index)=> {
//    console.log("the value of the element is : " + value);
//    console.log("the index of the element is : " + index);
   document.write("the value of the element is : " + value + br);
   document.write("the index of the element is : " + index + br);
});
document.write(hr);

function avrageGrades() {
    // let obj = {Martin: 76, Thomas: 85, Klaus: 65, Maria: 93, Manija: 93};
    // console.log(obj);
    // console.log(Array.isArray(obj));

        // document.write(arr.length + br);
    // document.write(arr[0] + br);
    // document.write(arr[1] + br);

    let names = ['Martin', 'Thomas', 'Klaus', 'David', 'Manija'];
    let grades = [76, 85, 65, 93, 81];
    let grade = 'unklar';
    document.write(" - GRADES IN NUMBERS:" + br);

    for(let i=0; i < names.length; i++) {
        document.write(names[i] + " has the grade: " +grades[i] + br);
    }
    document.write(br);
    document.write(" - GRADES IN LETTERS:" + br);
    for(let i=0; i < grades.length; i++) {
        // if(grades[i] < 60) {
        //     grade = "F";
        // } else if(grades[i] < 70) {
        //     grade = "D";
        // } else if(grades[i] < 80) {
        //     grade = "C";
        // } else if(grades[i] < 90) {
        //     grade = "B";
        // } else if(grades[i] < 100) {
        //     grade = "A";
        // } else {
        //     grade = "UNKLAR";
        // }

        // WHEN WE WANT TO USE SWITCH:

        let num = grades[i];
        console.log(typeof(num));
        switch(true) { // IT HAS TO BE TRUE!!! because we check s condition!
            case (num < 60):     grade = "F";    break; 
            case (num < 70):     grade = "D";    break; 
            case (num < 80):     grade = "C";    break; 
            case (num < 90):     grade = "B";    break; 
            case (num < 100):    grade = "A";    break; 
            default:             grade = "UNKLAR"; break; 
         }

        document.write(names[i] + " has the grade: " +grade + br);
    }

    // for(let i=0; i < arr.length; i++) {
    //     console.log(arr[i]);
    //     document.write("test" + br);
    //     document.write(arr[i] + br);
    //     document.write(arr[i][i] + br);
    // }
    document.write(hr);
}
avrageGrades();

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
// ******************** SAMPLES: ********************
// Prints "a, b, c"
// ['a', 'b', 'c'].forEach(function callback(v) {
//     console.log(v);
//   });

// OR:

// The first parameter to the callback is the array value. The 2nd parameter is the array 
// index. That's the current position in the array the forEach() loop is at.

// Prints "0: a, 1: b, 2: c"
// ['a', 'b', 'c'].forEach(function callback(value, index) {
//   console.log(`${index}: ${value}`);
// });
//------------------------------------------------------------------------------------------------
