//variable declaration

var question1 = {
    qText: "Choose the statement which is equivalent to the following (i >= 8 && i <= 20)",
    answerA: "(!(i >= 8 || i <= 20))",
    answerB: "(!i < 8 || !i > 20)",
    answerC: "(!i < 8 && !i > 20)",
    answerD: "(!(i >= 8 && i <=20))",
    value: "b"
}

var question2 = {
    qText: "Is the following statement true or false? (\"2\" == 2)",
    answerA: "False, because \"2\" is a string and 2 is a number.",
    answerB: "False, becuase \"2\" and 2 have different values.",
    answerC: "True, because \"2\" and 2 are both numbers.",
    answerD: "True, because \"2\" and 2 have the same value.",
    value: "d"
}

var question3 = {
    qText: "Is the following true or false? (\"2\" < \"12\")",
    answerA: "False, becuase values are compared as strings, and \"1\" is less than \"2\".",
    answerB: "False, because a string cannot be greater than a string.",
    answerC: "True, because values are compared as strings, and \"12\" is longer than \"2\".",
    answerD: "True, because 12 is greater than 2.",
    value: "a"
}

var question4 = {
    qText: "Is the following true or false? (2 < \"12\")",
    answerA: "False, because the type of 2 and \"12\" are different.",
    answerB: "False, because values are compared as strings, and \"2\" is greater than \"1\".",
    answerC: "True, because values are compared as numbers, and 12 is more than 2",
    answerD: "True, because values are compared as strings, and \"12\" has more characters than \"2\"",
    value: "c"
}

var question5 = {
    qText: "Which of the following is not a primitive data typeS?",
    answerA: "string",
    answerB: "array",
    answerC: "boolean",
    answerD: "undefined",
    value: "b"
}

var question6 = {
    qText: "Complete the statement: In Javascript, every function is also a(n)...",
    answerA: "argument",
    answerB: "method",
    answerC: "parameter",
    answerD: "operator",
    value: "b"
}

var question7 = {
    qText: "What is the value of x? var x = true - 5;",
    answerA: "true-5",
    answerB: "false",
    answerC: "-4",
    answerD: "undefined",
    value: "c"
}

var question8 = {
    qText: "What is the value of x? var x = 12 + \"ten\"",
    answerA: "12ten",
    answerB: "22",
    answerC: "ten12",
    answerD: "undefined",
    value: "a"
}

var question9 = {
    qText: "Is the following statement true or false? var x = 0; boolean(x);",
    answerA: "False, becuase x holds no value.",
    answerB: "False, because x is a number and not a boolean.",
    answerC: "True, because x holds the value 0.",
    answerD: "True, because booleans are true until made false.",
    value: "a"
}

var question10 = {
    qText: "What will the following code display in the console? function myFunction(){return 13%5;} console.log(myFunction);",
    answerA: "13%5",
    answerB: "2",
    answerC: "3",
    answerD: "function myFunction(){return 12%5;}",
    value: "d"
}

var questionList = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];



//functions
function gameStart(){
    //main runtime function
    loadGame();
}

function loadGame(){
    //styles page to match gameplay template
    clearRows();

    $("#row1").html("<div class =\"col-sm-8 offset-2\" id=\"col11\"><div class=\"card border-dark text-center\"><div class=\"card-body\"><h4 class=\"card-title\" id=\"question-title\">Question</h4><i><p class=\"card-text\" id=\"question-text\">I'll be displaying a question to the user.</p></i></div></div></div><div class = \"col-sm-1\" id=\"col12\"><div class=\"card border-secondary text-center\"><div class=\"card-body\"><h6 class=\"card-title\">Time Left</h6><p class=\"card-text\" id=\"timer-text\">100</p></div></div></div>");

    $("#row2").html("<div class=\"col-sm-6\" id=\"col21\"><div class=\"card border-danger text-center\"><div class=\"card-body\"><p class=\"card-text\" id=\"a-text\">I hold the text for answer A.</p><button type=\"button\" class=\"btn btn-danger\" id=\"a-button\">A</button></div></div></div><div class=\"col-sm-6\" id=\"col22\"><div class=\"card border-warning text-center\"><div class=\"card-body\"><p class=\"card-text\" id=\"b-text\">I hold the text for answer B.</p><button type=\"button\" class=\"btn btn-warning\" id=\"b-button\">B</button></div></div></div>");

    $("#row3").html("<div class=\"col-sm-6\" id=\"col31\"><div class=\"card border-primary text-center\"><div class=\"card-body\"><p class=\"card-text\" id=\"c-text\">I hold the text for answer C.</p><button type=\"button\" class=\"btn btn-primary\" id=\"c-button\">C</button></div></div></div><div class=\"col-sm-6\" id=\"col32\"><div class=\"card border-success text-center\"><div class=\"card-body\"><p class=\"card-text\" id=\"d-text\">I hold the text for answer D.</p><button type=\"button\" class=\"btn btn-success\" id=\"d-button\">D</button></div></div></div>");
    $("#row4").html("<div class=\"d-grid gap-2 col-2 mx-auto\"><button type=\"button\" class=\"btn btn-outline-dark\" id=\"skip-button\">Skip</button></div>");

    $("h1").replaceWith("<h2>Javascript Code Quiz</h2>");
}

function loadRules(){
    //styles page to match how-to-play template
    clearRows();

    $("#row2").html("<div class =\"col-sm-8 mx-auto\"><div class=\"card border-dark text-center\"><div class=\"card-body\"><h2 class=\"card-title\" id=\"question-title\">How to Play</h2><i><p class=\"card-text\" id=\"question-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, pariatur similique quos sit libero eos alias. Rerum optio ullam, eos molestiae quibusdam dolore tempora harum nulla, deserunt alias error quam!</p></i></div></div></div>");

    $("#row3").html("<div class=\"d-grid gap-2 col-2 mx-auto\"><button type=\"button\" class=\"btn btn-outline-success\" id=\"back-button\">Back</button></div>");

    $("h1").replaceWith("<h2>Javascript Code Quiz</h2>");
}

function gameOver(){
    //styles page to match game_over template
    //triggers when timer hits zero
    clearRows();

    $("#row2").html("<div class =\"col-sm-8 mx-auto\"><div class=\"card border-dark text-center\"><div class=\"card-body\"><h2 class=\"card-title\" id=\"question-title\">Game Over</h2><i><p class=\"card-text\" id=\"question-text\">Try Again?</p></i></div></div></div>");

    $("#row3").html("<div class=\"d-grid gap-2 col-2 mx-auto\"><button type=\"button\" class=\"btn btn-outline-dark\" id=\"back-button\">Back</button></div>");

    $("h1").replaceWith("<h2>Javascript Code Quiz</h2>");
}

function loadScore(){
    //styles page to match log_score template
    clearRows();
}

function clearRows(){
    $(".row").empty();
}

//runtime
$("#start-button").on("click", gameStart);