// Create objects that hold questions
  // var musicQues = {
  //   ques1: 'Question 1',
  //   ques2: 'Question 2',
  //   ques3: 'Question 3',
  //   ques4: 'Question 4',
  //   ques5: 'Question 5',
  //   ques6: 'Question 6',
  //   ques7: 'Question 7',
  //   ques8: 'Question 8',
  //   ques9: 'Question 9',
  //   ques10: 'Question 10'
  // };
  var musicQues = [
    'Question 1',
    'Question 2',
    'Question 3',
    'Question 4',
    'Question 5',
    'Question 6',
    'Question 7',
    'Question 8',
    'Question 9',
    'Question 10'
  ]
// Create multiple choice object
  var answers = [
     ['A1','B1','C1'],
     ['A2','B2','C2'],
     ['A3','B3','C3'],
     ['A4','B4','C4'],
     ['A5','B5','C5'],
     ['A6','B6','C6'],
     ['A7','B7','C7'],
     ['A8','B8','C8'],
     ['A9','B9','C9'],
     ['A10','B10','C10']
   ];
// Answered Questions
  var answeredQuestions = [];

// Randomize question order
// var randomQ = musicQues[0];
var randomQ = musicQues[Math.floor(Math.random() * musicQues.length)];

var answerBtn = $('.answerBtn');
var questionNum = $('.questionNum');
var nextBtn = $('#nextBtn');
var correct = null
var current = null
var currentAns = null

// Create click even that starts game at first question, score, and timer
$('#playBtn').on('click', function(){
  setCurrentQuestion()
  // Toggle away intro text
  $('#intro').toggle();
  // Toggle in the quiz questions
  $('#topInfo').attr('style','display: flex');

  $('#quizBox').fadeIn(500,'swing',function(){
    // Add question and answer text to the page
    $('.question').text(randomQ);
  });
});

var guess = function(){
  var txt = $(this).text();
  if (txt === correct) {
    $(this).addClass('correct');
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

// Create a function that will move on to next question
var nextQuestion = function(){
  // Reshuffle questions displayed
  randomQ = musicQues[Math.floor(Math.random() * musicQues.length)]
  // Reactivate switch case
  setCurrentQuestion()
  console.log(randomQ)
  // Remove green/red backgrounds from buttons
  answerBtn.removeClass('correct incorrect')

  $('.question').text(randomQ)

  answeredQuestions.push(current);
  console.log(musicQues);
  console.log(answeredQuestions);
  // musicQues.splice(musicQues.indexOf(current),1)

  // Toggle display of next button if answer is clicked
  nextBtn.toggle();
  // If Question Array is empty
  if(answeredQuestions.length === 10){
    $('#quizBox').toggle();
    $('#scoreBox').attr('style','display: block');
  }
}
// Next question click event
nextBtn.on('click', nextQuestion);

function setCurrentQuestion() {
  // Switch Case that pairs all questions to answers
  switch (randomQ) {
    case musicQues[0]:
    musicQues.forEach(function(question, i) {
      // questionNum.eq(i).text(`Question ${i + 1}`);
      answerBtn.eq(i).text(answers[0][i]);
    });
    correct = answers[0][0];
    current = musicQues[0];
    currentAns = answers[0];
    break;

    case musicQues[1]:
    musicQues.forEach(function(question, i) {
      // questionNum.eq(i).text(`Question ${i + 1}`);
      answerBtn.eq(i).text(answers[1][i]);
    });
    correct = answers[1][0];
    current = musicQues[1];
    currentAns = answers[1];
    break;

    case musicQues[2]:
    musicQues.forEach(function(question, i) {
      // questionNum.eq(i).text(`Question ${i + 1}`);
      answerBtn.eq(i).text(answers[2][i]);
    });
    correct = answers[2][0];
    current = musicQues[2];
    currentAns = answers[2];
    break;

    case musicQues[3]:
    musicQues.forEach(function(question, i) {
      // questionNum.eq(i).text(`Question ${i + 1}`);
      answerBtn.eq(i).text(answers[3][i]);
    });
    correct = answers[3][0];
    current = musicQues[3];
    currentAns = answers[3];
    break;

    case musicQues[4]:
    musicQues.forEach(function(question, i) {
      // questionNum.eq(i).text(`Question ${i + 1}`);
      answerBtn.eq(i).text(answers[4][i]);
    });
    correct = answers[4][0];
    current = musicQues[4];
    currentAns = answers[4];
    break;

    case musicQues[5]:
    musicQues.forEach(function(question, i) {
      // questionNum.eq(i).text(`Question ${i + 1}`);
      answerBtn.eq(i).text(answers[5][i]);
    });
    correct = answers[5][0];
    current = musicQues[5];
    currentAns = answers[5];
    break;

    case musicQues[6]:
    musicQues.forEach(function(question, i) {
      // questionNum.eq(i).text(`Question ${i + 1}`);
      answerBtn.eq(i).text(answers[6][i]);
    });
    correct = answers[6][0];
    current = musicQues[6];
    currentAns = answers[6];
    break;

    case musicQues[7]:
    musicQues.forEach(function(question, i) {
      // questionNum.eq(i).text(`Question ${i + 1}`);
      answerBtn.eq(i).text(answers[7][i]);
    });
    correct = answers[7][0];
    current = musicQues[7];
    currentAns = answers[7];
    break;

    case musicQues[8]:
    musicQues.forEach(function(question, i) {
      // questionNum.eq(i).text(`Question ${i + 1}`);
      answerBtn.eq(i).text(answers[8][i]);
    });
    correct = answers[8][0];
    current = musicQues[8];
    currentAns = answers[8];
    break;

    case musicQues[9]:
    musicQues.forEach(function(question, i) {
      // questionNum.eq(i).text(`Question ${i + 1}`);
      answerBtn.eq(i).text(answers[9][i]);
    });
    correct = answers[9][0];
    current = musicQues[9];
    currentAns = answers[9];
    break;

    default:
    console.log('not quite')
}

}
