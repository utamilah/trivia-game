// Create objects that hold questions
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
  ];

  var answeredQuestions = [];

// Create multiple choice object
  var answers = {
     ans1: ['A','B','C'],
     ans2: ['A','B','C'],
     ans3: ['A','B','C'],
     ans4: ['A','B','C'],
     ans5: ['A','B','C'],
     ans6: ['A','B','C'],
     ans7: ['A','B','C'],
     ans8: ['A','B','C'],
     ans9: ['A','B','C'],
     ans10: ['A','B','C']
  };

// Randomize question order
// var allQuestions = musicQues[0];
var allQuestions = musicQues[Math.floor(Math.random() * musicQues.length)];

var answerBtn = $('.answerBtn');
var questionNum = $('.questionNum');
var nextBtn = $('#nextBtn');

// Create click even that starts game at first question, score, and timer
$('#playBtn').on('click', function(){
  // Toggle away intro text
  $('#intro').toggle();
  // Toggle in the quiz questions
  $('#topInfo').attr('style','display: flex');

  $('#quizBox').fadeIn(500,'swing',function(){
    // Add question and answer text to the page
    $('.question').text(allQuestions);
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
  nextBtn.toggle();
}
// Activate function when any answer is clicked
answerBtn.on('click', guess);

// Create a function and click event that will move on to next question
var nextQuestion = function(){
  answerBtn.removeClass('correct incorrect');
  musicQues.pop(allQuestions);
  for (var i = 0; musicQues.length > i; i++){
    $('.question').text(musicQues[i]);
  }
  // Toggle display of next button if answer is clicked
  nextBtn.toggle();
  // If Question Array is empty
  if(musicQues.length === 0){
    $('#quizBox').toggle();
  }
}

nextBtn.on('click', nextQuestion);

// Switch Case that pairs all questions to answers
switch (allQuestions) {
  case musicQues[0]:
  musicQues.forEach(function(question, i) {
    questionNum.eq(i).text(`Question ${i + 1}`);
    answerBtn.eq(i).text(answers.ans1[i]);
  });
  var correct = answers.ans1[1];
  var current = musicQues[0];
  break;

  case musicQues[1]:
  musicQues.forEach(function(question, i) {
    questionNum.eq(i).text(`Question ${i + 1}`);
    answerBtn.eq(i).text(answers.ans2[i]);
  });
  var correct = answers.ans2[2];
  var current = musicQues[1];
  break;

  case musicQues[2]:
  musicQues.forEach(function(question, i) {
    questionNum.eq(i).text(`Question ${i + 1}`);
    answerBtn.eq(i).text(answers.ans3[i]);
  });
  var correct = answers.ans3[0];
  var current = musicQues[2];
  break;

  case musicQues[3]:
  musicQues.forEach(function(question, i) {
    questionNum.eq(i).text(`Question ${i + 1}`);
    answerBtn.eq(i).text(answers.ans4[i]);
  });
  var correct = answers.ans4[1];
  var current = musicQues[3];
  break;

  case musicQues[4]:
  musicQues.forEach(function(question, i) {
    questionNum.eq(i).text(`Question ${i + 1}`);
    answerBtn.eq(i).text(answers.ans5[i]);
  });
  var correct = answers.ans5[1];
  var current = musicQues[4];
  break;

  case musicQues[5]:
  musicQues.forEach(function(question, i) {
    questionNum.eq(i).text(`Question ${i + 1}`);
    answerBtn.eq(i).text(answers.ans6[i]);
  });
  var correct = answers.ans6[2];
  var current = musicQues[5];
  break;

  case musicQues[6]:
  musicQues.forEach(function(question, i) {
    questionNum.eq(i).text(`Question ${i + 1}`);
    answerBtn.eq(i).text(answers.ans7[i]);
  });
  var correct = answers.ans7[0];
  var current = musicQues[6];
  break;

  case musicQues[7]:
  musicQues.forEach(function(question, i) {
    questionNum.eq(i).text(`Question ${i + 1}`);
    answerBtn.eq(i).text(answers.ans8[i]);
  });
  var correct = answers.ans8[0];
  var current = musicQues[7];
  break;

  case musicQues[8]:
  musicQues.forEach(function(question, i) {
    questionNum.eq(i).text(`Question ${i + 1}`);
    answerBtn.eq(i).text(answers.ans9[i]);
  });
  var correct = answers.ans9[1];
  var current = musicQues[8];
  break;

  case musicQues[9]:
  musicQues.forEach(function(question, i) {
    questionNum.eq(i).text(`Question ${i + 1}`);
    answerBtn.eq(i).text(answers.ans10[i]);
  });
  var correct = answers.ans10[1];
  var current = musicQues[9];
  break;

  default:

}
