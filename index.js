//The current range is between 00-10
let variable01=numbGenerator(); 
let variable02=numbGenerator(); 
let variable03=numbGenerator(); 
//The answer will change operations depending on the question


let question=document.getElementById('Question01');

let Questions=
{
    Question01: "Question 1: Thomas has " +variable01 + " apples in his bag and wants to distribute them to his soccer team. He currently has " + variable02 + " players in his club. How many apples will each player get?", 

};

let answers={
    answer01:14,
    answer02:4,
    answer03:44,
    answer04:54,
    answer05:64

};
function numbGenerator() {
    return Math.floor(Math.random() * 100); 
}







function ShowQuestion() {
    console.log(Questions.Question01);
    question.innerHTML=document.createTextNode("Questions.Question01");
    
    
};

function Question01(answer) 
{
    x=variable01+variable02+variable03;    
    for (let index = 0; index < answers.length; index++) {
        if (x.value===index)
        {
            console.log("Your answer is correct");    
        }
        else
        {
            console.log("Your answer is incorrect");
        }
        
    }
    
    
}


