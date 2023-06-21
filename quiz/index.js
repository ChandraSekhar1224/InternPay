const quizData=[
    {
        question: "What is the pH value of the human body?",
        a: "9.2 to 9.8",
        b: "7.0 to 7.8",
        c: "6.1 to 6.3",
        d: "5.4 to 5.6",
        correct: "b",
    },
    {
        question: "Who among the following decides if an individual Bill is a Money Bill or not?",
        a: "Prime Minister",
        b: "President",
        c: "Member of Lok Sabha",
        d: "Speaker of Lok Sabha",
        correct: "d",
    },
    {
        question: " Which of the given vitamin is a water-soluble vitamin?",
        a: "Vitamin A",
        b: "Vitamin B",
        c: "Vitamin C",
        d: "Vitamin D",
        correct: "b",
    },
    {
        question: "Which of the following Himalayan regions is called Shivalik's?",
        a: "Upper Himalayas",
        b: "Lower Himalayas",
        c: "Outer Himalayas",
        d: "Inner Himalayas",
        correct: "c",
    },
    {
        question: "Which of the given cities is located on the bank of river Ganga?",
        a: "Patna",
        b: "Gwalior",
        c: "Bhopal",
        d: "Mathura",
        correct: "a",
    },
    {
        question: "Digestion of food in human beings begins in which part of the alimentary canal?",
        a: "Liver",
        b: "Kidney",
        c: "Mouth",
        d: "Large Intestine",
        correct: "c",
    }
];

const quiz=document.getElementById("quiz")
const ans=document.querySelectorAll(".answer")
const question=document.getElementById("question")
const a_text=document.getElementById("a_text")
const b_text=document.getElementById("b_text")
const c_text=document.getElementById("c_text")
const d_text=document.getElementById("d_text")

let currentq=0
let score=0

load_quiz()

function load_quiz(){
    deselect_answers()
    const currentData=quizData[currentq]
    question.innerHTML=`${currentq+1}. ${currentData.question}`
    a_text.innerHTML=currentData.a
    b_text.innerHTML=currentData.b
    c_text.innerHTML=currentData.c
    d_text.innerHTML=currentData.d 
}

function deselect_answers(){
    ans.forEach(ansEle => ansEle.checked=false)
}
function get_selected(){
    let answer
    ans.forEach(ansEle=>{
        if(ansEle.checked){
            answer=ansEle.id
        }
    })
    return answer
}

function next(){
    const answer=get_selected()
    if(answer){
        if(answer===quizData[currentq].correct)
            score++
    }
    currentq++
    if(currentq<quizData.length)
        load_quiz()
    else
        quiz.innerHTML=`
        <h3>Your score: ${score}/${quizData.length}</h3>
        <h3>Percentage score: ${(score/quizData.length)*100}%</h3>
        <button onclick="location.reload()">Reload</button>
        `
}