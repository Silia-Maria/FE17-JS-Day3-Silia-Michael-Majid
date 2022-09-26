// Intermediate - Exercise 2
// Fizz buzz

for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        document.write("FizzBuzz <br>");
    } else if (i % 5 == 0) {
        document.write("Buzz <br>");

    } else if (i % 3 == 0) {
        document.write("Fizz <br>");
    } else {
        document.write(i + "<br>");
    }
}

// Exercise 2

let stars = " "
for (i = 1; i < 7; i++) {
    stars += "*";
    document.write(stars + "<br>");
}