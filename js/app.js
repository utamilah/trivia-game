// Create objects that hold questions
  var musicQues = [
    'Pharetra Tristique Ridiculus Mattis Ullamcorper',
    'Ullamcorper Cursus Fermentum Ornare Sem',
    'Donec id elit non mi porta gravida at eget metus.',
    'Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
    'Sem Justo Vulputate Fringilla',
    'Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
    'Aenean Euismod Sit Mattis Pellentesque',
    'Fermentum Nibh Aenean',
    'Condimentum Fringilla Risus Ornare Euismod',
    'Egestas Ridiculus Quam Pellentesque'
  ];

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
var allQuestions = musicQues[0];
// var allQuestions = musicQues[Math.floor(Math.random() * musicQues.length)];

var answerBtn = $('.answerBtn');
var questionNum = $('.questionNum');
var nextBtn = $('#nextBtn');
var guess = function(){
  var txt = $(this).text();
  if (txt === correct) {
    $(this).addClass('correct');
  } else {
    $(this).addClass('incorrect');
    for (var i = 0; answerBtn.length > i; i++){
      var button = answerBtn.eq(i);
      if (button.text() === correct) {
        button.addClass('correct');
      }
    }
  }
  // Toggle display of next button if answer is clicked
  $('#nextBtn').toggle();
}
// Activate function when any answer is clicked
answerBtn.on('click', guess);



// Switch Case that pairs all questions to answers
switch (allQuestions) {
  case musicQues[0]:
  musicQues.forEach(function(question, i) {
    questionNum.eq(i).text(`Question ${i + 1}`);
    answerBtn.eq(i).text(answers.ans1[i]);
  });
  var correct = answers.ans1[1];
  break;
  case musicQues[1]:
  musicQues.forEach(function(question, i) {
    questionNum.eq(i).text(`Question ${i + 1}`);
    answerBtn.eq(i).text(answers.ans2[i]);
  });
  var correct = answers.ans1[2];
  break;

  case musicQues[2]:
  musicQues.forEach(function(question, i) {
    questionNum.eq(i).text(`Question ${i + 1}`);
    answerBtn.eq(i).text(answers.ans3[i]);
  });
  var correct = answers.ans1[0];
  break;

  case musicQues[3]:
  musicQues.forEach(function(question, i) {
    questionNum.eq(i).text(`Question ${i + 1}`);
    answerBtn.eq(i).text(answers.ans4[i]);
  });
  var correct = answers.ans1[1];
  break;

  case musicQues[4]:
  musicQues.forEach(function(question, i) {
    questionNum.eq(i).text(`Question ${i + 1}`);
    answerBtn.eq(i).text(answers.ans5[i]);
  });
  var correct = answers.ans1[1];
  break;

  case musicQues[5]:
  musicQues.forEach(function(question, i) {
    questionNum.eq(i).text(`Question ${i + 1}`);
    answerBtn.eq(i).text(answers.ans6[i]);
  });
  var correct = answers.ans1[2];
  break;

  case musicQues[6]:
  musicQues.forEach(function(question, i) {
    questionNum.eq(i).text(`Question ${i + 1}`);
    answerBtn.eq(i).text(answers.ans7[i]);
  });
  var correct = answers.ans1[0];
  break;

  case musicQues[7]:
  musicQues.forEach(function(question, i) {
    questionNum.eq(i).text(`Question ${i + 1}`);
    answerBtn.eq(i).text(answers.ans8[i]);
  });
  var correct = answers.ans1[0];
  break;

  case musicQues[8]:
  musicQues.forEach(function(question, i) {
    questionNum.eq(i).text(`Question ${i + 1}`);
    answerBtn.eq(i).text(answers.ans9[i]);
  });
  var correct = answers.ans1[1];
  break;

  case musicQues[9]:
  musicQues.forEach(function(question, i) {
    questionNum.eq(i).text(`Question ${i + 1}`);
    answerBtn.eq(i).text(answers.ans10[i]);
  });
  var correct = answers.ans1[1];
  break;
  default:

}

// Determine if answer is correct/incorrect
var giveAnswer = function(){
  // Need to somehow access button value
};

$('.answerBtn').on('click', giveAnswer);


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
