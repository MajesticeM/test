let Questions=
{
    Question01: "Question 1: Thomas has" +variable01 + "apples in his bag and wants to distribute them to his soccer team. He currently has " + variable02 + "players in his club. How many apples will each layer get?", 

};

let answers={
    answer01=14,
    answer02=4,
    answer03=44,
    answer04=54,
    answer05=64

};

//The current range is between 00-10
let variable01=Math.floor(Math.random() * 10); 
let variable02=Math.floor(Math.random() * 10); 
let variable03=Math.floor(Math.random() * 10); 

//The answer will change operations depending on the question

let x = document.createElement("INPUT").value;
let question=document.getElementById('Question01');



function ShowQuestion() {
    
    x.setAttribute("type", "number");
    question=document.getElementById(Questions.Question01).style.display="inline";
    question.appendChild(submitBtn);
    
}

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


