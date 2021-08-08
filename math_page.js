player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

word_1 = 0;
word_2 = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":"; 
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("word_1").innerHTML = word_1;
document.getElementById("word_2").innerHTML = word_2;

document.getElementById("player_question").innerHTML = "Question Turn -"+ player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name

function send() {
    word_1 = document.getElementById("word_1").value;
    word_2 = document.getElementById("word_2").value;
    actual_answer = parseInt(word_1) * parseInt (word_2);
    question_number  = "<h4> " + word_1 + " X " + word_2 + "</h4>";
    input_box  = "<br> Answer : <input type='text' id = 'input_check_box'>";
    check_button = "<br> <br> <button class = 'btn btn-info' onclick = 'check()'> Check </button>";
    row = question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
    document.getElementById("word_1").value = ""; 
    document.getElementById("word_2").value = ""; 
}
