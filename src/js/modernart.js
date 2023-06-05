const question = Array.from(document.getElementsByClassName('question'));
const choices = Array.from(document.getElementsByClassName('choice_answer'));
const nextButton = document.getElementById('button_nextQuestion');
const prevButton = document.getElementById('button_previousQuestion');


let currQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let selectedAnswer = [];

let request = new XMLHttpRequest();
request.open("GET","./dataset.json", false);
request.send(null);
jsonData = JSON.parse(request.responseText);



let questions = jsonData.modern_art;


const MAX_QUESTIONS = 10;

startQuiz = () => {
    questionCounter= 0;
    questionIndex=0;
    score= 0;
    availableQuestions = [...questions];
    acceptingAnswers = true;
    getNewQuestion();
}

getNewQuestion= () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("latestScore", score);
        //go to the end page
        console.log("END");
        window.location.assign("/src/score.html");
    }
    questionCounter++;

      currQuestion = availableQuestions[questionIndex];
 
    question[0].innerText = currQuestion.question;

    choices.forEach((choice) => {
        choice.style.backgroundColor = 'blue';
        const opt_num=choice.dataset['number'];

        choices[opt_num].innerText=currQuestion.options[opt_num];
    });

};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        e.target.style.backgroundColor = 'yellow';
        const selectedAnswerSeq = selectedChoice.dataset['number'];
         selectedAnswer = currQuestion.options[selectedAnswerSeq];
        
    });
});

nextButton.addEventListener('click', (nextButtonEvent) => {
    console.log ("NEXT QUESTION CLICKED");
    console.log("selectedAnswer", selectedAnswer);
    console.log("actual answer", availableQuestions[questionIndex].answer);
    console.log("Score:",score);
    if (selectedAnswer === availableQuestions[questionIndex].answer){
        score++;
    }
    questionIndex ++
    acceptingAnswers = true;
    getNewQuestion();
})

prevButton.addEventListener('click', () => {
    questionIndex--;
    questionCounter--;
    acceptingAnswers = false;
    getNewQuestion();
})

startQuiz();