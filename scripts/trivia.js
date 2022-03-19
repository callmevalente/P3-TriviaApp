const data = [
    {
        question: "What house at Hogwarts does Harry belong to?",
        answer: "Gryffindor.",
        questionNum: "one"
    },
    {
        question: "What position does Harry play on his Quidditch team?",
        answer: "Seeker.",
        questionNum: "two"
    },
    {
        question: "How did Harry get the scar on his forehead?",
        answer: "Lord Voldemort killed Harry's parents when he was a baby and tried to kill Harry.",
        questionNum: "three"
    },
    {
        question: "What does the Sorcerer's Stone do?",
        answer: "Ttransforms any metal into gold and produces the Elixir of Life.",
        questionNum: "four"
    },
    {
        question: "Who is Fluffy?",
        answer: "A three-headed dog.",
        questionNum: "five"
    },
    {
        question: "What power do the dementors have over people?",
        answer: "They drain peace, hope and happiness.",
        questionNum: "six"
    },
    {
        question: "What does the Imperius Curse do?",
        answer: "It control the actions of another person.",
        questionNum: "seven"
    },
    {
        question: "What magical talent does Harry share with Voldemort?",
        answer: "Harry is a Parselmouth--a wizard that can speak to snakes.",
        questionNum: "eight"
    },
    {
        question: "What is an Auror?",
        answer: "Is a person that is trained to catch Dark wizards.",
        questionNum: "nine"
    },
    {
        question: "Who kills Professor Dumbledore?",
        answer: "Severus Snape.",
        questionNum: "ten"
    },
    {
        question: "How does Harry catch his first snitch?",
        answer: "Harry accidentally catches the snitch in his mouth.",
        questionNum: "eleven"
    },
    {
        question: "What does the Mirror of Erised do?",
        answer: "Shows us nothing more or less than the deepest, most desperate desire of our hearts.",
        questionNum: "twelve"
    },
    {
        question: "What is the name of the first Harry Potter book?",
        answer: "Harry Potter and the Philospher's Stone.",
        questionNum: "thirteen"
    },
    {
        question: "Who is Grawp?",
        answer: "Hagrid's half-brother.",
        questionNum: "fourteen"
    },
    {
        question: "How are Hogwarts students placed in their houses?",
        answer: "Through the Sorting Hat.",
        questionNum: "fifhteen"
    },
];

const theBody = document.querySelector(".main")

for (entry of data) {
    let triviaButton = document.createElement("button")
    triviaButton.textContent = "Show Answer"
    triviaButton.setAttribute("id", `${entry.questionNum}Button`)
    triviaButton.setAttribute("type", "button")
    let triviaBox = document.createElement("div")
    triviaBox.classList.add("theBox")
    let questionText = document.createElement("h3")
    questionText.textContent = entry.question
    let answerText = document.createElement("p")
    answerText.textContent = entry.answer
    answerText.setAttribute("id", `${entry.questionNum}Answer`)
    answerText.classList.add("hide")
    triviaBox.appendChild(triviaButton)
    triviaBox.appendChild(questionText)
    triviaBox.appendChild(answerText)
    triviaBox.classList.add(entry.questionNum)
    theBody.appendChild(triviaBox)
}

function showAnswer(theButton, theAnswer) {
    let thisBox = document.getElementById(theAnswer)
    if (thisBox.className === "hide") {
        thisBox.classList.remove("hide")
        document.getElementById(theButton).innerHTML = "Hide Answer"
        var theTimer = setTimeout(function () {
            thisBox.classList.add("hide")
            document.getElementById(theButton).innerHTML = "Show Answer"
        }, 5000);
    } else {
        thisBox.classList.add("hide")
        document.getElementById(theButton).innerHTML = "Show Answer"
        clearTimeout(theTimer)
    }
}

document.getElementById("oneButton").onclick = function () { showAnswer("oneButton", "oneAnswer") }
document.getElementById("twoButton").onclick = function () { showAnswer("twoButton", "twoAnswer") }
document.getElementById("threeButton").onclick = function () { showAnswer("threeButton", "threeAnswer") }
document.getElementById("fourButton").onclick = function () { showAnswer("fourButton", "fourAnswer") }
document.getElementById("fiveButton").onclick = function () { showAnswer("fiveButton", "fiveAnswer") }
document.getElementById("sixButton").onclick = function () { showAnswer("sixButton", "sixAnswer") }
document.getElementById("sevenButton").onclick = function () { showAnswer("sevenButton", "sevenAnswer") }
document.getElementById("eightButton").onclick = function () { showAnswer("eightButton", "eightAnswer") }
document.getElementById("nineButton").onclick = function () { showAnswer("nineButton", "nineAnswer") }
document.getElementById("tenButton").onclick = function () { showAnswer("tenButton", "tenAnswer") }
document.getElementById("elevenButton").onclick = function () { showAnswer("elevenButton", "elevenAnswer") }
document.getElementById("twelveButton").onclick = function () { showAnswer("twelveButton", "twelveAnswer") }
document.getElementById("thirteenButton").onclick = function () { showAnswer("thirteenButton", "thirteenAnswer") }
document.getElementById("fourteenButton").onclick = function () { showAnswer("fourteenButton", "fourteenAnswer") }
document.getElementById("fifhteenButton").onclick = function () { showAnswer("fifhteenButton", "fifhteenAnswer") }