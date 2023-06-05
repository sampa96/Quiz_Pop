const question = Array.from(document.getElementsByClassName('question'));
const choices = Array.from(document.getElementsByClassName('choice_answer'));
const nextButton = document.getElementById('button_nextQuestion');
const prevButton = document.getElementById('button_previousQuestion');
//console.log(choices);

let currQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let selectedAnswer = [];

let request = new XMLHttpRequest();
request.open("GET","/src/dataset.json", false);
request.send(null);
jsonData = JSON.parse(request.responseText);
//console.log(jsonData);
//console.log(jsonData.music[2].options[3]);

let questions = jsonData.music;
//console.log("questions:",questions);

const MAX_QUESTIONS = 10;

startQuizMusic = () => {
    questionCounter= 0;
    questionIndex=0;
    score= 0;
    availableQuestions = [...questions];
//   console.log("startquiz",availableQuestions);
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
//    console.log(questionCounter);
//    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
      currQuestion = availableQuestions[questionIndex];
 // console.log(questionIndex);
 //   console.log(currQuestion.question);
 //   console.log("Question frm array",question[0].innerHTML);
    question[0].innerText = currQuestion.question;
 //   console.log("choice",currQuestion.options);

    choices.forEach((choice) => {
        choice.style.backgroundColor = 'blue';
        const opt_num=choice.dataset['number'];
//        console.log("number", currQuestion.options[opt_num]);
        choices[opt_num].innerText=currQuestion.options[opt_num];
    });

//    availableQuestions.splice(questionIndex, 1);

    

};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        e.target.style.backgroundColor = 'yellow';
        const selectedAnswerSeq = selectedChoice.dataset['number'];
         selectedAnswer = currQuestion.options[selectedAnswerSeq];
        

   //     console.log("selectedAnswer", selectedChoice);
   //     console.log("actual answer", availableQuestions[questionIndex].answer);
   //     getNewQuestion();
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
 //   choices.style.backgroundColor = 'blue';
    getNewQuestion();
})

prevButton.addEventListener('click', () => {
    questionIndex--;
    questionCounter--;
    acceptingAnswers = false;
    getNewQuestion();
})

startQuizMusic();