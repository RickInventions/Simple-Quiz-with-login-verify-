const Nname = document.getElementById('Nname');
const eMail = document.getElementById('eMail');
const nameErr = document.querySelector('.nameErr');
const emailErr = document.querySelector('.emailErr');
var dob = document.getElementById('dob');

function display(){
    if(Nname.value === ''){
        nameErr.style.display = 'block';
    }
    else if(eMail.value === ''){
        emailErr.style.display = 'block';
    }
    else if(!eMail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailErr.style.display = 'block';
    }
    else if(dob.value === ''){
        window.alert('Enter Age')
    }
    else if(dob.value < 18){
        window.alert('You are not old enough to play this game.')
    }
    else{
        window.location = 'loading.html';
    };
    
    Nname.addEventListener('keypress', ()=>{
        nameErr.style.display = 'none';
    });
    eMail.addEventListener('keypress', ()=>{
        emailErr.style.display = 'none';
    });
}
const questions = [
    {
        question : "What is the largest animal in the world?",
        answers:[
            {text:"Shark", correct:false},
            {text:"Blue Whale", correct:true},
            {text:"Elephant", correct:false},
            {text:"Giraffe", correct:false},
        ]
    },
    {
            question : "how many fingers does a human have?",
        answers:[
                {text:"Two", correct:false},
                {text:"Fifteen", correct:false},
                {text:"Five", correct:false},
                {text:"Ten", correct:true},
            ]
        },
        {
                question : "Who is the main Character in ORV?",
                answers:[
                        {text:"Sangah", correct:false},
                        {text:"Yu Jungheouk", correct:false},
                        {text:"Kim Dokja", correct:true},
                        {text:"Hyunseong Lee", correct:false},
                    ]
                },
                {
                        question : "What do we breathe in?",
                        answers:[
                                {text:"H20", correct:false},
                                {text:"0", correct:true},
                                {text:"02", correct:false},
                                {text:"H2SO4", correct:false},
                            ]
                        },
                        {
                                question : "Who is the strongest",
                                answers:[
                                        {text:"Saitama", correct:true},
                                        {text:"Goku", correct:false},
                                        {text:"Beerus", correct:false},
                                        {text:"Shinra", correct:false},
                                    ]
    },
    {
            question : "Who is the weakest",
            answers:[
                    {text:"Anos", correct:false},
                    {text:"Akuto sai", correct:false},
                    {text:"Featherine", correct:false},
                    {text:"Goku", correct:true},
                ]
            },
            {
                    question : "Who is the most followed out of these",
                    answers:[
                            {text:"Nicki Minaj", correct:false},
                            {text:"Ronaldo", correct:true},
                            {text:"Messi", correct:false},
                            {text:"Bad Bunny", correct:false},
                        ]
                    },
                    {
                            question : "Why is the earth flat?",
                            answers:[
                                    {text:"All Planets are flat", correct:false},
                                    {text:"Weak molecular mass compared to other planets", correct:false},
                                    {text:"Because of Polar Density", correct:false},
                                    {text:"Its not", correct:true},
                                ]
                            },
                            {
                                    question : "Why did batman win in Batman vs Superman",
                                    answers:[
                                            {text:"Because hes Batman", correct:true},
                                            {text:"He had enough prep time", correct:false},
                                            {text:"Because of kryptonite", correct:false},
                                            {text:"Wonderwoman helped him", correct:false},
                                        ]
                                    },
                                    {
                                            question : "How many continents exist",
        answers:[
                {text:"six", correct:false},
                {text:"eight", correct:false},
            {text:"seven", correct:true},
            {text:"five", correct:false},
        ]
    },
    
];
const questionElement = document.getElementById('question');
const answerButtons= document.getElementById('answer-buttons');
const nextButton= document.getElementById('next-btn');

let currentQuestionIndex = 0;
let Score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    Score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.
    question;
    
    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
    })
}
function resetState(){
    nextButton.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
    
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add('correct');
        Score++;
    }else{
        selectedBtn.classList.add('incorrect')
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}
function showScore(){
    resetState();
    questionElement.innerHTML = `Welldone <br> You Scored ${Score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = "block"; 
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz()
