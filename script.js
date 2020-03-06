var answers = [
    "Paris",
    '8',
    "Ijsselmeer"
];
var answerCar = [
    "Volkswagen", 
    "Audi", 
    "Opel", 
    "Porsche", 
    "BMW", 
    "Mercedes", 
    "Mercedes-Benz"
];
var answerIsland = [
    "Texel", 
    "Vlieland", 
    "Terschelling", 
    "Ameland", 
    "Schiermonnikoog"
];

function checkIt(){
    var correct = 0;
    
    /*question 1*/
    var input1 = document.getElementById("answer1").value;
    if (input1 == answers[0]){
        document.getElementById("answer1");
        correct +=1;
        document.getElementById("answer1").style.background = "green";
    }  else {
        document.getElementById("answer1")
        document.getElementById("answer1").style.background = "red";
    }
    
    /*question 2*/
    var input2 = document.getElementById("answer2").value;
    if (input2 == answers[1]){
        document.getElementById("answer2")
        correct +=1;
        document.getElementById("answer2").style.background = "green";
    }   else {
        document.getElementById("answer2")
        document.getElementById("answer2").style.background = "red";
    }    

    /*question 3*/
    var input3 = document.getElementById("answer3").value;
    if (input3 == answers[2]){
        document.getElementById("answer3")
        correct +=1;
        document.getElementById("answer3").style.background = "green";
    }   else {
        document.getElementById("answer3")
        document.getElementById("answer3").style.background = "red";
    }   

        /*question 4*/
    var input4 = document.getElementById("answer4").value;
    if (answerCar.includes(input4)){
        document.getElementById("answer4")
        correct +=1;
        document.getElementById("answer4").style.background = "green";
    }   else {
        document.getElementById("answer4")
        document.getElementById("answer4").style.background = "red";
    } 

    /*question 5*/
    var input5 = document.getElementById("answer5").value;
    if (answerIsland.includes(input5)){
        document.getElementById("answer5")
        correct +=1;
        document.getElementById("answer5").style.background = "green";
    }   else {
        document.getElementById("answer5")
        document.getElementById("answer5").style.background = "red";
    } 

    if (correct == 5){
        document.getElementById("points").innerText = "All answers are correct!";
    } else {
        document.getElementById("points").innerText = "Try again";
     }
}
