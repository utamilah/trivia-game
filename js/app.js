class Question {
  constructor(question, choices, answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
  }
}

// All Questions
var question1 = new Question('Question1',['A1','B1','C1'], 'A1');
var question2 = new Question('Question2',['A2','B2','C2'], 'A2');
var question3 = new Question('Question3',['A3','B3','C3'], 'A3');
var question4 = new Question('Question4',['A4','B4','C4'], 'A4');
var question5 = new Question('Question5',['A5','B5','C5'], 'A5');
var question6 = new Question('Question6',['A6','B6','C6'], 'A6');
var question7 = new Question('Question7',['A7','B7','C7'], 'A7');
var question8 = new Question('Question8',['A8','B8','C8'], 'A8');
var question9 = new Question('Question9',['A9','B9','C9'], 'A9');
var question10 = new Question('Question10',['A10','B10','C10'], 'A10');

var musicQues = [
  question1.question,
  question2.question,
  question3.question,
  question4.question,
  question5.question,
  question6.question,
  question7.question,
  question8.question,
  question9.question,
  question10.question
]

var randomQ = musicQues[Math.floor(Math.random() * musicQues.length)];
// var randomQ = musicQues[0];

var answerBtn = $('.answerBtn')
var questionNum = $('.questionNum')
var nextBtn = $('#nextBtn')

var correct = null
var current = null
var currentAns = null

var setCurrentQuestion = function(){
  switch (randomQ) {
    // Question 1
    case question1.question:
      musicQues.forEach(function(question, i) {
        questionNum.eq(i).text(`Question ${i + 1}`);
        answerBtn.eq(i).text(question1.choices[i]);
      })
      correct = question1.choices[1];
      // Store current question, answers, and correct answers
      current = question1;
      currentAns = question1.choices;
      break;

    // Question 2
    case question2.question:
      musicQues.forEach(function(question, i) {
        questionNum.eq(i).text(`Question ${i + 1}`);
        answerBtn.eq(i).text(question2.choices[i]);
      })
      correct = question2.choices[0];
      // Store current question, answers, and correct answers
      current = question2;
      currentAns = question2.choices;
      break;

    // Question 3
    case question3.question:
      musicQues.forEach(function(question, i) {
        questionNum.eq(i).text(`Question ${i + 1}`);
        answerBtn.eq(i).text(question3.choices[i]);
      })
      correct = question3.choices[0];
      // Store current question, answers, and correct answers
      current = question3;
      currentAns = question3.choices;
      break;

    // Question 4
    case question4.question:
      musicQues.forEach(function(question, i) {
        questionNum.eq(i).text(`Question ${i + 1}`);
        answerBtn.eq(i).text(question4.choices[i]);
      })
      correct = question4.choices[0];
      // Store current question, answers, and correct answers
      current = question4;
      currentAns = question4.choices;
      break;

    // Question 5
    case question5.question:
      musicQues.forEach(function(question, i) {
        questionNum.eq(i).text(`Question ${i + 1}`);
        answerBtn.eq(i).text(question5.choices[i]);
      })
      correct = question5.choices[0];
      // Store current question, answers, and correct answers
      current = question5;
      currentAns = question5.choices;
      break;

    // Question 6
    case question6.question:
      musicQues.forEach(function(question, i) {
        questionNum.eq(i).text(`Question ${i + 1}`);
        answerBtn.eq(i).text(question6.choices[i]);
      })
      correct = question6.choices[0];
      // Store current question, answers, and correct answers
      current = question6;
      currentAns = question6.choices;
      break;

    // Question 7
    case question7.question:
      musicQues.forEach(function(question, i) {
        questionNum.eq(i).text(`Question ${i + 1}`);
        answerBtn.eq(i).text(question7.choices[i]);
      })
      correct = question7.choices[0];
      // Store current question, answers, and correct answers
      current = question7;
      currentAns = question7.choices;
      break;

    // Question 8
    case question8.question:
      musicQues.forEach(function(question, i) {
        questionNum.eq(i).text(`Question ${i + 1}`);
        answerBtn.eq(i).text(question8.choices[i]);
      })
      correct = question8.choices[0];
      // Store current question, answers, and correct answers
      current = question8;
      currentAns = question8.choices;
      break;

    // Question 8
    case question8.question:
      musicQues.forEach(function(question, i) {
        questionNum.eq(i).text(`Question ${i + 1}`);
        answerBtn.eq(i).text(question8.choices[i]);
      })
      correct = question8.choices[0];
      // Store current question, answers, and correct answers
      current = question8;
      currentAns = question8.choices;
      break;

    // Question 9
    case question9.question:
      musicQues.forEach(function(question, i) {
        questionNum.eq(i).text(`Question ${i + 1}`);
        answerBtn.eq(i).text(question9.choices[i]);
      })
      correct = question9.choices[0];
      // Store current question, answers, and correct answers
      current = question9;
      currentAns = question9.choices;
      break;

    // Question 10
    case question10.question:
      musicQues.forEach(function(question, i) {
        questionNum.eq(i).text(`Question ${i + 1}`);
        answerBtn.eq(i).text(question10.choices[i]);
      })
      correct = question10.choices[0];
      // Store current question, answers, and correct answers
      current = question10;
      currentAns = question10.choices;
      break;
    default:
  }
}

$('#playBtn').on('click',function(){
  setCurrentQuestion()
  $('#intro').toggle()
  $('#topInfo').attr('style','display: flex')
  $('#quizBox').fadeIn(500,'swing',function(){
    // Add question and answer text to the page
    $('.question').text(randomQ)
  })
})
