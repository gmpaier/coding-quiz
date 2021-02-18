//variable declaration

    // quiz question objects
var question1 = {
    qText: "Choose the statement which is equivalent to the following (i >= 8 && i <= 20)",
    responseA: "(!(i >= 8 || i <= 20))",
    responseB: "(!i < 8 || !i > 20)",
    responseC: "(!i < 8 && !i > 20)",
    responseD: "(!(i >= 8 && i <=20))",
    value: "b"
}

var question2 = {
    qText: "Is the following statement true or false? (\"2\" == 2)",
    responseA: "False, because \"2\" is a string and 2 is a number.",
    responseB: "False, becuase \"2\" and 2 have different values.",
    responseC: "True, because \"2\" and 2 are both numbers.",
    responseD: "True, because \"2\" and 2 have the same value.",
    value: "d"
}

var question3 = {
    qText: "Is the following true or false? (\"2\" < \"12\")",
    responseA: "False, because values are compared as strings, and \"1\" is less than \"2\".",
    responseB: "False, because a string cannot be greater than a string.",
    responseC: "True, because values are compared as strings, and \"12\" is longer than \"2\".",
    responseD: "True, because 12 is greater than 2.",
    value: "a"
}

var question4 = {
    qText: "Is the following true or false? (2 < \"12\")",
    responseA: "False, because the type of 2 and \"12\" are different.",
    responseB: "False, because values are compared as strings, and \"2\" is greater than \"1\".",
    responseC: "True, because values are compared as numbers, and 12 is more than 2",
    responseD: "True, because values are compared as strings, and \"12\" has more characters than \"2\"",
    value: "c"
}

var question5 = {
    qText: "Which of the following is not a primitive data type?",
    responseA: "string",
    responseB: "array",
    responseC: "boolean",
    responseD: "undefined",
    value: "b"
}

var question6 = {
    qText: "Complete the statement: In Javascript, every function is also a(n)...",
    responseA: "argument",
    responseB: "method",
    responseC: "parameter",
    responseD: "operator",
    value: "b"
}

var question7 = {
    qText: "What is the value of x? var x = true - 5;",
    responseA: "true-5",
    responseB: "false",
    responseC: "-4",
    responseD: "undefined",
    value: "c"
}

var question8 = {
    qText: "What is the value of x? var x = 12 + \"ten\"",
    responseA: "12ten",
    responseB: "22",
    responseC: "ten12",
    responseD: "undefined",
    value: "a"
}

var question9 = {
    qText: "Is the following statement true or false? var x = 0; boolean(x);",
    responseA: "False, becuase x holds no value.",
    responseB: "False, because x is a number and not a boolean.",
    responseC: "True, because x holds the value 0.",
    responseD: "True, because booleans are true until made false.",
    value: "a"
}

var question10 = {
    qText: "What will the following code display in the console? function myFunction(){return 13%5;} console.log(myFunction);",
    responseA: "13%5",
    responseB: "2",
    responseC: "3",
    responseD: "function myFunction(){return 12%5;}",
    value: "d"
}

var questionList = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

var q = 0; //question index
var answer; //stores correct response

var tval; //setInterval variable, timer interval aka tval
var count; //timer count

//letters array used for inputting user initials
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

var i = 0;  //first initial index
var j = 0;  //second initial index
var k = 0;  //third initial index

var userData = {    
    initials: "",
    score: ""
}

if (localStorage.getItem("quizScores") === null){
    var saveData = null;    //if there is no saved data
}
else {
    var saveData = JSON.parse(localStorage.getItem("quizScores"));  //if saved data, loads saved data
}

//functions
    
function gameStart(){   //main runtime function
    
    loadGame();
    q = 0;
   
    getQuestion(q);
    timer();
}

function getQuestion(x){    //loads next question and checks if user has finished quiz
    if (x < questionList.length){
        var currentQ = questionList[x];
        $("#question-text").text(currentQ.qText);
        $("#a-text").text(currentQ.responseA);
        $("#b-text").text(currentQ.responseB);
        $("#c-text").text(currentQ.responseC);
        $("#d-text").text(currentQ.responseD);
        answer = currentQ.value;

        //activates buttons in case they were disabled on a previous question
        $("#a-button").removeAttr("disabled");
        $("#b-button").removeAttr("disabled");
        $("#c-button").removeAttr("disabled");
        $("#d-button").removeAttr("disabled");
    }
    else {      //triggers win condition when no more questions
        victory();
    }
}

function timer(){     //main game timer
    count = 120;
    $("#timer-text").text(count);
    tval = setInterval(function(){
        if (count > 0){
            count--;
            $("#timer-text").text(count);
            $("#timer-text").css("color", "black");
        }
        else {
            clearInterval(tval);
            gameOver();
        }
    }, 1000);

}

function checkAnswer(){     //compares user answer to correct answer, subtracts time off counter if incorrect
    let userResponse = $(this).attr("value");
    if (userResponse === answer){
        q++;
        getQuestion(q);
    }
    else {
        count -= 5;
        $(this).attr("disabled", "true");
        if (count < 0){
            count = 0;
        }
        $("#timer-text").text(count);
        $("#timer-text").css("color", "red");
    }
}

function skipQuestion(){    //skips question, adds to end of queue
    questionList.push(questionList[q]);
    q++
    getQuestion(q);

}

function victory(){     //triggers on victory, clears timer
    clearInterval(tval);
    logScore();
    userData.score = count;
}

function nextLetter(){      //function for inputting initials, moves to next letter in alphabet
    switch (this.value){
        case "1":
            i++;
            if (i >= letters.length){
                i = 0;
                $("#init1").text(letters[i]);
            }
            else {
                $("#init1").text(letters[i]);
            }
            break;
        case "2":
            j++;
            if (j >= letters.length){
                j = 0;
                $("#init2").text(letters[j]);
            }
            else {
                $("#init2").text(letters[j]);
            }
            break;
        case "3":
            k++;
            if (k >= letters.length){
                k = 0;
                $("#init3").text(letters[k]);
            }
            else {
                $("#init3").text(letters[k]);
            }
            break;
        default:
            alert("There seems to be an error?");
    }
    
}

function prevLetter(){      //function for inputting initials, moves to prev letter in alphabet
    switch (this.value){
        case "1":
            i--;
            if (i < 0){
                i = 25;
                $("#init1").text(letters[i]);
            }
            else {
                $("#init1").text(letters[i]);
            }
            break;
        case "2":
            j--;
            if (j < 0){
                j = 25;
                $("#init2").text(letters[j]);
            }
            else {
                $("#init2").text(letters[j]);
            }
            break;
        case "3":
            k--;
            if (k < 0){
                k = 25;
                $("#init3").text(letters[k]);
            }
            else {
                $("#init3").text(letters[k]);
            }
            break;
        default:
            alert("There seems to be an error?");
    }

}

function saveScore(){       //saves score and initials on victory screen when user hits submit
    userData.initials = $("#init1").text()+$("#init2").text()+$("#init3").text();
    $("#initial-text").text(userData.initials);
    $("#score-text").text(userData.score);
    localStorage.setItem("quizScores", JSON.stringify(userData));
    $("#row2").empty();
    $("#row2").html("<h2>Your score has been saved!</h2>");   
}

function loadGame(){    //styles page to match gameplay template
    clearRows();

    $("#row1").html("<div class =\"col-sm-8 offset-2\" id=\"col11\"><div class=\"card border-dark text-center\"><div class=\"card-body\"><h4 class=\"card-title\" id=\"question-title\">Question</h4><i><p class=\"card-text\" id=\"question-text\"></p></i></div></div></div><div class = \"col-sm-1\" id=\"col12\"><div class=\"card border-secondary text-center\"><div class=\"card-body\"><h6 class=\"card-title\">Time Left</h6><p class=\"card-text\" id=\"timer-text\"></p></div></div></div>");

    $("#row2").html("<div class=\"col-sm-6\" id=\"col21\"><div class=\"card border-danger text-center\"><div class=\"card-body\"><p class=\"card-text\" id=\"a-text\"></p><button type=\"button\" class=\"btn btn-danger\" id=\"a-button\" value=\"a\">A</button></div></div></div><div class=\"col-sm-6\" id=\"col22\"><div class=\"card border-warning text-center\"><div class=\"card-body\"><p class=\"card-text\" id=\"b-text\"></p><button type=\"button\" class=\"btn btn-warning\" id=\"b-button\" value=\"b\">B</button></div></div></div>");

    $("#row3").html("<div class=\"col-sm-6\" id=\"col31\"><div class=\"card border-primary text-center\"><div class=\"card-body\"><p class=\"card-text\" id=\"c-text\"></p><button type=\"button\" class=\"btn btn-primary\" id=\"c-button\" value=\"c\">C</button></div></div></div><div class=\"col-sm-6\" id=\"col32\"><div class=\"card border-success text-center\"><div class=\"card-body\"><p class=\"card-text\" id=\"d-text\"></p><button type=\"button\" class=\"btn btn-success\" id=\"d-button\" value=\"d\">D</button></div></div></div>");

    $("#row4").html("<div class=\"d-grid gap-2 col-2 mx-auto\"><button type=\"button\" class=\"btn btn-outline-dark\" id=\"skip-button\">Skip</button></div>");

    $("h1").replaceWith("<h2>Javascript Code Quiz</h2>");
}

function loadScore(){   //styles page to match high-score template
    clearRows();

    $("#row1").html("<h1 id=\"high-score\">High Score</h1>");

    $("#row4").html("<div class=\"d-grid gap-2 col-2 mx-auto\"><button type=\"button\" class=\"btn btn-outline-dark\" id=\"back-button\">Back</button></div>");

    $("#row1, #row2, #row3").attr("class", "text-center");

    if (saveData === null){

        $("#row2").html("<p>No recorded scores found. Please note resetting browser cookies will delete any saved score.</p>");
        
    }

    else {
        
        $("#row2").html("<h2>User: <span id=\"initial-text\"></span></h2>");

        $("#row3").html("<h2>Score: <span id=\"score-text\"></span></h2>");
        
        $("#initial-text").text(saveData.initials);

        $("#score-text").text(saveData.score);
    }
}

function loadRules(){   //styles page to match how-to-play template
    
    clearRows();

    $("#row2").html("<div class =\"col-sm-8 mx-auto\"><div class=\"card border-dark text-center\"><div class=\"card-body\"><h2 class=\"card-title\" id=\"question-title\">How to Play</h2><i><p class=\"card-text\" id=\"question-text\">This is a coding quiz to test your javascript knowledge. Upon hitting start, you will be presented with a question and four answers. There are ten questions in total and you begin with two minutes on the timer. If an incorrect answer is chosen, the button is disabled and five seconds will be subtracted from the timer. A correct answer will bring the next question. At any point a question can be skipped by hitting the \"skip\" button, and the question will be added to the back of the queue. The quiz is completed when all questions are answered. Your score is equal to the time you have remaining. If the timer reaches zero, you will recieve a game over.</p></i></div></div></div>");

    $("#row3").html("<div class=\"d-grid gap-2 col-2 mx-auto\"><button type=\"button\" class=\"btn btn-outline-success\" id=\"back-button\">Back</button></div>");

    $("h1").replaceWith("<h2>Javascript Code Quiz</h2>");
}

function gameOver(){    //styles page to match game_over template
    
    clearRows();

    $("#row2").html("<div class =\"col-sm-8 mx-auto\"><div class=\"card border-dark text-center\"><div class=\"card-body\"><h2 class=\"card-title\">Game Over</h2><i><p class=\"card-text\">Try Again?</p></i></div></div></div>");

    $("#row3").html("<div class=\"d-grid gap-2 col-2 mx-auto\"><button type=\"button\" class=\"btn btn-outline-dark\" id=\"back-button\">Back</button></div>");

    $("h1").replaceWith("<h2>Javascript Code Quiz</h2>");
}

function logScore(){   //styles page to match log_score template
    
    clearRows();

    $("#row1").html("<div class =\"col-sm-8 offset-2\" id=\"col11\"><div class=\"card border-dark text-center\"><div class=\"card-body\"><h4 class=\"card-title\" id=\"victory\">Congratulations!</h4><p class=\"card-text\">You've completed the quiz! Enter your initials below and hit submit to save your score. Please note saving a new score will delete the prior score.</p></div></div></div><div class=\"col-sm-1\" id=\"col12\"><div class=\"card border-secondary text-center\"><div class=\"card-body\"><h6 class=\"card-title\">Score</h6><p class=\"card-text\" id=\"timer-text\"></p></div></div></div>");

    $("#row2").html("<div class=\"row text-center\"><div class=\"col text-center\"><button class=\"nextBtn\" value=\"1\">Next</button><br><h1 id=\"init1\">A</h1><br><button class=\"prevBtn\" value=\"1\">Prev</button></div><div class=\"col text-center\"><button class=\"nextBtn\" value=\"2\">Next</button><br><h1 id=\"init2\">A</h1><br><button class=\"prevBtn\" value=\"2\">Prev</button></div><div class=\"col text-center\"><button class=\"nextBtn\" value=\"3\">Next</button><br><h1 id=\"init3\">A</h1><br><button class=\"prevBtn\" value=\"3\">Prev</button></div></div><div class=\"row mx-auto\"><div class=\"d-grid gap-2 col-2 mx-auto\"><br><button type=\"button\" class=\"btn btn-primary\" id=\"submit-button\">Submit</button></div></div>");

    $("#row3").html("<h1 id=\"initial-text\"></h1><br><h1 id=\"score-text\"></h1>");

    $("#row4").html("<div class=\"d-grid gap-2 col-2 mx-auto\"><button type=\"button\" class=\"btn btn-outline-dark\" id=\"back-button\">Back</button></div>");

    $("#timer-text").text(count);

    $("#row3, #row2").attr("class", "text-center");

    if (!(saveData === null)){
        $("#initial-text").text(saveData.initials);

        $("#score-text").text(saveData.score);
    }
}

function clearRows(){ 
    $(".row").empty();
}

//runtime
    //Start page buttons
$("#start-button").on("click", gameStart);
$("#rule-button").on("click", loadRules);
$("#score-button").on("click", loadScore);

    //back button, reloads page, used on multiple screens
$(document).on("click", "#back-button", function(){location.reload()});

    //quiz buttons
$(document).on("click", "#a-button", checkAnswer);
$(document).on("click", "#b-button", checkAnswer);
$(document).on("click", "#c-button", checkAnswer);
$(document).on("click", "#d-button", checkAnswer);
$(document).on("click", "#skip-button", skipQuestion);

    //logScore buttons
$(document).on("click", ".nextBtn", nextLetter);
$(document).on("click", ".prevBtn", prevLetter);
$(document).on("click", "#submit-button", saveScore);