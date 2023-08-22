// only the start button shows
//declare variables to target the sections
//declare variables for score
// create array of objects for questions and answers

// VARIABLES
var introSection = document.getElementById('intro-section')
var questionSection = document.getElementById('question-section')
var initialSection = document.getElementById('initial-section')
var highscoreSection = document.getElementById('highscore-section')
var startBtn = document.getElementById('start-btn')
var timer = document.getElementById('timer')
var timeLeft = 29
var wrongAnswer = 5
var questionEl = document.getElementById('question')
var answersEl = document.querySelectorAll('.choices')
var score = document.getElementById('score')
var initialInput = document.getElementById('initial-input')
var questionCounter = 0

//QUESTIONS OBJECT

var questions = [
    {
        question: "What is the first tag learned to declare a variable in javascript?",
        answers: ['var', 'title', 'thingy', 'item'],
        rightChoice: 'var'
    },
    {
        question: 'what kind of data type requires a true or false answer',
        answers: ['test variable', 'yes or no variable', 'boolean', 'for loop'],
        rightChoice: 'boolean',
    },
    {
        question: 'Name all the CSS frameworks.',
        answers: ['Bootstrap', 'Bulma', 'Tailwind', 'All the above'],
        rightChoice: 'All the above',
    },
    {
        question: 'What tag is used to define a section?',
        answers: ['Part', 'Section', 'Area', 'Div'],
        rightChoice: 'Section',
    }
]

// function start quiz

var startQuiz = function () {
    //call NEXT QUESTION FUNCTION
    nextQuestion()
    var countdown = setInterval(function () {
        timer.textContent = "Time: " + timeLeft
        timeLeft--
        if (timeLeft === 0 || questionCounter === 5) {
            endQuiz()
            clearInterval(countdown)
        }
    }, 1000)

    questionSection.classList.remove('hidden')
    //countdown
    timer.classList.remove('hidden')
    introSection.classList.add('hidden')
    questionSection.classList.remove('hidden')
}



//NEXT QUESTION FUNCTION
// create for loop to go through questions
var nextQuestion = function () {
    questionEl.textContent = questions[questionCounter].question
for (let i = 0; i < 4 ; i++) {
  answersEl[i].textContent = questions[questionCounter].answers[i]  
}


    if (questionCounter === 5) {
        endQuiz()
    }


}
var submitAnswer = function (event) {
    var playerSelection = event.target.textContent
    console.log(playerSelection)
    console.log(questions[questionCounter].rightChoice)
    if (playerSelection === questions[questionCounter].rightChoice) {
        questionCounter++
        nextQuestion()
    }
    else {
        questionCounter++
        timeLeft= timeLeft-wrongAnswer
        nextQuestion()
    }

}


// create function that ends quiz 
var endQuiz = function () {
        score.textContent = timeLeft
        timer.classList.add('hidden')
        questionSection.classList.add('hidden')
        initialSection.classList.remove('hidden')
        highscoreSection.classList.remove('hidden')
}

//Save to local storage
var saveHighscore = function () {
    var saved = {
        PlayerInitials: initialInput.value,
        PlayerScore: score.value
    }
    localStorage.setItem('HighScores', JSON.stringify(saved))
}



questionSection.addEventListener('click', submitAnswer)
startBtn.addEventListener('click', startQuiz)
