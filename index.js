let score = 0;
let que1 = prompt("Which of the following is the smallest unit of data in a computer? \n A.Bit \n B.KB \n C.Nibble");
que1 = que1.toUpperCase();

if (que1 == "A" || que1 == "BIT") {
    score++;
}

let que2 = prompt("Which of the following service allows a user to log in to another computer somewhere on the Internet? \n A.E-mail\n B.UseNet \n C.Telnet");
que2 = que2.toUpperCase();

if (que2 == "C" || que2 == "TELNET") {
    score++;
}

let que3 = prompt("Which of the following devices provides the communication between a computer and the outer world? \n A.Compact \n B.I/O \n C.Drivers");
que3 = que3.toUpperCase();

if (que3 == "B" || que3 == "I/O") {
    score++;
}

let que4 = prompt("Which of the following can access the server? \n A.Web Client \n B.User \n C.Web Browser");
que4 = que4.toUpperCase();

if (que4 == "A" || que4 == "WEB CLIENT") {
    score++;
}

let que5 = prompt("Which of the following is known as the language made up of binary-coded instructions? \n A.High level \n B.Machine \n C.C");
que5 = que5.toUpperCase();

if (que5 == "B" || que5 == "MACHINE") {
    score++;
}
if (score == 0) {
    alert("fail");
} else {
    alert("your score is :" + score);
}

