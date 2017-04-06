class Question {
  constructor(question, choices, answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
  }
}

// All Questions
var question1 = new Question("What year did Discovery by Daft Punk drop?",['2001','2008','1999'], '2001');
var question2 = new Question("What is the name of Michael Jackson's first solo album?",['Thriller','Got to Be There','Off the Wall'], 'Got to Be There');
var question3 = new Question("Who is the youngest member of One Direction?",['Niall Horan','Harry Styles','Chip Skylark'], 'Harry Styles');
var question4 = new Question("Which artist did NOT contribute to Beyonce's Lemonade?",['Ezra Koenig','Diplo','Drake'], 'Drake');
var question5 = new Question("Finish the Lyric: Lucy in the sky with _____.",['Dioramas','Diamonds','Clouds'], 'Diamonds');
var question6 = new Question("Which musician is NOT a part of the 27 Club?",['Jeff Buckley','Brian Jones','Janis Joplin'], 'Jeff Buckley');
var question7 = new Question('Question7',['A7','B7','C7'], 'C7');
var question8 = new Question('Question8',['A8','B8','C8'], 'C8');
var question9 = new Question('Question9',['A9','B9','C9'], 'B9');
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

var correctAns = []

// Start Game after play button is clicked
$('#playBtn').on('click',function(){
  setCurrentQuestion()
  $('#intro').toggle()
  $('#topInfo').attr('style','display: flex')
  $('#quizBox').fadeIn(500,'swing',function(){
    // Add question and answer text to the page
    $('.question').text(randomQ)
  })
})

// Randomize Questions
var randomQ = musicQues[Math.floor(Math.random() * musicQues.length)];
// var randomQ = musicQues[0];

var answerBtn = $('.answerBtn')
var questionNum = $('.questionNum')
var nextBtn = $('#nextBtn')

var correct = null
var current = null
var currentAns = null

// Function after button is clicked
var guess = function(){
  var txt = $(this).text();
  if (txt === correct) {
    $(this).addClass('correct');
    correctAns.push(current);
  }
  else {
    $(this).addClass('incorrect');
    for (var i = 0; answerBtn.length > i; i++){
      var button = answerBtn.eq(i);
      if (button.text() === correct) {
        button.addClass('correct');
      }
    }
  }
  // Toggle display of next button if answer is clicked
  nextBtn.attr('style','display: block');
}
// Activate function when any answer is clicked
answerBtn.on('click', guess);

// Function for when the 'next' button is clicked
var nextQuestion = function(){
  // Reshuffle questions displayed
  randomQ = musicQues[Math.floor(Math.random() * musicQues.length)]
  // Reactivate switch case
  setCurrentQuestion()
  console.log(randomQ)
  // Remove green/red backgrounds from buttons
  answerBtn.removeClass('correct incorrect')

  $('.question').text(randomQ)

  // remove current index and log array into console to see if it worked
  musicQues.splice(musicQues.indexOf(current),1)
  console.log(musicQues);

  // Toggle display of next button if answer is clicked
  nextBtn.toggle();

  // Add correctAns length to score
  $('.score p').text(correctAns.length)

  // If Question Array is empty
  if(musicQues.length === 0){
    $('#quizBox').toggle();
    $('#scoreBox').attr('style','display: flex').text(correctAns.length);
  }
}
// Next question click event
nextBtn.on('click', nextQuestion);

// Set current question after randomize
var setCurrentQuestion = function(){
  switch (randomQ) {
    // Question 1
    case question1.question:
      musicQues.forEach(function(question, i) {
        answerBtn.eq(i).text(question1.choices[i]);
      })
      correct = question1.answer;
      // Store current question, answers, and correct answers
      current = question1;
      currentAns = question1.choices;
      break;

    // Question 2
    case question2.question:
      musicQues.forEach(function(question, i) {
        answerBtn.eq(i).text(question2.choices[i]);
      })
      correct = question2.answer;
      // Store current question, answers, and correct answers
      current = question2;
      currentAns = question2.choices;
      break;

    // Question 3
    case question3.question:
      musicQues.forEach(function(question, i) {
        answerBtn.eq(i).text(question3.choices[i]);
      })
      correct = question3.answer;
      // Store current question, answers, and correct answers
      current = question3;
      currentAns = question3.choices;
      break;

    // Question 4
    case question4.question:
      musicQues.forEach(function(question, i) {
        answerBtn.eq(i).text(question4.choices[i]);
      })
      correct = question4.answer;
      // Store current question, answers, and correct answers
      current = question4;
      currentAns = question4.choices;
      break;

    // Question 5
    case question5.question:
      musicQues.forEach(function(question, i) {
        answerBtn.eq(i).text(question5.choices[i]);
      })
      correct = question5.answer;
      // Store current question, answers, and correct answers
      current = question5;
      currentAns = question5.choices;
      break;

    // Question 6
    case question6.question:
      musicQues.forEach(function(question, i) {
        answerBtn.eq(i).text(question6.choices[i]);
      })
      correct = question6.answer;
      // Store current question, answers, and correct answers
      current = question6;
      currentAns = question6.choices;
      break;

    // Question 7
    case question7.question:
      musicQues.forEach(function(question, i) {
        answerBtn.eq(i).text(question7.choices[i]);
      })
      correct = question7.answer;
      // Store current question, answers, and correct answers
      current = question7;
      currentAns = question7.choices;
      break;

    // Question 8
    case question8.question:
      musicQues.forEach(function(question, i) {
        answerBtn.eq(i).text(question8.choices[i]);
      })
      correct = question8.answer;
      // Store current question, answers, and correct answers
      current = question8;
      currentAns = question8.choices;
      break;

    // Question 8
    case question8.question:
      musicQues.forEach(function(question, i) {
        answerBtn.eq(i).text(question8.choices[i]);
      })
      correct = question8.answer;
      // Store current question, answers, and correct answers
      current = question8;
      currentAns = question8.choices;
      break;

    // Question 9
    case question9.question:
      musicQues.forEach(function(question, i) {
        answerBtn.eq(i).text(question9.choices[i]);
      })
      correct = question9.answer;
      // Store current question, answers, and correct answers
      current = question9;
      currentAns = question9.choices;
      break;

    // Question 10
    case question10.question:
      musicQues.forEach(function(question, i) {
        answerBtn.eq(i).text(question10.choices[i]);
      })
      correct = question10.answer;
      // Store current question, answers, and correct answers
      current = question10;
      currentAns = question10.choices;
      break;
    default:
  }
}
