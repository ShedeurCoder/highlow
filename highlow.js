var number = Math.random();
number = number * 10;
number = Math.round(number);
var points = 0;
document.getElementById("points").innerHTML = points;

function lower() {
    if (number < 5) {
        document.getElementById("correct").innerHTML = "Correct! It was " + number;
        points++;
        document.getElementById("points").innerHTML = points;
    } else {
        document.getElementById("correct").innerHTML = "Wrong! It was " + number;
        points--;
        document.getElementById("points").innerHTML = points;
    }
    number = Math.random();
    number = number * 10;
    number = Math.round(number);
}
function higher() {
    if (number > 5) {
        document.getElementById("correct").innerHTML = "Correct! It was " + number;
        points++;
        document.getElementById("points").innerHTML = points;
    } else {
        document.getElementById("correct").innerHTML = "Wrong! It was " + number;
        points--;
        document.getElementById("points").innerHTML = points;
    }
    number = Math.random();
    number = number * 10;
    number = Math.round(number);
}
function equal() {
    if (number === 5) {
        document.getElementById("correct").innerHTML = "Correct! It was " + number;
        points++;
        document.getElementById("points").innerHTML = points;
    } else {
        document.getElementById("correct").innerHTML = "Wrong! It was " + number;
        points--;
        document.getElementById("points").innerHTML = points;
    }
    number = Math.random();
    number = number * 10;
    number = Math.round(number);
    }
function restart() {
    number = Math.random();
    number = number * 10;
    number = Math.round(number);
    document.getElementById("correct").innerHTML = "";
    points = 0;
    document.getElementById("points").innerHTML = points;
}